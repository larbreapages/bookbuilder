import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';
import { chooseColor } from '../actions/index';

class Color extends Component {
    handleChange(value) {
        this.props.chooseColor(value);
        this.setState({ selectedValue: value });
    }

    render() {
        return (
            <div>
                <p>Choose Color</p>
                <RadioGroup name="color" selectedValue={this.props.book.color} onChange={e => this.handleChange(e)}>
                    <Radio value="blue" />Blue
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
    return bindActionCreators({ chooseColor }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Color);
