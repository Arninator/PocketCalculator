const ans = 0;
let elements = [];

class calcPart {
    constructor (typeString, value) {
        this.type = typeString;
        this.value = value;
    }
}
class PocketCalculator extends React.Component {
    
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (e) {
        const calcDisplay = document.getElementById("calculation-display");
        const resultDisplay = document.getElementById("result-display");
        const operation = document.getElementById(e.target.id).classList;

        // console.log(document.getElementById((e.target.id)).classList.contains("function"));

        if (operation.contains("function")) {                                                       //---FUNCTION ?
            if (operation.contains("equals")) {                                                     //---EQUALS
                
                

                for (let i = 0; i < elements.length - 2; i++) {                                     //---CONSECUTIVE OPERATORS ?
                    if (elements[i].type == "operation" && elements[i + 1].type == "operation" && elements[i + 1].value != "minus") {
                        
                        var newElements = elements.filter(function (value, index, arr) {
                            return index != i;
                            })
                        elements = [...newElements];
                        i--;

                        // for (let i = 0; i < newElements.length; i++) {
                        //     console.log("newElements[" + i + "]: " + "{\ntype: " + newElements[i].type + ",\nvalue: " + newElements[i].value + "\n}");
                        // }
                    } else if (elements[i].type == "operation" && elements[i + 1].type == "operation" && elements[i + 1].value == "minus") {
                        if (elements[i + 2].type == "number") {
                            elements[i + 2].type *= -1;

                            var newElements = elements.filter(function (value, index, arr) {
                                return index != i + 1;
                                })
                            elements = [...newElements];
                            i--;
                        } else {
                            var newElements = elements.filter(function (value, index, arr) {
                                return index != i;
                                })
                            elements = [...newElements];
                            i--;
                        }
                    }
                }

                if (elements.length < 1) {
                    resultDisplay.innerText = "ERROR! - No Input!";
                    return;
                } else if (elements.length == 1 && elements[0].type == "operation") {
                    resultDisplay.innerText = "ERROR! - Can't calculate without Numbers!";
                    return;
                } else if (elements.length == 1 && elements[0].type == "number") {
                    resultDisplay.innerText = elements[0].value;
                    return;
                } else if (elements[elements.length - 1].type = "operation") {
                    resultDisplay.innerText = "ERROR - Number in the end required!";
                    return;
                } else if (elements[0].type == "operation" && elements[0].value != "minus" ) {
                    resultDisplay.innerText = "ERROR! - Please start with Numbers or a (-)!";
                    return;
                } else {
                    elements[1].value *= -1;
                    elements.shift();
                }

                for (let i = 1; i < elements.length - 1; i++) {                                     //---MULTIPLY/DIVIDE BEFORE OTHERS !
                    if (elements[i].type = "operation" && (elements[i].value == "multiply" || elements[i].value == "divide")) {
                        if (elements[i].value == "multiply") {
                            elements[i + 1].value *= elements[i - 1].value;

                            var newElements = elements.filter(function (value, index, arr) {
                                return index != i || i - 1;
                                })
                            elements = [...newElements];
                            i = i - 2;
                        } else if (elements[i + 1].value != 0) {
                            elements[i + 1].value = elements[i - 1].value / elements[i + 1].value;

                            var newElements = elements.filter(function (value, index, arr) {
                                return index != i || i - 1;
                                })
                            elements = [...newElements];
                            i = i - 2;
                        } else {
                            resultDisplay.innerText = "ERROR! - Divide by 0!";
                            return;
                        }
                    }
                }
                for (let i = 1; i < elements.length - 1; i++) {                                     //---ADD AND SUBTRACT !
                    if (elements[i].value == "add") {
                        elements[i + 1].value += elements[i - 1].value;

                        var newElements = elements.filter(function (value, index, arr) {
                            return index != i || i - 1;
                            })
                        elements = [...newElements];
                        i = i - 2;
                    } else {
                        elements[i + 1].value -= elements[i - 1].value;

                        var newElements = elements.filter(function (value, index, arr) {
                            return index != i || i - 1;
                            })
                        elements = [...newElements];
                        i = i - 2;
                    }
                }

                resultDisplay.innerText = elements[0].value;
                return;
                
            } else if (!operation.contains("operation")) {                                          //---MATH ?    
                // switch (e.target.id) {

                //     case "abs":
                //         calcDisplay.innerText += " abs( ";
                //         break;
                //     case "pow2":
                //         calcDisplay.innerText += '^ 2';
                //         break;
                //     case "pow3":
                //         calcDisplay.innerText += '^ 3';
                //         break;

                // }
            } else {                                                                                //---PLUS/MINUS/MAL/GETEILT ?
                calcDisplay.innerHTML += " " + e.target.value;

                elements.push({
                    type: "operation",
                    value: e.target.id
                });
            }
        } else {

            console.log(elements.length)

            if (elements.length > 0) {
                if (elements[elements.length - 1].type == "number") {

                    calcDisplay.innerText += e.target.value;
                    resultDisplay.innerText += e.target.value;

                    elements[elements.length - 1].value += e.target.value;
                    // console.log(elements[elements.length - 1].value);
                } else {

                    calcDisplay.innerText += " " + e.target.value;
                    resultDisplay.innerText = e.target.value;

                    elements.push({
                        type: "number",
                        value: e.target.value
                    });
                }
            } else {
                calcDisplay.innerText = e.target.value;
                resultDisplay.innerText = e.target.value;

                elements.push({
                    type: "number",
                    value: e.target.value
                });
                // console.log(elements[elements.length - 1].value);
            }
        }
        // for (let i = 0; i < elements.length; i++) {
        //     console.log("elements[" + i + "]: " + "{\ntype: " + elements[i].type + ",\nvalue: " + elements[i].value + "\n}");
        // }
    }
    render () {1
        return (
            <div id="container" className="well well-lg">
                {/* DISPLAY */}
                <div id="display-container" className="well well-sm">
                    <div className="row">
                        <div className="col-lg-12"><Display id="display" value="" /></div>
                    </div>{/* <Display /> */}
                </div>
                {/* OPERATORS */}
                <div className="well well-sm">
                    <div className="row">
                        <div className="col-lg-2"><Button id="abs" className="btn btn-block btn-info function" value="| x |" onLoad={this.handleFunc} onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="pow2" className="btn btn-block btn-info function" value="x &sup2;" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="pow3" className="btn btn-block btn-info function" value="x &sup3;" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="fac" className="btn btn-block btn-info function" value="x !" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="rezi" className="btn btn-block btn-info function" value="x &oline; &sup1;" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="log-ab" className="btn btn-block btn-info function" value="log a (b)" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="frac" className="btn btn-block btn-info function" value="&frac34;" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="sqrt" className="btn btn-block btn-info function" value="&radic; x" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="cubic-root" className="btn btn-block btn-info function" value="&sup3;&radic; x" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="pow-x" className="btn btn-block btn-info function" value="x ^ y" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="log10" className="btn btn-block btn-info function" value="log 10 (x)" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ln" className="btn btn-block btn-info function" value="ln" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="pi" className="btn btn-block btn-info function" value="&pi;" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="euler" className="btn btn-block btn-info function" value="e" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="e-pow-x" className="btn btn-block btn-info function" value="e &ordf;" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="sin" className="btn btn-block btn-info function" value="sin" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="cos" className="btn btn-block btn-info function" value="cos" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="tan" className="btn btn-block btn-info function" value="tan" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="left-parenthesis" className="btn btn-block btn-info function" value="(" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="right-parenthesis" className="btn btn-block btn-info function" value=")" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="clear-memory" className="btn btn-block btn-info function" value="M clear" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="add-memory" className="btn btn-block btn-info function" value="M +" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="subtract-memory" className="btn btn-block btn-info function" value="M -" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="memory" className="btn btn-block btn-info function" value="M" onClick={this.handleClick}/></div>
                    </div>
                </div>
                {/* NUMBER KEYS */}
                <div className="well well-sm">
                    <div className="row">
                        <div className="col-lg-2"><Button id="seven" className="btn btn-block btn-default" value="7" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="eight" className="btn btn-block btn-default" value="8" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="nine" className="btn btn-block btn-default" value="9" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="del" className="btn btn-block btn-danger function" value="&larr;" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="c" className="btn btn-block btn-danger function" value="C" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="clear" className="btn btn-block btn-danger function" value="AC" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="four" className="btn btn-block btn-default" value="4" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="five" className="btn btn-block btn-default" value="5" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="six" className="btn btn-block btn-default" value="6" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="subtract" className="btn btn-block function operation" value="-" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="multiply" className="btn btn-block function operation" value="*" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="divide" className="btn btn-block function operation" value="/" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="one" className="btn btn-block btn-default" value="1" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="two" className="btn btn-block btn-default" value="2" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="three" className="btn btn-block btn-default" value="3" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="add" className="btn btn-block function operation" value="+" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="zero" className="btn btn-block btn-default" value="0" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="decimal" className="btn btn-block btn-default function" value="." onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="minus" className="btn btn-block btn-default function" value="(-)" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ans" className="btn btn-block btn-warning function" value="Ans" onClick={this.handleClick}/></div>
                        <div className="col-lg-4"><Button id="equals" className="btn btn-block btn-primary function equals" value="=" onClick={this.handleClick}/></div>
                    </div>
                </div>
            </div>
        );
    }
}
const Button = (props) => {

    return(
        <button 
            id={props.id}
            className={props.className}
            value={props.value}
            func={props.func}
            onClick={props.onClick}>
                {props.value}
        </button>
        
    )
}
const Display = (props) => {
    return(
        <div id={props.id}>
            <div id="calculation-display">{props.value}</div>
            <div id="result-display">{props.value}</div>
        </div>
    )
}

ReactDOM.render(<PocketCalculator />, document.getElementById("root"));