import {TextField} from 'react-native-material-textfield';
import React, {Component} from 'react';

const TextPropsDefault = {
    tintColor: 'rgb(72, 35, 130)',
    lineWidth: 1,
    contentInset: {top: 0},
};
export default class StepTwo extends Component {

    nextPreprocess() {
        // Save step state for use in other steps of the wizard
        this.props.saveState(1, {key: 'value'});

        // Go to next step
        this.props.nextFn();
    }
    previousPreprocess() {
        // Go to previous step
        this.props.prevFn();
    }
    state = {
        text: '',
    };

    render() {
        return (
            <TextField
                {...TextPropsDefault}
                label="Area"
                onChangeText={text => this.setState({text: text})}
            />
        );
    }
}
