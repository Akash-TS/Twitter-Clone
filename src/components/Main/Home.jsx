import React from "react";
import Header from "./Header";
import PostForm from "./PostForm";
import TweetList from "./TweetList";

export class Home extends React.Component {

    render() {
        return (
            <div className="home disable-scroll">
                <Header page="home" />
                <main>
                    <PostForm />
                    <TweetList />
                </main>
            </div>
        );
    }
}