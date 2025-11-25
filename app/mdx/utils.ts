/**
 * This file should contain utils that can be used
 * in server as well as client.
 */

export function getDisplayDate(date: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(new Date(date));
}

export function getMinReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 150);
  return minutes || 1;
}
