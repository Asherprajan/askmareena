export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatServiceNumber(num: number | string): string {
  const n = typeof num === "string" ? parseInt(num, 10) : num;
  return n < 10 ? `0${n}` : `${n}`;
}
