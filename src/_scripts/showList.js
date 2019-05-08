'use strict';

// Constructor
var ShowList = function() {
  // var videoElement = $('.programas__hero__programa');
  var mainVideo = $('.programas__hero__video iframe');
  var videosContainer = $('.programas__hero__videos-container');
  var mainVideoIndex = $('.programas__hero__video-title');
  var mainVideoName = $('.programas__hero__video-text');

  videosContainer.on('click', '.programas__hero__programa', function() {
    var videoUrl = $(this).data('video');
    var videoName = $(this).data('name');
    var videoIndex = $(this).data('index');
    
    mainVideo.attr('src', videoUrl);
    mainVideoIndex.html('PROGRAMA #' + videoIndex);
    mainVideoName.html(videoName);
  });

  var videos = [
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4971305&amp;endcard=false',
      text: 'Pescando el Río Rivadavia'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4833008&amp;endcard=false',
      text: 'Pescanndo el Collón Curá en Junín de los Ándes'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4808948&amp;endcard=false',
      text: 'Pescanndo el Collón Curá en Junín de los Ándes'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4706934&amp;endcard=false',
      text:'Pescando el famoso Río Grande en la mítica estancia María Behety'
    },    
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4669056&amp;endcard=false',
      text:'Pescando el famoso Río Grande en la mítica estancia María Behety'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4650327&amp;endcard=false',
      text:'Patagonia Norte con TRANSHUMANTE'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4533693&amp;endcard=false',
      text:'Patagonia Norte con TRANSHUMANTE'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4442116&amp;endcard=false',
      text:'Lago Roselot @ Melimoyu Lodge'
    },

    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4388699&amp;endcard=false',
      text: 'Rio Palena @ Melimoyu Lodge'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4361946&amp;endcard=false',
      text: 'Rio Palena @ Melimoyu Lodge'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4294397&amp;endcard=false',
      text: 'Pescando el Limay medio con Limay Monsters Fly Fishing'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4293956&amp;endcard=false',
      text:'Pescando el Limay medio con Limay Monsters Fly Fishing'
    },    
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4190840&amp;endcard=false',
      text:'Pescando el Limay medio con Limay Monsters Fly Fishing'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4191311&amp;endcard=false',
      text:'Caribe Mexicano'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4102973&amp;endcard=false',
      text:'Caribe Mexicano'
    },
    {
      url:'http://www.espn.com.ar/core/video/iframe?id=4106039&amp;endcard=false',
      text:'Caribe Mexicano'
    }
  ];

  var showListHtml = generateShowList(videos);

  function generateShowList(videosList) {
    var videosHtmlStructure = videosList.map(function(video, index) {
      return  (
        '<div class="col-xs-12 col-md-6 programas__hero__column">' +
          '<a href="#video" data-index="'+ (videosList.length - index) +'" data-name="'+ video.text +'" data-video="' + video.url + '" class="programas__hero__programa">' +
            '<div class="programas__hero__programa-video">' +
              '<iframe src=' + video.url +  '></iframe>' +
            '</div>' +
            '<div class="programas__hero__programa-title">programa #' + (videosList.length - index) + '</div>' +
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
