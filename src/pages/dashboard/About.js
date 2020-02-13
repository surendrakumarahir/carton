import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class About extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>About</Text>
            </View>
        );
    }
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

