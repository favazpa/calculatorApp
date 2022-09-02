import React from "react";
import { StyleSheet, Modal, View, Text, TouchableOpacity } from "react-native";

const HELLO_WORLD = 'Hello World';

const PopUpModal = ({ modalVisible, setModalVisible = function () { } }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <TouchableOpacity
                style={Styles.centeredView}
                onPressOut={() => { setModalVisible(!modalVisible); }}
            >
                <View style={Styles.modalView}>
                    <Text style={Styles.modalText}>{HELLO_WORLD}</Text>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const Styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: "#787878",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '40%',
        width: '70%',
        justifyContent: 'center',
        opacity: .8
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 35,
        color: 'white'
    }
});

export default PopUpModal;