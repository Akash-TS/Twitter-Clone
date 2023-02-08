import { NavLink, Route, Switch } from "react-router-dom";
import TweetList from "../Main/TweetList";

export function TweetsContainer(props) {
    return (
        <div className="tweets-container">
            <div className="tabs">
                <NavLink activeClassName="active" to={`/profile/${props.username}`} exact><div className="tab">Tweets</div></NavLink>
                <NavLink activeClassName="active" to={`/profile/${props.username}/replies`}><div className="tab">Tweets & replies</div></NavLink>
                <NavLink activeClassName="active" to={`/profile/${props.username}/media`}><div className="tab">Media</div></NavLink>
                <NavLink activeClassName="active" to={`/profile/${props.username}/likes`}><div className="tab">Likes</div></NavLink>
            </div>

            <Switch>
                <Route path="/profile/:username" exact component={TweetList} />
                <Route path="/profile/:username/replies" render={() => <h1>Replies</h1>} />
                <Route path="/profile/:username/media" render={() => <h1>Media</h1>} />
                <Route path="/profile/:username/likes" render={() => <h1>Likes</h1>} />
            </Switch>
        </div>
    );
}