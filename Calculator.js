import React from "react";
import PropTypes from "prop-types";

class Calculator extends React.Component{
    render(){
        return(
            <div>
                <h1>Addition : {this.props.n1 + this.props.n2}</h1>
                <h1>Subtraction : {this.props.n1 - this.props.n2}</h1>
                <h1>Multiplication : {this.props.n1 * this.props.n2}</h1>
                <h1>Division : {this.props.n1 / this.props.n2}</h1>
            </div>
        )
    }
}

Calculator.propTypes = {
    n1 : PropTypes.number.isRequired,
    n2 : PropTypes.number.isRequired,
}

export default Calculator;