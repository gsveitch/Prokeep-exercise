import React from 'react';
import { View, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';

const LoginModal = (modalVisible, setModalVisible) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(false);
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text>Hello World!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text>Hide Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: '80%',
    width: '90%',
    margin: 20,
    backgroundColor: "#2b7990",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    backgroundColor: '#f3b64e',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 24,
    margin: 13,
  },
});

export default LoginModal;