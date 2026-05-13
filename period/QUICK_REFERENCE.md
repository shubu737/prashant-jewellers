# Quick Reference Guide for Period Tracker App

## File Locations & Purposes

### Core Files
| File | Purpose | Key Code |
|------|---------|----------|
| `App.js` | Main app, navigation, theming | State management, tab navigation |
| `app.json` | Expo configuration | Build settings, permissions |
| `package.json` | Dependencies list | npm packages, scripts |

### Components
| File | Purpose | Props |
|------|---------|-------|
| `InputForm.js` | Date & cycle input | `onSubmit`, `colors`, `initialData` |
| `ResultCard.js` | Shows predictions | `lastPeriodDate`, `cycleLength`, `colors`, `onScheduleNotification` |
| `SymptomLogger.js` | Symptom tracking | `colors` |
| `Calendar.js` | 6-month calendar | `lastPeriodDate`, `cycleLength`, `colors` |

### Utils
| File | Purpose | Main Functions |
|------|---------|-----------------|
| `dateCalculations.js` | Date math | `calculateNextPeriod()`, `calculateOvulationDate()`, `calculateFertileWindow()` |
| `notificationService.js` | Notifications | `schedulePeriodReminder()`, `scheduleOvulationReminder()` |

---

## Common Code Snippets

### Load Data from AsyncStorage
```javascript
const loadData = async () => {
  const lastPeriod = await AsyncStorage.getItem('lastPeriodDate');
  const cycleLen = await AsyncStorage.getItem('cycleLength');
  if (lastPeriod) setLastPeriodDate(new Date(lastPeriod));
  if (cycleLen) setCycleLength(parseInt(cycleLen));
};
```

### Save Data to AsyncStorage
```javascript
const saveData = async (date, cycle) => {
  await AsyncStorage.setItem('lastPeriodDate', date.toISOString());
  await AsyncStorage.setItem('cycleLength', String(cycle));
};
```

### Calculate Cycle Dates
```javascript
const nextPeriod = calculateNextPeriod(lastPeriodDate, cycleLength);
const ovulation = calculateOvulationDate(nextPeriod);
const fertile = calculateFertileWindow(ovulation);
const daysLeft = calculateDaysUntilPeriod(nextPeriod);
```

### Schedule Notification
```javascript
const handleNotification = async () => {
  await schedulePeriodReminder(nextPeriodDate);
  await scheduleOvulationReminder(ovulationDate);
  Alert.alert('Success', 'Reminders scheduled!');
};
```

### Toggle Dark Mode
```javascript
const toggleDarkMode = async () => {
  const newMode = !isDarkMode;
  setIsDarkMode(newMode);
  await AsyncStorage.setItem('isDarkMode', JSON.stringify(newMode));
};
```

---

## Color Palette

### Light Theme
```javascript
{
  background: '#FFFFFF',      // White
  cardBackground: '#F9E5E5',  // Very light pink
  inputBackground: '#FFF5F5', // Super light pink
  text: '#333333',            // Dark gray
  textSecondary: '#666666',   // Medium gray
  primary: '#FF69B4',         // Hot pink
  secondary: '#DDA0DD',       // Plum
  accent: '#FFB6C1',          // Light pink
}
```

### Dark Theme
```javascript
{
  background: '#1A1A1A',      // Almost black
  cardBackground: '#2D2D2D',  // Dark gray
  inputBackground: '#3A3A3A', // Medium dark gray
  text: '#FFFFFF',            // White
  textSecondary: '#B0B0B0',   // Light gray
  primary: '#FF69B4',         // Hot pink (same)
  secondary: '#DDA0DD',       // Plum (same)
  accent: '#FFB6C1',          // Light pink (same)
}
```

---

## Component Props Reference

### InputForm Props
```javascript
<InputForm
  onSubmit={(data) => {
    // data: { lastPeriodDate: Date, cycleLength: number }
  }}
  colors={colors}
  initialData={{
    lastPeriodDate: new Date(),
    cycleLength: 28
  }}
/>
```

### ResultCard Props
```javascript
<ResultCard
  lastPeriodDate={new Date()}
  cycleLength={28}
  colors={colors}
  onScheduleNotification={(nextPeriod, ovulation, fertileStart) => {
    // Handle notification scheduling
  }}
/>
```

### SymptomLogger Props
```javascript
<SymptomLogger colors={colors} />
```

### Calendar Props
```javascript
<Calendar
  lastPeriodDate={new Date()}
  cycleLength={28}
  colors={colors}
/>
```

---

## State Structure

### App.js Main State
```javascript
{
  isLoading: boolean,
  isDarkMode: boolean,
  lastPeriodDate: Date | null,
  cycleLength: number,
  activeTab: 'home' | 'symptoms' | 'calendar',
  hasNotificationPermission: boolean
}
```

### SymptomLogger Symptoms Array
```javascript
[
  {
    id: string,              // Unique ID (timestamp)
    date: string,            // ISO date string
    mood: string,            // ID from MOOD_OPTIONS
    pain: string,            // ID from PAIN_OPTIONS
    notes: string            // User notes
  }
]
```

---

## Function Signatures

### dateCalculations.js Functions

```typescript
calculateNextPeriod(
  lastPeriodDate: Date,
  cycleLength?: number = 28
): Date

calculateOvulationDate(nextPeriodDate: Date): Date

calculateFertileWindow(ovulationDate: Date): {
  start: Date,
  end: Date,
  duration: number
}

calculateDaysUntilPeriod(nextPeriodDate: Date): number

formatDate(date: Date): string

formatDateForCalendar(date: Date): string  // "2026-05-13"

getPhaseColor(phase: string): string

getCurrentPhase(
  lastPeriodDate: Date,
  cycleLength?: number = 28
): string
```

### notificationService.js Functions

```typescript
configureNotifications(): Promise<void>

requestNotificationPermissions(): Promise<boolean>

schedulePeriodReminder(
  nextPeriodDate: Date,
  notificationId?: string = 'period-reminder'
): Promise<boolean>

scheduleOvulationReminder(
  ovulationDate: Date,
  notificationId?: string = 'ovulation-reminder'
): Promise<boolean>

scheduleFertileWindowReminder(
  fertileDayStart: Date,
  notificationId?: string = 'fertile-window-reminder'
): Promise<boolean>

cancelAllReminders(): Promise<boolean>

sendTestNotification(): Promise<boolean>
```

---

## StyleSheet Naming Conventions

All components follow consistent naming:

```javascript
// Container styles
container, header, content, footer

// Text styles
title, subtitle, label, text, value

// Button styles
button, primaryButton, secondaryButton

// Card styles
card, infoCard, warningCard

// Input styles
input, textInput, dateButton

// Layout styles
row, column, grid, flexCenter

// Component-specific
phaseCard, countdownCard, moodButton
```

---

## Debug Tips

### Check Stored Data
```javascript
// Add to App.js useEffect
AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (err, store) => {
    console.log('All stored data:', store);
  });
});
```

### Test Calculations
```javascript
const testDate = new Date('2026-05-13');
const next = calculateNextPeriod(testDate, 28);
console.log('Next period:', formatDate(next));
```

### Verify Notifications
```javascript
const scheduled = await getAllScheduledNotifications();
console.log('Scheduled notifications:', scheduled);
```

### Check Permissions
```javascript
const { status } = await Notifications.requestPermissionsAsync();
console.log('Notification permission:', status);
```

---

## Keyboard Types & Input Rules

```javascript
// Number input (cycle length)
keyboardType="number-pad"
maxLength={3}

// Date picker
mode="date"
maximumDate={new Date()}

// Text input (notes)
multiline
numberOfLines={4}
textAlignVertical="top"
```

---

## Navigation Structure

```
App (Root)
├── Header
│   ├── Dark Mode Toggle
│   └── Settings (Reset)
├── Content (Active Tab)
│   ├── Home Tab
│   │   ├── InputForm
│   │   └── ResultCard
│   ├── Symptoms Tab
│   │   └── SymptomLogger
│   └── Calendar Tab
│       └── Calendar
└── TabBar
    ├── Home Button
    ├── Symptoms Button
    └── Calendar Button
```

---

## Performance Tips

1. **Use FlatList** for long lists (SymptomLogger does this)
2. **Memoize callbacks** with useCallback if needed
3. **Avoid inline objects** in component props
4. **Cache calculations** in useState
5. **Lazy load images** if you add them
6. **Use React.memo** for heavy components
7. **Debounce search** if you add search feature

---

## Common Mistakes to Avoid

❌ **Don't:**
- Mix date formats (always use ISO string for storage)
- Forget to save to AsyncStorage when updating state
- Use hardcoded colors (use theme object)
- Create objects in StyleSheet
- Call functions directly in render
- Forget cleanup in useEffect

✅ **Do:**
- Always save to AsyncStorage with state updates
- Use color variables from theme
- Memoize complex calculations
- Use useCallback for event handlers
- Clean up effects with return function
- Parse dates properly from AsyncStorage

---

## Testing Scenarios

### Test Cycle Calculation
1. Set last period: May 1, 2026
2. Cycle length: 28 days
3. Next period should be: May 29, 2026
4. Ovulation should be: May 15, 2026
5. Fertile window: May 10-15, 2026

### Test Notification
1. Grant permission when prompted
2. Tap "Schedule Reminders"
3. Check device notification settings
4. Restart app to verify reminders persist

### Test Dark Mode
1. Toggle dark mode button
2. Check colors change immediately
3. Close and reopen app
4. Verify dark mode is still enabled

### Test Symptom Logging
1. Select mood and pain level
2. Add notes
3. Tap "Log Symptom"
4. Check symptom appears in history
5. Delete symptom and verify removal

---

## Deployment Commands

```bash
# Build APK (Android)
eas build --platform android --type apk

# Build App Bundle (Android)
eas build --platform android

# Build for iOS
eas build --platform ios

# Publish update
eas update

# View build status
eas build:list
```

---

## File Size Goals

- Source code: <100KB
- Minified bundle: <50KB
- Final APK: 40-50MB
- Final IPA: 30-40MB

---

## Useful Links

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [AsyncStorage API](https://react-native-async-storage.github.io/async-storage/)
- [React Hooks API](https://react.dev/reference/react)

---

**Remember**: Keep it simple, maintain code quality, and always test on device! 🎀
