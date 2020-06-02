(function(window)
 {
var byeSpeaker={};    /*hello speaker object*/
    var speakWord="Good Bye";
    byeSpeaker.speak=function(name){
    console.log(speakWord + " " + name);
    }
    
    window.byeSpeaker=byeSpeaker;      /*hellospeaker object exposed to the outside/window object*/
})(window);