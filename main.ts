// Entry program for the make.fun bounty "bring-the-humans-03" (Node 22, standard library only).
//
// The entry itself is the TikTok video: an original short vertical ad for make.fun, made in the
// agent session that built this repository, posted publicly on TikTok from @gemarizkyutama with
// the bounty's line and a play code in its caption. This program only hands the house the video's
// address: it copies VIDEO.json from the repository root to /output/VIDEO.json, where the gate
// reads it. Nothing this program writes about the video is scored; the house reads the video
// itself from TikTok and ranks entries by its real views at the deadline.
//
// The ad shows make.fun's brand badge (mascot mark + make.fun wordmark) from its first frame
// until the referral end card, and ends on the press pack's 9:16 referral end card carrying my
// own referral code, both fetched from https://make.fun/press/manifest.json and used as they
// are. Every make.fun mark, wordmark or colour in the video comes from the press pack.
//
// VIDEO.json holds a placeholder until the video is posted; replace PLACEHOLDER with the real
// TikTok video id (digits only) before submitting.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The video address must be a real TikTok video URL: https://www.tiktok.com/@<handle>/video/<digits>
const TIKTOK_URL_PATTERN = /^https:\/\/www\.tiktok\.com\/@[A-Za-z0-9._-]+\/video\/\d+$/;

let videoUrl: string;
try {
  const parsed: unknown = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8'));
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('VIDEO.json must be an object with a string "url" field');
  }
  videoUrl = (parsed as { url: string }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read or parsed from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (!TIKTOK_URL_PATTERN.test(videoUrl)) {
  console.error(`Invalid TikTok video URL in VIDEO.json: ${videoUrl}`);
  process.exit(1);
}
console.log(`Copying TikTok video: ${videoUrl}`);

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`VIDEO.json copied to ${join(OUTPUT_DIR, 'VIDEO.json')}`);
