// Copyright 2020 - present integereleven. All rights reserved. MIT license.


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

    return `
    <div class="namespaceItem">
      <div class="docNodeKindIcon">
        <div class="text-TypeAlias bg-TypeAlias/15 dark:text-TypeAliasDark dark:bg-TypeAliasDark/15" title="Type Alias">M</div>
      </div>
      <div class="namespaceItemContent">
        <a href="${
      pkg.split('/')[2]
    }/index.html" title="${name} - v${version}">${name} - v${version}</a>
      </div>
    </div>`;
  }));
  const indexFile = new URL('./doc_index.html', BASE_URL);
  const indexTemplate = await Deno.readTextFile(indexFile);
  const indexContent = indexTemplate.replace(
    '<!-- MODULE_ITEMS_PLACEHOLDER -->',
    items.join('\n    '),
  );
  const indexUrl = new URL('./docs/kz/index.html', root);

  await Deno.writeTextFile(indexUrl, indexContent);

  console.info(`Generated documentation index at: ${indexUrl}`);
}

main();
