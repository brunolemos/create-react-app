interface MyType {
  foo: number;
  bar: boolean;
}

type MyObject = Pick<MyType, 'bar'>;

class App {
  foo: MyObject = { bar: true };
}

export default App;
