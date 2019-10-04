//
// Function  : check_all_fields_and_confirm
//
// Purpose   : Verify that all the input fields in the specified form
//             contain a value. If all fields have a value then ask
//             for confirmation before submittting the form.
//
// Inputs    : the_form - the input form
//
// Output    : An alert box is displayed if any input field is empty
//
// Returns   : IF a field is missing THEN false
//
// Example   : onclick="return check_all_fields_and_confirm(document.myform1);"
//
// Notes     : Each input field must have a value specifiedd for its
//             title attribute.
//

function check_all_fields_and_confirm(the_form) {
  var themessage2;
  var okflag = "good";
  var sep = " ";
  var sep2 = "";
  themessage2 = "You are required to enter data for the following fields:\n";
  for ( var i = 0 , length = the_form.elements.length ; i < length ; ++i) {
    if ( the_form.elements[i].value == "" ) {
      themessage2 = themessage2 + "\n" + the_form.elements[i].title;
      sep = " - ";
      okflag = "bad";
    } // IF
  } // FOR
  // alert if fields are empty and cancel form submit
  if ( okflag == "good" ) {
    var user_reply = confirm("Are you sure you want to do this ?");
    if ( user_reply == true ) {
      the_form.submit();
    }
    else {
      return false;
    }
  } // IF
  else {
	alert(themessage2);

    return false;
  } // ELSE
} // end of check_all_fields_and_confirm
