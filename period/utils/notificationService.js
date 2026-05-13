import * as Notifications from 'expo-notifications';

export const configureNotifications = async () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
};

export const requestNotificationPermissions = async () => {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error requesting notification permissions:', error);
    return false;
  }
};

export const schedulePeriodReminder = async (nextPeriodDate, id = 'period-reminder') => {
  try {
    await Notifications.cancelScheduledNotificationAsync(id);

    const reminderDate = new Date(nextPeriodDate);
    reminderDate.setDate(reminderDate.getDate() - 1);
    reminderDate.setHours(9, 0, 0, 0);

    await Notifications.scheduleNotificationAsync({
      identifier: id,
      content: {
        title: '🎀 Period Reminder',
        body: 'Your period is expected tomorrow. Get ready!',
        sound: true,
        badge: 1,
        data: { eventType: 'period-reminder' },
      },
      trigger: { type: 'date', date: reminderDate },
    });

    return true;
  } catch (error) {
    console.error('Error scheduling period reminder:', error);
    return false;
  }
};

export const scheduleOvulationReminder = async (ovulationDate, id = 'ovulation-reminder') => {
  try {
    await Notifications.cancelScheduledNotificationAsync(id);

    const reminderDate = new Date(ovulationDate);
    reminderDate.setHours(9, 0, 0, 0);

    await Notifications.scheduleNotificationAsync({
      identifier: id,
      content: {
        title: '💕 Ovulation Day',
        body: 'Today is your estimated ovulation day. Fertility peak!',
        sound: true,
        badge: 1,
        data: { eventType: 'ovulation-reminder' },
      },
      trigger: { type: 'date', date: reminderDate },
    });

    return true;
  } catch (error) {
    console.error('Error scheduling ovulation reminder:', error);
    return false;
  }
};

export const scheduleFertileWindowReminder = async (fertileDayStart, id = 'fertile-window-reminder') => {
  try {
    await Notifications.cancelScheduledNotificationAsync(id);

    const reminderDate = new Date(fertileDayStart);
    reminderDate.setHours(9, 0, 0, 0);

    await Notifications.scheduleNotificationAsync({
      identifier: id,
      content: {
        title: '✨ Fertile Window Starts',
        body: "Your fertile window begins today! Good time if you're trying to conceive.",
        sound: true,
        badge: 1,
        data: { eventType: 'fertile-window-reminder' },
      },
      trigger: { type: 'date', date: reminderDate },
    });

    return true;
  } catch (error) {
    console.error('Error scheduling fertile window reminder:', error);
    return false;
  }
};

export const cancelAllReminders = async () => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    return true;
  } catch (error) {
    console.error('Error cancelling reminders:', error);
    return false;
  }
};

export const cancelReminder = async (id) => {
  try {
    await Notifications.cancelScheduledNotificationAsync(id);
    return true;
  } catch (error) {
    console.error('Error cancelling reminder:', error);
    return false;
  }
};

export const getAllScheduledNotifications = async () => {
  try {
    return await Notifications.getAllScheduledNotificationsAsync();
  } catch (error) {
    console.error('Error getting scheduled notifications:', error);
    return [];
  }
};

export const sendTestNotification = async () => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Test Notification',
        body: 'This is a test notification from Period Tracker!',
        sound: true,
        badge: 1,
      },
      trigger: null,
    });
    return true;
  } catch (error) {
    console.error('Error sending test notification:', error);
    return false;
  }
};

export const setupNotificationListeners = (callback) => {
  const foreground = Notifications.addNotificationReceivedListener((notification) => {
    callback?.(notification);
  });

  const interaction = Notifications.addNotificationResponseReceivedListener((response) => {
    callback?.(response.notification);
  });

  return () => {
    foreground.remove();
    interaction.remove();
  };
};
