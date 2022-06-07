import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <img className={s.header}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzCu3vXE4zAMLDWglDObxAyXA4_N1NRlb9g&usqp=CAU'/>
            </div>

        </header>
    )
}


export default Header