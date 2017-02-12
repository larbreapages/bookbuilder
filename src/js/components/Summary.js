import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import { acceptConditions } from '../actions/index';

const Summary = (props) => {
    return (<div>
        <p>Voici le récapitulatif de votre commande, merci de vérifier l'exactitude des informations avant de procéder au paiement :</p>
        <hr />
        <table>
            <tbody>
                <tr><td>Reliure :</td><td>{props.book.bookbinding}</td></tr>
                <tr><td>Papier :</td><td>{props.book.paper}</td></tr>
                <tr><td>Format :</td><td>{props.book.format}</td></tr>
                <tr><td>Nombre de pages :</td><td>{props.book.pages}</td></tr>
                <tr><td>Dorure :</td><td>{props.book.gilding}</td></tr>
                <tr><td style={{ paddingTop: '20px' }}>Total HT :</td><td style={{ paddingTop: '20px' }}>{props.book.price} €</td></tr>
                <tr><td>TVA :</td><td>{props.book.tva} €</td></tr>
                <tr><td>Frais d'envoi :</td><td>{props.book.shippingCosts} €</td></tr>
                <tr><td style={{ paddingTop: '20px' }}><span className="total">Montant total pour cet envoi :</span></td><td style={{ paddingTop: '20px' }}><span className="total">{props.book.total} €</span></td></tr>
            </tbody>
        </table>
        <hr />
        <p><b>100% fait main et français</b>, votre carnet va être confectionné avec soin dans mon Atelier de Reliure d'Art "L'Arbre à Pages". Il vous sera expédié dans un délai compris entre <b>5 et 20 jours ouvrés</b>.</p>
        <Checkbox checked={props.accept} onChange={() => props.acceptConditions()}>J'accepte <a href="https://larbreapages.fr/terms" target="_blank" rel="noopener noreferrer">les conditions générales de vente</a></Checkbox>
    </div>);
};

function mapStateToProps(state) {
    return {
        book: state.book,
        accept: state.steps.acceptConditions,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ acceptConditions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
