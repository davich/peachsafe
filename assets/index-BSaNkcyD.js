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
          for (const r of o) if (r.type === "childList") for (const l of r.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function x(o) {
          const r = {};
          return o.integrity && (r.integrity = o.integrity), o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? r.credentials = "include" : o.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
        }
        function n(o) {
          if (o.ep) return;
          o.ep = true;
          const r = x(o);
          fetch(o.href, r);
        }
      })();
      function X() {
      }
      function Oe(t, e) {
        for (const x in e) t[x] = e[x];
        return t;
      }
      function Ln(t) {
        return t();
      }
      function Xx() {
        return /* @__PURE__ */ Object.create(null);
      }
      function i0(t) {
        t.forEach(Ln);
      }
      function Px(t) {
        return typeof t == "function";
      }
      function m0(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
      }
      let Te;
      function Zx(t, e) {
        return t === e ? true : (Te || (Te = document.createElement("a")), Te.href = e, t === Te.href);
      }
      function yo(t) {
        return Object.keys(t).length === 0;
      }
      function Nn(t, ...e) {
        if (t == null) {
          for (const n of e) n(void 0);
          return X;
        }
        const x = t.subscribe(...e);
        return x.unsubscribe ? () => x.unsubscribe() : x;
      }
      function We(t, e, x) {
        t.$$.on_destroy.push(Nn(e, x));
      }
      function i(t, e) {
        t.appendChild(e);
      }
      function P(t, e, x) {
        t.insertBefore(e, x || null);
      }
      function y(t) {
        t.parentNode && t.parentNode.removeChild(t);
      }
      function q0(t, e) {
        for (let x = 0; x < t.length; x += 1) t[x] && t[x].d(e);
      }
      function C(t) {
        return document.createElement(t);
      }
      function N(t) {
        return document.createTextNode(t);
      }
      function w() {
        return N(" ");
      }
      function M0() {
        return N("");
      }
      function G(t, e, x, n) {
        return t.addEventListener(e, x, n), () => t.removeEventListener(e, x, n);
      }
      function z0(t) {
        return function(e) {
          return e.preventDefault(), t.call(this, e);
        };
      }
      function Po(t) {
        return function(e) {
          return e.stopPropagation(), t.call(this, e);
        };
      }
      function f(t, e, x) {
        x == null ? t.removeAttribute(e) : t.getAttribute(e) !== x && t.setAttribute(e, x);
      }
      function To(t) {
        return Array.from(t.childNodes);
      }
      function U(t, e) {
        e = "" + e, t.data !== e && (t.data = e);
      }
      function t0(t, e) {
        t.value = e ?? "";
      }
      function a0(t, e, x) {
        t.classList.toggle(e, !!x);
      }
      function So(t, e, { bubbles: x = false, cancelable: n = false } = {}) {
        return new CustomEvent(t, {
          detail: e,
          bubbles: x,
          cancelable: n
        });
      }
      function qe(t, e) {
        return new t(e);
      }
      let me;
      function Ae(t) {
        me = t;
      }
      function Xe() {
        if (!me) throw new Error("Function called outside component initialization");
        return me;
      }
      function T0(t) {
        Xe().$$.on_mount.push(t);
      }
      function Mo(t) {
        Xe().$$.after_update.push(t);
      }
      function jn(t) {
        Xe().$$.on_destroy.push(t);
      }
      function Io() {
        const t = Xe();
        return (e, x, { cancelable: n = false } = {}) => {
          const o = t.$$.callbacks[e];
          if (o) {
            const r = So(e, x, {
              cancelable: n
            });
            return o.slice().forEach((l) => {
              l.call(t, r);
            }), !r.defaultPrevented;
          }
          return true;
        };
      }
      function Ax(t, e) {
        const x = t.$$.callbacks[e.type];
        x && x.slice().forEach((n) => n.call(this, e));
      }
      const se = [], He = [];
      let ae = [];
      const $x = [], Rn = Promise.resolve();
      let Fx = false;
      function On() {
        Fx || (Fx = true, Rn.then(Hn));
      }
      function qn() {
        return On(), Rn;
      }
      function Dx(t) {
        ae.push(t);
      }
      const sx = /* @__PURE__ */ new Set();
      let ne = 0;
      function Hn() {
        if (ne !== 0) return;
        const t = me;
        do {
          try {
            for (; ne < se.length; ) {
              const e = se[ne];
              ne++, Ae(e), Lo(e.$$);
            }
          } catch (e) {
            throw se.length = 0, ne = 0, e;
          }
          for (Ae(null), se.length = 0, ne = 0; He.length; ) He.pop()();
          for (let e = 0; e < ae.length; e += 1) {
            const x = ae[e];
            sx.has(x) || (sx.add(x), x());
          }
          ae.length = 0;
        } while (se.length);
        for (; $x.length; ) $x.pop()();
        Fx = false, sx.clear(), Ae(t);
      }
      function Lo(t) {
        if (t.fragment !== null) {
          t.update(), i0(t.before_update);
          const e = t.dirty;
          t.dirty = [
            -1
          ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Dx);
        }
      }
      function No(t) {
        const e = [], x = [];
        ae.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : x.push(n)), x.forEach((n) => n()), ae = e;
      }
      const Ne = /* @__PURE__ */ new Set();
      let Q0;
      function Ze() {
        Q0 = {
          r: 0,
          c: [],
          p: Q0
        };
      }
      function $e() {
        Q0.r || i0(Q0.c), Q0 = Q0.p;
      }
      function F0(t, e) {
        t && t.i && (Ne.delete(t), t.i(e));
      }
      function D0(t, e, x, n) {
        if (t && t.o) {
          if (Ne.has(t)) return;
          Ne.add(t), Q0.c.push(() => {
            Ne.delete(t), n && (x && t.d(1), n());
          }), t.o(e);
        } else n && n();
      }
      function A0(t) {
        return t?.length !== void 0 ? t : Array.from(t);
      }
      function Ue(t, e) {
        const x = {}, n = {}, o = {
          $$scope: 1
        };
        let r = t.length;
        for (; r--; ) {
          const l = t[r], s = e[r];
          if (s) {
            for (const a in l) a in s || (n[a] = 1);
            for (const a in s) o[a] || (x[a] = s[a], o[a] = 1);
            t[r] = s;
          } else for (const a in l) o[a] = 1;
        }
        for (const l in n) l in x || (x[l] = void 0);
        return x;
      }
      function ze(t) {
        return typeof t == "object" && t !== null ? t : {};
      }
      function y0(t) {
        t && t.c();
      }
      function k0(t, e, x) {
        const { fragment: n, after_update: o } = t.$$;
        n && n.m(e, x), Dx(() => {
          const r = t.$$.on_mount.map(Ln).filter(Px);
          t.$$.on_destroy ? t.$$.on_destroy.push(...r) : i0(r), t.$$.on_mount = [];
        }), o.forEach(Dx);
      }
      function b0(t, e) {
        const x = t.$$;
        x.fragment !== null && (No(x.after_update), i0(x.on_destroy), x.fragment && x.fragment.d(e), x.on_destroy = x.fragment = null, x.ctx = []);
      }
      function jo(t, e) {
        t.$$.dirty[0] === -1 && (se.push(t), On(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function h0(t, e, x, n, o, r, l = null, s = [
        -1
      ]) {
        const a = me;
        Ae(t);
        const c = t.$$ = {
          fragment: null,
          ctx: [],
          props: r,
          update: X,
          not_equal: o,
          bound: Xx(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (a ? a.$$.context : [])),
          callbacks: Xx(),
          dirty: s,
          skip_bound: false,
          root: e.target || a.$$.root
        };
        l && l(c.root);
        let u = false;
        if (c.ctx = x ? x(t, e.props || {}, (E, d, ...F) => {
          const B = F.length ? F[0] : d;
          return c.ctx && o(c.ctx[E], c.ctx[E] = B) && (!c.skip_bound && c.bound[E] && c.bound[E](B), u && jo(t, E)), d;
        }) : [], c.update(), u = true, i0(c.before_update), c.fragment = n ? n(c.ctx) : false, e.target) {
          if (e.hydrate) {
            const E = To(e.target);
            c.fragment && c.fragment.l(E), E.forEach(y);
          } else c.fragment && c.fragment.c();
          e.intro && F0(t.$$.fragment), k0(t, e.target, e.anchor), Hn();
        }
        Ae(a);
      }
      class v0 {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          b0(this, 1), this.$destroy = X;
        }
        $on(e, x) {
          if (!Px(x)) return X;
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(x), () => {
            const o = n.indexOf(x);
            o !== -1 && n.splice(o, 1);
          };
        }
        $set(e) {
          this.$$set && !yo(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const Ro = "4";
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add(Ro);
      const oe = [];
      function Un(t, e) {
        return {
          subscribe: _e(t, e).subscribe
        };
      }
      function _e(t, e = X) {
        let x;
        const n = /* @__PURE__ */ new Set();
        function o(s) {
          if (m0(t, s) && (t = s, x)) {
            const a = !oe.length;
            for (const c of n) c[1](), oe.push(c, t);
            if (a) {
              for (let c = 0; c < oe.length; c += 2) oe[c][0](oe[c + 1]);
              oe.length = 0;
            }
          }
        }
        function r(s) {
          o(s(t));
        }
        function l(s, a = X) {
          const c = [
            s,
            a
          ];
          return n.add(c), n.size === 1 && (x = e(o, r) || X), s(t), () => {
            n.delete(c), n.size === 0 && x && (x(), x = null);
          };
        }
        return {
          set: o,
          update: r,
          subscribe: l
        };
      }
      function zn(t, e, x) {
        const n = !Array.isArray(t), o = n ? [
          t
        ] : t;
        if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const r = e.length < 2;
        return Un(x, (l, s) => {
          let a = false;
          const c = [];
          let u = 0, E = X;
          const d = () => {
            if (u) return;
            E();
            const B = e(n ? c[0] : c, l, s);
            r ? l(B) : E = Px(B) ? B : X;
          }, F = o.map((B, A) => Nn(B, (D) => {
            c[A] = D, u &= ~(1 << A), a && d();
          }, () => {
            u |= 1 << A;
          }));
          return a = true, d(), function() {
            i0(F), E(), a = false;
          };
        });
      }
      function Oo(t, e) {
        if (t instanceof RegExp) return {
          keys: false,
          pattern: t
        };
        var x, n, o, r, l = [], s = "", a = t.split("/");
        for (a[0] || a.shift(); o = a.shift(); ) x = o[0], x === "*" ? (l.push("wild"), s += "/(.*)") : x === ":" ? (n = o.indexOf("?", 1), r = o.indexOf(".", 1), l.push(o.substring(1, ~n ? n : ~r ? r : o.length)), s += ~n && !~r ? "(?:/([^/]+?))?" : "/([^/]+?)", ~r && (s += (~n ? "?" : "") + "\\" + o.substring(r))) : s += "/" + o;
        return {
          keys: l,
          pattern: new RegExp("^" + s + "/?$", "i")
        };
      }
      function qo(t) {
        let e, x, n;
        const o = [
          t[2]
        ];
        var r = t[0];
        function l(s, a) {
          let c = {};
          for (let u = 0; u < o.length; u += 1) c = Oe(c, o[u]);
          return a !== void 0 && a & 4 && (c = Oe(c, Ue(o, [
            ze(s[2])
          ]))), {
            props: c
          };
        }
        return r && (e = qe(r, l(t)), e.$on("routeEvent", t[7])), {
          c() {
            e && y0(e.$$.fragment), x = M0();
          },
          m(s, a) {
            e && k0(e, s, a), P(s, x, a), n = true;
          },
          p(s, a) {
            if (a & 1 && r !== (r = s[0])) {
              if (e) {
                Ze();
                const c = e;
                D0(c.$$.fragment, 1, 0, () => {
                  b0(c, 1);
                }), $e();
              }
              r ? (e = qe(r, l(s, a)), e.$on("routeEvent", s[7]), y0(e.$$.fragment), F0(e.$$.fragment, 1), k0(e, x.parentNode, x)) : e = null;
            } else if (r) {
              const c = a & 4 ? Ue(o, [
                ze(s[2])
              ]) : {};
              e.$set(c);
            }
          },
          i(s) {
            n || (e && F0(e.$$.fragment, s), n = true);
          },
          o(s) {
            e && D0(e.$$.fragment, s), n = false;
          },
          d(s) {
            s && y(x), e && b0(e, s);
          }
        };
      }
      function Ho(t) {
        let e, x, n;
        const o = [
          {
            params: t[1]
          },
          t[2]
        ];
        var r = t[0];
        function l(s, a) {
          let c = {};
          for (let u = 0; u < o.length; u += 1) c = Oe(c, o[u]);
          return a !== void 0 && a & 6 && (c = Oe(c, Ue(o, [
            a & 2 && {
              params: s[1]
            },
            a & 4 && ze(s[2])
          ]))), {
            props: c
          };
        }
        return r && (e = qe(r, l(t)), e.$on("routeEvent", t[6])), {
          c() {
            e && y0(e.$$.fragment), x = M0();
          },
          m(s, a) {
            e && k0(e, s, a), P(s, x, a), n = true;
          },
          p(s, a) {
            if (a & 1 && r !== (r = s[0])) {
              if (e) {
                Ze();
                const c = e;
                D0(c.$$.fragment, 1, 0, () => {
                  b0(c, 1);
                }), $e();
              }
              r ? (e = qe(r, l(s, a)), e.$on("routeEvent", s[6]), y0(e.$$.fragment), F0(e.$$.fragment, 1), k0(e, x.parentNode, x)) : e = null;
            } else if (r) {
              const c = a & 6 ? Ue(o, [
                a & 2 && {
                  params: s[1]
                },
                a & 4 && ze(s[2])
              ]) : {};
              e.$set(c);
            }
          },
          i(s) {
            n || (e && F0(e.$$.fragment, s), n = true);
          },
          o(s) {
            e && D0(e.$$.fragment, s), n = false;
          },
          d(s) {
            s && y(x), e && b0(e, s);
          }
        };
      }
      function Uo(t) {
        let e, x, n, o;
        const r = [
          Ho,
          qo
        ], l = [];
        function s(a, c) {
          return a[1] ? 0 : 1;
        }
        return e = s(t), x = l[e] = r[e](t), {
          c() {
            x.c(), n = M0();
          },
          m(a, c) {
            l[e].m(a, c), P(a, n, c), o = true;
          },
          p(a, [c]) {
            let u = e;
            e = s(a), e === u ? l[e].p(a, c) : (Ze(), D0(l[u], 1, 1, () => {
              l[u] = null;
            }), $e(), x = l[e], x ? x.p(a, c) : (x = l[e] = r[e](a), x.c()), F0(x, 1), x.m(n.parentNode, n));
          },
          i(a) {
            o || (F0(x), o = true);
          },
          o(a) {
            D0(x), o = false;
          },
          d(a) {
            a && y(n), l[e].d(a);
          }
        };
      }
      function et() {
        const t = window.location.href.indexOf("#/");
        let e = t > -1 ? window.location.href.substr(t + 1) : "/";
        const x = e.indexOf("?");
        let n = "";
        return x > -1 && (n = e.substr(x + 1), e = e.substr(0, x)), {
          location: e,
          querystring: n
        };
      }
      const Tx = Un(null, function(e) {
        e(et());
        const x = () => {
          e(et());
        };
        return window.addEventListener("hashchange", x, false), function() {
          window.removeEventListener("hashchange", x, false);
        };
      }), zo = zn(Tx, (t) => t.location);
      zn(Tx, (t) => t.querystring);
      const xt = _e(void 0);
      async function B0(t) {
        if (!t || t.length < 1 || t.charAt(0) != "/" && t.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await qn(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (t.charAt(0) == "#" ? "" : "#") + t;
      }
      function Go(t) {
        t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function Ko(t, e, x) {
        let { routes: n = {} } = e, { prefix: o = "" } = e, { restoreScrollState: r = false } = e;
        class l {
          constructor(v, k) {
            if (!k || typeof k != "function" && (typeof k != "object" || k._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!v || typeof v == "string" && (v.length < 1 || v.charAt(0) != "/" && v.charAt(0) != "*") || typeof v == "object" && !(v instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: b, keys: g } = Oo(v);
            this.path = v, typeof k == "object" && k._sveltesparouter === true ? (this.component = k.component, this.conditions = k.conditions || [], this.userData = k.userData, this.props = k.props || {}) : (this.component = () => Promise.resolve(k), this.conditions = [], this.props = {}), this._pattern = b, this._keys = g;
          }
          match(v) {
            if (o) {
              if (typeof o == "string") if (v.startsWith(o)) v = v.substr(o.length) || "/";
              else return null;
              else if (o instanceof RegExp) {
                const T = v.match(o);
                if (T && T[0]) v = v.substr(T[0].length) || "/";
                else return null;
              }
            }
            const k = this._pattern.exec(v);
            if (k === null) return null;
            if (this._keys === false) return k;
            const b = {};
            let g = 0;
            for (; g < this._keys.length; ) {
              try {
                b[this._keys[g]] = decodeURIComponent(k[g + 1] || "") || null;
              } catch {
                b[this._keys[g]] = null;
              }
              g++;
            }
            return b;
          }
          async checkConditions(v) {
            for (let k = 0; k < this.conditions.length; k++) if (!await this.conditions[k](v)) return false;
            return true;
          }
        }
        const s = [];
        n instanceof Map ? n.forEach((m, v) => {
          s.push(new l(v, m));
        }) : Object.keys(n).forEach((m) => {
          s.push(new l(m, n[m]));
        });
        let a = null, c = null, u = {};
        const E = Io();
        async function d(m, v) {
          await qn(), E(m, v);
        }
        let F = null, B = null;
        r && (B = (m) => {
          m.state && (m.state.__svelte_spa_router_scrollY || m.state.__svelte_spa_router_scrollX) ? F = m.state : F = null;
        }, window.addEventListener("popstate", B), Mo(() => {
          Go(F);
        }));
        let A = null, D = null;
        const p = Tx.subscribe(async (m) => {
          A = m;
          let v = 0;
          for (; v < s.length; ) {
            const k = s[v].match(m.location);
            if (!k) {
              v++;
              continue;
            }
            const b = {
              route: s[v].path,
              location: m.location,
              querystring: m.querystring,
              userData: s[v].userData,
              params: k && typeof k == "object" && Object.keys(k).length ? k : null
            };
            if (!await s[v].checkConditions(b)) {
              x(0, a = null), D = null, d("conditionsFailed", b);
              return;
            }
            d("routeLoading", Object.assign({}, b));
            const g = s[v].component;
            if (D != g) {
              g.loading ? (x(0, a = g.loading), D = g, x(1, c = g.loadingParams), x(2, u = {}), d("routeLoaded", Object.assign({}, b, {
                component: a,
                name: a.name,
                params: c
              }))) : (x(0, a = null), D = null);
              const T = await g();
              if (m != A) return;
              x(0, a = T && T.default || T), D = g;
            }
            k && typeof k == "object" && Object.keys(k).length ? x(1, c = k) : x(1, c = null), x(2, u = s[v].props), d("routeLoaded", Object.assign({}, b, {
              component: a,
              name: a.name,
              params: c
            })).then(() => {
              xt.set(c);
            });
            return;
          }
          x(0, a = null), D = null, xt.set(void 0);
        });
        jn(() => {
          p(), B && window.removeEventListener("popstate", B);
        });
        function h(m) {
          Ax.call(this, t, m);
        }
        function _(m) {
          Ax.call(this, t, m);
        }
        return t.$$set = (m) => {
          "routes" in m && x(3, n = m.routes), "prefix" in m && x(4, o = m.prefix), "restoreScrollState" in m && x(5, r = m.restoreScrollState);
        }, t.$$.update = () => {
          t.$$.dirty & 32 && (history.scrollRestoration = r ? "manual" : "auto");
        }, [
          a,
          c,
          u,
          n,
          o,
          r,
          h,
          _
        ];
      }
      class Vo extends v0 {
        constructor(e) {
          super(), h0(this, e, Ko, Uo, m0, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const Yo = "/assets/peachsafe_core_wasm_bg-grP4iTDB.wasm", Qo = async (t = {}, e) => {
        let x;
        if (e.startsWith("data:")) {
          const n = e.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(n, "base64");
          else if (typeof atob == "function") {
            const r = atob(n);
            o = new Uint8Array(r.length);
            for (let l = 0; l < r.length; l++) o[l] = r.charCodeAt(l);
          } else throw new Error("Cannot decode base64-encoded data URL");
          x = await WebAssembly.instantiate(o, t);
        } else {
          const n = await fetch(e), o = n.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) x = await WebAssembly.instantiateStreaming(n, t);
          else {
            const r = await n.arrayBuffer();
            x = await WebAssembly.instantiate(r, t);
          }
        }
        return x.instance.exports;
      };
      function Jo(t, e) {
        const x = u0.aesGcmDecrypt(t, e);
        if (x[2]) throw p0(x[1]);
        return p0(x[0]);
      }
      function Wo(t, e) {
        const x = u0.aesGcmEncrypt(t, e);
        if (x[2]) throw p0(x[1]);
        return p0(x[0]);
      }
      function Xo(t, e) {
        const x = Mx(t, u0.__wbindgen_malloc, u0.__wbindgen_realloc), n = he, o = u0.argon2idDerive(x, n, e);
        if (o[2]) throw p0(o[1]);
        return p0(o[0]);
      }
      function Zo(t) {
        const e = u0.deriveAlertKey(t);
        if (e[2]) throw p0(e[1]);
        return p0(e[0]);
      }
      function $o(t, e, x) {
        const n = Mx(x, u0.__wbindgen_malloc, u0.__wbindgen_realloc), o = he, r = u0.deriveEncounterToken(t, e, n, o);
        if (r[2]) throw p0(r[1]);
        return p0(r[0]);
      }
      function er(t) {
        const e = u0.ed25519PubkeyFromSeed(t);
        if (e[2]) throw p0(e[1]);
        return p0(e[0]);
      }
      function xr(t, e) {
        const x = u0.ed25519Sign(t, e);
        if (x[2]) throw p0(x[1]);
        return p0(x[0]);
      }
      function tr() {
        const t = u0.generateEphemeralKeypair();
        if (t[2]) throw p0(t[1]);
        return p0(t[0]);
      }
      function nr(t) {
        return u0.generateRandomBytes(t);
      }
      function Gn(t) {
        return u0.sha256(t);
      }
      function or(t, e, x) {
        const n = Mx(t, u0.__wbindgen_malloc, u0.__wbindgen_realloc), o = he, r = u0.solvePoW(n, o, e, x);
        if (r[2]) throw p0(r[1]);
        return p0(r[0]);
      }
      function rr(t) {
        return typeof t == "function";
      }
      function lr(t) {
        const e = t;
        return typeof e == "object" && e !== null;
      }
      function sr(t) {
        return typeof t == "string";
      }
      function ar(t) {
        return t === void 0;
      }
      function ir(t, e) {
        throw new Error(Kn(t, e));
      }
      function cr() {
        return be(function(t, e, x) {
          return t.call(e, x);
        }, arguments);
      }
      function Er(t) {
        return t.crypto;
      }
      function ur() {
        return be(function(t, e) {
          t.getRandomValues(e);
        }, arguments);
      }
      function fr(t) {
        return t.length;
      }
      function dr(t) {
        return t.msCrypto;
      }
      function Br() {
        return new Object();
      }
      function Cr(t) {
        return new Uint8Array(t >>> 0);
      }
      function Ar(t) {
        return t.node;
      }
      function Fr(t) {
        return t.process;
      }
      function Dr(t, e, x) {
        Uint8Array.prototype.set.call(Sx(t, e), x);
      }
      function pr() {
        return be(function(t, e) {
          t.randomFillSync(e);
        }, arguments);
      }
      function mr() {
        return be(function() {
          return module.require;
        }, arguments);
      }
      function hr() {
        return be(function(t, e, x) {
          return Reflect.set(t, e, x);
        }, arguments);
      }
      function vr(t, e, x) {
        t.set(Sx(e, x));
      }
      function _r() {
        const t = typeof global > "u" ? null : global;
        return ex(t) ? 0 : ke(t);
      }
      function kr() {
        const t = typeof globalThis > "u" ? null : globalThis;
        return ex(t) ? 0 : ke(t);
      }
      function br() {
        const t = typeof self > "u" ? null : self;
        return ex(t) ? 0 : ke(t);
      }
      function wr() {
        const t = typeof window > "u" ? null : window;
        return ex(t) ? 0 : ke(t);
      }
      function gr(t, e, x) {
        return t.subarray(e >>> 0, x >>> 0);
      }
      function yr(t) {
        return t.versions;
      }
      function Pr(t) {
        return t;
      }
      function Tr(t, e) {
        return Sx(t, e);
      }
      function Sr(t, e) {
        return Kn(t, e);
      }
      function Mr() {
        const t = u0.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, true), t.set(e + 3, false);
      }
      function ke(t) {
        const e = u0.__externref_table_alloc();
        return u0.__wbindgen_externrefs.set(e, t), e;
      }
      function Sx(t, e) {
        return t = t >>> 0, Fe().subarray(t / 1, t / 1 + e);
      }
      function Kn(t, e) {
        return t = t >>> 0, Lr(t, e);
      }
      let Se = null;
      function Fe() {
        return (Se === null || Se.byteLength === 0) && (Se = new Uint8Array(u0.memory.buffer)), Se;
      }
      function be(t, e) {
        try {
          return t.apply(this, e);
        } catch (x) {
          const n = ke(x);
          u0.__wbindgen_exn_store(n);
        }
      }
      function ex(t) {
        return t == null;
      }
      function Mx(t, e, x) {
        if (x === void 0) {
          const s = De.encode(t), a = e(s.length, 1) >>> 0;
          return Fe().subarray(a, a + s.length).set(s), he = s.length, a;
        }
        let n = t.length, o = e(n, 1) >>> 0;
        const r = Fe();
        let l = 0;
        for (; l < n; l++) {
          const s = t.charCodeAt(l);
          if (s > 127) break;
          r[o + l] = s;
        }
        if (l !== n) {
          l !== 0 && (t = t.slice(l)), o = x(o, n, n = l + t.length * 3, 1) >>> 0;
          const s = Fe().subarray(o + l, o + n), a = De.encodeInto(t, s);
          l += a.written, o = x(o, n, l, 1) >>> 0;
        }
        return he = l, o;
      }
      function p0(t) {
        const e = u0.__wbindgen_externrefs.get(t);
        return u0.__externref_table_dealloc(t), e;
      }
      let je = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      je.decode();
      const Ir = 2146435072;
      let ax = 0;
      function Lr(t, e) {
        return ax += e, ax >= Ir && (je = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), je.decode(), ax = e), je.decode(Fe().subarray(t, t + e));
      }
      const De = new TextEncoder();
      "encodeInto" in De || (De.encodeInto = function(t, e) {
        const x = De.encode(t);
        return e.set(x), {
          read: t.length,
          written: x.length
        };
      });
      let he = 0, u0;
      function Nr(t) {
        u0 = t;
      }
      URL = globalThis.URL;
      const jr = await Qo({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: Er,
          __wbg_process_44c7a14e11e9f69e: Fr,
          __wbg_versions_276b2795b1c6a219: yr,
          __wbg_node_84ea875411254db1: Ar,
          __wbg_require_b4edbdcf3e2a1ef0: mr,
          __wbg_call_a24592a6f349a97e: cr,
          __wbg_msCrypto_bd5a034af96bcba6: dr,
          __wbg_randomFillSync_6c25eac9869eb53c: pr,
          __wbg_getRandomValues_c44a50d8cfdaebeb: ur,
          __wbg_new_aa8d0fa9762c29bd: Br,
          __wbg_length_9f1775224cf1d815: fr,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: Dr,
          __wbg_new_with_length_8c854e41ea4dae9b: Cr,
          __wbg_subarray_f8ca46a25b1f5e0d: gr,
          __wbg_set_3d484eb794afec82: vr,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: kr,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: br,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: _r,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: wr,
          __wbg_set_022bee52d0b05b19: hr,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: ir,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: lr,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: sr,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: rr,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: ar,
          __wbindgen_init_externref_table: Mr,
          __wbindgen_cast_0000000000000001: Pr,
          __wbindgen_cast_0000000000000002: Tr,
          __wbindgen_cast_0000000000000003: Sr
        }
      }, Yo), { memory: Rr, aesGcmDecrypt: Or, aesGcmEncrypt: qr, argon2idDerive: Hr, deriveAlertKey: Ur, deriveEncounterToken: zr, ed25519PubkeyFromSeed: Gr, ed25519Sign: Kr, ed25519Verify: Vr, generateEphemeralKeypair: Yr, generateRandomBytes: Qr, generateUserKeypair: Jr, main: Wr, serializePublicKey: Xr, sha256: Zr, solvePoW: $r, __wbindgen_exn_store: el, __externref_table_alloc: xl, __wbindgen_externrefs: tl, __externref_table_dealloc: nl, __wbindgen_malloc: ol, __wbindgen_realloc: rl, __wbindgen_free: ll, __wbindgen_start: Vn } = jr, sl = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: xl,
        __externref_table_dealloc: nl,
        __wbindgen_exn_store: el,
        __wbindgen_externrefs: tl,
        __wbindgen_free: ll,
        __wbindgen_malloc: ol,
        __wbindgen_realloc: rl,
        __wbindgen_start: Vn,
        aesGcmDecrypt: Or,
        aesGcmEncrypt: qr,
        argon2idDerive: Hr,
        deriveAlertKey: Ur,
        deriveEncounterToken: zr,
        ed25519PubkeyFromSeed: Gr,
        ed25519Sign: Kr,
        ed25519Verify: Vr,
        generateEphemeralKeypair: Yr,
        generateRandomBytes: Qr,
        generateUserKeypair: Jr,
        main: Wr,
        memory: Rr,
        serializePublicKey: Xr,
        sha256: Zr,
        solvePoW: $r
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      Nr(sl);
      Vn();
      let px = false;
      async function al() {
        px || (px = true);
      }
      function S0() {
        if (!px) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function _0(t) {
        const e = new Uint8Array(t.length / 2);
        for (let x = 0; x < t.length; x += 2) e[x / 2] = parseInt(t.slice(x, x + 2), 16);
        return e;
      }
      function n0(t) {
        return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function we(t) {
        return S0(), nr(t);
      }
      async function U0(t, e) {
        return S0(), await new Promise((x) => setTimeout(x, 0)), Xo(t, e);
      }
      function ge(t, e) {
        return S0(), Wo(t, e);
      }
      function xx(t, e) {
        return S0(), Jo(t, e);
      }
      function il() {
        return S0(), tr();
      }
      function cl(t, e, x) {
        return S0(), $o(t, e, x);
      }
      function Yn(t) {
        return S0(), er(t);
      }
      function Qn(t, e) {
        return S0(), xr(t, e);
      }
      function El(t) {
        return S0(), Gn(t);
      }
      function Jn(t) {
        return S0(), Zo(t);
      }
      function ul(t, e, x) {
        return S0(), or(t, e, x);
      }
      function W0(t) {
        let e = "";
        for (let x = 0; x < t.length; x++) e += String.fromCharCode(t[x]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function Wn(t) {
        const x = (t + "===".slice((t.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(x), (n) => n.charCodeAt(0));
      }
      function fl(t, e, x, n) {
        const o = n && n.trim() ? encodeURIComponent(n.trim()) : "";
        return `2|${t}|${e}|${x}|${o}`;
      }
      function tt(t) {
        const e = t.split("|");
        if (!e.length || e[0] !== "2") return null;
        if (e.length < 4 || e.length > 5) throw new Error("Invalid group QR payload");
        const x = e[1], n = parseInt(e[2], 10), o = e[3], r = e.length === 5 && e[4] ? decodeURIComponent(e[4]) : null;
        if (isNaN(n) || x.length !== 64 || o.length !== 64) throw new Error("Invalid group QR payload");
        return {
          groupTokenHex: x,
          timestamp: n,
          hostContactIdHex: o,
          name: r
        };
      }
      function J0(t, e, x) {
        S0();
        const n = new Uint8Array(68);
        return n.set(t, 0), n.set(e, 32), n[64] = x >>> 24 & 255, n[65] = x >>> 16 & 255, n[66] = x >>> 8 & 255, n[67] = x & 255, Gn(n);
      }
      const X0 = _e("ok");
      let Xn = "ok";
      X0.subscribe((t) => {
        Xn = t;
      });
      let Ge = null;
      function dl() {
        clearTimeout(Ge), X0.set("retrying");
      }
      function Bl() {
        Xn !== "ok" && (clearTimeout(Ge), X0.set("reconnected"), Ge = setTimeout(() => X0.set("ok"), 3e3));
      }
      function nt() {
        clearTimeout(Ge), X0.set("down");
      }
      function ot(t) {
        let e;
        function x(r, l) {
          if (r[0] === "retrying") return Fl;
          if (r[0] === "down") return Al;
          if (r[0] === "reconnected") return Cl;
        }
        let n = x(t), o = n && n(t);
        return {
          c() {
            e = C("div"), o && o.c(), f(e, "class", "banner svelte-1fvcw45"), f(e, "role", "status"), f(e, "aria-live", "polite"), a0(e, "retrying", t[0] === "retrying"), a0(e, "down", t[0] === "down"), a0(e, "reconnected", t[0] === "reconnected");
          },
          m(r, l) {
            P(r, e, l), o && o.m(e, null);
          },
          p(r, l) {
            n !== (n = x(r)) && (o && o.d(1), o = n && n(r), o && (o.c(), o.m(e, null))), l & 1 && a0(e, "retrying", r[0] === "retrying"), l & 1 && a0(e, "down", r[0] === "down"), l & 1 && a0(e, "reconnected", r[0] === "reconnected");
          },
          d(r) {
            r && y(e), o && o.d();
          }
        };
      }
      function Cl(t) {
        let e;
        return {
          c() {
            e = N("Reconnected");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Al(t) {
        let e;
        return {
          c() {
            e = N("Server unavailable. Please try again later.");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Fl(t) {
        let e;
        return {
          c() {
            e = N("Server unreachable \u2014 retrying\u2026");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Dl(t) {
        let e, x = t[0] !== "ok" && ot(t);
        return {
          c() {
            x && x.c(), e = M0();
          },
          m(n, o) {
            x && x.m(n, o), P(n, e, o);
          },
          p(n, [o]) {
            n[0] !== "ok" ? x ? x.p(n, o) : (x = ot(n), x.c(), x.m(e.parentNode, e)) : x && (x.d(1), x = null);
          },
          i: X,
          o: X,
          d(n) {
            n && y(e), x && x.d(n);
          }
        };
      }
      function pl(t, e, x) {
        let n;
        return We(t, X0, (o) => x(0, n = o)), [
          n
        ];
      }
      class ml extends v0 {
        constructor(e) {
          super(), h0(this, e, pl, Dl, m0, {});
        }
      }
      const d0 = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", ix = [
        1e3,
        2e3,
        4e3
      ], rt = /* @__PURE__ */ new Set([
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
            if (!rt.has(o.status) || n >= ix.length) return rt.has(o.status) ? nt() : Bl(), o;
          } catch (o) {
            if (n >= ix.length) throw nt(), o;
          }
          dl(), await new Promise((o) => setTimeout(o, ix[n]));
        }
      }
      let Z0 = null, Ix = null, Lx = null;
      const Ce = _e(null);
      function I0() {
        return Z0 !== null;
      }
      function Nx(t) {
        Ix = t;
      }
      function $0() {
        return Ix;
      }
      function Zn(t) {
        Lx = t;
      }
      function hl() {
        return Lx;
      }
      function vl() {
        Z0 = null, Ix = null, Lx = null, Ce.set(null);
      }
      async function _l() {
        try {
          const t = await jx();
          Ce.set(t.verified);
        } catch {
        }
      }
      async function jx() {
        const t = await w0(`${d0}/v1/web/user/email`);
        if (!t.ok) throw new Error(await C0(t));
        return t.json();
      }
      async function kl(t) {
        const e = await w0(`${d0}/v1/web/user/request-email-change`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            new_email: t
          })
        });
        if (!e.ok) throw new Error(await C0(e));
      }
      async function bl() {
        const t = await w0(`${d0}/v1/web/user/resend-verification`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await C0(t));
      }
      async function wl(t) {
        const e = await ee(`${d0}/v1/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t
          })
        });
        if (!e.ok) throw new Error(await C0(e));
        Ce.set(true);
      }
      async function Rx(t) {
        const e = await ee(`${d0}/v1/prelogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: t
          })
        });
        if (!e.ok) throw new Error(await C0(e));
        return e.json();
      }
      async function gl(t, e, x) {
        const n = await ee(`${d0}/v1/signup`, {
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
        if (!n.ok) throw new Error(await C0(n));
        const o = await n.json();
        return Z0 = o.session_token, Ce.set(false), o;
      }
      async function lt(t, e, x = null) {
        const n = {
          username: t,
          auth_signature: e
        };
        x && (n.otp = x);
        const o = await ee(`${d0}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(n)
        });
        if (!o.ok) throw new Error(await C0(o));
        const r = await o.json();
        return r.requires_otp || (Z0 = r.session_token, _l()), r;
      }
      async function yl() {
        const t = await w0(`${d0}/v1/web/totp/status`);
        if (!t.ok) throw new Error(await C0(t));
        return t.json();
      }
      async function Pl() {
        const t = await w0(`${d0}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await C0(t));
        return t.json();
      }
      async function Tl(t, e) {
        const x = await w0(`${d0}/v1/web/totp/confirm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            secret: t,
            otp: e
          })
        });
        if (!x.ok) throw new Error(await C0(x));
        return x.json();
      }
      async function Sl() {
        const t = await w0(`${d0}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await C0(t));
      }
      async function Ml() {
        const t = await w0(`${d0}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await C0(t));
        return t.json();
      }
      async function Il() {
        const t = await w0(`${d0}/v1/web/totp/backup-codes/count`);
        if (!t.ok) throw new Error(await C0(t));
        return t.json();
      }
      async function $n() {
        if (!Z0) return;
        const t = Z0;
        vl(), fetch(`${d0}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${t}`
          }
        }).catch(() => {
        });
      }
      async function Ll() {
        const t = await w0(`${d0}/v1/web/user/blob`);
        if (!t.ok) throw new Error(await C0(t));
        return t.json();
      }
      async function Nl(t, e) {
        const x = await w0(`${d0}/v1/web/user/blob`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            blob: t,
            expected_version: e
          })
        });
        if (!x.ok) throw new Error(await C0(x));
        return x.json();
      }
      async function jl() {
        const t = await w0(`${d0}/v1/web/user/encounters`);
        if (!t.ok) throw new Error(await C0(t));
        return t.json();
      }
      async function eo(t, e) {
        const x = await w0(`${d0}/v1/web/user/encounters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t,
            date: e
          })
        });
        if (!x.ok) throw new Error(await C0(x));
        return x.json();
      }
      async function Rl(t, e, x, n) {
        const o = await w0(`${d0}/v1/web/user/change-password`, {
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
        if (!o.ok) throw new Error(await C0(o));
      }
      async function Ol(t) {
        const e = await ee(`${d0}/v1/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            tokens: t
          })
        });
        if (!e.ok) throw new Error(await C0(e));
        return e.json();
      }
      async function ql(t) {
        const e = await w0(`${d0}/v1/web/user/encounters/by-token/${t}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await C0(e));
      }
      async function Hl(t) {
        const e = await ee(`${d0}/v1/submit`, {
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
        const r = await C0(e), l = new Error(r);
        throw l.statusCode = e.status, l.serverTime = x, l.powDifficulty = o, l;
      }
      function w0(t, e = {}) {
        return ee(t, {
          ...e,
          headers: {
            Authorization: `Bearer ${Z0}`,
            ...e.headers ?? {}
          }
        });
      }
      async function C0(t) {
        try {
          return (await t.json()).error ?? `HTTP ${t.status}`;
        } catch {
          return `HTTP ${t.status}`;
        }
      }
      const st = 15 * 60 * 1e3, Ul = 2 * 60 * 1e3, xo = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let mx = null, hx = null, Ox = null, qx = null, tx = false, ye = false;
      function Hx() {
        clearTimeout(mx), clearTimeout(hx), hx = setTimeout(() => {
          ye = true, Ox?.();
        }, st - Ul), mx = setTimeout(() => qx?.(), st);
      }
      function to() {
        tx && !ye && Hx();
      }
      function zl({ onWarnCallback: t, onExpiredCallback: e }) {
        vx(), Ox = t, qx = e, tx = true, ye = false;
        for (const x of xo) document.addEventListener(x, to, {
          passive: true
        });
        Hx();
      }
      function vx() {
        clearTimeout(mx), clearTimeout(hx);
        for (const t of xo) document.removeEventListener(t, to);
        tx = false, ye = false, Ox = null, qx = null;
      }
      function Gl() {
        ye = false, tx && Hx();
      }
      const Kl = 12 * 1024, no = Kl * 0.75, oo = _e(false), ro = 18262, lo = 65535, Vl = 45, O0 = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], Ux = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, so = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function re(t) {
        const e = (/* @__PURE__ */ new Date(t + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - ro;
      }
      function le(t) {
        const e = (ro + t) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      const Yl = 393;
      function zx(t) {
        const e = t.encounters, x = t.results || [], n = t.receivedAlerts || [], o = t.relationships || [], r = t.groupEncounters || [], l = e.length, s = x.length, a = n.length, c = o.length, u = r.length, E = new Uint8Array(35 + l * 70 + 2 + s * 4 + 2 + a * 36 + 2 + c * 137 + 2 + u * Yl);
        let d = 0;
        E[d++] = 1, E.set(t.myContactId, d), d += 32, E[d++] = l >> 8 & 255, E[d++] = l & 255;
        for (const B of e) {
          E.set(B.rawToken, d), d += 32, E.set(B.theirContactId, d), d += 32;
          const A = re(B.date);
          E[d++] = A >> 8 & 255, E[d++] = A & 255, E[d++] = B.queryIndex >> 8 & 255, E[d++] = B.queryIndex & 255, E[d++] = B.submitIndex >> 8 & 255, E[d++] = B.submitIndex & 255;
        }
        E[d++] = s >> 8 & 255, E[d++] = s & 255;
        for (const B of x) {
          const A = re(B.date);
          E[d++] = A >> 8 & 255, E[d++] = A & 255, E[d++] = B.hasNotified ? 1 : 0;
          let D = 0;
          for (let p = 0; p < O0.length; p++) (B.positiveDiseases || []).includes(O0[p]) && (D |= 1 << p);
          E[d++] = D;
        }
        E[d++] = a >> 8 & 255, E[d++] = a & 255;
        for (const B of n) {
          E.set(B.rawToken, d), d += 32;
          const A = re(B.testDate);
          E[d++] = A >> 8 & 255, E[d++] = A & 255;
          let D = 0;
          for (let h = 0; h < O0.length; h++) (B.diseases || []).includes(O0[h]) && (D |= 1 << h);
          E[d++] = D;
          let p = 0;
          B.viewed && (p |= 1), B.labVerified && (p |= 2), E[d++] = p;
        }
        E[d++] = c >> 8 & 255, E[d++] = c & 255;
        for (const B of o) {
          E.set(B.rawToken, d), d += 32, E.set(B.theirContactId, d), d += 32;
          const A = re(B.createdAt);
          E[d++] = A >> 8 & 255, E[d++] = A & 255;
          const D = B.endedAt ? re(B.endedAt) : lo;
          E[d++] = D >> 8 & 255, E[d++] = D & 255;
          let p = 0;
          B.archived && (p |= 1), E[d++] = p, E[d++] = B.queryIndex >> 8 & 255, E[d++] = B.queryIndex & 255, E[d++] = B.submitIndex >> 8 & 255, E[d++] = B.submitIndex & 255;
          const h = B.name ? new TextEncoder().encode(B.name).slice(0, 64) : new Uint8Array(0);
          E.set(h, d), d += 64;
        }
        E[d++] = u >> 8 & 255, E[d++] = u & 255;
        const F = new TextEncoder();
        for (const B of r) {
          E.set(B.token, d), d += 32;
          const A = re(B.date);
          E[d++] = A >> 8 & 255, E[d++] = A & 255;
          const D = B.createdAt >>> 0;
          E[d++] = D >>> 24 & 255, E[d++] = D >>> 16 & 255, E[d++] = D >>> 8 & 255, E[d++] = D & 255, E[d++] = B.isHost ? 1 : 0, E[d++] = B.tokenIndex >> 8 & 255, E[d++] = B.tokenIndex & 255, E.set(B.hostContactId, d), d += 32;
          const p = B.name ? F.encode(B.name).slice(0, 64) : new Uint8Array(0);
          E.set(p, d), d += 64;
          const h = B.note ? F.encode(B.note).slice(0, 256) : new Uint8Array(0);
          E.set(h, d), d += 256;
        }
        return E;
      }
      function Ql(t) {
        let e = 0;
        const x = t[e++];
        if (x !== 1) throw new Error(`Unknown blob version: ${x}`);
        const n = t.slice(e, e + 32);
        e += 32;
        const o = t[e] << 8 | t[e + 1];
        e += 2;
        const r = [];
        for (let A = 0; A < o; A++) {
          const D = t.slice(e, e + 32);
          e += 32;
          const p = t.slice(e, e + 32);
          e += 32;
          const h = t[e] << 8 | t[e + 1];
          e += 2;
          const _ = t[e] << 8 | t[e + 1];
          e += 2;
          const m = t[e] << 8 | t[e + 1];
          e += 2, r.push({
            rawToken: D,
            theirContactId: p,
            date: le(h),
            queryIndex: _,
            submitIndex: m
          });
        }
        const l = [], s = t[e] << 8 | t[e + 1];
        e += 2;
        for (let A = 0; A < s; A++) {
          const D = t[e] << 8 | t[e + 1];
          e += 2;
          const p = t[e++], h = t[e++], _ = !!(p & 1), m = O0.filter((v, k) => h & 1 << k);
          l.push({
            date: le(D),
            hasNotified: _,
            positiveDiseases: m
          });
        }
        const a = [], c = t[e] << 8 | t[e + 1];
        e += 2;
        for (let A = 0; A < c; A++) {
          const D = t.slice(e, e + 32);
          e += 32;
          const p = t[e] << 8 | t[e + 1];
          e += 2;
          const h = t[e++], _ = t[e++], m = O0.filter((b, g) => h & 1 << g), v = !!(_ & 1), k = !!(_ & 2);
          a.push({
            rawToken: D,
            testDate: le(p),
            diseases: m,
            viewed: v,
            labVerified: k
          });
        }
        const u = [], E = t[e] << 8 | t[e + 1];
        e += 2;
        for (let A = 0; A < E; A++) {
          const D = t.slice(e, e + 32);
          e += 32;
          const p = t.slice(e, e + 32);
          e += 32;
          const h = t[e] << 8 | t[e + 1];
          e += 2;
          const _ = t[e] << 8 | t[e + 1];
          e += 2;
          const m = t[e++], v = t[e] << 8 | t[e + 1];
          e += 2;
          const k = t[e] << 8 | t[e + 1];
          e += 2;
          const b = t.slice(e, e + 64);
          e += 64;
          const g = _ === lo ? null : le(_), T = !!(m & 1), I = b.indexOf(0), M = I === -1 ? 64 : I, S = M > 0 ? new TextDecoder().decode(b.slice(0, M)) : null;
          u.push({
            rawToken: D,
            theirContactId: p,
            createdAt: le(h),
            endedAt: g,
            archived: T,
            queryIndex: v,
            submitIndex: k,
            name: S
          });
        }
        const d = [], F = t[e] << 8 | t[e + 1];
        e += 2;
        const B = new TextDecoder();
        for (let A = 0; A < F; A++) {
          const D = t.slice(e, e + 32);
          e += 32;
          const p = t[e] << 8 | t[e + 1];
          e += 2;
          const h = (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
          e += 4;
          const _ = t[e++], m = t[e] << 8 | t[e + 1];
          e += 2;
          const v = t.slice(e, e + 32);
          e += 32;
          const k = t.slice(e, e + 64);
          e += 64;
          const b = t.slice(e, e + 256);
          e += 256;
          const g = !!(_ & 1), T = k.indexOf(0), I = T === -1 ? 64 : T, M = I > 0 ? B.decode(k.slice(0, I)) : null, S = b.indexOf(0), j = S === -1 ? 256 : S, L = j > 0 ? B.decode(b.slice(0, j)) : null;
          d.push({
            token: D,
            date: le(p),
            createdAt: h,
            isHost: g,
            tokenIndex: m,
            hostContactId: v,
            name: M,
            note: L
          });
        }
        return {
          myContactId: n,
          encounters: r,
          results: l,
          receivedAlerts: a,
          relationships: u,
          groupEncounters: d
        };
      }
      let V = null, ce = 0, _x = false;
      X0.subscribe((t) => {
        t === "reconnected" && _x && V && $0() && g0().catch(() => {
        });
      });
      function R0() {
        return V;
      }
      function Ee() {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return V.myContactId;
      }
      function Re() {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return V.results || [];
      }
      function at() {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (V.receivedAlerts || []).map(({ testDate: t, diseases: e, viewed: x, labVerified: n }) => ({
          testDate: t,
          diseases: e,
          viewed: x,
          labVerified: n
        }));
      }
      function Gx() {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return V.relationships || [];
      }
      function ao() {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return V.groupEncounters || [];
      }
      async function io() {
        const { blob: t, blob_version: e } = await Ll();
        if (!t) {
          V = {
            myContactId: we(32),
            encounters: [],
            results: [],
            receivedAlerts: [],
            relationships: [],
            groupEncounters: []
          }, ce = 0, await g0();
          return;
        }
        const x = xx($0(), _0(t));
        V = Ql(x), ce = e, await is();
      }
      async function Jl(t, e, x) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        V = {
          ...V,
          encounters: [
            ...V.encounters,
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
          await g0();
        } catch (n) {
          throw as(t, e, x), n;
        }
      }
      async function Wl(t, e, x) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        V = {
          ...V,
          relationships: [
            ...V.relationships || [],
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
        }, await g0();
      }
      async function co(t, e, x, n, o) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const r = Math.floor(Date.now() / 1e3);
        V = {
          ...V,
          groupEncounters: [
            ...V.groupEncounters || [],
            {
              token: t,
              date: e,
              createdAt: r,
              isHost: x,
              tokenIndex: 0,
              hostContactId: n,
              name: o || null,
              note: null
            }
          ]
        }, await g0();
      }
      async function it(t, e) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (V.groupEncounters || []).map((n) => n0(n.token) === t ? {
          ...n,
          ...e
        } : n);
        V = {
          ...V,
          groupEncounters: x
        }, await g0();
      }
      async function Xl(t) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (V.groupEncounters || []).filter((x) => n0(x.token) !== t);
        V = {
          ...V,
          groupEncounters: e
        }, await g0();
      }
      async function Me(t, e) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (V.relationships || []).map((n) => n0(n.rawToken) === t ? {
          ...n,
          ...e
        } : n);
        V = {
          ...V,
          relationships: x
        }, await g0();
      }
      async function Zl(t, e) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (V.results || []).length;
        return V = {
          ...V,
          results: [
            ...V.results || [],
            {
              date: t,
              positiveDiseases: e,
              hasNotified: false
            }
          ]
        }, await g0(), x;
      }
      async function cx(t) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...V.results || []
        ];
        if (t >= e.length) throw new Error("Invalid result index");
        e[t] = {
          ...e[t],
          hasNotified: true
        }, V = {
          ...V,
          results: e
        }, await g0();
      }
      async function $l() {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        V = {
          ...V,
          encounters: V.encounters.map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          })),
          relationships: (V.relationships || []).map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          }))
        }, await g0();
      }
      async function es(t, e, x, n) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let o = null;
        const r = V.encounters.map((a) => n0(a.rawToken) !== t ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        })), l = (V.relationships || []).map((a) => o || n0(a.rawToken) !== t ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        }));
        if (!o) throw new Error("Token not found: " + t);
        const s = [
          ...V.receivedAlerts || [],
          {
            rawToken: o,
            testDate: e,
            diseases: x,
            viewed: false,
            labVerified: !!n
          }
        ];
        V = {
          ...V,
          encounters: r,
          relationships: l,
          receivedAlerts: s
        }, await g0();
      }
      async function xs(t) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...V.receivedAlerts || []
        ];
        if (t >= e.length) throw new Error("Invalid alert index");
        e[t] = {
          ...e[t],
          viewed: true
        }, V = {
          ...V,
          receivedAlerts: e
        }, await g0();
      }
      function ts() {
        if (!V || zx(V).byteLength < no) return false;
        const e = Kx();
        return V.encounters.filter((x) => x.date < e).length >= 5;
      }
      function ns() {
        if (!V) return 0;
        const t = Kx();
        return V.encounters.filter((e) => e.date < t).length;
      }
      async function os() {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = Kx();
        V = {
          ...V,
          encounters: V.encounters.filter((e) => e.date >= t)
        }, await g0();
      }
      function Kx() {
        const t = /* @__PURE__ */ new Date();
        return t.setUTCFullYear(t.getUTCFullYear() - 1), t.toISOString().slice(0, 10);
      }
      function rs(t) {
        if (!V) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = ge(t, zx(V));
        return {
          blobHex: n0(e),
          blobVersion: ce
        };
      }
      function ls(t) {
        ce = t;
      }
      function ss(t, e) {
        if (!t.endedAt || !e) return true;
        const n = (/* @__PURE__ */ new Date(t.endedAt + "T00:00:00Z")).getTime() + Vl * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < n;
      }
      const ie = "peachsafe_pending_encounters";
      async function g0() {
        const t = zx(V);
        oo.set(t.byteLength >= no);
        const e = ge($0(), t);
        try {
          const { blob_version: x } = await Nl(n0(e), ce);
          ce = x, _x = false;
          try {
            localStorage.removeItem(ie);
          } catch {
          }
        } catch (x) {
          throw _x = true, x;
        }
      }
      function as(t, e, x) {
        try {
          let n = [];
          const o = localStorage.getItem(ie);
          if (o) try {
            n = JSON.parse(new TextDecoder().decode(xx($0(), _0(o))));
          } catch {
            n = [];
          }
          n.push({
            rawTokenHex: n0(t),
            theirContactIdHex: n0(e),
            date: x
          });
          const r = new TextEncoder().encode(JSON.stringify(n));
          localStorage.setItem(ie, n0(ge($0(), r)));
        } catch {
        }
      }
      async function is() {
        let t;
        try {
          const e = localStorage.getItem(ie);
          if (!e) return;
          t = JSON.parse(new TextDecoder().decode(xx($0(), _0(e))));
        } catch {
          try {
            localStorage.removeItem(ie);
          } catch {
          }
          return;
        }
        if (!t.length) {
          try {
            localStorage.removeItem(ie);
          } catch {
          }
          return;
        }
        for (const e of t) V = {
          ...V,
          encounters: [
            ...V.encounters,
            {
              rawToken: _0(e.rawTokenHex),
              theirContactId: _0(e.theirContactIdHex),
              date: e.date,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        };
        await g0();
      }
      let kx = "/home";
      function cs(t) {
        kx = t;
      }
      function ct() {
        const t = kx;
        return kx = "/home", t;
      }
      function Es(t) {
        let e, x, n, o, r, l, s, a, c, u = t[3] ? "Verifying\u2026" : "Verify", E, d, F, B, A, D, p, h = t[4] && Et(t);
        return {
          c() {
            e = C("form"), x = C("p"), x.textContent = "Enter the 6-digit code from your authenticator app.", n = w(), o = C("label"), r = N(`Authenticator code
        `), l = C("input"), s = w(), h && h.c(), a = w(), c = C("button"), E = N(u), F = w(), B = C("button"), A = N("Back"), f(x, "class", "otp-prompt svelte-auhbrc"), f(l, "type", "text"), f(l, "inputmode", "numeric"), f(l, "pattern", "[0-9]*"), f(l, "maxlength", "6"), l.required = true, f(l, "autocomplete", "one-time-code"), f(l, "class", "svelte-auhbrc"), f(o, "class", "svelte-auhbrc"), f(c, "type", "submit"), c.disabled = d = t[3] || t[2].length !== 6, f(c, "class", "svelte-auhbrc"), f(B, "type", "button"), f(B, "class", "secondary svelte-auhbrc"), B.disabled = t[3], f(e, "class", "svelte-auhbrc");
          },
          m(_, m) {
            P(_, e, m), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), t0(l, t[2]), i(e, s), h && h.m(e, null), i(e, a), i(e, c), i(c, E), i(e, F), i(e, B), i(B, A), D || (p = [
              G(l, "input", t[17]),
              G(B, "click", t[14]),
              G(e, "submit", z0(t[11]))
            ], D = true);
          },
          p(_, m) {
            m & 4 && l.value !== _[2] && t0(l, _[2]), _[4] ? h ? h.p(_, m) : (h = Et(_), h.c(), h.m(e, a)) : h && (h.d(1), h = null), m & 8 && u !== (u = _[3] ? "Verifying\u2026" : "Verify") && U(E, u), m & 12 && d !== (d = _[3] || _[2].length !== 6) && (c.disabled = d), m & 8 && (B.disabled = _[3]);
          },
          d(_) {
            _ && y(e), h && h.d(), D = false, i0(p);
          }
        };
      }
      function us(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d = t[3] ? "Signing in\u2026" : "Sign in", F, B, A, D = t[4] && ut(t);
        return {
          c() {
            e = C("form"), x = C("label"), n = N(`Username
        `), o = C("input"), r = w(), l = C("label"), s = N(`Password
        `), a = C("input"), c = w(), D && D.c(), u = w(), E = C("button"), F = N(d), f(o, "type", "text"), o.required = true, f(o, "autocomplete", "username"), f(o, "class", "svelte-auhbrc"), f(x, "class", "svelte-auhbrc"), f(a, "type", "password"), a.required = true, f(a, "autocomplete", "current-password"), f(a, "class", "svelte-auhbrc"), f(l, "class", "svelte-auhbrc"), f(E, "type", "submit"), E.disabled = t[3], f(E, "class", "svelte-auhbrc"), f(e, "class", "svelte-auhbrc");
          },
          m(p, h) {
            P(p, e, h), i(e, x), i(x, n), i(x, o), t0(o, t[0]), i(e, r), i(e, l), i(l, s), i(l, a), t0(a, t[1]), i(e, c), D && D.m(e, null), i(e, u), i(e, E), i(E, F), B || (A = [
              G(o, "input", t[15]),
              G(a, "input", t[16]),
              G(e, "submit", z0(t[10]))
            ], B = true);
          },
          p(p, h) {
            h & 1 && o.value !== p[0] && t0(o, p[0]), h & 2 && a.value !== p[1] && t0(a, p[1]), p[4] ? D ? D.p(p, h) : (D = ut(p), D.c(), D.m(e, u)) : D && (D.d(1), D = null), h & 8 && d !== (d = p[3] ? "Signing in\u2026" : "Sign in") && U(F, d), h & 8 && (E.disabled = p[3]);
          },
          d(p) {
            p && y(e), D && D.d(), B = false, i0(A);
          }
        };
      }
      function Et(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[4]), f(e, "class", "error svelte-auhbrc");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && U(x, n[4]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function ut(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[4]), f(e, "class", "error svelte-auhbrc");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && U(x, n[4]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function ft(t) {
        let e, x, n;
        return {
          c() {
            e = C("p"), e.innerHTML = 'No account? <a href="#/signup">Sign up</a>', x = w(), n = C("p"), n.textContent = "Your password never leaves your device in plaintext.", f(e, "class", "link svelte-auhbrc"), f(n, "class", "privacy-note svelte-auhbrc");
          },
          m(o, r) {
            P(o, e, r), P(o, x, r), P(o, n, r);
          },
          d(o) {
            o && (y(e), y(x), y(n));
          }
        };
      }
      function dt(t) {
        let e, x, n, o, r, l, s, a, c, u = t[7] === 1 ? "" : "s", E, d, F, B, A, D, p = t[8] ? "Deleting\u2026" : "Delete old encounters", h, _, m, v, k, b, g = t[9] && Bt(t);
        return {
          c() {
            e = C("div"), x = C("div"), n = C("h2"), n.textContent = "Free up storage space", o = w(), r = C("p"), l = N(`Your account is using 75% or more of its storage limit.
        You have `), s = C("strong"), a = N(t[7]), c = N(" encounter"), E = N(u), d = N(` older
        than one year. Deleting them will free up space.`), F = w(), g && g.c(), B = w(), A = C("div"), D = C("button"), h = N(p), _ = w(), m = C("button"), v = N("Keep them"), f(n, "id", "cleanup-title"), f(n, "class", "svelte-auhbrc"), f(r, "class", "svelte-auhbrc"), f(D, "class", "btn-primary svelte-auhbrc"), D.disabled = t[8], f(m, "class", "btn-ghost svelte-auhbrc"), m.disabled = t[8], f(A, "class", "cleanup-actions svelte-auhbrc"), f(x, "class", "cleanup-dialog svelte-auhbrc"), f(e, "class", "cleanup-overlay svelte-auhbrc"), f(e, "role", "dialog"), f(e, "aria-modal", "true"), f(e, "aria-labelledby", "cleanup-title");
          },
          m(T, I) {
            P(T, e, I), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(r, s), i(s, a), i(s, c), i(s, E), i(r, d), i(x, F), g && g.m(x, null), i(x, B), i(x, A), i(A, D), i(D, h), i(A, _), i(A, m), i(m, v), k || (b = [
              G(D, "click", t[12]),
              G(m, "click", t[13])
            ], k = true);
          },
          p(T, I) {
            I & 128 && U(a, T[7]), I & 128 && u !== (u = T[7] === 1 ? "" : "s") && U(E, u), T[9] ? g ? g.p(T, I) : (g = Bt(T), g.c(), g.m(x, B)) : g && (g.d(1), g = null), I & 256 && p !== (p = T[8] ? "Deleting\u2026" : "Delete old encounters") && U(h, p), I & 256 && (D.disabled = T[8]), I & 256 && (m.disabled = T[8]);
          },
          d(T) {
            T && y(e), g && g.d(), k = false, i0(b);
          }
        };
      }
      function Bt(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[9]), f(e, "class", "cleanup-error svelte-auhbrc");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 512 && U(x, n[9]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function fs(t) {
        let e, x, n, o, r, l, s, a;
        function c(B, A) {
          return B[5] ? Es : us;
        }
        let u = c(t), E = u(t), d = !t[5] && ft(), F = t[6] && dt(t);
        return {
          c() {
            e = C("main"), x = C("div"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-auhbrc"/> <h1 class="svelte-auhbrc"><span class="brand-peach svelte-auhbrc">Peach</span><span class="brand-safe svelte-auhbrc">Safe</span></h1>', n = w(), o = C("p"), o.textContent = "Anonymous STI notification", r = w(), E.c(), l = w(), d && d.c(), s = w(), F && F.c(), a = M0(), f(x, "class", "brand svelte-auhbrc"), f(o, "class", "subtitle svelte-auhbrc"), f(e, "class", "svelte-auhbrc");
          },
          m(B, A) {
            P(B, e, A), i(e, x), i(e, n), i(e, o), i(e, r), E.m(e, null), i(e, l), d && d.m(e, null), P(B, s, A), F && F.m(B, A), P(B, a, A);
          },
          p(B, [A]) {
            u === (u = c(B)) && E ? E.p(B, A) : (E.d(1), E = u(B), E && (E.c(), E.m(e, l))), B[5] ? d && (d.d(1), d = null) : d || (d = ft(), d.c(), d.m(e, null)), B[6] ? F ? F.p(B, A) : (F = dt(B), F.c(), F.m(a.parentNode, a)) : F && (F.d(1), F = null);
          },
          i: X,
          o: X,
          d(B) {
            B && (y(e), y(s), y(a)), E.d(), d && d.d(), F && F.d(B);
          }
        };
      }
      function ds(t, e, x) {
        let n = "", o = "", r = "", l = false, s = null, a = false, c = null, u = null, E = false, d = 0, F = "", B = false, A = null;
        async function D() {
          x(4, s = null), x(3, l = true);
          try {
            const { challenge: T, auth_salt: I, enc_salt: M } = await Rx(n), S = await U0(o, _0(I)), j = Qn(new TextEncoder().encode(T), S), L = btoa(String.fromCharCode(...j)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
            if ((await lt(n, L)).requires_otp) {
              c = L, u = M, x(5, a = true);
              return;
            }
            await h(M);
          } catch (T) {
            x(4, s = T.message);
          } finally {
            x(3, l = false);
          }
        }
        async function p() {
          x(4, s = null), x(3, l = true);
          try {
            await lt(n, c, r), await h(u);
          } catch (T) {
            x(4, s = T.message);
          } finally {
            x(3, l = false);
          }
        }
        async function h(T) {
          Zn(n);
          const I = await U0(o, _0(T));
          Nx(I), await io(), ts() ? (x(7, d = ns()), F = ct(), x(6, E = true)) : B0(ct());
        }
        async function _() {
          x(9, A = null), x(8, B = true);
          try {
            await os(), x(6, E = false), B0(F);
          } catch (T) {
            x(9, A = T.message);
          } finally {
            x(8, B = false);
          }
        }
        function m() {
          x(6, E = false), B0(F);
        }
        function v() {
          x(5, a = false), x(2, r = ""), c = null, u = null, x(4, s = null);
        }
        function k() {
          n = this.value, x(0, n);
        }
        function b() {
          o = this.value, x(1, o);
        }
        function g() {
          r = this.value, x(2, r);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          E,
          d,
          B,
          A,
          D,
          p,
          _,
          m,
          v,
          k,
          b,
          g
        ];
      }
      class Bs extends v0 {
        constructor(e) {
          super(), h0(this, e, ds, fs, m0, {});
        }
      }
      function Ct(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[6]), f(e, "class", "error svelte-1ij6ekj");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 64 && U(x, n[6]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function Cs(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d, F, B, A, D, p, h, _, m, v, k, b, g, T, I, M, S, j = t[5] ? "Creating account\u2026" : "Create account", L, R, q, H, Z, Q, K, O = t[6] && Ct(t);
        return {
          c() {
            e = C("main"), x = C("div"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1ij6ekj"/> <h1 class="svelte-1ij6ekj"><span class="brand-peach svelte-1ij6ekj">Peach</span><span class="brand-safe svelte-1ij6ekj">Safe</span></h1>', n = w(), o = C("p"), o.textContent = "Create account", r = w(), l = C("form"), s = C("label"), a = N(`Beta code
      `), c = C("input"), u = w(), E = C("label"), d = N(`Username
      `), F = C("input"), B = w(), A = C("label"), D = N(`Email
      `), p = C("input"), h = w(), _ = C("label"), m = N(`Password
      `), v = C("input"), k = w(), b = C("label"), g = N(`Confirm password
      `), T = C("input"), I = w(), O && O.c(), M = w(), S = C("button"), L = N(j), R = w(), q = C("div"), q.innerHTML = `<strong class="svelte-1ij6ekj">Privacy notice</strong> <p>Your password never leaves your device in plaintext. It is used locally
      to derive your signing key via Argon2id \u2014 the server only ever sees your
      Ed25519 public key and a challenge signature.</p>`, H = w(), Z = C("p"), Z.innerHTML = '<a href="#/">Already have an account? Sign in</a>', f(x, "class", "brand svelte-1ij6ekj"), f(o, "class", "page-title svelte-1ij6ekj"), f(c, "type", "text"), c.required = true, f(c, "autocomplete", "off"), f(c, "class", "svelte-1ij6ekj"), f(s, "class", "svelte-1ij6ekj"), f(F, "type", "text"), F.required = true, f(F, "autocomplete", "username"), f(F, "class", "svelte-1ij6ekj"), f(E, "class", "svelte-1ij6ekj"), f(p, "type", "email"), p.required = true, f(p, "autocomplete", "email"), f(p, "class", "svelte-1ij6ekj"), f(A, "class", "svelte-1ij6ekj"), f(v, "type", "password"), v.required = true, f(v, "autocomplete", "new-password"), f(v, "minlength", "12"), f(v, "class", "svelte-1ij6ekj"), f(_, "class", "svelte-1ij6ekj"), f(T, "type", "password"), T.required = true, f(T, "autocomplete", "new-password"), f(T, "class", "svelte-1ij6ekj"), f(b, "class", "svelte-1ij6ekj"), f(S, "type", "submit"), S.disabled = t[5], f(S, "class", "svelte-1ij6ekj"), f(l, "class", "svelte-1ij6ekj"), f(q, "class", "privacy-banner svelte-1ij6ekj"), f(Z, "class", "link svelte-1ij6ekj"), f(e, "class", "svelte-1ij6ekj");
          },
          m(W, e0) {
            P(W, e, e0), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), i(l, s), i(s, a), i(s, c), t0(c, t[4]), i(l, u), i(l, E), i(E, d), i(E, F), t0(F, t[0]), i(l, B), i(l, A), i(A, D), i(A, p), t0(p, t[1]), i(l, h), i(l, _), i(_, m), i(_, v), t0(v, t[2]), i(l, k), i(l, b), i(b, g), i(b, T), t0(T, t[3]), i(l, I), O && O.m(l, null), i(l, M), i(l, S), i(S, L), i(e, R), i(e, q), i(e, H), i(e, Z), Q || (K = [
              G(c, "input", t[8]),
              G(F, "input", t[9]),
              G(p, "input", t[10]),
              G(v, "input", t[11]),
              G(T, "input", t[12]),
              G(l, "submit", z0(t[7]))
            ], Q = true);
          },
          p(W, [e0]) {
            e0 & 16 && c.value !== W[4] && t0(c, W[4]), e0 & 1 && F.value !== W[0] && t0(F, W[0]), e0 & 2 && p.value !== W[1] && t0(p, W[1]), e0 & 4 && v.value !== W[2] && t0(v, W[2]), e0 & 8 && T.value !== W[3] && t0(T, W[3]), W[6] ? O ? O.p(W, e0) : (O = Ct(W), O.c(), O.m(l, M)) : O && (O.d(1), O = null), e0 & 32 && j !== (j = W[5] ? "Creating account\u2026" : "Create account") && U(L, j), e0 & 32 && (S.disabled = W[5]);
          },
          i: X,
          o: X,
          d(W) {
            W && y(e), O && O.d(), Q = false, i0(K);
          }
        };
      }
      const As = "psbeta";
      function Fs(t, e, x) {
        let n = "", o = "", r = "", l = "", s = "", a = false, c = null;
        async function u() {
          if (x(6, c = null), s !== As) {
            x(6, c = "Sorry, we're in closed beta at the moment");
            return;
          }
          if (r !== l) {
            x(6, c = "Passwords do not match");
            return;
          }
          if (r.length < 12) {
            x(6, c = "Password must be at least 12 characters");
            return;
          }
          x(5, a = true);
          try {
            const { auth_salt: D, enc_salt: p } = await Rx(n), h = await U0(r, _0(D)), _ = n0(Yn(h));
            await gl(n, o, _), Zn(n);
            const m = await U0(r, _0(p));
            Nx(m), await io(), B0("/home");
          } catch (D) {
            x(6, c = D.message);
          } finally {
            x(5, a = false);
          }
        }
        function E() {
          s = this.value, x(4, s);
        }
        function d() {
          n = this.value, x(0, n);
        }
        function F() {
          o = this.value, x(1, o);
        }
        function B() {
          r = this.value, x(2, r);
        }
        function A() {
          l = this.value, x(3, l);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          c,
          u,
          E,
          d,
          F,
          B,
          A
        ];
      }
      class Ds extends v0 {
        constructor(e) {
          super(), h0(this, e, Fs, Cs, m0, {});
        }
      }
      function ps(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d, F, B, A;
        return {
          c() {
            e = C("nav"), x = C("a"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-x9yicd"/> <span class="brand-label svelte-x9yicd"><span class="brand-peach svelte-x9yicd">Peach</span><span class="brand-safe svelte-x9yicd">Safe</span></span>', n = w(), o = C("div"), r = C("a"), r.innerHTML = '<span class="material-icons svelte-x9yicd">people</span> <span class="tab-label svelte-x9yicd">Encounters</span>', l = w(), s = C("a"), s.innerHTML = '<span class="material-icons svelte-x9yicd">science</span> <span class="tab-label svelte-x9yicd">Test Results</span>', a = w(), c = C("a"), c.innerHTML = '<span class="material-icons svelte-x9yicd">notifications</span> <span class="tab-label svelte-x9yicd">Alerts</span>', u = w(), E = C("a"), E.innerHTML = '<span class="material-icons svelte-x9yicd">settings</span> <span class="tab-label svelte-x9yicd">Settings</span>', d = w(), F = C("button"), F.textContent = "Sign out", f(x, "href", "#/home"), f(x, "class", "brand svelte-x9yicd"), f(r, "href", "#/encounters"), f(r, "class", "tab svelte-x9yicd"), a0(r, "active", t[0] === "/encounters"), f(s, "href", "#/results"), f(s, "class", "tab svelte-x9yicd"), a0(s, "active", t[0] === "/results"), f(c, "href", "#/alerts"), f(c, "class", "tab svelte-x9yicd"), a0(c, "active", t[0] === "/alerts"), f(o, "class", "tabs svelte-x9yicd"), f(E, "href", "#/settings"), f(E, "class", "tab settings-tab svelte-x9yicd"), f(E, "title", "Settings"), a0(E, "active", t[0] === "/settings" || t[0] === "/change-password"), f(F, "class", "signout-btn svelte-x9yicd"), f(e, "class", "svelte-x9yicd");
          },
          m(D, p) {
            P(D, e, p), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, s), i(o, a), i(o, c), i(e, u), i(e, E), i(e, d), i(e, F), B || (A = G(F, "click", t[1]), B = true);
          },
          p(D, [p]) {
            p & 1 && a0(r, "active", D[0] === "/encounters"), p & 1 && a0(s, "active", D[0] === "/results"), p & 1 && a0(c, "active", D[0] === "/alerts"), p & 1 && a0(E, "active", D[0] === "/settings" || D[0] === "/change-password");
          },
          i: X,
          o: X,
          d(D) {
            D && y(e), B = false, A();
          }
        };
      }
      function ms(t, e, x) {
        let n;
        We(t, zo, (r) => x(0, n = r));
        async function o() {
          await $n(), B0("/");
        }
        return [
          n,
          o
        ];
      }
      class K0 extends v0 {
        constructor(e) {
          super(), h0(this, e, ms, ps, m0, {});
        }
      }
      function hs(t) {
        let e, x, n, o;
        return e = new K0({}), {
          c() {
            y0(e.$$.fragment), x = w(), n = C("main"), n.innerHTML = `<div class="hero svelte-10c4kuo"><div class="logo-wrap svelte-10c4kuo"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="logo-img svelte-10c4kuo"/></div> <h1 class="app-name svelte-10c4kuo"><span class="brand-peach svelte-10c4kuo">Peach</span><span class="brand-safe svelte-10c4kuo">Safe</span></h1> <p class="tagline svelte-10c4kuo">Private. Local. Yours.</p></div> <div class="actions svelte-10c4kuo"><a href="#/encounter-exchange" class="btn-filled svelte-10c4kuo"><span class="material-icons svelte-10c4kuo">qr_code</span>
      Log New Encounter</a></div>`, f(n, "class", "svelte-10c4kuo");
          },
          m(r, l) {
            k0(e, r, l), P(r, x, l), P(r, n, l), o = true;
          },
          p: X,
          i(r) {
            o || (F0(e.$$.fragment, r), o = true);
          },
          o(r) {
            D0(e.$$.fragment, r), o = false;
          },
          d(r) {
            r && (y(x), y(n)), b0(e, r);
          }
        };
      }
      function vs(t) {
        return T0(() => {
          if (!I0()) {
            B0("/");
            return;
          }
        }), [];
      }
      class _s extends v0 {
        constructor(e) {
          super(), h0(this, e, vs, hs, m0, {});
        }
      }
      function At(t, e, x) {
        const n = t.slice();
        return n[20] = e[x], n;
      }
      function Ft(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function Dt(t, e, x) {
        const n = t.slice();
        return n[26] = e[x], n;
      }
      function pt(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function mt(t) {
        let e, x, n, o, r, l, s, a, c, u, E = t[6] ? "Creating\u2026" : "Group encounter", d, F, B, A, D, p, h, _, m, v = t[7] && ht(t);
        return {
          c() {
            e = C("div"), x = C("div"), n = C("p"), n.textContent = "New encounter", o = w(), r = C("button"), r.innerHTML = '<span class="material-icons type-icon svelte-191ro7l">person</span> <span class="type-label svelte-191ro7l">1:1 encounter</span> <span class="material-icons type-chevron svelte-191ro7l">chevron_right</span>', l = w(), s = C("button"), a = C("span"), a.textContent = "groups", c = w(), u = C("span"), d = N(E), F = w(), B = C("span"), B.textContent = "chevron_right", A = w(), v && v.c(), D = w(), p = C("button"), h = N("Cancel"), f(n, "class", "modal-title svelte-191ro7l"), f(r, "class", "type-card svelte-191ro7l"), f(a, "class", "material-icons type-icon svelte-191ro7l"), f(u, "class", "type-label svelte-191ro7l"), f(B, "class", "material-icons type-chevron svelte-191ro7l"), f(s, "class", "type-card svelte-191ro7l"), s.disabled = t[6], f(p, "class", "btn-text cancel-btn svelte-191ro7l"), p.disabled = t[6], f(x, "class", "modal-sheet svelte-191ro7l"), f(e, "class", "modal-backdrop svelte-191ro7l");
          },
          m(k, b) {
            P(k, e, b), i(e, x), i(x, n), i(x, o), i(x, r), i(x, l), i(x, s), i(s, a), i(s, c), i(s, u), i(u, d), i(s, F), i(s, B), i(x, A), v && v.m(x, null), i(x, D), i(x, p), i(p, h), _ || (m = [
              G(r, "click", t[14]),
              G(s, "click", t[10]),
              G(p, "click", t[15]),
              G(x, "click", Po(t[12])),
              G(e, "click", t[16])
            ], _ = true);
          },
          p(k, b) {
            b & 64 && E !== (E = k[6] ? "Creating\u2026" : "Group encounter") && U(d, E), b & 64 && (s.disabled = k[6]), k[7] ? v ? v.p(k, b) : (v = ht(k), v.c(), v.m(x, D)) : v && (v.d(1), v = null), b & 64 && (p.disabled = k[6]);
          },
          d(k) {
            k && y(e), v && v.d(), _ = false, i0(m);
          }
        };
      }
      function ht(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[7]), f(e, "class", "modal-error svelte-191ro7l");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 128 && U(x, n[7]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function ks(t) {
        let e, x, n, o, r = t[9].length > 0 && vt(t), l = t[1].length > 0 && kt(t), s = t[8].length > 0 && wt(t);
        function a(E, d) {
          return E[0].length === 0 && E[9].length === 0 && E[8].length === 0 && E[1].length === 0 ? Ps : E[0].length === 0 ? ys : gs;
        }
        let c = a(t), u = c(t);
        return {
          c() {
            r && r.c(), e = w(), l && l.c(), x = w(), s && s.c(), n = w(), o = C("section"), u.c(), f(o, "class", "card list-card svelte-191ro7l");
          },
          m(E, d) {
            r && r.m(E, d), P(E, e, d), l && l.m(E, d), P(E, x, d), s && s.m(E, d), P(E, n, d), P(E, o, d), u.m(o, null);
          },
          p(E, d) {
            E[9].length > 0 ? r ? r.p(E, d) : (r = vt(E), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), E[1].length > 0 ? l ? l.p(E, d) : (l = kt(E), l.c(), l.m(x.parentNode, x)) : l && (l.d(1), l = null), E[8].length > 0 ? s ? s.p(E, d) : (s = wt(E), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), c === (c = a(E)) && u ? u.p(E, d) : (u.d(1), u = c(E), u && (u.c(), u.m(o, null)));
          },
          d(E) {
            E && (y(e), y(x), y(n), y(o)), r && r.d(E), l && l.d(E), s && s.d(E), u.d();
          }
        };
      }
      function bs(t) {
        let e, x, n;
        return {
          c() {
            e = C("section"), x = C("p"), n = N(t[3]), f(x, "class", "error svelte-191ro7l"), f(e, "class", "card list-card svelte-191ro7l");
          },
          m(o, r) {
            P(o, e, r), i(e, x), i(x, n);
          },
          p(o, r) {
            r & 8 && U(n, o[3]);
          },
          d(o) {
            o && y(e);
          }
        };
      }
      function ws(t) {
        let e;
        return {
          c() {
            e = C("section"), e.innerHTML = '<p class="muted svelte-191ro7l">Loading\u2026</p>', f(e, "class", "card list-card svelte-191ro7l");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function vt(t) {
        let e, x, n, o, r = A0(t[9]), l = [];
        for (let s = 0; s < r.length; s += 1) l[s] = _t(pt(t, r, s));
        return {
          c() {
            e = C("section"), x = C("div"), x.innerHTML = '<span class="material-icons section-icon svelte-191ro7l">favorite</span> <h2 class="svelte-191ro7l">Ongoing partners</h2>', n = w(), o = C("ul");
            for (let s = 0; s < l.length; s += 1) l[s].c();
            f(x, "class", "section-header svelte-191ro7l"), f(o, "class", "svelte-191ro7l"), f(e, "class", "card list-card svelte-191ro7l");
          },
          m(s, a) {
            P(s, e, a), i(e, x), i(e, n), i(e, o);
            for (let c = 0; c < l.length; c += 1) l[c] && l[c].m(o, null);
          },
          p(s, a) {
            if (a & 512) {
              r = A0(s[9]);
              let c;
              for (c = 0; c < r.length; c += 1) {
                const u = pt(s, r, c);
                l[c] ? l[c].p(u, a) : (l[c] = _t(u), l[c].c(), l[c].m(o, null));
              }
              for (; c < l.length; c += 1) l[c].d(1);
              l.length = r.length;
            }
          },
          d(s) {
            s && y(e), q0(l, s);
          }
        };
      }
      function _t(t) {
        let e, x, n, o, r, l, s = Ke(t[23]) + "", a, c, u, E = Ve(t[23]) + "", d, F, B, A, D;
        return {
          c() {
            e = C("li"), x = C("a"), n = C("span"), n.textContent = "favorite", o = w(), r = C("span"), l = C("span"), a = N(s), c = w(), u = C("span"), d = N(E), F = w(), B = C("span"), B.textContent = "chevron_right", D = w(), f(n, "class", "material-icons rel-icon active svelte-191ro7l"), f(l, "class", "rel-name svelte-191ro7l"), f(u, "class", "rel-sub svelte-191ro7l"), f(r, "class", "rel-main svelte-191ro7l"), f(B, "class", "material-icons chevron svelte-191ro7l"), f(x, "class", "rel-row svelte-191ro7l"), f(x, "href", A = "#/relationships/" + n0(t[23].rawToken)), f(e, "class", "svelte-191ro7l");
          },
          m(p, h) {
            P(p, e, h), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(l, a), i(r, c), i(r, u), i(u, d), i(x, F), i(x, B), i(e, D);
          },
          p(p, h) {
            h & 512 && s !== (s = Ke(p[23]) + "") && U(a, s), h & 512 && E !== (E = Ve(p[23]) + "") && U(d, E), h & 512 && A !== (A = "#/relationships/" + n0(p[23].rawToken)) && f(x, "href", A);
          },
          d(p) {
            p && y(e);
          }
        };
      }
      function kt(t) {
        let e, x, n, o, r = A0(t[1]), l = [];
        for (let s = 0; s < r.length; s += 1) l[s] = bt(Dt(t, r, s));
        return {
          c() {
            e = C("section"), x = C("div"), x.innerHTML = '<span class="material-icons section-icon svelte-191ro7l">groups</span> <h2 class="svelte-191ro7l">Group encounters</h2>', n = w(), o = C("ul");
            for (let s = 0; s < l.length; s += 1) l[s].c();
            f(x, "class", "section-header svelte-191ro7l"), f(o, "class", "svelte-191ro7l"), f(e, "class", "card list-card svelte-191ro7l");
          },
          m(s, a) {
            P(s, e, a), i(e, x), i(e, n), i(e, o);
            for (let c = 0; c < l.length; c += 1) l[c] && l[c].m(o, null);
          },
          p(s, a) {
            if (a & 2) {
              r = A0(s[1]);
              let c;
              for (c = 0; c < r.length; c += 1) {
                const u = Dt(s, r, c);
                l[c] ? l[c].p(u, a) : (l[c] = bt(u), l[c].c(), l[c].m(o, null));
              }
              for (; c < l.length; c += 1) l[c].d(1);
              l.length = r.length;
            }
          },
          d(s) {
            s && y(e), q0(l, s);
          }
        };
      }
      function bt(t) {
        let e, x, n, o, r, l, s = Tt(t[26]) + "", a, c, u, E = St(t[26]) + "", d, F, B, A, D;
        return {
          c() {
            e = C("li"), x = C("a"), n = C("span"), n.textContent = "groups", o = w(), r = C("span"), l = C("span"), a = N(s), c = w(), u = C("span"), d = N(E), F = w(), B = C("span"), B.textContent = "chevron_right", D = w(), f(n, "class", "material-icons rel-icon active svelte-191ro7l"), f(l, "class", "rel-name svelte-191ro7l"), f(u, "class", "rel-sub svelte-191ro7l"), f(r, "class", "rel-main svelte-191ro7l"), f(B, "class", "material-icons chevron svelte-191ro7l"), f(x, "class", "rel-row svelte-191ro7l"), f(x, "href", A = "#/groups/" + n0(t[26].token)), f(e, "class", "svelte-191ro7l");
          },
          m(p, h) {
            P(p, e, h), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(l, a), i(r, c), i(r, u), i(u, d), i(x, F), i(x, B), i(e, D);
          },
          p(p, h) {
            h & 2 && s !== (s = Tt(p[26]) + "") && U(a, s), h & 2 && E !== (E = St(p[26]) + "") && U(d, E), h & 2 && A !== (A = "#/groups/" + n0(p[26].token)) && f(x, "href", A);
          },
          d(p) {
            p && y(e);
          }
        };
      }
      function wt(t) {
        let e, x, n, o = t[4] ? "expand_less" : "expand_more", r, l, s, a, c = t[8].length + "", u, E, d, F, B, A = t[4] && gt(t);
        return {
          c() {
            e = C("section"), x = C("button"), n = C("span"), r = N(o), l = w(), s = C("span"), a = N("Archived partners ("), u = N(c), E = N(")"), d = w(), A && A.c(), f(n, "class", "material-icons toggle-icon svelte-191ro7l"), f(s, "class", "muted-label svelte-191ro7l"), f(x, "class", "collapse-toggle svelte-191ro7l"), f(e, "class", "card list-card svelte-191ro7l");
          },
          m(D, p) {
            P(D, e, p), i(e, x), i(x, n), i(n, r), i(x, l), i(x, s), i(s, a), i(s, u), i(s, E), i(e, d), A && A.m(e, null), F || (B = G(x, "click", t[17]), F = true);
          },
          p(D, p) {
            p & 16 && o !== (o = D[4] ? "expand_less" : "expand_more") && U(r, o), p & 256 && c !== (c = D[8].length + "") && U(u, c), D[4] ? A ? A.p(D, p) : (A = gt(D), A.c(), A.m(e, null)) : A && (A.d(1), A = null);
          },
          d(D) {
            D && y(e), A && A.d(), F = false, B();
          }
        };
      }
      function gt(t) {
        let e, x = A0(t[8]), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = yt(Ft(t, x, o));
        return {
          c() {
            e = C("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            f(e, "class", "svelte-191ro7l");
          },
          m(o, r) {
            P(o, e, r);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, r) {
            if (r & 256) {
              x = A0(o[8]);
              let l;
              for (l = 0; l < x.length; l += 1) {
                const s = Ft(o, x, l);
                n[l] ? n[l].p(s, r) : (n[l] = yt(s), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && y(e), q0(n, o);
          }
        };
      }
      function yt(t) {
        let e, x, n, o, r, l, s = Ke(t[23]) + "", a, c, u, E = Ve(t[23]) + "", d, F, B, A, D;
        return {
          c() {
            e = C("li"), x = C("a"), n = C("span"), n.textContent = "favorite_border", o = w(), r = C("span"), l = C("span"), a = N(s), c = w(), u = C("span"), d = N(E), F = w(), B = C("span"), B.textContent = "chevron_right", D = w(), f(n, "class", "material-icons rel-icon ended svelte-191ro7l"), f(l, "class", "rel-name svelte-191ro7l"), f(u, "class", "rel-sub svelte-191ro7l"), f(r, "class", "rel-main svelte-191ro7l"), f(B, "class", "material-icons chevron svelte-191ro7l"), f(x, "class", "rel-row svelte-191ro7l"), f(x, "href", A = "#/relationships/" + n0(t[23].rawToken)), f(e, "class", "svelte-191ro7l");
          },
          m(p, h) {
            P(p, e, h), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(l, a), i(r, c), i(r, u), i(u, d), i(x, F), i(x, B), i(e, D);
          },
          p(p, h) {
            h & 256 && s !== (s = Ke(p[23]) + "") && U(a, s), h & 256 && E !== (E = Ve(p[23]) + "") && U(d, E), h & 256 && A !== (A = "#/relationships/" + n0(p[23].rawToken)) && f(x, "href", A);
          },
          d(p) {
            p && y(e);
          }
        };
      }
      function gs(t) {
        let e, x, n, o = A0(t[0]), r = [];
        for (let l = 0; l < o.length; l += 1) r[l] = Pt(At(t, o, l));
        return {
          c() {
            e = C("div"), e.innerHTML = '<span class="material-icons section-icon svelte-191ro7l">check_circle_outline</span> <h2 class="svelte-191ro7l">One-time encounters</h2>', x = w(), n = C("ul");
            for (let l = 0; l < r.length; l += 1) r[l].c();
            f(e, "class", "section-header svelte-191ro7l"), f(n, "class", "svelte-191ro7l");
          },
          m(l, s) {
            P(l, e, s), P(l, x, s), P(l, n, s);
            for (let a = 0; a < r.length; a += 1) r[a] && r[a].m(n, null);
          },
          p(l, s) {
            if (s & 1) {
              o = A0(l[0]);
              let a;
              for (a = 0; a < o.length; a += 1) {
                const c = At(l, o, a);
                r[a] ? r[a].p(c, s) : (r[a] = Pt(c), r[a].c(), r[a].m(n, null));
              }
              for (; a < r.length; a += 1) r[a].d(1);
              r.length = o.length;
            }
          },
          d(l) {
            l && (y(e), y(x), y(n)), q0(r, l);
          }
        };
      }
      function ys(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "No one-time encounters.", f(e, "class", "muted list-muted svelte-191ro7l");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function Ps(t) {
        let e, x, n, o, r, l, s, a;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "people_outline", n = w(), o = C("p"), o.textContent = "No encounters recorded yet.", r = w(), l = C("button"), l.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, f(x, "class", "material-icons empty-icon svelte-191ro7l"), f(o, "class", "svelte-191ro7l"), f(l, "class", "btn-filled svelte-191ro7l"), f(e, "class", "empty-state svelte-191ro7l");
          },
          m(c, u) {
            P(c, e, u), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), s || (a = G(l, "click", t[18]), s = true);
          },
          p: X,
          d(c) {
            c && y(e), s = false, a();
          }
        };
      }
      function Pt(t) {
        let e, x, n, o, r = t[20].date + "", l, s, a, c = t[20].token.slice(0, 12) + "", u, E, d;
        return {
          c() {
            e = C("li"), x = C("span"), x.textContent = "check_circle_outline", n = w(), o = C("span"), l = N(r), s = w(), a = C("span"), u = N(c), E = N("\u2026"), d = w(), f(x, "class", "material-icons list-icon svelte-191ro7l"), f(o, "class", "enc-date svelte-191ro7l"), f(a, "class", "enc-token svelte-191ro7l"), f(e, "class", "svelte-191ro7l");
          },
          m(F, B) {
            P(F, e, B), i(e, x), i(e, n), i(e, o), i(o, l), i(e, s), i(e, a), i(a, u), i(a, E), i(e, d);
          },
          p(F, B) {
            B & 1 && r !== (r = F[20].date + "") && U(l, r), B & 1 && c !== (c = F[20].token.slice(0, 12) + "") && U(u, c);
          },
          d(F) {
            F && y(e);
          }
        };
      }
      function Ts(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d;
        e = new K0({});
        let F = t[5] && mt(t);
        function B(p, h) {
          return p[2] ? ws : p[3] ? bs : ks;
        }
        let A = B(t), D = A(t);
        return {
          c() {
            y0(e.$$.fragment), x = w(), n = C("main"), o = C("div"), r = C("h1"), r.textContent = "Encounters", l = w(), s = C("button"), s.innerHTML = '<span class="material-icons">add</span>', a = w(), F && F.c(), c = w(), D.c(), f(r, "class", "svelte-191ro7l"), f(s, "class", "fab svelte-191ro7l"), f(s, "title", "Add encounter"), f(o, "class", "page-header svelte-191ro7l"), f(n, "class", "svelte-191ro7l");
          },
          m(p, h) {
            k0(e, p, h), P(p, x, h), P(p, n, h), i(n, o), i(o, r), i(o, l), i(o, s), i(n, a), F && F.m(n, null), i(n, c), D.m(n, null), u = true, E || (d = G(s, "click", t[13]), E = true);
          },
          p(p, [h]) {
            p[5] ? F ? F.p(p, h) : (F = mt(p), F.c(), F.m(n, c)) : F && (F.d(1), F = null), A === (A = B(p)) && D ? D.p(p, h) : (D.d(1), D = A(p), D && (D.c(), D.m(n, null)));
          },
          i(p) {
            u || (F0(e.$$.fragment, p), u = true);
          },
          o(p) {
            D0(e.$$.fragment, p), u = false;
          },
          d(p) {
            p && (y(x), y(n)), b0(e, p), F && F.d(), D.d(), E = false, d();
          }
        };
      }
      function Ke(t) {
        return t.name ? t.name : t.endedAt ? "Ended partner" : "Active partner";
      }
      function Ve(t) {
        return t.endedAt ? "Ended " + t.endedAt : "Since " + t.createdAt;
      }
      function Tt(t) {
        return t.name || "Group encounter";
      }
      function St(t) {
        return (t.isHost ? "Host \xB7 " : "") + t.date;
      }
      function Ss(t, e, x) {
        let n, o, r = [], l = [], s = [], a = true, c = null, u = false, E = false, d = false, F = null;
        T0(async () => {
          if (!I0()) {
            B0("/");
            return;
          }
          await B();
        });
        async function B() {
          x(2, a = true), x(3, c = null);
          try {
            x(0, r = await jl()), x(11, l = Gx()), x(1, s = ao());
          } catch (b) {
            x(3, c = b.message);
          } finally {
            x(2, a = false);
          }
        }
        async function A() {
          x(6, d = true), x(7, F = null);
          try {
            const b = we(32), g = Ee(), T = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
            await co(b, T, true, g, null), x(5, E = false), B0("/groups/" + n0(b));
          } catch (b) {
            x(7, F = b.message);
          } finally {
            x(6, d = false);
          }
        }
        function D(b) {
          Ax.call(this, t, b);
        }
        const p = () => x(5, E = true), h = () => {
          x(5, E = false), B0("/encounter-exchange");
        }, _ = () => x(5, E = false), m = () => {
          d || x(5, E = false);
        }, v = () => x(4, u = !u), k = () => x(5, E = true);
        return t.$$.update = () => {
          t.$$.dirty & 2048 && x(9, n = l.filter((b) => !b.archived)), t.$$.dirty & 2048 && x(8, o = l.filter((b) => b.archived));
        }, [
          r,
          s,
          a,
          c,
          u,
          E,
          d,
          F,
          o,
          n,
          A,
          l,
          D,
          p,
          h,
          _,
          m,
          v,
          k
        ];
      }
      class Ms extends v0 {
        constructor(e) {
          super(), h0(this, e, Ss, Ts, m0, {});
        }
      }
      function Is(t) {
        let e, x, n, o, r = t[7] ? "favorite" : "favorite_border", l, s, a, c, u = t[7] ? "Active partner" : "Ended", E, d, F, B, A, D, p = Ye(t[0].createdAt) + "", h, _, m, v, k, b, g, T, I, M, S = t[3] && Mt(t), j = t[0].archived && It(), L = t[0].endedAt && Lt(t);
        function R(z, r0) {
          return z[4] ? js : Ns;
        }
        let q = R(t), H = q(t);
        function Z(z, r0) {
          return z[7] ? Os : Rs;
        }
        let Q = Z(t), K = Q(t);
        function O(z, r0) {
          return z[0].archived ? Gs : z[6] === "archive" ? zs : Us;
        }
        let W = O(t), e0 = W(t);
        return {
          c() {
            S && S.c(), e = w(), x = C("section"), n = C("div"), o = C("span"), l = N(r), s = w(), a = C("div"), c = C("span"), E = N(u), d = w(), j && j.c(), F = w(), B = C("div"), A = C("span"), D = N("Since "), h = N(p), _ = w(), L && L.c(), m = w(), v = C("section"), H.c(), k = w(), b = C("div"), g = w(), K.c(), T = w(), I = C("div"), M = w(), e0.c(), f(o, "class", "material-icons status-icon svelte-dnij8l"), a0(o, "active", t[7]), a0(o, "ended", !t[7]), f(c, "class", "status-label svelte-dnij8l"), a0(c, "active", t[7]), f(a, "class", "status-text svelte-dnij8l"), f(n, "class", "status-row svelte-dnij8l"), f(B, "class", "dates svelte-dnij8l"), f(x, "class", "card pad svelte-dnij8l"), f(b, "class", "divider svelte-dnij8l"), f(I, "class", "divider svelte-dnij8l"), f(v, "class", "card svelte-dnij8l");
          },
          m(z, r0) {
            S && S.m(z, r0), P(z, e, r0), P(z, x, r0), i(x, n), i(n, o), i(o, l), i(n, s), i(n, a), i(a, c), i(c, E), i(a, d), j && j.m(a, null), i(x, F), i(x, B), i(B, A), i(A, D), i(A, h), i(B, _), L && L.m(B, null), P(z, m, r0), P(z, v, r0), H.m(v, null), i(v, k), i(v, b), i(v, g), K.m(v, null), i(v, T), i(v, I), i(v, M), e0.m(v, null);
          },
          p(z, r0) {
            z[3] ? S ? S.p(z, r0) : (S = Mt(z), S.c(), S.m(e.parentNode, e)) : S && (S.d(1), S = null), r0 & 128 && r !== (r = z[7] ? "favorite" : "favorite_border") && U(l, r), r0 & 128 && a0(o, "active", z[7]), r0 & 128 && a0(o, "ended", !z[7]), r0 & 128 && u !== (u = z[7] ? "Active partner" : "Ended") && U(E, u), r0 & 128 && a0(c, "active", z[7]), z[0].archived ? j || (j = It(), j.c(), j.m(a, null)) : j && (j.d(1), j = null), r0 & 1 && p !== (p = Ye(z[0].createdAt) + "") && U(h, p), z[0].endedAt ? L ? L.p(z, r0) : (L = Lt(z), L.c(), L.m(B, null)) : L && (L.d(1), L = null), q === (q = R(z)) && H ? H.p(z, r0) : (H.d(1), H = q(z), H && (H.c(), H.m(v, k))), Q === (Q = Z(z)) && K ? K.p(z, r0) : (K.d(1), K = Q(z), K && (K.c(), K.m(v, T))), W === (W = O(z)) && e0 ? e0.p(z, r0) : (e0.d(1), e0 = W(z), e0 && (e0.c(), e0.m(v, null)));
          },
          d(z) {
            z && (y(e), y(x), y(m), y(v)), S && S.d(z), j && j.d(), L && L.d(), H.d(), K.d(), e0.d();
          }
        };
      }
      function Ls(t) {
        let e;
        return {
          c() {
            e = C("section"), e.innerHTML = '<p class="muted svelte-dnij8l">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-dnij8l">\u2190 Back to encounters</a>', f(e, "class", "card pad svelte-dnij8l");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function Mt(t) {
        let e, x, n, o;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "error_outline", n = w(), o = N(t[3]), f(x, "class", "material-icons svelte-dnij8l"), f(e, "class", "toast error-toast svelte-dnij8l");
          },
          m(r, l) {
            P(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l & 8 && U(o, r[3]);
          },
          d(r) {
            r && y(e);
          }
        };
      }
      function It(t) {
        let e;
        return {
          c() {
            e = C("span"), e.textContent = "archived", f(e, "class", "badge archived svelte-dnij8l");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Lt(t) {
        let e, x, n = Ye(t[0].endedAt) + "", o;
        return {
          c() {
            e = C("span"), x = N("Ended "), o = N(n);
          },
          m(r, l) {
            P(r, e, l), i(e, x), i(e, o);
          },
          p(r, l) {
            l & 1 && n !== (n = Ye(r[0].endedAt) + "") && U(o, n);
          },
          d(r) {
            r && y(e);
          }
        };
      }
      function Ns(t) {
        let e, x, n, o, r = (t[0].name ? t[0].name : "Add nickname") + "", l, s, a, c, u, E, d = t[0].name && Nt();
        return {
          c() {
            e = C("button"), x = C("span"), x.textContent = "edit", n = w(), o = C("span"), l = N(r), s = w(), d && d.c(), a = w(), c = C("span"), c.textContent = "chevron_right", f(x, "class", "material-icons action-icon svelte-dnij8l"), f(o, "class", "action-label svelte-dnij8l"), f(c, "class", "material-icons action-chevron svelte-dnij8l"), f(e, "class", "action-row svelte-dnij8l");
          },
          m(F, B) {
            P(F, e, B), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), d && d.m(o, null), i(e, a), i(e, c), u || (E = G(e, "click", t[13]), u = true);
          },
          p(F, B) {
            B & 1 && r !== (r = (F[0].name ? F[0].name : "Add nickname") + "") && U(l, r), F[0].name ? d || (d = Nt(), d.c(), d.m(o, null)) : d && (d.d(1), d = null);
          },
          d(F) {
            F && y(e), d && d.d(), u = false, E();
          }
        };
      }
      function js(t) {
        let e, x, n, o, r, l, s, a, c, u, E = t[2] ? "Saving\u2026" : "Save", d, F, B;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "edit", n = w(), o = C("form"), r = C("input"), l = w(), s = C("div"), a = C("button"), a.textContent = "Cancel", c = w(), u = C("button"), d = N(E), f(x, "class", "material-icons action-icon svelte-dnij8l"), f(r, "type", "text"), f(r, "placeholder", "Optional nickname"), f(r, "maxlength", "64"), r.autofocus = true, f(r, "class", "svelte-dnij8l"), f(a, "type", "button"), f(a, "class", "btn-text svelte-dnij8l"), f(u, "type", "submit"), f(u, "class", "btn-filled-sm svelte-dnij8l"), u.disabled = t[2], f(s, "class", "name-actions svelte-dnij8l"), f(o, "class", "name-form svelte-dnij8l"), f(e, "class", "action-row edit-name-row svelte-dnij8l");
          },
          m(A, D) {
            P(A, e, D), i(e, x), i(e, n), i(e, o), i(o, r), t0(r, t[5]), i(o, l), i(o, s), i(s, a), i(s, c), i(s, u), i(u, d), r.focus(), F || (B = [
              G(r, "input", t[16]),
              G(a, "click", t[14]),
              G(o, "submit", z0(t[9]))
            ], F = true);
          },
          p(A, D) {
            D & 32 && r.value !== A[5] && t0(r, A[5]), D & 4 && E !== (E = A[2] ? "Saving\u2026" : "Save") && U(d, E), D & 4 && (u.disabled = A[2]);
          },
          d(A) {
            A && y(e), F = false, i0(B);
          }
        };
      }
      function Nt(t) {
        let e;
        return {
          c() {
            e = C("span"), e.textContent = "Tap to change", f(e, "class", "action-sub svelte-dnij8l");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Rs(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = C("button"), x = C("span"), x.textContent = "favorite", n = w(), o = C("span"), o.textContent = "Mark as active again", f(x, "class", "material-icons action-icon primary svelte-dnij8l"), f(o, "class", "action-label primary svelte-dnij8l"), f(e, "class", "action-row svelte-dnij8l"), e.disabled = t[2];
          },
          m(s, a) {
            P(s, e, a), i(e, x), i(e, n), i(e, o), r || (l = G(e, "click", t[11]), r = true);
          },
          p(s, a) {
            a & 4 && (e.disabled = s[2]);
          },
          d(s) {
            s && y(e), r = false, l();
          }
        };
      }
      function Os(t) {
        let e;
        function x(r, l) {
          return r[6] === "end" ? Hs : qs;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            o.c(), e = M0();
          },
          m(r, l) {
            o.m(r, l), P(r, e, l);
          },
          p(r, l) {
            n === (n = x(r)) && o ? o.p(r, l) : (o.d(1), o = n(r), o && (o.c(), o.m(e.parentNode, e)));
          },
          d(r) {
            r && y(e), o.d(r);
          }
        };
      }
      function qs(t) {
        let e, x, n;
        return {
          c() {
            e = C("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-dnij8l">heart_broken</span> <span class="action-label danger svelte-dnij8l">Mark as ended</span>', f(e, "class", "action-row svelte-dnij8l");
          },
          m(o, r) {
            P(o, e, r), x || (n = G(e, "click", t[18]), x = true);
          },
          p: X,
          d(o) {
            o && y(e), x = false, n();
          }
        };
      }
      function Hs(t) {
        let e, x, n, o, r, l, s, a = t[2] ? "Saving\u2026" : "Mark as ended", c, u, E;
        return {
          c() {
            e = C("div"), x = C("p"), x.textContent = "Mark this partnership as ended?", n = w(), o = C("div"), r = C("button"), r.textContent = "Cancel", l = w(), s = C("button"), c = N(a), f(x, "class", "confirm-text svelte-dnij8l"), f(r, "class", "btn-text svelte-dnij8l"), f(s, "class", "btn-danger-sm svelte-dnij8l"), s.disabled = t[2], f(o, "class", "confirm-actions svelte-dnij8l"), f(e, "class", "confirm-row svelte-dnij8l");
          },
          m(d, F) {
            P(d, e, F), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, s), i(s, c), u || (E = [
              G(r, "click", t[17]),
              G(s, "click", t[10])
            ], u = true);
          },
          p(d, F) {
            F & 4 && a !== (a = d[2] ? "Saving\u2026" : "Mark as ended") && U(c, a), F & 4 && (s.disabled = d[2]);
          },
          d(d) {
            d && y(e), u = false, i0(E);
          }
        };
      }
      function Us(t) {
        let e, x, n;
        return {
          c() {
            e = C("button"), e.innerHTML = '<span class="material-icons action-icon svelte-dnij8l">archive</span> <span class="action-label svelte-dnij8l">Archive</span> <span class="action-sub-right svelte-dnij8l">Hide from main list</span>', f(e, "class", "action-row svelte-dnij8l");
          },
          m(o, r) {
            P(o, e, r), x || (n = G(e, "click", t[22]), x = true);
          },
          p: X,
          d(o) {
            o && y(e), x = false, n();
          }
        };
      }
      function zs(t) {
        let e, x, n, o, r, l, s, a = t[2] ? "Saving\u2026" : "Archive", c, u, E;
        return {
          c() {
            e = C("div"), x = C("p"), x.textContent = "Archive this partner? They will be hidden from the main list.", n = w(), o = C("div"), r = C("button"), r.textContent = "Cancel", l = w(), s = C("button"), c = N(a), f(x, "class", "confirm-text svelte-dnij8l"), f(r, "class", "btn-text svelte-dnij8l"), f(s, "class", "btn-filled-sm svelte-dnij8l"), s.disabled = t[2], f(o, "class", "confirm-actions svelte-dnij8l"), f(e, "class", "confirm-row svelte-dnij8l");
          },
          m(d, F) {
            P(d, e, F), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, s), i(s, c), u || (E = [
              G(r, "click", t[20]),
              G(s, "click", t[21])
            ], u = true);
          },
          p(d, F) {
            F & 4 && a !== (a = d[2] ? "Saving\u2026" : "Archive") && U(c, a), F & 4 && (s.disabled = d[2]);
          },
          d(d) {
            d && y(e), u = false, i0(E);
          }
        };
      }
      function Gs(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = C("button"), x = C("span"), x.textContent = "unarchive", n = w(), o = C("span"), o.textContent = "Unarchive", f(x, "class", "material-icons action-icon primary svelte-dnij8l"), f(o, "class", "action-label primary svelte-dnij8l"), f(e, "class", "action-row svelte-dnij8l"), e.disabled = t[2];
          },
          m(s, a) {
            P(s, e, a), i(e, x), i(e, n), i(e, o), r || (l = G(e, "click", t[19]), r = true);
          },
          p(s, a) {
            a & 4 && (e.disabled = s[2]);
          },
          d(s) {
            s && y(e), r = false, l();
          }
        };
      }
      function Ks(t) {
        let e, x, n, o, r, l, s, a = (t[1] ? "Partner not found" : t[8]) + "", c, u, E;
        e = new K0({});
        function d(A, D) {
          if (A[1]) return Ls;
          if (A[0]) return Is;
        }
        let F = d(t), B = F && F(t);
        return {
          c() {
            y0(e.$$.fragment), x = w(), n = C("main"), o = C("div"), r = C("a"), r.innerHTML = '<span class="material-icons svelte-dnij8l">arrow_back</span>', l = w(), s = C("h1"), c = N(a), u = w(), B && B.c(), f(r, "class", "back-btn svelte-dnij8l"), f(r, "href", "#/encounters"), f(s, "class", "svelte-dnij8l"), f(o, "class", "page-header svelte-dnij8l"), f(n, "class", "svelte-dnij8l");
          },
          m(A, D) {
            k0(e, A, D), P(A, x, D), P(A, n, D), i(n, o), i(o, r), i(o, l), i(o, s), i(s, c), i(n, u), B && B.m(n, null), E = true;
          },
          p(A, [D]) {
            (!E || D & 258) && a !== (a = (A[1] ? "Partner not found" : A[8]) + "") && U(c, a), F === (F = d(A)) && B ? B.p(A, D) : (B && B.d(1), B = F && F(A), B && (B.c(), B.m(n, null)));
          },
          i(A) {
            E || (F0(e.$$.fragment, A), E = true);
          },
          o(A) {
            D0(e.$$.fragment, A), E = false;
          },
          d(A) {
            A && (y(x), y(n)), b0(e, A), B && B.d();
          }
        };
      }
      function Ye(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Vs(t, e, x) {
        let n, o, { params: r = {} } = e, l = null, s = false, a = false, c = null, u = false, E = "", d = null;
        T0(() => {
          if (!I0()) {
            B0("/");
            return;
          }
          F();
        });
        function F() {
          const S = Gx(), j = r.rawTokenHex;
          x(0, l = S.find((L) => n0(L.rawToken) === j) ?? null), l || x(1, s = true);
        }
        function B() {
          return n0(l.rawToken);
        }
        async function A() {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              const S = E.trim();
              await Me(B(), {
                name: S || null
              }), F(), x(4, u = false);
            } catch (S) {
              x(3, c = S.message);
            } finally {
              x(2, a = false);
            }
          }
        }
        async function D() {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              const S = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              await Me(B(), {
                endedAt: S
              }), F();
            } catch (S) {
              x(3, c = S.message);
            } finally {
              x(2, a = false), x(6, d = null);
            }
          }
        }
        async function p() {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              await Me(B(), {
                endedAt: null
              }), F();
            } catch (S) {
              x(3, c = S.message);
            } finally {
              x(2, a = false);
            }
          }
        }
        async function h(S) {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              await Me(B(), {
                archived: S
              }), F();
            } catch (j) {
              x(3, c = j.message);
            } finally {
              x(2, a = false), x(6, d = null);
            }
          }
        }
        function _() {
          x(5, E = l.name ?? ""), x(4, u = true), x(3, c = null);
        }
        function m() {
          x(4, u = false), x(3, c = null);
        }
        function v() {
          E = this.value, x(5, E);
        }
        const k = () => x(6, d = null), b = () => x(6, d = "end"), g = () => h(false), T = () => x(6, d = null), I = () => h(true), M = () => x(6, d = "archive");
        return t.$$set = (S) => {
          "params" in S && x(15, r = S.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && x(8, n = l?.name || (l?.endedAt ? "Ended partner" : "Active partner")), t.$$.dirty & 1 && x(7, o = l && !l.endedAt);
        }, [
          l,
          s,
          a,
          c,
          u,
          E,
          d,
          o,
          n,
          A,
          D,
          p,
          h,
          _,
          m,
          r,
          v,
          k,
          b,
          g,
          T,
          I,
          M
        ];
      }
      class Ys extends v0 {
        constructor(e) {
          super(), h0(this, e, Vs, Ks, m0, {
            params: 15
          });
        }
      }
      function jt(t, e, x) {
        const n = t.slice();
        n[18] = e[x], n[21] = x;
        const o = n[6].length - 1 - n[21];
        return n[19] = o, n;
      }
      function Rt(t, e, x) {
        const n = t.slice();
        return n[22] = e[x], n[23] = e, n[24] = x, n;
      }
      function Qs(t) {
        let e;
        return {
          c() {
            e = C("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check_circle</span>
      Result saved. (No encounters on record to notify.)`, f(e, "class", "toast success svelte-8u23ha");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Js(t) {
        let e;
        return {
          c() {
            e = C("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check_circle</span>
      Result saved.`, f(e, "class", "toast success svelte-8u23ha");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Ws(t) {
        let e;
        return {
          c() {
            e = C("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check_circle</span>
      Result saved. Partners notified.`, f(e, "class", "toast success svelte-8u23ha");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Ot(t) {
        let e, x, n, o;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "error_outline", n = w(), o = N(t[5]), f(x, "class", "material-icons svelte-8u23ha"), f(e, "class", "toast error-toast svelte-8u23ha");
          },
          m(r, l) {
            P(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l & 32 && U(o, r[5]);
          },
          d(r) {
            r && y(e);
          }
        };
      }
      function qt(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d, F, B, A, D, p, h, _, m, v = t[3] && t[4] === "computing" ? "Saving\u2026" : "Save result", k, b, g, T = A0(O0), I = [];
        for (let S = 0; S < T.length; S += 1) I[S] = Ht(Rt(t, T, S));
        let M = t[4] === "computing" && Ut();
        return {
          c() {
            e = C("section"), x = C("h2"), x.textContent = "Record a result", n = w(), o = C("p"), o.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, r = w(), l = C("form"), s = C("label"), a = N(`Test date
          `), c = C("input"), u = w(), E = C("fieldset"), d = C("legend"), d.textContent = "Positive results", F = w(), B = C("div");
            for (let S = 0; S < I.length; S += 1) I[S].c();
            A = w(), M && M.c(), D = w(), p = C("div"), h = C("button"), h.textContent = "Cancel", _ = w(), m = C("button"), k = N(v), f(x, "class", "svelte-8u23ha"), f(o, "class", "help svelte-8u23ha"), f(c, "type", "date"), c.required = true, f(c, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), f(c, "class", "svelte-8u23ha"), f(s, "class", "svelte-8u23ha"), f(d, "class", "svelte-8u23ha"), f(B, "class", "disease-grid svelte-8u23ha"), f(E, "class", "svelte-8u23ha"), f(h, "type", "button"), f(h, "class", "btn-text svelte-8u23ha"), f(m, "type", "submit"), f(m, "class", "btn-filled svelte-8u23ha"), m.disabled = t[3], f(p, "class", "form-actions svelte-8u23ha"), f(l, "class", "svelte-8u23ha"), f(e, "class", "card form-card svelte-8u23ha");
          },
          m(S, j) {
            P(S, e, j), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), i(l, s), i(s, a), i(s, c), t0(c, t[0]), i(l, u), i(l, E), i(E, d), i(E, F), i(E, B);
            for (let L = 0; L < I.length; L += 1) I[L] && I[L].m(B, null);
            i(l, A), M && M.m(l, null), i(l, D), i(l, p), i(p, h), i(p, _), i(p, m), i(m, k), b || (g = [
              G(c, "input", t[11]),
              G(h, "click", t[13]),
              G(l, "submit", z0(t[8]))
            ], b = true);
          },
          p(S, j) {
            if (j & 1 && t0(c, S[0]), j & 2) {
              T = A0(O0);
              let L;
              for (L = 0; L < T.length; L += 1) {
                const R = Rt(S, T, L);
                I[L] ? I[L].p(R, j) : (I[L] = Ht(R), I[L].c(), I[L].m(B, null));
              }
              for (; L < I.length; L += 1) I[L].d(1);
              I.length = T.length;
            }
            S[4] === "computing" ? M || (M = Ut(), M.c(), M.m(l, D)) : M && (M.d(1), M = null), j & 24 && v !== (v = S[3] && S[4] === "computing" ? "Saving\u2026" : "Save result") && U(k, v), j & 8 && (m.disabled = S[3]);
          },
          d(S) {
            S && y(e), q0(I, S), M && M.d(), b = false, i0(g);
          }
        };
      }
      function Ht(t) {
        let e, x, n, o = Ux[t[22]] + "", r, l, s, a;
        function c() {
          t[12].call(x, t[22]);
        }
        return {
          c() {
            e = C("label"), x = C("input"), n = w(), r = N(o), l = w(), f(x, "type", "checkbox"), f(x, "class", "svelte-8u23ha"), f(e, "class", "checkbox-label svelte-8u23ha");
          },
          m(u, E) {
            P(u, e, E), i(e, x), x.checked = t[1][t[22]], i(e, n), i(e, r), i(e, l), s || (a = G(x, "change", c), s = true);
          },
          p(u, E) {
            t = u, E & 2 && (x.checked = t[1][t[22]]);
          },
          d(u) {
            u && y(e), s = false, a();
          }
        };
      }
      function Ut(t) {
        let e;
        return {
          c() {
            e = C("p"), e.innerHTML = `<span class="material-icons spin svelte-8u23ha">autorenew</span>
            Notifying\u2026`, f(e, "class", "computing-status svelte-8u23ha");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Xs(t) {
        let e, x = A0([
          ...t[6]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = Gt(jt(t, x, o));
        return {
          c() {
            e = C("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            f(e, "class", "svelte-8u23ha");
          },
          m(o, r) {
            P(o, e, r);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, r) {
            if (r & 712) {
              x = A0([
                ...o[6]
              ].reverse());
              let l;
              for (l = 0; l < x.length; l += 1) {
                const s = jt(o, x, l);
                n[l] ? n[l].p(s, r) : (n[l] = Gt(s), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && y(e), q0(n, o);
          }
        };
      }
      function Zs(t) {
        let e, x, n, o, r, l, s, a;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "science", n = w(), o = C("p"), o.textContent = "No results recorded yet.", r = w(), l = C("button"), l.innerHTML = `<span class="material-icons">add</span>
          Record first result`, f(x, "class", "material-icons empty-icon svelte-8u23ha"), f(o, "class", "svelte-8u23ha"), f(l, "class", "btn-filled svelte-8u23ha"), f(e, "class", "empty-state svelte-8u23ha");
          },
          m(c, u) {
            P(c, e, u), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), s || (a = G(l, "click", t[14]), s = true);
          },
          p: X,
          d(c) {
            c && y(e), s = false, a();
          }
        };
      }
      function $s(t) {
        let e;
        return {
          c() {
            e = C("span"), e.textContent = "Negative", f(e, "class", "badge negative svelte-8u23ha");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function e9(t) {
        let e;
        return {
          c() {
            e = C("span"), e.textContent = "Positive", f(e, "class", "badge positive svelte-8u23ha");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function zt(t) {
        let e, x = t[18].positiveDiseases.map(t[15]).join(", ") + "", n, o, r;
        function l(c, u) {
          return c[18].hasNotified ? t9 : x9;
        }
        let s = l(t), a = s(t);
        return {
          c() {
            e = C("div"), n = N(x), o = w(), a.c(), r = M0(), f(e, "class", "diseases svelte-8u23ha");
          },
          m(c, u) {
            P(c, e, u), i(e, n), P(c, o, u), a.m(c, u), P(c, r, u);
          },
          p(c, u) {
            u & 64 && x !== (x = c[18].positiveDiseases.map(c[15]).join(", ") + "") && U(n, x), s === (s = l(c)) && a ? a.p(c, u) : (a.d(1), a = s(c), a && (a.c(), a.m(r.parentNode, r)));
          },
          d(c) {
            c && (y(e), y(o), y(r)), a.d(c);
          }
        };
      }
      function x9(t) {
        let e, x, n, o, r = t[7] === t[19] ? "Notifying\u2026" : "Notify now", l, s, a;
        function c() {
          return t[16](t[19], t[18]);
        }
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "Partners not yet notified", n = w(), o = C("button"), l = N(r), f(x, "class", "not-notified svelte-8u23ha"), f(o, "class", "btn-text-small svelte-8u23ha"), o.disabled = t[3], f(e, "class", "notify-row svelte-8u23ha");
          },
          m(u, E) {
            P(u, e, E), i(e, x), i(e, n), i(e, o), i(o, l), s || (a = G(o, "click", c), s = true);
          },
          p(u, E) {
            t = u, E & 192 && r !== (r = t[7] === t[19] ? "Notifying\u2026" : "Notify now") && U(l, r), E & 8 && (o.disabled = t[3]);
          },
          d(u) {
            u && y(e), s = false, a();
          }
        };
      }
      function t9(t) {
        let e;
        return {
          c() {
            e = C("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check</span>
                    Partners notified`, f(e, "class", "notified svelte-8u23ha");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function Gt(t) {
        let e, x, n = t[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", o, r, l, s, a, c = t[18].date + "", u, E, d, F;
        function B(h, _) {
          return h[18].positiveDiseases.length > 0 ? e9 : $s;
        }
        let A = B(t), D = A(t), p = t[18].positiveDiseases.length > 0 && zt(t);
        return {
          c() {
            e = C("li"), x = C("span"), o = N(n), r = w(), l = C("div"), s = C("div"), a = C("span"), u = N(c), E = w(), D.c(), d = w(), p && p.c(), F = w(), f(x, "class", "material-icons result-icon svelte-8u23ha"), a0(x, "positive", t[18].positiveDiseases.length > 0), a0(x, "negative", t[18].positiveDiseases.length === 0), f(a, "class", "result-date svelte-8u23ha"), f(s, "class", "result-row svelte-8u23ha"), f(l, "class", "result-body svelte-8u23ha"), f(e, "class", "svelte-8u23ha");
          },
          m(h, _) {
            P(h, e, _), i(e, x), i(x, o), i(e, r), i(e, l), i(l, s), i(s, a), i(a, u), i(s, E), D.m(s, null), i(l, d), p && p.m(l, null), i(e, F);
          },
          p(h, _) {
            _ & 64 && n !== (n = h[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && U(o, n), _ & 64 && a0(x, "positive", h[18].positiveDiseases.length > 0), _ & 64 && a0(x, "negative", h[18].positiveDiseases.length === 0), _ & 64 && c !== (c = h[18].date + "") && U(u, c), A !== (A = B(h)) && (D.d(1), D = A(h), D && (D.c(), D.m(s, null))), h[18].positiveDiseases.length > 0 ? p ? p.p(h, _) : (p = zt(h), p.c(), p.m(l, null)) : p && (p.d(1), p = null);
          },
          d(h) {
            h && y(e), D.d(), p && p.d();
          }
        };
      }
      function n9(t) {
        let e, x, n, o, r, l, s, a, c = t[2] ? "close" : "add", u, E, d, F, B, A, D, p, h, _;
        e = new K0({});
        function m(S, j) {
          if (S[4] === "done") return Ws;
          if (S[4] === "done_negative") return Js;
          if (S[4] === "done_no_encounters") return Qs;
        }
        let v = m(t), k = v && v(t), b = t[5] && Ot(t), g = t[2] && qt(t);
        function T(S, j) {
          return S[6].length === 0 ? Zs : Xs;
        }
        let I = T(t), M = I(t);
        return {
          c() {
            y0(e.$$.fragment), x = w(), n = C("main"), o = C("div"), r = C("h1"), r.textContent = "Test Results", l = w(), s = C("button"), a = C("span"), u = N(c), d = w(), k && k.c(), F = w(), b && b.c(), B = w(), g && g.c(), A = w(), D = C("section"), M.c(), f(r, "class", "svelte-8u23ha"), f(a, "class", "material-icons"), f(s, "class", "fab svelte-8u23ha"), f(s, "title", E = t[2] ? "Cancel" : "Record new result"), f(o, "class", "page-header svelte-8u23ha"), f(D, "class", "card list-card svelte-8u23ha"), f(n, "class", "svelte-8u23ha");
          },
          m(S, j) {
            k0(e, S, j), P(S, x, j), P(S, n, j), i(n, o), i(o, r), i(o, l), i(o, s), i(s, a), i(a, u), i(n, d), k && k.m(n, null), i(n, F), b && b.m(n, null), i(n, B), g && g.m(n, null), i(n, A), i(n, D), M.m(D, null), p = true, h || (_ = G(s, "click", t[10]), h = true);
          },
          p(S, [j]) {
            (!p || j & 4) && c !== (c = S[2] ? "close" : "add") && U(u, c), (!p || j & 4 && E !== (E = S[2] ? "Cancel" : "Record new result")) && f(s, "title", E), v !== (v = m(S)) && (k && k.d(1), k = v && v(S), k && (k.c(), k.m(n, F))), S[5] ? b ? b.p(S, j) : (b = Ot(S), b.c(), b.m(n, B)) : b && (b.d(1), b = null), S[2] ? g ? g.p(S, j) : (g = qt(S), g.c(), g.m(n, A)) : g && (g.d(1), g = null), I === (I = T(S)) && M ? M.p(S, j) : (M.d(1), M = I(S), M && (M.c(), M.m(D, null)));
          },
          i(S) {
            p || (F0(e.$$.fragment, S), p = true);
          },
          o(S) {
            D0(e.$$.fragment, S), p = false;
          },
          d(S) {
            S && (y(x), y(n)), b0(e, S), k && k.d(), b && b.d(), g && g.d(), M.d(), h = false, _();
          }
        };
      }
      const o9 = 23, Kt = 50, r9 = 100;
      function l9(t, e, x) {
        let n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), o = {}, r = false, l = false, s = null, a = null, c = [], u = null;
        T0(() => {
          if (!I0()) {
            B0("/");
            return;
          }
          x(6, c = Re());
        });
        async function E(v, k) {
          const b = R0(), g = Ee(), T = [
            ...b.encounters.map((s0) => J0(s0.rawToken, s0.theirContactId, s0.submitIndex)),
            ...(b.relationships || []).map((s0) => J0(s0.rawToken, s0.theirContactId, s0.submitIndex))
          ], I = Kt + Math.floor(Math.random() * (r9 - Kt + 1)), M = [
            ...T
          ];
          for (; M.length < I; ) M.push(we(32));
          for (let s0 = M.length - 1; s0 > 0; s0--) {
            const J = Math.floor(Math.random() * (s0 + 1));
            [M[s0], M[J]] = [
              M[J],
              M[s0]
            ];
          }
          const S = M.map((s0) => W0(s0)), j = Jn(g), L = v.replace(/-/g, ""), R = k.map((s0) => so[s0] ?? s0).join(""), q = new TextEncoder().encode("1" + L + R), H = ge(j, q), Z = W0(H), Q = new TextEncoder(), K = JSON.stringify(S), O = Q.encode(K).length + Q.encode(Z).length, W = new Uint8Array(O), e0 = Q.encode(K), z = Q.encode(Z);
          W.set(e0, 0), W.set(z, e0.length);
          const r0 = El(W);
          let c0 = o9, o0 = (/* @__PURE__ */ new Date()).toISOString();
          for (let s0 = 0; s0 < 2; s0++) {
            const { counter: J } = ul(o0, r0, c0), Y = {
              tokens: S,
              created_at: o0,
              submission_type: "self_reported",
              encrypted_payload: Z,
              pow_counter: J
            };
            try {
              await Hl(Y);
              break;
            } catch (x0) {
              if (s0 === 0 && x0.statusCode === 400) {
                let f0 = false;
                if (x0.powDifficulty && x0.powDifficulty > c0 && (c0 = x0.powDifficulty, f0 = true), x0.serverTime && (o0 = x0.serverTime, f0 = true), f0) continue;
              }
              throw x0;
            }
          }
          await $l();
        }
        async function d() {
          if (!l) {
            x(3, l = true), x(5, a = null), x(4, s = null);
            try {
              const v = O0.filter((b) => o[b]), k = await Zl(n, v);
              if (v.length > 0) {
                const b = R0();
                b.encounters.length > 0 || (b.relationships || []).length > 0 ? (x(4, s = "computing"), await new Promise((T) => setTimeout(T, 30)), await E(n, v), await cx(k), x(4, s = "done")) : (await cx(k), x(4, s = "done_no_encounters"));
              } else x(4, s = "done_negative");
              x(1, o = {}), x(0, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), x(6, c = Re()), x(2, r = false);
            } catch (v) {
              x(5, a = v.message), x(4, s = null);
            } finally {
              x(3, l = false);
            }
          }
        }
        async function F(v, k) {
          if (!l) {
            x(3, l = true), x(7, u = v), x(5, a = null);
            try {
              const b = R0();
              if (b.encounters.length === 0 && (b.relationships || []).length === 0) {
                x(5, a = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((g) => setTimeout(g, 30)), await E(k.date, k.positiveDiseases), await cx(v), x(6, c = Re());
            } catch (b) {
              x(5, a = "Notification failed: " + b.message);
            } finally {
              x(3, l = false), x(7, u = null);
            }
          }
        }
        const B = () => {
          x(2, r = !r), x(5, a = null), x(4, s = null);
        };
        function A() {
          n = this.value, x(0, n);
        }
        function D(v) {
          o[v] = this.checked, x(1, o);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          c,
          u,
          d,
          F,
          B,
          A,
          D,
          () => {
            x(2, r = false), x(4, s = null), x(5, a = null);
          },
          () => x(2, r = true),
          (v) => Ux[v] ?? v,
          (v, k) => F(v, k)
        ];
      }
      class s9 extends v0 {
        constructor(e) {
          super(), h0(this, e, l9, n9, m0, {});
        }
      }
      function Vt(t) {
        let e;
        return {
          c() {
            e = C("div"), e.innerHTML = `<span class="material-icons svelte-zjyqy2">check_circle</span>
      Password changed successfully.`, f(e, "class", "success-banner svelte-zjyqy2");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Yt(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[4]), f(e, "class", "error svelte-zjyqy2");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && U(x, n[4]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function a9(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d, F, B, A, D, p, h, _, m, v, k = t[3] ? "Changing password\u2026" : "Change password", b, g, T, I, M, S = t[5] && Vt(), j = t[4] && Yt(t);
        return {
          c() {
            e = C("main"), x = C("a"), x.innerHTML = `<span class="material-icons svelte-zjyqy2">arrow_back</span>
    Back`, n = w(), o = C("h1"), o.textContent = "Change password", r = w(), S && S.c(), l = w(), s = C("form"), a = C("label"), c = N(`Current password
      `), u = C("input"), E = w(), d = C("label"), F = N(`New password
      `), B = C("input"), A = w(), D = C("label"), p = N(`Confirm new password
      `), h = C("input"), _ = w(), j && j.c(), m = w(), v = C("button"), b = N(k), g = w(), T = C("p"), T.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, f(x, "href", "#/home"), f(x, "class", "back-link svelte-zjyqy2"), f(o, "class", "svelte-zjyqy2"), f(u, "type", "password"), u.required = true, f(u, "autocomplete", "current-password"), f(u, "class", "svelte-zjyqy2"), f(a, "class", "svelte-zjyqy2"), f(B, "type", "password"), B.required = true, f(B, "autocomplete", "new-password"), f(B, "minlength", "12"), f(B, "class", "svelte-zjyqy2"), f(d, "class", "svelte-zjyqy2"), f(h, "type", "password"), h.required = true, f(h, "autocomplete", "new-password"), f(h, "class", "svelte-zjyqy2"), f(D, "class", "svelte-zjyqy2"), f(v, "type", "submit"), v.disabled = t[3], f(v, "class", "svelte-zjyqy2"), f(s, "class", "svelte-zjyqy2"), f(T, "class", "privacy-note svelte-zjyqy2"), f(e, "class", "svelte-zjyqy2");
          },
          m(L, R) {
            P(L, e, R), i(e, x), i(e, n), i(e, o), i(e, r), S && S.m(e, null), i(e, l), i(e, s), i(s, a), i(a, c), i(a, u), t0(u, t[0]), i(s, E), i(s, d), i(d, F), i(d, B), t0(B, t[1]), i(s, A), i(s, D), i(D, p), i(D, h), t0(h, t[2]), i(s, _), j && j.m(s, null), i(s, m), i(s, v), i(v, b), i(e, g), i(e, T), I || (M = [
              G(u, "input", t[7]),
              G(B, "input", t[8]),
              G(h, "input", t[9]),
              G(s, "submit", z0(t[6]))
            ], I = true);
          },
          p(L, [R]) {
            L[5] ? S || (S = Vt(), S.c(), S.m(e, l)) : S && (S.d(1), S = null), R & 1 && u.value !== L[0] && t0(u, L[0]), R & 2 && B.value !== L[1] && t0(B, L[1]), R & 4 && h.value !== L[2] && t0(h, L[2]), L[4] ? j ? j.p(L, R) : (j = Yt(L), j.c(), j.m(s, m)) : j && (j.d(1), j = null), R & 8 && k !== (k = L[3] ? "Changing password\u2026" : "Change password") && U(b, k), R & 8 && (v.disabled = L[3]);
          },
          i: X,
          o: X,
          d(L) {
            L && y(e), S && S.d(), j && j.d(), I = false, i0(M);
          }
        };
      }
      function i9(t, e, x) {
        let n = "", o = "", r = "", l = false, s = null, a = false;
        T0(() => {
          I0() || B0("/");
        });
        async function c() {
          if (x(4, s = null), x(5, a = false), o !== r) {
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
          x(3, l = true);
          try {
            const F = hl(), { challenge: B, auth_salt: A, enc_salt: D } = await Rx(F), p = await U0(n, _0(D)), h = $0();
            if (!h || p.length !== h.length || !p.every((M, S) => M === h[S])) {
              x(4, s = "Current password is incorrect");
              return;
            }
            const _ = await U0(n, _0(A)), m = Qn(new TextEncoder().encode(B), _), v = W0(m), k = await U0(o, _0(A)), b = await U0(o, _0(D)), g = n0(Yn(k)), { blobHex: T, blobVersion: I } = rs(b);
            await Rl(v, g, T, I), Nx(b), ls(I + 1), x(5, a = true), x(0, n = ""), x(1, o = ""), x(2, r = "");
          } catch (F) {
            x(4, s = F.message);
          } finally {
            x(3, l = false);
          }
        }
        function u() {
          n = this.value, x(0, n);
        }
        function E() {
          o = this.value, x(1, o);
        }
        function d() {
          r = this.value, x(2, r);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          c,
          u,
          E,
          d
        ];
      }
      class c9 extends v0 {
        constructor(e) {
          super(), h0(this, e, i9, a9, m0, {});
        }
      }
      function E9(t) {
        let e, x, n, o, r, l, s, a, c, u = t[2] ? "Sending\u2026" : "Send verification link", E, d, F, B, A = t[0] && Qt(t), D = t[4] && Jt(t);
        return {
          c() {
            e = C("div"), A && A.c(), x = w(), n = C("form"), o = C("label"), r = N(`New email address
          `), l = C("input"), s = w(), D && D.c(), a = w(), c = C("button"), E = N(u), f(l, "type", "email"), l.required = true, f(l, "autocomplete", "email"), f(l, "placeholder", "you@example.com"), f(l, "class", "svelte-17w6eyu"), f(o, "class", "svelte-17w6eyu"), f(c, "type", "submit"), c.disabled = d = t[2] || !t[1], f(c, "class", "svelte-17w6eyu"), f(n, "class", "svelte-17w6eyu"), f(e, "class", "card svelte-17w6eyu");
          },
          m(p, h) {
            P(p, e, h), A && A.m(e, null), i(e, x), i(e, n), i(n, o), i(o, r), i(o, l), t0(l, t[1]), i(n, s), D && D.m(n, null), i(n, a), i(n, c), i(c, E), F || (B = [
              G(l, "input", t[7]),
              G(n, "submit", z0(t[6]))
            ], F = true);
          },
          p(p, h) {
            p[0] ? A ? A.p(p, h) : (A = Qt(p), A.c(), A.m(e, x)) : A && (A.d(1), A = null), h & 2 && l.value !== p[1] && t0(l, p[1]), p[4] ? D ? D.p(p, h) : (D = Jt(p), D.c(), D.m(n, a)) : D && (D.d(1), D = null), h & 4 && u !== (u = p[2] ? "Sending\u2026" : "Send verification link") && U(E, u), h & 6 && d !== (d = p[2] || !p[1]) && (c.disabled = d);
          },
          d(p) {
            p && y(e), A && A.d(), D && D.d(), F = false, i0(B);
          }
        };
      }
      function u9(t) {
        let e, x, n, o, r, l, s, a, c, u;
        return {
          c() {
            e = C("div"), x = C("div"), x.innerHTML = '<span class="material-icons success-icon svelte-17w6eyu">mark_email_read</span> <h2 class="svelte-17w6eyu">Check your inbox</h2>', n = w(), o = C("p"), r = N("We've sent a verification link to "), l = C("strong"), s = N(t[5]), a = N(`.
        Click the link to confirm the change. Your email won't update until you verify it.`), c = w(), u = C("a"), u.textContent = "Done", f(x, "class", "success-row svelte-17w6eyu"), f(o, "class", "hint svelte-17w6eyu"), f(u, "href", "#/settings"), f(u, "class", "btn-primary svelte-17w6eyu"), f(e, "class", "card svelte-17w6eyu");
          },
          m(E, d) {
            P(E, e, d), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(l, s), i(o, a), i(e, c), i(e, u);
          },
          p(E, d) {
            d & 32 && U(s, E[5]);
          },
          d(E) {
            E && y(e);
          }
        };
      }
      function f9(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Loading\u2026", f(e, "class", "muted svelte-17w6eyu");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function Qt(t) {
        let e, x, n, o;
        return {
          c() {
            e = C("p"), x = N("Current email: "), n = C("strong"), o = N(t[0]), f(e, "class", "current-email svelte-17w6eyu");
          },
          m(r, l) {
            P(r, e, l), i(e, x), i(e, n), i(n, o);
          },
          p(r, l) {
            l & 1 && U(o, r[0]);
          },
          d(r) {
            r && y(e);
          }
        };
      }
      function Jt(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[4]), f(e, "class", "error svelte-17w6eyu");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && U(x, n[4]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function d9(t) {
        let e, x, n, o, r;
        function l(c, u) {
          return c[3] ? f9 : c[5] ? u9 : E9;
        }
        let s = l(t), a = s(t);
        return {
          c() {
            e = C("main"), x = C("a"), x.innerHTML = `<span class="material-icons svelte-17w6eyu">arrow_back</span>
    Back to settings`, n = w(), o = C("h1"), o.textContent = "Change email", r = w(), a.c(), f(x, "href", "#/settings"), f(x, "class", "back-link svelte-17w6eyu"), f(o, "class", "svelte-17w6eyu"), f(e, "class", "svelte-17w6eyu");
          },
          m(c, u) {
            P(c, e, u), i(e, x), i(e, n), i(e, o), i(e, r), a.m(e, null);
          },
          p(c, [u]) {
            s === (s = l(c)) && a ? a.p(c, u) : (a.d(1), a = s(c), a && (a.c(), a.m(e, null)));
          },
          i: X,
          o: X,
          d(c) {
            c && y(e), a.d();
          }
        };
      }
      function B9(t, e, x) {
        let n = "", o = "", r = false, l = true, s = null, a = null;
        T0(async () => {
          if (!I0()) {
            B0("/");
            return;
          }
          try {
            const E = await jx();
            x(0, n = E.email);
          } catch (E) {
            x(4, s = E.message);
          } finally {
            x(3, l = false);
          }
        });
        async function c() {
          x(4, s = null), x(2, r = true);
          try {
            await kl(o), x(5, a = o);
          } catch (E) {
            x(4, s = E.message);
          } finally {
            x(2, r = false);
          }
        }
        function u() {
          o = this.value, x(1, o);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          c,
          u
        ];
      }
      class C9 extends v0 {
        constructor(e) {
          super(), h0(this, e, B9, d9, m0, {});
        }
      }
      function A9(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d;
        return {
          c() {
            e = C("div"), e.innerHTML = '<span class="material-icons svelte-19fgqqu">error_outline</span>', x = w(), n = C("h1"), n.textContent = "Verification failed", o = w(), r = C("p"), l = N(t[1]), s = w(), a = C("p"), a.textContent = "The link may have expired or already been used. You can request a new one from your account settings.", c = w(), u = C("button"), u.textContent = "Go to settings", f(e, "class", "icon-wrap error svelte-19fgqqu"), f(n, "class", "svelte-19fgqqu"), f(r, "class", "message error svelte-19fgqqu"), f(a, "class", "hint svelte-19fgqqu"), f(u, "class", "btn-primary svelte-19fgqqu");
          },
          m(F, B) {
            P(F, e, B), P(F, x, B), P(F, n, B), P(F, o, B), P(F, r, B), i(r, l), P(F, s, B), P(F, a, B), P(F, c, B), P(F, u, B), E || (d = G(u, "click", t[4]), E = true);
          },
          p(F, B) {
            B & 2 && U(l, F[1]);
          },
          d(F) {
            F && (y(e), y(x), y(n), y(o), y(r), y(s), y(a), y(c), y(u)), E = false, d();
          }
        };
      }
      function F9(t) {
        let e, x, n, o, r, l, s, a, c;
        return {
          c() {
            e = C("div"), e.innerHTML = '<span class="material-icons svelte-19fgqqu">check_circle</span>', x = w(), n = C("h1"), n.textContent = "Email verified", o = w(), r = C("p"), r.textContent = "Your email address has been verified successfully.", l = w(), s = C("button"), s.textContent = "Go to settings", f(e, "class", "icon-wrap success svelte-19fgqqu"), f(n, "class", "svelte-19fgqqu"), f(r, "class", "message svelte-19fgqqu"), f(s, "class", "btn-primary svelte-19fgqqu");
          },
          m(u, E) {
            P(u, e, E), P(u, x, E), P(u, n, E), P(u, o, E), P(u, r, E), P(u, l, E), P(u, s, E), a || (c = G(s, "click", t[3]), a = true);
          },
          p: X,
          d(u) {
            u && (y(e), y(x), y(n), y(o), y(r), y(l), y(s)), a = false, c();
          }
        };
      }
      function D9(t) {
        let e, x, n;
        return {
          c() {
            e = C("div"), e.innerHTML = '<span class="material-icons spinning svelte-19fgqqu">sync</span>', x = w(), n = C("p"), n.textContent = "Verifying your email\u2026", f(e, "class", "icon-wrap svelte-19fgqqu"), f(n, "class", "message svelte-19fgqqu");
          },
          m(o, r) {
            P(o, e, r), P(o, x, r), P(o, n, r);
          },
          p: X,
          d(o) {
            o && (y(e), y(x), y(n));
          }
        };
      }
      function p9(t) {
        let e;
        function x(r, l) {
          return r[0] === "verifying" ? D9 : r[0] === "success" ? F9 : A9;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            e = C("main"), o.c(), f(e, "class", "svelte-19fgqqu");
          },
          m(r, l) {
            P(r, e, l), o.m(e, null);
          },
          p(r, [l]) {
            n === (n = x(r)) && o ? o.p(r, l) : (o.d(1), o = n(r), o && (o.c(), o.m(e, null)));
          },
          i: X,
          o: X,
          d(r) {
            r && y(e), o.d();
          }
        };
      }
      function m9(t, e, x) {
        let { params: n = {} } = e, o = "verifying", r = null;
        T0(async () => {
          const a = n.token;
          if (!a) {
            x(1, r = "No verification token found in link."), x(0, o = "error");
            return;
          }
          try {
            await wl(a), x(0, o = "success");
          } catch (c) {
            x(1, r = c.message), x(0, o = "error");
          }
        });
        const l = () => B0("/settings"), s = () => B0("/settings");
        return t.$$set = (a) => {
          "params" in a && x(2, n = a.params);
        }, [
          o,
          r,
          n,
          l,
          s
        ];
      }
      class h9 extends v0 {
        constructor(e) {
          super(), h0(this, e, m9, p9, m0, {
            params: 2
          });
        }
      }
      function Wt(t, e, x) {
        const n = t.slice();
        n[8] = e[x], n[11] = x;
        const o = n[0].length - 1 - n[11];
        return n[9] = o, n;
      }
      function v9(t) {
        let e;
        return {
          c() {
            e = C("div"), e.innerHTML = '<span class="material-icons svelte-m3rki9">check_circle_outline</span> <span>No new notifications.</span>', f(e, "class", "status-card ok svelte-m3rki9");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function _9(t) {
        let e, x, n, o, r, l, s = t[3] !== 1 ? "s" : "", a, c;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "notifications_active", n = w(), o = C("span"), r = N(t[3]), l = N(" new notification"), a = N(s), c = N(" found."), f(x, "class", "material-icons svelte-m3rki9"), f(e, "class", "status-card found svelte-m3rki9");
          },
          m(u, E) {
            P(u, e, E), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, a), i(o, c);
          },
          p(u, E) {
            E & 8 && U(r, u[3]), E & 8 && s !== (s = u[3] !== 1 ? "s" : "") && U(a, s);
          },
          d(u) {
            u && y(e);
          }
        };
      }
      function k9(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "error_outline", n = w(), o = C("span"), r = N("Could not check for alerts: "), l = N(t[2]), f(x, "class", "material-icons svelte-m3rki9"), f(e, "class", "status-card error svelte-m3rki9");
          },
          m(s, a) {
            P(s, e, a), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l);
          },
          p(s, a) {
            a & 4 && U(l, s[2]);
          },
          d(s) {
            s && y(e);
          }
        };
      }
      function b9(t) {
        let e;
        return {
          c() {
            e = C("div"), e.innerHTML = '<span class="material-icons spin svelte-m3rki9">sync</span> <span>Checking for notifications\u2026</span>', f(e, "class", "status-card svelte-m3rki9");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function w9(t) {
        let e, x = A0([
          ...t[0]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = $t(Wt(t, x, o));
        return {
          c() {
            e = C("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            f(e, "class", "svelte-m3rki9");
          },
          m(o, r) {
            P(o, e, r);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, r) {
            if (r & 17) {
              x = A0([
                ...o[0]
              ].reverse());
              let l;
              for (l = 0; l < x.length; l += 1) {
                const s = Wt(o, x, l);
                n[l] ? n[l].p(s, r) : (n[l] = $t(s), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && y(e), q0(n, o);
          }
        };
      }
      function g9(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "No notifications received yet.", f(e, "class", "muted svelte-m3rki9");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function y9(t) {
        let e;
        return {
          c() {
            e = C("span"), e.textContent = "self-reported", f(e, "class", "badge self svelte-m3rki9");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function P9(t) {
        let e;
        return {
          c() {
            e = C("span"), e.textContent = "lab verified", f(e, "class", "badge verified svelte-m3rki9");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Xt(t) {
        let e, x = t[8].diseases.map(t[5]).join(", ") + "", n;
        return {
          c() {
            e = C("div"), n = N(x), f(e, "class", "alert-diseases svelte-m3rki9");
          },
          m(o, r) {
            P(o, e, r), i(e, n);
          },
          p(o, r) {
            r & 1 && x !== (x = o[8].diseases.map(o[5]).join(", ") + "") && U(n, x);
          },
          d(o) {
            o && y(e);
          }
        };
      }
      function Zt(t) {
        let e, x, n;
        function o() {
          return t[6](t[9]);
        }
        return {
          c() {
            e = C("button"), e.textContent = "Mark viewed", f(e, "class", "btn-text svelte-m3rki9");
          },
          m(r, l) {
            P(r, e, l), x || (n = G(e, "click", o), x = true);
          },
          p(r, l) {
            t = r;
          },
          d(r) {
            r && y(e), x = false, n();
          }
        };
      }
      function $t(t) {
        let e, x, n, o, r = t[8].labVerified ? "verified" : "report", l, s, a, c, u, E, d, F, B, A = en(t[8].testDate) + "", D, p, h, _;
        function m(T, I) {
          return T[8].labVerified ? P9 : y9;
        }
        let v = m(t), k = v(t), b = t[8].diseases.length > 0 && Xt(t), g = !t[8].viewed && Zt(t);
        return {
          c() {
            e = C("li"), x = C("div"), n = C("div"), o = C("span"), l = N(r), s = w(), a = C("div"), c = C("div"), u = N(`Exposure notification
                    `), k.c(), E = w(), d = C("div"), F = N("Partner's test date: "), B = C("strong"), D = N(A), p = w(), b && b.c(), h = w(), g && g.c(), _ = w(), f(o, "class", "material-icons alert-icon svelte-m3rki9"), f(c, "class", "alert-title svelte-m3rki9"), f(d, "class", "alert-dates svelte-m3rki9"), f(n, "class", "alert-meta svelte-m3rki9"), f(x, "class", "alert-body svelte-m3rki9"), f(e, "class", "svelte-m3rki9"), a0(e, "unviewed", !t[8].viewed);
          },
          m(T, I) {
            P(T, e, I), i(e, x), i(x, n), i(n, o), i(o, l), i(n, s), i(n, a), i(a, c), i(c, u), k.m(c, null), i(a, E), i(a, d), i(d, F), i(d, B), i(B, D), i(a, p), b && b.m(a, null), i(x, h), g && g.m(x, null), i(e, _);
          },
          p(T, I) {
            I & 1 && r !== (r = T[8].labVerified ? "verified" : "report") && U(l, r), v !== (v = m(T)) && (k.d(1), k = v(T), k && (k.c(), k.m(c, null))), I & 1 && A !== (A = en(T[8].testDate) + "") && U(D, A), T[8].diseases.length > 0 ? b ? b.p(T, I) : (b = Xt(T), b.c(), b.m(a, null)) : b && (b.d(1), b = null), T[8].viewed ? g && (g.d(1), g = null) : g ? g.p(T, I) : (g = Zt(T), g.c(), g.m(x, null)), I & 1 && a0(e, "unviewed", !T[8].viewed);
          },
          d(T) {
            T && y(e), k.d(), b && b.d(), g && g.d();
          }
        };
      }
      function T9(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d;
        e = new K0({});
        function F(_, m) {
          return _[1] ? b9 : _[2] ? k9 : _[3] > 0 ? _9 : v9;
        }
        let B = F(t), A = B(t);
        function D(_, m) {
          return _[0].length === 0 ? g9 : w9;
        }
        let p = D(t), h = p(t);
        return {
          c() {
            y0(e.$$.fragment), x = w(), n = C("main"), o = C("div"), o.innerHTML = '<h1 class="svelte-m3rki9">Alerts</h1>', r = w(), A.c(), l = w(), s = C("section"), a = C("h2"), a.textContent = "Notification history", c = w(), h.c(), u = w(), E = C("p"), E.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, f(o, "class", "page-header svelte-m3rki9"), f(a, "class", "svelte-m3rki9"), f(s, "class", "card svelte-m3rki9"), f(E, "class", "privacy-note svelte-m3rki9"), f(n, "class", "svelte-m3rki9");
          },
          m(_, m) {
            k0(e, _, m), P(_, x, m), P(_, n, m), i(n, o), i(n, r), A.m(n, null), i(n, l), i(n, s), i(s, a), i(s, c), h.m(s, null), i(n, u), i(n, E), d = true;
          },
          p(_, [m]) {
            B === (B = F(_)) && A ? A.p(_, m) : (A.d(1), A = B(_), A && (A.c(), A.m(n, l))), p === (p = D(_)) && h ? h.p(_, m) : (h.d(1), h = p(_), h && (h.c(), h.m(s, null)));
          },
          i(_) {
            d || (F0(e.$$.fragment, _), d = true);
          },
          o(_) {
            D0(e.$$.fragment, _), d = false;
          },
          d(_) {
            _ && (y(x), y(n)), b0(e, _), A.d(), h.d();
          }
        };
      }
      function en(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function S9(t, e, x) {
        let n = [], o = true, r = null, l = 0;
        T0(async () => {
          if (!I0()) {
            cs("/alerts"), B0("/");
            return;
          }
          await s(), x(0, n = at());
        });
        async function s() {
          x(1, o = true), x(2, r = null), x(3, l = 0);
          try {
            const E = R0(), d = Ee();
            if (!E) return;
            const B = Re().filter((m) => m.positiveDiseases.length === 0).map((m) => m.date).sort().pop() ?? null, A = /* @__PURE__ */ new Map(), D = [];
            for (const m of E.encounters) {
              const v = J0(m.rawToken, d, m.queryIndex), k = W0(v);
              A.set(k, {
                rawTokenHex: n0(m.rawToken),
                alertDate: m.date
              }), D.push(k);
            }
            for (const m of E.relationships || []) {
              if (!ss(m, B)) continue;
              const v = J0(m.rawToken, d, m.queryIndex), k = W0(v);
              A.set(k, {
                rawTokenHex: n0(m.rawToken),
                alertDate: m.createdAt
              }), D.push(k);
            }
            if (D.length === 0) return;
            const p = Math.max(50, D.length * 2), h = [
              ...D
            ];
            for (; h.length < p; ) h.push(W0(we(32)));
            for (let m = h.length - 1; m > 0; m--) {
              const v = Math.floor(Math.random() * (m + 1));
              [h[m], h[v]] = [
                h[v],
                h[m]
              ];
            }
            const { matches: _ } = await Ol(h);
            if (!_ || _.length === 0) return;
            for (const m of _) {
              const v = A.get(m.token);
              if (!v) continue;
              const b = [
                ...R0().encounters || [],
                ...R0().relationships || []
              ].find((Q) => n0(Q.rawToken) === v.rawTokenHex);
              if (!b) continue;
              const g = Jn(b.theirContactId);
              let T;
              try {
                T = xx(g, Wn(m.encrypted_payload));
              } catch {
                continue;
              }
              const I = new TextDecoder().decode(T), M = I.slice(1, 9), S = `${M.slice(0, 4)}-${M.slice(4, 6)}-${M.slice(6, 8)}`, j = I.length > 9 ? I.slice(9).split(",") : [], L = Object.fromEntries(Object.entries(so).map(([Q, K]) => [
                K,
                Q
              ])), R = j.map((Q) => L[Q]).filter(Boolean), q = n0(J0(b.rawToken, d, b.queryIndex));
              await es(v.rawTokenHex, S, R, m.verified), x(3, l++, l);
              const H = [
                ...R0().encounters || [],
                ...R0().relationships || []
              ].find((Q) => n0(Q.rawToken) === v.rawTokenHex), Z = n0(J0(b.rawToken, d, H?.queryIndex ?? b.queryIndex + 1));
              try {
                await eo(Z, v.alertDate);
              } catch (Q) {
                console.warn("alerts: could not register next query token:", Q.message);
              }
              try {
                await ql(q);
              } catch (Q) {
                console.warn("alerts: could not delete old query token:", Q.message);
              }
            }
          } catch (E) {
            x(2, r = E.message);
          } finally {
            x(1, o = false);
          }
        }
        async function a(E) {
          await xs(E), x(0, n = at());
        }
        return [
          n,
          o,
          r,
          l,
          a,
          (E) => Ux[E] ?? E,
          (E) => a(E)
        ];
      }
      class M9 extends v0 {
        constructor(e) {
          super(), h0(this, e, S9, T9, m0, {});
        }
      }
      var I9 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function L9(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
      }
      var xe = {}, N9 = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
      }, Eo = {}, P0 = {};
      let Vx;
      const j9 = [
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
      P0.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17;
      };
      P0.getSymbolTotalCodewords = function(e) {
        return j9[e];
      };
      P0.getBCHDigit = function(t) {
        let e = 0;
        for (; t !== 0; ) e++, t >>>= 1;
        return e;
      };
      P0.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        Vx = e;
      };
      P0.isKanjiModeEnabled = function() {
        return typeof Vx < "u";
      };
      P0.toSJIS = function(e) {
        return Vx(e);
      };
      var nx = {};
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
      })(nx);
      function uo() {
        this.buffer = [], this.length = 0;
      }
      uo.prototype = {
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
      var R9 = uo;
      function Pe(t) {
        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
      }
      Pe.prototype.set = function(t, e, x, n) {
        const o = t * this.size + e;
        this.data[o] = x, n && (this.reservedBit[o] = true);
      };
      Pe.prototype.get = function(t, e) {
        return this.data[t * this.size + e];
      };
      Pe.prototype.xor = function(t, e, x) {
        this.data[t * this.size + e] ^= x;
      };
      Pe.prototype.isReserved = function(t, e) {
        return this.reservedBit[t * this.size + e];
      };
      var O9 = Pe, fo = {};
      (function(t) {
        const e = P0.getSymbolSize;
        t.getRowColCoords = function(n) {
          if (n === 1) return [];
          const o = Math.floor(n / 7) + 2, r = e(n), l = r === 145 ? 26 : Math.ceil((r - 13) / (2 * o - 2)) * 2, s = [
            r - 7
          ];
          for (let a = 1; a < o - 1; a++) s[a] = s[a - 1] - l;
          return s.push(6), s.reverse();
        }, t.getPositions = function(n) {
          const o = [], r = t.getRowColCoords(n), l = r.length;
          for (let s = 0; s < l; s++) for (let a = 0; a < l; a++) s === 0 && a === 0 || s === 0 && a === l - 1 || s === l - 1 && a === 0 || o.push([
            r[s],
            r[a]
          ]);
          return o;
        };
      })(fo);
      var Bo = {};
      const q9 = P0.getSymbolSize, xn = 7;
      Bo.getPositions = function(e) {
        const x = q9(e);
        return [
          [
            0,
            0
          ],
          [
            x - xn,
            0
          ],
          [
            0,
            x - xn
          ]
        ];
      };
      var Co = {};
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
          const r = o.size;
          let l = 0, s = 0, a = 0, c = null, u = null;
          for (let E = 0; E < r; E++) {
            s = a = 0, c = u = null;
            for (let d = 0; d < r; d++) {
              let F = o.get(E, d);
              F === c ? s++ : (s >= 5 && (l += e.N1 + (s - 5)), c = F, s = 1), F = o.get(d, E), F === u ? a++ : (a >= 5 && (l += e.N1 + (a - 5)), u = F, a = 1);
            }
            s >= 5 && (l += e.N1 + (s - 5)), a >= 5 && (l += e.N1 + (a - 5));
          }
          return l;
        }, t.getPenaltyN2 = function(o) {
          const r = o.size;
          let l = 0;
          for (let s = 0; s < r - 1; s++) for (let a = 0; a < r - 1; a++) {
            const c = o.get(s, a) + o.get(s, a + 1) + o.get(s + 1, a) + o.get(s + 1, a + 1);
            (c === 4 || c === 0) && l++;
          }
          return l * e.N2;
        }, t.getPenaltyN3 = function(o) {
          const r = o.size;
          let l = 0, s = 0, a = 0;
          for (let c = 0; c < r; c++) {
            s = a = 0;
            for (let u = 0; u < r; u++) s = s << 1 & 2047 | o.get(c, u), u >= 10 && (s === 1488 || s === 93) && l++, a = a << 1 & 2047 | o.get(u, c), u >= 10 && (a === 1488 || a === 93) && l++;
          }
          return l * e.N3;
        }, t.getPenaltyN4 = function(o) {
          let r = 0;
          const l = o.data.length;
          for (let a = 0; a < l; a++) r += o.data[a];
          return Math.abs(Math.ceil(r * 100 / l / 5) - 10) * e.N4;
        };
        function x(n, o, r) {
          switch (n) {
            case t.Patterns.PATTERN000:
              return (o + r) % 2 === 0;
            case t.Patterns.PATTERN001:
              return o % 2 === 0;
            case t.Patterns.PATTERN010:
              return r % 3 === 0;
            case t.Patterns.PATTERN011:
              return (o + r) % 3 === 0;
            case t.Patterns.PATTERN100:
              return (Math.floor(o / 2) + Math.floor(r / 3)) % 2 === 0;
            case t.Patterns.PATTERN101:
              return o * r % 2 + o * r % 3 === 0;
            case t.Patterns.PATTERN110:
              return (o * r % 2 + o * r % 3) % 2 === 0;
            case t.Patterns.PATTERN111:
              return (o * r % 3 + (o + r) % 2) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + n);
          }
        }
        t.applyMask = function(o, r) {
          const l = r.size;
          for (let s = 0; s < l; s++) for (let a = 0; a < l; a++) r.isReserved(a, s) || r.xor(a, s, x(o, a, s));
        }, t.getBestMask = function(o, r) {
          const l = Object.keys(t.Patterns).length;
          let s = 0, a = 1 / 0;
          for (let c = 0; c < l; c++) {
            r(c), t.applyMask(c, o);
            const u = t.getPenaltyN1(o) + t.getPenaltyN2(o) + t.getPenaltyN3(o) + t.getPenaltyN4(o);
            t.applyMask(c, o), u < a && (a = u, s = c);
          }
          return s;
        };
      })(Co);
      var ox = {};
      const G0 = nx, Ie = [
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
      ], Le = [
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
      ox.getBlocksCount = function(e, x) {
        switch (x) {
          case G0.L:
            return Ie[(e - 1) * 4 + 0];
          case G0.M:
            return Ie[(e - 1) * 4 + 1];
          case G0.Q:
            return Ie[(e - 1) * 4 + 2];
          case G0.H:
            return Ie[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      ox.getTotalCodewordsCount = function(e, x) {
        switch (x) {
          case G0.L:
            return Le[(e - 1) * 4 + 0];
          case G0.M:
            return Le[(e - 1) * 4 + 1];
          case G0.Q:
            return Le[(e - 1) * 4 + 2];
          case G0.H:
            return Le[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      var Ao = {}, rx = {};
      const pe = new Uint8Array(512), Qe = new Uint8Array(256);
      (function() {
        let e = 1;
        for (let x = 0; x < 255; x++) pe[x] = e, Qe[e] = x, e <<= 1, e & 256 && (e ^= 285);
        for (let x = 255; x < 512; x++) pe[x] = pe[x - 255];
      })();
      rx.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return Qe[e];
      };
      rx.exp = function(e) {
        return pe[e];
      };
      rx.mul = function(e, x) {
        return e === 0 || x === 0 ? 0 : pe[Qe[e] + Qe[x]];
      };
      (function(t) {
        const e = rx;
        t.mul = function(n, o) {
          const r = new Uint8Array(n.length + o.length - 1);
          for (let l = 0; l < n.length; l++) for (let s = 0; s < o.length; s++) r[l + s] ^= e.mul(n[l], o[s]);
          return r;
        }, t.mod = function(n, o) {
          let r = new Uint8Array(n);
          for (; r.length - o.length >= 0; ) {
            const l = r[0];
            for (let a = 0; a < o.length; a++) r[a] ^= e.mul(o[a], l);
            let s = 0;
            for (; s < r.length && r[s] === 0; ) s++;
            r = r.slice(s);
          }
          return r;
        }, t.generateECPolynomial = function(n) {
          let o = new Uint8Array([
            1
          ]);
          for (let r = 0; r < n; r++) o = t.mul(o, new Uint8Array([
            1,
            e.exp(r)
          ]));
          return o;
        };
      })(Ao);
      const Fo = Ao;
      function Yx(t) {
        this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
      }
      Yx.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = Fo.generateECPolynomial(this.degree);
      };
      Yx.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const x = new Uint8Array(e.length + this.degree);
        x.set(e);
        const n = Fo.mod(x, this.genPoly), o = this.degree - n.length;
        if (o > 0) {
          const r = new Uint8Array(this.degree);
          return r.set(n, o), r;
        }
        return n;
      };
      var H9 = Yx, Do = {}, V0 = {}, Qx = {};
      Qx.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
      var H0 = {};
      const po = "[0-9]+", U9 = "[A-Z $%*+\\-./:]+";
      let ve = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      ve = ve.replace(/u/g, "\\u");
      const z9 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + ve + `)(?:.|[\r
]))+`;
      H0.KANJI = new RegExp(ve, "g");
      H0.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      H0.BYTE = new RegExp(z9, "g");
      H0.NUMERIC = new RegExp(po, "g");
      H0.ALPHANUMERIC = new RegExp(U9, "g");
      const G9 = new RegExp("^" + ve + "$"), K9 = new RegExp("^" + po + "$"), V9 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      H0.testKanji = function(e) {
        return G9.test(e);
      };
      H0.testNumeric = function(e) {
        return K9.test(e);
      };
      H0.testAlphanumeric = function(e) {
        return V9.test(e);
      };
      (function(t) {
        const e = Qx, x = H0;
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
        }, t.getCharCountIndicator = function(r, l) {
          if (!r.ccBits) throw new Error("Invalid mode: " + r);
          if (!e.isValid(l)) throw new Error("Invalid version: " + l);
          return l >= 1 && l < 10 ? r.ccBits[0] : l < 27 ? r.ccBits[1] : r.ccBits[2];
        }, t.getBestModeForData = function(r) {
          return x.testNumeric(r) ? t.NUMERIC : x.testAlphanumeric(r) ? t.ALPHANUMERIC : x.testKanji(r) ? t.KANJI : t.BYTE;
        }, t.toString = function(r) {
          if (r && r.id) return r.id;
          throw new Error("Invalid mode");
        }, t.isValid = function(r) {
          return r && r.bit && r.ccBits;
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
        t.from = function(r, l) {
          if (t.isValid(r)) return r;
          try {
            return n(r);
          } catch {
            return l;
          }
        };
      })(V0);
      (function(t) {
        const e = P0, x = ox, n = nx, o = V0, r = Qx, l = 7973, s = e.getBCHDigit(l);
        function a(d, F, B) {
          for (let A = 1; A <= 40; A++) if (F <= t.getCapacity(A, B, d)) return A;
        }
        function c(d, F) {
          return o.getCharCountIndicator(d, F) + 4;
        }
        function u(d, F) {
          let B = 0;
          return d.forEach(function(A) {
            const D = c(A.mode, F);
            B += D + A.getBitsLength();
          }), B;
        }
        function E(d, F) {
          for (let B = 1; B <= 40; B++) if (u(d, B) <= t.getCapacity(B, F, o.MIXED)) return B;
        }
        t.from = function(F, B) {
          return r.isValid(F) ? parseInt(F, 10) : B;
        }, t.getCapacity = function(F, B, A) {
          if (!r.isValid(F)) throw new Error("Invalid QR Code version");
          typeof A > "u" && (A = o.BYTE);
          const D = e.getSymbolTotalCodewords(F), p = x.getTotalCodewordsCount(F, B), h = (D - p) * 8;
          if (A === o.MIXED) return h;
          const _ = h - c(A, F);
          switch (A) {
            case o.NUMERIC:
              return Math.floor(_ / 10 * 3);
            case o.ALPHANUMERIC:
              return Math.floor(_ / 11 * 2);
            case o.KANJI:
              return Math.floor(_ / 13);
            case o.BYTE:
            default:
              return Math.floor(_ / 8);
          }
        }, t.getBestVersionForData = function(F, B) {
          let A;
          const D = n.from(B, n.M);
          if (Array.isArray(F)) {
            if (F.length > 1) return E(F, D);
            if (F.length === 0) return 1;
            A = F[0];
          } else A = F;
          return a(A.mode, A.getLength(), D);
        }, t.getEncodedBits = function(F) {
          if (!r.isValid(F) || F < 7) throw new Error("Invalid QR Code version");
          let B = F << 12;
          for (; e.getBCHDigit(B) - s >= 0; ) B ^= l << e.getBCHDigit(B) - s;
          return F << 12 | B;
        };
      })(Do);
      var mo = {};
      const bx = P0, ho = 1335, Y9 = 21522, tn = bx.getBCHDigit(ho);
      mo.getEncodedBits = function(e, x) {
        const n = e.bit << 3 | x;
        let o = n << 10;
        for (; bx.getBCHDigit(o) - tn >= 0; ) o ^= ho << bx.getBCHDigit(o) - tn;
        return (n << 10 | o) ^ Y9;
      };
      var vo = {};
      const Q9 = V0;
      function ue(t) {
        this.mode = Q9.NUMERIC, this.data = t.toString();
      }
      ue.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
      };
      ue.prototype.getLength = function() {
        return this.data.length;
      };
      ue.prototype.getBitsLength = function() {
        return ue.getBitsLength(this.data.length);
      };
      ue.prototype.write = function(e) {
        let x, n, o;
        for (x = 0; x + 3 <= this.data.length; x += 3) n = this.data.substr(x, 3), o = parseInt(n, 10), e.put(o, 10);
        const r = this.data.length - x;
        r > 0 && (n = this.data.substr(x), o = parseInt(n, 10), e.put(o, r * 3 + 1));
      };
      var J9 = ue;
      const W9 = V0, Ex = [
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
      function fe(t) {
        this.mode = W9.ALPHANUMERIC, this.data = t;
      }
      fe.getBitsLength = function(e) {
        return 11 * Math.floor(e / 2) + 6 * (e % 2);
      };
      fe.prototype.getLength = function() {
        return this.data.length;
      };
      fe.prototype.getBitsLength = function() {
        return fe.getBitsLength(this.data.length);
      };
      fe.prototype.write = function(e) {
        let x;
        for (x = 0; x + 2 <= this.data.length; x += 2) {
          let n = Ex.indexOf(this.data[x]) * 45;
          n += Ex.indexOf(this.data[x + 1]), e.put(n, 11);
        }
        this.data.length % 2 && e.put(Ex.indexOf(this.data[x]), 6);
      };
      var X9 = fe;
      const Z9 = V0;
      function de(t) {
        this.mode = Z9.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
      }
      de.getBitsLength = function(e) {
        return e * 8;
      };
      de.prototype.getLength = function() {
        return this.data.length;
      };
      de.prototype.getBitsLength = function() {
        return de.getBitsLength(this.data.length);
      };
      de.prototype.write = function(t) {
        for (let e = 0, x = this.data.length; e < x; e++) t.put(this.data[e], 8);
      };
      var $9 = de;
      const ea = V0, xa = P0;
      function Be(t) {
        this.mode = ea.KANJI, this.data = t;
      }
      Be.getBitsLength = function(e) {
        return e * 13;
      };
      Be.prototype.getLength = function() {
        return this.data.length;
      };
      Be.prototype.getBitsLength = function() {
        return Be.getBitsLength(this.data.length);
      };
      Be.prototype.write = function(t) {
        let e;
        for (e = 0; e < this.data.length; e++) {
          let x = xa.toSJIS(this.data[e]);
          if (x >= 33088 && x <= 40956) x -= 33088;
          else if (x >= 57408 && x <= 60351) x -= 49472;
          else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
          x = (x >>> 8 & 255) * 192 + (x & 255), t.put(x, 13);
        }
      };
      var ta = Be, _o = {
        exports: {}
      };
      (function(t) {
        var e = {
          single_source_shortest_paths: function(x, n, o) {
            var r = {}, l = {};
            l[n] = 0;
            var s = e.PriorityQueue.make();
            s.push(n, 0);
            for (var a, c, u, E, d, F, B, A, D; !s.empty(); ) {
              a = s.pop(), c = a.value, E = a.cost, d = x[c] || {};
              for (u in d) d.hasOwnProperty(u) && (F = d[u], B = E + F, A = l[u], D = typeof l[u] > "u", (D || A > B) && (l[u] = B, s.push(u, B), r[u] = c));
            }
            if (typeof o < "u" && typeof l[o] > "u") {
              var p = [
                "Could not find a path from ",
                n,
                " to ",
                o,
                "."
              ].join("");
              throw new Error(p);
            }
            return r;
          },
          extract_shortest_path_from_predecessor_list: function(x, n) {
            for (var o = [], r = n; r; ) o.push(r), x[r], r = x[r];
            return o.reverse(), o;
          },
          find_path: function(x, n, o) {
            var r = e.single_source_shortest_paths(x, n, o);
            return e.extract_shortest_path_from_predecessor_list(r, o);
          },
          PriorityQueue: {
            make: function(x) {
              var n = e.PriorityQueue, o = {}, r;
              x = x || {};
              for (r in n) n.hasOwnProperty(r) && (o[r] = n[r]);
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
      })(_o);
      var na = _o.exports;
      (function(t) {
        const e = V0, x = J9, n = X9, o = $9, r = ta, l = H0, s = P0, a = na;
        function c(p) {
          return unescape(encodeURIComponent(p)).length;
        }
        function u(p, h, _) {
          const m = [];
          let v;
          for (; (v = p.exec(_)) !== null; ) m.push({
            data: v[0],
            index: v.index,
            mode: h,
            length: v[0].length
          });
          return m;
        }
        function E(p) {
          const h = u(l.NUMERIC, e.NUMERIC, p), _ = u(l.ALPHANUMERIC, e.ALPHANUMERIC, p);
          let m, v;
          return s.isKanjiModeEnabled() ? (m = u(l.BYTE, e.BYTE, p), v = u(l.KANJI, e.KANJI, p)) : (m = u(l.BYTE_KANJI, e.BYTE, p), v = []), h.concat(_, m, v).sort(function(b, g) {
            return b.index - g.index;
          }).map(function(b) {
            return {
              data: b.data,
              mode: b.mode,
              length: b.length
            };
          });
        }
        function d(p, h) {
          switch (h) {
            case e.NUMERIC:
              return x.getBitsLength(p);
            case e.ALPHANUMERIC:
              return n.getBitsLength(p);
            case e.KANJI:
              return r.getBitsLength(p);
            case e.BYTE:
              return o.getBitsLength(p);
          }
        }
        function F(p) {
          return p.reduce(function(h, _) {
            const m = h.length - 1 >= 0 ? h[h.length - 1] : null;
            return m && m.mode === _.mode ? (h[h.length - 1].data += _.data, h) : (h.push(_), h);
          }, []);
        }
        function B(p) {
          const h = [];
          for (let _ = 0; _ < p.length; _++) {
            const m = p[_];
            switch (m.mode) {
              case e.NUMERIC:
                h.push([
                  m,
                  {
                    data: m.data,
                    mode: e.ALPHANUMERIC,
                    length: m.length
                  },
                  {
                    data: m.data,
                    mode: e.BYTE,
                    length: m.length
                  }
                ]);
                break;
              case e.ALPHANUMERIC:
                h.push([
                  m,
                  {
                    data: m.data,
                    mode: e.BYTE,
                    length: m.length
                  }
                ]);
                break;
              case e.KANJI:
                h.push([
                  m,
                  {
                    data: m.data,
                    mode: e.BYTE,
                    length: c(m.data)
                  }
                ]);
                break;
              case e.BYTE:
                h.push([
                  {
                    data: m.data,
                    mode: e.BYTE,
                    length: c(m.data)
                  }
                ]);
            }
          }
          return h;
        }
        function A(p, h) {
          const _ = {}, m = {
            start: {}
          };
          let v = [
            "start"
          ];
          for (let k = 0; k < p.length; k++) {
            const b = p[k], g = [];
            for (let T = 0; T < b.length; T++) {
              const I = b[T], M = "" + k + T;
              g.push(M), _[M] = {
                node: I,
                lastCount: 0
              }, m[M] = {};
              for (let S = 0; S < v.length; S++) {
                const j = v[S];
                _[j] && _[j].node.mode === I.mode ? (m[j][M] = d(_[j].lastCount + I.length, I.mode) - d(_[j].lastCount, I.mode), _[j].lastCount += I.length) : (_[j] && (_[j].lastCount = I.length), m[j][M] = d(I.length, I.mode) + 4 + e.getCharCountIndicator(I.mode, h));
              }
            }
            v = g;
          }
          for (let k = 0; k < v.length; k++) m[v[k]].end = 0;
          return {
            map: m,
            table: _
          };
        }
        function D(p, h) {
          let _;
          const m = e.getBestModeForData(p);
          if (_ = e.from(h, m), _ !== e.BYTE && _.bit < m.bit) throw new Error('"' + p + '" cannot be encoded with mode ' + e.toString(_) + `.
 Suggested mode is: ` + e.toString(m));
          switch (_ === e.KANJI && !s.isKanjiModeEnabled() && (_ = e.BYTE), _) {
            case e.NUMERIC:
              return new x(p);
            case e.ALPHANUMERIC:
              return new n(p);
            case e.KANJI:
              return new r(p);
            case e.BYTE:
              return new o(p);
          }
        }
        t.fromArray = function(h) {
          return h.reduce(function(_, m) {
            return typeof m == "string" ? _.push(D(m, null)) : m.data && _.push(D(m.data, m.mode)), _;
          }, []);
        }, t.fromString = function(h, _) {
          const m = E(h, s.isKanjiModeEnabled()), v = B(m), k = A(v, _), b = a.find_path(k.map, "start", "end"), g = [];
          for (let T = 1; T < b.length - 1; T++) g.push(k.table[b[T]].node);
          return t.fromArray(F(g));
        }, t.rawSplit = function(h) {
          return t.fromArray(E(h, s.isKanjiModeEnabled()));
        };
      })(vo);
      const lx = P0, ux = nx, oa = R9, ra = O9, la = fo, sa = Bo, wx = Co, gx = ox, aa = H9, Je = Do, ia = mo, ca = V0, fx = vo;
      function Ea(t, e) {
        const x = t.size, n = sa.getPositions(e);
        for (let o = 0; o < n.length; o++) {
          const r = n[o][0], l = n[o][1];
          for (let s = -1; s <= 7; s++) if (!(r + s <= -1 || x <= r + s)) for (let a = -1; a <= 7; a++) l + a <= -1 || x <= l + a || (s >= 0 && s <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (s === 0 || s === 6) || s >= 2 && s <= 4 && a >= 2 && a <= 4 ? t.set(r + s, l + a, true, true) : t.set(r + s, l + a, false, true));
        }
      }
      function ua(t) {
        const e = t.size;
        for (let x = 8; x < e - 8; x++) {
          const n = x % 2 === 0;
          t.set(x, 6, n, true), t.set(6, x, n, true);
        }
      }
      function fa(t, e) {
        const x = la.getPositions(e);
        for (let n = 0; n < x.length; n++) {
          const o = x[n][0], r = x[n][1];
          for (let l = -2; l <= 2; l++) for (let s = -2; s <= 2; s++) l === -2 || l === 2 || s === -2 || s === 2 || l === 0 && s === 0 ? t.set(o + l, r + s, true, true) : t.set(o + l, r + s, false, true);
        }
      }
      function da(t, e) {
        const x = t.size, n = Je.getEncodedBits(e);
        let o, r, l;
        for (let s = 0; s < 18; s++) o = Math.floor(s / 3), r = s % 3 + x - 8 - 3, l = (n >> s & 1) === 1, t.set(o, r, l, true), t.set(r, o, l, true);
      }
      function dx(t, e, x) {
        const n = t.size, o = ia.getEncodedBits(e, x);
        let r, l;
        for (r = 0; r < 15; r++) l = (o >> r & 1) === 1, r < 6 ? t.set(r, 8, l, true) : r < 8 ? t.set(r + 1, 8, l, true) : t.set(n - 15 + r, 8, l, true), r < 8 ? t.set(8, n - r - 1, l, true) : r < 9 ? t.set(8, 15 - r - 1 + 1, l, true) : t.set(8, 15 - r - 1, l, true);
        t.set(n - 8, 8, 1, true);
      }
      function Ba(t, e) {
        const x = t.size;
        let n = -1, o = x - 1, r = 7, l = 0;
        for (let s = x - 1; s > 0; s -= 2) for (s === 6 && s--; ; ) {
          for (let a = 0; a < 2; a++) if (!t.isReserved(o, s - a)) {
            let c = false;
            l < e.length && (c = (e[l] >>> r & 1) === 1), t.set(o, s - a, c), r--, r === -1 && (l++, r = 7);
          }
          if (o += n, o < 0 || x <= o) {
            o -= n, n = -n;
            break;
          }
        }
      }
      function Ca(t, e, x) {
        const n = new oa();
        x.forEach(function(a) {
          n.put(a.mode.bit, 4), n.put(a.getLength(), ca.getCharCountIndicator(a.mode, t)), a.write(n);
        });
        const o = lx.getSymbolTotalCodewords(t), r = gx.getTotalCodewordsCount(t, e), l = (o - r) * 8;
        for (n.getLengthInBits() + 4 <= l && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
        const s = (l - n.getLengthInBits()) / 8;
        for (let a = 0; a < s; a++) n.put(a % 2 ? 17 : 236, 8);
        return Aa(n, t, e);
      }
      function Aa(t, e, x) {
        const n = lx.getSymbolTotalCodewords(e), o = gx.getTotalCodewordsCount(e, x), r = n - o, l = gx.getBlocksCount(e, x), s = n % l, a = l - s, c = Math.floor(n / l), u = Math.floor(r / l), E = u + 1, d = c - u, F = new aa(d);
        let B = 0;
        const A = new Array(l), D = new Array(l);
        let p = 0;
        const h = new Uint8Array(t.buffer);
        for (let b = 0; b < l; b++) {
          const g = b < a ? u : E;
          A[b] = h.slice(B, B + g), D[b] = F.encode(A[b]), B += g, p = Math.max(p, g);
        }
        const _ = new Uint8Array(n);
        let m = 0, v, k;
        for (v = 0; v < p; v++) for (k = 0; k < l; k++) v < A[k].length && (_[m++] = A[k][v]);
        for (v = 0; v < d; v++) for (k = 0; k < l; k++) _[m++] = D[k][v];
        return _;
      }
      function Fa(t, e, x, n) {
        let o;
        if (Array.isArray(t)) o = fx.fromArray(t);
        else if (typeof t == "string") {
          let c = e;
          if (!c) {
            const u = fx.rawSplit(t);
            c = Je.getBestVersionForData(u, x);
          }
          o = fx.fromString(t, c || 40);
        } else throw new Error("Invalid data");
        const r = Je.getBestVersionForData(o, x);
        if (!r) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = r;
        else if (e < r) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + r + `.
`);
        const l = Ca(e, x, o), s = lx.getSymbolSize(e), a = new ra(s);
        return Ea(a, e), ua(a), fa(a, e), dx(a, x, 0), e >= 7 && da(a, e), Ba(a, l), isNaN(n) && (n = wx.getBestMask(a, dx.bind(null, a, x))), wx.applyMask(n, a), dx(a, x, n), {
          modules: a,
          version: e,
          errorCorrectionLevel: x,
          maskPattern: n,
          segments: o
        };
      }
      Eo.create = function(e, x) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let n = ux.M, o, r;
        return typeof x < "u" && (n = ux.from(x.errorCorrectionLevel, ux.M), o = Je.from(x.version), r = wx.from(x.maskPattern), x.toSJISFunc && lx.setToSJISFunction(x.toSJISFunc)), Fa(e, o, n, r);
      };
      var ko = {}, Jx = {};
      (function(t) {
        function e(x) {
          if (typeof x == "number" && (x = x.toString()), typeof x != "string") throw new Error("Color should be defined as hex string");
          let n = x.slice().replace("#", "").split("");
          if (n.length < 3 || n.length === 5 || n.length > 8) throw new Error("Invalid hex color: " + x);
          (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(r) {
            return [
              r,
              r
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
          const o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, r = n.width && n.width >= 21 ? n.width : void 0, l = n.scale || 4;
          return {
            width: r,
            scale: r ? 4 : l,
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
          const r = t.getScale(n, o);
          return Math.floor((n + o.margin * 2) * r);
        }, t.qrToImageData = function(n, o, r) {
          const l = o.modules.size, s = o.modules.data, a = t.getScale(l, r), c = Math.floor((l + r.margin * 2) * a), u = r.margin * a, E = [
            r.color.light,
            r.color.dark
          ];
          for (let d = 0; d < c; d++) for (let F = 0; F < c; F++) {
            let B = (d * c + F) * 4, A = r.color.light;
            if (d >= u && F >= u && d < c - u && F < c - u) {
              const D = Math.floor((d - u) / a), p = Math.floor((F - u) / a);
              A = E[s[D * l + p] ? 1 : 0];
            }
            n[B++] = A.r, n[B++] = A.g, n[B++] = A.b, n[B] = A.a;
          }
        };
      })(Jx);
      (function(t) {
        const e = Jx;
        function x(o, r, l) {
          o.clearRect(0, 0, r.width, r.height), r.style || (r.style = {}), r.height = l, r.width = l, r.style.height = l + "px", r.style.width = l + "px";
        }
        function n() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        t.render = function(r, l, s) {
          let a = s, c = l;
          typeof a > "u" && (!l || !l.getContext) && (a = l, l = void 0), l || (c = n()), a = e.getOptions(a);
          const u = e.getImageWidth(r.modules.size, a), E = c.getContext("2d"), d = E.createImageData(u, u);
          return e.qrToImageData(d.data, r, a), x(E, c, u), E.putImageData(d, 0, 0), c;
        }, t.renderToDataURL = function(r, l, s) {
          let a = s;
          typeof a > "u" && (!l || !l.getContext) && (a = l, l = void 0), a || (a = {});
          const c = t.render(r, l, a), u = a.type || "image/png", E = a.rendererOpts || {};
          return c.toDataURL(u, E.quality);
        };
      })(ko);
      var bo = {};
      const Da = Jx;
      function nn(t, e) {
        const x = t.a / 255, n = e + '="' + t.hex + '"';
        return x < 1 ? n + " " + e + '-opacity="' + x.toFixed(2).slice(1) + '"' : n;
      }
      function Bx(t, e, x) {
        let n = t + e;
        return typeof x < "u" && (n += " " + x), n;
      }
      function pa(t, e, x) {
        let n = "", o = 0, r = false, l = 0;
        for (let s = 0; s < t.length; s++) {
          const a = Math.floor(s % e), c = Math.floor(s / e);
          !a && !r && (r = true), t[s] ? (l++, s > 0 && a > 0 && t[s - 1] || (n += r ? Bx("M", a + x, 0.5 + c + x) : Bx("m", o, 0), o = 0, r = false), a + 1 < e && t[s + 1] || (n += Bx("h", l), l = 0)) : o++;
        }
        return n;
      }
      bo.render = function(e, x, n) {
        const o = Da.getOptions(x), r = e.modules.size, l = e.modules.data, s = r + o.margin * 2, a = o.color.light.a ? "<path " + nn(o.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "", c = "<path " + nn(o.color.dark, "stroke") + ' d="' + pa(l, r, o.margin) + '"/>', u = 'viewBox="0 0 ' + s + " " + s + '"', d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + u + ' shape-rendering="crispEdges">' + a + c + `</svg>
`;
        return typeof n == "function" && n(null, d), d;
      };
      const ma = N9, yx = Eo, wo = ko, ha = bo;
      function Wx(t, e, x, n, o) {
        const r = [].slice.call(arguments, 1), l = r.length, s = typeof r[l - 1] == "function";
        if (!s && !ma()) throw new Error("Callback required as last argument");
        if (s) {
          if (l < 2) throw new Error("Too few arguments provided");
          l === 2 ? (o = x, x = e, e = n = void 0) : l === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = x, x = e, e = void 0));
        } else {
          if (l < 1) throw new Error("Too few arguments provided");
          return l === 1 ? (x = e, e = n = void 0) : l === 2 && !e.getContext && (n = x, x = e, e = void 0), new Promise(function(a, c) {
            try {
              const u = yx.create(x, n);
              a(t(u, e, n));
            } catch (u) {
              c(u);
            }
          });
        }
        try {
          const a = yx.create(x, n);
          o(null, t(a, e, n));
        } catch (a) {
          o(a);
        }
      }
      xe.create = yx.create;
      xe.toCanvas = Wx.bind(null, wo.render);
      xe.toDataURL = Wx.bind(null, wo.renderToDataURL);
      xe.toString = Wx.bind(null, function(t, e, x) {
        return ha.render(t, x);
      });
      function va(t) {
        let e, x, n, o, r, l, s = t[0].isHost ? "You started this group" : "Group encounter", a, c, u, E = an(t[0].date) + "", d, F, B, A, D = t[0].isHost && t[11](), p, h, _, m, v, k, b, g, T, I, M = t[3] && on(t);
        function S(K, O) {
          return K[5] ? ba : ka;
        }
        let j = S(t), L = j(t), R = D && ln(t), q = t[8] && sn();
        function H(K, O) {
          return K[4] ? Pa : ya;
        }
        let Z = H(t), Q = Z(t);
        return {
          c() {
            M && M.c(), e = w(), x = C("section"), n = C("div"), o = C("span"), o.textContent = "groups", r = w(), l = C("span"), a = N(s), c = w(), u = C("p"), d = N(E), F = w(), B = C("section"), L.c(), A = w(), R && R.c(), p = w(), h = C("section"), _ = C("div"), _.innerHTML = '<span class="material-icons privacy-icon svelte-ctgveb">lock_outline</span> <p class="privacy-text svelte-ctgveb">Your note is stored encrypted and never shared.</p>', m = w(), v = C("textarea"), k = w(), q && q.c(), b = w(), g = C("section"), Q.c(), f(o, "class", "material-icons status-icon svelte-ctgveb"), f(l, "class", "status-label svelte-ctgveb"), f(n, "class", "status-row svelte-ctgveb"), f(u, "class", "date svelte-ctgveb"), f(x, "class", "card pad svelte-ctgveb"), f(B, "class", "card svelte-ctgveb"), f(_, "class", "privacy-row svelte-ctgveb"), f(v, "placeholder", "Add a private note\u2026"), f(v, "rows", "5"), f(v, "class", "svelte-ctgveb"), f(h, "class", "card pad svelte-ctgveb"), f(g, "class", "card svelte-ctgveb");
          },
          m(K, O) {
            M && M.m(K, O), P(K, e, O), P(K, x, O), i(x, n), i(n, o), i(n, r), i(n, l), i(l, a), i(x, c), i(x, u), i(u, d), P(K, F, O), P(K, B, O), L.m(B, null), P(K, A, O), R && R.m(K, O), P(K, p, O), P(K, h, O), i(h, _), i(h, m), i(h, v), t0(v, t[7]), i(h, k), q && q.m(h, null), P(K, b, O), P(K, g, O), Q.m(g, null), T || (I = [
              G(v, "input", t[19]),
              G(v, "input", t[15])
            ], T = true);
          },
          p(K, O) {
            K[3] ? M ? M.p(K, O) : (M = on(K), M.c(), M.m(e.parentNode, e)) : M && (M.d(1), M = null), O & 1 && s !== (s = K[0].isHost ? "You started this group" : "Group encounter") && U(a, s), O & 1 && E !== (E = an(K[0].date) + "") && U(d, E), j === (j = S(K)) && L ? L.p(K, O) : (L.d(1), L = j(K), L && (L.c(), L.m(B, null))), O & 1 && (D = K[0].isHost && K[11]()), D ? R ? R.p(K, O) : (R = ln(K), R.c(), R.m(p.parentNode, p)) : R && (R.d(1), R = null), O & 128 && t0(v, K[7]), K[8] ? q || (q = sn(), q.c(), q.m(h, null)) : q && (q.d(1), q = null), Z === (Z = H(K)) && Q ? Q.p(K, O) : (Q.d(1), Q = Z(K), Q && (Q.c(), Q.m(g, null)));
          },
          d(K) {
            K && (y(e), y(x), y(F), y(B), y(A), y(p), y(h), y(b), y(g)), M && M.d(K), L.d(), R && R.d(K), q && q.d(), Q.d(), T = false, i0(I);
          }
        };
      }
      function _a(t) {
        let e;
        return {
          c() {
            e = C("section"), e.innerHTML = '<p class="muted svelte-ctgveb">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-ctgveb">\u2190 Back to encounters</a>', f(e, "class", "card pad svelte-ctgveb");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function on(t) {
        let e, x, n, o;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "error_outline", n = w(), o = N(t[3]), f(x, "class", "material-icons svelte-ctgveb"), f(e, "class", "toast error-toast svelte-ctgveb");
          },
          m(r, l) {
            P(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l & 8 && U(o, r[3]);
          },
          d(r) {
            r && y(e);
          }
        };
      }
      function ka(t) {
        let e, x, n, o, r = (t[0].name ? t[0].name : "Add group name") + "", l, s, a, c, u, E, d = t[0].name && rn();
        return {
          c() {
            e = C("button"), x = C("span"), x.textContent = "edit", n = w(), o = C("span"), l = N(r), s = w(), d && d.c(), a = w(), c = C("span"), c.textContent = "chevron_right", f(x, "class", "material-icons action-icon svelte-ctgveb"), f(o, "class", "action-label svelte-ctgveb"), f(c, "class", "material-icons action-chevron svelte-ctgveb"), f(e, "class", "action-row svelte-ctgveb");
          },
          m(F, B) {
            P(F, e, B), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), d && d.m(o, null), i(e, a), i(e, c), u || (E = G(e, "click", t[12]), u = true);
          },
          p(F, B) {
            B & 1 && r !== (r = (F[0].name ? F[0].name : "Add group name") + "") && U(l, r), F[0].name ? d || (d = rn(), d.c(), d.m(o, null)) : d && (d.d(1), d = null);
          },
          d(F) {
            F && y(e), d && d.d(), u = false, E();
          }
        };
      }
      function ba(t) {
        let e, x, n, o, r, l, s, a, c, u, E = t[2] ? "Saving\u2026" : "Save", d, F, B;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "edit", n = w(), o = C("form"), r = C("input"), l = w(), s = C("div"), a = C("button"), a.textContent = "Cancel", c = w(), u = C("button"), d = N(E), f(x, "class", "material-icons action-icon svelte-ctgveb"), f(r, "type", "text"), f(r, "placeholder", "Optional group name"), f(r, "maxlength", "64"), r.autofocus = true, f(r, "class", "svelte-ctgveb"), f(a, "type", "button"), f(a, "class", "btn-text svelte-ctgveb"), f(u, "type", "submit"), f(u, "class", "btn-filled-sm svelte-ctgveb"), u.disabled = t[2], f(s, "class", "name-actions svelte-ctgveb"), f(o, "class", "name-form svelte-ctgveb"), f(e, "class", "action-row edit-row svelte-ctgveb");
          },
          m(A, D) {
            P(A, e, D), i(e, x), i(e, n), i(e, o), i(o, r), t0(r, t[6]), i(o, l), i(o, s), i(s, a), i(s, c), i(s, u), i(u, d), r.focus(), F || (B = [
              G(r, "input", t[18]),
              G(a, "click", t[13]),
              G(o, "submit", z0(t[14]))
            ], F = true);
          },
          p(A, D) {
            D & 64 && r.value !== A[6] && t0(r, A[6]), D & 4 && E !== (E = A[2] ? "Saving\u2026" : "Save") && U(d, E), D & 4 && (u.disabled = A[2]);
          },
          d(A) {
            A && y(e), F = false, i0(B);
          }
        };
      }
      function rn(t) {
        let e;
        return {
          c() {
            e = C("span"), e.textContent = "Tap to change", f(e, "class", "action-sub svelte-ctgveb");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function ln(t) {
        let e, x, n, o, r;
        function l(c, u) {
          return c[9] ? ga : wa;
        }
        let s = l(t), a = s(t);
        return {
          c() {
            e = C("section"), x = C("p"), x.textContent = "Show this QR for others to join", n = w(), a.c(), o = w(), r = C("p"), r.textContent = "Valid for 24 hours from when you created the group.", f(x, "class", "qr-label svelte-ctgveb"), f(r, "class", "qr-hint svelte-ctgveb"), f(e, "class", "card pad qr-card svelte-ctgveb");
          },
          m(c, u) {
            P(c, e, u), i(e, x), i(e, n), a.m(e, null), i(e, o), i(e, r);
          },
          p(c, u) {
            s === (s = l(c)) && a ? a.p(c, u) : (a.d(1), a = s(c), a && (a.c(), a.m(e, o)));
          },
          d(c) {
            c && y(e), a.d();
          }
        };
      }
      function wa(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Generating QR\u2026", f(e, "class", "muted svelte-ctgveb");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function ga(t) {
        let e;
        return {
          c() {
            e = C("div"), f(e, "class", "qr-wrap svelte-ctgveb");
          },
          m(x, n) {
            P(x, e, n), e.innerHTML = t[9];
          },
          p(x, n) {
            n & 512 && (e.innerHTML = x[9]);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function sn(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Saving\u2026", f(e, "class", "save-hint svelte-ctgveb");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function ya(t) {
        let e, x, n;
        return {
          c() {
            e = C("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-ctgveb">delete_outline</span> <span class="action-label danger svelte-ctgveb">Delete group encounter</span>', f(e, "class", "action-row svelte-ctgveb");
          },
          m(o, r) {
            P(o, e, r), x || (n = G(e, "click", t[21]), x = true);
          },
          p: X,
          d(o) {
            o && y(e), x = false, n();
          }
        };
      }
      function Pa(t) {
        let e, x, n, o, r, l, s, a = t[2] ? "Deleting\u2026" : "Delete", c, u, E;
        return {
          c() {
            e = C("div"), x = C("p"), x.textContent = "Delete this group encounter? This cannot be undone.", n = w(), o = C("div"), r = C("button"), r.textContent = "Cancel", l = w(), s = C("button"), c = N(a), f(x, "class", "confirm-text svelte-ctgveb"), f(r, "class", "btn-text svelte-ctgveb"), f(s, "class", "btn-danger-sm svelte-ctgveb"), s.disabled = t[2], f(o, "class", "confirm-actions svelte-ctgveb"), f(e, "class", "confirm-row svelte-ctgveb");
          },
          m(d, F) {
            P(d, e, F), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, s), i(s, c), u || (E = [
              G(r, "click", t[20]),
              G(s, "click", t[16])
            ], u = true);
          },
          p(d, F) {
            F & 4 && a !== (a = d[2] ? "Deleting\u2026" : "Delete") && U(c, a), F & 4 && (s.disabled = d[2]);
          },
          d(d) {
            d && y(e), u = false, i0(E);
          }
        };
      }
      function Ta(t) {
        let e, x, n, o, r, l, s, a = (t[1] ? "Group not found" : t[10]) + "", c, u, E;
        e = new K0({});
        function d(A, D) {
          if (A[1]) return _a;
          if (A[0]) return va;
        }
        let F = d(t), B = F && F(t);
        return {
          c() {
            y0(e.$$.fragment), x = w(), n = C("main"), o = C("div"), r = C("a"), r.innerHTML = '<span class="material-icons svelte-ctgveb">arrow_back</span>', l = w(), s = C("h1"), c = N(a), u = w(), B && B.c(), f(r, "class", "back-btn svelte-ctgveb"), f(r, "href", "#/encounters"), f(s, "class", "svelte-ctgveb"), f(o, "class", "page-header svelte-ctgveb"), f(n, "class", "svelte-ctgveb");
          },
          m(A, D) {
            k0(e, A, D), P(A, x, D), P(A, n, D), i(n, o), i(o, r), i(o, l), i(o, s), i(s, c), i(n, u), B && B.m(n, null), E = true;
          },
          p(A, [D]) {
            (!E || D & 1026) && a !== (a = (A[1] ? "Group not found" : A[10]) + "") && U(c, a), F === (F = d(A)) && B ? B.p(A, D) : (B && B.d(1), B = F && F(A), B && (B.c(), B.m(n, null)));
          },
          i(A) {
            E || (F0(e.$$.fragment, A), E = true);
          },
          o(A) {
            D0(e.$$.fragment, A), E = false;
          },
          d(A) {
            A && (y(x), y(n)), b0(e, A), B && B.d();
          }
        };
      }
      function an(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Sa(t, e, x) {
        let n, { params: o = {} } = e, r = null, l = false, s = false, a = null, c = false, u = false, E = "", d = "", F = false, B = null, A = null;
        T0(() => {
          if (!I0()) {
            B0("/");
            return;
          }
          D();
        });
        function D() {
          const L = o.tokenHex;
          if (x(0, r = ao().find((R) => n0(R.token) === L) ?? null), !r) {
            x(1, l = true);
            return;
          }
          x(7, d = r.note ?? ""), r.isHost && h() && _();
        }
        function p() {
          return n0(r.token);
        }
        function h() {
          return r ? Math.floor(Date.now() / 1e3) - r.createdAt < 86400 : false;
        }
        async function _() {
          Ee();
          const L = Math.floor(Date.now() / 1e3), R = fl(p(), L, n0(r.hostContactId), r.name);
          try {
            x(9, A = await xe.toString(R, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#1a1a1a",
                light: "#ffffff"
              }
            }));
          } catch (q) {
            x(3, a = "Could not render QR code: " + q.message);
          }
        }
        function m() {
          x(6, E = r.name ?? ""), x(5, u = true), x(3, a = null);
        }
        function v() {
          x(5, u = false), x(3, a = null);
        }
        async function k() {
          if (!s) {
            x(2, s = true), x(3, a = null);
            try {
              const L = E.trim() || null;
              await it(p(), {
                name: L
              }), D(), x(5, u = false);
            } catch (L) {
              x(3, a = L.message);
            } finally {
              x(2, s = false);
            }
          }
        }
        function b() {
          x(8, F = d !== (r.note ?? "")), clearTimeout(B), F && (B = setTimeout(g, 1500));
        }
        async function g() {
          if (F) try {
            const L = d.trim() || null;
            await it(p(), {
              note: L
            }), D(), x(8, F = false);
          } catch (L) {
            x(3, a = L.message);
          }
        }
        async function T() {
          if (!s) {
            x(2, s = true), x(3, a = null);
            try {
              clearTimeout(B), await Xl(p()), B0("/encounters");
            } catch (L) {
              x(3, a = L.message), x(2, s = false);
            }
          }
        }
        function I() {
          E = this.value, x(6, E);
        }
        function M() {
          d = this.value, x(7, d);
        }
        const S = () => x(4, c = false), j = () => x(4, c = true);
        return t.$$set = (L) => {
          "params" in L && x(17, o = L.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && x(10, n = r?.name || "Group encounter");
        }, [
          r,
          l,
          s,
          a,
          c,
          u,
          E,
          d,
          F,
          A,
          n,
          h,
          m,
          v,
          k,
          b,
          T,
          o,
          I,
          M,
          S,
          j
        ];
      }
      class Ma extends v0 {
        constructor(e) {
          super(), h0(this, e, Sa, Ta, m0, {
            params: 17
          });
        }
      }
      async function Ia(t) {
        const e = R0();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const x = e.encounters.map((u) => ({
          raw_token: n0(u.rawToken),
          date: u.date,
          their_contact_id: n0(u.theirContactId)
        })), n = (e.relationships || []).map((u) => ({
          raw_token: n0(u.rawToken),
          date: u.createdAt,
          their_contact_id: n0(u.theirContactId)
        })), o = (e.results || []).map((u) => {
          const E = {};
          for (const d of O0) E[d] = u.positiveDiseases.includes(d) ? "positive" : "negative";
          return {
            test_date: u.date,
            result_json: JSON.stringify({
              panel: E,
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
        }), r = new TextEncoder().encode(JSON.stringify({
          version: 1,
          contact_id: n0(e.myContactId),
          encounters: [
            ...x,
            ...n
          ],
          test_results: o
        })), l = we(16), s = await U0(t, l), a = ge(s, r);
        s.fill(0);
        const c = new Uint8Array(16 + a.length);
        return c.set(l, 0), c.set(a, 16), c;
      }
      const La = "peachsafe-backup";
      function cn(t, e, x) {
        const n = t.slice();
        return n[43] = e[x], n;
      }
      function En(t, e, x) {
        const n = t.slice();
        return n[43] = e[x], n;
      }
      function Na(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d, F, B, A, D, p, h, _, m, v, k, b, g, T, I, M, S, j = t[4] ? "verified_user" : "shield", L, R, q = t[4] ? "Enabled" : "Disabled", H, Z;
        function Q($, l0) {
          return $[3] ? Ua : Ha;
        }
        let K = Q(t), O = K(t);
        function W($, l0) {
          return $[24] ? Ga : za;
        }
        let e0 = W(t), z = e0(t);
        function r0($, l0) {
          if ($[20] === "idle") return Ja;
          if ($[20] === "entering_pin") return Qa;
          if ($[20] === "exporting") return Ya;
          if ($[20] === "done") return Va;
          if ($[20] === "error") return Ka;
        }
        let c0 = r0(t), o0 = c0 && c0(t);
        function s0($, l0) {
          return $[4] ? Xa : Wa;
        }
        let J = s0(t), Y = J(t);
        function x0($, l0) {
          return $[4] ? Za : $a;
        }
        let f0 = x0(t), E0 = f0(t);
        return {
          c() {
            e = C("section"), x = C("div"), n = C("div"), o = C("h2"), o.textContent = "Email", r = w(), l = C("div"), s = C("span"), a = N(t[2]), c = w(), O.c(), u = w(), E = C("a"), E.textContent = "Change email", d = w(), F = C("section"), F.innerHTML = '<div class="row svelte-14v5vh2"><div class="svelte-14v5vh2"><h2 class="svelte-14v5vh2">Password</h2> <p class="hint svelte-14v5vh2">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-14v5vh2">Change password</a></div>', B = w(), A = C("section"), D = C("h2"), D.textContent = "Export to mobile", p = w(), z.c(), h = w(), o0 && o0.c(), _ = w(), m = C("section"), v = C("div"), k = C("div"), b = C("h2"), b.textContent = "Two-factor authentication", g = w(), T = C("p"), Y.c(), I = w(), M = C("div"), S = C("span"), L = N(j), R = w(), H = N(q), Z = w(), E0.c(), f(o, "class", "svelte-14v5vh2"), f(s, "class", "hint email-value svelte-14v5vh2"), f(l, "class", "email-meta svelte-14v5vh2"), f(n, "class", "svelte-14v5vh2"), f(E, "href", "#/change-email"), f(E, "class", "btn-outline-sm svelte-14v5vh2"), f(x, "class", "row svelte-14v5vh2"), f(e, "class", "card svelte-14v5vh2"), f(F, "class", "card svelte-14v5vh2"), f(D, "class", "svelte-14v5vh2"), f(A, "class", "card svelte-14v5vh2"), f(b, "class", "svelte-14v5vh2"), f(T, "class", "hint svelte-14v5vh2"), f(k, "class", "svelte-14v5vh2"), f(S, "class", "material-icons svelte-14v5vh2"), f(M, "class", "status-badge svelte-14v5vh2"), a0(M, "enabled", t[4]), a0(M, "disabled", !t[4]), f(v, "class", "row svelte-14v5vh2"), f(m, "class", "card svelte-14v5vh2");
          },
          m($, l0) {
            P($, e, l0), i(e, x), i(x, n), i(n, o), i(n, r), i(n, l), i(l, s), i(s, a), i(l, c), O.m(l, null), i(x, u), i(x, E), P($, d, l0), P($, F, l0), P($, B, l0), P($, A, l0), i(A, D), i(A, p), z.m(A, null), i(A, h), o0 && o0.m(A, null), P($, _, l0), P($, m, l0), i(m, v), i(v, k), i(k, b), i(k, g), i(k, T), Y.m(T, null), i(v, I), i(v, M), i(M, S), i(S, L), i(M, R), i(M, H), i(m, Z), E0.m(m, null);
          },
          p($, l0) {
            l0[0] & 4 && U(a, $[2]), K !== (K = Q($)) && (O.d(1), O = K($), O && (O.c(), O.m(l, null))), e0 !== (e0 = W($)) && (z.d(1), z = e0($), z && (z.c(), z.m(A, h))), c0 === (c0 = r0($)) && o0 ? o0.p($, l0) : (o0 && o0.d(1), o0 = c0 && c0($), o0 && (o0.c(), o0.m(A, null))), J !== (J = s0($)) && (Y.d(1), Y = J($), Y && (Y.c(), Y.m(T, null))), l0[0] & 16 && j !== (j = $[4] ? "verified_user" : "shield") && U(L, j), l0[0] & 16 && q !== (q = $[4] ? "Enabled" : "Disabled") && U(H, q), l0[0] & 16 && a0(M, "enabled", $[4]), l0[0] & 16 && a0(M, "disabled", !$[4]), f0 === (f0 = x0($)) && E0 ? E0.p($, l0) : (E0.d(1), E0 = f0($), E0 && (E0.c(), E0.m(m, null)));
          },
          d($) {
            $ && (y(e), y(d), y(F), y(B), y(A), y(_), y(m)), O.d(), z.d(), o0 && o0.d(), Y.d(), E0.d();
          }
        };
      }
      function ja(t) {
        let e, x, n, o, r, l, s, a, c, u, E = A0(t[12]), d = [];
        for (let F = 0; F < E.length; F += 1) d[F] = An(En(t, E, F));
        return {
          c() {
            e = C("div"), x = C("div"), x.innerHTML = '<span class="material-icons success-icon svelte-14v5vh2">check_circle</span> <h2 class="svelte-14v5vh2">2FA enabled \u2014 save your backup codes</h2>', n = w(), o = C("p"), o.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, r = w(), l = C("div");
            for (let F = 0; F < d.length; F += 1) d[F].c();
            s = w(), a = C("button"), a.textContent = "I've saved my backup codes", f(x, "class", "codes-header svelte-14v5vh2"), f(o, "class", "hint warning svelte-14v5vh2"), f(l, "class", "backup-grid svelte-14v5vh2"), f(a, "class", "btn-primary svelte-14v5vh2"), f(e, "class", "card svelte-14v5vh2");
          },
          m(F, B) {
            P(F, e, B), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l);
            for (let A = 0; A < d.length; A += 1) d[A] && d[A].m(l, null);
            i(e, s), i(e, a), c || (u = G(a, "click", t[27]), c = true);
          },
          p(F, B) {
            if (B[0] & 4096) {
              E = A0(F[12]);
              let A;
              for (A = 0; A < E.length; A += 1) {
                const D = En(F, E, A);
                d[A] ? d[A].p(D, B) : (d[A] = An(D), d[A].c(), d[A].m(l, null));
              }
              for (; A < d.length; A += 1) d[A].d(1);
              d.length = E.length;
            }
          },
          d(F) {
            F && y(e), q0(d, F), c = false, u();
          }
        };
      }
      function Ra(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d, F, B, A, D, p, h, _, m, v, k, b = t[10] ? "Verifying\u2026" : "Enable 2FA", g, T, I, M, S, j, L, R = t[11] && Fn(t);
        return {
          c() {
            e = C("div"), x = C("h2"), x.textContent = "Set up authenticator app", n = w(), o = C("p"), o.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, r = w(), l = C("div"), s = C("img"), c = w(), u = C("details"), E = C("summary"), E.textContent = "Can't scan? Enter the key manually", d = w(), F = C("code"), B = N(t[7]), A = w(), D = C("form"), p = C("label"), h = N(`Authenticator code
          `), _ = C("input"), m = w(), R && R.c(), v = w(), k = C("button"), g = N(b), I = w(), M = C("button"), S = N("Cancel"), f(x, "class", "svelte-14v5vh2"), f(o, "class", "hint svelte-14v5vh2"), Zx(s.src, a = t[8]) || f(s, "src", a), f(s, "alt", "TOTP QR code"), f(s, "width", "200"), f(s, "height", "200"), f(s, "class", "svelte-14v5vh2"), f(l, "class", "qr-wrap svelte-14v5vh2"), f(E, "class", "svelte-14v5vh2"), f(F, "class", "secret-key svelte-14v5vh2"), f(u, "class", "manual-entry svelte-14v5vh2"), f(_, "type", "text"), f(_, "inputmode", "numeric"), f(_, "pattern", "[0-9]*"), f(_, "maxlength", "6"), _.required = true, f(_, "autocomplete", "one-time-code"), f(_, "placeholder", "000000"), f(_, "class", "svelte-14v5vh2"), f(p, "class", "svelte-14v5vh2"), f(k, "type", "submit"), k.disabled = T = t[10] || t[9].length !== 6, f(M, "type", "button"), f(M, "class", "btn-ghost svelte-14v5vh2"), M.disabled = t[10], f(D, "class", "otp-form svelte-14v5vh2"), f(e, "class", "card svelte-14v5vh2");
          },
          m(q, H) {
            P(q, e, H), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), i(l, s), i(e, c), i(e, u), i(u, E), i(u, d), i(u, F), i(F, B), i(e, A), i(e, D), i(D, p), i(p, h), i(p, _), t0(_, t[9]), i(D, m), R && R.m(D, null), i(D, v), i(D, k), i(k, g), i(D, I), i(D, M), i(M, S), j || (L = [
              G(_, "input", t[34]),
              G(M, "click", t[28]),
              G(D, "submit", z0(t[26]))
            ], j = true);
          },
          p(q, H) {
            H[0] & 256 && !Zx(s.src, a = q[8]) && f(s, "src", a), H[0] & 128 && U(B, q[7]), H[0] & 512 && _.value !== q[9] && t0(_, q[9]), q[11] ? R ? R.p(q, H) : (R = Fn(q), R.c(), R.m(D, v)) : R && (R.d(1), R = null), H[0] & 1024 && b !== (b = q[10] ? "Verifying\u2026" : "Enable 2FA") && U(g, b), H[0] & 1536 && T !== (T = q[10] || q[9].length !== 6) && (k.disabled = T), H[0] & 1024 && (M.disabled = q[10]);
          },
          d(q) {
            q && y(e), R && R.d(), j = false, i0(L);
          }
        };
      }
      function Oa(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[1]), f(e, "class", "error svelte-14v5vh2");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2 && U(x, n[1]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function qa(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Loading\u2026", f(e, "class", "muted svelte-14v5vh2");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function Ha(t) {
        let e;
        return {
          c() {
            e = C("span"), e.innerHTML = `<span class="material-icons svelte-14v5vh2">warning</span>
                Unverified`, f(e, "class", "unverified-badge svelte-14v5vh2");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Ua(t) {
        let e;
        return {
          c() {
            e = C("span"), e.innerHTML = `<span class="material-icons svelte-14v5vh2">verified</span>
                Verified`, f(e, "class", "verified-badge svelte-14v5vh2");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function za(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", f(e, "class", "hint svelte-14v5vh2");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Ga(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", f(e, "class", "hint warning svelte-14v5vh2");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Ka(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = C("p"), x = N(t[23]), n = w(), o = C("button"), o.textContent = "Try again", f(e, "class", "error svelte-14v5vh2"), f(o, "class", "btn-ghost svelte-14v5vh2");
          },
          m(s, a) {
            P(s, e, a), i(e, x), P(s, n, a), P(s, o, a), r || (l = G(o, "click", t[31]), r = true);
          },
          p(s, a) {
            a[0] & 8388608 && U(x, s[23]);
          },
          d(s) {
            s && (y(e), y(n), y(o)), r = false, l();
          }
        };
      }
      function Va(t) {
        let e, x, n, o, r;
        return {
          c() {
            e = C("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, x = w(), n = C("button"), n.textContent = "Done", f(e, "class", "hint svelte-14v5vh2"), f(n, "class", "btn-ghost svelte-14v5vh2");
          },
          m(l, s) {
            P(l, e, s), P(l, x, s), P(l, n, s), o || (r = G(n, "click", t[31]), o = true);
          },
          p: X,
          d(l) {
            l && (y(e), y(x), y(n)), o = false, r();
          }
        };
      }
      function Ya(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Encrypting\u2026", f(e, "class", "hint svelte-14v5vh2");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function Qa(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d, F, B, A, D, p, h, _ = t[23] && un(t);
        return {
          c() {
            e = C("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", x = w(), n = C("div"), o = C("label"), r = N(`PIN
            `), l = C("input"), s = w(), a = C("label"), c = N(`Confirm PIN
            `), u = C("input"), E = w(), _ && _.c(), d = w(), F = C("div"), B = C("button"), B.textContent = "Download backup", A = w(), D = C("button"), D.textContent = "Cancel", f(e, "class", "hint svelte-14v5vh2"), f(l, "type", "password"), f(l, "inputmode", "numeric"), f(l, "maxlength", "6"), f(l, "placeholder", "6 digits"), f(l, "autocomplete", "new-password"), f(l, "class", "svelte-14v5vh2"), f(o, "class", "svelte-14v5vh2"), f(u, "type", "password"), f(u, "inputmode", "numeric"), f(u, "maxlength", "6"), f(u, "placeholder", "6 digits"), f(u, "autocomplete", "new-password"), f(u, "class", "svelte-14v5vh2"), f(a, "class", "svelte-14v5vh2"), f(B, "class", "btn-primary svelte-14v5vh2"), f(D, "class", "btn-ghost svelte-14v5vh2"), f(F, "class", "export-actions svelte-14v5vh2"), f(n, "class", "export-form svelte-14v5vh2");
          },
          m(m, v) {
            P(m, e, v), P(m, x, v), P(m, n, v), i(n, o), i(o, r), i(o, l), t0(l, t[21]), i(n, s), i(n, a), i(a, c), i(a, u), t0(u, t[22]), i(n, E), _ && _.m(n, null), i(n, d), i(n, F), i(F, B), i(F, A), i(F, D), p || (h = [
              G(l, "input", t[36]),
              G(u, "input", t[37]),
              G(B, "click", t[30]),
              G(D, "click", t[31])
            ], p = true);
          },
          p(m, v) {
            v[0] & 2097152 && l.value !== m[21] && t0(l, m[21]), v[0] & 4194304 && u.value !== m[22] && t0(u, m[22]), m[23] ? _ ? _.p(m, v) : (_ = un(m), _.c(), _.m(n, d)) : _ && (_.d(1), _ = null);
          },
          d(m) {
            m && (y(e), y(x), y(n)), _ && _.d(), p = false, i0(h);
          }
        };
      }
      function Ja(t) {
        let e, x, n;
        return {
          c() {
            e = C("button"), e.textContent = "Export data for mobile app", f(e, "class", "btn-primary svelte-14v5vh2");
          },
          m(o, r) {
            P(o, e, r), x || (n = G(e, "click", t[35]), x = true);
          },
          p: X,
          d(o) {
            o && y(e), x = false, n();
          }
        };
      }
      function un(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[23]), f(e, "class", "error svelte-14v5vh2");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 8388608 && U(x, n[23]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function Wa(t) {
        let e;
        return {
          c() {
            e = N("Add an extra layer of security by requiring an authenticator code at login.");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Xa(t) {
        let e;
        return {
          c() {
            e = N("Active \u2014 your account requires a code from your authenticator app at login.");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function Za(t) {
        let e, x, n, o, r, l, s, a = t[5] !== 1 ? "s" : "", c, u, E, d, F, B, A, D, p;
        function h(k, b) {
          return k[19].length > 0 ? x8 : e8;
        }
        let _ = h(t), m = _(t), v = t[15] && Bn(t);
        return {
          c() {
            e = C("div"), x = C("div"), n = C("span"), n.textContent = "key", o = w(), r = C("span"), l = N(t[5]), s = N(" backup code"), c = N(a), u = N(" remaining"), E = w(), m.c(), d = w(), F = C("div"), v && v.c(), B = w(), A = C("button"), A.textContent = "Disable 2FA", f(n, "class", "material-icons svelte-14v5vh2"), f(x, "class", "backup-count svelte-14v5vh2"), f(e, "class", "backup-section svelte-14v5vh2"), f(A, "class", "btn-danger svelte-14v5vh2"), f(F, "class", "danger-zone svelte-14v5vh2");
          },
          m(k, b) {
            P(k, e, b), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(r, s), i(r, c), i(r, u), i(e, E), m.m(e, null), P(k, d, b), P(k, F, b), v && v.m(F, null), i(F, B), i(F, A), D || (p = G(A, "click", t[39]), D = true);
          },
          p(k, b) {
            b[0] & 32 && U(l, k[5]), b[0] & 32 && a !== (a = k[5] !== 1 ? "s" : "") && U(c, a), _ === (_ = h(k)) && m ? m.p(k, b) : (m.d(1), m = _(k), m && (m.c(), m.m(e, null))), k[15] ? v ? v.p(k, b) : (v = Bn(k), v.c(), v.m(F, B)) : v && (v.d(1), v = null);
          },
          d(k) {
            k && (y(e), y(d), y(F)), m.d(), v && v.d(), D = false, p();
          }
        };
      }
      function $a(t) {
        let e, x, n = t[10] ? "Generating\u2026" : "Enable 2FA", o, r, l, s = t[11] && Cn(t);
        return {
          c() {
            s && s.c(), e = w(), x = C("button"), o = N(n), f(x, "class", "btn-primary svelte-14v5vh2"), x.disabled = t[10];
          },
          m(a, c) {
            s && s.m(a, c), P(a, e, c), P(a, x, c), i(x, o), r || (l = G(x, "click", t[25]), r = true);
          },
          p(a, c) {
            a[11] ? s ? s.p(a, c) : (s = Cn(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), c[0] & 1024 && n !== (n = a[10] ? "Generating\u2026" : "Enable 2FA") && U(o, n), c[0] & 1024 && (x.disabled = a[10]);
          },
          d(a) {
            a && (y(e), y(x)), s && s.d(a), r = false, l();
          }
        };
      }
      function e8(t) {
        let e, x, n, o, r, l = t[18] && fn(t);
        return {
          c() {
            l && l.c(), e = w(), x = C("button"), n = N("Regenerate backup codes"), f(x, "class", "btn-outline-sm svelte-14v5vh2"), x.disabled = t[17];
          },
          m(s, a) {
            l && l.m(s, a), P(s, e, a), P(s, x, a), i(x, n), o || (r = G(x, "click", t[38]), o = true);
          },
          p(s, a) {
            s[18] ? l ? l.p(s, a) : (l = fn(s), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), a[0] & 131072 && (x.disabled = s[17]);
          },
          d(s) {
            s && (y(e), y(x)), l && l.d(s), o = false, r();
          }
        };
      }
      function x8(t) {
        let e, x, n, o, r, l, s, a = A0(t[19]), c = [];
        for (let u = 0; u < a.length; u += 1) c[u] = dn(cn(t, a, u));
        return {
          c() {
            e = C("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", x = w(), n = C("div");
            for (let u = 0; u < c.length; u += 1) c[u].c();
            o = w(), r = C("button"), r.textContent = "Done", f(e, "class", "hint warning svelte-14v5vh2"), f(n, "class", "backup-grid svelte-14v5vh2"), f(r, "class", "btn-outline-sm svelte-14v5vh2");
          },
          m(u, E) {
            P(u, e, E), P(u, x, E), P(u, n, E);
            for (let d = 0; d < c.length; d += 1) c[d] && c[d].m(n, null);
            P(u, o, E), P(u, r, E), l || (s = G(r, "click", t[33]), l = true);
          },
          p(u, E) {
            if (E[0] & 524288) {
              a = A0(u[19]);
              let d;
              for (d = 0; d < a.length; d += 1) {
                const F = cn(u, a, d);
                c[d] ? c[d].p(F, E) : (c[d] = dn(F), c[d].c(), c[d].m(n, null));
              }
              for (; d < c.length; d += 1) c[d].d(1);
              c.length = a.length;
            }
          },
          d(u) {
            u && (y(e), y(x), y(n), y(o), y(r)), q0(c, u), l = false, s();
          }
        };
      }
      function fn(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[18]), f(e, "class", "error svelte-14v5vh2");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 262144 && U(x, n[18]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function dn(t) {
        let e, x = t[43] + "", n;
        return {
          c() {
            e = C("code"), n = N(x), f(e, "class", "backup-code svelte-14v5vh2");
          },
          m(o, r) {
            P(o, e, r), i(e, n);
          },
          p(o, r) {
            r[0] & 524288 && x !== (x = o[43] + "") && U(n, x);
          },
          d(o) {
            o && y(e);
          }
        };
      }
      function Bn(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[15]), f(e, "class", "error svelte-14v5vh2");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 32768 && U(x, n[15]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function Cn(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[11]), f(e, "class", "error svelte-14v5vh2");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2048 && U(x, n[11]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function An(t) {
        let e, x = t[43] + "", n;
        return {
          c() {
            e = C("code"), n = N(x), f(e, "class", "backup-code svelte-14v5vh2");
          },
          m(o, r) {
            P(o, e, r), i(e, n);
          },
          p(o, r) {
            r[0] & 4096 && x !== (x = o[43] + "") && U(n, x);
          },
          d(o) {
            o && y(e);
          }
        };
      }
      function Fn(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[11]), f(e, "class", "error svelte-14v5vh2");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2048 && U(x, n[11]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function Dn(t) {
        let e, x, n, o, r, l, s, a, c, u = t[14] ? "Disabling\u2026" : "Yes, disable 2FA", E, d, F, B, A, D, p = t[15] && pn(t);
        return {
          c() {
            e = C("div"), x = C("div"), n = C("h2"), n.textContent = "Disable two-factor authentication?", o = w(), r = C("p"), r.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, l = w(), p && p.c(), s = w(), a = C("div"), c = C("button"), E = N(u), d = w(), F = C("button"), B = N("Cancel"), f(n, "id", "disable-title"), f(n, "class", "svelte-14v5vh2"), f(r, "class", "svelte-14v5vh2"), f(c, "class", "btn-danger svelte-14v5vh2"), c.disabled = t[14], f(F, "class", "btn-ghost svelte-14v5vh2"), F.disabled = t[14], f(a, "class", "dialog-actions svelte-14v5vh2"), f(x, "class", "dialog svelte-14v5vh2"), f(e, "class", "overlay svelte-14v5vh2"), f(e, "role", "dialog"), f(e, "aria-modal", "true"), f(e, "aria-labelledby", "disable-title");
          },
          m(h, _) {
            P(h, e, _), i(e, x), i(x, n), i(x, o), i(x, r), i(x, l), p && p.m(x, null), i(x, s), i(x, a), i(a, c), i(c, E), i(a, d), i(a, F), i(F, B), A || (D = [
              G(c, "click", t[29]),
              G(F, "click", t[40])
            ], A = true);
          },
          p(h, _) {
            h[15] ? p ? p.p(h, _) : (p = pn(h), p.c(), p.m(x, s)) : p && (p.d(1), p = null), _[0] & 16384 && u !== (u = h[14] ? "Disabling\u2026" : "Yes, disable 2FA") && U(E, u), _[0] & 16384 && (c.disabled = h[14]), _[0] & 16384 && (F.disabled = h[14]);
          },
          d(h) {
            h && y(e), p && p.d(), A = false, i0(D);
          }
        };
      }
      function pn(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[15]), f(e, "class", "error svelte-14v5vh2");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 32768 && U(x, n[15]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function mn(t) {
        let e, x, n, o, r, l, s, a, c, u = t[17] ? "Regenerating\u2026" : "Regenerate", E, d, F, B, A, D, p = t[18] && hn(t);
        return {
          c() {
            e = C("div"), x = C("div"), n = C("h2"), n.textContent = "Regenerate backup codes?", o = w(), r = C("p"), r.textContent = "All existing backup codes will be permanently invalidated.", l = w(), p && p.c(), s = w(), a = C("div"), c = C("button"), E = N(u), d = w(), F = C("button"), B = N("Cancel"), f(n, "id", "regen-title"), f(n, "class", "svelte-14v5vh2"), f(r, "class", "svelte-14v5vh2"), f(c, "class", "btn-primary svelte-14v5vh2"), c.disabled = t[17], f(F, "class", "btn-ghost svelte-14v5vh2"), F.disabled = t[17], f(a, "class", "dialog-actions svelte-14v5vh2"), f(x, "class", "dialog svelte-14v5vh2"), f(e, "class", "overlay svelte-14v5vh2"), f(e, "role", "dialog"), f(e, "aria-modal", "true"), f(e, "aria-labelledby", "regen-title");
          },
          m(h, _) {
            P(h, e, _), i(e, x), i(x, n), i(x, o), i(x, r), i(x, l), p && p.m(x, null), i(x, s), i(x, a), i(a, c), i(c, E), i(a, d), i(a, F), i(F, B), A || (D = [
              G(c, "click", t[32]),
              G(F, "click", t[41])
            ], A = true);
          },
          p(h, _) {
            h[18] ? p ? p.p(h, _) : (p = hn(h), p.c(), p.m(x, s)) : p && (p.d(1), p = null), _[0] & 131072 && u !== (u = h[17] ? "Regenerating\u2026" : "Regenerate") && U(E, u), _[0] & 131072 && (c.disabled = h[17]), _[0] & 131072 && (F.disabled = h[17]);
          },
          d(h) {
            h && y(e), p && p.d(), A = false, i0(D);
          }
        };
      }
      function hn(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[18]), f(e, "class", "error svelte-14v5vh2");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 262144 && U(x, n[18]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function t8(t) {
        let e, x, n, o, r, l, s, a, c;
        e = new K0({});
        function u(A, D) {
          return A[0] ? qa : A[1] ? Oa : A[6] === "scan" ? Ra : A[6] === "codes" ? ja : Na;
        }
        let E = u(t), d = E(t), F = t[13] && Dn(t), B = t[16] && mn(t);
        return {
          c() {
            y0(e.$$.fragment), x = w(), n = C("main"), o = C("h1"), o.textContent = "Settings", r = w(), d.c(), l = w(), F && F.c(), s = w(), B && B.c(), a = M0(), f(o, "class", "svelte-14v5vh2"), f(n, "class", "svelte-14v5vh2");
          },
          m(A, D) {
            k0(e, A, D), P(A, x, D), P(A, n, D), i(n, o), i(n, r), d.m(n, null), P(A, l, D), F && F.m(A, D), P(A, s, D), B && B.m(A, D), P(A, a, D), c = true;
          },
          p(A, D) {
            E === (E = u(A)) && d ? d.p(A, D) : (d.d(1), d = E(A), d && (d.c(), d.m(n, null))), A[13] ? F ? F.p(A, D) : (F = Dn(A), F.c(), F.m(s.parentNode, s)) : F && (F.d(1), F = null), A[16] ? B ? B.p(A, D) : (B = mn(A), B.c(), B.m(a.parentNode, a)) : B && (B.d(1), B = null);
          },
          i(A) {
            c || (F0(e.$$.fragment, A), c = true);
          },
          o(A) {
            D0(e.$$.fragment, A), c = false;
          },
          d(A) {
            A && (y(x), y(n), y(l), y(s), y(a)), b0(e, A), d.d(), F && F.d(A), B && B.d(A);
          }
        };
      }
      function n8(t, e, x) {
        let n;
        We(t, oo, (Y) => x(24, n = Y));
        let o = true, r = null, l = "", s = false, a = false, c = 0, u = "idle", E = "", d = "", F = "", B = false, A = null, D = [], p = false, h = false, _ = null, m = false, v = false, k = null, b = [];
        T0(async () => {
          if (!I0()) {
            B0("/");
            return;
          }
          await g();
        });
        async function g() {
          x(0, o = true), x(1, r = null);
          try {
            const [Y, x0, f0] = await Promise.all([
              jx(),
              yl(),
              Il().catch(() => ({
                remaining: 0
              }))
            ]);
            x(2, l = Y.email), x(3, s = Y.verified), Ce.set(Y.verified), x(4, a = x0.enabled), x(5, c = f0.remaining);
          } catch (Y) {
            x(1, r = Y.message);
          } finally {
            x(0, o = false);
          }
        }
        async function T() {
          x(11, A = null), x(10, B = true);
          try {
            const { secret: Y, uri: x0 } = await Pl();
            x(7, E = Y), x(8, d = await xe.toDataURL(x0, {
              width: 200,
              margin: 1
            })), x(6, u = "scan");
          } catch (Y) {
            x(11, A = Y.message);
          } finally {
            x(10, B = false);
          }
        }
        async function I() {
          x(11, A = null), x(10, B = true);
          try {
            const { backup_codes: Y } = await Tl(E, F);
            x(12, D = Y), x(6, u = "codes");
          } catch (Y) {
            x(11, A = Y.message);
          } finally {
            x(10, B = false);
          }
        }
        function M() {
          x(4, a = true), x(5, c = D.length), x(6, u = "idle"), x(7, E = ""), x(8, d = ""), x(9, F = ""), x(12, D = []);
        }
        function S() {
          x(6, u = "idle"), x(7, E = ""), x(8, d = ""), x(9, F = ""), x(11, A = null), x(12, D = []);
        }
        async function j() {
          x(15, _ = null), x(14, h = true);
          try {
            await Sl(), x(4, a = false), x(5, c = 0), x(13, p = false);
          } catch (Y) {
            x(15, _ = Y.message);
          } finally {
            x(14, h = false);
          }
        }
        let L = "idle", R = "", q = "", H = null;
        async function Z() {
          if (x(23, H = null), !/^\d{6}$/.test(R)) {
            x(23, H = "PIN must be exactly 6 digits.");
            return;
          }
          if (R !== q) {
            x(23, H = "PINs do not match.");
            return;
          }
          x(20, L = "exporting");
          try {
            const Y = await Ia(R), x0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), f0 = `${La}-${x0}.enc`, E0 = new Blob([
              Y
            ], {
              type: "application/octet-stream"
            }), $ = URL.createObjectURL(E0), l0 = document.createElement("a");
            l0.href = $, l0.download = f0, l0.click(), URL.revokeObjectURL($), x(20, L = "done");
          } catch (Y) {
            x(23, H = Y.message), x(20, L = "error");
          }
        }
        function Q() {
          x(20, L = "idle"), x(21, R = ""), x(22, q = ""), x(23, H = null);
        }
        async function K() {
          x(18, k = null), x(17, v = true);
          try {
            const { backup_codes: Y } = await Ml();
            x(19, b = Y), x(5, c = Y.length), x(16, m = false);
          } catch (Y) {
            x(18, k = Y.message);
          } finally {
            x(17, v = false);
          }
        }
        function O() {
          x(19, b = []);
        }
        function W() {
          F = this.value, x(9, F);
        }
        const e0 = () => x(20, L = "entering_pin");
        function z() {
          R = this.value, x(21, R);
        }
        function r0() {
          q = this.value, x(22, q);
        }
        return [
          o,
          r,
          l,
          s,
          a,
          c,
          u,
          E,
          d,
          F,
          B,
          A,
          D,
          p,
          h,
          _,
          m,
          v,
          k,
          b,
          L,
          R,
          q,
          H,
          n,
          T,
          I,
          M,
          S,
          j,
          Z,
          Q,
          K,
          O,
          W,
          e0,
          z,
          r0,
          () => {
            x(16, m = true);
          },
          () => {
            x(13, p = true);
          },
          () => {
            x(13, p = false), x(15, _ = null);
          },
          () => {
            x(16, m = false), x(18, k = null);
          }
        ];
      }
      class o8 extends v0 {
        constructor(e) {
          super(), h0(this, e, n8, t8, m0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      var go = {
        exports: {}
      };
      (function(t, e) {
        (function(n, o) {
          t.exports = o();
        })(typeof self < "u" ? self : I9, function() {
          return function(x) {
            var n = {};
            function o(r) {
              if (n[r]) return n[r].exports;
              var l = n[r] = {
                i: r,
                l: false,
                exports: {}
              };
              return x[r].call(l.exports, l, l.exports, o), l.l = true, l.exports;
            }
            return o.m = x, o.c = n, o.d = function(r, l, s) {
              o.o(r, l) || Object.defineProperty(r, l, {
                configurable: false,
                enumerable: true,
                get: s
              });
            }, o.n = function(r) {
              var l = r && r.__esModule ? function() {
                return r.default;
              } : function() {
                return r;
              };
              return o.d(l, "a", l), l;
            }, o.o = function(r, l) {
              return Object.prototype.hasOwnProperty.call(r, l);
            }, o.p = "", o(o.s = 3);
          }([
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = function() {
                function l(s, a) {
                  this.width = a, this.height = s.length / a, this.data = s;
                }
                return l.createEmpty = function(s, a) {
                  return new l(new Uint8ClampedArray(s * a), s);
                }, l.prototype.get = function(s, a) {
                  return s < 0 || s >= this.width || a < 0 || a >= this.height ? false : !!this.data[a * this.width + s];
                }, l.prototype.set = function(s, a, c) {
                  this.data[a * this.width + s] = c ? 1 : 0;
                }, l.prototype.setRegion = function(s, a, c, u, E) {
                  for (var d = a; d < a + u; d++) for (var F = s; F < s + c; F++) this.set(F, d, !!E);
                }, l;
              }();
              n.BitMatrix = r;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(2);
              function l(a, c) {
                return a ^ c;
              }
              n.addOrSubtractGF = l;
              var s = function() {
                function a(c, u, E) {
                  this.primitive = c, this.size = u, this.generatorBase = E, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                  for (var d = 1, F = 0; F < this.size; F++) this.expTable[F] = d, d = d * 2, d >= this.size && (d = (d ^ this.primitive) & this.size - 1);
                  for (var F = 0; F < this.size - 1; F++) this.logTable[this.expTable[F]] = F;
                  this.zero = new r.default(this, Uint8ClampedArray.from([
                    0
                  ])), this.one = new r.default(this, Uint8ClampedArray.from([
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
                  var E = new Uint8ClampedArray(c + 1);
                  return E[0] = u, new r.default(this, E);
                }, a.prototype.log = function(c) {
                  if (c === 0) throw new Error("Can't take log(0)");
                  return this.logTable[c];
                }, a.prototype.exp = function(c) {
                  return this.expTable[c];
                }, a;
              }();
              n.default = s;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(1), l = function() {
                function s(a, c) {
                  if (c.length === 0) throw new Error("No coefficients.");
                  this.field = a;
                  var u = c.length;
                  if (u > 1 && c[0] === 0) {
                    for (var E = 1; E < u && c[E] === 0; ) E++;
                    if (E === u) this.coefficients = a.zero.coefficients;
                    else {
                      this.coefficients = new Uint8ClampedArray(u - E);
                      for (var d = 0; d < this.coefficients.length; d++) this.coefficients[d] = c[E + d];
                    }
                  } else this.coefficients = c;
                }
                return s.prototype.degree = function() {
                  return this.coefficients.length - 1;
                }, s.prototype.isZero = function() {
                  return this.coefficients[0] === 0;
                }, s.prototype.getCoefficient = function(a) {
                  return this.coefficients[this.coefficients.length - 1 - a];
                }, s.prototype.addOrSubtract = function(a) {
                  var c;
                  if (this.isZero()) return a;
                  if (a.isZero()) return this;
                  var u = this.coefficients, E = a.coefficients;
                  u.length > E.length && (c = [
                    E,
                    u
                  ], u = c[0], E = c[1]);
                  for (var d = new Uint8ClampedArray(E.length), F = E.length - u.length, B = 0; B < F; B++) d[B] = E[B];
                  for (var B = F; B < E.length; B++) d[B] = r.addOrSubtractGF(u[B - F], E[B]);
                  return new s(this.field, d);
                }, s.prototype.multiply = function(a) {
                  if (a === 0) return this.field.zero;
                  if (a === 1) return this;
                  for (var c = this.coefficients.length, u = new Uint8ClampedArray(c), E = 0; E < c; E++) u[E] = this.field.multiply(this.coefficients[E], a);
                  return new s(this.field, u);
                }, s.prototype.multiplyPoly = function(a) {
                  if (this.isZero() || a.isZero()) return this.field.zero;
                  for (var c = this.coefficients, u = c.length, E = a.coefficients, d = E.length, F = new Uint8ClampedArray(u + d - 1), B = 0; B < u; B++) for (var A = c[B], D = 0; D < d; D++) F[B + D] = r.addOrSubtractGF(F[B + D], this.field.multiply(A, E[D]));
                  return new s(this.field, F);
                }, s.prototype.multiplyByMonomial = function(a, c) {
                  if (a < 0) throw new Error("Invalid degree less than 0");
                  if (c === 0) return this.field.zero;
                  for (var u = this.coefficients.length, E = new Uint8ClampedArray(u + a), d = 0; d < u; d++) E[d] = this.field.multiply(this.coefficients[d], c);
                  return new s(this.field, E);
                }, s.prototype.evaluateAt = function(a) {
                  var c = 0;
                  if (a === 0) return this.getCoefficient(0);
                  var u = this.coefficients.length;
                  if (a === 1) return this.coefficients.forEach(function(d) {
                    c = r.addOrSubtractGF(c, d);
                  }), c;
                  c = this.coefficients[0];
                  for (var E = 1; E < u; E++) c = r.addOrSubtractGF(this.field.multiply(a, c), this.coefficients[E]);
                  return c;
                }, s;
              }();
              n.default = l;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(4), l = o(5), s = o(11), a = o(12);
              function c(d) {
                var F = a.locate(d);
                if (!F) return null;
                for (var B = 0, A = F; B < A.length; B++) {
                  var D = A[B], p = s.extract(d, D), h = l.decode(p.matrix);
                  if (h) return {
                    binaryData: h.bytes,
                    data: h.text,
                    chunks: h.chunks,
                    version: h.version,
                    location: {
                      topRightCorner: p.mappingFunction(D.dimension, 0),
                      topLeftCorner: p.mappingFunction(0, 0),
                      bottomRightCorner: p.mappingFunction(D.dimension, D.dimension),
                      bottomLeftCorner: p.mappingFunction(0, D.dimension),
                      topRightFinderPattern: D.topRight,
                      topLeftFinderPattern: D.topLeft,
                      bottomLeftFinderPattern: D.bottomLeft,
                      bottomRightAlignmentPattern: D.alignmentPattern
                    }
                  };
                }
                return null;
              }
              var u = {
                inversionAttempts: "attemptBoth"
              };
              function E(d, F, B, A) {
                A === void 0 && (A = {});
                var D = u;
                Object.keys(D || {}).forEach(function(b) {
                  D[b] = A[b] || D[b];
                });
                var p = D.inversionAttempts === "attemptBoth" || D.inversionAttempts === "invertFirst", h = D.inversionAttempts === "onlyInvert" || D.inversionAttempts === "invertFirst", _ = r.binarize(d, F, B, p), m = _.binarized, v = _.inverted, k = c(h ? v : m);
                return !k && (D.inversionAttempts === "attemptBoth" || D.inversionAttempts === "invertFirst") && (k = c(h ? m : v)), k;
              }
              E.default = E, n.default = E;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(0), l = 8, s = 24;
              function a(E, d, F) {
                return E < d ? d : E > F ? F : E;
              }
              var c = function() {
                function E(d, F) {
                  this.width = d, this.data = new Uint8ClampedArray(d * F);
                }
                return E.prototype.get = function(d, F) {
                  return this.data[F * this.width + d];
                }, E.prototype.set = function(d, F, B) {
                  this.data[F * this.width + d] = B;
                }, E;
              }();
              function u(E, d, F, B) {
                if (E.length !== d * F * 4) throw new Error("Malformed data passed to binarizer.");
                for (var A = new c(d, F), D = 0; D < d; D++) for (var p = 0; p < F; p++) {
                  var h = E[(p * d + D) * 4 + 0], _ = E[(p * d + D) * 4 + 1], m = E[(p * d + D) * 4 + 2];
                  A.set(D, p, 0.2126 * h + 0.7152 * _ + 0.0722 * m);
                }
                for (var v = Math.ceil(d / l), k = Math.ceil(F / l), b = new c(v, k), g = 0; g < k; g++) for (var T = 0; T < v; T++) {
                  for (var I = 0, M = 1 / 0, S = 0, p = 0; p < l; p++) for (var D = 0; D < l; D++) {
                    var j = A.get(T * l + D, g * l + p);
                    I += j, M = Math.min(M, j), S = Math.max(S, j);
                  }
                  var L = I / Math.pow(l, 2);
                  if (S - M <= s && (L = M / 2, g > 0 && T > 0)) {
                    var R = (b.get(T, g - 1) + 2 * b.get(T - 1, g) + b.get(T - 1, g - 1)) / 4;
                    M < R && (L = R);
                  }
                  b.set(T, g, L);
                }
                var q = r.BitMatrix.createEmpty(d, F), H = null;
                B && (H = r.BitMatrix.createEmpty(d, F));
                for (var g = 0; g < k; g++) for (var T = 0; T < v; T++) {
                  for (var Z = a(T, 2, v - 3), Q = a(g, 2, k - 3), I = 0, K = -2; K <= 2; K++) for (var O = -2; O <= 2; O++) I += b.get(Z + K, Q + O);
                  for (var W = I / 25, K = 0; K < l; K++) for (var O = 0; O < l; O++) {
                    var D = T * l + K, p = g * l + O, e0 = A.get(D, p);
                    q.set(D, p, e0 <= W), B && H.set(D, p, !(e0 <= W));
                  }
                }
                return B ? {
                  binarized: q,
                  inverted: H
                } : {
                  binarized: q
                };
              }
              n.binarize = u;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(0), l = o(6), s = o(9), a = o(10);
              function c(m, v) {
                for (var k = m ^ v, b = 0; k; ) b++, k &= k - 1;
                return b;
              }
              function u(m, v) {
                return v << 1 | m;
              }
              var E = [
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
              ], d = [
                function(m) {
                  return (m.y + m.x) % 2 === 0;
                },
                function(m) {
                  return m.y % 2 === 0;
                },
                function(m) {
                  return m.x % 3 === 0;
                },
                function(m) {
                  return (m.y + m.x) % 3 === 0;
                },
                function(m) {
                  return (Math.floor(m.y / 2) + Math.floor(m.x / 3)) % 2 === 0;
                },
                function(m) {
                  return m.x * m.y % 2 + m.x * m.y % 3 === 0;
                },
                function(m) {
                  return (m.y * m.x % 2 + m.y * m.x % 3) % 2 === 0;
                },
                function(m) {
                  return ((m.y + m.x) % 2 + m.y * m.x % 3) % 2 === 0;
                }
              ];
              function F(m) {
                var v = 17 + 4 * m.versionNumber, k = r.BitMatrix.createEmpty(v, v);
                k.setRegion(0, 0, 9, 9, true), k.setRegion(v - 8, 0, 8, 9, true), k.setRegion(0, v - 8, 9, 8, true);
                for (var b = 0, g = m.alignmentPatternCenters; b < g.length; b++) for (var T = g[b], I = 0, M = m.alignmentPatternCenters; I < M.length; I++) {
                  var S = M[I];
                  T === 6 && S === 6 || T === 6 && S === v - 7 || T === v - 7 && S === 6 || k.setRegion(T - 2, S - 2, 5, 5, true);
                }
                return k.setRegion(6, 9, 1, v - 17, true), k.setRegion(9, 6, v - 17, 1, true), m.versionNumber > 6 && (k.setRegion(v - 11, 0, 3, 6, true), k.setRegion(0, v - 11, 6, 3, true)), k;
              }
              function B(m, v, k) {
                for (var b = d[k.dataMask], g = m.height, T = F(v), I = [], M = 0, S = 0, j = true, L = g - 1; L > 0; L -= 2) {
                  L === 6 && L--;
                  for (var R = 0; R < g; R++) for (var q = j ? g - 1 - R : R, H = 0; H < 2; H++) {
                    var Z = L - H;
                    if (!T.get(Z, q)) {
                      S++;
                      var Q = m.get(Z, q);
                      b({
                        y: q,
                        x: Z
                      }) && (Q = !Q), M = u(Q, M), S === 8 && (I.push(M), S = 0, M = 0);
                    }
                  }
                  j = !j;
                }
                return I;
              }
              function A(m) {
                var v = m.height, k = Math.floor((v - 17) / 4);
                if (k <= 6) return a.VERSIONS[k - 1];
                for (var b = 0, g = 5; g >= 0; g--) for (var T = v - 9; T >= v - 11; T--) b = u(m.get(T, g), b);
                for (var I = 0, T = 5; T >= 0; T--) for (var g = v - 9; g >= v - 11; g--) I = u(m.get(T, g), I);
                for (var M = 1 / 0, S, j = 0, L = a.VERSIONS; j < L.length; j++) {
                  var R = L[j];
                  if (R.infoBits === b || R.infoBits === I) return R;
                  var q = c(b, R.infoBits);
                  q < M && (S = R, M = q), q = c(I, R.infoBits), q < M && (S = R, M = q);
                }
                if (M <= 3) return S;
              }
              function D(m) {
                for (var v = 0, k = 0; k <= 8; k++) k !== 6 && (v = u(m.get(k, 8), v));
                for (var b = 7; b >= 0; b--) b !== 6 && (v = u(m.get(8, b), v));
                for (var g = m.height, T = 0, b = g - 1; b >= g - 7; b--) T = u(m.get(8, b), T);
                for (var k = g - 8; k < g; k++) T = u(m.get(k, 8), T);
                for (var I = 1 / 0, M = null, S = 0, j = E; S < j.length; S++) {
                  var L = j[S], R = L.bits, q = L.formatInfo;
                  if (R === v || R === T) return q;
                  var H = c(v, R);
                  H < I && (M = q, I = H), v !== T && (H = c(T, R), H < I && (M = q, I = H));
                }
                return I <= 3 ? M : null;
              }
              function p(m, v, k) {
                var b = v.errorCorrectionLevels[k], g = [], T = 0;
                if (b.ecBlocks.forEach(function(Q) {
                  for (var K = 0; K < Q.numBlocks; K++) g.push({
                    numDataCodewords: Q.dataCodewordsPerBlock,
                    codewords: []
                  }), T += Q.dataCodewordsPerBlock + b.ecCodewordsPerBlock;
                }), m.length < T) return null;
                m = m.slice(0, T);
                for (var I = b.ecBlocks[0].dataCodewordsPerBlock, M = 0; M < I; M++) for (var S = 0, j = g; S < j.length; S++) {
                  var L = j[S];
                  L.codewords.push(m.shift());
                }
                if (b.ecBlocks.length > 1) for (var R = b.ecBlocks[0].numBlocks, q = b.ecBlocks[1].numBlocks, M = 0; M < q; M++) g[R + M].codewords.push(m.shift());
                for (; m.length > 0; ) for (var H = 0, Z = g; H < Z.length; H++) {
                  var L = Z[H];
                  L.codewords.push(m.shift());
                }
                return g;
              }
              function h(m) {
                var v = A(m);
                if (!v) return null;
                var k = D(m);
                if (!k) return null;
                var b = B(m, v, k), g = p(b, v, k.errorCorrectionLevel);
                if (!g) return null;
                for (var T = g.reduce(function(H, Z) {
                  return H + Z.numDataCodewords;
                }, 0), I = new Uint8ClampedArray(T), M = 0, S = 0, j = g; S < j.length; S++) {
                  var L = j[S], R = s.decode(L.codewords, L.codewords.length - L.numDataCodewords);
                  if (!R) return null;
                  for (var q = 0; q < L.numDataCodewords; q++) I[M++] = R[q];
                }
                try {
                  return l.decode(I, v.versionNumber);
                } catch {
                  return null;
                }
              }
              function _(m) {
                if (m == null) return null;
                var v = h(m);
                if (v) return v;
                for (var k = 0; k < m.width; k++) for (var b = k + 1; b < m.height; b++) m.get(k, b) !== m.get(b, k) && (m.set(k, b, !m.get(k, b)), m.set(b, k, !m.get(b, k)));
                return h(m);
              }
              n.decode = _;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(7), l = o(8), s;
              (function(A) {
                A.Numeric = "numeric", A.Alphanumeric = "alphanumeric", A.Byte = "byte", A.Kanji = "kanji", A.ECI = "eci";
              })(s = n.Mode || (n.Mode = {}));
              var a;
              (function(A) {
                A[A.Terminator = 0] = "Terminator", A[A.Numeric = 1] = "Numeric", A[A.Alphanumeric = 2] = "Alphanumeric", A[A.Byte = 4] = "Byte", A[A.Kanji = 8] = "Kanji", A[A.ECI = 7] = "ECI";
              })(a || (a = {}));
              function c(A, D) {
                for (var p = [], h = "", _ = [
                  10,
                  12,
                  14
                ][D], m = A.readBits(_); m >= 3; ) {
                  var v = A.readBits(10);
                  if (v >= 1e3) throw new Error("Invalid numeric value above 999");
                  var k = Math.floor(v / 100), b = Math.floor(v / 10) % 10, g = v % 10;
                  p.push(48 + k, 48 + b, 48 + g), h += k.toString() + b.toString() + g.toString(), m -= 3;
                }
                if (m === 2) {
                  var v = A.readBits(7);
                  if (v >= 100) throw new Error("Invalid numeric value above 99");
                  var k = Math.floor(v / 10), b = v % 10;
                  p.push(48 + k, 48 + b), h += k.toString() + b.toString();
                } else if (m === 1) {
                  var v = A.readBits(4);
                  if (v >= 10) throw new Error("Invalid numeric value above 9");
                  p.push(48 + v), h += v.toString();
                }
                return {
                  bytes: p,
                  text: h
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
              function E(A, D) {
                for (var p = [], h = "", _ = [
                  9,
                  11,
                  13
                ][D], m = A.readBits(_); m >= 2; ) {
                  var v = A.readBits(11), k = Math.floor(v / 45), b = v % 45;
                  p.push(u[k].charCodeAt(0), u[b].charCodeAt(0)), h += u[k] + u[b], m -= 2;
                }
                if (m === 1) {
                  var k = A.readBits(6);
                  p.push(u[k].charCodeAt(0)), h += u[k];
                }
                return {
                  bytes: p,
                  text: h
                };
              }
              function d(A, D) {
                for (var p = [], h = "", _ = [
                  8,
                  16,
                  16
                ][D], m = A.readBits(_), v = 0; v < m; v++) {
                  var k = A.readBits(8);
                  p.push(k);
                }
                try {
                  h += decodeURIComponent(p.map(function(b) {
                    return "%" + ("0" + b.toString(16)).substr(-2);
                  }).join(""));
                } catch {
                }
                return {
                  bytes: p,
                  text: h
                };
              }
              function F(A, D) {
                for (var p = [], h = "", _ = [
                  8,
                  10,
                  12
                ][D], m = A.readBits(_), v = 0; v < m; v++) {
                  var k = A.readBits(13), b = Math.floor(k / 192) << 8 | k % 192;
                  b < 7936 ? b += 33088 : b += 49472, p.push(b >> 8, b & 255), h += String.fromCharCode(l.shiftJISTable[b]);
                }
                return {
                  bytes: p,
                  text: h
                };
              }
              function B(A, D) {
                for (var p, h, _, m, v = new r.BitStream(A), k = D <= 9 ? 0 : D <= 26 ? 1 : 2, b = {
                  text: "",
                  bytes: [],
                  chunks: [],
                  version: D
                }; v.available() >= 4; ) {
                  var g = v.readBits(4);
                  if (g === a.Terminator) return b;
                  if (g === a.ECI) v.readBits(1) === 0 ? b.chunks.push({
                    type: s.ECI,
                    assignmentNumber: v.readBits(7)
                  }) : v.readBits(1) === 0 ? b.chunks.push({
                    type: s.ECI,
                    assignmentNumber: v.readBits(14)
                  }) : v.readBits(1) === 0 ? b.chunks.push({
                    type: s.ECI,
                    assignmentNumber: v.readBits(21)
                  }) : b.chunks.push({
                    type: s.ECI,
                    assignmentNumber: -1
                  });
                  else if (g === a.Numeric) {
                    var T = c(v, k);
                    b.text += T.text, (p = b.bytes).push.apply(p, T.bytes), b.chunks.push({
                      type: s.Numeric,
                      text: T.text
                    });
                  } else if (g === a.Alphanumeric) {
                    var I = E(v, k);
                    b.text += I.text, (h = b.bytes).push.apply(h, I.bytes), b.chunks.push({
                      type: s.Alphanumeric,
                      text: I.text
                    });
                  } else if (g === a.Byte) {
                    var M = d(v, k);
                    b.text += M.text, (_ = b.bytes).push.apply(_, M.bytes), b.chunks.push({
                      type: s.Byte,
                      bytes: M.bytes,
                      text: M.text
                    });
                  } else if (g === a.Kanji) {
                    var S = F(v, k);
                    b.text += S.text, (m = b.bytes).push.apply(m, S.bytes), b.chunks.push({
                      type: s.Kanji,
                      bytes: S.bytes,
                      text: S.text
                    });
                  }
                }
                if (v.available() === 0 || v.readBits(v.available()) === 0) return b;
              }
              n.decode = B;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = function() {
                function l(s) {
                  this.byteOffset = 0, this.bitOffset = 0, this.bytes = s;
                }
                return l.prototype.readBits = function(s) {
                  if (s < 1 || s > 32 || s > this.available()) throw new Error("Cannot read " + s.toString() + " bits");
                  var a = 0;
                  if (this.bitOffset > 0) {
                    var c = 8 - this.bitOffset, u = s < c ? s : c, E = c - u, d = 255 >> 8 - u << E;
                    a = (this.bytes[this.byteOffset] & d) >> E, s -= u, this.bitOffset += u, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                  }
                  if (s > 0) {
                    for (; s >= 8; ) a = a << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, s -= 8;
                    if (s > 0) {
                      var E = 8 - s, d = 255 >> E << E;
                      a = a << s | (this.bytes[this.byteOffset] & d) >> E, this.bitOffset += s;
                    }
                  }
                  return a;
                }, l.prototype.available = function() {
                  return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
                }, l;
              }();
              n.BitStream = r;
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
              var r = o(1), l = o(2);
              function s(E, d, F, B) {
                var A;
                d.degree() < F.degree() && (A = [
                  F,
                  d
                ], d = A[0], F = A[1]);
                for (var D = d, p = F, h = E.zero, _ = E.one; p.degree() >= B / 2; ) {
                  var m = D, v = h;
                  if (D = p, h = _, D.isZero()) return null;
                  p = m;
                  for (var k = E.zero, b = D.getCoefficient(D.degree()), g = E.inverse(b); p.degree() >= D.degree() && !p.isZero(); ) {
                    var T = p.degree() - D.degree(), I = E.multiply(p.getCoefficient(p.degree()), g);
                    k = k.addOrSubtract(E.buildMonomial(T, I)), p = p.addOrSubtract(D.multiplyByMonomial(T, I));
                  }
                  if (_ = k.multiplyPoly(h).addOrSubtract(v), p.degree() >= D.degree()) return null;
                }
                var M = _.getCoefficient(0);
                if (M === 0) return null;
                var S = E.inverse(M);
                return [
                  _.multiply(S),
                  p.multiply(S)
                ];
              }
              function a(E, d) {
                var F = d.degree();
                if (F === 1) return [
                  d.getCoefficient(1)
                ];
                for (var B = new Array(F), A = 0, D = 1; D < E.size && A < F; D++) d.evaluateAt(D) === 0 && (B[A] = E.inverse(D), A++);
                return A !== F ? null : B;
              }
              function c(E, d, F) {
                for (var B = F.length, A = new Array(B), D = 0; D < B; D++) {
                  for (var p = E.inverse(F[D]), h = 1, _ = 0; _ < B; _++) D !== _ && (h = E.multiply(h, r.addOrSubtractGF(1, E.multiply(F[_], p))));
                  A[D] = E.multiply(d.evaluateAt(p), E.inverse(h)), E.generatorBase !== 0 && (A[D] = E.multiply(A[D], p));
                }
                return A;
              }
              function u(E, d) {
                var F = new Uint8ClampedArray(E.length);
                F.set(E);
                for (var B = new r.default(285, 256, 0), A = new l.default(B, F), D = new Uint8ClampedArray(d), p = false, h = 0; h < d; h++) {
                  var _ = A.evaluateAt(B.exp(h + B.generatorBase));
                  D[D.length - 1 - h] = _, _ !== 0 && (p = true);
                }
                if (!p) return F;
                var m = new l.default(B, D), v = s(B, B.buildMonomial(d, 1), m, d);
                if (v === null) return null;
                var k = a(B, v[0]);
                if (k == null) return null;
                for (var b = c(B, v[1], k), g = 0; g < k.length; g++) {
                  var T = F.length - 1 - B.log(k[g]);
                  if (T < 0) return null;
                  F[T] = r.addOrSubtractGF(F[T], b[g]);
                }
                return F;
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
              var r = o(0);
              function l(u, E, d, F) {
                var B = u.x - E.x + d.x - F.x, A = u.y - E.y + d.y - F.y;
                if (B === 0 && A === 0) return {
                  a11: E.x - u.x,
                  a12: E.y - u.y,
                  a13: 0,
                  a21: d.x - E.x,
                  a22: d.y - E.y,
                  a23: 0,
                  a31: u.x,
                  a32: u.y,
                  a33: 1
                };
                var D = E.x - d.x, p = F.x - d.x, h = E.y - d.y, _ = F.y - d.y, m = D * _ - p * h, v = (B * _ - p * A) / m, k = (D * A - B * h) / m;
                return {
                  a11: E.x - u.x + v * E.x,
                  a12: E.y - u.y + v * E.y,
                  a13: v,
                  a21: F.x - u.x + k * F.x,
                  a22: F.y - u.y + k * F.y,
                  a23: k,
                  a31: u.x,
                  a32: u.y,
                  a33: 1
                };
              }
              function s(u, E, d, F) {
                var B = l(u, E, d, F);
                return {
                  a11: B.a22 * B.a33 - B.a23 * B.a32,
                  a12: B.a13 * B.a32 - B.a12 * B.a33,
                  a13: B.a12 * B.a23 - B.a13 * B.a22,
                  a21: B.a23 * B.a31 - B.a21 * B.a33,
                  a22: B.a11 * B.a33 - B.a13 * B.a31,
                  a23: B.a13 * B.a21 - B.a11 * B.a23,
                  a31: B.a21 * B.a32 - B.a22 * B.a31,
                  a32: B.a12 * B.a31 - B.a11 * B.a32,
                  a33: B.a11 * B.a22 - B.a12 * B.a21
                };
              }
              function a(u, E) {
                return {
                  a11: u.a11 * E.a11 + u.a21 * E.a12 + u.a31 * E.a13,
                  a12: u.a12 * E.a11 + u.a22 * E.a12 + u.a32 * E.a13,
                  a13: u.a13 * E.a11 + u.a23 * E.a12 + u.a33 * E.a13,
                  a21: u.a11 * E.a21 + u.a21 * E.a22 + u.a31 * E.a23,
                  a22: u.a12 * E.a21 + u.a22 * E.a22 + u.a32 * E.a23,
                  a23: u.a13 * E.a21 + u.a23 * E.a22 + u.a33 * E.a23,
                  a31: u.a11 * E.a31 + u.a21 * E.a32 + u.a31 * E.a33,
                  a32: u.a12 * E.a31 + u.a22 * E.a32 + u.a32 * E.a33,
                  a33: u.a13 * E.a31 + u.a23 * E.a32 + u.a33 * E.a33
                };
              }
              function c(u, E) {
                for (var d = s({
                  x: 3.5,
                  y: 3.5
                }, {
                  x: E.dimension - 3.5,
                  y: 3.5
                }, {
                  x: E.dimension - 6.5,
                  y: E.dimension - 6.5
                }, {
                  x: 3.5,
                  y: E.dimension - 3.5
                }), F = l(E.topLeft, E.topRight, E.alignmentPattern, E.bottomLeft), B = a(F, d), A = r.BitMatrix.createEmpty(E.dimension, E.dimension), D = function(k, b) {
                  var g = B.a13 * k + B.a23 * b + B.a33;
                  return {
                    x: (B.a11 * k + B.a21 * b + B.a31) / g,
                    y: (B.a12 * k + B.a22 * b + B.a32) / g
                  };
                }, p = 0; p < E.dimension; p++) for (var h = 0; h < E.dimension; h++) {
                  var _ = h + 0.5, m = p + 0.5, v = D(_, m);
                  A.set(h, p, u.get(Math.floor(v.x), Math.floor(v.y)));
                }
                return {
                  matrix: A,
                  mappingFunction: D
                };
              }
              n.extract = c;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = 4, l = 0.5, s = 1.5, a = function(_, m) {
                return Math.sqrt(Math.pow(m.x - _.x, 2) + Math.pow(m.y - _.y, 2));
              };
              function c(_) {
                return _.reduce(function(m, v) {
                  return m + v;
                });
              }
              function u(_, m, v) {
                var k, b, g, T, I = a(_, m), M = a(m, v), S = a(_, v), j, L, R;
                return M >= I && M >= S ? (k = [
                  m,
                  _,
                  v
                ], j = k[0], L = k[1], R = k[2]) : S >= M && S >= I ? (b = [
                  _,
                  m,
                  v
                ], j = b[0], L = b[1], R = b[2]) : (g = [
                  _,
                  v,
                  m
                ], j = g[0], L = g[1], R = g[2]), (R.x - L.x) * (j.y - L.y) - (R.y - L.y) * (j.x - L.x) < 0 && (T = [
                  R,
                  j
                ], j = T[0], R = T[1]), {
                  bottomLeft: j,
                  topLeft: L,
                  topRight: R
                };
              }
              function E(_, m, v, k) {
                var b = (c(F(_, v, k, 5)) / 7 + c(F(_, m, k, 5)) / 7 + c(F(v, _, k, 5)) / 7 + c(F(m, _, k, 5)) / 7) / 4;
                if (b < 1) throw new Error("Invalid module size");
                var g = Math.round(a(_, m) / b), T = Math.round(a(_, v) / b), I = Math.floor((g + T) / 2) + 7;
                switch (I % 4) {
                  case 0:
                    I++;
                    break;
                  case 2:
                    I--;
                    break;
                }
                return {
                  dimension: I,
                  moduleSize: b
                };
              }
              function d(_, m, v, k) {
                var b = [
                  {
                    x: Math.floor(_.x),
                    y: Math.floor(_.y)
                  }
                ], g = Math.abs(m.y - _.y) > Math.abs(m.x - _.x), T, I, M, S;
                g ? (T = Math.floor(_.y), I = Math.floor(_.x), M = Math.floor(m.y), S = Math.floor(m.x)) : (T = Math.floor(_.x), I = Math.floor(_.y), M = Math.floor(m.x), S = Math.floor(m.y));
                for (var j = Math.abs(M - T), L = Math.abs(S - I), R = Math.floor(-j / 2), q = T < M ? 1 : -1, H = I < S ? 1 : -1, Z = true, Q = T, K = I; Q !== M + q; Q += q) {
                  var O = g ? K : Q, W = g ? Q : K;
                  if (v.get(O, W) !== Z && (Z = !Z, b.push({
                    x: O,
                    y: W
                  }), b.length === k + 1)) break;
                  if (R += L, R > 0) {
                    if (K === S) break;
                    K += H, R -= j;
                  }
                }
                for (var e0 = [], z = 0; z < k; z++) b[z] && b[z + 1] ? e0.push(a(b[z], b[z + 1])) : e0.push(0);
                return e0;
              }
              function F(_, m, v, k) {
                var b, g = m.y - _.y, T = m.x - _.x, I = d(_, m, v, Math.ceil(k / 2)), M = d(_, {
                  x: _.x - T,
                  y: _.y - g
                }, v, Math.ceil(k / 2)), S = I.shift() + M.shift() - 1;
                return (b = M.concat(S)).concat.apply(b, I);
              }
              function B(_, m) {
                var v = c(_) / c(m), k = 0;
                return m.forEach(function(b, g) {
                  k += Math.pow(_[g] - b * v, 2);
                }), {
                  averageSize: v,
                  error: k
                };
              }
              function A(_, m, v) {
                try {
                  var k = F(_, {
                    x: -1,
                    y: _.y
                  }, v, m.length), b = F(_, {
                    x: _.x,
                    y: -1
                  }, v, m.length), g = {
                    x: Math.max(0, _.x - _.y) - 1,
                    y: Math.max(0, _.y - _.x) - 1
                  }, T = F(_, g, v, m.length), I = {
                    x: Math.min(v.width, _.x + _.y) + 1,
                    y: Math.min(v.height, _.y + _.x) + 1
                  }, M = F(_, I, v, m.length), S = B(k, m), j = B(b, m), L = B(T, m), R = B(M, m), q = Math.sqrt(S.error * S.error + j.error * j.error + L.error * L.error + R.error * R.error), H = (S.averageSize + j.averageSize + L.averageSize + R.averageSize) / 4, Z = (Math.pow(S.averageSize - H, 2) + Math.pow(j.averageSize - H, 2) + Math.pow(L.averageSize - H, 2) + Math.pow(R.averageSize - H, 2)) / H;
                  return q + Z;
                } catch {
                  return 1 / 0;
                }
              }
              function D(_, m) {
                for (var v = Math.round(m.x); _.get(v, Math.round(m.y)); ) v--;
                for (var k = Math.round(m.x); _.get(k, Math.round(m.y)); ) k++;
                for (var b = (v + k) / 2, g = Math.round(m.y); _.get(Math.round(b), g); ) g--;
                for (var T = Math.round(m.y); _.get(Math.round(b), T); ) T++;
                var I = (g + T) / 2;
                return {
                  x: b,
                  y: I
                };
              }
              function p(_) {
                for (var m = [], v = [], k = [], b = [], g = function(O) {
                  for (var W = 0, e0 = false, z = [
                    0,
                    0,
                    0,
                    0,
                    0
                  ], r0 = function(o0) {
                    var s0 = _.get(o0, O);
                    if (s0 === e0) W++;
                    else {
                      z = [
                        z[1],
                        z[2],
                        z[3],
                        z[4],
                        W
                      ], W = 1, e0 = s0;
                      var J = c(z) / 7, Y = Math.abs(z[0] - J) < J && Math.abs(z[1] - J) < J && Math.abs(z[2] - 3 * J) < 3 * J && Math.abs(z[3] - J) < J && Math.abs(z[4] - J) < J && !s0, x0 = c(z.slice(-3)) / 3, f0 = Math.abs(z[2] - x0) < x0 && Math.abs(z[3] - x0) < x0 && Math.abs(z[4] - x0) < x0 && s0;
                      if (Y) {
                        var E0 = o0 - z[3] - z[4], $ = E0 - z[2], l0 = {
                          startX: $,
                          endX: E0,
                          y: O
                        }, Y0 = v.filter(function(N0) {
                          return $ >= N0.bottom.startX && $ <= N0.bottom.endX || E0 >= N0.bottom.startX && $ <= N0.bottom.endX || $ <= N0.bottom.startX && E0 >= N0.bottom.endX && z[2] / (N0.bottom.endX - N0.bottom.startX) < s && z[2] / (N0.bottom.endX - N0.bottom.startX) > l;
                        });
                        Y0.length > 0 ? Y0[0].bottom = l0 : v.push({
                          top: l0,
                          bottom: l0
                        });
                      }
                      if (f0) {
                        var te = o0 - z[4], L0 = te - z[3], l0 = {
                          startX: L0,
                          y: O,
                          endX: te
                        }, Y0 = b.filter(function(j0) {
                          return L0 >= j0.bottom.startX && L0 <= j0.bottom.endX || te >= j0.bottom.startX && L0 <= j0.bottom.endX || L0 <= j0.bottom.startX && te >= j0.bottom.endX && z[2] / (j0.bottom.endX - j0.bottom.startX) < s && z[2] / (j0.bottom.endX - j0.bottom.startX) > l;
                        });
                        Y0.length > 0 ? Y0[0].bottom = l0 : b.push({
                          top: l0,
                          bottom: l0
                        });
                      }
                    }
                  }, c0 = -1; c0 <= _.width; c0++) r0(c0);
                  m.push.apply(m, v.filter(function(o0) {
                    return o0.bottom.y !== O && o0.bottom.y - o0.top.y >= 2;
                  })), v = v.filter(function(o0) {
                    return o0.bottom.y === O;
                  }), k.push.apply(k, b.filter(function(o0) {
                    return o0.bottom.y !== O;
                  })), b = b.filter(function(o0) {
                    return o0.bottom.y === O;
                  });
                }, T = 0; T <= _.height; T++) g(T);
                m.push.apply(m, v.filter(function(O) {
                  return O.bottom.y - O.top.y >= 2;
                })), k.push.apply(k, b);
                var I = m.filter(function(O) {
                  return O.bottom.y - O.top.y >= 2;
                }).map(function(O) {
                  var W = (O.top.startX + O.top.endX + O.bottom.startX + O.bottom.endX) / 4, e0 = (O.top.y + O.bottom.y + 1) / 2;
                  if (_.get(Math.round(W), Math.round(e0))) {
                    var z = [
                      O.top.endX - O.top.startX,
                      O.bottom.endX - O.bottom.startX,
                      O.bottom.y - O.top.y + 1
                    ], r0 = c(z) / z.length, c0 = A({
                      x: Math.round(W),
                      y: Math.round(e0)
                    }, [
                      1,
                      1,
                      3,
                      1,
                      1
                    ], _);
                    return {
                      score: c0,
                      x: W,
                      y: e0,
                      size: r0
                    };
                  }
                }).filter(function(O) {
                  return !!O;
                }).sort(function(O, W) {
                  return O.score - W.score;
                }).map(function(O, W, e0) {
                  if (W > r) return null;
                  var z = e0.filter(function(c0, o0) {
                    return W !== o0;
                  }).map(function(c0) {
                    return {
                      x: c0.x,
                      y: c0.y,
                      score: c0.score + Math.pow(c0.size - O.size, 2) / O.size,
                      size: c0.size
                    };
                  }).sort(function(c0, o0) {
                    return c0.score - o0.score;
                  });
                  if (z.length < 2) return null;
                  var r0 = O.score + z[0].score + z[1].score;
                  return {
                    points: [
                      O
                    ].concat(z.slice(0, 2)),
                    score: r0
                  };
                }).filter(function(O) {
                  return !!O;
                }).sort(function(O, W) {
                  return O.score - W.score;
                });
                if (I.length === 0) return null;
                var M = u(I[0].points[0], I[0].points[1], I[0].points[2]), S = M.topRight, j = M.topLeft, L = M.bottomLeft, R = h(_, k, S, j, L), q = [];
                R && q.push({
                  alignmentPattern: {
                    x: R.alignmentPattern.x,
                    y: R.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: L.x,
                    y: L.y
                  },
                  dimension: R.dimension,
                  topLeft: {
                    x: j.x,
                    y: j.y
                  },
                  topRight: {
                    x: S.x,
                    y: S.y
                  }
                });
                var H = D(_, S), Z = D(_, j), Q = D(_, L), K = h(_, k, H, Z, Q);
                return K && q.push({
                  alignmentPattern: {
                    x: K.alignmentPattern.x,
                    y: K.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: Q.x,
                    y: Q.y
                  },
                  topLeft: {
                    x: Z.x,
                    y: Z.y
                  },
                  topRight: {
                    x: H.x,
                    y: H.y
                  },
                  dimension: K.dimension
                }), q.length === 0 ? null : q;
              }
              n.locate = p;
              function h(_, m, v, k, b) {
                var g, T, I;
                try {
                  g = E(k, v, b, _), T = g.dimension, I = g.moduleSize;
                } catch {
                  return null;
                }
                var M = {
                  x: v.x - k.x + b.x,
                  y: v.y - k.y + b.y
                }, S = (a(k, b) + a(k, v)) / 2 / I, j = 1 - 3 / S, L = {
                  x: k.x + j * (M.x - k.x),
                  y: k.y + j * (M.y - k.y)
                }, R = m.map(function(H) {
                  var Z = (H.top.startX + H.top.endX + H.bottom.startX + H.bottom.endX) / 4, Q = (H.top.y + H.bottom.y + 1) / 2;
                  if (_.get(Math.floor(Z), Math.floor(Q))) {
                    var K = [
                      H.top.endX - H.top.startX,
                      H.bottom.endX - H.bottom.startX,
                      H.bottom.y - H.top.y + 1
                    ];
                    c(K) / K.length;
                    var O = A({
                      x: Math.floor(Z),
                      y: Math.floor(Q)
                    }, [
                      1,
                      1,
                      1
                    ], _), W = O + a({
                      x: Z,
                      y: Q
                    }, L);
                    return {
                      x: Z,
                      y: Q,
                      score: W
                    };
                  }
                }).filter(function(H) {
                  return !!H;
                }).sort(function(H, Z) {
                  return H.score - Z.score;
                }), q = S >= 15 && R.length ? R[0] : L;
                return {
                  alignmentPattern: q,
                  dimension: T
                };
              }
            }
          ]).default;
        });
      })(go);
      var r8 = go.exports;
      const l8 = L9(r8);
      function vn(t, e, x) {
        const n = t.slice();
        return n[42] = e[x], n;
      }
      function s8(t) {
        let e;
        return {
          c() {
            e = C("a"), e.innerHTML = '<span class="material-icons svelte-dewqnh">arrow_back</span>', f(e, "class", "back-btn svelte-dewqnh"), f(e, "href", "#/home");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function a8(t) {
        let e, x, n;
        return {
          c() {
            e = C("button"), e.innerHTML = '<span class="material-icons svelte-dewqnh">arrow_back</span>', f(e, "class", "back-btn svelte-dewqnh");
          },
          m(o, r) {
            P(o, e, r), x || (n = G(e, "click", t[15]), x = true);
          },
          p: X,
          d(o) {
            o && y(e), x = false, n();
          }
        };
      }
      function i8(t) {
        let e;
        return {
          c() {
            e = N("New encounter");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function c8(t) {
        let e;
        return {
          c() {
            e = N("Encounter saved");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function E8(t) {
        let e;
        return {
          c() {
            e = N("Join group");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function u8(t) {
        let e;
        return {
          c() {
            e = N("Confirm exchange");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function f8(t) {
        let e;
        return {
          c() {
            e = N("Scan their code");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function d8(t) {
        let e, x, n, o, r, l, s, a, c = t[12] ? "Saving\u2026" : "Join group", u, E, d, F, B, A;
        function D(_, m) {
          return _[11]?.name ? v8 : h8;
        }
        let p = D(t), h = p(t);
        return {
          c() {
            e = C("section"), x = C("p"), x.textContent = "Join group encounter?", n = w(), h.c(), o = w(), r = C("div"), l = C("button"), s = C("span"), s.textContent = "groups", a = w(), u = N(c), E = w(), d = C("button"), F = N("Cancel"), f(x, "class", "section-label svelte-dewqnh"), f(s, "class", "material-icons svelte-dewqnh"), f(l, "class", "btn-filled svelte-dewqnh"), l.disabled = t[12], f(d, "class", "btn-text svelte-dewqnh"), d.disabled = t[12], f(r, "class", "ongoing-actions svelte-dewqnh"), f(e, "class", "card pad svelte-dewqnh");
          },
          m(_, m) {
            P(_, e, m), i(e, x), i(e, n), h.m(e, null), i(e, o), i(e, r), i(r, l), i(l, s), i(l, a), i(l, u), i(r, E), i(r, d), i(d, F), B || (A = [
              G(l, "click", t[18]),
              G(d, "click", t[15])
            ], B = true);
          },
          p(_, m) {
            p === (p = D(_)) && h ? h.p(_, m) : (h.d(1), h = p(_), h && (h.c(), h.m(e, o))), m[0] & 4096 && c !== (c = _[12] ? "Saving\u2026" : "Join group") && U(u, c), m[0] & 4096 && (l.disabled = _[12]), m[0] & 4096 && (d.disabled = _[12]);
          },
          d(_) {
            _ && y(e), h.d(), B = false, i0(A);
          }
        };
      }
      function B8(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d, F, B, A, D = t[12] && _n();
        return {
          c() {
            e = C("section"), x = C("p"), x.textContent = "Ongoing relationship?", n = w(), o = C("p"), o.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", r = w(), l = C("div"), s = C("button"), a = C("span"), a.textContent = "favorite", c = N(`
          Yes, ongoing`), u = w(), E = C("button"), d = N("No, one off"), F = w(), D && D.c(), f(x, "class", "section-label svelte-dewqnh"), f(o, "class", "help-text svelte-dewqnh"), f(a, "class", "material-icons svelte-dewqnh"), f(s, "class", "btn-filled svelte-dewqnh"), s.disabled = t[12], f(E, "class", "btn-outlined svelte-dewqnh"), E.disabled = t[12], f(l, "class", "ongoing-actions svelte-dewqnh"), f(e, "class", "card pad svelte-dewqnh");
          },
          m(p, h) {
            P(p, e, h), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), i(l, s), i(s, a), i(s, c), i(l, u), i(l, E), i(E, d), i(e, F), D && D.m(e, null), B || (A = [
              G(s, "click", t[25]),
              G(E, "click", t[26])
            ], B = true);
          },
          p(p, h) {
            h[0] & 4096 && (s.disabled = p[12]), h[0] & 4096 && (E.disabled = p[12]), p[12] ? D || (D = _n(), D.c(), D.m(e, null)) : D && (D.d(1), D = null);
          },
          d(p) {
            p && y(e), D && D.d(), B = false, i0(A);
          }
        };
      }
      function C8(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d, F, B, A, D, p, h, _, m, v, k = A0(t[10]), b = [];
        for (let T = 0; T < k.length; T += 1) b[T] = kn(vn(t, k, T));
        let g = t[12] && bn();
        return {
          c() {
            e = C("section"), x = C("p"), x.textContent = "Your partner's number", n = w(), o = C("p"), r = N(t[9]), l = w(), s = C("p"), s.textContent = "Ask your partner to confirm this matches their screen.", a = w(), c = C("section"), u = C("p"), u.textContent = "Let your partner scan your code", E = w(), d = C("div"), F = C("div"), B = w(), A = C("section"), D = C("p"), D.textContent = "What is your number?", p = w(), h = C("p"), h.textContent = "Tap the number shown on your screen above.", _ = w(), m = C("div");
            for (let T = 0; T < b.length; T += 1) b[T].c();
            v = w(), g && g.c(), f(x, "class", "section-label svelte-dewqnh"), f(o, "class", "confirm-number svelte-dewqnh"), f(s, "class", "help-text svelte-dewqnh"), f(e, "class", "card pad svelte-dewqnh"), f(u, "class", "section-label svelte-dewqnh"), f(F, "class", "qr-inner svelte-dewqnh"), f(d, "class", "qr-frame svelte-dewqnh"), f(c, "class", "card pad svelte-dewqnh"), f(D, "class", "section-label svelte-dewqnh"), f(h, "class", "help-text svelte-dewqnh"), f(m, "class", "choices svelte-dewqnh"), f(A, "class", "card pad svelte-dewqnh");
          },
          m(T, I) {
            P(T, e, I), i(e, x), i(e, n), i(e, o), i(o, r), i(e, l), i(e, s), P(T, a, I), P(T, c, I), i(c, u), i(c, E), i(c, d), i(d, F), F.innerHTML = t[2], P(T, B, I), P(T, A, I), i(A, D), i(A, p), i(A, h), i(A, _), i(A, m);
            for (let M = 0; M < b.length; M += 1) b[M] && b[M].m(m, null);
            i(A, v), g && g.m(A, null);
          },
          p(T, I) {
            if (I[0] & 512 && U(r, T[9]), I[0] & 4 && (F.innerHTML = T[2]), I[0] & 70656) {
              k = A0(T[10]);
              let M;
              for (M = 0; M < k.length; M += 1) {
                const S = vn(T, k, M);
                b[M] ? b[M].p(S, I) : (b[M] = kn(S), b[M].c(), b[M].m(m, null));
              }
              for (; M < b.length; M += 1) b[M].d(1);
              b.length = k.length;
            }
            T[12] ? g || (g = bn(), g.c(), g.m(A, null)) : g && (g.d(1), g = null);
          },
          d(T) {
            T && (y(e), y(a), y(c), y(B), y(A)), q0(b, T), g && g.d();
          }
        };
      }
      function A8(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = C("div"), x = C("video"), n = w(), o = C("canvas"), r = w(), l = C("div"), l.innerHTML = '<div class="scan-box svelte-dewqnh"></div> <p class="scan-hint svelte-dewqnh">Point at your partner&#39;s QR code</p>', x.playsInline = true, f(x, "class", "camera-video svelte-dewqnh"), f(o, "class", "camera-canvas svelte-dewqnh"), f(l, "class", "scan-overlay svelte-dewqnh"), f(e, "class", "camera-wrap svelte-dewqnh");
          },
          m(s, a) {
            P(s, e, a), i(e, x), t[22](x), i(e, n), i(e, o), t[23](o), i(e, r), i(e, l);
          },
          p: X,
          d(s) {
            s && y(e), t[22](null), t[23](null);
          }
        };
      }
      function F8(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d = t[6] ? "Hide" : "Enter code manually", F, B, A, D, p, h = t[5] && wn(t), _ = t[8] && gn(t);
        function m(g, T) {
          return g[2] ? k8 : _8;
        }
        let v = m(t), k = v(t), b = t[6] && yn(t);
        return {
          c() {
            h && h.c(), e = w(), _ && _.c(), x = w(), n = C("section"), o = C("p"), o.textContent = "Show this to your partner", r = w(), l = C("div"), k.c(), s = w(), a = C("div"), c = C("button"), c.innerHTML = `<span class="material-icons svelte-dewqnh">qr_code_scanner</span>
        Scan Their Code`, u = w(), E = C("button"), F = N(d), B = w(), b && b.c(), A = M0(), f(o, "class", "section-label svelte-dewqnh"), f(l, "class", "qr-frame svelte-dewqnh"), f(n, "class", "card pad svelte-dewqnh"), f(c, "class", "btn-filled svelte-dewqnh"), f(E, "class", "btn-text svelte-dewqnh"), f(a, "class", "scan-actions svelte-dewqnh");
          },
          m(g, T) {
            h && h.m(g, T), P(g, e, T), _ && _.m(g, T), P(g, x, T), P(g, n, T), i(n, o), i(n, r), i(n, l), k.m(l, null), P(g, s, T), P(g, a, T), i(a, c), i(a, u), i(a, E), i(E, F), P(g, B, T), b && b.m(g, T), P(g, A, T), D || (p = [
              G(c, "click", t[13]),
              G(E, "click", t[19])
            ], D = true);
          },
          p(g, T) {
            g[5] ? h ? h.p(g, T) : (h = wn(g), h.c(), h.m(e.parentNode, e)) : h && (h.d(1), h = null), g[8] ? _ ? _.p(g, T) : (_ = gn(g), _.c(), _.m(x.parentNode, x)) : _ && (_.d(1), _ = null), v === (v = m(g)) && k ? k.p(g, T) : (k.d(1), k = v(g), k && (k.c(), k.m(l, null))), T[0] & 64 && d !== (d = g[6] ? "Hide" : "Enter code manually") && U(F, d), g[6] ? b ? b.p(g, T) : (b = yn(g), b.c(), b.m(A.parentNode, A)) : b && (b.d(1), b = null);
          },
          d(g) {
            g && (y(e), y(x), y(n), y(s), y(a), y(B), y(A)), h && h.d(g), _ && _.d(g), k.d(), b && b.d(g), D = false, i0(p);
          }
        };
      }
      function D8(t) {
        let e;
        return {
          c() {
            e = C("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-dewqnh">check_circle</span> <p class="saved-title svelte-dewqnh">Encounter recorded</p> <p class="muted svelte-dewqnh">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-dewqnh">View encounters</a>', f(e, "class", "card pad saved-card svelte-dewqnh");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function p8(t) {
        let e, x, n, o, r;
        return {
          c() {
            e = C("section"), x = C("p"), n = N(t[1]), o = w(), r = C("a"), r.textContent = "\u2190 Back", f(x, "class", "error svelte-dewqnh"), f(r, "href", "#/home"), f(r, "class", "btn-text svelte-dewqnh"), f(e, "class", "card pad svelte-dewqnh");
          },
          m(l, s) {
            P(l, e, s), i(e, x), i(x, n), i(e, o), i(e, r);
          },
          p(l, s) {
            s[0] & 2 && U(n, l[1]);
          },
          d(l) {
            l && y(e);
          }
        };
      }
      function m8(t) {
        let e;
        return {
          c() {
            e = C("div"), e.innerHTML = '<div class="spinner svelte-dewqnh"></div> <p class="muted svelte-dewqnh">Generating your code\u2026</p>', f(e, "class", "center-fill svelte-dewqnh");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function h8(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Unnamed group encounter", f(e, "class", "help-text svelte-dewqnh");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function v8(t) {
        let e, x = t[11].name + "", n;
        return {
          c() {
            e = C("p"), n = N(x), f(e, "class", "confirm-group-name svelte-dewqnh");
          },
          m(o, r) {
            P(o, e, r), i(e, n);
          },
          p(o, r) {
            r[0] & 2048 && x !== (x = o[11].name + "") && U(n, x);
          },
          d(o) {
            o && y(e);
          }
        };
      }
      function _n(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Saving\u2026", f(e, "class", "muted saving-hint svelte-dewqnh");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function kn(t) {
        let e, x = t[42] + "", n, o, r;
        function l() {
          return t[24](t[42]);
        }
        return {
          c() {
            e = C("button"), n = N(x), f(e, "class", "choice-btn svelte-dewqnh"), e.disabled = t[12];
          },
          m(s, a) {
            P(s, e, a), i(e, n), o || (r = G(e, "click", l), o = true);
          },
          p(s, a) {
            t = s, a[0] & 1024 && x !== (x = t[42] + "") && U(n, x), a[0] & 4096 && (e.disabled = t[12]);
          },
          d(s) {
            s && y(e), o = false, r();
          }
        };
      }
      function bn(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Saving\u2026", f(e, "class", "muted saving-hint svelte-dewqnh");
          },
          m(x, n) {
            P(x, e, n);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function wn(t) {
        let e, x, n, o;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "error_outline", n = w(), o = N(t[5]), f(x, "class", "material-icons svelte-dewqnh"), f(e, "class", "alert-banner svelte-dewqnh");
          },
          m(r, l) {
            P(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l[0] & 32 && U(o, r[5]);
          },
          d(r) {
            r && y(e);
          }
        };
      }
      function gn(t) {
        let e, x, n, o;
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "error_outline", n = w(), o = N(t[8]), f(x, "class", "material-icons svelte-dewqnh"), f(e, "class", "alert-banner svelte-dewqnh");
          },
          m(r, l) {
            P(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l[0] & 256 && U(o, r[8]);
          },
          d(r) {
            r && y(e);
          }
        };
      }
      function _8(t) {
        let e;
        return {
          c() {
            e = C("p"), e.textContent = "Generating\u2026", f(e, "class", "muted svelte-dewqnh");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function k8(t) {
        let e;
        return {
          c() {
            e = C("div"), f(e, "class", "qr-inner svelte-dewqnh");
          },
          m(x, n) {
            P(x, e, n), e.innerHTML = t[2];
          },
          p(x, n) {
            n[0] & 4 && (e.innerHTML = x[2]);
          },
          d(x) {
            x && y(e);
          }
        };
      }
      function yn(t) {
        let e, x, n, o, r, l, s, a, c, u, E, d = t[8] && Pn(t);
        return {
          c() {
            e = C("section"), x = C("p"), x.textContent = "Paste their QR payload", n = w(), o = C("textarea"), r = w(), d && d.c(), l = w(), s = C("button"), a = N("Continue"), f(x, "class", "section-label svelte-dewqnh"), f(o, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), f(o, "rows", "3"), f(o, "class", "svelte-dewqnh"), f(s, "class", "btn-filled svelte-dewqnh"), s.disabled = c = !t[7].trim(), f(e, "class", "card pad svelte-dewqnh");
          },
          m(F, B) {
            P(F, e, B), i(e, x), i(e, n), i(e, o), t0(o, t[7]), i(e, r), d && d.m(e, null), i(e, l), i(e, s), i(s, a), u || (E = [
              G(o, "input", t[20]),
              G(o, "keydown", t[21]),
              G(s, "click", t[14])
            ], u = true);
          },
          p(F, B) {
            B[0] & 128 && t0(o, F[7]), F[8] ? d ? d.p(F, B) : (d = Pn(F), d.c(), d.m(e, l)) : d && (d.d(1), d = null), B[0] & 128 && c !== (c = !F[7].trim()) && (s.disabled = c);
          },
          d(F) {
            F && y(e), d && d.d(), u = false, i0(E);
          }
        };
      }
      function Pn(t) {
        let e, x;
        return {
          c() {
            e = C("p"), x = N(t[8]), f(e, "class", "error-text svelte-dewqnh");
          },
          m(n, o) {
            P(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 256 && U(x, n[8]);
          },
          d(n) {
            n && y(e);
          }
        };
      }
      function b8(t) {
        let e, x, n, o, r, l, s, a;
        e = new K0({});
        function c(h, _) {
          return h[0] === "scanning" || h[0] === "confirm-group" ? a8 : s8;
        }
        let u = c(t), E = u(t);
        function d(h, _) {
          return h[0] === "scanning" ? f8 : h[0] === "confirm" || h[0] === "ongoing?" ? u8 : h[0] === "confirm-group" ? E8 : h[0] === "saved" ? c8 : i8;
        }
        let F = d(t), B = F(t);
        function A(h, _) {
          if (h[0] === "loading") return m8;
          if (h[0] === "error") return p8;
          if (h[0] === "saved") return D8;
          if (h[0] === "showQR") return F8;
          if (h[0] === "scanning") return A8;
          if (h[0] === "confirm") return C8;
          if (h[0] === "ongoing?") return B8;
          if (h[0] === "confirm-group") return d8;
        }
        let D = A(t), p = D && D(t);
        return {
          c() {
            y0(e.$$.fragment), x = w(), n = C("main"), o = C("div"), E.c(), r = w(), l = C("h1"), B.c(), s = w(), p && p.c(), f(l, "class", "svelte-dewqnh"), f(o, "class", "page-header svelte-dewqnh"), f(n, "class", "svelte-dewqnh");
          },
          m(h, _) {
            k0(e, h, _), P(h, x, _), P(h, n, _), i(n, o), E.m(o, null), i(o, r), i(o, l), B.m(l, null), i(n, s), p && p.m(n, null), a = true;
          },
          p(h, _) {
            u === (u = c(h)) && E ? E.p(h, _) : (E.d(1), E = u(h), E && (E.c(), E.m(o, r))), F !== (F = d(h)) && (B.d(1), B = F(h), B && (B.c(), B.m(l, null))), D === (D = A(h)) && p ? p.p(h, _) : (p && p.d(1), p = D && D(h), p && (p.c(), p.m(n, null)));
          },
          i(h) {
            a || (F0(e.$$.fragment, h), a = true);
          },
          o(h) {
            D0(e.$$.fragment, h), a = false;
          },
          d(h) {
            h && (y(x), y(n)), b0(e, h), E.d(), B.d(), p && p.d();
          }
        };
      }
      function Cx(t) {
        return 10 + (t[1] * 256 + t[2]) % 90;
      }
      function Tn(t) {
        const e = /* @__PURE__ */ new Set([
          t
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((x, n) => x - n);
      }
      function w8(t, e, x) {
        let n = "loading", o = null, r = null, l = "", s = 0, a = "", c = null, u = null, E = null, d = null, F = null, B = false, A = false, D = "", p = null, h = null, _ = null, m = 0, v = [], k = null, b = "", g = null, T = "", I = false;
        T0(async () => {
          if (!I0()) {
            B0("/");
            return;
          }
          try {
            const J = il(), Y = Ee(), x0 = Math.floor(Date.now() / 1e3);
            r = J.privateKey, s = Cx(J.publicKey), l = `1|${W0(J.publicKey)}|${x0}|${n0(Y)}`, x(2, a = await xe.toString(l, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#000000",
                light: "#ffffff"
              }
            })), x(0, n = "showQR");
          } catch (J) {
            x(1, o = J.message), x(0, n = "error");
          }
        }), jn(() => {
          S();
        });
        async function M() {
          if (x(5, F = null), B = false, !navigator.mediaDevices?.getUserMedia) {
            x(5, F = "Camera not available. This page must be opened over HTTPS to use the camera."), x(0, n = "showQR");
            return;
          }
          x(0, n = "scanning"), await new Promise((J) => setTimeout(J, 50));
          try {
            E = await navigator.mediaDevices.getUserMedia({
              video: {
                facingMode: "environment",
                width: {
                  ideal: 1280
                },
                height: {
                  ideal: 720
                }
              }
            }), x(3, c.srcObject = E, c), await c.play(), j();
          } catch (J) {
            x(5, F = J.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + J.message), S(), x(0, n = "showQR");
          }
        }
        function S() {
          d && (cancelAnimationFrame(d), d = null), E && (E.getTracks().forEach((J) => J.stop()), E = null), B = false;
        }
        function j() {
          if (!E || !c || c.readyState < 2) {
            d = requestAnimationFrame(j);
            return;
          }
          const J = c.videoWidth, Y = c.videoHeight;
          if (!J || !Y) {
            d = requestAnimationFrame(j);
            return;
          }
          x(4, u.width = J, u), x(4, u.height = Y, u);
          const x0 = u.getContext("2d");
          x0.drawImage(c, 0, 0, J, Y);
          const f0 = x0.getImageData(0, 0, J, Y), E0 = l8(f0.data, J, Y, {
            inversionAttempts: "dontInvert"
          });
          if (E0 && !B) {
            B = true, R(E0.data);
            return;
          }
          d = requestAnimationFrame(j);
        }
        function L(J) {
          const Y = J.trim().split("|"), x0 = parseInt(Y[0], 10);
          if (!isNaN(x0) && x0 > 1) throw new Error("Your partner has a newer app version. Please update.");
          if (Y.length !== 4 || Y[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, f0, , E0] = Y;
          if (!f0 || f0.length < 10) throw new Error("Invalid QR payload");
          if (!E0 || E0.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: Wn(f0),
            contactIdBytes: _0(E0)
          };
        }
        function R(J) {
          const Y = J.trim();
          if (Y.startsWith("2|")) {
            try {
              const x0 = tt(Y);
              if (!x0) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - x0.timestamp > 86400) {
                B = false, d = requestAnimationFrame(j);
                return;
              }
              S(), x(11, k = x0), b = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group");
            } catch {
              B = false, d = requestAnimationFrame(j);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: x0, contactIdBytes: f0 } = L(J);
            S(), h = x0, _ = f0, x(9, m = Cx(x0)), x(10, v = Tn(s)), x(0, n = "confirm");
          } catch {
            B = false, d = requestAnimationFrame(j);
          }
        }
        function q() {
          x(8, p = null);
          const J = D.trim();
          try {
            if (J.startsWith("2|")) {
              const Y = tt(J);
              if (!Y) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - Y.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              x(11, k = Y), b = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group"), x(6, A = false);
            } else {
              const { ephemeralPubkeyBytes: Y, contactIdBytes: x0 } = L(J);
              h = Y, _ = x0, x(9, m = Cx(Y)), x(10, v = Tn(s)), x(0, n = "confirm"), x(6, A = false);
            }
          } catch (Y) {
            x(8, p = Y.message);
          }
        }
        function H() {
          S(), x(11, k = null), x(0, n = "showQR"), x(6, A = false), x(8, p = null), x(7, D = "");
        }
        async function Z(J) {
          if (J !== s) {
            x(8, p = "Wrong \u2014 that's not your number. Scan again."), x(0, n = "showQR"), x(6, A = false), x(7, D = ""), h = null, _ = null;
            return;
          }
          const Y = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          g = cl(r, h, Y), T = Y;
          const E0 = R0()?.encounters || [], $ = Gx(), l0 = n0(_), Y0 = E0.some((L0) => n0(L0.theirContactId) === l0), te = $.some((L0) => n0(L0.theirContactId) === l0 && !L0.endedAt);
          Y0 && !te ? x(0, n = "ongoing?") : await Q(false);
        }
        async function Q(J) {
          x(12, I = true);
          try {
            const Y = Ee(), x0 = J0(g, Y, 0);
            await eo(n0(x0), T), J ? await Wl(g, _, T) : await Jl(g, _, T), x(0, n = "saved");
          } catch (Y) {
            x(1, o = Y.message), x(0, n = "error");
          } finally {
            x(12, I = false);
          }
        }
        async function K() {
          x(12, I = true);
          try {
            const J = _0(k.groupTokenHex), Y = _0(k.hostContactIdHex);
            await co(J, b, false, Y, k.name), x(0, n = "saved");
          } catch (J) {
            x(1, o = J.message), x(0, n = "error");
          } finally {
            x(12, I = false);
          }
        }
        const O = () => {
          x(6, A = !A), x(8, p = null);
        };
        function W() {
          D = this.value, x(7, D);
        }
        const e0 = (J) => J.key === "Enter" && !J.shiftKey && (J.preventDefault(), q());
        function z(J) {
          He[J ? "unshift" : "push"](() => {
            c = J, x(3, c);
          });
        }
        function r0(J) {
          He[J ? "unshift" : "push"](() => {
            u = J, x(4, u);
          });
        }
        return [
          n,
          o,
          a,
          c,
          u,
          F,
          A,
          D,
          p,
          m,
          v,
          k,
          I,
          M,
          q,
          H,
          Z,
          Q,
          K,
          O,
          W,
          e0,
          z,
          r0,
          (J) => Z(J),
          () => Q(true),
          () => Q(false)
        ];
      }
      class g8 extends v0 {
        constructor(e) {
          super(), h0(this, e, w8, b8, m0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function y8(t) {
        let e, x, n, o, r, l, s;
        e = new Vo({
          props: {
            routes: t[7]
          }
        }), e.$on("routeLoaded", t[11]), n = new ml({});
        let a = t[6] === false && Sn(t), c = t[4] && Mn(t);
        return {
          c() {
            y0(e.$$.fragment), x = w(), y0(n.$$.fragment), o = w(), a && a.c(), r = w(), c && c.c(), l = M0();
          },
          m(u, E) {
            k0(e, u, E), P(u, x, E), k0(n, u, E), P(u, o, E), a && a.m(u, E), P(u, r, E), c && c.m(u, E), P(u, l, E), s = true;
          },
          p(u, E) {
            u[6] === false ? a ? a.p(u, E) : (a = Sn(u), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null), u[4] ? c ? c.p(u, E) : (c = Mn(u), c.c(), c.m(l.parentNode, l)) : c && (c.d(1), c = null);
          },
          i(u) {
            s || (F0(e.$$.fragment, u), F0(n.$$.fragment, u), s = true);
          },
          o(u) {
            D0(e.$$.fragment, u), D0(n.$$.fragment, u), s = false;
          },
          d(u) {
            u && (y(x), y(o), y(r), y(l)), b0(e, u), b0(n, u), a && a.d(u), c && c.d(u);
          }
        };
      }
      function P8(t) {
        let e;
        return {
          c() {
            e = C("main"), e.textContent = "Loading\u2026", f(e, "class", "loading svelte-u8p0vl");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          i: X,
          o: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function T8(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = C("main"), x = C("p"), n = N("Failed to load crypto module: "), o = N(t[3]), r = w(), l = C("p"), l.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", f(e, "class", "error svelte-u8p0vl");
          },
          m(s, a) {
            P(s, e, a), i(e, x), i(x, n), i(x, o), i(e, r), i(e, l);
          },
          p(s, a) {
            a & 8 && U(o, s[3]);
          },
          i: X,
          o: X,
          d(s) {
            s && y(e);
          }
        };
      }
      function Sn(t) {
        let e, x, n, o, r;
        function l(c, u) {
          return c[1] ? M8 : S8;
        }
        let s = l(t), a = s(t);
        return {
          c() {
            e = C("div"), x = C("span"), x.textContent = "mail_outline", n = w(), o = C("span"), o.textContent = "Please verify your email address. Check your inbox for a verification link.", r = w(), a.c(), f(x, "class", "material-icons svelte-u8p0vl"), f(o, "class", "verify-text svelte-u8p0vl"), f(e, "class", "verify-banner svelte-u8p0vl");
          },
          m(c, u) {
            P(c, e, u), i(e, x), i(e, n), i(e, o), i(e, r), a.m(e, null);
          },
          p(c, u) {
            s === (s = l(c)) && a ? a.p(c, u) : (a.d(1), a = s(c), a && (a.c(), a.m(e, null)));
          },
          d(c) {
            c && y(e), a.d();
          }
        };
      }
      function S8(t) {
        let e, x = t[0] ? "Sending\u2026" : "Resend", n, o, r;
        return {
          c() {
            e = C("button"), n = N(x), f(e, "class", "resend-btn svelte-u8p0vl"), e.disabled = t[0];
          },
          m(l, s) {
            P(l, e, s), i(e, n), o || (r = G(e, "click", t[8]), o = true);
          },
          p(l, s) {
            s & 1 && x !== (x = l[0] ? "Sending\u2026" : "Resend") && U(n, x), s & 1 && (e.disabled = l[0]);
          },
          d(l) {
            l && y(e), o = false, r();
          }
        };
      }
      function M8(t) {
        let e;
        return {
          c() {
            e = C("span"), e.textContent = "Sent!", f(e, "class", "resend-sent svelte-u8p0vl");
          },
          m(x, n) {
            P(x, e, n);
          },
          p: X,
          d(x) {
            x && y(e);
          }
        };
      }
      function Mn(t) {
        let e, x, n, o, r, l, s, a = Math.floor(t[5] / 60) + "", c, u, E = String(t[5] % 60).padStart(2, "0") + "", d, F, B, A, D, p, h, _, m;
        return {
          c() {
            e = C("div"), x = C("div"), n = C("h2"), n.textContent = "Session expiring", o = w(), r = C("p"), l = N(`You'll be logged out in
          `), s = C("strong"), c = N(a), u = N(":"), d = N(E), F = N(`
          due to inactivity.`), B = w(), A = C("div"), D = C("button"), D.textContent = "Stay logged in", p = w(), h = C("button"), h.textContent = "Log out now", f(n, "id", "idle-title"), f(n, "class", "svelte-u8p0vl"), f(r, "class", "svelte-u8p0vl"), f(D, "class", "btn-primary svelte-u8p0vl"), f(h, "class", "btn-ghost svelte-u8p0vl"), f(A, "class", "idle-actions svelte-u8p0vl"), f(x, "class", "idle-dialog svelte-u8p0vl"), f(e, "class", "idle-overlay svelte-u8p0vl"), f(e, "role", "dialog"), f(e, "aria-modal", "true"), f(e, "aria-labelledby", "idle-title");
          },
          m(v, k) {
            P(v, e, k), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(r, s), i(s, c), i(s, u), i(s, d), i(r, F), i(x, B), i(x, A), i(A, D), i(A, p), i(A, h), _ || (m = [
              G(D, "click", t[9]),
              G(h, "click", t[10])
            ], _ = true);
          },
          p(v, k) {
            k & 32 && a !== (a = Math.floor(v[5] / 60) + "") && U(c, a), k & 32 && E !== (E = String(v[5] % 60).padStart(2, "0") + "") && U(d, E);
          },
          d(v) {
            v && y(e), _ = false, i0(m);
          }
        };
      }
      function I8(t) {
        let e, x, n, o;
        const r = [
          T8,
          P8,
          y8
        ], l = [];
        function s(a, c) {
          return a[3] ? 0 : a[2] ? 2 : 1;
        }
        return e = s(t), x = l[e] = r[e](t), {
          c() {
            x.c(), n = M0();
          },
          m(a, c) {
            l[e].m(a, c), P(a, n, c), o = true;
          },
          p(a, [c]) {
            let u = e;
            e = s(a), e === u ? l[e].p(a, c) : (Ze(), D0(l[u], 1, 1, () => {
              l[u] = null;
            }), $e(), x = l[e], x ? x.p(a, c) : (x = l[e] = r[e](a), x.c()), F0(x, 1), x.m(n.parentNode, n));
          },
          i(a) {
            o || (F0(x), o = true);
          },
          o(a) {
            D0(x), o = false;
          },
          d(a) {
            a && y(n), l[e].d(a);
          }
        };
      }
      const In = 120;
      function L8(t, e, x) {
        let n;
        We(t, Ce, (p) => x(6, n = p));
        const o = {
          "/": Bs,
          "/signup": Ds,
          "/home": _s,
          "/encounter-exchange": g8,
          "/encounters": Ms,
          "/relationships/:rawTokenHex": Ys,
          "/groups/:tokenHex": Ma,
          "/results": s9,
          "/change-password": c9,
          "/change-email": C9,
          "/verify-email/:token": h9,
          "/alerts": M9,
          "/settings": o8
        };
        let r = false, l = false;
        async function s() {
          x(0, r = true);
          try {
            await bl(), x(1, l = true);
          } catch {
          } finally {
            x(0, r = false);
          }
        }
        let a = false, c = null, u = false, E = In, d = null;
        function F() {
          x(5, E = In), clearInterval(d), d = setInterval(() => {
            x(5, E -= 1), E <= 0 && clearInterval(d);
          }, 1e3);
        }
        function B() {
          x(4, u = false), clearInterval(d), Gl();
        }
        async function A() {
          x(4, u = false), clearInterval(d), vx(), await $n(), B0("/");
        }
        function D(p) {
          const h = p.detail.location;
          !(h === "/" || h.startsWith("/signup")) && I0() ? zl({
            onWarnCallback: () => {
              x(4, u = true), F();
            },
            onExpiredCallback: A
          }) : (vx(), x(4, u = false), clearInterval(d));
        }
        return T0(async () => {
          try {
            await al(), x(2, a = true);
          } catch (p) {
            x(3, c = p.message);
          }
        }), [
          r,
          l,
          a,
          c,
          u,
          E,
          n,
          o,
          s,
          B,
          A,
          D
        ];
      }
      class N8 extends v0 {
        constructor(e) {
          super(), h0(this, e, L8, I8, m0, {});
        }
      }
      new N8({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
