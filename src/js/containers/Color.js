import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseColor } from '../actions/index';
import Paper1 from '../../images/paper_1.png';
import Paper2 from '../../images/paper_2.png';
import Paper3 from '../../images/paper_3.png';
import Paper4 from '../../images/paper_4.png';
import Paper5 from '../../images/paper_5.png';
import Paper6 from '../../images/paper_6.png';
import Paper7 from '../../images/paper_7.png';
import Paper8 from '../../images/paper_8.png';
import Wire1 from '../../images/wire_1.png';
import Wire2 from '../../images/wire_2.png';
import Wire3 from '../../images/wire_3.png';
import Wire4 from '../../images/wire_4.png';

class Color extends Component {
    modernPaperRender() {
        return (<div>
            <p>Choose your paper:</p>
            <div className="choices">
                <img src={Paper1} width="100" height="100" alt="blue" onClick={() => this.props.chooseColor('blue')} />
                <img src={Paper2} width="100" height="100" alt="black" onClick={() => this.props.chooseColor('black')} />
                <img src={Paper3} width="100" height="100" alt="orange" onClick={() => this.props.chooseColor('yellow')} />
                <img src={Paper4} width="100" height="100" alt="green" onClick={() => this.props.chooseColor('green')} />
            </div>
        </div>);
    }

    conservationPaperRender() {
        return (<div>
            <p>Choose your paper:</p>
            <div className="choices">
                <img src={Paper5} width="100" height="100" alt="blue" onClick={() => this.props.chooseColor('blue')} />
                <img src={Paper6} width="100" height="100" alt="black" onClick={() => this.props.chooseColor('black')} />
                <img src={Paper7} width="100" height="100" alt="orange" onClick={() => this.props.chooseColor('yellow')} />
                <img src={Paper8} width="100" height="100" alt="green" onClick={() => this.props.chooseColor('green')} />
            </div>
        </div>);
    }

    wireRender() {
        return (<div>
            <p>Choose your wire:</p>
            <div className="choices">
                <img src={Wire1} width="100" height="100" alt="blue" onClick={() => this.props.chooseColor('blue')} />
                <img src={Wire2} width="100" height="100" alt="black" onClick={() => this.props.chooseColor('black')} />
                <img src={Wire3} width="100" height="100" alt="orange" onClick={() => this.props.chooseColor('yellow')} />
                <img src={Wire4} width="100" height="100" alt="green" onClick={() => this.props.chooseColor('green')} />
            </div>
        </div>);
    }

    render() {
        return (
            <div>
                { this.props.book.bookbinding === 'modern' ? this.modernPaperRender() : this.conservationPaperRender() }
                { this.props.book.bookbinding === 'modern' ? this.wireRender() : null }
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
