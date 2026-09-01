import type { $AsFalseFinal } from '@kz/types/capabilities';

export type _AndMap = {
  'true-true': true;
  'true-false': false;
  'false-true': false;
  'false-false': false;
  'boolean-boolean': $AsFalseFinal;
  'boolean-true': boolean;
  'boolean-false': $AsFalseFinal;
  'true-boolean': boolean;
  'false-boolean': false;
};