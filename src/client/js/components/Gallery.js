import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import $ from 'expose-loader?$!expose-loader?jQuery!jquery'; // eslint-disable-line
import 'jquery-zoom/jquery.zoom.min';
import { chooseBookBinding } from '../actions/index';

const Gallery = class extends Component {
    constructor(props) {
        super(props);
        this.state = { firstImage: props.images[0] };
    }

    render() {
        $(document).ready(() => $('.zoom').trigger('zoom.destroy').zoom({ magnify: 0.8, touch: false }));
        return (<div className="gallery">
            <div className={classNames('zoom', { active: this.props.book.bookbinding === this.props.type })} onClick={() => this.props.chooseBookBinding(this.props.type)}>
                <img src={this.state.firstImage} alt="bookbinding" />
                <span>{this.props.text}</span>
            </div>
            <div className="thumbnails">
                {this.props.images.map(thumbnail => <img src={thumbnail} onClick={() => this.setState({ firstImage: thumbnail })} alt="bookbinding" key={thumbnail} />)}
            </div>
        </div>);
    }
};

const mapStateToProps = state => ({ book: state.book });
const mapDispatchToProps = dispatch => bindActionCreators({ chooseBookBinding }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
