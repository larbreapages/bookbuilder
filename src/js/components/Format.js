import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseFormat, acceptConditions, previousStep, nextStep } from '../actions/index';
import Pages from './Pages';
import Gilding from './Gilding';
import Price from './Price';

const RadioGroup = Radio.Group;

class Format extends Component {
    handleChange(value) {
        this.props.chooseFormat(value);
        this.setState({ selectedValue: value });
    }

    render() {
        return (<div className="component">
            <div>
                <Row>
                    <p className="title">Choisir ton format :</p>
                    <RadioGroup name="format" value={this.props.book.format} onChange={e => this.handleChange(e.target.value)}>
                        <Radio value={'small'}>Petit (16 x 12 cm)</Radio>
                        <Radio value={'medium'}>Moyen (20 x 16 cm)</Radio>
                        <Radio value={'large'}>Grand (24 x 20 cm)</Radio>
                    </RadioGroup>
                </Row>
                <Pages />
                <Gilding />
            </div>
            <div className="footer">
                <Button type="ghost" onClick={() => this.props.previousStep()}>Précédent</Button>
                <Price />
                <Button type="ghost" onClick={() => this.props.nextStep()}>Suivant</Button>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
        accept: state.steps.acceptConditions,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ chooseFormat, acceptConditions, previousStep, nextStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Format);
