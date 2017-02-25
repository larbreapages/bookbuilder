import React from 'react';
import InputNumber from 'antd/lib/input-number';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { choosePagesNumber } from '../actions/index';

const Pages = (props) => {
    return (<Row>
        <p className="title">Choisis ton nombre de pages :</p>
        <InputNumber type="number" id="pages" defaultValue={props.book.pages} min={72} max={240} onChange={e => props.choosePagesNumber(e)} />
    </Row>);
};

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ choosePagesNumber }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
