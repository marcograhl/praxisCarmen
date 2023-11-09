import{N as c,O as g}from"./index.495f819a.js";import{w as s}from"./index.1321badd.js";const o=Symbol.for("inlang"),p=(t,e)=>({...t||{},[o]:e}),h=t=>t[o],y=(t,e)=>(t.params[o]=e,t),f=t=>t.params[o],w=t=>new Promise(e=>setTimeout(e,t)),l=()=>{try{return c(o)}catch(t){throw Error(`
You cannot directly access any '@inlang/sdk-js' imports in this scop. You need to pass them from 'handle' or 'load' to the function you want to call e.g.

// -- Change this -------------------------------------------------------------

import { i } from '@inlang/sdk-js'

export const load = async () => {
   return { title: getPageTitle() }
}

const getPageTitle = () => {
   console.log(i('hello.inlang'))
}

// -- To this -----------------------------------------------------------------

import { i } from '@inlang/sdk-js'

export const load = async () => {
   return { title: getPageTitle(i) }
}

const getPageTitle = (/** @type { import('@inlang/sdk-js/runtime').InlangFunction } */ i) => {
   console.log(i('hello.inlang'))
}

// ----------------------------------------------------------------------------
`,{cause:t})}},R="language",b=()=>l(),T=t=>{const e=s(t.language),a=s(t.i),r=async n=>{t.language!==n&&(await t.loadResource(n),t.switchLanguage(n),a.set(t.i),e.set(n))};g(o,{language:i(e),referenceLanguage:t.referenceLanguage,languages:t.languages,i:i(a),loadResource:t.loadResource,switchLanguage:r,route:u})},u=t=>t;function i(t){return{subscribe:t.subscribe.bind(t)}}export{p as a,y as b,b as c,T as d,h as e,f as g,R as l,w};
