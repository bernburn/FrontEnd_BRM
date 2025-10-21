import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student API Dashboard</Text>
      <Button
        title="View Students"
        onPress={() => navigation.navigate('StudentList')}
        color="#007bff"
      />
      <View style={styles.spacer} />
      <Button
        title="Add Student"
        onPress={() => navigation.navigate('AddStudent')}
        color="#28a745"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        padding: 20 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom: 40, 
        textAlign: 'center' 
    },
    spacer: { 
        height: 15 
    },
});

export default Homepage;