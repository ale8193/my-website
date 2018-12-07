import React, { Component } from 'react';
import ExperienceTimeline from './ExperienceTimeline';

export default class ExperienceBanner extends Component {
    render() {
        return (
            <div className="banner-section-wrapper">
                <div id="experience" className="section-banner experience-banner">
                    <div className="banner-wrapper">
                        <div className="banner-heading text-center">
                            <h3 className="font-2 uppercase text-white">
                                <span className="text-color-25">03</span> experience
                            </h3>
                        </div>
                        <div className="banner-body text-center" >
                            <ExperienceTimeline />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
