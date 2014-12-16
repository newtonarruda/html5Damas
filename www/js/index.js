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
    $(".peca").draggable({ grid: [ 50, 50 ] });
});


function resetPecasVermelhas(){
    var peca_1_1 = new Object();
    peca_1_1.id = "peca-1-1";
    peca_1_1.posicaoInicial = "td-1-1";
    peca_1_1.posicaoFinal = "";
    peca_1_1.tipo = "V";
    
    var peca_1_2 = new Object();
    peca_1_2.id = "peca-1-2";
    peca_1_2.posicaoInicial = "td-1-2";
    peca_1_2.posicaoFinal = "";
    peca_1_2.tipo = "V";
    
    var peca_1_3 = new Object();
    peca_1_3.id = "peca-1-3";
    peca_1_3.posicaoInicial = "td-1-3";
    peca_1_3.posicaoFinal = "";
    peca_1_3.tipo = "V";
    
    var peca_1_4 = new Object();
    peca_1_4.id = "peca-1-4";
    peca_1_4.posicaoInicial = "td-1-4";
    peca_1_4.posicaoFinal = "";
    peca_1_4.tipo = "V";
    
    var peca_2_1 = new Object();
    peca_2_1.id = "peca-2-1";
    peca_2_1.posicaoInicial = "td-2-1";
    peca_2_1.posicaoFinal = "";
    peca_2_1.tipo = "V";
    
    var peca_2_2 = new Object();
    peca_2_2.id = "peca-2-2";
    peca_2_2.posicaoInicial = "td-2-2";
    peca_2_2.posicaoFinal = "";
    peca_2_2.tipo = "V";
    
    var peca_2_3 = new Object();
    peca_2_3.id = "peca-2-3";
    peca_2_3.posicaoInicial = "td-2-3";
    peca_2_3.posicaoFinal = "";
    peca_2_3.tipo = "V";
    
    var peca_2_4 = new Object();
    peca_2_4.id = "peca-2-4";
    peca_2_4.posicaoInicial = "td-2-4";
    peca_2_4.posicaoFinal = "";
    peca_2_4.tipo = "V";
    
    var peca_3_1 = new Object();
    peca_3_1.id = "peca-3-1";
    peca_3_1.posicaoInicial = "td-3-1";
    peca_3_1.posicaoFinal = "";
    peca_3_1.tipo = "V";
    
    var peca_3_2 = new Object();
    peca_3_2.id = "peca-3-2";
    peca_3_2.posicaoInicial = "td-3-2";
    peca_3_2.posicaoFinal = "";
    peca_3_2.tipo = "V";
    
    var peca_3_3 = new Object();
    peca_3_3.id = "peca-3-3";
    peca_3_3.posicaoInicial = "td-3-3";
    peca_3_3.posicaoFinal = "";
    peca_3_3.tipo = "V";
    
    var peca_3_4 = new Object();
    peca_3_4.id = "peca-3-4";
    peca_3_4.posicaoInicial = "td-3-4";
    peca_3_4.posicaoFinal = "";
    peca_3_4.tipo = "V";

    tabuleiro[1][1] = peca_1_1;    
    tabuleiro[1][2] = peca_1_2;    
    tabuleiro[1][3] = peca_1_3;    
    tabuleiro[1][4] = peca_1_4;    
    tabuleiro[2][1] = peca_2_1;    
    tabuleiro[2][2] = peca_2_2;    
    tabuleiro[2][3] = peca_2_3;    
    tabuleiro[2][4] = peca_2_4;    
    tabuleiro[3][1] = peca_3_1;    
    tabuleiro[3][2] = peca_3_2;    
    tabuleiro[3][3] = peca_3_3;    
    tabuleiro[3][4] = peca_3_4;    
}

function resetPecasAzuis(){
    var peca_6_1 = new Object();
    peca_1_1.id = "peca-6-1";
    peca_1_1.posicaoInicial = "td-6-1";
    peca_1_1.posicaoFinal = "";
    peca_1_1.tipo = "A";
    
    var peca_6_2 = new Object();
    peca_6_2.id = "peca-6-2";
    peca_6_2.posicaoInicial = "td-6-2";
    peca_6_2.posicaoFinal = "";
    peca_6_2.tipo = "A";
    
    var peca_6_3 = new Object();
    peca_6_3.id = "peca-6-3";
    peca_6_3.posicaoInicial = "td-6-3";
    peca_6_3.posicaoFinal = "";
    peca_6_3.tipo = "A";
    
    var peca_6_4 = new Object();
    peca_6_4.id = "peca-6-4";
    peca_6_4.posicaoInicial = "td-6-4";
    peca_6_4.posicaoFinal = "";
    peca_6_4.tipo = "A";
    
    var peca_7_1 = new Object();
    peca_7_1.id = "peca-7-1";
    peca_7_1.posicaoInicial = "td-7-1";
    peca_7_1.posicaoFinal = "";
    peca_7_1.tipo = "A";
    
    var peca_7_2 = new Object();
    peca_7_2.id = "peca-7-2";
    peca_7_2.posicaoInicial = "td-7-2";
    peca_7_2.posicaoFinal = "";
    peca_7_2.tipo = "A";
    
    var peca_7_3 = new Object();
    peca_7_3.id = "peca-7-3";
    peca_7_3.posicaoInicial = "td-7-3";
    peca_7_3.posicaoFinal = "";
    peca_7_3.tipo = "A";
    
    var peca_7_4 = new Object();
    peca_7_4.id = "peca-7-4";
    peca_7_4.posicaoInicial = "td-7-4";
    peca_7_4.posicaoFinal = "";
    peca_7_4.tipo = "A";
    
    var peca_8_1 = new Object();
    peca_8_1.id = "peca-8-1";
    peca_8_1.posicaoInicial = "td-8-1";
    peca_8_1.posicaoFinal = "";
    peca_8_1.tipo = "A";
    
    var peca_8_2 = new Object();
    peca_8_2.id = "peca-8-2";
    peca_8_2.posicaoInicial = "td-8-2";
    peca_8_2.posicaoFinal = "";
    peca_8_2.tipo = "A";
    
    var peca_8_3 = new Object();
    peca_8_3.id = "peca-8-3";
    peca_8_3.posicaoInicial = "td-8-3";
    peca_8_3.posicaoFinal = "";
    peca_8_3.tipo = "A";
    
    var peca_8_4 = new Object();
    peca_8_4.id = "peca-8-4";
    peca_8_4.posicaoInicial = "td-8-4";
    peca_8_4.posicaoFinal = "";
    peca_8_4.tipo = "A";

    tabuleiro[6][1] = peca_6_1;    
    tabuleiro[6][2] = peca_6_2;    
    tabuleiro[6][3] = peca_6_3;    
    tabuleiro[6][4] = peca_6_4;    
    tabuleiro[7][1] = peca_7_1;    
    tabuleiro[7][2] = peca_7_2;    
    tabuleiro[7][3] = peca_7_3;    
    tabuleiro[7][4] = peca_7_4;    
    tabuleiro[8][1] = peca_8_1;    
    tabuleiro[8][2] = peca_8_2;    
    tabuleiro[8][3] = peca_8_3;    
    tabuleiro[8][4] = peca_8_4;    
}
