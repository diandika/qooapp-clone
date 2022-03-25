// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FeedComponent from './component/feed/Feed';
import React from 'react';
import User from './component/user/User';
import SinglePostComponent from './component/post/SinglePost';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: "feed"
    }
  }

  click = pageName => {
    if (pageName.target.getAttribute('value') === "user-profile"){
      this.setState({
        page: pageName.target.getAttribute('value'),
        username: pageName.target.innerText
      });
    } else if (pageName.target.getAttribute('value') === "post") {
      // console.log(pageName.target.getAttribute('data').id);
      console.log(pageName.target.getAttribute('data'));
      this.setState({
        page: pageName.target.getAttribute('value'),
        data: JSON.parse(pageName.target.getAttribute('data'))
      })
    }
  }

  selectPage = () => {
    switch (this.state.page) {
      case "feed":
        return <FeedComponent click={this.click} />
      case "user-profile":
        return <User name={this.state.username} click={this.click} />
      case "post":
        return <SinglePostComponent click={this.state.click} data={this.state.data} />
      default:
        return <FeedComponent click={this.click} />
    }
  }

  render() {
    return (
      <div className="container qoo-container">
        <div className="qoo-header">
          <img value={"feed"} onClick={this.click} className="qoo-logo" src="https://o.qoo-img.com/statics.qoo-static.com/cdn/img/icon.v-ab0842.png" alt="QooApp"/>  
          <sub>English</sub>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}
        </div>
        <div className="qoo-ntent">
          {this.selectPage(this.state.page)}
        </div>
      </div>
    );
  }
}

export default App;
