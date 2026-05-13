# Testing Guide for Period Tracker App

## Manual Testing Checklist

### 1. Initial Setup & Installation
- [ ] Successfully installed all npm dependencies
- [ ] No console errors on startup
- [ ] App loads without crashing
- [ ] Splash screen displays correctly
- [ ] All tabs load without errors

### 2. Home Tab - Input Form
- [ ] Can select a date from date picker
- [ ] Date selector shows current date by default
- [ ] Date picker doesn't allow future dates
- [ ] Cycle length defaults to 28
- [ ] Can use preset buttons (21, 24, 28, 32, 35)
- [ ] Cycle length accepts valid input (1-100)
- [ ] Form rejects invalid cycle length (<1 or >100)
- [ ] Submit button triggers calculation
- [ ] Data persists after app restart

### 3. Home Tab - Results Card
- [ ] Next period date calculates correctly
- [ ] Ovulation date is 14 days before next period
- [ ] Fertile window displays correct dates
- [ ] Fertile window duration shows as 6 days
- [ ] Countdown timer shows correct days remaining
- [ ] Phase shows correct current cycle phase
- [ ] All dates format correctly (e.g., "May 13, 2026")
- [ ] Cards display in 2-column grid
- [ ] Countdown updates daily (after 24 hours)

### 4. Symptoms Tab - Logging
- [ ] Can select mood emoji (5 options)
- [ ] Can select pain level (4 options)
- [ ] Can deselect mood by tapping again
- [ ] Can deselect pain by tapping again
- [ ] Can enter notes in text area
- [ ] Can log symptom with mood only
- [ ] Can log symptom with pain only
- [ ] Can log symptom with notes only
- [ ] Alert shows when trying to log empty entry
- [ ] Success alert shows after logging
- [ ] Form clears after successful submit
- [ ] Symptoms appear in history immediately
- [ ] Symptoms show correct date
- [ ] Can delete symptom entries
- [ ] Delete confirmation dialog appears
- [ ] Symptom disappears after deletion

### 5. Calendar Tab
- [ ] Shows 6 months of calendar
- [ ] Period dates highlighted in pink
- [ ] Ovulation dates highlighted in deep pink
- [ ] Fertile window dates highlighted in light pink
- [ ] Today's date highlighted in primary color
- [ ] Legend shows all color meanings
- [ ] Dates grid displays correctly (7 columns)
- [ ] Month/year header shows correctly
- [ ] Week day headers display (Sun-Sat)
- [ ] Previous/next month days shown with reduced opacity
- [ ] Calendar updates when cycle data changes
- [ ] Colors consistent across all months

### 6. Notifications
- [ ] App requests notification permission on startup
- [ ] Permission dialog appears when needed
- [ ] "Schedule Reminders" button in results card works
- [ ] Can schedule reminders only after entering cycle info
- [ ] Success message shows after scheduling
- [ ] Notifications scheduled for:
  - [ ] 1 day before period
  - [ ] On ovulation day
  - [ ] At fertile window start
- [ ] Can test notification with test function
- [ ] Notification content displays correctly
- [ ] Notifications arrive at scheduled time

### 7. Dark Mode
- [ ] Dark mode toggle button in header works
- [ ] All colors change immediately on toggle
- [ ] Text is readable in both modes
- [ ] Status bar adjusts to theme
- [ ] Dark mode preference saves to storage
- [ ] Dark mode persists after app restart
- [ ] Cards have proper contrast in dark mode
- [ ] Input backgrounds visible in dark mode

### 8. Settings & Reset
- [ ] Settings button (⚙️) in header is clickable
- [ ] Reset confirmation dialog appears
- [ ] Cancel button dismisses dialog
- [ ] Reset clears all data (dates, symptoms)
- [ ] App resets to initial state
- [ ] Can input new data after reset
- [ ] Symptoms are deleted on reset
- [ ] Dark mode preference resets

### 9. Data Persistence
- [ ] Close and reopen app
- [ ] Last period date still set
- [ ] Cycle length still saved
- [ ] Previous symptoms visible in history
- [ ] Dark mode preference maintained
- [ ] Switch between tabs
- [ ] Data in each tab still there
- [ ] Results update correctly after edit

### 10. UI/UX & Navigation
- [ ] All 3 tabs accessible from tab bar
- [ ] Active tab highlighted with colored border
- [ ] Tab icons display correctly
- [ ] Tab labels readable
- [ ] No overlapping UI elements
- [ ] All text visible and readable
- [ ] Buttons have proper touch targets (>44x44)
- [ ] No horizontal scrolling needed (except content tabs)
- [ ] Vertical scrolling works smoothly
- [ ] Spacing and padding consistent

### 11. Validation & Error Handling
- [ ] Invalid cycle length rejected with alert
- [ ] Future date rejected with alert
- [ ] Empty symptom form rejected with alert
- [ ] All error messages clear and helpful
- [ ] App doesn't crash on bad input
- [ ] Try/catch blocks prevent crashes

### 12. Performance
- [ ] App starts in <5 seconds
- [ ] Tab switching is instant
- [ ] Calculations happen immediately
- [ ] No lag when scrolling
- [ ] No jank in animations
- [ ] 60fps smooth scrolling

### 13. Accessibility
- [ ] All text is readable (good contrast)
- [ ] Font sizes appropriate
- [ ] Buttons have adequate size
- [ ] Colors not the only indicator
- [ ] Emoji provide context
- [ ] Touch targets are large enough

### 14. Edge Cases to Test

#### Date Calculations
- [ ] Test with first day of month
- [ ] Test with last day of month
- [ ] Test with leap year date (Feb 29)
- [ ] Test with past dates (older than 1 year)
- [ ] Test with very short cycle (21 days)
- [ ] Test with very long cycle (35 days)
- [ ] Test when next period is today
- [ ] Test when period is overdue

#### Symptoms
- [ ] Log multiple symptoms same day
- [ ] Log symptom on different days
- [ ] Log very long note (>500 chars)
- [ ] Log symptom with special characters
- [ ] Delete all symptoms
- [ ] Test with 100+ symptom entries
- [ ] Test with empty notes

#### Storage
- [ ] Test with limited storage space
- [ ] Test with app backgrounding
- [ ] Test with app force-close
- [ ] Test with low memory devices

### 15. Cross-Device Testing

**Android Devices to Test:**
- [ ] Phone (6" screen)
- [ ] Tablet (10" screen)
- [ ] Different Android versions (5.0, 8.0, 12.0)
- [ ] Different RAM (512MB, 2GB, 4GB+)

**iOS Devices to Test:**
- [ ] iPhone SE (4.7" screen)
- [ ] iPhone 14+ (6.1" screen)
- [ ] iPhone Pro Max (6.7" screen)
- [ ] iPad (9.7" screen)
- [ ] Different iOS versions (13, 14, 15, 16+)

---

## Automated Test Examples

### Test Date Calculations

```javascript
// Place in a test file if using Jest
import {
  calculateNextPeriod,
  calculateOvulationDate,
  calculateFertileWindow,
  calculateDaysUntilPeriod,
} from '../utils/dateCalculations';

describe('Date Calculations', () => {
  test('calculateNextPeriod with 28-day cycle', () => {
    const lastPeriod = new Date('2026-05-13');
    const expected = new Date('2026-06-10');
    const result = calculateNextPeriod(lastPeriod, 28);
    expect(result.getTime()).toEqual(expected.getTime());
  });

  test('calculateOvulationDate is 14 days before period', () => {
    const nextPeriod = new Date('2026-06-10');
    const expected = new Date('2026-05-27');
    const result = calculateOvulationDate(nextPeriod);
    expect(result.getTime()).toEqual(expected.getTime());
  });

  test('calculateFertileWindow duration is 6 days', () => {
    const ovulation = new Date('2026-05-27');
    const result = calculateFertileWindow(ovulation);
    expect(result.duration).toBe(6);
  });

  test('calculateDaysUntilPeriod returns correct countdown', () => {
    const today = new Date();
    const nextPeriod = new Date(today);
    nextPeriod.setDate(today.getDate() + 5);
    const result = calculateDaysUntilPeriod(nextPeriod);
    expect(result).toBe(5);
  });
});
```

### Test AsyncStorage

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('AsyncStorage Operations', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  test('Can save and retrieve lastPeriodDate', async () => {
    const date = new Date('2026-05-13');
    await AsyncStorage.setItem('lastPeriodDate', date.toISOString());
    const retrieved = await AsyncStorage.getItem('lastPeriodDate');
    expect(retrieved).toBe(date.toISOString());
  });

  test('Can save and retrieve cycleLength', async () => {
    await AsyncStorage.setItem('cycleLength', '28');
    const retrieved = await AsyncStorage.getItem('cycleLength');
    expect(retrieved).toBe('28');
  });

  test('Can save and retrieve multiple symptoms', async () => {
    const symptoms = [
      { id: '1', mood: 'happy', pain: 'none' },
      { id: '2', mood: 'sad', pain: 'mild' },
    ];
    await AsyncStorage.setItem('symptoms', JSON.stringify(symptoms));
    const retrieved = await AsyncStorage.getItem('symptoms');
    expect(JSON.parse(retrieved)).toEqual(symptoms);
  });
});
```

---

## Test Scenarios by User Type

### First-Time User
1. Install app
2. See empty home screen
3. Enter last period date (today)
4. Set cycle length (28)
5. See results immediately
6. Notice fertile window
7. Grant notification permission
8. Schedule reminders
9. Check calendar to see all marked dates

### Regular User
1. Open app
2. See saved cycle information
3. Check countdown
4. Log symptoms if applicable
5. View calendar
6. Exit app

### Advanced User
1. Change cycle length
2. Update last period date
3. View detailed predictions
4. Log multiple symptoms over time
5. Identify patterns in symptoms
6. Use calendar for future planning

---

## Performance Benchmarks

### Target Metrics
- App startup: <3 seconds
- Tab switching: <200ms
- Date calculations: <10ms
- Storage operations: <50ms
- Screen render: <100ms
- Memory usage: <150MB
- Battery drain: <10% per day

---

## Bug Report Template

If you find a bug, document it as:

```markdown
## Bug Report: [Title]

**Device**: [Phone model, OS version]
**App Version**: 1.0.0
**Steps to Reproduce**:
1. [First step]
2. [Second step]
3. [etc]

**Expected Result**: [What should happen]
**Actual Result**: [What actually happened]
**Screenshots**: [If applicable]
**Console Errors**: [Any error messages]

**Reproducibility**: [Always / Sometimes / Once]
```

---

## Sign-Off Checklist

Before releasing, verify:
- [ ] All manual tests passed
- [ ] No console errors/warnings
- [ ] App works on iOS and Android
- [ ] Dark mode tested
- [ ] Notifications working
- [ ] Data persists correctly
- [ ] Performance acceptable
- [ ] No memory leaks
- [ ] No crashes found
- [ ] All edge cases handled

---

## Testing Tools

### Helpful Commands

```bash
# Clear app cache
npm start -- --clear

# Run with detailed logging
npm start

# Check for console errors (in Expo CLI)
Press 'j' to open debugger

# Test notifications
Add sendTestNotification() to test

# Inspect AsyncStorage
AsyncStorage.getAllKeys().then(keys => {
  AsyncStorage.multiGet(keys).then(store => {
    console.log('AsyncStorage:', store);
  });
});
```

---

**Remember**: Good testing = Better app = Happy users! 🎀
