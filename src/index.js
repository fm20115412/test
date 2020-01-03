import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Hello extends React.Component {
    render() {
        return (
            <div>Happy new year!</div>
        )
    }
}

ReactDOM.render(
    <Hello data={{name:"lucy"}}/>,
    document.getElementById('root')
)