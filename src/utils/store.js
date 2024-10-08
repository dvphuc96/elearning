export const storage = {
  save(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  },
  get(name) {
    const value = localStorage.getItem(name);
    return value ? JSON.parse(value) : null;
  },
  remove(name) {
    localStorage.removeItem(name);
  },
};
