import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'
import cssnano from 'cssnano'

const isProd = process.env.NODE_ENV === 'production'

export default {
  plugins: [
    postcssNesting(),
    tailwindcss(),
    autoprefixer(),
    ...(isProd ? [cssnano({ preset: 'default' })] : []),
  ],
}
