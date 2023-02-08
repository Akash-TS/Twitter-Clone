import { useHistory } from "react-router-dom";

export default function User(props) {

    const history = useHistory();

    const goToProfile = () => {
        history.push("/profile/elonmusk");
    }

    return (
        <div className="user" onClick={goToProfile}>
            <div className="user-image-container">
                <img width={35} height={35} src="https://www.w3schools.com/howto/img_avatar.png" alt="profile"/>
            </div>

            <div className="user-details">
                <h3>notelonmusk</h3>
                <h5>@not_elonmusk</h5>
            </div>
        </div>
    );
}