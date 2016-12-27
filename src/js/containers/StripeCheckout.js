import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

class TakeMoney extends React.Component {
    onToken(token) {
        fetch('/save-stripe-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(token),
        }).then((t) => {
            console.log(t);
        });
    }

    render() {
        return (
            <StripeCheckout
                name="L'Arbre à Pages"
                panelLabel="Payment"
                description="Relieur"
                image="https://larbreapages.fr/logo-c8b33fb.png"
                amount={1000}
                stripeKey="pk_test_X5QHKlsqDXQVEMBVbHyzicpd"
                locale="auto"
                email=""
                token={this.onToken}
                shippingAddress
                bitcoin
            >
            <button disabled={!this.props.accept}>Purchase</button></StripeCheckout>
        );
    }
}

function mapStateToProps(state) {
    return {
        accept: state.steps.accept,
    };
}

export default connect(mapStateToProps)(TakeMoney);
