for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  } else if (i === 16) {
    break;
  }
  console.log(i);
}
