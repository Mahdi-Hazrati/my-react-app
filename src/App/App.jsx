import React, { useState } from "react";
import emoji_array from "./emoji";
import { FiRefreshCw } from "react-icons/fi"
import "./App.css";

export default function App() {
    const [emoji, setEmoji] = useState(emoji_array[0])

    const changeEmoji = () => {
        const emoji_array_length = emoji_array.length
        const random_index = Math.floor(Math.random() * emoji_array_length)
        setEmoji(emoji_array[random_index])
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    How to use <code>react-gh-pages-workflows</code> in react app.
                </p>
            </header>
            <main className="App-main">
                <div className="emoji">{emoji}</div>
                <div className="refresh" onClick={changeEmoji}><FiRefreshCw className="icon" /></div>
            </main>
        </div>
    );
}
