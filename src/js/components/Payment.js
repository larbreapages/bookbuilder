import React from 'react';
import Checkbox from 'antd/lib/checkbox';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import nunjucks from 'nunjucks';
import { acceptConditions, previousStep } from '../actions/index';
import { convertToText } from '../utils';
import terms from '../views/terms.njk';
import PurchaseButton from './PurchaseButton';
import Price from './Price';

class Payment extends React.Component {
    bookText = convertToText(this.props.book);
    state = { visible: false };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        return (<div className="component">
            <div className="container">
                <p>Voici le récapitulatif de votre commande, merci de vérifier l'exactitude des informations avant de procéder au paiement :</p>
                <hr />
                <table>
                    <tbody>
                        <tr><td>Reliure :</td><td>{this.bookText.bookbinding}</td></tr>
                        <tr><td>Papier :</td><td>{this.bookText.paper}</td></tr>
                        { this.props.book.bookbinding === 'modern' && <tr><td>Couleur du fil :</td><td>{this.bookText.wire}</td></tr> }
                        <tr><td>Format :</td><td>{this.bookText.format}</td></tr>
                        <tr><td>Nombre de pages :</td><td>{this.props.book.pages} (papier blanc 120g)</td></tr>
                        <tr><td>Dorure or :</td><td>{this.bookText.gilding}</td></tr>
                        <tr><td style={{ paddingTop: '20px' }}>Total HT :</td><td style={{ paddingTop: '20px' }}>{this.props.book.price} €</td></tr>
                        <tr><td>Frais d'envoi :</td><td>{this.props.book.shippingCosts} €</td></tr>
                        <tr><td>TVA :</td><td>{this.props.book.tva} €</td></tr>
                        <tr><td style={{ paddingTop: '20px' }}><span className="total">Montant total pour cet envoi :</span></td><td style={{ paddingTop: '20px' }}><span className="total">{this.props.book.total} €</span></td></tr>
                    </tbody>
                </table>
                <hr />
                <p>100 % fait main et de fabrication française, votre carnet va être confectionné avec soin dans mon Atelier de Reliure d'Art "L'Arbre à Pages". Il vous sera expédié dans un délai compris entre 5 et 20 jours ouvrés.</p>
                <Checkbox checked={this.props.accept} onChange={() => this.props.acceptConditions()}>J'accepte <a href="#" rel="noopener noreferrer" onClick={this.showModal}>les conditions générales de vente</a></Checkbox>
            </div>
            <div className="footer">
                <Button type="ghost" onClick={() => this.props.previousStep()}>Précédent</Button>
                <Price />
                <PurchaseButton />
            </div>

            <Modal
				title="Conditions générales de vente"
				visible={this.state.visible}
                onCancel={this.handleCancel}
				footer={[ <Button key="back" size="large" onClick={this.handleCancel}>Fermer</Button> ]}>
                <div className="terms" dangerouslySetInnerHTML={{__html: terms.render()}} />
            </Modal>
        </div>);
    }
};

function mapStateToProps(state) {
    return {
        book: state.book,
        accept: state.steps.acceptConditions,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ acceptConditions, previousStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
