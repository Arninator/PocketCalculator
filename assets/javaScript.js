

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
            <div>
                {/* DISPLAY */}
                <div id="display">
                    {/* <Display /> */}
                </div>
                {/* OPERATORS */}
                <div>
                    <div className="row well">
                        <div className="col-lg-2"><Button id="seven" className="btn btn-block btn-info" value="7" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="eight" className="btn btn-block btn-info" value="8" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="nine" className="btn btn-block btn-info" value="9" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="del" className="btn btn-block btn-info" value="&larr;" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ac" className="btn btn-block btn-info" value="AC" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ac" className="btn btn-block btn-info" value="AC" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row well">
                        <div className="col-lg-2"><Button id="four" className="btn btn-block btn-info" value="4" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="five" className="btn btn-block btn-info" value="5" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="six" className="btn btn-block btn-info" value="6" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="multiply" className="btn btn-block btn-info" value="X" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="divide" className="btn btn-block btn-info" value="&div;" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ac" className="btn btn-block btn-info" value="AC" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row well">
                        <div className="col-lg-2"><Button id="one" className="btn btn-block btn-info" value="1" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="two" className="btn btn-block btn-info" value="2" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="three" className="btn btn-block btn-info" value="3" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="add" className="btn btn-block btn-info" value="&plus;" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="subtract" className="btn btn-block btn-info" value="-" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ac" className="btn btn-block btn-info" value="AC" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row well">
                        <div className="col-lg-2"><Button id="zero" className="btn btn-block btn-info" value="0" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="decimal" className="btn btn-block btn-info" value="." function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="minus" className="btn btn-block btn-info" value="(-)" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ans" className="btn btn-block btn-info" value="Ans" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="acequals" className="btn btn-block btn-info" value="=" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ac" className="btn btn-block btn-info" value="AC" function="function" onClick={this.handleClick}/></div>
                    </div>
                </div>
                {/* NUMBER KEYS */}
                <div>
                    <div className="row well">
                        <div className="col-lg-2"><Button id="seven" className="btn btn-block btn-default" value="7" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="eight" className="btn btn-block btn-default" value="8" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="nine" className="btn btn-block btn-default" value="9" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="del" className="btn btn-block btn-danger" value="&larr;" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ac" className="btn btn-block btn-danger" value="AC" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row well">
                        <div className="col-lg-2"><Button id="four" className="btn btn-block btn-default" value="4" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="five" className="btn btn-block btn-default" value="5" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="six" className="btn btn-block btn-default" value="6" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="multiply" className="btn btn-block" value="X" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="divide" className="btn btn-block" value="/" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row well">
                        <div className="col-lg-2"><Button id="one" className="btn btn-block btn-default" value="1" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="two" className="btn btn-block btn-default" value="2" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="three" className="btn btn-block btn-default" value="3" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="add" className="btn btn-block" value="+" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="subtract" className="btn btn-block" value="-" function="function" onClick={this.handleClick}/></div>
                    </div>
                    <div className="row well">
                        <div className="col-lg-2"><Button id="zero" className="btn btn-block btn-default" value="0" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="decimal" className="btn btn-block btn-default" value="." function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="minus" className="btn btn-block btn-default" value="(-)" function="number" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="ans" className="btn btn-block" value="Ans" function="function" onClick={this.handleClick}/></div>
                        <div className="col-lg-2"><Button id="acequals" className="btn btn-block btn-primary" value="=" function="function" onClick={this.handleClick}/></div>
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

ReactDOM.render(<PocketCalculator />, document.getElementById("root"));