$(document).ready(function(){
	

    var valoresProgramacao = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Edit",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    var valoresCidades = [
      'Coimbra',
      'Porto',
      'Lisboa',
    ];
    $('#lingProg').autocomplete({
      source: valoresProgramacao
    });
    $('#cidadesPt').autocomplete({
      source: valoresCidades
    });
	$('#okButton').click(function() {
		var linguagensProg = $('#lingProg').val();
		if (linguagensProg == "") {
			alert("Selecione uma opção!");
		}
		else alert(linguagensProg);
	});	   
} );