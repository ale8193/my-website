import React, { Component } from 'react';
import { getExperience } from '../../model/experience';
import Experience from '../common/Experience';

export default class ExperienceTimeline extends Component {
    render() {
        const experiences = getExperience().experience.map((exp, index) => (
            <Experience key={index} experience={exp} side={index % 2 === 0 ? 'right' : 'left'} />
        ));

        return (
            <div className="experience-timeline-container">
                <div class="timeline">
                    {experiences}
                </div>
            </div>
        );
    }
}
