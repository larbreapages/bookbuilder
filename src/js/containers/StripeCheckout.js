import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
    onToken(token) {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then((t) => {
            console.log(t);
        });
    }

    render() {
        return (
            <StripeCheckout
                name="L'arbre a pages"
                description="Relieur"
                image="http://larbreapages.fr/logo-a5ef9a2.png"
                ComponentClass="div"
                panelLabel="Payer"
                amount={1000}
                stripeKey="pk_test_X5QHKlsqDXQVEMBVbHyzicpd"
                locale="auto"
                email=""
                token={this.onToken}
                bitcoin
                alipay
            ><button className="btn btn-primary">Purchase</button></StripeCheckout>
        );
    }
}
