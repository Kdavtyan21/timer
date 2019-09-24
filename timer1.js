let seconds = process.argv.slice(2)
for (let second of seconds) {
  setTimeout(() => {
    if (second >= 0) {
    process.stdout.write('\x07');
    }
  }, second * 1000)
  if (!second) {
    return
  } else if (Number(second) === false) {
    return
  }
}