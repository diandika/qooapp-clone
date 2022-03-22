import React from "react";
import PostComponent from "./Post";

export default class FeedComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    async componentDidMount(){
        var postList = await fetch('https://animechan.vercel.app/api/quotes')
                        .then(response => response.json())
                        .then(json => {return json});

        console.log(postList);
        this.setState({
            "data": postList
        });
    }

    

    render(){
        return (
            <div>
                {this.state.data != null ? <PostComponent data={this.state.data} /> : <p>loading</p>}
            </div>
        );
    }
}