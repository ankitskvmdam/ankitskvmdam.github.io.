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

/**
 * Turns heading text into its anchor id.
 *
 * Both the rendered heading and any table of contents pointing at it have to
 * agree on this, so they share one implementation rather than each spelling
 * out the rule.
 */
export function toHeadingId(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}
