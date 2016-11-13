import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseBookBinding } from '../actions/index';

class BookBinding extends Component {
    render() {
        return (
            <div>
                <p>Choose Bookbinding</p>
                <label>
                    <input
                        type="radio"
                        name="bookbinding"
                        value="traditional"
                        // checked={this.props.book.bookbinding === 'traditional'}
                        onChange={e => this.props.chooseBookBinding(e.target.value)}
                    />
                    Traditional Bookbinding
                </label>
                <label>
                    <input
                        type="radio"
                        name="bookbinding"
                        value="modern"
                        onChange={e => this.props.chooseBookBinding(e.target.value)}
                    />
                    Modern Bookbinding
                </label>
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
    return bindActionCreators({ chooseBookBinding }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BookBinding);
