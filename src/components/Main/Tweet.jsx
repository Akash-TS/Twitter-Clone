import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { TweetsContext } from '../../contexts/TweetsContext';

function Stat(props) {

    const [isHovering, setIsHovering] = React.useState(false);

    let lightColor = '';
    let color = '';

    if(props.color === 'blue') {
        lightColor = '#1d9cf037';
        color = '#1d9cf0';
    } else if(props.color === 'green') {
        lightColor = '#00ba7c45';
        color = '#00ba7c';
    } else if(props.color === 'red') {
        lightColor = '#f9188045';
        color = '#f91880';
    }

    return (
        <div style={{backgroundColor: isHovering || props.isLiked ? lightColor: ''}} className="stat" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <svg style={{fill: isHovering || props.isLiked ? color: ''}} viewBox="0 0 24 24" aria-hidden="true">
                <g>
                    {
                        props.icon === 'comment'
                        ?
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                        : props.icon === 'retweet'
                        ?
                            <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                        : props.icon === 'like'
                        ?
                            <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                        : props.icon === 'share'
                        ?
                            <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                        : null
                    }
                </g>
            </svg>
            {
                props.value
                ?
                    <span style={{color: isHovering || props.isLiked ? color: ''}}>{props.value}</span>
                :
                    null
            }
        </div>
    );
}

export default function Tweet(props) {
    const tweet = props.tweet;
    const [isLiked, setIsLiked] = useState(false);

    const tweetsContext = useContext(TweetsContext);

    const toggleLike = () => {
        if(isLiked) {
            tweetsContext.setLike(tweet.id, -1);
        } else {
            tweetsContext.setLike(tweet.id, 1);
        }

        setIsLiked(!isLiked);
    }

    return (
        <div className="tweet">
            <div className="user-image-container">
                <img width={35} height={35} src={tweet.userPic} alt="profile"/>
            </div>

            <div className="tweet-details">
                <div className="tweet-meta-details">
                    <span className="user-fullname">{tweet.userFullName}</span>

                    {
                        tweet.verified
                        ?
                            <svg className="verified" viewBox="0 0 24 24" aria-label="Verified account" role="img" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr" data-testid="icon-verified"><g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g></svg>
                        :
                            null
                    }

                    <span className="username">{tweet.username}</span>
                    <span className="dot">.</span>
                    <span className="time-ago">{tweet.timeAgo}</span>
                </div>

                <p className="tweet-content">
                    {tweet.text}
                </p>

                <div className="stats">
                    <div><Stat color="blue" icon="comment" value={tweet.comments} /></div>
                    <div><Stat color="green" icon="retweet" value={tweet.retweets} /></div>
                    <div onClick={toggleLike}><Stat color="red" isLiked={isLiked} icon="like" value={tweet.likes}/></div>
                    <div><Stat color="blue" icon="share" /></div>
                </div>
            </div>
        </div>
    );
}