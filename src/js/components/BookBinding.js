import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';
import { Tooltip } from 'antd';
import { chooseBookBinding } from '../actions/index';
import ModernImg from '../../images/modern.png';
import ConservationImg from '../../images/conservation.png';

class BookBinding extends Component {
    handleChange(value) {
        this.props.chooseBookBinding(value);
        this.setState({ selectedValue: value });
    }

    render() {
        return (
            <div>
                <p>Choose your bookbinding:</p>
                <RadioGroup className="choices" name="bookbinding" selectedValue={this.props.book.bookbinding} onChange={e => this.handleChange(e)}>
                    <div>
                        <Tooltip placement="left" title="Reliure à couture apparente possédant une excellente ouverture. Idéal pour écrire ou pour dessiner (papier blanc 120g).">
                            <img src={ModernImg} width="270" alt="modern" />
                        </Tooltip>
                        <div className="center">
                            <Radio value="modern" />Modern Bookbinding
                        </div>
                    </div>
                    <div>
                        <Tooltip placement="right" title="Reliure souple en papier avec couture semi-apparente, un livre unique pour rédiger toutes vos notes.">
                            <img src={ConservationImg} width="320" alt="conservation" />
                        </Tooltip>
                        <div className="center">
                            <Radio value="conservation" />Conservation Bookbinding
                        </div>
                    </div>
                </RadioGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ chooseBookBinding }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookBinding);
