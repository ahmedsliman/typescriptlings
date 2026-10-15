function bigger(a: number, b: number): number {
  // Every branch must return the declared return type.
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function main(): void {
  console.log(bigger(10, 8));
  console.log(bigger(4, 9));
}

main();
