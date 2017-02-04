import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Input, Row, Col, Tooltip } from 'antd';
import { chooseGilding } from '../actions/index';
import GildingImg from '../../images/gilding.png';

const Gilding = (props) => {
    return (<div>
        <p>Choose your text: <Tooltip title="Votre inscription sera réalisée en majuscules. L’atelier se réserve le droit de modifier l’emplacement et l’organisation de votre inscription sur l’ouvrage si la longueur de celle-ci ne peut figurer, par manque d’espace, à l’emplacement initialement prévu sur l’image. Les dorures sont réalisées de manière artisanale à la feuille d’or (or véritable) ou au film (œser) couleur."><a href="#">[Plus d'infos]</a></Tooltip></p>
        <Input
            type="text"
            id="gilding"
            defaultValue={props.book.gilding}
            maxLength="25"
            placeholder="Type your text..." onChange={e => props.chooseGilding(e.target.value)}
        />
        {/*
        <Row>
            <Col span={8}>
                <img src={GildingImg} alt="gilding example" width="200" />
            </Col>
            <Col span={16}>
                <p>Ici, les  lettres « C & A » ont étés inscrites en majuscules à la feuille d’or et verticalement sur le dos carnet.</p>
            </Col>
        </Row>
        */}
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
