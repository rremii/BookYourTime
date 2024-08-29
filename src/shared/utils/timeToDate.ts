export const timeToDate = (time?: string) => {
  if (!time) return null

  const timeArray = time.split(':')
  const date = new Date(0, 0, 0, +timeArray[0], +timeArray[1])
  return date
}
