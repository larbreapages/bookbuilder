import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import { chooseFormat } from '../actions/index';
import Pages from './Pages';
import Gilding from './Gilding';

const RadioGroup = Radio.Group;

class Format extends Component {
    handleChange(value) {
        this.props.chooseFormat(value);
        this.setState({ selectedValue: value });
    }

    render() {
        return (
            <div>
                <p>Choose your format:</p>
                <RadioGroup name="format" value={this.props.book.format} onChange={e => this.handleChange(e.target.value)}>
                    <Radio value={'small'}>Small (16x12)</Radio>
                    <Radio value={'middle'}> Middle (20x16)</Radio>
                    <Radio value={'big'}> Big (24x20)</Radio>
                </RadioGroup>
                <Pages />
                <Gilding />
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
