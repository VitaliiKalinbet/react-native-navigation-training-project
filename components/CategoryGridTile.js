import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function CategoryGridTile({ title, color }) {
  return (
    <View>
      <Pressable android_ripple={{ color: '#ccc' }}>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },
});
