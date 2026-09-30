import { View, Text, Image, StyleSheet } from 'react-native';

const STATUS_COLORS = { Alive: '#22c55e', Dead: '#ef4444', unknown: '#94a3b8' };

export default function CharacterCard({ character }) {
  const color = STATUS_COLORS[character.status] ?? STATUS_COLORS.unknown;
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{character.name}</Text>
        <View style={styles.statusRow}>
          <View style={[styles.dot, { backgroundColor: color }]} />
          <Text style={styles.detail}>{character.status} - {character.species}</Text>
        </View>
        <Text style={styles.detail} numberOfLines={1}>Origen: {character.origin?.name}</Text>
        <Text style={styles.detail} numberOfLines={1}>Ubicación: {character.location?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  image: { width: 110, height: 110 },
  info: { flex: 1, padding: 12, justifyContent: 'center' },
  name: { fontSize: 17, fontWeight: '700', color: '#0f172a', marginBottom: 4 },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  dot: { width: 9, height: 9, borderRadius: 5, marginRight: 6 },
  detail: { fontSize: 13, color: '#475569', marginTop: 1 },
});
