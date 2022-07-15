////////////////////
// Function  : print_element_contents
//
// Purpose   : Print the contents of the specified element
//
// Inputs    : field_id - id of the field to be printed
//             title_string - title string for header
//
// Output    : A dynamically created window containing the content of the specified element
//
// Returns   : (nothing)
//
// Example   : <script src="print_element_contents.js" type="text/javascript"></script>
//             <button onclick="print_element_contents('text1','my title')">
//
// Notes     : (none)
////////////////////

function print_element_contents(field_id,title_string) {
	var element_contents = document.getElementById(field_id).innerHTML;
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
	printwindow.document.write(element_contents);
	printwindow.document.write('</body></html>');
	printwindow.document.close();
	printwindow.print();
}
