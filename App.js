import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          // headerStyle: { backgroundColor: '#24180f' },
          // headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
        }}>
          <Stack.Screen name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
              // headerStyle: { backgroundColor: '#24180f' },
              // headerTintColor: '#ffffff',
              // headerTitleAlign: 'center',
            }} />
          <Stack.Screen name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route }) => {
            //   return {
            //     title: route.params.categoryId,
            //   }
            // }}
          />
          <Stack.Screen name="MealDetail"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
