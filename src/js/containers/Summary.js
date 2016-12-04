import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
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
                <Checkbox checked={this.props.accept} onChange={() => this.props.acceptConditions()}>I accept <a href="#">General Terms and Conditions of Sale</a></Checkbox>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
        accept: state.steps.acceptConditions,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ acceptConditions }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Summary);
