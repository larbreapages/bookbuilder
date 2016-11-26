import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';
import { chooseFormat } from '../actions/index';

class Format extends Component {
    handleChange(value) {
        this.props.chooseFormat(value);
        this.setState({ selectedValue: value });
    }

    render() {
        return (
            <div>
                <p>Choose your format:</p>
                <RadioGroup name="format" selectedValue={this.props.book.format} onChange={e => this.handleChange(e)}>
                    <div><Radio value="small" /> Small (16x12)</div>
                    <div><Radio value="middle" /> Middle (20x16)</div>
                    <div><Radio value="big" /> Big (24x20)</div>
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
    return bindActionCreators({ chooseFormat }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Format);
