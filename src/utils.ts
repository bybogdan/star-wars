export const debounce = (
  fn: (...args: any[]) => Promise<void>,
  delay: number
) => {
  let timer: number
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    timer = setTimeout(() => fn(...args), delay)
  }
}
