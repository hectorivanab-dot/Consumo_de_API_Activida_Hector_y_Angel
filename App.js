import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

import { syncData } from './src/utils/cloudEngine';

export default function App() {

  const handleSync = async () => {
    const result = await syncData();

    Alert.alert(
      'Sincronización',
      `Registros obtenidos: ${result.length}`
    );
  };

  return (
    <View style={styles.container}>
      <Button
        title="SINCRONIZAR DATOS"
        onPress={handleSync}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});