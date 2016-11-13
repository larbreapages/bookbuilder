import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseColor } from '../actions/index';

class Color extends Component {
    render() {
        return (
            <div>
                <p>Choose Color</p>
                <label><input type="radio" name="color" onChange={() => this.props.chooseColor('blue')} /> Blue</label>
                <label><input type="radio" name="color" onChange={() => this.props.chooseColor('yellow')} /> Yellow</label>
                <label><input type="radio" name="color" onChange={() => this.props.chooseColor('green')} /> Green</label>
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
    return bindActionCreators({ chooseColor }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Color);
