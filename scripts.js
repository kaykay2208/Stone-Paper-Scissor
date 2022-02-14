document.addEventListener('DOMContentLoaded', function ()
{
  // INITIATING VAIRABLE
  var  x =localStorage.getItem('p1');
  var  y =localStorage.getItem('p2');

  if(x.length ==0){
    x="1";
  }
  if(y.length ==0){
    y ="2";
  }
  let result1=0;
  let result2=0;
  let resultfinal=0;
  var player1image =document.querySelector('#img1');
  var player2image =document.querySelector('#img2');
  var result=document.querySelector('#result');
  var submission=document.querySelector('#buu');
  // QUERY
  document.querySelector( '#player1 ').innerHTML=x;
  document.querySelector( '#player2' ).innerHTML=y;
  var resul=document.querySelector('#butu');
  var butn= document.querySelector('#buton');
  resul.disabled=true;

  function clk(){
  player1image.classList.add("anim");
  player2image.classList.add("anim");
  if (result1>2|| result2>2){
    resul.disabled = false;
    butn.disabled=true;
    localStorage.setItem('r1',result1);
    localStorage.setItem('r2',result2);
  }

setTimeout(myfunc,1000);}
  function myfunc() {

          let player1score=0;
          let player2score=0;

          player1score=Math.floor( (Math.random()*3)+1);
          player2score=Math.floor( (Math.random()*3)+1);


          player1image.classList.remove("anim");
          player2image.classList.remove("anim");


          if (player1score==player2score){
            result.innerHTML='Match Draw';
          }
          if(player1score==1 && player2score==3){
            result.innerHTML=y+' Won';
            result2+=1;
          }else if(player1score==3 && player2score==1){
            result.innerHTML=x+' won';
            result1+=1;
          }
          else if (player1score>player2score){
              result.innerHTML=y+' won';
              result2+=1;
          }
          else if (player1score<player2score) {

            result.innerHTML=x+' Won';
              result1+=1;
          }


          switch(player1score){
            case 1:
              player1image.src="images/output-onlinepngtools (2).png";
              break;
            case 2:
              player1image.src="images/output-onlinepngtools (3).png";
              break;
            case 3:
              player1image.src="images/output-onlinepngtools (1).png";
              break;
          }

          switch(player2score){
            case 1:
              player2image.src="images/output-onlinepngtools (5).png";
              break;
            case 2:
              player2image.src="images/hand-scissors-solid.png";
              break;
            case 3:
              player2image.src="images/output-onlinepngtools (4).png";
              break;
          }

 }

 butn.addEventListener("click", clk);






});
