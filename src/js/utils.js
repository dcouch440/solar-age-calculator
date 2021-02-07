export const ageConverter = (age, rate) => Math.floor(age / rate);

export const deathConverter = (age, rate, death) => {
  const total = Math.floor(death / rate) - Math.floor(age / rate);
  return (total > 0) ?
    `You have ${total} years to live.`:
    `You lived ${total * -1} years past expected!`;
};