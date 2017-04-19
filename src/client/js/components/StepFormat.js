import React from 'react';
import Button from 'antd/lib/button';
import Radio, { Group as RadioGroup } from 'antd/lib/radio';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseFormat, acceptConditions, previousStep, nextStep } from '../actions/index';
import Pages from './Pages';
import Gilding from './Gilding';
import Price from './Price';

const formats = [
    { format: 'small', text: 'Petit (16 x 12 cm)' },
    { format: 'medium', text: 'Moyen (20 x 16 cm)' },
    { format: 'large', text: 'Grand (24 x 20 cm)' },
];

const StepFormat = (props) => {
    return (<div className="component">
        <div>
            <Row>
                <p className="title">Choisis ton format :</p>
                <RadioGroup name="format" value={props.book.format} onChange={e => props.chooseFormat(e.target.value)}>
                    { formats.map(({ format, text }) => <Radio key={format} value={format}>{text}</Radio>) }
                </RadioGroup>
            </Row>
            <Pages min={72} max={240} />
            <Gilding />
        </div>
        <div className="footer">
            <Button type="ghost" onClick={() => props.previousStep()}>Précédent</Button>
            <Price />
            <Button type="ghost" onClick={() => props.nextStep()}>Suivant</Button>
        </div>
    </div>);
};

const mapStateToProps = state => ({ book: state.book, accept: state.steps.acceptConditions });
const mapDispatchToProps = dispatch => bindActionCreators({ chooseFormat, acceptConditions, previousStep, nextStep }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StepFormat);
