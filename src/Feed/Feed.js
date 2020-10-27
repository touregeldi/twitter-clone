import React, {useEffect, useState} from "react";
import './Feed.css';
import Tweetbox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import db from '../firebase'
import FlipMove from "react-flip-move";

function Feed(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
            db.collection('posts').onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc=>doc.data()))
            ))
        },[]);

    const sortedPosts = posts.sort(function (a,b){
        return b.timestamp - a.timestamp;
    })
    return(
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <Tweetbox/>

            <FlipMove>
                {sortedPosts.map(post => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>

        </div>
    );
}

export default Feed;
