import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#9b3cdaff" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginTop: 12, color: '#475569' },
});
