
		var numer = Math.floor(Math.random()*40)+1;
		
		var timer1 = 0;
		var timer2 = 0;
		
		
		function ustaw(nrslajdu)
		{
			clearTimeout(timer1);
			clearTimeout(timer2);
			numer = nrslajdu - 1;
			
			schowaj();
			setTimeout("zmienslajd()", 1500);
		}
		
		function schowaj()
		{
			$("#slider").fadeOut(1500);
		}
		
		function zmienslajd()
		{
			numer++;
			if (numer>40) numer=1;
			
			var plik = "<img src=\"img/galeria1/g" + numer + ".jpg\" />";
		
			document.getElementById("slider").innerHTML = plik;
			$("#slider").fadeIn(1500);
			
			timer1 = setTimeout("zmienslajd()", 6500);
			timer2 = setTimeout("schowaj()", 5000);
		
		}