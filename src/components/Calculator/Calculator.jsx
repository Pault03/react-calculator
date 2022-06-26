import React from "react";
import { useState } from "react";
import './Calculator.css'

const Calculator = () => {

    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [operator, setOperator] = useState('+')
    const [answer, setAnswer] = useState('0')

    const calculate = (num1, num2, op) => {
        switch (op) {
            case '+':
                setAnswer(num1 + num2)
                break
            case '-':
                setAnswer(num1 - num2)
                break
            case 'x':
                setAnswer(num1 * num2)
                break
            case '/':
                setAnswer(num1 / num2)
                break
            default:
                setAnswer(null)
        }
        if (num1 === 0 && num2 === 0 && op === '/') {
            setAnswer('Not a number')
        }
    }

    const button = () => {
        if ((number1 || number1 === 0) && (number2 || number2 === 0)) {
            calculate(Number(number1), Number(number2), operator)
        } else {
            setAnswer('')
        }
    }

    return (
        <div className='Calculator'>
            <input type='text' name='answer1' className='answerBox' onChange={(event) => { setNumber1(event.target.value) }}/>
            <select name='operator' className='operator' onChange={(event) => { setOperator(event.target.value) }}>
                <option>+</option>
                <option>-</option>
                <option>x</option>
                <option>/</option>
            </select>
            <input type='text' name='answer2' className='answerBox' onChange={(event) => { setNumber2(event.target.value) }} />
            <button name='equals' className='equals' onClick={() => button() }>=</button>
            <input type='text' name='answer' className='answerBox' value={answer || answer === 0 ? answer : ''}/>
            {answer || answer === 0 ? null : <div className='errorMessage'>Error! Please use numbers only.</div>}
        </div>
    )
}

export default Calculator