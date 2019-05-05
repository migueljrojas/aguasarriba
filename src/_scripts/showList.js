'use strict';

// Constructor
var ShowList = function() {
  // var videoElement = $('.programas__hero__programa');
  var mainVideo = $('.programas__hero__video iframe');
  var videosContainer = $('.programas__hero__videos-container');

  videosContainer.on('click', '.programas__hero__programa', function() {
    var videoUrl = $(this).data('video');
    
    console.log(videoUrl);
    mainVideo.attr('src', videoUrl);
  });

  var videos = [
    {
      url:'https://www.youtube.com/embed/DQuhA5ZCV9M',
      text: 'Pescando el Río Rivadavia'
    },
    {
      url:'https://www.youtube.com/embed/u5ohm9v4Rqc',
      text: 'Pescanndo el Collón Curá en Junín de los Ándes'
    },
    {
      url:'https://www.youtube.com/embed/wI_qjybEbnE',
      text: 'Pescanndo el Collón Curá en Junín de los Ándes'
    },
    {
      url:'https://www.youtube.com/embed/KjtchBXcNAU',
      text:'Pescando el famoso Río Grande en la mítica estancia María Behety'
    },    
    {
      url:'https://www.youtube.com/embed/qByVxG_9lzE',
      text:'Pescando el famoso Río Grande en la mítica estancia María Behety'
    },
    {
      url:'https://www.youtube.com/embed/qjApxIfOZD0',
      text:'Patagonia Norte con TRANSHUMANTE'
    },
    {
      url:'https://www.youtube.com/embed/1XB6YXSF7DM',
      text:'Patagonia Norte con TRANSHUMANTE'
    },
    {
      url:'https://www.youtube.com/embed/YY6IVbsOHR8',
      text:'Lago Roselot @ Melimoyu Lodge'
    }
  ];

  var showListHtml = generateShowList(videos);

  function generateShowList(videosList) {
    var videosHtmlStructure = videosList.map(function(video, index) {
      return  (
        '<div class="col-xs-12 col-md-6 programas__hero__column">' +
          '<a href="#video" data-video="' + video.url + '" class="programas__hero__programa">' +
            '<div class="programas__hero__programa-video">' +
              '<iframe src=' + video.url +  '></iframe>' +
            '</div>' +
            '<div class="programas__hero__programa-title">programa #' + (index + 1) + '</div>' +
            '<div class="programas__hero__programa-text">' + video.text + '</div>' +
          '</a>' +
        '</div>'
      );
    }); 

    return videosHtmlStructure;
  }

  function appendShowList(videosHtmlStructure) {
    videosContainer.append(videosHtmlStructure);
  }

  appendShowList(showListHtml);
};

module.exports = ShowList;
