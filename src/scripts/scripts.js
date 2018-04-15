window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var offset = document.getElementById('first').offsetTop - 100;

    if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
        document.getElementById("top").classList.add('sticky');
    } else {
        document.getElementById("top").classList.remove('sticky');
    }
}

var videoLink = document.getElementById('video-link');

if (videoLink) {
    // Non-JavaScript clients will navigate to video.html, others will see video-popup.
    videoLink.href = '#';

    videoLink.addEventListener('click', function (e) {
        document.getElementById('video-player').classList.add('video-player-active');

        var frame = document.getElementById("youtube");
        frame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }, true);

    document.getElementById('video-backdrop').addEventListener('click', function (e) {
        document.getElementById('video-player').classList.remove('video-player-active');

        var frame = document.getElementById("youtube");
        frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
}
