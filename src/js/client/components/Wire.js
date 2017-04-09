import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Row from 'antd/lib/row';
import { chooseWire } from '../actions/index';

const Wire = (props) => {
    return (<Row>
        <p className="title">Choisis la couleur de ton fil :</p>
        <div className="choices wire">
            {props.wires.map(({ wire, image }) =>
                <div key={wire} className={props.book.wire === wire ? 'choice active' : 'choice'} onClick={() => props.chooseWire(wire)}>
                    <img src={image} alt="wire" />
                    <span>{wire}</span>
                </div>,
            )}
        </div>
    </Row>);
};

const mapStateToProps = state => ({ book: state.book });
const mapDispatchToProps = dispatch => bindActionCreators({ chooseWire }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wire);
