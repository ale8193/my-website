import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';
import PortfolioBanner from '../banners/PortfolioBanner';
import ExperienceBanner from '../banners/ExperienceBanner';

export default class BackgroundSection extends Component {
  render() {
    return (
        <Parallax className="section background-section" offsetYMax={50} offsetYMin={-50} slowerScrollRate tag="section">
            <PortfolioBanner />
            <ExperienceBanner />
        </Parallax>
    )
  }
}
