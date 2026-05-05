var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
        new MutationObserver((o) => {
          for (const l of o) if (l.type === "childList") for (const s of l.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function t(o) {
          const l = {};
          return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
        }
        function n(o) {
          if (o.ep) return;
          o.ep = true;
          const l = t(o);
          fetch(o.href, l);
        }
      })();
      function Z() {
      }
      function vt(x, e) {
        for (const t in e) x[t] = e[t];
        return x;
      }
      function tl(x) {
        return x();
      }
      function jx() {
        return /* @__PURE__ */ Object.create(null);
      }
      function l0(x) {
        x.forEach(tl);
      }
      function zt(x) {
        return typeof x == "function";
      }
      function F0(x, e) {
        return x != x ? e == e : x !== e || x && typeof x == "object" || typeof x == "function";
      }
      let ft;
      function Vx(x, e) {
        return x === e ? true : (ft || (ft = document.createElement("a")), ft.href = e, x === ft.href);
      }
      function es(x) {
        return Object.keys(x).length === 0;
      }
      function xl(x, ...e) {
        if (x == null) {
          for (const n of e) n(void 0);
          return Z;
        }
        const t = x.subscribe(...e);
        return t.unsubscribe ? () => t.unsubscribe() : t;
      }
      function O0(x, e, t) {
        x.$$.on_destroy.push(xl(e, t));
      }
      function Gx(x, e, t) {
        return x.set(t), e;
      }
      function Q0(x) {
        return x && zt(x.destroy) ? x.destroy : Z;
      }
      function i(x, e) {
        x.appendChild(e);
      }
      function T(x, e, t) {
        x.insertBefore(e, t || null);
      }
      function P(x) {
        x.parentNode && x.parentNode.removeChild(x);
      }
      function j0(x, e) {
        for (let t = 0; t < x.length; t += 1) x[t] && x[t].d(e);
      }
      function f(x) {
        return document.createElement(x);
      }
      function z(x) {
        return document.createTextNode(x);
      }
      function g() {
        return z(" ");
      }
      function X0() {
        return z("");
      }
      function U(x, e, t, n) {
        return x.addEventListener(e, t, n), () => x.removeEventListener(e, t, n);
      }
      function re(x) {
        return function(e) {
          return e.preventDefault(), x.call(this, e);
        };
      }
      function ts(x) {
        return function(e) {
          return e.stopPropagation(), x.call(this, e);
        };
      }
      function c(x, e, t) {
        t == null ? x.removeAttribute(e) : x.getAttribute(e) !== t && x.setAttribute(e, t);
      }
      function xs(x) {
        return Array.from(x.childNodes);
      }
      function V(x, e) {
        e = "" + e, x.data !== e && (x.data = e);
      }
      function x0(x, e) {
        x.value = e ?? "";
      }
      function e0(x, e, t) {
        x.classList.toggle(e, !!t);
      }
      function ns(x, e, { bubbles: t = false, cancelable: n = false } = {}) {
        return new CustomEvent(x, {
          detail: e,
          bubbles: t,
          cancelable: n
        });
      }
      function _t(x, e) {
        return new x(e);
      }
      let Qe;
      function je(x) {
        Qe = x;
      }
      function qt() {
        if (!Qe) throw new Error("Function called outside component initialization");
        return Qe;
      }
      function N0(x) {
        qt().$$.on_mount.push(x);
      }
      function os(x) {
        qt().$$.after_update.push(x);
      }
      function Rt(x) {
        qt().$$.on_destroy.push(x);
      }
      function nl() {
        const x = qt();
        return (e, t, { cancelable: n = false } = {}) => {
          const o = x.$$.callbacks[e];
          if (o) {
            const l = ns(e, t, {
              cancelable: n
            });
            return o.slice().forEach((s) => {
              s.call(x, l);
            }), !l.defaultPrevented;
          }
          return true;
        };
      }
      function ax(x, e) {
        const t = x.$$.callbacks[e.type];
        t && t.slice().forEach((n) => n.call(this, e));
      }
      const Pe = [], kt = [];
      let Te = [];
      const Kx = [], ol = Promise.resolve();
      let ix = false;
      function ll() {
        ix || (ix = true, ol.then(rl));
      }
      function sl() {
        return ll(), ol;
      }
      function cx(x) {
        Te.push(x);
      }
      const Wt = /* @__PURE__ */ new Set();
      let be = 0;
      function rl() {
        if (be !== 0) return;
        const x = Qe;
        do {
          try {
            for (; be < Pe.length; ) {
              const e = Pe[be];
              be++, je(e), ls(e.$$);
            }
          } catch (e) {
            throw Pe.length = 0, be = 0, e;
          }
          for (je(null), Pe.length = 0, be = 0; kt.length; ) kt.pop()();
          for (let e = 0; e < Te.length; e += 1) {
            const t = Te[e];
            Wt.has(t) || (Wt.add(t), t());
          }
          Te.length = 0;
        } while (Pe.length);
        for (; Kx.length; ) Kx.pop()();
        ix = false, Wt.clear(), je(x);
      }
      function ls(x) {
        if (x.fragment !== null) {
          x.update(), l0(x.before_update);
          const e = x.dirty;
          x.dirty = [
            -1
          ], x.fragment && x.fragment.p(x.ctx, e), x.after_update.forEach(cx);
        }
      }
      function ss(x) {
        const e = [], t = [];
        Te.forEach((n) => x.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), Te = e;
      }
      const Ft = /* @__PURE__ */ new Set();
      let Ce;
      function qe() {
        Ce = {
          r: 0,
          c: [],
          p: Ce
        };
      }
      function Re() {
        Ce.r || l0(Ce.c), Ce = Ce.p;
      }
      function f0(x, e) {
        x && x.i && (Ft.delete(x), x.i(e));
      }
      function C0(x, e, t, n) {
        if (x && x.o) {
          if (Ft.has(x)) return;
          Ft.add(x), Ce.c.push(() => {
            Ft.delete(x), n && (t && x.d(1), n());
          }), x.o(e);
        } else n && n();
      }
      function d0(x) {
        return x?.length !== void 0 ? x : Array.from(x);
      }
      function rs(x, e) {
        x.d(1), e.delete(x.key);
      }
      function as(x, e, t, n, o, l, s, r, a, u, E, d) {
        let C = x.length, B = l.length, A = C;
        const F = {};
        for (; A--; ) F[x[A].key] = A;
        const p = [], h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), b = [];
        for (A = B; A--; ) {
          const k = d(o, l, A), w = t(k);
          let y = s.get(w);
          y ? b.push(() => y.p(k, e)) : (y = u(w, k), y.c()), h.set(w, p[A] = y), w in F && v.set(w, Math.abs(A - F[w]));
        }
        const _ = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set();
        function D(k) {
          f0(k, 1), k.m(r, E), s.set(k.key, k), E = k.first, B--;
        }
        for (; C && B; ) {
          const k = p[B - 1], w = x[C - 1], y = k.key, S = w.key;
          k === w ? (E = k.first, C--, B--) : h.has(S) ? !s.has(y) || _.has(y) ? D(k) : m.has(S) ? C-- : v.get(y) > v.get(S) ? (m.add(y), D(k)) : (_.add(S), C--) : (a(w, s), C--);
        }
        for (; C--; ) {
          const k = x[C];
          h.has(k.key) || a(k, s);
        }
        for (; B; ) D(p[B - 1]);
        return l0(b), p;
      }
      function bt(x, e) {
        const t = {}, n = {}, o = {
          $$scope: 1
        };
        let l = x.length;
        for (; l--; ) {
          const s = x[l], r = e[l];
          if (r) {
            for (const a in s) a in r || (n[a] = 1);
            for (const a in r) o[a] || (t[a] = r[a], o[a] = 1);
            x[l] = r;
          } else for (const a in s) o[a] = 1;
        }
        for (const s in n) s in t || (t[s] = void 0);
        return t;
      }
      function gt(x) {
        return typeof x == "object" && x !== null ? x : {};
      }
      function w0(x) {
        x && x.c();
      }
      function k0(x, e, t) {
        const { fragment: n, after_update: o } = x.$$;
        n && n.m(e, t), cx(() => {
          const l = x.$$.on_mount.map(tl).filter(zt);
          x.$$.on_destroy ? x.$$.on_destroy.push(...l) : l0(l), x.$$.on_mount = [];
        }), o.forEach(cx);
      }
      function b0(x, e) {
        const t = x.$$;
        t.fragment !== null && (ss(t.after_update), l0(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
      }
      function is(x, e) {
        x.$$.dirty[0] === -1 && (Pe.push(x), ll(), x.$$.dirty.fill(0)), x.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function p0(x, e, t, n, o, l, s = null, r = [
        -1
      ]) {
        const a = Qe;
        je(x);
        const u = x.$$ = {
          fragment: null,
          ctx: [],
          props: l,
          update: Z,
          not_equal: o,
          bound: jx(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (a ? a.$$.context : [])),
          callbacks: jx(),
          dirty: r,
          skip_bound: false,
          root: e.target || a.$$.root
        };
        s && s(u.root);
        let E = false;
        if (u.ctx = t ? t(x, e.props || {}, (d, C, ...B) => {
          const A = B.length ? B[0] : C;
          return u.ctx && o(u.ctx[d], u.ctx[d] = A) && (!u.skip_bound && u.bound[d] && u.bound[d](A), E && is(x, d)), C;
        }) : [], u.update(), E = true, l0(u.before_update), u.fragment = n ? n(u.ctx) : false, e.target) {
          if (e.hydrate) {
            const d = xs(e.target);
            u.fragment && u.fragment.l(d), d.forEach(P);
          } else u.fragment && u.fragment.c();
          e.intro && f0(x.$$.fragment), k0(x, e.target, e.anchor), rl();
        }
        je(a);
      }
      class m0 {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          b0(this, 1), this.$destroy = Z;
        }
        $on(e, t) {
          if (!zt(t)) return Z;
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(t), () => {
            const o = n.indexOf(t);
            o !== -1 && n.splice(o, 1);
          };
        }
        $set(e) {
          this.$$set && !es(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const cs = "4", ge = [];
      function al(x, e) {
        return {
          subscribe: K0(x, e).subscribe
        };
      }
      function K0(x, e = Z) {
        let t;
        const n = /* @__PURE__ */ new Set();
        function o(r) {
          if (F0(x, r) && (x = r, t)) {
            const a = !ge.length;
            for (const u of n) u[1](), ge.push(u, x);
            if (a) {
              for (let u = 0; u < ge.length; u += 2) ge[u][0](ge[u + 1]);
              ge.length = 0;
            }
          }
        }
        function l(r) {
          o(r(x));
        }
        function s(r, a = Z) {
          const u = [
            r,
            a
          ];
          return n.add(u), n.size === 1 && (t = e(o, l) || Z), r(x), () => {
            n.delete(u), n.size === 0 && t && (t(), t = null);
          };
        }
        return {
          set: o,
          update: l,
          subscribe: s
        };
      }
      function il(x, e, t) {
        const n = !Array.isArray(x), o = n ? [
          x
        ] : x;
        if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const l = e.length < 2;
        return al(t, (s, r) => {
          let a = false;
          const u = [];
          let E = 0, d = Z;
          const C = () => {
            if (E) return;
            d();
            const A = e(n ? u[0] : u, s, r);
            l ? s(A) : d = zt(A) ? A : Z;
          }, B = o.map((A, F) => xl(A, (p) => {
            u[F] = p, E &= ~(1 << F), a && C();
          }, () => {
            E |= 1 << F;
          }));
          return a = true, C(), function() {
            l0(B), d(), a = false;
          };
        });
      }
      const us = typeof localStorage < "u" ? localStorage.getItem("theme") : null, cl = us ?? "light", Dt = K0(cl);
      typeof document < "u" && document.documentElement.setAttribute("data-theme", cl);
      Dt.subscribe((x) => {
        typeof localStorage < "u" && localStorage.setItem("theme", x), typeof document < "u" && document.documentElement.setAttribute("data-theme", x);
      });
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add(cs);
      function Es(x, e) {
        if (x instanceof RegExp) return {
          keys: false,
          pattern: x
        };
        var t, n, o, l, s = [], r = "", a = x.split("/");
        for (a[0] || a.shift(); o = a.shift(); ) t = o[0], t === "*" ? (s.push("wild"), r += "/(.*)") : t === ":" ? (n = o.indexOf("?", 1), l = o.indexOf(".", 1), s.push(o.substring(1, ~n ? n : ~l ? l : o.length)), r += ~n && !~l ? "(?:/([^/]+?))?" : "/([^/]+?)", ~l && (r += (~n ? "?" : "") + "\\" + o.substring(l))) : r += "/" + o;
        return {
          keys: s,
          pattern: new RegExp("^" + r + "/?$", "i")
        };
      }
      function fs(x) {
        let e, t, n;
        const o = [
          x[2]
        ];
        var l = x[0];
        function s(r, a) {
          let u = {};
          for (let E = 0; E < o.length; E += 1) u = vt(u, o[E]);
          return a !== void 0 && a & 4 && (u = vt(u, bt(o, [
            gt(r[2])
          ]))), {
            props: u
          };
        }
        return l && (e = _t(l, s(x)), e.$on("routeEvent", x[7])), {
          c() {
            e && w0(e.$$.fragment), t = X0();
          },
          m(r, a) {
            e && k0(e, r, a), T(r, t, a), n = true;
          },
          p(r, a) {
            if (a & 1 && l !== (l = r[0])) {
              if (e) {
                qe();
                const u = e;
                C0(u.$$.fragment, 1, 0, () => {
                  b0(u, 1);
                }), Re();
              }
              l ? (e = _t(l, s(r, a)), e.$on("routeEvent", r[7]), w0(e.$$.fragment), f0(e.$$.fragment, 1), k0(e, t.parentNode, t)) : e = null;
            } else if (l) {
              const u = a & 4 ? bt(o, [
                gt(r[2])
              ]) : {};
              e.$set(u);
            }
          },
          i(r) {
            n || (e && f0(e.$$.fragment, r), n = true);
          },
          o(r) {
            e && C0(e.$$.fragment, r), n = false;
          },
          d(r) {
            r && P(t), e && b0(e, r);
          }
        };
      }
      function ds(x) {
        let e, t, n;
        const o = [
          {
            params: x[1]
          },
          x[2]
        ];
        var l = x[0];
        function s(r, a) {
          let u = {};
          for (let E = 0; E < o.length; E += 1) u = vt(u, o[E]);
          return a !== void 0 && a & 6 && (u = vt(u, bt(o, [
            a & 2 && {
              params: r[1]
            },
            a & 4 && gt(r[2])
          ]))), {
            props: u
          };
        }
        return l && (e = _t(l, s(x)), e.$on("routeEvent", x[6])), {
          c() {
            e && w0(e.$$.fragment), t = X0();
          },
          m(r, a) {
            e && k0(e, r, a), T(r, t, a), n = true;
          },
          p(r, a) {
            if (a & 1 && l !== (l = r[0])) {
              if (e) {
                qe();
                const u = e;
                C0(u.$$.fragment, 1, 0, () => {
                  b0(u, 1);
                }), Re();
              }
              l ? (e = _t(l, s(r, a)), e.$on("routeEvent", r[6]), w0(e.$$.fragment), f0(e.$$.fragment, 1), k0(e, t.parentNode, t)) : e = null;
            } else if (l) {
              const u = a & 6 ? bt(o, [
                a & 2 && {
                  params: r[1]
                },
                a & 4 && gt(r[2])
              ]) : {};
              e.$set(u);
            }
          },
          i(r) {
            n || (e && f0(e.$$.fragment, r), n = true);
          },
          o(r) {
            e && C0(e.$$.fragment, r), n = false;
          },
          d(r) {
            r && P(t), e && b0(e, r);
          }
        };
      }
      function Bs(x) {
        let e, t, n, o;
        const l = [
          ds,
          fs
        ], s = [];
        function r(a, u) {
          return a[1] ? 0 : 1;
        }
        return e = r(x), t = s[e] = l[e](x), {
          c() {
            t.c(), n = X0();
          },
          m(a, u) {
            s[e].m(a, u), T(a, n, u), o = true;
          },
          p(a, [u]) {
            let E = e;
            e = r(a), e === E ? s[e].p(a, u) : (qe(), C0(s[E], 1, 1, () => {
              s[E] = null;
            }), Re(), t = s[e], t ? t.p(a, u) : (t = s[e] = l[e](a), t.c()), f0(t, 1), t.m(n.parentNode, n));
          },
          i(a) {
            o || (f0(t), o = true);
          },
          o(a) {
            C0(t), o = false;
          },
          d(a) {
            a && P(n), s[e].d(a);
          }
        };
      }
      function Yx() {
        const x = window.location.href.indexOf("#/");
        let e = x > -1 ? window.location.href.substr(x + 1) : "/";
        const t = e.indexOf("?");
        let n = "";
        return t > -1 && (n = e.substr(t + 1), e = e.substr(0, t)), {
          location: e,
          querystring: n
        };
      }
      const mx = al(null, function(e) {
        e(Yx());
        const t = () => {
          e(Yx());
        };
        return window.addEventListener("hashchange", t, false), function() {
          window.removeEventListener("hashchange", t, false);
        };
      }), Cs = il(mx, (x) => x.location);
      il(mx, (x) => x.querystring);
      const Jx = K0(void 0);
      async function i0(x) {
        if (!x || x.length < 1 || x.charAt(0) != "/" && x.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await sl(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (x.charAt(0) == "#" ? "" : "#") + x;
      }
      function As(x) {
        x ? window.scrollTo(x.__svelte_spa_router_scrollX, x.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function Fs(x, e, t) {
        let { routes: n = {} } = e, { prefix: o = "" } = e, { restoreScrollState: l = false } = e;
        class s {
          constructor(m, D) {
            if (!D || typeof D != "function" && (typeof D != "object" || D._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!m || typeof m == "string" && (m.length < 1 || m.charAt(0) != "/" && m.charAt(0) != "*") || typeof m == "object" && !(m instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: k, keys: w } = Es(m);
            this.path = m, typeof D == "object" && D._sveltesparouter === true ? (this.component = D.component, this.conditions = D.conditions || [], this.userData = D.userData, this.props = D.props || {}) : (this.component = () => Promise.resolve(D), this.conditions = [], this.props = {}), this._pattern = k, this._keys = w;
          }
          match(m) {
            if (o) {
              if (typeof o == "string") if (m.startsWith(o)) m = m.substr(o.length) || "/";
              else return null;
              else if (o instanceof RegExp) {
                const y = m.match(o);
                if (y && y[0]) m = m.substr(y[0].length) || "/";
                else return null;
              }
            }
            const D = this._pattern.exec(m);
            if (D === null) return null;
            if (this._keys === false) return D;
            const k = {};
            let w = 0;
            for (; w < this._keys.length; ) {
              try {
                k[this._keys[w]] = decodeURIComponent(D[w + 1] || "") || null;
              } catch {
                k[this._keys[w]] = null;
              }
              w++;
            }
            return k;
          }
          async checkConditions(m) {
            for (let D = 0; D < this.conditions.length; D++) if (!await this.conditions[D](m)) return false;
            return true;
          }
        }
        const r = [];
        n instanceof Map ? n.forEach((_, m) => {
          r.push(new s(m, _));
        }) : Object.keys(n).forEach((_) => {
          r.push(new s(_, n[_]));
        });
        let a = null, u = null, E = {};
        const d = nl();
        async function C(_, m) {
          await sl(), d(_, m);
        }
        let B = null, A = null;
        l && (A = (_) => {
          _.state && (_.state.__svelte_spa_router_scrollY || _.state.__svelte_spa_router_scrollX) ? B = _.state : B = null;
        }, window.addEventListener("popstate", A), os(() => {
          As(B);
        }));
        let F = null, p = null;
        const h = mx.subscribe(async (_) => {
          F = _;
          let m = 0;
          for (; m < r.length; ) {
            const D = r[m].match(_.location);
            if (!D) {
              m++;
              continue;
            }
            const k = {
              route: r[m].path,
              location: _.location,
              querystring: _.querystring,
              userData: r[m].userData,
              params: D && typeof D == "object" && Object.keys(D).length ? D : null
            };
            if (!await r[m].checkConditions(k)) {
              t(0, a = null), p = null, C("conditionsFailed", k);
              return;
            }
            C("routeLoading", Object.assign({}, k));
            const w = r[m].component;
            if (p != w) {
              w.loading ? (t(0, a = w.loading), p = w, t(1, u = w.loadingParams), t(2, E = {}), C("routeLoaded", Object.assign({}, k, {
                component: a,
                name: a.name,
                params: u
              }))) : (t(0, a = null), p = null);
              const y = await w();
              if (_ != F) return;
              t(0, a = y && y.default || y), p = w;
            }
            D && typeof D == "object" && Object.keys(D).length ? t(1, u = D) : t(1, u = null), t(2, E = r[m].props), C("routeLoaded", Object.assign({}, k, {
              component: a,
              name: a.name,
              params: u
            })).then(() => {
              Jx.set(u);
            });
            return;
          }
          t(0, a = null), p = null, Jx.set(void 0);
        });
        Rt(() => {
          h(), A && window.removeEventListener("popstate", A);
        });
        function v(_) {
          ax.call(this, x, _);
        }
        function b(_) {
          ax.call(this, x, _);
        }
        return x.$$set = (_) => {
          "routes" in _ && t(3, n = _.routes), "prefix" in _ && t(4, o = _.prefix), "restoreScrollState" in _ && t(5, l = _.restoreScrollState);
        }, x.$$.update = () => {
          x.$$.dirty & 32 && (history.scrollRestoration = l ? "manual" : "auto");
        }, [
          a,
          u,
          E,
          n,
          o,
          l,
          v,
          b
        ];
      }
      class Ds extends m0 {
        constructor(e) {
          super(), p0(this, e, Fs, Bs, F0, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const ps = "/assets/peachsafe_core_wasm_bg-C8H6g175.wasm", ms = async (x = {}, e) => {
        let t;
        if (e.startsWith("data:")) {
          const n = e.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(n, "base64");
          else if (typeof atob == "function") {
            const l = atob(n);
            o = new Uint8Array(l.length);
            for (let s = 0; s < l.length; s++) o[s] = l.charCodeAt(s);
          } else throw new Error("Cannot decode base64-encoded data URL");
          t = await WebAssembly.instantiate(o, x);
        } else {
          const n = await fetch(e), o = n.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(n, x);
          else {
            const l = await n.arrayBuffer();
            t = await WebAssembly.instantiate(l, x);
          }
        }
        return t.instance.exports;
      };
      function hs(x, e) {
        const t = A0.aesGcmDecrypt(x, e);
        if (t[2]) throw y0(t[1]);
        return y0(t[0]);
      }
      function vs(x, e) {
        const t = A0.aesGcmEncrypt(x, e);
        if (t[2]) throw y0(t[1]);
        return y0(t[0]);
      }
      function _s(x, e) {
        const t = fl(x, A0.__wbindgen_malloc, A0.__wbindgen_realloc), n = wt, o = A0.argon2idDerive(t, n, e);
        if (o[2]) throw y0(o[1]);
        return y0(o[0]);
      }
      function ks(x) {
        const e = A0.deriveAlertKey(x);
        if (e[2]) throw y0(e[1]);
        return y0(e[0]);
      }
      function bs(x, e) {
        const t = A0.deriveEncounterToken(x, e);
        if (t[2]) throw y0(t[1]);
        return y0(t[0]);
      }
      function gs(x) {
        const e = A0.ed25519PubkeyFromSeed(x);
        if (e[2]) throw y0(e[1]);
        return y0(e[0]);
      }
      function ws(x, e) {
        const t = A0.ed25519Sign(x, e);
        if (t[2]) throw y0(t[1]);
        return y0(t[0]);
      }
      function ys() {
        const x = A0.generateEphemeralKeypair();
        if (x[2]) throw y0(x[1]);
        return y0(x[0]);
      }
      function Ps(x) {
        return A0.generateRandomBytes(x);
      }
      function ul(x) {
        return A0.sha256(x);
      }
      function Ts(x, e, t) {
        const n = fl(x, A0.__wbindgen_malloc, A0.__wbindgen_realloc), o = wt, l = A0.solvePoW(n, o, e, t);
        if (l[2]) throw y0(l[1]);
        return y0(l[0]);
      }
      function Ss(x) {
        return typeof x == "function";
      }
      function Is(x) {
        const e = x;
        return typeof e == "object" && e !== null;
      }
      function Ms(x) {
        return typeof x == "string";
      }
      function Ls(x) {
        return x === void 0;
      }
      function Ns(x, e) {
        throw new Error(El(x, e));
      }
      function zs() {
        return et(function(x, e, t) {
          return x.call(e, t);
        }, arguments);
      }
      function qs(x) {
        return x.crypto;
      }
      function Rs() {
        return et(function(x, e) {
          x.getRandomValues(e);
        }, arguments);
      }
      function Os(x) {
        return x.length;
      }
      function Hs(x) {
        return x.msCrypto;
      }
      function Us() {
        return new Object();
      }
      function js(x) {
        return new Uint8Array(x >>> 0);
      }
      function Vs(x) {
        return x.node;
      }
      function Gs(x) {
        return x.process;
      }
      function Ks(x, e, t) {
        Uint8Array.prototype.set.call(hx(x, e), t);
      }
      function Ys() {
        return et(function(x, e) {
          x.randomFillSync(e);
        }, arguments);
      }
      function Js() {
        return et(function() {
          return module.require;
        }, arguments);
      }
      function Qs() {
        return et(function(x, e, t) {
          return Reflect.set(x, e, t);
        }, arguments);
      }
      function Ws(x, e, t) {
        x.set(hx(e, t));
      }
      function Xs() {
        const x = typeof global > "u" ? null : global;
        return Ot(x) ? 0 : $e(x);
      }
      function Zs() {
        const x = typeof globalThis > "u" ? null : globalThis;
        return Ot(x) ? 0 : $e(x);
      }
      function $s() {
        const x = typeof self > "u" ? null : self;
        return Ot(x) ? 0 : $e(x);
      }
      function er() {
        const x = typeof window > "u" ? null : window;
        return Ot(x) ? 0 : $e(x);
      }
      function tr(x, e, t) {
        return x.subarray(e >>> 0, t >>> 0);
      }
      function xr(x) {
        return x.versions;
      }
      function nr(x) {
        return x;
      }
      function or(x, e) {
        return hx(x, e);
      }
      function lr(x, e) {
        return El(x, e);
      }
      function sr() {
        const x = A0.__wbindgen_externrefs, e = x.grow(4);
        x.set(0, void 0), x.set(e + 0, void 0), x.set(e + 1, null), x.set(e + 2, true), x.set(e + 3, false);
      }
      function $e(x) {
        const e = A0.__externref_table_alloc();
        return A0.__wbindgen_externrefs.set(e, x), e;
      }
      function hx(x, e) {
        return x = x >>> 0, Ve().subarray(x / 1, x / 1 + e);
      }
      function El(x, e) {
        return x = x >>> 0, ar(x, e);
      }
      let dt = null;
      function Ve() {
        return (dt === null || dt.byteLength === 0) && (dt = new Uint8Array(A0.memory.buffer)), dt;
      }
      function et(x, e) {
        try {
          return x.apply(this, e);
        } catch (t) {
          const n = $e(t);
          A0.__wbindgen_exn_store(n);
        }
      }
      function Ot(x) {
        return x == null;
      }
      function fl(x, e, t) {
        if (t === void 0) {
          const r = Ge.encode(x), a = e(r.length, 1) >>> 0;
          return Ve().subarray(a, a + r.length).set(r), wt = r.length, a;
        }
        let n = x.length, o = e(n, 1) >>> 0;
        const l = Ve();
        let s = 0;
        for (; s < n; s++) {
          const r = x.charCodeAt(s);
          if (r > 127) break;
          l[o + s] = r;
        }
        if (s !== n) {
          s !== 0 && (x = x.slice(s)), o = t(o, n, n = s + x.length * 3, 1) >>> 0;
          const r = Ve().subarray(o + s, o + n), a = Ge.encodeInto(x, r);
          s += a.written, o = t(o, n, s, 1) >>> 0;
        }
        return wt = s, o;
      }
      function y0(x) {
        const e = A0.__wbindgen_externrefs.get(x);
        return A0.__externref_table_dealloc(x), e;
      }
      let pt = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      pt.decode();
      const rr = 2146435072;
      let Xt = 0;
      function ar(x, e) {
        return Xt += e, Xt >= rr && (pt = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), pt.decode(), Xt = e), pt.decode(Ve().subarray(x, x + e));
      }
      const Ge = new TextEncoder();
      "encodeInto" in Ge || (Ge.encodeInto = function(x, e) {
        const t = Ge.encode(x);
        return e.set(t), {
          read: x.length,
          written: t.length
        };
      });
      let wt = 0, A0;
      function ir(x) {
        A0 = x;
      }
      URL = globalThis.URL;
      const cr = await ms({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: qs,
          __wbg_process_44c7a14e11e9f69e: Gs,
          __wbg_versions_276b2795b1c6a219: xr,
          __wbg_node_84ea875411254db1: Vs,
          __wbg_require_b4edbdcf3e2a1ef0: Js,
          __wbg_call_a24592a6f349a97e: zs,
          __wbg_msCrypto_bd5a034af96bcba6: Hs,
          __wbg_randomFillSync_6c25eac9869eb53c: Ys,
          __wbg_getRandomValues_c44a50d8cfdaebeb: Rs,
          __wbg_new_aa8d0fa9762c29bd: Us,
          __wbg_length_9f1775224cf1d815: Os,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: Ks,
          __wbg_new_with_length_8c854e41ea4dae9b: js,
          __wbg_subarray_f8ca46a25b1f5e0d: tr,
          __wbg_set_3d484eb794afec82: Ws,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: Zs,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: $s,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: Xs,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: er,
          __wbg_set_022bee52d0b05b19: Qs,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: Ns,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: Is,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: Ms,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: Ss,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: Ls,
          __wbindgen_init_externref_table: sr,
          __wbindgen_cast_0000000000000001: nr,
          __wbindgen_cast_0000000000000002: or,
          __wbindgen_cast_0000000000000003: lr
        }
      }, ps), { memory: ur, aesGcmDecrypt: Er, aesGcmEncrypt: fr, argon2idDerive: dr, deriveAlertKey: Br, deriveEncounterToken: Cr, ed25519PubkeyFromSeed: Ar, ed25519Sign: Fr, ed25519Verify: Dr, generateEphemeralKeypair: pr, generateRandomBytes: mr, generateUserKeypair: hr, main: vr, serializePublicKey: _r, sha256: kr, solvePoW: br, __wbindgen_exn_store: gr, __externref_table_alloc: wr, __wbindgen_externrefs: yr, __externref_table_dealloc: Pr, __wbindgen_malloc: Tr, __wbindgen_realloc: Sr, __wbindgen_free: Ir, __wbindgen_start: dl } = cr, Mr = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: wr,
        __externref_table_dealloc: Pr,
        __wbindgen_exn_store: gr,
        __wbindgen_externrefs: yr,
        __wbindgen_free: Ir,
        __wbindgen_malloc: Tr,
        __wbindgen_realloc: Sr,
        __wbindgen_start: dl,
        aesGcmDecrypt: Er,
        aesGcmEncrypt: fr,
        argon2idDerive: dr,
        deriveAlertKey: Br,
        deriveEncounterToken: Cr,
        ed25519PubkeyFromSeed: Ar,
        ed25519Sign: Fr,
        ed25519Verify: Dr,
        generateEphemeralKeypair: pr,
        generateRandomBytes: mr,
        generateUserKeypair: hr,
        main: vr,
        memory: ur,
        serializePublicKey: _r,
        sha256: kr,
        solvePoW: br
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      ir(Mr);
      dl();
      let ux = false;
      async function Lr() {
        ux || (ux = true);
      }
      function W0() {
        if (!ux) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function L0(x) {
        const e = new Uint8Array(x.length / 2);
        for (let t = 0; t < x.length; t += 2) e[t / 2] = parseInt(x.slice(t, t + 2), 16);
        return e;
      }
      function t0(x) {
        return Array.from(x).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function tt(x) {
        return W0(), Ps(x);
      }
      async function se(x, e) {
        return W0(), await new Promise((t) => setTimeout(t, 0)), _s(x, e);
      }
      function xt(x, e) {
        return W0(), vs(x, e);
      }
      function Ht(x, e) {
        return W0(), hs(x, e);
      }
      function Nr() {
        return W0(), ys();
      }
      function zr(x, e) {
        return W0(), bs(x, e);
      }
      function Bl(x) {
        return W0(), gs(x);
      }
      function Cl(x, e) {
        return W0(), ws(x, e);
      }
      function qr(x) {
        return W0(), ul(x);
      }
      function Al(x) {
        return W0(), ks(x);
      }
      function Rr(x, e, t) {
        return W0(), Ts(x, e, t);
      }
      function Fe(x) {
        let e = "";
        for (let t = 0; t < x.length; t++) e += String.fromCharCode(x[t]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function Fl(x) {
        const t = (x + "===".slice((x.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(t), (n) => n.charCodeAt(0));
      }
      function Or(x, e, t, n) {
        const o = n && n.trim() ? encodeURIComponent(n.trim()) : "";
        return `2|${x}|${e}|${t}|${o}`;
      }
      function Qx(x) {
        const e = x.split("|");
        if (!e.length || e[0] !== "2") return null;
        if (e.length < 4 || e.length > 5) throw new Error("Invalid group QR payload");
        const t = e[1], n = parseInt(e[2], 10), o = e[3], l = e.length === 5 && e[4] ? decodeURIComponent(e[4]) : null;
        if (isNaN(n) || t.length !== 64 || o.length !== 64) throw new Error("Invalid group QR payload");
        return {
          groupTokenHex: t,
          timestamp: n,
          hostContactIdHex: o,
          name: l
        };
      }
      function Ae(x, e, t) {
        W0();
        const n = new Uint8Array(68);
        return n.set(x, 0), n.set(e, 32), n[64] = t >>> 24 & 255, n[65] = t >>> 16 & 255, n[66] = t >>> 8 & 255, n[67] = t & 255, ul(n);
      }
      const De = K0("ok");
      let Dl = "ok";
      De.subscribe((x) => {
        Dl = x;
      });
      let yt = null;
      function Hr() {
        clearTimeout(yt), De.set("retrying");
      }
      function Ur() {
        Dl !== "ok" && (clearTimeout(yt), De.set("reconnected"), yt = setTimeout(() => De.set("ok"), 3e3));
      }
      function Wx() {
        clearTimeout(yt), De.set("down");
      }
      function Xx(x) {
        let e;
        function t(l, s) {
          if (l[0] === "retrying") return Gr;
          if (l[0] === "down") return Vr;
          if (l[0] === "reconnected") return jr;
        }
        let n = t(x), o = n && n(x);
        return {
          c() {
            e = f("div"), o && o.c(), c(e, "class", "banner svelte-176fo9c"), c(e, "role", "status"), c(e, "aria-live", "polite"), e0(e, "retrying", x[0] === "retrying"), e0(e, "down", x[0] === "down"), e0(e, "reconnected", x[0] === "reconnected");
          },
          m(l, s) {
            T(l, e, s), o && o.m(e, null);
          },
          p(l, s) {
            n !== (n = t(l)) && (o && o.d(1), o = n && n(l), o && (o.c(), o.m(e, null))), s & 1 && e0(e, "retrying", l[0] === "retrying"), s & 1 && e0(e, "down", l[0] === "down"), s & 1 && e0(e, "reconnected", l[0] === "reconnected");
          },
          d(l) {
            l && P(e), o && o.d();
          }
        };
      }
      function jr(x) {
        let e;
        return {
          c() {
            e = z("Reconnected");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Vr(x) {
        let e;
        return {
          c() {
            e = z("Server unavailable. Please try again later.");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Gr(x) {
        let e;
        return {
          c() {
            e = z("Server unreachable \u2014 retrying\u2026");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Kr(x) {
        let e, t = x[0] !== "ok" && Xx(x);
        return {
          c() {
            t && t.c(), e = X0();
          },
          m(n, o) {
            t && t.m(n, o), T(n, e, o);
          },
          p(n, [o]) {
            n[0] !== "ok" ? t ? t.p(n, o) : (t = Xx(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
          },
          i: Z,
          o: Z,
          d(n) {
            n && P(e), t && t.d(n);
          }
        };
      }
      function Yr(x, e, t) {
        let n;
        return O0(x, De, (o) => t(0, n = o)), [
          n
        ];
      }
      class Jr extends m0 {
        constructor(e) {
          super(), p0(this, e, Yr, Kr, F0, {});
        }
      }
      const Ut = K0(false);
      function Qr() {
        Ut.set(false);
      }
      const D0 = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", Zt = [
        1e3,
        2e3,
        4e3
      ], Zx = /* @__PURE__ */ new Set([
        502,
        503,
        504
      ]);
      async function Ee(x, e = {}) {
        const t = {
          ...e,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            ...e.headers ?? {}
          }
        };
        for (let n = 0; ; n++) {
          try {
            const o = await fetch(x, t);
            if (!Zx.has(o.status) || n >= Zt.length) return Zx.has(o.status) ? Wx() : Ur(), o;
          } catch (o) {
            if (n >= Zt.length) throw Wx(), o;
          }
          Hr(), await new Promise((o) => setTimeout(o, Zt[n]));
        }
      }
      let pe = null, vx = null, _x = null;
      const We = "peachsafe_device_tokens";
      function Wr(x) {
        try {
          return JSON.parse(localStorage.getItem(We) ?? "{}")[x] ?? null;
        } catch {
          return null;
        }
      }
      function Xr(x, e) {
        try {
          const t = JSON.parse(localStorage.getItem(We) ?? "{}");
          t[x] = e, localStorage.setItem(We, JSON.stringify(t));
        } catch {
        }
      }
      function $t(x) {
        try {
          const e = JSON.parse(localStorage.getItem(We) ?? "{}");
          delete e[x], localStorage.setItem(We, JSON.stringify(e));
        } catch {
        }
      }
      const he = K0(null), jt = K0(null), Xe = K0(null), Ke = K0(null), Pt = K0(null);
      function V0() {
        return pe !== null;
      }
      function kx(x) {
        vx = x;
      }
      function me() {
        return vx;
      }
      function pl(x) {
        _x = x;
      }
      function mt() {
        return _x;
      }
      function ml() {
        pe = null, vx = null, _x = null, he.set(null), jt.set(null), Xe.set(null), Ke.set(null), Pt.set(null), Qr();
      }
      async function Zr() {
        try {
          const x = await $r();
          he.set(x.verified);
        } catch {
        }
      }
      async function $r() {
        const x = await H0(`${D0}/v1/web/user/email`);
        if (!x.ok) throw new Error(await _0(x));
        return x.json();
      }
      async function ea(x) {
        const e = await H0(`${D0}/v1/web/user/request-email-change`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            new_email: x
          })
        });
        if (!e.ok) throw new Error(await _0(e));
      }
      async function ta() {
        const x = await H0(`${D0}/v1/web/user/resend-verification`, {
          method: "POST"
        });
        if (!x.ok) throw new Error(await _0(x));
      }
      async function xa(x) {
        const e = await Ee(`${D0}/v1/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: x
          })
        });
        if (!e.ok) throw new Error(await _0(e));
        he.set(true);
      }
      async function bx(x) {
        const e = await Ee(`${D0}/v1/prelogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: x
          })
        });
        if (!e.ok) throw new Error(await _0(e));
        return e.json();
      }
      async function na(x, e, t) {
        const n = await Ee(`${D0}/v1/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: x,
            email: e,
            public_key: t
          })
        });
        if (!n.ok) throw new Error(await _0(n));
        const o = await n.json();
        return pe = o.session_token, he.set(false), o;
      }
      async function $x(x, e, t = null, n = false) {
        const o = {
          username: x,
          auth_signature: e
        };
        t && (o.otp = t), n && (o.remember_device = true);
        const l = Wr(x);
        l && (o.device_token = l);
        const s = await Ee(`${D0}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(o)
        });
        if (!s.ok) throw new Error(await _0(s));
        const r = await s.json();
        return r.requires_otp || (pe = r.session_token, r.device_token && Xr(x, r.device_token), r.bootstrap ? (he.set(r.bootstrap.email_verified), jt.set(r.bootstrap.email), Xe.set(r.bootstrap.totp_enabled), Ke.set(r.bootstrap.trusted_devices ?? null), Pt.set(r.bootstrap.backup_code_count ?? null)) : Zr()), r;
      }
      async function oa() {
        const x = await H0(`${D0}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!x.ok) throw new Error(await _0(x));
        return x.json();
      }
      async function la(x, e) {
        const t = await H0(`${D0}/v1/web/totp/confirm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            secret: x,
            otp: e
          })
        });
        if (!t.ok) throw new Error(await _0(t));
        return t.json();
      }
      async function sa() {
        const x = await H0(`${D0}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!x.ok) throw new Error(await _0(x));
      }
      async function ra() {
        const x = await H0(`${D0}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!x.ok) throw new Error(await _0(x));
        return x.json();
      }
      async function aa(x) {
        const e = await H0(`${D0}/v1/web/trusted-devices/${x}`, {
          method: "DELETE"
        });
        if (!e.ok) throw new Error(await _0(e));
      }
      async function ia() {
        const x = await H0(`${D0}/v1/web/trusted-devices`, {
          method: "DELETE"
        });
        if (!x.ok) throw new Error(await _0(x));
      }
      async function gx() {
        if (!pe) return;
        const x = pe;
        ml(), Ee(`${D0}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${x}`
          }
        }).catch(() => {
        });
      }
      async function ca() {
        const x = await H0(`${D0}/v1/web/user/blob`);
        if (!x.ok) throw new Error(await _0(x));
        return x.json();
      }
      async function ua(x, e) {
        const t = await H0(`${D0}/v1/web/user/blob`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            blob: x,
            expected_version: e
          })
        });
        if (!t.ok) throw new Error(await _0(t));
        return t.json();
      }
      async function hl(x, e) {
        const t = await H0(`${D0}/v1/web/user/encounters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: x,
            date: e
          })
        });
        if (!t.ok) throw new Error(await _0(t));
        return t.json();
      }
      async function Ea(x, e, t, n) {
        const o = await H0(`${D0}/v1/web/user/change-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            auth_signature: x,
            new_public_key: e,
            new_blob: t,
            expected_blob_version: n
          })
        });
        if (!o.ok) throw new Error(await _0(o));
      }
      async function fa() {
        const x = await H0(`${D0}/v1/web/user`, {
          method: "DELETE"
        });
        if (!x.ok) throw new Error(await _0(x));
        ml();
      }
      async function da(x) {
        const e = await Ee(`${D0}/v1/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            tokens: x
          })
        });
        if (!e.ok) throw new Error(await _0(e));
        return e.json();
      }
      async function Ba(x) {
        const e = await H0(`${D0}/v1/web/user/encounters/by-token/${x}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await _0(e));
      }
      async function Ca(x) {
        const e = await Ee(`${D0}/v1/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(x)
        }), t = e.headers.get("x-server-time"), n = e.headers.get("x-pow-difficulty"), o = n ? parseInt(n, 10) : null;
        if (e.status === 202) return {
          serverTime: t,
          powDifficulty: o
        };
        const l = await _0(e), s = new Error(l);
        throw s.statusCode = e.status, s.serverTime = t, s.powDifficulty = o, s;
      }
      function vl() {
        fetch(D0, {
          method: "HEAD"
        }).catch(() => {
        });
      }
      function H0(x, e = {}) {
        return Ee(x, {
          ...e,
          headers: {
            Authorization: `Bearer ${pe}`,
            ...e.headers ?? {}
          }
        });
      }
      async function _0(x) {
        try {
          return (await x.json()).error ?? `HTTP ${x.status}`;
        } catch {
          return `HTTP ${x.status}`;
        }
      }
      const en = 15 * 60 * 1e3, Aa = 2 * 60 * 1e3, _l = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let Ex = null, fx = null, wx = null, yx = null, Vt = false, nt = false;
      function Px() {
        clearTimeout(Ex), clearTimeout(fx), fx = setTimeout(() => {
          nt = true, wx?.();
        }, en - Aa), Ex = setTimeout(() => yx?.(), en);
      }
      function kl() {
        Vt && !nt && Px();
      }
      function Fa({ onWarnCallback: x, onExpiredCallback: e }) {
        dx(), wx = x, yx = e, Vt = true, nt = false;
        for (const t of _l) document.addEventListener(t, kl, {
          passive: true
        });
        Px();
      }
      function dx() {
        clearTimeout(Ex), clearTimeout(fx);
        for (const x of _l) document.removeEventListener(x, kl);
        Vt = false, nt = false, wx = null, yx = null;
      }
      function Da() {
        nt = false, Vt && Px();
      }
      function pa(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b, _, m, D, k, w, y, S, M, I, L, N, q, R, O, H, Q, K, G;
        return {
          c() {
            e = f("main"), t = f("section"), t.innerHTML = `<div class="blob blob-1 svelte-14nhamx" aria-hidden="true"></div> <div class="blob blob-2 svelte-14nhamx" aria-hidden="true"></div> <div class="blob blob-3 svelte-14nhamx" aria-hidden="true"></div> <div class="hero-content svelte-14nhamx"><div class="hero-brand svelte-14nhamx"><img src="/android-chrome-192x192.png" alt="" class="hero-icon svelte-14nhamx"/> <span><span class="brand-peach svelte-14nhamx">Peach</span><span class="brand-safe svelte-14nhamx">Safe</span></span></div> <p class="hero-tagline svelte-14nhamx">Know if you need to get tested \u2014 without anyone knowing who you slept with.</p> <p class="hero-sub svelte-14nhamx">PeachSafe lets you notify past partners when you test positive for an STI,
        and get notified if a partner tests positive. No one ever learns who was
        with whom \u2014 not your partners, not us.</p> <div class="cta-buttons svelte-14nhamx"><a href="#/signup" class="btn-primary svelte-14nhamx">Sign up</a> <a href="#/login" class="btn-ghost svelte-14nhamx">Log in</a></div></div> <div class="hero-scroll-hint svelte-14nhamx" aria-hidden="true"><span class="material-icons svelte-14nhamx">expand_more</span></div>`, n = g(), o = f("section"), l = f("div"), s = f("h2"), s.textContent = "How it works", r = g(), a = f("div"), u = f("div"), u.innerHTML = '<div class="step-number svelte-14nhamx">1</div> <div class="step-body svelte-14nhamx"><h3 class="svelte-14nhamx">Exchange a code</h3> <p class="svelte-14nhamx">Before a sexual encounter, both people scan each other&#39;s QR code. This generates a private, anonymous token that only the two of you share. Nothing identifying is stored or transmitted.</p></div>', E = g(), d = f("div"), d.innerHTML = '<div class="step-number svelte-14nhamx">2</div> <div class="step-body svelte-14nhamx"><h3 class="svelte-14nhamx">Record a positive result</h3> <p class="svelte-14nhamx">If you test positive, mark it in PeachSafe. Select what you tested positive for - notifications are specific, not vague.</p></div>', C = g(), B = f("div"), B.innerHTML = '<div class="step-number svelte-14nhamx">3</div> <div class="step-body svelte-14nhamx"><h3 class="svelte-14nhamx">Partners are notified</h3> <p class="svelte-14nhamx">PeachSafe notifies anyone who should know. If a past partner records a positive result, you&#39;ll receive an email. Neither of you learns the other&#39;s identity from the system.</p></div>', A = g(), F = f("section"), p = f("div"), h = f("h2"), h.textContent = "Why it's private", v = g(), b = f("div"), _ = f("div"), _.innerHTML = '<span class="material-icons svelte-14nhamx">lock</span> <span>Your encounter data is encrypted. Only you can access it</span>', m = g(), D = f("div"), D.innerHTML = '<span class="material-icons svelte-14nhamx">visibility_off</span> <span>The server is a blind message board; it can&#39;t connect notifications to real people</span>', k = g(), w = f("div"), w.innerHTML = '<span class="material-icons svelte-14nhamx">shuffle</span> <span>Queries are padded with noise so even traffic analysis reveals nothing</span>', y = g(), S = f("div"), S.innerHTML = '<span class="material-icons svelte-14nhamx">person_off</span> <span>No account is linked to your real name, phone number, or location</span>', M = g(), I = f("section"), L = f("div"), N = f("h2"), N.textContent = "Who it's for", q = g(), R = f("p"), R.textContent = `People who want to take sexual health seriously without the social and legal
        risks of conventional contact tracing \u2014 whether you're navigating dating apps,
        multiple partners, or just value your privacy.`, O = g(), H = f("footer"), Q = f("div"), Q.innerHTML = '<a href="#/signup" class="btn-primary svelte-14nhamx">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-14nhamx">Log in</a>', c(t, "class", "hero svelte-14nhamx"), c(s, "class", "svelte-14nhamx"), c(u, "class", "step svelte-14nhamx"), c(d, "class", "step svelte-14nhamx"), c(B, "class", "step svelte-14nhamx"), c(a, "class", "steps svelte-14nhamx"), c(l, "class", "section-inner svelte-14nhamx"), c(o, "class", "how-it-works svelte-14nhamx"), c(h, "class", "svelte-14nhamx"), c(_, "class", "privacy-card svelte-14nhamx"), c(D, "class", "privacy-card svelte-14nhamx"), c(w, "class", "privacy-card svelte-14nhamx"), c(S, "class", "privacy-card svelte-14nhamx"), c(b, "class", "privacy-grid svelte-14nhamx"), c(p, "class", "section-inner svelte-14nhamx"), c(F, "class", "privacy svelte-14nhamx"), c(N, "class", "svelte-14nhamx"), c(R, "class", "svelte-14nhamx"), c(L, "class", "section-inner svelte-14nhamx"), c(I, "class", "who svelte-14nhamx"), c(Q, "class", "footer-inner svelte-14nhamx"), c(H, "class", "svelte-14nhamx"), c(e, "data-theme", "light"), c(e, "class", "svelte-14nhamx");
          },
          m(j, W) {
            T(j, e, W), i(e, t), i(e, n), i(e, o), i(o, l), i(l, s), i(l, r), i(l, a), i(a, u), i(a, E), i(a, d), i(a, C), i(a, B), i(e, A), i(e, F), i(F, p), i(p, h), i(p, v), i(p, b), i(b, _), i(b, m), i(b, D), i(b, k), i(b, w), i(b, y), i(b, S), i(e, M), i(e, I), i(I, L), i(L, N), i(L, q), i(L, R), i(e, O), i(e, H), i(H, Q), K || (G = [
              Q0(x[0].call(null, s)),
              Q0(x[0].call(null, u, 0)),
              Q0(x[0].call(null, d, 80)),
              Q0(x[0].call(null, B, 160)),
              Q0(x[0].call(null, h)),
              Q0(x[0].call(null, _, 0)),
              Q0(x[0].call(null, D, 70)),
              Q0(x[0].call(null, w, 140)),
              Q0(x[0].call(null, S, 210)),
              Q0(x[0].call(null, N)),
              Q0(x[0].call(null, R, 60)),
              Q0(x[0].call(null, Q))
            ], K = true);
          },
          p: Z,
          i: Z,
          o: Z,
          d(j) {
            j && P(e), K = false, l0(G);
          }
        };
      }
      function ma(x) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function t(n, o = 0) {
          if (e()) return {};
          n.style.opacity = "0", n.style.transform = "translateY(20px)", n.style.transition = `opacity 0.55s ease ${o}ms, transform 0.55s ease ${o}ms`;
          const l = new IntersectionObserver(([s]) => {
            s.isIntersecting && (n.style.opacity = "1", n.style.transform = "translateY(0)", l.disconnect());
          }, {
            threshold: 0.1
          });
          return l.observe(n), {
            destroy() {
              l.disconnect();
            }
          };
        }
        return [
          t
        ];
      }
      class ha extends m0 {
        constructor(e) {
          super(), p0(this, e, ma, pa, F0, {});
        }
      }
      const bl = K0(false), Tx = K0(null);
      function Sx() {
        bl.set((Y?.receivedAlerts || []).some((x) => !x.viewed));
      }
      function Tt() {
        Tx.set(Y?.pin ?? null);
      }
      const va = 12 * 1024, gl = va * 0.75, wl = K0(false), yl = 18262, Pl = 65535, _a = 45, xe = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], Ye = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, Tl = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function we(x) {
        const e = (/* @__PURE__ */ new Date(x + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - yl;
      }
      function ye(x) {
        const e = (yl + x) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      function Ix(x) {
        const e = x.encounters, t = x.results || [], n = x.receivedAlerts || [], o = x.relationships || [], l = x.groupEncounters || [], s = e.length, r = t.length, a = n.length, u = o.length, E = l.length, d = new TextEncoder(), C = (k) => k ? d.encode(k).slice(0, 255) : new Uint8Array(0), B = e.map((k) => C(k.note)), A = o.map((k) => C(k.name)), F = l.map((k) => C(k.name)), p = l.map((k) => C(k.note)), h = x.pin ? d.encode(x.pin).slice(0, 4) : new Uint8Array(0), v = e.reduce((k, w, y) => k + 70 + 1 + B[y].length, 0), b = o.reduce((k, w, y) => k + 73 + 1 + A[y].length, 0), _ = l.reduce((k, w, y) => k + 73 + 1 + F[y].length + 1 + p[y].length, 0), m = new Uint8Array(35 + v + 2 + r * 4 + 2 + a * 36 + 2 + b + 2 + _ + 1 + h.length);
        let D = 0;
        m[D++] = 2, m.set(x.myContactId, D), D += 32, m[D++] = s >> 8 & 255, m[D++] = s & 255;
        for (let k = 0; k < s; k++) {
          const w = e[k];
          m.set(w.rawToken, D), D += 32, m.set(w.theirContactId, D), D += 32;
          const y = we(w.date);
          m[D++] = y >> 8 & 255, m[D++] = y & 255, m[D++] = w.queryIndex >> 8 & 255, m[D++] = w.queryIndex & 255, m[D++] = w.submitIndex >> 8 & 255, m[D++] = w.submitIndex & 255, m[D++] = B[k].length, m.set(B[k], D), D += B[k].length;
        }
        m[D++] = r >> 8 & 255, m[D++] = r & 255;
        for (const k of t) {
          const w = we(k.date);
          m[D++] = w >> 8 & 255, m[D++] = w & 255, m[D++] = k.hasNotified ? 1 : 0;
          let y = 0;
          for (let S = 0; S < xe.length; S++) (k.positiveDiseases || []).includes(xe[S]) && (y |= 1 << S);
          m[D++] = y;
        }
        m[D++] = a >> 8 & 255, m[D++] = a & 255;
        for (const k of n) {
          m.set(k.rawToken, D), D += 32;
          const w = we(k.testDate);
          m[D++] = w >> 8 & 255, m[D++] = w & 255;
          let y = 0;
          for (let M = 0; M < xe.length; M++) (k.diseases || []).includes(xe[M]) && (y |= 1 << M);
          m[D++] = y;
          let S = 0;
          k.viewed && (S |= 1), k.labVerified && (S |= 2), m[D++] = S;
        }
        m[D++] = u >> 8 & 255, m[D++] = u & 255;
        for (let k = 0; k < u; k++) {
          const w = o[k];
          m.set(w.rawToken, D), D += 32, m.set(w.theirContactId, D), D += 32;
          const y = we(w.createdAt);
          m[D++] = y >> 8 & 255, m[D++] = y & 255;
          const S = w.endedAt ? we(w.endedAt) : Pl;
          m[D++] = S >> 8 & 255, m[D++] = S & 255;
          let M = 0;
          w.archived && (M |= 1), m[D++] = M, m[D++] = w.queryIndex >> 8 & 255, m[D++] = w.queryIndex & 255, m[D++] = w.submitIndex >> 8 & 255, m[D++] = w.submitIndex & 255, m[D++] = A[k].length, m.set(A[k], D), D += A[k].length;
        }
        m[D++] = E >> 8 & 255, m[D++] = E & 255;
        for (let k = 0; k < E; k++) {
          const w = l[k];
          m.set(w.token, D), D += 32;
          const y = we(w.date);
          m[D++] = y >> 8 & 255, m[D++] = y & 255;
          const S = w.createdAt >>> 0;
          m[D++] = S >>> 24 & 255, m[D++] = S >>> 16 & 255, m[D++] = S >>> 8 & 255, m[D++] = S & 255, m[D++] = w.isHost ? 1 : 0, m[D++] = w.tokenIndex >> 8 & 255, m[D++] = w.tokenIndex & 255, m.set(w.hostContactId, D), D += 32, m[D++] = F[k].length, m.set(F[k], D), D += F[k].length, m[D++] = p[k].length, m.set(p[k], D), D += p[k].length;
        }
        return m[D++] = h.length, h.length > 0 && (m.set(h, D), D += h.length), m;
      }
      function ka(x) {
        let e = 0;
        const t = x[e++];
        if (t !== 1 && t !== 2) throw new Error(`Unknown blob version: ${t}`);
        const n = x.slice(e, e + 32);
        e += 32;
        const o = x[e] << 8 | x[e + 1];
        e += 2;
        const l = [];
        for (let p = 0; p < o; p++) {
          const h = x.slice(e, e + 32);
          e += 32;
          const v = x.slice(e, e + 32);
          e += 32;
          const b = x[e] << 8 | x[e + 1];
          e += 2;
          const _ = x[e] << 8 | x[e + 1];
          e += 2;
          const m = x[e] << 8 | x[e + 1];
          e += 2;
          const D = x[e++], k = D > 0 ? new TextDecoder().decode(x.slice(e, e + D)) : null;
          e += D, l.push({
            rawToken: h,
            theirContactId: v,
            date: ye(b),
            queryIndex: _,
            submitIndex: m,
            note: k
          });
        }
        const s = [], r = x[e] << 8 | x[e + 1];
        e += 2;
        for (let p = 0; p < r; p++) {
          const h = x[e] << 8 | x[e + 1];
          e += 2;
          const v = x[e++], b = x[e++], _ = !!(v & 1), m = xe.filter((D, k) => b & 1 << k);
          s.push({
            date: ye(h),
            hasNotified: _,
            positiveDiseases: m
          });
        }
        const a = [], u = x[e] << 8 | x[e + 1];
        e += 2;
        for (let p = 0; p < u; p++) {
          const h = x.slice(e, e + 32);
          e += 32;
          const v = x[e] << 8 | x[e + 1];
          e += 2;
          const b = x[e++], _ = x[e++], m = xe.filter((w, y) => b & 1 << y), D = !!(_ & 1), k = !!(_ & 2);
          a.push({
            rawToken: h,
            testDate: ye(v),
            diseases: m,
            viewed: D,
            labVerified: k
          });
        }
        const E = [], d = x[e] << 8 | x[e + 1];
        e += 2;
        for (let p = 0; p < d; p++) {
          const h = x.slice(e, e + 32);
          e += 32;
          const v = x.slice(e, e + 32);
          e += 32;
          const b = x[e] << 8 | x[e + 1];
          e += 2;
          const _ = x[e] << 8 | x[e + 1];
          e += 2;
          const m = x[e++], D = x[e] << 8 | x[e + 1];
          e += 2;
          const k = x[e] << 8 | x[e + 1];
          e += 2;
          const w = x[e++], y = w > 0 ? new TextDecoder().decode(x.slice(e, e + w)) : null;
          e += w;
          const S = _ === Pl ? null : ye(_), M = !!(m & 1);
          E.push({
            rawToken: h,
            theirContactId: v,
            createdAt: ye(b),
            endedAt: S,
            archived: M,
            queryIndex: D,
            submitIndex: k,
            name: y
          });
        }
        const C = [], B = x[e] << 8 | x[e + 1];
        e += 2;
        const A = new TextDecoder();
        for (let p = 0; p < B; p++) {
          const h = x.slice(e, e + 32);
          e += 32;
          const v = x[e] << 8 | x[e + 1];
          e += 2;
          const b = (x[e] << 24 | x[e + 1] << 16 | x[e + 2] << 8 | x[e + 3]) >>> 0;
          e += 4;
          const _ = x[e++], m = x[e] << 8 | x[e + 1];
          e += 2;
          const D = x.slice(e, e + 32);
          e += 32;
          const k = x[e++], w = k > 0 ? A.decode(x.slice(e, e + k)) : null;
          e += k;
          const y = x[e++], S = y > 0 ? A.decode(x.slice(e, e + y)) : null;
          e += y;
          const M = !!(_ & 1);
          C.push({
            token: h,
            date: ye(v),
            createdAt: b,
            isHost: M,
            tokenIndex: m,
            hostContactId: D,
            name: w,
            note: S
          });
        }
        let F = null;
        if (t === 2 && e < x.length) {
          const p = x[e++];
          p > 0 && (F = new TextDecoder().decode(x.slice(e, e + p)), e += p);
        }
        return {
          myContactId: n,
          encounters: l,
          results: s,
          receivedAlerts: a,
          relationships: E,
          groupEncounters: C,
          pin: F
        };
      }
      let Y = null, Ie = 0, Bx = false;
      De.subscribe((x) => {
        x === "reconnected" && Bx && Y && me() && P0().catch(() => {
        });
      });
      function te() {
        return Y;
      }
      function ce() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return Y.myContactId;
      }
      function ht() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return Y.results || [];
      }
      function ex() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (Y.receivedAlerts || []).map(({ testDate: x, diseases: e, viewed: t, labVerified: n }) => ({
          testDate: x,
          diseases: e,
          viewed: t,
          labVerified: n
        }));
      }
      function Sl() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return Y.encounters || [];
      }
      function Mx() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return Y.relationships || [];
      }
      function Il() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return Y.groupEncounters || [];
      }
      async function Ml(x = null) {
        const { blob: e, blob_version: t } = x ?? await ca();
        if (!e) {
          Y = {
            myContactId: tt(32),
            encounters: [],
            results: [],
            receivedAlerts: [],
            relationships: [],
            groupEncounters: [],
            pin: null
          }, Ie = 0, await P0(), Tt();
          return;
        }
        const n = Ht(me(), L0(e));
        Y = ka(n), Ie = t, await ja(), Sx(), Tt();
      }
      async function ba(x, e, t) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        Y = {
          ...Y,
          encounters: [
            ...Y.encounters,
            {
              rawToken: x,
              theirContactId: e,
              date: t,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        };
        try {
          await P0();
        } catch (n) {
          throw Ua(x, e, t), n;
        }
      }
      async function ga(x, e) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = (Y.encounters || []).map((n) => t0(n.rawToken) === x ? {
          ...n,
          ...e
        } : n);
        Y = {
          ...Y,
          encounters: t
        }, await P0();
      }
      async function wa(x, e, t) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        Y = {
          ...Y,
          relationships: [
            ...Y.relationships || [],
            {
              rawToken: x,
              theirContactId: e,
              createdAt: t,
              endedAt: null,
              name: null,
              archived: false,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        }, await P0();
      }
      async function Ll(x, e, t, n, o) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const l = Math.floor(Date.now() / 1e3);
        Y = {
          ...Y,
          groupEncounters: [
            ...Y.groupEncounters || [],
            {
              token: x,
              date: e,
              createdAt: l,
              isHost: t,
              tokenIndex: 0,
              hostContactId: n,
              name: o || null,
              note: null
            }
          ]
        }, await P0();
      }
      async function tn(x, e) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = (Y.groupEncounters || []).map((n) => t0(n.token) === x ? {
          ...n,
          ...e
        } : n);
        Y = {
          ...Y,
          groupEncounters: t
        }, await P0();
      }
      async function ya(x) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (Y.groupEncounters || []).filter((t) => t0(t.token) !== x);
        Y = {
          ...Y,
          groupEncounters: e
        }, await P0();
      }
      async function Bt(x, e) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = (Y.relationships || []).map((n) => t0(n.rawToken) === x ? {
          ...n,
          ...e
        } : n);
        Y = {
          ...Y,
          relationships: t
        }, await P0();
      }
      async function tx(x, e, t = false) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = (Y.results || []).length;
        return Y = {
          ...Y,
          results: [
            ...Y.results || [],
            {
              date: x,
              positiveDiseases: e,
              hasNotified: t
            }
          ]
        }, await P0(), n;
      }
      async function xn(x) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...Y.results || []
        ];
        if (x >= e.length) throw new Error("Invalid result index");
        e[x] = {
          ...e[x],
          hasNotified: true
        }, Y = {
          ...Y,
          results: e
        }, await P0();
      }
      async function Pa() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        Y = {
          ...Y,
          encounters: Y.encounters.map((x) => ({
            ...x,
            submitIndex: x.submitIndex + 1
          })),
          relationships: (Y.relationships || []).map((x) => ({
            ...x,
            submitIndex: x.submitIndex + 1
          }))
        }, await P0();
      }
      async function Ta(x, e, t, n) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let o = null;
        const l = Y.encounters.map((a) => t0(a.rawToken) !== x ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        })), s = (Y.relationships || []).map((a) => o || t0(a.rawToken) !== x ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        }));
        if (!o) throw new Error("Token not found: " + x);
        const r = [
          ...Y.receivedAlerts || [],
          {
            rawToken: o,
            testDate: e,
            diseases: t,
            viewed: false,
            labVerified: !!n
          }
        ];
        Y = {
          ...Y,
          encounters: l,
          relationships: s,
          receivedAlerts: r
        }, await P0(), Sx();
      }
      async function Sa(x) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...Y.receivedAlerts || []
        ];
        if (x >= e.length) throw new Error("Invalid alert index");
        e[x] = {
          ...e[x],
          viewed: true
        }, Y = {
          ...Y,
          receivedAlerts: e
        }, await P0(), Sx();
      }
      function Ia() {
        if (!Y || Ix(Y).byteLength < gl) return false;
        const e = Lx();
        return Y.encounters.filter((t) => t.date < e).length >= 5;
      }
      function Ma() {
        if (!Y) return 0;
        const x = Lx();
        return Y.encounters.filter((e) => e.date < x).length;
      }
      async function La() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = Lx();
        Y = {
          ...Y,
          encounters: Y.encounters.filter((e) => e.date >= x)
        }, await P0();
      }
      function Lx() {
        const x = /* @__PURE__ */ new Date();
        return x.setUTCFullYear(x.getUTCFullYear() - 1), x.toISOString().slice(0, 10);
      }
      function Na(x) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = xt(x, Ix(Y));
        return {
          blobHex: t0(e),
          blobVersion: Ie
        };
      }
      function za(x) {
        Ie = x;
      }
      function qa() {
        return Y?.pin ?? null;
      }
      async function Ra(x) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        Y = {
          ...Y,
          pin: x
        }, await P0(), Tt();
      }
      async function Oa() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        Y = {
          ...Y,
          pin: null
        }, await P0(), Tt();
      }
      function Ha(x, e) {
        if (!x.endedAt || !e) return true;
        const n = (/* @__PURE__ */ new Date(x.endedAt + "T00:00:00Z")).getTime() + _a * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < n;
      }
      const Se = "peachsafe_pending_encounters";
      async function P0() {
        const x = Ix(Y);
        wl.set(x.byteLength >= gl);
        const e = xt(me(), x);
        Bx = false;
        try {
          const { blob_version: t } = await ua(t0(e), Ie);
          Ie = t;
          try {
            localStorage.removeItem(Se);
          } catch {
          }
        } catch (t) {
          throw Bx = true, t;
        }
      }
      function Ua(x, e, t) {
        try {
          let n = [];
          const o = localStorage.getItem(Se);
          if (o) try {
            n = JSON.parse(new TextDecoder().decode(Ht(me(), L0(o))));
          } catch {
            n = [];
          }
          n.push({
            rawTokenHex: t0(x),
            theirContactIdHex: t0(e),
            date: t
          });
          const l = new TextEncoder().encode(JSON.stringify(n));
          localStorage.setItem(Se, t0(xt(me(), l)));
        } catch {
        }
      }
      async function ja() {
        let x;
        try {
          const e = localStorage.getItem(Se);
          if (!e) return;
          x = JSON.parse(new TextDecoder().decode(Ht(me(), L0(e))));
        } catch {
          try {
            localStorage.removeItem(Se);
          } catch {
          }
          return;
        }
        if (!x.length) {
          try {
            localStorage.removeItem(Se);
          } catch {
          }
          return;
        }
        for (const e of x) Y = {
          ...Y,
          encounters: [
            ...Y.encounters,
            {
              rawToken: L0(e.rawTokenHex),
              theirContactId: L0(e.theirContactIdHex),
              date: e.date,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        };
        await P0();
      }
      let Ue = null;
      function Nl() {
        return Ue || (Ue = Va().finally(() => {
          Ue = null;
        }), Ue);
      }
      async function Va() {
        const x = te(), e = ce();
        if (!x) return 0;
        const n = ht().filter((E) => E.positiveDiseases.length === 0).map((E) => E.date).sort().pop() ?? null, o = /* @__PURE__ */ new Map(), l = [];
        for (const E of x.encounters) {
          const d = Ae(E.rawToken, e, E.queryIndex), C = Fe(d);
          o.set(C, {
            rawTokenHex: t0(E.rawToken),
            alertDate: E.date
          }), l.push(C);
        }
        for (const E of x.relationships || []) {
          if (!Ha(E, n)) continue;
          const d = Ae(E.rawToken, e, E.queryIndex), C = Fe(d);
          o.set(C, {
            rawTokenHex: t0(E.rawToken),
            alertDate: E.createdAt
          }), l.push(C);
        }
        if (l.length === 0) return 0;
        const s = Math.max(50, l.length * 2), r = [
          ...l
        ];
        for (; r.length < s; ) r.push(Fe(tt(32)));
        for (let E = r.length - 1; E > 0; E--) {
          const d = Math.floor(Math.random() * (E + 1));
          [r[E], r[d]] = [
            r[d],
            r[E]
          ];
        }
        const { matches: a } = await da(r);
        if (!a || a.length === 0) return 0;
        let u = 0;
        for (const E of a) {
          const d = o.get(E.token);
          if (!d) continue;
          const B = [
            ...te().encounters || [],
            ...te().relationships || []
          ].find((y) => t0(y.rawToken) === d.rawTokenHex);
          if (!B) continue;
          const A = Al(B.theirContactId);
          let F;
          try {
            F = Ht(A, Fl(E.encrypted_payload));
          } catch {
            continue;
          }
          const p = new TextDecoder().decode(F), h = p.slice(1, 9), v = `${h.slice(0, 4)}-${h.slice(4, 6)}-${h.slice(6, 8)}`, b = p.length > 9 ? p.slice(9).split(",") : [], _ = Object.fromEntries(Object.entries(Tl).map(([y, S]) => [
            S,
            y
          ])), m = b.map((y) => _[y]).filter(Boolean), D = t0(Ae(B.rawToken, e, B.queryIndex));
          await Ta(d.rawTokenHex, v, m, E.verified), u++;
          const k = [
            ...te().encounters || [],
            ...te().relationships || []
          ].find((y) => t0(y.rawToken) === d.rawTokenHex), w = t0(Ae(B.rawToken, e, k?.queryIndex ?? B.queryIndex + 1));
          try {
            await hl(w, d.alertDate);
          } catch (y) {
            console.warn("alerts: could not register next query token:", y.message);
          }
          try {
            await Ba(D);
          } catch (y) {
            console.warn("alerts: could not delete old query token:", y.message);
          }
        }
        return u;
      }
      let Cx = "/home";
      function Ga(x) {
        Cx = x;
      }
      function nn() {
        const x = Cx;
        return Cx = "/home", x;
      }
      function Ka(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F = x[3] ? "Verifying\u2026" : "Verify", p, h, v, b, _ = x[6] ? "Use authenticator app instead" : "Use a backup code instead", m, D, k;
        function w(I, L) {
          return I[6] ? Qa : Ja;
        }
        let y = w(x), S = y(x), M = x[4] && on(x);
        return {
          c() {
            e = f("div"), t = f("button"), n = f("span"), n.textContent = "arrow_back", o = g(), l = f("span"), l.textContent = "Two-factor auth", s = g(), r = f("form"), S.c(), a = g(), u = f("label"), E = f("input"), d = z(`
          Remember this device`), C = g(), M && M.c(), B = g(), A = f("button"), p = z(F), v = g(), b = f("button"), m = z(_), c(n, "class", "material-icons svelte-1r4ift8"), c(t, "type", "button"), c(t, "class", "back-btn svelte-1r4ift8"), t.disabled = x[3], c(l, "class", "otp-title svelte-1r4ift8"), c(e, "class", "otp-header svelte-1r4ift8"), c(E, "type", "checkbox"), E.disabled = x[3], c(E, "class", "svelte-1r4ift8"), c(u, "class", "remember-label svelte-1r4ift8"), c(A, "type", "submit"), A.disabled = h = x[3] || !x[6] && x[2].length !== 6 || x[6] && x[2].length !== 14, c(A, "class", "svelte-1r4ift8"), c(b, "type", "button"), c(b, "class", "backup-toggle svelte-1r4ift8"), b.disabled = x[3], c(r, "class", "svelte-1r4ift8");
          },
          m(I, L) {
            T(I, e, L), i(e, t), i(t, n), i(e, o), i(e, l), T(I, s, L), T(I, r, L), S.m(r, null), i(r, a), i(r, u), i(u, E), E.checked = x[7], i(u, d), i(r, C), M && M.m(r, null), i(r, B), i(r, A), i(A, p), i(r, v), i(r, b), i(b, m), D || (k = [
              U(t, "click", x[16]),
              U(E, "change", x[24]),
              U(b, "click", x[17]),
              U(r, "submit", re(x[13]))
            ], D = true);
          },
          p(I, L) {
            L & 8 && (t.disabled = I[3]), y === (y = w(I)) && S ? S.p(I, L) : (S.d(1), S = y(I), S && (S.c(), S.m(r, a))), L & 8 && (E.disabled = I[3]), L & 128 && (E.checked = I[7]), I[4] ? M ? M.p(I, L) : (M = on(I), M.c(), M.m(r, B)) : M && (M.d(1), M = null), L & 8 && F !== (F = I[3] ? "Verifying\u2026" : "Verify") && V(p, F), L & 76 && h !== (h = I[3] || !I[6] && I[2].length !== 6 || I[6] && I[2].length !== 14) && (A.disabled = h), L & 64 && _ !== (_ = I[6] ? "Use authenticator app instead" : "Use a backup code instead") && V(m, _), L & 8 && (b.disabled = I[3]);
          },
          d(I) {
            I && (P(e), P(s), P(r)), S.d(), M && M.d(), D = false, l0(k);
          }
        };
      }
      function Ya(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A = x[3] ? "Logging in\u2026" : "Log in", F, p, h, v = x[4] && ln(x);
        return {
          c() {
            e = f("div"), e.innerHTML = '<a href="#/login" class="tab active svelte-1r4ift8">Log in</a> <a href="#/signup" class="tab svelte-1r4ift8">Create account</a>', t = g(), n = f("form"), o = f("label"), l = z(`Username
          `), s = f("input"), r = g(), a = f("label"), u = z(`Password
          `), E = f("input"), d = g(), v && v.c(), C = g(), B = f("button"), F = z(A), c(e, "class", "tabs svelte-1r4ift8"), c(s, "type", "text"), s.required = true, c(s, "autocomplete", "username"), c(s, "class", "svelte-1r4ift8"), c(o, "class", "svelte-1r4ift8"), c(E, "type", "password"), E.required = true, c(E, "autocomplete", "current-password"), c(E, "class", "svelte-1r4ift8"), c(a, "class", "svelte-1r4ift8"), c(B, "type", "submit"), B.disabled = x[3], c(B, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(b, _) {
            T(b, e, _), T(b, t, _), T(b, n, _), i(n, o), i(o, l), i(o, s), x0(s, x[0]), i(n, r), i(n, a), i(a, u), i(a, E), x0(E, x[1]), i(n, d), v && v.m(n, null), i(n, C), i(n, B), i(B, F), p || (h = [
              U(s, "input", x[20]),
              U(E, "input", x[21]),
              U(n, "submit", re(x[12]))
            ], p = true);
          },
          p(b, _) {
            _ & 1 && s.value !== b[0] && x0(s, b[0]), _ & 2 && E.value !== b[1] && x0(E, b[1]), b[4] ? v ? v.p(b, _) : (v = ln(b), v.c(), v.m(n, C)) : v && (v.d(1), v = null), _ & 8 && A !== (A = b[3] ? "Logging in\u2026" : "Log in") && V(F, A), _ & 8 && (B.disabled = b[3]);
          },
          d(b) {
            b && (P(e), P(t), P(n)), v && v.d(), p = false, l0(h);
          }
        };
      }
      function Ja(x) {
        let e, t, n, o, l, s, r;
        return {
          c() {
            e = f("p"), e.textContent = "Enter the 6-digit code from your authenticator app.", t = g(), n = f("label"), o = z(`Authenticator code
            `), l = f("input"), c(e, "class", "otp-prompt svelte-1r4ift8"), c(l, "type", "text"), c(l, "inputmode", "numeric"), c(l, "pattern", "[0-9]*"), c(l, "maxlength", "6"), l.required = true, c(l, "autocomplete", "one-time-code"), c(l, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(a, u) {
            T(a, e, u), T(a, t, u), T(a, n, u), i(n, o), i(n, l), x0(l, x[2]), s || (r = U(l, "input", x[23]), s = true);
          },
          p(a, u) {
            u & 4 && l.value !== a[2] && x0(l, a[2]);
          },
          d(a) {
            a && (P(e), P(t), P(n)), s = false, r();
          }
        };
      }
      function Qa(x) {
        let e, t, n, o, l, s, r;
        return {
          c() {
            e = f("p"), e.textContent = "Enter one of your backup codes (xxxx-xxxx-xxxx).", t = g(), n = f("label"), o = z(`Backup code
            `), l = f("input"), c(e, "class", "otp-prompt svelte-1r4ift8"), c(l, "type", "text"), c(l, "inputmode", "text"), c(l, "maxlength", "14"), l.required = true, c(l, "autocomplete", "off"), c(l, "placeholder", "xxxx-xxxx-xxxx"), c(l, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(a, u) {
            T(a, e, u), T(a, t, u), T(a, n, u), i(n, o), i(n, l), x0(l, x[2]), s || (r = U(l, "input", x[22]), s = true);
          },
          p(a, u) {
            u & 4 && l.value !== a[2] && x0(l, a[2]);
          },
          d(a) {
            a && (P(e), P(t), P(n)), s = false, r();
          }
        };
      }
      function on(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[4]), c(e, "class", "error svelte-1r4ift8");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o & 16 && V(t, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ln(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[4]), c(e, "class", "error svelte-1r4ift8");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o & 16 && V(t, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function sn(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Your password never leaves your device in plaintext.", c(e, "class", "privacy-note svelte-1r4ift8");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function rn(x) {
        let e, t, n, o, l, s, r, a, u, E = x[9] === 1 ? "" : "s", d, C, B, A, F, p, h = x[10] ? "Deleting\u2026" : "Delete old encounters", v, b, _, m, D, k, w = x[11] && an(x);
        return {
          c() {
            e = f("div"), t = f("div"), n = f("h2"), n.textContent = "Free up storage space", o = g(), l = f("p"), s = z(`Your account is using 75% or more of its storage limit.
        You have `), r = f("strong"), a = z(x[9]), u = z(" encounter"), d = z(E), C = z(` older
        than one year. Deleting them will free up space.`), B = g(), w && w.c(), A = g(), F = f("div"), p = f("button"), v = z(h), b = g(), _ = f("button"), m = z("Keep them"), c(n, "id", "cleanup-title"), c(n, "class", "svelte-1r4ift8"), c(l, "class", "svelte-1r4ift8"), c(p, "class", "btn-primary svelte-1r4ift8"), p.disabled = x[10], c(_, "class", "btn-ghost svelte-1r4ift8"), _.disabled = x[10], c(F, "class", "cleanup-actions svelte-1r4ift8"), c(t, "class", "cleanup-dialog svelte-1r4ift8"), c(e, "class", "cleanup-overlay svelte-1r4ift8"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "cleanup-title");
          },
          m(y, S) {
            T(y, e, S), i(e, t), i(t, n), i(t, o), i(t, l), i(l, s), i(l, r), i(r, a), i(r, u), i(r, d), i(l, C), i(t, B), w && w.m(t, null), i(t, A), i(t, F), i(F, p), i(p, v), i(F, b), i(F, _), i(_, m), D || (k = [
              U(p, "click", x[14]),
              U(_, "click", x[15])
            ], D = true);
          },
          p(y, S) {
            S & 512 && V(a, y[9]), S & 512 && E !== (E = y[9] === 1 ? "" : "s") && V(d, E), y[11] ? w ? w.p(y, S) : (w = an(y), w.c(), w.m(t, A)) : w && (w.d(1), w = null), S & 1024 && h !== (h = y[10] ? "Deleting\u2026" : "Delete old encounters") && V(v, h), S & 1024 && (p.disabled = y[10]), S & 1024 && (_.disabled = y[10]);
          },
          d(y) {
            y && P(e), w && w.d(), D = false, l0(k);
          }
        };
      }
      function an(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[11]), c(e, "class", "cleanup-error svelte-1r4ift8");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o & 2048 && V(t, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Wa(x) {
        let e, t, n, o, l, s, r, a, u;
        function E(F, p) {
          return F[5] ? Ka : Ya;
        }
        let d = E(x), C = d(x), B = !x[5] && sn(), A = x[8] && rn(x);
        return {
          c() {
            e = f("main"), t = f("div"), t.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1r4ift8"/> <h1 class="svelte-1r4ift8"><span class="brand-peach svelte-1r4ift8">Peach</span><span class="brand-safe svelte-1r4ift8">Safe</span></h1>', n = g(), o = f("div"), C.c(), l = g(), B && B.c(), s = g(), A && A.c(), r = X0(), c(t, "class", "brand svelte-1r4ift8"), c(t, "role", "button"), c(t, "tabindex", "0"), c(o, "class", "card svelte-1r4ift8"), c(e, "class", "svelte-1r4ift8");
          },
          m(F, p) {
            T(F, e, p), i(e, t), i(e, n), i(e, o), C.m(o, null), i(e, l), B && B.m(e, null), T(F, s, p), A && A.m(F, p), T(F, r, p), a || (u = [
              U(t, "click", x[18]),
              U(t, "keypress", x[19])
            ], a = true);
          },
          p(F, [p]) {
            d === (d = E(F)) && C ? C.p(F, p) : (C.d(1), C = d(F), C && (C.c(), C.m(o, null))), F[5] ? B && (B.d(1), B = null) : B || (B = sn(), B.c(), B.m(e, null)), F[8] ? A ? A.p(F, p) : (A = rn(F), A.c(), A.m(r.parentNode, r)) : A && (A.d(1), A = null);
          },
          i: Z,
          o: Z,
          d(F) {
            F && (P(e), P(s), P(r)), C.d(), B && B.d(), A && A.d(F), a = false, l0(u);
          }
        };
      }
      function Xa(x, e, t) {
        N0(() => {
          vl();
        });
        let n = "", o = "", l = "", s = false, r = null, a = false, u = false, E = false, d = null, C = null, B = false, A = 0, F = "", p = false, h = null;
        async function v() {
          t(4, r = null), t(3, s = true);
          try {
            const { challenge: R, auth_salt: O, enc_salt: H } = await bx(n), Q = await se(o, L0(O)), K = Cl(new TextEncoder().encode(R), Q), G = btoa(String.fromCharCode(...K)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), j = await $x(n, G);
            if (j.requires_otp) {
              d = G, C = H, t(5, a = true);
              return;
            }
            await _(H, j);
          } catch (R) {
            t(4, r = R.message);
          } finally {
            t(3, s = false);
          }
        }
        async function b() {
          t(4, r = null), t(3, s = true);
          try {
            const R = await $x(n, d, l, E);
            await _(C, R);
          } catch (R) {
            t(4, r = R.message);
          } finally {
            t(3, s = false);
          }
        }
        async function _(R, O) {
          pl(n);
          const H = await se(o, L0(R));
          kx(H), await Ml(O.bootstrap ?? null), Nl().catch(() => {
          }), Ia() ? (t(9, A = Ma()), F = nn(), t(8, B = true)) : i0(nn());
        }
        async function m() {
          t(11, h = null), t(10, p = true);
          try {
            await La(), t(8, B = false), i0(F);
          } catch (R) {
            t(11, h = R.message);
          } finally {
            t(10, p = false);
          }
        }
        function D() {
          t(8, B = false), i0(F);
        }
        function k() {
          t(5, a = false), t(2, l = ""), d = null, C = null, t(4, r = null), t(6, u = false), t(7, E = false);
        }
        function w() {
          t(6, u = !u), t(2, l = ""), t(4, r = null);
        }
        const y = () => i0("/"), S = (R) => R.key === "Enter" && i0("/");
        function M() {
          n = this.value, t(0, n);
        }
        function I() {
          o = this.value, t(1, o);
        }
        function L() {
          l = this.value, t(2, l);
        }
        function N() {
          l = this.value, t(2, l);
        }
        function q() {
          E = this.checked, t(7, E);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          u,
          E,
          B,
          A,
          p,
          h,
          v,
          b,
          m,
          D,
          k,
          w,
          y,
          S,
          M,
          I,
          L,
          N,
          q
        ];
      }
      class Za extends m0 {
        constructor(e) {
          super(), p0(this, e, Xa, Wa, F0, {});
        }
      }
      function cn(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[6]), c(e, "class", "error svelte-1c8cd3e");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o & 64 && V(t, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function $a(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b, _, m, D, k, w, y, S, M, I, L, N = x[5] ? "Creating account\u2026" : "Create account", q, R, O, H, Q, K = x[6] && cn(x);
        return {
          c() {
            e = f("main"), t = f("div"), t.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1c8cd3e"/> <h1 class="svelte-1c8cd3e"><span class="brand-peach svelte-1c8cd3e">Peach</span><span class="brand-safe svelte-1c8cd3e">Safe</span></h1>', n = g(), o = f("div"), l = f("div"), l.innerHTML = '<a href="#/login" class="tab svelte-1c8cd3e">Log in</a> <a href="#/signup" class="tab active svelte-1c8cd3e">Create account</a>', s = g(), r = f("form"), a = f("label"), u = z(`Beta code
        `), E = f("input"), d = g(), C = f("label"), B = z(`Username
        `), A = f("input"), F = g(), p = f("label"), h = z(`Email
        `), v = f("input"), b = g(), _ = f("label"), m = z(`Password
        `), D = f("input"), k = g(), w = f("label"), y = z(`Confirm password
        `), S = f("input"), M = g(), K && K.c(), I = g(), L = f("button"), q = z(N), R = g(), O = f("p"), O.textContent = "Your password never leaves your device in plaintext.", c(t, "class", "brand svelte-1c8cd3e"), c(t, "role", "button"), c(t, "tabindex", "0"), c(l, "class", "tabs svelte-1c8cd3e"), c(E, "type", "text"), E.required = true, c(E, "autocomplete", "off"), c(E, "class", "svelte-1c8cd3e"), c(a, "class", "svelte-1c8cd3e"), c(A, "type", "text"), A.required = true, c(A, "autocomplete", "username"), c(A, "class", "svelte-1c8cd3e"), c(C, "class", "svelte-1c8cd3e"), c(v, "type", "email"), v.required = true, c(v, "autocomplete", "email"), c(v, "class", "svelte-1c8cd3e"), c(p, "class", "svelte-1c8cd3e"), c(D, "type", "password"), D.required = true, c(D, "autocomplete", "new-password"), c(D, "minlength", "12"), c(D, "class", "svelte-1c8cd3e"), c(_, "class", "svelte-1c8cd3e"), c(S, "type", "password"), S.required = true, c(S, "autocomplete", "new-password"), c(S, "class", "svelte-1c8cd3e"), c(w, "class", "svelte-1c8cd3e"), c(L, "type", "submit"), L.disabled = x[5], c(L, "class", "svelte-1c8cd3e"), c(r, "class", "svelte-1c8cd3e"), c(o, "class", "card svelte-1c8cd3e"), c(O, "class", "privacy-note svelte-1c8cd3e"), c(e, "class", "svelte-1c8cd3e");
          },
          m(G, j) {
            T(G, e, j), i(e, t), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(r, a), i(a, u), i(a, E), x0(E, x[4]), i(r, d), i(r, C), i(C, B), i(C, A), x0(A, x[0]), i(r, F), i(r, p), i(p, h), i(p, v), x0(v, x[1]), i(r, b), i(r, _), i(_, m), i(_, D), x0(D, x[2]), i(r, k), i(r, w), i(w, y), i(w, S), x0(S, x[3]), i(r, M), K && K.m(r, null), i(r, I), i(r, L), i(L, q), i(e, R), i(e, O), H || (Q = [
              U(t, "click", x[8]),
              U(t, "keypress", x[9]),
              U(E, "input", x[10]),
              U(A, "input", x[11]),
              U(v, "input", x[12]),
              U(D, "input", x[13]),
              U(S, "input", x[14]),
              U(r, "submit", re(x[7]))
            ], H = true);
          },
          p(G, [j]) {
            j & 16 && E.value !== G[4] && x0(E, G[4]), j & 1 && A.value !== G[0] && x0(A, G[0]), j & 2 && v.value !== G[1] && x0(v, G[1]), j & 4 && D.value !== G[2] && x0(D, G[2]), j & 8 && S.value !== G[3] && x0(S, G[3]), G[6] ? K ? K.p(G, j) : (K = cn(G), K.c(), K.m(r, I)) : K && (K.d(1), K = null), j & 32 && N !== (N = G[5] ? "Creating account\u2026" : "Create account") && V(q, N), j & 32 && (L.disabled = G[5]);
          },
          i: Z,
          o: Z,
          d(G) {
            G && P(e), K && K.d(), H = false, l0(Q);
          }
        };
      }
      const ei = "psbeta";
      function ti(x, e, t) {
        N0(() => {
          vl();
        });
        let n = "", o = "", l = "", s = "", r = "", a = false, u = null;
        async function E() {
          if (t(6, u = null), r !== ei) {
            t(6, u = "Sorry, we're in closed beta at the moment");
            return;
          }
          if (l !== s) {
            t(6, u = "Passwords do not match");
            return;
          }
          if (l.length < 12) {
            t(6, u = "Password must be at least 12 characters");
            return;
          }
          t(5, a = true);
          try {
            const { auth_salt: v, enc_salt: b } = await bx(n), _ = await se(l, L0(v)), m = t0(Bl(_));
            await na(n, o, m), pl(n);
            const D = await se(l, L0(b));
            kx(D), await Ml(), i0("/home");
          } catch (v) {
            t(6, u = v.message);
          } finally {
            t(5, a = false);
          }
        }
        const d = () => i0("/"), C = (v) => v.key === "Enter" && i0("/");
        function B() {
          r = this.value, t(4, r);
        }
        function A() {
          n = this.value, t(0, n);
        }
        function F() {
          o = this.value, t(1, o);
        }
        function p() {
          l = this.value, t(2, l);
        }
        function h() {
          s = this.value, t(3, s);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          u,
          E,
          d,
          C,
          B,
          A,
          F,
          p,
          h
        ];
      }
      class xi extends m0 {
        constructor(e) {
          super(), p0(this, e, ti, $a, F0, {});
        }
      }
      function un(x) {
        let e;
        return {
          c() {
            e = f("span"), c(e, "class", "unread-dot svelte-1dr2o73");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function ni(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C = x[1] ? "notifications_active" : "notifications", B, A, F, p, h, v, b, _, m, D, k = x[1] && un();
        return {
          c() {
            e = f("nav"), t = f("a"), t.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-1dr2o73"/> <span class="brand-label svelte-1dr2o73"><span class="brand-peach svelte-1dr2o73">Peach</span><span class="brand-safe svelte-1dr2o73">Safe</span></span>', n = g(), o = f("div"), l = f("a"), l.innerHTML = '<span class="material-icons svelte-1dr2o73">people</span> <span class="tab-label svelte-1dr2o73">Encounters</span>', s = g(), r = f("a"), r.innerHTML = '<span class="material-icons svelte-1dr2o73">science</span> <span class="tab-label svelte-1dr2o73">Test Results</span>', a = g(), u = f("a"), E = f("span"), d = f("span"), B = z(C), A = g(), k && k.c(), F = g(), p = f("span"), p.textContent = "Alerts", h = g(), v = f("a"), v.innerHTML = '<span class="material-icons svelte-1dr2o73">settings</span> <span class="tab-label svelte-1dr2o73">Settings</span>', b = g(), _ = f("button"), _.textContent = "Sign out", c(t, "href", "#/home"), c(t, "class", "brand svelte-1dr2o73"), c(l, "href", "#/encounters"), c(l, "class", "tab svelte-1dr2o73"), e0(l, "active", x[0] === "/encounters"), c(r, "href", "#/results"), c(r, "class", "tab svelte-1dr2o73"), e0(r, "active", x[0] === "/results"), c(d, "class", "material-icons svelte-1dr2o73"), c(E, "class", "icon-wrap svelte-1dr2o73"), c(p, "class", "tab-label svelte-1dr2o73"), c(u, "href", "#/alerts"), c(u, "class", "tab svelte-1dr2o73"), e0(u, "active", x[0] === "/alerts"), e0(u, "has-unread", x[1]), c(o, "class", "tabs svelte-1dr2o73"), c(v, "href", "#/settings"), c(v, "class", "tab settings-tab svelte-1dr2o73"), c(v, "title", "Settings"), e0(v, "active", x[0] === "/settings" || x[0] === "/change-password" || x[0] === "/settings/2fa-setup"), c(_, "class", "signout-btn svelte-1dr2o73"), c(e, "class", "svelte-1dr2o73");
          },
          m(w, y) {
            T(w, e, y), i(e, t), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(o, a), i(o, u), i(u, E), i(E, d), i(d, B), i(E, A), k && k.m(E, null), i(u, F), i(u, p), i(e, h), i(e, v), i(e, b), i(e, _), m || (D = U(_, "click", x[2]), m = true);
          },
          p(w, [y]) {
            y & 1 && e0(l, "active", w[0] === "/encounters"), y & 1 && e0(r, "active", w[0] === "/results"), y & 2 && C !== (C = w[1] ? "notifications_active" : "notifications") && V(B, C), w[1] ? k || (k = un(), k.c(), k.m(E, null)) : k && (k.d(1), k = null), y & 1 && e0(u, "active", w[0] === "/alerts"), y & 2 && e0(u, "has-unread", w[1]), y & 1 && e0(v, "active", w[0] === "/settings" || w[0] === "/change-password" || w[0] === "/settings/2fa-setup");
          },
          i: Z,
          o: Z,
          d(w) {
            w && P(e), k && k.d(), m = false, D();
          }
        };
      }
      function oi(x, e, t) {
        let n, o;
        O0(x, Cs, (s) => t(0, n = s)), O0(x, bl, (s) => t(1, o = s));
        async function l() {
          await gx(), i0("/login");
        }
        return [
          n,
          o,
          l
        ];
      }
      class ne extends m0 {
        constructor(e) {
          super(), p0(this, e, oi, ni, F0, {});
        }
      }
      function li(x) {
        let e, t, n, o;
        return e = new ne({}), {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), n.innerHTML = `<div class="hero svelte-16ahr9l"><div class="logo-wrap svelte-16ahr9l"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="logo-img svelte-16ahr9l"/></div> <h1 class="app-name svelte-16ahr9l"><span class="brand-peach svelte-16ahr9l">Peach</span><span class="brand-safe svelte-16ahr9l">Safe</span></h1></div> <div class="actions svelte-16ahr9l"><a href="#/encounter-exchange" class="btn-filled svelte-16ahr9l"><span class="material-icons svelte-16ahr9l">qr_code</span>
      Log New Encounter</a></div>`, c(n, "class", "svelte-16ahr9l");
          },
          m(l, s) {
            k0(e, l, s), T(l, t, s), T(l, n, s), o = true;
          },
          p: Z,
          i(l) {
            o || (f0(e.$$.fragment, l), o = true);
          },
          o(l) {
            C0(e.$$.fragment, l), o = false;
          },
          d(l) {
            l && (P(t), P(n)), b0(e, l);
          }
        };
      }
      function si(x) {
        return N0(() => {
          if (!V0()) {
            i0("/login");
            return;
          }
        }), [];
      }
      class ri extends m0 {
        constructor(e) {
          super(), p0(this, e, si, li, F0, {});
        }
      }
      function En(x, e, t) {
        const n = x.slice();
        return n[20] = e[t], n;
      }
      function fn(x, e, t) {
        const n = x.slice();
        return n[23] = e[t], n;
      }
      function dn(x, e, t) {
        const n = x.slice();
        return n[26] = e[t], n;
      }
      function Bn(x, e, t) {
        const n = x.slice();
        return n[23] = e[t], n;
      }
      function Cn(x) {
        let e, t, n, o, l, s, r, a, u, E, d = x[6] ? "Creating\u2026" : "Group encounter", C, B, A, F, p, h, v, b, _, m = x[7] && An(x);
        return {
          c() {
            e = f("div"), t = f("div"), n = f("p"), n.textContent = "New encounter", o = g(), l = f("button"), l.innerHTML = '<span class="material-icons type-icon svelte-81oe9z">person</span> <span class="type-label svelte-81oe9z">1:1 encounter</span> <span class="material-icons type-chevron svelte-81oe9z">chevron_right</span>', s = g(), r = f("button"), a = f("span"), a.textContent = "groups", u = g(), E = f("span"), C = z(d), B = g(), A = f("span"), A.textContent = "chevron_right", F = g(), m && m.c(), p = g(), h = f("button"), v = z("Cancel"), c(n, "class", "modal-title svelte-81oe9z"), c(l, "class", "type-card svelte-81oe9z"), c(a, "class", "material-icons type-icon svelte-81oe9z"), c(E, "class", "type-label svelte-81oe9z"), c(A, "class", "material-icons type-chevron svelte-81oe9z"), c(r, "class", "type-card svelte-81oe9z"), r.disabled = x[6], c(h, "class", "btn-text cancel-btn svelte-81oe9z"), h.disabled = x[6], c(t, "class", "modal-sheet svelte-81oe9z"), c(e, "class", "modal-backdrop svelte-81oe9z");
          },
          m(D, k) {
            T(D, e, k), i(e, t), i(t, n), i(t, o), i(t, l), i(t, s), i(t, r), i(r, a), i(r, u), i(r, E), i(E, C), i(r, B), i(r, A), i(t, F), m && m.m(t, null), i(t, p), i(t, h), i(h, v), b || (_ = [
              U(l, "click", x[14]),
              U(r, "click", x[10]),
              U(h, "click", x[15]),
              U(t, "click", ts(x[12])),
              U(e, "click", x[16])
            ], b = true);
          },
          p(D, k) {
            k & 64 && d !== (d = D[6] ? "Creating\u2026" : "Group encounter") && V(C, d), k & 64 && (r.disabled = D[6]), D[7] ? m ? m.p(D, k) : (m = An(D), m.c(), m.m(t, p)) : m && (m.d(1), m = null), k & 64 && (h.disabled = D[6]);
          },
          d(D) {
            D && P(e), m && m.d(), b = false, l0(_);
          }
        };
      }
      function An(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[7]), c(e, "class", "modal-error svelte-81oe9z");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o & 128 && V(t, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ai(x) {
        let e, t, n, o, l = x[9].length > 0 && Fn(x), s = x[1].length > 0 && pn(x), r = x[8].length > 0 && hn(x);
        function a(d, C) {
          return d[0].length === 0 && d[9].length === 0 && d[8].length === 0 && d[1].length === 0 ? fi : d[0].length === 0 ? Ei : ui;
        }
        let u = a(x), E = u(x);
        return {
          c() {
            l && l.c(), e = g(), s && s.c(), t = g(), r && r.c(), n = g(), o = f("section"), E.c(), c(o, "class", "card list-card svelte-81oe9z");
          },
          m(d, C) {
            l && l.m(d, C), T(d, e, C), s && s.m(d, C), T(d, t, C), r && r.m(d, C), T(d, n, C), T(d, o, C), E.m(o, null);
          },
          p(d, C) {
            d[9].length > 0 ? l ? l.p(d, C) : (l = Fn(d), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), d[1].length > 0 ? s ? s.p(d, C) : (s = pn(d), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), d[8].length > 0 ? r ? r.p(d, C) : (r = hn(d), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), u === (u = a(d)) && E ? E.p(d, C) : (E.d(1), E = u(d), E && (E.c(), E.m(o, null)));
          },
          d(d) {
            d && (P(e), P(t), P(n), P(o)), l && l.d(d), s && s.d(d), r && r.d(d), E.d();
          }
        };
      }
      function ii(x) {
        let e, t, n;
        return {
          c() {
            e = f("section"), t = f("p"), n = z(x[3]), c(t, "class", "error svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(o, l) {
            T(o, e, l), i(e, t), i(t, n);
          },
          p(o, l) {
            l & 8 && V(n, o[3]);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function ci(x) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<p class="muted svelte-81oe9z">Loading\u2026</p>', c(e, "class", "card list-card svelte-81oe9z");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function Fn(x) {
        let e, t, n, o, l = d0(x[9]), s = [];
        for (let r = 0; r < l.length; r += 1) s[r] = Dn(Bn(x, l, r));
        return {
          c() {
            e = f("section"), t = f("div"), t.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">favorite</span> <h2 class="svelte-81oe9z">Ongoing partners</h2>', n = g(), o = f("ul");
            for (let r = 0; r < s.length; r += 1) s[r].c();
            c(t, "class", "section-header svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o);
            for (let u = 0; u < s.length; u += 1) s[u] && s[u].m(o, null);
          },
          p(r, a) {
            if (a & 512) {
              l = d0(r[9]);
              let u;
              for (u = 0; u < l.length; u += 1) {
                const E = Bn(r, l, u);
                s[u] ? s[u].p(E, a) : (s[u] = Dn(E), s[u].c(), s[u].m(o, null));
              }
              for (; u < s.length; u += 1) s[u].d(1);
              s.length = l.length;
            }
          },
          d(r) {
            r && P(e), j0(s, r);
          }
        };
      }
      function Dn(x) {
        let e, t, n, o, l, s, r = St(x[23]) + "", a, u, E, d = It(x[23]) + "", C, B, A, F, p;
        return {
          c() {
            e = f("li"), t = f("a"), n = f("span"), n.textContent = "favorite", o = g(), l = f("span"), s = f("span"), a = z(r), u = g(), E = f("span"), C = z(d), B = g(), A = f("span"), A.textContent = "chevron_right", p = g(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(s, "class", "rel-name svelte-81oe9z"), c(E, "class", "rel-sub svelte-81oe9z"), c(l, "class", "rel-main svelte-81oe9z"), c(A, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", F = "#/relationships/" + t0(x[23].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(t, n), i(t, o), i(t, l), i(l, s), i(s, a), i(l, u), i(l, E), i(E, C), i(t, B), i(t, A), i(e, p);
          },
          p(h, v) {
            v & 512 && r !== (r = St(h[23]) + "") && V(a, r), v & 512 && d !== (d = It(h[23]) + "") && V(C, d), v & 512 && F !== (F = "#/relationships/" + t0(h[23].rawToken)) && c(t, "href", F);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function pn(x) {
        let e, t, n, o, l = d0(x[1]), s = [];
        for (let r = 0; r < l.length; r += 1) s[r] = mn(dn(x, l, r));
        return {
          c() {
            e = f("section"), t = f("div"), t.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">groups</span> <h2 class="svelte-81oe9z">Group encounters</h2>', n = g(), o = f("ul");
            for (let r = 0; r < s.length; r += 1) s[r].c();
            c(t, "class", "section-header svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o);
            for (let u = 0; u < s.length; u += 1) s[u] && s[u].m(o, null);
          },
          p(r, a) {
            if (a & 2) {
              l = d0(r[1]);
              let u;
              for (u = 0; u < l.length; u += 1) {
                const E = dn(r, l, u);
                s[u] ? s[u].p(E, a) : (s[u] = mn(E), s[u].c(), s[u].m(o, null));
              }
              for (; u < s.length; u += 1) s[u].d(1);
              s.length = l.length;
            }
          },
          d(r) {
            r && P(e), j0(s, r);
          }
        };
      }
      function mn(x) {
        let e, t, n, o, l, s, r = bn(x[26]) + "", a, u, E, d = gn(x[26]) + "", C, B, A, F, p;
        return {
          c() {
            e = f("li"), t = f("a"), n = f("span"), n.textContent = "groups", o = g(), l = f("span"), s = f("span"), a = z(r), u = g(), E = f("span"), C = z(d), B = g(), A = f("span"), A.textContent = "chevron_right", p = g(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(s, "class", "rel-name svelte-81oe9z"), c(E, "class", "rel-sub svelte-81oe9z"), c(l, "class", "rel-main svelte-81oe9z"), c(A, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", F = "#/groups/" + t0(x[26].token)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(t, n), i(t, o), i(t, l), i(l, s), i(s, a), i(l, u), i(l, E), i(E, C), i(t, B), i(t, A), i(e, p);
          },
          p(h, v) {
            v & 2 && r !== (r = bn(h[26]) + "") && V(a, r), v & 2 && d !== (d = gn(h[26]) + "") && V(C, d), v & 2 && F !== (F = "#/groups/" + t0(h[26].token)) && c(t, "href", F);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function hn(x) {
        let e, t, n, o = x[4] ? "expand_less" : "expand_more", l, s, r, a, u = x[8].length + "", E, d, C, B, A, F = x[4] && vn(x);
        return {
          c() {
            e = f("section"), t = f("button"), n = f("span"), l = z(o), s = g(), r = f("span"), a = z("Archived partners ("), E = z(u), d = z(")"), C = g(), F && F.c(), c(n, "class", "material-icons toggle-icon svelte-81oe9z"), c(r, "class", "muted-label svelte-81oe9z"), c(t, "class", "collapse-toggle svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(p, h) {
            T(p, e, h), i(e, t), i(t, n), i(n, l), i(t, s), i(t, r), i(r, a), i(r, E), i(r, d), i(e, C), F && F.m(e, null), B || (A = U(t, "click", x[17]), B = true);
          },
          p(p, h) {
            h & 16 && o !== (o = p[4] ? "expand_less" : "expand_more") && V(l, o), h & 256 && u !== (u = p[8].length + "") && V(E, u), p[4] ? F ? F.p(p, h) : (F = vn(p), F.c(), F.m(e, null)) : F && (F.d(1), F = null);
          },
          d(p) {
            p && P(e), F && F.d(), B = false, A();
          }
        };
      }
      function vn(x) {
        let e, t = d0(x[8]), n = [];
        for (let o = 0; o < t.length; o += 1) n[o] = _n(fn(x, t, o));
        return {
          c() {
            e = f("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-81oe9z");
          },
          m(o, l) {
            T(o, e, l);
            for (let s = 0; s < n.length; s += 1) n[s] && n[s].m(e, null);
          },
          p(o, l) {
            if (l & 256) {
              t = d0(o[8]);
              let s;
              for (s = 0; s < t.length; s += 1) {
                const r = fn(o, t, s);
                n[s] ? n[s].p(r, l) : (n[s] = _n(r), n[s].c(), n[s].m(e, null));
              }
              for (; s < n.length; s += 1) n[s].d(1);
              n.length = t.length;
            }
          },
          d(o) {
            o && P(e), j0(n, o);
          }
        };
      }
      function _n(x) {
        let e, t, n, o, l, s, r = St(x[23]) + "", a, u, E, d = It(x[23]) + "", C, B, A, F, p;
        return {
          c() {
            e = f("li"), t = f("a"), n = f("span"), n.textContent = "favorite_border", o = g(), l = f("span"), s = f("span"), a = z(r), u = g(), E = f("span"), C = z(d), B = g(), A = f("span"), A.textContent = "chevron_right", p = g(), c(n, "class", "material-icons rel-icon ended svelte-81oe9z"), c(s, "class", "rel-name svelte-81oe9z"), c(E, "class", "rel-sub svelte-81oe9z"), c(l, "class", "rel-main svelte-81oe9z"), c(A, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", F = "#/relationships/" + t0(x[23].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(t, n), i(t, o), i(t, l), i(l, s), i(s, a), i(l, u), i(l, E), i(E, C), i(t, B), i(t, A), i(e, p);
          },
          p(h, v) {
            v & 256 && r !== (r = St(h[23]) + "") && V(a, r), v & 256 && d !== (d = It(h[23]) + "") && V(C, d), v & 256 && F !== (F = "#/relationships/" + t0(h[23].rawToken)) && c(t, "href", F);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function ui(x) {
        let e, t, n, o = d0(x[0]), l = [];
        for (let s = 0; s < o.length; s += 1) l[s] = kn(En(x, o, s));
        return {
          c() {
            e = f("div"), e.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">check_circle_outline</span> <h2 class="svelte-81oe9z">One-time encounters</h2>', t = g(), n = f("ul");
            for (let s = 0; s < l.length; s += 1) l[s].c();
            c(e, "class", "section-header svelte-81oe9z"), c(n, "class", "svelte-81oe9z");
          },
          m(s, r) {
            T(s, e, r), T(s, t, r), T(s, n, r);
            for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(n, null);
          },
          p(s, r) {
            if (r & 1) {
              o = d0(s[0]);
              let a;
              for (a = 0; a < o.length; a += 1) {
                const u = En(s, o, a);
                l[a] ? l[a].p(u, r) : (l[a] = kn(u), l[a].c(), l[a].m(n, null));
              }
              for (; a < l.length; a += 1) l[a].d(1);
              l.length = o.length;
            }
          },
          d(s) {
            s && (P(e), P(t), P(n)), j0(l, s);
          }
        };
      }
      function Ei(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "No one-time encounters.", c(e, "class", "muted list-muted svelte-81oe9z");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function fi(x) {
        let e, t, n, o, l, s, r, a;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "people_outline", n = g(), o = f("p"), o.textContent = "No encounters recorded yet.", l = g(), s = f("button"), s.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, c(t, "class", "material-icons empty-icon svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(s, "class", "btn-filled svelte-81oe9z"), c(e, "class", "empty-state svelte-81oe9z");
          },
          m(u, E) {
            T(u, e, E), i(e, t), i(e, n), i(e, o), i(e, l), i(e, s), r || (a = U(s, "click", x[18]), r = true);
          },
          p: Z,
          d(u) {
            u && P(e), r = false, a();
          }
        };
      }
      function di(x) {
        let e, t = t0(x[20].rawToken).slice(0, 12) + "", n, o;
        return {
          c() {
            e = f("span"), n = z(t), o = z("\u2026"), c(e, "class", "rel-sub enc-token svelte-81oe9z");
          },
          m(l, s) {
            T(l, e, s), i(e, n), i(e, o);
          },
          p(l, s) {
            s & 1 && t !== (t = t0(l[20].rawToken).slice(0, 12) + "") && V(n, t);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Bi(x) {
        let e, t = x[20].note + "", n;
        return {
          c() {
            e = f("span"), n = z(t), c(e, "class", "rel-sub enc-note svelte-81oe9z");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l & 1 && t !== (t = o[20].note + "") && V(n, t);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function kn(x) {
        let e, t, n, o, l, s, r = x[20].date + "", a, u, E, d, C, B;
        function A(h, v) {
          return h[20].note ? Bi : di;
        }
        let F = A(x), p = F(x);
        return {
          c() {
            e = f("li"), t = f("a"), n = f("span"), n.textContent = "check_circle_outline", o = g(), l = f("span"), s = f("span"), a = z(r), u = g(), p.c(), E = g(), d = f("span"), d.textContent = "chevron_right", B = g(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(s, "class", "rel-name svelte-81oe9z"), c(l, "class", "rel-main svelte-81oe9z"), c(d, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", C = "#/encounters/" + t0(x[20].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(t, n), i(t, o), i(t, l), i(l, s), i(s, a), i(l, u), p.m(l, null), i(t, E), i(t, d), i(e, B);
          },
          p(h, v) {
            v & 1 && r !== (r = h[20].date + "") && V(a, r), F === (F = A(h)) && p ? p.p(h, v) : (p.d(1), p = F(h), p && (p.c(), p.m(l, null))), v & 1 && C !== (C = "#/encounters/" + t0(h[20].rawToken)) && c(t, "href", C);
          },
          d(h) {
            h && P(e), p.d();
          }
        };
      }
      function Ci(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C;
        e = new ne({});
        let B = x[5] && Cn(x);
        function A(h, v) {
          return h[2] ? ci : h[3] ? ii : ai;
        }
        let F = A(x), p = F(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), o = f("div"), l = f("h1"), l.textContent = "Encounters", s = g(), r = f("button"), r.innerHTML = '<span class="material-icons">add</span>', a = g(), B && B.c(), u = g(), p.c(), c(l, "class", "svelte-81oe9z"), c(r, "class", "fab svelte-81oe9z"), c(r, "title", "Add encounter"), c(o, "class", "page-header svelte-81oe9z"), c(n, "class", "svelte-81oe9z");
          },
          m(h, v) {
            k0(e, h, v), T(h, t, v), T(h, n, v), i(n, o), i(o, l), i(o, s), i(o, r), i(n, a), B && B.m(n, null), i(n, u), p.m(n, null), E = true, d || (C = U(r, "click", x[13]), d = true);
          },
          p(h, [v]) {
            h[5] ? B ? B.p(h, v) : (B = Cn(h), B.c(), B.m(n, u)) : B && (B.d(1), B = null), F === (F = A(h)) && p ? p.p(h, v) : (p.d(1), p = F(h), p && (p.c(), p.m(n, null)));
          },
          i(h) {
            E || (f0(e.$$.fragment, h), E = true);
          },
          o(h) {
            C0(e.$$.fragment, h), E = false;
          },
          d(h) {
            h && (P(t), P(n)), b0(e, h), B && B.d(), p.d(), d = false, C();
          }
        };
      }
      function St(x) {
        return x.name ? x.name : x.endedAt ? "Ended partner" : "Active partner";
      }
      function It(x) {
        return x.endedAt ? "Ended " + x.endedAt : "Since " + x.createdAt;
      }
      function bn(x) {
        return x.name || "Group encounter";
      }
      function gn(x) {
        return (x.isHost ? "Host \xB7 " : "") + x.date;
      }
      function Ai(x, e, t) {
        let n, o, l = [], s = [], r = [], a = true, u = null, E = false, d = false, C = false, B = null;
        N0(() => {
          if (!V0()) {
            i0("/login");
            return;
          }
          A();
        });
        function A() {
          t(2, a = true), t(3, u = null);
          try {
            t(0, l = Sl()), t(11, s = Mx()), t(1, r = Il());
          } catch (k) {
            t(3, u = k.message);
          } finally {
            t(2, a = false);
          }
        }
        async function F() {
          t(6, C = true), t(7, B = null);
          try {
            const k = tt(32), w = ce(), y = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
            await Ll(k, y, true, w, null), t(5, d = false), i0("/groups/" + t0(k));
          } catch (k) {
            t(7, B = k.message);
          } finally {
            t(6, C = false);
          }
        }
        function p(k) {
          ax.call(this, x, k);
        }
        const h = () => t(5, d = true), v = () => {
          t(5, d = false), i0("/encounter-exchange");
        }, b = () => t(5, d = false), _ = () => {
          C || t(5, d = false);
        }, m = () => t(4, E = !E), D = () => t(5, d = true);
        return x.$$.update = () => {
          x.$$.dirty & 2048 && t(9, n = s.filter((k) => !k.archived)), x.$$.dirty & 2048 && t(8, o = s.filter((k) => k.archived));
        }, [
          l,
          r,
          a,
          u,
          E,
          d,
          C,
          B,
          o,
          n,
          F,
          s,
          p,
          h,
          v,
          b,
          _,
          m,
          D
        ];
      }
      class Fi extends m0 {
        constructor(e) {
          super(), p0(this, e, Ai, Ci, F0, {});
        }
      }
      function Di(x) {
        let e, t, n, o, l = x[7] ? "favorite" : "favorite_border", s, r, a, u, E = x[7] ? "Active partner" : "Ended", d, C, B, A, F, p, h = Mt(x[0].createdAt) + "", v, b, _, m, D, k, w, y, S, M, I = x[3] && wn(x), L = x[0].archived && yn(), N = x[0].endedAt && Pn(x);
        function q(J, a0) {
          return J[4] ? hi : mi;
        }
        let R = q(x), O = R(x);
        function H(J, a0) {
          return J[7] ? _i : vi;
        }
        let Q = H(x), K = Q(x);
        function G(J, a0) {
          return J[0].archived ? yi : J[6] === "archive" ? wi : gi;
        }
        let j = G(x), W = j(x);
        return {
          c() {
            I && I.c(), e = g(), t = f("section"), n = f("div"), o = f("span"), s = z(l), r = g(), a = f("div"), u = f("span"), d = z(E), C = g(), L && L.c(), B = g(), A = f("div"), F = f("span"), p = z("Since "), v = z(h), b = g(), N && N.c(), _ = g(), m = f("section"), O.c(), D = g(), k = f("div"), w = g(), K.c(), y = g(), S = f("div"), M = g(), W.c(), c(o, "class", "material-icons status-icon svelte-1lfam"), e0(o, "active", x[7]), e0(o, "ended", !x[7]), c(u, "class", "status-label svelte-1lfam"), e0(u, "active", x[7]), c(a, "class", "status-text svelte-1lfam"), c(n, "class", "status-row svelte-1lfam"), c(A, "class", "dates svelte-1lfam"), c(t, "class", "card pad svelte-1lfam"), c(k, "class", "divider svelte-1lfam"), c(S, "class", "divider svelte-1lfam"), c(m, "class", "card svelte-1lfam");
          },
          m(J, a0) {
            I && I.m(J, a0), T(J, e, a0), T(J, t, a0), i(t, n), i(n, o), i(o, s), i(n, r), i(n, a), i(a, u), i(u, d), i(a, C), L && L.m(a, null), i(t, B), i(t, A), i(A, F), i(F, p), i(F, v), i(A, b), N && N.m(A, null), T(J, _, a0), T(J, m, a0), O.m(m, null), i(m, D), i(m, k), i(m, w), K.m(m, null), i(m, y), i(m, S), i(m, M), W.m(m, null);
          },
          p(J, a0) {
            J[3] ? I ? I.p(J, a0) : (I = wn(J), I.c(), I.m(e.parentNode, e)) : I && (I.d(1), I = null), a0 & 128 && l !== (l = J[7] ? "favorite" : "favorite_border") && V(s, l), a0 & 128 && e0(o, "active", J[7]), a0 & 128 && e0(o, "ended", !J[7]), a0 & 128 && E !== (E = J[7] ? "Active partner" : "Ended") && V(d, E), a0 & 128 && e0(u, "active", J[7]), J[0].archived ? L || (L = yn(), L.c(), L.m(a, null)) : L && (L.d(1), L = null), a0 & 1 && h !== (h = Mt(J[0].createdAt) + "") && V(v, h), J[0].endedAt ? N ? N.p(J, a0) : (N = Pn(J), N.c(), N.m(A, null)) : N && (N.d(1), N = null), R === (R = q(J)) && O ? O.p(J, a0) : (O.d(1), O = R(J), O && (O.c(), O.m(m, D))), Q === (Q = H(J)) && K ? K.p(J, a0) : (K.d(1), K = Q(J), K && (K.c(), K.m(m, y))), j === (j = G(J)) && W ? W.p(J, a0) : (W.d(1), W = j(J), W && (W.c(), W.m(m, null)));
          },
          d(J) {
            J && (P(e), P(t), P(_), P(m)), I && I.d(J), L && L.d(), N && N.d(), O.d(), K.d(), W.d();
          }
        };
      }
      function pi(x) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<p class="muted svelte-1lfam">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-1lfam">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-1lfam");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function wn(x) {
        let e, t, n, o;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "error_outline", n = g(), o = z(x[3]), c(t, "class", "material-icons svelte-1lfam"), c(e, "class", "toast error-toast svelte-1lfam");
          },
          m(l, s) {
            T(l, e, s), i(e, t), i(e, n), i(e, o);
          },
          p(l, s) {
            s & 8 && V(o, l[3]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function yn(x) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "archived", c(e, "class", "badge archived svelte-1lfam");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Pn(x) {
        let e, t, n = Mt(x[0].endedAt) + "", o;
        return {
          c() {
            e = f("span"), t = z("Ended "), o = z(n);
          },
          m(l, s) {
            T(l, e, s), i(e, t), i(e, o);
          },
          p(l, s) {
            s & 1 && n !== (n = Mt(l[0].endedAt) + "") && V(o, n);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function mi(x) {
        let e, t, n, o, l = (x[0].name ? x[0].name : "Add nickname") + "", s, r, a, u, E, d, C = x[0].name && Tn();
        return {
          c() {
            e = f("button"), t = f("span"), t.textContent = "edit", n = g(), o = f("span"), s = z(l), r = g(), C && C.c(), a = g(), u = f("span"), u.textContent = "chevron_right", c(t, "class", "material-icons action-icon svelte-1lfam"), c(o, "class", "action-label svelte-1lfam"), c(u, "class", "material-icons action-chevron svelte-1lfam"), c(e, "class", "action-row svelte-1lfam");
          },
          m(B, A) {
            T(B, e, A), i(e, t), i(e, n), i(e, o), i(o, s), i(o, r), C && C.m(o, null), i(e, a), i(e, u), E || (d = U(e, "click", x[13]), E = true);
          },
          p(B, A) {
            A & 1 && l !== (l = (B[0].name ? B[0].name : "Add nickname") + "") && V(s, l), B[0].name ? C || (C = Tn(), C.c(), C.m(o, null)) : C && (C.d(1), C = null);
          },
          d(B) {
            B && P(e), C && C.d(), E = false, d();
          }
        };
      }
      function hi(x) {
        let e, t, n, o, l, s, r, a, u, E, d = x[2] ? "Saving\u2026" : "Save", C, B, A;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "edit", n = g(), o = f("form"), l = f("input"), s = g(), r = f("div"), a = f("button"), a.textContent = "Cancel", u = g(), E = f("button"), C = z(d), c(t, "class", "material-icons action-icon svelte-1lfam"), c(l, "type", "text"), c(l, "placeholder", "Optional nickname"), c(l, "maxlength", "64"), l.autofocus = true, c(l, "class", "svelte-1lfam"), c(a, "type", "button"), c(a, "class", "btn-text svelte-1lfam"), c(E, "type", "submit"), c(E, "class", "btn-filled-sm svelte-1lfam"), E.disabled = x[2], c(r, "class", "name-actions svelte-1lfam"), c(o, "class", "name-form svelte-1lfam"), c(e, "class", "action-row edit-name-row svelte-1lfam");
          },
          m(F, p) {
            T(F, e, p), i(e, t), i(e, n), i(e, o), i(o, l), x0(l, x[5]), i(o, s), i(o, r), i(r, a), i(r, u), i(r, E), i(E, C), l.focus(), B || (A = [
              U(l, "input", x[16]),
              U(a, "click", x[14]),
              U(o, "submit", re(x[9]))
            ], B = true);
          },
          p(F, p) {
            p & 32 && l.value !== F[5] && x0(l, F[5]), p & 4 && d !== (d = F[2] ? "Saving\u2026" : "Save") && V(C, d), p & 4 && (E.disabled = F[2]);
          },
          d(F) {
            F && P(e), B = false, l0(A);
          }
        };
      }
      function Tn(x) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Tap to change", c(e, "class", "action-sub svelte-1lfam");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function vi(x) {
        let e, t, n, o, l, s;
        return {
          c() {
            e = f("button"), t = f("span"), t.textContent = "favorite", n = g(), o = f("span"), o.textContent = "Mark as active again", c(t, "class", "material-icons action-icon primary svelte-1lfam"), c(o, "class", "action-label primary svelte-1lfam"), c(e, "class", "action-row svelte-1lfam"), e.disabled = x[2];
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o), l || (s = U(e, "click", x[11]), l = true);
          },
          p(r, a) {
            a & 4 && (e.disabled = r[2]);
          },
          d(r) {
            r && P(e), l = false, s();
          }
        };
      }
      function _i(x) {
        let e;
        function t(l, s) {
          return l[6] === "end" ? bi : ki;
        }
        let n = t(x), o = n(x);
        return {
          c() {
            o.c(), e = X0();
          },
          m(l, s) {
            o.m(l, s), T(l, e, s);
          },
          p(l, s) {
            n === (n = t(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e.parentNode, e)));
          },
          d(l) {
            l && P(e), o.d(l);
          }
        };
      }
      function ki(x) {
        let e, t, n;
        return {
          c() {
            e = f("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-1lfam">heart_broken</span> <span class="action-label danger svelte-1lfam">Mark as ended</span>', c(e, "class", "action-row svelte-1lfam");
          },
          m(o, l) {
            T(o, e, l), t || (n = U(e, "click", x[18]), t = true);
          },
          p: Z,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function bi(x) {
        let e, t, n, o, l, s, r, a = x[2] ? "Saving\u2026" : "Mark as ended", u, E, d;
        return {
          c() {
            e = f("div"), t = f("p"), t.textContent = "Mark this partnership as ended?", n = g(), o = f("div"), l = f("button"), l.textContent = "Cancel", s = g(), r = f("button"), u = z(a), c(t, "class", "confirm-text svelte-1lfam"), c(l, "class", "btn-text svelte-1lfam"), c(r, "class", "btn-danger-sm svelte-1lfam"), r.disabled = x[2], c(o, "class", "confirm-actions svelte-1lfam"), c(e, "class", "confirm-row svelte-1lfam");
          },
          m(C, B) {
            T(C, e, B), i(e, t), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(r, u), E || (d = [
              U(l, "click", x[17]),
              U(r, "click", x[10])
            ], E = true);
          },
          p(C, B) {
            B & 4 && a !== (a = C[2] ? "Saving\u2026" : "Mark as ended") && V(u, a), B & 4 && (r.disabled = C[2]);
          },
          d(C) {
            C && P(e), E = false, l0(d);
          }
        };
      }
      function gi(x) {
        let e, t, n;
        return {
          c() {
            e = f("button"), e.innerHTML = '<span class="material-icons action-icon svelte-1lfam">archive</span> <span class="action-label svelte-1lfam">Archive</span> <span class="action-sub-right svelte-1lfam">Hide from main list</span>', c(e, "class", "action-row svelte-1lfam");
          },
          m(o, l) {
            T(o, e, l), t || (n = U(e, "click", x[22]), t = true);
          },
          p: Z,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function wi(x) {
        let e, t, n, o, l, s, r, a = x[2] ? "Saving\u2026" : "Archive", u, E, d;
        return {
          c() {
            e = f("div"), t = f("p"), t.textContent = "Archive this partner? They will be hidden from the main list.", n = g(), o = f("div"), l = f("button"), l.textContent = "Cancel", s = g(), r = f("button"), u = z(a), c(t, "class", "confirm-text svelte-1lfam"), c(l, "class", "btn-text svelte-1lfam"), c(r, "class", "btn-filled-sm svelte-1lfam"), r.disabled = x[2], c(o, "class", "confirm-actions svelte-1lfam"), c(e, "class", "confirm-row svelte-1lfam");
          },
          m(C, B) {
            T(C, e, B), i(e, t), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(r, u), E || (d = [
              U(l, "click", x[20]),
              U(r, "click", x[21])
            ], E = true);
          },
          p(C, B) {
            B & 4 && a !== (a = C[2] ? "Saving\u2026" : "Archive") && V(u, a), B & 4 && (r.disabled = C[2]);
          },
          d(C) {
            C && P(e), E = false, l0(d);
          }
        };
      }
      function yi(x) {
        let e, t, n, o, l, s;
        return {
          c() {
            e = f("button"), t = f("span"), t.textContent = "unarchive", n = g(), o = f("span"), o.textContent = "Unarchive", c(t, "class", "material-icons action-icon primary svelte-1lfam"), c(o, "class", "action-label primary svelte-1lfam"), c(e, "class", "action-row svelte-1lfam"), e.disabled = x[2];
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o), l || (s = U(e, "click", x[19]), l = true);
          },
          p(r, a) {
            a & 4 && (e.disabled = r[2]);
          },
          d(r) {
            r && P(e), l = false, s();
          }
        };
      }
      function Pi(x) {
        let e, t, n, o, l, s, r, a = (x[1] ? "Partner not found" : x[8]) + "", u, E, d;
        e = new ne({});
        function C(F, p) {
          if (F[1]) return pi;
          if (F[0]) return Di;
        }
        let B = C(x), A = B && B(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), o = f("div"), l = f("a"), l.innerHTML = '<span class="material-icons svelte-1lfam">arrow_back</span>', s = g(), r = f("h1"), u = z(a), E = g(), A && A.c(), c(l, "class", "back-btn svelte-1lfam"), c(l, "href", "#/encounters"), c(r, "class", "svelte-1lfam"), c(o, "class", "page-header svelte-1lfam"), c(n, "class", "svelte-1lfam");
          },
          m(F, p) {
            k0(e, F, p), T(F, t, p), T(F, n, p), i(n, o), i(o, l), i(o, s), i(o, r), i(r, u), i(n, E), A && A.m(n, null), d = true;
          },
          p(F, [p]) {
            (!d || p & 258) && a !== (a = (F[1] ? "Partner not found" : F[8]) + "") && V(u, a), B === (B = C(F)) && A ? A.p(F, p) : (A && A.d(1), A = B && B(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            d || (f0(e.$$.fragment, F), d = true);
          },
          o(F) {
            C0(e.$$.fragment, F), d = false;
          },
          d(F) {
            F && (P(t), P(n)), b0(e, F), A && A.d();
          }
        };
      }
      function Mt(x) {
        return x ? (/* @__PURE__ */ new Date(x + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Ti(x, e, t) {
        let n, o, { params: l = {} } = e, s = null, r = false, a = false, u = null, E = false, d = "", C = null;
        N0(() => {
          if (!V0()) {
            i0("/login");
            return;
          }
          B();
        });
        function B() {
          const I = Mx(), L = l.rawTokenHex;
          t(0, s = I.find((N) => t0(N.rawToken) === L) ?? null), s || t(1, r = true);
        }
        function A() {
          return t0(s.rawToken);
        }
        async function F() {
          if (!a) {
            t(2, a = true), t(3, u = null);
            try {
              const I = d.trim();
              await Bt(A(), {
                name: I || null
              }), B(), t(4, E = false);
            } catch (I) {
              t(3, u = I.message);
            } finally {
              t(2, a = false);
            }
          }
        }
        async function p() {
          if (!a) {
            t(2, a = true), t(3, u = null);
            try {
              const I = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              await Bt(A(), {
                endedAt: I
              }), B();
            } catch (I) {
              t(3, u = I.message);
            } finally {
              t(2, a = false), t(6, C = null);
            }
          }
        }
        async function h() {
          if (!a) {
            t(2, a = true), t(3, u = null);
            try {
              await Bt(A(), {
                endedAt: null
              }), B();
            } catch (I) {
              t(3, u = I.message);
            } finally {
              t(2, a = false);
            }
          }
        }
        async function v(I) {
          if (!a) {
            t(2, a = true), t(3, u = null);
            try {
              await Bt(A(), {
                archived: I
              }), B();
            } catch (L) {
              t(3, u = L.message);
            } finally {
              t(2, a = false), t(6, C = null);
            }
          }
        }
        function b() {
          t(5, d = s.name ?? ""), t(4, E = true), t(3, u = null);
        }
        function _() {
          t(4, E = false), t(3, u = null);
        }
        function m() {
          d = this.value, t(5, d);
        }
        const D = () => t(6, C = null), k = () => t(6, C = "end"), w = () => v(false), y = () => t(6, C = null), S = () => v(true), M = () => t(6, C = "archive");
        return x.$$set = (I) => {
          "params" in I && t(15, l = I.params);
        }, x.$$.update = () => {
          x.$$.dirty & 1 && t(8, n = s?.name || (s?.endedAt ? "Ended partner" : "Active partner")), x.$$.dirty & 1 && t(7, o = s && !s.endedAt);
        }, [
          s,
          r,
          a,
          u,
          E,
          d,
          C,
          o,
          n,
          F,
          p,
          h,
          v,
          b,
          _,
          l,
          m,
          D,
          k,
          w,
          y,
          S,
          M
        ];
      }
      class Si extends m0 {
        constructor(e) {
          super(), p0(this, e, Ti, Pi, F0, {
            params: 15
          });
        }
      }
      function Sn(x, e, t) {
        const n = x.slice();
        n[18] = e[t], n[21] = t;
        const o = n[6].length - 1 - n[21];
        return n[19] = o, n;
      }
      function In(x, e, t) {
        const n = x.slice();
        return n[22] = e[t], n[23] = e, n[24] = t, n;
      }
      function Ii(x) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved. (No encounters on record to notify.)`, c(e, "class", "toast success svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Mi(x) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved.`, c(e, "class", "toast success svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Li(x) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved. Partners notified.`, c(e, "class", "toast success svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Mn(x) {
        let e, t, n, o;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "error_outline", n = g(), o = z(x[5]), c(t, "class", "material-icons svelte-1ugndgv"), c(e, "class", "toast error-toast svelte-1ugndgv");
          },
          m(l, s) {
            T(l, e, s), i(e, t), i(e, n), i(e, o);
          },
          p(l, s) {
            s & 32 && V(o, l[5]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Ln(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b, _, m = x[3] && x[4] === "computing" ? "Saving\u2026" : "Save result", D, k, w, y = d0(xe), S = [];
        for (let I = 0; I < y.length; I += 1) S[I] = Nn(In(x, y, I));
        let M = x[4] === "computing" && zn();
        return {
          c() {
            e = f("section"), t = f("h2"), t.textContent = "Record a result", n = g(), o = f("p"), o.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, l = g(), s = f("form"), r = f("label"), a = z(`Test date
          `), u = f("input"), E = g(), d = f("fieldset"), C = f("legend"), C.textContent = "Positive results", B = g(), A = f("div");
            for (let I = 0; I < S.length; I += 1) S[I].c();
            F = g(), M && M.c(), p = g(), h = f("div"), v = f("button"), v.textContent = "Cancel", b = g(), _ = f("button"), D = z(m), c(t, "class", "svelte-1ugndgv"), c(o, "class", "help svelte-1ugndgv"), c(u, "type", "date"), u.required = true, c(u, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), c(u, "class", "svelte-1ugndgv"), c(r, "class", "svelte-1ugndgv"), c(C, "class", "svelte-1ugndgv"), c(A, "class", "disease-grid svelte-1ugndgv"), c(d, "class", "svelte-1ugndgv"), c(v, "type", "button"), c(v, "class", "btn-text svelte-1ugndgv"), c(_, "type", "submit"), c(_, "class", "btn-filled svelte-1ugndgv"), _.disabled = x[3], c(h, "class", "form-actions svelte-1ugndgv"), c(s, "class", "svelte-1ugndgv"), c(e, "class", "card form-card svelte-1ugndgv");
          },
          m(I, L) {
            T(I, e, L), i(e, t), i(e, n), i(e, o), i(e, l), i(e, s), i(s, r), i(r, a), i(r, u), x0(u, x[0]), i(s, E), i(s, d), i(d, C), i(d, B), i(d, A);
            for (let N = 0; N < S.length; N += 1) S[N] && S[N].m(A, null);
            i(s, F), M && M.m(s, null), i(s, p), i(s, h), i(h, v), i(h, b), i(h, _), i(_, D), k || (w = [
              U(u, "input", x[11]),
              U(v, "click", x[13]),
              U(s, "submit", re(x[8]))
            ], k = true);
          },
          p(I, L) {
            if (L & 1 && x0(u, I[0]), L & 2) {
              y = d0(xe);
              let N;
              for (N = 0; N < y.length; N += 1) {
                const q = In(I, y, N);
                S[N] ? S[N].p(q, L) : (S[N] = Nn(q), S[N].c(), S[N].m(A, null));
              }
              for (; N < S.length; N += 1) S[N].d(1);
              S.length = y.length;
            }
            I[4] === "computing" ? M || (M = zn(), M.c(), M.m(s, p)) : M && (M.d(1), M = null), L & 24 && m !== (m = I[3] && I[4] === "computing" ? "Saving\u2026" : "Save result") && V(D, m), L & 8 && (_.disabled = I[3]);
          },
          d(I) {
            I && P(e), j0(S, I), M && M.d(), k = false, l0(w);
          }
        };
      }
      function Nn(x) {
        let e, t, n, o = Ye[x[22]] + "", l, s, r, a;
        function u() {
          x[12].call(t, x[22]);
        }
        return {
          c() {
            e = f("label"), t = f("input"), n = g(), l = z(o), s = g(), c(t, "type", "checkbox"), c(t, "class", "svelte-1ugndgv"), c(e, "class", "checkbox-label svelte-1ugndgv");
          },
          m(E, d) {
            T(E, e, d), i(e, t), t.checked = x[1][x[22]], i(e, n), i(e, l), i(e, s), r || (a = U(t, "change", u), r = true);
          },
          p(E, d) {
            x = E, d & 2 && (t.checked = x[1][x[22]]);
          },
          d(E) {
            E && P(e), r = false, a();
          }
        };
      }
      function zn(x) {
        let e;
        return {
          c() {
            e = f("p"), e.innerHTML = `<span class="material-icons spin svelte-1ugndgv">autorenew</span>
            Notifying\u2026`, c(e, "class", "computing-status svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Ni(x) {
        let e, t = d0([
          ...x[6]
        ].reverse()), n = [];
        for (let o = 0; o < t.length; o += 1) n[o] = Rn(Sn(x, t, o));
        return {
          c() {
            e = f("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-1ugndgv");
          },
          m(o, l) {
            T(o, e, l);
            for (let s = 0; s < n.length; s += 1) n[s] && n[s].m(e, null);
          },
          p(o, l) {
            if (l & 712) {
              t = d0([
                ...o[6]
              ].reverse());
              let s;
              for (s = 0; s < t.length; s += 1) {
                const r = Sn(o, t, s);
                n[s] ? n[s].p(r, l) : (n[s] = Rn(r), n[s].c(), n[s].m(e, null));
              }
              for (; s < n.length; s += 1) n[s].d(1);
              n.length = t.length;
            }
          },
          d(o) {
            o && P(e), j0(n, o);
          }
        };
      }
      function zi(x) {
        let e, t, n, o, l, s, r, a;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "science", n = g(), o = f("p"), o.textContent = "No results recorded yet.", l = g(), s = f("button"), s.innerHTML = `<span class="material-icons">add</span>
          Record first result`, c(t, "class", "material-icons empty-icon svelte-1ugndgv"), c(o, "class", "svelte-1ugndgv"), c(s, "class", "btn-filled svelte-1ugndgv"), c(e, "class", "empty-state svelte-1ugndgv");
          },
          m(u, E) {
            T(u, e, E), i(e, t), i(e, n), i(e, o), i(e, l), i(e, s), r || (a = U(s, "click", x[14]), r = true);
          },
          p: Z,
          d(u) {
            u && P(e), r = false, a();
          }
        };
      }
      function qi(x) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Negative", c(e, "class", "badge negative svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Ri(x) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Positive", c(e, "class", "badge positive svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function qn(x) {
        let e, t = x[18].positiveDiseases.map(x[15]).join(", ") + "", n, o, l;
        function s(u, E) {
          return u[18].hasNotified ? Hi : Oi;
        }
        let r = s(x), a = r(x);
        return {
          c() {
            e = f("div"), n = z(t), o = g(), a.c(), l = X0(), c(e, "class", "diseases svelte-1ugndgv");
          },
          m(u, E) {
            T(u, e, E), i(e, n), T(u, o, E), a.m(u, E), T(u, l, E);
          },
          p(u, E) {
            E & 64 && t !== (t = u[18].positiveDiseases.map(u[15]).join(", ") + "") && V(n, t), r === (r = s(u)) && a ? a.p(u, E) : (a.d(1), a = r(u), a && (a.c(), a.m(l.parentNode, l)));
          },
          d(u) {
            u && (P(e), P(o), P(l)), a.d(u);
          }
        };
      }
      function Oi(x) {
        let e, t, n, o, l = x[7] === x[19] ? "Notifying\u2026" : "Notify now", s, r, a;
        function u() {
          return x[16](x[19], x[18]);
        }
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "Partners not yet notified", n = g(), o = f("button"), s = z(l), c(t, "class", "not-notified svelte-1ugndgv"), c(o, "class", "btn-text-small svelte-1ugndgv"), o.disabled = x[3], c(e, "class", "notify-row svelte-1ugndgv");
          },
          m(E, d) {
            T(E, e, d), i(e, t), i(e, n), i(e, o), i(o, s), r || (a = U(o, "click", u), r = true);
          },
          p(E, d) {
            x = E, d & 192 && l !== (l = x[7] === x[19] ? "Notifying\u2026" : "Notify now") && V(s, l), d & 8 && (o.disabled = x[3]);
          },
          d(E) {
            E && P(e), r = false, a();
          }
        };
      }
      function Hi(x) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check</span>
                    Partners notified`, c(e, "class", "notified svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function Rn(x) {
        let e, t, n = x[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", o, l, s, r, a, u = x[18].date + "", E, d, C, B;
        function A(v, b) {
          return v[18].positiveDiseases.length > 0 ? Ri : qi;
        }
        let F = A(x), p = F(x), h = x[18].positiveDiseases.length > 0 && qn(x);
        return {
          c() {
            e = f("li"), t = f("span"), o = z(n), l = g(), s = f("div"), r = f("div"), a = f("span"), E = z(u), d = g(), p.c(), C = g(), h && h.c(), B = g(), c(t, "class", "material-icons result-icon svelte-1ugndgv"), e0(t, "positive", x[18].positiveDiseases.length > 0), e0(t, "negative", x[18].positiveDiseases.length === 0), c(a, "class", "result-date svelte-1ugndgv"), c(r, "class", "result-row svelte-1ugndgv"), c(s, "class", "result-body svelte-1ugndgv"), c(e, "class", "svelte-1ugndgv");
          },
          m(v, b) {
            T(v, e, b), i(e, t), i(t, o), i(e, l), i(e, s), i(s, r), i(r, a), i(a, E), i(r, d), p.m(r, null), i(s, C), h && h.m(s, null), i(e, B);
          },
          p(v, b) {
            b & 64 && n !== (n = v[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && V(o, n), b & 64 && e0(t, "positive", v[18].positiveDiseases.length > 0), b & 64 && e0(t, "negative", v[18].positiveDiseases.length === 0), b & 64 && u !== (u = v[18].date + "") && V(E, u), F !== (F = A(v)) && (p.d(1), p = F(v), p && (p.c(), p.m(r, null))), v[18].positiveDiseases.length > 0 ? h ? h.p(v, b) : (h = qn(v), h.c(), h.m(s, null)) : h && (h.d(1), h = null);
          },
          d(v) {
            v && P(e), p.d(), h && h.d();
          }
        };
      }
      function Ui(x) {
        let e, t, n, o, l, s, r, a, u = x[2] ? "close" : "add", E, d, C, B, A, F, p, h, v, b;
        e = new ne({});
        function _(I, L) {
          if (I[4] === "done") return Li;
          if (I[4] === "done_negative") return Mi;
          if (I[4] === "done_no_encounters") return Ii;
        }
        let m = _(x), D = m && m(x), k = x[5] && Mn(x), w = x[2] && Ln(x);
        function y(I, L) {
          return I[6].length === 0 ? zi : Ni;
        }
        let S = y(x), M = S(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), o = f("div"), l = f("h1"), l.textContent = "Test Results", s = g(), r = f("button"), a = f("span"), E = z(u), C = g(), D && D.c(), B = g(), k && k.c(), A = g(), w && w.c(), F = g(), p = f("section"), M.c(), c(l, "class", "svelte-1ugndgv"), c(a, "class", "material-icons"), c(r, "class", "fab svelte-1ugndgv"), c(r, "title", d = x[2] ? "Cancel" : "Record new result"), c(o, "class", "page-header svelte-1ugndgv"), c(p, "class", "card list-card svelte-1ugndgv"), c(n, "class", "svelte-1ugndgv");
          },
          m(I, L) {
            k0(e, I, L), T(I, t, L), T(I, n, L), i(n, o), i(o, l), i(o, s), i(o, r), i(r, a), i(a, E), i(n, C), D && D.m(n, null), i(n, B), k && k.m(n, null), i(n, A), w && w.m(n, null), i(n, F), i(n, p), M.m(p, null), h = true, v || (b = U(r, "click", x[10]), v = true);
          },
          p(I, [L]) {
            (!h || L & 4) && u !== (u = I[2] ? "close" : "add") && V(E, u), (!h || L & 4 && d !== (d = I[2] ? "Cancel" : "Record new result")) && c(r, "title", d), m !== (m = _(I)) && (D && D.d(1), D = m && m(I), D && (D.c(), D.m(n, B))), I[5] ? k ? k.p(I, L) : (k = Mn(I), k.c(), k.m(n, A)) : k && (k.d(1), k = null), I[2] ? w ? w.p(I, L) : (w = Ln(I), w.c(), w.m(n, F)) : w && (w.d(1), w = null), S === (S = y(I)) && M ? M.p(I, L) : (M.d(1), M = S(I), M && (M.c(), M.m(p, null)));
          },
          i(I) {
            h || (f0(e.$$.fragment, I), h = true);
          },
          o(I) {
            C0(e.$$.fragment, I), h = false;
          },
          d(I) {
            I && (P(t), P(n)), b0(e, I), D && D.d(), k && k.d(), w && w.d(), M.d(), v = false, b();
          }
        };
      }
      const ji = 20, On = 50, Vi = 100;
      function Gi(x, e, t) {
        let n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), o = {}, l = false, s = false, r = null, a = null, u = [], E = null;
        N0(() => {
          if (!V0()) {
            i0("/login");
            return;
          }
          t(6, u = ht());
        });
        async function d(m, D) {
          const k = te(), w = ce(), y = [
            ...k.encounters.map((s0) => Ae(s0.rawToken, s0.theirContactId, s0.submitIndex)),
            ...(k.relationships || []).map((s0) => Ae(s0.rawToken, s0.theirContactId, s0.submitIndex))
          ], S = On + Math.floor(Math.random() * (Vi - On + 1)), M = [
            ...y
          ];
          for (; M.length < S; ) M.push(tt(32));
          for (let s0 = M.length - 1; s0 > 0; s0--) {
            const B0 = Math.floor(Math.random() * (s0 + 1));
            [M[s0], M[B0]] = [
              M[B0],
              M[s0]
            ];
          }
          const I = M.map((s0) => Fe(s0)), L = Al(w), N = m.replace(/-/g, ""), q = D.map((s0) => Tl[s0] ?? s0).join(""), R = new TextEncoder().encode("1" + N + q), O = xt(L, R), H = Fe(O), Q = new TextEncoder(), K = JSON.stringify(I), G = Q.encode(K).length + Q.encode(H).length, j = new Uint8Array(G), W = Q.encode(K), J = Q.encode(H);
          j.set(W, 0), j.set(J, W.length);
          const a0 = qr(j);
          let c0 = ji, r0 = (/* @__PURE__ */ new Date()).toISOString();
          for (let s0 = 0; s0 < 2; s0++) {
            const { counter: B0 } = Rr(r0, a0, c0), le = {
              tokens: I,
              created_at: r0,
              submission_type: "self_reported",
              encrypted_payload: H,
              pow_counter: B0
            };
            try {
              await Ca(le);
              break;
            } catch (X) {
              if (s0 === 0 && X.statusCode === 400) {
                let n0 = false;
                if (X.powDifficulty && X.powDifficulty > c0 && (c0 = X.powDifficulty, n0 = true), X.serverTime && (r0 = X.serverTime, n0 = true), n0) continue;
              }
              throw X;
            }
          }
          await Pa();
        }
        async function C() {
          if (!s) {
            t(3, s = true), t(5, a = null), t(4, r = null);
            try {
              const m = xe.filter((D) => o[D]);
              if (m.length > 0) {
                const D = te();
                if (D.encounters.length > 0 || (D.relationships || []).length > 0) {
                  const w = await tx(n, m);
                  t(4, r = "computing"), await new Promise((y) => setTimeout(y, 30)), await d(n, m), await xn(w), t(4, r = "done");
                } else await tx(n, m, true), t(4, r = "done_no_encounters");
              } else await tx(n, m), t(4, r = "done_negative");
              t(1, o = {}), t(0, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), t(6, u = ht()), t(2, l = false);
            } catch (m) {
              t(5, a = m.message), t(4, r = null);
            } finally {
              t(3, s = false);
            }
          }
        }
        async function B(m, D) {
          if (!s) {
            t(3, s = true), t(7, E = m), t(5, a = null);
            try {
              const k = te();
              if (k.encounters.length === 0 && (k.relationships || []).length === 0) {
                t(5, a = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((w) => setTimeout(w, 30)), await d(D.date, D.positiveDiseases), await xn(m), t(6, u = ht());
            } catch (k) {
              t(5, a = "Notification failed: " + k.message);
            } finally {
              t(3, s = false), t(7, E = null);
            }
          }
        }
        const A = () => {
          t(2, l = !l), t(5, a = null), t(4, r = null);
        };
        function F() {
          n = this.value, t(0, n);
        }
        function p(m) {
          o[m] = this.checked, t(1, o);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          u,
          E,
          C,
          B,
          A,
          F,
          p,
          () => {
            t(2, l = false), t(4, r = null), t(5, a = null);
          },
          () => t(2, l = true),
          (m) => Ye[m] ?? m,
          (m, D) => B(m, D)
        ];
      }
      class Ki extends m0 {
        constructor(e) {
          super(), p0(this, e, Gi, Ui, F0, {});
        }
      }
      function Hn(x) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-f77wfc">check_circle</span>
      Password changed successfully.`, c(e, "class", "success-banner svelte-f77wfc");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Un(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[4]), c(e, "class", "error svelte-f77wfc");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o & 16 && V(t, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Yi(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b, _, m, D = x[3] ? "Changing password\u2026" : "Change password", k, w, y, S, M, I = x[5] && Hn(), L = x[4] && Un(x);
        return {
          c() {
            e = f("main"), t = f("a"), t.innerHTML = `<span class="material-icons svelte-f77wfc">arrow_back</span>
    Back`, n = g(), o = f("h1"), o.textContent = "Change password", l = g(), I && I.c(), s = g(), r = f("form"), a = f("label"), u = z(`Current password
      `), E = f("input"), d = g(), C = f("label"), B = z(`New password
      `), A = f("input"), F = g(), p = f("label"), h = z(`Confirm new password
      `), v = f("input"), b = g(), L && L.c(), _ = g(), m = f("button"), k = z(D), w = g(), y = f("p"), y.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, c(t, "href", "#/home"), c(t, "class", "back-link svelte-f77wfc"), c(o, "class", "svelte-f77wfc"), c(E, "type", "password"), E.required = true, c(E, "autocomplete", "current-password"), c(E, "class", "svelte-f77wfc"), c(a, "class", "svelte-f77wfc"), c(A, "type", "password"), A.required = true, c(A, "autocomplete", "new-password"), c(A, "minlength", "12"), c(A, "class", "svelte-f77wfc"), c(C, "class", "svelte-f77wfc"), c(v, "type", "password"), v.required = true, c(v, "autocomplete", "new-password"), c(v, "class", "svelte-f77wfc"), c(p, "class", "svelte-f77wfc"), c(m, "type", "submit"), m.disabled = x[3], c(m, "class", "svelte-f77wfc"), c(r, "class", "svelte-f77wfc"), c(y, "class", "privacy-note svelte-f77wfc"), c(e, "class", "svelte-f77wfc");
          },
          m(N, q) {
            T(N, e, q), i(e, t), i(e, n), i(e, o), i(e, l), I && I.m(e, null), i(e, s), i(e, r), i(r, a), i(a, u), i(a, E), x0(E, x[0]), i(r, d), i(r, C), i(C, B), i(C, A), x0(A, x[1]), i(r, F), i(r, p), i(p, h), i(p, v), x0(v, x[2]), i(r, b), L && L.m(r, null), i(r, _), i(r, m), i(m, k), i(e, w), i(e, y), S || (M = [
              U(E, "input", x[7]),
              U(A, "input", x[8]),
              U(v, "input", x[9]),
              U(r, "submit", re(x[6]))
            ], S = true);
          },
          p(N, [q]) {
            N[5] ? I || (I = Hn(), I.c(), I.m(e, s)) : I && (I.d(1), I = null), q & 1 && E.value !== N[0] && x0(E, N[0]), q & 2 && A.value !== N[1] && x0(A, N[1]), q & 4 && v.value !== N[2] && x0(v, N[2]), N[4] ? L ? L.p(N, q) : (L = Un(N), L.c(), L.m(r, _)) : L && (L.d(1), L = null), q & 8 && D !== (D = N[3] ? "Changing password\u2026" : "Change password") && V(k, D), q & 8 && (m.disabled = N[3]);
          },
          i: Z,
          o: Z,
          d(N) {
            N && P(e), I && I.d(), L && L.d(), S = false, l0(M);
          }
        };
      }
      function Ji(x, e, t) {
        let n = "", o = "", l = "", s = false, r = null, a = false;
        N0(() => {
          V0() || i0("/login");
        });
        async function u() {
          if (t(4, r = null), t(5, a = false), o !== l) {
            t(4, r = "New passwords do not match");
            return;
          }
          if (o.length < 12) {
            t(4, r = "New password must be at least 12 characters");
            return;
          }
          if (o === n) {
            t(4, r = "New password must differ from the current password");
            return;
          }
          t(3, s = true);
          try {
            const B = mt(), { challenge: A, auth_salt: F, enc_salt: p } = await bx(B), h = await se(n, L0(p)), v = me();
            if (!v || h.length !== v.length || !h.every((M, I) => M === v[I])) {
              t(4, r = "Current password is incorrect");
              return;
            }
            const b = await se(n, L0(F)), _ = Cl(new TextEncoder().encode(A), b), m = Fe(_), D = await se(o, L0(F)), k = await se(o, L0(p)), w = t0(Bl(D)), { blobHex: y, blobVersion: S } = Na(k);
            await Ea(m, w, y, S), kx(k), za(S + 1), t(5, a = true), t(0, n = ""), t(1, o = ""), t(2, l = "");
          } catch (B) {
            t(4, r = B.message);
          } finally {
            t(3, s = false);
          }
        }
        function E() {
          n = this.value, t(0, n);
        }
        function d() {
          o = this.value, t(1, o);
        }
        function C() {
          l = this.value, t(2, l);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          u,
          E,
          d,
          C
        ];
      }
      class Qi extends m0 {
        constructor(e) {
          super(), p0(this, e, Ji, Yi, F0, {});
        }
      }
      function Wi(x) {
        let e, t, n, o, l, s, r, a, u, E = x[2] ? "Sending\u2026" : "Send verification link", d, C, B, A, F = x[0] && jn(x), p = x[3] && Vn(x);
        return {
          c() {
            e = f("div"), F && F.c(), t = g(), n = f("form"), o = f("label"), l = z(`New email address
          `), s = f("input"), r = g(), p && p.c(), a = g(), u = f("button"), d = z(E), c(s, "type", "email"), s.required = true, c(s, "autocomplete", "email"), c(s, "placeholder", "you@example.com"), c(s, "class", "svelte-r6hw3y"), c(o, "class", "svelte-r6hw3y"), c(u, "type", "submit"), u.disabled = C = x[2] || !x[1], c(u, "class", "svelte-r6hw3y"), c(n, "class", "svelte-r6hw3y"), c(e, "class", "card svelte-r6hw3y");
          },
          m(h, v) {
            T(h, e, v), F && F.m(e, null), i(e, t), i(e, n), i(n, o), i(o, l), i(o, s), x0(s, x[1]), i(n, r), p && p.m(n, null), i(n, a), i(n, u), i(u, d), B || (A = [
              U(s, "input", x[6]),
              U(n, "submit", re(x[5]))
            ], B = true);
          },
          p(h, v) {
            h[0] ? F ? F.p(h, v) : (F = jn(h), F.c(), F.m(e, t)) : F && (F.d(1), F = null), v & 2 && s.value !== h[1] && x0(s, h[1]), h[3] ? p ? p.p(h, v) : (p = Vn(h), p.c(), p.m(n, a)) : p && (p.d(1), p = null), v & 4 && E !== (E = h[2] ? "Sending\u2026" : "Send verification link") && V(d, E), v & 6 && C !== (C = h[2] || !h[1]) && (u.disabled = C);
          },
          d(h) {
            h && P(e), F && F.d(), p && p.d(), B = false, l0(A);
          }
        };
      }
      function Xi(x) {
        let e, t, n, o, l, s, r, a, u, E;
        return {
          c() {
            e = f("div"), t = f("div"), t.innerHTML = '<span class="material-icons success-icon svelte-r6hw3y">mark_email_read</span> <h2 class="svelte-r6hw3y">Check your inbox</h2>', n = g(), o = f("p"), l = z("We've sent a verification link to "), s = f("strong"), r = z(x[4]), a = z(`.
        Click the link to confirm the change. Your email won't update until you verify it.`), u = g(), E = f("a"), E.textContent = "Done", c(t, "class", "success-row svelte-r6hw3y"), c(o, "class", "hint svelte-r6hw3y"), c(E, "href", "#/settings"), c(E, "class", "btn-primary svelte-r6hw3y"), c(e, "class", "card svelte-r6hw3y");
          },
          m(d, C) {
            T(d, e, C), i(e, t), i(e, n), i(e, o), i(o, l), i(o, s), i(s, r), i(o, a), i(e, u), i(e, E);
          },
          p(d, C) {
            C & 16 && V(r, d[4]);
          },
          d(d) {
            d && P(e);
          }
        };
      }
      function jn(x) {
        let e, t, n, o;
        return {
          c() {
            e = f("p"), t = z("Current email: "), n = f("strong"), o = z(x[0]), c(e, "class", "current-email svelte-r6hw3y");
          },
          m(l, s) {
            T(l, e, s), i(e, t), i(e, n), i(n, o);
          },
          p(l, s) {
            s & 1 && V(o, l[0]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Vn(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[3]), c(e, "class", "error svelte-r6hw3y");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o & 8 && V(t, n[3]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Zi(x) {
        let e, t, n, o, l;
        function s(u, E) {
          return u[4] ? Xi : Wi;
        }
        let r = s(x), a = r(x);
        return {
          c() {
            e = f("main"), t = f("a"), t.innerHTML = `<span class="material-icons svelte-r6hw3y">arrow_back</span>
    Back to settings`, n = g(), o = f("h1"), o.textContent = "Change email", l = g(), a.c(), c(t, "href", "#/settings"), c(t, "class", "back-link svelte-r6hw3y"), c(o, "class", "svelte-r6hw3y"), c(e, "class", "svelte-r6hw3y");
          },
          m(u, E) {
            T(u, e, E), i(e, t), i(e, n), i(e, o), i(e, l), a.m(e, null);
          },
          p(u, [E]) {
            r === (r = s(u)) && a ? a.p(u, E) : (a.d(1), a = r(u), a && (a.c(), a.m(e, null)));
          },
          i: Z,
          o: Z,
          d(u) {
            u && P(e), a.d();
          }
        };
      }
      function $i(x, e, t) {
        let n;
        O0(x, jt, (d) => t(7, n = d));
        let o = "", l = "", s = false, r = null, a = null;
        N0(() => {
          if (!V0()) {
            i0("/login");
            return;
          }
          t(0, o = n ?? "");
        });
        async function u() {
          t(3, r = null), t(2, s = true);
          try {
            await ea(l), t(4, a = l);
          } catch (d) {
            t(3, r = d.message);
          } finally {
            t(2, s = false);
          }
        }
        function E() {
          l = this.value, t(1, l);
        }
        return [
          o,
          l,
          s,
          r,
          a,
          u,
          E
        ];
      }
      class ec extends m0 {
        constructor(e) {
          super(), p0(this, e, $i, Zi, F0, {});
        }
      }
      function tc(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C;
        return {
          c() {
            e = f("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">error_outline</span>', t = g(), n = f("h1"), n.textContent = "Verification failed", o = g(), l = f("p"), s = z(x[1]), r = g(), a = f("p"), a.textContent = "The link may have expired or already been used. You can request a new one from your account settings.", u = g(), E = f("button"), E.textContent = "Go to Login", c(e, "class", "icon-wrap error svelte-1wqqdyg"), c(n, "class", "svelte-1wqqdyg"), c(l, "class", "message error svelte-1wqqdyg"), c(a, "class", "hint svelte-1wqqdyg"), c(E, "class", "btn-primary svelte-1wqqdyg");
          },
          m(B, A) {
            T(B, e, A), T(B, t, A), T(B, n, A), T(B, o, A), T(B, l, A), i(l, s), T(B, r, A), T(B, a, A), T(B, u, A), T(B, E, A), d || (C = U(E, "click", x[4]), d = true);
          },
          p(B, A) {
            A & 2 && V(s, B[1]);
          },
          d(B) {
            B && (P(e), P(t), P(n), P(o), P(l), P(r), P(a), P(u), P(E)), d = false, C();
          }
        };
      }
      function xc(x) {
        let e, t, n, o, l, s, r, a, u;
        return {
          c() {
            e = f("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">check_circle</span>', t = g(), n = f("h1"), n.textContent = "Email verified", o = g(), l = f("p"), l.textContent = "Your email address has been verified successfully.", s = g(), r = f("button"), r.textContent = "Go to Login", c(e, "class", "icon-wrap success svelte-1wqqdyg"), c(n, "class", "svelte-1wqqdyg"), c(l, "class", "message svelte-1wqqdyg"), c(r, "class", "btn-primary svelte-1wqqdyg");
          },
          m(E, d) {
            T(E, e, d), T(E, t, d), T(E, n, d), T(E, o, d), T(E, l, d), T(E, s, d), T(E, r, d), a || (u = U(r, "click", x[3]), a = true);
          },
          p: Z,
          d(E) {
            E && (P(e), P(t), P(n), P(o), P(l), P(s), P(r)), a = false, u();
          }
        };
      }
      function nc(x) {
        let e, t, n;
        return {
          c() {
            e = f("div"), e.innerHTML = '<span class="material-icons spinning svelte-1wqqdyg">sync</span>', t = g(), n = f("p"), n.textContent = "Verifying your email\u2026", c(e, "class", "icon-wrap svelte-1wqqdyg"), c(n, "class", "message svelte-1wqqdyg");
          },
          m(o, l) {
            T(o, e, l), T(o, t, l), T(o, n, l);
          },
          p: Z,
          d(o) {
            o && (P(e), P(t), P(n));
          }
        };
      }
      function oc(x) {
        let e;
        function t(l, s) {
          return l[0] === "verifying" ? nc : l[0] === "success" ? xc : tc;
        }
        let n = t(x), o = n(x);
        return {
          c() {
            e = f("main"), o.c(), c(e, "class", "svelte-1wqqdyg");
          },
          m(l, s) {
            T(l, e, s), o.m(e, null);
          },
          p(l, [s]) {
            n === (n = t(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e, null)));
          },
          i: Z,
          o: Z,
          d(l) {
            l && P(e), o.d();
          }
        };
      }
      function lc(x, e, t) {
        let { params: n = {} } = e, o = "verifying", l = null;
        N0(async () => {
          const a = n.token;
          if (!a) {
            t(1, l = "No verification token found in link."), t(0, o = "error");
            return;
          }
          try {
            await xa(a), t(0, o = "success");
          } catch (u) {
            t(1, l = u.message), t(0, o = "error");
          }
        });
        const s = () => i0("/login"), r = () => i0("/login");
        return x.$$set = (a) => {
          "params" in a && t(2, n = a.params);
        }, [
          o,
          l,
          n,
          s,
          r
        ];
      }
      class sc extends m0 {
        constructor(e) {
          super(), p0(this, e, lc, oc, F0, {
            params: 2
          });
        }
      }
      function Gn(x, e, t) {
        const n = x.slice();
        n[8] = e[t], n[11] = t;
        const o = n[0].length - 1 - n[11];
        return n[9] = o, n;
      }
      function rc(x) {
        let e, t = d0([
          ...x[0]
        ].reverse()), n = [];
        for (let o = 0; o < t.length; o += 1) n[o] = Qn(Gn(x, t, o));
        return {
          c() {
            e = f("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-l1q7u6");
          },
          m(o, l) {
            T(o, e, l);
            for (let s = 0; s < n.length; s += 1) n[s] && n[s].m(e, null);
          },
          p(o, l) {
            if (l & 9) {
              t = d0([
                ...o[0]
              ].reverse());
              let s;
              for (s = 0; s < t.length; s += 1) {
                const r = Gn(o, t, s);
                n[s] ? n[s].p(r, l) : (n[s] = Qn(r), n[s].c(), n[s].m(e, null));
              }
              for (; s < n.length; s += 1) n[s].d(1);
              n.length = t.length;
            }
          },
          d(o) {
            o && P(e), j0(n, o);
          }
        };
      }
      function ac(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "No notifications received yet.", c(e, "class", "muted svelte-l1q7u6");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function Kn(x) {
        let e;
        function t(l, s) {
          return l[8].labVerified ? cc : ic;
        }
        let n = t(x), o = n(x);
        return {
          c() {
            e = f("div"), o.c(), c(e, "class", "alert-message svelte-l1q7u6");
          },
          m(l, s) {
            T(l, e, s), o.m(e, null);
          },
          p(l, s) {
            n === (n = t(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e, null)));
          },
          d(l) {
            l && P(e), o.d();
          }
        };
      }
      function ic(x) {
        let e, t = x[8].diseases.map(x[5]).join(", ") + "", n, o;
        return {
          c() {
            e = z("Someone you've interacted with reported testing positive for "), n = z(t), o = z(".");
          },
          m(l, s) {
            T(l, e, s), T(l, n, s), T(l, o, s);
          },
          p(l, s) {
            s & 1 && t !== (t = l[8].diseases.map(l[5]).join(", ") + "") && V(n, t);
          },
          d(l) {
            l && (P(e), P(n), P(o));
          }
        };
      }
      function cc(x) {
        let e, t = x[8].diseases.map(x[4]).join(", ") + "", n, o;
        return {
          c() {
            e = z("Someone you've interacted with has tested positive for "), n = z(t), o = z(".");
          },
          m(l, s) {
            T(l, e, s), T(l, n, s), T(l, o, s);
          },
          p(l, s) {
            s & 1 && t !== (t = l[8].diseases.map(l[4]).join(", ") + "") && V(n, t);
          },
          d(l) {
            l && (P(e), P(n), P(o));
          }
        };
      }
      function Yn(x) {
        let e;
        return {
          c() {
            e = f("div"), e.textContent = "This result is self-reported.", c(e, "class", "unverified-note svelte-l1q7u6");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Jn(x) {
        let e, t, n;
        function o() {
          return x[7](x[9]);
        }
        return {
          c() {
            e = f("button"), e.textContent = "Mark viewed", c(e, "class", "btn-text svelte-l1q7u6");
          },
          m(l, s) {
            T(l, e, s), t || (n = U(e, "click", o), t = true);
          },
          p(l, s) {
            x = l;
          },
          d(l) {
            l && P(e), t = false, n();
          }
        };
      }
      function Qn(x) {
        let e, t, n, o, l = x[8].labVerified ? "warning_amber" : "info_outline", s, r, a, u, E, d, C, B, A, F = Wn(x[8].testDate) + "", p, h, v, b, _, m, D = (x[8].diseases.length > 0 ? x[8].diseases.map(x[6]).join(", ") : "the relevant STI") + "", k, w, y, S, M = x[8].diseases.length > 0 && Kn(x), I = !x[8].labVerified && Yn(), L = !x[8].viewed && Jn(x);
        return {
          c() {
            e = f("li"), t = f("div"), n = f("div"), o = f("span"), s = z(l), r = g(), a = f("div"), u = f("div"), u.textContent = "Health alert", E = g(), M && M.c(), d = g(), C = f("div"), B = z("Their sample was taken around "), A = f("strong"), p = z(F), h = z("."), v = g(), I && I.c(), b = g(), _ = f("div"), m = z("Get tested for "), k = z(D), w = z(". Ask for a full STI panel."), y = g(), L && L.c(), S = g(), c(o, "class", "material-icons alert-icon svelte-l1q7u6"), e0(o, "verified", x[8].labVerified), e0(o, "unverified", !x[8].labVerified), c(u, "class", "alert-title svelte-l1q7u6"), e0(u, "verified", x[8].labVerified), e0(u, "unverified", !x[8].labVerified), c(C, "class", "alert-dates svelte-l1q7u6"), c(_, "class", "get-tested svelte-l1q7u6"), c(n, "class", "alert-meta svelte-l1q7u6"), c(t, "class", "alert-body svelte-l1q7u6"), c(e, "class", "svelte-l1q7u6"), e0(e, "unviewed", !x[8].viewed);
          },
          m(N, q) {
            T(N, e, q), i(e, t), i(t, n), i(n, o), i(o, s), i(n, r), i(n, a), i(a, u), i(a, E), M && M.m(a, null), i(a, d), i(a, C), i(C, B), i(C, A), i(A, p), i(C, h), i(a, v), I && I.m(a, null), i(a, b), i(a, _), i(_, m), i(_, k), i(_, w), i(t, y), L && L.m(t, null), i(e, S);
          },
          p(N, q) {
            q & 1 && l !== (l = N[8].labVerified ? "warning_amber" : "info_outline") && V(s, l), q & 1 && e0(o, "verified", N[8].labVerified), q & 1 && e0(o, "unverified", !N[8].labVerified), q & 1 && e0(u, "verified", N[8].labVerified), q & 1 && e0(u, "unverified", !N[8].labVerified), N[8].diseases.length > 0 ? M ? M.p(N, q) : (M = Kn(N), M.c(), M.m(a, d)) : M && (M.d(1), M = null), q & 1 && F !== (F = Wn(N[8].testDate) + "") && V(p, F), N[8].labVerified ? I && (I.d(1), I = null) : I || (I = Yn(), I.c(), I.m(a, b)), q & 1 && D !== (D = (N[8].diseases.length > 0 ? N[8].diseases.map(N[6]).join(", ") : "the relevant STI") + "") && V(k, D), N[8].viewed ? L && (L.d(1), L = null) : L ? L.p(N, q) : (L = Jn(N), L.c(), L.m(t, null)), q & 1 && e0(e, "unviewed", !N[8].viewed);
          },
          d(N) {
            N && P(e), M && M.d(), I && I.d(), L && L.d();
          }
        };
      }
      function uc(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C = x[1] ? "hourglass_empty" : "refresh", B, A, F = x[1] ? "Checking\u2026" : "Check now", p, h, v, b, _, m, D;
        e = new ne({});
        function k(S, M) {
          return S[0].length === 0 && !S[1] ? ac : rc;
        }
        let w = k(x), y = w(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), o = f("div"), o.innerHTML = '<h1 class="svelte-l1q7u6">Alerts</h1>', l = g(), s = f("section"), r = f("div"), a = f("h2"), a.textContent = "Notification history", u = g(), E = f("button"), d = f("span"), B = z(C), A = g(), p = z(F), h = g(), y.c(), v = g(), b = f("p"), b.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, c(o, "class", "page-header svelte-l1q7u6"), c(a, "class", "svelte-l1q7u6"), c(d, "class", "material-icons svelte-l1q7u6"), c(E, "class", "btn-refresh svelte-l1q7u6"), E.disabled = x[1], c(r, "class", "card-header svelte-l1q7u6"), c(s, "class", "card svelte-l1q7u6"), c(b, "class", "privacy-note svelte-l1q7u6"), c(n, "class", "svelte-l1q7u6");
          },
          m(S, M) {
            k0(e, S, M), T(S, t, M), T(S, n, M), i(n, o), i(n, l), i(n, s), i(s, r), i(r, a), i(r, u), i(r, E), i(E, d), i(d, B), i(E, A), i(E, p), i(s, h), y.m(s, null), i(n, v), i(n, b), _ = true, m || (D = U(E, "click", x[2]), m = true);
          },
          p(S, [M]) {
            (!_ || M & 2) && C !== (C = S[1] ? "hourglass_empty" : "refresh") && V(B, C), (!_ || M & 2) && F !== (F = S[1] ? "Checking\u2026" : "Check now") && V(p, F), (!_ || M & 2) && (E.disabled = S[1]), w === (w = k(S)) && y ? y.p(S, M) : (y.d(1), y = w(S), y && (y.c(), y.m(s, null)));
          },
          i(S) {
            _ || (f0(e.$$.fragment, S), _ = true);
          },
          o(S) {
            C0(e.$$.fragment, S), _ = false;
          },
          d(S) {
            S && (P(t), P(n)), b0(e, S), y.d(), m = false, D();
          }
        };
      }
      function Wn(x) {
        return x ? (/* @__PURE__ */ new Date(x + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Ec(x, e, t) {
        let n = [], o = false;
        N0(() => {
          if (!V0()) {
            Ga("/alerts"), i0("/login");
            return;
          }
          t(0, n = ex());
        });
        async function l() {
          t(1, o = true);
          try {
            await Nl();
          } catch {
          } finally {
            t(0, n = ex()), t(1, o = false);
          }
        }
        async function s(d) {
          await Sa(d), t(0, n = ex());
        }
        return [
          n,
          o,
          l,
          s,
          (d) => Ye[d] ?? d,
          (d) => Ye[d] ?? d,
          (d) => Ye[d] ?? d,
          (d) => s(d)
        ];
      }
      class fc extends m0 {
        constructor(e) {
          super(), p0(this, e, Ec, uc, F0, {});
        }
      }
      var dc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function Bc(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
      }
      var ve = {}, Cc = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
      }, zl = {}, Y0 = {};
      let Nx;
      const Ac = [
        0,
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
      ];
      Y0.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17;
      };
      Y0.getSymbolTotalCodewords = function(e) {
        return Ac[e];
      };
      Y0.getBCHDigit = function(x) {
        let e = 0;
        for (; x !== 0; ) e++, x >>>= 1;
        return e;
      };
      Y0.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        Nx = e;
      };
      Y0.isKanjiModeEnabled = function() {
        return typeof Nx < "u";
      };
      Y0.toSJIS = function(e) {
        return Nx(e);
      };
      var Gt = {};
      (function(x) {
        x.L = {
          bit: 1
        }, x.M = {
          bit: 0
        }, x.Q = {
          bit: 3
        }, x.H = {
          bit: 2
        };
        function e(t) {
          if (typeof t != "string") throw new Error("Param is not a string");
          switch (t.toLowerCase()) {
            case "l":
            case "low":
              return x.L;
            case "m":
            case "medium":
              return x.M;
            case "q":
            case "quartile":
              return x.Q;
            case "h":
            case "high":
              return x.H;
            default:
              throw new Error("Unknown EC Level: " + t);
          }
        }
        x.isValid = function(n) {
          return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
        }, x.from = function(n, o) {
          if (x.isValid(n)) return n;
          try {
            return e(n);
          } catch {
            return o;
          }
        };
      })(Gt);
      function ql() {
        this.buffer = [], this.length = 0;
      }
      ql.prototype = {
        get: function(x) {
          const e = Math.floor(x / 8);
          return (this.buffer[e] >>> 7 - x % 8 & 1) === 1;
        },
        put: function(x, e) {
          for (let t = 0; t < e; t++) this.putBit((x >>> e - t - 1 & 1) === 1);
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(x) {
          const e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0), x && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
        }
      };
      var Fc = ql;
      function ot(x) {
        if (!x || x < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = x, this.data = new Uint8Array(x * x), this.reservedBit = new Uint8Array(x * x);
      }
      ot.prototype.set = function(x, e, t, n) {
        const o = x * this.size + e;
        this.data[o] = t, n && (this.reservedBit[o] = true);
      };
      ot.prototype.get = function(x, e) {
        return this.data[x * this.size + e];
      };
      ot.prototype.xor = function(x, e, t) {
        this.data[x * this.size + e] ^= t;
      };
      ot.prototype.isReserved = function(x, e) {
        return this.reservedBit[x * this.size + e];
      };
      var Dc = ot, Rl = {};
      (function(x) {
        const e = Y0.getSymbolSize;
        x.getRowColCoords = function(n) {
          if (n === 1) return [];
          const o = Math.floor(n / 7) + 2, l = e(n), s = l === 145 ? 26 : Math.ceil((l - 13) / (2 * o - 2)) * 2, r = [
            l - 7
          ];
          for (let a = 1; a < o - 1; a++) r[a] = r[a - 1] - s;
          return r.push(6), r.reverse();
        }, x.getPositions = function(n) {
          const o = [], l = x.getRowColCoords(n), s = l.length;
          for (let r = 0; r < s; r++) for (let a = 0; a < s; a++) r === 0 && a === 0 || r === 0 && a === s - 1 || r === s - 1 && a === 0 || o.push([
            l[r],
            l[a]
          ]);
          return o;
        };
      })(Rl);
      var Ol = {};
      const pc = Y0.getSymbolSize, Xn = 7;
      Ol.getPositions = function(e) {
        const t = pc(e);
        return [
          [
            0,
            0
          ],
          [
            t - Xn,
            0
          ],
          [
            0,
            t - Xn
          ]
        ];
      };
      var Hl = {};
      (function(x) {
        x.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7
        };
        const e = {
          N1: 3,
          N2: 3,
          N3: 40,
          N4: 10
        };
        x.isValid = function(o) {
          return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
        }, x.from = function(o) {
          return x.isValid(o) ? parseInt(o, 10) : void 0;
        }, x.getPenaltyN1 = function(o) {
          const l = o.size;
          let s = 0, r = 0, a = 0, u = null, E = null;
          for (let d = 0; d < l; d++) {
            r = a = 0, u = E = null;
            for (let C = 0; C < l; C++) {
              let B = o.get(d, C);
              B === u ? r++ : (r >= 5 && (s += e.N1 + (r - 5)), u = B, r = 1), B = o.get(C, d), B === E ? a++ : (a >= 5 && (s += e.N1 + (a - 5)), E = B, a = 1);
            }
            r >= 5 && (s += e.N1 + (r - 5)), a >= 5 && (s += e.N1 + (a - 5));
          }
          return s;
        }, x.getPenaltyN2 = function(o) {
          const l = o.size;
          let s = 0;
          for (let r = 0; r < l - 1; r++) for (let a = 0; a < l - 1; a++) {
            const u = o.get(r, a) + o.get(r, a + 1) + o.get(r + 1, a) + o.get(r + 1, a + 1);
            (u === 4 || u === 0) && s++;
          }
          return s * e.N2;
        }, x.getPenaltyN3 = function(o) {
          const l = o.size;
          let s = 0, r = 0, a = 0;
          for (let u = 0; u < l; u++) {
            r = a = 0;
            for (let E = 0; E < l; E++) r = r << 1 & 2047 | o.get(u, E), E >= 10 && (r === 1488 || r === 93) && s++, a = a << 1 & 2047 | o.get(E, u), E >= 10 && (a === 1488 || a === 93) && s++;
          }
          return s * e.N3;
        }, x.getPenaltyN4 = function(o) {
          let l = 0;
          const s = o.data.length;
          for (let a = 0; a < s; a++) l += o.data[a];
          return Math.abs(Math.ceil(l * 100 / s / 5) - 10) * e.N4;
        };
        function t(n, o, l) {
          switch (n) {
            case x.Patterns.PATTERN000:
              return (o + l) % 2 === 0;
            case x.Patterns.PATTERN001:
              return o % 2 === 0;
            case x.Patterns.PATTERN010:
              return l % 3 === 0;
            case x.Patterns.PATTERN011:
              return (o + l) % 3 === 0;
            case x.Patterns.PATTERN100:
              return (Math.floor(o / 2) + Math.floor(l / 3)) % 2 === 0;
            case x.Patterns.PATTERN101:
              return o * l % 2 + o * l % 3 === 0;
            case x.Patterns.PATTERN110:
              return (o * l % 2 + o * l % 3) % 2 === 0;
            case x.Patterns.PATTERN111:
              return (o * l % 3 + (o + l) % 2) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + n);
          }
        }
        x.applyMask = function(o, l) {
          const s = l.size;
          for (let r = 0; r < s; r++) for (let a = 0; a < s; a++) l.isReserved(a, r) || l.xor(a, r, t(o, a, r));
        }, x.getBestMask = function(o, l) {
          const s = Object.keys(x.Patterns).length;
          let r = 0, a = 1 / 0;
          for (let u = 0; u < s; u++) {
            l(u), x.applyMask(u, o);
            const E = x.getPenaltyN1(o) + x.getPenaltyN2(o) + x.getPenaltyN3(o) + x.getPenaltyN4(o);
            x.applyMask(u, o), E < a && (a = E, r = u);
          }
          return r;
        };
      })(Hl);
      var Kt = {};
      const ue = Gt, Ct = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
      ], At = [
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
      ];
      Kt.getBlocksCount = function(e, t) {
        switch (t) {
          case ue.L:
            return Ct[(e - 1) * 4 + 0];
          case ue.M:
            return Ct[(e - 1) * 4 + 1];
          case ue.Q:
            return Ct[(e - 1) * 4 + 2];
          case ue.H:
            return Ct[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      Kt.getTotalCodewordsCount = function(e, t) {
        switch (t) {
          case ue.L:
            return At[(e - 1) * 4 + 0];
          case ue.M:
            return At[(e - 1) * 4 + 1];
          case ue.Q:
            return At[(e - 1) * 4 + 2];
          case ue.H:
            return At[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      var Ul = {}, Yt = {};
      const Je = new Uint8Array(512), Lt = new Uint8Array(256);
      (function() {
        let e = 1;
        for (let t = 0; t < 255; t++) Je[t] = e, Lt[e] = t, e <<= 1, e & 256 && (e ^= 285);
        for (let t = 255; t < 512; t++) Je[t] = Je[t - 255];
      })();
      Yt.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return Lt[e];
      };
      Yt.exp = function(e) {
        return Je[e];
      };
      Yt.mul = function(e, t) {
        return e === 0 || t === 0 ? 0 : Je[Lt[e] + Lt[t]];
      };
      (function(x) {
        const e = Yt;
        x.mul = function(n, o) {
          const l = new Uint8Array(n.length + o.length - 1);
          for (let s = 0; s < n.length; s++) for (let r = 0; r < o.length; r++) l[s + r] ^= e.mul(n[s], o[r]);
          return l;
        }, x.mod = function(n, o) {
          let l = new Uint8Array(n);
          for (; l.length - o.length >= 0; ) {
            const s = l[0];
            for (let a = 0; a < o.length; a++) l[a] ^= e.mul(o[a], s);
            let r = 0;
            for (; r < l.length && l[r] === 0; ) r++;
            l = l.slice(r);
          }
          return l;
        }, x.generateECPolynomial = function(n) {
          let o = new Uint8Array([
            1
          ]);
          for (let l = 0; l < n; l++) o = x.mul(o, new Uint8Array([
            1,
            e.exp(l)
          ]));
          return o;
        };
      })(Ul);
      const jl = Ul;
      function zx(x) {
        this.genPoly = void 0, this.degree = x, this.degree && this.initialize(this.degree);
      }
      zx.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = jl.generateECPolynomial(this.degree);
      };
      zx.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const t = new Uint8Array(e.length + this.degree);
        t.set(e);
        const n = jl.mod(t, this.genPoly), o = this.degree - n.length;
        if (o > 0) {
          const l = new Uint8Array(this.degree);
          return l.set(n, o), l;
        }
        return n;
      };
      var mc = zx, Vl = {}, fe = {}, qx = {};
      qx.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
      var oe = {};
      const Gl = "[0-9]+", hc = "[A-Z $%*+\\-./:]+";
      let Ze = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      Ze = Ze.replace(/u/g, "\\u");
      const vc = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Ze + `)(?:.|[\r
]))+`;
      oe.KANJI = new RegExp(Ze, "g");
      oe.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      oe.BYTE = new RegExp(vc, "g");
      oe.NUMERIC = new RegExp(Gl, "g");
      oe.ALPHANUMERIC = new RegExp(hc, "g");
      const _c = new RegExp("^" + Ze + "$"), kc = new RegExp("^" + Gl + "$"), bc = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      oe.testKanji = function(e) {
        return _c.test(e);
      };
      oe.testNumeric = function(e) {
        return kc.test(e);
      };
      oe.testAlphanumeric = function(e) {
        return bc.test(e);
      };
      (function(x) {
        const e = qx, t = oe;
        x.NUMERIC = {
          id: "Numeric",
          bit: 1,
          ccBits: [
            10,
            12,
            14
          ]
        }, x.ALPHANUMERIC = {
          id: "Alphanumeric",
          bit: 2,
          ccBits: [
            9,
            11,
            13
          ]
        }, x.BYTE = {
          id: "Byte",
          bit: 4,
          ccBits: [
            8,
            16,
            16
          ]
        }, x.KANJI = {
          id: "Kanji",
          bit: 8,
          ccBits: [
            8,
            10,
            12
          ]
        }, x.MIXED = {
          bit: -1
        }, x.getCharCountIndicator = function(l, s) {
          if (!l.ccBits) throw new Error("Invalid mode: " + l);
          if (!e.isValid(s)) throw new Error("Invalid version: " + s);
          return s >= 1 && s < 10 ? l.ccBits[0] : s < 27 ? l.ccBits[1] : l.ccBits[2];
        }, x.getBestModeForData = function(l) {
          return t.testNumeric(l) ? x.NUMERIC : t.testAlphanumeric(l) ? x.ALPHANUMERIC : t.testKanji(l) ? x.KANJI : x.BYTE;
        }, x.toString = function(l) {
          if (l && l.id) return l.id;
          throw new Error("Invalid mode");
        }, x.isValid = function(l) {
          return l && l.bit && l.ccBits;
        };
        function n(o) {
          if (typeof o != "string") throw new Error("Param is not a string");
          switch (o.toLowerCase()) {
            case "numeric":
              return x.NUMERIC;
            case "alphanumeric":
              return x.ALPHANUMERIC;
            case "kanji":
              return x.KANJI;
            case "byte":
              return x.BYTE;
            default:
              throw new Error("Unknown mode: " + o);
          }
        }
        x.from = function(l, s) {
          if (x.isValid(l)) return l;
          try {
            return n(l);
          } catch {
            return s;
          }
        };
      })(fe);
      (function(x) {
        const e = Y0, t = Kt, n = Gt, o = fe, l = qx, s = 7973, r = e.getBCHDigit(s);
        function a(C, B, A) {
          for (let F = 1; F <= 40; F++) if (B <= x.getCapacity(F, A, C)) return F;
        }
        function u(C, B) {
          return o.getCharCountIndicator(C, B) + 4;
        }
        function E(C, B) {
          let A = 0;
          return C.forEach(function(F) {
            const p = u(F.mode, B);
            A += p + F.getBitsLength();
          }), A;
        }
        function d(C, B) {
          for (let A = 1; A <= 40; A++) if (E(C, A) <= x.getCapacity(A, B, o.MIXED)) return A;
        }
        x.from = function(B, A) {
          return l.isValid(B) ? parseInt(B, 10) : A;
        }, x.getCapacity = function(B, A, F) {
          if (!l.isValid(B)) throw new Error("Invalid QR Code version");
          typeof F > "u" && (F = o.BYTE);
          const p = e.getSymbolTotalCodewords(B), h = t.getTotalCodewordsCount(B, A), v = (p - h) * 8;
          if (F === o.MIXED) return v;
          const b = v - u(F, B);
          switch (F) {
            case o.NUMERIC:
              return Math.floor(b / 10 * 3);
            case o.ALPHANUMERIC:
              return Math.floor(b / 11 * 2);
            case o.KANJI:
              return Math.floor(b / 13);
            case o.BYTE:
            default:
              return Math.floor(b / 8);
          }
        }, x.getBestVersionForData = function(B, A) {
          let F;
          const p = n.from(A, n.M);
          if (Array.isArray(B)) {
            if (B.length > 1) return d(B, p);
            if (B.length === 0) return 1;
            F = B[0];
          } else F = B;
          return a(F.mode, F.getLength(), p);
        }, x.getEncodedBits = function(B) {
          if (!l.isValid(B) || B < 7) throw new Error("Invalid QR Code version");
          let A = B << 12;
          for (; e.getBCHDigit(A) - r >= 0; ) A ^= s << e.getBCHDigit(A) - r;
          return B << 12 | A;
        };
      })(Vl);
      var Kl = {};
      const Ax = Y0, Yl = 1335, gc = 21522, Zn = Ax.getBCHDigit(Yl);
      Kl.getEncodedBits = function(e, t) {
        const n = e.bit << 3 | t;
        let o = n << 10;
        for (; Ax.getBCHDigit(o) - Zn >= 0; ) o ^= Yl << Ax.getBCHDigit(o) - Zn;
        return (n << 10 | o) ^ gc;
      };
      var Jl = {};
      const wc = fe;
      function Me(x) {
        this.mode = wc.NUMERIC, this.data = x.toString();
      }
      Me.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
      };
      Me.prototype.getLength = function() {
        return this.data.length;
      };
      Me.prototype.getBitsLength = function() {
        return Me.getBitsLength(this.data.length);
      };
      Me.prototype.write = function(e) {
        let t, n, o;
        for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), o = parseInt(n, 10), e.put(o, 10);
        const l = this.data.length - t;
        l > 0 && (n = this.data.substr(t), o = parseInt(n, 10), e.put(o, l * 3 + 1));
      };
      var yc = Me;
      const Pc = fe, xx = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
      ];
      function Le(x) {
        this.mode = Pc.ALPHANUMERIC, this.data = x;
      }
      Le.getBitsLength = function(e) {
        return 11 * Math.floor(e / 2) + 6 * (e % 2);
      };
      Le.prototype.getLength = function() {
        return this.data.length;
      };
      Le.prototype.getBitsLength = function() {
        return Le.getBitsLength(this.data.length);
      };
      Le.prototype.write = function(e) {
        let t;
        for (t = 0; t + 2 <= this.data.length; t += 2) {
          let n = xx.indexOf(this.data[t]) * 45;
          n += xx.indexOf(this.data[t + 1]), e.put(n, 11);
        }
        this.data.length % 2 && e.put(xx.indexOf(this.data[t]), 6);
      };
      var Tc = Le;
      const Sc = fe;
      function Ne(x) {
        this.mode = Sc.BYTE, typeof x == "string" ? this.data = new TextEncoder().encode(x) : this.data = new Uint8Array(x);
      }
      Ne.getBitsLength = function(e) {
        return e * 8;
      };
      Ne.prototype.getLength = function() {
        return this.data.length;
      };
      Ne.prototype.getBitsLength = function() {
        return Ne.getBitsLength(this.data.length);
      };
      Ne.prototype.write = function(x) {
        for (let e = 0, t = this.data.length; e < t; e++) x.put(this.data[e], 8);
      };
      var Ic = Ne;
      const Mc = fe, Lc = Y0;
      function ze(x) {
        this.mode = Mc.KANJI, this.data = x;
      }
      ze.getBitsLength = function(e) {
        return e * 13;
      };
      ze.prototype.getLength = function() {
        return this.data.length;
      };
      ze.prototype.getBitsLength = function() {
        return ze.getBitsLength(this.data.length);
      };
      ze.prototype.write = function(x) {
        let e;
        for (e = 0; e < this.data.length; e++) {
          let t = Lc.toSJIS(this.data[e]);
          if (t >= 33088 && t <= 40956) t -= 33088;
          else if (t >= 57408 && t <= 60351) t -= 49472;
          else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
          t = (t >>> 8 & 255) * 192 + (t & 255), x.put(t, 13);
        }
      };
      var Nc = ze, Ql = {
        exports: {}
      };
      (function(x) {
        var e = {
          single_source_shortest_paths: function(t, n, o) {
            var l = {}, s = {};
            s[n] = 0;
            var r = e.PriorityQueue.make();
            r.push(n, 0);
            for (var a, u, E, d, C, B, A, F, p; !r.empty(); ) {
              a = r.pop(), u = a.value, d = a.cost, C = t[u] || {};
              for (E in C) C.hasOwnProperty(E) && (B = C[E], A = d + B, F = s[E], p = typeof s[E] > "u", (p || F > A) && (s[E] = A, r.push(E, A), l[E] = u));
            }
            if (typeof o < "u" && typeof s[o] > "u") {
              var h = [
                "Could not find a path from ",
                n,
                " to ",
                o,
                "."
              ].join("");
              throw new Error(h);
            }
            return l;
          },
          extract_shortest_path_from_predecessor_list: function(t, n) {
            for (var o = [], l = n; l; ) o.push(l), t[l], l = t[l];
            return o.reverse(), o;
          },
          find_path: function(t, n, o) {
            var l = e.single_source_shortest_paths(t, n, o);
            return e.extract_shortest_path_from_predecessor_list(l, o);
          },
          PriorityQueue: {
            make: function(t) {
              var n = e.PriorityQueue, o = {}, l;
              t = t || {};
              for (l in n) n.hasOwnProperty(l) && (o[l] = n[l]);
              return o.queue = [], o.sorter = t.sorter || n.default_sorter, o;
            },
            default_sorter: function(t, n) {
              return t.cost - n.cost;
            },
            push: function(t, n) {
              var o = {
                value: t,
                cost: n
              };
              this.queue.push(o), this.queue.sort(this.sorter);
            },
            pop: function() {
              return this.queue.shift();
            },
            empty: function() {
              return this.queue.length === 0;
            }
          }
        };
        x.exports = e;
      })(Ql);
      var zc = Ql.exports;
      (function(x) {
        const e = fe, t = yc, n = Tc, o = Ic, l = Nc, s = oe, r = Y0, a = zc;
        function u(h) {
          return unescape(encodeURIComponent(h)).length;
        }
        function E(h, v, b) {
          const _ = [];
          let m;
          for (; (m = h.exec(b)) !== null; ) _.push({
            data: m[0],
            index: m.index,
            mode: v,
            length: m[0].length
          });
          return _;
        }
        function d(h) {
          const v = E(s.NUMERIC, e.NUMERIC, h), b = E(s.ALPHANUMERIC, e.ALPHANUMERIC, h);
          let _, m;
          return r.isKanjiModeEnabled() ? (_ = E(s.BYTE, e.BYTE, h), m = E(s.KANJI, e.KANJI, h)) : (_ = E(s.BYTE_KANJI, e.BYTE, h), m = []), v.concat(b, _, m).sort(function(k, w) {
            return k.index - w.index;
          }).map(function(k) {
            return {
              data: k.data,
              mode: k.mode,
              length: k.length
            };
          });
        }
        function C(h, v) {
          switch (v) {
            case e.NUMERIC:
              return t.getBitsLength(h);
            case e.ALPHANUMERIC:
              return n.getBitsLength(h);
            case e.KANJI:
              return l.getBitsLength(h);
            case e.BYTE:
              return o.getBitsLength(h);
          }
        }
        function B(h) {
          return h.reduce(function(v, b) {
            const _ = v.length - 1 >= 0 ? v[v.length - 1] : null;
            return _ && _.mode === b.mode ? (v[v.length - 1].data += b.data, v) : (v.push(b), v);
          }, []);
        }
        function A(h) {
          const v = [];
          for (let b = 0; b < h.length; b++) {
            const _ = h[b];
            switch (_.mode) {
              case e.NUMERIC:
                v.push([
                  _,
                  {
                    data: _.data,
                    mode: e.ALPHANUMERIC,
                    length: _.length
                  },
                  {
                    data: _.data,
                    mode: e.BYTE,
                    length: _.length
                  }
                ]);
                break;
              case e.ALPHANUMERIC:
                v.push([
                  _,
                  {
                    data: _.data,
                    mode: e.BYTE,
                    length: _.length
                  }
                ]);
                break;
              case e.KANJI:
                v.push([
                  _,
                  {
                    data: _.data,
                    mode: e.BYTE,
                    length: u(_.data)
                  }
                ]);
                break;
              case e.BYTE:
                v.push([
                  {
                    data: _.data,
                    mode: e.BYTE,
                    length: u(_.data)
                  }
                ]);
            }
          }
          return v;
        }
        function F(h, v) {
          const b = {}, _ = {
            start: {}
          };
          let m = [
            "start"
          ];
          for (let D = 0; D < h.length; D++) {
            const k = h[D], w = [];
            for (let y = 0; y < k.length; y++) {
              const S = k[y], M = "" + D + y;
              w.push(M), b[M] = {
                node: S,
                lastCount: 0
              }, _[M] = {};
              for (let I = 0; I < m.length; I++) {
                const L = m[I];
                b[L] && b[L].node.mode === S.mode ? (_[L][M] = C(b[L].lastCount + S.length, S.mode) - C(b[L].lastCount, S.mode), b[L].lastCount += S.length) : (b[L] && (b[L].lastCount = S.length), _[L][M] = C(S.length, S.mode) + 4 + e.getCharCountIndicator(S.mode, v));
              }
            }
            m = w;
          }
          for (let D = 0; D < m.length; D++) _[m[D]].end = 0;
          return {
            map: _,
            table: b
          };
        }
        function p(h, v) {
          let b;
          const _ = e.getBestModeForData(h);
          if (b = e.from(v, _), b !== e.BYTE && b.bit < _.bit) throw new Error('"' + h + '" cannot be encoded with mode ' + e.toString(b) + `.
 Suggested mode is: ` + e.toString(_));
          switch (b === e.KANJI && !r.isKanjiModeEnabled() && (b = e.BYTE), b) {
            case e.NUMERIC:
              return new t(h);
            case e.ALPHANUMERIC:
              return new n(h);
            case e.KANJI:
              return new l(h);
            case e.BYTE:
              return new o(h);
          }
        }
        x.fromArray = function(v) {
          return v.reduce(function(b, _) {
            return typeof _ == "string" ? b.push(p(_, null)) : _.data && b.push(p(_.data, _.mode)), b;
          }, []);
        }, x.fromString = function(v, b) {
          const _ = d(v, r.isKanjiModeEnabled()), m = A(_), D = F(m, b), k = a.find_path(D.map, "start", "end"), w = [];
          for (let y = 1; y < k.length - 1; y++) w.push(D.table[k[y]].node);
          return x.fromArray(B(w));
        }, x.rawSplit = function(v) {
          return x.fromArray(d(v, r.isKanjiModeEnabled()));
        };
      })(Jl);
      const Jt = Y0, nx = Gt, qc = Fc, Rc = Dc, Oc = Rl, Hc = Ol, Fx = Hl, Dx = Kt, Uc = mc, Nt = Vl, jc = Kl, Vc = fe, ox = Jl;
      function Gc(x, e) {
        const t = x.size, n = Hc.getPositions(e);
        for (let o = 0; o < n.length; o++) {
          const l = n[o][0], s = n[o][1];
          for (let r = -1; r <= 7; r++) if (!(l + r <= -1 || t <= l + r)) for (let a = -1; a <= 7; a++) s + a <= -1 || t <= s + a || (r >= 0 && r <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && a >= 2 && a <= 4 ? x.set(l + r, s + a, true, true) : x.set(l + r, s + a, false, true));
        }
      }
      function Kc(x) {
        const e = x.size;
        for (let t = 8; t < e - 8; t++) {
          const n = t % 2 === 0;
          x.set(t, 6, n, true), x.set(6, t, n, true);
        }
      }
      function Yc(x, e) {
        const t = Oc.getPositions(e);
        for (let n = 0; n < t.length; n++) {
          const o = t[n][0], l = t[n][1];
          for (let s = -2; s <= 2; s++) for (let r = -2; r <= 2; r++) s === -2 || s === 2 || r === -2 || r === 2 || s === 0 && r === 0 ? x.set(o + s, l + r, true, true) : x.set(o + s, l + r, false, true);
        }
      }
      function Jc(x, e) {
        const t = x.size, n = Nt.getEncodedBits(e);
        let o, l, s;
        for (let r = 0; r < 18; r++) o = Math.floor(r / 3), l = r % 3 + t - 8 - 3, s = (n >> r & 1) === 1, x.set(o, l, s, true), x.set(l, o, s, true);
      }
      function lx(x, e, t) {
        const n = x.size, o = jc.getEncodedBits(e, t);
        let l, s;
        for (l = 0; l < 15; l++) s = (o >> l & 1) === 1, l < 6 ? x.set(l, 8, s, true) : l < 8 ? x.set(l + 1, 8, s, true) : x.set(n - 15 + l, 8, s, true), l < 8 ? x.set(8, n - l - 1, s, true) : l < 9 ? x.set(8, 15 - l - 1 + 1, s, true) : x.set(8, 15 - l - 1, s, true);
        x.set(n - 8, 8, 1, true);
      }
      function Qc(x, e) {
        const t = x.size;
        let n = -1, o = t - 1, l = 7, s = 0;
        for (let r = t - 1; r > 0; r -= 2) for (r === 6 && r--; ; ) {
          for (let a = 0; a < 2; a++) if (!x.isReserved(o, r - a)) {
            let u = false;
            s < e.length && (u = (e[s] >>> l & 1) === 1), x.set(o, r - a, u), l--, l === -1 && (s++, l = 7);
          }
          if (o += n, o < 0 || t <= o) {
            o -= n, n = -n;
            break;
          }
        }
      }
      function Wc(x, e, t) {
        const n = new qc();
        t.forEach(function(a) {
          n.put(a.mode.bit, 4), n.put(a.getLength(), Vc.getCharCountIndicator(a.mode, x)), a.write(n);
        });
        const o = Jt.getSymbolTotalCodewords(x), l = Dx.getTotalCodewordsCount(x, e), s = (o - l) * 8;
        for (n.getLengthInBits() + 4 <= s && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
        const r = (s - n.getLengthInBits()) / 8;
        for (let a = 0; a < r; a++) n.put(a % 2 ? 17 : 236, 8);
        return Xc(n, x, e);
      }
      function Xc(x, e, t) {
        const n = Jt.getSymbolTotalCodewords(e), o = Dx.getTotalCodewordsCount(e, t), l = n - o, s = Dx.getBlocksCount(e, t), r = n % s, a = s - r, u = Math.floor(n / s), E = Math.floor(l / s), d = E + 1, C = u - E, B = new Uc(C);
        let A = 0;
        const F = new Array(s), p = new Array(s);
        let h = 0;
        const v = new Uint8Array(x.buffer);
        for (let k = 0; k < s; k++) {
          const w = k < a ? E : d;
          F[k] = v.slice(A, A + w), p[k] = B.encode(F[k]), A += w, h = Math.max(h, w);
        }
        const b = new Uint8Array(n);
        let _ = 0, m, D;
        for (m = 0; m < h; m++) for (D = 0; D < s; D++) m < F[D].length && (b[_++] = F[D][m]);
        for (m = 0; m < C; m++) for (D = 0; D < s; D++) b[_++] = p[D][m];
        return b;
      }
      function Zc(x, e, t, n) {
        let o;
        if (Array.isArray(x)) o = ox.fromArray(x);
        else if (typeof x == "string") {
          let u = e;
          if (!u) {
            const E = ox.rawSplit(x);
            u = Nt.getBestVersionForData(E, t);
          }
          o = ox.fromString(x, u || 40);
        } else throw new Error("Invalid data");
        const l = Nt.getBestVersionForData(o, t);
        if (!l) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = l;
        else if (e < l) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + l + `.
`);
        const s = Wc(e, t, o), r = Jt.getSymbolSize(e), a = new Rc(r);
        return Gc(a, e), Kc(a), Yc(a, e), lx(a, t, 0), e >= 7 && Jc(a, e), Qc(a, s), isNaN(n) && (n = Fx.getBestMask(a, lx.bind(null, a, t))), Fx.applyMask(n, a), lx(a, t, n), {
          modules: a,
          version: e,
          errorCorrectionLevel: t,
          maskPattern: n,
          segments: o
        };
      }
      zl.create = function(e, t) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let n = nx.M, o, l;
        return typeof t < "u" && (n = nx.from(t.errorCorrectionLevel, nx.M), o = Nt.from(t.version), l = Fx.from(t.maskPattern), t.toSJISFunc && Jt.setToSJISFunction(t.toSJISFunc)), Zc(e, o, n, l);
      };
      var Wl = {}, Rx = {};
      (function(x) {
        function e(t) {
          if (typeof t == "number" && (t = t.toString()), typeof t != "string") throw new Error("Color should be defined as hex string");
          let n = t.slice().replace("#", "").split("");
          if (n.length < 3 || n.length === 5 || n.length > 8) throw new Error("Invalid hex color: " + t);
          (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(l) {
            return [
              l,
              l
            ];
          }))), n.length === 6 && n.push("F", "F");
          const o = parseInt(n.join(""), 16);
          return {
            r: o >> 24 & 255,
            g: o >> 16 & 255,
            b: o >> 8 & 255,
            a: o & 255,
            hex: "#" + n.slice(0, 6).join("")
          };
        }
        x.getOptions = function(n) {
          n || (n = {}), n.color || (n.color = {});
          const o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, l = n.width && n.width >= 21 ? n.width : void 0, s = n.scale || 4;
          return {
            width: l,
            scale: l ? 4 : s,
            margin: o,
            color: {
              dark: e(n.color.dark || "#000000ff"),
              light: e(n.color.light || "#ffffffff")
            },
            type: n.type,
            rendererOpts: n.rendererOpts || {}
          };
        }, x.getScale = function(n, o) {
          return o.width && o.width >= n + o.margin * 2 ? o.width / (n + o.margin * 2) : o.scale;
        }, x.getImageWidth = function(n, o) {
          const l = x.getScale(n, o);
          return Math.floor((n + o.margin * 2) * l);
        }, x.qrToImageData = function(n, o, l) {
          const s = o.modules.size, r = o.modules.data, a = x.getScale(s, l), u = Math.floor((s + l.margin * 2) * a), E = l.margin * a, d = [
            l.color.light,
            l.color.dark
          ];
          for (let C = 0; C < u; C++) for (let B = 0; B < u; B++) {
            let A = (C * u + B) * 4, F = l.color.light;
            if (C >= E && B >= E && C < u - E && B < u - E) {
              const p = Math.floor((C - E) / a), h = Math.floor((B - E) / a);
              F = d[r[p * s + h] ? 1 : 0];
            }
            n[A++] = F.r, n[A++] = F.g, n[A++] = F.b, n[A] = F.a;
          }
        };
      })(Rx);
      (function(x) {
        const e = Rx;
        function t(o, l, s) {
          o.clearRect(0, 0, l.width, l.height), l.style || (l.style = {}), l.height = s, l.width = s, l.style.height = s + "px", l.style.width = s + "px";
        }
        function n() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        x.render = function(l, s, r) {
          let a = r, u = s;
          typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), s || (u = n()), a = e.getOptions(a);
          const E = e.getImageWidth(l.modules.size, a), d = u.getContext("2d"), C = d.createImageData(E, E);
          return e.qrToImageData(C.data, l, a), t(d, u, E), d.putImageData(C, 0, 0), u;
        }, x.renderToDataURL = function(l, s, r) {
          let a = r;
          typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), a || (a = {});
          const u = x.render(l, s, a), E = a.type || "image/png", d = a.rendererOpts || {};
          return u.toDataURL(E, d.quality);
        };
      })(Wl);
      var Xl = {};
      const $c = Rx;
      function $n(x, e) {
        const t = x.a / 255, n = e + '="' + x.hex + '"';
        return t < 1 ? n + " " + e + '-opacity="' + t.toFixed(2).slice(1) + '"' : n;
      }
      function sx(x, e, t) {
        let n = x + e;
        return typeof t < "u" && (n += " " + t), n;
      }
      function e9(x, e, t) {
        let n = "", o = 0, l = false, s = 0;
        for (let r = 0; r < x.length; r++) {
          const a = Math.floor(r % e), u = Math.floor(r / e);
          !a && !l && (l = true), x[r] ? (s++, r > 0 && a > 0 && x[r - 1] || (n += l ? sx("M", a + t, 0.5 + u + t) : sx("m", o, 0), o = 0, l = false), a + 1 < e && x[r + 1] || (n += sx("h", s), s = 0)) : o++;
        }
        return n;
      }
      Xl.render = function(e, t, n) {
        const o = $c.getOptions(t), l = e.modules.size, s = e.modules.data, r = l + o.margin * 2, a = o.color.light.a ? "<path " + $n(o.color.light, "fill") + ' d="M0 0h' + r + "v" + r + 'H0z"/>' : "", u = "<path " + $n(o.color.dark, "stroke") + ' d="' + e9(s, l, o.margin) + '"/>', E = 'viewBox="0 0 ' + r + " " + r + '"', C = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + E + ' shape-rendering="crispEdges">' + a + u + `</svg>
`;
        return typeof n == "function" && n(null, C), C;
      };
      const t9 = Cc, px = zl, Zl = Wl, x9 = Xl;
      function Ox(x, e, t, n, o) {
        const l = [].slice.call(arguments, 1), s = l.length, r = typeof l[s - 1] == "function";
        if (!r && !t9()) throw new Error("Callback required as last argument");
        if (r) {
          if (s < 2) throw new Error("Too few arguments provided");
          s === 2 ? (o = t, t = e, e = n = void 0) : s === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = t, t = e, e = void 0));
        } else {
          if (s < 1) throw new Error("Too few arguments provided");
          return s === 1 ? (t = e, e = n = void 0) : s === 2 && !e.getContext && (n = t, t = e, e = void 0), new Promise(function(a, u) {
            try {
              const E = px.create(t, n);
              a(x(E, e, n));
            } catch (E) {
              u(E);
            }
          });
        }
        try {
          const a = px.create(t, n);
          o(null, x(a, e, n));
        } catch (a) {
          o(a);
        }
      }
      ve.create = px.create;
      ve.toCanvas = Ox.bind(null, Zl.render);
      ve.toDataURL = Ox.bind(null, Zl.renderToDataURL);
      ve.toString = Ox.bind(null, function(x, e, t) {
        return x9.render(x, t);
      });
      function n9(x) {
        let e, t, n, o, l, s, r, a = x[0].isHost ? "You started this group" : "Group encounter", u, E, d, C = lo(x[0].date) + "", B, A, F, p, h = x[0].isHost && x[13](), v, b, _, m, D, k, w, y, S, M, I = x[3] && eo(x), L = x[10] && to(x);
        function N(j, W) {
          return j[5] ? s9 : l9;
        }
        let q = N(x), R = q(x), O = h && no(x), H = x[8] && oo(x);
        function Q(j, W) {
          return j[4] ? c9 : i9;
        }
        let K = Q(x), G = K(x);
        return {
          c() {
            I && I.c(), e = g(), L && L.c(), t = g(), n = f("section"), o = f("div"), l = f("span"), l.textContent = "groups", s = g(), r = f("span"), u = z(a), E = g(), d = f("p"), B = z(C), A = g(), F = f("section"), R.c(), p = g(), O && O.c(), v = g(), b = f("section"), _ = f("div"), _.innerHTML = '<span class="material-icons privacy-icon svelte-atconr">lock_outline</span> <p class="privacy-text svelte-atconr">Your note is stored encrypted and never shared.</p>', m = g(), D = f("textarea"), k = g(), H && H.c(), w = g(), y = f("section"), G.c(), c(l, "class", "material-icons status-icon svelte-atconr"), c(r, "class", "status-label svelte-atconr"), c(o, "class", "status-row svelte-atconr"), c(d, "class", "date svelte-atconr"), c(n, "class", "card pad svelte-atconr"), c(F, "class", "card svelte-atconr"), c(_, "class", "privacy-row svelte-atconr"), c(D, "placeholder", "Add a private note\u2026"), c(D, "rows", "5"), c(D, "class", "svelte-atconr"), c(b, "class", "card pad svelte-atconr"), c(y, "class", "card svelte-atconr");
          },
          m(j, W) {
            I && I.m(j, W), T(j, e, W), L && L.m(j, W), T(j, t, W), T(j, n, W), i(n, o), i(o, l), i(o, s), i(o, r), i(r, u), i(n, E), i(n, d), i(d, B), T(j, A, W), T(j, F, W), R.m(F, null), T(j, p, W), O && O.m(j, W), T(j, v, W), T(j, b, W), i(b, _), i(b, m), i(b, D), x0(D, x[7]), i(b, k), H && H.m(b, null), T(j, w, W), T(j, y, W), G.m(y, null), S || (M = [
              U(D, "input", x[25]),
              U(D, "input", x[17])
            ], S = true);
          },
          p(j, W) {
            j[3] ? I ? I.p(j, W) : (I = eo(j), I.c(), I.m(e.parentNode, e)) : I && (I.d(1), I = null), j[10] ? L ? L.p(j, W) : (L = to(j), L.c(), L.m(t.parentNode, t)) : L && (L.d(1), L = null), W[0] & 1 && a !== (a = j[0].isHost ? "You started this group" : "Group encounter") && V(u, a), W[0] & 1 && C !== (C = lo(j[0].date) + "") && V(B, C), q === (q = N(j)) && R ? R.p(j, W) : (R.d(1), R = q(j), R && (R.c(), R.m(F, null))), W[0] & 1 && (h = j[0].isHost && j[13]()), h ? O ? O.p(j, W) : (O = no(j), O.c(), O.m(v.parentNode, v)) : O && (O.d(1), O = null), W[0] & 128 && x0(D, j[7]), j[8] ? H ? H.p(j, W) : (H = oo(j), H.c(), H.m(b, null)) : H && (H.d(1), H = null), K === (K = Q(j)) && G ? G.p(j, W) : (G.d(1), G = K(j), G && (G.c(), G.m(y, null)));
          },
          d(j) {
            j && (P(e), P(t), P(n), P(A), P(F), P(p), P(v), P(b), P(w), P(y)), I && I.d(j), L && L.d(j), R.d(), O && O.d(j), H && H.d(), G.d(), S = false, l0(M);
          }
        };
      }
      function o9(x) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<p class="muted svelte-atconr">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-atconr">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-atconr");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function eo(x) {
        let e, t, n, o;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "error_outline", n = g(), o = z(x[3]), c(t, "class", "material-icons svelte-atconr"), c(e, "class", "toast error-toast svelte-atconr");
          },
          m(l, s) {
            T(l, e, s), i(e, t), i(e, n), i(e, o);
          },
          p(l, s) {
            s[0] & 8 && V(o, l[3]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function to(x) {
        let e, t, n, o, l, s, r, a, u, E = x[9] ? "Saving\u2026" : "Save note", d, C, B;
        return {
          c() {
            e = f("section"), t = f("p"), t.textContent = "You have unsaved changes to your note.", n = g(), o = f("div"), l = f("button"), l.textContent = "Keep editing", s = g(), r = f("button"), r.textContent = "Discard", a = g(), u = f("button"), d = z(E), c(t, "class", "confirm-text svelte-atconr"), c(l, "class", "btn-text svelte-atconr"), c(r, "class", "btn-text danger svelte-atconr"), c(u, "class", "btn-filled-sm svelte-atconr"), u.disabled = x[9], c(o, "class", "confirm-actions svelte-atconr"), c(e, "class", "card pad leave-confirm svelte-atconr");
          },
          m(A, F) {
            T(A, e, F), i(e, t), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(o, a), i(o, u), i(u, d), C || (B = [
              U(l, "click", x[23]),
              U(r, "click", x[20]),
              U(u, "click", x[19])
            ], C = true);
          },
          p(A, F) {
            F[0] & 512 && E !== (E = A[9] ? "Saving\u2026" : "Save note") && V(d, E), F[0] & 512 && (u.disabled = A[9]);
          },
          d(A) {
            A && P(e), C = false, l0(B);
          }
        };
      }
      function l9(x) {
        let e, t, n, o, l = (x[0].name ? x[0].name : "Add group name") + "", s, r, a, u, E, d, C = x[0].name && xo();
        return {
          c() {
            e = f("button"), t = f("span"), t.textContent = "edit", n = g(), o = f("span"), s = z(l), r = g(), C && C.c(), a = g(), u = f("span"), u.textContent = "chevron_right", c(t, "class", "material-icons action-icon svelte-atconr"), c(o, "class", "action-label svelte-atconr"), c(u, "class", "material-icons action-chevron svelte-atconr"), c(e, "class", "action-row svelte-atconr");
          },
          m(B, A) {
            T(B, e, A), i(e, t), i(e, n), i(e, o), i(o, s), i(o, r), C && C.m(o, null), i(e, a), i(e, u), E || (d = U(e, "click", x[14]), E = true);
          },
          p(B, A) {
            A[0] & 1 && l !== (l = (B[0].name ? B[0].name : "Add group name") + "") && V(s, l), B[0].name ? C || (C = xo(), C.c(), C.m(o, null)) : C && (C.d(1), C = null);
          },
          d(B) {
            B && P(e), C && C.d(), E = false, d();
          }
        };
      }
      function s9(x) {
        let e, t, n, o, l, s, r, a, u, E, d = x[2] ? "Saving\u2026" : "Save", C, B, A;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "edit", n = g(), o = f("form"), l = f("input"), s = g(), r = f("div"), a = f("button"), a.textContent = "Cancel", u = g(), E = f("button"), C = z(d), c(t, "class", "material-icons action-icon svelte-atconr"), c(l, "type", "text"), c(l, "placeholder", "Optional group name"), c(l, "maxlength", "64"), l.autofocus = true, c(l, "class", "svelte-atconr"), c(a, "type", "button"), c(a, "class", "btn-text svelte-atconr"), c(E, "type", "submit"), c(E, "class", "btn-filled-sm svelte-atconr"), E.disabled = x[2], c(r, "class", "name-actions svelte-atconr"), c(o, "class", "name-form svelte-atconr"), c(e, "class", "action-row edit-row svelte-atconr");
          },
          m(F, p) {
            T(F, e, p), i(e, t), i(e, n), i(e, o), i(o, l), x0(l, x[6]), i(o, s), i(o, r), i(r, a), i(r, u), i(r, E), i(E, C), l.focus(), B || (A = [
              U(l, "input", x[24]),
              U(a, "click", x[15]),
              U(o, "submit", re(x[16]))
            ], B = true);
          },
          p(F, p) {
            p[0] & 64 && l.value !== F[6] && x0(l, F[6]), p[0] & 4 && d !== (d = F[2] ? "Saving\u2026" : "Save") && V(C, d), p[0] & 4 && (E.disabled = F[2]);
          },
          d(F) {
            F && P(e), B = false, l0(A);
          }
        };
      }
      function xo(x) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Tap to change", c(e, "class", "action-sub svelte-atconr");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function no(x) {
        let e, t, n, o, l;
        function s(u, E) {
          return u[11] ? a9 : r9;
        }
        let r = s(x), a = r(x);
        return {
          c() {
            e = f("section"), t = f("p"), t.textContent = "Show this QR for others to join", n = g(), a.c(), o = g(), l = f("p"), l.textContent = "Valid for 24 hours from when you created the group.", c(t, "class", "qr-label svelte-atconr"), c(l, "class", "qr-hint svelte-atconr"), c(e, "class", "card pad qr-card svelte-atconr");
          },
          m(u, E) {
            T(u, e, E), i(e, t), i(e, n), a.m(e, null), i(e, o), i(e, l);
          },
          p(u, E) {
            r === (r = s(u)) && a ? a.p(u, E) : (a.d(1), a = r(u), a && (a.c(), a.m(e, o)));
          },
          d(u) {
            u && P(e), a.d();
          }
        };
      }
      function r9(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Generating QR\u2026", c(e, "class", "muted svelte-atconr");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function a9(x) {
        let e;
        return {
          c() {
            e = f("div"), c(e, "class", "qr-wrap svelte-atconr");
          },
          m(t, n) {
            T(t, e, n), e.innerHTML = x[11];
          },
          p(t, n) {
            n[0] & 2048 && (e.innerHTML = t[11]);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function oo(x) {
        let e, t, n = x[9] ? "Saving\u2026" : "Save", o, l, s;
        return {
          c() {
            e = f("div"), t = f("button"), o = z(n), c(t, "class", "btn-filled-sm svelte-atconr"), t.disabled = x[9], c(e, "class", "note-actions svelte-atconr");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(t, o), l || (s = U(t, "click", x[18]), l = true);
          },
          p(r, a) {
            a[0] & 512 && n !== (n = r[9] ? "Saving\u2026" : "Save") && V(o, n), a[0] & 512 && (t.disabled = r[9]);
          },
          d(r) {
            r && P(e), l = false, s();
          }
        };
      }
      function i9(x) {
        let e, t, n;
        return {
          c() {
            e = f("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-atconr">delete_outline</span> <span class="action-label danger svelte-atconr">Delete group encounter</span>', c(e, "class", "action-row svelte-atconr");
          },
          m(o, l) {
            T(o, e, l), t || (n = U(e, "click", x[27]), t = true);
          },
          p: Z,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function c9(x) {
        let e, t, n, o, l, s, r, a = x[2] ? "Deleting\u2026" : "Delete", u, E, d;
        return {
          c() {
            e = f("div"), t = f("p"), t.textContent = "Delete this group encounter? This cannot be undone.", n = g(), o = f("div"), l = f("button"), l.textContent = "Cancel", s = g(), r = f("button"), u = z(a), c(t, "class", "confirm-text svelte-atconr"), c(l, "class", "btn-text svelte-atconr"), c(r, "class", "btn-danger-sm svelte-atconr"), r.disabled = x[2], c(o, "class", "confirm-actions svelte-atconr"), c(e, "class", "confirm-row svelte-atconr");
          },
          m(C, B) {
            T(C, e, B), i(e, t), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(r, u), E || (d = [
              U(l, "click", x[26]),
              U(r, "click", x[21])
            ], E = true);
          },
          p(C, B) {
            B[0] & 4 && a !== (a = C[2] ? "Deleting\u2026" : "Delete") && V(u, a), B[0] & 4 && (r.disabled = C[2]);
          },
          d(C) {
            C && P(e), E = false, l0(d);
          }
        };
      }
      function u9(x) {
        let e, t, n, o, l, s, r, a = (x[1] ? "Group not found" : x[12]) + "", u, E, d;
        e = new ne({});
        function C(F, p) {
          if (F[1]) return o9;
          if (F[0]) return n9;
        }
        let B = C(x), A = B && B(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), o = f("div"), l = f("a"), l.innerHTML = '<span class="material-icons svelte-atconr">arrow_back</span>', s = g(), r = f("h1"), u = z(a), E = g(), A && A.c(), c(l, "class", "back-btn svelte-atconr"), c(l, "href", "#/encounters"), c(r, "class", "svelte-atconr"), c(o, "class", "page-header svelte-atconr"), c(n, "class", "svelte-atconr");
          },
          m(F, p) {
            k0(e, F, p), T(F, t, p), T(F, n, p), i(n, o), i(o, l), i(o, s), i(o, r), i(r, u), i(n, E), A && A.m(n, null), d = true;
          },
          p(F, p) {
            (!d || p[0] & 4098) && a !== (a = (F[1] ? "Group not found" : F[12]) + "") && V(u, a), B === (B = C(F)) && A ? A.p(F, p) : (A && A.d(1), A = B && B(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            d || (f0(e.$$.fragment, F), d = true);
          },
          o(F) {
            C0(e.$$.fragment, F), d = false;
          },
          d(F) {
            F && (P(t), P(n)), b0(e, F), A && A.d();
          }
        };
      }
      function lo(x) {
        return x ? (/* @__PURE__ */ new Date(x + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function E9(x, e, t) {
        let n, { params: o = {} } = e, l = null, s = false, r = false, a = null, u = false, E = false, d = "", C = "", B = false, A = false, F = false, p = null, h = null;
        N0(() => {
          if (!V0()) {
            i0("/login");
            return;
          }
          _(), document.addEventListener("click", b, {
            capture: true
          }), window.addEventListener("beforeunload", v);
        }), Rt(() => {
          document.removeEventListener("click", b, {
            capture: true
          }), window.removeEventListener("beforeunload", v);
        });
        function v(j) {
          B && (j.preventDefault(), j.returnValue = "");
        }
        function b(j) {
          if (!B) return;
          const W = j.target.closest('a[href^="#/"]');
          W && (j.preventDefault(), j.stopImmediatePropagation(), p = W.getAttribute("href").slice(1), t(10, F = true));
        }
        function _() {
          const j = o.tokenHex;
          if (t(0, l = Il().find((W) => t0(W.token) === j) ?? null), !l) {
            t(1, s = true);
            return;
          }
          t(7, C = l.note ?? ""), l.isHost && D() && k();
        }
        function m() {
          return t0(l.token);
        }
        function D() {
          return l ? Math.floor(Date.now() / 1e3) - l.createdAt < 86400 : false;
        }
        async function k() {
          ce();
          const j = Math.floor(Date.now() / 1e3), W = Or(m(), j, t0(l.hostContactId), l.name);
          try {
            t(11, h = await ve.toString(W, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#1a1a1a",
                light: "#ffffff"
              }
            }));
          } catch (J) {
            t(3, a = "Could not render QR code: " + J.message);
          }
        }
        function w() {
          t(6, d = l.name ?? ""), t(5, E = true), t(3, a = null);
        }
        function y() {
          t(5, E = false), t(3, a = null);
        }
        async function S() {
          if (!r) {
            t(2, r = true), t(3, a = null);
            try {
              const j = d.trim() || null;
              await tn(m(), {
                name: j
              }), _(), t(5, E = false);
            } catch (j) {
              t(3, a = j.message);
            } finally {
              t(2, r = false);
            }
          }
        }
        function M() {
          t(8, B = C !== (l.note ?? ""));
        }
        async function I() {
          if (!(!B || A)) {
            t(9, A = true), t(3, a = null);
            try {
              const j = C.trim() || null;
              await tn(m(), {
                note: j
              }), _(), t(8, B = false);
            } catch (j) {
              t(3, a = j.message);
            } finally {
              t(9, A = false);
            }
          }
        }
        async function L() {
          await I(), a || q();
        }
        function N() {
          t(7, C = l.note ?? ""), t(8, B = false), q();
        }
        function q() {
          t(10, F = false), i0(p);
        }
        async function R() {
          if (!r) {
            t(2, r = true), t(3, a = null);
            try {
              await ya(m()), i0("/encounters");
            } catch (j) {
              t(3, a = j.message), t(2, r = false);
            }
          }
        }
        const O = () => t(10, F = false);
        function H() {
          d = this.value, t(6, d);
        }
        function Q() {
          C = this.value, t(7, C);
        }
        const K = () => t(4, u = false), G = () => t(4, u = true);
        return x.$$set = (j) => {
          "params" in j && t(22, o = j.params);
        }, x.$$.update = () => {
          x.$$.dirty[0] & 1 && t(12, n = l?.name || "Group encounter");
        }, [
          l,
          s,
          r,
          a,
          u,
          E,
          d,
          C,
          B,
          A,
          F,
          h,
          n,
          D,
          w,
          y,
          S,
          M,
          I,
          L,
          N,
          R,
          o,
          O,
          H,
          Q,
          K,
          G
        ];
      }
      class f9 extends m0 {
        constructor(e) {
          super(), p0(this, e, E9, u9, F0, {
            params: 22
          }, null, [
            -1,
            -1
          ]);
        }
      }
      async function d9(x) {
        const e = te();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const t = e.encounters.map((E) => ({
          raw_token: t0(E.rawToken),
          date: E.date,
          their_contact_id: t0(E.theirContactId)
        })), n = (e.relationships || []).map((E) => ({
          raw_token: t0(E.rawToken),
          date: E.createdAt,
          their_contact_id: t0(E.theirContactId)
        })), o = (e.results || []).map((E) => {
          const d = {};
          for (const C of xe) d[C] = E.positiveDiseases.includes(C) ? "positive" : "negative";
          return {
            test_date: E.date,
            result_json: JSON.stringify({
              panel: d,
              test_date: E.date,
              submission_type: "self_reported"
            }),
            lab_signature: "",
            user_pubkey: "",
            user_signature: "",
            is_positive: E.positiveDiseases.length > 0 ? 1 : 0,
            submission_type: "self_reported",
            has_notified: E.hasNotified ? 1 : 0,
            note: null
          };
        }), l = new TextEncoder().encode(JSON.stringify({
          version: 1,
          contact_id: t0(e.myContactId),
          encounters: [
            ...t,
            ...n
          ],
          test_results: o
        })), s = tt(16), r = await se(x, s), a = xt(r, l);
        r.fill(0);
        const u = new Uint8Array(16 + a.length);
        return u.set(s, 0), u.set(a, 16), u;
      }
      const B9 = "peachsafe-backup";
      function so(x, e, t) {
        const n = x.slice();
        return n[14] = e[t], n;
      }
      function ro(x, e, t) {
        const n = x.slice();
        return n[17] = e[t], n;
      }
      function C9(x) {
        let e;
        return {
          c() {
            e = z("Confirm PIN");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function A9(x) {
        let e;
        return {
          c() {
            e = z(x[0]);
          },
          m(t, n) {
            T(t, e, n);
          },
          p(t, n) {
            n & 1 && V(e, t[0]);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function F9(x) {
        let e;
        return {
          c() {
            e = z("Saving\u2026");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function ao(x) {
        let e;
        return {
          c() {
            e = f("div"), c(e, "class", "dot svelte-h9ojs4"), e0(e, "filled", x[17] < x[2].length);
          },
          m(t, n) {
            T(t, e, n);
          },
          p(t, n) {
            n & 4 && e0(e, "filled", t[17] < t[2].length);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function io(x) {
        let e, t, n, o;
        function l() {
          return x[9](x[14]);
        }
        return {
          c() {
            e = f("button"), t = z(x[14]), c(e, "class", "key svelte-h9ojs4"), e.disabled = x[5];
          },
          m(s, r) {
            T(s, e, r), i(e, t), n || (o = U(e, "click", l), n = true);
          },
          p(s, r) {
            x = s, r & 32 && (e.disabled = x[5]);
          },
          d(s) {
            s && P(e), n = false, o();
          }
        };
      }
      function D9(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b, _, m, D, k, w;
        function y(R, O) {
          return R[5] ? F9 : R[1] === "enter" ? A9 : C9;
        }
        let S = y(x), M = S(x), I = d0([
          0,
          1,
          2,
          3
        ]), L = [];
        for (let R = 0; R < 4; R += 1) L[R] = ao(ro(x, I, R));
        let N = d0([
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]), q = [];
        for (let R = 0; R < 9; R += 1) q[R] = io(so(x, N, R));
        return {
          c() {
            e = f("div"), t = f("div"), n = f("button"), n.innerHTML = '<span class="material-icons svelte-h9ojs4">arrow_back</span>', o = g(), l = f("div"), l.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-h9ojs4"/> <span class="brand-label"><span class="brand-peach svelte-h9ojs4">Peach</span><span class="brand-safe svelte-h9ojs4">Safe</span></span>', s = g(), r = f("p"), M.c(), a = g(), u = f("div");
            for (let R = 0; R < 4; R += 1) L[R].c();
            E = g(), d = f("p"), C = z(x[3]), B = g(), A = f("div");
            for (let R = 0; R < 9; R += 1) q[R].c();
            F = g(), p = f("button"), h = f("span"), h.textContent = "backspace", v = g(), b = f("button"), _ = z("0"), m = g(), D = f("div"), c(n, "class", "back-btn svelte-h9ojs4"), c(n, "aria-label", "Cancel"), c(l, "class", "brand svelte-h9ojs4"), c(r, "class", "prompt svelte-h9ojs4"), c(u, "class", "dots svelte-h9ojs4"), e0(u, "shake", x[4]), c(d, "class", "error-msg svelte-h9ojs4"), c(h, "class", "material-icons svelte-h9ojs4"), c(p, "class", "key key-del svelte-h9ojs4"), c(p, "aria-label", "Delete"), p.disabled = x[5], c(b, "class", "key svelte-h9ojs4"), b.disabled = x[5], c(A, "class", "numpad svelte-h9ojs4"), e0(A, "disabled", x[5]), c(t, "class", "setup-card svelte-h9ojs4"), c(e, "class", "overlay svelte-h9ojs4"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-label", x[0]);
          },
          m(R, O) {
            T(R, e, O), i(e, t), i(t, n), i(t, o), i(t, l), i(t, s), i(t, r), M.m(r, null), i(t, a), i(t, u);
            for (let H = 0; H < 4; H += 1) L[H] && L[H].m(u, null);
            i(t, E), i(t, d), i(d, C), i(t, B), i(t, A);
            for (let H = 0; H < 9; H += 1) q[H] && q[H].m(A, null);
            i(A, F), i(A, p), i(p, h), i(A, v), i(A, b), i(b, _), i(A, m), i(A, D), k || (w = [
              U(n, "click", x[8]),
              U(p, "click", x[7]),
              U(b, "click", x[10])
            ], k = true);
          },
          p(R, [O]) {
            if (S === (S = y(R)) && M ? M.p(R, O) : (M.d(1), M = S(R), M && (M.c(), M.m(r, null))), O & 4) {
              I = d0([
                0,
                1,
                2,
                3
              ]);
              let H;
              for (H = 0; H < 4; H += 1) {
                const Q = ro(R, I, H);
                L[H] ? L[H].p(Q, O) : (L[H] = ao(Q), L[H].c(), L[H].m(u, null));
              }
              for (; H < 4; H += 1) L[H].d(1);
            }
            if (O & 16 && e0(u, "shake", R[4]), O & 8 && V(C, R[3]), O & 96) {
              N = d0([
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
              ]);
              let H;
              for (H = 0; H < 9; H += 1) {
                const Q = so(R, N, H);
                q[H] ? q[H].p(Q, O) : (q[H] = io(Q), q[H].c(), q[H].m(A, F));
              }
              for (; H < 9; H += 1) q[H].d(1);
            }
            O & 32 && (p.disabled = R[5]), O & 32 && (b.disabled = R[5]), O & 32 && e0(A, "disabled", R[5]), O & 1 && c(e, "aria-label", R[0]);
          },
          i: Z,
          o: Z,
          d(R) {
            R && P(e), M.d(), j0(L, R), j0(q, R), k = false, l0(w);
          }
        };
      }
      function p9(x, e, t) {
        let { title: n = "Set PIN" } = e;
        const o = nl();
        let l = "enter", s = "", r = "", a = "", u = false, E = false;
        function d(h) {
          r.length >= 4 || u || E || (t(3, a = ""), t(2, r += h), r.length === 4 && B());
        }
        function C() {
          u || E || (t(2, r = r.slice(0, -1)), t(3, a = ""));
        }
        async function B() {
          if (l === "enter") s = r, t(2, r = ""), t(1, l = "confirm");
          else if (r === s) {
            t(5, E = true);
            try {
              await Ra(r), Ut.set(true), o("done");
            } catch (h) {
              t(3, a = h.message), t(5, E = false), t(2, r = "");
            }
          } else t(4, u = true), t(3, a = "PINs don't match \u2014 try again"), await new Promise((h) => setTimeout(h, 600)), t(2, r = ""), s = "", t(1, l = "enter"), t(3, a = ""), t(4, u = false);
        }
        function A() {
          o("cancel");
        }
        const F = (h) => d(String(h)), p = () => d("0");
        return x.$$set = (h) => {
          "title" in h && t(0, n = h.title);
        }, [
          n,
          l,
          r,
          a,
          u,
          E,
          d,
          C,
          A,
          F,
          p
        ];
      }
      class m9 extends m0 {
        constructor(e) {
          super(), p0(this, e, p9, D9, F0, {
            title: 0
          });
        }
      }
      function co(x, e, t) {
        const n = x.slice();
        return n[70] = e[t], n;
      }
      function uo(x, e, t) {
        const n = x.slice();
        return n[73] = e[t], n;
      }
      function h9(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b, _, m, D = x[4] ? "verified_user" : "shield", k, w, y = x[4] ? "Enabled" : "Disabled", S, M, I, L, N, q, R, O, H, Q, K, G, j, W, J, a0, c0, r0, s0, B0, le, X, n0, u0, h0, v0, z0, G0, q0, g0, T0, S0, lt, Oe, de, He, st;
        function rt($, E0) {
          return $[31] ? b9 : k9;
        }
        let _e = rt(x), Z0 = _e(x);
        function at($, E0) {
          if ($[26] === "idle") return T9;
          if ($[26] === "entering_pin") return P9;
          if ($[26] === "exporting") return y9;
          if ($[26] === "done") return w9;
          if ($[26] === "error") return g9;
        }
        let ae = at(x), I0 = ae && ae(x);
        function it($, E0) {
          return $[4] ? I9 : S9;
        }
        let ke = it(x), $0 = ke(x);
        function Qt($, E0) {
          return $[4] ? M9 : L9;
        }
        let o0 = Qt(x), M0 = o0(x), R0 = x[25] && Do();
        function ct($, E0) {
          return $[32] !== null ? H9 : O9;
        }
        let Be = ct(x), J0 = Be(x);
        function Hx($, E0) {
          return $[32] !== null ? j9 : U9;
        }
        let ut = Hx(x), ee = ut(x);
        function Ux($, E0) {
          return $[3] ? G9 : V9;
        }
        let Et = Ux(x), ie = Et(x), U0 = x[18] && po(x);
        return {
          c() {
            e = f("section"), t = f("div"), n = f("div"), n.innerHTML = '<h2 class="svelte-3s0d7a">Appearance</h2> <p class="hint svelte-3s0d7a">Choose your preferred color scheme.</p>', o = g(), l = f("div"), s = f("button"), s.textContent = "Light", r = g(), a = f("button"), a.textContent = "Dark", u = g(), E = f("section"), d = f("h2"), d.textContent = "Export to mobile", C = g(), Z0.c(), B = g(), I0 && I0.c(), A = g(), F = f("section"), p = f("div"), h = f("div"), v = f("h2"), v.textContent = "Two-factor authentication", b = g(), _ = f("span"), m = f("span"), k = z(D), w = g(), S = z(y), M = g(), I = f("p"), $0.c(), L = g(), M0.c(), N = g(), q = f("section"), R = f("div"), O = f("div"), H = f("h2"), H.textContent = "Screen lock", Q = g(), K = f("button"), K.innerHTML = '<span class="material-icons svelte-3s0d7a">info_outline</span>', G = g(), R0 && R0.c(), j = g(), W = f("p"), J0.c(), J = g(), ee.c(), a0 = g(), c0 = f("section"), r0 = f("div"), s0 = f("div"), B0 = f("h2"), B0.textContent = "Email", le = g(), X = f("div"), n0 = f("span"), u0 = z(x[2]), h0 = g(), ie.c(), v0 = g(), z0 = f("a"), z0.textContent = "Change email", G0 = g(), q0 = f("section"), q0.innerHTML = '<div class="row svelte-3s0d7a"><div class="svelte-3s0d7a"><h2 class="svelte-3s0d7a">Password</h2> <p class="hint svelte-3s0d7a">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-3s0d7a">Change password</a></div>', g0 = g(), T0 = f("section"), S0 = f("div"), S0.innerHTML = '<h2 class="svelte-3s0d7a">Delete account</h2> <p class="hint svelte-3s0d7a">Permanently delete your account and all data stored on the server. This cannot be undone.</p>', lt = g(), U0 && U0.c(), Oe = g(), de = f("button"), de.textContent = "Delete account", c(n, "class", "svelte-3s0d7a"), c(s, "class", "theme-btn svelte-3s0d7a"), e0(s, "active", x[30] === "light"), c(a, "class", "theme-btn svelte-3s0d7a"), e0(a, "active", x[30] === "dark"), c(l, "class", "theme-toggle svelte-3s0d7a"), c(t, "class", "row svelte-3s0d7a"), c(e, "class", "card svelte-3s0d7a"), c(d, "class", "svelte-3s0d7a"), c(E, "class", "card svelte-3s0d7a"), c(v, "class", "svelte-3s0d7a"), c(m, "class", "material-icons svelte-3s0d7a"), c(_, "class", "status-badge svelte-3s0d7a"), e0(_, "enabled", x[4]), e0(_, "disabled", !x[4]), c(h, "class", "totp-heading svelte-3s0d7a"), c(I, "class", "hint svelte-3s0d7a"), c(F, "class", "card svelte-3s0d7a"), c(H, "class", "svelte-3s0d7a"), c(K, "class", "info-btn svelte-3s0d7a"), c(K, "aria-label", "About screen lock"), e0(K, "active", x[25]), c(O, "class", "section-heading svelte-3s0d7a"), c(W, "class", "hint svelte-3s0d7a"), c(q, "class", "card svelte-3s0d7a"), c(B0, "class", "svelte-3s0d7a"), c(n0, "class", "hint email-value svelte-3s0d7a"), c(X, "class", "email-meta svelte-3s0d7a"), c(s0, "class", "svelte-3s0d7a"), c(z0, "href", "#/change-email"), c(z0, "class", "btn-outline-sm svelte-3s0d7a"), c(r0, "class", "row svelte-3s0d7a"), c(c0, "class", "card svelte-3s0d7a"), c(q0, "class", "card svelte-3s0d7a"), c(de, "class", "btn-danger svelte-3s0d7a"), c(T0, "class", "card danger-card svelte-3s0d7a");
          },
          m($, E0) {
            T($, e, E0), i(e, t), i(t, n), i(t, o), i(t, l), i(l, s), i(l, r), i(l, a), T($, u, E0), T($, E, E0), i(E, d), i(E, C), Z0.m(E, null), i(E, B), I0 && I0.m(E, null), T($, A, E0), T($, F, E0), i(F, p), i(p, h), i(h, v), i(h, b), i(h, _), i(_, m), i(m, k), i(_, w), i(_, S), i(p, M), i(p, I), $0.m(I, null), i(F, L), M0.m(F, null), T($, N, E0), T($, q, E0), i(q, R), i(R, O), i(O, H), i(O, Q), i(O, K), i(R, G), R0 && R0.m(R, null), i(R, j), i(R, W), J0.m(W, null), i(q, J), ee.m(q, null), T($, a0, E0), T($, c0, E0), i(c0, r0), i(r0, s0), i(s0, B0), i(s0, le), i(s0, X), i(X, n0), i(n0, u0), i(X, h0), ie.m(X, null), i(r0, v0), i(r0, z0), T($, G0, E0), T($, q0, E0), T($, g0, E0), T($, T0, E0), i(T0, S0), i(T0, lt), U0 && U0.m(T0, null), i(T0, Oe), i(T0, de), He || (st = [
              U(s, "click", x[42]),
              U(a, "click", x[43]),
              U(K, "click", x[52]),
              U(de, "click", x[56])
            ], He = true);
          },
          p($, E0) {
            E0[0] & 1073741824 && e0(s, "active", $[30] === "light"), E0[0] & 1073741824 && e0(a, "active", $[30] === "dark"), _e !== (_e = rt($)) && (Z0.d(1), Z0 = _e($), Z0 && (Z0.c(), Z0.m(E, B))), ae === (ae = at($)) && I0 ? I0.p($, E0) : (I0 && I0.d(1), I0 = ae && ae($), I0 && (I0.c(), I0.m(E, null))), E0[0] & 16 && D !== (D = $[4] ? "verified_user" : "shield") && V(k, D), E0[0] & 16 && y !== (y = $[4] ? "Enabled" : "Disabled") && V(S, y), E0[0] & 16 && e0(_, "enabled", $[4]), E0[0] & 16 && e0(_, "disabled", !$[4]), ke !== (ke = it($)) && ($0.d(1), $0 = ke($), $0 && ($0.c(), $0.m(I, null))), o0 === (o0 = Qt($)) && M0 ? M0.p($, E0) : (M0.d(1), M0 = o0($), M0 && (M0.c(), M0.m(F, null))), E0[0] & 33554432 && e0(K, "active", $[25]), $[25] ? R0 || (R0 = Do(), R0.c(), R0.m(R, j)) : R0 && (R0.d(1), R0 = null), Be !== (Be = ct($)) && (J0.d(1), J0 = Be($), J0 && (J0.c(), J0.m(W, null))), ut === (ut = Hx($)) && ee ? ee.p($, E0) : (ee.d(1), ee = ut($), ee && (ee.c(), ee.m(q, null))), E0[0] & 4 && V(u0, $[2]), Et !== (Et = Ux($)) && (ie.d(1), ie = Et($), ie && (ie.c(), ie.m(X, null))), $[18] ? U0 ? U0.p($, E0) : (U0 = po($), U0.c(), U0.m(T0, Oe)) : U0 && (U0.d(1), U0 = null);
          },
          d($) {
            $ && (P(e), P(u), P(E), P(A), P(F), P(N), P(q), P(a0), P(c0), P(G0), P(q0), P(g0), P(T0)), Z0.d(), I0 && I0.d(), $0.d(), M0.d(), R0 && R0.d(), J0.d(), ee.d(), ie.d(), U0 && U0.d(), He = false, l0(st);
          }
        };
      }
      function v9(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[1]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 2 && V(t, n[1]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function _9(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Loading\u2026", c(e, "class", "muted svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function k9(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", c(e, "class", "hint svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function b9(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", c(e, "class", "hint warning svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function g9(x) {
        let e, t, n, o, l, s;
        return {
          c() {
            e = f("p"), t = z(x[29]), n = g(), o = f("button"), o.textContent = "Try again", c(e, "class", "error svelte-3s0d7a"), c(o, "class", "btn-ghost svelte-3s0d7a");
          },
          m(r, a) {
            T(r, e, a), i(e, t), T(r, n, a), T(r, o, a), l || (s = U(o, "click", x[38]), l = true);
          },
          p(r, a) {
            a[0] & 536870912 && V(t, r[29]);
          },
          d(r) {
            r && (P(e), P(n), P(o)), l = false, s();
          }
        };
      }
      function w9(x) {
        let e, t, n, o, l;
        return {
          c() {
            e = f("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, t = g(), n = f("button"), n.textContent = "Done", c(e, "class", "hint svelte-3s0d7a"), c(n, "class", "btn-ghost svelte-3s0d7a");
          },
          m(s, r) {
            T(s, e, r), T(s, t, r), T(s, n, r), o || (l = U(n, "click", x[38]), o = true);
          },
          p: Z,
          d(s) {
            s && (P(e), P(t), P(n)), o = false, l();
          }
        };
      }
      function y9(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Encrypting\u2026", c(e, "class", "hint svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function P9(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b = x[29] && Eo(x);
        return {
          c() {
            e = f("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", t = g(), n = f("div"), o = f("label"), l = z(`PIN
            `), s = f("input"), r = g(), a = f("label"), u = z(`Confirm PIN
            `), E = f("input"), d = g(), b && b.c(), C = g(), B = f("div"), A = f("button"), A.textContent = "Download backup", F = g(), p = f("button"), p.textContent = "Cancel", c(e, "class", "hint svelte-3s0d7a"), c(s, "type", "password"), c(s, "inputmode", "numeric"), c(s, "maxlength", "6"), c(s, "placeholder", "6 digits"), c(s, "autocomplete", "new-password"), c(E, "type", "password"), c(E, "inputmode", "numeric"), c(E, "maxlength", "6"), c(E, "placeholder", "6 digits"), c(E, "autocomplete", "new-password"), c(A, "class", "btn-primary svelte-3s0d7a"), c(p, "class", "btn-ghost svelte-3s0d7a"), c(B, "class", "export-actions svelte-3s0d7a"), c(n, "class", "export-form svelte-3s0d7a");
          },
          m(_, m) {
            T(_, e, m), T(_, t, m), T(_, n, m), i(n, o), i(o, l), i(o, s), x0(s, x[27]), i(n, r), i(n, a), i(a, u), i(a, E), x0(E, x[28]), i(n, d), b && b.m(n, null), i(n, C), i(n, B), i(B, A), i(B, F), i(B, p), h || (v = [
              U(s, "input", x[45]),
              U(E, "input", x[46]),
              U(A, "click", x[37]),
              U(p, "click", x[38])
            ], h = true);
          },
          p(_, m) {
            m[0] & 134217728 && s.value !== _[27] && x0(s, _[27]), m[0] & 268435456 && E.value !== _[28] && x0(E, _[28]), _[29] ? b ? b.p(_, m) : (b = Eo(_), b.c(), b.m(n, C)) : b && (b.d(1), b = null);
          },
          d(_) {
            _ && (P(e), P(t), P(n)), b && b.d(), h = false, l0(v);
          }
        };
      }
      function T9(x) {
        let e, t, n;
        return {
          c() {
            e = f("button"), e.textContent = "Export data for mobile app", c(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(o, l) {
            T(o, e, l), t || (n = U(e, "click", x[44]), t = true);
          },
          p: Z,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function Eo(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[29]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 536870912 && V(t, n[29]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function S9(x) {
        let e;
        return {
          c() {
            e = z("Add an extra layer of security by requiring an authenticator code at login.");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function I9(x) {
        let e;
        return {
          c() {
            e = z("Your account requires a code from your authenticator app at login.");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function M9(x) {
        let e, t, n, o, l, s, r, a = x[5] !== 1 ? "s" : "", u, E, d, C, B, A, F, p, h, v, b, _, m, D;
        function k(q, R) {
          return q[15].length > 0 ? z9 : N9;
        }
        let w = k(x), y = w(x), S = x[7] && Co(x);
        function M(q, R) {
          return q[6].length === 0 ? R9 : q9;
        }
        let I = M(x), L = I(x), N = x[11] && Fo(x);
        return {
          c() {
            e = f("div"), t = f("div"), n = f("span"), n.textContent = "key", o = g(), l = f("span"), s = z(x[5]), r = z(" backup code"), u = z(a), E = z(" remaining"), d = g(), y.c(), C = g(), B = f("div"), A = f("div"), A.innerHTML = '<span class="material-icons svelte-3s0d7a">devices</span> <span>Trusted devices</span>', F = g(), S && S.c(), p = g(), L.c(), h = g(), v = f("div"), N && N.c(), b = g(), _ = f("button"), _.textContent = "Disable 2FA", c(n, "class", "material-icons svelte-3s0d7a"), c(t, "class", "backup-count svelte-3s0d7a"), c(e, "class", "backup-section svelte-3s0d7a"), c(A, "class", "backup-count svelte-3s0d7a"), c(B, "class", "backup-section svelte-3s0d7a"), c(_, "class", "btn-danger svelte-3s0d7a"), c(v, "class", "danger-zone svelte-3s0d7a");
          },
          m(q, R) {
            T(q, e, R), i(e, t), i(t, n), i(t, o), i(t, l), i(l, s), i(l, r), i(l, u), i(l, E), i(e, d), y.m(e, null), T(q, C, R), T(q, B, R), i(B, A), i(B, F), S && S.m(B, null), i(B, p), L.m(B, null), T(q, h, R), T(q, v, R), N && N.m(v, null), i(v, b), i(v, _), m || (D = U(_, "click", x[51]), m = true);
          },
          p(q, R) {
            R[0] & 32 && V(s, q[5]), R[0] & 32 && a !== (a = q[5] !== 1 ? "s" : "") && V(u, a), w === (w = k(q)) && y ? y.p(q, R) : (y.d(1), y = w(q), y && (y.c(), y.m(e, null))), q[7] ? S ? S.p(q, R) : (S = Co(q), S.c(), S.m(B, p)) : S && (S.d(1), S = null), I === (I = M(q)) && L ? L.p(q, R) : (L.d(1), L = I(q), L && (L.c(), L.m(B, null))), q[11] ? N ? N.p(q, R) : (N = Fo(q), N.c(), N.m(v, b)) : N && (N.d(1), N = null);
          },
          d(q) {
            q && (P(e), P(C), P(B), P(h), P(v)), y.d(), S && S.d(), L.d(), N && N.d(), m = false, D();
          }
        };
      }
      function L9(x) {
        let e, t, n;
        return {
          c() {
            e = f("button"), e.textContent = "Enable 2FA", c(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(o, l) {
            T(o, e, l), t || (n = U(e, "click", x[47]), t = true);
          },
          p: Z,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function N9(x) {
        let e, t, n, o, l, s = x[14] && fo(x);
        return {
          c() {
            s && s.c(), e = g(), t = f("button"), n = z("Regenerate backup codes"), c(t, "class", "btn-outline-sm svelte-3s0d7a"), t.disabled = x[13];
          },
          m(r, a) {
            s && s.m(r, a), T(r, e, a), T(r, t, a), i(t, n), o || (l = U(t, "click", x[49]), o = true);
          },
          p(r, a) {
            r[14] ? s ? s.p(r, a) : (s = fo(r), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), a[0] & 8192 && (t.disabled = r[13]);
          },
          d(r) {
            r && (P(e), P(t)), s && s.d(r), o = false, l();
          }
        };
      }
      function z9(x) {
        let e, t, n, o, l, s, r, a, u, E, d = d0(x[15]), C = [];
        for (let B = 0; B < d.length; B += 1) C[B] = Bo(uo(x, d, B));
        return {
          c() {
            e = f("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", t = g(), n = f("div");
            for (let B = 0; B < C.length; B += 1) C[B].c();
            o = g(), l = f("div"), s = f("button"), s.innerHTML = `<span class="material-icons svelte-3s0d7a">download</span>
                Download`, r = g(), a = f("button"), a.textContent = "Done", c(e, "class", "hint warning svelte-3s0d7a"), c(n, "class", "backup-grid"), c(s, "class", "btn-outline-sm dl-btn svelte-3s0d7a"), c(a, "class", "btn-outline-sm svelte-3s0d7a"), c(l, "class", "regen-code-actions svelte-3s0d7a");
          },
          m(B, A) {
            T(B, e, A), T(B, t, A), T(B, n, A);
            for (let F = 0; F < C.length; F += 1) C[F] && C[F].m(n, null);
            T(B, o, A), T(B, l, A), i(l, s), i(l, r), i(l, a), u || (E = [
              U(s, "click", x[48]),
              U(a, "click", x[40])
            ], u = true);
          },
          p(B, A) {
            if (A[0] & 32768) {
              d = d0(B[15]);
              let F;
              for (F = 0; F < d.length; F += 1) {
                const p = uo(B, d, F);
                C[F] ? C[F].p(p, A) : (C[F] = Bo(p), C[F].c(), C[F].m(n, null));
              }
              for (; F < C.length; F += 1) C[F].d(1);
              C.length = d.length;
            }
          },
          d(B) {
            B && (P(e), P(t), P(n), P(o), P(l)), j0(C, B), u = false, l0(E);
          }
        };
      }
      function fo(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[14]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 16384 && V(t, n[14]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Bo(x) {
        let e, t = x[73] + "", n;
        return {
          c() {
            e = f("code"), n = z(t), c(e, "class", "backup-code");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l[0] & 32768 && t !== (t = o[73] + "") && V(n, t);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Co(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[7]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 128 && V(t, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function q9(x) {
        let e, t = [], n = /* @__PURE__ */ new Map(), o, l, s = x[8] ? "Revoking\u2026" : "Revoke all", r, a, u, E = d0(x[6]);
        const d = (C) => C[70].id;
        for (let C = 0; C < E.length; C += 1) {
          let B = co(x, E, C), A = d(B);
          n.set(A, t[C] = Ao(A, B));
        }
        return {
          c() {
            e = f("ul");
            for (let C = 0; C < t.length; C += 1) t[C].c();
            o = g(), l = f("button"), r = z(s), c(e, "class", "device-list svelte-3s0d7a"), c(l, "class", "btn-outline-sm svelte-3s0d7a"), l.disabled = x[8];
          },
          m(C, B) {
            T(C, e, B);
            for (let A = 0; A < t.length; A += 1) t[A] && t[A].m(e, null);
            T(C, o, B), T(C, l, B), i(l, r), a || (u = U(l, "click", x[34]), a = true);
          },
          p(C, B) {
            B[0] & 64 | B[1] & 4 && (E = d0(C[6]), t = as(t, B, d, 1, C, E, n, e, rs, Ao, null, co)), B[0] & 256 && s !== (s = C[8] ? "Revoking\u2026" : "Revoke all") && V(r, s), B[0] & 256 && (l.disabled = C[8]);
          },
          d(C) {
            C && (P(e), P(o), P(l));
            for (let B = 0; B < t.length; B += 1) t[B].d();
            a = false, u();
          }
        };
      }
      function R9(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = 'No trusted devices. Check "Remember this device" at login to skip 2FA on this browser in future.', c(e, "class", "hint svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function Ao(x, e) {
        let t, n, o = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "", l, s, r = Po(e[70].created_at) + "", a, u, E, d, C, B;
        function A() {
          return e[50](e[70]);
        }
        return {
          key: x,
          first: null,
          c() {
            t = f("li"), n = f("span"), l = z(o), s = z("Added "), a = z(r), u = g(), E = f("button"), E.textContent = "Revoke", d = g(), c(n, "class", "device-date svelte-3s0d7a"), c(E, "class", "btn-outline-sm svelte-3s0d7a"), c(t, "class", "device-item svelte-3s0d7a"), this.first = t;
          },
          m(F, p) {
            T(F, t, p), i(t, n), i(n, l), i(n, s), i(n, a), i(t, u), i(t, E), i(t, d), C || (B = U(E, "click", A), C = true);
          },
          p(F, p) {
            e = F, p[0] & 64 && o !== (o = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "") && V(l, o), p[0] & 64 && r !== (r = Po(e[70].created_at) + "") && V(a, r);
          },
          d(F) {
            F && P(t), C = false, B();
          }
        };
      }
      function Fo(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[11]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 2048 && V(t, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Do(x) {
        let e;
        return {
          c() {
            e = f("p"), e.innerHTML = "Requires a 4-digit PIN to open Encounters, Results, Alerts and Settings, while still allowing you to add a new encounter from the Home screen. Useful if you hand your phone to someone - it stops casual snooping. <br/><strong>Note:</strong> your data is already encrypted by your password; the PIN adds no additional encryption.", c(e, "class", "info-box svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function O9(x) {
        let e;
        return {
          c() {
            e = z("Set a 4-digit PIN to prevent casual access to your data.");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function H9(x) {
        let e;
        return {
          c() {
            e = z("A PIN is required to view your encounters, results, and alerts.");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function U9(x) {
        let e, t, n;
        return {
          c() {
            e = f("button"), e.textContent = "Set PIN", c(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(o, l) {
            T(o, e, l), t || (n = U(e, "click", x[55]), t = true);
          },
          p: Z,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function j9(x) {
        let e, t, n, o, l, s;
        return {
          c() {
            e = f("div"), t = f("button"), t.textContent = "Change PIN", n = g(), o = f("button"), o.textContent = "Remove PIN", c(t, "class", "btn-outline-sm svelte-3s0d7a"), c(o, "class", "btn-outline-sm btn-outline-danger svelte-3s0d7a"), c(e, "class", "row-actions svelte-3s0d7a");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o), l || (s = [
              U(t, "click", x[53]),
              U(o, "click", x[54])
            ], l = true);
          },
          p: Z,
          d(r) {
            r && P(e), l = false, l0(s);
          }
        };
      }
      function V9(x) {
        let e;
        return {
          c() {
            e = f("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">warning</span>
                Unverified`, c(e, "class", "unverified-badge svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function G9(x) {
        let e;
        return {
          c() {
            e = f("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">verified</span>
                Verified`, c(e, "class", "verified-badge svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function po(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[18]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 262144 && V(t, n[18]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function mo(x) {
        let e, t;
        return e = new m9({
          props: {
            title: x[21]
          }
        }), e.$on("done", x[57]), e.$on("cancel", x[58]), {
          c() {
            w0(e.$$.fragment);
          },
          m(n, o) {
            k0(e, n, o), t = true;
          },
          p(n, o) {
            const l = {};
            o[0] & 2097152 && (l.title = n[21]), e.$set(l);
          },
          i(n) {
            t || (f0(e.$$.fragment, n), t = true);
          },
          o(n) {
            C0(e.$$.fragment, n), t = false;
          },
          d(n) {
            b0(e, n);
          }
        };
      }
      function ho(x) {
        let e, t, n, o, l, s, r, a, u, E = x[23] ? "Removing\u2026" : "Remove PIN", d, C, B, A, F, p, h = x[24] && vo(x);
        return {
          c() {
            e = f("div"), t = f("div"), n = f("h2"), n.textContent = "Remove screen lock PIN?", o = g(), l = f("p"), l.textContent = "Anyone with access to your phone will be able to view your encounters and alerts.", s = g(), h && h.c(), r = g(), a = f("div"), u = f("button"), d = z(E), C = g(), B = f("button"), A = z("Cancel"), c(n, "id", "remove-pin-title"), c(n, "class", "svelte-3s0d7a"), c(l, "class", "svelte-3s0d7a"), c(u, "class", "btn-danger svelte-3s0d7a"), u.disabled = x[23], c(B, "class", "btn-ghost svelte-3s0d7a"), B.disabled = x[23], c(a, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "remove-pin-title");
          },
          m(v, b) {
            T(v, e, b), i(e, t), i(t, n), i(t, o), i(t, l), i(t, s), h && h.m(t, null), i(t, r), i(t, a), i(a, u), i(u, d), i(a, C), i(a, B), i(B, A), F || (p = [
              U(u, "click", x[36]),
              U(B, "click", x[59])
            ], F = true);
          },
          p(v, b) {
            v[24] ? h ? h.p(v, b) : (h = vo(v), h.c(), h.m(t, r)) : h && (h.d(1), h = null), b[0] & 8388608 && E !== (E = v[23] ? "Removing\u2026" : "Remove PIN") && V(d, E), b[0] & 8388608 && (u.disabled = v[23]), b[0] & 8388608 && (B.disabled = v[23]);
          },
          d(v) {
            v && P(e), h && h.d(), F = false, l0(p);
          }
        };
      }
      function vo(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[24]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 16777216 && V(t, n[24]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function _o(x) {
        let e, t, n, o, l, s, r, a, u, E = x[10] ? "Disabling\u2026" : "Yes, disable 2FA", d, C, B, A, F, p, h = x[11] && ko(x);
        return {
          c() {
            e = f("div"), t = f("div"), n = f("h2"), n.textContent = "Disable two-factor authentication?", o = g(), l = f("p"), l.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, s = g(), h && h.c(), r = g(), a = f("div"), u = f("button"), d = z(E), C = g(), B = f("button"), A = z("Cancel"), c(n, "id", "disable-title"), c(n, "class", "svelte-3s0d7a"), c(l, "class", "svelte-3s0d7a"), c(u, "class", "btn-danger svelte-3s0d7a"), u.disabled = x[10], c(B, "class", "btn-ghost svelte-3s0d7a"), B.disabled = x[10], c(a, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "disable-title");
          },
          m(v, b) {
            T(v, e, b), i(e, t), i(t, n), i(t, o), i(t, l), i(t, s), h && h.m(t, null), i(t, r), i(t, a), i(a, u), i(u, d), i(a, C), i(a, B), i(B, A), F || (p = [
              U(u, "click", x[35]),
              U(B, "click", x[60])
            ], F = true);
          },
          p(v, b) {
            v[11] ? h ? h.p(v, b) : (h = ko(v), h.c(), h.m(t, r)) : h && (h.d(1), h = null), b[0] & 1024 && E !== (E = v[10] ? "Disabling\u2026" : "Yes, disable 2FA") && V(d, E), b[0] & 1024 && (u.disabled = v[10]), b[0] & 1024 && (B.disabled = v[10]);
          },
          d(v) {
            v && P(e), h && h.d(), F = false, l0(p);
          }
        };
      }
      function ko(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[11]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 2048 && V(t, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function bo(x) {
        let e, t, n, o, l, s, r, a, u, E = x[13] ? "Regenerating\u2026" : "Regenerate", d, C, B, A, F, p, h = x[14] && go(x);
        return {
          c() {
            e = f("div"), t = f("div"), n = f("h2"), n.textContent = "Regenerate backup codes?", o = g(), l = f("p"), l.textContent = "All existing backup codes will be permanently invalidated.", s = g(), h && h.c(), r = g(), a = f("div"), u = f("button"), d = z(E), C = g(), B = f("button"), A = z("Cancel"), c(n, "id", "regen-title"), c(n, "class", "svelte-3s0d7a"), c(l, "class", "svelte-3s0d7a"), c(u, "class", "btn-primary svelte-3s0d7a"), u.disabled = x[13], c(B, "class", "btn-ghost svelte-3s0d7a"), B.disabled = x[13], c(a, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "regen-title");
          },
          m(v, b) {
            T(v, e, b), i(e, t), i(t, n), i(t, o), i(t, l), i(t, s), h && h.m(t, null), i(t, r), i(t, a), i(a, u), i(u, d), i(a, C), i(a, B), i(B, A), F || (p = [
              U(u, "click", x[39]),
              U(B, "click", x[61])
            ], F = true);
          },
          p(v, b) {
            v[14] ? h ? h.p(v, b) : (h = go(v), h.c(), h.m(t, r)) : h && (h.d(1), h = null), b[0] & 8192 && E !== (E = v[13] ? "Regenerating\u2026" : "Regenerate") && V(d, E), b[0] & 8192 && (u.disabled = v[13]), b[0] & 8192 && (B.disabled = v[13]);
          },
          d(v) {
            v && P(e), h && h.d(), F = false, l0(p);
          }
        };
      }
      function go(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[14]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 16384 && V(t, n[14]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function wo(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p = x[17] ? "Deleting\u2026" : "Yes, delete my account", h, v, b, _, m, D, k, w = x[18] && yo(x);
        return {
          c() {
            e = f("div"), t = f("div"), n = f("h2"), n.textContent = "Delete your account?", o = g(), l = f("p"), l.innerHTML = `This will permanently delete your account and all data stored on the server.
        <strong>There is no undo.</strong>`, s = g(), r = f("p"), r.textContent = "If you haven't already, export your data first so you can import it into the mobile app.", a = g(), u = f("label"), u.textContent = "Type your email address to confirm:", E = g(), d = f("input"), C = g(), w && w.c(), B = g(), A = f("div"), F = f("button"), h = z(p), b = g(), _ = f("button"), m = z("Cancel"), c(n, "id", "delete-title"), c(n, "class", "svelte-3s0d7a"), c(l, "class", "svelte-3s0d7a"), c(r, "class", "hint svelte-3s0d7a"), c(u, "class", "confirm-label svelte-3s0d7a"), c(u, "for", "delete-confirm-input"), c(d, "id", "delete-confirm-input"), c(d, "class", "confirm-input svelte-3s0d7a"), c(d, "type", "text"), c(d, "placeholder", x[2]), c(d, "autocomplete", "off"), d.disabled = x[17], c(F, "class", "btn-danger svelte-3s0d7a"), F.disabled = v = x[17] || x[19] !== x[2], c(_, "class", "btn-ghost svelte-3s0d7a"), _.disabled = x[17], c(A, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "delete-title");
          },
          m(y, S) {
            T(y, e, S), i(e, t), i(t, n), i(t, o), i(t, l), i(t, s), i(t, r), i(t, a), i(t, u), i(t, E), i(t, d), x0(d, x[19]), i(t, C), w && w.m(t, null), i(t, B), i(t, A), i(A, F), i(F, h), i(A, b), i(A, _), i(_, m), D || (k = [
              U(d, "input", x[62]),
              U(F, "click", x[41]),
              U(_, "click", x[63])
            ], D = true);
          },
          p(y, S) {
            S[0] & 4 && c(d, "placeholder", y[2]), S[0] & 131072 && (d.disabled = y[17]), S[0] & 524288 && d.value !== y[19] && x0(d, y[19]), y[18] ? w ? w.p(y, S) : (w = yo(y), w.c(), w.m(t, B)) : w && (w.d(1), w = null), S[0] & 131072 && p !== (p = y[17] ? "Deleting\u2026" : "Yes, delete my account") && V(h, p), S[0] & 655364 && v !== (v = y[17] || y[19] !== y[2]) && (F.disabled = v), S[0] & 131072 && (_.disabled = y[17]);
          },
          d(y) {
            y && P(e), w && w.d(), D = false, l0(k);
          }
        };
      }
      function yo(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[18]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 262144 && V(t, n[18]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function K9(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C;
        e = new ne({});
        function B(m, D) {
          return m[0] ? _9 : m[1] ? v9 : h9;
        }
        let A = B(x), F = A(x), p = x[20] && mo(x), h = x[22] && ho(x), v = x[9] && _o(x), b = x[12] && bo(x), _ = x[16] && wo(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), o = f("h1"), o.textContent = "Settings", l = g(), F.c(), s = g(), p && p.c(), r = g(), h && h.c(), a = g(), v && v.c(), u = g(), b && b.c(), E = g(), _ && _.c(), d = X0(), c(o, "class", "svelte-3s0d7a"), c(n, "class", "svelte-3s0d7a");
          },
          m(m, D) {
            k0(e, m, D), T(m, t, D), T(m, n, D), i(n, o), i(n, l), F.m(n, null), T(m, s, D), p && p.m(m, D), T(m, r, D), h && h.m(m, D), T(m, a, D), v && v.m(m, D), T(m, u, D), b && b.m(m, D), T(m, E, D), _ && _.m(m, D), T(m, d, D), C = true;
          },
          p(m, D) {
            A === (A = B(m)) && F ? F.p(m, D) : (F.d(1), F = A(m), F && (F.c(), F.m(n, null))), m[20] ? p ? (p.p(m, D), D[0] & 1048576 && f0(p, 1)) : (p = mo(m), p.c(), f0(p, 1), p.m(r.parentNode, r)) : p && (qe(), C0(p, 1, 1, () => {
              p = null;
            }), Re()), m[22] ? h ? h.p(m, D) : (h = ho(m), h.c(), h.m(a.parentNode, a)) : h && (h.d(1), h = null), m[9] ? v ? v.p(m, D) : (v = _o(m), v.c(), v.m(u.parentNode, u)) : v && (v.d(1), v = null), m[12] ? b ? b.p(m, D) : (b = bo(m), b.c(), b.m(E.parentNode, E)) : b && (b.d(1), b = null), m[16] ? _ ? _.p(m, D) : (_ = wo(m), _.c(), _.m(d.parentNode, d)) : _ && (_.d(1), _ = null);
          },
          i(m) {
            C || (f0(e.$$.fragment, m), f0(p), C = true);
          },
          o(m) {
            C0(e.$$.fragment, m), C0(p), C = false;
          },
          d(m) {
            m && (P(t), P(n), P(s), P(r), P(a), P(u), P(E), P(d)), b0(e, m), F.d(), p && p.d(m), h && h.d(m), v && v.d(m), b && b.d(m), _ && _.d(m);
          }
        };
      }
      function Po(x) {
        return new Date(x * 1e3).toLocaleDateString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }
      function Y9(x) {
        const e = x.join(`
`), t = new Blob([
          e
        ], {
          type: "text/plain"
        }), n = URL.createObjectURL(t), o = document.createElement("a");
        o.href = n, o.download = "backup-codes.txt", o.click(), URL.revokeObjectURL(n);
      }
      function J9(x, e, t) {
        let n, o, l, s, r, a, u, E;
        O0(x, Ke, (o0) => t(64, n = o0)), O0(x, Pt, (o0) => t(65, o = o0)), O0(x, Xe, (o0) => t(66, l = o0)), O0(x, he, (o0) => t(67, s = o0)), O0(x, jt, (o0) => t(68, r = o0)), O0(x, Dt, (o0) => t(30, a = o0)), O0(x, wl, (o0) => t(31, u = o0)), O0(x, Tx, (o0) => t(32, E = o0));
        let d = true, C = null, B = "", A = false, F = false, p = 0, h = [], v = null, b = false, _ = false, m = false, D = null, k = false, w = false, y = null, S = [], M = false, I = false, L = null, N = "";
        N0(async () => {
          if (!V0()) {
            i0("/login");
            return;
          }
          await q();
        });
        async function q() {
          t(0, d = true), t(1, C = null);
          try {
            t(2, B = r ?? ""), t(3, A = s ?? false), t(4, F = l ?? false), F && (t(5, p = o ?? 0), t(6, h = n ?? []));
          } catch (o0) {
            t(1, C = o0.message);
          } finally {
            t(0, d = false);
          }
        }
        async function R(o0) {
          t(7, v = null);
          try {
            await aa(o0), t(6, h = h.filter((M0) => M0.id !== o0)), Ke.set(h), $t(mt());
          } catch (M0) {
            t(7, v = M0.message);
          }
        }
        async function O() {
          t(7, v = null), t(8, b = true);
          try {
            await ia(), t(6, h = []), Ke.set([]), $t(mt());
          } catch (o0) {
            t(7, v = o0.message);
          } finally {
            t(8, b = false);
          }
        }
        async function H() {
          t(11, D = null), t(10, m = true);
          try {
            await sa(), t(4, F = false), Xe.set(false), t(5, p = 0), t(6, h = []), $t(mt()), t(9, _ = false);
          } catch (o0) {
            t(11, D = o0.message);
          } finally {
            t(10, m = false);
          }
        }
        let Q = false, K = "Set PIN", G = false, j = false, W = "", J = false;
        async function a0() {
          t(23, j = true);
          try {
            await Oa(), t(22, G = false);
          } catch (o0) {
            t(24, W = o0.message);
          } finally {
            t(23, j = false);
          }
        }
        let c0 = "idle", r0 = "", s0 = "", B0 = null;
        async function le() {
          if (t(29, B0 = null), !/^\d{6}$/.test(r0)) {
            t(29, B0 = "PIN must be exactly 6 digits.");
            return;
          }
          if (r0 !== s0) {
            t(29, B0 = "PINs do not match.");
            return;
          }
          t(26, c0 = "exporting");
          try {
            const o0 = await d9(r0), M0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), R0 = `${B9}-${M0}.enc`, ct = new Blob([
              o0
            ], {
              type: "application/octet-stream"
            }), Be = URL.createObjectURL(ct), J0 = document.createElement("a");
            J0.href = Be, J0.download = R0, J0.click(), URL.revokeObjectURL(Be), t(26, c0 = "done");
          } catch (o0) {
            t(29, B0 = o0.message), t(26, c0 = "error");
          }
        }
        function X() {
          t(26, c0 = "idle"), t(27, r0 = ""), t(28, s0 = ""), t(29, B0 = null);
        }
        async function n0() {
          t(14, y = null), t(13, w = true);
          try {
            const { backup_codes: o0 } = await ra();
            t(15, S = o0), t(5, p = o0.length), Pt.set(o0.length), t(12, k = false);
          } catch (o0) {
            t(14, y = o0.message);
          } finally {
            t(13, w = false);
          }
        }
        function u0() {
          t(15, S = []);
        }
        async function h0() {
          t(18, L = null), t(17, I = true);
          try {
            await fa(), i0("/login");
          } catch (o0) {
            t(18, L = o0.message);
          } finally {
            t(17, I = false);
          }
        }
        const v0 = () => Gx(Dt, a = "light", a), z0 = () => Gx(Dt, a = "dark", a), G0 = () => t(26, c0 = "entering_pin");
        function q0() {
          r0 = this.value, t(27, r0);
        }
        function g0() {
          s0 = this.value, t(28, s0);
        }
        const T0 = () => i0("/settings/2fa-setup"), S0 = () => Y9(S), lt = () => {
          t(12, k = true);
        }, Oe = (o0) => R(o0.id), de = () => {
          t(9, _ = true);
        }, He = () => t(25, J = !J), st = () => {
          t(21, K = "Change PIN"), t(20, Q = true);
        }, rt = () => {
          t(22, G = true), t(24, W = "");
        }, _e = () => {
          t(21, K = "Set PIN"), t(20, Q = true);
        }, Z0 = () => {
          t(16, M = true), t(19, N = "");
        }, at = () => t(20, Q = false), ae = () => t(20, Q = false), I0 = () => {
          t(22, G = false), t(24, W = "");
        }, it = () => {
          t(9, _ = false), t(11, D = null);
        }, ke = () => {
          t(12, k = false), t(14, y = null);
        };
        function $0() {
          N = this.value, t(19, N);
        }
        return [
          d,
          C,
          B,
          A,
          F,
          p,
          h,
          v,
          b,
          _,
          m,
          D,
          k,
          w,
          y,
          S,
          M,
          I,
          L,
          N,
          Q,
          K,
          G,
          j,
          W,
          J,
          c0,
          r0,
          s0,
          B0,
          a,
          u,
          E,
          R,
          O,
          H,
          a0,
          le,
          X,
          n0,
          u0,
          h0,
          v0,
          z0,
          G0,
          q0,
          g0,
          T0,
          S0,
          lt,
          Oe,
          de,
          He,
          st,
          rt,
          _e,
          Z0,
          at,
          ae,
          I0,
          it,
          ke,
          $0,
          () => {
            t(16, M = false), t(18, L = null), t(19, N = "");
          }
        ];
      }
      class Q9 extends m0 {
        constructor(e) {
          super(), p0(this, e, J9, K9, F0, {}, null, [
            -1,
            -1,
            -1
          ]);
        }
      }
      function To(x, e, t) {
        const n = x.slice();
        return n[12] = e[t], n;
      }
      function W9(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A = d0(x[4]), F = [];
        for (let p = 0; p < A.length; p += 1) F[p] = So(To(x, A, p));
        return {
          c() {
            e = f("div"), t = f("div"), t.innerHTML = '<span class="material-icons success-icon svelte-6iq55z">check_circle</span> <h1 class="svelte-6iq55z">2FA enabled \u2014 save your backup codes</h1>', n = g(), o = f("p"), o.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, l = g(), s = f("div");
            for (let p = 0; p < F.length; p += 1) F[p].c();
            r = g(), a = f("div"), u = f("button"), u.innerHTML = `<span class="material-icons svelte-6iq55z">download</span>
          Download as text file`, E = g(), d = f("button"), d.textContent = "I've saved my backup codes", c(t, "class", "codes-header svelte-6iq55z"), c(o, "class", "hint warning svelte-6iq55z"), c(s, "class", "backup-grid svelte-6iq55z"), c(u, "class", "btn-ghost svelte-6iq55z"), c(d, "class", "btn-primary svelte-6iq55z"), c(a, "class", "codes-actions svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(p, h) {
            T(p, e, h), i(e, t), i(e, n), i(e, o), i(e, l), i(e, s);
            for (let v = 0; v < F.length; v += 1) F[v] && F[v].m(s, null);
            i(e, r), i(e, a), i(a, u), i(a, E), i(a, d), C || (B = [
              U(u, "click", x[8]),
              U(d, "click", x[9])
            ], C = true);
          },
          p(p, h) {
            if (h & 16) {
              A = d0(p[4]);
              let v;
              for (v = 0; v < A.length; v += 1) {
                const b = To(p, A, v);
                F[v] ? F[v].p(b, h) : (F[v] = So(b), F[v].c(), F[v].m(s, null));
              }
              for (; v < F.length; v += 1) F[v].d(1);
              F.length = A.length;
            }
          },
          d(p) {
            p && P(e), j0(F, p), C = false, l0(B);
          }
        };
      }
      function X9(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b, _, m, D, k, w, y, S = x[5] ? "Verifying\u2026" : "Enable 2FA", M, I, L, N, q, R, O, H = x[6] && Io(x);
        return {
          c() {
            e = f("div"), t = f("div"), n = f("button"), n.innerHTML = '<span class="material-icons svelte-6iq55z">arrow_back</span>', o = g(), l = f("h1"), l.textContent = "Set up authenticator app", s = g(), r = f("p"), r.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, a = g(), u = f("div"), E = f("img"), C = g(), B = f("details"), A = f("summary"), A.textContent = "Can't scan? Enter the key manually", F = g(), p = f("code"), h = z(x[1]), v = g(), b = f("form"), _ = f("label"), m = z(`Authenticator code
          `), D = f("input"), k = g(), H && H.c(), w = g(), y = f("button"), M = z(S), L = g(), N = f("button"), q = z("Cancel"), c(n, "class", "back-btn svelte-6iq55z"), c(n, "type", "button"), c(l, "class", "svelte-6iq55z"), c(t, "class", "card-header svelte-6iq55z"), c(r, "class", "hint svelte-6iq55z"), Vx(E.src, d = x[2]) || c(E, "src", d), c(E, "alt", "TOTP QR code"), c(E, "width", "200"), c(E, "height", "200"), c(E, "class", "svelte-6iq55z"), c(u, "class", "qr-wrap svelte-6iq55z"), c(A, "class", "svelte-6iq55z"), c(p, "class", "secret-key svelte-6iq55z"), c(B, "class", "manual-entry svelte-6iq55z"), c(D, "type", "text"), c(D, "inputmode", "numeric"), c(D, "pattern", "[0-9]*"), c(D, "maxlength", "6"), D.required = true, c(D, "autocomplete", "one-time-code"), c(D, "placeholder", "000000"), c(D, "class", "svelte-6iq55z"), c(_, "class", "svelte-6iq55z"), c(y, "type", "submit"), c(y, "class", "btn-primary svelte-6iq55z"), y.disabled = I = x[5] || x[3].length !== 6, c(N, "type", "button"), c(N, "class", "btn-ghost svelte-6iq55z"), N.disabled = x[5], c(b, "class", "otp-form svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(Q, K) {
            T(Q, e, K), i(e, t), i(t, n), i(t, o), i(t, l), i(e, s), i(e, r), i(e, a), i(e, u), i(u, E), i(e, C), i(e, B), i(B, A), i(B, F), i(B, p), i(p, h), i(e, v), i(e, b), i(b, _), i(_, m), i(_, D), x0(D, x[3]), i(b, k), H && H.m(b, null), i(b, w), i(b, y), i(y, M), i(b, L), i(b, N), i(N, q), R || (O = [
              U(n, "click", x[10]),
              U(D, "input", x[11]),
              U(N, "click", x[10]),
              U(b, "submit", re(x[7]))
            ], R = true);
          },
          p(Q, K) {
            K & 4 && !Vx(E.src, d = Q[2]) && c(E, "src", d), K & 2 && V(h, Q[1]), K & 8 && D.value !== Q[3] && x0(D, Q[3]), Q[6] ? H ? H.p(Q, K) : (H = Io(Q), H.c(), H.m(b, w)) : H && (H.d(1), H = null), K & 32 && S !== (S = Q[5] ? "Verifying\u2026" : "Enable 2FA") && V(M, S), K & 40 && I !== (I = Q[5] || Q[3].length !== 6) && (y.disabled = I), K & 32 && (N.disabled = Q[5]);
          },
          d(Q) {
            Q && P(e), H && H.d(), R = false, l0(O);
          }
        };
      }
      function Z9(x) {
        let e, t, n, o, l, s, r;
        return {
          c() {
            e = f("div"), t = f("p"), n = z(x[6]), o = g(), l = f("button"), l.textContent = "Back to Settings", c(t, "class", "error svelte-6iq55z"), c(l, "class", "btn-ghost svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(a, u) {
            T(a, e, u), i(e, t), i(t, n), i(e, o), i(e, l), s || (r = U(l, "click", x[10]), s = true);
          },
          p(a, u) {
            u & 64 && V(n, a[6]);
          },
          d(a) {
            a && P(e), s = false, r();
          }
        };
      }
      function $9(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Setting up\u2026", c(e, "class", "muted svelte-6iq55z");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function So(x) {
        let e, t = x[12] + "", n;
        return {
          c() {
            e = f("code"), n = z(t), c(e, "class", "backup-code svelte-6iq55z");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l & 16 && t !== (t = o[12] + "") && V(n, t);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Io(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[6]), c(e, "class", "error svelte-6iq55z");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o & 64 && V(t, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function e8(x) {
        let e, t, n, o;
        e = new ne({});
        function l(a, u) {
          if (a[0] === "loading") return $9;
          if (a[0] === "error") return Z9;
          if (a[0] === "scan") return X9;
          if (a[0] === "codes") return W9;
        }
        let s = l(x), r = s && s(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), r && r.c(), c(n, "class", "svelte-6iq55z");
          },
          m(a, u) {
            k0(e, a, u), T(a, t, u), T(a, n, u), r && r.m(n, null), o = true;
          },
          p(a, [u]) {
            s === (s = l(a)) && r ? r.p(a, u) : (r && r.d(1), r = s && s(a), r && (r.c(), r.m(n, null)));
          },
          i(a) {
            o || (f0(e.$$.fragment, a), o = true);
          },
          o(a) {
            C0(e.$$.fragment, a), o = false;
          },
          d(a) {
            a && (P(t), P(n)), b0(e, a), r && r.d();
          }
        };
      }
      function t8(x, e, t) {
        let n = "loading", o = "", l = "", s = "", r = [], a = false, u = null;
        N0(async () => {
          if (!V0()) {
            i0("/login");
            return;
          }
          try {
            const { secret: F, uri: p } = await oa();
            t(1, o = F), t(2, l = await ve.toDataURL(p, {
              width: 200,
              margin: 1
            })), t(0, n = "scan");
          } catch (F) {
            t(6, u = F.message), t(0, n = "error");
          }
        });
        async function E() {
          t(6, u = null), t(5, a = true);
          try {
            const { backup_codes: F } = await la(o, s);
            t(4, r = F), Xe.set(true), t(0, n = "codes");
          } catch (F) {
            t(6, u = F.message);
          } finally {
            t(5, a = false);
          }
        }
        function d() {
          const F = r.join(`
`), p = new Blob([
            F
          ], {
            type: "text/plain"
          }), h = URL.createObjectURL(p), v = document.createElement("a");
          v.href = h, v.download = "backup-codes.txt", v.click(), URL.revokeObjectURL(h);
        }
        function C() {
          i0("/settings");
        }
        function B() {
          i0("/settings");
        }
        function A() {
          s = this.value, t(3, s);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          u,
          E,
          d,
          C,
          B,
          A
        ];
      }
      class x8 extends m0 {
        constructor(e) {
          super(), p0(this, e, t8, e8, F0, {});
        }
      }
      var $l = {
        exports: {}
      };
      (function(x, e) {
        (function(n, o) {
          x.exports = o();
        })(typeof self < "u" ? self : dc, function() {
          return function(t) {
            var n = {};
            function o(l) {
              if (n[l]) return n[l].exports;
              var s = n[l] = {
                i: l,
                l: false,
                exports: {}
              };
              return t[l].call(s.exports, s, s.exports, o), s.l = true, s.exports;
            }
            return o.m = t, o.c = n, o.d = function(l, s, r) {
              o.o(l, s) || Object.defineProperty(l, s, {
                configurable: false,
                enumerable: true,
                get: r
              });
            }, o.n = function(l) {
              var s = l && l.__esModule ? function() {
                return l.default;
              } : function() {
                return l;
              };
              return o.d(s, "a", s), s;
            }, o.o = function(l, s) {
              return Object.prototype.hasOwnProperty.call(l, s);
            }, o.p = "", o(o.s = 3);
          }([
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = function() {
                function s(r, a) {
                  this.width = a, this.height = r.length / a, this.data = r;
                }
                return s.createEmpty = function(r, a) {
                  return new s(new Uint8ClampedArray(r * a), r);
                }, s.prototype.get = function(r, a) {
                  return r < 0 || r >= this.width || a < 0 || a >= this.height ? false : !!this.data[a * this.width + r];
                }, s.prototype.set = function(r, a, u) {
                  this.data[a * this.width + r] = u ? 1 : 0;
                }, s.prototype.setRegion = function(r, a, u, E, d) {
                  for (var C = a; C < a + E; C++) for (var B = r; B < r + u; B++) this.set(B, C, !!d);
                }, s;
              }();
              n.BitMatrix = l;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(2);
              function s(a, u) {
                return a ^ u;
              }
              n.addOrSubtractGF = s;
              var r = function() {
                function a(u, E, d) {
                  this.primitive = u, this.size = E, this.generatorBase = d, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                  for (var C = 1, B = 0; B < this.size; B++) this.expTable[B] = C, C = C * 2, C >= this.size && (C = (C ^ this.primitive) & this.size - 1);
                  for (var B = 0; B < this.size - 1; B++) this.logTable[this.expTable[B]] = B;
                  this.zero = new l.default(this, Uint8ClampedArray.from([
                    0
                  ])), this.one = new l.default(this, Uint8ClampedArray.from([
                    1
                  ]));
                }
                return a.prototype.multiply = function(u, E) {
                  return u === 0 || E === 0 ? 0 : this.expTable[(this.logTable[u] + this.logTable[E]) % (this.size - 1)];
                }, a.prototype.inverse = function(u) {
                  if (u === 0) throw new Error("Can't invert 0");
                  return this.expTable[this.size - this.logTable[u] - 1];
                }, a.prototype.buildMonomial = function(u, E) {
                  if (u < 0) throw new Error("Invalid monomial degree less than 0");
                  if (E === 0) return this.zero;
                  var d = new Uint8ClampedArray(u + 1);
                  return d[0] = E, new l.default(this, d);
                }, a.prototype.log = function(u) {
                  if (u === 0) throw new Error("Can't take log(0)");
                  return this.logTable[u];
                }, a.prototype.exp = function(u) {
                  return this.expTable[u];
                }, a;
              }();
              n.default = r;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(1), s = function() {
                function r(a, u) {
                  if (u.length === 0) throw new Error("No coefficients.");
                  this.field = a;
                  var E = u.length;
                  if (E > 1 && u[0] === 0) {
                    for (var d = 1; d < E && u[d] === 0; ) d++;
                    if (d === E) this.coefficients = a.zero.coefficients;
                    else {
                      this.coefficients = new Uint8ClampedArray(E - d);
                      for (var C = 0; C < this.coefficients.length; C++) this.coefficients[C] = u[d + C];
                    }
                  } else this.coefficients = u;
                }
                return r.prototype.degree = function() {
                  return this.coefficients.length - 1;
                }, r.prototype.isZero = function() {
                  return this.coefficients[0] === 0;
                }, r.prototype.getCoefficient = function(a) {
                  return this.coefficients[this.coefficients.length - 1 - a];
                }, r.prototype.addOrSubtract = function(a) {
                  var u;
                  if (this.isZero()) return a;
                  if (a.isZero()) return this;
                  var E = this.coefficients, d = a.coefficients;
                  E.length > d.length && (u = [
                    d,
                    E
                  ], E = u[0], d = u[1]);
                  for (var C = new Uint8ClampedArray(d.length), B = d.length - E.length, A = 0; A < B; A++) C[A] = d[A];
                  for (var A = B; A < d.length; A++) C[A] = l.addOrSubtractGF(E[A - B], d[A]);
                  return new r(this.field, C);
                }, r.prototype.multiply = function(a) {
                  if (a === 0) return this.field.zero;
                  if (a === 1) return this;
                  for (var u = this.coefficients.length, E = new Uint8ClampedArray(u), d = 0; d < u; d++) E[d] = this.field.multiply(this.coefficients[d], a);
                  return new r(this.field, E);
                }, r.prototype.multiplyPoly = function(a) {
                  if (this.isZero() || a.isZero()) return this.field.zero;
                  for (var u = this.coefficients, E = u.length, d = a.coefficients, C = d.length, B = new Uint8ClampedArray(E + C - 1), A = 0; A < E; A++) for (var F = u[A], p = 0; p < C; p++) B[A + p] = l.addOrSubtractGF(B[A + p], this.field.multiply(F, d[p]));
                  return new r(this.field, B);
                }, r.prototype.multiplyByMonomial = function(a, u) {
                  if (a < 0) throw new Error("Invalid degree less than 0");
                  if (u === 0) return this.field.zero;
                  for (var E = this.coefficients.length, d = new Uint8ClampedArray(E + a), C = 0; C < E; C++) d[C] = this.field.multiply(this.coefficients[C], u);
                  return new r(this.field, d);
                }, r.prototype.evaluateAt = function(a) {
                  var u = 0;
                  if (a === 0) return this.getCoefficient(0);
                  var E = this.coefficients.length;
                  if (a === 1) return this.coefficients.forEach(function(C) {
                    u = l.addOrSubtractGF(u, C);
                  }), u;
                  u = this.coefficients[0];
                  for (var d = 1; d < E; d++) u = l.addOrSubtractGF(this.field.multiply(a, u), this.coefficients[d]);
                  return u;
                }, r;
              }();
              n.default = s;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(4), s = o(5), r = o(11), a = o(12);
              function u(C) {
                var B = a.locate(C);
                if (!B) return null;
                for (var A = 0, F = B; A < F.length; A++) {
                  var p = F[A], h = r.extract(C, p), v = s.decode(h.matrix);
                  if (v) return {
                    binaryData: v.bytes,
                    data: v.text,
                    chunks: v.chunks,
                    version: v.version,
                    location: {
                      topRightCorner: h.mappingFunction(p.dimension, 0),
                      topLeftCorner: h.mappingFunction(0, 0),
                      bottomRightCorner: h.mappingFunction(p.dimension, p.dimension),
                      bottomLeftCorner: h.mappingFunction(0, p.dimension),
                      topRightFinderPattern: p.topRight,
                      topLeftFinderPattern: p.topLeft,
                      bottomLeftFinderPattern: p.bottomLeft,
                      bottomRightAlignmentPattern: p.alignmentPattern
                    }
                  };
                }
                return null;
              }
              var E = {
                inversionAttempts: "attemptBoth"
              };
              function d(C, B, A, F) {
                F === void 0 && (F = {});
                var p = E;
                Object.keys(p || {}).forEach(function(k) {
                  p[k] = F[k] || p[k];
                });
                var h = p.inversionAttempts === "attemptBoth" || p.inversionAttempts === "invertFirst", v = p.inversionAttempts === "onlyInvert" || p.inversionAttempts === "invertFirst", b = l.binarize(C, B, A, h), _ = b.binarized, m = b.inverted, D = u(v ? m : _);
                return !D && (p.inversionAttempts === "attemptBoth" || p.inversionAttempts === "invertFirst") && (D = u(v ? _ : m)), D;
              }
              d.default = d, n.default = d;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(0), s = 8, r = 24;
              function a(d, C, B) {
                return d < C ? C : d > B ? B : d;
              }
              var u = function() {
                function d(C, B) {
                  this.width = C, this.data = new Uint8ClampedArray(C * B);
                }
                return d.prototype.get = function(C, B) {
                  return this.data[B * this.width + C];
                }, d.prototype.set = function(C, B, A) {
                  this.data[B * this.width + C] = A;
                }, d;
              }();
              function E(d, C, B, A) {
                if (d.length !== C * B * 4) throw new Error("Malformed data passed to binarizer.");
                for (var F = new u(C, B), p = 0; p < C; p++) for (var h = 0; h < B; h++) {
                  var v = d[(h * C + p) * 4 + 0], b = d[(h * C + p) * 4 + 1], _ = d[(h * C + p) * 4 + 2];
                  F.set(p, h, 0.2126 * v + 0.7152 * b + 0.0722 * _);
                }
                for (var m = Math.ceil(C / s), D = Math.ceil(B / s), k = new u(m, D), w = 0; w < D; w++) for (var y = 0; y < m; y++) {
                  for (var S = 0, M = 1 / 0, I = 0, h = 0; h < s; h++) for (var p = 0; p < s; p++) {
                    var L = F.get(y * s + p, w * s + h);
                    S += L, M = Math.min(M, L), I = Math.max(I, L);
                  }
                  var N = S / Math.pow(s, 2);
                  if (I - M <= r && (N = M / 2, w > 0 && y > 0)) {
                    var q = (k.get(y, w - 1) + 2 * k.get(y - 1, w) + k.get(y - 1, w - 1)) / 4;
                    M < q && (N = q);
                  }
                  k.set(y, w, N);
                }
                var R = l.BitMatrix.createEmpty(C, B), O = null;
                A && (O = l.BitMatrix.createEmpty(C, B));
                for (var w = 0; w < D; w++) for (var y = 0; y < m; y++) {
                  for (var H = a(y, 2, m - 3), Q = a(w, 2, D - 3), S = 0, K = -2; K <= 2; K++) for (var G = -2; G <= 2; G++) S += k.get(H + K, Q + G);
                  for (var j = S / 25, K = 0; K < s; K++) for (var G = 0; G < s; G++) {
                    var p = y * s + K, h = w * s + G, W = F.get(p, h);
                    R.set(p, h, W <= j), A && O.set(p, h, !(W <= j));
                  }
                }
                return A ? {
                  binarized: R,
                  inverted: O
                } : {
                  binarized: R
                };
              }
              n.binarize = E;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(0), s = o(6), r = o(9), a = o(10);
              function u(_, m) {
                for (var D = _ ^ m, k = 0; D; ) k++, D &= D - 1;
                return k;
              }
              function E(_, m) {
                return m << 1 | _;
              }
              var d = [
                {
                  bits: 21522,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 0
                  }
                },
                {
                  bits: 20773,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 1
                  }
                },
                {
                  bits: 24188,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 2
                  }
                },
                {
                  bits: 23371,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 3
                  }
                },
                {
                  bits: 17913,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 4
                  }
                },
                {
                  bits: 16590,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 5
                  }
                },
                {
                  bits: 20375,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 6
                  }
                },
                {
                  bits: 19104,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 7
                  }
                },
                {
                  bits: 30660,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 0
                  }
                },
                {
                  bits: 29427,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 1
                  }
                },
                {
                  bits: 32170,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 2
                  }
                },
                {
                  bits: 30877,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 3
                  }
                },
                {
                  bits: 26159,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 4
                  }
                },
                {
                  bits: 25368,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 5
                  }
                },
                {
                  bits: 27713,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 6
                  }
                },
                {
                  bits: 26998,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 7
                  }
                },
                {
                  bits: 5769,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 0
                  }
                },
                {
                  bits: 5054,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 1
                  }
                },
                {
                  bits: 7399,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 2
                  }
                },
                {
                  bits: 6608,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 3
                  }
                },
                {
                  bits: 1890,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 4
                  }
                },
                {
                  bits: 597,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 5
                  }
                },
                {
                  bits: 3340,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 6
                  }
                },
                {
                  bits: 2107,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 7
                  }
                },
                {
                  bits: 13663,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 0
                  }
                },
                {
                  bits: 12392,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 1
                  }
                },
                {
                  bits: 16177,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 2
                  }
                },
                {
                  bits: 14854,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 3
                  }
                },
                {
                  bits: 9396,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 4
                  }
                },
                {
                  bits: 8579,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 5
                  }
                },
                {
                  bits: 11994,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 6
                  }
                },
                {
                  bits: 11245,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 7
                  }
                }
              ], C = [
                function(_) {
                  return (_.y + _.x) % 2 === 0;
                },
                function(_) {
                  return _.y % 2 === 0;
                },
                function(_) {
                  return _.x % 3 === 0;
                },
                function(_) {
                  return (_.y + _.x) % 3 === 0;
                },
                function(_) {
                  return (Math.floor(_.y / 2) + Math.floor(_.x / 3)) % 2 === 0;
                },
                function(_) {
                  return _.x * _.y % 2 + _.x * _.y % 3 === 0;
                },
                function(_) {
                  return (_.y * _.x % 2 + _.y * _.x % 3) % 2 === 0;
                },
                function(_) {
                  return ((_.y + _.x) % 2 + _.y * _.x % 3) % 2 === 0;
                }
              ];
              function B(_) {
                var m = 17 + 4 * _.versionNumber, D = l.BitMatrix.createEmpty(m, m);
                D.setRegion(0, 0, 9, 9, true), D.setRegion(m - 8, 0, 8, 9, true), D.setRegion(0, m - 8, 9, 8, true);
                for (var k = 0, w = _.alignmentPatternCenters; k < w.length; k++) for (var y = w[k], S = 0, M = _.alignmentPatternCenters; S < M.length; S++) {
                  var I = M[S];
                  y === 6 && I === 6 || y === 6 && I === m - 7 || y === m - 7 && I === 6 || D.setRegion(y - 2, I - 2, 5, 5, true);
                }
                return D.setRegion(6, 9, 1, m - 17, true), D.setRegion(9, 6, m - 17, 1, true), _.versionNumber > 6 && (D.setRegion(m - 11, 0, 3, 6, true), D.setRegion(0, m - 11, 6, 3, true)), D;
              }
              function A(_, m, D) {
                for (var k = C[D.dataMask], w = _.height, y = B(m), S = [], M = 0, I = 0, L = true, N = w - 1; N > 0; N -= 2) {
                  N === 6 && N--;
                  for (var q = 0; q < w; q++) for (var R = L ? w - 1 - q : q, O = 0; O < 2; O++) {
                    var H = N - O;
                    if (!y.get(H, R)) {
                      I++;
                      var Q = _.get(H, R);
                      k({
                        y: R,
                        x: H
                      }) && (Q = !Q), M = E(Q, M), I === 8 && (S.push(M), I = 0, M = 0);
                    }
                  }
                  L = !L;
                }
                return S;
              }
              function F(_) {
                var m = _.height, D = Math.floor((m - 17) / 4);
                if (D <= 6) return a.VERSIONS[D - 1];
                for (var k = 0, w = 5; w >= 0; w--) for (var y = m - 9; y >= m - 11; y--) k = E(_.get(y, w), k);
                for (var S = 0, y = 5; y >= 0; y--) for (var w = m - 9; w >= m - 11; w--) S = E(_.get(y, w), S);
                for (var M = 1 / 0, I, L = 0, N = a.VERSIONS; L < N.length; L++) {
                  var q = N[L];
                  if (q.infoBits === k || q.infoBits === S) return q;
                  var R = u(k, q.infoBits);
                  R < M && (I = q, M = R), R = u(S, q.infoBits), R < M && (I = q, M = R);
                }
                if (M <= 3) return I;
              }
              function p(_) {
                for (var m = 0, D = 0; D <= 8; D++) D !== 6 && (m = E(_.get(D, 8), m));
                for (var k = 7; k >= 0; k--) k !== 6 && (m = E(_.get(8, k), m));
                for (var w = _.height, y = 0, k = w - 1; k >= w - 7; k--) y = E(_.get(8, k), y);
                for (var D = w - 8; D < w; D++) y = E(_.get(D, 8), y);
                for (var S = 1 / 0, M = null, I = 0, L = d; I < L.length; I++) {
                  var N = L[I], q = N.bits, R = N.formatInfo;
                  if (q === m || q === y) return R;
                  var O = u(m, q);
                  O < S && (M = R, S = O), m !== y && (O = u(y, q), O < S && (M = R, S = O));
                }
                return S <= 3 ? M : null;
              }
              function h(_, m, D) {
                var k = m.errorCorrectionLevels[D], w = [], y = 0;
                if (k.ecBlocks.forEach(function(Q) {
                  for (var K = 0; K < Q.numBlocks; K++) w.push({
                    numDataCodewords: Q.dataCodewordsPerBlock,
                    codewords: []
                  }), y += Q.dataCodewordsPerBlock + k.ecCodewordsPerBlock;
                }), _.length < y) return null;
                _ = _.slice(0, y);
                for (var S = k.ecBlocks[0].dataCodewordsPerBlock, M = 0; M < S; M++) for (var I = 0, L = w; I < L.length; I++) {
                  var N = L[I];
                  N.codewords.push(_.shift());
                }
                if (k.ecBlocks.length > 1) for (var q = k.ecBlocks[0].numBlocks, R = k.ecBlocks[1].numBlocks, M = 0; M < R; M++) w[q + M].codewords.push(_.shift());
                for (; _.length > 0; ) for (var O = 0, H = w; O < H.length; O++) {
                  var N = H[O];
                  N.codewords.push(_.shift());
                }
                return w;
              }
              function v(_) {
                var m = F(_);
                if (!m) return null;
                var D = p(_);
                if (!D) return null;
                var k = A(_, m, D), w = h(k, m, D.errorCorrectionLevel);
                if (!w) return null;
                for (var y = w.reduce(function(O, H) {
                  return O + H.numDataCodewords;
                }, 0), S = new Uint8ClampedArray(y), M = 0, I = 0, L = w; I < L.length; I++) {
                  var N = L[I], q = r.decode(N.codewords, N.codewords.length - N.numDataCodewords);
                  if (!q) return null;
                  for (var R = 0; R < N.numDataCodewords; R++) S[M++] = q[R];
                }
                try {
                  return s.decode(S, m.versionNumber);
                } catch {
                  return null;
                }
              }
              function b(_) {
                if (_ == null) return null;
                var m = v(_);
                if (m) return m;
                for (var D = 0; D < _.width; D++) for (var k = D + 1; k < _.height; k++) _.get(D, k) !== _.get(k, D) && (_.set(D, k, !_.get(D, k)), _.set(k, D, !_.get(k, D)));
                return v(_);
              }
              n.decode = b;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(7), s = o(8), r;
              (function(F) {
                F.Numeric = "numeric", F.Alphanumeric = "alphanumeric", F.Byte = "byte", F.Kanji = "kanji", F.ECI = "eci";
              })(r = n.Mode || (n.Mode = {}));
              var a;
              (function(F) {
                F[F.Terminator = 0] = "Terminator", F[F.Numeric = 1] = "Numeric", F[F.Alphanumeric = 2] = "Alphanumeric", F[F.Byte = 4] = "Byte", F[F.Kanji = 8] = "Kanji", F[F.ECI = 7] = "ECI";
              })(a || (a = {}));
              function u(F, p) {
                for (var h = [], v = "", b = [
                  10,
                  12,
                  14
                ][p], _ = F.readBits(b); _ >= 3; ) {
                  var m = F.readBits(10);
                  if (m >= 1e3) throw new Error("Invalid numeric value above 999");
                  var D = Math.floor(m / 100), k = Math.floor(m / 10) % 10, w = m % 10;
                  h.push(48 + D, 48 + k, 48 + w), v += D.toString() + k.toString() + w.toString(), _ -= 3;
                }
                if (_ === 2) {
                  var m = F.readBits(7);
                  if (m >= 100) throw new Error("Invalid numeric value above 99");
                  var D = Math.floor(m / 10), k = m % 10;
                  h.push(48 + D, 48 + k), v += D.toString() + k.toString();
                } else if (_ === 1) {
                  var m = F.readBits(4);
                  if (m >= 10) throw new Error("Invalid numeric value above 9");
                  h.push(48 + m), v += m.toString();
                }
                return {
                  bytes: h,
                  text: v
                };
              }
              var E = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                " ",
                "$",
                "%",
                "*",
                "+",
                "-",
                ".",
                "/",
                ":"
              ];
              function d(F, p) {
                for (var h = [], v = "", b = [
                  9,
                  11,
                  13
                ][p], _ = F.readBits(b); _ >= 2; ) {
                  var m = F.readBits(11), D = Math.floor(m / 45), k = m % 45;
                  h.push(E[D].charCodeAt(0), E[k].charCodeAt(0)), v += E[D] + E[k], _ -= 2;
                }
                if (_ === 1) {
                  var D = F.readBits(6);
                  h.push(E[D].charCodeAt(0)), v += E[D];
                }
                return {
                  bytes: h,
                  text: v
                };
              }
              function C(F, p) {
                for (var h = [], v = "", b = [
                  8,
                  16,
                  16
                ][p], _ = F.readBits(b), m = 0; m < _; m++) {
                  var D = F.readBits(8);
                  h.push(D);
                }
                try {
                  v += decodeURIComponent(h.map(function(k) {
                    return "%" + ("0" + k.toString(16)).substr(-2);
                  }).join(""));
                } catch {
                }
                return {
                  bytes: h,
                  text: v
                };
              }
              function B(F, p) {
                for (var h = [], v = "", b = [
                  8,
                  10,
                  12
                ][p], _ = F.readBits(b), m = 0; m < _; m++) {
                  var D = F.readBits(13), k = Math.floor(D / 192) << 8 | D % 192;
                  k < 7936 ? k += 33088 : k += 49472, h.push(k >> 8, k & 255), v += String.fromCharCode(s.shiftJISTable[k]);
                }
                return {
                  bytes: h,
                  text: v
                };
              }
              function A(F, p) {
                for (var h, v, b, _, m = new l.BitStream(F), D = p <= 9 ? 0 : p <= 26 ? 1 : 2, k = {
                  text: "",
                  bytes: [],
                  chunks: [],
                  version: p
                }; m.available() >= 4; ) {
                  var w = m.readBits(4);
                  if (w === a.Terminator) return k;
                  if (w === a.ECI) m.readBits(1) === 0 ? k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: m.readBits(7)
                  }) : m.readBits(1) === 0 ? k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: m.readBits(14)
                  }) : m.readBits(1) === 0 ? k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: m.readBits(21)
                  }) : k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: -1
                  });
                  else if (w === a.Numeric) {
                    var y = u(m, D);
                    k.text += y.text, (h = k.bytes).push.apply(h, y.bytes), k.chunks.push({
                      type: r.Numeric,
                      text: y.text
                    });
                  } else if (w === a.Alphanumeric) {
                    var S = d(m, D);
                    k.text += S.text, (v = k.bytes).push.apply(v, S.bytes), k.chunks.push({
                      type: r.Alphanumeric,
                      text: S.text
                    });
                  } else if (w === a.Byte) {
                    var M = C(m, D);
                    k.text += M.text, (b = k.bytes).push.apply(b, M.bytes), k.chunks.push({
                      type: r.Byte,
                      bytes: M.bytes,
                      text: M.text
                    });
                  } else if (w === a.Kanji) {
                    var I = B(m, D);
                    k.text += I.text, (_ = k.bytes).push.apply(_, I.bytes), k.chunks.push({
                      type: r.Kanji,
                      bytes: I.bytes,
                      text: I.text
                    });
                  }
                }
                if (m.available() === 0 || m.readBits(m.available()) === 0) return k;
              }
              n.decode = A;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = function() {
                function s(r) {
                  this.byteOffset = 0, this.bitOffset = 0, this.bytes = r;
                }
                return s.prototype.readBits = function(r) {
                  if (r < 1 || r > 32 || r > this.available()) throw new Error("Cannot read " + r.toString() + " bits");
                  var a = 0;
                  if (this.bitOffset > 0) {
                    var u = 8 - this.bitOffset, E = r < u ? r : u, d = u - E, C = 255 >> 8 - E << d;
                    a = (this.bytes[this.byteOffset] & C) >> d, r -= E, this.bitOffset += E, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                  }
                  if (r > 0) {
                    for (; r >= 8; ) a = a << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, r -= 8;
                    if (r > 0) {
                      var d = 8 - r, C = 255 >> d << d;
                      a = a << r | (this.bytes[this.byteOffset] & C) >> d, this.bitOffset += r;
                    }
                  }
                  return a;
                }, s.prototype.available = function() {
                  return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
                }, s;
              }();
              n.BitStream = l;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              }), n.shiftJISTable = {
                32: 32,
                33: 33,
                34: 34,
                35: 35,
                36: 36,
                37: 37,
                38: 38,
                39: 39,
                40: 40,
                41: 41,
                42: 42,
                43: 43,
                44: 44,
                45: 45,
                46: 46,
                47: 47,
                48: 48,
                49: 49,
                50: 50,
                51: 51,
                52: 52,
                53: 53,
                54: 54,
                55: 55,
                56: 56,
                57: 57,
                58: 58,
                59: 59,
                60: 60,
                61: 61,
                62: 62,
                63: 63,
                64: 64,
                65: 65,
                66: 66,
                67: 67,
                68: 68,
                69: 69,
                70: 70,
                71: 71,
                72: 72,
                73: 73,
                74: 74,
                75: 75,
                76: 76,
                77: 77,
                78: 78,
                79: 79,
                80: 80,
                81: 81,
                82: 82,
                83: 83,
                84: 84,
                85: 85,
                86: 86,
                87: 87,
                88: 88,
                89: 89,
                90: 90,
                91: 91,
                92: 165,
                93: 93,
                94: 94,
                95: 95,
                96: 96,
                97: 97,
                98: 98,
                99: 99,
                100: 100,
                101: 101,
                102: 102,
                103: 103,
                104: 104,
                105: 105,
                106: 106,
                107: 107,
                108: 108,
                109: 109,
                110: 110,
                111: 111,
                112: 112,
                113: 113,
                114: 114,
                115: 115,
                116: 116,
                117: 117,
                118: 118,
                119: 119,
                120: 120,
                121: 121,
                122: 122,
                123: 123,
                124: 124,
                125: 125,
                126: 8254,
                33088: 12288,
                33089: 12289,
                33090: 12290,
                33091: 65292,
                33092: 65294,
                33093: 12539,
                33094: 65306,
                33095: 65307,
                33096: 65311,
                33097: 65281,
                33098: 12443,
                33099: 12444,
                33100: 180,
                33101: 65344,
                33102: 168,
                33103: 65342,
                33104: 65507,
                33105: 65343,
                33106: 12541,
                33107: 12542,
                33108: 12445,
                33109: 12446,
                33110: 12291,
                33111: 20189,
                33112: 12293,
                33113: 12294,
                33114: 12295,
                33115: 12540,
                33116: 8213,
                33117: 8208,
                33118: 65295,
                33119: 92,
                33120: 12316,
                33121: 8214,
                33122: 65372,
                33123: 8230,
                33124: 8229,
                33125: 8216,
                33126: 8217,
                33127: 8220,
                33128: 8221,
                33129: 65288,
                33130: 65289,
                33131: 12308,
                33132: 12309,
                33133: 65339,
                33134: 65341,
                33135: 65371,
                33136: 65373,
                33137: 12296,
                33138: 12297,
                33139: 12298,
                33140: 12299,
                33141: 12300,
                33142: 12301,
                33143: 12302,
                33144: 12303,
                33145: 12304,
                33146: 12305,
                33147: 65291,
                33148: 8722,
                33149: 177,
                33150: 215,
                33152: 247,
                33153: 65309,
                33154: 8800,
                33155: 65308,
                33156: 65310,
                33157: 8806,
                33158: 8807,
                33159: 8734,
                33160: 8756,
                33161: 9794,
                33162: 9792,
                33163: 176,
                33164: 8242,
                33165: 8243,
                33166: 8451,
                33167: 65509,
                33168: 65284,
                33169: 162,
                33170: 163,
                33171: 65285,
                33172: 65283,
                33173: 65286,
                33174: 65290,
                33175: 65312,
                33176: 167,
                33177: 9734,
                33178: 9733,
                33179: 9675,
                33180: 9679,
                33181: 9678,
                33182: 9671,
                33183: 9670,
                33184: 9633,
                33185: 9632,
                33186: 9651,
                33187: 9650,
                33188: 9661,
                33189: 9660,
                33190: 8251,
                33191: 12306,
                33192: 8594,
                33193: 8592,
                33194: 8593,
                33195: 8595,
                33196: 12307,
                33208: 8712,
                33209: 8715,
                33210: 8838,
                33211: 8839,
                33212: 8834,
                33213: 8835,
                33214: 8746,
                33215: 8745,
                33224: 8743,
                33225: 8744,
                33226: 172,
                33227: 8658,
                33228: 8660,
                33229: 8704,
                33230: 8707,
                33242: 8736,
                33243: 8869,
                33244: 8978,
                33245: 8706,
                33246: 8711,
                33247: 8801,
                33248: 8786,
                33249: 8810,
                33250: 8811,
                33251: 8730,
                33252: 8765,
                33253: 8733,
                33254: 8757,
                33255: 8747,
                33256: 8748,
                33264: 8491,
                33265: 8240,
                33266: 9839,
                33267: 9837,
                33268: 9834,
                33269: 8224,
                33270: 8225,
                33271: 182,
                33276: 9711,
                33359: 65296,
                33360: 65297,
                33361: 65298,
                33362: 65299,
                33363: 65300,
                33364: 65301,
                33365: 65302,
                33366: 65303,
                33367: 65304,
                33368: 65305,
                33376: 65313,
                33377: 65314,
                33378: 65315,
                33379: 65316,
                33380: 65317,
                33381: 65318,
                33382: 65319,
                33383: 65320,
                33384: 65321,
                33385: 65322,
                33386: 65323,
                33387: 65324,
                33388: 65325,
                33389: 65326,
                33390: 65327,
                33391: 65328,
                33392: 65329,
                33393: 65330,
                33394: 65331,
                33395: 65332,
                33396: 65333,
                33397: 65334,
                33398: 65335,
                33399: 65336,
                33400: 65337,
                33401: 65338,
                33409: 65345,
                33410: 65346,
                33411: 65347,
                33412: 65348,
                33413: 65349,
                33414: 65350,
                33415: 65351,
                33416: 65352,
                33417: 65353,
                33418: 65354,
                33419: 65355,
                33420: 65356,
                33421: 65357,
                33422: 65358,
                33423: 65359,
                33424: 65360,
                33425: 65361,
                33426: 65362,
                33427: 65363,
                33428: 65364,
                33429: 65365,
                33430: 65366,
                33431: 65367,
                33432: 65368,
                33433: 65369,
                33434: 65370,
                33439: 12353,
                33440: 12354,
                33441: 12355,
                33442: 12356,
                33443: 12357,
                33444: 12358,
                33445: 12359,
                33446: 12360,
                33447: 12361,
                33448: 12362,
                33449: 12363,
                33450: 12364,
                33451: 12365,
                33452: 12366,
                33453: 12367,
                33454: 12368,
                33455: 12369,
                33456: 12370,
                33457: 12371,
                33458: 12372,
                33459: 12373,
                33460: 12374,
                33461: 12375,
                33462: 12376,
                33463: 12377,
                33464: 12378,
                33465: 12379,
                33466: 12380,
                33467: 12381,
                33468: 12382,
                33469: 12383,
                33470: 12384,
                33471: 12385,
                33472: 12386,
                33473: 12387,
                33474: 12388,
                33475: 12389,
                33476: 12390,
                33477: 12391,
                33478: 12392,
                33479: 12393,
                33480: 12394,
                33481: 12395,
                33482: 12396,
                33483: 12397,
                33484: 12398,
                33485: 12399,
                33486: 12400,
                33487: 12401,
                33488: 12402,
                33489: 12403,
                33490: 12404,
                33491: 12405,
                33492: 12406,
                33493: 12407,
                33494: 12408,
                33495: 12409,
                33496: 12410,
                33497: 12411,
                33498: 12412,
                33499: 12413,
                33500: 12414,
                33501: 12415,
                33502: 12416,
                33503: 12417,
                33504: 12418,
                33505: 12419,
                33506: 12420,
                33507: 12421,
                33508: 12422,
                33509: 12423,
                33510: 12424,
                33511: 12425,
                33512: 12426,
                33513: 12427,
                33514: 12428,
                33515: 12429,
                33516: 12430,
                33517: 12431,
                33518: 12432,
                33519: 12433,
                33520: 12434,
                33521: 12435,
                33600: 12449,
                33601: 12450,
                33602: 12451,
                33603: 12452,
                33604: 12453,
                33605: 12454,
                33606: 12455,
                33607: 12456,
                33608: 12457,
                33609: 12458,
                33610: 12459,
                33611: 12460,
                33612: 12461,
                33613: 12462,
                33614: 12463,
                33615: 12464,
                33616: 12465,
                33617: 12466,
                33618: 12467,
                33619: 12468,
                33620: 12469,
                33621: 12470,
                33622: 12471,
                33623: 12472,
                33624: 12473,
                33625: 12474,
                33626: 12475,
                33627: 12476,
                33628: 12477,
                33629: 12478,
                33630: 12479,
                33631: 12480,
                33632: 12481,
                33633: 12482,
                33634: 12483,
                33635: 12484,
                33636: 12485,
                33637: 12486,
                33638: 12487,
                33639: 12488,
                33640: 12489,
                33641: 12490,
                33642: 12491,
                33643: 12492,
                33644: 12493,
                33645: 12494,
                33646: 12495,
                33647: 12496,
                33648: 12497,
                33649: 12498,
                33650: 12499,
                33651: 12500,
                33652: 12501,
                33653: 12502,
                33654: 12503,
                33655: 12504,
                33656: 12505,
                33657: 12506,
                33658: 12507,
                33659: 12508,
                33660: 12509,
                33661: 12510,
                33662: 12511,
                33664: 12512,
                33665: 12513,
                33666: 12514,
                33667: 12515,
                33668: 12516,
                33669: 12517,
                33670: 12518,
                33671: 12519,
                33672: 12520,
                33673: 12521,
                33674: 12522,
                33675: 12523,
                33676: 12524,
                33677: 12525,
                33678: 12526,
                33679: 12527,
                33680: 12528,
                33681: 12529,
                33682: 12530,
                33683: 12531,
                33684: 12532,
                33685: 12533,
                33686: 12534,
                33695: 913,
                33696: 914,
                33697: 915,
                33698: 916,
                33699: 917,
                33700: 918,
                33701: 919,
                33702: 920,
                33703: 921,
                33704: 922,
                33705: 923,
                33706: 924,
                33707: 925,
                33708: 926,
                33709: 927,
                33710: 928,
                33711: 929,
                33712: 931,
                33713: 932,
                33714: 933,
                33715: 934,
                33716: 935,
                33717: 936,
                33718: 937,
                33727: 945,
                33728: 946,
                33729: 947,
                33730: 948,
                33731: 949,
                33732: 950,
                33733: 951,
                33734: 952,
                33735: 953,
                33736: 954,
                33737: 955,
                33738: 956,
                33739: 957,
                33740: 958,
                33741: 959,
                33742: 960,
                33743: 961,
                33744: 963,
                33745: 964,
                33746: 965,
                33747: 966,
                33748: 967,
                33749: 968,
                33750: 969,
                33856: 1040,
                33857: 1041,
                33858: 1042,
                33859: 1043,
                33860: 1044,
                33861: 1045,
                33862: 1025,
                33863: 1046,
                33864: 1047,
                33865: 1048,
                33866: 1049,
                33867: 1050,
                33868: 1051,
                33869: 1052,
                33870: 1053,
                33871: 1054,
                33872: 1055,
                33873: 1056,
                33874: 1057,
                33875: 1058,
                33876: 1059,
                33877: 1060,
                33878: 1061,
                33879: 1062,
                33880: 1063,
                33881: 1064,
                33882: 1065,
                33883: 1066,
                33884: 1067,
                33885: 1068,
                33886: 1069,
                33887: 1070,
                33888: 1071,
                33904: 1072,
                33905: 1073,
                33906: 1074,
                33907: 1075,
                33908: 1076,
                33909: 1077,
                33910: 1105,
                33911: 1078,
                33912: 1079,
                33913: 1080,
                33914: 1081,
                33915: 1082,
                33916: 1083,
                33917: 1084,
                33918: 1085,
                33920: 1086,
                33921: 1087,
                33922: 1088,
                33923: 1089,
                33924: 1090,
                33925: 1091,
                33926: 1092,
                33927: 1093,
                33928: 1094,
                33929: 1095,
                33930: 1096,
                33931: 1097,
                33932: 1098,
                33933: 1099,
                33934: 1100,
                33935: 1101,
                33936: 1102,
                33937: 1103,
                33951: 9472,
                33952: 9474,
                33953: 9484,
                33954: 9488,
                33955: 9496,
                33956: 9492,
                33957: 9500,
                33958: 9516,
                33959: 9508,
                33960: 9524,
                33961: 9532,
                33962: 9473,
                33963: 9475,
                33964: 9487,
                33965: 9491,
                33966: 9499,
                33967: 9495,
                33968: 9507,
                33969: 9523,
                33970: 9515,
                33971: 9531,
                33972: 9547,
                33973: 9504,
                33974: 9519,
                33975: 9512,
                33976: 9527,
                33977: 9535,
                33978: 9501,
                33979: 9520,
                33980: 9509,
                33981: 9528,
                33982: 9538,
                34975: 20124,
                34976: 21782,
                34977: 23043,
                34978: 38463,
                34979: 21696,
                34980: 24859,
                34981: 25384,
                34982: 23030,
                34983: 36898,
                34984: 33909,
                34985: 33564,
                34986: 31312,
                34987: 24746,
                34988: 25569,
                34989: 28197,
                34990: 26093,
                34991: 33894,
                34992: 33446,
                34993: 39925,
                34994: 26771,
                34995: 22311,
                34996: 26017,
                34997: 25201,
                34998: 23451,
                34999: 22992,
                35e3: 34427,
                35001: 39156,
                35002: 32098,
                35003: 32190,
                35004: 39822,
                35005: 25110,
                35006: 31903,
                35007: 34999,
                35008: 23433,
                35009: 24245,
                35010: 25353,
                35011: 26263,
                35012: 26696,
                35013: 38343,
                35014: 38797,
                35015: 26447,
                35016: 20197,
                35017: 20234,
                35018: 20301,
                35019: 20381,
                35020: 20553,
                35021: 22258,
                35022: 22839,
                35023: 22996,
                35024: 23041,
                35025: 23561,
                35026: 24799,
                35027: 24847,
                35028: 24944,
                35029: 26131,
                35030: 26885,
                35031: 28858,
                35032: 30031,
                35033: 30064,
                35034: 31227,
                35035: 32173,
                35036: 32239,
                35037: 32963,
                35038: 33806,
                35039: 34915,
                35040: 35586,
                35041: 36949,
                35042: 36986,
                35043: 21307,
                35044: 20117,
                35045: 20133,
                35046: 22495,
                35047: 32946,
                35048: 37057,
                35049: 30959,
                35050: 19968,
                35051: 22769,
                35052: 28322,
                35053: 36920,
                35054: 31282,
                35055: 33576,
                35056: 33419,
                35057: 39983,
                35058: 20801,
                35059: 21360,
                35060: 21693,
                35061: 21729,
                35062: 22240,
                35063: 23035,
                35064: 24341,
                35065: 39154,
                35066: 28139,
                35067: 32996,
                35068: 34093,
                35136: 38498,
                35137: 38512,
                35138: 38560,
                35139: 38907,
                35140: 21515,
                35141: 21491,
                35142: 23431,
                35143: 28879,
                35144: 32701,
                35145: 36802,
                35146: 38632,
                35147: 21359,
                35148: 40284,
                35149: 31418,
                35150: 19985,
                35151: 30867,
                35152: 33276,
                35153: 28198,
                35154: 22040,
                35155: 21764,
                35156: 27421,
                35157: 34074,
                35158: 39995,
                35159: 23013,
                35160: 21417,
                35161: 28006,
                35162: 29916,
                35163: 38287,
                35164: 22082,
                35165: 20113,
                35166: 36939,
                35167: 38642,
                35168: 33615,
                35169: 39180,
                35170: 21473,
                35171: 21942,
                35172: 23344,
                35173: 24433,
                35174: 26144,
                35175: 26355,
                35176: 26628,
                35177: 27704,
                35178: 27891,
                35179: 27945,
                35180: 29787,
                35181: 30408,
                35182: 31310,
                35183: 38964,
                35184: 33521,
                35185: 34907,
                35186: 35424,
                35187: 37613,
                35188: 28082,
                35189: 30123,
                35190: 30410,
                35191: 39365,
                35192: 24742,
                35193: 35585,
                35194: 36234,
                35195: 38322,
                35196: 27022,
                35197: 21421,
                35198: 20870,
                35200: 22290,
                35201: 22576,
                35202: 22852,
                35203: 23476,
                35204: 24310,
                35205: 24616,
                35206: 25513,
                35207: 25588,
                35208: 27839,
                35209: 28436,
                35210: 28814,
                35211: 28948,
                35212: 29017,
                35213: 29141,
                35214: 29503,
                35215: 32257,
                35216: 33398,
                35217: 33489,
                35218: 34199,
                35219: 36960,
                35220: 37467,
                35221: 40219,
                35222: 22633,
                35223: 26044,
                35224: 27738,
                35225: 29989,
                35226: 20985,
                35227: 22830,
                35228: 22885,
                35229: 24448,
                35230: 24540,
                35231: 25276,
                35232: 26106,
                35233: 27178,
                35234: 27431,
                35235: 27572,
                35236: 29579,
                35237: 32705,
                35238: 35158,
                35239: 40236,
                35240: 40206,
                35241: 40644,
                35242: 23713,
                35243: 27798,
                35244: 33659,
                35245: 20740,
                35246: 23627,
                35247: 25014,
                35248: 33222,
                35249: 26742,
                35250: 29281,
                35251: 20057,
                35252: 20474,
                35253: 21368,
                35254: 24681,
                35255: 28201,
                35256: 31311,
                35257: 38899,
                35258: 19979,
                35259: 21270,
                35260: 20206,
                35261: 20309,
                35262: 20285,
                35263: 20385,
                35264: 20339,
                35265: 21152,
                35266: 21487,
                35267: 22025,
                35268: 22799,
                35269: 23233,
                35270: 23478,
                35271: 23521,
                35272: 31185,
                35273: 26247,
                35274: 26524,
                35275: 26550,
                35276: 27468,
                35277: 27827,
                35278: 28779,
                35279: 29634,
                35280: 31117,
                35281: 31166,
                35282: 31292,
                35283: 31623,
                35284: 33457,
                35285: 33499,
                35286: 33540,
                35287: 33655,
                35288: 33775,
                35289: 33747,
                35290: 34662,
                35291: 35506,
                35292: 22057,
                35293: 36008,
                35294: 36838,
                35295: 36942,
                35296: 38686,
                35297: 34442,
                35298: 20420,
                35299: 23784,
                35300: 25105,
                35301: 29273,
                35302: 30011,
                35303: 33253,
                35304: 33469,
                35305: 34558,
                35306: 36032,
                35307: 38597,
                35308: 39187,
                35309: 39381,
                35310: 20171,
                35311: 20250,
                35312: 35299,
                35313: 22238,
                35314: 22602,
                35315: 22730,
                35316: 24315,
                35317: 24555,
                35318: 24618,
                35319: 24724,
                35320: 24674,
                35321: 25040,
                35322: 25106,
                35323: 25296,
                35324: 25913,
                35392: 39745,
                35393: 26214,
                35394: 26800,
                35395: 28023,
                35396: 28784,
                35397: 30028,
                35398: 30342,
                35399: 32117,
                35400: 33445,
                35401: 34809,
                35402: 38283,
                35403: 38542,
                35404: 35997,
                35405: 20977,
                35406: 21182,
                35407: 22806,
                35408: 21683,
                35409: 23475,
                35410: 23830,
                35411: 24936,
                35412: 27010,
                35413: 28079,
                35414: 30861,
                35415: 33995,
                35416: 34903,
                35417: 35442,
                35418: 37799,
                35419: 39608,
                35420: 28012,
                35421: 39336,
                35422: 34521,
                35423: 22435,
                35424: 26623,
                35425: 34510,
                35426: 37390,
                35427: 21123,
                35428: 22151,
                35429: 21508,
                35430: 24275,
                35431: 25313,
                35432: 25785,
                35433: 26684,
                35434: 26680,
                35435: 27579,
                35436: 29554,
                35437: 30906,
                35438: 31339,
                35439: 35226,
                35440: 35282,
                35441: 36203,
                35442: 36611,
                35443: 37101,
                35444: 38307,
                35445: 38548,
                35446: 38761,
                35447: 23398,
                35448: 23731,
                35449: 27005,
                35450: 38989,
                35451: 38990,
                35452: 25499,
                35453: 31520,
                35454: 27179,
                35456: 27263,
                35457: 26806,
                35458: 39949,
                35459: 28511,
                35460: 21106,
                35461: 21917,
                35462: 24688,
                35463: 25324,
                35464: 27963,
                35465: 28167,
                35466: 28369,
                35467: 33883,
                35468: 35088,
                35469: 36676,
                35470: 19988,
                35471: 39993,
                35472: 21494,
                35473: 26907,
                35474: 27194,
                35475: 38788,
                35476: 26666,
                35477: 20828,
                35478: 31427,
                35479: 33970,
                35480: 37340,
                35481: 37772,
                35482: 22107,
                35483: 40232,
                35484: 26658,
                35485: 33541,
                35486: 33841,
                35487: 31909,
                35488: 21e3,
                35489: 33477,
                35490: 29926,
                35491: 20094,
                35492: 20355,
                35493: 20896,
                35494: 23506,
                35495: 21002,
                35496: 21208,
                35497: 21223,
                35498: 24059,
                35499: 21914,
                35500: 22570,
                35501: 23014,
                35502: 23436,
                35503: 23448,
                35504: 23515,
                35505: 24178,
                35506: 24185,
                35507: 24739,
                35508: 24863,
                35509: 24931,
                35510: 25022,
                35511: 25563,
                35512: 25954,
                35513: 26577,
                35514: 26707,
                35515: 26874,
                35516: 27454,
                35517: 27475,
                35518: 27735,
                35519: 28450,
                35520: 28567,
                35521: 28485,
                35522: 29872,
                35523: 29976,
                35524: 30435,
                35525: 30475,
                35526: 31487,
                35527: 31649,
                35528: 31777,
                35529: 32233,
                35530: 32566,
                35531: 32752,
                35532: 32925,
                35533: 33382,
                35534: 33694,
                35535: 35251,
                35536: 35532,
                35537: 36011,
                35538: 36996,
                35539: 37969,
                35540: 38291,
                35541: 38289,
                35542: 38306,
                35543: 38501,
                35544: 38867,
                35545: 39208,
                35546: 33304,
                35547: 20024,
                35548: 21547,
                35549: 23736,
                35550: 24012,
                35551: 29609,
                35552: 30284,
                35553: 30524,
                35554: 23721,
                35555: 32747,
                35556: 36107,
                35557: 38593,
                35558: 38929,
                35559: 38996,
                35560: 39e3,
                35561: 20225,
                35562: 20238,
                35563: 21361,
                35564: 21916,
                35565: 22120,
                35566: 22522,
                35567: 22855,
                35568: 23305,
                35569: 23492,
                35570: 23696,
                35571: 24076,
                35572: 24190,
                35573: 24524,
                35574: 25582,
                35575: 26426,
                35576: 26071,
                35577: 26082,
                35578: 26399,
                35579: 26827,
                35580: 26820,
                35648: 27231,
                35649: 24112,
                35650: 27589,
                35651: 27671,
                35652: 27773,
                35653: 30079,
                35654: 31048,
                35655: 23395,
                35656: 31232,
                35657: 32e3,
                35658: 24509,
                35659: 35215,
                35660: 35352,
                35661: 36020,
                35662: 36215,
                35663: 36556,
                35664: 36637,
                35665: 39138,
                35666: 39438,
                35667: 39740,
                35668: 20096,
                35669: 20605,
                35670: 20736,
                35671: 22931,
                35672: 23452,
                35673: 25135,
                35674: 25216,
                35675: 25836,
                35676: 27450,
                35677: 29344,
                35678: 30097,
                35679: 31047,
                35680: 32681,
                35681: 34811,
                35682: 35516,
                35683: 35696,
                35684: 25516,
                35685: 33738,
                35686: 38816,
                35687: 21513,
                35688: 21507,
                35689: 21931,
                35690: 26708,
                35691: 27224,
                35692: 35440,
                35693: 30759,
                35694: 26485,
                35695: 40653,
                35696: 21364,
                35697: 23458,
                35698: 33050,
                35699: 34384,
                35700: 36870,
                35701: 19992,
                35702: 20037,
                35703: 20167,
                35704: 20241,
                35705: 21450,
                35706: 21560,
                35707: 23470,
                35708: 24339,
                35709: 24613,
                35710: 25937,
                35712: 26429,
                35713: 27714,
                35714: 27762,
                35715: 27875,
                35716: 28792,
                35717: 29699,
                35718: 31350,
                35719: 31406,
                35720: 31496,
                35721: 32026,
                35722: 31998,
                35723: 32102,
                35724: 26087,
                35725: 29275,
                35726: 21435,
                35727: 23621,
                35728: 24040,
                35729: 25298,
                35730: 25312,
                35731: 25369,
                35732: 28192,
                35733: 34394,
                35734: 35377,
                35735: 36317,
                35736: 37624,
                35737: 28417,
                35738: 31142,
                35739: 39770,
                35740: 20136,
                35741: 20139,
                35742: 20140,
                35743: 20379,
                35744: 20384,
                35745: 20689,
                35746: 20807,
                35747: 31478,
                35748: 20849,
                35749: 20982,
                35750: 21332,
                35751: 21281,
                35752: 21375,
                35753: 21483,
                35754: 21932,
                35755: 22659,
                35756: 23777,
                35757: 24375,
                35758: 24394,
                35759: 24623,
                35760: 24656,
                35761: 24685,
                35762: 25375,
                35763: 25945,
                35764: 27211,
                35765: 27841,
                35766: 29378,
                35767: 29421,
                35768: 30703,
                35769: 33016,
                35770: 33029,
                35771: 33288,
                35772: 34126,
                35773: 37111,
                35774: 37857,
                35775: 38911,
                35776: 39255,
                35777: 39514,
                35778: 20208,
                35779: 20957,
                35780: 23597,
                35781: 26241,
                35782: 26989,
                35783: 23616,
                35784: 26354,
                35785: 26997,
                35786: 29577,
                35787: 26704,
                35788: 31873,
                35789: 20677,
                35790: 21220,
                35791: 22343,
                35792: 24062,
                35793: 37670,
                35794: 26020,
                35795: 27427,
                35796: 27453,
                35797: 29748,
                35798: 31105,
                35799: 31165,
                35800: 31563,
                35801: 32202,
                35802: 33465,
                35803: 33740,
                35804: 34943,
                35805: 35167,
                35806: 35641,
                35807: 36817,
                35808: 37329,
                35809: 21535,
                35810: 37504,
                35811: 20061,
                35812: 20534,
                35813: 21477,
                35814: 21306,
                35815: 29399,
                35816: 29590,
                35817: 30697,
                35818: 33510,
                35819: 36527,
                35820: 39366,
                35821: 39368,
                35822: 39378,
                35823: 20855,
                35824: 24858,
                35825: 34398,
                35826: 21936,
                35827: 31354,
                35828: 20598,
                35829: 23507,
                35830: 36935,
                35831: 38533,
                35832: 20018,
                35833: 27355,
                35834: 37351,
                35835: 23633,
                35836: 23624,
                35904: 25496,
                35905: 31391,
                35906: 27795,
                35907: 38772,
                35908: 36705,
                35909: 31402,
                35910: 29066,
                35911: 38536,
                35912: 31874,
                35913: 26647,
                35914: 32368,
                35915: 26705,
                35916: 37740,
                35917: 21234,
                35918: 21531,
                35919: 34219,
                35920: 35347,
                35921: 32676,
                35922: 36557,
                35923: 37089,
                35924: 21350,
                35925: 34952,
                35926: 31041,
                35927: 20418,
                35928: 20670,
                35929: 21009,
                35930: 20804,
                35931: 21843,
                35932: 22317,
                35933: 29674,
                35934: 22411,
                35935: 22865,
                35936: 24418,
                35937: 24452,
                35938: 24693,
                35939: 24950,
                35940: 24935,
                35941: 25001,
                35942: 25522,
                35943: 25658,
                35944: 25964,
                35945: 26223,
                35946: 26690,
                35947: 28179,
                35948: 30054,
                35949: 31293,
                35950: 31995,
                35951: 32076,
                35952: 32153,
                35953: 32331,
                35954: 32619,
                35955: 33550,
                35956: 33610,
                35957: 34509,
                35958: 35336,
                35959: 35427,
                35960: 35686,
                35961: 36605,
                35962: 38938,
                35963: 40335,
                35964: 33464,
                35965: 36814,
                35966: 39912,
                35968: 21127,
                35969: 25119,
                35970: 25731,
                35971: 28608,
                35972: 38553,
                35973: 26689,
                35974: 20625,
                35975: 27424,
                35976: 27770,
                35977: 28500,
                35978: 31348,
                35979: 32080,
                35980: 34880,
                35981: 35363,
                35982: 26376,
                35983: 20214,
                35984: 20537,
                35985: 20518,
                35986: 20581,
                35987: 20860,
                35988: 21048,
                35989: 21091,
                35990: 21927,
                35991: 22287,
                35992: 22533,
                35993: 23244,
                35994: 24314,
                35995: 25010,
                35996: 25080,
                35997: 25331,
                35998: 25458,
                35999: 26908,
                36e3: 27177,
                36001: 29309,
                36002: 29356,
                36003: 29486,
                36004: 30740,
                36005: 30831,
                36006: 32121,
                36007: 30476,
                36008: 32937,
                36009: 35211,
                36010: 35609,
                36011: 36066,
                36012: 36562,
                36013: 36963,
                36014: 37749,
                36015: 38522,
                36016: 38997,
                36017: 39443,
                36018: 40568,
                36019: 20803,
                36020: 21407,
                36021: 21427,
                36022: 24187,
                36023: 24358,
                36024: 28187,
                36025: 28304,
                36026: 29572,
                36027: 29694,
                36028: 32067,
                36029: 33335,
                36030: 35328,
                36031: 35578,
                36032: 38480,
                36033: 20046,
                36034: 20491,
                36035: 21476,
                36036: 21628,
                36037: 22266,
                36038: 22993,
                36039: 23396,
                36040: 24049,
                36041: 24235,
                36042: 24359,
                36043: 25144,
                36044: 25925,
                36045: 26543,
                36046: 28246,
                36047: 29392,
                36048: 31946,
                36049: 34996,
                36050: 32929,
                36051: 32993,
                36052: 33776,
                36053: 34382,
                36054: 35463,
                36055: 36328,
                36056: 37431,
                36057: 38599,
                36058: 39015,
                36059: 40723,
                36060: 20116,
                36061: 20114,
                36062: 20237,
                36063: 21320,
                36064: 21577,
                36065: 21566,
                36066: 23087,
                36067: 24460,
                36068: 24481,
                36069: 24735,
                36070: 26791,
                36071: 27278,
                36072: 29786,
                36073: 30849,
                36074: 35486,
                36075: 35492,
                36076: 35703,
                36077: 37264,
                36078: 20062,
                36079: 39881,
                36080: 20132,
                36081: 20348,
                36082: 20399,
                36083: 20505,
                36084: 20502,
                36085: 20809,
                36086: 20844,
                36087: 21151,
                36088: 21177,
                36089: 21246,
                36090: 21402,
                36091: 21475,
                36092: 21521,
                36160: 21518,
                36161: 21897,
                36162: 22353,
                36163: 22434,
                36164: 22909,
                36165: 23380,
                36166: 23389,
                36167: 23439,
                36168: 24037,
                36169: 24039,
                36170: 24055,
                36171: 24184,
                36172: 24195,
                36173: 24218,
                36174: 24247,
                36175: 24344,
                36176: 24658,
                36177: 24908,
                36178: 25239,
                36179: 25304,
                36180: 25511,
                36181: 25915,
                36182: 26114,
                36183: 26179,
                36184: 26356,
                36185: 26477,
                36186: 26657,
                36187: 26775,
                36188: 27083,
                36189: 27743,
                36190: 27946,
                36191: 28009,
                36192: 28207,
                36193: 28317,
                36194: 30002,
                36195: 30343,
                36196: 30828,
                36197: 31295,
                36198: 31968,
                36199: 32005,
                36200: 32024,
                36201: 32094,
                36202: 32177,
                36203: 32789,
                36204: 32771,
                36205: 32943,
                36206: 32945,
                36207: 33108,
                36208: 33167,
                36209: 33322,
                36210: 33618,
                36211: 34892,
                36212: 34913,
                36213: 35611,
                36214: 36002,
                36215: 36092,
                36216: 37066,
                36217: 37237,
                36218: 37489,
                36219: 30783,
                36220: 37628,
                36221: 38308,
                36222: 38477,
                36224: 38917,
                36225: 39321,
                36226: 39640,
                36227: 40251,
                36228: 21083,
                36229: 21163,
                36230: 21495,
                36231: 21512,
                36232: 22741,
                36233: 25335,
                36234: 28640,
                36235: 35946,
                36236: 36703,
                36237: 40633,
                36238: 20811,
                36239: 21051,
                36240: 21578,
                36241: 22269,
                36242: 31296,
                36243: 37239,
                36244: 40288,
                36245: 40658,
                36246: 29508,
                36247: 28425,
                36248: 33136,
                36249: 29969,
                36250: 24573,
                36251: 24794,
                36252: 39592,
                36253: 29403,
                36254: 36796,
                36255: 27492,
                36256: 38915,
                36257: 20170,
                36258: 22256,
                36259: 22372,
                36260: 22718,
                36261: 23130,
                36262: 24680,
                36263: 25031,
                36264: 26127,
                36265: 26118,
                36266: 26681,
                36267: 26801,
                36268: 28151,
                36269: 30165,
                36270: 32058,
                36271: 33390,
                36272: 39746,
                36273: 20123,
                36274: 20304,
                36275: 21449,
                36276: 21766,
                36277: 23919,
                36278: 24038,
                36279: 24046,
                36280: 26619,
                36281: 27801,
                36282: 29811,
                36283: 30722,
                36284: 35408,
                36285: 37782,
                36286: 35039,
                36287: 22352,
                36288: 24231,
                36289: 25387,
                36290: 20661,
                36291: 20652,
                36292: 20877,
                36293: 26368,
                36294: 21705,
                36295: 22622,
                36296: 22971,
                36297: 23472,
                36298: 24425,
                36299: 25165,
                36300: 25505,
                36301: 26685,
                36302: 27507,
                36303: 28168,
                36304: 28797,
                36305: 37319,
                36306: 29312,
                36307: 30741,
                36308: 30758,
                36309: 31085,
                36310: 25998,
                36311: 32048,
                36312: 33756,
                36313: 35009,
                36314: 36617,
                36315: 38555,
                36316: 21092,
                36317: 22312,
                36318: 26448,
                36319: 32618,
                36320: 36001,
                36321: 20916,
                36322: 22338,
                36323: 38442,
                36324: 22586,
                36325: 27018,
                36326: 32948,
                36327: 21682,
                36328: 23822,
                36329: 22524,
                36330: 30869,
                36331: 40442,
                36332: 20316,
                36333: 21066,
                36334: 21643,
                36335: 25662,
                36336: 26152,
                36337: 26388,
                36338: 26613,
                36339: 31364,
                36340: 31574,
                36341: 32034,
                36342: 37679,
                36343: 26716,
                36344: 39853,
                36345: 31545,
                36346: 21273,
                36347: 20874,
                36348: 21047,
                36416: 23519,
                36417: 25334,
                36418: 25774,
                36419: 25830,
                36420: 26413,
                36421: 27578,
                36422: 34217,
                36423: 38609,
                36424: 30352,
                36425: 39894,
                36426: 25420,
                36427: 37638,
                36428: 39851,
                36429: 30399,
                36430: 26194,
                36431: 19977,
                36432: 20632,
                36433: 21442,
                36434: 23665,
                36435: 24808,
                36436: 25746,
                36437: 25955,
                36438: 26719,
                36439: 29158,
                36440: 29642,
                36441: 29987,
                36442: 31639,
                36443: 32386,
                36444: 34453,
                36445: 35715,
                36446: 36059,
                36447: 37240,
                36448: 39184,
                36449: 26028,
                36450: 26283,
                36451: 27531,
                36452: 20181,
                36453: 20180,
                36454: 20282,
                36455: 20351,
                36456: 21050,
                36457: 21496,
                36458: 21490,
                36459: 21987,
                36460: 22235,
                36461: 22763,
                36462: 22987,
                36463: 22985,
                36464: 23039,
                36465: 23376,
                36466: 23629,
                36467: 24066,
                36468: 24107,
                36469: 24535,
                36470: 24605,
                36471: 25351,
                36472: 25903,
                36473: 23388,
                36474: 26031,
                36475: 26045,
                36476: 26088,
                36477: 26525,
                36478: 27490,
                36480: 27515,
                36481: 27663,
                36482: 29509,
                36483: 31049,
                36484: 31169,
                36485: 31992,
                36486: 32025,
                36487: 32043,
                36488: 32930,
                36489: 33026,
                36490: 33267,
                36491: 35222,
                36492: 35422,
                36493: 35433,
                36494: 35430,
                36495: 35468,
                36496: 35566,
                36497: 36039,
                36498: 36060,
                36499: 38604,
                36500: 39164,
                36501: 27503,
                36502: 20107,
                36503: 20284,
                36504: 20365,
                36505: 20816,
                36506: 23383,
                36507: 23546,
                36508: 24904,
                36509: 25345,
                36510: 26178,
                36511: 27425,
                36512: 28363,
                36513: 27835,
                36514: 29246,
                36515: 29885,
                36516: 30164,
                36517: 30913,
                36518: 31034,
                36519: 32780,
                36520: 32819,
                36521: 33258,
                36522: 33940,
                36523: 36766,
                36524: 27728,
                36525: 40575,
                36526: 24335,
                36527: 35672,
                36528: 40235,
                36529: 31482,
                36530: 36600,
                36531: 23437,
                36532: 38635,
                36533: 19971,
                36534: 21489,
                36535: 22519,
                36536: 22833,
                36537: 23241,
                36538: 23460,
                36539: 24713,
                36540: 28287,
                36541: 28422,
                36542: 30142,
                36543: 36074,
                36544: 23455,
                36545: 34048,
                36546: 31712,
                36547: 20594,
                36548: 26612,
                36549: 33437,
                36550: 23649,
                36551: 34122,
                36552: 32286,
                36553: 33294,
                36554: 20889,
                36555: 23556,
                36556: 25448,
                36557: 36198,
                36558: 26012,
                36559: 29038,
                36560: 31038,
                36561: 32023,
                36562: 32773,
                36563: 35613,
                36564: 36554,
                36565: 36974,
                36566: 34503,
                36567: 37034,
                36568: 20511,
                36569: 21242,
                36570: 23610,
                36571: 26451,
                36572: 28796,
                36573: 29237,
                36574: 37196,
                36575: 37320,
                36576: 37675,
                36577: 33509,
                36578: 23490,
                36579: 24369,
                36580: 24825,
                36581: 20027,
                36582: 21462,
                36583: 23432,
                36584: 25163,
                36585: 26417,
                36586: 27530,
                36587: 29417,
                36588: 29664,
                36589: 31278,
                36590: 33131,
                36591: 36259,
                36592: 37202,
                36593: 39318,
                36594: 20754,
                36595: 21463,
                36596: 21610,
                36597: 23551,
                36598: 25480,
                36599: 27193,
                36600: 32172,
                36601: 38656,
                36602: 22234,
                36603: 21454,
                36604: 21608,
                36672: 23447,
                36673: 23601,
                36674: 24030,
                36675: 20462,
                36676: 24833,
                36677: 25342,
                36678: 27954,
                36679: 31168,
                36680: 31179,
                36681: 32066,
                36682: 32333,
                36683: 32722,
                36684: 33261,
                36685: 33311,
                36686: 33936,
                36687: 34886,
                36688: 35186,
                36689: 35728,
                36690: 36468,
                36691: 36655,
                36692: 36913,
                36693: 37195,
                36694: 37228,
                36695: 38598,
                36696: 37276,
                36697: 20160,
                36698: 20303,
                36699: 20805,
                36700: 21313,
                36701: 24467,
                36702: 25102,
                36703: 26580,
                36704: 27713,
                36705: 28171,
                36706: 29539,
                36707: 32294,
                36708: 37325,
                36709: 37507,
                36710: 21460,
                36711: 22809,
                36712: 23487,
                36713: 28113,
                36714: 31069,
                36715: 32302,
                36716: 31899,
                36717: 22654,
                36718: 29087,
                36719: 20986,
                36720: 34899,
                36721: 36848,
                36722: 20426,
                36723: 23803,
                36724: 26149,
                36725: 30636,
                36726: 31459,
                36727: 33308,
                36728: 39423,
                36729: 20934,
                36730: 24490,
                36731: 26092,
                36732: 26991,
                36733: 27529,
                36734: 28147,
                36736: 28310,
                36737: 28516,
                36738: 30462,
                36739: 32020,
                36740: 24033,
                36741: 36981,
                36742: 37255,
                36743: 38918,
                36744: 20966,
                36745: 21021,
                36746: 25152,
                36747: 26257,
                36748: 26329,
                36749: 28186,
                36750: 24246,
                36751: 32210,
                36752: 32626,
                36753: 26360,
                36754: 34223,
                36755: 34295,
                36756: 35576,
                36757: 21161,
                36758: 21465,
                36759: 22899,
                36760: 24207,
                36761: 24464,
                36762: 24661,
                36763: 37604,
                36764: 38500,
                36765: 20663,
                36766: 20767,
                36767: 21213,
                36768: 21280,
                36769: 21319,
                36770: 21484,
                36771: 21736,
                36772: 21830,
                36773: 21809,
                36774: 22039,
                36775: 22888,
                36776: 22974,
                36777: 23100,
                36778: 23477,
                36779: 23558,
                36780: 23567,
                36781: 23569,
                36782: 23578,
                36783: 24196,
                36784: 24202,
                36785: 24288,
                36786: 24432,
                36787: 25215,
                36788: 25220,
                36789: 25307,
                36790: 25484,
                36791: 25463,
                36792: 26119,
                36793: 26124,
                36794: 26157,
                36795: 26230,
                36796: 26494,
                36797: 26786,
                36798: 27167,
                36799: 27189,
                36800: 27836,
                36801: 28040,
                36802: 28169,
                36803: 28248,
                36804: 28988,
                36805: 28966,
                36806: 29031,
                36807: 30151,
                36808: 30465,
                36809: 30813,
                36810: 30977,
                36811: 31077,
                36812: 31216,
                36813: 31456,
                36814: 31505,
                36815: 31911,
                36816: 32057,
                36817: 32918,
                36818: 33750,
                36819: 33931,
                36820: 34121,
                36821: 34909,
                36822: 35059,
                36823: 35359,
                36824: 35388,
                36825: 35412,
                36826: 35443,
                36827: 35937,
                36828: 36062,
                36829: 37284,
                36830: 37478,
                36831: 37758,
                36832: 37912,
                36833: 38556,
                36834: 38808,
                36835: 19978,
                36836: 19976,
                36837: 19998,
                36838: 20055,
                36839: 20887,
                36840: 21104,
                36841: 22478,
                36842: 22580,
                36843: 22732,
                36844: 23330,
                36845: 24120,
                36846: 24773,
                36847: 25854,
                36848: 26465,
                36849: 26454,
                36850: 27972,
                36851: 29366,
                36852: 30067,
                36853: 31331,
                36854: 33976,
                36855: 35698,
                36856: 37304,
                36857: 37664,
                36858: 22065,
                36859: 22516,
                36860: 39166,
                36928: 25325,
                36929: 26893,
                36930: 27542,
                36931: 29165,
                36932: 32340,
                36933: 32887,
                36934: 33394,
                36935: 35302,
                36936: 39135,
                36937: 34645,
                36938: 36785,
                36939: 23611,
                36940: 20280,
                36941: 20449,
                36942: 20405,
                36943: 21767,
                36944: 23072,
                36945: 23517,
                36946: 23529,
                36947: 24515,
                36948: 24910,
                36949: 25391,
                36950: 26032,
                36951: 26187,
                36952: 26862,
                36953: 27035,
                36954: 28024,
                36955: 28145,
                36956: 30003,
                36957: 30137,
                36958: 30495,
                36959: 31070,
                36960: 31206,
                36961: 32051,
                36962: 33251,
                36963: 33455,
                36964: 34218,
                36965: 35242,
                36966: 35386,
                36967: 36523,
                36968: 36763,
                36969: 36914,
                36970: 37341,
                36971: 38663,
                36972: 20154,
                36973: 20161,
                36974: 20995,
                36975: 22645,
                36976: 22764,
                36977: 23563,
                36978: 29978,
                36979: 23613,
                36980: 33102,
                36981: 35338,
                36982: 36805,
                36983: 38499,
                36984: 38765,
                36985: 31525,
                36986: 35535,
                36987: 38920,
                36988: 37218,
                36989: 22259,
                36990: 21416,
                36992: 36887,
                36993: 21561,
                36994: 22402,
                36995: 24101,
                36996: 25512,
                36997: 27700,
                36998: 28810,
                36999: 30561,
                37e3: 31883,
                37001: 32736,
                37002: 34928,
                37003: 36930,
                37004: 37204,
                37005: 37648,
                37006: 37656,
                37007: 38543,
                37008: 29790,
                37009: 39620,
                37010: 23815,
                37011: 23913,
                37012: 25968,
                37013: 26530,
                37014: 36264,
                37015: 38619,
                37016: 25454,
                37017: 26441,
                37018: 26905,
                37019: 33733,
                37020: 38935,
                37021: 38592,
                37022: 35070,
                37023: 28548,
                37024: 25722,
                37025: 23544,
                37026: 19990,
                37027: 28716,
                37028: 30045,
                37029: 26159,
                37030: 20932,
                37031: 21046,
                37032: 21218,
                37033: 22995,
                37034: 24449,
                37035: 24615,
                37036: 25104,
                37037: 25919,
                37038: 25972,
                37039: 26143,
                37040: 26228,
                37041: 26866,
                37042: 26646,
                37043: 27491,
                37044: 28165,
                37045: 29298,
                37046: 29983,
                37047: 30427,
                37048: 31934,
                37049: 32854,
                37050: 22768,
                37051: 35069,
                37052: 35199,
                37053: 35488,
                37054: 35475,
                37055: 35531,
                37056: 36893,
                37057: 37266,
                37058: 38738,
                37059: 38745,
                37060: 25993,
                37061: 31246,
                37062: 33030,
                37063: 38587,
                37064: 24109,
                37065: 24796,
                37066: 25114,
                37067: 26021,
                37068: 26132,
                37069: 26512,
                37070: 30707,
                37071: 31309,
                37072: 31821,
                37073: 32318,
                37074: 33034,
                37075: 36012,
                37076: 36196,
                37077: 36321,
                37078: 36447,
                37079: 30889,
                37080: 20999,
                37081: 25305,
                37082: 25509,
                37083: 25666,
                37084: 25240,
                37085: 35373,
                37086: 31363,
                37087: 31680,
                37088: 35500,
                37089: 38634,
                37090: 32118,
                37091: 33292,
                37092: 34633,
                37093: 20185,
                37094: 20808,
                37095: 21315,
                37096: 21344,
                37097: 23459,
                37098: 23554,
                37099: 23574,
                37100: 24029,
                37101: 25126,
                37102: 25159,
                37103: 25776,
                37104: 26643,
                37105: 26676,
                37106: 27849,
                37107: 27973,
                37108: 27927,
                37109: 26579,
                37110: 28508,
                37111: 29006,
                37112: 29053,
                37113: 26059,
                37114: 31359,
                37115: 31661,
                37116: 32218,
                37184: 32330,
                37185: 32680,
                37186: 33146,
                37187: 33307,
                37188: 33337,
                37189: 34214,
                37190: 35438,
                37191: 36046,
                37192: 36341,
                37193: 36984,
                37194: 36983,
                37195: 37549,
                37196: 37521,
                37197: 38275,
                37198: 39854,
                37199: 21069,
                37200: 21892,
                37201: 28472,
                37202: 28982,
                37203: 20840,
                37204: 31109,
                37205: 32341,
                37206: 33203,
                37207: 31950,
                37208: 22092,
                37209: 22609,
                37210: 23720,
                37211: 25514,
                37212: 26366,
                37213: 26365,
                37214: 26970,
                37215: 29401,
                37216: 30095,
                37217: 30094,
                37218: 30990,
                37219: 31062,
                37220: 31199,
                37221: 31895,
                37222: 32032,
                37223: 32068,
                37224: 34311,
                37225: 35380,
                37226: 38459,
                37227: 36961,
                37228: 40736,
                37229: 20711,
                37230: 21109,
                37231: 21452,
                37232: 21474,
                37233: 20489,
                37234: 21930,
                37235: 22766,
                37236: 22863,
                37237: 29245,
                37238: 23435,
                37239: 23652,
                37240: 21277,
                37241: 24803,
                37242: 24819,
                37243: 25436,
                37244: 25475,
                37245: 25407,
                37246: 25531,
                37248: 25805,
                37249: 26089,
                37250: 26361,
                37251: 24035,
                37252: 27085,
                37253: 27133,
                37254: 28437,
                37255: 29157,
                37256: 20105,
                37257: 30185,
                37258: 30456,
                37259: 31379,
                37260: 31967,
                37261: 32207,
                37262: 32156,
                37263: 32865,
                37264: 33609,
                37265: 33624,
                37266: 33900,
                37267: 33980,
                37268: 34299,
                37269: 35013,
                37270: 36208,
                37271: 36865,
                37272: 36973,
                37273: 37783,
                37274: 38684,
                37275: 39442,
                37276: 20687,
                37277: 22679,
                37278: 24974,
                37279: 33235,
                37280: 34101,
                37281: 36104,
                37282: 36896,
                37283: 20419,
                37284: 20596,
                37285: 21063,
                37286: 21363,
                37287: 24687,
                37288: 25417,
                37289: 26463,
                37290: 28204,
                37291: 36275,
                37292: 36895,
                37293: 20439,
                37294: 23646,
                37295: 36042,
                37296: 26063,
                37297: 32154,
                37298: 21330,
                37299: 34966,
                37300: 20854,
                37301: 25539,
                37302: 23384,
                37303: 23403,
                37304: 23562,
                37305: 25613,
                37306: 26449,
                37307: 36956,
                37308: 20182,
                37309: 22810,
                37310: 22826,
                37311: 27760,
                37312: 35409,
                37313: 21822,
                37314: 22549,
                37315: 22949,
                37316: 24816,
                37317: 25171,
                37318: 26561,
                37319: 33333,
                37320: 26965,
                37321: 38464,
                37322: 39364,
                37323: 39464,
                37324: 20307,
                37325: 22534,
                37326: 23550,
                37327: 32784,
                37328: 23729,
                37329: 24111,
                37330: 24453,
                37331: 24608,
                37332: 24907,
                37333: 25140,
                37334: 26367,
                37335: 27888,
                37336: 28382,
                37337: 32974,
                37338: 33151,
                37339: 33492,
                37340: 34955,
                37341: 36024,
                37342: 36864,
                37343: 36910,
                37344: 38538,
                37345: 40667,
                37346: 39899,
                37347: 20195,
                37348: 21488,
                37349: 22823,
                37350: 31532,
                37351: 37261,
                37352: 38988,
                37353: 40441,
                37354: 28381,
                37355: 28711,
                37356: 21331,
                37357: 21828,
                37358: 23429,
                37359: 25176,
                37360: 25246,
                37361: 25299,
                37362: 27810,
                37363: 28655,
                37364: 29730,
                37365: 35351,
                37366: 37944,
                37367: 28609,
                37368: 35582,
                37369: 33592,
                37370: 20967,
                37371: 34552,
                37372: 21482,
                37440: 21481,
                37441: 20294,
                37442: 36948,
                37443: 36784,
                37444: 22890,
                37445: 33073,
                37446: 24061,
                37447: 31466,
                37448: 36799,
                37449: 26842,
                37450: 35895,
                37451: 29432,
                37452: 40008,
                37453: 27197,
                37454: 35504,
                37455: 20025,
                37456: 21336,
                37457: 22022,
                37458: 22374,
                37459: 25285,
                37460: 25506,
                37461: 26086,
                37462: 27470,
                37463: 28129,
                37464: 28251,
                37465: 28845,
                37466: 30701,
                37467: 31471,
                37468: 31658,
                37469: 32187,
                37470: 32829,
                37471: 32966,
                37472: 34507,
                37473: 35477,
                37474: 37723,
                37475: 22243,
                37476: 22727,
                37477: 24382,
                37478: 26029,
                37479: 26262,
                37480: 27264,
                37481: 27573,
                37482: 30007,
                37483: 35527,
                37484: 20516,
                37485: 30693,
                37486: 22320,
                37487: 24347,
                37488: 24677,
                37489: 26234,
                37490: 27744,
                37491: 30196,
                37492: 31258,
                37493: 32622,
                37494: 33268,
                37495: 34584,
                37496: 36933,
                37497: 39347,
                37498: 31689,
                37499: 30044,
                37500: 31481,
                37501: 31569,
                37502: 33988,
                37504: 36880,
                37505: 31209,
                37506: 31378,
                37507: 33590,
                37508: 23265,
                37509: 30528,
                37510: 20013,
                37511: 20210,
                37512: 23449,
                37513: 24544,
                37514: 25277,
                37515: 26172,
                37516: 26609,
                37517: 27880,
                37518: 34411,
                37519: 34935,
                37520: 35387,
                37521: 37198,
                37522: 37619,
                37523: 39376,
                37524: 27159,
                37525: 28710,
                37526: 29482,
                37527: 33511,
                37528: 33879,
                37529: 36015,
                37530: 19969,
                37531: 20806,
                37532: 20939,
                37533: 21899,
                37534: 23541,
                37535: 24086,
                37536: 24115,
                37537: 24193,
                37538: 24340,
                37539: 24373,
                37540: 24427,
                37541: 24500,
                37542: 25074,
                37543: 25361,
                37544: 26274,
                37545: 26397,
                37546: 28526,
                37547: 29266,
                37548: 30010,
                37549: 30522,
                37550: 32884,
                37551: 33081,
                37552: 33144,
                37553: 34678,
                37554: 35519,
                37555: 35548,
                37556: 36229,
                37557: 36339,
                37558: 37530,
                37559: 38263,
                37560: 38914,
                37561: 40165,
                37562: 21189,
                37563: 25431,
                37564: 30452,
                37565: 26389,
                37566: 27784,
                37567: 29645,
                37568: 36035,
                37569: 37806,
                37570: 38515,
                37571: 27941,
                37572: 22684,
                37573: 26894,
                37574: 27084,
                37575: 36861,
                37576: 37786,
                37577: 30171,
                37578: 36890,
                37579: 22618,
                37580: 26626,
                37581: 25524,
                37582: 27131,
                37583: 20291,
                37584: 28460,
                37585: 26584,
                37586: 36795,
                37587: 34086,
                37588: 32180,
                37589: 37716,
                37590: 26943,
                37591: 28528,
                37592: 22378,
                37593: 22775,
                37594: 23340,
                37595: 32044,
                37596: 29226,
                37597: 21514,
                37598: 37347,
                37599: 40372,
                37600: 20141,
                37601: 20302,
                37602: 20572,
                37603: 20597,
                37604: 21059,
                37605: 35998,
                37606: 21576,
                37607: 22564,
                37608: 23450,
                37609: 24093,
                37610: 24213,
                37611: 24237,
                37612: 24311,
                37613: 24351,
                37614: 24716,
                37615: 25269,
                37616: 25402,
                37617: 25552,
                37618: 26799,
                37619: 27712,
                37620: 30855,
                37621: 31118,
                37622: 31243,
                37623: 32224,
                37624: 33351,
                37625: 35330,
                37626: 35558,
                37627: 36420,
                37628: 36883,
                37696: 37048,
                37697: 37165,
                37698: 37336,
                37699: 40718,
                37700: 27877,
                37701: 25688,
                37702: 25826,
                37703: 25973,
                37704: 28404,
                37705: 30340,
                37706: 31515,
                37707: 36969,
                37708: 37841,
                37709: 28346,
                37710: 21746,
                37711: 24505,
                37712: 25764,
                37713: 36685,
                37714: 36845,
                37715: 37444,
                37716: 20856,
                37717: 22635,
                37718: 22825,
                37719: 23637,
                37720: 24215,
                37721: 28155,
                37722: 32399,
                37723: 29980,
                37724: 36028,
                37725: 36578,
                37726: 39003,
                37727: 28857,
                37728: 20253,
                37729: 27583,
                37730: 28593,
                37731: 3e4,
                37732: 38651,
                37733: 20814,
                37734: 21520,
                37735: 22581,
                37736: 22615,
                37737: 22956,
                37738: 23648,
                37739: 24466,
                37740: 26007,
                37741: 26460,
                37742: 28193,
                37743: 30331,
                37744: 33759,
                37745: 36077,
                37746: 36884,
                37747: 37117,
                37748: 37709,
                37749: 30757,
                37750: 30778,
                37751: 21162,
                37752: 24230,
                37753: 22303,
                37754: 22900,
                37755: 24594,
                37756: 20498,
                37757: 20826,
                37758: 20908,
                37760: 20941,
                37761: 20992,
                37762: 21776,
                37763: 22612,
                37764: 22616,
                37765: 22871,
                37766: 23445,
                37767: 23798,
                37768: 23947,
                37769: 24764,
                37770: 25237,
                37771: 25645,
                37772: 26481,
                37773: 26691,
                37774: 26812,
                37775: 26847,
                37776: 30423,
                37777: 28120,
                37778: 28271,
                37779: 28059,
                37780: 28783,
                37781: 29128,
                37782: 24403,
                37783: 30168,
                37784: 31095,
                37785: 31561,
                37786: 31572,
                37787: 31570,
                37788: 31958,
                37789: 32113,
                37790: 21040,
                37791: 33891,
                37792: 34153,
                37793: 34276,
                37794: 35342,
                37795: 35588,
                37796: 35910,
                37797: 36367,
                37798: 36867,
                37799: 36879,
                37800: 37913,
                37801: 38518,
                37802: 38957,
                37803: 39472,
                37804: 38360,
                37805: 20685,
                37806: 21205,
                37807: 21516,
                37808: 22530,
                37809: 23566,
                37810: 24999,
                37811: 25758,
                37812: 27934,
                37813: 30643,
                37814: 31461,
                37815: 33012,
                37816: 33796,
                37817: 36947,
                37818: 37509,
                37819: 23776,
                37820: 40199,
                37821: 21311,
                37822: 24471,
                37823: 24499,
                37824: 28060,
                37825: 29305,
                37826: 30563,
                37827: 31167,
                37828: 31716,
                37829: 27602,
                37830: 29420,
                37831: 35501,
                37832: 26627,
                37833: 27233,
                37834: 20984,
                37835: 31361,
                37836: 26932,
                37837: 23626,
                37838: 40182,
                37839: 33515,
                37840: 23493,
                37841: 37193,
                37842: 28702,
                37843: 22136,
                37844: 23663,
                37845: 24775,
                37846: 25958,
                37847: 27788,
                37848: 35930,
                37849: 36929,
                37850: 38931,
                37851: 21585,
                37852: 26311,
                37853: 37389,
                37854: 22856,
                37855: 37027,
                37856: 20869,
                37857: 20045,
                37858: 20970,
                37859: 34201,
                37860: 35598,
                37861: 28760,
                37862: 25466,
                37863: 37707,
                37864: 26978,
                37865: 39348,
                37866: 32260,
                37867: 30071,
                37868: 21335,
                37869: 26976,
                37870: 36575,
                37871: 38627,
                37872: 27741,
                37873: 20108,
                37874: 23612,
                37875: 24336,
                37876: 36841,
                37877: 21250,
                37878: 36049,
                37879: 32905,
                37880: 34425,
                37881: 24319,
                37882: 26085,
                37883: 20083,
                37884: 20837,
                37952: 22914,
                37953: 23615,
                37954: 38894,
                37955: 20219,
                37956: 22922,
                37957: 24525,
                37958: 35469,
                37959: 28641,
                37960: 31152,
                37961: 31074,
                37962: 23527,
                37963: 33905,
                37964: 29483,
                37965: 29105,
                37966: 24180,
                37967: 24565,
                37968: 25467,
                37969: 25754,
                37970: 29123,
                37971: 31896,
                37972: 20035,
                37973: 24316,
                37974: 20043,
                37975: 22492,
                37976: 22178,
                37977: 24745,
                37978: 28611,
                37979: 32013,
                37980: 33021,
                37981: 33075,
                37982: 33215,
                37983: 36786,
                37984: 35223,
                37985: 34468,
                37986: 24052,
                37987: 25226,
                37988: 25773,
                37989: 35207,
                37990: 26487,
                37991: 27874,
                37992: 27966,
                37993: 29750,
                37994: 30772,
                37995: 23110,
                37996: 32629,
                37997: 33453,
                37998: 39340,
                37999: 20467,
                38e3: 24259,
                38001: 25309,
                38002: 25490,
                38003: 25943,
                38004: 26479,
                38005: 30403,
                38006: 29260,
                38007: 32972,
                38008: 32954,
                38009: 36649,
                38010: 37197,
                38011: 20493,
                38012: 22521,
                38013: 23186,
                38014: 26757,
                38016: 26995,
                38017: 29028,
                38018: 29437,
                38019: 36023,
                38020: 22770,
                38021: 36064,
                38022: 38506,
                38023: 36889,
                38024: 34687,
                38025: 31204,
                38026: 30695,
                38027: 33833,
                38028: 20271,
                38029: 21093,
                38030: 21338,
                38031: 25293,
                38032: 26575,
                38033: 27850,
                38034: 30333,
                38035: 31636,
                38036: 31893,
                38037: 33334,
                38038: 34180,
                38039: 36843,
                38040: 26333,
                38041: 28448,
                38042: 29190,
                38043: 32283,
                38044: 33707,
                38045: 39361,
                38046: 40614,
                38047: 20989,
                38048: 31665,
                38049: 30834,
                38050: 31672,
                38051: 32903,
                38052: 31560,
                38053: 27368,
                38054: 24161,
                38055: 32908,
                38056: 30033,
                38057: 30048,
                38058: 20843,
                38059: 37474,
                38060: 28300,
                38061: 30330,
                38062: 37271,
                38063: 39658,
                38064: 20240,
                38065: 32624,
                38066: 25244,
                38067: 31567,
                38068: 38309,
                38069: 40169,
                38070: 22138,
                38071: 22617,
                38072: 34532,
                38073: 38588,
                38074: 20276,
                38075: 21028,
                38076: 21322,
                38077: 21453,
                38078: 21467,
                38079: 24070,
                38080: 25644,
                38081: 26001,
                38082: 26495,
                38083: 27710,
                38084: 27726,
                38085: 29256,
                38086: 29359,
                38087: 29677,
                38088: 30036,
                38089: 32321,
                38090: 33324,
                38091: 34281,
                38092: 36009,
                38093: 31684,
                38094: 37318,
                38095: 29033,
                38096: 38930,
                38097: 39151,
                38098: 25405,
                38099: 26217,
                38100: 30058,
                38101: 30436,
                38102: 30928,
                38103: 34115,
                38104: 34542,
                38105: 21290,
                38106: 21329,
                38107: 21542,
                38108: 22915,
                38109: 24199,
                38110: 24444,
                38111: 24754,
                38112: 25161,
                38113: 25209,
                38114: 25259,
                38115: 26e3,
                38116: 27604,
                38117: 27852,
                38118: 30130,
                38119: 30382,
                38120: 30865,
                38121: 31192,
                38122: 32203,
                38123: 32631,
                38124: 32933,
                38125: 34987,
                38126: 35513,
                38127: 36027,
                38128: 36991,
                38129: 38750,
                38130: 39131,
                38131: 27147,
                38132: 31800,
                38133: 20633,
                38134: 23614,
                38135: 24494,
                38136: 26503,
                38137: 27608,
                38138: 29749,
                38139: 30473,
                38140: 32654,
                38208: 40763,
                38209: 26570,
                38210: 31255,
                38211: 21305,
                38212: 30091,
                38213: 39661,
                38214: 24422,
                38215: 33181,
                38216: 33777,
                38217: 32920,
                38218: 24380,
                38219: 24517,
                38220: 30050,
                38221: 31558,
                38222: 36924,
                38223: 26727,
                38224: 23019,
                38225: 23195,
                38226: 32016,
                38227: 30334,
                38228: 35628,
                38229: 20469,
                38230: 24426,
                38231: 27161,
                38232: 27703,
                38233: 28418,
                38234: 29922,
                38235: 31080,
                38236: 34920,
                38237: 35413,
                38238: 35961,
                38239: 24287,
                38240: 25551,
                38241: 30149,
                38242: 31186,
                38243: 33495,
                38244: 37672,
                38245: 37618,
                38246: 33948,
                38247: 34541,
                38248: 39981,
                38249: 21697,
                38250: 24428,
                38251: 25996,
                38252: 27996,
                38253: 28693,
                38254: 36007,
                38255: 36051,
                38256: 38971,
                38257: 25935,
                38258: 29942,
                38259: 19981,
                38260: 20184,
                38261: 22496,
                38262: 22827,
                38263: 23142,
                38264: 23500,
                38265: 20904,
                38266: 24067,
                38267: 24220,
                38268: 24598,
                38269: 25206,
                38270: 25975,
                38272: 26023,
                38273: 26222,
                38274: 28014,
                38275: 29238,
                38276: 31526,
                38277: 33104,
                38278: 33178,
                38279: 33433,
                38280: 35676,
                38281: 36e3,
                38282: 36070,
                38283: 36212,
                38284: 38428,
                38285: 38468,
                38286: 20398,
                38287: 25771,
                38288: 27494,
                38289: 33310,
                38290: 33889,
                38291: 34154,
                38292: 37096,
                38293: 23553,
                38294: 26963,
                38295: 39080,
                38296: 33914,
                38297: 34135,
                38298: 20239,
                38299: 21103,
                38300: 24489,
                38301: 24133,
                38302: 26381,
                38303: 31119,
                38304: 33145,
                38305: 35079,
                38306: 35206,
                38307: 28149,
                38308: 24343,
                38309: 25173,
                38310: 27832,
                38311: 20175,
                38312: 29289,
                38313: 39826,
                38314: 20998,
                38315: 21563,
                38316: 22132,
                38317: 22707,
                38318: 24996,
                38319: 25198,
                38320: 28954,
                38321: 22894,
                38322: 31881,
                38323: 31966,
                38324: 32027,
                38325: 38640,
                38326: 25991,
                38327: 32862,
                38328: 19993,
                38329: 20341,
                38330: 20853,
                38331: 22592,
                38332: 24163,
                38333: 24179,
                38334: 24330,
                38335: 26564,
                38336: 20006,
                38337: 34109,
                38338: 38281,
                38339: 38491,
                38340: 31859,
                38341: 38913,
                38342: 20731,
                38343: 22721,
                38344: 30294,
                38345: 30887,
                38346: 21029,
                38347: 30629,
                38348: 34065,
                38349: 31622,
                38350: 20559,
                38351: 22793,
                38352: 29255,
                38353: 31687,
                38354: 32232,
                38355: 36794,
                38356: 36820,
                38357: 36941,
                38358: 20415,
                38359: 21193,
                38360: 23081,
                38361: 24321,
                38362: 38829,
                38363: 20445,
                38364: 33303,
                38365: 37610,
                38366: 22275,
                38367: 25429,
                38368: 27497,
                38369: 29995,
                38370: 35036,
                38371: 36628,
                38372: 31298,
                38373: 21215,
                38374: 22675,
                38375: 24917,
                38376: 25098,
                38377: 26286,
                38378: 27597,
                38379: 31807,
                38380: 33769,
                38381: 20515,
                38382: 20472,
                38383: 21253,
                38384: 21574,
                38385: 22577,
                38386: 22857,
                38387: 23453,
                38388: 23792,
                38389: 23791,
                38390: 23849,
                38391: 24214,
                38392: 25265,
                38393: 25447,
                38394: 25918,
                38395: 26041,
                38396: 26379,
                38464: 27861,
                38465: 27873,
                38466: 28921,
                38467: 30770,
                38468: 32299,
                38469: 32990,
                38470: 33459,
                38471: 33804,
                38472: 34028,
                38473: 34562,
                38474: 35090,
                38475: 35370,
                38476: 35914,
                38477: 37030,
                38478: 37586,
                38479: 39165,
                38480: 40179,
                38481: 40300,
                38482: 20047,
                38483: 20129,
                38484: 20621,
                38485: 21078,
                38486: 22346,
                38487: 22952,
                38488: 24125,
                38489: 24536,
                38490: 24537,
                38491: 25151,
                38492: 26292,
                38493: 26395,
                38494: 26576,
                38495: 26834,
                38496: 20882,
                38497: 32033,
                38498: 32938,
                38499: 33192,
                38500: 35584,
                38501: 35980,
                38502: 36031,
                38503: 37502,
                38504: 38450,
                38505: 21536,
                38506: 38956,
                38507: 21271,
                38508: 20693,
                38509: 21340,
                38510: 22696,
                38511: 25778,
                38512: 26420,
                38513: 29287,
                38514: 30566,
                38515: 31302,
                38516: 37350,
                38517: 21187,
                38518: 27809,
                38519: 27526,
                38520: 22528,
                38521: 24140,
                38522: 22868,
                38523: 26412,
                38524: 32763,
                38525: 20961,
                38526: 30406,
                38528: 25705,
                38529: 30952,
                38530: 39764,
                38531: 40635,
                38532: 22475,
                38533: 22969,
                38534: 26151,
                38535: 26522,
                38536: 27598,
                38537: 21737,
                38538: 27097,
                38539: 24149,
                38540: 33180,
                38541: 26517,
                38542: 39850,
                38543: 26622,
                38544: 40018,
                38545: 26717,
                38546: 20134,
                38547: 20451,
                38548: 21448,
                38549: 25273,
                38550: 26411,
                38551: 27819,
                38552: 36804,
                38553: 20397,
                38554: 32365,
                38555: 40639,
                38556: 19975,
                38557: 24930,
                38558: 28288,
                38559: 28459,
                38560: 34067,
                38561: 21619,
                38562: 26410,
                38563: 39749,
                38564: 24051,
                38565: 31637,
                38566: 23724,
                38567: 23494,
                38568: 34588,
                38569: 28234,
                38570: 34001,
                38571: 31252,
                38572: 33032,
                38573: 22937,
                38574: 31885,
                38575: 27665,
                38576: 30496,
                38577: 21209,
                38578: 22818,
                38579: 28961,
                38580: 29279,
                38581: 30683,
                38582: 38695,
                38583: 40289,
                38584: 26891,
                38585: 23167,
                38586: 23064,
                38587: 20901,
                38588: 21517,
                38589: 21629,
                38590: 26126,
                38591: 30431,
                38592: 36855,
                38593: 37528,
                38594: 40180,
                38595: 23018,
                38596: 29277,
                38597: 28357,
                38598: 20813,
                38599: 26825,
                38600: 32191,
                38601: 32236,
                38602: 38754,
                38603: 40634,
                38604: 25720,
                38605: 27169,
                38606: 33538,
                38607: 22916,
                38608: 23391,
                38609: 27611,
                38610: 29467,
                38611: 30450,
                38612: 32178,
                38613: 32791,
                38614: 33945,
                38615: 20786,
                38616: 26408,
                38617: 40665,
                38618: 30446,
                38619: 26466,
                38620: 21247,
                38621: 39173,
                38622: 23588,
                38623: 25147,
                38624: 31870,
                38625: 36016,
                38626: 21839,
                38627: 24758,
                38628: 32011,
                38629: 38272,
                38630: 21249,
                38631: 20063,
                38632: 20918,
                38633: 22812,
                38634: 29242,
                38635: 32822,
                38636: 37326,
                38637: 24357,
                38638: 30690,
                38639: 21380,
                38640: 24441,
                38641: 32004,
                38642: 34220,
                38643: 35379,
                38644: 36493,
                38645: 38742,
                38646: 26611,
                38647: 34222,
                38648: 37971,
                38649: 24841,
                38650: 24840,
                38651: 27833,
                38652: 30290,
                38720: 35565,
                38721: 36664,
                38722: 21807,
                38723: 20305,
                38724: 20778,
                38725: 21191,
                38726: 21451,
                38727: 23461,
                38728: 24189,
                38729: 24736,
                38730: 24962,
                38731: 25558,
                38732: 26377,
                38733: 26586,
                38734: 28263,
                38735: 28044,
                38736: 29494,
                38737: 29495,
                38738: 30001,
                38739: 31056,
                38740: 35029,
                38741: 35480,
                38742: 36938,
                38743: 37009,
                38744: 37109,
                38745: 38596,
                38746: 34701,
                38747: 22805,
                38748: 20104,
                38749: 20313,
                38750: 19982,
                38751: 35465,
                38752: 36671,
                38753: 38928,
                38754: 20653,
                38755: 24188,
                38756: 22934,
                38757: 23481,
                38758: 24248,
                38759: 25562,
                38760: 25594,
                38761: 25793,
                38762: 26332,
                38763: 26954,
                38764: 27096,
                38765: 27915,
                38766: 28342,
                38767: 29076,
                38768: 29992,
                38769: 31407,
                38770: 32650,
                38771: 32768,
                38772: 33865,
                38773: 33993,
                38774: 35201,
                38775: 35617,
                38776: 36362,
                38777: 36965,
                38778: 38525,
                38779: 39178,
                38780: 24958,
                38781: 25233,
                38782: 27442,
                38784: 27779,
                38785: 28020,
                38786: 32716,
                38787: 32764,
                38788: 28096,
                38789: 32645,
                38790: 34746,
                38791: 35064,
                38792: 26469,
                38793: 33713,
                38794: 38972,
                38795: 38647,
                38796: 27931,
                38797: 32097,
                38798: 33853,
                38799: 37226,
                38800: 20081,
                38801: 21365,
                38802: 23888,
                38803: 27396,
                38804: 28651,
                38805: 34253,
                38806: 34349,
                38807: 35239,
                38808: 21033,
                38809: 21519,
                38810: 23653,
                38811: 26446,
                38812: 26792,
                38813: 29702,
                38814: 29827,
                38815: 30178,
                38816: 35023,
                38817: 35041,
                38818: 37324,
                38819: 38626,
                38820: 38520,
                38821: 24459,
                38822: 29575,
                38823: 31435,
                38824: 33870,
                38825: 25504,
                38826: 30053,
                38827: 21129,
                38828: 27969,
                38829: 28316,
                38830: 29705,
                38831: 30041,
                38832: 30827,
                38833: 31890,
                38834: 38534,
                38835: 31452,
                38836: 40845,
                38837: 20406,
                38838: 24942,
                38839: 26053,
                38840: 34396,
                38841: 20102,
                38842: 20142,
                38843: 20698,
                38844: 20001,
                38845: 20940,
                38846: 23534,
                38847: 26009,
                38848: 26753,
                38849: 28092,
                38850: 29471,
                38851: 30274,
                38852: 30637,
                38853: 31260,
                38854: 31975,
                38855: 33391,
                38856: 35538,
                38857: 36988,
                38858: 37327,
                38859: 38517,
                38860: 38936,
                38861: 21147,
                38862: 32209,
                38863: 20523,
                38864: 21400,
                38865: 26519,
                38866: 28107,
                38867: 29136,
                38868: 29747,
                38869: 33256,
                38870: 36650,
                38871: 38563,
                38872: 40023,
                38873: 40607,
                38874: 29792,
                38875: 22593,
                38876: 28057,
                38877: 32047,
                38878: 39006,
                38879: 20196,
                38880: 20278,
                38881: 20363,
                38882: 20919,
                38883: 21169,
                38884: 23994,
                38885: 24604,
                38886: 29618,
                38887: 31036,
                38888: 33491,
                38889: 37428,
                38890: 38583,
                38891: 38646,
                38892: 38666,
                38893: 40599,
                38894: 40802,
                38895: 26278,
                38896: 27508,
                38897: 21015,
                38898: 21155,
                38899: 28872,
                38900: 35010,
                38901: 24265,
                38902: 24651,
                38903: 24976,
                38904: 28451,
                38905: 29001,
                38906: 31806,
                38907: 32244,
                38908: 32879,
                38976: 34030,
                38977: 36899,
                38978: 37676,
                38979: 21570,
                38980: 39791,
                38981: 27347,
                38982: 28809,
                38983: 36034,
                38984: 36335,
                38985: 38706,
                38986: 21172,
                38987: 23105,
                38988: 24266,
                38989: 24324,
                38990: 26391,
                38991: 27004,
                38992: 27028,
                38993: 28010,
                38994: 28431,
                38995: 29282,
                38996: 29436,
                38997: 31725,
                38998: 32769,
                38999: 32894,
                39e3: 34635,
                39001: 37070,
                39002: 20845,
                39003: 40595,
                39004: 31108,
                39005: 32907,
                39006: 37682,
                39007: 35542,
                39008: 20525,
                39009: 21644,
                39010: 35441,
                39011: 27498,
                39012: 36036,
                39013: 33031,
                39014: 24785,
                39015: 26528,
                39016: 40434,
                39017: 20121,
                39018: 20120,
                39019: 39952,
                39020: 35435,
                39021: 34241,
                39022: 34152,
                39023: 26880,
                39024: 28286,
                39025: 30871,
                39026: 33109,
                39071: 24332,
                39072: 19984,
                39073: 19989,
                39074: 20010,
                39075: 20017,
                39076: 20022,
                39077: 20028,
                39078: 20031,
                39079: 20034,
                39080: 20054,
                39081: 20056,
                39082: 20098,
                39083: 20101,
                39084: 35947,
                39085: 20106,
                39086: 33298,
                39087: 24333,
                39088: 20110,
                39089: 20126,
                39090: 20127,
                39091: 20128,
                39092: 20130,
                39093: 20144,
                39094: 20147,
                39095: 20150,
                39096: 20174,
                39097: 20173,
                39098: 20164,
                39099: 20166,
                39100: 20162,
                39101: 20183,
                39102: 20190,
                39103: 20205,
                39104: 20191,
                39105: 20215,
                39106: 20233,
                39107: 20314,
                39108: 20272,
                39109: 20315,
                39110: 20317,
                39111: 20311,
                39112: 20295,
                39113: 20342,
                39114: 20360,
                39115: 20367,
                39116: 20376,
                39117: 20347,
                39118: 20329,
                39119: 20336,
                39120: 20369,
                39121: 20335,
                39122: 20358,
                39123: 20374,
                39124: 20760,
                39125: 20436,
                39126: 20447,
                39127: 20430,
                39128: 20440,
                39129: 20443,
                39130: 20433,
                39131: 20442,
                39132: 20432,
                39133: 20452,
                39134: 20453,
                39135: 20506,
                39136: 20520,
                39137: 20500,
                39138: 20522,
                39139: 20517,
                39140: 20485,
                39141: 20252,
                39142: 20470,
                39143: 20513,
                39144: 20521,
                39145: 20524,
                39146: 20478,
                39147: 20463,
                39148: 20497,
                39149: 20486,
                39150: 20547,
                39151: 20551,
                39152: 26371,
                39153: 20565,
                39154: 20560,
                39155: 20552,
                39156: 20570,
                39157: 20566,
                39158: 20588,
                39159: 20600,
                39160: 20608,
                39161: 20634,
                39162: 20613,
                39163: 20660,
                39164: 20658,
                39232: 20681,
                39233: 20682,
                39234: 20659,
                39235: 20674,
                39236: 20694,
                39237: 20702,
                39238: 20709,
                39239: 20717,
                39240: 20707,
                39241: 20718,
                39242: 20729,
                39243: 20725,
                39244: 20745,
                39245: 20737,
                39246: 20738,
                39247: 20758,
                39248: 20757,
                39249: 20756,
                39250: 20762,
                39251: 20769,
                39252: 20794,
                39253: 20791,
                39254: 20796,
                39255: 20795,
                39256: 20799,
                39257: 20800,
                39258: 20818,
                39259: 20812,
                39260: 20820,
                39261: 20834,
                39262: 31480,
                39263: 20841,
                39264: 20842,
                39265: 20846,
                39266: 20864,
                39267: 20866,
                39268: 22232,
                39269: 20876,
                39270: 20873,
                39271: 20879,
                39272: 20881,
                39273: 20883,
                39274: 20885,
                39275: 20886,
                39276: 20900,
                39277: 20902,
                39278: 20898,
                39279: 20905,
                39280: 20906,
                39281: 20907,
                39282: 20915,
                39283: 20913,
                39284: 20914,
                39285: 20912,
                39286: 20917,
                39287: 20925,
                39288: 20933,
                39289: 20937,
                39290: 20955,
                39291: 20960,
                39292: 34389,
                39293: 20969,
                39294: 20973,
                39296: 20976,
                39297: 20981,
                39298: 20990,
                39299: 20996,
                39300: 21003,
                39301: 21012,
                39302: 21006,
                39303: 21031,
                39304: 21034,
                39305: 21038,
                39306: 21043,
                39307: 21049,
                39308: 21071,
                39309: 21060,
                39310: 21067,
                39311: 21068,
                39312: 21086,
                39313: 21076,
                39314: 21098,
                39315: 21108,
                39316: 21097,
                39317: 21107,
                39318: 21119,
                39319: 21117,
                39320: 21133,
                39321: 21140,
                39322: 21138,
                39323: 21105,
                39324: 21128,
                39325: 21137,
                39326: 36776,
                39327: 36775,
                39328: 21164,
                39329: 21165,
                39330: 21180,
                39331: 21173,
                39332: 21185,
                39333: 21197,
                39334: 21207,
                39335: 21214,
                39336: 21219,
                39337: 21222,
                39338: 39149,
                39339: 21216,
                39340: 21235,
                39341: 21237,
                39342: 21240,
                39343: 21241,
                39344: 21254,
                39345: 21256,
                39346: 30008,
                39347: 21261,
                39348: 21264,
                39349: 21263,
                39350: 21269,
                39351: 21274,
                39352: 21283,
                39353: 21295,
                39354: 21297,
                39355: 21299,
                39356: 21304,
                39357: 21312,
                39358: 21318,
                39359: 21317,
                39360: 19991,
                39361: 21321,
                39362: 21325,
                39363: 20950,
                39364: 21342,
                39365: 21353,
                39366: 21358,
                39367: 22808,
                39368: 21371,
                39369: 21367,
                39370: 21378,
                39371: 21398,
                39372: 21408,
                39373: 21414,
                39374: 21413,
                39375: 21422,
                39376: 21424,
                39377: 21430,
                39378: 21443,
                39379: 31762,
                39380: 38617,
                39381: 21471,
                39382: 26364,
                39383: 29166,
                39384: 21486,
                39385: 21480,
                39386: 21485,
                39387: 21498,
                39388: 21505,
                39389: 21565,
                39390: 21568,
                39391: 21548,
                39392: 21549,
                39393: 21564,
                39394: 21550,
                39395: 21558,
                39396: 21545,
                39397: 21533,
                39398: 21582,
                39399: 21647,
                39400: 21621,
                39401: 21646,
                39402: 21599,
                39403: 21617,
                39404: 21623,
                39405: 21616,
                39406: 21650,
                39407: 21627,
                39408: 21632,
                39409: 21622,
                39410: 21636,
                39411: 21648,
                39412: 21638,
                39413: 21703,
                39414: 21666,
                39415: 21688,
                39416: 21669,
                39417: 21676,
                39418: 21700,
                39419: 21704,
                39420: 21672,
                39488: 21675,
                39489: 21698,
                39490: 21668,
                39491: 21694,
                39492: 21692,
                39493: 21720,
                39494: 21733,
                39495: 21734,
                39496: 21775,
                39497: 21780,
                39498: 21757,
                39499: 21742,
                39500: 21741,
                39501: 21754,
                39502: 21730,
                39503: 21817,
                39504: 21824,
                39505: 21859,
                39506: 21836,
                39507: 21806,
                39508: 21852,
                39509: 21829,
                39510: 21846,
                39511: 21847,
                39512: 21816,
                39513: 21811,
                39514: 21853,
                39515: 21913,
                39516: 21888,
                39517: 21679,
                39518: 21898,
                39519: 21919,
                39520: 21883,
                39521: 21886,
                39522: 21912,
                39523: 21918,
                39524: 21934,
                39525: 21884,
                39526: 21891,
                39527: 21929,
                39528: 21895,
                39529: 21928,
                39530: 21978,
                39531: 21957,
                39532: 21983,
                39533: 21956,
                39534: 21980,
                39535: 21988,
                39536: 21972,
                39537: 22036,
                39538: 22007,
                39539: 22038,
                39540: 22014,
                39541: 22013,
                39542: 22043,
                39543: 22009,
                39544: 22094,
                39545: 22096,
                39546: 29151,
                39547: 22068,
                39548: 22070,
                39549: 22066,
                39550: 22072,
                39552: 22123,
                39553: 22116,
                39554: 22063,
                39555: 22124,
                39556: 22122,
                39557: 22150,
                39558: 22144,
                39559: 22154,
                39560: 22176,
                39561: 22164,
                39562: 22159,
                39563: 22181,
                39564: 22190,
                39565: 22198,
                39566: 22196,
                39567: 22210,
                39568: 22204,
                39569: 22209,
                39570: 22211,
                39571: 22208,
                39572: 22216,
                39573: 22222,
                39574: 22225,
                39575: 22227,
                39576: 22231,
                39577: 22254,
                39578: 22265,
                39579: 22272,
                39580: 22271,
                39581: 22276,
                39582: 22281,
                39583: 22280,
                39584: 22283,
                39585: 22285,
                39586: 22291,
                39587: 22296,
                39588: 22294,
                39589: 21959,
                39590: 22300,
                39591: 22310,
                39592: 22327,
                39593: 22328,
                39594: 22350,
                39595: 22331,
                39596: 22336,
                39597: 22351,
                39598: 22377,
                39599: 22464,
                39600: 22408,
                39601: 22369,
                39602: 22399,
                39603: 22409,
                39604: 22419,
                39605: 22432,
                39606: 22451,
                39607: 22436,
                39608: 22442,
                39609: 22448,
                39610: 22467,
                39611: 22470,
                39612: 22484,
                39613: 22482,
                39614: 22483,
                39615: 22538,
                39616: 22486,
                39617: 22499,
                39618: 22539,
                39619: 22553,
                39620: 22557,
                39621: 22642,
                39622: 22561,
                39623: 22626,
                39624: 22603,
                39625: 22640,
                39626: 27584,
                39627: 22610,
                39628: 22589,
                39629: 22649,
                39630: 22661,
                39631: 22713,
                39632: 22687,
                39633: 22699,
                39634: 22714,
                39635: 22750,
                39636: 22715,
                39637: 22712,
                39638: 22702,
                39639: 22725,
                39640: 22739,
                39641: 22737,
                39642: 22743,
                39643: 22745,
                39644: 22744,
                39645: 22757,
                39646: 22748,
                39647: 22756,
                39648: 22751,
                39649: 22767,
                39650: 22778,
                39651: 22777,
                39652: 22779,
                39653: 22780,
                39654: 22781,
                39655: 22786,
                39656: 22794,
                39657: 22800,
                39658: 22811,
                39659: 26790,
                39660: 22821,
                39661: 22828,
                39662: 22829,
                39663: 22834,
                39664: 22840,
                39665: 22846,
                39666: 31442,
                39667: 22869,
                39668: 22864,
                39669: 22862,
                39670: 22874,
                39671: 22872,
                39672: 22882,
                39673: 22880,
                39674: 22887,
                39675: 22892,
                39676: 22889,
                39744: 22904,
                39745: 22913,
                39746: 22941,
                39747: 20318,
                39748: 20395,
                39749: 22947,
                39750: 22962,
                39751: 22982,
                39752: 23016,
                39753: 23004,
                39754: 22925,
                39755: 23001,
                39756: 23002,
                39757: 23077,
                39758: 23071,
                39759: 23057,
                39760: 23068,
                39761: 23049,
                39762: 23066,
                39763: 23104,
                39764: 23148,
                39765: 23113,
                39766: 23093,
                39767: 23094,
                39768: 23138,
                39769: 23146,
                39770: 23194,
                39771: 23228,
                39772: 23230,
                39773: 23243,
                39774: 23234,
                39775: 23229,
                39776: 23267,
                39777: 23255,
                39778: 23270,
                39779: 23273,
                39780: 23254,
                39781: 23290,
                39782: 23291,
                39783: 23308,
                39784: 23307,
                39785: 23318,
                39786: 23346,
                39787: 23248,
                39788: 23338,
                39789: 23350,
                39790: 23358,
                39791: 23363,
                39792: 23365,
                39793: 23360,
                39794: 23377,
                39795: 23381,
                39796: 23386,
                39797: 23387,
                39798: 23397,
                39799: 23401,
                39800: 23408,
                39801: 23411,
                39802: 23413,
                39803: 23416,
                39804: 25992,
                39805: 23418,
                39806: 23424,
                39808: 23427,
                39809: 23462,
                39810: 23480,
                39811: 23491,
                39812: 23495,
                39813: 23497,
                39814: 23508,
                39815: 23504,
                39816: 23524,
                39817: 23526,
                39818: 23522,
                39819: 23518,
                39820: 23525,
                39821: 23531,
                39822: 23536,
                39823: 23542,
                39824: 23539,
                39825: 23557,
                39826: 23559,
                39827: 23560,
                39828: 23565,
                39829: 23571,
                39830: 23584,
                39831: 23586,
                39832: 23592,
                39833: 23608,
                39834: 23609,
                39835: 23617,
                39836: 23622,
                39837: 23630,
                39838: 23635,
                39839: 23632,
                39840: 23631,
                39841: 23409,
                39842: 23660,
                39843: 23662,
                39844: 20066,
                39845: 23670,
                39846: 23673,
                39847: 23692,
                39848: 23697,
                39849: 23700,
                39850: 22939,
                39851: 23723,
                39852: 23739,
                39853: 23734,
                39854: 23740,
                39855: 23735,
                39856: 23749,
                39857: 23742,
                39858: 23751,
                39859: 23769,
                39860: 23785,
                39861: 23805,
                39862: 23802,
                39863: 23789,
                39864: 23948,
                39865: 23786,
                39866: 23819,
                39867: 23829,
                39868: 23831,
                39869: 23900,
                39870: 23839,
                39871: 23835,
                39872: 23825,
                39873: 23828,
                39874: 23842,
                39875: 23834,
                39876: 23833,
                39877: 23832,
                39878: 23884,
                39879: 23890,
                39880: 23886,
                39881: 23883,
                39882: 23916,
                39883: 23923,
                39884: 23926,
                39885: 23943,
                39886: 23940,
                39887: 23938,
                39888: 23970,
                39889: 23965,
                39890: 23980,
                39891: 23982,
                39892: 23997,
                39893: 23952,
                39894: 23991,
                39895: 23996,
                39896: 24009,
                39897: 24013,
                39898: 24019,
                39899: 24018,
                39900: 24022,
                39901: 24027,
                39902: 24043,
                39903: 24050,
                39904: 24053,
                39905: 24075,
                39906: 24090,
                39907: 24089,
                39908: 24081,
                39909: 24091,
                39910: 24118,
                39911: 24119,
                39912: 24132,
                39913: 24131,
                39914: 24128,
                39915: 24142,
                39916: 24151,
                39917: 24148,
                39918: 24159,
                39919: 24162,
                39920: 24164,
                39921: 24135,
                39922: 24181,
                39923: 24182,
                39924: 24186,
                39925: 40636,
                39926: 24191,
                39927: 24224,
                39928: 24257,
                39929: 24258,
                39930: 24264,
                39931: 24272,
                39932: 24271,
                4e4: 24278,
                40001: 24291,
                40002: 24285,
                40003: 24282,
                40004: 24283,
                40005: 24290,
                40006: 24289,
                40007: 24296,
                40008: 24297,
                40009: 24300,
                40010: 24305,
                40011: 24307,
                40012: 24304,
                40013: 24308,
                40014: 24312,
                40015: 24318,
                40016: 24323,
                40017: 24329,
                40018: 24413,
                40019: 24412,
                40020: 24331,
                40021: 24337,
                40022: 24342,
                40023: 24361,
                40024: 24365,
                40025: 24376,
                40026: 24385,
                40027: 24392,
                40028: 24396,
                40029: 24398,
                40030: 24367,
                40031: 24401,
                40032: 24406,
                40033: 24407,
                40034: 24409,
                40035: 24417,
                40036: 24429,
                40037: 24435,
                40038: 24439,
                40039: 24451,
                40040: 24450,
                40041: 24447,
                40042: 24458,
                40043: 24456,
                40044: 24465,
                40045: 24455,
                40046: 24478,
                40047: 24473,
                40048: 24472,
                40049: 24480,
                40050: 24488,
                40051: 24493,
                40052: 24508,
                40053: 24534,
                40054: 24571,
                40055: 24548,
                40056: 24568,
                40057: 24561,
                40058: 24541,
                40059: 24755,
                40060: 24575,
                40061: 24609,
                40062: 24672,
                40064: 24601,
                40065: 24592,
                40066: 24617,
                40067: 24590,
                40068: 24625,
                40069: 24603,
                40070: 24597,
                40071: 24619,
                40072: 24614,
                40073: 24591,
                40074: 24634,
                40075: 24666,
                40076: 24641,
                40077: 24682,
                40078: 24695,
                40079: 24671,
                40080: 24650,
                40081: 24646,
                40082: 24653,
                40083: 24675,
                40084: 24643,
                40085: 24676,
                40086: 24642,
                40087: 24684,
                40088: 24683,
                40089: 24665,
                40090: 24705,
                40091: 24717,
                40092: 24807,
                40093: 24707,
                40094: 24730,
                40095: 24708,
                40096: 24731,
                40097: 24726,
                40098: 24727,
                40099: 24722,
                40100: 24743,
                40101: 24715,
                40102: 24801,
                40103: 24760,
                40104: 24800,
                40105: 24787,
                40106: 24756,
                40107: 24560,
                40108: 24765,
                40109: 24774,
                40110: 24757,
                40111: 24792,
                40112: 24909,
                40113: 24853,
                40114: 24838,
                40115: 24822,
                40116: 24823,
                40117: 24832,
                40118: 24820,
                40119: 24826,
                40120: 24835,
                40121: 24865,
                40122: 24827,
                40123: 24817,
                40124: 24845,
                40125: 24846,
                40126: 24903,
                40127: 24894,
                40128: 24872,
                40129: 24871,
                40130: 24906,
                40131: 24895,
                40132: 24892,
                40133: 24876,
                40134: 24884,
                40135: 24893,
                40136: 24898,
                40137: 24900,
                40138: 24947,
                40139: 24951,
                40140: 24920,
                40141: 24921,
                40142: 24922,
                40143: 24939,
                40144: 24948,
                40145: 24943,
                40146: 24933,
                40147: 24945,
                40148: 24927,
                40149: 24925,
                40150: 24915,
                40151: 24949,
                40152: 24985,
                40153: 24982,
                40154: 24967,
                40155: 25004,
                40156: 24980,
                40157: 24986,
                40158: 24970,
                40159: 24977,
                40160: 25003,
                40161: 25006,
                40162: 25036,
                40163: 25034,
                40164: 25033,
                40165: 25079,
                40166: 25032,
                40167: 25027,
                40168: 25030,
                40169: 25018,
                40170: 25035,
                40171: 32633,
                40172: 25037,
                40173: 25062,
                40174: 25059,
                40175: 25078,
                40176: 25082,
                40177: 25076,
                40178: 25087,
                40179: 25085,
                40180: 25084,
                40181: 25086,
                40182: 25088,
                40183: 25096,
                40184: 25097,
                40185: 25101,
                40186: 25100,
                40187: 25108,
                40188: 25115,
                40256: 25118,
                40257: 25121,
                40258: 25130,
                40259: 25134,
                40260: 25136,
                40261: 25138,
                40262: 25139,
                40263: 25153,
                40264: 25166,
                40265: 25182,
                40266: 25187,
                40267: 25179,
                40268: 25184,
                40269: 25192,
                40270: 25212,
                40271: 25218,
                40272: 25225,
                40273: 25214,
                40274: 25234,
                40275: 25235,
                40276: 25238,
                40277: 25300,
                40278: 25219,
                40279: 25236,
                40280: 25303,
                40281: 25297,
                40282: 25275,
                40283: 25295,
                40284: 25343,
                40285: 25286,
                40286: 25812,
                40287: 25288,
                40288: 25308,
                40289: 25292,
                40290: 25290,
                40291: 25282,
                40292: 25287,
                40293: 25243,
                40294: 25289,
                40295: 25356,
                40296: 25326,
                40297: 25329,
                40298: 25383,
                40299: 25346,
                40300: 25352,
                40301: 25327,
                40302: 25333,
                40303: 25424,
                40304: 25406,
                40305: 25421,
                40306: 25628,
                40307: 25423,
                40308: 25494,
                40309: 25486,
                40310: 25472,
                40311: 25515,
                40312: 25462,
                40313: 25507,
                40314: 25487,
                40315: 25481,
                40316: 25503,
                40317: 25525,
                40318: 25451,
                40320: 25449,
                40321: 25534,
                40322: 25577,
                40323: 25536,
                40324: 25542,
                40325: 25571,
                40326: 25545,
                40327: 25554,
                40328: 25590,
                40329: 25540,
                40330: 25622,
                40331: 25652,
                40332: 25606,
                40333: 25619,
                40334: 25638,
                40335: 25654,
                40336: 25885,
                40337: 25623,
                40338: 25640,
                40339: 25615,
                40340: 25703,
                40341: 25711,
                40342: 25718,
                40343: 25678,
                40344: 25898,
                40345: 25749,
                40346: 25747,
                40347: 25765,
                40348: 25769,
                40349: 25736,
                40350: 25788,
                40351: 25818,
                40352: 25810,
                40353: 25797,
                40354: 25799,
                40355: 25787,
                40356: 25816,
                40357: 25794,
                40358: 25841,
                40359: 25831,
                40360: 33289,
                40361: 25824,
                40362: 25825,
                40363: 25260,
                40364: 25827,
                40365: 25839,
                40366: 25900,
                40367: 25846,
                40368: 25844,
                40369: 25842,
                40370: 25850,
                40371: 25856,
                40372: 25853,
                40373: 25880,
                40374: 25884,
                40375: 25861,
                40376: 25892,
                40377: 25891,
                40378: 25899,
                40379: 25908,
                40380: 25909,
                40381: 25911,
                40382: 25910,
                40383: 25912,
                40384: 30027,
                40385: 25928,
                40386: 25942,
                40387: 25941,
                40388: 25933,
                40389: 25944,
                40390: 25950,
                40391: 25949,
                40392: 25970,
                40393: 25976,
                40394: 25986,
                40395: 25987,
                40396: 35722,
                40397: 26011,
                40398: 26015,
                40399: 26027,
                40400: 26039,
                40401: 26051,
                40402: 26054,
                40403: 26049,
                40404: 26052,
                40405: 26060,
                40406: 26066,
                40407: 26075,
                40408: 26073,
                40409: 26080,
                40410: 26081,
                40411: 26097,
                40412: 26482,
                40413: 26122,
                40414: 26115,
                40415: 26107,
                40416: 26483,
                40417: 26165,
                40418: 26166,
                40419: 26164,
                40420: 26140,
                40421: 26191,
                40422: 26180,
                40423: 26185,
                40424: 26177,
                40425: 26206,
                40426: 26205,
                40427: 26212,
                40428: 26215,
                40429: 26216,
                40430: 26207,
                40431: 26210,
                40432: 26224,
                40433: 26243,
                40434: 26248,
                40435: 26254,
                40436: 26249,
                40437: 26244,
                40438: 26264,
                40439: 26269,
                40440: 26305,
                40441: 26297,
                40442: 26313,
                40443: 26302,
                40444: 26300,
                40512: 26308,
                40513: 26296,
                40514: 26326,
                40515: 26330,
                40516: 26336,
                40517: 26175,
                40518: 26342,
                40519: 26345,
                40520: 26352,
                40521: 26357,
                40522: 26359,
                40523: 26383,
                40524: 26390,
                40525: 26398,
                40526: 26406,
                40527: 26407,
                40528: 38712,
                40529: 26414,
                40530: 26431,
                40531: 26422,
                40532: 26433,
                40533: 26424,
                40534: 26423,
                40535: 26438,
                40536: 26462,
                40537: 26464,
                40538: 26457,
                40539: 26467,
                40540: 26468,
                40541: 26505,
                40542: 26480,
                40543: 26537,
                40544: 26492,
                40545: 26474,
                40546: 26508,
                40547: 26507,
                40548: 26534,
                40549: 26529,
                40550: 26501,
                40551: 26551,
                40552: 26607,
                40553: 26548,
                40554: 26604,
                40555: 26547,
                40556: 26601,
                40557: 26552,
                40558: 26596,
                40559: 26590,
                40560: 26589,
                40561: 26594,
                40562: 26606,
                40563: 26553,
                40564: 26574,
                40565: 26566,
                40566: 26599,
                40567: 27292,
                40568: 26654,
                40569: 26694,
                40570: 26665,
                40571: 26688,
                40572: 26701,
                40573: 26674,
                40574: 26702,
                40576: 26803,
                40577: 26667,
                40578: 26713,
                40579: 26723,
                40580: 26743,
                40581: 26751,
                40582: 26783,
                40583: 26767,
                40584: 26797,
                40585: 26772,
                40586: 26781,
                40587: 26779,
                40588: 26755,
                40589: 27310,
                40590: 26809,
                40591: 26740,
                40592: 26805,
                40593: 26784,
                40594: 26810,
                40595: 26895,
                40596: 26765,
                40597: 26750,
                40598: 26881,
                40599: 26826,
                40600: 26888,
                40601: 26840,
                40602: 26914,
                40603: 26918,
                40604: 26849,
                40605: 26892,
                40606: 26829,
                40607: 26836,
                40608: 26855,
                40609: 26837,
                40610: 26934,
                40611: 26898,
                40612: 26884,
                40613: 26839,
                40614: 26851,
                40615: 26917,
                40616: 26873,
                40617: 26848,
                40618: 26863,
                40619: 26920,
                40620: 26922,
                40621: 26906,
                40622: 26915,
                40623: 26913,
                40624: 26822,
                40625: 27001,
                40626: 26999,
                40627: 26972,
                40628: 27e3,
                40629: 26987,
                40630: 26964,
                40631: 27006,
                40632: 26990,
                40633: 26937,
                40634: 26996,
                40635: 26941,
                40636: 26969,
                40637: 26928,
                40638: 26977,
                40639: 26974,
                40640: 26973,
                40641: 27009,
                40642: 26986,
                40643: 27058,
                40644: 27054,
                40645: 27088,
                40646: 27071,
                40647: 27073,
                40648: 27091,
                40649: 27070,
                40650: 27086,
                40651: 23528,
                40652: 27082,
                40653: 27101,
                40654: 27067,
                40655: 27075,
                40656: 27047,
                40657: 27182,
                40658: 27025,
                40659: 27040,
                40660: 27036,
                40661: 27029,
                40662: 27060,
                40663: 27102,
                40664: 27112,
                40665: 27138,
                40666: 27163,
                40667: 27135,
                40668: 27402,
                40669: 27129,
                40670: 27122,
                40671: 27111,
                40672: 27141,
                40673: 27057,
                40674: 27166,
                40675: 27117,
                40676: 27156,
                40677: 27115,
                40678: 27146,
                40679: 27154,
                40680: 27329,
                40681: 27171,
                40682: 27155,
                40683: 27204,
                40684: 27148,
                40685: 27250,
                40686: 27190,
                40687: 27256,
                40688: 27207,
                40689: 27234,
                40690: 27225,
                40691: 27238,
                40692: 27208,
                40693: 27192,
                40694: 27170,
                40695: 27280,
                40696: 27277,
                40697: 27296,
                40698: 27268,
                40699: 27298,
                40700: 27299,
                40768: 27287,
                40769: 34327,
                40770: 27323,
                40771: 27331,
                40772: 27330,
                40773: 27320,
                40774: 27315,
                40775: 27308,
                40776: 27358,
                40777: 27345,
                40778: 27359,
                40779: 27306,
                40780: 27354,
                40781: 27370,
                40782: 27387,
                40783: 27397,
                40784: 34326,
                40785: 27386,
                40786: 27410,
                40787: 27414,
                40788: 39729,
                40789: 27423,
                40790: 27448,
                40791: 27447,
                40792: 30428,
                40793: 27449,
                40794: 39150,
                40795: 27463,
                40796: 27459,
                40797: 27465,
                40798: 27472,
                40799: 27481,
                40800: 27476,
                40801: 27483,
                40802: 27487,
                40803: 27489,
                40804: 27512,
                40805: 27513,
                40806: 27519,
                40807: 27520,
                40808: 27524,
                40809: 27523,
                40810: 27533,
                40811: 27544,
                40812: 27541,
                40813: 27550,
                40814: 27556,
                40815: 27562,
                40816: 27563,
                40817: 27567,
                40818: 27570,
                40819: 27569,
                40820: 27571,
                40821: 27575,
                40822: 27580,
                40823: 27590,
                40824: 27595,
                40825: 27603,
                40826: 27615,
                40827: 27628,
                40828: 27627,
                40829: 27635,
                40830: 27631,
                40832: 40638,
                40833: 27656,
                40834: 27667,
                40835: 27668,
                40836: 27675,
                40837: 27684,
                40838: 27683,
                40839: 27742,
                40840: 27733,
                40841: 27746,
                40842: 27754,
                40843: 27778,
                40844: 27789,
                40845: 27802,
                40846: 27777,
                40847: 27803,
                40848: 27774,
                40849: 27752,
                40850: 27763,
                40851: 27794,
                40852: 27792,
                40853: 27844,
                40854: 27889,
                40855: 27859,
                40856: 27837,
                40857: 27863,
                40858: 27845,
                40859: 27869,
                40860: 27822,
                40861: 27825,
                40862: 27838,
                40863: 27834,
                40864: 27867,
                40865: 27887,
                40866: 27865,
                40867: 27882,
                40868: 27935,
                40869: 34893,
                40870: 27958,
                40871: 27947,
                40872: 27965,
                40873: 27960,
                40874: 27929,
                40875: 27957,
                40876: 27955,
                40877: 27922,
                40878: 27916,
                40879: 28003,
                40880: 28051,
                40881: 28004,
                40882: 27994,
                40883: 28025,
                40884: 27993,
                40885: 28046,
                40886: 28053,
                40887: 28644,
                40888: 28037,
                40889: 28153,
                40890: 28181,
                40891: 28170,
                40892: 28085,
                40893: 28103,
                40894: 28134,
                40895: 28088,
                40896: 28102,
                40897: 28140,
                40898: 28126,
                40899: 28108,
                40900: 28136,
                40901: 28114,
                40902: 28101,
                40903: 28154,
                40904: 28121,
                40905: 28132,
                40906: 28117,
                40907: 28138,
                40908: 28142,
                40909: 28205,
                40910: 28270,
                40911: 28206,
                40912: 28185,
                40913: 28274,
                40914: 28255,
                40915: 28222,
                40916: 28195,
                40917: 28267,
                40918: 28203,
                40919: 28278,
                40920: 28237,
                40921: 28191,
                40922: 28227,
                40923: 28218,
                40924: 28238,
                40925: 28196,
                40926: 28415,
                40927: 28189,
                40928: 28216,
                40929: 28290,
                40930: 28330,
                40931: 28312,
                40932: 28361,
                40933: 28343,
                40934: 28371,
                40935: 28349,
                40936: 28335,
                40937: 28356,
                40938: 28338,
                40939: 28372,
                40940: 28373,
                40941: 28303,
                40942: 28325,
                40943: 28354,
                40944: 28319,
                40945: 28481,
                40946: 28433,
                40947: 28748,
                40948: 28396,
                40949: 28408,
                40950: 28414,
                40951: 28479,
                40952: 28402,
                40953: 28465,
                40954: 28399,
                40955: 28466,
                40956: 28364,
                161: 65377,
                162: 65378,
                163: 65379,
                164: 65380,
                165: 65381,
                166: 65382,
                167: 65383,
                168: 65384,
                169: 65385,
                170: 65386,
                171: 65387,
                172: 65388,
                173: 65389,
                174: 65390,
                175: 65391,
                176: 65392,
                177: 65393,
                178: 65394,
                179: 65395,
                180: 65396,
                181: 65397,
                182: 65398,
                183: 65399,
                184: 65400,
                185: 65401,
                186: 65402,
                187: 65403,
                188: 65404,
                189: 65405,
                190: 65406,
                191: 65407,
                192: 65408,
                193: 65409,
                194: 65410,
                195: 65411,
                196: 65412,
                197: 65413,
                198: 65414,
                199: 65415,
                200: 65416,
                201: 65417,
                202: 65418,
                203: 65419,
                204: 65420,
                205: 65421,
                206: 65422,
                207: 65423,
                208: 65424,
                209: 65425,
                210: 65426,
                211: 65427,
                212: 65428,
                213: 65429,
                214: 65430,
                215: 65431,
                216: 65432,
                217: 65433,
                218: 65434,
                219: 65435,
                220: 65436,
                221: 65437,
                222: 65438,
                223: 65439,
                57408: 28478,
                57409: 28435,
                57410: 28407,
                57411: 28550,
                57412: 28538,
                57413: 28536,
                57414: 28545,
                57415: 28544,
                57416: 28527,
                57417: 28507,
                57418: 28659,
                57419: 28525,
                57420: 28546,
                57421: 28540,
                57422: 28504,
                57423: 28558,
                57424: 28561,
                57425: 28610,
                57426: 28518,
                57427: 28595,
                57428: 28579,
                57429: 28577,
                57430: 28580,
                57431: 28601,
                57432: 28614,
                57433: 28586,
                57434: 28639,
                57435: 28629,
                57436: 28652,
                57437: 28628,
                57438: 28632,
                57439: 28657,
                57440: 28654,
                57441: 28635,
                57442: 28681,
                57443: 28683,
                57444: 28666,
                57445: 28689,
                57446: 28673,
                57447: 28687,
                57448: 28670,
                57449: 28699,
                57450: 28698,
                57451: 28532,
                57452: 28701,
                57453: 28696,
                57454: 28703,
                57455: 28720,
                57456: 28734,
                57457: 28722,
                57458: 28753,
                57459: 28771,
                57460: 28825,
                57461: 28818,
                57462: 28847,
                57463: 28913,
                57464: 28844,
                57465: 28856,
                57466: 28851,
                57467: 28846,
                57468: 28895,
                57469: 28875,
                57470: 28893,
                57472: 28889,
                57473: 28937,
                57474: 28925,
                57475: 28956,
                57476: 28953,
                57477: 29029,
                57478: 29013,
                57479: 29064,
                57480: 29030,
                57481: 29026,
                57482: 29004,
                57483: 29014,
                57484: 29036,
                57485: 29071,
                57486: 29179,
                57487: 29060,
                57488: 29077,
                57489: 29096,
                57490: 29100,
                57491: 29143,
                57492: 29113,
                57493: 29118,
                57494: 29138,
                57495: 29129,
                57496: 29140,
                57497: 29134,
                57498: 29152,
                57499: 29164,
                57500: 29159,
                57501: 29173,
                57502: 29180,
                57503: 29177,
                57504: 29183,
                57505: 29197,
                57506: 29200,
                57507: 29211,
                57508: 29224,
                57509: 29229,
                57510: 29228,
                57511: 29232,
                57512: 29234,
                57513: 29243,
                57514: 29244,
                57515: 29247,
                57516: 29248,
                57517: 29254,
                57518: 29259,
                57519: 29272,
                57520: 29300,
                57521: 29310,
                57522: 29314,
                57523: 29313,
                57524: 29319,
                57525: 29330,
                57526: 29334,
                57527: 29346,
                57528: 29351,
                57529: 29369,
                57530: 29362,
                57531: 29379,
                57532: 29382,
                57533: 29380,
                57534: 29390,
                57535: 29394,
                57536: 29410,
                57537: 29408,
                57538: 29409,
                57539: 29433,
                57540: 29431,
                57541: 20495,
                57542: 29463,
                57543: 29450,
                57544: 29468,
                57545: 29462,
                57546: 29469,
                57547: 29492,
                57548: 29487,
                57549: 29481,
                57550: 29477,
                57551: 29502,
                57552: 29518,
                57553: 29519,
                57554: 40664,
                57555: 29527,
                57556: 29546,
                57557: 29544,
                57558: 29552,
                57559: 29560,
                57560: 29557,
                57561: 29563,
                57562: 29562,
                57563: 29640,
                57564: 29619,
                57565: 29646,
                57566: 29627,
                57567: 29632,
                57568: 29669,
                57569: 29678,
                57570: 29662,
                57571: 29858,
                57572: 29701,
                57573: 29807,
                57574: 29733,
                57575: 29688,
                57576: 29746,
                57577: 29754,
                57578: 29781,
                57579: 29759,
                57580: 29791,
                57581: 29785,
                57582: 29761,
                57583: 29788,
                57584: 29801,
                57585: 29808,
                57586: 29795,
                57587: 29802,
                57588: 29814,
                57589: 29822,
                57590: 29835,
                57591: 29854,
                57592: 29863,
                57593: 29898,
                57594: 29903,
                57595: 29908,
                57596: 29681,
                57664: 29920,
                57665: 29923,
                57666: 29927,
                57667: 29929,
                57668: 29934,
                57669: 29938,
                57670: 29936,
                57671: 29937,
                57672: 29944,
                57673: 29943,
                57674: 29956,
                57675: 29955,
                57676: 29957,
                57677: 29964,
                57678: 29966,
                57679: 29965,
                57680: 29973,
                57681: 29971,
                57682: 29982,
                57683: 29990,
                57684: 29996,
                57685: 30012,
                57686: 30020,
                57687: 30029,
                57688: 30026,
                57689: 30025,
                57690: 30043,
                57691: 30022,
                57692: 30042,
                57693: 30057,
                57694: 30052,
                57695: 30055,
                57696: 30059,
                57697: 30061,
                57698: 30072,
                57699: 30070,
                57700: 30086,
                57701: 30087,
                57702: 30068,
                57703: 30090,
                57704: 30089,
                57705: 30082,
                57706: 30100,
                57707: 30106,
                57708: 30109,
                57709: 30117,
                57710: 30115,
                57711: 30146,
                57712: 30131,
                57713: 30147,
                57714: 30133,
                57715: 30141,
                57716: 30136,
                57717: 30140,
                57718: 30129,
                57719: 30157,
                57720: 30154,
                57721: 30162,
                57722: 30169,
                57723: 30179,
                57724: 30174,
                57725: 30206,
                57726: 30207,
                57728: 30204,
                57729: 30209,
                57730: 30192,
                57731: 30202,
                57732: 30194,
                57733: 30195,
                57734: 30219,
                57735: 30221,
                57736: 30217,
                57737: 30239,
                57738: 30247,
                57739: 30240,
                57740: 30241,
                57741: 30242,
                57742: 30244,
                57743: 30260,
                57744: 30256,
                57745: 30267,
                57746: 30279,
                57747: 30280,
                57748: 30278,
                57749: 30300,
                57750: 30296,
                57751: 30305,
                57752: 30306,
                57753: 30312,
                57754: 30313,
                57755: 30314,
                57756: 30311,
                57757: 30316,
                57758: 30320,
                57759: 30322,
                57760: 30326,
                57761: 30328,
                57762: 30332,
                57763: 30336,
                57764: 30339,
                57765: 30344,
                57766: 30347,
                57767: 30350,
                57768: 30358,
                57769: 30355,
                57770: 30361,
                57771: 30362,
                57772: 30384,
                57773: 30388,
                57774: 30392,
                57775: 30393,
                57776: 30394,
                57777: 30402,
                57778: 30413,
                57779: 30422,
                57780: 30418,
                57781: 30430,
                57782: 30433,
                57783: 30437,
                57784: 30439,
                57785: 30442,
                57786: 34351,
                57787: 30459,
                57788: 30472,
                57789: 30471,
                57790: 30468,
                57791: 30505,
                57792: 30500,
                57793: 30494,
                57794: 30501,
                57795: 30502,
                57796: 30491,
                57797: 30519,
                57798: 30520,
                57799: 30535,
                57800: 30554,
                57801: 30568,
                57802: 30571,
                57803: 30555,
                57804: 30565,
                57805: 30591,
                57806: 30590,
                57807: 30585,
                57808: 30606,
                57809: 30603,
                57810: 30609,
                57811: 30624,
                57812: 30622,
                57813: 30640,
                57814: 30646,
                57815: 30649,
                57816: 30655,
                57817: 30652,
                57818: 30653,
                57819: 30651,
                57820: 30663,
                57821: 30669,
                57822: 30679,
                57823: 30682,
                57824: 30684,
                57825: 30691,
                57826: 30702,
                57827: 30716,
                57828: 30732,
                57829: 30738,
                57830: 31014,
                57831: 30752,
                57832: 31018,
                57833: 30789,
                57834: 30862,
                57835: 30836,
                57836: 30854,
                57837: 30844,
                57838: 30874,
                57839: 30860,
                57840: 30883,
                57841: 30901,
                57842: 30890,
                57843: 30895,
                57844: 30929,
                57845: 30918,
                57846: 30923,
                57847: 30932,
                57848: 30910,
                57849: 30908,
                57850: 30917,
                57851: 30922,
                57852: 30956,
                57920: 30951,
                57921: 30938,
                57922: 30973,
                57923: 30964,
                57924: 30983,
                57925: 30994,
                57926: 30993,
                57927: 31001,
                57928: 31020,
                57929: 31019,
                57930: 31040,
                57931: 31072,
                57932: 31063,
                57933: 31071,
                57934: 31066,
                57935: 31061,
                57936: 31059,
                57937: 31098,
                57938: 31103,
                57939: 31114,
                57940: 31133,
                57941: 31143,
                57942: 40779,
                57943: 31146,
                57944: 31150,
                57945: 31155,
                57946: 31161,
                57947: 31162,
                57948: 31177,
                57949: 31189,
                57950: 31207,
                57951: 31212,
                57952: 31201,
                57953: 31203,
                57954: 31240,
                57955: 31245,
                57956: 31256,
                57957: 31257,
                57958: 31264,
                57959: 31263,
                57960: 31104,
                57961: 31281,
                57962: 31291,
                57963: 31294,
                57964: 31287,
                57965: 31299,
                57966: 31319,
                57967: 31305,
                57968: 31329,
                57969: 31330,
                57970: 31337,
                57971: 40861,
                57972: 31344,
                57973: 31353,
                57974: 31357,
                57975: 31368,
                57976: 31383,
                57977: 31381,
                57978: 31384,
                57979: 31382,
                57980: 31401,
                57981: 31432,
                57982: 31408,
                57984: 31414,
                57985: 31429,
                57986: 31428,
                57987: 31423,
                57988: 36995,
                57989: 31431,
                57990: 31434,
                57991: 31437,
                57992: 31439,
                57993: 31445,
                57994: 31443,
                57995: 31449,
                57996: 31450,
                57997: 31453,
                57998: 31457,
                57999: 31458,
                58e3: 31462,
                58001: 31469,
                58002: 31472,
                58003: 31490,
                58004: 31503,
                58005: 31498,
                58006: 31494,
                58007: 31539,
                58008: 31512,
                58009: 31513,
                58010: 31518,
                58011: 31541,
                58012: 31528,
                58013: 31542,
                58014: 31568,
                58015: 31610,
                58016: 31492,
                58017: 31565,
                58018: 31499,
                58019: 31564,
                58020: 31557,
                58021: 31605,
                58022: 31589,
                58023: 31604,
                58024: 31591,
                58025: 31600,
                58026: 31601,
                58027: 31596,
                58028: 31598,
                58029: 31645,
                58030: 31640,
                58031: 31647,
                58032: 31629,
                58033: 31644,
                58034: 31642,
                58035: 31627,
                58036: 31634,
                58037: 31631,
                58038: 31581,
                58039: 31641,
                58040: 31691,
                58041: 31681,
                58042: 31692,
                58043: 31695,
                58044: 31668,
                58045: 31686,
                58046: 31709,
                58047: 31721,
                58048: 31761,
                58049: 31764,
                58050: 31718,
                58051: 31717,
                58052: 31840,
                58053: 31744,
                58054: 31751,
                58055: 31763,
                58056: 31731,
                58057: 31735,
                58058: 31767,
                58059: 31757,
                58060: 31734,
                58061: 31779,
                58062: 31783,
                58063: 31786,
                58064: 31775,
                58065: 31799,
                58066: 31787,
                58067: 31805,
                58068: 31820,
                58069: 31811,
                58070: 31828,
                58071: 31823,
                58072: 31808,
                58073: 31824,
                58074: 31832,
                58075: 31839,
                58076: 31844,
                58077: 31830,
                58078: 31845,
                58079: 31852,
                58080: 31861,
                58081: 31875,
                58082: 31888,
                58083: 31908,
                58084: 31917,
                58085: 31906,
                58086: 31915,
                58087: 31905,
                58088: 31912,
                58089: 31923,
                58090: 31922,
                58091: 31921,
                58092: 31918,
                58093: 31929,
                58094: 31933,
                58095: 31936,
                58096: 31941,
                58097: 31938,
                58098: 31960,
                58099: 31954,
                58100: 31964,
                58101: 31970,
                58102: 39739,
                58103: 31983,
                58104: 31986,
                58105: 31988,
                58106: 31990,
                58107: 31994,
                58108: 32006,
                58176: 32002,
                58177: 32028,
                58178: 32021,
                58179: 32010,
                58180: 32069,
                58181: 32075,
                58182: 32046,
                58183: 32050,
                58184: 32063,
                58185: 32053,
                58186: 32070,
                58187: 32115,
                58188: 32086,
                58189: 32078,
                58190: 32114,
                58191: 32104,
                58192: 32110,
                58193: 32079,
                58194: 32099,
                58195: 32147,
                58196: 32137,
                58197: 32091,
                58198: 32143,
                58199: 32125,
                58200: 32155,
                58201: 32186,
                58202: 32174,
                58203: 32163,
                58204: 32181,
                58205: 32199,
                58206: 32189,
                58207: 32171,
                58208: 32317,
                58209: 32162,
                58210: 32175,
                58211: 32220,
                58212: 32184,
                58213: 32159,
                58214: 32176,
                58215: 32216,
                58216: 32221,
                58217: 32228,
                58218: 32222,
                58219: 32251,
                58220: 32242,
                58221: 32225,
                58222: 32261,
                58223: 32266,
                58224: 32291,
                58225: 32289,
                58226: 32274,
                58227: 32305,
                58228: 32287,
                58229: 32265,
                58230: 32267,
                58231: 32290,
                58232: 32326,
                58233: 32358,
                58234: 32315,
                58235: 32309,
                58236: 32313,
                58237: 32323,
                58238: 32311,
                58240: 32306,
                58241: 32314,
                58242: 32359,
                58243: 32349,
                58244: 32342,
                58245: 32350,
                58246: 32345,
                58247: 32346,
                58248: 32377,
                58249: 32362,
                58250: 32361,
                58251: 32380,
                58252: 32379,
                58253: 32387,
                58254: 32213,
                58255: 32381,
                58256: 36782,
                58257: 32383,
                58258: 32392,
                58259: 32393,
                58260: 32396,
                58261: 32402,
                58262: 32400,
                58263: 32403,
                58264: 32404,
                58265: 32406,
                58266: 32398,
                58267: 32411,
                58268: 32412,
                58269: 32568,
                58270: 32570,
                58271: 32581,
                58272: 32588,
                58273: 32589,
                58274: 32590,
                58275: 32592,
                58276: 32593,
                58277: 32597,
                58278: 32596,
                58279: 32600,
                58280: 32607,
                58281: 32608,
                58282: 32616,
                58283: 32617,
                58284: 32615,
                58285: 32632,
                58286: 32642,
                58287: 32646,
                58288: 32643,
                58289: 32648,
                58290: 32647,
                58291: 32652,
                58292: 32660,
                58293: 32670,
                58294: 32669,
                58295: 32666,
                58296: 32675,
                58297: 32687,
                58298: 32690,
                58299: 32697,
                58300: 32686,
                58301: 32694,
                58302: 32696,
                58303: 35697,
                58304: 32709,
                58305: 32710,
                58306: 32714,
                58307: 32725,
                58308: 32724,
                58309: 32737,
                58310: 32742,
                58311: 32745,
                58312: 32755,
                58313: 32761,
                58314: 39132,
                58315: 32774,
                58316: 32772,
                58317: 32779,
                58318: 32786,
                58319: 32792,
                58320: 32793,
                58321: 32796,
                58322: 32801,
                58323: 32808,
                58324: 32831,
                58325: 32827,
                58326: 32842,
                58327: 32838,
                58328: 32850,
                58329: 32856,
                58330: 32858,
                58331: 32863,
                58332: 32866,
                58333: 32872,
                58334: 32883,
                58335: 32882,
                58336: 32880,
                58337: 32886,
                58338: 32889,
                58339: 32893,
                58340: 32895,
                58341: 32900,
                58342: 32902,
                58343: 32901,
                58344: 32923,
                58345: 32915,
                58346: 32922,
                58347: 32941,
                58348: 20880,
                58349: 32940,
                58350: 32987,
                58351: 32997,
                58352: 32985,
                58353: 32989,
                58354: 32964,
                58355: 32986,
                58356: 32982,
                58357: 33033,
                58358: 33007,
                58359: 33009,
                58360: 33051,
                58361: 33065,
                58362: 33059,
                58363: 33071,
                58364: 33099,
                58432: 38539,
                58433: 33094,
                58434: 33086,
                58435: 33107,
                58436: 33105,
                58437: 33020,
                58438: 33137,
                58439: 33134,
                58440: 33125,
                58441: 33126,
                58442: 33140,
                58443: 33155,
                58444: 33160,
                58445: 33162,
                58446: 33152,
                58447: 33154,
                58448: 33184,
                58449: 33173,
                58450: 33188,
                58451: 33187,
                58452: 33119,
                58453: 33171,
                58454: 33193,
                58455: 33200,
                58456: 33205,
                58457: 33214,
                58458: 33208,
                58459: 33213,
                58460: 33216,
                58461: 33218,
                58462: 33210,
                58463: 33225,
                58464: 33229,
                58465: 33233,
                58466: 33241,
                58467: 33240,
                58468: 33224,
                58469: 33242,
                58470: 33247,
                58471: 33248,
                58472: 33255,
                58473: 33274,
                58474: 33275,
                58475: 33278,
                58476: 33281,
                58477: 33282,
                58478: 33285,
                58479: 33287,
                58480: 33290,
                58481: 33293,
                58482: 33296,
                58483: 33302,
                58484: 33321,
                58485: 33323,
                58486: 33336,
                58487: 33331,
                58488: 33344,
                58489: 33369,
                58490: 33368,
                58491: 33373,
                58492: 33370,
                58493: 33375,
                58494: 33380,
                58496: 33378,
                58497: 33384,
                58498: 33386,
                58499: 33387,
                58500: 33326,
                58501: 33393,
                58502: 33399,
                58503: 33400,
                58504: 33406,
                58505: 33421,
                58506: 33426,
                58507: 33451,
                58508: 33439,
                58509: 33467,
                58510: 33452,
                58511: 33505,
                58512: 33507,
                58513: 33503,
                58514: 33490,
                58515: 33524,
                58516: 33523,
                58517: 33530,
                58518: 33683,
                58519: 33539,
                58520: 33531,
                58521: 33529,
                58522: 33502,
                58523: 33542,
                58524: 33500,
                58525: 33545,
                58526: 33497,
                58527: 33589,
                58528: 33588,
                58529: 33558,
                58530: 33586,
                58531: 33585,
                58532: 33600,
                58533: 33593,
                58534: 33616,
                58535: 33605,
                58536: 33583,
                58537: 33579,
                58538: 33559,
                58539: 33560,
                58540: 33669,
                58541: 33690,
                58542: 33706,
                58543: 33695,
                58544: 33698,
                58545: 33686,
                58546: 33571,
                58547: 33678,
                58548: 33671,
                58549: 33674,
                58550: 33660,
                58551: 33717,
                58552: 33651,
                58553: 33653,
                58554: 33696,
                58555: 33673,
                58556: 33704,
                58557: 33780,
                58558: 33811,
                58559: 33771,
                58560: 33742,
                58561: 33789,
                58562: 33795,
                58563: 33752,
                58564: 33803,
                58565: 33729,
                58566: 33783,
                58567: 33799,
                58568: 33760,
                58569: 33778,
                58570: 33805,
                58571: 33826,
                58572: 33824,
                58573: 33725,
                58574: 33848,
                58575: 34054,
                58576: 33787,
                58577: 33901,
                58578: 33834,
                58579: 33852,
                58580: 34138,
                58581: 33924,
                58582: 33911,
                58583: 33899,
                58584: 33965,
                58585: 33902,
                58586: 33922,
                58587: 33897,
                58588: 33862,
                58589: 33836,
                58590: 33903,
                58591: 33913,
                58592: 33845,
                58593: 33994,
                58594: 33890,
                58595: 33977,
                58596: 33983,
                58597: 33951,
                58598: 34009,
                58599: 33997,
                58600: 33979,
                58601: 34010,
                58602: 34e3,
                58603: 33985,
                58604: 33990,
                58605: 34006,
                58606: 33953,
                58607: 34081,
                58608: 34047,
                58609: 34036,
                58610: 34071,
                58611: 34072,
                58612: 34092,
                58613: 34079,
                58614: 34069,
                58615: 34068,
                58616: 34044,
                58617: 34112,
                58618: 34147,
                58619: 34136,
                58620: 34120,
                58688: 34113,
                58689: 34306,
                58690: 34123,
                58691: 34133,
                58692: 34176,
                58693: 34212,
                58694: 34184,
                58695: 34193,
                58696: 34186,
                58697: 34216,
                58698: 34157,
                58699: 34196,
                58700: 34203,
                58701: 34282,
                58702: 34183,
                58703: 34204,
                58704: 34167,
                58705: 34174,
                58706: 34192,
                58707: 34249,
                58708: 34234,
                58709: 34255,
                58710: 34233,
                58711: 34256,
                58712: 34261,
                58713: 34269,
                58714: 34277,
                58715: 34268,
                58716: 34297,
                58717: 34314,
                58718: 34323,
                58719: 34315,
                58720: 34302,
                58721: 34298,
                58722: 34310,
                58723: 34338,
                58724: 34330,
                58725: 34352,
                58726: 34367,
                58727: 34381,
                58728: 20053,
                58729: 34388,
                58730: 34399,
                58731: 34407,
                58732: 34417,
                58733: 34451,
                58734: 34467,
                58735: 34473,
                58736: 34474,
                58737: 34443,
                58738: 34444,
                58739: 34486,
                58740: 34479,
                58741: 34500,
                58742: 34502,
                58743: 34480,
                58744: 34505,
                58745: 34851,
                58746: 34475,
                58747: 34516,
                58748: 34526,
                58749: 34537,
                58750: 34540,
                58752: 34527,
                58753: 34523,
                58754: 34543,
                58755: 34578,
                58756: 34566,
                58757: 34568,
                58758: 34560,
                58759: 34563,
                58760: 34555,
                58761: 34577,
                58762: 34569,
                58763: 34573,
                58764: 34553,
                58765: 34570,
                58766: 34612,
                58767: 34623,
                58768: 34615,
                58769: 34619,
                58770: 34597,
                58771: 34601,
                58772: 34586,
                58773: 34656,
                58774: 34655,
                58775: 34680,
                58776: 34636,
                58777: 34638,
                58778: 34676,
                58779: 34647,
                58780: 34664,
                58781: 34670,
                58782: 34649,
                58783: 34643,
                58784: 34659,
                58785: 34666,
                58786: 34821,
                58787: 34722,
                58788: 34719,
                58789: 34690,
                58790: 34735,
                58791: 34763,
                58792: 34749,
                58793: 34752,
                58794: 34768,
                58795: 38614,
                58796: 34731,
                58797: 34756,
                58798: 34739,
                58799: 34759,
                58800: 34758,
                58801: 34747,
                58802: 34799,
                58803: 34802,
                58804: 34784,
                58805: 34831,
                58806: 34829,
                58807: 34814,
                58808: 34806,
                58809: 34807,
                58810: 34830,
                58811: 34770,
                58812: 34833,
                58813: 34838,
                58814: 34837,
                58815: 34850,
                58816: 34849,
                58817: 34865,
                58818: 34870,
                58819: 34873,
                58820: 34855,
                58821: 34875,
                58822: 34884,
                58823: 34882,
                58824: 34898,
                58825: 34905,
                58826: 34910,
                58827: 34914,
                58828: 34923,
                58829: 34945,
                58830: 34942,
                58831: 34974,
                58832: 34933,
                58833: 34941,
                58834: 34997,
                58835: 34930,
                58836: 34946,
                58837: 34967,
                58838: 34962,
                58839: 34990,
                58840: 34969,
                58841: 34978,
                58842: 34957,
                58843: 34980,
                58844: 34992,
                58845: 35007,
                58846: 34993,
                58847: 35011,
                58848: 35012,
                58849: 35028,
                58850: 35032,
                58851: 35033,
                58852: 35037,
                58853: 35065,
                58854: 35074,
                58855: 35068,
                58856: 35060,
                58857: 35048,
                58858: 35058,
                58859: 35076,
                58860: 35084,
                58861: 35082,
                58862: 35091,
                58863: 35139,
                58864: 35102,
                58865: 35109,
                58866: 35114,
                58867: 35115,
                58868: 35137,
                58869: 35140,
                58870: 35131,
                58871: 35126,
                58872: 35128,
                58873: 35148,
                58874: 35101,
                58875: 35168,
                58876: 35166,
                58944: 35174,
                58945: 35172,
                58946: 35181,
                58947: 35178,
                58948: 35183,
                58949: 35188,
                58950: 35191,
                58951: 35198,
                58952: 35203,
                58953: 35208,
                58954: 35210,
                58955: 35219,
                58956: 35224,
                58957: 35233,
                58958: 35241,
                58959: 35238,
                58960: 35244,
                58961: 35247,
                58962: 35250,
                58963: 35258,
                58964: 35261,
                58965: 35263,
                58966: 35264,
                58967: 35290,
                58968: 35292,
                58969: 35293,
                58970: 35303,
                58971: 35316,
                58972: 35320,
                58973: 35331,
                58974: 35350,
                58975: 35344,
                58976: 35340,
                58977: 35355,
                58978: 35357,
                58979: 35365,
                58980: 35382,
                58981: 35393,
                58982: 35419,
                58983: 35410,
                58984: 35398,
                58985: 35400,
                58986: 35452,
                58987: 35437,
                58988: 35436,
                58989: 35426,
                58990: 35461,
                58991: 35458,
                58992: 35460,
                58993: 35496,
                58994: 35489,
                58995: 35473,
                58996: 35493,
                58997: 35494,
                58998: 35482,
                58999: 35491,
                59e3: 35524,
                59001: 35533,
                59002: 35522,
                59003: 35546,
                59004: 35563,
                59005: 35571,
                59006: 35559,
                59008: 35556,
                59009: 35569,
                59010: 35604,
                59011: 35552,
                59012: 35554,
                59013: 35575,
                59014: 35550,
                59015: 35547,
                59016: 35596,
                59017: 35591,
                59018: 35610,
                59019: 35553,
                59020: 35606,
                59021: 35600,
                59022: 35607,
                59023: 35616,
                59024: 35635,
                59025: 38827,
                59026: 35622,
                59027: 35627,
                59028: 35646,
                59029: 35624,
                59030: 35649,
                59031: 35660,
                59032: 35663,
                59033: 35662,
                59034: 35657,
                59035: 35670,
                59036: 35675,
                59037: 35674,
                59038: 35691,
                59039: 35679,
                59040: 35692,
                59041: 35695,
                59042: 35700,
                59043: 35709,
                59044: 35712,
                59045: 35724,
                59046: 35726,
                59047: 35730,
                59048: 35731,
                59049: 35734,
                59050: 35737,
                59051: 35738,
                59052: 35898,
                59053: 35905,
                59054: 35903,
                59055: 35912,
                59056: 35916,
                59057: 35918,
                59058: 35920,
                59059: 35925,
                59060: 35938,
                59061: 35948,
                59062: 35960,
                59063: 35962,
                59064: 35970,
                59065: 35977,
                59066: 35973,
                59067: 35978,
                59068: 35981,
                59069: 35982,
                59070: 35988,
                59071: 35964,
                59072: 35992,
                59073: 25117,
                59074: 36013,
                59075: 36010,
                59076: 36029,
                59077: 36018,
                59078: 36019,
                59079: 36014,
                59080: 36022,
                59081: 36040,
                59082: 36033,
                59083: 36068,
                59084: 36067,
                59085: 36058,
                59086: 36093,
                59087: 36090,
                59088: 36091,
                59089: 36100,
                59090: 36101,
                59091: 36106,
                59092: 36103,
                59093: 36111,
                59094: 36109,
                59095: 36112,
                59096: 40782,
                59097: 36115,
                59098: 36045,
                59099: 36116,
                59100: 36118,
                59101: 36199,
                59102: 36205,
                59103: 36209,
                59104: 36211,
                59105: 36225,
                59106: 36249,
                59107: 36290,
                59108: 36286,
                59109: 36282,
                59110: 36303,
                59111: 36314,
                59112: 36310,
                59113: 36300,
                59114: 36315,
                59115: 36299,
                59116: 36330,
                59117: 36331,
                59118: 36319,
                59119: 36323,
                59120: 36348,
                59121: 36360,
                59122: 36361,
                59123: 36351,
                59124: 36381,
                59125: 36382,
                59126: 36368,
                59127: 36383,
                59128: 36418,
                59129: 36405,
                59130: 36400,
                59131: 36404,
                59132: 36426,
                59200: 36423,
                59201: 36425,
                59202: 36428,
                59203: 36432,
                59204: 36424,
                59205: 36441,
                59206: 36452,
                59207: 36448,
                59208: 36394,
                59209: 36451,
                59210: 36437,
                59211: 36470,
                59212: 36466,
                59213: 36476,
                59214: 36481,
                59215: 36487,
                59216: 36485,
                59217: 36484,
                59218: 36491,
                59219: 36490,
                59220: 36499,
                59221: 36497,
                59222: 36500,
                59223: 36505,
                59224: 36522,
                59225: 36513,
                59226: 36524,
                59227: 36528,
                59228: 36550,
                59229: 36529,
                59230: 36542,
                59231: 36549,
                59232: 36552,
                59233: 36555,
                59234: 36571,
                59235: 36579,
                59236: 36604,
                59237: 36603,
                59238: 36587,
                59239: 36606,
                59240: 36618,
                59241: 36613,
                59242: 36629,
                59243: 36626,
                59244: 36633,
                59245: 36627,
                59246: 36636,
                59247: 36639,
                59248: 36635,
                59249: 36620,
                59250: 36646,
                59251: 36659,
                59252: 36667,
                59253: 36665,
                59254: 36677,
                59255: 36674,
                59256: 36670,
                59257: 36684,
                59258: 36681,
                59259: 36678,
                59260: 36686,
                59261: 36695,
                59262: 36700,
                59264: 36706,
                59265: 36707,
                59266: 36708,
                59267: 36764,
                59268: 36767,
                59269: 36771,
                59270: 36781,
                59271: 36783,
                59272: 36791,
                59273: 36826,
                59274: 36837,
                59275: 36834,
                59276: 36842,
                59277: 36847,
                59278: 36999,
                59279: 36852,
                59280: 36869,
                59281: 36857,
                59282: 36858,
                59283: 36881,
                59284: 36885,
                59285: 36897,
                59286: 36877,
                59287: 36894,
                59288: 36886,
                59289: 36875,
                59290: 36903,
                59291: 36918,
                59292: 36917,
                59293: 36921,
                59294: 36856,
                59295: 36943,
                59296: 36944,
                59297: 36945,
                59298: 36946,
                59299: 36878,
                59300: 36937,
                59301: 36926,
                59302: 36950,
                59303: 36952,
                59304: 36958,
                59305: 36968,
                59306: 36975,
                59307: 36982,
                59308: 38568,
                59309: 36978,
                59310: 36994,
                59311: 36989,
                59312: 36993,
                59313: 36992,
                59314: 37002,
                59315: 37001,
                59316: 37007,
                59317: 37032,
                59318: 37039,
                59319: 37041,
                59320: 37045,
                59321: 37090,
                59322: 37092,
                59323: 25160,
                59324: 37083,
                59325: 37122,
                59326: 37138,
                59327: 37145,
                59328: 37170,
                59329: 37168,
                59330: 37194,
                59331: 37206,
                59332: 37208,
                59333: 37219,
                59334: 37221,
                59335: 37225,
                59336: 37235,
                59337: 37234,
                59338: 37259,
                59339: 37257,
                59340: 37250,
                59341: 37282,
                59342: 37291,
                59343: 37295,
                59344: 37290,
                59345: 37301,
                59346: 37300,
                59347: 37306,
                59348: 37312,
                59349: 37313,
                59350: 37321,
                59351: 37323,
                59352: 37328,
                59353: 37334,
                59354: 37343,
                59355: 37345,
                59356: 37339,
                59357: 37372,
                59358: 37365,
                59359: 37366,
                59360: 37406,
                59361: 37375,
                59362: 37396,
                59363: 37420,
                59364: 37397,
                59365: 37393,
                59366: 37470,
                59367: 37463,
                59368: 37445,
                59369: 37449,
                59370: 37476,
                59371: 37448,
                59372: 37525,
                59373: 37439,
                59374: 37451,
                59375: 37456,
                59376: 37532,
                59377: 37526,
                59378: 37523,
                59379: 37531,
                59380: 37466,
                59381: 37583,
                59382: 37561,
                59383: 37559,
                59384: 37609,
                59385: 37647,
                59386: 37626,
                59387: 37700,
                59388: 37678,
                59456: 37657,
                59457: 37666,
                59458: 37658,
                59459: 37667,
                59460: 37690,
                59461: 37685,
                59462: 37691,
                59463: 37724,
                59464: 37728,
                59465: 37756,
                59466: 37742,
                59467: 37718,
                59468: 37808,
                59469: 37804,
                59470: 37805,
                59471: 37780,
                59472: 37817,
                59473: 37846,
                59474: 37847,
                59475: 37864,
                59476: 37861,
                59477: 37848,
                59478: 37827,
                59479: 37853,
                59480: 37840,
                59481: 37832,
                59482: 37860,
                59483: 37914,
                59484: 37908,
                59485: 37907,
                59486: 37891,
                59487: 37895,
                59488: 37904,
                59489: 37942,
                59490: 37931,
                59491: 37941,
                59492: 37921,
                59493: 37946,
                59494: 37953,
                59495: 37970,
                59496: 37956,
                59497: 37979,
                59498: 37984,
                59499: 37986,
                59500: 37982,
                59501: 37994,
                59502: 37417,
                59503: 38e3,
                59504: 38005,
                59505: 38007,
                59506: 38013,
                59507: 37978,
                59508: 38012,
                59509: 38014,
                59510: 38017,
                59511: 38015,
                59512: 38274,
                59513: 38279,
                59514: 38282,
                59515: 38292,
                59516: 38294,
                59517: 38296,
                59518: 38297,
                59520: 38304,
                59521: 38312,
                59522: 38311,
                59523: 38317,
                59524: 38332,
                59525: 38331,
                59526: 38329,
                59527: 38334,
                59528: 38346,
                59529: 28662,
                59530: 38339,
                59531: 38349,
                59532: 38348,
                59533: 38357,
                59534: 38356,
                59535: 38358,
                59536: 38364,
                59537: 38369,
                59538: 38373,
                59539: 38370,
                59540: 38433,
                59541: 38440,
                59542: 38446,
                59543: 38447,
                59544: 38466,
                59545: 38476,
                59546: 38479,
                59547: 38475,
                59548: 38519,
                59549: 38492,
                59550: 38494,
                59551: 38493,
                59552: 38495,
                59553: 38502,
                59554: 38514,
                59555: 38508,
                59556: 38541,
                59557: 38552,
                59558: 38549,
                59559: 38551,
                59560: 38570,
                59561: 38567,
                59562: 38577,
                59563: 38578,
                59564: 38576,
                59565: 38580,
                59566: 38582,
                59567: 38584,
                59568: 38585,
                59569: 38606,
                59570: 38603,
                59571: 38601,
                59572: 38605,
                59573: 35149,
                59574: 38620,
                59575: 38669,
                59576: 38613,
                59577: 38649,
                59578: 38660,
                59579: 38662,
                59580: 38664,
                59581: 38675,
                59582: 38670,
                59583: 38673,
                59584: 38671,
                59585: 38678,
                59586: 38681,
                59587: 38692,
                59588: 38698,
                59589: 38704,
                59590: 38713,
                59591: 38717,
                59592: 38718,
                59593: 38724,
                59594: 38726,
                59595: 38728,
                59596: 38722,
                59597: 38729,
                59598: 38748,
                59599: 38752,
                59600: 38756,
                59601: 38758,
                59602: 38760,
                59603: 21202,
                59604: 38763,
                59605: 38769,
                59606: 38777,
                59607: 38789,
                59608: 38780,
                59609: 38785,
                59610: 38778,
                59611: 38790,
                59612: 38795,
                59613: 38799,
                59614: 38800,
                59615: 38812,
                59616: 38824,
                59617: 38822,
                59618: 38819,
                59619: 38835,
                59620: 38836,
                59621: 38851,
                59622: 38854,
                59623: 38856,
                59624: 38859,
                59625: 38876,
                59626: 38893,
                59627: 40783,
                59628: 38898,
                59629: 31455,
                59630: 38902,
                59631: 38901,
                59632: 38927,
                59633: 38924,
                59634: 38968,
                59635: 38948,
                59636: 38945,
                59637: 38967,
                59638: 38973,
                59639: 38982,
                59640: 38991,
                59641: 38987,
                59642: 39019,
                59643: 39023,
                59644: 39024,
                59712: 39025,
                59713: 39028,
                59714: 39027,
                59715: 39082,
                59716: 39087,
                59717: 39089,
                59718: 39094,
                59719: 39108,
                59720: 39107,
                59721: 39110,
                59722: 39145,
                59723: 39147,
                59724: 39171,
                59725: 39177,
                59726: 39186,
                59727: 39188,
                59728: 39192,
                59729: 39201,
                59730: 39197,
                59731: 39198,
                59732: 39204,
                59733: 39200,
                59734: 39212,
                59735: 39214,
                59736: 39229,
                59737: 39230,
                59738: 39234,
                59739: 39241,
                59740: 39237,
                59741: 39248,
                59742: 39243,
                59743: 39249,
                59744: 39250,
                59745: 39244,
                59746: 39253,
                59747: 39319,
                59748: 39320,
                59749: 39333,
                59750: 39341,
                59751: 39342,
                59752: 39356,
                59753: 39391,
                59754: 39387,
                59755: 39389,
                59756: 39384,
                59757: 39377,
                59758: 39405,
                59759: 39406,
                59760: 39409,
                59761: 39410,
                59762: 39419,
                59763: 39416,
                59764: 39425,
                59765: 39439,
                59766: 39429,
                59767: 39394,
                59768: 39449,
                59769: 39467,
                59770: 39479,
                59771: 39493,
                59772: 39490,
                59773: 39488,
                59774: 39491,
                59776: 39486,
                59777: 39509,
                59778: 39501,
                59779: 39515,
                59780: 39511,
                59781: 39519,
                59782: 39522,
                59783: 39525,
                59784: 39524,
                59785: 39529,
                59786: 39531,
                59787: 39530,
                59788: 39597,
                59789: 39600,
                59790: 39612,
                59791: 39616,
                59792: 39631,
                59793: 39633,
                59794: 39635,
                59795: 39636,
                59796: 39646,
                59797: 39647,
                59798: 39650,
                59799: 39651,
                59800: 39654,
                59801: 39663,
                59802: 39659,
                59803: 39662,
                59804: 39668,
                59805: 39665,
                59806: 39671,
                59807: 39675,
                59808: 39686,
                59809: 39704,
                59810: 39706,
                59811: 39711,
                59812: 39714,
                59813: 39715,
                59814: 39717,
                59815: 39719,
                59816: 39720,
                59817: 39721,
                59818: 39722,
                59819: 39726,
                59820: 39727,
                59821: 39730,
                59822: 39748,
                59823: 39747,
                59824: 39759,
                59825: 39757,
                59826: 39758,
                59827: 39761,
                59828: 39768,
                59829: 39796,
                59830: 39827,
                59831: 39811,
                59832: 39825,
                59833: 39830,
                59834: 39831,
                59835: 39839,
                59836: 39840,
                59837: 39848,
                59838: 39860,
                59839: 39872,
                59840: 39882,
                59841: 39865,
                59842: 39878,
                59843: 39887,
                59844: 39889,
                59845: 39890,
                59846: 39907,
                59847: 39906,
                59848: 39908,
                59849: 39892,
                59850: 39905,
                59851: 39994,
                59852: 39922,
                59853: 39921,
                59854: 39920,
                59855: 39957,
                59856: 39956,
                59857: 39945,
                59858: 39955,
                59859: 39948,
                59860: 39942,
                59861: 39944,
                59862: 39954,
                59863: 39946,
                59864: 39940,
                59865: 39982,
                59866: 39963,
                59867: 39973,
                59868: 39972,
                59869: 39969,
                59870: 39984,
                59871: 40007,
                59872: 39986,
                59873: 40006,
                59874: 39998,
                59875: 40026,
                59876: 40032,
                59877: 40039,
                59878: 40054,
                59879: 40056,
                59880: 40167,
                59881: 40172,
                59882: 40176,
                59883: 40201,
                59884: 40200,
                59885: 40171,
                59886: 40195,
                59887: 40198,
                59888: 40234,
                59889: 40230,
                59890: 40367,
                59891: 40227,
                59892: 40223,
                59893: 40260,
                59894: 40213,
                59895: 40210,
                59896: 40257,
                59897: 40255,
                59898: 40254,
                59899: 40262,
                59900: 40264,
                59968: 40285,
                59969: 40286,
                59970: 40292,
                59971: 40273,
                59972: 40272,
                59973: 40281,
                59974: 40306,
                59975: 40329,
                59976: 40327,
                59977: 40363,
                59978: 40303,
                59979: 40314,
                59980: 40346,
                59981: 40356,
                59982: 40361,
                59983: 40370,
                59984: 40388,
                59985: 40385,
                59986: 40379,
                59987: 40376,
                59988: 40378,
                59989: 40390,
                59990: 40399,
                59991: 40386,
                59992: 40409,
                59993: 40403,
                59994: 40440,
                59995: 40422,
                59996: 40429,
                59997: 40431,
                59998: 40445,
                59999: 40474,
                6e4: 40475,
                60001: 40478,
                60002: 40565,
                60003: 40569,
                60004: 40573,
                60005: 40577,
                60006: 40584,
                60007: 40587,
                60008: 40588,
                60009: 40594,
                60010: 40597,
                60011: 40593,
                60012: 40605,
                60013: 40613,
                60014: 40617,
                60015: 40632,
                60016: 40618,
                60017: 40621,
                60018: 38753,
                60019: 40652,
                60020: 40654,
                60021: 40655,
                60022: 40656,
                60023: 40660,
                60024: 40668,
                60025: 40670,
                60026: 40669,
                60027: 40672,
                60028: 40677,
                60029: 40680,
                60030: 40687,
                60032: 40692,
                60033: 40694,
                60034: 40695,
                60035: 40697,
                60036: 40699,
                60037: 40700,
                60038: 40701,
                60039: 40711,
                60040: 40712,
                60041: 30391,
                60042: 40725,
                60043: 40737,
                60044: 40748,
                60045: 40766,
                60046: 40778,
                60047: 40786,
                60048: 40788,
                60049: 40803,
                60050: 40799,
                60051: 40800,
                60052: 40801,
                60053: 40806,
                60054: 40807,
                60055: 40812,
                60056: 40810,
                60057: 40823,
                60058: 40818,
                60059: 40822,
                60060: 40853,
                60061: 40860,
                60062: 40864,
                60063: 22575,
                60064: 27079,
                60065: 36953,
                60066: 29796,
                60067: 20956,
                60068: 29081
              };
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(1), s = o(2);
              function r(d, C, B, A) {
                var F;
                C.degree() < B.degree() && (F = [
                  B,
                  C
                ], C = F[0], B = F[1]);
                for (var p = C, h = B, v = d.zero, b = d.one; h.degree() >= A / 2; ) {
                  var _ = p, m = v;
                  if (p = h, v = b, p.isZero()) return null;
                  h = _;
                  for (var D = d.zero, k = p.getCoefficient(p.degree()), w = d.inverse(k); h.degree() >= p.degree() && !h.isZero(); ) {
                    var y = h.degree() - p.degree(), S = d.multiply(h.getCoefficient(h.degree()), w);
                    D = D.addOrSubtract(d.buildMonomial(y, S)), h = h.addOrSubtract(p.multiplyByMonomial(y, S));
                  }
                  if (b = D.multiplyPoly(v).addOrSubtract(m), h.degree() >= p.degree()) return null;
                }
                var M = b.getCoefficient(0);
                if (M === 0) return null;
                var I = d.inverse(M);
                return [
                  b.multiply(I),
                  h.multiply(I)
                ];
              }
              function a(d, C) {
                var B = C.degree();
                if (B === 1) return [
                  C.getCoefficient(1)
                ];
                for (var A = new Array(B), F = 0, p = 1; p < d.size && F < B; p++) C.evaluateAt(p) === 0 && (A[F] = d.inverse(p), F++);
                return F !== B ? null : A;
              }
              function u(d, C, B) {
                for (var A = B.length, F = new Array(A), p = 0; p < A; p++) {
                  for (var h = d.inverse(B[p]), v = 1, b = 0; b < A; b++) p !== b && (v = d.multiply(v, l.addOrSubtractGF(1, d.multiply(B[b], h))));
                  F[p] = d.multiply(C.evaluateAt(h), d.inverse(v)), d.generatorBase !== 0 && (F[p] = d.multiply(F[p], h));
                }
                return F;
              }
              function E(d, C) {
                var B = new Uint8ClampedArray(d.length);
                B.set(d);
                for (var A = new l.default(285, 256, 0), F = new s.default(A, B), p = new Uint8ClampedArray(C), h = false, v = 0; v < C; v++) {
                  var b = F.evaluateAt(A.exp(v + A.generatorBase));
                  p[p.length - 1 - v] = b, b !== 0 && (h = true);
                }
                if (!h) return B;
                var _ = new s.default(A, p), m = r(A, A.buildMonomial(C, 1), _, C);
                if (m === null) return null;
                var D = a(A, m[0]);
                if (D == null) return null;
                for (var k = u(A, m[1], D), w = 0; w < D.length; w++) {
                  var y = B.length - 1 - A.log(D[w]);
                  if (y < 0) return null;
                  B[y] = l.addOrSubtractGF(B[y], k[w]);
                }
                return B;
              }
              n.decode = E;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              }), n.VERSIONS = [
                {
                  infoBits: null,
                  versionNumber: 1,
                  alignmentPatternCenters: [],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 7,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 19
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 10,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 13,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 17,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 9
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 2,
                  alignmentPatternCenters: [
                    6,
                    18
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 10,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 34
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 16,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 28
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 22
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 3,
                  alignmentPatternCenters: [
                    6,
                    22
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 15,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 55
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 44
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 4,
                  alignmentPatternCenters: [
                    6,
                    26
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 80
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 32
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 24
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 16,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 9
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 5,
                  alignmentPatternCenters: [
                    6,
                    30
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 108
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 43
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 11
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 12
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 6,
                  alignmentPatternCenters: [
                    6,
                    34
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 68
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 16,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 27
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 19
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 31892,
                  versionNumber: 7,
                  alignmentPatternCenters: [
                    6,
                    22,
                    38
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 78
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 31
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 13
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 14
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 34236,
                  versionNumber: 8,
                  alignmentPatternCenters: [
                    6,
                    24,
                    42
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 97
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 38
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 39
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 18
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 19
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 39577,
                  versionNumber: 9,
                  alignmentPatternCenters: [
                    6,
                    26,
                    46
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 36
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 37
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 12
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 42195,
                  versionNumber: 10,
                  alignmentPatternCenters: [
                    6,
                    28,
                    50
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 68
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 69
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 43
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 44
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 19
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 20
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 48118,
                  versionNumber: 11,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 81
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 50
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 51
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 12
                        },
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 51042,
                  versionNumber: 12,
                  alignmentPatternCenters: [
                    6,
                    32,
                    58
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 92
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 93
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 36
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 37
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 20
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 21
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 55367,
                  versionNumber: 13,
                  alignmentPatternCenters: [
                    6,
                    34,
                    62
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 107
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 37
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 38
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 20
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 21
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 12,
                          dataCodewordsPerBlock: 11
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 12
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 58893,
                  versionNumber: 14,
                  alignmentPatternCenters: [
                    6,
                    26,
                    46,
                    66
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 40
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 41
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 12
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 63784,
                  versionNumber: 15,
                  alignmentPatternCenters: [
                    6,
                    26,
                    48,
                    70
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 87
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 88
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 41
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 42
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 12
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 68472,
                  versionNumber: 16,
                  alignmentPatternCenters: [
                    6,
                    26,
                    50,
                    74
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 98
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 99
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 19
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 20
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 70749,
                  versionNumber: 17,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54,
                    78
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 107
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 108
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 76311,
                  versionNumber: 18,
                  alignmentPatternCenters: [
                    6,
                    30,
                    56,
                    82
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 120
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 121
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 9,
                          dataCodewordsPerBlock: 43
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 44
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 79154,
                  versionNumber: 19,
                  alignmentPatternCenters: [
                    6,
                    30,
                    58,
                    86
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 113
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 114
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 44
                        },
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 45
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 21
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 22
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 9,
                          dataCodewordsPerBlock: 13
                        },
                        {
                          numBlocks: 16,
                          dataCodewordsPerBlock: 14
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 84390,
                  versionNumber: 20,
                  alignmentPatternCenters: [
                    6,
                    34,
                    62,
                    90
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 107
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 108
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 41
                        },
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 42
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 87683,
                  versionNumber: 21,
                  alignmentPatternCenters: [
                    6,
                    28,
                    50,
                    72,
                    94
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 116
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 117
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 42
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 92361,
                  versionNumber: 22,
                  alignmentPatternCenters: [
                    6,
                    26,
                    50,
                    74,
                    98
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 111
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 112
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 16,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 34,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 96236,
                  versionNumber: 23,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54,
                    74,
                    102
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 121
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 122
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 16,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 102084,
                  versionNumber: 24,
                  alignmentPatternCenters: [
                    6,
                    28,
                    54,
                    80,
                    106
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 117
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 118
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 16,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 30,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 102881,
                  versionNumber: 25,
                  alignmentPatternCenters: [
                    6,
                    32,
                    58,
                    84,
                    110
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 106
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 107
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 110507,
                  versionNumber: 26,
                  alignmentPatternCenters: [
                    6,
                    30,
                    58,
                    86,
                    114
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 114
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 115
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 28,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 33,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 110734,
                  versionNumber: 27,
                  alignmentPatternCenters: [
                    6,
                    34,
                    62,
                    90,
                    118
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 122
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 123
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 23
                        },
                        {
                          numBlocks: 26,
                          dataCodewordsPerBlock: 24
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 12,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 28,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 117786,
                  versionNumber: 28,
                  alignmentPatternCenters: [
                    6,
                    26,
                    50,
                    74,
                    98,
                    122
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 117
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 118
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 31,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 31,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 119615,
                  versionNumber: 29,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54,
                    78,
                    102,
                    126
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 116
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 117
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 21,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 23
                        },
                        {
                          numBlocks: 37,
                          dataCodewordsPerBlock: 24
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 26,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 126325,
                  versionNumber: 30,
                  alignmentPatternCenters: [
                    6,
                    26,
                    52,
                    78,
                    104,
                    130
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 25,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 25,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 127568,
                  versionNumber: 31,
                  alignmentPatternCenters: [
                    6,
                    30,
                    56,
                    82,
                    108,
                    134
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 29,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 42,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 28,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 133589,
                  versionNumber: 32,
                  alignmentPatternCenters: [
                    6,
                    34,
                    60,
                    86,
                    112,
                    138
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 115
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 35,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 35,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 136944,
                  versionNumber: 33,
                  alignmentPatternCenters: [
                    6,
                    30,
                    58,
                    86,
                    114,
                    142
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 21,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 29,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 46,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 141498,
                  versionNumber: 34,
                  alignmentPatternCenters: [
                    6,
                    34,
                    62,
                    90,
                    118,
                    146
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 44,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 59,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 145311,
                  versionNumber: 35,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54,
                    78,
                    102,
                    126,
                    150
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 12,
                          dataCodewordsPerBlock: 121
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 122
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 12,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 26,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 39,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 41,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 150283,
                  versionNumber: 36,
                  alignmentPatternCenters: [
                    6,
                    24,
                    50,
                    76,
                    102,
                    128,
                    154
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 121
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 122
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 34,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 46,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 64,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 152622,
                  versionNumber: 37,
                  alignmentPatternCenters: [
                    6,
                    28,
                    54,
                    80,
                    106,
                    132,
                    158
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 122
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 123
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 29,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 49,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 24,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 46,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 158308,
                  versionNumber: 38,
                  alignmentPatternCenters: [
                    6,
                    32,
                    58,
                    84,
                    110,
                    136,
                    162
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 122
                        },
                        {
                          numBlocks: 18,
                          dataCodewordsPerBlock: 123
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 32,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 48,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 42,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 32,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 161089,
                  versionNumber: 39,
                  alignmentPatternCenters: [
                    6,
                    26,
                    54,
                    82,
                    110,
                    138,
                    166
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 20,
                          dataCodewordsPerBlock: 117
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 118
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 40,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 43,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 67,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 167017,
                  versionNumber: 40,
                  alignmentPatternCenters: [
                    6,
                    30,
                    58,
                    86,
                    114,
                    142,
                    170
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 118
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 119
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 18,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 31,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 34,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 34,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 20,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 61,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                }
              ];
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(0);
              function s(E, d, C, B) {
                var A = E.x - d.x + C.x - B.x, F = E.y - d.y + C.y - B.y;
                if (A === 0 && F === 0) return {
                  a11: d.x - E.x,
                  a12: d.y - E.y,
                  a13: 0,
                  a21: C.x - d.x,
                  a22: C.y - d.y,
                  a23: 0,
                  a31: E.x,
                  a32: E.y,
                  a33: 1
                };
                var p = d.x - C.x, h = B.x - C.x, v = d.y - C.y, b = B.y - C.y, _ = p * b - h * v, m = (A * b - h * F) / _, D = (p * F - A * v) / _;
                return {
                  a11: d.x - E.x + m * d.x,
                  a12: d.y - E.y + m * d.y,
                  a13: m,
                  a21: B.x - E.x + D * B.x,
                  a22: B.y - E.y + D * B.y,
                  a23: D,
                  a31: E.x,
                  a32: E.y,
                  a33: 1
                };
              }
              function r(E, d, C, B) {
                var A = s(E, d, C, B);
                return {
                  a11: A.a22 * A.a33 - A.a23 * A.a32,
                  a12: A.a13 * A.a32 - A.a12 * A.a33,
                  a13: A.a12 * A.a23 - A.a13 * A.a22,
                  a21: A.a23 * A.a31 - A.a21 * A.a33,
                  a22: A.a11 * A.a33 - A.a13 * A.a31,
                  a23: A.a13 * A.a21 - A.a11 * A.a23,
                  a31: A.a21 * A.a32 - A.a22 * A.a31,
                  a32: A.a12 * A.a31 - A.a11 * A.a32,
                  a33: A.a11 * A.a22 - A.a12 * A.a21
                };
              }
              function a(E, d) {
                return {
                  a11: E.a11 * d.a11 + E.a21 * d.a12 + E.a31 * d.a13,
                  a12: E.a12 * d.a11 + E.a22 * d.a12 + E.a32 * d.a13,
                  a13: E.a13 * d.a11 + E.a23 * d.a12 + E.a33 * d.a13,
                  a21: E.a11 * d.a21 + E.a21 * d.a22 + E.a31 * d.a23,
                  a22: E.a12 * d.a21 + E.a22 * d.a22 + E.a32 * d.a23,
                  a23: E.a13 * d.a21 + E.a23 * d.a22 + E.a33 * d.a23,
                  a31: E.a11 * d.a31 + E.a21 * d.a32 + E.a31 * d.a33,
                  a32: E.a12 * d.a31 + E.a22 * d.a32 + E.a32 * d.a33,
                  a33: E.a13 * d.a31 + E.a23 * d.a32 + E.a33 * d.a33
                };
              }
              function u(E, d) {
                for (var C = r({
                  x: 3.5,
                  y: 3.5
                }, {
                  x: d.dimension - 3.5,
                  y: 3.5
                }, {
                  x: d.dimension - 6.5,
                  y: d.dimension - 6.5
                }, {
                  x: 3.5,
                  y: d.dimension - 3.5
                }), B = s(d.topLeft, d.topRight, d.alignmentPattern, d.bottomLeft), A = a(B, C), F = l.BitMatrix.createEmpty(d.dimension, d.dimension), p = function(D, k) {
                  var w = A.a13 * D + A.a23 * k + A.a33;
                  return {
                    x: (A.a11 * D + A.a21 * k + A.a31) / w,
                    y: (A.a12 * D + A.a22 * k + A.a32) / w
                  };
                }, h = 0; h < d.dimension; h++) for (var v = 0; v < d.dimension; v++) {
                  var b = v + 0.5, _ = h + 0.5, m = p(b, _);
                  F.set(v, h, E.get(Math.floor(m.x), Math.floor(m.y)));
                }
                return {
                  matrix: F,
                  mappingFunction: p
                };
              }
              n.extract = u;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = 4, s = 0.5, r = 1.5, a = function(b, _) {
                return Math.sqrt(Math.pow(_.x - b.x, 2) + Math.pow(_.y - b.y, 2));
              };
              function u(b) {
                return b.reduce(function(_, m) {
                  return _ + m;
                });
              }
              function E(b, _, m) {
                var D, k, w, y, S = a(b, _), M = a(_, m), I = a(b, m), L, N, q;
                return M >= S && M >= I ? (D = [
                  _,
                  b,
                  m
                ], L = D[0], N = D[1], q = D[2]) : I >= M && I >= S ? (k = [
                  b,
                  _,
                  m
                ], L = k[0], N = k[1], q = k[2]) : (w = [
                  b,
                  m,
                  _
                ], L = w[0], N = w[1], q = w[2]), (q.x - N.x) * (L.y - N.y) - (q.y - N.y) * (L.x - N.x) < 0 && (y = [
                  q,
                  L
                ], L = y[0], q = y[1]), {
                  bottomLeft: L,
                  topLeft: N,
                  topRight: q
                };
              }
              function d(b, _, m, D) {
                var k = (u(B(b, m, D, 5)) / 7 + u(B(b, _, D, 5)) / 7 + u(B(m, b, D, 5)) / 7 + u(B(_, b, D, 5)) / 7) / 4;
                if (k < 1) throw new Error("Invalid module size");
                var w = Math.round(a(b, _) / k), y = Math.round(a(b, m) / k), S = Math.floor((w + y) / 2) + 7;
                switch (S % 4) {
                  case 0:
                    S++;
                    break;
                  case 2:
                    S--;
                    break;
                }
                return {
                  dimension: S,
                  moduleSize: k
                };
              }
              function C(b, _, m, D) {
                var k = [
                  {
                    x: Math.floor(b.x),
                    y: Math.floor(b.y)
                  }
                ], w = Math.abs(_.y - b.y) > Math.abs(_.x - b.x), y, S, M, I;
                w ? (y = Math.floor(b.y), S = Math.floor(b.x), M = Math.floor(_.y), I = Math.floor(_.x)) : (y = Math.floor(b.x), S = Math.floor(b.y), M = Math.floor(_.x), I = Math.floor(_.y));
                for (var L = Math.abs(M - y), N = Math.abs(I - S), q = Math.floor(-L / 2), R = y < M ? 1 : -1, O = S < I ? 1 : -1, H = true, Q = y, K = S; Q !== M + R; Q += R) {
                  var G = w ? K : Q, j = w ? Q : K;
                  if (m.get(G, j) !== H && (H = !H, k.push({
                    x: G,
                    y: j
                  }), k.length === D + 1)) break;
                  if (q += N, q > 0) {
                    if (K === I) break;
                    K += O, q -= L;
                  }
                }
                for (var W = [], J = 0; J < D; J++) k[J] && k[J + 1] ? W.push(a(k[J], k[J + 1])) : W.push(0);
                return W;
              }
              function B(b, _, m, D) {
                var k, w = _.y - b.y, y = _.x - b.x, S = C(b, _, m, Math.ceil(D / 2)), M = C(b, {
                  x: b.x - y,
                  y: b.y - w
                }, m, Math.ceil(D / 2)), I = S.shift() + M.shift() - 1;
                return (k = M.concat(I)).concat.apply(k, S);
              }
              function A(b, _) {
                var m = u(b) / u(_), D = 0;
                return _.forEach(function(k, w) {
                  D += Math.pow(b[w] - k * m, 2);
                }), {
                  averageSize: m,
                  error: D
                };
              }
              function F(b, _, m) {
                try {
                  var D = B(b, {
                    x: -1,
                    y: b.y
                  }, m, _.length), k = B(b, {
                    x: b.x,
                    y: -1
                  }, m, _.length), w = {
                    x: Math.max(0, b.x - b.y) - 1,
                    y: Math.max(0, b.y - b.x) - 1
                  }, y = B(b, w, m, _.length), S = {
                    x: Math.min(m.width, b.x + b.y) + 1,
                    y: Math.min(m.height, b.y + b.x) + 1
                  }, M = B(b, S, m, _.length), I = A(D, _), L = A(k, _), N = A(y, _), q = A(M, _), R = Math.sqrt(I.error * I.error + L.error * L.error + N.error * N.error + q.error * q.error), O = (I.averageSize + L.averageSize + N.averageSize + q.averageSize) / 4, H = (Math.pow(I.averageSize - O, 2) + Math.pow(L.averageSize - O, 2) + Math.pow(N.averageSize - O, 2) + Math.pow(q.averageSize - O, 2)) / O;
                  return R + H;
                } catch {
                  return 1 / 0;
                }
              }
              function p(b, _) {
                for (var m = Math.round(_.x); b.get(m, Math.round(_.y)); ) m--;
                for (var D = Math.round(_.x); b.get(D, Math.round(_.y)); ) D++;
                for (var k = (m + D) / 2, w = Math.round(_.y); b.get(Math.round(k), w); ) w--;
                for (var y = Math.round(_.y); b.get(Math.round(k), y); ) y++;
                var S = (w + y) / 2;
                return {
                  x: k,
                  y: S
                };
              }
              function h(b) {
                for (var _ = [], m = [], D = [], k = [], w = function(G) {
                  for (var j = 0, W = false, J = [
                    0,
                    0,
                    0,
                    0,
                    0
                  ], a0 = function(r0) {
                    var s0 = b.get(r0, G);
                    if (s0 === W) j++;
                    else {
                      J = [
                        J[1],
                        J[2],
                        J[3],
                        J[4],
                        j
                      ], j = 1, W = s0;
                      var B0 = u(J) / 7, le = Math.abs(J[0] - B0) < B0 && Math.abs(J[1] - B0) < B0 && Math.abs(J[2] - 3 * B0) < 3 * B0 && Math.abs(J[3] - B0) < B0 && Math.abs(J[4] - B0) < B0 && !s0, X = u(J.slice(-3)) / 3, n0 = Math.abs(J[2] - X) < X && Math.abs(J[3] - X) < X && Math.abs(J[4] - X) < X && s0;
                      if (le) {
                        var u0 = r0 - J[3] - J[4], h0 = u0 - J[2], v0 = {
                          startX: h0,
                          endX: u0,
                          y: G
                        }, z0 = m.filter(function(g0) {
                          return h0 >= g0.bottom.startX && h0 <= g0.bottom.endX || u0 >= g0.bottom.startX && h0 <= g0.bottom.endX || h0 <= g0.bottom.startX && u0 >= g0.bottom.endX && J[2] / (g0.bottom.endX - g0.bottom.startX) < r && J[2] / (g0.bottom.endX - g0.bottom.startX) > s;
                        });
                        z0.length > 0 ? z0[0].bottom = v0 : m.push({
                          top: v0,
                          bottom: v0
                        });
                      }
                      if (n0) {
                        var G0 = r0 - J[4], q0 = G0 - J[3], v0 = {
                          startX: q0,
                          y: G,
                          endX: G0
                        }, z0 = k.filter(function(S0) {
                          return q0 >= S0.bottom.startX && q0 <= S0.bottom.endX || G0 >= S0.bottom.startX && q0 <= S0.bottom.endX || q0 <= S0.bottom.startX && G0 >= S0.bottom.endX && J[2] / (S0.bottom.endX - S0.bottom.startX) < r && J[2] / (S0.bottom.endX - S0.bottom.startX) > s;
                        });
                        z0.length > 0 ? z0[0].bottom = v0 : k.push({
                          top: v0,
                          bottom: v0
                        });
                      }
                    }
                  }, c0 = -1; c0 <= b.width; c0++) a0(c0);
                  _.push.apply(_, m.filter(function(r0) {
                    return r0.bottom.y !== G && r0.bottom.y - r0.top.y >= 2;
                  })), m = m.filter(function(r0) {
                    return r0.bottom.y === G;
                  }), D.push.apply(D, k.filter(function(r0) {
                    return r0.bottom.y !== G;
                  })), k = k.filter(function(r0) {
                    return r0.bottom.y === G;
                  });
                }, y = 0; y <= b.height; y++) w(y);
                _.push.apply(_, m.filter(function(G) {
                  return G.bottom.y - G.top.y >= 2;
                })), D.push.apply(D, k);
                var S = _.filter(function(G) {
                  return G.bottom.y - G.top.y >= 2;
                }).map(function(G) {
                  var j = (G.top.startX + G.top.endX + G.bottom.startX + G.bottom.endX) / 4, W = (G.top.y + G.bottom.y + 1) / 2;
                  if (b.get(Math.round(j), Math.round(W))) {
                    var J = [
                      G.top.endX - G.top.startX,
                      G.bottom.endX - G.bottom.startX,
                      G.bottom.y - G.top.y + 1
                    ], a0 = u(J) / J.length, c0 = F({
                      x: Math.round(j),
                      y: Math.round(W)
                    }, [
                      1,
                      1,
                      3,
                      1,
                      1
                    ], b);
                    return {
                      score: c0,
                      x: j,
                      y: W,
                      size: a0
                    };
                  }
                }).filter(function(G) {
                  return !!G;
                }).sort(function(G, j) {
                  return G.score - j.score;
                }).map(function(G, j, W) {
                  if (j > l) return null;
                  var J = W.filter(function(c0, r0) {
                    return j !== r0;
                  }).map(function(c0) {
                    return {
                      x: c0.x,
                      y: c0.y,
                      score: c0.score + Math.pow(c0.size - G.size, 2) / G.size,
                      size: c0.size
                    };
                  }).sort(function(c0, r0) {
                    return c0.score - r0.score;
                  });
                  if (J.length < 2) return null;
                  var a0 = G.score + J[0].score + J[1].score;
                  return {
                    points: [
                      G
                    ].concat(J.slice(0, 2)),
                    score: a0
                  };
                }).filter(function(G) {
                  return !!G;
                }).sort(function(G, j) {
                  return G.score - j.score;
                });
                if (S.length === 0) return null;
                var M = E(S[0].points[0], S[0].points[1], S[0].points[2]), I = M.topRight, L = M.topLeft, N = M.bottomLeft, q = v(b, D, I, L, N), R = [];
                q && R.push({
                  alignmentPattern: {
                    x: q.alignmentPattern.x,
                    y: q.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: N.x,
                    y: N.y
                  },
                  dimension: q.dimension,
                  topLeft: {
                    x: L.x,
                    y: L.y
                  },
                  topRight: {
                    x: I.x,
                    y: I.y
                  }
                });
                var O = p(b, I), H = p(b, L), Q = p(b, N), K = v(b, D, O, H, Q);
                return K && R.push({
                  alignmentPattern: {
                    x: K.alignmentPattern.x,
                    y: K.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: Q.x,
                    y: Q.y
                  },
                  topLeft: {
                    x: H.x,
                    y: H.y
                  },
                  topRight: {
                    x: O.x,
                    y: O.y
                  },
                  dimension: K.dimension
                }), R.length === 0 ? null : R;
              }
              n.locate = h;
              function v(b, _, m, D, k) {
                var w, y, S;
                try {
                  w = d(D, m, k, b), y = w.dimension, S = w.moduleSize;
                } catch {
                  return null;
                }
                var M = {
                  x: m.x - D.x + k.x,
                  y: m.y - D.y + k.y
                }, I = (a(D, k) + a(D, m)) / 2 / S, L = 1 - 3 / I, N = {
                  x: D.x + L * (M.x - D.x),
                  y: D.y + L * (M.y - D.y)
                }, q = _.map(function(O) {
                  var H = (O.top.startX + O.top.endX + O.bottom.startX + O.bottom.endX) / 4, Q = (O.top.y + O.bottom.y + 1) / 2;
                  if (b.get(Math.floor(H), Math.floor(Q))) {
                    var K = [
                      O.top.endX - O.top.startX,
                      O.bottom.endX - O.bottom.startX,
                      O.bottom.y - O.top.y + 1
                    ];
                    u(K) / K.length;
                    var G = F({
                      x: Math.floor(H),
                      y: Math.floor(Q)
                    }, [
                      1,
                      1,
                      1
                    ], b), j = G + a({
                      x: H,
                      y: Q
                    }, N);
                    return {
                      x: H,
                      y: Q,
                      score: j
                    };
                  }
                }).filter(function(O) {
                  return !!O;
                }).sort(function(O, H) {
                  return O.score - H.score;
                }), R = I >= 15 && q.length ? q[0] : N;
                return {
                  alignmentPattern: R,
                  dimension: y
                };
              }
            }
          ]).default;
        });
      })($l);
      var n8 = $l.exports;
      const o8 = Bc(n8);
      function Mo(x, e, t) {
        const n = x.slice();
        return n[44] = e[t], n;
      }
      function l8(x) {
        let e;
        return {
          c() {
            e = f("a"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', c(e, "class", "back-btn svelte-qzc8r5"), c(e, "href", "#/home");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function s8(x) {
        let e, t, n;
        return {
          c() {
            e = f("button"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', c(e, "class", "back-btn svelte-qzc8r5");
          },
          m(o, l) {
            T(o, e, l), t || (n = U(e, "click", x[17]), t = true);
          },
          p: Z,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function r8(x) {
        let e;
        return {
          c() {
            e = z("New encounter");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function a8(x) {
        let e;
        return {
          c() {
            e = z("Encounter saved");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function i8(x) {
        let e;
        return {
          c() {
            e = z("Join group");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function c8(x) {
        let e;
        return {
          c() {
            e = z("Confirm exchange");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function u8(x) {
        let e;
        return {
          c() {
            e = z("Scan their code");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function E8(x) {
        let e, t, n, o, l, s, r, a, u = x[13] ? "Saving\u2026" : "Join group", E, d, C, B, A, F;
        function p(b, _) {
          return b[12]?.name ? m8 : p8;
        }
        let h = p(x), v = h(x);
        return {
          c() {
            e = f("section"), t = f("p"), t.textContent = "Join group encounter?", n = g(), v.c(), o = g(), l = f("div"), s = f("button"), r = f("span"), r.textContent = "groups", a = g(), E = z(u), d = g(), C = f("button"), B = z("Cancel"), c(t, "class", "section-label svelte-qzc8r5"), c(r, "class", "material-icons svelte-qzc8r5"), c(s, "class", "btn-filled svelte-qzc8r5"), s.disabled = x[13], c(C, "class", "btn-text svelte-qzc8r5"), C.disabled = x[13], c(l, "class", "ongoing-actions svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(b, _) {
            T(b, e, _), i(e, t), i(e, n), v.m(e, null), i(e, o), i(e, l), i(l, s), i(s, r), i(s, a), i(s, E), i(l, d), i(l, C), i(C, B), A || (F = [
              U(s, "click", x[21]),
              U(C, "click", x[17])
            ], A = true);
          },
          p(b, _) {
            h === (h = p(b)) && v ? v.p(b, _) : (v.d(1), v = h(b), v && (v.c(), v.m(e, o))), _[0] & 8192 && u !== (u = b[13] ? "Saving\u2026" : "Join group") && V(E, u), _[0] & 8192 && (s.disabled = b[13]), _[0] & 8192 && (C.disabled = b[13]);
          },
          d(b) {
            b && P(e), v.d(), A = false, l0(F);
          }
        };
      }
      function f8(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p = x[13] && Lo();
        return {
          c() {
            e = f("section"), t = f("p"), t.textContent = "Ongoing relationship?", n = g(), o = f("p"), o.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", l = g(), s = f("div"), r = f("button"), a = f("span"), a.textContent = "favorite", u = z(`
          Yes, ongoing`), E = g(), d = f("button"), C = z("No, one off"), B = g(), p && p.c(), c(t, "class", "section-label svelte-qzc8r5"), c(o, "class", "help-text svelte-qzc8r5"), c(a, "class", "material-icons svelte-qzc8r5"), c(r, "class", "btn-filled svelte-qzc8r5"), r.disabled = x[13], c(d, "class", "btn-outlined svelte-qzc8r5"), d.disabled = x[13], c(s, "class", "ongoing-actions svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(e, n), i(e, o), i(e, l), i(e, s), i(s, r), i(r, a), i(r, u), i(s, E), i(s, d), i(d, C), i(e, B), p && p.m(e, null), A || (F = [
              U(r, "click", x[28]),
              U(d, "click", x[29])
            ], A = true);
          },
          p(h, v) {
            v[0] & 8192 && (r.disabled = h[13]), v[0] & 8192 && (d.disabled = h[13]), h[13] ? p || (p = Lo(), p.c(), p.m(e, null)) : p && (p.d(1), p = null);
          },
          d(h) {
            h && P(e), p && p.d(), A = false, l0(F);
          }
        };
      }
      function d8(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b, _, m, D = d0(x[11]), k = [];
        for (let y = 0; y < D.length; y += 1) k[y] = No(Mo(x, D, y));
        let w = x[13] && zo();
        return {
          c() {
            e = f("section"), t = f("p"), t.textContent = "Your partner's number", n = g(), o = f("p"), l = z(x[10]), s = g(), r = f("p"), r.textContent = "Ask your partner to confirm this matches their screen.", a = g(), u = f("section"), E = f("p"), E.textContent = "Let your partner scan your code", d = g(), C = f("div"), B = f("div"), A = g(), F = f("section"), p = f("p"), p.textContent = "What is your number?", h = g(), v = f("p"), v.textContent = "Tap the number shown on your screen above.", b = g(), _ = f("div");
            for (let y = 0; y < k.length; y += 1) k[y].c();
            m = g(), w && w.c(), c(t, "class", "section-label svelte-qzc8r5"), c(o, "class", "confirm-number svelte-qzc8r5"), c(r, "class", "help-text svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5"), c(E, "class", "section-label svelte-qzc8r5"), c(B, "class", "qr-inner svelte-qzc8r5"), c(C, "class", "qr-frame svelte-qzc8r5"), c(u, "class", "card pad svelte-qzc8r5"), c(p, "class", "section-label svelte-qzc8r5"), c(v, "class", "help-text svelte-qzc8r5"), c(_, "class", "choices svelte-qzc8r5"), c(F, "class", "card pad svelte-qzc8r5");
          },
          m(y, S) {
            T(y, e, S), i(e, t), i(e, n), i(e, o), i(o, l), i(e, s), i(e, r), T(y, a, S), T(y, u, S), i(u, E), i(u, d), i(u, C), i(C, B), B.innerHTML = x[3], T(y, A, S), T(y, F, S), i(F, p), i(F, h), i(F, v), i(F, b), i(F, _);
            for (let M = 0; M < k.length; M += 1) k[M] && k[M].m(_, null);
            i(F, m), w && w.m(F, null);
          },
          p(y, S) {
            if (S[0] & 1024 && V(l, y[10]), S[0] & 8 && (B.innerHTML = y[3]), S[0] & 272384) {
              D = d0(y[11]);
              let M;
              for (M = 0; M < D.length; M += 1) {
                const I = Mo(y, D, M);
                k[M] ? k[M].p(I, S) : (k[M] = No(I), k[M].c(), k[M].m(_, null));
              }
              for (; M < k.length; M += 1) k[M].d(1);
              k.length = D.length;
            }
            y[13] ? w || (w = zo(), w.c(), w.m(F, null)) : w && (w.d(1), w = null);
          },
          d(y) {
            y && (P(e), P(a), P(u), P(A), P(F)), j0(k, y), w && w.d();
          }
        };
      }
      function B8(x) {
        let e, t, n, o, l, s;
        return {
          c() {
            e = f("div"), t = f("video"), n = g(), o = f("canvas"), l = g(), s = f("div"), s.innerHTML = '<div class="scan-box svelte-qzc8r5"></div> <p class="scan-hint svelte-qzc8r5">Point at your partner&#39;s QR code</p>', t.playsInline = true, c(t, "class", "camera-video svelte-qzc8r5"), c(o, "class", "camera-canvas svelte-qzc8r5"), c(s, "class", "scan-overlay svelte-qzc8r5"), c(e, "class", "camera-wrap svelte-qzc8r5");
          },
          m(r, a) {
            T(r, e, a), i(e, t), x[25](t), i(e, n), i(e, o), x[26](o), i(e, l), i(e, s);
          },
          p: Z,
          d(r) {
            r && P(e), x[25](null), x[26](null);
          }
        };
      }
      function C8(x) {
        let e, t, n, o, l, s, r, a, u, E = x[14] ? "check" : "content_copy", d, C, B = x[14] ? "Copied!" : "Copy as text", A, F, p, h, v, b, _, m = x[7] ? "Hide" : "Enter code manually", D, k, w, y, S, M = x[6] && qo(x), I = x[9] && Ro(x);
        function L(O, H) {
          return O[3] ? v8 : h8;
        }
        let N = L(x), q = N(x), R = x[7] && Oo(x);
        return {
          c() {
            M && M.c(), e = g(), I && I.c(), t = g(), n = f("section"), o = f("p"), o.textContent = "Show this to your partner", l = g(), s = f("div"), q.c(), r = g(), a = f("button"), u = f("span"), d = z(E), C = g(), A = z(B), p = g(), h = f("div"), v = f("button"), v.innerHTML = `<span class="material-icons svelte-qzc8r5">qr_code_scanner</span>
        Scan Their Code`, b = g(), _ = f("button"), D = z(m), k = g(), R && R.c(), w = X0(), c(o, "class", "section-label svelte-qzc8r5"), c(s, "class", "qr-frame svelte-qzc8r5"), c(u, "class", "material-icons svelte-qzc8r5"), c(a, "class", "btn-copy svelte-qzc8r5"), a.disabled = F = !x[2], c(n, "class", "card pad svelte-qzc8r5"), c(v, "class", "btn-filled svelte-qzc8r5"), c(_, "class", "btn-text svelte-qzc8r5"), c(h, "class", "scan-actions svelte-qzc8r5");
          },
          m(O, H) {
            M && M.m(O, H), T(O, e, H), I && I.m(O, H), T(O, t, H), T(O, n, H), i(n, o), i(n, l), i(n, s), q.m(s, null), i(n, r), i(n, a), i(a, u), i(u, d), i(a, C), i(a, A), T(O, p, H), T(O, h, H), i(h, v), i(h, b), i(h, _), i(_, D), T(O, k, H), R && R.m(O, H), T(O, w, H), y || (S = [
              U(a, "click", x[20]),
              U(v, "click", x[15]),
              U(_, "click", x[22])
            ], y = true);
          },
          p(O, H) {
            O[6] ? M ? M.p(O, H) : (M = qo(O), M.c(), M.m(e.parentNode, e)) : M && (M.d(1), M = null), O[9] ? I ? I.p(O, H) : (I = Ro(O), I.c(), I.m(t.parentNode, t)) : I && (I.d(1), I = null), N === (N = L(O)) && q ? q.p(O, H) : (q.d(1), q = N(O), q && (q.c(), q.m(s, null))), H[0] & 16384 && E !== (E = O[14] ? "check" : "content_copy") && V(d, E), H[0] & 16384 && B !== (B = O[14] ? "Copied!" : "Copy as text") && V(A, B), H[0] & 4 && F !== (F = !O[2]) && (a.disabled = F), H[0] & 128 && m !== (m = O[7] ? "Hide" : "Enter code manually") && V(D, m), O[7] ? R ? R.p(O, H) : (R = Oo(O), R.c(), R.m(w.parentNode, w)) : R && (R.d(1), R = null);
          },
          d(O) {
            O && (P(e), P(t), P(n), P(p), P(h), P(k), P(w)), M && M.d(O), I && I.d(O), q.d(), R && R.d(O), y = false, l0(S);
          }
        };
      }
      function A8(x) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-qzc8r5">check_circle</span> <p class="saved-title svelte-qzc8r5">Encounter recorded</p> <p class="muted svelte-qzc8r5">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-qzc8r5">View encounters</a>', c(e, "class", "card pad saved-card svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function F8(x) {
        let e, t, n, o, l;
        return {
          c() {
            e = f("section"), t = f("p"), n = z(x[1]), o = g(), l = f("a"), l.textContent = "\u2190 Back", c(t, "class", "error svelte-qzc8r5"), c(l, "href", "#/home"), c(l, "class", "btn-text svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(s, r) {
            T(s, e, r), i(e, t), i(t, n), i(e, o), i(e, l);
          },
          p(s, r) {
            r[0] & 2 && V(n, s[1]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function D8(x) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = '<div class="spinner svelte-qzc8r5"></div> <p class="muted svelte-qzc8r5">Generating your code\u2026</p>', c(e, "class", "center-fill svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function p8(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Unnamed group encounter", c(e, "class", "help-text svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function m8(x) {
        let e, t = x[12].name + "", n;
        return {
          c() {
            e = f("p"), n = z(t), c(e, "class", "confirm-group-name svelte-qzc8r5");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l[0] & 4096 && t !== (t = o[12].name + "") && V(n, t);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Lo(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Saving\u2026", c(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function No(x) {
        let e, t = x[44] + "", n, o, l;
        function s() {
          return x[27](x[44]);
        }
        return {
          c() {
            e = f("button"), n = z(t), c(e, "class", "choice-btn svelte-qzc8r5"), e.disabled = x[13];
          },
          m(r, a) {
            T(r, e, a), i(e, n), o || (l = U(e, "click", s), o = true);
          },
          p(r, a) {
            x = r, a[0] & 2048 && t !== (t = x[44] + "") && V(n, t), a[0] & 8192 && (e.disabled = x[13]);
          },
          d(r) {
            r && P(e), o = false, l();
          }
        };
      }
      function zo(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Saving\u2026", c(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function qo(x) {
        let e, t, n, o;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "error_outline", n = g(), o = z(x[6]), c(t, "class", "material-icons svelte-qzc8r5"), c(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(l, s) {
            T(l, e, s), i(e, t), i(e, n), i(e, o);
          },
          p(l, s) {
            s[0] & 64 && V(o, l[6]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Ro(x) {
        let e, t, n, o;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "error_outline", n = g(), o = z(x[9]), c(t, "class", "material-icons svelte-qzc8r5"), c(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(l, s) {
            T(l, e, s), i(e, t), i(e, n), i(e, o);
          },
          p(l, s) {
            s[0] & 512 && V(o, l[9]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function h8(x) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Generating\u2026", c(e, "class", "muted svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function v8(x) {
        let e;
        return {
          c() {
            e = f("div"), c(e, "class", "qr-inner svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n), e.innerHTML = x[3];
          },
          p(t, n) {
            n[0] & 8 && (e.innerHTML = t[3]);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Oo(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C = x[9] && Ho(x);
        return {
          c() {
            e = f("section"), t = f("p"), t.textContent = "Paste their QR payload", n = g(), o = f("textarea"), l = g(), C && C.c(), s = g(), r = f("button"), a = z("Continue"), c(t, "class", "section-label svelte-qzc8r5"), c(o, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), c(o, "rows", "3"), c(o, "class", "svelte-qzc8r5"), c(r, "class", "btn-filled svelte-qzc8r5"), r.disabled = u = !x[8].trim(), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(B, A) {
            T(B, e, A), i(e, t), i(e, n), i(e, o), x0(o, x[8]), i(e, l), C && C.m(e, null), i(e, s), i(e, r), i(r, a), E || (d = [
              U(o, "input", x[23]),
              U(o, "keydown", x[24]),
              U(r, "click", x[16])
            ], E = true);
          },
          p(B, A) {
            A[0] & 256 && x0(o, B[8]), B[9] ? C ? C.p(B, A) : (C = Ho(B), C.c(), C.m(e, s)) : C && (C.d(1), C = null), A[0] & 256 && u !== (u = !B[8].trim()) && (r.disabled = u);
          },
          d(B) {
            B && P(e), C && C.d(), E = false, l0(d);
          }
        };
      }
      function Ho(x) {
        let e, t;
        return {
          c() {
            e = f("p"), t = z(x[9]), c(e, "class", "error-text svelte-qzc8r5");
          },
          m(n, o) {
            T(n, e, o), i(e, t);
          },
          p(n, o) {
            o[0] & 512 && V(t, n[9]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function _8(x) {
        let e, t, n, o, l, s, r, a;
        e = new ne({});
        function u(v, b) {
          return v[0] === "scanning" || v[0] === "confirm-group" ? s8 : l8;
        }
        let E = u(x), d = E(x);
        function C(v, b) {
          return v[0] === "scanning" ? u8 : v[0] === "confirm" || v[0] === "ongoing?" ? c8 : v[0] === "confirm-group" ? i8 : v[0] === "saved" ? a8 : r8;
        }
        let B = C(x), A = B(x);
        function F(v, b) {
          if (v[0] === "loading") return D8;
          if (v[0] === "error") return F8;
          if (v[0] === "saved") return A8;
          if (v[0] === "showQR") return C8;
          if (v[0] === "scanning") return B8;
          if (v[0] === "confirm") return d8;
          if (v[0] === "ongoing?") return f8;
          if (v[0] === "confirm-group") return E8;
        }
        let p = F(x), h = p && p(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), o = f("div"), d.c(), l = g(), s = f("h1"), A.c(), r = g(), h && h.c(), c(s, "class", "svelte-qzc8r5"), c(o, "class", "page-header svelte-qzc8r5"), c(n, "class", "svelte-qzc8r5");
          },
          m(v, b) {
            k0(e, v, b), T(v, t, b), T(v, n, b), i(n, o), d.m(o, null), i(o, l), i(o, s), A.m(s, null), i(n, r), h && h.m(n, null), a = true;
          },
          p(v, b) {
            E === (E = u(v)) && d ? d.p(v, b) : (d.d(1), d = E(v), d && (d.c(), d.m(o, l))), B !== (B = C(v)) && (A.d(1), A = B(v), A && (A.c(), A.m(s, null))), p === (p = F(v)) && h ? h.p(v, b) : (h && h.d(1), h = p && p(v), h && (h.c(), h.m(n, null)));
          },
          i(v) {
            a || (f0(e.$$.fragment, v), a = true);
          },
          o(v) {
            C0(e.$$.fragment, v), a = false;
          },
          d(v) {
            v && (P(t), P(n)), b0(e, v), d.d(), A.d(), h && h.d();
          }
        };
      }
      function rx(x) {
        return 10 + (x[1] * 256 + x[2]) % 90;
      }
      function Uo(x) {
        const e = /* @__PURE__ */ new Set([
          x
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((t, n) => t - n);
      }
      function k8(x, e, t) {
        let n = "loading", o = null, l = null, s = "", r = 0, a = "", u = null, E = null, d = null, C = null, B = null, A = false, F = false, p = "", h = null, v = null, b = null, _ = 0, m = [], D = null, k = "", w = null, y = "", S = false, M = false;
        N0(async () => {
          if (!V0()) {
            i0("/login");
            return;
          }
          try {
            const X = Nr(), n0 = ce(), u0 = Math.floor(Date.now() / 1e3);
            l = X.privateKey, r = rx(X.publicKey), t(2, s = `1|${Fe(X.publicKey)}|${u0}|${t0(n0)}`), t(3, a = await ve.toString(s, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#000000",
                light: "#ffffff"
              }
            })), t(0, n = "showQR");
          } catch (X) {
            t(1, o = X.message), t(0, n = "error");
          }
        }), Rt(() => {
          L();
        });
        async function I() {
          if (t(6, B = null), A = false, !navigator.mediaDevices?.getUserMedia) {
            t(6, B = "Camera not available. This page must be opened over HTTPS to use the camera."), t(0, n = "showQR");
            return;
          }
          t(0, n = "scanning"), await new Promise((X) => setTimeout(X, 50));
          try {
            d = await navigator.mediaDevices.getUserMedia({
              video: {
                facingMode: "environment",
                width: {
                  ideal: 1280
                },
                height: {
                  ideal: 720
                }
              }
            }), t(4, u.srcObject = d, u), await u.play(), N();
          } catch (X) {
            t(6, B = X.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + X.message), L(), t(0, n = "showQR");
          }
        }
        function L() {
          C && (cancelAnimationFrame(C), C = null), d && (d.getTracks().forEach((X) => X.stop()), d = null), A = false;
        }
        function N() {
          if (!d || !u || u.readyState < 2) {
            C = requestAnimationFrame(N);
            return;
          }
          const X = u.videoWidth, n0 = u.videoHeight;
          if (!X || !n0) {
            C = requestAnimationFrame(N);
            return;
          }
          t(5, E.width = X, E), t(5, E.height = n0, E);
          const u0 = E.getContext("2d");
          u0.drawImage(u, 0, 0, X, n0);
          const h0 = u0.getImageData(0, 0, X, n0), v0 = o8(h0.data, X, n0, {
            inversionAttempts: "dontInvert"
          });
          if (v0 && !A) {
            A = true, R(v0.data);
            return;
          }
          C = requestAnimationFrame(N);
        }
        function q(X) {
          const n0 = X.trim().split("|"), u0 = parseInt(n0[0], 10);
          if (!isNaN(u0) && u0 > 1) throw new Error("Your partner has a newer app version. Please update.");
          if (n0.length !== 4 || n0[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, h0, , v0] = n0;
          if (!h0 || h0.length < 10) throw new Error("Invalid QR payload");
          if (!v0 || v0.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: Fl(h0),
            contactIdBytes: L0(v0)
          };
        }
        function R(X) {
          const n0 = X.trim();
          if (n0.startsWith("2|")) {
            try {
              const u0 = Qx(n0);
              if (!u0) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - u0.timestamp > 86400) {
                A = false, C = requestAnimationFrame(N);
                return;
              }
              L(), t(12, D = u0), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), t(0, n = "confirm-group");
            } catch {
              A = false, C = requestAnimationFrame(N);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: u0, contactIdBytes: h0 } = q(X);
            if (t0(h0) === t0(ce())) {
              A = false, t(9, h = "You can't log an encounter with yourself."), t(0, n = "showQR");
              return;
            }
            L(), v = u0, b = h0, t(10, _ = rx(u0)), t(11, m = Uo(r)), t(0, n = "confirm");
          } catch {
            A = false, C = requestAnimationFrame(N);
          }
        }
        function O() {
          t(9, h = null);
          const X = p.trim();
          try {
            if (X.startsWith("2|")) {
              const n0 = Qx(X);
              if (!n0) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - n0.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              t(12, D = n0), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), t(0, n = "confirm-group"), t(7, F = false);
            } else {
              const { ephemeralPubkeyBytes: n0, contactIdBytes: u0 } = q(X);
              if (t0(u0) === t0(ce())) throw new Error("You can't log an encounter with yourself.");
              v = n0, b = u0, t(10, _ = rx(n0)), t(11, m = Uo(r)), t(0, n = "confirm"), t(7, F = false);
            }
          } catch (n0) {
            t(9, h = n0.message);
          }
        }
        function H() {
          L(), t(12, D = null), t(0, n = "showQR"), t(7, F = false), t(9, h = null), t(8, p = "");
        }
        async function Q(X) {
          if (X !== r) {
            t(9, h = "Wrong \u2014 that's not your number. Scan again."), t(0, n = "showQR"), t(7, F = false), t(8, p = ""), v = null, b = null;
            return;
          }
          const n0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          w = zr(l, v), y = n0;
          const v0 = te()?.encounters || [], z0 = Mx(), G0 = t0(b), q0 = v0.some((T0) => t0(T0.theirContactId) === G0), g0 = z0.some((T0) => t0(T0.theirContactId) === G0 && !T0.endedAt);
          q0 && !g0 ? t(0, n = "ongoing?") : await K(false);
        }
        async function K(X) {
          t(13, S = true);
          try {
            const n0 = ce(), u0 = Ae(w, n0, 0);
            await hl(t0(u0), y), X ? await wa(w, b, y) : await ba(w, b, y), t(0, n = "saved");
          } catch (n0) {
            t(1, o = n0.message), t(0, n = "error");
          } finally {
            t(13, S = false);
          }
        }
        async function G() {
          try {
            await navigator.clipboard.writeText(s), t(14, M = true), setTimeout(() => {
              t(14, M = false);
            }, 2e3);
          } catch {
          }
        }
        async function j() {
          t(13, S = true);
          try {
            const X = L0(D.groupTokenHex), n0 = L0(D.hostContactIdHex);
            await Ll(X, k, false, n0, D.name), t(0, n = "saved");
          } catch (X) {
            t(1, o = X.message), t(0, n = "error");
          } finally {
            t(13, S = false);
          }
        }
        const W = () => {
          t(7, F = !F), t(9, h = null);
        };
        function J() {
          p = this.value, t(8, p);
        }
        const a0 = (X) => X.key === "Enter" && !X.shiftKey && (X.preventDefault(), O());
        function c0(X) {
          kt[X ? "unshift" : "push"](() => {
            u = X, t(4, u);
          });
        }
        function r0(X) {
          kt[X ? "unshift" : "push"](() => {
            E = X, t(5, E);
          });
        }
        return [
          n,
          o,
          s,
          a,
          u,
          E,
          B,
          F,
          p,
          h,
          _,
          m,
          D,
          S,
          M,
          I,
          O,
          H,
          Q,
          K,
          G,
          j,
          W,
          J,
          a0,
          c0,
          r0,
          (X) => Q(X),
          () => K(true),
          () => K(false)
        ];
      }
      class b8 extends m0 {
        constructor(e) {
          super(), p0(this, e, k8, _8, F0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function g8(x) {
        let e, t, n, o, l, s, r = Ko(x[1].date) + "", a, u, E, d = x[0].rawTokenHex.slice(0, 12) + "", C, B, A, F, p, h, v, b, _, m, D = x[3] && jo(x), k = x[7] && Vo(x), w = x[5] && Go(x);
        return {
          c() {
            D && D.c(), e = g(), k && k.c(), t = g(), n = f("section"), o = f("div"), o.innerHTML = '<span class="material-icons status-icon svelte-nknqao">check_circle_outline</span> <span class="status-label svelte-nknqao">One-time encounter</span>', l = g(), s = f("p"), a = z(r), u = g(), E = f("p"), C = z(d), B = z("\u2026"), A = g(), F = f("section"), p = f("div"), p.innerHTML = '<span class="material-icons privacy-icon svelte-nknqao">lock_outline</span> <p class="privacy-text svelte-nknqao">Your note is stored encrypted and never shared.</p>', h = g(), v = f("textarea"), b = g(), w && w.c(), c(o, "class", "status-row svelte-nknqao"), c(s, "class", "date svelte-nknqao"), c(E, "class", "token svelte-nknqao"), c(n, "class", "card pad svelte-nknqao"), c(p, "class", "privacy-row svelte-nknqao"), c(v, "placeholder", "Add a private note\u2026"), c(v, "rows", "5"), c(v, "class", "svelte-nknqao"), c(F, "class", "card pad svelte-nknqao");
          },
          m(y, S) {
            D && D.m(y, S), T(y, e, S), k && k.m(y, S), T(y, t, S), T(y, n, S), i(n, o), i(n, l), i(n, s), i(s, a), i(n, u), i(n, E), i(E, C), i(E, B), T(y, A, S), T(y, F, S), i(F, p), i(F, h), i(F, v), x0(v, x[4]), i(F, b), w && w.m(F, null), _ || (m = [
              U(v, "input", x[13]),
              U(v, "input", x[8])
            ], _ = true);
          },
          p(y, S) {
            y[3] ? D ? D.p(y, S) : (D = jo(y), D.c(), D.m(e.parentNode, e)) : D && (D.d(1), D = null), y[7] ? k ? k.p(y, S) : (k = Vo(y), k.c(), k.m(t.parentNode, t)) : k && (k.d(1), k = null), S & 2 && r !== (r = Ko(y[1].date) + "") && V(a, r), S & 1 && d !== (d = y[0].rawTokenHex.slice(0, 12) + "") && V(C, d), S & 16 && x0(v, y[4]), y[5] ? w ? w.p(y, S) : (w = Go(y), w.c(), w.m(F, null)) : w && (w.d(1), w = null);
          },
          d(y) {
            y && (P(e), P(t), P(n), P(A), P(F)), D && D.d(y), k && k.d(y), w && w.d(), _ = false, l0(m);
          }
        };
      }
      function w8(x) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<p class="muted svelte-nknqao">This encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-nknqao">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-nknqao");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function jo(x) {
        let e, t, n, o;
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "error_outline", n = g(), o = z(x[3]), c(t, "class", "material-icons svelte-nknqao"), c(e, "class", "toast error-toast svelte-nknqao");
          },
          m(l, s) {
            T(l, e, s), i(e, t), i(e, n), i(e, o);
          },
          p(l, s) {
            s & 8 && V(o, l[3]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Vo(x) {
        let e, t, n, o, l, s, r, a, u, E = x[6] ? "Saving\u2026" : "Save note", d, C, B;
        return {
          c() {
            e = f("section"), t = f("p"), t.textContent = "You have unsaved changes to your note.", n = g(), o = f("div"), l = f("button"), l.textContent = "Keep editing", s = g(), r = f("button"), r.textContent = "Discard", a = g(), u = f("button"), d = z(E), c(t, "class", "confirm-text svelte-nknqao"), c(l, "class", "btn-text svelte-nknqao"), c(r, "class", "btn-text danger svelte-nknqao"), c(u, "class", "btn-filled-sm svelte-nknqao"), u.disabled = x[6], c(o, "class", "confirm-actions svelte-nknqao"), c(e, "class", "card pad leave-confirm svelte-nknqao");
          },
          m(A, F) {
            T(A, e, F), i(e, t), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(o, a), i(o, u), i(u, d), C || (B = [
              U(l, "click", x[12]),
              U(r, "click", x[11]),
              U(u, "click", x[10])
            ], C = true);
          },
          p(A, F) {
            F & 64 && E !== (E = A[6] ? "Saving\u2026" : "Save note") && V(d, E), F & 64 && (u.disabled = A[6]);
          },
          d(A) {
            A && P(e), C = false, l0(B);
          }
        };
      }
      function Go(x) {
        let e, t, n = x[6] ? "Saving\u2026" : "Save", o, l, s;
        return {
          c() {
            e = f("div"), t = f("button"), o = z(n), c(t, "class", "btn-filled-sm svelte-nknqao"), t.disabled = x[6], c(e, "class", "note-actions svelte-nknqao");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(t, o), l || (s = U(t, "click", x[9]), l = true);
          },
          p(r, a) {
            a & 64 && n !== (n = r[6] ? "Saving\u2026" : "Save") && V(o, n), a & 64 && (t.disabled = r[6]);
          },
          d(r) {
            r && P(e), l = false, s();
          }
        };
      }
      function y8(x) {
        let e, t, n, o, l, s, r, a = x[2] ? "Not found" : "Encounter", u, E, d;
        e = new ne({});
        function C(F, p) {
          if (F[2]) return w8;
          if (F[1]) return g8;
        }
        let B = C(x), A = B && B(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), n = f("main"), o = f("div"), l = f("a"), l.innerHTML = '<span class="material-icons svelte-nknqao">arrow_back</span>', s = g(), r = f("h1"), u = z(a), E = g(), A && A.c(), c(l, "class", "back-btn svelte-nknqao"), c(l, "href", "#/encounters"), c(r, "class", "svelte-nknqao"), c(o, "class", "page-header svelte-nknqao"), c(n, "class", "svelte-nknqao");
          },
          m(F, p) {
            k0(e, F, p), T(F, t, p), T(F, n, p), i(n, o), i(o, l), i(o, s), i(o, r), i(r, u), i(n, E), A && A.m(n, null), d = true;
          },
          p(F, [p]) {
            (!d || p & 4) && a !== (a = F[2] ? "Not found" : "Encounter") && V(u, a), B === (B = C(F)) && A ? A.p(F, p) : (A && A.d(1), A = B && B(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            d || (f0(e.$$.fragment, F), d = true);
          },
          o(F) {
            C0(e.$$.fragment, F), d = false;
          },
          d(F) {
            F && (P(t), P(n)), b0(e, F), A && A.d();
          }
        };
      }
      function Ko(x) {
        return x ? (/* @__PURE__ */ new Date(x + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function P8(x, e, t) {
        let { params: n = {} } = e, o = null, l = false, s = null, r = "", a = false, u = false, E = false, d = null;
        N0(() => {
          if (!V0()) {
            i0("/login");
            return;
          }
          A(), document.addEventListener("click", B, {
            capture: true
          }), window.addEventListener("beforeunload", C);
        }), Rt(() => {
          document.removeEventListener("click", B, {
            capture: true
          }), window.removeEventListener("beforeunload", C);
        });
        function C(D) {
          a && (D.preventDefault(), D.returnValue = "");
        }
        function B(D) {
          if (!a) return;
          const k = D.target.closest('a[href^="#/"]');
          k && (D.preventDefault(), D.stopImmediatePropagation(), d = k.getAttribute("href").slice(1), t(7, E = true));
        }
        function A() {
          const D = n.rawTokenHex;
          if (t(1, o = Sl().find((k) => t0(k.rawToken) === D) ?? null), !o) {
            t(2, l = true);
            return;
          }
          t(4, r = o.note ?? "");
        }
        function F() {
          t(5, a = r !== (o.note ?? ""));
        }
        async function p() {
          if (!(!a || u)) {
            t(6, u = true), t(3, s = null);
            try {
              const D = r.trim() || null;
              await ga(n.rawTokenHex, {
                note: D
              }), A(), t(5, a = false);
            } catch (D) {
              t(3, s = D.message);
            } finally {
              t(6, u = false);
            }
          }
        }
        async function h() {
          await p(), s || b();
        }
        function v() {
          t(4, r = o.note ?? ""), t(5, a = false), b();
        }
        function b() {
          t(7, E = false), i0(d);
        }
        const _ = () => t(7, E = false);
        function m() {
          r = this.value, t(4, r);
        }
        return x.$$set = (D) => {
          "params" in D && t(0, n = D.params);
        }, [
          n,
          o,
          l,
          s,
          r,
          a,
          u,
          E,
          F,
          p,
          h,
          v,
          _,
          m
        ];
      }
      class T8 extends m0 {
        constructor(e) {
          super(), p0(this, e, P8, y8, F0, {
            params: 0
          });
        }
      }
      function Yo(x, e, t) {
        const n = x.slice();
        return n[9] = e[t], n;
      }
      function Jo(x, e, t) {
        const n = x.slice();
        return n[12] = e[t], n;
      }
      function Qo(x) {
        let e;
        return {
          c() {
            e = f("div"), c(e, "class", "dot svelte-bn0o41"), e0(e, "filled", x[12] < x[0].length);
          },
          m(t, n) {
            T(t, e, n);
          },
          p(t, n) {
            n & 1 && e0(e, "filled", t[12] < t[0].length);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Wo(x) {
        let e, t, n;
        function o() {
          return x[6](x[9]);
        }
        return {
          c() {
            e = f("button"), e.textContent = `${x[9]}`, c(e, "class", "key svelte-bn0o41");
          },
          m(l, s) {
            T(l, e, s), t || (n = U(e, "click", o), t = true);
          },
          p(l, s) {
            x = l;
          },
          d(l) {
            l && P(e), t = false, n();
          }
        };
      }
      function S8(x) {
        let e, t, n, o, l, s, r, a, u, E, d, C, B, A, F, p, h, v, b, _, m, D, k = d0([
          0,
          1,
          2,
          3
        ]), w = [];
        for (let M = 0; M < 4; M += 1) w[M] = Qo(Jo(x, k, M));
        let y = d0([
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]), S = [];
        for (let M = 0; M < 9; M += 1) S[M] = Wo(Yo(x, y, M));
        return {
          c() {
            e = f("div"), t = f("div"), n = f("div"), n.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-bn0o41"/> <span class="brand-label"><span class="brand-peach svelte-bn0o41">Peach</span><span class="brand-safe svelte-bn0o41">Safe</span></span>', o = g(), l = f("p"), l.textContent = "Enter your PIN", s = g(), r = f("div");
            for (let M = 0; M < 4; M += 1) w[M].c();
            a = g(), u = f("p"), E = z(x[1]), d = g(), C = f("div");
            for (let M = 0; M < 9; M += 1) S[M].c();
            B = g(), A = f("button"), A.innerHTML = '<span class="material-icons svelte-bn0o41">backspace</span>', F = g(), p = f("button"), p.textContent = "0", h = g(), v = f("div"), b = g(), _ = f("button"), _.textContent = "Sign out", c(n, "class", "brand svelte-bn0o41"), c(l, "class", "prompt svelte-bn0o41"), c(r, "class", "dots svelte-bn0o41"), e0(r, "shake", x[2]), c(u, "class", "error-msg svelte-bn0o41"), c(A, "class", "key key-del svelte-bn0o41"), c(A, "aria-label", "Delete"), c(p, "class", "key svelte-bn0o41"), c(C, "class", "numpad svelte-bn0o41"), c(_, "class", "signout-link svelte-bn0o41"), c(t, "class", "lock-card svelte-bn0o41"), c(e, "class", "overlay svelte-bn0o41"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-label", "Enter PIN to unlock");
          },
          m(M, I) {
            T(M, e, I), i(e, t), i(t, n), i(t, o), i(t, l), i(t, s), i(t, r);
            for (let L = 0; L < 4; L += 1) w[L] && w[L].m(r, null);
            i(t, a), i(t, u), i(u, E), i(t, d), i(t, C);
            for (let L = 0; L < 9; L += 1) S[L] && S[L].m(C, null);
            i(C, B), i(C, A), i(C, F), i(C, p), i(C, h), i(C, v), i(t, b), i(t, _), m || (D = [
              U(A, "click", x[4]),
              U(p, "click", x[7]),
              U(_, "click", x[5])
            ], m = true);
          },
          p(M, [I]) {
            if (I & 1) {
              k = d0([
                0,
                1,
                2,
                3
              ]);
              let L;
              for (L = 0; L < 4; L += 1) {
                const N = Jo(M, k, L);
                w[L] ? w[L].p(N, I) : (w[L] = Qo(N), w[L].c(), w[L].m(r, null));
              }
              for (; L < 4; L += 1) w[L].d(1);
            }
            if (I & 4 && e0(r, "shake", M[2]), I & 2 && V(E, M[1]), I & 8) {
              y = d0([
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
              ]);
              let L;
              for (L = 0; L < 9; L += 1) {
                const N = Yo(M, y, L);
                S[L] ? S[L].p(N, I) : (S[L] = Wo(N), S[L].c(), S[L].m(C, B));
              }
              for (; L < 9; L += 1) S[L].d(1);
            }
          },
          i: Z,
          o: Z,
          d(M) {
            M && P(e), j0(w, M), j0(S, M), m = false, l0(D);
          }
        };
      }
      function I8(x, e, t) {
        let n = "", o = "", l = false;
        function s(C) {
          n.length >= 4 || l || (t(1, o = ""), t(0, n += C), n.length === 4 && a());
        }
        function r() {
          l || (t(0, n = n.slice(0, -1)), t(1, o = ""));
        }
        async function a() {
          n === qa() ? Ut.set(true) : (t(2, l = true), t(1, o = "Incorrect PIN"), await new Promise((C) => setTimeout(C, 600)), t(0, n = ""), t(2, l = false));
        }
        async function u() {
          await gx(), i0("/login");
        }
        return [
          n,
          o,
          l,
          s,
          r,
          u,
          (C) => s(String(C)),
          () => s("0")
        ];
      }
      class M8 extends m0 {
        constructor(e) {
          super(), p0(this, e, I8, S8, F0, {});
        }
      }
      function L8(x) {
        let e, t, n, o, l = x[7] !== null && !x[8] && x[11](x[0]), s, r, a, u;
        e = new Ds({
          props: {
            routes: x[10]
          }
        }), e.$on("routeLoaded", x[15]), n = new Jr({});
        let E = l && Xo(), d = x[9] === false && Zo(x), C = x[5] && $o(x);
        return {
          c() {
            w0(e.$$.fragment), t = g(), w0(n.$$.fragment), o = g(), E && E.c(), s = g(), d && d.c(), r = g(), C && C.c(), a = X0();
          },
          m(B, A) {
            k0(e, B, A), T(B, t, A), k0(n, B, A), T(B, o, A), E && E.m(B, A), T(B, s, A), d && d.m(B, A), T(B, r, A), C && C.m(B, A), T(B, a, A), u = true;
          },
          p(B, A) {
            A & 385 && (l = B[7] !== null && !B[8] && B[11](B[0])), l ? E ? A & 385 && f0(E, 1) : (E = Xo(), E.c(), f0(E, 1), E.m(s.parentNode, s)) : E && (qe(), C0(E, 1, 1, () => {
              E = null;
            }), Re()), B[9] === false ? d ? d.p(B, A) : (d = Zo(B), d.c(), d.m(r.parentNode, r)) : d && (d.d(1), d = null), B[5] ? C ? C.p(B, A) : (C = $o(B), C.c(), C.m(a.parentNode, a)) : C && (C.d(1), C = null);
          },
          i(B) {
            u || (f0(e.$$.fragment, B), f0(n.$$.fragment, B), f0(E), u = true);
          },
          o(B) {
            C0(e.$$.fragment, B), C0(n.$$.fragment, B), C0(E), u = false;
          },
          d(B) {
            B && (P(t), P(o), P(s), P(r), P(a)), b0(e, B), b0(n, B), E && E.d(B), d && d.d(B), C && C.d(B);
          }
        };
      }
      function N8(x) {
        let e;
        return {
          c() {
            e = f("main"), e.textContent = "Loading\u2026", c(e, "class", "loading svelte-1kqo0f9");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          i: Z,
          o: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function z8(x) {
        let e, t, n, o, l, s;
        return {
          c() {
            e = f("main"), t = f("p"), n = z("Failed to load crypto module: "), o = z(x[4]), l = g(), s = f("p"), s.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", c(e, "class", "error svelte-1kqo0f9");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(t, n), i(t, o), i(e, l), i(e, s);
          },
          p(r, a) {
            a & 16 && V(o, r[4]);
          },
          i: Z,
          o: Z,
          d(r) {
            r && P(e);
          }
        };
      }
      function Xo(x) {
        let e, t;
        return e = new M8({}), {
          c() {
            w0(e.$$.fragment);
          },
          m(n, o) {
            k0(e, n, o), t = true;
          },
          i(n) {
            t || (f0(e.$$.fragment, n), t = true);
          },
          o(n) {
            C0(e.$$.fragment, n), t = false;
          },
          d(n) {
            b0(e, n);
          }
        };
      }
      function Zo(x) {
        let e, t, n, o, l;
        function s(u, E) {
          return u[2] ? R8 : q8;
        }
        let r = s(x), a = r(x);
        return {
          c() {
            e = f("div"), t = f("span"), t.textContent = "mail_outline", n = g(), o = f("span"), o.textContent = "Please verify your email address. Check your inbox for a verification link.", l = g(), a.c(), c(t, "class", "material-icons svelte-1kqo0f9"), c(o, "class", "verify-text svelte-1kqo0f9"), c(e, "class", "verify-banner svelte-1kqo0f9");
          },
          m(u, E) {
            T(u, e, E), i(e, t), i(e, n), i(e, o), i(e, l), a.m(e, null);
          },
          p(u, E) {
            r === (r = s(u)) && a ? a.p(u, E) : (a.d(1), a = r(u), a && (a.c(), a.m(e, null)));
          },
          d(u) {
            u && P(e), a.d();
          }
        };
      }
      function q8(x) {
        let e, t = x[1] ? "Sending\u2026" : "Resend", n, o, l;
        return {
          c() {
            e = f("button"), n = z(t), c(e, "class", "resend-btn svelte-1kqo0f9"), e.disabled = x[1];
          },
          m(s, r) {
            T(s, e, r), i(e, n), o || (l = U(e, "click", x[12]), o = true);
          },
          p(s, r) {
            r & 2 && t !== (t = s[1] ? "Sending\u2026" : "Resend") && V(n, t), r & 2 && (e.disabled = s[1]);
          },
          d(s) {
            s && P(e), o = false, l();
          }
        };
      }
      function R8(x) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Sent!", c(e, "class", "resend-sent svelte-1kqo0f9");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: Z,
          d(t) {
            t && P(e);
          }
        };
      }
      function $o(x) {
        let e, t, n, o, l, s, r, a = Math.floor(x[6] / 60) + "", u, E, d = String(x[6] % 60).padStart(2, "0") + "", C, B, A, F, p, h, v, b, _;
        return {
          c() {
            e = f("div"), t = f("div"), n = f("h2"), n.textContent = "Session expiring", o = g(), l = f("p"), s = z(`You'll be logged out in
          `), r = f("strong"), u = z(a), E = z(":"), C = z(d), B = z(`
          due to inactivity.`), A = g(), F = f("div"), p = f("button"), p.textContent = "Stay logged in", h = g(), v = f("button"), v.textContent = "Log out now", c(n, "id", "idle-title"), c(n, "class", "svelte-1kqo0f9"), c(l, "class", "svelte-1kqo0f9"), c(p, "class", "btn-primary svelte-1kqo0f9"), c(v, "class", "btn-ghost svelte-1kqo0f9"), c(F, "class", "idle-actions svelte-1kqo0f9"), c(t, "class", "idle-dialog svelte-1kqo0f9"), c(e, "class", "idle-overlay svelte-1kqo0f9"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "idle-title");
          },
          m(m, D) {
            T(m, e, D), i(e, t), i(t, n), i(t, o), i(t, l), i(l, s), i(l, r), i(r, u), i(r, E), i(r, C), i(l, B), i(t, A), i(t, F), i(F, p), i(F, h), i(F, v), b || (_ = [
              U(p, "click", x[13]),
              U(v, "click", x[14])
            ], b = true);
          },
          p(m, D) {
            D & 64 && a !== (a = Math.floor(m[6] / 60) + "") && V(u, a), D & 64 && d !== (d = String(m[6] % 60).padStart(2, "0") + "") && V(C, d);
          },
          d(m) {
            m && P(e), b = false, l0(_);
          }
        };
      }
      function O8(x) {
        let e, t, n, o;
        const l = [
          z8,
          N8,
          L8
        ], s = [];
        function r(a, u) {
          return a[4] ? 0 : a[3] ? 2 : 1;
        }
        return e = r(x), t = s[e] = l[e](x), {
          c() {
            t.c(), n = X0();
          },
          m(a, u) {
            s[e].m(a, u), T(a, n, u), o = true;
          },
          p(a, [u]) {
            let E = e;
            e = r(a), e === E ? s[e].p(a, u) : (qe(), C0(s[E], 1, 1, () => {
              s[E] = null;
            }), Re(), t = s[e], t ? t.p(a, u) : (t = s[e] = l[e](a), t.c()), f0(t, 1), t.m(n.parentNode, n));
          },
          i(a) {
            o || (f0(t), o = true);
          },
          o(a) {
            C0(t), o = false;
          },
          d(a) {
            a && P(n), s[e].d(a);
          }
        };
      }
      const el = 120;
      function H8(x, e, t) {
        let n, o, l;
        O0(x, Tx, (D) => t(7, n = D)), O0(x, Ut, (D) => t(8, o = D)), O0(x, he, (D) => t(9, l = D));
        const s = {
          "/": ha,
          "/login": Za,
          "/signup": xi,
          "/home": ri,
          "/encounter-exchange": b8,
          "/encounters": Fi,
          "/encounters/:rawTokenHex": T8,
          "/relationships/:rawTokenHex": Si,
          "/groups/:tokenHex": f9,
          "/results": Ki,
          "/change-password": Qi,
          "/change-email": ec,
          "/verify-email/:token": sc,
          "/alerts": fc,
          "/settings": Q9,
          "/settings/2fa-setup": x8
        }, r = /* @__PURE__ */ new Set([
          "/",
          "/login",
          "/signup",
          "/home",
          "/encounter-exchange"
        ]);
        function a(D) {
          return V0() && !r.has(D) && !D.startsWith("/verify-email/");
        }
        let u = "/", E = false, d = false;
        async function C() {
          t(1, E = true);
          try {
            await ta(), t(2, d = true);
          } catch {
          } finally {
            t(1, E = false);
          }
        }
        let B = false, A = null, F = false, p = el, h = null;
        function v() {
          t(6, p = el), clearInterval(h), h = setInterval(() => {
            t(6, p -= 1), p <= 0 && clearInterval(h);
          }, 1e3);
        }
        function b() {
          t(5, F = false), clearInterval(h), Da();
        }
        async function _() {
          t(5, F = false), clearInterval(h), dx(), await gx(), i0("/login");
        }
        function m(D) {
          const k = D.detail.location;
          t(0, u = k), !(k === "/" || k === "/login" || k.startsWith("/signup")) && V0() ? Fa({
            onWarnCallback: () => {
              t(5, F = true), v();
            },
            onExpiredCallback: _
          }) : (dx(), t(5, F = false), clearInterval(h));
        }
        return N0(async () => {
          try {
            await Lr(), t(3, B = true);
          } catch (D) {
            t(4, A = D.message);
          }
        }), [
          u,
          E,
          d,
          B,
          A,
          F,
          p,
          n,
          o,
          l,
          s,
          a,
          C,
          b,
          _,
          m
        ];
      }
      class U8 extends m0 {
        constructor(e) {
          super(), p0(this, e, H8, O8, F0, {});
        }
      }
      "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
      new U8({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
