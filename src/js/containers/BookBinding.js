import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';
import { chooseBookBinding } from '../actions/index';
// import ModernImg from '../../images/modern.jpg';
// import TraditionalImg from '../../images/traditional.jpg';

class BookBinding extends Component {
    handleChange(value) {
        this.props.chooseBookBinding(value);
        this.setState({ selectedValue: value });
    }

    render() {
        return (
            <div>
                <p>Choose your bookbinding:</p>
                <RadioGroup className="choices" name="bookbinding" selectedValue={this.props.book.bookbinding} onChange={e => this.handleChange(e)}>
                    <div>
                        <img src="http://placehold.it/200x200" alt="modern" />
                        <div className="center">
                            <Radio value="modern" />Modern Bookbinding
                        </div>
                    </div>
                    <div>
                        <img src="http://placehold.it/200x200" alt="traditional" />
                        <div className="center">
                            <Radio value="traditional" />Traditional Bookbinding
                        </div>
                    </div>
                </RadioGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ chooseBookBinding }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BookBinding);
