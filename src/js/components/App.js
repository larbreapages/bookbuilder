import React from 'react';
import BookBinding from '../containers/BookBinding';
import Color from '../containers/Color';
import Pages from '../containers/Pages';
import Gilding from '../containers/Gilding';

const App = () => {
    return (
        <div>
            <div>Test module</div>
            <BookBinding />
            <Color />
            <Pages />
            <Gilding />
        </div>
    );
};

export default App;
