import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { Button } from 'antd';

class TakeMoney extends React.Component {
    onToken(token, book) {
        fetch('/save-stripe-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, book }),
        }).then((t) => {
            console.log(t);
        });
    }

    render() {
        return (
            <StripeCheckout
                name="L'Arbre à Pages"
                description="Reliure d'art"
                image="https://larbreapages.fr/logo-c8b33fb.png"
                amount={this.props.book.price * 100}
                currency="EUR"
                stripeKey={CONFIG.publishableKey}
                locale="fr"
                token={token => this.onToken(token, this.props.book)}
                billingAddress
                shippingAddress
            ><Button type="primary" disabled={!this.props.acceptConditions}>Purchase</Button></StripeCheckout>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
        acceptConditions: state.steps.acceptConditions,
    };
}

export default connect(mapStateToProps)(TakeMoney);
