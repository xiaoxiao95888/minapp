/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {resolve, join} from 'path'

let loaderDir = resolve(join(__dirname, 'loader'))

export const loader = {
  json: join(loaderDir, 'json-loader'),
  js: join(loaderDir, 'js-loader'),
  wxml: join(loaderDir, 'wxml-loader'),
  wxss: join(loaderDir, 'wxss-loader'),
}

export * from './plugin/ExtractMinappCode'

import {px2rpx} from './postcss/px2rpx'
export const postcss = {
  px2rpx
}
