import { test as base } from '@playwright/test';

type MyFixtures = {
  sites: string[];
};

export const test = base.extend<MyFixtures>({
  sites: async ({}, use) => {
    await use([
      'https://amusnet.com/',
      'https://egt-digital.com/',
    ]);
  },
});

export const expect = test.expect;
