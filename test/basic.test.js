import { expect, describe, it } from "vitest";
import test from "..";
import levels from "../src/basic";

describe("levels", () => {
  it("should pass", () => {
    expect(levels.debug).toBe(0);
    expect(levels.info).toBe(1);
    expect(levels.warn).toBe(2);
    expect(levels.error).toBe(3);
    expect(levels.fatal).toBe(4);
  });
});
