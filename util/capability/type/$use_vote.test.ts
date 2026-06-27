import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $AsCondition,
  $AsFalseMajority,
  $AsMajority,
  $AsRunoff,
  $AsTie,
  $AsTrueMajority,
  $PickVote,
  $UseVote,
  $UseVoteKey,
  $UseVoteKeyString,
  $Vote,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('Capability $UseVote', () => {
  describe('$UseVoteKeyString', () => {
    it('should be "kz.i11n:use_vote"', () => {
      type Expected = 'kz.i11n:use_vote';
      type Actual = typeof $UseVoteKeyString;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseVoteKey', () => {
    it('should be "kz.i11n:use_vote"', () => {
      type Expected = 'kz.i11n:use_vote';
      type Actual = $UseVoteKey;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseVote', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseVote<string>;
    });

    it('should be keyed by the $UseVoteKey', () => {
      type Expected = $UseVoteKey;
      type Actual = keyof $UseVote;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should have a boolean value by default', () => {
      type Expected = {
        [$UseVoteKeyString]: boolean;
      };
      type Actual = $UseVote;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsRunoff (default/implied)', () => {
    it('should be the false variant of $UseVote', () => {
      type Expected = $UseVote<false>;
      type Actual = $AsRunoff;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsRunoff;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsMajority', () => {
    it('should be the true variant of $UseVote', () => {
      type Expected = $UseVote<true>;
      type Actual = $AsMajority;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsMajority;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsFalseMajority (default/implied)', () => {
    it('should be the false variant of $UseVote', () => {
      type Expected = $UseVote<false>;
      type Actual = $AsFalseMajority;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsFalseMajority;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsTrueMajority', () => {
    it('should be the true variant of $UseVote', () => {
      type Expected = $UseVote<true>;
      type Actual = $AsTrueMajority;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsTrueMajority;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsTie', () => {
    it('should be the boolean variant of $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsTie;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsTie;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickVote', () => {
    it('should pick the $UseVote value from a settings object', () => {
      type Expected = $UseVote<false>;
      type Settings = $AsRunoff & $AsCondition;
      type Actual = $PickVote<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsRunoff if the settings object does not have a $UseVote value', () => {
      type Expected = $AsRunoff;
      type Settings = $AsCondition;
      type Actual = $PickVote<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Vote', () => {
    describe('$AsRunoff (default/implied)', () => {
      describe('with a boolean value', () => {
        it('should return true for true', () => {
          type Expected = true;
          type Actual = $Vote<true>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for false', () => {
          type Expected = false;
          type Actual = $Vote<false>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return a boolean for boolean', () => {
          type Expected = boolean;
          type Actual = $Vote<boolean>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
      
      describe('with a $Vote value', () => {
        it('should return boolean for $AsTrueMajority', () => {
          type Expected = boolean;
          type Actual = $Vote<$AsTrueMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return boolean for $AsFalseMajority', () => {
          type Expected = boolean;
          type Actual = $Vote<$AsFalseMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return a boolean for $AsTie', () => {
          type Expected = boolean;
          type Actual = $Vote<$AsTie>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
    
    describe('$AsMajority', () => {
      describe('with a boolean value', () => {
        it('should return true for true', () => {
          type Expected = true;
          type Actual = $Vote<true, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for false', () => {
          type Expected = false;
          type Actual = $Vote<false, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return a boolean for boolean', () => {
          type Expected = boolean;
          type Actual = $Vote<boolean, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
      
      describe('with a $Vote value', () => {
        it('should return true for $AsTrueMajority', () => {
          type Expected = true;
          type Actual = $Vote<$AsTrueMajority, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for $AsFalseMajority', () => {
          type Expected = false;
          type Actual = $Vote<$AsFalseMajority, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return a boolean for $AsTie', () => {
          type Expected = boolean;
          type Actual = $Vote<$AsTie, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });
});