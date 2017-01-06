// good luck !
$(document).ready(function(){

	var btns= $("[type='button']");     // determine tous les boutons
	


for (var i = 0; i< btns.length; i++) { //  boucle pour appliquer à tous les boutons

	var uniq=$(btns[i]); // determine chacun bouton
	var couleur=uniq.attr('data-color'); // attribut chacune des couleur pour chaque bouton
	uniq.css('background-color',couleur); // applique la couleur pour chaque bouton		
	}
	$(btns).click(function(){
		  var couleur=$(this).attr('data-color');

			if( $("#modify-texte").is(':checked') )
				{
    		  
				$('body').css('color',couleur);
				}
			else{ $('body').css('background-color',couleur);	}

	});

});

	
	
