//exercise 1
var array = [ 
	["Vienna", "something", "something", "something", "something"], 
	["something", "is",  "something", "something", "something"],
	["something", "something", "a", "something", "something"], 
	["something", "something", "something", "nice", "something"],
	["something", "something", "something","something", "city"]
]
var sentence = "";
for (i = 0; i < array.length; i++) {
	sentence += array[i][i] + " ";
}
console.log(sentence)

//exercise 2
var wrongSentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism\'s$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".";
//$ is a special character in regex and needs to be escaped with backslash
var rightSentence = wrongSentence.replace(/\$/g, " ");
console.log(rightSentence)