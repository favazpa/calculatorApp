import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ResultBox = ({ total }) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.total}>{total}</Text>
            <View style={Styles.divider} />
        </View>
    );
};

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    total: {
        fontSize: 30,
        color: 'grey',
        marginBottom: 15,
        fontWeight: '300'
    },
    divider: {
        borderTopColor: '#333332',
        borderTopWidth: 1,
        width: '100%'
    }
});

export default ResultBox;