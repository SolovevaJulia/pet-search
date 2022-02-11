import "./profile.css";
import CardItem from "../../components/cardItem/cardItem";

const Profile = () => {
    return (
        <section className="profile">
            <div className="container profile-container">
                <div className="profile-item profile-name">
                    <span className="profile-initials">N</span>
                    <p className="profile-greeting">Здравствуйте, Nickname!</p>
                </div>
                <div className="profile-item profile-contacts">Contacts</div>

                <div className="profile-posts profile-item">
                    <div className="post-1 post-card">
                        <CardItem />
                    </div>
                    {/* <div className="post-2 post-card">Post-2</div> */}
                    {/* <div className="post-3 post-card">Post-3</div>
                    <div className="post-3 post-card">Post-3</div>
                    <div className="post-3 post-card">Post-3</div>
                    <div className="post-3 post-card">Post-3</div>
                    <div className="post-3 post-card">Post-3</div>
                    <div className="post-3 post-card">Post-3</div> */}
                </div>
            </div>
        </section>
    );
};

export default Profile;
