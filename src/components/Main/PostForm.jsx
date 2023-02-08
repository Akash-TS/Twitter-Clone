import React from "react";
import { TweetsContext } from "../../contexts/TweetsContext";

export default function PostForm(props) {
    const [text, setText] = React.useState('');

    const tweetsContext = React.useContext(TweetsContext)

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            id: Math.floor(Math.random() * 1000),
            userFullName: 'notelonmusk',
            username: '@notelonmusk',
            userPic: 'https://www.w3schools.com/howto/img_avatar.png',
            timeAgo: '1m',
            text: text,
            comments: 0,
            retweets: 0,
            likes: 0,
            verified: true
        }

        tweetsContext.addTweet(obj);

        setText('');
    }

    return(
        <form onSubmit={handleSubmit} className="post-form">
            <div className="input-container">
                <div className="user-image-container">
                    <img width={50} height={50} src="https://www.w3schools.com/howto/img_avatar.png" alt="profile"/>
                </div>
                <div className="textarea-container">
                    <textarea onChange={handleChange} value={text} rows={4} placeholder="What's happening?"></textarea>
                </div>
            </div>
            <div className="tweet-btn-container">
                <button disabled={text === ''} type="submit" className="tweet-btn">Tweet</button>
            </div>
        </form>
    );
}