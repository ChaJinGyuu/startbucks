var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //영상이 재생할 유튜브 ID
    playerVars : {
        autoplay : true, //자동 재생 여부
        loop : true, //반복 재생 여부
        playlist : 'An6LvWQuj_8' //반복 재상할 영상 ID
    },
    events: {
      onReady : function(event){
          event.target.mute(); //음소거
      }      
    }
  });
}