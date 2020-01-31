import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class SavedProduct extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SavedProduct</Text>
            </View>
        );
    }
}

export default SavedProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
