import React from 'react';

const NavbarButton = props => {
    const { label, className = '', path, isActive, onClick  } = props;

    let classes = `app-bar-button ${className}`;
    classes += isActive ? ' active' : '';

    return (
        <span className={classes} onClick={event => onClick(event, path)}>
            <span>{label}</span>
            <span className="app-bar-indicator" />
        </span>
    );
};

export default NavbarButton;
