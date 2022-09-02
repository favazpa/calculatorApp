import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CalcButton = ({ value, onPress, backgroundColor }) => {
    return (
        <TouchableOpacity
            style={[Styles.container, { backgroundColor: backgroundColor }]}
            onPress={(value) => onPress && onPress(value)}
        >
            <Text style={Styles.buttonText}>{value}</Text>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 30,
        color: 'grey',
        fontWeight: '300'
    }
});

export default CalcButton;