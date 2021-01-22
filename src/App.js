import React from 'react'
import './App.css';
import UserContainer from "./components/User/UserContainer";
import Header from "./components/Head/Header";

function App() {

    return (
        <div className="app-wrapper">

            <div className="app-wrapper-content">
                <Header/>
                <UserContainer/>
            </div>

        </div>
    );
}

export default App;
