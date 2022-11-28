interface Person {
  name: string;
  age: number;
  id: number;
  sex: string;
}

type C = Omit<Person, 'name'>;

// type T = keyof Person;

// type Obj = {
//   [p in T]: Person[p]
// }

type Brand = 'iphone' | 'xiaomi' | 'honor';
type Memory = '16G' | '64G';
type ItemType = 'official' | 'second-hand';

type SKU = `${Brand}-${Memory}-${ItemType}`;

type Up<T extends string> = `${Capitalize<T>}`;
type S = Up<'xiumu'>;

declare let window: Window & typeof globalThis;
