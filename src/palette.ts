import chroma, { Color } from 'chroma-js'

import type { DesignTokens } from '#theme/types'

export default (color: string): DesignTokens => {
  if (!color || typeof color !== 'string') {
    throw new Error('Please provide a valid "color" string parameter')
  }

  function scalePalette (baseColor: Color | string, suffixes: Array<string | number>, padding: number = 0.1) {
    const colorscale = chroma.scale(['white', baseColor, 'black']).padding(padding).colors(suffixes.length)

    const colorRange = {}

    suffixes.forEach(
      (suffix, index) => (
        colorRange[suffix] = {
          value: colorscale[index]
        }
      )
    )

    colorRange[500] = baseColor

    return colorRange
  }

  return scalePalette(color, [50, 100, 200, 300, 400, 500, 600, 700, 800, 900])
}