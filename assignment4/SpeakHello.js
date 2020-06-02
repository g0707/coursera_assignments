(function(window)
 {
var helloSpeaker={};    /*hello speaker object*/
    var speakWord="Hello";
    helloSpeaker.speak=function(name){
    console.log(speakWord + " " + name);
    }
    
    window.helloSpeaker=helloSpeaker;      /*hellospeaker object exposed to the outside/window object*/
})(window);