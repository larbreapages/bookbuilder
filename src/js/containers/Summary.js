import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {
    render() {
        return (
            <div>
                <p>Order Summary:</p>
                <ul>
                    <li>Bookbinding: {this.props.book.bookbinding}</li>
                    <li>Color: {this.props.book.color}</li>
                    <li>Format: {this.props.book.format}</li>
                    <li>Pages: {this.props.book.pages}</li>
                    <li>Gilding: {this.props.book.gilding}</li>
                </ul>
                <p>By making payment, I accept <a href="#">General Terms and Conditions of Sale</a></p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

export default connect(mapStateToProps)(Summary);
