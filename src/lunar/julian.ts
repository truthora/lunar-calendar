export function fromDate(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5
}

export function toDate(julian: number): Date {
  return new Date((julian - 2440587.5) * 86400000)
}