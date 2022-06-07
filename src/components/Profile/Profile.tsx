import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src='https://abrakadabra.fun/uploads/posts/2022-01/thumbs/1642519555_4-abrakadabra-fun-p-fon-dlya-prezentatsii-sotsseti-5.jpg'/>
            </div>
            <MyPosts/>
        </div>);


};


export default Profile;