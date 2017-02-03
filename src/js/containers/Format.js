import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Radio, Checkbox } from 'antd';
import { chooseFormat, acceptConditions } from '../actions/index';
import Pages from './Pages';
import Gilding from './Gilding';

const RadioGroup = Radio.Group;

class Format extends Component {
    handleChange(value) {
        this.props.chooseFormat(value);
        this.setState({ selectedValue: value });
    }

    render() {
        return (<div>
            <p>Choose your format:</p>
            <RadioGroup name="format" value={this.props.book.format} onChange={e => this.handleChange(e.target.value)}>
                <Radio value={'small'}>Small (16x12)</Radio>
                <Radio value={'medium'}> Medium (20x16)</Radio>
                <Radio value={'large'}> Large (24x20)</Radio>
            </RadioGroup>
            <Pages />
            <Gilding />
            <p>Shipping costs: {this.props.book.shippingCosts}€</p>
            <p>T.V.A: {this.props.book.tva}€</p>
            <Checkbox checked={this.props.accept} onChange={() => this.props.acceptConditions()}>I accept <a href="https://larbreapages.com/terms">General Terms and Conditions of Sale</a></Checkbox>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
        accept: state.steps.acceptConditions,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ chooseFormat, acceptConditions }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Format);
