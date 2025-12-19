import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealId,
    });
  }, [mealId, navigation]);

  return (
    <View style={styles.container}>
      <Text>Meal Detail Screen {mealId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
