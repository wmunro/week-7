$(document).ready(function() {
	
   var config = {
    apiKey: "AIzaSyBEf7rvXsn6FqtaPwSlsLykaK500Mx9Lh8",
    authDomain: "piedpiper-a0b74.firebaseapp.com",
    databaseURL: "https://piedpiper-a0b74.firebaseio.com",
    storageBucket: "piedpiper-a0b74.appspot.com",
  };
  firebase.initializeApp(config);


var database = firebase.database()

var nameInput = "";
var destinationInput = "";
var fttInput = "";
var frqInput = "";
var next

$('#trainUser').on('click', function(){
	//select id for input fields
	var nameInput = $('#trainName').val().trim();
	 = $('#destination').val().trim();
	 = $('#firstTrainTime').val().trim();
	 = $('#frequency').val().trim();


	 = $('#minutes-away').val().trim();

	console.log(nameInput);
	console.log(destinationInput);
	console.log(fttInput);
	console.log(frqInput);

	firebase.database().ref().push({
		nameInput: nameInput,
		destinationInput: destinationInput,
		fttInput: fttInput,
		frqInput: frqInput,
		
		dateAdded: Firebase.ServerValue.TIMESTAMP

	});

});



});