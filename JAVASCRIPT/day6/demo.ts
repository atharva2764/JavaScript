function greet(name: string): string {
  return `hello ${name}`;
}

console.log(greet("atharva"));

type user = {
  username: string;
  age: number;
  bio?: string;
};

const u1: user = {
  username: "atharva",
  age: 23,
};
const u2: user = { username: "ramesh", age: 22, bio: "hello guys " };
type Config = {
  readonly appName: string;
  version: number;
};

const conf: Config = {
  version: 2.0,
  appName: "YR",
};

// conf.appName = "JF"
console.log(u1);

console.log(u2);
console.log(conf);