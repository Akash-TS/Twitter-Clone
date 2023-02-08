import "./QuickLinks.css";
import Users from "./users";
import { BsSearch } from "react-icons/bs";

export default function QuickLinks(props) {
    return (
        <div className="quicklinks">
            <div className="searchbar">
                <BsSearch />
                <input placeholder="search twitter" className="input" />
            </div>
            <br />
            <div className="first-container">
                <div>
                <h2>What's happening</h2>
                </div>
                <br />
                <div className="trending-list">
                    <p>Sports.LIVE</p>
                    <span>2002 FIFA World Cup</span>
                    <p>156K Tweets</p>
                </div>
                <br />
                <div className="trending-list">
                    <p>Entertainment.Trending</p>
                    <span>#restore_the_synder_verse</span>
                    <p>108K Tweets</p>
                </div>
                <br />
                <div className="trending-list">
                    <p>Trending in Tamilnadu</p>
                    <span>#loki_universe</span>
                    <p>97K Tweets</p>
                </div>
                <br />
                <div className="trending-list">
                    <p>Trending in India</p>
                    <span>#MCDElections 2022</span>
                    <p>11.2K Tweets</p>
                </div>
                <br />
                <div>
                    <h5>Show more</h5>
                </div>
            </div>

            <div className="second-container">
                <h2>Who to follow</h2 >
                <Users />
            </div>

            <div className="copyright">
                <p>Terms of Service
                   Privacy Policy
                   Cookie Policy
                   Accessibility
                   Ads info
                   More
                   © 2022 Twitter, Inc.</p>
            </div>
        </div>
    );
}
