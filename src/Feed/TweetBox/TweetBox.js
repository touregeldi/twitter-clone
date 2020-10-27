import React, {useState} from "react";
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from "../../firebase";


function Tweetbox(){
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) =>{
        e.preventDefault();

        db.collection('posts').add({
            timestamp: Date.now(),
            displayName: "Touregeldi Kabizhanov",
            username: "touregeldi",
            verified: true,
            text: tweetMessage,
            avatar: "",
            image: tweetImage,
        });
        setTweetImage("");
        setTweetMessage("");
    }

    return(
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar/>
                    <input
                        onChange={e=> setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"/>
                </div>
                <input
                    onChange={e=> setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox;