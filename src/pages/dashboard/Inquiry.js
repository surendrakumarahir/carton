import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Inquiry extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Inquiry</Text>
            </View>
        );
    }
}

export default Inquiry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
