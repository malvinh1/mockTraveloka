import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../constants/theme';

export default function ScanQRScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Scan QR Screen</Text>
      <MaterialCommunityIcons
        name="qrcode-scan"
        color={theme.colors.primary}
        size={300}
        style={{paddingTop: 30}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
