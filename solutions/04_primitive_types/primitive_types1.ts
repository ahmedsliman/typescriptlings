function main(): void {
  // `"5" + 3` is string concatenation (`"53"`), not addition.
  const x: number = 5;
  const y: number = 3;
  const sum: number = x + y;
  console.log(`sum is ${sum}`);
}

main();
