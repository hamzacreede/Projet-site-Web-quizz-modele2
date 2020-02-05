 //var a=setInterval(test,3000) ;
function last(){

    if(localStorage.getItem('score') != null) alert("votre dernier score : "+localStorage.getItem('score')) ;
}

 function check() {
    
  var check = confirm('Etes-vous  sure de vos réponses ? ') ;

     if(check == true ) checkResponse() ;

 }

 function checkResponse(){

  var TrueResponse=Array('2','4','2','1','2','2','4')   , score=0  , j =0 ;

  for(var k =1 ; k<=7;k++){

     var UserResponse = document.forms['quiz']['réponse'+k];
    
     if( UserResponse != '' && TrueResponse[k-1] == UserResponse.value ) score ++ ; 

  }  

 


        document.getElementById("ShowScore").innerHTML = 
        
         "<h3> votre score  est : "+score+" / 7 </h3>" +
         
         " <button class='button' onclick='RollBack()'>Revenir vers le quiz </button>"+

         " <button class='button' onclick='checkLevel()'>Passer au niveau suivant </button> " ;
    
         document.getElementById("ShowScore").style.color = "blue";
      
         document.getElementById("ShowScore").style.border = "1px solid black";

         document.getElementById("ShowScore").style.display = "inline";

         document.getElementById("ShowQuizz").style.display = "none";

        
         //save score : 

         localStorage.setItem("score", score);

} 

function RollBack(){

  document.getElementById("ShowQuizz").style.display = "flex";

  document.getElementById("ShowScore").style.display = "none";


}


function checkLevel(){

  var score = localStorage.getItem('score') ; 

   if(score == null) alert("vous devez d'abord passer les quizz de niveau débutant !");

    else if(score < 7 )
      
      alert("votre dernier score : "+score +" /7 est insuffisant pour passer au Niveau Avancé ") ;
      

      else 

          window.location.href ="avance.html" ;


    
}
       





