import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { choosePagesNumber } from '../actions/index';

class Pages extends Component {
    render() {
        return (
            <div>
                <label htmlFor="pages">Choose your number of pages: </label>
                <input type="number" id="pages" defaultValue={this.props.book.pages} min="80" max="500" onChange={e => this.props.choosePagesNumber(e.target.value)} />
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
