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
          for (const l of o) if (l.type === "childList") for (const r of l.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
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
      function lx(t, e) {
        for (const x in e) t[x] = e[x];
        return t;
      }
      function po(t) {
        return t();
      }
      function mt() {
        return /* @__PURE__ */ Object.create(null);
      }
      function l0(t) {
        t.forEach(po);
      }
      function Fx(t) {
        return typeof t == "function";
      }
      function m0(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
      }
      let Qe;
      function ht(t, e) {
        return t === e ? true : (Qe || (Qe = document.createElement("a")), Qe.href = e, t === Qe.href);
      }
      function Dl(t) {
        return Object.keys(t).length === 0;
      }
      function mo(t, ...e) {
        if (t == null) {
          for (const n of e) n(void 0);
          return Z;
        }
        const x = t.subscribe(...e);
        return x.unsubscribe ? () => x.unsubscribe() : x;
      }
      function V0(t, e, x) {
        t.$$.on_destroy.push(mo(e, x));
      }
      function vt(t, e, x) {
        return t.set(x), e;
      }
      function j0(t) {
        return t && Fx(t.destroy) ? t.destroy : Z;
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
      function $0(t, e) {
        for (let x = 0; x < t.length; x += 1) t[x] && t[x].d(e);
      }
      function d(t) {
        return document.createElement(t);
      }
      function z(t) {
        return document.createTextNode(t);
      }
      function y() {
        return z(" ");
      }
      function K0() {
        return z("");
      }
      function H(t, e, x, n) {
        return t.addEventListener(e, x, n), () => t.removeEventListener(e, x, n);
      }
      function ne(t) {
        return function(e) {
          return e.preventDefault(), t.call(this, e);
        };
      }
      function pl(t) {
        return function(e) {
          return e.stopPropagation(), t.call(this, e);
        };
      }
      function c(t, e, x) {
        x == null ? t.removeAttribute(e) : t.getAttribute(e) !== x && t.setAttribute(e, x);
      }
      function ml(t) {
        return Array.from(t.childNodes);
      }
      function V(t, e) {
        e = "" + e, t.data !== e && (t.data = e);
      }
      function x0(t, e) {
        t.value = e ?? "";
      }
      function n0(t, e, x) {
        t.classList.toggle(e, !!x);
      }
      function hl(t, e, { bubbles: x = false, cancelable: n = false } = {}) {
        return new CustomEvent(t, {
          detail: e,
          bubbles: x,
          cancelable: n
        });
      }
      function rx(t, e) {
        return new t(e);
      }
      let ze;
      function Te(t) {
        ze = t;
      }
      function Dx() {
        if (!ze) throw new Error("Function called outside component initialization");
        return ze;
      }
      function M0(t) {
        Dx().$$.on_mount.push(t);
      }
      function vl(t) {
        Dx().$$.after_update.push(t);
      }
      function px(t) {
        Dx().$$.on_destroy.push(t);
      }
      function _l() {
        const t = Dx();
        return (e, x, { cancelable: n = false } = {}) => {
          const o = t.$$.callbacks[e];
          if (o) {
            const l = hl(e, x, {
              cancelable: n
            });
            return o.slice().forEach((r) => {
              r.call(t, l);
            }), !l.defaultPrevented;
          }
          return true;
        };
      }
      function jx(t, e) {
        const x = t.$$.callbacks[e.type];
        x && x.slice().forEach((n) => n.call(this, e));
      }
      const he = [], sx = [];
      let ve = [];
      const _t = [], ho = Promise.resolve();
      let Vx = false;
      function vo() {
        Vx || (Vx = true, ho.then(ko));
      }
      function _o() {
        return vo(), ho;
      }
      function Gx(t) {
        ve.push(t);
      }
      const Tx = /* @__PURE__ */ new Set();
      let Fe = 0;
      function ko() {
        if (Fe !== 0) return;
        const t = ze;
        do {
          try {
            for (; Fe < he.length; ) {
              const e = he[Fe];
              Fe++, Te(e), kl(e.$$);
            }
          } catch (e) {
            throw he.length = 0, Fe = 0, e;
          }
          for (Te(null), he.length = 0, Fe = 0; sx.length; ) sx.pop()();
          for (let e = 0; e < ve.length; e += 1) {
            const x = ve[e];
            Tx.has(x) || (Tx.add(x), x());
          }
          ve.length = 0;
        } while (he.length);
        for (; _t.length; ) _t.pop()();
        Vx = false, Tx.clear(), Te(t);
      }
      function kl(t) {
        if (t.fragment !== null) {
          t.update(), l0(t.before_update);
          const e = t.dirty;
          t.dirty = [
            -1
          ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Gx);
        }
      }
      function bl(t) {
        const e = [], x = [];
        ve.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : x.push(n)), x.forEach((n) => n()), ve = e;
      }
      const ex = /* @__PURE__ */ new Set();
      let ce;
      function mx() {
        ce = {
          r: 0,
          c: [],
          p: ce
        };
      }
      function hx() {
        ce.r || l0(ce.c), ce = ce.p;
      }
      function F0(t, e) {
        t && t.i && (ex.delete(t), t.i(e));
      }
      function v0(t, e, x, n) {
        if (t && t.o) {
          if (ex.has(t)) return;
          ex.add(t), ce.c.push(() => {
            ex.delete(t), n && (x && t.d(1), n());
          }), t.o(e);
        } else n && n();
      }
      function D0(t) {
        return t?.length !== void 0 ? t : Array.from(t);
      }
      function gl(t, e) {
        t.d(1), e.delete(t.key);
      }
      function wl(t, e, x, n, o, l, r, s, a, u, E, f) {
        let C = t.length, A = l.length, F = C;
        const B = {};
        for (; F--; ) B[t[F].key] = F;
        const p = [], m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), b = [];
        for (F = A; F--; ) {
          const k = f(o, l, F), w = x(k);
          let g = r.get(w);
          g ? b.push(() => g.p(k, e)) : (g = u(w, k), g.c()), m.set(w, p[F] = g), w in B && h.set(w, Math.abs(F - B[w]));
        }
        const D = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
        function _(k) {
          F0(k, 1), k.m(s, E), r.set(k.key, k), E = k.first, A--;
        }
        for (; C && A; ) {
          const k = p[A - 1], w = t[C - 1], g = k.key, M = w.key;
          k === w ? (E = k.first, C--, A--) : m.has(M) ? !r.has(g) || D.has(g) ? _(k) : v.has(M) ? C-- : h.get(g) > h.get(M) ? (v.add(g), _(k)) : (D.add(M), C--) : (a(w, r), C--);
        }
        for (; C--; ) {
          const k = t[C];
          m.has(k.key) || a(k, r);
        }
        for (; A; ) _(p[A - 1]);
        return l0(b), p;
      }
      function ax(t, e) {
        const x = {}, n = {}, o = {
          $$scope: 1
        };
        let l = t.length;
        for (; l--; ) {
          const r = t[l], s = e[l];
          if (s) {
            for (const a in r) a in s || (n[a] = 1);
            for (const a in s) o[a] || (x[a] = s[a], o[a] = 1);
            t[l] = s;
          } else for (const a in r) o[a] = 1;
        }
        for (const r in n) r in x || (x[r] = void 0);
        return x;
      }
      function ix(t) {
        return typeof t == "object" && t !== null ? t : {};
      }
      function S0(t) {
        t && t.c();
      }
      function y0(t, e, x) {
        const { fragment: n, after_update: o } = t.$$;
        n && n.m(e, x), Gx(() => {
          const l = t.$$.on_mount.map(po).filter(Fx);
          t.$$.on_destroy ? t.$$.on_destroy.push(...l) : l0(l), t.$$.on_mount = [];
        }), o.forEach(Gx);
      }
      function P0(t, e) {
        const x = t.$$;
        x.fragment !== null && (bl(x.after_update), l0(x.on_destroy), x.fragment && x.fragment.d(e), x.on_destroy = x.fragment = null, x.ctx = []);
      }
      function yl(t, e) {
        t.$$.dirty[0] === -1 && (he.push(t), vo(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function _0(t, e, x, n, o, l, r = null, s = [
        -1
      ]) {
        const a = ze;
        Te(t);
        const u = t.$$ = {
          fragment: null,
          ctx: [],
          props: l,
          update: Z,
          not_equal: o,
          bound: mt(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (a ? a.$$.context : [])),
          callbacks: mt(),
          dirty: s,
          skip_bound: false,
          root: e.target || a.$$.root
        };
        r && r(u.root);
        let E = false;
        if (u.ctx = x ? x(t, e.props || {}, (f, C, ...A) => {
          const F = A.length ? A[0] : C;
          return u.ctx && o(u.ctx[f], u.ctx[f] = F) && (!u.skip_bound && u.bound[f] && u.bound[f](F), E && yl(t, f)), C;
        }) : [], u.update(), E = true, l0(u.before_update), u.fragment = n ? n(u.ctx) : false, e.target) {
          if (e.hydrate) {
            const f = ml(e.target);
            u.fragment && u.fragment.l(f), f.forEach(P);
          } else u.fragment && u.fragment.c();
          e.intro && F0(t.$$.fragment), y0(t, e.target, e.anchor), ko();
        }
        Te(a);
      }
      class k0 {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          P0(this, 1), this.$destroy = Z;
        }
        $on(e, x) {
          if (!Fx(x)) return Z;
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(x), () => {
            const o = n.indexOf(x);
            o !== -1 && n.splice(o, 1);
          };
        }
        $set(e) {
          this.$$set && !Dl(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const Pl = "4", De = [];
      function bo(t, e) {
        return {
          subscribe: Y0(t, e).subscribe
        };
      }
      function Y0(t, e = Z) {
        let x;
        const n = /* @__PURE__ */ new Set();
        function o(s) {
          if (m0(t, s) && (t = s, x)) {
            const a = !De.length;
            for (const u of n) u[1](), De.push(u, t);
            if (a) {
              for (let u = 0; u < De.length; u += 2) De[u][0](De[u + 1]);
              De.length = 0;
            }
          }
        }
        function l(s) {
          o(s(t));
        }
        function r(s, a = Z) {
          const u = [
            s,
            a
          ];
          return n.add(u), n.size === 1 && (x = e(o, l) || Z), s(t), () => {
            n.delete(u), n.size === 0 && x && (x(), x = null);
          };
        }
        return {
          set: o,
          update: l,
          subscribe: r
        };
      }
      function go(t, e, x) {
        const n = !Array.isArray(t), o = n ? [
          t
        ] : t;
        if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const l = e.length < 2;
        return bo(x, (r, s) => {
          let a = false;
          const u = [];
          let E = 0, f = Z;
          const C = () => {
            if (E) return;
            f();
            const F = e(n ? u[0] : u, r, s);
            l ? r(F) : f = Fx(F) ? F : Z;
          }, A = o.map((F, B) => mo(F, (p) => {
            u[B] = p, E &= ~(1 << B), a && C();
          }, () => {
            E |= 1 << B;
          }));
          return a = true, C(), function() {
            l0(A), f(), a = false;
          };
        });
      }
      const Tl = typeof localStorage < "u" ? localStorage.getItem("theme") : null, wo = Tl ?? "light", xx = Y0(wo);
      typeof document < "u" && document.documentElement.setAttribute("data-theme", wo);
      xx.subscribe((t) => {
        typeof localStorage < "u" && localStorage.setItem("theme", t), typeof document < "u" && document.documentElement.setAttribute("data-theme", t);
      });
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add(Pl);
      function Sl(t, e) {
        if (t instanceof RegExp) return {
          keys: false,
          pattern: t
        };
        var x, n, o, l, r = [], s = "", a = t.split("/");
        for (a[0] || a.shift(); o = a.shift(); ) x = o[0], x === "*" ? (r.push("wild"), s += "/(.*)") : x === ":" ? (n = o.indexOf("?", 1), l = o.indexOf(".", 1), r.push(o.substring(1, ~n ? n : ~l ? l : o.length)), s += ~n && !~l ? "(?:/([^/]+?))?" : "/([^/]+?)", ~l && (s += (~n ? "?" : "") + "\\" + o.substring(l))) : s += "/" + o;
        return {
          keys: r,
          pattern: new RegExp("^" + s + "/?$", "i")
        };
      }
      function Ml(t) {
        let e, x, n;
        const o = [
          t[2]
        ];
        var l = t[0];
        function r(s, a) {
          let u = {};
          for (let E = 0; E < o.length; E += 1) u = lx(u, o[E]);
          return a !== void 0 && a & 4 && (u = lx(u, ax(o, [
            ix(s[2])
          ]))), {
            props: u
          };
        }
        return l && (e = rx(l, r(t)), e.$on("routeEvent", t[7])), {
          c() {
            e && S0(e.$$.fragment), x = K0();
          },
          m(s, a) {
            e && y0(e, s, a), T(s, x, a), n = true;
          },
          p(s, a) {
            if (a & 1 && l !== (l = s[0])) {
              if (e) {
                mx();
                const u = e;
                v0(u.$$.fragment, 1, 0, () => {
                  P0(u, 1);
                }), hx();
              }
              l ? (e = rx(l, r(s, a)), e.$on("routeEvent", s[7]), S0(e.$$.fragment), F0(e.$$.fragment, 1), y0(e, x.parentNode, x)) : e = null;
            } else if (l) {
              const u = a & 4 ? ax(o, [
                ix(s[2])
              ]) : {};
              e.$set(u);
            }
          },
          i(s) {
            n || (e && F0(e.$$.fragment, s), n = true);
          },
          o(s) {
            e && v0(e.$$.fragment, s), n = false;
          },
          d(s) {
            s && P(x), e && P0(e, s);
          }
        };
      }
      function Il(t) {
        let e, x, n;
        const o = [
          {
            params: t[1]
          },
          t[2]
        ];
        var l = t[0];
        function r(s, a) {
          let u = {};
          for (let E = 0; E < o.length; E += 1) u = lx(u, o[E]);
          return a !== void 0 && a & 6 && (u = lx(u, ax(o, [
            a & 2 && {
              params: s[1]
            },
            a & 4 && ix(s[2])
          ]))), {
            props: u
          };
        }
        return l && (e = rx(l, r(t)), e.$on("routeEvent", t[6])), {
          c() {
            e && S0(e.$$.fragment), x = K0();
          },
          m(s, a) {
            e && y0(e, s, a), T(s, x, a), n = true;
          },
          p(s, a) {
            if (a & 1 && l !== (l = s[0])) {
              if (e) {
                mx();
                const u = e;
                v0(u.$$.fragment, 1, 0, () => {
                  P0(u, 1);
                }), hx();
              }
              l ? (e = rx(l, r(s, a)), e.$on("routeEvent", s[6]), S0(e.$$.fragment), F0(e.$$.fragment, 1), y0(e, x.parentNode, x)) : e = null;
            } else if (l) {
              const u = a & 6 ? ax(o, [
                a & 2 && {
                  params: s[1]
                },
                a & 4 && ix(s[2])
              ]) : {};
              e.$set(u);
            }
          },
          i(s) {
            n || (e && F0(e.$$.fragment, s), n = true);
          },
          o(s) {
            e && v0(e.$$.fragment, s), n = false;
          },
          d(s) {
            s && P(x), e && P0(e, s);
          }
        };
      }
      function Ll(t) {
        let e, x, n, o;
        const l = [
          Il,
          Ml
        ], r = [];
        function s(a, u) {
          return a[1] ? 0 : 1;
        }
        return e = s(t), x = r[e] = l[e](t), {
          c() {
            x.c(), n = K0();
          },
          m(a, u) {
            r[e].m(a, u), T(a, n, u), o = true;
          },
          p(a, [u]) {
            let E = e;
            e = s(a), e === E ? r[e].p(a, u) : (mx(), v0(r[E], 1, 1, () => {
              r[E] = null;
            }), hx(), x = r[e], x ? x.p(a, u) : (x = r[e] = l[e](a), x.c()), F0(x, 1), x.m(n.parentNode, n));
          },
          i(a) {
            o || (F0(x), o = true);
          },
          o(a) {
            v0(x), o = false;
          },
          d(a) {
            a && P(n), r[e].d(a);
          }
        };
      }
      function kt() {
        const t = window.location.href.indexOf("#/");
        let e = t > -1 ? window.location.href.substr(t + 1) : "/";
        const x = e.indexOf("?");
        let n = "";
        return x > -1 && (n = e.substr(x + 1), e = e.substr(0, x)), {
          location: e,
          querystring: n
        };
      }
      const tt = bo(null, function(e) {
        e(kt());
        const x = () => {
          e(kt());
        };
        return window.addEventListener("hashchange", x, false), function() {
          window.removeEventListener("hashchange", x, false);
        };
      }), Nl = go(tt, (t) => t.location);
      go(tt, (t) => t.querystring);
      const bt = Y0(void 0);
      async function i0(t) {
        if (!t || t.length < 1 || t.charAt(0) != "/" && t.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await _o(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (t.charAt(0) == "#" ? "" : "#") + t;
      }
      function zl(t) {
        t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function ql(t, e, x) {
        let { routes: n = {} } = e, { prefix: o = "" } = e, { restoreScrollState: l = false } = e;
        class r {
          constructor(v, _) {
            if (!_ || typeof _ != "function" && (typeof _ != "object" || _._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!v || typeof v == "string" && (v.length < 1 || v.charAt(0) != "/" && v.charAt(0) != "*") || typeof v == "object" && !(v instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: k, keys: w } = Sl(v);
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
        const s = [];
        n instanceof Map ? n.forEach((D, v) => {
          s.push(new r(v, D));
        }) : Object.keys(n).forEach((D) => {
          s.push(new r(D, n[D]));
        });
        let a = null, u = null, E = {};
        const f = _l();
        async function C(D, v) {
          await _o(), f(D, v);
        }
        let A = null, F = null;
        l && (F = (D) => {
          D.state && (D.state.__svelte_spa_router_scrollY || D.state.__svelte_spa_router_scrollX) ? A = D.state : A = null;
        }, window.addEventListener("popstate", F), vl(() => {
          zl(A);
        }));
        let B = null, p = null;
        const m = tt.subscribe(async (D) => {
          B = D;
          let v = 0;
          for (; v < s.length; ) {
            const _ = s[v].match(D.location);
            if (!_) {
              v++;
              continue;
            }
            const k = {
              route: s[v].path,
              location: D.location,
              querystring: D.querystring,
              userData: s[v].userData,
              params: _ && typeof _ == "object" && Object.keys(_).length ? _ : null
            };
            if (!await s[v].checkConditions(k)) {
              x(0, a = null), p = null, C("conditionsFailed", k);
              return;
            }
            C("routeLoading", Object.assign({}, k));
            const w = s[v].component;
            if (p != w) {
              w.loading ? (x(0, a = w.loading), p = w, x(1, u = w.loadingParams), x(2, E = {}), C("routeLoaded", Object.assign({}, k, {
                component: a,
                name: a.name,
                params: u
              }))) : (x(0, a = null), p = null);
              const g = await w();
              if (D != B) return;
              x(0, a = g && g.default || g), p = w;
            }
            _ && typeof _ == "object" && Object.keys(_).length ? x(1, u = _) : x(1, u = null), x(2, E = s[v].props), C("routeLoaded", Object.assign({}, k, {
              component: a,
              name: a.name,
              params: u
            })).then(() => {
              bt.set(u);
            });
            return;
          }
          x(0, a = null), p = null, bt.set(void 0);
        });
        px(() => {
          m(), F && window.removeEventListener("popstate", F);
        });
        function h(D) {
          jx.call(this, t, D);
        }
        function b(D) {
          jx.call(this, t, D);
        }
        return t.$$set = (D) => {
          "routes" in D && x(3, n = D.routes), "prefix" in D && x(4, o = D.prefix), "restoreScrollState" in D && x(5, l = D.restoreScrollState);
        }, t.$$.update = () => {
          t.$$.dirty & 32 && (history.scrollRestoration = l ? "manual" : "auto");
        }, [
          a,
          u,
          E,
          n,
          o,
          l,
          h,
          b
        ];
      }
      class Rl extends k0 {
        constructor(e) {
          super(), _0(this, e, ql, Ll, m0, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const Ol = "/assets/peachsafe_core_wasm_bg-C8H6g175.wasm", Hl = async (t = {}, e) => {
        let x;
        if (e.startsWith("data:")) {
          const n = e.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(n, "base64");
          else if (typeof atob == "function") {
            const l = atob(n);
            o = new Uint8Array(l.length);
            for (let r = 0; r < l.length; r++) o[r] = l.charCodeAt(r);
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
      function Ul(t, e) {
        const x = B0.aesGcmDecrypt(t, e);
        if (x[2]) throw g0(x[1]);
        return g0(x[0]);
      }
      function jl(t, e) {
        const x = B0.aesGcmEncrypt(t, e);
        if (x[2]) throw g0(x[1]);
        return g0(x[0]);
      }
      function Vl(t, e) {
        const x = To(t, B0.__wbindgen_malloc, B0.__wbindgen_realloc), n = cx, o = B0.argon2idDerive(x, n, e);
        if (o[2]) throw g0(o[1]);
        return g0(o[0]);
      }
      function Gl(t) {
        const e = B0.deriveAlertKey(t);
        if (e[2]) throw g0(e[1]);
        return g0(e[0]);
      }
      function Kl(t, e) {
        const x = B0.deriveEncounterToken(t, e);
        if (x[2]) throw g0(x[1]);
        return g0(x[0]);
      }
      function Yl(t) {
        const e = B0.ed25519PubkeyFromSeed(t);
        if (e[2]) throw g0(e[1]);
        return g0(e[0]);
      }
      function Jl(t, e) {
        const x = B0.ed25519Sign(t, e);
        if (x[2]) throw g0(x[1]);
        return g0(x[0]);
      }
      function Ql() {
        const t = B0.generateEphemeralKeypair();
        if (t[2]) throw g0(t[1]);
        return g0(t[0]);
      }
      function Wl(t) {
        return B0.generateRandomBytes(t);
      }
      function yo(t) {
        return B0.sha256(t);
      }
      function Xl(t, e, x) {
        const n = To(t, B0.__wbindgen_malloc, B0.__wbindgen_realloc), o = cx, l = B0.solvePoW(n, o, e, x);
        if (l[2]) throw g0(l[1]);
        return g0(l[0]);
      }
      function Zl(t) {
        return typeof t == "function";
      }
      function $l(t) {
        const e = t;
        return typeof e == "object" && e !== null;
      }
      function er(t) {
        return typeof t == "string";
      }
      function xr(t) {
        return t === void 0;
      }
      function tr(t, e) {
        throw new Error(Po(t, e));
      }
      function nr() {
        return Ue(function(t, e, x) {
          return t.call(e, x);
        }, arguments);
      }
      function or(t) {
        return t.crypto;
      }
      function lr() {
        return Ue(function(t, e) {
          t.getRandomValues(e);
        }, arguments);
      }
      function rr(t) {
        return t.length;
      }
      function sr(t) {
        return t.msCrypto;
      }
      function ar() {
        return new Object();
      }
      function ir(t) {
        return new Uint8Array(t >>> 0);
      }
      function cr(t) {
        return t.node;
      }
      function ur(t) {
        return t.process;
      }
      function Er(t, e, x) {
        Uint8Array.prototype.set.call(nt(t, e), x);
      }
      function fr() {
        return Ue(function(t, e) {
          t.randomFillSync(e);
        }, arguments);
      }
      function dr() {
        return Ue(function() {
          return module.require;
        }, arguments);
      }
      function Br() {
        return Ue(function(t, e, x) {
          return Reflect.set(t, e, x);
        }, arguments);
      }
      function Cr(t, e, x) {
        t.set(nt(e, x));
      }
      function Ar() {
        const t = typeof global > "u" ? null : global;
        return vx(t) ? 0 : He(t);
      }
      function Fr() {
        const t = typeof globalThis > "u" ? null : globalThis;
        return vx(t) ? 0 : He(t);
      }
      function Dr() {
        const t = typeof self > "u" ? null : self;
        return vx(t) ? 0 : He(t);
      }
      function pr() {
        const t = typeof window > "u" ? null : window;
        return vx(t) ? 0 : He(t);
      }
      function mr(t, e, x) {
        return t.subarray(e >>> 0, x >>> 0);
      }
      function hr(t) {
        return t.versions;
      }
      function vr(t) {
        return t;
      }
      function _r(t, e) {
        return nt(t, e);
      }
      function kr(t, e) {
        return Po(t, e);
      }
      function br() {
        const t = B0.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, true), t.set(e + 3, false);
      }
      function He(t) {
        const e = B0.__externref_table_alloc();
        return B0.__wbindgen_externrefs.set(e, t), e;
      }
      function nt(t, e) {
        return t = t >>> 0, Se().subarray(t / 1, t / 1 + e);
      }
      function Po(t, e) {
        return t = t >>> 0, wr(t, e);
      }
      let We = null;
      function Se() {
        return (We === null || We.byteLength === 0) && (We = new Uint8Array(B0.memory.buffer)), We;
      }
      function Ue(t, e) {
        try {
          return t.apply(this, e);
        } catch (x) {
          const n = He(x);
          B0.__wbindgen_exn_store(n);
        }
      }
      function vx(t) {
        return t == null;
      }
      function To(t, e, x) {
        if (x === void 0) {
          const s = Me.encode(t), a = e(s.length, 1) >>> 0;
          return Se().subarray(a, a + s.length).set(s), cx = s.length, a;
        }
        let n = t.length, o = e(n, 1) >>> 0;
        const l = Se();
        let r = 0;
        for (; r < n; r++) {
          const s = t.charCodeAt(r);
          if (s > 127) break;
          l[o + r] = s;
        }
        if (r !== n) {
          r !== 0 && (t = t.slice(r)), o = x(o, n, n = r + t.length * 3, 1) >>> 0;
          const s = Se().subarray(o + r, o + n), a = Me.encodeInto(t, s);
          r += a.written, o = x(o, n, r, 1) >>> 0;
        }
        return cx = r, o;
      }
      function g0(t) {
        const e = B0.__wbindgen_externrefs.get(t);
        return B0.__externref_table_dealloc(t), e;
      }
      let tx = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      tx.decode();
      const gr = 2146435072;
      let Sx = 0;
      function wr(t, e) {
        return Sx += e, Sx >= gr && (tx = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), tx.decode(), Sx = e), tx.decode(Se().subarray(t, t + e));
      }
      const Me = new TextEncoder();
      "encodeInto" in Me || (Me.encodeInto = function(t, e) {
        const x = Me.encode(t);
        return e.set(x), {
          read: t.length,
          written: x.length
        };
      });
      let cx = 0, B0;
      function yr(t) {
        B0 = t;
      }
      URL = globalThis.URL;
      const Pr = await Hl({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: or,
          __wbg_process_44c7a14e11e9f69e: ur,
          __wbg_versions_276b2795b1c6a219: hr,
          __wbg_node_84ea875411254db1: cr,
          __wbg_require_b4edbdcf3e2a1ef0: dr,
          __wbg_call_a24592a6f349a97e: nr,
          __wbg_msCrypto_bd5a034af96bcba6: sr,
          __wbg_randomFillSync_6c25eac9869eb53c: fr,
          __wbg_getRandomValues_c44a50d8cfdaebeb: lr,
          __wbg_new_aa8d0fa9762c29bd: ar,
          __wbg_length_9f1775224cf1d815: rr,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: Er,
          __wbg_new_with_length_8c854e41ea4dae9b: ir,
          __wbg_subarray_f8ca46a25b1f5e0d: mr,
          __wbg_set_3d484eb794afec82: Cr,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: Fr,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: Dr,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: Ar,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: pr,
          __wbg_set_022bee52d0b05b19: Br,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: tr,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: $l,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: er,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: Zl,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: xr,
          __wbindgen_init_externref_table: br,
          __wbindgen_cast_0000000000000001: vr,
          __wbindgen_cast_0000000000000002: _r,
          __wbindgen_cast_0000000000000003: kr
        }
      }, Ol), { memory: Tr, aesGcmDecrypt: Sr, aesGcmEncrypt: Mr, argon2idDerive: Ir, deriveAlertKey: Lr, deriveEncounterToken: Nr, ed25519PubkeyFromSeed: zr, ed25519Sign: qr, ed25519Verify: Rr, generateEphemeralKeypair: Or, generateRandomBytes: Hr, generateUserKeypair: Ur, main: jr, serializePublicKey: Vr, sha256: Gr, solvePoW: Kr, __wbindgen_exn_store: Yr, __externref_table_alloc: Jr, __wbindgen_externrefs: Qr, __externref_table_dealloc: Wr, __wbindgen_malloc: Xr, __wbindgen_realloc: Zr, __wbindgen_free: $r, __wbindgen_start: So } = Pr, es = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: Jr,
        __externref_table_dealloc: Wr,
        __wbindgen_exn_store: Yr,
        __wbindgen_externrefs: Qr,
        __wbindgen_free: $r,
        __wbindgen_malloc: Xr,
        __wbindgen_realloc: Zr,
        __wbindgen_start: So,
        aesGcmDecrypt: Sr,
        aesGcmEncrypt: Mr,
        argon2idDerive: Ir,
        deriveAlertKey: Lr,
        deriveEncounterToken: Nr,
        ed25519PubkeyFromSeed: zr,
        ed25519Sign: qr,
        ed25519Verify: Rr,
        generateEphemeralKeypair: Or,
        generateRandomBytes: Hr,
        generateUserKeypair: Ur,
        main: jr,
        memory: Tr,
        serializePublicKey: Vr,
        sha256: Gr,
        solvePoW: Kr
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      yr(es);
      So();
      let Kx = false;
      async function xs() {
        Kx || (Kx = true);
      }
      function G0() {
        if (!Kx) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function T0(t) {
        const e = new Uint8Array(t.length / 2);
        for (let x = 0; x < t.length; x += 2) e[x / 2] = parseInt(t.slice(x, x + 2), 16);
        return e;
      }
      function e0(t) {
        return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function je(t) {
        return G0(), Wl(t);
      }
      async function te(t, e) {
        return G0(), await new Promise((x) => setTimeout(x, 0)), Vl(t, e);
      }
      function Ve(t, e) {
        return G0(), jl(t, e);
      }
      function _x(t, e) {
        return G0(), Ul(t, e);
      }
      function ts() {
        return G0(), Ql();
      }
      function ns(t, e) {
        return G0(), Kl(t, e);
      }
      function Mo(t) {
        return G0(), Yl(t);
      }
      function Io(t, e) {
        return G0(), Jl(t, e);
      }
      function os(t) {
        return G0(), yo(t);
      }
      function Lo(t) {
        return G0(), Gl(t);
      }
      function ls(t, e, x) {
        return G0(), Xl(t, e, x);
      }
      function Ee(t) {
        let e = "";
        for (let x = 0; x < t.length; x++) e += String.fromCharCode(t[x]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function No(t) {
        const x = (t + "===".slice((t.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(x), (n) => n.charCodeAt(0));
      }
      function rs(t, e, x, n) {
        const o = n && n.trim() ? encodeURIComponent(n.trim()) : "";
        return `2|${t}|${e}|${x}|${o}`;
      }
      function gt(t) {
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
      function ue(t, e, x) {
        G0();
        const n = new Uint8Array(68);
        return n.set(t, 0), n.set(e, 32), n[64] = x >>> 24 & 255, n[65] = x >>> 16 & 255, n[66] = x >>> 8 & 255, n[67] = x & 255, yo(n);
      }
      const fe = Y0("ok");
      let zo = "ok";
      fe.subscribe((t) => {
        zo = t;
      });
      let ux = null;
      function ss() {
        clearTimeout(ux), fe.set("retrying");
      }
      function as() {
        zo !== "ok" && (clearTimeout(ux), fe.set("reconnected"), ux = setTimeout(() => fe.set("ok"), 3e3));
      }
      function wt() {
        clearTimeout(ux), fe.set("down");
      }
      function yt(t) {
        let e;
        function x(l, r) {
          if (l[0] === "retrying") return us;
          if (l[0] === "down") return cs;
          if (l[0] === "reconnected") return is;
        }
        let n = x(t), o = n && n(t);
        return {
          c() {
            e = d("div"), o && o.c(), c(e, "class", "banner svelte-176fo9c"), c(e, "role", "status"), c(e, "aria-live", "polite"), n0(e, "retrying", t[0] === "retrying"), n0(e, "down", t[0] === "down"), n0(e, "reconnected", t[0] === "reconnected");
          },
          m(l, r) {
            T(l, e, r), o && o.m(e, null);
          },
          p(l, r) {
            n !== (n = x(l)) && (o && o.d(1), o = n && n(l), o && (o.c(), o.m(e, null))), r & 1 && n0(e, "retrying", l[0] === "retrying"), r & 1 && n0(e, "down", l[0] === "down"), r & 1 && n0(e, "reconnected", l[0] === "reconnected");
          },
          d(l) {
            l && P(e), o && o.d();
          }
        };
      }
      function is(t) {
        let e;
        return {
          c() {
            e = z("Reconnected");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function cs(t) {
        let e;
        return {
          c() {
            e = z("Server unavailable. Please try again later.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function us(t) {
        let e;
        return {
          c() {
            e = z("Server unreachable \u2014 retrying\u2026");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Es(t) {
        let e, x = t[0] !== "ok" && yt(t);
        return {
          c() {
            x && x.c(), e = K0();
          },
          m(n, o) {
            x && x.m(n, o), T(n, e, o);
          },
          p(n, [o]) {
            n[0] !== "ok" ? x ? x.p(n, o) : (x = yt(n), x.c(), x.m(e.parentNode, e)) : x && (x.d(1), x = null);
          },
          i: Z,
          o: Z,
          d(n) {
            n && P(e), x && x.d(n);
          }
        };
      }
      function fs(t, e, x) {
        let n;
        return V0(t, fe, (o) => x(0, n = o)), [
          n
        ];
      }
      class ds extends k0 {
        constructor(e) {
          super(), _0(this, e, fs, Es, m0, {});
        }
      }
      const C0 = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", Mx = [
        1e3,
        2e3,
        4e3
      ], Pt = /* @__PURE__ */ new Set([
        502,
        503,
        504
      ]);
      async function se(t, e = {}) {
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
            if (!Pt.has(o.status) || n >= Mx.length) return Pt.has(o.status) ? wt() : as(), o;
          } catch (o) {
            if (n >= Mx.length) throw wt(), o;
          }
          ss(), await new Promise((o) => setTimeout(o, Mx[n]));
        }
      }
      let de = null, ot = null, lt = null;
      const qe = "peachsafe_device_tokens";
      function Bs(t) {
        try {
          return JSON.parse(localStorage.getItem(qe) ?? "{}")[t] ?? null;
        } catch {
          return null;
        }
      }
      function Cs(t, e) {
        try {
          const x = JSON.parse(localStorage.getItem(qe) ?? "{}");
          x[t] = e, localStorage.setItem(qe, JSON.stringify(x));
        } catch {
        }
      }
      function Ix(t) {
        try {
          const e = JSON.parse(localStorage.getItem(qe) ?? "{}");
          delete e[t], localStorage.setItem(qe, JSON.stringify(e));
        } catch {
        }
      }
      const Ce = Y0(null), kx = Y0(null), Re = Y0(null), Ie = Y0(null), Ex = Y0(null);
      function O0() {
        return de !== null;
      }
      function rt(t) {
        ot = t;
      }
      function Be() {
        return ot;
      }
      function qo(t) {
        lt = t;
      }
      function nx() {
        return lt;
      }
      function Ro() {
        de = null, ot = null, lt = null, Ce.set(null), kx.set(null), Re.set(null), Ie.set(null), Ex.set(null);
      }
      async function As() {
        try {
          const t = await Fs();
          Ce.set(t.verified);
        } catch {
        }
      }
      async function Fs() {
        const t = await L0(`${C0}/v1/web/user/email`);
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function Ds(t) {
        const e = await L0(`${C0}/v1/web/user/request-email-change`, {
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
      async function ps() {
        const t = await L0(`${C0}/v1/web/user/resend-verification`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await h0(t));
      }
      async function ms(t) {
        const e = await se(`${C0}/v1/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t
          })
        });
        if (!e.ok) throw new Error(await h0(e));
        Ce.set(true);
      }
      async function st(t) {
        const e = await se(`${C0}/v1/prelogin`, {
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
      async function hs(t, e, x) {
        const n = await se(`${C0}/v1/signup`, {
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
        return de = o.session_token, Ce.set(false), o;
      }
      async function Tt(t, e, x = null, n = false) {
        const o = {
          username: t,
          auth_signature: e
        };
        x && (o.otp = x), n && (o.remember_device = true);
        const l = Bs(t);
        l && (o.device_token = l);
        const r = await se(`${C0}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(o)
        });
        if (!r.ok) throw new Error(await h0(r));
        const s = await r.json();
        return s.requires_otp || (de = s.session_token, s.device_token && Cs(t, s.device_token), s.bootstrap ? (Ce.set(s.bootstrap.email_verified), kx.set(s.bootstrap.email), Re.set(s.bootstrap.totp_enabled), Ie.set(s.bootstrap.trusted_devices ?? null), Ex.set(s.bootstrap.backup_code_count ?? null)) : As()), s;
      }
      async function vs() {
        const t = await L0(`${C0}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function _s(t, e) {
        const x = await L0(`${C0}/v1/web/totp/confirm`, {
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
      async function ks() {
        const t = await L0(`${C0}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await h0(t));
      }
      async function bs() {
        const t = await L0(`${C0}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function gs(t) {
        const e = await L0(`${C0}/v1/web/trusted-devices/${t}`, {
          method: "DELETE"
        });
        if (!e.ok) throw new Error(await h0(e));
      }
      async function ws() {
        const t = await L0(`${C0}/v1/web/trusted-devices`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await h0(t));
      }
      async function Oo() {
        if (!de) return;
        const t = de;
        Ro(), se(`${C0}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${t}`
          }
        }).catch(() => {
        });
      }
      async function ys() {
        const t = await L0(`${C0}/v1/web/user/blob`);
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function Ps(t, e) {
        const x = await L0(`${C0}/v1/web/user/blob`, {
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
      async function Ho(t, e) {
        const x = await L0(`${C0}/v1/web/user/encounters`, {
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
      async function Ts(t, e, x, n) {
        const o = await L0(`${C0}/v1/web/user/change-password`, {
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
      async function Ss() {
        const t = await L0(`${C0}/v1/web/user`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await h0(t));
        Ro();
      }
      async function Ms(t) {
        const e = await se(`${C0}/v1/query`, {
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
      async function Is(t) {
        const e = await L0(`${C0}/v1/web/user/encounters/by-token/${t}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await h0(e));
      }
      async function Ls(t) {
        const e = await se(`${C0}/v1/submit`, {
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
        const l = await h0(e), r = new Error(l);
        throw r.statusCode = e.status, r.serverTime = x, r.powDifficulty = o, r;
      }
      function Uo() {
        fetch(C0, {
          method: "HEAD"
        }).catch(() => {
        });
      }
      function L0(t, e = {}) {
        return se(t, {
          ...e,
          headers: {
            Authorization: `Bearer ${de}`,
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
      const St = 15 * 60 * 1e3, Ns = 2 * 60 * 1e3, jo = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let Yx = null, Jx = null, at = null, it = null, bx = false, Ge = false;
      function ct() {
        clearTimeout(Yx), clearTimeout(Jx), Jx = setTimeout(() => {
          Ge = true, at?.();
        }, St - Ns), Yx = setTimeout(() => it?.(), St);
      }
      function Vo() {
        bx && !Ge && ct();
      }
      function zs({ onWarnCallback: t, onExpiredCallback: e }) {
        Qx(), at = t, it = e, bx = true, Ge = false;
        for (const x of jo) document.addEventListener(x, Vo, {
          passive: true
        });
        ct();
      }
      function Qx() {
        clearTimeout(Yx), clearTimeout(Jx);
        for (const t of jo) document.removeEventListener(t, Vo);
        bx = false, Ge = false, at = null, it = null;
      }
      function qs() {
        Ge = false, bx && ct();
      }
      function Rs(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p, m, h, b, D, v, _, k, w, g, M, I, S, L, N, q, U, R, j, Q, K, G;
        return {
          c() {
            e = d("main"), x = d("section"), x.innerHTML = `<div class="blob blob-1 svelte-14nhamx" aria-hidden="true"></div> <div class="blob blob-2 svelte-14nhamx" aria-hidden="true"></div> <div class="blob blob-3 svelte-14nhamx" aria-hidden="true"></div> <div class="hero-content svelte-14nhamx"><div class="hero-brand svelte-14nhamx"><img src="/android-chrome-192x192.png" alt="" class="hero-icon svelte-14nhamx"/> <span><span class="brand-peach svelte-14nhamx">Peach</span><span class="brand-safe svelte-14nhamx">Safe</span></span></div> <p class="hero-tagline svelte-14nhamx">Know if you need to get tested \u2014 without anyone knowing who you slept with.</p> <p class="hero-sub svelte-14nhamx">PeachSafe lets you notify past partners when you test positive for an STI,
        and get notified if a partner tests positive. No one ever learns who was
        with whom \u2014 not your partners, not us.</p> <div class="cta-buttons svelte-14nhamx"><a href="#/signup" class="btn-primary svelte-14nhamx">Sign up</a> <a href="#/login" class="btn-ghost svelte-14nhamx">Log in</a></div></div> <div class="hero-scroll-hint svelte-14nhamx" aria-hidden="true"><span class="material-icons svelte-14nhamx">expand_more</span></div>`, n = y(), o = d("section"), l = d("div"), r = d("h2"), r.textContent = "How it works", s = y(), a = d("div"), u = d("div"), u.innerHTML = '<div class="step-number svelte-14nhamx">1</div> <div class="step-body svelte-14nhamx"><h3 class="svelte-14nhamx">Exchange a code</h3> <p class="svelte-14nhamx">Before a sexual encounter, both people scan each other&#39;s QR code. This generates a private, anonymous token that only the two of you share. Nothing identifying is stored or transmitted.</p></div>', E = y(), f = d("div"), f.innerHTML = '<div class="step-number svelte-14nhamx">2</div> <div class="step-body svelte-14nhamx"><h3 class="svelte-14nhamx">Record a positive result</h3> <p class="svelte-14nhamx">If you test positive, mark it in PeachSafe. Select what you tested positive for - notifications are specific, not vague.</p></div>', C = y(), A = d("div"), A.innerHTML = '<div class="step-number svelte-14nhamx">3</div> <div class="step-body svelte-14nhamx"><h3 class="svelte-14nhamx">Partners are notified</h3> <p class="svelte-14nhamx">PeachSafe notifies anyone who should know. If a past partner records a positive result, you&#39;ll receive an email. Neither of you learns the other&#39;s identity from the system.</p></div>', F = y(), B = d("section"), p = d("div"), m = d("h2"), m.textContent = "Why it's private", h = y(), b = d("div"), D = d("div"), D.innerHTML = '<span class="material-icons svelte-14nhamx">lock</span> <span>Your encounter data is encrypted. Only you can access it</span>', v = y(), _ = d("div"), _.innerHTML = '<span class="material-icons svelte-14nhamx">visibility_off</span> <span>The server is a blind message board; it can&#39;t connect notifications to real people</span>', k = y(), w = d("div"), w.innerHTML = '<span class="material-icons svelte-14nhamx">shuffle</span> <span>Queries are padded with noise so even traffic analysis reveals nothing</span>', g = y(), M = d("div"), M.innerHTML = '<span class="material-icons svelte-14nhamx">person_off</span> <span>No account is linked to your real name, phone number, or location</span>', I = y(), S = d("section"), L = d("div"), N = d("h2"), N.textContent = "Who it's for", q = y(), U = d("p"), U.textContent = `People who want to take sexual health seriously without the social and legal
        risks of conventional contact tracing \u2014 whether you're navigating dating apps,
        multiple partners, or just value your privacy.`, R = y(), j = d("footer"), Q = d("div"), Q.innerHTML = '<a href="#/signup" class="btn-primary svelte-14nhamx">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-14nhamx">Log in</a>', c(x, "class", "hero svelte-14nhamx"), c(r, "class", "svelte-14nhamx"), c(u, "class", "step svelte-14nhamx"), c(f, "class", "step svelte-14nhamx"), c(A, "class", "step svelte-14nhamx"), c(a, "class", "steps svelte-14nhamx"), c(l, "class", "section-inner svelte-14nhamx"), c(o, "class", "how-it-works svelte-14nhamx"), c(m, "class", "svelte-14nhamx"), c(D, "class", "privacy-card svelte-14nhamx"), c(_, "class", "privacy-card svelte-14nhamx"), c(w, "class", "privacy-card svelte-14nhamx"), c(M, "class", "privacy-card svelte-14nhamx"), c(b, "class", "privacy-grid svelte-14nhamx"), c(p, "class", "section-inner svelte-14nhamx"), c(B, "class", "privacy svelte-14nhamx"), c(N, "class", "svelte-14nhamx"), c(U, "class", "svelte-14nhamx"), c(L, "class", "section-inner svelte-14nhamx"), c(S, "class", "who svelte-14nhamx"), c(Q, "class", "footer-inner svelte-14nhamx"), c(j, "class", "svelte-14nhamx"), c(e, "data-theme", "light"), c(e, "class", "svelte-14nhamx");
          },
          m(O, W) {
            T(O, e, W), i(e, x), i(e, n), i(e, o), i(o, l), i(l, r), i(l, s), i(l, a), i(a, u), i(a, E), i(a, f), i(a, C), i(a, A), i(e, F), i(e, B), i(B, p), i(p, m), i(p, h), i(p, b), i(b, D), i(b, v), i(b, _), i(b, k), i(b, w), i(b, g), i(b, M), i(e, I), i(e, S), i(S, L), i(L, N), i(L, q), i(L, U), i(e, R), i(e, j), i(j, Q), K || (G = [
              j0(t[0].call(null, r)),
              j0(t[0].call(null, u, 0)),
              j0(t[0].call(null, f, 80)),
              j0(t[0].call(null, A, 160)),
              j0(t[0].call(null, m)),
              j0(t[0].call(null, D, 0)),
              j0(t[0].call(null, _, 70)),
              j0(t[0].call(null, w, 140)),
              j0(t[0].call(null, M, 210)),
              j0(t[0].call(null, N)),
              j0(t[0].call(null, U, 60)),
              j0(t[0].call(null, Q))
            ], K = true);
          },
          p: Z,
          i: Z,
          o: Z,
          d(O) {
            O && P(e), K = false, l0(G);
          }
        };
      }
      function Os(t) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function x(n, o = 0) {
          if (e()) return {};
          n.style.opacity = "0", n.style.transform = "translateY(20px)", n.style.transition = `opacity 0.55s ease ${o}ms, transform 0.55s ease ${o}ms`;
          const l = new IntersectionObserver(([r]) => {
            r.isIntersecting && (n.style.opacity = "1", n.style.transform = "translateY(0)", l.disconnect());
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
          x
        ];
      }
      class Hs extends k0 {
        constructor(e) {
          super(), _0(this, e, Os, Rs, m0, {});
        }
      }
      const Go = Y0(false);
      function ut() {
        Go.set((J?.receivedAlerts || []).some((t) => !t.viewed));
      }
      const Us = 12 * 1024, Ko = Us * 0.75, Yo = Y0(false), Jo = 18262, Qo = 65535, js = 45, Z0 = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], Le = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, Wo = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function pe(t) {
        const e = (/* @__PURE__ */ new Date(t + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - Jo;
      }
      function me(t) {
        const e = (Jo + t) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      function Et(t) {
        const e = t.encounters, x = t.results || [], n = t.receivedAlerts || [], o = t.relationships || [], l = t.groupEncounters || [], r = e.length, s = x.length, a = n.length, u = o.length, E = l.length, f = new TextEncoder(), C = (_) => _ ? f.encode(_).slice(0, 255) : new Uint8Array(0), A = e.map((_) => C(_.note)), F = o.map((_) => C(_.name)), B = l.map((_) => C(_.name)), p = l.map((_) => C(_.note)), m = e.reduce((_, k, w) => _ + 70 + 1 + A[w].length, 0), h = o.reduce((_, k, w) => _ + 73 + 1 + F[w].length, 0), b = l.reduce((_, k, w) => _ + 73 + 1 + B[w].length + 1 + p[w].length, 0), D = new Uint8Array(35 + m + 2 + s * 4 + 2 + a * 36 + 2 + h + 2 + b);
        let v = 0;
        D[v++] = 1, D.set(t.myContactId, v), v += 32, D[v++] = r >> 8 & 255, D[v++] = r & 255;
        for (let _ = 0; _ < r; _++) {
          const k = e[_];
          D.set(k.rawToken, v), v += 32, D.set(k.theirContactId, v), v += 32;
          const w = pe(k.date);
          D[v++] = w >> 8 & 255, D[v++] = w & 255, D[v++] = k.queryIndex >> 8 & 255, D[v++] = k.queryIndex & 255, D[v++] = k.submitIndex >> 8 & 255, D[v++] = k.submitIndex & 255, D[v++] = A[_].length, D.set(A[_], v), v += A[_].length;
        }
        D[v++] = s >> 8 & 255, D[v++] = s & 255;
        for (const _ of x) {
          const k = pe(_.date);
          D[v++] = k >> 8 & 255, D[v++] = k & 255, D[v++] = _.hasNotified ? 1 : 0;
          let w = 0;
          for (let g = 0; g < Z0.length; g++) (_.positiveDiseases || []).includes(Z0[g]) && (w |= 1 << g);
          D[v++] = w;
        }
        D[v++] = a >> 8 & 255, D[v++] = a & 255;
        for (const _ of n) {
          D.set(_.rawToken, v), v += 32;
          const k = pe(_.testDate);
          D[v++] = k >> 8 & 255, D[v++] = k & 255;
          let w = 0;
          for (let M = 0; M < Z0.length; M++) (_.diseases || []).includes(Z0[M]) && (w |= 1 << M);
          D[v++] = w;
          let g = 0;
          _.viewed && (g |= 1), _.labVerified && (g |= 2), D[v++] = g;
        }
        D[v++] = u >> 8 & 255, D[v++] = u & 255;
        for (let _ = 0; _ < u; _++) {
          const k = o[_];
          D.set(k.rawToken, v), v += 32, D.set(k.theirContactId, v), v += 32;
          const w = pe(k.createdAt);
          D[v++] = w >> 8 & 255, D[v++] = w & 255;
          const g = k.endedAt ? pe(k.endedAt) : Qo;
          D[v++] = g >> 8 & 255, D[v++] = g & 255;
          let M = 0;
          k.archived && (M |= 1), D[v++] = M, D[v++] = k.queryIndex >> 8 & 255, D[v++] = k.queryIndex & 255, D[v++] = k.submitIndex >> 8 & 255, D[v++] = k.submitIndex & 255, D[v++] = F[_].length, D.set(F[_], v), v += F[_].length;
        }
        D[v++] = E >> 8 & 255, D[v++] = E & 255;
        for (let _ = 0; _ < E; _++) {
          const k = l[_];
          D.set(k.token, v), v += 32;
          const w = pe(k.date);
          D[v++] = w >> 8 & 255, D[v++] = w & 255;
          const g = k.createdAt >>> 0;
          D[v++] = g >>> 24 & 255, D[v++] = g >>> 16 & 255, D[v++] = g >>> 8 & 255, D[v++] = g & 255, D[v++] = k.isHost ? 1 : 0, D[v++] = k.tokenIndex >> 8 & 255, D[v++] = k.tokenIndex & 255, D.set(k.hostContactId, v), v += 32, D[v++] = B[_].length, D.set(B[_], v), v += B[_].length, D[v++] = p[_].length, D.set(p[_], v), v += p[_].length;
        }
        return D;
      }
      function Vs(t) {
        let e = 0;
        const x = t[e++];
        if (x !== 1) throw new Error(`Unknown blob version: ${x}`);
        const n = t.slice(e, e + 32);
        e += 32;
        const o = t[e] << 8 | t[e + 1];
        e += 2;
        const l = [];
        for (let B = 0; B < o; B++) {
          const p = t.slice(e, e + 32);
          e += 32;
          const m = t.slice(e, e + 32);
          e += 32;
          const h = t[e] << 8 | t[e + 1];
          e += 2;
          const b = t[e] << 8 | t[e + 1];
          e += 2;
          const D = t[e] << 8 | t[e + 1];
          e += 2;
          const v = t[e++], _ = v > 0 ? new TextDecoder().decode(t.slice(e, e + v)) : null;
          e += v, l.push({
            rawToken: p,
            theirContactId: m,
            date: me(h),
            queryIndex: b,
            submitIndex: D,
            note: _
          });
        }
        const r = [], s = t[e] << 8 | t[e + 1];
        e += 2;
        for (let B = 0; B < s; B++) {
          const p = t[e] << 8 | t[e + 1];
          e += 2;
          const m = t[e++], h = t[e++], b = !!(m & 1), D = Z0.filter((v, _) => h & 1 << _);
          r.push({
            date: me(p),
            hasNotified: b,
            positiveDiseases: D
          });
        }
        const a = [], u = t[e] << 8 | t[e + 1];
        e += 2;
        for (let B = 0; B < u; B++) {
          const p = t.slice(e, e + 32);
          e += 32;
          const m = t[e] << 8 | t[e + 1];
          e += 2;
          const h = t[e++], b = t[e++], D = Z0.filter((k, w) => h & 1 << w), v = !!(b & 1), _ = !!(b & 2);
          a.push({
            rawToken: p,
            testDate: me(m),
            diseases: D,
            viewed: v,
            labVerified: _
          });
        }
        const E = [], f = t[e] << 8 | t[e + 1];
        e += 2;
        for (let B = 0; B < f; B++) {
          const p = t.slice(e, e + 32);
          e += 32;
          const m = t.slice(e, e + 32);
          e += 32;
          const h = t[e] << 8 | t[e + 1];
          e += 2;
          const b = t[e] << 8 | t[e + 1];
          e += 2;
          const D = t[e++], v = t[e] << 8 | t[e + 1];
          e += 2;
          const _ = t[e] << 8 | t[e + 1];
          e += 2;
          const k = t[e++], w = k > 0 ? new TextDecoder().decode(t.slice(e, e + k)) : null;
          e += k;
          const g = b === Qo ? null : me(b), M = !!(D & 1);
          E.push({
            rawToken: p,
            theirContactId: m,
            createdAt: me(h),
            endedAt: g,
            archived: M,
            queryIndex: v,
            submitIndex: _,
            name: w
          });
        }
        const C = [], A = t[e] << 8 | t[e + 1];
        e += 2;
        const F = new TextDecoder();
        for (let B = 0; B < A; B++) {
          const p = t.slice(e, e + 32);
          e += 32;
          const m = t[e] << 8 | t[e + 1];
          e += 2;
          const h = (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
          e += 4;
          const b = t[e++], D = t[e] << 8 | t[e + 1];
          e += 2;
          const v = t.slice(e, e + 32);
          e += 32;
          const _ = t[e++], k = _ > 0 ? F.decode(t.slice(e, e + _)) : null;
          e += _;
          const w = t[e++], g = w > 0 ? F.decode(t.slice(e, e + w)) : null;
          e += w;
          const M = !!(b & 1);
          C.push({
            token: p,
            date: me(m),
            createdAt: h,
            isHost: M,
            tokenIndex: D,
            hostContactId: v,
            name: k,
            note: g
          });
        }
        return {
          myContactId: n,
          encounters: l,
          results: r,
          receivedAlerts: a,
          relationships: E,
          groupEncounters: C
        };
      }
      let J = null, ke = 0, Wx = false;
      fe.subscribe((t) => {
        t === "reconnected" && Wx && J && Be() && I0().catch(() => {
        });
      });
      function X0() {
        return J;
      }
      function le() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.myContactId;
      }
      function ox() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.results || [];
      }
      function Lx() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (J.receivedAlerts || []).map(({ testDate: t, diseases: e, viewed: x, labVerified: n }) => ({
          testDate: t,
          diseases: e,
          viewed: x,
          labVerified: n
        }));
      }
      function Xo() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.encounters || [];
      }
      function ft() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.relationships || [];
      }
      function Zo() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.groupEncounters || [];
      }
      async function $o(t = null) {
        const { blob: e, blob_version: x } = t ?? await ys();
        if (!e) {
          J = {
            myContactId: je(32),
            encounters: [],
            results: [],
            receivedAlerts: [],
            relationships: [],
            groupEncounters: []
          }, ke = 0, await I0();
          return;
        }
        const n = _x(Be(), T0(e));
        J = Vs(n), ke = x, await la(), ut();
      }
      async function Gs(t, e, x) {
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
          await I0();
        } catch (n) {
          throw oa(t, e, x), n;
        }
      }
      async function Ks(t, e) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (J.encounters || []).map((n) => e0(n.rawToken) === t ? {
          ...n,
          ...e
        } : n);
        J = {
          ...J,
          encounters: x
        }, await I0();
      }
      async function Ys(t, e, x) {
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
        }, await I0();
      }
      async function el(t, e, x, n, o) {
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
        }, await I0();
      }
      async function Mt(t, e) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (J.groupEncounters || []).map((n) => e0(n.token) === t ? {
          ...n,
          ...e
        } : n);
        J = {
          ...J,
          groupEncounters: x
        }, await I0();
      }
      async function Js(t) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (J.groupEncounters || []).filter((x) => e0(x.token) !== t);
        J = {
          ...J,
          groupEncounters: e
        }, await I0();
      }
      async function Xe(t, e) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (J.relationships || []).map((n) => e0(n.rawToken) === t ? {
          ...n,
          ...e
        } : n);
        J = {
          ...J,
          relationships: x
        }, await I0();
      }
      async function Nx(t, e, x = false) {
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
        }, await I0(), n;
      }
      async function It(t) {
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
        }, await I0();
      }
      async function Qs() {
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
        }, await I0();
      }
      async function Ws(t, e, x, n) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let o = null;
        const l = J.encounters.map((a) => e0(a.rawToken) !== t ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        })), r = (J.relationships || []).map((a) => o || e0(a.rawToken) !== t ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        }));
        if (!o) throw new Error("Token not found: " + t);
        const s = [
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
          relationships: r,
          receivedAlerts: s
        }, await I0(), ut();
      }
      async function Xs(t) {
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
        }, await I0(), ut();
      }
      function Zs() {
        if (!J || Et(J).byteLength < Ko) return false;
        const e = dt();
        return J.encounters.filter((x) => x.date < e).length >= 5;
      }
      function $s() {
        if (!J) return 0;
        const t = dt();
        return J.encounters.filter((e) => e.date < t).length;
      }
      async function ea() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = dt();
        J = {
          ...J,
          encounters: J.encounters.filter((e) => e.date >= t)
        }, await I0();
      }
      function dt() {
        const t = /* @__PURE__ */ new Date();
        return t.setUTCFullYear(t.getUTCFullYear() - 1), t.toISOString().slice(0, 10);
      }
      function xa(t) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = Ve(t, Et(J));
        return {
          blobHex: e0(e),
          blobVersion: ke
        };
      }
      function ta(t) {
        ke = t;
      }
      function na(t, e) {
        if (!t.endedAt || !e) return true;
        const n = (/* @__PURE__ */ new Date(t.endedAt + "T00:00:00Z")).getTime() + js * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < n;
      }
      const _e = "peachsafe_pending_encounters";
      async function I0() {
        const t = Et(J);
        Yo.set(t.byteLength >= Ko);
        const e = Ve(Be(), t);
        Wx = false;
        try {
          const { blob_version: x } = await Ps(e0(e), ke);
          ke = x;
          try {
            localStorage.removeItem(_e);
          } catch {
          }
        } catch (x) {
          throw Wx = true, x;
        }
      }
      function oa(t, e, x) {
        try {
          let n = [];
          const o = localStorage.getItem(_e);
          if (o) try {
            n = JSON.parse(new TextDecoder().decode(_x(Be(), T0(o))));
          } catch {
            n = [];
          }
          n.push({
            rawTokenHex: e0(t),
            theirContactIdHex: e0(e),
            date: x
          });
          const l = new TextEncoder().encode(JSON.stringify(n));
          localStorage.setItem(_e, e0(Ve(Be(), l)));
        } catch {
        }
      }
      async function la() {
        let t;
        try {
          const e = localStorage.getItem(_e);
          if (!e) return;
          t = JSON.parse(new TextDecoder().decode(_x(Be(), T0(e))));
        } catch {
          try {
            localStorage.removeItem(_e);
          } catch {
          }
          return;
        }
        if (!t.length) {
          try {
            localStorage.removeItem(_e);
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
        await I0();
      }
      let Pe = null;
      function xl() {
        return Pe || (Pe = ra().finally(() => {
          Pe = null;
        }), Pe);
      }
      async function ra() {
        const t = X0(), e = le();
        if (!t) return 0;
        const n = ox().filter((E) => E.positiveDiseases.length === 0).map((E) => E.date).sort().pop() ?? null, o = /* @__PURE__ */ new Map(), l = [];
        for (const E of t.encounters) {
          const f = ue(E.rawToken, e, E.queryIndex), C = Ee(f);
          o.set(C, {
            rawTokenHex: e0(E.rawToken),
            alertDate: E.date
          }), l.push(C);
        }
        for (const E of t.relationships || []) {
          if (!na(E, n)) continue;
          const f = ue(E.rawToken, e, E.queryIndex), C = Ee(f);
          o.set(C, {
            rawTokenHex: e0(E.rawToken),
            alertDate: E.createdAt
          }), l.push(C);
        }
        if (l.length === 0) return 0;
        const r = Math.max(50, l.length * 2), s = [
          ...l
        ];
        for (; s.length < r; ) s.push(Ee(je(32)));
        for (let E = s.length - 1; E > 0; E--) {
          const f = Math.floor(Math.random() * (E + 1));
          [s[E], s[f]] = [
            s[f],
            s[E]
          ];
        }
        const { matches: a } = await Ms(s);
        if (!a || a.length === 0) return 0;
        let u = 0;
        for (const E of a) {
          const f = o.get(E.token);
          if (!f) continue;
          const A = [
            ...X0().encounters || [],
            ...X0().relationships || []
          ].find((g) => e0(g.rawToken) === f.rawTokenHex);
          if (!A) continue;
          const F = Lo(A.theirContactId);
          let B;
          try {
            B = _x(F, No(E.encrypted_payload));
          } catch {
            continue;
          }
          const p = new TextDecoder().decode(B), m = p.slice(1, 9), h = `${m.slice(0, 4)}-${m.slice(4, 6)}-${m.slice(6, 8)}`, b = p.length > 9 ? p.slice(9).split(",") : [], D = Object.fromEntries(Object.entries(Wo).map(([g, M]) => [
            M,
            g
          ])), v = b.map((g) => D[g]).filter(Boolean), _ = e0(ue(A.rawToken, e, A.queryIndex));
          await Ws(f.rawTokenHex, h, v, E.verified), u++;
          const k = [
            ...X0().encounters || [],
            ...X0().relationships || []
          ].find((g) => e0(g.rawToken) === f.rawTokenHex), w = e0(ue(A.rawToken, e, k?.queryIndex ?? A.queryIndex + 1));
          try {
            await Ho(w, f.alertDate);
          } catch (g) {
            console.warn("alerts: could not register next query token:", g.message);
          }
          try {
            await Is(_);
          } catch (g) {
            console.warn("alerts: could not delete old query token:", g.message);
          }
        }
        return u;
      }
      let Xx = "/home";
      function sa(t) {
        Xx = t;
      }
      function Lt() {
        const t = Xx;
        return Xx = "/home", t;
      }
      function aa(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B = t[3] ? "Verifying\u2026" : "Verify", p, m, h, b, D = t[6] ? "Use authenticator app instead" : "Use a backup code instead", v, _, k;
        function w(S, L) {
          return S[6] ? ua : ca;
        }
        let g = w(t), M = g(t), I = t[4] && Nt(t);
        return {
          c() {
            e = d("div"), x = d("button"), n = d("span"), n.textContent = "arrow_back", o = y(), l = d("span"), l.textContent = "Two-factor auth", r = y(), s = d("form"), M.c(), a = y(), u = d("label"), E = d("input"), f = z(`
          Remember this device`), C = y(), I && I.c(), A = y(), F = d("button"), p = z(B), h = y(), b = d("button"), v = z(D), c(n, "class", "material-icons svelte-1r4ift8"), c(x, "type", "button"), c(x, "class", "back-btn svelte-1r4ift8"), x.disabled = t[3], c(l, "class", "otp-title svelte-1r4ift8"), c(e, "class", "otp-header svelte-1r4ift8"), c(E, "type", "checkbox"), E.disabled = t[3], c(E, "class", "svelte-1r4ift8"), c(u, "class", "remember-label svelte-1r4ift8"), c(F, "type", "submit"), F.disabled = m = t[3] || !t[6] && t[2].length !== 6 || t[6] && t[2].length !== 14, c(F, "class", "svelte-1r4ift8"), c(b, "type", "button"), c(b, "class", "backup-toggle svelte-1r4ift8"), b.disabled = t[3], c(s, "class", "svelte-1r4ift8");
          },
          m(S, L) {
            T(S, e, L), i(e, x), i(x, n), i(e, o), i(e, l), T(S, r, L), T(S, s, L), M.m(s, null), i(s, a), i(s, u), i(u, E), E.checked = t[7], i(u, f), i(s, C), I && I.m(s, null), i(s, A), i(s, F), i(F, p), i(s, h), i(s, b), i(b, v), _ || (k = [
              H(x, "click", t[16]),
              H(E, "change", t[24]),
              H(b, "click", t[17]),
              H(s, "submit", ne(t[13]))
            ], _ = true);
          },
          p(S, L) {
            L & 8 && (x.disabled = S[3]), g === (g = w(S)) && M ? M.p(S, L) : (M.d(1), M = g(S), M && (M.c(), M.m(s, a))), L & 8 && (E.disabled = S[3]), L & 128 && (E.checked = S[7]), S[4] ? I ? I.p(S, L) : (I = Nt(S), I.c(), I.m(s, A)) : I && (I.d(1), I = null), L & 8 && B !== (B = S[3] ? "Verifying\u2026" : "Verify") && V(p, B), L & 76 && m !== (m = S[3] || !S[6] && S[2].length !== 6 || S[6] && S[2].length !== 14) && (F.disabled = m), L & 64 && D !== (D = S[6] ? "Use authenticator app instead" : "Use a backup code instead") && V(v, D), L & 8 && (b.disabled = S[3]);
          },
          d(S) {
            S && (P(e), P(r), P(s)), M.d(), I && I.d(), _ = false, l0(k);
          }
        };
      }
      function ia(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F = t[3] ? "Logging in\u2026" : "Log in", B, p, m, h = t[4] && zt(t);
        return {
          c() {
            e = d("div"), e.innerHTML = '<a href="#/login" class="tab active svelte-1r4ift8">Log in</a> <a href="#/signup" class="tab svelte-1r4ift8">Create account</a>', x = y(), n = d("form"), o = d("label"), l = z(`Username
          `), r = d("input"), s = y(), a = d("label"), u = z(`Password
          `), E = d("input"), f = y(), h && h.c(), C = y(), A = d("button"), B = z(F), c(e, "class", "tabs svelte-1r4ift8"), c(r, "type", "text"), r.required = true, c(r, "autocomplete", "username"), c(r, "class", "svelte-1r4ift8"), c(o, "class", "svelte-1r4ift8"), c(E, "type", "password"), E.required = true, c(E, "autocomplete", "current-password"), c(E, "class", "svelte-1r4ift8"), c(a, "class", "svelte-1r4ift8"), c(A, "type", "submit"), A.disabled = t[3], c(A, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(b, D) {
            T(b, e, D), T(b, x, D), T(b, n, D), i(n, o), i(o, l), i(o, r), x0(r, t[0]), i(n, s), i(n, a), i(a, u), i(a, E), x0(E, t[1]), i(n, f), h && h.m(n, null), i(n, C), i(n, A), i(A, B), p || (m = [
              H(r, "input", t[20]),
              H(E, "input", t[21]),
              H(n, "submit", ne(t[12]))
            ], p = true);
          },
          p(b, D) {
            D & 1 && r.value !== b[0] && x0(r, b[0]), D & 2 && E.value !== b[1] && x0(E, b[1]), b[4] ? h ? h.p(b, D) : (h = zt(b), h.c(), h.m(n, C)) : h && (h.d(1), h = null), D & 8 && F !== (F = b[3] ? "Logging in\u2026" : "Log in") && V(B, F), D & 8 && (A.disabled = b[3]);
          },
          d(b) {
            b && (P(e), P(x), P(n)), h && h.d(), p = false, l0(m);
          }
        };
      }
      function ca(t) {
        let e, x, n, o, l, r, s;
        return {
          c() {
            e = d("p"), e.textContent = "Enter the 6-digit code from your authenticator app.", x = y(), n = d("label"), o = z(`Authenticator code
            `), l = d("input"), c(e, "class", "otp-prompt svelte-1r4ift8"), c(l, "type", "text"), c(l, "inputmode", "numeric"), c(l, "pattern", "[0-9]*"), c(l, "maxlength", "6"), l.required = true, c(l, "autocomplete", "one-time-code"), c(l, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(a, u) {
            T(a, e, u), T(a, x, u), T(a, n, u), i(n, o), i(n, l), x0(l, t[2]), r || (s = H(l, "input", t[23]), r = true);
          },
          p(a, u) {
            u & 4 && l.value !== a[2] && x0(l, a[2]);
          },
          d(a) {
            a && (P(e), P(x), P(n)), r = false, s();
          }
        };
      }
      function ua(t) {
        let e, x, n, o, l, r, s;
        return {
          c() {
            e = d("p"), e.textContent = "Enter one of your backup codes (xxxx-xxxx-xxxx).", x = y(), n = d("label"), o = z(`Backup code
            `), l = d("input"), c(e, "class", "otp-prompt svelte-1r4ift8"), c(l, "type", "text"), c(l, "inputmode", "text"), c(l, "maxlength", "14"), l.required = true, c(l, "autocomplete", "off"), c(l, "placeholder", "xxxx-xxxx-xxxx"), c(l, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(a, u) {
            T(a, e, u), T(a, x, u), T(a, n, u), i(n, o), i(n, l), x0(l, t[2]), r || (s = H(l, "input", t[22]), r = true);
          },
          p(a, u) {
            u & 4 && l.value !== a[2] && x0(l, a[2]);
          },
          d(a) {
            a && (P(e), P(x), P(n)), r = false, s();
          }
        };
      }
      function Nt(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[4]), c(e, "class", "error svelte-1r4ift8");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && V(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function zt(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[4]), c(e, "class", "error svelte-1r4ift8");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && V(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function qt(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Your password never leaves your device in plaintext.", c(e, "class", "privacy-note svelte-1r4ift8");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Rt(t) {
        let e, x, n, o, l, r, s, a, u, E = t[9] === 1 ? "" : "s", f, C, A, F, B, p, m = t[10] ? "Deleting\u2026" : "Delete old encounters", h, b, D, v, _, k, w = t[11] && Ot(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("h2"), n.textContent = "Free up storage space", o = y(), l = d("p"), r = z(`Your account is using 75% or more of its storage limit.
        You have `), s = d("strong"), a = z(t[9]), u = z(" encounter"), f = z(E), C = z(` older
        than one year. Deleting them will free up space.`), A = y(), w && w.c(), F = y(), B = d("div"), p = d("button"), h = z(m), b = y(), D = d("button"), v = z("Keep them"), c(n, "id", "cleanup-title"), c(n, "class", "svelte-1r4ift8"), c(l, "class", "svelte-1r4ift8"), c(p, "class", "btn-primary svelte-1r4ift8"), p.disabled = t[10], c(D, "class", "btn-ghost svelte-1r4ift8"), D.disabled = t[10], c(B, "class", "cleanup-actions svelte-1r4ift8"), c(x, "class", "cleanup-dialog svelte-1r4ift8"), c(e, "class", "cleanup-overlay svelte-1r4ift8"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "cleanup-title");
          },
          m(g, M) {
            T(g, e, M), i(e, x), i(x, n), i(x, o), i(x, l), i(l, r), i(l, s), i(s, a), i(s, u), i(s, f), i(l, C), i(x, A), w && w.m(x, null), i(x, F), i(x, B), i(B, p), i(p, h), i(B, b), i(B, D), i(D, v), _ || (k = [
              H(p, "click", t[14]),
              H(D, "click", t[15])
            ], _ = true);
          },
          p(g, M) {
            M & 512 && V(a, g[9]), M & 512 && E !== (E = g[9] === 1 ? "" : "s") && V(f, E), g[11] ? w ? w.p(g, M) : (w = Ot(g), w.c(), w.m(x, F)) : w && (w.d(1), w = null), M & 1024 && m !== (m = g[10] ? "Deleting\u2026" : "Delete old encounters") && V(h, m), M & 1024 && (p.disabled = g[10]), M & 1024 && (D.disabled = g[10]);
          },
          d(g) {
            g && P(e), w && w.d(), _ = false, l0(k);
          }
        };
      }
      function Ot(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[11]), c(e, "class", "cleanup-error svelte-1r4ift8");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 2048 && V(x, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Ea(t) {
        let e, x, n, o, l, r, s, a, u;
        function E(B, p) {
          return B[5] ? aa : ia;
        }
        let f = E(t), C = f(t), A = !t[5] && qt(), F = t[8] && Rt(t);
        return {
          c() {
            e = d("main"), x = d("div"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1r4ift8"/> <h1 class="svelte-1r4ift8"><span class="brand-peach svelte-1r4ift8">Peach</span><span class="brand-safe svelte-1r4ift8">Safe</span></h1>', n = y(), o = d("div"), C.c(), l = y(), A && A.c(), r = y(), F && F.c(), s = K0(), c(x, "class", "brand svelte-1r4ift8"), c(x, "role", "button"), c(x, "tabindex", "0"), c(o, "class", "card svelte-1r4ift8"), c(e, "class", "svelte-1r4ift8");
          },
          m(B, p) {
            T(B, e, p), i(e, x), i(e, n), i(e, o), C.m(o, null), i(e, l), A && A.m(e, null), T(B, r, p), F && F.m(B, p), T(B, s, p), a || (u = [
              H(x, "click", t[18]),
              H(x, "keypress", t[19])
            ], a = true);
          },
          p(B, [p]) {
            f === (f = E(B)) && C ? C.p(B, p) : (C.d(1), C = f(B), C && (C.c(), C.m(o, null))), B[5] ? A && (A.d(1), A = null) : A || (A = qt(), A.c(), A.m(e, null)), B[8] ? F ? F.p(B, p) : (F = Rt(B), F.c(), F.m(s.parentNode, s)) : F && (F.d(1), F = null);
          },
          i: Z,
          o: Z,
          d(B) {
            B && (P(e), P(r), P(s)), C.d(), A && A.d(), F && F.d(B), a = false, l0(u);
          }
        };
      }
      function fa(t, e, x) {
        M0(() => {
          Uo();
        });
        let n = "", o = "", l = "", r = false, s = null, a = false, u = false, E = false, f = null, C = null, A = false, F = 0, B = "", p = false, m = null;
        async function h() {
          x(4, s = null), x(3, r = true);
          try {
            const { challenge: U, auth_salt: R, enc_salt: j } = await st(n), Q = await te(o, T0(R)), K = Io(new TextEncoder().encode(U), Q), G = btoa(String.fromCharCode(...K)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), O = await Tt(n, G);
            if (O.requires_otp) {
              f = G, C = j, x(5, a = true);
              return;
            }
            await D(j, O);
          } catch (U) {
            x(4, s = U.message);
          } finally {
            x(3, r = false);
          }
        }
        async function b() {
          x(4, s = null), x(3, r = true);
          try {
            const U = await Tt(n, f, l, E);
            await D(C, U);
          } catch (U) {
            x(4, s = U.message);
          } finally {
            x(3, r = false);
          }
        }
        async function D(U, R) {
          qo(n);
          const j = await te(o, T0(U));
          rt(j), await $o(R.bootstrap ?? null), xl().catch(() => {
          }), Zs() ? (x(9, F = $s()), B = Lt(), x(8, A = true)) : i0(Lt());
        }
        async function v() {
          x(11, m = null), x(10, p = true);
          try {
            await ea(), x(8, A = false), i0(B);
          } catch (U) {
            x(11, m = U.message);
          } finally {
            x(10, p = false);
          }
        }
        function _() {
          x(8, A = false), i0(B);
        }
        function k() {
          x(5, a = false), x(2, l = ""), f = null, C = null, x(4, s = null), x(6, u = false), x(7, E = false);
        }
        function w() {
          x(6, u = !u), x(2, l = ""), x(4, s = null);
        }
        const g = () => i0("/"), M = (U) => U.key === "Enter" && i0("/");
        function I() {
          n = this.value, x(0, n);
        }
        function S() {
          o = this.value, x(1, o);
        }
        function L() {
          l = this.value, x(2, l);
        }
        function N() {
          l = this.value, x(2, l);
        }
        function q() {
          E = this.checked, x(7, E);
        }
        return [
          n,
          o,
          l,
          r,
          s,
          a,
          u,
          E,
          A,
          F,
          p,
          m,
          h,
          b,
          v,
          _,
          k,
          w,
          g,
          M,
          I,
          S,
          L,
          N,
          q
        ];
      }
      class da extends k0 {
        constructor(e) {
          super(), _0(this, e, fa, Ea, m0, {});
        }
      }
      function Ht(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[6]), c(e, "class", "error svelte-1c8cd3e");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 64 && V(x, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Ba(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p, m, h, b, D, v, _, k, w, g, M, I, S, L, N = t[5] ? "Creating account\u2026" : "Create account", q, U, R, j, Q, K = t[6] && Ht(t);
        return {
          c() {
            e = d("main"), x = d("div"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1c8cd3e"/> <h1 class="svelte-1c8cd3e"><span class="brand-peach svelte-1c8cd3e">Peach</span><span class="brand-safe svelte-1c8cd3e">Safe</span></h1>', n = y(), o = d("div"), l = d("div"), l.innerHTML = '<a href="#/login" class="tab svelte-1c8cd3e">Log in</a> <a href="#/signup" class="tab active svelte-1c8cd3e">Create account</a>', r = y(), s = d("form"), a = d("label"), u = z(`Beta code
        `), E = d("input"), f = y(), C = d("label"), A = z(`Username
        `), F = d("input"), B = y(), p = d("label"), m = z(`Email
        `), h = d("input"), b = y(), D = d("label"), v = z(`Password
        `), _ = d("input"), k = y(), w = d("label"), g = z(`Confirm password
        `), M = d("input"), I = y(), K && K.c(), S = y(), L = d("button"), q = z(N), U = y(), R = d("p"), R.textContent = "Your password never leaves your device in plaintext.", c(x, "class", "brand svelte-1c8cd3e"), c(x, "role", "button"), c(x, "tabindex", "0"), c(l, "class", "tabs svelte-1c8cd3e"), c(E, "type", "text"), E.required = true, c(E, "autocomplete", "off"), c(E, "class", "svelte-1c8cd3e"), c(a, "class", "svelte-1c8cd3e"), c(F, "type", "text"), F.required = true, c(F, "autocomplete", "username"), c(F, "class", "svelte-1c8cd3e"), c(C, "class", "svelte-1c8cd3e"), c(h, "type", "email"), h.required = true, c(h, "autocomplete", "email"), c(h, "class", "svelte-1c8cd3e"), c(p, "class", "svelte-1c8cd3e"), c(_, "type", "password"), _.required = true, c(_, "autocomplete", "new-password"), c(_, "minlength", "12"), c(_, "class", "svelte-1c8cd3e"), c(D, "class", "svelte-1c8cd3e"), c(M, "type", "password"), M.required = true, c(M, "autocomplete", "new-password"), c(M, "class", "svelte-1c8cd3e"), c(w, "class", "svelte-1c8cd3e"), c(L, "type", "submit"), L.disabled = t[5], c(L, "class", "svelte-1c8cd3e"), c(s, "class", "svelte-1c8cd3e"), c(o, "class", "card svelte-1c8cd3e"), c(R, "class", "privacy-note svelte-1c8cd3e"), c(e, "class", "svelte-1c8cd3e");
          },
          m(G, O) {
            T(G, e, O), i(e, x), i(e, n), i(e, o), i(o, l), i(o, r), i(o, s), i(s, a), i(a, u), i(a, E), x0(E, t[4]), i(s, f), i(s, C), i(C, A), i(C, F), x0(F, t[0]), i(s, B), i(s, p), i(p, m), i(p, h), x0(h, t[1]), i(s, b), i(s, D), i(D, v), i(D, _), x0(_, t[2]), i(s, k), i(s, w), i(w, g), i(w, M), x0(M, t[3]), i(s, I), K && K.m(s, null), i(s, S), i(s, L), i(L, q), i(e, U), i(e, R), j || (Q = [
              H(x, "click", t[8]),
              H(x, "keypress", t[9]),
              H(E, "input", t[10]),
              H(F, "input", t[11]),
              H(h, "input", t[12]),
              H(_, "input", t[13]),
              H(M, "input", t[14]),
              H(s, "submit", ne(t[7]))
            ], j = true);
          },
          p(G, [O]) {
            O & 16 && E.value !== G[4] && x0(E, G[4]), O & 1 && F.value !== G[0] && x0(F, G[0]), O & 2 && h.value !== G[1] && x0(h, G[1]), O & 4 && _.value !== G[2] && x0(_, G[2]), O & 8 && M.value !== G[3] && x0(M, G[3]), G[6] ? K ? K.p(G, O) : (K = Ht(G), K.c(), K.m(s, S)) : K && (K.d(1), K = null), O & 32 && N !== (N = G[5] ? "Creating account\u2026" : "Create account") && V(q, N), O & 32 && (L.disabled = G[5]);
          },
          i: Z,
          o: Z,
          d(G) {
            G && P(e), K && K.d(), j = false, l0(Q);
          }
        };
      }
      const Ca = "psbeta";
      function Aa(t, e, x) {
        M0(() => {
          Uo();
        });
        let n = "", o = "", l = "", r = "", s = "", a = false, u = null;
        async function E() {
          if (x(6, u = null), s !== Ca) {
            x(6, u = "Sorry, we're in closed beta at the moment");
            return;
          }
          if (l !== r) {
            x(6, u = "Passwords do not match");
            return;
          }
          if (l.length < 12) {
            x(6, u = "Password must be at least 12 characters");
            return;
          }
          x(5, a = true);
          try {
            const { auth_salt: h, enc_salt: b } = await st(n), D = await te(l, T0(h)), v = e0(Mo(D));
            await hs(n, o, v), qo(n);
            const _ = await te(l, T0(b));
            rt(_), await $o(), i0("/home");
          } catch (h) {
            x(6, u = h.message);
          } finally {
            x(5, a = false);
          }
        }
        const f = () => i0("/"), C = (h) => h.key === "Enter" && i0("/");
        function A() {
          s = this.value, x(4, s);
        }
        function F() {
          n = this.value, x(0, n);
        }
        function B() {
          o = this.value, x(1, o);
        }
        function p() {
          l = this.value, x(2, l);
        }
        function m() {
          r = this.value, x(3, r);
        }
        return [
          n,
          o,
          l,
          r,
          s,
          a,
          u,
          E,
          f,
          C,
          A,
          F,
          B,
          p,
          m
        ];
      }
      class Fa extends k0 {
        constructor(e) {
          super(), _0(this, e, Aa, Ba, m0, {});
        }
      }
      function Ut(t) {
        let e;
        return {
          c() {
            e = d("span"), c(e, "class", "unread-dot svelte-1dr2o73");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Da(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C = t[1] ? "notifications_active" : "notifications", A, F, B, p, m, h, b, D, v, _, k = t[1] && Ut();
        return {
          c() {
            e = d("nav"), x = d("a"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-1dr2o73"/> <span class="brand-label svelte-1dr2o73"><span class="brand-peach svelte-1dr2o73">Peach</span><span class="brand-safe svelte-1dr2o73">Safe</span></span>', n = y(), o = d("div"), l = d("a"), l.innerHTML = '<span class="material-icons svelte-1dr2o73">people</span> <span class="tab-label svelte-1dr2o73">Encounters</span>', r = y(), s = d("a"), s.innerHTML = '<span class="material-icons svelte-1dr2o73">science</span> <span class="tab-label svelte-1dr2o73">Test Results</span>', a = y(), u = d("a"), E = d("span"), f = d("span"), A = z(C), F = y(), k && k.c(), B = y(), p = d("span"), p.textContent = "Alerts", m = y(), h = d("a"), h.innerHTML = '<span class="material-icons svelte-1dr2o73">settings</span> <span class="tab-label svelte-1dr2o73">Settings</span>', b = y(), D = d("button"), D.textContent = "Sign out", c(x, "href", "#/home"), c(x, "class", "brand svelte-1dr2o73"), c(l, "href", "#/encounters"), c(l, "class", "tab svelte-1dr2o73"), n0(l, "active", t[0] === "/encounters"), c(s, "href", "#/results"), c(s, "class", "tab svelte-1dr2o73"), n0(s, "active", t[0] === "/results"), c(f, "class", "material-icons svelte-1dr2o73"), c(E, "class", "icon-wrap svelte-1dr2o73"), c(p, "class", "tab-label svelte-1dr2o73"), c(u, "href", "#/alerts"), c(u, "class", "tab svelte-1dr2o73"), n0(u, "active", t[0] === "/alerts"), n0(u, "has-unread", t[1]), c(o, "class", "tabs svelte-1dr2o73"), c(h, "href", "#/settings"), c(h, "class", "tab settings-tab svelte-1dr2o73"), c(h, "title", "Settings"), n0(h, "active", t[0] === "/settings" || t[0] === "/change-password" || t[0] === "/settings/2fa-setup"), c(D, "class", "signout-btn svelte-1dr2o73"), c(e, "class", "svelte-1dr2o73");
          },
          m(w, g) {
            T(w, e, g), i(e, x), i(e, n), i(e, o), i(o, l), i(o, r), i(o, s), i(o, a), i(o, u), i(u, E), i(E, f), i(f, A), i(E, F), k && k.m(E, null), i(u, B), i(u, p), i(e, m), i(e, h), i(e, b), i(e, D), v || (_ = H(D, "click", t[2]), v = true);
          },
          p(w, [g]) {
            g & 1 && n0(l, "active", w[0] === "/encounters"), g & 1 && n0(s, "active", w[0] === "/results"), g & 2 && C !== (C = w[1] ? "notifications_active" : "notifications") && V(A, C), w[1] ? k || (k = Ut(), k.c(), k.m(E, null)) : k && (k.d(1), k = null), g & 1 && n0(u, "active", w[0] === "/alerts"), g & 2 && n0(u, "has-unread", w[1]), g & 1 && n0(h, "active", w[0] === "/settings" || w[0] === "/change-password" || w[0] === "/settings/2fa-setup");
          },
          i: Z,
          o: Z,
          d(w) {
            w && P(e), k && k.d(), v = false, _();
          }
        };
      }
      function pa(t, e, x) {
        let n, o;
        V0(t, Nl, (r) => x(0, n = r)), V0(t, Go, (r) => x(1, o = r));
        async function l() {
          await Oo(), i0("/login");
        }
        return [
          n,
          o,
          l
        ];
      }
      class ee extends k0 {
        constructor(e) {
          super(), _0(this, e, pa, Da, m0, {});
        }
      }
      function ma(t) {
        let e, x, n, o;
        return e = new ee({}), {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), n.innerHTML = `<div class="hero svelte-16ahr9l"><div class="logo-wrap svelte-16ahr9l"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="logo-img svelte-16ahr9l"/></div> <h1 class="app-name svelte-16ahr9l"><span class="brand-peach svelte-16ahr9l">Peach</span><span class="brand-safe svelte-16ahr9l">Safe</span></h1></div> <div class="actions svelte-16ahr9l"><a href="#/encounter-exchange" class="btn-filled svelte-16ahr9l"><span class="material-icons svelte-16ahr9l">qr_code</span>
      Log New Encounter</a></div>`, c(n, "class", "svelte-16ahr9l");
          },
          m(l, r) {
            y0(e, l, r), T(l, x, r), T(l, n, r), o = true;
          },
          p: Z,
          i(l) {
            o || (F0(e.$$.fragment, l), o = true);
          },
          o(l) {
            v0(e.$$.fragment, l), o = false;
          },
          d(l) {
            l && (P(x), P(n)), P0(e, l);
          }
        };
      }
      function ha(t) {
        return M0(() => {
          if (!O0()) {
            i0("/login");
            return;
          }
        }), [];
      }
      class va extends k0 {
        constructor(e) {
          super(), _0(this, e, ha, ma, m0, {});
        }
      }
      function jt(t, e, x) {
        const n = t.slice();
        return n[20] = e[x], n;
      }
      function Vt(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function Gt(t, e, x) {
        const n = t.slice();
        return n[26] = e[x], n;
      }
      function Kt(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function Yt(t) {
        let e, x, n, o, l, r, s, a, u, E, f = t[6] ? "Creating\u2026" : "Group encounter", C, A, F, B, p, m, h, b, D, v = t[7] && Jt(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("p"), n.textContent = "New encounter", o = y(), l = d("button"), l.innerHTML = '<span class="material-icons type-icon svelte-81oe9z">person</span> <span class="type-label svelte-81oe9z">1:1 encounter</span> <span class="material-icons type-chevron svelte-81oe9z">chevron_right</span>', r = y(), s = d("button"), a = d("span"), a.textContent = "groups", u = y(), E = d("span"), C = z(f), A = y(), F = d("span"), F.textContent = "chevron_right", B = y(), v && v.c(), p = y(), m = d("button"), h = z("Cancel"), c(n, "class", "modal-title svelte-81oe9z"), c(l, "class", "type-card svelte-81oe9z"), c(a, "class", "material-icons type-icon svelte-81oe9z"), c(E, "class", "type-label svelte-81oe9z"), c(F, "class", "material-icons type-chevron svelte-81oe9z"), c(s, "class", "type-card svelte-81oe9z"), s.disabled = t[6], c(m, "class", "btn-text cancel-btn svelte-81oe9z"), m.disabled = t[6], c(x, "class", "modal-sheet svelte-81oe9z"), c(e, "class", "modal-backdrop svelte-81oe9z");
          },
          m(_, k) {
            T(_, e, k), i(e, x), i(x, n), i(x, o), i(x, l), i(x, r), i(x, s), i(s, a), i(s, u), i(s, E), i(E, C), i(s, A), i(s, F), i(x, B), v && v.m(x, null), i(x, p), i(x, m), i(m, h), b || (D = [
              H(l, "click", t[14]),
              H(s, "click", t[10]),
              H(m, "click", t[15]),
              H(x, "click", pl(t[12])),
              H(e, "click", t[16])
            ], b = true);
          },
          p(_, k) {
            k & 64 && f !== (f = _[6] ? "Creating\u2026" : "Group encounter") && V(C, f), k & 64 && (s.disabled = _[6]), _[7] ? v ? v.p(_, k) : (v = Jt(_), v.c(), v.m(x, p)) : v && (v.d(1), v = null), k & 64 && (m.disabled = _[6]);
          },
          d(_) {
            _ && P(e), v && v.d(), b = false, l0(D);
          }
        };
      }
      function Jt(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[7]), c(e, "class", "modal-error svelte-81oe9z");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 128 && V(x, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function _a(t) {
        let e, x, n, o, l = t[9].length > 0 && Qt(t), r = t[1].length > 0 && Xt(t), s = t[8].length > 0 && $t(t);
        function a(f, C) {
          return f[0].length === 0 && f[9].length === 0 && f[8].length === 0 && f[1].length === 0 ? ya : f[0].length === 0 ? wa : ga;
        }
        let u = a(t), E = u(t);
        return {
          c() {
            l && l.c(), e = y(), r && r.c(), x = y(), s && s.c(), n = y(), o = d("section"), E.c(), c(o, "class", "card list-card svelte-81oe9z");
          },
          m(f, C) {
            l && l.m(f, C), T(f, e, C), r && r.m(f, C), T(f, x, C), s && s.m(f, C), T(f, n, C), T(f, o, C), E.m(o, null);
          },
          p(f, C) {
            f[9].length > 0 ? l ? l.p(f, C) : (l = Qt(f), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), f[1].length > 0 ? r ? r.p(f, C) : (r = Xt(f), r.c(), r.m(x.parentNode, x)) : r && (r.d(1), r = null), f[8].length > 0 ? s ? s.p(f, C) : (s = $t(f), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), u === (u = a(f)) && E ? E.p(f, C) : (E.d(1), E = u(f), E && (E.c(), E.m(o, null)));
          },
          d(f) {
            f && (P(e), P(x), P(n), P(o)), l && l.d(f), r && r.d(f), s && s.d(f), E.d();
          }
        };
      }
      function ka(t) {
        let e, x, n;
        return {
          c() {
            e = d("section"), x = d("p"), n = z(t[3]), c(x, "class", "error svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(o, l) {
            T(o, e, l), i(e, x), i(x, n);
          },
          p(o, l) {
            l & 8 && V(n, o[3]);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function ba(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-81oe9z">Loading\u2026</p>', c(e, "class", "card list-card svelte-81oe9z");
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
      function Qt(t) {
        let e, x, n, o, l = D0(t[9]), r = [];
        for (let s = 0; s < l.length; s += 1) r[s] = Wt(Kt(t, l, s));
        return {
          c() {
            e = d("section"), x = d("div"), x.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">favorite</span> <h2 class="svelte-81oe9z">Ongoing partners</h2>', n = y(), o = d("ul");
            for (let s = 0; s < r.length; s += 1) r[s].c();
            c(x, "class", "section-header svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(e, n), i(e, o);
            for (let u = 0; u < r.length; u += 1) r[u] && r[u].m(o, null);
          },
          p(s, a) {
            if (a & 512) {
              l = D0(s[9]);
              let u;
              for (u = 0; u < l.length; u += 1) {
                const E = Kt(s, l, u);
                r[u] ? r[u].p(E, a) : (r[u] = Wt(E), r[u].c(), r[u].m(o, null));
              }
              for (; u < r.length; u += 1) r[u].d(1);
              r.length = l.length;
            }
          },
          d(s) {
            s && P(e), $0(r, s);
          }
        };
      }
      function Wt(t) {
        let e, x, n, o, l, r, s = fx(t[23]) + "", a, u, E, f = dx(t[23]) + "", C, A, F, B, p;
        return {
          c() {
            e = d("li"), x = d("a"), n = d("span"), n.textContent = "favorite", o = y(), l = d("span"), r = d("span"), a = z(s), u = y(), E = d("span"), C = z(f), A = y(), F = d("span"), F.textContent = "chevron_right", p = y(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(r, "class", "rel-name svelte-81oe9z"), c(E, "class", "rel-sub svelte-81oe9z"), c(l, "class", "rel-main svelte-81oe9z"), c(F, "class", "material-icons chevron svelte-81oe9z"), c(x, "class", "rel-row svelte-81oe9z"), c(x, "href", B = "#/relationships/" + e0(t[23].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(m, h) {
            T(m, e, h), i(e, x), i(x, n), i(x, o), i(x, l), i(l, r), i(r, a), i(l, u), i(l, E), i(E, C), i(x, A), i(x, F), i(e, p);
          },
          p(m, h) {
            h & 512 && s !== (s = fx(m[23]) + "") && V(a, s), h & 512 && f !== (f = dx(m[23]) + "") && V(C, f), h & 512 && B !== (B = "#/relationships/" + e0(m[23].rawToken)) && c(x, "href", B);
          },
          d(m) {
            m && P(e);
          }
        };
      }
      function Xt(t) {
        let e, x, n, o, l = D0(t[1]), r = [];
        for (let s = 0; s < l.length; s += 1) r[s] = Zt(Gt(t, l, s));
        return {
          c() {
            e = d("section"), x = d("div"), x.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">groups</span> <h2 class="svelte-81oe9z">Group encounters</h2>', n = y(), o = d("ul");
            for (let s = 0; s < r.length; s += 1) r[s].c();
            c(x, "class", "section-header svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(e, n), i(e, o);
            for (let u = 0; u < r.length; u += 1) r[u] && r[u].m(o, null);
          },
          p(s, a) {
            if (a & 2) {
              l = D0(s[1]);
              let u;
              for (u = 0; u < l.length; u += 1) {
                const E = Gt(s, l, u);
                r[u] ? r[u].p(E, a) : (r[u] = Zt(E), r[u].c(), r[u].m(o, null));
              }
              for (; u < r.length; u += 1) r[u].d(1);
              r.length = l.length;
            }
          },
          d(s) {
            s && P(e), $0(r, s);
          }
        };
      }
      function Zt(t) {
        let e, x, n, o, l, r, s = nn(t[26]) + "", a, u, E, f = on(t[26]) + "", C, A, F, B, p;
        return {
          c() {
            e = d("li"), x = d("a"), n = d("span"), n.textContent = "groups", o = y(), l = d("span"), r = d("span"), a = z(s), u = y(), E = d("span"), C = z(f), A = y(), F = d("span"), F.textContent = "chevron_right", p = y(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(r, "class", "rel-name svelte-81oe9z"), c(E, "class", "rel-sub svelte-81oe9z"), c(l, "class", "rel-main svelte-81oe9z"), c(F, "class", "material-icons chevron svelte-81oe9z"), c(x, "class", "rel-row svelte-81oe9z"), c(x, "href", B = "#/groups/" + e0(t[26].token)), c(e, "class", "svelte-81oe9z");
          },
          m(m, h) {
            T(m, e, h), i(e, x), i(x, n), i(x, o), i(x, l), i(l, r), i(r, a), i(l, u), i(l, E), i(E, C), i(x, A), i(x, F), i(e, p);
          },
          p(m, h) {
            h & 2 && s !== (s = nn(m[26]) + "") && V(a, s), h & 2 && f !== (f = on(m[26]) + "") && V(C, f), h & 2 && B !== (B = "#/groups/" + e0(m[26].token)) && c(x, "href", B);
          },
          d(m) {
            m && P(e);
          }
        };
      }
      function $t(t) {
        let e, x, n, o = t[4] ? "expand_less" : "expand_more", l, r, s, a, u = t[8].length + "", E, f, C, A, F, B = t[4] && en(t);
        return {
          c() {
            e = d("section"), x = d("button"), n = d("span"), l = z(o), r = y(), s = d("span"), a = z("Archived partners ("), E = z(u), f = z(")"), C = y(), B && B.c(), c(n, "class", "material-icons toggle-icon svelte-81oe9z"), c(s, "class", "muted-label svelte-81oe9z"), c(x, "class", "collapse-toggle svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(p, m) {
            T(p, e, m), i(e, x), i(x, n), i(n, l), i(x, r), i(x, s), i(s, a), i(s, E), i(s, f), i(e, C), B && B.m(e, null), A || (F = H(x, "click", t[17]), A = true);
          },
          p(p, m) {
            m & 16 && o !== (o = p[4] ? "expand_less" : "expand_more") && V(l, o), m & 256 && u !== (u = p[8].length + "") && V(E, u), p[4] ? B ? B.p(p, m) : (B = en(p), B.c(), B.m(e, null)) : B && (B.d(1), B = null);
          },
          d(p) {
            p && P(e), B && B.d(), A = false, F();
          }
        };
      }
      function en(t) {
        let e, x = D0(t[8]), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = xn(Vt(t, x, o));
        return {
          c() {
            e = d("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-81oe9z");
          },
          m(o, l) {
            T(o, e, l);
            for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(e, null);
          },
          p(o, l) {
            if (l & 256) {
              x = D0(o[8]);
              let r;
              for (r = 0; r < x.length; r += 1) {
                const s = Vt(o, x, r);
                n[r] ? n[r].p(s, l) : (n[r] = xn(s), n[r].c(), n[r].m(e, null));
              }
              for (; r < n.length; r += 1) n[r].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), $0(n, o);
          }
        };
      }
      function xn(t) {
        let e, x, n, o, l, r, s = fx(t[23]) + "", a, u, E, f = dx(t[23]) + "", C, A, F, B, p;
        return {
          c() {
            e = d("li"), x = d("a"), n = d("span"), n.textContent = "favorite_border", o = y(), l = d("span"), r = d("span"), a = z(s), u = y(), E = d("span"), C = z(f), A = y(), F = d("span"), F.textContent = "chevron_right", p = y(), c(n, "class", "material-icons rel-icon ended svelte-81oe9z"), c(r, "class", "rel-name svelte-81oe9z"), c(E, "class", "rel-sub svelte-81oe9z"), c(l, "class", "rel-main svelte-81oe9z"), c(F, "class", "material-icons chevron svelte-81oe9z"), c(x, "class", "rel-row svelte-81oe9z"), c(x, "href", B = "#/relationships/" + e0(t[23].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(m, h) {
            T(m, e, h), i(e, x), i(x, n), i(x, o), i(x, l), i(l, r), i(r, a), i(l, u), i(l, E), i(E, C), i(x, A), i(x, F), i(e, p);
          },
          p(m, h) {
            h & 256 && s !== (s = fx(m[23]) + "") && V(a, s), h & 256 && f !== (f = dx(m[23]) + "") && V(C, f), h & 256 && B !== (B = "#/relationships/" + e0(m[23].rawToken)) && c(x, "href", B);
          },
          d(m) {
            m && P(e);
          }
        };
      }
      function ga(t) {
        let e, x, n, o = D0(t[0]), l = [];
        for (let r = 0; r < o.length; r += 1) l[r] = tn(jt(t, o, r));
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">check_circle_outline</span> <h2 class="svelte-81oe9z">One-time encounters</h2>', x = y(), n = d("ul");
            for (let r = 0; r < l.length; r += 1) l[r].c();
            c(e, "class", "section-header svelte-81oe9z"), c(n, "class", "svelte-81oe9z");
          },
          m(r, s) {
            T(r, e, s), T(r, x, s), T(r, n, s);
            for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(n, null);
          },
          p(r, s) {
            if (s & 1) {
              o = D0(r[0]);
              let a;
              for (a = 0; a < o.length; a += 1) {
                const u = jt(r, o, a);
                l[a] ? l[a].p(u, s) : (l[a] = tn(u), l[a].c(), l[a].m(n, null));
              }
              for (; a < l.length; a += 1) l[a].d(1);
              l.length = o.length;
            }
          },
          d(r) {
            r && (P(e), P(x), P(n)), $0(l, r);
          }
        };
      }
      function wa(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "No one-time encounters.", c(e, "class", "muted list-muted svelte-81oe9z");
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
      function ya(t) {
        let e, x, n, o, l, r, s, a;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "people_outline", n = y(), o = d("p"), o.textContent = "No encounters recorded yet.", l = y(), r = d("button"), r.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, c(x, "class", "material-icons empty-icon svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(r, "class", "btn-filled svelte-81oe9z"), c(e, "class", "empty-state svelte-81oe9z");
          },
          m(u, E) {
            T(u, e, E), i(e, x), i(e, n), i(e, o), i(e, l), i(e, r), s || (a = H(r, "click", t[18]), s = true);
          },
          p: Z,
          d(u) {
            u && P(e), s = false, a();
          }
        };
      }
      function Pa(t) {
        let e, x = e0(t[20].rawToken).slice(0, 12) + "", n, o;
        return {
          c() {
            e = d("span"), n = z(x), o = z("\u2026"), c(e, "class", "rel-sub enc-token svelte-81oe9z");
          },
          m(l, r) {
            T(l, e, r), i(e, n), i(e, o);
          },
          p(l, r) {
            r & 1 && x !== (x = e0(l[20].rawToken).slice(0, 12) + "") && V(n, x);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Ta(t) {
        let e, x = t[20].note + "", n;
        return {
          c() {
            e = d("span"), n = z(x), c(e, "class", "rel-sub enc-note svelte-81oe9z");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l & 1 && x !== (x = o[20].note + "") && V(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function tn(t) {
        let e, x, n, o, l, r, s = t[20].date + "", a, u, E, f, C, A;
        function F(m, h) {
          return m[20].note ? Ta : Pa;
        }
        let B = F(t), p = B(t);
        return {
          c() {
            e = d("li"), x = d("a"), n = d("span"), n.textContent = "check_circle_outline", o = y(), l = d("span"), r = d("span"), a = z(s), u = y(), p.c(), E = y(), f = d("span"), f.textContent = "chevron_right", A = y(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(r, "class", "rel-name svelte-81oe9z"), c(l, "class", "rel-main svelte-81oe9z"), c(f, "class", "material-icons chevron svelte-81oe9z"), c(x, "class", "rel-row svelte-81oe9z"), c(x, "href", C = "#/encounters/" + e0(t[20].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(m, h) {
            T(m, e, h), i(e, x), i(x, n), i(x, o), i(x, l), i(l, r), i(r, a), i(l, u), p.m(l, null), i(x, E), i(x, f), i(e, A);
          },
          p(m, h) {
            h & 1 && s !== (s = m[20].date + "") && V(a, s), B === (B = F(m)) && p ? p.p(m, h) : (p.d(1), p = B(m), p && (p.c(), p.m(l, null))), h & 1 && C !== (C = "#/encounters/" + e0(m[20].rawToken)) && c(x, "href", C);
          },
          d(m) {
            m && P(e), p.d();
          }
        };
      }
      function Sa(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C;
        e = new ee({});
        let A = t[5] && Yt(t);
        function F(m, h) {
          return m[2] ? ba : m[3] ? ka : _a;
        }
        let B = F(t), p = B(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), o = d("div"), l = d("h1"), l.textContent = "Encounters", r = y(), s = d("button"), s.innerHTML = '<span class="material-icons">add</span>', a = y(), A && A.c(), u = y(), p.c(), c(l, "class", "svelte-81oe9z"), c(s, "class", "fab svelte-81oe9z"), c(s, "title", "Add encounter"), c(o, "class", "page-header svelte-81oe9z"), c(n, "class", "svelte-81oe9z");
          },
          m(m, h) {
            y0(e, m, h), T(m, x, h), T(m, n, h), i(n, o), i(o, l), i(o, r), i(o, s), i(n, a), A && A.m(n, null), i(n, u), p.m(n, null), E = true, f || (C = H(s, "click", t[13]), f = true);
          },
          p(m, [h]) {
            m[5] ? A ? A.p(m, h) : (A = Yt(m), A.c(), A.m(n, u)) : A && (A.d(1), A = null), B === (B = F(m)) && p ? p.p(m, h) : (p.d(1), p = B(m), p && (p.c(), p.m(n, null)));
          },
          i(m) {
            E || (F0(e.$$.fragment, m), E = true);
          },
          o(m) {
            v0(e.$$.fragment, m), E = false;
          },
          d(m) {
            m && (P(x), P(n)), P0(e, m), A && A.d(), p.d(), f = false, C();
          }
        };
      }
      function fx(t) {
        return t.name ? t.name : t.endedAt ? "Ended partner" : "Active partner";
      }
      function dx(t) {
        return t.endedAt ? "Ended " + t.endedAt : "Since " + t.createdAt;
      }
      function nn(t) {
        return t.name || "Group encounter";
      }
      function on(t) {
        return (t.isHost ? "Host \xB7 " : "") + t.date;
      }
      function Ma(t, e, x) {
        let n, o, l = [], r = [], s = [], a = true, u = null, E = false, f = false, C = false, A = null;
        M0(() => {
          if (!O0()) {
            i0("/login");
            return;
          }
          F();
        });
        function F() {
          x(2, a = true), x(3, u = null);
          try {
            x(0, l = Xo()), x(11, r = ft()), x(1, s = Zo());
          } catch (k) {
            x(3, u = k.message);
          } finally {
            x(2, a = false);
          }
        }
        async function B() {
          x(6, C = true), x(7, A = null);
          try {
            const k = je(32), w = le(), g = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
            await el(k, g, true, w, null), x(5, f = false), i0("/groups/" + e0(k));
          } catch (k) {
            x(7, A = k.message);
          } finally {
            x(6, C = false);
          }
        }
        function p(k) {
          jx.call(this, t, k);
        }
        const m = () => x(5, f = true), h = () => {
          x(5, f = false), i0("/encounter-exchange");
        }, b = () => x(5, f = false), D = () => {
          C || x(5, f = false);
        }, v = () => x(4, E = !E), _ = () => x(5, f = true);
        return t.$$.update = () => {
          t.$$.dirty & 2048 && x(9, n = r.filter((k) => !k.archived)), t.$$.dirty & 2048 && x(8, o = r.filter((k) => k.archived));
        }, [
          l,
          s,
          a,
          u,
          E,
          f,
          C,
          A,
          o,
          n,
          B,
          r,
          p,
          m,
          h,
          b,
          D,
          v,
          _
        ];
      }
      class Ia extends k0 {
        constructor(e) {
          super(), _0(this, e, Ma, Sa, m0, {});
        }
      }
      function La(t) {
        let e, x, n, o, l = t[7] ? "favorite" : "favorite_border", r, s, a, u, E = t[7] ? "Active partner" : "Ended", f, C, A, F, B, p, m = Bx(t[0].createdAt) + "", h, b, D, v, _, k, w, g, M, I, S = t[3] && ln(t), L = t[0].archived && rn(), N = t[0].endedAt && sn(t);
        function q(Y, r0) {
          return Y[4] ? qa : za;
        }
        let U = q(t), R = U(t);
        function j(Y, r0) {
          return Y[7] ? Oa : Ra;
        }
        let Q = j(t), K = Q(t);
        function G(Y, r0) {
          return Y[0].archived ? Ga : Y[6] === "archive" ? Va : ja;
        }
        let O = G(t), W = O(t);
        return {
          c() {
            S && S.c(), e = y(), x = d("section"), n = d("div"), o = d("span"), r = z(l), s = y(), a = d("div"), u = d("span"), f = z(E), C = y(), L && L.c(), A = y(), F = d("div"), B = d("span"), p = z("Since "), h = z(m), b = y(), N && N.c(), D = y(), v = d("section"), R.c(), _ = y(), k = d("div"), w = y(), K.c(), g = y(), M = d("div"), I = y(), W.c(), c(o, "class", "material-icons status-icon svelte-1lfam"), n0(o, "active", t[7]), n0(o, "ended", !t[7]), c(u, "class", "status-label svelte-1lfam"), n0(u, "active", t[7]), c(a, "class", "status-text svelte-1lfam"), c(n, "class", "status-row svelte-1lfam"), c(F, "class", "dates svelte-1lfam"), c(x, "class", "card pad svelte-1lfam"), c(k, "class", "divider svelte-1lfam"), c(M, "class", "divider svelte-1lfam"), c(v, "class", "card svelte-1lfam");
          },
          m(Y, r0) {
            S && S.m(Y, r0), T(Y, e, r0), T(Y, x, r0), i(x, n), i(n, o), i(o, r), i(n, s), i(n, a), i(a, u), i(u, f), i(a, C), L && L.m(a, null), i(x, A), i(x, F), i(F, B), i(B, p), i(B, h), i(F, b), N && N.m(F, null), T(Y, D, r0), T(Y, v, r0), R.m(v, null), i(v, _), i(v, k), i(v, w), K.m(v, null), i(v, g), i(v, M), i(v, I), W.m(v, null);
          },
          p(Y, r0) {
            Y[3] ? S ? S.p(Y, r0) : (S = ln(Y), S.c(), S.m(e.parentNode, e)) : S && (S.d(1), S = null), r0 & 128 && l !== (l = Y[7] ? "favorite" : "favorite_border") && V(r, l), r0 & 128 && n0(o, "active", Y[7]), r0 & 128 && n0(o, "ended", !Y[7]), r0 & 128 && E !== (E = Y[7] ? "Active partner" : "Ended") && V(f, E), r0 & 128 && n0(u, "active", Y[7]), Y[0].archived ? L || (L = rn(), L.c(), L.m(a, null)) : L && (L.d(1), L = null), r0 & 1 && m !== (m = Bx(Y[0].createdAt) + "") && V(h, m), Y[0].endedAt ? N ? N.p(Y, r0) : (N = sn(Y), N.c(), N.m(F, null)) : N && (N.d(1), N = null), U === (U = q(Y)) && R ? R.p(Y, r0) : (R.d(1), R = U(Y), R && (R.c(), R.m(v, _))), Q === (Q = j(Y)) && K ? K.p(Y, r0) : (K.d(1), K = Q(Y), K && (K.c(), K.m(v, g))), O === (O = G(Y)) && W ? W.p(Y, r0) : (W.d(1), W = O(Y), W && (W.c(), W.m(v, null)));
          },
          d(Y) {
            Y && (P(e), P(x), P(D), P(v)), S && S.d(Y), L && L.d(), N && N.d(), R.d(), K.d(), W.d();
          }
        };
      }
      function Na(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-1lfam">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-1lfam">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-1lfam");
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
      function ln(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = y(), o = z(t[3]), c(x, "class", "material-icons svelte-1lfam"), c(e, "class", "toast error-toast svelte-1lfam");
          },
          m(l, r) {
            T(l, e, r), i(e, x), i(e, n), i(e, o);
          },
          p(l, r) {
            r & 8 && V(o, l[3]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function rn(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "archived", c(e, "class", "badge archived svelte-1lfam");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function sn(t) {
        let e, x, n = Bx(t[0].endedAt) + "", o;
        return {
          c() {
            e = d("span"), x = z("Ended "), o = z(n);
          },
          m(l, r) {
            T(l, e, r), i(e, x), i(e, o);
          },
          p(l, r) {
            r & 1 && n !== (n = Bx(l[0].endedAt) + "") && V(o, n);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function za(t) {
        let e, x, n, o, l = (t[0].name ? t[0].name : "Add nickname") + "", r, s, a, u, E, f, C = t[0].name && an();
        return {
          c() {
            e = d("button"), x = d("span"), x.textContent = "edit", n = y(), o = d("span"), r = z(l), s = y(), C && C.c(), a = y(), u = d("span"), u.textContent = "chevron_right", c(x, "class", "material-icons action-icon svelte-1lfam"), c(o, "class", "action-label svelte-1lfam"), c(u, "class", "material-icons action-chevron svelte-1lfam"), c(e, "class", "action-row svelte-1lfam");
          },
          m(A, F) {
            T(A, e, F), i(e, x), i(e, n), i(e, o), i(o, r), i(o, s), C && C.m(o, null), i(e, a), i(e, u), E || (f = H(e, "click", t[13]), E = true);
          },
          p(A, F) {
            F & 1 && l !== (l = (A[0].name ? A[0].name : "Add nickname") + "") && V(r, l), A[0].name ? C || (C = an(), C.c(), C.m(o, null)) : C && (C.d(1), C = null);
          },
          d(A) {
            A && P(e), C && C.d(), E = false, f();
          }
        };
      }
      function qa(t) {
        let e, x, n, o, l, r, s, a, u, E, f = t[2] ? "Saving\u2026" : "Save", C, A, F;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "edit", n = y(), o = d("form"), l = d("input"), r = y(), s = d("div"), a = d("button"), a.textContent = "Cancel", u = y(), E = d("button"), C = z(f), c(x, "class", "material-icons action-icon svelte-1lfam"), c(l, "type", "text"), c(l, "placeholder", "Optional nickname"), c(l, "maxlength", "64"), l.autofocus = true, c(l, "class", "svelte-1lfam"), c(a, "type", "button"), c(a, "class", "btn-text svelte-1lfam"), c(E, "type", "submit"), c(E, "class", "btn-filled-sm svelte-1lfam"), E.disabled = t[2], c(s, "class", "name-actions svelte-1lfam"), c(o, "class", "name-form svelte-1lfam"), c(e, "class", "action-row edit-name-row svelte-1lfam");
          },
          m(B, p) {
            T(B, e, p), i(e, x), i(e, n), i(e, o), i(o, l), x0(l, t[5]), i(o, r), i(o, s), i(s, a), i(s, u), i(s, E), i(E, C), l.focus(), A || (F = [
              H(l, "input", t[16]),
              H(a, "click", t[14]),
              H(o, "submit", ne(t[9]))
            ], A = true);
          },
          p(B, p) {
            p & 32 && l.value !== B[5] && x0(l, B[5]), p & 4 && f !== (f = B[2] ? "Saving\u2026" : "Save") && V(C, f), p & 4 && (E.disabled = B[2]);
          },
          d(B) {
            B && P(e), A = false, l0(F);
          }
        };
      }
      function an(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Tap to change", c(e, "class", "action-sub svelte-1lfam");
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
        let e, x, n, o, l, r;
        return {
          c() {
            e = d("button"), x = d("span"), x.textContent = "favorite", n = y(), o = d("span"), o.textContent = "Mark as active again", c(x, "class", "material-icons action-icon primary svelte-1lfam"), c(o, "class", "action-label primary svelte-1lfam"), c(e, "class", "action-row svelte-1lfam"), e.disabled = t[2];
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(e, n), i(e, o), l || (r = H(e, "click", t[11]), l = true);
          },
          p(s, a) {
            a & 4 && (e.disabled = s[2]);
          },
          d(s) {
            s && P(e), l = false, r();
          }
        };
      }
      function Oa(t) {
        let e;
        function x(l, r) {
          return l[6] === "end" ? Ua : Ha;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            o.c(), e = K0();
          },
          m(l, r) {
            o.m(l, r), T(l, e, r);
          },
          p(l, r) {
            n === (n = x(l)) && o ? o.p(l, r) : (o.d(1), o = n(l), o && (o.c(), o.m(e.parentNode, e)));
          },
          d(l) {
            l && P(e), o.d(l);
          }
        };
      }
      function Ha(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-1lfam">heart_broken</span> <span class="action-label danger svelte-1lfam">Mark as ended</span>', c(e, "class", "action-row svelte-1lfam");
          },
          m(o, l) {
            T(o, e, l), x || (n = H(e, "click", t[18]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function Ua(t) {
        let e, x, n, o, l, r, s, a = t[2] ? "Saving\u2026" : "Mark as ended", u, E, f;
        return {
          c() {
            e = d("div"), x = d("p"), x.textContent = "Mark this partnership as ended?", n = y(), o = d("div"), l = d("button"), l.textContent = "Cancel", r = y(), s = d("button"), u = z(a), c(x, "class", "confirm-text svelte-1lfam"), c(l, "class", "btn-text svelte-1lfam"), c(s, "class", "btn-danger-sm svelte-1lfam"), s.disabled = t[2], c(o, "class", "confirm-actions svelte-1lfam"), c(e, "class", "confirm-row svelte-1lfam");
          },
          m(C, A) {
            T(C, e, A), i(e, x), i(e, n), i(e, o), i(o, l), i(o, r), i(o, s), i(s, u), E || (f = [
              H(l, "click", t[17]),
              H(s, "click", t[10])
            ], E = true);
          },
          p(C, A) {
            A & 4 && a !== (a = C[2] ? "Saving\u2026" : "Mark as ended") && V(u, a), A & 4 && (s.disabled = C[2]);
          },
          d(C) {
            C && P(e), E = false, l0(f);
          }
        };
      }
      function ja(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons action-icon svelte-1lfam">archive</span> <span class="action-label svelte-1lfam">Archive</span> <span class="action-sub-right svelte-1lfam">Hide from main list</span>', c(e, "class", "action-row svelte-1lfam");
          },
          m(o, l) {
            T(o, e, l), x || (n = H(e, "click", t[22]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function Va(t) {
        let e, x, n, o, l, r, s, a = t[2] ? "Saving\u2026" : "Archive", u, E, f;
        return {
          c() {
            e = d("div"), x = d("p"), x.textContent = "Archive this partner? They will be hidden from the main list.", n = y(), o = d("div"), l = d("button"), l.textContent = "Cancel", r = y(), s = d("button"), u = z(a), c(x, "class", "confirm-text svelte-1lfam"), c(l, "class", "btn-text svelte-1lfam"), c(s, "class", "btn-filled-sm svelte-1lfam"), s.disabled = t[2], c(o, "class", "confirm-actions svelte-1lfam"), c(e, "class", "confirm-row svelte-1lfam");
          },
          m(C, A) {
            T(C, e, A), i(e, x), i(e, n), i(e, o), i(o, l), i(o, r), i(o, s), i(s, u), E || (f = [
              H(l, "click", t[20]),
              H(s, "click", t[21])
            ], E = true);
          },
          p(C, A) {
            A & 4 && a !== (a = C[2] ? "Saving\u2026" : "Archive") && V(u, a), A & 4 && (s.disabled = C[2]);
          },
          d(C) {
            C && P(e), E = false, l0(f);
          }
        };
      }
      function Ga(t) {
        let e, x, n, o, l, r;
        return {
          c() {
            e = d("button"), x = d("span"), x.textContent = "unarchive", n = y(), o = d("span"), o.textContent = "Unarchive", c(x, "class", "material-icons action-icon primary svelte-1lfam"), c(o, "class", "action-label primary svelte-1lfam"), c(e, "class", "action-row svelte-1lfam"), e.disabled = t[2];
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(e, n), i(e, o), l || (r = H(e, "click", t[19]), l = true);
          },
          p(s, a) {
            a & 4 && (e.disabled = s[2]);
          },
          d(s) {
            s && P(e), l = false, r();
          }
        };
      }
      function Ka(t) {
        let e, x, n, o, l, r, s, a = (t[1] ? "Partner not found" : t[8]) + "", u, E, f;
        e = new ee({});
        function C(B, p) {
          if (B[1]) return Na;
          if (B[0]) return La;
        }
        let A = C(t), F = A && A(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), o = d("div"), l = d("a"), l.innerHTML = '<span class="material-icons svelte-1lfam">arrow_back</span>', r = y(), s = d("h1"), u = z(a), E = y(), F && F.c(), c(l, "class", "back-btn svelte-1lfam"), c(l, "href", "#/encounters"), c(s, "class", "svelte-1lfam"), c(o, "class", "page-header svelte-1lfam"), c(n, "class", "svelte-1lfam");
          },
          m(B, p) {
            y0(e, B, p), T(B, x, p), T(B, n, p), i(n, o), i(o, l), i(o, r), i(o, s), i(s, u), i(n, E), F && F.m(n, null), f = true;
          },
          p(B, [p]) {
            (!f || p & 258) && a !== (a = (B[1] ? "Partner not found" : B[8]) + "") && V(u, a), A === (A = C(B)) && F ? F.p(B, p) : (F && F.d(1), F = A && A(B), F && (F.c(), F.m(n, null)));
          },
          i(B) {
            f || (F0(e.$$.fragment, B), f = true);
          },
          o(B) {
            v0(e.$$.fragment, B), f = false;
          },
          d(B) {
            B && (P(x), P(n)), P0(e, B), F && F.d();
          }
        };
      }
      function Bx(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Ya(t, e, x) {
        let n, o, { params: l = {} } = e, r = null, s = false, a = false, u = null, E = false, f = "", C = null;
        M0(() => {
          if (!O0()) {
            i0("/login");
            return;
          }
          A();
        });
        function A() {
          const S = ft(), L = l.rawTokenHex;
          x(0, r = S.find((N) => e0(N.rawToken) === L) ?? null), r || x(1, s = true);
        }
        function F() {
          return e0(r.rawToken);
        }
        async function B() {
          if (!a) {
            x(2, a = true), x(3, u = null);
            try {
              const S = f.trim();
              await Xe(F(), {
                name: S || null
              }), A(), x(4, E = false);
            } catch (S) {
              x(3, u = S.message);
            } finally {
              x(2, a = false);
            }
          }
        }
        async function p() {
          if (!a) {
            x(2, a = true), x(3, u = null);
            try {
              const S = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              await Xe(F(), {
                endedAt: S
              }), A();
            } catch (S) {
              x(3, u = S.message);
            } finally {
              x(2, a = false), x(6, C = null);
            }
          }
        }
        async function m() {
          if (!a) {
            x(2, a = true), x(3, u = null);
            try {
              await Xe(F(), {
                endedAt: null
              }), A();
            } catch (S) {
              x(3, u = S.message);
            } finally {
              x(2, a = false);
            }
          }
        }
        async function h(S) {
          if (!a) {
            x(2, a = true), x(3, u = null);
            try {
              await Xe(F(), {
                archived: S
              }), A();
            } catch (L) {
              x(3, u = L.message);
            } finally {
              x(2, a = false), x(6, C = null);
            }
          }
        }
        function b() {
          x(5, f = r.name ?? ""), x(4, E = true), x(3, u = null);
        }
        function D() {
          x(4, E = false), x(3, u = null);
        }
        function v() {
          f = this.value, x(5, f);
        }
        const _ = () => x(6, C = null), k = () => x(6, C = "end"), w = () => h(false), g = () => x(6, C = null), M = () => h(true), I = () => x(6, C = "archive");
        return t.$$set = (S) => {
          "params" in S && x(15, l = S.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && x(8, n = r?.name || (r?.endedAt ? "Ended partner" : "Active partner")), t.$$.dirty & 1 && x(7, o = r && !r.endedAt);
        }, [
          r,
          s,
          a,
          u,
          E,
          f,
          C,
          o,
          n,
          B,
          p,
          m,
          h,
          b,
          D,
          l,
          v,
          _,
          k,
          w,
          g,
          M,
          I
        ];
      }
      class Ja extends k0 {
        constructor(e) {
          super(), _0(this, e, Ya, Ka, m0, {
            params: 15
          });
        }
      }
      function cn(t, e, x) {
        const n = t.slice();
        n[18] = e[x], n[21] = x;
        const o = n[6].length - 1 - n[21];
        return n[19] = o, n;
      }
      function un(t, e, x) {
        const n = t.slice();
        return n[22] = e[x], n[23] = e, n[24] = x, n;
      }
      function Qa(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved. (No encounters on record to notify.)`, c(e, "class", "toast success svelte-1ugndgv");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Wa(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved.`, c(e, "class", "toast success svelte-1ugndgv");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Xa(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved. Partners notified.`, c(e, "class", "toast success svelte-1ugndgv");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function En(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = y(), o = z(t[5]), c(x, "class", "material-icons svelte-1ugndgv"), c(e, "class", "toast error-toast svelte-1ugndgv");
          },
          m(l, r) {
            T(l, e, r), i(e, x), i(e, n), i(e, o);
          },
          p(l, r) {
            r & 32 && V(o, l[5]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function fn(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p, m, h, b, D, v = t[3] && t[4] === "computing" ? "Saving\u2026" : "Save result", _, k, w, g = D0(Z0), M = [];
        for (let S = 0; S < g.length; S += 1) M[S] = dn(un(t, g, S));
        let I = t[4] === "computing" && Bn();
        return {
          c() {
            e = d("section"), x = d("h2"), x.textContent = "Record a result", n = y(), o = d("p"), o.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, l = y(), r = d("form"), s = d("label"), a = z(`Test date
          `), u = d("input"), E = y(), f = d("fieldset"), C = d("legend"), C.textContent = "Positive results", A = y(), F = d("div");
            for (let S = 0; S < M.length; S += 1) M[S].c();
            B = y(), I && I.c(), p = y(), m = d("div"), h = d("button"), h.textContent = "Cancel", b = y(), D = d("button"), _ = z(v), c(x, "class", "svelte-1ugndgv"), c(o, "class", "help svelte-1ugndgv"), c(u, "type", "date"), u.required = true, c(u, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), c(u, "class", "svelte-1ugndgv"), c(s, "class", "svelte-1ugndgv"), c(C, "class", "svelte-1ugndgv"), c(F, "class", "disease-grid svelte-1ugndgv"), c(f, "class", "svelte-1ugndgv"), c(h, "type", "button"), c(h, "class", "btn-text svelte-1ugndgv"), c(D, "type", "submit"), c(D, "class", "btn-filled svelte-1ugndgv"), D.disabled = t[3], c(m, "class", "form-actions svelte-1ugndgv"), c(r, "class", "svelte-1ugndgv"), c(e, "class", "card form-card svelte-1ugndgv");
          },
          m(S, L) {
            T(S, e, L), i(e, x), i(e, n), i(e, o), i(e, l), i(e, r), i(r, s), i(s, a), i(s, u), x0(u, t[0]), i(r, E), i(r, f), i(f, C), i(f, A), i(f, F);
            for (let N = 0; N < M.length; N += 1) M[N] && M[N].m(F, null);
            i(r, B), I && I.m(r, null), i(r, p), i(r, m), i(m, h), i(m, b), i(m, D), i(D, _), k || (w = [
              H(u, "input", t[11]),
              H(h, "click", t[13]),
              H(r, "submit", ne(t[8]))
            ], k = true);
          },
          p(S, L) {
            if (L & 1 && x0(u, S[0]), L & 2) {
              g = D0(Z0);
              let N;
              for (N = 0; N < g.length; N += 1) {
                const q = un(S, g, N);
                M[N] ? M[N].p(q, L) : (M[N] = dn(q), M[N].c(), M[N].m(F, null));
              }
              for (; N < M.length; N += 1) M[N].d(1);
              M.length = g.length;
            }
            S[4] === "computing" ? I || (I = Bn(), I.c(), I.m(r, p)) : I && (I.d(1), I = null), L & 24 && v !== (v = S[3] && S[4] === "computing" ? "Saving\u2026" : "Save result") && V(_, v), L & 8 && (D.disabled = S[3]);
          },
          d(S) {
            S && P(e), $0(M, S), I && I.d(), k = false, l0(w);
          }
        };
      }
      function dn(t) {
        let e, x, n, o = Le[t[22]] + "", l, r, s, a;
        function u() {
          t[12].call(x, t[22]);
        }
        return {
          c() {
            e = d("label"), x = d("input"), n = y(), l = z(o), r = y(), c(x, "type", "checkbox"), c(x, "class", "svelte-1ugndgv"), c(e, "class", "checkbox-label svelte-1ugndgv");
          },
          m(E, f) {
            T(E, e, f), i(e, x), x.checked = t[1][t[22]], i(e, n), i(e, l), i(e, r), s || (a = H(x, "change", u), s = true);
          },
          p(E, f) {
            t = E, f & 2 && (x.checked = t[1][t[22]]);
          },
          d(E) {
            E && P(e), s = false, a();
          }
        };
      }
      function Bn(t) {
        let e;
        return {
          c() {
            e = d("p"), e.innerHTML = `<span class="material-icons spin svelte-1ugndgv">autorenew</span>
            Notifying\u2026`, c(e, "class", "computing-status svelte-1ugndgv");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Za(t) {
        let e, x = D0([
          ...t[6]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = An(cn(t, x, o));
        return {
          c() {
            e = d("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-1ugndgv");
          },
          m(o, l) {
            T(o, e, l);
            for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(e, null);
          },
          p(o, l) {
            if (l & 712) {
              x = D0([
                ...o[6]
              ].reverse());
              let r;
              for (r = 0; r < x.length; r += 1) {
                const s = cn(o, x, r);
                n[r] ? n[r].p(s, l) : (n[r] = An(s), n[r].c(), n[r].m(e, null));
              }
              for (; r < n.length; r += 1) n[r].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), $0(n, o);
          }
        };
      }
      function $a(t) {
        let e, x, n, o, l, r, s, a;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "science", n = y(), o = d("p"), o.textContent = "No results recorded yet.", l = y(), r = d("button"), r.innerHTML = `<span class="material-icons">add</span>
          Record first result`, c(x, "class", "material-icons empty-icon svelte-1ugndgv"), c(o, "class", "svelte-1ugndgv"), c(r, "class", "btn-filled svelte-1ugndgv"), c(e, "class", "empty-state svelte-1ugndgv");
          },
          m(u, E) {
            T(u, e, E), i(e, x), i(e, n), i(e, o), i(e, l), i(e, r), s || (a = H(r, "click", t[14]), s = true);
          },
          p: Z,
          d(u) {
            u && P(e), s = false, a();
          }
        };
      }
      function ei(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Negative", c(e, "class", "badge negative svelte-1ugndgv");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function xi(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Positive", c(e, "class", "badge positive svelte-1ugndgv");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Cn(t) {
        let e, x = t[18].positiveDiseases.map(t[15]).join(", ") + "", n, o, l;
        function r(u, E) {
          return u[18].hasNotified ? ni : ti;
        }
        let s = r(t), a = s(t);
        return {
          c() {
            e = d("div"), n = z(x), o = y(), a.c(), l = K0(), c(e, "class", "diseases svelte-1ugndgv");
          },
          m(u, E) {
            T(u, e, E), i(e, n), T(u, o, E), a.m(u, E), T(u, l, E);
          },
          p(u, E) {
            E & 64 && x !== (x = u[18].positiveDiseases.map(u[15]).join(", ") + "") && V(n, x), s === (s = r(u)) && a ? a.p(u, E) : (a.d(1), a = s(u), a && (a.c(), a.m(l.parentNode, l)));
          },
          d(u) {
            u && (P(e), P(o), P(l)), a.d(u);
          }
        };
      }
      function ti(t) {
        let e, x, n, o, l = t[7] === t[19] ? "Notifying\u2026" : "Notify now", r, s, a;
        function u() {
          return t[16](t[19], t[18]);
        }
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "Partners not yet notified", n = y(), o = d("button"), r = z(l), c(x, "class", "not-notified svelte-1ugndgv"), c(o, "class", "btn-text-small svelte-1ugndgv"), o.disabled = t[3], c(e, "class", "notify-row svelte-1ugndgv");
          },
          m(E, f) {
            T(E, e, f), i(e, x), i(e, n), i(e, o), i(o, r), s || (a = H(o, "click", u), s = true);
          },
          p(E, f) {
            t = E, f & 192 && l !== (l = t[7] === t[19] ? "Notifying\u2026" : "Notify now") && V(r, l), f & 8 && (o.disabled = t[3]);
          },
          d(E) {
            E && P(e), s = false, a();
          }
        };
      }
      function ni(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check</span>
                    Partners notified`, c(e, "class", "notified svelte-1ugndgv");
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
      function An(t) {
        let e, x, n = t[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", o, l, r, s, a, u = t[18].date + "", E, f, C, A;
        function F(h, b) {
          return h[18].positiveDiseases.length > 0 ? xi : ei;
        }
        let B = F(t), p = B(t), m = t[18].positiveDiseases.length > 0 && Cn(t);
        return {
          c() {
            e = d("li"), x = d("span"), o = z(n), l = y(), r = d("div"), s = d("div"), a = d("span"), E = z(u), f = y(), p.c(), C = y(), m && m.c(), A = y(), c(x, "class", "material-icons result-icon svelte-1ugndgv"), n0(x, "positive", t[18].positiveDiseases.length > 0), n0(x, "negative", t[18].positiveDiseases.length === 0), c(a, "class", "result-date svelte-1ugndgv"), c(s, "class", "result-row svelte-1ugndgv"), c(r, "class", "result-body svelte-1ugndgv"), c(e, "class", "svelte-1ugndgv");
          },
          m(h, b) {
            T(h, e, b), i(e, x), i(x, o), i(e, l), i(e, r), i(r, s), i(s, a), i(a, E), i(s, f), p.m(s, null), i(r, C), m && m.m(r, null), i(e, A);
          },
          p(h, b) {
            b & 64 && n !== (n = h[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && V(o, n), b & 64 && n0(x, "positive", h[18].positiveDiseases.length > 0), b & 64 && n0(x, "negative", h[18].positiveDiseases.length === 0), b & 64 && u !== (u = h[18].date + "") && V(E, u), B !== (B = F(h)) && (p.d(1), p = B(h), p && (p.c(), p.m(s, null))), h[18].positiveDiseases.length > 0 ? m ? m.p(h, b) : (m = Cn(h), m.c(), m.m(r, null)) : m && (m.d(1), m = null);
          },
          d(h) {
            h && P(e), p.d(), m && m.d();
          }
        };
      }
      function oi(t) {
        let e, x, n, o, l, r, s, a, u = t[2] ? "close" : "add", E, f, C, A, F, B, p, m, h, b;
        e = new ee({});
        function D(S, L) {
          if (S[4] === "done") return Xa;
          if (S[4] === "done_negative") return Wa;
          if (S[4] === "done_no_encounters") return Qa;
        }
        let v = D(t), _ = v && v(t), k = t[5] && En(t), w = t[2] && fn(t);
        function g(S, L) {
          return S[6].length === 0 ? $a : Za;
        }
        let M = g(t), I = M(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), o = d("div"), l = d("h1"), l.textContent = "Test Results", r = y(), s = d("button"), a = d("span"), E = z(u), C = y(), _ && _.c(), A = y(), k && k.c(), F = y(), w && w.c(), B = y(), p = d("section"), I.c(), c(l, "class", "svelte-1ugndgv"), c(a, "class", "material-icons"), c(s, "class", "fab svelte-1ugndgv"), c(s, "title", f = t[2] ? "Cancel" : "Record new result"), c(o, "class", "page-header svelte-1ugndgv"), c(p, "class", "card list-card svelte-1ugndgv"), c(n, "class", "svelte-1ugndgv");
          },
          m(S, L) {
            y0(e, S, L), T(S, x, L), T(S, n, L), i(n, o), i(o, l), i(o, r), i(o, s), i(s, a), i(a, E), i(n, C), _ && _.m(n, null), i(n, A), k && k.m(n, null), i(n, F), w && w.m(n, null), i(n, B), i(n, p), I.m(p, null), m = true, h || (b = H(s, "click", t[10]), h = true);
          },
          p(S, [L]) {
            (!m || L & 4) && u !== (u = S[2] ? "close" : "add") && V(E, u), (!m || L & 4 && f !== (f = S[2] ? "Cancel" : "Record new result")) && c(s, "title", f), v !== (v = D(S)) && (_ && _.d(1), _ = v && v(S), _ && (_.c(), _.m(n, A))), S[5] ? k ? k.p(S, L) : (k = En(S), k.c(), k.m(n, F)) : k && (k.d(1), k = null), S[2] ? w ? w.p(S, L) : (w = fn(S), w.c(), w.m(n, B)) : w && (w.d(1), w = null), M === (M = g(S)) && I ? I.p(S, L) : (I.d(1), I = M(S), I && (I.c(), I.m(p, null)));
          },
          i(S) {
            m || (F0(e.$$.fragment, S), m = true);
          },
          o(S) {
            v0(e.$$.fragment, S), m = false;
          },
          d(S) {
            S && (P(x), P(n)), P0(e, S), _ && _.d(), k && k.d(), w && w.d(), I.d(), h = false, b();
          }
        };
      }
      const li = 20, Fn = 50, ri = 100;
      function si(t, e, x) {
        let n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), o = {}, l = false, r = false, s = null, a = null, u = [], E = null;
        M0(() => {
          if (!O0()) {
            i0("/login");
            return;
          }
          x(6, u = ox());
        });
        async function f(v, _) {
          const k = X0(), w = le(), g = [
            ...k.encounters.map((a0) => ue(a0.rawToken, a0.theirContactId, a0.submitIndex)),
            ...(k.relationships || []).map((a0) => ue(a0.rawToken, a0.theirContactId, a0.submitIndex))
          ], M = Fn + Math.floor(Math.random() * (ri - Fn + 1)), I = [
            ...g
          ];
          for (; I.length < M; ) I.push(je(32));
          for (let a0 = I.length - 1; a0 > 0; a0--) {
            const u0 = Math.floor(Math.random() * (a0 + 1));
            [I[a0], I[u0]] = [
              I[u0],
              I[a0]
            ];
          }
          const S = I.map((a0) => Ee(a0)), L = Lo(w), N = v.replace(/-/g, ""), q = _.map((a0) => Wo[a0] ?? a0).join(""), U = new TextEncoder().encode("1" + N + q), R = Ve(L, U), j = Ee(R), Q = new TextEncoder(), K = JSON.stringify(S), G = Q.encode(K).length + Q.encode(j).length, O = new Uint8Array(G), W = Q.encode(K), Y = Q.encode(j);
          O.set(W, 0), O.set(Y, W.length);
          const r0 = os(O);
          let f0 = li, c0 = (/* @__PURE__ */ new Date()).toISOString();
          for (let a0 = 0; a0 < 2; a0++) {
            const { counter: u0 } = ls(c0, r0, f0), J0 = {
              tokens: S,
              created_at: c0,
              submission_type: "self_reported",
              encrypted_payload: j,
              pow_counter: u0
            };
            try {
              await Ls(J0);
              break;
            } catch (X) {
              if (a0 === 0 && X.statusCode === 400) {
                let t0 = false;
                if (X.powDifficulty && X.powDifficulty > f0 && (f0 = X.powDifficulty, t0 = true), X.serverTime && (c0 = X.serverTime, t0 = true), t0) continue;
              }
              throw X;
            }
          }
          await Qs();
        }
        async function C() {
          if (!r) {
            x(3, r = true), x(5, a = null), x(4, s = null);
            try {
              const v = Z0.filter((_) => o[_]);
              if (v.length > 0) {
                const _ = X0();
                if (_.encounters.length > 0 || (_.relationships || []).length > 0) {
                  const w = await Nx(n, v);
                  x(4, s = "computing"), await new Promise((g) => setTimeout(g, 30)), await f(n, v), await It(w), x(4, s = "done");
                } else await Nx(n, v, true), x(4, s = "done_no_encounters");
              } else await Nx(n, v), x(4, s = "done_negative");
              x(1, o = {}), x(0, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), x(6, u = ox()), x(2, l = false);
            } catch (v) {
              x(5, a = v.message), x(4, s = null);
            } finally {
              x(3, r = false);
            }
          }
        }
        async function A(v, _) {
          if (!r) {
            x(3, r = true), x(7, E = v), x(5, a = null);
            try {
              const k = X0();
              if (k.encounters.length === 0 && (k.relationships || []).length === 0) {
                x(5, a = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((w) => setTimeout(w, 30)), await f(_.date, _.positiveDiseases), await It(v), x(6, u = ox());
            } catch (k) {
              x(5, a = "Notification failed: " + k.message);
            } finally {
              x(3, r = false), x(7, E = null);
            }
          }
        }
        const F = () => {
          x(2, l = !l), x(5, a = null), x(4, s = null);
        };
        function B() {
          n = this.value, x(0, n);
        }
        function p(v) {
          o[v] = this.checked, x(1, o);
        }
        return [
          n,
          o,
          l,
          r,
          s,
          a,
          u,
          E,
          C,
          A,
          F,
          B,
          p,
          () => {
            x(2, l = false), x(4, s = null), x(5, a = null);
          },
          () => x(2, l = true),
          (v) => Le[v] ?? v,
          (v, _) => A(v, _)
        ];
      }
      class ai extends k0 {
        constructor(e) {
          super(), _0(this, e, si, oi, m0, {});
        }
      }
      function Dn(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-f77wfc">check_circle</span>
      Password changed successfully.`, c(e, "class", "success-banner svelte-f77wfc");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function pn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[4]), c(e, "class", "error svelte-f77wfc");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && V(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ii(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p, m, h, b, D, v, _ = t[3] ? "Changing password\u2026" : "Change password", k, w, g, M, I, S = t[5] && Dn(), L = t[4] && pn(t);
        return {
          c() {
            e = d("main"), x = d("a"), x.innerHTML = `<span class="material-icons svelte-f77wfc">arrow_back</span>
    Back`, n = y(), o = d("h1"), o.textContent = "Change password", l = y(), S && S.c(), r = y(), s = d("form"), a = d("label"), u = z(`Current password
      `), E = d("input"), f = y(), C = d("label"), A = z(`New password
      `), F = d("input"), B = y(), p = d("label"), m = z(`Confirm new password
      `), h = d("input"), b = y(), L && L.c(), D = y(), v = d("button"), k = z(_), w = y(), g = d("p"), g.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, c(x, "href", "#/home"), c(x, "class", "back-link svelte-f77wfc"), c(o, "class", "svelte-f77wfc"), c(E, "type", "password"), E.required = true, c(E, "autocomplete", "current-password"), c(E, "class", "svelte-f77wfc"), c(a, "class", "svelte-f77wfc"), c(F, "type", "password"), F.required = true, c(F, "autocomplete", "new-password"), c(F, "minlength", "12"), c(F, "class", "svelte-f77wfc"), c(C, "class", "svelte-f77wfc"), c(h, "type", "password"), h.required = true, c(h, "autocomplete", "new-password"), c(h, "class", "svelte-f77wfc"), c(p, "class", "svelte-f77wfc"), c(v, "type", "submit"), v.disabled = t[3], c(v, "class", "svelte-f77wfc"), c(s, "class", "svelte-f77wfc"), c(g, "class", "privacy-note svelte-f77wfc"), c(e, "class", "svelte-f77wfc");
          },
          m(N, q) {
            T(N, e, q), i(e, x), i(e, n), i(e, o), i(e, l), S && S.m(e, null), i(e, r), i(e, s), i(s, a), i(a, u), i(a, E), x0(E, t[0]), i(s, f), i(s, C), i(C, A), i(C, F), x0(F, t[1]), i(s, B), i(s, p), i(p, m), i(p, h), x0(h, t[2]), i(s, b), L && L.m(s, null), i(s, D), i(s, v), i(v, k), i(e, w), i(e, g), M || (I = [
              H(E, "input", t[7]),
              H(F, "input", t[8]),
              H(h, "input", t[9]),
              H(s, "submit", ne(t[6]))
            ], M = true);
          },
          p(N, [q]) {
            N[5] ? S || (S = Dn(), S.c(), S.m(e, r)) : S && (S.d(1), S = null), q & 1 && E.value !== N[0] && x0(E, N[0]), q & 2 && F.value !== N[1] && x0(F, N[1]), q & 4 && h.value !== N[2] && x0(h, N[2]), N[4] ? L ? L.p(N, q) : (L = pn(N), L.c(), L.m(s, D)) : L && (L.d(1), L = null), q & 8 && _ !== (_ = N[3] ? "Changing password\u2026" : "Change password") && V(k, _), q & 8 && (v.disabled = N[3]);
          },
          i: Z,
          o: Z,
          d(N) {
            N && P(e), S && S.d(), L && L.d(), M = false, l0(I);
          }
        };
      }
      function ci(t, e, x) {
        let n = "", o = "", l = "", r = false, s = null, a = false;
        M0(() => {
          O0() || i0("/login");
        });
        async function u() {
          if (x(4, s = null), x(5, a = false), o !== l) {
            x(4, s = "New passwords do not match");
            return;
          }
          if (o.length < 12) {
            x(4, s = "New password must be at least 12 characters");
            return;
          }
          if (o === n) {
            x(4, s = "New password must differ from the current password");
            return;
          }
          x(3, r = true);
          try {
            const A = nx(), { challenge: F, auth_salt: B, enc_salt: p } = await st(A), m = await te(n, T0(p)), h = Be();
            if (!h || m.length !== h.length || !m.every((I, S) => I === h[S])) {
              x(4, s = "Current password is incorrect");
              return;
            }
            const b = await te(n, T0(B)), D = Io(new TextEncoder().encode(F), b), v = Ee(D), _ = await te(o, T0(B)), k = await te(o, T0(p)), w = e0(Mo(_)), { blobHex: g, blobVersion: M } = xa(k);
            await Ts(v, w, g, M), rt(k), ta(M + 1), x(5, a = true), x(0, n = ""), x(1, o = ""), x(2, l = "");
          } catch (A) {
            x(4, s = A.message);
          } finally {
            x(3, r = false);
          }
        }
        function E() {
          n = this.value, x(0, n);
        }
        function f() {
          o = this.value, x(1, o);
        }
        function C() {
          l = this.value, x(2, l);
        }
        return [
          n,
          o,
          l,
          r,
          s,
          a,
          u,
          E,
          f,
          C
        ];
      }
      class ui extends k0 {
        constructor(e) {
          super(), _0(this, e, ci, ii, m0, {});
        }
      }
      function Ei(t) {
        let e, x, n, o, l, r, s, a, u, E = t[2] ? "Sending\u2026" : "Send verification link", f, C, A, F, B = t[0] && mn(t), p = t[3] && hn(t);
        return {
          c() {
            e = d("div"), B && B.c(), x = y(), n = d("form"), o = d("label"), l = z(`New email address
          `), r = d("input"), s = y(), p && p.c(), a = y(), u = d("button"), f = z(E), c(r, "type", "email"), r.required = true, c(r, "autocomplete", "email"), c(r, "placeholder", "you@example.com"), c(r, "class", "svelte-r6hw3y"), c(o, "class", "svelte-r6hw3y"), c(u, "type", "submit"), u.disabled = C = t[2] || !t[1], c(u, "class", "svelte-r6hw3y"), c(n, "class", "svelte-r6hw3y"), c(e, "class", "card svelte-r6hw3y");
          },
          m(m, h) {
            T(m, e, h), B && B.m(e, null), i(e, x), i(e, n), i(n, o), i(o, l), i(o, r), x0(r, t[1]), i(n, s), p && p.m(n, null), i(n, a), i(n, u), i(u, f), A || (F = [
              H(r, "input", t[6]),
              H(n, "submit", ne(t[5]))
            ], A = true);
          },
          p(m, h) {
            m[0] ? B ? B.p(m, h) : (B = mn(m), B.c(), B.m(e, x)) : B && (B.d(1), B = null), h & 2 && r.value !== m[1] && x0(r, m[1]), m[3] ? p ? p.p(m, h) : (p = hn(m), p.c(), p.m(n, a)) : p && (p.d(1), p = null), h & 4 && E !== (E = m[2] ? "Sending\u2026" : "Send verification link") && V(f, E), h & 6 && C !== (C = m[2] || !m[1]) && (u.disabled = C);
          },
          d(m) {
            m && P(e), B && B.d(), p && p.d(), A = false, l0(F);
          }
        };
      }
      function fi(t) {
        let e, x, n, o, l, r, s, a, u, E;
        return {
          c() {
            e = d("div"), x = d("div"), x.innerHTML = '<span class="material-icons success-icon svelte-r6hw3y">mark_email_read</span> <h2 class="svelte-r6hw3y">Check your inbox</h2>', n = y(), o = d("p"), l = z("We've sent a verification link to "), r = d("strong"), s = z(t[4]), a = z(`.
        Click the link to confirm the change. Your email won't update until you verify it.`), u = y(), E = d("a"), E.textContent = "Done", c(x, "class", "success-row svelte-r6hw3y"), c(o, "class", "hint svelte-r6hw3y"), c(E, "href", "#/settings"), c(E, "class", "btn-primary svelte-r6hw3y"), c(e, "class", "card svelte-r6hw3y");
          },
          m(f, C) {
            T(f, e, C), i(e, x), i(e, n), i(e, o), i(o, l), i(o, r), i(r, s), i(o, a), i(e, u), i(e, E);
          },
          p(f, C) {
            C & 16 && V(s, f[4]);
          },
          d(f) {
            f && P(e);
          }
        };
      }
      function mn(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("p"), x = z("Current email: "), n = d("strong"), o = z(t[0]), c(e, "class", "current-email svelte-r6hw3y");
          },
          m(l, r) {
            T(l, e, r), i(e, x), i(e, n), i(n, o);
          },
          p(l, r) {
            r & 1 && V(o, l[0]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function hn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[3]), c(e, "class", "error svelte-r6hw3y");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 8 && V(x, n[3]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function di(t) {
        let e, x, n, o, l;
        function r(u, E) {
          return u[4] ? fi : Ei;
        }
        let s = r(t), a = s(t);
        return {
          c() {
            e = d("main"), x = d("a"), x.innerHTML = `<span class="material-icons svelte-r6hw3y">arrow_back</span>
    Back to settings`, n = y(), o = d("h1"), o.textContent = "Change email", l = y(), a.c(), c(x, "href", "#/settings"), c(x, "class", "back-link svelte-r6hw3y"), c(o, "class", "svelte-r6hw3y"), c(e, "class", "svelte-r6hw3y");
          },
          m(u, E) {
            T(u, e, E), i(e, x), i(e, n), i(e, o), i(e, l), a.m(e, null);
          },
          p(u, [E]) {
            s === (s = r(u)) && a ? a.p(u, E) : (a.d(1), a = s(u), a && (a.c(), a.m(e, null)));
          },
          i: Z,
          o: Z,
          d(u) {
            u && P(e), a.d();
          }
        };
      }
      function Bi(t, e, x) {
        let n;
        V0(t, kx, (f) => x(7, n = f));
        let o = "", l = "", r = false, s = null, a = null;
        M0(() => {
          if (!O0()) {
            i0("/login");
            return;
          }
          x(0, o = n ?? "");
        });
        async function u() {
          x(3, s = null), x(2, r = true);
          try {
            await Ds(l), x(4, a = l);
          } catch (f) {
            x(3, s = f.message);
          } finally {
            x(2, r = false);
          }
        }
        function E() {
          l = this.value, x(1, l);
        }
        return [
          o,
          l,
          r,
          s,
          a,
          u,
          E
        ];
      }
      class Ci extends k0 {
        constructor(e) {
          super(), _0(this, e, Bi, di, m0, {});
        }
      }
      function Ai(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C;
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">error_outline</span>', x = y(), n = d("h1"), n.textContent = "Verification failed", o = y(), l = d("p"), r = z(t[1]), s = y(), a = d("p"), a.textContent = "The link may have expired or already been used. You can request a new one from your account settings.", u = y(), E = d("button"), E.textContent = "Go to Login", c(e, "class", "icon-wrap error svelte-1wqqdyg"), c(n, "class", "svelte-1wqqdyg"), c(l, "class", "message error svelte-1wqqdyg"), c(a, "class", "hint svelte-1wqqdyg"), c(E, "class", "btn-primary svelte-1wqqdyg");
          },
          m(A, F) {
            T(A, e, F), T(A, x, F), T(A, n, F), T(A, o, F), T(A, l, F), i(l, r), T(A, s, F), T(A, a, F), T(A, u, F), T(A, E, F), f || (C = H(E, "click", t[4]), f = true);
          },
          p(A, F) {
            F & 2 && V(r, A[1]);
          },
          d(A) {
            A && (P(e), P(x), P(n), P(o), P(l), P(s), P(a), P(u), P(E)), f = false, C();
          }
        };
      }
      function Fi(t) {
        let e, x, n, o, l, r, s, a, u;
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">check_circle</span>', x = y(), n = d("h1"), n.textContent = "Email verified", o = y(), l = d("p"), l.textContent = "Your email address has been verified successfully.", r = y(), s = d("button"), s.textContent = "Go to Login", c(e, "class", "icon-wrap success svelte-1wqqdyg"), c(n, "class", "svelte-1wqqdyg"), c(l, "class", "message svelte-1wqqdyg"), c(s, "class", "btn-primary svelte-1wqqdyg");
          },
          m(E, f) {
            T(E, e, f), T(E, x, f), T(E, n, f), T(E, o, f), T(E, l, f), T(E, r, f), T(E, s, f), a || (u = H(s, "click", t[3]), a = true);
          },
          p: Z,
          d(E) {
            E && (P(e), P(x), P(n), P(o), P(l), P(r), P(s)), a = false, u();
          }
        };
      }
      function Di(t) {
        let e, x, n;
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons spinning svelte-1wqqdyg">sync</span>', x = y(), n = d("p"), n.textContent = "Verifying your email\u2026", c(e, "class", "icon-wrap svelte-1wqqdyg"), c(n, "class", "message svelte-1wqqdyg");
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
      function pi(t) {
        let e;
        function x(l, r) {
          return l[0] === "verifying" ? Di : l[0] === "success" ? Fi : Ai;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            e = d("main"), o.c(), c(e, "class", "svelte-1wqqdyg");
          },
          m(l, r) {
            T(l, e, r), o.m(e, null);
          },
          p(l, [r]) {
            n === (n = x(l)) && o ? o.p(l, r) : (o.d(1), o = n(l), o && (o.c(), o.m(e, null)));
          },
          i: Z,
          o: Z,
          d(l) {
            l && P(e), o.d();
          }
        };
      }
      function mi(t, e, x) {
        let { params: n = {} } = e, o = "verifying", l = null;
        M0(async () => {
          const a = n.token;
          if (!a) {
            x(1, l = "No verification token found in link."), x(0, o = "error");
            return;
          }
          try {
            await ms(a), x(0, o = "success");
          } catch (u) {
            x(1, l = u.message), x(0, o = "error");
          }
        });
        const r = () => i0("/login"), s = () => i0("/login");
        return t.$$set = (a) => {
          "params" in a && x(2, n = a.params);
        }, [
          o,
          l,
          n,
          r,
          s
        ];
      }
      class hi extends k0 {
        constructor(e) {
          super(), _0(this, e, mi, pi, m0, {
            params: 2
          });
        }
      }
      function vn(t, e, x) {
        const n = t.slice();
        n[8] = e[x], n[11] = x;
        const o = n[0].length - 1 - n[11];
        return n[9] = o, n;
      }
      function vi(t) {
        let e, x = D0([
          ...t[0]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = gn(vn(t, x, o));
        return {
          c() {
            e = d("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-l1q7u6");
          },
          m(o, l) {
            T(o, e, l);
            for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(e, null);
          },
          p(o, l) {
            if (l & 9) {
              x = D0([
                ...o[0]
              ].reverse());
              let r;
              for (r = 0; r < x.length; r += 1) {
                const s = vn(o, x, r);
                n[r] ? n[r].p(s, l) : (n[r] = gn(s), n[r].c(), n[r].m(e, null));
              }
              for (; r < n.length; r += 1) n[r].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), $0(n, o);
          }
        };
      }
      function _i(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "No notifications received yet.", c(e, "class", "muted svelte-l1q7u6");
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
      function _n(t) {
        let e;
        function x(l, r) {
          return l[8].labVerified ? bi : ki;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            e = d("div"), o.c(), c(e, "class", "alert-message svelte-l1q7u6");
          },
          m(l, r) {
            T(l, e, r), o.m(e, null);
          },
          p(l, r) {
            n === (n = x(l)) && o ? o.p(l, r) : (o.d(1), o = n(l), o && (o.c(), o.m(e, null)));
          },
          d(l) {
            l && P(e), o.d();
          }
        };
      }
      function ki(t) {
        let e, x = t[8].diseases.map(t[5]).join(", ") + "", n, o;
        return {
          c() {
            e = z("Someone you've interacted with reported testing positive for "), n = z(x), o = z(".");
          },
          m(l, r) {
            T(l, e, r), T(l, n, r), T(l, o, r);
          },
          p(l, r) {
            r & 1 && x !== (x = l[8].diseases.map(l[5]).join(", ") + "") && V(n, x);
          },
          d(l) {
            l && (P(e), P(n), P(o));
          }
        };
      }
      function bi(t) {
        let e, x = t[8].diseases.map(t[4]).join(", ") + "", n, o;
        return {
          c() {
            e = z("Someone you've interacted with has tested positive for "), n = z(x), o = z(".");
          },
          m(l, r) {
            T(l, e, r), T(l, n, r), T(l, o, r);
          },
          p(l, r) {
            r & 1 && x !== (x = l[8].diseases.map(l[4]).join(", ") + "") && V(n, x);
          },
          d(l) {
            l && (P(e), P(n), P(o));
          }
        };
      }
      function kn(t) {
        let e;
        return {
          c() {
            e = d("div"), e.textContent = "This result is self-reported.", c(e, "class", "unverified-note svelte-l1q7u6");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function bn(t) {
        let e, x, n;
        function o() {
          return t[7](t[9]);
        }
        return {
          c() {
            e = d("button"), e.textContent = "Mark viewed", c(e, "class", "btn-text svelte-l1q7u6");
          },
          m(l, r) {
            T(l, e, r), x || (n = H(e, "click", o), x = true);
          },
          p(l, r) {
            t = l;
          },
          d(l) {
            l && P(e), x = false, n();
          }
        };
      }
      function gn(t) {
        let e, x, n, o, l = t[8].labVerified ? "warning_amber" : "info_outline", r, s, a, u, E, f, C, A, F, B = wn(t[8].testDate) + "", p, m, h, b, D, v, _ = (t[8].diseases.length > 0 ? t[8].diseases.map(t[6]).join(", ") : "the relevant STI") + "", k, w, g, M, I = t[8].diseases.length > 0 && _n(t), S = !t[8].labVerified && kn(), L = !t[8].viewed && bn(t);
        return {
          c() {
            e = d("li"), x = d("div"), n = d("div"), o = d("span"), r = z(l), s = y(), a = d("div"), u = d("div"), u.textContent = "Health alert", E = y(), I && I.c(), f = y(), C = d("div"), A = z("Their sample was taken around "), F = d("strong"), p = z(B), m = z("."), h = y(), S && S.c(), b = y(), D = d("div"), v = z("Get tested for "), k = z(_), w = z(". Ask for a full STI panel."), g = y(), L && L.c(), M = y(), c(o, "class", "material-icons alert-icon svelte-l1q7u6"), n0(o, "verified", t[8].labVerified), n0(o, "unverified", !t[8].labVerified), c(u, "class", "alert-title svelte-l1q7u6"), n0(u, "verified", t[8].labVerified), n0(u, "unverified", !t[8].labVerified), c(C, "class", "alert-dates svelte-l1q7u6"), c(D, "class", "get-tested svelte-l1q7u6"), c(n, "class", "alert-meta svelte-l1q7u6"), c(x, "class", "alert-body svelte-l1q7u6"), c(e, "class", "svelte-l1q7u6"), n0(e, "unviewed", !t[8].viewed);
          },
          m(N, q) {
            T(N, e, q), i(e, x), i(x, n), i(n, o), i(o, r), i(n, s), i(n, a), i(a, u), i(a, E), I && I.m(a, null), i(a, f), i(a, C), i(C, A), i(C, F), i(F, p), i(C, m), i(a, h), S && S.m(a, null), i(a, b), i(a, D), i(D, v), i(D, k), i(D, w), i(x, g), L && L.m(x, null), i(e, M);
          },
          p(N, q) {
            q & 1 && l !== (l = N[8].labVerified ? "warning_amber" : "info_outline") && V(r, l), q & 1 && n0(o, "verified", N[8].labVerified), q & 1 && n0(o, "unverified", !N[8].labVerified), q & 1 && n0(u, "verified", N[8].labVerified), q & 1 && n0(u, "unverified", !N[8].labVerified), N[8].diseases.length > 0 ? I ? I.p(N, q) : (I = _n(N), I.c(), I.m(a, f)) : I && (I.d(1), I = null), q & 1 && B !== (B = wn(N[8].testDate) + "") && V(p, B), N[8].labVerified ? S && (S.d(1), S = null) : S || (S = kn(), S.c(), S.m(a, b)), q & 1 && _ !== (_ = (N[8].diseases.length > 0 ? N[8].diseases.map(N[6]).join(", ") : "the relevant STI") + "") && V(k, _), N[8].viewed ? L && (L.d(1), L = null) : L ? L.p(N, q) : (L = bn(N), L.c(), L.m(x, null)), q & 1 && n0(e, "unviewed", !N[8].viewed);
          },
          d(N) {
            N && P(e), I && I.d(), S && S.d(), L && L.d();
          }
        };
      }
      function gi(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C = t[1] ? "hourglass_empty" : "refresh", A, F, B = t[1] ? "Checking\u2026" : "Check now", p, m, h, b, D, v, _;
        e = new ee({});
        function k(M, I) {
          return M[0].length === 0 && !M[1] ? _i : vi;
        }
        let w = k(t), g = w(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), o = d("div"), o.innerHTML = '<h1 class="svelte-l1q7u6">Alerts</h1>', l = y(), r = d("section"), s = d("div"), a = d("h2"), a.textContent = "Notification history", u = y(), E = d("button"), f = d("span"), A = z(C), F = y(), p = z(B), m = y(), g.c(), h = y(), b = d("p"), b.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, c(o, "class", "page-header svelte-l1q7u6"), c(a, "class", "svelte-l1q7u6"), c(f, "class", "material-icons svelte-l1q7u6"), c(E, "class", "btn-refresh svelte-l1q7u6"), E.disabled = t[1], c(s, "class", "card-header svelte-l1q7u6"), c(r, "class", "card svelte-l1q7u6"), c(b, "class", "privacy-note svelte-l1q7u6"), c(n, "class", "svelte-l1q7u6");
          },
          m(M, I) {
            y0(e, M, I), T(M, x, I), T(M, n, I), i(n, o), i(n, l), i(n, r), i(r, s), i(s, a), i(s, u), i(s, E), i(E, f), i(f, A), i(E, F), i(E, p), i(r, m), g.m(r, null), i(n, h), i(n, b), D = true, v || (_ = H(E, "click", t[2]), v = true);
          },
          p(M, [I]) {
            (!D || I & 2) && C !== (C = M[1] ? "hourglass_empty" : "refresh") && V(A, C), (!D || I & 2) && B !== (B = M[1] ? "Checking\u2026" : "Check now") && V(p, B), (!D || I & 2) && (E.disabled = M[1]), w === (w = k(M)) && g ? g.p(M, I) : (g.d(1), g = w(M), g && (g.c(), g.m(r, null)));
          },
          i(M) {
            D || (F0(e.$$.fragment, M), D = true);
          },
          o(M) {
            v0(e.$$.fragment, M), D = false;
          },
          d(M) {
            M && (P(x), P(n)), P0(e, M), g.d(), v = false, _();
          }
        };
      }
      function wn(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function wi(t, e, x) {
        let n = [], o = false;
        M0(() => {
          if (!O0()) {
            sa("/alerts"), i0("/login");
            return;
          }
          x(0, n = Lx());
        });
        async function l() {
          x(1, o = true);
          try {
            await xl();
          } catch {
          } finally {
            x(0, n = Lx()), x(1, o = false);
          }
        }
        async function r(f) {
          await Xs(f), x(0, n = Lx());
        }
        return [
          n,
          o,
          l,
          r,
          (f) => Le[f] ?? f,
          (f) => Le[f] ?? f,
          (f) => Le[f] ?? f,
          (f) => r(f)
        ];
      }
      class yi extends k0 {
        constructor(e) {
          super(), _0(this, e, wi, gi, m0, {});
        }
      }
      var Pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function Ti(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
      }
      var Ae = {}, Si = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
      }, tl = {}, H0 = {};
      let Bt;
      const Mi = [
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
      H0.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17;
      };
      H0.getSymbolTotalCodewords = function(e) {
        return Mi[e];
      };
      H0.getBCHDigit = function(t) {
        let e = 0;
        for (; t !== 0; ) e++, t >>>= 1;
        return e;
      };
      H0.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        Bt = e;
      };
      H0.isKanjiModeEnabled = function() {
        return typeof Bt < "u";
      };
      H0.toSJIS = function(e) {
        return Bt(e);
      };
      var gx = {};
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
      })(gx);
      function nl() {
        this.buffer = [], this.length = 0;
      }
      nl.prototype = {
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
      var Ii = nl;
      function Ke(t) {
        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
      }
      Ke.prototype.set = function(t, e, x, n) {
        const o = t * this.size + e;
        this.data[o] = x, n && (this.reservedBit[o] = true);
      };
      Ke.prototype.get = function(t, e) {
        return this.data[t * this.size + e];
      };
      Ke.prototype.xor = function(t, e, x) {
        this.data[t * this.size + e] ^= x;
      };
      Ke.prototype.isReserved = function(t, e) {
        return this.reservedBit[t * this.size + e];
      };
      var Li = Ke, ol = {};
      (function(t) {
        const e = H0.getSymbolSize;
        t.getRowColCoords = function(n) {
          if (n === 1) return [];
          const o = Math.floor(n / 7) + 2, l = e(n), r = l === 145 ? 26 : Math.ceil((l - 13) / (2 * o - 2)) * 2, s = [
            l - 7
          ];
          for (let a = 1; a < o - 1; a++) s[a] = s[a - 1] - r;
          return s.push(6), s.reverse();
        }, t.getPositions = function(n) {
          const o = [], l = t.getRowColCoords(n), r = l.length;
          for (let s = 0; s < r; s++) for (let a = 0; a < r; a++) s === 0 && a === 0 || s === 0 && a === r - 1 || s === r - 1 && a === 0 || o.push([
            l[s],
            l[a]
          ]);
          return o;
        };
      })(ol);
      var ll = {};
      const Ni = H0.getSymbolSize, yn = 7;
      ll.getPositions = function(e) {
        const x = Ni(e);
        return [
          [
            0,
            0
          ],
          [
            x - yn,
            0
          ],
          [
            0,
            x - yn
          ]
        ];
      };
      var rl = {};
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
          let r = 0, s = 0, a = 0, u = null, E = null;
          for (let f = 0; f < l; f++) {
            s = a = 0, u = E = null;
            for (let C = 0; C < l; C++) {
              let A = o.get(f, C);
              A === u ? s++ : (s >= 5 && (r += e.N1 + (s - 5)), u = A, s = 1), A = o.get(C, f), A === E ? a++ : (a >= 5 && (r += e.N1 + (a - 5)), E = A, a = 1);
            }
            s >= 5 && (r += e.N1 + (s - 5)), a >= 5 && (r += e.N1 + (a - 5));
          }
          return r;
        }, t.getPenaltyN2 = function(o) {
          const l = o.size;
          let r = 0;
          for (let s = 0; s < l - 1; s++) for (let a = 0; a < l - 1; a++) {
            const u = o.get(s, a) + o.get(s, a + 1) + o.get(s + 1, a) + o.get(s + 1, a + 1);
            (u === 4 || u === 0) && r++;
          }
          return r * e.N2;
        }, t.getPenaltyN3 = function(o) {
          const l = o.size;
          let r = 0, s = 0, a = 0;
          for (let u = 0; u < l; u++) {
            s = a = 0;
            for (let E = 0; E < l; E++) s = s << 1 & 2047 | o.get(u, E), E >= 10 && (s === 1488 || s === 93) && r++, a = a << 1 & 2047 | o.get(E, u), E >= 10 && (a === 1488 || a === 93) && r++;
          }
          return r * e.N3;
        }, t.getPenaltyN4 = function(o) {
          let l = 0;
          const r = o.data.length;
          for (let a = 0; a < r; a++) l += o.data[a];
          return Math.abs(Math.ceil(l * 100 / r / 5) - 10) * e.N4;
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
          const r = l.size;
          for (let s = 0; s < r; s++) for (let a = 0; a < r; a++) l.isReserved(a, s) || l.xor(a, s, x(o, a, s));
        }, t.getBestMask = function(o, l) {
          const r = Object.keys(t.Patterns).length;
          let s = 0, a = 1 / 0;
          for (let u = 0; u < r; u++) {
            l(u), t.applyMask(u, o);
            const E = t.getPenaltyN1(o) + t.getPenaltyN2(o) + t.getPenaltyN3(o) + t.getPenaltyN4(o);
            t.applyMask(u, o), E < a && (a = E, s = u);
          }
          return s;
        };
      })(rl);
      var wx = {};
      const re = gx, Ze = [
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
      ], $e = [
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
      wx.getBlocksCount = function(e, x) {
        switch (x) {
          case re.L:
            return Ze[(e - 1) * 4 + 0];
          case re.M:
            return Ze[(e - 1) * 4 + 1];
          case re.Q:
            return Ze[(e - 1) * 4 + 2];
          case re.H:
            return Ze[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      wx.getTotalCodewordsCount = function(e, x) {
        switch (x) {
          case re.L:
            return $e[(e - 1) * 4 + 0];
          case re.M:
            return $e[(e - 1) * 4 + 1];
          case re.Q:
            return $e[(e - 1) * 4 + 2];
          case re.H:
            return $e[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      var sl = {}, yx = {};
      const Ne = new Uint8Array(512), Cx = new Uint8Array(256);
      (function() {
        let e = 1;
        for (let x = 0; x < 255; x++) Ne[x] = e, Cx[e] = x, e <<= 1, e & 256 && (e ^= 285);
        for (let x = 255; x < 512; x++) Ne[x] = Ne[x - 255];
      })();
      yx.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return Cx[e];
      };
      yx.exp = function(e) {
        return Ne[e];
      };
      yx.mul = function(e, x) {
        return e === 0 || x === 0 ? 0 : Ne[Cx[e] + Cx[x]];
      };
      (function(t) {
        const e = yx;
        t.mul = function(n, o) {
          const l = new Uint8Array(n.length + o.length - 1);
          for (let r = 0; r < n.length; r++) for (let s = 0; s < o.length; s++) l[r + s] ^= e.mul(n[r], o[s]);
          return l;
        }, t.mod = function(n, o) {
          let l = new Uint8Array(n);
          for (; l.length - o.length >= 0; ) {
            const r = l[0];
            for (let a = 0; a < o.length; a++) l[a] ^= e.mul(o[a], r);
            let s = 0;
            for (; s < l.length && l[s] === 0; ) s++;
            l = l.slice(s);
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
      })(sl);
      const al = sl;
      function Ct(t) {
        this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
      }
      Ct.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = al.generateECPolynomial(this.degree);
      };
      Ct.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const x = new Uint8Array(e.length + this.degree);
        x.set(e);
        const n = al.mod(x, this.genPoly), o = this.degree - n.length;
        if (o > 0) {
          const l = new Uint8Array(this.degree);
          return l.set(n, o), l;
        }
        return n;
      };
      var zi = Ct, il = {}, ae = {}, At = {};
      At.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
      var xe = {};
      const cl = "[0-9]+", qi = "[A-Z $%*+\\-./:]+";
      let Oe = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      Oe = Oe.replace(/u/g, "\\u");
      const Ri = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Oe + `)(?:.|[\r
]))+`;
      xe.KANJI = new RegExp(Oe, "g");
      xe.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      xe.BYTE = new RegExp(Ri, "g");
      xe.NUMERIC = new RegExp(cl, "g");
      xe.ALPHANUMERIC = new RegExp(qi, "g");
      const Oi = new RegExp("^" + Oe + "$"), Hi = new RegExp("^" + cl + "$"), Ui = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      xe.testKanji = function(e) {
        return Oi.test(e);
      };
      xe.testNumeric = function(e) {
        return Hi.test(e);
      };
      xe.testAlphanumeric = function(e) {
        return Ui.test(e);
      };
      (function(t) {
        const e = At, x = xe;
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
        }, t.getCharCountIndicator = function(l, r) {
          if (!l.ccBits) throw new Error("Invalid mode: " + l);
          if (!e.isValid(r)) throw new Error("Invalid version: " + r);
          return r >= 1 && r < 10 ? l.ccBits[0] : r < 27 ? l.ccBits[1] : l.ccBits[2];
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
        t.from = function(l, r) {
          if (t.isValid(l)) return l;
          try {
            return n(l);
          } catch {
            return r;
          }
        };
      })(ae);
      (function(t) {
        const e = H0, x = wx, n = gx, o = ae, l = At, r = 7973, s = e.getBCHDigit(r);
        function a(C, A, F) {
          for (let B = 1; B <= 40; B++) if (A <= t.getCapacity(B, F, C)) return B;
        }
        function u(C, A) {
          return o.getCharCountIndicator(C, A) + 4;
        }
        function E(C, A) {
          let F = 0;
          return C.forEach(function(B) {
            const p = u(B.mode, A);
            F += p + B.getBitsLength();
          }), F;
        }
        function f(C, A) {
          for (let F = 1; F <= 40; F++) if (E(C, F) <= t.getCapacity(F, A, o.MIXED)) return F;
        }
        t.from = function(A, F) {
          return l.isValid(A) ? parseInt(A, 10) : F;
        }, t.getCapacity = function(A, F, B) {
          if (!l.isValid(A)) throw new Error("Invalid QR Code version");
          typeof B > "u" && (B = o.BYTE);
          const p = e.getSymbolTotalCodewords(A), m = x.getTotalCodewordsCount(A, F), h = (p - m) * 8;
          if (B === o.MIXED) return h;
          const b = h - u(B, A);
          switch (B) {
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
        }, t.getBestVersionForData = function(A, F) {
          let B;
          const p = n.from(F, n.M);
          if (Array.isArray(A)) {
            if (A.length > 1) return f(A, p);
            if (A.length === 0) return 1;
            B = A[0];
          } else B = A;
          return a(B.mode, B.getLength(), p);
        }, t.getEncodedBits = function(A) {
          if (!l.isValid(A) || A < 7) throw new Error("Invalid QR Code version");
          let F = A << 12;
          for (; e.getBCHDigit(F) - s >= 0; ) F ^= r << e.getBCHDigit(F) - s;
          return A << 12 | F;
        };
      })(il);
      var ul = {};
      const Zx = H0, El = 1335, ji = 21522, Pn = Zx.getBCHDigit(El);
      ul.getEncodedBits = function(e, x) {
        const n = e.bit << 3 | x;
        let o = n << 10;
        for (; Zx.getBCHDigit(o) - Pn >= 0; ) o ^= El << Zx.getBCHDigit(o) - Pn;
        return (n << 10 | o) ^ ji;
      };
      var fl = {};
      const Vi = ae;
      function be(t) {
        this.mode = Vi.NUMERIC, this.data = t.toString();
      }
      be.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
      };
      be.prototype.getLength = function() {
        return this.data.length;
      };
      be.prototype.getBitsLength = function() {
        return be.getBitsLength(this.data.length);
      };
      be.prototype.write = function(e) {
        let x, n, o;
        for (x = 0; x + 3 <= this.data.length; x += 3) n = this.data.substr(x, 3), o = parseInt(n, 10), e.put(o, 10);
        const l = this.data.length - x;
        l > 0 && (n = this.data.substr(x), o = parseInt(n, 10), e.put(o, l * 3 + 1));
      };
      var Gi = be;
      const Ki = ae, zx = [
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
      function ge(t) {
        this.mode = Ki.ALPHANUMERIC, this.data = t;
      }
      ge.getBitsLength = function(e) {
        return 11 * Math.floor(e / 2) + 6 * (e % 2);
      };
      ge.prototype.getLength = function() {
        return this.data.length;
      };
      ge.prototype.getBitsLength = function() {
        return ge.getBitsLength(this.data.length);
      };
      ge.prototype.write = function(e) {
        let x;
        for (x = 0; x + 2 <= this.data.length; x += 2) {
          let n = zx.indexOf(this.data[x]) * 45;
          n += zx.indexOf(this.data[x + 1]), e.put(n, 11);
        }
        this.data.length % 2 && e.put(zx.indexOf(this.data[x]), 6);
      };
      var Yi = ge;
      const Ji = ae;
      function we(t) {
        this.mode = Ji.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
      }
      we.getBitsLength = function(e) {
        return e * 8;
      };
      we.prototype.getLength = function() {
        return this.data.length;
      };
      we.prototype.getBitsLength = function() {
        return we.getBitsLength(this.data.length);
      };
      we.prototype.write = function(t) {
        for (let e = 0, x = this.data.length; e < x; e++) t.put(this.data[e], 8);
      };
      var Qi = we;
      const Wi = ae, Xi = H0;
      function ye(t) {
        this.mode = Wi.KANJI, this.data = t;
      }
      ye.getBitsLength = function(e) {
        return e * 13;
      };
      ye.prototype.getLength = function() {
        return this.data.length;
      };
      ye.prototype.getBitsLength = function() {
        return ye.getBitsLength(this.data.length);
      };
      ye.prototype.write = function(t) {
        let e;
        for (e = 0; e < this.data.length; e++) {
          let x = Xi.toSJIS(this.data[e]);
          if (x >= 33088 && x <= 40956) x -= 33088;
          else if (x >= 57408 && x <= 60351) x -= 49472;
          else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
          x = (x >>> 8 & 255) * 192 + (x & 255), t.put(x, 13);
        }
      };
      var Zi = ye, dl = {
        exports: {}
      };
      (function(t) {
        var e = {
          single_source_shortest_paths: function(x, n, o) {
            var l = {}, r = {};
            r[n] = 0;
            var s = e.PriorityQueue.make();
            s.push(n, 0);
            for (var a, u, E, f, C, A, F, B, p; !s.empty(); ) {
              a = s.pop(), u = a.value, f = a.cost, C = x[u] || {};
              for (E in C) C.hasOwnProperty(E) && (A = C[E], F = f + A, B = r[E], p = typeof r[E] > "u", (p || B > F) && (r[E] = F, s.push(E, F), l[E] = u));
            }
            if (typeof o < "u" && typeof r[o] > "u") {
              var m = [
                "Could not find a path from ",
                n,
                " to ",
                o,
                "."
              ].join("");
              throw new Error(m);
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
      })(dl);
      var $i = dl.exports;
      (function(t) {
        const e = ae, x = Gi, n = Yi, o = Qi, l = Zi, r = xe, s = H0, a = $i;
        function u(m) {
          return unescape(encodeURIComponent(m)).length;
        }
        function E(m, h, b) {
          const D = [];
          let v;
          for (; (v = m.exec(b)) !== null; ) D.push({
            data: v[0],
            index: v.index,
            mode: h,
            length: v[0].length
          });
          return D;
        }
        function f(m) {
          const h = E(r.NUMERIC, e.NUMERIC, m), b = E(r.ALPHANUMERIC, e.ALPHANUMERIC, m);
          let D, v;
          return s.isKanjiModeEnabled() ? (D = E(r.BYTE, e.BYTE, m), v = E(r.KANJI, e.KANJI, m)) : (D = E(r.BYTE_KANJI, e.BYTE, m), v = []), h.concat(b, D, v).sort(function(k, w) {
            return k.index - w.index;
          }).map(function(k) {
            return {
              data: k.data,
              mode: k.mode,
              length: k.length
            };
          });
        }
        function C(m, h) {
          switch (h) {
            case e.NUMERIC:
              return x.getBitsLength(m);
            case e.ALPHANUMERIC:
              return n.getBitsLength(m);
            case e.KANJI:
              return l.getBitsLength(m);
            case e.BYTE:
              return o.getBitsLength(m);
          }
        }
        function A(m) {
          return m.reduce(function(h, b) {
            const D = h.length - 1 >= 0 ? h[h.length - 1] : null;
            return D && D.mode === b.mode ? (h[h.length - 1].data += b.data, h) : (h.push(b), h);
          }, []);
        }
        function F(m) {
          const h = [];
          for (let b = 0; b < m.length; b++) {
            const D = m[b];
            switch (D.mode) {
              case e.NUMERIC:
                h.push([
                  D,
                  {
                    data: D.data,
                    mode: e.ALPHANUMERIC,
                    length: D.length
                  },
                  {
                    data: D.data,
                    mode: e.BYTE,
                    length: D.length
                  }
                ]);
                break;
              case e.ALPHANUMERIC:
                h.push([
                  D,
                  {
                    data: D.data,
                    mode: e.BYTE,
                    length: D.length
                  }
                ]);
                break;
              case e.KANJI:
                h.push([
                  D,
                  {
                    data: D.data,
                    mode: e.BYTE,
                    length: u(D.data)
                  }
                ]);
                break;
              case e.BYTE:
                h.push([
                  {
                    data: D.data,
                    mode: e.BYTE,
                    length: u(D.data)
                  }
                ]);
            }
          }
          return h;
        }
        function B(m, h) {
          const b = {}, D = {
            start: {}
          };
          let v = [
            "start"
          ];
          for (let _ = 0; _ < m.length; _++) {
            const k = m[_], w = [];
            for (let g = 0; g < k.length; g++) {
              const M = k[g], I = "" + _ + g;
              w.push(I), b[I] = {
                node: M,
                lastCount: 0
              }, D[I] = {};
              for (let S = 0; S < v.length; S++) {
                const L = v[S];
                b[L] && b[L].node.mode === M.mode ? (D[L][I] = C(b[L].lastCount + M.length, M.mode) - C(b[L].lastCount, M.mode), b[L].lastCount += M.length) : (b[L] && (b[L].lastCount = M.length), D[L][I] = C(M.length, M.mode) + 4 + e.getCharCountIndicator(M.mode, h));
              }
            }
            v = w;
          }
          for (let _ = 0; _ < v.length; _++) D[v[_]].end = 0;
          return {
            map: D,
            table: b
          };
        }
        function p(m, h) {
          let b;
          const D = e.getBestModeForData(m);
          if (b = e.from(h, D), b !== e.BYTE && b.bit < D.bit) throw new Error('"' + m + '" cannot be encoded with mode ' + e.toString(b) + `.
 Suggested mode is: ` + e.toString(D));
          switch (b === e.KANJI && !s.isKanjiModeEnabled() && (b = e.BYTE), b) {
            case e.NUMERIC:
              return new x(m);
            case e.ALPHANUMERIC:
              return new n(m);
            case e.KANJI:
              return new l(m);
            case e.BYTE:
              return new o(m);
          }
        }
        t.fromArray = function(h) {
          return h.reduce(function(b, D) {
            return typeof D == "string" ? b.push(p(D, null)) : D.data && b.push(p(D.data, D.mode)), b;
          }, []);
        }, t.fromString = function(h, b) {
          const D = f(h, s.isKanjiModeEnabled()), v = F(D), _ = B(v, b), k = a.find_path(_.map, "start", "end"), w = [];
          for (let g = 1; g < k.length - 1; g++) w.push(_.table[k[g]].node);
          return t.fromArray(A(w));
        }, t.rawSplit = function(h) {
          return t.fromArray(f(h, s.isKanjiModeEnabled()));
        };
      })(fl);
      const Px = H0, qx = gx, e9 = Ii, x9 = Li, t9 = ol, n9 = ll, $x = rl, et = wx, o9 = zi, Ax = il, l9 = ul, r9 = ae, Rx = fl;
      function s9(t, e) {
        const x = t.size, n = n9.getPositions(e);
        for (let o = 0; o < n.length; o++) {
          const l = n[o][0], r = n[o][1];
          for (let s = -1; s <= 7; s++) if (!(l + s <= -1 || x <= l + s)) for (let a = -1; a <= 7; a++) r + a <= -1 || x <= r + a || (s >= 0 && s <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (s === 0 || s === 6) || s >= 2 && s <= 4 && a >= 2 && a <= 4 ? t.set(l + s, r + a, true, true) : t.set(l + s, r + a, false, true));
        }
      }
      function a9(t) {
        const e = t.size;
        for (let x = 8; x < e - 8; x++) {
          const n = x % 2 === 0;
          t.set(x, 6, n, true), t.set(6, x, n, true);
        }
      }
      function i9(t, e) {
        const x = t9.getPositions(e);
        for (let n = 0; n < x.length; n++) {
          const o = x[n][0], l = x[n][1];
          for (let r = -2; r <= 2; r++) for (let s = -2; s <= 2; s++) r === -2 || r === 2 || s === -2 || s === 2 || r === 0 && s === 0 ? t.set(o + r, l + s, true, true) : t.set(o + r, l + s, false, true);
        }
      }
      function c9(t, e) {
        const x = t.size, n = Ax.getEncodedBits(e);
        let o, l, r;
        for (let s = 0; s < 18; s++) o = Math.floor(s / 3), l = s % 3 + x - 8 - 3, r = (n >> s & 1) === 1, t.set(o, l, r, true), t.set(l, o, r, true);
      }
      function Ox(t, e, x) {
        const n = t.size, o = l9.getEncodedBits(e, x);
        let l, r;
        for (l = 0; l < 15; l++) r = (o >> l & 1) === 1, l < 6 ? t.set(l, 8, r, true) : l < 8 ? t.set(l + 1, 8, r, true) : t.set(n - 15 + l, 8, r, true), l < 8 ? t.set(8, n - l - 1, r, true) : l < 9 ? t.set(8, 15 - l - 1 + 1, r, true) : t.set(8, 15 - l - 1, r, true);
        t.set(n - 8, 8, 1, true);
      }
      function u9(t, e) {
        const x = t.size;
        let n = -1, o = x - 1, l = 7, r = 0;
        for (let s = x - 1; s > 0; s -= 2) for (s === 6 && s--; ; ) {
          for (let a = 0; a < 2; a++) if (!t.isReserved(o, s - a)) {
            let u = false;
            r < e.length && (u = (e[r] >>> l & 1) === 1), t.set(o, s - a, u), l--, l === -1 && (r++, l = 7);
          }
          if (o += n, o < 0 || x <= o) {
            o -= n, n = -n;
            break;
          }
        }
      }
      function E9(t, e, x) {
        const n = new e9();
        x.forEach(function(a) {
          n.put(a.mode.bit, 4), n.put(a.getLength(), r9.getCharCountIndicator(a.mode, t)), a.write(n);
        });
        const o = Px.getSymbolTotalCodewords(t), l = et.getTotalCodewordsCount(t, e), r = (o - l) * 8;
        for (n.getLengthInBits() + 4 <= r && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
        const s = (r - n.getLengthInBits()) / 8;
        for (let a = 0; a < s; a++) n.put(a % 2 ? 17 : 236, 8);
        return f9(n, t, e);
      }
      function f9(t, e, x) {
        const n = Px.getSymbolTotalCodewords(e), o = et.getTotalCodewordsCount(e, x), l = n - o, r = et.getBlocksCount(e, x), s = n % r, a = r - s, u = Math.floor(n / r), E = Math.floor(l / r), f = E + 1, C = u - E, A = new o9(C);
        let F = 0;
        const B = new Array(r), p = new Array(r);
        let m = 0;
        const h = new Uint8Array(t.buffer);
        for (let k = 0; k < r; k++) {
          const w = k < a ? E : f;
          B[k] = h.slice(F, F + w), p[k] = A.encode(B[k]), F += w, m = Math.max(m, w);
        }
        const b = new Uint8Array(n);
        let D = 0, v, _;
        for (v = 0; v < m; v++) for (_ = 0; _ < r; _++) v < B[_].length && (b[D++] = B[_][v]);
        for (v = 0; v < C; v++) for (_ = 0; _ < r; _++) b[D++] = p[_][v];
        return b;
      }
      function d9(t, e, x, n) {
        let o;
        if (Array.isArray(t)) o = Rx.fromArray(t);
        else if (typeof t == "string") {
          let u = e;
          if (!u) {
            const E = Rx.rawSplit(t);
            u = Ax.getBestVersionForData(E, x);
          }
          o = Rx.fromString(t, u || 40);
        } else throw new Error("Invalid data");
        const l = Ax.getBestVersionForData(o, x);
        if (!l) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = l;
        else if (e < l) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + l + `.
`);
        const r = E9(e, x, o), s = Px.getSymbolSize(e), a = new x9(s);
        return s9(a, e), a9(a), i9(a, e), Ox(a, x, 0), e >= 7 && c9(a, e), u9(a, r), isNaN(n) && (n = $x.getBestMask(a, Ox.bind(null, a, x))), $x.applyMask(n, a), Ox(a, x, n), {
          modules: a,
          version: e,
          errorCorrectionLevel: x,
          maskPattern: n,
          segments: o
        };
      }
      tl.create = function(e, x) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let n = qx.M, o, l;
        return typeof x < "u" && (n = qx.from(x.errorCorrectionLevel, qx.M), o = Ax.from(x.version), l = $x.from(x.maskPattern), x.toSJISFunc && Px.setToSJISFunction(x.toSJISFunc)), d9(e, o, n, l);
      };
      var Bl = {}, Ft = {};
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
          const o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, l = n.width && n.width >= 21 ? n.width : void 0, r = n.scale || 4;
          return {
            width: l,
            scale: l ? 4 : r,
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
          const r = o.modules.size, s = o.modules.data, a = t.getScale(r, l), u = Math.floor((r + l.margin * 2) * a), E = l.margin * a, f = [
            l.color.light,
            l.color.dark
          ];
          for (let C = 0; C < u; C++) for (let A = 0; A < u; A++) {
            let F = (C * u + A) * 4, B = l.color.light;
            if (C >= E && A >= E && C < u - E && A < u - E) {
              const p = Math.floor((C - E) / a), m = Math.floor((A - E) / a);
              B = f[s[p * r + m] ? 1 : 0];
            }
            n[F++] = B.r, n[F++] = B.g, n[F++] = B.b, n[F] = B.a;
          }
        };
      })(Ft);
      (function(t) {
        const e = Ft;
        function x(o, l, r) {
          o.clearRect(0, 0, l.width, l.height), l.style || (l.style = {}), l.height = r, l.width = r, l.style.height = r + "px", l.style.width = r + "px";
        }
        function n() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        t.render = function(l, r, s) {
          let a = s, u = r;
          typeof a > "u" && (!r || !r.getContext) && (a = r, r = void 0), r || (u = n()), a = e.getOptions(a);
          const E = e.getImageWidth(l.modules.size, a), f = u.getContext("2d"), C = f.createImageData(E, E);
          return e.qrToImageData(C.data, l, a), x(f, u, E), f.putImageData(C, 0, 0), u;
        }, t.renderToDataURL = function(l, r, s) {
          let a = s;
          typeof a > "u" && (!r || !r.getContext) && (a = r, r = void 0), a || (a = {});
          const u = t.render(l, r, a), E = a.type || "image/png", f = a.rendererOpts || {};
          return u.toDataURL(E, f.quality);
        };
      })(Bl);
      var Cl = {};
      const B9 = Ft;
      function Tn(t, e) {
        const x = t.a / 255, n = e + '="' + t.hex + '"';
        return x < 1 ? n + " " + e + '-opacity="' + x.toFixed(2).slice(1) + '"' : n;
      }
      function Hx(t, e, x) {
        let n = t + e;
        return typeof x < "u" && (n += " " + x), n;
      }
      function C9(t, e, x) {
        let n = "", o = 0, l = false, r = 0;
        for (let s = 0; s < t.length; s++) {
          const a = Math.floor(s % e), u = Math.floor(s / e);
          !a && !l && (l = true), t[s] ? (r++, s > 0 && a > 0 && t[s - 1] || (n += l ? Hx("M", a + x, 0.5 + u + x) : Hx("m", o, 0), o = 0, l = false), a + 1 < e && t[s + 1] || (n += Hx("h", r), r = 0)) : o++;
        }
        return n;
      }
      Cl.render = function(e, x, n) {
        const o = B9.getOptions(x), l = e.modules.size, r = e.modules.data, s = l + o.margin * 2, a = o.color.light.a ? "<path " + Tn(o.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "", u = "<path " + Tn(o.color.dark, "stroke") + ' d="' + C9(r, l, o.margin) + '"/>', E = 'viewBox="0 0 ' + s + " " + s + '"', C = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + E + ' shape-rendering="crispEdges">' + a + u + `</svg>
`;
        return typeof n == "function" && n(null, C), C;
      };
      const A9 = Si, xt = tl, Al = Bl, F9 = Cl;
      function Dt(t, e, x, n, o) {
        const l = [].slice.call(arguments, 1), r = l.length, s = typeof l[r - 1] == "function";
        if (!s && !A9()) throw new Error("Callback required as last argument");
        if (s) {
          if (r < 2) throw new Error("Too few arguments provided");
          r === 2 ? (o = x, x = e, e = n = void 0) : r === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = x, x = e, e = void 0));
        } else {
          if (r < 1) throw new Error("Too few arguments provided");
          return r === 1 ? (x = e, e = n = void 0) : r === 2 && !e.getContext && (n = x, x = e, e = void 0), new Promise(function(a, u) {
            try {
              const E = xt.create(x, n);
              a(t(E, e, n));
            } catch (E) {
              u(E);
            }
          });
        }
        try {
          const a = xt.create(x, n);
          o(null, t(a, e, n));
        } catch (a) {
          o(a);
        }
      }
      Ae.create = xt.create;
      Ae.toCanvas = Dt.bind(null, Al.render);
      Ae.toDataURL = Dt.bind(null, Al.renderToDataURL);
      Ae.toString = Dt.bind(null, function(t, e, x) {
        return F9.render(t, x);
      });
      function D9(t) {
        let e, x, n, o, l, r, s, a = t[0].isHost ? "You started this group" : "Group encounter", u, E, f, C = zn(t[0].date) + "", A, F, B, p, m = t[0].isHost && t[13](), h, b, D, v, _, k, w, g, M, I, S = t[3] && Sn(t), L = t[10] && Mn(t);
        function N(O, W) {
          return O[5] ? h9 : m9;
        }
        let q = N(t), U = q(t), R = m && Ln(t), j = t[8] && Nn(t);
        function Q(O, W) {
          return O[4] ? b9 : k9;
        }
        let K = Q(t), G = K(t);
        return {
          c() {
            S && S.c(), e = y(), L && L.c(), x = y(), n = d("section"), o = d("div"), l = d("span"), l.textContent = "groups", r = y(), s = d("span"), u = z(a), E = y(), f = d("p"), A = z(C), F = y(), B = d("section"), U.c(), p = y(), R && R.c(), h = y(), b = d("section"), D = d("div"), D.innerHTML = '<span class="material-icons privacy-icon svelte-atconr">lock_outline</span> <p class="privacy-text svelte-atconr">Your note is stored encrypted and never shared.</p>', v = y(), _ = d("textarea"), k = y(), j && j.c(), w = y(), g = d("section"), G.c(), c(l, "class", "material-icons status-icon svelte-atconr"), c(s, "class", "status-label svelte-atconr"), c(o, "class", "status-row svelte-atconr"), c(f, "class", "date svelte-atconr"), c(n, "class", "card pad svelte-atconr"), c(B, "class", "card svelte-atconr"), c(D, "class", "privacy-row svelte-atconr"), c(_, "placeholder", "Add a private note\u2026"), c(_, "rows", "5"), c(_, "class", "svelte-atconr"), c(b, "class", "card pad svelte-atconr"), c(g, "class", "card svelte-atconr");
          },
          m(O, W) {
            S && S.m(O, W), T(O, e, W), L && L.m(O, W), T(O, x, W), T(O, n, W), i(n, o), i(o, l), i(o, r), i(o, s), i(s, u), i(n, E), i(n, f), i(f, A), T(O, F, W), T(O, B, W), U.m(B, null), T(O, p, W), R && R.m(O, W), T(O, h, W), T(O, b, W), i(b, D), i(b, v), i(b, _), x0(_, t[7]), i(b, k), j && j.m(b, null), T(O, w, W), T(O, g, W), G.m(g, null), M || (I = [
              H(_, "input", t[25]),
              H(_, "input", t[17])
            ], M = true);
          },
          p(O, W) {
            O[3] ? S ? S.p(O, W) : (S = Sn(O), S.c(), S.m(e.parentNode, e)) : S && (S.d(1), S = null), O[10] ? L ? L.p(O, W) : (L = Mn(O), L.c(), L.m(x.parentNode, x)) : L && (L.d(1), L = null), W[0] & 1 && a !== (a = O[0].isHost ? "You started this group" : "Group encounter") && V(u, a), W[0] & 1 && C !== (C = zn(O[0].date) + "") && V(A, C), q === (q = N(O)) && U ? U.p(O, W) : (U.d(1), U = q(O), U && (U.c(), U.m(B, null))), W[0] & 1 && (m = O[0].isHost && O[13]()), m ? R ? R.p(O, W) : (R = Ln(O), R.c(), R.m(h.parentNode, h)) : R && (R.d(1), R = null), W[0] & 128 && x0(_, O[7]), O[8] ? j ? j.p(O, W) : (j = Nn(O), j.c(), j.m(b, null)) : j && (j.d(1), j = null), K === (K = Q(O)) && G ? G.p(O, W) : (G.d(1), G = K(O), G && (G.c(), G.m(g, null)));
          },
          d(O) {
            O && (P(e), P(x), P(n), P(F), P(B), P(p), P(h), P(b), P(w), P(g)), S && S.d(O), L && L.d(O), U.d(), R && R.d(O), j && j.d(), G.d(), M = false, l0(I);
          }
        };
      }
      function p9(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-atconr">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-atconr">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-atconr");
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
      function Sn(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = y(), o = z(t[3]), c(x, "class", "material-icons svelte-atconr"), c(e, "class", "toast error-toast svelte-atconr");
          },
          m(l, r) {
            T(l, e, r), i(e, x), i(e, n), i(e, o);
          },
          p(l, r) {
            r[0] & 8 && V(o, l[3]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Mn(t) {
        let e, x, n, o, l, r, s, a, u, E = t[9] ? "Saving\u2026" : "Save note", f, C, A;
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "You have unsaved changes to your note.", n = y(), o = d("div"), l = d("button"), l.textContent = "Keep editing", r = y(), s = d("button"), s.textContent = "Discard", a = y(), u = d("button"), f = z(E), c(x, "class", "confirm-text svelte-atconr"), c(l, "class", "btn-text svelte-atconr"), c(s, "class", "btn-text danger svelte-atconr"), c(u, "class", "btn-filled-sm svelte-atconr"), u.disabled = t[9], c(o, "class", "confirm-actions svelte-atconr"), c(e, "class", "card pad leave-confirm svelte-atconr");
          },
          m(F, B) {
            T(F, e, B), i(e, x), i(e, n), i(e, o), i(o, l), i(o, r), i(o, s), i(o, a), i(o, u), i(u, f), C || (A = [
              H(l, "click", t[23]),
              H(s, "click", t[20]),
              H(u, "click", t[19])
            ], C = true);
          },
          p(F, B) {
            B[0] & 512 && E !== (E = F[9] ? "Saving\u2026" : "Save note") && V(f, E), B[0] & 512 && (u.disabled = F[9]);
          },
          d(F) {
            F && P(e), C = false, l0(A);
          }
        };
      }
      function m9(t) {
        let e, x, n, o, l = (t[0].name ? t[0].name : "Add group name") + "", r, s, a, u, E, f, C = t[0].name && In();
        return {
          c() {
            e = d("button"), x = d("span"), x.textContent = "edit", n = y(), o = d("span"), r = z(l), s = y(), C && C.c(), a = y(), u = d("span"), u.textContent = "chevron_right", c(x, "class", "material-icons action-icon svelte-atconr"), c(o, "class", "action-label svelte-atconr"), c(u, "class", "material-icons action-chevron svelte-atconr"), c(e, "class", "action-row svelte-atconr");
          },
          m(A, F) {
            T(A, e, F), i(e, x), i(e, n), i(e, o), i(o, r), i(o, s), C && C.m(o, null), i(e, a), i(e, u), E || (f = H(e, "click", t[14]), E = true);
          },
          p(A, F) {
            F[0] & 1 && l !== (l = (A[0].name ? A[0].name : "Add group name") + "") && V(r, l), A[0].name ? C || (C = In(), C.c(), C.m(o, null)) : C && (C.d(1), C = null);
          },
          d(A) {
            A && P(e), C && C.d(), E = false, f();
          }
        };
      }
      function h9(t) {
        let e, x, n, o, l, r, s, a, u, E, f = t[2] ? "Saving\u2026" : "Save", C, A, F;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "edit", n = y(), o = d("form"), l = d("input"), r = y(), s = d("div"), a = d("button"), a.textContent = "Cancel", u = y(), E = d("button"), C = z(f), c(x, "class", "material-icons action-icon svelte-atconr"), c(l, "type", "text"), c(l, "placeholder", "Optional group name"), c(l, "maxlength", "64"), l.autofocus = true, c(l, "class", "svelte-atconr"), c(a, "type", "button"), c(a, "class", "btn-text svelte-atconr"), c(E, "type", "submit"), c(E, "class", "btn-filled-sm svelte-atconr"), E.disabled = t[2], c(s, "class", "name-actions svelte-atconr"), c(o, "class", "name-form svelte-atconr"), c(e, "class", "action-row edit-row svelte-atconr");
          },
          m(B, p) {
            T(B, e, p), i(e, x), i(e, n), i(e, o), i(o, l), x0(l, t[6]), i(o, r), i(o, s), i(s, a), i(s, u), i(s, E), i(E, C), l.focus(), A || (F = [
              H(l, "input", t[24]),
              H(a, "click", t[15]),
              H(o, "submit", ne(t[16]))
            ], A = true);
          },
          p(B, p) {
            p[0] & 64 && l.value !== B[6] && x0(l, B[6]), p[0] & 4 && f !== (f = B[2] ? "Saving\u2026" : "Save") && V(C, f), p[0] & 4 && (E.disabled = B[2]);
          },
          d(B) {
            B && P(e), A = false, l0(F);
          }
        };
      }
      function In(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Tap to change", c(e, "class", "action-sub svelte-atconr");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Ln(t) {
        let e, x, n, o, l;
        function r(u, E) {
          return u[11] ? _9 : v9;
        }
        let s = r(t), a = s(t);
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Show this QR for others to join", n = y(), a.c(), o = y(), l = d("p"), l.textContent = "Valid for 24 hours from when you created the group.", c(x, "class", "qr-label svelte-atconr"), c(l, "class", "qr-hint svelte-atconr"), c(e, "class", "card pad qr-card svelte-atconr");
          },
          m(u, E) {
            T(u, e, E), i(e, x), i(e, n), a.m(e, null), i(e, o), i(e, l);
          },
          p(u, E) {
            s === (s = r(u)) && a ? a.p(u, E) : (a.d(1), a = s(u), a && (a.c(), a.m(e, o)));
          },
          d(u) {
            u && P(e), a.d();
          }
        };
      }
      function v9(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Generating QR\u2026", c(e, "class", "muted svelte-atconr");
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
        let e;
        return {
          c() {
            e = d("div"), c(e, "class", "qr-wrap svelte-atconr");
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
      function Nn(t) {
        let e, x, n = t[9] ? "Saving\u2026" : "Save", o, l, r;
        return {
          c() {
            e = d("div"), x = d("button"), o = z(n), c(x, "class", "btn-filled-sm svelte-atconr"), x.disabled = t[9], c(e, "class", "note-actions svelte-atconr");
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(x, o), l || (r = H(x, "click", t[18]), l = true);
          },
          p(s, a) {
            a[0] & 512 && n !== (n = s[9] ? "Saving\u2026" : "Save") && V(o, n), a[0] & 512 && (x.disabled = s[9]);
          },
          d(s) {
            s && P(e), l = false, r();
          }
        };
      }
      function k9(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-atconr">delete_outline</span> <span class="action-label danger svelte-atconr">Delete group encounter</span>', c(e, "class", "action-row svelte-atconr");
          },
          m(o, l) {
            T(o, e, l), x || (n = H(e, "click", t[27]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function b9(t) {
        let e, x, n, o, l, r, s, a = t[2] ? "Deleting\u2026" : "Delete", u, E, f;
        return {
          c() {
            e = d("div"), x = d("p"), x.textContent = "Delete this group encounter? This cannot be undone.", n = y(), o = d("div"), l = d("button"), l.textContent = "Cancel", r = y(), s = d("button"), u = z(a), c(x, "class", "confirm-text svelte-atconr"), c(l, "class", "btn-text svelte-atconr"), c(s, "class", "btn-danger-sm svelte-atconr"), s.disabled = t[2], c(o, "class", "confirm-actions svelte-atconr"), c(e, "class", "confirm-row svelte-atconr");
          },
          m(C, A) {
            T(C, e, A), i(e, x), i(e, n), i(e, o), i(o, l), i(o, r), i(o, s), i(s, u), E || (f = [
              H(l, "click", t[26]),
              H(s, "click", t[21])
            ], E = true);
          },
          p(C, A) {
            A[0] & 4 && a !== (a = C[2] ? "Deleting\u2026" : "Delete") && V(u, a), A[0] & 4 && (s.disabled = C[2]);
          },
          d(C) {
            C && P(e), E = false, l0(f);
          }
        };
      }
      function g9(t) {
        let e, x, n, o, l, r, s, a = (t[1] ? "Group not found" : t[12]) + "", u, E, f;
        e = new ee({});
        function C(B, p) {
          if (B[1]) return p9;
          if (B[0]) return D9;
        }
        let A = C(t), F = A && A(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), o = d("div"), l = d("a"), l.innerHTML = '<span class="material-icons svelte-atconr">arrow_back</span>', r = y(), s = d("h1"), u = z(a), E = y(), F && F.c(), c(l, "class", "back-btn svelte-atconr"), c(l, "href", "#/encounters"), c(s, "class", "svelte-atconr"), c(o, "class", "page-header svelte-atconr"), c(n, "class", "svelte-atconr");
          },
          m(B, p) {
            y0(e, B, p), T(B, x, p), T(B, n, p), i(n, o), i(o, l), i(o, r), i(o, s), i(s, u), i(n, E), F && F.m(n, null), f = true;
          },
          p(B, p) {
            (!f || p[0] & 4098) && a !== (a = (B[1] ? "Group not found" : B[12]) + "") && V(u, a), A === (A = C(B)) && F ? F.p(B, p) : (F && F.d(1), F = A && A(B), F && (F.c(), F.m(n, null)));
          },
          i(B) {
            f || (F0(e.$$.fragment, B), f = true);
          },
          o(B) {
            v0(e.$$.fragment, B), f = false;
          },
          d(B) {
            B && (P(x), P(n)), P0(e, B), F && F.d();
          }
        };
      }
      function zn(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function w9(t, e, x) {
        let n, { params: o = {} } = e, l = null, r = false, s = false, a = null, u = false, E = false, f = "", C = "", A = false, F = false, B = false, p = null, m = null;
        M0(() => {
          if (!O0()) {
            i0("/login");
            return;
          }
          D(), document.addEventListener("click", b, {
            capture: true
          }), window.addEventListener("beforeunload", h);
        }), px(() => {
          document.removeEventListener("click", b, {
            capture: true
          }), window.removeEventListener("beforeunload", h);
        });
        function h(O) {
          A && (O.preventDefault(), O.returnValue = "");
        }
        function b(O) {
          if (!A) return;
          const W = O.target.closest('a[href^="#/"]');
          W && (O.preventDefault(), O.stopImmediatePropagation(), p = W.getAttribute("href").slice(1), x(10, B = true));
        }
        function D() {
          const O = o.tokenHex;
          if (x(0, l = Zo().find((W) => e0(W.token) === O) ?? null), !l) {
            x(1, r = true);
            return;
          }
          x(7, C = l.note ?? ""), l.isHost && _() && k();
        }
        function v() {
          return e0(l.token);
        }
        function _() {
          return l ? Math.floor(Date.now() / 1e3) - l.createdAt < 86400 : false;
        }
        async function k() {
          le();
          const O = Math.floor(Date.now() / 1e3), W = rs(v(), O, e0(l.hostContactId), l.name);
          try {
            x(11, m = await Ae.toString(W, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#1a1a1a",
                light: "#ffffff"
              }
            }));
          } catch (Y) {
            x(3, a = "Could not render QR code: " + Y.message);
          }
        }
        function w() {
          x(6, f = l.name ?? ""), x(5, E = true), x(3, a = null);
        }
        function g() {
          x(5, E = false), x(3, a = null);
        }
        async function M() {
          if (!s) {
            x(2, s = true), x(3, a = null);
            try {
              const O = f.trim() || null;
              await Mt(v(), {
                name: O
              }), D(), x(5, E = false);
            } catch (O) {
              x(3, a = O.message);
            } finally {
              x(2, s = false);
            }
          }
        }
        function I() {
          x(8, A = C !== (l.note ?? ""));
        }
        async function S() {
          if (!(!A || F)) {
            x(9, F = true), x(3, a = null);
            try {
              const O = C.trim() || null;
              await Mt(v(), {
                note: O
              }), D(), x(8, A = false);
            } catch (O) {
              x(3, a = O.message);
            } finally {
              x(9, F = false);
            }
          }
        }
        async function L() {
          await S(), a || q();
        }
        function N() {
          x(7, C = l.note ?? ""), x(8, A = false), q();
        }
        function q() {
          x(10, B = false), i0(p);
        }
        async function U() {
          if (!s) {
            x(2, s = true), x(3, a = null);
            try {
              await Js(v()), i0("/encounters");
            } catch (O) {
              x(3, a = O.message), x(2, s = false);
            }
          }
        }
        const R = () => x(10, B = false);
        function j() {
          f = this.value, x(6, f);
        }
        function Q() {
          C = this.value, x(7, C);
        }
        const K = () => x(4, u = false), G = () => x(4, u = true);
        return t.$$set = (O) => {
          "params" in O && x(22, o = O.params);
        }, t.$$.update = () => {
          t.$$.dirty[0] & 1 && x(12, n = l?.name || "Group encounter");
        }, [
          l,
          r,
          s,
          a,
          u,
          E,
          f,
          C,
          A,
          F,
          B,
          m,
          n,
          _,
          w,
          g,
          M,
          I,
          S,
          L,
          N,
          U,
          o,
          R,
          j,
          Q,
          K,
          G
        ];
      }
      class y9 extends k0 {
        constructor(e) {
          super(), _0(this, e, w9, g9, m0, {
            params: 22
          }, null, [
            -1,
            -1
          ]);
        }
      }
      async function P9(t) {
        const e = X0();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const x = e.encounters.map((E) => ({
          raw_token: e0(E.rawToken),
          date: E.date,
          their_contact_id: e0(E.theirContactId)
        })), n = (e.relationships || []).map((E) => ({
          raw_token: e0(E.rawToken),
          date: E.createdAt,
          their_contact_id: e0(E.theirContactId)
        })), o = (e.results || []).map((E) => {
          const f = {};
          for (const C of Z0) f[C] = E.positiveDiseases.includes(C) ? "positive" : "negative";
          return {
            test_date: E.date,
            result_json: JSON.stringify({
              panel: f,
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
          contact_id: e0(e.myContactId),
          encounters: [
            ...x,
            ...n
          ],
          test_results: o
        })), r = je(16), s = await te(t, r), a = Ve(s, l);
        s.fill(0);
        const u = new Uint8Array(16 + a.length);
        return u.set(r, 0), u.set(a, 16), u;
      }
      const T9 = "peachsafe-backup";
      function qn(t, e, x) {
        const n = t.slice();
        return n[55] = e[x], n;
      }
      function Rn(t, e, x) {
        const n = t.slice();
        return n[58] = e[x], n;
      }
      function S9(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p, m, h, b, D, v, _ = t[4] ? "verified_user" : "shield", k, w, g = t[4] ? "Enabled" : "Disabled", M, I, S, L, N, q, U, R, j, Q, K, G, O, W, Y, r0, f0, c0, a0, u0, J0, X, t0, s0, A0, p0;
        function U0($, E0) {
          return $[25] ? N9 : L9;
        }
        let N0 = U0(t), b0 = N0(t);
        function w0($, E0) {
          if ($[20] === "idle") return H9;
          if ($[20] === "entering_pin") return O9;
          if ($[20] === "exporting") return R9;
          if ($[20] === "done") return q9;
          if ($[20] === "error") return z9;
        }
        let R0 = w0(t), d0 = R0 && R0(t);
        function o0($, E0) {
          return $[4] ? j9 : U9;
        }
        let Q0 = o0(t), W0 = Q0(t);
        function Ye($, E0) {
          return $[4] ? V9 : G9;
        }
        let ie = Ye(t), z0 = ie(t);
        function pt($, E0) {
          return $[3] ? X9 : W9;
        }
        let Je = pt(t), oe = Je(t), q0 = t[18] && Kn(t);
        return {
          c() {
            e = d("section"), x = d("div"), n = d("div"), n.innerHTML = '<h2 class="svelte-13eph4">Appearance</h2> <p class="hint svelte-13eph4">Choose your preferred color scheme.</p>', o = y(), l = d("div"), r = d("button"), r.textContent = "Light", s = y(), a = d("button"), a.textContent = "Dark", u = y(), E = d("section"), f = d("h2"), f.textContent = "Export to mobile", C = y(), b0.c(), A = y(), d0 && d0.c(), F = y(), B = d("section"), p = d("div"), m = d("div"), h = d("h2"), h.textContent = "Two-factor authentication", b = y(), D = d("span"), v = d("span"), k = z(_), w = y(), M = z(g), I = y(), S = d("p"), W0.c(), L = y(), z0.c(), N = y(), q = d("section"), U = d("div"), R = d("div"), j = d("h2"), j.textContent = "Email", Q = y(), K = d("div"), G = d("span"), O = z(t[2]), W = y(), oe.c(), Y = y(), r0 = d("a"), r0.textContent = "Change email", f0 = y(), c0 = d("section"), c0.innerHTML = '<div class="row svelte-13eph4"><div class="svelte-13eph4"><h2 class="svelte-13eph4">Password</h2> <p class="hint svelte-13eph4">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-13eph4">Change password</a></div>', a0 = y(), u0 = d("section"), J0 = d("div"), J0.innerHTML = '<h2 class="svelte-13eph4">Delete account</h2> <p class="hint svelte-13eph4">Permanently delete your account and all data stored on the server. This cannot be undone.</p>', X = y(), q0 && q0.c(), t0 = y(), s0 = d("button"), s0.textContent = "Delete account", c(n, "class", "svelte-13eph4"), c(r, "class", "theme-btn svelte-13eph4"), n0(r, "active", t[24] === "light"), c(a, "class", "theme-btn svelte-13eph4"), n0(a, "active", t[24] === "dark"), c(l, "class", "theme-toggle svelte-13eph4"), c(x, "class", "row svelte-13eph4"), c(e, "class", "card svelte-13eph4"), c(f, "class", "svelte-13eph4"), c(E, "class", "card svelte-13eph4"), c(h, "class", "svelte-13eph4"), c(v, "class", "material-icons svelte-13eph4"), c(D, "class", "status-badge svelte-13eph4"), n0(D, "enabled", t[4]), n0(D, "disabled", !t[4]), c(m, "class", "totp-heading svelte-13eph4"), c(S, "class", "hint svelte-13eph4"), c(B, "class", "card svelte-13eph4"), c(j, "class", "svelte-13eph4"), c(G, "class", "hint email-value svelte-13eph4"), c(K, "class", "email-meta svelte-13eph4"), c(R, "class", "svelte-13eph4"), c(r0, "href", "#/change-email"), c(r0, "class", "btn-outline-sm svelte-13eph4"), c(U, "class", "row svelte-13eph4"), c(q, "class", "card svelte-13eph4"), c(c0, "class", "card svelte-13eph4"), c(s0, "class", "btn-danger svelte-13eph4"), c(u0, "class", "card danger-card svelte-13eph4");
          },
          m($, E0) {
            T($, e, E0), i(e, x), i(x, n), i(x, o), i(x, l), i(l, r), i(l, s), i(l, a), T($, u, E0), T($, E, E0), i(E, f), i(E, C), b0.m(E, null), i(E, A), d0 && d0.m(E, null), T($, F, E0), T($, B, E0), i(B, p), i(p, m), i(m, h), i(m, b), i(m, D), i(D, v), i(v, k), i(D, w), i(D, M), i(p, I), i(p, S), W0.m(S, null), i(B, L), z0.m(B, null), T($, N, E0), T($, q, E0), i(q, U), i(U, R), i(R, j), i(R, Q), i(R, K), i(K, G), i(G, O), i(K, W), oe.m(K, null), i(U, Y), i(U, r0), T($, f0, E0), T($, c0, E0), T($, a0, E0), T($, u0, E0), i(u0, J0), i(u0, X), q0 && q0.m(u0, null), i(u0, t0), i(u0, s0), A0 || (p0 = [
              H(r, "click", t[34]),
              H(a, "click", t[35]),
              H(s0, "click", t[44])
            ], A0 = true);
          },
          p($, E0) {
            E0[0] & 16777216 && n0(r, "active", $[24] === "light"), E0[0] & 16777216 && n0(a, "active", $[24] === "dark"), N0 !== (N0 = U0($)) && (b0.d(1), b0 = N0($), b0 && (b0.c(), b0.m(E, A))), R0 === (R0 = w0($)) && d0 ? d0.p($, E0) : (d0 && d0.d(1), d0 = R0 && R0($), d0 && (d0.c(), d0.m(E, null))), E0[0] & 16 && _ !== (_ = $[4] ? "verified_user" : "shield") && V(k, _), E0[0] & 16 && g !== (g = $[4] ? "Enabled" : "Disabled") && V(M, g), E0[0] & 16 && n0(D, "enabled", $[4]), E0[0] & 16 && n0(D, "disabled", !$[4]), Q0 !== (Q0 = o0($)) && (W0.d(1), W0 = Q0($), W0 && (W0.c(), W0.m(S, null))), ie === (ie = Ye($)) && z0 ? z0.p($, E0) : (z0.d(1), z0 = ie($), z0 && (z0.c(), z0.m(B, null))), E0[0] & 4 && V(O, $[2]), Je !== (Je = pt($)) && (oe.d(1), oe = Je($), oe && (oe.c(), oe.m(K, null))), $[18] ? q0 ? q0.p($, E0) : (q0 = Kn($), q0.c(), q0.m(u0, t0)) : q0 && (q0.d(1), q0 = null);
          },
          d($) {
            $ && (P(e), P(u), P(E), P(F), P(B), P(N), P(q), P(f0), P(c0), P(a0), P(u0)), b0.d(), d0 && d0.d(), W0.d(), z0.d(), oe.d(), q0 && q0.d(), A0 = false, l0(p0);
          }
        };
      }
      function M9(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[1]), c(e, "class", "error svelte-13eph4");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2 && V(x, n[1]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function I9(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Loading\u2026", c(e, "class", "muted svelte-13eph4");
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
      function L9(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", c(e, "class", "hint svelte-13eph4");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function N9(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", c(e, "class", "hint warning svelte-13eph4");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function z9(t) {
        let e, x, n, o, l, r;
        return {
          c() {
            e = d("p"), x = z(t[23]), n = y(), o = d("button"), o.textContent = "Try again", c(e, "class", "error svelte-13eph4"), c(o, "class", "btn-ghost svelte-13eph4");
          },
          m(s, a) {
            T(s, e, a), i(e, x), T(s, n, a), T(s, o, a), l || (r = H(o, "click", t[30]), l = true);
          },
          p(s, a) {
            a[0] & 8388608 && V(x, s[23]);
          },
          d(s) {
            s && (P(e), P(n), P(o)), l = false, r();
          }
        };
      }
      function q9(t) {
        let e, x, n, o, l;
        return {
          c() {
            e = d("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, x = y(), n = d("button"), n.textContent = "Done", c(e, "class", "hint svelte-13eph4"), c(n, "class", "btn-ghost svelte-13eph4");
          },
          m(r, s) {
            T(r, e, s), T(r, x, s), T(r, n, s), o || (l = H(n, "click", t[30]), o = true);
          },
          p: Z,
          d(r) {
            r && (P(e), P(x), P(n)), o = false, l();
          }
        };
      }
      function R9(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Encrypting\u2026", c(e, "class", "hint svelte-13eph4");
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
      function O9(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p, m, h, b = t[23] && On(t);
        return {
          c() {
            e = d("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", x = y(), n = d("div"), o = d("label"), l = z(`PIN
            `), r = d("input"), s = y(), a = d("label"), u = z(`Confirm PIN
            `), E = d("input"), f = y(), b && b.c(), C = y(), A = d("div"), F = d("button"), F.textContent = "Download backup", B = y(), p = d("button"), p.textContent = "Cancel", c(e, "class", "hint svelte-13eph4"), c(r, "type", "password"), c(r, "inputmode", "numeric"), c(r, "maxlength", "6"), c(r, "placeholder", "6 digits"), c(r, "autocomplete", "new-password"), c(E, "type", "password"), c(E, "inputmode", "numeric"), c(E, "maxlength", "6"), c(E, "placeholder", "6 digits"), c(E, "autocomplete", "new-password"), c(F, "class", "btn-primary svelte-13eph4"), c(p, "class", "btn-ghost svelte-13eph4"), c(A, "class", "export-actions svelte-13eph4"), c(n, "class", "export-form svelte-13eph4");
          },
          m(D, v) {
            T(D, e, v), T(D, x, v), T(D, n, v), i(n, o), i(o, l), i(o, r), x0(r, t[21]), i(n, s), i(n, a), i(a, u), i(a, E), x0(E, t[22]), i(n, f), b && b.m(n, null), i(n, C), i(n, A), i(A, F), i(A, B), i(A, p), m || (h = [
              H(r, "input", t[37]),
              H(E, "input", t[38]),
              H(F, "click", t[29]),
              H(p, "click", t[30])
            ], m = true);
          },
          p(D, v) {
            v[0] & 2097152 && r.value !== D[21] && x0(r, D[21]), v[0] & 4194304 && E.value !== D[22] && x0(E, D[22]), D[23] ? b ? b.p(D, v) : (b = On(D), b.c(), b.m(n, C)) : b && (b.d(1), b = null);
          },
          d(D) {
            D && (P(e), P(x), P(n)), b && b.d(), m = false, l0(h);
          }
        };
      }
      function H9(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.textContent = "Export data for mobile app", c(e, "class", "btn-primary svelte-13eph4");
          },
          m(o, l) {
            T(o, e, l), x || (n = H(e, "click", t[36]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function On(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[23]), c(e, "class", "error svelte-13eph4");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 8388608 && V(x, n[23]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function U9(t) {
        let e;
        return {
          c() {
            e = z("Add an extra layer of security by requiring an authenticator code at login.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function j9(t) {
        let e;
        return {
          c() {
            e = z("Your account requires a code from your authenticator app at login.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function V9(t) {
        let e, x, n, o, l, r, s, a = t[5] !== 1 ? "s" : "", u, E, f, C, A, F, B, p, m, h, b, D, v, _;
        function k(q, U) {
          return q[15].length > 0 ? Y9 : K9;
        }
        let w = k(t), g = w(t), M = t[7] && jn(t);
        function I(q, U) {
          return q[6].length === 0 ? Q9 : J9;
        }
        let S = I(t), L = S(t), N = t[11] && Gn(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("span"), n.textContent = "key", o = y(), l = d("span"), r = z(t[5]), s = z(" backup code"), u = z(a), E = z(" remaining"), f = y(), g.c(), C = y(), A = d("div"), F = d("div"), F.innerHTML = '<span class="material-icons svelte-13eph4">devices</span> <span>Trusted devices</span>', B = y(), M && M.c(), p = y(), L.c(), m = y(), h = d("div"), N && N.c(), b = y(), D = d("button"), D.textContent = "Disable 2FA", c(n, "class", "material-icons svelte-13eph4"), c(x, "class", "backup-count svelte-13eph4"), c(e, "class", "backup-section svelte-13eph4"), c(F, "class", "backup-count svelte-13eph4"), c(A, "class", "backup-section svelte-13eph4"), c(D, "class", "btn-danger svelte-13eph4"), c(h, "class", "danger-zone svelte-13eph4");
          },
          m(q, U) {
            T(q, e, U), i(e, x), i(x, n), i(x, o), i(x, l), i(l, r), i(l, s), i(l, u), i(l, E), i(e, f), g.m(e, null), T(q, C, U), T(q, A, U), i(A, F), i(A, B), M && M.m(A, null), i(A, p), L.m(A, null), T(q, m, U), T(q, h, U), N && N.m(h, null), i(h, b), i(h, D), v || (_ = H(D, "click", t[43]), v = true);
          },
          p(q, U) {
            U[0] & 32 && V(r, q[5]), U[0] & 32 && a !== (a = q[5] !== 1 ? "s" : "") && V(u, a), w === (w = k(q)) && g ? g.p(q, U) : (g.d(1), g = w(q), g && (g.c(), g.m(e, null))), q[7] ? M ? M.p(q, U) : (M = jn(q), M.c(), M.m(A, p)) : M && (M.d(1), M = null), S === (S = I(q)) && L ? L.p(q, U) : (L.d(1), L = S(q), L && (L.c(), L.m(A, null))), q[11] ? N ? N.p(q, U) : (N = Gn(q), N.c(), N.m(h, b)) : N && (N.d(1), N = null);
          },
          d(q) {
            q && (P(e), P(C), P(A), P(m), P(h)), g.d(), M && M.d(), L.d(), N && N.d(), v = false, _();
          }
        };
      }
      function G9(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.textContent = "Enable 2FA", c(e, "class", "btn-primary svelte-13eph4");
          },
          m(o, l) {
            T(o, e, l), x || (n = H(e, "click", t[39]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function K9(t) {
        let e, x, n, o, l, r = t[14] && Hn(t);
        return {
          c() {
            r && r.c(), e = y(), x = d("button"), n = z("Regenerate backup codes"), c(x, "class", "btn-outline-sm svelte-13eph4"), x.disabled = t[13];
          },
          m(s, a) {
            r && r.m(s, a), T(s, e, a), T(s, x, a), i(x, n), o || (l = H(x, "click", t[41]), o = true);
          },
          p(s, a) {
            s[14] ? r ? r.p(s, a) : (r = Hn(s), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), a[0] & 8192 && (x.disabled = s[13]);
          },
          d(s) {
            s && (P(e), P(x)), r && r.d(s), o = false, l();
          }
        };
      }
      function Y9(t) {
        let e, x, n, o, l, r, s, a, u, E, f = D0(t[15]), C = [];
        for (let A = 0; A < f.length; A += 1) C[A] = Un(Rn(t, f, A));
        return {
          c() {
            e = d("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", x = y(), n = d("div");
            for (let A = 0; A < C.length; A += 1) C[A].c();
            o = y(), l = d("div"), r = d("button"), r.innerHTML = `<span class="material-icons svelte-13eph4">download</span>
                Download`, s = y(), a = d("button"), a.textContent = "Done", c(e, "class", "hint warning svelte-13eph4"), c(n, "class", "backup-grid"), c(r, "class", "btn-outline-sm dl-btn svelte-13eph4"), c(a, "class", "btn-outline-sm svelte-13eph4"), c(l, "class", "regen-code-actions svelte-13eph4");
          },
          m(A, F) {
            T(A, e, F), T(A, x, F), T(A, n, F);
            for (let B = 0; B < C.length; B += 1) C[B] && C[B].m(n, null);
            T(A, o, F), T(A, l, F), i(l, r), i(l, s), i(l, a), u || (E = [
              H(r, "click", t[40]),
              H(a, "click", t[32])
            ], u = true);
          },
          p(A, F) {
            if (F[0] & 32768) {
              f = D0(A[15]);
              let B;
              for (B = 0; B < f.length; B += 1) {
                const p = Rn(A, f, B);
                C[B] ? C[B].p(p, F) : (C[B] = Un(p), C[B].c(), C[B].m(n, null));
              }
              for (; B < C.length; B += 1) C[B].d(1);
              C.length = f.length;
            }
          },
          d(A) {
            A && (P(e), P(x), P(n), P(o), P(l)), $0(C, A), u = false, l0(E);
          }
        };
      }
      function Hn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[14]), c(e, "class", "error svelte-13eph4");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 16384 && V(x, n[14]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Un(t) {
        let e, x = t[58] + "", n;
        return {
          c() {
            e = d("code"), n = z(x), c(e, "class", "backup-code");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l[0] & 32768 && x !== (x = o[58] + "") && V(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function jn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[7]), c(e, "class", "error svelte-13eph4");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 128 && V(x, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function J9(t) {
        let e, x = [], n = /* @__PURE__ */ new Map(), o, l, r = t[8] ? "Revoking\u2026" : "Revoke all", s, a, u, E = D0(t[6]);
        const f = (C) => C[55].id;
        for (let C = 0; C < E.length; C += 1) {
          let A = qn(t, E, C), F = f(A);
          n.set(F, x[C] = Vn(F, A));
        }
        return {
          c() {
            e = d("ul");
            for (let C = 0; C < x.length; C += 1) x[C].c();
            o = y(), l = d("button"), s = z(r), c(e, "class", "device-list svelte-13eph4"), c(l, "class", "btn-outline-sm svelte-13eph4"), l.disabled = t[8];
          },
          m(C, A) {
            T(C, e, A);
            for (let F = 0; F < x.length; F += 1) x[F] && x[F].m(e, null);
            T(C, o, A), T(C, l, A), i(l, s), a || (u = H(l, "click", t[27]), a = true);
          },
          p(C, A) {
            A[0] & 67108928 && (E = D0(C[6]), x = wl(x, A, f, 1, C, E, n, e, gl, Vn, null, qn)), A[0] & 256 && r !== (r = C[8] ? "Revoking\u2026" : "Revoke all") && V(s, r), A[0] & 256 && (l.disabled = C[8]);
          },
          d(C) {
            C && (P(e), P(o), P(l));
            for (let A = 0; A < x.length; A += 1) x[A].d();
            a = false, u();
          }
        };
      }
      function Q9(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = 'No trusted devices. Check "Remember this device" at login to skip 2FA on this browser in future.', c(e, "class", "hint svelte-13eph4");
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
      function Vn(t, e) {
        let x, n, o = e[55].user_agent ? `${e[55].user_agent} \xB7 ` : "", l, r, s = $n(e[55].created_at) + "", a, u, E, f, C, A;
        function F() {
          return e[42](e[55]);
        }
        return {
          key: t,
          first: null,
          c() {
            x = d("li"), n = d("span"), l = z(o), r = z("Added "), a = z(s), u = y(), E = d("button"), E.textContent = "Revoke", f = y(), c(n, "class", "device-date svelte-13eph4"), c(E, "class", "btn-outline-sm svelte-13eph4"), c(x, "class", "device-item svelte-13eph4"), this.first = x;
          },
          m(B, p) {
            T(B, x, p), i(x, n), i(n, l), i(n, r), i(n, a), i(x, u), i(x, E), i(x, f), C || (A = H(E, "click", F), C = true);
          },
          p(B, p) {
            e = B, p[0] & 64 && o !== (o = e[55].user_agent ? `${e[55].user_agent} \xB7 ` : "") && V(l, o), p[0] & 64 && s !== (s = $n(e[55].created_at) + "") && V(a, s);
          },
          d(B) {
            B && P(x), C = false, A();
          }
        };
      }
      function Gn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[11]), c(e, "class", "error svelte-13eph4");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2048 && V(x, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function W9(t) {
        let e;
        return {
          c() {
            e = d("span"), e.innerHTML = `<span class="material-icons svelte-13eph4">warning</span>
                Unverified`, c(e, "class", "unverified-badge svelte-13eph4");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function X9(t) {
        let e;
        return {
          c() {
            e = d("span"), e.innerHTML = `<span class="material-icons svelte-13eph4">verified</span>
                Verified`, c(e, "class", "verified-badge svelte-13eph4");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Kn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[18]), c(e, "class", "error svelte-13eph4");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 262144 && V(x, n[18]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Yn(t) {
        let e, x, n, o, l, r, s, a, u, E = t[10] ? "Disabling\u2026" : "Yes, disable 2FA", f, C, A, F, B, p, m = t[11] && Jn(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("h2"), n.textContent = "Disable two-factor authentication?", o = y(), l = d("p"), l.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, r = y(), m && m.c(), s = y(), a = d("div"), u = d("button"), f = z(E), C = y(), A = d("button"), F = z("Cancel"), c(n, "id", "disable-title"), c(n, "class", "svelte-13eph4"), c(l, "class", "svelte-13eph4"), c(u, "class", "btn-danger svelte-13eph4"), u.disabled = t[10], c(A, "class", "btn-ghost svelte-13eph4"), A.disabled = t[10], c(a, "class", "dialog-actions svelte-13eph4"), c(x, "class", "dialog svelte-13eph4"), c(e, "class", "overlay svelte-13eph4"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "disable-title");
          },
          m(h, b) {
            T(h, e, b), i(e, x), i(x, n), i(x, o), i(x, l), i(x, r), m && m.m(x, null), i(x, s), i(x, a), i(a, u), i(u, f), i(a, C), i(a, A), i(A, F), B || (p = [
              H(u, "click", t[28]),
              H(A, "click", t[45])
            ], B = true);
          },
          p(h, b) {
            h[11] ? m ? m.p(h, b) : (m = Jn(h), m.c(), m.m(x, s)) : m && (m.d(1), m = null), b[0] & 1024 && E !== (E = h[10] ? "Disabling\u2026" : "Yes, disable 2FA") && V(f, E), b[0] & 1024 && (u.disabled = h[10]), b[0] & 1024 && (A.disabled = h[10]);
          },
          d(h) {
            h && P(e), m && m.d(), B = false, l0(p);
          }
        };
      }
      function Jn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[11]), c(e, "class", "error svelte-13eph4");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2048 && V(x, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Qn(t) {
        let e, x, n, o, l, r, s, a, u, E = t[13] ? "Regenerating\u2026" : "Regenerate", f, C, A, F, B, p, m = t[14] && Wn(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("h2"), n.textContent = "Regenerate backup codes?", o = y(), l = d("p"), l.textContent = "All existing backup codes will be permanently invalidated.", r = y(), m && m.c(), s = y(), a = d("div"), u = d("button"), f = z(E), C = y(), A = d("button"), F = z("Cancel"), c(n, "id", "regen-title"), c(n, "class", "svelte-13eph4"), c(l, "class", "svelte-13eph4"), c(u, "class", "btn-primary svelte-13eph4"), u.disabled = t[13], c(A, "class", "btn-ghost svelte-13eph4"), A.disabled = t[13], c(a, "class", "dialog-actions svelte-13eph4"), c(x, "class", "dialog svelte-13eph4"), c(e, "class", "overlay svelte-13eph4"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "regen-title");
          },
          m(h, b) {
            T(h, e, b), i(e, x), i(x, n), i(x, o), i(x, l), i(x, r), m && m.m(x, null), i(x, s), i(x, a), i(a, u), i(u, f), i(a, C), i(a, A), i(A, F), B || (p = [
              H(u, "click", t[31]),
              H(A, "click", t[46])
            ], B = true);
          },
          p(h, b) {
            h[14] ? m ? m.p(h, b) : (m = Wn(h), m.c(), m.m(x, s)) : m && (m.d(1), m = null), b[0] & 8192 && E !== (E = h[13] ? "Regenerating\u2026" : "Regenerate") && V(f, E), b[0] & 8192 && (u.disabled = h[13]), b[0] & 8192 && (A.disabled = h[13]);
          },
          d(h) {
            h && P(e), m && m.d(), B = false, l0(p);
          }
        };
      }
      function Wn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[14]), c(e, "class", "error svelte-13eph4");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 16384 && V(x, n[14]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Xn(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p = t[17] ? "Deleting\u2026" : "Yes, delete my account", m, h, b, D, v, _, k, w = t[18] && Zn(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("h2"), n.textContent = "Delete your account?", o = y(), l = d("p"), l.innerHTML = `This will permanently delete your account and all data stored on the server.
        <strong>There is no undo.</strong>`, r = y(), s = d("p"), s.textContent = "If you haven't already, export your data first so you can import it into the mobile app.", a = y(), u = d("label"), u.textContent = "Type your email address to confirm:", E = y(), f = d("input"), C = y(), w && w.c(), A = y(), F = d("div"), B = d("button"), m = z(p), b = y(), D = d("button"), v = z("Cancel"), c(n, "id", "delete-title"), c(n, "class", "svelte-13eph4"), c(l, "class", "svelte-13eph4"), c(s, "class", "hint svelte-13eph4"), c(u, "class", "confirm-label svelte-13eph4"), c(u, "for", "delete-confirm-input"), c(f, "id", "delete-confirm-input"), c(f, "class", "confirm-input svelte-13eph4"), c(f, "type", "text"), c(f, "placeholder", t[2]), c(f, "autocomplete", "off"), f.disabled = t[17], c(B, "class", "btn-danger svelte-13eph4"), B.disabled = h = t[17] || t[19] !== t[2], c(D, "class", "btn-ghost svelte-13eph4"), D.disabled = t[17], c(F, "class", "dialog-actions svelte-13eph4"), c(x, "class", "dialog svelte-13eph4"), c(e, "class", "overlay svelte-13eph4"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "delete-title");
          },
          m(g, M) {
            T(g, e, M), i(e, x), i(x, n), i(x, o), i(x, l), i(x, r), i(x, s), i(x, a), i(x, u), i(x, E), i(x, f), x0(f, t[19]), i(x, C), w && w.m(x, null), i(x, A), i(x, F), i(F, B), i(B, m), i(F, b), i(F, D), i(D, v), _ || (k = [
              H(f, "input", t[47]),
              H(B, "click", t[33]),
              H(D, "click", t[48])
            ], _ = true);
          },
          p(g, M) {
            M[0] & 4 && c(f, "placeholder", g[2]), M[0] & 131072 && (f.disabled = g[17]), M[0] & 524288 && f.value !== g[19] && x0(f, g[19]), g[18] ? w ? w.p(g, M) : (w = Zn(g), w.c(), w.m(x, A)) : w && (w.d(1), w = null), M[0] & 131072 && p !== (p = g[17] ? "Deleting\u2026" : "Yes, delete my account") && V(m, p), M[0] & 655364 && h !== (h = g[17] || g[19] !== g[2]) && (B.disabled = h), M[0] & 131072 && (D.disabled = g[17]);
          },
          d(g) {
            g && P(e), w && w.d(), _ = false, l0(k);
          }
        };
      }
      function Zn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[18]), c(e, "class", "error svelte-13eph4");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 262144 && V(x, n[18]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Z9(t) {
        let e, x, n, o, l, r, s, a, u, E;
        e = new ee({});
        function f(m, h) {
          return m[0] ? I9 : m[1] ? M9 : S9;
        }
        let C = f(t), A = C(t), F = t[9] && Yn(t), B = t[12] && Qn(t), p = t[16] && Xn(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), o = d("h1"), o.textContent = "Settings", l = y(), A.c(), r = y(), F && F.c(), s = y(), B && B.c(), a = y(), p && p.c(), u = K0(), c(o, "class", "svelte-13eph4"), c(n, "class", "svelte-13eph4");
          },
          m(m, h) {
            y0(e, m, h), T(m, x, h), T(m, n, h), i(n, o), i(n, l), A.m(n, null), T(m, r, h), F && F.m(m, h), T(m, s, h), B && B.m(m, h), T(m, a, h), p && p.m(m, h), T(m, u, h), E = true;
          },
          p(m, h) {
            C === (C = f(m)) && A ? A.p(m, h) : (A.d(1), A = C(m), A && (A.c(), A.m(n, null))), m[9] ? F ? F.p(m, h) : (F = Yn(m), F.c(), F.m(s.parentNode, s)) : F && (F.d(1), F = null), m[12] ? B ? B.p(m, h) : (B = Qn(m), B.c(), B.m(a.parentNode, a)) : B && (B.d(1), B = null), m[16] ? p ? p.p(m, h) : (p = Xn(m), p.c(), p.m(u.parentNode, u)) : p && (p.d(1), p = null);
          },
          i(m) {
            E || (F0(e.$$.fragment, m), E = true);
          },
          o(m) {
            v0(e.$$.fragment, m), E = false;
          },
          d(m) {
            m && (P(x), P(n), P(r), P(s), P(a), P(u)), P0(e, m), A.d(), F && F.d(m), B && B.d(m), p && p.d(m);
          }
        };
      }
      function $n(t) {
        return new Date(t * 1e3).toLocaleDateString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }
      function $9(t) {
        const e = t.join(`
`), x = new Blob([
          e
        ], {
          type: "text/plain"
        }), n = URL.createObjectURL(x), o = document.createElement("a");
        o.href = n, o.download = "backup-codes.txt", o.click(), URL.revokeObjectURL(n);
      }
      function ec(t, e, x) {
        let n, o, l, r, s, a, u;
        V0(t, Ie, (o0) => x(49, n = o0)), V0(t, Ex, (o0) => x(50, o = o0)), V0(t, Re, (o0) => x(51, l = o0)), V0(t, Ce, (o0) => x(52, r = o0)), V0(t, kx, (o0) => x(53, s = o0)), V0(t, xx, (o0) => x(24, a = o0)), V0(t, Yo, (o0) => x(25, u = o0));
        let E = true, f = null, C = "", A = false, F = false, B = 0, p = [], m = null, h = false, b = false, D = false, v = null, _ = false, k = false, w = null, g = [], M = false, I = false, S = null, L = "";
        M0(async () => {
          if (!O0()) {
            i0("/login");
            return;
          }
          await N();
        });
        async function N() {
          x(0, E = true), x(1, f = null);
          try {
            x(2, C = s ?? ""), x(3, A = r ?? false), x(4, F = l ?? false), F && (x(5, B = o ?? 0), x(6, p = n ?? []));
          } catch (o0) {
            x(1, f = o0.message);
          } finally {
            x(0, E = false);
          }
        }
        async function q(o0) {
          x(7, m = null);
          try {
            await gs(o0), x(6, p = p.filter((Q0) => Q0.id !== o0)), Ie.set(p), Ix(nx());
          } catch (Q0) {
            x(7, m = Q0.message);
          }
        }
        async function U() {
          x(7, m = null), x(8, h = true);
          try {
            await ws(), x(6, p = []), Ie.set([]), Ix(nx());
          } catch (o0) {
            x(7, m = o0.message);
          } finally {
            x(8, h = false);
          }
        }
        async function R() {
          x(11, v = null), x(10, D = true);
          try {
            await ks(), x(4, F = false), Re.set(false), x(5, B = 0), x(6, p = []), Ix(nx()), x(9, b = false);
          } catch (o0) {
            x(11, v = o0.message);
          } finally {
            x(10, D = false);
          }
        }
        let j = "idle", Q = "", K = "", G = null;
        async function O() {
          if (x(23, G = null), !/^\d{6}$/.test(Q)) {
            x(23, G = "PIN must be exactly 6 digits.");
            return;
          }
          if (Q !== K) {
            x(23, G = "PINs do not match.");
            return;
          }
          x(20, j = "exporting");
          try {
            const o0 = await P9(Q), Q0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), W0 = `${T9}-${Q0}.enc`, Ye = new Blob([
              o0
            ], {
              type: "application/octet-stream"
            }), ie = URL.createObjectURL(Ye), z0 = document.createElement("a");
            z0.href = ie, z0.download = W0, z0.click(), URL.revokeObjectURL(ie), x(20, j = "done");
          } catch (o0) {
            x(23, G = o0.message), x(20, j = "error");
          }
        }
        function W() {
          x(20, j = "idle"), x(21, Q = ""), x(22, K = ""), x(23, G = null);
        }
        async function Y() {
          x(14, w = null), x(13, k = true);
          try {
            const { backup_codes: o0 } = await bs();
            x(15, g = o0), x(5, B = o0.length), Ex.set(o0.length), x(12, _ = false);
          } catch (o0) {
            x(14, w = o0.message);
          } finally {
            x(13, k = false);
          }
        }
        function r0() {
          x(15, g = []);
        }
        async function f0() {
          x(18, S = null), x(17, I = true);
          try {
            await Ss(), i0("/login");
          } catch (o0) {
            x(18, S = o0.message);
          } finally {
            x(17, I = false);
          }
        }
        const c0 = () => vt(xx, a = "light", a), a0 = () => vt(xx, a = "dark", a), u0 = () => x(20, j = "entering_pin");
        function J0() {
          Q = this.value, x(21, Q);
        }
        function X() {
          K = this.value, x(22, K);
        }
        const t0 = () => i0("/settings/2fa-setup"), s0 = () => $9(g), A0 = () => {
          x(12, _ = true);
        }, p0 = (o0) => q(o0.id), U0 = () => {
          x(9, b = true);
        }, N0 = () => {
          x(16, M = true), x(19, L = "");
        }, b0 = () => {
          x(9, b = false), x(11, v = null);
        }, w0 = () => {
          x(12, _ = false), x(14, w = null);
        };
        function R0() {
          L = this.value, x(19, L);
        }
        return [
          E,
          f,
          C,
          A,
          F,
          B,
          p,
          m,
          h,
          b,
          D,
          v,
          _,
          k,
          w,
          g,
          M,
          I,
          S,
          L,
          j,
          Q,
          K,
          G,
          a,
          u,
          q,
          U,
          R,
          O,
          W,
          Y,
          r0,
          f0,
          c0,
          a0,
          u0,
          J0,
          X,
          t0,
          s0,
          A0,
          p0,
          U0,
          N0,
          b0,
          w0,
          R0,
          () => {
            x(16, M = false), x(18, S = null), x(19, L = "");
          }
        ];
      }
      class xc extends k0 {
        constructor(e) {
          super(), _0(this, e, ec, Z9, m0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function eo(t, e, x) {
        const n = t.slice();
        return n[12] = e[x], n;
      }
      function tc(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F = D0(t[4]), B = [];
        for (let p = 0; p < F.length; p += 1) B[p] = xo(eo(t, F, p));
        return {
          c() {
            e = d("div"), x = d("div"), x.innerHTML = '<span class="material-icons success-icon svelte-6iq55z">check_circle</span> <h1 class="svelte-6iq55z">2FA enabled \u2014 save your backup codes</h1>', n = y(), o = d("p"), o.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, l = y(), r = d("div");
            for (let p = 0; p < B.length; p += 1) B[p].c();
            s = y(), a = d("div"), u = d("button"), u.innerHTML = `<span class="material-icons svelte-6iq55z">download</span>
          Download as text file`, E = y(), f = d("button"), f.textContent = "I've saved my backup codes", c(x, "class", "codes-header svelte-6iq55z"), c(o, "class", "hint warning svelte-6iq55z"), c(r, "class", "backup-grid svelte-6iq55z"), c(u, "class", "btn-ghost svelte-6iq55z"), c(f, "class", "btn-primary svelte-6iq55z"), c(a, "class", "codes-actions svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(p, m) {
            T(p, e, m), i(e, x), i(e, n), i(e, o), i(e, l), i(e, r);
            for (let h = 0; h < B.length; h += 1) B[h] && B[h].m(r, null);
            i(e, s), i(e, a), i(a, u), i(a, E), i(a, f), C || (A = [
              H(u, "click", t[8]),
              H(f, "click", t[9])
            ], C = true);
          },
          p(p, m) {
            if (m & 16) {
              F = D0(p[4]);
              let h;
              for (h = 0; h < F.length; h += 1) {
                const b = eo(p, F, h);
                B[h] ? B[h].p(b, m) : (B[h] = xo(b), B[h].c(), B[h].m(r, null));
              }
              for (; h < B.length; h += 1) B[h].d(1);
              B.length = F.length;
            }
          },
          d(p) {
            p && P(e), $0(B, p), C = false, l0(A);
          }
        };
      }
      function nc(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p, m, h, b, D, v, _, k, w, g, M = t[5] ? "Verifying\u2026" : "Enable 2FA", I, S, L, N, q, U, R, j = t[6] && to(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("button"), n.innerHTML = '<span class="material-icons svelte-6iq55z">arrow_back</span>', o = y(), l = d("h1"), l.textContent = "Set up authenticator app", r = y(), s = d("p"), s.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, a = y(), u = d("div"), E = d("img"), C = y(), A = d("details"), F = d("summary"), F.textContent = "Can't scan? Enter the key manually", B = y(), p = d("code"), m = z(t[1]), h = y(), b = d("form"), D = d("label"), v = z(`Authenticator code
          `), _ = d("input"), k = y(), j && j.c(), w = y(), g = d("button"), I = z(M), L = y(), N = d("button"), q = z("Cancel"), c(n, "class", "back-btn svelte-6iq55z"), c(n, "type", "button"), c(l, "class", "svelte-6iq55z"), c(x, "class", "card-header svelte-6iq55z"), c(s, "class", "hint svelte-6iq55z"), ht(E.src, f = t[2]) || c(E, "src", f), c(E, "alt", "TOTP QR code"), c(E, "width", "200"), c(E, "height", "200"), c(E, "class", "svelte-6iq55z"), c(u, "class", "qr-wrap svelte-6iq55z"), c(F, "class", "svelte-6iq55z"), c(p, "class", "secret-key svelte-6iq55z"), c(A, "class", "manual-entry svelte-6iq55z"), c(_, "type", "text"), c(_, "inputmode", "numeric"), c(_, "pattern", "[0-9]*"), c(_, "maxlength", "6"), _.required = true, c(_, "autocomplete", "one-time-code"), c(_, "placeholder", "000000"), c(_, "class", "svelte-6iq55z"), c(D, "class", "svelte-6iq55z"), c(g, "type", "submit"), c(g, "class", "btn-primary svelte-6iq55z"), g.disabled = S = t[5] || t[3].length !== 6, c(N, "type", "button"), c(N, "class", "btn-ghost svelte-6iq55z"), N.disabled = t[5], c(b, "class", "otp-form svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(Q, K) {
            T(Q, e, K), i(e, x), i(x, n), i(x, o), i(x, l), i(e, r), i(e, s), i(e, a), i(e, u), i(u, E), i(e, C), i(e, A), i(A, F), i(A, B), i(A, p), i(p, m), i(e, h), i(e, b), i(b, D), i(D, v), i(D, _), x0(_, t[3]), i(b, k), j && j.m(b, null), i(b, w), i(b, g), i(g, I), i(b, L), i(b, N), i(N, q), U || (R = [
              H(n, "click", t[10]),
              H(_, "input", t[11]),
              H(N, "click", t[10]),
              H(b, "submit", ne(t[7]))
            ], U = true);
          },
          p(Q, K) {
            K & 4 && !ht(E.src, f = Q[2]) && c(E, "src", f), K & 2 && V(m, Q[1]), K & 8 && _.value !== Q[3] && x0(_, Q[3]), Q[6] ? j ? j.p(Q, K) : (j = to(Q), j.c(), j.m(b, w)) : j && (j.d(1), j = null), K & 32 && M !== (M = Q[5] ? "Verifying\u2026" : "Enable 2FA") && V(I, M), K & 40 && S !== (S = Q[5] || Q[3].length !== 6) && (g.disabled = S), K & 32 && (N.disabled = Q[5]);
          },
          d(Q) {
            Q && P(e), j && j.d(), U = false, l0(R);
          }
        };
      }
      function oc(t) {
        let e, x, n, o, l, r, s;
        return {
          c() {
            e = d("div"), x = d("p"), n = z(t[6]), o = y(), l = d("button"), l.textContent = "Back to Settings", c(x, "class", "error svelte-6iq55z"), c(l, "class", "btn-ghost svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(a, u) {
            T(a, e, u), i(e, x), i(x, n), i(e, o), i(e, l), r || (s = H(l, "click", t[10]), r = true);
          },
          p(a, u) {
            u & 64 && V(n, a[6]);
          },
          d(a) {
            a && P(e), r = false, s();
          }
        };
      }
      function lc(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Setting up\u2026", c(e, "class", "muted svelte-6iq55z");
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
      function xo(t) {
        let e, x = t[12] + "", n;
        return {
          c() {
            e = d("code"), n = z(x), c(e, "class", "backup-code svelte-6iq55z");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l & 16 && x !== (x = o[12] + "") && V(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function to(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[6]), c(e, "class", "error svelte-6iq55z");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 64 && V(x, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function rc(t) {
        let e, x, n, o;
        e = new ee({});
        function l(a, u) {
          if (a[0] === "loading") return lc;
          if (a[0] === "error") return oc;
          if (a[0] === "scan") return nc;
          if (a[0] === "codes") return tc;
        }
        let r = l(t), s = r && r(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), s && s.c(), c(n, "class", "svelte-6iq55z");
          },
          m(a, u) {
            y0(e, a, u), T(a, x, u), T(a, n, u), s && s.m(n, null), o = true;
          },
          p(a, [u]) {
            r === (r = l(a)) && s ? s.p(a, u) : (s && s.d(1), s = r && r(a), s && (s.c(), s.m(n, null)));
          },
          i(a) {
            o || (F0(e.$$.fragment, a), o = true);
          },
          o(a) {
            v0(e.$$.fragment, a), o = false;
          },
          d(a) {
            a && (P(x), P(n)), P0(e, a), s && s.d();
          }
        };
      }
      function sc(t, e, x) {
        let n = "loading", o = "", l = "", r = "", s = [], a = false, u = null;
        M0(async () => {
          if (!O0()) {
            i0("/login");
            return;
          }
          try {
            const { secret: B, uri: p } = await vs();
            x(1, o = B), x(2, l = await Ae.toDataURL(p, {
              width: 200,
              margin: 1
            })), x(0, n = "scan");
          } catch (B) {
            x(6, u = B.message), x(0, n = "error");
          }
        });
        async function E() {
          x(6, u = null), x(5, a = true);
          try {
            const { backup_codes: B } = await _s(o, r);
            x(4, s = B), Re.set(true), x(0, n = "codes");
          } catch (B) {
            x(6, u = B.message);
          } finally {
            x(5, a = false);
          }
        }
        function f() {
          const B = s.join(`
`), p = new Blob([
            B
          ], {
            type: "text/plain"
          }), m = URL.createObjectURL(p), h = document.createElement("a");
          h.href = m, h.download = "backup-codes.txt", h.click(), URL.revokeObjectURL(m);
        }
        function C() {
          i0("/settings");
        }
        function A() {
          i0("/settings");
        }
        function F() {
          r = this.value, x(3, r);
        }
        return [
          n,
          o,
          l,
          r,
          s,
          a,
          u,
          E,
          f,
          C,
          A,
          F
        ];
      }
      class ac extends k0 {
        constructor(e) {
          super(), _0(this, e, sc, rc, m0, {});
        }
      }
      var Fl = {
        exports: {}
      };
      (function(t, e) {
        (function(n, o) {
          t.exports = o();
        })(typeof self < "u" ? self : Pi, function() {
          return function(x) {
            var n = {};
            function o(l) {
              if (n[l]) return n[l].exports;
              var r = n[l] = {
                i: l,
                l: false,
                exports: {}
              };
              return x[l].call(r.exports, r, r.exports, o), r.l = true, r.exports;
            }
            return o.m = x, o.c = n, o.d = function(l, r, s) {
              o.o(l, r) || Object.defineProperty(l, r, {
                configurable: false,
                enumerable: true,
                get: s
              });
            }, o.n = function(l) {
              var r = l && l.__esModule ? function() {
                return l.default;
              } : function() {
                return l;
              };
              return o.d(r, "a", r), r;
            }, o.o = function(l, r) {
              return Object.prototype.hasOwnProperty.call(l, r);
            }, o.p = "", o(o.s = 3);
          }([
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = function() {
                function r(s, a) {
                  this.width = a, this.height = s.length / a, this.data = s;
                }
                return r.createEmpty = function(s, a) {
                  return new r(new Uint8ClampedArray(s * a), s);
                }, r.prototype.get = function(s, a) {
                  return s < 0 || s >= this.width || a < 0 || a >= this.height ? false : !!this.data[a * this.width + s];
                }, r.prototype.set = function(s, a, u) {
                  this.data[a * this.width + s] = u ? 1 : 0;
                }, r.prototype.setRegion = function(s, a, u, E, f) {
                  for (var C = a; C < a + E; C++) for (var A = s; A < s + u; A++) this.set(A, C, !!f);
                }, r;
              }();
              n.BitMatrix = l;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(2);
              function r(a, u) {
                return a ^ u;
              }
              n.addOrSubtractGF = r;
              var s = function() {
                function a(u, E, f) {
                  this.primitive = u, this.size = E, this.generatorBase = f, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                  for (var C = 1, A = 0; A < this.size; A++) this.expTable[A] = C, C = C * 2, C >= this.size && (C = (C ^ this.primitive) & this.size - 1);
                  for (var A = 0; A < this.size - 1; A++) this.logTable[this.expTable[A]] = A;
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
                  var f = new Uint8ClampedArray(u + 1);
                  return f[0] = E, new l.default(this, f);
                }, a.prototype.log = function(u) {
                  if (u === 0) throw new Error("Can't take log(0)");
                  return this.logTable[u];
                }, a.prototype.exp = function(u) {
                  return this.expTable[u];
                }, a;
              }();
              n.default = s;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(1), r = function() {
                function s(a, u) {
                  if (u.length === 0) throw new Error("No coefficients.");
                  this.field = a;
                  var E = u.length;
                  if (E > 1 && u[0] === 0) {
                    for (var f = 1; f < E && u[f] === 0; ) f++;
                    if (f === E) this.coefficients = a.zero.coefficients;
                    else {
                      this.coefficients = new Uint8ClampedArray(E - f);
                      for (var C = 0; C < this.coefficients.length; C++) this.coefficients[C] = u[f + C];
                    }
                  } else this.coefficients = u;
                }
                return s.prototype.degree = function() {
                  return this.coefficients.length - 1;
                }, s.prototype.isZero = function() {
                  return this.coefficients[0] === 0;
                }, s.prototype.getCoefficient = function(a) {
                  return this.coefficients[this.coefficients.length - 1 - a];
                }, s.prototype.addOrSubtract = function(a) {
                  var u;
                  if (this.isZero()) return a;
                  if (a.isZero()) return this;
                  var E = this.coefficients, f = a.coefficients;
                  E.length > f.length && (u = [
                    f,
                    E
                  ], E = u[0], f = u[1]);
                  for (var C = new Uint8ClampedArray(f.length), A = f.length - E.length, F = 0; F < A; F++) C[F] = f[F];
                  for (var F = A; F < f.length; F++) C[F] = l.addOrSubtractGF(E[F - A], f[F]);
                  return new s(this.field, C);
                }, s.prototype.multiply = function(a) {
                  if (a === 0) return this.field.zero;
                  if (a === 1) return this;
                  for (var u = this.coefficients.length, E = new Uint8ClampedArray(u), f = 0; f < u; f++) E[f] = this.field.multiply(this.coefficients[f], a);
                  return new s(this.field, E);
                }, s.prototype.multiplyPoly = function(a) {
                  if (this.isZero() || a.isZero()) return this.field.zero;
                  for (var u = this.coefficients, E = u.length, f = a.coefficients, C = f.length, A = new Uint8ClampedArray(E + C - 1), F = 0; F < E; F++) for (var B = u[F], p = 0; p < C; p++) A[F + p] = l.addOrSubtractGF(A[F + p], this.field.multiply(B, f[p]));
                  return new s(this.field, A);
                }, s.prototype.multiplyByMonomial = function(a, u) {
                  if (a < 0) throw new Error("Invalid degree less than 0");
                  if (u === 0) return this.field.zero;
                  for (var E = this.coefficients.length, f = new Uint8ClampedArray(E + a), C = 0; C < E; C++) f[C] = this.field.multiply(this.coefficients[C], u);
                  return new s(this.field, f);
                }, s.prototype.evaluateAt = function(a) {
                  var u = 0;
                  if (a === 0) return this.getCoefficient(0);
                  var E = this.coefficients.length;
                  if (a === 1) return this.coefficients.forEach(function(C) {
                    u = l.addOrSubtractGF(u, C);
                  }), u;
                  u = this.coefficients[0];
                  for (var f = 1; f < E; f++) u = l.addOrSubtractGF(this.field.multiply(a, u), this.coefficients[f]);
                  return u;
                }, s;
              }();
              n.default = r;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(4), r = o(5), s = o(11), a = o(12);
              function u(C) {
                var A = a.locate(C);
                if (!A) return null;
                for (var F = 0, B = A; F < B.length; F++) {
                  var p = B[F], m = s.extract(C, p), h = r.decode(m.matrix);
                  if (h) return {
                    binaryData: h.bytes,
                    data: h.text,
                    chunks: h.chunks,
                    version: h.version,
                    location: {
                      topRightCorner: m.mappingFunction(p.dimension, 0),
                      topLeftCorner: m.mappingFunction(0, 0),
                      bottomRightCorner: m.mappingFunction(p.dimension, p.dimension),
                      bottomLeftCorner: m.mappingFunction(0, p.dimension),
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
              function f(C, A, F, B) {
                B === void 0 && (B = {});
                var p = E;
                Object.keys(p || {}).forEach(function(k) {
                  p[k] = B[k] || p[k];
                });
                var m = p.inversionAttempts === "attemptBoth" || p.inversionAttempts === "invertFirst", h = p.inversionAttempts === "onlyInvert" || p.inversionAttempts === "invertFirst", b = l.binarize(C, A, F, m), D = b.binarized, v = b.inverted, _ = u(h ? v : D);
                return !_ && (p.inversionAttempts === "attemptBoth" || p.inversionAttempts === "invertFirst") && (_ = u(h ? D : v)), _;
              }
              f.default = f, n.default = f;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(0), r = 8, s = 24;
              function a(f, C, A) {
                return f < C ? C : f > A ? A : f;
              }
              var u = function() {
                function f(C, A) {
                  this.width = C, this.data = new Uint8ClampedArray(C * A);
                }
                return f.prototype.get = function(C, A) {
                  return this.data[A * this.width + C];
                }, f.prototype.set = function(C, A, F) {
                  this.data[A * this.width + C] = F;
                }, f;
              }();
              function E(f, C, A, F) {
                if (f.length !== C * A * 4) throw new Error("Malformed data passed to binarizer.");
                for (var B = new u(C, A), p = 0; p < C; p++) for (var m = 0; m < A; m++) {
                  var h = f[(m * C + p) * 4 + 0], b = f[(m * C + p) * 4 + 1], D = f[(m * C + p) * 4 + 2];
                  B.set(p, m, 0.2126 * h + 0.7152 * b + 0.0722 * D);
                }
                for (var v = Math.ceil(C / r), _ = Math.ceil(A / r), k = new u(v, _), w = 0; w < _; w++) for (var g = 0; g < v; g++) {
                  for (var M = 0, I = 1 / 0, S = 0, m = 0; m < r; m++) for (var p = 0; p < r; p++) {
                    var L = B.get(g * r + p, w * r + m);
                    M += L, I = Math.min(I, L), S = Math.max(S, L);
                  }
                  var N = M / Math.pow(r, 2);
                  if (S - I <= s && (N = I / 2, w > 0 && g > 0)) {
                    var q = (k.get(g, w - 1) + 2 * k.get(g - 1, w) + k.get(g - 1, w - 1)) / 4;
                    I < q && (N = q);
                  }
                  k.set(g, w, N);
                }
                var U = l.BitMatrix.createEmpty(C, A), R = null;
                F && (R = l.BitMatrix.createEmpty(C, A));
                for (var w = 0; w < _; w++) for (var g = 0; g < v; g++) {
                  for (var j = a(g, 2, v - 3), Q = a(w, 2, _ - 3), M = 0, K = -2; K <= 2; K++) for (var G = -2; G <= 2; G++) M += k.get(j + K, Q + G);
                  for (var O = M / 25, K = 0; K < r; K++) for (var G = 0; G < r; G++) {
                    var p = g * r + K, m = w * r + G, W = B.get(p, m);
                    U.set(p, m, W <= O), F && R.set(p, m, !(W <= O));
                  }
                }
                return F ? {
                  binarized: U,
                  inverted: R
                } : {
                  binarized: U
                };
              }
              n.binarize = E;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(0), r = o(6), s = o(9), a = o(10);
              function u(D, v) {
                for (var _ = D ^ v, k = 0; _; ) k++, _ &= _ - 1;
                return k;
              }
              function E(D, v) {
                return v << 1 | D;
              }
              var f = [
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
                function(D) {
                  return (D.y + D.x) % 2 === 0;
                },
                function(D) {
                  return D.y % 2 === 0;
                },
                function(D) {
                  return D.x % 3 === 0;
                },
                function(D) {
                  return (D.y + D.x) % 3 === 0;
                },
                function(D) {
                  return (Math.floor(D.y / 2) + Math.floor(D.x / 3)) % 2 === 0;
                },
                function(D) {
                  return D.x * D.y % 2 + D.x * D.y % 3 === 0;
                },
                function(D) {
                  return (D.y * D.x % 2 + D.y * D.x % 3) % 2 === 0;
                },
                function(D) {
                  return ((D.y + D.x) % 2 + D.y * D.x % 3) % 2 === 0;
                }
              ];
              function A(D) {
                var v = 17 + 4 * D.versionNumber, _ = l.BitMatrix.createEmpty(v, v);
                _.setRegion(0, 0, 9, 9, true), _.setRegion(v - 8, 0, 8, 9, true), _.setRegion(0, v - 8, 9, 8, true);
                for (var k = 0, w = D.alignmentPatternCenters; k < w.length; k++) for (var g = w[k], M = 0, I = D.alignmentPatternCenters; M < I.length; M++) {
                  var S = I[M];
                  g === 6 && S === 6 || g === 6 && S === v - 7 || g === v - 7 && S === 6 || _.setRegion(g - 2, S - 2, 5, 5, true);
                }
                return _.setRegion(6, 9, 1, v - 17, true), _.setRegion(9, 6, v - 17, 1, true), D.versionNumber > 6 && (_.setRegion(v - 11, 0, 3, 6, true), _.setRegion(0, v - 11, 6, 3, true)), _;
              }
              function F(D, v, _) {
                for (var k = C[_.dataMask], w = D.height, g = A(v), M = [], I = 0, S = 0, L = true, N = w - 1; N > 0; N -= 2) {
                  N === 6 && N--;
                  for (var q = 0; q < w; q++) for (var U = L ? w - 1 - q : q, R = 0; R < 2; R++) {
                    var j = N - R;
                    if (!g.get(j, U)) {
                      S++;
                      var Q = D.get(j, U);
                      k({
                        y: U,
                        x: j
                      }) && (Q = !Q), I = E(Q, I), S === 8 && (M.push(I), S = 0, I = 0);
                    }
                  }
                  L = !L;
                }
                return M;
              }
              function B(D) {
                var v = D.height, _ = Math.floor((v - 17) / 4);
                if (_ <= 6) return a.VERSIONS[_ - 1];
                for (var k = 0, w = 5; w >= 0; w--) for (var g = v - 9; g >= v - 11; g--) k = E(D.get(g, w), k);
                for (var M = 0, g = 5; g >= 0; g--) for (var w = v - 9; w >= v - 11; w--) M = E(D.get(g, w), M);
                for (var I = 1 / 0, S, L = 0, N = a.VERSIONS; L < N.length; L++) {
                  var q = N[L];
                  if (q.infoBits === k || q.infoBits === M) return q;
                  var U = u(k, q.infoBits);
                  U < I && (S = q, I = U), U = u(M, q.infoBits), U < I && (S = q, I = U);
                }
                if (I <= 3) return S;
              }
              function p(D) {
                for (var v = 0, _ = 0; _ <= 8; _++) _ !== 6 && (v = E(D.get(_, 8), v));
                for (var k = 7; k >= 0; k--) k !== 6 && (v = E(D.get(8, k), v));
                for (var w = D.height, g = 0, k = w - 1; k >= w - 7; k--) g = E(D.get(8, k), g);
                for (var _ = w - 8; _ < w; _++) g = E(D.get(_, 8), g);
                for (var M = 1 / 0, I = null, S = 0, L = f; S < L.length; S++) {
                  var N = L[S], q = N.bits, U = N.formatInfo;
                  if (q === v || q === g) return U;
                  var R = u(v, q);
                  R < M && (I = U, M = R), v !== g && (R = u(g, q), R < M && (I = U, M = R));
                }
                return M <= 3 ? I : null;
              }
              function m(D, v, _) {
                var k = v.errorCorrectionLevels[_], w = [], g = 0;
                if (k.ecBlocks.forEach(function(Q) {
                  for (var K = 0; K < Q.numBlocks; K++) w.push({
                    numDataCodewords: Q.dataCodewordsPerBlock,
                    codewords: []
                  }), g += Q.dataCodewordsPerBlock + k.ecCodewordsPerBlock;
                }), D.length < g) return null;
                D = D.slice(0, g);
                for (var M = k.ecBlocks[0].dataCodewordsPerBlock, I = 0; I < M; I++) for (var S = 0, L = w; S < L.length; S++) {
                  var N = L[S];
                  N.codewords.push(D.shift());
                }
                if (k.ecBlocks.length > 1) for (var q = k.ecBlocks[0].numBlocks, U = k.ecBlocks[1].numBlocks, I = 0; I < U; I++) w[q + I].codewords.push(D.shift());
                for (; D.length > 0; ) for (var R = 0, j = w; R < j.length; R++) {
                  var N = j[R];
                  N.codewords.push(D.shift());
                }
                return w;
              }
              function h(D) {
                var v = B(D);
                if (!v) return null;
                var _ = p(D);
                if (!_) return null;
                var k = F(D, v, _), w = m(k, v, _.errorCorrectionLevel);
                if (!w) return null;
                for (var g = w.reduce(function(R, j) {
                  return R + j.numDataCodewords;
                }, 0), M = new Uint8ClampedArray(g), I = 0, S = 0, L = w; S < L.length; S++) {
                  var N = L[S], q = s.decode(N.codewords, N.codewords.length - N.numDataCodewords);
                  if (!q) return null;
                  for (var U = 0; U < N.numDataCodewords; U++) M[I++] = q[U];
                }
                try {
                  return r.decode(M, v.versionNumber);
                } catch {
                  return null;
                }
              }
              function b(D) {
                if (D == null) return null;
                var v = h(D);
                if (v) return v;
                for (var _ = 0; _ < D.width; _++) for (var k = _ + 1; k < D.height; k++) D.get(_, k) !== D.get(k, _) && (D.set(_, k, !D.get(_, k)), D.set(k, _, !D.get(k, _)));
                return h(D);
              }
              n.decode = b;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = o(7), r = o(8), s;
              (function(B) {
                B.Numeric = "numeric", B.Alphanumeric = "alphanumeric", B.Byte = "byte", B.Kanji = "kanji", B.ECI = "eci";
              })(s = n.Mode || (n.Mode = {}));
              var a;
              (function(B) {
                B[B.Terminator = 0] = "Terminator", B[B.Numeric = 1] = "Numeric", B[B.Alphanumeric = 2] = "Alphanumeric", B[B.Byte = 4] = "Byte", B[B.Kanji = 8] = "Kanji", B[B.ECI = 7] = "ECI";
              })(a || (a = {}));
              function u(B, p) {
                for (var m = [], h = "", b = [
                  10,
                  12,
                  14
                ][p], D = B.readBits(b); D >= 3; ) {
                  var v = B.readBits(10);
                  if (v >= 1e3) throw new Error("Invalid numeric value above 999");
                  var _ = Math.floor(v / 100), k = Math.floor(v / 10) % 10, w = v % 10;
                  m.push(48 + _, 48 + k, 48 + w), h += _.toString() + k.toString() + w.toString(), D -= 3;
                }
                if (D === 2) {
                  var v = B.readBits(7);
                  if (v >= 100) throw new Error("Invalid numeric value above 99");
                  var _ = Math.floor(v / 10), k = v % 10;
                  m.push(48 + _, 48 + k), h += _.toString() + k.toString();
                } else if (D === 1) {
                  var v = B.readBits(4);
                  if (v >= 10) throw new Error("Invalid numeric value above 9");
                  m.push(48 + v), h += v.toString();
                }
                return {
                  bytes: m,
                  text: h
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
              function f(B, p) {
                for (var m = [], h = "", b = [
                  9,
                  11,
                  13
                ][p], D = B.readBits(b); D >= 2; ) {
                  var v = B.readBits(11), _ = Math.floor(v / 45), k = v % 45;
                  m.push(E[_].charCodeAt(0), E[k].charCodeAt(0)), h += E[_] + E[k], D -= 2;
                }
                if (D === 1) {
                  var _ = B.readBits(6);
                  m.push(E[_].charCodeAt(0)), h += E[_];
                }
                return {
                  bytes: m,
                  text: h
                };
              }
              function C(B, p) {
                for (var m = [], h = "", b = [
                  8,
                  16,
                  16
                ][p], D = B.readBits(b), v = 0; v < D; v++) {
                  var _ = B.readBits(8);
                  m.push(_);
                }
                try {
                  h += decodeURIComponent(m.map(function(k) {
                    return "%" + ("0" + k.toString(16)).substr(-2);
                  }).join(""));
                } catch {
                }
                return {
                  bytes: m,
                  text: h
                };
              }
              function A(B, p) {
                for (var m = [], h = "", b = [
                  8,
                  10,
                  12
                ][p], D = B.readBits(b), v = 0; v < D; v++) {
                  var _ = B.readBits(13), k = Math.floor(_ / 192) << 8 | _ % 192;
                  k < 7936 ? k += 33088 : k += 49472, m.push(k >> 8, k & 255), h += String.fromCharCode(r.shiftJISTable[k]);
                }
                return {
                  bytes: m,
                  text: h
                };
              }
              function F(B, p) {
                for (var m, h, b, D, v = new l.BitStream(B), _ = p <= 9 ? 0 : p <= 26 ? 1 : 2, k = {
                  text: "",
                  bytes: [],
                  chunks: [],
                  version: p
                }; v.available() >= 4; ) {
                  var w = v.readBits(4);
                  if (w === a.Terminator) return k;
                  if (w === a.ECI) v.readBits(1) === 0 ? k.chunks.push({
                    type: s.ECI,
                    assignmentNumber: v.readBits(7)
                  }) : v.readBits(1) === 0 ? k.chunks.push({
                    type: s.ECI,
                    assignmentNumber: v.readBits(14)
                  }) : v.readBits(1) === 0 ? k.chunks.push({
                    type: s.ECI,
                    assignmentNumber: v.readBits(21)
                  }) : k.chunks.push({
                    type: s.ECI,
                    assignmentNumber: -1
                  });
                  else if (w === a.Numeric) {
                    var g = u(v, _);
                    k.text += g.text, (m = k.bytes).push.apply(m, g.bytes), k.chunks.push({
                      type: s.Numeric,
                      text: g.text
                    });
                  } else if (w === a.Alphanumeric) {
                    var M = f(v, _);
                    k.text += M.text, (h = k.bytes).push.apply(h, M.bytes), k.chunks.push({
                      type: s.Alphanumeric,
                      text: M.text
                    });
                  } else if (w === a.Byte) {
                    var I = C(v, _);
                    k.text += I.text, (b = k.bytes).push.apply(b, I.bytes), k.chunks.push({
                      type: s.Byte,
                      bytes: I.bytes,
                      text: I.text
                    });
                  } else if (w === a.Kanji) {
                    var S = A(v, _);
                    k.text += S.text, (D = k.bytes).push.apply(D, S.bytes), k.chunks.push({
                      type: s.Kanji,
                      bytes: S.bytes,
                      text: S.text
                    });
                  }
                }
                if (v.available() === 0 || v.readBits(v.available()) === 0) return k;
              }
              n.decode = F;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = function() {
                function r(s) {
                  this.byteOffset = 0, this.bitOffset = 0, this.bytes = s;
                }
                return r.prototype.readBits = function(s) {
                  if (s < 1 || s > 32 || s > this.available()) throw new Error("Cannot read " + s.toString() + " bits");
                  var a = 0;
                  if (this.bitOffset > 0) {
                    var u = 8 - this.bitOffset, E = s < u ? s : u, f = u - E, C = 255 >> 8 - E << f;
                    a = (this.bytes[this.byteOffset] & C) >> f, s -= E, this.bitOffset += E, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                  }
                  if (s > 0) {
                    for (; s >= 8; ) a = a << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, s -= 8;
                    if (s > 0) {
                      var f = 8 - s, C = 255 >> f << f;
                      a = a << s | (this.bytes[this.byteOffset] & C) >> f, this.bitOffset += s;
                    }
                  }
                  return a;
                }, r.prototype.available = function() {
                  return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
                }, r;
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
              var l = o(1), r = o(2);
              function s(f, C, A, F) {
                var B;
                C.degree() < A.degree() && (B = [
                  A,
                  C
                ], C = B[0], A = B[1]);
                for (var p = C, m = A, h = f.zero, b = f.one; m.degree() >= F / 2; ) {
                  var D = p, v = h;
                  if (p = m, h = b, p.isZero()) return null;
                  m = D;
                  for (var _ = f.zero, k = p.getCoefficient(p.degree()), w = f.inverse(k); m.degree() >= p.degree() && !m.isZero(); ) {
                    var g = m.degree() - p.degree(), M = f.multiply(m.getCoefficient(m.degree()), w);
                    _ = _.addOrSubtract(f.buildMonomial(g, M)), m = m.addOrSubtract(p.multiplyByMonomial(g, M));
                  }
                  if (b = _.multiplyPoly(h).addOrSubtract(v), m.degree() >= p.degree()) return null;
                }
                var I = b.getCoefficient(0);
                if (I === 0) return null;
                var S = f.inverse(I);
                return [
                  b.multiply(S),
                  m.multiply(S)
                ];
              }
              function a(f, C) {
                var A = C.degree();
                if (A === 1) return [
                  C.getCoefficient(1)
                ];
                for (var F = new Array(A), B = 0, p = 1; p < f.size && B < A; p++) C.evaluateAt(p) === 0 && (F[B] = f.inverse(p), B++);
                return B !== A ? null : F;
              }
              function u(f, C, A) {
                for (var F = A.length, B = new Array(F), p = 0; p < F; p++) {
                  for (var m = f.inverse(A[p]), h = 1, b = 0; b < F; b++) p !== b && (h = f.multiply(h, l.addOrSubtractGF(1, f.multiply(A[b], m))));
                  B[p] = f.multiply(C.evaluateAt(m), f.inverse(h)), f.generatorBase !== 0 && (B[p] = f.multiply(B[p], m));
                }
                return B;
              }
              function E(f, C) {
                var A = new Uint8ClampedArray(f.length);
                A.set(f);
                for (var F = new l.default(285, 256, 0), B = new r.default(F, A), p = new Uint8ClampedArray(C), m = false, h = 0; h < C; h++) {
                  var b = B.evaluateAt(F.exp(h + F.generatorBase));
                  p[p.length - 1 - h] = b, b !== 0 && (m = true);
                }
                if (!m) return A;
                var D = new r.default(F, p), v = s(F, F.buildMonomial(C, 1), D, C);
                if (v === null) return null;
                var _ = a(F, v[0]);
                if (_ == null) return null;
                for (var k = u(F, v[1], _), w = 0; w < _.length; w++) {
                  var g = A.length - 1 - F.log(_[w]);
                  if (g < 0) return null;
                  A[g] = l.addOrSubtractGF(A[g], k[w]);
                }
                return A;
              }
              n.decode = E;
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
              function r(E, f, C, A) {
                var F = E.x - f.x + C.x - A.x, B = E.y - f.y + C.y - A.y;
                if (F === 0 && B === 0) return {
                  a11: f.x - E.x,
                  a12: f.y - E.y,
                  a13: 0,
                  a21: C.x - f.x,
                  a22: C.y - f.y,
                  a23: 0,
                  a31: E.x,
                  a32: E.y,
                  a33: 1
                };
                var p = f.x - C.x, m = A.x - C.x, h = f.y - C.y, b = A.y - C.y, D = p * b - m * h, v = (F * b - m * B) / D, _ = (p * B - F * h) / D;
                return {
                  a11: f.x - E.x + v * f.x,
                  a12: f.y - E.y + v * f.y,
                  a13: v,
                  a21: A.x - E.x + _ * A.x,
                  a22: A.y - E.y + _ * A.y,
                  a23: _,
                  a31: E.x,
                  a32: E.y,
                  a33: 1
                };
              }
              function s(E, f, C, A) {
                var F = r(E, f, C, A);
                return {
                  a11: F.a22 * F.a33 - F.a23 * F.a32,
                  a12: F.a13 * F.a32 - F.a12 * F.a33,
                  a13: F.a12 * F.a23 - F.a13 * F.a22,
                  a21: F.a23 * F.a31 - F.a21 * F.a33,
                  a22: F.a11 * F.a33 - F.a13 * F.a31,
                  a23: F.a13 * F.a21 - F.a11 * F.a23,
                  a31: F.a21 * F.a32 - F.a22 * F.a31,
                  a32: F.a12 * F.a31 - F.a11 * F.a32,
                  a33: F.a11 * F.a22 - F.a12 * F.a21
                };
              }
              function a(E, f) {
                return {
                  a11: E.a11 * f.a11 + E.a21 * f.a12 + E.a31 * f.a13,
                  a12: E.a12 * f.a11 + E.a22 * f.a12 + E.a32 * f.a13,
                  a13: E.a13 * f.a11 + E.a23 * f.a12 + E.a33 * f.a13,
                  a21: E.a11 * f.a21 + E.a21 * f.a22 + E.a31 * f.a23,
                  a22: E.a12 * f.a21 + E.a22 * f.a22 + E.a32 * f.a23,
                  a23: E.a13 * f.a21 + E.a23 * f.a22 + E.a33 * f.a23,
                  a31: E.a11 * f.a31 + E.a21 * f.a32 + E.a31 * f.a33,
                  a32: E.a12 * f.a31 + E.a22 * f.a32 + E.a32 * f.a33,
                  a33: E.a13 * f.a31 + E.a23 * f.a32 + E.a33 * f.a33
                };
              }
              function u(E, f) {
                for (var C = s({
                  x: 3.5,
                  y: 3.5
                }, {
                  x: f.dimension - 3.5,
                  y: 3.5
                }, {
                  x: f.dimension - 6.5,
                  y: f.dimension - 6.5
                }, {
                  x: 3.5,
                  y: f.dimension - 3.5
                }), A = r(f.topLeft, f.topRight, f.alignmentPattern, f.bottomLeft), F = a(A, C), B = l.BitMatrix.createEmpty(f.dimension, f.dimension), p = function(_, k) {
                  var w = F.a13 * _ + F.a23 * k + F.a33;
                  return {
                    x: (F.a11 * _ + F.a21 * k + F.a31) / w,
                    y: (F.a12 * _ + F.a22 * k + F.a32) / w
                  };
                }, m = 0; m < f.dimension; m++) for (var h = 0; h < f.dimension; h++) {
                  var b = h + 0.5, D = m + 0.5, v = p(b, D);
                  B.set(h, m, E.get(Math.floor(v.x), Math.floor(v.y)));
                }
                return {
                  matrix: B,
                  mappingFunction: p
                };
              }
              n.extract = u;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var l = 4, r = 0.5, s = 1.5, a = function(b, D) {
                return Math.sqrt(Math.pow(D.x - b.x, 2) + Math.pow(D.y - b.y, 2));
              };
              function u(b) {
                return b.reduce(function(D, v) {
                  return D + v;
                });
              }
              function E(b, D, v) {
                var _, k, w, g, M = a(b, D), I = a(D, v), S = a(b, v), L, N, q;
                return I >= M && I >= S ? (_ = [
                  D,
                  b,
                  v
                ], L = _[0], N = _[1], q = _[2]) : S >= I && S >= M ? (k = [
                  b,
                  D,
                  v
                ], L = k[0], N = k[1], q = k[2]) : (w = [
                  b,
                  v,
                  D
                ], L = w[0], N = w[1], q = w[2]), (q.x - N.x) * (L.y - N.y) - (q.y - N.y) * (L.x - N.x) < 0 && (g = [
                  q,
                  L
                ], L = g[0], q = g[1]), {
                  bottomLeft: L,
                  topLeft: N,
                  topRight: q
                };
              }
              function f(b, D, v, _) {
                var k = (u(A(b, v, _, 5)) / 7 + u(A(b, D, _, 5)) / 7 + u(A(v, b, _, 5)) / 7 + u(A(D, b, _, 5)) / 7) / 4;
                if (k < 1) throw new Error("Invalid module size");
                var w = Math.round(a(b, D) / k), g = Math.round(a(b, v) / k), M = Math.floor((w + g) / 2) + 7;
                switch (M % 4) {
                  case 0:
                    M++;
                    break;
                  case 2:
                    M--;
                    break;
                }
                return {
                  dimension: M,
                  moduleSize: k
                };
              }
              function C(b, D, v, _) {
                var k = [
                  {
                    x: Math.floor(b.x),
                    y: Math.floor(b.y)
                  }
                ], w = Math.abs(D.y - b.y) > Math.abs(D.x - b.x), g, M, I, S;
                w ? (g = Math.floor(b.y), M = Math.floor(b.x), I = Math.floor(D.y), S = Math.floor(D.x)) : (g = Math.floor(b.x), M = Math.floor(b.y), I = Math.floor(D.x), S = Math.floor(D.y));
                for (var L = Math.abs(I - g), N = Math.abs(S - M), q = Math.floor(-L / 2), U = g < I ? 1 : -1, R = M < S ? 1 : -1, j = true, Q = g, K = M; Q !== I + U; Q += U) {
                  var G = w ? K : Q, O = w ? Q : K;
                  if (v.get(G, O) !== j && (j = !j, k.push({
                    x: G,
                    y: O
                  }), k.length === _ + 1)) break;
                  if (q += N, q > 0) {
                    if (K === S) break;
                    K += R, q -= L;
                  }
                }
                for (var W = [], Y = 0; Y < _; Y++) k[Y] && k[Y + 1] ? W.push(a(k[Y], k[Y + 1])) : W.push(0);
                return W;
              }
              function A(b, D, v, _) {
                var k, w = D.y - b.y, g = D.x - b.x, M = C(b, D, v, Math.ceil(_ / 2)), I = C(b, {
                  x: b.x - g,
                  y: b.y - w
                }, v, Math.ceil(_ / 2)), S = M.shift() + I.shift() - 1;
                return (k = I.concat(S)).concat.apply(k, M);
              }
              function F(b, D) {
                var v = u(b) / u(D), _ = 0;
                return D.forEach(function(k, w) {
                  _ += Math.pow(b[w] - k * v, 2);
                }), {
                  averageSize: v,
                  error: _
                };
              }
              function B(b, D, v) {
                try {
                  var _ = A(b, {
                    x: -1,
                    y: b.y
                  }, v, D.length), k = A(b, {
                    x: b.x,
                    y: -1
                  }, v, D.length), w = {
                    x: Math.max(0, b.x - b.y) - 1,
                    y: Math.max(0, b.y - b.x) - 1
                  }, g = A(b, w, v, D.length), M = {
                    x: Math.min(v.width, b.x + b.y) + 1,
                    y: Math.min(v.height, b.y + b.x) + 1
                  }, I = A(b, M, v, D.length), S = F(_, D), L = F(k, D), N = F(g, D), q = F(I, D), U = Math.sqrt(S.error * S.error + L.error * L.error + N.error * N.error + q.error * q.error), R = (S.averageSize + L.averageSize + N.averageSize + q.averageSize) / 4, j = (Math.pow(S.averageSize - R, 2) + Math.pow(L.averageSize - R, 2) + Math.pow(N.averageSize - R, 2) + Math.pow(q.averageSize - R, 2)) / R;
                  return U + j;
                } catch {
                  return 1 / 0;
                }
              }
              function p(b, D) {
                for (var v = Math.round(D.x); b.get(v, Math.round(D.y)); ) v--;
                for (var _ = Math.round(D.x); b.get(_, Math.round(D.y)); ) _++;
                for (var k = (v + _) / 2, w = Math.round(D.y); b.get(Math.round(k), w); ) w--;
                for (var g = Math.round(D.y); b.get(Math.round(k), g); ) g++;
                var M = (w + g) / 2;
                return {
                  x: k,
                  y: M
                };
              }
              function m(b) {
                for (var D = [], v = [], _ = [], k = [], w = function(G) {
                  for (var O = 0, W = false, Y = [
                    0,
                    0,
                    0,
                    0,
                    0
                  ], r0 = function(c0) {
                    var a0 = b.get(c0, G);
                    if (a0 === W) O++;
                    else {
                      Y = [
                        Y[1],
                        Y[2],
                        Y[3],
                        Y[4],
                        O
                      ], O = 1, W = a0;
                      var u0 = u(Y) / 7, J0 = Math.abs(Y[0] - u0) < u0 && Math.abs(Y[1] - u0) < u0 && Math.abs(Y[2] - 3 * u0) < 3 * u0 && Math.abs(Y[3] - u0) < u0 && Math.abs(Y[4] - u0) < u0 && !a0, X = u(Y.slice(-3)) / 3, t0 = Math.abs(Y[2] - X) < X && Math.abs(Y[3] - X) < X && Math.abs(Y[4] - X) < X && a0;
                      if (J0) {
                        var s0 = c0 - Y[3] - Y[4], A0 = s0 - Y[2], p0 = {
                          startX: A0,
                          endX: s0,
                          y: G
                        }, U0 = v.filter(function(w0) {
                          return A0 >= w0.bottom.startX && A0 <= w0.bottom.endX || s0 >= w0.bottom.startX && A0 <= w0.bottom.endX || A0 <= w0.bottom.startX && s0 >= w0.bottom.endX && Y[2] / (w0.bottom.endX - w0.bottom.startX) < s && Y[2] / (w0.bottom.endX - w0.bottom.startX) > r;
                        });
                        U0.length > 0 ? U0[0].bottom = p0 : v.push({
                          top: p0,
                          bottom: p0
                        });
                      }
                      if (t0) {
                        var N0 = c0 - Y[4], b0 = N0 - Y[3], p0 = {
                          startX: b0,
                          y: G,
                          endX: N0
                        }, U0 = k.filter(function(d0) {
                          return b0 >= d0.bottom.startX && b0 <= d0.bottom.endX || N0 >= d0.bottom.startX && b0 <= d0.bottom.endX || b0 <= d0.bottom.startX && N0 >= d0.bottom.endX && Y[2] / (d0.bottom.endX - d0.bottom.startX) < s && Y[2] / (d0.bottom.endX - d0.bottom.startX) > r;
                        });
                        U0.length > 0 ? U0[0].bottom = p0 : k.push({
                          top: p0,
                          bottom: p0
                        });
                      }
                    }
                  }, f0 = -1; f0 <= b.width; f0++) r0(f0);
                  D.push.apply(D, v.filter(function(c0) {
                    return c0.bottom.y !== G && c0.bottom.y - c0.top.y >= 2;
                  })), v = v.filter(function(c0) {
                    return c0.bottom.y === G;
                  }), _.push.apply(_, k.filter(function(c0) {
                    return c0.bottom.y !== G;
                  })), k = k.filter(function(c0) {
                    return c0.bottom.y === G;
                  });
                }, g = 0; g <= b.height; g++) w(g);
                D.push.apply(D, v.filter(function(G) {
                  return G.bottom.y - G.top.y >= 2;
                })), _.push.apply(_, k);
                var M = D.filter(function(G) {
                  return G.bottom.y - G.top.y >= 2;
                }).map(function(G) {
                  var O = (G.top.startX + G.top.endX + G.bottom.startX + G.bottom.endX) / 4, W = (G.top.y + G.bottom.y + 1) / 2;
                  if (b.get(Math.round(O), Math.round(W))) {
                    var Y = [
                      G.top.endX - G.top.startX,
                      G.bottom.endX - G.bottom.startX,
                      G.bottom.y - G.top.y + 1
                    ], r0 = u(Y) / Y.length, f0 = B({
                      x: Math.round(O),
                      y: Math.round(W)
                    }, [
                      1,
                      1,
                      3,
                      1,
                      1
                    ], b);
                    return {
                      score: f0,
                      x: O,
                      y: W,
                      size: r0
                    };
                  }
                }).filter(function(G) {
                  return !!G;
                }).sort(function(G, O) {
                  return G.score - O.score;
                }).map(function(G, O, W) {
                  if (O > l) return null;
                  var Y = W.filter(function(f0, c0) {
                    return O !== c0;
                  }).map(function(f0) {
                    return {
                      x: f0.x,
                      y: f0.y,
                      score: f0.score + Math.pow(f0.size - G.size, 2) / G.size,
                      size: f0.size
                    };
                  }).sort(function(f0, c0) {
                    return f0.score - c0.score;
                  });
                  if (Y.length < 2) return null;
                  var r0 = G.score + Y[0].score + Y[1].score;
                  return {
                    points: [
                      G
                    ].concat(Y.slice(0, 2)),
                    score: r0
                  };
                }).filter(function(G) {
                  return !!G;
                }).sort(function(G, O) {
                  return G.score - O.score;
                });
                if (M.length === 0) return null;
                var I = E(M[0].points[0], M[0].points[1], M[0].points[2]), S = I.topRight, L = I.topLeft, N = I.bottomLeft, q = h(b, _, S, L, N), U = [];
                q && U.push({
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
                    x: S.x,
                    y: S.y
                  }
                });
                var R = p(b, S), j = p(b, L), Q = p(b, N), K = h(b, _, R, j, Q);
                return K && U.push({
                  alignmentPattern: {
                    x: K.alignmentPattern.x,
                    y: K.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: Q.x,
                    y: Q.y
                  },
                  topLeft: {
                    x: j.x,
                    y: j.y
                  },
                  topRight: {
                    x: R.x,
                    y: R.y
                  },
                  dimension: K.dimension
                }), U.length === 0 ? null : U;
              }
              n.locate = m;
              function h(b, D, v, _, k) {
                var w, g, M;
                try {
                  w = f(_, v, k, b), g = w.dimension, M = w.moduleSize;
                } catch {
                  return null;
                }
                var I = {
                  x: v.x - _.x + k.x,
                  y: v.y - _.y + k.y
                }, S = (a(_, k) + a(_, v)) / 2 / M, L = 1 - 3 / S, N = {
                  x: _.x + L * (I.x - _.x),
                  y: _.y + L * (I.y - _.y)
                }, q = D.map(function(R) {
                  var j = (R.top.startX + R.top.endX + R.bottom.startX + R.bottom.endX) / 4, Q = (R.top.y + R.bottom.y + 1) / 2;
                  if (b.get(Math.floor(j), Math.floor(Q))) {
                    var K = [
                      R.top.endX - R.top.startX,
                      R.bottom.endX - R.bottom.startX,
                      R.bottom.y - R.top.y + 1
                    ];
                    u(K) / K.length;
                    var G = B({
                      x: Math.floor(j),
                      y: Math.floor(Q)
                    }, [
                      1,
                      1,
                      1
                    ], b), O = G + a({
                      x: j,
                      y: Q
                    }, N);
                    return {
                      x: j,
                      y: Q,
                      score: O
                    };
                  }
                }).filter(function(R) {
                  return !!R;
                }).sort(function(R, j) {
                  return R.score - j.score;
                }), U = S >= 15 && q.length ? q[0] : N;
                return {
                  alignmentPattern: U,
                  dimension: g
                };
              }
            }
          ]).default;
        });
      })(Fl);
      var ic = Fl.exports;
      const cc = Ti(ic);
      function no(t, e, x) {
        const n = t.slice();
        return n[44] = e[x], n;
      }
      function uc(t) {
        let e;
        return {
          c() {
            e = d("a"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', c(e, "class", "back-btn svelte-qzc8r5"), c(e, "href", "#/home");
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
      function Ec(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', c(e, "class", "back-btn svelte-qzc8r5");
          },
          m(o, l) {
            T(o, e, l), x || (n = H(e, "click", t[17]), x = true);
          },
          p: Z,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function fc(t) {
        let e;
        return {
          c() {
            e = z("New encounter");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function dc(t) {
        let e;
        return {
          c() {
            e = z("Encounter saved");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Bc(t) {
        let e;
        return {
          c() {
            e = z("Join group");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Cc(t) {
        let e;
        return {
          c() {
            e = z("Confirm exchange");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Ac(t) {
        let e;
        return {
          c() {
            e = z("Scan their code");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Fc(t) {
        let e, x, n, o, l, r, s, a, u = t[13] ? "Saving\u2026" : "Join group", E, f, C, A, F, B;
        function p(b, D) {
          return b[12]?.name ? gc : bc;
        }
        let m = p(t), h = m(t);
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Join group encounter?", n = y(), h.c(), o = y(), l = d("div"), r = d("button"), s = d("span"), s.textContent = "groups", a = y(), E = z(u), f = y(), C = d("button"), A = z("Cancel"), c(x, "class", "section-label svelte-qzc8r5"), c(s, "class", "material-icons svelte-qzc8r5"), c(r, "class", "btn-filled svelte-qzc8r5"), r.disabled = t[13], c(C, "class", "btn-text svelte-qzc8r5"), C.disabled = t[13], c(l, "class", "ongoing-actions svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(b, D) {
            T(b, e, D), i(e, x), i(e, n), h.m(e, null), i(e, o), i(e, l), i(l, r), i(r, s), i(r, a), i(r, E), i(l, f), i(l, C), i(C, A), F || (B = [
              H(r, "click", t[21]),
              H(C, "click", t[17])
            ], F = true);
          },
          p(b, D) {
            m === (m = p(b)) && h ? h.p(b, D) : (h.d(1), h = m(b), h && (h.c(), h.m(e, o))), D[0] & 8192 && u !== (u = b[13] ? "Saving\u2026" : "Join group") && V(E, u), D[0] & 8192 && (r.disabled = b[13]), D[0] & 8192 && (C.disabled = b[13]);
          },
          d(b) {
            b && P(e), h.d(), F = false, l0(B);
          }
        };
      }
      function Dc(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p = t[13] && oo();
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Ongoing relationship?", n = y(), o = d("p"), o.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", l = y(), r = d("div"), s = d("button"), a = d("span"), a.textContent = "favorite", u = z(`
          Yes, ongoing`), E = y(), f = d("button"), C = z("No, one off"), A = y(), p && p.c(), c(x, "class", "section-label svelte-qzc8r5"), c(o, "class", "help-text svelte-qzc8r5"), c(a, "class", "material-icons svelte-qzc8r5"), c(s, "class", "btn-filled svelte-qzc8r5"), s.disabled = t[13], c(f, "class", "btn-outlined svelte-qzc8r5"), f.disabled = t[13], c(r, "class", "ongoing-actions svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(m, h) {
            T(m, e, h), i(e, x), i(e, n), i(e, o), i(e, l), i(e, r), i(r, s), i(s, a), i(s, u), i(r, E), i(r, f), i(f, C), i(e, A), p && p.m(e, null), F || (B = [
              H(s, "click", t[28]),
              H(f, "click", t[29])
            ], F = true);
          },
          p(m, h) {
            h[0] & 8192 && (s.disabled = m[13]), h[0] & 8192 && (f.disabled = m[13]), m[13] ? p || (p = oo(), p.c(), p.m(e, null)) : p && (p.d(1), p = null);
          },
          d(m) {
            m && P(e), p && p.d(), F = false, l0(B);
          }
        };
      }
      function pc(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C, A, F, B, p, m, h, b, D, v, _ = D0(t[11]), k = [];
        for (let g = 0; g < _.length; g += 1) k[g] = lo(no(t, _, g));
        let w = t[13] && ro();
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Your partner's number", n = y(), o = d("p"), l = z(t[10]), r = y(), s = d("p"), s.textContent = "Ask your partner to confirm this matches their screen.", a = y(), u = d("section"), E = d("p"), E.textContent = "Let your partner scan your code", f = y(), C = d("div"), A = d("div"), F = y(), B = d("section"), p = d("p"), p.textContent = "What is your number?", m = y(), h = d("p"), h.textContent = "Tap the number shown on your screen above.", b = y(), D = d("div");
            for (let g = 0; g < k.length; g += 1) k[g].c();
            v = y(), w && w.c(), c(x, "class", "section-label svelte-qzc8r5"), c(o, "class", "confirm-number svelte-qzc8r5"), c(s, "class", "help-text svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5"), c(E, "class", "section-label svelte-qzc8r5"), c(A, "class", "qr-inner svelte-qzc8r5"), c(C, "class", "qr-frame svelte-qzc8r5"), c(u, "class", "card pad svelte-qzc8r5"), c(p, "class", "section-label svelte-qzc8r5"), c(h, "class", "help-text svelte-qzc8r5"), c(D, "class", "choices svelte-qzc8r5"), c(B, "class", "card pad svelte-qzc8r5");
          },
          m(g, M) {
            T(g, e, M), i(e, x), i(e, n), i(e, o), i(o, l), i(e, r), i(e, s), T(g, a, M), T(g, u, M), i(u, E), i(u, f), i(u, C), i(C, A), A.innerHTML = t[3], T(g, F, M), T(g, B, M), i(B, p), i(B, m), i(B, h), i(B, b), i(B, D);
            for (let I = 0; I < k.length; I += 1) k[I] && k[I].m(D, null);
            i(B, v), w && w.m(B, null);
          },
          p(g, M) {
            if (M[0] & 1024 && V(l, g[10]), M[0] & 8 && (A.innerHTML = g[3]), M[0] & 272384) {
              _ = D0(g[11]);
              let I;
              for (I = 0; I < _.length; I += 1) {
                const S = no(g, _, I);
                k[I] ? k[I].p(S, M) : (k[I] = lo(S), k[I].c(), k[I].m(D, null));
              }
              for (; I < k.length; I += 1) k[I].d(1);
              k.length = _.length;
            }
            g[13] ? w || (w = ro(), w.c(), w.m(B, null)) : w && (w.d(1), w = null);
          },
          d(g) {
            g && (P(e), P(a), P(u), P(F), P(B)), $0(k, g), w && w.d();
          }
        };
      }
      function mc(t) {
        let e, x, n, o, l, r;
        return {
          c() {
            e = d("div"), x = d("video"), n = y(), o = d("canvas"), l = y(), r = d("div"), r.innerHTML = '<div class="scan-box svelte-qzc8r5"></div> <p class="scan-hint svelte-qzc8r5">Point at your partner&#39;s QR code</p>', x.playsInline = true, c(x, "class", "camera-video svelte-qzc8r5"), c(o, "class", "camera-canvas svelte-qzc8r5"), c(r, "class", "scan-overlay svelte-qzc8r5"), c(e, "class", "camera-wrap svelte-qzc8r5");
          },
          m(s, a) {
            T(s, e, a), i(e, x), t[25](x), i(e, n), i(e, o), t[26](o), i(e, l), i(e, r);
          },
          p: Z,
          d(s) {
            s && P(e), t[25](null), t[26](null);
          }
        };
      }
      function hc(t) {
        let e, x, n, o, l, r, s, a, u, E = t[14] ? "check" : "content_copy", f, C, A = t[14] ? "Copied!" : "Copy as text", F, B, p, m, h, b, D, v = t[7] ? "Hide" : "Enter code manually", _, k, w, g, M, I = t[6] && so(t), S = t[9] && ao(t);
        function L(R, j) {
          return R[3] ? yc : wc;
        }
        let N = L(t), q = N(t), U = t[7] && io(t);
        return {
          c() {
            I && I.c(), e = y(), S && S.c(), x = y(), n = d("section"), o = d("p"), o.textContent = "Show this to your partner", l = y(), r = d("div"), q.c(), s = y(), a = d("button"), u = d("span"), f = z(E), C = y(), F = z(A), p = y(), m = d("div"), h = d("button"), h.innerHTML = `<span class="material-icons svelte-qzc8r5">qr_code_scanner</span>
        Scan Their Code`, b = y(), D = d("button"), _ = z(v), k = y(), U && U.c(), w = K0(), c(o, "class", "section-label svelte-qzc8r5"), c(r, "class", "qr-frame svelte-qzc8r5"), c(u, "class", "material-icons svelte-qzc8r5"), c(a, "class", "btn-copy svelte-qzc8r5"), a.disabled = B = !t[2], c(n, "class", "card pad svelte-qzc8r5"), c(h, "class", "btn-filled svelte-qzc8r5"), c(D, "class", "btn-text svelte-qzc8r5"), c(m, "class", "scan-actions svelte-qzc8r5");
          },
          m(R, j) {
            I && I.m(R, j), T(R, e, j), S && S.m(R, j), T(R, x, j), T(R, n, j), i(n, o), i(n, l), i(n, r), q.m(r, null), i(n, s), i(n, a), i(a, u), i(u, f), i(a, C), i(a, F), T(R, p, j), T(R, m, j), i(m, h), i(m, b), i(m, D), i(D, _), T(R, k, j), U && U.m(R, j), T(R, w, j), g || (M = [
              H(a, "click", t[20]),
              H(h, "click", t[15]),
              H(D, "click", t[22])
            ], g = true);
          },
          p(R, j) {
            R[6] ? I ? I.p(R, j) : (I = so(R), I.c(), I.m(e.parentNode, e)) : I && (I.d(1), I = null), R[9] ? S ? S.p(R, j) : (S = ao(R), S.c(), S.m(x.parentNode, x)) : S && (S.d(1), S = null), N === (N = L(R)) && q ? q.p(R, j) : (q.d(1), q = N(R), q && (q.c(), q.m(r, null))), j[0] & 16384 && E !== (E = R[14] ? "check" : "content_copy") && V(f, E), j[0] & 16384 && A !== (A = R[14] ? "Copied!" : "Copy as text") && V(F, A), j[0] & 4 && B !== (B = !R[2]) && (a.disabled = B), j[0] & 128 && v !== (v = R[7] ? "Hide" : "Enter code manually") && V(_, v), R[7] ? U ? U.p(R, j) : (U = io(R), U.c(), U.m(w.parentNode, w)) : U && (U.d(1), U = null);
          },
          d(R) {
            R && (P(e), P(x), P(n), P(p), P(m), P(k), P(w)), I && I.d(R), S && S.d(R), q.d(), U && U.d(R), g = false, l0(M);
          }
        };
      }
      function vc(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-qzc8r5">check_circle</span> <p class="saved-title svelte-qzc8r5">Encounter recorded</p> <p class="muted svelte-qzc8r5">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-qzc8r5">View encounters</a>', c(e, "class", "card pad saved-card svelte-qzc8r5");
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
      function _c(t) {
        let e, x, n, o, l;
        return {
          c() {
            e = d("section"), x = d("p"), n = z(t[1]), o = y(), l = d("a"), l.textContent = "\u2190 Back", c(x, "class", "error svelte-qzc8r5"), c(l, "href", "#/home"), c(l, "class", "btn-text svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(r, s) {
            T(r, e, s), i(e, x), i(x, n), i(e, o), i(e, l);
          },
          p(r, s) {
            s[0] & 2 && V(n, r[1]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function kc(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = '<div class="spinner svelte-qzc8r5"></div> <p class="muted svelte-qzc8r5">Generating your code\u2026</p>', c(e, "class", "center-fill svelte-qzc8r5");
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
      function bc(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Unnamed group encounter", c(e, "class", "help-text svelte-qzc8r5");
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
      function gc(t) {
        let e, x = t[12].name + "", n;
        return {
          c() {
            e = d("p"), n = z(x), c(e, "class", "confirm-group-name svelte-qzc8r5");
          },
          m(o, l) {
            T(o, e, l), i(e, n);
          },
          p(o, l) {
            l[0] & 4096 && x !== (x = o[12].name + "") && V(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function oo(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Saving\u2026", c(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function lo(t) {
        let e, x = t[44] + "", n, o, l;
        function r() {
          return t[27](t[44]);
        }
        return {
          c() {
            e = d("button"), n = z(x), c(e, "class", "choice-btn svelte-qzc8r5"), e.disabled = t[13];
          },
          m(s, a) {
            T(s, e, a), i(e, n), o || (l = H(e, "click", r), o = true);
          },
          p(s, a) {
            t = s, a[0] & 2048 && x !== (x = t[44] + "") && V(n, x), a[0] & 8192 && (e.disabled = t[13]);
          },
          d(s) {
            s && P(e), o = false, l();
          }
        };
      }
      function ro(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Saving\u2026", c(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function so(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = y(), o = z(t[6]), c(x, "class", "material-icons svelte-qzc8r5"), c(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(l, r) {
            T(l, e, r), i(e, x), i(e, n), i(e, o);
          },
          p(l, r) {
            r[0] & 64 && V(o, l[6]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function ao(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = y(), o = z(t[9]), c(x, "class", "material-icons svelte-qzc8r5"), c(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(l, r) {
            T(l, e, r), i(e, x), i(e, n), i(e, o);
          },
          p(l, r) {
            r[0] & 512 && V(o, l[9]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function wc(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Generating\u2026", c(e, "class", "muted svelte-qzc8r5");
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
      function yc(t) {
        let e;
        return {
          c() {
            e = d("div"), c(e, "class", "qr-inner svelte-qzc8r5");
          },
          m(x, n) {
            T(x, e, n), e.innerHTML = t[3];
          },
          p(x, n) {
            n[0] & 8 && (e.innerHTML = x[3]);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function io(t) {
        let e, x, n, o, l, r, s, a, u, E, f, C = t[9] && co(t);
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Paste their QR payload", n = y(), o = d("textarea"), l = y(), C && C.c(), r = y(), s = d("button"), a = z("Continue"), c(x, "class", "section-label svelte-qzc8r5"), c(o, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), c(o, "rows", "3"), c(o, "class", "svelte-qzc8r5"), c(s, "class", "btn-filled svelte-qzc8r5"), s.disabled = u = !t[8].trim(), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(A, F) {
            T(A, e, F), i(e, x), i(e, n), i(e, o), x0(o, t[8]), i(e, l), C && C.m(e, null), i(e, r), i(e, s), i(s, a), E || (f = [
              H(o, "input", t[23]),
              H(o, "keydown", t[24]),
              H(s, "click", t[16])
            ], E = true);
          },
          p(A, F) {
            F[0] & 256 && x0(o, A[8]), A[9] ? C ? C.p(A, F) : (C = co(A), C.c(), C.m(e, r)) : C && (C.d(1), C = null), F[0] & 256 && u !== (u = !A[8].trim()) && (s.disabled = u);
          },
          d(A) {
            A && P(e), C && C.d(), E = false, l0(f);
          }
        };
      }
      function co(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = z(t[9]), c(e, "class", "error-text svelte-qzc8r5");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 512 && V(x, n[9]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Pc(t) {
        let e, x, n, o, l, r, s, a;
        e = new ee({});
        function u(h, b) {
          return h[0] === "scanning" || h[0] === "confirm-group" ? Ec : uc;
        }
        let E = u(t), f = E(t);
        function C(h, b) {
          return h[0] === "scanning" ? Ac : h[0] === "confirm" || h[0] === "ongoing?" ? Cc : h[0] === "confirm-group" ? Bc : h[0] === "saved" ? dc : fc;
        }
        let A = C(t), F = A(t);
        function B(h, b) {
          if (h[0] === "loading") return kc;
          if (h[0] === "error") return _c;
          if (h[0] === "saved") return vc;
          if (h[0] === "showQR") return hc;
          if (h[0] === "scanning") return mc;
          if (h[0] === "confirm") return pc;
          if (h[0] === "ongoing?") return Dc;
          if (h[0] === "confirm-group") return Fc;
        }
        let p = B(t), m = p && p(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), o = d("div"), f.c(), l = y(), r = d("h1"), F.c(), s = y(), m && m.c(), c(r, "class", "svelte-qzc8r5"), c(o, "class", "page-header svelte-qzc8r5"), c(n, "class", "svelte-qzc8r5");
          },
          m(h, b) {
            y0(e, h, b), T(h, x, b), T(h, n, b), i(n, o), f.m(o, null), i(o, l), i(o, r), F.m(r, null), i(n, s), m && m.m(n, null), a = true;
          },
          p(h, b) {
            E === (E = u(h)) && f ? f.p(h, b) : (f.d(1), f = E(h), f && (f.c(), f.m(o, l))), A !== (A = C(h)) && (F.d(1), F = A(h), F && (F.c(), F.m(r, null))), p === (p = B(h)) && m ? m.p(h, b) : (m && m.d(1), m = p && p(h), m && (m.c(), m.m(n, null)));
          },
          i(h) {
            a || (F0(e.$$.fragment, h), a = true);
          },
          o(h) {
            v0(e.$$.fragment, h), a = false;
          },
          d(h) {
            h && (P(x), P(n)), P0(e, h), f.d(), F.d(), m && m.d();
          }
        };
      }
      function Ux(t) {
        return 10 + (t[1] * 256 + t[2]) % 90;
      }
      function uo(t) {
        const e = /* @__PURE__ */ new Set([
          t
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((x, n) => x - n);
      }
      function Tc(t, e, x) {
        let n = "loading", o = null, l = null, r = "", s = 0, a = "", u = null, E = null, f = null, C = null, A = null, F = false, B = false, p = "", m = null, h = null, b = null, D = 0, v = [], _ = null, k = "", w = null, g = "", M = false, I = false;
        M0(async () => {
          if (!O0()) {
            i0("/login");
            return;
          }
          try {
            const X = ts(), t0 = le(), s0 = Math.floor(Date.now() / 1e3);
            l = X.privateKey, s = Ux(X.publicKey), x(2, r = `1|${Ee(X.publicKey)}|${s0}|${e0(t0)}`), x(3, a = await Ae.toString(r, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#000000",
                light: "#ffffff"
              }
            })), x(0, n = "showQR");
          } catch (X) {
            x(1, o = X.message), x(0, n = "error");
          }
        }), px(() => {
          L();
        });
        async function S() {
          if (x(6, A = null), F = false, !navigator.mediaDevices?.getUserMedia) {
            x(6, A = "Camera not available. This page must be opened over HTTPS to use the camera."), x(0, n = "showQR");
            return;
          }
          x(0, n = "scanning"), await new Promise((X) => setTimeout(X, 50));
          try {
            f = await navigator.mediaDevices.getUserMedia({
              video: {
                facingMode: "environment",
                width: {
                  ideal: 1280
                },
                height: {
                  ideal: 720
                }
              }
            }), x(4, u.srcObject = f, u), await u.play(), N();
          } catch (X) {
            x(6, A = X.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + X.message), L(), x(0, n = "showQR");
          }
        }
        function L() {
          C && (cancelAnimationFrame(C), C = null), f && (f.getTracks().forEach((X) => X.stop()), f = null), F = false;
        }
        function N() {
          if (!f || !u || u.readyState < 2) {
            C = requestAnimationFrame(N);
            return;
          }
          const X = u.videoWidth, t0 = u.videoHeight;
          if (!X || !t0) {
            C = requestAnimationFrame(N);
            return;
          }
          x(5, E.width = X, E), x(5, E.height = t0, E);
          const s0 = E.getContext("2d");
          s0.drawImage(u, 0, 0, X, t0);
          const A0 = s0.getImageData(0, 0, X, t0), p0 = cc(A0.data, X, t0, {
            inversionAttempts: "dontInvert"
          });
          if (p0 && !F) {
            F = true, U(p0.data);
            return;
          }
          C = requestAnimationFrame(N);
        }
        function q(X) {
          const t0 = X.trim().split("|"), s0 = parseInt(t0[0], 10);
          if (!isNaN(s0) && s0 > 1) throw new Error("Your partner has a newer app version. Please update.");
          if (t0.length !== 4 || t0[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, A0, , p0] = t0;
          if (!A0 || A0.length < 10) throw new Error("Invalid QR payload");
          if (!p0 || p0.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: No(A0),
            contactIdBytes: T0(p0)
          };
        }
        function U(X) {
          const t0 = X.trim();
          if (t0.startsWith("2|")) {
            try {
              const s0 = gt(t0);
              if (!s0) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - s0.timestamp > 86400) {
                F = false, C = requestAnimationFrame(N);
                return;
              }
              L(), x(12, _ = s0), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group");
            } catch {
              F = false, C = requestAnimationFrame(N);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: s0, contactIdBytes: A0 } = q(X);
            if (e0(A0) === e0(le())) {
              F = false, x(9, m = "You can't log an encounter with yourself."), x(0, n = "showQR");
              return;
            }
            L(), h = s0, b = A0, x(10, D = Ux(s0)), x(11, v = uo(s)), x(0, n = "confirm");
          } catch {
            F = false, C = requestAnimationFrame(N);
          }
        }
        function R() {
          x(9, m = null);
          const X = p.trim();
          try {
            if (X.startsWith("2|")) {
              const t0 = gt(X);
              if (!t0) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - t0.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              x(12, _ = t0), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group"), x(7, B = false);
            } else {
              const { ephemeralPubkeyBytes: t0, contactIdBytes: s0 } = q(X);
              if (e0(s0) === e0(le())) throw new Error("You can't log an encounter with yourself.");
              h = t0, b = s0, x(10, D = Ux(t0)), x(11, v = uo(s)), x(0, n = "confirm"), x(7, B = false);
            }
          } catch (t0) {
            x(9, m = t0.message);
          }
        }
        function j() {
          L(), x(12, _ = null), x(0, n = "showQR"), x(7, B = false), x(9, m = null), x(8, p = "");
        }
        async function Q(X) {
          if (X !== s) {
            x(9, m = "Wrong \u2014 that's not your number. Scan again."), x(0, n = "showQR"), x(7, B = false), x(8, p = ""), h = null, b = null;
            return;
          }
          const t0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          w = ns(l, h), g = t0;
          const p0 = X0()?.encounters || [], U0 = ft(), N0 = e0(b), b0 = p0.some((R0) => e0(R0.theirContactId) === N0), w0 = U0.some((R0) => e0(R0.theirContactId) === N0 && !R0.endedAt);
          b0 && !w0 ? x(0, n = "ongoing?") : await K(false);
        }
        async function K(X) {
          x(13, M = true);
          try {
            const t0 = le(), s0 = ue(w, t0, 0);
            await Ho(e0(s0), g), X ? await Ys(w, b, g) : await Gs(w, b, g), x(0, n = "saved");
          } catch (t0) {
            x(1, o = t0.message), x(0, n = "error");
          } finally {
            x(13, M = false);
          }
        }
        async function G() {
          try {
            await navigator.clipboard.writeText(r), x(14, I = true), setTimeout(() => {
              x(14, I = false);
            }, 2e3);
          } catch {
          }
        }
        async function O() {
          x(13, M = true);
          try {
            const X = T0(_.groupTokenHex), t0 = T0(_.hostContactIdHex);
            await el(X, k, false, t0, _.name), x(0, n = "saved");
          } catch (X) {
            x(1, o = X.message), x(0, n = "error");
          } finally {
            x(13, M = false);
          }
        }
        const W = () => {
          x(7, B = !B), x(9, m = null);
        };
        function Y() {
          p = this.value, x(8, p);
        }
        const r0 = (X) => X.key === "Enter" && !X.shiftKey && (X.preventDefault(), R());
        function f0(X) {
          sx[X ? "unshift" : "push"](() => {
            u = X, x(4, u);
          });
        }
        function c0(X) {
          sx[X ? "unshift" : "push"](() => {
            E = X, x(5, E);
          });
        }
        return [
          n,
          o,
          r,
          a,
          u,
          E,
          A,
          B,
          p,
          m,
          D,
          v,
          _,
          M,
          I,
          S,
          R,
          j,
          Q,
          K,
          G,
          O,
          W,
          Y,
          r0,
          f0,
          c0,
          (X) => Q(X),
          () => K(true),
          () => K(false)
        ];
      }
      class Sc extends k0 {
        constructor(e) {
          super(), _0(this, e, Tc, Pc, m0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function Mc(t) {
        let e, x, n, o, l, r, s = Co(t[1].date) + "", a, u, E, f = t[0].rawTokenHex.slice(0, 12) + "", C, A, F, B, p, m, h, b, D, v, _ = t[3] && Eo(t), k = t[7] && fo(t), w = t[5] && Bo(t);
        return {
          c() {
            _ && _.c(), e = y(), k && k.c(), x = y(), n = d("section"), o = d("div"), o.innerHTML = '<span class="material-icons status-icon svelte-nknqao">check_circle_outline</span> <span class="status-label svelte-nknqao">One-time encounter</span>', l = y(), r = d("p"), a = z(s), u = y(), E = d("p"), C = z(f), A = z("\u2026"), F = y(), B = d("section"), p = d("div"), p.innerHTML = '<span class="material-icons privacy-icon svelte-nknqao">lock_outline</span> <p class="privacy-text svelte-nknqao">Your note is stored encrypted and never shared.</p>', m = y(), h = d("textarea"), b = y(), w && w.c(), c(o, "class", "status-row svelte-nknqao"), c(r, "class", "date svelte-nknqao"), c(E, "class", "token svelte-nknqao"), c(n, "class", "card pad svelte-nknqao"), c(p, "class", "privacy-row svelte-nknqao"), c(h, "placeholder", "Add a private note\u2026"), c(h, "rows", "5"), c(h, "class", "svelte-nknqao"), c(B, "class", "card pad svelte-nknqao");
          },
          m(g, M) {
            _ && _.m(g, M), T(g, e, M), k && k.m(g, M), T(g, x, M), T(g, n, M), i(n, o), i(n, l), i(n, r), i(r, a), i(n, u), i(n, E), i(E, C), i(E, A), T(g, F, M), T(g, B, M), i(B, p), i(B, m), i(B, h), x0(h, t[4]), i(B, b), w && w.m(B, null), D || (v = [
              H(h, "input", t[13]),
              H(h, "input", t[8])
            ], D = true);
          },
          p(g, M) {
            g[3] ? _ ? _.p(g, M) : (_ = Eo(g), _.c(), _.m(e.parentNode, e)) : _ && (_.d(1), _ = null), g[7] ? k ? k.p(g, M) : (k = fo(g), k.c(), k.m(x.parentNode, x)) : k && (k.d(1), k = null), M & 2 && s !== (s = Co(g[1].date) + "") && V(a, s), M & 1 && f !== (f = g[0].rawTokenHex.slice(0, 12) + "") && V(C, f), M & 16 && x0(h, g[4]), g[5] ? w ? w.p(g, M) : (w = Bo(g), w.c(), w.m(B, null)) : w && (w.d(1), w = null);
          },
          d(g) {
            g && (P(e), P(x), P(n), P(F), P(B)), _ && _.d(g), k && k.d(g), w && w.d(), D = false, l0(v);
          }
        };
      }
      function Ic(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-nknqao">This encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-nknqao">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-nknqao");
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
      function Eo(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = y(), o = z(t[3]), c(x, "class", "material-icons svelte-nknqao"), c(e, "class", "toast error-toast svelte-nknqao");
          },
          m(l, r) {
            T(l, e, r), i(e, x), i(e, n), i(e, o);
          },
          p(l, r) {
            r & 8 && V(o, l[3]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function fo(t) {
        let e, x, n, o, l, r, s, a, u, E = t[6] ? "Saving\u2026" : "Save note", f, C, A;
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "You have unsaved changes to your note.", n = y(), o = d("div"), l = d("button"), l.textContent = "Keep editing", r = y(), s = d("button"), s.textContent = "Discard", a = y(), u = d("button"), f = z(E), c(x, "class", "confirm-text svelte-nknqao"), c(l, "class", "btn-text svelte-nknqao"), c(s, "class", "btn-text danger svelte-nknqao"), c(u, "class", "btn-filled-sm svelte-nknqao"), u.disabled = t[6], c(o, "class", "confirm-actions svelte-nknqao"), c(e, "class", "card pad leave-confirm svelte-nknqao");
          },
          m(F, B) {
            T(F, e, B), i(e, x), i(e, n), i(e, o), i(o, l), i(o, r), i(o, s), i(o, a), i(o, u), i(u, f), C || (A = [
              H(l, "click", t[12]),
              H(s, "click", t[11]),
              H(u, "click", t[10])
            ], C = true);
          },
          p(F, B) {
            B & 64 && E !== (E = F[6] ? "Saving\u2026" : "Save note") && V(f, E), B & 64 && (u.disabled = F[6]);
          },
          d(F) {
            F && P(e), C = false, l0(A);
          }
        };
      }
      function Bo(t) {
        let e, x, n = t[6] ? "Saving\u2026" : "Save", o, l, r;
        return {
          c() {
            e = d("div"), x = d("button"), o = z(n), c(x, "class", "btn-filled-sm svelte-nknqao"), x.disabled = t[6], c(e, "class", "note-actions svelte-nknqao");
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(x, o), l || (r = H(x, "click", t[9]), l = true);
          },
          p(s, a) {
            a & 64 && n !== (n = s[6] ? "Saving\u2026" : "Save") && V(o, n), a & 64 && (x.disabled = s[6]);
          },
          d(s) {
            s && P(e), l = false, r();
          }
        };
      }
      function Lc(t) {
        let e, x, n, o, l, r, s, a = t[2] ? "Not found" : "Encounter", u, E, f;
        e = new ee({});
        function C(B, p) {
          if (B[2]) return Ic;
          if (B[1]) return Mc;
        }
        let A = C(t), F = A && A(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), n = d("main"), o = d("div"), l = d("a"), l.innerHTML = '<span class="material-icons svelte-nknqao">arrow_back</span>', r = y(), s = d("h1"), u = z(a), E = y(), F && F.c(), c(l, "class", "back-btn svelte-nknqao"), c(l, "href", "#/encounters"), c(s, "class", "svelte-nknqao"), c(o, "class", "page-header svelte-nknqao"), c(n, "class", "svelte-nknqao");
          },
          m(B, p) {
            y0(e, B, p), T(B, x, p), T(B, n, p), i(n, o), i(o, l), i(o, r), i(o, s), i(s, u), i(n, E), F && F.m(n, null), f = true;
          },
          p(B, [p]) {
            (!f || p & 4) && a !== (a = B[2] ? "Not found" : "Encounter") && V(u, a), A === (A = C(B)) && F ? F.p(B, p) : (F && F.d(1), F = A && A(B), F && (F.c(), F.m(n, null)));
          },
          i(B) {
            f || (F0(e.$$.fragment, B), f = true);
          },
          o(B) {
            v0(e.$$.fragment, B), f = false;
          },
          d(B) {
            B && (P(x), P(n)), P0(e, B), F && F.d();
          }
        };
      }
      function Co(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Nc(t, e, x) {
        let { params: n = {} } = e, o = null, l = false, r = null, s = "", a = false, u = false, E = false, f = null;
        M0(() => {
          if (!O0()) {
            i0("/login");
            return;
          }
          F(), document.addEventListener("click", A, {
            capture: true
          }), window.addEventListener("beforeunload", C);
        }), px(() => {
          document.removeEventListener("click", A, {
            capture: true
          }), window.removeEventListener("beforeunload", C);
        });
        function C(_) {
          a && (_.preventDefault(), _.returnValue = "");
        }
        function A(_) {
          if (!a) return;
          const k = _.target.closest('a[href^="#/"]');
          k && (_.preventDefault(), _.stopImmediatePropagation(), f = k.getAttribute("href").slice(1), x(7, E = true));
        }
        function F() {
          const _ = n.rawTokenHex;
          if (x(1, o = Xo().find((k) => e0(k.rawToken) === _) ?? null), !o) {
            x(2, l = true);
            return;
          }
          x(4, s = o.note ?? "");
        }
        function B() {
          x(5, a = s !== (o.note ?? ""));
        }
        async function p() {
          if (!(!a || u)) {
            x(6, u = true), x(3, r = null);
            try {
              const _ = s.trim() || null;
              await Ks(n.rawTokenHex, {
                note: _
              }), F(), x(5, a = false);
            } catch (_) {
              x(3, r = _.message);
            } finally {
              x(6, u = false);
            }
          }
        }
        async function m() {
          await p(), r || b();
        }
        function h() {
          x(4, s = o.note ?? ""), x(5, a = false), b();
        }
        function b() {
          x(7, E = false), i0(f);
        }
        const D = () => x(7, E = false);
        function v() {
          s = this.value, x(4, s);
        }
        return t.$$set = (_) => {
          "params" in _ && x(0, n = _.params);
        }, [
          n,
          o,
          l,
          r,
          s,
          a,
          u,
          E,
          B,
          p,
          m,
          h,
          D,
          v
        ];
      }
      class zc extends k0 {
        constructor(e) {
          super(), _0(this, e, Nc, Lc, m0, {
            params: 0
          });
        }
      }
      function qc(t) {
        let e, x, n, o, l, r, s;
        e = new Rl({
          props: {
            routes: t[7]
          }
        }), e.$on("routeLoaded", t[11]), n = new ds({});
        let a = t[6] === false && Ao(t), u = t[4] && Fo(t);
        return {
          c() {
            S0(e.$$.fragment), x = y(), S0(n.$$.fragment), o = y(), a && a.c(), l = y(), u && u.c(), r = K0();
          },
          m(E, f) {
            y0(e, E, f), T(E, x, f), y0(n, E, f), T(E, o, f), a && a.m(E, f), T(E, l, f), u && u.m(E, f), T(E, r, f), s = true;
          },
          p(E, f) {
            E[6] === false ? a ? a.p(E, f) : (a = Ao(E), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null), E[4] ? u ? u.p(E, f) : (u = Fo(E), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null);
          },
          i(E) {
            s || (F0(e.$$.fragment, E), F0(n.$$.fragment, E), s = true);
          },
          o(E) {
            v0(e.$$.fragment, E), v0(n.$$.fragment, E), s = false;
          },
          d(E) {
            E && (P(x), P(o), P(l), P(r)), P0(e, E), P0(n, E), a && a.d(E), u && u.d(E);
          }
        };
      }
      function Rc(t) {
        let e;
        return {
          c() {
            e = d("main"), e.textContent = "Loading\u2026", c(e, "class", "loading svelte-1kqo0f9");
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
      function Oc(t) {
        let e, x, n, o, l, r;
        return {
          c() {
            e = d("main"), x = d("p"), n = z("Failed to load crypto module: "), o = z(t[3]), l = y(), r = d("p"), r.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", c(e, "class", "error svelte-1kqo0f9");
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(x, n), i(x, o), i(e, l), i(e, r);
          },
          p(s, a) {
            a & 8 && V(o, s[3]);
          },
          i: Z,
          o: Z,
          d(s) {
            s && P(e);
          }
        };
      }
      function Ao(t) {
        let e, x, n, o, l;
        function r(u, E) {
          return u[1] ? Uc : Hc;
        }
        let s = r(t), a = s(t);
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "mail_outline", n = y(), o = d("span"), o.textContent = "Please verify your email address. Check your inbox for a verification link.", l = y(), a.c(), c(x, "class", "material-icons svelte-1kqo0f9"), c(o, "class", "verify-text svelte-1kqo0f9"), c(e, "class", "verify-banner svelte-1kqo0f9");
          },
          m(u, E) {
            T(u, e, E), i(e, x), i(e, n), i(e, o), i(e, l), a.m(e, null);
          },
          p(u, E) {
            s === (s = r(u)) && a ? a.p(u, E) : (a.d(1), a = s(u), a && (a.c(), a.m(e, null)));
          },
          d(u) {
            u && P(e), a.d();
          }
        };
      }
      function Hc(t) {
        let e, x = t[0] ? "Sending\u2026" : "Resend", n, o, l;
        return {
          c() {
            e = d("button"), n = z(x), c(e, "class", "resend-btn svelte-1kqo0f9"), e.disabled = t[0];
          },
          m(r, s) {
            T(r, e, s), i(e, n), o || (l = H(e, "click", t[8]), o = true);
          },
          p(r, s) {
            s & 1 && x !== (x = r[0] ? "Sending\u2026" : "Resend") && V(n, x), s & 1 && (e.disabled = r[0]);
          },
          d(r) {
            r && P(e), o = false, l();
          }
        };
      }
      function Uc(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Sent!", c(e, "class", "resend-sent svelte-1kqo0f9");
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
      function Fo(t) {
        let e, x, n, o, l, r, s, a = Math.floor(t[5] / 60) + "", u, E, f = String(t[5] % 60).padStart(2, "0") + "", C, A, F, B, p, m, h, b, D;
        return {
          c() {
            e = d("div"), x = d("div"), n = d("h2"), n.textContent = "Session expiring", o = y(), l = d("p"), r = z(`You'll be logged out in
          `), s = d("strong"), u = z(a), E = z(":"), C = z(f), A = z(`
          due to inactivity.`), F = y(), B = d("div"), p = d("button"), p.textContent = "Stay logged in", m = y(), h = d("button"), h.textContent = "Log out now", c(n, "id", "idle-title"), c(n, "class", "svelte-1kqo0f9"), c(l, "class", "svelte-1kqo0f9"), c(p, "class", "btn-primary svelte-1kqo0f9"), c(h, "class", "btn-ghost svelte-1kqo0f9"), c(B, "class", "idle-actions svelte-1kqo0f9"), c(x, "class", "idle-dialog svelte-1kqo0f9"), c(e, "class", "idle-overlay svelte-1kqo0f9"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "idle-title");
          },
          m(v, _) {
            T(v, e, _), i(e, x), i(x, n), i(x, o), i(x, l), i(l, r), i(l, s), i(s, u), i(s, E), i(s, C), i(l, A), i(x, F), i(x, B), i(B, p), i(B, m), i(B, h), b || (D = [
              H(p, "click", t[9]),
              H(h, "click", t[10])
            ], b = true);
          },
          p(v, _) {
            _ & 32 && a !== (a = Math.floor(v[5] / 60) + "") && V(u, a), _ & 32 && f !== (f = String(v[5] % 60).padStart(2, "0") + "") && V(C, f);
          },
          d(v) {
            v && P(e), b = false, l0(D);
          }
        };
      }
      function jc(t) {
        let e, x, n, o;
        const l = [
          Oc,
          Rc,
          qc
        ], r = [];
        function s(a, u) {
          return a[3] ? 0 : a[2] ? 2 : 1;
        }
        return e = s(t), x = r[e] = l[e](t), {
          c() {
            x.c(), n = K0();
          },
          m(a, u) {
            r[e].m(a, u), T(a, n, u), o = true;
          },
          p(a, [u]) {
            let E = e;
            e = s(a), e === E ? r[e].p(a, u) : (mx(), v0(r[E], 1, 1, () => {
              r[E] = null;
            }), hx(), x = r[e], x ? x.p(a, u) : (x = r[e] = l[e](a), x.c()), F0(x, 1), x.m(n.parentNode, n));
          },
          i(a) {
            o || (F0(x), o = true);
          },
          o(a) {
            v0(x), o = false;
          },
          d(a) {
            a && P(n), r[e].d(a);
          }
        };
      }
      const Do = 120;
      function Vc(t, e, x) {
        let n;
        V0(t, Ce, (m) => x(6, n = m));
        const o = {
          "/": Hs,
          "/login": da,
          "/signup": Fa,
          "/home": va,
          "/encounter-exchange": Sc,
          "/encounters": Ia,
          "/encounters/:rawTokenHex": zc,
          "/relationships/:rawTokenHex": Ja,
          "/groups/:tokenHex": y9,
          "/results": ai,
          "/change-password": ui,
          "/change-email": Ci,
          "/verify-email/:token": hi,
          "/alerts": yi,
          "/settings": xc,
          "/settings/2fa-setup": ac
        };
        let l = false, r = false;
        async function s() {
          x(0, l = true);
          try {
            await ps(), x(1, r = true);
          } catch {
          } finally {
            x(0, l = false);
          }
        }
        let a = false, u = null, E = false, f = Do, C = null;
        function A() {
          x(5, f = Do), clearInterval(C), C = setInterval(() => {
            x(5, f -= 1), f <= 0 && clearInterval(C);
          }, 1e3);
        }
        function F() {
          x(4, E = false), clearInterval(C), qs();
        }
        async function B() {
          x(4, E = false), clearInterval(C), Qx(), await Oo(), i0("/login");
        }
        function p(m) {
          const h = m.detail.location;
          !(h === "/" || h === "/login" || h.startsWith("/signup")) && O0() ? zs({
            onWarnCallback: () => {
              x(4, E = true), A();
            },
            onExpiredCallback: B
          }) : (Qx(), x(4, E = false), clearInterval(C));
        }
        return M0(async () => {
          try {
            await xs(), x(2, a = true);
          } catch (m) {
            x(3, u = m.message);
          }
        }), [
          l,
          r,
          a,
          u,
          E,
          f,
          n,
          o,
          s,
          F,
          B,
          p
        ];
      }
      class Gc extends k0 {
        constructor(e) {
          super(), _0(this, e, Vc, jc, m0, {});
        }
      }
      "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
      new Gc({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
