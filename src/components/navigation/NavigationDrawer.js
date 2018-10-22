import React, { Component } from 'react';
import logo from '../../images/logo-white.png';
import { routes } from '../../routes/routes';

export default class NavigationDrawer extends Component {
    render() {
        const { setRef, handleLinkClick, currentPage, currentBlock } = this.props;
        const mainClass = `mdc-drawer mdc-drawer--modal my-drawer`;

        return (
            <aside ref={setRef} className={mainClass}>
                <div className="mdc-drawer__header">
                    <div className="wrapper">
                        <img src={logo} className="logo" alt="AS" />
                        <h3 className="mdc-drawer__title">Alessandro Staffolani</h3>
                    </div>
                </div>
                <div className="mdc-drawer__content">
                    <nav className="mdc-list">
                        {Object.keys(routes).map((key, index) => (
                            <a
                                key={index}
                                className={routes[key].code === currentBlock ? "mdc-list-item mdc-list-item--activated active" : "mdc-list-item"}
                                href="#!"
                                aria-selected="true"
                                onClick={e => handleLinkClick(e, routes[key].code)}
                            >
                                <span className="mdc-list-item__text">{routes[key].label}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>
        );
    }
}
