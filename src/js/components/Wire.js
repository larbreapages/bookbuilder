import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'antd';
import { chooseWire } from '../actions/index';
import Wire1 from '../../images/wire_1.png';
import Wire2 from '../../images/wire_2.png';
import Wire3 from '../../images/wire_3.png';
import Wire4 from '../../images/wire_4.png';

class Wire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wire: props.book.wire,
        };
    }

    handleChangeWire(value) {
        this.props.chooseWire(value);
        this.setState({ wire: value });
    }

    render() {
        return (<Row>
            <p className="title">Choisis la couleur de ton fil :</p>
            <div className="choices wire">
                <div className={this.state.wire === 1 ? 'choice active' : 'choice'} onClick={() => this.handleChangeWire(1)}>
                    <img src={Wire1} alt="wire1" />
                    <span>Violet</span>
                </div>
                <div className={this.state.wire === 2 ? 'choice active' : 'choice'} onClick={() => this.handleChangeWire(2)}>
                    <img src={Wire2} alt="wire2" />
                    <span>Bleu Canard</span>
                </div>
                <div className={this.state.wire === 3 ? 'choice active' : 'choice'} onClick={() => this.handleChangeWire(3)}>
                    <img src={Wire3} alt="wire3" />
                    <span>Rouge Brique</span>
                </div>
                <div className={this.state.wire === 4 ? 'choice active' : 'choice'} onClick={() => this.handleChangeWire(4)}>
                    <img src={Wire4} alt="wire4" />
                    <span>Jaune Canard</span>
                </div>
            </div>
        </Row>);
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ chooseWire }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wire);
