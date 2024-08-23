export function formatDateDifference(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);

  const diffYears = now.getFullYear() - past.getFullYear();
  const diffMonths = now.getMonth() - past.getMonth();

  let years = diffYears;
  let months = diffMonths;

  // Если разница в месяцах отрицательная, корректируем значения
  if (months < 0) {
    years--;
    months += 12;
  }

  let yearsStr = '';
  let monthsStr = '';

  // Формирование строки для лет
  if (years > 0) {
    if (years === 1) {
      yearsStr = `${years} год`;
    } else if (years > 1 && years < 5) {
      yearsStr = `${years} года`;
    } else {
      yearsStr = `${years} лет`;
    }
  }

  // Формирование строки для месяцев
  if (months > 0) {
    if (months === 1) {
      monthsStr = `${months} месяц`;
    } else if (months > 1 && months < 5) {
      monthsStr = `${months} месяца`;
    } else {
      monthsStr = `${months} месяцев`;
    }
  }

  // Объединение строк с учетом возможного отсутствия лет или месяцев
  if (yearsStr && monthsStr) {
    return `На сайте ${yearsStr} и ${monthsStr}`;
  } else if (yearsStr) {
    return `На сайте ${yearsStr}`;
  } else if (monthsStr) {
    return `На сайте ${monthsStr}`;
  } else {
    return 'На сайте менее месяца';
  }
}
