
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
          height: '370',
          width: '660',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            controls: 0,
            disablekb: 0,
            modestbranding: 0,
            rel: 0,
            autoplay: 0,
            showinfo: 0
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
      }

function onPlayerStateChange (event) {
    switch(event.data) {
        case 1:
        $('.player__btn-play').addClass('paused');
        $('.player__bg').addClass('hidden');
        break;
        case 2:
        $('.player__btn-play').removeClass('paused');
    }
}


function onPlayerReady() {
    var duration = player.getDuration();
    var interval;

    clearInterval(interval);
    interval = setInterval(() => {
        var completed = player.getCurrentTime();
        var percent = (completed / duration) * 100;

        changePinPosition(percent);

    }, 1000)
}


$('.player__btn-play').on('click', e => {
    var playerStatus = player.getPlayerState();

    if (playerStatus !== 1) {
        player.playVideo();
    } else  {
        player.pauseVideo();

    }
})

$('.player__scale--video').on('click', e => {
    var bar = $(e.currentTarget);
    var newPinPosition = e.pageX - bar.offset().left;
    var clickPercent = (newPinPosition / bar.width()) * 100;
    var newPlayerTime = (player.getDuration() / 100) * clickPercent;
    var scalePinVideo = $('.scale__pin--video');

    changePinPosition(clickPercent, scalePinVideo);
    player.seekTo(newPlayerTime);

}) 

$('.player__bg').on('click', e => {
    player.playVideo(); 
})

function changePinPosition (percent, elem) {
    elem.css({
        left: `${percent}%`
    });
}

$('.player__volume').on('click', e => {

    var volumeLevel = player.isMuted();

    if (!volumeLevel) {
        player.mute();

    } else {
        player.unMute();
    }
})
 /////////////////////////////////////////////////////////////////////////////////

$('.player__scale--volume').on('click', e => {
    var scalePinVolume = $('.scale__pin--volume');
    var barVolume = $(e.currentTarget);
    var newVolumePinPosition = e.pageX - barVolume.offset().left;
    var clickPercentVolume = (newVolumePinPosition / barVolume.width()) * 100;

    changePinPosition(clickPercentVolume, scalePinVolume);
    player.setVolume(clickPercentVolume);

}) 




      