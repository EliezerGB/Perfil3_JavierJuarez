import { View, Text, StyleSheet } from 'react-native';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e2e8f0',
  },
  label: { fontSize: 12, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1 },
  value: { fontSize: 18, color: '#0f172a', fontWeight: '600', marginTop: 2 },
});
