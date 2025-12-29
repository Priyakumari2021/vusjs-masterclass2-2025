import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  // Base rules
  {
    files: ['**/*.{vue.ts, tsx, mts}'],
  },
  // Disables multi-word rule ONLY for Nuxt pages
  {
    name: 'app/files-to-lint',
    files: ['src/pages/**/*.{vue,ts,mts,tsx}'],
    rules:  {
      "vue/multi-word-component-names": ["error", {
      "ignores": ["index", "[id]"]
      }]
    },
  },
  

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  skipFormatting,

  
)
