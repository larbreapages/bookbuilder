import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { nextStep } from '../actions/index';

const PurchaseButton = (props) => {
    const onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, book: props.book }),
        }).then(() => {
            props.nextStep();
        });
    };

    return (
        <StripeCheckout
            name="L'Arbre à Pages"
            description="Reliure d'art"
            image="https://larbreapages.fr/logo-c8b33fb.png"
            amount={props.book.total * 100}
            currency="EUR"
            stripeKey={CONFIG.publishableKey}
            locale="fr"
            token={onToken}
            billingAddress
            shippingAddress
        ><Button type="primary" disabled={!props.acceptConditions}>Acheter</Button></StripeCheckout>
    );
};

function mapStateToProps(state) {
    return {
        book: state.book,
        acceptConditions: state.steps.acceptConditions,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ nextStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseButton);