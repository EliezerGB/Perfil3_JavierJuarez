import { FlatList, View, StyleSheet } from 'react-native';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function CharactersScreen() {
  const { characters, loading, error, refetch } = useCharacters();

  if (loading) return <Loading message="Cargando personajes..." />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CharacterCard character={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  list: { padding: 16 },
});
