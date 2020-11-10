import React from 'react';
import './Home.css';
import Item from './Item';

function Home() {
    return (
        <div className="home">
            <div className="body_container">
                <img className="body_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="items">
                    <Item 
                        id='0'
                        title="Food Wars Apron Costume Shokugeki No Soma" 
                        price={18.99}
                        image= "https://m.media-amazon.com/images/I/51jW0SVKUGL._AC_UY218_.jpg" 
                        rating={4}
                    />
                    <Item 
                        id='1'
                        title="YOYOSHome Anime Shokugeki no Soma Hoodie" 
                        price={22.69}
                        image= "https://m.media-amazon.com/images/I/71KeGKKQ7FL._AC_UY218_.jpg" 
                        rating={3}
                    />
                </div>

                <div className="items">
                    <Item 
                        id='2'
                        title="Good Smile Food Wars Megumi Tadokoro Action Figure" 
                        price={75.35}
                        image= "https://m.media-amazon.com/images/I/61hvHY67IeL._AC_UL320_.jpg" 
                        rating={5}
                    />
                    <Item
                        id='3' 
                        title="Ikumi Mito Figure"
                        price={110.19}
                        image= "https://m.media-amazon.com/images/I/71RI7BYZAcL._AC_UL320_.jpg" 
                        rating={5}
                    />
                    <Item 
                        id='4'
                        title="Erina Nakiri Figure" 
                        price={87.74}
                        image= "https://m.media-amazon.com/images/I/71I5e9I7f0L._AC_UL320_.jpg" 
                        rating={4}
                    />
                </div>

                <div className="items">
                    <Item 
                        id='5'
                        title="Dell OptiPlex Computer Package Dual Core 3.0,New 8GB RAM, 250GB HDD, Windows 10 Home Edition, Dual 19inch Monitor (Brands may vary) - (Renewed)" price={262.02}
                        image= "https://images-na.ssl-images-amazon.com/images/I/41IjL6rfJVL._AC_SY355_.jpg" 
                        rating={3}
                    />
                </div>

            </div>
            
        </div>
    )
}

export default Home 