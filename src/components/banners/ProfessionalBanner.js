import React from 'react';
import { getProfessionals } from '../../model/professional';
import Skill from '../common/Skill';

export default function ProfessionalBanner() {

    const professionals = getProfessionals();
    const skills = professionals.skills.map(skill => <Skill key={skill._id} skill={skill} />)

    return (
        <div className="banner-section-wrapper">
            <div className="section-banner professional-banner">
                <div className="banner-wrapper professional-banner">
                    <div className="banner-heading text-center">
                        <h3 className="font-2 uppercase text-white">
                            <span className="text-color-25" >01</span> professional
                        </h3>
                        <h5 className="font-3 text-white uppercase">
                            My knowledge level in software
                        </h5>
                    </div>
                    <div className="banner-body">
                        {skills}
                    </div>
                </div>
            </div>
        </div>
    );
}
