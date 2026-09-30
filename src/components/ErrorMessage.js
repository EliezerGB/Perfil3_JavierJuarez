import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from './PrimaryButton';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ocurrió un error</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && <PrimaryButton title="Reintentar" onPress={onRetry} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 20, fontWeight: '700', color: '#ef4444' },
  message: { marginTop: 8, color: '#475569', textAlign: 'center' },
});
