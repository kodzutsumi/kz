const BASE_URL = import.meta.url;

async function main(): Promise<void> {
  const root = new URL('../', BASE_URL);
  const denoPkg = new URL('./deno.json', root);
  const data = await Deno.readTextFile(denoPkg);
  const config = JSON.parse(data);
  const packages: string[] = config.workspace || [];

  const items = await Promise.all(packages.map(async (pkg) => {
    console.log(`Processing workspace: ${pkg}`);
    const workspaceUrl = new URL(`./${pkg}/deno.json`, root);
    const workspaceData = await Deno.readTextFile(workspaceUrl);
    const { name, version } = JSON.parse(workspaceData);
    const partialFile = new URL('./resources/namespace.partial.html', BASE_URL);
    const partialTemplate = await Deno.readTextFile(partialFile);
    const packaged = partialTemplate.replace(
      /\$\{pkg\}/g,
      pkg.split('/')[1],
    );
    const named = packaged.replace(
      /\$\{name\}/g,
      name,
    );
    const versioned = named.replace(
      /\$\{version\}/g,
      version,
    );

    return versioned;
  }));
  const indexFile = new URL('./resources/doc_index.html', BASE_URL);
  const indexTemplate = await Deno.readTextFile(indexFile);
  const indexContent = indexTemplate.replace(
    '${items}',
    items.join('\n    '),
  );
  const indexUrl = new URL('./docs/index.html', root);

  await Deno.writeTextFile(indexUrl, indexContent);

  console.info(`Generated documentation index at: ${indexUrl}`);
}

main();