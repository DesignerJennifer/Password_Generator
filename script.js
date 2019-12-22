const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const randomNum = "0123456789"
const randomSymbols = "!@#$%^&*(){}[]?<>"

    // loop as many times as len 
    // get a random idx that is not bigger thatn the lenght of the pool
    // get and char from the pool base on the index charPool[idx] append to the password
    document.getElementById("genButton").addEventListener("click", setupPassword); {
       
        function generatePassword (charPool, lenght) { 
        
            for (var i = len; i > 0; i--) { 
            password +=  
              arr[Math.floor(Math.random() * psLength.length)]; 
              
              return password
        }
    }
}
  
 function setupPassword() {
    var charPool = [lowerCaseResp, upperCaseResp, randomNumResp, randomSymbolsResp]
    var password = lowerCaseResp + upperCaseResp + randomNum + randomSymbols

    var psLength = prompt("How long do you want your password to be? (Must be between 8 and 128 characters.")

    var lowerCaseResp = confirm("Do you want lowercase letters?")
    if (lowerCaseResp) {
        charPool += lowerCase
    }
    
    var upperCaseResp = confirm("Do you want uppercase letters?")
    if (upperCaseResp) {
        charPool += upperCase
    }

    var randomNumResp = confirm("do you want numbers?")
    if (randomNumResp) {
        charPool += randomNum
    }

    var randomSymbolsResp = confirm("Do you want special characters?")
    if (randomSymbolsResp) {
        charPool += randomSymbols
    }

    console.log(charPool)

    document.getElementById("display").value = password;
}
 
