import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseColor } from '../actions/index';
import Paper1 from '../../images/paper_1.jpg';
import Paper2 from '../../images/paper_2.jpg';
import Paper3 from '../../images/paper_3.jpg';
import Paper4 from '../../images/paper_4.jpg';

class Color extends Component {
    render() {
        return (
            <div>
                <p>Choose your paper:</p>
                <div className="choices">
                    <img src={Paper1} width="100" height="100" alt="blue" onClick={() => this.props.chooseColor('blue')} />
                    <img src={Paper2} width="100" height="100" alt="black" onClick={() => this.props.chooseColor('black')} />
                    <img src={Paper3} width="100" height="100" alt="orange" onClick={() => this.props.chooseColor('yellow')} />
                    <img src={Paper4} width="100" height="100" alt="green" onClick={() => this.props.chooseColor('green')} />
                </div>
                <p>Choose your wire:</p>
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
