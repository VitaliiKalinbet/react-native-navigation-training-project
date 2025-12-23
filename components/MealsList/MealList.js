import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import MealItem from './MealItem';

export default function MealsList({ meals }) {
  function renderMealItem(itemData) {
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} affordability={itemData.item.affordability} complexity={itemData.item.complexity} duration={itemData.item.duration} id={itemData.item.id} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={meals} renderItem={renderMealItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
