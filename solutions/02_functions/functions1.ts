function callMe(): void {
  console.log("Hello!");
}

function main(): void {
  // The function has to exist before it can be called.
  callMe();
}

main();
