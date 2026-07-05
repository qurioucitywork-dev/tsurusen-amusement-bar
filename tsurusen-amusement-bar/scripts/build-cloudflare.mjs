import { spawnSync } from "node:child_process";

const isWindows = process.platform === "win32";
const result = spawnSync(isWindows ? "cmd" : "pnpm", isWindows ? ["/c", "pnpm", "build"] : ["build"], {
  env: {
    ...process.env,
    CIRCLE_NODE_TOTAL: process.env.CIRCLE_NODE_TOTAL || "2",
    NODE_OPTIONS: process.env.NODE_OPTIONS || "--max-old-space-size=4096",
    STATIC_EXPORT: "1",
  },
  stdio: "inherit",
});

process.exit(result.status ?? 1);
