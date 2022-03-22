// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FeedComponent from './component/Feed';

function App() {
  return (
    <div className="container qoo-container">
      <div className="qoo-header">
        <img className="qoo-logo" src="https://o.qoo-img.com/statics.qoo-static.com/cdn/img/icon.v-ab0842.png" alt="QooApp"/>  
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
      <div className="qoo-feed">
        <FeedComponent />
      </div>
    </div>
  );
}

export default App;
