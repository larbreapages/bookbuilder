import React, { Component } from 'react';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { choosePaper } from '../actions/index';

const description = 'Ces papiers ont été réalisés de manière artisanale par les artistes Zeynep Uysal Kog et Katalin Perry (papiers marbrés à la "cuve").';

class Paper extends Component {
    paperRender({ paper, image }) {
        return (<div key={paper} className={classNames('choice', { active: this.props.book.paper === paper })} onClick={() => this.props.choosePaper(paper)}>
            <img src={image} alt="paper" onDragStart={false} />
            <span>{paper}</span>
        </div>);
    }

    render() {
        return (<Row>
            <p className="title">Choisis ton papier <span className="hint--top hint--large" aria-label={description}>
                <span className={classNames({ hide: this.props.book.bookbinding !== 'modern' })}><i className="fa fa-question-circle-o" aria-hidden="true" /></span></span> :
            </p>
            <div className="choices paper">{ this.props.papers.map(paper => this.paperRender(paper)) }</div>
        </Row>);
    }
}

const mapStateToProps = state => ({ book: state.book });
const mapDispatchToProps = dispatch => bindActionCreators({ choosePaper }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Paper);
