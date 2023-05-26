export const truncate = (string: string, limit: number, suffix: string = "...") => {
  if (string && string?.length > limit) string = string.substring(0, limit) + suffix;
  return string;
};
