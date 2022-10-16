import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Stories = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((res) => {
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        });
    });

    // (condition) ? () : ()
    const postList = (post.length) ? (post.map((info) => {
        return (
            <React.Fragment key={info.id}>
                <p><Link to={'/story'}>{info}</Link></p>
            </React.Fragment>
        )
    })) : (<p>No data Yet!</p>)


    return (
        <React.Fragment>
             Stories Page
            {postList}
        </React.Fragment>
    )
}

export default Stories;