function bigger(a: number, b: number): number {
  // TODO: Fix the `else` branch so both branches return a number.
  if (a > b) {
    return a;
  } else {
    return "b is bigger";
  }
}

function main(): void {
  console.log(bigger(10, 8));
  console.log(bigger(4, 9));
}

main();
