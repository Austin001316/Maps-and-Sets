// Question 1
// A set containing [1,2,3,4] and no dupes

// Question 2
// "ref" the set removed duplicates then join joined the remaining strings

// Question 3
// 2 different arrays of [1,2,3] one set to true and one set to false

function hasDuplicate(arr) {
    const newArr = [...new Set(arr)];
    if (arr.length !== newArr.length){
        return true;
    }   else {
         return false;
        }
}

// ES2015 
//  const hasDuplicate = arr => new Set(arr).size !== arr.length


function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }