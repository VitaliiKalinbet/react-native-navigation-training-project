import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from '../MealDetails';

export default function MealItem({ title, imageUrl, affordability, complexity, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree, id }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate('MealDetail', { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={pressHandler}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ 
              uri: imageUrl,
              headers: {
                'User-Agent': 'Mozilla/5.0',
              },
            }} 
            style={styles.image} 
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <MealDetails affordability={affordability} complexity={complexity} duration={duration} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
