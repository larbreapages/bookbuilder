import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { chooseGilding } from '../actions/index';

const Gilding = (props) => {
    return (<div>
        <p>Choose your text: </p>
        <Input
            type="text"
            id="gilding"
            defaultValue={props.book.gilding}
            maxLength="25"
            placeholder="Type your text..." onChange={e => props.chooseGilding(e.target.value)}
        />
    </div>);
};

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ chooseGilding }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Gilding);
