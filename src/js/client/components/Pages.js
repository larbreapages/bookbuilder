import React from 'react';
import InputNumber from 'antd/lib/input-number';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { choosePagesNumber } from '../actions/index';

const Pages = (props) => {
    return (<Row>
        <p className="title">Choisis ton nombre de pages :</p>
        <InputNumber type="number" defaultValue={props.book.pages} min={props.min} max={props.max} onChange={e => props.choosePagesNumber(e)} />
    </Row>);
};

const mapStateToProps = state => ({ book: state.book });
const mapDispatchToProps = dispatch => bindActionCreators({ choosePagesNumber }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
