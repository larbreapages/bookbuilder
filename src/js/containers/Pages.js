import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { InputNumber } from 'antd';
import { choosePagesNumber } from '../actions/index';

class Pages extends Component {
    render() {
        return (<div>
            <p>Choose your number of pages:</p>
            <InputNumber type="number" id="pages" defaultValue={this.props.book.pages} min={80} max={500} onChange={e => this.props.choosePagesNumber(e)} />
        </div>);
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
