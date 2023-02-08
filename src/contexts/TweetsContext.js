import React from 'react';

export const TweetsContext = React.createContext({
    tweets: [],
    addTweet: () => {},
    setLike: () => {}
});