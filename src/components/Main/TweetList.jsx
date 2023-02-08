import React from "react";
import { TweetsContext } from "../../contexts/TweetsContext";
import Tweet from "./Tweet";

export default class TweetList extends React.Component {

    render() {
        return(
            <div className="post-list">
                <TweetsContext.Consumer>
                    {
                        value => {
                            return value.tweets.map(t => {
                                return <Tweet key={t.id} tweet={t} />
                            })
                        }
                    }
                </TweetsContext.Consumer>
            </div>
        );
    }
}