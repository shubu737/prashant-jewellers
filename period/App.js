import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import SymptomLogger from './components/SymptomLogger';
import Calendar from './components/Calendar';

import {
  configureNotifications,
  requestNotificationPermissions,
  schedulePeriodReminder,
  scheduleOvulationReminder,
  scheduleFertileWindowReminder,
} from './utils/notificationService';

const LIGHT_THEME = {
  background: '#FFFFFF',
  cardBackground: '#F9E5E5',
  inputBackground: '#FFF5F5',
  text: '#333333',
  textSecondary: '#666666',
  primary: '#FF69B4',
  secondary: '#DDA0DD',
  accent: '#FFB6C1',
  tabActive: '#FF69B4',
  tabInactive: '#CCCCCC',
};

const DARK_THEME = {
  background: '#1A1A1A',
  cardBackground: '#2D2D2D',
  inputBackground: '#3A3A3A',
  text: '#FFFFFF',
  textSecondary: '#B0B0B0',
  primary: '#FF69B4',
  secondary: '#DDA0DD',
  accent: '#FFB6C1',
  tabActive: '#FF69B4',
  tabInactive: '#555555',
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lastPeriodDate, setLastPeriodDate] = useState(null);
  const [cycleLength, setCycleLength] = useState(28);
  const [activeTab, setActiveTab] = useState('home');
  const [hasNotificationPermission, setHasNotificationPermission] = useState(false);

  const colors = isDarkMode ? DARK_THEME : LIGHT_THEME;

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      setIsLoading(true);
      await configureNotifications();
      const hasPermission = await requestNotificationPermissions();
      setHasNotificationPermission(hasPermission);
      await loadSavedData();
      setIsLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to initialize app');
      setIsLoading(false);
    }
  };

  const loadSavedData = async () => {
    try {
      const savedDate = await AsyncStorage.getItem('lastPeriodDate');
      if (savedDate) setLastPeriodDate(new Date(savedDate));

      const savedCycle = await AsyncStorage.getItem('cycleLength');
      if (savedCycle) setCycleLength(parseInt(savedCycle));

      const savedDarkMode = await AsyncStorage.getItem('isDarkMode');
      if (savedDarkMode !== null) setIsDarkMode(JSON.parse(savedDarkMode));
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  };

  const saveData = async (date, cycle) => {
    try {
      await AsyncStorage.setItem('lastPeriodDate', date.toISOString());
      await AsyncStorage.setItem('cycleLength', String(cycle));
    } catch (error) {
      Alert.alert('Error', 'Failed to save cycle information');
    }
  };

  const handleFormSubmit = async (data) => {
    setLastPeriodDate(data.lastPeriodDate);
    setCycleLength(data.cycleLength);
    await saveData(data.lastPeriodDate, data.cycleLength);
    Alert.alert('Saved', 'Your cycle information has been updated!');
  };

  const handleScheduleNotifications = async (nextPeriod, ovulationDate, fertileWindowStart) => {
    if (!hasNotificationPermission) {
      Alert.alert('Notifications Disabled', 'Please enable notifications in your device settings.');
      return;
    }

    const a = await schedulePeriodReminder(nextPeriod);
    const b = await scheduleOvulationReminder(ovulationDate);
    const c = await scheduleFertileWindowReminder(fertileWindowStart);

    if (a && b && c) {
      Alert.alert('Done!', 'Reminders set for your period, ovulation, and fertile window.');
    } else {
      Alert.alert('Warning', 'Some reminders may not have been scheduled.');
    }
  };

  const toggleDarkMode = async () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    await AsyncStorage.setItem('isDarkMode', JSON.stringify(next));
  };

  const handleResetData = () => {
    Alert.alert('Reset Data', 'This will delete all your saved data. Are you sure?', [
      { text: 'Cancel' },
      {
        text: 'Reset',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.removeItem('lastPeriodDate');
          await AsyncStorage.removeItem('cycleLength');
          setLastPeriodDate(null);
          setCycleLength(28);
          setActiveTab('home');
          Alert.alert('Done', 'All data has been cleared.');
        },
      },
    ]);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.loadingContainer}>
          <Text style={{ fontSize: 60, marginBottom: 20 }}>🎀</Text>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, { color: colors.text }]}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />

      <View style={[styles.header, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.appTitle, { color: colors.text }]}>🎀 Period Tracker</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={[styles.iconButton, { backgroundColor: colors.inputBackground }]}
            onPress={toggleDarkMode}
          >
            <Text style={styles.iconButtonText}>{isDarkMode ? '☀️' : '🌙'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconButton, { backgroundColor: colors.inputBackground }]}
            onPress={handleResetData}
          >
            <Text style={styles.iconButtonText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {activeTab === 'home' && (
          <View style={styles.tabContent}>
            {!lastPeriodDate ? (
              <InputForm onSubmit={handleFormSubmit} colors={colors} />
            ) : (
              <>
                <InputForm
                  onSubmit={handleFormSubmit}
                  colors={colors}
                  initialData={{ lastPeriodDate, cycleLength }}
                />
                <ResultCard
                  lastPeriodDate={lastPeriodDate}
                  cycleLength={cycleLength}
                  colors={colors}
                  onScheduleNotification={handleScheduleNotifications}
                />
              </>
            )}
          </View>
        )}

        {activeTab === 'symptoms' && (
          <View style={styles.tabContent}>
            <SymptomLogger colors={colors} />
          </View>
        )}

        {activeTab === 'calendar' && (
          <View style={styles.tabContent}>
            <Calendar lastPeriodDate={lastPeriodDate} cycleLength={cycleLength} colors={colors} />
          </View>
        )}
      </View>

      <View style={[styles.tabBar, { backgroundColor: colors.cardBackground }]}>
        {[
          { key: 'home', icon: '🏠', label: 'Home' },
          { key: 'symptoms', icon: '📝', label: 'Symptoms' },
          { key: 'calendar', icon: '📅', label: 'Calendar' },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabButton,
              { borderTopColor: activeTab === tab.key ? colors.primary : 'transparent' },
            ]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text style={[styles.tabIcon, { color: activeTab === tab.key ? colors.primary : colors.tabInactive }]}>
              {tab.icon}
            </Text>
            <Text style={[styles.tabLabel, { color: activeTab === tab.key ? colors.primary : colors.tabInactive }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 20, fontSize: 16, fontWeight: '500' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  appTitle: { fontSize: 24, fontWeight: 'bold' },
  headerRight: { flexDirection: 'row', gap: 8 },
  iconButton: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  iconButtonText: { fontSize: 18 },
  content: { flex: 1 },
  tabContent: { flex: 1 },
  tabBar: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.1)' },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 12, borderTopWidth: 3 },
  tabIcon: { fontSize: 24, marginBottom: 4 },
  tabLabel: { fontSize: 12, fontWeight: '600' },
});
