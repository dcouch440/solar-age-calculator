export const ageConverter = (age, rate) => Math.floor(age / rate);

export const deathConverter = (age, rate, death) => {
  const total = Math.floor(death / rate) - Math.floor(age / rate);
  console.log(total);
  if (total > 0) {
    return `You have ${total} years to live.`;
  } else {
    return `You lived ${total * -1} years past expected!`;
  }
};