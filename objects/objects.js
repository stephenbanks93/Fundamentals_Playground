function helloWorld(){
	alert("Hello World!");
}








var bestFriend={
	firstName	: "Mitchell",
	lastName	: "Stone",
	age			: 22,
}

var friend = {
	firstName	: "Paul",
	lastName	: "O'Conner",
	age			: 39,
}

var netflix={
	favShow		: "Knights of Sidonia",
	favEpisode	: 1,
	favEpDesc	: "Nagate gets caught stealing rice."
}

var netflixShow={
	showName		: "",
	epNumber		: 1,
	epDescription	: "",
}

//Methods
	watchNow












var drWho = Object.create(netflixShow);
drWho.showName = "";
drWho.epNumber = 1;
drWho.epDescription = "Plastic comes to life.";





document.getElementById("demo").innerHTML=friend.firstName+"<br>"+friend.lastName+"<br>"+friend.age;
document.getElementById("name").innerHTML=bestFriend.firstName+"<br>"+bestFriend.lastName;

document.getElementById("showName").innerHTML=netflix.favShow;
document.getElementById("epNum").innerHTML=netflix.favEpisode;
document.getElementById("desc").innerHTML=netflix.favEpDesc;





/*****************************************More Complexity********************************/

var amazonPrimeShow = {
	showId		: 1,
	name 		: "Paul's Happiest Times",
	description : "This is the happiest show on the planet",
	seasonInfo	: {	
		seasonNumber: 1,

		printDetails : function(){
			document.write(description);
			}
		},

		episodes	: [
			{episodeNumber: 1, episodeName: "Happy Stuff"},
			{episodeNumber: 2, episodeName: "The Real Happy Story of Paul"}
			{episodeNumber: 3, episodeName: "Even Happier Than Before"}

		]

	},

};
	
	
		document.write(amazonPrimeShow.seasonInfo.episodes[0].episodeName);



	for(info in amazonPrimeShow.seasonInfo.episodes){
		document.write((parseInt(info)+1)+" - "+amazonPrimeShow.seasonInfo
	}


















