# Grammar??

| op | operator | desc | m1 | m2 |
| -- | -- | -- | -- | -- |
| * | R | ref | `title` | -- |
| _ | S | start | `<ref>` | -- |
| . | E | end | `<ref>` | -- |
| > | L | link ref | `<ref>` | `<ref>` |
| >> | l | link data | `<ref>` | `<data>` |
| < | T | time override | `<ref>` | `<time (MM/DD/YYYY [HH:MM:SS])>` |
| & | I | instance | `<ref>` | -- |

## Conventions

### `*expr*`
Expression

### `(*expr1*|*expr2*)`
Union of expressions

### `[*expr*]`
Optional expression

## Entry format
*`id`***::***`dt`***::(***`operator`***|***`op`***)::***`m1`***[::***`m2`***]**