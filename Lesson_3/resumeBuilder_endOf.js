/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
/*
Random saved stuff goes here.......
*/

// Bio Info has to be top
var bio = {
	"name": "Anthony Parillo",
	"role": "FrontEnd Web Developer",
	"contacts": {
		"mobile": "251",
		"email": "aparillo87@gmail.com",
		"github": "- AnthonyParillo",
		"location": "Alabama"
	},
	"welcomeMessage": "Welcome to my resume. Below, please find my skills, work history, and education",
	"skills": ["JavaScript", "HTML", " GitHub", " Microsoft Office"],
	"bioPic": "images/profileimg.jpg"
}

// Header

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Bio Start _________________________________________________

// Bio
var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", "LinkedIn -").replace("%data%","anth");
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// Info ------ Has to go in this order
$("#header").append(formattedBiopic);

// Welcome
$("#header").append(formattedWelcome);

$("#header").append(formattedContactGeneric);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);

// Skills
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);

// Work Dot Notation
var work = {
	"employer": "Dyncorp International",
	"title": "UH60 A/L Mechanic",
	"dates": "May 2015 to Aug 2017",
	"description": "thisss",
	"img": "tobefilled"
}

work.employerTwo 	= "Strom Aviation / Sikorsky";
work.title			= "S92A Mechanic";

$("#workExperience").append(HTMLworkStart);
var formatWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
$("#workExperience").append(formatWorkEmployer);
var formatWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
$("#workExperience").append(work.employerTwo);

// Education Bracket Notation

var education = {
	"name": "CTU",
	"degree": "CS",
	"dates": "2017 to Current",
	"location": "Online",
	"major": "Software Engineering"
}

education["nameTwo"] = "Udacity";

$("#education").append(HTMLschoolStart);
var formatSchoolName = HTMLschoolName.replace("%data%", education.name);
$("#education").append(formatSchoolName);
var formatSchoolName = HTMLschoolName.replace("%data%", education.nameTwo);
$("#education").append(formatSchoolName);





