
 function check() {
    
  var check = confirm('Etes-vous  sure de vos réponses ? ') ;

     if(check == true ) checkResponse() ;

 }

 function checkResponse(){

  var TrueResponse=Array('2','2','1','3','2')   , score2=localStorage.getItem('score-js')  , j =0 ;

  for(var k =1 ; k<=5;k++){

     var UserResponse = document.forms['quiz']['réponse'+k];
    
     if( UserResponse != '' && TrueResponse[k-1] == UserResponse.value ) score2 ++  ;

  }  

  
        document.getElementById("ShowScore").innerHTML = 
        
         "<h3> votre score  est : "+score2+" / 10 </h3>" +
         
         " <button class='button' onclick='RollBack()' style='margin-left:10%'>Revenir vers le quiz </button>";

 
         document.getElementById("ShowScore").style.color = "blue";
      
         document.getElementById("ShowScore").style.border = "1px solid black";

         document.getElementById("ShowScore").style.display = "inline";

         document.getElementById("ShowQuizz").style.display = "none";

        
         //save score : 

         localStorage.setItem("score2-js", score2);

} 

function RollBack(){

  document.getElementById("ShowQuizz").style.display = "flex";

  document.getElementById("ShowScore").style.display = "none";


}



       




