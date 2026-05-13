import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {
  calculateNextPeriod,
  calculateOvulationDate,
  calculateFertileWindow,
  calculateDaysUntilPeriod,
  formatDate,
  getPhaseColor,
  getCurrentPhase,
} from '../utils/dateCalculations';

const phaseDescriptions = {
  Menstruation: 'Shedding of uterine lining. Rest and hydrate.',
  Follicular: 'Hormone levels rising. Energy is increasing.',
  Ovulation: 'Release of the egg. Peak fertility window.',
  Luteal: 'Preparing for period. May feel more emotional.',
  Unknown: 'Please set your cycle dates.',
};

const ResultCard = ({ lastPeriodDate, cycleLength, colors, onScheduleNotification }) => {
  const [nextPeriod, setNextPeriod] = useState(null);
  const [ovulationDate, setOvulationDate] = useState(null);
  const [fertileWindow, setFertileWindow] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [currentPhase, setCurrentPhase] = useState('');

  useEffect(() => {
    if (!lastPeriodDate || !cycleLength) return;

    const next = calculateNextPeriod(lastPeriodDate, cycleLength);
    const ovulation = calculateOvulationDate(next);
    const fertile = calculateFertileWindow(ovulation);

    setNextPeriod(next);
    setOvulationDate(ovulation);
    setFertileWindow(fertile);
    setCountdown(calculateDaysUntilPeriod(next));
    setCurrentPhase(getCurrentPhase(lastPeriodDate, cycleLength));
  }, [lastPeriodDate, cycleLength]);

  useEffect(() => {
    if (!nextPeriod) return;
    const interval = setInterval(() => {
      setCountdown(calculateDaysUntilPeriod(nextPeriod));
    }, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [nextPeriod]);

  const getCountdownText = () => {
    if (countdown === null) return '...';
    if (countdown === 0) return 'Today!';
    if (countdown === 1) return '1 day';
    if (countdown < 0) return `${Math.abs(countdown)} days ago`;
    return `${countdown} days`;
  };

  if (!nextPeriod || !ovulationDate || !fertileWindow) return null;

  const phaseColor = getPhaseColor(currentPhase);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      <View style={[styles.countdownCard, { backgroundColor: colors.primary }]}>
        <Text style={styles.countdownLabel}>Days Until Period</Text>
        <Text style={styles.countdownValue}>{getCountdownText()}</Text>
        <Text style={styles.countdownDate}>Expected: {formatDate(nextPeriod)}</Text>
      </View>

      <View style={[styles.phaseCard, { backgroundColor: colors.cardBackground, borderLeftColor: phaseColor }]}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.phaseLabel, { color: colors.textSecondary }]}>Current Phase</Text>
          <Text style={[styles.phaseValue, { color: phaseColor }]}>{currentPhase}</Text>
          <Text style={[styles.phaseDescription, { color: colors.textSecondary }]}>
            {phaseDescriptions[currentPhase] || ''}
          </Text>
        </View>
        <View style={[styles.phaseIndicator, { backgroundColor: phaseColor }]} />
      </View>

      <View style={styles.cardsGrid}>
        {[
          { icon: '🩸', label: 'Next Period', value: formatDate(nextPeriod) },
          { icon: '💕', label: 'Ovulation', value: formatDate(ovulationDate) },
          { icon: '✨', label: 'Fertile Starts', value: formatDate(fertileWindow.start) },
          { icon: '🎯', label: 'Fertile Ends', value: formatDate(fertileWindow.end) },
        ].map((item) => (
          <View key={item.label} style={[styles.infoCard, { backgroundColor: colors.cardBackground }]}>
            <Text style={{ fontSize: 32, marginBottom: 8 }}>{item.icon}</Text>
            <Text style={[styles.cardLabel, { color: colors.textSecondary }]}>{item.label}</Text>
            <Text style={[styles.cardValue, { color: colors.text }]}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={[styles.fertileWindowCard, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.windowTitle, { color: colors.text }]}>✨ Fertile Window</Text>
        <Text style={[styles.windowDates, { color: colors.textSecondary }]}>
          {formatDate(fertileWindow.start)} to {formatDate(fertileWindow.end)}
        </Text>
        <Text style={[styles.windowDuration, { color: colors.primary }]}>{fertileWindow.duration} days</Text>
        <Text style={[styles.windowInfo, { color: colors.textSecondary }]}>
          Best time for conception if you're trying to get pregnant
        </Text>
      </View>

      <View style={[styles.cycleInfo, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.infoTitle, { color: colors.text }]}>📊 Cycle Information</Text>
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Cycle Length:</Text>
          <Text style={[styles.infoValue, { color: colors.text }]}>{cycleLength} days</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Last Period:</Text>
          <Text style={[styles.infoValue, { color: colors.text }]}>{formatDate(lastPeriodDate)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.notificationButton, { backgroundColor: colors.primary }]}
        onPress={() => onScheduleNotification?.(nextPeriod, ovulationDate, fertileWindow.start)}
        activeOpacity={0.8}
      >
        <Text style={styles.notificationButtonText}>🔔 Schedule Reminders</Text>
      </TouchableOpacity>

      <View style={[styles.disclaimer, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.disclaimerText, { color: colors.textSecondary }]}>
          ℹ️ These calculations are estimates based on a regular cycle. Actual dates may vary. Consult a healthcare professional for medical concerns.
        </Text>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10, paddingTop: 10 },
  countdownCard: { borderRadius: 20, padding: 30, marginBottom: 20, alignItems: 'center' },
  countdownLabel: { fontSize: 16, color: '#FFFFFF', marginBottom: 10, fontWeight: '500' },
  countdownValue: { fontSize: 48, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 10 },
  countdownDate: { fontSize: 14, color: '#FFFFFF', opacity: 0.9 },
  phaseCard: { flexDirection: 'row', borderRadius: 15, padding: 15, marginBottom: 20, alignItems: 'center', borderLeftWidth: 5 },
  phaseLabel: { fontSize: 12, fontWeight: '600', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 },
  phaseValue: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  phaseDescription: { fontSize: 12, lineHeight: 16 },
  phaseIndicator: { width: 60, height: 60, borderRadius: 30, marginLeft: 10, opacity: 0.3 },
  cardsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  infoCard: { width: '48%', borderRadius: 15, padding: 15, marginBottom: 12, alignItems: 'center' },
  cardLabel: { fontSize: 12, fontWeight: '600', marginBottom: 4, textAlign: 'center' },
  cardValue: { fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
  fertileWindowCard: { borderRadius: 15, padding: 15, marginBottom: 15, borderWidth: 2, borderColor: '#FFB6C1' },
  windowTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  windowDates: { fontSize: 14, marginBottom: 8 },
  windowDuration: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  windowInfo: { fontSize: 12, lineHeight: 16, fontStyle: 'italic' },
  cycleInfo: { borderRadius: 15, padding: 15, marginBottom: 15 },
  infoTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.1)' },
  infoLabel: { fontSize: 14, fontWeight: '500' },
  infoValue: { fontSize: 14, fontWeight: '600' },
  notificationButton: { paddingVertical: 15, borderRadius: 12, alignItems: 'center', marginBottom: 15 },
  notificationButtonText: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' },
  disclaimer: { borderRadius: 12, padding: 12, marginBottom: 10 },
  disclaimerText: { fontSize: 12, lineHeight: 16 },
});

export default ResultCard;
