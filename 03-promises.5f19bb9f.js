var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("eWCmQ");const r=document.querySelector(".form");document.querySelector('input[name="delay"]'),document.querySelector('input[name="step"]'),document.querySelector('input[name="amount"]');var d,l;r.addEventListener("submit",submitHandler),(d=2,l=1500,new Promise(((e,n)=>{setTimeout((()=>{Math.random()>.3?e({position:d,delay:l}):n({position:d,delay:l})}),l)}))).then((({position:e,delay:n})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{i.Notify.warning(`❌ Rejected promise ${e} in ${n}ms`)}));
//# sourceMappingURL=03-promises.5f19bb9f.js.map
