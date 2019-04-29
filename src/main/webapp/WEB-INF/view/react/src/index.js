import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'

const inputs = [{
    name: "username",
    placeholder: "username",
    type: "text"
}, {
    name: "password",
    placeholder: "password",
    type: "password"
}, {
    type: "submit",
    value: "Submit",
    className: "btn"
}];

const props = {
    name: 'loginForm',
    method: 'POST',
    action: '/perform_login',
    inputs: inputs
};

const params = new URLSearchParams(window.location.search);
let paramEntries = Array.from(params.entries());
console.log(paramEntries);

ReactDOM.render(
    <Form {...props}
          error={params.get('error')}/>,
    document.getElementById('container'));