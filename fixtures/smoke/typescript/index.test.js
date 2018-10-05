const { bootstrap, isSuccessfulTest } = require('../../utils');

beforeEach(async () => {
  await bootstrap({ directory: global.testDirectory, template: __dirname });
});

describe('typescript support', () => {
  it('passes tests', async () => {
    await isSuccessfulTest({
      directory: global.testDirectory,
      jestEnvironment: 'node',
    });
  });
});
