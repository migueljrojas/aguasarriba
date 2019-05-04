'use strict';

var InstagramImages = function() {

  var imagesContainer = $('.home__instagram__images');

  var imagePages = [];
  var pageIndex = 0;


  function getImages() {
    $.when(
        getInstagramDataFromHashtags(['aguasarribaespn'])
    ).then(
      function(instagramResponse) {
          var processedImages = getImagesUrl(instagramResponse);

          return processedImages;
      }
    ).done(
      function(images) {
          imagePages = _.chunk(images, 5);
          appendImages();
          return;
      }
    );
  }

  function appendImages() {
    if(pageIndex < imagePages.length) {
      var htmlStructure = imagePages[pageIndex].map(function(image, index) {
        return (
          '<div class="home__instagram__image">'+
            '<img src="' + image + '"/>'+
          '</div>'
        )
      });

      imagesContainer.append(htmlStructure);
      pageIndex += 1;
      new WOW().init();
    } 
  }

  function getInstagramDataFromHashtags(hashtags){
    return new Promise(function(resolve, reject) {
      resolve(
        hashtags.map(function(hash, index){
          return new Promise(function(resolve, reject) {
            resolve(
              $.get('https://www.instagram.com/explore/tags/'+ hash +'/?__a=1', function (data, status) {
                  return data;
              })
            );
          })
        })
      );
    });
  }
    
  function getImagesUrl(data){
      console.log(data);
      return new Promise(function(resolve, reject) {
          resolve(
              Promise.all(data).then(function(values) {
                  var rawImagesArray = values.map(function(imageSet){
                      return imageSet.graphql.hashtag.edge_hashtag_to_media.edges;
                  });
                  var mergedImageArrays = [].concat.apply([], rawImagesArray);
                  var imageUrls = mergedImageArrays.map(function(image) {
                      return image.node.thumbnail_src;
                  });
                  return imageUrls;
              })
          )
      });
  }

  getImages();
}

module.exports = InstagramImages;
