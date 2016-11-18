import React, { Component } from 'react';
import Steps from 'react-steps';
import { connect } from 'react-redux';

class StepsClass extends Component {
    render() {
        return <div><Steps items={this.props.steps} type={'point'} /></div>;
    }
}

function mapStateToProps(state) {
    return {
        steps: state.steps,
    };
}

export default connect(mapStateToProps)(StepsClass);
