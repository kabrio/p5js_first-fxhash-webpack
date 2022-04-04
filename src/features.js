import { randomInt, randomPick, randomPickEx } from './helpers'

let settings = {
  bgs: [0, 127, 255],
}

// create random values once in here
let fxrands = {
  bg: randomPick(settings.bgs),
}

let fxrands2 = {
  fg: randomPickEx(settings.bgs, 2, [fxrands.bg])[1], // pick from available options but exclude bg
}

//features object for access in index.js
export let features = {
  bg: fxrands.bg,
  fg: fxrands2.fg,
}

window.$fxhashFeatures = {
  Background: features.bg,
  'Fill Color': features.fg,
}
