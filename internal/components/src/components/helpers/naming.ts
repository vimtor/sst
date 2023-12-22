export function sanitizeToPascalCase(str: string) {
  const strNorm = str.replace(/[^a-zA-Z0-9]/g, "");
  return strNorm.charAt(0).toUpperCase() + strNorm.slice(1);
}

export function prefixName(name: string, suffix?: string) {
  const suffixStr = suffix ?? "";

  const prefixedName = (() => {
    const L = 64 - suffixStr.length;
    const appLen = $app.name.length;
    const stageLen = $app.stage.length;
    const nameLen = name.length;

    if (appLen + stageLen + nameLen + 2 <= L) {
      return `${$app.name}-${$app.stage}-${name}`;
    }

    if (stageLen + nameLen + 1 <= L) {
      const appTruncated = $app.name.substring(0, L - stageLen - nameLen - 1);
      return appTruncated === ""
        ? `${$app.stage}-${name}`
        : `${appTruncated}-${$app.stage}-${name}`;
    }

    const stageTruncated = $app.stage.substring(
      0,
      Math.max(8, L - nameLen - 1)
    );
    const nameTruncated = name.substring(0, L - stageTruncated.length - 1);
    return `${nameTruncated}-${stageTruncated}`;
  })();

  return `${prefixedName}${suffixStr}`;
}

export function hashNumberToString(number: number, length: number) {
  const charLength = HASH_CHARS.length;
  let hash = "";
  while (number > 0) {
    hash = HASH_CHARS[number % charLength] + hash;
    number = Math.floor(number / charLength);
  }

  // Padding with 's'
  hash = hash.slice(0, length);
  while (hash.length < length) {
    hash = "s" + hash;
  }

  return hash;
}

export const HASH_CHARS = "abcdefhkmnorstuvwxz";
