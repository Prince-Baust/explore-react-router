import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Friends from "./components/Firends/Friends";
import NotFound from "./components/NotFound/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import FriendDetails from "./components/FriendDetails/FriendDetails";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/friends">
                        <Friends/>
                    </Route>
                    <Route path="/friend/:friendID">
                        <FriendDetails/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
