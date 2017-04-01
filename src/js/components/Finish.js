import React from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from '../actions/index';

const Finish = (props) => {
    return (<div className="finish">
        <Icon type="check-circle-o" />
        <p>Félicitation !</p>
        <p>Votre commande vient d&apos;être accepté !</p>
        <p>Un mail vous a été envoyé.</p>
        <Button onClick={() => props.reset()}>Fermer</Button>
    </div>);
};

function mapStateToProps(state) {
    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ reset }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
