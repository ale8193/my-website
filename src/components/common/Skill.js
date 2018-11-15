import React, { Component } from 'react';

const SKILL_SCROLL_BREAKPOINTS = {
    D: {
        parentsHeight: 765,
        upDirDifferenceThreshold: 860
    },
    T: {
        parentsHeight: 730,
        upDirDifferenceThreshold: 800
    },
    M: {
        parentsHeight: 620,
        upDirDifferenceThreshold: 820
    }
};

export default class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: props.skill,
            visible: false
        };
        this.skillRef = React.createRef();

        this.parentsHeight = SKILL_SCROLL_BREAKPOINTS[props.screenType].parentsHeight;
        this.upDirDifferenceThreshold = SKILL_SCROLL_BREAKPOINTS[props.screenType].upDirDifferenceThreshold;
    }

    componentDidMount() {
        const { screenType } = this.props;
        this.parentsHeight = SKILL_SCROLL_BREAKPOINTS[screenType].parentsHeight;
        this.upDirDifferenceThreshold = SKILL_SCROLL_BREAKPOINTS[screenType].upDirDifferenceThreshold;
        this.addScrollEvent();
    }

    componentDidUpdate() {
        const { screenType } = this.props;
        this.parentsHeight = SKILL_SCROLL_BREAKPOINTS[screenType].parentsHeight;
        this.upDirDifferenceThreshold = SKILL_SCROLL_BREAKPOINTS[screenType].upDirDifferenceThreshold;
        window.removeEventListener('scroll', this.scrollEvent);
        this.addScrollEvent();
    }

    addScrollEvent = () => {
        const { screenType } = this.props;
        window.addEventListener('scroll', this.scrollEvent);
    };

    scrollEvent = () => {
        const element = this.skillRef.current;
        let windowY = window.scrollY;
        let elementY = element.offsetTop + element.offsetHeight + this.parentsHeight;
        let difference = windowY - elementY;
        // console.log(`${this.state.skill._id} difference = ${difference} current Y = ${windowY} element Y = ${elementY}`);
        if (difference > 0) {
            if (difference > this.upDirDifferenceThreshold) {
                this.setState({ visible: false });
            } else {
                this.setState({ visible: true });
            }
        } else {
            this.setState({ visible: false });
        }
    };

    render() {
        const { skill } = this.state;
        let progressBarClass = 'progress-bar';
        if (!this.state.visible) {
            progressBarClass += ' empty';
        }

        return (
            <div ref={this.skillRef} className="skill-wrapper">
                <div className="skill-name font-9 text-color-25 uppercase">{skill.label}</div>
                <div className="skill-value">
                    <div className={progressBarClass}>
                        <div style={{ width: `${skill.percentage}%` }} className="bar">
                            <div className="skill-percentage font-9 text-color-25">{skill.percentage} %</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
