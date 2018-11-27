import React, { Component } from 'react';
import MaterialIcon from '@material/react-material-icon';
import HorizontalBar from './HorizontalBar';
import VerticalBar from './VerticalBar';

export default class SubSkill extends Component {
    render() {
        const { skill, disactiveAllSkills } = this.props;

        const subSkillMaxWidth = 100 / skill.sub_skills.length;
        const subSkills = skill.sub_skills.map(subSkill => <VerticalBar id={subSkill._id} subSkill={subSkill} maxWidth={subSkillMaxWidth} />);

        return (
            <div className="skill-detail">
                <MaterialIcon onClick={disactiveAllSkills} className="close-sub-skill" icon="close" />
                <div className="text-center">
                    <h3 className="font-5 text-white uppercase">{skill.label}</h3>
                </div>
                <div className="sub-skills-wrapper">{subSkills}</div>
                <HorizontalBar skill={skill} progressBarClass="progress-bar" />
            </div>
        );
    }
}

{
    /* <div style={{ width: `${subSkillWidth}%` }} key={subSkill._id} className="sub-skill">
                <div style={{ width: `${subSkill.percentage}%` }} className="vertical-bar">
                    <div className="skill-percentage font-9 text-color-25">{subSkill.percentage} %</div>
                </div>
                <div className="font-9 text-color-25 uppercase">{subSkill.label}</div>
            </div> */
}
