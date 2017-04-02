import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextStep } from '../actions/index';
import ModernImg from '../../images/modern.png';
import ModernImg2 from '../../images/modern2.png';
import ModernImg3 from '../../images/modern3.png';
import ModernImg4 from '../../images/modern4.png';
import ModernImg5 from '../../images/gilding.png';
import ConservationImg from '../../images/conservation.png';
import ConservationImg2 from '../../images/conservation2.png';
import ConservationImg3 from '../../images/conservation3.png';
import ConservationImg4 from '../../images/conservation4.png';
import ConservationImg5 from '../../images/gilding2.png';
import Gallery from './Gallery';
import Price from './Price';

const BookBinding = (props) => {
    return (<div className="component">
        <Row>
            <p className="title">Choisis un type de reliure :</p>
            <div className="galleries">
                <Gallery
                    images={[ModernImg, ModernImg2, ModernImg3, ModernImg4, ModernImg5]}
                    text="Reliure moderne"
                    type="modern"
                />
                <Gallery
                    images={[ConservationImg, ConservationImg2, ConservationImg3, ConservationImg4, ConservationImg5]}
                    text="Reliure de conservation"
                    type="conservation"
                />
            </div>
        </Row>
        <div className="footer">
            <Button type="ghost" disabled>Précédent</Button>
            <Price />
            <Button
                type="ghost"
                className={(!props.book.bookbinding) ? 'hint--top-left' : ''}
                aria-label="Choisis un type de reliure"
                onClick={() => props.nextStep()} disabled={!props.book.bookbinding}
            >Suivant</Button>
        </div>
    </div>);
};

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ nextStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookBinding);
