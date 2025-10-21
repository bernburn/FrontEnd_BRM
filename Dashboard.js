import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './screens/Homepage';
import StudentList from './screens/StudentList';
import AddStudent from './screens/AddStudent';

const Stack = createStackNavigator();

function Dashboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} options={{ title: 'Student Dashboard' }} />
        <Stack.Screen name="StudentList" component={StudentList} options={{ title: 'View Students' }} />
        <Stack.Screen name="AddStudent" component={AddStudent} options={{ title: 'Add New Student' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Dashboard;