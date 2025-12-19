import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
// import { useRoute } from '@react-navigation/native';

export default function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute();
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const selectedCategory = CATEGORIES.find((category) => category.id === categoryId).title;
    
    navigation.setOptions({
      title: selectedCategory,
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId));

  function renderMealItem(itemData) {
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} affordability={itemData.item.affordability} complexity={itemData.item.complexity} duration={itemData.item.duration} id={itemData.item.id} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  mealItem: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});
