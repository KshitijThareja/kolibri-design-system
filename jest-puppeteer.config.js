const ci = Boolean(process.env.CI || false);

const baseOptions = {
  launch: {
    headless: true,
    timeout: 180000,
  },
  browserContext: 'default',
}

const ciPipelineOptions = {
  launch: {
    executablePath: '/usr/bin/google-chrome-stable',
    headless: true,
    args: [
      '--ignore-certificate-errors',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ]
  },
  server: {
    command: 'yarn dev-only',
    port: 4000
  }
}

module.exports = ci ? ciPipelineOptions : baseOptions;
