import React, { Component } from 'react';
import background from '../../images/alessandro_staffolani.png';
import { Parallax } from 'react-scroll-parallax';
import logoWhite from '../../images/logo-white.png';

export default class HeroBanner extends Component {
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
                <div className="logo-banner">
                    <div className="logo-wrapper">
                        <img src={logoWhite} className="logo image" alt="Logo" />
                    </div>
                    <div className="banner-content uppercase font-8 text-white">
                        Accomplished software engineer specializing in object-oriented approaches to network and platform development with thorough hands-on
                        experience in all levels of testing, including performance, functional, integration and user acceptance testing. Supportive and
                        enthusiastic team player dedicated to streamlining process and efficiently resolving project issues.
                    </div>
                    <div className="action-wrapper">
                        <button>Download Resume</button>
                    </div>
                </div>
            </Parallax>
        );
    }
}
