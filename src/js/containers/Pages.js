import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { choosePagesNumber } from '../actions/index';

class Pages extends Component {
    render() {
        return (
            <div>
                <p>Choose Pages Number</p>
                <select value={this.props.book.pages} onChange={e => this.props.choosePagesNumber(e.target.value)}>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ choosePagesNumber }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Pages);
