import { ReactNode } from 'react'

export type WithChildren<T extends {} = {}> = T & { children?: ReactNode }

export type Theme = 'light' | 'dark'
