import React from 'react';
import ReactDom from 'react-dom';
import Steps from 'react-steps';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';
import Step4 from './components/step4';
import Debug from './components/debug';

const initSteps = [
    {
        text: 'Reliure',
        isActive: true,
        isDone: false,
    },
    {
        text: 'Couleurs',
        isActive: false,
        isDone: false,
    },
    {
        text: 'Format',
        isActive: false,
        isDone: false,
    },
    {
        text: 'Nombre de page',
        isActive: false,
        isDone: false,
    },
];

class Main extends React.Component {
    constructor() {
        super();
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }

    componentWillMount() {
        this.setState({ step: 1 });
    }

    // @TODO: Refactoring this bad code
    nextStep() {
        if (this.state.step >= 4) {
            return;
        }

        initSteps[this.state.step - 1].isActive = false;
        initSteps[this.state.step - 1].isDone = true;
        initSteps[this.state.step].isActive = true;
        this.setState({ step: this.state.step + 1 });
    }

    // @TODO: Refactoring this bad code
    previousStep() {
        if (this.state.step <= 1) {
            return;
        }

        initSteps[this.state.step - 1].isDone = false;
        initSteps[this.state.step - 1].isActive = false;
        initSteps[this.state.step - 2].isActive = true;
        initSteps[this.state.step - 2].isDone = false;
        this.setState({ step: this.state.step - 1 });
    }

    render() {
        return (<div>
            <Debug step={this.state.step} />
            <Steps items={initSteps} type="point" />
            { this.state.step === 1 ? <Step1 /> : null }
            { this.state.step === 2 ? <Step2 /> : null }
            { this.state.step === 3 ? <Step3 /> : null }
            { this.state.step === 4 ? <Step4 /> : null }
            <center>
                <br />
                <button onClick={this.previousStep}>Précédent</button>&nbsp;
                <button onClick={this.nextStep}>Suivant</button>
            </center>
        </div>);
    }
}

ReactDom.render(<Main />, document.getElementById('app'));
