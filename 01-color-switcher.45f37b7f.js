const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o=null;const a=()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t};t.addEventListener("click",(e=>{t.disabled=!0,o=setInterval(a,500)}));e.addEventListener("click",(()=>{clearInterval(o),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.45f37b7f.js.map
