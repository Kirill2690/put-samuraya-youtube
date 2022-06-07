import React from 'react';
import s from './Post.module.css';

type MessageProps = {
    message: string

}
const Post = (props: MessageProps) => {

    return (
        <div className={s.item}>
            <div>
                <img className={s.item}
                     src='https://freelance.ru/img/portfolio/pics/00/3F/3A/4143866.jpg'/>
                {props.message}
                <div>
                    <span>like like</span>like
                </div>

            </div>
        </div>)
};


export default Post