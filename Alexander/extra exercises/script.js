var bigSentence = "Hey there, i am a javascript developer, and i live in vienna";
var smallSentence = bigSentence.replace("(\w+\s)+(\w+,\s)", "", "i");
console.log(smallSentence)