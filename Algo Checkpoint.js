let algo = (sentence) => {
  let length = 0;
  let words = 0;
  let vowelsNum = 0;
  let vowels = ["a", "e", "y", "u", "i", "o"];
  for (i = 0; i < sentence.length; i++) {
    length += 1;
    if (sentence[i] == " ") {
      words += 1;
    }
    for (j = 0; j < vowels.length; j++) {
      if (sentence[i] == vowels[j]) {
        vowelsNum += 1;
      }
    }
  }
  console.log(
    `length is ${length - 1 - words}, the number of words ${
      words + 1
    } and the number of vowels ${vowelsNum}`
  );
};
