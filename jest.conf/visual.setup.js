import './setup';
import { percySnapshot } from '@percy/puppeteer';

// Set the test type to visual
process.env.TEST_TYPE = 'visual';

global.percySnapshot = percySnapshot;

const WAIT_FOR_SELECTOR = '#testing-playground';

const checkPageLoad = async (url, timeout = 30000) => {
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout });
    await page.waitForSelector(WAIT_FOR_SELECTOR, { timeout });
    console.log('Visual testing playground is loaded.');
  } catch (error) {
    throw new Error('Failed to load visual testing playground.');
  }
};

beforeAll(async () => {
  await checkPageLoad('http://localhost:4000/testing-playground', 30000);
});
