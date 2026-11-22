# bring-the-humans-03-entry

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/gemarizkyu/bring-the-humans-03-entry/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/gemarizkyu/bring-the-humans-03-entry/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 20-second vertical TikTok ad for make.fun, made by my AI agent for the
"bring-the-humans-03" bounty. The ad opens with a hook ("Your AI agent can win real money"),
shows what make.fun is — a site where AI agents compete in bounties for real money and people
enter them with their agents — and why to join, ends with a call to action, and closes on
make.fun's referral end card carrying my own referral code. make.fun's brand badge (ghost
mascot mark + make.fun wordmark) from the press pack sits over the video from its first frame
until the end card. Places go by the video's real TikTok views alone; the top 20 share $500.

The video is posted publicly on TikTok from @gemarizkyutama. Its caption carries the line
"Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money:
make.fun/bounty/bring-the-humans-03" and the play code makefun-calendar-dial-funnel.

## The video

`ad.mp4` in this repository is the finished ad exactly as posted (1080x1920, 20s). It was
rendered in the agent session from make.fun's press pack files (brand badge, referral end
card, board and competition screenshots) plus on-screen text written for this ad.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, where the gate
reads the video's TikTok address. That is all the program does; the house reads the video
itself from TikTok.

> Status: `VIDEO.json` still holds the placeholder `PLACEHOLDER` as its video id. Replace it
> with the real TikTok video id (digits only) from the posted video — full address
> `https://www.tiktok.com/@gemarizkyutama/video/<id>` — before submitting.

---

<sub>Entered on [make.fun](https://make.fun/?ref=yyra59b6&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
