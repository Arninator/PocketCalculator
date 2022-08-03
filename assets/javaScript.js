

class PocketCalculator extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            id:"",
            function: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (e) {

    }
    render () {
        return (
            <div id="container" className="well well-lg">
                {/* DISPLAY */}
                <div id="display-container" className="well well-sm">
                    <div className="row">
                        <div className="col-lg-12"><Display /></div>
                    </div>{/* <Display /> */}
                </div>
                {/* OPERATORS */}
                <div className="well well-sm">
                    <div className="row">
                        <div className="col-lg-2"><Button id="abs" className="btn btn-block btn-info" value="| x |" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="pow2" className="btn btn-block btn-info" value="x &sup2;" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="pow3" className="btn btn-block btn-info" value="x &sup3;" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="fac" className="btn btn-block btn-info" value="x !" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="rezi" className="btn btn-block btn-info" value="x &oline; &sup1;" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="log-ab" className="btn btn-block btn-info" value="log a (b)" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="frac" className="btn btn-block btn-info" value="&frac34;" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="sqrt" className="btn btn-block btn-info" value="&radic; x" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="cubic-root" className="btn btn-block btn-info" value="&sup3;&radic; x" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="pow-x" className="btn btn-block btn-info" value="x ^ y" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="log10" className="btn btn-block btn-info" value="log 10 (x)" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ln" className="btn btn-block btn-info" value="ln" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="pi" className="btn btn-block btn-info" value="&pi;" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="euler" className="btn btn-block btn-info" value="e" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="e-pow-x" className="btn btn-block btn-info" value="e &ordf;" function="numfunctionber" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="sin" className="btn btn-block btn-info" value="sin" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="cos" className="btn btn-block btn-info" value="cos" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="tan" className="btn btn-block btn-info" value="tan" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="left-parenthesis" className="btn btn-block btn-info" value="(" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="right-parenthesis" className="btn btn-block btn-info" value=")" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="clear-memory" className="btn btn-block btn-info" value="M clear" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="add-memory" className="btn btn-block btn-info" value="M +" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="subtract-memory" className="btn btn-block btn-info" value="M -" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="memory" className="btn btn-block btn-info" value="M" function="function" onClick={this.handleClick}/></div>
                    </div>
                </div>
                {/* NUMBER KEYS */}
                <div className="well well-sm">
                    <div className="row">
                        <div className="col-lg-2"><Button id="seven" className="btn btn-block btn-default" value="7" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="eight" className="btn btn-block btn-default" value="8" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="nine" className="btn btn-block btn-default" value="9" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="del" className="btn btn-block btn-danger" value="&larr;" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="c" className="btn btn-block btn-danger" value="C" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ac" className="btn btn-block btn-danger" value="AC" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="four" className="btn btn-block btn-default" value="4" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="five" className="btn btn-block btn-default" value="5" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="six" className="btn btn-block btn-default" value="6" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="subtract" className="btn btn-block" value="-" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="multiply" className="btn btn-block" value="*" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="divide" className="btn btn-block" value="/" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="one" className="btn btn-block btn-default" value="1" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="two" className="btn btn-block btn-default" value="2" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="three" className="btn btn-block btn-default" value="3" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="add" className="btn btn-block" value="+" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="zero" className="btn btn-block btn-default" value="0" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="decimal" className="btn btn-block btn-default" value="." function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="minus" className="btn btn-block btn-default" value="(-)" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ans" className="btn btn-block btn-warning" value="Ans" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-4"><Button id="equals" className="btn btn-block btn-primary" value="=" function="function" onClick={this.handleClick}/></div>
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
            function={props.function}
            onClick={props.onClick}>
                {props.value}
        </button>
    )
}
const Display = (props) => {
    return(
        <div id="display-div">
            <div id="calculation-display">
                +-*/
            </div>
            <div id="result-display">
                00
            </div>
        </div>
    )
}

ReactDOM.render(<PocketCalculator />, document.getElementById("root"));