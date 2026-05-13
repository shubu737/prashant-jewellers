# Period Tracking App - Setup Instructions

## Overview
This is a complete Period Tracking Mobile App built with React Native and Expo. Track your menstrual cycle, calculate ovulation dates, and log symptoms all in one beautiful app.

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

## Step-by-Step Setup

### Step 1: Initialize Expo Project
```bash
cd prashant-jewellers/period
npx create-expo-app PeriodTracker
cd PeriodTracker
```

### Step 2: Install Required Dependencies
```bash
npm install expo-notifications
npm install @react-native-async-storage/async-storage
npm install react-native-calendars
npm install react-native-date-picker
```

### Step 3: Create Project Structure
```
PeriodTracker/
├── App.js
├── components/
│   ├── InputForm.js
│   ├── ResultCard.js
│   ├── SymptomLogger.js
│   └── Calendar.js
├── utils/
│   ├── dateCalculations.js
│   └── notificationService.js
└── app.json
```

### Step 4: Copy the Code Files
Create the files as shown in the respective sections below and copy the provided code.

### Step 5: Run the App
```bash
npx expo start
```

For Android:
- Press 'a' to open Android Emulator
- Or scan QR code with Expo Go app

For iOS:
- Press 'i' to open iOS Simulator
- Or scan QR code with Expo Go app

## Features Included

✅ **Core Features:**
- Input last period start date
- Customize cycle length (default: 28 days)
- Calculate next period date
- Calculate ovulation date
- Calculate fertile window (5-day period)
- Display countdown to next period

✅ **Symptom Logging:**
- Log mood (Happy, Sad, Anxious, Irritable, Energetic)
- Log pain level (None, Mild, Moderate, Severe)
- Add custom notes
- View symptom history

✅ **UI/UX:**
- Beautiful soft pastel pink/purple theme
- Dark mode toggle
- Card-based layout
- Responsive mobile design
- Smooth animations

✅ **Advanced Features:**
- Local notifications for period reminders
- Calendar view with marked dates
- Data persistence with AsyncStorage
- Clean, intuitive interface

## How to Use

1. **Initial Setup:**
   - Open the app
   - Enter your last period start date
   - Set your cycle length (default is 28 days)
   - Tap "Calculate" to see predictions

2. **View Predictions:**
   - See your next period date
   - Check your ovulation date
   - Identify your fertile window
   - View countdown to next period

3. **Log Symptoms:**
   - Tap "Log Symptom"
   - Select mood, pain level, and add notes
   - Your symptoms are saved automatically

4. **Calendar View:**
   - Switch to calendar tab
   - See all marked dates (period, ovulation, fertile days)
   - Color-coded for easy identification

5. **Dark Mode:**
   - Toggle dark mode in settings
   - Theme persists across sessions

## Technical Details

### Date Calculation Logic
- **Next Period:** Last period date + Cycle length
- **Ovulation Date:** Next period date - 14 days
- **Fertile Window:** Ovulation date - 5 days to ovulation date + 1 day

### Data Storage
All data is stored locally using AsyncStorage:
- Last period date
- Cycle length
- Symptom logs
- Dark mode preference

### Notifications
- Set automatic reminder 1 day before next period
- Uses Expo Notifications API

## Troubleshooting

**Issue: App not starting**
- Clear cache: `npm start -- --clear`
- Reinstall node_modules: `rm -rf node_modules && npm install`

**Issue: AsyncStorage not persisting data**
- Make sure app has storage permissions
- On Android, data persists in app-specific directory

**Issue: Notifications not working**
- Grant notification permissions when prompted
- Check device notification settings
- Some emulators may not support notifications

## Customization

### Change Color Theme
Edit the colors in App.js:
```javascript
const colors = {
  primary: '#FF69B4',      // Hot pink
  secondary: '#DDA0DD',    // Plum
  accent: '#FFB6C1',       // Light pink
  // ... update other colors
};
```

### Change Notification Timing
Edit in `utils/notificationService.js`:
```javascript
// Change trigger time (currently set to 1 day before)
const daysBefore = 1; // Modify this value
```

### Adjust Fertile Window
Edit in `utils/dateCalculations.js`:
```javascript
// Change fertile window calculation
const fertileDays = 5; // Modify this value
```

## Performance Tips

- App runs entirely offline
- Minimal battery consumption
- Lightweight data storage
- No cloud sync required
- Fast calculations and rendering

## Privacy & Security

- 100% privacy: All data stays on your device
- No data collection
- No analytics
- No tracking
- No ads
- Open source ready

## Notes

- Calculations are based on standard menstrual cycle assumptions
- Ovulation typically occurs 14 days before the next period
- Fertile window extends 5 days before ovulation
- For medical advice, consult a healthcare professional
- App assumes regular cycles (for best accuracy)

## Support

For issues or feature requests:
1. Check the troubleshooting section
2. Review code comments
3. Check Expo documentation

## License

Free to use, modify, and distribute for personal use.

---

**Happy tracking! 🎀**
