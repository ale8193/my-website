import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

export default class HeroSection extends Component {
    render() {
        return (
            <Parallax className="section hero-banner" offsetYMax={50} offsetYMin={-50} slowerScrollRate tag="section">
                <div className="section-wrapper">
                    <div className="section-content text-white">
                        <div className="text-wrapper">
                            <h1 className="font-1">
                                I<span className="text-green">'</span>M
                            </h1>
                            <h1 className="font-1">ALESSANDRO</h1>
                            <h1 className="font-1">
                                STAFFOLANI
                                <span className="text-green">.</span>
                            </h1>
                            <h3 className="font-3">
                                IT ENGINEER <span className="text-green">&amp;</span> WEB DEVELOPER{' '}
                            </h3>
                        </div>
                        {/* <div className="image-container">
                            <img src={background} className="section-background" alt="Alessandro Staffolani" />
                        </div> */}
                    </div>
                </div>
            </Parallax>
        );
    }
}
