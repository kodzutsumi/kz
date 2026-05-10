// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * Evaluates the result of a logical AND operation between two boolean operands.
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @internal
 */
export type AndResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = {
  'true/true': true;
  'true/false': false;
  'false/true': false;
  'false/false': false;
  'boolean/boolean': false;
  'boolean/true': boolean;
  'boolean/false': false;
  'true/boolean': boolean;
  'false/boolean': false;
}[`${OperandA}/${OperandB}`];
