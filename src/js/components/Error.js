import React from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from '../actions/index';

const Error = (props) => {
    return (<div className="error">
        <Icon type="close-circle" />
        <p>Erreur !</p>
        <p>Veuillez contacter l&apos;administrateur contact@larbreapages.fr.</p>
        <Button onClick={() => props.reset()}>Fermer</Button>
    </div>);
};

function mapStateToProps(state) {
    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ reset }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Error);
