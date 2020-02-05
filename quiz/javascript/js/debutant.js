 //var a=setInterval(test,3000) ;
function last(){

    if(localStorage.getItem('score-js') != null) alert("votre dernier score : "+localStorage.getItem('score-js')) ;
}

 function check() {
    
  var check = confirm('Etes-vous  sure de vos réponses ? ') ;

     if(check == true ) checkResponse() ;

 }

 function checkResponse(){

  var TrueResponse=Array('2','1','3','4','3')   , score=0  , j =0 ;

  for(var k =1 ; k<=5;k++){

     var UserResponse = document.forms['quiz']['réponse'+k];
    
     if( UserResponse != '' && TrueResponse[k-1] == UserResponse.value ) score ++ ; 

  }  

 


        document.getElementById("ShowScore").innerHTML = 
        
         "<h3> votre score  est : "+score+" / 5 </h3>" +
         
         " <button class='button' onclick='RollBack()'>Revenir vers le quiz </button>"+

         " <button class='button' onclick='checkLevel()'>Passer au niveau suivant </button> " ;
    
         document.getElementById("ShowScore").style.color = "blue";
      
         document.getElementById("ShowScore").style.border = "1px solid black";

         document.getElementById("ShowScore").style.display = "inline";

         document.getElementById("ShowQuizz").style.display = "none";

        
         //save score : 

         localStorage.setItem("score-js", score);

} 

function RollBack(){

  document.getElementById("ShowQuizz").style.display = "flex";

  document.getElementById("ShowScore").style.display = "none";


}


function checkLevel(){

  var score = localStorage.getItem('score-js') ; 

   if(score == null) alert("vous devez d'abord passer les quizz de niveau débutant !");

    else if(score < 5 )
      
      alert("votre dernier score : "+score +" /5 est insuffisant pour passer au Niveau Avancé ") ;
      

      else 

          window.location.href ="avance.html" ;


    
}
       





