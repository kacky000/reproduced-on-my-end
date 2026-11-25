// One line from a hopeless, cheerful tech support agent.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const reply =
  "Great news, I've reproduced the issue on my end, so now neither of us can work! Is there anything else I can help you with today?";

const length = [...reply].length;
if (length < 1 || length > 199) throw new Error(`reply is ${length} characters`);

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, reply, "utf8");
