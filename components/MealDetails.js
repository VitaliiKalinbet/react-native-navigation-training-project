import { View, Text, StyleSheet } from 'react-native';

export default function MealDetails({ affordability, complexity, duration }) {
  return (
      <View style={styles.details}>
        <Text style={styles.detailItem}>{affordability}</Text>
        <Text style={styles.detailItem}>{complexity}</Text>
        <Text style={styles.detailItem}>{duration}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
