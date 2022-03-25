import React from "react";
import FeedComponent from "../feed/Feed";
import "./User.css";

export default class User extends React.Component {
    

    render() {
        return (
            <div className="user-container container">
                 <div className="user-header container">
                     <div className="user-profile">
                        <img src="https://safebooru.org//samples/3753/sample_4d31e01287d572061edb8544bb6a271a3344f9fe.jpg?3919609" alt="user picture" />
                        <p className="user-name">{this.props.name}</p>
                    </div>
                 </div>
                 <div className="user-posts">
                     <FeedComponent user={this.props.name} />
                 </div>
            </div>
        );
    }
}