import Hello from "./components/Hello";
import Profile from "./components/Profile";
import Product from "./components/Product";
import Recipe from "./components/Recipe";
import Counter from "./components/Counter";

import ClickListener from "./components/ClickListener";
import InputHandler from "./components/inputHandler";

import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
  return (
    <>
      {/* <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Profile
        name="Quackier Makers"
        job="Makers' favourite rubber duck"
        birthdate={2013}
      />
      <Product
        name="Air Fryer K2000"
        description="The best air fryer to fry all things, even Mars bars"
        price={2000}
      />
      <Product
        name="Toaster T3000"
        description="The best toaster ever, 4 slices is no problem at all!"
        price={1000}
      />
      <ClickListener />
      <InputHandler />
      <Recipe title="Finnish cinnamon buns" type="dessert" duration={60} /> */}
      <Counter />
    </>
  );
}

export default App;
