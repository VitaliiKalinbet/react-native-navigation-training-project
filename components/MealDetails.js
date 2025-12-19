import { View, Text, StyleSheet } from 'react-native';

export default function MealDetails({ affordability, complexity, duration, style, textStyle }) {
  return (
      <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
        <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
        <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
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
