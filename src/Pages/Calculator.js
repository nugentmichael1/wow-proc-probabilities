import React from 'react'

import Calculator from '../Components/Calculator'
import Gnome from '../Images/GnomeBook.png'

import '../CSS/CalculatorPage.css'

function CalculatorPage() {
    return (
        <div id='calculatorPage'>
            <img src={Gnome} alt="Gnome writes in a book" />
            <Calculator />

        </div>
    )
}

export default CalculatorPage