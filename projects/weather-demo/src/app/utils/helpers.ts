// https://github.com/nodegui/examples/blob/master/react-nodegui/weather-app-widget/src/utils/helpers.ts

export const dateFormatter = (date: Date) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day} ${monthNames[monthIndex]} ${year}`;
};
