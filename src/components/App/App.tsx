import appStyles from "./app.module.css";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import ElementCards from "../Elements-Cards/Element-Cards";
import Footer from "../Footer/Footer";


const App = () => {
  return (
    <>
      <div className={appStyles.main}>
        <Header />
        <Profile/>
        <ElementCards/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
