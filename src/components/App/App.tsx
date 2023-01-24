import appStyles from "./app.module.css";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";

const App = () => {
  return (
    <>
      <div className={appStyles.main}>
        <Header />
        <Profile/>
      </div>
    </>
  );
};

export default App;
