// https://s3-eu-west-1.amazonaws.com/littleplane/stencils/images/000/000/819/original/0966-Cart.svg?1483985686
import React from 'react';
import { Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from '../actions/index';

const Finish = (props) => {
    return (<div className="finish">
        <Icon type="check-circle-o" />
        <p>Congratulations!</p>
        <p>Your order has been accepted!</p>
        <Button onClick={() => props.reset()}>Close</Button>
    </div>);
};

function mapStateToProps(state) {
    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ reset }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
