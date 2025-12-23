import { useLayoutEffect } from 'react';
import { View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealList';
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

  return (
    <MealsList meals={displayedMeals} />
  );
}
