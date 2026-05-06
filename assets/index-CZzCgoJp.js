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
          for (const s of o) if (s.type === "childList") for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function t(o) {
          const s = {};
          return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function n(o) {
          if (o.ep) return;
          o.ep = true;
          const s = t(o);
          fetch(o.href, s);
        }
      })();
      function X() {
      }
      function vt(x, e) {
        for (const t in e) x[t] = e[t];
        return x;
      }
      function ts(x) {
        return x();
      }
      function Ux() {
        return /* @__PURE__ */ Object.create(null);
      }
      function s0(x) {
        x.forEach(ts);
      }
      function zt(x) {
        return typeof x == "function";
      }
      function A0(x, e) {
        return x != x ? e == e : x !== e || x && typeof x == "object" || typeof x == "function";
      }
      let dt;
      function Vx(x, e) {
        return x === e ? true : (dt || (dt = document.createElement("a")), dt.href = e, x === dt.href);
      }
      function el(x) {
        return Object.keys(x).length === 0;
      }
      function xs(x, ...e) {
        if (x == null) {
          for (const n of e) n(void 0);
          return X;
        }
        const t = x.subscribe(...e);
        return t.unsubscribe ? () => t.unsubscribe() : t;
      }
      function H0(x, e, t) {
        x.$$.on_destroy.push(xs(e, t));
      }
      function Gx(x, e, t) {
        return x.set(t), e;
      }
      function k0(x) {
        return x && zt(x.destroy) ? x.destroy : X;
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
      function V0(x, e) {
        for (let t = 0; t < x.length; t += 1) x[t] && x[t].d(e);
      }
      function d(x) {
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
      function O(x, e, t, n) {
        return x.addEventListener(e, t, n), () => x.removeEventListener(e, t, n);
      }
      function re(x) {
        return function(e) {
          return e.preventDefault(), x.call(this, e);
        };
      }
      function tl(x) {
        return function(e) {
          return e.stopPropagation(), x.call(this, e);
        };
      }
      function c(x, e, t) {
        t == null ? x.removeAttribute(e) : x.getAttribute(e) !== t && x.setAttribute(e, t);
      }
      function xl(x) {
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
      function nl(x, e, { bubbles: t = false, cancelable: n = false } = {}) {
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
      function Ue(x) {
        Qe = x;
      }
      function qt() {
        if (!Qe) throw new Error("Function called outside component initialization");
        return Qe;
      }
      function z0(x) {
        qt().$$.on_mount.push(x);
      }
      function ol(x) {
        qt().$$.after_update.push(x);
      }
      function Rt(x) {
        qt().$$.on_destroy.push(x);
      }
      function ns() {
        const x = qt();
        return (e, t, { cancelable: n = false } = {}) => {
          const o = x.$$.callbacks[e];
          if (o) {
            const s = nl(e, t, {
              cancelable: n
            });
            return o.slice().forEach((l) => {
              l.call(x, s);
            }), !s.defaultPrevented;
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
      const Yx = [], os = Promise.resolve();
      let ix = false;
      function ss() {
        ix || (ix = true, os.then(rs));
      }
      function ls() {
        return ss(), os;
      }
      function cx(x) {
        Te.push(x);
      }
      const Jt = /* @__PURE__ */ new Set();
      let be = 0;
      function rs() {
        if (be !== 0) return;
        const x = Qe;
        do {
          try {
            for (; be < Pe.length; ) {
              const e = Pe[be];
              be++, Ue(e), sl(e.$$);
            }
          } catch (e) {
            throw Pe.length = 0, be = 0, e;
          }
          for (Ue(null), Pe.length = 0, be = 0; kt.length; ) kt.pop()();
          for (let e = 0; e < Te.length; e += 1) {
            const t = Te[e];
            Jt.has(t) || (Jt.add(t), t());
          }
          Te.length = 0;
        } while (Pe.length);
        for (; Yx.length; ) Yx.pop()();
        ix = false, Jt.clear(), Ue(x);
      }
      function sl(x) {
        if (x.fragment !== null) {
          x.update(), s0(x.before_update);
          const e = x.dirty;
          x.dirty = [
            -1
          ], x.fragment && x.fragment.p(x.ctx, e), x.after_update.forEach(cx);
        }
      }
      function ll(x) {
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
        Ce.r || s0(Ce.c), Ce = Ce.p;
      }
      function d0(x, e) {
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
      function E0(x) {
        return x?.length !== void 0 ? x : Array.from(x);
      }
      function rl(x, e) {
        x.d(1), e.delete(x.key);
      }
      function al(x, e, t, n, o, s, l, r, a, u, f, E) {
        let C = x.length, B = s.length, A = C;
        const F = {};
        for (; A--; ) F[x[A].key] = A;
        const m = [], h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), b = [];
        for (A = B; A--; ) {
          const k = E(o, s, A), w = t(k);
          let y = l.get(w);
          y ? b.push(() => y.p(k, e)) : (y = u(w, k), y.c()), h.set(w, m[A] = y), w in F && v.set(w, Math.abs(A - F[w]));
        }
        const _ = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
        function p(k) {
          d0(k, 1), k.m(r, f), l.set(k.key, k), f = k.first, B--;
        }
        for (; C && B; ) {
          const k = m[B - 1], w = x[C - 1], y = k.key, S = w.key;
          k === w ? (f = k.first, C--, B--) : h.has(S) ? !l.has(y) || _.has(y) ? p(k) : D.has(S) ? C-- : v.get(y) > v.get(S) ? (D.add(y), p(k)) : (_.add(S), C--) : (a(w, l), C--);
        }
        for (; C--; ) {
          const k = x[C];
          h.has(k.key) || a(k, l);
        }
        for (; B; ) p(m[B - 1]);
        return s0(b), m;
      }
      function bt(x, e) {
        const t = {}, n = {}, o = {
          $$scope: 1
        };
        let s = x.length;
        for (; s--; ) {
          const l = x[s], r = e[s];
          if (r) {
            for (const a in l) a in r || (n[a] = 1);
            for (const a in r) o[a] || (t[a] = r[a], o[a] = 1);
            x[s] = r;
          } else for (const a in l) o[a] = 1;
        }
        for (const l in n) l in t || (t[l] = void 0);
        return t;
      }
      function gt(x) {
        return typeof x == "object" && x !== null ? x : {};
      }
      function y0(x) {
        x && x.c();
      }
      function b0(x, e, t) {
        const { fragment: n, after_update: o } = x.$$;
        n && n.m(e, t), cx(() => {
          const s = x.$$.on_mount.map(ts).filter(zt);
          x.$$.on_destroy ? x.$$.on_destroy.push(...s) : s0(s), x.$$.on_mount = [];
        }), o.forEach(cx);
      }
      function g0(x, e) {
        const t = x.$$;
        t.fragment !== null && (ll(t.after_update), s0(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
      }
      function il(x, e) {
        x.$$.dirty[0] === -1 && (Pe.push(x), ss(), x.$$.dirty.fill(0)), x.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function p0(x, e, t, n, o, s, l = null, r = [
        -1
      ]) {
        const a = Qe;
        Ue(x);
        const u = x.$$ = {
          fragment: null,
          ctx: [],
          props: s,
          update: X,
          not_equal: o,
          bound: Ux(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (a ? a.$$.context : [])),
          callbacks: Ux(),
          dirty: r,
          skip_bound: false,
          root: e.target || a.$$.root
        };
        l && l(u.root);
        let f = false;
        if (u.ctx = t ? t(x, e.props || {}, (E, C, ...B) => {
          const A = B.length ? B[0] : C;
          return u.ctx && o(u.ctx[E], u.ctx[E] = A) && (!u.skip_bound && u.bound[E] && u.bound[E](A), f && il(x, E)), C;
        }) : [], u.update(), f = true, s0(u.before_update), u.fragment = n ? n(u.ctx) : false, e.target) {
          if (e.hydrate) {
            const E = xl(e.target);
            u.fragment && u.fragment.l(E), E.forEach(P);
          } else u.fragment && u.fragment.c();
          e.intro && d0(x.$$.fragment), b0(x, e.target, e.anchor), rs();
        }
        Ue(a);
      }
      class D0 {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          g0(this, 1), this.$destroy = X;
        }
        $on(e, t) {
          if (!zt(t)) return X;
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(t), () => {
            const o = n.indexOf(t);
            o !== -1 && n.splice(o, 1);
          };
        }
        $set(e) {
          this.$$set && !el(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const cl = "4", ge = [];
      function as(x, e) {
        return {
          subscribe: K0(x, e).subscribe
        };
      }
      function K0(x, e = X) {
        let t;
        const n = /* @__PURE__ */ new Set();
        function o(r) {
          if (A0(x, r) && (x = r, t)) {
            const a = !ge.length;
            for (const u of n) u[1](), ge.push(u, x);
            if (a) {
              for (let u = 0; u < ge.length; u += 2) ge[u][0](ge[u + 1]);
              ge.length = 0;
            }
          }
        }
        function s(r) {
          o(r(x));
        }
        function l(r, a = X) {
          const u = [
            r,
            a
          ];
          return n.add(u), n.size === 1 && (t = e(o, s) || X), r(x), () => {
            n.delete(u), n.size === 0 && t && (t(), t = null);
          };
        }
        return {
          set: o,
          update: s,
          subscribe: l
        };
      }
      function is(x, e, t) {
        const n = !Array.isArray(x), o = n ? [
          x
        ] : x;
        if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const s = e.length < 2;
        return as(t, (l, r) => {
          let a = false;
          const u = [];
          let f = 0, E = X;
          const C = () => {
            if (f) return;
            E();
            const A = e(n ? u[0] : u, l, r);
            s ? l(A) : E = zt(A) ? A : X;
          }, B = o.map((A, F) => xs(A, (m) => {
            u[F] = m, f &= ~(1 << F), a && C();
          }, () => {
            f |= 1 << F;
          }));
          return a = true, C(), function() {
            s0(B), E(), a = false;
          };
        });
      }
      const ul = typeof localStorage < "u" ? localStorage.getItem("theme") : null, cs = ul ?? "light", pt = K0(cs);
      typeof document < "u" && document.documentElement.setAttribute("data-theme", cs);
      pt.subscribe((x) => {
        typeof localStorage < "u" && localStorage.setItem("theme", x), typeof document < "u" && document.documentElement.setAttribute("data-theme", x);
      });
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add(cl);
      function fl(x, e) {
        if (x instanceof RegExp) return {
          keys: false,
          pattern: x
        };
        var t, n, o, s, l = [], r = "", a = x.split("/");
        for (a[0] || a.shift(); o = a.shift(); ) t = o[0], t === "*" ? (l.push("wild"), r += "/(.*)") : t === ":" ? (n = o.indexOf("?", 1), s = o.indexOf(".", 1), l.push(o.substring(1, ~n ? n : ~s ? s : o.length)), r += ~n && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)", ~s && (r += (~n ? "?" : "") + "\\" + o.substring(s))) : r += "/" + o;
        return {
          keys: l,
          pattern: new RegExp("^" + r + "/?$", "i")
        };
      }
      function dl(x) {
        let e, t, n;
        const o = [
          x[2]
        ];
        var s = x[0];
        function l(r, a) {
          let u = {};
          for (let f = 0; f < o.length; f += 1) u = vt(u, o[f]);
          return a !== void 0 && a & 4 && (u = vt(u, bt(o, [
            gt(r[2])
          ]))), {
            props: u
          };
        }
        return s && (e = _t(s, l(x)), e.$on("routeEvent", x[7])), {
          c() {
            e && y0(e.$$.fragment), t = X0();
          },
          m(r, a) {
            e && b0(e, r, a), T(r, t, a), n = true;
          },
          p(r, a) {
            if (a & 1 && s !== (s = r[0])) {
              if (e) {
                qe();
                const u = e;
                C0(u.$$.fragment, 1, 0, () => {
                  g0(u, 1);
                }), Re();
              }
              s ? (e = _t(s, l(r, a)), e.$on("routeEvent", r[7]), y0(e.$$.fragment), d0(e.$$.fragment, 1), b0(e, t.parentNode, t)) : e = null;
            } else if (s) {
              const u = a & 4 ? bt(o, [
                gt(r[2])
              ]) : {};
              e.$set(u);
            }
          },
          i(r) {
            n || (e && d0(e.$$.fragment, r), n = true);
          },
          o(r) {
            e && C0(e.$$.fragment, r), n = false;
          },
          d(r) {
            r && P(t), e && g0(e, r);
          }
        };
      }
      function El(x) {
        let e, t, n;
        const o = [
          {
            params: x[1]
          },
          x[2]
        ];
        var s = x[0];
        function l(r, a) {
          let u = {};
          for (let f = 0; f < o.length; f += 1) u = vt(u, o[f]);
          return a !== void 0 && a & 6 && (u = vt(u, bt(o, [
            a & 2 && {
              params: r[1]
            },
            a & 4 && gt(r[2])
          ]))), {
            props: u
          };
        }
        return s && (e = _t(s, l(x)), e.$on("routeEvent", x[6])), {
          c() {
            e && y0(e.$$.fragment), t = X0();
          },
          m(r, a) {
            e && b0(e, r, a), T(r, t, a), n = true;
          },
          p(r, a) {
            if (a & 1 && s !== (s = r[0])) {
              if (e) {
                qe();
                const u = e;
                C0(u.$$.fragment, 1, 0, () => {
                  g0(u, 1);
                }), Re();
              }
              s ? (e = _t(s, l(r, a)), e.$on("routeEvent", r[6]), y0(e.$$.fragment), d0(e.$$.fragment, 1), b0(e, t.parentNode, t)) : e = null;
            } else if (s) {
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
            n || (e && d0(e.$$.fragment, r), n = true);
          },
          o(r) {
            e && C0(e.$$.fragment, r), n = false;
          },
          d(r) {
            r && P(t), e && g0(e, r);
          }
        };
      }
      function Bl(x) {
        let e, t, n, o;
        const s = [
          El,
          dl
        ], l = [];
        function r(a, u) {
          return a[1] ? 0 : 1;
        }
        return e = r(x), t = l[e] = s[e](x), {
          c() {
            t.c(), n = X0();
          },
          m(a, u) {
            l[e].m(a, u), T(a, n, u), o = true;
          },
          p(a, [u]) {
            let f = e;
            e = r(a), e === f ? l[e].p(a, u) : (qe(), C0(l[f], 1, 1, () => {
              l[f] = null;
            }), Re(), t = l[e], t ? t.p(a, u) : (t = l[e] = s[e](a), t.c()), d0(t, 1), t.m(n.parentNode, n));
          },
          i(a) {
            o || (d0(t), o = true);
          },
          o(a) {
            C0(t), o = false;
          },
          d(a) {
            a && P(n), l[e].d(a);
          }
        };
      }
      function Kx() {
        const x = window.location.href.indexOf("#/");
        let e = x > -1 ? window.location.href.substr(x + 1) : "/";
        const t = e.indexOf("?");
        let n = "";
        return t > -1 && (n = e.substr(t + 1), e = e.substr(0, t)), {
          location: e,
          querystring: n
        };
      }
      const mx = as(null, function(e) {
        e(Kx());
        const t = () => {
          e(Kx());
        };
        return window.addEventListener("hashchange", t, false), function() {
          window.removeEventListener("hashchange", t, false);
        };
      }), Cl = is(mx, (x) => x.location);
      is(mx, (x) => x.querystring);
      const Wx = K0(void 0);
      async function i0(x) {
        if (!x || x.length < 1 || x.charAt(0) != "/" && x.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await ls(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (x.charAt(0) == "#" ? "" : "#") + x;
      }
      function Al(x) {
        x ? window.scrollTo(x.__svelte_spa_router_scrollX, x.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function Fl(x, e, t) {
        let { routes: n = {} } = e, { prefix: o = "" } = e, { restoreScrollState: s = false } = e;
        class l {
          constructor(D, p) {
            if (!p || typeof p != "function" && (typeof p != "object" || p._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!D || typeof D == "string" && (D.length < 1 || D.charAt(0) != "/" && D.charAt(0) != "*") || typeof D == "object" && !(D instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: k, keys: w } = fl(D);
            this.path = D, typeof p == "object" && p._sveltesparouter === true ? (this.component = p.component, this.conditions = p.conditions || [], this.userData = p.userData, this.props = p.props || {}) : (this.component = () => Promise.resolve(p), this.conditions = [], this.props = {}), this._pattern = k, this._keys = w;
          }
          match(D) {
            if (o) {
              if (typeof o == "string") if (D.startsWith(o)) D = D.substr(o.length) || "/";
              else return null;
              else if (o instanceof RegExp) {
                const y = D.match(o);
                if (y && y[0]) D = D.substr(y[0].length) || "/";
                else return null;
              }
            }
            const p = this._pattern.exec(D);
            if (p === null) return null;
            if (this._keys === false) return p;
            const k = {};
            let w = 0;
            for (; w < this._keys.length; ) {
              try {
                k[this._keys[w]] = decodeURIComponent(p[w + 1] || "") || null;
              } catch {
                k[this._keys[w]] = null;
              }
              w++;
            }
            return k;
          }
          async checkConditions(D) {
            for (let p = 0; p < this.conditions.length; p++) if (!await this.conditions[p](D)) return false;
            return true;
          }
        }
        const r = [];
        n instanceof Map ? n.forEach((_, D) => {
          r.push(new l(D, _));
        }) : Object.keys(n).forEach((_) => {
          r.push(new l(_, n[_]));
        });
        let a = null, u = null, f = {};
        const E = ns();
        async function C(_, D) {
          await ls(), E(_, D);
        }
        let B = null, A = null;
        s && (A = (_) => {
          _.state && (_.state.__svelte_spa_router_scrollY || _.state.__svelte_spa_router_scrollX) ? B = _.state : B = null;
        }, window.addEventListener("popstate", A), ol(() => {
          Al(B);
        }));
        let F = null, m = null;
        const h = mx.subscribe(async (_) => {
          F = _;
          let D = 0;
          for (; D < r.length; ) {
            const p = r[D].match(_.location);
            if (!p) {
              D++;
              continue;
            }
            const k = {
              route: r[D].path,
              location: _.location,
              querystring: _.querystring,
              userData: r[D].userData,
              params: p && typeof p == "object" && Object.keys(p).length ? p : null
            };
            if (!await r[D].checkConditions(k)) {
              t(0, a = null), m = null, C("conditionsFailed", k);
              return;
            }
            C("routeLoading", Object.assign({}, k));
            const w = r[D].component;
            if (m != w) {
              w.loading ? (t(0, a = w.loading), m = w, t(1, u = w.loadingParams), t(2, f = {}), C("routeLoaded", Object.assign({}, k, {
                component: a,
                name: a.name,
                params: u
              }))) : (t(0, a = null), m = null);
              const y = await w();
              if (_ != F) return;
              t(0, a = y && y.default || y), m = w;
            }
            p && typeof p == "object" && Object.keys(p).length ? t(1, u = p) : t(1, u = null), t(2, f = r[D].props), C("routeLoaded", Object.assign({}, k, {
              component: a,
              name: a.name,
              params: u
            })).then(() => {
              Wx.set(u);
            });
            return;
          }
          t(0, a = null), m = null, Wx.set(void 0);
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
          "routes" in _ && t(3, n = _.routes), "prefix" in _ && t(4, o = _.prefix), "restoreScrollState" in _ && t(5, s = _.restoreScrollState);
        }, x.$$.update = () => {
          x.$$.dirty & 32 && (history.scrollRestoration = s ? "manual" : "auto");
        }, [
          a,
          u,
          f,
          n,
          o,
          s,
          v,
          b
        ];
      }
      class pl extends D0 {
        constructor(e) {
          super(), p0(this, e, Fl, Bl, A0, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const Dl = "/assets/peachsafe_core_wasm_bg-C8H6g175.wasm", ml = async (x = {}, e) => {
        let t;
        if (e.startsWith("data:")) {
          const n = e.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(n, "base64");
          else if (typeof atob == "function") {
            const s = atob(n);
            o = new Uint8Array(s.length);
            for (let l = 0; l < s.length; l++) o[l] = s.charCodeAt(l);
          } else throw new Error("Cannot decode base64-encoded data URL");
          t = await WebAssembly.instantiate(o, x);
        } else {
          const n = await fetch(e), o = n.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(n, x);
          else {
            const s = await n.arrayBuffer();
            t = await WebAssembly.instantiate(s, x);
          }
        }
        return t.instance.exports;
      };
      function hl(x, e) {
        const t = F0.aesGcmDecrypt(x, e);
        if (t[2]) throw P0(t[1]);
        return P0(t[0]);
      }
      function vl(x, e) {
        const t = F0.aesGcmEncrypt(x, e);
        if (t[2]) throw P0(t[1]);
        return P0(t[0]);
      }
      function _l(x, e) {
        const t = ds(x, F0.__wbindgen_malloc, F0.__wbindgen_realloc), n = wt, o = F0.argon2idDerive(t, n, e);
        if (o[2]) throw P0(o[1]);
        return P0(o[0]);
      }
      function kl(x) {
        const e = F0.deriveAlertKey(x);
        if (e[2]) throw P0(e[1]);
        return P0(e[0]);
      }
      function bl(x, e) {
        const t = F0.deriveEncounterToken(x, e);
        if (t[2]) throw P0(t[1]);
        return P0(t[0]);
      }
      function gl(x) {
        const e = F0.ed25519PubkeyFromSeed(x);
        if (e[2]) throw P0(e[1]);
        return P0(e[0]);
      }
      function wl(x, e) {
        const t = F0.ed25519Sign(x, e);
        if (t[2]) throw P0(t[1]);
        return P0(t[0]);
      }
      function yl() {
        const x = F0.generateEphemeralKeypair();
        if (x[2]) throw P0(x[1]);
        return P0(x[0]);
      }
      function Pl(x) {
        return F0.generateRandomBytes(x);
      }
      function us(x) {
        return F0.sha256(x);
      }
      function Tl(x, e, t) {
        const n = ds(x, F0.__wbindgen_malloc, F0.__wbindgen_realloc), o = wt, s = F0.solvePoW(n, o, e, t);
        if (s[2]) throw P0(s[1]);
        return P0(s[0]);
      }
      function Sl(x) {
        return typeof x == "function";
      }
      function Il(x) {
        const e = x;
        return typeof e == "object" && e !== null;
      }
      function Ml(x) {
        return typeof x == "string";
      }
      function Ll(x) {
        return x === void 0;
      }
      function Nl(x, e) {
        throw new Error(fs(x, e));
      }
      function zl() {
        return et(function(x, e, t) {
          return x.call(e, t);
        }, arguments);
      }
      function ql(x) {
        return x.crypto;
      }
      function Rl() {
        return et(function(x, e) {
          x.getRandomValues(e);
        }, arguments);
      }
      function jl(x) {
        return x.length;
      }
      function Hl(x) {
        return x.msCrypto;
      }
      function Ol() {
        return new Object();
      }
      function Ul(x) {
        return new Uint8Array(x >>> 0);
      }
      function Vl(x) {
        return x.node;
      }
      function Gl(x) {
        return x.process;
      }
      function Yl(x, e, t) {
        Uint8Array.prototype.set.call(hx(x, e), t);
      }
      function Kl() {
        return et(function(x, e) {
          x.randomFillSync(e);
        }, arguments);
      }
      function Wl() {
        return et(function() {
          return module.require;
        }, arguments);
      }
      function Ql() {
        return et(function(x, e, t) {
          return Reflect.set(x, e, t);
        }, arguments);
      }
      function Jl(x, e, t) {
        x.set(hx(e, t));
      }
      function Xl() {
        const x = typeof global > "u" ? null : global;
        return jt(x) ? 0 : $e(x);
      }
      function Zl() {
        const x = typeof globalThis > "u" ? null : globalThis;
        return jt(x) ? 0 : $e(x);
      }
      function $l() {
        const x = typeof self > "u" ? null : self;
        return jt(x) ? 0 : $e(x);
      }
      function er() {
        const x = typeof window > "u" ? null : window;
        return jt(x) ? 0 : $e(x);
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
      function sr(x, e) {
        return fs(x, e);
      }
      function lr() {
        const x = F0.__wbindgen_externrefs, e = x.grow(4);
        x.set(0, void 0), x.set(e + 0, void 0), x.set(e + 1, null), x.set(e + 2, true), x.set(e + 3, false);
      }
      function $e(x) {
        const e = F0.__externref_table_alloc();
        return F0.__wbindgen_externrefs.set(e, x), e;
      }
      function hx(x, e) {
        return x = x >>> 0, Ve().subarray(x / 1, x / 1 + e);
      }
      function fs(x, e) {
        return x = x >>> 0, ar(x, e);
      }
      let Et = null;
      function Ve() {
        return (Et === null || Et.byteLength === 0) && (Et = new Uint8Array(F0.memory.buffer)), Et;
      }
      function et(x, e) {
        try {
          return x.apply(this, e);
        } catch (t) {
          const n = $e(t);
          F0.__wbindgen_exn_store(n);
        }
      }
      function jt(x) {
        return x == null;
      }
      function ds(x, e, t) {
        if (t === void 0) {
          const r = Ge.encode(x), a = e(r.length, 1) >>> 0;
          return Ve().subarray(a, a + r.length).set(r), wt = r.length, a;
        }
        let n = x.length, o = e(n, 1) >>> 0;
        const s = Ve();
        let l = 0;
        for (; l < n; l++) {
          const r = x.charCodeAt(l);
          if (r > 127) break;
          s[o + l] = r;
        }
        if (l !== n) {
          l !== 0 && (x = x.slice(l)), o = t(o, n, n = l + x.length * 3, 1) >>> 0;
          const r = Ve().subarray(o + l, o + n), a = Ge.encodeInto(x, r);
          l += a.written, o = t(o, n, l, 1) >>> 0;
        }
        return wt = l, o;
      }
      function P0(x) {
        const e = F0.__wbindgen_externrefs.get(x);
        return F0.__externref_table_dealloc(x), e;
      }
      let Dt = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Dt.decode();
      const rr = 2146435072;
      let Xt = 0;
      function ar(x, e) {
        return Xt += e, Xt >= rr && (Dt = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), Dt.decode(), Xt = e), Dt.decode(Ve().subarray(x, x + e));
      }
      const Ge = new TextEncoder();
      "encodeInto" in Ge || (Ge.encodeInto = function(x, e) {
        const t = Ge.encode(x);
        return e.set(t), {
          read: x.length,
          written: t.length
        };
      });
      let wt = 0, F0;
      function ir(x) {
        F0 = x;
      }
      URL = globalThis.URL;
      const cr = await ml({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: ql,
          __wbg_process_44c7a14e11e9f69e: Gl,
          __wbg_versions_276b2795b1c6a219: xr,
          __wbg_node_84ea875411254db1: Vl,
          __wbg_require_b4edbdcf3e2a1ef0: Wl,
          __wbg_call_a24592a6f349a97e: zl,
          __wbg_msCrypto_bd5a034af96bcba6: Hl,
          __wbg_randomFillSync_6c25eac9869eb53c: Kl,
          __wbg_getRandomValues_c44a50d8cfdaebeb: Rl,
          __wbg_new_aa8d0fa9762c29bd: Ol,
          __wbg_length_9f1775224cf1d815: jl,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: Yl,
          __wbg_new_with_length_8c854e41ea4dae9b: Ul,
          __wbg_subarray_f8ca46a25b1f5e0d: tr,
          __wbg_set_3d484eb794afec82: Jl,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: Zl,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: $l,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: Xl,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: er,
          __wbg_set_022bee52d0b05b19: Ql,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: Nl,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: Il,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: Ml,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: Sl,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: Ll,
          __wbindgen_init_externref_table: lr,
          __wbindgen_cast_0000000000000001: nr,
          __wbindgen_cast_0000000000000002: or,
          __wbindgen_cast_0000000000000003: sr
        }
      }, Dl), { memory: ur, aesGcmDecrypt: fr, aesGcmEncrypt: dr, argon2idDerive: Er, deriveAlertKey: Br, deriveEncounterToken: Cr, ed25519PubkeyFromSeed: Ar, ed25519Sign: Fr, ed25519Verify: pr, generateEphemeralKeypair: Dr, generateRandomBytes: mr, generateUserKeypair: hr, main: vr, serializePublicKey: _r, sha256: kr, solvePoW: br, __wbindgen_exn_store: gr, __externref_table_alloc: wr, __wbindgen_externrefs: yr, __externref_table_dealloc: Pr, __wbindgen_malloc: Tr, __wbindgen_realloc: Sr, __wbindgen_free: Ir, __wbindgen_start: Es } = cr, Mr = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: wr,
        __externref_table_dealloc: Pr,
        __wbindgen_exn_store: gr,
        __wbindgen_externrefs: yr,
        __wbindgen_free: Ir,
        __wbindgen_malloc: Tr,
        __wbindgen_realloc: Sr,
        __wbindgen_start: Es,
        aesGcmDecrypt: fr,
        aesGcmEncrypt: dr,
        argon2idDerive: Er,
        deriveAlertKey: Br,
        deriveEncounterToken: Cr,
        ed25519PubkeyFromSeed: Ar,
        ed25519Sign: Fr,
        ed25519Verify: pr,
        generateEphemeralKeypair: Dr,
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
      Es();
      let ux = false;
      async function Lr() {
        ux || (ux = true);
      }
      function J0() {
        if (!ux) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function N0(x) {
        const e = new Uint8Array(x.length / 2);
        for (let t = 0; t < x.length; t += 2) e[t / 2] = parseInt(x.slice(t, t + 2), 16);
        return e;
      }
      function t0(x) {
        return Array.from(x).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function tt(x) {
        return J0(), Pl(x);
      }
      async function le(x, e) {
        return J0(), await new Promise((t) => setTimeout(t, 0)), _l(x, e);
      }
      function xt(x, e) {
        return J0(), vl(x, e);
      }
      function Ht(x, e) {
        return J0(), hl(x, e);
      }
      function Nr() {
        return J0(), yl();
      }
      function zr(x, e) {
        return J0(), bl(x, e);
      }
      function Bs(x) {
        return J0(), gl(x);
      }
      function Cs(x, e) {
        return J0(), wl(x, e);
      }
      function qr(x) {
        return J0(), us(x);
      }
      function As(x) {
        return J0(), kl(x);
      }
      function Rr(x, e, t) {
        return J0(), Tl(x, e, t);
      }
      function Fe(x) {
        let e = "";
        for (let t = 0; t < x.length; t++) e += String.fromCharCode(x[t]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function Fs(x) {
        const t = (x + "===".slice((x.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(t), (n) => n.charCodeAt(0));
      }
      function jr(x, e, t, n) {
        const o = n && n.trim() ? encodeURIComponent(n.trim()) : "";
        return `2|${x}|${e}|${t}|${o}`;
      }
      function Qx(x) {
        const e = x.split("|");
        if (!e.length || e[0] !== "2") return null;
        if (e.length < 4 || e.length > 5) throw new Error("Invalid group QR payload");
        const t = e[1], n = parseInt(e[2], 10), o = e[3], s = e.length === 5 && e[4] ? decodeURIComponent(e[4]) : null;
        if (isNaN(n) || t.length !== 64 || o.length !== 64) throw new Error("Invalid group QR payload");
        return {
          groupTokenHex: t,
          timestamp: n,
          hostContactIdHex: o,
          name: s
        };
      }
      function Ae(x, e, t) {
        J0();
        const n = new Uint8Array(68);
        return n.set(x, 0), n.set(e, 32), n[64] = t >>> 24 & 255, n[65] = t >>> 16 & 255, n[66] = t >>> 8 & 255, n[67] = t & 255, us(n);
      }
      const pe = K0("ok");
      let ps = "ok";
      pe.subscribe((x) => {
        ps = x;
      });
      let yt = null;
      function Hr() {
        clearTimeout(yt), pe.set("retrying");
      }
      function Or() {
        ps !== "ok" && (clearTimeout(yt), pe.set("reconnected"), yt = setTimeout(() => pe.set("ok"), 3e3));
      }
      function Jx() {
        clearTimeout(yt), pe.set("down");
      }
      function Xx(x) {
        let e;
        function t(s, l) {
          if (s[0] === "retrying") return Gr;
          if (s[0] === "down") return Vr;
          if (s[0] === "reconnected") return Ur;
        }
        let n = t(x), o = n && n(x);
        return {
          c() {
            e = d("div"), o && o.c(), c(e, "class", "banner svelte-176fo9c"), c(e, "role", "status"), c(e, "aria-live", "polite"), e0(e, "retrying", x[0] === "retrying"), e0(e, "down", x[0] === "down"), e0(e, "reconnected", x[0] === "reconnected");
          },
          m(s, l) {
            T(s, e, l), o && o.m(e, null);
          },
          p(s, l) {
            n !== (n = t(s)) && (o && o.d(1), o = n && n(s), o && (o.c(), o.m(e, null))), l & 1 && e0(e, "retrying", s[0] === "retrying"), l & 1 && e0(e, "down", s[0] === "down"), l & 1 && e0(e, "reconnected", s[0] === "reconnected");
          },
          d(s) {
            s && P(e), o && o.d();
          }
        };
      }
      function Ur(x) {
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
      function Yr(x) {
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
          i: X,
          o: X,
          d(n) {
            n && P(e), t && t.d(n);
          }
        };
      }
      function Kr(x, e, t) {
        let n;
        return H0(x, pe, (o) => t(0, n = o)), [
          n
        ];
      }
      class Wr extends D0 {
        constructor(e) {
          super(), p0(this, e, Kr, Yr, A0, {});
        }
      }
      const Ot = K0(false);
      function Qr() {
        Ot.set(false);
      }
      const m0 = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", Zt = [
        1e3,
        2e3,
        4e3
      ], Zx = /* @__PURE__ */ new Set([
        502,
        503,
        504
      ]);
      async function fe(x, e = {}) {
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
            if (!Zx.has(o.status) || n >= Zt.length) return Zx.has(o.status) ? Jx() : Or(), o;
          } catch (o) {
            if (n >= Zt.length) throw Jx(), o;
          }
          Hr(), await new Promise((o) => setTimeout(o, Zt[n]));
        }
      }
      let De = null, vx = null, _x = null;
      const Je = "peachsafe_device_tokens";
      function Jr(x) {
        try {
          return JSON.parse(localStorage.getItem(Je) ?? "{}")[x] ?? null;
        } catch {
          return null;
        }
      }
      function Xr(x, e) {
        try {
          const t = JSON.parse(localStorage.getItem(Je) ?? "{}");
          t[x] = e, localStorage.setItem(Je, JSON.stringify(t));
        } catch {
        }
      }
      function $t(x) {
        try {
          const e = JSON.parse(localStorage.getItem(Je) ?? "{}");
          delete e[x], localStorage.setItem(Je, JSON.stringify(e));
        } catch {
        }
      }
      const he = K0(null), Ut = K0(null), Xe = K0(null), Ye = K0(null), Pt = K0(null);
      function G0() {
        return De !== null;
      }
      function kx(x) {
        vx = x;
      }
      function me() {
        return vx;
      }
      function Ds(x) {
        _x = x;
      }
      function mt() {
        return _x;
      }
      function ms() {
        De = null, vx = null, _x = null, he.set(null), Ut.set(null), Xe.set(null), Ye.set(null), Pt.set(null), Qr();
      }
      async function Zr() {
        try {
          const x = await $r();
          he.set(x.verified);
        } catch {
        }
      }
      async function $r() {
        const x = await O0(`${m0}/v1/web/user/email`);
        if (!x.ok) throw new Error(await _0(x));
        return x.json();
      }
      async function ea(x) {
        const e = await O0(`${m0}/v1/web/user/request-email-change`, {
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
        const x = await O0(`${m0}/v1/web/user/resend-verification`, {
          method: "POST"
        });
        if (!x.ok) throw new Error(await _0(x));
      }
      async function xa(x) {
        const e = await fe(`${m0}/v1/verify-email`, {
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
        const e = await fe(`${m0}/v1/prelogin`, {
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
        const n = await fe(`${m0}/v1/signup`, {
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
        return De = o.session_token, he.set(false), o;
      }
      async function $x(x, e, t = null, n = false) {
        const o = {
          username: x,
          auth_signature: e
        };
        t && (o.otp = t), n && (o.remember_device = true);
        const s = Jr(x);
        s && (o.device_token = s);
        const l = await fe(`${m0}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(o)
        });
        if (!l.ok) throw new Error(await _0(l));
        const r = await l.json();
        return r.requires_otp || (De = r.session_token, r.device_token && Xr(x, r.device_token), r.bootstrap ? (he.set(r.bootstrap.email_verified), Ut.set(r.bootstrap.email), Xe.set(r.bootstrap.totp_enabled), Ye.set(r.bootstrap.trusted_devices ?? null), Pt.set(r.bootstrap.backup_code_count ?? null)) : Zr()), r;
      }
      async function oa() {
        const x = await O0(`${m0}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!x.ok) throw new Error(await _0(x));
        return x.json();
      }
      async function sa(x, e) {
        const t = await O0(`${m0}/v1/web/totp/confirm`, {
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
      async function la() {
        const x = await O0(`${m0}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!x.ok) throw new Error(await _0(x));
      }
      async function ra() {
        const x = await O0(`${m0}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!x.ok) throw new Error(await _0(x));
        return x.json();
      }
      async function aa(x) {
        const e = await O0(`${m0}/v1/web/trusted-devices/${x}`, {
          method: "DELETE"
        });
        if (!e.ok) throw new Error(await _0(e));
      }
      async function ia() {
        const x = await O0(`${m0}/v1/web/trusted-devices`, {
          method: "DELETE"
        });
        if (!x.ok) throw new Error(await _0(x));
      }
      async function gx() {
        if (!De) return;
        const x = De;
        ms(), fe(`${m0}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${x}`
          }
        }).catch(() => {
        });
      }
      async function ca() {
        const x = await O0(`${m0}/v1/web/user/blob`);
        if (!x.ok) throw new Error(await _0(x));
        return x.json();
      }
      async function ua(x, e) {
        const t = await O0(`${m0}/v1/web/user/blob`, {
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
      async function hs(x, e) {
        const t = await O0(`${m0}/v1/web/user/encounters`, {
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
      async function fa(x, e, t, n) {
        const o = await O0(`${m0}/v1/web/user/change-password`, {
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
      async function da() {
        const x = await O0(`${m0}/v1/web/user`, {
          method: "DELETE"
        });
        if (!x.ok) throw new Error(await _0(x));
        ms();
      }
      async function Ea(x) {
        const e = await fe(`${m0}/v1/query`, {
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
        const e = await O0(`${m0}/v1/web/user/encounters/by-token/${x}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await _0(e));
      }
      async function Ca(x) {
        const e = await fe(`${m0}/v1/submit`, {
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
        const s = await _0(e), l = new Error(s);
        throw l.statusCode = e.status, l.serverTime = t, l.powDifficulty = o, l;
      }
      function vs() {
        fetch(m0, {
          method: "HEAD"
        }).catch(() => {
        });
      }
      function O0(x, e = {}) {
        return fe(x, {
          ...e,
          headers: {
            Authorization: `Bearer ${De}`,
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
      const en = 15 * 60 * 1e3, Aa = 2 * 60 * 1e3, _s = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let fx = null, dx = null, wx = null, yx = null, Vt = false, nt = false;
      function Px() {
        clearTimeout(fx), clearTimeout(dx), dx = setTimeout(() => {
          nt = true, wx?.();
        }, en - Aa), fx = setTimeout(() => yx?.(), en);
      }
      function ks() {
        Vt && !nt && Px();
      }
      function Fa({ onWarnCallback: x, onExpiredCallback: e }) {
        Ex(), wx = x, yx = e, Vt = true, nt = false;
        for (const t of _s) document.addEventListener(t, ks, {
          passive: true
        });
        Px();
      }
      function Ex() {
        clearTimeout(fx), clearTimeout(dx);
        for (const x of _s) document.removeEventListener(x, ks);
        Vt = false, nt = false, wx = null, yx = null;
      }
      function pa() {
        nt = false, Vt && Px();
      }
      function Da(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D, p, k, w, y, S, M, I, L, N, q, R, j, H, Q, K, G, U, J;
        return {
          c() {
            e = d("main"), t = d("section"), t.innerHTML = `<div class="blob blob-1 svelte-1vrywgg" aria-hidden="true"></div> <div class="blob blob-2 svelte-1vrywgg" aria-hidden="true"></div> <div class="blob blob-3 svelte-1vrywgg" aria-hidden="true"></div> <div class="hero-content svelte-1vrywgg"><div class="hero-brand svelte-1vrywgg"><img src="/android-chrome-192x192.png" alt="" class="hero-icon svelte-1vrywgg"/> <span><span class="brand-peach svelte-1vrywgg">Peach</span><span class="brand-safe svelte-1vrywgg">Safe</span></span></div> <p class="hero-tagline svelte-1vrywgg">Know if you need to get tested \u2014 without anyone knowing who you slept with.</p> <p class="hero-sub svelte-1vrywgg">PeachSafe lets you notify past partners when you test positive for an STI,
        and get notified if a partner tests positive. No one ever learns who was
        with whom \u2014 not your partners, not us.</p> <div class="cta-buttons svelte-1vrywgg"><a href="#/signup" class="btn-primary svelte-1vrywgg">Sign up</a> <a href="#/login" class="btn-ghost svelte-1vrywgg">Log in</a></div></div> <div class="hero-scroll-hint svelte-1vrywgg" aria-hidden="true"><span class="material-icons svelte-1vrywgg">expand_more</span></div>`, n = g(), o = d("section"), s = d("div"), l = d("h2"), l.textContent = "How it works", r = g(), a = d("div"), u = d("div"), u.innerHTML = '<div class="step-number svelte-1vrywgg">1</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Exchange a code</h3> <p class="svelte-1vrywgg">Before a sexual encounter, both people scan each other&#39;s QR code. This generates a private, anonymous token that only the two of you share. Nothing identifying is stored or transmitted.</p></div>', f = g(), E = d("div"), E.innerHTML = '<div class="step-number svelte-1vrywgg">2</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Record a positive result</h3> <p class="svelte-1vrywgg">If you test positive, mark it in PeachSafe. Select what you tested positive for - notifications are specific, not vague.</p></div>', C = g(), B = d("div"), B.innerHTML = '<div class="step-number svelte-1vrywgg">3</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Partners are notified</h3> <p class="svelte-1vrywgg">PeachSafe notifies anyone who should know. If a past partner records a positive result, you&#39;ll receive an email. Neither of you learns the other&#39;s identity from the system.</p></div>', A = g(), F = d("div"), F.innerHTML = '<a href="#/how-it-works" class="svelte-1vrywgg">Want the technical deep dive? How it works in detail \u2192</a>', m = g(), h = d("section"), v = d("div"), b = d("h2"), b.textContent = "Why it's private", _ = g(), D = d("div"), p = d("div"), p.innerHTML = '<span class="material-icons svelte-1vrywgg">lock</span> <span>Your encounter data is encrypted. Only you can access it</span>', k = g(), w = d("div"), w.innerHTML = '<span class="material-icons svelte-1vrywgg">visibility_off</span> <span>The server is a blind message board; it can&#39;t connect notifications to real people</span>', y = g(), S = d("div"), S.innerHTML = '<span class="material-icons svelte-1vrywgg">shuffle</span> <span>Queries are padded with noise so even traffic analysis reveals nothing</span>', M = g(), I = d("div"), I.innerHTML = '<span class="material-icons svelte-1vrywgg">person_off</span> <span>No account is linked to your real name, phone number, or location</span>', L = g(), N = d("section"), q = d("div"), R = d("h2"), R.textContent = "Who it's for", j = g(), H = d("p"), H.textContent = `People who want to take sexual health seriously without the social and legal
        risks of conventional contact tracing \u2014 whether you're navigating dating apps,
        multiple partners, or just value your privacy.`, Q = g(), K = d("footer"), G = d("div"), G.innerHTML = '<a href="#/signup" class="btn-primary svelte-1vrywgg">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-1vrywgg">Log in</a>', c(t, "class", "hero svelte-1vrywgg"), c(l, "class", "svelte-1vrywgg"), c(u, "class", "step svelte-1vrywgg"), c(E, "class", "step svelte-1vrywgg"), c(B, "class", "step svelte-1vrywgg"), c(a, "class", "steps svelte-1vrywgg"), c(F, "class", "deep-dive svelte-1vrywgg"), c(s, "class", "section-inner svelte-1vrywgg"), c(o, "class", "how-it-works svelte-1vrywgg"), c(b, "class", "svelte-1vrywgg"), c(p, "class", "privacy-card svelte-1vrywgg"), c(w, "class", "privacy-card svelte-1vrywgg"), c(S, "class", "privacy-card svelte-1vrywgg"), c(I, "class", "privacy-card svelte-1vrywgg"), c(D, "class", "privacy-grid svelte-1vrywgg"), c(v, "class", "section-inner svelte-1vrywgg"), c(h, "class", "privacy svelte-1vrywgg"), c(R, "class", "svelte-1vrywgg"), c(H, "class", "svelte-1vrywgg"), c(q, "class", "section-inner svelte-1vrywgg"), c(N, "class", "who svelte-1vrywgg"), c(G, "class", "footer-inner svelte-1vrywgg"), c(K, "class", "svelte-1vrywgg"), c(e, "data-theme", "light"), c(e, "class", "svelte-1vrywgg");
          },
          m(Y, r0) {
            T(Y, e, r0), i(e, t), i(e, n), i(e, o), i(o, s), i(s, l), i(s, r), i(s, a), i(a, u), i(a, f), i(a, E), i(a, C), i(a, B), i(s, A), i(s, F), i(e, m), i(e, h), i(h, v), i(v, b), i(v, _), i(v, D), i(D, p), i(D, k), i(D, w), i(D, y), i(D, S), i(D, M), i(D, I), i(e, L), i(e, N), i(N, q), i(q, R), i(q, j), i(q, H), i(e, Q), i(e, K), i(K, G), U || (J = [
              k0(x[0].call(null, l)),
              k0(x[0].call(null, u, 0)),
              k0(x[0].call(null, E, 80)),
              k0(x[0].call(null, B, 160)),
              k0(x[0].call(null, F, 240)),
              k0(x[0].call(null, b)),
              k0(x[0].call(null, p, 0)),
              k0(x[0].call(null, w, 70)),
              k0(x[0].call(null, S, 140)),
              k0(x[0].call(null, I, 210)),
              k0(x[0].call(null, R)),
              k0(x[0].call(null, H, 60)),
              k0(x[0].call(null, G))
            ], U = true);
          },
          p: X,
          i: X,
          o: X,
          d(Y) {
            Y && P(e), U = false, s0(J);
          }
        };
      }
      function ma(x) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function t(n, o = 0) {
          if (e()) return {};
          n.style.opacity = "0", n.style.transform = "translateY(20px)", n.style.transition = `opacity 0.55s ease ${o}ms, transform 0.55s ease ${o}ms`;
          const s = new IntersectionObserver(([l]) => {
            l.isIntersecting && (n.style.opacity = "1", n.style.transform = "translateY(0)", s.disconnect());
          }, {
            threshold: 0.1
          });
          return s.observe(n), {
            destroy() {
              s.disconnect();
            }
          };
        }
        return [
          t
        ];
      }
      class ha extends D0 {
        constructor(e) {
          super(), p0(this, e, ma, Da, A0, {});
        }
      }
      function va(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D, p, k, w;
        return {
          c() {
            e = d("main"), t = d("nav"), t.innerHTML = `<a href="#/" class="nav-brand svelte-1fjur97"><img src="/android-chrome-192x192.png" alt="" class="nav-icon svelte-1fjur97"/> <span><span class="brand-peach svelte-1fjur97">Peach</span><span class="brand-safe svelte-1fjur97">Safe</span></span></a> <a href="#/" class="nav-back svelte-1fjur97"><span class="material-icons svelte-1fjur97">arrow_back</span>
      Back</a>`, n = g(), o = d("section"), o.innerHTML = '<div class="blob blob-1 svelte-1fjur97" aria-hidden="true"></div> <div class="blob blob-2 svelte-1fjur97" aria-hidden="true"></div> <div class="hero-content svelte-1fjur97"><div class="hero-eyebrow svelte-1fjur97">Technical deep dive</div> <h1 class="svelte-1fjur97">How PeachSafe protects your privacy</h1> <p class="svelte-1fjur97">PeachSafe is built so that even we can&#39;t know who you slept with, who notified you, or what you tested positive for. Here&#39;s exactly how.</p></div>', s = g(), l = d("nav"), l.innerHTML = '<div class="toc-inner svelte-1fjur97"><a href="#login" class="svelte-1fjur97">Authentication</a> <span class="toc-sep svelte-1fjur97" aria-hidden="true">\xB7</span> <a href="#encounters" class="svelte-1fjur97">1:1 Encounters</a> <span class="toc-sep svelte-1fjur97" aria-hidden="true">\xB7</span> <a href="#relationships" class="svelte-1fjur97">Ongoing Relationships</a> <span class="toc-sep svelte-1fjur97" aria-hidden="true">\xB7</span> <a href="#groups" class="svelte-1fjur97">Group Encounters</a> <span class="toc-sep svelte-1fjur97" aria-hidden="true">\xB7</span> <a href="#encryption" class="svelte-1fjur97">Encryption</a> <span class="toc-sep svelte-1fjur97" aria-hidden="true">\xB7</span> <a href="#noise" class="svelte-1fjur97">Noise Padding</a></div>', r = g(), a = d("div"), u = d("section"), u.innerHTML = '<div class="section-header svelte-1fjur97"><div class="icon-chip svelte-1fjur97"><span class="material-icons svelte-1fjur97">key</span></div> <h2 class="svelte-1fjur97">How does authentication work?</h2></div> <div class="section-body svelte-1fjur97"><p class="svelte-1fjur97">At signup, your device derives a cryptographic key pair from your password and stores only the public key on the server. The password itself is never sent.</p> <p class="svelte-1fjur97">When you log in, the server issues a fresh random challenge. Your device hashes your password with an auth salt to derive a private key, signs the challenge with it, and sends the signature \u2014 not the password \u2014 to the server. The server verifies the signature using the stored public key.</p> <p class="svelte-1fjur97">A separate hash of your password against an encryption salt produces the key used to decrypt your data blob, which the server holds but cannot read.</p> <p class="svelte-1fjur97">Both salts are generated deterministically on the server by hashing your username with a server-side secret, so they can be retrieved at login time without storing any per-user secret in plaintext.</p> <div class="callout svelte-1fjur97"><span class="material-icons svelte-1fjur97">check_circle</span> <span>Your password never leaves your device. Each login uses a fresh challenge, preventing replay attacks.</span></div></div>', f = g(), E = d("section"), E.innerHTML = '<div class="section-header svelte-1fjur97"><div class="icon-chip svelte-1fjur97"><span class="material-icons svelte-1fjur97">qr_code_scanner</span></div> <h2 class="svelte-1fjur97">How do 1:1 encounters work?</h2></div> <div class="section-body svelte-1fjur97"><p class="svelte-1fjur97">Before a sexual encounter, both people scan each other&#39;s QR codes. This performs a Diffie-Hellman key exchange, producing a shared raw token that only the two of you can compute. Each QR code also contains a <em class="svelte-1fjur97">contact ID</em> \u2014 a stable identifier used to detect repeat encounters (see Ongoing Relationships below).</p> <h3 class="svelte-1fjur97">Sending a result</h3> <p class="svelte-1fjur97">When you test positive, PeachSafe sends an encrypted result to the server along with a token for each relevant encounter. Partners independently query the server with their own tokens to check for matches.</p> <h3 class="svelte-1fjur97">Directional tokens</h3> <p class="svelte-1fjur97">Tokens are directional: the token Alice uses to notify Bob is different from the one Bob uses to notify Alice. If both queried for the same token, the server could infer they&#39;d been together. With different tokens, the server sees no link between them.</p> <h3 class="svelte-1fjur97">Single-use tokens</h3> <p class="svelte-1fjur97">Each positive result uses a fresh token, derived as:</p> <div class="formula svelte-1fjur97"><code class="svelte-1fjur97">token = hash(raw_token,  recipient&#39;s contact_id,  result_number)</code></div> <p class="svelte-1fjur97">The result number increments with each positive result sent, so tokens are never reused. This makes it harder for a bad actor to track or correlate results over time.</p> <h3 class="svelte-1fjur97">Encrypted results</h3> <p class="svelte-1fjur97">Results are encrypted with a key derived from the sender&#39;s contact ID. Only someone who has exchanged QR codes with you holds that ID \u2014 the server never does. Even if the server&#39;s database were compromised, the results themselves would be unreadable.</p> <div class="callout svelte-1fjur97"><span class="material-icons svelte-1fjur97">check_circle</span> <span>Contact IDs are never sent to the server. The server stores ciphertext it cannot decrypt.</span></div></div>', C = g(), B = d("section"), B.innerHTML = '<div class="section-header svelte-1fjur97"><div class="icon-chip svelte-1fjur97"><span class="material-icons svelte-1fjur97">favorite</span></div> <h2 class="svelte-1fjur97">How do ongoing relationships work?</h2></div> <div class="section-body svelte-1fjur97"><p class="svelte-1fjur97">Positive test results only notify encounters from the past 12 months. For regular partners \u2014 a FWB, for example \u2014 recreating an encounter each time would be cumbersome. PeachSafe detects repeat encounters using the stable contact ID in each QR code and asks if you&#39;d like to mark the person as an ongoing relationship.</p> <p class="svelte-1fjur97">Ongoing relationships remain active until either partner marks them as ended. Instead of the standard 12-month window, notifications continue until 12 months after the relationship was marked ended.</p> <div class="callout svelte-1fjur97"><span class="material-icons svelte-1fjur97">check_circle</span> <span>Contact IDs are never stored unencrypted, so repeat encounters cannot be linked by anyone with access to the server.</span></div></div>', A = g(), F = d("section"), F.innerHTML = '<div class="section-header svelte-1fjur97"><div class="icon-chip svelte-1fjur97"><span class="material-icons svelte-1fjur97">group</span></div> <h2 class="svelte-1fjur97">How do group encounters work?</h2></div> <div class="section-body svelte-1fjur97"><p class="svelte-1fjur97">Mutual QR scanning doesn&#39;t scale to groups. Instead, one person hosts the encounter and everyone else scans their single QR code to join. New participants can be added for up to 24 hours after the group is created.</p> <p class="svelte-1fjur97">Unlike 1:1 encounters \u2014 where the raw token comes from a Diffie-Hellman exchange \u2014 the group token is randomly generated by the host and distributed to all participants via the QR code. Everyone in the group queries the server for the same token when checking for results.</p> <div class="callout callout-warn svelte-1fjur97"><span class="material-icons svelte-1fjur97">info</span> <span>This is slightly less private than 1:1 encounters: a compromised server that sees multiple users querying the same token could infer they were in the same encounter.</span></div> <p class="svelte-1fjur97">Single-use tokens still apply \u2014 each positive result uses a new token derived from an incrementing result number, so repeated results can&#39;t be correlated over time.</p></div>', m = g(), h = d("section"), h.innerHTML = '<div class="section-header svelte-1fjur97"><div class="icon-chip svelte-1fjur97"><span class="material-icons svelte-1fjur97">encrypted</span></div> <h2 class="svelte-1fjur97">How is my data encrypted?</h2></div> <div class="section-body svelte-1fjur97"><p class="svelte-1fjur97">The web client encrypts all of your data \u2014 encounters, results, contact IDs \u2014 into a single blob using the key derived from your password. The server stores the blob but has no access to the decryption key and cannot read its contents.</p> <p class="svelte-1fjur97">The only things stored unencrypted on the server are <em class="svelte-1fjur97">notification tokens</em> and your user record (email address). Notification tokens are the receive-side tokens for each of your encounters \u2014 the tokens a partner would use to send a result to you. They&#39;re pre-uploaded so the server can match incoming positive results against them and send you an alert email, without being able to read the result itself.</p> <div class="callout svelte-1fjur97"><span class="material-icons svelte-1fjur97">check_circle</span> <span>We recommend using an email alias \u2014 such as <a href="https://addy.io" target="_blank" rel="noopener" class="svelte-1fjur97">addy.io</a> \u2014 if you&#39;d prefer we don&#39;t store your real address.</span></div></div>', v = g(), b = d("section"), b.innerHTML = '<div class="section-header svelte-1fjur97"><div class="icon-chip svelte-1fjur97"><span class="material-icons svelte-1fjur97">shuffle</span></div> <h2 class="svelte-1fjur97">What is noise padding?</h2></div> <div class="section-body svelte-1fjur97"><p class="svelte-1fjur97">If PeachSafe queried for exactly as many tokens as you have encounters, a network observer could count your encounters from traffic alone. Instead, the app picks a random, higher number and queries for that many tokens \u2014 your real ones mixed with randomly generated decoys.</p> <p class="svelte-1fjur97">For example, even if you&#39;ve had a single encounter, your device might query the server for 87 tokens. The server cannot tell which tokens are real and which are noise, and neither can anyone watching the traffic. Your actual number of encounters stays private.</p></div>', _ = g(), D = d("footer"), p = d("div"), p.innerHTML = '<p class="footer-cta-label svelte-1fjur97">Ready to try it?</p> <div class="footer-ctas svelte-1fjur97"><a href="#/signup" class="btn-primary svelte-1fjur97">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-1fjur97">Log in</a></div>', c(t, "class", "topnav svelte-1fjur97"), c(o, "class", "hero svelte-1fjur97"), c(l, "class", "toc svelte-1fjur97"), c(l, "aria-label", "On this page"), c(u, "class", "card svelte-1fjur97"), c(u, "id", "login"), c(E, "class", "card svelte-1fjur97"), c(E, "id", "encounters"), c(B, "class", "card svelte-1fjur97"), c(B, "id", "relationships"), c(F, "class", "card svelte-1fjur97"), c(F, "id", "groups"), c(h, "class", "card svelte-1fjur97"), c(h, "id", "encryption"), c(b, "class", "card svelte-1fjur97"), c(b, "id", "noise"), c(a, "class", "content svelte-1fjur97"), c(p, "class", "footer-inner"), c(D, "class", "svelte-1fjur97"), c(e, "data-theme", "light"), c(e, "class", "svelte-1fjur97");
          },
          m(y, S) {
            T(y, e, S), i(e, t), i(e, n), i(e, o), i(e, s), i(e, l), i(e, r), i(e, a), i(a, u), i(a, f), i(a, E), i(a, C), i(a, B), i(a, A), i(a, F), i(a, m), i(a, h), i(a, v), i(a, b), i(e, _), i(e, D), i(D, p), k || (w = [
              k0(x[0].call(null, u)),
              k0(x[0].call(null, E)),
              k0(x[0].call(null, B)),
              k0(x[0].call(null, F)),
              k0(x[0].call(null, h)),
              k0(x[0].call(null, b)),
              k0(x[0].call(null, p))
            ], k = true);
          },
          p: X,
          i: X,
          o: X,
          d(y) {
            y && P(e), k = false, s0(w);
          }
        };
      }
      function _a(x) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function t(n, o = 0) {
          if (e()) return {};
          n.style.opacity = "0", n.style.transform = "translateY(20px)", n.style.transition = `opacity 0.55s ease ${o}ms, transform 0.55s ease ${o}ms`;
          const s = new IntersectionObserver(([l]) => {
            l.isIntersecting && (n.style.opacity = "1", n.style.transform = "translateY(0)", s.disconnect());
          }, {
            threshold: 0.1
          });
          return s.observe(n), {
            destroy() {
              s.disconnect();
            }
          };
        }
        return [
          t
        ];
      }
      class ka extends D0 {
        constructor(e) {
          super(), p0(this, e, _a, va, A0, {});
        }
      }
      const bs = K0(false), Tx = K0(null);
      function Sx() {
        bs.set((W?.receivedAlerts || []).some((x) => !x.viewed));
      }
      function Tt() {
        Tx.set(W?.pin ?? null);
      }
      const ba = 12 * 1024, gs = ba * 0.75, ws = K0(false), ys = 18262, Ps = 65535, ga = 45, xe = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], Ke = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, Ts = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function we(x) {
        const e = (/* @__PURE__ */ new Date(x + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - ys;
      }
      function ye(x) {
        const e = (ys + x) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      function Ix(x) {
        const e = x.encounters, t = x.results || [], n = x.receivedAlerts || [], o = x.relationships || [], s = x.groupEncounters || [], l = e.length, r = t.length, a = n.length, u = o.length, f = s.length, E = new TextEncoder(), C = (k) => k ? E.encode(k).slice(0, 255) : new Uint8Array(0), B = e.map((k) => C(k.note)), A = o.map((k) => C(k.name)), F = s.map((k) => C(k.name)), m = s.map((k) => C(k.note)), h = x.pin ? E.encode(x.pin).slice(0, 4) : new Uint8Array(0), v = e.reduce((k, w, y) => k + 70 + 1 + B[y].length, 0), b = o.reduce((k, w, y) => k + 73 + 1 + A[y].length, 0), _ = s.reduce((k, w, y) => k + 73 + 1 + F[y].length + 1 + m[y].length, 0), D = new Uint8Array(35 + v + 2 + r * 4 + 2 + a * 36 + 2 + b + 2 + _ + 1 + h.length);
        let p = 0;
        D[p++] = 2, D.set(x.myContactId, p), p += 32, D[p++] = l >> 8 & 255, D[p++] = l & 255;
        for (let k = 0; k < l; k++) {
          const w = e[k];
          D.set(w.rawToken, p), p += 32, D.set(w.theirContactId, p), p += 32;
          const y = we(w.date);
          D[p++] = y >> 8 & 255, D[p++] = y & 255, D[p++] = w.queryIndex >> 8 & 255, D[p++] = w.queryIndex & 255, D[p++] = w.submitIndex >> 8 & 255, D[p++] = w.submitIndex & 255, D[p++] = B[k].length, D.set(B[k], p), p += B[k].length;
        }
        D[p++] = r >> 8 & 255, D[p++] = r & 255;
        for (const k of t) {
          const w = we(k.date);
          D[p++] = w >> 8 & 255, D[p++] = w & 255, D[p++] = k.hasNotified ? 1 : 0;
          let y = 0;
          for (let S = 0; S < xe.length; S++) (k.positiveDiseases || []).includes(xe[S]) && (y |= 1 << S);
          D[p++] = y;
        }
        D[p++] = a >> 8 & 255, D[p++] = a & 255;
        for (const k of n) {
          D.set(k.rawToken, p), p += 32;
          const w = we(k.testDate);
          D[p++] = w >> 8 & 255, D[p++] = w & 255;
          let y = 0;
          for (let M = 0; M < xe.length; M++) (k.diseases || []).includes(xe[M]) && (y |= 1 << M);
          D[p++] = y;
          let S = 0;
          k.viewed && (S |= 1), k.labVerified && (S |= 2), D[p++] = S;
        }
        D[p++] = u >> 8 & 255, D[p++] = u & 255;
        for (let k = 0; k < u; k++) {
          const w = o[k];
          D.set(w.rawToken, p), p += 32, D.set(w.theirContactId, p), p += 32;
          const y = we(w.createdAt);
          D[p++] = y >> 8 & 255, D[p++] = y & 255;
          const S = w.endedAt ? we(w.endedAt) : Ps;
          D[p++] = S >> 8 & 255, D[p++] = S & 255;
          let M = 0;
          w.archived && (M |= 1), D[p++] = M, D[p++] = w.queryIndex >> 8 & 255, D[p++] = w.queryIndex & 255, D[p++] = w.submitIndex >> 8 & 255, D[p++] = w.submitIndex & 255, D[p++] = A[k].length, D.set(A[k], p), p += A[k].length;
        }
        D[p++] = f >> 8 & 255, D[p++] = f & 255;
        for (let k = 0; k < f; k++) {
          const w = s[k];
          D.set(w.token, p), p += 32;
          const y = we(w.date);
          D[p++] = y >> 8 & 255, D[p++] = y & 255;
          const S = w.createdAt >>> 0;
          D[p++] = S >>> 24 & 255, D[p++] = S >>> 16 & 255, D[p++] = S >>> 8 & 255, D[p++] = S & 255, D[p++] = w.isHost ? 1 : 0, D[p++] = w.tokenIndex >> 8 & 255, D[p++] = w.tokenIndex & 255, D.set(w.hostContactId, p), p += 32, D[p++] = F[k].length, D.set(F[k], p), p += F[k].length, D[p++] = m[k].length, D.set(m[k], p), p += m[k].length;
        }
        return D[p++] = h.length, h.length > 0 && (D.set(h, p), p += h.length), D;
      }
      function wa(x) {
        let e = 0;
        const t = x[e++];
        if (t !== 1 && t !== 2) throw new Error(`Unknown blob version: ${t}`);
        const n = x.slice(e, e + 32);
        e += 32;
        const o = x[e] << 8 | x[e + 1];
        e += 2;
        const s = [];
        for (let m = 0; m < o; m++) {
          const h = x.slice(e, e + 32);
          e += 32;
          const v = x.slice(e, e + 32);
          e += 32;
          const b = x[e] << 8 | x[e + 1];
          e += 2;
          const _ = x[e] << 8 | x[e + 1];
          e += 2;
          const D = x[e] << 8 | x[e + 1];
          e += 2;
          const p = x[e++], k = p > 0 ? new TextDecoder().decode(x.slice(e, e + p)) : null;
          e += p, s.push({
            rawToken: h,
            theirContactId: v,
            date: ye(b),
            queryIndex: _,
            submitIndex: D,
            note: k
          });
        }
        const l = [], r = x[e] << 8 | x[e + 1];
        e += 2;
        for (let m = 0; m < r; m++) {
          const h = x[e] << 8 | x[e + 1];
          e += 2;
          const v = x[e++], b = x[e++], _ = !!(v & 1), D = xe.filter((p, k) => b & 1 << k);
          l.push({
            date: ye(h),
            hasNotified: _,
            positiveDiseases: D
          });
        }
        const a = [], u = x[e] << 8 | x[e + 1];
        e += 2;
        for (let m = 0; m < u; m++) {
          const h = x.slice(e, e + 32);
          e += 32;
          const v = x[e] << 8 | x[e + 1];
          e += 2;
          const b = x[e++], _ = x[e++], D = xe.filter((w, y) => b & 1 << y), p = !!(_ & 1), k = !!(_ & 2);
          a.push({
            rawToken: h,
            testDate: ye(v),
            diseases: D,
            viewed: p,
            labVerified: k
          });
        }
        const f = [], E = x[e] << 8 | x[e + 1];
        e += 2;
        for (let m = 0; m < E; m++) {
          const h = x.slice(e, e + 32);
          e += 32;
          const v = x.slice(e, e + 32);
          e += 32;
          const b = x[e] << 8 | x[e + 1];
          e += 2;
          const _ = x[e] << 8 | x[e + 1];
          e += 2;
          const D = x[e++], p = x[e] << 8 | x[e + 1];
          e += 2;
          const k = x[e] << 8 | x[e + 1];
          e += 2;
          const w = x[e++], y = w > 0 ? new TextDecoder().decode(x.slice(e, e + w)) : null;
          e += w;
          const S = _ === Ps ? null : ye(_), M = !!(D & 1);
          f.push({
            rawToken: h,
            theirContactId: v,
            createdAt: ye(b),
            endedAt: S,
            archived: M,
            queryIndex: p,
            submitIndex: k,
            name: y
          });
        }
        const C = [], B = x[e] << 8 | x[e + 1];
        e += 2;
        const A = new TextDecoder();
        for (let m = 0; m < B; m++) {
          const h = x.slice(e, e + 32);
          e += 32;
          const v = x[e] << 8 | x[e + 1];
          e += 2;
          const b = (x[e] << 24 | x[e + 1] << 16 | x[e + 2] << 8 | x[e + 3]) >>> 0;
          e += 4;
          const _ = x[e++], D = x[e] << 8 | x[e + 1];
          e += 2;
          const p = x.slice(e, e + 32);
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
            tokenIndex: D,
            hostContactId: p,
            name: w,
            note: S
          });
        }
        let F = null;
        if (t === 2 && e < x.length) {
          const m = x[e++];
          m > 0 && (F = new TextDecoder().decode(x.slice(e, e + m)), e += m);
        }
        return {
          myContactId: n,
          encounters: s,
          results: l,
          receivedAlerts: a,
          relationships: f,
          groupEncounters: C,
          pin: F
        };
      }
      let W = null, Ie = 0, Bx = false;
      pe.subscribe((x) => {
        x === "reconnected" && Bx && W && me() && T0().catch(() => {
        });
      });
      function te() {
        return W;
      }
      function ce() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.myContactId;
      }
      function ht() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.results || [];
      }
      function ex() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (W.receivedAlerts || []).map(({ testDate: x, diseases: e, viewed: t, labVerified: n }) => ({
          testDate: x,
          diseases: e,
          viewed: t,
          labVerified: n
        }));
      }
      function Ss() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.encounters || [];
      }
      function Mx() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.relationships || [];
      }
      function Is() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.groupEncounters || [];
      }
      async function Ms(x = null) {
        const { blob: e, blob_version: t } = x ?? await ca();
        if (!e) {
          W = {
            myContactId: tt(32),
            encounters: [],
            results: [],
            receivedAlerts: [],
            relationships: [],
            groupEncounters: [],
            pin: null
          }, Ie = 0, await T0(), Tt();
          return;
        }
        const n = Ht(me(), N0(e));
        W = wa(n), Ie = t, await Ya(), Sx(), Tt();
      }
      async function ya(x, e, t) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        W = {
          ...W,
          encounters: [
            ...W.encounters,
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
          await T0();
        } catch (n) {
          throw Ga(x, e, t), n;
        }
      }
      async function Pa(x, e) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = (W.encounters || []).map((n) => t0(n.rawToken) === x ? {
          ...n,
          ...e
        } : n);
        W = {
          ...W,
          encounters: t
        }, await T0();
      }
      async function Ta(x, e, t) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        W = {
          ...W,
          relationships: [
            ...W.relationships || [],
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
        }, await T0();
      }
      async function Ls(x, e, t, n, o) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const s = Math.floor(Date.now() / 1e3);
        W = {
          ...W,
          groupEncounters: [
            ...W.groupEncounters || [],
            {
              token: x,
              date: e,
              createdAt: s,
              isHost: t,
              tokenIndex: 0,
              hostContactId: n,
              name: o || null,
              note: null
            }
          ]
        }, await T0();
      }
      async function tn(x, e) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = (W.groupEncounters || []).map((n) => t0(n.token) === x ? {
          ...n,
          ...e
        } : n);
        W = {
          ...W,
          groupEncounters: t
        }, await T0();
      }
      async function Sa(x) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (W.groupEncounters || []).filter((t) => t0(t.token) !== x);
        W = {
          ...W,
          groupEncounters: e
        }, await T0();
      }
      async function Bt(x, e) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = (W.relationships || []).map((n) => t0(n.rawToken) === x ? {
          ...n,
          ...e
        } : n);
        W = {
          ...W,
          relationships: t
        }, await T0();
      }
      async function tx(x, e, t = false) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = (W.results || []).length;
        return W = {
          ...W,
          results: [
            ...W.results || [],
            {
              date: x,
              positiveDiseases: e,
              hasNotified: t
            }
          ]
        }, await T0(), n;
      }
      async function xn(x) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...W.results || []
        ];
        if (x >= e.length) throw new Error("Invalid result index");
        e[x] = {
          ...e[x],
          hasNotified: true
        }, W = {
          ...W,
          results: e
        }, await T0();
      }
      async function Ia() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        W = {
          ...W,
          encounters: W.encounters.map((x) => ({
            ...x,
            submitIndex: x.submitIndex + 1
          })),
          relationships: (W.relationships || []).map((x) => ({
            ...x,
            submitIndex: x.submitIndex + 1
          }))
        }, await T0();
      }
      async function Ma(x, e, t, n) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let o = null;
        const s = W.encounters.map((a) => t0(a.rawToken) !== x ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        })), l = (W.relationships || []).map((a) => o || t0(a.rawToken) !== x ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        }));
        if (!o) throw new Error("Token not found: " + x);
        const r = [
          ...W.receivedAlerts || [],
          {
            rawToken: o,
            testDate: e,
            diseases: t,
            viewed: false,
            labVerified: !!n
          }
        ];
        W = {
          ...W,
          encounters: s,
          relationships: l,
          receivedAlerts: r
        }, await T0(), Sx();
      }
      async function La(x) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...W.receivedAlerts || []
        ];
        if (x >= e.length) throw new Error("Invalid alert index");
        e[x] = {
          ...e[x],
          viewed: true
        }, W = {
          ...W,
          receivedAlerts: e
        }, await T0(), Sx();
      }
      function Na() {
        if (!W || Ix(W).byteLength < gs) return false;
        const e = Lx();
        return W.encounters.filter((t) => t.date < e).length >= 5;
      }
      function za() {
        if (!W) return 0;
        const x = Lx();
        return W.encounters.filter((e) => e.date < x).length;
      }
      async function qa() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = Lx();
        W = {
          ...W,
          encounters: W.encounters.filter((e) => e.date >= x)
        }, await T0();
      }
      function Lx() {
        const x = /* @__PURE__ */ new Date();
        return x.setUTCFullYear(x.getUTCFullYear() - 1), x.toISOString().slice(0, 10);
      }
      function Ra(x) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = xt(x, Ix(W));
        return {
          blobHex: t0(e),
          blobVersion: Ie
        };
      }
      function ja(x) {
        Ie = x;
      }
      function Ha() {
        return W?.pin ?? null;
      }
      async function Oa(x) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        W = {
          ...W,
          pin: x
        }, await T0(), Tt();
      }
      async function Ua() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        W = {
          ...W,
          pin: null
        }, await T0(), Tt();
      }
      function Va(x, e) {
        if (!x.endedAt || !e) return true;
        const n = (/* @__PURE__ */ new Date(x.endedAt + "T00:00:00Z")).getTime() + ga * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < n;
      }
      const Se = "peachsafe_pending_encounters";
      async function T0() {
        const x = Ix(W);
        ws.set(x.byteLength >= gs);
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
      function Ga(x, e, t) {
        try {
          let n = [];
          const o = localStorage.getItem(Se);
          if (o) try {
            n = JSON.parse(new TextDecoder().decode(Ht(me(), N0(o))));
          } catch {
            n = [];
          }
          n.push({
            rawTokenHex: t0(x),
            theirContactIdHex: t0(e),
            date: t
          });
          const s = new TextEncoder().encode(JSON.stringify(n));
          localStorage.setItem(Se, t0(xt(me(), s)));
        } catch {
        }
      }
      async function Ya() {
        let x;
        try {
          const e = localStorage.getItem(Se);
          if (!e) return;
          x = JSON.parse(new TextDecoder().decode(Ht(me(), N0(e))));
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
        for (const e of x) W = {
          ...W,
          encounters: [
            ...W.encounters,
            {
              rawToken: N0(e.rawTokenHex),
              theirContactId: N0(e.theirContactIdHex),
              date: e.date,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        };
        await T0();
      }
      let Oe = null;
      function Ns() {
        return Oe || (Oe = Ka().finally(() => {
          Oe = null;
        }), Oe);
      }
      async function Ka() {
        const x = te(), e = ce();
        if (!x) return 0;
        const n = ht().filter((f) => f.positiveDiseases.length === 0).map((f) => f.date).sort().pop() ?? null, o = /* @__PURE__ */ new Map(), s = [];
        for (const f of x.encounters) {
          const E = Ae(f.rawToken, e, f.queryIndex), C = Fe(E);
          o.set(C, {
            rawTokenHex: t0(f.rawToken),
            alertDate: f.date
          }), s.push(C);
        }
        for (const f of x.relationships || []) {
          if (!Va(f, n)) continue;
          const E = Ae(f.rawToken, e, f.queryIndex), C = Fe(E);
          o.set(C, {
            rawTokenHex: t0(f.rawToken),
            alertDate: f.createdAt
          }), s.push(C);
        }
        if (s.length === 0) return 0;
        const l = Math.max(50, s.length * 2), r = [
          ...s
        ];
        for (; r.length < l; ) r.push(Fe(tt(32)));
        for (let f = r.length - 1; f > 0; f--) {
          const E = Math.floor(Math.random() * (f + 1));
          [r[f], r[E]] = [
            r[E],
            r[f]
          ];
        }
        const { matches: a } = await Ea(r);
        if (!a || a.length === 0) return 0;
        let u = 0;
        for (const f of a) {
          const E = o.get(f.token);
          if (!E) continue;
          const B = [
            ...te().encounters || [],
            ...te().relationships || []
          ].find((y) => t0(y.rawToken) === E.rawTokenHex);
          if (!B) continue;
          const A = As(B.theirContactId);
          let F;
          try {
            F = Ht(A, Fs(f.encrypted_payload));
          } catch {
            continue;
          }
          const m = new TextDecoder().decode(F), h = m.slice(1, 9), v = `${h.slice(0, 4)}-${h.slice(4, 6)}-${h.slice(6, 8)}`, b = m.length > 9 ? m.slice(9).split(",") : [], _ = Object.fromEntries(Object.entries(Ts).map(([y, S]) => [
            S,
            y
          ])), D = b.map((y) => _[y]).filter(Boolean), p = t0(Ae(B.rawToken, e, B.queryIndex));
          await Ma(E.rawTokenHex, v, D, f.verified), u++;
          const k = [
            ...te().encounters || [],
            ...te().relationships || []
          ].find((y) => t0(y.rawToken) === E.rawTokenHex), w = t0(Ae(B.rawToken, e, k?.queryIndex ?? B.queryIndex + 1));
          try {
            await hs(w, E.alertDate);
          } catch (y) {
            console.warn("alerts: could not register next query token:", y.message);
          }
          try {
            await Ba(p);
          } catch (y) {
            console.warn("alerts: could not delete old query token:", y.message);
          }
        }
        return u;
      }
      let Cx = "/home";
      function Wa(x) {
        Cx = x;
      }
      function nn() {
        const x = Cx;
        return Cx = "/home", x;
      }
      function Qa(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F = x[3] ? "Verifying\u2026" : "Verify", m, h, v, b, _ = x[6] ? "Use authenticator app instead" : "Use a backup code instead", D, p, k;
        function w(I, L) {
          return I[6] ? Za : Xa;
        }
        let y = w(x), S = y(x), M = x[4] && on(x);
        return {
          c() {
            e = d("div"), t = d("button"), n = d("span"), n.textContent = "arrow_back", o = g(), s = d("span"), s.textContent = "Two-factor auth", l = g(), r = d("form"), S.c(), a = g(), u = d("label"), f = d("input"), E = z(`
          Remember this device`), C = g(), M && M.c(), B = g(), A = d("button"), m = z(F), v = g(), b = d("button"), D = z(_), c(n, "class", "material-icons svelte-1r4ift8"), c(t, "type", "button"), c(t, "class", "back-btn svelte-1r4ift8"), t.disabled = x[3], c(s, "class", "otp-title svelte-1r4ift8"), c(e, "class", "otp-header svelte-1r4ift8"), c(f, "type", "checkbox"), f.disabled = x[3], c(f, "class", "svelte-1r4ift8"), c(u, "class", "remember-label svelte-1r4ift8"), c(A, "type", "submit"), A.disabled = h = x[3] || !x[6] && x[2].length !== 6 || x[6] && x[2].length !== 14, c(A, "class", "svelte-1r4ift8"), c(b, "type", "button"), c(b, "class", "backup-toggle svelte-1r4ift8"), b.disabled = x[3], c(r, "class", "svelte-1r4ift8");
          },
          m(I, L) {
            T(I, e, L), i(e, t), i(t, n), i(e, o), i(e, s), T(I, l, L), T(I, r, L), S.m(r, null), i(r, a), i(r, u), i(u, f), f.checked = x[7], i(u, E), i(r, C), M && M.m(r, null), i(r, B), i(r, A), i(A, m), i(r, v), i(r, b), i(b, D), p || (k = [
              O(t, "click", x[16]),
              O(f, "change", x[24]),
              O(b, "click", x[17]),
              O(r, "submit", re(x[13]))
            ], p = true);
          },
          p(I, L) {
            L & 8 && (t.disabled = I[3]), y === (y = w(I)) && S ? S.p(I, L) : (S.d(1), S = y(I), S && (S.c(), S.m(r, a))), L & 8 && (f.disabled = I[3]), L & 128 && (f.checked = I[7]), I[4] ? M ? M.p(I, L) : (M = on(I), M.c(), M.m(r, B)) : M && (M.d(1), M = null), L & 8 && F !== (F = I[3] ? "Verifying\u2026" : "Verify") && V(m, F), L & 76 && h !== (h = I[3] || !I[6] && I[2].length !== 6 || I[6] && I[2].length !== 14) && (A.disabled = h), L & 64 && _ !== (_ = I[6] ? "Use authenticator app instead" : "Use a backup code instead") && V(D, _), L & 8 && (b.disabled = I[3]);
          },
          d(I) {
            I && (P(e), P(l), P(r)), S.d(), M && M.d(), p = false, s0(k);
          }
        };
      }
      function Ja(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A = x[3] ? "Logging in\u2026" : "Log in", F, m, h, v = x[4] && sn(x);
        return {
          c() {
            e = d("div"), e.innerHTML = '<a href="#/login" class="tab active svelte-1r4ift8">Log in</a> <a href="#/signup" class="tab svelte-1r4ift8">Create account</a>', t = g(), n = d("form"), o = d("label"), s = z(`Username
          `), l = d("input"), r = g(), a = d("label"), u = z(`Password
          `), f = d("input"), E = g(), v && v.c(), C = g(), B = d("button"), F = z(A), c(e, "class", "tabs svelte-1r4ift8"), c(l, "type", "text"), l.required = true, c(l, "autocomplete", "username"), c(l, "class", "svelte-1r4ift8"), c(o, "class", "svelte-1r4ift8"), c(f, "type", "password"), f.required = true, c(f, "autocomplete", "current-password"), c(f, "class", "svelte-1r4ift8"), c(a, "class", "svelte-1r4ift8"), c(B, "type", "submit"), B.disabled = x[3], c(B, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(b, _) {
            T(b, e, _), T(b, t, _), T(b, n, _), i(n, o), i(o, s), i(o, l), x0(l, x[0]), i(n, r), i(n, a), i(a, u), i(a, f), x0(f, x[1]), i(n, E), v && v.m(n, null), i(n, C), i(n, B), i(B, F), m || (h = [
              O(l, "input", x[20]),
              O(f, "input", x[21]),
              O(n, "submit", re(x[12]))
            ], m = true);
          },
          p(b, _) {
            _ & 1 && l.value !== b[0] && x0(l, b[0]), _ & 2 && f.value !== b[1] && x0(f, b[1]), b[4] ? v ? v.p(b, _) : (v = sn(b), v.c(), v.m(n, C)) : v && (v.d(1), v = null), _ & 8 && A !== (A = b[3] ? "Logging in\u2026" : "Log in") && V(F, A), _ & 8 && (B.disabled = b[3]);
          },
          d(b) {
            b && (P(e), P(t), P(n)), v && v.d(), m = false, s0(h);
          }
        };
      }
      function Xa(x) {
        let e, t, n, o, s, l, r;
        return {
          c() {
            e = d("p"), e.textContent = "Enter the 6-digit code from your authenticator app.", t = g(), n = d("label"), o = z(`Authenticator code
            `), s = d("input"), c(e, "class", "otp-prompt svelte-1r4ift8"), c(s, "type", "text"), c(s, "inputmode", "numeric"), c(s, "pattern", "[0-9]*"), c(s, "maxlength", "6"), s.required = true, c(s, "autocomplete", "one-time-code"), c(s, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(a, u) {
            T(a, e, u), T(a, t, u), T(a, n, u), i(n, o), i(n, s), x0(s, x[2]), l || (r = O(s, "input", x[23]), l = true);
          },
          p(a, u) {
            u & 4 && s.value !== a[2] && x0(s, a[2]);
          },
          d(a) {
            a && (P(e), P(t), P(n)), l = false, r();
          }
        };
      }
      function Za(x) {
        let e, t, n, o, s, l, r;
        return {
          c() {
            e = d("p"), e.textContent = "Enter one of your backup codes (xxxx-xxxx-xxxx).", t = g(), n = d("label"), o = z(`Backup code
            `), s = d("input"), c(e, "class", "otp-prompt svelte-1r4ift8"), c(s, "type", "text"), c(s, "inputmode", "text"), c(s, "maxlength", "14"), s.required = true, c(s, "autocomplete", "off"), c(s, "placeholder", "xxxx-xxxx-xxxx"), c(s, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(a, u) {
            T(a, e, u), T(a, t, u), T(a, n, u), i(n, o), i(n, s), x0(s, x[2]), l || (r = O(s, "input", x[22]), l = true);
          },
          p(a, u) {
            u & 4 && s.value !== a[2] && x0(s, a[2]);
          },
          d(a) {
            a && (P(e), P(t), P(n)), l = false, r();
          }
        };
      }
      function on(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[4]), c(e, "class", "error svelte-1r4ift8");
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
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[4]), c(e, "class", "error svelte-1r4ift8");
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
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Your password never leaves your device in plaintext.", c(e, "class", "privacy-note svelte-1r4ift8");
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
        let e, t, n, o, s, l, r, a, u, f = x[9] === 1 ? "" : "s", E, C, B, A, F, m, h = x[10] ? "Deleting\u2026" : "Delete old encounters", v, b, _, D, p, k, w = x[11] && an(x);
        return {
          c() {
            e = d("div"), t = d("div"), n = d("h2"), n.textContent = "Free up storage space", o = g(), s = d("p"), l = z(`Your account is using 75% or more of its storage limit.
        You have `), r = d("strong"), a = z(x[9]), u = z(" encounter"), E = z(f), C = z(` older
        than one year. Deleting them will free up space.`), B = g(), w && w.c(), A = g(), F = d("div"), m = d("button"), v = z(h), b = g(), _ = d("button"), D = z("Keep them"), c(n, "id", "cleanup-title"), c(n, "class", "svelte-1r4ift8"), c(s, "class", "svelte-1r4ift8"), c(m, "class", "btn-primary svelte-1r4ift8"), m.disabled = x[10], c(_, "class", "btn-ghost svelte-1r4ift8"), _.disabled = x[10], c(F, "class", "cleanup-actions svelte-1r4ift8"), c(t, "class", "cleanup-dialog svelte-1r4ift8"), c(e, "class", "cleanup-overlay svelte-1r4ift8"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "cleanup-title");
          },
          m(y, S) {
            T(y, e, S), i(e, t), i(t, n), i(t, o), i(t, s), i(s, l), i(s, r), i(r, a), i(r, u), i(r, E), i(s, C), i(t, B), w && w.m(t, null), i(t, A), i(t, F), i(F, m), i(m, v), i(F, b), i(F, _), i(_, D), p || (k = [
              O(m, "click", x[14]),
              O(_, "click", x[15])
            ], p = true);
          },
          p(y, S) {
            S & 512 && V(a, y[9]), S & 512 && f !== (f = y[9] === 1 ? "" : "s") && V(E, f), y[11] ? w ? w.p(y, S) : (w = an(y), w.c(), w.m(t, A)) : w && (w.d(1), w = null), S & 1024 && h !== (h = y[10] ? "Deleting\u2026" : "Delete old encounters") && V(v, h), S & 1024 && (m.disabled = y[10]), S & 1024 && (_.disabled = y[10]);
          },
          d(y) {
            y && P(e), w && w.d(), p = false, s0(k);
          }
        };
      }
      function an(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[11]), c(e, "class", "cleanup-error svelte-1r4ift8");
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
      function $a(x) {
        let e, t, n, o, s, l, r, a, u;
        function f(F, m) {
          return F[5] ? Qa : Ja;
        }
        let E = f(x), C = E(x), B = !x[5] && ln(), A = x[8] && rn(x);
        return {
          c() {
            e = d("main"), t = d("div"), t.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1r4ift8"/> <h1 class="svelte-1r4ift8"><span class="brand-peach svelte-1r4ift8">Peach</span><span class="brand-safe svelte-1r4ift8">Safe</span></h1>', n = g(), o = d("div"), C.c(), s = g(), B && B.c(), l = g(), A && A.c(), r = X0(), c(t, "class", "brand svelte-1r4ift8"), c(t, "role", "button"), c(t, "tabindex", "0"), c(o, "class", "card svelte-1r4ift8"), c(e, "class", "svelte-1r4ift8");
          },
          m(F, m) {
            T(F, e, m), i(e, t), i(e, n), i(e, o), C.m(o, null), i(e, s), B && B.m(e, null), T(F, l, m), A && A.m(F, m), T(F, r, m), a || (u = [
              O(t, "click", x[18]),
              O(t, "keypress", x[19])
            ], a = true);
          },
          p(F, [m]) {
            E === (E = f(F)) && C ? C.p(F, m) : (C.d(1), C = E(F), C && (C.c(), C.m(o, null))), F[5] ? B && (B.d(1), B = null) : B || (B = ln(), B.c(), B.m(e, null)), F[8] ? A ? A.p(F, m) : (A = rn(F), A.c(), A.m(r.parentNode, r)) : A && (A.d(1), A = null);
          },
          i: X,
          o: X,
          d(F) {
            F && (P(e), P(l), P(r)), C.d(), B && B.d(), A && A.d(F), a = false, s0(u);
          }
        };
      }
      function ei(x, e, t) {
        z0(() => {
          vs();
        });
        let n = "", o = "", s = "", l = false, r = null, a = false, u = false, f = false, E = null, C = null, B = false, A = 0, F = "", m = false, h = null;
        async function v() {
          t(4, r = null), t(3, l = true);
          try {
            const { challenge: R, auth_salt: j, enc_salt: H } = await bx(n), Q = await le(o, N0(j)), K = Cs(new TextEncoder().encode(R), Q), G = btoa(String.fromCharCode(...K)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), U = await $x(n, G);
            if (U.requires_otp) {
              E = G, C = H, t(5, a = true);
              return;
            }
            await _(H, U);
          } catch (R) {
            t(4, r = R.message);
          } finally {
            t(3, l = false);
          }
        }
        async function b() {
          t(4, r = null), t(3, l = true);
          try {
            const R = await $x(n, E, s, f);
            await _(C, R);
          } catch (R) {
            t(4, r = R.message);
          } finally {
            t(3, l = false);
          }
        }
        async function _(R, j) {
          Ds(n);
          const H = await le(o, N0(R));
          kx(H), await Ms(j.bootstrap ?? null), Ns().catch(() => {
          }), Na() ? (t(9, A = za()), F = nn(), t(8, B = true)) : i0(nn());
        }
        async function D() {
          t(11, h = null), t(10, m = true);
          try {
            await qa(), t(8, B = false), i0(F);
          } catch (R) {
            t(11, h = R.message);
          } finally {
            t(10, m = false);
          }
        }
        function p() {
          t(8, B = false), i0(F);
        }
        function k() {
          t(5, a = false), t(2, s = ""), E = null, C = null, t(4, r = null), t(6, u = false), t(7, f = false);
        }
        function w() {
          t(6, u = !u), t(2, s = ""), t(4, r = null);
        }
        const y = () => i0("/"), S = (R) => R.key === "Enter" && i0("/");
        function M() {
          n = this.value, t(0, n);
        }
        function I() {
          o = this.value, t(1, o);
        }
        function L() {
          s = this.value, t(2, s);
        }
        function N() {
          s = this.value, t(2, s);
        }
        function q() {
          f = this.checked, t(7, f);
        }
        return [
          n,
          o,
          s,
          l,
          r,
          a,
          u,
          f,
          B,
          A,
          m,
          h,
          v,
          b,
          D,
          p,
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
      class ti extends D0 {
        constructor(e) {
          super(), p0(this, e, ei, $a, A0, {});
        }
      }
      function cn(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[6]), c(e, "class", "error svelte-1c8cd3e");
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
      function xi(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D, p, k, w, y, S, M, I, L, N = x[5] ? "Creating account\u2026" : "Create account", q, R, j, H, Q, K = x[6] && cn(x);
        return {
          c() {
            e = d("main"), t = d("div"), t.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1c8cd3e"/> <h1 class="svelte-1c8cd3e"><span class="brand-peach svelte-1c8cd3e">Peach</span><span class="brand-safe svelte-1c8cd3e">Safe</span></h1>', n = g(), o = d("div"), s = d("div"), s.innerHTML = '<a href="#/login" class="tab svelte-1c8cd3e">Log in</a> <a href="#/signup" class="tab active svelte-1c8cd3e">Create account</a>', l = g(), r = d("form"), a = d("label"), u = z(`Beta code
        `), f = d("input"), E = g(), C = d("label"), B = z(`Username
        `), A = d("input"), F = g(), m = d("label"), h = z(`Email
        `), v = d("input"), b = g(), _ = d("label"), D = z(`Password
        `), p = d("input"), k = g(), w = d("label"), y = z(`Confirm password
        `), S = d("input"), M = g(), K && K.c(), I = g(), L = d("button"), q = z(N), R = g(), j = d("p"), j.textContent = "Your password never leaves your device in plaintext.", c(t, "class", "brand svelte-1c8cd3e"), c(t, "role", "button"), c(t, "tabindex", "0"), c(s, "class", "tabs svelte-1c8cd3e"), c(f, "type", "text"), f.required = true, c(f, "autocomplete", "off"), c(f, "class", "svelte-1c8cd3e"), c(a, "class", "svelte-1c8cd3e"), c(A, "type", "text"), A.required = true, c(A, "autocomplete", "username"), c(A, "class", "svelte-1c8cd3e"), c(C, "class", "svelte-1c8cd3e"), c(v, "type", "email"), v.required = true, c(v, "autocomplete", "email"), c(v, "class", "svelte-1c8cd3e"), c(m, "class", "svelte-1c8cd3e"), c(p, "type", "password"), p.required = true, c(p, "autocomplete", "new-password"), c(p, "minlength", "12"), c(p, "class", "svelte-1c8cd3e"), c(_, "class", "svelte-1c8cd3e"), c(S, "type", "password"), S.required = true, c(S, "autocomplete", "new-password"), c(S, "class", "svelte-1c8cd3e"), c(w, "class", "svelte-1c8cd3e"), c(L, "type", "submit"), L.disabled = x[5], c(L, "class", "svelte-1c8cd3e"), c(r, "class", "svelte-1c8cd3e"), c(o, "class", "card svelte-1c8cd3e"), c(j, "class", "privacy-note svelte-1c8cd3e"), c(e, "class", "svelte-1c8cd3e");
          },
          m(G, U) {
            T(G, e, U), i(e, t), i(e, n), i(e, o), i(o, s), i(o, l), i(o, r), i(r, a), i(a, u), i(a, f), x0(f, x[4]), i(r, E), i(r, C), i(C, B), i(C, A), x0(A, x[0]), i(r, F), i(r, m), i(m, h), i(m, v), x0(v, x[1]), i(r, b), i(r, _), i(_, D), i(_, p), x0(p, x[2]), i(r, k), i(r, w), i(w, y), i(w, S), x0(S, x[3]), i(r, M), K && K.m(r, null), i(r, I), i(r, L), i(L, q), i(e, R), i(e, j), H || (Q = [
              O(t, "click", x[8]),
              O(t, "keypress", x[9]),
              O(f, "input", x[10]),
              O(A, "input", x[11]),
              O(v, "input", x[12]),
              O(p, "input", x[13]),
              O(S, "input", x[14]),
              O(r, "submit", re(x[7]))
            ], H = true);
          },
          p(G, [U]) {
            U & 16 && f.value !== G[4] && x0(f, G[4]), U & 1 && A.value !== G[0] && x0(A, G[0]), U & 2 && v.value !== G[1] && x0(v, G[1]), U & 4 && p.value !== G[2] && x0(p, G[2]), U & 8 && S.value !== G[3] && x0(S, G[3]), G[6] ? K ? K.p(G, U) : (K = cn(G), K.c(), K.m(r, I)) : K && (K.d(1), K = null), U & 32 && N !== (N = G[5] ? "Creating account\u2026" : "Create account") && V(q, N), U & 32 && (L.disabled = G[5]);
          },
          i: X,
          o: X,
          d(G) {
            G && P(e), K && K.d(), H = false, s0(Q);
          }
        };
      }
      const ni = "psbeta";
      function oi(x, e, t) {
        z0(() => {
          vs();
        });
        let n = "", o = "", s = "", l = "", r = "", a = false, u = null;
        async function f() {
          if (t(6, u = null), r !== ni) {
            t(6, u = "Sorry, we're in closed beta at the moment");
            return;
          }
          if (s !== l) {
            t(6, u = "Passwords do not match");
            return;
          }
          if (s.length < 12) {
            t(6, u = "Password must be at least 12 characters");
            return;
          }
          t(5, a = true);
          try {
            const { auth_salt: v, enc_salt: b } = await bx(n), _ = await le(s, N0(v)), D = t0(Bs(_));
            await na(n, o, D), Ds(n);
            const p = await le(s, N0(b));
            kx(p), await Ms(), i0("/home");
          } catch (v) {
            t(6, u = v.message);
          } finally {
            t(5, a = false);
          }
        }
        const E = () => i0("/"), C = (v) => v.key === "Enter" && i0("/");
        function B() {
          r = this.value, t(4, r);
        }
        function A() {
          n = this.value, t(0, n);
        }
        function F() {
          o = this.value, t(1, o);
        }
        function m() {
          s = this.value, t(2, s);
        }
        function h() {
          l = this.value, t(3, l);
        }
        return [
          n,
          o,
          s,
          l,
          r,
          a,
          u,
          f,
          E,
          C,
          B,
          A,
          F,
          m,
          h
        ];
      }
      class si extends D0 {
        constructor(e) {
          super(), p0(this, e, oi, xi, A0, {});
        }
      }
      function un(x) {
        let e;
        return {
          c() {
            e = d("span"), c(e, "class", "unread-dot svelte-1dr2o73");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function li(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C = x[1] ? "notifications_active" : "notifications", B, A, F, m, h, v, b, _, D, p, k = x[1] && un();
        return {
          c() {
            e = d("nav"), t = d("a"), t.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-1dr2o73"/> <span class="brand-label svelte-1dr2o73"><span class="brand-peach svelte-1dr2o73">Peach</span><span class="brand-safe svelte-1dr2o73">Safe</span></span>', n = g(), o = d("div"), s = d("a"), s.innerHTML = '<span class="material-icons svelte-1dr2o73">people</span> <span class="tab-label svelte-1dr2o73">Encounters</span>', l = g(), r = d("a"), r.innerHTML = '<span class="material-icons svelte-1dr2o73">science</span> <span class="tab-label svelte-1dr2o73">Test Results</span>', a = g(), u = d("a"), f = d("span"), E = d("span"), B = z(C), A = g(), k && k.c(), F = g(), m = d("span"), m.textContent = "Alerts", h = g(), v = d("a"), v.innerHTML = '<span class="material-icons svelte-1dr2o73">settings</span> <span class="tab-label svelte-1dr2o73">Settings</span>', b = g(), _ = d("button"), _.textContent = "Sign out", c(t, "href", "#/home"), c(t, "class", "brand svelte-1dr2o73"), c(s, "href", "#/encounters"), c(s, "class", "tab svelte-1dr2o73"), e0(s, "active", x[0] === "/encounters"), c(r, "href", "#/results"), c(r, "class", "tab svelte-1dr2o73"), e0(r, "active", x[0] === "/results"), c(E, "class", "material-icons svelte-1dr2o73"), c(f, "class", "icon-wrap svelte-1dr2o73"), c(m, "class", "tab-label svelte-1dr2o73"), c(u, "href", "#/alerts"), c(u, "class", "tab svelte-1dr2o73"), e0(u, "active", x[0] === "/alerts"), e0(u, "has-unread", x[1]), c(o, "class", "tabs svelte-1dr2o73"), c(v, "href", "#/settings"), c(v, "class", "tab settings-tab svelte-1dr2o73"), c(v, "title", "Settings"), e0(v, "active", x[0] === "/settings" || x[0] === "/change-password" || x[0] === "/settings/2fa-setup"), c(_, "class", "signout-btn svelte-1dr2o73"), c(e, "class", "svelte-1dr2o73");
          },
          m(w, y) {
            T(w, e, y), i(e, t), i(e, n), i(e, o), i(o, s), i(o, l), i(o, r), i(o, a), i(o, u), i(u, f), i(f, E), i(E, B), i(f, A), k && k.m(f, null), i(u, F), i(u, m), i(e, h), i(e, v), i(e, b), i(e, _), D || (p = O(_, "click", x[2]), D = true);
          },
          p(w, [y]) {
            y & 1 && e0(s, "active", w[0] === "/encounters"), y & 1 && e0(r, "active", w[0] === "/results"), y & 2 && C !== (C = w[1] ? "notifications_active" : "notifications") && V(B, C), w[1] ? k || (k = un(), k.c(), k.m(f, null)) : k && (k.d(1), k = null), y & 1 && e0(u, "active", w[0] === "/alerts"), y & 2 && e0(u, "has-unread", w[1]), y & 1 && e0(v, "active", w[0] === "/settings" || w[0] === "/change-password" || w[0] === "/settings/2fa-setup");
          },
          i: X,
          o: X,
          d(w) {
            w && P(e), k && k.d(), D = false, p();
          }
        };
      }
      function ri(x, e, t) {
        let n, o;
        H0(x, Cl, (l) => t(0, n = l)), H0(x, bs, (l) => t(1, o = l));
        async function s() {
          await gx(), i0("/login");
        }
        return [
          n,
          o,
          s
        ];
      }
      class ne extends D0 {
        constructor(e) {
          super(), p0(this, e, ri, li, A0, {});
        }
      }
      function ai(x) {
        let e, t, n, o;
        return e = new ne({}), {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), n.innerHTML = `<div class="hero svelte-16ahr9l"><div class="logo-wrap svelte-16ahr9l"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="logo-img svelte-16ahr9l"/></div> <h1 class="app-name svelte-16ahr9l"><span class="brand-peach svelte-16ahr9l">Peach</span><span class="brand-safe svelte-16ahr9l">Safe</span></h1></div> <div class="actions svelte-16ahr9l"><a href="#/encounter-exchange" class="btn-filled svelte-16ahr9l"><span class="material-icons svelte-16ahr9l">qr_code</span>
      Log New Encounter</a></div>`, c(n, "class", "svelte-16ahr9l");
          },
          m(s, l) {
            b0(e, s, l), T(s, t, l), T(s, n, l), o = true;
          },
          p: X,
          i(s) {
            o || (d0(e.$$.fragment, s), o = true);
          },
          o(s) {
            C0(e.$$.fragment, s), o = false;
          },
          d(s) {
            s && (P(t), P(n)), g0(e, s);
          }
        };
      }
      function ii(x) {
        return z0(() => {
          if (!G0()) {
            i0("/login");
            return;
          }
        }), [];
      }
      class ci extends D0 {
        constructor(e) {
          super(), p0(this, e, ii, ai, A0, {});
        }
      }
      function fn(x, e, t) {
        const n = x.slice();
        return n[20] = e[t], n;
      }
      function dn(x, e, t) {
        const n = x.slice();
        return n[23] = e[t], n;
      }
      function En(x, e, t) {
        const n = x.slice();
        return n[26] = e[t], n;
      }
      function Bn(x, e, t) {
        const n = x.slice();
        return n[23] = e[t], n;
      }
      function Cn(x) {
        let e, t, n, o, s, l, r, a, u, f, E = x[6] ? "Creating\u2026" : "Group encounter", C, B, A, F, m, h, v, b, _, D = x[7] && An(x);
        return {
          c() {
            e = d("div"), t = d("div"), n = d("p"), n.textContent = "New encounter", o = g(), s = d("button"), s.innerHTML = '<span class="material-icons type-icon svelte-81oe9z">person</span> <span class="type-label svelte-81oe9z">1:1 encounter</span> <span class="material-icons type-chevron svelte-81oe9z">chevron_right</span>', l = g(), r = d("button"), a = d("span"), a.textContent = "groups", u = g(), f = d("span"), C = z(E), B = g(), A = d("span"), A.textContent = "chevron_right", F = g(), D && D.c(), m = g(), h = d("button"), v = z("Cancel"), c(n, "class", "modal-title svelte-81oe9z"), c(s, "class", "type-card svelte-81oe9z"), c(a, "class", "material-icons type-icon svelte-81oe9z"), c(f, "class", "type-label svelte-81oe9z"), c(A, "class", "material-icons type-chevron svelte-81oe9z"), c(r, "class", "type-card svelte-81oe9z"), r.disabled = x[6], c(h, "class", "btn-text cancel-btn svelte-81oe9z"), h.disabled = x[6], c(t, "class", "modal-sheet svelte-81oe9z"), c(e, "class", "modal-backdrop svelte-81oe9z");
          },
          m(p, k) {
            T(p, e, k), i(e, t), i(t, n), i(t, o), i(t, s), i(t, l), i(t, r), i(r, a), i(r, u), i(r, f), i(f, C), i(r, B), i(r, A), i(t, F), D && D.m(t, null), i(t, m), i(t, h), i(h, v), b || (_ = [
              O(s, "click", x[14]),
              O(r, "click", x[10]),
              O(h, "click", x[15]),
              O(t, "click", tl(x[12])),
              O(e, "click", x[16])
            ], b = true);
          },
          p(p, k) {
            k & 64 && E !== (E = p[6] ? "Creating\u2026" : "Group encounter") && V(C, E), k & 64 && (r.disabled = p[6]), p[7] ? D ? D.p(p, k) : (D = An(p), D.c(), D.m(t, m)) : D && (D.d(1), D = null), k & 64 && (h.disabled = p[6]);
          },
          d(p) {
            p && P(e), D && D.d(), b = false, s0(_);
          }
        };
      }
      function An(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[7]), c(e, "class", "modal-error svelte-81oe9z");
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
      function ui(x) {
        let e, t, n, o, s = x[9].length > 0 && Fn(x), l = x[1].length > 0 && Dn(x), r = x[8].length > 0 && hn(x);
        function a(E, C) {
          return E[0].length === 0 && E[9].length === 0 && E[8].length === 0 && E[1].length === 0 ? Ci : E[0].length === 0 ? Bi : Ei;
        }
        let u = a(x), f = u(x);
        return {
          c() {
            s && s.c(), e = g(), l && l.c(), t = g(), r && r.c(), n = g(), o = d("section"), f.c(), c(o, "class", "card list-card svelte-81oe9z");
          },
          m(E, C) {
            s && s.m(E, C), T(E, e, C), l && l.m(E, C), T(E, t, C), r && r.m(E, C), T(E, n, C), T(E, o, C), f.m(o, null);
          },
          p(E, C) {
            E[9].length > 0 ? s ? s.p(E, C) : (s = Fn(E), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), E[1].length > 0 ? l ? l.p(E, C) : (l = Dn(E), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), E[8].length > 0 ? r ? r.p(E, C) : (r = hn(E), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), u === (u = a(E)) && f ? f.p(E, C) : (f.d(1), f = u(E), f && (f.c(), f.m(o, null)));
          },
          d(E) {
            E && (P(e), P(t), P(n), P(o)), s && s.d(E), l && l.d(E), r && r.d(E), f.d();
          }
        };
      }
      function fi(x) {
        let e, t, n;
        return {
          c() {
            e = d("section"), t = d("p"), n = z(x[3]), c(t, "class", "error svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(o, s) {
            T(o, e, s), i(e, t), i(t, n);
          },
          p(o, s) {
            s & 8 && V(n, o[3]);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function di(x) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-81oe9z">Loading\u2026</p>', c(e, "class", "card list-card svelte-81oe9z");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function Fn(x) {
        let e, t, n, o, s = E0(x[9]), l = [];
        for (let r = 0; r < s.length; r += 1) l[r] = pn(Bn(x, s, r));
        return {
          c() {
            e = d("section"), t = d("div"), t.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">favorite</span> <h2 class="svelte-81oe9z">Ongoing partners</h2>', n = g(), o = d("ul");
            for (let r = 0; r < l.length; r += 1) l[r].c();
            c(t, "class", "section-header svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o);
            for (let u = 0; u < l.length; u += 1) l[u] && l[u].m(o, null);
          },
          p(r, a) {
            if (a & 512) {
              s = E0(r[9]);
              let u;
              for (u = 0; u < s.length; u += 1) {
                const f = Bn(r, s, u);
                l[u] ? l[u].p(f, a) : (l[u] = pn(f), l[u].c(), l[u].m(o, null));
              }
              for (; u < l.length; u += 1) l[u].d(1);
              l.length = s.length;
            }
          },
          d(r) {
            r && P(e), V0(l, r);
          }
        };
      }
      function pn(x) {
        let e, t, n, o, s, l, r = St(x[23]) + "", a, u, f, E = It(x[23]) + "", C, B, A, F, m;
        return {
          c() {
            e = d("li"), t = d("a"), n = d("span"), n.textContent = "favorite", o = g(), s = d("span"), l = d("span"), a = z(r), u = g(), f = d("span"), C = z(E), B = g(), A = d("span"), A.textContent = "chevron_right", m = g(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(l, "class", "rel-name svelte-81oe9z"), c(f, "class", "rel-sub svelte-81oe9z"), c(s, "class", "rel-main svelte-81oe9z"), c(A, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", F = "#/relationships/" + t0(x[23].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(t, n), i(t, o), i(t, s), i(s, l), i(l, a), i(s, u), i(s, f), i(f, C), i(t, B), i(t, A), i(e, m);
          },
          p(h, v) {
            v & 512 && r !== (r = St(h[23]) + "") && V(a, r), v & 512 && E !== (E = It(h[23]) + "") && V(C, E), v & 512 && F !== (F = "#/relationships/" + t0(h[23].rawToken)) && c(t, "href", F);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function Dn(x) {
        let e, t, n, o, s = E0(x[1]), l = [];
        for (let r = 0; r < s.length; r += 1) l[r] = mn(En(x, s, r));
        return {
          c() {
            e = d("section"), t = d("div"), t.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">groups</span> <h2 class="svelte-81oe9z">Group encounters</h2>', n = g(), o = d("ul");
            for (let r = 0; r < l.length; r += 1) l[r].c();
            c(t, "class", "section-header svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o);
            for (let u = 0; u < l.length; u += 1) l[u] && l[u].m(o, null);
          },
          p(r, a) {
            if (a & 2) {
              s = E0(r[1]);
              let u;
              for (u = 0; u < s.length; u += 1) {
                const f = En(r, s, u);
                l[u] ? l[u].p(f, a) : (l[u] = mn(f), l[u].c(), l[u].m(o, null));
              }
              for (; u < l.length; u += 1) l[u].d(1);
              l.length = s.length;
            }
          },
          d(r) {
            r && P(e), V0(l, r);
          }
        };
      }
      function mn(x) {
        let e, t, n, o, s, l, r = bn(x[26]) + "", a, u, f, E = gn(x[26]) + "", C, B, A, F, m;
        return {
          c() {
            e = d("li"), t = d("a"), n = d("span"), n.textContent = "groups", o = g(), s = d("span"), l = d("span"), a = z(r), u = g(), f = d("span"), C = z(E), B = g(), A = d("span"), A.textContent = "chevron_right", m = g(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(l, "class", "rel-name svelte-81oe9z"), c(f, "class", "rel-sub svelte-81oe9z"), c(s, "class", "rel-main svelte-81oe9z"), c(A, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", F = "#/groups/" + t0(x[26].token)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(t, n), i(t, o), i(t, s), i(s, l), i(l, a), i(s, u), i(s, f), i(f, C), i(t, B), i(t, A), i(e, m);
          },
          p(h, v) {
            v & 2 && r !== (r = bn(h[26]) + "") && V(a, r), v & 2 && E !== (E = gn(h[26]) + "") && V(C, E), v & 2 && F !== (F = "#/groups/" + t0(h[26].token)) && c(t, "href", F);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function hn(x) {
        let e, t, n, o = x[4] ? "expand_less" : "expand_more", s, l, r, a, u = x[8].length + "", f, E, C, B, A, F = x[4] && vn(x);
        return {
          c() {
            e = d("section"), t = d("button"), n = d("span"), s = z(o), l = g(), r = d("span"), a = z("Archived partners ("), f = z(u), E = z(")"), C = g(), F && F.c(), c(n, "class", "material-icons toggle-icon svelte-81oe9z"), c(r, "class", "muted-label svelte-81oe9z"), c(t, "class", "collapse-toggle svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(m, h) {
            T(m, e, h), i(e, t), i(t, n), i(n, s), i(t, l), i(t, r), i(r, a), i(r, f), i(r, E), i(e, C), F && F.m(e, null), B || (A = O(t, "click", x[17]), B = true);
          },
          p(m, h) {
            h & 16 && o !== (o = m[4] ? "expand_less" : "expand_more") && V(s, o), h & 256 && u !== (u = m[8].length + "") && V(f, u), m[4] ? F ? F.p(m, h) : (F = vn(m), F.c(), F.m(e, null)) : F && (F.d(1), F = null);
          },
          d(m) {
            m && P(e), F && F.d(), B = false, A();
          }
        };
      }
      function vn(x) {
        let e, t = E0(x[8]), n = [];
        for (let o = 0; o < t.length; o += 1) n[o] = _n(dn(x, t, o));
        return {
          c() {
            e = d("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-81oe9z");
          },
          m(o, s) {
            T(o, e, s);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, s) {
            if (s & 256) {
              t = E0(o[8]);
              let l;
              for (l = 0; l < t.length; l += 1) {
                const r = dn(o, t, l);
                n[l] ? n[l].p(r, s) : (n[l] = _n(r), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = t.length;
            }
          },
          d(o) {
            o && P(e), V0(n, o);
          }
        };
      }
      function _n(x) {
        let e, t, n, o, s, l, r = St(x[23]) + "", a, u, f, E = It(x[23]) + "", C, B, A, F, m;
        return {
          c() {
            e = d("li"), t = d("a"), n = d("span"), n.textContent = "favorite_border", o = g(), s = d("span"), l = d("span"), a = z(r), u = g(), f = d("span"), C = z(E), B = g(), A = d("span"), A.textContent = "chevron_right", m = g(), c(n, "class", "material-icons rel-icon ended svelte-81oe9z"), c(l, "class", "rel-name svelte-81oe9z"), c(f, "class", "rel-sub svelte-81oe9z"), c(s, "class", "rel-main svelte-81oe9z"), c(A, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", F = "#/relationships/" + t0(x[23].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(t, n), i(t, o), i(t, s), i(s, l), i(l, a), i(s, u), i(s, f), i(f, C), i(t, B), i(t, A), i(e, m);
          },
          p(h, v) {
            v & 256 && r !== (r = St(h[23]) + "") && V(a, r), v & 256 && E !== (E = It(h[23]) + "") && V(C, E), v & 256 && F !== (F = "#/relationships/" + t0(h[23].rawToken)) && c(t, "href", F);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function Ei(x) {
        let e, t, n, o = E0(x[0]), s = [];
        for (let l = 0; l < o.length; l += 1) s[l] = kn(fn(x, o, l));
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">check_circle_outline</span> <h2 class="svelte-81oe9z">One-time encounters</h2>', t = g(), n = d("ul");
            for (let l = 0; l < s.length; l += 1) s[l].c();
            c(e, "class", "section-header svelte-81oe9z"), c(n, "class", "svelte-81oe9z");
          },
          m(l, r) {
            T(l, e, r), T(l, t, r), T(l, n, r);
            for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(n, null);
          },
          p(l, r) {
            if (r & 1) {
              o = E0(l[0]);
              let a;
              for (a = 0; a < o.length; a += 1) {
                const u = fn(l, o, a);
                s[a] ? s[a].p(u, r) : (s[a] = kn(u), s[a].c(), s[a].m(n, null));
              }
              for (; a < s.length; a += 1) s[a].d(1);
              s.length = o.length;
            }
          },
          d(l) {
            l && (P(e), P(t), P(n)), V0(s, l);
          }
        };
      }
      function Bi(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "No one-time encounters.", c(e, "class", "muted list-muted svelte-81oe9z");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function Ci(x) {
        let e, t, n, o, s, l, r, a;
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "people_outline", n = g(), o = d("p"), o.textContent = "No encounters recorded yet.", s = g(), l = d("button"), l.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, c(t, "class", "material-icons empty-icon svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(l, "class", "btn-filled svelte-81oe9z"), c(e, "class", "empty-state svelte-81oe9z");
          },
          m(u, f) {
            T(u, e, f), i(e, t), i(e, n), i(e, o), i(e, s), i(e, l), r || (a = O(l, "click", x[18]), r = true);
          },
          p: X,
          d(u) {
            u && P(e), r = false, a();
          }
        };
      }
      function Ai(x) {
        let e, t = t0(x[20].rawToken).slice(0, 12) + "", n, o;
        return {
          c() {
            e = d("span"), n = z(t), o = z("\u2026"), c(e, "class", "rel-sub enc-token svelte-81oe9z");
          },
          m(s, l) {
            T(s, e, l), i(e, n), i(e, o);
          },
          p(s, l) {
            l & 1 && t !== (t = t0(s[20].rawToken).slice(0, 12) + "") && V(n, t);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Fi(x) {
        let e, t = x[20].note + "", n;
        return {
          c() {
            e = d("span"), n = z(t), c(e, "class", "rel-sub enc-note svelte-81oe9z");
          },
          m(o, s) {
            T(o, e, s), i(e, n);
          },
          p(o, s) {
            s & 1 && t !== (t = o[20].note + "") && V(n, t);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function kn(x) {
        let e, t, n, o, s, l, r = x[20].date + "", a, u, f, E, C, B;
        function A(h, v) {
          return h[20].note ? Fi : Ai;
        }
        let F = A(x), m = F(x);
        return {
          c() {
            e = d("li"), t = d("a"), n = d("span"), n.textContent = "check_circle_outline", o = g(), s = d("span"), l = d("span"), a = z(r), u = g(), m.c(), f = g(), E = d("span"), E.textContent = "chevron_right", B = g(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(l, "class", "rel-name svelte-81oe9z"), c(s, "class", "rel-main svelte-81oe9z"), c(E, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", C = "#/encounters/" + t0(x[20].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(t, n), i(t, o), i(t, s), i(s, l), i(l, a), i(s, u), m.m(s, null), i(t, f), i(t, E), i(e, B);
          },
          p(h, v) {
            v & 1 && r !== (r = h[20].date + "") && V(a, r), F === (F = A(h)) && m ? m.p(h, v) : (m.d(1), m = F(h), m && (m.c(), m.m(s, null))), v & 1 && C !== (C = "#/encounters/" + t0(h[20].rawToken)) && c(t, "href", C);
          },
          d(h) {
            h && P(e), m.d();
          }
        };
      }
      function pi(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C;
        e = new ne({});
        let B = x[5] && Cn(x);
        function A(h, v) {
          return h[2] ? di : h[3] ? fi : ui;
        }
        let F = A(x), m = F(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), o = d("div"), s = d("h1"), s.textContent = "Encounters", l = g(), r = d("button"), r.innerHTML = '<span class="material-icons">add</span>', a = g(), B && B.c(), u = g(), m.c(), c(s, "class", "svelte-81oe9z"), c(r, "class", "fab svelte-81oe9z"), c(r, "title", "Add encounter"), c(o, "class", "page-header svelte-81oe9z"), c(n, "class", "svelte-81oe9z");
          },
          m(h, v) {
            b0(e, h, v), T(h, t, v), T(h, n, v), i(n, o), i(o, s), i(o, l), i(o, r), i(n, a), B && B.m(n, null), i(n, u), m.m(n, null), f = true, E || (C = O(r, "click", x[13]), E = true);
          },
          p(h, [v]) {
            h[5] ? B ? B.p(h, v) : (B = Cn(h), B.c(), B.m(n, u)) : B && (B.d(1), B = null), F === (F = A(h)) && m ? m.p(h, v) : (m.d(1), m = F(h), m && (m.c(), m.m(n, null)));
          },
          i(h) {
            f || (d0(e.$$.fragment, h), f = true);
          },
          o(h) {
            C0(e.$$.fragment, h), f = false;
          },
          d(h) {
            h && (P(t), P(n)), g0(e, h), B && B.d(), m.d(), E = false, C();
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
      function Di(x, e, t) {
        let n, o, s = [], l = [], r = [], a = true, u = null, f = false, E = false, C = false, B = null;
        z0(() => {
          if (!G0()) {
            i0("/login");
            return;
          }
          A();
        });
        function A() {
          t(2, a = true), t(3, u = null);
          try {
            t(0, s = Ss()), t(11, l = Mx()), t(1, r = Is());
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
            await Ls(k, y, true, w, null), t(5, E = false), i0("/groups/" + t0(k));
          } catch (k) {
            t(7, B = k.message);
          } finally {
            t(6, C = false);
          }
        }
        function m(k) {
          ax.call(this, x, k);
        }
        const h = () => t(5, E = true), v = () => {
          t(5, E = false), i0("/encounter-exchange");
        }, b = () => t(5, E = false), _ = () => {
          C || t(5, E = false);
        }, D = () => t(4, f = !f), p = () => t(5, E = true);
        return x.$$.update = () => {
          x.$$.dirty & 2048 && t(9, n = l.filter((k) => !k.archived)), x.$$.dirty & 2048 && t(8, o = l.filter((k) => k.archived));
        }, [
          s,
          r,
          a,
          u,
          f,
          E,
          C,
          B,
          o,
          n,
          F,
          l,
          m,
          h,
          v,
          b,
          _,
          D,
          p
        ];
      }
      class mi extends D0 {
        constructor(e) {
          super(), p0(this, e, Di, pi, A0, {});
        }
      }
      function hi(x) {
        let e, t, n, o, s = x[7] ? "favorite" : "favorite_border", l, r, a, u, f = x[7] ? "Active partner" : "Ended", E, C, B, A, F, m, h = Mt(x[0].createdAt) + "", v, b, _, D, p, k, w, y, S, M, I = x[3] && wn(x), L = x[0].archived && yn(), N = x[0].endedAt && Pn(x);
        function q(Y, r0) {
          return Y[4] ? ki : _i;
        }
        let R = q(x), j = R(x);
        function H(Y, r0) {
          return Y[7] ? gi : bi;
        }
        let Q = H(x), K = Q(x);
        function G(Y, r0) {
          return Y[0].archived ? Si : Y[6] === "archive" ? Ti : Pi;
        }
        let U = G(x), J = U(x);
        return {
          c() {
            I && I.c(), e = g(), t = d("section"), n = d("div"), o = d("span"), l = z(s), r = g(), a = d("div"), u = d("span"), E = z(f), C = g(), L && L.c(), B = g(), A = d("div"), F = d("span"), m = z("Since "), v = z(h), b = g(), N && N.c(), _ = g(), D = d("section"), j.c(), p = g(), k = d("div"), w = g(), K.c(), y = g(), S = d("div"), M = g(), J.c(), c(o, "class", "material-icons status-icon svelte-1lfam"), e0(o, "active", x[7]), e0(o, "ended", !x[7]), c(u, "class", "status-label svelte-1lfam"), e0(u, "active", x[7]), c(a, "class", "status-text svelte-1lfam"), c(n, "class", "status-row svelte-1lfam"), c(A, "class", "dates svelte-1lfam"), c(t, "class", "card pad svelte-1lfam"), c(k, "class", "divider svelte-1lfam"), c(S, "class", "divider svelte-1lfam"), c(D, "class", "card svelte-1lfam");
          },
          m(Y, r0) {
            I && I.m(Y, r0), T(Y, e, r0), T(Y, t, r0), i(t, n), i(n, o), i(o, l), i(n, r), i(n, a), i(a, u), i(u, E), i(a, C), L && L.m(a, null), i(t, B), i(t, A), i(A, F), i(F, m), i(F, v), i(A, b), N && N.m(A, null), T(Y, _, r0), T(Y, D, r0), j.m(D, null), i(D, p), i(D, k), i(D, w), K.m(D, null), i(D, y), i(D, S), i(D, M), J.m(D, null);
          },
          p(Y, r0) {
            Y[3] ? I ? I.p(Y, r0) : (I = wn(Y), I.c(), I.m(e.parentNode, e)) : I && (I.d(1), I = null), r0 & 128 && s !== (s = Y[7] ? "favorite" : "favorite_border") && V(l, s), r0 & 128 && e0(o, "active", Y[7]), r0 & 128 && e0(o, "ended", !Y[7]), r0 & 128 && f !== (f = Y[7] ? "Active partner" : "Ended") && V(E, f), r0 & 128 && e0(u, "active", Y[7]), Y[0].archived ? L || (L = yn(), L.c(), L.m(a, null)) : L && (L.d(1), L = null), r0 & 1 && h !== (h = Mt(Y[0].createdAt) + "") && V(v, h), Y[0].endedAt ? N ? N.p(Y, r0) : (N = Pn(Y), N.c(), N.m(A, null)) : N && (N.d(1), N = null), R === (R = q(Y)) && j ? j.p(Y, r0) : (j.d(1), j = R(Y), j && (j.c(), j.m(D, p))), Q === (Q = H(Y)) && K ? K.p(Y, r0) : (K.d(1), K = Q(Y), K && (K.c(), K.m(D, y))), U === (U = G(Y)) && J ? J.p(Y, r0) : (J.d(1), J = U(Y), J && (J.c(), J.m(D, null)));
          },
          d(Y) {
            Y && (P(e), P(t), P(_), P(D)), I && I.d(Y), L && L.d(), N && N.d(), j.d(), K.d(), J.d();
          }
        };
      }
      function vi(x) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-1lfam">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-1lfam">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-1lfam");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function wn(x) {
        let e, t, n, o;
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "error_outline", n = g(), o = z(x[3]), c(t, "class", "material-icons svelte-1lfam"), c(e, "class", "toast error-toast svelte-1lfam");
          },
          m(s, l) {
            T(s, e, l), i(e, t), i(e, n), i(e, o);
          },
          p(s, l) {
            l & 8 && V(o, s[3]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function yn(x) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "archived", c(e, "class", "badge archived svelte-1lfam");
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
            e = d("span"), t = z("Ended "), o = z(n);
          },
          m(s, l) {
            T(s, e, l), i(e, t), i(e, o);
          },
          p(s, l) {
            l & 1 && n !== (n = Mt(s[0].endedAt) + "") && V(o, n);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function _i(x) {
        let e, t, n, o, s = (x[0].name ? x[0].name : "Add nickname") + "", l, r, a, u, f, E, C = x[0].name && Tn();
        return {
          c() {
            e = d("button"), t = d("span"), t.textContent = "edit", n = g(), o = d("span"), l = z(s), r = g(), C && C.c(), a = g(), u = d("span"), u.textContent = "chevron_right", c(t, "class", "material-icons action-icon svelte-1lfam"), c(o, "class", "action-label svelte-1lfam"), c(u, "class", "material-icons action-chevron svelte-1lfam"), c(e, "class", "action-row svelte-1lfam");
          },
          m(B, A) {
            T(B, e, A), i(e, t), i(e, n), i(e, o), i(o, l), i(o, r), C && C.m(o, null), i(e, a), i(e, u), f || (E = O(e, "click", x[13]), f = true);
          },
          p(B, A) {
            A & 1 && s !== (s = (B[0].name ? B[0].name : "Add nickname") + "") && V(l, s), B[0].name ? C || (C = Tn(), C.c(), C.m(o, null)) : C && (C.d(1), C = null);
          },
          d(B) {
            B && P(e), C && C.d(), f = false, E();
          }
        };
      }
      function ki(x) {
        let e, t, n, o, s, l, r, a, u, f, E = x[2] ? "Saving\u2026" : "Save", C, B, A;
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "edit", n = g(), o = d("form"), s = d("input"), l = g(), r = d("div"), a = d("button"), a.textContent = "Cancel", u = g(), f = d("button"), C = z(E), c(t, "class", "material-icons action-icon svelte-1lfam"), c(s, "type", "text"), c(s, "placeholder", "Optional nickname"), c(s, "maxlength", "64"), s.autofocus = true, c(s, "class", "svelte-1lfam"), c(a, "type", "button"), c(a, "class", "btn-text svelte-1lfam"), c(f, "type", "submit"), c(f, "class", "btn-filled-sm svelte-1lfam"), f.disabled = x[2], c(r, "class", "name-actions svelte-1lfam"), c(o, "class", "name-form svelte-1lfam"), c(e, "class", "action-row edit-name-row svelte-1lfam");
          },
          m(F, m) {
            T(F, e, m), i(e, t), i(e, n), i(e, o), i(o, s), x0(s, x[5]), i(o, l), i(o, r), i(r, a), i(r, u), i(r, f), i(f, C), s.focus(), B || (A = [
              O(s, "input", x[16]),
              O(a, "click", x[14]),
              O(o, "submit", re(x[9]))
            ], B = true);
          },
          p(F, m) {
            m & 32 && s.value !== F[5] && x0(s, F[5]), m & 4 && E !== (E = F[2] ? "Saving\u2026" : "Save") && V(C, E), m & 4 && (f.disabled = F[2]);
          },
          d(F) {
            F && P(e), B = false, s0(A);
          }
        };
      }
      function Tn(x) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Tap to change", c(e, "class", "action-sub svelte-1lfam");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function bi(x) {
        let e, t, n, o, s, l;
        return {
          c() {
            e = d("button"), t = d("span"), t.textContent = "favorite", n = g(), o = d("span"), o.textContent = "Mark as active again", c(t, "class", "material-icons action-icon primary svelte-1lfam"), c(o, "class", "action-label primary svelte-1lfam"), c(e, "class", "action-row svelte-1lfam"), e.disabled = x[2];
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o), s || (l = O(e, "click", x[11]), s = true);
          },
          p(r, a) {
            a & 4 && (e.disabled = r[2]);
          },
          d(r) {
            r && P(e), s = false, l();
          }
        };
      }
      function gi(x) {
        let e;
        function t(s, l) {
          return s[6] === "end" ? yi : wi;
        }
        let n = t(x), o = n(x);
        return {
          c() {
            o.c(), e = X0();
          },
          m(s, l) {
            o.m(s, l), T(s, e, l);
          },
          p(s, l) {
            n === (n = t(s)) && o ? o.p(s, l) : (o.d(1), o = n(s), o && (o.c(), o.m(e.parentNode, e)));
          },
          d(s) {
            s && P(e), o.d(s);
          }
        };
      }
      function wi(x) {
        let e, t, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-1lfam">heart_broken</span> <span class="action-label danger svelte-1lfam">Mark as ended</span>', c(e, "class", "action-row svelte-1lfam");
          },
          m(o, s) {
            T(o, e, s), t || (n = O(e, "click", x[18]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function yi(x) {
        let e, t, n, o, s, l, r, a = x[2] ? "Saving\u2026" : "Mark as ended", u, f, E;
        return {
          c() {
            e = d("div"), t = d("p"), t.textContent = "Mark this partnership as ended?", n = g(), o = d("div"), s = d("button"), s.textContent = "Cancel", l = g(), r = d("button"), u = z(a), c(t, "class", "confirm-text svelte-1lfam"), c(s, "class", "btn-text svelte-1lfam"), c(r, "class", "btn-danger-sm svelte-1lfam"), r.disabled = x[2], c(o, "class", "confirm-actions svelte-1lfam"), c(e, "class", "confirm-row svelte-1lfam");
          },
          m(C, B) {
            T(C, e, B), i(e, t), i(e, n), i(e, o), i(o, s), i(o, l), i(o, r), i(r, u), f || (E = [
              O(s, "click", x[17]),
              O(r, "click", x[10])
            ], f = true);
          },
          p(C, B) {
            B & 4 && a !== (a = C[2] ? "Saving\u2026" : "Mark as ended") && V(u, a), B & 4 && (r.disabled = C[2]);
          },
          d(C) {
            C && P(e), f = false, s0(E);
          }
        };
      }
      function Pi(x) {
        let e, t, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons action-icon svelte-1lfam">archive</span> <span class="action-label svelte-1lfam">Archive</span> <span class="action-sub-right svelte-1lfam">Hide from main list</span>', c(e, "class", "action-row svelte-1lfam");
          },
          m(o, s) {
            T(o, e, s), t || (n = O(e, "click", x[22]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function Ti(x) {
        let e, t, n, o, s, l, r, a = x[2] ? "Saving\u2026" : "Archive", u, f, E;
        return {
          c() {
            e = d("div"), t = d("p"), t.textContent = "Archive this partner? They will be hidden from the main list.", n = g(), o = d("div"), s = d("button"), s.textContent = "Cancel", l = g(), r = d("button"), u = z(a), c(t, "class", "confirm-text svelte-1lfam"), c(s, "class", "btn-text svelte-1lfam"), c(r, "class", "btn-filled-sm svelte-1lfam"), r.disabled = x[2], c(o, "class", "confirm-actions svelte-1lfam"), c(e, "class", "confirm-row svelte-1lfam");
          },
          m(C, B) {
            T(C, e, B), i(e, t), i(e, n), i(e, o), i(o, s), i(o, l), i(o, r), i(r, u), f || (E = [
              O(s, "click", x[20]),
              O(r, "click", x[21])
            ], f = true);
          },
          p(C, B) {
            B & 4 && a !== (a = C[2] ? "Saving\u2026" : "Archive") && V(u, a), B & 4 && (r.disabled = C[2]);
          },
          d(C) {
            C && P(e), f = false, s0(E);
          }
        };
      }
      function Si(x) {
        let e, t, n, o, s, l;
        return {
          c() {
            e = d("button"), t = d("span"), t.textContent = "unarchive", n = g(), o = d("span"), o.textContent = "Unarchive", c(t, "class", "material-icons action-icon primary svelte-1lfam"), c(o, "class", "action-label primary svelte-1lfam"), c(e, "class", "action-row svelte-1lfam"), e.disabled = x[2];
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o), s || (l = O(e, "click", x[19]), s = true);
          },
          p(r, a) {
            a & 4 && (e.disabled = r[2]);
          },
          d(r) {
            r && P(e), s = false, l();
          }
        };
      }
      function Ii(x) {
        let e, t, n, o, s, l, r, a = (x[1] ? "Partner not found" : x[8]) + "", u, f, E;
        e = new ne({});
        function C(F, m) {
          if (F[1]) return vi;
          if (F[0]) return hi;
        }
        let B = C(x), A = B && B(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), o = d("div"), s = d("a"), s.innerHTML = '<span class="material-icons svelte-1lfam">arrow_back</span>', l = g(), r = d("h1"), u = z(a), f = g(), A && A.c(), c(s, "class", "back-btn svelte-1lfam"), c(s, "href", "#/encounters"), c(r, "class", "svelte-1lfam"), c(o, "class", "page-header svelte-1lfam"), c(n, "class", "svelte-1lfam");
          },
          m(F, m) {
            b0(e, F, m), T(F, t, m), T(F, n, m), i(n, o), i(o, s), i(o, l), i(o, r), i(r, u), i(n, f), A && A.m(n, null), E = true;
          },
          p(F, [m]) {
            (!E || m & 258) && a !== (a = (F[1] ? "Partner not found" : F[8]) + "") && V(u, a), B === (B = C(F)) && A ? A.p(F, m) : (A && A.d(1), A = B && B(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            E || (d0(e.$$.fragment, F), E = true);
          },
          o(F) {
            C0(e.$$.fragment, F), E = false;
          },
          d(F) {
            F && (P(t), P(n)), g0(e, F), A && A.d();
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
      function Mi(x, e, t) {
        let n, o, { params: s = {} } = e, l = null, r = false, a = false, u = null, f = false, E = "", C = null;
        z0(() => {
          if (!G0()) {
            i0("/login");
            return;
          }
          B();
        });
        function B() {
          const I = Mx(), L = s.rawTokenHex;
          t(0, l = I.find((N) => t0(N.rawToken) === L) ?? null), l || t(1, r = true);
        }
        function A() {
          return t0(l.rawToken);
        }
        async function F() {
          if (!a) {
            t(2, a = true), t(3, u = null);
            try {
              const I = E.trim();
              await Bt(A(), {
                name: I || null
              }), B(), t(4, f = false);
            } catch (I) {
              t(3, u = I.message);
            } finally {
              t(2, a = false);
            }
          }
        }
        async function m() {
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
          t(5, E = l.name ?? ""), t(4, f = true), t(3, u = null);
        }
        function _() {
          t(4, f = false), t(3, u = null);
        }
        function D() {
          E = this.value, t(5, E);
        }
        const p = () => t(6, C = null), k = () => t(6, C = "end"), w = () => v(false), y = () => t(6, C = null), S = () => v(true), M = () => t(6, C = "archive");
        return x.$$set = (I) => {
          "params" in I && t(15, s = I.params);
        }, x.$$.update = () => {
          x.$$.dirty & 1 && t(8, n = l?.name || (l?.endedAt ? "Ended partner" : "Active partner")), x.$$.dirty & 1 && t(7, o = l && !l.endedAt);
        }, [
          l,
          r,
          a,
          u,
          f,
          E,
          C,
          o,
          n,
          F,
          m,
          h,
          v,
          b,
          _,
          s,
          D,
          p,
          k,
          w,
          y,
          S,
          M
        ];
      }
      class Li extends D0 {
        constructor(e) {
          super(), p0(this, e, Mi, Ii, A0, {
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
      function Ni(x) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
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
      function zi(x) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
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
      function qi(x) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
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
            e = d("div"), t = d("span"), t.textContent = "error_outline", n = g(), o = z(x[5]), c(t, "class", "material-icons svelte-1ugndgv"), c(e, "class", "toast error-toast svelte-1ugndgv");
          },
          m(s, l) {
            T(s, e, l), i(e, t), i(e, n), i(e, o);
          },
          p(s, l) {
            l & 32 && V(o, s[5]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Ln(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D = x[3] && x[4] === "computing" ? "Saving\u2026" : "Save result", p, k, w, y = E0(xe), S = [];
        for (let I = 0; I < y.length; I += 1) S[I] = Nn(In(x, y, I));
        let M = x[4] === "computing" && zn();
        return {
          c() {
            e = d("section"), t = d("h2"), t.textContent = "Record a result", n = g(), o = d("p"), o.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, s = g(), l = d("form"), r = d("label"), a = z(`Test date
          `), u = d("input"), f = g(), E = d("fieldset"), C = d("legend"), C.textContent = "Positive results", B = g(), A = d("div");
            for (let I = 0; I < S.length; I += 1) S[I].c();
            F = g(), M && M.c(), m = g(), h = d("div"), v = d("button"), v.textContent = "Cancel", b = g(), _ = d("button"), p = z(D), c(t, "class", "svelte-1ugndgv"), c(o, "class", "help svelte-1ugndgv"), c(u, "type", "date"), u.required = true, c(u, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), c(u, "class", "svelte-1ugndgv"), c(r, "class", "svelte-1ugndgv"), c(C, "class", "svelte-1ugndgv"), c(A, "class", "disease-grid svelte-1ugndgv"), c(E, "class", "svelte-1ugndgv"), c(v, "type", "button"), c(v, "class", "btn-text svelte-1ugndgv"), c(_, "type", "submit"), c(_, "class", "btn-filled svelte-1ugndgv"), _.disabled = x[3], c(h, "class", "form-actions svelte-1ugndgv"), c(l, "class", "svelte-1ugndgv"), c(e, "class", "card form-card svelte-1ugndgv");
          },
          m(I, L) {
            T(I, e, L), i(e, t), i(e, n), i(e, o), i(e, s), i(e, l), i(l, r), i(r, a), i(r, u), x0(u, x[0]), i(l, f), i(l, E), i(E, C), i(E, B), i(E, A);
            for (let N = 0; N < S.length; N += 1) S[N] && S[N].m(A, null);
            i(l, F), M && M.m(l, null), i(l, m), i(l, h), i(h, v), i(h, b), i(h, _), i(_, p), k || (w = [
              O(u, "input", x[11]),
              O(v, "click", x[13]),
              O(l, "submit", re(x[8]))
            ], k = true);
          },
          p(I, L) {
            if (L & 1 && x0(u, I[0]), L & 2) {
              y = E0(xe);
              let N;
              for (N = 0; N < y.length; N += 1) {
                const q = In(I, y, N);
                S[N] ? S[N].p(q, L) : (S[N] = Nn(q), S[N].c(), S[N].m(A, null));
              }
              for (; N < S.length; N += 1) S[N].d(1);
              S.length = y.length;
            }
            I[4] === "computing" ? M || (M = zn(), M.c(), M.m(l, m)) : M && (M.d(1), M = null), L & 24 && D !== (D = I[3] && I[4] === "computing" ? "Saving\u2026" : "Save result") && V(p, D), L & 8 && (_.disabled = I[3]);
          },
          d(I) {
            I && P(e), V0(S, I), M && M.d(), k = false, s0(w);
          }
        };
      }
      function Nn(x) {
        let e, t, n, o = Ke[x[22]] + "", s, l, r, a;
        function u() {
          x[12].call(t, x[22]);
        }
        return {
          c() {
            e = d("label"), t = d("input"), n = g(), s = z(o), l = g(), c(t, "type", "checkbox"), c(t, "class", "svelte-1ugndgv"), c(e, "class", "checkbox-label svelte-1ugndgv");
          },
          m(f, E) {
            T(f, e, E), i(e, t), t.checked = x[1][x[22]], i(e, n), i(e, s), i(e, l), r || (a = O(t, "change", u), r = true);
          },
          p(f, E) {
            x = f, E & 2 && (t.checked = x[1][x[22]]);
          },
          d(f) {
            f && P(e), r = false, a();
          }
        };
      }
      function zn(x) {
        let e;
        return {
          c() {
            e = d("p"), e.innerHTML = `<span class="material-icons spin svelte-1ugndgv">autorenew</span>
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
      function Ri(x) {
        let e, t = E0([
          ...x[6]
        ].reverse()), n = [];
        for (let o = 0; o < t.length; o += 1) n[o] = Rn(Sn(x, t, o));
        return {
          c() {
            e = d("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-1ugndgv");
          },
          m(o, s) {
            T(o, e, s);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, s) {
            if (s & 712) {
              t = E0([
                ...o[6]
              ].reverse());
              let l;
              for (l = 0; l < t.length; l += 1) {
                const r = Sn(o, t, l);
                n[l] ? n[l].p(r, s) : (n[l] = Rn(r), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = t.length;
            }
          },
          d(o) {
            o && P(e), V0(n, o);
          }
        };
      }
      function ji(x) {
        let e, t, n, o, s, l, r, a;
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "science", n = g(), o = d("p"), o.textContent = "No results recorded yet.", s = g(), l = d("button"), l.innerHTML = `<span class="material-icons">add</span>
          Record first result`, c(t, "class", "material-icons empty-icon svelte-1ugndgv"), c(o, "class", "svelte-1ugndgv"), c(l, "class", "btn-filled svelte-1ugndgv"), c(e, "class", "empty-state svelte-1ugndgv");
          },
          m(u, f) {
            T(u, e, f), i(e, t), i(e, n), i(e, o), i(e, s), i(e, l), r || (a = O(l, "click", x[14]), r = true);
          },
          p: X,
          d(u) {
            u && P(e), r = false, a();
          }
        };
      }
      function Hi(x) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Negative", c(e, "class", "badge negative svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Oi(x) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Positive", c(e, "class", "badge positive svelte-1ugndgv");
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
        let e, t = x[18].positiveDiseases.map(x[15]).join(", ") + "", n, o, s;
        function l(u, f) {
          return u[18].hasNotified ? Vi : Ui;
        }
        let r = l(x), a = r(x);
        return {
          c() {
            e = d("div"), n = z(t), o = g(), a.c(), s = X0(), c(e, "class", "diseases svelte-1ugndgv");
          },
          m(u, f) {
            T(u, e, f), i(e, n), T(u, o, f), a.m(u, f), T(u, s, f);
          },
          p(u, f) {
            f & 64 && t !== (t = u[18].positiveDiseases.map(u[15]).join(", ") + "") && V(n, t), r === (r = l(u)) && a ? a.p(u, f) : (a.d(1), a = r(u), a && (a.c(), a.m(s.parentNode, s)));
          },
          d(u) {
            u && (P(e), P(o), P(s)), a.d(u);
          }
        };
      }
      function Ui(x) {
        let e, t, n, o, s = x[7] === x[19] ? "Notifying\u2026" : "Notify now", l, r, a;
        function u() {
          return x[16](x[19], x[18]);
        }
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "Partners not yet notified", n = g(), o = d("button"), l = z(s), c(t, "class", "not-notified svelte-1ugndgv"), c(o, "class", "btn-text-small svelte-1ugndgv"), o.disabled = x[3], c(e, "class", "notify-row svelte-1ugndgv");
          },
          m(f, E) {
            T(f, e, E), i(e, t), i(e, n), i(e, o), i(o, l), r || (a = O(o, "click", u), r = true);
          },
          p(f, E) {
            x = f, E & 192 && s !== (s = x[7] === x[19] ? "Notifying\u2026" : "Notify now") && V(l, s), E & 8 && (o.disabled = x[3]);
          },
          d(f) {
            f && P(e), r = false, a();
          }
        };
      }
      function Vi(x) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check</span>
                    Partners notified`, c(e, "class", "notified svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function Rn(x) {
        let e, t, n = x[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", o, s, l, r, a, u = x[18].date + "", f, E, C, B;
        function A(v, b) {
          return v[18].positiveDiseases.length > 0 ? Oi : Hi;
        }
        let F = A(x), m = F(x), h = x[18].positiveDiseases.length > 0 && qn(x);
        return {
          c() {
            e = d("li"), t = d("span"), o = z(n), s = g(), l = d("div"), r = d("div"), a = d("span"), f = z(u), E = g(), m.c(), C = g(), h && h.c(), B = g(), c(t, "class", "material-icons result-icon svelte-1ugndgv"), e0(t, "positive", x[18].positiveDiseases.length > 0), e0(t, "negative", x[18].positiveDiseases.length === 0), c(a, "class", "result-date svelte-1ugndgv"), c(r, "class", "result-row svelte-1ugndgv"), c(l, "class", "result-body svelte-1ugndgv"), c(e, "class", "svelte-1ugndgv");
          },
          m(v, b) {
            T(v, e, b), i(e, t), i(t, o), i(e, s), i(e, l), i(l, r), i(r, a), i(a, f), i(r, E), m.m(r, null), i(l, C), h && h.m(l, null), i(e, B);
          },
          p(v, b) {
            b & 64 && n !== (n = v[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && V(o, n), b & 64 && e0(t, "positive", v[18].positiveDiseases.length > 0), b & 64 && e0(t, "negative", v[18].positiveDiseases.length === 0), b & 64 && u !== (u = v[18].date + "") && V(f, u), F !== (F = A(v)) && (m.d(1), m = F(v), m && (m.c(), m.m(r, null))), v[18].positiveDiseases.length > 0 ? h ? h.p(v, b) : (h = qn(v), h.c(), h.m(l, null)) : h && (h.d(1), h = null);
          },
          d(v) {
            v && P(e), m.d(), h && h.d();
          }
        };
      }
      function Gi(x) {
        let e, t, n, o, s, l, r, a, u = x[2] ? "close" : "add", f, E, C, B, A, F, m, h, v, b;
        e = new ne({});
        function _(I, L) {
          if (I[4] === "done") return qi;
          if (I[4] === "done_negative") return zi;
          if (I[4] === "done_no_encounters") return Ni;
        }
        let D = _(x), p = D && D(x), k = x[5] && Mn(x), w = x[2] && Ln(x);
        function y(I, L) {
          return I[6].length === 0 ? ji : Ri;
        }
        let S = y(x), M = S(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), o = d("div"), s = d("h1"), s.textContent = "Test Results", l = g(), r = d("button"), a = d("span"), f = z(u), C = g(), p && p.c(), B = g(), k && k.c(), A = g(), w && w.c(), F = g(), m = d("section"), M.c(), c(s, "class", "svelte-1ugndgv"), c(a, "class", "material-icons"), c(r, "class", "fab svelte-1ugndgv"), c(r, "title", E = x[2] ? "Cancel" : "Record new result"), c(o, "class", "page-header svelte-1ugndgv"), c(m, "class", "card list-card svelte-1ugndgv"), c(n, "class", "svelte-1ugndgv");
          },
          m(I, L) {
            b0(e, I, L), T(I, t, L), T(I, n, L), i(n, o), i(o, s), i(o, l), i(o, r), i(r, a), i(a, f), i(n, C), p && p.m(n, null), i(n, B), k && k.m(n, null), i(n, A), w && w.m(n, null), i(n, F), i(n, m), M.m(m, null), h = true, v || (b = O(r, "click", x[10]), v = true);
          },
          p(I, [L]) {
            (!h || L & 4) && u !== (u = I[2] ? "close" : "add") && V(f, u), (!h || L & 4 && E !== (E = I[2] ? "Cancel" : "Record new result")) && c(r, "title", E), D !== (D = _(I)) && (p && p.d(1), p = D && D(I), p && (p.c(), p.m(n, B))), I[5] ? k ? k.p(I, L) : (k = Mn(I), k.c(), k.m(n, A)) : k && (k.d(1), k = null), I[2] ? w ? w.p(I, L) : (w = Ln(I), w.c(), w.m(n, F)) : w && (w.d(1), w = null), S === (S = y(I)) && M ? M.p(I, L) : (M.d(1), M = S(I), M && (M.c(), M.m(m, null)));
          },
          i(I) {
            h || (d0(e.$$.fragment, I), h = true);
          },
          o(I) {
            C0(e.$$.fragment, I), h = false;
          },
          d(I) {
            I && (P(t), P(n)), g0(e, I), p && p.d(), k && k.d(), w && w.d(), M.d(), v = false, b();
          }
        };
      }
      const Yi = 20, jn = 50, Ki = 100;
      function Wi(x, e, t) {
        let n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), o = {}, s = false, l = false, r = null, a = null, u = [], f = null;
        z0(() => {
          if (!G0()) {
            i0("/login");
            return;
          }
          t(6, u = ht());
        });
        async function E(D, p) {
          const k = te(), w = ce(), y = [
            ...k.encounters.map((l0) => Ae(l0.rawToken, l0.theirContactId, l0.submitIndex)),
            ...(k.relationships || []).map((l0) => Ae(l0.rawToken, l0.theirContactId, l0.submitIndex))
          ], S = jn + Math.floor(Math.random() * (Ki - jn + 1)), M = [
            ...y
          ];
          for (; M.length < S; ) M.push(tt(32));
          for (let l0 = M.length - 1; l0 > 0; l0--) {
            const B0 = Math.floor(Math.random() * (l0 + 1));
            [M[l0], M[B0]] = [
              M[B0],
              M[l0]
            ];
          }
          const I = M.map((l0) => Fe(l0)), L = As(w), N = D.replace(/-/g, ""), q = p.map((l0) => Ts[l0] ?? l0).join(""), R = new TextEncoder().encode("1" + N + q), j = xt(L, R), H = Fe(j), Q = new TextEncoder(), K = JSON.stringify(I), G = Q.encode(K).length + Q.encode(H).length, U = new Uint8Array(G), J = Q.encode(K), Y = Q.encode(H);
          U.set(J, 0), U.set(Y, J.length);
          const r0 = qr(U);
          let c0 = Yi, a0 = (/* @__PURE__ */ new Date()).toISOString();
          for (let l0 = 0; l0 < 2; l0++) {
            const { counter: B0 } = Rr(a0, r0, c0), se = {
              tokens: I,
              created_at: a0,
              submission_type: "self_reported",
              encrypted_payload: H,
              pow_counter: B0
            };
            try {
              await Ca(se);
              break;
            } catch (Z) {
              if (l0 === 0 && Z.statusCode === 400) {
                let n0 = false;
                if (Z.powDifficulty && Z.powDifficulty > c0 && (c0 = Z.powDifficulty, n0 = true), Z.serverTime && (a0 = Z.serverTime, n0 = true), n0) continue;
              }
              throw Z;
            }
          }
          await Ia();
        }
        async function C() {
          if (!l) {
            t(3, l = true), t(5, a = null), t(4, r = null);
            try {
              const D = xe.filter((p) => o[p]);
              if (D.length > 0) {
                const p = te();
                if (p.encounters.length > 0 || (p.relationships || []).length > 0) {
                  const w = await tx(n, D);
                  t(4, r = "computing"), await new Promise((y) => setTimeout(y, 30)), await E(n, D), await xn(w), t(4, r = "done");
                } else await tx(n, D, true), t(4, r = "done_no_encounters");
              } else await tx(n, D), t(4, r = "done_negative");
              t(1, o = {}), t(0, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), t(6, u = ht()), t(2, s = false);
            } catch (D) {
              t(5, a = D.message), t(4, r = null);
            } finally {
              t(3, l = false);
            }
          }
        }
        async function B(D, p) {
          if (!l) {
            t(3, l = true), t(7, f = D), t(5, a = null);
            try {
              const k = te();
              if (k.encounters.length === 0 && (k.relationships || []).length === 0) {
                t(5, a = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((w) => setTimeout(w, 30)), await E(p.date, p.positiveDiseases), await xn(D), t(6, u = ht());
            } catch (k) {
              t(5, a = "Notification failed: " + k.message);
            } finally {
              t(3, l = false), t(7, f = null);
            }
          }
        }
        const A = () => {
          t(2, s = !s), t(5, a = null), t(4, r = null);
        };
        function F() {
          n = this.value, t(0, n);
        }
        function m(D) {
          o[D] = this.checked, t(1, o);
        }
        return [
          n,
          o,
          s,
          l,
          r,
          a,
          u,
          f,
          C,
          B,
          A,
          F,
          m,
          () => {
            t(2, s = false), t(4, r = null), t(5, a = null);
          },
          () => t(2, s = true),
          (D) => Ke[D] ?? D,
          (D, p) => B(D, p)
        ];
      }
      class Qi extends D0 {
        constructor(e) {
          super(), p0(this, e, Wi, Gi, A0, {});
        }
      }
      function Hn(x) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-f77wfc">check_circle</span>
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
      function On(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[4]), c(e, "class", "error svelte-f77wfc");
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
      function Ji(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D, p = x[3] ? "Changing password\u2026" : "Change password", k, w, y, S, M, I = x[5] && Hn(), L = x[4] && On(x);
        return {
          c() {
            e = d("main"), t = d("a"), t.innerHTML = `<span class="material-icons svelte-f77wfc">arrow_back</span>
    Back`, n = g(), o = d("h1"), o.textContent = "Change password", s = g(), I && I.c(), l = g(), r = d("form"), a = d("label"), u = z(`Current password
      `), f = d("input"), E = g(), C = d("label"), B = z(`New password
      `), A = d("input"), F = g(), m = d("label"), h = z(`Confirm new password
      `), v = d("input"), b = g(), L && L.c(), _ = g(), D = d("button"), k = z(p), w = g(), y = d("p"), y.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, c(t, "href", "#/home"), c(t, "class", "back-link svelte-f77wfc"), c(o, "class", "svelte-f77wfc"), c(f, "type", "password"), f.required = true, c(f, "autocomplete", "current-password"), c(f, "class", "svelte-f77wfc"), c(a, "class", "svelte-f77wfc"), c(A, "type", "password"), A.required = true, c(A, "autocomplete", "new-password"), c(A, "minlength", "12"), c(A, "class", "svelte-f77wfc"), c(C, "class", "svelte-f77wfc"), c(v, "type", "password"), v.required = true, c(v, "autocomplete", "new-password"), c(v, "class", "svelte-f77wfc"), c(m, "class", "svelte-f77wfc"), c(D, "type", "submit"), D.disabled = x[3], c(D, "class", "svelte-f77wfc"), c(r, "class", "svelte-f77wfc"), c(y, "class", "privacy-note svelte-f77wfc"), c(e, "class", "svelte-f77wfc");
          },
          m(N, q) {
            T(N, e, q), i(e, t), i(e, n), i(e, o), i(e, s), I && I.m(e, null), i(e, l), i(e, r), i(r, a), i(a, u), i(a, f), x0(f, x[0]), i(r, E), i(r, C), i(C, B), i(C, A), x0(A, x[1]), i(r, F), i(r, m), i(m, h), i(m, v), x0(v, x[2]), i(r, b), L && L.m(r, null), i(r, _), i(r, D), i(D, k), i(e, w), i(e, y), S || (M = [
              O(f, "input", x[7]),
              O(A, "input", x[8]),
              O(v, "input", x[9]),
              O(r, "submit", re(x[6]))
            ], S = true);
          },
          p(N, [q]) {
            N[5] ? I || (I = Hn(), I.c(), I.m(e, l)) : I && (I.d(1), I = null), q & 1 && f.value !== N[0] && x0(f, N[0]), q & 2 && A.value !== N[1] && x0(A, N[1]), q & 4 && v.value !== N[2] && x0(v, N[2]), N[4] ? L ? L.p(N, q) : (L = On(N), L.c(), L.m(r, _)) : L && (L.d(1), L = null), q & 8 && p !== (p = N[3] ? "Changing password\u2026" : "Change password") && V(k, p), q & 8 && (D.disabled = N[3]);
          },
          i: X,
          o: X,
          d(N) {
            N && P(e), I && I.d(), L && L.d(), S = false, s0(M);
          }
        };
      }
      function Xi(x, e, t) {
        let n = "", o = "", s = "", l = false, r = null, a = false;
        z0(() => {
          G0() || i0("/login");
        });
        async function u() {
          if (t(4, r = null), t(5, a = false), o !== s) {
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
          t(3, l = true);
          try {
            const B = mt(), { challenge: A, auth_salt: F, enc_salt: m } = await bx(B), h = await le(n, N0(m)), v = me();
            if (!v || h.length !== v.length || !h.every((M, I) => M === v[I])) {
              t(4, r = "Current password is incorrect");
              return;
            }
            const b = await le(n, N0(F)), _ = Cs(new TextEncoder().encode(A), b), D = Fe(_), p = await le(o, N0(F)), k = await le(o, N0(m)), w = t0(Bs(p)), { blobHex: y, blobVersion: S } = Ra(k);
            await fa(D, w, y, S), kx(k), ja(S + 1), t(5, a = true), t(0, n = ""), t(1, o = ""), t(2, s = "");
          } catch (B) {
            t(4, r = B.message);
          } finally {
            t(3, l = false);
          }
        }
        function f() {
          n = this.value, t(0, n);
        }
        function E() {
          o = this.value, t(1, o);
        }
        function C() {
          s = this.value, t(2, s);
        }
        return [
          n,
          o,
          s,
          l,
          r,
          a,
          u,
          f,
          E,
          C
        ];
      }
      class Zi extends D0 {
        constructor(e) {
          super(), p0(this, e, Xi, Ji, A0, {});
        }
      }
      function $i(x) {
        let e, t, n, o, s, l, r, a, u, f = x[2] ? "Sending\u2026" : "Send verification link", E, C, B, A, F = x[0] && Un(x), m = x[3] && Vn(x);
        return {
          c() {
            e = d("div"), F && F.c(), t = g(), n = d("form"), o = d("label"), s = z(`New email address
          `), l = d("input"), r = g(), m && m.c(), a = g(), u = d("button"), E = z(f), c(l, "type", "email"), l.required = true, c(l, "autocomplete", "email"), c(l, "placeholder", "you@example.com"), c(l, "class", "svelte-r6hw3y"), c(o, "class", "svelte-r6hw3y"), c(u, "type", "submit"), u.disabled = C = x[2] || !x[1], c(u, "class", "svelte-r6hw3y"), c(n, "class", "svelte-r6hw3y"), c(e, "class", "card svelte-r6hw3y");
          },
          m(h, v) {
            T(h, e, v), F && F.m(e, null), i(e, t), i(e, n), i(n, o), i(o, s), i(o, l), x0(l, x[1]), i(n, r), m && m.m(n, null), i(n, a), i(n, u), i(u, E), B || (A = [
              O(l, "input", x[6]),
              O(n, "submit", re(x[5]))
            ], B = true);
          },
          p(h, v) {
            h[0] ? F ? F.p(h, v) : (F = Un(h), F.c(), F.m(e, t)) : F && (F.d(1), F = null), v & 2 && l.value !== h[1] && x0(l, h[1]), h[3] ? m ? m.p(h, v) : (m = Vn(h), m.c(), m.m(n, a)) : m && (m.d(1), m = null), v & 4 && f !== (f = h[2] ? "Sending\u2026" : "Send verification link") && V(E, f), v & 6 && C !== (C = h[2] || !h[1]) && (u.disabled = C);
          },
          d(h) {
            h && P(e), F && F.d(), m && m.d(), B = false, s0(A);
          }
        };
      }
      function ec(x) {
        let e, t, n, o, s, l, r, a, u, f;
        return {
          c() {
            e = d("div"), t = d("div"), t.innerHTML = '<span class="material-icons success-icon svelte-r6hw3y">mark_email_read</span> <h2 class="svelte-r6hw3y">Check your inbox</h2>', n = g(), o = d("p"), s = z("We've sent a verification link to "), l = d("strong"), r = z(x[4]), a = z(`.
        Click the link to confirm the change. Your email won't update until you verify it.`), u = g(), f = d("a"), f.textContent = "Done", c(t, "class", "success-row svelte-r6hw3y"), c(o, "class", "hint svelte-r6hw3y"), c(f, "href", "#/settings"), c(f, "class", "btn-primary svelte-r6hw3y"), c(e, "class", "card svelte-r6hw3y");
          },
          m(E, C) {
            T(E, e, C), i(e, t), i(e, n), i(e, o), i(o, s), i(o, l), i(l, r), i(o, a), i(e, u), i(e, f);
          },
          p(E, C) {
            C & 16 && V(r, E[4]);
          },
          d(E) {
            E && P(e);
          }
        };
      }
      function Un(x) {
        let e, t, n, o;
        return {
          c() {
            e = d("p"), t = z("Current email: "), n = d("strong"), o = z(x[0]), c(e, "class", "current-email svelte-r6hw3y");
          },
          m(s, l) {
            T(s, e, l), i(e, t), i(e, n), i(n, o);
          },
          p(s, l) {
            l & 1 && V(o, s[0]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Vn(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[3]), c(e, "class", "error svelte-r6hw3y");
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
      function tc(x) {
        let e, t, n, o, s;
        function l(u, f) {
          return u[4] ? ec : $i;
        }
        let r = l(x), a = r(x);
        return {
          c() {
            e = d("main"), t = d("a"), t.innerHTML = `<span class="material-icons svelte-r6hw3y">arrow_back</span>
    Back to settings`, n = g(), o = d("h1"), o.textContent = "Change email", s = g(), a.c(), c(t, "href", "#/settings"), c(t, "class", "back-link svelte-r6hw3y"), c(o, "class", "svelte-r6hw3y"), c(e, "class", "svelte-r6hw3y");
          },
          m(u, f) {
            T(u, e, f), i(e, t), i(e, n), i(e, o), i(e, s), a.m(e, null);
          },
          p(u, [f]) {
            r === (r = l(u)) && a ? a.p(u, f) : (a.d(1), a = r(u), a && (a.c(), a.m(e, null)));
          },
          i: X,
          o: X,
          d(u) {
            u && P(e), a.d();
          }
        };
      }
      function xc(x, e, t) {
        let n;
        H0(x, Ut, (E) => t(7, n = E));
        let o = "", s = "", l = false, r = null, a = null;
        z0(() => {
          if (!G0()) {
            i0("/login");
            return;
          }
          t(0, o = n ?? "");
        });
        async function u() {
          t(3, r = null), t(2, l = true);
          try {
            await ea(s), t(4, a = s);
          } catch (E) {
            t(3, r = E.message);
          } finally {
            t(2, l = false);
          }
        }
        function f() {
          s = this.value, t(1, s);
        }
        return [
          o,
          s,
          l,
          r,
          a,
          u,
          f
        ];
      }
      class nc extends D0 {
        constructor(e) {
          super(), p0(this, e, xc, tc, A0, {});
        }
      }
      function oc(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C;
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">error_outline</span>', t = g(), n = d("h1"), n.textContent = "Verification failed", o = g(), s = d("p"), l = z(x[1]), r = g(), a = d("p"), a.textContent = "The link may have expired or already been used. You can request a new one from your account settings.", u = g(), f = d("button"), f.textContent = "Go to Login", c(e, "class", "icon-wrap error svelte-1wqqdyg"), c(n, "class", "svelte-1wqqdyg"), c(s, "class", "message error svelte-1wqqdyg"), c(a, "class", "hint svelte-1wqqdyg"), c(f, "class", "btn-primary svelte-1wqqdyg");
          },
          m(B, A) {
            T(B, e, A), T(B, t, A), T(B, n, A), T(B, o, A), T(B, s, A), i(s, l), T(B, r, A), T(B, a, A), T(B, u, A), T(B, f, A), E || (C = O(f, "click", x[4]), E = true);
          },
          p(B, A) {
            A & 2 && V(l, B[1]);
          },
          d(B) {
            B && (P(e), P(t), P(n), P(o), P(s), P(r), P(a), P(u), P(f)), E = false, C();
          }
        };
      }
      function sc(x) {
        let e, t, n, o, s, l, r, a, u;
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">check_circle</span>', t = g(), n = d("h1"), n.textContent = "Email verified", o = g(), s = d("p"), s.textContent = "Your email address has been verified successfully.", l = g(), r = d("button"), r.textContent = "Go to Login", c(e, "class", "icon-wrap success svelte-1wqqdyg"), c(n, "class", "svelte-1wqqdyg"), c(s, "class", "message svelte-1wqqdyg"), c(r, "class", "btn-primary svelte-1wqqdyg");
          },
          m(f, E) {
            T(f, e, E), T(f, t, E), T(f, n, E), T(f, o, E), T(f, s, E), T(f, l, E), T(f, r, E), a || (u = O(r, "click", x[3]), a = true);
          },
          p: X,
          d(f) {
            f && (P(e), P(t), P(n), P(o), P(s), P(l), P(r)), a = false, u();
          }
        };
      }
      function lc(x) {
        let e, t, n;
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons spinning svelte-1wqqdyg">sync</span>', t = g(), n = d("p"), n.textContent = "Verifying your email\u2026", c(e, "class", "icon-wrap svelte-1wqqdyg"), c(n, "class", "message svelte-1wqqdyg");
          },
          m(o, s) {
            T(o, e, s), T(o, t, s), T(o, n, s);
          },
          p: X,
          d(o) {
            o && (P(e), P(t), P(n));
          }
        };
      }
      function rc(x) {
        let e;
        function t(s, l) {
          return s[0] === "verifying" ? lc : s[0] === "success" ? sc : oc;
        }
        let n = t(x), o = n(x);
        return {
          c() {
            e = d("main"), o.c(), c(e, "class", "svelte-1wqqdyg");
          },
          m(s, l) {
            T(s, e, l), o.m(e, null);
          },
          p(s, [l]) {
            n === (n = t(s)) && o ? o.p(s, l) : (o.d(1), o = n(s), o && (o.c(), o.m(e, null)));
          },
          i: X,
          o: X,
          d(s) {
            s && P(e), o.d();
          }
        };
      }
      function ac(x, e, t) {
        let { params: n = {} } = e, o = "verifying", s = null;
        z0(async () => {
          const a = n.token;
          if (!a) {
            t(1, s = "No verification token found in link."), t(0, o = "error");
            return;
          }
          try {
            await xa(a), t(0, o = "success");
          } catch (u) {
            t(1, s = u.message), t(0, o = "error");
          }
        });
        const l = () => i0("/login"), r = () => i0("/login");
        return x.$$set = (a) => {
          "params" in a && t(2, n = a.params);
        }, [
          o,
          s,
          n,
          l,
          r
        ];
      }
      class ic extends D0 {
        constructor(e) {
          super(), p0(this, e, ac, rc, A0, {
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
      function cc(x) {
        let e, t = E0([
          ...x[0]
        ].reverse()), n = [];
        for (let o = 0; o < t.length; o += 1) n[o] = Qn(Gn(x, t, o));
        return {
          c() {
            e = d("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-l1q7u6");
          },
          m(o, s) {
            T(o, e, s);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, s) {
            if (s & 9) {
              t = E0([
                ...o[0]
              ].reverse());
              let l;
              for (l = 0; l < t.length; l += 1) {
                const r = Gn(o, t, l);
                n[l] ? n[l].p(r, s) : (n[l] = Qn(r), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = t.length;
            }
          },
          d(o) {
            o && P(e), V0(n, o);
          }
        };
      }
      function uc(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "No notifications received yet.", c(e, "class", "muted svelte-l1q7u6");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function Yn(x) {
        let e;
        function t(s, l) {
          return s[8].labVerified ? dc : fc;
        }
        let n = t(x), o = n(x);
        return {
          c() {
            e = d("div"), o.c(), c(e, "class", "alert-message svelte-l1q7u6");
          },
          m(s, l) {
            T(s, e, l), o.m(e, null);
          },
          p(s, l) {
            n === (n = t(s)) && o ? o.p(s, l) : (o.d(1), o = n(s), o && (o.c(), o.m(e, null)));
          },
          d(s) {
            s && P(e), o.d();
          }
        };
      }
      function fc(x) {
        let e, t = x[8].diseases.map(x[5]).join(", ") + "", n, o;
        return {
          c() {
            e = z("Someone you've interacted with reported testing positive for "), n = z(t), o = z(".");
          },
          m(s, l) {
            T(s, e, l), T(s, n, l), T(s, o, l);
          },
          p(s, l) {
            l & 1 && t !== (t = s[8].diseases.map(s[5]).join(", ") + "") && V(n, t);
          },
          d(s) {
            s && (P(e), P(n), P(o));
          }
        };
      }
      function dc(x) {
        let e, t = x[8].diseases.map(x[4]).join(", ") + "", n, o;
        return {
          c() {
            e = z("Someone you've interacted with has tested positive for "), n = z(t), o = z(".");
          },
          m(s, l) {
            T(s, e, l), T(s, n, l), T(s, o, l);
          },
          p(s, l) {
            l & 1 && t !== (t = s[8].diseases.map(s[4]).join(", ") + "") && V(n, t);
          },
          d(s) {
            s && (P(e), P(n), P(o));
          }
        };
      }
      function Kn(x) {
        let e;
        return {
          c() {
            e = d("div"), e.textContent = "This result is self-reported.", c(e, "class", "unverified-note svelte-l1q7u6");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Wn(x) {
        let e, t, n;
        function o() {
          return x[7](x[9]);
        }
        return {
          c() {
            e = d("button"), e.textContent = "Mark viewed", c(e, "class", "btn-text svelte-l1q7u6");
          },
          m(s, l) {
            T(s, e, l), t || (n = O(e, "click", o), t = true);
          },
          p(s, l) {
            x = s;
          },
          d(s) {
            s && P(e), t = false, n();
          }
        };
      }
      function Qn(x) {
        let e, t, n, o, s = x[8].labVerified ? "warning_amber" : "info_outline", l, r, a, u, f, E, C, B, A, F = Jn(x[8].testDate) + "", m, h, v, b, _, D, p = (x[8].diseases.length > 0 ? x[8].diseases.map(x[6]).join(", ") : "the relevant STI") + "", k, w, y, S, M = x[8].diseases.length > 0 && Yn(x), I = !x[8].labVerified && Kn(), L = !x[8].viewed && Wn(x);
        return {
          c() {
            e = d("li"), t = d("div"), n = d("div"), o = d("span"), l = z(s), r = g(), a = d("div"), u = d("div"), u.textContent = "Health alert", f = g(), M && M.c(), E = g(), C = d("div"), B = z("Their sample was taken around "), A = d("strong"), m = z(F), h = z("."), v = g(), I && I.c(), b = g(), _ = d("div"), D = z("Get tested for "), k = z(p), w = z(". Ask for a full STI panel."), y = g(), L && L.c(), S = g(), c(o, "class", "material-icons alert-icon svelte-l1q7u6"), e0(o, "verified", x[8].labVerified), e0(o, "unverified", !x[8].labVerified), c(u, "class", "alert-title svelte-l1q7u6"), e0(u, "verified", x[8].labVerified), e0(u, "unverified", !x[8].labVerified), c(C, "class", "alert-dates svelte-l1q7u6"), c(_, "class", "get-tested svelte-l1q7u6"), c(n, "class", "alert-meta svelte-l1q7u6"), c(t, "class", "alert-body svelte-l1q7u6"), c(e, "class", "svelte-l1q7u6"), e0(e, "unviewed", !x[8].viewed);
          },
          m(N, q) {
            T(N, e, q), i(e, t), i(t, n), i(n, o), i(o, l), i(n, r), i(n, a), i(a, u), i(a, f), M && M.m(a, null), i(a, E), i(a, C), i(C, B), i(C, A), i(A, m), i(C, h), i(a, v), I && I.m(a, null), i(a, b), i(a, _), i(_, D), i(_, k), i(_, w), i(t, y), L && L.m(t, null), i(e, S);
          },
          p(N, q) {
            q & 1 && s !== (s = N[8].labVerified ? "warning_amber" : "info_outline") && V(l, s), q & 1 && e0(o, "verified", N[8].labVerified), q & 1 && e0(o, "unverified", !N[8].labVerified), q & 1 && e0(u, "verified", N[8].labVerified), q & 1 && e0(u, "unverified", !N[8].labVerified), N[8].diseases.length > 0 ? M ? M.p(N, q) : (M = Yn(N), M.c(), M.m(a, E)) : M && (M.d(1), M = null), q & 1 && F !== (F = Jn(N[8].testDate) + "") && V(m, F), N[8].labVerified ? I && (I.d(1), I = null) : I || (I = Kn(), I.c(), I.m(a, b)), q & 1 && p !== (p = (N[8].diseases.length > 0 ? N[8].diseases.map(N[6]).join(", ") : "the relevant STI") + "") && V(k, p), N[8].viewed ? L && (L.d(1), L = null) : L ? L.p(N, q) : (L = Wn(N), L.c(), L.m(t, null)), q & 1 && e0(e, "unviewed", !N[8].viewed);
          },
          d(N) {
            N && P(e), M && M.d(), I && I.d(), L && L.d();
          }
        };
      }
      function Ec(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C = x[1] ? "hourglass_empty" : "refresh", B, A, F = x[1] ? "Checking\u2026" : "Check now", m, h, v, b, _, D, p;
        e = new ne({});
        function k(S, M) {
          return S[0].length === 0 && !S[1] ? uc : cc;
        }
        let w = k(x), y = w(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), o = d("div"), o.innerHTML = '<h1 class="svelte-l1q7u6">Alerts</h1>', s = g(), l = d("section"), r = d("div"), a = d("h2"), a.textContent = "Notification history", u = g(), f = d("button"), E = d("span"), B = z(C), A = g(), m = z(F), h = g(), y.c(), v = g(), b = d("p"), b.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, c(o, "class", "page-header svelte-l1q7u6"), c(a, "class", "svelte-l1q7u6"), c(E, "class", "material-icons svelte-l1q7u6"), c(f, "class", "btn-refresh svelte-l1q7u6"), f.disabled = x[1], c(r, "class", "card-header svelte-l1q7u6"), c(l, "class", "card svelte-l1q7u6"), c(b, "class", "privacy-note svelte-l1q7u6"), c(n, "class", "svelte-l1q7u6");
          },
          m(S, M) {
            b0(e, S, M), T(S, t, M), T(S, n, M), i(n, o), i(n, s), i(n, l), i(l, r), i(r, a), i(r, u), i(r, f), i(f, E), i(E, B), i(f, A), i(f, m), i(l, h), y.m(l, null), i(n, v), i(n, b), _ = true, D || (p = O(f, "click", x[2]), D = true);
          },
          p(S, [M]) {
            (!_ || M & 2) && C !== (C = S[1] ? "hourglass_empty" : "refresh") && V(B, C), (!_ || M & 2) && F !== (F = S[1] ? "Checking\u2026" : "Check now") && V(m, F), (!_ || M & 2) && (f.disabled = S[1]), w === (w = k(S)) && y ? y.p(S, M) : (y.d(1), y = w(S), y && (y.c(), y.m(l, null)));
          },
          i(S) {
            _ || (d0(e.$$.fragment, S), _ = true);
          },
          o(S) {
            C0(e.$$.fragment, S), _ = false;
          },
          d(S) {
            S && (P(t), P(n)), g0(e, S), y.d(), D = false, p();
          }
        };
      }
      function Jn(x) {
        return x ? (/* @__PURE__ */ new Date(x + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Bc(x, e, t) {
        let n = [], o = false;
        z0(() => {
          if (!G0()) {
            Wa("/alerts"), i0("/login");
            return;
          }
          t(0, n = ex());
        });
        async function s() {
          t(1, o = true);
          try {
            await Ns();
          } catch {
          } finally {
            t(0, n = ex()), t(1, o = false);
          }
        }
        async function l(E) {
          await La(E), t(0, n = ex());
        }
        return [
          n,
          o,
          s,
          l,
          (E) => Ke[E] ?? E,
          (E) => Ke[E] ?? E,
          (E) => Ke[E] ?? E,
          (E) => l(E)
        ];
      }
      class Cc extends D0 {
        constructor(e) {
          super(), p0(this, e, Bc, Ec, A0, {});
        }
      }
      var Ac = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function Fc(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
      }
      var ve = {}, pc = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
      }, zs = {}, W0 = {};
      let Nx;
      const Dc = [
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
      W0.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17;
      };
      W0.getSymbolTotalCodewords = function(e) {
        return Dc[e];
      };
      W0.getBCHDigit = function(x) {
        let e = 0;
        for (; x !== 0; ) e++, x >>>= 1;
        return e;
      };
      W0.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        Nx = e;
      };
      W0.isKanjiModeEnabled = function() {
        return typeof Nx < "u";
      };
      W0.toSJIS = function(e) {
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
      function qs() {
        this.buffer = [], this.length = 0;
      }
      qs.prototype = {
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
      var mc = qs;
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
      var hc = ot, Rs = {};
      (function(x) {
        const e = W0.getSymbolSize;
        x.getRowColCoords = function(n) {
          if (n === 1) return [];
          const o = Math.floor(n / 7) + 2, s = e(n), l = s === 145 ? 26 : Math.ceil((s - 13) / (2 * o - 2)) * 2, r = [
            s - 7
          ];
          for (let a = 1; a < o - 1; a++) r[a] = r[a - 1] - l;
          return r.push(6), r.reverse();
        }, x.getPositions = function(n) {
          const o = [], s = x.getRowColCoords(n), l = s.length;
          for (let r = 0; r < l; r++) for (let a = 0; a < l; a++) r === 0 && a === 0 || r === 0 && a === l - 1 || r === l - 1 && a === 0 || o.push([
            s[r],
            s[a]
          ]);
          return o;
        };
      })(Rs);
      var js = {};
      const vc = W0.getSymbolSize, Xn = 7;
      js.getPositions = function(e) {
        const t = vc(e);
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
      var Hs = {};
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
          const s = o.size;
          let l = 0, r = 0, a = 0, u = null, f = null;
          for (let E = 0; E < s; E++) {
            r = a = 0, u = f = null;
            for (let C = 0; C < s; C++) {
              let B = o.get(E, C);
              B === u ? r++ : (r >= 5 && (l += e.N1 + (r - 5)), u = B, r = 1), B = o.get(C, E), B === f ? a++ : (a >= 5 && (l += e.N1 + (a - 5)), f = B, a = 1);
            }
            r >= 5 && (l += e.N1 + (r - 5)), a >= 5 && (l += e.N1 + (a - 5));
          }
          return l;
        }, x.getPenaltyN2 = function(o) {
          const s = o.size;
          let l = 0;
          for (let r = 0; r < s - 1; r++) for (let a = 0; a < s - 1; a++) {
            const u = o.get(r, a) + o.get(r, a + 1) + o.get(r + 1, a) + o.get(r + 1, a + 1);
            (u === 4 || u === 0) && l++;
          }
          return l * e.N2;
        }, x.getPenaltyN3 = function(o) {
          const s = o.size;
          let l = 0, r = 0, a = 0;
          for (let u = 0; u < s; u++) {
            r = a = 0;
            for (let f = 0; f < s; f++) r = r << 1 & 2047 | o.get(u, f), f >= 10 && (r === 1488 || r === 93) && l++, a = a << 1 & 2047 | o.get(f, u), f >= 10 && (a === 1488 || a === 93) && l++;
          }
          return l * e.N3;
        }, x.getPenaltyN4 = function(o) {
          let s = 0;
          const l = o.data.length;
          for (let a = 0; a < l; a++) s += o.data[a];
          return Math.abs(Math.ceil(s * 100 / l / 5) - 10) * e.N4;
        };
        function t(n, o, s) {
          switch (n) {
            case x.Patterns.PATTERN000:
              return (o + s) % 2 === 0;
            case x.Patterns.PATTERN001:
              return o % 2 === 0;
            case x.Patterns.PATTERN010:
              return s % 3 === 0;
            case x.Patterns.PATTERN011:
              return (o + s) % 3 === 0;
            case x.Patterns.PATTERN100:
              return (Math.floor(o / 2) + Math.floor(s / 3)) % 2 === 0;
            case x.Patterns.PATTERN101:
              return o * s % 2 + o * s % 3 === 0;
            case x.Patterns.PATTERN110:
              return (o * s % 2 + o * s % 3) % 2 === 0;
            case x.Patterns.PATTERN111:
              return (o * s % 3 + (o + s) % 2) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + n);
          }
        }
        x.applyMask = function(o, s) {
          const l = s.size;
          for (let r = 0; r < l; r++) for (let a = 0; a < l; a++) s.isReserved(a, r) || s.xor(a, r, t(o, a, r));
        }, x.getBestMask = function(o, s) {
          const l = Object.keys(x.Patterns).length;
          let r = 0, a = 1 / 0;
          for (let u = 0; u < l; u++) {
            s(u), x.applyMask(u, o);
            const f = x.getPenaltyN1(o) + x.getPenaltyN2(o) + x.getPenaltyN3(o) + x.getPenaltyN4(o);
            x.applyMask(u, o), f < a && (a = f, r = u);
          }
          return r;
        };
      })(Hs);
      var Yt = {};
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
      Yt.getBlocksCount = function(e, t) {
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
      Yt.getTotalCodewordsCount = function(e, t) {
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
      var Os = {}, Kt = {};
      const We = new Uint8Array(512), Lt = new Uint8Array(256);
      (function() {
        let e = 1;
        for (let t = 0; t < 255; t++) We[t] = e, Lt[e] = t, e <<= 1, e & 256 && (e ^= 285);
        for (let t = 255; t < 512; t++) We[t] = We[t - 255];
      })();
      Kt.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return Lt[e];
      };
      Kt.exp = function(e) {
        return We[e];
      };
      Kt.mul = function(e, t) {
        return e === 0 || t === 0 ? 0 : We[Lt[e] + Lt[t]];
      };
      (function(x) {
        const e = Kt;
        x.mul = function(n, o) {
          const s = new Uint8Array(n.length + o.length - 1);
          for (let l = 0; l < n.length; l++) for (let r = 0; r < o.length; r++) s[l + r] ^= e.mul(n[l], o[r]);
          return s;
        }, x.mod = function(n, o) {
          let s = new Uint8Array(n);
          for (; s.length - o.length >= 0; ) {
            const l = s[0];
            for (let a = 0; a < o.length; a++) s[a] ^= e.mul(o[a], l);
            let r = 0;
            for (; r < s.length && s[r] === 0; ) r++;
            s = s.slice(r);
          }
          return s;
        }, x.generateECPolynomial = function(n) {
          let o = new Uint8Array([
            1
          ]);
          for (let s = 0; s < n; s++) o = x.mul(o, new Uint8Array([
            1,
            e.exp(s)
          ]));
          return o;
        };
      })(Os);
      const Us = Os;
      function zx(x) {
        this.genPoly = void 0, this.degree = x, this.degree && this.initialize(this.degree);
      }
      zx.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = Us.generateECPolynomial(this.degree);
      };
      zx.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const t = new Uint8Array(e.length + this.degree);
        t.set(e);
        const n = Us.mod(t, this.genPoly), o = this.degree - n.length;
        if (o > 0) {
          const s = new Uint8Array(this.degree);
          return s.set(n, o), s;
        }
        return n;
      };
      var _c = zx, Vs = {}, de = {}, qx = {};
      qx.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
      var oe = {};
      const Gs = "[0-9]+", kc = "[A-Z $%*+\\-./:]+";
      let Ze = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      Ze = Ze.replace(/u/g, "\\u");
      const bc = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Ze + `)(?:.|[\r
]))+`;
      oe.KANJI = new RegExp(Ze, "g");
      oe.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      oe.BYTE = new RegExp(bc, "g");
      oe.NUMERIC = new RegExp(Gs, "g");
      oe.ALPHANUMERIC = new RegExp(kc, "g");
      const gc = new RegExp("^" + Ze + "$"), wc = new RegExp("^" + Gs + "$"), yc = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      oe.testKanji = function(e) {
        return gc.test(e);
      };
      oe.testNumeric = function(e) {
        return wc.test(e);
      };
      oe.testAlphanumeric = function(e) {
        return yc.test(e);
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
        }, x.getCharCountIndicator = function(s, l) {
          if (!s.ccBits) throw new Error("Invalid mode: " + s);
          if (!e.isValid(l)) throw new Error("Invalid version: " + l);
          return l >= 1 && l < 10 ? s.ccBits[0] : l < 27 ? s.ccBits[1] : s.ccBits[2];
        }, x.getBestModeForData = function(s) {
          return t.testNumeric(s) ? x.NUMERIC : t.testAlphanumeric(s) ? x.ALPHANUMERIC : t.testKanji(s) ? x.KANJI : x.BYTE;
        }, x.toString = function(s) {
          if (s && s.id) return s.id;
          throw new Error("Invalid mode");
        }, x.isValid = function(s) {
          return s && s.bit && s.ccBits;
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
        x.from = function(s, l) {
          if (x.isValid(s)) return s;
          try {
            return n(s);
          } catch {
            return l;
          }
        };
      })(de);
      (function(x) {
        const e = W0, t = Yt, n = Gt, o = de, s = qx, l = 7973, r = e.getBCHDigit(l);
        function a(C, B, A) {
          for (let F = 1; F <= 40; F++) if (B <= x.getCapacity(F, A, C)) return F;
        }
        function u(C, B) {
          return o.getCharCountIndicator(C, B) + 4;
        }
        function f(C, B) {
          let A = 0;
          return C.forEach(function(F) {
            const m = u(F.mode, B);
            A += m + F.getBitsLength();
          }), A;
        }
        function E(C, B) {
          for (let A = 1; A <= 40; A++) if (f(C, A) <= x.getCapacity(A, B, o.MIXED)) return A;
        }
        x.from = function(B, A) {
          return s.isValid(B) ? parseInt(B, 10) : A;
        }, x.getCapacity = function(B, A, F) {
          if (!s.isValid(B)) throw new Error("Invalid QR Code version");
          typeof F > "u" && (F = o.BYTE);
          const m = e.getSymbolTotalCodewords(B), h = t.getTotalCodewordsCount(B, A), v = (m - h) * 8;
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
          const m = n.from(A, n.M);
          if (Array.isArray(B)) {
            if (B.length > 1) return E(B, m);
            if (B.length === 0) return 1;
            F = B[0];
          } else F = B;
          return a(F.mode, F.getLength(), m);
        }, x.getEncodedBits = function(B) {
          if (!s.isValid(B) || B < 7) throw new Error("Invalid QR Code version");
          let A = B << 12;
          for (; e.getBCHDigit(A) - r >= 0; ) A ^= l << e.getBCHDigit(A) - r;
          return B << 12 | A;
        };
      })(Vs);
      var Ys = {};
      const Ax = W0, Ks = 1335, Pc = 21522, Zn = Ax.getBCHDigit(Ks);
      Ys.getEncodedBits = function(e, t) {
        const n = e.bit << 3 | t;
        let o = n << 10;
        for (; Ax.getBCHDigit(o) - Zn >= 0; ) o ^= Ks << Ax.getBCHDigit(o) - Zn;
        return (n << 10 | o) ^ Pc;
      };
      var Ws = {};
      const Tc = de;
      function Me(x) {
        this.mode = Tc.NUMERIC, this.data = x.toString();
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
        const s = this.data.length - t;
        s > 0 && (n = this.data.substr(t), o = parseInt(n, 10), e.put(o, s * 3 + 1));
      };
      var Sc = Me;
      const Ic = de, xx = [
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
        this.mode = Ic.ALPHANUMERIC, this.data = x;
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
      var Mc = Le;
      const Lc = de;
      function Ne(x) {
        this.mode = Lc.BYTE, typeof x == "string" ? this.data = new TextEncoder().encode(x) : this.data = new Uint8Array(x);
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
      var Nc = Ne;
      const zc = de, qc = W0;
      function ze(x) {
        this.mode = zc.KANJI, this.data = x;
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
          let t = qc.toSJIS(this.data[e]);
          if (t >= 33088 && t <= 40956) t -= 33088;
          else if (t >= 57408 && t <= 60351) t -= 49472;
          else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
          t = (t >>> 8 & 255) * 192 + (t & 255), x.put(t, 13);
        }
      };
      var Rc = ze, Qs = {
        exports: {}
      };
      (function(x) {
        var e = {
          single_source_shortest_paths: function(t, n, o) {
            var s = {}, l = {};
            l[n] = 0;
            var r = e.PriorityQueue.make();
            r.push(n, 0);
            for (var a, u, f, E, C, B, A, F, m; !r.empty(); ) {
              a = r.pop(), u = a.value, E = a.cost, C = t[u] || {};
              for (f in C) C.hasOwnProperty(f) && (B = C[f], A = E + B, F = l[f], m = typeof l[f] > "u", (m || F > A) && (l[f] = A, r.push(f, A), s[f] = u));
            }
            if (typeof o < "u" && typeof l[o] > "u") {
              var h = [
                "Could not find a path from ",
                n,
                " to ",
                o,
                "."
              ].join("");
              throw new Error(h);
            }
            return s;
          },
          extract_shortest_path_from_predecessor_list: function(t, n) {
            for (var o = [], s = n; s; ) o.push(s), t[s], s = t[s];
            return o.reverse(), o;
          },
          find_path: function(t, n, o) {
            var s = e.single_source_shortest_paths(t, n, o);
            return e.extract_shortest_path_from_predecessor_list(s, o);
          },
          PriorityQueue: {
            make: function(t) {
              var n = e.PriorityQueue, o = {}, s;
              t = t || {};
              for (s in n) n.hasOwnProperty(s) && (o[s] = n[s]);
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
      })(Qs);
      var jc = Qs.exports;
      (function(x) {
        const e = de, t = Sc, n = Mc, o = Nc, s = Rc, l = oe, r = W0, a = jc;
        function u(h) {
          return unescape(encodeURIComponent(h)).length;
        }
        function f(h, v, b) {
          const _ = [];
          let D;
          for (; (D = h.exec(b)) !== null; ) _.push({
            data: D[0],
            index: D.index,
            mode: v,
            length: D[0].length
          });
          return _;
        }
        function E(h) {
          const v = f(l.NUMERIC, e.NUMERIC, h), b = f(l.ALPHANUMERIC, e.ALPHANUMERIC, h);
          let _, D;
          return r.isKanjiModeEnabled() ? (_ = f(l.BYTE, e.BYTE, h), D = f(l.KANJI, e.KANJI, h)) : (_ = f(l.BYTE_KANJI, e.BYTE, h), D = []), v.concat(b, _, D).sort(function(k, w) {
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
              return s.getBitsLength(h);
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
          let D = [
            "start"
          ];
          for (let p = 0; p < h.length; p++) {
            const k = h[p], w = [];
            for (let y = 0; y < k.length; y++) {
              const S = k[y], M = "" + p + y;
              w.push(M), b[M] = {
                node: S,
                lastCount: 0
              }, _[M] = {};
              for (let I = 0; I < D.length; I++) {
                const L = D[I];
                b[L] && b[L].node.mode === S.mode ? (_[L][M] = C(b[L].lastCount + S.length, S.mode) - C(b[L].lastCount, S.mode), b[L].lastCount += S.length) : (b[L] && (b[L].lastCount = S.length), _[L][M] = C(S.length, S.mode) + 4 + e.getCharCountIndicator(S.mode, v));
              }
            }
            D = w;
          }
          for (let p = 0; p < D.length; p++) _[D[p]].end = 0;
          return {
            map: _,
            table: b
          };
        }
        function m(h, v) {
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
              return new s(h);
            case e.BYTE:
              return new o(h);
          }
        }
        x.fromArray = function(v) {
          return v.reduce(function(b, _) {
            return typeof _ == "string" ? b.push(m(_, null)) : _.data && b.push(m(_.data, _.mode)), b;
          }, []);
        }, x.fromString = function(v, b) {
          const _ = E(v, r.isKanjiModeEnabled()), D = A(_), p = F(D, b), k = a.find_path(p.map, "start", "end"), w = [];
          for (let y = 1; y < k.length - 1; y++) w.push(p.table[k[y]].node);
          return x.fromArray(B(w));
        }, x.rawSplit = function(v) {
          return x.fromArray(E(v, r.isKanjiModeEnabled()));
        };
      })(Ws);
      const Wt = W0, nx = Gt, Hc = mc, Oc = hc, Uc = Rs, Vc = js, Fx = Hs, px = Yt, Gc = _c, Nt = Vs, Yc = Ys, Kc = de, ox = Ws;
      function Wc(x, e) {
        const t = x.size, n = Vc.getPositions(e);
        for (let o = 0; o < n.length; o++) {
          const s = n[o][0], l = n[o][1];
          for (let r = -1; r <= 7; r++) if (!(s + r <= -1 || t <= s + r)) for (let a = -1; a <= 7; a++) l + a <= -1 || t <= l + a || (r >= 0 && r <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && a >= 2 && a <= 4 ? x.set(s + r, l + a, true, true) : x.set(s + r, l + a, false, true));
        }
      }
      function Qc(x) {
        const e = x.size;
        for (let t = 8; t < e - 8; t++) {
          const n = t % 2 === 0;
          x.set(t, 6, n, true), x.set(6, t, n, true);
        }
      }
      function Jc(x, e) {
        const t = Uc.getPositions(e);
        for (let n = 0; n < t.length; n++) {
          const o = t[n][0], s = t[n][1];
          for (let l = -2; l <= 2; l++) for (let r = -2; r <= 2; r++) l === -2 || l === 2 || r === -2 || r === 2 || l === 0 && r === 0 ? x.set(o + l, s + r, true, true) : x.set(o + l, s + r, false, true);
        }
      }
      function Xc(x, e) {
        const t = x.size, n = Nt.getEncodedBits(e);
        let o, s, l;
        for (let r = 0; r < 18; r++) o = Math.floor(r / 3), s = r % 3 + t - 8 - 3, l = (n >> r & 1) === 1, x.set(o, s, l, true), x.set(s, o, l, true);
      }
      function sx(x, e, t) {
        const n = x.size, o = Yc.getEncodedBits(e, t);
        let s, l;
        for (s = 0; s < 15; s++) l = (o >> s & 1) === 1, s < 6 ? x.set(s, 8, l, true) : s < 8 ? x.set(s + 1, 8, l, true) : x.set(n - 15 + s, 8, l, true), s < 8 ? x.set(8, n - s - 1, l, true) : s < 9 ? x.set(8, 15 - s - 1 + 1, l, true) : x.set(8, 15 - s - 1, l, true);
        x.set(n - 8, 8, 1, true);
      }
      function Zc(x, e) {
        const t = x.size;
        let n = -1, o = t - 1, s = 7, l = 0;
        for (let r = t - 1; r > 0; r -= 2) for (r === 6 && r--; ; ) {
          for (let a = 0; a < 2; a++) if (!x.isReserved(o, r - a)) {
            let u = false;
            l < e.length && (u = (e[l] >>> s & 1) === 1), x.set(o, r - a, u), s--, s === -1 && (l++, s = 7);
          }
          if (o += n, o < 0 || t <= o) {
            o -= n, n = -n;
            break;
          }
        }
      }
      function $c(x, e, t) {
        const n = new Hc();
        t.forEach(function(a) {
          n.put(a.mode.bit, 4), n.put(a.getLength(), Kc.getCharCountIndicator(a.mode, x)), a.write(n);
        });
        const o = Wt.getSymbolTotalCodewords(x), s = px.getTotalCodewordsCount(x, e), l = (o - s) * 8;
        for (n.getLengthInBits() + 4 <= l && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
        const r = (l - n.getLengthInBits()) / 8;
        for (let a = 0; a < r; a++) n.put(a % 2 ? 17 : 236, 8);
        return e9(n, x, e);
      }
      function e9(x, e, t) {
        const n = Wt.getSymbolTotalCodewords(e), o = px.getTotalCodewordsCount(e, t), s = n - o, l = px.getBlocksCount(e, t), r = n % l, a = l - r, u = Math.floor(n / l), f = Math.floor(s / l), E = f + 1, C = u - f, B = new Gc(C);
        let A = 0;
        const F = new Array(l), m = new Array(l);
        let h = 0;
        const v = new Uint8Array(x.buffer);
        for (let k = 0; k < l; k++) {
          const w = k < a ? f : E;
          F[k] = v.slice(A, A + w), m[k] = B.encode(F[k]), A += w, h = Math.max(h, w);
        }
        const b = new Uint8Array(n);
        let _ = 0, D, p;
        for (D = 0; D < h; D++) for (p = 0; p < l; p++) D < F[p].length && (b[_++] = F[p][D]);
        for (D = 0; D < C; D++) for (p = 0; p < l; p++) b[_++] = m[p][D];
        return b;
      }
      function t9(x, e, t, n) {
        let o;
        if (Array.isArray(x)) o = ox.fromArray(x);
        else if (typeof x == "string") {
          let u = e;
          if (!u) {
            const f = ox.rawSplit(x);
            u = Nt.getBestVersionForData(f, t);
          }
          o = ox.fromString(x, u || 40);
        } else throw new Error("Invalid data");
        const s = Nt.getBestVersionForData(o, t);
        if (!s) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = s;
        else if (e < s) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`);
        const l = $c(e, t, o), r = Wt.getSymbolSize(e), a = new Oc(r);
        return Wc(a, e), Qc(a), Jc(a, e), sx(a, t, 0), e >= 7 && Xc(a, e), Zc(a, l), isNaN(n) && (n = Fx.getBestMask(a, sx.bind(null, a, t))), Fx.applyMask(n, a), sx(a, t, n), {
          modules: a,
          version: e,
          errorCorrectionLevel: t,
          maskPattern: n,
          segments: o
        };
      }
      zs.create = function(e, t) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let n = nx.M, o, s;
        return typeof t < "u" && (n = nx.from(t.errorCorrectionLevel, nx.M), o = Nt.from(t.version), s = Fx.from(t.maskPattern), t.toSJISFunc && Wt.setToSJISFunction(t.toSJISFunc)), t9(e, o, n, s);
      };
      var Js = {}, Rx = {};
      (function(x) {
        function e(t) {
          if (typeof t == "number" && (t = t.toString()), typeof t != "string") throw new Error("Color should be defined as hex string");
          let n = t.slice().replace("#", "").split("");
          if (n.length < 3 || n.length === 5 || n.length > 8) throw new Error("Invalid hex color: " + t);
          (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(s) {
            return [
              s,
              s
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
          const o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, s = n.width && n.width >= 21 ? n.width : void 0, l = n.scale || 4;
          return {
            width: s,
            scale: s ? 4 : l,
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
          const s = x.getScale(n, o);
          return Math.floor((n + o.margin * 2) * s);
        }, x.qrToImageData = function(n, o, s) {
          const l = o.modules.size, r = o.modules.data, a = x.getScale(l, s), u = Math.floor((l + s.margin * 2) * a), f = s.margin * a, E = [
            s.color.light,
            s.color.dark
          ];
          for (let C = 0; C < u; C++) for (let B = 0; B < u; B++) {
            let A = (C * u + B) * 4, F = s.color.light;
            if (C >= f && B >= f && C < u - f && B < u - f) {
              const m = Math.floor((C - f) / a), h = Math.floor((B - f) / a);
              F = E[r[m * l + h] ? 1 : 0];
            }
            n[A++] = F.r, n[A++] = F.g, n[A++] = F.b, n[A] = F.a;
          }
        };
      })(Rx);
      (function(x) {
        const e = Rx;
        function t(o, s, l) {
          o.clearRect(0, 0, s.width, s.height), s.style || (s.style = {}), s.height = l, s.width = l, s.style.height = l + "px", s.style.width = l + "px";
        }
        function n() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        x.render = function(s, l, r) {
          let a = r, u = l;
          typeof a > "u" && (!l || !l.getContext) && (a = l, l = void 0), l || (u = n()), a = e.getOptions(a);
          const f = e.getImageWidth(s.modules.size, a), E = u.getContext("2d"), C = E.createImageData(f, f);
          return e.qrToImageData(C.data, s, a), t(E, u, f), E.putImageData(C, 0, 0), u;
        }, x.renderToDataURL = function(s, l, r) {
          let a = r;
          typeof a > "u" && (!l || !l.getContext) && (a = l, l = void 0), a || (a = {});
          const u = x.render(s, l, a), f = a.type || "image/png", E = a.rendererOpts || {};
          return u.toDataURL(f, E.quality);
        };
      })(Js);
      var Xs = {};
      const x9 = Rx;
      function $n(x, e) {
        const t = x.a / 255, n = e + '="' + x.hex + '"';
        return t < 1 ? n + " " + e + '-opacity="' + t.toFixed(2).slice(1) + '"' : n;
      }
      function lx(x, e, t) {
        let n = x + e;
        return typeof t < "u" && (n += " " + t), n;
      }
      function n9(x, e, t) {
        let n = "", o = 0, s = false, l = 0;
        for (let r = 0; r < x.length; r++) {
          const a = Math.floor(r % e), u = Math.floor(r / e);
          !a && !s && (s = true), x[r] ? (l++, r > 0 && a > 0 && x[r - 1] || (n += s ? lx("M", a + t, 0.5 + u + t) : lx("m", o, 0), o = 0, s = false), a + 1 < e && x[r + 1] || (n += lx("h", l), l = 0)) : o++;
        }
        return n;
      }
      Xs.render = function(e, t, n) {
        const o = x9.getOptions(t), s = e.modules.size, l = e.modules.data, r = s + o.margin * 2, a = o.color.light.a ? "<path " + $n(o.color.light, "fill") + ' d="M0 0h' + r + "v" + r + 'H0z"/>' : "", u = "<path " + $n(o.color.dark, "stroke") + ' d="' + n9(l, s, o.margin) + '"/>', f = 'viewBox="0 0 ' + r + " " + r + '"', C = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + a + u + `</svg>
`;
        return typeof n == "function" && n(null, C), C;
      };
      const o9 = pc, Dx = zs, Zs = Js, s9 = Xs;
      function jx(x, e, t, n, o) {
        const s = [].slice.call(arguments, 1), l = s.length, r = typeof s[l - 1] == "function";
        if (!r && !o9()) throw new Error("Callback required as last argument");
        if (r) {
          if (l < 2) throw new Error("Too few arguments provided");
          l === 2 ? (o = t, t = e, e = n = void 0) : l === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = t, t = e, e = void 0));
        } else {
          if (l < 1) throw new Error("Too few arguments provided");
          return l === 1 ? (t = e, e = n = void 0) : l === 2 && !e.getContext && (n = t, t = e, e = void 0), new Promise(function(a, u) {
            try {
              const f = Dx.create(t, n);
              a(x(f, e, n));
            } catch (f) {
              u(f);
            }
          });
        }
        try {
          const a = Dx.create(t, n);
          o(null, x(a, e, n));
        } catch (a) {
          o(a);
        }
      }
      ve.create = Dx.create;
      ve.toCanvas = jx.bind(null, Zs.render);
      ve.toDataURL = jx.bind(null, Zs.renderToDataURL);
      ve.toString = jx.bind(null, function(x, e, t) {
        return s9.render(x, t);
      });
      function l9(x) {
        let e, t, n, o, s, l, r, a = x[0].isHost ? "You started this group" : "Group encounter", u, f, E, C = so(x[0].date) + "", B, A, F, m, h = x[0].isHost && x[13](), v, b, _, D, p, k, w, y, S, M, I = x[3] && eo(x), L = x[10] && to(x);
        function N(U, J) {
          return U[5] ? i9 : a9;
        }
        let q = N(x), R = q(x), j = h && no(x), H = x[8] && oo(x);
        function Q(U, J) {
          return U[4] ? d9 : f9;
        }
        let K = Q(x), G = K(x);
        return {
          c() {
            I && I.c(), e = g(), L && L.c(), t = g(), n = d("section"), o = d("div"), s = d("span"), s.textContent = "groups", l = g(), r = d("span"), u = z(a), f = g(), E = d("p"), B = z(C), A = g(), F = d("section"), R.c(), m = g(), j && j.c(), v = g(), b = d("section"), _ = d("div"), _.innerHTML = '<span class="material-icons privacy-icon svelte-atconr">lock_outline</span> <p class="privacy-text svelte-atconr">Your note is stored encrypted and never shared.</p>', D = g(), p = d("textarea"), k = g(), H && H.c(), w = g(), y = d("section"), G.c(), c(s, "class", "material-icons status-icon svelte-atconr"), c(r, "class", "status-label svelte-atconr"), c(o, "class", "status-row svelte-atconr"), c(E, "class", "date svelte-atconr"), c(n, "class", "card pad svelte-atconr"), c(F, "class", "card svelte-atconr"), c(_, "class", "privacy-row svelte-atconr"), c(p, "placeholder", "Add a private note\u2026"), c(p, "rows", "5"), c(p, "class", "svelte-atconr"), c(b, "class", "card pad svelte-atconr"), c(y, "class", "card svelte-atconr");
          },
          m(U, J) {
            I && I.m(U, J), T(U, e, J), L && L.m(U, J), T(U, t, J), T(U, n, J), i(n, o), i(o, s), i(o, l), i(o, r), i(r, u), i(n, f), i(n, E), i(E, B), T(U, A, J), T(U, F, J), R.m(F, null), T(U, m, J), j && j.m(U, J), T(U, v, J), T(U, b, J), i(b, _), i(b, D), i(b, p), x0(p, x[7]), i(b, k), H && H.m(b, null), T(U, w, J), T(U, y, J), G.m(y, null), S || (M = [
              O(p, "input", x[25]),
              O(p, "input", x[17])
            ], S = true);
          },
          p(U, J) {
            U[3] ? I ? I.p(U, J) : (I = eo(U), I.c(), I.m(e.parentNode, e)) : I && (I.d(1), I = null), U[10] ? L ? L.p(U, J) : (L = to(U), L.c(), L.m(t.parentNode, t)) : L && (L.d(1), L = null), J[0] & 1 && a !== (a = U[0].isHost ? "You started this group" : "Group encounter") && V(u, a), J[0] & 1 && C !== (C = so(U[0].date) + "") && V(B, C), q === (q = N(U)) && R ? R.p(U, J) : (R.d(1), R = q(U), R && (R.c(), R.m(F, null))), J[0] & 1 && (h = U[0].isHost && U[13]()), h ? j ? j.p(U, J) : (j = no(U), j.c(), j.m(v.parentNode, v)) : j && (j.d(1), j = null), J[0] & 128 && x0(p, U[7]), U[8] ? H ? H.p(U, J) : (H = oo(U), H.c(), H.m(b, null)) : H && (H.d(1), H = null), K === (K = Q(U)) && G ? G.p(U, J) : (G.d(1), G = K(U), G && (G.c(), G.m(y, null)));
          },
          d(U) {
            U && (P(e), P(t), P(n), P(A), P(F), P(m), P(v), P(b), P(w), P(y)), I && I.d(U), L && L.d(U), R.d(), j && j.d(U), H && H.d(), G.d(), S = false, s0(M);
          }
        };
      }
      function r9(x) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-atconr">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-atconr">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-atconr");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function eo(x) {
        let e, t, n, o;
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "error_outline", n = g(), o = z(x[3]), c(t, "class", "material-icons svelte-atconr"), c(e, "class", "toast error-toast svelte-atconr");
          },
          m(s, l) {
            T(s, e, l), i(e, t), i(e, n), i(e, o);
          },
          p(s, l) {
            l[0] & 8 && V(o, s[3]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function to(x) {
        let e, t, n, o, s, l, r, a, u, f = x[9] ? "Saving\u2026" : "Save note", E, C, B;
        return {
          c() {
            e = d("section"), t = d("p"), t.textContent = "You have unsaved changes to your note.", n = g(), o = d("div"), s = d("button"), s.textContent = "Keep editing", l = g(), r = d("button"), r.textContent = "Discard", a = g(), u = d("button"), E = z(f), c(t, "class", "confirm-text svelte-atconr"), c(s, "class", "btn-text svelte-atconr"), c(r, "class", "btn-text danger svelte-atconr"), c(u, "class", "btn-filled-sm svelte-atconr"), u.disabled = x[9], c(o, "class", "confirm-actions svelte-atconr"), c(e, "class", "card pad leave-confirm svelte-atconr");
          },
          m(A, F) {
            T(A, e, F), i(e, t), i(e, n), i(e, o), i(o, s), i(o, l), i(o, r), i(o, a), i(o, u), i(u, E), C || (B = [
              O(s, "click", x[23]),
              O(r, "click", x[20]),
              O(u, "click", x[19])
            ], C = true);
          },
          p(A, F) {
            F[0] & 512 && f !== (f = A[9] ? "Saving\u2026" : "Save note") && V(E, f), F[0] & 512 && (u.disabled = A[9]);
          },
          d(A) {
            A && P(e), C = false, s0(B);
          }
        };
      }
      function a9(x) {
        let e, t, n, o, s = (x[0].name ? x[0].name : "Add group name") + "", l, r, a, u, f, E, C = x[0].name && xo();
        return {
          c() {
            e = d("button"), t = d("span"), t.textContent = "edit", n = g(), o = d("span"), l = z(s), r = g(), C && C.c(), a = g(), u = d("span"), u.textContent = "chevron_right", c(t, "class", "material-icons action-icon svelte-atconr"), c(o, "class", "action-label svelte-atconr"), c(u, "class", "material-icons action-chevron svelte-atconr"), c(e, "class", "action-row svelte-atconr");
          },
          m(B, A) {
            T(B, e, A), i(e, t), i(e, n), i(e, o), i(o, l), i(o, r), C && C.m(o, null), i(e, a), i(e, u), f || (E = O(e, "click", x[14]), f = true);
          },
          p(B, A) {
            A[0] & 1 && s !== (s = (B[0].name ? B[0].name : "Add group name") + "") && V(l, s), B[0].name ? C || (C = xo(), C.c(), C.m(o, null)) : C && (C.d(1), C = null);
          },
          d(B) {
            B && P(e), C && C.d(), f = false, E();
          }
        };
      }
      function i9(x) {
        let e, t, n, o, s, l, r, a, u, f, E = x[2] ? "Saving\u2026" : "Save", C, B, A;
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "edit", n = g(), o = d("form"), s = d("input"), l = g(), r = d("div"), a = d("button"), a.textContent = "Cancel", u = g(), f = d("button"), C = z(E), c(t, "class", "material-icons action-icon svelte-atconr"), c(s, "type", "text"), c(s, "placeholder", "Optional group name"), c(s, "maxlength", "64"), s.autofocus = true, c(s, "class", "svelte-atconr"), c(a, "type", "button"), c(a, "class", "btn-text svelte-atconr"), c(f, "type", "submit"), c(f, "class", "btn-filled-sm svelte-atconr"), f.disabled = x[2], c(r, "class", "name-actions svelte-atconr"), c(o, "class", "name-form svelte-atconr"), c(e, "class", "action-row edit-row svelte-atconr");
          },
          m(F, m) {
            T(F, e, m), i(e, t), i(e, n), i(e, o), i(o, s), x0(s, x[6]), i(o, l), i(o, r), i(r, a), i(r, u), i(r, f), i(f, C), s.focus(), B || (A = [
              O(s, "input", x[24]),
              O(a, "click", x[15]),
              O(o, "submit", re(x[16]))
            ], B = true);
          },
          p(F, m) {
            m[0] & 64 && s.value !== F[6] && x0(s, F[6]), m[0] & 4 && E !== (E = F[2] ? "Saving\u2026" : "Save") && V(C, E), m[0] & 4 && (f.disabled = F[2]);
          },
          d(F) {
            F && P(e), B = false, s0(A);
          }
        };
      }
      function xo(x) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Tap to change", c(e, "class", "action-sub svelte-atconr");
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
        let e, t, n, o, s;
        function l(u, f) {
          return u[11] ? u9 : c9;
        }
        let r = l(x), a = r(x);
        return {
          c() {
            e = d("section"), t = d("p"), t.textContent = "Show this QR for others to join", n = g(), a.c(), o = g(), s = d("p"), s.textContent = "Valid for 24 hours from when you created the group.", c(t, "class", "qr-label svelte-atconr"), c(s, "class", "qr-hint svelte-atconr"), c(e, "class", "card pad qr-card svelte-atconr");
          },
          m(u, f) {
            T(u, e, f), i(e, t), i(e, n), a.m(e, null), i(e, o), i(e, s);
          },
          p(u, f) {
            r === (r = l(u)) && a ? a.p(u, f) : (a.d(1), a = r(u), a && (a.c(), a.m(e, o)));
          },
          d(u) {
            u && P(e), a.d();
          }
        };
      }
      function c9(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Generating QR\u2026", c(e, "class", "muted svelte-atconr");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function u9(x) {
        let e;
        return {
          c() {
            e = d("div"), c(e, "class", "qr-wrap svelte-atconr");
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
        let e, t, n = x[9] ? "Saving\u2026" : "Save", o, s, l;
        return {
          c() {
            e = d("div"), t = d("button"), o = z(n), c(t, "class", "btn-filled-sm svelte-atconr"), t.disabled = x[9], c(e, "class", "note-actions svelte-atconr");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(t, o), s || (l = O(t, "click", x[18]), s = true);
          },
          p(r, a) {
            a[0] & 512 && n !== (n = r[9] ? "Saving\u2026" : "Save") && V(o, n), a[0] & 512 && (t.disabled = r[9]);
          },
          d(r) {
            r && P(e), s = false, l();
          }
        };
      }
      function f9(x) {
        let e, t, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-atconr">delete_outline</span> <span class="action-label danger svelte-atconr">Delete group encounter</span>', c(e, "class", "action-row svelte-atconr");
          },
          m(o, s) {
            T(o, e, s), t || (n = O(e, "click", x[27]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function d9(x) {
        let e, t, n, o, s, l, r, a = x[2] ? "Deleting\u2026" : "Delete", u, f, E;
        return {
          c() {
            e = d("div"), t = d("p"), t.textContent = "Delete this group encounter? This cannot be undone.", n = g(), o = d("div"), s = d("button"), s.textContent = "Cancel", l = g(), r = d("button"), u = z(a), c(t, "class", "confirm-text svelte-atconr"), c(s, "class", "btn-text svelte-atconr"), c(r, "class", "btn-danger-sm svelte-atconr"), r.disabled = x[2], c(o, "class", "confirm-actions svelte-atconr"), c(e, "class", "confirm-row svelte-atconr");
          },
          m(C, B) {
            T(C, e, B), i(e, t), i(e, n), i(e, o), i(o, s), i(o, l), i(o, r), i(r, u), f || (E = [
              O(s, "click", x[26]),
              O(r, "click", x[21])
            ], f = true);
          },
          p(C, B) {
            B[0] & 4 && a !== (a = C[2] ? "Deleting\u2026" : "Delete") && V(u, a), B[0] & 4 && (r.disabled = C[2]);
          },
          d(C) {
            C && P(e), f = false, s0(E);
          }
        };
      }
      function E9(x) {
        let e, t, n, o, s, l, r, a = (x[1] ? "Group not found" : x[12]) + "", u, f, E;
        e = new ne({});
        function C(F, m) {
          if (F[1]) return r9;
          if (F[0]) return l9;
        }
        let B = C(x), A = B && B(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), o = d("div"), s = d("a"), s.innerHTML = '<span class="material-icons svelte-atconr">arrow_back</span>', l = g(), r = d("h1"), u = z(a), f = g(), A && A.c(), c(s, "class", "back-btn svelte-atconr"), c(s, "href", "#/encounters"), c(r, "class", "svelte-atconr"), c(o, "class", "page-header svelte-atconr"), c(n, "class", "svelte-atconr");
          },
          m(F, m) {
            b0(e, F, m), T(F, t, m), T(F, n, m), i(n, o), i(o, s), i(o, l), i(o, r), i(r, u), i(n, f), A && A.m(n, null), E = true;
          },
          p(F, m) {
            (!E || m[0] & 4098) && a !== (a = (F[1] ? "Group not found" : F[12]) + "") && V(u, a), B === (B = C(F)) && A ? A.p(F, m) : (A && A.d(1), A = B && B(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            E || (d0(e.$$.fragment, F), E = true);
          },
          o(F) {
            C0(e.$$.fragment, F), E = false;
          },
          d(F) {
            F && (P(t), P(n)), g0(e, F), A && A.d();
          }
        };
      }
      function so(x) {
        return x ? (/* @__PURE__ */ new Date(x + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function B9(x, e, t) {
        let n, { params: o = {} } = e, s = null, l = false, r = false, a = null, u = false, f = false, E = "", C = "", B = false, A = false, F = false, m = null, h = null;
        z0(() => {
          if (!G0()) {
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
        function v(U) {
          B && (U.preventDefault(), U.returnValue = "");
        }
        function b(U) {
          if (!B) return;
          const J = U.target.closest('a[href^="#/"]');
          J && (U.preventDefault(), U.stopImmediatePropagation(), m = J.getAttribute("href").slice(1), t(10, F = true));
        }
        function _() {
          const U = o.tokenHex;
          if (t(0, s = Is().find((J) => t0(J.token) === U) ?? null), !s) {
            t(1, l = true);
            return;
          }
          t(7, C = s.note ?? ""), s.isHost && p() && k();
        }
        function D() {
          return t0(s.token);
        }
        function p() {
          return s ? Math.floor(Date.now() / 1e3) - s.createdAt < 86400 : false;
        }
        async function k() {
          ce();
          const U = Math.floor(Date.now() / 1e3), J = jr(D(), U, t0(s.hostContactId), s.name);
          try {
            t(11, h = await ve.toString(J, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#1a1a1a",
                light: "#ffffff"
              }
            }));
          } catch (Y) {
            t(3, a = "Could not render QR code: " + Y.message);
          }
        }
        function w() {
          t(6, E = s.name ?? ""), t(5, f = true), t(3, a = null);
        }
        function y() {
          t(5, f = false), t(3, a = null);
        }
        async function S() {
          if (!r) {
            t(2, r = true), t(3, a = null);
            try {
              const U = E.trim() || null;
              await tn(D(), {
                name: U
              }), _(), t(5, f = false);
            } catch (U) {
              t(3, a = U.message);
            } finally {
              t(2, r = false);
            }
          }
        }
        function M() {
          t(8, B = C !== (s.note ?? ""));
        }
        async function I() {
          if (!(!B || A)) {
            t(9, A = true), t(3, a = null);
            try {
              const U = C.trim() || null;
              await tn(D(), {
                note: U
              }), _(), t(8, B = false);
            } catch (U) {
              t(3, a = U.message);
            } finally {
              t(9, A = false);
            }
          }
        }
        async function L() {
          await I(), a || q();
        }
        function N() {
          t(7, C = s.note ?? ""), t(8, B = false), q();
        }
        function q() {
          t(10, F = false), i0(m);
        }
        async function R() {
          if (!r) {
            t(2, r = true), t(3, a = null);
            try {
              await Sa(D()), i0("/encounters");
            } catch (U) {
              t(3, a = U.message), t(2, r = false);
            }
          }
        }
        const j = () => t(10, F = false);
        function H() {
          E = this.value, t(6, E);
        }
        function Q() {
          C = this.value, t(7, C);
        }
        const K = () => t(4, u = false), G = () => t(4, u = true);
        return x.$$set = (U) => {
          "params" in U && t(22, o = U.params);
        }, x.$$.update = () => {
          x.$$.dirty[0] & 1 && t(12, n = s?.name || "Group encounter");
        }, [
          s,
          l,
          r,
          a,
          u,
          f,
          E,
          C,
          B,
          A,
          F,
          h,
          n,
          p,
          w,
          y,
          S,
          M,
          I,
          L,
          N,
          R,
          o,
          j,
          H,
          Q,
          K,
          G
        ];
      }
      class C9 extends D0 {
        constructor(e) {
          super(), p0(this, e, B9, E9, A0, {
            params: 22
          }, null, [
            -1,
            -1
          ]);
        }
      }
      async function A9(x) {
        const e = te();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const t = e.encounters.map((f) => ({
          raw_token: t0(f.rawToken),
          date: f.date,
          their_contact_id: t0(f.theirContactId)
        })), n = (e.relationships || []).map((f) => ({
          raw_token: t0(f.rawToken),
          date: f.createdAt,
          their_contact_id: t0(f.theirContactId)
        })), o = (e.results || []).map((f) => {
          const E = {};
          for (const C of xe) E[C] = f.positiveDiseases.includes(C) ? "positive" : "negative";
          return {
            test_date: f.date,
            result_json: JSON.stringify({
              panel: E,
              test_date: f.date,
              submission_type: "self_reported"
            }),
            lab_signature: "",
            user_pubkey: "",
            user_signature: "",
            is_positive: f.positiveDiseases.length > 0 ? 1 : 0,
            submission_type: "self_reported",
            has_notified: f.hasNotified ? 1 : 0,
            note: null
          };
        }), s = new TextEncoder().encode(JSON.stringify({
          version: 1,
          contact_id: t0(e.myContactId),
          encounters: [
            ...t,
            ...n
          ],
          test_results: o
        })), l = tt(16), r = await le(x, l), a = xt(r, s);
        r.fill(0);
        const u = new Uint8Array(16 + a.length);
        return u.set(l, 0), u.set(a, 16), u;
      }
      const F9 = "peachsafe-backup";
      function lo(x, e, t) {
        const n = x.slice();
        return n[14] = e[t], n;
      }
      function ro(x, e, t) {
        const n = x.slice();
        return n[17] = e[t], n;
      }
      function p9(x) {
        let e;
        return {
          c() {
            e = z("Confirm PIN");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function D9(x) {
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
      function m9(x) {
        let e;
        return {
          c() {
            e = z("Saving\u2026");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function ao(x) {
        let e;
        return {
          c() {
            e = d("div"), c(e, "class", "dot svelte-h9ojs4"), e0(e, "filled", x[17] < x[2].length);
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
        function s() {
          return x[9](x[14]);
        }
        return {
          c() {
            e = d("button"), t = z(x[14]), c(e, "class", "key svelte-h9ojs4"), e.disabled = x[5];
          },
          m(l, r) {
            T(l, e, r), i(e, t), n || (o = O(e, "click", s), n = true);
          },
          p(l, r) {
            x = l, r & 32 && (e.disabled = x[5]);
          },
          d(l) {
            l && P(e), n = false, o();
          }
        };
      }
      function h9(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D, p, k, w;
        function y(R, j) {
          return R[5] ? m9 : R[1] === "enter" ? D9 : p9;
        }
        let S = y(x), M = S(x), I = E0([
          0,
          1,
          2,
          3
        ]), L = [];
        for (let R = 0; R < 4; R += 1) L[R] = ao(ro(x, I, R));
        let N = E0([
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
        for (let R = 0; R < 9; R += 1) q[R] = io(lo(x, N, R));
        return {
          c() {
            e = d("div"), t = d("div"), n = d("button"), n.innerHTML = '<span class="material-icons svelte-h9ojs4">arrow_back</span>', o = g(), s = d("div"), s.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-h9ojs4"/> <span class="brand-label"><span class="brand-peach svelte-h9ojs4">Peach</span><span class="brand-safe svelte-h9ojs4">Safe</span></span>', l = g(), r = d("p"), M.c(), a = g(), u = d("div");
            for (let R = 0; R < 4; R += 1) L[R].c();
            f = g(), E = d("p"), C = z(x[3]), B = g(), A = d("div");
            for (let R = 0; R < 9; R += 1) q[R].c();
            F = g(), m = d("button"), h = d("span"), h.textContent = "backspace", v = g(), b = d("button"), _ = z("0"), D = g(), p = d("div"), c(n, "class", "back-btn svelte-h9ojs4"), c(n, "aria-label", "Cancel"), c(s, "class", "brand svelte-h9ojs4"), c(r, "class", "prompt svelte-h9ojs4"), c(u, "class", "dots svelte-h9ojs4"), e0(u, "shake", x[4]), c(E, "class", "error-msg svelte-h9ojs4"), c(h, "class", "material-icons svelte-h9ojs4"), c(m, "class", "key key-del svelte-h9ojs4"), c(m, "aria-label", "Delete"), m.disabled = x[5], c(b, "class", "key svelte-h9ojs4"), b.disabled = x[5], c(A, "class", "numpad svelte-h9ojs4"), e0(A, "disabled", x[5]), c(t, "class", "setup-card svelte-h9ojs4"), c(e, "class", "overlay svelte-h9ojs4"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-label", x[0]);
          },
          m(R, j) {
            T(R, e, j), i(e, t), i(t, n), i(t, o), i(t, s), i(t, l), i(t, r), M.m(r, null), i(t, a), i(t, u);
            for (let H = 0; H < 4; H += 1) L[H] && L[H].m(u, null);
            i(t, f), i(t, E), i(E, C), i(t, B), i(t, A);
            for (let H = 0; H < 9; H += 1) q[H] && q[H].m(A, null);
            i(A, F), i(A, m), i(m, h), i(A, v), i(A, b), i(b, _), i(A, D), i(A, p), k || (w = [
              O(n, "click", x[8]),
              O(m, "click", x[7]),
              O(b, "click", x[10])
            ], k = true);
          },
          p(R, [j]) {
            if (S === (S = y(R)) && M ? M.p(R, j) : (M.d(1), M = S(R), M && (M.c(), M.m(r, null))), j & 4) {
              I = E0([
                0,
                1,
                2,
                3
              ]);
              let H;
              for (H = 0; H < 4; H += 1) {
                const Q = ro(R, I, H);
                L[H] ? L[H].p(Q, j) : (L[H] = ao(Q), L[H].c(), L[H].m(u, null));
              }
              for (; H < 4; H += 1) L[H].d(1);
            }
            if (j & 16 && e0(u, "shake", R[4]), j & 8 && V(C, R[3]), j & 96) {
              N = E0([
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
                const Q = lo(R, N, H);
                q[H] ? q[H].p(Q, j) : (q[H] = io(Q), q[H].c(), q[H].m(A, F));
              }
              for (; H < 9; H += 1) q[H].d(1);
            }
            j & 32 && (m.disabled = R[5]), j & 32 && (b.disabled = R[5]), j & 32 && e0(A, "disabled", R[5]), j & 1 && c(e, "aria-label", R[0]);
          },
          i: X,
          o: X,
          d(R) {
            R && P(e), M.d(), V0(L, R), V0(q, R), k = false, s0(w);
          }
        };
      }
      function v9(x, e, t) {
        let { title: n = "Set PIN" } = e;
        const o = ns();
        let s = "enter", l = "", r = "", a = "", u = false, f = false;
        function E(h) {
          r.length >= 4 || u || f || (t(3, a = ""), t(2, r += h), r.length === 4 && B());
        }
        function C() {
          u || f || (t(2, r = r.slice(0, -1)), t(3, a = ""));
        }
        async function B() {
          if (s === "enter") l = r, t(2, r = ""), t(1, s = "confirm");
          else if (r === l) {
            t(5, f = true);
            try {
              await Oa(r), Ot.set(true), o("done");
            } catch (h) {
              t(3, a = h.message), t(5, f = false), t(2, r = "");
            }
          } else t(4, u = true), t(3, a = "PINs don't match \u2014 try again"), await new Promise((h) => setTimeout(h, 600)), t(2, r = ""), l = "", t(1, s = "enter"), t(3, a = ""), t(4, u = false);
        }
        function A() {
          o("cancel");
        }
        const F = (h) => E(String(h)), m = () => E("0");
        return x.$$set = (h) => {
          "title" in h && t(0, n = h.title);
        }, [
          n,
          s,
          r,
          a,
          u,
          f,
          E,
          C,
          A,
          F,
          m
        ];
      }
      class _9 extends D0 {
        constructor(e) {
          super(), p0(this, e, v9, h9, A0, {
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
      function k9(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D, p = x[4] ? "verified_user" : "shield", k, w, y = x[4] ? "Enabled" : "Disabled", S, M, I, L, N, q, R, j, H, Q, K, G, U, J, Y, r0, c0, a0, l0, B0, se, Z, n0, u0, h0, v0, q0, Y0, R0, w0, S0, I0, st, je, Ee, He, lt;
        function rt($, f0) {
          return $[31] ? y9 : w9;
        }
        let _e = rt(x), Z0 = _e(x);
        function at($, f0) {
          if ($[26] === "idle") return M9;
          if ($[26] === "entering_pin") return I9;
          if ($[26] === "exporting") return S9;
          if ($[26] === "done") return T9;
          if ($[26] === "error") return P9;
        }
        let ae = at(x), M0 = ae && ae(x);
        function it($, f0) {
          return $[4] ? N9 : L9;
        }
        let ke = it(x), $0 = ke(x);
        function Qt($, f0) {
          return $[4] ? z9 : q9;
        }
        let o0 = Qt(x), L0 = o0(x), j0 = x[25] && po();
        function ct($, f0) {
          return $[32] !== null ? V9 : U9;
        }
        let Be = ct(x), Q0 = Be(x);
        function Hx($, f0) {
          return $[32] !== null ? Y9 : G9;
        }
        let ut = Hx(x), ee = ut(x);
        function Ox($, f0) {
          return $[3] ? W9 : K9;
        }
        let ft = Ox(x), ie = ft(x), U0 = x[18] && Do(x);
        return {
          c() {
            e = d("section"), t = d("div"), n = d("div"), n.innerHTML = '<h2 class="svelte-3s0d7a">Appearance</h2> <p class="hint svelte-3s0d7a">Choose your preferred color scheme.</p>', o = g(), s = d("div"), l = d("button"), l.textContent = "Light", r = g(), a = d("button"), a.textContent = "Dark", u = g(), f = d("section"), E = d("h2"), E.textContent = "Export to mobile", C = g(), Z0.c(), B = g(), M0 && M0.c(), A = g(), F = d("section"), m = d("div"), h = d("div"), v = d("h2"), v.textContent = "Two-factor authentication", b = g(), _ = d("span"), D = d("span"), k = z(p), w = g(), S = z(y), M = g(), I = d("p"), $0.c(), L = g(), L0.c(), N = g(), q = d("section"), R = d("div"), j = d("div"), H = d("h2"), H.textContent = "Screen lock", Q = g(), K = d("button"), K.innerHTML = '<span class="material-icons svelte-3s0d7a">info_outline</span>', G = g(), j0 && j0.c(), U = g(), J = d("p"), Q0.c(), Y = g(), ee.c(), r0 = g(), c0 = d("section"), a0 = d("div"), l0 = d("div"), B0 = d("h2"), B0.textContent = "Email", se = g(), Z = d("div"), n0 = d("span"), u0 = z(x[2]), h0 = g(), ie.c(), v0 = g(), q0 = d("a"), q0.textContent = "Change email", Y0 = g(), R0 = d("section"), R0.innerHTML = '<div class="row svelte-3s0d7a"><div class="svelte-3s0d7a"><h2 class="svelte-3s0d7a">Password</h2> <p class="hint svelte-3s0d7a">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-3s0d7a">Change password</a></div>', w0 = g(), S0 = d("section"), I0 = d("div"), I0.innerHTML = '<h2 class="svelte-3s0d7a">Delete account</h2> <p class="hint svelte-3s0d7a">Permanently delete your account and all data stored on the server. This cannot be undone.</p>', st = g(), U0 && U0.c(), je = g(), Ee = d("button"), Ee.textContent = "Delete account", c(n, "class", "svelte-3s0d7a"), c(l, "class", "theme-btn svelte-3s0d7a"), e0(l, "active", x[30] === "light"), c(a, "class", "theme-btn svelte-3s0d7a"), e0(a, "active", x[30] === "dark"), c(s, "class", "theme-toggle svelte-3s0d7a"), c(t, "class", "row svelte-3s0d7a"), c(e, "class", "card svelte-3s0d7a"), c(E, "class", "svelte-3s0d7a"), c(f, "class", "card svelte-3s0d7a"), c(v, "class", "svelte-3s0d7a"), c(D, "class", "material-icons svelte-3s0d7a"), c(_, "class", "status-badge svelte-3s0d7a"), e0(_, "enabled", x[4]), e0(_, "disabled", !x[4]), c(h, "class", "totp-heading svelte-3s0d7a"), c(I, "class", "hint svelte-3s0d7a"), c(F, "class", "card svelte-3s0d7a"), c(H, "class", "svelte-3s0d7a"), c(K, "class", "info-btn svelte-3s0d7a"), c(K, "aria-label", "About screen lock"), e0(K, "active", x[25]), c(j, "class", "section-heading svelte-3s0d7a"), c(J, "class", "hint svelte-3s0d7a"), c(q, "class", "card svelte-3s0d7a"), c(B0, "class", "svelte-3s0d7a"), c(n0, "class", "hint email-value svelte-3s0d7a"), c(Z, "class", "email-meta svelte-3s0d7a"), c(l0, "class", "svelte-3s0d7a"), c(q0, "href", "#/change-email"), c(q0, "class", "btn-outline-sm svelte-3s0d7a"), c(a0, "class", "row svelte-3s0d7a"), c(c0, "class", "card svelte-3s0d7a"), c(R0, "class", "card svelte-3s0d7a"), c(Ee, "class", "btn-danger svelte-3s0d7a"), c(S0, "class", "card danger-card svelte-3s0d7a");
          },
          m($, f0) {
            T($, e, f0), i(e, t), i(t, n), i(t, o), i(t, s), i(s, l), i(s, r), i(s, a), T($, u, f0), T($, f, f0), i(f, E), i(f, C), Z0.m(f, null), i(f, B), M0 && M0.m(f, null), T($, A, f0), T($, F, f0), i(F, m), i(m, h), i(h, v), i(h, b), i(h, _), i(_, D), i(D, k), i(_, w), i(_, S), i(m, M), i(m, I), $0.m(I, null), i(F, L), L0.m(F, null), T($, N, f0), T($, q, f0), i(q, R), i(R, j), i(j, H), i(j, Q), i(j, K), i(R, G), j0 && j0.m(R, null), i(R, U), i(R, J), Q0.m(J, null), i(q, Y), ee.m(q, null), T($, r0, f0), T($, c0, f0), i(c0, a0), i(a0, l0), i(l0, B0), i(l0, se), i(l0, Z), i(Z, n0), i(n0, u0), i(Z, h0), ie.m(Z, null), i(a0, v0), i(a0, q0), T($, Y0, f0), T($, R0, f0), T($, w0, f0), T($, S0, f0), i(S0, I0), i(S0, st), U0 && U0.m(S0, null), i(S0, je), i(S0, Ee), He || (lt = [
              O(l, "click", x[42]),
              O(a, "click", x[43]),
              O(K, "click", x[52]),
              O(Ee, "click", x[56])
            ], He = true);
          },
          p($, f0) {
            f0[0] & 1073741824 && e0(l, "active", $[30] === "light"), f0[0] & 1073741824 && e0(a, "active", $[30] === "dark"), _e !== (_e = rt($)) && (Z0.d(1), Z0 = _e($), Z0 && (Z0.c(), Z0.m(f, B))), ae === (ae = at($)) && M0 ? M0.p($, f0) : (M0 && M0.d(1), M0 = ae && ae($), M0 && (M0.c(), M0.m(f, null))), f0[0] & 16 && p !== (p = $[4] ? "verified_user" : "shield") && V(k, p), f0[0] & 16 && y !== (y = $[4] ? "Enabled" : "Disabled") && V(S, y), f0[0] & 16 && e0(_, "enabled", $[4]), f0[0] & 16 && e0(_, "disabled", !$[4]), ke !== (ke = it($)) && ($0.d(1), $0 = ke($), $0 && ($0.c(), $0.m(I, null))), o0 === (o0 = Qt($)) && L0 ? L0.p($, f0) : (L0.d(1), L0 = o0($), L0 && (L0.c(), L0.m(F, null))), f0[0] & 33554432 && e0(K, "active", $[25]), $[25] ? j0 || (j0 = po(), j0.c(), j0.m(R, U)) : j0 && (j0.d(1), j0 = null), Be !== (Be = ct($)) && (Q0.d(1), Q0 = Be($), Q0 && (Q0.c(), Q0.m(J, null))), ut === (ut = Hx($)) && ee ? ee.p($, f0) : (ee.d(1), ee = ut($), ee && (ee.c(), ee.m(q, null))), f0[0] & 4 && V(u0, $[2]), ft !== (ft = Ox($)) && (ie.d(1), ie = ft($), ie && (ie.c(), ie.m(Z, null))), $[18] ? U0 ? U0.p($, f0) : (U0 = Do($), U0.c(), U0.m(S0, je)) : U0 && (U0.d(1), U0 = null);
          },
          d($) {
            $ && (P(e), P(u), P(f), P(A), P(F), P(N), P(q), P(r0), P(c0), P(Y0), P(R0), P(w0), P(S0)), Z0.d(), M0 && M0.d(), $0.d(), L0.d(), j0 && j0.d(), Q0.d(), ee.d(), ie.d(), U0 && U0.d(), He = false, s0(lt);
          }
        };
      }
      function b9(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[1]), c(e, "class", "error svelte-3s0d7a");
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
      function g9(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Loading\u2026", c(e, "class", "muted svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function w9(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", c(e, "class", "hint svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function y9(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", c(e, "class", "hint warning svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function P9(x) {
        let e, t, n, o, s, l;
        return {
          c() {
            e = d("p"), t = z(x[29]), n = g(), o = d("button"), o.textContent = "Try again", c(e, "class", "error svelte-3s0d7a"), c(o, "class", "btn-ghost svelte-3s0d7a");
          },
          m(r, a) {
            T(r, e, a), i(e, t), T(r, n, a), T(r, o, a), s || (l = O(o, "click", x[38]), s = true);
          },
          p(r, a) {
            a[0] & 536870912 && V(t, r[29]);
          },
          d(r) {
            r && (P(e), P(n), P(o)), s = false, l();
          }
        };
      }
      function T9(x) {
        let e, t, n, o, s;
        return {
          c() {
            e = d("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, t = g(), n = d("button"), n.textContent = "Done", c(e, "class", "hint svelte-3s0d7a"), c(n, "class", "btn-ghost svelte-3s0d7a");
          },
          m(l, r) {
            T(l, e, r), T(l, t, r), T(l, n, r), o || (s = O(n, "click", x[38]), o = true);
          },
          p: X,
          d(l) {
            l && (P(e), P(t), P(n)), o = false, s();
          }
        };
      }
      function S9(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Encrypting\u2026", c(e, "class", "hint svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function I9(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b = x[29] && fo(x);
        return {
          c() {
            e = d("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", t = g(), n = d("div"), o = d("label"), s = z(`PIN
            `), l = d("input"), r = g(), a = d("label"), u = z(`Confirm PIN
            `), f = d("input"), E = g(), b && b.c(), C = g(), B = d("div"), A = d("button"), A.textContent = "Download backup", F = g(), m = d("button"), m.textContent = "Cancel", c(e, "class", "hint svelte-3s0d7a"), c(l, "type", "password"), c(l, "inputmode", "numeric"), c(l, "maxlength", "6"), c(l, "placeholder", "6 digits"), c(l, "autocomplete", "new-password"), c(f, "type", "password"), c(f, "inputmode", "numeric"), c(f, "maxlength", "6"), c(f, "placeholder", "6 digits"), c(f, "autocomplete", "new-password"), c(A, "class", "btn-primary svelte-3s0d7a"), c(m, "class", "btn-ghost svelte-3s0d7a"), c(B, "class", "export-actions svelte-3s0d7a"), c(n, "class", "export-form svelte-3s0d7a");
          },
          m(_, D) {
            T(_, e, D), T(_, t, D), T(_, n, D), i(n, o), i(o, s), i(o, l), x0(l, x[27]), i(n, r), i(n, a), i(a, u), i(a, f), x0(f, x[28]), i(n, E), b && b.m(n, null), i(n, C), i(n, B), i(B, A), i(B, F), i(B, m), h || (v = [
              O(l, "input", x[45]),
              O(f, "input", x[46]),
              O(A, "click", x[37]),
              O(m, "click", x[38])
            ], h = true);
          },
          p(_, D) {
            D[0] & 134217728 && l.value !== _[27] && x0(l, _[27]), D[0] & 268435456 && f.value !== _[28] && x0(f, _[28]), _[29] ? b ? b.p(_, D) : (b = fo(_), b.c(), b.m(n, C)) : b && (b.d(1), b = null);
          },
          d(_) {
            _ && (P(e), P(t), P(n)), b && b.d(), h = false, s0(v);
          }
        };
      }
      function M9(x) {
        let e, t, n;
        return {
          c() {
            e = d("button"), e.textContent = "Export data for mobile app", c(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(o, s) {
            T(o, e, s), t || (n = O(e, "click", x[44]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function fo(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[29]), c(e, "class", "error svelte-3s0d7a");
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
      function L9(x) {
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
      function N9(x) {
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
      function z9(x) {
        let e, t, n, o, s, l, r, a = x[5] !== 1 ? "s" : "", u, f, E, C, B, A, F, m, h, v, b, _, D, p;
        function k(q, R) {
          return q[15].length > 0 ? j9 : R9;
        }
        let w = k(x), y = w(x), S = x[7] && Co(x);
        function M(q, R) {
          return q[6].length === 0 ? O9 : H9;
        }
        let I = M(x), L = I(x), N = x[11] && Fo(x);
        return {
          c() {
            e = d("div"), t = d("div"), n = d("span"), n.textContent = "key", o = g(), s = d("span"), l = z(x[5]), r = z(" backup code"), u = z(a), f = z(" remaining"), E = g(), y.c(), C = g(), B = d("div"), A = d("div"), A.innerHTML = '<span class="material-icons svelte-3s0d7a">devices</span> <span>Trusted devices</span>', F = g(), S && S.c(), m = g(), L.c(), h = g(), v = d("div"), N && N.c(), b = g(), _ = d("button"), _.textContent = "Disable 2FA", c(n, "class", "material-icons svelte-3s0d7a"), c(t, "class", "backup-count svelte-3s0d7a"), c(e, "class", "backup-section svelte-3s0d7a"), c(A, "class", "backup-count svelte-3s0d7a"), c(B, "class", "backup-section svelte-3s0d7a"), c(_, "class", "btn-danger svelte-3s0d7a"), c(v, "class", "danger-zone svelte-3s0d7a");
          },
          m(q, R) {
            T(q, e, R), i(e, t), i(t, n), i(t, o), i(t, s), i(s, l), i(s, r), i(s, u), i(s, f), i(e, E), y.m(e, null), T(q, C, R), T(q, B, R), i(B, A), i(B, F), S && S.m(B, null), i(B, m), L.m(B, null), T(q, h, R), T(q, v, R), N && N.m(v, null), i(v, b), i(v, _), D || (p = O(_, "click", x[51]), D = true);
          },
          p(q, R) {
            R[0] & 32 && V(l, q[5]), R[0] & 32 && a !== (a = q[5] !== 1 ? "s" : "") && V(u, a), w === (w = k(q)) && y ? y.p(q, R) : (y.d(1), y = w(q), y && (y.c(), y.m(e, null))), q[7] ? S ? S.p(q, R) : (S = Co(q), S.c(), S.m(B, m)) : S && (S.d(1), S = null), I === (I = M(q)) && L ? L.p(q, R) : (L.d(1), L = I(q), L && (L.c(), L.m(B, null))), q[11] ? N ? N.p(q, R) : (N = Fo(q), N.c(), N.m(v, b)) : N && (N.d(1), N = null);
          },
          d(q) {
            q && (P(e), P(C), P(B), P(h), P(v)), y.d(), S && S.d(), L.d(), N && N.d(), D = false, p();
          }
        };
      }
      function q9(x) {
        let e, t, n;
        return {
          c() {
            e = d("button"), e.textContent = "Enable 2FA", c(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(o, s) {
            T(o, e, s), t || (n = O(e, "click", x[47]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function R9(x) {
        let e, t, n, o, s, l = x[14] && Eo(x);
        return {
          c() {
            l && l.c(), e = g(), t = d("button"), n = z("Regenerate backup codes"), c(t, "class", "btn-outline-sm svelte-3s0d7a"), t.disabled = x[13];
          },
          m(r, a) {
            l && l.m(r, a), T(r, e, a), T(r, t, a), i(t, n), o || (s = O(t, "click", x[49]), o = true);
          },
          p(r, a) {
            r[14] ? l ? l.p(r, a) : (l = Eo(r), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), a[0] & 8192 && (t.disabled = r[13]);
          },
          d(r) {
            r && (P(e), P(t)), l && l.d(r), o = false, s();
          }
        };
      }
      function j9(x) {
        let e, t, n, o, s, l, r, a, u, f, E = E0(x[15]), C = [];
        for (let B = 0; B < E.length; B += 1) C[B] = Bo(uo(x, E, B));
        return {
          c() {
            e = d("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", t = g(), n = d("div");
            for (let B = 0; B < C.length; B += 1) C[B].c();
            o = g(), s = d("div"), l = d("button"), l.innerHTML = `<span class="material-icons svelte-3s0d7a">download</span>
                Download`, r = g(), a = d("button"), a.textContent = "Done", c(e, "class", "hint warning svelte-3s0d7a"), c(n, "class", "backup-grid"), c(l, "class", "btn-outline-sm dl-btn svelte-3s0d7a"), c(a, "class", "btn-outline-sm svelte-3s0d7a"), c(s, "class", "regen-code-actions svelte-3s0d7a");
          },
          m(B, A) {
            T(B, e, A), T(B, t, A), T(B, n, A);
            for (let F = 0; F < C.length; F += 1) C[F] && C[F].m(n, null);
            T(B, o, A), T(B, s, A), i(s, l), i(s, r), i(s, a), u || (f = [
              O(l, "click", x[48]),
              O(a, "click", x[40])
            ], u = true);
          },
          p(B, A) {
            if (A[0] & 32768) {
              E = E0(B[15]);
              let F;
              for (F = 0; F < E.length; F += 1) {
                const m = uo(B, E, F);
                C[F] ? C[F].p(m, A) : (C[F] = Bo(m), C[F].c(), C[F].m(n, null));
              }
              for (; F < C.length; F += 1) C[F].d(1);
              C.length = E.length;
            }
          },
          d(B) {
            B && (P(e), P(t), P(n), P(o), P(s)), V0(C, B), u = false, s0(f);
          }
        };
      }
      function Eo(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[14]), c(e, "class", "error svelte-3s0d7a");
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
            e = d("code"), n = z(t), c(e, "class", "backup-code");
          },
          m(o, s) {
            T(o, e, s), i(e, n);
          },
          p(o, s) {
            s[0] & 32768 && t !== (t = o[73] + "") && V(n, t);
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
            e = d("p"), t = z(x[7]), c(e, "class", "error svelte-3s0d7a");
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
      function H9(x) {
        let e, t = [], n = /* @__PURE__ */ new Map(), o, s, l = x[8] ? "Revoking\u2026" : "Revoke all", r, a, u, f = E0(x[6]);
        const E = (C) => C[70].id;
        for (let C = 0; C < f.length; C += 1) {
          let B = co(x, f, C), A = E(B);
          n.set(A, t[C] = Ao(A, B));
        }
        return {
          c() {
            e = d("ul");
            for (let C = 0; C < t.length; C += 1) t[C].c();
            o = g(), s = d("button"), r = z(l), c(e, "class", "device-list svelte-3s0d7a"), c(s, "class", "btn-outline-sm svelte-3s0d7a"), s.disabled = x[8];
          },
          m(C, B) {
            T(C, e, B);
            for (let A = 0; A < t.length; A += 1) t[A] && t[A].m(e, null);
            T(C, o, B), T(C, s, B), i(s, r), a || (u = O(s, "click", x[34]), a = true);
          },
          p(C, B) {
            B[0] & 64 | B[1] & 4 && (f = E0(C[6]), t = al(t, B, E, 1, C, f, n, e, rl, Ao, null, co)), B[0] & 256 && l !== (l = C[8] ? "Revoking\u2026" : "Revoke all") && V(r, l), B[0] & 256 && (s.disabled = C[8]);
          },
          d(C) {
            C && (P(e), P(o), P(s));
            for (let B = 0; B < t.length; B += 1) t[B].d();
            a = false, u();
          }
        };
      }
      function O9(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = 'No trusted devices. Check "Remember this device" at login to skip 2FA on this browser in future.', c(e, "class", "hint svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function Ao(x, e) {
        let t, n, o = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "", s, l, r = Po(e[70].created_at) + "", a, u, f, E, C, B;
        function A() {
          return e[50](e[70]);
        }
        return {
          key: x,
          first: null,
          c() {
            t = d("li"), n = d("span"), s = z(o), l = z("Added "), a = z(r), u = g(), f = d("button"), f.textContent = "Revoke", E = g(), c(n, "class", "device-date svelte-3s0d7a"), c(f, "class", "btn-outline-sm svelte-3s0d7a"), c(t, "class", "device-item svelte-3s0d7a"), this.first = t;
          },
          m(F, m) {
            T(F, t, m), i(t, n), i(n, s), i(n, l), i(n, a), i(t, u), i(t, f), i(t, E), C || (B = O(f, "click", A), C = true);
          },
          p(F, m) {
            e = F, m[0] & 64 && o !== (o = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "") && V(s, o), m[0] & 64 && r !== (r = Po(e[70].created_at) + "") && V(a, r);
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
            e = d("p"), t = z(x[11]), c(e, "class", "error svelte-3s0d7a");
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
      function po(x) {
        let e;
        return {
          c() {
            e = d("p"), e.innerHTML = "Requires a 4-digit PIN to open Encounters, Results, Alerts and Settings, while still allowing you to add a new encounter from the Home screen. Useful if you hand your phone to someone - it stops casual snooping. <br/><strong>Note:</strong> your data is already encrypted by your password; the PIN adds no additional encryption.", c(e, "class", "info-box svelte-3s0d7a");
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
      function V9(x) {
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
      function G9(x) {
        let e, t, n;
        return {
          c() {
            e = d("button"), e.textContent = "Set PIN", c(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(o, s) {
            T(o, e, s), t || (n = O(e, "click", x[55]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function Y9(x) {
        let e, t, n, o, s, l;
        return {
          c() {
            e = d("div"), t = d("button"), t.textContent = "Change PIN", n = g(), o = d("button"), o.textContent = "Remove PIN", c(t, "class", "btn-outline-sm svelte-3s0d7a"), c(o, "class", "btn-outline-sm btn-outline-danger svelte-3s0d7a"), c(e, "class", "row-actions svelte-3s0d7a");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(e, n), i(e, o), s || (l = [
              O(t, "click", x[53]),
              O(o, "click", x[54])
            ], s = true);
          },
          p: X,
          d(r) {
            r && P(e), s = false, s0(l);
          }
        };
      }
      function K9(x) {
        let e;
        return {
          c() {
            e = d("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">warning</span>
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
      function W9(x) {
        let e;
        return {
          c() {
            e = d("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">verified</span>
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
      function Do(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[18]), c(e, "class", "error svelte-3s0d7a");
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
        return e = new _9({
          props: {
            title: x[21]
          }
        }), e.$on("done", x[57]), e.$on("cancel", x[58]), {
          c() {
            y0(e.$$.fragment);
          },
          m(n, o) {
            b0(e, n, o), t = true;
          },
          p(n, o) {
            const s = {};
            o[0] & 2097152 && (s.title = n[21]), e.$set(s);
          },
          i(n) {
            t || (d0(e.$$.fragment, n), t = true);
          },
          o(n) {
            C0(e.$$.fragment, n), t = false;
          },
          d(n) {
            g0(e, n);
          }
        };
      }
      function ho(x) {
        let e, t, n, o, s, l, r, a, u, f = x[23] ? "Removing\u2026" : "Remove PIN", E, C, B, A, F, m, h = x[24] && vo(x);
        return {
          c() {
            e = d("div"), t = d("div"), n = d("h2"), n.textContent = "Remove screen lock PIN?", o = g(), s = d("p"), s.textContent = "Anyone with access to your phone will be able to view your encounters and alerts.", l = g(), h && h.c(), r = g(), a = d("div"), u = d("button"), E = z(f), C = g(), B = d("button"), A = z("Cancel"), c(n, "id", "remove-pin-title"), c(n, "class", "svelte-3s0d7a"), c(s, "class", "svelte-3s0d7a"), c(u, "class", "btn-danger svelte-3s0d7a"), u.disabled = x[23], c(B, "class", "btn-ghost svelte-3s0d7a"), B.disabled = x[23], c(a, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "remove-pin-title");
          },
          m(v, b) {
            T(v, e, b), i(e, t), i(t, n), i(t, o), i(t, s), i(t, l), h && h.m(t, null), i(t, r), i(t, a), i(a, u), i(u, E), i(a, C), i(a, B), i(B, A), F || (m = [
              O(u, "click", x[36]),
              O(B, "click", x[59])
            ], F = true);
          },
          p(v, b) {
            v[24] ? h ? h.p(v, b) : (h = vo(v), h.c(), h.m(t, r)) : h && (h.d(1), h = null), b[0] & 8388608 && f !== (f = v[23] ? "Removing\u2026" : "Remove PIN") && V(E, f), b[0] & 8388608 && (u.disabled = v[23]), b[0] & 8388608 && (B.disabled = v[23]);
          },
          d(v) {
            v && P(e), h && h.d(), F = false, s0(m);
          }
        };
      }
      function vo(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[24]), c(e, "class", "error svelte-3s0d7a");
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
        let e, t, n, o, s, l, r, a, u, f = x[10] ? "Disabling\u2026" : "Yes, disable 2FA", E, C, B, A, F, m, h = x[11] && ko(x);
        return {
          c() {
            e = d("div"), t = d("div"), n = d("h2"), n.textContent = "Disable two-factor authentication?", o = g(), s = d("p"), s.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, l = g(), h && h.c(), r = g(), a = d("div"), u = d("button"), E = z(f), C = g(), B = d("button"), A = z("Cancel"), c(n, "id", "disable-title"), c(n, "class", "svelte-3s0d7a"), c(s, "class", "svelte-3s0d7a"), c(u, "class", "btn-danger svelte-3s0d7a"), u.disabled = x[10], c(B, "class", "btn-ghost svelte-3s0d7a"), B.disabled = x[10], c(a, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "disable-title");
          },
          m(v, b) {
            T(v, e, b), i(e, t), i(t, n), i(t, o), i(t, s), i(t, l), h && h.m(t, null), i(t, r), i(t, a), i(a, u), i(u, E), i(a, C), i(a, B), i(B, A), F || (m = [
              O(u, "click", x[35]),
              O(B, "click", x[60])
            ], F = true);
          },
          p(v, b) {
            v[11] ? h ? h.p(v, b) : (h = ko(v), h.c(), h.m(t, r)) : h && (h.d(1), h = null), b[0] & 1024 && f !== (f = v[10] ? "Disabling\u2026" : "Yes, disable 2FA") && V(E, f), b[0] & 1024 && (u.disabled = v[10]), b[0] & 1024 && (B.disabled = v[10]);
          },
          d(v) {
            v && P(e), h && h.d(), F = false, s0(m);
          }
        };
      }
      function ko(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[11]), c(e, "class", "error svelte-3s0d7a");
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
        let e, t, n, o, s, l, r, a, u, f = x[13] ? "Regenerating\u2026" : "Regenerate", E, C, B, A, F, m, h = x[14] && go(x);
        return {
          c() {
            e = d("div"), t = d("div"), n = d("h2"), n.textContent = "Regenerate backup codes?", o = g(), s = d("p"), s.textContent = "All existing backup codes will be permanently invalidated.", l = g(), h && h.c(), r = g(), a = d("div"), u = d("button"), E = z(f), C = g(), B = d("button"), A = z("Cancel"), c(n, "id", "regen-title"), c(n, "class", "svelte-3s0d7a"), c(s, "class", "svelte-3s0d7a"), c(u, "class", "btn-primary svelte-3s0d7a"), u.disabled = x[13], c(B, "class", "btn-ghost svelte-3s0d7a"), B.disabled = x[13], c(a, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "regen-title");
          },
          m(v, b) {
            T(v, e, b), i(e, t), i(t, n), i(t, o), i(t, s), i(t, l), h && h.m(t, null), i(t, r), i(t, a), i(a, u), i(u, E), i(a, C), i(a, B), i(B, A), F || (m = [
              O(u, "click", x[39]),
              O(B, "click", x[61])
            ], F = true);
          },
          p(v, b) {
            v[14] ? h ? h.p(v, b) : (h = go(v), h.c(), h.m(t, r)) : h && (h.d(1), h = null), b[0] & 8192 && f !== (f = v[13] ? "Regenerating\u2026" : "Regenerate") && V(E, f), b[0] & 8192 && (u.disabled = v[13]), b[0] & 8192 && (B.disabled = v[13]);
          },
          d(v) {
            v && P(e), h && h.d(), F = false, s0(m);
          }
        };
      }
      function go(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[14]), c(e, "class", "error svelte-3s0d7a");
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
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m = x[17] ? "Deleting\u2026" : "Yes, delete my account", h, v, b, _, D, p, k, w = x[18] && yo(x);
        return {
          c() {
            e = d("div"), t = d("div"), n = d("h2"), n.textContent = "Delete your account?", o = g(), s = d("p"), s.innerHTML = `This will permanently delete your account and all data stored on the server.
        <strong>There is no undo.</strong>`, l = g(), r = d("p"), r.textContent = "If you haven't already, export your data first so you can import it into the mobile app.", a = g(), u = d("label"), u.textContent = "Type your email address to confirm:", f = g(), E = d("input"), C = g(), w && w.c(), B = g(), A = d("div"), F = d("button"), h = z(m), b = g(), _ = d("button"), D = z("Cancel"), c(n, "id", "delete-title"), c(n, "class", "svelte-3s0d7a"), c(s, "class", "svelte-3s0d7a"), c(r, "class", "hint svelte-3s0d7a"), c(u, "class", "confirm-label svelte-3s0d7a"), c(u, "for", "delete-confirm-input"), c(E, "id", "delete-confirm-input"), c(E, "class", "confirm-input svelte-3s0d7a"), c(E, "type", "text"), c(E, "placeholder", x[2]), c(E, "autocomplete", "off"), E.disabled = x[17], c(F, "class", "btn-danger svelte-3s0d7a"), F.disabled = v = x[17] || x[19] !== x[2], c(_, "class", "btn-ghost svelte-3s0d7a"), _.disabled = x[17], c(A, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "delete-title");
          },
          m(y, S) {
            T(y, e, S), i(e, t), i(t, n), i(t, o), i(t, s), i(t, l), i(t, r), i(t, a), i(t, u), i(t, f), i(t, E), x0(E, x[19]), i(t, C), w && w.m(t, null), i(t, B), i(t, A), i(A, F), i(F, h), i(A, b), i(A, _), i(_, D), p || (k = [
              O(E, "input", x[62]),
              O(F, "click", x[41]),
              O(_, "click", x[63])
            ], p = true);
          },
          p(y, S) {
            S[0] & 4 && c(E, "placeholder", y[2]), S[0] & 131072 && (E.disabled = y[17]), S[0] & 524288 && E.value !== y[19] && x0(E, y[19]), y[18] ? w ? w.p(y, S) : (w = yo(y), w.c(), w.m(t, B)) : w && (w.d(1), w = null), S[0] & 131072 && m !== (m = y[17] ? "Deleting\u2026" : "Yes, delete my account") && V(h, m), S[0] & 655364 && v !== (v = y[17] || y[19] !== y[2]) && (F.disabled = v), S[0] & 131072 && (_.disabled = y[17]);
          },
          d(y) {
            y && P(e), w && w.d(), p = false, s0(k);
          }
        };
      }
      function yo(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[18]), c(e, "class", "error svelte-3s0d7a");
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
      function Q9(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C;
        e = new ne({});
        function B(D, p) {
          return D[0] ? g9 : D[1] ? b9 : k9;
        }
        let A = B(x), F = A(x), m = x[20] && mo(x), h = x[22] && ho(x), v = x[9] && _o(x), b = x[12] && bo(x), _ = x[16] && wo(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), o = d("h1"), o.textContent = "Settings", s = g(), F.c(), l = g(), m && m.c(), r = g(), h && h.c(), a = g(), v && v.c(), u = g(), b && b.c(), f = g(), _ && _.c(), E = X0(), c(o, "class", "svelte-3s0d7a"), c(n, "class", "svelte-3s0d7a");
          },
          m(D, p) {
            b0(e, D, p), T(D, t, p), T(D, n, p), i(n, o), i(n, s), F.m(n, null), T(D, l, p), m && m.m(D, p), T(D, r, p), h && h.m(D, p), T(D, a, p), v && v.m(D, p), T(D, u, p), b && b.m(D, p), T(D, f, p), _ && _.m(D, p), T(D, E, p), C = true;
          },
          p(D, p) {
            A === (A = B(D)) && F ? F.p(D, p) : (F.d(1), F = A(D), F && (F.c(), F.m(n, null))), D[20] ? m ? (m.p(D, p), p[0] & 1048576 && d0(m, 1)) : (m = mo(D), m.c(), d0(m, 1), m.m(r.parentNode, r)) : m && (qe(), C0(m, 1, 1, () => {
              m = null;
            }), Re()), D[22] ? h ? h.p(D, p) : (h = ho(D), h.c(), h.m(a.parentNode, a)) : h && (h.d(1), h = null), D[9] ? v ? v.p(D, p) : (v = _o(D), v.c(), v.m(u.parentNode, u)) : v && (v.d(1), v = null), D[12] ? b ? b.p(D, p) : (b = bo(D), b.c(), b.m(f.parentNode, f)) : b && (b.d(1), b = null), D[16] ? _ ? _.p(D, p) : (_ = wo(D), _.c(), _.m(E.parentNode, E)) : _ && (_.d(1), _ = null);
          },
          i(D) {
            C || (d0(e.$$.fragment, D), d0(m), C = true);
          },
          o(D) {
            C0(e.$$.fragment, D), C0(m), C = false;
          },
          d(D) {
            D && (P(t), P(n), P(l), P(r), P(a), P(u), P(f), P(E)), g0(e, D), F.d(), m && m.d(D), h && h.d(D), v && v.d(D), b && b.d(D), _ && _.d(D);
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
      function J9(x) {
        const e = x.join(`
`), t = new Blob([
          e
        ], {
          type: "text/plain"
        }), n = URL.createObjectURL(t), o = document.createElement("a");
        o.href = n, o.download = "backup-codes.txt", o.click(), URL.revokeObjectURL(n);
      }
      function X9(x, e, t) {
        let n, o, s, l, r, a, u, f;
        H0(x, Ye, (o0) => t(64, n = o0)), H0(x, Pt, (o0) => t(65, o = o0)), H0(x, Xe, (o0) => t(66, s = o0)), H0(x, he, (o0) => t(67, l = o0)), H0(x, Ut, (o0) => t(68, r = o0)), H0(x, pt, (o0) => t(30, a = o0)), H0(x, ws, (o0) => t(31, u = o0)), H0(x, Tx, (o0) => t(32, f = o0));
        let E = true, C = null, B = "", A = false, F = false, m = 0, h = [], v = null, b = false, _ = false, D = false, p = null, k = false, w = false, y = null, S = [], M = false, I = false, L = null, N = "";
        z0(async () => {
          if (!G0()) {
            i0("/login");
            return;
          }
          await q();
        });
        async function q() {
          t(0, E = true), t(1, C = null);
          try {
            t(2, B = r ?? ""), t(3, A = l ?? false), t(4, F = s ?? false), F && (t(5, m = o ?? 0), t(6, h = n ?? []));
          } catch (o0) {
            t(1, C = o0.message);
          } finally {
            t(0, E = false);
          }
        }
        async function R(o0) {
          t(7, v = null);
          try {
            await aa(o0), t(6, h = h.filter((L0) => L0.id !== o0)), Ye.set(h), $t(mt());
          } catch (L0) {
            t(7, v = L0.message);
          }
        }
        async function j() {
          t(7, v = null), t(8, b = true);
          try {
            await ia(), t(6, h = []), Ye.set([]), $t(mt());
          } catch (o0) {
            t(7, v = o0.message);
          } finally {
            t(8, b = false);
          }
        }
        async function H() {
          t(11, p = null), t(10, D = true);
          try {
            await la(), t(4, F = false), Xe.set(false), t(5, m = 0), t(6, h = []), $t(mt()), t(9, _ = false);
          } catch (o0) {
            t(11, p = o0.message);
          } finally {
            t(10, D = false);
          }
        }
        let Q = false, K = "Set PIN", G = false, U = false, J = "", Y = false;
        async function r0() {
          t(23, U = true);
          try {
            await Ua(), t(22, G = false);
          } catch (o0) {
            t(24, J = o0.message);
          } finally {
            t(23, U = false);
          }
        }
        let c0 = "idle", a0 = "", l0 = "", B0 = null;
        async function se() {
          if (t(29, B0 = null), !/^\d{6}$/.test(a0)) {
            t(29, B0 = "PIN must be exactly 6 digits.");
            return;
          }
          if (a0 !== l0) {
            t(29, B0 = "PINs do not match.");
            return;
          }
          t(26, c0 = "exporting");
          try {
            const o0 = await A9(a0), L0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), j0 = `${F9}-${L0}.enc`, ct = new Blob([
              o0
            ], {
              type: "application/octet-stream"
            }), Be = URL.createObjectURL(ct), Q0 = document.createElement("a");
            Q0.href = Be, Q0.download = j0, Q0.click(), URL.revokeObjectURL(Be), t(26, c0 = "done");
          } catch (o0) {
            t(29, B0 = o0.message), t(26, c0 = "error");
          }
        }
        function Z() {
          t(26, c0 = "idle"), t(27, a0 = ""), t(28, l0 = ""), t(29, B0 = null);
        }
        async function n0() {
          t(14, y = null), t(13, w = true);
          try {
            const { backup_codes: o0 } = await ra();
            t(15, S = o0), t(5, m = o0.length), Pt.set(o0.length), t(12, k = false);
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
            await da(), i0("/login");
          } catch (o0) {
            t(18, L = o0.message);
          } finally {
            t(17, I = false);
          }
        }
        const v0 = () => Gx(pt, a = "light", a), q0 = () => Gx(pt, a = "dark", a), Y0 = () => t(26, c0 = "entering_pin");
        function R0() {
          a0 = this.value, t(27, a0);
        }
        function w0() {
          l0 = this.value, t(28, l0);
        }
        const S0 = () => i0("/settings/2fa-setup"), I0 = () => J9(S), st = () => {
          t(12, k = true);
        }, je = (o0) => R(o0.id), Ee = () => {
          t(9, _ = true);
        }, He = () => t(25, Y = !Y), lt = () => {
          t(21, K = "Change PIN"), t(20, Q = true);
        }, rt = () => {
          t(22, G = true), t(24, J = "");
        }, _e = () => {
          t(21, K = "Set PIN"), t(20, Q = true);
        }, Z0 = () => {
          t(16, M = true), t(19, N = "");
        }, at = () => t(20, Q = false), ae = () => t(20, Q = false), M0 = () => {
          t(22, G = false), t(24, J = "");
        }, it = () => {
          t(9, _ = false), t(11, p = null);
        }, ke = () => {
          t(12, k = false), t(14, y = null);
        };
        function $0() {
          N = this.value, t(19, N);
        }
        return [
          E,
          C,
          B,
          A,
          F,
          m,
          h,
          v,
          b,
          _,
          D,
          p,
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
          U,
          J,
          Y,
          c0,
          a0,
          l0,
          B0,
          a,
          u,
          f,
          R,
          j,
          H,
          r0,
          se,
          Z,
          n0,
          u0,
          h0,
          v0,
          q0,
          Y0,
          R0,
          w0,
          S0,
          I0,
          st,
          je,
          Ee,
          He,
          lt,
          rt,
          _e,
          Z0,
          at,
          ae,
          M0,
          it,
          ke,
          $0,
          () => {
            t(16, M = false), t(18, L = null), t(19, N = "");
          }
        ];
      }
      class Z9 extends D0 {
        constructor(e) {
          super(), p0(this, e, X9, Q9, A0, {}, null, [
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
      function $9(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A = E0(x[4]), F = [];
        for (let m = 0; m < A.length; m += 1) F[m] = So(To(x, A, m));
        return {
          c() {
            e = d("div"), t = d("div"), t.innerHTML = '<span class="material-icons success-icon svelte-6iq55z">check_circle</span> <h1 class="svelte-6iq55z">2FA enabled \u2014 save your backup codes</h1>', n = g(), o = d("p"), o.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, s = g(), l = d("div");
            for (let m = 0; m < F.length; m += 1) F[m].c();
            r = g(), a = d("div"), u = d("button"), u.innerHTML = `<span class="material-icons svelte-6iq55z">download</span>
          Download as text file`, f = g(), E = d("button"), E.textContent = "I've saved my backup codes", c(t, "class", "codes-header svelte-6iq55z"), c(o, "class", "hint warning svelte-6iq55z"), c(l, "class", "backup-grid svelte-6iq55z"), c(u, "class", "btn-ghost svelte-6iq55z"), c(E, "class", "btn-primary svelte-6iq55z"), c(a, "class", "codes-actions svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(m, h) {
            T(m, e, h), i(e, t), i(e, n), i(e, o), i(e, s), i(e, l);
            for (let v = 0; v < F.length; v += 1) F[v] && F[v].m(l, null);
            i(e, r), i(e, a), i(a, u), i(a, f), i(a, E), C || (B = [
              O(u, "click", x[8]),
              O(E, "click", x[9])
            ], C = true);
          },
          p(m, h) {
            if (h & 16) {
              A = E0(m[4]);
              let v;
              for (v = 0; v < A.length; v += 1) {
                const b = To(m, A, v);
                F[v] ? F[v].p(b, h) : (F[v] = So(b), F[v].c(), F[v].m(l, null));
              }
              for (; v < F.length; v += 1) F[v].d(1);
              F.length = A.length;
            }
          },
          d(m) {
            m && P(e), V0(F, m), C = false, s0(B);
          }
        };
      }
      function e8(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D, p, k, w, y, S = x[5] ? "Verifying\u2026" : "Enable 2FA", M, I, L, N, q, R, j, H = x[6] && Io(x);
        return {
          c() {
            e = d("div"), t = d("div"), n = d("button"), n.innerHTML = '<span class="material-icons svelte-6iq55z">arrow_back</span>', o = g(), s = d("h1"), s.textContent = "Set up authenticator app", l = g(), r = d("p"), r.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, a = g(), u = d("div"), f = d("img"), C = g(), B = d("details"), A = d("summary"), A.textContent = "Can't scan? Enter the key manually", F = g(), m = d("code"), h = z(x[1]), v = g(), b = d("form"), _ = d("label"), D = z(`Authenticator code
          `), p = d("input"), k = g(), H && H.c(), w = g(), y = d("button"), M = z(S), L = g(), N = d("button"), q = z("Cancel"), c(n, "class", "back-btn svelte-6iq55z"), c(n, "type", "button"), c(s, "class", "svelte-6iq55z"), c(t, "class", "card-header svelte-6iq55z"), c(r, "class", "hint svelte-6iq55z"), Vx(f.src, E = x[2]) || c(f, "src", E), c(f, "alt", "TOTP QR code"), c(f, "width", "200"), c(f, "height", "200"), c(f, "class", "svelte-6iq55z"), c(u, "class", "qr-wrap svelte-6iq55z"), c(A, "class", "svelte-6iq55z"), c(m, "class", "secret-key svelte-6iq55z"), c(B, "class", "manual-entry svelte-6iq55z"), c(p, "type", "text"), c(p, "inputmode", "numeric"), c(p, "pattern", "[0-9]*"), c(p, "maxlength", "6"), p.required = true, c(p, "autocomplete", "one-time-code"), c(p, "placeholder", "000000"), c(p, "class", "svelte-6iq55z"), c(_, "class", "svelte-6iq55z"), c(y, "type", "submit"), c(y, "class", "btn-primary svelte-6iq55z"), y.disabled = I = x[5] || x[3].length !== 6, c(N, "type", "button"), c(N, "class", "btn-ghost svelte-6iq55z"), N.disabled = x[5], c(b, "class", "otp-form svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(Q, K) {
            T(Q, e, K), i(e, t), i(t, n), i(t, o), i(t, s), i(e, l), i(e, r), i(e, a), i(e, u), i(u, f), i(e, C), i(e, B), i(B, A), i(B, F), i(B, m), i(m, h), i(e, v), i(e, b), i(b, _), i(_, D), i(_, p), x0(p, x[3]), i(b, k), H && H.m(b, null), i(b, w), i(b, y), i(y, M), i(b, L), i(b, N), i(N, q), R || (j = [
              O(n, "click", x[10]),
              O(p, "input", x[11]),
              O(N, "click", x[10]),
              O(b, "submit", re(x[7]))
            ], R = true);
          },
          p(Q, K) {
            K & 4 && !Vx(f.src, E = Q[2]) && c(f, "src", E), K & 2 && V(h, Q[1]), K & 8 && p.value !== Q[3] && x0(p, Q[3]), Q[6] ? H ? H.p(Q, K) : (H = Io(Q), H.c(), H.m(b, w)) : H && (H.d(1), H = null), K & 32 && S !== (S = Q[5] ? "Verifying\u2026" : "Enable 2FA") && V(M, S), K & 40 && I !== (I = Q[5] || Q[3].length !== 6) && (y.disabled = I), K & 32 && (N.disabled = Q[5]);
          },
          d(Q) {
            Q && P(e), H && H.d(), R = false, s0(j);
          }
        };
      }
      function t8(x) {
        let e, t, n, o, s, l, r;
        return {
          c() {
            e = d("div"), t = d("p"), n = z(x[6]), o = g(), s = d("button"), s.textContent = "Back to Settings", c(t, "class", "error svelte-6iq55z"), c(s, "class", "btn-ghost svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(a, u) {
            T(a, e, u), i(e, t), i(t, n), i(e, o), i(e, s), l || (r = O(s, "click", x[10]), l = true);
          },
          p(a, u) {
            u & 64 && V(n, a[6]);
          },
          d(a) {
            a && P(e), l = false, r();
          }
        };
      }
      function x8(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Setting up\u2026", c(e, "class", "muted svelte-6iq55z");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function So(x) {
        let e, t = x[12] + "", n;
        return {
          c() {
            e = d("code"), n = z(t), c(e, "class", "backup-code svelte-6iq55z");
          },
          m(o, s) {
            T(o, e, s), i(e, n);
          },
          p(o, s) {
            s & 16 && t !== (t = o[12] + "") && V(n, t);
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
            e = d("p"), t = z(x[6]), c(e, "class", "error svelte-6iq55z");
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
      function n8(x) {
        let e, t, n, o;
        e = new ne({});
        function s(a, u) {
          if (a[0] === "loading") return x8;
          if (a[0] === "error") return t8;
          if (a[0] === "scan") return e8;
          if (a[0] === "codes") return $9;
        }
        let l = s(x), r = l && l(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), r && r.c(), c(n, "class", "svelte-6iq55z");
          },
          m(a, u) {
            b0(e, a, u), T(a, t, u), T(a, n, u), r && r.m(n, null), o = true;
          },
          p(a, [u]) {
            l === (l = s(a)) && r ? r.p(a, u) : (r && r.d(1), r = l && l(a), r && (r.c(), r.m(n, null)));
          },
          i(a) {
            o || (d0(e.$$.fragment, a), o = true);
          },
          o(a) {
            C0(e.$$.fragment, a), o = false;
          },
          d(a) {
            a && (P(t), P(n)), g0(e, a), r && r.d();
          }
        };
      }
      function o8(x, e, t) {
        let n = "loading", o = "", s = "", l = "", r = [], a = false, u = null;
        z0(async () => {
          if (!G0()) {
            i0("/login");
            return;
          }
          try {
            const { secret: F, uri: m } = await oa();
            t(1, o = F), t(2, s = await ve.toDataURL(m, {
              width: 200,
              margin: 1
            })), t(0, n = "scan");
          } catch (F) {
            t(6, u = F.message), t(0, n = "error");
          }
        });
        async function f() {
          t(6, u = null), t(5, a = true);
          try {
            const { backup_codes: F } = await sa(o, l);
            t(4, r = F), Xe.set(true), t(0, n = "codes");
          } catch (F) {
            t(6, u = F.message);
          } finally {
            t(5, a = false);
          }
        }
        function E() {
          const F = r.join(`
`), m = new Blob([
            F
          ], {
            type: "text/plain"
          }), h = URL.createObjectURL(m), v = document.createElement("a");
          v.href = h, v.download = "backup-codes.txt", v.click(), URL.revokeObjectURL(h);
        }
        function C() {
          i0("/settings");
        }
        function B() {
          i0("/settings");
        }
        function A() {
          l = this.value, t(3, l);
        }
        return [
          n,
          o,
          s,
          l,
          r,
          a,
          u,
          f,
          E,
          C,
          B,
          A
        ];
      }
      class s8 extends D0 {
        constructor(e) {
          super(), p0(this, e, o8, n8, A0, {});
        }
      }
      var $s = {
        exports: {}
      };
      (function(x, e) {
        (function(n, o) {
          x.exports = o();
        })(typeof self < "u" ? self : Ac, function() {
          return function(t) {
            var n = {};
            function o(s) {
              if (n[s]) return n[s].exports;
              var l = n[s] = {
                i: s,
                l: false,
                exports: {}
              };
              return t[s].call(l.exports, l, l.exports, o), l.l = true, l.exports;
            }
            return o.m = t, o.c = n, o.d = function(s, l, r) {
              o.o(s, l) || Object.defineProperty(s, l, {
                configurable: false,
                enumerable: true,
                get: r
              });
            }, o.n = function(s) {
              var l = s && s.__esModule ? function() {
                return s.default;
              } : function() {
                return s;
              };
              return o.d(l, "a", l), l;
            }, o.o = function(s, l) {
              return Object.prototype.hasOwnProperty.call(s, l);
            }, o.p = "", o(o.s = 3);
          }([
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = function() {
                function l(r, a) {
                  this.width = a, this.height = r.length / a, this.data = r;
                }
                return l.createEmpty = function(r, a) {
                  return new l(new Uint8ClampedArray(r * a), r);
                }, l.prototype.get = function(r, a) {
                  return r < 0 || r >= this.width || a < 0 || a >= this.height ? false : !!this.data[a * this.width + r];
                }, l.prototype.set = function(r, a, u) {
                  this.data[a * this.width + r] = u ? 1 : 0;
                }, l.prototype.setRegion = function(r, a, u, f, E) {
                  for (var C = a; C < a + f; C++) for (var B = r; B < r + u; B++) this.set(B, C, !!E);
                }, l;
              }();
              n.BitMatrix = s;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(2);
              function l(a, u) {
                return a ^ u;
              }
              n.addOrSubtractGF = l;
              var r = function() {
                function a(u, f, E) {
                  this.primitive = u, this.size = f, this.generatorBase = E, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                  for (var C = 1, B = 0; B < this.size; B++) this.expTable[B] = C, C = C * 2, C >= this.size && (C = (C ^ this.primitive) & this.size - 1);
                  for (var B = 0; B < this.size - 1; B++) this.logTable[this.expTable[B]] = B;
                  this.zero = new s.default(this, Uint8ClampedArray.from([
                    0
                  ])), this.one = new s.default(this, Uint8ClampedArray.from([
                    1
                  ]));
                }
                return a.prototype.multiply = function(u, f) {
                  return u === 0 || f === 0 ? 0 : this.expTable[(this.logTable[u] + this.logTable[f]) % (this.size - 1)];
                }, a.prototype.inverse = function(u) {
                  if (u === 0) throw new Error("Can't invert 0");
                  return this.expTable[this.size - this.logTable[u] - 1];
                }, a.prototype.buildMonomial = function(u, f) {
                  if (u < 0) throw new Error("Invalid monomial degree less than 0");
                  if (f === 0) return this.zero;
                  var E = new Uint8ClampedArray(u + 1);
                  return E[0] = f, new s.default(this, E);
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
              var s = o(1), l = function() {
                function r(a, u) {
                  if (u.length === 0) throw new Error("No coefficients.");
                  this.field = a;
                  var f = u.length;
                  if (f > 1 && u[0] === 0) {
                    for (var E = 1; E < f && u[E] === 0; ) E++;
                    if (E === f) this.coefficients = a.zero.coefficients;
                    else {
                      this.coefficients = new Uint8ClampedArray(f - E);
                      for (var C = 0; C < this.coefficients.length; C++) this.coefficients[C] = u[E + C];
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
                  var f = this.coefficients, E = a.coefficients;
                  f.length > E.length && (u = [
                    E,
                    f
                  ], f = u[0], E = u[1]);
                  for (var C = new Uint8ClampedArray(E.length), B = E.length - f.length, A = 0; A < B; A++) C[A] = E[A];
                  for (var A = B; A < E.length; A++) C[A] = s.addOrSubtractGF(f[A - B], E[A]);
                  return new r(this.field, C);
                }, r.prototype.multiply = function(a) {
                  if (a === 0) return this.field.zero;
                  if (a === 1) return this;
                  for (var u = this.coefficients.length, f = new Uint8ClampedArray(u), E = 0; E < u; E++) f[E] = this.field.multiply(this.coefficients[E], a);
                  return new r(this.field, f);
                }, r.prototype.multiplyPoly = function(a) {
                  if (this.isZero() || a.isZero()) return this.field.zero;
                  for (var u = this.coefficients, f = u.length, E = a.coefficients, C = E.length, B = new Uint8ClampedArray(f + C - 1), A = 0; A < f; A++) for (var F = u[A], m = 0; m < C; m++) B[A + m] = s.addOrSubtractGF(B[A + m], this.field.multiply(F, E[m]));
                  return new r(this.field, B);
                }, r.prototype.multiplyByMonomial = function(a, u) {
                  if (a < 0) throw new Error("Invalid degree less than 0");
                  if (u === 0) return this.field.zero;
                  for (var f = this.coefficients.length, E = new Uint8ClampedArray(f + a), C = 0; C < f; C++) E[C] = this.field.multiply(this.coefficients[C], u);
                  return new r(this.field, E);
                }, r.prototype.evaluateAt = function(a) {
                  var u = 0;
                  if (a === 0) return this.getCoefficient(0);
                  var f = this.coefficients.length;
                  if (a === 1) return this.coefficients.forEach(function(C) {
                    u = s.addOrSubtractGF(u, C);
                  }), u;
                  u = this.coefficients[0];
                  for (var E = 1; E < f; E++) u = s.addOrSubtractGF(this.field.multiply(a, u), this.coefficients[E]);
                  return u;
                }, r;
              }();
              n.default = l;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(4), l = o(5), r = o(11), a = o(12);
              function u(C) {
                var B = a.locate(C);
                if (!B) return null;
                for (var A = 0, F = B; A < F.length; A++) {
                  var m = F[A], h = r.extract(C, m), v = l.decode(h.matrix);
                  if (v) return {
                    binaryData: v.bytes,
                    data: v.text,
                    chunks: v.chunks,
                    version: v.version,
                    location: {
                      topRightCorner: h.mappingFunction(m.dimension, 0),
                      topLeftCorner: h.mappingFunction(0, 0),
                      bottomRightCorner: h.mappingFunction(m.dimension, m.dimension),
                      bottomLeftCorner: h.mappingFunction(0, m.dimension),
                      topRightFinderPattern: m.topRight,
                      topLeftFinderPattern: m.topLeft,
                      bottomLeftFinderPattern: m.bottomLeft,
                      bottomRightAlignmentPattern: m.alignmentPattern
                    }
                  };
                }
                return null;
              }
              var f = {
                inversionAttempts: "attemptBoth"
              };
              function E(C, B, A, F) {
                F === void 0 && (F = {});
                var m = f;
                Object.keys(m || {}).forEach(function(k) {
                  m[k] = F[k] || m[k];
                });
                var h = m.inversionAttempts === "attemptBoth" || m.inversionAttempts === "invertFirst", v = m.inversionAttempts === "onlyInvert" || m.inversionAttempts === "invertFirst", b = s.binarize(C, B, A, h), _ = b.binarized, D = b.inverted, p = u(v ? D : _);
                return !p && (m.inversionAttempts === "attemptBoth" || m.inversionAttempts === "invertFirst") && (p = u(v ? _ : D)), p;
              }
              E.default = E, n.default = E;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(0), l = 8, r = 24;
              function a(E, C, B) {
                return E < C ? C : E > B ? B : E;
              }
              var u = function() {
                function E(C, B) {
                  this.width = C, this.data = new Uint8ClampedArray(C * B);
                }
                return E.prototype.get = function(C, B) {
                  return this.data[B * this.width + C];
                }, E.prototype.set = function(C, B, A) {
                  this.data[B * this.width + C] = A;
                }, E;
              }();
              function f(E, C, B, A) {
                if (E.length !== C * B * 4) throw new Error("Malformed data passed to binarizer.");
                for (var F = new u(C, B), m = 0; m < C; m++) for (var h = 0; h < B; h++) {
                  var v = E[(h * C + m) * 4 + 0], b = E[(h * C + m) * 4 + 1], _ = E[(h * C + m) * 4 + 2];
                  F.set(m, h, 0.2126 * v + 0.7152 * b + 0.0722 * _);
                }
                for (var D = Math.ceil(C / l), p = Math.ceil(B / l), k = new u(D, p), w = 0; w < p; w++) for (var y = 0; y < D; y++) {
                  for (var S = 0, M = 1 / 0, I = 0, h = 0; h < l; h++) for (var m = 0; m < l; m++) {
                    var L = F.get(y * l + m, w * l + h);
                    S += L, M = Math.min(M, L), I = Math.max(I, L);
                  }
                  var N = S / Math.pow(l, 2);
                  if (I - M <= r && (N = M / 2, w > 0 && y > 0)) {
                    var q = (k.get(y, w - 1) + 2 * k.get(y - 1, w) + k.get(y - 1, w - 1)) / 4;
                    M < q && (N = q);
                  }
                  k.set(y, w, N);
                }
                var R = s.BitMatrix.createEmpty(C, B), j = null;
                A && (j = s.BitMatrix.createEmpty(C, B));
                for (var w = 0; w < p; w++) for (var y = 0; y < D; y++) {
                  for (var H = a(y, 2, D - 3), Q = a(w, 2, p - 3), S = 0, K = -2; K <= 2; K++) for (var G = -2; G <= 2; G++) S += k.get(H + K, Q + G);
                  for (var U = S / 25, K = 0; K < l; K++) for (var G = 0; G < l; G++) {
                    var m = y * l + K, h = w * l + G, J = F.get(m, h);
                    R.set(m, h, J <= U), A && j.set(m, h, !(J <= U));
                  }
                }
                return A ? {
                  binarized: R,
                  inverted: j
                } : {
                  binarized: R
                };
              }
              n.binarize = f;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(0), l = o(6), r = o(9), a = o(10);
              function u(_, D) {
                for (var p = _ ^ D, k = 0; p; ) k++, p &= p - 1;
                return k;
              }
              function f(_, D) {
                return D << 1 | _;
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
                var D = 17 + 4 * _.versionNumber, p = s.BitMatrix.createEmpty(D, D);
                p.setRegion(0, 0, 9, 9, true), p.setRegion(D - 8, 0, 8, 9, true), p.setRegion(0, D - 8, 9, 8, true);
                for (var k = 0, w = _.alignmentPatternCenters; k < w.length; k++) for (var y = w[k], S = 0, M = _.alignmentPatternCenters; S < M.length; S++) {
                  var I = M[S];
                  y === 6 && I === 6 || y === 6 && I === D - 7 || y === D - 7 && I === 6 || p.setRegion(y - 2, I - 2, 5, 5, true);
                }
                return p.setRegion(6, 9, 1, D - 17, true), p.setRegion(9, 6, D - 17, 1, true), _.versionNumber > 6 && (p.setRegion(D - 11, 0, 3, 6, true), p.setRegion(0, D - 11, 6, 3, true)), p;
              }
              function A(_, D, p) {
                for (var k = C[p.dataMask], w = _.height, y = B(D), S = [], M = 0, I = 0, L = true, N = w - 1; N > 0; N -= 2) {
                  N === 6 && N--;
                  for (var q = 0; q < w; q++) for (var R = L ? w - 1 - q : q, j = 0; j < 2; j++) {
                    var H = N - j;
                    if (!y.get(H, R)) {
                      I++;
                      var Q = _.get(H, R);
                      k({
                        y: R,
                        x: H
                      }) && (Q = !Q), M = f(Q, M), I === 8 && (S.push(M), I = 0, M = 0);
                    }
                  }
                  L = !L;
                }
                return S;
              }
              function F(_) {
                var D = _.height, p = Math.floor((D - 17) / 4);
                if (p <= 6) return a.VERSIONS[p - 1];
                for (var k = 0, w = 5; w >= 0; w--) for (var y = D - 9; y >= D - 11; y--) k = f(_.get(y, w), k);
                for (var S = 0, y = 5; y >= 0; y--) for (var w = D - 9; w >= D - 11; w--) S = f(_.get(y, w), S);
                for (var M = 1 / 0, I, L = 0, N = a.VERSIONS; L < N.length; L++) {
                  var q = N[L];
                  if (q.infoBits === k || q.infoBits === S) return q;
                  var R = u(k, q.infoBits);
                  R < M && (I = q, M = R), R = u(S, q.infoBits), R < M && (I = q, M = R);
                }
                if (M <= 3) return I;
              }
              function m(_) {
                for (var D = 0, p = 0; p <= 8; p++) p !== 6 && (D = f(_.get(p, 8), D));
                for (var k = 7; k >= 0; k--) k !== 6 && (D = f(_.get(8, k), D));
                for (var w = _.height, y = 0, k = w - 1; k >= w - 7; k--) y = f(_.get(8, k), y);
                for (var p = w - 8; p < w; p++) y = f(_.get(p, 8), y);
                for (var S = 1 / 0, M = null, I = 0, L = E; I < L.length; I++) {
                  var N = L[I], q = N.bits, R = N.formatInfo;
                  if (q === D || q === y) return R;
                  var j = u(D, q);
                  j < S && (M = R, S = j), D !== y && (j = u(y, q), j < S && (M = R, S = j));
                }
                return S <= 3 ? M : null;
              }
              function h(_, D, p) {
                var k = D.errorCorrectionLevels[p], w = [], y = 0;
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
                for (; _.length > 0; ) for (var j = 0, H = w; j < H.length; j++) {
                  var N = H[j];
                  N.codewords.push(_.shift());
                }
                return w;
              }
              function v(_) {
                var D = F(_);
                if (!D) return null;
                var p = m(_);
                if (!p) return null;
                var k = A(_, D, p), w = h(k, D, p.errorCorrectionLevel);
                if (!w) return null;
                for (var y = w.reduce(function(j, H) {
                  return j + H.numDataCodewords;
                }, 0), S = new Uint8ClampedArray(y), M = 0, I = 0, L = w; I < L.length; I++) {
                  var N = L[I], q = r.decode(N.codewords, N.codewords.length - N.numDataCodewords);
                  if (!q) return null;
                  for (var R = 0; R < N.numDataCodewords; R++) S[M++] = q[R];
                }
                try {
                  return l.decode(S, D.versionNumber);
                } catch {
                  return null;
                }
              }
              function b(_) {
                if (_ == null) return null;
                var D = v(_);
                if (D) return D;
                for (var p = 0; p < _.width; p++) for (var k = p + 1; k < _.height; k++) _.get(p, k) !== _.get(k, p) && (_.set(p, k, !_.get(p, k)), _.set(k, p, !_.get(k, p)));
                return v(_);
              }
              n.decode = b;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(7), l = o(8), r;
              (function(F) {
                F.Numeric = "numeric", F.Alphanumeric = "alphanumeric", F.Byte = "byte", F.Kanji = "kanji", F.ECI = "eci";
              })(r = n.Mode || (n.Mode = {}));
              var a;
              (function(F) {
                F[F.Terminator = 0] = "Terminator", F[F.Numeric = 1] = "Numeric", F[F.Alphanumeric = 2] = "Alphanumeric", F[F.Byte = 4] = "Byte", F[F.Kanji = 8] = "Kanji", F[F.ECI = 7] = "ECI";
              })(a || (a = {}));
              function u(F, m) {
                for (var h = [], v = "", b = [
                  10,
                  12,
                  14
                ][m], _ = F.readBits(b); _ >= 3; ) {
                  var D = F.readBits(10);
                  if (D >= 1e3) throw new Error("Invalid numeric value above 999");
                  var p = Math.floor(D / 100), k = Math.floor(D / 10) % 10, w = D % 10;
                  h.push(48 + p, 48 + k, 48 + w), v += p.toString() + k.toString() + w.toString(), _ -= 3;
                }
                if (_ === 2) {
                  var D = F.readBits(7);
                  if (D >= 100) throw new Error("Invalid numeric value above 99");
                  var p = Math.floor(D / 10), k = D % 10;
                  h.push(48 + p, 48 + k), v += p.toString() + k.toString();
                } else if (_ === 1) {
                  var D = F.readBits(4);
                  if (D >= 10) throw new Error("Invalid numeric value above 9");
                  h.push(48 + D), v += D.toString();
                }
                return {
                  bytes: h,
                  text: v
                };
              }
              var f = [
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
              function E(F, m) {
                for (var h = [], v = "", b = [
                  9,
                  11,
                  13
                ][m], _ = F.readBits(b); _ >= 2; ) {
                  var D = F.readBits(11), p = Math.floor(D / 45), k = D % 45;
                  h.push(f[p].charCodeAt(0), f[k].charCodeAt(0)), v += f[p] + f[k], _ -= 2;
                }
                if (_ === 1) {
                  var p = F.readBits(6);
                  h.push(f[p].charCodeAt(0)), v += f[p];
                }
                return {
                  bytes: h,
                  text: v
                };
              }
              function C(F, m) {
                for (var h = [], v = "", b = [
                  8,
                  16,
                  16
                ][m], _ = F.readBits(b), D = 0; D < _; D++) {
                  var p = F.readBits(8);
                  h.push(p);
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
              function B(F, m) {
                for (var h = [], v = "", b = [
                  8,
                  10,
                  12
                ][m], _ = F.readBits(b), D = 0; D < _; D++) {
                  var p = F.readBits(13), k = Math.floor(p / 192) << 8 | p % 192;
                  k < 7936 ? k += 33088 : k += 49472, h.push(k >> 8, k & 255), v += String.fromCharCode(l.shiftJISTable[k]);
                }
                return {
                  bytes: h,
                  text: v
                };
              }
              function A(F, m) {
                for (var h, v, b, _, D = new s.BitStream(F), p = m <= 9 ? 0 : m <= 26 ? 1 : 2, k = {
                  text: "",
                  bytes: [],
                  chunks: [],
                  version: m
                }; D.available() >= 4; ) {
                  var w = D.readBits(4);
                  if (w === a.Terminator) return k;
                  if (w === a.ECI) D.readBits(1) === 0 ? k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: D.readBits(7)
                  }) : D.readBits(1) === 0 ? k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: D.readBits(14)
                  }) : D.readBits(1) === 0 ? k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: D.readBits(21)
                  }) : k.chunks.push({
                    type: r.ECI,
                    assignmentNumber: -1
                  });
                  else if (w === a.Numeric) {
                    var y = u(D, p);
                    k.text += y.text, (h = k.bytes).push.apply(h, y.bytes), k.chunks.push({
                      type: r.Numeric,
                      text: y.text
                    });
                  } else if (w === a.Alphanumeric) {
                    var S = E(D, p);
                    k.text += S.text, (v = k.bytes).push.apply(v, S.bytes), k.chunks.push({
                      type: r.Alphanumeric,
                      text: S.text
                    });
                  } else if (w === a.Byte) {
                    var M = C(D, p);
                    k.text += M.text, (b = k.bytes).push.apply(b, M.bytes), k.chunks.push({
                      type: r.Byte,
                      bytes: M.bytes,
                      text: M.text
                    });
                  } else if (w === a.Kanji) {
                    var I = B(D, p);
                    k.text += I.text, (_ = k.bytes).push.apply(_, I.bytes), k.chunks.push({
                      type: r.Kanji,
                      bytes: I.bytes,
                      text: I.text
                    });
                  }
                }
                if (D.available() === 0 || D.readBits(D.available()) === 0) return k;
              }
              n.decode = A;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = function() {
                function l(r) {
                  this.byteOffset = 0, this.bitOffset = 0, this.bytes = r;
                }
                return l.prototype.readBits = function(r) {
                  if (r < 1 || r > 32 || r > this.available()) throw new Error("Cannot read " + r.toString() + " bits");
                  var a = 0;
                  if (this.bitOffset > 0) {
                    var u = 8 - this.bitOffset, f = r < u ? r : u, E = u - f, C = 255 >> 8 - f << E;
                    a = (this.bytes[this.byteOffset] & C) >> E, r -= f, this.bitOffset += f, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                  }
                  if (r > 0) {
                    for (; r >= 8; ) a = a << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, r -= 8;
                    if (r > 0) {
                      var E = 8 - r, C = 255 >> E << E;
                      a = a << r | (this.bytes[this.byteOffset] & C) >> E, this.bitOffset += r;
                    }
                  }
                  return a;
                }, l.prototype.available = function() {
                  return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
                }, l;
              }();
              n.BitStream = s;
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
              var s = o(1), l = o(2);
              function r(E, C, B, A) {
                var F;
                C.degree() < B.degree() && (F = [
                  B,
                  C
                ], C = F[0], B = F[1]);
                for (var m = C, h = B, v = E.zero, b = E.one; h.degree() >= A / 2; ) {
                  var _ = m, D = v;
                  if (m = h, v = b, m.isZero()) return null;
                  h = _;
                  for (var p = E.zero, k = m.getCoefficient(m.degree()), w = E.inverse(k); h.degree() >= m.degree() && !h.isZero(); ) {
                    var y = h.degree() - m.degree(), S = E.multiply(h.getCoefficient(h.degree()), w);
                    p = p.addOrSubtract(E.buildMonomial(y, S)), h = h.addOrSubtract(m.multiplyByMonomial(y, S));
                  }
                  if (b = p.multiplyPoly(v).addOrSubtract(D), h.degree() >= m.degree()) return null;
                }
                var M = b.getCoefficient(0);
                if (M === 0) return null;
                var I = E.inverse(M);
                return [
                  b.multiply(I),
                  h.multiply(I)
                ];
              }
              function a(E, C) {
                var B = C.degree();
                if (B === 1) return [
                  C.getCoefficient(1)
                ];
                for (var A = new Array(B), F = 0, m = 1; m < E.size && F < B; m++) C.evaluateAt(m) === 0 && (A[F] = E.inverse(m), F++);
                return F !== B ? null : A;
              }
              function u(E, C, B) {
                for (var A = B.length, F = new Array(A), m = 0; m < A; m++) {
                  for (var h = E.inverse(B[m]), v = 1, b = 0; b < A; b++) m !== b && (v = E.multiply(v, s.addOrSubtractGF(1, E.multiply(B[b], h))));
                  F[m] = E.multiply(C.evaluateAt(h), E.inverse(v)), E.generatorBase !== 0 && (F[m] = E.multiply(F[m], h));
                }
                return F;
              }
              function f(E, C) {
                var B = new Uint8ClampedArray(E.length);
                B.set(E);
                for (var A = new s.default(285, 256, 0), F = new l.default(A, B), m = new Uint8ClampedArray(C), h = false, v = 0; v < C; v++) {
                  var b = F.evaluateAt(A.exp(v + A.generatorBase));
                  m[m.length - 1 - v] = b, b !== 0 && (h = true);
                }
                if (!h) return B;
                var _ = new l.default(A, m), D = r(A, A.buildMonomial(C, 1), _, C);
                if (D === null) return null;
                var p = a(A, D[0]);
                if (p == null) return null;
                for (var k = u(A, D[1], p), w = 0; w < p.length; w++) {
                  var y = B.length - 1 - A.log(p[w]);
                  if (y < 0) return null;
                  B[y] = s.addOrSubtractGF(B[y], k[w]);
                }
                return B;
              }
              n.decode = f;
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
              var s = o(0);
              function l(f, E, C, B) {
                var A = f.x - E.x + C.x - B.x, F = f.y - E.y + C.y - B.y;
                if (A === 0 && F === 0) return {
                  a11: E.x - f.x,
                  a12: E.y - f.y,
                  a13: 0,
                  a21: C.x - E.x,
                  a22: C.y - E.y,
                  a23: 0,
                  a31: f.x,
                  a32: f.y,
                  a33: 1
                };
                var m = E.x - C.x, h = B.x - C.x, v = E.y - C.y, b = B.y - C.y, _ = m * b - h * v, D = (A * b - h * F) / _, p = (m * F - A * v) / _;
                return {
                  a11: E.x - f.x + D * E.x,
                  a12: E.y - f.y + D * E.y,
                  a13: D,
                  a21: B.x - f.x + p * B.x,
                  a22: B.y - f.y + p * B.y,
                  a23: p,
                  a31: f.x,
                  a32: f.y,
                  a33: 1
                };
              }
              function r(f, E, C, B) {
                var A = l(f, E, C, B);
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
              function a(f, E) {
                return {
                  a11: f.a11 * E.a11 + f.a21 * E.a12 + f.a31 * E.a13,
                  a12: f.a12 * E.a11 + f.a22 * E.a12 + f.a32 * E.a13,
                  a13: f.a13 * E.a11 + f.a23 * E.a12 + f.a33 * E.a13,
                  a21: f.a11 * E.a21 + f.a21 * E.a22 + f.a31 * E.a23,
                  a22: f.a12 * E.a21 + f.a22 * E.a22 + f.a32 * E.a23,
                  a23: f.a13 * E.a21 + f.a23 * E.a22 + f.a33 * E.a23,
                  a31: f.a11 * E.a31 + f.a21 * E.a32 + f.a31 * E.a33,
                  a32: f.a12 * E.a31 + f.a22 * E.a32 + f.a32 * E.a33,
                  a33: f.a13 * E.a31 + f.a23 * E.a32 + f.a33 * E.a33
                };
              }
              function u(f, E) {
                for (var C = r({
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
                }), B = l(E.topLeft, E.topRight, E.alignmentPattern, E.bottomLeft), A = a(B, C), F = s.BitMatrix.createEmpty(E.dimension, E.dimension), m = function(p, k) {
                  var w = A.a13 * p + A.a23 * k + A.a33;
                  return {
                    x: (A.a11 * p + A.a21 * k + A.a31) / w,
                    y: (A.a12 * p + A.a22 * k + A.a32) / w
                  };
                }, h = 0; h < E.dimension; h++) for (var v = 0; v < E.dimension; v++) {
                  var b = v + 0.5, _ = h + 0.5, D = m(b, _);
                  F.set(v, h, f.get(Math.floor(D.x), Math.floor(D.y)));
                }
                return {
                  matrix: F,
                  mappingFunction: m
                };
              }
              n.extract = u;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = 4, l = 0.5, r = 1.5, a = function(b, _) {
                return Math.sqrt(Math.pow(_.x - b.x, 2) + Math.pow(_.y - b.y, 2));
              };
              function u(b) {
                return b.reduce(function(_, D) {
                  return _ + D;
                });
              }
              function f(b, _, D) {
                var p, k, w, y, S = a(b, _), M = a(_, D), I = a(b, D), L, N, q;
                return M >= S && M >= I ? (p = [
                  _,
                  b,
                  D
                ], L = p[0], N = p[1], q = p[2]) : I >= M && I >= S ? (k = [
                  b,
                  _,
                  D
                ], L = k[0], N = k[1], q = k[2]) : (w = [
                  b,
                  D,
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
              function E(b, _, D, p) {
                var k = (u(B(b, D, p, 5)) / 7 + u(B(b, _, p, 5)) / 7 + u(B(D, b, p, 5)) / 7 + u(B(_, b, p, 5)) / 7) / 4;
                if (k < 1) throw new Error("Invalid module size");
                var w = Math.round(a(b, _) / k), y = Math.round(a(b, D) / k), S = Math.floor((w + y) / 2) + 7;
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
              function C(b, _, D, p) {
                var k = [
                  {
                    x: Math.floor(b.x),
                    y: Math.floor(b.y)
                  }
                ], w = Math.abs(_.y - b.y) > Math.abs(_.x - b.x), y, S, M, I;
                w ? (y = Math.floor(b.y), S = Math.floor(b.x), M = Math.floor(_.y), I = Math.floor(_.x)) : (y = Math.floor(b.x), S = Math.floor(b.y), M = Math.floor(_.x), I = Math.floor(_.y));
                for (var L = Math.abs(M - y), N = Math.abs(I - S), q = Math.floor(-L / 2), R = y < M ? 1 : -1, j = S < I ? 1 : -1, H = true, Q = y, K = S; Q !== M + R; Q += R) {
                  var G = w ? K : Q, U = w ? Q : K;
                  if (D.get(G, U) !== H && (H = !H, k.push({
                    x: G,
                    y: U
                  }), k.length === p + 1)) break;
                  if (q += N, q > 0) {
                    if (K === I) break;
                    K += j, q -= L;
                  }
                }
                for (var J = [], Y = 0; Y < p; Y++) k[Y] && k[Y + 1] ? J.push(a(k[Y], k[Y + 1])) : J.push(0);
                return J;
              }
              function B(b, _, D, p) {
                var k, w = _.y - b.y, y = _.x - b.x, S = C(b, _, D, Math.ceil(p / 2)), M = C(b, {
                  x: b.x - y,
                  y: b.y - w
                }, D, Math.ceil(p / 2)), I = S.shift() + M.shift() - 1;
                return (k = M.concat(I)).concat.apply(k, S);
              }
              function A(b, _) {
                var D = u(b) / u(_), p = 0;
                return _.forEach(function(k, w) {
                  p += Math.pow(b[w] - k * D, 2);
                }), {
                  averageSize: D,
                  error: p
                };
              }
              function F(b, _, D) {
                try {
                  var p = B(b, {
                    x: -1,
                    y: b.y
                  }, D, _.length), k = B(b, {
                    x: b.x,
                    y: -1
                  }, D, _.length), w = {
                    x: Math.max(0, b.x - b.y) - 1,
                    y: Math.max(0, b.y - b.x) - 1
                  }, y = B(b, w, D, _.length), S = {
                    x: Math.min(D.width, b.x + b.y) + 1,
                    y: Math.min(D.height, b.y + b.x) + 1
                  }, M = B(b, S, D, _.length), I = A(p, _), L = A(k, _), N = A(y, _), q = A(M, _), R = Math.sqrt(I.error * I.error + L.error * L.error + N.error * N.error + q.error * q.error), j = (I.averageSize + L.averageSize + N.averageSize + q.averageSize) / 4, H = (Math.pow(I.averageSize - j, 2) + Math.pow(L.averageSize - j, 2) + Math.pow(N.averageSize - j, 2) + Math.pow(q.averageSize - j, 2)) / j;
                  return R + H;
                } catch {
                  return 1 / 0;
                }
              }
              function m(b, _) {
                for (var D = Math.round(_.x); b.get(D, Math.round(_.y)); ) D--;
                for (var p = Math.round(_.x); b.get(p, Math.round(_.y)); ) p++;
                for (var k = (D + p) / 2, w = Math.round(_.y); b.get(Math.round(k), w); ) w--;
                for (var y = Math.round(_.y); b.get(Math.round(k), y); ) y++;
                var S = (w + y) / 2;
                return {
                  x: k,
                  y: S
                };
              }
              function h(b) {
                for (var _ = [], D = [], p = [], k = [], w = function(G) {
                  for (var U = 0, J = false, Y = [
                    0,
                    0,
                    0,
                    0,
                    0
                  ], r0 = function(a0) {
                    var l0 = b.get(a0, G);
                    if (l0 === J) U++;
                    else {
                      Y = [
                        Y[1],
                        Y[2],
                        Y[3],
                        Y[4],
                        U
                      ], U = 1, J = l0;
                      var B0 = u(Y) / 7, se = Math.abs(Y[0] - B0) < B0 && Math.abs(Y[1] - B0) < B0 && Math.abs(Y[2] - 3 * B0) < 3 * B0 && Math.abs(Y[3] - B0) < B0 && Math.abs(Y[4] - B0) < B0 && !l0, Z = u(Y.slice(-3)) / 3, n0 = Math.abs(Y[2] - Z) < Z && Math.abs(Y[3] - Z) < Z && Math.abs(Y[4] - Z) < Z && l0;
                      if (se) {
                        var u0 = a0 - Y[3] - Y[4], h0 = u0 - Y[2], v0 = {
                          startX: h0,
                          endX: u0,
                          y: G
                        }, q0 = D.filter(function(w0) {
                          return h0 >= w0.bottom.startX && h0 <= w0.bottom.endX || u0 >= w0.bottom.startX && h0 <= w0.bottom.endX || h0 <= w0.bottom.startX && u0 >= w0.bottom.endX && Y[2] / (w0.bottom.endX - w0.bottom.startX) < r && Y[2] / (w0.bottom.endX - w0.bottom.startX) > l;
                        });
                        q0.length > 0 ? q0[0].bottom = v0 : D.push({
                          top: v0,
                          bottom: v0
                        });
                      }
                      if (n0) {
                        var Y0 = a0 - Y[4], R0 = Y0 - Y[3], v0 = {
                          startX: R0,
                          y: G,
                          endX: Y0
                        }, q0 = k.filter(function(I0) {
                          return R0 >= I0.bottom.startX && R0 <= I0.bottom.endX || Y0 >= I0.bottom.startX && R0 <= I0.bottom.endX || R0 <= I0.bottom.startX && Y0 >= I0.bottom.endX && Y[2] / (I0.bottom.endX - I0.bottom.startX) < r && Y[2] / (I0.bottom.endX - I0.bottom.startX) > l;
                        });
                        q0.length > 0 ? q0[0].bottom = v0 : k.push({
                          top: v0,
                          bottom: v0
                        });
                      }
                    }
                  }, c0 = -1; c0 <= b.width; c0++) r0(c0);
                  _.push.apply(_, D.filter(function(a0) {
                    return a0.bottom.y !== G && a0.bottom.y - a0.top.y >= 2;
                  })), D = D.filter(function(a0) {
                    return a0.bottom.y === G;
                  }), p.push.apply(p, k.filter(function(a0) {
                    return a0.bottom.y !== G;
                  })), k = k.filter(function(a0) {
                    return a0.bottom.y === G;
                  });
                }, y = 0; y <= b.height; y++) w(y);
                _.push.apply(_, D.filter(function(G) {
                  return G.bottom.y - G.top.y >= 2;
                })), p.push.apply(p, k);
                var S = _.filter(function(G) {
                  return G.bottom.y - G.top.y >= 2;
                }).map(function(G) {
                  var U = (G.top.startX + G.top.endX + G.bottom.startX + G.bottom.endX) / 4, J = (G.top.y + G.bottom.y + 1) / 2;
                  if (b.get(Math.round(U), Math.round(J))) {
                    var Y = [
                      G.top.endX - G.top.startX,
                      G.bottom.endX - G.bottom.startX,
                      G.bottom.y - G.top.y + 1
                    ], r0 = u(Y) / Y.length, c0 = F({
                      x: Math.round(U),
                      y: Math.round(J)
                    }, [
                      1,
                      1,
                      3,
                      1,
                      1
                    ], b);
                    return {
                      score: c0,
                      x: U,
                      y: J,
                      size: r0
                    };
                  }
                }).filter(function(G) {
                  return !!G;
                }).sort(function(G, U) {
                  return G.score - U.score;
                }).map(function(G, U, J) {
                  if (U > s) return null;
                  var Y = J.filter(function(c0, a0) {
                    return U !== a0;
                  }).map(function(c0) {
                    return {
                      x: c0.x,
                      y: c0.y,
                      score: c0.score + Math.pow(c0.size - G.size, 2) / G.size,
                      size: c0.size
                    };
                  }).sort(function(c0, a0) {
                    return c0.score - a0.score;
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
                }).sort(function(G, U) {
                  return G.score - U.score;
                });
                if (S.length === 0) return null;
                var M = f(S[0].points[0], S[0].points[1], S[0].points[2]), I = M.topRight, L = M.topLeft, N = M.bottomLeft, q = v(b, p, I, L, N), R = [];
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
                var j = m(b, I), H = m(b, L), Q = m(b, N), K = v(b, p, j, H, Q);
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
                    x: j.x,
                    y: j.y
                  },
                  dimension: K.dimension
                }), R.length === 0 ? null : R;
              }
              n.locate = h;
              function v(b, _, D, p, k) {
                var w, y, S;
                try {
                  w = E(p, D, k, b), y = w.dimension, S = w.moduleSize;
                } catch {
                  return null;
                }
                var M = {
                  x: D.x - p.x + k.x,
                  y: D.y - p.y + k.y
                }, I = (a(p, k) + a(p, D)) / 2 / S, L = 1 - 3 / I, N = {
                  x: p.x + L * (M.x - p.x),
                  y: p.y + L * (M.y - p.y)
                }, q = _.map(function(j) {
                  var H = (j.top.startX + j.top.endX + j.bottom.startX + j.bottom.endX) / 4, Q = (j.top.y + j.bottom.y + 1) / 2;
                  if (b.get(Math.floor(H), Math.floor(Q))) {
                    var K = [
                      j.top.endX - j.top.startX,
                      j.bottom.endX - j.bottom.startX,
                      j.bottom.y - j.top.y + 1
                    ];
                    u(K) / K.length;
                    var G = F({
                      x: Math.floor(H),
                      y: Math.floor(Q)
                    }, [
                      1,
                      1,
                      1
                    ], b), U = G + a({
                      x: H,
                      y: Q
                    }, N);
                    return {
                      x: H,
                      y: Q,
                      score: U
                    };
                  }
                }).filter(function(j) {
                  return !!j;
                }).sort(function(j, H) {
                  return j.score - H.score;
                }), R = I >= 15 && q.length ? q[0] : N;
                return {
                  alignmentPattern: R,
                  dimension: y
                };
              }
            }
          ]).default;
        });
      })($s);
      var l8 = $s.exports;
      const r8 = Fc(l8);
      function Mo(x, e, t) {
        const n = x.slice();
        return n[44] = e[t], n;
      }
      function a8(x) {
        let e;
        return {
          c() {
            e = d("a"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', c(e, "class", "back-btn svelte-qzc8r5"), c(e, "href", "#/home");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function i8(x) {
        let e, t, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', c(e, "class", "back-btn svelte-qzc8r5");
          },
          m(o, s) {
            T(o, e, s), t || (n = O(e, "click", x[17]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function c8(x) {
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
      function u8(x) {
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
      function f8(x) {
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
      function d8(x) {
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
      function E8(x) {
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
      function B8(x) {
        let e, t, n, o, s, l, r, a, u = x[13] ? "Saving\u2026" : "Join group", f, E, C, B, A, F;
        function m(b, _) {
          return b[12]?.name ? _8 : v8;
        }
        let h = m(x), v = h(x);
        return {
          c() {
            e = d("section"), t = d("p"), t.textContent = "Join group encounter?", n = g(), v.c(), o = g(), s = d("div"), l = d("button"), r = d("span"), r.textContent = "groups", a = g(), f = z(u), E = g(), C = d("button"), B = z("Cancel"), c(t, "class", "section-label svelte-qzc8r5"), c(r, "class", "material-icons svelte-qzc8r5"), c(l, "class", "btn-filled svelte-qzc8r5"), l.disabled = x[13], c(C, "class", "btn-text svelte-qzc8r5"), C.disabled = x[13], c(s, "class", "ongoing-actions svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(b, _) {
            T(b, e, _), i(e, t), i(e, n), v.m(e, null), i(e, o), i(e, s), i(s, l), i(l, r), i(l, a), i(l, f), i(s, E), i(s, C), i(C, B), A || (F = [
              O(l, "click", x[21]),
              O(C, "click", x[17])
            ], A = true);
          },
          p(b, _) {
            h === (h = m(b)) && v ? v.p(b, _) : (v.d(1), v = h(b), v && (v.c(), v.m(e, o))), _[0] & 8192 && u !== (u = b[13] ? "Saving\u2026" : "Join group") && V(f, u), _[0] & 8192 && (l.disabled = b[13]), _[0] & 8192 && (C.disabled = b[13]);
          },
          d(b) {
            b && P(e), v.d(), A = false, s0(F);
          }
        };
      }
      function C8(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m = x[13] && Lo();
        return {
          c() {
            e = d("section"), t = d("p"), t.textContent = "Ongoing relationship?", n = g(), o = d("p"), o.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", s = g(), l = d("div"), r = d("button"), a = d("span"), a.textContent = "favorite", u = z(`
          Yes, ongoing`), f = g(), E = d("button"), C = z("No, one off"), B = g(), m && m.c(), c(t, "class", "section-label svelte-qzc8r5"), c(o, "class", "help-text svelte-qzc8r5"), c(a, "class", "material-icons svelte-qzc8r5"), c(r, "class", "btn-filled svelte-qzc8r5"), r.disabled = x[13], c(E, "class", "btn-outlined svelte-qzc8r5"), E.disabled = x[13], c(l, "class", "ongoing-actions svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(h, v) {
            T(h, e, v), i(e, t), i(e, n), i(e, o), i(e, s), i(e, l), i(l, r), i(r, a), i(r, u), i(l, f), i(l, E), i(E, C), i(e, B), m && m.m(e, null), A || (F = [
              O(r, "click", x[28]),
              O(E, "click", x[29])
            ], A = true);
          },
          p(h, v) {
            v[0] & 8192 && (r.disabled = h[13]), v[0] & 8192 && (E.disabled = h[13]), h[13] ? m || (m = Lo(), m.c(), m.m(e, null)) : m && (m.d(1), m = null);
          },
          d(h) {
            h && P(e), m && m.d(), A = false, s0(F);
          }
        };
      }
      function A8(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D, p = E0(x[11]), k = [];
        for (let y = 0; y < p.length; y += 1) k[y] = No(Mo(x, p, y));
        let w = x[13] && zo();
        return {
          c() {
            e = d("section"), t = d("p"), t.textContent = "Your partner's number", n = g(), o = d("p"), s = z(x[10]), l = g(), r = d("p"), r.textContent = "Ask your partner to confirm this matches their screen.", a = g(), u = d("section"), f = d("p"), f.textContent = "Let your partner scan your code", E = g(), C = d("div"), B = d("div"), A = g(), F = d("section"), m = d("p"), m.textContent = "What is your number?", h = g(), v = d("p"), v.textContent = "Tap the number shown on your screen above.", b = g(), _ = d("div");
            for (let y = 0; y < k.length; y += 1) k[y].c();
            D = g(), w && w.c(), c(t, "class", "section-label svelte-qzc8r5"), c(o, "class", "confirm-number svelte-qzc8r5"), c(r, "class", "help-text svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5"), c(f, "class", "section-label svelte-qzc8r5"), c(B, "class", "qr-inner svelte-qzc8r5"), c(C, "class", "qr-frame svelte-qzc8r5"), c(u, "class", "card pad svelte-qzc8r5"), c(m, "class", "section-label svelte-qzc8r5"), c(v, "class", "help-text svelte-qzc8r5"), c(_, "class", "choices svelte-qzc8r5"), c(F, "class", "card pad svelte-qzc8r5");
          },
          m(y, S) {
            T(y, e, S), i(e, t), i(e, n), i(e, o), i(o, s), i(e, l), i(e, r), T(y, a, S), T(y, u, S), i(u, f), i(u, E), i(u, C), i(C, B), B.innerHTML = x[3], T(y, A, S), T(y, F, S), i(F, m), i(F, h), i(F, v), i(F, b), i(F, _);
            for (let M = 0; M < k.length; M += 1) k[M] && k[M].m(_, null);
            i(F, D), w && w.m(F, null);
          },
          p(y, S) {
            if (S[0] & 1024 && V(s, y[10]), S[0] & 8 && (B.innerHTML = y[3]), S[0] & 272384) {
              p = E0(y[11]);
              let M;
              for (M = 0; M < p.length; M += 1) {
                const I = Mo(y, p, M);
                k[M] ? k[M].p(I, S) : (k[M] = No(I), k[M].c(), k[M].m(_, null));
              }
              for (; M < k.length; M += 1) k[M].d(1);
              k.length = p.length;
            }
            y[13] ? w || (w = zo(), w.c(), w.m(F, null)) : w && (w.d(1), w = null);
          },
          d(y) {
            y && (P(e), P(a), P(u), P(A), P(F)), V0(k, y), w && w.d();
          }
        };
      }
      function F8(x) {
        let e, t, n, o, s, l;
        return {
          c() {
            e = d("div"), t = d("video"), n = g(), o = d("canvas"), s = g(), l = d("div"), l.innerHTML = '<div class="scan-box svelte-qzc8r5"></div> <p class="scan-hint svelte-qzc8r5">Point at your partner&#39;s QR code</p>', t.playsInline = true, c(t, "class", "camera-video svelte-qzc8r5"), c(o, "class", "camera-canvas svelte-qzc8r5"), c(l, "class", "scan-overlay svelte-qzc8r5"), c(e, "class", "camera-wrap svelte-qzc8r5");
          },
          m(r, a) {
            T(r, e, a), i(e, t), x[25](t), i(e, n), i(e, o), x[26](o), i(e, s), i(e, l);
          },
          p: X,
          d(r) {
            r && P(e), x[25](null), x[26](null);
          }
        };
      }
      function p8(x) {
        let e, t, n, o, s, l, r, a, u, f = x[14] ? "check" : "content_copy", E, C, B = x[14] ? "Copied!" : "Copy as text", A, F, m, h, v, b, _, D = x[7] ? "Hide" : "Enter code manually", p, k, w, y, S, M = x[6] && qo(x), I = x[9] && Ro(x);
        function L(j, H) {
          return j[3] ? b8 : k8;
        }
        let N = L(x), q = N(x), R = x[7] && jo(x);
        return {
          c() {
            M && M.c(), e = g(), I && I.c(), t = g(), n = d("section"), o = d("p"), o.textContent = "Show this to your partner", s = g(), l = d("div"), q.c(), r = g(), a = d("button"), u = d("span"), E = z(f), C = g(), A = z(B), m = g(), h = d("div"), v = d("button"), v.innerHTML = `<span class="material-icons svelte-qzc8r5">qr_code_scanner</span>
        Scan Their Code`, b = g(), _ = d("button"), p = z(D), k = g(), R && R.c(), w = X0(), c(o, "class", "section-label svelte-qzc8r5"), c(l, "class", "qr-frame svelte-qzc8r5"), c(u, "class", "material-icons svelte-qzc8r5"), c(a, "class", "btn-copy svelte-qzc8r5"), a.disabled = F = !x[2], c(n, "class", "card pad svelte-qzc8r5"), c(v, "class", "btn-filled svelte-qzc8r5"), c(_, "class", "btn-text svelte-qzc8r5"), c(h, "class", "scan-actions svelte-qzc8r5");
          },
          m(j, H) {
            M && M.m(j, H), T(j, e, H), I && I.m(j, H), T(j, t, H), T(j, n, H), i(n, o), i(n, s), i(n, l), q.m(l, null), i(n, r), i(n, a), i(a, u), i(u, E), i(a, C), i(a, A), T(j, m, H), T(j, h, H), i(h, v), i(h, b), i(h, _), i(_, p), T(j, k, H), R && R.m(j, H), T(j, w, H), y || (S = [
              O(a, "click", x[20]),
              O(v, "click", x[15]),
              O(_, "click", x[22])
            ], y = true);
          },
          p(j, H) {
            j[6] ? M ? M.p(j, H) : (M = qo(j), M.c(), M.m(e.parentNode, e)) : M && (M.d(1), M = null), j[9] ? I ? I.p(j, H) : (I = Ro(j), I.c(), I.m(t.parentNode, t)) : I && (I.d(1), I = null), N === (N = L(j)) && q ? q.p(j, H) : (q.d(1), q = N(j), q && (q.c(), q.m(l, null))), H[0] & 16384 && f !== (f = j[14] ? "check" : "content_copy") && V(E, f), H[0] & 16384 && B !== (B = j[14] ? "Copied!" : "Copy as text") && V(A, B), H[0] & 4 && F !== (F = !j[2]) && (a.disabled = F), H[0] & 128 && D !== (D = j[7] ? "Hide" : "Enter code manually") && V(p, D), j[7] ? R ? R.p(j, H) : (R = jo(j), R.c(), R.m(w.parentNode, w)) : R && (R.d(1), R = null);
          },
          d(j) {
            j && (P(e), P(t), P(n), P(m), P(h), P(k), P(w)), M && M.d(j), I && I.d(j), q.d(), R && R.d(j), y = false, s0(S);
          }
        };
      }
      function D8(x) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-qzc8r5">check_circle</span> <p class="saved-title svelte-qzc8r5">Encounter recorded</p> <p class="muted svelte-qzc8r5">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-qzc8r5">View encounters</a>', c(e, "class", "card pad saved-card svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function m8(x) {
        let e, t, n, o, s;
        return {
          c() {
            e = d("section"), t = d("p"), n = z(x[1]), o = g(), s = d("a"), s.textContent = "\u2190 Back", c(t, "class", "error svelte-qzc8r5"), c(s, "href", "#/home"), c(s, "class", "btn-text svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(l, r) {
            T(l, e, r), i(e, t), i(t, n), i(e, o), i(e, s);
          },
          p(l, r) {
            r[0] & 2 && V(n, l[1]);
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
            e = d("div"), e.innerHTML = '<div class="spinner svelte-qzc8r5"></div> <p class="muted svelte-qzc8r5">Generating your code\u2026</p>', c(e, "class", "center-fill svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function v8(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Unnamed group encounter", c(e, "class", "help-text svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function _8(x) {
        let e, t = x[12].name + "", n;
        return {
          c() {
            e = d("p"), n = z(t), c(e, "class", "confirm-group-name svelte-qzc8r5");
          },
          m(o, s) {
            T(o, e, s), i(e, n);
          },
          p(o, s) {
            s[0] & 4096 && t !== (t = o[12].name + "") && V(n, t);
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
            e = d("p"), e.textContent = "Saving\u2026", c(e, "class", "muted saving-hint svelte-qzc8r5");
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
        let e, t = x[44] + "", n, o, s;
        function l() {
          return x[27](x[44]);
        }
        return {
          c() {
            e = d("button"), n = z(t), c(e, "class", "choice-btn svelte-qzc8r5"), e.disabled = x[13];
          },
          m(r, a) {
            T(r, e, a), i(e, n), o || (s = O(e, "click", l), o = true);
          },
          p(r, a) {
            x = r, a[0] & 2048 && t !== (t = x[44] + "") && V(n, t), a[0] & 8192 && (e.disabled = x[13]);
          },
          d(r) {
            r && P(e), o = false, s();
          }
        };
      }
      function zo(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Saving\u2026", c(e, "class", "muted saving-hint svelte-qzc8r5");
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
            e = d("div"), t = d("span"), t.textContent = "error_outline", n = g(), o = z(x[6]), c(t, "class", "material-icons svelte-qzc8r5"), c(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(s, l) {
            T(s, e, l), i(e, t), i(e, n), i(e, o);
          },
          p(s, l) {
            l[0] & 64 && V(o, s[6]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Ro(x) {
        let e, t, n, o;
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "error_outline", n = g(), o = z(x[9]), c(t, "class", "material-icons svelte-qzc8r5"), c(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(s, l) {
            T(s, e, l), i(e, t), i(e, n), i(e, o);
          },
          p(s, l) {
            l[0] & 512 && V(o, s[9]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function k8(x) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Generating\u2026", c(e, "class", "muted svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function b8(x) {
        let e;
        return {
          c() {
            e = d("div"), c(e, "class", "qr-inner svelte-qzc8r5");
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
      function jo(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C = x[9] && Ho(x);
        return {
          c() {
            e = d("section"), t = d("p"), t.textContent = "Paste their QR payload", n = g(), o = d("textarea"), s = g(), C && C.c(), l = g(), r = d("button"), a = z("Continue"), c(t, "class", "section-label svelte-qzc8r5"), c(o, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), c(o, "rows", "3"), c(o, "class", "svelte-qzc8r5"), c(r, "class", "btn-filled svelte-qzc8r5"), r.disabled = u = !x[8].trim(), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(B, A) {
            T(B, e, A), i(e, t), i(e, n), i(e, o), x0(o, x[8]), i(e, s), C && C.m(e, null), i(e, l), i(e, r), i(r, a), f || (E = [
              O(o, "input", x[23]),
              O(o, "keydown", x[24]),
              O(r, "click", x[16])
            ], f = true);
          },
          p(B, A) {
            A[0] & 256 && x0(o, B[8]), B[9] ? C ? C.p(B, A) : (C = Ho(B), C.c(), C.m(e, l)) : C && (C.d(1), C = null), A[0] & 256 && u !== (u = !B[8].trim()) && (r.disabled = u);
          },
          d(B) {
            B && P(e), C && C.d(), f = false, s0(E);
          }
        };
      }
      function Ho(x) {
        let e, t;
        return {
          c() {
            e = d("p"), t = z(x[9]), c(e, "class", "error-text svelte-qzc8r5");
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
      function g8(x) {
        let e, t, n, o, s, l, r, a;
        e = new ne({});
        function u(v, b) {
          return v[0] === "scanning" || v[0] === "confirm-group" ? i8 : a8;
        }
        let f = u(x), E = f(x);
        function C(v, b) {
          return v[0] === "scanning" ? E8 : v[0] === "confirm" || v[0] === "ongoing?" ? d8 : v[0] === "confirm-group" ? f8 : v[0] === "saved" ? u8 : c8;
        }
        let B = C(x), A = B(x);
        function F(v, b) {
          if (v[0] === "loading") return h8;
          if (v[0] === "error") return m8;
          if (v[0] === "saved") return D8;
          if (v[0] === "showQR") return p8;
          if (v[0] === "scanning") return F8;
          if (v[0] === "confirm") return A8;
          if (v[0] === "ongoing?") return C8;
          if (v[0] === "confirm-group") return B8;
        }
        let m = F(x), h = m && m(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), o = d("div"), E.c(), s = g(), l = d("h1"), A.c(), r = g(), h && h.c(), c(l, "class", "svelte-qzc8r5"), c(o, "class", "page-header svelte-qzc8r5"), c(n, "class", "svelte-qzc8r5");
          },
          m(v, b) {
            b0(e, v, b), T(v, t, b), T(v, n, b), i(n, o), E.m(o, null), i(o, s), i(o, l), A.m(l, null), i(n, r), h && h.m(n, null), a = true;
          },
          p(v, b) {
            f === (f = u(v)) && E ? E.p(v, b) : (E.d(1), E = f(v), E && (E.c(), E.m(o, s))), B !== (B = C(v)) && (A.d(1), A = B(v), A && (A.c(), A.m(l, null))), m === (m = F(v)) && h ? h.p(v, b) : (h && h.d(1), h = m && m(v), h && (h.c(), h.m(n, null)));
          },
          i(v) {
            a || (d0(e.$$.fragment, v), a = true);
          },
          o(v) {
            C0(e.$$.fragment, v), a = false;
          },
          d(v) {
            v && (P(t), P(n)), g0(e, v), E.d(), A.d(), h && h.d();
          }
        };
      }
      function rx(x) {
        return 10 + (x[1] * 256 + x[2]) % 90;
      }
      function Oo(x) {
        const e = /* @__PURE__ */ new Set([
          x
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((t, n) => t - n);
      }
      function w8(x, e, t) {
        let n = "loading", o = null, s = null, l = "", r = 0, a = "", u = null, f = null, E = null, C = null, B = null, A = false, F = false, m = "", h = null, v = null, b = null, _ = 0, D = [], p = null, k = "", w = null, y = "", S = false, M = false;
        z0(async () => {
          if (!G0()) {
            i0("/login");
            return;
          }
          try {
            const Z = Nr(), n0 = ce(), u0 = Math.floor(Date.now() / 1e3);
            s = Z.privateKey, r = rx(Z.publicKey), t(2, l = `1|${Fe(Z.publicKey)}|${u0}|${t0(n0)}`), t(3, a = await ve.toString(l, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#000000",
                light: "#ffffff"
              }
            })), t(0, n = "showQR");
          } catch (Z) {
            t(1, o = Z.message), t(0, n = "error");
          }
        }), Rt(() => {
          L();
        });
        async function I() {
          if (t(6, B = null), A = false, !navigator.mediaDevices?.getUserMedia) {
            t(6, B = "Camera not available. This page must be opened over HTTPS to use the camera."), t(0, n = "showQR");
            return;
          }
          t(0, n = "scanning"), await new Promise((Z) => setTimeout(Z, 50));
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
            }), t(4, u.srcObject = E, u), await u.play(), N();
          } catch (Z) {
            t(6, B = Z.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + Z.message), L(), t(0, n = "showQR");
          }
        }
        function L() {
          C && (cancelAnimationFrame(C), C = null), E && (E.getTracks().forEach((Z) => Z.stop()), E = null), A = false;
        }
        function N() {
          if (!E || !u || u.readyState < 2) {
            C = requestAnimationFrame(N);
            return;
          }
          const Z = u.videoWidth, n0 = u.videoHeight;
          if (!Z || !n0) {
            C = requestAnimationFrame(N);
            return;
          }
          t(5, f.width = Z, f), t(5, f.height = n0, f);
          const u0 = f.getContext("2d");
          u0.drawImage(u, 0, 0, Z, n0);
          const h0 = u0.getImageData(0, 0, Z, n0), v0 = r8(h0.data, Z, n0, {
            inversionAttempts: "dontInvert"
          });
          if (v0 && !A) {
            A = true, R(v0.data);
            return;
          }
          C = requestAnimationFrame(N);
        }
        function q(Z) {
          const n0 = Z.trim().split("|"), u0 = parseInt(n0[0], 10);
          if (!isNaN(u0) && u0 > 1) throw new Error("Your partner has a newer app version. Please update.");
          if (n0.length !== 4 || n0[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, h0, , v0] = n0;
          if (!h0 || h0.length < 10) throw new Error("Invalid QR payload");
          if (!v0 || v0.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: Fs(h0),
            contactIdBytes: N0(v0)
          };
        }
        function R(Z) {
          const n0 = Z.trim();
          if (n0.startsWith("2|")) {
            try {
              const u0 = Qx(n0);
              if (!u0) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - u0.timestamp > 86400) {
                A = false, C = requestAnimationFrame(N);
                return;
              }
              L(), t(12, p = u0), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), t(0, n = "confirm-group");
            } catch {
              A = false, C = requestAnimationFrame(N);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: u0, contactIdBytes: h0 } = q(Z);
            if (t0(h0) === t0(ce())) {
              A = false, t(9, h = "You can't log an encounter with yourself."), t(0, n = "showQR");
              return;
            }
            L(), v = u0, b = h0, t(10, _ = rx(u0)), t(11, D = Oo(r)), t(0, n = "confirm");
          } catch {
            A = false, C = requestAnimationFrame(N);
          }
        }
        function j() {
          t(9, h = null);
          const Z = m.trim();
          try {
            if (Z.startsWith("2|")) {
              const n0 = Qx(Z);
              if (!n0) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - n0.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              t(12, p = n0), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), t(0, n = "confirm-group"), t(7, F = false);
            } else {
              const { ephemeralPubkeyBytes: n0, contactIdBytes: u0 } = q(Z);
              if (t0(u0) === t0(ce())) throw new Error("You can't log an encounter with yourself.");
              v = n0, b = u0, t(10, _ = rx(n0)), t(11, D = Oo(r)), t(0, n = "confirm"), t(7, F = false);
            }
          } catch (n0) {
            t(9, h = n0.message);
          }
        }
        function H() {
          L(), t(12, p = null), t(0, n = "showQR"), t(7, F = false), t(9, h = null), t(8, m = "");
        }
        async function Q(Z) {
          if (Z !== r) {
            t(9, h = "Wrong \u2014 that's not your number. Scan again."), t(0, n = "showQR"), t(7, F = false), t(8, m = ""), v = null, b = null;
            return;
          }
          const n0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          w = zr(s, v), y = n0;
          const v0 = te()?.encounters || [], q0 = Mx(), Y0 = t0(b), R0 = v0.some((S0) => t0(S0.theirContactId) === Y0), w0 = q0.some((S0) => t0(S0.theirContactId) === Y0 && !S0.endedAt);
          R0 && !w0 ? t(0, n = "ongoing?") : await K(false);
        }
        async function K(Z) {
          t(13, S = true);
          try {
            const n0 = ce(), u0 = Ae(w, n0, 0);
            await hs(t0(u0), y), Z ? await Ta(w, b, y) : await ya(w, b, y), t(0, n = "saved");
          } catch (n0) {
            t(1, o = n0.message), t(0, n = "error");
          } finally {
            t(13, S = false);
          }
        }
        async function G() {
          try {
            await navigator.clipboard.writeText(l), t(14, M = true), setTimeout(() => {
              t(14, M = false);
            }, 2e3);
          } catch {
          }
        }
        async function U() {
          t(13, S = true);
          try {
            const Z = N0(p.groupTokenHex), n0 = N0(p.hostContactIdHex);
            await Ls(Z, k, false, n0, p.name), t(0, n = "saved");
          } catch (Z) {
            t(1, o = Z.message), t(0, n = "error");
          } finally {
            t(13, S = false);
          }
        }
        const J = () => {
          t(7, F = !F), t(9, h = null);
        };
        function Y() {
          m = this.value, t(8, m);
        }
        const r0 = (Z) => Z.key === "Enter" && !Z.shiftKey && (Z.preventDefault(), j());
        function c0(Z) {
          kt[Z ? "unshift" : "push"](() => {
            u = Z, t(4, u);
          });
        }
        function a0(Z) {
          kt[Z ? "unshift" : "push"](() => {
            f = Z, t(5, f);
          });
        }
        return [
          n,
          o,
          l,
          a,
          u,
          f,
          B,
          F,
          m,
          h,
          _,
          D,
          p,
          S,
          M,
          I,
          j,
          H,
          Q,
          K,
          G,
          U,
          J,
          Y,
          r0,
          c0,
          a0,
          (Z) => Q(Z),
          () => K(true),
          () => K(false)
        ];
      }
      class y8 extends D0 {
        constructor(e) {
          super(), p0(this, e, w8, g8, A0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function P8(x) {
        let e, t, n, o, s, l, r = Yo(x[1].date) + "", a, u, f, E = x[0].rawTokenHex.slice(0, 12) + "", C, B, A, F, m, h, v, b, _, D, p = x[3] && Uo(x), k = x[7] && Vo(x), w = x[5] && Go(x);
        return {
          c() {
            p && p.c(), e = g(), k && k.c(), t = g(), n = d("section"), o = d("div"), o.innerHTML = '<span class="material-icons status-icon svelte-nknqao">check_circle_outline</span> <span class="status-label svelte-nknqao">One-time encounter</span>', s = g(), l = d("p"), a = z(r), u = g(), f = d("p"), C = z(E), B = z("\u2026"), A = g(), F = d("section"), m = d("div"), m.innerHTML = '<span class="material-icons privacy-icon svelte-nknqao">lock_outline</span> <p class="privacy-text svelte-nknqao">Your note is stored encrypted and never shared.</p>', h = g(), v = d("textarea"), b = g(), w && w.c(), c(o, "class", "status-row svelte-nknqao"), c(l, "class", "date svelte-nknqao"), c(f, "class", "token svelte-nknqao"), c(n, "class", "card pad svelte-nknqao"), c(m, "class", "privacy-row svelte-nknqao"), c(v, "placeholder", "Add a private note\u2026"), c(v, "rows", "5"), c(v, "class", "svelte-nknqao"), c(F, "class", "card pad svelte-nknqao");
          },
          m(y, S) {
            p && p.m(y, S), T(y, e, S), k && k.m(y, S), T(y, t, S), T(y, n, S), i(n, o), i(n, s), i(n, l), i(l, a), i(n, u), i(n, f), i(f, C), i(f, B), T(y, A, S), T(y, F, S), i(F, m), i(F, h), i(F, v), x0(v, x[4]), i(F, b), w && w.m(F, null), _ || (D = [
              O(v, "input", x[13]),
              O(v, "input", x[8])
            ], _ = true);
          },
          p(y, S) {
            y[3] ? p ? p.p(y, S) : (p = Uo(y), p.c(), p.m(e.parentNode, e)) : p && (p.d(1), p = null), y[7] ? k ? k.p(y, S) : (k = Vo(y), k.c(), k.m(t.parentNode, t)) : k && (k.d(1), k = null), S & 2 && r !== (r = Yo(y[1].date) + "") && V(a, r), S & 1 && E !== (E = y[0].rawTokenHex.slice(0, 12) + "") && V(C, E), S & 16 && x0(v, y[4]), y[5] ? w ? w.p(y, S) : (w = Go(y), w.c(), w.m(F, null)) : w && (w.d(1), w = null);
          },
          d(y) {
            y && (P(e), P(t), P(n), P(A), P(F)), p && p.d(y), k && k.d(y), w && w.d(), _ = false, s0(D);
          }
        };
      }
      function T8(x) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-nknqao">This encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-nknqao">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-nknqao");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function Uo(x) {
        let e, t, n, o;
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "error_outline", n = g(), o = z(x[3]), c(t, "class", "material-icons svelte-nknqao"), c(e, "class", "toast error-toast svelte-nknqao");
          },
          m(s, l) {
            T(s, e, l), i(e, t), i(e, n), i(e, o);
          },
          p(s, l) {
            l & 8 && V(o, s[3]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Vo(x) {
        let e, t, n, o, s, l, r, a, u, f = x[6] ? "Saving\u2026" : "Save note", E, C, B;
        return {
          c() {
            e = d("section"), t = d("p"), t.textContent = "You have unsaved changes to your note.", n = g(), o = d("div"), s = d("button"), s.textContent = "Keep editing", l = g(), r = d("button"), r.textContent = "Discard", a = g(), u = d("button"), E = z(f), c(t, "class", "confirm-text svelte-nknqao"), c(s, "class", "btn-text svelte-nknqao"), c(r, "class", "btn-text danger svelte-nknqao"), c(u, "class", "btn-filled-sm svelte-nknqao"), u.disabled = x[6], c(o, "class", "confirm-actions svelte-nknqao"), c(e, "class", "card pad leave-confirm svelte-nknqao");
          },
          m(A, F) {
            T(A, e, F), i(e, t), i(e, n), i(e, o), i(o, s), i(o, l), i(o, r), i(o, a), i(o, u), i(u, E), C || (B = [
              O(s, "click", x[12]),
              O(r, "click", x[11]),
              O(u, "click", x[10])
            ], C = true);
          },
          p(A, F) {
            F & 64 && f !== (f = A[6] ? "Saving\u2026" : "Save note") && V(E, f), F & 64 && (u.disabled = A[6]);
          },
          d(A) {
            A && P(e), C = false, s0(B);
          }
        };
      }
      function Go(x) {
        let e, t, n = x[6] ? "Saving\u2026" : "Save", o, s, l;
        return {
          c() {
            e = d("div"), t = d("button"), o = z(n), c(t, "class", "btn-filled-sm svelte-nknqao"), t.disabled = x[6], c(e, "class", "note-actions svelte-nknqao");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(t, o), s || (l = O(t, "click", x[9]), s = true);
          },
          p(r, a) {
            a & 64 && n !== (n = r[6] ? "Saving\u2026" : "Save") && V(o, n), a & 64 && (t.disabled = r[6]);
          },
          d(r) {
            r && P(e), s = false, l();
          }
        };
      }
      function S8(x) {
        let e, t, n, o, s, l, r, a = x[2] ? "Not found" : "Encounter", u, f, E;
        e = new ne({});
        function C(F, m) {
          if (F[2]) return T8;
          if (F[1]) return P8;
        }
        let B = C(x), A = B && B(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), n = d("main"), o = d("div"), s = d("a"), s.innerHTML = '<span class="material-icons svelte-nknqao">arrow_back</span>', l = g(), r = d("h1"), u = z(a), f = g(), A && A.c(), c(s, "class", "back-btn svelte-nknqao"), c(s, "href", "#/encounters"), c(r, "class", "svelte-nknqao"), c(o, "class", "page-header svelte-nknqao"), c(n, "class", "svelte-nknqao");
          },
          m(F, m) {
            b0(e, F, m), T(F, t, m), T(F, n, m), i(n, o), i(o, s), i(o, l), i(o, r), i(r, u), i(n, f), A && A.m(n, null), E = true;
          },
          p(F, [m]) {
            (!E || m & 4) && a !== (a = F[2] ? "Not found" : "Encounter") && V(u, a), B === (B = C(F)) && A ? A.p(F, m) : (A && A.d(1), A = B && B(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            E || (d0(e.$$.fragment, F), E = true);
          },
          o(F) {
            C0(e.$$.fragment, F), E = false;
          },
          d(F) {
            F && (P(t), P(n)), g0(e, F), A && A.d();
          }
        };
      }
      function Yo(x) {
        return x ? (/* @__PURE__ */ new Date(x + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function I8(x, e, t) {
        let { params: n = {} } = e, o = null, s = false, l = null, r = "", a = false, u = false, f = false, E = null;
        z0(() => {
          if (!G0()) {
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
        function C(p) {
          a && (p.preventDefault(), p.returnValue = "");
        }
        function B(p) {
          if (!a) return;
          const k = p.target.closest('a[href^="#/"]');
          k && (p.preventDefault(), p.stopImmediatePropagation(), E = k.getAttribute("href").slice(1), t(7, f = true));
        }
        function A() {
          const p = n.rawTokenHex;
          if (t(1, o = Ss().find((k) => t0(k.rawToken) === p) ?? null), !o) {
            t(2, s = true);
            return;
          }
          t(4, r = o.note ?? "");
        }
        function F() {
          t(5, a = r !== (o.note ?? ""));
        }
        async function m() {
          if (!(!a || u)) {
            t(6, u = true), t(3, l = null);
            try {
              const p = r.trim() || null;
              await Pa(n.rawTokenHex, {
                note: p
              }), A(), t(5, a = false);
            } catch (p) {
              t(3, l = p.message);
            } finally {
              t(6, u = false);
            }
          }
        }
        async function h() {
          await m(), l || b();
        }
        function v() {
          t(4, r = o.note ?? ""), t(5, a = false), b();
        }
        function b() {
          t(7, f = false), i0(E);
        }
        const _ = () => t(7, f = false);
        function D() {
          r = this.value, t(4, r);
        }
        return x.$$set = (p) => {
          "params" in p && t(0, n = p.params);
        }, [
          n,
          o,
          s,
          l,
          r,
          a,
          u,
          f,
          F,
          m,
          h,
          v,
          _,
          D
        ];
      }
      class M8 extends D0 {
        constructor(e) {
          super(), p0(this, e, I8, S8, A0, {
            params: 0
          });
        }
      }
      function Ko(x, e, t) {
        const n = x.slice();
        return n[9] = e[t], n;
      }
      function Wo(x, e, t) {
        const n = x.slice();
        return n[12] = e[t], n;
      }
      function Qo(x) {
        let e;
        return {
          c() {
            e = d("div"), c(e, "class", "dot svelte-bn0o41"), e0(e, "filled", x[12] < x[0].length);
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
      function Jo(x) {
        let e, t, n;
        function o() {
          return x[6](x[9]);
        }
        return {
          c() {
            e = d("button"), e.textContent = `${x[9]}`, c(e, "class", "key svelte-bn0o41");
          },
          m(s, l) {
            T(s, e, l), t || (n = O(e, "click", o), t = true);
          },
          p(s, l) {
            x = s;
          },
          d(s) {
            s && P(e), t = false, n();
          }
        };
      }
      function L8(x) {
        let e, t, n, o, s, l, r, a, u, f, E, C, B, A, F, m, h, v, b, _, D, p, k = E0([
          0,
          1,
          2,
          3
        ]), w = [];
        for (let M = 0; M < 4; M += 1) w[M] = Qo(Wo(x, k, M));
        let y = E0([
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
        for (let M = 0; M < 9; M += 1) S[M] = Jo(Ko(x, y, M));
        return {
          c() {
            e = d("div"), t = d("div"), n = d("div"), n.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-bn0o41"/> <span class="brand-label"><span class="brand-peach svelte-bn0o41">Peach</span><span class="brand-safe svelte-bn0o41">Safe</span></span>', o = g(), s = d("p"), s.textContent = "Enter your PIN", l = g(), r = d("div");
            for (let M = 0; M < 4; M += 1) w[M].c();
            a = g(), u = d("p"), f = z(x[1]), E = g(), C = d("div");
            for (let M = 0; M < 9; M += 1) S[M].c();
            B = g(), A = d("button"), A.innerHTML = '<span class="material-icons svelte-bn0o41">backspace</span>', F = g(), m = d("button"), m.textContent = "0", h = g(), v = d("div"), b = g(), _ = d("button"), _.textContent = "Sign out", c(n, "class", "brand svelte-bn0o41"), c(s, "class", "prompt svelte-bn0o41"), c(r, "class", "dots svelte-bn0o41"), e0(r, "shake", x[2]), c(u, "class", "error-msg svelte-bn0o41"), c(A, "class", "key key-del svelte-bn0o41"), c(A, "aria-label", "Delete"), c(m, "class", "key svelte-bn0o41"), c(C, "class", "numpad svelte-bn0o41"), c(_, "class", "signout-link svelte-bn0o41"), c(t, "class", "lock-card svelte-bn0o41"), c(e, "class", "overlay svelte-bn0o41"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-label", "Enter PIN to unlock");
          },
          m(M, I) {
            T(M, e, I), i(e, t), i(t, n), i(t, o), i(t, s), i(t, l), i(t, r);
            for (let L = 0; L < 4; L += 1) w[L] && w[L].m(r, null);
            i(t, a), i(t, u), i(u, f), i(t, E), i(t, C);
            for (let L = 0; L < 9; L += 1) S[L] && S[L].m(C, null);
            i(C, B), i(C, A), i(C, F), i(C, m), i(C, h), i(C, v), i(t, b), i(t, _), D || (p = [
              O(A, "click", x[4]),
              O(m, "click", x[7]),
              O(_, "click", x[5])
            ], D = true);
          },
          p(M, [I]) {
            if (I & 1) {
              k = E0([
                0,
                1,
                2,
                3
              ]);
              let L;
              for (L = 0; L < 4; L += 1) {
                const N = Wo(M, k, L);
                w[L] ? w[L].p(N, I) : (w[L] = Qo(N), w[L].c(), w[L].m(r, null));
              }
              for (; L < 4; L += 1) w[L].d(1);
            }
            if (I & 4 && e0(r, "shake", M[2]), I & 2 && V(f, M[1]), I & 8) {
              y = E0([
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
                const N = Ko(M, y, L);
                S[L] ? S[L].p(N, I) : (S[L] = Jo(N), S[L].c(), S[L].m(C, B));
              }
              for (; L < 9; L += 1) S[L].d(1);
            }
          },
          i: X,
          o: X,
          d(M) {
            M && P(e), V0(w, M), V0(S, M), D = false, s0(p);
          }
        };
      }
      function N8(x, e, t) {
        let n = "", o = "", s = false;
        function l(C) {
          n.length >= 4 || s || (t(1, o = ""), t(0, n += C), n.length === 4 && a());
        }
        function r() {
          s || (t(0, n = n.slice(0, -1)), t(1, o = ""));
        }
        async function a() {
          n === Ha() ? Ot.set(true) : (t(2, s = true), t(1, o = "Incorrect PIN"), await new Promise((C) => setTimeout(C, 600)), t(0, n = ""), t(2, s = false));
        }
        async function u() {
          await gx(), i0("/login");
        }
        return [
          n,
          o,
          s,
          l,
          r,
          u,
          (C) => l(String(C)),
          () => l("0")
        ];
      }
      class z8 extends D0 {
        constructor(e) {
          super(), p0(this, e, N8, L8, A0, {});
        }
      }
      function q8(x) {
        let e, t, n, o, s = x[7] !== null && !x[8] && x[11](x[0]), l, r, a, u;
        e = new pl({
          props: {
            routes: x[10]
          }
        }), e.$on("routeLoaded", x[15]), n = new Wr({});
        let f = s && Xo(), E = x[9] === false && Zo(x), C = x[5] && $o(x);
        return {
          c() {
            y0(e.$$.fragment), t = g(), y0(n.$$.fragment), o = g(), f && f.c(), l = g(), E && E.c(), r = g(), C && C.c(), a = X0();
          },
          m(B, A) {
            b0(e, B, A), T(B, t, A), b0(n, B, A), T(B, o, A), f && f.m(B, A), T(B, l, A), E && E.m(B, A), T(B, r, A), C && C.m(B, A), T(B, a, A), u = true;
          },
          p(B, A) {
            A & 385 && (s = B[7] !== null && !B[8] && B[11](B[0])), s ? f ? A & 385 && d0(f, 1) : (f = Xo(), f.c(), d0(f, 1), f.m(l.parentNode, l)) : f && (qe(), C0(f, 1, 1, () => {
              f = null;
            }), Re()), B[9] === false ? E ? E.p(B, A) : (E = Zo(B), E.c(), E.m(r.parentNode, r)) : E && (E.d(1), E = null), B[5] ? C ? C.p(B, A) : (C = $o(B), C.c(), C.m(a.parentNode, a)) : C && (C.d(1), C = null);
          },
          i(B) {
            u || (d0(e.$$.fragment, B), d0(n.$$.fragment, B), d0(f), u = true);
          },
          o(B) {
            C0(e.$$.fragment, B), C0(n.$$.fragment, B), C0(f), u = false;
          },
          d(B) {
            B && (P(t), P(o), P(l), P(r), P(a)), g0(e, B), g0(n, B), f && f.d(B), E && E.d(B), C && C.d(B);
          }
        };
      }
      function R8(x) {
        let e;
        return {
          c() {
            e = d("main"), e.textContent = "Loading\u2026", c(e, "class", "loading svelte-1kqo0f9");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          i: X,
          o: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function j8(x) {
        let e, t, n, o, s, l;
        return {
          c() {
            e = d("main"), t = d("p"), n = z("Failed to load crypto module: "), o = z(x[4]), s = g(), l = d("p"), l.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", c(e, "class", "error svelte-1kqo0f9");
          },
          m(r, a) {
            T(r, e, a), i(e, t), i(t, n), i(t, o), i(e, s), i(e, l);
          },
          p(r, a) {
            a & 16 && V(o, r[4]);
          },
          i: X,
          o: X,
          d(r) {
            r && P(e);
          }
        };
      }
      function Xo(x) {
        let e, t;
        return e = new z8({}), {
          c() {
            y0(e.$$.fragment);
          },
          m(n, o) {
            b0(e, n, o), t = true;
          },
          i(n) {
            t || (d0(e.$$.fragment, n), t = true);
          },
          o(n) {
            C0(e.$$.fragment, n), t = false;
          },
          d(n) {
            g0(e, n);
          }
        };
      }
      function Zo(x) {
        let e, t, n, o, s;
        function l(u, f) {
          return u[2] ? O8 : H8;
        }
        let r = l(x), a = r(x);
        return {
          c() {
            e = d("div"), t = d("span"), t.textContent = "mail_outline", n = g(), o = d("span"), o.textContent = "Please verify your email address. Check your inbox for a verification link.", s = g(), a.c(), c(t, "class", "material-icons svelte-1kqo0f9"), c(o, "class", "verify-text svelte-1kqo0f9"), c(e, "class", "verify-banner svelte-1kqo0f9");
          },
          m(u, f) {
            T(u, e, f), i(e, t), i(e, n), i(e, o), i(e, s), a.m(e, null);
          },
          p(u, f) {
            r === (r = l(u)) && a ? a.p(u, f) : (a.d(1), a = r(u), a && (a.c(), a.m(e, null)));
          },
          d(u) {
            u && P(e), a.d();
          }
        };
      }
      function H8(x) {
        let e, t = x[1] ? "Sending\u2026" : "Resend", n, o, s;
        return {
          c() {
            e = d("button"), n = z(t), c(e, "class", "resend-btn svelte-1kqo0f9"), e.disabled = x[1];
          },
          m(l, r) {
            T(l, e, r), i(e, n), o || (s = O(e, "click", x[12]), o = true);
          },
          p(l, r) {
            r & 2 && t !== (t = l[1] ? "Sending\u2026" : "Resend") && V(n, t), r & 2 && (e.disabled = l[1]);
          },
          d(l) {
            l && P(e), o = false, s();
          }
        };
      }
      function O8(x) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Sent!", c(e, "class", "resend-sent svelte-1kqo0f9");
          },
          m(t, n) {
            T(t, e, n);
          },
          p: X,
          d(t) {
            t && P(e);
          }
        };
      }
      function $o(x) {
        let e, t, n, o, s, l, r, a = Math.floor(x[6] / 60) + "", u, f, E = String(x[6] % 60).padStart(2, "0") + "", C, B, A, F, m, h, v, b, _;
        return {
          c() {
            e = d("div"), t = d("div"), n = d("h2"), n.textContent = "Session expiring", o = g(), s = d("p"), l = z(`You'll be logged out in
          `), r = d("strong"), u = z(a), f = z(":"), C = z(E), B = z(`
          due to inactivity.`), A = g(), F = d("div"), m = d("button"), m.textContent = "Stay logged in", h = g(), v = d("button"), v.textContent = "Log out now", c(n, "id", "idle-title"), c(n, "class", "svelte-1kqo0f9"), c(s, "class", "svelte-1kqo0f9"), c(m, "class", "btn-primary svelte-1kqo0f9"), c(v, "class", "btn-ghost svelte-1kqo0f9"), c(F, "class", "idle-actions svelte-1kqo0f9"), c(t, "class", "idle-dialog svelte-1kqo0f9"), c(e, "class", "idle-overlay svelte-1kqo0f9"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "idle-title");
          },
          m(D, p) {
            T(D, e, p), i(e, t), i(t, n), i(t, o), i(t, s), i(s, l), i(s, r), i(r, u), i(r, f), i(r, C), i(s, B), i(t, A), i(t, F), i(F, m), i(F, h), i(F, v), b || (_ = [
              O(m, "click", x[13]),
              O(v, "click", x[14])
            ], b = true);
          },
          p(D, p) {
            p & 64 && a !== (a = Math.floor(D[6] / 60) + "") && V(u, a), p & 64 && E !== (E = String(D[6] % 60).padStart(2, "0") + "") && V(C, E);
          },
          d(D) {
            D && P(e), b = false, s0(_);
          }
        };
      }
      function U8(x) {
        let e, t, n, o;
        const s = [
          j8,
          R8,
          q8
        ], l = [];
        function r(a, u) {
          return a[4] ? 0 : a[3] ? 2 : 1;
        }
        return e = r(x), t = l[e] = s[e](x), {
          c() {
            t.c(), n = X0();
          },
          m(a, u) {
            l[e].m(a, u), T(a, n, u), o = true;
          },
          p(a, [u]) {
            let f = e;
            e = r(a), e === f ? l[e].p(a, u) : (qe(), C0(l[f], 1, 1, () => {
              l[f] = null;
            }), Re(), t = l[e], t ? t.p(a, u) : (t = l[e] = s[e](a), t.c()), d0(t, 1), t.m(n.parentNode, n));
          },
          i(a) {
            o || (d0(t), o = true);
          },
          o(a) {
            C0(t), o = false;
          },
          d(a) {
            a && P(n), l[e].d(a);
          }
        };
      }
      const es = 120;
      function V8(x, e, t) {
        let n, o, s;
        H0(x, Tx, (p) => t(7, n = p)), H0(x, Ot, (p) => t(8, o = p)), H0(x, he, (p) => t(9, s = p));
        const l = {
          "/": ha,
          "/how-it-works": ka,
          "/login": ti,
          "/signup": si,
          "/home": ci,
          "/encounter-exchange": y8,
          "/encounters": mi,
          "/encounters/:rawTokenHex": M8,
          "/relationships/:rawTokenHex": Li,
          "/groups/:tokenHex": C9,
          "/results": Qi,
          "/change-password": Zi,
          "/change-email": nc,
          "/verify-email/:token": ic,
          "/alerts": Cc,
          "/settings": Z9,
          "/settings/2fa-setup": s8
        }, r = /* @__PURE__ */ new Set([
          "/",
          "/login",
          "/signup",
          "/home",
          "/encounter-exchange",
          "/how-it-works"
        ]);
        function a(p) {
          return G0() && !r.has(p) && !p.startsWith("/verify-email/");
        }
        let u = "/", f = false, E = false;
        async function C() {
          t(1, f = true);
          try {
            await ta(), t(2, E = true);
          } catch {
          } finally {
            t(1, f = false);
          }
        }
        let B = false, A = null, F = false, m = es, h = null;
        function v() {
          t(6, m = es), clearInterval(h), h = setInterval(() => {
            t(6, m -= 1), m <= 0 && clearInterval(h);
          }, 1e3);
        }
        function b() {
          t(5, F = false), clearInterval(h), pa();
        }
        async function _() {
          t(5, F = false), clearInterval(h), Ex(), await gx(), i0("/login");
        }
        function D(p) {
          const k = p.detail.location;
          t(0, u = k), window.scrollTo(0, 0), !(k === "/" || k === "/login" || k.startsWith("/signup")) && G0() ? Fa({
            onWarnCallback: () => {
              t(5, F = true), v();
            },
            onExpiredCallback: _
          }) : (Ex(), t(5, F = false), clearInterval(h));
        }
        return z0(async () => {
          try {
            await Lr(), t(3, B = true);
          } catch (p) {
            t(4, A = p.message);
          }
        }), [
          u,
          f,
          E,
          B,
          A,
          F,
          m,
          n,
          o,
          s,
          l,
          a,
          C,
          b,
          _,
          D
        ];
      }
      class G8 extends D0 {
        constructor(e) {
          super(), p0(this, e, V8, U8, A0, {});
        }
      }
      "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
      new G8({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
