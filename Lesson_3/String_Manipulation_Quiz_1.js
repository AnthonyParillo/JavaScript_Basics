//Solution is this and passes when hit submit but nothing on test... console doesn't print..

var s = "audacity";

var udacityizer = function(s) { 

	s = "U" + s.slice(2); 
	
	// Alternate using .replace() and .slice()

	// s = s.slice(1);
	// s = s.replace("u", "U"); 
    
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));