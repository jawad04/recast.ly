import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    };
  }
  
  // componentDidMount() {
  //   this.getYouTubeVideos('cats');
  // }
  
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => 
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  onVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer onVideoListEntryClick={this.onVideoListEntryClick.bind(this)} video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList onVideoListEntryClick={this.onVideoListEntryClick.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


