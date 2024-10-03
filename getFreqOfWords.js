//Write a function getFreqOfWords(sentence) that returns an object with keys representing unique words in lowercase and values representing the frequency of occurrences of each word with ignore case in the sentence. If the input string is null or undefined, return undefined.

function getFreqOfWords(sentence) {
  if (sentence === null || sentence === undefined) return undefined
  const freqs = {}
  const words = sentence.split(' ')
  words.forEach((word) => {
    word = word.toLowerCase()
    const freq = words.filter(
      (wordItem) => wordItem.toLowerCase() === word
    ).length
    freqs[word] = freqs[word] === undefined ? freq : freqs[word]
  })
  return freqs
}
console.log(getFreqOfWords('Today is present and present is your gift'))
//{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords('Do you best just do it'))
//{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords(null)) //undefined
console.log(getFreqOfWords(undefined)) //undefined
