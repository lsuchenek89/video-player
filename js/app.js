(function (){
    
    var syncPlayer = document.getElementById('sync-player'); // w calym HTML jest tylko jedno ID poniewaz JS uzyje skryptu tylko do pierwszego
    var playButton = document.getElementById('play-button');
    var player = document.getElementById('video-player');
    var fullscreenPlayer = document.getElementById('fullscreen-button');
    var muteButton = document.getElementById('mute-button');
    var inputForm = document.getElementById('input-form');

    var playButtonIcon = document.getElementById('play-button-icon');    
    var fullScreenButtonIcon = document.getElementById('fullscreen-button-icon');    
    var muteButtonIcon = document.getElementById('mute-button-icon');    
    

    var messages = [];

    function handleClick() {
        if(player.paused){
            player.play();
            playButtonIcon.src = "assets/pause.svg";
        } else {
            player.pause();
            playButtonIcon.src = "assets/play.svg";
        }
    }

    function mute() {
        player.muted = !player.muted;
        if(player.muted){
            muteButtonIcon.src = "assets/volume_off.svg";
        } else {
            muteButtonIcon.src = "assets/volume_up.svg";
        }
    
    }

    playButton.addEventListener('click', handleClick );

    muteButton.addEventListener('click', mute );

    fullscreenPlayer.addEventListener('click', function(){
        syncPlayer.requestFullscreen = syncPlayer.requestFullscreen || syncPlayer.webkitRequestFullscreen || syncPlayer.mozRequestFullScreen;
        document.fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
        document.exitFullscreen = document.exitFullscreen || document.webkitCancelFullScreen || syncPlayer.mozRequestExitFullScreen;

        if(document.fullscreenElement) {
            document.exitFullscreen();
            document.fullscreenElement = null;
            fullScreenButtonIcon.src = "assets/fullscreen.svg";
        } else {
            syncPlayer.requestFullscreen(); 
            fullScreenButtonIcon.src = "assets/fullscreen_exit.svg";
        }
    })

    inputForm.addEventListener('submit', function(event){
        event.preventDefault();
        
        var form = event.target;
        var newMessage = form.elements.message.value;

        var messagesObject = {
            text: newMessage,
            time: Date.now()
        }

        messages.push(messagesObject);

        window.f = form;

        console.log(messages);



    });


})();