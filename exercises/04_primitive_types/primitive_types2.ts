function main(): void {
  // TODO: Fix the annotations so `name` is a string and `age` is a number.
  const person: [string, number] = ["Alice", 30];
  const name: number = person[0];
  const age: string = person[1];
  console.log(`${name} is ${age}`);
}

main();
