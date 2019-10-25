import React, { Component } from 'react';

export default class Experience extends Component {
    render() {
        const { experience, side } = this.props;
        const fromTo = experience.from + '-' + experience.current ? 'TODAY' : experience.to;

        return (
            <div className={`container ${side}`}>
                <div className="content">
                    <h5 className="from-to">{fromTo}</h5>
                    <h2 className="title">{experience.title}</h2>
                    <h2 className="where">{experience.where}</h2>
                    <h5 className="task">{experience.task}</h5>
                    <p>
                        {experience.description}
                    </p>
                </div>
            </div>
        );
    }
}
