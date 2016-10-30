import React from 'react';

class Step1 extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ reliure_type: event.target.value });
    }

    render() {
        return (<div>
            <div>
                <label htmlFor="choice_a">Reliure Traditionnelle</label>
                <input
                    type="radio"
                    name="choice"
                    id="choice_a"
                    value="A"
                    onChange={this.handleChange}
                    defaultChecked="true"
                />
                <br />

                <label htmlFor="choice_b">Reliure Moderne</label>
                <input
                    type="radio"
                    name="choice"
                    id="choice_b"
                    value="B"
                    onChange={this.handleChange}
                />
            </div>
            <center>
                <img alt="cuir" width="300" src="http://www.la-fabrique-a-livres.fr/img/etape-1/deux-cuir-fond-blanc.jpg" />
            </center>
        </div>);
    }
}

export default Step1;
