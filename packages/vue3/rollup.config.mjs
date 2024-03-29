import terser from '@rollup/plugin-terser'
import typescript2 from 'rollup-plugin-typescript2'
import nodeResolve from '@rollup/plugin-node-resolve'
import path from 'path'

const resolve = p => path.resolve(__dirname, p)

export default {
  input: './index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'es'
    }
  ],
  external: ['vue'],
  plugins: [
    typescript2(), // 解析ts
    nodeResolve(), // 解析第三方模块
    // terser() // 压缩代码
  ]
}
