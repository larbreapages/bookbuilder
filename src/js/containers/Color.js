import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseColor } from '../actions/index';

class Color extends Component {
    render() {
        return (
            <div>
                <p>Choose your leather:</p>
                <div className="choices">
                    <img src="http://placehold.it/100/0000FF/ffffff?text=Blue" alt="blue" onClick={() => this.props.chooseColor('blue')} />
                    <img src="http://placehold.it/100/000000/ffffff?text=Black" alt="black" onClick={() => this.props.chooseColor('black')} />
                    <img src="http://placehold.it/100/FFA500/ffffff?text=Orange" alt="orange" onClick={() => this.props.chooseColor('yellow')} />
                    <img src="http://placehold.it/100/008000/ffffff?text=Green" alt="green" onClick={() => this.props.chooseColor('green')} />
                </div>
                <p>Choose your paper:</p>
                <div className="choices">
                    <img src="http://placehold.it/100/FF0000/ffffff?text=Red" alt="red" onClick={() => this.props.chooseColor('red')} />
                    <img src="http://placehold.it/100/FFC0CB/ffffff?text=Pink" alt="pink" onClick={() => this.props.chooseColor('pink')} />
                    <img src="http://placehold.it/100/808080/ffffff?text=Gray" alt="gray" onClick={() => this.props.chooseColor('gray')} />
                    <img src="http://placehold.it/100/6E5341/ffffff?text=Brown" alt="brown" onClick={() => this.props.chooseColor('brown')} />
                </div>
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
