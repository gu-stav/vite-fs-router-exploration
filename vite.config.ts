import inspect from 'vite-plugin-inspect'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  plugins: [
    inspect(),
    svelte()
  ],
}
