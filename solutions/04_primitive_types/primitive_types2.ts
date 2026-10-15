function main(): void {
  // Each tuple position has its own type: index 0 is `string`, index 1 is `number`.
  const person: [string, number] = ["Alice", 30];
  const name: string = person[0];
  const age: number = person[1];
  console.log(`${name} is ${age}`);
}

main();
