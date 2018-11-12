import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

export default class ProfessionalSection extends Component {
    render() {
        return (
            <Parallax className="section professional-section" offsetYMax={50} offsetYMin={-50} slowerScrollRate tag="section">
                {/* <div className="section-wrapper">
                    <div className="section-content text-white">
                        <div className="text-wrapper">
                            <h3 className="font-2 uppercase">
                                <span>01</span> professional
                            </h3>
                        </div>
                    </div>
                </div> */}
            </Parallax>
        );
    }
}
