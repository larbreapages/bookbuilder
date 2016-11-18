import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';
import { chooseFormat, nextStep } from '../actions/index';

const step = 2;

class Format extends Component {
    handleChange(value) {
        this.props.chooseFormat(value);
        this.props.nextStep(step);
        this.setState({ selectedValue: value });
    }

    render() {
        return (
            <div>
                <p>Choose Format</p>
                <RadioGroup name="format" selectedValue={this.props.book.format} onChange={e => this.handleChange(e)}>
                    <Radio value="A5" />A5
                    <Radio value="A6" />A6
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
    return bindActionCreators({ chooseFormat, nextStep }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Format);
