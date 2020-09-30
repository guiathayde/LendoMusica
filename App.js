import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Views/Home/Home.js';
import SearchResult from './src/Views/SearchResult/SearchResult.js';
import SearchMusicNotFound from './src/Views/SearchMusicNotFound/SearchMusicNotFound.js';
import Result from './src/Views/Result/Result.js';
import LatestSearches from './src/Views/LatestSearches/LatestSearches.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LatestSearches" component={LatestSearches} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="SearchMusicNotFound" component={SearchMusicNotFound} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;