

class PocketCalculator extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            func: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleFunc = this.handleFunc.bind(this);

    }
    handleFunc = () => {
        this.setState({
            func: "func"
        });
    }
    handleClick (e) {
        const calcDisplay = document.getElementById("calculation-display");
        const resultDisplay = document.getElementById("result-display");

        console.log(this.props.func);

        if (document.getElementById((e.target.id)).func == NaN) {
            console.log("func")
        }
        calcDisplay.innerHTML += e.target.value;
        resultDisplay.innerText= e.target.value;
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
                        <div className="col-lg-2"><Button id="abs" className="btn btn-block btn-info" value="| x |" func="func" onLoad={this.handleFunc} onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="pow2" className="btn btn-block btn-info" value="x &sup2;" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="pow3" className="btn btn-block btn-info" value="x &sup3;" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="fac" className="btn btn-block btn-info" value="x !" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="rezi" className="btn btn-block btn-info" value="x &oline; &sup1;" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="log-ab" className="btn btn-block btn-info" value="log a (b)" func="func" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="frac" className="btn btn-block btn-info" value="&frac34;" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="sqrt" className="btn btn-block btn-info" value="&radic; x" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="cubic-root" className="btn btn-block btn-info" value="&sup3;&radic; x" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="pow-x" className="btn btn-block btn-info" value="x ^ y" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="log10" className="btn btn-block btn-info" value="log 10 (x)" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ln" className="btn btn-block btn-info" value="ln" func="func" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="pi" className="btn btn-block btn-info" value="&pi;" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="euler" className="btn btn-block btn-info" value="e" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="e-pow-x" className="btn btn-block btn-info" value="e &ordf;" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="sin" className="btn btn-block btn-info" value="sin" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="cos" className="btn btn-block btn-info" value="cos" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="tan" className="btn btn-block btn-info" value="tan" func="func" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="left-parenthesis" className="btn btn-block btn-info" value="(" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="right-parenthesis" className="btn btn-block btn-info" value=")" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="clear-memory" className="btn btn-block btn-info" value="M clear" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="add-memory" className="btn btn-block btn-info" value="M +" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="subtract-memory" className="btn btn-block btn-info" value="M -" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="memory" className="btn btn-block btn-info" value="M" func="func" onClick={this.handleClick}/></div>
                    </div>
                </div>
                {/* NUMBER KEYS */}
                <div className="well well-sm">
                    <div className="row">
                        <div className="col-lg-2"><Button id="seven" className="btn btn-block btn-default" value="7" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="eight" className="btn btn-block btn-default" value="8" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="nine" className="btn btn-block btn-default" value="9" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="del" className="btn btn-block btn-danger" value="&larr;" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="c" className="btn btn-block btn-danger" value="C" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="clear" className="btn btn-block btn-danger" value="AC" func="func" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="four" className="btn btn-block btn-default" value="4" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="five" className="btn btn-block btn-default" value="5" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="six" className="btn btn-block btn-default" value="6" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="subtract" className="btn btn-block" value="-" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="multiply" className="btn btn-block" value="*" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="divide" className="btn btn-block" value="/" func="func" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="one" className="btn btn-block btn-default" value="1" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="two" className="btn btn-block btn-default" value="2" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="three" className="btn btn-block btn-default" value="3" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="add" className="btn btn-block" value="+" func="func" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"><Button id="zero" className="btn btn-block btn-default" value="0" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="decimal" className="btn btn-block btn-default" value="." func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="minus" className="btn btn-block btn-default" value="(-)" func="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ans" className="btn btn-block btn-warning" value="Ans" func="func" onClick={this.handleClick}/></div>
                        <div className="col-lg-4"><Button id="equals" className="btn btn-block btn-primary" value="=" func="func" onClick={this.handleClick}/></div>
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