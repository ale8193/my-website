import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/navigation/Navbar';
import { routes } from './routes/routes';
import Section1 from './components/sections/Section1';

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
            <div className="App">
                <Navbar
                    currentPage={this.state.currentPage}
                    currentBlock={this.state.currentBlock}
                    handlePageChange={this.handlePageChange}
                    handleBlockChange={this.handleBlockChange}
                />
                <div className="sections">
                    <Section1 />
                    <div style={{ height: '1000px' }}>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
