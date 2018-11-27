import React, { Component } from 'react';
import { getProfessionals } from '../../model/professional';
import Skill from '../common/Skill';
import SkillDetails from '../common/SkillDetails';

const ESC_CODE = 27;

export default class ProfessionalBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSkill: false // false no active, skill object to get the active ones
        };

        this.professionalsRef = React.createRef();
    }

    handleSkillActive = skill => {
        this.setState({ activeSkill: skill });
        this.addFocus();
    };

    addFocus = () => {
        if (this.professionalsRef) {
            this.professionalsRef.current.focus();
        }
    };

    handleEscClick = e => {
        if (e.keyCode === ESC_CODE) {
            this.disactiveAllSkills();
        }
    };

    disactiveAllSkills = () => {
        this.setState({ activeSkill: false });
    };

    render() {
        const professionals = getProfessionals();
        const skills = professionals.skills.map(skill => (
            <Skill
                handleCloseSubSkill={this.disactiveAllSkills}
                handleSkillActive={this.handleSkillActive}
                activeSkill={this.state.activeSkill}
                key={skill._id}
                skill={skill}
                screenType={this.props.screenType}
            />
        ));

        return (
            <div className="banner-section-wrapper">
                <div id="professional" className="section-banner professional-banner">
                    <div className="banner-wrapper">
                        <div className="banner-heading text-center">
                            <h3 className="font-2 uppercase text-white">
                                <span className="text-color-25">01</span> professional
                            </h3>
                            <h5 className="font-3 text-white uppercase">My knowledge level in software</h5>
                        </div>
                        <div onKeyDown={this.handleEscClick} ref={this.professionalsRef} className="banner-body">
                            {skills}
                            <div className={this.state.activeSkill !== false ? 'skill-detail-wrapper' : 'skill-detail-wrapper closed'}>
                                {this.state.activeSkill !== false ? <SkillDetails skill={this.state.activeSkill} disactiveAllSkills={this.disactiveAllSkills} /> : null}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
