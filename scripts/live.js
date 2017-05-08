function stripeTable() {
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	for (var i=0; i<tables.length; i++) {
		var odd = false;
		var rows = tables[i].getElementsByTagName("tr");
		for (var j=0; j<rows.length; j++) {
			if (odd==true) {
				addClass(rows[j],"odd");
				//rows[j].style.backgroundColor = "#ffc";
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}
addLoadEvent(stripeTable);

function highlightRows() {
	if (!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for (var i=0; i<rows.length; i++) {
		rows[i].oldClassName = rows[i].className
		rows[i].onmousover = function() {
			addClass(this,"highlight");
		}
		rows[i].onmouseout = function() {
			this.className = this.oldClassName
		}
	}
	//console.log(highlightRows);
}
addLoadEvent(highlightRows);

function displayA() {
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//get all the abbreviations
		var abbr = document.getElementsByTagName('abbr');
		if (abbr.length < 1) return false;
		var defs = new Array();
		// loop through the abbreviations
		for (var i=0; i<abbr.length; i++) {
			var current_abbr = abbr[i];
			if (current_abbr.childNodes.length < 1) continue;
			var definition = current_abbr.getAttribute("title");
			var key = current_abbr.lastChild.nodeValue;
			defs[key] = definition;
		}
	
// creat the definition list
var dlist = document.createElement("dl");
// loop through the definitions
for (key in defs) {
	var definition = defs[key];
	// creat the definition title
	var dtitle = document.createElement("dt");
	var dtitle_text = document.createTextNode(key);
	dtitle.appendChild(dtitle_text);
	// create the definition description
	var ddesc = document.createElement("dd");
	var ddesc_text = document.createTextNode(definition);
	ddesc.appendChild(ddesc_text);
	// add them to the definition list
	dlist.appendChild(dtitle);
	dlist.appendChild(ddesc);

}
	if (dlist.childNodes.length < 1) return false;
	// create a headline
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	var container = document.getElementById("content");
	// add the headline to the body
	container.appendChild(header);
	// add the definition list to the body
	container.appendChild(dlist);

}
addLoadEvent(displayA);
