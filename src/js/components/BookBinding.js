import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseBookBinding, choosePaper, nextStep } from '../actions/index';
import ModernImg from '../../images/modern.png';
import ConservationImg from '../../images/conservation.png';
import Price from './Price';

class BookBinding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookbinding: props.book.bookbinding,
        };
    }

    handleChange(value) {
        this.props.chooseBookBinding(value);
        this.setState({ bookbinding: value });
    }

    render() {
        return (<div className="component">
            <Row>
                <p className="title">Choisis un type de reliure :</p>
                <div className="choices bookbinding">
                    <div className={this.state.bookbinding === 'modern' ? 'choice active' : 'choice'} onClick={() => this.handleChange('modern')}>
                        <div
                            className="hint--top hint--large"
                            aria-label="Reliure copte possédant une excellente ouverture. Idéal pour écrire ou pour dessiner (papier blanc 120g)."
                        >
                            <img src={ModernImg} alt="modern" />
                            <span className="center">Reliure moderne</span>
                        </div>
                    </div>
                    <div className={this.state.bookbinding === 'conservation' ? 'choice active' : 'choice'} onClick={() => this.handleChange('conservation')}>
                        <div className="hint--top hint--large" aria-label="Reliure souple en papier avec couture semi-apparente. Le carnet parfait pour rédiger toutes vos notes (papier blanc 120g).">
                            <img src={ConservationImg} alt="conservation" />
                            <span className="center">Reliure de conservation</span>
                        </div>
                    </div>
                </div>
            </Row>
            <div className="footer">
                <Button type="ghost" disabled>Précédent</Button>
                <Price />
                <Button
                    type="ghost"
                    className={(!this.props.book.bookbinding) ? 'hint--top-left' : ''}
                    aria-label="Choisis un type de reliure"
                    onClick={() => this.props.nextStep()} disabled={!this.props.book.bookbinding}
                >Suivant</Button>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ chooseBookBinding, choosePaper, nextStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookBinding);
