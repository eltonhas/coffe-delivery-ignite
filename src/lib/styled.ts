export const ICON_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

export interface IconProps {
  iconColor: keyof typeof ICON_COLOR
}
