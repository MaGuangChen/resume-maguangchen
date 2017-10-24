import React from 'react';
import { connect } from 'react-redux';

import Gallery from '../components/portifolio/Gallery';
import settourNew from '../images/settour-new.png';

const Portifolio = (props) => {
    return (
        <div className="portifolio">
            <p className="portifolio_title">Portifolio</p>
            <div className="portifolio_block">
                <div className="portifolio_block_left">
                        <p>
                            <a>產品平台前端開發</a>
                        </p>
                </div>
                <div className="portifolio_block_right">
                    <Gallery 
                      background={settourNew}
                      text="產品平台開發"
                    />
                    <Gallery 
                      background={settourNew}
                      text="產品平台開發"
                    />
                    <Gallery 
                      background={settourNew}
                      text="產品平台開發"
                    />
                    <Gallery 
                      background={settourNew}
                      text="產品平台開發"
                    />
                </div>
            </div>
        </div>
    )
}

export default connect()(Portifolio);