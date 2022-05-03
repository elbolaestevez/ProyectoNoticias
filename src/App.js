import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/style.scss";
import { BrowserRouter } from "react-router-dom";

import { userContext } from "./context/userContext";

// import { v4 as uuidv4 } from "uuid";
// uuidv4();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
    //logout
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  logout() {
    this.setState("");
  }

  login(name) {
    this.setState({ user: name });
  }

  render() {
    const data = {
      user: this.state.user,
      logout: this.logout,
      login: this.login,
    };

    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={data}>
            <Header></Header>
            <Main></Main>
          </userContext.Provider>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
