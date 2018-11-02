import React from 'react';
import logoWhite from '../../images/logo-white.png';
import Button from '@material/react-button';

export default function CVBanner() {
    return (
        <div className="section-banner cv-banner">
            <div className="logo-banner">
                <div className="logo-wrapper">
                    <img src={logoWhite} className="logo image" alt="Logo" />
                </div>
                <div className="banner-content uppercase font-8 text-white">
                    Accomplished software engineer specializing in object-oriented approaches to network and platform development with thorough hands-on
                    experience in all levels of testing, including performance, functional, integration and user acceptance testing. Supportive and enthusiastic
                    team player dedicated to streamlining process and efficiently resolving project issues.
                </div>
                <div className="action-wrapper">
                    <Button className="btn-primary" outlined={true}>
                        Download Resume
                    </Button>
                </div>
            </div>
        </div>
    );
}
