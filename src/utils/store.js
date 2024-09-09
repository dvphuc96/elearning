export const storage = {
  save(name, data) {
    localStorage.setItem(name, data);
  },
  get(name) {
    return localStorage.getItem(name);
  },
  remove(name) {
    localStorage.removeItem(name);
  },
};
