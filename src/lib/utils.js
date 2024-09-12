import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function sleep(duration = 700) {
  return new Promise(res => {
    setTimeout(res, duration)
  })
}
