import React, { useState } from "react";
import emoji_array from "./emoji";
import { FiRefreshCw } from "react-icons/fi"
import {FaReact} from "react-icons/fa"
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
                <FaReact className="App-logo" alt="react app logo" />
                <p>
                    How to use <code>react-gh-pages-workflows</code> in react app.
                </p>
                <p>For Every Open Source React Project in Github {emoji}</p>
                <p>Easy Peasy Method <code>npx react-gh-pages-workflows</code></p>
            </header>
            <main className="App-main">
                <div className="emoji">{emoji}</div>
                <div className="button"><FiRefreshCw onClick={changeEmoji} className="icon" /></div>
            </main>
        </div>
    );
}
