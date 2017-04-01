import React from 'react';
import Tag from 'antd/lib/tag';
import { connect } from 'react-redux';

const Price = (props) => {
    const priceTTCText = `${props.book.priceTTC} € T.T.C.`;

    return (<div>
        <span className="hint--top" aria-label={priceTTCText}>
            <Tag className="price">
                <b>{props.book.price} € H.T.</b>
            </Tag>
        </span>
    </div>);
};

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

export default connect(mapStateToProps)(Price);
