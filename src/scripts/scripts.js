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

var donationsChartElement = document.getElementById("donationsChart").getContext('2d');

var donationsChart = new Chart(donationsChartElement, {
    type: 'doughnut',
    data: {
        labels: ["Private City Fund", "Incubator Program", "City Chain Foundation"],
        datasets: [{
            label: "Donations Allocation",
            backgroundColor: ['#E0E01D', '#252422', '#DFAB3C'],
            borderColor: '#ffffff',
            data: [55, 20, 25],
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                padding: 20,
                fontSize: 14,
                fontStyle: 'normal',
                fontFamily: "'Source Sans Pro', sans-serif"
            }
        },
        tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.labels[tooltipItems.index] + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                }
            }
        },
    }
});



var donationsChartElement2 = document.getElementById("donationsChart2").getContext('2d');

var donationsChart2 = new Chart(donationsChartElement2, {
    type: 'doughnut',
    data: {
        labels: ["Software Development", "Operations", "Marketing", "Funding (projects)", "Advisors", "Legal", "Community"],
        datasets: [{
            label: "Donations Allocation",
            backgroundColor: ['#FFAA00', '#D0D0A2', '#808000', '#403318', '#201A0C', '#856B27', '#BD9635'],
            borderColor: '#ffffff',
            data: [40, 8, 14, 10, 2, 6, 20],
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: true,
            position: 'right',
            labels: {
                padding: 8,
                fontSize: 14,
                boxWidth: 24,
                fontColor: 'white',
                fontStyle: 'normal',
                fontFamily: "'Source Sans Pro', sans-serif"
            }
        },
        tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.labels[tooltipItems.index] + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                }
            }
        },
    }
});