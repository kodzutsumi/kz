declare const _MajorityKeyString = 'kz.i11n:use_vote';

export type _Majority<Vote extends boolean = boolean> = {
  [_MajorityKeyString]: Vote;
};