import React from 'react';
import Button from 'antd/lib/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { previousStep, nextStep } from '../actions/index';
import Wire from './Wire';
import Paper from './Paper';
import Price from './Price';

const Color = (props) => {
    const validStep = () => {
        if (props.book.bookbinding === 'conservation') return (props.book.paper >= 5);
        if (props.book.bookbinding === 'modern') return (props.book.paper < 5 && props.book.wire);

        return false;
    };

    return (<div className="component">
        <div>
            <Paper />
            { props.book.bookbinding === 'modern' ? <Wire /> : null }
        </div>
        <div className="footer">
            <Button type="ghost" onClick={() => props.previousStep()}>Précédent</Button>
            <Price />
            <Button
                type="ghost"
                className={(!validStep()) ? 'hint--top-left' : ''}
                aria-label="Choisis ton papier"
                onClick={() => props.nextStep()} disabled={!validStep()}
            >Suivant</Button>
        </div>
    </div>);
};

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ previousStep, nextStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Color);
