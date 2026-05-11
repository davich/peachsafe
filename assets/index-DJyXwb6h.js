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
          for (const s of o) if (s.type === "childList") for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
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
      function bt(x, e) {
        for (const t in e) x[t] = e[t];
        return x;
      }
      function xs(x) {
        return x();
      }
      function Vx() {
        return /* @__PURE__ */ Object.create(null);
      }
      function re(x) {
        x.forEach(xs);
      }
      function Rt(x) {
        return typeof x == "function";
      }
      function pe(x, e) {
        return x != x ? e == e : x !== e || x && typeof x == "object" || typeof x == "function";
      }
      let Ct;
      function Gx(x, e) {
        return x === e ? true : (Ct || (Ct = document.createElement("a")), Ct.href = e, x === Ct.href);
      }
      function tl(x) {
        return Object.keys(x).length === 0;
      }
      function ns(x, ...e) {
        if (x == null) {
          for (const n of e) n(void 0);
          return X;
        }
        const t = x.subscribe(...e);
        return t.unsubscribe ? () => t.unsubscribe() : t;
      }
      function je(x, e, t) {
        x.$$.on_destroy.push(ns(e, t));
      }
      function Yx(x, e, t) {
        return x.set(t), e;
      }
      function Se(x) {
        return x && Rt(x.destroy) ? x.destroy : X;
      }
      function a(x, e) {
        x.appendChild(e);
      }
      function T(x, e, t) {
        x.insertBefore(e, t || null);
      }
      function P(x) {
        x.parentNode && x.parentNode.removeChild(x);
      }
      function Ke(x, e) {
        for (let t = 0; t < x.length; t += 1) x[t] && x[t].d(e);
      }
      function E(x) {
        return document.createElement(x);
      }
      function z(x) {
        return document.createTextNode(x);
      }
      function g() {
        return z(" ");
      }
      function s0() {
        return z("");
      }
      function U(x, e, t, n) {
        return x.addEventListener(e, t, n), () => x.removeEventListener(e, t, n);
      }
      function C0(x) {
        return function(e) {
          return e.preventDefault(), x.call(this, e);
        };
      }
      function xl(x) {
        return function(e) {
          return e.stopPropagation(), x.call(this, e);
        };
      }
      function c(x, e, t) {
        t == null ? x.removeAttribute(e) : x.getAttribute(e) !== t && x.setAttribute(e, t);
      }
      function nl(x) {
        return Array.from(x.childNodes);
      }
      function G(x, e) {
        e = "" + e, x.data !== e && (x.data = e);
      }
      function se(x, e) {
        x.value = e ?? "";
      }
      function te(x, e, t) {
        x.classList.toggle(e, !!t);
      }
      function ol(x, e, { bubbles: t = false, cancelable: n = false } = {}) {
        return new CustomEvent(x, {
          detail: e,
          bubbles: t,
          cancelable: n
        });
      }
      function gt(x, e) {
        return new x(e);
      }
      let nt;
      function X0(x) {
        nt = x;
      }
      function Ht() {
        if (!nt) throw new Error("Function called outside component initialization");
        return nt;
      }
      function Ue(x) {
        Ht().$$.on_mount.push(x);
      }
      function sl(x) {
        Ht().$$.after_update.push(x);
      }
      function Ot(x) {
        Ht().$$.on_destroy.push(x);
      }
      function os() {
        const x = Ht();
        return (e, t, { cancelable: n = false } = {}) => {
          const o = x.$$.callbacks[e];
          if (o) {
            const s = ol(e, t, {
              cancelable: n
            });
            return o.slice().forEach((r) => {
              r.call(x, s);
            }), !s.defaultPrevented;
          }
          return true;
        };
      }
      function cx(x, e) {
        const t = x.$$.callbacks[e.type];
        t && t.slice().forEach((n) => n.call(this, e));
      }
      const H0 = [], wt = [];
      let O0 = [];
      const Kx = [], ss = Promise.resolve();
      let ux = false;
      function ls() {
        ux || (ux = true, ss.then(as));
      }
      function rs() {
        return ls(), ss;
      }
      function dx(x) {
        O0.push(x);
      }
      const Zt = /* @__PURE__ */ new Set();
      let N0 = 0;
      function as() {
        if (N0 !== 0) return;
        const x = nt;
        do {
          try {
            for (; N0 < H0.length; ) {
              const e = H0[N0];
              N0++, X0(e), ll(e.$$);
            }
          } catch (e) {
            throw H0.length = 0, N0 = 0, e;
          }
          for (X0(null), H0.length = 0, N0 = 0; wt.length; ) wt.pop()();
          for (let e = 0; e < O0.length; e += 1) {
            const t = O0[e];
            Zt.has(t) || (Zt.add(t), t());
          }
          O0.length = 0;
        } while (H0.length);
        for (; Kx.length; ) Kx.pop()();
        ux = false, Zt.clear(), X0(x);
      }
      function ll(x) {
        if (x.fragment !== null) {
          x.update(), re(x.before_update);
          const e = x.dirty;
          x.dirty = [
            -1
          ], x.fragment && x.fragment.p(x.ctx, e), x.after_update.forEach(dx);
        }
      }
      function rl(x) {
        const e = [], t = [];
        O0.forEach((n) => x.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), O0 = e;
      }
      const mt = /* @__PURE__ */ new Set();
      let g0;
      function W0() {
        g0 = {
          r: 0,
          c: [],
          p: g0
        };
      }
      function Q0() {
        g0.r || re(g0.c), g0 = g0.p;
      }
      function fe(x, e) {
        x && x.i && (mt.delete(x), x.i(e));
      }
      function Ae(x, e, t, n) {
        if (x && x.o) {
          if (mt.has(x)) return;
          mt.add(x), g0.c.push(() => {
            mt.delete(x), n && (t && x.d(1), n());
          }), x.o(e);
        } else n && n();
      }
      function Be(x) {
        return x?.length !== void 0 ? x : Array.from(x);
      }
      function al(x, e) {
        x.d(1), e.delete(x.key);
      }
      function il(x, e, t, n, o, s, r, l, i, u, d, f) {
        let B = x.length, C = s.length, A = B;
        const F = {};
        for (; A--; ) F[x[A].key] = A;
        const m = [], h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), b = [];
        for (A = C; A--; ) {
          const k = f(o, s, A), w = t(k);
          let y = r.get(w);
          y ? b.push(() => y.p(k, e)) : (y = u(w, k), y.c()), h.set(w, m[A] = y), w in F && v.set(w, Math.abs(A - F[w]));
        }
        const _ = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
        function p(k) {
          fe(k, 1), k.m(l, d), r.set(k.key, k), d = k.first, C--;
        }
        for (; B && C; ) {
          const k = m[C - 1], w = x[B - 1], y = k.key, S = w.key;
          k === w ? (d = k.first, B--, C--) : h.has(S) ? !r.has(y) || _.has(y) ? p(k) : D.has(S) ? B-- : v.get(y) > v.get(S) ? (D.add(y), p(k)) : (_.add(S), B--) : (i(w, r), B--);
        }
        for (; B--; ) {
          const k = x[B];
          h.has(k.key) || i(k, r);
        }
        for (; C; ) p(m[C - 1]);
        return re(b), m;
      }
      function yt(x, e) {
        const t = {}, n = {}, o = {
          $$scope: 1
        };
        let s = x.length;
        for (; s--; ) {
          const r = x[s], l = e[s];
          if (l) {
            for (const i in r) i in l || (n[i] = 1);
            for (const i in l) o[i] || (t[i] = l[i], o[i] = 1);
            x[s] = l;
          } else for (const i in r) o[i] = 1;
        }
        for (const r in n) r in t || (t[r] = void 0);
        return t;
      }
      function Pt(x) {
        return typeof x == "object" && x !== null ? x : {};
      }
      function Ne(x) {
        x && x.c();
      }
      function Me(x, e, t) {
        const { fragment: n, after_update: o } = x.$$;
        n && n.m(e, t), dx(() => {
          const s = x.$$.on_mount.map(xs).filter(Rt);
          x.$$.on_destroy ? x.$$.on_destroy.push(...s) : re(s), x.$$.on_mount = [];
        }), o.forEach(dx);
      }
      function Le(x, e) {
        const t = x.$$;
        t.fragment !== null && (rl(t.after_update), re(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
      }
      function cl(x, e) {
        x.$$.dirty[0] === -1 && (H0.push(x), ls(), x.$$.dirty.fill(0)), x.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function he(x, e, t, n, o, s, r = null, l = [
        -1
      ]) {
        const i = nt;
        X0(x);
        const u = x.$$ = {
          fragment: null,
          ctx: [],
          props: s,
          update: X,
          not_equal: o,
          bound: Vx(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (i ? i.$$.context : [])),
          callbacks: Vx(),
          dirty: l,
          skip_bound: false,
          root: e.target || i.$$.root
        };
        r && r(u.root);
        let d = false;
        if (u.ctx = t ? t(x, e.props || {}, (f, B, ...C) => {
          const A = C.length ? C[0] : B;
          return u.ctx && o(u.ctx[f], u.ctx[f] = A) && (!u.skip_bound && u.bound[f] && u.bound[f](A), d && cl(x, f)), B;
        }) : [], u.update(), d = true, re(u.before_update), u.fragment = n ? n(u.ctx) : false, e.target) {
          if (e.hydrate) {
            const f = nl(e.target);
            u.fragment && u.fragment.l(f), f.forEach(P);
          } else u.fragment && u.fragment.c();
          e.intro && fe(x.$$.fragment), Me(x, e.target, e.anchor), as();
        }
        X0(i);
      }
      class ve {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          Le(this, 1), this.$destroy = X;
        }
        $on(e, t) {
          if (!Rt(t)) return X;
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(t), () => {
            const o = n.indexOf(t);
            o !== -1 && n.splice(o, 1);
          };
        }
        $set(e) {
          this.$$set && !tl(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const ul = "4", z0 = [];
      function is(x, e) {
        return {
          subscribe: Ze(x, e).subscribe
        };
      }
      function Ze(x, e = X) {
        let t;
        const n = /* @__PURE__ */ new Set();
        function o(l) {
          if (pe(x, l) && (x = l, t)) {
            const i = !z0.length;
            for (const u of n) u[1](), z0.push(u, x);
            if (i) {
              for (let u = 0; u < z0.length; u += 2) z0[u][0](z0[u + 1]);
              z0.length = 0;
            }
          }
        }
        function s(l) {
          o(l(x));
        }
        function r(l, i = X) {
          const u = [
            l,
            i
          ];
          return n.add(u), n.size === 1 && (t = e(o, s) || X), l(x), () => {
            n.delete(u), n.size === 0 && t && (t(), t = null);
          };
        }
        return {
          set: o,
          update: s,
          subscribe: r
        };
      }
      function cs(x, e, t) {
        const n = !Array.isArray(x), o = n ? [
          x
        ] : x;
        if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const s = e.length < 2;
        return is(t, (r, l) => {
          let i = false;
          const u = [];
          let d = 0, f = X;
          const B = () => {
            if (d) return;
            f();
            const A = e(n ? u[0] : u, r, l);
            s ? r(A) : f = Rt(A) ? A : X;
          }, C = o.map((A, F) => ns(A, (m) => {
            u[F] = m, d &= ~(1 << F), i && B();
          }, () => {
            d |= 1 << F;
          }));
          return i = true, B(), function() {
            re(C), f(), i = false;
          };
        });
      }
      const dl = typeof localStorage < "u" ? localStorage.getItem("theme") : null, us = dl ?? "light", ht = Ze(us);
      typeof document < "u" && document.documentElement.setAttribute("data-theme", us);
      ht.subscribe((x) => {
        typeof localStorage < "u" && localStorage.setItem("theme", x), typeof document < "u" && document.documentElement.setAttribute("data-theme", x);
      });
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add(ul);
      function El(x, e) {
        if (x instanceof RegExp) return {
          keys: false,
          pattern: x
        };
        var t, n, o, s, r = [], l = "", i = x.split("/");
        for (i[0] || i.shift(); o = i.shift(); ) t = o[0], t === "*" ? (r.push("wild"), l += "/(.*)") : t === ":" ? (n = o.indexOf("?", 1), s = o.indexOf(".", 1), r.push(o.substring(1, ~n ? n : ~s ? s : o.length)), l += ~n && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)", ~s && (l += (~n ? "?" : "") + "\\" + o.substring(s))) : l += "/" + o;
        return {
          keys: r,
          pattern: new RegExp("^" + l + "/?$", "i")
        };
      }
      function fl(x) {
        let e, t, n;
        const o = [
          x[2]
        ];
        var s = x[0];
        function r(l, i) {
          let u = {};
          for (let d = 0; d < o.length; d += 1) u = bt(u, o[d]);
          return i !== void 0 && i & 4 && (u = bt(u, yt(o, [
            Pt(l[2])
          ]))), {
            props: u
          };
        }
        return s && (e = gt(s, r(x)), e.$on("routeEvent", x[7])), {
          c() {
            e && Ne(e.$$.fragment), t = s0();
          },
          m(l, i) {
            e && Me(e, l, i), T(l, t, i), n = true;
          },
          p(l, i) {
            if (i & 1 && s !== (s = l[0])) {
              if (e) {
                W0();
                const u = e;
                Ae(u.$$.fragment, 1, 0, () => {
                  Le(u, 1);
                }), Q0();
              }
              s ? (e = gt(s, r(l, i)), e.$on("routeEvent", l[7]), Ne(e.$$.fragment), fe(e.$$.fragment, 1), Me(e, t.parentNode, t)) : e = null;
            } else if (s) {
              const u = i & 4 ? yt(o, [
                Pt(l[2])
              ]) : {};
              e.$set(u);
            }
          },
          i(l) {
            n || (e && fe(e.$$.fragment, l), n = true);
          },
          o(l) {
            e && Ae(e.$$.fragment, l), n = false;
          },
          d(l) {
            l && P(t), e && Le(e, l);
          }
        };
      }
      function Bl(x) {
        let e, t, n;
        const o = [
          {
            params: x[1]
          },
          x[2]
        ];
        var s = x[0];
        function r(l, i) {
          let u = {};
          for (let d = 0; d < o.length; d += 1) u = bt(u, o[d]);
          return i !== void 0 && i & 6 && (u = bt(u, yt(o, [
            i & 2 && {
              params: l[1]
            },
            i & 4 && Pt(l[2])
          ]))), {
            props: u
          };
        }
        return s && (e = gt(s, r(x)), e.$on("routeEvent", x[6])), {
          c() {
            e && Ne(e.$$.fragment), t = s0();
          },
          m(l, i) {
            e && Me(e, l, i), T(l, t, i), n = true;
          },
          p(l, i) {
            if (i & 1 && s !== (s = l[0])) {
              if (e) {
                W0();
                const u = e;
                Ae(u.$$.fragment, 1, 0, () => {
                  Le(u, 1);
                }), Q0();
              }
              s ? (e = gt(s, r(l, i)), e.$on("routeEvent", l[6]), Ne(e.$$.fragment), fe(e.$$.fragment, 1), Me(e, t.parentNode, t)) : e = null;
            } else if (s) {
              const u = i & 6 ? yt(o, [
                i & 2 && {
                  params: l[1]
                },
                i & 4 && Pt(l[2])
              ]) : {};
              e.$set(u);
            }
          },
          i(l) {
            n || (e && fe(e.$$.fragment, l), n = true);
          },
          o(l) {
            e && Ae(e.$$.fragment, l), n = false;
          },
          d(l) {
            l && P(t), e && Le(e, l);
          }
        };
      }
      function Cl(x) {
        let e, t, n, o;
        const s = [
          Bl,
          fl
        ], r = [];
        function l(i, u) {
          return i[1] ? 0 : 1;
        }
        return e = l(x), t = r[e] = s[e](x), {
          c() {
            t.c(), n = s0();
          },
          m(i, u) {
            r[e].m(i, u), T(i, n, u), o = true;
          },
          p(i, [u]) {
            let d = e;
            e = l(i), e === d ? r[e].p(i, u) : (W0(), Ae(r[d], 1, 1, () => {
              r[d] = null;
            }), Q0(), t = r[e], t ? t.p(i, u) : (t = r[e] = s[e](i), t.c()), fe(t, 1), t.m(n.parentNode, n));
          },
          i(i) {
            o || (fe(t), o = true);
          },
          o(i) {
            Ae(t), o = false;
          },
          d(i) {
            i && P(n), r[e].d(i);
          }
        };
      }
      function Wx() {
        const x = window.location.href.indexOf("#/");
        let e = x > -1 ? window.location.href.substr(x + 1) : "/";
        const t = e.indexOf("?");
        let n = "";
        return t > -1 && (n = e.substr(t + 1), e = e.substr(0, t)), {
          location: e,
          querystring: n
        };
      }
      const vx = is(null, function(e) {
        e(Wx());
        const t = () => {
          e(Wx());
        };
        return window.addEventListener("hashchange", t, false), function() {
          window.removeEventListener("hashchange", t, false);
        };
      }), Al = cs(vx, (x) => x.location);
      cs(vx, (x) => x.querystring);
      const Qx = Ze(void 0);
      async function ue(x) {
        if (!x || x.length < 1 || x.charAt(0) != "/" && x.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await rs(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (x.charAt(0) == "#" ? "" : "#") + x;
      }
      function Fl(x) {
        x ? window.scrollTo(x.__svelte_spa_router_scrollX, x.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function pl(x, e, t) {
        let { routes: n = {} } = e, { prefix: o = "" } = e, { restoreScrollState: s = false } = e;
        class r {
          constructor(D, p) {
            if (!p || typeof p != "function" && (typeof p != "object" || p._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!D || typeof D == "string" && (D.length < 1 || D.charAt(0) != "/" && D.charAt(0) != "*") || typeof D == "object" && !(D instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: k, keys: w } = El(D);
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
        const l = [];
        n instanceof Map ? n.forEach((_, D) => {
          l.push(new r(D, _));
        }) : Object.keys(n).forEach((_) => {
          l.push(new r(_, n[_]));
        });
        let i = null, u = null, d = {};
        const f = os();
        async function B(_, D) {
          await rs(), f(_, D);
        }
        let C = null, A = null;
        s && (A = (_) => {
          _.state && (_.state.__svelte_spa_router_scrollY || _.state.__svelte_spa_router_scrollX) ? C = _.state : C = null;
        }, window.addEventListener("popstate", A), sl(() => {
          Fl(C);
        }));
        let F = null, m = null;
        const h = vx.subscribe(async (_) => {
          F = _;
          let D = 0;
          for (; D < l.length; ) {
            const p = l[D].match(_.location);
            if (!p) {
              D++;
              continue;
            }
            const k = {
              route: l[D].path,
              location: _.location,
              querystring: _.querystring,
              userData: l[D].userData,
              params: p && typeof p == "object" && Object.keys(p).length ? p : null
            };
            if (!await l[D].checkConditions(k)) {
              t(0, i = null), m = null, B("conditionsFailed", k);
              return;
            }
            B("routeLoading", Object.assign({}, k));
            const w = l[D].component;
            if (m != w) {
              w.loading ? (t(0, i = w.loading), m = w, t(1, u = w.loadingParams), t(2, d = {}), B("routeLoaded", Object.assign({}, k, {
                component: i,
                name: i.name,
                params: u
              }))) : (t(0, i = null), m = null);
              const y = await w();
              if (_ != F) return;
              t(0, i = y && y.default || y), m = w;
            }
            p && typeof p == "object" && Object.keys(p).length ? t(1, u = p) : t(1, u = null), t(2, d = l[D].props), B("routeLoaded", Object.assign({}, k, {
              component: i,
              name: i.name,
              params: u
            })).then(() => {
              Qx.set(u);
            });
            return;
          }
          t(0, i = null), m = null, Qx.set(void 0);
        });
        Ot(() => {
          h(), A && window.removeEventListener("popstate", A);
        });
        function v(_) {
          cx.call(this, x, _);
        }
        function b(_) {
          cx.call(this, x, _);
        }
        return x.$$set = (_) => {
          "routes" in _ && t(3, n = _.routes), "prefix" in _ && t(4, o = _.prefix), "restoreScrollState" in _ && t(5, s = _.restoreScrollState);
        }, x.$$.update = () => {
          x.$$.dirty & 32 && (history.scrollRestoration = s ? "manual" : "auto");
        }, [
          i,
          u,
          d,
          n,
          o,
          s,
          v,
          b
        ];
      }
      class Dl extends ve {
        constructor(e) {
          super(), he(this, e, pl, Cl, pe, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const ml = "/assets/peachsafe_core_wasm_bg-C8H6g175.wasm", hl = async (x = {}, e) => {
        let t;
        if (e.startsWith("data:")) {
          const n = e.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(n, "base64");
          else if (typeof atob == "function") {
            const s = atob(n);
            o = new Uint8Array(s.length);
            for (let r = 0; r < s.length; r++) o[r] = s.charCodeAt(r);
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
      function vl(x, e) {
        const t = me.aesGcmDecrypt(x, e);
        if (t[2]) throw ze(t[1]);
        return ze(t[0]);
      }
      function _l(x, e) {
        const t = me.aesGcmEncrypt(x, e);
        if (t[2]) throw ze(t[1]);
        return ze(t[0]);
      }
      function kl(x, e) {
        const t = fs(x, me.__wbindgen_malloc, me.__wbindgen_realloc), n = Tt, o = me.argon2idDerive(t, n, e);
        if (o[2]) throw ze(o[1]);
        return ze(o[0]);
      }
      function bl(x) {
        const e = me.deriveAlertKey(x);
        if (e[2]) throw ze(e[1]);
        return ze(e[0]);
      }
      function gl(x, e) {
        const t = me.deriveEncounterToken(x, e);
        if (t[2]) throw ze(t[1]);
        return ze(t[0]);
      }
      function wl(x) {
        const e = me.ed25519PubkeyFromSeed(x);
        if (e[2]) throw ze(e[1]);
        return ze(e[0]);
      }
      function yl(x, e) {
        const t = me.ed25519Sign(x, e);
        if (t[2]) throw ze(t[1]);
        return ze(t[0]);
      }
      function Pl() {
        const x = me.generateEphemeralKeypair();
        if (x[2]) throw ze(x[1]);
        return ze(x[0]);
      }
      function Tl(x) {
        return me.generateRandomBytes(x);
      }
      function ds(x) {
        return me.sha256(x);
      }
      function Sl(x, e, t) {
        const n = fs(x, me.__wbindgen_malloc, me.__wbindgen_realloc), o = Tt, s = me.solvePoW(n, o, e, t);
        if (s[2]) throw ze(s[1]);
        return ze(s[0]);
      }
      function Il(x) {
        return typeof x == "function";
      }
      function Ml(x) {
        const e = x;
        return typeof e == "object" && e !== null;
      }
      function Ll(x) {
        return typeof x == "string";
      }
      function Nl(x) {
        return x === void 0;
      }
      function zl(x, e) {
        throw new Error(Es(x, e));
      }
      function ql() {
        return at(function(x, e, t) {
          return x.call(e, t);
        }, arguments);
      }
      function Rl(x) {
        return x.crypto;
      }
      function Hl() {
        return at(function(x, e) {
          x.getRandomValues(e);
        }, arguments);
      }
      function Ol(x) {
        return x.length;
      }
      function Ul(x) {
        return x.msCrypto;
      }
      function jl() {
        return new Object();
      }
      function Vl(x) {
        return new Uint8Array(x >>> 0);
      }
      function Gl(x) {
        return x.node;
      }
      function Yl(x) {
        return x.process;
      }
      function Kl(x, e, t) {
        Uint8Array.prototype.set.call(_x(x, e), t);
      }
      function Wl() {
        return at(function(x, e) {
          x.randomFillSync(e);
        }, arguments);
      }
      function Ql() {
        return at(function() {
          return module.require;
        }, arguments);
      }
      function Jl() {
        return at(function(x, e, t) {
          return Reflect.set(x, e, t);
        }, arguments);
      }
      function Xl(x, e, t) {
        x.set(_x(e, t));
      }
      function Zl() {
        const x = typeof global > "u" ? null : global;
        return Ut(x) ? 0 : rt(x);
      }
      function $l() {
        const x = typeof globalThis > "u" ? null : globalThis;
        return Ut(x) ? 0 : rt(x);
      }
      function er() {
        const x = typeof self > "u" ? null : self;
        return Ut(x) ? 0 : rt(x);
      }
      function tr() {
        const x = typeof window > "u" ? null : window;
        return Ut(x) ? 0 : rt(x);
      }
      function xr(x, e, t) {
        return x.subarray(e >>> 0, t >>> 0);
      }
      function nr(x) {
        return x.versions;
      }
      function or(x) {
        return x;
      }
      function sr(x, e) {
        return _x(x, e);
      }
      function lr(x, e) {
        return Es(x, e);
      }
      function rr() {
        const x = me.__wbindgen_externrefs, e = x.grow(4);
        x.set(0, void 0), x.set(e + 0, void 0), x.set(e + 1, null), x.set(e + 2, true), x.set(e + 3, false);
      }
      function rt(x) {
        const e = me.__externref_table_alloc();
        return me.__wbindgen_externrefs.set(e, x), e;
      }
      function _x(x, e) {
        return x = x >>> 0, Z0().subarray(x / 1, x / 1 + e);
      }
      function Es(x, e) {
        return x = x >>> 0, ir(x, e);
      }
      let At = null;
      function Z0() {
        return (At === null || At.byteLength === 0) && (At = new Uint8Array(me.memory.buffer)), At;
      }
      function at(x, e) {
        try {
          return x.apply(this, e);
        } catch (t) {
          const n = rt(t);
          me.__wbindgen_exn_store(n);
        }
      }
      function Ut(x) {
        return x == null;
      }
      function fs(x, e, t) {
        if (t === void 0) {
          const l = $0.encode(x), i = e(l.length, 1) >>> 0;
          return Z0().subarray(i, i + l.length).set(l), Tt = l.length, i;
        }
        let n = x.length, o = e(n, 1) >>> 0;
        const s = Z0();
        let r = 0;
        for (; r < n; r++) {
          const l = x.charCodeAt(r);
          if (l > 127) break;
          s[o + r] = l;
        }
        if (r !== n) {
          r !== 0 && (x = x.slice(r)), o = t(o, n, n = r + x.length * 3, 1) >>> 0;
          const l = Z0().subarray(o + r, o + n), i = $0.encodeInto(x, l);
          r += i.written, o = t(o, n, r, 1) >>> 0;
        }
        return Tt = r, o;
      }
      function ze(x) {
        const e = me.__wbindgen_externrefs.get(x);
        return me.__externref_table_dealloc(x), e;
      }
      let vt = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      vt.decode();
      const ar = 2146435072;
      let $t = 0;
      function ir(x, e) {
        return $t += e, $t >= ar && (vt = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), vt.decode(), $t = e), vt.decode(Z0().subarray(x, x + e));
      }
      const $0 = new TextEncoder();
      "encodeInto" in $0 || ($0.encodeInto = function(x, e) {
        const t = $0.encode(x);
        return e.set(t), {
          read: x.length,
          written: t.length
        };
      });
      let Tt = 0, me;
      function cr(x) {
        me = x;
      }
      URL = globalThis.URL;
      const ur = await hl({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: Rl,
          __wbg_process_44c7a14e11e9f69e: Yl,
          __wbg_versions_276b2795b1c6a219: nr,
          __wbg_node_84ea875411254db1: Gl,
          __wbg_require_b4edbdcf3e2a1ef0: Ql,
          __wbg_call_a24592a6f349a97e: ql,
          __wbg_msCrypto_bd5a034af96bcba6: Ul,
          __wbg_randomFillSync_6c25eac9869eb53c: Wl,
          __wbg_getRandomValues_c44a50d8cfdaebeb: Hl,
          __wbg_new_aa8d0fa9762c29bd: jl,
          __wbg_length_9f1775224cf1d815: Ol,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: Kl,
          __wbg_new_with_length_8c854e41ea4dae9b: Vl,
          __wbg_subarray_f8ca46a25b1f5e0d: xr,
          __wbg_set_3d484eb794afec82: Xl,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: $l,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: er,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: Zl,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: tr,
          __wbg_set_022bee52d0b05b19: Jl,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: zl,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: Ml,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: Ll,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: Il,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: Nl,
          __wbindgen_init_externref_table: rr,
          __wbindgen_cast_0000000000000001: or,
          __wbindgen_cast_0000000000000002: sr,
          __wbindgen_cast_0000000000000003: lr
        }
      }, ml), { memory: dr, aesGcmDecrypt: Er, aesGcmEncrypt: fr, argon2idDerive: Br, deriveAlertKey: Cr, deriveEncounterToken: Ar, ed25519PubkeyFromSeed: Fr, ed25519Sign: pr, ed25519Verify: Dr, generateEphemeralKeypair: mr, generateRandomBytes: hr, generateUserKeypair: vr, main: _r, serializePublicKey: kr, sha256: br, solvePoW: gr, __wbindgen_exn_store: wr, __externref_table_alloc: yr, __wbindgen_externrefs: Pr, __externref_table_dealloc: Tr, __wbindgen_malloc: Sr, __wbindgen_realloc: Ir, __wbindgen_free: Mr, __wbindgen_start: Bs } = ur, Lr = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: yr,
        __externref_table_dealloc: Tr,
        __wbindgen_exn_store: wr,
        __wbindgen_externrefs: Pr,
        __wbindgen_free: Mr,
        __wbindgen_malloc: Sr,
        __wbindgen_realloc: Ir,
        __wbindgen_start: Bs,
        aesGcmDecrypt: Er,
        aesGcmEncrypt: fr,
        argon2idDerive: Br,
        deriveAlertKey: Cr,
        deriveEncounterToken: Ar,
        ed25519PubkeyFromSeed: Fr,
        ed25519Sign: pr,
        ed25519Verify: Dr,
        generateEphemeralKeypair: mr,
        generateRandomBytes: hr,
        generateUserKeypair: vr,
        main: _r,
        memory: dr,
        serializePublicKey: kr,
        sha256: br,
        solvePoW: gr
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      cr(Lr);
      Bs();
      let Ex = false;
      async function Nr() {
        Ex || (Ex = true);
      }
      function t0() {
        if (!Ex) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function Oe(x) {
        const e = new Uint8Array(x.length / 2);
        for (let t = 0; t < x.length; t += 2) e[t / 2] = parseInt(x.slice(t, t + 2), 16);
        return e;
      }
      function xe(x) {
        return Array.from(x).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function it(x) {
        return t0(), Tl(x);
      }
      async function f0(x, e) {
        return t0(), await new Promise((t) => setTimeout(t, 0)), kl(x, e);
      }
      function ct(x, e) {
        return t0(), _l(x, e);
      }
      function jt(x, e) {
        return t0(), vl(x, e);
      }
      function zr() {
        return t0(), Pl();
      }
      function qr(x, e) {
        return t0(), gl(x, e);
      }
      function Cs(x) {
        return t0(), wl(x);
      }
      function As(x, e) {
        return t0(), yl(x, e);
      }
      function Rr(x) {
        return t0(), ds(x);
      }
      function Fs(x) {
        return t0(), bl(x);
      }
      function Hr(x, e, t) {
        return t0(), Sl(x, e, t);
      }
      function P0(x) {
        let e = "";
        for (let t = 0; t < x.length; t++) e += String.fromCharCode(x[t]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function ps(x) {
        const t = (x + "===".slice((x.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(t), (n) => n.charCodeAt(0));
      }
      function Or(x, e, t, n) {
        const o = n && n.trim() ? encodeURIComponent(n.trim()) : "";
        return `2|${x}|${e}|${t}|${o}`;
      }
      function Jx(x) {
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
      function w0(x, e, t) {
        t0();
        const n = new Uint8Array(68);
        return n.set(x, 0), n.set(e, 32), n[64] = t >>> 24 & 255, n[65] = t >>> 16 & 255, n[66] = t >>> 8 & 255, n[67] = t & 255, ds(n);
      }
      const T0 = Ze("ok");
      let Ds = "ok";
      T0.subscribe((x) => {
        Ds = x;
      });
      let St = null;
      function Ur() {
        clearTimeout(St ?? void 0), T0.set("retrying");
      }
      function jr() {
        Ds !== "ok" && (clearTimeout(St ?? void 0), T0.set("reconnected"), St = setTimeout(() => T0.set("ok"), 3e3));
      }
      function Xx() {
        clearTimeout(St ?? void 0), T0.set("down");
      }
      function Zx(x) {
        let e;
        function t(s, r) {
          if (s[0] === "retrying") return Yr;
          if (s[0] === "down") return Gr;
          if (s[0] === "reconnected") return Vr;
        }
        let n = t(x), o = n && n(x);
        return {
          c() {
            e = E("div"), o && o.c(), c(e, "class", "banner svelte-176fo9c"), c(e, "role", "status"), c(e, "aria-live", "polite"), te(e, "retrying", x[0] === "retrying"), te(e, "down", x[0] === "down"), te(e, "reconnected", x[0] === "reconnected");
          },
          m(s, r) {
            T(s, e, r), o && o.m(e, null);
          },
          p(s, r) {
            n !== (n = t(s)) && (o && o.d(1), o = n && n(s), o && (o.c(), o.m(e, null))), r & 1 && te(e, "retrying", s[0] === "retrying"), r & 1 && te(e, "down", s[0] === "down"), r & 1 && te(e, "reconnected", s[0] === "reconnected");
          },
          d(s) {
            s && P(e), o && o.d();
          }
        };
      }
      function Vr(x) {
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
      function Gr(x) {
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
      function Yr(x) {
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
        let e, t = x[0] !== "ok" && Zx(x);
        return {
          c() {
            t && t.c(), e = s0();
          },
          m(n, o) {
            t && t.m(n, o), T(n, e, o);
          },
          p(n, [o]) {
            n[0] !== "ok" ? t ? t.p(n, o) : (t = Zx(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
          },
          i: X,
          o: X,
          d(n) {
            n && P(e), t && t.d(n);
          }
        };
      }
      function Wr(x, e, t) {
        let n;
        return je(x, T0, (o) => t(0, n = o)), [
          n
        ];
      }
      class Qr extends ve {
        constructor(e) {
          super(), he(this, e, Wr, Kr, pe, {});
        }
      }
      const Vt = Ze(false);
      function Jr() {
        Vt.set(false);
      }
      const _e = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", ex = [
        1e3,
        2e3,
        4e3
      ], $x = /* @__PURE__ */ new Set([
        502,
        503,
        504
      ]);
      async function h0(x, e = {}) {
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
            if (!$x.has(o.status) || n >= ex.length) return $x.has(o.status) ? Xx() : jr(), o;
          } catch (o) {
            if (n >= ex.length) throw Xx(), o;
          }
          Ur(), await new Promise((o) => setTimeout(o, ex[n]));
        }
      }
      let S0 = null, kx = null, bx = null;
      const ot = "peachsafe_device_tokens";
      function Xr(x) {
        try {
          return JSON.parse(localStorage.getItem(ot) ?? "{}")[x] ?? null;
        } catch {
          return null;
        }
      }
      function Zr(x, e) {
        try {
          const t = JSON.parse(localStorage.getItem(ot) ?? "{}");
          t[x] = e, localStorage.setItem(ot, JSON.stringify(t));
        } catch {
        }
      }
      function tx(x) {
        try {
          const e = JSON.parse(localStorage.getItem(ot) ?? "{}");
          delete e[x], localStorage.setItem(ot, JSON.stringify(e));
        } catch {
        }
      }
      const M0 = Ze(null), Gt = Ze(null), st = Ze(null), et = Ze(null), It = Ze(null);
      function We() {
        return S0 !== null;
      }
      function gx(x) {
        kx = x;
      }
      function I0() {
        return kx;
      }
      function ms(x) {
        bx = x;
      }
      function _t() {
        return bx;
      }
      function hs() {
        S0 = null, kx = null, bx = null, M0.set(null), Gt.set(null), st.set(null), et.set(null), It.set(null), Jr();
      }
      async function $r() {
        try {
          const x = await ea();
          M0.set(x.verified);
        } catch {
        }
      }
      async function ea() {
        const x = await Ve(`${_e}/v1/web/user/email`);
        if (!x.ok) throw new Error(await we(x));
        return x.json();
      }
      async function ta(x) {
        const e = await Ve(`${_e}/v1/web/user/request-email-change`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            new_email: x
          })
        });
        if (!e.ok) throw new Error(await we(e));
      }
      async function xa() {
        const x = await Ve(`${_e}/v1/web/user/resend-verification`, {
          method: "POST"
        });
        if (!x.ok) throw new Error(await we(x));
      }
      async function na(x) {
        const e = await h0(`${_e}/v1/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: x
          })
        });
        if (!e.ok) throw new Error(await we(e));
        M0.set(true);
      }
      async function wx(x) {
        const e = await h0(`${_e}/v1/prelogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: x
          })
        });
        if (!e.ok) throw new Error(await we(e));
        return e.json();
      }
      async function oa(x, e, t) {
        const n = await h0(`${_e}/v1/signup`, {
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
        if (!n.ok) throw new Error(await we(n));
        const o = await n.json();
        return S0 = o.session_token ?? null, M0.set(false), o;
      }
      async function en(x, e, t = null, n = false) {
        const o = {
          username: x,
          auth_signature: e
        };
        t && (o.otp = t), n && (o.remember_device = true);
        const s = Xr(x);
        s && (o.device_token = s);
        const r = await h0(`${_e}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(o)
        });
        if (!r.ok) throw new Error(await we(r));
        const l = await r.json();
        return l.requires_otp || (S0 = l.session_token ?? null, l.device_token && Zr(x, l.device_token), l.bootstrap ? (M0.set(l.bootstrap.email_verified), Gt.set(l.bootstrap.email), st.set(l.bootstrap.totp_enabled), et.set(l.bootstrap.trusted_devices ?? null), It.set(l.bootstrap.backup_code_count ?? null)) : $r()), l;
      }
      async function sa() {
        const x = await Ve(`${_e}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!x.ok) throw new Error(await we(x));
        return x.json();
      }
      async function la(x, e) {
        const t = await Ve(`${_e}/v1/web/totp/confirm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            secret: x,
            otp: e
          })
        });
        if (!t.ok) throw new Error(await we(t));
        return t.json();
      }
      async function ra() {
        const x = await Ve(`${_e}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!x.ok) throw new Error(await we(x));
      }
      async function aa() {
        const x = await Ve(`${_e}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!x.ok) throw new Error(await we(x));
        return x.json();
      }
      async function ia(x) {
        const e = await Ve(`${_e}/v1/web/trusted-devices/${x}`, {
          method: "DELETE"
        });
        if (!e.ok) throw new Error(await we(e));
      }
      async function ca() {
        const x = await Ve(`${_e}/v1/web/trusted-devices`, {
          method: "DELETE"
        });
        if (!x.ok) throw new Error(await we(x));
      }
      async function yx() {
        if (!S0) return;
        const x = S0;
        hs(), h0(`${_e}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${x}`
          }
        }).catch(() => {
        });
      }
      async function ua() {
        const x = await Ve(`${_e}/v1/web/user/blob`);
        if (!x.ok) throw new Error(await we(x));
        return x.json();
      }
      async function da(x, e) {
        const t = await Ve(`${_e}/v1/web/user/blob`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            blob: x,
            expected_version: e
          })
        });
        if (!t.ok) throw new Error(await we(t));
        return t.json();
      }
      async function vs(x, e) {
        const t = await Ve(`${_e}/v1/web/user/encounters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: x,
            date: e
          })
        });
        if (!t.ok) throw new Error(await we(t));
        return t.json();
      }
      async function Ea(x, e, t, n) {
        const o = await Ve(`${_e}/v1/web/user/change-password`, {
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
        if (!o.ok) throw new Error(await we(o));
      }
      async function fa() {
        const x = await Ve(`${_e}/v1/web/user`, {
          method: "DELETE"
        });
        if (!x.ok) throw new Error(await we(x));
        hs();
      }
      async function Ba(x) {
        const e = await h0(`${_e}/v1/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            tokens: x
          })
        });
        if (!e.ok) throw new Error(await we(e));
        return e.json();
      }
      async function Ca(x) {
        const e = await Ve(`${_e}/v1/web/user/encounters/by-token/${x}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await we(e));
      }
      async function Aa(x) {
        const e = await h0(`${_e}/v1/submit`, {
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
        const s = await we(e);
        throw Object.assign(new Error(s), {
          statusCode: e.status,
          serverTime: t,
          powDifficulty: o
        });
      }
      function _s() {
        fetch(_e, {
          method: "HEAD"
        }).catch(() => {
        });
      }
      function Ve(x, e = {}) {
        return h0(x, {
          ...e,
          headers: {
            Authorization: `Bearer ${S0}`,
            ...e.headers ?? {}
          }
        });
      }
      async function we(x) {
        try {
          return (await x.json()).error ?? `HTTP ${x.status}`;
        } catch {
          return `HTTP ${x.status}`;
        }
      }
      const tn = 15 * 60 * 1e3, Fa = 2 * 60 * 1e3, ks = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let fx = null, Bx = null, Px = null, Tx = null, Yt = false, ut = false;
      function Sx() {
        clearTimeout(fx ?? void 0), clearTimeout(Bx ?? void 0), Bx = setTimeout(() => {
          ut = true, Px?.();
        }, tn - Fa), fx = setTimeout(() => Tx?.(), tn);
      }
      function bs() {
        Yt && !ut && Sx();
      }
      function pa({ onWarnCallback: x, onExpiredCallback: e }) {
        Cx(), Px = x, Tx = e, Yt = true, ut = false;
        for (const t of ks) document.addEventListener(t, bs, {
          passive: true
        });
        Sx();
      }
      function Cx() {
        clearTimeout(fx ?? void 0), clearTimeout(Bx ?? void 0);
        for (const x of ks) document.removeEventListener(x, bs);
        Yt = false, ut = false, Px = null, Tx = null;
      }
      function Da() {
        ut = false, Yt && Sx();
      }
      function ma(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D, p, k, w, y, S, M, I, L, N, q, R, H, O, Q, V, Y, j, J;
        return {
          c() {
            e = E("main"), t = E("section"), t.innerHTML = `<div class="blob blob-1 svelte-1vrywgg" aria-hidden="true"></div> <div class="blob blob-2 svelte-1vrywgg" aria-hidden="true"></div> <div class="blob blob-3 svelte-1vrywgg" aria-hidden="true"></div> <div class="hero-content svelte-1vrywgg"><div class="hero-brand svelte-1vrywgg"><img src="/android-chrome-192x192.png" alt="" class="hero-icon svelte-1vrywgg"/> <span><span class="brand-peach svelte-1vrywgg">Peach</span><span class="brand-safe svelte-1vrywgg">Safe</span></span></div> <p class="hero-tagline svelte-1vrywgg">Know if you need to get tested \u2014 without anyone knowing who you slept with.</p> <p class="hero-sub svelte-1vrywgg">PeachSafe lets you notify past partners when you test positive for an STI,
        and get notified if a partner tests positive. No one ever learns who was
        with whom \u2014 not your partners, not us.</p> <div class="cta-buttons svelte-1vrywgg"><a href="#/signup" class="btn-primary svelte-1vrywgg">Sign up</a> <a href="#/login" class="btn-ghost svelte-1vrywgg">Log in</a></div></div> <div class="hero-scroll-hint svelte-1vrywgg" aria-hidden="true"><span class="material-icons svelte-1vrywgg">expand_more</span></div>`, n = g(), o = E("section"), s = E("div"), r = E("h2"), r.textContent = "How it works", l = g(), i = E("div"), u = E("div"), u.innerHTML = '<div class="step-number svelte-1vrywgg">1</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Exchange a code</h3> <p class="svelte-1vrywgg">Before a sexual encounter, both people scan each other&#39;s QR code. This generates a private, anonymous token that only the two of you share. Nothing identifying is stored or transmitted.</p></div>', d = g(), f = E("div"), f.innerHTML = '<div class="step-number svelte-1vrywgg">2</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Record a positive result</h3> <p class="svelte-1vrywgg">If you test positive, mark it in PeachSafe. Select what you tested positive for - notifications are specific, not vague.</p></div>', B = g(), C = E("div"), C.innerHTML = '<div class="step-number svelte-1vrywgg">3</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Partners are notified</h3> <p class="svelte-1vrywgg">PeachSafe notifies anyone who should know. If a past partner records a positive result, you&#39;ll receive an email. Neither of you learns the other&#39;s identity from the system.</p></div>', A = g(), F = E("div"), F.innerHTML = '<a href="#/how-it-works" class="svelte-1vrywgg">Want the technical deep dive? How it works in detail \u2192</a>', m = g(), h = E("section"), v = E("div"), b = E("h2"), b.textContent = "Why it's private", _ = g(), D = E("div"), p = E("div"), p.innerHTML = '<span class="material-icons svelte-1vrywgg">lock</span> <span>Your encounter data is encrypted. Only you can access it</span>', k = g(), w = E("div"), w.innerHTML = '<span class="material-icons svelte-1vrywgg">visibility_off</span> <span>The server is a blind message board; it can&#39;t connect notifications to real people</span>', y = g(), S = E("div"), S.innerHTML = '<span class="material-icons svelte-1vrywgg">shuffle</span> <span>Queries are padded with noise so even traffic analysis reveals nothing</span>', M = g(), I = E("div"), I.innerHTML = '<span class="material-icons svelte-1vrywgg">person_off</span> <span>No account is linked to your real name, phone number, or location</span>', L = g(), N = E("section"), q = E("div"), R = E("h2"), R.textContent = "Who it's for", H = g(), O = E("p"), O.textContent = `People who want to take sexual health seriously without the social and legal
        risks of conventional contact tracing \u2014 whether you're navigating dating apps,
        multiple partners, or just value your privacy.`, Q = g(), V = E("footer"), Y = E("div"), Y.innerHTML = '<a href="#/signup" class="btn-primary svelte-1vrywgg">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-1vrywgg">Log in</a>', c(t, "class", "hero svelte-1vrywgg"), c(r, "class", "svelte-1vrywgg"), c(u, "class", "step svelte-1vrywgg"), c(f, "class", "step svelte-1vrywgg"), c(C, "class", "step svelte-1vrywgg"), c(i, "class", "steps svelte-1vrywgg"), c(F, "class", "deep-dive svelte-1vrywgg"), c(s, "class", "section-inner svelte-1vrywgg"), c(o, "class", "how-it-works svelte-1vrywgg"), c(b, "class", "svelte-1vrywgg"), c(p, "class", "privacy-card svelte-1vrywgg"), c(w, "class", "privacy-card svelte-1vrywgg"), c(S, "class", "privacy-card svelte-1vrywgg"), c(I, "class", "privacy-card svelte-1vrywgg"), c(D, "class", "privacy-grid svelte-1vrywgg"), c(v, "class", "section-inner svelte-1vrywgg"), c(h, "class", "privacy svelte-1vrywgg"), c(R, "class", "svelte-1vrywgg"), c(O, "class", "svelte-1vrywgg"), c(q, "class", "section-inner svelte-1vrywgg"), c(N, "class", "who svelte-1vrywgg"), c(Y, "class", "footer-inner svelte-1vrywgg"), c(V, "class", "svelte-1vrywgg"), c(e, "data-theme", "light"), c(e, "class", "svelte-1vrywgg");
          },
          m(K, le) {
            T(K, e, le), a(e, t), a(e, n), a(e, o), a(o, s), a(s, r), a(s, l), a(s, i), a(i, u), a(i, d), a(i, f), a(i, B), a(i, C), a(s, A), a(s, F), a(e, m), a(e, h), a(h, v), a(v, b), a(v, _), a(v, D), a(D, p), a(D, k), a(D, w), a(D, y), a(D, S), a(D, M), a(D, I), a(e, L), a(e, N), a(N, q), a(q, R), a(q, H), a(q, O), a(e, Q), a(e, V), a(V, Y), j || (J = [
              Se(x[0].call(null, r)),
              Se(x[0].call(null, u, 0)),
              Se(x[0].call(null, f, 80)),
              Se(x[0].call(null, C, 160)),
              Se(x[0].call(null, F, 240)),
              Se(x[0].call(null, b)),
              Se(x[0].call(null, p, 0)),
              Se(x[0].call(null, w, 70)),
              Se(x[0].call(null, S, 140)),
              Se(x[0].call(null, I, 210)),
              Se(x[0].call(null, R)),
              Se(x[0].call(null, O, 60)),
              Se(x[0].call(null, Y))
            ], j = true);
          },
          p: X,
          i: X,
          o: X,
          d(K) {
            K && P(e), j = false, re(J);
          }
        };
      }
      function ha(x) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function t(n, o = 0) {
          if (e()) return {};
          n.style.opacity = "0", n.style.transform = "translateY(20px)", n.style.transition = `opacity 0.55s ease ${o}ms, transform 0.55s ease ${o}ms`;
          const s = new IntersectionObserver(([r]) => {
            r.isIntersecting && (n.style.opacity = "1", n.style.transform = "translateY(0)", s.disconnect());
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
      class va extends ve {
        constructor(e) {
          super(), he(this, e, ha, ma, pe, {});
        }
      }
      function _a(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D, p, k, w, y, S, M, I, L, N, q, R, H, O, Q, V, Y, j, J, K, le, ce, ae, oe, Ee, Ge, Z, ee, ie, Ce, Fe, ye, Re, Pe, be, ke, Ie, d0, A0, e0, F0, E0, _0, x0, Qe, n0, o0, De, k0, Je, Xe, l0, ne, Te, ge, p0, r0;
        return {
          c() {
            e = E("main"), t = E("nav"), t.innerHTML = `<a href="#/" class="nav-brand svelte-t8hosy"><img src="/android-chrome-192x192.png" alt="" class="nav-icon svelte-t8hosy"/> <span><span class="brand-peach svelte-t8hosy">Peach</span><span class="brand-safe svelte-t8hosy">Safe</span></span></a> <a href="#/" class="nav-back svelte-t8hosy"><span class="material-icons svelte-t8hosy">arrow_back</span>
      Back</a>`, n = g(), o = E("section"), o.innerHTML = '<div class="blob blob-1 svelte-t8hosy" aria-hidden="true"></div> <div class="blob blob-2 svelte-t8hosy" aria-hidden="true"></div> <div class="hero-content svelte-t8hosy"><h1 class="svelte-t8hosy">How PeachSafe Works</h1> <p class="svelte-t8hosy">PeachSafe is built so that even we can&#39;t know who you slept with, who notified you, or what you tested positive for. Here&#39;s exactly how.</p></div>', s = g(), r = E("nav"), l = E("div"), i = E("button"), i.textContent = "Authentication", u = g(), d = E("span"), d.textContent = "\xB7", f = g(), B = E("button"), B.textContent = "1:1 Encounters", C = g(), A = E("span"), A.textContent = "\xB7", F = g(), m = E("button"), m.textContent = "Ongoing Relationships", h = g(), v = E("span"), v.textContent = "\xB7", b = g(), _ = E("button"), _.textContent = "Group Encounters", D = g(), p = E("span"), p.textContent = "\xB7", k = g(), w = E("button"), w.textContent = "Encryption", y = g(), S = E("span"), S.textContent = "\xB7", M = g(), I = E("button"), I.textContent = "Noise Padding", L = g(), N = E("div"), q = E("section"), q.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">key</span></div> <h2 class="svelte-t8hosy">How does authentication work?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">At signup, your device derives a cryptographic key pair from your password and stores only the public key on the server. The password itself is never sent.</p> <p class="svelte-t8hosy">When you log in, the server issues a fresh random challenge. Your device hashes your password with an auth salt to derive a private key, signs the challenge with it, and sends the signature \u2014 not the password \u2014 to the server. The server verifies the signature using the stored public key.</p> <p class="svelte-t8hosy">A separate hash of your password against an encryption salt produces the key used to decrypt your data blob, which the server holds but cannot read.</p> <p class="svelte-t8hosy">Both salts are generated deterministically on the server by hashing your username with a server-side secret, so they can be retrieved at login time without storing any per-user secret in plaintext.</p> <div class="callout svelte-t8hosy"><span class="material-icons svelte-t8hosy">check_circle</span> <span>Your password never leaves your device. Each login uses a fresh challenge, preventing replay attacks.</span></div></div>', R = g(), H = E("section"), O = E("div"), O.innerHTML = '<div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">qr_code_scanner</span></div> <h2 class="svelte-t8hosy">How do 1:1 encounters work?</h2>', Q = g(), V = E("div"), Y = E("p"), j = z("Before a sexual encounter, both people scan each other's QR codes. This performs a Diffie-Hellman key exchange, producing a shared raw token that only the two of you can compute. Each QR code also contains a "), J = E("em"), J.textContent = "contact ID", K = z(" \u2014 a stable identifier used to detect repeat encounters (see "), le = E("button"), le.textContent = "Ongoing Relationships", ce = z(" below)."), ae = g(), oe = E("h3"), oe.textContent = "Sending a result", Ee = g(), Ge = E("p"), Ge.textContent = "When you test positive, PeachSafe sends an encrypted result to the server along with a token for each relevant encounter. Partners independently query the server with their own tokens to check for matches.", Z = g(), ee = E("h3"), ee.textContent = "Directional tokens", ie = g(), Ce = E("p"), Ce.textContent = "Tokens are directional: the token Alice uses to notify Bob is different from the one Bob uses to notify Alice. If both queried for the same token, the server could infer they'd been together. With different tokens, the server sees no link between them.", Fe = g(), ye = E("h3"), ye.textContent = "Single-use tokens", Re = g(), Pe = E("p"), Pe.textContent = "Each positive result uses a fresh token, derived as:", be = g(), ke = E("div"), ke.innerHTML = '<code class="svelte-t8hosy">token = hash(raw_token,  recipient&#39;s contact_id,  result_number)</code>', Ie = g(), d0 = E("p"), d0.textContent = "The result number increments with each positive result sent, so tokens are never reused. This makes it harder for a bad actor to track or correlate results over time.", A0 = g(), e0 = E("h3"), e0.textContent = "Encrypted results", F0 = g(), E0 = E("p"), E0.textContent = "Results are encrypted with a key derived from the sender's contact ID. Only someone who has exchanged QR codes with you holds that ID \u2014 the server never does. Even if the server's database were compromised, the results themselves would be unreadable.", _0 = g(), x0 = E("div"), x0.innerHTML = '<span class="material-icons svelte-t8hosy">check_circle</span> <span>Contact IDs are never sent to the server. The server stores ciphertext it cannot decrypt.</span>', Qe = g(), n0 = E("section"), n0.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">favorite</span></div> <h2 class="svelte-t8hosy">How do ongoing relationships work?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">Positive test results only notify encounters from the past 12 months. For regular partners \u2014 a FWB, for example \u2014 recreating an encounter each time would be cumbersome. PeachSafe detects repeat encounters using the stable contact ID in each QR code and asks if you&#39;d like to mark the person as an ongoing relationship.</p> <p class="svelte-t8hosy">Ongoing relationships remain active until either partner marks them as ended. Instead of the standard 12-month window, notifications continue until 12 months after the relationship was marked ended.</p> <div class="callout svelte-t8hosy"><span class="material-icons svelte-t8hosy">check_circle</span> <span>Contact IDs are never stored unencrypted, so repeat encounters cannot be linked by anyone with access to the server.</span></div></div>', o0 = g(), De = E("section"), De.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">group</span></div> <h2 class="svelte-t8hosy">How do group encounters work?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">Mutual QR scanning doesn&#39;t scale to groups. Instead, one person hosts the encounter and everyone else scans their single QR code to join. New participants can be added for up to 24 hours after the group is created.</p> <p class="svelte-t8hosy">Unlike 1:1 encounters \u2014 where the raw token comes from a Diffie-Hellman exchange \u2014 the group token is randomly generated by the host and distributed to all participants via the QR code. Everyone in the group queries the server for the same token when checking for results.</p> <div class="callout callout-warn svelte-t8hosy"><span class="material-icons svelte-t8hosy">info</span> <span>This is slightly less private than 1:1 encounters: a compromised server that sees multiple users querying the same token could infer they were in the same encounter.</span></div> <p class="svelte-t8hosy">Single-use tokens still apply \u2014 each positive result uses a new token derived from an incrementing result number, so repeated results can&#39;t be correlated over time.</p></div>', k0 = g(), Je = E("section"), Je.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">encrypted</span></div> <h2 class="svelte-t8hosy">How is my data encrypted?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">The web client encrypts all of your data \u2014 encounters, results, contact IDs \u2014 into a single blob using the key derived from your password. The server stores the blob but has no access to the decryption key and cannot read its contents.</p> <p class="svelte-t8hosy">The only things stored unencrypted on the server are <em class="svelte-t8hosy">notification tokens</em> and your user record (email address). Notification tokens are the receive-side tokens for each of your encounters \u2014 the tokens a partner would use to send a result to you. They&#39;re pre-uploaded so the server can match incoming positive results against them and send you an alert email, without being able to read the result itself.</p> <div class="callout svelte-t8hosy"><span class="material-icons svelte-t8hosy">check_circle</span> <span>We recommend using an email alias \u2014 such as <a href="https://addy.io" target="_blank" rel="noopener" class="svelte-t8hosy">addy.io</a> \u2014 if you&#39;d prefer we don&#39;t store your real address.</span></div></div>', Xe = g(), l0 = E("section"), l0.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">shuffle</span></div> <h2 class="svelte-t8hosy">What is noise padding?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">If PeachSafe queried for exactly as many tokens as you have encounters, a network observer could count your encounters from traffic alone. Instead, the app picks a random, higher number and queries for that many tokens \u2014 your real ones mixed with randomly generated decoys.</p> <p class="svelte-t8hosy">For example, even if you&#39;ve had a single encounter, your device might query the server for 87 tokens. The server cannot tell which tokens are real and which are noise, and neither can anyone watching the traffic. Your actual number of encounters stays private.</p></div>', ne = g(), Te = E("footer"), ge = E("div"), ge.innerHTML = '<p class="footer-cta-label svelte-t8hosy">Ready to try it?</p> <div class="footer-ctas svelte-t8hosy"><a href="#/signup" class="btn-primary svelte-t8hosy">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-t8hosy">Log in</a></div>', c(t, "class", "topnav svelte-t8hosy"), c(o, "class", "hero svelte-t8hosy"), c(i, "class", "svelte-t8hosy"), c(d, "class", "toc-sep svelte-t8hosy"), c(d, "aria-hidden", "true"), c(B, "class", "svelte-t8hosy"), c(A, "class", "toc-sep svelte-t8hosy"), c(A, "aria-hidden", "true"), c(m, "class", "svelte-t8hosy"), c(v, "class", "toc-sep svelte-t8hosy"), c(v, "aria-hidden", "true"), c(_, "class", "svelte-t8hosy"), c(p, "class", "toc-sep svelte-t8hosy"), c(p, "aria-hidden", "true"), c(w, "class", "svelte-t8hosy"), c(S, "class", "toc-sep svelte-t8hosy"), c(S, "aria-hidden", "true"), c(I, "class", "svelte-t8hosy"), c(l, "class", "toc-inner svelte-t8hosy"), c(r, "class", "toc svelte-t8hosy"), c(r, "aria-label", "On this page"), c(q, "class", "card svelte-t8hosy"), c(q, "id", "login"), c(O, "class", "section-header svelte-t8hosy"), c(J, "class", "svelte-t8hosy"), c(le, "class", "inline-link svelte-t8hosy"), c(Y, "class", "svelte-t8hosy"), c(oe, "class", "svelte-t8hosy"), c(Ge, "class", "svelte-t8hosy"), c(ee, "class", "svelte-t8hosy"), c(Ce, "class", "svelte-t8hosy"), c(ye, "class", "svelte-t8hosy"), c(Pe, "class", "svelte-t8hosy"), c(ke, "class", "formula svelte-t8hosy"), c(d0, "class", "svelte-t8hosy"), c(e0, "class", "svelte-t8hosy"), c(E0, "class", "svelte-t8hosy"), c(x0, "class", "callout svelte-t8hosy"), c(V, "class", "section-body svelte-t8hosy"), c(H, "class", "card svelte-t8hosy"), c(H, "id", "encounters"), c(n0, "class", "card svelte-t8hosy"), c(n0, "id", "relationships"), c(De, "class", "card svelte-t8hosy"), c(De, "id", "groups"), c(Je, "class", "card svelte-t8hosy"), c(Je, "id", "encryption"), c(l0, "class", "card svelte-t8hosy"), c(l0, "id", "noise"), c(N, "class", "content svelte-t8hosy"), c(ge, "class", "footer-inner"), c(Te, "class", "svelte-t8hosy"), c(e, "data-theme", "light"), c(e, "class", "svelte-t8hosy");
          },
          m(He, Et) {
            T(He, e, Et), a(e, t), a(e, n), a(e, o), a(e, s), a(e, r), a(r, l), a(l, i), a(l, u), a(l, d), a(l, f), a(l, B), a(l, C), a(l, A), a(l, F), a(l, m), a(l, h), a(l, v), a(l, b), a(l, _), a(l, D), a(l, p), a(l, k), a(l, w), a(l, y), a(l, S), a(l, M), a(l, I), a(e, L), a(e, N), a(N, q), a(N, R), a(N, H), a(H, O), a(H, Q), a(H, V), a(V, Y), a(Y, j), a(Y, J), a(Y, K), a(Y, le), a(Y, ce), a(V, ae), a(V, oe), a(V, Ee), a(V, Ge), a(V, Z), a(V, ee), a(V, ie), a(V, Ce), a(V, Fe), a(V, ye), a(V, Re), a(V, Pe), a(V, be), a(V, ke), a(V, Ie), a(V, d0), a(V, A0), a(V, e0), a(V, F0), a(V, E0), a(V, _0), a(V, x0), a(N, Qe), a(N, n0), a(N, o0), a(N, De), a(N, k0), a(N, Je), a(N, Xe), a(N, l0), a(e, ne), a(e, Te), a(Te, ge), p0 || (r0 = [
              U(i, "click", x[1]),
              U(B, "click", x[2]),
              U(m, "click", x[3]),
              U(_, "click", x[4]),
              U(w, "click", x[5]),
              U(I, "click", x[6]),
              Se(x[0].call(null, q)),
              U(le, "click", x[7]),
              Se(x[0].call(null, H)),
              Se(x[0].call(null, n0)),
              Se(x[0].call(null, De)),
              Se(x[0].call(null, Je)),
              Se(x[0].call(null, l0)),
              Se(x[0].call(null, ge))
            ], p0 = true);
          },
          p: X,
          i: X,
          o: X,
          d(He) {
            He && P(e), p0 = false, re(r0);
          }
        };
      }
      function b0(x) {
        document.getElementById(x)?.scrollIntoView({
          behavior: "smooth"
        });
      }
      function ka(x) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function t(d, f = 0) {
          if (e()) return {};
          d.style.opacity = "0", d.style.transform = "translateY(20px)", d.style.transition = `opacity 0.55s ease ${f}ms, transform 0.55s ease ${f}ms`;
          const B = new IntersectionObserver(([C]) => {
            C.isIntersecting && (d.style.opacity = "1", d.style.transform = "translateY(0)", B.disconnect());
          }, {
            threshold: 0.1
          });
          return B.observe(d), {
            destroy() {
              B.disconnect();
            }
          };
        }
        return [
          t,
          () => b0("login"),
          () => b0("encounters"),
          () => b0("relationships"),
          () => b0("groups"),
          () => b0("encryption"),
          () => b0("noise"),
          () => b0("relationships")
        ];
      }
      class ba extends ve {
        constructor(e) {
          super(), he(this, e, ka, _a, pe, {});
        }
      }
      const gs = 18262, ws = 65535, ga = 12 * 1024, ys = ga * 0.75, i0 = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], tt = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, Ps = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function q0(x) {
        const e = (/* @__PURE__ */ new Date(x + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - gs;
      }
      function R0(x) {
        const e = (gs + x) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      function Ix(x) {
        const e = x.encounters, t = x.results || [], n = x.receivedAlerts || [], o = x.relationships || [], s = x.groupEncounters || [], r = e.length, l = t.length, i = n.length, u = o.length, d = s.length, f = new TextEncoder(), B = (k) => k ? f.encode(k).slice(0, 255) : new Uint8Array(0), C = e.map((k) => B(k.note)), A = o.map((k) => B(k.name)), F = s.map((k) => B(k.name)), m = s.map((k) => B(k.note)), h = x.pin ? f.encode(x.pin).slice(0, 4) : new Uint8Array(0), v = e.reduce((k, w, y) => k + 70 + 1 + C[y].length, 0), b = o.reduce((k, w, y) => k + 73 + 1 + A[y].length, 0), _ = s.reduce((k, w, y) => k + 73 + 1 + F[y].length + 1 + m[y].length, 0), D = new Uint8Array(35 + v + 2 + l * 4 + 2 + i * 36 + 2 + b + 2 + _ + 1 + h.length);
        let p = 0;
        D[p++] = 2, D.set(x.myContactId, p), p += 32, D[p++] = r >> 8 & 255, D[p++] = r & 255;
        for (let k = 0; k < r; k++) {
          const w = e[k];
          D.set(w.rawToken, p), p += 32, D.set(w.theirContactId, p), p += 32;
          const y = q0(w.date);
          D[p++] = y >> 8 & 255, D[p++] = y & 255, D[p++] = w.queryIndex >> 8 & 255, D[p++] = w.queryIndex & 255, D[p++] = w.submitIndex >> 8 & 255, D[p++] = w.submitIndex & 255, D[p++] = C[k].length, D.set(C[k], p), p += C[k].length;
        }
        D[p++] = l >> 8 & 255, D[p++] = l & 255;
        for (const k of t) {
          const w = q0(k.date);
          D[p++] = w >> 8 & 255, D[p++] = w & 255, D[p++] = k.hasNotified ? 1 : 0;
          let y = 0;
          for (let S = 0; S < i0.length; S++) (k.positiveDiseases || []).includes(i0[S]) && (y |= 1 << S);
          D[p++] = y;
        }
        D[p++] = i >> 8 & 255, D[p++] = i & 255;
        for (const k of n) {
          D.set(k.rawToken, p), p += 32;
          const w = q0(k.testDate);
          D[p++] = w >> 8 & 255, D[p++] = w & 255;
          let y = 0;
          for (let M = 0; M < i0.length; M++) (k.diseases || []).includes(i0[M]) && (y |= 1 << M);
          D[p++] = y;
          let S = 0;
          k.viewed && (S |= 1), k.labVerified && (S |= 2), D[p++] = S;
        }
        D[p++] = u >> 8 & 255, D[p++] = u & 255;
        for (let k = 0; k < u; k++) {
          const w = o[k];
          D.set(w.rawToken, p), p += 32, D.set(w.theirContactId, p), p += 32;
          const y = q0(w.createdAt);
          D[p++] = y >> 8 & 255, D[p++] = y & 255;
          const S = w.endedAt ? q0(w.endedAt) : ws;
          D[p++] = S >> 8 & 255, D[p++] = S & 255;
          let M = 0;
          w.archived && (M |= 1), D[p++] = M, D[p++] = w.queryIndex >> 8 & 255, D[p++] = w.queryIndex & 255, D[p++] = w.submitIndex >> 8 & 255, D[p++] = w.submitIndex & 255, D[p++] = A[k].length, D.set(A[k], p), p += A[k].length;
        }
        D[p++] = d >> 8 & 255, D[p++] = d & 255;
        for (let k = 0; k < d; k++) {
          const w = s[k];
          D.set(w.token, p), p += 32;
          const y = q0(w.date);
          D[p++] = y >> 8 & 255, D[p++] = y & 255;
          const S = w.createdAt >>> 0;
          D[p++] = S >>> 24 & 255, D[p++] = S >>> 16 & 255, D[p++] = S >>> 8 & 255, D[p++] = S & 255, D[p++] = w.isHost ? 1 : 0, D[p++] = w.tokenIndex >> 8 & 255, D[p++] = w.tokenIndex & 255, D.set(w.hostContactId, p), p += 32, D[p++] = F[k].length, D.set(F[k], p), p += F[k].length, D[p++] = m[k].length, D.set(m[k], p), p += m[k].length;
        }
        return D[p++] = h.length, h.length > 0 && D.set(h, p), D;
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
            date: R0(b),
            queryIndex: _,
            submitIndex: D,
            note: k
          });
        }
        const r = [], l = x[e] << 8 | x[e + 1];
        e += 2;
        for (let m = 0; m < l; m++) {
          const h = x[e] << 8 | x[e + 1];
          e += 2;
          const v = x[e++], b = x[e++], _ = !!(v & 1), D = i0.filter((p, k) => b & 1 << k);
          r.push({
            date: R0(h),
            hasNotified: _,
            positiveDiseases: D
          });
        }
        const i = [], u = x[e] << 8 | x[e + 1];
        e += 2;
        for (let m = 0; m < u; m++) {
          const h = x.slice(e, e + 32);
          e += 32;
          const v = x[e] << 8 | x[e + 1];
          e += 2;
          const b = x[e++], _ = x[e++], D = i0.filter((w, y) => b & 1 << y), p = !!(_ & 1), k = !!(_ & 2);
          i.push({
            rawToken: h,
            testDate: R0(v),
            diseases: D,
            viewed: p,
            labVerified: k
          });
        }
        const d = [], f = x[e] << 8 | x[e + 1];
        e += 2;
        for (let m = 0; m < f; m++) {
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
          e += w, d.push({
            rawToken: h,
            theirContactId: v,
            createdAt: R0(b),
            endedAt: _ === ws ? null : R0(_),
            archived: !!(D & 1),
            queryIndex: p,
            submitIndex: k,
            name: y
          });
        }
        const B = [], C = x[e] << 8 | x[e + 1];
        e += 2;
        const A = new TextDecoder();
        for (let m = 0; m < C; m++) {
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
          e += y, B.push({
            token: h,
            date: R0(v),
            createdAt: b,
            isHost: !!(_ & 1),
            tokenIndex: D,
            hostContactId: p,
            name: w,
            note: S
          });
        }
        let F = null;
        if (t === 2 && e < x.length) {
          const m = x[e++];
          m > 0 && (F = new TextDecoder().decode(x.slice(e, e + m)));
        }
        return {
          myContactId: n,
          encounters: s,
          results: r,
          receivedAlerts: i,
          relationships: d,
          groupEncounters: B,
          pin: F
        };
      }
      const Ts = Ze(false), Mx = Ze(null), Ss = Ze(false), ya = 45;
      let W = null, j0 = 0, Ax = false;
      const U0 = "peachsafe_pending_encounters";
      function Lx() {
        Ts.set((W?.receivedAlerts || []).some((x) => !x.viewed));
      }
      function Kt() {
        Mx.set(W?.pin ?? null);
      }
      T0.subscribe((x) => {
        x === "reconnected" && Ax && W && I0() && qe().catch(() => {
        });
      });
      async function qe() {
        const x = Ix(W);
        Ss.set(x.byteLength >= ys);
        const e = ct(I0(), x);
        Ax = false;
        try {
          const { blob_version: t } = await da(xe(e), j0);
          j0 = t;
          try {
            localStorage.removeItem(U0);
          } catch {
          }
        } catch (t) {
          throw Ax = true, t;
        }
      }
      function Pa(x, e, t) {
        try {
          let n = [];
          const o = localStorage.getItem(U0);
          if (o) try {
            n = JSON.parse(new TextDecoder().decode(jt(I0(), Oe(o))));
          } catch {
            n = [];
          }
          n.push({
            rawTokenHex: xe(x),
            theirContactIdHex: xe(e),
            date: t
          });
          const s = new TextEncoder().encode(JSON.stringify(n));
          localStorage.setItem(U0, xe(ct(I0(), s)));
        } catch {
        }
      }
      async function Ta() {
        let x;
        try {
          const e = localStorage.getItem(U0);
          if (!e) return;
          x = JSON.parse(new TextDecoder().decode(jt(I0(), Oe(e))));
        } catch {
          try {
            localStorage.removeItem(U0);
          } catch {
          }
          return;
        }
        if (!x.length) {
          try {
            localStorage.removeItem(U0);
          } catch {
          }
          return;
        }
        for (const e of x) W = {
          ...W,
          encounters: [
            ...W.encounters,
            {
              rawToken: Oe(e.rawTokenHex),
              theirContactId: Oe(e.theirContactIdHex),
              date: e.date,
              queryIndex: 0,
              submitIndex: 0,
              note: null
            }
          ]
        };
        await qe();
      }
      async function Sa() {
        W = {
          myContactId: it(32),
          encounters: [],
          results: [],
          receivedAlerts: [],
          relationships: [],
          groupEncounters: [],
          pin: null
        }, j0 = 0, await qe(), Kt();
      }
      async function Ia(x, e) {
        W = x, j0 = e, await Ta(), Lx(), Kt();
      }
      function B0() {
        return W;
      }
      function Ma() {
        return j0;
      }
      function y0() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.myContactId;
      }
      function kt() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.results || [];
      }
      function xx() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (W.receivedAlerts || []).map(({ testDate: x, diseases: e, viewed: t, labVerified: n }) => ({
          testDate: x,
          diseases: e,
          viewed: t,
          labVerified: n
        }));
      }
      function Is() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.encounters || [];
      }
      function Nx() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.relationships || [];
      }
      function Ms() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return W.groupEncounters || [];
      }
      function La() {
        return W?.pin ?? null;
      }
      async function Na(x, e, t) {
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
              submitIndex: 0,
              note: null
            }
          ]
        };
        try {
          await qe();
        } catch (n) {
          throw Pa(x, e, t), n;
        }
      }
      async function za(x, e) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = (W.encounters || []).map((n) => xe(n.rawToken) === x ? {
          ...n,
          ...e
        } : n);
        W = {
          ...W,
          encounters: t
        }, await qe();
      }
      async function qa(x, e, t) {
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
        }, await qe();
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
        }, await qe();
      }
      async function xn(x, e) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = (W.groupEncounters || []).map((n) => xe(n.token) === x ? {
          ...n,
          ...e
        } : n);
        W = {
          ...W,
          groupEncounters: t
        }, await qe();
      }
      async function Ra(x) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (W.groupEncounters || []).filter((t) => xe(t.token) !== x);
        W = {
          ...W,
          groupEncounters: e
        }, await qe();
      }
      async function Ft(x, e) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = (W.relationships || []).map((n) => xe(n.rawToken) === x ? {
          ...n,
          ...e
        } : n);
        W = {
          ...W,
          relationships: t
        }, await qe();
      }
      async function nx(x, e, t = false) {
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
        }, await qe(), n;
      }
      async function nn(x) {
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
        }, await qe();
      }
      async function Ha() {
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
        }, await qe();
      }
      async function Oa(x, e, t, n) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let o = null;
        const s = W.encounters.map((i) => xe(i.rawToken) !== x ? i : (o = i.rawToken, {
          ...i,
          queryIndex: i.queryIndex + 1
        })), r = (W.relationships || []).map((i) => o || xe(i.rawToken) !== x ? i : (o = i.rawToken, {
          ...i,
          queryIndex: i.queryIndex + 1
        }));
        if (!o) throw new Error("Token not found: " + x);
        const l = [
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
          relationships: r,
          receivedAlerts: l
        }, await qe(), Lx();
      }
      async function Ua(x) {
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
        }, await qe(), Lx();
      }
      async function ja(x) {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        W = {
          ...W,
          pin: x
        }, await qe(), Kt();
      }
      async function Va() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        W = {
          ...W,
          pin: null
        }, await qe(), Kt();
      }
      function zx() {
        const x = /* @__PURE__ */ new Date();
        return x.setUTCFullYear(x.getUTCFullYear() - 1), x.toISOString().slice(0, 10);
      }
      function Ga() {
        if (!W || Ix(W).byteLength < ys) return false;
        const e = zx();
        return W.encounters.filter((t) => t.date < e).length >= 5;
      }
      function Ya() {
        if (!W) return 0;
        const x = zx();
        return W.encounters.filter((e) => e.date < x).length;
      }
      async function Ka() {
        if (!W) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = zx();
        W = {
          ...W,
          encounters: W.encounters.filter((e) => e.date >= x)
        }, await qe();
      }
      function Wa(x, e) {
        if (!x.endedAt || !e) return true;
        const n = (/* @__PURE__ */ new Date(x.endedAt + "T00:00:00Z")).getTime() + ya * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < n;
      }
      function Qa(x) {
        j0 = x;
      }
      async function Ns(x = null) {
        const { blob: e, blob_version: t } = x ?? await ua();
        if (!e) {
          await Sa();
          return;
        }
        const n = jt(I0(), Oe(e));
        await Ia(wa(n), t);
      }
      function Ja(x) {
        const e = B0();
        if (!e) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = ct(x, Ix(e));
        return {
          blobHex: xe(t),
          blobVersion: Ma()
        };
      }
      let J0 = null;
      function zs() {
        return J0 || (J0 = Xa().finally(() => {
          J0 = null;
        }), J0);
      }
      async function Xa() {
        const x = B0(), e = y0();
        if (!x) return 0;
        const n = kt().filter((f) => f.positiveDiseases.length === 0).map((f) => f.date).sort().pop() ?? null, o = /* @__PURE__ */ new Map(), s = [];
        for (const f of x.encounters) {
          const B = w0(f.rawToken, e, f.queryIndex), C = P0(B);
          o.set(C, {
            rawTokenHex: xe(f.rawToken),
            alertDate: f.date
          }), s.push(C);
        }
        for (const f of x.relationships || []) {
          if (!Wa(f, n)) continue;
          const B = w0(f.rawToken, e, f.queryIndex), C = P0(B);
          o.set(C, {
            rawTokenHex: xe(f.rawToken),
            alertDate: f.createdAt
          }), s.push(C);
        }
        if (s.length === 0) return 0;
        const r = Math.max(50, s.length * 2), l = [
          ...s
        ];
        for (; l.length < r; ) l.push(P0(it(32)));
        for (let f = l.length - 1; f > 0; f--) {
          const B = Math.floor(Math.random() * (f + 1));
          [l[f], l[B]] = [
            l[B],
            l[f]
          ];
        }
        const { matches: i } = await Ba(l);
        if (!i || i.length === 0) return 0;
        const u = Object.fromEntries(Object.entries(Ps).map(([f, B]) => [
          B,
          f
        ]));
        let d = 0;
        for (const f of i) {
          const B = o.get(f.token);
          if (!B) continue;
          const C = B0(), F = [
            ...C.encounters || [],
            ...C.relationships || []
          ].find((M) => xe(M.rawToken) === B.rawTokenHex);
          if (!F) continue;
          const m = Fs(F.theirContactId);
          let h;
          try {
            h = jt(m, ps(f.encrypted_payload));
          } catch {
            continue;
          }
          const v = new TextDecoder().decode(h), b = v.slice(1, 9), _ = `${b.slice(0, 4)}-${b.slice(4, 6)}-${b.slice(6, 8)}`, p = (v.length > 9 ? v.slice(9).split(",") : []).map((M) => u[M]).filter((M) => M !== void 0), k = xe(w0(F.rawToken, e, F.queryIndex));
          await Oa(B.rawTokenHex, _, p, f.verified), d++;
          const w = B0(), y = [
            ...w.encounters || [],
            ...w.relationships || []
          ].find((M) => xe(M.rawToken) === B.rawTokenHex), S = xe(w0(F.rawToken, e, y?.queryIndex ?? F.queryIndex + 1));
          try {
            await vs(S, B.alertDate);
          } catch (M) {
            console.warn("alerts: could not register next query token:", M.message);
          }
          try {
            await Ca(k);
          } catch (M) {
            console.warn("alerts: could not delete old query token:", M.message);
          }
        }
        return d;
      }
      let Fx = "/home";
      function Za(x) {
        Fx = x;
      }
      function on() {
        const x = Fx;
        return Fx = "/home", x;
      }
      function $a(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F = x[3] ? "Verifying\u2026" : "Verify", m, h, v, b, _ = x[6] ? "Use authenticator app instead" : "Use a backup code instead", D, p, k;
        function w(I, L) {
          return I[6] ? xi : ti;
        }
        let y = w(x), S = y(x), M = x[4] && sn(x);
        return {
          c() {
            e = E("div"), t = E("button"), n = E("span"), n.textContent = "arrow_back", o = g(), s = E("span"), s.textContent = "Two-factor auth", r = g(), l = E("form"), S.c(), i = g(), u = E("label"), d = E("input"), f = z(`
          Remember this device`), B = g(), M && M.c(), C = g(), A = E("button"), m = z(F), v = g(), b = E("button"), D = z(_), c(n, "class", "material-icons svelte-1r4ift8"), c(t, "type", "button"), c(t, "class", "back-btn svelte-1r4ift8"), t.disabled = x[3], c(s, "class", "otp-title svelte-1r4ift8"), c(e, "class", "otp-header svelte-1r4ift8"), c(d, "type", "checkbox"), d.disabled = x[3], c(d, "class", "svelte-1r4ift8"), c(u, "class", "remember-label svelte-1r4ift8"), c(A, "type", "submit"), A.disabled = h = x[3] || !x[6] && x[2].length !== 6 || x[6] && x[2].length !== 14, c(A, "class", "svelte-1r4ift8"), c(b, "type", "button"), c(b, "class", "backup-toggle svelte-1r4ift8"), b.disabled = x[3], c(l, "class", "svelte-1r4ift8");
          },
          m(I, L) {
            T(I, e, L), a(e, t), a(t, n), a(e, o), a(e, s), T(I, r, L), T(I, l, L), S.m(l, null), a(l, i), a(l, u), a(u, d), d.checked = x[7], a(u, f), a(l, B), M && M.m(l, null), a(l, C), a(l, A), a(A, m), a(l, v), a(l, b), a(b, D), p || (k = [
              U(t, "click", x[16]),
              U(d, "change", x[24]),
              U(b, "click", x[17]),
              U(l, "submit", C0(x[13]))
            ], p = true);
          },
          p(I, L) {
            L & 8 && (t.disabled = I[3]), y === (y = w(I)) && S ? S.p(I, L) : (S.d(1), S = y(I), S && (S.c(), S.m(l, i))), L & 8 && (d.disabled = I[3]), L & 128 && (d.checked = I[7]), I[4] ? M ? M.p(I, L) : (M = sn(I), M.c(), M.m(l, C)) : M && (M.d(1), M = null), L & 8 && F !== (F = I[3] ? "Verifying\u2026" : "Verify") && G(m, F), L & 76 && h !== (h = I[3] || !I[6] && I[2].length !== 6 || I[6] && I[2].length !== 14) && (A.disabled = h), L & 64 && _ !== (_ = I[6] ? "Use authenticator app instead" : "Use a backup code instead") && G(D, _), L & 8 && (b.disabled = I[3]);
          },
          d(I) {
            I && (P(e), P(r), P(l)), S.d(), M && M.d(), p = false, re(k);
          }
        };
      }
      function ei(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A = x[3] ? "Logging in\u2026" : "Log in", F, m, h, v = x[4] && ln(x);
        return {
          c() {
            e = E("div"), e.innerHTML = '<a href="#/login" class="tab active svelte-1r4ift8">Log in</a> <a href="#/signup" class="tab svelte-1r4ift8">Create account</a>', t = g(), n = E("form"), o = E("label"), s = z(`Username
          `), r = E("input"), l = g(), i = E("label"), u = z(`Password
          `), d = E("input"), f = g(), v && v.c(), B = g(), C = E("button"), F = z(A), c(e, "class", "tabs svelte-1r4ift8"), c(r, "type", "text"), r.required = true, c(r, "autocomplete", "username"), c(r, "class", "svelte-1r4ift8"), c(o, "class", "svelte-1r4ift8"), c(d, "type", "password"), d.required = true, c(d, "autocomplete", "current-password"), c(d, "class", "svelte-1r4ift8"), c(i, "class", "svelte-1r4ift8"), c(C, "type", "submit"), C.disabled = x[3], c(C, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(b, _) {
            T(b, e, _), T(b, t, _), T(b, n, _), a(n, o), a(o, s), a(o, r), se(r, x[0]), a(n, l), a(n, i), a(i, u), a(i, d), se(d, x[1]), a(n, f), v && v.m(n, null), a(n, B), a(n, C), a(C, F), m || (h = [
              U(r, "input", x[20]),
              U(d, "input", x[21]),
              U(n, "submit", C0(x[12]))
            ], m = true);
          },
          p(b, _) {
            _ & 1 && r.value !== b[0] && se(r, b[0]), _ & 2 && d.value !== b[1] && se(d, b[1]), b[4] ? v ? v.p(b, _) : (v = ln(b), v.c(), v.m(n, B)) : v && (v.d(1), v = null), _ & 8 && A !== (A = b[3] ? "Logging in\u2026" : "Log in") && G(F, A), _ & 8 && (C.disabled = b[3]);
          },
          d(b) {
            b && (P(e), P(t), P(n)), v && v.d(), m = false, re(h);
          }
        };
      }
      function ti(x) {
        let e, t, n, o, s, r, l;
        return {
          c() {
            e = E("p"), e.textContent = "Enter the 6-digit code from your authenticator app.", t = g(), n = E("label"), o = z(`Authenticator code
            `), s = E("input"), c(e, "class", "otp-prompt svelte-1r4ift8"), c(s, "type", "text"), c(s, "inputmode", "numeric"), c(s, "pattern", "[0-9]*"), c(s, "maxlength", "6"), s.required = true, c(s, "autocomplete", "one-time-code"), c(s, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(i, u) {
            T(i, e, u), T(i, t, u), T(i, n, u), a(n, o), a(n, s), se(s, x[2]), r || (l = U(s, "input", x[23]), r = true);
          },
          p(i, u) {
            u & 4 && s.value !== i[2] && se(s, i[2]);
          },
          d(i) {
            i && (P(e), P(t), P(n)), r = false, l();
          }
        };
      }
      function xi(x) {
        let e, t, n, o, s, r, l;
        return {
          c() {
            e = E("p"), e.textContent = "Enter one of your backup codes (xxxx-xxxx-xxxx).", t = g(), n = E("label"), o = z(`Backup code
            `), s = E("input"), c(e, "class", "otp-prompt svelte-1r4ift8"), c(s, "type", "text"), c(s, "inputmode", "text"), c(s, "maxlength", "14"), s.required = true, c(s, "autocomplete", "off"), c(s, "placeholder", "xxxx-xxxx-xxxx"), c(s, "class", "svelte-1r4ift8"), c(n, "class", "svelte-1r4ift8");
          },
          m(i, u) {
            T(i, e, u), T(i, t, u), T(i, n, u), a(n, o), a(n, s), se(s, x[2]), r || (l = U(s, "input", x[22]), r = true);
          },
          p(i, u) {
            u & 4 && s.value !== i[2] && se(s, i[2]);
          },
          d(i) {
            i && (P(e), P(t), P(n)), r = false, l();
          }
        };
      }
      function sn(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[4]), c(e, "class", "error svelte-1r4ift8");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o & 16 && G(t, n[4]);
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
            e = E("p"), t = z(x[4]), c(e, "class", "error svelte-1r4ift8");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o & 16 && G(t, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function rn(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "Your password never leaves your device in plaintext.", c(e, "class", "privacy-note svelte-1r4ift8");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function an(x) {
        let e, t, n, o, s, r, l, i, u, d = x[9] === 1 ? "" : "s", f, B, C, A, F, m, h = x[10] ? "Deleting\u2026" : "Delete old encounters", v, b, _, D, p, k, w = x[11] && cn(x);
        return {
          c() {
            e = E("div"), t = E("div"), n = E("h2"), n.textContent = "Free up storage space", o = g(), s = E("p"), r = z(`Your account is using 75% or more of its storage limit.
        You have `), l = E("strong"), i = z(x[9]), u = z(" encounter"), f = z(d), B = z(` older
        than one year. Deleting them will free up space.`), C = g(), w && w.c(), A = g(), F = E("div"), m = E("button"), v = z(h), b = g(), _ = E("button"), D = z("Keep them"), c(n, "id", "cleanup-title"), c(n, "class", "svelte-1r4ift8"), c(s, "class", "svelte-1r4ift8"), c(m, "class", "btn-primary svelte-1r4ift8"), m.disabled = x[10], c(_, "class", "btn-ghost svelte-1r4ift8"), _.disabled = x[10], c(F, "class", "cleanup-actions svelte-1r4ift8"), c(t, "class", "cleanup-dialog svelte-1r4ift8"), c(e, "class", "cleanup-overlay svelte-1r4ift8"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "cleanup-title");
          },
          m(y, S) {
            T(y, e, S), a(e, t), a(t, n), a(t, o), a(t, s), a(s, r), a(s, l), a(l, i), a(l, u), a(l, f), a(s, B), a(t, C), w && w.m(t, null), a(t, A), a(t, F), a(F, m), a(m, v), a(F, b), a(F, _), a(_, D), p || (k = [
              U(m, "click", x[14]),
              U(_, "click", x[15])
            ], p = true);
          },
          p(y, S) {
            S & 512 && G(i, y[9]), S & 512 && d !== (d = y[9] === 1 ? "" : "s") && G(f, d), y[11] ? w ? w.p(y, S) : (w = cn(y), w.c(), w.m(t, A)) : w && (w.d(1), w = null), S & 1024 && h !== (h = y[10] ? "Deleting\u2026" : "Delete old encounters") && G(v, h), S & 1024 && (m.disabled = y[10]), S & 1024 && (_.disabled = y[10]);
          },
          d(y) {
            y && P(e), w && w.d(), p = false, re(k);
          }
        };
      }
      function cn(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[11]), c(e, "class", "cleanup-error svelte-1r4ift8");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o & 2048 && G(t, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ni(x) {
        let e, t, n, o, s, r, l, i, u;
        function d(F, m) {
          return F[5] ? $a : ei;
        }
        let f = d(x), B = f(x), C = !x[5] && rn(), A = x[8] && an(x);
        return {
          c() {
            e = E("main"), t = E("div"), t.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1r4ift8"/> <h1 class="svelte-1r4ift8"><span class="brand-peach svelte-1r4ift8">Peach</span><span class="brand-safe svelte-1r4ift8">Safe</span></h1>', n = g(), o = E("div"), B.c(), s = g(), C && C.c(), r = g(), A && A.c(), l = s0(), c(t, "class", "brand svelte-1r4ift8"), c(t, "role", "button"), c(t, "tabindex", "0"), c(o, "class", "card svelte-1r4ift8"), c(e, "class", "svelte-1r4ift8");
          },
          m(F, m) {
            T(F, e, m), a(e, t), a(e, n), a(e, o), B.m(o, null), a(e, s), C && C.m(e, null), T(F, r, m), A && A.m(F, m), T(F, l, m), i || (u = [
              U(t, "click", x[18]),
              U(t, "keypress", x[19])
            ], i = true);
          },
          p(F, [m]) {
            f === (f = d(F)) && B ? B.p(F, m) : (B.d(1), B = f(F), B && (B.c(), B.m(o, null))), F[5] ? C && (C.d(1), C = null) : C || (C = rn(), C.c(), C.m(e, null)), F[8] ? A ? A.p(F, m) : (A = an(F), A.c(), A.m(l.parentNode, l)) : A && (A.d(1), A = null);
          },
          i: X,
          o: X,
          d(F) {
            F && (P(e), P(r), P(l)), B.d(), C && C.d(), A && A.d(F), i = false, re(u);
          }
        };
      }
      function oi(x, e, t) {
        Ue(() => {
          _s();
        });
        let n = "", o = "", s = "", r = false, l = null, i = false, u = false, d = false, f = null, B = null, C = false, A = 0, F = "", m = false, h = null;
        async function v() {
          t(4, l = null), t(3, r = true);
          try {
            const { challenge: R, auth_salt: H, enc_salt: O } = await wx(n), Q = await f0(o, Oe(H)), V = As(new TextEncoder().encode(R), Q), Y = btoa(String.fromCharCode(...V)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), j = await en(n, Y);
            if (j.requires_otp) {
              f = Y, B = O, t(5, i = true);
              return;
            }
            await _(O, j);
          } catch (R) {
            t(4, l = R.message);
          } finally {
            t(3, r = false);
          }
        }
        async function b() {
          t(4, l = null), t(3, r = true);
          try {
            const R = await en(n, f, s, d);
            await _(B, R);
          } catch (R) {
            t(4, l = R.message);
          } finally {
            t(3, r = false);
          }
        }
        async function _(R, H) {
          ms(n);
          const O = await f0(o, Oe(R));
          gx(O), await Ns(H.bootstrap ?? null), zs().catch(() => {
          }), Ga() ? (t(9, A = Ya()), F = on(), t(8, C = true)) : ue(on());
        }
        async function D() {
          t(11, h = null), t(10, m = true);
          try {
            await Ka(), t(8, C = false), ue(F);
          } catch (R) {
            t(11, h = R.message);
          } finally {
            t(10, m = false);
          }
        }
        function p() {
          t(8, C = false), ue(F);
        }
        function k() {
          t(5, i = false), t(2, s = ""), f = null, B = null, t(4, l = null), t(6, u = false), t(7, d = false);
        }
        function w() {
          t(6, u = !u), t(2, s = ""), t(4, l = null);
        }
        const y = () => ue("/"), S = (R) => R.key === "Enter" && ue("/");
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
          d = this.checked, t(7, d);
        }
        return [
          n,
          o,
          s,
          r,
          l,
          i,
          u,
          d,
          C,
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
      class si extends ve {
        constructor(e) {
          super(), he(this, e, oi, ni, pe, {});
        }
      }
      function un(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[6]), c(e, "class", "error svelte-1c8cd3e");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o & 64 && G(t, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function li(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D, p, k, w, y, S, M, I, L, N = x[5] ? "Creating account\u2026" : "Create account", q, R, H, O, Q, V = x[6] && un(x);
        return {
          c() {
            e = E("main"), t = E("div"), t.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1c8cd3e"/> <h1 class="svelte-1c8cd3e"><span class="brand-peach svelte-1c8cd3e">Peach</span><span class="brand-safe svelte-1c8cd3e">Safe</span></h1>', n = g(), o = E("div"), s = E("div"), s.innerHTML = '<a href="#/login" class="tab svelte-1c8cd3e">Log in</a> <a href="#/signup" class="tab active svelte-1c8cd3e">Create account</a>', r = g(), l = E("form"), i = E("label"), u = z(`Beta code
        `), d = E("input"), f = g(), B = E("label"), C = z(`Username
        `), A = E("input"), F = g(), m = E("label"), h = z(`Email
        `), v = E("input"), b = g(), _ = E("label"), D = z(`Password
        `), p = E("input"), k = g(), w = E("label"), y = z(`Confirm password
        `), S = E("input"), M = g(), V && V.c(), I = g(), L = E("button"), q = z(N), R = g(), H = E("p"), H.textContent = "Your password never leaves your device in plaintext.", c(t, "class", "brand svelte-1c8cd3e"), c(t, "role", "button"), c(t, "tabindex", "0"), c(s, "class", "tabs svelte-1c8cd3e"), c(d, "type", "text"), d.required = true, c(d, "autocomplete", "off"), c(d, "class", "svelte-1c8cd3e"), c(i, "class", "svelte-1c8cd3e"), c(A, "type", "text"), A.required = true, c(A, "autocomplete", "username"), c(A, "class", "svelte-1c8cd3e"), c(B, "class", "svelte-1c8cd3e"), c(v, "type", "email"), v.required = true, c(v, "autocomplete", "email"), c(v, "class", "svelte-1c8cd3e"), c(m, "class", "svelte-1c8cd3e"), c(p, "type", "password"), p.required = true, c(p, "autocomplete", "new-password"), c(p, "minlength", "12"), c(p, "class", "svelte-1c8cd3e"), c(_, "class", "svelte-1c8cd3e"), c(S, "type", "password"), S.required = true, c(S, "autocomplete", "new-password"), c(S, "class", "svelte-1c8cd3e"), c(w, "class", "svelte-1c8cd3e"), c(L, "type", "submit"), L.disabled = x[5], c(L, "class", "svelte-1c8cd3e"), c(l, "class", "svelte-1c8cd3e"), c(o, "class", "card svelte-1c8cd3e"), c(H, "class", "privacy-note svelte-1c8cd3e"), c(e, "class", "svelte-1c8cd3e");
          },
          m(Y, j) {
            T(Y, e, j), a(e, t), a(e, n), a(e, o), a(o, s), a(o, r), a(o, l), a(l, i), a(i, u), a(i, d), se(d, x[4]), a(l, f), a(l, B), a(B, C), a(B, A), se(A, x[0]), a(l, F), a(l, m), a(m, h), a(m, v), se(v, x[1]), a(l, b), a(l, _), a(_, D), a(_, p), se(p, x[2]), a(l, k), a(l, w), a(w, y), a(w, S), se(S, x[3]), a(l, M), V && V.m(l, null), a(l, I), a(l, L), a(L, q), a(e, R), a(e, H), O || (Q = [
              U(t, "click", x[8]),
              U(t, "keypress", x[9]),
              U(d, "input", x[10]),
              U(A, "input", x[11]),
              U(v, "input", x[12]),
              U(p, "input", x[13]),
              U(S, "input", x[14]),
              U(l, "submit", C0(x[7]))
            ], O = true);
          },
          p(Y, [j]) {
            j & 16 && d.value !== Y[4] && se(d, Y[4]), j & 1 && A.value !== Y[0] && se(A, Y[0]), j & 2 && v.value !== Y[1] && se(v, Y[1]), j & 4 && p.value !== Y[2] && se(p, Y[2]), j & 8 && S.value !== Y[3] && se(S, Y[3]), Y[6] ? V ? V.p(Y, j) : (V = un(Y), V.c(), V.m(l, I)) : V && (V.d(1), V = null), j & 32 && N !== (N = Y[5] ? "Creating account\u2026" : "Create account") && G(q, N), j & 32 && (L.disabled = Y[5]);
          },
          i: X,
          o: X,
          d(Y) {
            Y && P(e), V && V.d(), O = false, re(Q);
          }
        };
      }
      const ri = "psbeta";
      function ai(x, e, t) {
        Ue(() => {
          _s();
        });
        let n = "", o = "", s = "", r = "", l = "", i = false, u = null;
        async function d() {
          if (t(6, u = null), l !== ri) {
            t(6, u = "Sorry, we're in closed beta at the moment");
            return;
          }
          if (s !== r) {
            t(6, u = "Passwords do not match");
            return;
          }
          if (s.length < 12) {
            t(6, u = "Password must be at least 12 characters");
            return;
          }
          t(5, i = true);
          try {
            const { auth_salt: v, enc_salt: b } = await wx(n), _ = await f0(s, Oe(v)), D = xe(Cs(_));
            await oa(n, o, D), ms(n);
            const p = await f0(s, Oe(b));
            gx(p), await Ns(), ue("/home");
          } catch (v) {
            t(6, u = v.message);
          } finally {
            t(5, i = false);
          }
        }
        const f = () => ue("/"), B = (v) => v.key === "Enter" && ue("/");
        function C() {
          l = this.value, t(4, l);
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
          r = this.value, t(3, r);
        }
        return [
          n,
          o,
          s,
          r,
          l,
          i,
          u,
          d,
          f,
          B,
          C,
          A,
          F,
          m,
          h
        ];
      }
      class ii extends ve {
        constructor(e) {
          super(), he(this, e, ai, li, pe, {});
        }
      }
      function dn(x) {
        let e;
        return {
          c() {
            e = E("span"), c(e, "class", "unread-dot svelte-1dr2o73");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function ci(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B = x[1] ? "notifications_active" : "notifications", C, A, F, m, h, v, b, _, D, p, k = x[1] && dn();
        return {
          c() {
            e = E("nav"), t = E("a"), t.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-1dr2o73"/> <span class="brand-label svelte-1dr2o73"><span class="brand-peach svelte-1dr2o73">Peach</span><span class="brand-safe svelte-1dr2o73">Safe</span></span>', n = g(), o = E("div"), s = E("a"), s.innerHTML = '<span class="material-icons svelte-1dr2o73">people</span> <span class="tab-label svelte-1dr2o73">Encounters</span>', r = g(), l = E("a"), l.innerHTML = '<span class="material-icons svelte-1dr2o73">science</span> <span class="tab-label svelte-1dr2o73">Test Results</span>', i = g(), u = E("a"), d = E("span"), f = E("span"), C = z(B), A = g(), k && k.c(), F = g(), m = E("span"), m.textContent = "Alerts", h = g(), v = E("a"), v.innerHTML = '<span class="material-icons svelte-1dr2o73">settings</span> <span class="tab-label svelte-1dr2o73">Settings</span>', b = g(), _ = E("button"), _.textContent = "Sign out", c(t, "href", "#/home"), c(t, "class", "brand svelte-1dr2o73"), c(s, "href", "#/encounters"), c(s, "class", "tab svelte-1dr2o73"), te(s, "active", x[0] === "/encounters"), c(l, "href", "#/results"), c(l, "class", "tab svelte-1dr2o73"), te(l, "active", x[0] === "/results"), c(f, "class", "material-icons svelte-1dr2o73"), c(d, "class", "icon-wrap svelte-1dr2o73"), c(m, "class", "tab-label svelte-1dr2o73"), c(u, "href", "#/alerts"), c(u, "class", "tab svelte-1dr2o73"), te(u, "active", x[0] === "/alerts"), te(u, "has-unread", x[1]), c(o, "class", "tabs svelte-1dr2o73"), c(v, "href", "#/settings"), c(v, "class", "tab settings-tab svelte-1dr2o73"), c(v, "title", "Settings"), te(v, "active", x[0] === "/settings" || x[0] === "/change-password" || x[0] === "/settings/2fa-setup"), c(_, "class", "signout-btn svelte-1dr2o73"), c(e, "class", "svelte-1dr2o73");
          },
          m(w, y) {
            T(w, e, y), a(e, t), a(e, n), a(e, o), a(o, s), a(o, r), a(o, l), a(o, i), a(o, u), a(u, d), a(d, f), a(f, C), a(d, A), k && k.m(d, null), a(u, F), a(u, m), a(e, h), a(e, v), a(e, b), a(e, _), D || (p = U(_, "click", x[2]), D = true);
          },
          p(w, [y]) {
            y & 1 && te(s, "active", w[0] === "/encounters"), y & 1 && te(l, "active", w[0] === "/results"), y & 2 && B !== (B = w[1] ? "notifications_active" : "notifications") && G(C, B), w[1] ? k || (k = dn(), k.c(), k.m(d, null)) : k && (k.d(1), k = null), y & 1 && te(u, "active", w[0] === "/alerts"), y & 2 && te(u, "has-unread", w[1]), y & 1 && te(v, "active", w[0] === "/settings" || w[0] === "/change-password" || w[0] === "/settings/2fa-setup");
          },
          i: X,
          o: X,
          d(w) {
            w && P(e), k && k.d(), D = false, p();
          }
        };
      }
      function ui(x, e, t) {
        let n, o;
        je(x, Al, (r) => t(0, n = r)), je(x, Ts, (r) => t(1, o = r));
        async function s() {
          await yx(), ue("/login");
        }
        return [
          n,
          o,
          s
        ];
      }
      class c0 extends ve {
        constructor(e) {
          super(), he(this, e, ui, ci, pe, {});
        }
      }
      function di(x) {
        let e, t, n, o;
        return e = new c0({}), {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), n.innerHTML = `<div class="hero svelte-16ahr9l"><div class="logo-wrap svelte-16ahr9l"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="logo-img svelte-16ahr9l"/></div> <h1 class="app-name svelte-16ahr9l"><span class="brand-peach svelte-16ahr9l">Peach</span><span class="brand-safe svelte-16ahr9l">Safe</span></h1></div> <div class="actions svelte-16ahr9l"><a href="#/encounter-exchange" class="btn-filled svelte-16ahr9l"><span class="material-icons svelte-16ahr9l">qr_code</span>
      Log New Encounter</a></div>`, c(n, "class", "svelte-16ahr9l");
          },
          m(s, r) {
            Me(e, s, r), T(s, t, r), T(s, n, r), o = true;
          },
          p: X,
          i(s) {
            o || (fe(e.$$.fragment, s), o = true);
          },
          o(s) {
            Ae(e.$$.fragment, s), o = false;
          },
          d(s) {
            s && (P(t), P(n)), Le(e, s);
          }
        };
      }
      function Ei(x) {
        return Ue(() => {
          if (!We()) {
            ue("/login");
            return;
          }
        }), [];
      }
      class fi extends ve {
        constructor(e) {
          super(), he(this, e, Ei, di, pe, {});
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
      function Bn(x, e, t) {
        const n = x.slice();
        return n[26] = e[t], n;
      }
      function Cn(x, e, t) {
        const n = x.slice();
        return n[23] = e[t], n;
      }
      function An(x) {
        let e, t, n, o, s, r, l, i, u, d, f = x[6] ? "Creating\u2026" : "Group encounter", B, C, A, F, m, h, v, b, _, D = x[7] && Fn(x);
        return {
          c() {
            e = E("div"), t = E("div"), n = E("p"), n.textContent = "New encounter", o = g(), s = E("button"), s.innerHTML = '<span class="material-icons type-icon svelte-81oe9z">person</span> <span class="type-label svelte-81oe9z">1:1 encounter</span> <span class="material-icons type-chevron svelte-81oe9z">chevron_right</span>', r = g(), l = E("button"), i = E("span"), i.textContent = "groups", u = g(), d = E("span"), B = z(f), C = g(), A = E("span"), A.textContent = "chevron_right", F = g(), D && D.c(), m = g(), h = E("button"), v = z("Cancel"), c(n, "class", "modal-title svelte-81oe9z"), c(s, "class", "type-card svelte-81oe9z"), c(i, "class", "material-icons type-icon svelte-81oe9z"), c(d, "class", "type-label svelte-81oe9z"), c(A, "class", "material-icons type-chevron svelte-81oe9z"), c(l, "class", "type-card svelte-81oe9z"), l.disabled = x[6], c(h, "class", "btn-text cancel-btn svelte-81oe9z"), h.disabled = x[6], c(t, "class", "modal-sheet svelte-81oe9z"), c(e, "class", "modal-backdrop svelte-81oe9z");
          },
          m(p, k) {
            T(p, e, k), a(e, t), a(t, n), a(t, o), a(t, s), a(t, r), a(t, l), a(l, i), a(l, u), a(l, d), a(d, B), a(l, C), a(l, A), a(t, F), D && D.m(t, null), a(t, m), a(t, h), a(h, v), b || (_ = [
              U(s, "click", x[14]),
              U(l, "click", x[10]),
              U(h, "click", x[15]),
              U(t, "click", xl(x[12])),
              U(e, "click", x[16])
            ], b = true);
          },
          p(p, k) {
            k & 64 && f !== (f = p[6] ? "Creating\u2026" : "Group encounter") && G(B, f), k & 64 && (l.disabled = p[6]), p[7] ? D ? D.p(p, k) : (D = Fn(p), D.c(), D.m(t, m)) : D && (D.d(1), D = null), k & 64 && (h.disabled = p[6]);
          },
          d(p) {
            p && P(e), D && D.d(), b = false, re(_);
          }
        };
      }
      function Fn(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[7]), c(e, "class", "modal-error svelte-81oe9z");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o & 128 && G(t, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Bi(x) {
        let e, t, n, o, s = x[9].length > 0 && pn(x), r = x[1].length > 0 && mn(x), l = x[8].length > 0 && vn(x);
        function i(f, B) {
          return f[0].length === 0 && f[9].length === 0 && f[8].length === 0 && f[1].length === 0 ? Di : f[0].length === 0 ? pi : Fi;
        }
        let u = i(x), d = u(x);
        return {
          c() {
            s && s.c(), e = g(), r && r.c(), t = g(), l && l.c(), n = g(), o = E("section"), d.c(), c(o, "class", "card list-card svelte-81oe9z");
          },
          m(f, B) {
            s && s.m(f, B), T(f, e, B), r && r.m(f, B), T(f, t, B), l && l.m(f, B), T(f, n, B), T(f, o, B), d.m(o, null);
          },
          p(f, B) {
            f[9].length > 0 ? s ? s.p(f, B) : (s = pn(f), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), f[1].length > 0 ? r ? r.p(f, B) : (r = mn(f), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null), f[8].length > 0 ? l ? l.p(f, B) : (l = vn(f), l.c(), l.m(n.parentNode, n)) : l && (l.d(1), l = null), u === (u = i(f)) && d ? d.p(f, B) : (d.d(1), d = u(f), d && (d.c(), d.m(o, null)));
          },
          d(f) {
            f && (P(e), P(t), P(n), P(o)), s && s.d(f), r && r.d(f), l && l.d(f), d.d();
          }
        };
      }
      function Ci(x) {
        let e, t, n;
        return {
          c() {
            e = E("section"), t = E("p"), n = z(x[3]), c(t, "class", "error svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(o, s) {
            T(o, e, s), a(e, t), a(t, n);
          },
          p(o, s) {
            s & 8 && G(n, o[3]);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Ai(x) {
        let e;
        return {
          c() {
            e = E("section"), e.innerHTML = '<p class="muted svelte-81oe9z">Loading\u2026</p>', c(e, "class", "card list-card svelte-81oe9z");
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
      function pn(x) {
        let e, t, n, o, s = Be(x[9]), r = [];
        for (let l = 0; l < s.length; l += 1) r[l] = Dn(Cn(x, s, l));
        return {
          c() {
            e = E("section"), t = E("div"), t.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">favorite</span> <h2 class="svelte-81oe9z">Ongoing partners</h2>', n = g(), o = E("ul");
            for (let l = 0; l < r.length; l += 1) r[l].c();
            c(t, "class", "section-header svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(l, i) {
            T(l, e, i), a(e, t), a(e, n), a(e, o);
            for (let u = 0; u < r.length; u += 1) r[u] && r[u].m(o, null);
          },
          p(l, i) {
            if (i & 512) {
              s = Be(l[9]);
              let u;
              for (u = 0; u < s.length; u += 1) {
                const d = Cn(l, s, u);
                r[u] ? r[u].p(d, i) : (r[u] = Dn(d), r[u].c(), r[u].m(o, null));
              }
              for (; u < r.length; u += 1) r[u].d(1);
              r.length = s.length;
            }
          },
          d(l) {
            l && P(e), Ke(r, l);
          }
        };
      }
      function Dn(x) {
        let e, t, n, o, s, r, l = Mt(x[23]) + "", i, u, d, f = Lt(x[23]) + "", B, C, A, F, m;
        return {
          c() {
            e = E("li"), t = E("a"), n = E("span"), n.textContent = "favorite", o = g(), s = E("span"), r = E("span"), i = z(l), u = g(), d = E("span"), B = z(f), C = g(), A = E("span"), A.textContent = "chevron_right", m = g(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(r, "class", "rel-name svelte-81oe9z"), c(d, "class", "rel-sub svelte-81oe9z"), c(s, "class", "rel-main svelte-81oe9z"), c(A, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", F = "#/relationships/" + xe(x[23].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), a(e, t), a(t, n), a(t, o), a(t, s), a(s, r), a(r, i), a(s, u), a(s, d), a(d, B), a(t, C), a(t, A), a(e, m);
          },
          p(h, v) {
            v & 512 && l !== (l = Mt(h[23]) + "") && G(i, l), v & 512 && f !== (f = Lt(h[23]) + "") && G(B, f), v & 512 && F !== (F = "#/relationships/" + xe(h[23].rawToken)) && c(t, "href", F);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function mn(x) {
        let e, t, n, o, s = Be(x[1]), r = [];
        for (let l = 0; l < s.length; l += 1) r[l] = hn(Bn(x, s, l));
        return {
          c() {
            e = E("section"), t = E("div"), t.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">groups</span> <h2 class="svelte-81oe9z">Group encounters</h2>', n = g(), o = E("ul");
            for (let l = 0; l < r.length; l += 1) r[l].c();
            c(t, "class", "section-header svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(l, i) {
            T(l, e, i), a(e, t), a(e, n), a(e, o);
            for (let u = 0; u < r.length; u += 1) r[u] && r[u].m(o, null);
          },
          p(l, i) {
            if (i & 2) {
              s = Be(l[1]);
              let u;
              for (u = 0; u < s.length; u += 1) {
                const d = Bn(l, s, u);
                r[u] ? r[u].p(d, i) : (r[u] = hn(d), r[u].c(), r[u].m(o, null));
              }
              for (; u < r.length; u += 1) r[u].d(1);
              r.length = s.length;
            }
          },
          d(l) {
            l && P(e), Ke(r, l);
          }
        };
      }
      function hn(x) {
        let e, t, n, o, s, r, l = gn(x[26]) + "", i, u, d, f = wn(x[26]) + "", B, C, A, F, m;
        return {
          c() {
            e = E("li"), t = E("a"), n = E("span"), n.textContent = "groups", o = g(), s = E("span"), r = E("span"), i = z(l), u = g(), d = E("span"), B = z(f), C = g(), A = E("span"), A.textContent = "chevron_right", m = g(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(r, "class", "rel-name svelte-81oe9z"), c(d, "class", "rel-sub svelte-81oe9z"), c(s, "class", "rel-main svelte-81oe9z"), c(A, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", F = "#/groups/" + xe(x[26].token)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), a(e, t), a(t, n), a(t, o), a(t, s), a(s, r), a(r, i), a(s, u), a(s, d), a(d, B), a(t, C), a(t, A), a(e, m);
          },
          p(h, v) {
            v & 2 && l !== (l = gn(h[26]) + "") && G(i, l), v & 2 && f !== (f = wn(h[26]) + "") && G(B, f), v & 2 && F !== (F = "#/groups/" + xe(h[26].token)) && c(t, "href", F);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function vn(x) {
        let e, t, n, o = x[4] ? "expand_less" : "expand_more", s, r, l, i, u = x[8].length + "", d, f, B, C, A, F = x[4] && _n(x);
        return {
          c() {
            e = E("section"), t = E("button"), n = E("span"), s = z(o), r = g(), l = E("span"), i = z("Archived partners ("), d = z(u), f = z(")"), B = g(), F && F.c(), c(n, "class", "material-icons toggle-icon svelte-81oe9z"), c(l, "class", "muted-label svelte-81oe9z"), c(t, "class", "collapse-toggle svelte-81oe9z"), c(e, "class", "card list-card svelte-81oe9z");
          },
          m(m, h) {
            T(m, e, h), a(e, t), a(t, n), a(n, s), a(t, r), a(t, l), a(l, i), a(l, d), a(l, f), a(e, B), F && F.m(e, null), C || (A = U(t, "click", x[17]), C = true);
          },
          p(m, h) {
            h & 16 && o !== (o = m[4] ? "expand_less" : "expand_more") && G(s, o), h & 256 && u !== (u = m[8].length + "") && G(d, u), m[4] ? F ? F.p(m, h) : (F = _n(m), F.c(), F.m(e, null)) : F && (F.d(1), F = null);
          },
          d(m) {
            m && P(e), F && F.d(), C = false, A();
          }
        };
      }
      function _n(x) {
        let e, t = Be(x[8]), n = [];
        for (let o = 0; o < t.length; o += 1) n[o] = kn(fn(x, t, o));
        return {
          c() {
            e = E("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-81oe9z");
          },
          m(o, s) {
            T(o, e, s);
            for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(e, null);
          },
          p(o, s) {
            if (s & 256) {
              t = Be(o[8]);
              let r;
              for (r = 0; r < t.length; r += 1) {
                const l = fn(o, t, r);
                n[r] ? n[r].p(l, s) : (n[r] = kn(l), n[r].c(), n[r].m(e, null));
              }
              for (; r < n.length; r += 1) n[r].d(1);
              n.length = t.length;
            }
          },
          d(o) {
            o && P(e), Ke(n, o);
          }
        };
      }
      function kn(x) {
        let e, t, n, o, s, r, l = Mt(x[23]) + "", i, u, d, f = Lt(x[23]) + "", B, C, A, F, m;
        return {
          c() {
            e = E("li"), t = E("a"), n = E("span"), n.textContent = "favorite_border", o = g(), s = E("span"), r = E("span"), i = z(l), u = g(), d = E("span"), B = z(f), C = g(), A = E("span"), A.textContent = "chevron_right", m = g(), c(n, "class", "material-icons rel-icon ended svelte-81oe9z"), c(r, "class", "rel-name svelte-81oe9z"), c(d, "class", "rel-sub svelte-81oe9z"), c(s, "class", "rel-main svelte-81oe9z"), c(A, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", F = "#/relationships/" + xe(x[23].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), a(e, t), a(t, n), a(t, o), a(t, s), a(s, r), a(r, i), a(s, u), a(s, d), a(d, B), a(t, C), a(t, A), a(e, m);
          },
          p(h, v) {
            v & 256 && l !== (l = Mt(h[23]) + "") && G(i, l), v & 256 && f !== (f = Lt(h[23]) + "") && G(B, f), v & 256 && F !== (F = "#/relationships/" + xe(h[23].rawToken)) && c(t, "href", F);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function Fi(x) {
        let e, t, n, o = Be(x[0]), s = [];
        for (let r = 0; r < o.length; r += 1) s[r] = bn(En(x, o, r));
        return {
          c() {
            e = E("div"), e.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">check_circle_outline</span> <h2 class="svelte-81oe9z">One-time encounters</h2>', t = g(), n = E("ul");
            for (let r = 0; r < s.length; r += 1) s[r].c();
            c(e, "class", "section-header svelte-81oe9z"), c(n, "class", "svelte-81oe9z");
          },
          m(r, l) {
            T(r, e, l), T(r, t, l), T(r, n, l);
            for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(n, null);
          },
          p(r, l) {
            if (l & 1) {
              o = Be(r[0]);
              let i;
              for (i = 0; i < o.length; i += 1) {
                const u = En(r, o, i);
                s[i] ? s[i].p(u, l) : (s[i] = bn(u), s[i].c(), s[i].m(n, null));
              }
              for (; i < s.length; i += 1) s[i].d(1);
              s.length = o.length;
            }
          },
          d(r) {
            r && (P(e), P(t), P(n)), Ke(s, r);
          }
        };
      }
      function pi(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "No one-time encounters.", c(e, "class", "muted list-muted svelte-81oe9z");
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
      function Di(x) {
        let e, t, n, o, s, r, l, i;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "people_outline", n = g(), o = E("p"), o.textContent = "No encounters recorded yet.", s = g(), r = E("button"), r.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, c(t, "class", "material-icons empty-icon svelte-81oe9z"), c(o, "class", "svelte-81oe9z"), c(r, "class", "btn-filled svelte-81oe9z"), c(e, "class", "empty-state svelte-81oe9z");
          },
          m(u, d) {
            T(u, e, d), a(e, t), a(e, n), a(e, o), a(e, s), a(e, r), l || (i = U(r, "click", x[18]), l = true);
          },
          p: X,
          d(u) {
            u && P(e), l = false, i();
          }
        };
      }
      function mi(x) {
        let e, t = xe(x[20].rawToken).slice(0, 12) + "", n, o;
        return {
          c() {
            e = E("span"), n = z(t), o = z("\u2026"), c(e, "class", "rel-sub enc-token svelte-81oe9z");
          },
          m(s, r) {
            T(s, e, r), a(e, n), a(e, o);
          },
          p(s, r) {
            r & 1 && t !== (t = xe(s[20].rawToken).slice(0, 12) + "") && G(n, t);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function hi(x) {
        let e, t = x[20].note + "", n;
        return {
          c() {
            e = E("span"), n = z(t), c(e, "class", "rel-sub enc-note svelte-81oe9z");
          },
          m(o, s) {
            T(o, e, s), a(e, n);
          },
          p(o, s) {
            s & 1 && t !== (t = o[20].note + "") && G(n, t);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function bn(x) {
        let e, t, n, o, s, r, l = x[20].date + "", i, u, d, f, B, C;
        function A(h, v) {
          return h[20].note ? hi : mi;
        }
        let F = A(x), m = F(x);
        return {
          c() {
            e = E("li"), t = E("a"), n = E("span"), n.textContent = "check_circle_outline", o = g(), s = E("span"), r = E("span"), i = z(l), u = g(), m.c(), d = g(), f = E("span"), f.textContent = "chevron_right", C = g(), c(n, "class", "material-icons rel-icon active svelte-81oe9z"), c(r, "class", "rel-name svelte-81oe9z"), c(s, "class", "rel-main svelte-81oe9z"), c(f, "class", "material-icons chevron svelte-81oe9z"), c(t, "class", "rel-row svelte-81oe9z"), c(t, "href", B = "#/encounters/" + xe(x[20].rawToken)), c(e, "class", "svelte-81oe9z");
          },
          m(h, v) {
            T(h, e, v), a(e, t), a(t, n), a(t, o), a(t, s), a(s, r), a(r, i), a(s, u), m.m(s, null), a(t, d), a(t, f), a(e, C);
          },
          p(h, v) {
            v & 1 && l !== (l = h[20].date + "") && G(i, l), F === (F = A(h)) && m ? m.p(h, v) : (m.d(1), m = F(h), m && (m.c(), m.m(s, null))), v & 1 && B !== (B = "#/encounters/" + xe(h[20].rawToken)) && c(t, "href", B);
          },
          d(h) {
            h && P(e), m.d();
          }
        };
      }
      function vi(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B;
        e = new c0({});
        let C = x[5] && An(x);
        function A(h, v) {
          return h[2] ? Ai : h[3] ? Ci : Bi;
        }
        let F = A(x), m = F(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), o = E("div"), s = E("h1"), s.textContent = "Encounters", r = g(), l = E("button"), l.innerHTML = '<span class="material-icons">add</span>', i = g(), C && C.c(), u = g(), m.c(), c(s, "class", "svelte-81oe9z"), c(l, "class", "fab svelte-81oe9z"), c(l, "title", "Add encounter"), c(o, "class", "page-header svelte-81oe9z"), c(n, "class", "svelte-81oe9z");
          },
          m(h, v) {
            Me(e, h, v), T(h, t, v), T(h, n, v), a(n, o), a(o, s), a(o, r), a(o, l), a(n, i), C && C.m(n, null), a(n, u), m.m(n, null), d = true, f || (B = U(l, "click", x[13]), f = true);
          },
          p(h, [v]) {
            h[5] ? C ? C.p(h, v) : (C = An(h), C.c(), C.m(n, u)) : C && (C.d(1), C = null), F === (F = A(h)) && m ? m.p(h, v) : (m.d(1), m = F(h), m && (m.c(), m.m(n, null)));
          },
          i(h) {
            d || (fe(e.$$.fragment, h), d = true);
          },
          o(h) {
            Ae(e.$$.fragment, h), d = false;
          },
          d(h) {
            h && (P(t), P(n)), Le(e, h), C && C.d(), m.d(), f = false, B();
          }
        };
      }
      function Mt(x) {
        return x.name ? x.name : x.endedAt ? "Ended partner" : "Active partner";
      }
      function Lt(x) {
        return x.endedAt ? "Ended " + x.endedAt : "Since " + x.createdAt;
      }
      function gn(x) {
        return x.name || "Group encounter";
      }
      function wn(x) {
        return (x.isHost ? "Host \xB7 " : "") + x.date;
      }
      function _i(x, e, t) {
        let n, o, s = [], r = [], l = [], i = true, u = null, d = false, f = false, B = false, C = null;
        Ue(() => {
          if (!We()) {
            ue("/login");
            return;
          }
          A();
        });
        function A() {
          t(2, i = true), t(3, u = null);
          try {
            t(0, s = Is()), t(11, r = Nx()), t(1, l = Ms());
          } catch (k) {
            t(3, u = k.message);
          } finally {
            t(2, i = false);
          }
        }
        async function F() {
          t(6, B = true), t(7, C = null);
          try {
            const k = it(32), w = y0();
            await Ls(k, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), true, w, null), t(5, f = false), ue("/groups/" + xe(k));
          } catch (k) {
            t(7, C = k.message);
          } finally {
            t(6, B = false);
          }
        }
        function m(k) {
          cx.call(this, x, k);
        }
        const h = () => t(5, f = true), v = () => {
          t(5, f = false), ue("/encounter-exchange");
        }, b = () => t(5, f = false), _ = () => {
          B || t(5, f = false);
        }, D = () => t(4, d = !d), p = () => t(5, f = true);
        return x.$$.update = () => {
          x.$$.dirty & 2048 && t(9, n = r.filter((k) => !k.archived)), x.$$.dirty & 2048 && t(8, o = r.filter((k) => k.archived));
        }, [
          s,
          l,
          i,
          u,
          d,
          f,
          B,
          C,
          o,
          n,
          F,
          r,
          m,
          h,
          v,
          b,
          _,
          D,
          p
        ];
      }
      class ki extends ve {
        constructor(e) {
          super(), he(this, e, _i, vi, pe, {});
        }
      }
      function bi(x) {
        let e, t, n, o, s = x[7] ? "favorite" : "favorite_border", r, l, i, u, d = x[7] ? "Active partner" : "Ended", f, B, C, A, F, m, h = Nt(x[0].createdAt) + "", v, b, _, D, p, k, w, y, S, M, I = x[3] && yn(x), L = x[0].archived && Pn(), N = x[0].endedAt && Tn(x);
        function q(K, le) {
          return K[4] ? yi : wi;
        }
        let R = q(x), H = R(x);
        function O(K, le) {
          return K[7] ? Ti : Pi;
        }
        let Q = O(x), V = Q(x);
        function Y(K, le) {
          return K[0].archived ? Ni : K[6] === "archive" ? Li : Mi;
        }
        let j = Y(x), J = j(x);
        return {
          c() {
            I && I.c(), e = g(), t = E("section"), n = E("div"), o = E("span"), r = z(s), l = g(), i = E("div"), u = E("span"), f = z(d), B = g(), L && L.c(), C = g(), A = E("div"), F = E("span"), m = z("Since "), v = z(h), b = g(), N && N.c(), _ = g(), D = E("section"), H.c(), p = g(), k = E("div"), w = g(), V.c(), y = g(), S = E("div"), M = g(), J.c(), c(o, "class", "material-icons status-icon svelte-1lfam"), te(o, "active", x[7]), te(o, "ended", !x[7]), c(u, "class", "status-label svelte-1lfam"), te(u, "active", x[7]), c(i, "class", "status-text svelte-1lfam"), c(n, "class", "status-row svelte-1lfam"), c(A, "class", "dates svelte-1lfam"), c(t, "class", "card pad svelte-1lfam"), c(k, "class", "divider svelte-1lfam"), c(S, "class", "divider svelte-1lfam"), c(D, "class", "card svelte-1lfam");
          },
          m(K, le) {
            I && I.m(K, le), T(K, e, le), T(K, t, le), a(t, n), a(n, o), a(o, r), a(n, l), a(n, i), a(i, u), a(u, f), a(i, B), L && L.m(i, null), a(t, C), a(t, A), a(A, F), a(F, m), a(F, v), a(A, b), N && N.m(A, null), T(K, _, le), T(K, D, le), H.m(D, null), a(D, p), a(D, k), a(D, w), V.m(D, null), a(D, y), a(D, S), a(D, M), J.m(D, null);
          },
          p(K, le) {
            K[3] ? I ? I.p(K, le) : (I = yn(K), I.c(), I.m(e.parentNode, e)) : I && (I.d(1), I = null), le & 128 && s !== (s = K[7] ? "favorite" : "favorite_border") && G(r, s), le & 128 && te(o, "active", K[7]), le & 128 && te(o, "ended", !K[7]), le & 128 && d !== (d = K[7] ? "Active partner" : "Ended") && G(f, d), le & 128 && te(u, "active", K[7]), K[0].archived ? L || (L = Pn(), L.c(), L.m(i, null)) : L && (L.d(1), L = null), le & 1 && h !== (h = Nt(K[0].createdAt) + "") && G(v, h), K[0].endedAt ? N ? N.p(K, le) : (N = Tn(K), N.c(), N.m(A, null)) : N && (N.d(1), N = null), R === (R = q(K)) && H ? H.p(K, le) : (H.d(1), H = R(K), H && (H.c(), H.m(D, p))), Q === (Q = O(K)) && V ? V.p(K, le) : (V.d(1), V = Q(K), V && (V.c(), V.m(D, y))), j === (j = Y(K)) && J ? J.p(K, le) : (J.d(1), J = j(K), J && (J.c(), J.m(D, null)));
          },
          d(K) {
            K && (P(e), P(t), P(_), P(D)), I && I.d(K), L && L.d(), N && N.d(), H.d(), V.d(), J.d();
          }
        };
      }
      function gi(x) {
        let e;
        return {
          c() {
            e = E("section"), e.innerHTML = '<p class="muted svelte-1lfam">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-1lfam">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-1lfam");
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
      function yn(x) {
        let e, t, n, o;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "error_outline", n = g(), o = z(x[3]), c(t, "class", "material-icons svelte-1lfam"), c(e, "class", "toast error-toast svelte-1lfam");
          },
          m(s, r) {
            T(s, e, r), a(e, t), a(e, n), a(e, o);
          },
          p(s, r) {
            r & 8 && G(o, s[3]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Pn(x) {
        let e;
        return {
          c() {
            e = E("span"), e.textContent = "archived", c(e, "class", "badge archived svelte-1lfam");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Tn(x) {
        let e, t, n = Nt(x[0].endedAt) + "", o;
        return {
          c() {
            e = E("span"), t = z("Ended "), o = z(n);
          },
          m(s, r) {
            T(s, e, r), a(e, t), a(e, o);
          },
          p(s, r) {
            r & 1 && n !== (n = Nt(s[0].endedAt) + "") && G(o, n);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function wi(x) {
        let e, t, n, o, s = (x[0].name ? x[0].name : "Add nickname") + "", r, l, i, u, d, f, B = x[0].name && Sn();
        return {
          c() {
            e = E("button"), t = E("span"), t.textContent = "edit", n = g(), o = E("span"), r = z(s), l = g(), B && B.c(), i = g(), u = E("span"), u.textContent = "chevron_right", c(t, "class", "material-icons action-icon svelte-1lfam"), c(o, "class", "action-label svelte-1lfam"), c(u, "class", "material-icons action-chevron svelte-1lfam"), c(e, "class", "action-row svelte-1lfam");
          },
          m(C, A) {
            T(C, e, A), a(e, t), a(e, n), a(e, o), a(o, r), a(o, l), B && B.m(o, null), a(e, i), a(e, u), d || (f = U(e, "click", x[13]), d = true);
          },
          p(C, A) {
            A & 1 && s !== (s = (C[0].name ? C[0].name : "Add nickname") + "") && G(r, s), C[0].name ? B || (B = Sn(), B.c(), B.m(o, null)) : B && (B.d(1), B = null);
          },
          d(C) {
            C && P(e), B && B.d(), d = false, f();
          }
        };
      }
      function yi(x) {
        let e, t, n, o, s, r, l, i, u, d, f = x[2] ? "Saving\u2026" : "Save", B, C, A;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "edit", n = g(), o = E("form"), s = E("input"), r = g(), l = E("div"), i = E("button"), i.textContent = "Cancel", u = g(), d = E("button"), B = z(f), c(t, "class", "material-icons action-icon svelte-1lfam"), c(s, "type", "text"), c(s, "placeholder", "Optional nickname"), c(s, "maxlength", "64"), s.autofocus = true, c(s, "class", "svelte-1lfam"), c(i, "type", "button"), c(i, "class", "btn-text svelte-1lfam"), c(d, "type", "submit"), c(d, "class", "btn-filled-sm svelte-1lfam"), d.disabled = x[2], c(l, "class", "name-actions svelte-1lfam"), c(o, "class", "name-form svelte-1lfam"), c(e, "class", "action-row edit-name-row svelte-1lfam");
          },
          m(F, m) {
            T(F, e, m), a(e, t), a(e, n), a(e, o), a(o, s), se(s, x[5]), a(o, r), a(o, l), a(l, i), a(l, u), a(l, d), a(d, B), s.focus(), C || (A = [
              U(s, "input", x[16]),
              U(i, "click", x[14]),
              U(o, "submit", C0(x[9]))
            ], C = true);
          },
          p(F, m) {
            m & 32 && s.value !== F[5] && se(s, F[5]), m & 4 && f !== (f = F[2] ? "Saving\u2026" : "Save") && G(B, f), m & 4 && (d.disabled = F[2]);
          },
          d(F) {
            F && P(e), C = false, re(A);
          }
        };
      }
      function Sn(x) {
        let e;
        return {
          c() {
            e = E("span"), e.textContent = "Tap to change", c(e, "class", "action-sub svelte-1lfam");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Pi(x) {
        let e, t, n, o, s, r;
        return {
          c() {
            e = E("button"), t = E("span"), t.textContent = "favorite", n = g(), o = E("span"), o.textContent = "Mark as active again", c(t, "class", "material-icons action-icon primary svelte-1lfam"), c(o, "class", "action-label primary svelte-1lfam"), c(e, "class", "action-row svelte-1lfam"), e.disabled = x[2];
          },
          m(l, i) {
            T(l, e, i), a(e, t), a(e, n), a(e, o), s || (r = U(e, "click", x[11]), s = true);
          },
          p(l, i) {
            i & 4 && (e.disabled = l[2]);
          },
          d(l) {
            l && P(e), s = false, r();
          }
        };
      }
      function Ti(x) {
        let e;
        function t(s, r) {
          return s[6] === "end" ? Ii : Si;
        }
        let n = t(x), o = n(x);
        return {
          c() {
            o.c(), e = s0();
          },
          m(s, r) {
            o.m(s, r), T(s, e, r);
          },
          p(s, r) {
            n === (n = t(s)) && o ? o.p(s, r) : (o.d(1), o = n(s), o && (o.c(), o.m(e.parentNode, e)));
          },
          d(s) {
            s && P(e), o.d(s);
          }
        };
      }
      function Si(x) {
        let e, t, n;
        return {
          c() {
            e = E("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-1lfam">heart_broken</span> <span class="action-label danger svelte-1lfam">Mark as ended</span>', c(e, "class", "action-row svelte-1lfam");
          },
          m(o, s) {
            T(o, e, s), t || (n = U(e, "click", x[18]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function Ii(x) {
        let e, t, n, o, s, r, l, i = x[2] ? "Saving\u2026" : "Mark as ended", u, d, f;
        return {
          c() {
            e = E("div"), t = E("p"), t.textContent = "Mark this partnership as ended?", n = g(), o = E("div"), s = E("button"), s.textContent = "Cancel", r = g(), l = E("button"), u = z(i), c(t, "class", "confirm-text svelte-1lfam"), c(s, "class", "btn-text svelte-1lfam"), c(l, "class", "btn-danger-sm svelte-1lfam"), l.disabled = x[2], c(o, "class", "confirm-actions svelte-1lfam"), c(e, "class", "confirm-row svelte-1lfam");
          },
          m(B, C) {
            T(B, e, C), a(e, t), a(e, n), a(e, o), a(o, s), a(o, r), a(o, l), a(l, u), d || (f = [
              U(s, "click", x[17]),
              U(l, "click", x[10])
            ], d = true);
          },
          p(B, C) {
            C & 4 && i !== (i = B[2] ? "Saving\u2026" : "Mark as ended") && G(u, i), C & 4 && (l.disabled = B[2]);
          },
          d(B) {
            B && P(e), d = false, re(f);
          }
        };
      }
      function Mi(x) {
        let e, t, n;
        return {
          c() {
            e = E("button"), e.innerHTML = '<span class="material-icons action-icon svelte-1lfam">archive</span> <span class="action-label svelte-1lfam">Archive</span> <span class="action-sub-right svelte-1lfam">Hide from main list</span>', c(e, "class", "action-row svelte-1lfam");
          },
          m(o, s) {
            T(o, e, s), t || (n = U(e, "click", x[22]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function Li(x) {
        let e, t, n, o, s, r, l, i = x[2] ? "Saving\u2026" : "Archive", u, d, f;
        return {
          c() {
            e = E("div"), t = E("p"), t.textContent = "Archive this partner? They will be hidden from the main list.", n = g(), o = E("div"), s = E("button"), s.textContent = "Cancel", r = g(), l = E("button"), u = z(i), c(t, "class", "confirm-text svelte-1lfam"), c(s, "class", "btn-text svelte-1lfam"), c(l, "class", "btn-filled-sm svelte-1lfam"), l.disabled = x[2], c(o, "class", "confirm-actions svelte-1lfam"), c(e, "class", "confirm-row svelte-1lfam");
          },
          m(B, C) {
            T(B, e, C), a(e, t), a(e, n), a(e, o), a(o, s), a(o, r), a(o, l), a(l, u), d || (f = [
              U(s, "click", x[20]),
              U(l, "click", x[21])
            ], d = true);
          },
          p(B, C) {
            C & 4 && i !== (i = B[2] ? "Saving\u2026" : "Archive") && G(u, i), C & 4 && (l.disabled = B[2]);
          },
          d(B) {
            B && P(e), d = false, re(f);
          }
        };
      }
      function Ni(x) {
        let e, t, n, o, s, r;
        return {
          c() {
            e = E("button"), t = E("span"), t.textContent = "unarchive", n = g(), o = E("span"), o.textContent = "Unarchive", c(t, "class", "material-icons action-icon primary svelte-1lfam"), c(o, "class", "action-label primary svelte-1lfam"), c(e, "class", "action-row svelte-1lfam"), e.disabled = x[2];
          },
          m(l, i) {
            T(l, e, i), a(e, t), a(e, n), a(e, o), s || (r = U(e, "click", x[19]), s = true);
          },
          p(l, i) {
            i & 4 && (e.disabled = l[2]);
          },
          d(l) {
            l && P(e), s = false, r();
          }
        };
      }
      function zi(x) {
        let e, t, n, o, s, r, l, i = (x[1] ? "Partner not found" : x[8]) + "", u, d, f;
        e = new c0({});
        function B(F, m) {
          if (F[1]) return gi;
          if (F[0]) return bi;
        }
        let C = B(x), A = C && C(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), o = E("div"), s = E("a"), s.innerHTML = '<span class="material-icons svelte-1lfam">arrow_back</span>', r = g(), l = E("h1"), u = z(i), d = g(), A && A.c(), c(s, "class", "back-btn svelte-1lfam"), c(s, "href", "#/encounters"), c(l, "class", "svelte-1lfam"), c(o, "class", "page-header svelte-1lfam"), c(n, "class", "svelte-1lfam");
          },
          m(F, m) {
            Me(e, F, m), T(F, t, m), T(F, n, m), a(n, o), a(o, s), a(o, r), a(o, l), a(l, u), a(n, d), A && A.m(n, null), f = true;
          },
          p(F, [m]) {
            (!f || m & 258) && i !== (i = (F[1] ? "Partner not found" : F[8]) + "") && G(u, i), C === (C = B(F)) && A ? A.p(F, m) : (A && A.d(1), A = C && C(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            f || (fe(e.$$.fragment, F), f = true);
          },
          o(F) {
            Ae(e.$$.fragment, F), f = false;
          },
          d(F) {
            F && (P(t), P(n)), Le(e, F), A && A.d();
          }
        };
      }
      function Nt(x) {
        return x ? (/* @__PURE__ */ new Date(x + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function qi(x, e, t) {
        let n, o, { params: s = {
          rawTokenHex: ""
        } } = e, r = null, l = false, i = false, u = null, d = false, f = "", B = null;
        Ue(() => {
          if (!We()) {
            ue("/login");
            return;
          }
          C();
        });
        function C() {
          const I = Nx(), L = s.rawTokenHex;
          t(0, r = I.find((N) => xe(N.rawToken) === L) ?? null), r || t(1, l = true);
        }
        function A() {
          return xe(r.rawToken);
        }
        async function F() {
          if (!i) {
            t(2, i = true), t(3, u = null);
            try {
              const I = f.trim();
              await Ft(A(), {
                name: I || null
              }), C(), t(4, d = false);
            } catch (I) {
              t(3, u = I.message);
            } finally {
              t(2, i = false);
            }
          }
        }
        async function m() {
          if (!i) {
            t(2, i = true), t(3, u = null);
            try {
              const I = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              await Ft(A(), {
                endedAt: I
              }), C();
            } catch (I) {
              t(3, u = I.message);
            } finally {
              t(2, i = false), t(6, B = null);
            }
          }
        }
        async function h() {
          if (!i) {
            t(2, i = true), t(3, u = null);
            try {
              await Ft(A(), {
                endedAt: null
              }), C();
            } catch (I) {
              t(3, u = I.message);
            } finally {
              t(2, i = false);
            }
          }
        }
        async function v(I) {
          if (!i) {
            t(2, i = true), t(3, u = null);
            try {
              await Ft(A(), {
                archived: I
              }), C();
            } catch (L) {
              t(3, u = L.message);
            } finally {
              t(2, i = false), t(6, B = null);
            }
          }
        }
        function b() {
          t(5, f = r.name ?? ""), t(4, d = true), t(3, u = null);
        }
        function _() {
          t(4, d = false), t(3, u = null);
        }
        function D() {
          f = this.value, t(5, f);
        }
        const p = () => t(6, B = null), k = () => t(6, B = "end"), w = () => v(false), y = () => t(6, B = null), S = () => v(true), M = () => t(6, B = "archive");
        return x.$$set = (I) => {
          "params" in I && t(15, s = I.params);
        }, x.$$.update = () => {
          x.$$.dirty & 1 && t(8, n = r?.name || (r?.endedAt ? "Ended partner" : "Active partner")), x.$$.dirty & 1 && t(7, o = r && !r.endedAt);
        }, [
          r,
          l,
          i,
          u,
          d,
          f,
          B,
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
      class Ri extends ve {
        constructor(e) {
          super(), he(this, e, qi, zi, pe, {
            params: 15
          });
        }
      }
      function In(x, e, t) {
        const n = x.slice();
        n[18] = e[t], n[21] = t;
        const o = n[6].length - 1 - n[21];
        return n[19] = o, n;
      }
      function Mn(x, e, t) {
        const n = x.slice();
        return n[22] = e[t], n[23] = e, n[24] = t, n;
      }
      function Hi(x) {
        let e;
        return {
          c() {
            e = E("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
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
      function Oi(x) {
        let e;
        return {
          c() {
            e = E("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
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
      function Ui(x) {
        let e;
        return {
          c() {
            e = E("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
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
      function Ln(x) {
        let e, t, n, o;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "error_outline", n = g(), o = z(x[5]), c(t, "class", "material-icons svelte-1ugndgv"), c(e, "class", "toast error-toast svelte-1ugndgv");
          },
          m(s, r) {
            T(s, e, r), a(e, t), a(e, n), a(e, o);
          },
          p(s, r) {
            r & 32 && G(o, s[5]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Nn(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D = x[3] && x[4] === "computing" ? "Saving\u2026" : "Save result", p, k, w, y = Be(i0), S = [];
        for (let I = 0; I < y.length; I += 1) S[I] = zn(Mn(x, y, I));
        let M = x[4] === "computing" && qn();
        return {
          c() {
            e = E("section"), t = E("h2"), t.textContent = "Record a result", n = g(), o = E("p"), o.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, s = g(), r = E("form"), l = E("label"), i = z(`Test date
          `), u = E("input"), d = g(), f = E("fieldset"), B = E("legend"), B.textContent = "Positive results", C = g(), A = E("div");
            for (let I = 0; I < S.length; I += 1) S[I].c();
            F = g(), M && M.c(), m = g(), h = E("div"), v = E("button"), v.textContent = "Cancel", b = g(), _ = E("button"), p = z(D), c(t, "class", "svelte-1ugndgv"), c(o, "class", "help svelte-1ugndgv"), c(u, "type", "date"), u.required = true, c(u, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), c(u, "class", "svelte-1ugndgv"), c(l, "class", "svelte-1ugndgv"), c(B, "class", "svelte-1ugndgv"), c(A, "class", "disease-grid svelte-1ugndgv"), c(f, "class", "svelte-1ugndgv"), c(v, "type", "button"), c(v, "class", "btn-text svelte-1ugndgv"), c(_, "type", "submit"), c(_, "class", "btn-filled svelte-1ugndgv"), _.disabled = x[3], c(h, "class", "form-actions svelte-1ugndgv"), c(r, "class", "svelte-1ugndgv"), c(e, "class", "card form-card svelte-1ugndgv");
          },
          m(I, L) {
            T(I, e, L), a(e, t), a(e, n), a(e, o), a(e, s), a(e, r), a(r, l), a(l, i), a(l, u), se(u, x[0]), a(r, d), a(r, f), a(f, B), a(f, C), a(f, A);
            for (let N = 0; N < S.length; N += 1) S[N] && S[N].m(A, null);
            a(r, F), M && M.m(r, null), a(r, m), a(r, h), a(h, v), a(h, b), a(h, _), a(_, p), k || (w = [
              U(u, "input", x[11]),
              U(v, "click", x[13]),
              U(r, "submit", C0(x[8]))
            ], k = true);
          },
          p(I, L) {
            if (L & 1 && se(u, I[0]), L & 2) {
              y = Be(i0);
              let N;
              for (N = 0; N < y.length; N += 1) {
                const q = Mn(I, y, N);
                S[N] ? S[N].p(q, L) : (S[N] = zn(q), S[N].c(), S[N].m(A, null));
              }
              for (; N < S.length; N += 1) S[N].d(1);
              S.length = y.length;
            }
            I[4] === "computing" ? M || (M = qn(), M.c(), M.m(r, m)) : M && (M.d(1), M = null), L & 24 && D !== (D = I[3] && I[4] === "computing" ? "Saving\u2026" : "Save result") && G(p, D), L & 8 && (_.disabled = I[3]);
          },
          d(I) {
            I && P(e), Ke(S, I), M && M.d(), k = false, re(w);
          }
        };
      }
      function zn(x) {
        let e, t, n, o = tt[x[22]] + "", s, r, l, i;
        function u() {
          x[12].call(t, x[22]);
        }
        return {
          c() {
            e = E("label"), t = E("input"), n = g(), s = z(o), r = g(), c(t, "type", "checkbox"), c(t, "class", "svelte-1ugndgv"), c(e, "class", "checkbox-label svelte-1ugndgv");
          },
          m(d, f) {
            T(d, e, f), a(e, t), t.checked = x[1][x[22]], a(e, n), a(e, s), a(e, r), l || (i = U(t, "change", u), l = true);
          },
          p(d, f) {
            x = d, f & 2 && (t.checked = x[1][x[22]]);
          },
          d(d) {
            d && P(e), l = false, i();
          }
        };
      }
      function qn(x) {
        let e;
        return {
          c() {
            e = E("p"), e.innerHTML = `<span class="material-icons spin svelte-1ugndgv">autorenew</span>
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
      function ji(x) {
        let e, t = Be([
          ...x[6]
        ].reverse()), n = [];
        for (let o = 0; o < t.length; o += 1) n[o] = Hn(In(x, t, o));
        return {
          c() {
            e = E("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-1ugndgv");
          },
          m(o, s) {
            T(o, e, s);
            for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(e, null);
          },
          p(o, s) {
            if (s & 712) {
              t = Be([
                ...o[6]
              ].reverse());
              let r;
              for (r = 0; r < t.length; r += 1) {
                const l = In(o, t, r);
                n[r] ? n[r].p(l, s) : (n[r] = Hn(l), n[r].c(), n[r].m(e, null));
              }
              for (; r < n.length; r += 1) n[r].d(1);
              n.length = t.length;
            }
          },
          d(o) {
            o && P(e), Ke(n, o);
          }
        };
      }
      function Vi(x) {
        let e, t, n, o, s, r, l, i;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "science", n = g(), o = E("p"), o.textContent = "No results recorded yet.", s = g(), r = E("button"), r.innerHTML = `<span class="material-icons">add</span>
          Record first result`, c(t, "class", "material-icons empty-icon svelte-1ugndgv"), c(o, "class", "svelte-1ugndgv"), c(r, "class", "btn-filled svelte-1ugndgv"), c(e, "class", "empty-state svelte-1ugndgv");
          },
          m(u, d) {
            T(u, e, d), a(e, t), a(e, n), a(e, o), a(e, s), a(e, r), l || (i = U(r, "click", x[14]), l = true);
          },
          p: X,
          d(u) {
            u && P(e), l = false, i();
          }
        };
      }
      function Gi(x) {
        let e;
        return {
          c() {
            e = E("span"), e.textContent = "Negative", c(e, "class", "badge negative svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Yi(x) {
        let e;
        return {
          c() {
            e = E("span"), e.textContent = "Positive", c(e, "class", "badge positive svelte-1ugndgv");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Rn(x) {
        let e, t = x[18].positiveDiseases.map(x[15]).join(", ") + "", n, o, s;
        function r(u, d) {
          return u[18].hasNotified ? Wi : Ki;
        }
        let l = r(x), i = l(x);
        return {
          c() {
            e = E("div"), n = z(t), o = g(), i.c(), s = s0(), c(e, "class", "diseases svelte-1ugndgv");
          },
          m(u, d) {
            T(u, e, d), a(e, n), T(u, o, d), i.m(u, d), T(u, s, d);
          },
          p(u, d) {
            d & 64 && t !== (t = u[18].positiveDiseases.map(u[15]).join(", ") + "") && G(n, t), l === (l = r(u)) && i ? i.p(u, d) : (i.d(1), i = l(u), i && (i.c(), i.m(s.parentNode, s)));
          },
          d(u) {
            u && (P(e), P(o), P(s)), i.d(u);
          }
        };
      }
      function Ki(x) {
        let e, t, n, o, s = x[7] === x[19] ? "Notifying\u2026" : "Notify now", r, l, i;
        function u() {
          return x[16](x[19], x[18]);
        }
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "Partners not yet notified", n = g(), o = E("button"), r = z(s), c(t, "class", "not-notified svelte-1ugndgv"), c(o, "class", "btn-text-small svelte-1ugndgv"), o.disabled = x[3], c(e, "class", "notify-row svelte-1ugndgv");
          },
          m(d, f) {
            T(d, e, f), a(e, t), a(e, n), a(e, o), a(o, r), l || (i = U(o, "click", u), l = true);
          },
          p(d, f) {
            x = d, f & 192 && s !== (s = x[7] === x[19] ? "Notifying\u2026" : "Notify now") && G(r, s), f & 8 && (o.disabled = x[3]);
          },
          d(d) {
            d && P(e), l = false, i();
          }
        };
      }
      function Wi(x) {
        let e;
        return {
          c() {
            e = E("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check</span>
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
      function Hn(x) {
        let e, t, n = x[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", o, s, r, l, i, u = x[18].date + "", d, f, B, C;
        function A(v, b) {
          return v[18].positiveDiseases.length > 0 ? Yi : Gi;
        }
        let F = A(x), m = F(x), h = x[18].positiveDiseases.length > 0 && Rn(x);
        return {
          c() {
            e = E("li"), t = E("span"), o = z(n), s = g(), r = E("div"), l = E("div"), i = E("span"), d = z(u), f = g(), m.c(), B = g(), h && h.c(), C = g(), c(t, "class", "material-icons result-icon svelte-1ugndgv"), te(t, "positive", x[18].positiveDiseases.length > 0), te(t, "negative", x[18].positiveDiseases.length === 0), c(i, "class", "result-date svelte-1ugndgv"), c(l, "class", "result-row svelte-1ugndgv"), c(r, "class", "result-body svelte-1ugndgv"), c(e, "class", "svelte-1ugndgv");
          },
          m(v, b) {
            T(v, e, b), a(e, t), a(t, o), a(e, s), a(e, r), a(r, l), a(l, i), a(i, d), a(l, f), m.m(l, null), a(r, B), h && h.m(r, null), a(e, C);
          },
          p(v, b) {
            b & 64 && n !== (n = v[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && G(o, n), b & 64 && te(t, "positive", v[18].positiveDiseases.length > 0), b & 64 && te(t, "negative", v[18].positiveDiseases.length === 0), b & 64 && u !== (u = v[18].date + "") && G(d, u), F !== (F = A(v)) && (m.d(1), m = F(v), m && (m.c(), m.m(l, null))), v[18].positiveDiseases.length > 0 ? h ? h.p(v, b) : (h = Rn(v), h.c(), h.m(r, null)) : h && (h.d(1), h = null);
          },
          d(v) {
            v && P(e), m.d(), h && h.d();
          }
        };
      }
      function Qi(x) {
        let e, t, n, o, s, r, l, i, u = x[2] ? "close" : "add", d, f, B, C, A, F, m, h, v, b;
        e = new c0({});
        function _(I, L) {
          if (I[4] === "done") return Ui;
          if (I[4] === "done_negative") return Oi;
          if (I[4] === "done_no_encounters") return Hi;
        }
        let D = _(x), p = D && D(x), k = x[5] && Ln(x), w = x[2] && Nn(x);
        function y(I, L) {
          return I[6].length === 0 ? Vi : ji;
        }
        let S = y(x), M = S(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), o = E("div"), s = E("h1"), s.textContent = "Test Results", r = g(), l = E("button"), i = E("span"), d = z(u), B = g(), p && p.c(), C = g(), k && k.c(), A = g(), w && w.c(), F = g(), m = E("section"), M.c(), c(s, "class", "svelte-1ugndgv"), c(i, "class", "material-icons"), c(l, "class", "fab svelte-1ugndgv"), c(l, "title", f = x[2] ? "Cancel" : "Record new result"), c(o, "class", "page-header svelte-1ugndgv"), c(m, "class", "card list-card svelte-1ugndgv"), c(n, "class", "svelte-1ugndgv");
          },
          m(I, L) {
            Me(e, I, L), T(I, t, L), T(I, n, L), a(n, o), a(o, s), a(o, r), a(o, l), a(l, i), a(i, d), a(n, B), p && p.m(n, null), a(n, C), k && k.m(n, null), a(n, A), w && w.m(n, null), a(n, F), a(n, m), M.m(m, null), h = true, v || (b = U(l, "click", x[10]), v = true);
          },
          p(I, [L]) {
            (!h || L & 4) && u !== (u = I[2] ? "close" : "add") && G(d, u), (!h || L & 4 && f !== (f = I[2] ? "Cancel" : "Record new result")) && c(l, "title", f), D !== (D = _(I)) && (p && p.d(1), p = D && D(I), p && (p.c(), p.m(n, C))), I[5] ? k ? k.p(I, L) : (k = Ln(I), k.c(), k.m(n, A)) : k && (k.d(1), k = null), I[2] ? w ? w.p(I, L) : (w = Nn(I), w.c(), w.m(n, F)) : w && (w.d(1), w = null), S === (S = y(I)) && M ? M.p(I, L) : (M.d(1), M = S(I), M && (M.c(), M.m(m, null)));
          },
          i(I) {
            h || (fe(e.$$.fragment, I), h = true);
          },
          o(I) {
            Ae(e.$$.fragment, I), h = false;
          },
          d(I) {
            I && (P(t), P(n)), Le(e, I), p && p.d(), k && k.d(), w && w.d(), M.d(), v = false, b();
          }
        };
      }
      const Ji = 20, On = 50, Xi = 100;
      function Zi(x, e, t) {
        let n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), o = {}, s = false, r = false, l = null, i = null, u = [], d = null;
        Ue(() => {
          if (!We()) {
            ue("/login");
            return;
          }
          t(6, u = kt());
        });
        async function f(D, p) {
          const k = B0(), w = y0(), y = [
            ...k.encounters.map((oe) => w0(oe.rawToken, oe.theirContactId, oe.submitIndex)),
            ...(k.relationships || []).map((oe) => w0(oe.rawToken, oe.theirContactId, oe.submitIndex))
          ], S = On + Math.floor(Math.random() * (Xi - On + 1)), M = [
            ...y
          ];
          for (; M.length < S; ) M.push(it(32));
          for (let oe = M.length - 1; oe > 0; oe--) {
            const Ee = Math.floor(Math.random() * (oe + 1));
            [M[oe], M[Ee]] = [
              M[Ee],
              M[oe]
            ];
          }
          const I = M.map((oe) => P0(oe)), L = Fs(w), N = D.replace(/-/g, ""), q = p.map((oe) => Ps[oe] ?? oe).join(""), R = new TextEncoder().encode("1" + N + q), H = ct(L, R), O = P0(H), Q = new TextEncoder(), V = JSON.stringify(I), Y = Q.encode(V).length + Q.encode(O).length, j = new Uint8Array(Y), J = Q.encode(V), K = Q.encode(O);
          j.set(J, 0), j.set(K, J.length);
          const le = Rr(j);
          let ce = Ji, ae = (/* @__PURE__ */ new Date()).toISOString();
          for (let oe = 0; oe < 2; oe++) {
            const { counter: Ee } = Hr(ae, le, ce), Ge = {
              tokens: I,
              created_at: ae,
              submission_type: "self_reported",
              encrypted_payload: O,
              pow_counter: Ee
            };
            try {
              await Aa(Ge);
              break;
            } catch (Z) {
              const ee = Z;
              if (oe === 0 && ee.statusCode === 400) {
                let ie = false;
                if (ee.powDifficulty && ee.powDifficulty > ce && (ce = ee.powDifficulty, ie = true), ee.serverTime && (ae = ee.serverTime, ie = true), ie) continue;
              }
              throw Z;
            }
          }
          await Ha();
        }
        async function B() {
          if (!r) {
            t(3, r = true), t(5, i = null), t(4, l = null);
            try {
              const D = i0.filter((p) => o[p]);
              if (D.length > 0) {
                const p = B0();
                if (p.encounters.length > 0 || (p.relationships || []).length > 0) {
                  const w = await nx(n, D);
                  t(4, l = "computing"), await new Promise((y) => setTimeout(y, 30)), await f(n, D), await nn(w), t(4, l = "done");
                } else await nx(n, D, true), t(4, l = "done_no_encounters");
              } else await nx(n, D), t(4, l = "done_negative");
              t(1, o = {}), t(0, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), t(6, u = kt()), t(2, s = false);
            } catch (D) {
              t(5, i = D.message), t(4, l = null);
            } finally {
              t(3, r = false);
            }
          }
        }
        async function C(D, p) {
          if (!r) {
            t(3, r = true), t(7, d = D), t(5, i = null);
            try {
              const k = B0();
              if (k.encounters.length === 0 && (k.relationships || []).length === 0) {
                t(5, i = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((w) => setTimeout(w, 30)), await f(p.date, p.positiveDiseases), await nn(D), t(6, u = kt());
            } catch (k) {
              t(5, i = "Notification failed: " + k.message);
            } finally {
              t(3, r = false), t(7, d = null);
            }
          }
        }
        const A = () => {
          t(2, s = !s), t(5, i = null), t(4, l = null);
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
          r,
          l,
          i,
          u,
          d,
          B,
          C,
          A,
          F,
          m,
          () => {
            t(2, s = false), t(4, l = null), t(5, i = null);
          },
          () => t(2, s = true),
          (D) => tt[D] ?? D,
          (D, p) => C(D, p)
        ];
      }
      class $i extends ve {
        constructor(e) {
          super(), he(this, e, Zi, Qi, pe, {});
        }
      }
      function Un(x) {
        let e;
        return {
          c() {
            e = E("div"), e.innerHTML = `<span class="material-icons svelte-f77wfc">check_circle</span>
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
      function jn(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[4]), c(e, "class", "error svelte-f77wfc");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o & 16 && G(t, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ec(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D, p = x[3] ? "Changing password\u2026" : "Change password", k, w, y, S, M, I = x[5] && Un(), L = x[4] && jn(x);
        return {
          c() {
            e = E("main"), t = E("a"), t.innerHTML = `<span class="material-icons svelte-f77wfc">arrow_back</span>
    Back`, n = g(), o = E("h1"), o.textContent = "Change password", s = g(), I && I.c(), r = g(), l = E("form"), i = E("label"), u = z(`Current password
      `), d = E("input"), f = g(), B = E("label"), C = z(`New password
      `), A = E("input"), F = g(), m = E("label"), h = z(`Confirm new password
      `), v = E("input"), b = g(), L && L.c(), _ = g(), D = E("button"), k = z(p), w = g(), y = E("p"), y.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, c(t, "href", "#/home"), c(t, "class", "back-link svelte-f77wfc"), c(o, "class", "svelte-f77wfc"), c(d, "type", "password"), d.required = true, c(d, "autocomplete", "current-password"), c(d, "class", "svelte-f77wfc"), c(i, "class", "svelte-f77wfc"), c(A, "type", "password"), A.required = true, c(A, "autocomplete", "new-password"), c(A, "minlength", "12"), c(A, "class", "svelte-f77wfc"), c(B, "class", "svelte-f77wfc"), c(v, "type", "password"), v.required = true, c(v, "autocomplete", "new-password"), c(v, "class", "svelte-f77wfc"), c(m, "class", "svelte-f77wfc"), c(D, "type", "submit"), D.disabled = x[3], c(D, "class", "svelte-f77wfc"), c(l, "class", "svelte-f77wfc"), c(y, "class", "privacy-note svelte-f77wfc"), c(e, "class", "svelte-f77wfc");
          },
          m(N, q) {
            T(N, e, q), a(e, t), a(e, n), a(e, o), a(e, s), I && I.m(e, null), a(e, r), a(e, l), a(l, i), a(i, u), a(i, d), se(d, x[0]), a(l, f), a(l, B), a(B, C), a(B, A), se(A, x[1]), a(l, F), a(l, m), a(m, h), a(m, v), se(v, x[2]), a(l, b), L && L.m(l, null), a(l, _), a(l, D), a(D, k), a(e, w), a(e, y), S || (M = [
              U(d, "input", x[7]),
              U(A, "input", x[8]),
              U(v, "input", x[9]),
              U(l, "submit", C0(x[6]))
            ], S = true);
          },
          p(N, [q]) {
            N[5] ? I || (I = Un(), I.c(), I.m(e, r)) : I && (I.d(1), I = null), q & 1 && d.value !== N[0] && se(d, N[0]), q & 2 && A.value !== N[1] && se(A, N[1]), q & 4 && v.value !== N[2] && se(v, N[2]), N[4] ? L ? L.p(N, q) : (L = jn(N), L.c(), L.m(l, _)) : L && (L.d(1), L = null), q & 8 && p !== (p = N[3] ? "Changing password\u2026" : "Change password") && G(k, p), q & 8 && (D.disabled = N[3]);
          },
          i: X,
          o: X,
          d(N) {
            N && P(e), I && I.d(), L && L.d(), S = false, re(M);
          }
        };
      }
      function tc(x, e, t) {
        let n = "", o = "", s = "", r = false, l = null, i = false;
        Ue(() => {
          We() || ue("/login");
        });
        async function u() {
          if (t(4, l = null), t(5, i = false), o !== s) {
            t(4, l = "New passwords do not match");
            return;
          }
          if (o.length < 12) {
            t(4, l = "New password must be at least 12 characters");
            return;
          }
          if (o === n) {
            t(4, l = "New password must differ from the current password");
            return;
          }
          t(3, r = true);
          try {
            const C = _t(), { challenge: A, auth_salt: F, enc_salt: m } = await wx(C), h = await f0(n, Oe(m)), v = I0();
            if (!v || h.length !== v.length || !h.every((M, I) => M === v[I])) {
              t(4, l = "Current password is incorrect");
              return;
            }
            const b = await f0(n, Oe(F)), _ = As(new TextEncoder().encode(A), b), D = P0(_), p = await f0(o, Oe(F)), k = await f0(o, Oe(m)), w = xe(Cs(p)), { blobHex: y, blobVersion: S } = Ja(k);
            await Ea(D, w, y, S), gx(k), Qa(S + 1), t(5, i = true), t(0, n = ""), t(1, o = ""), t(2, s = "");
          } catch (C) {
            t(4, l = C.message);
          } finally {
            t(3, r = false);
          }
        }
        function d() {
          n = this.value, t(0, n);
        }
        function f() {
          o = this.value, t(1, o);
        }
        function B() {
          s = this.value, t(2, s);
        }
        return [
          n,
          o,
          s,
          r,
          l,
          i,
          u,
          d,
          f,
          B
        ];
      }
      class xc extends ve {
        constructor(e) {
          super(), he(this, e, tc, ec, pe, {});
        }
      }
      function nc(x) {
        let e, t, n, o, s, r, l, i, u, d = x[2] ? "Sending\u2026" : "Send verification link", f, B, C, A, F = x[0] && Vn(x), m = x[3] && Gn(x);
        return {
          c() {
            e = E("div"), F && F.c(), t = g(), n = E("form"), o = E("label"), s = z(`New email address
          `), r = E("input"), l = g(), m && m.c(), i = g(), u = E("button"), f = z(d), c(r, "type", "email"), r.required = true, c(r, "autocomplete", "email"), c(r, "placeholder", "you@example.com"), c(r, "class", "svelte-r6hw3y"), c(o, "class", "svelte-r6hw3y"), c(u, "type", "submit"), u.disabled = B = x[2] || !x[1], c(u, "class", "svelte-r6hw3y"), c(n, "class", "svelte-r6hw3y"), c(e, "class", "card svelte-r6hw3y");
          },
          m(h, v) {
            T(h, e, v), F && F.m(e, null), a(e, t), a(e, n), a(n, o), a(o, s), a(o, r), se(r, x[1]), a(n, l), m && m.m(n, null), a(n, i), a(n, u), a(u, f), C || (A = [
              U(r, "input", x[6]),
              U(n, "submit", C0(x[5]))
            ], C = true);
          },
          p(h, v) {
            h[0] ? F ? F.p(h, v) : (F = Vn(h), F.c(), F.m(e, t)) : F && (F.d(1), F = null), v & 2 && r.value !== h[1] && se(r, h[1]), h[3] ? m ? m.p(h, v) : (m = Gn(h), m.c(), m.m(n, i)) : m && (m.d(1), m = null), v & 4 && d !== (d = h[2] ? "Sending\u2026" : "Send verification link") && G(f, d), v & 6 && B !== (B = h[2] || !h[1]) && (u.disabled = B);
          },
          d(h) {
            h && P(e), F && F.d(), m && m.d(), C = false, re(A);
          }
        };
      }
      function oc(x) {
        let e, t, n, o, s, r, l, i, u, d;
        return {
          c() {
            e = E("div"), t = E("div"), t.innerHTML = '<span class="material-icons success-icon svelte-r6hw3y">mark_email_read</span> <h2 class="svelte-r6hw3y">Check your inbox</h2>', n = g(), o = E("p"), s = z("We've sent a verification link to "), r = E("strong"), l = z(x[4]), i = z(`.
        Click the link to confirm the change. Your email won't update until you verify it.`), u = g(), d = E("a"), d.textContent = "Done", c(t, "class", "success-row svelte-r6hw3y"), c(o, "class", "hint svelte-r6hw3y"), c(d, "href", "#/settings"), c(d, "class", "btn-primary svelte-r6hw3y"), c(e, "class", "card svelte-r6hw3y");
          },
          m(f, B) {
            T(f, e, B), a(e, t), a(e, n), a(e, o), a(o, s), a(o, r), a(r, l), a(o, i), a(e, u), a(e, d);
          },
          p(f, B) {
            B & 16 && G(l, f[4]);
          },
          d(f) {
            f && P(e);
          }
        };
      }
      function Vn(x) {
        let e, t, n, o;
        return {
          c() {
            e = E("p"), t = z("Current email: "), n = E("strong"), o = z(x[0]), c(e, "class", "current-email svelte-r6hw3y");
          },
          m(s, r) {
            T(s, e, r), a(e, t), a(e, n), a(n, o);
          },
          p(s, r) {
            r & 1 && G(o, s[0]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Gn(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[3]), c(e, "class", "error svelte-r6hw3y");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o & 8 && G(t, n[3]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function sc(x) {
        let e, t, n, o, s;
        function r(u, d) {
          return u[4] ? oc : nc;
        }
        let l = r(x), i = l(x);
        return {
          c() {
            e = E("main"), t = E("a"), t.innerHTML = `<span class="material-icons svelte-r6hw3y">arrow_back</span>
    Back to settings`, n = g(), o = E("h1"), o.textContent = "Change email", s = g(), i.c(), c(t, "href", "#/settings"), c(t, "class", "back-link svelte-r6hw3y"), c(o, "class", "svelte-r6hw3y"), c(e, "class", "svelte-r6hw3y");
          },
          m(u, d) {
            T(u, e, d), a(e, t), a(e, n), a(e, o), a(e, s), i.m(e, null);
          },
          p(u, [d]) {
            l === (l = r(u)) && i ? i.p(u, d) : (i.d(1), i = l(u), i && (i.c(), i.m(e, null)));
          },
          i: X,
          o: X,
          d(u) {
            u && P(e), i.d();
          }
        };
      }
      function lc(x, e, t) {
        let n;
        je(x, Gt, (f) => t(7, n = f));
        let o = "", s = "", r = false, l = null, i = null;
        Ue(() => {
          if (!We()) {
            ue("/login");
            return;
          }
          t(0, o = n ?? "");
        });
        async function u() {
          t(3, l = null), t(2, r = true);
          try {
            await ta(s), t(4, i = s);
          } catch (f) {
            t(3, l = f.message);
          } finally {
            t(2, r = false);
          }
        }
        function d() {
          s = this.value, t(1, s);
        }
        return [
          o,
          s,
          r,
          l,
          i,
          u,
          d
        ];
      }
      class rc extends ve {
        constructor(e) {
          super(), he(this, e, lc, sc, pe, {});
        }
      }
      function ac(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B;
        return {
          c() {
            e = E("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">error_outline</span>', t = g(), n = E("h1"), n.textContent = "Verification failed", o = g(), s = E("p"), r = z(x[1]), l = g(), i = E("p"), i.textContent = "The link may have expired or already been used. You can request a new one from your account settings.", u = g(), d = E("button"), d.textContent = "Go to Login", c(e, "class", "icon-wrap error svelte-1wqqdyg"), c(n, "class", "svelte-1wqqdyg"), c(s, "class", "message error svelte-1wqqdyg"), c(i, "class", "hint svelte-1wqqdyg"), c(d, "class", "btn-primary svelte-1wqqdyg");
          },
          m(C, A) {
            T(C, e, A), T(C, t, A), T(C, n, A), T(C, o, A), T(C, s, A), a(s, r), T(C, l, A), T(C, i, A), T(C, u, A), T(C, d, A), f || (B = U(d, "click", x[4]), f = true);
          },
          p(C, A) {
            A & 2 && G(r, C[1]);
          },
          d(C) {
            C && (P(e), P(t), P(n), P(o), P(s), P(l), P(i), P(u), P(d)), f = false, B();
          }
        };
      }
      function ic(x) {
        let e, t, n, o, s, r, l, i, u;
        return {
          c() {
            e = E("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">check_circle</span>', t = g(), n = E("h1"), n.textContent = "Email verified", o = g(), s = E("p"), s.textContent = "Your email address has been verified successfully.", r = g(), l = E("button"), l.textContent = "Go to Login", c(e, "class", "icon-wrap success svelte-1wqqdyg"), c(n, "class", "svelte-1wqqdyg"), c(s, "class", "message svelte-1wqqdyg"), c(l, "class", "btn-primary svelte-1wqqdyg");
          },
          m(d, f) {
            T(d, e, f), T(d, t, f), T(d, n, f), T(d, o, f), T(d, s, f), T(d, r, f), T(d, l, f), i || (u = U(l, "click", x[3]), i = true);
          },
          p: X,
          d(d) {
            d && (P(e), P(t), P(n), P(o), P(s), P(r), P(l)), i = false, u();
          }
        };
      }
      function cc(x) {
        let e, t, n;
        return {
          c() {
            e = E("div"), e.innerHTML = '<span class="material-icons spinning svelte-1wqqdyg">sync</span>', t = g(), n = E("p"), n.textContent = "Verifying your email\u2026", c(e, "class", "icon-wrap svelte-1wqqdyg"), c(n, "class", "message svelte-1wqqdyg");
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
      function uc(x) {
        let e;
        function t(s, r) {
          return s[0] === "verifying" ? cc : s[0] === "success" ? ic : ac;
        }
        let n = t(x), o = n(x);
        return {
          c() {
            e = E("main"), o.c(), c(e, "class", "svelte-1wqqdyg");
          },
          m(s, r) {
            T(s, e, r), o.m(e, null);
          },
          p(s, [r]) {
            n === (n = t(s)) && o ? o.p(s, r) : (o.d(1), o = n(s), o && (o.c(), o.m(e, null)));
          },
          i: X,
          o: X,
          d(s) {
            s && P(e), o.d();
          }
        };
      }
      function dc(x, e, t) {
        let { params: n = {} } = e, o = "verifying", s = null;
        Ue(async () => {
          const i = n.token;
          if (!i) {
            t(1, s = "No verification token found in link."), t(0, o = "error");
            return;
          }
          try {
            await na(i), t(0, o = "success");
          } catch (u) {
            t(1, s = u.message), t(0, o = "error");
          }
        });
        const r = () => ue("/login"), l = () => ue("/login");
        return x.$$set = (i) => {
          "params" in i && t(2, n = i.params);
        }, [
          o,
          s,
          n,
          r,
          l
        ];
      }
      class Ec extends ve {
        constructor(e) {
          super(), he(this, e, dc, uc, pe, {
            params: 2
          });
        }
      }
      function Yn(x, e, t) {
        const n = x.slice();
        n[8] = e[t], n[11] = t;
        const o = n[0].length - 1 - n[11];
        return n[9] = o, n;
      }
      function fc(x) {
        let e, t = Be([
          ...x[0]
        ].reverse()), n = [];
        for (let o = 0; o < t.length; o += 1) n[o] = Jn(Yn(x, t, o));
        return {
          c() {
            e = E("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            c(e, "class", "svelte-l1q7u6");
          },
          m(o, s) {
            T(o, e, s);
            for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(e, null);
          },
          p(o, s) {
            if (s & 9) {
              t = Be([
                ...o[0]
              ].reverse());
              let r;
              for (r = 0; r < t.length; r += 1) {
                const l = Yn(o, t, r);
                n[r] ? n[r].p(l, s) : (n[r] = Jn(l), n[r].c(), n[r].m(e, null));
              }
              for (; r < n.length; r += 1) n[r].d(1);
              n.length = t.length;
            }
          },
          d(o) {
            o && P(e), Ke(n, o);
          }
        };
      }
      function Bc(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "No notifications received yet.", c(e, "class", "muted svelte-l1q7u6");
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
      function Kn(x) {
        let e;
        function t(s, r) {
          return s[8].labVerified ? Ac : Cc;
        }
        let n = t(x), o = n(x);
        return {
          c() {
            e = E("div"), o.c(), c(e, "class", "alert-message svelte-l1q7u6");
          },
          m(s, r) {
            T(s, e, r), o.m(e, null);
          },
          p(s, r) {
            n === (n = t(s)) && o ? o.p(s, r) : (o.d(1), o = n(s), o && (o.c(), o.m(e, null)));
          },
          d(s) {
            s && P(e), o.d();
          }
        };
      }
      function Cc(x) {
        let e, t = x[8].diseases.map(x[5]).join(", ") + "", n, o;
        return {
          c() {
            e = z("Someone you've interacted with reported testing positive for "), n = z(t), o = z(".");
          },
          m(s, r) {
            T(s, e, r), T(s, n, r), T(s, o, r);
          },
          p(s, r) {
            r & 1 && t !== (t = s[8].diseases.map(s[5]).join(", ") + "") && G(n, t);
          },
          d(s) {
            s && (P(e), P(n), P(o));
          }
        };
      }
      function Ac(x) {
        let e, t = x[8].diseases.map(x[4]).join(", ") + "", n, o;
        return {
          c() {
            e = z("Someone you've interacted with has tested positive for "), n = z(t), o = z(".");
          },
          m(s, r) {
            T(s, e, r), T(s, n, r), T(s, o, r);
          },
          p(s, r) {
            r & 1 && t !== (t = s[8].diseases.map(s[4]).join(", ") + "") && G(n, t);
          },
          d(s) {
            s && (P(e), P(n), P(o));
          }
        };
      }
      function Wn(x) {
        let e;
        return {
          c() {
            e = E("div"), e.textContent = "This result is self-reported.", c(e, "class", "unverified-note svelte-l1q7u6");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Qn(x) {
        let e, t, n;
        function o() {
          return x[7](x[9]);
        }
        return {
          c() {
            e = E("button"), e.textContent = "Mark viewed", c(e, "class", "btn-text svelte-l1q7u6");
          },
          m(s, r) {
            T(s, e, r), t || (n = U(e, "click", o), t = true);
          },
          p(s, r) {
            x = s;
          },
          d(s) {
            s && P(e), t = false, n();
          }
        };
      }
      function Jn(x) {
        let e, t, n, o, s = x[8].labVerified ? "warning_amber" : "info_outline", r, l, i, u, d, f, B, C, A, F = Xn(x[8].testDate) + "", m, h, v, b, _, D, p = (x[8].diseases.length > 0 ? x[8].diseases.map(x[6]).join(", ") : "the relevant STI") + "", k, w, y, S, M = x[8].diseases.length > 0 && Kn(x), I = !x[8].labVerified && Wn(), L = !x[8].viewed && Qn(x);
        return {
          c() {
            e = E("li"), t = E("div"), n = E("div"), o = E("span"), r = z(s), l = g(), i = E("div"), u = E("div"), u.textContent = "Health alert", d = g(), M && M.c(), f = g(), B = E("div"), C = z("Their sample was taken around "), A = E("strong"), m = z(F), h = z("."), v = g(), I && I.c(), b = g(), _ = E("div"), D = z("Get tested for "), k = z(p), w = z(". Ask for a full STI panel."), y = g(), L && L.c(), S = g(), c(o, "class", "material-icons alert-icon svelte-l1q7u6"), te(o, "verified", x[8].labVerified), te(o, "unverified", !x[8].labVerified), c(u, "class", "alert-title svelte-l1q7u6"), te(u, "verified", x[8].labVerified), te(u, "unverified", !x[8].labVerified), c(B, "class", "alert-dates svelte-l1q7u6"), c(_, "class", "get-tested svelte-l1q7u6"), c(n, "class", "alert-meta svelte-l1q7u6"), c(t, "class", "alert-body svelte-l1q7u6"), c(e, "class", "svelte-l1q7u6"), te(e, "unviewed", !x[8].viewed);
          },
          m(N, q) {
            T(N, e, q), a(e, t), a(t, n), a(n, o), a(o, r), a(n, l), a(n, i), a(i, u), a(i, d), M && M.m(i, null), a(i, f), a(i, B), a(B, C), a(B, A), a(A, m), a(B, h), a(i, v), I && I.m(i, null), a(i, b), a(i, _), a(_, D), a(_, k), a(_, w), a(t, y), L && L.m(t, null), a(e, S);
          },
          p(N, q) {
            q & 1 && s !== (s = N[8].labVerified ? "warning_amber" : "info_outline") && G(r, s), q & 1 && te(o, "verified", N[8].labVerified), q & 1 && te(o, "unverified", !N[8].labVerified), q & 1 && te(u, "verified", N[8].labVerified), q & 1 && te(u, "unverified", !N[8].labVerified), N[8].diseases.length > 0 ? M ? M.p(N, q) : (M = Kn(N), M.c(), M.m(i, f)) : M && (M.d(1), M = null), q & 1 && F !== (F = Xn(N[8].testDate) + "") && G(m, F), N[8].labVerified ? I && (I.d(1), I = null) : I || (I = Wn(), I.c(), I.m(i, b)), q & 1 && p !== (p = (N[8].diseases.length > 0 ? N[8].diseases.map(N[6]).join(", ") : "the relevant STI") + "") && G(k, p), N[8].viewed ? L && (L.d(1), L = null) : L ? L.p(N, q) : (L = Qn(N), L.c(), L.m(t, null)), q & 1 && te(e, "unviewed", !N[8].viewed);
          },
          d(N) {
            N && P(e), M && M.d(), I && I.d(), L && L.d();
          }
        };
      }
      function Fc(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B = x[1] ? "hourglass_empty" : "refresh", C, A, F = x[1] ? "Checking\u2026" : "Check now", m, h, v, b, _, D, p;
        e = new c0({});
        function k(S, M) {
          return S[0].length === 0 && !S[1] ? Bc : fc;
        }
        let w = k(x), y = w(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), o = E("div"), o.innerHTML = '<h1 class="svelte-l1q7u6">Alerts</h1>', s = g(), r = E("section"), l = E("div"), i = E("h2"), i.textContent = "Notification history", u = g(), d = E("button"), f = E("span"), C = z(B), A = g(), m = z(F), h = g(), y.c(), v = g(), b = E("p"), b.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, c(o, "class", "page-header svelte-l1q7u6"), c(i, "class", "svelte-l1q7u6"), c(f, "class", "material-icons svelte-l1q7u6"), c(d, "class", "btn-refresh svelte-l1q7u6"), d.disabled = x[1], c(l, "class", "card-header svelte-l1q7u6"), c(r, "class", "card svelte-l1q7u6"), c(b, "class", "privacy-note svelte-l1q7u6"), c(n, "class", "svelte-l1q7u6");
          },
          m(S, M) {
            Me(e, S, M), T(S, t, M), T(S, n, M), a(n, o), a(n, s), a(n, r), a(r, l), a(l, i), a(l, u), a(l, d), a(d, f), a(f, C), a(d, A), a(d, m), a(r, h), y.m(r, null), a(n, v), a(n, b), _ = true, D || (p = U(d, "click", x[2]), D = true);
          },
          p(S, [M]) {
            (!_ || M & 2) && B !== (B = S[1] ? "hourglass_empty" : "refresh") && G(C, B), (!_ || M & 2) && F !== (F = S[1] ? "Checking\u2026" : "Check now") && G(m, F), (!_ || M & 2) && (d.disabled = S[1]), w === (w = k(S)) && y ? y.p(S, M) : (y.d(1), y = w(S), y && (y.c(), y.m(r, null)));
          },
          i(S) {
            _ || (fe(e.$$.fragment, S), _ = true);
          },
          o(S) {
            Ae(e.$$.fragment, S), _ = false;
          },
          d(S) {
            S && (P(t), P(n)), Le(e, S), y.d(), D = false, p();
          }
        };
      }
      function Xn(x) {
        return x ? (/* @__PURE__ */ new Date(x + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function pc(x, e, t) {
        let n = [], o = false;
        Ue(() => {
          if (!We()) {
            Za("/alerts"), ue("/login");
            return;
          }
          t(0, n = xx());
        });
        async function s() {
          t(1, o = true);
          try {
            await zs();
          } catch {
          } finally {
            t(0, n = xx()), t(1, o = false);
          }
        }
        async function r(f) {
          await Ua(f), t(0, n = xx());
        }
        return [
          n,
          o,
          s,
          r,
          (f) => tt[f] ?? f,
          (f) => tt[f] ?? f,
          (f) => tt[f] ?? f,
          (f) => r(f)
        ];
      }
      class Dc extends ve {
        constructor(e) {
          super(), he(this, e, pc, Fc, pe, {});
        }
      }
      var mc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function hc(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
      }
      var L0 = {}, vc = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
      }, qs = {}, $e = {};
      let qx;
      const _c = [
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
      $e.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17;
      };
      $e.getSymbolTotalCodewords = function(e) {
        return _c[e];
      };
      $e.getBCHDigit = function(x) {
        let e = 0;
        for (; x !== 0; ) e++, x >>>= 1;
        return e;
      };
      $e.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        qx = e;
      };
      $e.isKanjiModeEnabled = function() {
        return typeof qx < "u";
      };
      $e.toSJIS = function(e) {
        return qx(e);
      };
      var Wt = {};
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
      })(Wt);
      function Rs() {
        this.buffer = [], this.length = 0;
      }
      Rs.prototype = {
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
      var kc = Rs;
      function dt(x) {
        if (!x || x < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = x, this.data = new Uint8Array(x * x), this.reservedBit = new Uint8Array(x * x);
      }
      dt.prototype.set = function(x, e, t, n) {
        const o = x * this.size + e;
        this.data[o] = t, n && (this.reservedBit[o] = true);
      };
      dt.prototype.get = function(x, e) {
        return this.data[x * this.size + e];
      };
      dt.prototype.xor = function(x, e, t) {
        this.data[x * this.size + e] ^= t;
      };
      dt.prototype.isReserved = function(x, e) {
        return this.reservedBit[x * this.size + e];
      };
      var bc = dt, Hs = {};
      (function(x) {
        const e = $e.getSymbolSize;
        x.getRowColCoords = function(n) {
          if (n === 1) return [];
          const o = Math.floor(n / 7) + 2, s = e(n), r = s === 145 ? 26 : Math.ceil((s - 13) / (2 * o - 2)) * 2, l = [
            s - 7
          ];
          for (let i = 1; i < o - 1; i++) l[i] = l[i - 1] - r;
          return l.push(6), l.reverse();
        }, x.getPositions = function(n) {
          const o = [], s = x.getRowColCoords(n), r = s.length;
          for (let l = 0; l < r; l++) for (let i = 0; i < r; i++) l === 0 && i === 0 || l === 0 && i === r - 1 || l === r - 1 && i === 0 || o.push([
            s[l],
            s[i]
          ]);
          return o;
        };
      })(Hs);
      var Os = {};
      const gc = $e.getSymbolSize, Zn = 7;
      Os.getPositions = function(e) {
        const t = gc(e);
        return [
          [
            0,
            0
          ],
          [
            t - Zn,
            0
          ],
          [
            0,
            t - Zn
          ]
        ];
      };
      var Us = {};
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
          let r = 0, l = 0, i = 0, u = null, d = null;
          for (let f = 0; f < s; f++) {
            l = i = 0, u = d = null;
            for (let B = 0; B < s; B++) {
              let C = o.get(f, B);
              C === u ? l++ : (l >= 5 && (r += e.N1 + (l - 5)), u = C, l = 1), C = o.get(B, f), C === d ? i++ : (i >= 5 && (r += e.N1 + (i - 5)), d = C, i = 1);
            }
            l >= 5 && (r += e.N1 + (l - 5)), i >= 5 && (r += e.N1 + (i - 5));
          }
          return r;
        }, x.getPenaltyN2 = function(o) {
          const s = o.size;
          let r = 0;
          for (let l = 0; l < s - 1; l++) for (let i = 0; i < s - 1; i++) {
            const u = o.get(l, i) + o.get(l, i + 1) + o.get(l + 1, i) + o.get(l + 1, i + 1);
            (u === 4 || u === 0) && r++;
          }
          return r * e.N2;
        }, x.getPenaltyN3 = function(o) {
          const s = o.size;
          let r = 0, l = 0, i = 0;
          for (let u = 0; u < s; u++) {
            l = i = 0;
            for (let d = 0; d < s; d++) l = l << 1 & 2047 | o.get(u, d), d >= 10 && (l === 1488 || l === 93) && r++, i = i << 1 & 2047 | o.get(d, u), d >= 10 && (i === 1488 || i === 93) && r++;
          }
          return r * e.N3;
        }, x.getPenaltyN4 = function(o) {
          let s = 0;
          const r = o.data.length;
          for (let i = 0; i < r; i++) s += o.data[i];
          return Math.abs(Math.ceil(s * 100 / r / 5) - 10) * e.N4;
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
          const r = s.size;
          for (let l = 0; l < r; l++) for (let i = 0; i < r; i++) s.isReserved(i, l) || s.xor(i, l, t(o, i, l));
        }, x.getBestMask = function(o, s) {
          const r = Object.keys(x.Patterns).length;
          let l = 0, i = 1 / 0;
          for (let u = 0; u < r; u++) {
            s(u), x.applyMask(u, o);
            const d = x.getPenaltyN1(o) + x.getPenaltyN2(o) + x.getPenaltyN3(o) + x.getPenaltyN4(o);
            x.applyMask(u, o), d < i && (i = d, l = u);
          }
          return l;
        };
      })(Us);
      var Qt = {};
      const m0 = Wt, pt = [
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
      ], Dt = [
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
      Qt.getBlocksCount = function(e, t) {
        switch (t) {
          case m0.L:
            return pt[(e - 1) * 4 + 0];
          case m0.M:
            return pt[(e - 1) * 4 + 1];
          case m0.Q:
            return pt[(e - 1) * 4 + 2];
          case m0.H:
            return pt[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      Qt.getTotalCodewordsCount = function(e, t) {
        switch (t) {
          case m0.L:
            return Dt[(e - 1) * 4 + 0];
          case m0.M:
            return Dt[(e - 1) * 4 + 1];
          case m0.Q:
            return Dt[(e - 1) * 4 + 2];
          case m0.H:
            return Dt[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      var js = {}, Jt = {};
      const xt = new Uint8Array(512), zt = new Uint8Array(256);
      (function() {
        let e = 1;
        for (let t = 0; t < 255; t++) xt[t] = e, zt[e] = t, e <<= 1, e & 256 && (e ^= 285);
        for (let t = 255; t < 512; t++) xt[t] = xt[t - 255];
      })();
      Jt.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return zt[e];
      };
      Jt.exp = function(e) {
        return xt[e];
      };
      Jt.mul = function(e, t) {
        return e === 0 || t === 0 ? 0 : xt[zt[e] + zt[t]];
      };
      (function(x) {
        const e = Jt;
        x.mul = function(n, o) {
          const s = new Uint8Array(n.length + o.length - 1);
          for (let r = 0; r < n.length; r++) for (let l = 0; l < o.length; l++) s[r + l] ^= e.mul(n[r], o[l]);
          return s;
        }, x.mod = function(n, o) {
          let s = new Uint8Array(n);
          for (; s.length - o.length >= 0; ) {
            const r = s[0];
            for (let i = 0; i < o.length; i++) s[i] ^= e.mul(o[i], r);
            let l = 0;
            for (; l < s.length && s[l] === 0; ) l++;
            s = s.slice(l);
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
      })(js);
      const Vs = js;
      function Rx(x) {
        this.genPoly = void 0, this.degree = x, this.degree && this.initialize(this.degree);
      }
      Rx.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = Vs.generateECPolynomial(this.degree);
      };
      Rx.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const t = new Uint8Array(e.length + this.degree);
        t.set(e);
        const n = Vs.mod(t, this.genPoly), o = this.degree - n.length;
        if (o > 0) {
          const s = new Uint8Array(this.degree);
          return s.set(n, o), s;
        }
        return n;
      };
      var wc = Rx, Gs = {}, v0 = {}, Hx = {};
      Hx.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
      var u0 = {};
      const Ys = "[0-9]+", yc = "[A-Z $%*+\\-./:]+";
      let lt = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      lt = lt.replace(/u/g, "\\u");
      const Pc = "(?:(?![A-Z0-9 $%*+\\-./:]|" + lt + `)(?:.|[\r
]))+`;
      u0.KANJI = new RegExp(lt, "g");
      u0.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      u0.BYTE = new RegExp(Pc, "g");
      u0.NUMERIC = new RegExp(Ys, "g");
      u0.ALPHANUMERIC = new RegExp(yc, "g");
      const Tc = new RegExp("^" + lt + "$"), Sc = new RegExp("^" + Ys + "$"), Ic = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      u0.testKanji = function(e) {
        return Tc.test(e);
      };
      u0.testNumeric = function(e) {
        return Sc.test(e);
      };
      u0.testAlphanumeric = function(e) {
        return Ic.test(e);
      };
      (function(x) {
        const e = Hx, t = u0;
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
        }, x.getCharCountIndicator = function(s, r) {
          if (!s.ccBits) throw new Error("Invalid mode: " + s);
          if (!e.isValid(r)) throw new Error("Invalid version: " + r);
          return r >= 1 && r < 10 ? s.ccBits[0] : r < 27 ? s.ccBits[1] : s.ccBits[2];
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
        x.from = function(s, r) {
          if (x.isValid(s)) return s;
          try {
            return n(s);
          } catch {
            return r;
          }
        };
      })(v0);
      (function(x) {
        const e = $e, t = Qt, n = Wt, o = v0, s = Hx, r = 7973, l = e.getBCHDigit(r);
        function i(B, C, A) {
          for (let F = 1; F <= 40; F++) if (C <= x.getCapacity(F, A, B)) return F;
        }
        function u(B, C) {
          return o.getCharCountIndicator(B, C) + 4;
        }
        function d(B, C) {
          let A = 0;
          return B.forEach(function(F) {
            const m = u(F.mode, C);
            A += m + F.getBitsLength();
          }), A;
        }
        function f(B, C) {
          for (let A = 1; A <= 40; A++) if (d(B, A) <= x.getCapacity(A, C, o.MIXED)) return A;
        }
        x.from = function(C, A) {
          return s.isValid(C) ? parseInt(C, 10) : A;
        }, x.getCapacity = function(C, A, F) {
          if (!s.isValid(C)) throw new Error("Invalid QR Code version");
          typeof F > "u" && (F = o.BYTE);
          const m = e.getSymbolTotalCodewords(C), h = t.getTotalCodewordsCount(C, A), v = (m - h) * 8;
          if (F === o.MIXED) return v;
          const b = v - u(F, C);
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
        }, x.getBestVersionForData = function(C, A) {
          let F;
          const m = n.from(A, n.M);
          if (Array.isArray(C)) {
            if (C.length > 1) return f(C, m);
            if (C.length === 0) return 1;
            F = C[0];
          } else F = C;
          return i(F.mode, F.getLength(), m);
        }, x.getEncodedBits = function(C) {
          if (!s.isValid(C) || C < 7) throw new Error("Invalid QR Code version");
          let A = C << 12;
          for (; e.getBCHDigit(A) - l >= 0; ) A ^= r << e.getBCHDigit(A) - l;
          return C << 12 | A;
        };
      })(Gs);
      var Ks = {};
      const px = $e, Ws = 1335, Mc = 21522, $n = px.getBCHDigit(Ws);
      Ks.getEncodedBits = function(e, t) {
        const n = e.bit << 3 | t;
        let o = n << 10;
        for (; px.getBCHDigit(o) - $n >= 0; ) o ^= Ws << px.getBCHDigit(o) - $n;
        return (n << 10 | o) ^ Mc;
      };
      var Qs = {};
      const Lc = v0;
      function V0(x) {
        this.mode = Lc.NUMERIC, this.data = x.toString();
      }
      V0.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
      };
      V0.prototype.getLength = function() {
        return this.data.length;
      };
      V0.prototype.getBitsLength = function() {
        return V0.getBitsLength(this.data.length);
      };
      V0.prototype.write = function(e) {
        let t, n, o;
        for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), o = parseInt(n, 10), e.put(o, 10);
        const s = this.data.length - t;
        s > 0 && (n = this.data.substr(t), o = parseInt(n, 10), e.put(o, s * 3 + 1));
      };
      var Nc = V0;
      const zc = v0, ox = [
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
      function G0(x) {
        this.mode = zc.ALPHANUMERIC, this.data = x;
      }
      G0.getBitsLength = function(e) {
        return 11 * Math.floor(e / 2) + 6 * (e % 2);
      };
      G0.prototype.getLength = function() {
        return this.data.length;
      };
      G0.prototype.getBitsLength = function() {
        return G0.getBitsLength(this.data.length);
      };
      G0.prototype.write = function(e) {
        let t;
        for (t = 0; t + 2 <= this.data.length; t += 2) {
          let n = ox.indexOf(this.data[t]) * 45;
          n += ox.indexOf(this.data[t + 1]), e.put(n, 11);
        }
        this.data.length % 2 && e.put(ox.indexOf(this.data[t]), 6);
      };
      var qc = G0;
      const Rc = v0;
      function Y0(x) {
        this.mode = Rc.BYTE, typeof x == "string" ? this.data = new TextEncoder().encode(x) : this.data = new Uint8Array(x);
      }
      Y0.getBitsLength = function(e) {
        return e * 8;
      };
      Y0.prototype.getLength = function() {
        return this.data.length;
      };
      Y0.prototype.getBitsLength = function() {
        return Y0.getBitsLength(this.data.length);
      };
      Y0.prototype.write = function(x) {
        for (let e = 0, t = this.data.length; e < t; e++) x.put(this.data[e], 8);
      };
      var Hc = Y0;
      const Oc = v0, Uc = $e;
      function K0(x) {
        this.mode = Oc.KANJI, this.data = x;
      }
      K0.getBitsLength = function(e) {
        return e * 13;
      };
      K0.prototype.getLength = function() {
        return this.data.length;
      };
      K0.prototype.getBitsLength = function() {
        return K0.getBitsLength(this.data.length);
      };
      K0.prototype.write = function(x) {
        let e;
        for (e = 0; e < this.data.length; e++) {
          let t = Uc.toSJIS(this.data[e]);
          if (t >= 33088 && t <= 40956) t -= 33088;
          else if (t >= 57408 && t <= 60351) t -= 49472;
          else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
          t = (t >>> 8 & 255) * 192 + (t & 255), x.put(t, 13);
        }
      };
      var jc = K0, Js = {
        exports: {}
      };
      (function(x) {
        var e = {
          single_source_shortest_paths: function(t, n, o) {
            var s = {}, r = {};
            r[n] = 0;
            var l = e.PriorityQueue.make();
            l.push(n, 0);
            for (var i, u, d, f, B, C, A, F, m; !l.empty(); ) {
              i = l.pop(), u = i.value, f = i.cost, B = t[u] || {};
              for (d in B) B.hasOwnProperty(d) && (C = B[d], A = f + C, F = r[d], m = typeof r[d] > "u", (m || F > A) && (r[d] = A, l.push(d, A), s[d] = u));
            }
            if (typeof o < "u" && typeof r[o] > "u") {
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
      })(Js);
      var Vc = Js.exports;
      (function(x) {
        const e = v0, t = Nc, n = qc, o = Hc, s = jc, r = u0, l = $e, i = Vc;
        function u(h) {
          return unescape(encodeURIComponent(h)).length;
        }
        function d(h, v, b) {
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
        function f(h) {
          const v = d(r.NUMERIC, e.NUMERIC, h), b = d(r.ALPHANUMERIC, e.ALPHANUMERIC, h);
          let _, D;
          return l.isKanjiModeEnabled() ? (_ = d(r.BYTE, e.BYTE, h), D = d(r.KANJI, e.KANJI, h)) : (_ = d(r.BYTE_KANJI, e.BYTE, h), D = []), v.concat(b, _, D).sort(function(k, w) {
            return k.index - w.index;
          }).map(function(k) {
            return {
              data: k.data,
              mode: k.mode,
              length: k.length
            };
          });
        }
        function B(h, v) {
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
        function C(h) {
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
                b[L] && b[L].node.mode === S.mode ? (_[L][M] = B(b[L].lastCount + S.length, S.mode) - B(b[L].lastCount, S.mode), b[L].lastCount += S.length) : (b[L] && (b[L].lastCount = S.length), _[L][M] = B(S.length, S.mode) + 4 + e.getCharCountIndicator(S.mode, v));
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
          switch (b === e.KANJI && !l.isKanjiModeEnabled() && (b = e.BYTE), b) {
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
          const _ = f(v, l.isKanjiModeEnabled()), D = A(_), p = F(D, b), k = i.find_path(p.map, "start", "end"), w = [];
          for (let y = 1; y < k.length - 1; y++) w.push(p.table[k[y]].node);
          return x.fromArray(C(w));
        }, x.rawSplit = function(v) {
          return x.fromArray(f(v, l.isKanjiModeEnabled()));
        };
      })(Qs);
      const Xt = $e, sx = Wt, Gc = kc, Yc = bc, Kc = Hs, Wc = Os, Dx = Us, mx = Qt, Qc = wc, qt = Gs, Jc = Ks, Xc = v0, lx = Qs;
      function Zc(x, e) {
        const t = x.size, n = Wc.getPositions(e);
        for (let o = 0; o < n.length; o++) {
          const s = n[o][0], r = n[o][1];
          for (let l = -1; l <= 7; l++) if (!(s + l <= -1 || t <= s + l)) for (let i = -1; i <= 7; i++) r + i <= -1 || t <= r + i || (l >= 0 && l <= 6 && (i === 0 || i === 6) || i >= 0 && i <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && i >= 2 && i <= 4 ? x.set(s + l, r + i, true, true) : x.set(s + l, r + i, false, true));
        }
      }
      function $c(x) {
        const e = x.size;
        for (let t = 8; t < e - 8; t++) {
          const n = t % 2 === 0;
          x.set(t, 6, n, true), x.set(6, t, n, true);
        }
      }
      function e9(x, e) {
        const t = Kc.getPositions(e);
        for (let n = 0; n < t.length; n++) {
          const o = t[n][0], s = t[n][1];
          for (let r = -2; r <= 2; r++) for (let l = -2; l <= 2; l++) r === -2 || r === 2 || l === -2 || l === 2 || r === 0 && l === 0 ? x.set(o + r, s + l, true, true) : x.set(o + r, s + l, false, true);
        }
      }
      function t9(x, e) {
        const t = x.size, n = qt.getEncodedBits(e);
        let o, s, r;
        for (let l = 0; l < 18; l++) o = Math.floor(l / 3), s = l % 3 + t - 8 - 3, r = (n >> l & 1) === 1, x.set(o, s, r, true), x.set(s, o, r, true);
      }
      function rx(x, e, t) {
        const n = x.size, o = Jc.getEncodedBits(e, t);
        let s, r;
        for (s = 0; s < 15; s++) r = (o >> s & 1) === 1, s < 6 ? x.set(s, 8, r, true) : s < 8 ? x.set(s + 1, 8, r, true) : x.set(n - 15 + s, 8, r, true), s < 8 ? x.set(8, n - s - 1, r, true) : s < 9 ? x.set(8, 15 - s - 1 + 1, r, true) : x.set(8, 15 - s - 1, r, true);
        x.set(n - 8, 8, 1, true);
      }
      function x9(x, e) {
        const t = x.size;
        let n = -1, o = t - 1, s = 7, r = 0;
        for (let l = t - 1; l > 0; l -= 2) for (l === 6 && l--; ; ) {
          for (let i = 0; i < 2; i++) if (!x.isReserved(o, l - i)) {
            let u = false;
            r < e.length && (u = (e[r] >>> s & 1) === 1), x.set(o, l - i, u), s--, s === -1 && (r++, s = 7);
          }
          if (o += n, o < 0 || t <= o) {
            o -= n, n = -n;
            break;
          }
        }
      }
      function n9(x, e, t) {
        const n = new Gc();
        t.forEach(function(i) {
          n.put(i.mode.bit, 4), n.put(i.getLength(), Xc.getCharCountIndicator(i.mode, x)), i.write(n);
        });
        const o = Xt.getSymbolTotalCodewords(x), s = mx.getTotalCodewordsCount(x, e), r = (o - s) * 8;
        for (n.getLengthInBits() + 4 <= r && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
        const l = (r - n.getLengthInBits()) / 8;
        for (let i = 0; i < l; i++) n.put(i % 2 ? 17 : 236, 8);
        return o9(n, x, e);
      }
      function o9(x, e, t) {
        const n = Xt.getSymbolTotalCodewords(e), o = mx.getTotalCodewordsCount(e, t), s = n - o, r = mx.getBlocksCount(e, t), l = n % r, i = r - l, u = Math.floor(n / r), d = Math.floor(s / r), f = d + 1, B = u - d, C = new Qc(B);
        let A = 0;
        const F = new Array(r), m = new Array(r);
        let h = 0;
        const v = new Uint8Array(x.buffer);
        for (let k = 0; k < r; k++) {
          const w = k < i ? d : f;
          F[k] = v.slice(A, A + w), m[k] = C.encode(F[k]), A += w, h = Math.max(h, w);
        }
        const b = new Uint8Array(n);
        let _ = 0, D, p;
        for (D = 0; D < h; D++) for (p = 0; p < r; p++) D < F[p].length && (b[_++] = F[p][D]);
        for (D = 0; D < B; D++) for (p = 0; p < r; p++) b[_++] = m[p][D];
        return b;
      }
      function s9(x, e, t, n) {
        let o;
        if (Array.isArray(x)) o = lx.fromArray(x);
        else if (typeof x == "string") {
          let u = e;
          if (!u) {
            const d = lx.rawSplit(x);
            u = qt.getBestVersionForData(d, t);
          }
          o = lx.fromString(x, u || 40);
        } else throw new Error("Invalid data");
        const s = qt.getBestVersionForData(o, t);
        if (!s) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = s;
        else if (e < s) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`);
        const r = n9(e, t, o), l = Xt.getSymbolSize(e), i = new Yc(l);
        return Zc(i, e), $c(i), e9(i, e), rx(i, t, 0), e >= 7 && t9(i, e), x9(i, r), isNaN(n) && (n = Dx.getBestMask(i, rx.bind(null, i, t))), Dx.applyMask(n, i), rx(i, t, n), {
          modules: i,
          version: e,
          errorCorrectionLevel: t,
          maskPattern: n,
          segments: o
        };
      }
      qs.create = function(e, t) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let n = sx.M, o, s;
        return typeof t < "u" && (n = sx.from(t.errorCorrectionLevel, sx.M), o = qt.from(t.version), s = Dx.from(t.maskPattern), t.toSJISFunc && Xt.setToSJISFunction(t.toSJISFunc)), s9(e, o, n, s);
      };
      var Xs = {}, Ox = {};
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
          const o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, s = n.width && n.width >= 21 ? n.width : void 0, r = n.scale || 4;
          return {
            width: s,
            scale: s ? 4 : r,
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
          const r = o.modules.size, l = o.modules.data, i = x.getScale(r, s), u = Math.floor((r + s.margin * 2) * i), d = s.margin * i, f = [
            s.color.light,
            s.color.dark
          ];
          for (let B = 0; B < u; B++) for (let C = 0; C < u; C++) {
            let A = (B * u + C) * 4, F = s.color.light;
            if (B >= d && C >= d && B < u - d && C < u - d) {
              const m = Math.floor((B - d) / i), h = Math.floor((C - d) / i);
              F = f[l[m * r + h] ? 1 : 0];
            }
            n[A++] = F.r, n[A++] = F.g, n[A++] = F.b, n[A] = F.a;
          }
        };
      })(Ox);
      (function(x) {
        const e = Ox;
        function t(o, s, r) {
          o.clearRect(0, 0, s.width, s.height), s.style || (s.style = {}), s.height = r, s.width = r, s.style.height = r + "px", s.style.width = r + "px";
        }
        function n() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        x.render = function(s, r, l) {
          let i = l, u = r;
          typeof i > "u" && (!r || !r.getContext) && (i = r, r = void 0), r || (u = n()), i = e.getOptions(i);
          const d = e.getImageWidth(s.modules.size, i), f = u.getContext("2d"), B = f.createImageData(d, d);
          return e.qrToImageData(B.data, s, i), t(f, u, d), f.putImageData(B, 0, 0), u;
        }, x.renderToDataURL = function(s, r, l) {
          let i = l;
          typeof i > "u" && (!r || !r.getContext) && (i = r, r = void 0), i || (i = {});
          const u = x.render(s, r, i), d = i.type || "image/png", f = i.rendererOpts || {};
          return u.toDataURL(d, f.quality);
        };
      })(Xs);
      var Zs = {};
      const l9 = Ox;
      function eo(x, e) {
        const t = x.a / 255, n = e + '="' + x.hex + '"';
        return t < 1 ? n + " " + e + '-opacity="' + t.toFixed(2).slice(1) + '"' : n;
      }
      function ax(x, e, t) {
        let n = x + e;
        return typeof t < "u" && (n += " " + t), n;
      }
      function r9(x, e, t) {
        let n = "", o = 0, s = false, r = 0;
        for (let l = 0; l < x.length; l++) {
          const i = Math.floor(l % e), u = Math.floor(l / e);
          !i && !s && (s = true), x[l] ? (r++, l > 0 && i > 0 && x[l - 1] || (n += s ? ax("M", i + t, 0.5 + u + t) : ax("m", o, 0), o = 0, s = false), i + 1 < e && x[l + 1] || (n += ax("h", r), r = 0)) : o++;
        }
        return n;
      }
      Zs.render = function(e, t, n) {
        const o = l9.getOptions(t), s = e.modules.size, r = e.modules.data, l = s + o.margin * 2, i = o.color.light.a ? "<path " + eo(o.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "", u = "<path " + eo(o.color.dark, "stroke") + ' d="' + r9(r, s, o.margin) + '"/>', d = 'viewBox="0 0 ' + l + " " + l + '"', B = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + i + u + `</svg>
`;
        return typeof n == "function" && n(null, B), B;
      };
      const a9 = vc, hx = qs, $s = Xs, i9 = Zs;
      function Ux(x, e, t, n, o) {
        const s = [].slice.call(arguments, 1), r = s.length, l = typeof s[r - 1] == "function";
        if (!l && !a9()) throw new Error("Callback required as last argument");
        if (l) {
          if (r < 2) throw new Error("Too few arguments provided");
          r === 2 ? (o = t, t = e, e = n = void 0) : r === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = t, t = e, e = void 0));
        } else {
          if (r < 1) throw new Error("Too few arguments provided");
          return r === 1 ? (t = e, e = n = void 0) : r === 2 && !e.getContext && (n = t, t = e, e = void 0), new Promise(function(i, u) {
            try {
              const d = hx.create(t, n);
              i(x(d, e, n));
            } catch (d) {
              u(d);
            }
          });
        }
        try {
          const i = hx.create(t, n);
          o(null, x(i, e, n));
        } catch (i) {
          o(i);
        }
      }
      L0.create = hx.create;
      L0.toCanvas = Ux.bind(null, $s.render);
      L0.toDataURL = Ux.bind(null, $s.renderToDataURL);
      L0.toString = Ux.bind(null, function(x, e, t) {
        return i9.render(x, t);
      });
      function c9(x) {
        let e, t, n, o, s, r, l, i = x[0].isHost ? "You started this group" : "Group encounter", u, d, f, B = lo(x[0].date) + "", C, A, F, m, h = x[0].isHost && x[13](), v, b, _, D, p, k, w, y, S, M, I = x[3] && to(x), L = x[10] && xo(x);
        function N(j, J) {
          return j[5] ? E9 : d9;
        }
        let q = N(x), R = q(x), H = h && oo(x), O = x[8] && so(x);
        function Q(j, J) {
          return j[4] ? A9 : C9;
        }
        let V = Q(x), Y = V(x);
        return {
          c() {
            I && I.c(), e = g(), L && L.c(), t = g(), n = E("section"), o = E("div"), s = E("span"), s.textContent = "groups", r = g(), l = E("span"), u = z(i), d = g(), f = E("p"), C = z(B), A = g(), F = E("section"), R.c(), m = g(), H && H.c(), v = g(), b = E("section"), _ = E("div"), _.innerHTML = '<span class="material-icons privacy-icon svelte-atconr">lock_outline</span> <p class="privacy-text svelte-atconr">Your note is stored encrypted and never shared.</p>', D = g(), p = E("textarea"), k = g(), O && O.c(), w = g(), y = E("section"), Y.c(), c(s, "class", "material-icons status-icon svelte-atconr"), c(l, "class", "status-label svelte-atconr"), c(o, "class", "status-row svelte-atconr"), c(f, "class", "date svelte-atconr"), c(n, "class", "card pad svelte-atconr"), c(F, "class", "card svelte-atconr"), c(_, "class", "privacy-row svelte-atconr"), c(p, "placeholder", "Add a private note\u2026"), c(p, "rows", "5"), c(p, "class", "svelte-atconr"), c(b, "class", "card pad svelte-atconr"), c(y, "class", "card svelte-atconr");
          },
          m(j, J) {
            I && I.m(j, J), T(j, e, J), L && L.m(j, J), T(j, t, J), T(j, n, J), a(n, o), a(o, s), a(o, r), a(o, l), a(l, u), a(n, d), a(n, f), a(f, C), T(j, A, J), T(j, F, J), R.m(F, null), T(j, m, J), H && H.m(j, J), T(j, v, J), T(j, b, J), a(b, _), a(b, D), a(b, p), se(p, x[7]), a(b, k), O && O.m(b, null), T(j, w, J), T(j, y, J), Y.m(y, null), S || (M = [
              U(p, "input", x[25]),
              U(p, "input", x[17])
            ], S = true);
          },
          p(j, J) {
            j[3] ? I ? I.p(j, J) : (I = to(j), I.c(), I.m(e.parentNode, e)) : I && (I.d(1), I = null), j[10] ? L ? L.p(j, J) : (L = xo(j), L.c(), L.m(t.parentNode, t)) : L && (L.d(1), L = null), J[0] & 1 && i !== (i = j[0].isHost ? "You started this group" : "Group encounter") && G(u, i), J[0] & 1 && B !== (B = lo(j[0].date) + "") && G(C, B), q === (q = N(j)) && R ? R.p(j, J) : (R.d(1), R = q(j), R && (R.c(), R.m(F, null))), J[0] & 1 && (h = j[0].isHost && j[13]()), h ? H ? H.p(j, J) : (H = oo(j), H.c(), H.m(v.parentNode, v)) : H && (H.d(1), H = null), J[0] & 128 && se(p, j[7]), j[8] ? O ? O.p(j, J) : (O = so(j), O.c(), O.m(b, null)) : O && (O.d(1), O = null), V === (V = Q(j)) && Y ? Y.p(j, J) : (Y.d(1), Y = V(j), Y && (Y.c(), Y.m(y, null)));
          },
          d(j) {
            j && (P(e), P(t), P(n), P(A), P(F), P(m), P(v), P(b), P(w), P(y)), I && I.d(j), L && L.d(j), R.d(), H && H.d(j), O && O.d(), Y.d(), S = false, re(M);
          }
        };
      }
      function u9(x) {
        let e;
        return {
          c() {
            e = E("section"), e.innerHTML = '<p class="muted svelte-atconr">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-atconr">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-atconr");
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
      function to(x) {
        let e, t, n, o;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "error_outline", n = g(), o = z(x[3]), c(t, "class", "material-icons svelte-atconr"), c(e, "class", "toast error-toast svelte-atconr");
          },
          m(s, r) {
            T(s, e, r), a(e, t), a(e, n), a(e, o);
          },
          p(s, r) {
            r[0] & 8 && G(o, s[3]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function xo(x) {
        let e, t, n, o, s, r, l, i, u, d = x[9] ? "Saving\u2026" : "Save note", f, B, C;
        return {
          c() {
            e = E("section"), t = E("p"), t.textContent = "You have unsaved changes to your note.", n = g(), o = E("div"), s = E("button"), s.textContent = "Keep editing", r = g(), l = E("button"), l.textContent = "Discard", i = g(), u = E("button"), f = z(d), c(t, "class", "confirm-text svelte-atconr"), c(s, "class", "btn-text svelte-atconr"), c(l, "class", "btn-text danger svelte-atconr"), c(u, "class", "btn-filled-sm svelte-atconr"), u.disabled = x[9], c(o, "class", "confirm-actions svelte-atconr"), c(e, "class", "card pad leave-confirm svelte-atconr");
          },
          m(A, F) {
            T(A, e, F), a(e, t), a(e, n), a(e, o), a(o, s), a(o, r), a(o, l), a(o, i), a(o, u), a(u, f), B || (C = [
              U(s, "click", x[23]),
              U(l, "click", x[20]),
              U(u, "click", x[19])
            ], B = true);
          },
          p(A, F) {
            F[0] & 512 && d !== (d = A[9] ? "Saving\u2026" : "Save note") && G(f, d), F[0] & 512 && (u.disabled = A[9]);
          },
          d(A) {
            A && P(e), B = false, re(C);
          }
        };
      }
      function d9(x) {
        let e, t, n, o, s = (x[0].name ? x[0].name : "Add group name") + "", r, l, i, u, d, f, B = x[0].name && no();
        return {
          c() {
            e = E("button"), t = E("span"), t.textContent = "edit", n = g(), o = E("span"), r = z(s), l = g(), B && B.c(), i = g(), u = E("span"), u.textContent = "chevron_right", c(t, "class", "material-icons action-icon svelte-atconr"), c(o, "class", "action-label svelte-atconr"), c(u, "class", "material-icons action-chevron svelte-atconr"), c(e, "class", "action-row svelte-atconr");
          },
          m(C, A) {
            T(C, e, A), a(e, t), a(e, n), a(e, o), a(o, r), a(o, l), B && B.m(o, null), a(e, i), a(e, u), d || (f = U(e, "click", x[14]), d = true);
          },
          p(C, A) {
            A[0] & 1 && s !== (s = (C[0].name ? C[0].name : "Add group name") + "") && G(r, s), C[0].name ? B || (B = no(), B.c(), B.m(o, null)) : B && (B.d(1), B = null);
          },
          d(C) {
            C && P(e), B && B.d(), d = false, f();
          }
        };
      }
      function E9(x) {
        let e, t, n, o, s, r, l, i, u, d, f = x[2] ? "Saving\u2026" : "Save", B, C, A;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "edit", n = g(), o = E("form"), s = E("input"), r = g(), l = E("div"), i = E("button"), i.textContent = "Cancel", u = g(), d = E("button"), B = z(f), c(t, "class", "material-icons action-icon svelte-atconr"), c(s, "type", "text"), c(s, "placeholder", "Optional group name"), c(s, "maxlength", "64"), s.autofocus = true, c(s, "class", "svelte-atconr"), c(i, "type", "button"), c(i, "class", "btn-text svelte-atconr"), c(d, "type", "submit"), c(d, "class", "btn-filled-sm svelte-atconr"), d.disabled = x[2], c(l, "class", "name-actions svelte-atconr"), c(o, "class", "name-form svelte-atconr"), c(e, "class", "action-row edit-row svelte-atconr");
          },
          m(F, m) {
            T(F, e, m), a(e, t), a(e, n), a(e, o), a(o, s), se(s, x[6]), a(o, r), a(o, l), a(l, i), a(l, u), a(l, d), a(d, B), s.focus(), C || (A = [
              U(s, "input", x[24]),
              U(i, "click", x[15]),
              U(o, "submit", C0(x[16]))
            ], C = true);
          },
          p(F, m) {
            m[0] & 64 && s.value !== F[6] && se(s, F[6]), m[0] & 4 && f !== (f = F[2] ? "Saving\u2026" : "Save") && G(B, f), m[0] & 4 && (d.disabled = F[2]);
          },
          d(F) {
            F && P(e), C = false, re(A);
          }
        };
      }
      function no(x) {
        let e;
        return {
          c() {
            e = E("span"), e.textContent = "Tap to change", c(e, "class", "action-sub svelte-atconr");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function oo(x) {
        let e, t, n, o, s;
        function r(u, d) {
          return u[11] ? B9 : f9;
        }
        let l = r(x), i = l(x);
        return {
          c() {
            e = E("section"), t = E("p"), t.textContent = "Show this QR for others to join", n = g(), i.c(), o = g(), s = E("p"), s.textContent = "Valid for 24 hours from when you created the group.", c(t, "class", "qr-label svelte-atconr"), c(s, "class", "qr-hint svelte-atconr"), c(e, "class", "card pad qr-card svelte-atconr");
          },
          m(u, d) {
            T(u, e, d), a(e, t), a(e, n), i.m(e, null), a(e, o), a(e, s);
          },
          p(u, d) {
            l === (l = r(u)) && i ? i.p(u, d) : (i.d(1), i = l(u), i && (i.c(), i.m(e, o)));
          },
          d(u) {
            u && P(e), i.d();
          }
        };
      }
      function f9(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "Generating QR\u2026", c(e, "class", "muted svelte-atconr");
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
      function B9(x) {
        let e;
        return {
          c() {
            e = E("div"), c(e, "class", "qr-wrap svelte-atconr");
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
      function so(x) {
        let e, t, n = x[9] ? "Saving\u2026" : "Save", o, s, r;
        return {
          c() {
            e = E("div"), t = E("button"), o = z(n), c(t, "class", "btn-filled-sm svelte-atconr"), t.disabled = x[9], c(e, "class", "note-actions svelte-atconr");
          },
          m(l, i) {
            T(l, e, i), a(e, t), a(t, o), s || (r = U(t, "click", x[18]), s = true);
          },
          p(l, i) {
            i[0] & 512 && n !== (n = l[9] ? "Saving\u2026" : "Save") && G(o, n), i[0] & 512 && (t.disabled = l[9]);
          },
          d(l) {
            l && P(e), s = false, r();
          }
        };
      }
      function C9(x) {
        let e, t, n;
        return {
          c() {
            e = E("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-atconr">delete_outline</span> <span class="action-label danger svelte-atconr">Delete group encounter</span>', c(e, "class", "action-row svelte-atconr");
          },
          m(o, s) {
            T(o, e, s), t || (n = U(e, "click", x[27]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function A9(x) {
        let e, t, n, o, s, r, l, i = x[2] ? "Deleting\u2026" : "Delete", u, d, f;
        return {
          c() {
            e = E("div"), t = E("p"), t.textContent = "Delete this group encounter? This cannot be undone.", n = g(), o = E("div"), s = E("button"), s.textContent = "Cancel", r = g(), l = E("button"), u = z(i), c(t, "class", "confirm-text svelte-atconr"), c(s, "class", "btn-text svelte-atconr"), c(l, "class", "btn-danger-sm svelte-atconr"), l.disabled = x[2], c(o, "class", "confirm-actions svelte-atconr"), c(e, "class", "confirm-row svelte-atconr");
          },
          m(B, C) {
            T(B, e, C), a(e, t), a(e, n), a(e, o), a(o, s), a(o, r), a(o, l), a(l, u), d || (f = [
              U(s, "click", x[26]),
              U(l, "click", x[21])
            ], d = true);
          },
          p(B, C) {
            C[0] & 4 && i !== (i = B[2] ? "Deleting\u2026" : "Delete") && G(u, i), C[0] & 4 && (l.disabled = B[2]);
          },
          d(B) {
            B && P(e), d = false, re(f);
          }
        };
      }
      function F9(x) {
        let e, t, n, o, s, r, l, i = (x[1] ? "Group not found" : x[12]) + "", u, d, f;
        e = new c0({});
        function B(F, m) {
          if (F[1]) return u9;
          if (F[0]) return c9;
        }
        let C = B(x), A = C && C(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), o = E("div"), s = E("a"), s.innerHTML = '<span class="material-icons svelte-atconr">arrow_back</span>', r = g(), l = E("h1"), u = z(i), d = g(), A && A.c(), c(s, "class", "back-btn svelte-atconr"), c(s, "href", "#/encounters"), c(l, "class", "svelte-atconr"), c(o, "class", "page-header svelte-atconr"), c(n, "class", "svelte-atconr");
          },
          m(F, m) {
            Me(e, F, m), T(F, t, m), T(F, n, m), a(n, o), a(o, s), a(o, r), a(o, l), a(l, u), a(n, d), A && A.m(n, null), f = true;
          },
          p(F, m) {
            (!f || m[0] & 4098) && i !== (i = (F[1] ? "Group not found" : F[12]) + "") && G(u, i), C === (C = B(F)) && A ? A.p(F, m) : (A && A.d(1), A = C && C(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            f || (fe(e.$$.fragment, F), f = true);
          },
          o(F) {
            Ae(e.$$.fragment, F), f = false;
          },
          d(F) {
            F && (P(t), P(n)), Le(e, F), A && A.d();
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
      function p9(x, e, t) {
        let n, { params: o = {
          tokenHex: ""
        } } = e, s = null, r = false, l = false, i = null, u = false, d = false, f = "", B = "", C = false, A = false, F = false, m = null, h = null;
        Ue(() => {
          if (!We()) {
            ue("/login");
            return;
          }
          _(), document.addEventListener("click", b, {
            capture: true
          }), window.addEventListener("beforeunload", v);
        }), Ot(() => {
          document.removeEventListener("click", b, {
            capture: true
          }), window.removeEventListener("beforeunload", v);
        });
        function v(j) {
          C && (j.preventDefault(), j.returnValue = "");
        }
        function b(j) {
          if (!C) return;
          const J = j.target.closest('a[href^="#/"]');
          J && (j.preventDefault(), j.stopImmediatePropagation(), m = J.getAttribute("href").slice(1), t(10, F = true));
        }
        function _() {
          const j = o.tokenHex;
          if (t(0, s = Ms().find((J) => xe(J.token) === j) ?? null), !s) {
            t(1, r = true);
            return;
          }
          t(7, B = s.note ?? ""), s.isHost && p() && k();
        }
        function D() {
          return xe(s.token);
        }
        function p() {
          return s ? Math.floor(Date.now() / 1e3) - s.createdAt < 86400 : false;
        }
        async function k() {
          const j = Math.floor(Date.now() / 1e3), J = Or(D(), j, xe(s.hostContactId), s.name);
          try {
            t(11, h = await L0.toString(J, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#1a1a1a",
                light: "#ffffff"
              }
            }));
          } catch (K) {
            t(3, i = "Could not render QR code: " + K.message);
          }
        }
        function w() {
          t(6, f = s.name ?? ""), t(5, d = true), t(3, i = null);
        }
        function y() {
          t(5, d = false), t(3, i = null);
        }
        async function S() {
          if (!l) {
            t(2, l = true), t(3, i = null);
            try {
              const j = f.trim() || null;
              await xn(D(), {
                name: j
              }), _(), t(5, d = false);
            } catch (j) {
              t(3, i = j.message);
            } finally {
              t(2, l = false);
            }
          }
        }
        function M() {
          t(8, C = B !== (s.note ?? ""));
        }
        async function I() {
          if (!(!C || A)) {
            t(9, A = true), t(3, i = null);
            try {
              const j = B.trim() || null;
              await xn(D(), {
                note: j
              }), _(), t(8, C = false);
            } catch (j) {
              t(3, i = j.message);
            } finally {
              t(9, A = false);
            }
          }
        }
        async function L() {
          await I(), i || q();
        }
        function N() {
          t(7, B = s.note ?? ""), t(8, C = false), q();
        }
        function q() {
          t(10, F = false), ue(m);
        }
        async function R() {
          if (!l) {
            t(2, l = true), t(3, i = null);
            try {
              await Ra(D()), ue("/encounters");
            } catch (j) {
              t(3, i = j.message), t(2, l = false);
            }
          }
        }
        const H = () => t(10, F = false);
        function O() {
          f = this.value, t(6, f);
        }
        function Q() {
          B = this.value, t(7, B);
        }
        const V = () => t(4, u = false), Y = () => t(4, u = true);
        return x.$$set = (j) => {
          "params" in j && t(22, o = j.params);
        }, x.$$.update = () => {
          x.$$.dirty[0] & 1 && t(12, n = s?.name || "Group encounter");
        }, [
          s,
          r,
          l,
          i,
          u,
          d,
          f,
          B,
          C,
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
          H,
          O,
          Q,
          V,
          Y
        ];
      }
      class D9 extends ve {
        constructor(e) {
          super(), he(this, e, p9, F9, pe, {
            params: 22
          }, null, [
            -1,
            -1
          ]);
        }
      }
      async function m9(x) {
        const e = B0();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const t = e.encounters.map((d) => ({
          raw_token: xe(d.rawToken),
          date: d.date,
          their_contact_id: xe(d.theirContactId)
        })), n = (e.relationships || []).map((d) => ({
          raw_token: xe(d.rawToken),
          date: d.createdAt,
          their_contact_id: xe(d.theirContactId)
        })), o = (e.results || []).map((d) => {
          const f = {};
          for (const B of i0) f[B] = d.positiveDiseases.includes(B) ? "positive" : "negative";
          return {
            test_date: d.date,
            result_json: JSON.stringify({
              panel: f,
              test_date: d.date,
              submission_type: "self_reported"
            }),
            lab_signature: "",
            user_pubkey: "",
            user_signature: "",
            is_positive: d.positiveDiseases.length > 0 ? 1 : 0,
            submission_type: "self_reported",
            has_notified: d.hasNotified ? 1 : 0,
            note: null
          };
        }), s = new TextEncoder().encode(JSON.stringify({
          version: 1,
          contact_id: xe(e.myContactId),
          encounters: [
            ...t,
            ...n
          ],
          test_results: o
        })), r = it(16), l = await f0(x, r), i = ct(l, s);
        l.fill(0);
        const u = new Uint8Array(16 + i.length);
        return u.set(r, 0), u.set(i, 16), u;
      }
      const h9 = "peachsafe-backup";
      function ro(x, e, t) {
        const n = x.slice();
        return n[14] = e[t], n;
      }
      function ao(x, e, t) {
        const n = x.slice();
        return n[17] = e[t], n;
      }
      function v9(x) {
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
      function _9(x) {
        let e;
        return {
          c() {
            e = z(x[0]);
          },
          m(t, n) {
            T(t, e, n);
          },
          p(t, n) {
            n & 1 && G(e, t[0]);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function k9(x) {
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
      function io(x) {
        let e;
        return {
          c() {
            e = E("div"), c(e, "class", "dot svelte-h9ojs4"), te(e, "filled", x[17] < x[2].length);
          },
          m(t, n) {
            T(t, e, n);
          },
          p(t, n) {
            n & 4 && te(e, "filled", t[17] < t[2].length);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function co(x) {
        let e, t, n, o;
        function s() {
          return x[9](x[14]);
        }
        return {
          c() {
            e = E("button"), t = z(x[14]), c(e, "class", "key svelte-h9ojs4"), e.disabled = x[5];
          },
          m(r, l) {
            T(r, e, l), a(e, t), n || (o = U(e, "click", s), n = true);
          },
          p(r, l) {
            x = r, l & 32 && (e.disabled = x[5]);
          },
          d(r) {
            r && P(e), n = false, o();
          }
        };
      }
      function b9(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D, p, k, w;
        function y(R, H) {
          return R[5] ? k9 : R[1] === "enter" ? _9 : v9;
        }
        let S = y(x), M = S(x), I = Be([
          0,
          1,
          2,
          3
        ]), L = [];
        for (let R = 0; R < 4; R += 1) L[R] = io(ao(x, I, R));
        let N = Be([
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
        for (let R = 0; R < 9; R += 1) q[R] = co(ro(x, N, R));
        return {
          c() {
            e = E("div"), t = E("div"), n = E("button"), n.innerHTML = '<span class="material-icons svelte-h9ojs4">arrow_back</span>', o = g(), s = E("div"), s.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-h9ojs4"/> <span class="brand-label"><span class="brand-peach svelte-h9ojs4">Peach</span><span class="brand-safe svelte-h9ojs4">Safe</span></span>', r = g(), l = E("p"), M.c(), i = g(), u = E("div");
            for (let R = 0; R < 4; R += 1) L[R].c();
            d = g(), f = E("p"), B = z(x[3]), C = g(), A = E("div");
            for (let R = 0; R < 9; R += 1) q[R].c();
            F = g(), m = E("button"), h = E("span"), h.textContent = "backspace", v = g(), b = E("button"), _ = z("0"), D = g(), p = E("div"), c(n, "class", "back-btn svelte-h9ojs4"), c(n, "aria-label", "Cancel"), c(s, "class", "brand svelte-h9ojs4"), c(l, "class", "prompt svelte-h9ojs4"), c(u, "class", "dots svelte-h9ojs4"), te(u, "shake", x[4]), c(f, "class", "error-msg svelte-h9ojs4"), c(h, "class", "material-icons svelte-h9ojs4"), c(m, "class", "key key-del svelte-h9ojs4"), c(m, "aria-label", "Delete"), m.disabled = x[5], c(b, "class", "key svelte-h9ojs4"), b.disabled = x[5], c(A, "class", "numpad svelte-h9ojs4"), te(A, "disabled", x[5]), c(t, "class", "setup-card svelte-h9ojs4"), c(e, "class", "overlay svelte-h9ojs4"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-label", x[0]);
          },
          m(R, H) {
            T(R, e, H), a(e, t), a(t, n), a(t, o), a(t, s), a(t, r), a(t, l), M.m(l, null), a(t, i), a(t, u);
            for (let O = 0; O < 4; O += 1) L[O] && L[O].m(u, null);
            a(t, d), a(t, f), a(f, B), a(t, C), a(t, A);
            for (let O = 0; O < 9; O += 1) q[O] && q[O].m(A, null);
            a(A, F), a(A, m), a(m, h), a(A, v), a(A, b), a(b, _), a(A, D), a(A, p), k || (w = [
              U(n, "click", x[8]),
              U(m, "click", x[7]),
              U(b, "click", x[10])
            ], k = true);
          },
          p(R, [H]) {
            if (S === (S = y(R)) && M ? M.p(R, H) : (M.d(1), M = S(R), M && (M.c(), M.m(l, null))), H & 4) {
              I = Be([
                0,
                1,
                2,
                3
              ]);
              let O;
              for (O = 0; O < 4; O += 1) {
                const Q = ao(R, I, O);
                L[O] ? L[O].p(Q, H) : (L[O] = io(Q), L[O].c(), L[O].m(u, null));
              }
              for (; O < 4; O += 1) L[O].d(1);
            }
            if (H & 16 && te(u, "shake", R[4]), H & 8 && G(B, R[3]), H & 96) {
              N = Be([
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
              let O;
              for (O = 0; O < 9; O += 1) {
                const Q = ro(R, N, O);
                q[O] ? q[O].p(Q, H) : (q[O] = co(Q), q[O].c(), q[O].m(A, F));
              }
              for (; O < 9; O += 1) q[O].d(1);
            }
            H & 32 && (m.disabled = R[5]), H & 32 && (b.disabled = R[5]), H & 32 && te(A, "disabled", R[5]), H & 1 && c(e, "aria-label", R[0]);
          },
          i: X,
          o: X,
          d(R) {
            R && P(e), M.d(), Ke(L, R), Ke(q, R), k = false, re(w);
          }
        };
      }
      function g9(x, e, t) {
        let { title: n = "Set PIN" } = e;
        const o = os();
        let s = "enter", r = "", l = "", i = "", u = false, d = false;
        function f(h) {
          l.length >= 4 || u || d || (t(3, i = ""), t(2, l += h), l.length === 4 && C());
        }
        function B() {
          u || d || (t(2, l = l.slice(0, -1)), t(3, i = ""));
        }
        async function C() {
          if (s === "enter") r = l, t(2, l = ""), t(1, s = "confirm");
          else if (l === r) {
            t(5, d = true);
            try {
              await ja(l), Vt.set(true), o("done");
            } catch (h) {
              t(3, i = h.message), t(5, d = false), t(2, l = "");
            }
          } else t(4, u = true), t(3, i = "PINs don't match \u2014 try again"), await new Promise((h) => setTimeout(h, 600)), t(2, l = ""), r = "", t(1, s = "enter"), t(3, i = ""), t(4, u = false);
        }
        function A() {
          o("cancel");
        }
        const F = (h) => f(String(h)), m = () => f("0");
        return x.$$set = (h) => {
          "title" in h && t(0, n = h.title);
        }, [
          n,
          s,
          l,
          i,
          u,
          d,
          f,
          B,
          A,
          F,
          m
        ];
      }
      class w9 extends ve {
        constructor(e) {
          super(), he(this, e, g9, b9, pe, {
            title: 0
          });
        }
      }
      function uo(x, e, t) {
        const n = x.slice();
        return n[70] = e[t], n;
      }
      function Eo(x, e, t) {
        const n = x.slice();
        return n[73] = e[t], n;
      }
      function y9(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D, p = x[4] ? "verified_user" : "shield", k, w, y = x[4] ? "Enabled" : "Disabled", S, M, I, L, N, q, R, H, O, Q, V, Y, j, J, K, le, ce, ae, oe, Ee, Ge, Z, ee, ie, Ce, Fe, ye, Re, Pe, be, ke, Ie, d0, A0, e0, F0, E0;
        function _0($, de) {
          return $[31] ? I9 : S9;
        }
        let x0 = _0(x), Qe = x0(x);
        function n0($, de) {
          if ($[26] === "idle") return q9;
          if ($[26] === "entering_pin") return z9;
          if ($[26] === "exporting") return N9;
          if ($[26] === "done") return L9;
          if ($[26] === "error") return M9;
        }
        let o0 = n0(x), De = o0 && o0(x);
        function k0($, de) {
          return $[4] ? H9 : R9;
        }
        let Je = k0(x), Xe = Je(x);
        function l0($, de) {
          return $[4] ? O9 : U9;
        }
        let ne = l0(x), Te = ne(x), ge = x[25] && Do();
        function p0($, de) {
          return $[32] !== null ? W9 : K9;
        }
        let r0 = p0(x), He = r0(x);
        function Et($, de) {
          return $[32] !== null ? J9 : Q9;
        }
        let ft = Et(x), a0 = ft(x);
        function jx($, de) {
          return $[3] ? Z9 : X9;
        }
        let Bt = jx(x), D0 = Bt(x), Ye = x[18] && mo(x);
        return {
          c() {
            e = E("section"), t = E("div"), n = E("div"), n.innerHTML = '<h2 class="svelte-3s0d7a">Appearance</h2> <p class="hint svelte-3s0d7a">Choose your preferred color scheme.</p>', o = g(), s = E("div"), r = E("button"), r.textContent = "Light", l = g(), i = E("button"), i.textContent = "Dark", u = g(), d = E("section"), f = E("h2"), f.textContent = "Export to mobile", B = g(), Qe.c(), C = g(), De && De.c(), A = g(), F = E("section"), m = E("div"), h = E("div"), v = E("h2"), v.textContent = "Two-factor authentication", b = g(), _ = E("span"), D = E("span"), k = z(p), w = g(), S = z(y), M = g(), I = E("p"), Xe.c(), L = g(), Te.c(), N = g(), q = E("section"), R = E("div"), H = E("div"), O = E("h2"), O.textContent = "Screen lock", Q = g(), V = E("button"), V.innerHTML = '<span class="material-icons svelte-3s0d7a">info_outline</span>', Y = g(), ge && ge.c(), j = g(), J = E("p"), He.c(), K = g(), a0.c(), le = g(), ce = E("section"), ae = E("div"), oe = E("div"), Ee = E("h2"), Ee.textContent = "Email", Ge = g(), Z = E("div"), ee = E("span"), ie = z(x[2]), Ce = g(), D0.c(), Fe = g(), ye = E("a"), ye.textContent = "Change email", Re = g(), Pe = E("section"), Pe.innerHTML = '<div class="row svelte-3s0d7a"><div class="svelte-3s0d7a"><h2 class="svelte-3s0d7a">Password</h2> <p class="hint svelte-3s0d7a">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-3s0d7a">Change password</a></div>', be = g(), ke = E("section"), Ie = E("div"), Ie.innerHTML = '<h2 class="svelte-3s0d7a">Delete account</h2> <p class="hint svelte-3s0d7a">Permanently delete your account and all data stored on the server. This cannot be undone.</p>', d0 = g(), Ye && Ye.c(), A0 = g(), e0 = E("button"), e0.textContent = "Delete account", c(n, "class", "svelte-3s0d7a"), c(r, "class", "theme-btn svelte-3s0d7a"), te(r, "active", x[30] === "light"), c(i, "class", "theme-btn svelte-3s0d7a"), te(i, "active", x[30] === "dark"), c(s, "class", "theme-toggle svelte-3s0d7a"), c(t, "class", "row svelte-3s0d7a"), c(e, "class", "card svelte-3s0d7a"), c(f, "class", "svelte-3s0d7a"), c(d, "class", "card svelte-3s0d7a"), c(v, "class", "svelte-3s0d7a"), c(D, "class", "material-icons svelte-3s0d7a"), c(_, "class", "status-badge svelte-3s0d7a"), te(_, "enabled", x[4]), te(_, "disabled", !x[4]), c(h, "class", "totp-heading svelte-3s0d7a"), c(I, "class", "hint svelte-3s0d7a"), c(F, "class", "card svelte-3s0d7a"), c(O, "class", "svelte-3s0d7a"), c(V, "class", "info-btn svelte-3s0d7a"), c(V, "aria-label", "About screen lock"), te(V, "active", x[25]), c(H, "class", "section-heading svelte-3s0d7a"), c(J, "class", "hint svelte-3s0d7a"), c(q, "class", "card svelte-3s0d7a"), c(Ee, "class", "svelte-3s0d7a"), c(ee, "class", "hint email-value svelte-3s0d7a"), c(Z, "class", "email-meta svelte-3s0d7a"), c(oe, "class", "svelte-3s0d7a"), c(ye, "href", "#/change-email"), c(ye, "class", "btn-outline-sm svelte-3s0d7a"), c(ae, "class", "row svelte-3s0d7a"), c(ce, "class", "card svelte-3s0d7a"), c(Pe, "class", "card svelte-3s0d7a"), c(e0, "class", "btn-danger svelte-3s0d7a"), c(ke, "class", "card danger-card svelte-3s0d7a");
          },
          m($, de) {
            T($, e, de), a(e, t), a(t, n), a(t, o), a(t, s), a(s, r), a(s, l), a(s, i), T($, u, de), T($, d, de), a(d, f), a(d, B), Qe.m(d, null), a(d, C), De && De.m(d, null), T($, A, de), T($, F, de), a(F, m), a(m, h), a(h, v), a(h, b), a(h, _), a(_, D), a(D, k), a(_, w), a(_, S), a(m, M), a(m, I), Xe.m(I, null), a(F, L), Te.m(F, null), T($, N, de), T($, q, de), a(q, R), a(R, H), a(H, O), a(H, Q), a(H, V), a(R, Y), ge && ge.m(R, null), a(R, j), a(R, J), He.m(J, null), a(q, K), a0.m(q, null), T($, le, de), T($, ce, de), a(ce, ae), a(ae, oe), a(oe, Ee), a(oe, Ge), a(oe, Z), a(Z, ee), a(ee, ie), a(Z, Ce), D0.m(Z, null), a(ae, Fe), a(ae, ye), T($, Re, de), T($, Pe, de), T($, be, de), T($, ke, de), a(ke, Ie), a(ke, d0), Ye && Ye.m(ke, null), a(ke, A0), a(ke, e0), F0 || (E0 = [
              U(r, "click", x[42]),
              U(i, "click", x[43]),
              U(V, "click", x[52]),
              U(e0, "click", x[56])
            ], F0 = true);
          },
          p($, de) {
            de[0] & 1073741824 && te(r, "active", $[30] === "light"), de[0] & 1073741824 && te(i, "active", $[30] === "dark"), x0 !== (x0 = _0($)) && (Qe.d(1), Qe = x0($), Qe && (Qe.c(), Qe.m(d, C))), o0 === (o0 = n0($)) && De ? De.p($, de) : (De && De.d(1), De = o0 && o0($), De && (De.c(), De.m(d, null))), de[0] & 16 && p !== (p = $[4] ? "verified_user" : "shield") && G(k, p), de[0] & 16 && y !== (y = $[4] ? "Enabled" : "Disabled") && G(S, y), de[0] & 16 && te(_, "enabled", $[4]), de[0] & 16 && te(_, "disabled", !$[4]), Je !== (Je = k0($)) && (Xe.d(1), Xe = Je($), Xe && (Xe.c(), Xe.m(I, null))), ne === (ne = l0($)) && Te ? Te.p($, de) : (Te.d(1), Te = ne($), Te && (Te.c(), Te.m(F, null))), de[0] & 33554432 && te(V, "active", $[25]), $[25] ? ge || (ge = Do(), ge.c(), ge.m(R, j)) : ge && (ge.d(1), ge = null), r0 !== (r0 = p0($)) && (He.d(1), He = r0($), He && (He.c(), He.m(J, null))), ft === (ft = Et($)) && a0 ? a0.p($, de) : (a0.d(1), a0 = ft($), a0 && (a0.c(), a0.m(q, null))), de[0] & 4 && G(ie, $[2]), Bt !== (Bt = jx($)) && (D0.d(1), D0 = Bt($), D0 && (D0.c(), D0.m(Z, null))), $[18] ? Ye ? Ye.p($, de) : (Ye = mo($), Ye.c(), Ye.m(ke, A0)) : Ye && (Ye.d(1), Ye = null);
          },
          d($) {
            $ && (P(e), P(u), P(d), P(A), P(F), P(N), P(q), P(le), P(ce), P(Re), P(Pe), P(be), P(ke)), Qe.d(), De && De.d(), Xe.d(), Te.d(), ge && ge.d(), He.d(), a0.d(), D0.d(), Ye && Ye.d(), F0 = false, re(E0);
          }
        };
      }
      function P9(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[1]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 2 && G(t, n[1]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function T9(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "Loading\u2026", c(e, "class", "muted svelte-3s0d7a");
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
      function S9(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", c(e, "class", "hint svelte-3s0d7a");
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
            e = E("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", c(e, "class", "hint warning svelte-3s0d7a");
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
        let e, t, n, o, s, r;
        return {
          c() {
            e = E("p"), t = z(x[29]), n = g(), o = E("button"), o.textContent = "Try again", c(e, "class", "error svelte-3s0d7a"), c(o, "class", "btn-ghost svelte-3s0d7a");
          },
          m(l, i) {
            T(l, e, i), a(e, t), T(l, n, i), T(l, o, i), s || (r = U(o, "click", x[38]), s = true);
          },
          p(l, i) {
            i[0] & 536870912 && G(t, l[29]);
          },
          d(l) {
            l && (P(e), P(n), P(o)), s = false, r();
          }
        };
      }
      function L9(x) {
        let e, t, n, o, s;
        return {
          c() {
            e = E("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, t = g(), n = E("button"), n.textContent = "Done", c(e, "class", "hint svelte-3s0d7a"), c(n, "class", "btn-ghost svelte-3s0d7a");
          },
          m(r, l) {
            T(r, e, l), T(r, t, l), T(r, n, l), o || (s = U(n, "click", x[38]), o = true);
          },
          p: X,
          d(r) {
            r && (P(e), P(t), P(n)), o = false, s();
          }
        };
      }
      function N9(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "Encrypting\u2026", c(e, "class", "hint svelte-3s0d7a");
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
      function z9(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b = x[29] && fo(x);
        return {
          c() {
            e = E("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", t = g(), n = E("div"), o = E("label"), s = z(`PIN
            `), r = E("input"), l = g(), i = E("label"), u = z(`Confirm PIN
            `), d = E("input"), f = g(), b && b.c(), B = g(), C = E("div"), A = E("button"), A.textContent = "Download backup", F = g(), m = E("button"), m.textContent = "Cancel", c(e, "class", "hint svelte-3s0d7a"), c(r, "type", "password"), c(r, "inputmode", "numeric"), c(r, "maxlength", "6"), c(r, "placeholder", "6 digits"), c(r, "autocomplete", "new-password"), c(d, "type", "password"), c(d, "inputmode", "numeric"), c(d, "maxlength", "6"), c(d, "placeholder", "6 digits"), c(d, "autocomplete", "new-password"), c(A, "class", "btn-primary svelte-3s0d7a"), c(m, "class", "btn-ghost svelte-3s0d7a"), c(C, "class", "export-actions svelte-3s0d7a"), c(n, "class", "export-form svelte-3s0d7a");
          },
          m(_, D) {
            T(_, e, D), T(_, t, D), T(_, n, D), a(n, o), a(o, s), a(o, r), se(r, x[27]), a(n, l), a(n, i), a(i, u), a(i, d), se(d, x[28]), a(n, f), b && b.m(n, null), a(n, B), a(n, C), a(C, A), a(C, F), a(C, m), h || (v = [
              U(r, "input", x[45]),
              U(d, "input", x[46]),
              U(A, "click", x[37]),
              U(m, "click", x[38])
            ], h = true);
          },
          p(_, D) {
            D[0] & 134217728 && r.value !== _[27] && se(r, _[27]), D[0] & 268435456 && d.value !== _[28] && se(d, _[28]), _[29] ? b ? b.p(_, D) : (b = fo(_), b.c(), b.m(n, B)) : b && (b.d(1), b = null);
          },
          d(_) {
            _ && (P(e), P(t), P(n)), b && b.d(), h = false, re(v);
          }
        };
      }
      function q9(x) {
        let e, t, n;
        return {
          c() {
            e = E("button"), e.textContent = "Export data for mobile app", c(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(o, s) {
            T(o, e, s), t || (n = U(e, "click", x[44]), t = true);
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
            e = E("p"), t = z(x[29]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 536870912 && G(t, n[29]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function R9(x) {
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
      function H9(x) {
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
      function O9(x) {
        let e, t, n, o, s, r, l, i = x[5] !== 1 ? "s" : "", u, d, f, B, C, A, F, m, h, v, b, _, D, p;
        function k(q, R) {
          return q[15].length > 0 ? V9 : j9;
        }
        let w = k(x), y = w(x), S = x[7] && Ao(x);
        function M(q, R) {
          return q[6].length === 0 ? Y9 : G9;
        }
        let I = M(x), L = I(x), N = x[11] && po(x);
        return {
          c() {
            e = E("div"), t = E("div"), n = E("span"), n.textContent = "key", o = g(), s = E("span"), r = z(x[5]), l = z(" backup code"), u = z(i), d = z(" remaining"), f = g(), y.c(), B = g(), C = E("div"), A = E("div"), A.innerHTML = '<span class="material-icons svelte-3s0d7a">devices</span> <span>Trusted devices</span>', F = g(), S && S.c(), m = g(), L.c(), h = g(), v = E("div"), N && N.c(), b = g(), _ = E("button"), _.textContent = "Disable 2FA", c(n, "class", "material-icons svelte-3s0d7a"), c(t, "class", "backup-count svelte-3s0d7a"), c(e, "class", "backup-section svelte-3s0d7a"), c(A, "class", "backup-count svelte-3s0d7a"), c(C, "class", "backup-section svelte-3s0d7a"), c(_, "class", "btn-danger svelte-3s0d7a"), c(v, "class", "danger-zone svelte-3s0d7a");
          },
          m(q, R) {
            T(q, e, R), a(e, t), a(t, n), a(t, o), a(t, s), a(s, r), a(s, l), a(s, u), a(s, d), a(e, f), y.m(e, null), T(q, B, R), T(q, C, R), a(C, A), a(C, F), S && S.m(C, null), a(C, m), L.m(C, null), T(q, h, R), T(q, v, R), N && N.m(v, null), a(v, b), a(v, _), D || (p = U(_, "click", x[51]), D = true);
          },
          p(q, R) {
            R[0] & 32 && G(r, q[5]), R[0] & 32 && i !== (i = q[5] !== 1 ? "s" : "") && G(u, i), w === (w = k(q)) && y ? y.p(q, R) : (y.d(1), y = w(q), y && (y.c(), y.m(e, null))), q[7] ? S ? S.p(q, R) : (S = Ao(q), S.c(), S.m(C, m)) : S && (S.d(1), S = null), I === (I = M(q)) && L ? L.p(q, R) : (L.d(1), L = I(q), L && (L.c(), L.m(C, null))), q[11] ? N ? N.p(q, R) : (N = po(q), N.c(), N.m(v, b)) : N && (N.d(1), N = null);
          },
          d(q) {
            q && (P(e), P(B), P(C), P(h), P(v)), y.d(), S && S.d(), L.d(), N && N.d(), D = false, p();
          }
        };
      }
      function U9(x) {
        let e, t, n;
        return {
          c() {
            e = E("button"), e.textContent = "Enable 2FA", c(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(o, s) {
            T(o, e, s), t || (n = U(e, "click", x[47]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function j9(x) {
        let e, t, n, o, s, r = x[14] && Bo(x);
        return {
          c() {
            r && r.c(), e = g(), t = E("button"), n = z("Regenerate backup codes"), c(t, "class", "btn-outline-sm svelte-3s0d7a"), t.disabled = x[13];
          },
          m(l, i) {
            r && r.m(l, i), T(l, e, i), T(l, t, i), a(t, n), o || (s = U(t, "click", x[49]), o = true);
          },
          p(l, i) {
            l[14] ? r ? r.p(l, i) : (r = Bo(l), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), i[0] & 8192 && (t.disabled = l[13]);
          },
          d(l) {
            l && (P(e), P(t)), r && r.d(l), o = false, s();
          }
        };
      }
      function V9(x) {
        let e, t, n, o, s, r, l, i, u, d, f = Be(x[15]), B = [];
        for (let C = 0; C < f.length; C += 1) B[C] = Co(Eo(x, f, C));
        return {
          c() {
            e = E("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", t = g(), n = E("div");
            for (let C = 0; C < B.length; C += 1) B[C].c();
            o = g(), s = E("div"), r = E("button"), r.innerHTML = `<span class="material-icons svelte-3s0d7a">download</span>
                Download`, l = g(), i = E("button"), i.textContent = "Done", c(e, "class", "hint warning svelte-3s0d7a"), c(n, "class", "backup-grid"), c(r, "class", "btn-outline-sm dl-btn svelte-3s0d7a"), c(i, "class", "btn-outline-sm svelte-3s0d7a"), c(s, "class", "regen-code-actions svelte-3s0d7a");
          },
          m(C, A) {
            T(C, e, A), T(C, t, A), T(C, n, A);
            for (let F = 0; F < B.length; F += 1) B[F] && B[F].m(n, null);
            T(C, o, A), T(C, s, A), a(s, r), a(s, l), a(s, i), u || (d = [
              U(r, "click", x[48]),
              U(i, "click", x[40])
            ], u = true);
          },
          p(C, A) {
            if (A[0] & 32768) {
              f = Be(C[15]);
              let F;
              for (F = 0; F < f.length; F += 1) {
                const m = Eo(C, f, F);
                B[F] ? B[F].p(m, A) : (B[F] = Co(m), B[F].c(), B[F].m(n, null));
              }
              for (; F < B.length; F += 1) B[F].d(1);
              B.length = f.length;
            }
          },
          d(C) {
            C && (P(e), P(t), P(n), P(o), P(s)), Ke(B, C), u = false, re(d);
          }
        };
      }
      function Bo(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[14]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 16384 && G(t, n[14]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Co(x) {
        let e, t = x[73] + "", n;
        return {
          c() {
            e = E("code"), n = z(t), c(e, "class", "backup-code");
          },
          m(o, s) {
            T(o, e, s), a(e, n);
          },
          p(o, s) {
            s[0] & 32768 && t !== (t = o[73] + "") && G(n, t);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Ao(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[7]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 128 && G(t, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function G9(x) {
        let e, t = [], n = /* @__PURE__ */ new Map(), o, s, r = x[8] ? "Revoking\u2026" : "Revoke all", l, i, u, d = Be(x[6]);
        const f = (B) => B[70].id;
        for (let B = 0; B < d.length; B += 1) {
          let C = uo(x, d, B), A = f(C);
          n.set(A, t[B] = Fo(A, C));
        }
        return {
          c() {
            e = E("ul");
            for (let B = 0; B < t.length; B += 1) t[B].c();
            o = g(), s = E("button"), l = z(r), c(e, "class", "device-list svelte-3s0d7a"), c(s, "class", "btn-outline-sm svelte-3s0d7a"), s.disabled = x[8];
          },
          m(B, C) {
            T(B, e, C);
            for (let A = 0; A < t.length; A += 1) t[A] && t[A].m(e, null);
            T(B, o, C), T(B, s, C), a(s, l), i || (u = U(s, "click", x[34]), i = true);
          },
          p(B, C) {
            C[0] & 64 | C[1] & 4 && (d = Be(B[6]), t = il(t, C, f, 1, B, d, n, e, al, Fo, null, uo)), C[0] & 256 && r !== (r = B[8] ? "Revoking\u2026" : "Revoke all") && G(l, r), C[0] & 256 && (s.disabled = B[8]);
          },
          d(B) {
            B && (P(e), P(o), P(s));
            for (let C = 0; C < t.length; C += 1) t[C].d();
            i = false, u();
          }
        };
      }
      function Y9(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = 'No trusted devices. Check "Remember this device" at login to skip 2FA on this browser in future.', c(e, "class", "hint svelte-3s0d7a");
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
      function Fo(x, e) {
        let t, n, o = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "", s, r, l = To(e[70].created_at) + "", i, u, d, f, B, C;
        function A() {
          return e[50](e[70]);
        }
        return {
          key: x,
          first: null,
          c() {
            t = E("li"), n = E("span"), s = z(o), r = z("Added "), i = z(l), u = g(), d = E("button"), d.textContent = "Revoke", f = g(), c(n, "class", "device-date svelte-3s0d7a"), c(d, "class", "btn-outline-sm svelte-3s0d7a"), c(t, "class", "device-item svelte-3s0d7a"), this.first = t;
          },
          m(F, m) {
            T(F, t, m), a(t, n), a(n, s), a(n, r), a(n, i), a(t, u), a(t, d), a(t, f), B || (C = U(d, "click", A), B = true);
          },
          p(F, m) {
            e = F, m[0] & 64 && o !== (o = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "") && G(s, o), m[0] & 64 && l !== (l = To(e[70].created_at) + "") && G(i, l);
          },
          d(F) {
            F && P(t), B = false, C();
          }
        };
      }
      function po(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[11]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 2048 && G(t, n[11]);
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
            e = E("p"), e.innerHTML = "Requires a 4-digit PIN to open Encounters, Results, Alerts and Settings, while still allowing you to add a new encounter from the Home screen. Useful if you hand your phone to someone - it stops casual snooping. <br/><strong>Note:</strong> your data is already encrypted by your password; the PIN adds no additional encryption.", c(e, "class", "info-box svelte-3s0d7a");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function K9(x) {
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
      function W9(x) {
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
      function Q9(x) {
        let e, t, n;
        return {
          c() {
            e = E("button"), e.textContent = "Set PIN", c(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(o, s) {
            T(o, e, s), t || (n = U(e, "click", x[55]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function J9(x) {
        let e, t, n, o, s, r;
        return {
          c() {
            e = E("div"), t = E("button"), t.textContent = "Change PIN", n = g(), o = E("button"), o.textContent = "Remove PIN", c(t, "class", "btn-outline-sm svelte-3s0d7a"), c(o, "class", "btn-outline-sm btn-outline-danger svelte-3s0d7a"), c(e, "class", "row-actions svelte-3s0d7a");
          },
          m(l, i) {
            T(l, e, i), a(e, t), a(e, n), a(e, o), s || (r = [
              U(t, "click", x[53]),
              U(o, "click", x[54])
            ], s = true);
          },
          p: X,
          d(l) {
            l && P(e), s = false, re(r);
          }
        };
      }
      function X9(x) {
        let e;
        return {
          c() {
            e = E("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">warning</span>
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
      function Z9(x) {
        let e;
        return {
          c() {
            e = E("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">verified</span>
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
      function mo(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[18]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 262144 && G(t, n[18]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ho(x) {
        let e, t;
        return e = new w9({
          props: {
            title: x[21]
          }
        }), e.$on("done", x[57]), e.$on("cancel", x[58]), {
          c() {
            Ne(e.$$.fragment);
          },
          m(n, o) {
            Me(e, n, o), t = true;
          },
          p(n, o) {
            const s = {};
            o[0] & 2097152 && (s.title = n[21]), e.$set(s);
          },
          i(n) {
            t || (fe(e.$$.fragment, n), t = true);
          },
          o(n) {
            Ae(e.$$.fragment, n), t = false;
          },
          d(n) {
            Le(e, n);
          }
        };
      }
      function vo(x) {
        let e, t, n, o, s, r, l, i, u, d = x[23] ? "Removing\u2026" : "Remove PIN", f, B, C, A, F, m, h = x[24] && _o(x);
        return {
          c() {
            e = E("div"), t = E("div"), n = E("h2"), n.textContent = "Remove screen lock PIN?", o = g(), s = E("p"), s.textContent = "Anyone with access to your phone will be able to view your encounters and alerts.", r = g(), h && h.c(), l = g(), i = E("div"), u = E("button"), f = z(d), B = g(), C = E("button"), A = z("Cancel"), c(n, "id", "remove-pin-title"), c(n, "class", "svelte-3s0d7a"), c(s, "class", "svelte-3s0d7a"), c(u, "class", "btn-danger svelte-3s0d7a"), u.disabled = x[23], c(C, "class", "btn-ghost svelte-3s0d7a"), C.disabled = x[23], c(i, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "remove-pin-title");
          },
          m(v, b) {
            T(v, e, b), a(e, t), a(t, n), a(t, o), a(t, s), a(t, r), h && h.m(t, null), a(t, l), a(t, i), a(i, u), a(u, f), a(i, B), a(i, C), a(C, A), F || (m = [
              U(u, "click", x[36]),
              U(C, "click", x[59])
            ], F = true);
          },
          p(v, b) {
            v[24] ? h ? h.p(v, b) : (h = _o(v), h.c(), h.m(t, l)) : h && (h.d(1), h = null), b[0] & 8388608 && d !== (d = v[23] ? "Removing\u2026" : "Remove PIN") && G(f, d), b[0] & 8388608 && (u.disabled = v[23]), b[0] & 8388608 && (C.disabled = v[23]);
          },
          d(v) {
            v && P(e), h && h.d(), F = false, re(m);
          }
        };
      }
      function _o(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[24]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 16777216 && G(t, n[24]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ko(x) {
        let e, t, n, o, s, r, l, i, u, d = x[10] ? "Disabling\u2026" : "Yes, disable 2FA", f, B, C, A, F, m, h = x[11] && bo(x);
        return {
          c() {
            e = E("div"), t = E("div"), n = E("h2"), n.textContent = "Disable two-factor authentication?", o = g(), s = E("p"), s.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, r = g(), h && h.c(), l = g(), i = E("div"), u = E("button"), f = z(d), B = g(), C = E("button"), A = z("Cancel"), c(n, "id", "disable-title"), c(n, "class", "svelte-3s0d7a"), c(s, "class", "svelte-3s0d7a"), c(u, "class", "btn-danger svelte-3s0d7a"), u.disabled = x[10], c(C, "class", "btn-ghost svelte-3s0d7a"), C.disabled = x[10], c(i, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "disable-title");
          },
          m(v, b) {
            T(v, e, b), a(e, t), a(t, n), a(t, o), a(t, s), a(t, r), h && h.m(t, null), a(t, l), a(t, i), a(i, u), a(u, f), a(i, B), a(i, C), a(C, A), F || (m = [
              U(u, "click", x[35]),
              U(C, "click", x[60])
            ], F = true);
          },
          p(v, b) {
            v[11] ? h ? h.p(v, b) : (h = bo(v), h.c(), h.m(t, l)) : h && (h.d(1), h = null), b[0] & 1024 && d !== (d = v[10] ? "Disabling\u2026" : "Yes, disable 2FA") && G(f, d), b[0] & 1024 && (u.disabled = v[10]), b[0] & 1024 && (C.disabled = v[10]);
          },
          d(v) {
            v && P(e), h && h.d(), F = false, re(m);
          }
        };
      }
      function bo(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[11]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 2048 && G(t, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function go(x) {
        let e, t, n, o, s, r, l, i, u, d = x[13] ? "Regenerating\u2026" : "Regenerate", f, B, C, A, F, m, h = x[14] && wo(x);
        return {
          c() {
            e = E("div"), t = E("div"), n = E("h2"), n.textContent = "Regenerate backup codes?", o = g(), s = E("p"), s.textContent = "All existing backup codes will be permanently invalidated.", r = g(), h && h.c(), l = g(), i = E("div"), u = E("button"), f = z(d), B = g(), C = E("button"), A = z("Cancel"), c(n, "id", "regen-title"), c(n, "class", "svelte-3s0d7a"), c(s, "class", "svelte-3s0d7a"), c(u, "class", "btn-primary svelte-3s0d7a"), u.disabled = x[13], c(C, "class", "btn-ghost svelte-3s0d7a"), C.disabled = x[13], c(i, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "regen-title");
          },
          m(v, b) {
            T(v, e, b), a(e, t), a(t, n), a(t, o), a(t, s), a(t, r), h && h.m(t, null), a(t, l), a(t, i), a(i, u), a(u, f), a(i, B), a(i, C), a(C, A), F || (m = [
              U(u, "click", x[39]),
              U(C, "click", x[61])
            ], F = true);
          },
          p(v, b) {
            v[14] ? h ? h.p(v, b) : (h = wo(v), h.c(), h.m(t, l)) : h && (h.d(1), h = null), b[0] & 8192 && d !== (d = v[13] ? "Regenerating\u2026" : "Regenerate") && G(f, d), b[0] & 8192 && (u.disabled = v[13]), b[0] & 8192 && (C.disabled = v[13]);
          },
          d(v) {
            v && P(e), h && h.d(), F = false, re(m);
          }
        };
      }
      function wo(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[14]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 16384 && G(t, n[14]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function yo(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m = x[17] ? "Deleting\u2026" : "Yes, delete my account", h, v, b, _, D, p, k, w = x[18] && Po(x);
        return {
          c() {
            e = E("div"), t = E("div"), n = E("h2"), n.textContent = "Delete your account?", o = g(), s = E("p"), s.innerHTML = `This will permanently delete your account and all data stored on the server.
        <strong>There is no undo.</strong>`, r = g(), l = E("p"), l.textContent = "If you haven't already, export your data first so you can import it into the mobile app.", i = g(), u = E("label"), u.textContent = "Type your email address to confirm:", d = g(), f = E("input"), B = g(), w && w.c(), C = g(), A = E("div"), F = E("button"), h = z(m), b = g(), _ = E("button"), D = z("Cancel"), c(n, "id", "delete-title"), c(n, "class", "svelte-3s0d7a"), c(s, "class", "svelte-3s0d7a"), c(l, "class", "hint svelte-3s0d7a"), c(u, "class", "confirm-label svelte-3s0d7a"), c(u, "for", "delete-confirm-input"), c(f, "id", "delete-confirm-input"), c(f, "class", "confirm-input svelte-3s0d7a"), c(f, "type", "text"), c(f, "placeholder", x[2]), c(f, "autocomplete", "off"), f.disabled = x[17], c(F, "class", "btn-danger svelte-3s0d7a"), F.disabled = v = x[17] || x[19] !== x[2], c(_, "class", "btn-ghost svelte-3s0d7a"), _.disabled = x[17], c(A, "class", "dialog-actions svelte-3s0d7a"), c(t, "class", "dialog svelte-3s0d7a"), c(e, "class", "overlay svelte-3s0d7a"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "delete-title");
          },
          m(y, S) {
            T(y, e, S), a(e, t), a(t, n), a(t, o), a(t, s), a(t, r), a(t, l), a(t, i), a(t, u), a(t, d), a(t, f), se(f, x[19]), a(t, B), w && w.m(t, null), a(t, C), a(t, A), a(A, F), a(F, h), a(A, b), a(A, _), a(_, D), p || (k = [
              U(f, "input", x[62]),
              U(F, "click", x[41]),
              U(_, "click", x[63])
            ], p = true);
          },
          p(y, S) {
            S[0] & 4 && c(f, "placeholder", y[2]), S[0] & 131072 && (f.disabled = y[17]), S[0] & 524288 && f.value !== y[19] && se(f, y[19]), y[18] ? w ? w.p(y, S) : (w = Po(y), w.c(), w.m(t, C)) : w && (w.d(1), w = null), S[0] & 131072 && m !== (m = y[17] ? "Deleting\u2026" : "Yes, delete my account") && G(h, m), S[0] & 655364 && v !== (v = y[17] || y[19] !== y[2]) && (F.disabled = v), S[0] & 131072 && (_.disabled = y[17]);
          },
          d(y) {
            y && P(e), w && w.d(), p = false, re(k);
          }
        };
      }
      function Po(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[18]), c(e, "class", "error svelte-3s0d7a");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 262144 && G(t, n[18]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function $9(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B;
        e = new c0({});
        function C(D, p) {
          return D[0] ? T9 : D[1] ? P9 : y9;
        }
        let A = C(x), F = A(x), m = x[20] && ho(x), h = x[22] && vo(x), v = x[9] && ko(x), b = x[12] && go(x), _ = x[16] && yo(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), o = E("h1"), o.textContent = "Settings", s = g(), F.c(), r = g(), m && m.c(), l = g(), h && h.c(), i = g(), v && v.c(), u = g(), b && b.c(), d = g(), _ && _.c(), f = s0(), c(o, "class", "svelte-3s0d7a"), c(n, "class", "svelte-3s0d7a");
          },
          m(D, p) {
            Me(e, D, p), T(D, t, p), T(D, n, p), a(n, o), a(n, s), F.m(n, null), T(D, r, p), m && m.m(D, p), T(D, l, p), h && h.m(D, p), T(D, i, p), v && v.m(D, p), T(D, u, p), b && b.m(D, p), T(D, d, p), _ && _.m(D, p), T(D, f, p), B = true;
          },
          p(D, p) {
            A === (A = C(D)) && F ? F.p(D, p) : (F.d(1), F = A(D), F && (F.c(), F.m(n, null))), D[20] ? m ? (m.p(D, p), p[0] & 1048576 && fe(m, 1)) : (m = ho(D), m.c(), fe(m, 1), m.m(l.parentNode, l)) : m && (W0(), Ae(m, 1, 1, () => {
              m = null;
            }), Q0()), D[22] ? h ? h.p(D, p) : (h = vo(D), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), D[9] ? v ? v.p(D, p) : (v = ko(D), v.c(), v.m(u.parentNode, u)) : v && (v.d(1), v = null), D[12] ? b ? b.p(D, p) : (b = go(D), b.c(), b.m(d.parentNode, d)) : b && (b.d(1), b = null), D[16] ? _ ? _.p(D, p) : (_ = yo(D), _.c(), _.m(f.parentNode, f)) : _ && (_.d(1), _ = null);
          },
          i(D) {
            B || (fe(e.$$.fragment, D), fe(m), B = true);
          },
          o(D) {
            Ae(e.$$.fragment, D), Ae(m), B = false;
          },
          d(D) {
            D && (P(t), P(n), P(r), P(l), P(i), P(u), P(d), P(f)), Le(e, D), F.d(), m && m.d(D), h && h.d(D), v && v.d(D), b && b.d(D), _ && _.d(D);
          }
        };
      }
      function To(x) {
        return new Date(x * 1e3).toLocaleDateString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }
      function e8(x) {
        const e = x.join(`
`), t = new Blob([
          e
        ], {
          type: "text/plain"
        }), n = URL.createObjectURL(t), o = document.createElement("a");
        o.href = n, o.download = "backup-codes.txt", o.click(), URL.revokeObjectURL(n);
      }
      function t8(x, e, t) {
        let n, o, s, r, l, i, u, d;
        je(x, et, (ne) => t(64, n = ne)), je(x, It, (ne) => t(65, o = ne)), je(x, st, (ne) => t(66, s = ne)), je(x, M0, (ne) => t(67, r = ne)), je(x, Gt, (ne) => t(68, l = ne)), je(x, ht, (ne) => t(30, i = ne)), je(x, Ss, (ne) => t(31, u = ne)), je(x, Mx, (ne) => t(32, d = ne));
        let f = true, B = null, C = "", A = false, F = false, m = 0, h = [], v = null, b = false, _ = false, D = false, p = null, k = false, w = false, y = null, S = [], M = false, I = false, L = null, N = "";
        Ue(async () => {
          if (!We()) {
            ue("/login");
            return;
          }
          await q();
        });
        async function q() {
          t(0, f = true), t(1, B = null);
          try {
            t(2, C = l ?? ""), t(3, A = r ?? false), t(4, F = s ?? false), F && (t(5, m = o ?? 0), t(6, h = n ?? []));
          } catch (ne) {
            t(1, B = ne.message);
          } finally {
            t(0, f = false);
          }
        }
        async function R(ne) {
          t(7, v = null);
          try {
            await ia(ne), t(6, h = h.filter((Te) => Te.id !== ne)), et.set(h), tx(_t());
          } catch (Te) {
            t(7, v = Te.message);
          }
        }
        async function H() {
          t(7, v = null), t(8, b = true);
          try {
            await ca(), t(6, h = []), et.set([]), tx(_t());
          } catch (ne) {
            t(7, v = ne.message);
          } finally {
            t(8, b = false);
          }
        }
        async function O() {
          t(11, p = null), t(10, D = true);
          try {
            await ra(), t(4, F = false), st.set(false), t(5, m = 0), t(6, h = []), tx(_t()), t(9, _ = false);
          } catch (ne) {
            t(11, p = ne.message);
          } finally {
            t(10, D = false);
          }
        }
        let Q = false, V = "Set PIN", Y = false, j = false, J = "", K = false;
        async function le() {
          t(23, j = true);
          try {
            await Va(), t(22, Y = false);
          } catch (ne) {
            t(24, J = ne.message);
          } finally {
            t(23, j = false);
          }
        }
        let ce = "idle", ae = "", oe = "", Ee = null;
        async function Ge() {
          if (t(29, Ee = null), !/^\d{6}$/.test(ae)) {
            t(29, Ee = "PIN must be exactly 6 digits.");
            return;
          }
          if (ae !== oe) {
            t(29, Ee = "PINs do not match.");
            return;
          }
          t(26, ce = "exporting");
          try {
            const ne = await m9(ae), ge = `${h9}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.enc`, p0 = new Blob([
              ne
            ], {
              type: "application/octet-stream"
            }), r0 = URL.createObjectURL(p0), He = document.createElement("a");
            He.href = r0, He.download = ge, He.click(), URL.revokeObjectURL(r0), t(26, ce = "done");
          } catch (ne) {
            t(29, Ee = ne.message), t(26, ce = "error");
          }
        }
        function Z() {
          t(26, ce = "idle"), t(27, ae = ""), t(28, oe = ""), t(29, Ee = null);
        }
        async function ee() {
          t(14, y = null), t(13, w = true);
          try {
            const { backup_codes: ne } = await aa();
            t(15, S = ne), t(5, m = ne.length), It.set(ne.length), t(12, k = false);
          } catch (ne) {
            t(14, y = ne.message);
          } finally {
            t(13, w = false);
          }
        }
        function ie() {
          t(15, S = []);
        }
        async function Ce() {
          t(18, L = null), t(17, I = true);
          try {
            await fa(), ue("/login");
          } catch (ne) {
            t(18, L = ne.message);
          } finally {
            t(17, I = false);
          }
        }
        const Fe = () => Yx(ht, i = "light", i), ye = () => Yx(ht, i = "dark", i), Re = () => t(26, ce = "entering_pin");
        function Pe() {
          ae = this.value, t(27, ae);
        }
        function be() {
          oe = this.value, t(28, oe);
        }
        const ke = () => ue("/settings/2fa-setup"), Ie = () => e8(S), d0 = () => {
          t(12, k = true);
        }, A0 = (ne) => R(ne.id), e0 = () => {
          t(9, _ = true);
        }, F0 = () => t(25, K = !K), E0 = () => {
          t(21, V = "Change PIN"), t(20, Q = true);
        }, _0 = () => {
          t(22, Y = true), t(24, J = "");
        }, x0 = () => {
          t(21, V = "Set PIN"), t(20, Q = true);
        }, Qe = () => {
          t(16, M = true), t(19, N = "");
        }, n0 = () => t(20, Q = false), o0 = () => t(20, Q = false), De = () => {
          t(22, Y = false), t(24, J = "");
        }, k0 = () => {
          t(9, _ = false), t(11, p = null);
        }, Je = () => {
          t(12, k = false), t(14, y = null);
        };
        function Xe() {
          N = this.value, t(19, N);
        }
        return [
          f,
          B,
          C,
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
          V,
          Y,
          j,
          J,
          K,
          ce,
          ae,
          oe,
          Ee,
          i,
          u,
          d,
          R,
          H,
          O,
          le,
          Ge,
          Z,
          ee,
          ie,
          Ce,
          Fe,
          ye,
          Re,
          Pe,
          be,
          ke,
          Ie,
          d0,
          A0,
          e0,
          F0,
          E0,
          _0,
          x0,
          Qe,
          n0,
          o0,
          De,
          k0,
          Je,
          Xe,
          () => {
            t(16, M = false), t(18, L = null), t(19, N = "");
          }
        ];
      }
      class x8 extends ve {
        constructor(e) {
          super(), he(this, e, t8, $9, pe, {}, null, [
            -1,
            -1,
            -1
          ]);
        }
      }
      function So(x, e, t) {
        const n = x.slice();
        return n[12] = e[t], n;
      }
      function n8(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A = Be(x[4]), F = [];
        for (let m = 0; m < A.length; m += 1) F[m] = Io(So(x, A, m));
        return {
          c() {
            e = E("div"), t = E("div"), t.innerHTML = '<span class="material-icons success-icon svelte-6iq55z">check_circle</span> <h1 class="svelte-6iq55z">2FA enabled \u2014 save your backup codes</h1>', n = g(), o = E("p"), o.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, s = g(), r = E("div");
            for (let m = 0; m < F.length; m += 1) F[m].c();
            l = g(), i = E("div"), u = E("button"), u.innerHTML = `<span class="material-icons svelte-6iq55z">download</span>
          Download as text file`, d = g(), f = E("button"), f.textContent = "I've saved my backup codes", c(t, "class", "codes-header svelte-6iq55z"), c(o, "class", "hint warning svelte-6iq55z"), c(r, "class", "backup-grid svelte-6iq55z"), c(u, "class", "btn-ghost svelte-6iq55z"), c(f, "class", "btn-primary svelte-6iq55z"), c(i, "class", "codes-actions svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(m, h) {
            T(m, e, h), a(e, t), a(e, n), a(e, o), a(e, s), a(e, r);
            for (let v = 0; v < F.length; v += 1) F[v] && F[v].m(r, null);
            a(e, l), a(e, i), a(i, u), a(i, d), a(i, f), B || (C = [
              U(u, "click", x[8]),
              U(f, "click", x[9])
            ], B = true);
          },
          p(m, h) {
            if (h & 16) {
              A = Be(m[4]);
              let v;
              for (v = 0; v < A.length; v += 1) {
                const b = So(m, A, v);
                F[v] ? F[v].p(b, h) : (F[v] = Io(b), F[v].c(), F[v].m(r, null));
              }
              for (; v < F.length; v += 1) F[v].d(1);
              F.length = A.length;
            }
          },
          d(m) {
            m && P(e), Ke(F, m), B = false, re(C);
          }
        };
      }
      function o8(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D, p, k, w, y, S = x[5] ? "Verifying\u2026" : "Enable 2FA", M, I, L, N, q, R, H, O = x[6] && Mo(x);
        return {
          c() {
            e = E("div"), t = E("div"), n = E("button"), n.innerHTML = '<span class="material-icons svelte-6iq55z">arrow_back</span>', o = g(), s = E("h1"), s.textContent = "Set up authenticator app", r = g(), l = E("p"), l.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, i = g(), u = E("div"), d = E("img"), B = g(), C = E("details"), A = E("summary"), A.textContent = "Can't scan? Enter the key manually", F = g(), m = E("code"), h = z(x[1]), v = g(), b = E("form"), _ = E("label"), D = z(`Authenticator code
          `), p = E("input"), k = g(), O && O.c(), w = g(), y = E("button"), M = z(S), L = g(), N = E("button"), q = z("Cancel"), c(n, "class", "back-btn svelte-6iq55z"), c(n, "type", "button"), c(s, "class", "svelte-6iq55z"), c(t, "class", "card-header svelte-6iq55z"), c(l, "class", "hint svelte-6iq55z"), Gx(d.src, f = x[2]) || c(d, "src", f), c(d, "alt", "TOTP QR code"), c(d, "width", "200"), c(d, "height", "200"), c(d, "class", "svelte-6iq55z"), c(u, "class", "qr-wrap svelte-6iq55z"), c(A, "class", "svelte-6iq55z"), c(m, "class", "secret-key svelte-6iq55z"), c(C, "class", "manual-entry svelte-6iq55z"), c(p, "type", "text"), c(p, "inputmode", "numeric"), c(p, "pattern", "[0-9]*"), c(p, "maxlength", "6"), p.required = true, c(p, "autocomplete", "one-time-code"), c(p, "placeholder", "000000"), c(p, "class", "svelte-6iq55z"), c(_, "class", "svelte-6iq55z"), c(y, "type", "submit"), c(y, "class", "btn-primary svelte-6iq55z"), y.disabled = I = x[5] || x[3].length !== 6, c(N, "type", "button"), c(N, "class", "btn-ghost svelte-6iq55z"), N.disabled = x[5], c(b, "class", "otp-form svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(Q, V) {
            T(Q, e, V), a(e, t), a(t, n), a(t, o), a(t, s), a(e, r), a(e, l), a(e, i), a(e, u), a(u, d), a(e, B), a(e, C), a(C, A), a(C, F), a(C, m), a(m, h), a(e, v), a(e, b), a(b, _), a(_, D), a(_, p), se(p, x[3]), a(b, k), O && O.m(b, null), a(b, w), a(b, y), a(y, M), a(b, L), a(b, N), a(N, q), R || (H = [
              U(n, "click", x[10]),
              U(p, "input", x[11]),
              U(N, "click", x[10]),
              U(b, "submit", C0(x[7]))
            ], R = true);
          },
          p(Q, V) {
            V & 4 && !Gx(d.src, f = Q[2]) && c(d, "src", f), V & 2 && G(h, Q[1]), V & 8 && p.value !== Q[3] && se(p, Q[3]), Q[6] ? O ? O.p(Q, V) : (O = Mo(Q), O.c(), O.m(b, w)) : O && (O.d(1), O = null), V & 32 && S !== (S = Q[5] ? "Verifying\u2026" : "Enable 2FA") && G(M, S), V & 40 && I !== (I = Q[5] || Q[3].length !== 6) && (y.disabled = I), V & 32 && (N.disabled = Q[5]);
          },
          d(Q) {
            Q && P(e), O && O.d(), R = false, re(H);
          }
        };
      }
      function s8(x) {
        let e, t, n, o, s, r, l;
        return {
          c() {
            e = E("div"), t = E("p"), n = z(x[6]), o = g(), s = E("button"), s.textContent = "Back to Settings", c(t, "class", "error svelte-6iq55z"), c(s, "class", "btn-ghost svelte-6iq55z"), c(e, "class", "card svelte-6iq55z");
          },
          m(i, u) {
            T(i, e, u), a(e, t), a(t, n), a(e, o), a(e, s), r || (l = U(s, "click", x[10]), r = true);
          },
          p(i, u) {
            u & 64 && G(n, i[6]);
          },
          d(i) {
            i && P(e), r = false, l();
          }
        };
      }
      function l8(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "Setting up\u2026", c(e, "class", "muted svelte-6iq55z");
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
      function Io(x) {
        let e, t = x[12] + "", n;
        return {
          c() {
            e = E("code"), n = z(t), c(e, "class", "backup-code svelte-6iq55z");
          },
          m(o, s) {
            T(o, e, s), a(e, n);
          },
          p(o, s) {
            s & 16 && t !== (t = o[12] + "") && G(n, t);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Mo(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[6]), c(e, "class", "error svelte-6iq55z");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o & 64 && G(t, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function r8(x) {
        let e, t, n, o;
        e = new c0({});
        function s(i, u) {
          if (i[0] === "loading") return l8;
          if (i[0] === "error") return s8;
          if (i[0] === "scan") return o8;
          if (i[0] === "codes") return n8;
        }
        let r = s(x), l = r && r(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), l && l.c(), c(n, "class", "svelte-6iq55z");
          },
          m(i, u) {
            Me(e, i, u), T(i, t, u), T(i, n, u), l && l.m(n, null), o = true;
          },
          p(i, [u]) {
            r === (r = s(i)) && l ? l.p(i, u) : (l && l.d(1), l = r && r(i), l && (l.c(), l.m(n, null)));
          },
          i(i) {
            o || (fe(e.$$.fragment, i), o = true);
          },
          o(i) {
            Ae(e.$$.fragment, i), o = false;
          },
          d(i) {
            i && (P(t), P(n)), Le(e, i), l && l.d();
          }
        };
      }
      function a8(x, e, t) {
        let n = "loading", o = "", s = "", r = "", l = [], i = false, u = null;
        Ue(async () => {
          if (!We()) {
            ue("/login");
            return;
          }
          try {
            const { secret: F, uri: m } = await sa();
            t(1, o = F), t(2, s = await L0.toDataURL(m, {
              width: 200,
              margin: 1
            })), t(0, n = "scan");
          } catch (F) {
            t(6, u = F.message), t(0, n = "error");
          }
        });
        async function d() {
          t(6, u = null), t(5, i = true);
          try {
            const { backup_codes: F } = await la(o, r);
            t(4, l = F), st.set(true), t(0, n = "codes");
          } catch (F) {
            t(6, u = F.message);
          } finally {
            t(5, i = false);
          }
        }
        function f() {
          const F = l.join(`
`), m = new Blob([
            F
          ], {
            type: "text/plain"
          }), h = URL.createObjectURL(m), v = document.createElement("a");
          v.href = h, v.download = "backup-codes.txt", v.click(), URL.revokeObjectURL(h);
        }
        function B() {
          ue("/settings");
        }
        function C() {
          ue("/settings");
        }
        function A() {
          r = this.value, t(3, r);
        }
        return [
          n,
          o,
          s,
          r,
          l,
          i,
          u,
          d,
          f,
          B,
          C,
          A
        ];
      }
      class i8 extends ve {
        constructor(e) {
          super(), he(this, e, a8, r8, pe, {});
        }
      }
      var el = {
        exports: {}
      };
      (function(x, e) {
        (function(n, o) {
          x.exports = o();
        })(typeof self < "u" ? self : mc, function() {
          return function(t) {
            var n = {};
            function o(s) {
              if (n[s]) return n[s].exports;
              var r = n[s] = {
                i: s,
                l: false,
                exports: {}
              };
              return t[s].call(r.exports, r, r.exports, o), r.l = true, r.exports;
            }
            return o.m = t, o.c = n, o.d = function(s, r, l) {
              o.o(s, r) || Object.defineProperty(s, r, {
                configurable: false,
                enumerable: true,
                get: l
              });
            }, o.n = function(s) {
              var r = s && s.__esModule ? function() {
                return s.default;
              } : function() {
                return s;
              };
              return o.d(r, "a", r), r;
            }, o.o = function(s, r) {
              return Object.prototype.hasOwnProperty.call(s, r);
            }, o.p = "", o(o.s = 3);
          }([
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = function() {
                function r(l, i) {
                  this.width = i, this.height = l.length / i, this.data = l;
                }
                return r.createEmpty = function(l, i) {
                  return new r(new Uint8ClampedArray(l * i), l);
                }, r.prototype.get = function(l, i) {
                  return l < 0 || l >= this.width || i < 0 || i >= this.height ? false : !!this.data[i * this.width + l];
                }, r.prototype.set = function(l, i, u) {
                  this.data[i * this.width + l] = u ? 1 : 0;
                }, r.prototype.setRegion = function(l, i, u, d, f) {
                  for (var B = i; B < i + d; B++) for (var C = l; C < l + u; C++) this.set(C, B, !!f);
                }, r;
              }();
              n.BitMatrix = s;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(2);
              function r(i, u) {
                return i ^ u;
              }
              n.addOrSubtractGF = r;
              var l = function() {
                function i(u, d, f) {
                  this.primitive = u, this.size = d, this.generatorBase = f, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                  for (var B = 1, C = 0; C < this.size; C++) this.expTable[C] = B, B = B * 2, B >= this.size && (B = (B ^ this.primitive) & this.size - 1);
                  for (var C = 0; C < this.size - 1; C++) this.logTable[this.expTable[C]] = C;
                  this.zero = new s.default(this, Uint8ClampedArray.from([
                    0
                  ])), this.one = new s.default(this, Uint8ClampedArray.from([
                    1
                  ]));
                }
                return i.prototype.multiply = function(u, d) {
                  return u === 0 || d === 0 ? 0 : this.expTable[(this.logTable[u] + this.logTable[d]) % (this.size - 1)];
                }, i.prototype.inverse = function(u) {
                  if (u === 0) throw new Error("Can't invert 0");
                  return this.expTable[this.size - this.logTable[u] - 1];
                }, i.prototype.buildMonomial = function(u, d) {
                  if (u < 0) throw new Error("Invalid monomial degree less than 0");
                  if (d === 0) return this.zero;
                  var f = new Uint8ClampedArray(u + 1);
                  return f[0] = d, new s.default(this, f);
                }, i.prototype.log = function(u) {
                  if (u === 0) throw new Error("Can't take log(0)");
                  return this.logTable[u];
                }, i.prototype.exp = function(u) {
                  return this.expTable[u];
                }, i;
              }();
              n.default = l;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(1), r = function() {
                function l(i, u) {
                  if (u.length === 0) throw new Error("No coefficients.");
                  this.field = i;
                  var d = u.length;
                  if (d > 1 && u[0] === 0) {
                    for (var f = 1; f < d && u[f] === 0; ) f++;
                    if (f === d) this.coefficients = i.zero.coefficients;
                    else {
                      this.coefficients = new Uint8ClampedArray(d - f);
                      for (var B = 0; B < this.coefficients.length; B++) this.coefficients[B] = u[f + B];
                    }
                  } else this.coefficients = u;
                }
                return l.prototype.degree = function() {
                  return this.coefficients.length - 1;
                }, l.prototype.isZero = function() {
                  return this.coefficients[0] === 0;
                }, l.prototype.getCoefficient = function(i) {
                  return this.coefficients[this.coefficients.length - 1 - i];
                }, l.prototype.addOrSubtract = function(i) {
                  var u;
                  if (this.isZero()) return i;
                  if (i.isZero()) return this;
                  var d = this.coefficients, f = i.coefficients;
                  d.length > f.length && (u = [
                    f,
                    d
                  ], d = u[0], f = u[1]);
                  for (var B = new Uint8ClampedArray(f.length), C = f.length - d.length, A = 0; A < C; A++) B[A] = f[A];
                  for (var A = C; A < f.length; A++) B[A] = s.addOrSubtractGF(d[A - C], f[A]);
                  return new l(this.field, B);
                }, l.prototype.multiply = function(i) {
                  if (i === 0) return this.field.zero;
                  if (i === 1) return this;
                  for (var u = this.coefficients.length, d = new Uint8ClampedArray(u), f = 0; f < u; f++) d[f] = this.field.multiply(this.coefficients[f], i);
                  return new l(this.field, d);
                }, l.prototype.multiplyPoly = function(i) {
                  if (this.isZero() || i.isZero()) return this.field.zero;
                  for (var u = this.coefficients, d = u.length, f = i.coefficients, B = f.length, C = new Uint8ClampedArray(d + B - 1), A = 0; A < d; A++) for (var F = u[A], m = 0; m < B; m++) C[A + m] = s.addOrSubtractGF(C[A + m], this.field.multiply(F, f[m]));
                  return new l(this.field, C);
                }, l.prototype.multiplyByMonomial = function(i, u) {
                  if (i < 0) throw new Error("Invalid degree less than 0");
                  if (u === 0) return this.field.zero;
                  for (var d = this.coefficients.length, f = new Uint8ClampedArray(d + i), B = 0; B < d; B++) f[B] = this.field.multiply(this.coefficients[B], u);
                  return new l(this.field, f);
                }, l.prototype.evaluateAt = function(i) {
                  var u = 0;
                  if (i === 0) return this.getCoefficient(0);
                  var d = this.coefficients.length;
                  if (i === 1) return this.coefficients.forEach(function(B) {
                    u = s.addOrSubtractGF(u, B);
                  }), u;
                  u = this.coefficients[0];
                  for (var f = 1; f < d; f++) u = s.addOrSubtractGF(this.field.multiply(i, u), this.coefficients[f]);
                  return u;
                }, l;
              }();
              n.default = r;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(4), r = o(5), l = o(11), i = o(12);
              function u(B) {
                var C = i.locate(B);
                if (!C) return null;
                for (var A = 0, F = C; A < F.length; A++) {
                  var m = F[A], h = l.extract(B, m), v = r.decode(h.matrix);
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
              var d = {
                inversionAttempts: "attemptBoth"
              };
              function f(B, C, A, F) {
                F === void 0 && (F = {});
                var m = d;
                Object.keys(m || {}).forEach(function(k) {
                  m[k] = F[k] || m[k];
                });
                var h = m.inversionAttempts === "attemptBoth" || m.inversionAttempts === "invertFirst", v = m.inversionAttempts === "onlyInvert" || m.inversionAttempts === "invertFirst", b = s.binarize(B, C, A, h), _ = b.binarized, D = b.inverted, p = u(v ? D : _);
                return !p && (m.inversionAttempts === "attemptBoth" || m.inversionAttempts === "invertFirst") && (p = u(v ? _ : D)), p;
              }
              f.default = f, n.default = f;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(0), r = 8, l = 24;
              function i(f, B, C) {
                return f < B ? B : f > C ? C : f;
              }
              var u = function() {
                function f(B, C) {
                  this.width = B, this.data = new Uint8ClampedArray(B * C);
                }
                return f.prototype.get = function(B, C) {
                  return this.data[C * this.width + B];
                }, f.prototype.set = function(B, C, A) {
                  this.data[C * this.width + B] = A;
                }, f;
              }();
              function d(f, B, C, A) {
                if (f.length !== B * C * 4) throw new Error("Malformed data passed to binarizer.");
                for (var F = new u(B, C), m = 0; m < B; m++) for (var h = 0; h < C; h++) {
                  var v = f[(h * B + m) * 4 + 0], b = f[(h * B + m) * 4 + 1], _ = f[(h * B + m) * 4 + 2];
                  F.set(m, h, 0.2126 * v + 0.7152 * b + 0.0722 * _);
                }
                for (var D = Math.ceil(B / r), p = Math.ceil(C / r), k = new u(D, p), w = 0; w < p; w++) for (var y = 0; y < D; y++) {
                  for (var S = 0, M = 1 / 0, I = 0, h = 0; h < r; h++) for (var m = 0; m < r; m++) {
                    var L = F.get(y * r + m, w * r + h);
                    S += L, M = Math.min(M, L), I = Math.max(I, L);
                  }
                  var N = S / Math.pow(r, 2);
                  if (I - M <= l && (N = M / 2, w > 0 && y > 0)) {
                    var q = (k.get(y, w - 1) + 2 * k.get(y - 1, w) + k.get(y - 1, w - 1)) / 4;
                    M < q && (N = q);
                  }
                  k.set(y, w, N);
                }
                var R = s.BitMatrix.createEmpty(B, C), H = null;
                A && (H = s.BitMatrix.createEmpty(B, C));
                for (var w = 0; w < p; w++) for (var y = 0; y < D; y++) {
                  for (var O = i(y, 2, D - 3), Q = i(w, 2, p - 3), S = 0, V = -2; V <= 2; V++) for (var Y = -2; Y <= 2; Y++) S += k.get(O + V, Q + Y);
                  for (var j = S / 25, V = 0; V < r; V++) for (var Y = 0; Y < r; Y++) {
                    var m = y * r + V, h = w * r + Y, J = F.get(m, h);
                    R.set(m, h, J <= j), A && H.set(m, h, !(J <= j));
                  }
                }
                return A ? {
                  binarized: R,
                  inverted: H
                } : {
                  binarized: R
                };
              }
              n.binarize = d;
            },
            function(t, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var s = o(0), r = o(6), l = o(9), i = o(10);
              function u(_, D) {
                for (var p = _ ^ D, k = 0; p; ) k++, p &= p - 1;
                return k;
              }
              function d(_, D) {
                return D << 1 | _;
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
              ], B = [
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
              function C(_) {
                var D = 17 + 4 * _.versionNumber, p = s.BitMatrix.createEmpty(D, D);
                p.setRegion(0, 0, 9, 9, true), p.setRegion(D - 8, 0, 8, 9, true), p.setRegion(0, D - 8, 9, 8, true);
                for (var k = 0, w = _.alignmentPatternCenters; k < w.length; k++) for (var y = w[k], S = 0, M = _.alignmentPatternCenters; S < M.length; S++) {
                  var I = M[S];
                  y === 6 && I === 6 || y === 6 && I === D - 7 || y === D - 7 && I === 6 || p.setRegion(y - 2, I - 2, 5, 5, true);
                }
                return p.setRegion(6, 9, 1, D - 17, true), p.setRegion(9, 6, D - 17, 1, true), _.versionNumber > 6 && (p.setRegion(D - 11, 0, 3, 6, true), p.setRegion(0, D - 11, 6, 3, true)), p;
              }
              function A(_, D, p) {
                for (var k = B[p.dataMask], w = _.height, y = C(D), S = [], M = 0, I = 0, L = true, N = w - 1; N > 0; N -= 2) {
                  N === 6 && N--;
                  for (var q = 0; q < w; q++) for (var R = L ? w - 1 - q : q, H = 0; H < 2; H++) {
                    var O = N - H;
                    if (!y.get(O, R)) {
                      I++;
                      var Q = _.get(O, R);
                      k({
                        y: R,
                        x: O
                      }) && (Q = !Q), M = d(Q, M), I === 8 && (S.push(M), I = 0, M = 0);
                    }
                  }
                  L = !L;
                }
                return S;
              }
              function F(_) {
                var D = _.height, p = Math.floor((D - 17) / 4);
                if (p <= 6) return i.VERSIONS[p - 1];
                for (var k = 0, w = 5; w >= 0; w--) for (var y = D - 9; y >= D - 11; y--) k = d(_.get(y, w), k);
                for (var S = 0, y = 5; y >= 0; y--) for (var w = D - 9; w >= D - 11; w--) S = d(_.get(y, w), S);
                for (var M = 1 / 0, I, L = 0, N = i.VERSIONS; L < N.length; L++) {
                  var q = N[L];
                  if (q.infoBits === k || q.infoBits === S) return q;
                  var R = u(k, q.infoBits);
                  R < M && (I = q, M = R), R = u(S, q.infoBits), R < M && (I = q, M = R);
                }
                if (M <= 3) return I;
              }
              function m(_) {
                for (var D = 0, p = 0; p <= 8; p++) p !== 6 && (D = d(_.get(p, 8), D));
                for (var k = 7; k >= 0; k--) k !== 6 && (D = d(_.get(8, k), D));
                for (var w = _.height, y = 0, k = w - 1; k >= w - 7; k--) y = d(_.get(8, k), y);
                for (var p = w - 8; p < w; p++) y = d(_.get(p, 8), y);
                for (var S = 1 / 0, M = null, I = 0, L = f; I < L.length; I++) {
                  var N = L[I], q = N.bits, R = N.formatInfo;
                  if (q === D || q === y) return R;
                  var H = u(D, q);
                  H < S && (M = R, S = H), D !== y && (H = u(y, q), H < S && (M = R, S = H));
                }
                return S <= 3 ? M : null;
              }
              function h(_, D, p) {
                var k = D.errorCorrectionLevels[p], w = [], y = 0;
                if (k.ecBlocks.forEach(function(Q) {
                  for (var V = 0; V < Q.numBlocks; V++) w.push({
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
                for (; _.length > 0; ) for (var H = 0, O = w; H < O.length; H++) {
                  var N = O[H];
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
                for (var y = w.reduce(function(H, O) {
                  return H + O.numDataCodewords;
                }, 0), S = new Uint8ClampedArray(y), M = 0, I = 0, L = w; I < L.length; I++) {
                  var N = L[I], q = l.decode(N.codewords, N.codewords.length - N.numDataCodewords);
                  if (!q) return null;
                  for (var R = 0; R < N.numDataCodewords; R++) S[M++] = q[R];
                }
                try {
                  return r.decode(S, D.versionNumber);
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
              var s = o(7), r = o(8), l;
              (function(F) {
                F.Numeric = "numeric", F.Alphanumeric = "alphanumeric", F.Byte = "byte", F.Kanji = "kanji", F.ECI = "eci";
              })(l = n.Mode || (n.Mode = {}));
              var i;
              (function(F) {
                F[F.Terminator = 0] = "Terminator", F[F.Numeric = 1] = "Numeric", F[F.Alphanumeric = 2] = "Alphanumeric", F[F.Byte = 4] = "Byte", F[F.Kanji = 8] = "Kanji", F[F.ECI = 7] = "ECI";
              })(i || (i = {}));
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
              var d = [
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
              function f(F, m) {
                for (var h = [], v = "", b = [
                  9,
                  11,
                  13
                ][m], _ = F.readBits(b); _ >= 2; ) {
                  var D = F.readBits(11), p = Math.floor(D / 45), k = D % 45;
                  h.push(d[p].charCodeAt(0), d[k].charCodeAt(0)), v += d[p] + d[k], _ -= 2;
                }
                if (_ === 1) {
                  var p = F.readBits(6);
                  h.push(d[p].charCodeAt(0)), v += d[p];
                }
                return {
                  bytes: h,
                  text: v
                };
              }
              function B(F, m) {
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
              function C(F, m) {
                for (var h = [], v = "", b = [
                  8,
                  10,
                  12
                ][m], _ = F.readBits(b), D = 0; D < _; D++) {
                  var p = F.readBits(13), k = Math.floor(p / 192) << 8 | p % 192;
                  k < 7936 ? k += 33088 : k += 49472, h.push(k >> 8, k & 255), v += String.fromCharCode(r.shiftJISTable[k]);
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
                  if (w === i.Terminator) return k;
                  if (w === i.ECI) D.readBits(1) === 0 ? k.chunks.push({
                    type: l.ECI,
                    assignmentNumber: D.readBits(7)
                  }) : D.readBits(1) === 0 ? k.chunks.push({
                    type: l.ECI,
                    assignmentNumber: D.readBits(14)
                  }) : D.readBits(1) === 0 ? k.chunks.push({
                    type: l.ECI,
                    assignmentNumber: D.readBits(21)
                  }) : k.chunks.push({
                    type: l.ECI,
                    assignmentNumber: -1
                  });
                  else if (w === i.Numeric) {
                    var y = u(D, p);
                    k.text += y.text, (h = k.bytes).push.apply(h, y.bytes), k.chunks.push({
                      type: l.Numeric,
                      text: y.text
                    });
                  } else if (w === i.Alphanumeric) {
                    var S = f(D, p);
                    k.text += S.text, (v = k.bytes).push.apply(v, S.bytes), k.chunks.push({
                      type: l.Alphanumeric,
                      text: S.text
                    });
                  } else if (w === i.Byte) {
                    var M = B(D, p);
                    k.text += M.text, (b = k.bytes).push.apply(b, M.bytes), k.chunks.push({
                      type: l.Byte,
                      bytes: M.bytes,
                      text: M.text
                    });
                  } else if (w === i.Kanji) {
                    var I = C(D, p);
                    k.text += I.text, (_ = k.bytes).push.apply(_, I.bytes), k.chunks.push({
                      type: l.Kanji,
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
                function r(l) {
                  this.byteOffset = 0, this.bitOffset = 0, this.bytes = l;
                }
                return r.prototype.readBits = function(l) {
                  if (l < 1 || l > 32 || l > this.available()) throw new Error("Cannot read " + l.toString() + " bits");
                  var i = 0;
                  if (this.bitOffset > 0) {
                    var u = 8 - this.bitOffset, d = l < u ? l : u, f = u - d, B = 255 >> 8 - d << f;
                    i = (this.bytes[this.byteOffset] & B) >> f, l -= d, this.bitOffset += d, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                  }
                  if (l > 0) {
                    for (; l >= 8; ) i = i << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, l -= 8;
                    if (l > 0) {
                      var f = 8 - l, B = 255 >> f << f;
                      i = i << l | (this.bytes[this.byteOffset] & B) >> f, this.bitOffset += l;
                    }
                  }
                  return i;
                }, r.prototype.available = function() {
                  return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
                }, r;
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
              var s = o(1), r = o(2);
              function l(f, B, C, A) {
                var F;
                B.degree() < C.degree() && (F = [
                  C,
                  B
                ], B = F[0], C = F[1]);
                for (var m = B, h = C, v = f.zero, b = f.one; h.degree() >= A / 2; ) {
                  var _ = m, D = v;
                  if (m = h, v = b, m.isZero()) return null;
                  h = _;
                  for (var p = f.zero, k = m.getCoefficient(m.degree()), w = f.inverse(k); h.degree() >= m.degree() && !h.isZero(); ) {
                    var y = h.degree() - m.degree(), S = f.multiply(h.getCoefficient(h.degree()), w);
                    p = p.addOrSubtract(f.buildMonomial(y, S)), h = h.addOrSubtract(m.multiplyByMonomial(y, S));
                  }
                  if (b = p.multiplyPoly(v).addOrSubtract(D), h.degree() >= m.degree()) return null;
                }
                var M = b.getCoefficient(0);
                if (M === 0) return null;
                var I = f.inverse(M);
                return [
                  b.multiply(I),
                  h.multiply(I)
                ];
              }
              function i(f, B) {
                var C = B.degree();
                if (C === 1) return [
                  B.getCoefficient(1)
                ];
                for (var A = new Array(C), F = 0, m = 1; m < f.size && F < C; m++) B.evaluateAt(m) === 0 && (A[F] = f.inverse(m), F++);
                return F !== C ? null : A;
              }
              function u(f, B, C) {
                for (var A = C.length, F = new Array(A), m = 0; m < A; m++) {
                  for (var h = f.inverse(C[m]), v = 1, b = 0; b < A; b++) m !== b && (v = f.multiply(v, s.addOrSubtractGF(1, f.multiply(C[b], h))));
                  F[m] = f.multiply(B.evaluateAt(h), f.inverse(v)), f.generatorBase !== 0 && (F[m] = f.multiply(F[m], h));
                }
                return F;
              }
              function d(f, B) {
                var C = new Uint8ClampedArray(f.length);
                C.set(f);
                for (var A = new s.default(285, 256, 0), F = new r.default(A, C), m = new Uint8ClampedArray(B), h = false, v = 0; v < B; v++) {
                  var b = F.evaluateAt(A.exp(v + A.generatorBase));
                  m[m.length - 1 - v] = b, b !== 0 && (h = true);
                }
                if (!h) return C;
                var _ = new r.default(A, m), D = l(A, A.buildMonomial(B, 1), _, B);
                if (D === null) return null;
                var p = i(A, D[0]);
                if (p == null) return null;
                for (var k = u(A, D[1], p), w = 0; w < p.length; w++) {
                  var y = C.length - 1 - A.log(p[w]);
                  if (y < 0) return null;
                  C[y] = s.addOrSubtractGF(C[y], k[w]);
                }
                return C;
              }
              n.decode = d;
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
              function r(d, f, B, C) {
                var A = d.x - f.x + B.x - C.x, F = d.y - f.y + B.y - C.y;
                if (A === 0 && F === 0) return {
                  a11: f.x - d.x,
                  a12: f.y - d.y,
                  a13: 0,
                  a21: B.x - f.x,
                  a22: B.y - f.y,
                  a23: 0,
                  a31: d.x,
                  a32: d.y,
                  a33: 1
                };
                var m = f.x - B.x, h = C.x - B.x, v = f.y - B.y, b = C.y - B.y, _ = m * b - h * v, D = (A * b - h * F) / _, p = (m * F - A * v) / _;
                return {
                  a11: f.x - d.x + D * f.x,
                  a12: f.y - d.y + D * f.y,
                  a13: D,
                  a21: C.x - d.x + p * C.x,
                  a22: C.y - d.y + p * C.y,
                  a23: p,
                  a31: d.x,
                  a32: d.y,
                  a33: 1
                };
              }
              function l(d, f, B, C) {
                var A = r(d, f, B, C);
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
              function i(d, f) {
                return {
                  a11: d.a11 * f.a11 + d.a21 * f.a12 + d.a31 * f.a13,
                  a12: d.a12 * f.a11 + d.a22 * f.a12 + d.a32 * f.a13,
                  a13: d.a13 * f.a11 + d.a23 * f.a12 + d.a33 * f.a13,
                  a21: d.a11 * f.a21 + d.a21 * f.a22 + d.a31 * f.a23,
                  a22: d.a12 * f.a21 + d.a22 * f.a22 + d.a32 * f.a23,
                  a23: d.a13 * f.a21 + d.a23 * f.a22 + d.a33 * f.a23,
                  a31: d.a11 * f.a31 + d.a21 * f.a32 + d.a31 * f.a33,
                  a32: d.a12 * f.a31 + d.a22 * f.a32 + d.a32 * f.a33,
                  a33: d.a13 * f.a31 + d.a23 * f.a32 + d.a33 * f.a33
                };
              }
              function u(d, f) {
                for (var B = l({
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
                }), C = r(f.topLeft, f.topRight, f.alignmentPattern, f.bottomLeft), A = i(C, B), F = s.BitMatrix.createEmpty(f.dimension, f.dimension), m = function(p, k) {
                  var w = A.a13 * p + A.a23 * k + A.a33;
                  return {
                    x: (A.a11 * p + A.a21 * k + A.a31) / w,
                    y: (A.a12 * p + A.a22 * k + A.a32) / w
                  };
                }, h = 0; h < f.dimension; h++) for (var v = 0; v < f.dimension; v++) {
                  var b = v + 0.5, _ = h + 0.5, D = m(b, _);
                  F.set(v, h, d.get(Math.floor(D.x), Math.floor(D.y)));
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
              var s = 4, r = 0.5, l = 1.5, i = function(b, _) {
                return Math.sqrt(Math.pow(_.x - b.x, 2) + Math.pow(_.y - b.y, 2));
              };
              function u(b) {
                return b.reduce(function(_, D) {
                  return _ + D;
                });
              }
              function d(b, _, D) {
                var p, k, w, y, S = i(b, _), M = i(_, D), I = i(b, D), L, N, q;
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
              function f(b, _, D, p) {
                var k = (u(C(b, D, p, 5)) / 7 + u(C(b, _, p, 5)) / 7 + u(C(D, b, p, 5)) / 7 + u(C(_, b, p, 5)) / 7) / 4;
                if (k < 1) throw new Error("Invalid module size");
                var w = Math.round(i(b, _) / k), y = Math.round(i(b, D) / k), S = Math.floor((w + y) / 2) + 7;
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
              function B(b, _, D, p) {
                var k = [
                  {
                    x: Math.floor(b.x),
                    y: Math.floor(b.y)
                  }
                ], w = Math.abs(_.y - b.y) > Math.abs(_.x - b.x), y, S, M, I;
                w ? (y = Math.floor(b.y), S = Math.floor(b.x), M = Math.floor(_.y), I = Math.floor(_.x)) : (y = Math.floor(b.x), S = Math.floor(b.y), M = Math.floor(_.x), I = Math.floor(_.y));
                for (var L = Math.abs(M - y), N = Math.abs(I - S), q = Math.floor(-L / 2), R = y < M ? 1 : -1, H = S < I ? 1 : -1, O = true, Q = y, V = S; Q !== M + R; Q += R) {
                  var Y = w ? V : Q, j = w ? Q : V;
                  if (D.get(Y, j) !== O && (O = !O, k.push({
                    x: Y,
                    y: j
                  }), k.length === p + 1)) break;
                  if (q += N, q > 0) {
                    if (V === I) break;
                    V += H, q -= L;
                  }
                }
                for (var J = [], K = 0; K < p; K++) k[K] && k[K + 1] ? J.push(i(k[K], k[K + 1])) : J.push(0);
                return J;
              }
              function C(b, _, D, p) {
                var k, w = _.y - b.y, y = _.x - b.x, S = B(b, _, D, Math.ceil(p / 2)), M = B(b, {
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
                  var p = C(b, {
                    x: -1,
                    y: b.y
                  }, D, _.length), k = C(b, {
                    x: b.x,
                    y: -1
                  }, D, _.length), w = {
                    x: Math.max(0, b.x - b.y) - 1,
                    y: Math.max(0, b.y - b.x) - 1
                  }, y = C(b, w, D, _.length), S = {
                    x: Math.min(D.width, b.x + b.y) + 1,
                    y: Math.min(D.height, b.y + b.x) + 1
                  }, M = C(b, S, D, _.length), I = A(p, _), L = A(k, _), N = A(y, _), q = A(M, _), R = Math.sqrt(I.error * I.error + L.error * L.error + N.error * N.error + q.error * q.error), H = (I.averageSize + L.averageSize + N.averageSize + q.averageSize) / 4, O = (Math.pow(I.averageSize - H, 2) + Math.pow(L.averageSize - H, 2) + Math.pow(N.averageSize - H, 2) + Math.pow(q.averageSize - H, 2)) / H;
                  return R + O;
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
                for (var _ = [], D = [], p = [], k = [], w = function(Y) {
                  for (var j = 0, J = false, K = [
                    0,
                    0,
                    0,
                    0,
                    0
                  ], le = function(ae) {
                    var oe = b.get(ae, Y);
                    if (oe === J) j++;
                    else {
                      K = [
                        K[1],
                        K[2],
                        K[3],
                        K[4],
                        j
                      ], j = 1, J = oe;
                      var Ee = u(K) / 7, Ge = Math.abs(K[0] - Ee) < Ee && Math.abs(K[1] - Ee) < Ee && Math.abs(K[2] - 3 * Ee) < 3 * Ee && Math.abs(K[3] - Ee) < Ee && Math.abs(K[4] - Ee) < Ee && !oe, Z = u(K.slice(-3)) / 3, ee = Math.abs(K[2] - Z) < Z && Math.abs(K[3] - Z) < Z && Math.abs(K[4] - Z) < Z && oe;
                      if (Ge) {
                        var ie = ae - K[3] - K[4], Ce = ie - K[2], Fe = {
                          startX: Ce,
                          endX: ie,
                          y: Y
                        }, ye = D.filter(function(be) {
                          return Ce >= be.bottom.startX && Ce <= be.bottom.endX || ie >= be.bottom.startX && Ce <= be.bottom.endX || Ce <= be.bottom.startX && ie >= be.bottom.endX && K[2] / (be.bottom.endX - be.bottom.startX) < l && K[2] / (be.bottom.endX - be.bottom.startX) > r;
                        });
                        ye.length > 0 ? ye[0].bottom = Fe : D.push({
                          top: Fe,
                          bottom: Fe
                        });
                      }
                      if (ee) {
                        var Re = ae - K[4], Pe = Re - K[3], Fe = {
                          startX: Pe,
                          y: Y,
                          endX: Re
                        }, ye = k.filter(function(Ie) {
                          return Pe >= Ie.bottom.startX && Pe <= Ie.bottom.endX || Re >= Ie.bottom.startX && Pe <= Ie.bottom.endX || Pe <= Ie.bottom.startX && Re >= Ie.bottom.endX && K[2] / (Ie.bottom.endX - Ie.bottom.startX) < l && K[2] / (Ie.bottom.endX - Ie.bottom.startX) > r;
                        });
                        ye.length > 0 ? ye[0].bottom = Fe : k.push({
                          top: Fe,
                          bottom: Fe
                        });
                      }
                    }
                  }, ce = -1; ce <= b.width; ce++) le(ce);
                  _.push.apply(_, D.filter(function(ae) {
                    return ae.bottom.y !== Y && ae.bottom.y - ae.top.y >= 2;
                  })), D = D.filter(function(ae) {
                    return ae.bottom.y === Y;
                  }), p.push.apply(p, k.filter(function(ae) {
                    return ae.bottom.y !== Y;
                  })), k = k.filter(function(ae) {
                    return ae.bottom.y === Y;
                  });
                }, y = 0; y <= b.height; y++) w(y);
                _.push.apply(_, D.filter(function(Y) {
                  return Y.bottom.y - Y.top.y >= 2;
                })), p.push.apply(p, k);
                var S = _.filter(function(Y) {
                  return Y.bottom.y - Y.top.y >= 2;
                }).map(function(Y) {
                  var j = (Y.top.startX + Y.top.endX + Y.bottom.startX + Y.bottom.endX) / 4, J = (Y.top.y + Y.bottom.y + 1) / 2;
                  if (b.get(Math.round(j), Math.round(J))) {
                    var K = [
                      Y.top.endX - Y.top.startX,
                      Y.bottom.endX - Y.bottom.startX,
                      Y.bottom.y - Y.top.y + 1
                    ], le = u(K) / K.length, ce = F({
                      x: Math.round(j),
                      y: Math.round(J)
                    }, [
                      1,
                      1,
                      3,
                      1,
                      1
                    ], b);
                    return {
                      score: ce,
                      x: j,
                      y: J,
                      size: le
                    };
                  }
                }).filter(function(Y) {
                  return !!Y;
                }).sort(function(Y, j) {
                  return Y.score - j.score;
                }).map(function(Y, j, J) {
                  if (j > s) return null;
                  var K = J.filter(function(ce, ae) {
                    return j !== ae;
                  }).map(function(ce) {
                    return {
                      x: ce.x,
                      y: ce.y,
                      score: ce.score + Math.pow(ce.size - Y.size, 2) / Y.size,
                      size: ce.size
                    };
                  }).sort(function(ce, ae) {
                    return ce.score - ae.score;
                  });
                  if (K.length < 2) return null;
                  var le = Y.score + K[0].score + K[1].score;
                  return {
                    points: [
                      Y
                    ].concat(K.slice(0, 2)),
                    score: le
                  };
                }).filter(function(Y) {
                  return !!Y;
                }).sort(function(Y, j) {
                  return Y.score - j.score;
                });
                if (S.length === 0) return null;
                var M = d(S[0].points[0], S[0].points[1], S[0].points[2]), I = M.topRight, L = M.topLeft, N = M.bottomLeft, q = v(b, p, I, L, N), R = [];
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
                var H = m(b, I), O = m(b, L), Q = m(b, N), V = v(b, p, H, O, Q);
                return V && R.push({
                  alignmentPattern: {
                    x: V.alignmentPattern.x,
                    y: V.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: Q.x,
                    y: Q.y
                  },
                  topLeft: {
                    x: O.x,
                    y: O.y
                  },
                  topRight: {
                    x: H.x,
                    y: H.y
                  },
                  dimension: V.dimension
                }), R.length === 0 ? null : R;
              }
              n.locate = h;
              function v(b, _, D, p, k) {
                var w, y, S;
                try {
                  w = f(p, D, k, b), y = w.dimension, S = w.moduleSize;
                } catch {
                  return null;
                }
                var M = {
                  x: D.x - p.x + k.x,
                  y: D.y - p.y + k.y
                }, I = (i(p, k) + i(p, D)) / 2 / S, L = 1 - 3 / I, N = {
                  x: p.x + L * (M.x - p.x),
                  y: p.y + L * (M.y - p.y)
                }, q = _.map(function(H) {
                  var O = (H.top.startX + H.top.endX + H.bottom.startX + H.bottom.endX) / 4, Q = (H.top.y + H.bottom.y + 1) / 2;
                  if (b.get(Math.floor(O), Math.floor(Q))) {
                    var V = [
                      H.top.endX - H.top.startX,
                      H.bottom.endX - H.bottom.startX,
                      H.bottom.y - H.top.y + 1
                    ];
                    u(V) / V.length;
                    var Y = F({
                      x: Math.floor(O),
                      y: Math.floor(Q)
                    }, [
                      1,
                      1,
                      1
                    ], b), j = Y + i({
                      x: O,
                      y: Q
                    }, N);
                    return {
                      x: O,
                      y: Q,
                      score: j
                    };
                  }
                }).filter(function(H) {
                  return !!H;
                }).sort(function(H, O) {
                  return H.score - O.score;
                }), R = I >= 15 && q.length ? q[0] : N;
                return {
                  alignmentPattern: R,
                  dimension: y
                };
              }
            }
          ]).default;
        });
      })(el);
      var c8 = el.exports;
      const u8 = hc(c8);
      function Lo(x, e, t) {
        const n = x.slice();
        return n[44] = e[t], n;
      }
      function d8(x) {
        let e;
        return {
          c() {
            e = E("a"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', c(e, "class", "back-btn svelte-qzc8r5"), c(e, "href", "#/home");
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
      function E8(x) {
        let e, t, n;
        return {
          c() {
            e = E("button"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', c(e, "class", "back-btn svelte-qzc8r5");
          },
          m(o, s) {
            T(o, e, s), t || (n = U(e, "click", x[17]), t = true);
          },
          p: X,
          d(o) {
            o && P(e), t = false, n();
          }
        };
      }
      function f8(x) {
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
      function B8(x) {
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
      function C8(x) {
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
      function A8(x) {
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
      function F8(x) {
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
      function p8(x) {
        let e, t, n, o, s, r, l, i, u = x[13] ? "Saving\u2026" : "Join group", d, f, B, C, A, F;
        function m(b, _) {
          return b[12]?.name ? w8 : g8;
        }
        let h = m(x), v = h(x);
        return {
          c() {
            e = E("section"), t = E("p"), t.textContent = "Join group encounter?", n = g(), v.c(), o = g(), s = E("div"), r = E("button"), l = E("span"), l.textContent = "groups", i = g(), d = z(u), f = g(), B = E("button"), C = z("Cancel"), c(t, "class", "section-label svelte-qzc8r5"), c(l, "class", "material-icons svelte-qzc8r5"), c(r, "class", "btn-filled svelte-qzc8r5"), r.disabled = x[13], c(B, "class", "btn-text svelte-qzc8r5"), B.disabled = x[13], c(s, "class", "ongoing-actions svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(b, _) {
            T(b, e, _), a(e, t), a(e, n), v.m(e, null), a(e, o), a(e, s), a(s, r), a(r, l), a(r, i), a(r, d), a(s, f), a(s, B), a(B, C), A || (F = [
              U(r, "click", x[21]),
              U(B, "click", x[17])
            ], A = true);
          },
          p(b, _) {
            h === (h = m(b)) && v ? v.p(b, _) : (v.d(1), v = h(b), v && (v.c(), v.m(e, o))), _[0] & 8192 && u !== (u = b[13] ? "Saving\u2026" : "Join group") && G(d, u), _[0] & 8192 && (r.disabled = b[13]), _[0] & 8192 && (B.disabled = b[13]);
          },
          d(b) {
            b && P(e), v.d(), A = false, re(F);
          }
        };
      }
      function D8(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m = x[13] && No();
        return {
          c() {
            e = E("section"), t = E("p"), t.textContent = "Ongoing relationship?", n = g(), o = E("p"), o.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", s = g(), r = E("div"), l = E("button"), i = E("span"), i.textContent = "favorite", u = z(`
          Yes, ongoing`), d = g(), f = E("button"), B = z("No, one off"), C = g(), m && m.c(), c(t, "class", "section-label svelte-qzc8r5"), c(o, "class", "help-text svelte-qzc8r5"), c(i, "class", "material-icons svelte-qzc8r5"), c(l, "class", "btn-filled svelte-qzc8r5"), l.disabled = x[13], c(f, "class", "btn-outlined svelte-qzc8r5"), f.disabled = x[13], c(r, "class", "ongoing-actions svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(h, v) {
            T(h, e, v), a(e, t), a(e, n), a(e, o), a(e, s), a(e, r), a(r, l), a(l, i), a(l, u), a(r, d), a(r, f), a(f, B), a(e, C), m && m.m(e, null), A || (F = [
              U(l, "click", x[28]),
              U(f, "click", x[29])
            ], A = true);
          },
          p(h, v) {
            v[0] & 8192 && (l.disabled = h[13]), v[0] & 8192 && (f.disabled = h[13]), h[13] ? m || (m = No(), m.c(), m.m(e, null)) : m && (m.d(1), m = null);
          },
          d(h) {
            h && P(e), m && m.d(), A = false, re(F);
          }
        };
      }
      function m8(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D, p = Be(x[11]), k = [];
        for (let y = 0; y < p.length; y += 1) k[y] = zo(Lo(x, p, y));
        let w = x[13] && qo();
        return {
          c() {
            e = E("section"), t = E("p"), t.textContent = "Your partner's number", n = g(), o = E("p"), s = z(x[10]), r = g(), l = E("p"), l.textContent = "Ask your partner to confirm this matches their screen.", i = g(), u = E("section"), d = E("p"), d.textContent = "Let your partner scan your code", f = g(), B = E("div"), C = E("div"), A = g(), F = E("section"), m = E("p"), m.textContent = "What is your number?", h = g(), v = E("p"), v.textContent = "Tap the number shown on your screen above.", b = g(), _ = E("div");
            for (let y = 0; y < k.length; y += 1) k[y].c();
            D = g(), w && w.c(), c(t, "class", "section-label svelte-qzc8r5"), c(o, "class", "confirm-number svelte-qzc8r5"), c(l, "class", "help-text svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5"), c(d, "class", "section-label svelte-qzc8r5"), c(C, "class", "qr-inner svelte-qzc8r5"), c(B, "class", "qr-frame svelte-qzc8r5"), c(u, "class", "card pad svelte-qzc8r5"), c(m, "class", "section-label svelte-qzc8r5"), c(v, "class", "help-text svelte-qzc8r5"), c(_, "class", "choices svelte-qzc8r5"), c(F, "class", "card pad svelte-qzc8r5");
          },
          m(y, S) {
            T(y, e, S), a(e, t), a(e, n), a(e, o), a(o, s), a(e, r), a(e, l), T(y, i, S), T(y, u, S), a(u, d), a(u, f), a(u, B), a(B, C), C.innerHTML = x[3], T(y, A, S), T(y, F, S), a(F, m), a(F, h), a(F, v), a(F, b), a(F, _);
            for (let M = 0; M < k.length; M += 1) k[M] && k[M].m(_, null);
            a(F, D), w && w.m(F, null);
          },
          p(y, S) {
            if (S[0] & 1024 && G(s, y[10]), S[0] & 8 && (C.innerHTML = y[3]), S[0] & 272384) {
              p = Be(y[11]);
              let M;
              for (M = 0; M < p.length; M += 1) {
                const I = Lo(y, p, M);
                k[M] ? k[M].p(I, S) : (k[M] = zo(I), k[M].c(), k[M].m(_, null));
              }
              for (; M < k.length; M += 1) k[M].d(1);
              k.length = p.length;
            }
            y[13] ? w || (w = qo(), w.c(), w.m(F, null)) : w && (w.d(1), w = null);
          },
          d(y) {
            y && (P(e), P(i), P(u), P(A), P(F)), Ke(k, y), w && w.d();
          }
        };
      }
      function h8(x) {
        let e, t, n, o, s, r;
        return {
          c() {
            e = E("div"), t = E("video"), n = g(), o = E("canvas"), s = g(), r = E("div"), r.innerHTML = '<div class="scan-box svelte-qzc8r5"></div> <p class="scan-hint svelte-qzc8r5">Point at your partner&#39;s QR code</p>', t.playsInline = true, c(t, "class", "camera-video svelte-qzc8r5"), c(o, "class", "camera-canvas svelte-qzc8r5"), c(r, "class", "scan-overlay svelte-qzc8r5"), c(e, "class", "camera-wrap svelte-qzc8r5");
          },
          m(l, i) {
            T(l, e, i), a(e, t), x[25](t), a(e, n), a(e, o), x[26](o), a(e, s), a(e, r);
          },
          p: X,
          d(l) {
            l && P(e), x[25](null), x[26](null);
          }
        };
      }
      function v8(x) {
        let e, t, n, o, s, r, l, i, u, d = x[14] ? "check" : "content_copy", f, B, C = x[14] ? "Copied!" : "Copy as text", A, F, m, h, v, b, _, D = x[7] ? "Hide" : "Enter code manually", p, k, w, y, S, M = x[6] && Ro(x), I = x[9] && Ho(x);
        function L(H, O) {
          return H[3] ? P8 : y8;
        }
        let N = L(x), q = N(x), R = x[7] && Oo(x);
        return {
          c() {
            M && M.c(), e = g(), I && I.c(), t = g(), n = E("section"), o = E("p"), o.textContent = "Show this to your partner", s = g(), r = E("div"), q.c(), l = g(), i = E("button"), u = E("span"), f = z(d), B = g(), A = z(C), m = g(), h = E("div"), v = E("button"), v.innerHTML = `<span class="material-icons svelte-qzc8r5">qr_code_scanner</span>
        Scan Their Code`, b = g(), _ = E("button"), p = z(D), k = g(), R && R.c(), w = s0(), c(o, "class", "section-label svelte-qzc8r5"), c(r, "class", "qr-frame svelte-qzc8r5"), c(u, "class", "material-icons svelte-qzc8r5"), c(i, "class", "btn-copy svelte-qzc8r5"), i.disabled = F = !x[2], c(n, "class", "card pad svelte-qzc8r5"), c(v, "class", "btn-filled svelte-qzc8r5"), c(_, "class", "btn-text svelte-qzc8r5"), c(h, "class", "scan-actions svelte-qzc8r5");
          },
          m(H, O) {
            M && M.m(H, O), T(H, e, O), I && I.m(H, O), T(H, t, O), T(H, n, O), a(n, o), a(n, s), a(n, r), q.m(r, null), a(n, l), a(n, i), a(i, u), a(u, f), a(i, B), a(i, A), T(H, m, O), T(H, h, O), a(h, v), a(h, b), a(h, _), a(_, p), T(H, k, O), R && R.m(H, O), T(H, w, O), y || (S = [
              U(i, "click", x[20]),
              U(v, "click", x[15]),
              U(_, "click", x[22])
            ], y = true);
          },
          p(H, O) {
            H[6] ? M ? M.p(H, O) : (M = Ro(H), M.c(), M.m(e.parentNode, e)) : M && (M.d(1), M = null), H[9] ? I ? I.p(H, O) : (I = Ho(H), I.c(), I.m(t.parentNode, t)) : I && (I.d(1), I = null), N === (N = L(H)) && q ? q.p(H, O) : (q.d(1), q = N(H), q && (q.c(), q.m(r, null))), O[0] & 16384 && d !== (d = H[14] ? "check" : "content_copy") && G(f, d), O[0] & 16384 && C !== (C = H[14] ? "Copied!" : "Copy as text") && G(A, C), O[0] & 4 && F !== (F = !H[2]) && (i.disabled = F), O[0] & 128 && D !== (D = H[7] ? "Hide" : "Enter code manually") && G(p, D), H[7] ? R ? R.p(H, O) : (R = Oo(H), R.c(), R.m(w.parentNode, w)) : R && (R.d(1), R = null);
          },
          d(H) {
            H && (P(e), P(t), P(n), P(m), P(h), P(k), P(w)), M && M.d(H), I && I.d(H), q.d(), R && R.d(H), y = false, re(S);
          }
        };
      }
      function _8(x) {
        let e;
        return {
          c() {
            e = E("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-qzc8r5">check_circle</span> <p class="saved-title svelte-qzc8r5">Encounter recorded</p> <p class="muted svelte-qzc8r5">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-qzc8r5">View encounters</a>', c(e, "class", "card pad saved-card svelte-qzc8r5");
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
      function k8(x) {
        let e, t, n, o, s;
        return {
          c() {
            e = E("section"), t = E("p"), n = z(x[1]), o = g(), s = E("a"), s.textContent = "\u2190 Back", c(t, "class", "error svelte-qzc8r5"), c(s, "href", "#/home"), c(s, "class", "btn-text svelte-qzc8r5"), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(r, l) {
            T(r, e, l), a(e, t), a(t, n), a(e, o), a(e, s);
          },
          p(r, l) {
            l[0] & 2 && G(n, r[1]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function b8(x) {
        let e;
        return {
          c() {
            e = E("div"), e.innerHTML = '<div class="spinner svelte-qzc8r5"></div> <p class="muted svelte-qzc8r5">Generating your code\u2026</p>', c(e, "class", "center-fill svelte-qzc8r5");
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
      function g8(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "Unnamed group encounter", c(e, "class", "help-text svelte-qzc8r5");
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
      function w8(x) {
        let e, t = x[12].name + "", n;
        return {
          c() {
            e = E("p"), n = z(t), c(e, "class", "confirm-group-name svelte-qzc8r5");
          },
          m(o, s) {
            T(o, e, s), a(e, n);
          },
          p(o, s) {
            s[0] & 4096 && t !== (t = o[12].name + "") && G(n, t);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function No(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "Saving\u2026", c(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function zo(x) {
        let e, t = x[44] + "", n, o, s;
        function r() {
          return x[27](x[44]);
        }
        return {
          c() {
            e = E("button"), n = z(t), c(e, "class", "choice-btn svelte-qzc8r5"), e.disabled = x[13];
          },
          m(l, i) {
            T(l, e, i), a(e, n), o || (s = U(e, "click", r), o = true);
          },
          p(l, i) {
            x = l, i[0] & 2048 && t !== (t = x[44] + "") && G(n, t), i[0] & 8192 && (e.disabled = x[13]);
          },
          d(l) {
            l && P(e), o = false, s();
          }
        };
      }
      function qo(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "Saving\u2026", c(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(t, n) {
            T(t, e, n);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Ro(x) {
        let e, t, n, o;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "error_outline", n = g(), o = z(x[6]), c(t, "class", "material-icons svelte-qzc8r5"), c(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(s, r) {
            T(s, e, r), a(e, t), a(e, n), a(e, o);
          },
          p(s, r) {
            r[0] & 64 && G(o, s[6]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Ho(x) {
        let e, t, n, o;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "error_outline", n = g(), o = z(x[9]), c(t, "class", "material-icons svelte-qzc8r5"), c(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(s, r) {
            T(s, e, r), a(e, t), a(e, n), a(e, o);
          },
          p(s, r) {
            r[0] & 512 && G(o, s[9]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function y8(x) {
        let e;
        return {
          c() {
            e = E("p"), e.textContent = "Generating\u2026", c(e, "class", "muted svelte-qzc8r5");
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
      function P8(x) {
        let e;
        return {
          c() {
            e = E("div"), c(e, "class", "qr-inner svelte-qzc8r5");
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
        let e, t, n, o, s, r, l, i, u, d, f, B = x[9] && Uo(x);
        return {
          c() {
            e = E("section"), t = E("p"), t.textContent = "Paste their QR payload", n = g(), o = E("textarea"), s = g(), B && B.c(), r = g(), l = E("button"), i = z("Continue"), c(t, "class", "section-label svelte-qzc8r5"), c(o, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), c(o, "rows", "3"), c(o, "class", "svelte-qzc8r5"), c(l, "class", "btn-filled svelte-qzc8r5"), l.disabled = u = !x[8].trim(), c(e, "class", "card pad svelte-qzc8r5");
          },
          m(C, A) {
            T(C, e, A), a(e, t), a(e, n), a(e, o), se(o, x[8]), a(e, s), B && B.m(e, null), a(e, r), a(e, l), a(l, i), d || (f = [
              U(o, "input", x[23]),
              U(o, "keydown", x[24]),
              U(l, "click", x[16])
            ], d = true);
          },
          p(C, A) {
            A[0] & 256 && se(o, C[8]), C[9] ? B ? B.p(C, A) : (B = Uo(C), B.c(), B.m(e, r)) : B && (B.d(1), B = null), A[0] & 256 && u !== (u = !C[8].trim()) && (l.disabled = u);
          },
          d(C) {
            C && P(e), B && B.d(), d = false, re(f);
          }
        };
      }
      function Uo(x) {
        let e, t;
        return {
          c() {
            e = E("p"), t = z(x[9]), c(e, "class", "error-text svelte-qzc8r5");
          },
          m(n, o) {
            T(n, e, o), a(e, t);
          },
          p(n, o) {
            o[0] & 512 && G(t, n[9]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function T8(x) {
        let e, t, n, o, s, r, l, i;
        e = new c0({});
        function u(v, b) {
          return v[0] === "scanning" || v[0] === "confirm-group" ? E8 : d8;
        }
        let d = u(x), f = d(x);
        function B(v, b) {
          return v[0] === "scanning" ? F8 : v[0] === "confirm" || v[0] === "ongoing?" ? A8 : v[0] === "confirm-group" ? C8 : v[0] === "saved" ? B8 : f8;
        }
        let C = B(x), A = C(x);
        function F(v, b) {
          if (v[0] === "loading") return b8;
          if (v[0] === "error") return k8;
          if (v[0] === "saved") return _8;
          if (v[0] === "showQR") return v8;
          if (v[0] === "scanning") return h8;
          if (v[0] === "confirm") return m8;
          if (v[0] === "ongoing?") return D8;
          if (v[0] === "confirm-group") return p8;
        }
        let m = F(x), h = m && m(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), o = E("div"), f.c(), s = g(), r = E("h1"), A.c(), l = g(), h && h.c(), c(r, "class", "svelte-qzc8r5"), c(o, "class", "page-header svelte-qzc8r5"), c(n, "class", "svelte-qzc8r5");
          },
          m(v, b) {
            Me(e, v, b), T(v, t, b), T(v, n, b), a(n, o), f.m(o, null), a(o, s), a(o, r), A.m(r, null), a(n, l), h && h.m(n, null), i = true;
          },
          p(v, b) {
            d === (d = u(v)) && f ? f.p(v, b) : (f.d(1), f = d(v), f && (f.c(), f.m(o, s))), C !== (C = B(v)) && (A.d(1), A = C(v), A && (A.c(), A.m(r, null))), m === (m = F(v)) && h ? h.p(v, b) : (h && h.d(1), h = m && m(v), h && (h.c(), h.m(n, null)));
          },
          i(v) {
            i || (fe(e.$$.fragment, v), i = true);
          },
          o(v) {
            Ae(e.$$.fragment, v), i = false;
          },
          d(v) {
            v && (P(t), P(n)), Le(e, v), f.d(), A.d(), h && h.d();
          }
        };
      }
      function ix(x) {
        return 10 + (x[1] * 256 + x[2]) % 90;
      }
      function jo(x) {
        const e = /* @__PURE__ */ new Set([
          x
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((t, n) => t - n);
      }
      function S8(x, e, t) {
        let n = "loading", o = null, s = null, r = "", l = 0, i = "", u = null, d = null, f = null, B = null, C = null, A = false, F = false, m = "", h = null, v = null, b = null, _ = 0, D = [], p = null, k = "", w = null, y = "", S = false, M = false;
        Ue(async () => {
          if (!We()) {
            ue("/login");
            return;
          }
          try {
            const Z = zr(), ee = y0(), ie = Math.floor(Date.now() / 1e3);
            s = Z.privateKey, l = ix(Z.publicKey), t(2, r = `1|${P0(Z.publicKey)}|${ie}|${xe(ee)}`), t(3, i = await L0.toString(r, {
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
        }), Ot(() => {
          L();
        });
        async function I() {
          if (t(6, C = null), A = false, !navigator.mediaDevices?.getUserMedia) {
            t(6, C = "Camera not available. This page must be opened over HTTPS to use the camera."), t(0, n = "showQR");
            return;
          }
          t(0, n = "scanning"), await new Promise((Z) => setTimeout(Z, 50));
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
            }), t(4, u.srcObject = f, u), await u.play(), N();
          } catch (Z) {
            const ee = Z;
            t(6, C = ee.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + ee.message), L(), t(0, n = "showQR");
          }
        }
        function L() {
          B && (cancelAnimationFrame(B), B = null), f && (f.getTracks().forEach((Z) => Z.stop()), f = null), A = false;
        }
        function N() {
          if (!f || !u || u.readyState < 2) {
            B = requestAnimationFrame(N);
            return;
          }
          const Z = u.videoWidth, ee = u.videoHeight;
          if (!Z || !ee) {
            B = requestAnimationFrame(N);
            return;
          }
          t(5, d.width = Z, d), t(5, d.height = ee, d);
          const ie = d.getContext("2d");
          ie.drawImage(u, 0, 0, Z, ee);
          const Ce = ie.getImageData(0, 0, Z, ee), Fe = u8(Ce.data, Z, ee, {
            inversionAttempts: "dontInvert"
          });
          if (Fe && !A) {
            A = true, R(Fe.data);
            return;
          }
          B = requestAnimationFrame(N);
        }
        function q(Z) {
          const ee = Z.trim().split("|"), ie = parseInt(ee[0], 10);
          if (!isNaN(ie) && ie > 1) throw new Error("Your partner has a newer app version. Please update.");
          if (ee.length !== 4 || ee[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, Ce, , Fe] = ee;
          if (!Ce || Ce.length < 10) throw new Error("Invalid QR payload");
          if (!Fe || Fe.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: ps(Ce),
            contactIdBytes: Oe(Fe)
          };
        }
        function R(Z) {
          const ee = Z.trim();
          if (ee.startsWith("2|")) {
            try {
              const ie = Jx(ee);
              if (!ie) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - ie.timestamp > 86400) {
                A = false, B = requestAnimationFrame(N);
                return;
              }
              L(), t(12, p = ie), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), t(0, n = "confirm-group");
            } catch {
              A = false, B = requestAnimationFrame(N);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: ie, contactIdBytes: Ce } = q(Z);
            if (xe(Ce) === xe(y0())) {
              A = false, t(9, h = "You can't log an encounter with yourself."), t(0, n = "showQR");
              return;
            }
            L(), v = ie, b = Ce, t(10, _ = ix(ie)), t(11, D = jo(l)), t(0, n = "confirm");
          } catch {
            A = false, B = requestAnimationFrame(N);
          }
        }
        function H() {
          t(9, h = null);
          const Z = m.trim();
          try {
            if (Z.startsWith("2|")) {
              const ee = Jx(Z);
              if (!ee) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - ee.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              t(12, p = ee), k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), t(0, n = "confirm-group"), t(7, F = false);
            } else {
              const { ephemeralPubkeyBytes: ee, contactIdBytes: ie } = q(Z);
              if (xe(ie) === xe(y0())) throw new Error("You can't log an encounter with yourself.");
              v = ee, b = ie, t(10, _ = ix(ee)), t(11, D = jo(l)), t(0, n = "confirm"), t(7, F = false);
            }
          } catch (ee) {
            t(9, h = ee.message);
          }
        }
        function O() {
          L(), t(12, p = null), t(0, n = "showQR"), t(7, F = false), t(9, h = null), t(8, m = "");
        }
        async function Q(Z) {
          if (Z !== l) {
            t(9, h = "Wrong \u2014 that's not your number. Scan again."), t(0, n = "showQR"), t(7, F = false), t(8, m = ""), v = null, b = null;
            return;
          }
          const ee = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          w = qr(s, v), y = ee;
          const Fe = B0()?.encounters || [], ye = Nx(), Re = xe(b), Pe = Fe.some((ke) => xe(ke.theirContactId) === Re), be = ye.some((ke) => xe(ke.theirContactId) === Re && !ke.endedAt);
          Pe && !be ? t(0, n = "ongoing?") : await V(false);
        }
        async function V(Z) {
          t(13, S = true);
          try {
            const ee = y0(), ie = w0(w, ee, 0);
            await vs(xe(ie), y), Z ? await qa(w, b, y) : await Na(w, b, y), t(0, n = "saved");
          } catch (ee) {
            t(1, o = ee.message), t(0, n = "error");
          } finally {
            t(13, S = false);
          }
        }
        async function Y() {
          try {
            await navigator.clipboard.writeText(r), t(14, M = true), setTimeout(() => {
              t(14, M = false);
            }, 2e3);
          } catch {
          }
        }
        async function j() {
          t(13, S = true);
          try {
            const Z = Oe(p.groupTokenHex), ee = Oe(p.hostContactIdHex);
            await Ls(Z, k, false, ee, p.name), t(0, n = "saved");
          } catch (Z) {
            t(1, o = Z.message), t(0, n = "error");
          } finally {
            t(13, S = false);
          }
        }
        const J = () => {
          t(7, F = !F), t(9, h = null);
        };
        function K() {
          m = this.value, t(8, m);
        }
        const le = (Z) => Z.key === "Enter" && !Z.shiftKey && (Z.preventDefault(), H());
        function ce(Z) {
          wt[Z ? "unshift" : "push"](() => {
            u = Z, t(4, u);
          });
        }
        function ae(Z) {
          wt[Z ? "unshift" : "push"](() => {
            d = Z, t(5, d);
          });
        }
        return [
          n,
          o,
          r,
          i,
          u,
          d,
          C,
          F,
          m,
          h,
          _,
          D,
          p,
          S,
          M,
          I,
          H,
          O,
          Q,
          V,
          Y,
          j,
          J,
          K,
          le,
          ce,
          ae,
          (Z) => Q(Z),
          () => V(true),
          () => V(false)
        ];
      }
      class I8 extends ve {
        constructor(e) {
          super(), he(this, e, S8, T8, pe, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function M8(x) {
        let e, t, n, o, s, r, l = Ko(x[1].date) + "", i, u, d, f = x[0].rawTokenHex.slice(0, 12) + "", B, C, A, F, m, h, v, b, _, D, p = x[3] && Vo(x), k = x[7] && Go(x), w = x[5] && Yo(x);
        return {
          c() {
            p && p.c(), e = g(), k && k.c(), t = g(), n = E("section"), o = E("div"), o.innerHTML = '<span class="material-icons status-icon svelte-nknqao">check_circle_outline</span> <span class="status-label svelte-nknqao">One-time encounter</span>', s = g(), r = E("p"), i = z(l), u = g(), d = E("p"), B = z(f), C = z("\u2026"), A = g(), F = E("section"), m = E("div"), m.innerHTML = '<span class="material-icons privacy-icon svelte-nknqao">lock_outline</span> <p class="privacy-text svelte-nknqao">Your note is stored encrypted and never shared.</p>', h = g(), v = E("textarea"), b = g(), w && w.c(), c(o, "class", "status-row svelte-nknqao"), c(r, "class", "date svelte-nknqao"), c(d, "class", "token svelte-nknqao"), c(n, "class", "card pad svelte-nknqao"), c(m, "class", "privacy-row svelte-nknqao"), c(v, "placeholder", "Add a private note\u2026"), c(v, "rows", "5"), c(v, "class", "svelte-nknqao"), c(F, "class", "card pad svelte-nknqao");
          },
          m(y, S) {
            p && p.m(y, S), T(y, e, S), k && k.m(y, S), T(y, t, S), T(y, n, S), a(n, o), a(n, s), a(n, r), a(r, i), a(n, u), a(n, d), a(d, B), a(d, C), T(y, A, S), T(y, F, S), a(F, m), a(F, h), a(F, v), se(v, x[4]), a(F, b), w && w.m(F, null), _ || (D = [
              U(v, "input", x[13]),
              U(v, "input", x[8])
            ], _ = true);
          },
          p(y, S) {
            y[3] ? p ? p.p(y, S) : (p = Vo(y), p.c(), p.m(e.parentNode, e)) : p && (p.d(1), p = null), y[7] ? k ? k.p(y, S) : (k = Go(y), k.c(), k.m(t.parentNode, t)) : k && (k.d(1), k = null), S & 2 && l !== (l = Ko(y[1].date) + "") && G(i, l), S & 1 && f !== (f = y[0].rawTokenHex.slice(0, 12) + "") && G(B, f), S & 16 && se(v, y[4]), y[5] ? w ? w.p(y, S) : (w = Yo(y), w.c(), w.m(F, null)) : w && (w.d(1), w = null);
          },
          d(y) {
            y && (P(e), P(t), P(n), P(A), P(F)), p && p.d(y), k && k.d(y), w && w.d(), _ = false, re(D);
          }
        };
      }
      function L8(x) {
        let e;
        return {
          c() {
            e = E("section"), e.innerHTML = '<p class="muted svelte-nknqao">This encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-nknqao">\u2190 Back to encounters</a>', c(e, "class", "card pad svelte-nknqao");
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
      function Vo(x) {
        let e, t, n, o;
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "error_outline", n = g(), o = z(x[3]), c(t, "class", "material-icons svelte-nknqao"), c(e, "class", "toast error-toast svelte-nknqao");
          },
          m(s, r) {
            T(s, e, r), a(e, t), a(e, n), a(e, o);
          },
          p(s, r) {
            r & 8 && G(o, s[3]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function Go(x) {
        let e, t, n, o, s, r, l, i, u, d = x[6] ? "Saving\u2026" : "Save note", f, B, C;
        return {
          c() {
            e = E("section"), t = E("p"), t.textContent = "You have unsaved changes to your note.", n = g(), o = E("div"), s = E("button"), s.textContent = "Keep editing", r = g(), l = E("button"), l.textContent = "Discard", i = g(), u = E("button"), f = z(d), c(t, "class", "confirm-text svelte-nknqao"), c(s, "class", "btn-text svelte-nknqao"), c(l, "class", "btn-text danger svelte-nknqao"), c(u, "class", "btn-filled-sm svelte-nknqao"), u.disabled = x[6], c(o, "class", "confirm-actions svelte-nknqao"), c(e, "class", "card pad leave-confirm svelte-nknqao");
          },
          m(A, F) {
            T(A, e, F), a(e, t), a(e, n), a(e, o), a(o, s), a(o, r), a(o, l), a(o, i), a(o, u), a(u, f), B || (C = [
              U(s, "click", x[12]),
              U(l, "click", x[11]),
              U(u, "click", x[10])
            ], B = true);
          },
          p(A, F) {
            F & 64 && d !== (d = A[6] ? "Saving\u2026" : "Save note") && G(f, d), F & 64 && (u.disabled = A[6]);
          },
          d(A) {
            A && P(e), B = false, re(C);
          }
        };
      }
      function Yo(x) {
        let e, t, n = x[6] ? "Saving\u2026" : "Save", o, s, r;
        return {
          c() {
            e = E("div"), t = E("button"), o = z(n), c(t, "class", "btn-filled-sm svelte-nknqao"), t.disabled = x[6], c(e, "class", "note-actions svelte-nknqao");
          },
          m(l, i) {
            T(l, e, i), a(e, t), a(t, o), s || (r = U(t, "click", x[9]), s = true);
          },
          p(l, i) {
            i & 64 && n !== (n = l[6] ? "Saving\u2026" : "Save") && G(o, n), i & 64 && (t.disabled = l[6]);
          },
          d(l) {
            l && P(e), s = false, r();
          }
        };
      }
      function N8(x) {
        let e, t, n, o, s, r, l, i = x[2] ? "Not found" : "Encounter", u, d, f;
        e = new c0({});
        function B(F, m) {
          if (F[2]) return L8;
          if (F[1]) return M8;
        }
        let C = B(x), A = C && C(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), n = E("main"), o = E("div"), s = E("a"), s.innerHTML = '<span class="material-icons svelte-nknqao">arrow_back</span>', r = g(), l = E("h1"), u = z(i), d = g(), A && A.c(), c(s, "class", "back-btn svelte-nknqao"), c(s, "href", "#/encounters"), c(l, "class", "svelte-nknqao"), c(o, "class", "page-header svelte-nknqao"), c(n, "class", "svelte-nknqao");
          },
          m(F, m) {
            Me(e, F, m), T(F, t, m), T(F, n, m), a(n, o), a(o, s), a(o, r), a(o, l), a(l, u), a(n, d), A && A.m(n, null), f = true;
          },
          p(F, [m]) {
            (!f || m & 4) && i !== (i = F[2] ? "Not found" : "Encounter") && G(u, i), C === (C = B(F)) && A ? A.p(F, m) : (A && A.d(1), A = C && C(F), A && (A.c(), A.m(n, null)));
          },
          i(F) {
            f || (fe(e.$$.fragment, F), f = true);
          },
          o(F) {
            Ae(e.$$.fragment, F), f = false;
          },
          d(F) {
            F && (P(t), P(n)), Le(e, F), A && A.d();
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
      function z8(x, e, t) {
        let { params: n = {
          rawTokenHex: ""
        } } = e, o = null, s = false, r = null, l = "", i = false, u = false, d = false, f = null;
        Ue(() => {
          if (!We()) {
            ue("/login");
            return;
          }
          A(), document.addEventListener("click", C, {
            capture: true
          }), window.addEventListener("beforeunload", B);
        }), Ot(() => {
          document.removeEventListener("click", C, {
            capture: true
          }), window.removeEventListener("beforeunload", B);
        });
        function B(p) {
          i && (p.preventDefault(), p.returnValue = "");
        }
        function C(p) {
          if (!i) return;
          const k = p.target.closest('a[href^="#/"]');
          k && (p.preventDefault(), p.stopImmediatePropagation(), f = k.getAttribute("href").slice(1), t(7, d = true));
        }
        function A() {
          const p = n.rawTokenHex;
          if (t(1, o = Is().find((k) => xe(k.rawToken) === p) ?? null), !o) {
            t(2, s = true);
            return;
          }
          t(4, l = o.note ?? "");
        }
        function F() {
          t(5, i = l !== (o.note ?? ""));
        }
        async function m() {
          if (!(!i || u)) {
            t(6, u = true), t(3, r = null);
            try {
              const p = l.trim() || null;
              await za(n.rawTokenHex, {
                note: p
              }), A(), t(5, i = false);
            } catch (p) {
              t(3, r = p.message);
            } finally {
              t(6, u = false);
            }
          }
        }
        async function h() {
          await m(), r || b();
        }
        function v() {
          t(4, l = o.note ?? ""), t(5, i = false), b();
        }
        function b() {
          t(7, d = false), ue(f);
        }
        const _ = () => t(7, d = false);
        function D() {
          l = this.value, t(4, l);
        }
        return x.$$set = (p) => {
          "params" in p && t(0, n = p.params);
        }, [
          n,
          o,
          s,
          r,
          l,
          i,
          u,
          d,
          F,
          m,
          h,
          v,
          _,
          D
        ];
      }
      class q8 extends ve {
        constructor(e) {
          super(), he(this, e, z8, N8, pe, {
            params: 0
          });
        }
      }
      function Wo(x, e, t) {
        const n = x.slice();
        return n[9] = e[t], n;
      }
      function Qo(x, e, t) {
        const n = x.slice();
        return n[12] = e[t], n;
      }
      function Jo(x) {
        let e;
        return {
          c() {
            e = E("div"), c(e, "class", "dot svelte-bn0o41"), te(e, "filled", x[12] < x[0].length);
          },
          m(t, n) {
            T(t, e, n);
          },
          p(t, n) {
            n & 1 && te(e, "filled", t[12] < t[0].length);
          },
          d(t) {
            t && P(e);
          }
        };
      }
      function Xo(x) {
        let e, t, n;
        function o() {
          return x[6](x[9]);
        }
        return {
          c() {
            e = E("button"), e.textContent = `${x[9]}`, c(e, "class", "key svelte-bn0o41");
          },
          m(s, r) {
            T(s, e, r), t || (n = U(e, "click", o), t = true);
          },
          p(s, r) {
            x = s;
          },
          d(s) {
            s && P(e), t = false, n();
          }
        };
      }
      function R8(x) {
        let e, t, n, o, s, r, l, i, u, d, f, B, C, A, F, m, h, v, b, _, D, p, k = Be([
          0,
          1,
          2,
          3
        ]), w = [];
        for (let M = 0; M < 4; M += 1) w[M] = Jo(Qo(x, k, M));
        let y = Be([
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
        for (let M = 0; M < 9; M += 1) S[M] = Xo(Wo(x, y, M));
        return {
          c() {
            e = E("div"), t = E("div"), n = E("div"), n.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-bn0o41"/> <span class="brand-label"><span class="brand-peach svelte-bn0o41">Peach</span><span class="brand-safe svelte-bn0o41">Safe</span></span>', o = g(), s = E("p"), s.textContent = "Enter your PIN", r = g(), l = E("div");
            for (let M = 0; M < 4; M += 1) w[M].c();
            i = g(), u = E("p"), d = z(x[1]), f = g(), B = E("div");
            for (let M = 0; M < 9; M += 1) S[M].c();
            C = g(), A = E("button"), A.innerHTML = '<span class="material-icons svelte-bn0o41">backspace</span>', F = g(), m = E("button"), m.textContent = "0", h = g(), v = E("div"), b = g(), _ = E("button"), _.textContent = "Sign out", c(n, "class", "brand svelte-bn0o41"), c(s, "class", "prompt svelte-bn0o41"), c(l, "class", "dots svelte-bn0o41"), te(l, "shake", x[2]), c(u, "class", "error-msg svelte-bn0o41"), c(A, "class", "key key-del svelte-bn0o41"), c(A, "aria-label", "Delete"), c(m, "class", "key svelte-bn0o41"), c(B, "class", "numpad svelte-bn0o41"), c(_, "class", "signout-link svelte-bn0o41"), c(t, "class", "lock-card svelte-bn0o41"), c(e, "class", "overlay svelte-bn0o41"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-label", "Enter PIN to unlock");
          },
          m(M, I) {
            T(M, e, I), a(e, t), a(t, n), a(t, o), a(t, s), a(t, r), a(t, l);
            for (let L = 0; L < 4; L += 1) w[L] && w[L].m(l, null);
            a(t, i), a(t, u), a(u, d), a(t, f), a(t, B);
            for (let L = 0; L < 9; L += 1) S[L] && S[L].m(B, null);
            a(B, C), a(B, A), a(B, F), a(B, m), a(B, h), a(B, v), a(t, b), a(t, _), D || (p = [
              U(A, "click", x[4]),
              U(m, "click", x[7]),
              U(_, "click", x[5])
            ], D = true);
          },
          p(M, [I]) {
            if (I & 1) {
              k = Be([
                0,
                1,
                2,
                3
              ]);
              let L;
              for (L = 0; L < 4; L += 1) {
                const N = Qo(M, k, L);
                w[L] ? w[L].p(N, I) : (w[L] = Jo(N), w[L].c(), w[L].m(l, null));
              }
              for (; L < 4; L += 1) w[L].d(1);
            }
            if (I & 4 && te(l, "shake", M[2]), I & 2 && G(d, M[1]), I & 8) {
              y = Be([
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
                const N = Wo(M, y, L);
                S[L] ? S[L].p(N, I) : (S[L] = Xo(N), S[L].c(), S[L].m(B, C));
              }
              for (; L < 9; L += 1) S[L].d(1);
            }
          },
          i: X,
          o: X,
          d(M) {
            M && P(e), Ke(w, M), Ke(S, M), D = false, re(p);
          }
        };
      }
      function H8(x, e, t) {
        let n = "", o = "", s = false;
        function r(B) {
          n.length >= 4 || s || (t(1, o = ""), t(0, n += B), n.length === 4 && i());
        }
        function l() {
          s || (t(0, n = n.slice(0, -1)), t(1, o = ""));
        }
        async function i() {
          n === La() ? Vt.set(true) : (t(2, s = true), t(1, o = "Incorrect PIN"), await new Promise((B) => setTimeout(B, 600)), t(0, n = ""), t(2, s = false));
        }
        async function u() {
          await yx(), ue("/login");
        }
        return [
          n,
          o,
          s,
          r,
          l,
          u,
          (B) => r(String(B)),
          () => r("0")
        ];
      }
      class O8 extends ve {
        constructor(e) {
          super(), he(this, e, H8, R8, pe, {});
        }
      }
      function U8(x) {
        let e, t, n, o, s = x[7] !== null && !x[8] && x[11](x[0]), r, l, i, u;
        e = new Dl({
          props: {
            routes: x[10]
          }
        }), e.$on("routeLoaded", x[15]), n = new Qr({});
        let d = s && Zo(), f = x[9] === false && $o(x), B = x[5] && es(x);
        return {
          c() {
            Ne(e.$$.fragment), t = g(), Ne(n.$$.fragment), o = g(), d && d.c(), r = g(), f && f.c(), l = g(), B && B.c(), i = s0();
          },
          m(C, A) {
            Me(e, C, A), T(C, t, A), Me(n, C, A), T(C, o, A), d && d.m(C, A), T(C, r, A), f && f.m(C, A), T(C, l, A), B && B.m(C, A), T(C, i, A), u = true;
          },
          p(C, A) {
            A & 385 && (s = C[7] !== null && !C[8] && C[11](C[0])), s ? d ? A & 385 && fe(d, 1) : (d = Zo(), d.c(), fe(d, 1), d.m(r.parentNode, r)) : d && (W0(), Ae(d, 1, 1, () => {
              d = null;
            }), Q0()), C[9] === false ? f ? f.p(C, A) : (f = $o(C), f.c(), f.m(l.parentNode, l)) : f && (f.d(1), f = null), C[5] ? B ? B.p(C, A) : (B = es(C), B.c(), B.m(i.parentNode, i)) : B && (B.d(1), B = null);
          },
          i(C) {
            u || (fe(e.$$.fragment, C), fe(n.$$.fragment, C), fe(d), u = true);
          },
          o(C) {
            Ae(e.$$.fragment, C), Ae(n.$$.fragment, C), Ae(d), u = false;
          },
          d(C) {
            C && (P(t), P(o), P(r), P(l), P(i)), Le(e, C), Le(n, C), d && d.d(C), f && f.d(C), B && B.d(C);
          }
        };
      }
      function j8(x) {
        let e;
        return {
          c() {
            e = E("main"), e.textContent = "Loading\u2026", c(e, "class", "loading svelte-1kqo0f9");
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
      function V8(x) {
        let e, t, n, o, s, r;
        return {
          c() {
            e = E("main"), t = E("p"), n = z("Failed to load crypto module: "), o = z(x[4]), s = g(), r = E("p"), r.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", c(e, "class", "error svelte-1kqo0f9");
          },
          m(l, i) {
            T(l, e, i), a(e, t), a(t, n), a(t, o), a(e, s), a(e, r);
          },
          p(l, i) {
            i & 16 && G(o, l[4]);
          },
          i: X,
          o: X,
          d(l) {
            l && P(e);
          }
        };
      }
      function Zo(x) {
        let e, t;
        return e = new O8({}), {
          c() {
            Ne(e.$$.fragment);
          },
          m(n, o) {
            Me(e, n, o), t = true;
          },
          i(n) {
            t || (fe(e.$$.fragment, n), t = true);
          },
          o(n) {
            Ae(e.$$.fragment, n), t = false;
          },
          d(n) {
            Le(e, n);
          }
        };
      }
      function $o(x) {
        let e, t, n, o, s;
        function r(u, d) {
          return u[2] ? Y8 : G8;
        }
        let l = r(x), i = l(x);
        return {
          c() {
            e = E("div"), t = E("span"), t.textContent = "mail_outline", n = g(), o = E("span"), o.textContent = "Please verify your email address. Check your inbox for a verification link.", s = g(), i.c(), c(t, "class", "material-icons svelte-1kqo0f9"), c(o, "class", "verify-text svelte-1kqo0f9"), c(e, "class", "verify-banner svelte-1kqo0f9");
          },
          m(u, d) {
            T(u, e, d), a(e, t), a(e, n), a(e, o), a(e, s), i.m(e, null);
          },
          p(u, d) {
            l === (l = r(u)) && i ? i.p(u, d) : (i.d(1), i = l(u), i && (i.c(), i.m(e, null)));
          },
          d(u) {
            u && P(e), i.d();
          }
        };
      }
      function G8(x) {
        let e, t = x[1] ? "Sending\u2026" : "Resend", n, o, s;
        return {
          c() {
            e = E("button"), n = z(t), c(e, "class", "resend-btn svelte-1kqo0f9"), e.disabled = x[1];
          },
          m(r, l) {
            T(r, e, l), a(e, n), o || (s = U(e, "click", x[12]), o = true);
          },
          p(r, l) {
            l & 2 && t !== (t = r[1] ? "Sending\u2026" : "Resend") && G(n, t), l & 2 && (e.disabled = r[1]);
          },
          d(r) {
            r && P(e), o = false, s();
          }
        };
      }
      function Y8(x) {
        let e;
        return {
          c() {
            e = E("span"), e.textContent = "Sent!", c(e, "class", "resend-sent svelte-1kqo0f9");
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
      function es(x) {
        let e, t, n, o, s, r, l, i = Math.floor(x[6] / 60) + "", u, d, f = String(x[6] % 60).padStart(2, "0") + "", B, C, A, F, m, h, v, b, _;
        return {
          c() {
            e = E("div"), t = E("div"), n = E("h2"), n.textContent = "Session expiring", o = g(), s = E("p"), r = z(`You'll be logged out in
          `), l = E("strong"), u = z(i), d = z(":"), B = z(f), C = z(`
          due to inactivity.`), A = g(), F = E("div"), m = E("button"), m.textContent = "Stay logged in", h = g(), v = E("button"), v.textContent = "Log out now", c(n, "id", "idle-title"), c(n, "class", "svelte-1kqo0f9"), c(s, "class", "svelte-1kqo0f9"), c(m, "class", "btn-primary svelte-1kqo0f9"), c(v, "class", "btn-ghost svelte-1kqo0f9"), c(F, "class", "idle-actions svelte-1kqo0f9"), c(t, "class", "idle-dialog svelte-1kqo0f9"), c(e, "class", "idle-overlay svelte-1kqo0f9"), c(e, "role", "dialog"), c(e, "aria-modal", "true"), c(e, "aria-labelledby", "idle-title");
          },
          m(D, p) {
            T(D, e, p), a(e, t), a(t, n), a(t, o), a(t, s), a(s, r), a(s, l), a(l, u), a(l, d), a(l, B), a(s, C), a(t, A), a(t, F), a(F, m), a(F, h), a(F, v), b || (_ = [
              U(m, "click", x[13]),
              U(v, "click", x[14])
            ], b = true);
          },
          p(D, p) {
            p & 64 && i !== (i = Math.floor(D[6] / 60) + "") && G(u, i), p & 64 && f !== (f = String(D[6] % 60).padStart(2, "0") + "") && G(B, f);
          },
          d(D) {
            D && P(e), b = false, re(_);
          }
        };
      }
      function K8(x) {
        let e, t, n, o;
        const s = [
          V8,
          j8,
          U8
        ], r = [];
        function l(i, u) {
          return i[4] ? 0 : i[3] ? 2 : 1;
        }
        return e = l(x), t = r[e] = s[e](x), {
          c() {
            t.c(), n = s0();
          },
          m(i, u) {
            r[e].m(i, u), T(i, n, u), o = true;
          },
          p(i, [u]) {
            let d = e;
            e = l(i), e === d ? r[e].p(i, u) : (W0(), Ae(r[d], 1, 1, () => {
              r[d] = null;
            }), Q0(), t = r[e], t ? t.p(i, u) : (t = r[e] = s[e](i), t.c()), fe(t, 1), t.m(n.parentNode, n));
          },
          i(i) {
            o || (fe(t), o = true);
          },
          o(i) {
            Ae(t), o = false;
          },
          d(i) {
            i && P(n), r[e].d(i);
          }
        };
      }
      const ts = 120;
      function W8(x, e, t) {
        let n, o, s;
        je(x, Mx, (p) => t(7, n = p)), je(x, Vt, (p) => t(8, o = p)), je(x, M0, (p) => t(9, s = p));
        const r = {
          "/": va,
          "/how-it-works": ba,
          "/login": si,
          "/signup": ii,
          "/home": fi,
          "/encounter-exchange": I8,
          "/encounters": ki,
          "/encounters/:rawTokenHex": q8,
          "/relationships/:rawTokenHex": Ri,
          "/groups/:tokenHex": D9,
          "/results": $i,
          "/change-password": xc,
          "/change-email": rc,
          "/verify-email/:token": Ec,
          "/alerts": Dc,
          "/settings": x8,
          "/settings/2fa-setup": i8
        }, l = /* @__PURE__ */ new Set([
          "/",
          "/login",
          "/signup",
          "/home",
          "/encounter-exchange",
          "/how-it-works"
        ]);
        function i(p) {
          return We() && !l.has(p) && !p.startsWith("/verify-email/");
        }
        let u = "/", d = false, f = false;
        async function B() {
          t(1, d = true);
          try {
            await xa(), t(2, f = true);
          } catch {
          } finally {
            t(1, d = false);
          }
        }
        let C = false, A = null, F = false, m = ts, h = null;
        function v() {
          t(6, m = ts), clearInterval(h), h = setInterval(() => {
            t(6, m -= 1), m <= 0 && clearInterval(h);
          }, 1e3);
        }
        function b() {
          t(5, F = false), clearInterval(h), Da();
        }
        async function _() {
          t(5, F = false), clearInterval(h), Cx(), await yx(), ue("/login");
        }
        function D(p) {
          const k = p.detail.location;
          t(0, u = k), window.scrollTo(0, 0), !(k === "/" || k === "/login" || k.startsWith("/signup")) && We() ? pa({
            onWarnCallback: () => {
              t(5, F = true), v();
            },
            onExpiredCallback: _
          }) : (Cx(), t(5, F = false), clearInterval(h));
        }
        return Ue(async () => {
          try {
            await Nr(), t(3, C = true);
          } catch (p) {
            t(4, A = p.message);
          }
        }), [
          u,
          d,
          f,
          C,
          A,
          F,
          m,
          n,
          o,
          s,
          r,
          i,
          B,
          b,
          _,
          D
        ];
      }
      class Q8 extends ve {
        constructor(e) {
          super(), he(this, e, W8, K8, pe, {});
        }
      }
      "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
      new Q8({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
