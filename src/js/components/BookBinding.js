import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextStep } from '../actions/index';
import ModernImg from '../../images/modern.png';
import ConservationImg from '../../images/conservation.png';
import Gallery from './Gallery';
import Price from './Price';

class BookBinding extends Component {
    render() {
        return (<div className="component">
            <Row>
                <p className="title">Choisis un type de reliure :</p>
                <div className="galleries">
                    <Gallery images={[ModernImg, 'http://fakeimg.pl/300', 'http://fakeimg.pl/350']} text="Reliure moderne" type="modern" />
                    <Gallery images={[ConservationImg, 'http://fakeimg.pl/500', 'http://fakeimg.pl/450']} text="Reliure de conservation" type="conservation" />
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
    return bindActionCreators({ nextStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookBinding);
