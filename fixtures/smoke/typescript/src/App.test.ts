import App from './App';

it('reads a typescript file with no syntax error', () => {
  const app = new App();
  expect(app.foo).toEqual({ bar: true });
});
