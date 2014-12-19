var tabuleiro = new Array(new Array());

function drag(t,e) {		
	e.dataTransfer.setData('Text', t.id);
}

function drop(t,e) {
	var id = e.dataTransfer.getData('Text');
	t.appendChild(document.getElementById(id));
	e.preventDefault();
}

//arrastavel.ondragstart = function(event) {
//event.dataTransfer.setData("Info", "HTML5 eacute; demais!");
//}

//arrastavel.ondragend = function(event){
//this.style.left = event.pageX + "px";
//this.style.top = event.pageY-150 + "px";
//}

$(function() {
    var last_zindex = 3000;

    $(".peca").draggable({
        //grid: [ 54, 54 ],
        drag: function( event, ui )
        {            

            //movePeca(idPeca, idCasaInicial, idCasaFinal);
            $(this).css('z-index', last_zindex++);
            //console.log($(this).parents('td'));


        },
        revert: function(dropped) {
            //console.log(dropped);

            var at_placeholder = dropped && dropped[0].id && (dropped[0].id.substring(0, 2) == "td" || dropped[0].id.substring(0, 3) == "box") ;

            if(dropped[0] && $(dropped[0].id))
            {

                console.log("chamando " + dropped[0].id);
                console.log($("#" + dropped[0].id)); //.find("div").length
                console.log($("#" + dropped[0].id).find("div").length);

                var casa = dropped[0].id.replace('td-', '').split("-");
                console.log("Casa : " + casa[0] + " - " + casa[1]);

                //if(dropped[0] && $("#" + dropped[0].id).find("div").length > 0) //Verificando se existe peça com div. não funciona se não movermos as divs entre as td´s 
                if(casa[0] && $("#" + dropped[0].id))
                    return true;

                //TODO: 
                // 1. Pegar o ID da casa anterior (origem) ou Buscar o array inteiro pelo ID da peça.
                movePeca($(this).attr('id'), &ID_CASA_ANTERIOR, &ID_CASA_NOVA);



            }

            return !at_placeholder;
        } ,
        revertDuration: 200
    });    

    $(".casa").droppable({
        //activeClass: 'ui-state-hover',
        //hoverClass: 'ui-state-active',
        over: function(event, ui) {
            //$(this).addClass('ui-state-highlight').find('p').html('Dropped!');
            // console.log("dropped at ");
            // console.log($(this).attr('id'));
        },
        out: function(event, ui) {
            //$(this).removeClass('ui-state-highlight').find('p').html('Drop me here');
            // console.log("out");
            // console.log($(this).attr('id'));            
        }
    });       

});



function resetPecas(){
// VERMELHAS
    tabuleiro[2][1] = "V1";    
    tabuleiro[4][1] = "V2";    
    tabuleiro[6][1] = "V3";    
    tabuleiro[8][1] = "V4";    
    tabuleiro[1][2] = "V5";    
    tabuleiro[3][2] = "V6";    
    tabuleiro[5][2] = "V7";    
    tabuleiro[7][2] = "V8";    
    tabuleiro[2][3] = "V9";    
    tabuleiro[4][3] = "V10";    
    tabuleiro[6][3] = "V11";    
    tabuleiro[8][3] = "V12";    

//AZUIS
    tabuleiro[1][6] = "A1";    
    tabuleiro[3][6] = "A2";    
    tabuleiro[5][6] = "A3";    
    tabuleiro[7][6] = "A4";    
    tabuleiro[2][7] = "A5";    
    tabuleiro[4][7] = "A6";    
    tabuleiro[6][7] = "A7";    
    tabuleiro[8][7] = "A8";    
    tabuleiro[1][8] = "A9";    
    tabuleiro[3][8] = "A10";    
    tabuleiro[5][8] = "A11";    
    tabuleiro[7][8] = "A12";    
}

function validaMovePeca(idCasaInicial, idCasaFinal){
    var resultado = true;
    
    var xCasaInicial = parseInt(idCasaInicial.substring(3, 4));
    var yCasaInicial = parseInt(idCasaInicial.substring(5, 6));
    var xCasaFinal = parseInt(idCasaFinal.substring(3, 4));
    var yCasaFinal = parseInt(idCasaFinal.substring(5, 6));

    if((xCasaInicial - xCasaFinal == 1 || xCasaInicial - xCasaFinal == -1) 
            && (yCasaInicial - yCasaFinal == 1 || yCasaInicial - yCasaFinal == -1)) {
        resultado = true;
    }else{
        resultado = false;
    }
    
    return resultado;
}

function movePeca(idPeca, idCasaInicial, idCasaFinal){

    if(validaMovePeca(idCasaInicial, idCasaFinal)){
        tabuleiro[parseInt(idCasaFinal.substring(3, 4))][parseInt(idCasaFinal.substring(5, 6))] = idPeca;
        tabuleiro[parseInt(idCasaInicial.substring(3, 4))][parseInt(idCasaInicial.substring(5, 6))] = "";
    }
}

function validaComePeca(idCasaInicial, idCasaFinal){
    var resultado = true;
    
    var xCasaInicial = parseInt(idCasaInicial.substring(3, 4));
    var yCasaInicial = parseInt(idCasaInicial.substring(5, 6));
    var xCasaFinal = parseInt(idCasaFinal.substring(3, 4));
    var yCasaFinal = parseInt(idCasaFinal.substring(5, 6));
    
    if((xCasaInicial - xCasaFinal == 2 || xCasaInicial - xCasaFinal == -2) 
            && (yCasaInicial - yCasaFinal == 2 || yCasaInicial - yCasaFinal == -2)) {
        resultado = true;
    }else{
        resultado = false;
    }
    
    return resultado;
}

function comePeca(){
    if(validaComePeca(idCasaInicial, idCasaFinal)){
        tabuleiro[parseInt(idCasaFinal.substring(3, 4))][parseInt(idCasaFinal.substring(5, 6))] = idPeca;
        tabuleiro[parseInt(idCasaInicial.substring(3, 4))][parseInt(idCasaInicial.substring(5, 6))] = "";

        // Encontra a casa da peça a ser comida
        if(parseInt(idCasaInicial.substring(3, 4)) - parseInt(idCasaFinal.substring(3, 4)) == -2){
            xCasaPcComida = parseInt(idCasaInicial.substring(3, 4)) + 1;
            yCasaPcComida = parseInt(idCasaInicial.substring(5, 6)) - 1;
        }else{
            xCasaPcComida = parseInt(idCasaInicial.substring(3, 4)) - 1;
            yCasaPcComida = parseInt(idCasaInicial.substring(5, 6)) + 1;
        }

        var pos_pecacomida = $("#td-" + xCasaPcComida + "-" + yCasaPcComida);
        console.log(nomepecacomida);

        var pecacomida = $("#td-" + xCasaPcComida + "-" + yCasaPcComida).find("div");
        console.log(pecacomida);        



    }
	
}
