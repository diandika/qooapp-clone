import React from "react";

import './Post.css';

// export default class PostComponent extends React.Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }

//     render(){
//         return(
//             <div className="post-card">
//                 <div className="user-picture">
//                     <p>picture</p>
//                 </div>
//                 <div className="post-content">
//                     <p>name</p>
//                     <p>post</p>
//                 </div>
//             </div>
//         )
//     }
// }

const PostComponent = (props) => {
    const posts = props.data;
    console.log(props);
    const PostList = posts.map((post) => 
        <div className="post-card">
            <div className="user-picture">
                <p>picture</p>
            </div>
            <div className="post-content">
                <p>{post.character}</p>
                <p>{post.quote}</p>
            </div>
        </div>
    );

    return PostList;
}

export default PostComponent;