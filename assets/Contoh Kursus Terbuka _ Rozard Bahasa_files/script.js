(() => {
  // <stdin>
  console.log("Parted : main | shift : deffered | scope : navs | source : default | type : script | status : loaded");
  var darkmode = document.getElementById("darkmodes");
  var darkproc = () => {
    let e = darkmode.querySelectorAll(".mode"), t = Array.prototype.slice.call(e);
    t.forEach((e2) => {
      let t2 = e2.getAttribute("data-mode"), n = localStorage.getItem("darkmode");
      n == 2 ? darkmode.querySelector(".darks .icon").classList.add("open") : n == 3 ? darkmode.querySelector(".light .icon").classList.add("open") : darkmode.querySelector(".systo .icon").classList.add("open"), e2.addEventListener("click", () => {
        t2 == 1 ? (darkmode.querySelector(".systo .icon").classList.remove("open"), darkmode.querySelector(".darks .icon").classList.add("open"), document.documentElement.setAttribute("dark-mode", "dark"), localStorage.setItem("darkmode", "2")) : t2 == 2 ? (darkmode.querySelector(".darks .icon").classList.remove("open"), darkmode.querySelector(".light .icon").classList.add("open"), document.documentElement.setAttribute("dark-mode", "light"), localStorage.setItem("darkmode", "3")) : t2 == 3 && (darkmode.querySelector(".light .icon").classList.remove("open"), darkmode.querySelector(".systo .icon").classList.add("open"), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.setAttribute("dark-mode", "dark") : document.documentElement.setAttribute("dark-mode", "light"), localStorage.removeItem("darkmode"));
      });
    });
  };
  darkmode && darkproc(), console.log("Parted : main | shift : deffered | scope : foot | source : default | type : script | status : loaded"), console.log("Script : core | shift : deffered | scope : all  | source : default | type : script | status : loaded"), console.log(" Script : deffers based script loaded"), console.log("Themes : deffers default item main loaded"), console.log("Module : deffers main course javascript engine loaded");
  var main_tabs = () => {
    let t = document.querySelectorAll(".base-action"), e = Array.prototype.slice.call(t), n = document.querySelectorAll(".base-item"), s = Array.prototype.slice.call(n);
    e.forEach((t2) => {
      t2.addEventListener("click", () => {
        let n2 = t2.getAttribute("data-target");
        e.forEach((e2) => {
          e2.classList.remove("open");
        }), s.forEach((e2) => {
          e2.classList.remove("open");
        }), t2.classList.add("open"), document.getElementById(n2).classList.add("open");
      });
    });
  };
  var node_tabs = () => {
    let e = document.getElementById("node"), n = e.querySelectorAll(".node-action"), t = Array.prototype.slice.call(n), s = e.querySelectorAll(".node-item"), o = Array.prototype.slice.call(s);
    t.forEach((e2) => {
      e2.addEventListener("click", () => {
        let n2 = e2.getAttribute("data-target");
        t.forEach((e3) => {
          e3.classList.remove("open");
        }), o.forEach((e3) => {
          e3.classList.remove("open");
        }), e2.classList.add("open"), document.getElementById(n2).classList.add("open");
      });
    });
  };
  window.addEventListener("load", () => {
    main_tabs(), node_tabs();
  });
})();
