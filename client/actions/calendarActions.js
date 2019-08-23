const nextMonth = (currentDate, currentMonth, currentYear, startDay, numberOfDays) => ({
  type: 'NEXT_MONTH',
  payload: {
    currentDate,
    currentMonth,
    currentYear,
    startDay,
    numberOfDays,
  },
});

export default nextMonth;
