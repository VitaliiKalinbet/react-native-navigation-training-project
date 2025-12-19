import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealId,
    });
  }, [mealId, navigation]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>Selected Meal: {selectedMeal.title}</Text>
      <MealDetails title={selectedMeal.title} imageUrl={selectedMeal.imageUrl} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} duration={selectedMeal.duration} ingredients={selectedMeal.ingredients} steps={selectedMeal.steps} isGlutenFree={selectedMeal.isGlutenFree} isVegan={selectedMeal.isVegan} isVegetarian={selectedMeal.isVegetarian} isLactoseFree={selectedMeal.isLactoseFree} />
      <Text>Ingredients:</Text>
      <Text>{selectedMeal.ingredients.join(', ')}</Text>
      <Text>Steps:</Text>
      <Text>{selectedMeal.steps.join(', ')}</Text>
      <Text>Duration:</Text>
      <Text>{selectedMeal.duration}m</Text>
      <Text>Complexity:</Text>
      <Text>{selectedMeal.complexity.toUpperCase()}</Text>
      <Text>Affordability:</Text>
      <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      <Text>Is Gluten Free:</Text>
      <Text>{selectedMeal.isGlutenFree ? 'Yes' : 'No'}</Text>
      <Text>Is Vegan:</Text>
      <Text>{selectedMeal.isVegan ? 'Yes' : 'No'}</Text>
      <Text>Is Vegetarian:</Text>
      <Text>{selectedMeal.isVegetarian ? 'Yes' : 'No'}</Text>
      <Text>Is Lactose Free:</Text>
      <Text>{selectedMeal.isLactoseFree ? 'Yes' : 'No'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
});
