import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TweetsContext } from '../../contexts/TweetsContext';
import Profile from '../Profile/Profile';
import { Home } from './Home';
import './Main.css';

export default class Main extends React.Component {

    state = {
        tweets: [
            {
                id: 1,
                userFullName: 'Daniel Vassallo',
                username: '@dvassallo',
                userPic: 'https://www.w3schools.com/howto/img_avatar.png',
                timeAgo: '2h',
                text: 'A good marketing tip is to not sound like ChatGPT',
                comments: 19,
                retweets: 1,
                likes: 100,
                verified: false
            },
            {
                id: 2,
                userFullName: 'Dagobert Renouf',
                username: '@dagorenouf',
                userPic: 'https://pbs.twimg.com/profile_images/1588655546198097922/bnGfKfJ0_400x400.jpg',
                timeAgo: '11h',
                text: 'Startup founders who quit after 1 year were just dreamers in the end.',
                comments: 75,
                retweets: 52,
                likes: 561,
                verified: true
            },
            {
                id: 3,
                userFullName: 'Swetha | Copywriter',
                username: '@SwethaWriter',
                userPic: 'https://pbs.twimg.com/profile_images/1595839430589583361/Iw7mFYJZ_400x400.jpg',
                timeAgo: '10h',
                text: 'Can anyone tell me where we can get nice solid colour bedsheets from? 🥺👉👈',
                comments: 7,
                retweets: 0,
                likes: 27,
                verified: false
            },
            {
                id: 4,
                userFullName: 'Elon Musk',
                username: '@elonmusk',
                userPic: 'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg',
                timeAgo: '1h',
                text: 'Just a note to thank advertisers for returning to Twitter',
                comments: 9184,
                retweets: 15400,
                likes: 1785000,
                verified: true
            },
            {
                id: 5,
                userFullName: 'Daniel Vassallo',
                username: '@dvassallo',
                userPic: 'https://www.w3schools.com/howto/img_avatar.png',
                timeAgo: '2h',
                text: 'Can anyone tell me where we can get nice solid colour bedsheets from?',
                comments: 19,
                retweets: 1,
                likes: 100,
                verified: false
            },
            {
                id: 3,
                userFullName: 'Swetha | Copywriter',
                username: '@SwethaWriter',
                userPic: 'https://pbs.twimg.com/profile_images/1595839430589583361/Iw7mFYJZ_400x400.jpg',
                timeAgo: '10h',
                text: 'Front end is the best developing for user interface',
                comments: 7,
                retweets: 0,
                likes: 27,
                verified: false
            }
        ]
    };

    addTweet = (tweet) => {
        this.setState({
            tweets: [tweet, ...this.state.tweets]
        });
    }

    setLike = (id, likes) => {
        const newTweets = this.state.tweets.map(tweet => {

            if(tweet.id === id) {
                tweet.likes += likes;
            }

            return tweet;
        });

        this.setState({tweets: newTweets});
    }

    render() {
        return (
            <TweetsContext.Provider value={{tweets: this.state.tweets, addTweet: this.addTweet, setLike: this.setLike}}>
                <main className="main">
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/home" />} />
                        <Route path="/home" component={Home} />
                        <Route path="/profile/:username" component={Profile} />
                    </Switch>
                </main>
            </TweetsContext.Provider>
        );
    }
}