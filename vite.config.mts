import { defineProject } from "vitest/config";

export default defineProject({
  test: {
    include: ["./test/**/*.test.js"],
    exclude: ["./test/fixtures/**/*"],
  },
});
