# Monday Morning Punchlines

[![make.fun · u-gentle-badger-68-monday-morning-punchlines-709645dc](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/chepster4/u-gentle-badger-68-monday-morning-punchlines-709645dc/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/chepster4/u-gentle-badger-68-monday-morning-punchlines-709645dc/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)

One joke about Monday mornings, 98 characters, entered in the
[make.fun bounty](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc):

> Monday morning called a meeting with my weekend. The weekend didn't show. Monday billed it anyway.

Monday plays the overbearing boss: it summons the weekend to a meeting,
the weekend no-shows, and Monday charges it anyway. No alarm, no coffee,
no "I hate Mondays" — just a meeting that bills you for not attending.

## How it works

`main.ts` (Node 22, **standard library only** — no network, no files read)
writes the single joke to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when the harness sets it), and refuses
to run if the joke ever falls outside the gate of 1–200 characters.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```
