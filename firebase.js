$(document).ready(function() {
	
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEf7rvXsn6FqtaPwSlsLykaK500Mx9Lh8",
    authDomain: "piedpiper-a0b74.firebaseapp.com",
    databaseURL: "https://piedpiper-a0b74.firebaseio.com",
    storageBucket: "piedpiper-a0b74.appspot.com",
  };
  firebase.initializeApp(config);

  // var database = firebase.database();

$('#runSearch').on("click", function() {
	//select id for input fields
	var nameInput = $('#trainName').val().trim();
	var destinationInput = $('#destination').val().trim();
	var fttInput = moment($('#firstTrainTime').val().trim(), "HH:mm").subtract(10, "years").format("X");
	var frqInput = $('#frequency').val().trim();

var trainInfo = {
		nameInput: nameInput,
		destinationInput: destinationInput,
		fttInput: fttInput,
		frqInput: frqInput,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
};
		firebase.database().ref().push(trainInfo);

	console.log(nameInput);
	console.log(destinationInput);
	console.log(fttInput);
	console.log(frqInput);

	$("#trainName").val("");
	$("#destination").val("");
	$("#firstTrainTime").val("");
	$("#frequency").val("");
		
	return false;
});	



firebase.database().ref().on("child_added", function(childSnapshot, prevChildKey){

// console.log(childSnapshot.val());

var fireName = childSnapshot.val().nameInput;
var fireDestination = childSnapshot.val().destinationInput;
var firefrqInput = childSnapshot.val().frqInput;
var firefttInput = childSnapshot.val().fttInput;

var differenceTimes = moment().diff(moment.unix(firefttInput), " minutes");
var remainder = moment().diff(moment.unix(firefttInput), "minutes") % firefrqInput;
var minutes = firefrqInput - remainder;
var arrival = moment().add(minutes, "m").format("hh:mm A");

console.log(minutes);
console.log(arrival);
console.log(moment().format("hh:mm A"));
console.log(arrival);
console.log(moment().format("X"));

$("#trainSchedule > tbody").append("<tr><td>" + fireName + "</td><td>" + fireDestination + "</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");


});


});