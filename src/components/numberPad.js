import React from "react";
import { View, StyleSheet } from "react-native";
import CalcButton from "../components/calcButton";

const NumberPad = ({
    total,
    setTotal = function () { },
    setModalVisible = function () { }
}) => {

    const calculate = (value) => {
        if (value === '=' && total === "1+3+9") {
            setModalVisible(true);
        }
    };

    const onPressDigits = (value) => {
        setTotal(total + value);
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.numberPadColomn}>
                <CalcButton value={'C'} />
                <CalcButton value={'7'} />
                <CalcButton value={'4'} />
                <CalcButton
                    value={'1'}
                    onPress={() => { onPressDigits('1'); }}
                />
                <CalcButton value={'.'} />
            </View>
            <View style={Styles.numberPadColomn}>
                <CalcButton value={'+/-'} />
                <CalcButton value={'8'} />
                <CalcButton value={'5'} />
                <CalcButton value={'2'} />
                <CalcButton value={'0'} />
            </View>
            <View style={Styles.numberPadColomn}>
                <CalcButton value={'%'} />
                <CalcButton
                    value={'9'}
                    onPress={() => { onPressDigits('9'); }}
                />
                <CalcButton value={'6'} />
                <CalcButton
                    value={'3'}
                    onPress={() => { onPressDigits('3'); }}
                />
                <CalcButton value={'00'} />
            </View>
            <View style={[Styles.numberPadColomn, Styles.highlightedButtons]}>
                <CalcButton value={'/'} />
                <CalcButton value={'X'} />
                <CalcButton value={'-'} />
                <CalcButton
                    value={'+'}
                    onPress={() => { onPressDigits('+'); }}
                />
                <CalcButton
                    value={'='}
                    backgroundColor={'#e8e890'}
                    onPress={() => { calculate('='); }} />
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    numberPadColomn: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    highlightedButtons: {
        backgroundColor: '#333332',
        borderRadius: 45
    }
});

export default NumberPad;