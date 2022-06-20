import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

// Create component
const ComponentsScreen = () => {
    const greeting =  <Text>How you doin?</Text>;

    return (
        <View>
            <Text style={styles.texyStyle}>This is the components screen</Text>
                {greeting}
        </View>
    )};

const styles = StyleSheet.create({
    texyStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;