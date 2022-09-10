// 7 kyu Find the smallest power higher than a given a value

const findNextPower = (n, p) => (((n + 0.1) ** (1 / p) | 0) + 1) ** p;
