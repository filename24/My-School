import { Theme } from "@types"

export function systemTheme(): Theme {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
  } catch {
    return 'dark'
  }
}