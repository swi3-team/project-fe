import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    watch: false,
    css: false,
    setupFiles: 'vitest.setup.ts',
    coverage: {
      provider: 'istanbul', // or 'v8'
    },
  },
});
