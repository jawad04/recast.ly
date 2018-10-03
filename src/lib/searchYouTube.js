var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    maxResults: max,
    part: 'snippet',
    q: query,
    videoEmbeddable: 'true',
    type: 'video',
    key: key
  })
  
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    });
  
};

export default searchYouTube;
