import React from 'react';
import {Link} from "react-router-dom";
import '../styles/styles.css'


const Home = () => {
    return (
        <div className='home'>

            <h1 style={{textAlign: 'center'}}>На нашем сайте вы можете узнать рецепты ваших любимых блюд!</h1>

                <div className='salat '>
                <Link to='/home/salads'><h3>Салаты</h3></Link>
                <img src='https://avatars.mds.yandex.net/i?id=7aa17ded7e4ebbdefa57b9213c305aade95ba181-9985849-images-thumbs&n=13' alt='#'/>
                </div>
                <div className='cocktail'>
                <Link to='/home/cocktails'><h3>Kоктейли</h3></Link>
                <img src='https://avatars.mds.yandex.net/i?id=390c24ab47dfe3a76bcfa4df43902e4b9668088d-9097932-images-thumbs&n=13' alt='#'/>
                </div>
                <div className='pasta'>
                <Link to='/home/pasta'><h3>Паста</h3></Link>
                <img src='https://avatars.mds.yandex.net/i?id=faf2c567f91da4d6e317421f19b01ff24b3ad69b-9225702-images-thumbs&n=13' alt='#'/>
                </div>

        </div>
    );
};

export default Home;