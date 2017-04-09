import React from 'react';
import Checkbox from 'antd/lib/checkbox';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { acceptConditions, previousStep } from '../actions/index';
import { translate } from '../../../shared/utils';
import PurchaseButton from './PurchaseButton';
import Terms from './Terms';
import Price from './Price';

class StepPayment extends React.Component {
    constructor() {
        super();
        this.state = { visible: false };
        this.showModal = this.showModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    showModal() {
        this.setState({ visible: true });
    }

    handleCancel() {
        this.setState({ visible: false });
    }

    render() {
        return (<div className="component">
            <div>
                <p>Voici le récapitulatif de votre commande, merci de vérifier l&apos;exactitude des informations avant de procéder au paiement :</p>
                <hr />
                <table>
                    <tbody>
                        <tr><td>Reliure :</td><td>{ translate(this.props.book.bookbinding) }</td></tr>
                        <tr><td>Papier :</td><td>{ this.props.book.paper }</td></tr>
                        { this.props.book.bookbinding === 'modern' && <tr><td>Couleur du fil :</td><td>{this.props.book.wire}</td></tr> }
                        <tr><td>Format :</td><td>{ translate(this.props.book.format) }</td></tr>
                        <tr><td>Nombre de pages :</td><td>{this.props.book.pages} (papier blanc 120g)</td></tr>
                        <tr><td>Dorure or :</td><td>{this.props.book.gilding || 'Aucune'}</td></tr>
                        <tr><td style={{ paddingTop: '20px' }}>Total HT :</td><td style={{ paddingTop: '20px' }}>{this.props.book.price} €</td></tr>
                        <tr><td>Frais d&apos;envoi :</td><td>{this.props.book.shippingCosts} €</td></tr>
                        <tr><td>TVA :</td><td>{this.props.book.tva} €</td></tr>
                        <tr><td style={{ paddingTop: '20px' }}><span className="total">Montant total pour cet envoi :</span></td><td style={{ paddingTop: '20px' }}><span className="total">{this.props.book.total} €</span></td></tr>
                    </tbody>
                </table>
                <hr />
                <p>100 % fait main et de fabrication française, votre carnet va être confectionné avec soin dans mon Atelier de Reliure d'Art "L'Arbre à Pages". Il vous sera expédié dans un délai compris entre 5 et 20 jours ouvrés.</p>
                <Checkbox checked={this.props.accept} onChange={() => this.props.acceptConditions()}>J&apos;accepte <span className="link" onClick={this.showModal}>les conditions générales de vente</span></Checkbox>
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
                footer={[<Button key="back" size="large" onClick={this.handleCancel}>Fermer</Button>]}
            >
                <Terms />
            </Modal>
        </div>);
    }
}

const mapStateToProps = state => ({ book: state.book, accept: state.steps.acceptConditions });
const mapDispatchToProps = dispatch => bindActionCreators({ acceptConditions, previousStep }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StepPayment);
