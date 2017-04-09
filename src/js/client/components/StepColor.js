import React from 'react';
import Button from 'antd/lib/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { previousStep, nextStep } from '../actions/index';
import Wire from './Wire';
import Paper from './Paper';
import Price from './Price';
import PaperImg1 from '../../../images/paper_1.png';
import PaperImg2 from '../../../images/paper_2.png';
import PaperImg3 from '../../../images/paper_3.png';
import PaperImg4 from '../../../images/paper_4.png';
import PaperImg5 from '../../../images/paper_5.png';
import PaperImg6 from '../../../images/paper_6.png';
import PaperImg7 from '../../../images/paper_7.png';
import PaperImg8 from '../../../images/paper_8.png';
import PaperImg9 from '../../../images/paper_9.png';
import WireImg1 from '../../../images/wire_1.png';
import WireImg2 from '../../../images/wire_2.png';
import WireImg3 from '../../../images/wire_3.png';
import WireImg4 from '../../../images/wire_4.png';
import WireImg5 from '../../../images/wire_5.png';

const modernPapers = [
    { paper: 'Vagues', image: PaperImg1 },
    { paper: 'Bulles', image: PaperImg2 },
    { paper: 'Brume', image: PaperImg3 },
    { paper: 'Pamplemousse', image: PaperImg4 },
    { paper: 'Pamplemousse bleu', image: PaperImg5 },
];

const conservationPapers = [
    { paper: 'Marron', image: PaperImg6 },
    { paper: 'Pourpre', image: PaperImg7 },
    { paper: 'Gris', image: PaperImg8 },
    { paper: 'Noir', image: PaperImg9 },
];

const wires = [
    { wire: 'Violet', image: WireImg1 },
    { wire: 'Bleu Canard', image: WireImg2 },
    { wire: 'Rouge Brique', image: WireImg3 },
    { wire: 'Jaune Canard', image: WireImg4 },
    { wire: 'Crème', image: WireImg5 },
];

const StepColor = (props) => {
    const validStep = () => {
        if (props.book.bookbinding === 'conservation') return conservationPapers.some(({ paper }) => paper === props.book.paper);
        if (props.book.bookbinding === 'modern') return (modernPapers.some(({ paper }) => paper === props.book.paper) && props.book.wire);

        return false;
    };

    return (<div className="component">
        <div>
            { props.book.bookbinding === 'modern' ? <Paper papers={modernPapers} /> : <Paper papers={conservationPapers} /> }
            { props.book.bookbinding === 'modern' && <Wire wires={wires} /> }
        </div>
        <div className="footer">
            <Button type="ghost" onClick={() => props.previousStep()}>Précédent</Button>
            <Price />
            <Button
                type="ghost"
                className={(!validStep()) ? 'hint--top-left' : ''}
                aria-label="Choisis ton papier"
                onClick={() => props.nextStep()} disabled={!validStep()}
            >Suivant</Button>
        </div>
    </div>);
};

const mapStateToProps = state => ({ book: state.book });
const mapDispatchToProps = dispatch => bindActionCreators({ previousStep, nextStep }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StepColor);
