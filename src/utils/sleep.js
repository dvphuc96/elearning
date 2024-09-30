export const handleSleep = (time = 3000) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
