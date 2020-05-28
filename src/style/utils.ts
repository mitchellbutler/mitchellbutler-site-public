export const getPx = (base: number, units: number = 1, offset: number = 0) =>
  `${base * units - offset}px`
