var colN = 40;
var rowN = 40;
var width = 600/colN;
var height = 600/rowN;
/*
$(document).ready(function() {
	//Skapa rutnät
	for (var x = 0; x < rowN; x++) {
		for (var y = 0; y < colN; y++) {
			var $ruta = $("<div class='ruta'></div>");
			$ruta.height(height + "px");
			$ruta.width(width + "px");
			$('#wrapper').append($ruta);
		}
	}
	
	//Måla ruta
	$(document).on('mouseover', '.ruta', function() {
		$(this).css("background-color", "#DBDBDB");
	});
});
*/

$(document).ready(function() {
	//Skapa rutnät
	for (var x = 0; x < rowN; x++) {
		var $tr = $("<tr id='" + x +"'>");
		$('table').append($tr);
		for (var y = 0; y < colN; y++) {
			var $td = $("<td>");
			$td.height(height + "px");
			$td.width(width + "px");
			$tr.append($td);	
		}
	}
	
	//Måla ruta
	$(document).on('mouseover', 'td', function() {
		$(this).css("background-color", "#DBDBDB");
	});
});
