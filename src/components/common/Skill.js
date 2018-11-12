import React, { Component } from 'react';

export default class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: props.skill
        };
    }

    render() {
        const { skill } = this.state;
    
        return (
            <div className="skill-wrapper">
                <div className="skill-name font-9 text-color-25 uppercase">{skill.label}</div>
                <div className="skill-value">
                    <div className="progress-bar" >
                        <div style={{width: `${skill.percentage}%`}} className="bar" />
                    </div>
                    <div className="skill-percentage font-9 text-color-25">{skill.percentage} %</div>
                </div>
            </div>
        );
    }
}
