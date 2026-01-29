import "../styles/App.scss"
import Menu from "./Menu";
import Ppal from "./Ppal";
import Tech from "./Tech";
import Form from "./Form";
import data from "../services/data.json"
import me from "../services/me.json"
import { useState} from "react";
import MenuListMovil from "./MenuListMovil";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function App() {
  
  const [burgerMenu, setBurgerMenu] = useState (false);

  function clickMenuBurger (){
    setBurgerMenu(prevState => !prevState)
  }


  return (
    <div>
      <Menu burgerMenu={burgerMenu} clickMenuBurger={clickMenuBurger}/>
      {burgerMenu && <MenuListMovil />}
      <Ppal/>
      <AboutMe me={me}/>
      <Projects data={data}/>
      <Tech/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;