- `UseStrict` - Determines comparison strictness. (e.g. `TypeA extends TypeB` (Loose) vs. `[TypeA] extends [TypeB]`)
- `UseReversed` - Determines direction of comparison (e.g. `TypeA extends TypeB` (Forward) vs `TypeB extends TypeA`)
- `UseInversion` - Flips the result if AsInverted.
- `UseUnsafe` - Converts a `boolean` result (type check) to `true` is Unsafe, otherwise retains the result.
- `UseDefault` - Used with AsStream to return a specific type
- `UseStream` - A simple boolean result if AsPredicate, otherwise maps to never or the DefaultType

| ID | `UseStream`   | `UseDefault`             | `UseReversed`         | `UseInversion`        | `UseStrict`         | `UseUnsafe`        | `Description` |
| -- | ------------- | ------------------------ | --------------------- | --------------------- | ------------------- | ------------------ | ------------- |
| 1  | `AsFilter`    | None                     | `AsForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 4  | `AsFilter`    | None                     | `AsForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 3  | `AsFilter`    | None                     | `AsForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 7  | `AsFilter`    | None                     | `AsForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 2  | `AsFilter`    | None                     | `AsForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 6  | `AsFilter`    | None                     | `AsForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 5  | `AsFilter`    | None                     | `AsForward` (default) | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 8  | `AsFilter`    | None                     | `AsForward` (default) | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 9  | `AsFilter`    | None                     | `AsReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 12 | `AsFilter`    | None                     | `AsReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 11 | `AsFilter`    | None                     | `AsReversed`          | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 15 | `AsFilter`    | None                     | `AsReversed`          | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 10 | `AsFilter`    | None                     | `AsReversed`          | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 14 | `AsFilter`    | None                     | `AsReversed`          | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 13 | `AsFilter`    | None                     | `AsReversed`          | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 16 | `AsFilter`    | None                     | `AsReversed`          | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 17 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 20 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 19 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 23 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 18 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 22 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 21 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsForward` (default) | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 24 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsForward` (default) | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 25 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 28 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 27 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsReversed`          | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 31 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsReversed`          | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 26 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsReversed`          | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 30 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsReversed`          | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 29 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsReversed`          | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 32 | `AsFilter`    | `DefaultOf<DefaultType>` | `AsReversed`          | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 33 | `AsPredicate` | None                     | `AsForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 36 | `AsPredicate` | None                     | `AsForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 35 | `AsPredicate` | None                     | `AsForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 37 | `AsPredicate` | None                     | `AsForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 34 | `AsPredicate` | None                     | `AsForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 38 | `AsPredicate` | None                     | `AsForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 39 | `AsPredicate` | None                     | `AsForward` (default) | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 40 | `AsPredicate` | None                     | `AsForward` (default) | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 41 | `AsPredicate` | None                     | `AsReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 44 | `AsPredicate` | None                     | `AsReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 43 | `AsPredicate` | None                     | `AsReversed`          | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 45 | `AsPredicate` | None                     | `AsReversed`          | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 42 | `AsPredicate` | None                     | `AsReversed`          | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 46 | `AsPredicate` | None                     | `AsReversed`          | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 47 | `AsPredicate` | None                     | `AsReversed`          | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 48 | `AsPredicate` | None                     | `AsReversed`          | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |

> [!NOTE]
> `DefaultOf` is ignored with `AsPredicate`.

#### Condition (Default)

| Name | `UseCondition`                    | `UseReversed`          | `UseInversion`        | `UseStrict`         | `UseUnsafe`        | `Description` |
| ---- | --------------------------------- | ---------------------- | --------------------- | ------------------- | ------------------ | ------------- |
| 1    | `AsCondition` (default)           | `UseForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 2    | `AsCondition` (default)           | `UseForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 3    | `AsCondition` (default)           | `UseForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 4    | `AsCondition` (default)           | `UseForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 5    | `AsCondition` (default)           | `UseForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 6    | `AsCondition` (default)           | `UseForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 7    | `AsCondition` (default)           | `UseForward` (default) | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 8    | `AsCondition` (default)           | `UseForward` (default) | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 9    | `AsCondition` (default)           | `UseReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 10   | `AsCondition` (default)           | `UseReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 11   | `AsCondition` (default)           | `UseReversed`          | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 12   | `AsCondition` (default)           | `UseReversed`          | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 13   | `AsCondition` (default)           | `UseReversed`          | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 14   | `AsCondition` (default)           | `UseReversed`          | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 15   | `AsCondition` (default)           | `UseReversed`          | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 16   | `AsCondition` (default)           | `UseReversed`          | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 17   | `Then<ThenType>`                  | `UseForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 18   | `Then<ThenType>`                  | `UseForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 19   | `Then<ThenType>`                  | `UseForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 20   | `Then<ThenType>`                  | `UseForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 21   | `Then<ThenType>`                  | `UseForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 22   | `Then<ThenType>`                  | `UseForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 23   | `Then<ThenType>`                  | `UseForward` (default) | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 24   | `Then<ThenType>`                  | `UseForward` (default) | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 25   | `Then<ThenType>`                  | `UseReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 26   | `Then<ThenType>`                  | `UseReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 27   | `Then<ThenType>`                  | `UseReversed`          | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 28   | `Then<ThenType>`                  | `UseReversed`          | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 29   | `Then<ThenType>`                  | `UseReversed`          | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 30   | `Then<ThenType>`                  | `UseReversed`          | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 31   | `Then<ThenType>`                  | `UseReversed`          | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 32   | `Then<ThenType>`                  | `UseReversed`          | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 33   | `Else<ElseType>`                  | `UseForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 34   | `Else<ElseType>`                  | `UseForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 35   | `Else<ElseType>`                  | `UseForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 36   | `Else<ElseType>`                  | `UseForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 37   | `Else<ElseType>`                  | `UseForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 38   | `Else<ElseType>`                  | `UseForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 39   | `Else<ElseType>`                  | `UseForward` (default) | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 40   | `Else<ElseType>`                  | `UseForward` (default) | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 41   | `Else<ElseType>`                  | `UseReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 42   | `Else<ElseType>`                  | `UseReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 43   | `Else<ElseType>`                  | `UseReversed`          | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 44   | `Else<ElseType>`                  | `UseReversed`          | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 45   | `Else<ElseType>`                  | `UseReversed`          | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 46   | `Else<ElseType>`                  | `UseReversed`          | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 47   | `Else<ElseType>`                  | `UseReversed`          | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 48   | `Else<ElseType>`                  | `UseReversed`          | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 49   | `ConditionOf<ThenType, ElseType>` | `UseForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 50   | `ConditionOf<ThenType, ElseType>` | `UseForward` (default) | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 51   | `ConditionOf<ThenType, ElseType>` | `UseForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 52   | `ConditionOf<ThenType, ElseType>` | `UseForward` (default) | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 53   | `ConditionOf<ThenType, ElseType>` | `UseForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 54   | `ConditionOf<ThenType, ElseType>` | `UseForward` (default) | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 55   | `ConditionOf<ThenType, ElseType>` | `UseForward` (default) | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 56   | `ConditionOf<ThenType, ElseType>` | `UseForward` (default) | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
| 57   | `ConditionOf<ThenType, ElseType>` | `UseReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsSafe` (default) |               |
| 58   | `ConditionOf<ThenType, ElseType>` | `UseReversed`          | `AsInitial` (default) | `AsLoose` (default) | `AsUnsafe`         |               |
| 59   | `ConditionOf<ThenType, ElseType>` | `UseReversed`          | `AsInitial` (default) | `AsStrict`          | `AsSafe` (default) |               |
| 60   | `ConditionOf<ThenType, ElseType>` | `UseReversed`          | `AsInitial` (default) | `AsStrict`          | `AsUnsafe`         |               |
| 61   | `ConditionOf<ThenType, ElseType>` | `UseReversed`          | `AsInverted`          | `AsLoose` (default) | `AsSafe` (default) |               |
| 62   | `ConditionOf<ThenType, ElseType>` | `UseReversed`          | `AsInverted`          | `AsLoose` (default) | `AsUnsafe`         |               |
| 63   | `ConditionOf<ThenType, ElseType>` | `UseReversed`          | `AsInverted`          | `AsStrict`          | `AsSafe` (default) |               |
| 64   | `ConditionOf<ThenType, ElseType>` | `UseReversed`          | `AsInverted`          | `AsStrict`          | `AsUnsafe`         |               |
