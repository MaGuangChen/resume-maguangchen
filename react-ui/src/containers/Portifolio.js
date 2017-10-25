import React from 'react';

import Gallery from '../components/portifolio/Gallery';
import settourOld from '../images/settour-old.jpg';
import settourBlog from '../images/settour-blog.png';
import reactWeather from '../images/react-weather.png';
import mySketch from '../images/my-sketch.jpg';

const Portifolio = (props) => {
    const linkTo = (e) => {
        e.preventDefault();
        window.open('https://ticket.settour.com.tw/search','_blank');
    }
    return (
        <div className="portifolio">
            <p className="portifolio_title">Portifolio</p>
            <div className="portifolio_block">
                <div onClick={linkTo} className="portifolio_block_left">
                        <p>
                            <a>產品平台前端開發</a>
                            <a>東南旅遊新版網站的票券產品線平台開發，
                            使用React、Redux、GraphQL、Webpack、Express、Mocha
                            </a>
                        </p>
                </div>
                <div className="portifolio_block_right">
                    <Gallery 
                      background={settourOld}
                      title="網站與APP"
                      text="東南旅遊前端維護"
                      link='https://www.settour.com.tw/'
                    />
                    <Gallery 
                      background={settourBlog}
                      title="Blog"
                      text="東南旅遊活動頁面與部落格協助"
                      link='http://blog.settour.com.tw/'
                    />
                    <Gallery 
                      background={reactWeather}
                      title="Side Project"
                      text="React氣象查詢APP"
                      link='https://paul-react-weather-app.herokuapp.com/'
                    />
                    <Gallery 
                      background={mySketch}
                      title="Sketch"
                      text="興趣使然"
                      link='https://www.instagram.com/p/BGjwT60tK1v/?hl=zh-tw&taken-by=ma_guang_chen'
                    />
                </div>
            </div>
        </div>
    )
}

export default Portifolio;