import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Row from 'antd/lib/row';
import { chooseWire } from '../actions/index';
import Wire1 from '../../images/wire_1.png';
import Wire2 from '../../images/wire_2.png';
import Wire3 from '../../images/wire_3.png';
import Wire4 from '../../images/wire_4.png';
import Wire5 from '../../images/wire_5.png';

const wires = [
    { wire: Wire1, type: 'Violet' },
    { wire: Wire2, type: 'Bleu Canard' },
    { wire: Wire3, type: 'Rouge Brique' },
    { wire: Wire4, type: 'Jaune Canard' },
    { wire: Wire5, type: 'Crème' },
];

const Wire = (props) => {
    return (<Row>
        <p className="title">Choisis la couleur de ton fil :</p>
        <div className="choices wire">
            {wires.map(({ wire, type }) =>
                <div className={props.book.wire === wire ? 'choice active' : 'choice'} onClick={() => props.chooseWire(wire)} key={wire}>
                    <img src={wire} alt="wire1" />
                    <span>{type}</span>
                </div>,
            )}
        </div>
    </Row>);
};

const mapStateToProps = state => ({ book: state.book });
const mapDispatchToProps = dispatch => bindActionCreators({ chooseWire }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wire);
