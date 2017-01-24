import React, {Component} from 'react';
import ReactDom from 'react-dom';

export default class App extends Component {
    render() {
        return(
            <h1>Génial ça marche! Et ça c'est cool.</h1>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('main'));
