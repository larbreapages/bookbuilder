import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';
import { chooseColor, nextStep } from '../actions/index';

const step = 1;

class Color extends Component {
    handleChange(value) {
        this.props.chooseColor(value);
        this.props.nextStep(step);
        this.setState({ selectedValue: value });
    }

    render() {
        return (
            <div>
                <p>Choose Color</p>
                <RadioGroup name="color" selectedValue={this.props.book.color} onChange={e => this.handleChange(e)}>
                    <Radio value="blue" />Blue
                    <Radio value="black" />Black
                    <Radio value="yellow" />Yellow
                    <Radio value="green" />Green
                </RadioGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ chooseColor, nextStep }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Color);
