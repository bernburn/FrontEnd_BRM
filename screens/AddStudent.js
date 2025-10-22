import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';


const AddStudent = ({ navigation }) => {
  const [studentId, setStudentId] = useState('');
  const [fullName, setFullName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');

  const handleSubmit = async () => {
    if (!studentId || !fullName || !course || !yearLevel) {
        Alert.alert('Error', 'Please fill in all fields.');
        return;
    }

    const newStudent = {
      student_id: studentId,
      full_name: fullName,
      course: course,
      year_level: parseInt(yearLevel),
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/students/', newStudent);
      
      window.alert('Success', 'Student added successfully!', [
        { 
            text: 'OK', 
            onPress: () => {
                setStudentId(''); setFullName(''); setCourse(''); setYearLevel('');
                navigation.navigate('StudentList'); 
            }
        }
      ]);
    } catch (error) {
      console.error("Error adding student:", error.response ? error.response.data : error.message);
      window.alert('Error', 'Failed to add student. Check console for details (e.g., ID not unique).');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Student ID:</Text>
      <TextInput style={styles.input} placeholder="e.g., 2025-0001" value={studentId} onChangeText={setStudentId} />

      <Text style={styles.label}>Full Name:</Text>
      <TextInput style={styles.input} placeholder="e.g., John Doe" value={fullName} onChangeText={setFullName} />

      <Text style={styles.label}>Course:</Text>
      <TextInput style={styles.input} placeholder="e.g., BSIT" value={course} onChangeText={setCourse} />

      <Text style={styles.label}>Year Level:</Text>
      <TextInput style={styles.input} placeholder="e.g., 1" keyboardType="numeric" value={yearLevel} onChangeText={setYearLevel} />

      <Button title="Add Student Record" onPress={handleSubmit} color="#28a745" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    label: { fontSize: 16, marginBottom: 5, marginTop: 10, fontWeight: '500' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
});

export default AddStudent;