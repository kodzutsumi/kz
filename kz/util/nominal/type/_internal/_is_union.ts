import type { Permit } from '@kz/util/lint';

export type _IsUnion<T, U extends T = T> =
    (T extends Permit<'any', '@i11n.kz#any_check'> ?
    (U extends T ? false : true)
        : never) extends false ? false : true