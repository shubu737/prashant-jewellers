export const calculateNextPeriod = (lastPeriodDate, cycleLength = 28) => {
  const next = new Date(lastPeriodDate);
  next.setDate(next.getDate() + cycleLength);
  return next;
};

export const calculateOvulationDate = (nextPeriodDate) => {
  const ovulation = new Date(nextPeriodDate);
  ovulation.setDate(ovulation.getDate() - 14);
  return ovulation;
};

export const calculateFertileWindow = (ovulationDate) => {
  const start = new Date(ovulationDate);
  start.setDate(start.getDate() - 5);

  const end = new Date(ovulationDate);
  end.setDate(end.getDate() + 1);

  return { start, end, duration: 6 };
};

export const calculateDaysUntilPeriod = (nextPeriodDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const next = new Date(nextPeriodDate);
  next.setHours(0, 0, 0, 0);

  return Math.ceil((next - today) / (1000 * 60 * 60 * 24));
};

export const getCurrentPhase = (lastPeriodDate, cycleLength = 28) => {
  const dayInCycle = calculateDaysUntilPeriod(lastPeriodDate) % cycleLength;

  if (dayInCycle >= 1 && dayInCycle <= 5) return 'Menstruation';
  if (dayInCycle >= 6 && dayInCycle <= 13) return 'Follicular';
  if (dayInCycle >= 14 && dayInCycle <= 15) return 'Ovulation';
  if (dayInCycle >= 16 && dayInCycle <= 28) return 'Luteal';
  return 'Unknown';
};

export const formatDate = (date) => {
  if (!date) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const formatDateForCalendar = (date) => {
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const parseDate = (dateString) => new Date(dateString);

export const getUpcomingPeriods = (lastPeriodDate, cycleLength = 28, months = 6) => {
  return Array.from({ length: months }, (_, i) => {
    const d = new Date(lastPeriodDate);
    d.setDate(d.getDate() + cycleLength * i);
    return d;
  });
};

export const isInFertileWindow = (dateToCheck, ovulationDate) => {
  const { start, end } = calculateFertileWindow(ovulationDate);
  return dateToCheck >= start && dateToCheck <= end;
};

export const getPhaseColor = (phase) => {
  const colors = {
    Menstruation: '#FF6B9D',
    Follicular: '#FFD700',
    Ovulation: '#FF1493',
    Luteal: '#9370DB',
  };
  return colors[phase] || '#CCCCCC';
};
