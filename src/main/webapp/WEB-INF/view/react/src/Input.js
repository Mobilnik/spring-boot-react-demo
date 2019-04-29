import React, {Component} from 'react'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value ? props.value : '',
            className: props.className ? props.className : '',
            error: false
        }
    }

    inputChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        const {handleError, ...opts} = this.props;
        this.handleError = handleError;
        return (
            <input {...opts}
                   value={this.state.value}
                   onChange={this.inputChange}
                   className={this.state.className}/>
        )
    }
}

export default Input