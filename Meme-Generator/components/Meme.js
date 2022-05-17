import React, { useEffect, useState } from "react";
import memesData from "../data/memesData"

export default function Meme() { 
    // 100 memes
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = useState([]);

    // fetch data from the API
    useEffect(() => { 
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    console.log(allMemes)
    function handleClick(){ 
        let randomIndex = Math.floor(Math.random() * allMemes.length);
        let randomMeme = allMemes[randomIndex].url;
        // console.log(randomMeme);
        setMeme({ 
            // ...prevMeme,
            randomImage: randomMeme
        });
    }

    function handleChange(e) { 
        const {name, value} = e.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        })
        )
        console.log(meme)
    }
    return (
        <main>
            <form>
                <input
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Buttom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </form>
            <button onClick={handleClick}>Get a new meme image 🖼</button>
            <div className="meme">
                <img className="image-wrapper" src={meme.randomImage}></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>    
        </main>
    )
}