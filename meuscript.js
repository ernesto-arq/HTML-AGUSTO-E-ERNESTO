function liberarmenu(){
	codigo=prompt("Informe o código de acesso", "");
	if (codigo==12345){		
		window.location.replace("regularizarincidente.html");
	}
	else
	{
		alert("Código não validado");
		window.location.replace("index.html");
	}
};
