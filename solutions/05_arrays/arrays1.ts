function main(): void {
  // `scores` is `number[]`, so only numbers can be pushed.
  const scores: number[] = [10, 20];
  scores.push(30);
  console.log(scores);
}

main();
