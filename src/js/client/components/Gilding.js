import React from 'react';
import Input from 'antd/lib/input';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseGilding } from '../actions/index';
import GildingImg from '../../../images/gilding.png';
import GildingImg2 from '../../../images/gilding2.png';

const Gilding = (props) => {
    const gildingText1 = 'Ici, le prénom « LISON » a été inscrit en majuscules à la feuille d’or sur une étiquette de couleur puis disposé sur le recto du carnet.';
    const gildingText2 = 'Ici, les  lettres « C & A » ont été inscrites en majuscules à la feuille d’or et verticalement sur le dos carnet.';
    const gildingText = props.book.bookbinding === 'modern' ? gildingText1 : gildingText2;

    return (<div>
        <Row>
            <p className="title">Choisis ta dorure <span className="hint--top hint--large" aria-label="Votre inscription sera réalisée en majuscules. L’atelier se réserve le droit de modifier l’emplacement et l’organisation de votre inscription sur l’ouvrage si la longueur de celle-ci ne peut figurer, par manque de place, à l’emplacement initialement prévu sur l’image. Les dorures sont réalisées de manière artisanale à la feuille d’or (or véritable)."><span className="link">[Plus d&apos;infos] :</span></span></p>
            <Input
                type="text"
                id="gilding"
                defaultValue={props.book.gilding}
                maxLength="25"
                placeholder="Entre ton texte..." onChange={e => props.chooseGilding(e.target.value)}
            />
        </Row>
        <Row>
            <Col xs={12} sm={5}>
                <div className="zoom">
                    <img src={props.book.bookbinding === 'modern' ? GildingImg : GildingImg2} alt="gilding example" width="150" />
                </div>
            </Col>
            <Col xs={12} sm={19}>
                <p>{gildingText}</p>
            </Col>
        </Row>
    </div>);
};

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ chooseGilding }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gilding);
