import type { $AsTrueFinal } from '@kz/types/capabilities';

export type _OrMap = {
  'true-true': true;
  'true-false': true;
  'false-true': true;
  'false-false': false;
  'boolean-boolean': $AsTrueFinal;
  'boolean-true': true;
  'boolean-false': boolean;
  'true-boolean': true;
  'false-boolean': boolean;
};