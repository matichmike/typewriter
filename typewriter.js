const sentence = "hello there from lighthouse labs \n";
let x = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, (x = x + 100)) // <= 1s delay to make it noticeable. Can dial it down later.
}

 