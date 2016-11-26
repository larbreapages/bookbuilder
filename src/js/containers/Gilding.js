import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseGilding } from '../actions/index';

class Gilding extends Component {
    render() {
        return (<div>
            <p>Choose your text: </p>
            <input type="text" id="gilding" defaultValue={this.props.book.gilding} onChange={e => this.props.chooseGilding(e.target.value)} />
        </div>);
    }

}

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ chooseGilding }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Gilding);
