function UserInfo(props){
    return(
        <div>
            <h1>Name :{props.name}</h1>
            <h1>Age :{props.age}</h1>
        </div>
    );
}

class UserInfo extends React.Component{
    render(){
        return(
            <div>
                <h1>Name :{this.props.name}</h1>
                <h1>Age :{this.props.age}</h1>
                <h1>is Passed: {props1.pass ? "Passed" : "Failed"}</h1>
            </div>
        );
    }
}

UserInfo.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
};

function tables(props){
    return(
        <div>
            <table border = "1" cellspacing = "0">
                <tr></tr>
            </table>
        </div>
    );
}

r.render(<UserInfo name = "Nishad" age = {20}/>);

class Reactstate extends React.Component{
    constructor(){
        super();
        this.state = (init: "Welcome" , name: "Nishad");   
    }
    render(){
        return(
            <div>
                <h1>{this.state.init}</h1>
                <br></br>
                <button onClick = {this.changeValues}>Click</button>
            </div>
        );
    }
    changeValues(){
        this.setState({init : "ThankYou", name: "Nishad"});
    }
}

