var gridSize = 40;
var dim = 600/gridSize;

$(document).ready(function() {
	//Skapa rutnät
	MakeGrid();
	
	//Reset
	$('button').click(function() {
		$('table').empty();
		gridSize = prompt("Dimensioner? (t.ex 40)");
		dim = 600/gridSize;
		MakeGrid();
	});
	
	//Måla ruta
	$(document).on('mouseover', 'td', function() {
		$(this).css("background-color", "#DBDBDB");
	});
});

var MakeGrid = function() {
	for (var x = 0; x < gridSize; x++) {
		var $tr = $("<tr id='" + x +"'>");
		$('table').append($tr);
		for (var y = 0; y < gridSize; y++) {
			var $td = $("<td>");
			$td.height(dim + "px");
			$td.width(dim + "px");
			$tr.append($td);	
		}
	}
}
