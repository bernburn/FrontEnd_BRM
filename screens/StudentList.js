import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/students/');
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchStudents();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.full_name}</Text>
      <Text style={styles.details}>{item.student_id} | {item.course} - {item.year_level}</Text>
    </View>
  );

  return (
    <FlatList
      data={students}
      keyExtractor={item => item.student_id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={<Text style={styles.empty}>No student records found.</Text>}
    />
  );
};

const styles = StyleSheet.create({
    item: { 
        padding: 15, 
        borderBottomWidth: 1, 
        borderBottomColor: '#eee' 
    },
    name: { 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    details: {
        fontSize: 14,
        color: '#555'
    },
    loading: { 
        flex: 1, 
        justifyContent: 'center' 
    },
    empty: { 
        textAlign: 'center', 
        marginTop: 50, 
        fontSize: 16,
        color: '#888'
    },
});

export default StudentList;