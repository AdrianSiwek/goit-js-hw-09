!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i,r,c=t("iU1Pc"),a=document.querySelector(".form");document.querySelector('input[name="delay"]'),document.querySelector('input[name="step"]'),document.querySelector('input[name="amount"]');a.addEventListener("submit",submitHandler),(i=2,r=1500,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:i,delay:r}):n({position:i,delay:r})}),r)}))).then((function(e){var n=e.position,o=e.delay;c.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;c.Notify.warning("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}();
//# sourceMappingURL=03-promises.e2bb6b0d.js.map
