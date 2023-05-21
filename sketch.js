
 //Desenho da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro / 2

 //Velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6
let comprimentoRect = 10
let alturaRect = 90

//variavel da raquete 
let xRect = 5
let yRect = 150

//variavel do oponente
let xRectOponente = 585
let yRectOponente = 150
let velocidadeOponent;

//colisao da raquete com a bolinha
let hit = false 

//placar do jogo 
let meuspontos = 0
let pontosdooponente = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  viewball();
  speedball();
  edgeball();
  viewrect();
  movimentrect();
  //colisaoball();
  hitrect(xRect,yRect);
  hitrect(xRectOponente,yRectOponente)
  viewrect(xRectOponente,yRectOponente);
  viewrect(xRect, yRect);
  movimentrectoponente();
  placardojogo();
  marcadordeponto();
  bolinhaNaoFicaPresa();
}

       function viewball(){
  circle(xBolinha, yBolinha, diametro)
}

       function speedball(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

       function edgeball(){
     if (xBolinha + raio> width || 
      xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio< 0){
    velocidadeYBolinha *= -1;
  }
}

      function viewrect(x,y){
        rect(x, y, comprimentoRect, 
             alturaRect)

}
      function movimentrect(){
        if (keyIsDown(UP_ARROW)){
          yRect -= 10
        }
        if (keyIsDown(DOWN_ARROW)){
          yRect += 10
        }
}
 
     function colisaoball(){
       if (xBolinha - raio < xRect + comprimentoRect && yBolinha - raio < yRect + alturaRect && yBolinha + raio > yRect ){
         velocidadeXBolinha *= -1
       }
}

     function hitrect(x,y){
      hit =
collideRectCircle(x,y,comprimentoRect,alturaRect,xBolinha,
                         yBolinha,raio)
     if (hit){
       velocidadeXBolinha *= -1
     }
}

     function movimentrectoponente(){
      if (keyIsDown(87)){
          yRectOponente -= 10
        }
        if (keyIsDown(83)){
          yRectOponente += 10
        }
}
      //velocidadeOponente = yBolinha - yRectOponente - comprimentoRect / 2 -30;
       //yRectOponente += velocidadeOponente

    function placardojogo(){
       stroke(255)
       textAlign(CENTER)
       textSize(20)
       fill(color(255, 140 ,0))
       rect(130, 10, 40, 20)
       fill(255)
       text(meuspontos, 150, 26)
       fill(color(255, 140 ,0))
       rect(430, 10, 40, 20)
       fill(255)
       text(pontosdooponente, 450, 26)
}
    function marcadordeponto(){
      if (xBolinha > 590){
        meuspontos += 1
      }
      if (xBolinha < 10){
        pontosdooponente += 1
      }
}

   
    function bolinhaNaoFicaPresa(){
     if (xBolinha - raio < 0){
       xBolinha = 23
    }
}
