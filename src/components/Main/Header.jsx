import "./Main.css";

export default function Header(props) {
    const currentPage = props.page;

    return (
        <header>
            {
                currentPage === 'home'
                ?
                    <h1>Home</h1>
                :
                    currentPage === 'profile'
                    ?
                        <div className="profile-header">
                            <div className="back-container">
                                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
                            </div>
                            <div className="user-header">
                                <h1>{props.username}</h1>
                                <p>{props.tweetsCount} tweets</p>
                            </div>
                        </div>
                    :
                        <h1>{currentPage}</h1>
            }
        </header>
    );
}