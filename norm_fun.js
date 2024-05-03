import React from 'react';
import ReactDOM from 'react-dom/client';

function MyFunction(){
    return(
        <div>
            <h1>head</h1>
            <button onClick = {fun1}>Click</button>
        </div>
    );
    function fun1(){
        alert("this is an alert");
    }
}
var r = ReactDOM.createRoot(document.getElementById("root"))
r.render(</MyFunction>);