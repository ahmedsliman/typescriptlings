function isEven(n: number): boolean {
  // An expression ending in `;` is a statement and returns nothing.
  // Remove the `;` or add `return` to return the value.
  return n % 2 === 0;
}

function main(): void {
  console.log(isEven(4));
  console.log(isEven(7));
}

main();
