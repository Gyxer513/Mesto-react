import profileStyles from "./profile.module.css";
import avatarImage from "../../images/avatar.jpg";

const Profile = () => {
  return (
    <section className={profileStyles.main}>
      <div className={profileStyles.profileBox}>
        <img className={profileStyles.avatar} src={avatarImage} />
        <div className={profileStyles.nameBox}>
            <h1 className={profileStyles.name}>Жак-Ив Кусто</h1>
            <h2 className={profileStyles.subName}>Исследователь океана</h2>
        </div>
        <button className={profileStyles.editButton}></button>
      </div>
      <button className={profileStyles.addButton}>+</button>
    </section>
  );
};

export default Profile;
