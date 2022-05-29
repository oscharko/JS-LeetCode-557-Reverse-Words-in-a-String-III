let s = "Let's take LeetCode contest"

const reverseWords = function(s) {
  s = s.split(" ")
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split("").reverse().join("")
  }
  s = s.join(" ")
  return s;
};

console.log(reverseWords(s))