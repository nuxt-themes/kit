import type { DesignTokens } from 'browser-style-dictionary/types/browser'
import palette from './palette'
import { generateTokens } from './runtime/server/utils'
// @ts-ignore
import type { ThemeTokens, ThemeOptions } from '#theme/types'

export interface NuxtThemeMeta {
  name?: string
  description?: string
  author?: string
  url?: string
  motd?: boolean
}

export interface NuxtThemeOptions extends ThemeOptions {
  [key: string]: any
}

export interface NuxtThemeTokens extends ThemeTokens, DesignTokens {
}

export interface NuxtThemeConfig {
  meta?: NuxtThemeMeta
  options?: NuxtThemeOptions | boolean | string
  tokens?: NuxtThemeTokens | boolean | string
}

export interface ModuleOptions extends NuxtThemeConfig {
  // Module options
}

export interface ModuleHooks {
  // Module hooks
}

export interface ModulePublicRuntimeConfig {
  // Module public config
}

// Non-reactive data taken from initial boot
export interface ModulePrivateRuntimeConfig {
  themeDir?: string
  metas?: NuxtThemeMeta[]
  tokensFilePaths?: Array<string>
  optionsFilePaths?: Array<string>
}

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]>; } : T;

export { generateTokens, palette }

export const defineTheme = (options: DeepPartial<NuxtThemeOptions>): DeepPartial<NuxtThemeOptions> => options

export const defineThemeTokens = (tokens: DeepPartial<NuxtThemeTokens>): DeepPartial<NuxtThemeTokens> => tokens

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    // @ts-ignore
    theme?: ModulePublicRuntimeConfig;
  }

  interface RuntimeConfig {
    // @ts-ignore
    theme?: ModulePrivateRuntimeConfig;
  }

  interface NuxtConfig {
    // @ts-ignore
    theme?: Partial<ModuleOptions>
  }

  interface NuxtOptions {
    // @ts-ignore
    theme?: ModuleOptions
  }
}
