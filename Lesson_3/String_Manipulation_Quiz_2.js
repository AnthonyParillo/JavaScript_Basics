/* Manipulate the string to ensure the first name has a capital first letter
   and the last name is totally capitalized */

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    // "Splits" name string at space into array of 2 strings
    var firstLastSplit = oldName.split(" ");
    
    // First Name - Change first letter to Upper and rest to lower case 
    firstLastSplit[0] = 
    firstLastSplit[0].slice(0,1).toUpperCase() + 
    firstLastSplit[0].slice(1).toLowerCase();
    
    // Last Name - Change ALL to Upper case
    firstLastSplit[1] = firstLastSplit[1].toUpperCase();

    // Join BOTH with a space
    finalName = firstLastSplit.join(" ");

    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));