export const formatDate = (inputDate: string): string => {
  if (inputDate === null || inputDate === undefined) {
    return "N/A";
  }

  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(inputDate)) {
    return "N/A";
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month, day] = inputDate.split("-");

  const monthIndex = parseInt(month) - 1;
  const dayNumber = parseInt(day);

  const formattedDate = `${months[monthIndex]} ${dayNumber}`;

  return formattedDate;
};
