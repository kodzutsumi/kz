import type { Brand } from '@kz/util/nominal';
import type { I11N_DOCS_HOST, I11N_EX2_PATH } from '../../../internal/constants.ts';
import type { KnownTypeExceptions } from './_internal/mod.ts';
import type { $OfType, $OfId } from '@kz/util/capability';

type HOST = typeof I11N_DOCS_HOST;
type EX2_PATH = typeof I11N_EX2_PATH;

//TODO(@ebntly): Get range and identities of exceptions for TypeExceptions

/**
 * A `TypeException` is a branded type that represents an exception to a type
 * rule in the codebase. It includes information about the reference type, a
 * message describing the exception, and a URL pointing to documentation for
 * the exception.
 * 
 * @template Type - The reference type that the exception applies to.
 * @template Message - A string literal type that represents the exception message.
 */
export type TypeException<Type, Message extends string> =
  Message extends keyof KnownTypeExceptions
    ? {
      exception: true;
      referenceType: Type;
      message: KnownTypeExceptions[Message];
      url: `${HOST}/${EX2_PATH}/${Message}`;
    } & 'TypeException'
    : {
      exception: true;
      referenceType: Type;
      message: Message;
      url: `${HOST}/${EX2_PATH}/0x0?message=${Message}`;
    } & 'TypeException';