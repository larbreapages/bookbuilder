import React, { Component } from 'react';
import Row from 'antd/lib/row';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { choosePaper } from '../actions/index';
import Paper1 from '../../images/paper_1.png';
import Paper2 from '../../images/paper_2.png';
import Paper3 from '../../images/paper_3.png';
import Paper4 from '../../images/paper_4.png';
import Paper5 from '../../images/paper_5.png';
import Paper6 from '../../images/paper_6.png';
import Paper7 from '../../images/paper_7.png';
import Paper8 from '../../images/paper_8.png';

class Paper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paper: props.book.paper,
        };
    }

    handleChangePaper(value) {
        this.props.choosePaper(value);
        this.setState({ paper: value });
    }

    modernPaperRender() {
        return (<Row>
            <p className="title">Choisis ton papier <span className="hint--top hint--large" aria-label='Ces papiers ont été réalisés de manière artisanale par les artistes Zeynep Uysal Kog et Katalin Perry (papiers marbrés à la "cuve").'><a href="#">[Plus d'infos]</a></span> :</p>
            <div className="choices paper">
                <div className={this.state.paper === 1 ? 'choice active' : 'choice'} onClick={() => this.handleChangePaper(1)}>
                    <img src={Paper1} alt="paper1" onDragStart={false} />
                    <span>Vagues</span>
                </div>
                <div className={this.state.paper === 2 ? 'choice active' : 'choice'} onClick={() => this.handleChangePaper(2)}>
                    <img src={Paper2} alt="paper2" />
                    <span>Bulles</span>
                </div>
                <div className={this.state.paper === 3 ? 'choice active' : 'choice'} onClick={() => this.handleChangePaper(3)}>
                    <img src={Paper3} alt="paper3" />
                    <span>Brume</span>
                </div>
                <div className={this.state.paper === 4 ? 'choice active' : 'choice'} onClick={() => this.handleChangePaper(4)}>
                    <img src={Paper4} alt="paper4" />
                    <span>Pamplemousse</span>
                </div>
            </div>
        </Row>);
    }

    conservationPaperRender() {
        return (<Row>
            <p className="title">Choisis ton papier :</p>
            <div className="choices paper">
                <div className={this.state.paper === 5 ? 'choice active' : 'choice'} onClick={() => this.handleChangePaper(5)}>
                    <img src={Paper5} alt="paper5" />
                    <span>Marron</span>
                </div>
                <div className={this.state.paper === 6 ? 'choice active' : 'choice'} onClick={() => this.handleChangePaper(6)}>
                    <img src={Paper6} alt="paper6" />
                    <span>Pourpre</span>
                </div>
                <div className={this.state.paper === 7 ? 'choice active' : 'choice'} onClick={() => this.handleChangePaper(7)}>
                    <img src={Paper7} alt="paper7" />
                    <span>Gris</span>
                </div>
                <div className={this.state.paper === 8 ? 'choice active' : 'choice'} onClick={() => this.handleChangePaper(8)}>
                    <img src={Paper8} alt="paper8" />
                    <span>Noir</span>
                </div>
            </div>
        </Row>);
    }

    render() {
        return (<div>
            { this.props.book.bookbinding === 'modern' ? this.modernPaperRender() : this.conservationPaperRender() }
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        book: state.book,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ choosePaper }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Paper);
