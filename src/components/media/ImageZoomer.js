import React, {Component} from 'react';
import {
  View,
  Modal,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';


const ImageZoomer = props => {
  const onRequestClose = () => {
    props.onRequestClose();
  };
  return (
    <View
      style={{
        padding: 10,
      }}>
      <Modal
        visible={props.modalVisible}
        transparent={true}
        onRequestClose={onRequestClose}>
        <Text onPress={() => onRequestClose()} style={styles.close}>
         X
        </Text>
        <ImageViewer
          imageUrls={props.images}
          index={props.indexValue}
          onSwipeDown={() => {
            console.log('onSwipeDown');
          }}
          onMove={data => console.log(data)}
          enableSwipeDown={true}
        />
      </Modal>
    </View>
  );
};

export default ImageZoomer;
const styles = StyleSheet.create({
  close: {
    position: 'absolute',
    zIndex: 99,
    top: 50,
    fontSize: 20,
    left: 50,
    backgroundColor: '#fff',
  },
});