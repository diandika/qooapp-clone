import React from "react";
import PostComponent from "./Post";

export default class FeedComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            click: this.props.click
        };
    }

    async componentDidMount(){
        var postList = await fetch('https://animechan.vercel.app/api/quotes')
                        .then(response => response.json())
                        .then(json => {return json});

        // console.log(postList);
        for (var post in postList){
            postList[post].id = post;
        }
        this.setState({
            "data": postList
        });
    }

    render(){
        return (
            <div>
                {this.state.data != null ? <PostComponent click={this.state.click} data={this.state.data} /> : <p>loading</p>}
            </div>
        );
    }
}