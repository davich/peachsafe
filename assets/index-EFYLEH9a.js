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
        function x(o) {
          const l = {};
          return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
        }
        function n(o) {
          if (o.ep) return;
          o.ep = true;
          const l = x(o);
          fetch(o.href, l);
        }
      })();
      function Z() {
      }
      function Qe(t, e) {
        for (const x in e) t[x] = e[x];
        return t;
      }
      function ro(t) {
        return t();
      }
      function ct() {
        return /* @__PURE__ */ Object.create(null);
      }
      function r0(t) {
        t.forEach(ro);
      }
      function Gx(t) {
        return typeof t == "function";
      }
      function m0(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
      }
      let Oe;
      function ut(t, e) {
        return t === e ? true : (Oe || (Oe = document.createElement("a")), Oe.href = e, t === Oe.href);
      }
      function ll(t) {
        return Object.keys(t).length === 0;
      }
      function ao(t, ...e) {
        if (t == null) {
          for (const n of e) n(void 0);
          return Z;
        }
        const x = t.subscribe(...e);
        return x.unsubscribe ? () => x.unsubscribe() : x;
      }
      function U0(t, e, x) {
        t.$$.on_destroy.push(ao(e, x));
      }
      function i(t, e) {
        t.appendChild(e);
      }
      function T(t, e, x) {
        t.insertBefore(e, x || null);
      }
      function P(t) {
        t.parentNode && t.parentNode.removeChild(t);
      }
      function Y0(t, e) {
        for (let x = 0; x < t.length; x += 1) t[x] && t[x].d(e);
      }
      function f(t) {
        return document.createElement(t);
      }
      function L(t) {
        return document.createTextNode(t);
      }
      function y() {
        return L(" ");
      }
      function z0() {
        return L("");
      }
      function R(t, e, x, n) {
        return t.addEventListener(e, x, n), () => t.removeEventListener(e, x, n);
      }
      function Z0(t) {
        return function(e) {
          return e.preventDefault(), t.call(this, e);
        };
      }
      function sl(t) {
        return function(e) {
          return e.stopPropagation(), t.call(this, e);
        };
      }
      function E(t, e, x) {
        x == null ? t.removeAttribute(e) : t.getAttribute(e) !== x && t.setAttribute(e, x);
      }
      function rl(t) {
        return Array.from(t.childNodes);
      }
      function O(t, e) {
        e = "" + e, t.data !== e && (t.data = e);
      }
      function x0(t, e) {
        t.value = e ?? "";
      }
      function l0(t, e, x) {
        t.classList.toggle(e, !!x);
      }
      function al(t, e, { bubbles: x = false, cancelable: n = false } = {}) {
        return new CustomEvent(t, {
          detail: e,
          bubbles: x,
          cancelable: n
        });
      }
      function We(t, e) {
        return new t(e);
      }
      let Pe;
      function _e(t) {
        Pe = t;
      }
      function ax() {
        if (!Pe) throw new Error("Function called outside component initialization");
        return Pe;
      }
      function L0(t) {
        ax().$$.on_mount.push(t);
      }
      function il(t) {
        ax().$$.after_update.push(t);
      }
      function ix(t) {
        ax().$$.on_destroy.push(t);
      }
      function cl() {
        const t = ax();
        return (e, x, { cancelable: n = false } = {}) => {
          const o = t.$$.callbacks[e];
          if (o) {
            const l = al(e, x, {
              cancelable: n
            });
            return o.slice().forEach((s) => {
              s.call(t, l);
            }), !l.defaultPrevented;
          }
          return true;
        };
      }
      function Sx(t, e) {
        const x = t.$$.callbacks[e.type];
        x && x.slice().forEach((n) => n.call(this, e));
      }
      const fe = [], Xe = [];
      let Be = [];
      const Et = [], io = Promise.resolve();
      let jx = false;
      function co() {
        jx || (jx = true, io.then(Eo));
      }
      function uo() {
        return co(), io;
      }
      function Mx(t) {
        Be.push(t);
      }
      const px = /* @__PURE__ */ new Set();
      let ce = 0;
      function Eo() {
        if (ce !== 0) return;
        const t = Pe;
        do {
          try {
            for (; ce < fe.length; ) {
              const e = fe[ce];
              ce++, _e(e), ul(e.$$);
            }
          } catch (e) {
            throw fe.length = 0, ce = 0, e;
          }
          for (_e(null), fe.length = 0, ce = 0; Xe.length; ) Xe.pop()();
          for (let e = 0; e < Be.length; e += 1) {
            const x = Be[e];
            px.has(x) || (px.add(x), x());
          }
          Be.length = 0;
        } while (fe.length);
        for (; Et.length; ) Et.pop()();
        jx = false, px.clear(), _e(t);
      }
      function ul(t) {
        if (t.fragment !== null) {
          t.update(), r0(t.before_update);
          const e = t.dirty;
          t.dirty = [
            -1
          ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Mx);
        }
      }
      function El(t) {
        const e = [], x = [];
        Be.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : x.push(n)), x.forEach((n) => n()), Be = e;
      }
      const Ge = /* @__PURE__ */ new Set();
      let te;
      function cx() {
        te = {
          r: 0,
          c: [],
          p: te
        };
      }
      function ux() {
        te.r || r0(te.c), te = te.p;
      }
      function C0(t, e) {
        t && t.i && (Ge.delete(t), t.i(e));
      }
      function v0(t, e, x, n) {
        if (t && t.o) {
          if (Ge.has(t)) return;
          Ge.add(t), te.c.push(() => {
            Ge.delete(t), n && (x && t.d(1), n());
          }), t.o(e);
        } else n && n();
      }
      function A0(t) {
        return t?.length !== void 0 ? t : Array.from(t);
      }
      function dl(t, e) {
        t.d(1), e.delete(t.key);
      }
      function fl(t, e, x, n, o, l, s, r, a, c, u, d) {
        let B = t.length, C = l.length, A = B;
        const F = {};
        for (; A--; ) F[t[A].key] = A;
        const h = [], D = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), b = [];
        for (A = C; A--; ) {
          const k = d(o, l, A), w = x(k);
          let g = s.get(w);
          g ? b.push(() => g.p(k, e)) : (g = c(w, k), g.c()), D.set(w, h[A] = g), w in F && m.set(w, Math.abs(A - F[w]));
        }
        const p = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
        function _(k) {
          C0(k, 1), k.m(r, u), s.set(k.key, k), u = k.first, C--;
        }
        for (; B && C; ) {
          const k = h[C - 1], w = t[B - 1], g = k.key, S = w.key;
          k === w ? (u = k.first, B--, C--) : D.has(S) ? !s.has(g) || p.has(g) ? _(k) : v.has(S) ? B-- : m.get(g) > m.get(S) ? (v.add(g), _(k)) : (p.add(S), B--) : (a(w, s), B--);
        }
        for (; B--; ) {
          const k = t[B];
          D.has(k.key) || a(k, s);
        }
        for (; C; ) _(h[C - 1]);
        return r0(b), h;
      }
      function Ze(t, e) {
        const x = {}, n = {}, o = {
          $$scope: 1
        };
        let l = t.length;
        for (; l--; ) {
          const s = t[l], r = e[l];
          if (r) {
            for (const a in s) a in r || (n[a] = 1);
            for (const a in r) o[a] || (x[a] = r[a], o[a] = 1);
            t[l] = r;
          } else for (const a in s) o[a] = 1;
        }
        for (const s in n) s in x || (x[s] = void 0);
        return x;
      }
      function $e(t) {
        return typeof t == "object" && t !== null ? t : {};
      }
      function S0(t) {
        t && t.c();
      }
      function g0(t, e, x) {
        const { fragment: n, after_update: o } = t.$$;
        n && n.m(e, x), Mx(() => {
          const l = t.$$.on_mount.map(ro).filter(Gx);
          t.$$.on_destroy ? t.$$.on_destroy.push(...l) : r0(l), t.$$.on_mount = [];
        }), o.forEach(Mx);
      }
      function y0(t, e) {
        const x = t.$$;
        x.fragment !== null && (El(x.after_update), r0(x.on_destroy), x.fragment && x.fragment.d(e), x.on_destroy = x.fragment = null, x.ctx = []);
      }
      function Bl(t, e) {
        t.$$.dirty[0] === -1 && (fe.push(t), co(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function _0(t, e, x, n, o, l, s = null, r = [
        -1
      ]) {
        const a = Pe;
        _e(t);
        const c = t.$$ = {
          fragment: null,
          ctx: [],
          props: l,
          update: Z,
          not_equal: o,
          bound: ct(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (a ? a.$$.context : [])),
          callbacks: ct(),
          dirty: r,
          skip_bound: false,
          root: e.target || a.$$.root
        };
        s && s(c.root);
        let u = false;
        if (c.ctx = x ? x(t, e.props || {}, (d, B, ...C) => {
          const A = C.length ? C[0] : B;
          return c.ctx && o(c.ctx[d], c.ctx[d] = A) && (!c.skip_bound && c.bound[d] && c.bound[d](A), u && Bl(t, d)), B;
        }) : [], c.update(), u = true, r0(c.before_update), c.fragment = n ? n(c.ctx) : false, e.target) {
          if (e.hydrate) {
            const d = rl(e.target);
            c.fragment && c.fragment.l(d), d.forEach(P);
          } else c.fragment && c.fragment.c();
          e.intro && C0(t.$$.fragment), g0(t, e.target, e.anchor), Eo();
        }
        _e(a);
      }
      class k0 {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          y0(this, 1), this.$destroy = Z;
        }
        $on(e, x) {
          if (!Gx(x)) return Z;
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(x), () => {
            const o = n.indexOf(x);
            o !== -1 && n.splice(o, 1);
          };
        }
        $set(e) {
          this.$$set && !ll(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const Cl = "4";
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add(Cl);
      const ue = [];
      function fo(t, e) {
        return {
          subscribe: J0(t, e).subscribe
        };
      }
      function J0(t, e = Z) {
        let x;
        const n = /* @__PURE__ */ new Set();
        function o(r) {
          if (m0(t, r) && (t = r, x)) {
            const a = !ue.length;
            for (const c of n) c[1](), ue.push(c, t);
            if (a) {
              for (let c = 0; c < ue.length; c += 2) ue[c][0](ue[c + 1]);
              ue.length = 0;
            }
          }
        }
        function l(r) {
          o(r(t));
        }
        function s(r, a = Z) {
          const c = [
            r,
            a
          ];
          return n.add(c), n.size === 1 && (x = e(o, l) || Z), r(t), () => {
            n.delete(c), n.size === 0 && x && (x(), x = null);
          };
        }
        return {
          set: o,
          update: l,
          subscribe: s
        };
      }
      function Bo(t, e, x) {
        const n = !Array.isArray(t), o = n ? [
          t
        ] : t;
        if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const l = e.length < 2;
        return fo(x, (s, r) => {
          let a = false;
          const c = [];
          let u = 0, d = Z;
          const B = () => {
            if (u) return;
            d();
            const A = e(n ? c[0] : c, s, r);
            l ? s(A) : d = Gx(A) ? A : Z;
          }, C = o.map((A, F) => ao(A, (h) => {
            c[F] = h, u &= ~(1 << F), a && B();
          }, () => {
            u |= 1 << F;
          }));
          return a = true, B(), function() {
            r0(C), d(), a = false;
          };
        });
      }
      function Al(t, e) {
        if (t instanceof RegExp) return {
          keys: false,
          pattern: t
        };
        var x, n, o, l, s = [], r = "", a = t.split("/");
        for (a[0] || a.shift(); o = a.shift(); ) x = o[0], x === "*" ? (s.push("wild"), r += "/(.*)") : x === ":" ? (n = o.indexOf("?", 1), l = o.indexOf(".", 1), s.push(o.substring(1, ~n ? n : ~l ? l : o.length)), r += ~n && !~l ? "(?:/([^/]+?))?" : "/([^/]+?)", ~l && (r += (~n ? "?" : "") + "\\" + o.substring(l))) : r += "/" + o;
        return {
          keys: s,
          pattern: new RegExp("^" + r + "/?$", "i")
        };
      }
      function Fl(t) {
        let e, x, n;
        const o = [
          t[2]
        ];
        var l = t[0];
        function s(r, a) {
          let c = {};
          for (let u = 0; u < o.length; u += 1) c = Qe(c, o[u]);
          return a !== void 0 && a & 4 && (c = Qe(c, Ze(o, [
            $e(r[2])
          ]))), {
            props: c
          };
        }
        return l && (e = We(l, s(t)), e.$on("routeEvent", t[7])), {
          c() {
            e && S0(e.$$.fragment), x = z0();
          },
          m(r, a) {
            e && g0(e, r, a), T(r, x, a), n = true;
          },
          p(r, a) {
            if (a & 1 && l !== (l = r[0])) {
              if (e) {
                cx();
                const c = e;
                v0(c.$$.fragment, 1, 0, () => {
                  y0(c, 1);
                }), ux();
              }
              l ? (e = We(l, s(r, a)), e.$on("routeEvent", r[7]), S0(e.$$.fragment), C0(e.$$.fragment, 1), g0(e, x.parentNode, x)) : e = null;
            } else if (l) {
              const c = a & 4 ? Ze(o, [
                $e(r[2])
              ]) : {};
              e.$set(c);
            }
          },
          i(r) {
            n || (e && C0(e.$$.fragment, r), n = true);
          },
          o(r) {
            e && v0(e.$$.fragment, r), n = false;
          },
          d(r) {
            r && P(x), e && y0(e, r);
          }
        };
      }
      function Dl(t) {
        let e, x, n;
        const o = [
          {
            params: t[1]
          },
          t[2]
        ];
        var l = t[0];
        function s(r, a) {
          let c = {};
          for (let u = 0; u < o.length; u += 1) c = Qe(c, o[u]);
          return a !== void 0 && a & 6 && (c = Qe(c, Ze(o, [
            a & 2 && {
              params: r[1]
            },
            a & 4 && $e(r[2])
          ]))), {
            props: c
          };
        }
        return l && (e = We(l, s(t)), e.$on("routeEvent", t[6])), {
          c() {
            e && S0(e.$$.fragment), x = z0();
          },
          m(r, a) {
            e && g0(e, r, a), T(r, x, a), n = true;
          },
          p(r, a) {
            if (a & 1 && l !== (l = r[0])) {
              if (e) {
                cx();
                const c = e;
                v0(c.$$.fragment, 1, 0, () => {
                  y0(c, 1);
                }), ux();
              }
              l ? (e = We(l, s(r, a)), e.$on("routeEvent", r[6]), S0(e.$$.fragment), C0(e.$$.fragment, 1), g0(e, x.parentNode, x)) : e = null;
            } else if (l) {
              const c = a & 6 ? Ze(o, [
                a & 2 && {
                  params: r[1]
                },
                a & 4 && $e(r[2])
              ]) : {};
              e.$set(c);
            }
          },
          i(r) {
            n || (e && C0(e.$$.fragment, r), n = true);
          },
          o(r) {
            e && v0(e.$$.fragment, r), n = false;
          },
          d(r) {
            r && P(x), e && y0(e, r);
          }
        };
      }
      function pl(t) {
        let e, x, n, o;
        const l = [
          Dl,
          Fl
        ], s = [];
        function r(a, c) {
          return a[1] ? 0 : 1;
        }
        return e = r(t), x = s[e] = l[e](t), {
          c() {
            x.c(), n = z0();
          },
          m(a, c) {
            s[e].m(a, c), T(a, n, c), o = true;
          },
          p(a, [c]) {
            let u = e;
            e = r(a), e === u ? s[e].p(a, c) : (cx(), v0(s[u], 1, 1, () => {
              s[u] = null;
            }), ux(), x = s[e], x ? x.p(a, c) : (x = s[e] = l[e](a), x.c()), C0(x, 1), x.m(n.parentNode, n));
          },
          i(a) {
            o || (C0(x), o = true);
          },
          o(a) {
            v0(x), o = false;
          },
          d(a) {
            a && P(n), s[e].d(a);
          }
        };
      }
      function dt() {
        const t = window.location.href.indexOf("#/");
        let e = t > -1 ? window.location.href.substr(t + 1) : "/";
        const x = e.indexOf("?");
        let n = "";
        return x > -1 && (n = e.substr(x + 1), e = e.substr(0, x)), {
          location: e,
          querystring: n
        };
      }
      const Kx = fo(null, function(e) {
        e(dt());
        const x = () => {
          e(dt());
        };
        return window.addEventListener("hashchange", x, false), function() {
          window.removeEventListener("hashchange", x, false);
        };
      }), ml = Bo(Kx, (t) => t.location);
      Bo(Kx, (t) => t.querystring);
      const ft = J0(void 0);
      async function i0(t) {
        if (!t || t.length < 1 || t.charAt(0) != "/" && t.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await uo(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (t.charAt(0) == "#" ? "" : "#") + t;
      }
      function hl(t) {
        t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function vl(t, e, x) {
        let { routes: n = {} } = e, { prefix: o = "" } = e, { restoreScrollState: l = false } = e;
        class s {
          constructor(v, _) {
            if (!_ || typeof _ != "function" && (typeof _ != "object" || _._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!v || typeof v == "string" && (v.length < 1 || v.charAt(0) != "/" && v.charAt(0) != "*") || typeof v == "object" && !(v instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: k, keys: w } = Al(v);
            this.path = v, typeof _ == "object" && _._sveltesparouter === true ? (this.component = _.component, this.conditions = _.conditions || [], this.userData = _.userData, this.props = _.props || {}) : (this.component = () => Promise.resolve(_), this.conditions = [], this.props = {}), this._pattern = k, this._keys = w;
          }
          match(v) {
            if (o) {
              if (typeof o == "string") if (v.startsWith(o)) v = v.substr(o.length) || "/";
              else return null;
              else if (o instanceof RegExp) {
                const g = v.match(o);
                if (g && g[0]) v = v.substr(g[0].length) || "/";
                else return null;
              }
            }
            const _ = this._pattern.exec(v);
            if (_ === null) return null;
            if (this._keys === false) return _;
            const k = {};
            let w = 0;
            for (; w < this._keys.length; ) {
              try {
                k[this._keys[w]] = decodeURIComponent(_[w + 1] || "") || null;
              } catch {
                k[this._keys[w]] = null;
              }
              w++;
            }
            return k;
          }
          async checkConditions(v) {
            for (let _ = 0; _ < this.conditions.length; _++) if (!await this.conditions[_](v)) return false;
            return true;
          }
        }
        const r = [];
        n instanceof Map ? n.forEach((p, v) => {
          r.push(new s(v, p));
        }) : Object.keys(n).forEach((p) => {
          r.push(new s(p, n[p]));
        });
        let a = null, c = null, u = {};
        const d = cl();
        async function B(p, v) {
          await uo(), d(p, v);
        }
        let C = null, A = null;
        l && (A = (p) => {
          p.state && (p.state.__svelte_spa_router_scrollY || p.state.__svelte_spa_router_scrollX) ? C = p.state : C = null;
        }, window.addEventListener("popstate", A), il(() => {
          hl(C);
        }));
        let F = null, h = null;
        const D = Kx.subscribe(async (p) => {
          F = p;
          let v = 0;
          for (; v < r.length; ) {
            const _ = r[v].match(p.location);
            if (!_) {
              v++;
              continue;
            }
            const k = {
              route: r[v].path,
              location: p.location,
              querystring: p.querystring,
              userData: r[v].userData,
              params: _ && typeof _ == "object" && Object.keys(_).length ? _ : null
            };
            if (!await r[v].checkConditions(k)) {
              x(0, a = null), h = null, B("conditionsFailed", k);
              return;
            }
            B("routeLoading", Object.assign({}, k));
            const w = r[v].component;
            if (h != w) {
              w.loading ? (x(0, a = w.loading), h = w, x(1, c = w.loadingParams), x(2, u = {}), B("routeLoaded", Object.assign({}, k, {
                component: a,
                name: a.name,
                params: c
              }))) : (x(0, a = null), h = null);
              const g = await w();
              if (p != F) return;
              x(0, a = g && g.default || g), h = w;
            }
            _ && typeof _ == "object" && Object.keys(_).length ? x(1, c = _) : x(1, c = null), x(2, u = r[v].props), B("routeLoaded", Object.assign({}, k, {
              component: a,
              name: a.name,
              params: c
            })).then(() => {
              ft.set(c);
            });
            return;
          }
          x(0, a = null), h = null, ft.set(void 0);
        });
        ix(() => {
          D(), A && window.removeEventListener("popstate", A);
        });
        function m(p) {
          Sx.call(this, t, p);
        }
        function b(p) {
          Sx.call(this, t, p);
        }
        return t.$$set = (p) => {
          "routes" in p && x(3, n = p.routes), "prefix" in p && x(4, o = p.prefix), "restoreScrollState" in p && x(5, l = p.restoreScrollState);
        }, t.$$.update = () => {
          t.$$.dirty & 32 && (history.scrollRestoration = l ? "manual" : "auto");
        }, [
          a,
          c,
          u,
          n,
          o,
          l,
          m,
          b
        ];
      }
      class _l extends k0 {
        constructor(e) {
          super(), _0(this, e, vl, pl, m0, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const kl = "/assets/peachsafe_core_wasm_bg-C8H6g175.wasm", bl = async (t = {}, e) => {
        let x;
        if (e.startsWith("data:")) {
          const n = e.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(n, "base64");
          else if (typeof atob == "function") {
            const l = atob(n);
            o = new Uint8Array(l.length);
            for (let s = 0; s < l.length; s++) o[s] = l.charCodeAt(s);
          } else throw new Error("Cannot decode base64-encoded data URL");
          x = await WebAssembly.instantiate(o, t);
        } else {
          const n = await fetch(e), o = n.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) x = await WebAssembly.instantiateStreaming(n, t);
          else {
            const l = await n.arrayBuffer();
            x = await WebAssembly.instantiate(l, t);
          }
        }
        return x.instance.exports;
      };
      function wl(t, e) {
        const x = f0.aesGcmDecrypt(t, e);
        if (x[2]) throw w0(x[1]);
        return w0(x[0]);
      }
      function gl(t, e) {
        const x = f0.aesGcmEncrypt(t, e);
        if (x[2]) throw w0(x[1]);
        return w0(x[0]);
      }
      function yl(t, e) {
        const x = Fo(t, f0.__wbindgen_malloc, f0.__wbindgen_realloc), n = ex, o = f0.argon2idDerive(x, n, e);
        if (o[2]) throw w0(o[1]);
        return w0(o[0]);
      }
      function Pl(t) {
        const e = f0.deriveAlertKey(t);
        if (e[2]) throw w0(e[1]);
        return w0(e[0]);
      }
      function Tl(t, e) {
        const x = f0.deriveEncounterToken(t, e);
        if (x[2]) throw w0(x[1]);
        return w0(x[0]);
      }
      function Sl(t) {
        const e = f0.ed25519PubkeyFromSeed(t);
        if (e[2]) throw w0(e[1]);
        return w0(e[0]);
      }
      function jl(t, e) {
        const x = f0.ed25519Sign(t, e);
        if (x[2]) throw w0(x[1]);
        return w0(x[0]);
      }
      function Ml() {
        const t = f0.generateEphemeralKeypair();
        if (t[2]) throw w0(t[1]);
        return w0(t[0]);
      }
      function Il(t) {
        return f0.generateRandomBytes(t);
      }
      function Co(t) {
        return f0.sha256(t);
      }
      function Ll(t, e, x) {
        const n = Fo(t, f0.__wbindgen_malloc, f0.__wbindgen_realloc), o = ex, l = f0.solvePoW(n, o, e, x);
        if (l[2]) throw w0(l[1]);
        return w0(l[0]);
      }
      function Nl(t) {
        return typeof t == "function";
      }
      function ql(t) {
        const e = t;
        return typeof e == "object" && e !== null;
      }
      function Rl(t) {
        return typeof t == "string";
      }
      function Ol(t) {
        return t === void 0;
      }
      function Hl(t, e) {
        throw new Error(Ao(t, e));
      }
      function Ul() {
        return Ie(function(t, e, x) {
          return t.call(e, x);
        }, arguments);
      }
      function zl(t) {
        return t.crypto;
      }
      function Vl() {
        return Ie(function(t, e) {
          t.getRandomValues(e);
        }, arguments);
      }
      function Gl(t) {
        return t.length;
      }
      function Kl(t) {
        return t.msCrypto;
      }
      function Yl() {
        return new Object();
      }
      function Jl(t) {
        return new Uint8Array(t >>> 0);
      }
      function Ql(t) {
        return t.node;
      }
      function Wl(t) {
        return t.process;
      }
      function Xl(t, e, x) {
        Uint8Array.prototype.set.call(Yx(t, e), x);
      }
      function Zl() {
        return Ie(function(t, e) {
          t.randomFillSync(e);
        }, arguments);
      }
      function $l() {
        return Ie(function() {
          return module.require;
        }, arguments);
      }
      function es() {
        return Ie(function(t, e, x) {
          return Reflect.set(t, e, x);
        }, arguments);
      }
      function xs(t, e, x) {
        t.set(Yx(e, x));
      }
      function ts() {
        const t = typeof global > "u" ? null : global;
        return Ex(t) ? 0 : Me(t);
      }
      function ns() {
        const t = typeof globalThis > "u" ? null : globalThis;
        return Ex(t) ? 0 : Me(t);
      }
      function os() {
        const t = typeof self > "u" ? null : self;
        return Ex(t) ? 0 : Me(t);
      }
      function ls() {
        const t = typeof window > "u" ? null : window;
        return Ex(t) ? 0 : Me(t);
      }
      function ss(t, e, x) {
        return t.subarray(e >>> 0, x >>> 0);
      }
      function rs(t) {
        return t.versions;
      }
      function as(t) {
        return t;
      }
      function is(t, e) {
        return Yx(t, e);
      }
      function cs(t, e) {
        return Ao(t, e);
      }
      function us() {
        const t = f0.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, true), t.set(e + 3, false);
      }
      function Me(t) {
        const e = f0.__externref_table_alloc();
        return f0.__wbindgen_externrefs.set(e, t), e;
      }
      function Yx(t, e) {
        return t = t >>> 0, ke().subarray(t / 1, t / 1 + e);
      }
      function Ao(t, e) {
        return t = t >>> 0, ds(t, e);
      }
      let He = null;
      function ke() {
        return (He === null || He.byteLength === 0) && (He = new Uint8Array(f0.memory.buffer)), He;
      }
      function Ie(t, e) {
        try {
          return t.apply(this, e);
        } catch (x) {
          const n = Me(x);
          f0.__wbindgen_exn_store(n);
        }
      }
      function Ex(t) {
        return t == null;
      }
      function Fo(t, e, x) {
        if (x === void 0) {
          const r = be.encode(t), a = e(r.length, 1) >>> 0;
          return ke().subarray(a, a + r.length).set(r), ex = r.length, a;
        }
        let n = t.length, o = e(n, 1) >>> 0;
        const l = ke();
        let s = 0;
        for (; s < n; s++) {
          const r = t.charCodeAt(s);
          if (r > 127) break;
          l[o + s] = r;
        }
        if (s !== n) {
          s !== 0 && (t = t.slice(s)), o = x(o, n, n = s + t.length * 3, 1) >>> 0;
          const r = ke().subarray(o + s, o + n), a = be.encodeInto(t, r);
          s += a.written, o = x(o, n, s, 1) >>> 0;
        }
        return ex = s, o;
      }
      function w0(t) {
        const e = f0.__wbindgen_externrefs.get(t);
        return f0.__externref_table_dealloc(t), e;
      }
      let Ke = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Ke.decode();
      const Es = 2146435072;
      let mx = 0;
      function ds(t, e) {
        return mx += e, mx >= Es && (Ke = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), Ke.decode(), mx = e), Ke.decode(ke().subarray(t, t + e));
      }
      const be = new TextEncoder();
      "encodeInto" in be || (be.encodeInto = function(t, e) {
        const x = be.encode(t);
        return e.set(x), {
          read: t.length,
          written: x.length
        };
      });
      let ex = 0, f0;
      function fs(t) {
        f0 = t;
      }
      URL = globalThis.URL;
      const Bs = await bl({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: zl,
          __wbg_process_44c7a14e11e9f69e: Wl,
          __wbg_versions_276b2795b1c6a219: rs,
          __wbg_node_84ea875411254db1: Ql,
          __wbg_require_b4edbdcf3e2a1ef0: $l,
          __wbg_call_a24592a6f349a97e: Ul,
          __wbg_msCrypto_bd5a034af96bcba6: Kl,
          __wbg_randomFillSync_6c25eac9869eb53c: Zl,
          __wbg_getRandomValues_c44a50d8cfdaebeb: Vl,
          __wbg_new_aa8d0fa9762c29bd: Yl,
          __wbg_length_9f1775224cf1d815: Gl,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: Xl,
          __wbg_new_with_length_8c854e41ea4dae9b: Jl,
          __wbg_subarray_f8ca46a25b1f5e0d: ss,
          __wbg_set_3d484eb794afec82: xs,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: ns,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: os,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: ts,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: ls,
          __wbg_set_022bee52d0b05b19: es,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: Hl,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: ql,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: Rl,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: Nl,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: Ol,
          __wbindgen_init_externref_table: us,
          __wbindgen_cast_0000000000000001: as,
          __wbindgen_cast_0000000000000002: is,
          __wbindgen_cast_0000000000000003: cs
        }
      }, kl), { memory: Cs, aesGcmDecrypt: As, aesGcmEncrypt: Fs, argon2idDerive: Ds, deriveAlertKey: ps, deriveEncounterToken: ms, ed25519PubkeyFromSeed: hs, ed25519Sign: vs, ed25519Verify: _s, generateEphemeralKeypair: ks, generateRandomBytes: bs, generateUserKeypair: ws, main: gs, serializePublicKey: ys, sha256: Ps, solvePoW: Ts, __wbindgen_exn_store: Ss, __externref_table_alloc: js, __wbindgen_externrefs: Ms, __externref_table_dealloc: Is, __wbindgen_malloc: Ls, __wbindgen_realloc: Ns, __wbindgen_free: qs, __wbindgen_start: Do } = Bs, Rs = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: js,
        __externref_table_dealloc: Is,
        __wbindgen_exn_store: Ss,
        __wbindgen_externrefs: Ms,
        __wbindgen_free: qs,
        __wbindgen_malloc: Ls,
        __wbindgen_realloc: Ns,
        __wbindgen_start: Do,
        aesGcmDecrypt: As,
        aesGcmEncrypt: Fs,
        argon2idDerive: Ds,
        deriveAlertKey: ps,
        deriveEncounterToken: ms,
        ed25519PubkeyFromSeed: hs,
        ed25519Sign: vs,
        ed25519Verify: _s,
        generateEphemeralKeypair: ks,
        generateRandomBytes: bs,
        generateUserKeypair: ws,
        main: gs,
        memory: Cs,
        serializePublicKey: ys,
        sha256: Ps,
        solvePoW: Ts
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      fs(Rs);
      Do();
      let Ix = false;
      async function Os() {
        Ix || (Ix = true);
      }
      function H0() {
        if (!Ix) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function T0(t) {
        const e = new Uint8Array(t.length / 2);
        for (let x = 0; x < t.length; x += 2) e[x / 2] = parseInt(t.slice(x, x + 2), 16);
        return e;
      }
      function t0(t) {
        return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function Le(t) {
        return H0(), Il(t);
      }
      async function X0(t, e) {
        return H0(), await new Promise((x) => setTimeout(x, 0)), yl(t, e);
      }
      function Ne(t, e) {
        return H0(), gl(t, e);
      }
      function dx(t, e) {
        return H0(), wl(t, e);
      }
      function Hs() {
        return H0(), Ml();
      }
      function Us(t, e) {
        return H0(), Tl(t, e);
      }
      function po(t) {
        return H0(), Sl(t);
      }
      function mo(t, e) {
        return H0(), jl(t, e);
      }
      function zs(t) {
        return H0(), Co(t);
      }
      function ho(t) {
        return H0(), Pl(t);
      }
      function Vs(t, e, x) {
        return H0(), Ll(t, e, x);
      }
      function oe(t) {
        let e = "";
        for (let x = 0; x < t.length; x++) e += String.fromCharCode(t[x]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function vo(t) {
        const x = (t + "===".slice((t.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(x), (n) => n.charCodeAt(0));
      }
      function Gs(t, e, x, n) {
        const o = n && n.trim() ? encodeURIComponent(n.trim()) : "";
        return `2|${t}|${e}|${x}|${o}`;
      }
      function Bt(t) {
        const e = t.split("|");
        if (!e.length || e[0] !== "2") return null;
        if (e.length < 4 || e.length > 5) throw new Error("Invalid group QR payload");
        const x = e[1], n = parseInt(e[2], 10), o = e[3], l = e.length === 5 && e[4] ? decodeURIComponent(e[4]) : null;
        if (isNaN(n) || x.length !== 64 || o.length !== 64) throw new Error("Invalid group QR payload");
        return {
          groupTokenHex: x,
          timestamp: n,
          hostContactIdHex: o,
          name: l
        };
      }
      function ne(t, e, x) {
        H0();
        const n = new Uint8Array(68);
        return n.set(t, 0), n.set(e, 32), n[64] = x >>> 24 & 255, n[65] = x >>> 16 & 255, n[66] = x >>> 8 & 255, n[67] = x & 255, Co(n);
      }
      const le = J0("ok");
      let _o = "ok";
      le.subscribe((t) => {
        _o = t;
      });
      let xx = null;
      function Ks() {
        clearTimeout(xx), le.set("retrying");
      }
      function Ys() {
        _o !== "ok" && (clearTimeout(xx), le.set("reconnected"), xx = setTimeout(() => le.set("ok"), 3e3));
      }
      function Ct() {
        clearTimeout(xx), le.set("down");
      }
      function At(t) {
        let e;
        function x(l, s) {
          if (l[0] === "retrying") return Ws;
          if (l[0] === "down") return Qs;
          if (l[0] === "reconnected") return Js;
        }
        let n = x(t), o = n && n(t);
        return {
          c() {
            e = f("div"), o && o.c(), E(e, "class", "banner svelte-1fvcw45"), E(e, "role", "status"), E(e, "aria-live", "polite"), l0(e, "retrying", t[0] === "retrying"), l0(e, "down", t[0] === "down"), l0(e, "reconnected", t[0] === "reconnected");
          },
          m(l, s) {
            T(l, e, s), o && o.m(e, null);
          },
          p(l, s) {
            n !== (n = x(l)) && (o && o.d(1), o = n && n(l), o && (o.c(), o.m(e, null))), s & 1 && l0(e, "retrying", l[0] === "retrying"), s & 1 && l0(e, "down", l[0] === "down"), s & 1 && l0(e, "reconnected", l[0] === "reconnected");
          },
          d(l) {
            l && P(e), o && o.d();
          }
        };
      }
      function Js(t) {
        let e;
        return {
          c() {
            e = L("Reconnected");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Qs(t) {
        let e;
        return {
          c() {
            e = L("Server unavailable. Please try again later.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Ws(t) {
        let e;
        return {
          c() {
            e = L("Server unreachable \u2014 retrying\u2026");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Xs(t) {
        let e, x = t[0] !== "ok" && At(t);
        return {
          c() {
            x && x.c(), e = z0();
          },
          m(n, o) {
            x && x.m(n, o), T(n, e, o);
          },
          p(n, [o]) {
            n[0] !== "ok" ? x ? x.p(n, o) : (x = At(n), x.c(), x.m(e.parentNode, e)) : x && (x.d(1), x = null);
          },
          i: Z,
          o: Z,
          d(n) {
            n && P(e), x && x.d(n);
          }
        };
      }
      function Zs(t, e, x) {
        let n;
        return U0(t, le, (o) => x(0, n = o)), [
          n
        ];
      }
      class $s extends k0 {
        constructor(e) {
          super(), _0(this, e, Zs, Xs, m0, {});
        }
      }
      const F0 = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", hx = [
        1e3,
        2e3,
        4e3
      ], Ft = /* @__PURE__ */ new Set([
        502,
        503,
        504
      ]);
      async function ee(t, e = {}) {
        const x = {
          ...e,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            ...e.headers ?? {}
          }
        };
        for (let n = 0; ; n++) {
          try {
            const o = await fetch(t, x);
            if (!Ft.has(o.status) || n >= hx.length) return Ft.has(o.status) ? Ct() : Ys(), o;
          } catch (o) {
            if (n >= hx.length) throw Ct(), o;
          }
          Ks(), await new Promise((o) => setTimeout(o, hx[n]));
        }
      }
      let se = null, Jx = null, Qx = null;
      const Te = "peachsafe_device_tokens";
      function er(t) {
        try {
          return JSON.parse(localStorage.getItem(Te) ?? "{}")[t] ?? null;
        } catch {
          return null;
        }
      }
      function xr(t, e) {
        try {
          const x = JSON.parse(localStorage.getItem(Te) ?? "{}");
          x[t] = e, localStorage.setItem(Te, JSON.stringify(x));
        } catch {
        }
      }
      function vx(t) {
        try {
          const e = JSON.parse(localStorage.getItem(Te) ?? "{}");
          delete e[t], localStorage.setItem(Te, JSON.stringify(e));
        } catch {
        }
      }
      const ae = J0(null), fx = J0(null), Se = J0(null), we = J0(null), tx = J0(null);
      function q0() {
        return se !== null;
      }
      function Wx(t) {
        Jx = t;
      }
      function re() {
        return Jx;
      }
      function ko(t) {
        Qx = t;
      }
      function Ye() {
        return Qx;
      }
      function bo() {
        se = null, Jx = null, Qx = null, ae.set(null), fx.set(null), Se.set(null), we.set(null), tx.set(null);
      }
      async function tr() {
        try {
          const t = await nr();
          ae.set(t.verified);
        } catch {
        }
      }
      async function nr() {
        const t = await M0(`${F0}/v1/web/user/email`);
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function or(t) {
        const e = await M0(`${F0}/v1/web/user/request-email-change`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            new_email: t
          })
        });
        if (!e.ok) throw new Error(await h0(e));
      }
      async function lr() {
        const t = await M0(`${F0}/v1/web/user/resend-verification`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await h0(t));
      }
      async function sr(t) {
        const e = await ee(`${F0}/v1/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t
          })
        });
        if (!e.ok) throw new Error(await h0(e));
        ae.set(true);
      }
      async function Xx(t) {
        const e = await ee(`${F0}/v1/prelogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: t
          })
        });
        if (!e.ok) throw new Error(await h0(e));
        return e.json();
      }
      async function rr(t, e, x) {
        const n = await ee(`${F0}/v1/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: t,
            email: e,
            public_key: x
          })
        });
        if (!n.ok) throw new Error(await h0(n));
        const o = await n.json();
        return se = o.session_token, ae.set(false), o;
      }
      async function Dt(t, e, x = null, n = false) {
        const o = {
          username: t,
          auth_signature: e
        };
        x && (o.otp = x), n && (o.remember_device = true);
        const l = er(t);
        l && (o.device_token = l);
        const s = await ee(`${F0}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(o)
        });
        if (!s.ok) throw new Error(await h0(s));
        const r = await s.json();
        return r.requires_otp || (se = r.session_token, r.device_token && xr(t, r.device_token), r.bootstrap ? (ae.set(r.bootstrap.email_verified), fx.set(r.bootstrap.email), Se.set(r.bootstrap.totp_enabled), we.set(r.bootstrap.trusted_devices ?? null), tx.set(r.bootstrap.backup_code_count ?? null)) : tr()), r;
      }
      async function ar() {
        const t = await M0(`${F0}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function ir(t, e) {
        const x = await M0(`${F0}/v1/web/totp/confirm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            secret: t,
            otp: e
          })
        });
        if (!x.ok) throw new Error(await h0(x));
        return x.json();
      }
      async function cr() {
        const t = await M0(`${F0}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await h0(t));
      }
      async function ur() {
        const t = await M0(`${F0}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function Er(t) {
        const e = await M0(`${F0}/v1/web/trusted-devices/${t}`, {
          method: "DELETE"
        });
        if (!e.ok) throw new Error(await h0(e));
      }
      async function dr() {
        const t = await M0(`${F0}/v1/web/trusted-devices`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await h0(t));
      }
      async function wo() {
        if (!se) return;
        const t = se;
        bo(), ee(`${F0}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${t}`
          }
        }).catch(() => {
        });
      }
      async function fr() {
        const t = await M0(`${F0}/v1/web/user/blob`);
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function Br(t, e) {
        const x = await M0(`${F0}/v1/web/user/blob`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            blob: t,
            expected_version: e
          })
        });
        if (!x.ok) throw new Error(await h0(x));
        return x.json();
      }
      async function go(t, e) {
        const x = await M0(`${F0}/v1/web/user/encounters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t,
            date: e
          })
        });
        if (!x.ok) throw new Error(await h0(x));
        return x.json();
      }
      async function Cr(t, e, x, n) {
        const o = await M0(`${F0}/v1/web/user/change-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            auth_signature: t,
            new_public_key: e,
            new_blob: x,
            expected_blob_version: n
          })
        });
        if (!o.ok) throw new Error(await h0(o));
      }
      async function Ar() {
        const t = await M0(`${F0}/v1/web/user`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await h0(t));
        bo();
      }
      async function Fr(t) {
        const e = await ee(`${F0}/v1/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            tokens: t
          })
        });
        if (!e.ok) throw new Error(await h0(e));
        return e.json();
      }
      async function Dr(t) {
        const e = await M0(`${F0}/v1/web/user/encounters/by-token/${t}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await h0(e));
      }
      async function pr(t) {
        const e = await ee(`${F0}/v1/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(t)
        }), x = e.headers.get("x-server-time"), n = e.headers.get("x-pow-difficulty"), o = n ? parseInt(n, 10) : null;
        if (e.status === 202) return {
          serverTime: x,
          powDifficulty: o
        };
        const l = await h0(e), s = new Error(l);
        throw s.statusCode = e.status, s.serverTime = x, s.powDifficulty = o, s;
      }
      function M0(t, e = {}) {
        return ee(t, {
          ...e,
          headers: {
            Authorization: `Bearer ${se}`,
            ...e.headers ?? {}
          }
        });
      }
      async function h0(t) {
        try {
          return (await t.json()).error ?? `HTTP ${t.status}`;
        } catch {
          return `HTTP ${t.status}`;
        }
      }
      const pt = 15 * 60 * 1e3, mr = 2 * 60 * 1e3, yo = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let Lx = null, Nx = null, Zx = null, $x = null, Bx = false, qe = false;
      function et() {
        clearTimeout(Lx), clearTimeout(Nx), Nx = setTimeout(() => {
          qe = true, Zx?.();
        }, pt - mr), Lx = setTimeout(() => $x?.(), pt);
      }
      function Po() {
        Bx && !qe && et();
      }
      function hr({ onWarnCallback: t, onExpiredCallback: e }) {
        qx(), Zx = t, $x = e, Bx = true, qe = false;
        for (const x of yo) document.addEventListener(x, Po, {
          passive: true
        });
        et();
      }
      function qx() {
        clearTimeout(Lx), clearTimeout(Nx);
        for (const t of yo) document.removeEventListener(t, Po);
        Bx = false, qe = false, Zx = null, $x = null;
      }
      function vr() {
        qe = false, Bx && et();
      }
      function _r(t) {
        let e;
        return {
          c() {
            e = f("main"), e.innerHTML = `<section class="hero svelte-jz8jaw"><div class="hero-brand svelte-jz8jaw"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="hero-icon svelte-jz8jaw"/> <span><span class="brand-peach svelte-jz8jaw">Peach</span><span class="brand-safe svelte-jz8jaw">Safe</span></span></div> <p class="hero-tagline svelte-jz8jaw">Know if you need to get tested \u2014 without anyone knowing who you slept with.</p> <p class="hero-sub svelte-jz8jaw">PeachSafe lets you notify past partners when you test positive for an STI,
      and get notified if a partner tests positive. No one ever learns who was
      with whom \u2014 not your partners, not us.</p> <div class="cta-buttons svelte-jz8jaw"><a href="#/signup" class="btn-primary svelte-jz8jaw">Sign up</a> <a href="#/login" class="btn-ghost svelte-jz8jaw">Log in</a></div></section> <section class="how-it-works svelte-jz8jaw"><h2 class="svelte-jz8jaw">How it works</h2> <div class="steps svelte-jz8jaw"><div class="step svelte-jz8jaw"><div class="step-number svelte-jz8jaw">1</div> <div class="step-body svelte-jz8jaw"><h3 class="svelte-jz8jaw">Exchange a code</h3> <p class="svelte-jz8jaw">Before a sexual encounter, both people scan each other&#39;s QR code. This generates a private, anonymous token that only the two of you share. Nothing identifying is stored or transmitted.</p></div></div> <div class="step svelte-jz8jaw"><div class="step-number svelte-jz8jaw">2</div> <div class="step-body svelte-jz8jaw"><h3 class="svelte-jz8jaw">Record a positive result</h3> <p class="svelte-jz8jaw">If you test positive, mark it in PeachSafe. Select what you tested positive for \u2014 notifications are specific, not vague.</p></div></div> <div class="step svelte-jz8jaw"><div class="step-number svelte-jz8jaw">3</div> <div class="step-body svelte-jz8jaw"><h3 class="svelte-jz8jaw">Partners are notified</h3> <p class="svelte-jz8jaw">PeachSafe notifies anyone who should know. If a past partner records a positive result, you&#39;ll receive an email. Neither of you learns the other&#39;s identity from the system.</p></div></div></div></section> <section class="privacy svelte-jz8jaw"><h2 class="svelte-jz8jaw">Why it&#39;s private</h2> <ul class="privacy-list svelte-jz8jaw"><li class="svelte-jz8jaw"><span class="material-icons svelte-jz8jaw">lock</span> <span>Your encounter data is encrypted \u2014 only you can access it</span></li> <li class="svelte-jz8jaw"><span class="material-icons svelte-jz8jaw">visibility_off</span> <span>The server is a blind message board; it can&#39;t connect notifications to real people</span></li> <li class="svelte-jz8jaw"><span class="material-icons svelte-jz8jaw">shuffle</span> <span>Queries are padded with noise so even traffic analysis reveals nothing</span></li> <li class="svelte-jz8jaw"><span class="material-icons svelte-jz8jaw">person_off</span> <span>No account is linked to your real name, phone number, or location</span></li></ul></section> <section class="who svelte-jz8jaw"><h2 class="svelte-jz8jaw">Who it&#39;s for</h2> <p class="svelte-jz8jaw">People who want to take sexual health seriously without the social and legal
      risks of conventional contact tracing \u2014 whether you&#39;re navigating dating apps,
      multiple partners, or just value your privacy.</p></section> <footer class="svelte-jz8jaw"><a href="#/signup" class="btn-primary svelte-jz8jaw">Sign up</a> <a href="#/login" class="btn-ghost svelte-jz8jaw">Log in</a></footer>`, E(e, "class", "svelte-jz8jaw");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          i: Z,
          o: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      class kr extends k0 {
        constructor(e) {
          super(), _0(this, e, null, _r, m0, {});
        }
      }
      const To = J0(false);
      function xt() {
        To.set((J?.receivedAlerts || []).some((t) => !t.viewed));
      }
      const br = 12 * 1024, So = br * 0.75, jo = J0(false), Mo = 18262, Io = 65535, wr = 45, K0 = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], ge = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, Lo = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function Ee(t) {
        const e = (/* @__PURE__ */ new Date(t + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - Mo;
      }
      function de(t) {
        const e = (Mo + t) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      function tt(t) {
        const e = t.encounters, x = t.results || [], n = t.receivedAlerts || [], o = t.relationships || [], l = t.groupEncounters || [], s = e.length, r = x.length, a = n.length, c = o.length, u = l.length, d = new TextEncoder(), B = (_) => _ ? d.encode(_).slice(0, 255) : new Uint8Array(0), C = e.map((_) => B(_.note)), A = o.map((_) => B(_.name)), F = l.map((_) => B(_.name)), h = l.map((_) => B(_.note)), D = e.reduce((_, k, w) => _ + 70 + 1 + C[w].length, 0), m = o.reduce((_, k, w) => _ + 73 + 1 + A[w].length, 0), b = l.reduce((_, k, w) => _ + 73 + 1 + F[w].length + 1 + h[w].length, 0), p = new Uint8Array(35 + D + 2 + r * 4 + 2 + a * 36 + 2 + m + 2 + b);
        let v = 0;
        p[v++] = 1, p.set(t.myContactId, v), v += 32, p[v++] = s >> 8 & 255, p[v++] = s & 255;
        for (let _ = 0; _ < s; _++) {
          const k = e[_];
          p.set(k.rawToken, v), v += 32, p.set(k.theirContactId, v), v += 32;
          const w = Ee(k.date);
          p[v++] = w >> 8 & 255, p[v++] = w & 255, p[v++] = k.queryIndex >> 8 & 255, p[v++] = k.queryIndex & 255, p[v++] = k.submitIndex >> 8 & 255, p[v++] = k.submitIndex & 255, p[v++] = C[_].length, p.set(C[_], v), v += C[_].length;
        }
        p[v++] = r >> 8 & 255, p[v++] = r & 255;
        for (const _ of x) {
          const k = Ee(_.date);
          p[v++] = k >> 8 & 255, p[v++] = k & 255, p[v++] = _.hasNotified ? 1 : 0;
          let w = 0;
          for (let g = 0; g < K0.length; g++) (_.positiveDiseases || []).includes(K0[g]) && (w |= 1 << g);
          p[v++] = w;
        }
        p[v++] = a >> 8 & 255, p[v++] = a & 255;
        for (const _ of n) {
          p.set(_.rawToken, v), v += 32;
          const k = Ee(_.testDate);
          p[v++] = k >> 8 & 255, p[v++] = k & 255;
          let w = 0;
          for (let S = 0; S < K0.length; S++) (_.diseases || []).includes(K0[S]) && (w |= 1 << S);
          p[v++] = w;
          let g = 0;
          _.viewed && (g |= 1), _.labVerified && (g |= 2), p[v++] = g;
        }
        p[v++] = c >> 8 & 255, p[v++] = c & 255;
        for (let _ = 0; _ < c; _++) {
          const k = o[_];
          p.set(k.rawToken, v), v += 32, p.set(k.theirContactId, v), v += 32;
          const w = Ee(k.createdAt);
          p[v++] = w >> 8 & 255, p[v++] = w & 255;
          const g = k.endedAt ? Ee(k.endedAt) : Io;
          p[v++] = g >> 8 & 255, p[v++] = g & 255;
          let S = 0;
          k.archived && (S |= 1), p[v++] = S, p[v++] = k.queryIndex >> 8 & 255, p[v++] = k.queryIndex & 255, p[v++] = k.submitIndex >> 8 & 255, p[v++] = k.submitIndex & 255, p[v++] = A[_].length, p.set(A[_], v), v += A[_].length;
        }
        p[v++] = u >> 8 & 255, p[v++] = u & 255;
        for (let _ = 0; _ < u; _++) {
          const k = l[_];
          p.set(k.token, v), v += 32;
          const w = Ee(k.date);
          p[v++] = w >> 8 & 255, p[v++] = w & 255;
          const g = k.createdAt >>> 0;
          p[v++] = g >>> 24 & 255, p[v++] = g >>> 16 & 255, p[v++] = g >>> 8 & 255, p[v++] = g & 255, p[v++] = k.isHost ? 1 : 0, p[v++] = k.tokenIndex >> 8 & 255, p[v++] = k.tokenIndex & 255, p.set(k.hostContactId, v), v += 32, p[v++] = F[_].length, p.set(F[_], v), v += F[_].length, p[v++] = h[_].length, p.set(h[_], v), v += h[_].length;
        }
        return p;
      }
      function gr(t) {
        let e = 0;
        const x = t[e++];
        if (x !== 1) throw new Error(`Unknown blob version: ${x}`);
        const n = t.slice(e, e + 32);
        e += 32;
        const o = t[e] << 8 | t[e + 1];
        e += 2;
        const l = [];
        for (let F = 0; F < o; F++) {
          const h = t.slice(e, e + 32);
          e += 32;
          const D = t.slice(e, e + 32);
          e += 32;
          const m = t[e] << 8 | t[e + 1];
          e += 2;
          const b = t[e] << 8 | t[e + 1];
          e += 2;
          const p = t[e] << 8 | t[e + 1];
          e += 2;
          const v = t[e++], _ = v > 0 ? new TextDecoder().decode(t.slice(e, e + v)) : null;
          e += v, l.push({
            rawToken: h,
            theirContactId: D,
            date: de(m),
            queryIndex: b,
            submitIndex: p,
            note: _
          });
        }
        const s = [], r = t[e] << 8 | t[e + 1];
        e += 2;
        for (let F = 0; F < r; F++) {
          const h = t[e] << 8 | t[e + 1];
          e += 2;
          const D = t[e++], m = t[e++], b = !!(D & 1), p = K0.filter((v, _) => m & 1 << _);
          s.push({
            date: de(h),
            hasNotified: b,
            positiveDiseases: p
          });
        }
        const a = [], c = t[e] << 8 | t[e + 1];
        e += 2;
        for (let F = 0; F < c; F++) {
          const h = t.slice(e, e + 32);
          e += 32;
          const D = t[e] << 8 | t[e + 1];
          e += 2;
          const m = t[e++], b = t[e++], p = K0.filter((k, w) => m & 1 << w), v = !!(b & 1), _ = !!(b & 2);
          a.push({
            rawToken: h,
            testDate: de(D),
            diseases: p,
            viewed: v,
            labVerified: _
          });
        }
        const u = [], d = t[e] << 8 | t[e + 1];
        e += 2;
        for (let F = 0; F < d; F++) {
          const h = t.slice(e, e + 32);
          e += 32;
          const D = t.slice(e, e + 32);
          e += 32;
          const m = t[e] << 8 | t[e + 1];
          e += 2;
          const b = t[e] << 8 | t[e + 1];
          e += 2;
          const p = t[e++], v = t[e] << 8 | t[e + 1];
          e += 2;
          const _ = t[e] << 8 | t[e + 1];
          e += 2;
          const k = t[e++], w = k > 0 ? new TextDecoder().decode(t.slice(e, e + k)) : null;
          e += k;
          const g = b === Io ? null : de(b), S = !!(p & 1);
          u.push({
            rawToken: h,
            theirContactId: D,
            createdAt: de(m),
            endedAt: g,
            archived: S,
            queryIndex: v,
            submitIndex: _,
            name: w
          });
        }
        const B = [], C = t[e] << 8 | t[e + 1];
        e += 2;
        const A = new TextDecoder();
        for (let F = 0; F < C; F++) {
          const h = t.slice(e, e + 32);
          e += 32;
          const D = t[e] << 8 | t[e + 1];
          e += 2;
          const m = (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
          e += 4;
          const b = t[e++], p = t[e] << 8 | t[e + 1];
          e += 2;
          const v = t.slice(e, e + 32);
          e += 32;
          const _ = t[e++], k = _ > 0 ? A.decode(t.slice(e, e + _)) : null;
          e += _;
          const w = t[e++], g = w > 0 ? A.decode(t.slice(e, e + w)) : null;
          e += w;
          const S = !!(b & 1);
          B.push({
            token: h,
            date: de(D),
            createdAt: m,
            isHost: S,
            tokenIndex: p,
            hostContactId: v,
            name: k,
            note: g
          });
        }
        return {
          myContactId: n,
          encounters: l,
          results: s,
          receivedAlerts: a,
          relationships: u,
          groupEncounters: B
        };
      }
      let J = null, Ae = 0, Rx = false;
      le.subscribe((t) => {
        t === "reconnected" && Rx && J && re() && j0().catch(() => {
        });
      });
      function G0() {
        return J;
      }
      function Fe() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.myContactId;
      }
      function Je() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.results || [];
      }
      function _x() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (J.receivedAlerts || []).map(({ testDate: t, diseases: e, viewed: x, labVerified: n }) => ({
          testDate: t,
          diseases: e,
          viewed: x,
          labVerified: n
        }));
      }
      function No() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.encounters || [];
      }
      function nt() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.relationships || [];
      }
      function qo() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.groupEncounters || [];
      }
      async function Ro(t = null) {
        const { blob: e, blob_version: x } = t ?? await fr();
        if (!e) {
          J = {
            myContactId: Le(32),
            encounters: [],
            results: [],
            receivedAlerts: [],
            relationships: [],
            groupEncounters: []
          }, Ae = 0, await j0();
          return;
        }
        const n = dx(re(), T0(e));
        J = gr(n), Ae = x, await zr(), xt();
      }
      async function yr(t, e, x) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        J = {
          ...J,
          encounters: [
            ...J.encounters,
            {
              rawToken: t,
              theirContactId: e,
              date: x,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        };
        try {
          await j0();
        } catch (n) {
          throw Ur(t, e, x), n;
        }
      }
      async function Pr(t, e) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (J.encounters || []).map((n) => t0(n.rawToken) === t ? {
          ...n,
          ...e
        } : n);
        J = {
          ...J,
          encounters: x
        }, await j0();
      }
      async function Tr(t, e, x) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        J = {
          ...J,
          relationships: [
            ...J.relationships || [],
            {
              rawToken: t,
              theirContactId: e,
              createdAt: x,
              endedAt: null,
              name: null,
              archived: false,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        }, await j0();
      }
      async function Oo(t, e, x, n, o) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const l = Math.floor(Date.now() / 1e3);
        J = {
          ...J,
          groupEncounters: [
            ...J.groupEncounters || [],
            {
              token: t,
              date: e,
              createdAt: l,
              isHost: x,
              tokenIndex: 0,
              hostContactId: n,
              name: o || null,
              note: null
            }
          ]
        }, await j0();
      }
      async function mt(t, e) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (J.groupEncounters || []).map((n) => t0(n.token) === t ? {
          ...n,
          ...e
        } : n);
        J = {
          ...J,
          groupEncounters: x
        }, await j0();
      }
      async function Sr(t) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (J.groupEncounters || []).filter((x) => t0(x.token) !== t);
        J = {
          ...J,
          groupEncounters: e
        }, await j0();
      }
      async function Ue(t, e) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (J.relationships || []).map((n) => t0(n.rawToken) === t ? {
          ...n,
          ...e
        } : n);
        J = {
          ...J,
          relationships: x
        }, await j0();
      }
      async function kx(t, e, x = false) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = (J.results || []).length;
        return J = {
          ...J,
          results: [
            ...J.results || [],
            {
              date: t,
              positiveDiseases: e,
              hasNotified: x
            }
          ]
        }, await j0(), n;
      }
      async function ht(t) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...J.results || []
        ];
        if (t >= e.length) throw new Error("Invalid result index");
        e[t] = {
          ...e[t],
          hasNotified: true
        }, J = {
          ...J,
          results: e
        }, await j0();
      }
      async function jr() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        J = {
          ...J,
          encounters: J.encounters.map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          })),
          relationships: (J.relationships || []).map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          }))
        }, await j0();
      }
      async function Mr(t, e, x, n) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let o = null;
        const l = J.encounters.map((a) => t0(a.rawToken) !== t ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        })), s = (J.relationships || []).map((a) => o || t0(a.rawToken) !== t ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        }));
        if (!o) throw new Error("Token not found: " + t);
        const r = [
          ...J.receivedAlerts || [],
          {
            rawToken: o,
            testDate: e,
            diseases: x,
            viewed: false,
            labVerified: !!n
          }
        ];
        J = {
          ...J,
          encounters: l,
          relationships: s,
          receivedAlerts: r
        }, await j0(), xt();
      }
      async function Ir(t) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...J.receivedAlerts || []
        ];
        if (t >= e.length) throw new Error("Invalid alert index");
        e[t] = {
          ...e[t],
          viewed: true
        }, J = {
          ...J,
          receivedAlerts: e
        }, await j0(), xt();
      }
      function Lr() {
        if (!J || tt(J).byteLength < So) return false;
        const e = ot();
        return J.encounters.filter((x) => x.date < e).length >= 5;
      }
      function Nr() {
        if (!J) return 0;
        const t = ot();
        return J.encounters.filter((e) => e.date < t).length;
      }
      async function qr() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = ot();
        J = {
          ...J,
          encounters: J.encounters.filter((e) => e.date >= t)
        }, await j0();
      }
      function ot() {
        const t = /* @__PURE__ */ new Date();
        return t.setUTCFullYear(t.getUTCFullYear() - 1), t.toISOString().slice(0, 10);
      }
      function Rr(t) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = Ne(t, tt(J));
        return {
          blobHex: t0(e),
          blobVersion: Ae
        };
      }
      function Or(t) {
        Ae = t;
      }
      function Hr(t, e) {
        if (!t.endedAt || !e) return true;
        const n = (/* @__PURE__ */ new Date(t.endedAt + "T00:00:00Z")).getTime() + wr * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < n;
      }
      const Ce = "peachsafe_pending_encounters";
      async function j0() {
        const t = tt(J);
        jo.set(t.byteLength >= So);
        const e = Ne(re(), t);
        Rx = false;
        try {
          const { blob_version: x } = await Br(t0(e), Ae);
          Ae = x;
          try {
            localStorage.removeItem(Ce);
          } catch {
          }
        } catch (x) {
          throw Rx = true, x;
        }
      }
      function Ur(t, e, x) {
        try {
          let n = [];
          const o = localStorage.getItem(Ce);
          if (o) try {
            n = JSON.parse(new TextDecoder().decode(dx(re(), T0(o))));
          } catch {
            n = [];
          }
          n.push({
            rawTokenHex: t0(t),
            theirContactIdHex: t0(e),
            date: x
          });
          const l = new TextEncoder().encode(JSON.stringify(n));
          localStorage.setItem(Ce, t0(Ne(re(), l)));
        } catch {
        }
      }
      async function zr() {
        let t;
        try {
          const e = localStorage.getItem(Ce);
          if (!e) return;
          t = JSON.parse(new TextDecoder().decode(dx(re(), T0(e))));
        } catch {
          try {
            localStorage.removeItem(Ce);
          } catch {
          }
          return;
        }
        if (!t.length) {
          try {
            localStorage.removeItem(Ce);
          } catch {
          }
          return;
        }
        for (const e of t) J = {
          ...J,
          encounters: [
            ...J.encounters,
            {
              rawToken: T0(e.rawTokenHex),
              theirContactId: T0(e.theirContactIdHex),
              date: e.date,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        };
        await j0();
      }
      let ve = null;
      function Ho() {
        return ve || (ve = Vr().finally(() => {
          ve = null;
        }), ve);
      }
      async function Vr() {
        const t = G0(), e = Fe();
        if (!t) return 0;
        const n = Je().filter((u) => u.positiveDiseases.length === 0).map((u) => u.date).sort().pop() ?? null, o = /* @__PURE__ */ new Map(), l = [];
        for (const u of t.encounters) {
          const d = ne(u.rawToken, e, u.queryIndex), B = oe(d);
          o.set(B, {
            rawTokenHex: t0(u.rawToken),
            alertDate: u.date
          }), l.push(B);
        }
        for (const u of t.relationships || []) {
          if (!Hr(u, n)) continue;
          const d = ne(u.rawToken, e, u.queryIndex), B = oe(d);
          o.set(B, {
            rawTokenHex: t0(u.rawToken),
            alertDate: u.createdAt
          }), l.push(B);
        }
        if (l.length === 0) return 0;
        const s = Math.max(50, l.length * 2), r = [
          ...l
        ];
        for (; r.length < s; ) r.push(oe(Le(32)));
        for (let u = r.length - 1; u > 0; u--) {
          const d = Math.floor(Math.random() * (u + 1));
          [r[u], r[d]] = [
            r[d],
            r[u]
          ];
        }
        const { matches: a } = await Fr(r);
        if (!a || a.length === 0) return 0;
        let c = 0;
        for (const u of a) {
          const d = o.get(u.token);
          if (!d) continue;
          const C = [
            ...G0().encounters || [],
            ...G0().relationships || []
          ].find((g) => t0(g.rawToken) === d.rawTokenHex);
          if (!C) continue;
          const A = ho(C.theirContactId);
          let F;
          try {
            F = dx(A, vo(u.encrypted_payload));
          } catch {
            continue;
          }
          const h = new TextDecoder().decode(F), D = h.slice(1, 9), m = `${D.slice(0, 4)}-${D.slice(4, 6)}-${D.slice(6, 8)}`, b = h.length > 9 ? h.slice(9).split(",") : [], p = Object.fromEntries(Object.entries(Lo).map(([g, S]) => [
            S,
            g
          ])), v = b.map((g) => p[g]).filter(Boolean), _ = t0(ne(C.rawToken, e, C.queryIndex));
          await Mr(d.rawTokenHex, m, v, u.verified), c++;
          const k = [
            ...G0().encounters || [],
            ...G0().relationships || []
          ].find((g) => t0(g.rawToken) === d.rawTokenHex), w = t0(ne(C.rawToken, e, k?.queryIndex ?? C.queryIndex + 1));
          try {
            await go(w, d.alertDate);
          } catch (g) {
            console.warn("alerts: could not register next query token:", g.message);
          }
          try {
            await Dr(_);
          } catch (g) {
            console.warn("alerts: could not delete old query token:", g.message);
          }
        }
        return c;
      }
      let Ox = "/home";
      function Gr(t) {
        Ox = t;
      }
      function vt() {
        const t = Ox;
        return Ox = "/home", t;
      }
      function Kr(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A, F = t[3] ? "Verifying\u2026" : "Verify", h, D, m, b, p = t[6] ? "Use authenticator app instead" : "Use a backup code instead", v, _, k;
        function w(j, I) {
          return j[6] ? Qr : Jr;
        }
        let g = w(t), S = g(t), M = t[4] && _t(t);
        return {
          c() {
            e = f("div"), x = f("button"), n = f("span"), n.textContent = "arrow_back", o = y(), l = f("span"), l.textContent = "Two-factor auth", s = y(), r = f("form"), S.c(), a = y(), c = f("label"), u = f("input"), d = L(`
          Remember this device`), B = y(), M && M.c(), C = y(), A = f("button"), h = L(F), m = y(), b = f("button"), v = L(p), E(n, "class", "material-icons svelte-1cvn5ws"), E(x, "type", "button"), E(x, "class", "back-btn svelte-1cvn5ws"), x.disabled = t[3], E(l, "class", "otp-title svelte-1cvn5ws"), E(e, "class", "otp-header svelte-1cvn5ws"), E(u, "type", "checkbox"), u.disabled = t[3], E(u, "class", "svelte-1cvn5ws"), E(c, "class", "remember-label svelte-1cvn5ws"), E(A, "type", "submit"), A.disabled = D = t[3] || !t[6] && t[2].length !== 6 || t[6] && t[2].length !== 14, E(A, "class", "svelte-1cvn5ws"), E(b, "type", "button"), E(b, "class", "backup-toggle svelte-1cvn5ws"), b.disabled = t[3], E(r, "class", "svelte-1cvn5ws");
          },
          m(j, I) {
            T(j, e, I), i(e, x), i(x, n), i(e, o), i(e, l), T(j, s, I), T(j, r, I), S.m(r, null), i(r, a), i(r, c), i(c, u), u.checked = t[7], i(c, d), i(r, B), M && M.m(r, null), i(r, C), i(r, A), i(A, h), i(r, m), i(r, b), i(b, v), _ || (k = [
              R(x, "click", t[16]),
              R(u, "change", t[22]),
              R(b, "click", t[17]),
              R(r, "submit", Z0(t[13]))
            ], _ = true);
          },
          p(j, I) {
            I & 8 && (x.disabled = j[3]), g === (g = w(j)) && S ? S.p(j, I) : (S.d(1), S = g(j), S && (S.c(), S.m(r, a))), I & 8 && (u.disabled = j[3]), I & 128 && (u.checked = j[7]), j[4] ? M ? M.p(j, I) : (M = _t(j), M.c(), M.m(r, C)) : M && (M.d(1), M = null), I & 8 && F !== (F = j[3] ? "Verifying\u2026" : "Verify") && O(h, F), I & 76 && D !== (D = j[3] || !j[6] && j[2].length !== 6 || j[6] && j[2].length !== 14) && (A.disabled = D), I & 64 && p !== (p = j[6] ? "Use authenticator app instead" : "Use a backup code instead") && O(v, p), I & 8 && (b.disabled = j[3]);
          },
          d(j) {
            j && (P(e), P(s), P(r)), S.d(), M && M.d(), _ = false, r0(k);
          }
        };
      }
      function Yr(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A = t[3] ? "Logging in\u2026" : "Log in", F, h, D, m = t[4] && kt(t);
        return {
          c() {
            e = f("div"), e.innerHTML = '<a href="#/login" class="tab active svelte-1cvn5ws">Log in</a> <a href="#/signup" class="tab svelte-1cvn5ws">Create account</a>', x = y(), n = f("form"), o = f("label"), l = L(`Username
          `), s = f("input"), r = y(), a = f("label"), c = L(`Password
          `), u = f("input"), d = y(), m && m.c(), B = y(), C = f("button"), F = L(A), E(e, "class", "tabs svelte-1cvn5ws"), E(s, "type", "text"), s.required = true, E(s, "autocomplete", "username"), E(s, "class", "svelte-1cvn5ws"), E(o, "class", "svelte-1cvn5ws"), E(u, "type", "password"), u.required = true, E(u, "autocomplete", "current-password"), E(u, "class", "svelte-1cvn5ws"), E(a, "class", "svelte-1cvn5ws"), E(C, "type", "submit"), C.disabled = t[3], E(C, "class", "svelte-1cvn5ws"), E(n, "class", "svelte-1cvn5ws");
          },
          m(b, p) {
            T(b, e, p), T(b, x, p), T(b, n, p), i(n, o), i(o, l), i(o, s), x0(s, t[0]), i(n, r), i(n, a), i(a, c), i(a, u), x0(u, t[1]), i(n, d), m && m.m(n, null), i(n, B), i(n, C), i(C, F), h || (D = [
              R(s, "input", t[18]),
              R(u, "input", t[19]),
              R(n, "submit", Z0(t[12]))
            ], h = true);
          },
          p(b, p) {
            p & 1 && s.value !== b[0] && x0(s, b[0]), p & 2 && u.value !== b[1] && x0(u, b[1]), b[4] ? m ? m.p(b, p) : (m = kt(b), m.c(), m.m(n, B)) : m && (m.d(1), m = null), p & 8 && A !== (A = b[3] ? "Logging in\u2026" : "Log in") && O(F, A), p & 8 && (C.disabled = b[3]);
          },
          d(b) {
            b && (P(e), P(x), P(n)), m && m.d(), h = false, r0(D);
          }
        };
      }
      function Jr(t) {
        let e, x, n, o, l, s, r;
        return {
          c() {
            e = f("p"), e.textContent = "Enter the 6-digit code from your authenticator app.", x = y(), n = f("label"), o = L(`Authenticator code
            `), l = f("input"), E(e, "class", "otp-prompt svelte-1cvn5ws"), E(l, "type", "text"), E(l, "inputmode", "numeric"), E(l, "pattern", "[0-9]*"), E(l, "maxlength", "6"), l.required = true, E(l, "autocomplete", "one-time-code"), E(l, "class", "svelte-1cvn5ws"), E(n, "class", "svelte-1cvn5ws");
          },
          m(a, c) {
            T(a, e, c), T(a, x, c), T(a, n, c), i(n, o), i(n, l), x0(l, t[2]), s || (r = R(l, "input", t[21]), s = true);
          },
          p(a, c) {
            c & 4 && l.value !== a[2] && x0(l, a[2]);
          },
          d(a) {
            a && (P(e), P(x), P(n)), s = false, r();
          }
        };
      }
      function Qr(t) {
        let e, x, n, o, l, s, r;
        return {
          c() {
            e = f("p"), e.textContent = "Enter one of your backup codes (xxxx-xxxx-xxxx).", x = y(), n = f("label"), o = L(`Backup code
            `), l = f("input"), E(e, "class", "otp-prompt svelte-1cvn5ws"), E(l, "type", "text"), E(l, "inputmode", "text"), E(l, "maxlength", "14"), l.required = true, E(l, "autocomplete", "off"), E(l, "placeholder", "xxxx-xxxx-xxxx"), E(l, "class", "svelte-1cvn5ws"), E(n, "class", "svelte-1cvn5ws");
          },
          m(a, c) {
            T(a, e, c), T(a, x, c), T(a, n, c), i(n, o), i(n, l), x0(l, t[2]), s || (r = R(l, "input", t[20]), s = true);
          },
          p(a, c) {
            c & 4 && l.value !== a[2] && x0(l, a[2]);
          },
          d(a) {
            a && (P(e), P(x), P(n)), s = false, r();
          }
        };
      }
      function _t(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[4]), E(e, "class", "error svelte-1cvn5ws");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && O(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function kt(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[4]), E(e, "class", "error svelte-1cvn5ws");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && O(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function bt(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Your password never leaves your device in plaintext.", E(e, "class", "privacy-note svelte-1cvn5ws");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function wt(t) {
        let e, x, n, o, l, s, r, a, c, u = t[9] === 1 ? "" : "s", d, B, C, A, F, h, D = t[10] ? "Deleting\u2026" : "Delete old encounters", m, b, p, v, _, k, w = t[11] && gt(t);
        return {
          c() {
            e = f("div"), x = f("div"), n = f("h2"), n.textContent = "Free up storage space", o = y(), l = f("p"), s = L(`Your account is using 75% or more of its storage limit.
        You have `), r = f("strong"), a = L(t[9]), c = L(" encounter"), d = L(u), B = L(` older
        than one year. Deleting them will free up space.`), C = y(), w && w.c(), A = y(), F = f("div"), h = f("button"), m = L(D), b = y(), p = f("button"), v = L("Keep them"), E(n, "id", "cleanup-title"), E(n, "class", "svelte-1cvn5ws"), E(l, "class", "svelte-1cvn5ws"), E(h, "class", "btn-primary svelte-1cvn5ws"), h.disabled = t[10], E(p, "class", "btn-ghost svelte-1cvn5ws"), p.disabled = t[10], E(F, "class", "cleanup-actions svelte-1cvn5ws"), E(x, "class", "cleanup-dialog svelte-1cvn5ws"), E(e, "class", "cleanup-overlay svelte-1cvn5ws"), E(e, "role", "dialog"), E(e, "aria-modal", "true"), E(e, "aria-labelledby", "cleanup-title");
          },
          m(g, S) {
            T(g, e, S), i(e, x), i(x, n), i(x, o), i(x, l), i(l, s), i(l, r), i(r, a), i(r, c), i(r, d), i(l, B), i(x, C), w && w.m(x, null), i(x, A), i(x, F), i(F, h), i(h, m), i(F, b), i(F, p), i(p, v), _ || (k = [
              R(h, "click", t[14]),
              R(p, "click", t[15])
            ], _ = true);
          },
          p(g, S) {
            S & 512 && O(a, g[9]), S & 512 && u !== (u = g[9] === 1 ? "" : "s") && O(d, u), g[11] ? w ? w.p(g, S) : (w = gt(g), w.c(), w.m(x, A)) : w && (w.d(1), w = null), S & 1024 && D !== (D = g[10] ? "Deleting\u2026" : "Delete old encounters") && O(m, D), S & 1024 && (h.disabled = g[10]), S & 1024 && (p.disabled = g[10]);
          },
          d(g) {
            g && P(e), w && w.d(), _ = false, r0(k);
          }
        };
      }
      function gt(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[11]), E(e, "class", "cleanup-error svelte-1cvn5ws");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 2048 && O(x, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Wr(t) {
        let e, x, n, o, l, s, r;
        function a(C, A) {
          return C[5] ? Kr : Yr;
        }
        let c = a(t), u = c(t), d = !t[5] && bt(), B = t[8] && wt(t);
        return {
          c() {
            e = f("main"), x = f("div"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1cvn5ws"/> <h1 class="svelte-1cvn5ws"><span class="brand-peach svelte-1cvn5ws">Peach</span><span class="brand-safe svelte-1cvn5ws">Safe</span></h1>', n = y(), o = f("div"), u.c(), l = y(), d && d.c(), s = y(), B && B.c(), r = z0(), E(x, "class", "brand svelte-1cvn5ws"), E(o, "class", "card svelte-1cvn5ws"), E(e, "class", "svelte-1cvn5ws");
          },
          m(C, A) {
            T(C, e, A), i(e, x), i(e, n), i(e, o), u.m(o, null), i(e, l), d && d.m(e, null), T(C, s, A), B && B.m(C, A), T(C, r, A);
          },
          p(C, [A]) {
            c === (c = a(C)) && u ? u.p(C, A) : (u.d(1), u = c(C), u && (u.c(), u.m(o, null))), C[5] ? d && (d.d(1), d = null) : d || (d = bt(), d.c(), d.m(e, null)), C[8] ? B ? B.p(C, A) : (B = wt(C), B.c(), B.m(r.parentNode, r)) : B && (B.d(1), B = null);
          },
          i: Z,
          o: Z,
          d(C) {
            C && (P(e), P(s), P(r)), u.d(), d && d.d(), B && B.d(C);
          }
        };
      }
      function Xr(t, e, x) {
        let n = "", o = "", l = "", s = false, r = null, a = false, c = false, u = false, d = null, B = null, C = false, A = 0, F = "", h = false, D = null;
        async function m() {
          x(4, r = null), x(3, s = true);
          try {
            const { challenge: N, auth_salt: q, enc_salt: G } = await Xx(n), U = await X0(o, T0(q)), Y = mo(new TextEncoder().encode(N), U), Q = btoa(String.fromCharCode(...Y)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), H = await Dt(n, Q);
            if (H.requires_otp) {
              d = Q, B = G, x(5, a = true);
              return;
            }
            await p(G, H);
          } catch (N) {
            x(4, r = N.message);
          } finally {
            x(3, s = false);
          }
        }
        async function b() {
          x(4, r = null), x(3, s = true);
          try {
            const N = await Dt(n, d, l, u);
            await p(B, N);
          } catch (N) {
            x(4, r = N.message);
          } finally {
            x(3, s = false);
          }
        }
        async function p(N, q) {
          ko(n);
          const G = await X0(o, T0(N));
          Wx(G), await Ro(q.bootstrap ?? null), Ho().catch(() => {
          }), Lr() ? (x(9, A = Nr()), F = vt(), x(8, C = true)) : i0(vt());
        }
        async function v() {
          x(11, D = null), x(10, h = true);
          try {
            await qr(), x(8, C = false), i0(F);
          } catch (N) {
            x(11, D = N.message);
          } finally {
            x(10, h = false);
          }
        }
        function _() {
          x(8, C = false), i0(F);
        }
        function k() {
          x(5, a = false), x(2, l = ""), d = null, B = null, x(4, r = null), x(6, c = false), x(7, u = false);
        }
        function w() {
          x(6, c = !c), x(2, l = ""), x(4, r = null);
        }
        function g() {
          n = this.value, x(0, n);
        }
        function S() {
          o = this.value, x(1, o);
        }
        function M() {
          l = this.value, x(2, l);
        }
        function j() {
          l = this.value, x(2, l);
        }
        function I() {
          u = this.checked, x(7, u);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          c,
          u,
          C,
          A,
          h,
          D,
          m,
          b,
          v,
          _,
          k,
          w,
          g,
          S,
          M,
          j,
          I
        ];
      }
      class Zr extends k0 {
        constructor(e) {
          super(), _0(this, e, Xr, Wr, m0, {});
        }
      }
      function yt(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[6]), E(e, "class", "error svelte-oivphc");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 64 && O(x, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function $r(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A, F, h, D, m, b, p, v, _, k, w, g, S, M, j, I, N = t[5] ? "Creating account\u2026" : "Create account", q, G, U, Y, Q, H = t[6] && yt(t);
        return {
          c() {
            e = f("main"), x = f("div"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-oivphc"/> <h1 class="svelte-oivphc"><span class="brand-peach svelte-oivphc">Peach</span><span class="brand-safe svelte-oivphc">Safe</span></h1>', n = y(), o = f("div"), l = f("div"), l.innerHTML = '<a href="#/login" class="tab svelte-oivphc">Log in</a> <a href="#/signup" class="tab active svelte-oivphc">Create account</a>', s = y(), r = f("form"), a = f("label"), c = L(`Beta code
        `), u = f("input"), d = y(), B = f("label"), C = L(`Username
        `), A = f("input"), F = y(), h = f("label"), D = L(`Email
        `), m = f("input"), b = y(), p = f("label"), v = L(`Password
        `), _ = f("input"), k = y(), w = f("label"), g = L(`Confirm password
        `), S = f("input"), M = y(), H && H.c(), j = y(), I = f("button"), q = L(N), G = y(), U = f("p"), U.textContent = "Your password never leaves your device in plaintext.", E(x, "class", "brand svelte-oivphc"), E(l, "class", "tabs svelte-oivphc"), E(u, "type", "text"), u.required = true, E(u, "autocomplete", "off"), E(u, "class", "svelte-oivphc"), E(a, "class", "svelte-oivphc"), E(A, "type", "text"), A.required = true, E(A, "autocomplete", "username"), E(A, "class", "svelte-oivphc"), E(B, "class", "svelte-oivphc"), E(m, "type", "email"), m.required = true, E(m, "autocomplete", "email"), E(m, "class", "svelte-oivphc"), E(h, "class", "svelte-oivphc"), E(_, "type", "password"), _.required = true, E(_, "autocomplete", "new-password"), E(_, "minlength", "12"), E(_, "class", "svelte-oivphc"), E(p, "class", "svelte-oivphc"), E(S, "type", "password"), S.required = true, E(S, "autocomplete", "new-password"), E(S, "class", "svelte-oivphc"), E(w, "class", "svelte-oivphc"), E(I, "type", "submit"), I.disabled = t[5], E(I, "class", "svelte-oivphc"), E(r, "class", "svelte-oivphc"), E(o, "class", "card svelte-oivphc"), E(U, "class", "privacy-note svelte-oivphc"), E(e, "class", "svelte-oivphc");
          },
          m(z, V) {
            T(z, e, V), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(r, a), i(a, c), i(a, u), x0(u, t[4]), i(r, d), i(r, B), i(B, C), i(B, A), x0(A, t[0]), i(r, F), i(r, h), i(h, D), i(h, m), x0(m, t[1]), i(r, b), i(r, p), i(p, v), i(p, _), x0(_, t[2]), i(r, k), i(r, w), i(w, g), i(w, S), x0(S, t[3]), i(r, M), H && H.m(r, null), i(r, j), i(r, I), i(I, q), i(e, G), i(e, U), Y || (Q = [
              R(u, "input", t[8]),
              R(A, "input", t[9]),
              R(m, "input", t[10]),
              R(_, "input", t[11]),
              R(S, "input", t[12]),
              R(r, "submit", Z0(t[7]))
            ], Y = true);
          },
          p(z, [V]) {
            V & 16 && u.value !== z[4] && x0(u, z[4]), V & 1 && A.value !== z[0] && x0(A, z[0]), V & 2 && m.value !== z[1] && x0(m, z[1]), V & 4 && _.value !== z[2] && x0(_, z[2]), V & 8 && S.value !== z[3] && x0(S, z[3]), z[6] ? H ? H.p(z, V) : (H = yt(z), H.c(), H.m(r, j)) : H && (H.d(1), H = null), V & 32 && N !== (N = z[5] ? "Creating account\u2026" : "Create account") && O(q, N), V & 32 && (I.disabled = z[5]);
          },
          i: Z,
          o: Z,
          d(z) {
            z && P(e), H && H.d(), Y = false, r0(Q);
          }
        };
      }
      const ea = "psbeta";
      function xa(t, e, x) {
        let n = "", o = "", l = "", s = "", r = "", a = false, c = null;
        async function u() {
          if (x(6, c = null), r !== ea) {
            x(6, c = "Sorry, we're in closed beta at the moment");
            return;
          }
          if (l !== s) {
            x(6, c = "Passwords do not match");
            return;
          }
          if (l.length < 12) {
            x(6, c = "Password must be at least 12 characters");
            return;
          }
          x(5, a = true);
          try {
            const { auth_salt: h, enc_salt: D } = await Xx(n), m = await X0(l, T0(h)), b = t0(po(m));
            await rr(n, o, b), ko(n);
            const p = await X0(l, T0(D));
            Wx(p), await Ro(), i0("/home");
          } catch (h) {
            x(6, c = h.message);
          } finally {
            x(5, a = false);
          }
        }
        function d() {
          r = this.value, x(4, r);
        }
        function B() {
          n = this.value, x(0, n);
        }
        function C() {
          o = this.value, x(1, o);
        }
        function A() {
          l = this.value, x(2, l);
        }
        function F() {
          s = this.value, x(3, s);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          c,
          u,
          d,
          B,
          C,
          A,
          F
        ];
      }
      class ta extends k0 {
        constructor(e) {
          super(), _0(this, e, xa, $r, m0, {});
        }
      }
      function Pt(t) {
        let e;
        return {
          c() {
            e = f("span"), E(e, "class", "unread-dot svelte-16jfgnj");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function na(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B = t[1] ? "notifications_active" : "notifications", C, A, F, h, D, m, b, p, v, _, k = t[1] && Pt();
        return {
          c() {
            e = f("nav"), x = f("a"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-16jfgnj"/> <span class="brand-label svelte-16jfgnj"><span class="brand-peach svelte-16jfgnj">Peach</span><span class="brand-safe svelte-16jfgnj">Safe</span></span>', n = y(), o = f("div"), l = f("a"), l.innerHTML = '<span class="material-icons svelte-16jfgnj">people</span> <span class="tab-label svelte-16jfgnj">Encounters</span>', s = y(), r = f("a"), r.innerHTML = '<span class="material-icons svelte-16jfgnj">science</span> <span class="tab-label svelte-16jfgnj">Test Results</span>', a = y(), c = f("a"), u = f("span"), d = f("span"), C = L(B), A = y(), k && k.c(), F = y(), h = f("span"), h.textContent = "Alerts", D = y(), m = f("a"), m.innerHTML = '<span class="material-icons svelte-16jfgnj">settings</span> <span class="tab-label svelte-16jfgnj">Settings</span>', b = y(), p = f("button"), p.textContent = "Sign out", E(x, "href", "#/home"), E(x, "class", "brand svelte-16jfgnj"), E(l, "href", "#/encounters"), E(l, "class", "tab svelte-16jfgnj"), l0(l, "active", t[0] === "/encounters"), E(r, "href", "#/results"), E(r, "class", "tab svelte-16jfgnj"), l0(r, "active", t[0] === "/results"), E(d, "class", "material-icons svelte-16jfgnj"), E(u, "class", "icon-wrap svelte-16jfgnj"), E(h, "class", "tab-label svelte-16jfgnj"), E(c, "href", "#/alerts"), E(c, "class", "tab svelte-16jfgnj"), l0(c, "active", t[0] === "/alerts"), l0(c, "has-unread", t[1]), E(o, "class", "tabs svelte-16jfgnj"), E(m, "href", "#/settings"), E(m, "class", "tab settings-tab svelte-16jfgnj"), E(m, "title", "Settings"), l0(m, "active", t[0] === "/settings" || t[0] === "/change-password" || t[0] === "/settings/2fa-setup"), E(p, "class", "signout-btn svelte-16jfgnj"), E(e, "class", "svelte-16jfgnj");
          },
          m(w, g) {
            T(w, e, g), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(o, a), i(o, c), i(c, u), i(u, d), i(d, C), i(u, A), k && k.m(u, null), i(c, F), i(c, h), i(e, D), i(e, m), i(e, b), i(e, p), v || (_ = R(p, "click", t[2]), v = true);
          },
          p(w, [g]) {
            g & 1 && l0(l, "active", w[0] === "/encounters"), g & 1 && l0(r, "active", w[0] === "/results"), g & 2 && B !== (B = w[1] ? "notifications_active" : "notifications") && O(C, B), w[1] ? k || (k = Pt(), k.c(), k.m(u, null)) : k && (k.d(1), k = null), g & 1 && l0(c, "active", w[0] === "/alerts"), g & 2 && l0(c, "has-unread", w[1]), g & 1 && l0(m, "active", w[0] === "/settings" || w[0] === "/change-password" || w[0] === "/settings/2fa-setup");
          },
          i: Z,
          o: Z,
          d(w) {
            w && P(e), k && k.d(), v = false, _();
          }
        };
      }
      function oa(t, e, x) {
        let n, o;
        U0(t, ml, (s) => x(0, n = s)), U0(t, To, (s) => x(1, o = s));
        async function l() {
          await wo(), i0("/login");
        }
        return [
          n,
          o,
          l
        ];
      }
      class Q0 extends k0 {
        constructor(e) {
          super(), _0(this, e, oa, na, m0, {});
        }
      }
      function la(t) {
        let e, x, n, o;
        return e = new Q0({}), {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), n.innerHTML = `<div class="hero svelte-1yyph4d"><div class="logo-wrap svelte-1yyph4d"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="logo-img svelte-1yyph4d"/></div> <h1 class="app-name svelte-1yyph4d"><span class="brand-peach svelte-1yyph4d">Peach</span><span class="brand-safe svelte-1yyph4d">Safe</span></h1> <p class="tagline svelte-1yyph4d">Private. Local. Yours.</p></div> <div class="actions svelte-1yyph4d"><a href="#/encounter-exchange" class="btn-filled svelte-1yyph4d"><span class="material-icons svelte-1yyph4d">qr_code</span>
      Log New Encounter</a></div>`, E(n, "class", "svelte-1yyph4d");
          },
          m(l, s) {
            g0(e, l, s), T(l, x, s), T(l, n, s), o = true;
          },
          p: Z,
          i(l) {
            o || (C0(e.$$.fragment, l), o = true);
          },
          o(l) {
            v0(e.$$.fragment, l), o = false;
          },
          d(l) {
            l && (P(x), P(n)), y0(e, l);
          }
        };
      }
      function sa(t) {
        return L0(() => {
          if (!q0()) {
            i0("/login");
            return;
          }
        }), [];
      }
      class ra extends k0 {
        constructor(e) {
          super(), _0(this, e, sa, la, m0, {});
        }
      }
      function Tt(t, e, x) {
        const n = t.slice();
        return n[20] = e[x], n;
      }
      function St(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function jt(t, e, x) {
        const n = t.slice();
        return n[26] = e[x], n;
      }
      function Mt(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function It(t) {
        let e, x, n, o, l, s, r, a, c, u, d = t[6] ? "Creating\u2026" : "Group encounter", B, C, A, F, h, D, m, b, p, v = t[7] && Lt(t);
        return {
          c() {
            e = f("div"), x = f("div"), n = f("p"), n.textContent = "New encounter", o = y(), l = f("button"), l.innerHTML = '<span class="material-icons type-icon svelte-1vdpm8p">person</span> <span class="type-label svelte-1vdpm8p">1:1 encounter</span> <span class="material-icons type-chevron svelte-1vdpm8p">chevron_right</span>', s = y(), r = f("button"), a = f("span"), a.textContent = "groups", c = y(), u = f("span"), B = L(d), C = y(), A = f("span"), A.textContent = "chevron_right", F = y(), v && v.c(), h = y(), D = f("button"), m = L("Cancel"), E(n, "class", "modal-title svelte-1vdpm8p"), E(l, "class", "type-card svelte-1vdpm8p"), E(a, "class", "material-icons type-icon svelte-1vdpm8p"), E(u, "class", "type-label svelte-1vdpm8p"), E(A, "class", "material-icons type-chevron svelte-1vdpm8p"), E(r, "class", "type-card svelte-1vdpm8p"), r.disabled = t[6], E(D, "class", "btn-text cancel-btn svelte-1vdpm8p"), D.disabled = t[6], E(x, "class", "modal-sheet svelte-1vdpm8p"), E(e, "class", "modal-backdrop svelte-1vdpm8p");
          },
          m(_, k) {
            T(_, e, k), i(e, x), i(x, n), i(x, o), i(x, l), i(x, s), i(x, r), i(r, a), i(r, c), i(r, u), i(u, B), i(r, C), i(r, A), i(x, F), v && v.m(x, null), i(x, h), i(x, D), i(D, m), b || (p = [
              R(l, "click", t[14]),
              R(r, "click", t[10]),
              R(D, "click", t[15]),
              R(x, "click", sl(t[12])),
              R(e, "click", t[16])
            ], b = true);
          },
          p(_, k) {
            k & 64 && d !== (d = _[6] ? "Creating\u2026" : "Group encounter") && O(B, d), k & 64 && (r.disabled = _[6]), _[7] ? v ? v.p(_, k) : (v = Lt(_), v.c(), v.m(x, h)) : v && (v.d(1), v = null), k & 64 && (D.disabled = _[6]);
          },
          d(_) {
            _ && P(e), v && v.d(), b = false, r0(p);
          }
        };
      }
      function Lt(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[7]), E(e, "class", "modal-error svelte-1vdpm8p");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 128 && O(x, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function aa(t) {
        let e, x, n, o, l = t[9].length > 0 && Nt(t), s = t[1].length > 0 && Rt(t), r = t[8].length > 0 && Ht(t);
        function a(d, B) {
          return d[0].length === 0 && d[9].length === 0 && d[8].length === 0 && d[1].length === 0 ? da : d[0].length === 0 ? Ea : ua;
        }
        let c = a(t), u = c(t);
        return {
          c() {
            l && l.c(), e = y(), s && s.c(), x = y(), r && r.c(), n = y(), o = f("section"), u.c(), E(o, "class", "card list-card svelte-1vdpm8p");
          },
          m(d, B) {
            l && l.m(d, B), T(d, e, B), s && s.m(d, B), T(d, x, B), r && r.m(d, B), T(d, n, B), T(d, o, B), u.m(o, null);
          },
          p(d, B) {
            d[9].length > 0 ? l ? l.p(d, B) : (l = Nt(d), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), d[1].length > 0 ? s ? s.p(d, B) : (s = Rt(d), s.c(), s.m(x.parentNode, x)) : s && (s.d(1), s = null), d[8].length > 0 ? r ? r.p(d, B) : (r = Ht(d), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), c === (c = a(d)) && u ? u.p(d, B) : (u.d(1), u = c(d), u && (u.c(), u.m(o, null)));
          },
          d(d) {
            d && (P(e), P(x), P(n), P(o)), l && l.d(d), s && s.d(d), r && r.d(d), u.d();
          }
        };
      }
      function ia(t) {
        let e, x, n;
        return {
          c() {
            e = f("section"), x = f("p"), n = L(t[3]), E(x, "class", "error svelte-1vdpm8p"), E(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(o, l) {
            T(o, e, l), i(e, x), i(x, n);
          },
          p(o, l) {
            l & 8 && O(n, o[3]);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function ca(t) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<p class="muted svelte-1vdpm8p">Loading\u2026</p>', E(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function Nt(t) {
        let e, x, n, o, l = A0(t[9]), s = [];
        for (let r = 0; r < l.length; r += 1) s[r] = qt(Mt(t, l, r));
        return {
          c() {
            e = f("section"), x = f("div"), x.innerHTML = '<span class="material-icons section-icon svelte-1vdpm8p">favorite</span> <h2 class="svelte-1vdpm8p">Ongoing partners</h2>', n = y(), o = f("ul");
            for (let r = 0; r < s.length; r += 1) s[r].c();
            E(x, "class", "section-header svelte-1vdpm8p"), E(o, "class", "svelte-1vdpm8p"), E(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(r, a) {
            T(r, e, a), i(e, x), i(e, n), i(e, o);
            for (let c = 0; c < s.length; c += 1) s[c] && s[c].m(o, null);
          },
          p(r, a) {
            if (a & 512) {
              l = A0(r[9]);
              let c;
              for (c = 0; c < l.length; c += 1) {
                const u = Mt(r, l, c);
                s[c] ? s[c].p(u, a) : (s[c] = qt(u), s[c].c(), s[c].m(o, null));
              }
              for (; c < s.length; c += 1) s[c].d(1);
              s.length = l.length;
            }
          },
          d(r) {
            r && P(e), Y0(s, r);
          }
        };
      }
      function qt(t) {
        let e, x, n, o, l, s, r = nx(t[23]) + "", a, c, u, d = ox(t[23]) + "", B, C, A, F, h;
        return {
          c() {
            e = f("li"), x = f("a"), n = f("span"), n.textContent = "favorite", o = y(), l = f("span"), s = f("span"), a = L(r), c = y(), u = f("span"), B = L(d), C = y(), A = f("span"), A.textContent = "chevron_right", h = y(), E(n, "class", "material-icons rel-icon active svelte-1vdpm8p"), E(s, "class", "rel-name svelte-1vdpm8p"), E(u, "class", "rel-sub svelte-1vdpm8p"), E(l, "class", "rel-main svelte-1vdpm8p"), E(A, "class", "material-icons chevron svelte-1vdpm8p"), E(x, "class", "rel-row svelte-1vdpm8p"), E(x, "href", F = "#/relationships/" + t0(t[23].rawToken)), E(e, "class", "svelte-1vdpm8p");
          },
          m(D, m) {
            T(D, e, m), i(e, x), i(x, n), i(x, o), i(x, l), i(l, s), i(s, a), i(l, c), i(l, u), i(u, B), i(x, C), i(x, A), i(e, h);
          },
          p(D, m) {
            m & 512 && r !== (r = nx(D[23]) + "") && O(a, r), m & 512 && d !== (d = ox(D[23]) + "") && O(B, d), m & 512 && F !== (F = "#/relationships/" + t0(D[23].rawToken)) && E(x, "href", F);
          },
          d(D) {
            D && P(e);
          }
        };
      }
      function Rt(t) {
        let e, x, n, o, l = A0(t[1]), s = [];
        for (let r = 0; r < l.length; r += 1) s[r] = Ot(jt(t, l, r));
        return {
          c() {
            e = f("section"), x = f("div"), x.innerHTML = '<span class="material-icons section-icon svelte-1vdpm8p">groups</span> <h2 class="svelte-1vdpm8p">Group encounters</h2>', n = y(), o = f("ul");
            for (let r = 0; r < s.length; r += 1) s[r].c();
            E(x, "class", "section-header svelte-1vdpm8p"), E(o, "class", "svelte-1vdpm8p"), E(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(r, a) {
            T(r, e, a), i(e, x), i(e, n), i(e, o);
            for (let c = 0; c < s.length; c += 1) s[c] && s[c].m(o, null);
          },
          p(r, a) {
            if (a & 2) {
              l = A0(r[1]);
              let c;
              for (c = 0; c < l.length; c += 1) {
                const u = jt(r, l, c);
                s[c] ? s[c].p(u, a) : (s[c] = Ot(u), s[c].c(), s[c].m(o, null));
              }
              for (; c < s.length; c += 1) s[c].d(1);
              s.length = l.length;
            }
          },
          d(r) {
            r && P(e), Y0(s, r);
          }
        };
      }
      function Ot(t) {
        let e, x, n, o, l, s, r = Gt(t[26]) + "", a, c, u, d = Kt(t[26]) + "", B, C, A, F, h;
        return {
          c() {
            e = f("li"), x = f("a"), n = f("span"), n.textContent = "groups", o = y(), l = f("span"), s = f("span"), a = L(r), c = y(), u = f("span"), B = L(d), C = y(), A = f("span"), A.textContent = "chevron_right", h = y(), E(n, "class", "material-icons rel-icon active svelte-1vdpm8p"), E(s, "class", "rel-name svelte-1vdpm8p"), E(u, "class", "rel-sub svelte-1vdpm8p"), E(l, "class", "rel-main svelte-1vdpm8p"), E(A, "class", "material-icons chevron svelte-1vdpm8p"), E(x, "class", "rel-row svelte-1vdpm8p"), E(x, "href", F = "#/groups/" + t0(t[26].token)), E(e, "class", "svelte-1vdpm8p");
          },
          m(D, m) {
            T(D, e, m), i(e, x), i(x, n), i(x, o), i(x, l), i(l, s), i(s, a), i(l, c), i(l, u), i(u, B), i(x, C), i(x, A), i(e, h);
          },
          p(D, m) {
            m & 2 && r !== (r = Gt(D[26]) + "") && O(a, r), m & 2 && d !== (d = Kt(D[26]) + "") && O(B, d), m & 2 && F !== (F = "#/groups/" + t0(D[26].token)) && E(x, "href", F);
          },
          d(D) {
            D && P(e);
          }
        };
      }
      function Ht(t) {
        let e, x, n, o = t[4] ? "expand_less" : "expand_more", l, s, r, a, c = t[8].length + "", u, d, B, C, A, F = t[4] && Ut(t);
        return {
          c() {
            e = f("section"), x = f("button"), n = f("span"), l = L(o), s = y(), r = f("span"), a = L("Archived partners ("), u = L(c), d = L(")"), B = y(), F && F.c(), E(n, "class", "material-icons toggle-icon svelte-1vdpm8p"), E(r, "class", "muted-label svelte-1vdpm8p"), E(x, "class", "collapse-toggle svelte-1vdpm8p"), E(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(h, D) {
            T(h, e, D), i(e, x), i(x, n), i(n, l), i(x, s), i(x, r), i(r, a), i(r, u), i(r, d), i(e, B), F && F.m(e, null), C || (A = R(x, "click", t[17]), C = true);
          },
          p(h, D) {
            D & 16 && o !== (o = h[4] ? "expand_less" : "expand_more") && O(l, o), D & 256 && c !== (c = h[8].length + "") && O(u, c), h[4] ? F ? F.p(h, D) : (F = Ut(h), F.c(), F.m(e, null)) : F && (F.d(1), F = null);
          },
          d(h) {
            h && P(e), F && F.d(), C = false, A();
          }
        };
      }
      function Ut(t) {
        let e, x = A0(t[8]), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = zt(St(t, x, o));
        return {
          c() {
            e = f("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            E(e, "class", "svelte-1vdpm8p");
          },
          m(o, l) {
            T(o, e, l);
            for (let s = 0; s < n.length; s += 1) n[s] && n[s].m(e, null);
          },
          p(o, l) {
            if (l & 256) {
              x = A0(o[8]);
              let s;
              for (s = 0; s < x.length; s += 1) {
                const r = St(o, x, s);
                n[s] ? n[s].p(r, l) : (n[s] = zt(r), n[s].c(), n[s].m(e, null));
              }
              for (; s < n.length; s += 1) n[s].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), Y0(n, o);
          }
        };
      }
      function zt(t) {
        let e, x, n, o, l, s, r = nx(t[23]) + "", a, c, u, d = ox(t[23]) + "", B, C, A, F, h;
        return {
          c() {
            e = f("li"), x = f("a"), n = f("span"), n.textContent = "favorite_border", o = y(), l = f("span"), s = f("span"), a = L(r), c = y(), u = f("span"), B = L(d), C = y(), A = f("span"), A.textContent = "chevron_right", h = y(), E(n, "class", "material-icons rel-icon ended svelte-1vdpm8p"), E(s, "class", "rel-name svelte-1vdpm8p"), E(u, "class", "rel-sub svelte-1vdpm8p"), E(l, "class", "rel-main svelte-1vdpm8p"), E(A, "class", "material-icons chevron svelte-1vdpm8p"), E(x, "class", "rel-row svelte-1vdpm8p"), E(x, "href", F = "#/relationships/" + t0(t[23].rawToken)), E(e, "class", "svelte-1vdpm8p");
          },
          m(D, m) {
            T(D, e, m), i(e, x), i(x, n), i(x, o), i(x, l), i(l, s), i(s, a), i(l, c), i(l, u), i(u, B), i(x, C), i(x, A), i(e, h);
          },
          p(D, m) {
            m & 256 && r !== (r = nx(D[23]) + "") && O(a, r), m & 256 && d !== (d = ox(D[23]) + "") && O(B, d), m & 256 && F !== (F = "#/relationships/" + t0(D[23].rawToken)) && E(x, "href", F);
          },
          d(D) {
            D && P(e);
          }
        };
      }
      function ua(t) {
        let e, x, n, o = A0(t[0]), l = [];
        for (let s = 0; s < o.length; s += 1) l[s] = Vt(Tt(t, o, s));
        return {
          c() {
            e = f("div"), e.innerHTML = '<span class="material-icons section-icon svelte-1vdpm8p">check_circle_outline</span> <h2 class="svelte-1vdpm8p">One-time encounters</h2>', x = y(), n = f("ul");
            for (let s = 0; s < l.length; s += 1) l[s].c();
            E(e, "class", "section-header svelte-1vdpm8p"), E(n, "class", "svelte-1vdpm8p");
          },
          m(s, r) {
            T(s, e, r), T(s, x, r), T(s, n, r);
            for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(n, null);
          },
          p(s, r) {
            if (r & 1) {
              o = A0(s[0]);
              let a;
              for (a = 0; a < o.length; a += 1) {
                const c = Tt(s, o, a);
                l[a] ? l[a].p(c, r) : (l[a] = Vt(c), l[a].c(), l[a].m(n, null));
              }
              for (; a < l.length; a += 1) l[a].d(1);
              l.length = o.length;
            }
          },
          d(s) {
            s && (P(e), P(x), P(n)), Y0(l, s);
          }
        };
      }
      function Ea(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "No one-time encounters.", E(e, "class", "muted list-muted svelte-1vdpm8p");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function da(t) {
        let e, x, n, o, l, s, r, a;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "people_outline", n = y(), o = f("p"), o.textContent = "No encounters recorded yet.", l = y(), s = f("button"), s.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, E(x, "class", "material-icons empty-icon svelte-1vdpm8p"), E(o, "class", "svelte-1vdpm8p"), E(s, "class", "btn-filled svelte-1vdpm8p"), E(e, "class", "empty-state svelte-1vdpm8p");
          },
          m(c, u) {
            T(c, e, u), i(e, x), i(e, n), i(e, o), i(e, l), i(e, s), r || (a = R(s, "click", t[18]), r = true);
          },
          p: Z,
          d(c) {
            c && P(e), r = false, a();
          }
        };
      }
      function fa(t) {
        let e, x = t0(t[20].rawToken).slice(0, 12) + "", n, o;
        return {
          c() {
            e = f("span"), n = L(x), o = L("\u2026"), E(e, "class", "rel-sub enc-token svelte-1vdpm8p");
          },
          m(l, s) {
            T(l, e, s), i(e, n), i(e, o);
          },
          p(l, s) {
            s & 1 && x !== (x = t0(l[20].rawToken).slice(0, 12) + "") && O(n, x);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Ba(t) {
        let e, x = t[20].note + "", n;
        return {
          c() {
            e = f("span"), n = L(x), E(e, "class", "rel-sub enc-note svelte-1vdpm8p");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l & 1 && x !== (x = o[20].note + "") && O(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Vt(t) {
        let e, x, n, o, l, s, r = t[20].date + "", a, c, u, d, B, C;
        function A(D, m) {
          return D[20].note ? Ba : fa;
        }
        let F = A(t), h = F(t);
        return {
          c() {
            e = f("li"), x = f("a"), n = f("span"), n.textContent = "check_circle_outline", o = y(), l = f("span"), s = f("span"), a = L(r), c = y(), h.c(), u = y(), d = f("span"), d.textContent = "chevron_right", C = y(), E(n, "class", "material-icons rel-icon active svelte-1vdpm8p"), E(s, "class", "rel-name svelte-1vdpm8p"), E(l, "class", "rel-main svelte-1vdpm8p"), E(d, "class", "material-icons chevron svelte-1vdpm8p"), E(x, "class", "rel-row svelte-1vdpm8p"), E(x, "href", B = "#/encounters/" + t0(t[20].rawToken)), E(e, "class", "svelte-1vdpm8p");
          },
          m(D, m) {
            T(D, e, m), i(e, x), i(x, n), i(x, o), i(x, l), i(l, s), i(s, a), i(l, c), h.m(l, null), i(x, u), i(x, d), i(e, C);
          },
          p(D, m) {
            m & 1 && r !== (r = D[20].date + "") && O(a, r), F === (F = A(D)) && h ? h.p(D, m) : (h.d(1), h = F(D), h && (h.c(), h.m(l, null))), m & 1 && B !== (B = "#/encounters/" + t0(D[20].rawToken)) && E(x, "href", B);
          },
          d(D) {
            D && P(e), h.d();
          }
        };
      }
      function Ca(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B;
        e = new Q0({});
        let C = t[5] && It(t);
        function A(D, m) {
          return D[2] ? ca : D[3] ? ia : aa;
        }
        let F = A(t), h = F(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), o = f("div"), l = f("h1"), l.textContent = "Encounters", s = y(), r = f("button"), r.innerHTML = '<span class="material-icons">add</span>', a = y(), C && C.c(), c = y(), h.c(), E(l, "class", "svelte-1vdpm8p"), E(r, "class", "fab svelte-1vdpm8p"), E(r, "title", "Add encounter"), E(o, "class", "page-header svelte-1vdpm8p"), E(n, "class", "svelte-1vdpm8p");
          },
          m(D, m) {
            g0(e, D, m), T(D, x, m), T(D, n, m), i(n, o), i(o, l), i(o, s), i(o, r), i(n, a), C && C.m(n, null), i(n, c), h.m(n, null), u = true, d || (B = R(r, "click", t[13]), d = true);
          },
          p(D, [m]) {
            D[5] ? C ? C.p(D, m) : (C = It(D), C.c(), C.m(n, c)) : C && (C.d(1), C = null), F === (F = A(D)) && h ? h.p(D, m) : (h.d(1), h = F(D), h && (h.c(), h.m(n, null)));
          },
          i(D) {
            u || (C0(e.$$.fragment, D), u = true);
          },
          o(D) {
            v0(e.$$.fragment, D), u = false;
          },
          d(D) {
            D && (P(x), P(n)), y0(e, D), C && C.d(), h.d(), d = false, B();
          }
        };
      }
      function nx(t) {
        return t.name ? t.name : t.endedAt ? "Ended partner" : "Active partner";
      }
      function ox(t) {
        return t.endedAt ? "Ended " + t.endedAt : "Since " + t.createdAt;
      }
      function Gt(t) {
        return t.name || "Group encounter";
      }
      function Kt(t) {
        return (t.isHost ? "Host \xB7 " : "") + t.date;
      }
      function Aa(t, e, x) {
        let n, o, l = [], s = [], r = [], a = true, c = null, u = false, d = false, B = false, C = null;
        L0(() => {
          if (!q0()) {
            i0("/login");
            return;
          }
          A();
        });
        function A() {
          x(2, a = true), x(3, c = null);
          try {
            x(0, l = No()), x(11, s = nt()), x(1, r = qo());
          } catch (k) {
            x(3, c = k.message);
          } finally {
            x(2, a = false);
          }
        }
        async function F() {
          x(6, B = true), x(7, C = null);
          try {
            const k = Le(32), w = Fe(), g = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
            await Oo(k, g, true, w, null), x(5, d = false), i0("/groups/" + t0(k));
          } catch (k) {
            x(7, C = k.message);
          } finally {
            x(6, B = false);
          }
        }
        function h(k) {
          Sx.call(this, t, k);
        }
        const D = () => x(5, d = true), m = () => {
          x(5, d = false), i0("/encounter-exchange");
        }, b = () => x(5, d = false), p = () => {
          B || x(5, d = false);
        }, v = () => x(4, u = !u), _ = () => x(5, d = true);
        return t.$$.update = () => {
          t.$$.dirty & 2048 && x(9, n = s.filter((k) => !k.archived)), t.$$.dirty & 2048 && x(8, o = s.filter((k) => k.archived));
        }, [
          l,
          r,
          a,
          c,
          u,
          d,
          B,
          C,
          o,
          n,
          F,
          s,
          h,
          D,
          m,
          b,
          p,
          v,
          _
        ];
      }
      class Fa extends k0 {
        constructor(e) {
          super(), _0(this, e, Aa, Ca, m0, {});
        }
      }
      function Da(t) {
        let e, x, n, o, l = t[7] ? "favorite" : "favorite_border", s, r, a, c, u = t[7] ? "Active partner" : "Ended", d, B, C, A, F, h, D = lx(t[0].createdAt) + "", m, b, p, v, _, k, w, g, S, M, j = t[3] && Yt(t), I = t[0].archived && Jt(), N = t[0].endedAt && Qt(t);
        function q(K, s0) {
          return K[4] ? ha : ma;
        }
        let G = q(t), U = G(t);
        function Y(K, s0) {
          return K[7] ? _a : va;
        }
        let Q = Y(t), H = Q(t);
        function z(K, s0) {
          return K[0].archived ? ya : K[6] === "archive" ? ga : wa;
        }
        let V = z(t), X = V(t);
        return {
          c() {
            j && j.c(), e = y(), x = f("section"), n = f("div"), o = f("span"), s = L(l), r = y(), a = f("div"), c = f("span"), d = L(u), B = y(), I && I.c(), C = y(), A = f("div"), F = f("span"), h = L("Since "), m = L(D), b = y(), N && N.c(), p = y(), v = f("section"), U.c(), _ = y(), k = f("div"), w = y(), H.c(), g = y(), S = f("div"), M = y(), X.c(), E(o, "class", "material-icons status-icon svelte-dnij8l"), l0(o, "active", t[7]), l0(o, "ended", !t[7]), E(c, "class", "status-label svelte-dnij8l"), l0(c, "active", t[7]), E(a, "class", "status-text svelte-dnij8l"), E(n, "class", "status-row svelte-dnij8l"), E(A, "class", "dates svelte-dnij8l"), E(x, "class", "card pad svelte-dnij8l"), E(k, "class", "divider svelte-dnij8l"), E(S, "class", "divider svelte-dnij8l"), E(v, "class", "card svelte-dnij8l");
          },
          m(K, s0) {
            j && j.m(K, s0), T(K, e, s0), T(K, x, s0), i(x, n), i(n, o), i(o, s), i(n, r), i(n, a), i(a, c), i(c, d), i(a, B), I && I.m(a, null), i(x, C), i(x, A), i(A, F), i(F, h), i(F, m), i(A, b), N && N.m(A, null), T(K, p, s0), T(K, v, s0), U.m(v, null), i(v, _), i(v, k), i(v, w), H.m(v, null), i(v, g), i(v, S), i(v, M), X.m(v, null);
          },
          p(K, s0) {
            K[3] ? j ? j.p(K, s0) : (j = Yt(K), j.c(), j.m(e.parentNode, e)) : j && (j.d(1), j = null), s0 & 128 && l !== (l = K[7] ? "favorite" : "favorite_border") && O(s, l), s0 & 128 && l0(o, "active", K[7]), s0 & 128 && l0(o, "ended", !K[7]), s0 & 128 && u !== (u = K[7] ? "Active partner" : "Ended") && O(d, u), s0 & 128 && l0(c, "active", K[7]), K[0].archived ? I || (I = Jt(), I.c(), I.m(a, null)) : I && (I.d(1), I = null), s0 & 1 && D !== (D = lx(K[0].createdAt) + "") && O(m, D), K[0].endedAt ? N ? N.p(K, s0) : (N = Qt(K), N.c(), N.m(A, null)) : N && (N.d(1), N = null), G === (G = q(K)) && U ? U.p(K, s0) : (U.d(1), U = G(K), U && (U.c(), U.m(v, _))), Q === (Q = Y(K)) && H ? H.p(K, s0) : (H.d(1), H = Q(K), H && (H.c(), H.m(v, g))), V === (V = z(K)) && X ? X.p(K, s0) : (X.d(1), X = V(K), X && (X.c(), X.m(v, null)));
          },
          d(K) {
            K && (P(e), P(x), P(p), P(v)), j && j.d(K), I && I.d(), N && N.d(), U.d(), H.d(), X.d();
          }
        };
      }
      function pa(t) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<p class="muted svelte-dnij8l">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-dnij8l">\u2190 Back to encounters</a>', E(e, "class", "card pad svelte-dnij8l");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function Yt(t) {
        let e, x, n, o;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "error_outline", n = y(), o = L(t[3]), E(x, "class", "material-icons svelte-dnij8l"), E(e, "class", "toast error-toast svelte-dnij8l");
          },
          m(l, s) {
            T(l, e, s), i(e, x), i(e, n), i(e, o);
          },
          p(l, s) {
            s & 8 && O(o, l[3]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Jt(t) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "archived", E(e, "class", "badge archived svelte-dnij8l");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Qt(t) {
        let e, x, n = lx(t[0].endedAt) + "", o;
        return {
          c() {
            e = f("span"), x = L("Ended "), o = L(n);
          },
          m(l, s) {
            T(l, e, s), i(e, x), i(e, o);
          },
          p(l, s) {
            s & 1 && n !== (n = lx(l[0].endedAt) + "") && O(o, n);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function ma(t) {
        let e, x, n, o, l = (t[0].name ? t[0].name : "Add nickname") + "", s, r, a, c, u, d, B = t[0].name && Wt();
        return {
          c() {
            e = f("button"), x = f("span"), x.textContent = "edit", n = y(), o = f("span"), s = L(l), r = y(), B && B.c(), a = y(), c = f("span"), c.textContent = "chevron_right", E(x, "class", "material-icons action-icon svelte-dnij8l"), E(o, "class", "action-label svelte-dnij8l"), E(c, "class", "material-icons action-chevron svelte-dnij8l"), E(e, "class", "action-row svelte-dnij8l");
          },
          m(C, A) {
            T(C, e, A), i(e, x), i(e, n), i(e, o), i(o, s), i(o, r), B && B.m(o, null), i(e, a), i(e, c), u || (d = R(e, "click", t[13]), u = true);
          },
          p(C, A) {
            A & 1 && l !== (l = (C[0].name ? C[0].name : "Add nickname") + "") && O(s, l), C[0].name ? B || (B = Wt(), B.c(), B.m(o, null)) : B && (B.d(1), B = null);
          },
          d(C) {
            C && P(e), B && B.d(), u = false, d();
          }
        };
      }
      function ha(t) {
        let e, x, n, o, l, s, r, a, c, u, d = t[2] ? "Saving\u2026" : "Save", B, C, A;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "edit", n = y(), o = f("form"), l = f("input"), s = y(), r = f("div"), a = f("button"), a.textContent = "Cancel", c = y(), u = f("button"), B = L(d), E(x, "class", "material-icons action-icon svelte-dnij8l"), E(l, "type", "text"), E(l, "placeholder", "Optional nickname"), E(l, "maxlength", "64"), l.autofocus = true, E(l, "class", "svelte-dnij8l"), E(a, "type", "button"), E(a, "class", "btn-text svelte-dnij8l"), E(u, "type", "submit"), E(u, "class", "btn-filled-sm svelte-dnij8l"), u.disabled = t[2], E(r, "class", "name-actions svelte-dnij8l"), E(o, "class", "name-form svelte-dnij8l"), E(e, "class", "action-row edit-name-row svelte-dnij8l");
          },
          m(F, h) {
            T(F, e, h), i(e, x), i(e, n), i(e, o), i(o, l), x0(l, t[5]), i(o, s), i(o, r), i(r, a), i(r, c), i(r, u), i(u, B), l.focus(), C || (A = [
              R(l, "input", t[16]),
              R(a, "click", t[14]),
              R(o, "submit", Z0(t[9]))
            ], C = true);
          },
          p(F, h) {
            h & 32 && l.value !== F[5] && x0(l, F[5]), h & 4 && d !== (d = F[2] ? "Saving\u2026" : "Save") && O(B, d), h & 4 && (u.disabled = F[2]);
          },
          d(F) {
            F && P(e), C = false, r0(A);
          }
        };
      }
      function Wt(t) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Tap to change", E(e, "class", "action-sub svelte-dnij8l");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function va(t) {
        let e, x, n, o, l, s;
        return {
          c() {
            e = f("button"), x = f("span"), x.textContent = "favorite", n = y(), o = f("span"), o.textContent = "Mark as active again", E(x, "class", "material-icons action-icon primary svelte-dnij8l"), E(o, "class", "action-label primary svelte-dnij8l"), E(e, "class", "action-row svelte-dnij8l"), e.disabled = t[2];
          },
          m(r, a) {
            T(r, e, a), i(e, x), i(e, n), i(e, o), l || (s = R(e, "click", t[11]), l = true);
          },
          p(r, a) {
            a & 4 && (e.disabled = r[2]);
          },
          d(r) {
            r && P(e), l = false, s();
          }
        };
      }
      function _a(t) {
        let e;
        function x(l, s) {
          return l[6] === "end" ? ba : ka;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            o.c(), e = z0();
          },
          m(l, s) {
            o.m(l, s), T(l, e, s);
          },
          p(l, s) {
            n === (n = x(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e.parentNode, e)));
          },
          d(l) {
            l && P(e), o.d(l);
          }
        };
      }
      function ka(t) {
        let e, x, n;
        return {
          c() {
            e = f("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-dnij8l">heart_broken</span> <span class="action-label danger svelte-dnij8l">Mark as ended</span>', E(e, "class", "action-row svelte-dnij8l");
          },
          m(o, l) {
            T(o, e, l), x || (n = R(e, "click", t[18]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function ba(t) {
        let e, x, n, o, l, s, r, a = t[2] ? "Saving\u2026" : "Mark as ended", c, u, d;
        return {
          c() {
            e = f("div"), x = f("p"), x.textContent = "Mark this partnership as ended?", n = y(), o = f("div"), l = f("button"), l.textContent = "Cancel", s = y(), r = f("button"), c = L(a), E(x, "class", "confirm-text svelte-dnij8l"), E(l, "class", "btn-text svelte-dnij8l"), E(r, "class", "btn-danger-sm svelte-dnij8l"), r.disabled = t[2], E(o, "class", "confirm-actions svelte-dnij8l"), E(e, "class", "confirm-row svelte-dnij8l");
          },
          m(B, C) {
            T(B, e, C), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(r, c), u || (d = [
              R(l, "click", t[17]),
              R(r, "click", t[10])
            ], u = true);
          },
          p(B, C) {
            C & 4 && a !== (a = B[2] ? "Saving\u2026" : "Mark as ended") && O(c, a), C & 4 && (r.disabled = B[2]);
          },
          d(B) {
            B && P(e), u = false, r0(d);
          }
        };
      }
      function wa(t) {
        let e, x, n;
        return {
          c() {
            e = f("button"), e.innerHTML = '<span class="material-icons action-icon svelte-dnij8l">archive</span> <span class="action-label svelte-dnij8l">Archive</span> <span class="action-sub-right svelte-dnij8l">Hide from main list</span>', E(e, "class", "action-row svelte-dnij8l");
          },
          m(o, l) {
            T(o, e, l), x || (n = R(e, "click", t[22]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function ga(t) {
        let e, x, n, o, l, s, r, a = t[2] ? "Saving\u2026" : "Archive", c, u, d;
        return {
          c() {
            e = f("div"), x = f("p"), x.textContent = "Archive this partner? They will be hidden from the main list.", n = y(), o = f("div"), l = f("button"), l.textContent = "Cancel", s = y(), r = f("button"), c = L(a), E(x, "class", "confirm-text svelte-dnij8l"), E(l, "class", "btn-text svelte-dnij8l"), E(r, "class", "btn-filled-sm svelte-dnij8l"), r.disabled = t[2], E(o, "class", "confirm-actions svelte-dnij8l"), E(e, "class", "confirm-row svelte-dnij8l");
          },
          m(B, C) {
            T(B, e, C), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(r, c), u || (d = [
              R(l, "click", t[20]),
              R(r, "click", t[21])
            ], u = true);
          },
          p(B, C) {
            C & 4 && a !== (a = B[2] ? "Saving\u2026" : "Archive") && O(c, a), C & 4 && (r.disabled = B[2]);
          },
          d(B) {
            B && P(e), u = false, r0(d);
          }
        };
      }
      function ya(t) {
        let e, x, n, o, l, s;
        return {
          c() {
            e = f("button"), x = f("span"), x.textContent = "unarchive", n = y(), o = f("span"), o.textContent = "Unarchive", E(x, "class", "material-icons action-icon primary svelte-dnij8l"), E(o, "class", "action-label primary svelte-dnij8l"), E(e, "class", "action-row svelte-dnij8l"), e.disabled = t[2];
          },
          m(r, a) {
            T(r, e, a), i(e, x), i(e, n), i(e, o), l || (s = R(e, "click", t[19]), l = true);
          },
          p(r, a) {
            a & 4 && (e.disabled = r[2]);
          },
          d(r) {
            r && P(e), l = false, s();
          }
        };
      }
      function Pa(t) {
        let e, x, n, o, l, s, r, a = (t[1] ? "Partner not found" : t[8]) + "", c, u, d;
        e = new Q0({});
        function B(F, h) {
          if (F[1]) return pa;
          if (F[0]) return Da;
        }
        let C = B(t), A = C && C(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), o = f("div"), l = f("a"), l.innerHTML = '<span class="material-icons svelte-dnij8l">arrow_back</span>', s = y(), r = f("h1"), c = L(a), u = y(), A && A.c(), E(l, "class", "back-btn svelte-dnij8l"), E(l, "href", "#/encounters"), E(r, "class", "svelte-dnij8l"), E(o, "class", "page-header svelte-dnij8l"), E(n, "class", "svelte-dnij8l");
          },
          m(F, h) {
            g0(e, F, h), T(F, x, h), T(F, n, h), i(n, o), i(o, l), i(o, s), i(o, r), i(r, c), i(n, u), A && A.m(n, null), d = true;
          },
          p(F, [h]) {
            (!d || h & 258) && a !== (a = (F[1] ? "Partner not found" : F[8]) + "") && O(c, a), C === (C = B(F)) && A ? A.p(F, h) : (A && A.d(1), A = C && C(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            d || (C0(e.$$.fragment, F), d = true);
          },
          o(F) {
            v0(e.$$.fragment, F), d = false;
          },
          d(F) {
            F && (P(x), P(n)), y0(e, F), A && A.d();
          }
        };
      }
      function lx(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Ta(t, e, x) {
        let n, o, { params: l = {} } = e, s = null, r = false, a = false, c = null, u = false, d = "", B = null;
        L0(() => {
          if (!q0()) {
            i0("/login");
            return;
          }
          C();
        });
        function C() {
          const j = nt(), I = l.rawTokenHex;
          x(0, s = j.find((N) => t0(N.rawToken) === I) ?? null), s || x(1, r = true);
        }
        function A() {
          return t0(s.rawToken);
        }
        async function F() {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              const j = d.trim();
              await Ue(A(), {
                name: j || null
              }), C(), x(4, u = false);
            } catch (j) {
              x(3, c = j.message);
            } finally {
              x(2, a = false);
            }
          }
        }
        async function h() {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              const j = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              await Ue(A(), {
                endedAt: j
              }), C();
            } catch (j) {
              x(3, c = j.message);
            } finally {
              x(2, a = false), x(6, B = null);
            }
          }
        }
        async function D() {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              await Ue(A(), {
                endedAt: null
              }), C();
            } catch (j) {
              x(3, c = j.message);
            } finally {
              x(2, a = false);
            }
          }
        }
        async function m(j) {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              await Ue(A(), {
                archived: j
              }), C();
            } catch (I) {
              x(3, c = I.message);
            } finally {
              x(2, a = false), x(6, B = null);
            }
          }
        }
        function b() {
          x(5, d = s.name ?? ""), x(4, u = true), x(3, c = null);
        }
        function p() {
          x(4, u = false), x(3, c = null);
        }
        function v() {
          d = this.value, x(5, d);
        }
        const _ = () => x(6, B = null), k = () => x(6, B = "end"), w = () => m(false), g = () => x(6, B = null), S = () => m(true), M = () => x(6, B = "archive");
        return t.$$set = (j) => {
          "params" in j && x(15, l = j.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && x(8, n = s?.name || (s?.endedAt ? "Ended partner" : "Active partner")), t.$$.dirty & 1 && x(7, o = s && !s.endedAt);
        }, [
          s,
          r,
          a,
          c,
          u,
          d,
          B,
          o,
          n,
          F,
          h,
          D,
          m,
          b,
          p,
          l,
          v,
          _,
          k,
          w,
          g,
          S,
          M
        ];
      }
      class Sa extends k0 {
        constructor(e) {
          super(), _0(this, e, Ta, Pa, m0, {
            params: 15
          });
        }
      }
      function Xt(t, e, x) {
        const n = t.slice();
        n[18] = e[x], n[21] = x;
        const o = n[6].length - 1 - n[21];
        return n[19] = o, n;
      }
      function Zt(t, e, x) {
        const n = t.slice();
        return n[22] = e[x], n[23] = e, n[24] = x, n;
      }
      function ja(t) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check_circle</span>
      Result saved. (No encounters on record to notify.)`, E(e, "class", "toast success svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Ma(t) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check_circle</span>
      Result saved.`, E(e, "class", "toast success svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Ia(t) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check_circle</span>
      Result saved. Partners notified.`, E(e, "class", "toast success svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function $t(t) {
        let e, x, n, o;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "error_outline", n = y(), o = L(t[5]), E(x, "class", "material-icons svelte-8u23ha"), E(e, "class", "toast error-toast svelte-8u23ha");
          },
          m(l, s) {
            T(l, e, s), i(e, x), i(e, n), i(e, o);
          },
          p(l, s) {
            s & 32 && O(o, l[5]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function en(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A, F, h, D, m, b, p, v = t[3] && t[4] === "computing" ? "Saving\u2026" : "Save result", _, k, w, g = A0(K0), S = [];
        for (let j = 0; j < g.length; j += 1) S[j] = xn(Zt(t, g, j));
        let M = t[4] === "computing" && tn();
        return {
          c() {
            e = f("section"), x = f("h2"), x.textContent = "Record a result", n = y(), o = f("p"), o.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, l = y(), s = f("form"), r = f("label"), a = L(`Test date
          `), c = f("input"), u = y(), d = f("fieldset"), B = f("legend"), B.textContent = "Positive results", C = y(), A = f("div");
            for (let j = 0; j < S.length; j += 1) S[j].c();
            F = y(), M && M.c(), h = y(), D = f("div"), m = f("button"), m.textContent = "Cancel", b = y(), p = f("button"), _ = L(v), E(x, "class", "svelte-8u23ha"), E(o, "class", "help svelte-8u23ha"), E(c, "type", "date"), c.required = true, E(c, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), E(c, "class", "svelte-8u23ha"), E(r, "class", "svelte-8u23ha"), E(B, "class", "svelte-8u23ha"), E(A, "class", "disease-grid svelte-8u23ha"), E(d, "class", "svelte-8u23ha"), E(m, "type", "button"), E(m, "class", "btn-text svelte-8u23ha"), E(p, "type", "submit"), E(p, "class", "btn-filled svelte-8u23ha"), p.disabled = t[3], E(D, "class", "form-actions svelte-8u23ha"), E(s, "class", "svelte-8u23ha"), E(e, "class", "card form-card svelte-8u23ha");
          },
          m(j, I) {
            T(j, e, I), i(e, x), i(e, n), i(e, o), i(e, l), i(e, s), i(s, r), i(r, a), i(r, c), x0(c, t[0]), i(s, u), i(s, d), i(d, B), i(d, C), i(d, A);
            for (let N = 0; N < S.length; N += 1) S[N] && S[N].m(A, null);
            i(s, F), M && M.m(s, null), i(s, h), i(s, D), i(D, m), i(D, b), i(D, p), i(p, _), k || (w = [
              R(c, "input", t[11]),
              R(m, "click", t[13]),
              R(s, "submit", Z0(t[8]))
            ], k = true);
          },
          p(j, I) {
            if (I & 1 && x0(c, j[0]), I & 2) {
              g = A0(K0);
              let N;
              for (N = 0; N < g.length; N += 1) {
                const q = Zt(j, g, N);
                S[N] ? S[N].p(q, I) : (S[N] = xn(q), S[N].c(), S[N].m(A, null));
              }
              for (; N < S.length; N += 1) S[N].d(1);
              S.length = g.length;
            }
            j[4] === "computing" ? M || (M = tn(), M.c(), M.m(s, h)) : M && (M.d(1), M = null), I & 24 && v !== (v = j[3] && j[4] === "computing" ? "Saving\u2026" : "Save result") && O(_, v), I & 8 && (p.disabled = j[3]);
          },
          d(j) {
            j && P(e), Y0(S, j), M && M.d(), k = false, r0(w);
          }
        };
      }
      function xn(t) {
        let e, x, n, o = ge[t[22]] + "", l, s, r, a;
        function c() {
          t[12].call(x, t[22]);
        }
        return {
          c() {
            e = f("label"), x = f("input"), n = y(), l = L(o), s = y(), E(x, "type", "checkbox"), E(x, "class", "svelte-8u23ha"), E(e, "class", "checkbox-label svelte-8u23ha");
          },
          m(u, d) {
            T(u, e, d), i(e, x), x.checked = t[1][t[22]], i(e, n), i(e, l), i(e, s), r || (a = R(x, "change", c), r = true);
          },
          p(u, d) {
            t = u, d & 2 && (x.checked = t[1][t[22]]);
          },
          d(u) {
            u && P(e), r = false, a();
          }
        };
      }
      function tn(t) {
        let e;
        return {
          c() {
            e = f("p"), e.innerHTML = `<span class="material-icons spin svelte-8u23ha">autorenew</span>
            Notifying\u2026`, E(e, "class", "computing-status svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function La(t) {
        let e, x = A0([
          ...t[6]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = on(Xt(t, x, o));
        return {
          c() {
            e = f("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            E(e, "class", "svelte-8u23ha");
          },
          m(o, l) {
            T(o, e, l);
            for (let s = 0; s < n.length; s += 1) n[s] && n[s].m(e, null);
          },
          p(o, l) {
            if (l & 712) {
              x = A0([
                ...o[6]
              ].reverse());
              let s;
              for (s = 0; s < x.length; s += 1) {
                const r = Xt(o, x, s);
                n[s] ? n[s].p(r, l) : (n[s] = on(r), n[s].c(), n[s].m(e, null));
              }
              for (; s < n.length; s += 1) n[s].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), Y0(n, o);
          }
        };
      }
      function Na(t) {
        let e, x, n, o, l, s, r, a;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "science", n = y(), o = f("p"), o.textContent = "No results recorded yet.", l = y(), s = f("button"), s.innerHTML = `<span class="material-icons">add</span>
          Record first result`, E(x, "class", "material-icons empty-icon svelte-8u23ha"), E(o, "class", "svelte-8u23ha"), E(s, "class", "btn-filled svelte-8u23ha"), E(e, "class", "empty-state svelte-8u23ha");
          },
          m(c, u) {
            T(c, e, u), i(e, x), i(e, n), i(e, o), i(e, l), i(e, s), r || (a = R(s, "click", t[14]), r = true);
          },
          p: Z,
          d(c) {
            c && P(e), r = false, a();
          }
        };
      }
      function qa(t) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Negative", E(e, "class", "badge negative svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Ra(t) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Positive", E(e, "class", "badge positive svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function nn(t) {
        let e, x = t[18].positiveDiseases.map(t[15]).join(", ") + "", n, o, l;
        function s(c, u) {
          return c[18].hasNotified ? Ha : Oa;
        }
        let r = s(t), a = r(t);
        return {
          c() {
            e = f("div"), n = L(x), o = y(), a.c(), l = z0(), E(e, "class", "diseases svelte-8u23ha");
          },
          m(c, u) {
            T(c, e, u), i(e, n), T(c, o, u), a.m(c, u), T(c, l, u);
          },
          p(c, u) {
            u & 64 && x !== (x = c[18].positiveDiseases.map(c[15]).join(", ") + "") && O(n, x), r === (r = s(c)) && a ? a.p(c, u) : (a.d(1), a = r(c), a && (a.c(), a.m(l.parentNode, l)));
          },
          d(c) {
            c && (P(e), P(o), P(l)), a.d(c);
          }
        };
      }
      function Oa(t) {
        let e, x, n, o, l = t[7] === t[19] ? "Notifying\u2026" : "Notify now", s, r, a;
        function c() {
          return t[16](t[19], t[18]);
        }
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "Partners not yet notified", n = y(), o = f("button"), s = L(l), E(x, "class", "not-notified svelte-8u23ha"), E(o, "class", "btn-text-small svelte-8u23ha"), o.disabled = t[3], E(e, "class", "notify-row svelte-8u23ha");
          },
          m(u, d) {
            T(u, e, d), i(e, x), i(e, n), i(e, o), i(o, s), r || (a = R(o, "click", c), r = true);
          },
          p(u, d) {
            t = u, d & 192 && l !== (l = t[7] === t[19] ? "Notifying\u2026" : "Notify now") && O(s, l), d & 8 && (o.disabled = t[3]);
          },
          d(u) {
            u && P(e), r = false, a();
          }
        };
      }
      function Ha(t) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check</span>
                    Partners notified`, E(e, "class", "notified svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function on(t) {
        let e, x, n = t[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", o, l, s, r, a, c = t[18].date + "", u, d, B, C;
        function A(m, b) {
          return m[18].positiveDiseases.length > 0 ? Ra : qa;
        }
        let F = A(t), h = F(t), D = t[18].positiveDiseases.length > 0 && nn(t);
        return {
          c() {
            e = f("li"), x = f("span"), o = L(n), l = y(), s = f("div"), r = f("div"), a = f("span"), u = L(c), d = y(), h.c(), B = y(), D && D.c(), C = y(), E(x, "class", "material-icons result-icon svelte-8u23ha"), l0(x, "positive", t[18].positiveDiseases.length > 0), l0(x, "negative", t[18].positiveDiseases.length === 0), E(a, "class", "result-date svelte-8u23ha"), E(r, "class", "result-row svelte-8u23ha"), E(s, "class", "result-body svelte-8u23ha"), E(e, "class", "svelte-8u23ha");
          },
          m(m, b) {
            T(m, e, b), i(e, x), i(x, o), i(e, l), i(e, s), i(s, r), i(r, a), i(a, u), i(r, d), h.m(r, null), i(s, B), D && D.m(s, null), i(e, C);
          },
          p(m, b) {
            b & 64 && n !== (n = m[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && O(o, n), b & 64 && l0(x, "positive", m[18].positiveDiseases.length > 0), b & 64 && l0(x, "negative", m[18].positiveDiseases.length === 0), b & 64 && c !== (c = m[18].date + "") && O(u, c), F !== (F = A(m)) && (h.d(1), h = F(m), h && (h.c(), h.m(r, null))), m[18].positiveDiseases.length > 0 ? D ? D.p(m, b) : (D = nn(m), D.c(), D.m(s, null)) : D && (D.d(1), D = null);
          },
          d(m) {
            m && P(e), h.d(), D && D.d();
          }
        };
      }
      function Ua(t) {
        let e, x, n, o, l, s, r, a, c = t[2] ? "close" : "add", u, d, B, C, A, F, h, D, m, b;
        e = new Q0({});
        function p(j, I) {
          if (j[4] === "done") return Ia;
          if (j[4] === "done_negative") return Ma;
          if (j[4] === "done_no_encounters") return ja;
        }
        let v = p(t), _ = v && v(t), k = t[5] && $t(t), w = t[2] && en(t);
        function g(j, I) {
          return j[6].length === 0 ? Na : La;
        }
        let S = g(t), M = S(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), o = f("div"), l = f("h1"), l.textContent = "Test Results", s = y(), r = f("button"), a = f("span"), u = L(c), B = y(), _ && _.c(), C = y(), k && k.c(), A = y(), w && w.c(), F = y(), h = f("section"), M.c(), E(l, "class", "svelte-8u23ha"), E(a, "class", "material-icons"), E(r, "class", "fab svelte-8u23ha"), E(r, "title", d = t[2] ? "Cancel" : "Record new result"), E(o, "class", "page-header svelte-8u23ha"), E(h, "class", "card list-card svelte-8u23ha"), E(n, "class", "svelte-8u23ha");
          },
          m(j, I) {
            g0(e, j, I), T(j, x, I), T(j, n, I), i(n, o), i(o, l), i(o, s), i(o, r), i(r, a), i(a, u), i(n, B), _ && _.m(n, null), i(n, C), k && k.m(n, null), i(n, A), w && w.m(n, null), i(n, F), i(n, h), M.m(h, null), D = true, m || (b = R(r, "click", t[10]), m = true);
          },
          p(j, [I]) {
            (!D || I & 4) && c !== (c = j[2] ? "close" : "add") && O(u, c), (!D || I & 4 && d !== (d = j[2] ? "Cancel" : "Record new result")) && E(r, "title", d), v !== (v = p(j)) && (_ && _.d(1), _ = v && v(j), _ && (_.c(), _.m(n, C))), j[5] ? k ? k.p(j, I) : (k = $t(j), k.c(), k.m(n, A)) : k && (k.d(1), k = null), j[2] ? w ? w.p(j, I) : (w = en(j), w.c(), w.m(n, F)) : w && (w.d(1), w = null), S === (S = g(j)) && M ? M.p(j, I) : (M.d(1), M = S(j), M && (M.c(), M.m(h, null)));
          },
          i(j) {
            D || (C0(e.$$.fragment, j), D = true);
          },
          o(j) {
            v0(e.$$.fragment, j), D = false;
          },
          d(j) {
            j && (P(x), P(n)), y0(e, j), _ && _.d(), k && k.d(), w && w.d(), M.d(), m = false, b();
          }
        };
      }
      const za = 20, ln = 50, Va = 100;
      function Ga(t, e, x) {
        let n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), o = {}, l = false, s = false, r = null, a = null, c = [], u = null;
        L0(() => {
          if (!q0()) {
            i0("/login");
            return;
          }
          x(6, c = Je());
        });
        async function d(v, _) {
          const k = G0(), w = Fe(), g = [
            ...k.encounters.map((a0) => ne(a0.rawToken, a0.theirContactId, a0.submitIndex)),
            ...(k.relationships || []).map((a0) => ne(a0.rawToken, a0.theirContactId, a0.submitIndex))
          ], S = ln + Math.floor(Math.random() * (Va - ln + 1)), M = [
            ...g
          ];
          for (; M.length < S; ) M.push(Le(32));
          for (let a0 = M.length - 1; a0 > 0; a0--) {
            const W = Math.floor(Math.random() * (a0 + 1));
            [M[a0], M[W]] = [
              M[W],
              M[a0]
            ];
          }
          const j = M.map((a0) => oe(a0)), I = ho(w), N = v.replace(/-/g, ""), q = _.map((a0) => Lo[a0] ?? a0).join(""), G = new TextEncoder().encode("1" + N + q), U = Ne(I, G), Y = oe(U), Q = new TextEncoder(), H = JSON.stringify(j), z = Q.encode(H).length + Q.encode(Y).length, V = new Uint8Array(z), X = Q.encode(H), K = Q.encode(Y);
          V.set(X, 0), V.set(K, X.length);
          const s0 = zs(V);
          let d0 = za, u0 = (/* @__PURE__ */ new Date()).toISOString();
          for (let a0 = 0; a0 < 2; a0++) {
            const { counter: W } = Vs(u0, s0, d0), o0 = {
              tokens: j,
              created_at: u0,
              submission_type: "self_reported",
              encrypted_payload: Y,
              pow_counter: W
            };
            try {
              await pr(o0);
              break;
            } catch (n0) {
              if (a0 === 0 && n0.statusCode === 400) {
                let c0 = false;
                if (n0.powDifficulty && n0.powDifficulty > d0 && (d0 = n0.powDifficulty, c0 = true), n0.serverTime && (u0 = n0.serverTime, c0 = true), c0) continue;
              }
              throw n0;
            }
          }
          await jr();
        }
        async function B() {
          if (!s) {
            x(3, s = true), x(5, a = null), x(4, r = null);
            try {
              const v = K0.filter((_) => o[_]);
              if (v.length > 0) {
                const _ = G0();
                if (_.encounters.length > 0 || (_.relationships || []).length > 0) {
                  const w = await kx(n, v);
                  x(4, r = "computing"), await new Promise((g) => setTimeout(g, 30)), await d(n, v), await ht(w), x(4, r = "done");
                } else await kx(n, v, true), x(4, r = "done_no_encounters");
              } else await kx(n, v), x(4, r = "done_negative");
              x(1, o = {}), x(0, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), x(6, c = Je()), x(2, l = false);
            } catch (v) {
              x(5, a = v.message), x(4, r = null);
            } finally {
              x(3, s = false);
            }
          }
        }
        async function C(v, _) {
          if (!s) {
            x(3, s = true), x(7, u = v), x(5, a = null);
            try {
              const k = G0();
              if (k.encounters.length === 0 && (k.relationships || []).length === 0) {
                x(5, a = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((w) => setTimeout(w, 30)), await d(_.date, _.positiveDiseases), await ht(v), x(6, c = Je());
            } catch (k) {
              x(5, a = "Notification failed: " + k.message);
            } finally {
              x(3, s = false), x(7, u = null);
            }
          }
        }
        const A = () => {
          x(2, l = !l), x(5, a = null), x(4, r = null);
        };
        function F() {
          n = this.value, x(0, n);
        }
        function h(v) {
          o[v] = this.checked, x(1, o);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          c,
          u,
          B,
          C,
          A,
          F,
          h,
          () => {
            x(2, l = false), x(4, r = null), x(5, a = null);
          },
          () => x(2, l = true),
          (v) => ge[v] ?? v,
          (v, _) => C(v, _)
        ];
      }
      class Ka extends k0 {
        constructor(e) {
          super(), _0(this, e, Ga, Ua, m0, {});
        }
      }
      function sn(t) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = `<span class="material-icons svelte-zjyqy2">check_circle</span>
      Password changed successfully.`, E(e, "class", "success-banner svelte-zjyqy2");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function rn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[4]), E(e, "class", "error svelte-zjyqy2");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && O(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Ya(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A, F, h, D, m, b, p, v, _ = t[3] ? "Changing password\u2026" : "Change password", k, w, g, S, M, j = t[5] && sn(), I = t[4] && rn(t);
        return {
          c() {
            e = f("main"), x = f("a"), x.innerHTML = `<span class="material-icons svelte-zjyqy2">arrow_back</span>
    Back`, n = y(), o = f("h1"), o.textContent = "Change password", l = y(), j && j.c(), s = y(), r = f("form"), a = f("label"), c = L(`Current password
      `), u = f("input"), d = y(), B = f("label"), C = L(`New password
      `), A = f("input"), F = y(), h = f("label"), D = L(`Confirm new password
      `), m = f("input"), b = y(), I && I.c(), p = y(), v = f("button"), k = L(_), w = y(), g = f("p"), g.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, E(x, "href", "#/home"), E(x, "class", "back-link svelte-zjyqy2"), E(o, "class", "svelte-zjyqy2"), E(u, "type", "password"), u.required = true, E(u, "autocomplete", "current-password"), E(u, "class", "svelte-zjyqy2"), E(a, "class", "svelte-zjyqy2"), E(A, "type", "password"), A.required = true, E(A, "autocomplete", "new-password"), E(A, "minlength", "12"), E(A, "class", "svelte-zjyqy2"), E(B, "class", "svelte-zjyqy2"), E(m, "type", "password"), m.required = true, E(m, "autocomplete", "new-password"), E(m, "class", "svelte-zjyqy2"), E(h, "class", "svelte-zjyqy2"), E(v, "type", "submit"), v.disabled = t[3], E(v, "class", "svelte-zjyqy2"), E(r, "class", "svelte-zjyqy2"), E(g, "class", "privacy-note svelte-zjyqy2"), E(e, "class", "svelte-zjyqy2");
          },
          m(N, q) {
            T(N, e, q), i(e, x), i(e, n), i(e, o), i(e, l), j && j.m(e, null), i(e, s), i(e, r), i(r, a), i(a, c), i(a, u), x0(u, t[0]), i(r, d), i(r, B), i(B, C), i(B, A), x0(A, t[1]), i(r, F), i(r, h), i(h, D), i(h, m), x0(m, t[2]), i(r, b), I && I.m(r, null), i(r, p), i(r, v), i(v, k), i(e, w), i(e, g), S || (M = [
              R(u, "input", t[7]),
              R(A, "input", t[8]),
              R(m, "input", t[9]),
              R(r, "submit", Z0(t[6]))
            ], S = true);
          },
          p(N, [q]) {
            N[5] ? j || (j = sn(), j.c(), j.m(e, s)) : j && (j.d(1), j = null), q & 1 && u.value !== N[0] && x0(u, N[0]), q & 2 && A.value !== N[1] && x0(A, N[1]), q & 4 && m.value !== N[2] && x0(m, N[2]), N[4] ? I ? I.p(N, q) : (I = rn(N), I.c(), I.m(r, p)) : I && (I.d(1), I = null), q & 8 && _ !== (_ = N[3] ? "Changing password\u2026" : "Change password") && O(k, _), q & 8 && (v.disabled = N[3]);
          },
          i: Z,
          o: Z,
          d(N) {
            N && P(e), j && j.d(), I && I.d(), S = false, r0(M);
          }
        };
      }
      function Ja(t, e, x) {
        let n = "", o = "", l = "", s = false, r = null, a = false;
        L0(() => {
          q0() || i0("/login");
        });
        async function c() {
          if (x(4, r = null), x(5, a = false), o !== l) {
            x(4, r = "New passwords do not match");
            return;
          }
          if (o.length < 12) {
            x(4, r = "New password must be at least 12 characters");
            return;
          }
          if (o === n) {
            x(4, r = "New password must differ from the current password");
            return;
          }
          x(3, s = true);
          try {
            const C = Ye(), { challenge: A, auth_salt: F, enc_salt: h } = await Xx(C), D = await X0(n, T0(h)), m = re();
            if (!m || D.length !== m.length || !D.every((M, j) => M === m[j])) {
              x(4, r = "Current password is incorrect");
              return;
            }
            const b = await X0(n, T0(F)), p = mo(new TextEncoder().encode(A), b), v = oe(p), _ = await X0(o, T0(F)), k = await X0(o, T0(h)), w = t0(po(_)), { blobHex: g, blobVersion: S } = Rr(k);
            await Cr(v, w, g, S), Wx(k), Or(S + 1), x(5, a = true), x(0, n = ""), x(1, o = ""), x(2, l = "");
          } catch (C) {
            x(4, r = C.message);
          } finally {
            x(3, s = false);
          }
        }
        function u() {
          n = this.value, x(0, n);
        }
        function d() {
          o = this.value, x(1, o);
        }
        function B() {
          l = this.value, x(2, l);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          c,
          u,
          d,
          B
        ];
      }
      class Qa extends k0 {
        constructor(e) {
          super(), _0(this, e, Ja, Ya, m0, {});
        }
      }
      function Wa(t) {
        let e, x, n, o, l, s, r, a, c, u = t[2] ? "Sending\u2026" : "Send verification link", d, B, C, A, F = t[0] && an(t), h = t[3] && cn(t);
        return {
          c() {
            e = f("div"), F && F.c(), x = y(), n = f("form"), o = f("label"), l = L(`New email address
          `), s = f("input"), r = y(), h && h.c(), a = y(), c = f("button"), d = L(u), E(s, "type", "email"), s.required = true, E(s, "autocomplete", "email"), E(s, "placeholder", "you@example.com"), E(s, "class", "svelte-1wvo1xg"), E(o, "class", "svelte-1wvo1xg"), E(c, "type", "submit"), c.disabled = B = t[2] || !t[1], E(c, "class", "svelte-1wvo1xg"), E(n, "class", "svelte-1wvo1xg"), E(e, "class", "card svelte-1wvo1xg");
          },
          m(D, m) {
            T(D, e, m), F && F.m(e, null), i(e, x), i(e, n), i(n, o), i(o, l), i(o, s), x0(s, t[1]), i(n, r), h && h.m(n, null), i(n, a), i(n, c), i(c, d), C || (A = [
              R(s, "input", t[6]),
              R(n, "submit", Z0(t[5]))
            ], C = true);
          },
          p(D, m) {
            D[0] ? F ? F.p(D, m) : (F = an(D), F.c(), F.m(e, x)) : F && (F.d(1), F = null), m & 2 && s.value !== D[1] && x0(s, D[1]), D[3] ? h ? h.p(D, m) : (h = cn(D), h.c(), h.m(n, a)) : h && (h.d(1), h = null), m & 4 && u !== (u = D[2] ? "Sending\u2026" : "Send verification link") && O(d, u), m & 6 && B !== (B = D[2] || !D[1]) && (c.disabled = B);
          },
          d(D) {
            D && P(e), F && F.d(), h && h.d(), C = false, r0(A);
          }
        };
      }
      function Xa(t) {
        let e, x, n, o, l, s, r, a, c, u;
        return {
          c() {
            e = f("div"), x = f("div"), x.innerHTML = '<span class="material-icons success-icon svelte-1wvo1xg">mark_email_read</span> <h2 class="svelte-1wvo1xg">Check your inbox</h2>', n = y(), o = f("p"), l = L("We've sent a verification link to "), s = f("strong"), r = L(t[4]), a = L(`.
        Click the link to confirm the change. Your email won't update until you verify it.`), c = y(), u = f("a"), u.textContent = "Done", E(x, "class", "success-row svelte-1wvo1xg"), E(o, "class", "hint svelte-1wvo1xg"), E(u, "href", "#/settings"), E(u, "class", "btn-primary svelte-1wvo1xg"), E(e, "class", "card svelte-1wvo1xg");
          },
          m(d, B) {
            T(d, e, B), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), i(s, r), i(o, a), i(e, c), i(e, u);
          },
          p(d, B) {
            B & 16 && O(r, d[4]);
          },
          d(d) {
            d && P(e);
          }
        };
      }
      function an(t) {
        let e, x, n, o;
        return {
          c() {
            e = f("p"), x = L("Current email: "), n = f("strong"), o = L(t[0]), E(e, "class", "current-email svelte-1wvo1xg");
          },
          m(l, s) {
            T(l, e, s), i(e, x), i(e, n), i(n, o);
          },
          p(l, s) {
            s & 1 && O(o, l[0]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function cn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[3]), E(e, "class", "error svelte-1wvo1xg");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 8 && O(x, n[3]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Za(t) {
        let e, x, n, o, l;
        function s(c, u) {
          return c[4] ? Xa : Wa;
        }
        let r = s(t), a = r(t);
        return {
          c() {
            e = f("main"), x = f("a"), x.innerHTML = `<span class="material-icons svelte-1wvo1xg">arrow_back</span>
    Back to settings`, n = y(), o = f("h1"), o.textContent = "Change email", l = y(), a.c(), E(x, "href", "#/settings"), E(x, "class", "back-link svelte-1wvo1xg"), E(o, "class", "svelte-1wvo1xg"), E(e, "class", "svelte-1wvo1xg");
          },
          m(c, u) {
            T(c, e, u), i(e, x), i(e, n), i(e, o), i(e, l), a.m(e, null);
          },
          p(c, [u]) {
            r === (r = s(c)) && a ? a.p(c, u) : (a.d(1), a = r(c), a && (a.c(), a.m(e, null)));
          },
          i: Z,
          o: Z,
          d(c) {
            c && P(e), a.d();
          }
        };
      }
      function $a(t, e, x) {
        let n;
        U0(t, fx, (d) => x(7, n = d));
        let o = "", l = "", s = false, r = null, a = null;
        L0(() => {
          if (!q0()) {
            i0("/login");
            return;
          }
          x(0, o = n ?? "");
        });
        async function c() {
          x(3, r = null), x(2, s = true);
          try {
            await or(l), x(4, a = l);
          } catch (d) {
            x(3, r = d.message);
          } finally {
            x(2, s = false);
          }
        }
        function u() {
          l = this.value, x(1, l);
        }
        return [
          o,
          l,
          s,
          r,
          a,
          c,
          u
        ];
      }
      class ei extends k0 {
        constructor(e) {
          super(), _0(this, e, $a, Za, m0, {});
        }
      }
      function xi(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B;
        return {
          c() {
            e = f("div"), e.innerHTML = '<span class="material-icons svelte-1lli505">error_outline</span>', x = y(), n = f("h1"), n.textContent = "Verification failed", o = y(), l = f("p"), s = L(t[1]), r = y(), a = f("p"), a.textContent = "The link may have expired or already been used. You can request a new one from your account settings.", c = y(), u = f("button"), u.textContent = "Go to settings", E(e, "class", "icon-wrap error svelte-1lli505"), E(n, "class", "svelte-1lli505"), E(l, "class", "message error svelte-1lli505"), E(a, "class", "hint svelte-1lli505"), E(u, "class", "btn-primary svelte-1lli505");
          },
          m(C, A) {
            T(C, e, A), T(C, x, A), T(C, n, A), T(C, o, A), T(C, l, A), i(l, s), T(C, r, A), T(C, a, A), T(C, c, A), T(C, u, A), d || (B = R(u, "click", t[4]), d = true);
          },
          p(C, A) {
            A & 2 && O(s, C[1]);
          },
          d(C) {
            C && (P(e), P(x), P(n), P(o), P(l), P(r), P(a), P(c), P(u)), d = false, B();
          }
        };
      }
      function ti(t) {
        let e, x, n, o, l, s, r, a, c;
        return {
          c() {
            e = f("div"), e.innerHTML = '<span class="material-icons svelte-1lli505">check_circle</span>', x = y(), n = f("h1"), n.textContent = "Email verified", o = y(), l = f("p"), l.textContent = "Your email address has been verified successfully.", s = y(), r = f("button"), r.textContent = "Go to settings", E(e, "class", "icon-wrap success svelte-1lli505"), E(n, "class", "svelte-1lli505"), E(l, "class", "message svelte-1lli505"), E(r, "class", "btn-primary svelte-1lli505");
          },
          m(u, d) {
            T(u, e, d), T(u, x, d), T(u, n, d), T(u, o, d), T(u, l, d), T(u, s, d), T(u, r, d), a || (c = R(r, "click", t[3]), a = true);
          },
          p: Z,
          d(u) {
            u && (P(e), P(x), P(n), P(o), P(l), P(s), P(r)), a = false, c();
          }
        };
      }
      function ni(t) {
        let e, x, n;
        return {
          c() {
            e = f("div"), e.innerHTML = '<span class="material-icons spinning svelte-1lli505">sync</span>', x = y(), n = f("p"), n.textContent = "Verifying your email\u2026", E(e, "class", "icon-wrap svelte-1lli505"), E(n, "class", "message svelte-1lli505");
          },
          m(o, l) {
            T(o, e, l), T(o, x, l), T(o, n, l);
          },
          p: Z,
          d(o) {
            o && (P(e), P(x), P(n));
          }
        };
      }
      function oi(t) {
        let e;
        function x(l, s) {
          return l[0] === "verifying" ? ni : l[0] === "success" ? ti : xi;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            e = f("main"), o.c(), E(e, "class", "svelte-1lli505");
          },
          m(l, s) {
            T(l, e, s), o.m(e, null);
          },
          p(l, [s]) {
            n === (n = x(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e, null)));
          },
          i: Z,
          o: Z,
          d(l) {
            l && P(e), o.d();
          }
        };
      }
      function li(t, e, x) {
        let { params: n = {} } = e, o = "verifying", l = null;
        L0(async () => {
          const a = n.token;
          if (!a) {
            x(1, l = "No verification token found in link."), x(0, o = "error");
            return;
          }
          try {
            await sr(a), x(0, o = "success");
          } catch (c) {
            x(1, l = c.message), x(0, o = "error");
          }
        });
        const s = () => i0("/settings"), r = () => i0("/settings");
        return t.$$set = (a) => {
          "params" in a && x(2, n = a.params);
        }, [
          o,
          l,
          n,
          s,
          r
        ];
      }
      class si extends k0 {
        constructor(e) {
          super(), _0(this, e, li, oi, m0, {
            params: 2
          });
        }
      }
      function un(t, e, x) {
        const n = t.slice();
        n[8] = e[x], n[11] = x;
        const o = n[0].length - 1 - n[11];
        return n[9] = o, n;
      }
      function ri(t) {
        let e, x = A0([
          ...t[0]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = Bn(un(t, x, o));
        return {
          c() {
            e = f("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            E(e, "class", "svelte-rm8f27");
          },
          m(o, l) {
            T(o, e, l);
            for (let s = 0; s < n.length; s += 1) n[s] && n[s].m(e, null);
          },
          p(o, l) {
            if (l & 9) {
              x = A0([
                ...o[0]
              ].reverse());
              let s;
              for (s = 0; s < x.length; s += 1) {
                const r = un(o, x, s);
                n[s] ? n[s].p(r, l) : (n[s] = Bn(r), n[s].c(), n[s].m(e, null));
              }
              for (; s < n.length; s += 1) n[s].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), Y0(n, o);
          }
        };
      }
      function ai(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "No notifications received yet.", E(e, "class", "muted svelte-rm8f27");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function En(t) {
        let e;
        function x(l, s) {
          return l[8].labVerified ? ci : ii;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            e = f("div"), o.c(), E(e, "class", "alert-message svelte-rm8f27");
          },
          m(l, s) {
            T(l, e, s), o.m(e, null);
          },
          p(l, s) {
            n === (n = x(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e, null)));
          },
          d(l) {
            l && P(e), o.d();
          }
        };
      }
      function ii(t) {
        let e, x = t[8].diseases.map(t[5]).join(", ") + "", n, o;
        return {
          c() {
            e = L("Someone you've interacted with reported testing positive for "), n = L(x), o = L(".");
          },
          m(l, s) {
            T(l, e, s), T(l, n, s), T(l, o, s);
          },
          p(l, s) {
            s & 1 && x !== (x = l[8].diseases.map(l[5]).join(", ") + "") && O(n, x);
          },
          d(l) {
            l && (P(e), P(n), P(o));
          }
        };
      }
      function ci(t) {
        let e, x = t[8].diseases.map(t[4]).join(", ") + "", n, o;
        return {
          c() {
            e = L("Someone you've interacted with has tested positive for "), n = L(x), o = L(".");
          },
          m(l, s) {
            T(l, e, s), T(l, n, s), T(l, o, s);
          },
          p(l, s) {
            s & 1 && x !== (x = l[8].diseases.map(l[4]).join(", ") + "") && O(n, x);
          },
          d(l) {
            l && (P(e), P(n), P(o));
          }
        };
      }
      function dn(t) {
        let e;
        return {
          c() {
            e = f("div"), e.textContent = "This result is self-reported.", E(e, "class", "unverified-note svelte-rm8f27");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function fn(t) {
        let e, x, n;
        function o() {
          return t[7](t[9]);
        }
        return {
          c() {
            e = f("button"), e.textContent = "Mark viewed", E(e, "class", "btn-text svelte-rm8f27");
          },
          m(l, s) {
            T(l, e, s), x || (n = R(e, "click", o), x = true);
          },
          p(l, s) {
            t = l;
          },
          d(l) {
            l && P(e), x = false, n();
          }
        };
      }
      function Bn(t) {
        let e, x, n, o, l = t[8].labVerified ? "warning_amber" : "info_outline", s, r, a, c, u, d, B, C, A, F = Cn(t[8].testDate) + "", h, D, m, b, p, v, _ = (t[8].diseases.length > 0 ? t[8].diseases.map(t[6]).join(", ") : "the relevant STI") + "", k, w, g, S, M = t[8].diseases.length > 0 && En(t), j = !t[8].labVerified && dn(), I = !t[8].viewed && fn(t);
        return {
          c() {
            e = f("li"), x = f("div"), n = f("div"), o = f("span"), s = L(l), r = y(), a = f("div"), c = f("div"), c.textContent = "Health alert", u = y(), M && M.c(), d = y(), B = f("div"), C = L("Their sample was taken around "), A = f("strong"), h = L(F), D = L("."), m = y(), j && j.c(), b = y(), p = f("div"), v = L("Get tested for "), k = L(_), w = L(". Ask for a full STI panel."), g = y(), I && I.c(), S = y(), E(o, "class", "material-icons alert-icon svelte-rm8f27"), l0(o, "verified", t[8].labVerified), l0(o, "unverified", !t[8].labVerified), E(c, "class", "alert-title svelte-rm8f27"), l0(c, "verified", t[8].labVerified), l0(c, "unverified", !t[8].labVerified), E(B, "class", "alert-dates svelte-rm8f27"), E(p, "class", "get-tested svelte-rm8f27"), E(n, "class", "alert-meta svelte-rm8f27"), E(x, "class", "alert-body svelte-rm8f27"), E(e, "class", "svelte-rm8f27"), l0(e, "unviewed", !t[8].viewed);
          },
          m(N, q) {
            T(N, e, q), i(e, x), i(x, n), i(n, o), i(o, s), i(n, r), i(n, a), i(a, c), i(a, u), M && M.m(a, null), i(a, d), i(a, B), i(B, C), i(B, A), i(A, h), i(B, D), i(a, m), j && j.m(a, null), i(a, b), i(a, p), i(p, v), i(p, k), i(p, w), i(x, g), I && I.m(x, null), i(e, S);
          },
          p(N, q) {
            q & 1 && l !== (l = N[8].labVerified ? "warning_amber" : "info_outline") && O(s, l), q & 1 && l0(o, "verified", N[8].labVerified), q & 1 && l0(o, "unverified", !N[8].labVerified), q & 1 && l0(c, "verified", N[8].labVerified), q & 1 && l0(c, "unverified", !N[8].labVerified), N[8].diseases.length > 0 ? M ? M.p(N, q) : (M = En(N), M.c(), M.m(a, d)) : M && (M.d(1), M = null), q & 1 && F !== (F = Cn(N[8].testDate) + "") && O(h, F), N[8].labVerified ? j && (j.d(1), j = null) : j || (j = dn(), j.c(), j.m(a, b)), q & 1 && _ !== (_ = (N[8].diseases.length > 0 ? N[8].diseases.map(N[6]).join(", ") : "the relevant STI") + "") && O(k, _), N[8].viewed ? I && (I.d(1), I = null) : I ? I.p(N, q) : (I = fn(N), I.c(), I.m(x, null)), q & 1 && l0(e, "unviewed", !N[8].viewed);
          },
          d(N) {
            N && P(e), M && M.d(), j && j.d(), I && I.d();
          }
        };
      }
      function ui(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B = t[1] ? "hourglass_empty" : "refresh", C, A, F = t[1] ? "Checking\u2026" : "Check now", h, D, m, b, p, v, _;
        e = new Q0({});
        function k(S, M) {
          return S[0].length === 0 && !S[1] ? ai : ri;
        }
        let w = k(t), g = w(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), o = f("div"), o.innerHTML = '<h1 class="svelte-rm8f27">Alerts</h1>', l = y(), s = f("section"), r = f("div"), a = f("h2"), a.textContent = "Notification history", c = y(), u = f("button"), d = f("span"), C = L(B), A = y(), h = L(F), D = y(), g.c(), m = y(), b = f("p"), b.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, E(o, "class", "page-header svelte-rm8f27"), E(a, "class", "svelte-rm8f27"), E(d, "class", "material-icons svelte-rm8f27"), E(u, "class", "btn-refresh svelte-rm8f27"), u.disabled = t[1], E(r, "class", "card-header svelte-rm8f27"), E(s, "class", "card svelte-rm8f27"), E(b, "class", "privacy-note svelte-rm8f27"), E(n, "class", "svelte-rm8f27");
          },
          m(S, M) {
            g0(e, S, M), T(S, x, M), T(S, n, M), i(n, o), i(n, l), i(n, s), i(s, r), i(r, a), i(r, c), i(r, u), i(u, d), i(d, C), i(u, A), i(u, h), i(s, D), g.m(s, null), i(n, m), i(n, b), p = true, v || (_ = R(u, "click", t[2]), v = true);
          },
          p(S, [M]) {
            (!p || M & 2) && B !== (B = S[1] ? "hourglass_empty" : "refresh") && O(C, B), (!p || M & 2) && F !== (F = S[1] ? "Checking\u2026" : "Check now") && O(h, F), (!p || M & 2) && (u.disabled = S[1]), w === (w = k(S)) && g ? g.p(S, M) : (g.d(1), g = w(S), g && (g.c(), g.m(s, null)));
          },
          i(S) {
            p || (C0(e.$$.fragment, S), p = true);
          },
          o(S) {
            v0(e.$$.fragment, S), p = false;
          },
          d(S) {
            S && (P(x), P(n)), y0(e, S), g.d(), v = false, _();
          }
        };
      }
      function Cn(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Ei(t, e, x) {
        let n = [], o = false;
        L0(() => {
          if (!q0()) {
            Gr("/alerts"), i0("/login");
            return;
          }
          x(0, n = _x());
        });
        async function l() {
          x(1, o = true);
          try {
            await Ho();
          } catch {
          } finally {
            x(0, n = _x()), x(1, o = false);
          }
        }
        async function s(d) {
          await Ir(d), x(0, n = _x());
        }
        return [
          n,
          o,
          l,
          s,
          (d) => ge[d] ?? d,
          (d) => ge[d] ?? d,
          (d) => ge[d] ?? d,
          (d) => s(d)
        ];
      }
      class di extends k0 {
        constructor(e) {
          super(), _0(this, e, Ei, ui, m0, {});
        }
      }
      var fi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function Bi(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
      }
      var ie = {}, Ci = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
      }, Uo = {}, R0 = {};
      let lt;
      const Ai = [
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
      R0.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17;
      };
      R0.getSymbolTotalCodewords = function(e) {
        return Ai[e];
      };
      R0.getBCHDigit = function(t) {
        let e = 0;
        for (; t !== 0; ) e++, t >>>= 1;
        return e;
      };
      R0.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        lt = e;
      };
      R0.isKanjiModeEnabled = function() {
        return typeof lt < "u";
      };
      R0.toSJIS = function(e) {
        return lt(e);
      };
      var Cx = {};
      (function(t) {
        t.L = {
          bit: 1
        }, t.M = {
          bit: 0
        }, t.Q = {
          bit: 3
        }, t.H = {
          bit: 2
        };
        function e(x) {
          if (typeof x != "string") throw new Error("Param is not a string");
          switch (x.toLowerCase()) {
            case "l":
            case "low":
              return t.L;
            case "m":
            case "medium":
              return t.M;
            case "q":
            case "quartile":
              return t.Q;
            case "h":
            case "high":
              return t.H;
            default:
              throw new Error("Unknown EC Level: " + x);
          }
        }
        t.isValid = function(n) {
          return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
        }, t.from = function(n, o) {
          if (t.isValid(n)) return n;
          try {
            return e(n);
          } catch {
            return o;
          }
        };
      })(Cx);
      function zo() {
        this.buffer = [], this.length = 0;
      }
      zo.prototype = {
        get: function(t) {
          const e = Math.floor(t / 8);
          return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
        },
        put: function(t, e) {
          for (let x = 0; x < e; x++) this.putBit((t >>> e - x - 1 & 1) === 1);
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(t) {
          const e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
        }
      };
      var Fi = zo;
      function Re(t) {
        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
      }
      Re.prototype.set = function(t, e, x, n) {
        const o = t * this.size + e;
        this.data[o] = x, n && (this.reservedBit[o] = true);
      };
      Re.prototype.get = function(t, e) {
        return this.data[t * this.size + e];
      };
      Re.prototype.xor = function(t, e, x) {
        this.data[t * this.size + e] ^= x;
      };
      Re.prototype.isReserved = function(t, e) {
        return this.reservedBit[t * this.size + e];
      };
      var Di = Re, Vo = {};
      (function(t) {
        const e = R0.getSymbolSize;
        t.getRowColCoords = function(n) {
          if (n === 1) return [];
          const o = Math.floor(n / 7) + 2, l = e(n), s = l === 145 ? 26 : Math.ceil((l - 13) / (2 * o - 2)) * 2, r = [
            l - 7
          ];
          for (let a = 1; a < o - 1; a++) r[a] = r[a - 1] - s;
          return r.push(6), r.reverse();
        }, t.getPositions = function(n) {
          const o = [], l = t.getRowColCoords(n), s = l.length;
          for (let r = 0; r < s; r++) for (let a = 0; a < s; a++) r === 0 && a === 0 || r === 0 && a === s - 1 || r === s - 1 && a === 0 || o.push([
            l[r],
            l[a]
          ]);
          return o;
        };
      })(Vo);
      var Go = {};
      const pi = R0.getSymbolSize, An = 7;
      Go.getPositions = function(e) {
        const x = pi(e);
        return [
          [
            0,
            0
          ],
          [
            x - An,
            0
          ],
          [
            0,
            x - An
          ]
        ];
      };
      var Ko = {};
      (function(t) {
        t.Patterns = {
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
        t.isValid = function(o) {
          return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
        }, t.from = function(o) {
          return t.isValid(o) ? parseInt(o, 10) : void 0;
        }, t.getPenaltyN1 = function(o) {
          const l = o.size;
          let s = 0, r = 0, a = 0, c = null, u = null;
          for (let d = 0; d < l; d++) {
            r = a = 0, c = u = null;
            for (let B = 0; B < l; B++) {
              let C = o.get(d, B);
              C === c ? r++ : (r >= 5 && (s += e.N1 + (r - 5)), c = C, r = 1), C = o.get(B, d), C === u ? a++ : (a >= 5 && (s += e.N1 + (a - 5)), u = C, a = 1);
            }
            r >= 5 && (s += e.N1 + (r - 5)), a >= 5 && (s += e.N1 + (a - 5));
          }
          return s;
        }, t.getPenaltyN2 = function(o) {
          const l = o.size;
          let s = 0;
          for (let r = 0; r < l - 1; r++) for (let a = 0; a < l - 1; a++) {
            const c = o.get(r, a) + o.get(r, a + 1) + o.get(r + 1, a) + o.get(r + 1, a + 1);
            (c === 4 || c === 0) && s++;
          }
          return s * e.N2;
        }, t.getPenaltyN3 = function(o) {
          const l = o.size;
          let s = 0, r = 0, a = 0;
          for (let c = 0; c < l; c++) {
            r = a = 0;
            for (let u = 0; u < l; u++) r = r << 1 & 2047 | o.get(c, u), u >= 10 && (r === 1488 || r === 93) && s++, a = a << 1 & 2047 | o.get(u, c), u >= 10 && (a === 1488 || a === 93) && s++;
          }
          return s * e.N3;
        }, t.getPenaltyN4 = function(o) {
          let l = 0;
          const s = o.data.length;
          for (let a = 0; a < s; a++) l += o.data[a];
          return Math.abs(Math.ceil(l * 100 / s / 5) - 10) * e.N4;
        };
        function x(n, o, l) {
          switch (n) {
            case t.Patterns.PATTERN000:
              return (o + l) % 2 === 0;
            case t.Patterns.PATTERN001:
              return o % 2 === 0;
            case t.Patterns.PATTERN010:
              return l % 3 === 0;
            case t.Patterns.PATTERN011:
              return (o + l) % 3 === 0;
            case t.Patterns.PATTERN100:
              return (Math.floor(o / 2) + Math.floor(l / 3)) % 2 === 0;
            case t.Patterns.PATTERN101:
              return o * l % 2 + o * l % 3 === 0;
            case t.Patterns.PATTERN110:
              return (o * l % 2 + o * l % 3) % 2 === 0;
            case t.Patterns.PATTERN111:
              return (o * l % 3 + (o + l) % 2) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + n);
          }
        }
        t.applyMask = function(o, l) {
          const s = l.size;
          for (let r = 0; r < s; r++) for (let a = 0; a < s; a++) l.isReserved(a, r) || l.xor(a, r, x(o, a, r));
        }, t.getBestMask = function(o, l) {
          const s = Object.keys(t.Patterns).length;
          let r = 0, a = 1 / 0;
          for (let c = 0; c < s; c++) {
            l(c), t.applyMask(c, o);
            const u = t.getPenaltyN1(o) + t.getPenaltyN2(o) + t.getPenaltyN3(o) + t.getPenaltyN4(o);
            t.applyMask(c, o), u < a && (a = u, r = c);
          }
          return r;
        };
      })(Ko);
      var Ax = {};
      const $0 = Cx, ze = [
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
      ], Ve = [
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
      Ax.getBlocksCount = function(e, x) {
        switch (x) {
          case $0.L:
            return ze[(e - 1) * 4 + 0];
          case $0.M:
            return ze[(e - 1) * 4 + 1];
          case $0.Q:
            return ze[(e - 1) * 4 + 2];
          case $0.H:
            return ze[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      Ax.getTotalCodewordsCount = function(e, x) {
        switch (x) {
          case $0.L:
            return Ve[(e - 1) * 4 + 0];
          case $0.M:
            return Ve[(e - 1) * 4 + 1];
          case $0.Q:
            return Ve[(e - 1) * 4 + 2];
          case $0.H:
            return Ve[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      var Yo = {}, Fx = {};
      const ye = new Uint8Array(512), sx = new Uint8Array(256);
      (function() {
        let e = 1;
        for (let x = 0; x < 255; x++) ye[x] = e, sx[e] = x, e <<= 1, e & 256 && (e ^= 285);
        for (let x = 255; x < 512; x++) ye[x] = ye[x - 255];
      })();
      Fx.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return sx[e];
      };
      Fx.exp = function(e) {
        return ye[e];
      };
      Fx.mul = function(e, x) {
        return e === 0 || x === 0 ? 0 : ye[sx[e] + sx[x]];
      };
      (function(t) {
        const e = Fx;
        t.mul = function(n, o) {
          const l = new Uint8Array(n.length + o.length - 1);
          for (let s = 0; s < n.length; s++) for (let r = 0; r < o.length; r++) l[s + r] ^= e.mul(n[s], o[r]);
          return l;
        }, t.mod = function(n, o) {
          let l = new Uint8Array(n);
          for (; l.length - o.length >= 0; ) {
            const s = l[0];
            for (let a = 0; a < o.length; a++) l[a] ^= e.mul(o[a], s);
            let r = 0;
            for (; r < l.length && l[r] === 0; ) r++;
            l = l.slice(r);
          }
          return l;
        }, t.generateECPolynomial = function(n) {
          let o = new Uint8Array([
            1
          ]);
          for (let l = 0; l < n; l++) o = t.mul(o, new Uint8Array([
            1,
            e.exp(l)
          ]));
          return o;
        };
      })(Yo);
      const Jo = Yo;
      function st(t) {
        this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
      }
      st.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = Jo.generateECPolynomial(this.degree);
      };
      st.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const x = new Uint8Array(e.length + this.degree);
        x.set(e);
        const n = Jo.mod(x, this.genPoly), o = this.degree - n.length;
        if (o > 0) {
          const l = new Uint8Array(this.degree);
          return l.set(n, o), l;
        }
        return n;
      };
      var mi = st, Qo = {}, xe = {}, rt = {};
      rt.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
      var W0 = {};
      const Wo = "[0-9]+", hi = "[A-Z $%*+\\-./:]+";
      let je = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      je = je.replace(/u/g, "\\u");
      const vi = "(?:(?![A-Z0-9 $%*+\\-./:]|" + je + `)(?:.|[\r
]))+`;
      W0.KANJI = new RegExp(je, "g");
      W0.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      W0.BYTE = new RegExp(vi, "g");
      W0.NUMERIC = new RegExp(Wo, "g");
      W0.ALPHANUMERIC = new RegExp(hi, "g");
      const _i = new RegExp("^" + je + "$"), ki = new RegExp("^" + Wo + "$"), bi = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      W0.testKanji = function(e) {
        return _i.test(e);
      };
      W0.testNumeric = function(e) {
        return ki.test(e);
      };
      W0.testAlphanumeric = function(e) {
        return bi.test(e);
      };
      (function(t) {
        const e = rt, x = W0;
        t.NUMERIC = {
          id: "Numeric",
          bit: 1,
          ccBits: [
            10,
            12,
            14
          ]
        }, t.ALPHANUMERIC = {
          id: "Alphanumeric",
          bit: 2,
          ccBits: [
            9,
            11,
            13
          ]
        }, t.BYTE = {
          id: "Byte",
          bit: 4,
          ccBits: [
            8,
            16,
            16
          ]
        }, t.KANJI = {
          id: "Kanji",
          bit: 8,
          ccBits: [
            8,
            10,
            12
          ]
        }, t.MIXED = {
          bit: -1
        }, t.getCharCountIndicator = function(l, s) {
          if (!l.ccBits) throw new Error("Invalid mode: " + l);
          if (!e.isValid(s)) throw new Error("Invalid version: " + s);
          return s >= 1 && s < 10 ? l.ccBits[0] : s < 27 ? l.ccBits[1] : l.ccBits[2];
        }, t.getBestModeForData = function(l) {
          return x.testNumeric(l) ? t.NUMERIC : x.testAlphanumeric(l) ? t.ALPHANUMERIC : x.testKanji(l) ? t.KANJI : t.BYTE;
        }, t.toString = function(l) {
          if (l && l.id) return l.id;
          throw new Error("Invalid mode");
        }, t.isValid = function(l) {
          return l && l.bit && l.ccBits;
        };
        function n(o) {
          if (typeof o != "string") throw new Error("Param is not a string");
          switch (o.toLowerCase()) {
            case "numeric":
              return t.NUMERIC;
            case "alphanumeric":
              return t.ALPHANUMERIC;
            case "kanji":
              return t.KANJI;
            case "byte":
              return t.BYTE;
            default:
              throw new Error("Unknown mode: " + o);
          }
        }
        t.from = function(l, s) {
          if (t.isValid(l)) return l;
          try {
            return n(l);
          } catch {
            return s;
          }
        };
      })(xe);
      (function(t) {
        const e = R0, x = Ax, n = Cx, o = xe, l = rt, s = 7973, r = e.getBCHDigit(s);
        function a(B, C, A) {
          for (let F = 1; F <= 40; F++) if (C <= t.getCapacity(F, A, B)) return F;
        }
        function c(B, C) {
          return o.getCharCountIndicator(B, C) + 4;
        }
        function u(B, C) {
          let A = 0;
          return B.forEach(function(F) {
            const h = c(F.mode, C);
            A += h + F.getBitsLength();
          }), A;
        }
        function d(B, C) {
          for (let A = 1; A <= 40; A++) if (u(B, A) <= t.getCapacity(A, C, o.MIXED)) return A;
        }
        t.from = function(C, A) {
          return l.isValid(C) ? parseInt(C, 10) : A;
        }, t.getCapacity = function(C, A, F) {
          if (!l.isValid(C)) throw new Error("Invalid QR Code version");
          typeof F > "u" && (F = o.BYTE);
          const h = e.getSymbolTotalCodewords(C), D = x.getTotalCodewordsCount(C, A), m = (h - D) * 8;
          if (F === o.MIXED) return m;
          const b = m - c(F, C);
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
        }, t.getBestVersionForData = function(C, A) {
          let F;
          const h = n.from(A, n.M);
          if (Array.isArray(C)) {
            if (C.length > 1) return d(C, h);
            if (C.length === 0) return 1;
            F = C[0];
          } else F = C;
          return a(F.mode, F.getLength(), h);
        }, t.getEncodedBits = function(C) {
          if (!l.isValid(C) || C < 7) throw new Error("Invalid QR Code version");
          let A = C << 12;
          for (; e.getBCHDigit(A) - r >= 0; ) A ^= s << e.getBCHDigit(A) - r;
          return C << 12 | A;
        };
      })(Qo);
      var Xo = {};
      const Hx = R0, Zo = 1335, wi = 21522, Fn = Hx.getBCHDigit(Zo);
      Xo.getEncodedBits = function(e, x) {
        const n = e.bit << 3 | x;
        let o = n << 10;
        for (; Hx.getBCHDigit(o) - Fn >= 0; ) o ^= Zo << Hx.getBCHDigit(o) - Fn;
        return (n << 10 | o) ^ wi;
      };
      var $o = {};
      const gi = xe;
      function De(t) {
        this.mode = gi.NUMERIC, this.data = t.toString();
      }
      De.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
      };
      De.prototype.getLength = function() {
        return this.data.length;
      };
      De.prototype.getBitsLength = function() {
        return De.getBitsLength(this.data.length);
      };
      De.prototype.write = function(e) {
        let x, n, o;
        for (x = 0; x + 3 <= this.data.length; x += 3) n = this.data.substr(x, 3), o = parseInt(n, 10), e.put(o, 10);
        const l = this.data.length - x;
        l > 0 && (n = this.data.substr(x), o = parseInt(n, 10), e.put(o, l * 3 + 1));
      };
      var yi = De;
      const Pi = xe, bx = [
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
      function pe(t) {
        this.mode = Pi.ALPHANUMERIC, this.data = t;
      }
      pe.getBitsLength = function(e) {
        return 11 * Math.floor(e / 2) + 6 * (e % 2);
      };
      pe.prototype.getLength = function() {
        return this.data.length;
      };
      pe.prototype.getBitsLength = function() {
        return pe.getBitsLength(this.data.length);
      };
      pe.prototype.write = function(e) {
        let x;
        for (x = 0; x + 2 <= this.data.length; x += 2) {
          let n = bx.indexOf(this.data[x]) * 45;
          n += bx.indexOf(this.data[x + 1]), e.put(n, 11);
        }
        this.data.length % 2 && e.put(bx.indexOf(this.data[x]), 6);
      };
      var Ti = pe;
      const Si = xe;
      function me(t) {
        this.mode = Si.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
      }
      me.getBitsLength = function(e) {
        return e * 8;
      };
      me.prototype.getLength = function() {
        return this.data.length;
      };
      me.prototype.getBitsLength = function() {
        return me.getBitsLength(this.data.length);
      };
      me.prototype.write = function(t) {
        for (let e = 0, x = this.data.length; e < x; e++) t.put(this.data[e], 8);
      };
      var ji = me;
      const Mi = xe, Ii = R0;
      function he(t) {
        this.mode = Mi.KANJI, this.data = t;
      }
      he.getBitsLength = function(e) {
        return e * 13;
      };
      he.prototype.getLength = function() {
        return this.data.length;
      };
      he.prototype.getBitsLength = function() {
        return he.getBitsLength(this.data.length);
      };
      he.prototype.write = function(t) {
        let e;
        for (e = 0; e < this.data.length; e++) {
          let x = Ii.toSJIS(this.data[e]);
          if (x >= 33088 && x <= 40956) x -= 33088;
          else if (x >= 57408 && x <= 60351) x -= 49472;
          else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
          x = (x >>> 8 & 255) * 192 + (x & 255), t.put(x, 13);
        }
      };
      var Li = he, el = {
        exports: {}
      };
      (function(t) {
        var e = {
          single_source_shortest_paths: function(x, n, o) {
            var l = {}, s = {};
            s[n] = 0;
            var r = e.PriorityQueue.make();
            r.push(n, 0);
            for (var a, c, u, d, B, C, A, F, h; !r.empty(); ) {
              a = r.pop(), c = a.value, d = a.cost, B = x[c] || {};
              for (u in B) B.hasOwnProperty(u) && (C = B[u], A = d + C, F = s[u], h = typeof s[u] > "u", (h || F > A) && (s[u] = A, r.push(u, A), l[u] = c));
            }
            if (typeof o < "u" && typeof s[o] > "u") {
              var D = [
                "Could not find a path from ",
                n,
                " to ",
                o,
                "."
              ].join("");
              throw new Error(D);
            }
            return l;
          },
          extract_shortest_path_from_predecessor_list: function(x, n) {
            for (var o = [], l = n; l; ) o.push(l), x[l], l = x[l];
            return o.reverse(), o;
          },
          find_path: function(x, n, o) {
            var l = e.single_source_shortest_paths(x, n, o);
            return e.extract_shortest_path_from_predecessor_list(l, o);
          },
          PriorityQueue: {
            make: function(x) {
              var n = e.PriorityQueue, o = {}, l;
              x = x || {};
              for (l in n) n.hasOwnProperty(l) && (o[l] = n[l]);
              return o.queue = [], o.sorter = x.sorter || n.default_sorter, o;
            },
            default_sorter: function(x, n) {
              return x.cost - n.cost;
            },
            push: function(x, n) {
              var o = {
                value: x,
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
        t.exports = e;
      })(el);
      var Ni = el.exports;
      (function(t) {
        const e = xe, x = yi, n = Ti, o = ji, l = Li, s = W0, r = R0, a = Ni;
        function c(D) {
          return unescape(encodeURIComponent(D)).length;
        }
        function u(D, m, b) {
          const p = [];
          let v;
          for (; (v = D.exec(b)) !== null; ) p.push({
            data: v[0],
            index: v.index,
            mode: m,
            length: v[0].length
          });
          return p;
        }
        function d(D) {
          const m = u(s.NUMERIC, e.NUMERIC, D), b = u(s.ALPHANUMERIC, e.ALPHANUMERIC, D);
          let p, v;
          return r.isKanjiModeEnabled() ? (p = u(s.BYTE, e.BYTE, D), v = u(s.KANJI, e.KANJI, D)) : (p = u(s.BYTE_KANJI, e.BYTE, D), v = []), m.concat(b, p, v).sort(function(k, w) {
            return k.index - w.index;
          }).map(function(k) {
            return {
              data: k.data,
              mode: k.mode,
              length: k.length
            };
          });
        }
        function B(D, m) {
          switch (m) {
            case e.NUMERIC:
              return x.getBitsLength(D);
            case e.ALPHANUMERIC:
              return n.getBitsLength(D);
            case e.KANJI:
              return l.getBitsLength(D);
            case e.BYTE:
              return o.getBitsLength(D);
          }
        }
        function C(D) {
          return D.reduce(function(m, b) {
            const p = m.length - 1 >= 0 ? m[m.length - 1] : null;
            return p && p.mode === b.mode ? (m[m.length - 1].data += b.data, m) : (m.push(b), m);
          }, []);
        }
        function A(D) {
          const m = [];
          for (let b = 0; b < D.length; b++) {
            const p = D[b];
            switch (p.mode) {
              case e.NUMERIC:
                m.push([
                  p,
                  {
                    data: p.data,
                    mode: e.ALPHANUMERIC,
                    length: p.length
                  },
                  {
                    data: p.data,
                    mode: e.BYTE,
                    length: p.length
                  }
                ]);
                break;
              case e.ALPHANUMERIC:
                m.push([
                  p,
                  {
                    data: p.data,
                    mode: e.BYTE,
                    length: p.length
                  }
                ]);
                break;
              case e.KANJI:
                m.push([
                  p,
                  {
                    data: p.data,
                    mode: e.BYTE,
                    length: c(p.data)
                  }
                ]);
                break;
              case e.BYTE:
                m.push([
                  {
                    data: p.data,
                    mode: e.BYTE,
                    length: c(p.data)
                  }
                ]);
            }
          }
          return m;
        }
        function F(D, m) {
          const b = {}, p = {
            start: {}
          };
          let v = [
            "start"
          ];
          for (let _ = 0; _ < D.length; _++) {
            const k = D[_], w = [];
            for (let g = 0; g < k.length; g++) {
              const S = k[g], M = "" + _ + g;
              w.push(M), b[M] = {
                node: S,
                lastCount: 0
              }, p[M] = {};
              for (let j = 0; j < v.length; j++) {
                const I = v[j];
                b[I] && b[I].node.mode === S.mode ? (p[I][M] = B(b[I].lastCount + S.length, S.mode) - B(b[I].lastCount, S.mode), b[I].lastCount += S.length) : (b[I] && (b[I].lastCount = S.length), p[I][M] = B(S.length, S.mode) + 4 + e.getCharCountIndicator(S.mode, m));
              }
            }
            v = w;
          }
          for (let _ = 0; _ < v.length; _++) p[v[_]].end = 0;
          return {
            map: p,
            table: b
          };
        }
        function h(D, m) {
          let b;
          const p = e.getBestModeForData(D);
          if (b = e.from(m, p), b !== e.BYTE && b.bit < p.bit) throw new Error('"' + D + '" cannot be encoded with mode ' + e.toString(b) + `.
 Suggested mode is: ` + e.toString(p));
          switch (b === e.KANJI && !r.isKanjiModeEnabled() && (b = e.BYTE), b) {
            case e.NUMERIC:
              return new x(D);
            case e.ALPHANUMERIC:
              return new n(D);
            case e.KANJI:
              return new l(D);
            case e.BYTE:
              return new o(D);
          }
        }
        t.fromArray = function(m) {
          return m.reduce(function(b, p) {
            return typeof p == "string" ? b.push(h(p, null)) : p.data && b.push(h(p.data, p.mode)), b;
          }, []);
        }, t.fromString = function(m, b) {
          const p = d(m, r.isKanjiModeEnabled()), v = A(p), _ = F(v, b), k = a.find_path(_.map, "start", "end"), w = [];
          for (let g = 1; g < k.length - 1; g++) w.push(_.table[k[g]].node);
          return t.fromArray(C(w));
        }, t.rawSplit = function(m) {
          return t.fromArray(d(m, r.isKanjiModeEnabled()));
        };
      })($o);
      const Dx = R0, wx = Cx, qi = Fi, Ri = Di, Oi = Vo, Hi = Go, Ux = Ko, zx = Ax, Ui = mi, rx = Qo, zi = Xo, Vi = xe, gx = $o;
      function Gi(t, e) {
        const x = t.size, n = Hi.getPositions(e);
        for (let o = 0; o < n.length; o++) {
          const l = n[o][0], s = n[o][1];
          for (let r = -1; r <= 7; r++) if (!(l + r <= -1 || x <= l + r)) for (let a = -1; a <= 7; a++) s + a <= -1 || x <= s + a || (r >= 0 && r <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && a >= 2 && a <= 4 ? t.set(l + r, s + a, true, true) : t.set(l + r, s + a, false, true));
        }
      }
      function Ki(t) {
        const e = t.size;
        for (let x = 8; x < e - 8; x++) {
          const n = x % 2 === 0;
          t.set(x, 6, n, true), t.set(6, x, n, true);
        }
      }
      function Yi(t, e) {
        const x = Oi.getPositions(e);
        for (let n = 0; n < x.length; n++) {
          const o = x[n][0], l = x[n][1];
          for (let s = -2; s <= 2; s++) for (let r = -2; r <= 2; r++) s === -2 || s === 2 || r === -2 || r === 2 || s === 0 && r === 0 ? t.set(o + s, l + r, true, true) : t.set(o + s, l + r, false, true);
        }
      }
      function Ji(t, e) {
        const x = t.size, n = rx.getEncodedBits(e);
        let o, l, s;
        for (let r = 0; r < 18; r++) o = Math.floor(r / 3), l = r % 3 + x - 8 - 3, s = (n >> r & 1) === 1, t.set(o, l, s, true), t.set(l, o, s, true);
      }
      function yx(t, e, x) {
        const n = t.size, o = zi.getEncodedBits(e, x);
        let l, s;
        for (l = 0; l < 15; l++) s = (o >> l & 1) === 1, l < 6 ? t.set(l, 8, s, true) : l < 8 ? t.set(l + 1, 8, s, true) : t.set(n - 15 + l, 8, s, true), l < 8 ? t.set(8, n - l - 1, s, true) : l < 9 ? t.set(8, 15 - l - 1 + 1, s, true) : t.set(8, 15 - l - 1, s, true);
        t.set(n - 8, 8, 1, true);
      }
      function Qi(t, e) {
        const x = t.size;
        let n = -1, o = x - 1, l = 7, s = 0;
        for (let r = x - 1; r > 0; r -= 2) for (r === 6 && r--; ; ) {
          for (let a = 0; a < 2; a++) if (!t.isReserved(o, r - a)) {
            let c = false;
            s < e.length && (c = (e[s] >>> l & 1) === 1), t.set(o, r - a, c), l--, l === -1 && (s++, l = 7);
          }
          if (o += n, o < 0 || x <= o) {
            o -= n, n = -n;
            break;
          }
        }
      }
      function Wi(t, e, x) {
        const n = new qi();
        x.forEach(function(a) {
          n.put(a.mode.bit, 4), n.put(a.getLength(), Vi.getCharCountIndicator(a.mode, t)), a.write(n);
        });
        const o = Dx.getSymbolTotalCodewords(t), l = zx.getTotalCodewordsCount(t, e), s = (o - l) * 8;
        for (n.getLengthInBits() + 4 <= s && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
        const r = (s - n.getLengthInBits()) / 8;
        for (let a = 0; a < r; a++) n.put(a % 2 ? 17 : 236, 8);
        return Xi(n, t, e);
      }
      function Xi(t, e, x) {
        const n = Dx.getSymbolTotalCodewords(e), o = zx.getTotalCodewordsCount(e, x), l = n - o, s = zx.getBlocksCount(e, x), r = n % s, a = s - r, c = Math.floor(n / s), u = Math.floor(l / s), d = u + 1, B = c - u, C = new Ui(B);
        let A = 0;
        const F = new Array(s), h = new Array(s);
        let D = 0;
        const m = new Uint8Array(t.buffer);
        for (let k = 0; k < s; k++) {
          const w = k < a ? u : d;
          F[k] = m.slice(A, A + w), h[k] = C.encode(F[k]), A += w, D = Math.max(D, w);
        }
        const b = new Uint8Array(n);
        let p = 0, v, _;
        for (v = 0; v < D; v++) for (_ = 0; _ < s; _++) v < F[_].length && (b[p++] = F[_][v]);
        for (v = 0; v < B; v++) for (_ = 0; _ < s; _++) b[p++] = h[_][v];
        return b;
      }
      function Zi(t, e, x, n) {
        let o;
        if (Array.isArray(t)) o = gx.fromArray(t);
        else if (typeof t == "string") {
          let c = e;
          if (!c) {
            const u = gx.rawSplit(t);
            c = rx.getBestVersionForData(u, x);
          }
          o = gx.fromString(t, c || 40);
        } else throw new Error("Invalid data");
        const l = rx.getBestVersionForData(o, x);
        if (!l) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = l;
        else if (e < l) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + l + `.
`);
        const s = Wi(e, x, o), r = Dx.getSymbolSize(e), a = new Ri(r);
        return Gi(a, e), Ki(a), Yi(a, e), yx(a, x, 0), e >= 7 && Ji(a, e), Qi(a, s), isNaN(n) && (n = Ux.getBestMask(a, yx.bind(null, a, x))), Ux.applyMask(n, a), yx(a, x, n), {
          modules: a,
          version: e,
          errorCorrectionLevel: x,
          maskPattern: n,
          segments: o
        };
      }
      Uo.create = function(e, x) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let n = wx.M, o, l;
        return typeof x < "u" && (n = wx.from(x.errorCorrectionLevel, wx.M), o = rx.from(x.version), l = Ux.from(x.maskPattern), x.toSJISFunc && Dx.setToSJISFunction(x.toSJISFunc)), Zi(e, o, n, l);
      };
      var xl = {}, at = {};
      (function(t) {
        function e(x) {
          if (typeof x == "number" && (x = x.toString()), typeof x != "string") throw new Error("Color should be defined as hex string");
          let n = x.slice().replace("#", "").split("");
          if (n.length < 3 || n.length === 5 || n.length > 8) throw new Error("Invalid hex color: " + x);
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
        t.getOptions = function(n) {
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
        }, t.getScale = function(n, o) {
          return o.width && o.width >= n + o.margin * 2 ? o.width / (n + o.margin * 2) : o.scale;
        }, t.getImageWidth = function(n, o) {
          const l = t.getScale(n, o);
          return Math.floor((n + o.margin * 2) * l);
        }, t.qrToImageData = function(n, o, l) {
          const s = o.modules.size, r = o.modules.data, a = t.getScale(s, l), c = Math.floor((s + l.margin * 2) * a), u = l.margin * a, d = [
            l.color.light,
            l.color.dark
          ];
          for (let B = 0; B < c; B++) for (let C = 0; C < c; C++) {
            let A = (B * c + C) * 4, F = l.color.light;
            if (B >= u && C >= u && B < c - u && C < c - u) {
              const h = Math.floor((B - u) / a), D = Math.floor((C - u) / a);
              F = d[r[h * s + D] ? 1 : 0];
            }
            n[A++] = F.r, n[A++] = F.g, n[A++] = F.b, n[A] = F.a;
          }
        };
      })(at);
      (function(t) {
        const e = at;
        function x(o, l, s) {
          o.clearRect(0, 0, l.width, l.height), l.style || (l.style = {}), l.height = s, l.width = s, l.style.height = s + "px", l.style.width = s + "px";
        }
        function n() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        t.render = function(l, s, r) {
          let a = r, c = s;
          typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), s || (c = n()), a = e.getOptions(a);
          const u = e.getImageWidth(l.modules.size, a), d = c.getContext("2d"), B = d.createImageData(u, u);
          return e.qrToImageData(B.data, l, a), x(d, c, u), d.putImageData(B, 0, 0), c;
        }, t.renderToDataURL = function(l, s, r) {
          let a = r;
          typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), a || (a = {});
          const c = t.render(l, s, a), u = a.type || "image/png", d = a.rendererOpts || {};
          return c.toDataURL(u, d.quality);
        };
      })(xl);
      var tl = {};
      const $i = at;
      function Dn(t, e) {
        const x = t.a / 255, n = e + '="' + t.hex + '"';
        return x < 1 ? n + " " + e + '-opacity="' + x.toFixed(2).slice(1) + '"' : n;
      }
      function Px(t, e, x) {
        let n = t + e;
        return typeof x < "u" && (n += " " + x), n;
      }
      function e9(t, e, x) {
        let n = "", o = 0, l = false, s = 0;
        for (let r = 0; r < t.length; r++) {
          const a = Math.floor(r % e), c = Math.floor(r / e);
          !a && !l && (l = true), t[r] ? (s++, r > 0 && a > 0 && t[r - 1] || (n += l ? Px("M", a + x, 0.5 + c + x) : Px("m", o, 0), o = 0, l = false), a + 1 < e && t[r + 1] || (n += Px("h", s), s = 0)) : o++;
        }
        return n;
      }
      tl.render = function(e, x, n) {
        const o = $i.getOptions(x), l = e.modules.size, s = e.modules.data, r = l + o.margin * 2, a = o.color.light.a ? "<path " + Dn(o.color.light, "fill") + ' d="M0 0h' + r + "v" + r + 'H0z"/>' : "", c = "<path " + Dn(o.color.dark, "stroke") + ' d="' + e9(s, l, o.margin) + '"/>', u = 'viewBox="0 0 ' + r + " " + r + '"', B = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + u + ' shape-rendering="crispEdges">' + a + c + `</svg>
`;
        return typeof n == "function" && n(null, B), B;
      };
      const x9 = Ci, Vx = Uo, nl = xl, t9 = tl;
      function it(t, e, x, n, o) {
        const l = [].slice.call(arguments, 1), s = l.length, r = typeof l[s - 1] == "function";
        if (!r && !x9()) throw new Error("Callback required as last argument");
        if (r) {
          if (s < 2) throw new Error("Too few arguments provided");
          s === 2 ? (o = x, x = e, e = n = void 0) : s === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = x, x = e, e = void 0));
        } else {
          if (s < 1) throw new Error("Too few arguments provided");
          return s === 1 ? (x = e, e = n = void 0) : s === 2 && !e.getContext && (n = x, x = e, e = void 0), new Promise(function(a, c) {
            try {
              const u = Vx.create(x, n);
              a(t(u, e, n));
            } catch (u) {
              c(u);
            }
          });
        }
        try {
          const a = Vx.create(x, n);
          o(null, t(a, e, n));
        } catch (a) {
          o(a);
        }
      }
      ie.create = Vx.create;
      ie.toCanvas = it.bind(null, nl.render);
      ie.toDataURL = it.bind(null, nl.renderToDataURL);
      ie.toString = it.bind(null, function(t, e, x) {
        return t9.render(t, x);
      });
      function n9(t) {
        let e, x, n, o, l, s, r, a = t[0].isHost ? "You started this group" : "Group encounter", c, u, d, B = kn(t[0].date) + "", C, A, F, h, D = t[0].isHost && t[13](), m, b, p, v, _, k, w, g, S, M, j = t[3] && pn(t), I = t[10] && mn(t);
        function N(V, X) {
          return V[5] ? s9 : l9;
        }
        let q = N(t), G = q(t), U = D && vn(t), Y = t[8] && _n(t);
        function Q(V, X) {
          return V[4] ? c9 : i9;
        }
        let H = Q(t), z = H(t);
        return {
          c() {
            j && j.c(), e = y(), I && I.c(), x = y(), n = f("section"), o = f("div"), l = f("span"), l.textContent = "groups", s = y(), r = f("span"), c = L(a), u = y(), d = f("p"), C = L(B), A = y(), F = f("section"), G.c(), h = y(), U && U.c(), m = y(), b = f("section"), p = f("div"), p.innerHTML = '<span class="material-icons privacy-icon svelte-va0y34">lock_outline</span> <p class="privacy-text svelte-va0y34">Your note is stored encrypted and never shared.</p>', v = y(), _ = f("textarea"), k = y(), Y && Y.c(), w = y(), g = f("section"), z.c(), E(l, "class", "material-icons status-icon svelte-va0y34"), E(r, "class", "status-label svelte-va0y34"), E(o, "class", "status-row svelte-va0y34"), E(d, "class", "date svelte-va0y34"), E(n, "class", "card pad svelte-va0y34"), E(F, "class", "card svelte-va0y34"), E(p, "class", "privacy-row svelte-va0y34"), E(_, "placeholder", "Add a private note\u2026"), E(_, "rows", "5"), E(_, "class", "svelte-va0y34"), E(b, "class", "card pad svelte-va0y34"), E(g, "class", "card svelte-va0y34");
          },
          m(V, X) {
            j && j.m(V, X), T(V, e, X), I && I.m(V, X), T(V, x, X), T(V, n, X), i(n, o), i(o, l), i(o, s), i(o, r), i(r, c), i(n, u), i(n, d), i(d, C), T(V, A, X), T(V, F, X), G.m(F, null), T(V, h, X), U && U.m(V, X), T(V, m, X), T(V, b, X), i(b, p), i(b, v), i(b, _), x0(_, t[7]), i(b, k), Y && Y.m(b, null), T(V, w, X), T(V, g, X), z.m(g, null), S || (M = [
              R(_, "input", t[26]),
              R(_, "input", t[17])
            ], S = true);
          },
          p(V, X) {
            V[3] ? j ? j.p(V, X) : (j = pn(V), j.c(), j.m(e.parentNode, e)) : j && (j.d(1), j = null), V[10] ? I ? I.p(V, X) : (I = mn(V), I.c(), I.m(x.parentNode, x)) : I && (I.d(1), I = null), X[0] & 1 && a !== (a = V[0].isHost ? "You started this group" : "Group encounter") && O(c, a), X[0] & 1 && B !== (B = kn(V[0].date) + "") && O(C, B), q === (q = N(V)) && G ? G.p(V, X) : (G.d(1), G = q(V), G && (G.c(), G.m(F, null))), X[0] & 1 && (D = V[0].isHost && V[13]()), D ? U ? U.p(V, X) : (U = vn(V), U.c(), U.m(m.parentNode, m)) : U && (U.d(1), U = null), X[0] & 128 && x0(_, V[7]), V[8] ? Y ? Y.p(V, X) : (Y = _n(V), Y.c(), Y.m(b, null)) : Y && (Y.d(1), Y = null), H === (H = Q(V)) && z ? z.p(V, X) : (z.d(1), z = H(V), z && (z.c(), z.m(g, null)));
          },
          d(V) {
            V && (P(e), P(x), P(n), P(A), P(F), P(h), P(m), P(b), P(w), P(g)), j && j.d(V), I && I.d(V), G.d(), U && U.d(V), Y && Y.d(), z.d(), S = false, r0(M);
          }
        };
      }
      function o9(t) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<p class="muted svelte-va0y34">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-va0y34">\u2190 Back to encounters</a>', E(e, "class", "card pad svelte-va0y34");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function pn(t) {
        let e, x, n, o;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "error_outline", n = y(), o = L(t[3]), E(x, "class", "material-icons svelte-va0y34"), E(e, "class", "toast error-toast svelte-va0y34");
          },
          m(l, s) {
            T(l, e, s), i(e, x), i(e, n), i(e, o);
          },
          p(l, s) {
            s[0] & 8 && O(o, l[3]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function mn(t) {
        let e, x, n, o, l, s, r, a, c, u = t[9] ? "Saving\u2026" : "Save note", d, B, C;
        return {
          c() {
            e = f("section"), x = f("p"), x.textContent = "You have unsaved changes to your note.", n = y(), o = f("div"), l = f("button"), l.textContent = "Keep editing", s = y(), r = f("button"), r.textContent = "Discard", a = y(), c = f("button"), d = L(u), E(x, "class", "confirm-text svelte-va0y34"), E(l, "class", "btn-text svelte-va0y34"), E(r, "class", "btn-text danger svelte-va0y34"), E(c, "class", "btn-filled-sm svelte-va0y34"), c.disabled = t[9], E(o, "class", "confirm-actions svelte-va0y34"), E(e, "class", "card pad leave-confirm svelte-va0y34");
          },
          m(A, F) {
            T(A, e, F), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(o, a), i(o, c), i(c, d), B || (C = [
              R(l, "click", t[24]),
              R(r, "click", t[21]),
              R(c, "click", t[20])
            ], B = true);
          },
          p(A, F) {
            F[0] & 512 && u !== (u = A[9] ? "Saving\u2026" : "Save note") && O(d, u), F[0] & 512 && (c.disabled = A[9]);
          },
          d(A) {
            A && P(e), B = false, r0(C);
          }
        };
      }
      function l9(t) {
        let e, x, n, o, l = (t[0].name ? t[0].name : "Add group name") + "", s, r, a, c, u, d, B = t[0].name && hn();
        return {
          c() {
            e = f("button"), x = f("span"), x.textContent = "edit", n = y(), o = f("span"), s = L(l), r = y(), B && B.c(), a = y(), c = f("span"), c.textContent = "chevron_right", E(x, "class", "material-icons action-icon svelte-va0y34"), E(o, "class", "action-label svelte-va0y34"), E(c, "class", "material-icons action-chevron svelte-va0y34"), E(e, "class", "action-row svelte-va0y34");
          },
          m(C, A) {
            T(C, e, A), i(e, x), i(e, n), i(e, o), i(o, s), i(o, r), B && B.m(o, null), i(e, a), i(e, c), u || (d = R(e, "click", t[14]), u = true);
          },
          p(C, A) {
            A[0] & 1 && l !== (l = (C[0].name ? C[0].name : "Add group name") + "") && O(s, l), C[0].name ? B || (B = hn(), B.c(), B.m(o, null)) : B && (B.d(1), B = null);
          },
          d(C) {
            C && P(e), B && B.d(), u = false, d();
          }
        };
      }
      function s9(t) {
        let e, x, n, o, l, s, r, a, c, u, d = t[2] ? "Saving\u2026" : "Save", B, C, A;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "edit", n = y(), o = f("form"), l = f("input"), s = y(), r = f("div"), a = f("button"), a.textContent = "Cancel", c = y(), u = f("button"), B = L(d), E(x, "class", "material-icons action-icon svelte-va0y34"), E(l, "type", "text"), E(l, "placeholder", "Optional group name"), E(l, "maxlength", "64"), l.autofocus = true, E(l, "class", "svelte-va0y34"), E(a, "type", "button"), E(a, "class", "btn-text svelte-va0y34"), E(u, "type", "submit"), E(u, "class", "btn-filled-sm svelte-va0y34"), u.disabled = t[2], E(r, "class", "name-actions svelte-va0y34"), E(o, "class", "name-form svelte-va0y34"), E(e, "class", "action-row edit-row svelte-va0y34");
          },
          m(F, h) {
            T(F, e, h), i(e, x), i(e, n), i(e, o), i(o, l), x0(l, t[6]), i(o, s), i(o, r), i(r, a), i(r, c), i(r, u), i(u, B), l.focus(), C || (A = [
              R(l, "input", t[25]),
              R(a, "click", t[15]),
              R(o, "submit", Z0(t[16]))
            ], C = true);
          },
          p(F, h) {
            h[0] & 64 && l.value !== F[6] && x0(l, F[6]), h[0] & 4 && d !== (d = F[2] ? "Saving\u2026" : "Save") && O(B, d), h[0] & 4 && (u.disabled = F[2]);
          },
          d(F) {
            F && P(e), C = false, r0(A);
          }
        };
      }
      function hn(t) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Tap to change", E(e, "class", "action-sub svelte-va0y34");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function vn(t) {
        let e, x, n, o, l;
        function s(c, u) {
          return c[11] ? a9 : r9;
        }
        let r = s(t), a = r(t);
        return {
          c() {
            e = f("section"), x = f("p"), x.textContent = "Show this QR for others to join", n = y(), a.c(), o = y(), l = f("p"), l.textContent = "Valid for 24 hours from when you created the group.", E(x, "class", "qr-label svelte-va0y34"), E(l, "class", "qr-hint svelte-va0y34"), E(e, "class", "card pad qr-card svelte-va0y34");
          },
          m(c, u) {
            T(c, e, u), i(e, x), i(e, n), a.m(e, null), i(e, o), i(e, l);
          },
          p(c, u) {
            r === (r = s(c)) && a ? a.p(c, u) : (a.d(1), a = r(c), a && (a.c(), a.m(e, o)));
          },
          d(c) {
            c && P(e), a.d();
          }
        };
      }
      function r9(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Generating QR\u2026", E(e, "class", "muted svelte-va0y34");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function a9(t) {
        let e;
        return {
          c() {
            e = f("div"), E(e, "class", "qr-wrap svelte-va0y34");
          },
          m(x, n) {
            T(x, e, n), e.innerHTML = t[11];
          },
          p(x, n) {
            n[0] & 2048 && (e.innerHTML = x[11]);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function _n(t) {
        let e, x, n = t[9] ? "Saving\u2026" : "Save", o, l, s;
        return {
          c() {
            e = f("div"), x = f("button"), o = L(n), E(x, "class", "btn-filled-sm svelte-va0y34"), x.disabled = t[9], E(e, "class", "note-actions svelte-va0y34");
          },
          m(r, a) {
            T(r, e, a), i(e, x), i(x, o), l || (s = R(x, "click", t[18]), l = true);
          },
          p(r, a) {
            a[0] & 512 && n !== (n = r[9] ? "Saving\u2026" : "Save") && O(o, n), a[0] & 512 && (x.disabled = r[9]);
          },
          d(r) {
            r && P(e), l = false, s();
          }
        };
      }
      function i9(t) {
        let e, x, n;
        return {
          c() {
            e = f("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-va0y34">delete_outline</span> <span class="action-label danger svelte-va0y34">Delete group encounter</span>', E(e, "class", "action-row svelte-va0y34");
          },
          m(o, l) {
            T(o, e, l), x || (n = R(e, "click", t[28]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function c9(t) {
        let e, x, n, o, l, s, r, a = t[2] ? "Deleting\u2026" : "Delete", c, u, d;
        return {
          c() {
            e = f("div"), x = f("p"), x.textContent = "Delete this group encounter? This cannot be undone.", n = y(), o = f("div"), l = f("button"), l.textContent = "Cancel", s = y(), r = f("button"), c = L(a), E(x, "class", "confirm-text svelte-va0y34"), E(l, "class", "btn-text svelte-va0y34"), E(r, "class", "btn-danger-sm svelte-va0y34"), r.disabled = t[2], E(o, "class", "confirm-actions svelte-va0y34"), E(e, "class", "confirm-row svelte-va0y34");
          },
          m(B, C) {
            T(B, e, C), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(r, c), u || (d = [
              R(l, "click", t[27]),
              R(r, "click", t[22])
            ], u = true);
          },
          p(B, C) {
            C[0] & 4 && a !== (a = B[2] ? "Deleting\u2026" : "Delete") && O(c, a), C[0] & 4 && (r.disabled = B[2]);
          },
          d(B) {
            B && P(e), u = false, r0(d);
          }
        };
      }
      function u9(t) {
        let e, x, n, o, l, s, r, a = (t[1] ? "Group not found" : t[12]) + "", c, u, d, B, C;
        e = new Q0({});
        function A(D, m) {
          if (D[1]) return o9;
          if (D[0]) return n9;
        }
        let F = A(t), h = F && F(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), o = f("div"), l = f("button"), l.innerHTML = '<span class="material-icons svelte-va0y34">arrow_back</span>', s = y(), r = f("h1"), c = L(a), u = y(), h && h.c(), E(l, "class", "back-btn svelte-va0y34"), E(r, "class", "svelte-va0y34"), E(o, "class", "page-header svelte-va0y34"), E(n, "class", "svelte-va0y34");
          },
          m(D, m) {
            g0(e, D, m), T(D, x, m), T(D, n, m), i(n, o), i(o, l), i(o, s), i(o, r), i(r, c), i(n, u), h && h.m(n, null), d = true, B || (C = R(l, "click", t[19]), B = true);
          },
          p(D, m) {
            (!d || m[0] & 4098) && a !== (a = (D[1] ? "Group not found" : D[12]) + "") && O(c, a), F === (F = A(D)) && h ? h.p(D, m) : (h && h.d(1), h = F && F(D), h && (h.c(), h.m(n, null)));
          },
          i(D) {
            d || (C0(e.$$.fragment, D), d = true);
          },
          o(D) {
            v0(e.$$.fragment, D), d = false;
          },
          d(D) {
            D && (P(x), P(n)), y0(e, D), h && h.d(), B = false, C();
          }
        };
      }
      function kn(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function E9(t, e, x) {
        let n, { params: o = {} } = e, l = null, s = false, r = false, a = null, c = false, u = false, d = "", B = "", C = false, A = false, F = false, h = null;
        L0(() => {
          if (!q0()) {
            i0("/login");
            return;
          }
          m(), window.addEventListener("beforeunload", D);
        }), ix(() => {
          window.removeEventListener("beforeunload", D);
        });
        function D(H) {
          C && (H.preventDefault(), H.returnValue = "");
        }
        function m() {
          const H = o.tokenHex;
          if (x(0, l = qo().find((z) => t0(z.token) === H) ?? null), !l) {
            x(1, s = true);
            return;
          }
          x(7, B = l.note ?? ""), l.isHost && p() && v();
        }
        function b() {
          return t0(l.token);
        }
        function p() {
          return l ? Math.floor(Date.now() / 1e3) - l.createdAt < 86400 : false;
        }
        async function v() {
          Fe();
          const H = Math.floor(Date.now() / 1e3), z = Gs(b(), H, t0(l.hostContactId), l.name);
          try {
            x(11, h = await ie.toString(z, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#1a1a1a",
                light: "#ffffff"
              }
            }));
          } catch (V) {
            x(3, a = "Could not render QR code: " + V.message);
          }
        }
        function _() {
          x(6, d = l.name ?? ""), x(5, u = true), x(3, a = null);
        }
        function k() {
          x(5, u = false), x(3, a = null);
        }
        async function w() {
          if (!r) {
            x(2, r = true), x(3, a = null);
            try {
              const H = d.trim() || null;
              await mt(b(), {
                name: H
              }), m(), x(5, u = false);
            } catch (H) {
              x(3, a = H.message);
            } finally {
              x(2, r = false);
            }
          }
        }
        function g() {
          x(8, C = B !== (l.note ?? ""));
        }
        async function S() {
          if (!(!C || A)) {
            x(9, A = true), x(3, a = null);
            try {
              const H = B.trim() || null;
              await mt(b(), {
                note: H
              }), m(), x(8, C = false);
            } catch (H) {
              x(3, a = H.message);
            } finally {
              x(9, A = false);
            }
          }
        }
        function M() {
          C ? x(10, F = true) : i0("/encounters");
        }
        async function j() {
          await S(), a || i0("/encounters");
        }
        function I() {
          x(8, C = false), i0("/encounters");
        }
        async function N() {
          if (!r) {
            x(2, r = true), x(3, a = null);
            try {
              await Sr(b()), i0("/encounters");
            } catch (H) {
              x(3, a = H.message), x(2, r = false);
            }
          }
        }
        const q = () => x(10, F = false);
        function G() {
          d = this.value, x(6, d);
        }
        function U() {
          B = this.value, x(7, B);
        }
        const Y = () => x(4, c = false), Q = () => x(4, c = true);
        return t.$$set = (H) => {
          "params" in H && x(23, o = H.params);
        }, t.$$.update = () => {
          t.$$.dirty[0] & 1 && x(12, n = l?.name || "Group encounter");
        }, [
          l,
          s,
          r,
          a,
          c,
          u,
          d,
          B,
          C,
          A,
          F,
          h,
          n,
          p,
          _,
          k,
          w,
          g,
          S,
          M,
          j,
          I,
          N,
          o,
          q,
          G,
          U,
          Y,
          Q
        ];
      }
      class d9 extends k0 {
        constructor(e) {
          super(), _0(this, e, E9, u9, m0, {
            params: 23
          }, null, [
            -1,
            -1
          ]);
        }
      }
      async function f9(t) {
        const e = G0();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const x = e.encounters.map((u) => ({
          raw_token: t0(u.rawToken),
          date: u.date,
          their_contact_id: t0(u.theirContactId)
        })), n = (e.relationships || []).map((u) => ({
          raw_token: t0(u.rawToken),
          date: u.createdAt,
          their_contact_id: t0(u.theirContactId)
        })), o = (e.results || []).map((u) => {
          const d = {};
          for (const B of K0) d[B] = u.positiveDiseases.includes(B) ? "positive" : "negative";
          return {
            test_date: u.date,
            result_json: JSON.stringify({
              panel: d,
              test_date: u.date,
              submission_type: "self_reported"
            }),
            lab_signature: "",
            user_pubkey: "",
            user_signature: "",
            is_positive: u.positiveDiseases.length > 0 ? 1 : 0,
            submission_type: "self_reported",
            has_notified: u.hasNotified ? 1 : 0,
            note: null
          };
        }), l = new TextEncoder().encode(JSON.stringify({
          version: 1,
          contact_id: t0(e.myContactId),
          encounters: [
            ...x,
            ...n
          ],
          test_results: o
        })), s = Le(16), r = await X0(t, s), a = Ne(r, l);
        r.fill(0);
        const c = new Uint8Array(16 + a.length);
        return c.set(s, 0), c.set(a, 16), c;
      }
      const B9 = "peachsafe-backup";
      function bn(t, e, x) {
        const n = t.slice();
        return n[52] = e[x], n;
      }
      function wn(t, e, x) {
        const n = t.slice();
        return n[55] = e[x], n;
      }
      function C9(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C = t[4] ? "verified_user" : "shield", A, F, h = t[4] ? "Enabled" : "Disabled", D, m, b, p, v, _, k, w, g, S, M, j, I, N, q, G, U, Y, Q, H, z, V, X, K, s0, d0;
        function u0($, E0) {
          return $[24] ? p9 : D9;
        }
        let a0 = u0(t), W = a0(t);
        function o0($, E0) {
          if ($[20] === "idle") return k9;
          if ($[20] === "entering_pin") return _9;
          if ($[20] === "exporting") return v9;
          if ($[20] === "done") return h9;
          if ($[20] === "error") return m9;
        }
        let n0 = o0(t), c0 = n0 && n0(t);
        function b0($, E0) {
          return $[4] ? w9 : b9;
        }
        let I0 = b0(t), D0 = I0(t);
        function O0($, E0) {
          return $[4] ? g9 : y9;
        }
        let N0 = O0(t), B0 = N0(t);
        function e0($, E0) {
          return $[3] ? I9 : M9;
        }
        let V0 = e0(t), p0 = V0(t), P0 = t[18] && Mn(t);
        return {
          c() {
            e = f("section"), x = f("h2"), x.textContent = "Export to mobile", n = y(), W.c(), o = y(), c0 && c0.c(), l = y(), s = f("section"), r = f("div"), a = f("div"), c = f("h2"), c.textContent = "Two-factor authentication", u = y(), d = f("span"), B = f("span"), A = L(C), F = y(), D = L(h), m = y(), b = f("p"), D0.c(), p = y(), B0.c(), v = y(), _ = f("section"), k = f("div"), w = f("div"), g = f("h2"), g.textContent = "Email", S = y(), M = f("div"), j = f("span"), I = L(t[2]), N = y(), p0.c(), q = y(), G = f("a"), G.textContent = "Change email", U = y(), Y = f("section"), Y.innerHTML = '<div class="row svelte-19jqudx"><div class="svelte-19jqudx"><h2 class="svelte-19jqudx">Password</h2> <p class="hint svelte-19jqudx">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-19jqudx">Change password</a></div>', Q = y(), H = f("section"), z = f("div"), z.innerHTML = '<h2 class="svelte-19jqudx">Delete account</h2> <p class="hint svelte-19jqudx">Permanently delete your account and all data stored on the server. This cannot be undone.</p>', V = y(), P0 && P0.c(), X = y(), K = f("button"), K.textContent = "Delete account", E(x, "class", "svelte-19jqudx"), E(e, "class", "card svelte-19jqudx"), E(c, "class", "svelte-19jqudx"), E(B, "class", "material-icons svelte-19jqudx"), E(d, "class", "status-badge svelte-19jqudx"), l0(d, "enabled", t[4]), l0(d, "disabled", !t[4]), E(a, "class", "totp-heading svelte-19jqudx"), E(b, "class", "hint svelte-19jqudx"), E(s, "class", "card svelte-19jqudx"), E(g, "class", "svelte-19jqudx"), E(j, "class", "hint email-value svelte-19jqudx"), E(M, "class", "email-meta svelte-19jqudx"), E(w, "class", "svelte-19jqudx"), E(G, "href", "#/change-email"), E(G, "class", "btn-outline-sm svelte-19jqudx"), E(k, "class", "row svelte-19jqudx"), E(_, "class", "card svelte-19jqudx"), E(Y, "class", "card svelte-19jqudx"), E(K, "class", "btn-danger svelte-19jqudx"), E(H, "class", "card danger-card svelte-19jqudx");
          },
          m($, E0) {
            T($, e, E0), i(e, x), i(e, n), W.m(e, null), i(e, o), c0 && c0.m(e, null), T($, l, E0), T($, s, E0), i(s, r), i(r, a), i(a, c), i(a, u), i(a, d), i(d, B), i(B, A), i(d, F), i(d, D), i(r, m), i(r, b), D0.m(b, null), i(s, p), B0.m(s, null), T($, v, E0), T($, _, E0), i(_, k), i(k, w), i(w, g), i(w, S), i(w, M), i(M, j), i(j, I), i(M, N), p0.m(M, null), i(k, q), i(k, G), T($, U, E0), T($, Y, E0), T($, Q, E0), T($, H, E0), i(H, z), i(H, V), P0 && P0.m(H, null), i(H, X), i(H, K), s0 || (d0 = R(K, "click", t[41]), s0 = true);
          },
          p($, E0) {
            a0 !== (a0 = u0($)) && (W.d(1), W = a0($), W && (W.c(), W.m(e, o))), n0 === (n0 = o0($)) && c0 ? c0.p($, E0) : (c0 && c0.d(1), c0 = n0 && n0($), c0 && (c0.c(), c0.m(e, null))), E0[0] & 16 && C !== (C = $[4] ? "verified_user" : "shield") && O(A, C), E0[0] & 16 && h !== (h = $[4] ? "Enabled" : "Disabled") && O(D, h), E0[0] & 16 && l0(d, "enabled", $[4]), E0[0] & 16 && l0(d, "disabled", !$[4]), I0 !== (I0 = b0($)) && (D0.d(1), D0 = I0($), D0 && (D0.c(), D0.m(b, null))), N0 === (N0 = O0($)) && B0 ? B0.p($, E0) : (B0.d(1), B0 = N0($), B0 && (B0.c(), B0.m(s, null))), E0[0] & 4 && O(I, $[2]), V0 !== (V0 = e0($)) && (p0.d(1), p0 = V0($), p0 && (p0.c(), p0.m(M, null))), $[18] ? P0 ? P0.p($, E0) : (P0 = Mn($), P0.c(), P0.m(H, X)) : P0 && (P0.d(1), P0 = null);
          },
          d($) {
            $ && (P(e), P(l), P(s), P(v), P(_), P(U), P(Y), P(Q), P(H)), W.d(), c0 && c0.d(), D0.d(), B0.d(), p0.d(), P0 && P0.d(), s0 = false, d0();
          }
        };
      }
      function A9(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[1]), E(e, "class", "error svelte-19jqudx");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2 && O(x, n[1]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function F9(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Loading\u2026", E(e, "class", "muted svelte-19jqudx");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function D9(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", E(e, "class", "hint svelte-19jqudx");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function p9(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", E(e, "class", "hint warning svelte-19jqudx");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function m9(t) {
        let e, x, n, o, l, s;
        return {
          c() {
            e = f("p"), x = L(t[23]), n = y(), o = f("button"), o.textContent = "Try again", E(e, "class", "error svelte-19jqudx"), E(o, "class", "btn-ghost svelte-19jqudx");
          },
          m(r, a) {
            T(r, e, a), i(e, x), T(r, n, a), T(r, o, a), l || (s = R(o, "click", t[29]), l = true);
          },
          p(r, a) {
            a[0] & 8388608 && O(x, r[23]);
          },
          d(r) {
            r && (P(e), P(n), P(o)), l = false, s();
          }
        };
      }
      function h9(t) {
        let e, x, n, o, l;
        return {
          c() {
            e = f("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, x = y(), n = f("button"), n.textContent = "Done", E(e, "class", "hint svelte-19jqudx"), E(n, "class", "btn-ghost svelte-19jqudx");
          },
          m(s, r) {
            T(s, e, r), T(s, x, r), T(s, n, r), o || (l = R(n, "click", t[29]), o = true);
          },
          p: Z,
          d(s) {
            s && (P(e), P(x), P(n)), o = false, l();
          }
        };
      }
      function v9(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Encrypting\u2026", E(e, "class", "hint svelte-19jqudx");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function _9(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A, F, h, D, m, b = t[23] && gn(t);
        return {
          c() {
            e = f("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", x = y(), n = f("div"), o = f("label"), l = L(`PIN
            `), s = f("input"), r = y(), a = f("label"), c = L(`Confirm PIN
            `), u = f("input"), d = y(), b && b.c(), B = y(), C = f("div"), A = f("button"), A.textContent = "Download backup", F = y(), h = f("button"), h.textContent = "Cancel", E(e, "class", "hint svelte-19jqudx"), E(s, "type", "password"), E(s, "inputmode", "numeric"), E(s, "maxlength", "6"), E(s, "placeholder", "6 digits"), E(s, "autocomplete", "new-password"), E(u, "type", "password"), E(u, "inputmode", "numeric"), E(u, "maxlength", "6"), E(u, "placeholder", "6 digits"), E(u, "autocomplete", "new-password"), E(A, "class", "btn-primary svelte-19jqudx"), E(h, "class", "btn-ghost svelte-19jqudx"), E(C, "class", "export-actions svelte-19jqudx"), E(n, "class", "export-form svelte-19jqudx");
          },
          m(p, v) {
            T(p, e, v), T(p, x, v), T(p, n, v), i(n, o), i(o, l), i(o, s), x0(s, t[21]), i(n, r), i(n, a), i(a, c), i(a, u), x0(u, t[22]), i(n, d), b && b.m(n, null), i(n, B), i(n, C), i(C, A), i(C, F), i(C, h), D || (m = [
              R(s, "input", t[34]),
              R(u, "input", t[35]),
              R(A, "click", t[28]),
              R(h, "click", t[29])
            ], D = true);
          },
          p(p, v) {
            v[0] & 2097152 && s.value !== p[21] && x0(s, p[21]), v[0] & 4194304 && u.value !== p[22] && x0(u, p[22]), p[23] ? b ? b.p(p, v) : (b = gn(p), b.c(), b.m(n, B)) : b && (b.d(1), b = null);
          },
          d(p) {
            p && (P(e), P(x), P(n)), b && b.d(), D = false, r0(m);
          }
        };
      }
      function k9(t) {
        let e, x, n;
        return {
          c() {
            e = f("button"), e.textContent = "Export data for mobile app", E(e, "class", "btn-primary svelte-19jqudx");
          },
          m(o, l) {
            T(o, e, l), x || (n = R(e, "click", t[33]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function gn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[23]), E(e, "class", "error svelte-19jqudx");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 8388608 && O(x, n[23]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function b9(t) {
        let e;
        return {
          c() {
            e = L("Add an extra layer of security by requiring an authenticator code at login.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function w9(t) {
        let e;
        return {
          c() {
            e = L("Your account requires a code from your authenticator app at login.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function g9(t) {
        let e, x, n, o, l, s, r, a = t[5] !== 1 ? "s" : "", c, u, d, B, C, A, F, h, D, m, b, p, v, _;
        function k(q, G) {
          return q[15].length > 0 ? T9 : P9;
        }
        let w = k(t), g = w(t), S = t[7] && Tn(t);
        function M(q, G) {
          return q[6].length === 0 ? j9 : S9;
        }
        let j = M(t), I = j(t), N = t[11] && jn(t);
        return {
          c() {
            e = f("div"), x = f("div"), n = f("span"), n.textContent = "key", o = y(), l = f("span"), s = L(t[5]), r = L(" backup code"), c = L(a), u = L(" remaining"), d = y(), g.c(), B = y(), C = f("div"), A = f("div"), A.innerHTML = '<span class="material-icons svelte-19jqudx">devices</span> <span>Trusted devices</span>', F = y(), S && S.c(), h = y(), I.c(), D = y(), m = f("div"), N && N.c(), b = y(), p = f("button"), p.textContent = "Disable 2FA", E(n, "class", "material-icons svelte-19jqudx"), E(x, "class", "backup-count svelte-19jqudx"), E(e, "class", "backup-section svelte-19jqudx"), E(A, "class", "backup-count svelte-19jqudx"), E(C, "class", "backup-section svelte-19jqudx"), E(p, "class", "btn-danger svelte-19jqudx"), E(m, "class", "danger-zone svelte-19jqudx");
          },
          m(q, G) {
            T(q, e, G), i(e, x), i(x, n), i(x, o), i(x, l), i(l, s), i(l, r), i(l, c), i(l, u), i(e, d), g.m(e, null), T(q, B, G), T(q, C, G), i(C, A), i(C, F), S && S.m(C, null), i(C, h), I.m(C, null), T(q, D, G), T(q, m, G), N && N.m(m, null), i(m, b), i(m, p), v || (_ = R(p, "click", t[40]), v = true);
          },
          p(q, G) {
            G[0] & 32 && O(s, q[5]), G[0] & 32 && a !== (a = q[5] !== 1 ? "s" : "") && O(c, a), w === (w = k(q)) && g ? g.p(q, G) : (g.d(1), g = w(q), g && (g.c(), g.m(e, null))), q[7] ? S ? S.p(q, G) : (S = Tn(q), S.c(), S.m(C, h)) : S && (S.d(1), S = null), j === (j = M(q)) && I ? I.p(q, G) : (I.d(1), I = j(q), I && (I.c(), I.m(C, null))), q[11] ? N ? N.p(q, G) : (N = jn(q), N.c(), N.m(m, b)) : N && (N.d(1), N = null);
          },
          d(q) {
            q && (P(e), P(B), P(C), P(D), P(m)), g.d(), S && S.d(), I.d(), N && N.d(), v = false, _();
          }
        };
      }
      function y9(t) {
        let e, x, n;
        return {
          c() {
            e = f("button"), e.textContent = "Enable 2FA", E(e, "class", "btn-primary svelte-19jqudx");
          },
          m(o, l) {
            T(o, e, l), x || (n = R(e, "click", t[36]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function P9(t) {
        let e, x, n, o, l, s = t[14] && yn(t);
        return {
          c() {
            s && s.c(), e = y(), x = f("button"), n = L("Regenerate backup codes"), E(x, "class", "btn-outline-sm svelte-19jqudx"), x.disabled = t[13];
          },
          m(r, a) {
            s && s.m(r, a), T(r, e, a), T(r, x, a), i(x, n), o || (l = R(x, "click", t[38]), o = true);
          },
          p(r, a) {
            r[14] ? s ? s.p(r, a) : (s = yn(r), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), a[0] & 8192 && (x.disabled = r[13]);
          },
          d(r) {
            r && (P(e), P(x)), s && s.d(r), o = false, l();
          }
        };
      }
      function T9(t) {
        let e, x, n, o, l, s, r, a, c, u, d = A0(t[15]), B = [];
        for (let C = 0; C < d.length; C += 1) B[C] = Pn(wn(t, d, C));
        return {
          c() {
            e = f("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", x = y(), n = f("div");
            for (let C = 0; C < B.length; C += 1) B[C].c();
            o = y(), l = f("div"), s = f("button"), s.innerHTML = `<span class="material-icons svelte-19jqudx">download</span>
                Download`, r = y(), a = f("button"), a.textContent = "Done", E(e, "class", "hint warning svelte-19jqudx"), E(n, "class", "backup-grid"), E(s, "class", "btn-outline-sm dl-btn svelte-19jqudx"), E(a, "class", "btn-outline-sm svelte-19jqudx"), E(l, "class", "regen-code-actions svelte-19jqudx");
          },
          m(C, A) {
            T(C, e, A), T(C, x, A), T(C, n, A);
            for (let F = 0; F < B.length; F += 1) B[F] && B[F].m(n, null);
            T(C, o, A), T(C, l, A), i(l, s), i(l, r), i(l, a), c || (u = [
              R(s, "click", t[37]),
              R(a, "click", t[31])
            ], c = true);
          },
          p(C, A) {
            if (A[0] & 32768) {
              d = A0(C[15]);
              let F;
              for (F = 0; F < d.length; F += 1) {
                const h = wn(C, d, F);
                B[F] ? B[F].p(h, A) : (B[F] = Pn(h), B[F].c(), B[F].m(n, null));
              }
              for (; F < B.length; F += 1) B[F].d(1);
              B.length = d.length;
            }
          },
          d(C) {
            C && (P(e), P(x), P(n), P(o), P(l)), Y0(B, C), c = false, r0(u);
          }
        };
      }
      function yn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[14]), E(e, "class", "error svelte-19jqudx");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 16384 && O(x, n[14]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Pn(t) {
        let e, x = t[55] + "", n;
        return {
          c() {
            e = f("code"), n = L(x), E(e, "class", "backup-code");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l[0] & 32768 && x !== (x = o[55] + "") && O(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Tn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[7]), E(e, "class", "error svelte-19jqudx");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 128 && O(x, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function S9(t) {
        let e, x = [], n = /* @__PURE__ */ new Map(), o, l, s = t[8] ? "Revoking\u2026" : "Revoke all", r, a, c, u = A0(t[6]);
        const d = (B) => B[52].id;
        for (let B = 0; B < u.length; B += 1) {
          let C = bn(t, u, B), A = d(C);
          n.set(A, x[B] = Sn(A, C));
        }
        return {
          c() {
            e = f("ul");
            for (let B = 0; B < x.length; B += 1) x[B].c();
            o = y(), l = f("button"), r = L(s), E(e, "class", "device-list svelte-19jqudx"), E(l, "class", "btn-outline-sm svelte-19jqudx"), l.disabled = t[8];
          },
          m(B, C) {
            T(B, e, C);
            for (let A = 0; A < x.length; A += 1) x[A] && x[A].m(e, null);
            T(B, o, C), T(B, l, C), i(l, r), a || (c = R(l, "click", t[26]), a = true);
          },
          p(B, C) {
            C[0] & 33554496 && (u = A0(B[6]), x = fl(x, C, d, 1, B, u, n, e, dl, Sn, null, bn)), C[0] & 256 && s !== (s = B[8] ? "Revoking\u2026" : "Revoke all") && O(r, s), C[0] & 256 && (l.disabled = B[8]);
          },
          d(B) {
            B && (P(e), P(o), P(l));
            for (let C = 0; C < x.length; C += 1) x[C].d();
            a = false, c();
          }
        };
      }
      function j9(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = 'No trusted devices. Check "Remember this device" at login to skip 2FA on this browser in future.', E(e, "class", "hint svelte-19jqudx");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function Sn(t, e) {
        let x, n, o = e[52].user_agent ? `${e[52].user_agent} \xB7 ` : "", l, s, r = Hn(e[52].created_at) + "", a, c, u, d, B, C;
        function A() {
          return e[39](e[52]);
        }
        return {
          key: t,
          first: null,
          c() {
            x = f("li"), n = f("span"), l = L(o), s = L("Added "), a = L(r), c = y(), u = f("button"), u.textContent = "Revoke", d = y(), E(n, "class", "device-date svelte-19jqudx"), E(u, "class", "btn-outline-sm svelte-19jqudx"), E(x, "class", "device-item svelte-19jqudx"), this.first = x;
          },
          m(F, h) {
            T(F, x, h), i(x, n), i(n, l), i(n, s), i(n, a), i(x, c), i(x, u), i(x, d), B || (C = R(u, "click", A), B = true);
          },
          p(F, h) {
            e = F, h[0] & 64 && o !== (o = e[52].user_agent ? `${e[52].user_agent} \xB7 ` : "") && O(l, o), h[0] & 64 && r !== (r = Hn(e[52].created_at) + "") && O(a, r);
          },
          d(F) {
            F && P(x), B = false, C();
          }
        };
      }
      function jn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[11]), E(e, "class", "error svelte-19jqudx");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2048 && O(x, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function M9(t) {
        let e;
        return {
          c() {
            e = f("span"), e.innerHTML = `<span class="material-icons svelte-19jqudx">warning</span>
                Unverified`, E(e, "class", "unverified-badge svelte-19jqudx");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function I9(t) {
        let e;
        return {
          c() {
            e = f("span"), e.innerHTML = `<span class="material-icons svelte-19jqudx">verified</span>
                Verified`, E(e, "class", "verified-badge svelte-19jqudx");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Mn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[18]), E(e, "class", "error svelte-19jqudx");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 262144 && O(x, n[18]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function In(t) {
        let e, x, n, o, l, s, r, a, c, u = t[10] ? "Disabling\u2026" : "Yes, disable 2FA", d, B, C, A, F, h, D = t[11] && Ln(t);
        return {
          c() {
            e = f("div"), x = f("div"), n = f("h2"), n.textContent = "Disable two-factor authentication?", o = y(), l = f("p"), l.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, s = y(), D && D.c(), r = y(), a = f("div"), c = f("button"), d = L(u), B = y(), C = f("button"), A = L("Cancel"), E(n, "id", "disable-title"), E(n, "class", "svelte-19jqudx"), E(l, "class", "svelte-19jqudx"), E(c, "class", "btn-danger svelte-19jqudx"), c.disabled = t[10], E(C, "class", "btn-ghost svelte-19jqudx"), C.disabled = t[10], E(a, "class", "dialog-actions svelte-19jqudx"), E(x, "class", "dialog svelte-19jqudx"), E(e, "class", "overlay svelte-19jqudx"), E(e, "role", "dialog"), E(e, "aria-modal", "true"), E(e, "aria-labelledby", "disable-title");
          },
          m(m, b) {
            T(m, e, b), i(e, x), i(x, n), i(x, o), i(x, l), i(x, s), D && D.m(x, null), i(x, r), i(x, a), i(a, c), i(c, d), i(a, B), i(a, C), i(C, A), F || (h = [
              R(c, "click", t[27]),
              R(C, "click", t[42])
            ], F = true);
          },
          p(m, b) {
            m[11] ? D ? D.p(m, b) : (D = Ln(m), D.c(), D.m(x, r)) : D && (D.d(1), D = null), b[0] & 1024 && u !== (u = m[10] ? "Disabling\u2026" : "Yes, disable 2FA") && O(d, u), b[0] & 1024 && (c.disabled = m[10]), b[0] & 1024 && (C.disabled = m[10]);
          },
          d(m) {
            m && P(e), D && D.d(), F = false, r0(h);
          }
        };
      }
      function Ln(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[11]), E(e, "class", "error svelte-19jqudx");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2048 && O(x, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Nn(t) {
        let e, x, n, o, l, s, r, a, c, u = t[13] ? "Regenerating\u2026" : "Regenerate", d, B, C, A, F, h, D = t[14] && qn(t);
        return {
          c() {
            e = f("div"), x = f("div"), n = f("h2"), n.textContent = "Regenerate backup codes?", o = y(), l = f("p"), l.textContent = "All existing backup codes will be permanently invalidated.", s = y(), D && D.c(), r = y(), a = f("div"), c = f("button"), d = L(u), B = y(), C = f("button"), A = L("Cancel"), E(n, "id", "regen-title"), E(n, "class", "svelte-19jqudx"), E(l, "class", "svelte-19jqudx"), E(c, "class", "btn-primary svelte-19jqudx"), c.disabled = t[13], E(C, "class", "btn-ghost svelte-19jqudx"), C.disabled = t[13], E(a, "class", "dialog-actions svelte-19jqudx"), E(x, "class", "dialog svelte-19jqudx"), E(e, "class", "overlay svelte-19jqudx"), E(e, "role", "dialog"), E(e, "aria-modal", "true"), E(e, "aria-labelledby", "regen-title");
          },
          m(m, b) {
            T(m, e, b), i(e, x), i(x, n), i(x, o), i(x, l), i(x, s), D && D.m(x, null), i(x, r), i(x, a), i(a, c), i(c, d), i(a, B), i(a, C), i(C, A), F || (h = [
              R(c, "click", t[30]),
              R(C, "click", t[43])
            ], F = true);
          },
          p(m, b) {
            m[14] ? D ? D.p(m, b) : (D = qn(m), D.c(), D.m(x, r)) : D && (D.d(1), D = null), b[0] & 8192 && u !== (u = m[13] ? "Regenerating\u2026" : "Regenerate") && O(d, u), b[0] & 8192 && (c.disabled = m[13]), b[0] & 8192 && (C.disabled = m[13]);
          },
          d(m) {
            m && P(e), D && D.d(), F = false, r0(h);
          }
        };
      }
      function qn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[14]), E(e, "class", "error svelte-19jqudx");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 16384 && O(x, n[14]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Rn(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A, F, h = t[17] ? "Deleting\u2026" : "Yes, delete my account", D, m, b, p, v, _, k, w = t[18] && On(t);
        return {
          c() {
            e = f("div"), x = f("div"), n = f("h2"), n.textContent = "Delete your account?", o = y(), l = f("p"), l.innerHTML = `This will permanently delete your account and all data stored on the server.
        <strong>There is no undo.</strong>`, s = y(), r = f("p"), r.textContent = "If you haven't already, export your data first so you can import it into the mobile app.", a = y(), c = f("label"), c.textContent = "Type your email address to confirm:", u = y(), d = f("input"), B = y(), w && w.c(), C = y(), A = f("div"), F = f("button"), D = L(h), b = y(), p = f("button"), v = L("Cancel"), E(n, "id", "delete-title"), E(n, "class", "svelte-19jqudx"), E(l, "class", "svelte-19jqudx"), E(r, "class", "hint svelte-19jqudx"), E(c, "class", "confirm-label svelte-19jqudx"), E(c, "for", "delete-confirm-input"), E(d, "id", "delete-confirm-input"), E(d, "class", "confirm-input svelte-19jqudx"), E(d, "type", "text"), E(d, "placeholder", t[2]), E(d, "autocomplete", "off"), d.disabled = t[17], E(F, "class", "btn-danger svelte-19jqudx"), F.disabled = m = t[17] || t[19] !== t[2], E(p, "class", "btn-ghost svelte-19jqudx"), p.disabled = t[17], E(A, "class", "dialog-actions svelte-19jqudx"), E(x, "class", "dialog svelte-19jqudx"), E(e, "class", "overlay svelte-19jqudx"), E(e, "role", "dialog"), E(e, "aria-modal", "true"), E(e, "aria-labelledby", "delete-title");
          },
          m(g, S) {
            T(g, e, S), i(e, x), i(x, n), i(x, o), i(x, l), i(x, s), i(x, r), i(x, a), i(x, c), i(x, u), i(x, d), x0(d, t[19]), i(x, B), w && w.m(x, null), i(x, C), i(x, A), i(A, F), i(F, D), i(A, b), i(A, p), i(p, v), _ || (k = [
              R(d, "input", t[44]),
              R(F, "click", t[32]),
              R(p, "click", t[45])
            ], _ = true);
          },
          p(g, S) {
            S[0] & 4 && E(d, "placeholder", g[2]), S[0] & 131072 && (d.disabled = g[17]), S[0] & 524288 && d.value !== g[19] && x0(d, g[19]), g[18] ? w ? w.p(g, S) : (w = On(g), w.c(), w.m(x, C)) : w && (w.d(1), w = null), S[0] & 131072 && h !== (h = g[17] ? "Deleting\u2026" : "Yes, delete my account") && O(D, h), S[0] & 655364 && m !== (m = g[17] || g[19] !== g[2]) && (F.disabled = m), S[0] & 131072 && (p.disabled = g[17]);
          },
          d(g) {
            g && P(e), w && w.d(), _ = false, r0(k);
          }
        };
      }
      function On(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[18]), E(e, "class", "error svelte-19jqudx");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 262144 && O(x, n[18]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function L9(t) {
        let e, x, n, o, l, s, r, a, c, u;
        e = new Q0({});
        function d(D, m) {
          return D[0] ? F9 : D[1] ? A9 : C9;
        }
        let B = d(t), C = B(t), A = t[9] && In(t), F = t[12] && Nn(t), h = t[16] && Rn(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), o = f("h1"), o.textContent = "Settings", l = y(), C.c(), s = y(), A && A.c(), r = y(), F && F.c(), a = y(), h && h.c(), c = z0(), E(o, "class", "svelte-19jqudx"), E(n, "class", "svelte-19jqudx");
          },
          m(D, m) {
            g0(e, D, m), T(D, x, m), T(D, n, m), i(n, o), i(n, l), C.m(n, null), T(D, s, m), A && A.m(D, m), T(D, r, m), F && F.m(D, m), T(D, a, m), h && h.m(D, m), T(D, c, m), u = true;
          },
          p(D, m) {
            B === (B = d(D)) && C ? C.p(D, m) : (C.d(1), C = B(D), C && (C.c(), C.m(n, null))), D[9] ? A ? A.p(D, m) : (A = In(D), A.c(), A.m(r.parentNode, r)) : A && (A.d(1), A = null), D[12] ? F ? F.p(D, m) : (F = Nn(D), F.c(), F.m(a.parentNode, a)) : F && (F.d(1), F = null), D[16] ? h ? h.p(D, m) : (h = Rn(D), h.c(), h.m(c.parentNode, c)) : h && (h.d(1), h = null);
          },
          i(D) {
            u || (C0(e.$$.fragment, D), u = true);
          },
          o(D) {
            v0(e.$$.fragment, D), u = false;
          },
          d(D) {
            D && (P(x), P(n), P(s), P(r), P(a), P(c)), y0(e, D), C.d(), A && A.d(D), F && F.d(D), h && h.d(D);
          }
        };
      }
      function Hn(t) {
        return new Date(t * 1e3).toLocaleDateString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }
      function N9(t) {
        const e = t.join(`
`), x = new Blob([
          e
        ], {
          type: "text/plain"
        }), n = URL.createObjectURL(x), o = document.createElement("a");
        o.href = n, o.download = "backup-codes.txt", o.click(), URL.revokeObjectURL(n);
      }
      function q9(t, e, x) {
        let n, o, l, s, r, a;
        U0(t, we, (e0) => x(46, n = e0)), U0(t, tx, (e0) => x(47, o = e0)), U0(t, Se, (e0) => x(48, l = e0)), U0(t, ae, (e0) => x(49, s = e0)), U0(t, fx, (e0) => x(50, r = e0)), U0(t, jo, (e0) => x(24, a = e0));
        let c = true, u = null, d = "", B = false, C = false, A = 0, F = [], h = null, D = false, m = false, b = false, p = null, v = false, _ = false, k = null, w = [], g = false, S = false, M = null, j = "";
        L0(async () => {
          if (!q0()) {
            i0("/login");
            return;
          }
          await I();
        });
        async function I() {
          x(0, c = true), x(1, u = null);
          try {
            x(2, d = r ?? ""), x(3, B = s ?? false), x(4, C = l ?? false), C && (x(5, A = o ?? 0), x(6, F = n ?? []));
          } catch (e0) {
            x(1, u = e0.message);
          } finally {
            x(0, c = false);
          }
        }
        async function N(e0) {
          x(7, h = null);
          try {
            await Er(e0), x(6, F = F.filter((V0) => V0.id !== e0)), we.set(F), vx(Ye());
          } catch (V0) {
            x(7, h = V0.message);
          }
        }
        async function q() {
          x(7, h = null), x(8, D = true);
          try {
            await dr(), x(6, F = []), we.set([]), vx(Ye());
          } catch (e0) {
            x(7, h = e0.message);
          } finally {
            x(8, D = false);
          }
        }
        async function G() {
          x(11, p = null), x(10, b = true);
          try {
            await cr(), x(4, C = false), Se.set(false), x(5, A = 0), x(6, F = []), vx(Ye()), x(9, m = false);
          } catch (e0) {
            x(11, p = e0.message);
          } finally {
            x(10, b = false);
          }
        }
        let U = "idle", Y = "", Q = "", H = null;
        async function z() {
          if (x(23, H = null), !/^\d{6}$/.test(Y)) {
            x(23, H = "PIN must be exactly 6 digits.");
            return;
          }
          if (Y !== Q) {
            x(23, H = "PINs do not match.");
            return;
          }
          x(20, U = "exporting");
          try {
            const e0 = await f9(Y), V0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), p0 = `${B9}-${V0}.enc`, P0 = new Blob([
              e0
            ], {
              type: "application/octet-stream"
            }), $ = URL.createObjectURL(P0), E0 = document.createElement("a");
            E0.href = $, E0.download = p0, E0.click(), URL.revokeObjectURL($), x(20, U = "done");
          } catch (e0) {
            x(23, H = e0.message), x(20, U = "error");
          }
        }
        function V() {
          x(20, U = "idle"), x(21, Y = ""), x(22, Q = ""), x(23, H = null);
        }
        async function X() {
          x(14, k = null), x(13, _ = true);
          try {
            const { backup_codes: e0 } = await ur();
            x(15, w = e0), x(5, A = e0.length), tx.set(e0.length), x(12, v = false);
          } catch (e0) {
            x(14, k = e0.message);
          } finally {
            x(13, _ = false);
          }
        }
        function K() {
          x(15, w = []);
        }
        async function s0() {
          x(18, M = null), x(17, S = true);
          try {
            await Ar(), i0("/login");
          } catch (e0) {
            x(18, M = e0.message);
          } finally {
            x(17, S = false);
          }
        }
        const d0 = () => x(20, U = "entering_pin");
        function u0() {
          Y = this.value, x(21, Y);
        }
        function a0() {
          Q = this.value, x(22, Q);
        }
        const W = () => i0("/settings/2fa-setup"), o0 = () => N9(w), n0 = () => {
          x(12, v = true);
        }, c0 = (e0) => N(e0.id), b0 = () => {
          x(9, m = true);
        }, I0 = () => {
          x(16, g = true), x(19, j = "");
        }, D0 = () => {
          x(9, m = false), x(11, p = null);
        }, O0 = () => {
          x(12, v = false), x(14, k = null);
        };
        function N0() {
          j = this.value, x(19, j);
        }
        return [
          c,
          u,
          d,
          B,
          C,
          A,
          F,
          h,
          D,
          m,
          b,
          p,
          v,
          _,
          k,
          w,
          g,
          S,
          M,
          j,
          U,
          Y,
          Q,
          H,
          a,
          N,
          q,
          G,
          z,
          V,
          X,
          K,
          s0,
          d0,
          u0,
          a0,
          W,
          o0,
          n0,
          c0,
          b0,
          I0,
          D0,
          O0,
          N0,
          () => {
            x(16, g = false), x(18, M = null), x(19, j = "");
          }
        ];
      }
      class R9 extends k0 {
        constructor(e) {
          super(), _0(this, e, q9, L9, m0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function Un(t, e, x) {
        const n = t.slice();
        return n[12] = e[x], n;
      }
      function O9(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A = A0(t[4]), F = [];
        for (let h = 0; h < A.length; h += 1) F[h] = zn(Un(t, A, h));
        return {
          c() {
            e = f("div"), x = f("div"), x.innerHTML = '<span class="material-icons success-icon svelte-ks8vck">check_circle</span> <h1 class="svelte-ks8vck">2FA enabled \u2014 save your backup codes</h1>', n = y(), o = f("p"), o.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, l = y(), s = f("div");
            for (let h = 0; h < F.length; h += 1) F[h].c();
            r = y(), a = f("div"), c = f("button"), c.innerHTML = `<span class="material-icons svelte-ks8vck">download</span>
          Download as text file`, u = y(), d = f("button"), d.textContent = "I've saved my backup codes", E(x, "class", "codes-header svelte-ks8vck"), E(o, "class", "hint warning svelte-ks8vck"), E(s, "class", "backup-grid svelte-ks8vck"), E(c, "class", "btn-ghost svelte-ks8vck"), E(d, "class", "btn-primary svelte-ks8vck"), E(a, "class", "codes-actions svelte-ks8vck"), E(e, "class", "card svelte-ks8vck");
          },
          m(h, D) {
            T(h, e, D), i(e, x), i(e, n), i(e, o), i(e, l), i(e, s);
            for (let m = 0; m < F.length; m += 1) F[m] && F[m].m(s, null);
            i(e, r), i(e, a), i(a, c), i(a, u), i(a, d), B || (C = [
              R(c, "click", t[8]),
              R(d, "click", t[9])
            ], B = true);
          },
          p(h, D) {
            if (D & 16) {
              A = A0(h[4]);
              let m;
              for (m = 0; m < A.length; m += 1) {
                const b = Un(h, A, m);
                F[m] ? F[m].p(b, D) : (F[m] = zn(b), F[m].c(), F[m].m(s, null));
              }
              for (; m < F.length; m += 1) F[m].d(1);
              F.length = A.length;
            }
          },
          d(h) {
            h && P(e), Y0(F, h), B = false, r0(C);
          }
        };
      }
      function H9(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A, F, h, D, m, b, p, v, _, k, w, g, S = t[5] ? "Verifying\u2026" : "Enable 2FA", M, j, I, N, q, G, U, Y = t[6] && Vn(t);
        return {
          c() {
            e = f("div"), x = f("div"), n = f("button"), n.innerHTML = '<span class="material-icons svelte-ks8vck">arrow_back</span>', o = y(), l = f("h1"), l.textContent = "Set up authenticator app", s = y(), r = f("p"), r.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, a = y(), c = f("div"), u = f("img"), B = y(), C = f("details"), A = f("summary"), A.textContent = "Can't scan? Enter the key manually", F = y(), h = f("code"), D = L(t[1]), m = y(), b = f("form"), p = f("label"), v = L(`Authenticator code
          `), _ = f("input"), k = y(), Y && Y.c(), w = y(), g = f("button"), M = L(S), I = y(), N = f("button"), q = L("Cancel"), E(n, "class", "back-btn svelte-ks8vck"), E(n, "type", "button"), E(l, "class", "svelte-ks8vck"), E(x, "class", "card-header svelte-ks8vck"), E(r, "class", "hint svelte-ks8vck"), ut(u.src, d = t[2]) || E(u, "src", d), E(u, "alt", "TOTP QR code"), E(u, "width", "200"), E(u, "height", "200"), E(u, "class", "svelte-ks8vck"), E(c, "class", "qr-wrap svelte-ks8vck"), E(A, "class", "svelte-ks8vck"), E(h, "class", "secret-key svelte-ks8vck"), E(C, "class", "manual-entry svelte-ks8vck"), E(_, "type", "text"), E(_, "inputmode", "numeric"), E(_, "pattern", "[0-9]*"), E(_, "maxlength", "6"), _.required = true, E(_, "autocomplete", "one-time-code"), E(_, "placeholder", "000000"), E(_, "class", "svelte-ks8vck"), E(p, "class", "svelte-ks8vck"), E(g, "type", "submit"), E(g, "class", "btn-primary svelte-ks8vck"), g.disabled = j = t[5] || t[3].length !== 6, E(N, "type", "button"), E(N, "class", "btn-ghost svelte-ks8vck"), N.disabled = t[5], E(b, "class", "otp-form svelte-ks8vck"), E(e, "class", "card svelte-ks8vck");
          },
          m(Q, H) {
            T(Q, e, H), i(e, x), i(x, n), i(x, o), i(x, l), i(e, s), i(e, r), i(e, a), i(e, c), i(c, u), i(e, B), i(e, C), i(C, A), i(C, F), i(C, h), i(h, D), i(e, m), i(e, b), i(b, p), i(p, v), i(p, _), x0(_, t[3]), i(b, k), Y && Y.m(b, null), i(b, w), i(b, g), i(g, M), i(b, I), i(b, N), i(N, q), G || (U = [
              R(n, "click", t[10]),
              R(_, "input", t[11]),
              R(N, "click", t[10]),
              R(b, "submit", Z0(t[7]))
            ], G = true);
          },
          p(Q, H) {
            H & 4 && !ut(u.src, d = Q[2]) && E(u, "src", d), H & 2 && O(D, Q[1]), H & 8 && _.value !== Q[3] && x0(_, Q[3]), Q[6] ? Y ? Y.p(Q, H) : (Y = Vn(Q), Y.c(), Y.m(b, w)) : Y && (Y.d(1), Y = null), H & 32 && S !== (S = Q[5] ? "Verifying\u2026" : "Enable 2FA") && O(M, S), H & 40 && j !== (j = Q[5] || Q[3].length !== 6) && (g.disabled = j), H & 32 && (N.disabled = Q[5]);
          },
          d(Q) {
            Q && P(e), Y && Y.d(), G = false, r0(U);
          }
        };
      }
      function U9(t) {
        let e, x, n, o, l, s, r;
        return {
          c() {
            e = f("div"), x = f("p"), n = L(t[6]), o = y(), l = f("button"), l.textContent = "Back to Settings", E(x, "class", "error svelte-ks8vck"), E(l, "class", "btn-ghost svelte-ks8vck"), E(e, "class", "card svelte-ks8vck");
          },
          m(a, c) {
            T(a, e, c), i(e, x), i(x, n), i(e, o), i(e, l), s || (r = R(l, "click", t[10]), s = true);
          },
          p(a, c) {
            c & 64 && O(n, a[6]);
          },
          d(a) {
            a && P(e), s = false, r();
          }
        };
      }
      function z9(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Setting up\u2026", E(e, "class", "muted svelte-ks8vck");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function zn(t) {
        let e, x = t[12] + "", n;
        return {
          c() {
            e = f("code"), n = L(x), E(e, "class", "backup-code svelte-ks8vck");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l & 16 && x !== (x = o[12] + "") && O(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Vn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[6]), E(e, "class", "error svelte-ks8vck");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 64 && O(x, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function V9(t) {
        let e, x, n, o;
        e = new Q0({});
        function l(a, c) {
          if (a[0] === "loading") return z9;
          if (a[0] === "error") return U9;
          if (a[0] === "scan") return H9;
          if (a[0] === "codes") return O9;
        }
        let s = l(t), r = s && s(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), r && r.c(), E(n, "class", "svelte-ks8vck");
          },
          m(a, c) {
            g0(e, a, c), T(a, x, c), T(a, n, c), r && r.m(n, null), o = true;
          },
          p(a, [c]) {
            s === (s = l(a)) && r ? r.p(a, c) : (r && r.d(1), r = s && s(a), r && (r.c(), r.m(n, null)));
          },
          i(a) {
            o || (C0(e.$$.fragment, a), o = true);
          },
          o(a) {
            v0(e.$$.fragment, a), o = false;
          },
          d(a) {
            a && (P(x), P(n)), y0(e, a), r && r.d();
          }
        };
      }
      function G9(t, e, x) {
        let n = "loading", o = "", l = "", s = "", r = [], a = false, c = null;
        L0(async () => {
          if (!q0()) {
            i0("/login");
            return;
          }
          try {
            const { secret: F, uri: h } = await ar();
            x(1, o = F), x(2, l = await ie.toDataURL(h, {
              width: 200,
              margin: 1
            })), x(0, n = "scan");
          } catch (F) {
            x(6, c = F.message), x(0, n = "error");
          }
        });
        async function u() {
          x(6, c = null), x(5, a = true);
          try {
            const { backup_codes: F } = await ir(o, s);
            x(4, r = F), Se.set(true), x(0, n = "codes");
          } catch (F) {
            x(6, c = F.message);
          } finally {
            x(5, a = false);
          }
        }
        function d() {
          const F = r.join(`
`), h = new Blob([
            F
          ], {
            type: "text/plain"
          }), D = URL.createObjectURL(h), m = document.createElement("a");
          m.href = D, m.download = "backup-codes.txt", m.click(), URL.revokeObjectURL(D);
        }
        function B() {
          i0("/settings");
        }
        function C() {
          i0("/settings");
        }
        function A() {
          s = this.value, x(3, s);
        }
        return [
          n,
          o,
          l,
          s,
          r,
          a,
          c,
          u,
          d,
          B,
          C,
          A
        ];
      }
      class K9 extends k0 {
        constructor(e) {
          super(), _0(this, e, G9, V9, m0, {});
        }
      }
      var ol = {
        exports: {}
      };
      (function(t, e) {
        (function(n, o) {
          t.exports = o();
        })(typeof self < "u" ? self : fi, function() {
          return function(x) {
            var n = {};
            function o(l) {
              if (n[l]) return n[l].exports;
              var s = n[l] = {
                i: l,
                l: false,
                exports: {}
              };
              return x[l].call(s.exports, s, s.exports, o), s.l = true, s.exports;
            }
            return o.m = x, o.c = n, o.d = function(l, s, r) {
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
            function(x, n, o) {
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
                }, s.prototype.set = function(r, a, c) {
                  this.data[a * this.width + r] = c ? 1 : 0;
                }, s.prototype.setRegion = function(r, a, c, u, d) {
                  for (var B = a; B < a + u; B++) for (var C = r; C < r + c; C++) this.set(C, B, !!d);
                }, s;
              }();
              n.BitMatrix = l;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(2);
              function s(a, c) {
                return a ^ c;
              }
              n.addOrSubtractGF = s;
              var r = function() {
                function a(c, u, d) {
                  this.primitive = c, this.size = u, this.generatorBase = d, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                  for (var B = 1, C = 0; C < this.size; C++) this.expTable[C] = B, B = B * 2, B >= this.size && (B = (B ^ this.primitive) & this.size - 1);
                  for (var C = 0; C < this.size - 1; C++) this.logTable[this.expTable[C]] = C;
                  this.zero = new l.default(this, Uint8ClampedArray.from([
                    0
                  ])), this.one = new l.default(this, Uint8ClampedArray.from([
                    1
                  ]));
                }
                return a.prototype.multiply = function(c, u) {
                  return c === 0 || u === 0 ? 0 : this.expTable[(this.logTable[c] + this.logTable[u]) % (this.size - 1)];
                }, a.prototype.inverse = function(c) {
                  if (c === 0) throw new Error("Can't invert 0");
                  return this.expTable[this.size - this.logTable[c] - 1];
                }, a.prototype.buildMonomial = function(c, u) {
                  if (c < 0) throw new Error("Invalid monomial degree less than 0");
                  if (u === 0) return this.zero;
                  var d = new Uint8ClampedArray(c + 1);
                  return d[0] = u, new l.default(this, d);
                }, a.prototype.log = function(c) {
                  if (c === 0) throw new Error("Can't take log(0)");
                  return this.logTable[c];
                }, a.prototype.exp = function(c) {
                  return this.expTable[c];
                }, a;
              }();
              n.default = r;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(1), s = function() {
                function r(a, c) {
                  if (c.length === 0) throw new Error("No coefficients.");
                  this.field = a;
                  var u = c.length;
                  if (u > 1 && c[0] === 0) {
                    for (var d = 1; d < u && c[d] === 0; ) d++;
                    if (d === u) this.coefficients = a.zero.coefficients;
                    else {
                      this.coefficients = new Uint8ClampedArray(u - d);
                      for (var B = 0; B < this.coefficients.length; B++) this.coefficients[B] = c[d + B];
                    }
                  } else this.coefficients = c;
                }
                return r.prototype.degree = function() {
                  return this.coefficients.length - 1;
                }, r.prototype.isZero = function() {
                  return this.coefficients[0] === 0;
                }, r.prototype.getCoefficient = function(a) {
                  return this.coefficients[this.coefficients.length - 1 - a];
                }, r.prototype.addOrSubtract = function(a) {
                  var c;
                  if (this.isZero()) return a;
                  if (a.isZero()) return this;
                  var u = this.coefficients, d = a.coefficients;
                  u.length > d.length && (c = [
                    d,
                    u
                  ], u = c[0], d = c[1]);
                  for (var B = new Uint8ClampedArray(d.length), C = d.length - u.length, A = 0; A < C; A++) B[A] = d[A];
                  for (var A = C; A < d.length; A++) B[A] = l.addOrSubtractGF(u[A - C], d[A]);
                  return new r(this.field, B);
                }, r.prototype.multiply = function(a) {
                  if (a === 0) return this.field.zero;
                  if (a === 1) return this;
                  for (var c = this.coefficients.length, u = new Uint8ClampedArray(c), d = 0; d < c; d++) u[d] = this.field.multiply(this.coefficients[d], a);
                  return new r(this.field, u);
                }, r.prototype.multiplyPoly = function(a) {
                  if (this.isZero() || a.isZero()) return this.field.zero;
                  for (var c = this.coefficients, u = c.length, d = a.coefficients, B = d.length, C = new Uint8ClampedArray(u + B - 1), A = 0; A < u; A++) for (var F = c[A], h = 0; h < B; h++) C[A + h] = l.addOrSubtractGF(C[A + h], this.field.multiply(F, d[h]));
                  return new r(this.field, C);
                }, r.prototype.multiplyByMonomial = function(a, c) {
                  if (a < 0) throw new Error("Invalid degree less than 0");
                  if (c === 0) return this.field.zero;
                  for (var u = this.coefficients.length, d = new Uint8ClampedArray(u + a), B = 0; B < u; B++) d[B] = this.field.multiply(this.coefficients[B], c);
                  return new r(this.field, d);
                }, r.prototype.evaluateAt = function(a) {
                  var c = 0;
                  if (a === 0) return this.getCoefficient(0);
                  var u = this.coefficients.length;
                  if (a === 1) return this.coefficients.forEach(function(B) {
                    c = l.addOrSubtractGF(c, B);
                  }), c;
                  c = this.coefficients[0];
                  for (var d = 1; d < u; d++) c = l.addOrSubtractGF(this.field.multiply(a, c), this.coefficients[d]);
                  return c;
                }, r;
              }();
              n.default = s;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(4), s = o(5), r = o(11), a = o(12);
              function c(B) {
                var C = a.locate(B);
                if (!C) return null;
                for (var A = 0, F = C; A < F.length; A++) {
                  var h = F[A], D = r.extract(B, h), m = s.decode(D.matrix);
                  if (m) return {
                    binaryData: m.bytes,
                    data: m.text,
                    chunks: m.chunks,
                    version: m.version,
                    location: {
                      topRightCorner: D.mappingFunction(h.dimension, 0),
                      topLeftCorner: D.mappingFunction(0, 0),
                      bottomRightCorner: D.mappingFunction(h.dimension, h.dimension),
                      bottomLeftCorner: D.mappingFunction(0, h.dimension),
                      topRightFinderPattern: h.topRight,
                      topLeftFinderPattern: h.topLeft,
                      bottomLeftFinderPattern: h.bottomLeft,
                      bottomRightAlignmentPattern: h.alignmentPattern
                    }
                  };
                }
                return null;
              }
              var u = {
                inversionAttempts: "attemptBoth"
              };
              function d(B, C, A, F) {
                F === void 0 && (F = {});
                var h = u;
                Object.keys(h || {}).forEach(function(k) {
                  h[k] = F[k] || h[k];
                });
                var D = h.inversionAttempts === "attemptBoth" || h.inversionAttempts === "invertFirst", m = h.inversionAttempts === "onlyInvert" || h.inversionAttempts === "invertFirst", b = l.binarize(B, C, A, D), p = b.binarized, v = b.inverted, _ = c(m ? v : p);
                return !_ && (h.inversionAttempts === "attemptBoth" || h.inversionAttempts === "invertFirst") && (_ = c(m ? p : v)), _;
              }
              d.default = d, n.default = d;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(0), s = 8, r = 24;
              function a(d, B, C) {
                return d < B ? B : d > C ? C : d;
              }
              var c = function() {
                function d(B, C) {
                  this.width = B, this.data = new Uint8ClampedArray(B * C);
                }
                return d.prototype.get = function(B, C) {
                  return this.data[C * this.width + B];
                }, d.prototype.set = function(B, C, A) {
                  this.data[C * this.width + B] = A;
                }, d;
              }();
              function u(d, B, C, A) {
                if (d.length !== B * C * 4) throw new Error("Malformed data passed to binarizer.");
                for (var F = new c(B, C), h = 0; h < B; h++) for (var D = 0; D < C; D++) {
                  var m = d[(D * B + h) * 4 + 0], b = d[(D * B + h) * 4 + 1], p = d[(D * B + h) * 4 + 2];
                  F.set(h, D, 0.2126 * m + 0.7152 * b + 0.0722 * p);
                }
                for (var v = Math.ceil(B / s), _ = Math.ceil(C / s), k = new c(v, _), w = 0; w < _; w++) for (var g = 0; g < v; g++) {
                  for (var S = 0, M = 1 / 0, j = 0, D = 0; D < s; D++) for (var h = 0; h < s; h++) {
                    var I = F.get(g * s + h, w * s + D);
                    S += I, M = Math.min(M, I), j = Math.max(j, I);
                  }
                  var N = S / Math.pow(s, 2);
                  if (j - M <= r && (N = M / 2, w > 0 && g > 0)) {
                    var q = (k.get(g, w - 1) + 2 * k.get(g - 1, w) + k.get(g - 1, w - 1)) / 4;
                    M < q && (N = q);
                  }
                  k.set(g, w, N);
                }
                var G = l.BitMatrix.createEmpty(B, C), U = null;
                A && (U = l.BitMatrix.createEmpty(B, C));
                for (var w = 0; w < _; w++) for (var g = 0; g < v; g++) {
                  for (var Y = a(g, 2, v - 3), Q = a(w, 2, _ - 3), S = 0, H = -2; H <= 2; H++) for (var z = -2; z <= 2; z++) S += k.get(Y + H, Q + z);
                  for (var V = S / 25, H = 0; H < s; H++) for (var z = 0; z < s; z++) {
                    var h = g * s + H, D = w * s + z, X = F.get(h, D);
                    G.set(h, D, X <= V), A && U.set(h, D, !(X <= V));
                  }
                }
                return A ? {
                  binarized: G,
                  inverted: U
                } : {
                  binarized: G
                };
              }
              n.binarize = u;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(0), s = o(6), r = o(9), a = o(10);
              function c(p, v) {
                for (var _ = p ^ v, k = 0; _; ) k++, _ &= _ - 1;
                return k;
              }
              function u(p, v) {
                return v << 1 | p;
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
              ], B = [
                function(p) {
                  return (p.y + p.x) % 2 === 0;
                },
                function(p) {
                  return p.y % 2 === 0;
                },
                function(p) {
                  return p.x % 3 === 0;
                },
                function(p) {
                  return (p.y + p.x) % 3 === 0;
                },
                function(p) {
                  return (Math.floor(p.y / 2) + Math.floor(p.x / 3)) % 2 === 0;
                },
                function(p) {
                  return p.x * p.y % 2 + p.x * p.y % 3 === 0;
                },
                function(p) {
                  return (p.y * p.x % 2 + p.y * p.x % 3) % 2 === 0;
                },
                function(p) {
                  return ((p.y + p.x) % 2 + p.y * p.x % 3) % 2 === 0;
                }
              ];
              function C(p) {
                var v = 17 + 4 * p.versionNumber, _ = l.BitMatrix.createEmpty(v, v);
                _.setRegion(0, 0, 9, 9, true), _.setRegion(v - 8, 0, 8, 9, true), _.setRegion(0, v - 8, 9, 8, true);
                for (var k = 0, w = p.alignmentPatternCenters; k < w.length; k++) for (var g = w[k], S = 0, M = p.alignmentPatternCenters; S < M.length; S++) {
                  var j = M[S];
                  g === 6 && j === 6 || g === 6 && j === v - 7 || g === v - 7 && j === 6 || _.setRegion(g - 2, j - 2, 5, 5, true);
                }
                return _.setRegion(6, 9, 1, v - 17, true), _.setRegion(9, 6, v - 17, 1, true), p.versionNumber > 6 && (_.setRegion(v - 11, 0, 3, 6, true), _.setRegion(0, v - 11, 6, 3, true)), _;
              }
              function A(p, v, _) {
                for (var k = B[_.dataMask], w = p.height, g = C(v), S = [], M = 0, j = 0, I = true, N = w - 1; N > 0; N -= 2) {
                  N === 6 && N--;
                  for (var q = 0; q < w; q++) for (var G = I ? w - 1 - q : q, U = 0; U < 2; U++) {
                    var Y = N - U;
                    if (!g.get(Y, G)) {
                      j++;
                      var Q = p.get(Y, G);
                      k({
                        y: G,
                        x: Y
                      }) && (Q = !Q), M = u(Q, M), j === 8 && (S.push(M), j = 0, M = 0);
                    }
                  }
                  I = !I;
                }
                return S;
              }
              function F(p) {
                var v = p.height, _ = Math.floor((v - 17) / 4);
                if (_ <= 6) return a.VERSIONS[_ - 1];
                for (var k = 0, w = 5; w >= 0; w--) for (var g = v - 9; g >= v - 11; g--) k = u(p.get(g, w), k);
                for (var S = 0, g = 5; g >= 0; g--) for (var w = v - 9; w >= v - 11; w--) S = u(p.get(g, w), S);
                for (var M = 1 / 0, j, I = 0, N = a.VERSIONS; I < N.length; I++) {
                  var q = N[I];
                  if (q.infoBits === k || q.infoBits === S) return q;
                  var G = c(k, q.infoBits);
                  G < M && (j = q, M = G), G = c(S, q.infoBits), G < M && (j = q, M = G);
                }
                if (M <= 3) return j;
              }
              function h(p) {
                for (var v = 0, _ = 0; _ <= 8; _++) _ !== 6 && (v = u(p.get(_, 8), v));
                for (var k = 7; k >= 0; k--) k !== 6 && (v = u(p.get(8, k), v));
                for (var w = p.height, g = 0, k = w - 1; k >= w - 7; k--) g = u(p.get(8, k), g);
                for (var _ = w - 8; _ < w; _++) g = u(p.get(_, 8), g);
                for (var S = 1 / 0, M = null, j = 0, I = d; j < I.length; j++) {
                  var N = I[j], q = N.bits, G = N.formatInfo;
                  if (q === v || q === g) return G;
                  var U = c(v, q);
                  U < S && (M = G, S = U), v !== g && (U = c(g, q), U < S && (M = G, S = U));
                }
                return S <= 3 ? M : null;
              }
              function D(p, v, _) {
                var k = v.errorCorrectionLevels[_], w = [], g = 0;
                if (k.ecBlocks.forEach(function(Q) {
                  for (var H = 0; H < Q.numBlocks; H++) w.push({
                    numDataCodewords: Q.dataCodewordsPerBlock,
                    codewords: []
                  }), g += Q.dataCodewordsPerBlock + k.ecCodewordsPerBlock;
                }), p.length < g) return null;
                p = p.slice(0, g);
                for (var S = k.ecBlocks[0].dataCodewordsPerBlock, M = 0; M < S; M++) for (var j = 0, I = w; j < I.length; j++) {
                  var N = I[j];
                  N.codewords.push(p.shift());
                }
                if (k.ecBlocks.length > 1) for (var q = k.ecBlocks[0].numBlocks, G = k.ecBlocks[1].numBlocks, M = 0; M < G; M++) w[q + M].codewords.push(p.shift());
                for (; p.length > 0; ) for (var U = 0, Y = w; U < Y.length; U++) {
                  var N = Y[U];
                  N.codewords.push(p.shift());
                }
                return w;
              }
              function m(p) {
                var v = F(p);
                if (!v) return null;
                var _ = h(p);
                if (!_) return null;
                var k = A(p, v, _), w = D(k, v, _.errorCorrectionLevel);
                if (!w) return null;
                for (var g = w.reduce(function(U, Y) {
                  return U + Y.numDataCodewords;
                }, 0), S = new Uint8ClampedArray(g), M = 0, j = 0, I = w; j < I.length; j++) {
                  var N = I[j], q = r.decode(N.codewords, N.codewords.length - N.numDataCodewords);
                  if (!q) return null;
                  for (var G = 0; G < N.numDataCodewords; G++) S[M++] = q[G];
                }
                try {
                  return s.decode(S, v.versionNumber);
                } catch {
                  return null;
                }
              }
              function b(p) {
                if (p == null) return null;
                var v = m(p);
                if (v) return v;
                for (var _ = 0; _ < p.width; _++) for (var k = _ + 1; k < p.height; k++) p.get(_, k) !== p.get(k, _) && (p.set(_, k, !p.get(_, k)), p.set(k, _, !p.get(k, _)));
                return m(p);
              }
              n.decode = b;
            },
            function(x, n, o) {
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
              function c(F, h) {
                for (var D = [], m = "", b = [
                  10,
                  12,
                  14
                ][h], p = F.readBits(b); p >= 3; ) {
                  var v = F.readBits(10);
                  if (v >= 1e3) throw new Error("Invalid numeric value above 999");
                  var _ = Math.floor(v / 100), k = Math.floor(v / 10) % 10, w = v % 10;
                  D.push(48 + _, 48 + k, 48 + w), m += _.toString() + k.toString() + w.toString(), p -= 3;
                }
                if (p === 2) {
                  var v = F.readBits(7);
                  if (v >= 100) throw new Error("Invalid numeric value above 99");
                  var _ = Math.floor(v / 10), k = v % 10;
                  D.push(48 + _, 48 + k), m += _.toString() + k.toString();
                } else if (p === 1) {
                  var v = F.readBits(4);
                  if (v >= 10) throw new Error("Invalid numeric value above 9");
                  D.push(48 + v), m += v.toString();
                }
                return {
                  bytes: D,
                  text: m
                };
              }
              var u = [
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
              function d(F, h) {
                for (var D = [], m = "", b = [
                  9,
                  11,
                  13
                ][h], p = F.readBits(b); p >= 2; ) {
                  var v = F.readBits(11), _ = Math.floor(v / 45), k = v % 45;
                  D.push(u[_].charCodeAt(0), u[k].charCodeAt(0)), m += u[_] + u[k], p -= 2;
                }
                if (p === 1) {
                  var _ = F.readBits(6);
                  D.push(u[_].charCodeAt(0)), m += u[_];
                }
                return {
                  bytes: D,
                  text: m
                };
              }
              function B(F, h) {
                for (var D = [], m = "", b = [
                  8,
                  16,
                  16
                ][h], p = F.readBits(b), v = 0; v < p; v++) {
                  var _ = F.readBits(8);
                  D.push(_);
                }
                try {
                  m += decodeURIComponent(D.map(function(k) {
                    return "%" + ("0" + k.toString(16)).substr(-2);
                  }).join(""));
                } catch {
                }
                return {
                  bytes: D,
                  text: m
                };
              }
              function C(F, h) {
                for (var D = [], m = "", b = [
                  8,
                  10,
                  12
                ][h], p = F.readBits(b), v = 0; v < p; v++) {
                  var _ = F.readBits(13), k = Math.floor(_ / 192) << 8 | _ % 192;
                  k < 7936 ? k += 33088 : k += 49472, D.push(k >> 8, k & 255), m += String.fromCharCode(s.shiftJISTable[k]);
                }
                return {
                  bytes: D,
                  text: m
                };
              }
              function A(F, h) {
                for (var D, m, b, p, v = new l.BitStream(F), _ = h <= 9 ? 0 : h <= 26 ? 1 : 2, k = {
                  text: "",
                  bytes: [],
                  chunks: [],
                  version: h
                }; v.available() >= 4; ) {
                  var w = v.readBits(4);
                  if (w === a.Terminator) return k;
                  if (w === a.ECI) v.readBits(1) === 0 ? k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: v.readBits(7)
                  }) : v.readBits(1) === 0 ? k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: v.readBits(14)
                  }) : v.readBits(1) === 0 ? k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: v.readBits(21)
                  }) : k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: -1
                  });
                  else if (w === a.Numeric) {
                    var g = c(v, _);
                    k.text += g.text, (D = k.bytes).push.apply(D, g.bytes), k.chunks.push({
                      type: r.Numeric,
                      text: g.text
                    });
                  } else if (w === a.Alphanumeric) {
                    var S = d(v, _);
                    k.text += S.text, (m = k.bytes).push.apply(m, S.bytes), k.chunks.push({
                      type: r.Alphanumeric,
                      text: S.text
                    });
                  } else if (w === a.Byte) {
                    var M = B(v, _);
                    k.text += M.text, (b = k.bytes).push.apply(b, M.bytes), k.chunks.push({
                      type: r.Byte,
                      bytes: M.bytes,
                      text: M.text
                    });
                  } else if (w === a.Kanji) {
                    var j = C(v, _);
                    k.text += j.text, (p = k.bytes).push.apply(p, j.bytes), k.chunks.push({
                      type: r.Kanji,
                      bytes: j.bytes,
                      text: j.text
                    });
                  }
                }
                if (v.available() === 0 || v.readBits(v.available()) === 0) return k;
              }
              n.decode = A;
            },
            function(x, n, o) {
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
                    var c = 8 - this.bitOffset, u = r < c ? r : c, d = c - u, B = 255 >> 8 - u << d;
                    a = (this.bytes[this.byteOffset] & B) >> d, r -= u, this.bitOffset += u, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                  }
                  if (r > 0) {
                    for (; r >= 8; ) a = a << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, r -= 8;
                    if (r > 0) {
                      var d = 8 - r, B = 255 >> d << d;
                      a = a << r | (this.bytes[this.byteOffset] & B) >> d, this.bitOffset += r;
                    }
                  }
                  return a;
                }, s.prototype.available = function() {
                  return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
                }, s;
              }();
              n.BitStream = l;
            },
            function(x, n, o) {
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
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(1), s = o(2);
              function r(d, B, C, A) {
                var F;
                B.degree() < C.degree() && (F = [
                  C,
                  B
                ], B = F[0], C = F[1]);
                for (var h = B, D = C, m = d.zero, b = d.one; D.degree() >= A / 2; ) {
                  var p = h, v = m;
                  if (h = D, m = b, h.isZero()) return null;
                  D = p;
                  for (var _ = d.zero, k = h.getCoefficient(h.degree()), w = d.inverse(k); D.degree() >= h.degree() && !D.isZero(); ) {
                    var g = D.degree() - h.degree(), S = d.multiply(D.getCoefficient(D.degree()), w);
                    _ = _.addOrSubtract(d.buildMonomial(g, S)), D = D.addOrSubtract(h.multiplyByMonomial(g, S));
                  }
                  if (b = _.multiplyPoly(m).addOrSubtract(v), D.degree() >= h.degree()) return null;
                }
                var M = b.getCoefficient(0);
                if (M === 0) return null;
                var j = d.inverse(M);
                return [
                  b.multiply(j),
                  D.multiply(j)
                ];
              }
              function a(d, B) {
                var C = B.degree();
                if (C === 1) return [
                  B.getCoefficient(1)
                ];
                for (var A = new Array(C), F = 0, h = 1; h < d.size && F < C; h++) B.evaluateAt(h) === 0 && (A[F] = d.inverse(h), F++);
                return F !== C ? null : A;
              }
              function c(d, B, C) {
                for (var A = C.length, F = new Array(A), h = 0; h < A; h++) {
                  for (var D = d.inverse(C[h]), m = 1, b = 0; b < A; b++) h !== b && (m = d.multiply(m, l.addOrSubtractGF(1, d.multiply(C[b], D))));
                  F[h] = d.multiply(B.evaluateAt(D), d.inverse(m)), d.generatorBase !== 0 && (F[h] = d.multiply(F[h], D));
                }
                return F;
              }
              function u(d, B) {
                var C = new Uint8ClampedArray(d.length);
                C.set(d);
                for (var A = new l.default(285, 256, 0), F = new s.default(A, C), h = new Uint8ClampedArray(B), D = false, m = 0; m < B; m++) {
                  var b = F.evaluateAt(A.exp(m + A.generatorBase));
                  h[h.length - 1 - m] = b, b !== 0 && (D = true);
                }
                if (!D) return C;
                var p = new s.default(A, h), v = r(A, A.buildMonomial(B, 1), p, B);
                if (v === null) return null;
                var _ = a(A, v[0]);
                if (_ == null) return null;
                for (var k = c(A, v[1], _), w = 0; w < _.length; w++) {
                  var g = C.length - 1 - A.log(_[w]);
                  if (g < 0) return null;
                  C[g] = l.addOrSubtractGF(C[g], k[w]);
                }
                return C;
              }
              n.decode = u;
            },
            function(x, n, o) {
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
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(0);
              function s(u, d, B, C) {
                var A = u.x - d.x + B.x - C.x, F = u.y - d.y + B.y - C.y;
                if (A === 0 && F === 0) return {
                  a11: d.x - u.x,
                  a12: d.y - u.y,
                  a13: 0,
                  a21: B.x - d.x,
                  a22: B.y - d.y,
                  a23: 0,
                  a31: u.x,
                  a32: u.y,
                  a33: 1
                };
                var h = d.x - B.x, D = C.x - B.x, m = d.y - B.y, b = C.y - B.y, p = h * b - D * m, v = (A * b - D * F) / p, _ = (h * F - A * m) / p;
                return {
                  a11: d.x - u.x + v * d.x,
                  a12: d.y - u.y + v * d.y,
                  a13: v,
                  a21: C.x - u.x + _ * C.x,
                  a22: C.y - u.y + _ * C.y,
                  a23: _,
                  a31: u.x,
                  a32: u.y,
                  a33: 1
                };
              }
              function r(u, d, B, C) {
                var A = s(u, d, B, C);
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
              function a(u, d) {
                return {
                  a11: u.a11 * d.a11 + u.a21 * d.a12 + u.a31 * d.a13,
                  a12: u.a12 * d.a11 + u.a22 * d.a12 + u.a32 * d.a13,
                  a13: u.a13 * d.a11 + u.a23 * d.a12 + u.a33 * d.a13,
                  a21: u.a11 * d.a21 + u.a21 * d.a22 + u.a31 * d.a23,
                  a22: u.a12 * d.a21 + u.a22 * d.a22 + u.a32 * d.a23,
                  a23: u.a13 * d.a21 + u.a23 * d.a22 + u.a33 * d.a23,
                  a31: u.a11 * d.a31 + u.a21 * d.a32 + u.a31 * d.a33,
                  a32: u.a12 * d.a31 + u.a22 * d.a32 + u.a32 * d.a33,
                  a33: u.a13 * d.a31 + u.a23 * d.a32 + u.a33 * d.a33
                };
              }
              function c(u, d) {
                for (var B = r({
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
                }), C = s(d.topLeft, d.topRight, d.alignmentPattern, d.bottomLeft), A = a(C, B), F = l.BitMatrix.createEmpty(d.dimension, d.dimension), h = function(_, k) {
                  var w = A.a13 * _ + A.a23 * k + A.a33;
                  return {
                    x: (A.a11 * _ + A.a21 * k + A.a31) / w,
                    y: (A.a12 * _ + A.a22 * k + A.a32) / w
                  };
                }, D = 0; D < d.dimension; D++) for (var m = 0; m < d.dimension; m++) {
                  var b = m + 0.5, p = D + 0.5, v = h(b, p);
                  F.set(m, D, u.get(Math.floor(v.x), Math.floor(v.y)));
                }
                return {
                  matrix: F,
                  mappingFunction: h
                };
              }
              n.extract = c;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = 4, s = 0.5, r = 1.5, a = function(b, p) {
                return Math.sqrt(Math.pow(p.x - b.x, 2) + Math.pow(p.y - b.y, 2));
              };
              function c(b) {
                return b.reduce(function(p, v) {
                  return p + v;
                });
              }
              function u(b, p, v) {
                var _, k, w, g, S = a(b, p), M = a(p, v), j = a(b, v), I, N, q;
                return M >= S && M >= j ? (_ = [
                  p,
                  b,
                  v
                ], I = _[0], N = _[1], q = _[2]) : j >= M && j >= S ? (k = [
                  b,
                  p,
                  v
                ], I = k[0], N = k[1], q = k[2]) : (w = [
                  b,
                  v,
                  p
                ], I = w[0], N = w[1], q = w[2]), (q.x - N.x) * (I.y - N.y) - (q.y - N.y) * (I.x - N.x) < 0 && (g = [
                  q,
                  I
                ], I = g[0], q = g[1]), {
                  bottomLeft: I,
                  topLeft: N,
                  topRight: q
                };
              }
              function d(b, p, v, _) {
                var k = (c(C(b, v, _, 5)) / 7 + c(C(b, p, _, 5)) / 7 + c(C(v, b, _, 5)) / 7 + c(C(p, b, _, 5)) / 7) / 4;
                if (k < 1) throw new Error("Invalid module size");
                var w = Math.round(a(b, p) / k), g = Math.round(a(b, v) / k), S = Math.floor((w + g) / 2) + 7;
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
              function B(b, p, v, _) {
                var k = [
                  {
                    x: Math.floor(b.x),
                    y: Math.floor(b.y)
                  }
                ], w = Math.abs(p.y - b.y) > Math.abs(p.x - b.x), g, S, M, j;
                w ? (g = Math.floor(b.y), S = Math.floor(b.x), M = Math.floor(p.y), j = Math.floor(p.x)) : (g = Math.floor(b.x), S = Math.floor(b.y), M = Math.floor(p.x), j = Math.floor(p.y));
                for (var I = Math.abs(M - g), N = Math.abs(j - S), q = Math.floor(-I / 2), G = g < M ? 1 : -1, U = S < j ? 1 : -1, Y = true, Q = g, H = S; Q !== M + G; Q += G) {
                  var z = w ? H : Q, V = w ? Q : H;
                  if (v.get(z, V) !== Y && (Y = !Y, k.push({
                    x: z,
                    y: V
                  }), k.length === _ + 1)) break;
                  if (q += N, q > 0) {
                    if (H === j) break;
                    H += U, q -= I;
                  }
                }
                for (var X = [], K = 0; K < _; K++) k[K] && k[K + 1] ? X.push(a(k[K], k[K + 1])) : X.push(0);
                return X;
              }
              function C(b, p, v, _) {
                var k, w = p.y - b.y, g = p.x - b.x, S = B(b, p, v, Math.ceil(_ / 2)), M = B(b, {
                  x: b.x - g,
                  y: b.y - w
                }, v, Math.ceil(_ / 2)), j = S.shift() + M.shift() - 1;
                return (k = M.concat(j)).concat.apply(k, S);
              }
              function A(b, p) {
                var v = c(b) / c(p), _ = 0;
                return p.forEach(function(k, w) {
                  _ += Math.pow(b[w] - k * v, 2);
                }), {
                  averageSize: v,
                  error: _
                };
              }
              function F(b, p, v) {
                try {
                  var _ = C(b, {
                    x: -1,
                    y: b.y
                  }, v, p.length), k = C(b, {
                    x: b.x,
                    y: -1
                  }, v, p.length), w = {
                    x: Math.max(0, b.x - b.y) - 1,
                    y: Math.max(0, b.y - b.x) - 1
                  }, g = C(b, w, v, p.length), S = {
                    x: Math.min(v.width, b.x + b.y) + 1,
                    y: Math.min(v.height, b.y + b.x) + 1
                  }, M = C(b, S, v, p.length), j = A(_, p), I = A(k, p), N = A(g, p), q = A(M, p), G = Math.sqrt(j.error * j.error + I.error * I.error + N.error * N.error + q.error * q.error), U = (j.averageSize + I.averageSize + N.averageSize + q.averageSize) / 4, Y = (Math.pow(j.averageSize - U, 2) + Math.pow(I.averageSize - U, 2) + Math.pow(N.averageSize - U, 2) + Math.pow(q.averageSize - U, 2)) / U;
                  return G + Y;
                } catch {
                  return 1 / 0;
                }
              }
              function h(b, p) {
                for (var v = Math.round(p.x); b.get(v, Math.round(p.y)); ) v--;
                for (var _ = Math.round(p.x); b.get(_, Math.round(p.y)); ) _++;
                for (var k = (v + _) / 2, w = Math.round(p.y); b.get(Math.round(k), w); ) w--;
                for (var g = Math.round(p.y); b.get(Math.round(k), g); ) g++;
                var S = (w + g) / 2;
                return {
                  x: k,
                  y: S
                };
              }
              function D(b) {
                for (var p = [], v = [], _ = [], k = [], w = function(z) {
                  for (var V = 0, X = false, K = [
                    0,
                    0,
                    0,
                    0,
                    0
                  ], s0 = function(u0) {
                    var a0 = b.get(u0, z);
                    if (a0 === X) V++;
                    else {
                      K = [
                        K[1],
                        K[2],
                        K[3],
                        K[4],
                        V
                      ], V = 1, X = a0;
                      var W = c(K) / 7, o0 = Math.abs(K[0] - W) < W && Math.abs(K[1] - W) < W && Math.abs(K[2] - 3 * W) < 3 * W && Math.abs(K[3] - W) < W && Math.abs(K[4] - W) < W && !a0, n0 = c(K.slice(-3)) / 3, c0 = Math.abs(K[2] - n0) < n0 && Math.abs(K[3] - n0) < n0 && Math.abs(K[4] - n0) < n0 && a0;
                      if (o0) {
                        var b0 = u0 - K[3] - K[4], I0 = b0 - K[2], D0 = {
                          startX: I0,
                          endX: b0,
                          y: z
                        }, O0 = v.filter(function(e0) {
                          return I0 >= e0.bottom.startX && I0 <= e0.bottom.endX || b0 >= e0.bottom.startX && I0 <= e0.bottom.endX || I0 <= e0.bottom.startX && b0 >= e0.bottom.endX && K[2] / (e0.bottom.endX - e0.bottom.startX) < r && K[2] / (e0.bottom.endX - e0.bottom.startX) > s;
                        });
                        O0.length > 0 ? O0[0].bottom = D0 : v.push({
                          top: D0,
                          bottom: D0
                        });
                      }
                      if (c0) {
                        var N0 = u0 - K[4], B0 = N0 - K[3], D0 = {
                          startX: B0,
                          y: z,
                          endX: N0
                        }, O0 = k.filter(function(p0) {
                          return B0 >= p0.bottom.startX && B0 <= p0.bottom.endX || N0 >= p0.bottom.startX && B0 <= p0.bottom.endX || B0 <= p0.bottom.startX && N0 >= p0.bottom.endX && K[2] / (p0.bottom.endX - p0.bottom.startX) < r && K[2] / (p0.bottom.endX - p0.bottom.startX) > s;
                        });
                        O0.length > 0 ? O0[0].bottom = D0 : k.push({
                          top: D0,
                          bottom: D0
                        });
                      }
                    }
                  }, d0 = -1; d0 <= b.width; d0++) s0(d0);
                  p.push.apply(p, v.filter(function(u0) {
                    return u0.bottom.y !== z && u0.bottom.y - u0.top.y >= 2;
                  })), v = v.filter(function(u0) {
                    return u0.bottom.y === z;
                  }), _.push.apply(_, k.filter(function(u0) {
                    return u0.bottom.y !== z;
                  })), k = k.filter(function(u0) {
                    return u0.bottom.y === z;
                  });
                }, g = 0; g <= b.height; g++) w(g);
                p.push.apply(p, v.filter(function(z) {
                  return z.bottom.y - z.top.y >= 2;
                })), _.push.apply(_, k);
                var S = p.filter(function(z) {
                  return z.bottom.y - z.top.y >= 2;
                }).map(function(z) {
                  var V = (z.top.startX + z.top.endX + z.bottom.startX + z.bottom.endX) / 4, X = (z.top.y + z.bottom.y + 1) / 2;
                  if (b.get(Math.round(V), Math.round(X))) {
                    var K = [
                      z.top.endX - z.top.startX,
                      z.bottom.endX - z.bottom.startX,
                      z.bottom.y - z.top.y + 1
                    ], s0 = c(K) / K.length, d0 = F({
                      x: Math.round(V),
                      y: Math.round(X)
                    }, [
                      1,
                      1,
                      3,
                      1,
                      1
                    ], b);
                    return {
                      score: d0,
                      x: V,
                      y: X,
                      size: s0
                    };
                  }
                }).filter(function(z) {
                  return !!z;
                }).sort(function(z, V) {
                  return z.score - V.score;
                }).map(function(z, V, X) {
                  if (V > l) return null;
                  var K = X.filter(function(d0, u0) {
                    return V !== u0;
                  }).map(function(d0) {
                    return {
                      x: d0.x,
                      y: d0.y,
                      score: d0.score + Math.pow(d0.size - z.size, 2) / z.size,
                      size: d0.size
                    };
                  }).sort(function(d0, u0) {
                    return d0.score - u0.score;
                  });
                  if (K.length < 2) return null;
                  var s0 = z.score + K[0].score + K[1].score;
                  return {
                    points: [
                      z
                    ].concat(K.slice(0, 2)),
                    score: s0
                  };
                }).filter(function(z) {
                  return !!z;
                }).sort(function(z, V) {
                  return z.score - V.score;
                });
                if (S.length === 0) return null;
                var M = u(S[0].points[0], S[0].points[1], S[0].points[2]), j = M.topRight, I = M.topLeft, N = M.bottomLeft, q = m(b, _, j, I, N), G = [];
                q && G.push({
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
                    x: I.x,
                    y: I.y
                  },
                  topRight: {
                    x: j.x,
                    y: j.y
                  }
                });
                var U = h(b, j), Y = h(b, I), Q = h(b, N), H = m(b, _, U, Y, Q);
                return H && G.push({
                  alignmentPattern: {
                    x: H.alignmentPattern.x,
                    y: H.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: Q.x,
                    y: Q.y
                  },
                  topLeft: {
                    x: Y.x,
                    y: Y.y
                  },
                  topRight: {
                    x: U.x,
                    y: U.y
                  },
                  dimension: H.dimension
                }), G.length === 0 ? null : G;
              }
              n.locate = D;
              function m(b, p, v, _, k) {
                var w, g, S;
                try {
                  w = d(_, v, k, b), g = w.dimension, S = w.moduleSize;
                } catch {
                  return null;
                }
                var M = {
                  x: v.x - _.x + k.x,
                  y: v.y - _.y + k.y
                }, j = (a(_, k) + a(_, v)) / 2 / S, I = 1 - 3 / j, N = {
                  x: _.x + I * (M.x - _.x),
                  y: _.y + I * (M.y - _.y)
                }, q = p.map(function(U) {
                  var Y = (U.top.startX + U.top.endX + U.bottom.startX + U.bottom.endX) / 4, Q = (U.top.y + U.bottom.y + 1) / 2;
                  if (b.get(Math.floor(Y), Math.floor(Q))) {
                    var H = [
                      U.top.endX - U.top.startX,
                      U.bottom.endX - U.bottom.startX,
                      U.bottom.y - U.top.y + 1
                    ];
                    c(H) / H.length;
                    var z = F({
                      x: Math.floor(Y),
                      y: Math.floor(Q)
                    }, [
                      1,
                      1,
                      1
                    ], b), V = z + a({
                      x: Y,
                      y: Q
                    }, N);
                    return {
                      x: Y,
                      y: Q,
                      score: V
                    };
                  }
                }).filter(function(U) {
                  return !!U;
                }).sort(function(U, Y) {
                  return U.score - Y.score;
                }), G = j >= 15 && q.length ? q[0] : N;
                return {
                  alignmentPattern: G,
                  dimension: g
                };
              }
            }
          ]).default;
        });
      })(ol);
      var Y9 = ol.exports;
      const J9 = Bi(Y9);
      function Gn(t, e, x) {
        const n = t.slice();
        return n[42] = e[x], n;
      }
      function Q9(t) {
        let e;
        return {
          c() {
            e = f("a"), e.innerHTML = '<span class="material-icons svelte-dewqnh">arrow_back</span>', E(e, "class", "back-btn svelte-dewqnh"), E(e, "href", "#/home");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function W9(t) {
        let e, x, n;
        return {
          c() {
            e = f("button"), e.innerHTML = '<span class="material-icons svelte-dewqnh">arrow_back</span>', E(e, "class", "back-btn svelte-dewqnh");
          },
          m(o, l) {
            T(o, e, l), x || (n = R(e, "click", t[15]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function X9(t) {
        let e;
        return {
          c() {
            e = L("New encounter");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Z9(t) {
        let e;
        return {
          c() {
            e = L("Encounter saved");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function $9(t) {
        let e;
        return {
          c() {
            e = L("Join group");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function ec(t) {
        let e;
        return {
          c() {
            e = L("Confirm exchange");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function xc(t) {
        let e;
        return {
          c() {
            e = L("Scan their code");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function tc(t) {
        let e, x, n, o, l, s, r, a, c = t[12] ? "Saving\u2026" : "Join group", u, d, B, C, A, F;
        function h(b, p) {
          return b[11]?.name ? uc : cc;
        }
        let D = h(t), m = D(t);
        return {
          c() {
            e = f("section"), x = f("p"), x.textContent = "Join group encounter?", n = y(), m.c(), o = y(), l = f("div"), s = f("button"), r = f("span"), r.textContent = "groups", a = y(), u = L(c), d = y(), B = f("button"), C = L("Cancel"), E(x, "class", "section-label svelte-dewqnh"), E(r, "class", "material-icons svelte-dewqnh"), E(s, "class", "btn-filled svelte-dewqnh"), s.disabled = t[12], E(B, "class", "btn-text svelte-dewqnh"), B.disabled = t[12], E(l, "class", "ongoing-actions svelte-dewqnh"), E(e, "class", "card pad svelte-dewqnh");
          },
          m(b, p) {
            T(b, e, p), i(e, x), i(e, n), m.m(e, null), i(e, o), i(e, l), i(l, s), i(s, r), i(s, a), i(s, u), i(l, d), i(l, B), i(B, C), A || (F = [
              R(s, "click", t[18]),
              R(B, "click", t[15])
            ], A = true);
          },
          p(b, p) {
            D === (D = h(b)) && m ? m.p(b, p) : (m.d(1), m = D(b), m && (m.c(), m.m(e, o))), p[0] & 4096 && c !== (c = b[12] ? "Saving\u2026" : "Join group") && O(u, c), p[0] & 4096 && (s.disabled = b[12]), p[0] & 4096 && (B.disabled = b[12]);
          },
          d(b) {
            b && P(e), m.d(), A = false, r0(F);
          }
        };
      }
      function nc(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A, F, h = t[12] && Kn();
        return {
          c() {
            e = f("section"), x = f("p"), x.textContent = "Ongoing relationship?", n = y(), o = f("p"), o.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", l = y(), s = f("div"), r = f("button"), a = f("span"), a.textContent = "favorite", c = L(`
          Yes, ongoing`), u = y(), d = f("button"), B = L("No, one off"), C = y(), h && h.c(), E(x, "class", "section-label svelte-dewqnh"), E(o, "class", "help-text svelte-dewqnh"), E(a, "class", "material-icons svelte-dewqnh"), E(r, "class", "btn-filled svelte-dewqnh"), r.disabled = t[12], E(d, "class", "btn-outlined svelte-dewqnh"), d.disabled = t[12], E(s, "class", "ongoing-actions svelte-dewqnh"), E(e, "class", "card pad svelte-dewqnh");
          },
          m(D, m) {
            T(D, e, m), i(e, x), i(e, n), i(e, o), i(e, l), i(e, s), i(s, r), i(r, a), i(r, c), i(s, u), i(s, d), i(d, B), i(e, C), h && h.m(e, null), A || (F = [
              R(r, "click", t[25]),
              R(d, "click", t[26])
            ], A = true);
          },
          p(D, m) {
            m[0] & 4096 && (r.disabled = D[12]), m[0] & 4096 && (d.disabled = D[12]), D[12] ? h || (h = Kn(), h.c(), h.m(e, null)) : h && (h.d(1), h = null);
          },
          d(D) {
            D && P(e), h && h.d(), A = false, r0(F);
          }
        };
      }
      function oc(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B, C, A, F, h, D, m, b, p, v, _ = A0(t[10]), k = [];
        for (let g = 0; g < _.length; g += 1) k[g] = Yn(Gn(t, _, g));
        let w = t[12] && Jn();
        return {
          c() {
            e = f("section"), x = f("p"), x.textContent = "Your partner's number", n = y(), o = f("p"), l = L(t[9]), s = y(), r = f("p"), r.textContent = "Ask your partner to confirm this matches their screen.", a = y(), c = f("section"), u = f("p"), u.textContent = "Let your partner scan your code", d = y(), B = f("div"), C = f("div"), A = y(), F = f("section"), h = f("p"), h.textContent = "What is your number?", D = y(), m = f("p"), m.textContent = "Tap the number shown on your screen above.", b = y(), p = f("div");
            for (let g = 0; g < k.length; g += 1) k[g].c();
            v = y(), w && w.c(), E(x, "class", "section-label svelte-dewqnh"), E(o, "class", "confirm-number svelte-dewqnh"), E(r, "class", "help-text svelte-dewqnh"), E(e, "class", "card pad svelte-dewqnh"), E(u, "class", "section-label svelte-dewqnh"), E(C, "class", "qr-inner svelte-dewqnh"), E(B, "class", "qr-frame svelte-dewqnh"), E(c, "class", "card pad svelte-dewqnh"), E(h, "class", "section-label svelte-dewqnh"), E(m, "class", "help-text svelte-dewqnh"), E(p, "class", "choices svelte-dewqnh"), E(F, "class", "card pad svelte-dewqnh");
          },
          m(g, S) {
            T(g, e, S), i(e, x), i(e, n), i(e, o), i(o, l), i(e, s), i(e, r), T(g, a, S), T(g, c, S), i(c, u), i(c, d), i(c, B), i(B, C), C.innerHTML = t[2], T(g, A, S), T(g, F, S), i(F, h), i(F, D), i(F, m), i(F, b), i(F, p);
            for (let M = 0; M < k.length; M += 1) k[M] && k[M].m(p, null);
            i(F, v), w && w.m(F, null);
          },
          p(g, S) {
            if (S[0] & 512 && O(l, g[9]), S[0] & 4 && (C.innerHTML = g[2]), S[0] & 70656) {
              _ = A0(g[10]);
              let M;
              for (M = 0; M < _.length; M += 1) {
                const j = Gn(g, _, M);
                k[M] ? k[M].p(j, S) : (k[M] = Yn(j), k[M].c(), k[M].m(p, null));
              }
              for (; M < k.length; M += 1) k[M].d(1);
              k.length = _.length;
            }
            g[12] ? w || (w = Jn(), w.c(), w.m(F, null)) : w && (w.d(1), w = null);
          },
          d(g) {
            g && (P(e), P(a), P(c), P(A), P(F)), Y0(k, g), w && w.d();
          }
        };
      }
      function lc(t) {
        let e, x, n, o, l, s;
        return {
          c() {
            e = f("div"), x = f("video"), n = y(), o = f("canvas"), l = y(), s = f("div"), s.innerHTML = '<div class="scan-box svelte-dewqnh"></div> <p class="scan-hint svelte-dewqnh">Point at your partner&#39;s QR code</p>', x.playsInline = true, E(x, "class", "camera-video svelte-dewqnh"), E(o, "class", "camera-canvas svelte-dewqnh"), E(s, "class", "scan-overlay svelte-dewqnh"), E(e, "class", "camera-wrap svelte-dewqnh");
          },
          m(r, a) {
            T(r, e, a), i(e, x), t[22](x), i(e, n), i(e, o), t[23](o), i(e, l), i(e, s);
          },
          p: Z,
          d(r) {
            r && P(e), t[22](null), t[23](null);
          }
        };
      }
      function sc(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B = t[6] ? "Hide" : "Enter code manually", C, A, F, h, D, m = t[5] && Qn(t), b = t[8] && Wn(t);
        function p(w, g) {
          return w[2] ? dc : Ec;
        }
        let v = p(t), _ = v(t), k = t[6] && Xn(t);
        return {
          c() {
            m && m.c(), e = y(), b && b.c(), x = y(), n = f("section"), o = f("p"), o.textContent = "Show this to your partner", l = y(), s = f("div"), _.c(), r = y(), a = f("div"), c = f("button"), c.innerHTML = `<span class="material-icons svelte-dewqnh">qr_code_scanner</span>
        Scan Their Code`, u = y(), d = f("button"), C = L(B), A = y(), k && k.c(), F = z0(), E(o, "class", "section-label svelte-dewqnh"), E(s, "class", "qr-frame svelte-dewqnh"), E(n, "class", "card pad svelte-dewqnh"), E(c, "class", "btn-filled svelte-dewqnh"), E(d, "class", "btn-text svelte-dewqnh"), E(a, "class", "scan-actions svelte-dewqnh");
          },
          m(w, g) {
            m && m.m(w, g), T(w, e, g), b && b.m(w, g), T(w, x, g), T(w, n, g), i(n, o), i(n, l), i(n, s), _.m(s, null), T(w, r, g), T(w, a, g), i(a, c), i(a, u), i(a, d), i(d, C), T(w, A, g), k && k.m(w, g), T(w, F, g), h || (D = [
              R(c, "click", t[13]),
              R(d, "click", t[19])
            ], h = true);
          },
          p(w, g) {
            w[5] ? m ? m.p(w, g) : (m = Qn(w), m.c(), m.m(e.parentNode, e)) : m && (m.d(1), m = null), w[8] ? b ? b.p(w, g) : (b = Wn(w), b.c(), b.m(x.parentNode, x)) : b && (b.d(1), b = null), v === (v = p(w)) && _ ? _.p(w, g) : (_.d(1), _ = v(w), _ && (_.c(), _.m(s, null))), g[0] & 64 && B !== (B = w[6] ? "Hide" : "Enter code manually") && O(C, B), w[6] ? k ? k.p(w, g) : (k = Xn(w), k.c(), k.m(F.parentNode, F)) : k && (k.d(1), k = null);
          },
          d(w) {
            w && (P(e), P(x), P(n), P(r), P(a), P(A), P(F)), m && m.d(w), b && b.d(w), _.d(), k && k.d(w), h = false, r0(D);
          }
        };
      }
      function rc(t) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-dewqnh">check_circle</span> <p class="saved-title svelte-dewqnh">Encounter recorded</p> <p class="muted svelte-dewqnh">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-dewqnh">View encounters</a>', E(e, "class", "card pad saved-card svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function ac(t) {
        let e, x, n, o, l;
        return {
          c() {
            e = f("section"), x = f("p"), n = L(t[1]), o = y(), l = f("a"), l.textContent = "\u2190 Back", E(x, "class", "error svelte-dewqnh"), E(l, "href", "#/home"), E(l, "class", "btn-text svelte-dewqnh"), E(e, "class", "card pad svelte-dewqnh");
          },
          m(s, r) {
            T(s, e, r), i(e, x), i(x, n), i(e, o), i(e, l);
          },
          p(s, r) {
            r[0] & 2 && O(n, s[1]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function ic(t) {
        let e;
        return {
          c() {
            e = f("div"), e.innerHTML = '<div class="spinner svelte-dewqnh"></div> <p class="muted svelte-dewqnh">Generating your code\u2026</p>', E(e, "class", "center-fill svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function cc(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Unnamed group encounter", E(e, "class", "help-text svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function uc(t) {
        let e, x = t[11].name + "", n;
        return {
          c() {
            e = f("p"), n = L(x), E(e, "class", "confirm-group-name svelte-dewqnh");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l[0] & 2048 && x !== (x = o[11].name + "") && O(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Kn(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Saving\u2026", E(e, "class", "muted saving-hint svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Yn(t) {
        let e, x = t[42] + "", n, o, l;
        function s() {
          return t[24](t[42]);
        }
        return {
          c() {
            e = f("button"), n = L(x), E(e, "class", "choice-btn svelte-dewqnh"), e.disabled = t[12];
          },
          m(r, a) {
            T(r, e, a), i(e, n), o || (l = R(e, "click", s), o = true);
          },
          p(r, a) {
            t = r, a[0] & 1024 && x !== (x = t[42] + "") && O(n, x), a[0] & 4096 && (e.disabled = t[12]);
          },
          d(r) {
            r && P(e), o = false, l();
          }
        };
      }
      function Jn(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Saving\u2026", E(e, "class", "muted saving-hint svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Qn(t) {
        let e, x, n, o;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "error_outline", n = y(), o = L(t[5]), E(x, "class", "material-icons svelte-dewqnh"), E(e, "class", "alert-banner svelte-dewqnh");
          },
          m(l, s) {
            T(l, e, s), i(e, x), i(e, n), i(e, o);
          },
          p(l, s) {
            s[0] & 32 && O(o, l[5]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Wn(t) {
        let e, x, n, o;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "error_outline", n = y(), o = L(t[8]), E(x, "class", "material-icons svelte-dewqnh"), E(e, "class", "alert-banner svelte-dewqnh");
          },
          m(l, s) {
            T(l, e, s), i(e, x), i(e, n), i(e, o);
          },
          p(l, s) {
            s[0] & 256 && O(o, l[8]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Ec(t) {
        let e;
        return {
          c() {
            e = f("p"), e.textContent = "Generating\u2026", E(e, "class", "muted svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function dc(t) {
        let e;
        return {
          c() {
            e = f("div"), E(e, "class", "qr-inner svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n), e.innerHTML = t[2];
          },
          p(x, n) {
            n[0] & 4 && (e.innerHTML = x[2]);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Xn(t) {
        let e, x, n, o, l, s, r, a, c, u, d, B = t[8] && Zn(t);
        return {
          c() {
            e = f("section"), x = f("p"), x.textContent = "Paste their QR payload", n = y(), o = f("textarea"), l = y(), B && B.c(), s = y(), r = f("button"), a = L("Continue"), E(x, "class", "section-label svelte-dewqnh"), E(o, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), E(o, "rows", "3"), E(o, "class", "svelte-dewqnh"), E(r, "class", "btn-filled svelte-dewqnh"), r.disabled = c = !t[7].trim(), E(e, "class", "card pad svelte-dewqnh");
          },
          m(C, A) {
            T(C, e, A), i(e, x), i(e, n), i(e, o), x0(o, t[7]), i(e, l), B && B.m(e, null), i(e, s), i(e, r), i(r, a), u || (d = [
              R(o, "input", t[20]),
              R(o, "keydown", t[21]),
              R(r, "click", t[14])
            ], u = true);
          },
          p(C, A) {
            A[0] & 128 && x0(o, C[7]), C[8] ? B ? B.p(C, A) : (B = Zn(C), B.c(), B.m(e, s)) : B && (B.d(1), B = null), A[0] & 128 && c !== (c = !C[7].trim()) && (r.disabled = c);
          },
          d(C) {
            C && P(e), B && B.d(), u = false, r0(d);
          }
        };
      }
      function Zn(t) {
        let e, x;
        return {
          c() {
            e = f("p"), x = L(t[8]), E(e, "class", "error-text svelte-dewqnh");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 256 && O(x, n[8]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function fc(t) {
        let e, x, n, o, l, s, r, a;
        e = new Q0({});
        function c(m, b) {
          return m[0] === "scanning" || m[0] === "confirm-group" ? W9 : Q9;
        }
        let u = c(t), d = u(t);
        function B(m, b) {
          return m[0] === "scanning" ? xc : m[0] === "confirm" || m[0] === "ongoing?" ? ec : m[0] === "confirm-group" ? $9 : m[0] === "saved" ? Z9 : X9;
        }
        let C = B(t), A = C(t);
        function F(m, b) {
          if (m[0] === "loading") return ic;
          if (m[0] === "error") return ac;
          if (m[0] === "saved") return rc;
          if (m[0] === "showQR") return sc;
          if (m[0] === "scanning") return lc;
          if (m[0] === "confirm") return oc;
          if (m[0] === "ongoing?") return nc;
          if (m[0] === "confirm-group") return tc;
        }
        let h = F(t), D = h && h(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), o = f("div"), d.c(), l = y(), s = f("h1"), A.c(), r = y(), D && D.c(), E(s, "class", "svelte-dewqnh"), E(o, "class", "page-header svelte-dewqnh"), E(n, "class", "svelte-dewqnh");
          },
          m(m, b) {
            g0(e, m, b), T(m, x, b), T(m, n, b), i(n, o), d.m(o, null), i(o, l), i(o, s), A.m(s, null), i(n, r), D && D.m(n, null), a = true;
          },
          p(m, b) {
            u === (u = c(m)) && d ? d.p(m, b) : (d.d(1), d = u(m), d && (d.c(), d.m(o, l))), C !== (C = B(m)) && (A.d(1), A = C(m), A && (A.c(), A.m(s, null))), h === (h = F(m)) && D ? D.p(m, b) : (D && D.d(1), D = h && h(m), D && (D.c(), D.m(n, null)));
          },
          i(m) {
            a || (C0(e.$$.fragment, m), a = true);
          },
          o(m) {
            v0(e.$$.fragment, m), a = false;
          },
          d(m) {
            m && (P(x), P(n)), y0(e, m), d.d(), A.d(), D && D.d();
          }
        };
      }
      function Tx(t) {
        return 10 + (t[1] * 256 + t[2]) % 90;
      }
      function $n(t) {
        const e = /* @__PURE__ */ new Set([
          t
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((x, n) => x - n);
      }
      function Bc(t, e, x) {
        let n = "loading", o = null, l = null, s = "", r = 0, a = "", c = null, u = null, d = null, B = null, C = null, A = false, F = false, h = "", D = null, m = null, b = null, p = 0, v = [], _ = null, k = "", w = null, g = "", S = false;
        L0(async () => {
          if (!q0()) {
            i0("/login");
            return;
          }
          try {
            const W = Hs(), o0 = Fe(), n0 = Math.floor(Date.now() / 1e3);
            l = W.privateKey, r = Tx(W.publicKey), s = `1|${oe(W.publicKey)}|${n0}|${t0(o0)}`, x(2, a = await ie.toString(s, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#000000",
                light: "#ffffff"
              }
            })), x(0, n = "showQR");
          } catch (W) {
            x(1, o = W.message), x(0, n = "error");
          }
        }), ix(() => {
          j();
        });
        async function M() {
          if (x(5, C = null), A = false, !navigator.mediaDevices?.getUserMedia) {
            x(5, C = "Camera not available. This page must be opened over HTTPS to use the camera."), x(0, n = "showQR");
            return;
          }
          x(0, n = "scanning"), await new Promise((W) => setTimeout(W, 50));
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
            }), x(3, c.srcObject = d, c), await c.play(), I();
          } catch (W) {
            x(5, C = W.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + W.message), j(), x(0, n = "showQR");
          }
        }
        function j() {
          B && (cancelAnimationFrame(B), B = null), d && (d.getTracks().forEach((W) => W.stop()), d = null), A = false;
        }
        function I() {
          if (!d || !c || c.readyState < 2) {
            B = requestAnimationFrame(I);
            return;
          }
          const W = c.videoWidth, o0 = c.videoHeight;
          if (!W || !o0) {
            B = requestAnimationFrame(I);
            return;
          }
          x(4, u.width = W, u), x(4, u.height = o0, u);
          const n0 = u.getContext("2d");
          n0.drawImage(c, 0, 0, W, o0);
          const c0 = n0.getImageData(0, 0, W, o0), b0 = J9(c0.data, W, o0, {
            inversionAttempts: "dontInvert"
          });
          if (b0 && !A) {
            A = true, q(b0.data);
            return;
          }
          B = requestAnimationFrame(I);
        }
        function N(W) {
          const o0 = W.trim().split("|"), n0 = parseInt(o0[0], 10);
          if (!isNaN(n0) && n0 > 1) throw new Error("Your partner has a newer app version. Please update.");
          if (o0.length !== 4 || o0[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, c0, , b0] = o0;
          if (!c0 || c0.length < 10) throw new Error("Invalid QR payload");
          if (!b0 || b0.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: vo(c0),
            contactIdBytes: T0(b0)
          };
        }
        function q(W) {
          const o0 = W.trim();
          if (o0.startsWith("2|")) {
            try {
              const n0 = Bt(o0);
              if (!n0) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - n0.timestamp > 86400) {
                A = false, B = requestAnimationFrame(I);
                return;
              }
              j(), x(11, _ = n0), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group");
            } catch {
              A = false, B = requestAnimationFrame(I);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: n0, contactIdBytes: c0 } = N(W);
            j(), m = n0, b = c0, x(9, p = Tx(n0)), x(10, v = $n(r)), x(0, n = "confirm");
          } catch {
            A = false, B = requestAnimationFrame(I);
          }
        }
        function G() {
          x(8, D = null);
          const W = h.trim();
          try {
            if (W.startsWith("2|")) {
              const o0 = Bt(W);
              if (!o0) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - o0.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              x(11, _ = o0), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group"), x(6, F = false);
            } else {
              const { ephemeralPubkeyBytes: o0, contactIdBytes: n0 } = N(W);
              m = o0, b = n0, x(9, p = Tx(o0)), x(10, v = $n(r)), x(0, n = "confirm"), x(6, F = false);
            }
          } catch (o0) {
            x(8, D = o0.message);
          }
        }
        function U() {
          j(), x(11, _ = null), x(0, n = "showQR"), x(6, F = false), x(8, D = null), x(7, h = "");
        }
        async function Y(W) {
          if (W !== r) {
            x(8, D = "Wrong \u2014 that's not your number. Scan again."), x(0, n = "showQR"), x(6, F = false), x(7, h = ""), m = null, b = null;
            return;
          }
          const o0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          w = Us(l, m), g = o0;
          const b0 = G0()?.encounters || [], I0 = nt(), D0 = t0(b), O0 = b0.some((B0) => t0(B0.theirContactId) === D0), N0 = I0.some((B0) => t0(B0.theirContactId) === D0 && !B0.endedAt);
          O0 && !N0 ? x(0, n = "ongoing?") : await Q(false);
        }
        async function Q(W) {
          x(12, S = true);
          try {
            const o0 = Fe(), n0 = ne(w, o0, 0);
            await go(t0(n0), g), W ? await Tr(w, b, g) : await yr(w, b, g), x(0, n = "saved");
          } catch (o0) {
            x(1, o = o0.message), x(0, n = "error");
          } finally {
            x(12, S = false);
          }
        }
        async function H() {
          x(12, S = true);
          try {
            const W = T0(_.groupTokenHex), o0 = T0(_.hostContactIdHex);
            await Oo(W, k, false, o0, _.name), x(0, n = "saved");
          } catch (W) {
            x(1, o = W.message), x(0, n = "error");
          } finally {
            x(12, S = false);
          }
        }
        const z = () => {
          x(6, F = !F), x(8, D = null);
        };
        function V() {
          h = this.value, x(7, h);
        }
        const X = (W) => W.key === "Enter" && !W.shiftKey && (W.preventDefault(), G());
        function K(W) {
          Xe[W ? "unshift" : "push"](() => {
            c = W, x(3, c);
          });
        }
        function s0(W) {
          Xe[W ? "unshift" : "push"](() => {
            u = W, x(4, u);
          });
        }
        return [
          n,
          o,
          a,
          c,
          u,
          C,
          F,
          h,
          D,
          p,
          v,
          _,
          S,
          M,
          G,
          U,
          Y,
          Q,
          H,
          z,
          V,
          X,
          K,
          s0,
          (W) => Y(W),
          () => Q(true),
          () => Q(false)
        ];
      }
      class Cc extends k0 {
        constructor(e) {
          super(), _0(this, e, Bc, fc, m0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function Ac(t) {
        let e, x, n, o, l, s, r = no(t[1].date) + "", a, c, u, d = t[0].rawTokenHex.slice(0, 12) + "", B, C, A, F, h, D, m, b, p, v, _ = t[3] && eo(t), k = t[7] && xo(t), w = t[5] && to(t);
        return {
          c() {
            _ && _.c(), e = y(), k && k.c(), x = y(), n = f("section"), o = f("div"), o.innerHTML = '<span class="material-icons status-icon svelte-1eiv35b">check_circle_outline</span> <span class="status-label svelte-1eiv35b">One-time encounter</span>', l = y(), s = f("p"), a = L(r), c = y(), u = f("p"), B = L(d), C = L("\u2026"), A = y(), F = f("section"), h = f("div"), h.innerHTML = '<span class="material-icons privacy-icon svelte-1eiv35b">lock_outline</span> <p class="privacy-text svelte-1eiv35b">Your note is stored encrypted and never shared.</p>', D = y(), m = f("textarea"), b = y(), w && w.c(), E(o, "class", "status-row svelte-1eiv35b"), E(s, "class", "date svelte-1eiv35b"), E(u, "class", "token svelte-1eiv35b"), E(n, "class", "card pad svelte-1eiv35b"), E(h, "class", "privacy-row svelte-1eiv35b"), E(m, "placeholder", "Add a private note\u2026"), E(m, "rows", "5"), E(m, "class", "svelte-1eiv35b"), E(F, "class", "card pad svelte-1eiv35b");
          },
          m(g, S) {
            _ && _.m(g, S), T(g, e, S), k && k.m(g, S), T(g, x, S), T(g, n, S), i(n, o), i(n, l), i(n, s), i(s, a), i(n, c), i(n, u), i(u, B), i(u, C), T(g, A, S), T(g, F, S), i(F, h), i(F, D), i(F, m), x0(m, t[4]), i(F, b), w && w.m(F, null), p || (v = [
              R(m, "input", t[14]),
              R(m, "input", t[8])
            ], p = true);
          },
          p(g, S) {
            g[3] ? _ ? _.p(g, S) : (_ = eo(g), _.c(), _.m(e.parentNode, e)) : _ && (_.d(1), _ = null), g[7] ? k ? k.p(g, S) : (k = xo(g), k.c(), k.m(x.parentNode, x)) : k && (k.d(1), k = null), S & 2 && r !== (r = no(g[1].date) + "") && O(a, r), S & 1 && d !== (d = g[0].rawTokenHex.slice(0, 12) + "") && O(B, d), S & 16 && x0(m, g[4]), g[5] ? w ? w.p(g, S) : (w = to(g), w.c(), w.m(F, null)) : w && (w.d(1), w = null);
          },
          d(g) {
            g && (P(e), P(x), P(n), P(A), P(F)), _ && _.d(g), k && k.d(g), w && w.d(), p = false, r0(v);
          }
        };
      }
      function Fc(t) {
        let e;
        return {
          c() {
            e = f("section"), e.innerHTML = '<p class="muted svelte-1eiv35b">This encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-1eiv35b">\u2190 Back to encounters</a>', E(e, "class", "card pad svelte-1eiv35b");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function eo(t) {
        let e, x, n, o;
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "error_outline", n = y(), o = L(t[3]), E(x, "class", "material-icons svelte-1eiv35b"), E(e, "class", "toast error-toast svelte-1eiv35b");
          },
          m(l, s) {
            T(l, e, s), i(e, x), i(e, n), i(e, o);
          },
          p(l, s) {
            s & 8 && O(o, l[3]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function xo(t) {
        let e, x, n, o, l, s, r, a, c, u = t[6] ? "Saving\u2026" : "Save note", d, B, C;
        return {
          c() {
            e = f("section"), x = f("p"), x.textContent = "You have unsaved changes to your note.", n = y(), o = f("div"), l = f("button"), l.textContent = "Keep editing", s = y(), r = f("button"), r.textContent = "Discard", a = y(), c = f("button"), d = L(u), E(x, "class", "confirm-text svelte-1eiv35b"), E(l, "class", "btn-text svelte-1eiv35b"), E(r, "class", "btn-text danger svelte-1eiv35b"), E(c, "class", "btn-filled-sm svelte-1eiv35b"), c.disabled = t[6], E(o, "class", "confirm-actions svelte-1eiv35b"), E(e, "class", "card pad leave-confirm svelte-1eiv35b");
          },
          m(A, F) {
            T(A, e, F), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), i(o, r), i(o, a), i(o, c), i(c, d), B || (C = [
              R(l, "click", t[13]),
              R(r, "click", t[12]),
              R(c, "click", t[11])
            ], B = true);
          },
          p(A, F) {
            F & 64 && u !== (u = A[6] ? "Saving\u2026" : "Save note") && O(d, u), F & 64 && (c.disabled = A[6]);
          },
          d(A) {
            A && P(e), B = false, r0(C);
          }
        };
      }
      function to(t) {
        let e, x, n = t[6] ? "Saving\u2026" : "Save", o, l, s;
        return {
          c() {
            e = f("div"), x = f("button"), o = L(n), E(x, "class", "btn-filled-sm svelte-1eiv35b"), x.disabled = t[6], E(e, "class", "note-actions svelte-1eiv35b");
          },
          m(r, a) {
            T(r, e, a), i(e, x), i(x, o), l || (s = R(x, "click", t[9]), l = true);
          },
          p(r, a) {
            a & 64 && n !== (n = r[6] ? "Saving\u2026" : "Save") && O(o, n), a & 64 && (x.disabled = r[6]);
          },
          d(r) {
            r && P(e), l = false, s();
          }
        };
      }
      function Dc(t) {
        let e, x, n, o, l, s, r, a = t[2] ? "Not found" : "Encounter", c, u, d, B, C;
        e = new Q0({});
        function A(D, m) {
          if (D[2]) return Fc;
          if (D[1]) return Ac;
        }
        let F = A(t), h = F && F(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = f("main"), o = f("div"), l = f("button"), l.innerHTML = '<span class="material-icons svelte-1eiv35b">arrow_back</span>', s = y(), r = f("h1"), c = L(a), u = y(), h && h.c(), E(l, "class", "back-btn svelte-1eiv35b"), E(r, "class", "svelte-1eiv35b"), E(o, "class", "page-header svelte-1eiv35b"), E(n, "class", "svelte-1eiv35b");
          },
          m(D, m) {
            g0(e, D, m), T(D, x, m), T(D, n, m), i(n, o), i(o, l), i(o, s), i(o, r), i(r, c), i(n, u), h && h.m(n, null), d = true, B || (C = R(l, "click", t[10]), B = true);
          },
          p(D, [m]) {
            (!d || m & 4) && a !== (a = D[2] ? "Not found" : "Encounter") && O(c, a), F === (F = A(D)) && h ? h.p(D, m) : (h && h.d(1), h = F && F(D), h && (h.c(), h.m(n, null)));
          },
          i(D) {
            d || (C0(e.$$.fragment, D), d = true);
          },
          o(D) {
            v0(e.$$.fragment, D), d = false;
          },
          d(D) {
            D && (P(x), P(n)), y0(e, D), h && h.d(), B = false, C();
          }
        };
      }
      function no(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function pc(t, e, x) {
        let { params: n = {} } = e, o = null, l = false, s = null, r = "", a = false, c = false, u = false;
        L0(() => {
          if (!q0()) {
            i0("/login");
            return;
          }
          B(), window.addEventListener("beforeunload", d);
        }), ix(() => {
          window.removeEventListener("beforeunload", d);
        });
        function d(p) {
          a && (p.preventDefault(), p.returnValue = "");
        }
        function B() {
          const p = n.rawTokenHex;
          if (x(1, o = No().find((v) => t0(v.rawToken) === p) ?? null), !o) {
            x(2, l = true);
            return;
          }
          x(4, r = o.note ?? "");
        }
        function C() {
          x(5, a = r !== (o.note ?? ""));
        }
        async function A() {
          if (!(!a || c)) {
            x(6, c = true), x(3, s = null);
            try {
              const p = r.trim() || null;
              await Pr(n.rawTokenHex, {
                note: p
              }), B(), x(5, a = false);
            } catch (p) {
              x(3, s = p.message);
            } finally {
              x(6, c = false);
            }
          }
        }
        function F() {
          a ? x(7, u = true) : i0("/encounters");
        }
        async function h() {
          await A(), s || i0("/encounters");
        }
        function D() {
          x(5, a = false), i0("/encounters");
        }
        const m = () => x(7, u = false);
        function b() {
          r = this.value, x(4, r);
        }
        return t.$$set = (p) => {
          "params" in p && x(0, n = p.params);
        }, [
          n,
          o,
          l,
          s,
          r,
          a,
          c,
          u,
          C,
          A,
          F,
          h,
          D,
          m,
          b
        ];
      }
      class mc extends k0 {
        constructor(e) {
          super(), _0(this, e, pc, Dc, m0, {
            params: 0
          });
        }
      }
      function hc(t) {
        let e, x, n, o, l, s, r;
        e = new _l({
          props: {
            routes: t[7]
          }
        }), e.$on("routeLoaded", t[11]), n = new $s({});
        let a = t[6] === false && oo(t), c = t[4] && lo(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), S0(n.$$.fragment), o = y(), a && a.c(), l = y(), c && c.c(), s = z0();
          },
          m(u, d) {
            g0(e, u, d), T(u, x, d), g0(n, u, d), T(u, o, d), a && a.m(u, d), T(u, l, d), c && c.m(u, d), T(u, s, d), r = true;
          },
          p(u, d) {
            u[6] === false ? a ? a.p(u, d) : (a = oo(u), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null), u[4] ? c ? c.p(u, d) : (c = lo(u), c.c(), c.m(s.parentNode, s)) : c && (c.d(1), c = null);
          },
          i(u) {
            r || (C0(e.$$.fragment, u), C0(n.$$.fragment, u), r = true);
          },
          o(u) {
            v0(e.$$.fragment, u), v0(n.$$.fragment, u), r = false;
          },
          d(u) {
            u && (P(x), P(o), P(l), P(s)), y0(e, u), y0(n, u), a && a.d(u), c && c.d(u);
          }
        };
      }
      function vc(t) {
        let e;
        return {
          c() {
            e = f("main"), e.textContent = "Loading\u2026", E(e, "class", "loading svelte-p13mf5");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          i: Z,
          o: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function _c(t) {
        let e, x, n, o, l, s;
        return {
          c() {
            e = f("main"), x = f("p"), n = L("Failed to load crypto module: "), o = L(t[3]), l = y(), s = f("p"), s.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", E(e, "class", "error svelte-p13mf5");
          },
          m(r, a) {
            T(r, e, a), i(e, x), i(x, n), i(x, o), i(e, l), i(e, s);
          },
          p(r, a) {
            a & 8 && O(o, r[3]);
          },
          i: Z,
          o: Z,
          d(r) {
            r && P(e);
          }
        };
      }
      function oo(t) {
        let e, x, n, o, l;
        function s(c, u) {
          return c[1] ? bc : kc;
        }
        let r = s(t), a = r(t);
        return {
          c() {
            e = f("div"), x = f("span"), x.textContent = "mail_outline", n = y(), o = f("span"), o.textContent = "Please verify your email address. Check your inbox for a verification link.", l = y(), a.c(), E(x, "class", "material-icons svelte-p13mf5"), E(o, "class", "verify-text svelte-p13mf5"), E(e, "class", "verify-banner svelte-p13mf5");
          },
          m(c, u) {
            T(c, e, u), i(e, x), i(e, n), i(e, o), i(e, l), a.m(e, null);
          },
          p(c, u) {
            r === (r = s(c)) && a ? a.p(c, u) : (a.d(1), a = r(c), a && (a.c(), a.m(e, null)));
          },
          d(c) {
            c && P(e), a.d();
          }
        };
      }
      function kc(t) {
        let e, x = t[0] ? "Sending\u2026" : "Resend", n, o, l;
        return {
          c() {
            e = f("button"), n = L(x), E(e, "class", "resend-btn svelte-p13mf5"), e.disabled = t[0];
          },
          m(s, r) {
            T(s, e, r), i(e, n), o || (l = R(e, "click", t[8]), o = true);
          },
          p(s, r) {
            r & 1 && x !== (x = s[0] ? "Sending\u2026" : "Resend") && O(n, x), r & 1 && (e.disabled = s[0]);
          },
          d(s) {
            s && P(e), o = false, l();
          }
        };
      }
      function bc(t) {
        let e;
        return {
          c() {
            e = f("span"), e.textContent = "Sent!", E(e, "class", "resend-sent svelte-p13mf5");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: Z,
          d(x) {
            x && P(e);
          }
        };
      }
      function lo(t) {
        let e, x, n, o, l, s, r, a = Math.floor(t[5] / 60) + "", c, u, d = String(t[5] % 60).padStart(2, "0") + "", B, C, A, F, h, D, m, b, p;
        return {
          c() {
            e = f("div"), x = f("div"), n = f("h2"), n.textContent = "Session expiring", o = y(), l = f("p"), s = L(`You'll be logged out in
          `), r = f("strong"), c = L(a), u = L(":"), B = L(d), C = L(`
          due to inactivity.`), A = y(), F = f("div"), h = f("button"), h.textContent = "Stay logged in", D = y(), m = f("button"), m.textContent = "Log out now", E(n, "id", "idle-title"), E(n, "class", "svelte-p13mf5"), E(l, "class", "svelte-p13mf5"), E(h, "class", "btn-primary svelte-p13mf5"), E(m, "class", "btn-ghost svelte-p13mf5"), E(F, "class", "idle-actions svelte-p13mf5"), E(x, "class", "idle-dialog svelte-p13mf5"), E(e, "class", "idle-overlay svelte-p13mf5"), E(e, "role", "dialog"), E(e, "aria-modal", "true"), E(e, "aria-labelledby", "idle-title");
          },
          m(v, _) {
            T(v, e, _), i(e, x), i(x, n), i(x, o), i(x, l), i(l, s), i(l, r), i(r, c), i(r, u), i(r, B), i(l, C), i(x, A), i(x, F), i(F, h), i(F, D), i(F, m), b || (p = [
              R(h, "click", t[9]),
              R(m, "click", t[10])
            ], b = true);
          },
          p(v, _) {
            _ & 32 && a !== (a = Math.floor(v[5] / 60) + "") && O(c, a), _ & 32 && d !== (d = String(v[5] % 60).padStart(2, "0") + "") && O(B, d);
          },
          d(v) {
            v && P(e), b = false, r0(p);
          }
        };
      }
      function wc(t) {
        let e, x, n, o;
        const l = [
          _c,
          vc,
          hc
        ], s = [];
        function r(a, c) {
          return a[3] ? 0 : a[2] ? 2 : 1;
        }
        return e = r(t), x = s[e] = l[e](t), {
          c() {
            x.c(), n = z0();
          },
          m(a, c) {
            s[e].m(a, c), T(a, n, c), o = true;
          },
          p(a, [c]) {
            let u = e;
            e = r(a), e === u ? s[e].p(a, c) : (cx(), v0(s[u], 1, 1, () => {
              s[u] = null;
            }), ux(), x = s[e], x ? x.p(a, c) : (x = s[e] = l[e](a), x.c()), C0(x, 1), x.m(n.parentNode, n));
          },
          i(a) {
            o || (C0(x), o = true);
          },
          o(a) {
            v0(x), o = false;
          },
          d(a) {
            a && P(n), s[e].d(a);
          }
        };
      }
      const so = 120;
      function gc(t, e, x) {
        let n;
        U0(t, ae, (D) => x(6, n = D));
        const o = {
          "/": kr,
          "/login": Zr,
          "/signup": ta,
          "/home": ra,
          "/encounter-exchange": Cc,
          "/encounters": Fa,
          "/encounters/:rawTokenHex": mc,
          "/relationships/:rawTokenHex": Sa,
          "/groups/:tokenHex": d9,
          "/results": Ka,
          "/change-password": Qa,
          "/change-email": ei,
          "/verify-email/:token": si,
          "/alerts": di,
          "/settings": R9,
          "/settings/2fa-setup": K9
        };
        let l = false, s = false;
        async function r() {
          x(0, l = true);
          try {
            await lr(), x(1, s = true);
          } catch {
          } finally {
            x(0, l = false);
          }
        }
        let a = false, c = null, u = false, d = so, B = null;
        function C() {
          x(5, d = so), clearInterval(B), B = setInterval(() => {
            x(5, d -= 1), d <= 0 && clearInterval(B);
          }, 1e3);
        }
        function A() {
          x(4, u = false), clearInterval(B), vr();
        }
        async function F() {
          x(4, u = false), clearInterval(B), qx(), await wo(), i0("/login");
        }
        function h(D) {
          const m = D.detail.location;
          !(m === "/" || m === "/login" || m.startsWith("/signup")) && q0() ? hr({
            onWarnCallback: () => {
              x(4, u = true), C();
            },
            onExpiredCallback: F
          }) : (qx(), x(4, u = false), clearInterval(B));
        }
        return L0(async () => {
          try {
            await Os(), x(2, a = true);
          } catch (D) {
            x(3, c = D.message);
          }
        }), [
          l,
          s,
          a,
          c,
          u,
          d,
          n,
          o,
          r,
          A,
          F,
          h
        ];
      }
      class yc extends k0 {
        constructor(e) {
          super(), _0(this, e, gc, wc, m0, {});
        }
      }
      "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
      new yc({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
