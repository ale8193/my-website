import React, { Component } from 'react';
import { getPortfolio } from '../../model/portfolio';
import WorkCard from '../common/WorkCard';

export default class PortfolioBanner extends Component {
    render() {
        const portfolio = getPortfolio();
        const works = portfolio.works.map(work => <WorkCard key={work._id} work={work} />);

        return (
            <div className="banner-section-wrapper">
                <div id="portfolio" className="section-banner portfolio-banner">
                    <div className="banner-wrapper">
                        <div className="banner-heading text-center">
                            <h3 className="font-2 uppercase text-white">
                                <span className="text-color-25">02</span> portfolio
                            </h3>
                            <h5 className="font-3 text-white uppercase">
                                My latest work. <span className="text-color-25">see more ></span>
                            </h5>
                        </div>
                        <div className="banner-body text-center">{works}</div>
                    </div>
                </div>
            </div>
        );
    }
}
