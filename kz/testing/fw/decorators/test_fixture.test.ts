import { assertEquals } from '@std/assert';
import { Test, TestFixture, TestGroup } from '@kz/testing/fw';

@TestFixture('Test fixture')
class _ {
  @Test('Hello World')
  testHelloWorld(): void {
    assertEquals(1 + 1, 2);
  }

  @TestGroup('test group')
  @Test('Hello World 2')
  testHelloWorld2(): void {
    assertEquals(1 + 1, 2);
  }
}
