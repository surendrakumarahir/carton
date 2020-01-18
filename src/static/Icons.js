import React from 'react';
import {StyleSheet} from 'react-native';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  whiteSmall: {color: '#000', fontSize: 25},
  whiteMedium: {color: '#000', fontSize: 30},
});

const dateIcon = <Fontisto name="date" style={styles.whiteSmall} />;
const clockIcon = <Ionicons name="md-clock" style={styles.whiteMedium} />;
const areaIcon = <FontAIcon name="dropbox" style={styles.whiteMedium} />;
const cateoryIcon = <FontAIcon name="truck" style={styles.whiteMedium} />;
const vehicalIcon = <FontAIcon name="truck" style={styles.whiteMedium} />;
const cloudUpload = (
  <FontAIcon name="cloud-upload" style={styles.whiteMedium} />
);
const close = (
  <FontAIcon name="close" style={[{color: 'red'}, styles.whiteMedium]} />
);
const openInNewIcon = (
  <MaterialIcons name="open-in-new" style={styles.whiteMedium} />
);

export {
  dateIcon,
  clockIcon,
  areaIcon,
  cateoryIcon,
  vehicalIcon,
  openInNewIcon,
  cloudUpload,
  close,
};
