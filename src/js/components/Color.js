import React from 'react';
import { connect } from 'react-redux';
import Wire from './Wire';
import Paper from './Paper';

const Color = (props) => {
    return (<div>
        <Paper />
        { props.book.bookbinding === 'modern' ? <Wire /> : null }
    </div>);
};

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

export default connect(mapStateToProps)(Color);
