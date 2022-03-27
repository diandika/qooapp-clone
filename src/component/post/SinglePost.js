import React from "react";

import '../feed/Post.css';

const SinglePostComponent = (props) => {
    const post = props.data;
    console.log(post);
    return (
        <div className="post-card">
            <div className="user-picture">
                <img src="https://safebooru.org//samples/3753/sample_4d31e01287d572061edb8544bb6a271a3344f9fe.jpg?3919609" alt="user pic"
                    width={40}
                    height= {40} />
            </div>
            <div className="post-content">
                <p className="user-name" value={"user-profile"} onClick={props.click}>{post.character}</p>
                <p>{post.quote}</p>
            </div>
        </div>
)};


export default SinglePostComponent;