import {TextField} from 'react-native-material-textfield';
import React, {Component}  from 'react';
import  {View, Text} from  'react-native';

const TextPropsDefault = {
    tintColor: 'rgb(72, 35, 130)',
    lineWidth: 1,
    contentInset: {top: 0},
};
export default class StepOne extends Component {
    constructor(props) {
        super(props)
    }


    state = {
        text: '',
    };

    render() {
        return (
            <View>
                <TextField
                    {...TextPropsDefault}
                    label="Area"
                    onChangeText={text => this.setState({text: text})}
                />
                <Text onPress={this.nextPreprocess} >next</Text>
            </View>

        );
    }
}

