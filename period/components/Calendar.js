import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import {
  calculateOvulationDate,
  calculateFertileWindow,
  formatDateForCalendar,
  getUpcomingPeriods,
} from '../utils/dateCalculations';

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = ({ lastPeriodDate, cycleLength, colors }) => {
  const cellWidth = (Dimensions.get('window').width - 20) / 7;

  const markedDates = useMemo(() => {
    const marked = {};
    if (!lastPeriodDate || !cycleLength) return marked;

    getUpcomingPeriods(lastPeriodDate, cycleLength, 6).forEach((periodDate) => {
      for (let i = 0; i < 5; i++) {
        const d = new Date(periodDate);
        d.setDate(d.getDate() + i);
        marked[formatDateForCalendar(d)] = { color: '#FF69B4', textColor: '#FFFFFF' };
      }

      const ovulation = calculateOvulationDate(periodDate);
      const ovulationStr = formatDateForCalendar(ovulation);
      marked[ovulationStr] = { color: '#FF1493', textColor: '#FFFFFF' };

      const fertile = calculateFertileWindow(ovulation);
      for (let i = 0; i < 6; i++) {
        const d = new Date(fertile.start);
        d.setDate(d.getDate() + i);
        const str = formatDateForCalendar(d);
        if (str !== ovulationStr && !marked[str]) {
          marked[str] = { color: '#FFB6C1', textColor: '#FF1493' };
        }
      }
    });

    return marked;
  }, [lastPeriodDate, cycleLength]);

  const calendarMonths = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 6 }, (_, i) => {
      const monthDate = new Date(today.getFullYear(), today.getMonth() + i, 1);
      const year = monthDate.getFullYear();
      const month = monthDate.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrevMonth = new Date(year, month, 0).getDate();

      const days = [];

      for (let j = firstDay - 1; j >= 0; j--) {
        days.push({ day: daysInPrevMonth - j, isCurrentMonth: false });
      }

      for (let j = 1; j <= daysInMonth; j++) {
        const d = new Date(year, month, j);
        const isToday =
          d.getDate() === today.getDate() &&
          d.getMonth() === today.getMonth() &&
          d.getFullYear() === today.getFullYear();
        days.push({ day: j, isCurrentMonth: true, isToday, dateString: formatDateForCalendar(d) });
      }

      const remaining = 42 - days.length;
      for (let j = 1; j <= remaining; j++) {
        days.push({ day: j, isCurrentMonth: false });
      }

      return {
        label: monthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        key: `${year}-${month}`,
        days,
      };
    });
  }, []);

  if (!lastPeriodDate || !cycleLength) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
          Please enter your cycle information to view the calendar.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      <Text style={[styles.title, { color: colors.text }]}>📅 Cycle Calendar</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Next 6 months view</Text>

      <View style={[styles.legend, { backgroundColor: colors.cardBackground }]}>
        {[
          { color: '#FF69B4', label: 'Period' },
          { color: '#FF1493', label: 'Ovulation' },
          { color: '#FFB6C1', label: 'Fertile Window' },
          { color: colors.primary, label: 'Today' },
        ].map((item) => (
          <View key={item.label} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: item.color }]} />
            <Text style={[styles.legendText, { color: colors.text }]}>{item.label}</Text>
          </View>
        ))}
      </View>

      {calendarMonths.map((monthData) => (
        <View key={monthData.key} style={styles.monthContainer}>
          <Text style={[styles.monthTitle, { color: colors.text }]}>{monthData.label}</Text>

          <View style={styles.dayNamesRow}>
            {DAY_NAMES.map((name) => (
              <View key={name} style={[styles.dayNameCell, { width: cellWidth }]}>
                <Text style={[styles.dayNameText, { color: colors.textSecondary }]}>{name}</Text>
              </View>
            ))}
          </View>

          <View style={styles.calendarGrid}>
            {monthData.days.map((day, index) => {
              const marking = day.dateString ? markedDates[day.dateString] : null;
              const bg = !day.isCurrentMonth
                ? colors.inputBackground
                : marking
                ? marking.color
                : day.isToday
                ? colors.primary
                : colors.cardBackground;

              const textColor =
                marking && day.isCurrentMonth
                  ? marking.textColor
                  : day.isToday
                  ? '#FFFFFF'
                  : colors.text;

              return (
                <View key={index} style={[styles.dayCell, { width: cellWidth, backgroundColor: bg, opacity: day.isCurrentMonth ? 1 : 0.3 }]}>
                  <Text style={[styles.dayText, { color: textColor, fontWeight: day.isToday ? 'bold' : '500' }]}>
                    {day.day}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      ))}

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10, paddingVertical: 10 },
  emptyText: { fontSize: 16, textAlign: 'center', marginTop: 40, lineHeight: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 14, fontStyle: 'italic', marginBottom: 20 },
  legend: { borderRadius: 12, padding: 12, marginBottom: 20 },
  legendItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  legendColor: { width: 16, height: 16, borderRadius: 4, marginRight: 8 },
  legendText: { fontSize: 13, fontWeight: '500' },
  monthContainer: { marginBottom: 25 },
  monthTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  dayNamesRow: { flexDirection: 'row', marginBottom: 8 },
  dayNameCell: { alignItems: 'center', paddingVertical: 8 },
  dayNameText: { fontSize: 12, fontWeight: '600' },
  calendarGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 2 },
  dayCell: { aspectRatio: 1, margin: 1, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  dayText: { fontSize: 13 },
});

export default Calendar;
