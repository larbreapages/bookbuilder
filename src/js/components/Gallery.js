import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { chooseBookBinding } from '../actions/index';

const Gallery = class extends Component {
    constructor(props) {
        super(props);
        this.state = { firstImage: props.images[0], bookbinding: props.book.bookbinding };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.props.chooseBookBinding(value);
        this.setState({ bookbinding: value });
    }

    render() {
        return (<div className="gallery">
            <div className={this.state.bookbinding === this.props.type ? 'zoom active' : 'zoom'}>
                <img src={this.state.firstImage} alt="bookbinding" onClick={() => this.handleChange(this.props.type)} />
                <span>{this.props.text}</span>
            </div>
            <div className="thumbnails">
                {this.props.images.map(thumbnail => <img src={thumbnail} onClick={() => this.setState({ firstImage: thumbnail })} alt="bookbinding" key={thumbnail} />)}
            </div>
        </div>);
    }
};

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ chooseBookBinding }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
