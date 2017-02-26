import React, { Component } from 'react';
import { connect } from 'react-redux';
import Steps from 'antd/lib/steps';
import BookBinding from './BookBinding';
import Color from './Color';
import Format from './Format';
import Footer from './Footer';
import Summary from './Summary';
import Finish from './Finish';
import Error from './Error';

const Step = Steps.Step;

class App extends Component {
    steps() {
        return (<Steps size="small" current={this.props.currentStep}>
            {this.props.steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>);
    }

    render() {
        return (<div>
            <div className="steps">{ this.steps() }</div>
            <div className="content">
                { this.props.currentStep === 0 ? <BookBinding /> : null }
                { this.props.currentStep === 1 ? <Color /> : null }
                { this.props.currentStep === 2 ? <Format /> : null }
                { this.props.currentStep === 3 ? <Summary /> : null }
                { this.props.currentStep === 4 ? <Finish /> : null }
                { this.props.currentStep === 5 ? <Error /> : null }
            </div>
            { this.props.currentStep !== this.props.steps.length ? <Footer /> : null }
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        steps: state.steps.steps,
        currentStep: state.steps.currentStep,
    };
}

export default connect(mapStateToProps)(App);
