const INVISIBLE_TEXT_REGEX = /(?:[\p{Cf}\u00AD]|\u034F)/gu;
const MULTI_SPACE_REGEX = /[^\S\r\n]{2,}/g;
const SPACE_AROUND_NEWLINE_REGEX = /[^\S\r\n]*\n[^\S\r\n]*/g;

function cleanString(value: string): string {
  return value
    .replaceAll(INVISIBLE_TEXT_REGEX, "")
    .replaceAll("\u00A0", " ")
    .replaceAll(MULTI_SPACE_REGEX, " ")
    .replaceAll(SPACE_AROUND_NEWLINE_REGEX, "\n")
    .trim();
}

export function sanitizeTextValue<T>(input: T): T {
  if (typeof input === "string") {
    return cleanString(input) as T;
  }

  if (Array.isArray(input)) {
    return input.map((item) => sanitizeTextValue(item)) as T;
  }

  if (input && typeof input === "object") {
    const output: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(
      input as Record<string, unknown>,
    )) {
      output[key] = sanitizeTextValue(value);
    }

    return output as T;
  }

  return input;
}
