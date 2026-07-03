/**
 * Determines if a type is `void` by checking if it can be assigned to and from
 * `void`.
 * 
 * @template Type - The type to check for being `void`.
 * @returns A boolean indicating whether the type is `void`.
 * @internal
 */
export type SimpleIsVoid<Type> = [Type, void] extends [void, Type] ? true
  : false;
