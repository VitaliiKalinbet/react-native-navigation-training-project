import { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import { Ionicons } from '@expo/vector-icons';

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const [favoriteMeal, setFavoriteMeal] = useState(false);
  function toggleFavoriteHandler() {
    setFavoriteMeal(prevState => !prevState);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <Pressable onPress={toggleFavoriteHandler} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name="star" size={24} color={favoriteMeal ? 'yellow' : 'black'} />
          </Pressable>
        );
      },
    });
  }, [selectedMeal, navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>Selected Meal: {selectedMeal.title}</Text>
      <MealDetails affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} duration={selectedMeal.duration} />
      <Text style={styles.subTitle}>Ingredients:</Text>
      <View style={styles.listContainer}>
        <Text>{selectedMeal.ingredients.join(', ')}</Text>
      </View>
      <Text style={styles.subTitle}>Steps:</Text>
      <View style={styles.listContainer}>
        <Text>{selectedMeal.steps.join(', ')}</Text>
      </View>
      <Text style={styles.subTitle}>Duration:</Text>
      <View style={styles.listContainer}>
        <Text>{selectedMeal.duration}m</Text>
      </View>
      <Text style={styles.subTitle}>Complexity:</Text>
      <View style={styles.listContainer}>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
      </View>
      <Text style={styles.subTitle}>Affordability:</Text>
      <View style={styles.listContainer}>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginHorizontal: 12,
  },
  listContainer: {
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  pressed: {
    opacity: 0.7,
  },
});
