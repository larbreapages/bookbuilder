import React from 'react';
import { Button } from 'semantic-ui-react';
import BookBinding from '../containers/BookBinding';
import Color from '../containers/Color';
import Pages from '../containers/Pages';
import Format from '../containers/Format';
import Gilding from '../containers/Gilding';
import Steps from '../containers/Steps';
// import StripeCheckout from '../containers/StripeCheckout';

const App = () => {
    return (
        <div>
            <h3>Test module</h3>
            <Steps />
            <BookBinding />
            <Color />
            <Format />
            <Pages />
            <Gilding />
            <Button>Purchase</Button>
        </div>
    );
};

export default App;
