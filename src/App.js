import React, { Component } from 'react';
import { routes } from './routes/routes';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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
            currentBlock: routes.home.code
        };
    }

    handleBlockChange = (e, block) => {
        e.preventDefault();
        this.setState({ currentBlock: block });
        // TODO: Scroll to block
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
                    <ProfessionalBanner />
                    <ProfessionalSection />
                    <div style={{ height: '1000px', backgroundColor: '#e3e3e3' }} />
                </div>
            </ParallaxProvider>
        );
    }
}

export default App;
