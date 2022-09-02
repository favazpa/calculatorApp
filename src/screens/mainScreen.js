import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import NumberPad from "../components/numberPad";
import ResultBox from "../components/resultBox";
import PopUpModal from "../components/popUpModal";

const MainScreen = () => {
    const [total, setTotal] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={Styles.container}>
            <PopUpModal
                modalVisible={modalVisible}
                setModalVisible={(data) => { setModalVisible(data); }}
            />
            <ResultBox total={total} />
            <NumberPad
                total={total}
                setTotal={(data) => setTotal(data)}
                setModalVisible={(data) => {
                    setModalVisible(data);
                }}
            />
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404040',
        padding: 20
    }
});

export default MainScreen;