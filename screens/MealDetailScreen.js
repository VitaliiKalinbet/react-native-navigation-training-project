import { useLayoutEffect, useContext, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import { Ionicons } from '@expo/vector-icons';
// import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const favoritesContext = useContext(FavoritesContext);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteMealIds.favorites);
  const mealIsFavorite = favorites.includes(mealId);

  const toggleFavoriteHandler = useCallback(() => {
    if (mealIsFavorite) {
      // favoritesContext.removeFavorite(mealId);
      dispatch(removeFavorite({ mealId }));
    } else {
      // favoritesContext.addFavorite(mealId);
      dispatch(addFavorite({ mealId }));
    }
  }, [mealIsFavorite, mealId, dispatch, favorites]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <Pressable onPress={toggleFavoriteHandler} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={mealIsFavorite ? 'star' : 'star-outline'} size={24} color={mealIsFavorite ? 'yellow' : 'black'} />
          </Pressable>
        );
      },
    });
  }, [selectedMeal, navigation, mealIsFavorite, toggleFavoriteHandler]);

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
