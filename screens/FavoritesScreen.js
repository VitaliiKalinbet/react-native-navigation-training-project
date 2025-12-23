import MealsList from '../components/MealsList/MealList';
import { StyleSheet, View, Text } from 'react-native';
// import { FavoritesContext } from '../store/context/favorites-context';
// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { MEALS } from '../data/dummy-data';

export default function FavoritesScreen() {
  // const favoritesContext = useContext(FavoritesContext);
  const favorites = useSelector((state) => state.favoriteMealIds.favorites);
  const displayedMeals = MEALS.filter((mealItem) => favoritesContext.favorites.includes(mealItem.id));

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return (
    <MealsList meals={displayedMeals} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
});
