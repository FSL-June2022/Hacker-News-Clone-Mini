import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Story = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/item/26061935.json').then((res) => {
            setPost(res.data);
           // console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    });

    // (condition) ? () : ()
    const postListd = (post.length) ? (post.map((infod) => {
        return (
            <React.Fragment key={infod.id}>
                <p><Link to={'/story/' + infod.id}>{infod.title}</Link></p>
            </React.Fragment>
        )
    })) : (<p>No data Yet!</p>)


    return (
        <React.Fragment>
             Story Page
            {postListd}
        </React.Fragment>
    )
}

export default Story;