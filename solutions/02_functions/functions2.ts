function square(num: number): number {
  return num * num;
}

function main(): void {
  // Every parameter needs a type annotation under `strict` mode.
  console.log(square(3));
}

main();
