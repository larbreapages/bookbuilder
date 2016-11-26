import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { acceptConditions } from '../actions/index';

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
                <input type="checkbox" defaultChecked={this.props.accept} onClick={() => this.props.acceptConditions()} /> I accept <a href="#">General Terms and Conditions of Sale</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
        accept: state.steps.accept,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ acceptConditions }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Summary);
