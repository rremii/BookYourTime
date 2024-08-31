export const timeToDate = (time?: string) => {
  if (!time) return null
  const now = new Date()
  const timeArray = time.split(':')
  const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    +timeArray[0],
    +timeArray[1],
  )
  return date
}
