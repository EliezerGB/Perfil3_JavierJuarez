import { View, Text, StyleSheet } from 'react-native';
import { student } from '../data/student';
import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Datos del estudiante</Text>
        <InfoRow label="Nombre" value={student.nombre} />
        <InfoRow label="Carnet" value={student.carnet} />
        <InfoRow label="Sección y grupo" value={`${student.seccion} - ${student.grupo}`} />
        <PrimaryButton
          title="Ver personajes"
          onPress={() => navigation.navigate('Characters')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9', padding: 20, justifyContent: 'center' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 22,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  title: { fontSize: 22, fontWeight: '800', color: '#0f172a', marginBottom: 8 },
});
