import React from 'react';

export default function HorizontalBar(props) {
    return (
        <div className="skill-wrapper">
            <div className="skill-name font-9 text-color-25 uppercase">{props.skill.label}</div>
            <div className="skill-value">
                <div className={props.progressBarClass}>
                    <div onClick={() => props.handleSkillActive(props.skill)} style={{ width: `${props.skill.percentage}%` }} className="bar">
                        <div className="skill-percentage font-9 text-color-25">{props.skill.percentage} %</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
