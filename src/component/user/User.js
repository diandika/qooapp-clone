import React from "react";

export default class User extends React.Component {
    

    render() {
        return (
            <div className="user-container container">
                 <div className="user-header">
                     <img alt="user picture" />
                     <p>user name</p>
                 </div>
                 <div className="user-posts">
                     <p>user posts</p>
                 </div>
            </div>
        );
    }
}