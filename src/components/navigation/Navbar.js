import React, { Component } from 'react';
import logo from '../../images/logo-white.png';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import { routes } from '../../routes/routes';
import NavbarButton from './NavbarButton';
import { MDCDrawer } from '@material/drawer';
import NavigationDrawer from './NavigationDrawer';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.drawer = null;

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.setDrawerRef = this.setDrawerRef.bind(this);
    }

    componentDidMount() {
        this.drawer = null;
    }

    setDrawerRef(drawer) {
        this.drawerDOM = drawer;
    }

    toggleDrawer = () => {
        if (this.drawer === null) {
            this.drawer = MDCDrawer.attachTo(this.drawerDOM);
        }
        this.drawer.open = !this.drawer.foundation_.isOpen();
    };

    handleLinkClick = (e, blockName) => {
        e.preventDefault();
        this.drawer.open = false;
        this.props.handleBlockChange(e, blockName);
    }

    render() {
        const { currentPage, currentBlock, handlePageChange, handleBlockChange } = this.props;

        const navLinks = Object.keys(routes).map((key, index) => (
            <NavbarButton
                key={index}
                className="nav-link"
                label={routes[key].label}
                path={routes[key].code}
                isActive={currentBlock === routes[key].code ? true : false}
                onClick={handleBlockChange}
            />
        ));

        return (
            <div>
                <TopAppBar
                    title=""
                    className="mdc-elevation--z4 navbar-transparent"
                    navigationIcon={<MaterialIcon icon="menu" onClick={() => this.toggleDrawer()} />}
                    actionItems={navLinks}
                />
                <NavigationDrawer
                    currentPage={currentPage}
                    currentBlock={currentBlock}
                    setRef={this.setDrawerRef}
                    handleLinkClick={this.handleLinkClick}
                />
                <div className="mdc-drawer-scrim"></div>
            </div>
        );
    }
}
