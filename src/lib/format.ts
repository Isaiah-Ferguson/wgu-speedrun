/** "1 program" / "10 programs" — never "1 programs". */
export function plural(n: number, one: string, many = `${one}s`) {
  return `${n} ${n === 1 ? one : many}`;
}

export function money(n: number) {
  return `$${Math.round(n).toLocaleString()}`;
}

/** Two-digit section index for the mono rail labels: 1 → "01". */
export function pad2(n: number) {
  return String(n).padStart(2, "0");
}
