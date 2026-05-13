import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatDate } from '../utils/dateCalculations';

const MOOD_OPTIONS = [
  { id: '1', emoji: '😊', label: 'Happy', color: '#FFD700' },
  { id: '2', emoji: '😢', label: 'Sad', color: '#87CEEB' },
  { id: '3', emoji: '😰', label: 'Anxious', color: '#FF6347' },
  { id: '4', emoji: '😤', label: 'Irritable', color: '#FF4500' },
  { id: '5', emoji: '⚡', label: 'Energetic', color: '#32CD32' },
];

const PAIN_OPTIONS = [
  { id: '0', label: 'None', emoji: '😌' },
  { id: '1', label: 'Mild', emoji: '😟' },
  { id: '2', label: 'Moderate', emoji: '😣' },
  { id: '3', label: 'Severe', emoji: '😩' },
];

const SymptomLogger = ({ colors }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedPain, setSelectedPain] = useState(null);
  const [notes, setNotes] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [showHistory, setShowHistory] = useState(true);

  useEffect(() => {
    loadSymptoms();
  }, []);

  const loadSymptoms = async () => {
    try {
      const stored = await AsyncStorage.getItem('symptoms');
      if (stored) setSymptoms(JSON.parse(stored));
    } catch (error) {
      console.error('Error loading symptoms:', error);
    }
  };

  const saveSymptoms = async (updated) => {
    try {
      await AsyncStorage.setItem('symptoms', JSON.stringify(updated));
    } catch (error) {
      Alert.alert('Error', 'Could not save symptom');
    }
  };

  const handleLogSymptom = async () => {
    if (!selectedMood && !selectedPain && !notes.trim()) {
      Alert.alert('Empty Entry', 'Please select a mood, pain level, or add notes before logging.');
      return;
    }

    const newSymptom = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      mood: selectedMood,
      pain: selectedPain,
      notes: notes.trim(),
    };

    const updated = [newSymptom, ...symptoms];
    setSymptoms(updated);
    await saveSymptoms(updated);

    setSelectedMood(null);
    setSelectedPain(null);
    setNotes('');
    Alert.alert('Logged!', 'Your symptom has been saved.');
  };

  const handleDeleteSymptom = (id) => {
    Alert.alert('Delete Entry', 'Are you sure you want to delete this entry?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const updated = symptoms.filter((s) => s.id !== id);
          setSymptoms(updated);
          await saveSymptoms(updated);
        },
      },
    ]);
  };

  const renderSymptomItem = ({ item }) => {
    const mood = MOOD_OPTIONS.find((m) => m.id === item.mood);
    const pain = PAIN_OPTIONS.find((p) => p.id === item.pain);

    return (
      <View style={[styles.symptomItem, { backgroundColor: colors.cardBackground }]}>
        <View style={styles.symptomHeader}>
          <Text style={[styles.symptomDate, { color: colors.textSecondary }]}>
            📅 {formatDate(new Date(item.date))}
          </Text>
          <TouchableOpacity onPress={() => handleDeleteSymptom(item.id)} style={styles.deleteButton}>
            <Text style={{ fontSize: 18 }}>🗑️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.symptomContent}>
          {item.mood && (
            <View style={styles.symptomRow}>
              <Text style={[styles.symptomLabel, { color: colors.textSecondary }]}>Mood:</Text>
              <Text style={styles.symptomValue}>{mood?.emoji} {mood?.label}</Text>
            </View>
          )}
          {item.pain && (
            <View style={styles.symptomRow}>
              <Text style={[styles.symptomLabel, { color: colors.textSecondary }]}>Pain:</Text>
              <Text style={styles.symptomValue}>{pain?.emoji} {pain?.label}</Text>
            </View>
          )}
          {item.notes ? (
            <View style={styles.notesBox}>
              <Text style={[styles.notesLabel, { color: colors.textSecondary }]}>Notes:</Text>
              <Text style={[styles.notesText, { color: colors.text }]}>{item.notes}</Text>
            </View>
          ) : null}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      <Text style={[styles.title, { color: colors.text }]}>📝 Log Symptoms</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Track your mood, pain, and notes</Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>How are you feeling?</Text>
        <View style={styles.moodGrid}>
          {MOOD_OPTIONS.map((mood) => (
            <TouchableOpacity
              key={mood.id}
              style={[
                styles.moodButton,
                {
                  backgroundColor: selectedMood === mood.id ? mood.color : colors.inputBackground,
                  borderColor: mood.color,
                },
              ]}
              onPress={() => setSelectedMood(selectedMood === mood.id ? null : mood.id)}
            >
              <Text style={styles.moodEmoji}>{mood.emoji}</Text>
              <Text style={[styles.moodLabel, { color: selectedMood === mood.id ? '#FFFFFF' : colors.text }]}>
                {mood.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Pain level?</Text>
        <View style={styles.painGrid}>
          {PAIN_OPTIONS.map((pain) => (
            <TouchableOpacity
              key={pain.id}
              style={[
                styles.painButton,
                {
                  backgroundColor: selectedPain === pain.id ? colors.primary : colors.inputBackground,
                  borderColor: colors.primary,
                },
              ]}
              onPress={() => setSelectedPain(selectedPain === pain.id ? null : pain.id)}
            >
              <Text style={styles.painEmoji}>{pain.emoji}</Text>
              <Text style={[styles.painLabel, { color: selectedPain === pain.id ? '#FFFFFF' : colors.text }]}>
                {pain.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Any additional notes?</Text>
        <TextInput
          style={[styles.notesInput, { backgroundColor: colors.inputBackground, color: colors.text, borderColor: colors.primary }]}
          placeholder="Add any other observations..."
          placeholderTextColor={colors.textSecondary}
          value={notes}
          onChangeText={setNotes}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: colors.primary }]}
        onPress={handleLogSymptom}
        activeOpacity={0.8}
      >
        <Text style={styles.submitButtonText}>✨ Log Symptom</Text>
      </TouchableOpacity>

      <View style={styles.historyHeader}>
        <Text style={[styles.historyTitle, { color: colors.text }]}>📊 Symptom History</Text>
        <TouchableOpacity onPress={() => setShowHistory(!showHistory)}>
          <Text style={[styles.toggleText, { color: colors.primary }]}>{showHistory ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

      {showHistory && (
        <View style={styles.symptomsList}>
          {symptoms.length > 0 ? (
            <FlatList
              data={symptoms}
              renderItem={renderSymptomItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : (
            <View style={[styles.emptyState, { backgroundColor: colors.cardBackground }]}>
              <Text style={{ fontSize: 40, marginBottom: 10 }}>📋</Text>
              <Text style={[styles.emptyStateText, { color: colors.textSecondary }]}>
                No symptoms logged yet. Start tracking today!
              </Text>
            </View>
          )}
        </View>
      )}

      <View style={[styles.infoBox, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.infoTitle, { color: colors.text }]}>💡 Tip:</Text>
        <Text style={[styles.infoText, { color: colors.textSecondary }]}>
          Regular symptom logging helps you understand your body and predict patterns in your cycle.
        </Text>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10, paddingVertical: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 14, fontStyle: 'italic', marginBottom: 20 },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 12 },
  moodGrid: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  moodButton: { flex: 1, borderRadius: 12, padding: 12, alignItems: 'center', borderWidth: 2 },
  moodEmoji: { fontSize: 28, marginBottom: 4 },
  moodLabel: { fontSize: 12, fontWeight: '600', textAlign: 'center' },
  painGrid: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  painButton: { flex: 1, borderRadius: 12, padding: 12, alignItems: 'center', borderWidth: 2 },
  painEmoji: { fontSize: 24, marginBottom: 4 },
  painLabel: { fontSize: 12, fontWeight: '600', textAlign: 'center' },
  notesInput: { borderWidth: 2, borderRadius: 12, padding: 12, fontSize: 14, minHeight: 100 },
  submitButton: { paddingVertical: 15, borderRadius: 12, alignItems: 'center', marginBottom: 25 },
  submitButtonText: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' },
  historyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  historyTitle: { fontSize: 18, fontWeight: 'bold' },
  toggleText: { fontSize: 14, fontWeight: '600' },
  symptomsList: { marginBottom: 20 },
  symptomItem: { borderRadius: 12, padding: 12, marginBottom: 10 },
  symptomHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  symptomDate: { fontSize: 12, fontWeight: '600' },
  deleteButton: { padding: 5 },
  symptomContent: { gap: 8 },
  symptomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  symptomLabel: { fontSize: 12, fontWeight: '600' },
  symptomValue: { fontSize: 13, fontWeight: '500' },
  notesBox: { marginTop: 8, paddingTop: 8, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.1)' },
  notesLabel: { fontSize: 12, fontWeight: '600', marginBottom: 4 },
  notesText: { fontSize: 13, lineHeight: 18 },
  emptyState: { borderRadius: 12, padding: 30, alignItems: 'center' },
  emptyStateText: { fontSize: 14, textAlign: 'center', lineHeight: 20 },
  infoBox: { borderRadius: 12, padding: 12, marginBottom: 10 },
  infoTitle: { fontSize: 14, fontWeight: '600', marginBottom: 4 },
  infoText: { fontSize: 13, lineHeight: 18 },
});

export default SymptomLogger;
