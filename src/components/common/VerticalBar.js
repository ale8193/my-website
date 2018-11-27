import React, { Component } from 'react';

export default class VerticalBar extends Component {
    render() {
        const { subSkill, maxWidth } = this.props;
        return (
            <div style={{maxWidth: `${maxWidth}%`}} className="sub-skill">
                <div className="vertical-bar">
                    <div style={{ height: `${subSkill.percentage}%` }} className="bar">
                        <div className="skill-percentage font-9 text-color-25">{subSkill.percentage} %</div>
                    </div>
                </div>
                <div className="font-9 text-color-25 uppercase">{subSkill.label}</div>
            </div>
        );
    }
}
