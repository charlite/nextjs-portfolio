/** Light: `screenshot.png`. Dark: `screenshot_dark.png` when present (caller falls back on load error). */
export function projectScreenshotUrl(
  screenshotUrl: string,
  theme: "light" | "dark",
  useLightFallback = false
): string {
  if (theme === "light" || useLightFallback) {
    return screenshotUrl;
  }
  return screenshotUrl.replace(/screenshot\.png(\?.*)?$/, "screenshot_dark.png$1");
}

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
