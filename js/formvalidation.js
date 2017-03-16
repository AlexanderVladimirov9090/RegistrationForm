/**
* @author Alexander Vladimirov
*         <alexandervladimirov1902@gmail.com>
* This java script is used for validation of registration form with first name, last name, password, address, EGN  (Social Security Sumber)and age,
* if validation does not pass in one or more field it dispays to client what and wy did not pass.
*
*/
	var message = "";

/**
 * Validates Registration.
 * @return {Boolean} true if all fields are validated.
 */

function formValidation(){
	var firstName = document.registration.firstName;
	var lastName = document.registration.lastName;
	var pass = document.registration.pass;
	var confirmPassword = document.registration.confirmPassword;
	var address = document.registration.address;
	var EGN = document.registration.EGN;
	var age = document.registration.age;
	
	nameValidation(firstName,1,15);
	nameValidation(lastName,1,15);
	passwordValidation(pass,6,18);
	sameContent(confirmPassword, pass);
	addressValidation(address, 1, 100);
	EGNValidation(EGN, 10, 10);
	ageValidation(age, 18, 118);

	if(message!=""){
	document.getElementById('message').innerHTML = "".concat(message);
	message="";
	return false;
	}
	return true;
}

/**
 * Validates any given name.
 * @param {String} name under validation. 
 * @param {Number} min is the minimum number of characters that are acceptable.
 * @patam {Number} max is the maximum number of characters that are acceptable.
 * 
 */
 
function nameValidation(name, min, max){
	var letters =  /[a-zA-Z]+$/;
	if(!validContent(name, letters) || !validLength(name,min,max)){
		message = constructMessage(name, message, min, max);
		name.focus();
	}
}

/**
 * Validates password.
 * @param {String} password under validation. 
 * @param {Number} min is the minimum number of characters that are acceptable.
 * @patam {Number} max is the maximum number of characters that are acceptable.
 * 
 */
	
function passwordValidation(password, min, max){
	var regex = /^[a-zA-Z]\w+$/;
	var passValue = pass.value;
	if(!validContent(pass,regex) || !validLength(pass,min,max)){
		message = constructMessage(pass, message, min, max);
		pass.focus();
	}
}

/**
 * Validates address.
 * @param {String} address under validation. 
 * @param {Number} min is the minimum number of characters that are acceptable.
 * @patam {Number} max is the maximum number of characters that are acceptable.
 * 
 */

function addressValidation(address, min, max){
	var regex=/^\w+$/;
	var text = address.value;
	
	if(text===""|| !validLength(address, min, max)){
		message = constructMessage(address, message, min, max);
		address.focus();
	}
}

/**
 * Validates EGN(Social Security Sumber).
 * @param {String} EGN under validation. 
 * @param {Number} min is the minimum number of digits that are acceptable.
 * @patam {Number} max is the maximum number of digits that are acceptable.
 * 
 */

function EGNValidation(EGN, min, max){
	var EGNValue= parseInt(EGN.value,10);
	if(isNaN(EGNValue)|| validLength(EGN, min, max)){
	message = constructMessage(EGN, message, min, max);
	EGN.focus();
	}
}

/**
 * Validates Age.
 * @param {String} Age under validation. 
 * @param {Number} min is the minimum age that is acceptable.
 * @patam {Number} max is the maximum age that is acceptable.
 * 
 */

function ageValidation(age, min, max){
	var ageValue = parseInt(age.value,10);
	if(isNaN(ageValue)|| ageValue<min || ageValue >max){
		message = constructMessage(age, message, min, max);
		age.focus();
	}
}

/**
* Validates lenght of given content.
* @param {Object} object under validation.
* @param {Number} min minimum length of object's value.
* @param {Number} max maximum lenght of object's value.
*
*/

function validLength(object, min , max){
	if(object.value.length > min || object.value.length<max){
		return true;
	}
	return false;
}

/**
 * Validates content of any given string.
 * @param {String} string under validation. 
 * @param {String} expresion is the given rule for the string.
 * @return {Boolean} true if string matches the expresion rule.
 */

 function validContent(object,expresion){
	return object.value.match(expresion);
}

/**
 * Validates content of any given string.
 * @param {String} string under validation. 
 * @param {String} string2 is the given confirm for confirming the first string.
 * @return {Boolean} true if string matches the string2.
 */

function sameContent(string,string2){
	if(string.value != string2.value){
	message = message + "<b>" + string.name + "</b> does not match <b>" + string2.name + "</b>.<br>";
	string2.focus();
	return false	
	}
	else{
		return true;
	}
}

/**
 * Constructs waring for the user where the validation did not pass.
 * @param {Object} Object that did not pass validation. 
 * @param {String} message collector of data that is going to be displayer to the user.
 * @param {Number} min minimum of the range that is used for validation of data.
 * @param {Number} max maximum of the range that is used for validation of data.
 * @return {Boolean} true if string matches the string2.
 */

function constructMessage(object, message, min, max){
	message = message + "" + object.name + " illegal content (must not be empty, smalller than " + min + " or bigger than " + max + ").<br>";
	return message;
	}