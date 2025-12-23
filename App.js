// import {
//   StyleSheet,
//   // Pressable
// } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
      headerTitleAlign: 'center',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerActiveBackgroundColor: '#f5428d',
        drawerActiveTintColor: '#ffffff',
        drawerInactiveTintColor: '#ffffff',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        drawerIcon: ({ color, size }) => {
          return <Ionicons name="list" color={color} size={size} />
        },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'My Favorites',
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() { 
  return (
    <>
      <StatusBar style="dark" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            // headerStyle: { backgroundColor: '#24180f' },
            // headerTintColor: '#ffffff',
            headerTitleAlign: 'center',
          }}>
            <Stack.Screen name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
              // options={{
              //   headerRight: () => {
              //     return (
              //       <Pressable onPress={() => {}}>
              //         <Ionicons name="star" size={24} color="black" />
              //       </Pressable>
              //     );
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
