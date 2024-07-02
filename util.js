export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
export const isSameDay = (date1, date2) =>
	date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate();

export const getTimeByHours = (timeByMin) => {
  const hours = Math.floor(timeByMin / 60);
  const minutes = timeByMin % 60;
  return `${hours}h ${minutes}m`;
}

export const getArabicDayName = (dayOfWeek) => {
  const arabicDays = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت"
  ];

  return arabicDays[dayOfWeek];
}

export const arabicTodayName = getArabicDayName(new Date().getDay());

export const getRank = (allTime) => {
  const hours = Math.floor(allTime / 60)
  const rankValues = Object.keys(ranks)
  if (hours >= rankValues.at(-1)) {
    return {
      rankCode: rankValues.at(-1),
      rankName: ranks[rankValues.at(-1)]
    }
  }
  else {
    for (let i = 0; i < rankValues.length; i++) {
      if (hours >= +rankValues[i]) {
        continue
      }
      else {
        return {
          rankCode: rankValues[i - 1],
          rankName: ranks[rankValues[i - 1]]
        };
      }
    }
  }
}

export const ranks = {
  0: "مواطن",
  50: "جندي شجاع",
  100: "رقيب",
  150: "ملازم اول",
  200: "نقيب ⭐",
  250: "رائد",
  300: "مقدم",
  350: "عقيد",
  400: "عميد",
  450: "لواء",
  500: "فريق",
  550: "مُشير 🔱"
}

export const botCommands = {
  addTime: "/إضافة_جلسة ",
  register: "/تسجيل_بالبوت",
  showStatus: "/عرض_إحصائياتي"
}