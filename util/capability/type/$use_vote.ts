/**
 * The key for the {@linkcode $UseVote} capability.
 */
export declare const $UseVoteKeyString = 'kz.i11n:use_vote';

/**
 * The key type for the {@linkcode $UseVote} capability.
 */
export type $UseVoteKey = typeof $UseVoteKeyString;

/**
 * A capability specifying support for voting.
 * 
 * Use this capability to indicate support for majority or runoff behavior.
 * 
 * With `AsMajority` as a `boolean` type parameter, it functions as the
 * capability consumer.
 * 
 * @template AsMajority - A boolean indicating whether the behavior is majority (`true`) or runoff (`false`, default/implied).
 */
export type $UseVote<AsMajority extends boolean = boolean> = {
  [$UseVoteKeyString]: AsMajority;
};

/**
 * The majority setting of the {@linkcode $UseVote} capability.
 * 
 * Use this setting to invoke majority behavior.
 * 
 * @see {@linkcode $AsRunoff} for the runoff (default/implied) behavior.
 */
export type $AsMajority = $UseVote<true>;

/**
 * The runoff (default/implied) setting of the {@linkcode $UseVote}
 * capability.
 * 
 * Use this setting to invoke runoff behavior.
 * 
 * @see {@linkcode $AsMajority} for the majority behavior.
 */
export type $AsRunoff = $UseVote<false>;

/**
 * A value defining that the vote has a majority of `true` votes.
 * 
 * @see {@linkcode $AsFalseMajority} for the majority of `false` votes.
 * @see {@linkcode $AsTie} for a tie vote.
 */
export type $AsTrueMajority = $UseVote<true>;

/**
 * A value defining that the vote has a majority of `false` votes.
 * 
 * @see {@linkcode $AsTrueMajority} for the majority of `true` votes.
 * @see {@linkcode $AsTie} for a tie vote.
 */
export type $AsFalseMajority = $UseVote<false>;

/**
 * A value defining that the vote is tied.
 * 
 * @see {@linkcode $AsTrueMajority} for the majority of `true` votes.
 * @see {@linkcode $AsFalseMajority} for the majority of `false` votes.
 */
export type $AsTie = $UseVote<boolean>;

/**
 * A utility type to extract the {@linkcode $UseVote} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseVote} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $AsRunoff}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseVote} setting from.
 * @returns The extracted {@linkcode $UseVote} setting.
 */
export type $PickVote<Settings> = Settings extends $UseVote<infer AsMajority>
  ? $UseVote<AsMajority>
  : $AsRunoff;

type Capabilities = $UseVote;
type Defaults = $AsRunoff;

/**
 * Resolves a {@linkcode $UseVote} value to a boolean value based on the
 * specified voting capabilities.
 * 
 * Some logic result pairs can result in a non-unanimous majority for a 
 * specific boolean result vote, which is represented by the `$UseVote` type.
 * This type can be resolved to the majority boolean value based on the voting
 * capabilities specified in the settings.
 * 
 * Note that there are some cases where the vote may have no majority, and will
 * result in a `boolean` type instead of a specific `true` or `false` value.
 * 
 * ## Capabilities
 * - {@linkcode $UseVote} - Determines whether to resolve to the majority vote or return a boolean when there is no majority.
 * 
 * ### Default/implied
 * - {@linkcode $AsRunoff} - Default and implied setting where non-unanimous votes result in a result of `boolean`.
 * 
 * @template Operand - The boolean operand or vote to evaluate.
 * @template Settings - The capabilities settings.
 * @returns The resolved boolean value based on the operand and settings.
 */
export type $Vote<
  Operand extends boolean | $UseVote,
  Settings extends Capabilities = Defaults,
> = Operand extends $UseVote<infer Vote>
  ? Settings extends $AsMajority
    ? Vote
    : boolean
  : Operand;