var formattedName = HTMLheaderName.replace("%data%","Gowoon Lee");
var formattedRole =HTMLheaderRole.replace("%data%","web-developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name":"Gowoon Lee",
	"role": "innovator",
	"contacts": {
		"mobile": "123-234-2345",
		"email": "miuo_90@hotmail.com",
		"github": "miuo90",
		"location": "Ottawa"
	},
	"welcomeMessage": "Hello to the world",
	"skills":[
		"French", "Korean", "Spanish", "Front-end web-development"
	],
	"pictureURL": "http://web.pdx.edu/~ngorman/nafiegorman/Draw%20Simpsons%20in%205%20steps1/img/lisa0.png"
};

var formattedbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedbioPic);
var formattedwelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedwelcome);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedSkill);
}




var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedmobile);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);


var work = {
		"jobs": [
			{
			"worktitle":"Public Service Innovator",
			"workemployer":"Government of Canada",
			"location":"Ottawa, ON, Canada",
			"workdates":"2014 - Present",
			"workdescription": "introduce modern technology"
				},
			{
			"worktitle":"Communications Analyst",
			"workemployer":"Government of Canada",
			"location":"Ottawa, ON, Canada",
			"workdates":"2011-2013",
			"workdescription": "deliver AM morning briefings to senior government officials"
			}
			]
		};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].workemployer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].worktitle);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].workdates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workdescription);
		$(".work-entry:last").append(formattedDescription);

		var formattedworklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworklocation);
	}
};
work.display();

//education object


var education = {
	"schools": [
		{
			"schoolname":"University of Ottawa",
			"location":"Ottawa",
			"schooldegree": "Honour's Bachelor's in Public Administration",
			"schooldates":2012
		}
				],
	"onlineCourses": [
		{
			"onlineltitle":"JavaScript Crash Course",
			"onlinename": "Udacity",
			"onlinedates": 2015,
			"onlineURL": "www.Udacity.com"
		}
					]
}


//encapsulating education

education.display = function () {
	for (degree in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[degree].schoolname);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[degree].schooldegree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[degree].schooldates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[degree].location);
		$(".education-entry:last").append(formattedSchoolLocation);
	}
	for (degree2 in education.onlineCourses) {
		$(".education-entry").append(HTMLonlineClasses);
		var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[degree2].onlineltitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[degree2].onlinename);
		var formattedHTML = formattedOnlineName + formattedOnlineSchool;
		$(".education-entry:last").append(formattedHTML);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[degree2].onlinedates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[degree2].onlineURL);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
};

education.display();

//project object

var projects = {
	"sample_project": [
	{
		"sampletitle": "Sample Project 1",
		"sampledates": "2015",
		"sampledescription": "description here",
		"sampleimageURL":"http://cdno.gettingsmart.com/wp-content/uploads/2014/11/innovation-mindset-482x335.jpg",
		},

	{
		"sampletitle": "Sample Project 2",
		"sampledates": "2014",
		"sampledescription": "description here",
		"sampleimageURL":"http://cdno.gettingsmart.com/wp-content/uploads/2014/11/innovation-mindset-482x335.jpg",
	}
	]
};

//encapsulating project

projects.display = function () {
	for (sample in projects.sample_project) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.sample_project[sample].sampletitle);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.sample_project[sample].sampledates);
		$(".project-entry:last").append(formattedProjectDate);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.sample_project[sample].sampledescription);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.sample_project[sample].sampleimageURL);
		$(".project-entry:last").append(formattedProjectImage);
	}
};

projects.display();

//internationalized button

function inName() {
	name = bio.name
	new_name = name.trim().split(" ");
	console.log(new_name);

	new_name[1] =new_name[1].toUpperCase();
	console.log(new_name[1]);
	new_name[0] =new_name[0].slice(0,1).toUpperCase() +new_name[0].slice(1).toLowerCase();
	console.log(new_name[0] + new_name[1]);
	return new_name[0] + " " + new_name[1];
}

var name = $("#name").text();


$("#main").prepend(internationalizeButton);

//googlemap

$("#mapDiv").append(googleMap);


