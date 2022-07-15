////////////////////
// Function  : print_textarea_contents
//
// Purpose   : Print the contents of the specified textarea
//
// Inputs    : field_id - id of the field to be printed
//             title_string - title string for header
//
// Output    : A dynamically created window containing the content of the specified textarea
//
// Returns   : (nothing)
//
// Example   : <script src="print_textarea_contents.js" type="text/javascript"></script>
//             <button onclick="print_textarea_contents('text1','my title')">
//
// Notes     : (none)
////////////////////

function print_textarea_contents(field_id,title_string) {
	var textarea_contents = document.getElementById(field_id).value;
	var printwindow = window.open('', '', 'height=500, width=500');

	var today = new Date();
	var hours = today.getHours();
	var mins = today.getMinutes();
	var secs = today.getSeconds();
	var year = today.getFullYear();
	var month = today.getMonth();
	month += 1;
	var m_day = today.getDate();

	printwindow.document.write('<html>');
	printwindow.document.write('<body > <h1>' + title_string + '<br>');
	printwindow.document.write("<H4>Date / Time is : " + year + "-" + month + "-" + m_day + " " + hours + ":" + mins + ":" + secs + "</H4>");
	printwindow.document.write('<BR><pre>');
	printwindow.document.write(textarea_contents);
	printwindow.document.write('</pre>');
	printwindow.document.write('</body></html>');
	printwindow.document.close();
	printwindow.print();
}
