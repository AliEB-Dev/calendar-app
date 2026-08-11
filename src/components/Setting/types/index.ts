import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface SettingIconBadgeProps {
  icon: IconType
  bg: string
  color: string
}

export interface SettingItemProps {
    icon : IconType
    iconBg : string
    iconColor : string
    title : string
    subtitle : string
    onClick ?: ()=> void
    isLast ?: boolean
    isopen?: boolean
    children ?: ReactNode
}

export interface SettingToggleItemProps {
  icon: IconType
  iconBg: string
  iconColor: string
  title: string
  subtitle: string
  checked: boolean
  onChange: (v: boolean) => void
  isLast?: boolean
}

export interface SettingSectionProps {
  title: string
  children: React.ReactNode
}