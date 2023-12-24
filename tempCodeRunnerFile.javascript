 // Write a recursive function to compute the count of vowels and consonants in a string

 /*function count(arr){

    let countVowels=0;
    let countConsonants=0;
     
    for (let i = 0; i < arr.length; i++) {
        // Convert the character to uppercase to handle both cases

        let char = arr[i].toUpperCase();
         console.log(char)
        if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            countVowels++;
        } else if (char >= 'A' && char <= 'Z') {
            countConsonants++;
        }
    }

    return [countVowels, countConsonants];
}

 console.log(count(['M','A','N','I','S','H']))
*/
 //Write a function to check if a given number is a prime number

  function prime(num){
    //base case
    if(num <= 0){
        return false;
    }
    for(let i = 2;i < num; i++){
        if(num % i === 0){
            return false;
        }
        if(num % num === 0){
            return true;
        }
    }
 }
 console.log(prime(7));
 console.log(prime(4)); 