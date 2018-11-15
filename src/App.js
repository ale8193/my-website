import React, { Component } from 'react';
import { routes } from './routes/routes';
import { ParallaxProvider } from 'react-scroll-parallax';
import { getScreenType, BREAKPOINTS } from './utils/screenUtils';

// Components
import Navbar from './components/navigation/Navbar';
import HeroSection from './components/sections/HeroSection';
import ProfessionalSection from './components/sections/ProfessionalSection';
import CVBanner from './components/banners/CVBanner';
import ProfessionalBanner from './components/banners/ProfessionalBanner';

// Style
import './css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: routes.home.code,
            currentBlock: routes.home.code,
            screenType: getScreenType(),
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateScreenType);
    }

    updateScreenType = () => {
        this.setState({screenType: getScreenType()})
    }

    handleBlockChange = (e, block) => {
        e.preventDefault();
        this.setState({ currentBlock: block });
        const jQuery = window.jQuery;
        const target = jQuery(`#${block}`);
        if (target.length) {
            jQuery('html, body').animate(
                {
                    scrollTop: target.offset().top
                },
                1000
            );
        }
    };

    handlePageChange = (e, page) => {
        e.preventDefault();
        this.setState({ currentPage: page });
        // TODO: Change page content
    };

    render() {
        console.log(this.state);
        return (
            <ParallaxProvider>
                <div className="App">
                    <Navbar
                        currentPage={this.state.currentPage}
                        currentBlock={this.state.currentBlock}
                        handlePageChange={this.handlePageChange}
                        handleBlockChange={this.handleBlockChange}
                    />
                    <CVBanner />
                    <HeroSection />
                    <ProfessionalBanner screenType={this.state.screenType} />
                    <ProfessionalSection />
                    <div style={{ height: '1000px', backgroundColor: '#e3e3e3' }} />
                </div>
            </ParallaxProvider>
        );
    }
}

export default App;
