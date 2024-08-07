import { expect, describe, it } from 'vitest';
import levels from '../src/basic.js';

// Edit an assertion and save to see HMR in action

describe('levels', () => {
  it('should pass', () => {
    expect(levels.debug).toBe(0);
    expect(levels.info).toBe(1);
    expect(levels.warn).toBe(2);
    expect(levels.error).toBe(3);
    expect(levels.fatal).toBe(4);
  });
});
