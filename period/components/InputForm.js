import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const InputForm = ({ onSubmit, colors, initialData = {} }) => {
  const [lastPeriodDate, setLastPeriodDate] = useState(
    initialData.lastPeriodDate ? new Date(initialData.lastPeriodDate) : new Date()
  );
  const [cycleLength, setCycleLength] = useState(
    initialData.cycleLength ? String(initialData.cycleLength) : '28'
  );
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    if (Platform.OS === 'android') setShowDatePicker(false);
    if (selectedDate) setLastPeriodDate(selectedDate);
  };

  const handleSubmit = () => {
    const cycleNum = parseInt(cycleLength);
    if (isNaN(cycleNum) || cycleNum < 1 || cycleNum > 100) {
      Alert.alert('Invalid Cycle Length', 'Please enter a cycle length between 1 and 100 days.');
      return;
    }
    if (lastPeriodDate > new Date()) {
      Alert.alert('Invalid Date', 'Please select a date that is not in the future.');
      return;
    }
    onSubmit({ lastPeriodDate, cycleLength: cycleNum });
  };

  const formatDate = (date) =>
    date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>📅 Period Information</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Enter your menstrual cycle details
      </Text>

      <View style={styles.inputSection}>
        <Text style={[styles.label, { color: colors.text }]}>Last Period Start Date</Text>

        {Platform.OS === 'web' ? (
          <input
            type="date"
            max={new Date().toISOString().split('T')[0]}
            value={lastPeriodDate.toISOString().split('T')[0]}
            onChange={(e) => {
              if (e.target.value) setLastPeriodDate(new Date(e.target.value + 'T12:00:00'));
            }}
            style={{
              padding: '12px 15px',
              borderRadius: 10,
              border: `2px solid ${colors.primary}`,
              backgroundColor: colors.inputBackground,
              color: colors.text,
              fontSize: 16,
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        ) : (
          <>
            <TouchableOpacity
              style={[styles.dateButton, { backgroundColor: colors.inputBackground, borderColor: colors.primary }]}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={[styles.dateButtonText, { color: colors.text }]}>
                📆 {formatDate(lastPeriodDate)}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={lastPeriodDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handleDateChange}
                maximumDate={new Date()}
              />
            )}
          </>
        )}
      </View>

      <View style={styles.inputSection}>
        <Text style={[styles.label, { color: colors.text }]}>Cycle Length (days)</Text>
        <Text style={[styles.helpText, { color: colors.textSecondary }]}>
          Standard cycle is 28 days (range: 21–35)
        </Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text, borderColor: colors.primary }]}
          placeholder="Enter cycle length"
          placeholderTextColor={colors.textSecondary}
          value={cycleLength}
          onChangeText={setCycleLength}
          keyboardType="number-pad"
          maxLength={3}
          returnKeyType="done"
        />
      </View>

      <View style={styles.presetSection}>
        <Text style={[styles.presetLabel, { color: colors.textSecondary }]}>Quick presets:</Text>
        <View style={styles.presetButtons}>
          {[21, 24, 28, 32, 35].map((preset) => (
            <TouchableOpacity
              key={preset}
              style={[
                styles.presetButton,
                {
                  backgroundColor: cycleLength === String(preset) ? colors.primary : colors.inputBackground,
                  borderColor: colors.primary,
                },
              ]}
              onPress={() => setCycleLength(String(preset))}
            >
              <Text style={[styles.presetButtonText, { color: cycleLength === String(preset) ? '#FFFFFF' : colors.text }]}>
                {preset}d
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: colors.primary }]}
        onPress={handleSubmit}
        activeOpacity={0.8}
      >
        <Text style={styles.submitButtonText}>✨ Calculate My Cycle</Text>
      </TouchableOpacity>

      <View style={[styles.infoBox, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.infoTitle, { color: colors.text }]}>💡 Tip:</Text>
        <Text style={[styles.infoText, { color: colors.textSecondary }]}>
          The more accurate your dates, the better the predictions. Your actual cycle may vary.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, borderRadius: 15, marginHorizontal: 10, marginVertical: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 14, marginBottom: 20, fontStyle: 'italic' },
  inputSection: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
  helpText: { fontSize: 12, marginBottom: 8 },
  dateButton: { padding: 15, borderRadius: 10, borderWidth: 2, alignItems: 'center' },
  dateButtonText: { fontSize: 16, fontWeight: '500' },
  input: { borderWidth: 2, borderRadius: 10, paddingHorizontal: 15, paddingVertical: 12, fontSize: 16 },
  presetSection: { marginBottom: 20 },
  presetLabel: { fontSize: 14, marginBottom: 8, fontWeight: '500' },
  presetButtons: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  presetButton: { flex: 1, paddingVertical: 10, borderRadius: 8, borderWidth: 2, alignItems: 'center' },
  presetButtonText: { fontSize: 14, fontWeight: '600' },
  submitButton: { paddingVertical: 15, borderRadius: 12, alignItems: 'center', marginBottom: 15 },
  submitButtonText: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  infoBox: { padding: 12, borderRadius: 10, marginTop: 10 },
  infoTitle: { fontSize: 14, fontWeight: '600', marginBottom: 4 },
  infoText: { fontSize: 13, lineHeight: 18 },
});

export default InputForm;
