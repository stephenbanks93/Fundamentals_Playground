//JS File
/*console.log("Hello world")



//Array             //0     //1      //2       //3
var classmates = ["Matt", "tara", "Danielle", "Evan"];

var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC";
console.log(classmates);
console.log(typesOfSoda);

function 

for(i = 0; i < classmates.length; i++){
	console.log(classmates[i]);
}



var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"] 
*/


/**************************************************DO NOT GO ABOVE THIS LINE************************************************/


//OBJECT LITERAL
var friend = {
	
	//Properties
	fullname		: "",
	age				: 0,
	married			: true,
	vocation		: "",
	likefamily		: true,
	yearsknown		: 0,
	bignose			: false,
	height			: 0,
	weight			: 0,
	hobbies			: "",
	eyecolor		: "",
	birthday		: "",
	//Method
	printVocation 	: function(){              
		return this.vocation;
	},//Must have comma between functions

	introduceToBrother : function(){
		if(this.yearsknown >= 5 && this.likefamily == true){
			return "I want you to meet Daniel.";
		} else {
			return "You will meet him eventually"
		}
	},




}

var nickKirkes = Object.create(friend);
nickKirkes.fullname = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "Project Manager at Sales Force"


var hansKloepfer = Object.create(friend);
hansKloepfer.fullname = "Hans Kloepfer";
hansKloepfer.age = 42;
hansKloepfer.married = false;
hansKloepfer.vocation = "Sailboat Captain";

var mitchellStone = Object.create(friend);
mitchellStone.fullname = "Mitchell Stone";
mitchellStone.age = 22;
mitchellStone.married = false;
mitchellStone.vocation = "Military";
mitchellStone.yearsknown = 8;
mitchellStone.likefamily = true;






var dog {
	breed		: "",
	color		: "",

}
















