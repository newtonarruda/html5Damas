var tabuleiro = new Array(new Array());
var xCasaInicial = 0;
var yCasaInicial = 0;

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
        },
        start: function( event, ui )
        {
            var parent = $(this).parents('td');
            // console.log(parent);
            xCasaInicial = parseInt(parent.attr('id').substring(3, 4));
            yCasaInicial = parseInt(parent.attr('id').substring(5, 6));            
        },

        revert: function(dropped) {
            //console.log(dropped);

            var at_placeholder = dropped && dropped[0].id && (dropped[0].id.substring(0, 2) == "td" || dropped[0].id.substring(0, 3) == "box") ;

            if(dropped[0] && $(dropped[0].id))
            {

                // console.log("chamando " + dropped[0].id);
                // console.log($("#" + dropped[0].id)); //.find("div").length
                // console.log($("#" + dropped[0].id).find("div").length);

                // casa[0] armazena a posição x, enquanto casa[1] armazena a posição y
                var casa = dropped[0].id.replace('td-', '').split("-");

                //console.log((tabuleiro[casa[0]][casa[1]] && tabuleiro[casa[0]][casa[1]] != ""));
                
                // Opção A> Verificando se existe peça na casa, usando a matriz.
                // if(tabuleiro[casa[0]][casa[1]] && tabuleiro[casa[0]][casa[1]] != "")
                //     return true;

                // Opção B> Verificando se existe peça com div. não funciona se não movermos as divs entre as td´s 
                //if(dropped[0] && $("#" + dropped[0].id).find("div").length > 0) 
                //if(casa[0] && $("#" + dropped[0].id))
                //    return true;

                console.log("movendo peca " + $(this).attr('id') + " de " + yCasaInicial + "," + xCasaInicial + " a " + dropped[0].id);
                movePeca($(this).attr('id'), "td-" + yCasaInicial + "-" + xCasaInicial, dropped[0].id);
            }

            return !at_placeholder;
        } ,
        revertDuration: 200
    });    

    $(".casa").droppable({

        over: function(event, ui) {

        },
        out: function(event, ui) {
         
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

function validaMovePeca(idPeca, idCasaInicial, idCasaFinal){
    var resultado = true;
    
    var _xCasaInicial = parseInt(idCasaInicial.substring(3, 4));
    var _yCasaInicial = parseInt(idCasaInicial.substring(5, 6));
    var _xCasaFinal = parseInt(idCasaFinal.substring(3, 4));
    var _yCasaFinal = parseInt(idCasaFinal.substring(5, 6));

    console.log(idPeca.substring(0,1));

    if(idPeca.substring(0,1) == "A")
    {
        if((_xCasaInicial - _xCasaFinal == 1 || _xCasaInicial - _xCasaFinal == -1) 
                && (_yCasaInicial - _yCasaFinal == 1)) {
            resultado = true;
        }else{
            resultado = false;
        }
    }
    else
    {
        if((_xCasaInicial - _xCasaFinal == 1 || _xCasaInicial - _xCasaFinal == -1) 
                && (_yCasaInicial - _yCasaFinal == -1)) {
            resultado = true;
        }else{
            resultado = false;
        }
    }


    
    return resultado;
}

function movePeca(idPeca, idCasaInicial, idCasaFinal){

    xCasaInicial = parseInt(idCasaInicial.substring(3, 4));
    yCasaInicial = parseInt(idCasaInicial.substring(5, 6));
    
    if(validaMovePeca(idPeca, idCasaInicial, idCasaFinal)){
        console.log("movendo peça");
        tabuleiro[parseInt(idCasaFinal.substring(3, 4))][parseInt(idCasaFinal.substring(5, 6))] = idPeca;
        tabuleiro[parseInt(idCasaInicial.substring(3, 4))][parseInt(idCasaInicial.substring(5, 6))] = "";

        console.log("#td-" + idCasaFinal.substring(3, 4) + "-" + idCasaFinal.substring(5, 6));
        console.log("#td-" + yCasaInicial + "-" + xCasaInicial);

        $("#td-" + idCasaFinal.substring(3, 4) + "-" + idCasaFinal.substring(5, 6)).append($("#" + idPeca));
        $("#td-" + yCasaInicial + "-" + xCasaInicial).find("#" + idPeca).remove();        
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
