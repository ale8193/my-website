import React, { Component } from 'react';
import background from '../../images/alessandro_staffolani.png';

export default class Section1 extends Component {
    render() {
        return (
            <div className="section-1">
                <div className="section-content">
                    <h1>I'm alessandro staffolani</h1>
                    <h3>It engineer & Web developer </h3>
                    <div className="image-container">
                        {/* <img src={background} className="section-background" alt="Alessandro Staffolani" /> */}
                    </div>
                </div>
            </div>
        );
    }
}
