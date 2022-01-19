

export const arrayCount = (counts: number) => {
  let count = (Math.floor(counts / 10)) + 1
  const res = [];
  for (let i = 1; i <= count; i++) {
    res.push(`${i}`)
  }
  return res
}