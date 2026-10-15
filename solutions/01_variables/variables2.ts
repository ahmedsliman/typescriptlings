function main(): void {
  // `const` bindings cannot be reassigned; `let` bindings can.
  let x: number = 5;
  x = 6;
  console.log(`x has the value ${x}`);
}

main();
