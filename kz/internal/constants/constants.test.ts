import { Test, TestFixture, TestGroup, TestNames } from '@kz/testing/fw';
import { assertEquals } from '@std/assert';
import { I11N_DOCS_HOST, I11N_EX2_PATH } from '@kz/internal/constants';

@TestFixture()
class _ {
  @Test('should be a specific URL')
  @TestGroup('I11N_DOCS_HOST')
  [TestNames.name](): void {
    const expected = 'https://docs.i11n.io';
    const actual = I11N_DOCS_HOST;

    assertEquals(actual, expected);
  }

  @Test('should be a specific path')
  @TestGroup('I11N_EX2_PATH')
  [TestNames.name](): void {
    const expected = 'ex2';
    const actual = I11N_EX2_PATH;

    assertEquals(actual, expected);
  }
}
