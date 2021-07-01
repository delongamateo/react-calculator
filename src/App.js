import React, {useState} from 'react';
import './App.css';

function App() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(null);

    const [number, setNumber] = useState(0);
    const [operator, setOperator] = useState("")

    return (
        <div className="calc">
            <div className="display">
                <input type="number" value={0} disabled/>
            </div>
            <div className="buttons">
                <div className="left">
                    <button>0</button>
                    <button className="clear">C</button>
                    <button className="equal">=</button>
                    {
                        ( new Array( 9 ).fill( null ) ).map( ( a, i ) => {
                            const n = i + 1;

                            return (
                                <button>{n}</button>
                            )
                        } )
                    }
                </div>
                <div className="actions">
                    <button>&divide;</button>
                    <button>&times;</button>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </div>
    );

}

export default App;
