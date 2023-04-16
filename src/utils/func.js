// const minuteToSeconds = (minute) => {
//     const sec = minute / 60;
//     return sec;
//   };

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  const secondsToMinutes = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
    return result;
  };


  export {secondsToMinutes,padTo2Digits}


