import type { $AsFinal } from './$as_final.ts';
import type { $AsRunoff } from './$as_runoff.ts';
import type { $UseFinal } from './$use_final.ts';

export type $Finalize<
  Operand extends boolean | $UseFinal,
  $Settings extends $UseFinal = $AsRunoff
> = Operand extends $UseFinal<infer Vote>
  ? $Settings extends $AsFinal
    ? Vote
    : boolean
  : Operand;