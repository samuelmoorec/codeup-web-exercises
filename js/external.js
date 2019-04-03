console.log("Hello from ya boi external JavaScript");

var mermaid = prompt("How many days have you had The Little Mermaid?");
var brotherbear = prompt("How many days have you had Brother Bear?");
var hercules = prompt("How many days have you had Hercules?");
var totalowed = (hercules * 3) + (brotherbear * 3) + (mermaid * 3);
alert("You owe a total amount owed $" + totalowed.toString() + ".");
var google = prompt("How many hours did you work with Google?");
var amazon = prompt("How many hours did you work with Amazon?");
var facebook = prompt("How many hours did you work with Facebook?");
var totalpay = (google * 400) + (amazon * 380) + (facebook * 350);
alert("These companies owe you a total of $" + totalpay + ".");
var confirmed = confirm('You confirm that the class you wish to enroll in is not full?');
var confirmed1 = confirm('You confirm that the class you wish to enroll will not conflict with classes you are currently taking?');
var acceptiance = confirmed && confirmed1;
    if (acceptiance === true){
        alert("You have been accepted into the class in which you enrolled to.")
    }
    else {
        alert("Unfortunately we were not abe to put you into the class in which you tried to enroll.")
    }
var numberofitems = prompt("How many items have you bought?");
var experation = confirm("Is the the offer still currently offered?");
var premium = confirm("Do you currently have a rewards membership with us?");
var discount = ((numberofitems >= 2) || premium) && experation;
if (discount === true){
    alert("You are able to use the discount");
}
else{
    alert("You are not able to use the discount");
}

