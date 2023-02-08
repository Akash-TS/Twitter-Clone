

export default function users(props){
    return (
        <div className="users" >
            <div className="userlist">
            <div className="users-image-container">
                <img width={35} height={35} src="https://www.w3schools.com/howto/img_avatar.png" alt="profile"/>
            </div>

            <div className="users-details">
                <h3>ChristianDaniel.FC</h3>
                <h5>@Christiandaniel</h5>
            </div>
                 <button>follow</button>
            </div>
            
            <div className="userlist">
            <div className="users-image-container">
                <img width={35} height={35} src="https://www.w3schools.com/howto/img_avatar.png" alt="profile"/>
            </div>

            <div className="users-details">
                <h3>BhuvaneshSenthil.</h3>
                <h5>@bhuvi</h5>
            </div>
                  <button>follow</button>
            </div>

            <div className="userlist">
            <div className="users-image-container">
                <img width={35} height={35} src="https://www.w3schools.com/howto/img_avatar.png" alt="profile"/>
            </div>

            <div className="users-details">
                <h3>Christianjoseph.CJ</h3>
                <h5>@Christianjoseph</h5>
            </div>
                  {/* <div className="follow"><p>follow</p></div> <button disabled={text === ''} type="submit" className="tweet-btn">Tweet</button>*/}
                  <button>follow</button>
            </div>
            
        </div>
    );
}