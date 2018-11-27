import React, { Component } from 'react';

export default class WorkCard extends Component {
    render() {
        const { work } = this.props;
        if (work.wallpapers[0]) {
            return (
                <div className="work-card">
                    <img className="img-background" src={work.wallpapers[0].path} alt={work.wallpapers[0].label} />
                </div>
            );
        }
        return null;
    }
}
