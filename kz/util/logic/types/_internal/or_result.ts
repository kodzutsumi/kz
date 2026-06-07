// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { _Majority } from './_majority.ts';

/**
 * Type representing the result of a logical OR operation based on the operands.
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @internal
 */
export type OrResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = {
  'true/true': true;
  'true/false': true;
  'false/true': true;
  'false/false': false;
  'boolean/boolean': _Majority<true>;
  'boolean/true': _Majority<true>;
  'boolean/false': _Majority<true>;
  'true/boolean': _Majority<true>;
  'false/boolean': boolean;
}[`${OperandA}/${OperandB}`];
