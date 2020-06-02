(function(window)
 {
     var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
     
     for(i=0;i<names.length;i++){
         
         var char=names[i].charAt(0).toLowerCase();
         
         if(char==='j')
         {
            byeSpeaker.speak(names[i]) 
         }
         else
         {
         helloSpeaker.speak(names[i])
     }
     }
})(window);