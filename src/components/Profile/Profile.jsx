import React from 'react';
import Header from '../Main/Header';
import { TweetsContainer } from './TweetsContainer';
import { UserDetails } from './UserDetails';
import './Profile.css';

export default class Profile extends React.Component {
    state = {
        user: {},
    };

    componentDidMount() {

        const username = this.props.match.params.username;

        fetch(`https://first-react-site.000webhostapp.com/twitter.php?username=${username}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                user: data[0]
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const username = this.props.match.params.username;

        return (
            <div className="profile disable-scroll">
                <Header page="profile" username={username} tweetsCount={this.state.user.statuses_count} />
                <main>
                    <UserDetails user={this.state.user} />
                    <TweetsContainer username={username} />
                </main>
            </div>
        )
    }
}