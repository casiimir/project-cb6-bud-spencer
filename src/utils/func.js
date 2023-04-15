const minuteToSeconds = (minute) => {
  const sec = minute / 60;
  return sec;
};

const shortDescription = (str) => str.split(" ").splice(0, 4).join(" ") + "...";

export { minuteToSeconds, shortDescription };
