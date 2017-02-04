import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { nextStep } from '../actions/index';

const TakeMoney = (props) => {
    const onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, book: props.book }),
        }).then((res) => {
            console.log(res);
            if (res.success) {
                props.nextStep();
            }
        });
    };

    return (
        <StripeCheckout
            name="L'Arbre à Pages"
            description="Reliure d'art"
            image="https://larbreapages.fr/logo-c8b33fb.png"
            ComponentClass="div"
            panelLabel="Give Moneyyyy"
            amount={props.book.price * 100}
            currency="EUR"
            stripeKey={CONFIG.publishableKey}
            locale="fr"
            token={onToken}
            billingAddress
            shippingAddress
        ><Button type="primary" disabled={!props.acceptConditions}>Purchase</Button></StripeCheckout>
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

export default connect(mapStateToProps, mapDispatchToProps)(TakeMoney);
