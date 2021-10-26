export const contProj = {
  show: { transition: { staggerChildren: 0.1 } },
  hide: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
}
export const cardProj = {
  show: { y: [200, 0], opacity: [0, 1], scale: [0.95, 1] },
  hide: { y: [0, 200], opacity: [1, 0], scale: [1, 0.95] }
}
