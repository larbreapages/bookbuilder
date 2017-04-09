import React from 'react';
import Tag from 'antd/lib/tag';
import { connect } from 'react-redux';

const Price = (props) => {
    return (<div>
        <span className="hint--top" aria-label={`${props.book.priceTTC} € T.T.C.`}>
            <Tag className="price">
                <b>{props.book.price} € H.T.</b>
            </Tag>
        </span>
    </div>);
};

const mapStateToProps = state => ({ book: state.book });

export default connect(mapStateToProps)(Price);
