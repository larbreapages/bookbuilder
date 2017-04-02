import React, { Component } from 'react';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { choosePaper } from '../actions/index';
import Paper1 from '../../images/paper_1.png';
import Paper2 from '../../images/paper_2.png';
import Paper3 from '../../images/paper_3.png';
import Paper4 from '../../images/paper_4.png';
import Paper5 from '../../images/paper_5.png';
import Paper6 from '../../images/paper_6.png';
import Paper7 from '../../images/paper_7.png';
import Paper8 from '../../images/paper_8.png';
import Paper9 from '../../images/paper_9.png';

const papers = [
    { paper: Paper1, type: 'Vagues' },
    { paper: Paper2, type: 'Bulles' },
    { paper: Paper3, type: 'Brume' },
    { paper: Paper4, type: 'Pamplemousse' },
    { paper: Paper5, type: 'Pamplemousse bleu' },
    { paper: Paper6, type: 'Marron' },
    { paper: Paper7, type: 'Pourpre' },
    { paper: Paper8, type: 'Gris' },
    { paper: Paper9, type: 'Noir' },
];

const description = 'Ces papiers ont été réalisés de manière artisanale par les artistes Zeynep Uysal Kog et Katalin Perry (papiers marbrés à la "cuve").';

class Paper extends Component {
    paperRender(paper, type) {
        return (<div key={paper} className={classNames('choice', { active: this.props.book.paper === paper })} onClick={() => this.props.choosePaper(paper)}>
            <img src={paper} alt="paper" onDragStart={false} />
            <span>{type}</span>
        </div>);
    }

    render() {
        return (<Row>
            <p className="title">Choisis ton papier <span className="hint--top hint--large" aria-label={description}>
                <span className={classNames('link', { hide: this.props.book.bookbinding !== 'modern' })}>[Plus d&apos;infos]</span></span> :
            </p>
            <div className="choices paper">
                {
                    this.props.book.bookbinding === 'modern' ?
                    papers.slice(0, 5).map(({ paper, type }) => this.paperRender(paper, type)) :
                    papers.slice(5).map(({ paper, type }) => this.paperRender(paper, type))
                }
            </div>
        </Row>);
    }
}

const mapStateToProps = state => ({ book: state.book });
const mapDispatchToProps = dispatch => bindActionCreators({ choosePaper }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Paper);
