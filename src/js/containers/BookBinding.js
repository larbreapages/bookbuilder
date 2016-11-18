import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';
import { chooseBookBinding, nextStep } from '../actions/index';

const step = 0;

class BookBinding extends Component {
    handleChange(value) {
        this.props.chooseBookBinding(value);
        this.props.nextStep(step);
        this.setState({ selectedValue: value });
    }

    render() {
        return (
            <div>
                <p>Choose Bookbinding</p>
                <RadioGroup name="bookbinding" selectedValue={this.props.book.bookbinding} onChange={e => this.handleChange(e)}>
                    <Radio value="traditional" />Traditional Bookbinding
                    <Radio value="modern" />Modern Bookbinding
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
    return bindActionCreators({ chooseBookBinding, nextStep }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BookBinding);
