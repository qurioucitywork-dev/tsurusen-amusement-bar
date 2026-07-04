import { spawnSync } from "node:child_process";

const isWindows = process.platform === "win32";
const result = spawnSync(isWindows ? "cmd" : "pnpm", isWindows ? ["/c", "pnpm", "build"] : ["build"], {
  env: {
    ...process.env,
    STATIC_EXPORT: "1",
  },
  stdio: "inherit",
});

process.exit(result.status ?? 1);
