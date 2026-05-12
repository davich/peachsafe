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
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
        new MutationObserver((s) => {
          for (const o of s) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function n(s) {
          const o = {};
          return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function r(s) {
          if (s.ep) return;
          s.ep = true;
          const o = n(s);
          fetch(s.href, o);
        }
      })();
      const te = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, me = globalThis, Sn = "10.52.0";
      function On() {
        return ds(me), me;
      }
      function ds(t) {
        const e = t.__SENTRY__ = t.__SENTRY__ || {};
        return e.version = e.version || Sn, e[Sn] = e[Sn] || {};
      }
      function f0(t, e, n = me) {
        const r = n.__SENTRY__ = n.__SENTRY__ || {}, s = r[Sn] = r[Sn] || {};
        return s[t] || (s[t] = e());
      }
      const Ld = [
        "debug",
        "info",
        "warn",
        "error",
        "log",
        "assert",
        "trace"
      ], Md = "Sentry Logger ", zr = {};
      function Hn(t) {
        if (!("console" in me)) return t();
        const e = me.console, n = {}, r = Object.keys(zr);
        r.forEach((s) => {
          const o = zr[s];
          n[s] = e[s], e[s] = o;
        });
        try {
          return t();
        } finally {
          r.forEach((s) => {
            e[s] = n[s];
          });
        }
      }
      function Od() {
        Yo().enabled = true;
      }
      function Hd() {
        Yo().enabled = false;
      }
      function Zl() {
        return Yo().enabled;
      }
      function qd(...t) {
        Vo("log", ...t);
      }
      function zd(...t) {
        Vo("warn", ...t);
      }
      function Ud(...t) {
        Vo("error", ...t);
      }
      function Vo(t, ...e) {
        te && Zl() && Hn(() => {
          me.console[t](`${Md}[${t}]:`, ...e);
        });
      }
      function Yo() {
        return te ? f0("loggerSettings", () => ({
          enabled: false
        })) : {
          enabled: false
        };
      }
      const Q = {
        enable: Od,
        disable: Hd,
        isEnabled: Zl,
        log: qd,
        warn: zd,
        error: Ud
      }, $l = 50, In = "?", qi = /\(error: (.*)\)/, zi = /captureMessage|captureException/;
      function ec(...t) {
        const e = t.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
        return (n, r = 0, s = 0) => {
          const o = [], i = n.split(`
`);
          for (let a = r; a < i.length; a++) {
            let x = i[a];
            x.length > 1024 && (x = x.slice(0, 1024));
            const l = qi.test(x) ? x.replace(qi, "$1") : x;
            if (!l.includes("Error: ")) {
              for (const u of e) {
                const f = u(l);
                if (f) {
                  o.push(f);
                  break;
                }
              }
              if (o.length >= $l + s) break;
            }
          }
          return Gd(o.slice(s));
        };
      }
      function jd(t) {
        return Array.isArray(t) ? ec(...t) : t;
      }
      function Gd(t) {
        if (!t.length) return [];
        const e = Array.from(t);
        return /sentryWrapped/.test(hr(e).function || "") && e.pop(), e.reverse(), zi.test(hr(e).function || "") && (e.pop(), zi.test(hr(e).function || "") && e.pop()), e.slice(0, $l).map((n) => ({
          ...n,
          filename: n.filename || hr(e).filename,
          function: n.function || In
        }));
      }
      function hr(t) {
        return t[t.length - 1] || {};
      }
      const Ls = "<anonymous>";
      function Kt(t) {
        try {
          return !t || typeof t != "function" ? Ls : t.name || Ls;
        } catch {
          return Ls;
        }
      }
      function Ui(t) {
        const e = t.exception;
        if (e) {
          const n = [];
          try {
            return e.values.forEach((r) => {
              r.stacktrace.frames && n.push(...r.stacktrace.frames);
            }), n;
          } catch {
            return;
          }
        }
      }
      function tc(t) {
        return "__v_isVNode" in t && t.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
      }
      const F0 = {}, ji = {};
      function mn(t, e) {
        return F0[t] = F0[t] || [], F0[t].push(e), () => {
          const n = F0[t];
          if (n) {
            const r = n.indexOf(e);
            r !== -1 && n.splice(r, 1);
          }
        };
      }
      function hn(t, e) {
        if (!ji[t]) {
          ji[t] = true;
          try {
            e();
          } catch (n) {
            te && Q.error(`Error while instrumenting ${t}`, n);
          }
        }
      }
      function Ft(t, e) {
        const n = t && F0[t];
        if (n) for (const r of n) try {
          r(e);
        } catch (s) {
          te && Q.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Kt(r)}
Error:`, s);
        }
      }
      let Ms = null;
      function nc(t) {
        const e = "error";
        mn(e, t), hn(e, Wd);
      }
      function Wd() {
        Ms = me.onerror, me.onerror = function(t, e, n, r, s) {
          return Ft("error", {
            column: r,
            error: s,
            line: n,
            msg: t,
            url: e
          }), Ms ? Ms.apply(this, arguments) : false;
        }, me.onerror.__SENTRY_INSTRUMENTED__ = true;
      }
      let Os = null;
      function rc(t) {
        const e = "unhandledrejection";
        mn(e, t), hn(e, Vd);
      }
      function Vd() {
        Os = me.onunhandledrejection, me.onunhandledrejection = function(t) {
          return Ft("unhandledrejection", t), Os ? Os.apply(this, arguments) : true;
        }, me.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
      }
      const sc = Object.prototype.toString;
      function fs(t) {
        switch (sc.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
          case "[object WebAssembly.Exception]":
            return true;
          default:
            return Jt(t, Error);
        }
      }
      function E0(t, e) {
        return sc.call(t) === `[object ${e}]`;
      }
      function oc(t) {
        return E0(t, "ErrorEvent");
      }
      function Gi(t) {
        return E0(t, "DOMError");
      }
      function Yd(t) {
        return E0(t, "DOMException");
      }
      function Wt(t) {
        return E0(t, "String");
      }
      function Ko(t) {
        return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
      }
      function r0(t) {
        return t === null || Ko(t) || typeof t != "object" && typeof t != "function";
      }
      function I0(t) {
        return E0(t, "Object");
      }
      function Es(t) {
        return typeof Event < "u" && Jt(t, Event);
      }
      function Kd(t) {
        return typeof Element < "u" && Jt(t, Element);
      }
      function Jd(t) {
        return E0(t, "RegExp");
      }
      function Y0(t) {
        return !!(t?.then && typeof t.then == "function");
      }
      function Xd(t) {
        return I0(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
      }
      function Jt(t, e) {
        try {
          return t instanceof e;
        } catch {
          return false;
        }
      }
      function ic(t) {
        return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue || t.__v_isVNode));
      }
      function Jo(t) {
        return typeof Request < "u" && Jt(t, Request);
      }
      const Xo = me, Qd = 80;
      function Ze(t, e = {}) {
        if (!t) return "<unknown>";
        try {
          let n = t;
          const r = 5, s = [];
          let o = 0, i = 0;
          const a = " > ", x = a.length;
          let l;
          const u = Array.isArray(e) ? e : e.keyAttrs, f = !Array.isArray(e) && e.maxStringLength || Qd;
          for (; n && o++ < r && (l = Zd(n, u), !(l === "html" || o > 1 && i + s.length * x + l.length >= f)); ) s.push(l), i += l.length, n = n.parentNode;
          return s.reverse().join(a);
        } catch {
          return "<unknown>";
        }
      }
      function Zd(t, e) {
        const n = t, r = [];
        if (!n?.tagName) return "";
        if (Xo.HTMLElement && n instanceof HTMLElement && n.dataset) {
          if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
          if (n.dataset.sentryElement) return n.dataset.sentryElement;
        }
        r.push(n.tagName.toLowerCase());
        const s = e?.length ? e.filter((o) => n.getAttribute(o)).map((o) => [
          o,
          n.getAttribute(o)
        ]) : null;
        if (s?.length) s.forEach((o) => {
          r.push(`[${o[0]}="${o[1]}"]`);
        });
        else {
          n.id && r.push(`#${n.id}`);
          const o = n.className;
          if (o && Wt(o)) {
            const i = o.split(/\s+/);
            for (const a of i) r.push(`.${a}`);
          }
        }
        for (const o of [
          "aria-label",
          "type",
          "name",
          "title",
          "alt"
        ]) {
          const i = n.getAttribute(o);
          i && r.push(`[${o}="${i}"]`);
        }
        return r.join("");
      }
      function K0() {
        try {
          return Xo.document.location.href;
        } catch {
          return "";
        }
      }
      function ac(t, e = 5) {
        if (!Xo.HTMLElement) return null;
        let n = t;
        for (let r = 0; r < e; r++) {
          if (!n) return null;
          if (n instanceof HTMLElement) {
            if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
            if (n.dataset.sentryElement) return n.dataset.sentryElement;
          }
          n = n.parentNode;
        }
        return null;
      }
      function pt(t, e, n) {
        if (!(e in t)) return;
        const r = t[e];
        if (typeof r != "function") return;
        const s = n(r);
        typeof s == "function" && xc(s, r);
        try {
          t[e] = s;
        } catch {
          te && Q.log(`Failed to replace method "${e}" in object`, t);
        }
      }
      function ct(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: true,
            configurable: true
          });
        } catch {
          te && Q.log(`Failed to add non-enumerable property "${String(e)}" to object`, t);
        }
      }
      function xc(t, e) {
        try {
          const n = e.prototype || {};
          t.prototype = e.prototype = n, ct(t, "__sentry_original__", e);
        } catch {
        }
      }
      function Qo(t) {
        return t.__sentry_original__;
      }
      function lc(t) {
        if (fs(t)) return {
          message: t.message,
          name: t.name,
          stack: t.stack,
          ...Vi(t)
        };
        if (Es(t)) {
          const e = {
            type: t.type,
            target: Wi(t.target),
            currentTarget: Wi(t.currentTarget),
            ...Vi(t)
          };
          return typeof CustomEvent < "u" && Jt(t, CustomEvent) && (e.detail = t.detail), e;
        } else return t;
      }
      function Wi(t) {
        try {
          return Kd(t) ? Ze(t) : Object.prototype.toString.call(t);
        } catch {
          return "<unknown>";
        }
      }
      function Vi(t) {
        return typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t)) : {};
      }
      function $d(t) {
        const e = Object.keys(lc(t));
        return e.sort(), e[0] ? e.join(", ") : "[object has no keys]";
      }
      let Wn;
      function J0(t) {
        if (Wn !== void 0) return Wn ? Wn(t) : t();
        const e = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"), n = me;
        return e in n && typeof n[e] == "function" ? (Wn = n[e], Wn(t)) : (Wn = null, t());
      }
      function cn() {
        return J0(() => Math.random());
      }
      function X0() {
        return J0(() => Date.now());
      }
      function lo(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`;
      }
      function Yi(t, e) {
        if (!Array.isArray(t)) return "";
        const n = [];
        for (let r = 0; r < t.length; r++) {
          const s = t[r];
          try {
            ic(s) ? n.push(tc(s)) : n.push(String(s));
          } catch {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function D0(t, e, n = false) {
        return Wt(t) ? Jd(e) ? e.test(t) : Wt(e) ? n ? t === e : t.includes(e) : typeof e == "function" ? e(t) : false : false;
      }
      function un(t, e = [], n = false) {
        return e.some((r) => D0(t, r, n));
      }
      function ef() {
        const t = me;
        return t.crypto || t.msCrypto;
      }
      let Hs;
      function tf() {
        return cn() * 16;
      }
      function Dt(t = ef()) {
        try {
          if (t?.randomUUID) return J0(() => t.randomUUID()).replace(/-/g, "");
        } catch {
        }
        return Hs || (Hs = "10000000100040008000" + 1e11), Hs.replace(/[018]/g, (e) => (e ^ (tf() & 15) >> e / 4).toString(16));
      }
      function cc(t) {
        return t.exception?.values?.[0];
      }
      function bn(t) {
        const { message: e, event_id: n } = t;
        if (e) return e;
        const r = cc(t);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
      }
      function co(t, e, n) {
        const r = t.exception = t.exception || {}, s = r.values = r.values || [], o = s[0] = s[0] || {};
        o.value || (o.value = e || ""), o.type || (o.type = "Error");
      }
      function s0(t, e) {
        const n = cc(t);
        if (!n) return;
        const r = {
          type: "generic",
          handled: true
        }, s = n.mechanism;
        if (n.mechanism = {
          ...r,
          ...s,
          ...e
        }, e && "data" in e) {
          const o = {
            ...s?.data,
            ...e.data
          };
          n.mechanism.data = o;
        }
      }
      function Ki(t) {
        if (nf(t)) return true;
        try {
          ct(t, "__sentry_captured__", true);
        } catch {
        }
        return false;
      }
      function nf(t) {
        try {
          return t.__sentry_captured__;
        } catch {
        }
      }
      const uc = 1e3;
      function qn() {
        return X0() / uc;
      }
      function rf() {
        const { performance: t } = me;
        if (!t?.now || !t.timeOrigin) return qn;
        const e = t.timeOrigin;
        return () => (e + J0(() => t.now())) / uc;
      }
      let Ji;
      function Ye() {
        return (Ji ?? (Ji = rf()))();
      }
      let qs = null;
      function sf() {
        const { performance: t } = me;
        if (!t?.now) return;
        const e = 3e5, n = J0(() => t.now()), r = X0(), s = t.timeOrigin;
        if (typeof s == "number" && Math.abs(s + n - r) < e) return s;
        const o = t.timing?.navigationStart;
        return typeof o == "number" && Math.abs(o + n - r) < e ? o : r - n;
      }
      function rt() {
        return qs === null && (qs = sf()), qs;
      }
      function of(t) {
        const e = Ye(), n = {
          sid: Dt(),
          init: true,
          timestamp: e,
          started: e,
          duration: 0,
          status: "ok",
          errors: 0,
          ignoreDuration: false,
          toJSON: () => xf(n)
        };
        return t && o0(n, t), n;
      }
      function o0(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Ye(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : Dt()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
          const n = t.timestamp - t.started;
          t.duration = n >= 0 ? n : 0;
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status);
      }
      function af(t, e) {
        let n = {};
        t.status === "ok" && (n = {
          status: "exited"
        }), o0(t, n);
      }
      function xf(t) {
        return {
          sid: `${t.sid}`,
          init: t.init,
          started: new Date(t.started * 1e3).toISOString(),
          timestamp: new Date(t.timestamp * 1e3).toISOString(),
          status: t.status,
          errors: t.errors,
          did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
          duration: t.duration,
          abnormal_mechanism: t.abnormal_mechanism,
          attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
          }
        };
      }
      function Q0(t, e, n = 2) {
        if (!e || typeof e != "object" || n <= 0) return e;
        if (t && Object.keys(e).length === 0) return t;
        const r = {
          ...t
        };
        for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (r[s] = Q0(r[s], e[s], n - 1));
        return r;
      }
      function Xt() {
        return Dt();
      }
      function Vt() {
        return Dt().substring(16);
      }
      const uo = "_sentrySpan";
      function N0(t, e) {
        e ? ct(t, uo, e) : delete t[uo];
      }
      function Ur(t) {
        return t[uo];
      }
      const lf = 100;
      class Qt {
        constructor() {
          this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
            traceId: Xt(),
            sampleRand: cn()
          };
        }
        clone() {
          const e = new Qt();
          return e._breadcrumbs = [
            ...this._breadcrumbs
          ], e._tags = {
            ...this._tags
          }, e._attributes = {
            ...this._attributes
          }, e._extra = {
            ...this._extra
          }, e._contexts = {
            ...this._contexts
          }, this._contexts.flags && (e._contexts.flags = {
            values: [
              ...this._contexts.flags.values
            ]
          }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [
            ...this._eventProcessors
          ], e._attachments = [
            ...this._attachments
          ], e._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
          }, e._propagationContext = {
            ...this._propagationContext
          }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, N0(e, Ur(this)), e;
        }
        setClient(e) {
          this._client = e;
        }
        setLastEventId(e) {
          this._lastEventId = e;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(e) {
          this._scopeListeners.push(e);
        }
        addEventProcessor(e) {
          return this._eventProcessors.push(e), this;
        }
        setUser(e) {
          return this._user = e || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
          }, this._session && o0(this._session, {
            user: e
          }), this._notifyScopeListeners(), this;
        }
        getUser() {
          return this._user;
        }
        setConversationId(e) {
          return this._conversationId = e || void 0, this._notifyScopeListeners(), this;
        }
        setTags(e) {
          return this._tags = {
            ...this._tags,
            ...e
          }, this._notifyScopeListeners(), this;
        }
        setTag(e, n) {
          return this.setTags({
            [e]: n
          });
        }
        setAttributes(e) {
          return this._attributes = {
            ...this._attributes,
            ...e
          }, this._notifyScopeListeners(), this;
        }
        setAttribute(e, n) {
          return this.setAttributes({
            [e]: n
          });
        }
        removeAttribute(e) {
          return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this;
        }
        setExtras(e) {
          return this._extra = {
            ...this._extra,
            ...e
          }, this._notifyScopeListeners(), this;
        }
        setExtra(e, n) {
          return this._extra = {
            ...this._extra,
            [e]: n
          }, this._notifyScopeListeners(), this;
        }
        setFingerprint(e) {
          return this._fingerprint = e, this._notifyScopeListeners(), this;
        }
        setLevel(e) {
          return this._level = e, this._notifyScopeListeners(), this;
        }
        setTransactionName(e) {
          return this._transactionName = e, this._notifyScopeListeners(), this;
        }
        setContext(e, n) {
          return n === null ? delete this._contexts[e] : this._contexts[e] = n, this._notifyScopeListeners(), this;
        }
        setSession(e) {
          return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
        }
        getSession() {
          return this._session;
        }
        update(e) {
          if (!e) return this;
          const n = typeof e == "function" ? e(this) : e, r = n instanceof Qt ? n.getScopeData() : I0(n) ? e : void 0, { tags: s, attributes: o, extra: i, user: a, contexts: x, level: l, fingerprint: u = [], propagationContext: f, conversationId: p } = r || {};
          return this._tags = {
            ...this._tags,
            ...s
          }, this._attributes = {
            ...this._attributes,
            ...o
          }, this._extra = {
            ...this._extra,
            ...i
          }, this._contexts = {
            ...this._contexts,
            ...x
          }, a && Object.keys(a).length && (this._user = a), l && (this._level = l), u.length && (this._fingerprint = u), f && (this._propagationContext = f), p && (this._conversationId = p), this;
        }
        clear() {
          return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, N0(this, void 0), this._attachments = [], this.setPropagationContext({
            traceId: Xt(),
            sampleRand: cn()
          }), this._notifyScopeListeners(), this;
        }
        addBreadcrumb(e, n) {
          const r = typeof n == "number" ? n : lf;
          if (r <= 0) return this;
          const s = {
            timestamp: qn(),
            ...e,
            message: e.message ? lo(e.message, 2048) : e.message
          };
          return this._breadcrumbs.push(s), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return this._breadcrumbs = [], this._notifyScopeListeners(), this;
        }
        addAttachment(e) {
          return this._attachments.push(e), this;
        }
        clearAttachments() {
          return this._attachments = [], this;
        }
        getScopeData() {
          return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            attributes: this._attributes,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: Ur(this),
            conversationId: this._conversationId
          };
        }
        setSDKProcessingMetadata(e) {
          return this._sdkProcessingMetadata = Q0(this._sdkProcessingMetadata, e, 2), this;
        }
        setPropagationContext(e) {
          return this._propagationContext = e, this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(e, n) {
          const r = n?.event_id || Dt();
          if (!this._client) return te && Q.warn("No client configured on scope - will not capture exception!"), r;
          const s = new Error("Sentry syntheticException");
          return this._client.captureException(e, {
            originalException: e,
            syntheticException: s,
            ...n,
            event_id: r
          }, this), r;
        }
        captureMessage(e, n, r) {
          const s = r?.event_id || Dt();
          if (!this._client) return te && Q.warn("No client configured on scope - will not capture message!"), s;
          const o = r?.syntheticException ?? new Error(e);
          return this._client.captureMessage(e, n, {
            originalException: e,
            syntheticException: o,
            ...r,
            event_id: s
          }, this), s;
        }
        captureEvent(e, n) {
          const r = e.event_id || n?.event_id || Dt();
          return this._client ? (this._client.captureEvent(e, {
            ...n,
            event_id: r
          }, this), r) : (te && Q.warn("No client configured on scope - will not capture event!"), r);
        }
        _notifyScopeListeners() {
          this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach((e) => {
            e(this);
          }), this._notifyingListeners = false);
        }
      }
      function cf() {
        return f0("defaultCurrentScope", () => new Qt());
      }
      function uf() {
        return f0("defaultIsolationScope", () => new Qt());
      }
      const Xi = (t) => t instanceof Promise && !t[dc], dc = Symbol("chained PromiseLike"), df = (t, e, n) => {
        const r = t.then((s) => (e(s), s), (s) => {
          throw n(s), s;
        });
        return Xi(r) && Xi(t) ? r : ff(t, r);
      }, ff = (t, e) => {
        if (!e) return t;
        let n = false;
        for (const r in t) {
          if (r in e) continue;
          n = true;
          const s = t[r];
          typeof s == "function" ? Object.defineProperty(e, r, {
            value: (...o) => s.apply(t, o),
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[r] = s;
        }
        return n && Object.assign(e, {
          [dc]: true
        }), e;
      };
      class Ef {
        constructor(e, n) {
          let r;
          e ? r = e : r = new Qt();
          let s;
          n ? s = n : s = new Qt(), this._stack = [
            {
              scope: r
            }
          ], this._isolationScope = s;
        }
        withScope(e) {
          const n = this._pushScope();
          let r;
          try {
            r = e(n);
          } catch (s) {
            throw this._popScope(), s;
          }
          return Y0(r) ? df(r, () => this._popScope(), () => this._popScope()) : (this._popScope(), r);
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        _pushScope() {
          const e = this.getScope().clone();
          return this._stack.push({
            client: this.getClient(),
            scope: e
          }), e;
        }
        _popScope() {
          return this._stack.length <= 1 ? false : !!this._stack.pop();
        }
      }
      function i0() {
        const t = On(), e = ds(t);
        return e.stack = e.stack || new Ef(cf(), uf());
      }
      function pf(t) {
        return i0().withScope(t);
      }
      function mf(t, e) {
        const n = i0();
        return n.withScope(() => (n.getStackTop().scope = t, e(t)));
      }
      function Qi(t) {
        return i0().withScope(() => t(i0().getIsolationScope()));
      }
      function hf() {
        return {
          withIsolationScope: Qi,
          withScope: pf,
          withSetScope: mf,
          withSetIsolationScope: (t, e) => Qi(e),
          getCurrentScope: () => i0().getScope(),
          getIsolationScope: () => i0().getIsolationScope()
        };
      }
      function p0(t) {
        const e = ds(t);
        return e.acs ? e.acs : hf();
      }
      function Fe() {
        const t = On();
        return p0(t).getCurrentScope();
      }
      function $t() {
        const t = On();
        return p0(t).getIsolationScope();
      }
      function Cf() {
        return f0("globalScope", () => new Qt());
      }
      function Zo(...t) {
        const e = On(), n = p0(e);
        if (t.length === 2) {
          const [r, s] = t;
          return r ? n.withSetScope(r, s) : n.withScope(s);
        }
        return n.withScope(t[0]);
      }
      function ge() {
        return Fe().getClient();
      }
      function Bf(t) {
        const e = t.getPropagationContext(), { traceId: n, parentSpanId: r, propagationSpanId: s } = e, o = {
          trace_id: n,
          span_id: s || Vt()
        };
        return r && (o.parent_span_id = r), o;
      }
      const jt = "sentry.source", $o = "sentry.sample_rate", fc = "sentry.previous_trace_sample_rate", Tt = "sentry.op", Ke = "sentry.origin", R0 = "sentry.idle_span_finish_reason", Z0 = "sentry.measurement_unit", $0 = "sentry.measurement_value", Zi = "sentry.custom_span_name", ei = "sentry.profile_id", Cn = "sentry.exclusive_time", gf = "sentry.link.type", _f = "gen_ai.conversation.id", Ec = 0, ps = 1, Xe = 2;
      function Af(t) {
        if (t < 400 && t >= 100) return {
          code: ps
        };
        if (t >= 400 && t < 500) switch (t) {
          case 401:
            return {
              code: Xe,
              message: "unauthenticated"
            };
          case 403:
            return {
              code: Xe,
              message: "permission_denied"
            };
          case 404:
            return {
              code: Xe,
              message: "not_found"
            };
          case 409:
            return {
              code: Xe,
              message: "already_exists"
            };
          case 413:
            return {
              code: Xe,
              message: "failed_precondition"
            };
          case 429:
            return {
              code: Xe,
              message: "resource_exhausted"
            };
          case 499:
            return {
              code: Xe,
              message: "cancelled"
            };
          default:
            return {
              code: Xe,
              message: "invalid_argument"
            };
        }
        if (t >= 500 && t < 600) switch (t) {
          case 501:
            return {
              code: Xe,
              message: "unimplemented"
            };
          case 503:
            return {
              code: Xe,
              message: "unavailable"
            };
          case 504:
            return {
              code: Xe,
              message: "deadline_exceeded"
            };
          default:
            return {
              code: Xe,
              message: "internal_error"
            };
        }
        return {
          code: Xe,
          message: "internal_error"
        };
      }
      function pc(t, e) {
        t.setAttribute("http.response.status_code", e);
        const n = Af(e);
        n.message !== "unknown_error" && t.setStatus(n);
      }
      function Ff(t) {
        try {
          const e = me.WeakRef;
          if (typeof e == "function") return new e(t);
        } catch {
        }
        return t;
      }
      function Df(t) {
        if (t) {
          if (typeof t == "object" && "deref" in t && typeof t.deref == "function") try {
            return t.deref();
          } catch {
            return;
          }
          return t;
        }
      }
      const mc = "_sentryScope", hc = "_sentryIsolationScope";
      function vf(t, e, n) {
        t && (ct(t, hc, Ff(n)), ct(t, mc, e));
      }
      function jr(t) {
        const e = t;
        return {
          scope: e[mc],
          isolationScope: Df(e[hc])
        };
      }
      const Gr = "sentry-", bf = 8192;
      function Cc(t) {
        const e = yf(t);
        if (!e) return;
        const n = Object.entries(e).reduce((r, [s, o]) => {
          if (s.startsWith(Gr)) {
            const i = s.slice(Gr.length);
            r[i] = o;
          }
          return r;
        }, {});
        if (Object.keys(n).length > 0) return n;
      }
      function kf(t) {
        if (!t) return;
        const e = Object.entries(t).reduce((n, [r, s]) => (s && (n[`${Gr}${r}`] = s), n), {});
        return wf(e);
      }
      function yf(t) {
        if (!(!t || !Wt(t) && !Array.isArray(t))) return Array.isArray(t) ? t.reduce((e, n) => {
          const r = $i(n);
          return Object.entries(r).forEach(([s, o]) => {
            e[s] = o;
          }), e;
        }, {}) : $i(t);
      }
      function $i(t) {
        return t.split(",").map((e) => {
          const n = e.indexOf("=");
          if (n === -1) return [];
          const r = e.slice(0, n), s = e.slice(n + 1);
          return [
            r,
            s
          ].map((o) => {
            try {
              return decodeURIComponent(o.trim());
            } catch {
              return;
            }
          });
        }).reduce((e, [n, r]) => (n && r && (e[n] = r), e), {});
      }
      function wf(t) {
        if (Object.keys(t).length !== 0) return Object.entries(t).reduce((e, [n, r], s) => {
          const o = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`, i = s === 0 ? o : `${e},${o}`;
          return i.length > bf ? (te && Q.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`), e) : i;
        }, "");
      }
      const Sf = /^o(\d+)\./, Tf = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
      function Pf(t) {
        return t === "http" || t === "https";
      }
      function m0(t, e = false) {
        const { host: n, path: r, pass: s, port: o, projectId: i, protocol: a, publicKey: x } = t;
        return `${a}://${x}${e && s ? `:${s}` : ""}@${n}${o ? `:${o}` : ""}/${r && `${r}/`}${i}`;
      }
      function If(t) {
        const e = Tf.exec(t);
        if (!e) {
          Hn(() => {
            console.error(`Invalid Sentry Dsn: ${t}`);
          });
          return;
        }
        const [n, r, s = "", o = "", i = "", a = ""] = e.slice(1);
        let x = "", l = a;
        const u = l.split("/");
        if (u.length > 1 && (x = u.slice(0, -1).join("/"), l = u.pop()), l) {
          const f = l.match(/^\d+/);
          f && (l = f[0]);
        }
        return Bc({
          host: o,
          pass: s,
          path: x,
          projectId: l,
          port: i,
          protocol: n,
          publicKey: r
        });
      }
      function Bc(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId
        };
      }
      function Nf(t) {
        if (!te) return true;
        const { port: e, projectId: n, protocol: r } = t;
        return [
          "protocol",
          "publicKey",
          "host",
          "projectId"
        ].find((i) => t[i] ? false : (Q.error(`Invalid Sentry Dsn: ${i} missing`), true)) ? false : n.match(/^\d+$/) ? Pf(r) ? e && isNaN(parseInt(e, 10)) ? (Q.error(`Invalid Sentry Dsn: Invalid port ${e}`), false) : true : (Q.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), false) : (Q.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), false);
      }
      function Rf(t) {
        return t.match(Sf)?.[1];
      }
      function Lf(t) {
        const e = t.getOptions(), { host: n } = t.getDsn() || {};
        let r;
        return e.orgId ? r = String(e.orgId) : n && (r = Rf(n)), r;
      }
      function Mf(t) {
        const e = typeof t == "string" ? If(t) : Bc(t);
        if (!(!e || !Nf(e))) return e;
      }
      function L0(t) {
        if (typeof t == "boolean") return Number(t);
        const e = typeof t == "string" ? parseFloat(t) : t;
        if (!(typeof e != "number" || isNaN(e) || e < 0 || e > 1)) return e;
      }
      const gc = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
      function Of(t) {
        if (!t) return;
        const e = t.match(gc);
        if (!e) return;
        let n;
        return e[3] === "1" ? n = true : e[3] === "0" && (n = false), {
          traceId: e[1],
          parentSampled: n,
          parentSpanId: e[2]
        };
      }
      function Hf(t, e) {
        const n = Of(t), r = Cc(e);
        if (!n?.traceId) return {
          traceId: Xt(),
          sampleRand: cn()
        };
        const s = qf(n, r);
        r && (r.sample_rand = s.toString());
        const { traceId: o, parentSpanId: i, parentSampled: a } = n;
        return {
          traceId: o,
          parentSpanId: i,
          sampled: a,
          dsc: r || {},
          sampleRand: s
        };
      }
      function _c(t = Xt(), e = Vt(), n) {
        let r = "";
        return n !== void 0 && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
      }
      function Ac(t = Xt(), e = Vt(), n) {
        return `00-${t}-${e}-${n ? "01" : "00"}`;
      }
      function qf(t, e) {
        const n = L0(e?.sample_rand);
        if (n !== void 0) return n;
        const r = L0(e?.sample_rate);
        return r && t?.parentSampled !== void 0 ? t.parentSampled ? cn() * r : r + cn() * (1 - r) : cn();
      }
      const Fc = 0, ms = 1;
      let ea = false;
      function zf(t) {
        const { spanId: e, traceId: n } = t.spanContext(), { data: r, op: s, parent_span_id: o, status: i, origin: a, links: x } = _e(t);
        return {
          parent_span_id: o,
          span_id: e,
          trace_id: n,
          data: r,
          op: s,
          status: i,
          origin: a,
          links: x
        };
      }
      function Uf(t) {
        const { spanId: e, traceId: n, isRemote: r } = t.spanContext(), s = r ? e : _e(t).parent_span_id, o = jr(t).scope, i = r ? o?.getPropagationContext().propagationSpanId || Vt() : e;
        return {
          parent_span_id: s,
          span_id: i,
          trace_id: n
        };
      }
      function jf(t) {
        const { traceId: e, spanId: n } = t.spanContext(), r = Bn(t);
        return _c(e, n, r);
      }
      function Gf(t) {
        const { traceId: e, spanId: n } = t.spanContext(), r = Bn(t);
        return Ac(e, n, r);
      }
      function Dc(t) {
        if (t && t.length > 0) return t.map(({ context: { spanId: e, traceId: n, traceFlags: r, ...s }, attributes: o }) => ({
          span_id: e,
          trace_id: n,
          sampled: r === ms,
          attributes: o,
          ...s
        }));
      }
      function vc(t) {
        if (t?.length) return t.map(({ context: { spanId: e, traceId: n, traceFlags: r }, attributes: s }) => ({
          span_id: e,
          trace_id: n,
          sampled: r === ms,
          attributes: s
        }));
      }
      function Yt(t) {
        return typeof t == "number" ? ta(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? ta(t.getTime()) : Ye();
      }
      function ta(t) {
        return t > 9999999999 ? t / 1e3 : t;
      }
      function _e(t) {
        if (wc(t)) return t.getSpanJSON();
        const { spanId: e, traceId: n } = t.spanContext();
        if (yc(t)) {
          const { attributes: r, startTime: s, name: o, endTime: i, status: a, links: x } = t;
          return {
            span_id: e,
            trace_id: n,
            data: r,
            description: o,
            parent_span_id: kc(t),
            start_timestamp: Yt(s),
            timestamp: Yt(i) || void 0,
            status: Sc(a),
            op: r[Tt],
            origin: r[Ke],
            links: Dc(x)
          };
        }
        return {
          span_id: e,
          trace_id: n,
          start_timestamp: 0,
          data: {}
        };
      }
      function bc(t) {
        if (wc(t)) return t.getStreamedSpanJSON();
        const { spanId: e, traceId: n } = t.spanContext();
        if (yc(t)) {
          const { attributes: r, startTime: s, name: o, endTime: i, status: a, links: x } = t;
          return {
            name: o,
            span_id: e,
            trace_id: n,
            parent_span_id: kc(t),
            start_timestamp: Yt(s),
            end_timestamp: Yt(i),
            is_segment: t === Eo(t),
            status: Tc(a),
            attributes: r,
            links: vc(x)
          };
        }
        return {
          span_id: e,
          trace_id: n,
          start_timestamp: 0,
          name: "",
          end_timestamp: 0,
          status: "ok",
          is_segment: t === Eo(t)
        };
      }
      function kc(t) {
        return "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? t.parentSpanContext?.spanId : void 0;
      }
      function yc(t) {
        const e = t;
        return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
      }
      function wc(t) {
        return typeof t.getSpanJSON == "function";
      }
      function Bn(t) {
        const { traceFlags: e } = t.spanContext();
        return e === ms;
      }
      function Sc(t) {
        if (!(!t || t.code === Ec)) return t.code === ps ? "ok" : t.message || "internal_error";
      }
      function Tc(t) {
        return !t || t.code === ps || t.code === Ec || t.message === "cancelled" ? "ok" : "error";
      }
      const Tn = "_sentryChildSpans", fo = "_sentryRootSpan";
      function Pc(t, e) {
        const n = t[fo] || t;
        ct(e, fo, n), t[Tn] ? t[Tn].add(e) : ct(t, Tn, /* @__PURE__ */ new Set([
          e
        ]));
      }
      function Wf(t, e) {
        t[Tn] && t[Tn].delete(e);
      }
      function wr(t) {
        const e = /* @__PURE__ */ new Set();
        function n(r) {
          if (!e.has(r) && Bn(r)) {
            e.add(r);
            const s = r[Tn] ? Array.from(r[Tn]) : [];
            for (const o of s) n(o);
          }
        }
        return n(t), Array.from(e);
      }
      const tt = Eo;
      function Eo(t) {
        return t[fo] || t;
      }
      function ht() {
        const t = On(), e = p0(t);
        return e.getActiveSpan ? e.getActiveSpan() : Ur(Fe());
      }
      function po() {
        ea || (Hn(() => {
          console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
        }), ea = true);
      }
      let na = false;
      function Vf() {
        if (na) return;
        function t() {
          const e = ht(), n = e && tt(e);
          if (n) {
            const r = "internal_error";
            te && Q.log(`[Tracing] Root span: ${r} -> Global error occurred`), n.setStatus({
              code: Xe,
              message: r
            });
          }
        }
        t.tag = "sentry_tracingErrorCallback", na = true, nc(t), rc(t);
      }
      function St(t) {
        if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return false;
        const e = t || ge()?.getOptions();
        return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
      }
      function ra(t) {
        Q.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
      }
      function M0(t, e) {
        if (!e?.length) return false;
        for (const n of e) {
          if (Jf(n)) {
            if (t.description && D0(t.description, n)) return te && ra(t), true;
            continue;
          }
          const r = !!n.attributes && Object.keys(n.attributes).length > 0;
          if (!n.name && !n.op && !r) continue;
          const s = n.name ? t.description && D0(t.description, n.name) : true, o = n.op ? t.op && D0(t.op, n.op) : true, i = n.attributes ? Object.entries(n.attributes).every(([a, x]) => Yf(t.attributes?.[a], x)) : true;
          if (s && o && i) return te && ra(t), true;
        }
        return false;
      }
      function Yf(t, e) {
        return typeof t == "string" && (typeof e == "string" || e instanceof RegExp) ? D0(t, e) : Array.isArray(t) && Array.isArray(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t === e;
      }
      function Kf(t, e) {
        const n = e.parent_span_id, r = e.span_id;
        if (n) for (const s of t) s.parent_span_id === r && (s.parent_span_id = n);
      }
      function Jf(t) {
        return typeof t == "string" || t instanceof RegExp;
      }
      const ti = "production", Ic = "_frozenDsc";
      function Sr(t, e) {
        ct(t, Ic, e);
      }
      function Nc(t, e) {
        const n = e.getOptions(), { publicKey: r } = e.getDsn() || {}, s = {
          environment: n.environment || ti,
          release: n.release,
          public_key: r,
          trace_id: t,
          org_id: Lf(e)
        };
        return e.emit("createDsc", s), s;
      }
      function Rc(t, e) {
        const n = e.getPropagationContext();
        return n.dsc || Nc(n.traceId, t);
      }
      function En(t) {
        const e = ge();
        if (!e) return {};
        const n = tt(t), r = _e(n), s = r.data, o = n.spanContext().traceState, i = o?.get("sentry.sample_rate") ?? s[$o] ?? s[fc];
        function a(m) {
          return (typeof i == "number" || typeof i == "string") && (m.sample_rate = `${i}`), m;
        }
        const x = n[Ic];
        if (x) return a(x);
        const l = o?.get("sentry.dsc"), u = l && Cc(l);
        if (u) return a(u);
        const f = Nc(t.spanContext().traceId, e), p = s[jt] ?? s["sentry.span.source"], E = r.description;
        return p !== "url" && E && (f.transaction = E), St() && (f.sampled = String(Bn(n)), f.sample_rand = o?.get("sentry.sample_rand") ?? jr(n).scope?.getPropagationContext().sampleRand.toString()), a(f), e.emit("createDsc", f, n), f;
      }
      class Mt {
        constructor(e = {}) {
          this._traceId = e.traceId || Xt(), this._spanId = e.spanId || Vt(), this.dropReason = e.dropReason;
        }
        spanContext() {
          return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: Fc
          };
        }
        end(e) {
        }
        setAttribute(e, n) {
          return this;
        }
        setAttributes(e) {
          return this;
        }
        setStatus(e) {
          return this;
        }
        updateName(e) {
          return this;
        }
        isRecording() {
          return false;
        }
        addEvent(e, n, r) {
          return this;
        }
        addLink(e) {
          return this;
        }
        addLinks(e) {
          return this;
        }
        recordException(e, n) {
        }
      }
      function Lc(t) {
        return !!t && typeof t == "function" && "_streamed" in t && !!t._streamed;
      }
      const Xf = Symbol.for("sentry.skipNormalization"), Qf = Symbol.for("sentry.overrideNormalizationDepth");
      function Zf(t) {
        return !!t[Xf];
      }
      function $f(t) {
        const e = t[Qf];
        return typeof e == "number" ? e : void 0;
      }
      function Ut(t, e = 100, n = 1 / 0) {
        try {
          return mo("", t, e, n);
        } catch (r) {
          return {
            ERROR: `**non-serializable** (${r})`
          };
        }
      }
      function Mc(t, e = 3, n = 100 * 1024) {
        const r = Ut(t, e);
        return r9(r) > n ? Mc(t, e - 1, n) : r;
      }
      function mo(t, e, n = 1 / 0, r = 1 / 0, s = s9()) {
        const [o, i] = s;
        if (e == null || [
          "boolean",
          "string"
        ].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
        const a = e9(t, e);
        if (!a.startsWith("[object ")) return a;
        if (Zf(e)) return e;
        const x = $f(e), l = x !== void 0 ? x : n;
        if (l === 0) return a.replace("object ", "");
        if (o(e)) return "[Circular ~]";
        const u = e;
        if (u && typeof u.toJSON == "function") try {
          const m = u.toJSON();
          return mo("", m, l - 1, r, s);
        } catch {
        }
        const f = Array.isArray(e) ? [] : {};
        let p = 0;
        const E = lc(e);
        for (const m in E) {
          if (!Object.prototype.hasOwnProperty.call(E, m)) continue;
          if (p >= r) {
            f[m] = "[MaxProperties ~]";
            break;
          }
          const C = E[m];
          f[m] = mo(m, C, l - 1, r, s), p++;
        }
        return i(e), f;
      }
      function e9(t, e) {
        try {
          if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
          if (t === "domainEmitter") return "[DomainEmitter]";
          if (typeof global < "u" && e === global) return "[Global]";
          if (typeof window < "u" && e === window) return "[Window]";
          if (typeof document < "u" && e === document) return "[Document]";
          if (ic(e)) return tc(e);
          if (Xd(e)) return "[SyntheticEvent]";
          if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
          if (typeof e == "function") return `[Function: ${Kt(e)}]`;
          if (typeof e == "symbol") return `[${String(e)}]`;
          if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
          const n = t9(e);
          return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
        } catch (n) {
          return `**non-serializable** (${n})`;
        }
      }
      function t9(t) {
        const e = Object.getPrototypeOf(t);
        return e?.constructor ? e.constructor.name : "null prototype";
      }
      function n9(t) {
        return ~-encodeURI(t).split(/%..|./).length;
      }
      function r9(t) {
        return n9(JSON.stringify(t));
      }
      function s9() {
        const t = /* @__PURE__ */ new WeakSet();
        function e(r) {
          return t.has(r) ? true : (t.add(r), false);
        }
        function n(r) {
          t.delete(r);
        }
        return [
          e,
          n
        ];
      }
      function zn(t, e = []) {
        return [
          t,
          e
        ];
      }
      function o9(t, e) {
        const [n, r] = t;
        return [
          n,
          [
            ...r,
            e
          ]
        ];
      }
      function ho(t, e) {
        const n = t[1];
        for (const r of n) {
          const s = r[0].type;
          if (e(r, s)) return true;
        }
        return false;
      }
      function i9(t, e) {
        return ho(t, (n, r) => e.includes(r));
      }
      function Co(t) {
        const e = ds(me);
        return e.encodePolyfill ? e.encodePolyfill(t) : new TextEncoder().encode(t);
      }
      function a9(t) {
        const [e, n] = t;
        let r = JSON.stringify(e);
        function s(o) {
          typeof r == "string" ? r = typeof o == "string" ? r + o : [
            Co(r),
            o
          ] : r.push(typeof o == "string" ? Co(o) : o);
        }
        for (const o of n) {
          const [i, a] = o;
          if (s(`
${JSON.stringify(i)}
`), typeof a == "string" || a instanceof Uint8Array) s(a);
          else {
            let x;
            try {
              x = JSON.stringify(a);
            } catch {
              x = JSON.stringify(Ut(a));
            }
            s(x);
          }
        }
        return typeof r == "string" ? r : x9(r);
      }
      function x9(t) {
        const e = t.reduce((s, o) => s + o.length, 0), n = new Uint8Array(e);
        let r = 0;
        for (const s of t) n.set(s, r), r += s.length;
        return n;
      }
      function l9(t) {
        return [
          {
            type: "span"
          },
          t
        ];
      }
      function c9(t) {
        const e = typeof t.data == "string" ? Co(t.data) : t.data;
        return [
          {
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
          },
          e
        ];
      }
      const Oc = {
        sessions: "session",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile_chunk: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        raw_security: "security",
        log: "log_item",
        trace_metric: "metric"
      };
      function u9(t) {
        return t in Oc;
      }
      function sa(t) {
        return u9(t) ? Oc[t] : t;
      }
      function Hc(t) {
        if (!t?.sdk) return;
        const { name: e, version: n } = t.sdk;
        return {
          name: e,
          version: n
        };
      }
      function d9(t, e, n, r) {
        const s = t.sdkProcessingMetadata?.dynamicSamplingContext;
        return {
          event_id: t.event_id,
          sent_at: (/* @__PURE__ */ new Date()).toISOString(),
          ...e && {
            sdk: e
          },
          ...!!n && r && {
            dsn: m0(r)
          },
          ...s && {
            trace: s
          }
        };
      }
      function f9(t, e) {
        if (!e) return t;
        const n = t.sdk || {};
        return t.sdk = {
          ...n,
          name: n.name || e.name,
          version: n.version || e.version,
          integrations: [
            ...t.sdk?.integrations || [],
            ...e.integrations || []
          ],
          packages: [
            ...t.sdk?.packages || [],
            ...e.packages || []
          ],
          settings: t.sdk?.settings || e.settings ? {
            ...t.sdk?.settings,
            ...e.settings
          } : void 0
        }, t;
      }
      function E9(t, e, n, r) {
        const s = Hc(n), o = {
          sent_at: (/* @__PURE__ */ new Date()).toISOString(),
          ...s && {
            sdk: s
          },
          ...!!r && e && {
            dsn: m0(e)
          }
        }, i = "aggregates" in t ? [
          {
            type: "sessions"
          },
          t
        ] : [
          {
            type: "session"
          },
          t.toJSON()
        ];
        return zn(o, [
          i
        ]);
      }
      function p9(t, e, n, r) {
        const s = Hc(n), o = t.type && t.type !== "replay_event" ? t.type : "event";
        f9(t, n?.sdk);
        const i = d9(t, s, r, e);
        return delete t.sdkProcessingMetadata, zn(i, [
          [
            {
              type: o
            },
            t
          ]
        ]);
      }
      function m9(t, e) {
        function n(E) {
          return !!E.trace_id && !!E.public_key;
        }
        const r = En(t[0]), s = e?.getDsn(), o = e?.getOptions().tunnel, i = {
          sent_at: (/* @__PURE__ */ new Date()).toISOString(),
          ...n(r) && {
            trace: r
          },
          ...!!o && s && {
            dsn: m0(s)
          }
        }, { beforeSendSpan: a, ignoreSpans: x } = e?.getOptions() || {}, l = x?.length ? t.filter((E) => {
          const m = _e(E);
          return !M0({
            description: m.description,
            op: m.op,
            attributes: m.data
          }, x);
        }) : t, u = t.length - l.length;
        u && e?.recordDroppedEvent("before_send", "span", u);
        const f = a ? (E) => {
          const m = _e(E), C = Lc(a) ? m : a(m);
          return C || (po(), m);
        } : _e, p = [];
        for (const E of l) {
          const m = f(E);
          m && p.push(l9(m));
        }
        return zn(i, p);
      }
      function h9(t) {
        if (!te) return;
        const { description: e = "< unknown name >", op: n = "< unknown op >", parent_span_id: r } = _e(t), { spanId: s } = t.spanContext(), o = Bn(t), i = tt(t), a = i === t, x = `[Tracing] Starting ${o ? "sampled" : "unsampled"} ${a ? "root " : ""}span`, l = [
          `op: ${n}`,
          `name: ${e}`,
          `ID: ${s}`
        ];
        if (r && l.push(`parent ID: ${r}`), !a) {
          const { op: u, description: f } = _e(i);
          l.push(`root ID: ${i.spanContext().spanId}`), u && l.push(`root op: ${u}`), f && l.push(`root description: ${f}`);
        }
        Q.log(`${x}
  ${l.join(`
  `)}`);
      }
      function C9(t) {
        if (!te) return;
        const { description: e = "< unknown name >", op: n = "< unknown op >" } = _e(t), { spanId: r } = t.spanContext(), o = tt(t) === t, i = `[Tracing] Finishing "${n}" ${o ? "root " : ""}span "${e}" with ID ${r}`;
        Q.log(i);
      }
      function B9(t, e, n, r = ht()) {
        const s = r && tt(r);
        s && (te && Q.log(`[Measurement] Setting measurement on root span: ${t} = ${e} ${n}`), s.addEvent(t, {
          [$0]: e,
          [Z0]: n
        }));
      }
      function oa(t) {
        if (!t || t.length === 0) return;
        const e = {};
        return t.forEach((n) => {
          const r = n.attributes || {}, s = r[Z0], o = r[$0];
          typeof s == "string" && typeof o == "number" && (e[n.name] = {
            value: o,
            unit: s
          });
        }), e;
      }
      function Zt(t) {
        return t.getOptions().traceLifecycle === "stream";
      }
      const ia = 1e3;
      class hs {
        constructor(e = {}) {
          this._traceId = e.traceId || Xt(), this._spanId = e.spanId || Vt(), this._startTime = e.startTimestamp || Ye(), this._links = e.links, this._attributes = {}, this.setAttributes({
            [Ke]: "manual",
            [Tt]: e.op,
            ...e.attributes
          }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded();
        }
        addLink(e) {
          return this._links ? this._links.push(e) : this._links = [
            e
          ], this;
        }
        addLinks(e) {
          return this._links ? this._links.push(...e) : this._links = e, this;
        }
        recordException(e, n) {
        }
        spanContext() {
          const { _spanId: e, _traceId: n, _sampled: r } = this;
          return {
            spanId: e,
            traceId: n,
            traceFlags: r ? ms : Fc
          };
        }
        setAttribute(e, n) {
          return n === void 0 ? delete this._attributes[e] : this._attributes[e] = n, this;
        }
        setAttributes(e) {
          return Object.keys(e).forEach((n) => this.setAttribute(n, e[n])), this;
        }
        updateStartTime(e) {
          this._startTime = Yt(e);
        }
        setStatus(e) {
          return this._status = e, this;
        }
        updateName(e) {
          return this._name = e, this.setAttribute(jt, "custom"), this;
        }
        end(e) {
          this._endTime || (this._endTime = Yt(e), C9(this), this._onSpanEnded());
        }
        getSpanJSON() {
          return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[Tt],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: Sc(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[Ke],
            profile_id: this._attributes[ei],
            exclusive_time: this._attributes[Cn],
            measurements: oa(this._events),
            is_segment: this._isStandaloneSpan && tt(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? tt(this).spanContext().spanId : void 0,
            links: Dc(this._links)
          };
        }
        getStreamedSpanJSON() {
          return {
            name: this._name ?? "",
            span_id: this._spanId,
            trace_id: this._traceId,
            parent_span_id: this._parentSpanId,
            start_timestamp: this._startTime,
            end_timestamp: this._endTime ?? this._startTime,
            is_segment: this._isStandaloneSpan || this === tt(this),
            status: Tc(this._status),
            attributes: this._attributes,
            links: vc(this._links)
          };
        }
        isRecording() {
          return !this._endTime && !!this._sampled;
        }
        addEvent(e, n, r) {
          te && Q.log("[Tracing] Adding an event to span:", e);
          const s = aa(n) ? n : r || Ye(), o = aa(n) ? {} : n || {}, i = {
            name: e,
            time: Yt(s),
            attributes: o
          };
          return this._events.push(i), this;
        }
        isStandaloneSpan() {
          return !!this._isStandaloneSpan;
        }
        _onSpanEnded() {
          const e = ge();
          if (e && (e.emit("spanEnd", this), this._isStandaloneSpan || e.emit("afterSpanEnd", this)), !(this._isStandaloneSpan || this === tt(this))) return;
          if (this._isStandaloneSpan) {
            this._sampled ? _9(m9([
              this
            ], e)) : (te && Q.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span"));
            return;
          } else if (e && Zt(e)) {
            e.emit("afterSegmentSpanEnd", this);
            return;
          }
          const r = this._convertSpanToTransaction();
          r && (jr(this).scope || Fe()).captureEvent(r);
        }
        _convertSpanToTransaction() {
          if (!xa(_e(this))) return;
          this._name || (te && Q.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
          const { scope: e, isolationScope: n } = jr(this), r = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
          if (this._sampled !== true) return;
          const o = wr(this).filter((u) => u !== this && !g9(u)).map((u) => _e(u)).filter(xa), i = this._attributes[jt];
          delete this._attributes[Zi], o.forEach((u) => {
            delete u.data[Zi];
          });
          const a = {
            contexts: {
              trace: zf(this)
            },
            spans: o.length > ia ? o.sort((u, f) => u.start_timestamp - f.start_timestamp).slice(0, ia) : o,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
              capturedSpanScope: e,
              capturedSpanIsolationScope: n,
              dynamicSamplingContext: En(this)
            },
            request: r,
            ...i && {
              transaction_info: {
                source: i
              }
            }
          }, x = oa(this._events);
          return x && Object.keys(x).length && (te && Q.log("[Measurements] Adding measurements to transaction event", JSON.stringify(x, void 0, 2)), a.measurements = x), a;
        }
      }
      function aa(t) {
        return t && typeof t == "number" || t instanceof Date || Array.isArray(t);
      }
      function xa(t) {
        return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id;
      }
      function g9(t) {
        return t instanceof hs && t.isStandaloneSpan();
      }
      function _9(t) {
        const e = ge();
        if (!e) return;
        const n = t[1];
        if (!n || n.length === 0) {
          e.recordDroppedEvent("before_send", "span");
          return;
        }
        e.sendEnvelope(t);
      }
      function A9(t, e, n) {
        if (!St(t)) return [
          false
        ];
        let r, s;
        typeof t.tracesSampler == "function" ? (s = t.tracesSampler({
          ...e,
          inheritOrSampleWith: (a) => typeof e.parentSampleRate == "number" ? e.parentSampleRate : typeof e.parentSampled == "boolean" ? Number(e.parentSampled) : a
        }), r = true) : e.parentSampled !== void 0 ? s = e.parentSampled : typeof t.tracesSampleRate < "u" && (s = t.tracesSampleRate, r = true);
        const o = L0(s);
        if (o === void 0) return te && Q.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`), [
          false
        ];
        if (!o) return te && Q.log(`[Tracing] Discarding transaction because ${typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [
          false,
          o,
          r
        ];
        const i = n < o;
        return i || te && Q.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), [
          i,
          o,
          r
        ];
      }
      const F9 = "__SENTRY_SUPPRESS_TRACING__";
      function Un(t) {
        const e = zc();
        if (e.startInactiveSpan) return e.startInactiveSpan(t);
        const n = v9(t), { forceTransaction: r, parentSpan: s } = t;
        return (t.scope ? (i) => Zo(t.scope, i) : s !== void 0 ? (i) => qc(s, i) : (i) => i())(() => {
          const i = Fe(), a = k9(i, s), x = ge();
          return t.onlyIfParent && !a ? (x?.recordDroppedEvent("no_parent_span", "span"), new Mt()) : D9({
            parentSpan: a,
            spanArguments: n,
            forceTransaction: r,
            scope: i
          });
        });
      }
      function qc(t, e) {
        const n = zc();
        return n.withActiveSpan ? n.withActiveSpan(t, e) : Zo((r) => (N0(r, t || void 0), e(r)));
      }
      function D9({ parentSpan: t, spanArguments: e, forceTransaction: n, scope: r }) {
        if (!St()) {
          const a = new Mt();
          if (n || !t) {
            const x = {
              sampled: "false",
              sample_rate: "0",
              transaction: e.name,
              ...En(a)
            };
            Sr(a, x);
          }
          return a;
        }
        const s = ge();
        if (y9(s, e)) return ni(r) || s?.recordDroppedEvent("ignored", "span"), new Mt({
          dropReason: "ignored",
          traceId: t?.spanContext().traceId ?? r.getPropagationContext().traceId
        });
        const o = $t();
        let i;
        if (t && !n) i = b9(t, r, e), Pc(t, i);
        else if (t) {
          const a = En(t), { traceId: x, spanId: l } = t.spanContext(), u = Bn(t);
          i = la({
            traceId: x,
            parentSpanId: l,
            ...e
          }, r, u), Sr(i, a);
        } else {
          const { traceId: a, dsc: x, parentSpanId: l, sampled: u } = {
            ...o.getPropagationContext(),
            ...r.getPropagationContext()
          };
          i = la({
            traceId: a,
            parentSpanId: l,
            ...e
          }, r, u), x && Sr(i, x);
        }
        return h9(i), vf(i, r, o), i;
      }
      function v9(t) {
        const n = {
          isStandalone: (t.experimental || {}).standalone,
          ...t
        };
        if (t.startTime) {
          const r = {
            ...n
          };
          return r.startTimestamp = Yt(t.startTime), delete r.startTime, r;
        }
        return n;
      }
      function zc() {
        const t = On();
        return p0(t);
      }
      function la(t, e, n) {
        const r = ge(), s = r?.getOptions() || {}, { name: o = "" } = t, i = {
          spanAttributes: {
            ...t.attributes
          },
          spanName: o,
          parentSampled: n
        };
        r?.emit("beforeSampling", i, {
          decision: false
        });
        const a = i.parentSampled ?? n, x = i.spanAttributes, l = e.getPropagationContext(), u = ni(e), [f, p, E] = u ? [
          false
        ] : A9(s, {
          name: o,
          parentSampled: a,
          attributes: x,
          parentSampleRate: L0(l.dsc?.sample_rate)
        }, l.sampleRand), m = new hs({
          ...t,
          attributes: {
            [jt]: "custom",
            [$o]: p !== void 0 && E ? p : void 0,
            ...x
          },
          sampled: f
        });
        return !f && r && !u && (te && Q.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), r.recordDroppedEvent("sample_rate", Zt(r) ? "span" : "transaction")), r && r.emit("spanStart", m), m;
      }
      function b9(t, e, n) {
        const { spanId: r, traceId: s } = t.spanContext(), o = ni(e), i = o ? false : Bn(t), a = i ? new hs({
          ...n,
          parentSpanId: r,
          traceId: s,
          sampled: i
        }) : new Mt({
          traceId: s
        });
        Pc(t, a);
        const x = ge();
        return x && (Zt(x) && a instanceof Mt && (t instanceof Mt && t.dropReason ? (a.dropReason = t.dropReason, x.recordDroppedEvent(t.dropReason, "span")) : o || (a.dropReason = "sample_rate", x.recordDroppedEvent("sample_rate", "span"))), x.emit("spanStart", a), n.endTimestamp && (x.emit("spanEnd", a), x.emit("afterSpanEnd", a))), a;
      }
      function k9(t, e) {
        if (e) return e;
        if (e === null) return;
        const n = Ur(t);
        if (!n) return;
        const r = ge();
        return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? tt(n) : n;
      }
      function y9(t, e) {
        const n = t?.getOptions().ignoreSpans;
        return !t || !Zt(t) || !n?.length ? false : M0({
          description: e.name || "",
          op: e.attributes?.[Tt] || e.op,
          attributes: e.attributes
        }, n);
      }
      function ni(t) {
        return t.getScopeData().sdkProcessingMetadata[F9] === true;
      }
      const Tr = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
      }, w9 = "heartbeatFailed", S9 = "idleTimeout", T9 = "finalTimeout", P9 = "externalFinish";
      function Uc(t, e = {}) {
        const n = /* @__PURE__ */ new Map();
        let r = false, s, o = P9, i = !e.disableAutoFinish;
        const a = [], { idleTimeout: x = Tr.idleTimeout, finalTimeout: l = Tr.finalTimeout, childSpanTimeout: u = Tr.childSpanTimeout, beforeSpanEnd: f, trimIdleSpanEndTimestamp: p = true } = e, E = ge();
        if (!E || !St()) {
          const F = new Mt(), k = {
            sample_rate: "0",
            sampled: "false",
            ...En(F)
          };
          return Sr(F, k), F;
        }
        const m = Fe(), C = ht(), B = I9(t);
        B.end = new Proxy(B.end, {
          apply(F, k, w) {
            if (f && f(B), k instanceof Mt) return;
            const [P, ...N] = w, I = P || Ye(), L = Yt(I), R = wr(B).filter((j) => j !== B), O = _e(B);
            if (!R.length || !p) return g(L), Reflect.apply(F, k, [
              L,
              ...N
            ]);
            const W = E.getOptions().ignoreSpans, H = R?.reduce((j, U) => {
              const z = _e(U);
              return !z.timestamp || W && M0({
                description: z.description,
                op: z.op,
                attributes: z.data
              }, W) ? j : j ? Math.max(j, z.timestamp) : z.timestamp;
            }, void 0), q = O.start_timestamp, X = Math.min(q ? q + l / 1e3 : 1 / 0, Math.max(q || -1 / 0, Math.min(L, H || 1 / 0)));
            return g(X), Reflect.apply(F, k, [
              X,
              ...N
            ]);
          }
        });
        function A() {
          s && (clearTimeout(s), s = void 0);
        }
        function D(F) {
          A(), s = setTimeout(() => {
            !r && n.size === 0 && i && (o = S9, B.end(F));
          }, x);
        }
        function b(F) {
          s = setTimeout(() => {
            !r && i && (o = w9, B.end(F));
          }, u);
        }
        function v(F) {
          A(), n.set(F, true);
          const k = Ye();
          b(k + u / 1e3);
        }
        function _(F) {
          if (n.has(F) && n.delete(F), n.size === 0) {
            const k = Ye();
            D(k + x / 1e3);
          }
        }
        function g(F) {
          r = true, n.clear(), a.forEach((R) => R()), N0(m, C);
          const k = _e(B), { start_timestamp: w } = k;
          if (!w) return;
          k.data[R0] || B.setAttribute(R0, o);
          const N = k.status;
          (!N || N === "unknown") && B.setStatus({
            code: ps
          }), Q.log(`[Tracing] Idle span "${k.op}" finished`);
          const I = wr(B).filter((R) => R !== B);
          let L = 0;
          I.forEach((R) => {
            R.isRecording() && (R.setStatus({
              code: Xe,
              message: "cancelled"
            }), R.end(F), te && Q.log("[Tracing] Cancelling span since span ended early", JSON.stringify(R, void 0, 2)));
            const O = _e(R), { timestamp: W = 0, start_timestamp: H = 0 } = O, q = H <= F, X = (l + x) / 1e3, j = W - H <= X;
            if (te) {
              const U = JSON.stringify(R, void 0, 2);
              q ? j || Q.log("[Tracing] Discarding span since it finished after idle span final timeout", U) : Q.log("[Tracing] Discarding span since it happened after idle span was finished", U);
            }
            (!j || !q) && (Wf(B, R), L++);
          }), L > 0 && B.setAttribute("sentry.idle_span_discarded_spans", L);
        }
        return a.push(E.on("spanStart", (F) => {
          if (r || F === B || _e(F).timestamp || F instanceof hs && F.isStandaloneSpan()) return;
          wr(B).includes(F) && v(F.spanContext().spanId);
        })), a.push(E.on("spanEnd", (F) => {
          r || _(F.spanContext().spanId);
        })), a.push(E.on("idleSpanEnableAutoFinish", (F) => {
          F === B && (i = true, D(), n.size && b());
        })), e.disableAutoFinish || D(), setTimeout(() => {
          r || (B.setStatus({
            code: Xe,
            message: "deadline_exceeded"
          }), o = T9, B.end());
        }, l), B;
      }
      function I9(t) {
        const e = Un(t);
        return N0(Fe(), e), te && Q.log("[Tracing] Started span is an idle span"), e;
      }
      function N9(t, e) {
        const { fingerprint: n, span: r, breadcrumbs: s, sdkProcessingMetadata: o } = e;
        R9(t, e), r && O9(t, r), H9(t, n), L9(t, s), M9(t, o);
      }
      function ca(t, e) {
        const { extra: n, tags: r, attributes: s, user: o, contexts: i, level: a, sdkProcessingMetadata: x, breadcrumbs: l, fingerprint: u, eventProcessors: f, attachments: p, propagationContext: E, transactionName: m, span: C } = e;
        _0(t, "extra", n), _0(t, "tags", r), _0(t, "attributes", s), _0(t, "user", o), _0(t, "contexts", i), t.sdkProcessingMetadata = Q0(t.sdkProcessingMetadata, x, 2), a && (t.level = a), m && (t.transactionName = m), C && (t.span = C), l.length && (t.breadcrumbs = [
          ...t.breadcrumbs,
          ...l
        ]), u.length && (t.fingerprint = [
          ...t.fingerprint,
          ...u
        ]), f.length && (t.eventProcessors = [
          ...t.eventProcessors,
          ...f
        ]), p.length && (t.attachments = [
          ...t.attachments,
          ...p
        ]), t.propagationContext = {
          ...t.propagationContext,
          ...E
        };
      }
      function _0(t, e, n) {
        t[e] = Q0(t[e], n, 1);
      }
      function jc(t, e) {
        const n = Cf().getScopeData();
        return t && ca(n, t.getScopeData()), e && ca(n, e.getScopeData()), n;
      }
      function R9(t, e) {
        const { extra: n, tags: r, user: s, contexts: o, level: i, transactionName: a } = e;
        Object.keys(n).length && (t.extra = {
          ...n,
          ...t.extra
        }), Object.keys(r).length && (t.tags = {
          ...r,
          ...t.tags
        }), Object.keys(s).length && (t.user = {
          ...s,
          ...t.user
        }), Object.keys(o).length && (t.contexts = {
          ...o,
          ...t.contexts
        }), i && (t.level = i), a && t.type !== "transaction" && (t.transaction = a);
      }
      function L9(t, e) {
        const n = [
          ...t.breadcrumbs || [],
          ...e
        ];
        t.breadcrumbs = n.length ? n : void 0;
      }
      function M9(t, e) {
        t.sdkProcessingMetadata = {
          ...t.sdkProcessingMetadata,
          ...e
        };
      }
      function O9(t, e) {
        t.contexts = {
          trace: Uf(e),
          ...t.contexts
        }, t.sdkProcessingMetadata = {
          dynamicSamplingContext: En(e),
          ...t.sdkProcessingMetadata
        };
        const n = tt(e), r = _e(n).description;
        r && !t.transaction && t.type === "transaction" && (t.transaction = r);
      }
      function H9(t, e) {
        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [
          t.fingerprint
        ] : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint.length || delete t.fingerprint;
      }
      const q9 = "thismessage:/";
      function Gc(t) {
        return "isRelative" in t;
      }
      function Wc(t, e) {
        const n = t.indexOf("://") <= 0 && t.indexOf("//") !== 0, r = n ? q9 : void 0;
        try {
          if ("canParse" in URL && !URL.canParse(t, r)) return;
          const s = new URL(t, r);
          return n ? {
            isRelative: n,
            pathname: s.pathname,
            search: s.search,
            hash: s.hash
          } : s;
        } catch {
        }
      }
      function z9(t) {
        if (Gc(t)) return t.pathname;
        const e = new URL(t);
        return e.search = "", e.hash = "", [
          "80",
          "443"
        ].includes(e.port) && (e.port = ""), e.password && (e.password = "%filtered%"), e.username && (e.username = "%filtered%"), e.toString();
      }
      function Pn(t) {
        if (!t) return {};
        const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        const n = e[6] || "", r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: r,
          relative: e[5] + n + r
        };
      }
      function U9(t) {
        return t.split(/[?#]/, 1)[0];
      }
      function dn(t, e = true) {
        if (t.startsWith("data:")) {
          const n = t.match(/^data:([^;,]+)/), r = n ? n[1] : "text/plain", s = t.includes(";base64,"), o = t.indexOf(",");
          let i = "";
          if (e && o !== -1) {
            const a = t.slice(o + 1);
            i = a.length > 10 ? `${a.slice(0, 10)}... [truncated]` : a;
          }
          return `data:${r}${s ? ",base64" : ""}${i ? `,${i}` : ""}`;
        }
        return t;
      }
      function Vc(t, e) {
        const n = t.attributes ?? (t.attributes = {});
        Object.entries(e).forEach(([r, s]) => {
          s != null && !(r in n) && (n[r] = s);
        });
      }
      const zs = 0, ua = 1, da = 2;
      function er(t) {
        return new O0((e) => {
          e(t);
        });
      }
      function ri(t) {
        return new O0((e, n) => {
          n(t);
        });
      }
      class O0 {
        constructor(e) {
          this._state = zs, this._handlers = [], this._runExecutor(e);
        }
        then(e, n) {
          return new O0((r, s) => {
            this._handlers.push([
              false,
              (o) => {
                if (!e) r(o);
                else try {
                  r(e(o));
                } catch (i) {
                  s(i);
                }
              },
              (o) => {
                if (!n) s(o);
                else try {
                  r(n(o));
                } catch (i) {
                  s(i);
                }
              }
            ]), this._executeHandlers();
          });
        }
        catch(e) {
          return this.then((n) => n, e);
        }
        finally(e) {
          return new O0((n, r) => {
            let s, o;
            return this.then((i) => {
              o = false, s = i, e && e();
            }, (i) => {
              o = true, s = i, e && e();
            }).then(() => {
              if (o) {
                r(s);
                return;
              }
              n(s);
            });
          });
        }
        _executeHandlers() {
          if (this._state === zs) return;
          const e = this._handlers.slice();
          this._handlers = [], e.forEach((n) => {
            n[0] || (this._state === ua && n[1](this._value), this._state === da && n[2](this._value), n[0] = true);
          });
        }
        _runExecutor(e) {
          const n = (o, i) => {
            if (this._state === zs) {
              if (Y0(i)) {
                i.then(r, s);
                return;
              }
              this._state = o, this._value = i, this._executeHandlers();
            }
          }, r = (o) => {
            n(ua, o);
          }, s = (o) => {
            n(da, o);
          };
          try {
            e(r, s);
          } catch (o) {
            s(o);
          }
        }
      }
      function j9(t, e, n, r = 0) {
        try {
          const s = Bo(e, n, t, r);
          return Y0(s) ? s : er(s);
        } catch (s) {
          return ri(s);
        }
      }
      function Bo(t, e, n, r) {
        const s = n[r];
        if (!t || !s) return t;
        const o = s({
          ...t
        }, e);
        return te && o === null && Q.log(`Event processor "${s.id || "?"}" dropped event`), Y0(o) ? o.then((i) => Bo(i, e, n, r + 1)) : Bo(o, e, n, r + 1);
      }
      let Dn, fa, Ea, an;
      function G9(t) {
        const e = me._sentryDebugIds, n = me._debugIds;
        if (!e && !n) return {};
        const r = e ? Object.keys(e) : [], s = n ? Object.keys(n) : [];
        if (an && r.length === fa && s.length === Ea) return an;
        fa = r.length, Ea = s.length, an = {}, Dn || (Dn = {});
        const o = (i, a) => {
          for (const x of i) {
            const l = a[x], u = Dn?.[x];
            if (u && an && l) an[u[0]] = l, Dn && (Dn[x] = [
              u[0],
              l
            ]);
            else if (l) {
              const f = t(x);
              for (let p = f.length - 1; p >= 0; p--) {
                const m = f[p]?.filename;
                if (m && an && Dn) {
                  an[m] = l, Dn[x] = [
                    m,
                    l
                  ];
                  break;
                }
              }
            }
          }
        };
        return e && o(r, e), n && o(s, n), an;
      }
      function W9(t, e, n, r, s, o) {
        const { normalizeDepth: i = 3, normalizeMaxBreadth: a = 1e3 } = t, x = {
          ...e,
          event_id: e.event_id || n.event_id || Dt(),
          timestamp: e.timestamp || qn()
        }, l = n.integrations || t.integrations.map((A) => A.name);
        V9(x, t), J9(x, l), s && s.emit("applyFrameMetadata", e), e.type === void 0 && Y9(x, t.stackParser);
        const u = Q9(r, n.captureContext);
        n.mechanism && s0(x, n.mechanism);
        const f = s ? s.getEventProcessors() : [], p = jc(o, u), E = [
          ...n.attachments || [],
          ...p.attachments
        ];
        E.length && (n.attachments = E), N9(x, p);
        const m = [
          ...f,
          ...p.eventProcessors
        ];
        return (n.data && n.data.__sentry__ === true ? er(x) : j9(m, x, n)).then((A) => (A && K9(A), typeof i == "number" && i > 0 ? X9(A, i, a) : A));
      }
      function V9(t, e) {
        const { environment: n, release: r, dist: s, maxValueLength: o } = e;
        t.environment = t.environment || n || ti, !t.release && r && (t.release = r), !t.dist && s && (t.dist = s);
        const i = t.request;
        i?.url && o && (i.url = lo(i.url, o)), o && t.exception?.values?.forEach((a) => {
          a.value && (a.value = lo(a.value, o));
        });
      }
      function Y9(t, e) {
        const n = G9(e);
        t.exception?.values?.forEach((r) => {
          r.stacktrace?.frames?.forEach((s) => {
            s.filename && (s.debug_id = n[s.filename]);
          });
        });
      }
      function K9(t) {
        const e = {};
        if (t.exception?.values?.forEach((r) => {
          r.stacktrace?.frames?.forEach((s) => {
            s.debug_id && (s.abs_path ? e[s.abs_path] = s.debug_id : s.filename && (e[s.filename] = s.debug_id), delete s.debug_id);
          });
        }), Object.keys(e).length === 0) return;
        t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
        const n = t.debug_meta.images;
        Object.entries(e).forEach(([r, s]) => {
          n.push({
            type: "sourcemap",
            code_file: r,
            debug_id: s
          });
        });
      }
      function J9(t, e) {
        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [
          ...t.sdk.integrations || [],
          ...e
        ]);
      }
      function X9(t, e, n) {
        if (!t) return null;
        const r = {
          ...t,
          ...t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map((s) => ({
              ...s,
              ...s.data && {
                data: Ut(s.data, e, n)
              }
            }))
          },
          ...t.user && {
            user: Ut(t.user, e, n)
          },
          ...t.contexts && {
            contexts: Ut(t.contexts, e, n)
          },
          ...t.extra && {
            extra: Ut(t.extra, e, n)
          }
        };
        return t.contexts?.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = Ut(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map((s) => ({
          ...s,
          ...s.data && {
            data: Ut(s.data, e, n)
          }
        }))), t.contexts?.flags && r.contexts && (r.contexts.flags = Ut(t.contexts.flags, 3, n)), r;
      }
      function Q9(t, e) {
        if (!e) return t;
        const n = t ? t.clone() : new Qt();
        return n.update(e), n;
      }
      function Z9(t, e) {
        return Fe().captureException(t, void 0);
      }
      function Yc(t, e) {
        return Fe().captureEvent(t, e);
      }
      function $9() {
        const t = ge();
        return t?.getOptions().enabled !== false && !!t?.getTransport();
      }
      function pa(t) {
        const e = $t(), { user: n } = jc(e, Fe()), { userAgent: r } = me.navigator || {}, s = of({
          user: n,
          ...r && {
            userAgent: r
          },
          ...t
        }), o = e.getSession();
        return o?.status === "ok" && o0(o, {
          status: "exited"
        }), Kc(), e.setSession(s), s;
      }
      function Kc() {
        const t = $t(), n = Fe().getSession() || t.getSession();
        n && af(n), Jc(), t.setSession();
      }
      function Jc() {
        const t = $t(), e = ge(), n = t.getSession();
        n && e && e.captureSession(n);
      }
      function Us(t = false) {
        if (t) {
          Kc();
          return;
        }
        Jc();
      }
      const e8 = "7";
      function t8(t) {
        const e = t.protocol ? `${t.protocol}:` : "", n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
      }
      function n8(t) {
        return `${t8(t)}${t.projectId}/envelope/`;
      }
      function r8(t, e) {
        const n = {
          sentry_version: e8
        };
        return t.publicKey && (n.sentry_key = t.publicKey), e && (n.sentry_client = `${e.name}/${e.version}`), new URLSearchParams(n).toString();
      }
      function s8(t, e, n) {
        return e || `${n8(t)}?${r8(t, n)}`;
      }
      const ma = [];
      function o8(t) {
        const e = {};
        return t.forEach((n) => {
          const { name: r } = n, s = e[r];
          s && !s.isDefaultInstance && n.isDefaultInstance || (e[r] = n);
        }), Object.values(e);
      }
      function i8(t) {
        const e = t.defaultIntegrations || [], n = t.integrations;
        e.forEach((s) => {
          s.isDefaultInstance = true;
        });
        let r;
        if (Array.isArray(n)) r = [
          ...e,
          ...n
        ];
        else if (typeof n == "function") {
          const s = n(e);
          r = Array.isArray(s) ? s : [
            s
          ];
        } else r = e;
        return o8(r);
      }
      function a8(t, e) {
        const n = {};
        return e.forEach((r) => {
          r?.beforeSetup && r.beforeSetup(t);
        }), e.forEach((r) => {
          r && Xc(t, r, n);
        }), n;
      }
      function ha(t, e) {
        for (const n of e) n?.afterAllSetup && n.afterAllSetup(t);
      }
      function Xc(t, e, n) {
        if (n[e.name]) {
          te && Q.log(`Integration skipped because it was already installed: ${e.name}`);
          return;
        }
        if (n[e.name] = e, !ma.includes(e.name) && typeof e.setupOnce == "function" && (e.setupOnce(), ma.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
          const r = e.preprocessEvent.bind(e);
          t.on("preprocessEvent", (s, o) => r(s, o, t));
        }
        if (typeof e.processEvent == "function") {
          const r = e.processEvent.bind(e), s = Object.assign((o, i) => r(o, i, t), {
            id: e.name
          });
          t.addEventProcessor(s);
        }
        [
          "processSpan",
          "processSegmentSpan"
        ].forEach((r) => {
          const s = e[r];
          typeof s == "function" && t.on(r, (o) => s.call(e, o, t));
        }), te && Q.log(`Integration installed: ${e.name}`);
      }
      function x8() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
      }
      function l8() {
        return "npm";
      }
      function c8() {
        return !x8() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
      }
      function si() {
        return typeof window < "u" && (!c8() || u8());
      }
      function u8() {
        return me.process?.type === "renderer";
      }
      function d8(t, e) {
        const n = e ? "auto" : "never";
        return [
          {
            type: "log",
            item_count: t.length,
            content_type: "application/vnd.sentry.items.log+json"
          },
          {
            version: 2,
            ...si() && {
              ingest_settings: {
                infer_ip: n,
                infer_user_agent: n
              }
            },
            items: t
          }
        ];
      }
      function f8(t, e, n, r, s) {
        const o = {};
        return e?.sdk && (o.sdk = {
          name: e.sdk.name,
          version: e.sdk.version
        }), n && r && (o.dsn = m0(r)), zn(o, [
          d8(t, s)
        ]);
      }
      function go(t, e) {
        const n = e ?? E8(t) ?? [];
        if (n.length === 0) return;
        const r = t.getOptions(), s = f8(n, r._metadata, r.tunnel, t.getDsn(), r.sendDefaultPii);
        Qc().set(t, []), t.emit("flushLogs"), t.sendEnvelope(s);
      }
      function E8(t) {
        return Qc().get(t);
      }
      function Qc() {
        return f0("clientToLogBufferMap", () => /* @__PURE__ */ new WeakMap());
      }
      function p8(t, e) {
        const n = e ? "auto" : "never";
        return [
          {
            type: "trace_metric",
            item_count: t.length,
            content_type: "application/vnd.sentry.items.trace-metric+json"
          },
          {
            version: 2,
            ...si() && {
              ingest_settings: {
                infer_ip: n,
                infer_user_agent: n
              }
            },
            items: t
          }
        ];
      }
      function m8(t, e, n, r, s) {
        const o = {};
        return e?.sdk && (o.sdk = {
          name: e.sdk.name,
          version: e.sdk.version
        }), n && r && (o.dsn = m0(r)), zn(o, [
          p8(t, s)
        ]);
      }
      function Zc(t, e) {
        const n = e ?? h8(t) ?? [];
        if (n.length === 0) return;
        const r = t.getOptions(), s = m8(n, r._metadata, r.tunnel, t.getDsn(), r.sendDefaultPii);
        $c().set(t, []), t.emit("flushMetrics"), t.sendEnvelope(s);
      }
      function h8(t) {
        return $c().get(t);
      }
      function $c() {
        return f0("clientToMetricBufferMap", () => /* @__PURE__ */ new WeakMap());
      }
      function eu(t) {
        return typeof t == "object" && typeof t.unref == "function" && t.unref(), t;
      }
      const oi = Symbol.for("SentryBufferFullError");
      function ii(t = 100) {
        const e = /* @__PURE__ */ new Set();
        function n() {
          return e.size < t;
        }
        function r(i) {
          e.delete(i);
        }
        function s(i) {
          if (!n()) return ri(oi);
          const a = i();
          return e.add(a), a.then(() => r(a), () => r(a)), a;
        }
        function o(i) {
          if (!e.size) return er(true);
          const a = Promise.allSettled(Array.from(e)).then(() => true);
          if (!i) return a;
          const x = [
            a,
            new Promise((l) => eu(setTimeout(() => l(false), i)))
          ];
          return Promise.race(x);
        }
        return {
          get $() {
            return Array.from(e);
          },
          add: s,
          drain: o
        };
      }
      const C8 = 60 * 1e3;
      function B8(t, e = X0()) {
        const n = parseInt(`${t}`, 10);
        if (!isNaN(n)) return n * 1e3;
        const r = Date.parse(`${t}`);
        return isNaN(r) ? C8 : r - e;
      }
      function g8(t, e) {
        return t[e] || t.all || 0;
      }
      function _8(t, e, n = X0()) {
        return g8(t, e) > n;
      }
      function A8(t, { statusCode: e, headers: n }, r = X0()) {
        const s = {
          ...t
        }, o = n?.["x-sentry-rate-limits"], i = n?.["retry-after"];
        if (o) for (const a of o.trim().split(",")) {
          const [x, l, , , u] = a.split(":", 5), f = parseInt(x, 10), p = (isNaN(f) ? 60 : f) * 1e3;
          if (!l) s.all = r + p;
          else for (const E of l.split(";")) E === "metric_bucket" ? (!u || u.split(";").includes("custom")) && (s[E] = r + p) : s[E] = r + p;
        }
        else i ? s.all = r + B8(i, r) : e === 429 && (s.all = r + 60 * 1e3);
        return s;
      }
      const tu = 64;
      function F8(t, e, n = ii(t.bufferSize || tu)) {
        let r = {};
        const s = (i) => n.drain(i);
        function o(i) {
          const a = [];
          if (ho(i, (f, p) => {
            const E = sa(p);
            _8(r, E) ? t.recordDroppedEvent("ratelimit_backoff", E) : a.push(f);
          }), a.length === 0) return Promise.resolve({});
          const x = zn(i[0], a), l = (f) => {
            if (i9(x, [
              "client_report"
            ])) {
              te && Q.warn(`Dropping client report. Will not send outcomes (reason: ${f}).`);
              return;
            }
            ho(x, (p, E) => {
              t.recordDroppedEvent(f, sa(E));
            });
          }, u = () => e({
            body: a9(x)
          }).then((f) => f.statusCode === 413 ? (te && Q.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), l("send_error"), f) : (te && f.statusCode !== void 0 && (f.statusCode < 200 || f.statusCode >= 300) && Q.warn(`Sentry responded with status code ${f.statusCode} to sent event.`), r = A8(r, f), f), (f) => {
            throw l("network_error"), te && Q.error("Encountered error running transport request:", f), f;
          });
          return n.add(u).then((f) => f, (f) => {
            if (f === oi) return te && Q.error("Skipped sending event because buffer is full."), l("queue_overflow"), Promise.resolve({});
            throw f;
          });
        }
        return {
          send: o,
          flush: s
        };
      }
      function D8(t, e, n) {
        const r = [
          {
            type: "client_report"
          },
          {
            timestamp: qn(),
            discarded_events: t
          }
        ];
        return zn(e ? {
          dsn: e
        } : {}, [
          r
        ]);
      }
      function nu(t) {
        const e = [];
        t.message && e.push(t.message);
        try {
          const n = t.exception.values[t.exception.values.length - 1];
          n?.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`));
        } catch {
        }
        return e;
      }
      function v8(t) {
        const { trace_id: e, parent_span_id: n, span_id: r, status: s, origin: o, data: i, op: a } = t.contexts?.trace ?? {};
        return {
          data: i ?? {},
          description: t.transaction,
          op: a,
          parent_span_id: n,
          span_id: r ?? "",
          start_timestamp: t.start_timestamp ?? 0,
          status: s,
          timestamp: t.timestamp,
          trace_id: e ?? "",
          origin: o,
          profile_id: i?.[ei],
          exclusive_time: i?.[Cn],
          measurements: t.measurements,
          is_segment: true
        };
      }
      function b8(t) {
        return {
          type: "transaction",
          timestamp: t.timestamp,
          start_timestamp: t.start_timestamp,
          transaction: t.description,
          contexts: {
            trace: {
              trace_id: t.trace_id,
              span_id: t.span_id,
              parent_span_id: t.parent_span_id,
              op: t.op,
              status: t.status,
              origin: t.origin,
              data: {
                ...t.data,
                ...t.profile_id && {
                  [ei]: t.profile_id
                },
                ...t.exclusive_time && {
                  [Cn]: t.exclusive_time
                }
              }
            }
          },
          measurements: t.measurements
        };
      }
      const Ca = "Not capturing exception because it's already been captured.", Ba = "Discarded session because of missing or non-string release", ru = Symbol.for("SentryInternalError"), su = Symbol.for("SentryDoNotSendEventError"), k8 = 5e3;
      function Pr(t) {
        return {
          message: t,
          [ru]: true
        };
      }
      function js(t) {
        return {
          message: t,
          [su]: true
        };
      }
      function ga(t) {
        return !!t && typeof t == "object" && ru in t;
      }
      function _a(t) {
        return !!t && typeof t == "object" && su in t;
      }
      function Aa(t, e, n, r, s) {
        let o = 0, i, a = false;
        t.on(n, () => {
          o = 0, clearTimeout(i), a = false;
        }), t.on(e, (x) => {
          o += r(x), o >= 8e5 ? s(t) : a || (a = true, i = eu(setTimeout(() => {
            s(t);
          }, k8)));
        }), t.on("flush", () => {
          s(t);
        });
      }
      class y8 {
        constructor(e) {
          if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = ii(e.transportOptions?.bufferSize ?? tu), e.dsn ? this._dsn = Mf(e.dsn) : te && Q.warn("No DSN provided, client will not send events."), this._dsn) {
            const r = s8(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
              tunnel: this._options.tunnel,
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...e.transportOptions,
              url: r
            });
          }
          this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs, this._options.enableLogs && Aa(this, "afterCaptureLog", "flushLogs", P8, go), (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? true) && Aa(this, "afterCaptureMetric", "flushMetrics", T8, Zc);
        }
        captureException(e, n, r) {
          const s = Dt();
          if (Ki(e)) return te && Q.log(Ca), s;
          const o = {
            event_id: s,
            ...n
          };
          return this._process(() => this.eventFromException(e, o).then((i) => this._captureEvent(i, o, r)).then((i) => i), "error"), o.event_id;
        }
        captureMessage(e, n, r, s) {
          const o = {
            event_id: Dt(),
            ...r
          }, i = Ko(e) ? e : String(e), a = r0(e), x = a ? this.eventFromMessage(i, n, o) : this.eventFromException(e, o);
          return this._process(() => x.then((l) => this._captureEvent(l, o, s)), a ? "unknown" : "error"), o.event_id;
        }
        captureEvent(e, n, r) {
          const s = Dt();
          if (n?.originalException && Ki(n.originalException)) return te && Q.log(Ca), s;
          const o = {
            event_id: s,
            ...n
          }, i = e.sdkProcessingMetadata || {}, a = i.capturedSpanScope, x = i.capturedSpanIsolationScope, l = Fa(e.type);
          return this._process(() => this._captureEvent(e, o, a || r, x), l), o.event_id;
        }
        captureSession(e) {
          this.sendSession(e), o0(e, {
            init: false
          });
        }
        getDsn() {
          return this._dsn;
        }
        getOptions() {
          return this._options;
        }
        getSdkMetadata() {
          return this._options._metadata;
        }
        getTransport() {
          return this._transport;
        }
        async flush(e) {
          const n = this._transport;
          if (this.emit("flush"), !n) return true;
          const r = await this._isClientDoneProcessing(e), s = await n.flush(e);
          return r && s;
        }
        async close(e) {
          go(this);
          const n = await this.flush(e);
          return this.getOptions().enabled = false, this.emit("close"), n;
        }
        getEventProcessors() {
          return this._eventProcessors;
        }
        addEventProcessor(e) {
          this._eventProcessors.push(e);
        }
        init() {
          (this._isEnabled() || this._options.integrations.some(({ name: e }) => e.startsWith("Spotlight"))) && this._setupIntegrations();
        }
        getIntegrationByName(e) {
          return this._integrations[e];
        }
        addIntegration(e) {
          const n = this._integrations[e.name];
          !n && e.beforeSetup && e.beforeSetup(this), Xc(this, e, this._integrations), n || ha(this, [
            e
          ]);
        }
        sendEvent(e, n = {}) {
          this.emit("beforeSendEvent", e, n);
          let r = p9(e, this._dsn, this._options._metadata, this._options.tunnel);
          for (const s of n.attachments || []) r = o9(r, c9(s));
          this.sendEnvelope(r).then((s) => this.emit("afterSendEvent", e, s));
        }
        sendSession(e) {
          const { release: n, environment: r = ti } = this._options;
          if ("aggregates" in e) {
            const o = e.attrs || {};
            if (!o.release && !n) {
              te && Q.warn(Ba);
              return;
            }
            o.release = o.release || n, o.environment = o.environment || r, e.attrs = o;
          } else {
            if (!e.release && !n) {
              te && Q.warn(Ba);
              return;
            }
            e.release = e.release || n, e.environment = e.environment || r;
          }
          this.emit("beforeSendSession", e);
          const s = E9(e, this._dsn, this._options._metadata, this._options.tunnel);
          this.sendEnvelope(s);
        }
        recordDroppedEvent(e, n, r = 1) {
          if (this._options.sendClientReports) {
            const s = `${e}:${n}`;
            te && Q.log(`Recording outcome: "${s}"${r > 1 ? ` (${r} times)` : ""}`), this._outcomes[s] = (this._outcomes[s] || 0) + r;
          }
        }
        on(e, n) {
          const r = this._hooks[e] = this._hooks[e] || /* @__PURE__ */ new Set(), s = (...o) => n(...o);
          return r.add(s), () => {
            r.delete(s);
          };
        }
        emit(e, ...n) {
          const r = this._hooks[e];
          r && r.forEach((s) => s(...n));
        }
        async sendEnvelope(e) {
          if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) try {
            return await this._transport.send(e);
          } catch (n) {
            return te && Q.error("Error while sending envelope:", n), {};
          }
          return te && Q.error("Transport disabled"), {};
        }
        registerCleanup(e) {
        }
        dispose() {
        }
        _setupIntegrations() {
          const { integrations: e } = this._options;
          this._integrations = a8(this, e), ha(this, e);
        }
        _updateSessionFromEvent(e, n) {
          let r = n.level === "fatal", s = false;
          const o = n.exception?.values;
          if (o) {
            s = true, r = false;
            for (const x of o) if (x.mechanism?.handled === false) {
              r = true;
              break;
            }
          }
          const i = e.status === "ok";
          (i && e.errors === 0 || i && r) && (o0(e, {
            ...r && {
              status: "crashed"
            },
            errors: e.errors || Number(s || r)
          }), this.captureSession(e));
        }
        async _isClientDoneProcessing(e) {
          let n = 0;
          for (; !e || n < e; ) {
            if (await new Promise((r) => setTimeout(r, 1)), !this._numProcessing) return true;
            n++;
          }
          return false;
        }
        _isEnabled() {
          return this.getOptions().enabled !== false && this._transport !== void 0;
        }
        _prepareEvent(e, n, r, s) {
          const o = this.getOptions(), i = Object.keys(this._integrations);
          return !n.integrations && i?.length && (n.integrations = i), this.emit("preprocessEvent", e, n), e.type || s.setLastEventId(e.event_id || n.event_id), W9(o, e, n, r, this, s).then((a) => {
            if (a === null) return a;
            this.emit("postprocessEvent", a, n), a.contexts = {
              trace: {
                ...a.contexts?.trace,
                ...Bf(r)
              },
              ...a.contexts
            };
            const x = Rc(this, r);
            return a.sdkProcessingMetadata = {
              dynamicSamplingContext: x,
              ...a.sdkProcessingMetadata
            }, a;
          });
        }
        _captureEvent(e, n = {}, r = Fe(), s = $t()) {
          return te && _o(e) && Q.log(`Captured error event \`${nu(e)[0] || "<unknown>"}\``), this._processEvent(e, n, r, s).then((o) => o.event_id, (o) => {
            te && (_a(o) ? Q.log(o.message) : ga(o) ? Q.warn(o.message) : Q.warn(o));
          });
        }
        _processEvent(e, n, r, s) {
          const o = this.getOptions(), { sampleRate: i } = o, a = ou(e), x = _o(e), u = `before send for type \`${e.type || "error"}\``, f = typeof i > "u" ? void 0 : L0(i);
          if (x && typeof f == "number" && cn() > f) return this.recordDroppedEvent("sample_rate", "error"), ri(js(`Discarding event because it's not included in the random sample (sampling rate = ${i})`));
          const p = Fa(e.type);
          return this._prepareEvent(e, n, r, s).then((E) => {
            if (E === null) throw this.recordDroppedEvent("event_processor", p), js("An event processor returned `null`, will not send event.");
            if (n.data?.__sentry__ === true) return E;
            const C = S8(this, o, E, n);
            return w8(C, u);
          }).then((E) => {
            if (E === null) {
              if (this.recordDroppedEvent("before_send", p), a) {
                const A = 1 + (e.spans || []).length;
                this.recordDroppedEvent("before_send", "span", A);
              }
              throw js(`${u} returned \`null\`, will not send event.`);
            }
            const m = r.getSession() || s.getSession();
            if (x && m && this._updateSessionFromEvent(m, E), a) {
              const B = E.sdkProcessingMetadata?.spanCountBeforeProcessing || 0, A = E.spans ? E.spans.length : 0, D = B - A;
              D > 0 && this.recordDroppedEvent("before_send", "span", D);
            }
            const C = E.transaction_info;
            if (a && C && E.transaction !== e.transaction) {
              const B = "custom";
              E.transaction_info = {
                ...C,
                source: B
              };
            }
            return this.sendEvent(E, n), E;
          }).then(null, (E) => {
            throw _a(E) || ga(E) ? E : (this.captureException(E, {
              mechanism: {
                handled: false,
                type: "internal"
              },
              data: {
                __sentry__: true
              },
              originalException: E
            }), Pr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${E}`));
          });
        }
        _process(e, n) {
          this._numProcessing++, this._promiseBuffer.add(e).then((r) => (this._numProcessing--, r), (r) => (this._numProcessing--, r === oi && this.recordDroppedEvent("queue_overflow", n), r));
        }
        _clearOutcomes() {
          const e = this._outcomes;
          return this._outcomes = {}, Object.entries(e).map(([n, r]) => {
            const [s, o] = n.split(":");
            return {
              reason: s,
              category: o,
              quantity: r
            };
          });
        }
        _flushOutcomes() {
          te && Q.log("Flushing outcomes...");
          const e = this._clearOutcomes();
          if (e.length === 0) {
            te && Q.log("No outcomes to send");
            return;
          }
          if (!this._dsn) {
            te && Q.log("No dsn provided, will not send outcomes");
            return;
          }
          te && Q.log("Sending outcomes:", e);
          const n = D8(e, this._options.tunnel && m0(this._dsn));
          this.sendEnvelope(n);
        }
      }
      function Fa(t) {
        return t === "replay_event" ? "replay" : t || "error";
      }
      function w8(t, e) {
        const n = `${e} must return \`null\` or a valid event.`;
        if (Y0(t)) return t.then((r) => {
          if (!I0(r) && r !== null) throw Pr(n);
          return r;
        }, (r) => {
          throw Pr(`${e} rejected with ${r}`);
        });
        if (!I0(t) && t !== null) throw Pr(n);
        return t;
      }
      function S8(t, e, n, r) {
        const { beforeSend: s, beforeSendTransaction: o, ignoreSpans: i } = e, a = !Lc(e.beforeSendSpan) && e.beforeSendSpan;
        let x = n;
        if (_o(x) && s) return s(x, r);
        if (ou(x)) {
          if (a || i) {
            const l = v8(x);
            if (i?.length && M0({
              description: l.description,
              op: l.op,
              attributes: l.data
            }, i)) return null;
            if (a) {
              const u = a(l);
              u ? x = Q0(n, b8(u)) : po();
            }
            if (x.spans) {
              const u = [], f = x.spans;
              for (const E of f) {
                if (i?.length && M0({
                  description: E.description,
                  op: E.op,
                  attributes: E.data
                }, i)) {
                  Kf(f, E);
                  continue;
                }
                if (a) {
                  const m = a(E);
                  m ? u.push(m) : (po(), u.push(E));
                } else u.push(E);
              }
              const p = x.spans.length - u.length;
              p && t.recordDroppedEvent("before_send", "span", p), x.spans = u;
            }
          }
          if (o) {
            if (x.spans) {
              const l = x.spans.length;
              x.sdkProcessingMetadata = {
                ...n.sdkProcessingMetadata,
                spanCountBeforeProcessing: l
              };
            }
            return o(x, r);
          }
        }
        return x;
      }
      function _o(t) {
        return t.type === void 0;
      }
      function ou(t) {
        return t.type === "transaction";
      }
      function T8(t) {
        let e = 0;
        return t.name && (e += t.name.length * 2), e += 8, e + iu(t.attributes);
      }
      function P8(t) {
        let e = 0;
        return t.message && (e += t.message.length * 2), e + iu(t.attributes);
      }
      function iu(t) {
        if (!t) return 0;
        let e = 0;
        return Object.values(t).forEach((n) => {
          Array.isArray(n) ? e += n.length * Da(n[0]) : r0(n) ? e += Da(n) : e += 100;
        }), e;
      }
      function Da(t) {
        return typeof t == "string" ? t.length * 2 : typeof t == "number" ? 8 : typeof t == "boolean" ? 4 : 0;
      }
      function I8(t) {
        return fs(t) && "__sentry_fetch_url_host__" in t && typeof t.__sentry_fetch_url_host__ == "string";
      }
      function va(t) {
        return I8(t) ? `${t.message} (${t.__sentry_fetch_url_host__})` : t.message;
      }
      function N8(t, e) {
        e.debug === true && (te ? Q.enable() : Hn(() => {
          console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
        })), Fe().update(e.initialScope);
        const r = new t(e);
        return R8(r), r.init(), r;
      }
      function R8(t) {
        Fe().setClient(t);
      }
      function L8(t) {
        "aggregates" in t ? t.attrs?.ip_address === void 0 && (t.attrs = {
          ...t.attrs,
          ip_address: "{{auto}}"
        }) : t.ipAddress === void 0 && (t.ipAddress = "{{auto}}");
      }
      function au(t, e, n = [
        e
      ], r = "npm") {
        const s = (t._metadata = t._metadata || {}).sdk = t._metadata.sdk || {};
        s.name || (s.name = `sentry.javascript.${e}`, s.packages = n.map((o) => ({
          name: `${r}:@sentry/${o}`,
          version: Sn
        })), s.version = Sn);
      }
      function xu(t = {}) {
        const e = t.client || ge();
        if (!$9() || !e) return {};
        const n = On(), r = p0(n);
        if (r.getTraceData) return r.getTraceData(t);
        const s = t.scope || Fe(), o = t.span || ht(), i = o ? jf(o) : M8(s), a = o ? En(o) : Rc(e, s), x = kf(a);
        if (!gc.test(i)) return Q.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
        const u = {
          "sentry-trace": i,
          baggage: x
        };
        return t.propagateTraceparent && (u.traceparent = o ? Gf(o) : O8(s)), u;
      }
      function M8(t) {
        const { traceId: e, sampled: n, propagationSpanId: r } = t.getPropagationContext();
        return _c(e, r, n);
      }
      function O8(t) {
        const { traceId: e, sampled: n, propagationSpanId: r } = t.getPropagationContext();
        return Ac(e, r, n);
      }
      const H8 = 100;
      function Nn(t, e) {
        const n = ge(), r = $t();
        if (!n) return;
        const { beforeBreadcrumb: s = null, maxBreadcrumbs: o = H8 } = n.getOptions();
        if (o <= 0) return;
        const a = {
          timestamp: qn(),
          ...t
        }, x = s ? Hn(() => s(a, e)) : a;
        x !== null && (n.emit && n.emit("beforeAddBreadcrumb", x, e), r.addBreadcrumb(x, o));
      }
      let ba;
      const q8 = "FunctionToString", ka = /* @__PURE__ */ new WeakMap(), z8 = () => ({
        name: q8,
        setupOnce() {
          ba = Function.prototype.toString;
          try {
            Function.prototype.toString = function(...t) {
              const e = Qo(this), n = ka.has(ge()) && e !== void 0 ? e : this;
              return ba.apply(n, t);
            };
          } catch {
          }
        },
        setup(t) {
          ka.set(t, true);
        }
      }), U8 = z8, j8 = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
        /^ResizeObserver loop completed with undelivered notifications.$/,
        /^Cannot redefine property: googletag$/,
        /^Can't find variable: gmo$/,
        /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
        /can't redefine non-configurable property "solana"/,
        /vv\(\)\.getRestrictions is not a function/,
        /Can't find variable: _AutofillCallbackHandler/,
        /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
        /^Java exception was raised during method invocation$/
      ], G8 = "EventFilters", W8 = (t = {}) => {
        let e;
        return {
          name: G8,
          setup(n) {
            const r = n.getOptions();
            e = ya(t, r);
          },
          processEvent(n, r, s) {
            if (!e) {
              const o = s.getOptions();
              e = ya(t, o);
            }
            return Y8(n, e) ? null : n;
          }
        };
      }, V8 = (t = {}) => ({
        ...W8(t),
        name: "InboundFilters"
      });
      function ya(t = {}, e = {}) {
        return {
          allowUrls: [
            ...t.allowUrls || [],
            ...e.allowUrls || []
          ],
          denyUrls: [
            ...t.denyUrls || [],
            ...e.denyUrls || []
          ],
          ignoreErrors: [
            ...t.ignoreErrors || [],
            ...e.ignoreErrors || [],
            ...t.disableErrorDefaults ? [] : j8
          ],
          ignoreTransactions: [
            ...t.ignoreTransactions || [],
            ...e.ignoreTransactions || []
          ]
        };
      }
      function Y8(t, e) {
        if (t.type) {
          if (t.type === "transaction" && J8(t, e.ignoreTransactions)) return te && Q.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${bn(t)}`), true;
        } else {
          if (K8(t, e.ignoreErrors)) return te && Q.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${bn(t)}`), true;
          if ($8(t)) return te && Q.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${bn(t)}`), true;
          if (X8(t, e.denyUrls)) return te && Q.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${bn(t)}.
Url: ${Wr(t)}`), true;
          if (!Q8(t, e.allowUrls)) return te && Q.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${bn(t)}.
Url: ${Wr(t)}`), true;
        }
        return false;
      }
      function K8(t, e) {
        return e?.length ? nu(t).some((n) => un(n, e)) : false;
      }
      function J8(t, e) {
        if (!e?.length) return false;
        const n = t.transaction;
        return n ? un(n, e) : false;
      }
      function X8(t, e) {
        if (!e?.length) return false;
        const n = Wr(t);
        return n ? un(n, e) : false;
      }
      function Q8(t, e) {
        if (!e?.length) return true;
        const n = Wr(t);
        return n ? un(n, e) : true;
      }
      function Z8(t = []) {
        for (let e = t.length - 1; e >= 0; e--) {
          const n = t[e];
          if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
        }
        return null;
      }
      function Wr(t) {
        try {
          const n = [
            ...t.exception?.values ?? []
          ].reverse().find((r) => r.mechanism?.parent_id === void 0 && r.stacktrace?.frames?.length)?.stacktrace?.frames;
          return n ? Z8(n) : null;
        } catch {
          return te && Q.error(`Cannot extract url for event ${bn(t)}`), null;
        }
      }
      function $8(t) {
        return t.exception?.values?.length ? !t.message && !t.exception.values.some((e) => e.stacktrace || e.type && e.type !== "Error" || e.value) : false;
      }
      function eE(t, e, n, r, s, o) {
        if (!s.exception?.values || !o || !Jt(o.originalException, Error)) return;
        const i = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
        i && (s.exception.values = Ao(t, e, r, o.originalException, n, s.exception.values, i, 0));
      }
      function Ao(t, e, n, r, s, o, i, a) {
        if (o.length >= n + 1) return o;
        let x = [
          ...o
        ];
        if (Jt(r[s], Error)) {
          wa(i, a, r);
          const l = t(e, r[s]), u = x.length;
          Sa(l, s, u, a), x = Ao(t, e, n, r[s], s, [
            l,
            ...x
          ], l, u);
        }
        return lu(r) && r.errors.forEach((l, u) => {
          if (Jt(l, Error)) {
            wa(i, a, r);
            const f = t(e, l), p = x.length;
            Sa(f, `errors[${u}]`, p, a), x = Ao(t, e, n, l, s, [
              f,
              ...x
            ], f, p);
          }
        }), x;
      }
      function lu(t) {
        return Array.isArray(t.errors);
      }
      function wa(t, e, n) {
        t.mechanism = {
          handled: true,
          type: "auto.core.linked_errors",
          ...lu(n) && {
            is_exception_group: true
          },
          ...t.mechanism,
          exception_id: e
        };
      }
      function Sa(t, e, n, r) {
        t.mechanism = {
          handled: true,
          ...t.mechanism,
          type: "chained",
          source: e,
          exception_id: n,
          parent_id: r
        };
      }
      function tE(t) {
        const e = "console", n = mn(e, t);
        return hn(e, nE), n;
      }
      function nE() {
        "console" in me && Ld.forEach(function(t) {
          t in me.console && pt(me.console, t, function(e) {
            return zr[t] = e, function(...n) {
              Ft("console", {
                args: n,
                level: t
              }), zr[t]?.apply(me.console, n);
            };
          });
        });
      }
      function rE(t) {
        return t === "warn" ? "warning" : [
          "fatal",
          "error",
          "warning",
          "log",
          "info",
          "debug"
        ].includes(t) ? t : "log";
      }
      const sE = "Dedupe", oE = () => {
        let t;
        return {
          name: sE,
          processEvent(e) {
            if (e.type) return e;
            try {
              if (aE(e, t)) return te && Q.warn("Event dropped due to being a duplicate of previously captured event."), null;
            } catch {
            }
            return t = e;
          }
        };
      }, iE = oE;
      function aE(t, e) {
        return e ? !!(xE(t, e) || lE(t, e)) : false;
      }
      function xE(t, e) {
        const n = t.message, r = e.message;
        return !(!n && !r || n && !r || !n && r || n !== r || !uu(t, e) || !cu(t, e));
      }
      function lE(t, e) {
        const n = Ta(e), r = Ta(t);
        return !(!n || !r || n.type !== r.type || n.value !== r.value || !uu(t, e) || !cu(t, e));
      }
      function cu(t, e) {
        let n = Ui(t), r = Ui(e);
        if (!n && !r) return true;
        if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return false;
        for (let s = 0; s < r.length; s++) {
          const o = r[s], i = n[s];
          if (o.filename !== i.filename || o.lineno !== i.lineno || o.colno !== i.colno || o.function !== i.function) return false;
        }
        return true;
      }
      function uu(t, e) {
        let n = t.fingerprint, r = e.fingerprint;
        if (!n && !r) return true;
        if (n && !r || !n && r) return false;
        n = n, r = r;
        try {
          return n.join("") === r.join("");
        } catch {
          return false;
        }
      }
      function Ta(t) {
        return t.exception?.values?.[0];
      }
      const cE = "ConversationId", uE = () => ({
        name: cE,
        setup(t) {
          t.on("spanStart", (e) => {
            const n = Fe().getScopeData(), r = $t().getScopeData(), s = n.conversationId || r.conversationId;
            if (s) {
              const { op: o, data: i, description: a } = _e(e);
              if (!o?.startsWith("gen_ai.") && !i["ai.operationId"] && !a?.startsWith("ai.")) return;
              e.setAttribute(_f, s);
            }
          });
        }
      }), dE = uE;
      function du(t) {
        if (t !== void 0) return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0;
      }
      function fE(t, e, n, r, s) {
        if (!t.fetchData) return;
        const { method: o, url: i } = t.fetchData, a = St() && e(i);
        if (t.endTimestamp) {
          const m = t.fetchData.__span;
          if (!m) return;
          const C = r[m];
          C && (a && (mE(C, t), EE(C, t, s)), delete r[m]);
          return;
        }
        const { spanOrigin: x = "auto.http.browser", propagateTraceparent: l = false } = typeof s == "object" ? s : {
          spanOrigin: s
        }, u = ge(), p = !!ht() || !!u && Zt(u), E = a && p ? Un(BE(i, o, x)) : new Mt();
        if (a && !p && u?.recordDroppedEvent("no_parent_span", "span"), t.fetchData.__span = E.spanContext().spanId, r[E.spanContext().spanId] = E, n(t.fetchData.url)) {
          const m = t.args[0], C = {
            ...t.args[1] || {}
          }, B = pE(m, C, St() && p ? E : void 0, l);
          B && (t.args[1] = C, C.headers = B);
        }
        if (u) {
          const m = {
            input: t.args,
            response: t.response,
            startTimestamp: t.startTimestamp,
            endTimestamp: t.endTimestamp
          };
          u.emit("beforeOutgoingRequestSpan", E, m);
        }
        return E;
      }
      function EE(t, e, n) {
        (typeof n == "object" && n !== null ? n.onRequestSpanEnd : void 0)?.(t, {
          headers: e.response?.headers,
          error: e.error
        });
      }
      function pE(t, e, n, r) {
        const s = xu({
          span: n,
          propagateTraceparent: r
        }), o = s["sentry-trace"], i = s.baggage, a = s.traceparent;
        if (!o) return;
        const x = e.headers || (Jo(t) ? t.headers : void 0);
        if (x) if (hE(x)) {
          const l = new Headers(x);
          if (l.get("sentry-trace") || l.set("sentry-trace", o), r && a && !l.get("traceparent") && l.set("traceparent", a), i) {
            const u = l.get("baggage");
            u ? Cr(u) || l.set("baggage", `${u},${i}`) : l.set("baggage", i);
          }
          return l;
        } else if (CE(x)) {
          const l = [
            ...x
          ];
          l.find((f) => f[0] === "sentry-trace") || l.push([
            "sentry-trace",
            o
          ]), r && a && !l.find((f) => f[0] === "traceparent") && l.push([
            "traceparent",
            a
          ]);
          const u = x.find((f) => f[0] === "baggage" && typeof f[1] == "string" && Cr(f[1]));
          return i && !u && l.push([
            "baggage",
            i
          ]), l;
        } else {
          const l = "sentry-trace" in x ? x["sentry-trace"] : void 0, u = "traceparent" in x ? x.traceparent : void 0, f = "baggage" in x ? x.baggage : void 0, p = f ? Array.isArray(f) ? [
            ...f
          ] : [
            f
          ] : [], E = f && (Array.isArray(f) ? f.find((C) => Cr(C)) : Cr(f));
          i && !E && p.push(i);
          const m = Object.assign({}, x, {
            "sentry-trace": l ?? o,
            baggage: p.length > 0 ? p.join(",") : void 0
          });
          return r && a && !u && (m.traceparent = a), m;
        }
        else return {
          ...s
        };
      }
      function mE(t, e) {
        if (e.response) {
          pc(t, e.response.status);
          const n = e.response?.headers?.get("content-length");
          if (n) {
            const r = parseInt(n);
            r > 0 && t.setAttribute("http.response_content_length", r);
          }
        } else e.error && t.setStatus({
          code: Xe,
          message: "internal_error"
        });
        t.end();
      }
      function Cr(t) {
        return typeof t != "string" ? false : t.split(",").some((e) => e.trim().startsWith(Gr));
      }
      function hE(t) {
        return typeof Headers < "u" && Jt(t, Headers);
      }
      function CE(t) {
        return Array.isArray(t) ? t.every((e) => Array.isArray(e) && e.length === 2 && typeof e[0] == "string") : false;
      }
      function BE(t, e, n) {
        if (t.startsWith("data:")) {
          const o = dn(t);
          return {
            name: `${e} ${o}`,
            attributes: Pa(t, void 0, e, n)
          };
        }
        const r = Wc(t), s = r ? z9(r) : t;
        return {
          name: `${e} ${s}`,
          attributes: Pa(t, r, e, n)
        };
      }
      function Pa(t, e, n, r) {
        const s = {
          url: dn(t),
          type: "fetch",
          "http.method": n,
          [Ke]: r,
          [Tt]: "http.client"
        };
        return e && (Gc(e) || (s["http.url"] = dn(e.href), s["server.address"] = e.host), e.search && (s["http.query"] = e.search), e.hash && (s["http.fragment"] = e.hash)), s;
      }
      const H0 = me;
      function gE() {
        return "history" in H0 && !!H0.history;
      }
      function _E() {
        if (!("fetch" in H0)) return false;
        try {
          return new Headers(), new Request("data:,"), new Response(), true;
        } catch {
          return false;
        }
      }
      function Fo(t) {
        return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
      }
      function AE() {
        if (typeof EdgeRuntime == "string") return true;
        if (!_E()) return false;
        if (Fo(H0.fetch)) return true;
        let t = false;
        const e = H0.document;
        if (e && typeof e.createElement == "function") try {
          const n = e.createElement("iframe");
          n.hidden = true, e.head.appendChild(n), n.contentWindow?.fetch && (t = Fo(n.contentWindow.fetch)), e.head.removeChild(n);
        } catch (n) {
          te && Q.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
        }
        return t;
      }
      function fu(t, e) {
        const n = "fetch", r = mn(n, t);
        return hn(n, () => Eu(void 0, e)), r;
      }
      function FE(t) {
        const e = "fetch-body-resolved", n = mn(e, t);
        return hn(e, () => Eu(vE)), n;
      }
      function Eu(t, e = false) {
        e && !AE() || pt(me, "fetch", function(n) {
          return function(...r) {
            const s = new Error(), { method: o, url: i } = bE(r), a = {
              args: r,
              fetchData: {
                method: o,
                url: i
              },
              startTimestamp: Ye() * 1e3,
              virtualError: s,
              headers: kE(r)
            };
            return t || Ft("fetch", {
              ...a
            }), n.apply(me, r).then(async (x) => (t ? t(x) : Ft("fetch", {
              ...a,
              endTimestamp: Ye() * 1e3,
              response: x
            }), x), (x) => {
              Ft("fetch", {
                ...a,
                endTimestamp: Ye() * 1e3,
                error: x
              }), fs(x) && x.stack === void 0 && (x.stack = s.stack, ct(x, "framesToPop", 1));
              const u = ge()?.getOptions().enhanceFetchErrorMessages ?? "always";
              if (u !== false && x instanceof TypeError && (x.message === "Failed to fetch" || x.message === "Load failed" || x.message === "NetworkError when attempting to fetch resource.")) try {
                const E = new URL(a.fetchData.url).host;
                u === "always" ? x.message = `${x.message} (${E})` : ct(x, "__sentry_fetch_url_host__", E);
              } catch {
              }
              throw x;
            });
          };
        });
      }
      async function DE(t, e) {
        if (t?.body) {
          const n = t.body, r = n.getReader(), s = setTimeout(() => {
            n.cancel().then(null, () => {
            });
          }, 90 * 1e3);
          let o = true;
          for (; o; ) {
            let i;
            try {
              i = setTimeout(() => {
                n.cancel().then(null, () => {
                });
              }, 5e3);
              const { done: a } = await r.read();
              clearTimeout(i), a && (e(), o = false);
            } catch {
              o = false;
            } finally {
              clearTimeout(i);
            }
          }
          clearTimeout(s), r.releaseLock(), n.cancel().then(null, () => {
          });
        }
      }
      function vE(t) {
        let e;
        try {
          e = t.clone();
        } catch {
          return;
        }
        DE(e, () => {
          Ft("fetch-body-resolved", {
            endTimestamp: Ye() * 1e3,
            response: t
          });
        });
      }
      function Ir(t, e) {
        return !!t && typeof t == "object" && !!t[e];
      }
      function Ia(t) {
        return typeof t == "string" ? t : t ? Ir(t, "url") ? t.url : t.toString ? t.toString() : "" : "";
      }
      function bE(t) {
        if (t.length === 0) return {
          method: "GET",
          url: ""
        };
        if (t.length === 2) {
          const [n, r] = t;
          return {
            url: Ia(n),
            method: Ir(r, "method") ? String(r.method).toUpperCase() : Jo(n) && Ir(n, "method") ? String(n.method).toUpperCase() : "GET"
          };
        }
        const e = t[0];
        return {
          url: Ia(e),
          method: Ir(e, "method") ? String(e.method).toUpperCase() : "GET"
        };
      }
      function kE(t) {
        const [e, n] = t;
        try {
          if (typeof n == "object" && n !== null && "headers" in n && n.headers) return new Headers(n.headers);
          if (Jo(e)) return new Headers(e.headers);
        } catch {
        }
      }
      const de = me;
      let Do = 0;
      function pu() {
        return Do > 0;
      }
      function yE() {
        Do++, setTimeout(() => {
          Do--;
        });
      }
      function a0(t, e = {}) {
        function n(s) {
          return typeof s == "function";
        }
        if (!n(t)) return t;
        try {
          const s = t.__sentry_wrapped__;
          if (s) return typeof s == "function" ? s : t;
          if (Qo(t)) return t;
        } catch {
          return t;
        }
        const r = function(...s) {
          try {
            const o = s.map((i) => a0(i, e));
            return t.apply(this, o);
          } catch (o) {
            throw yE(), Zo((i) => {
              i.addEventProcessor((a) => (e.mechanism && (co(a, void 0), s0(a, e.mechanism)), a.extra = {
                ...a.extra,
                arguments: s
              }, a)), Z9(o);
            }), o;
          }
        };
        try {
          for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
        } catch {
        }
        xc(r, t), ct(t, "__sentry_wrapped__", r);
        try {
          Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
              return t.name;
            }
          });
        } catch {
        }
        return r;
      }
      function Vr() {
        const t = K0(), { referrer: e } = de.document || {}, { userAgent: n } = de.navigator || {}, r = {
          ...e && {
            Referer: e
          },
          ...n && {
            "User-Agent": n
          }
        };
        return {
          url: t,
          headers: r
        };
      }
      function ai(t, e) {
        const n = xi(t, e), r = {
          type: IE(e),
          value: NE(e)
        };
        return n.length && (r.stacktrace = {
          frames: n
        }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
      }
      function wE(t, e, n, r) {
        const o = ge()?.getOptions().normalizeDepth, i = HE(e), a = {
          __serialized__: Mc(e, o)
        };
        if (i) return {
          exception: {
            values: [
              ai(t, i)
            ]
          },
          extra: a
        };
        const x = {
          exception: {
            values: [
              {
                type: Es(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                value: ME(e, {
                  isUnhandledRejection: r
                })
              }
            ]
          },
          extra: a
        };
        if (n) {
          const l = xi(t, n);
          l.length && (x.exception.values[0].stacktrace = {
            frames: l
          });
        }
        return x;
      }
      function Gs(t, e) {
        return {
          exception: {
            values: [
              ai(t, e)
            ]
          }
        };
      }
      function xi(t, e) {
        const n = e.stacktrace || e.stack || "", r = TE(e), s = PE(e);
        try {
          return t(n, r, s);
        } catch {
        }
        return [];
      }
      const SE = /Minified React error #\d+;/i;
      function TE(t) {
        return t && SE.test(t.message) ? 1 : 0;
      }
      function PE(t) {
        return typeof t.framesToPop == "number" ? t.framesToPop : 0;
      }
      function mu(t) {
        return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? t instanceof WebAssembly.Exception : false;
      }
      function IE(t) {
        const e = t?.name;
        return !e && mu(t) ? t.message && Array.isArray(t.message) && t.message.length == 2 ? t.message[0] : "WebAssembly.Exception" : e;
      }
      function NE(t) {
        const e = t?.message;
        return mu(t) ? Array.isArray(t.message) && t.message.length == 2 ? t.message[1] : "wasm exception" : e ? e.error && typeof e.error.message == "string" ? va(e.error) : va(t) : "No error message";
      }
      function RE(t, e, n, r) {
        const s = n?.syntheticException || void 0, o = li(t, e, s, r);
        return s0(o), o.level = "error", n?.event_id && (o.event_id = n.event_id), er(o);
      }
      function LE(t, e, n = "info", r, s) {
        const o = r?.syntheticException || void 0, i = vo(t, e, o, s);
        return i.level = n, r?.event_id && (i.event_id = r.event_id), er(i);
      }
      function li(t, e, n, r, s) {
        let o;
        if (oc(e) && e.error) return Gs(t, e.error);
        if (Gi(e) || Yd(e)) {
          const i = e;
          if ("stack" in e) o = Gs(t, e);
          else {
            const a = i.name || (Gi(i) ? "DOMError" : "DOMException"), x = i.message ? `${a}: ${i.message}` : a;
            o = vo(t, x, n, r), co(o, x);
          }
          return "code" in i && (o.tags = {
            ...o.tags,
            "DOMException.code": `${i.code}`
          }), o;
        }
        return fs(e) ? Gs(t, e) : I0(e) || Es(e) ? (o = wE(t, e, n, s), s0(o, {
          synthetic: true
        }), o) : (o = vo(t, e, n, r), co(o, `${e}`), s0(o, {
          synthetic: true
        }), o);
      }
      function vo(t, e, n, r) {
        const s = {};
        if (r && n) {
          const o = xi(t, n);
          o.length && (s.exception = {
            values: [
              {
                value: e,
                stacktrace: {
                  frames: o
                }
              }
            ]
          }), s0(s, {
            synthetic: true
          });
        }
        if (Ko(e)) {
          const { __sentry_template_string__: o, __sentry_template_values__: i } = e;
          return s.logentry = {
            message: o,
            params: i
          }, s;
        }
        return s.message = e, s;
      }
      function ME(t, { isUnhandledRejection: e }) {
        const n = $d(t), r = e ? "promise rejection" : "exception";
        return oc(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\`` : Es(t) ? `Event \`${OE(t)}\` (type=${t.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`;
      }
      function OE(t) {
        try {
          const e = Object.getPrototypeOf(t);
          return e ? e.constructor.name : void 0;
        } catch {
        }
      }
      function HE(t) {
        return Object.values(t).find((e) => e instanceof Error);
      }
      class qE extends y8 {
        constructor(e) {
          const n = zE(e), r = de.SENTRY_SDK_SOURCE || l8();
          au(n, "browser", [
            "browser"
          ], r), n._metadata?.sdk && (n._metadata.sdk.settings = {
            infer_ip: n.sendDefaultPii ? "auto" : "never",
            ...n._metadata.sdk.settings
          }), super(n);
          const { sendDefaultPii: s, sendClientReports: o, enableLogs: i, _experiments: a, enableMetrics: x } = this._options, l = x ?? a?.enableMetrics ?? true;
          de.document && (o || i || l) && de.document.addEventListener("visibilitychange", () => {
            de.document.visibilityState === "hidden" && (o && this._flushOutcomes(), i && go(this), l && Zc(this));
          }), s && this.on("beforeSendSession", L8);
        }
        eventFromException(e, n) {
          return RE(this._options.stackParser, e, n, this._options.attachStacktrace);
        }
        eventFromMessage(e, n = "info", r) {
          return LE(this._options.stackParser, e, n, r, this._options.attachStacktrace);
        }
        _prepareEvent(e, n, r, s) {
          return e.platform = e.platform || "javascript", super._prepareEvent(e, n, r, s);
        }
      }
      function zE(t) {
        return {
          release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : de.SENTRY_RELEASE?.id,
          sendClientReports: true,
          parentSpanIsAlwaysRootSpan: true,
          ...t
        };
      }
      const en = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, le = me, UE = (t, e) => t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good", tr = (t, e, n, r) => {
        let s, o;
        return (i) => {
          e.value >= 0 && (i || r) && (o = e.value - (s ?? 0), (o || s === void 0) && (s = e.value, e.delta = o, e.rating = UE(e.value, n), t(e)));
        };
      }, nr = (t = true) => {
        const e = le.performance?.getEntriesByType?.("navigation")[0];
        if (!t || e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
      }, h0 = () => nr()?.activationStart ?? 0;
      function fn(t, e, n) {
        le.document && le.addEventListener(t, e, n);
      }
      function Yr(t, e, n) {
        le.document && le.removeEventListener(t, e, n);
      }
      let $n = -1;
      const hu = /* @__PURE__ */ new Set(), jE = () => le.document?.visibilityState === "hidden" && !le.document?.prerendering ? 0 : 1 / 0, Nr = (t) => {
        if (GE(t) && $n > -1) {
          if (t.type === "visibilitychange" || t.type === "pagehide") for (const e of hu) e();
          isFinite($n) || ($n = t.type === "visibilitychange" ? t.timeStamp : 0, Yr("prerenderingchange", Nr, true));
        }
      }, rr = () => {
        if (le.document && $n < 0) {
          const t = h0();
          $n = (le.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((n) => n.name === "hidden" && n.startTime > t)[0]?.startTime) ?? jE(), fn("visibilitychange", Nr, true), fn("pagehide", Nr, true), fn("prerenderingchange", Nr, true);
        }
        return {
          get firstHiddenTime() {
            return $n;
          },
          onHidden(t) {
            hu.add(t);
          }
        };
      };
      function GE(t) {
        return t.type === "pagehide" || le.document?.visibilityState === "hidden";
      }
      const WE = () => `v5-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`, sr = (t, e = -1) => {
        const n = nr();
        let r = "navigate";
        return n && (le.document?.prerendering || h0() > 0 ? r = "prerender" : le.document?.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
          name: t,
          value: e,
          rating: "good",
          delta: 0,
          entries: [],
          id: WE(),
          navigationType: r
        };
      }, Ws = /* @__PURE__ */ new WeakMap();
      function ci(t, e) {
        try {
          return Ws.get(t) || Ws.set(t, new e()), Ws.get(t);
        } catch {
          return new e();
        }
      }
      class Kr {
        constructor() {
          Kr.prototype.__init.call(this), Kr.prototype.__init2.call(this);
        }
        __init() {
          this._sessionValue = 0;
        }
        __init2() {
          this._sessionEntries = [];
        }
        _processEntry(e) {
          if (e.hadRecentInput) return;
          const n = this._sessionEntries[0], r = this._sessionEntries[this._sessionEntries.length - 1];
          this._sessionValue && n && r && e.startTime - r.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [
            e
          ]), this._onAfterProcessingUnexpectedShift?.(e);
        }
      }
      const C0 = (t, e, n = {}) => {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            const r = new PerformanceObserver((s) => {
              Promise.resolve().then(() => {
                e(s.getEntries());
              });
            });
            return r.observe({
              type: t,
              buffered: true,
              ...n
            }), r;
          }
        } catch {
        }
      }, ui = (t) => {
        let e = false;
        return () => {
          e || (t(), e = true);
        };
      }, Cs = (t) => {
        le.document?.prerendering ? addEventListener("prerenderingchange", () => t(), true) : t();
      }, VE = [
        1800,
        3e3
      ], YE = (t, e = {}) => {
        Cs(() => {
          const n = rr(), r = sr("FCP");
          let s;
          const i = C0("paint", (a) => {
            for (const x of a) x.name === "first-contentful-paint" && (i.disconnect(), x.startTime < n.firstHiddenTime && (r.value = Math.max(x.startTime - h0(), 0), r.entries.push(x), s(true)));
          });
          i && (s = tr(t, r, VE, e.reportAllChanges));
        });
      }, KE = [
        0.1,
        0.25
      ], JE = (t, e = {}) => {
        YE(ui(() => {
          const n = sr("CLS", 0);
          let r;
          const s = rr(), o = ci(e, Kr), i = (x) => {
            for (const l of x) o._processEntry(l);
            o._sessionValue > n.value && (n.value = o._sessionValue, n.entries = o._sessionEntries, r());
          }, a = C0("layout-shift", i);
          a && (r = tr(t, n, KE, e.reportAllChanges), s.onHidden(() => {
            i(a.takeRecords()), r(true);
          }), le?.setTimeout?.(r));
        }));
      };
      let Cu = 0, Vs = 1 / 0, Br = 0;
      const XE = (t) => {
        t.forEach((e) => {
          e.interactionId && (Vs = Math.min(Vs, e.interactionId), Br = Math.max(Br, e.interactionId), Cu = Br ? (Br - Vs) / 7 + 1 : 0);
        });
      };
      let bo;
      const Bu = () => bo ? Cu : performance.interactionCount || 0, QE = () => {
        "interactionCount" in performance || bo || (bo = C0("event", XE, {
          type: "event",
          buffered: true,
          durationThreshold: 0
        }));
      }, Ys = 10;
      let gu = 0;
      const ZE = () => Bu() - gu;
      class Jr {
        constructor() {
          Jr.prototype.__init.call(this), Jr.prototype.__init2.call(this);
        }
        __init() {
          this._longestInteractionList = [];
        }
        __init2() {
          this._longestInteractionMap = /* @__PURE__ */ new Map();
        }
        _resetInteractions() {
          gu = Bu(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear();
        }
        _estimateP98LongestInteraction() {
          const e = Math.min(this._longestInteractionList.length - 1, Math.floor(ZE() / 50));
          return this._longestInteractionList[e];
        }
        _processEntry(e) {
          if (this._onBeforeProcessingEntry?.(e), !(e.interactionId || e.entryType === "first-input")) return;
          const n = this._longestInteractionList.at(-1);
          let r = this._longestInteractionMap.get(e.interactionId);
          if (r || this._longestInteractionList.length < Ys || e.duration > n._latency) {
            if (r ? e.duration > r._latency ? (r.entries = [
              e
            ], r._latency = e.duration) : e.duration === r._latency && e.startTime === r.entries[0].startTime && r.entries.push(e) : (r = {
              id: e.interactionId,
              entries: [
                e
              ],
              _latency: e.duration
            }, this._longestInteractionMap.set(r.id, r), this._longestInteractionList.push(r)), this._longestInteractionList.sort((s, o) => o._latency - s._latency), this._longestInteractionList.length > Ys) {
              const s = this._longestInteractionList.splice(Ys);
              for (const o of s) this._longestInteractionMap.delete(o.id);
            }
            this._onAfterProcessingINPCandidate?.(r);
          }
        }
      }
      const _u = (t) => {
        const e = le.requestIdleCallback || le.setTimeout;
        le.document?.visibilityState === "hidden" ? t() : (t = ui(t), fn("visibilitychange", t, {
          once: true,
          capture: true
        }), fn("pagehide", t, {
          once: true,
          capture: true
        }), e(() => {
          t(), Yr("visibilitychange", t, {
            capture: true
          }), Yr("pagehide", t, {
            capture: true
          });
        }));
      }, $E = [
        200,
        500
      ], ep = 40, tp = (t, e = {}) => {
        if (!(globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return;
        const n = rr();
        Cs(() => {
          QE();
          const r = sr("INP");
          let s;
          const o = ci(e, Jr), i = (x) => {
            _u(() => {
              for (const u of x) o._processEntry(u);
              const l = o._estimateP98LongestInteraction();
              l && l._latency !== r.value && (r.value = l._latency, r.entries = l.entries, s());
            });
          }, a = C0("event", i, {
            durationThreshold: e.durationThreshold ?? ep
          });
          s = tr(t, r, $E, e.reportAllChanges), a && (a.observe({
            type: "first-input",
            buffered: true
          }), n.onHidden(() => {
            i(a.takeRecords()), s(true);
          }));
        });
      };
      class np {
        _processEntry(e) {
          this._onBeforeProcessingEntry?.(e);
        }
      }
      const rp = [
        2500,
        4e3
      ], sp = (t, e = {}) => {
        Cs(() => {
          const n = rr(), r = sr("LCP");
          let s;
          const o = ci(e, np), i = (x) => {
            e.reportAllChanges || (x = x.slice(-1));
            for (const l of x) o._processEntry(l), l.startTime < n.firstHiddenTime && (r.value = Math.max(l.startTime - h0(), 0), r.entries = [
              l
            ], s());
          }, a = C0("largest-contentful-paint", i);
          if (a) {
            s = tr(t, r, rp, e.reportAllChanges);
            const x = ui(() => {
              i(a.takeRecords()), a.disconnect(), s(true);
            }), l = (u) => {
              u.isTrusted && (_u(x), Yr(u.type, l, {
                capture: true
              }));
            };
            for (const u of [
              "keydown",
              "click",
              "visibilitychange"
            ]) fn(u, l, {
              capture: true
            });
          }
        });
      }, op = [
        800,
        1800
      ], ko = (t) => {
        le.document?.prerendering ? Cs(() => ko(t)) : le.document?.readyState !== "complete" ? addEventListener("load", () => ko(t), true) : setTimeout(t);
      }, ip = (t, e = {}) => {
        const n = sr("TTFB"), r = tr(t, n, op, e.reportAllChanges);
        ko(() => {
          const s = nr();
          s && (n.value = Math.max(s.responseStart - h0(), 0), n.entries = [
            s
          ], r(true));
        });
      }, v0 = {}, Xr = {};
      let Au, Fu, Du, vu;
      function di(t, e = false) {
        return Bs("cls", t, xp, Au, e);
      }
      function fi(t, e = false) {
        return Bs("lcp", t, lp, Fu, e);
      }
      function ap(t) {
        return Bs("ttfb", t, cp, Du);
      }
      function bu(t) {
        return Bs("inp", t, up, vu);
      }
      function q0(t, e) {
        return ku(t, e), Xr[t] || (dp(t), Xr[t] = true), yu(t, e);
      }
      function or(t, e) {
        const n = v0[t];
        if (n?.length) for (const r of n) try {
          r(e);
        } catch (s) {
          en && Q.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Kt(r)}
Error:`, s);
        }
      }
      function xp() {
        return JE((t) => {
          or("cls", {
            metric: t
          }), Au = t;
        }, {
          reportAllChanges: true
        });
      }
      function lp() {
        return sp((t) => {
          or("lcp", {
            metric: t
          }), Fu = t;
        }, {
          reportAllChanges: true
        });
      }
      function cp() {
        return ip((t) => {
          or("ttfb", {
            metric: t
          }), Du = t;
        });
      }
      function up() {
        return tp((t) => {
          or("inp", {
            metric: t
          }), vu = t;
        });
      }
      function Bs(t, e, n, r, s = false) {
        ku(t, e);
        let o;
        return Xr[t] || (o = n(), Xr[t] = true), r && e({
          metric: r
        }), yu(t, e, s ? o : void 0);
      }
      function dp(t) {
        const e = {};
        t === "event" && (e.durationThreshold = 0), C0(t, (n) => {
          or(t, {
            entries: n
          });
        }, e);
      }
      function ku(t, e) {
        v0[t] = v0[t] || [], v0[t].push(e);
      }
      function yu(t, e, n) {
        return () => {
          n && n();
          const r = v0[t];
          if (!r) return;
          const s = r.indexOf(e);
          s !== -1 && r.splice(s, 1);
        };
      }
      function fp(t) {
        return "duration" in t;
      }
      const Ep = (t) => {
        const e = (n) => {
          (n.type === "pagehide" || le.document?.visibilityState === "hidden") && t(n);
        };
        fn("visibilitychange", e, {
          capture: true,
          once: true
        }), fn("pagehide", e, {
          capture: true,
          once: true
        });
      };
      function Ks(t) {
        return typeof t == "number" && isFinite(t);
      }
      function pn(t, e, n, { ...r }) {
        const s = _e(t).start_timestamp;
        return s && s > e && typeof t.updateStartTime == "function" && t.updateStartTime(e), qc(t, () => {
          const o = Un({
            startTime: e,
            ...r
          });
          return o && o.end(n), o;
        });
      }
      function Ei(t) {
        const e = ge();
        if (!e) return;
        const { name: n, transaction: r, attributes: s, startTime: o } = t, { release: i, environment: a, sendDefaultPii: x } = e.getOptions(), u = e.getIntegrationByName("Replay")?.getReplayId(), f = Fe(), p = f.getUser(), E = p !== void 0 ? p.email || p.id || p.ip_address : void 0;
        let m;
        try {
          m = f.getScopeData().contexts.profile.profile_id;
        } catch {
        }
        const C = {
          release: i,
          environment: a,
          user: E || void 0,
          profile_id: m || void 0,
          replay_id: u || void 0,
          transaction: r,
          "user_agent.original": le.navigator?.userAgent,
          "client.address": x ? "{{auto}}" : void 0,
          ...s
        };
        return Un({
          name: n,
          attributes: C,
          startTime: o,
          experimental: {
            standalone: true
          }
        });
      }
      function ir() {
        return le.addEventListener && le.performance;
      }
      function be(t) {
        return t / 1e3;
      }
      function pp(t) {
        let e = "unknown", n = "unknown", r = "";
        for (const s of t) {
          if (s === "/") {
            [e, n] = t.split("/");
            break;
          }
          if (!isNaN(Number(s))) {
            e = r === "h" ? "http" : r, n = t.split(r)[1];
            break;
          }
          r += s;
        }
        return r === t && (e = r), {
          name: e,
          version: n
        };
      }
      function gs(t) {
        try {
          return PerformanceObserver.supportedEntryTypes.includes(t);
        } catch {
          return false;
        }
      }
      function _s(t, e) {
        let n, r = false;
        function s(a) {
          !r && n && e(a, n.spanContext().spanId, n), r = true;
        }
        Ep(() => {
          s("pagehide");
        });
        const o = t.on("beforeStartNavigationSpan", (a, x) => {
          x?.isRedirect || (s("navigation"), o(), i());
        }), i = t.on("afterStartPageLoadSpan", (a) => {
          n = a, i();
        });
      }
      function mp(t) {
        let e = 0, n;
        if (!gs("layout-shift")) return;
        const r = di(({ metric: s }) => {
          const o = s.entries[s.entries.length - 1];
          o && (e = s.value, n = o);
        }, true);
        _s(t, (s, o) => {
          hp(e, n, o, s), r();
        });
      }
      function hp(t, e, n, r) {
        en && Q.log(`Sending CLS span (${t})`);
        const s = e ? be((rt() || 0) + e.startTime) : Ye(), o = Fe().getScopeData().transactionName, i = e ? Ze(e.sources[0]?.node) : "Layout shift", a = {
          [Ke]: "auto.http.browser.cls",
          [Tt]: "ui.webvital.cls",
          [Cn]: 0,
          "sentry.pageload.span_id": n,
          "sentry.report_event": r
        };
        e?.sources && e.sources.forEach((l, u) => {
          a[`cls.source.${u + 1}`] = Ze(l.node);
        });
        const x = Ei({
          name: i,
          transaction: o,
          attributes: a,
          startTime: s
        });
        x && (x.addEvent("cls", {
          [Z0]: "",
          [$0]: t
        }), x.end(s));
      }
      const Cp = 6e4;
      function ar(t) {
        return t != null && t > 0 && t <= Cp;
      }
      function Bp(t) {
        let e = 0, n;
        if (!gs("largest-contentful-paint")) return;
        const r = fi(({ metric: s }) => {
          const o = s.entries[s.entries.length - 1];
          !o || !ar(s.value) || (e = s.value, n = o);
        }, true);
        _s(t, (s, o) => {
          gp(e, n, o, s), r();
        });
      }
      function gp(t, e, n, r) {
        if (!ar(t)) return;
        en && Q.log(`Sending LCP span (${t})`);
        const s = be((rt() || 0) + (e?.startTime || 0)), o = Fe().getScopeData().transactionName, i = e ? Ze(e.element) : "Largest contentful paint", a = {
          [Ke]: "auto.http.browser.lcp",
          [Tt]: "ui.webvital.lcp",
          [Cn]: 0,
          "sentry.pageload.span_id": n,
          "sentry.report_event": r
        };
        e && (e.element && (a["lcp.element"] = Ze(e.element)), e.id && (a["lcp.id"] = e.id), e.url && (a["lcp.url"] = e.url), e.loadTime != null && (a["lcp.loadTime"] = e.loadTime), e.renderTime != null && (a["lcp.renderTime"] = e.renderTime), e.size != null && (a["lcp.size"] = e.size));
        const x = Ei({
          name: i,
          transaction: o,
          attributes: a,
          startTime: s
        });
        x && (x.addEvent("lcp", {
          [Z0]: "millisecond",
          [$0]: t
        }), x.end(s));
      }
      function At(t) {
        return t && ((rt() || performance.timeOrigin) + t) / 1e3;
      }
      function wu(t) {
        const e = {};
        if (t.nextHopProtocol != null) {
          const { name: n, version: r } = pp(t.nextHopProtocol);
          e["network.protocol.version"] = r, e["network.protocol.name"] = n;
        }
        return rt() || ir()?.timeOrigin ? _p({
          ...e,
          "http.request.redirect_start": At(t.redirectStart),
          "http.request.redirect_end": At(t.redirectEnd),
          "http.request.worker_start": At(t.workerStart),
          "http.request.fetch_start": At(t.fetchStart),
          "http.request.domain_lookup_start": At(t.domainLookupStart),
          "http.request.domain_lookup_end": At(t.domainLookupEnd),
          "http.request.connect_start": At(t.connectStart),
          "http.request.secure_connection_start": At(t.secureConnectionStart),
          "http.request.connection_end": At(t.connectEnd),
          "http.request.request_start": At(t.requestStart),
          "http.request.response_start": At(t.responseStart),
          "http.request.response_end": At(t.responseEnd),
          "http.request.time_to_first_byte": t.responseStart != null ? t.responseStart / 1e3 : void 0
        }) : e;
      }
      function _p(t) {
        return Object.fromEntries(Object.entries(t).filter(([, e]) => e != null));
      }
      const Ap = 2147483647;
      let Na = 0, ot = {}, lt, Qr;
      function Fp({ recordClsStandaloneSpans: t, recordLcpStandaloneSpans: e, client: n }) {
        const r = ir();
        if (r && rt()) {
          r.mark && le.performance.mark("sentry-tracing-init");
          const s = e ? Bp(n) : e === false ? yp() : void 0, o = t ? mp(n) : t === false ? kp() : void 0, i = wp();
          return () => {
            i(), s?.(), o?.();
          };
        }
        return () => {
        };
      }
      function Dp() {
        q0("longtask", ({ entries: t }) => {
          const e = ht();
          if (!e) return;
          const { op: n, start_timestamp: r } = _e(e);
          for (const s of t) {
            const o = be(rt() + s.startTime), i = be(s.duration);
            n === "navigation" && r && o < r || pn(e, o, o + i, {
              name: "Main UI thread blocked",
              op: "ui.long-task",
              attributes: {
                [Ke]: "auto.ui.browser.metrics"
              }
            });
          }
        });
      }
      function vp() {
        new PerformanceObserver((e) => {
          const n = ht();
          if (n) for (const r of e.getEntries()) {
            if (!r.scripts[0]) continue;
            const s = be(rt() + r.startTime), { start_timestamp: o, op: i } = _e(n);
            if (i === "navigation" && o && s < o) continue;
            const a = be(r.duration), x = {
              [Ke]: "auto.ui.browser.metrics"
            }, l = r.scripts[0], { invoker: u, invokerType: f, sourceURL: p, sourceFunctionName: E, sourceCharPosition: m } = l;
            x["browser.script.invoker"] = u, x["browser.script.invoker_type"] = f, p && (x["code.filepath"] = p), E && (x["code.function"] = E), m !== -1 && (x["browser.script.source_char_position"] = m), pn(n, s, s + a, {
              name: "Main UI thread blocked",
              op: "ui.long-animation-frame",
              attributes: x
            });
          }
        }).observe({
          type: "long-animation-frame",
          buffered: true
        });
      }
      function bp() {
        q0("event", ({ entries: t }) => {
          const e = ht();
          if (e) {
            for (const n of t) if (n.name === "click") {
              const r = be(rt() + n.startTime), s = be(n.duration), o = {
                name: Ze(n.target),
                op: `ui.interaction.${n.name}`,
                startTime: r,
                attributes: {
                  [Ke]: "auto.ui.browser.metrics"
                }
              }, i = ac(n.target);
              i && (o.attributes["ui.component_name"] = i), pn(e, r, r + s, o);
            }
          }
        });
      }
      function kp() {
        return di(({ metric: t }) => {
          const e = t.entries[t.entries.length - 1];
          e && (ot.cls = {
            value: t.value,
            unit: ""
          }, Qr = e);
        }, true);
      }
      function yp() {
        return fi(({ metric: t }) => {
          const e = t.entries[t.entries.length - 1];
          !e || !ar(t.value) || (ot.lcp = {
            value: t.value,
            unit: "millisecond"
          }, lt = e);
        }, true);
      }
      function wp() {
        return ap(({ metric: t }) => {
          t.entries[t.entries.length - 1] && (ot.ttfb = {
            value: t.value,
            unit: "millisecond"
          });
        });
      }
      function Sp(t, e) {
        const n = ir(), r = rt();
        if (!n?.getEntries || !r) return;
        const { spanStreamingEnabled: s, ignorePerformanceApiSpans: o, ignoreResourceSpans: i, recordClsOnPageloadSpan: a, recordLcpOnPageloadSpan: x } = e, l = be(r), u = n.getEntries(), { op: f, start_timestamp: p } = _e(t);
        if (u.slice(Na).forEach((E) => {
          const m = be(E.startTime), C = be(Math.max(0, E.duration));
          if (!(f === "navigation" && p && l + m < p)) switch (E.entryType) {
            case "navigation": {
              Np(t, E, l);
              break;
            }
            case "mark":
            case "paint":
            case "measure": {
              Pp(t, E, m, C, l, o);
              const B = rr(), A = E.startTime < B.firstHiddenTime;
              E.name === "first-paint" && A && (ot.fp = {
                value: E.startTime,
                unit: "millisecond"
              }), E.name === "first-contentful-paint" && A && (ot.fcp = {
                value: E.startTime,
                unit: "millisecond"
              });
              break;
            }
            case "resource": {
              Mp(t, E, E.name, m, C, l, i);
              break;
            }
          }
        }), Na = Math.max(u.length - 1, 0), Op(t, s), f === "pageload") {
          if (zp(ot), s) {
            const E = (m, C, B) => {
              const A = B ?? `browser.web_vital.${m}.value`;
              t.setAttribute(A, C), en && Q.log("Setting web vital attribute", {
                [A]: C
              }, "on pageload span");
            };
            [
              "ttfb",
              "fp",
              "fcp"
            ].forEach((m) => {
              ot[m] && E(m, ot[m].value);
            }), ot["ttfb.requestTime"] && E("ttfb.requestTime", ot["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time");
          } else a || delete ot.cls, x || delete ot.lcp, Object.entries(ot).forEach(([E, m]) => {
            B9(E, m.value, m.unit);
          }), Hp(t, e);
          t.setAttribute(s ? "browser.performance.time_origin" : "performance.timeOrigin", l), t.setAttribute(s ? "browser.performance.navigation.activation_start" : "performance.activationStart", h0());
        }
        lt = void 0, Qr = void 0, ot = {};
      }
      function Tp(t) {
        if (t?.entryType === "measure") try {
          return t.detail.devtools.track === "Components \u269B";
        } catch {
          return;
        }
      }
      function Pp(t, e, n, r, s, o) {
        if (Tp(e) || [
          "mark",
          "measure"
        ].includes(e.entryType) && un(e.name, o)) return;
        const i = nr(false), a = be(i ? i.requestStart : 0), x = s + Math.max(n, a), l = s + n, u = l + r, f = {
          [Ke]: "auto.resource.browser.metrics"
        };
        x !== l && (f["sentry.browser.measure_happened_before_request"] = true, f["sentry.browser.measure_start_time"] = x), Ip(f, e), x <= u && pn(t, x, u, {
          name: e.name,
          op: e.entryType,
          attributes: f
        });
      }
      function Ip(t, e) {
        try {
          const n = e.detail;
          if (!n) return;
          if (typeof n == "object") {
            for (const [r, s] of Object.entries(n)) if (s && r0(s)) t[`sentry.browser.measure.detail.${r}`] = s;
            else if (s !== void 0) try {
              t[`sentry.browser.measure.detail.${r}`] = JSON.stringify(s);
            } catch {
            }
            return;
          }
          if (r0(n)) {
            t["sentry.browser.measure.detail"] = n;
            return;
          }
          try {
            t["sentry.browser.measure.detail"] = JSON.stringify(n);
          } catch {
          }
        } catch {
        }
      }
      function Np(t, e, n) {
        [
          "unloadEvent",
          "redirect",
          "domContentLoadedEvent",
          "loadEvent",
          "connect"
        ].forEach((r) => {
          gr(t, e, r, n);
        }), gr(t, e, "secureConnection", n, "TLS/SSL"), gr(t, e, "fetch", n, "cache"), gr(t, e, "domainLookup", n, "DNS"), Lp(t, e, n);
      }
      function gr(t, e, n, r, s = n) {
        const o = Rp(n), i = e[o], a = e[`${n}Start`];
        !a || !i || pn(t, r + be(a), r + be(i), {
          op: `browser.${s}`,
          name: e.name,
          attributes: {
            [Ke]: "auto.ui.browser.metrics",
            ...n === "redirect" && e.redirectCount != null ? {
              "http.redirect_count": e.redirectCount
            } : {}
          }
        });
      }
      function Rp(t) {
        return t === "secureConnection" ? "connectEnd" : t === "fetch" ? "domainLookupStart" : `${t}End`;
      }
      function Lp(t, e, n) {
        const r = n + be(e.requestStart), s = n + be(e.responseEnd), o = n + be(e.responseStart);
        e.responseEnd && (pn(t, r, s, {
          op: "browser.request",
          name: e.name,
          attributes: {
            [Ke]: "auto.ui.browser.metrics"
          }
        }), pn(t, o, s, {
          op: "browser.response",
          name: e.name,
          attributes: {
            [Ke]: "auto.ui.browser.metrics"
          }
        }));
      }
      function Mp(t, e, n, r, s, o, i) {
        if (e.initiatorType === "xmlhttprequest" || e.initiatorType === "fetch") return;
        const a = e.initiatorType ? `resource.${e.initiatorType}` : "resource.other";
        if (i?.includes(a)) return;
        const x = {
          [Ke]: "auto.resource.browser.metrics"
        }, l = Pn(n);
        l.protocol && (x["url.scheme"] = l.protocol.split(":").pop()), l.host && (x["server.address"] = l.host), x["url.same_origin"] = n.includes(le.location.origin), qp(e, x, [
          [
            "responseStatus",
            "http.response.status_code"
          ],
          [
            "transferSize",
            "http.response_transfer_size"
          ],
          [
            "encodedBodySize",
            "http.response_content_length"
          ],
          [
            "decodedBodySize",
            "http.decoded_response_content_length"
          ],
          [
            "renderBlockingStatus",
            "resource.render_blocking_status"
          ],
          [
            "deliveryType",
            "http.response_delivery_type"
          ]
        ]);
        const u = {
          ...x,
          ...wu(e)
        }, f = o + r, p = f + s;
        pn(t, f, p, {
          name: n.replace(le.location.origin, ""),
          op: a,
          attributes: u
        });
      }
      function Op(t, e) {
        const n = le.navigator;
        if (!n) return;
        const r = n.connection;
        r && (r.effectiveType && t.setAttribute(e ? "network.connection.effective_type" : "effectiveConnectionType", r.effectiveType), r.type && t.setAttribute(e ? "network.connection.type" : "connectionType", r.type), Ks(r.rtt) && (ot["connection.rtt"] = {
          value: r.rtt,
          unit: "millisecond"
        }, e && t.setAttribute("network.connection.rtt", r.rtt))), Ks(n.deviceMemory) && (e ? t.setAttribute("device.memory.estimated_capacity", n.deviceMemory) : t.setAttribute("deviceMemory", `${n.deviceMemory} GB`)), Ks(n.hardwareConcurrency) && (e ? t.setAttribute("device.processor_count", n.hardwareConcurrency) : t.setAttribute("hardwareConcurrency", String(n.hardwareConcurrency)));
      }
      function Hp(t, e) {
        lt && e.recordLcpOnPageloadSpan && (lt.element && t.setAttribute("lcp.element", Ze(lt.element)), lt.id && t.setAttribute("lcp.id", lt.id), lt.url && t.setAttribute("lcp.url", lt.url.trim().slice(0, 200)), lt.loadTime != null && t.setAttribute("lcp.loadTime", lt.loadTime), lt.renderTime != null && t.setAttribute("lcp.renderTime", lt.renderTime), t.setAttribute("lcp.size", lt.size)), Qr?.sources && e.recordClsOnPageloadSpan && Qr.sources.forEach((n, r) => t.setAttribute(`cls.source.${r + 1}`, Ze(n.node)));
      }
      function qp(t, e, n) {
        n.forEach(([r, s]) => {
          const o = t[r];
          o != null && (typeof o == "number" && o < Ap || typeof o == "string") && (e[s] = o);
        });
      }
      function zp(t) {
        const e = nr(false);
        if (!e) return;
        const { responseStart: n, requestStart: r } = e;
        r <= n && (t["ttfb.requestTime"] = {
          value: n - r,
          unit: "millisecond"
        });
      }
      const Js = [], b0 = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), Su = 60;
      function Up() {
        if (ir() && rt()) {
          const e = jp();
          return () => {
            e();
          };
        }
        return () => {
        };
      }
      const z0 = {
        click: "click",
        pointerdown: "click",
        pointerup: "click",
        mousedown: "click",
        mouseup: "click",
        touchstart: "click",
        touchend: "click",
        mouseover: "hover",
        mouseout: "hover",
        mouseenter: "hover",
        mouseleave: "hover",
        pointerover: "hover",
        pointerout: "hover",
        pointerenter: "hover",
        pointerleave: "hover",
        dragstart: "drag",
        dragend: "drag",
        drag: "drag",
        dragenter: "drag",
        dragleave: "drag",
        dragover: "drag",
        drop: "drag",
        keydown: "press",
        keyup: "press",
        keypress: "press",
        input: "press"
      };
      function jp() {
        return bu(Gp);
      }
      const Gp = ({ metric: t }) => {
        if (t.value == null) return;
        const e = be(t.value);
        if (e > Su) return;
        const n = t.entries.find((m) => m.duration === t.value && z0[m.name]);
        if (!n) return;
        const { interactionId: r } = n, s = z0[n.name], o = be(rt() + n.startTime), i = ht(), a = i ? tt(i) : void 0, x = r != null ? b0.get(r) : void 0, l = x?.span || a, u = l ? _e(l).description : Fe().getScopeData().transactionName, f = x?.elementName || Ze(n.target), p = {
          [Ke]: "auto.http.browser.inp",
          [Tt]: `ui.interaction.${s}`,
          [Cn]: n.duration
        }, E = Ei({
          name: f,
          transaction: u,
          attributes: p,
          startTime: o
        });
        E && (E.addEvent("inp", {
          [Z0]: "millisecond",
          [$0]: t.value
        }), E.end(o + e));
      };
      function Wp(t) {
        return t != null ? b0.get(t) : void 0;
      }
      function Vp() {
        const t = Object.keys(z0);
        si() && t.forEach((s) => {
          le.addEventListener(s, e, {
            capture: true,
            passive: true
          });
        });
        function e(s) {
          const o = s.target;
          if (!o) return;
          const i = Ze(o), a = Math.round(s.timeStamp);
          if (Vn.set(a, i), Vn.size > 50) {
            const x = Vn.keys().next().value;
            x !== void 0 && Vn.delete(x);
          }
        }
        function n(s) {
          const o = Math.round(s.startTime);
          let i = Vn.get(o);
          if (!i) for (let a = -5; a <= 5; a++) {
            const x = Vn.get(o + a);
            if (x) {
              i = x;
              break;
            }
          }
          return i || "<unknown>";
        }
        const r = ({ entries: s }) => {
          const o = ht(), i = o && tt(o);
          s.forEach((a) => {
            if (!fp(a)) return;
            const x = a.interactionId;
            if (x == null || b0.has(x)) return;
            const l = a.target ? Ze(a.target) : n(a);
            if (Js.length > 10) {
              const u = Js.shift();
              b0.delete(u);
            }
            Js.push(x), b0.set(x, {
              span: i,
              elementName: l
            });
          });
        };
        q0("event", r), q0("first-input", r);
      }
      function pi(t) {
        const { name: e, op: n, origin: r, metricName: s, value: o, attributes: i, parentSpan: a, reportEvent: x, startTime: l, endTime: u } = t, f = Fe().getScopeData().transactionName, p = {
          [Ke]: r,
          [Tt]: n,
          [Cn]: 0,
          [`browser.web_vital.${s}.value`]: o,
          "sentry.transaction": f,
          "user_agent.original": le.navigator?.userAgent,
          ...i
        };
        a && bc(a).attributes?.[Tt] === "pageload" && (p["sentry.pageload.span_id"] = a.spanContext().spanId), x && (p[`browser.web_vital.${s}.report_event`] = x);
        const E = Un({
          name: e,
          attributes: p,
          startTime: l,
          parentSpan: a
        });
        E && E.end(u ?? l);
      }
      function Yp(t) {
        let e = 0, n;
        if (!gs("largest-contentful-paint")) return;
        const r = fi(({ metric: s }) => {
          const o = s.entries[s.entries.length - 1];
          !o || !ar(s.value) || (e = s.value, n = o);
        }, true);
        _s(t, (s, o, i) => {
          Kp(e, n, i, s), r();
        });
      }
      function Kp(t, e, n, r) {
        if (!ar(t)) return;
        en && Q.log(`Sending LCP span (${t})`);
        const s = rt() || 0, o = be(s), i = be(s + (e?.startTime || 0)), a = e ? Ze(e.element) : "Largest contentful paint", x = {};
        e?.element && (x["browser.web_vital.lcp.element"] = Ze(e.element)), e?.id && (x["browser.web_vital.lcp.id"] = e.id), e?.url && (x["browser.web_vital.lcp.url"] = e.url), e?.loadTime != null && (x["browser.web_vital.lcp.load_time"] = e.loadTime), e?.renderTime != null && (x["browser.web_vital.lcp.render_time"] = e.renderTime), e?.size != null && (x["browser.web_vital.lcp.size"] = e.size), pi({
          name: a,
          op: "ui.webvital.lcp",
          origin: "auto.http.browser.lcp",
          metricName: "lcp",
          value: t,
          attributes: x,
          parentSpan: n,
          reportEvent: r,
          startTime: o,
          endTime: i
        });
      }
      function Jp(t) {
        let e = 0, n;
        if (!gs("layout-shift")) return;
        const r = di(({ metric: s }) => {
          const o = s.entries[s.entries.length - 1];
          o && (e = s.value, n = o);
        }, true);
        _s(t, (s, o, i) => {
          Xp(e, n, i, s), r();
        });
      }
      function Xp(t, e, n, r) {
        en && Q.log(`Sending CLS span (${t})`);
        const s = e ? be((rt() || 0) + e.startTime) : Ye(), o = e ? Ze(e.sources[0]?.node) : "Layout shift", i = {};
        e?.sources && e.sources.forEach((a, x) => {
          i[`browser.web_vital.cls.source.${x + 1}`] = Ze(a.node);
        }), pi({
          name: o,
          op: "ui.webvital.cls",
          origin: "auto.http.browser.cls",
          metricName: "cls",
          value: t,
          attributes: i,
          parentSpan: n,
          reportEvent: r,
          startTime: s
        });
      }
      function Qp() {
        if (!ir() || !rt()) return;
        bu(({ metric: n }) => {
          if (n.value == null || be(n.value) > Su) return;
          const s = n.entries.find((o) => o.duration === n.value && z0[o.name]);
          s && Zp(n.value, s);
        });
      }
      function Zp(t, e) {
        en && Q.log(`Sending INP span (${t})`);
        const n = be(rt() + e.startTime), r = be(t), s = z0[e.name], o = Wp(e.interactionId), i = ht(), a = i ? tt(i) : void 0, x = o?.span || a, l = x ? bc(x).name : Fe().getScopeData().transactionName, u = o?.elementName || Ze(e.target);
        pi({
          name: u,
          op: `ui.interaction.${s}`,
          origin: "auto.http.browser.inp",
          metricName: "inp",
          value: t,
          attributes: {
            [Cn]: e.duration,
            "sentry.transaction": l
          },
          startTime: n,
          endTime: n + r,
          parentSpan: x
        });
      }
      const $p = 1e3;
      let Ra, yo, wo;
      function e1(t) {
        const e = "dom";
        mn(e, t), hn(e, t1);
      }
      function t1() {
        if (!le.document) return;
        const t = Ft.bind(null, "dom"), e = La(t, true);
        le.document.addEventListener("click", e, false), le.document.addEventListener("keypress", e, false), [
          "EventTarget",
          "Node"
        ].forEach((n) => {
          const s = le[n]?.prototype;
          s?.hasOwnProperty?.("addEventListener") && (pt(s, "addEventListener", function(o) {
            return function(i, a, x) {
              if (i === "click" || i == "keypress") try {
                const l = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, u = l[i] = l[i] || {
                  refCount: 0
                };
                if (!u.handler) {
                  const f = La(t);
                  u.handler = f, o.call(this, i, f, x);
                }
                u.refCount++;
              } catch {
              }
              return o.call(this, i, a, x);
            };
          }), pt(s, "removeEventListener", function(o) {
            return function(i, a, x) {
              if (i === "click" || i == "keypress") try {
                const l = this.__sentry_instrumentation_handlers__ || {}, u = l[i];
                u && (u.refCount--, u.refCount <= 0 && (o.call(this, i, u.handler, x), u.handler = void 0, delete l[i]), Object.keys(l).length === 0 && delete this.__sentry_instrumentation_handlers__);
              } catch {
              }
              return o.call(this, i, a, x);
            };
          }));
        });
      }
      function n1(t) {
        if (t.type !== yo) return false;
        try {
          if (!t.target || t.target._sentryId !== wo) return false;
        } catch {
        }
        return true;
      }
      function r1(t, e) {
        return t !== "keypress" ? false : e?.tagName ? !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) : true;
      }
      function La(t, e = false) {
        return (n) => {
          if (!n || n._sentryCaptured) return;
          const r = s1(n);
          if (r1(n.type, r)) return;
          ct(n, "_sentryCaptured", true), r && !r._sentryId && ct(r, "_sentryId", Dt());
          const s = n.type === "keypress" ? "input" : n.type;
          n1(n) || (t({
            event: n,
            name: s,
            global: e
          }), yo = n.type, wo = r ? r._sentryId : void 0), clearTimeout(Ra), Ra = le.setTimeout(() => {
            wo = void 0, yo = void 0;
          }, $p);
        };
      }
      function s1(t) {
        try {
          return t.target;
        } catch {
          return null;
        }
      }
      let _r;
      function mi(t) {
        const e = "history";
        mn(e, t), hn(e, o1);
      }
      function o1() {
        if (le.addEventListener("popstate", () => {
          const e = le.location.href, n = _r;
          if (_r = e, n === e) return;
          Ft("history", {
            from: n,
            to: e
          });
        }), !gE()) return;
        function t(e) {
          return function(...n) {
            const r = n.length > 2 ? n[2] : void 0;
            if (r) {
              const s = _r, o = i1(String(r));
              if (_r = o, s === o) return e.apply(this, n);
              Ft("history", {
                from: s,
                to: o
              });
            }
            return e.apply(this, n);
          };
        }
        pt(le.history, "pushState", t), pt(le.history, "replaceState", t);
      }
      function i1(t) {
        try {
          return new URL(t, le.location.origin).toString();
        } catch {
          return t;
        }
      }
      const Rr = {};
      function a1(t) {
        const e = Rr[t];
        if (e) return e;
        let n = le[t];
        if (Fo(n)) return Rr[t] = n.bind(le);
        const r = le.document;
        if (r && typeof r.createElement == "function") try {
          const s = r.createElement("iframe");
          s.hidden = true, r.head.appendChild(s);
          const o = s.contentWindow;
          o?.[t] && (n = o[t]), r.head.removeChild(s);
        } catch (s) {
          en && Q.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, s);
        }
        return n && (Rr[t] = n.bind(le));
      }
      function x1(t) {
        Rr[t] = void 0;
      }
      const Zn = "__sentry_xhr_v3__";
      function Tu(t) {
        const e = "xhr";
        mn(e, t), hn(e, l1);
      }
      function l1() {
        if (!le.XMLHttpRequest) return;
        const t = XMLHttpRequest.prototype;
        t.open = new Proxy(t.open, {
          apply(e, n, r) {
            const s = new Error(), o = Ye() * 1e3, i = Wt(r[0]) ? r[0].toUpperCase() : void 0, a = c1(r[1]);
            if (!i || !a) return e.apply(n, r);
            n[Zn] = {
              method: i,
              url: a,
              request_headers: {}
            }, i === "POST" && a.match(/sentry_key/) && (n.__sentry_own_request__ = true);
            const x = () => {
              const l = n[Zn];
              if (l && n.readyState === 4) {
                try {
                  l.status_code = n.status;
                } catch {
                }
                const u = {
                  endTimestamp: Ye() * 1e3,
                  startTimestamp: o,
                  xhr: n,
                  virtualError: s
                };
                Ft("xhr", u);
              }
            };
            return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(l, u, f) {
                return x(), l.apply(u, f);
              }
            }) : n.addEventListener("readystatechange", x), n.setRequestHeader = new Proxy(n.setRequestHeader, {
              apply(l, u, f) {
                const [p, E] = f, m = u[Zn];
                return m && Wt(p) && Wt(E) && (m.request_headers[p.toLowerCase()] = E), l.apply(u, f);
              }
            }), e.apply(n, r);
          }
        }), t.send = new Proxy(t.send, {
          apply(e, n, r) {
            const s = n[Zn];
            if (!s) return e.apply(n, r);
            r[0] !== void 0 && (s.body = r[0]);
            const o = {
              startTimestamp: Ye() * 1e3,
              xhr: n
            };
            return Ft("xhr", o), e.apply(n, r);
          }
        });
      }
      function c1(t) {
        if (Wt(t)) return t;
        try {
          return t.toString();
        } catch {
        }
      }
      function u1(t) {
        let e;
        try {
          e = t.getAllResponseHeaders();
        } catch (n) {
          return en && Q.error(n, "Failed to get xhr response headers", t), {};
        }
        return e ? e.split(`\r
`).reduce((n, r) => {
          const [s, o] = r.split(": ");
          return o && (n[s.toLowerCase()] = o), n;
        }, {}) : {};
      }
      const d1 = 40;
      function f1(t, e = a1("fetch")) {
        let n = 0, r = 0;
        async function s(o) {
          const i = o.body.length;
          n += i, r++;
          const a = {
            body: o.body,
            method: "POST",
            referrerPolicy: "strict-origin",
            headers: t.headers,
            keepalive: n <= 6e4 && r < 15,
            ...t.fetchOptions
          };
          try {
            const x = await e(t.url, a);
            return {
              statusCode: x.status,
              headers: {
                "x-sentry-rate-limits": x.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": x.headers.get("Retry-After")
              }
            };
          } catch (x) {
            throw x1("fetch"), x;
          } finally {
            n -= i, r--;
          }
        }
        return F8(t, s, ii(t.bufferSize || d1));
      }
      const mt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, E1 = 30, p1 = 50;
      function So(t, e, n, r) {
        const s = {
          filename: t,
          function: e === "<anonymous>" ? In : e,
          in_app: true
        };
        return n !== void 0 && (s.lineno = n), r !== void 0 && (s.colno = r), s;
      }
      const m1 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, h1 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, C1 = /\((\S*)(?::(\d+))(?::(\d+))\)/, B1 = /at (.+?) ?\(data:(.+?),/, g1 = (t) => {
        const e = t.match(B1);
        if (e) return {
          filename: `<data:${e[2]}>`,
          function: e[1]
        };
        const n = m1.exec(t);
        if (n) {
          const [, s, o, i] = n;
          return So(s, In, +o, +i);
        }
        const r = h1.exec(t);
        if (r) {
          if (r[2]?.indexOf("eval") === 0) {
            const a = C1.exec(r[2]);
            a && (r[2] = a[1], r[3] = a[2], r[4] = a[3]);
          }
          const [o, i] = Pu(r[1] || In, r[2]);
          return So(i, o, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
        }
      }, _1 = [
        E1,
        g1
      ], A1 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, F1 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, D1 = (t) => {
        const e = A1.exec(t);
        if (e) {
          if (e[3] && e[3].indexOf(" > eval") > -1) {
            const o = F1.exec(e[3]);
            o && (e[1] = e[1] || "eval", e[3] = o[1], e[4] = o[2], e[5] = "");
          }
          let r = e[3], s = e[1] || In;
          return [s, r] = Pu(s, r), So(r, s, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
        }
      }, v1 = [
        p1,
        D1
      ], b1 = [
        _1,
        v1
      ], k1 = ec(...b1), Pu = (t, e) => {
        const n = t.indexOf("safari-extension") !== -1, r = t.indexOf("safari-web-extension") !== -1;
        return n || r ? [
          t.indexOf("@") !== -1 ? t.split("@")[0] : In,
          n ? `safari-extension:${e}` : `safari-web-extension:${e}`
        ] : [
          t,
          e
        ];
      }, Ar = 1024, y1 = "Breadcrumbs", w1 = (t = {}) => {
        const e = {
          console: true,
          dom: true,
          fetch: true,
          history: true,
          sentry: true,
          xhr: true,
          ...t
        };
        return {
          name: y1,
          setup(n) {
            e.console && tE(I1(n)), e.dom && e1(P1(n, e.dom)), e.xhr && Tu(N1(n)), e.fetch && fu(R1(n)), e.history && mi(L1(n)), e.sentry && n.on("beforeSendEvent", T1(n));
          }
        };
      }, S1 = w1;
      function T1(t) {
        return function(n) {
          ge() === t && Nn({
            category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
            event_id: n.event_id,
            level: n.level,
            message: bn(n)
          }, {
            event: n
          });
        };
      }
      function P1(t, e) {
        return function(r) {
          if (ge() !== t) return;
          let s, o, i = typeof e == "object" ? e.serializeAttribute : void 0, a = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
          a && a > Ar && (mt && Q.warn(`\`dom.maxStringLength\` cannot exceed ${Ar}, but a value of ${a} was configured. Sentry will use ${Ar} instead.`), a = Ar), typeof i == "string" && (i = [
            i
          ]);
          try {
            const l = r.event, u = M1(l) ? l.target : l;
            s = Ze(u, {
              keyAttrs: i,
              maxStringLength: a
            }), o = ac(u);
          } catch {
            s = "<unknown>";
          }
          if (s.length === 0) return;
          const x = {
            category: `ui.${r.name}`,
            message: s
          };
          o && (x.data = {
            "ui.component_name": o
          }), Nn(x, {
            event: r.event,
            name: r.name,
            global: r.global
          });
        };
      }
      function I1(t) {
        return function(n) {
          if (ge() !== t) return;
          const r = {
            category: "console",
            data: {
              arguments: n.args,
              logger: "console"
            },
            level: rE(n.level),
            message: Yi(n.args, " ")
          };
          if (n.level === "assert") if (n.args[0] === false) r.message = `Assertion failed: ${Yi(n.args.slice(1), " ") || "console.assert"}`, r.data.arguments = n.args.slice(1);
          else return;
          Nn(r, {
            input: n.args,
            level: n.level
          });
        };
      }
      function N1(t) {
        return function(n) {
          if (ge() !== t) return;
          const { startTimestamp: r, endTimestamp: s } = n, o = n.xhr[Zn];
          if (!r || !s || !o) return;
          const { method: i, url: a, status_code: x, body: l } = o, u = {
            method: i,
            url: a,
            status_code: x
          }, f = {
            xhr: n.xhr,
            input: l,
            startTimestamp: r,
            endTimestamp: s
          }, p = {
            category: "xhr",
            data: u,
            type: "http",
            level: du(x)
          };
          t.emit("beforeOutgoingRequestBreadcrumb", p, f), Nn(p, f);
        };
      }
      function R1(t) {
        return function(n) {
          if (ge() !== t) return;
          const { startTimestamp: r, endTimestamp: s } = n;
          if (s && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")) if (n.error) {
            const o = {
              data: n.error,
              input: n.args,
              startTimestamp: r,
              endTimestamp: s
            }, i = {
              category: "fetch",
              data: n.fetchData,
              level: "error",
              type: "http"
            };
            t.emit("beforeOutgoingRequestBreadcrumb", i, o), Nn(i, o);
          } else {
            const o = n.response, i = {
              ...n.fetchData,
              status_code: o?.status
            }, a = {
              input: n.args,
              response: o,
              startTimestamp: r,
              endTimestamp: s
            }, x = {
              category: "fetch",
              data: i,
              type: "http",
              level: du(i.status_code)
            };
            t.emit("beforeOutgoingRequestBreadcrumb", x, a), Nn(x, a);
          }
        };
      }
      function L1(t) {
        return function(n) {
          if (ge() !== t) return;
          let r = n.from, s = n.to;
          const o = Pn(de.location.href);
          let i = r ? Pn(r) : void 0;
          const a = Pn(s);
          i?.path || (i = o), o.protocol === a.protocol && o.host === a.host && (s = a.relative), o.protocol === i.protocol && o.host === i.host && (r = i.relative), Nn({
            category: "navigation",
            data: {
              from: r,
              to: s
            }
          });
        };
      }
      function M1(t) {
        return !!t && !!t.target;
      }
      const O1 = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(","), H1 = "BrowserApiErrors", q1 = (t = {}) => {
        const e = {
          XMLHttpRequest: true,
          eventTarget: true,
          requestAnimationFrame: true,
          setInterval: true,
          setTimeout: true,
          unregisterOriginalCallbacks: false,
          ...t
        };
        return {
          name: H1,
          setupOnce() {
            e.setTimeout && pt(de, "setTimeout", Ma), e.setInterval && pt(de, "setInterval", Ma), e.requestAnimationFrame && pt(de, "requestAnimationFrame", U1), e.XMLHttpRequest && "XMLHttpRequest" in de && pt(XMLHttpRequest.prototype, "send", j1);
            const n = e.eventTarget;
            n && (Array.isArray(n) ? n : O1).forEach((s) => G1(s, e));
          }
        };
      }, z1 = q1;
      function Ma(t) {
        return function(...e) {
          const n = e[0];
          return e[0] = a0(n, {
            mechanism: {
              handled: false,
              type: `auto.browser.browserapierrors.${Kt(t)}`
            }
          }), t.apply(this, e);
        };
      }
      function U1(t) {
        return function(e) {
          return t.apply(this, [
            a0(e, {
              mechanism: {
                data: {
                  handler: Kt(t)
                },
                handled: false,
                type: "auto.browser.browserapierrors.requestAnimationFrame"
              }
            })
          ]);
        };
      }
      function j1(t) {
        return function(...e) {
          const n = this;
          return [
            "onload",
            "onerror",
            "onprogress",
            "onreadystatechange"
          ].forEach((s) => {
            s in n && typeof n[s] == "function" && pt(n, s, function(o) {
              const i = {
                mechanism: {
                  data: {
                    handler: Kt(o)
                  },
                  handled: false,
                  type: `auto.browser.browserapierrors.xhr.${s}`
                }
              }, a = Qo(o);
              return a && (i.mechanism.data.handler = Kt(a)), a0(o, i);
            });
          }), t.apply(this, e);
        };
      }
      function G1(t, e) {
        const r = de[t]?.prototype;
        r?.hasOwnProperty?.("addEventListener") && (pt(r, "addEventListener", function(s) {
          return function(o, i, a) {
            try {
              W1(i) && (i.handleEvent = a0(i.handleEvent, {
                mechanism: {
                  data: {
                    handler: Kt(i),
                    target: t
                  },
                  handled: false,
                  type: "auto.browser.browserapierrors.handleEvent"
                }
              }));
            } catch {
            }
            return e.unregisterOriginalCallbacks && V1(this, o, i), s.apply(this, [
              o,
              a0(i, {
                mechanism: {
                  data: {
                    handler: Kt(i),
                    target: t
                  },
                  handled: false,
                  type: "auto.browser.browserapierrors.addEventListener"
                }
              }),
              a
            ]);
          };
        }), pt(r, "removeEventListener", function(s) {
          return function(o, i, a) {
            try {
              const x = i.__sentry_wrapped__;
              x && s.call(this, o, x, a);
            } catch {
            }
            return s.call(this, o, i, a);
          };
        }));
      }
      function W1(t) {
        return typeof t.handleEvent == "function";
      }
      function V1(t, e, n) {
        t && typeof t == "object" && "removeEventListener" in t && typeof t.removeEventListener == "function" && t.removeEventListener(e, n);
      }
      const Y1 = (t = {}) => {
        const e = t.lifecycle ?? "route";
        return {
          name: "BrowserSession",
          setupOnce() {
            if (typeof de.document > "u") {
              mt && Q.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
              return;
            }
            pa({
              ignoreDuration: true
            }), Us();
            const n = $t();
            let r = n.getUser();
            n.addScopeListener((s) => {
              const o = s.getUser();
              (r?.id !== o?.id || r?.ip_address !== o?.ip_address) && (Us(), r = o);
            }), e === "route" && mi(({ from: s, to: o }) => {
              s !== o && (pa({
                ignoreDuration: true
              }), Us());
            });
          }
        };
      }, K1 = "CultureContext", J1 = () => ({
        name: K1,
        preprocessEvent(t) {
          const e = Oa();
          e && (t.contexts = {
            ...t.contexts,
            culture: {
              ...e,
              ...t.contexts?.culture
            }
          });
        },
        processSegmentSpan(t) {
          const e = Oa();
          e && Vc(t, {
            "culture.locale": e.locale,
            "culture.timezone": e.timezone,
            "culture.calendar": e.calendar
          });
        }
      }), X1 = J1;
      function Oa() {
        try {
          const t = de.Intl;
          if (!t) return;
          const e = t.DateTimeFormat().resolvedOptions();
          return {
            locale: e.locale,
            timezone: e.timeZone,
            calendar: e.calendar
          };
        } catch {
          return;
        }
      }
      const Q1 = "GlobalHandlers", Z1 = (t = {}) => {
        const e = {
          onerror: true,
          onunhandledrejection: true,
          ...t
        };
        return {
          name: Q1,
          setupOnce() {
            Error.stackTraceLimit = 50;
          },
          setup(n) {
            e.onerror && (e5(n), Ha("onerror")), e.onunhandledrejection && (t5(n), Ha("onunhandledrejection"));
          }
        };
      }, $1 = Z1;
      function e5(t) {
        nc((e) => {
          const { stackParser: n, attachStacktrace: r } = Iu();
          if (ge() !== t || pu()) return;
          const { msg: s, url: o, line: i, column: a, error: x } = e, l = s5(li(n, x || s, void 0, r, false), o, i, a);
          l.level = "error", Yc(l, {
            originalException: x,
            mechanism: {
              handled: false,
              type: "auto.browser.global_handlers.onerror"
            }
          });
        });
      }
      function t5(t) {
        rc((e) => {
          const { stackParser: n, attachStacktrace: r } = Iu();
          if (ge() !== t || pu()) return;
          const s = n5(e), o = r0(s) ? r5(s) : li(n, s, void 0, r, true);
          o.level = "error", Yc(o, {
            originalException: s,
            mechanism: {
              handled: false,
              type: "auto.browser.global_handlers.onunhandledrejection"
            }
          });
        });
      }
      function n5(t) {
        if (r0(t)) return t;
        try {
          if ("reason" in t) return t.reason;
          if ("detail" in t && "reason" in t.detail) return t.detail.reason;
        } catch {
        }
        return t;
      }
      function r5(t) {
        return {
          exception: {
            values: [
              {
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(t)}`
              }
            ]
          }
        };
      }
      function s5(t, e, n, r) {
        const s = t.exception = t.exception || {}, o = s.values = s.values || [], i = o[0] = o[0] || {}, a = i.stacktrace = i.stacktrace || {}, x = a.frames = a.frames || [];
        return x.length === 0 && x.push({
          colno: r,
          lineno: n,
          filename: o5(e) ?? K0(),
          function: In,
          in_app: true
        }), t;
      }
      function Ha(t) {
        mt && Q.log(`Global Handler attached: ${t}`);
      }
      function Iu() {
        return ge()?.getOptions() || {
          stackParser: () => [],
          attachStacktrace: false
        };
      }
      function o5(t) {
        if (!(!Wt(t) || t.length === 0)) return t.startsWith("data:") ? `<${dn(t, false)}>` : t;
      }
      const i5 = () => ({
        name: "HttpContext",
        preprocessEvent(t) {
          if (!de.navigator && !de.location && !de.document) return;
          const e = Vr(), n = {
            ...e.headers,
            ...t.request?.headers
          };
          t.request = {
            ...e,
            ...t.request,
            headers: n
          };
        },
        processSegmentSpan(t) {
          if (!de.navigator && !de.location && !de.document) return;
          const e = Vr();
          Vc(t, {
            "url.full": e.url || void 0,
            "http.request.header.user_agent": e.headers["User-Agent"],
            "http.request.header.referer": e.headers.Referer
          });
        }
      }), a5 = "cause", x5 = 5, l5 = "LinkedErrors", c5 = (t = {}) => {
        const e = t.limit || x5, n = t.key || a5;
        return {
          name: l5,
          preprocessEvent(r, s, o) {
            const i = o.getOptions();
            eE(ai, i.stackParser, n, e, r, s);
          }
        };
      }, u5 = c5;
      function d5() {
        return f5() ? (mt && Hn(() => {
          console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
        }), true) : false;
      }
      function f5() {
        if (typeof de.window > "u") return false;
        const t = de;
        if (t.nw || !(t.chrome || t.browser)?.runtime?.id) return false;
        const n = K0();
        return !(de === de.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(n));
      }
      function E5(t) {
        return [
          V8(),
          U8(),
          dE(),
          z1(),
          S1(),
          $1(),
          u5(),
          iE(),
          i5(),
          X1(),
          Y1()
        ];
      }
      function p5(t = {}) {
        const e = !t.skipBrowserExtensionCheck && d5();
        let n = t.defaultIntegrations == null ? E5() : t.defaultIntegrations;
        const r = {
          ...t,
          enabled: e ? false : t.enabled,
          stackParser: jd(t.stackParser || k1),
          integrations: i8({
            integrations: t.integrations,
            defaultIntegrations: n
          }),
          transport: t.transport || f1
        };
        return N8(qE, r);
      }
      function m5(t) {
        return t.split(",").some((e) => e.trim().startsWith("sentry-"));
      }
      function Nu(t) {
        try {
          return new URL(t, de.location.origin).href;
        } catch {
          return;
        }
      }
      function h5(t) {
        return t.entryType === "resource" && "initiatorType" in t && typeof t.nextHopProtocol == "string" && (t.initiatorType === "fetch" || t.initiatorType === "xmlhttprequest");
      }
      function Ru(t) {
        try {
          return new Headers(t);
        } catch {
          return;
        }
      }
      const qa = /* @__PURE__ */ new WeakMap(), Xs = /* @__PURE__ */ new Map(), Lu = {
        traceFetch: true,
        traceXHR: true,
        enableHTTPTimings: true,
        trackFetchStreamPerformance: false
      };
      function C5(t, e) {
        const { traceFetch: n, traceXHR: r, trackFetchStreamPerformance: s, shouldCreateSpanForRequest: o, enableHTTPTimings: i, tracePropagationTargets: a, onRequestSpanStart: x, onRequestSpanEnd: l } = {
          ...Lu,
          ...e
        }, u = typeof o == "function" ? o : (m) => true, f = (m) => g5(m, a), p = {}, E = t.getOptions().propagateTraceparent;
        n && (t.addEventProcessor((m) => (m.type === "transaction" && m.spans && m.spans.forEach((C) => {
          if (C.op === "http.client") {
            const B = Xs.get(C.span_id);
            B && (C.timestamp = B / 1e3, Xs.delete(C.span_id));
          }
        }), m)), s && FE((m) => {
          if (m.response) {
            const C = qa.get(m.response);
            C && m.endTimestamp && Xs.set(C, m.endTimestamp);
          }
        }), fu((m) => {
          const C = fE(m, u, f, p, {
            propagateTraceparent: E,
            onRequestSpanEnd: l
          });
          if (m.response && m.fetchData.__span && qa.set(m.response, m.fetchData.__span), C) {
            const B = Nu(m.fetchData.url), A = B ? Pn(B).host : void 0;
            C.setAttributes({
              "http.url": B ? dn(B) : void 0,
              "server.address": A
            }), i && za(C, t), x?.(C, {
              headers: m.headers
            });
          }
        })), r && Tu((m) => {
          const C = _5(m, u, f, p, E, l);
          C && (i && za(C, t), x?.(C, {
            headers: Ru(m.xhr.__sentry_xhr_v3__?.request_headers)
          }));
        });
      }
      const B5 = 300;
      function za(t, e) {
        const { url: n } = _e(t).data;
        if (!n || typeof n != "string") return;
        let r = () => void setTimeout(s);
        if (Zt(e)) {
          const o = t.end.bind(t);
          t.end = (i) => {
            const a = i ?? Ye();
            let x = false;
            const l = () => {
              x || (x = true, setTimeout(s), o(a), clearTimeout(u));
            };
            r = l;
            const u = setTimeout(l, B5);
          };
        }
        const s = q0("resource", ({ entries: o }) => {
          o.forEach((i) => {
            h5(i) && i.name.endsWith(n) && (t.setAttributes(wu(i)), r());
          });
        });
      }
      function g5(t, e) {
        const n = K0();
        if (n) {
          let r, s;
          try {
            r = new URL(t, n), s = new URL(n).origin;
          } catch {
            return false;
          }
          const o = r.origin === s;
          return e ? un(r.toString(), e) || o && un(r.pathname, e) : o;
        } else {
          const r = !!t.match(/^\/(?!\/)/);
          return e ? un(t, e) : r;
        }
      }
      function _5(t, e, n, r, s, o) {
        const i = t.xhr, a = i?.[Zn];
        if (!i || i.__sentry_own_request__ || !a) return;
        const { url: x, method: l } = a, u = St() && e(x);
        if (t.endTimestamp) {
          const D = i.__sentry_xhr_span_id__;
          if (!D) return;
          const b = r[D];
          b && (u && a.status_code !== void 0 && (pc(b, a.status_code), b.end(), o?.(b, {
            headers: Ru(u1(i)),
            error: t.error
          })), delete r[D]);
          return;
        }
        const f = Nu(x), p = Pn(f || x), E = dn(U9(x)), m = ge(), B = !!ht() || !!m && Zt(m), A = u && B ? Un({
          name: `${l} ${E}`,
          attributes: {
            url: dn(x),
            type: "xhr",
            "http.method": l,
            "http.url": f ? dn(f) : void 0,
            "server.address": p?.host,
            [Ke]: "auto.http.browser",
            [Tt]: "http.client",
            ...p?.search && {
              "http.query": p?.search
            },
            ...p?.hash && {
              "http.fragment": p?.hash
            }
          }
        }) : new Mt();
        return u && !B && m?.recordDroppedEvent("no_parent_span", "span"), i.__sentry_xhr_span_id__ = A.spanContext().spanId, r[i.__sentry_xhr_span_id__] = A, n(x) && A5(i, St() && B ? A : void 0, s), m && m.emit("beforeOutgoingRequestSpan", A, t), A;
      }
      function A5(t, e, n) {
        const { "sentry-trace": r, baggage: s, traceparent: o } = xu({
          span: e,
          propagateTraceparent: n
        });
        r && F5(t, r, s, o);
      }
      function F5(t, e, n, r) {
        const s = t.__sentry_xhr_v3__?.request_headers;
        if (!(s?.["sentry-trace"] || !t.setRequestHeader)) try {
          if (t.setRequestHeader("sentry-trace", e), r && !s?.traceparent && t.setRequestHeader("traceparent", r), n) {
            const o = s?.baggage;
            (!o || !m5(o)) && t.setRequestHeader("baggage", n);
          }
        } catch {
        }
      }
      function D5() {
        de.document ? de.document.addEventListener("visibilitychange", () => {
          const t = ht();
          if (!t) return;
          const e = tt(t);
          if (de.document.hidden && e) {
            const n = "cancelled", { op: r, status: s } = _e(e);
            mt && Q.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`), s || e.setStatus({
              code: Xe,
              message: n
            }), e.setAttribute("sentry.cancellation_reason", "document.hidden"), e.end();
          }
        }) : mt && Q.warn("[Tracing] Could not set up background tab detection due to lack of global document");
      }
      const v5 = 3600, Mu = "sentry_previous_trace", b5 = "sentry.previous_trace";
      function k5(t, { linkPreviousTrace: e, consistentTraceSampling: n }) {
        const r = e === "session-storage";
        let s = r ? S5() : void 0;
        t.on("spanStart", (i) => {
          if (tt(i) !== i) return;
          const a = Fe().getPropagationContext();
          s = y5(s, i, a), r && w5(s);
        });
        let o = true;
        n && t.on("beforeSampling", (i) => {
          if (!s) return;
          const a = Fe(), x = a.getPropagationContext();
          if (o && x.parentSpanId) {
            o = false;
            return;
          }
          a.setPropagationContext({
            ...x,
            dsc: {
              ...x.dsc,
              sample_rate: String(s.sampleRate),
              sampled: String(To(s.spanContext))
            },
            sampleRand: s.sampleRand
          }), i.parentSampled = To(s.spanContext), i.parentSampleRate = s.sampleRate, i.spanAttributes = {
            ...i.spanAttributes,
            [fc]: s.sampleRate
          };
        });
      }
      function y5(t, e, n) {
        const r = _e(e);
        function s() {
          try {
            return Number(n.dsc?.sample_rate) ?? Number(r.data?.[$o]);
          } catch {
            return 0;
          }
        }
        const o = {
          spanContext: e.spanContext(),
          startTimestamp: r.start_timestamp,
          sampleRate: s(),
          sampleRand: n.sampleRand
        };
        if (!t) return o;
        const i = t.spanContext;
        return i.traceId === r.trace_id ? t : (Date.now() / 1e3 - t.startTimestamp <= v5 && (mt && Q.log(`Adding previous_trace \`${JSON.stringify(i)}\` link to span \`${JSON.stringify({
          op: r.op,
          ...e.spanContext()
        })}\``), e.addLink({
          context: i,
          attributes: {
            [gf]: "previous_trace"
          }
        }), e.setAttribute(b5, `${i.traceId}-${i.spanId}-${To(i) ? 1 : 0}`)), o);
      }
      function w5(t) {
        try {
          de.sessionStorage.setItem(Mu, JSON.stringify(t));
        } catch (e) {
          mt && Q.warn("Could not store previous trace in sessionStorage", e);
        }
      }
      function S5() {
        try {
          const t = de.sessionStorage?.getItem(Mu);
          return JSON.parse(t);
        } catch {
          return;
        }
      }
      function To(t) {
        return t.traceFlags === 1;
      }
      const T5 = "BrowserTracing", P5 = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
      function I5() {
        const t = de.navigator;
        return t?.userAgent ? P5.test(t.userAgent) : false;
      }
      const N5 = {
        ...Tr,
        instrumentNavigation: true,
        instrumentPageLoad: true,
        markBackgroundSpan: true,
        enableLongTask: true,
        enableLongAnimationFrame: true,
        enableInp: true,
        ignoreResourceSpans: [],
        ignorePerformanceApiSpans: [],
        detectRedirects: true,
        linkPreviousTrace: "in-memory",
        consistentTraceSampling: false,
        enableReportPageLoaded: false,
        _experiments: {},
        ...Lu
      }, R5 = (t = {}) => {
        "enableElementTiming" in t && Hn(() => {
          console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.");
        });
        const e = {
          name: void 0,
          source: void 0
        }, n = de.document, { enableInp: r, enableLongTask: s, enableLongAnimationFrame: o, _experiments: { enableInteractions: i, enableStandaloneClsSpans: a, enableStandaloneLcpSpans: x }, beforeStartSpan: l, idleTimeout: u, finalTimeout: f, childSpanTimeout: p, markBackgroundSpan: E, traceFetch: m, traceXHR: C, trackFetchStreamPerformance: B, shouldCreateSpanForRequest: A, enableHTTPTimings: D, ignoreResourceSpans: b, ignorePerformanceApiSpans: v, instrumentPageLoad: _, instrumentNavigation: g, detectRedirects: F, linkPreviousTrace: k, consistentTraceSampling: w, enableReportPageLoaded: P, onRequestSpanStart: N, onRequestSpanEnd: I } = {
          ...N5,
          ...t
        }, L = I5();
        let R, O, W;
        function H(q, X, j = true) {
          const U = X.op === "pageload", z = X.name, K = l ? l(X) : X, Y = K.attributes || {};
          if (z !== K.name && (Y[jt] = "custom", K.attributes = Y), !j) {
            const re = qn();
            Un({
              ...K,
              startTime: re
            }).end(re);
            return;
          }
          e.name = K.name, e.source = Y[jt];
          const se = Uc(K, {
            idleTimeout: u,
            finalTimeout: f,
            childSpanTimeout: p,
            disableAutoFinish: U,
            beforeSpanEnd: (re) => {
              R?.();
              const he = Zt(q);
              Sp(re, {
                recordClsOnPageloadSpan: !he && !a,
                recordLcpOnPageloadSpan: !he && !x,
                ignoreResourceSpans: b,
                ignorePerformanceApiSpans: v,
                spanStreamingEnabled: he
              }), Ga(q, void 0);
              const Be = Fe(), Te = Be.getPropagationContext();
              Be.setPropagationContext({
                ...Te,
                traceId: se.spanContext().traceId,
                sampled: Bn(se),
                dsc: En(re)
              }), U && (W = void 0);
            },
            trimIdleSpanEndTimestamp: !P
          });
          U && P && (W = se), Ga(q, se);
          function ce() {
            n && [
              "interactive",
              "complete"
            ].includes(n.readyState) && q.emit("idleSpanEnableAutoFinish", se);
          }
          U && !P && n && (n.addEventListener("readystatechange", () => {
            ce();
          }), ce());
        }
        return {
          name: T5,
          setup(q) {
            if (L) {
              mt && Q.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
              return;
            }
            Vf();
            const X = Zt(q);
            if (R = Fp({
              recordClsStandaloneSpans: X ? void 0 : a || false,
              recordLcpStandaloneSpans: X ? void 0 : x || false,
              client: q
            }), X ? (Yp(q), Jp(q), r && Qp()) : r && Up(), o && me.PerformanceObserver && PerformanceObserver.supportedEntryTypes?.includes("long-animation-frame") ? vp() : s && Dp(), i && bp(), F && n) {
              const U = () => {
                O = Ye();
              };
              addEventListener("click", U, {
                capture: true
              }), addEventListener("keydown", U, {
                capture: true,
                passive: true
              });
            }
            function j() {
              const U = U0(q);
              U && !_e(U).timestamp && (mt && Q.log(`[Tracing] Finishing current active span with op: ${_e(U).op}`), U.setAttribute(R0, "cancelled"), U.end());
            }
            q.on("startNavigationSpan", (U, z) => {
              if (ge() !== q) return;
              if (z?.isRedirect) {
                mt && Q.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), H(q, {
                  op: "navigation.redirect",
                  ...U
                }, false);
                return;
              }
              O = void 0, j(), $t().setPropagationContext({
                traceId: Xt(),
                sampleRand: Math.random(),
                propagationSpanId: St() ? void 0 : Vt()
              });
              const K = Fe();
              K.setPropagationContext({
                traceId: Xt(),
                sampleRand: Math.random(),
                propagationSpanId: St() ? void 0 : Vt()
              }), K.setSDKProcessingMetadata({
                normalizedRequest: void 0
              }), H(q, {
                op: "navigation",
                ...U,
                parentSpan: null,
                forceTransaction: true
              });
            }), q.on("startPageLoadSpan", (U, z = {}) => {
              if (ge() !== q) return;
              j();
              const K = z.sentryTrace || Ua("sentry-trace") || ja("sentry-trace"), Y = z.baggage || Ua("baggage") || ja("baggage"), se = Hf(K, Y), ce = Fe();
              ce.setPropagationContext(se), St() || (ce.getPropagationContext().propagationSpanId = Vt()), ce.setSDKProcessingMetadata({
                normalizedRequest: Vr()
              }), H(q, {
                op: "pageload",
                ...U
              });
            }), q.on("endPageloadSpan", () => {
              P && W && (W.setAttribute(R0, "reportPageLoaded"), W.end());
            });
          },
          afterAllSetup(q) {
            if (L) return;
            let X = K0();
            if (k !== "off" && k5(q, {
              linkPreviousTrace: k,
              consistentTraceSampling: w
            }), de.location) {
              if (_) {
                const j = rt();
                L5(q, {
                  name: de.location.pathname,
                  startTime: j ? j / 1e3 : void 0,
                  attributes: {
                    [jt]: "url",
                    [Ke]: "auto.pageload.browser"
                  }
                });
              }
              g && mi(({ to: j, from: U }) => {
                if (U === void 0 && X?.indexOf(j) !== -1) {
                  X = void 0;
                  return;
                }
                X = void 0;
                const z = Wc(j), K = U0(q), Y = K && F && H5(K, O);
                M5(q, {
                  name: z?.pathname || de.location.pathname,
                  attributes: {
                    [jt]: "url",
                    [Ke]: "auto.navigation.browser"
                  }
                }, {
                  url: j,
                  isRedirect: Y
                });
              });
            }
            E && D5(), i && O5(q, u, f, p, e), r && Vp(), C5(q, {
              traceFetch: m,
              traceXHR: C,
              trackFetchStreamPerformance: B,
              tracePropagationTargets: q.getOptions().tracePropagationTargets,
              shouldCreateSpanForRequest: A,
              enableHTTPTimings: D,
              onRequestSpanStart: N,
              onRequestSpanEnd: I
            });
          }
        };
      };
      function L5(t, e, n) {
        t.emit("startPageLoadSpan", e, n), Fe().setTransactionName(e.name);
        const r = U0(t);
        return r && t.emit("afterStartPageLoadSpan", r), r;
      }
      function M5(t, e, n) {
        const { url: r, isRedirect: s } = n || {};
        t.emit("beforeStartNavigationSpan", e, {
          isRedirect: s
        }), t.emit("startNavigationSpan", e, {
          isRedirect: s
        });
        const o = Fe();
        return o.setTransactionName(e.name), r && !s && o.setSDKProcessingMetadata({
          normalizedRequest: {
            ...Vr(),
            url: r
          }
        }), U0(t);
      }
      function Ua(t) {
        return de.document?.querySelector(`meta[name=${t}]`)?.getAttribute("content") || void 0;
      }
      function ja(t) {
        return de.performance?.getEntriesByType?.("navigation")[0]?.serverTiming?.find((r) => r.name === t)?.description;
      }
      function O5(t, e, n, r, s) {
        const o = de.document;
        let i;
        const a = () => {
          const x = "ui.action.click", l = U0(t);
          if (l) {
            const u = _e(l).op;
            if ([
              "navigation",
              "pageload"
            ].includes(u)) {
              mt && Q.warn(`[Tracing] Did not create ${x} span because a pageload or navigation span is in progress.`);
              return;
            }
          }
          if (i && (i.setAttribute(R0, "interactionInterrupted"), i.end(), i = void 0), !s.name) {
            mt && Q.warn(`[Tracing] Did not create ${x} transaction because _latestRouteName is missing.`);
            return;
          }
          i = Uc({
            name: s.name,
            op: x,
            attributes: {
              [jt]: s.source || "url"
            }
          }, {
            idleTimeout: e,
            finalTimeout: n,
            childSpanTimeout: r
          });
        };
        o && addEventListener("click", a, {
          capture: true
        });
      }
      const Ou = "_sentry_idleSpan";
      function U0(t) {
        return t[Ou];
      }
      function Ga(t, e) {
        ct(t, Ou, e);
      }
      const Wa = 1.5;
      function H5(t, e) {
        const n = _e(t), r = qn(), s = n.start_timestamp;
        return !(r - s > Wa || e && r - e <= Wa);
      }
      function q5(t) {
        const e = {
          ...t
        };
        return au(e, "svelte"), p5(e);
      }
      function Z() {
      }
      function Zr(t, e) {
        for (const n in e) t[n] = e[n];
        return t;
      }
      function Hu(t) {
        return t();
      }
      function Va() {
        return /* @__PURE__ */ Object.create(null);
      }
      function ue(t) {
        t.forEach(Hu);
      }
      function As(t) {
        return typeof t == "function";
      }
      function ke(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
      }
      let Fr;
      function Ya(t, e) {
        return t === e ? true : (Fr || (Fr = document.createElement("a")), Fr.href = e, t === Fr.href);
      }
      function z5(t) {
        return Object.keys(t).length === 0;
      }
      function qu(t, ...e) {
        if (t == null) {
          for (const r of e) r(void 0);
          return Z;
        }
        const n = t.subscribe(...e);
        return n.unsubscribe ? () => n.unsubscribe() : n;
      }
      function it(t, e, n) {
        t.$$.on_destroy.push(qu(e, n));
      }
      function Ka(t, e, n) {
        return t.set(n), e;
      }
      function Ge(t) {
        return t && As(t.destroy) ? t.destroy : Z;
      }
      function c(t, e) {
        t.appendChild(e);
      }
      function T(t, e, n) {
        t.insertBefore(e, n || null);
      }
      function S(t) {
        t.parentNode && t.parentNode.removeChild(t);
      }
      function vt(t, e) {
        for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
      }
      function h(t) {
        return document.createElement(t);
      }
      function M(t) {
        return document.createTextNode(t);
      }
      function y() {
        return M(" ");
      }
      function Pt() {
        return M("");
      }
      function G(t, e, n, r) {
        return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
      }
      function tn(t) {
        return function(e) {
          return e.preventDefault(), t.call(this, e);
        };
      }
      function U5(t) {
        return function(e) {
          return e.stopPropagation(), t.call(this, e);
        };
      }
      function d(t, e, n) {
        n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
      }
      function j5(t) {
        return Array.from(t.childNodes);
      }
      function V(t, e) {
        e = "" + e, t.data !== e && (t.data = e);
      }
      function xe(t, e) {
        t.value = e ?? "";
      }
      function oe(t, e, n) {
        t.classList.toggle(e, !!n);
      }
      function G5(t, e, { bubbles: n = false, cancelable: r = false } = {}) {
        return new CustomEvent(t, {
          detail: e,
          bubbles: n,
          cancelable: r
        });
      }
      function $r(t, e) {
        return new t(e);
      }
      let j0;
      function k0(t) {
        j0 = t;
      }
      function Fs() {
        if (!j0) throw new Error("Function called outside component initialization");
        return j0;
      }
      function st(t) {
        Fs().$$.on_mount.push(t);
      }
      function W5(t) {
        Fs().$$.after_update.push(t);
      }
      function Ds(t) {
        Fs().$$.on_destroy.push(t);
      }
      function hi() {
        const t = Fs();
        return (e, n, { cancelable: r = false } = {}) => {
          const s = t.$$.callbacks[e];
          if (s) {
            const o = G5(e, n, {
              cancelable: r
            });
            return s.slice().forEach((i) => {
              i.call(t, o);
            }), !o.defaultPrevented;
          }
          return true;
        };
      }
      function Po(t, e) {
        const n = t.$$.callbacks[e.type];
        n && n.slice().forEach((r) => r.call(this, e));
      }
      const Qn = [], es = [];
      let e0 = [];
      const Ja = [], zu = Promise.resolve();
      let Io = false;
      function Uu() {
        Io || (Io = true, zu.then(Gu));
      }
      function ju() {
        return Uu(), zu;
      }
      function No(t) {
        e0.push(t);
      }
      const Qs = /* @__PURE__ */ new Set();
      let Yn = 0;
      function Gu() {
        if (Yn !== 0) return;
        const t = j0;
        do {
          try {
            for (; Yn < Qn.length; ) {
              const e = Qn[Yn];
              Yn++, k0(e), V5(e.$$);
            }
          } catch (e) {
            throw Qn.length = 0, Yn = 0, e;
          }
          for (k0(null), Qn.length = 0, Yn = 0; es.length; ) es.pop()();
          for (let e = 0; e < e0.length; e += 1) {
            const n = e0[e];
            Qs.has(n) || (Qs.add(n), n());
          }
          e0.length = 0;
        } while (Qn.length);
        for (; Ja.length; ) Ja.pop()();
        Io = false, Qs.clear(), k0(t);
      }
      function V5(t) {
        if (t.fragment !== null) {
          t.update(), ue(t.before_update);
          const e = t.dirty;
          t.dirty = [
            -1
          ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(No);
        }
      }
      function Y5(t) {
        const e = [], n = [];
        e0.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), e0 = e;
      }
      const Lr = /* @__PURE__ */ new Set();
      let kn;
      function B0() {
        kn = {
          r: 0,
          c: [],
          p: kn
        };
      }
      function g0() {
        kn.r || ue(kn.c), kn = kn.p;
      }
      function Ce(t, e) {
        t && t.i && (Lr.delete(t), t.i(e));
      }
      function Ae(t, e, n, r) {
        if (t && t.o) {
          if (Lr.has(t)) return;
          Lr.add(t), kn.c.push(() => {
            Lr.delete(t), r && (n && t.d(1), r());
          }), t.o(e);
        } else r && r();
      }
      function ve(t) {
        return t?.length !== void 0 ? t : Array.from(t);
      }
      function K5(t, e) {
        t.d(1), e.delete(t.key);
      }
      function J5(t, e, n, r, s, o, i, a, x, l, u, f) {
        let p = t.length, E = o.length, m = p;
        const C = {};
        for (; m--; ) C[t[m].key] = m;
        const B = [], A = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), b = [];
        for (m = E; m--; ) {
          const F = f(s, o, m), k = n(F);
          let w = i.get(k);
          w ? b.push(() => w.p(F, e)) : (w = l(k, F), w.c()), A.set(k, B[m] = w), k in C && D.set(k, Math.abs(m - C[k]));
        }
        const v = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
        function g(F) {
          Ce(F, 1), F.m(a, u), i.set(F.key, F), u = F.first, E--;
        }
        for (; p && E; ) {
          const F = B[E - 1], k = t[p - 1], w = F.key, P = k.key;
          F === k ? (u = F.first, p--, E--) : A.has(P) ? !i.has(w) || v.has(w) ? g(F) : _.has(P) ? p-- : D.get(w) > D.get(P) ? (_.add(w), g(F)) : (v.add(P), p--) : (x(k, i), p--);
        }
        for (; p--; ) {
          const F = t[p];
          A.has(F.key) || x(F, i);
        }
        for (; E; ) g(B[E - 1]);
        return ue(b), B;
      }
      function ts(t, e) {
        const n = {}, r = {}, s = {
          $$scope: 1
        };
        let o = t.length;
        for (; o--; ) {
          const i = t[o], a = e[o];
          if (a) {
            for (const x in i) x in a || (r[x] = 1);
            for (const x in a) s[x] || (n[x] = a[x], s[x] = 1);
            t[o] = a;
          } else for (const x in i) s[x] = 1;
        }
        for (const i in r) i in n || (n[i] = void 0);
        return n;
      }
      function ns(t) {
        return typeof t == "object" && t !== null ? t : {};
      }
      function We(t) {
        t && t.c();
      }
      function Oe(t, e, n) {
        const { fragment: r, after_update: s } = t.$$;
        r && r.m(e, n), No(() => {
          const o = t.$$.on_mount.map(Hu).filter(As);
          t.$$.on_destroy ? t.$$.on_destroy.push(...o) : ue(o), t.$$.on_mount = [];
        }), s.forEach(No);
      }
      function He(t, e) {
        const n = t.$$;
        n.fragment !== null && (Y5(n.after_update), ue(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
      }
      function X5(t, e) {
        t.$$.dirty[0] === -1 && (Qn.push(t), Uu(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function we(t, e, n, r, s, o, i = null, a = [
        -1
      ]) {
        const x = j0;
        k0(t);
        const l = t.$$ = {
          fragment: null,
          ctx: [],
          props: o,
          update: Z,
          not_equal: s,
          bound: Va(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (x ? x.$$.context : [])),
          callbacks: Va(),
          dirty: a,
          skip_bound: false,
          root: e.target || x.$$.root
        };
        i && i(l.root);
        let u = false;
        if (l.ctx = n ? n(t, e.props || {}, (f, p, ...E) => {
          const m = E.length ? E[0] : p;
          return l.ctx && s(l.ctx[f], l.ctx[f] = m) && (!l.skip_bound && l.bound[f] && l.bound[f](m), u && X5(t, f)), p;
        }) : [], l.update(), u = true, ue(l.before_update), l.fragment = r ? r(l.ctx) : false, e.target) {
          if (e.hydrate) {
            const f = j5(e.target);
            l.fragment && l.fragment.l(f), f.forEach(S);
          } else l.fragment && l.fragment.c();
          e.intro && Ce(t.$$.fragment), Oe(t, e.target, e.anchor), Gu();
        }
        k0(x);
      }
      class Se {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          He(this, 1), this.$destroy = Z;
        }
        $on(e, n) {
          if (!As(n)) return Z;
          const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return r.push(n), () => {
            const s = r.indexOf(n);
            s !== -1 && r.splice(s, 1);
          };
        }
        $set(e) {
          this.$$set && !z5(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const Q5 = "4", Kn = [];
      function Wu(t, e) {
        return {
          subscribe: Ct(t, e).subscribe
        };
      }
      function Ct(t, e = Z) {
        let n;
        const r = /* @__PURE__ */ new Set();
        function s(a) {
          if (ke(t, a) && (t = a, n)) {
            const x = !Kn.length;
            for (const l of r) l[1](), Kn.push(l, t);
            if (x) {
              for (let l = 0; l < Kn.length; l += 2) Kn[l][0](Kn[l + 1]);
              Kn.length = 0;
            }
          }
        }
        function o(a) {
          s(a(t));
        }
        function i(a, x = Z) {
          const l = [
            a,
            x
          ];
          return r.add(l), r.size === 1 && (n = e(s, o) || Z), a(t), () => {
            r.delete(l), r.size === 0 && n && (n(), n = null);
          };
        }
        return {
          set: s,
          update: o,
          subscribe: i
        };
      }
      function Vu(t, e, n) {
        const r = !Array.isArray(t), s = r ? [
          t
        ] : t;
        if (!s.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const o = e.length < 2;
        return Wu(n, (i, a) => {
          let x = false;
          const l = [];
          let u = 0, f = Z;
          const p = () => {
            if (u) return;
            f();
            const m = e(r ? l[0] : l, i, a);
            o ? i(m) : f = As(m) ? m : Z;
          }, E = s.map((m, C) => qu(m, (B) => {
            l[C] = B, u &= ~(1 << C), x && p();
          }, () => {
            u |= 1 << C;
          }));
          return x = true, p(), function() {
            ue(E), f(), x = false;
          };
        });
      }
      const Z5 = typeof localStorage < "u" ? localStorage.getItem("theme") : null, Yu = Z5 ?? "light", Mr = Ct(Yu);
      typeof document < "u" && document.documentElement.setAttribute("data-theme", Yu);
      Mr.subscribe((t) => {
        typeof localStorage < "u" && localStorage.setItem("theme", t), typeof document < "u" && document.documentElement.setAttribute("data-theme", t);
      });
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add(Q5);
      function $5(t, e) {
        if (t instanceof RegExp) return {
          keys: false,
          pattern: t
        };
        var n, r, s, o, i = [], a = "", x = t.split("/");
        for (x[0] || x.shift(); s = x.shift(); ) n = s[0], n === "*" ? (i.push("wild"), a += "/(.*)") : n === ":" ? (r = s.indexOf("?", 1), o = s.indexOf(".", 1), i.push(s.substring(1, ~r ? r : ~o ? o : s.length)), a += ~r && !~o ? "(?:/([^/]+?))?" : "/([^/]+?)", ~o && (a += (~r ? "?" : "") + "\\" + s.substring(o))) : a += "/" + s;
        return {
          keys: i,
          pattern: new RegExp("^" + a + "/?$", "i")
        };
      }
      function e6(t) {
        let e, n, r;
        const s = [
          t[2]
        ];
        var o = t[0];
        function i(a, x) {
          let l = {};
          for (let u = 0; u < s.length; u += 1) l = Zr(l, s[u]);
          return x !== void 0 && x & 4 && (l = Zr(l, ts(s, [
            ns(a[2])
          ]))), {
            props: l
          };
        }
        return o && (e = $r(o, i(t)), e.$on("routeEvent", t[7])), {
          c() {
            e && We(e.$$.fragment), n = Pt();
          },
          m(a, x) {
            e && Oe(e, a, x), T(a, n, x), r = true;
          },
          p(a, x) {
            if (x & 1 && o !== (o = a[0])) {
              if (e) {
                B0();
                const l = e;
                Ae(l.$$.fragment, 1, 0, () => {
                  He(l, 1);
                }), g0();
              }
              o ? (e = $r(o, i(a, x)), e.$on("routeEvent", a[7]), We(e.$$.fragment), Ce(e.$$.fragment, 1), Oe(e, n.parentNode, n)) : e = null;
            } else if (o) {
              const l = x & 4 ? ts(s, [
                ns(a[2])
              ]) : {};
              e.$set(l);
            }
          },
          i(a) {
            r || (e && Ce(e.$$.fragment, a), r = true);
          },
          o(a) {
            e && Ae(e.$$.fragment, a), r = false;
          },
          d(a) {
            a && S(n), e && He(e, a);
          }
        };
      }
      function t6(t) {
        let e, n, r;
        const s = [
          {
            params: t[1]
          },
          t[2]
        ];
        var o = t[0];
        function i(a, x) {
          let l = {};
          for (let u = 0; u < s.length; u += 1) l = Zr(l, s[u]);
          return x !== void 0 && x & 6 && (l = Zr(l, ts(s, [
            x & 2 && {
              params: a[1]
            },
            x & 4 && ns(a[2])
          ]))), {
            props: l
          };
        }
        return o && (e = $r(o, i(t)), e.$on("routeEvent", t[6])), {
          c() {
            e && We(e.$$.fragment), n = Pt();
          },
          m(a, x) {
            e && Oe(e, a, x), T(a, n, x), r = true;
          },
          p(a, x) {
            if (x & 1 && o !== (o = a[0])) {
              if (e) {
                B0();
                const l = e;
                Ae(l.$$.fragment, 1, 0, () => {
                  He(l, 1);
                }), g0();
              }
              o ? (e = $r(o, i(a, x)), e.$on("routeEvent", a[6]), We(e.$$.fragment), Ce(e.$$.fragment, 1), Oe(e, n.parentNode, n)) : e = null;
            } else if (o) {
              const l = x & 6 ? ts(s, [
                x & 2 && {
                  params: a[1]
                },
                x & 4 && ns(a[2])
              ]) : {};
              e.$set(l);
            }
          },
          i(a) {
            r || (e && Ce(e.$$.fragment, a), r = true);
          },
          o(a) {
            e && Ae(e.$$.fragment, a), r = false;
          },
          d(a) {
            a && S(n), e && He(e, a);
          }
        };
      }
      function n6(t) {
        let e, n, r, s;
        const o = [
          t6,
          e6
        ], i = [];
        function a(x, l) {
          return x[1] ? 0 : 1;
        }
        return e = a(t), n = i[e] = o[e](t), {
          c() {
            n.c(), r = Pt();
          },
          m(x, l) {
            i[e].m(x, l), T(x, r, l), s = true;
          },
          p(x, [l]) {
            let u = e;
            e = a(x), e === u ? i[e].p(x, l) : (B0(), Ae(i[u], 1, 1, () => {
              i[u] = null;
            }), g0(), n = i[e], n ? n.p(x, l) : (n = i[e] = o[e](x), n.c()), Ce(n, 1), n.m(r.parentNode, r));
          },
          i(x) {
            s || (Ce(n), s = true);
          },
          o(x) {
            Ae(n), s = false;
          },
          d(x) {
            x && S(r), i[e].d(x);
          }
        };
      }
      function Xa() {
        const t = window.location.href.indexOf("#/");
        let e = t > -1 ? window.location.href.substr(t + 1) : "/";
        const n = e.indexOf("?");
        let r = "";
        return n > -1 && (r = e.substr(n + 1), e = e.substr(0, n)), {
          location: e,
          querystring: r
        };
      }
      const Ci = Wu(null, function(e) {
        e(Xa());
        const n = () => {
          e(Xa());
        };
        return window.addEventListener("hashchange", n, false), function() {
          window.removeEventListener("hashchange", n, false);
        };
      }), r6 = Vu(Ci, (t) => t.location);
      Vu(Ci, (t) => t.querystring);
      const Qa = Ct(void 0);
      async function Ee(t) {
        if (!t || t.length < 1 || t.charAt(0) != "/" && t.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await ju(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (t.charAt(0) == "#" ? "" : "#") + t;
      }
      function s6(t) {
        t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function o6(t, e, n) {
        let { routes: r = {} } = e, { prefix: s = "" } = e, { restoreScrollState: o = false } = e;
        class i {
          constructor(_, g) {
            if (!g || typeof g != "function" && (typeof g != "object" || g._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!_ || typeof _ == "string" && (_.length < 1 || _.charAt(0) != "/" && _.charAt(0) != "*") || typeof _ == "object" && !(_ instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: F, keys: k } = $5(_);
            this.path = _, typeof g == "object" && g._sveltesparouter === true ? (this.component = g.component, this.conditions = g.conditions || [], this.userData = g.userData, this.props = g.props || {}) : (this.component = () => Promise.resolve(g), this.conditions = [], this.props = {}), this._pattern = F, this._keys = k;
          }
          match(_) {
            if (s) {
              if (typeof s == "string") if (_.startsWith(s)) _ = _.substr(s.length) || "/";
              else return null;
              else if (s instanceof RegExp) {
                const w = _.match(s);
                if (w && w[0]) _ = _.substr(w[0].length) || "/";
                else return null;
              }
            }
            const g = this._pattern.exec(_);
            if (g === null) return null;
            if (this._keys === false) return g;
            const F = {};
            let k = 0;
            for (; k < this._keys.length; ) {
              try {
                F[this._keys[k]] = decodeURIComponent(g[k + 1] || "") || null;
              } catch {
                F[this._keys[k]] = null;
              }
              k++;
            }
            return F;
          }
          async checkConditions(_) {
            for (let g = 0; g < this.conditions.length; g++) if (!await this.conditions[g](_)) return false;
            return true;
          }
        }
        const a = [];
        r instanceof Map ? r.forEach((v, _) => {
          a.push(new i(_, v));
        }) : Object.keys(r).forEach((v) => {
          a.push(new i(v, r[v]));
        });
        let x = null, l = null, u = {};
        const f = hi();
        async function p(v, _) {
          await ju(), f(v, _);
        }
        let E = null, m = null;
        o && (m = (v) => {
          v.state && (v.state.__svelte_spa_router_scrollY || v.state.__svelte_spa_router_scrollX) ? E = v.state : E = null;
        }, window.addEventListener("popstate", m), W5(() => {
          s6(E);
        }));
        let C = null, B = null;
        const A = Ci.subscribe(async (v) => {
          C = v;
          let _ = 0;
          for (; _ < a.length; ) {
            const g = a[_].match(v.location);
            if (!g) {
              _++;
              continue;
            }
            const F = {
              route: a[_].path,
              location: v.location,
              querystring: v.querystring,
              userData: a[_].userData,
              params: g && typeof g == "object" && Object.keys(g).length ? g : null
            };
            if (!await a[_].checkConditions(F)) {
              n(0, x = null), B = null, p("conditionsFailed", F);
              return;
            }
            p("routeLoading", Object.assign({}, F));
            const k = a[_].component;
            if (B != k) {
              k.loading ? (n(0, x = k.loading), B = k, n(1, l = k.loadingParams), n(2, u = {}), p("routeLoaded", Object.assign({}, F, {
                component: x,
                name: x.name,
                params: l
              }))) : (n(0, x = null), B = null);
              const w = await k();
              if (v != C) return;
              n(0, x = w && w.default || w), B = k;
            }
            g && typeof g == "object" && Object.keys(g).length ? n(1, l = g) : n(1, l = null), n(2, u = a[_].props), p("routeLoaded", Object.assign({}, F, {
              component: x,
              name: x.name,
              params: l
            })).then(() => {
              Qa.set(l);
            });
            return;
          }
          n(0, x = null), B = null, Qa.set(void 0);
        });
        Ds(() => {
          A(), m && window.removeEventListener("popstate", m);
        });
        function D(v) {
          Po.call(this, t, v);
        }
        function b(v) {
          Po.call(this, t, v);
        }
        return t.$$set = (v) => {
          "routes" in v && n(3, r = v.routes), "prefix" in v && n(4, s = v.prefix), "restoreScrollState" in v && n(5, o = v.restoreScrollState);
        }, t.$$.update = () => {
          t.$$.dirty & 32 && (history.scrollRestoration = o ? "manual" : "auto");
        }, [
          x,
          l,
          u,
          r,
          s,
          o,
          D,
          b
        ];
      }
      class i6 extends Se {
        constructor(e) {
          super(), we(this, e, o6, n6, ke, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const a6 = "/assets/peachsafe_core_wasm_bg-C8H6g175.wasm", x6 = async (t = {}, e) => {
        let n;
        if (e.startsWith("data:")) {
          const r = e.replace(/^data:.*?base64,/, "");
          let s;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(r, "base64");
          else if (typeof atob == "function") {
            const o = atob(r);
            s = new Uint8Array(o.length);
            for (let i = 0; i < o.length; i++) s[i] = o.charCodeAt(i);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(s, t);
        } else {
          const r = await fetch(e), s = r.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, t);
          else {
            const o = await r.arrayBuffer();
            n = await WebAssembly.instantiate(o, t);
          }
        }
        return n.instance.exports;
      };
      function l6(t, e) {
        const n = Ie.aesGcmDecrypt(t, e);
        if (n[2]) throw Qe(n[1]);
        return Qe(n[0]);
      }
      function c6(t, e) {
        const n = Ie.aesGcmEncrypt(t, e);
        if (n[2]) throw Qe(n[1]);
        return Qe(n[0]);
      }
      function u6(t, e) {
        const n = Ju(t, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), r = rs, s = Ie.argon2idDerive(n, r, e);
        if (s[2]) throw Qe(s[1]);
        return Qe(s[0]);
      }
      function d6(t) {
        const e = Ie.deriveAlertKey(t);
        if (e[2]) throw Qe(e[1]);
        return Qe(e[0]);
      }
      function f6(t, e) {
        const n = Ie.deriveEncounterToken(t, e);
        if (n[2]) throw Qe(n[1]);
        return Qe(n[0]);
      }
      function E6(t) {
        const e = Ie.ed25519PubkeyFromSeed(t);
        if (e[2]) throw Qe(e[1]);
        return Qe(e[0]);
      }
      function p6(t, e) {
        const n = Ie.ed25519Sign(t, e);
        if (n[2]) throw Qe(n[1]);
        return Qe(n[0]);
      }
      function m6() {
        const t = Ie.generateEphemeralKeypair();
        if (t[2]) throw Qe(t[1]);
        return Qe(t[0]);
      }
      function h6(t) {
        return Ie.generateRandomBytes(t);
      }
      function Bi(t) {
        return Ie.sha256(t);
      }
      function C6(t, e, n) {
        const r = Ju(t, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), s = rs, o = Ie.solvePoW(r, s, e, n);
        if (o[2]) throw Qe(o[1]);
        return Qe(o[0]);
      }
      function B6(t) {
        return typeof t == "function";
      }
      function g6(t) {
        const e = t;
        return typeof e == "object" && e !== null;
      }
      function _6(t) {
        return typeof t == "string";
      }
      function A6(t) {
        return t === void 0;
      }
      function F6(t, e) {
        throw new Error(Ku(t, e));
      }
      function D6() {
        return lr(function(t, e, n) {
          return t.call(e, n);
        }, arguments);
      }
      function v6(t) {
        return t.crypto;
      }
      function b6() {
        return lr(function(t, e) {
          t.getRandomValues(e);
        }, arguments);
      }
      function k6(t) {
        return t.length;
      }
      function y6(t) {
        return t.msCrypto;
      }
      function w6() {
        return new Object();
      }
      function S6(t) {
        return new Uint8Array(t >>> 0);
      }
      function T6(t) {
        return t.node;
      }
      function P6(t) {
        return t.process;
      }
      function I6(t, e, n) {
        Uint8Array.prototype.set.call(gi(t, e), n);
      }
      function N6() {
        return lr(function(t, e) {
          t.randomFillSync(e);
        }, arguments);
      }
      function R6() {
        return lr(function() {
          return module.require;
        }, arguments);
      }
      function L6() {
        return lr(function(t, e, n) {
          return Reflect.set(t, e, n);
        }, arguments);
      }
      function M6(t, e, n) {
        t.set(gi(e, n));
      }
      function O6() {
        const t = typeof global > "u" ? null : global;
        return vs(t) ? 0 : xr(t);
      }
      function H6() {
        const t = typeof globalThis > "u" ? null : globalThis;
        return vs(t) ? 0 : xr(t);
      }
      function q6() {
        const t = typeof self > "u" ? null : self;
        return vs(t) ? 0 : xr(t);
      }
      function z6() {
        const t = typeof window > "u" ? null : window;
        return vs(t) ? 0 : xr(t);
      }
      function U6(t, e, n) {
        return t.subarray(e >>> 0, n >>> 0);
      }
      function j6(t) {
        return t.versions;
      }
      function G6(t) {
        return t;
      }
      function W6(t, e) {
        return gi(t, e);
      }
      function V6(t, e) {
        return Ku(t, e);
      }
      function Y6() {
        const t = Ie.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, true), t.set(e + 3, false);
      }
      function xr(t) {
        const e = Ie.__externref_table_alloc();
        return Ie.__wbindgen_externrefs.set(e, t), e;
      }
      function gi(t, e) {
        return t = t >>> 0, y0().subarray(t / 1, t / 1 + e);
      }
      function Ku(t, e) {
        return t = t >>> 0, J6(t, e);
      }
      let Dr = null;
      function y0() {
        return (Dr === null || Dr.byteLength === 0) && (Dr = new Uint8Array(Ie.memory.buffer)), Dr;
      }
      function lr(t, e) {
        try {
          return t.apply(this, e);
        } catch (n) {
          const r = xr(n);
          Ie.__wbindgen_exn_store(r);
        }
      }
      function vs(t) {
        return t == null;
      }
      function Ju(t, e, n) {
        if (n === void 0) {
          const a = w0.encode(t), x = e(a.length, 1) >>> 0;
          return y0().subarray(x, x + a.length).set(a), rs = a.length, x;
        }
        let r = t.length, s = e(r, 1) >>> 0;
        const o = y0();
        let i = 0;
        for (; i < r; i++) {
          const a = t.charCodeAt(i);
          if (a > 127) break;
          o[s + i] = a;
        }
        if (i !== r) {
          i !== 0 && (t = t.slice(i)), s = n(s, r, r = i + t.length * 3, 1) >>> 0;
          const a = y0().subarray(s + i, s + r), x = w0.encodeInto(t, a);
          i += x.written, s = n(s, r, i, 1) >>> 0;
        }
        return rs = i, s;
      }
      function Qe(t) {
        const e = Ie.__wbindgen_externrefs.get(t);
        return Ie.__externref_table_dealloc(t), e;
      }
      let Or = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Or.decode();
      const K6 = 2146435072;
      let Zs = 0;
      function J6(t, e) {
        return Zs += e, Zs >= K6 && (Or = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), Or.decode(), Zs = e), Or.decode(y0().subarray(t, t + e));
      }
      const w0 = new TextEncoder();
      "encodeInto" in w0 || (w0.encodeInto = function(t, e) {
        const n = w0.encode(t);
        return e.set(n), {
          read: t.length,
          written: n.length
        };
      });
      let rs = 0, Ie;
      function X6(t) {
        Ie = t;
      }
      URL = globalThis.URL;
      const Q6 = await x6({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: v6,
          __wbg_process_44c7a14e11e9f69e: P6,
          __wbg_versions_276b2795b1c6a219: j6,
          __wbg_node_84ea875411254db1: T6,
          __wbg_require_b4edbdcf3e2a1ef0: R6,
          __wbg_call_a24592a6f349a97e: D6,
          __wbg_msCrypto_bd5a034af96bcba6: y6,
          __wbg_randomFillSync_6c25eac9869eb53c: N6,
          __wbg_getRandomValues_c44a50d8cfdaebeb: b6,
          __wbg_new_aa8d0fa9762c29bd: w6,
          __wbg_length_9f1775224cf1d815: k6,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: I6,
          __wbg_new_with_length_8c854e41ea4dae9b: S6,
          __wbg_subarray_f8ca46a25b1f5e0d: U6,
          __wbg_set_3d484eb794afec82: M6,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: H6,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: q6,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: O6,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: z6,
          __wbg_set_022bee52d0b05b19: L6,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: F6,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: g6,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: _6,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: B6,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: A6,
          __wbindgen_init_externref_table: Y6,
          __wbindgen_cast_0000000000000001: G6,
          __wbindgen_cast_0000000000000002: W6,
          __wbindgen_cast_0000000000000003: V6
        }
      }, a6), { memory: Z6, aesGcmDecrypt: $6, aesGcmEncrypt: em, argon2idDerive: tm, deriveAlertKey: nm, deriveEncounterToken: rm, ed25519PubkeyFromSeed: sm, ed25519Sign: om, ed25519Verify: im, generateEphemeralKeypair: am, generateRandomBytes: xm, generateUserKeypair: lm, main: cm, serializePublicKey: um, sha256: dm, solvePoW: fm, __wbindgen_exn_store: Em, __externref_table_alloc: pm, __wbindgen_externrefs: mm, __externref_table_dealloc: hm, __wbindgen_malloc: Cm, __wbindgen_realloc: Bm, __wbindgen_free: gm, __wbindgen_start: Xu } = Q6, _m = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: pm,
        __externref_table_dealloc: hm,
        __wbindgen_exn_store: Em,
        __wbindgen_externrefs: mm,
        __wbindgen_free: gm,
        __wbindgen_malloc: Cm,
        __wbindgen_realloc: Bm,
        __wbindgen_start: Xu,
        aesGcmDecrypt: $6,
        aesGcmEncrypt: em,
        argon2idDerive: tm,
        deriveAlertKey: nm,
        deriveEncounterToken: rm,
        ed25519PubkeyFromSeed: sm,
        ed25519Sign: om,
        ed25519Verify: im,
        generateEphemeralKeypair: am,
        generateRandomBytes: xm,
        generateUserKeypair: lm,
        main: cm,
        memory: Z6,
        serializePublicKey: um,
        sha256: dm,
        solvePoW: fm
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      X6(_m);
      Xu();
      let Ro = false;
      async function Am() {
        Ro || (Ro = true);
      }
      function Bt() {
        if (!Ro) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function nt(t) {
        const e = new Uint8Array(t.length / 2);
        for (let n = 0; n < t.length; n += 2) e[n / 2] = parseInt(t.slice(n, n + 2), 16);
        return e;
      }
      function ne(t) {
        return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function cr(t) {
        return Bt(), h6(t);
      }
      async function Gt(t, e) {
        return Bt(), await new Promise((n) => setTimeout(n, 0)), u6(t, e);
      }
      function ur(t, e) {
        return Bt(), c6(t, e);
      }
      function bs(t, e) {
        return Bt(), l6(t, e);
      }
      function Fm() {
        return Bt(), m6();
      }
      function Dm(t, e) {
        return Bt(), f6(t, e);
      }
      function Qu(t) {
        return Bt(), E6(t);
      }
      function Zu(t, e) {
        return Bt(), p6(t, e);
      }
      function vm(t) {
        return Bt(), Bi(t);
      }
      function Lo(t) {
        return Bt(), d6(t);
      }
      function bm(t, e, n) {
        return Bt(), C6(t, e, n);
      }
      function xn(t) {
        let e = "";
        for (let n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function $u(t) {
        const n = (t + "===".slice((t.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(n), (r) => r.charCodeAt(0));
      }
      function km(t, e, n, r) {
        const s = r && r.trim() ? encodeURIComponent(r.trim()) : "";
        return `2|${t}|${e}|${n}|${s}`;
      }
      function Za(t) {
        const e = t.split("|");
        if (!e.length || e[0] !== "2") return null;
        if (e.length < 4 || e.length > 5) throw new Error("Invalid group QR payload");
        const n = e[1], r = parseInt(e[2], 10), s = e[3], o = e.length === 5 && e[4] ? decodeURIComponent(e[4]) : null;
        if (isNaN(r) || n.length !== 64 || s.length !== 64) throw new Error("Invalid group QR payload");
        return {
          groupTokenHex: n,
          timestamp: r,
          hostContactIdHex: s,
          name: o
        };
      }
      function t0(t, e) {
        Bt();
        const n = new Uint8Array(36);
        return n.set(t, 0), n[32] = e >>> 24 & 255, n[33] = e >>> 16 & 255, n[34] = e >>> 8 & 255, n[35] = e & 255, Bi(n);
      }
      function yn(t, e, n) {
        Bt();
        const r = new Uint8Array(68);
        return r.set(t, 0), r.set(e, 32), r[64] = n >>> 24 & 255, r[65] = n >>> 16 & 255, r[66] = n >>> 8 & 255, r[67] = n & 255, Bi(r);
      }
      const Rn = Ct("ok");
      let ed = "ok";
      Rn.subscribe((t) => {
        ed = t;
      });
      let ss = null;
      function ym() {
        clearTimeout(ss ?? void 0), Rn.set("retrying");
      }
      function wm() {
        ed !== "ok" && (clearTimeout(ss ?? void 0), Rn.set("reconnected"), ss = setTimeout(() => Rn.set("ok"), 3e3));
      }
      function $a() {
        clearTimeout(ss ?? void 0), Rn.set("down");
      }
      function ex(t) {
        let e;
        function n(o, i) {
          if (o[0] === "retrying") return Pm;
          if (o[0] === "down") return Tm;
          if (o[0] === "reconnected") return Sm;
        }
        let r = n(t), s = r && r(t);
        return {
          c() {
            e = h("div"), s && s.c(), d(e, "class", "banner svelte-176fo9c"), d(e, "role", "status"), d(e, "aria-live", "polite"), oe(e, "retrying", t[0] === "retrying"), oe(e, "down", t[0] === "down"), oe(e, "reconnected", t[0] === "reconnected");
          },
          m(o, i) {
            T(o, e, i), s && s.m(e, null);
          },
          p(o, i) {
            r !== (r = n(o)) && (s && s.d(1), s = r && r(o), s && (s.c(), s.m(e, null))), i & 1 && oe(e, "retrying", o[0] === "retrying"), i & 1 && oe(e, "down", o[0] === "down"), i & 1 && oe(e, "reconnected", o[0] === "reconnected");
          },
          d(o) {
            o && S(e), s && s.d();
          }
        };
      }
      function Sm(t) {
        let e;
        return {
          c() {
            e = M("Reconnected");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Tm(t) {
        let e;
        return {
          c() {
            e = M("Server unavailable. Please try again later.");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Pm(t) {
        let e;
        return {
          c() {
            e = M("Server unreachable \u2014 retrying\u2026");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Im(t) {
        let e, n = t[0] !== "ok" && ex(t);
        return {
          c() {
            n && n.c(), e = Pt();
          },
          m(r, s) {
            n && n.m(r, s), T(r, e, s);
          },
          p(r, [s]) {
            r[0] !== "ok" ? n ? n.p(r, s) : (n = ex(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
          },
          i: Z,
          o: Z,
          d(r) {
            r && S(e), n && n.d(r);
          }
        };
      }
      function Nm(t, e, n) {
        let r;
        return it(t, Rn, (s) => n(0, r = s)), [
          r
        ];
      }
      class Rm extends Se {
        constructor(e) {
          super(), we(this, e, Nm, Im, ke, {});
        }
      }
      const ks = Ct(false);
      function Lm() {
        ks.set(false);
      }
      const Ne = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", $s = [
        1e3,
        2e3,
        4e3
      ], tx = /* @__PURE__ */ new Set([
        502,
        503,
        504
      ]);
      async function gn(t, e = {}) {
        const n = {
          ...e,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            ...e.headers ?? {}
          }
        };
        for (let r = 0; ; r++) {
          try {
            const s = await fetch(t, n);
            if (!tx.has(s.status) || r >= $s.length) return tx.has(s.status) ? $a() : wm(), s;
          } catch (s) {
            if (r >= $s.length) throw $a(), s;
          }
          ym(), await new Promise((s) => setTimeout(s, $s[r]));
        }
      }
      let Ln = null, _i = null, Ai = null;
      const G0 = "peachsafe_device_tokens";
      function Fi(t) {
        try {
          const e = JSON.parse(t ?? "{}");
          if (e !== null && typeof e == "object" && !Array.isArray(e)) return e;
        } catch {
        }
        return {};
      }
      function Mm(t) {
        const n = Fi(localStorage.getItem(G0))[t];
        return typeof n == "string" ? n : null;
      }
      function Om(t, e) {
        try {
          const n = Fi(localStorage.getItem(G0));
          n[t] = e, localStorage.setItem(G0, JSON.stringify(n));
        } catch {
        }
      }
      function eo(t) {
        try {
          const e = Fi(localStorage.getItem(G0));
          delete e[t], localStorage.setItem(G0, JSON.stringify(e));
        } catch {
        }
      }
      const jn = Ct(null), ys = Ct(null), W0 = Ct(null), S0 = Ct(null), os = Ct(null);
      class td extends Error {
        constructor(e, n, r, s) {
          super(e), this.statusCode = n, this.serverTime = r, this.powDifficulty = s, this.name = "ApiError";
        }
      }
      function ut() {
        return Ln !== null;
      }
      function Di(t) {
        _i = t;
      }
      function Mn() {
        return _i;
      }
      function nd(t) {
        Ai = t;
      }
      function Hr() {
        return Ai;
      }
      function rd() {
        Ln = null, _i = null, Ai = null, jn.set(null), ys.set(null), W0.set(null), S0.set(null), os.set(null), Lm();
      }
      async function Hm() {
        try {
          const t = await qm();
          jn.set(t.verified);
        } catch {
        }
      }
      async function qm() {
        const t = await at(`${Ne}/v1/web/user/email`);
        if (!t.ok) throw new Error(await qe(t));
        return t.json();
      }
      async function zm(t) {
        const e = await at(`${Ne}/v1/web/user/request-email-change`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            new_email: t
          })
        });
        if (!e.ok) throw new Error(await qe(e));
      }
      async function Um() {
        const t = await at(`${Ne}/v1/web/user/resend-verification`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await qe(t));
      }
      async function jm(t) {
        const e = await gn(`${Ne}/v1/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t
          })
        });
        if (!e.ok) throw new Error(await qe(e));
        jn.set(true);
      }
      async function vi(t) {
        const e = await gn(`${Ne}/v1/prelogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: t
          })
        });
        if (!e.ok) throw new Error(await qe(e));
        return e.json();
      }
      async function Gm(t, e, n) {
        const r = await gn(`${Ne}/v1/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: t,
            email: e,
            public_key: n
          })
        });
        if (!r.ok) throw new Error(await qe(r));
        const s = await r.json();
        return Ln = s.session_token ?? null, jn.set(false), s;
      }
      async function nx(t, e, n = null, r = false) {
        const s = {
          username: t,
          auth_signature: e
        };
        n && (s.otp = n), r && (s.remember_device = true);
        const o = Mm(t);
        o && (s.device_token = o);
        const i = await gn(`${Ne}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(s)
        });
        if (!i.ok) throw new Error(await qe(i));
        const a = await i.json();
        return a.requires_otp || (Ln = a.session_token ?? null, a.device_token && Om(t, a.device_token), a.bootstrap ? (jn.set(a.bootstrap.email_verified), ys.set(a.bootstrap.email), W0.set(a.bootstrap.totp_enabled), S0.set(a.bootstrap.trusted_devices ?? null), os.set(a.bootstrap.backup_code_count ?? null)) : Hm()), a;
      }
      async function Wm() {
        const t = await at(`${Ne}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await qe(t));
        return t.json();
      }
      async function Vm(t, e) {
        const n = await at(`${Ne}/v1/web/totp/confirm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            secret: t,
            otp: e
          })
        });
        if (!n.ok) throw new Error(await qe(n));
        return n.json();
      }
      async function Ym() {
        const t = await at(`${Ne}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await qe(t));
      }
      async function Km() {
        const t = await at(`${Ne}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await qe(t));
        return t.json();
      }
      async function Jm(t) {
        const e = await at(`${Ne}/v1/web/trusted-devices/${t}`, {
          method: "DELETE"
        });
        if (!e.ok) throw new Error(await qe(e));
      }
      async function Xm() {
        const t = await at(`${Ne}/v1/web/trusted-devices`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await qe(t));
      }
      async function bi() {
        if (!Ln) return;
        const t = Ln;
        rd(), gn(`${Ne}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${t}`
          }
        }).catch(() => {
        });
      }
      async function Qm() {
        const t = await at(`${Ne}/v1/web/user/blob`);
        if (!t.ok) throw new Error(await qe(t));
        return t.json();
      }
      async function Zm(t, e) {
        const n = await at(`${Ne}/v1/web/user/blob`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            blob: t,
            expected_version: e
          })
        });
        if (!n.ok) throw new Error(await qe(n));
        return n.json();
      }
      async function is(t, e) {
        const n = await at(`${Ne}/v1/web/user/encounters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t,
            date: e
          })
        });
        if (!n.ok) throw new Error(await qe(n));
        return n.json();
      }
      async function $m(t, e, n, r) {
        const s = await at(`${Ne}/v1/web/user/change-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            auth_signature: t,
            new_public_key: e,
            new_blob: n,
            expected_blob_version: r
          })
        });
        if (!s.ok) throw new Error(await qe(s));
      }
      async function e7() {
        const t = await at(`${Ne}/v1/web/user`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await qe(t));
        rd();
      }
      async function t7(t) {
        const e = await gn(`${Ne}/v1/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            tokens: t
          })
        });
        if (!e.ok) throw new Error(await qe(e));
        return e.json();
      }
      async function n7(t) {
        const e = await at(`${Ne}/v1/web/user/encounters/by-token/${t}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await qe(e));
      }
      async function r7(t) {
        const e = await gn(`${Ne}/v1/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(t)
        }), n = e.headers.get("x-server-time"), r = e.headers.get("x-pow-difficulty"), s = r ? parseInt(r, 10) : null;
        if (e.status === 202) return {
          serverTime: n,
          powDifficulty: s
        };
        const o = await qe(e);
        throw new td(o, e.status, n, s);
      }
      function sd() {
        fetch(Ne, {
          method: "HEAD"
        }).catch(() => {
        });
      }
      function at(t, e = {}) {
        return gn(t, {
          ...e,
          headers: {
            Authorization: `Bearer ${Ln}`,
            ...e.headers ?? {}
          }
        });
      }
      async function qe(t) {
        try {
          return (await t.json()).error ?? `HTTP ${t.status}`;
        } catch {
          return `HTTP ${t.status}`;
        }
      }
      const rx = 15 * 60 * 1e3, s7 = 2 * 60 * 1e3, od = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let Mo = null, Oo = null, ki = null, yi = null, ws = false, dr = false;
      function wi() {
        clearTimeout(Mo ?? void 0), clearTimeout(Oo ?? void 0), Oo = setTimeout(() => {
          dr = true, ki?.();
        }, rx - s7), Mo = setTimeout(() => yi?.(), rx);
      }
      function id() {
        ws && !dr && wi();
      }
      function o7({ onWarnCallback: t, onExpiredCallback: e }) {
        Ho(), ki = t, yi = e, ws = true, dr = false;
        for (const n of od) document.addEventListener(n, id, {
          passive: true
        });
        wi();
      }
      function Ho() {
        clearTimeout(Mo ?? void 0), clearTimeout(Oo ?? void 0);
        for (const t of od) document.removeEventListener(t, id);
        ws = false, dr = false, ki = null, yi = null;
      }
      function i7() {
        dr = false, ws && wi();
      }
      function a7(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A, D, b, v, _, g, F, k, w, P, N, I, L, R, O, W, H, q, X, j, U, z, K;
        return {
          c() {
            e = h("main"), n = h("section"), n.innerHTML = `<div class="blob blob-1 svelte-1vrywgg" aria-hidden="true"></div> <div class="blob blob-2 svelte-1vrywgg" aria-hidden="true"></div> <div class="blob blob-3 svelte-1vrywgg" aria-hidden="true"></div> <div class="hero-content svelte-1vrywgg"><div class="hero-brand svelte-1vrywgg"><img src="/android-chrome-192x192.png" alt="" class="hero-icon svelte-1vrywgg"/> <span><span class="brand-peach svelte-1vrywgg">Peach</span><span class="brand-safe svelte-1vrywgg">Safe</span></span></div> <p class="hero-tagline svelte-1vrywgg">Know if you need to get tested \u2014 without anyone knowing who you slept with.</p> <p class="hero-sub svelte-1vrywgg">PeachSafe lets you notify past partners when you test positive for an STI,
        and get notified if a partner tests positive. No one ever learns who was
        with whom \u2014 not your partners, not us.</p> <div class="cta-buttons svelte-1vrywgg"><a href="#/signup" class="btn-primary svelte-1vrywgg">Sign up</a> <a href="#/login" class="btn-ghost svelte-1vrywgg">Log in</a></div></div> <div class="hero-scroll-hint svelte-1vrywgg" aria-hidden="true"><span class="material-icons svelte-1vrywgg">expand_more</span></div>`, r = y(), s = h("section"), o = h("div"), i = h("h2"), i.textContent = "How it works", a = y(), x = h("div"), l = h("div"), l.innerHTML = '<div class="step-number svelte-1vrywgg">1</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Exchange a code</h3> <p class="svelte-1vrywgg">Before a sexual encounter, both people scan each other&#39;s QR code. This generates a private, anonymous token that only the two of you share. Nothing identifying is stored or transmitted.</p></div>', u = y(), f = h("div"), f.innerHTML = '<div class="step-number svelte-1vrywgg">2</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Record a positive result</h3> <p class="svelte-1vrywgg">If you test positive, mark it in PeachSafe. Select what you tested positive for - notifications are specific, not vague.</p></div>', p = y(), E = h("div"), E.innerHTML = '<div class="step-number svelte-1vrywgg">3</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Partners are notified</h3> <p class="svelte-1vrywgg">PeachSafe notifies anyone who should know. If a past partner records a positive result, you&#39;ll receive an email. Neither of you learns the other&#39;s identity from the system.</p></div>', m = y(), C = h("div"), C.innerHTML = '<a href="#/how-it-works" class="svelte-1vrywgg">Want the technical deep dive? How it works in detail \u2192</a>', B = y(), A = h("section"), D = h("div"), b = h("h2"), b.textContent = "Why it's private", v = y(), _ = h("div"), g = h("div"), g.innerHTML = '<span class="material-icons svelte-1vrywgg">lock</span> <span>Your encounter data is encrypted. Only you can access it</span>', F = y(), k = h("div"), k.innerHTML = '<span class="material-icons svelte-1vrywgg">visibility_off</span> <span>The server is a blind message board; it can&#39;t connect notifications to real people</span>', w = y(), P = h("div"), P.innerHTML = '<span class="material-icons svelte-1vrywgg">shuffle</span> <span>Queries are padded with noise so even traffic analysis reveals nothing</span>', N = y(), I = h("div"), I.innerHTML = '<span class="material-icons svelte-1vrywgg">person_off</span> <span>No account is linked to your real name, phone number, or location</span>', L = y(), R = h("section"), O = h("div"), W = h("h2"), W.textContent = "Who it's for", H = y(), q = h("p"), q.textContent = `People who want to take sexual health seriously without the social and legal
        risks of conventional contact tracing \u2014 whether you're navigating dating apps,
        multiple partners, or just value your privacy.`, X = y(), j = h("footer"), U = h("div"), U.innerHTML = '<a href="#/signup" class="btn-primary svelte-1vrywgg">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-1vrywgg">Log in</a>', d(n, "class", "hero svelte-1vrywgg"), d(i, "class", "svelte-1vrywgg"), d(l, "class", "step svelte-1vrywgg"), d(f, "class", "step svelte-1vrywgg"), d(E, "class", "step svelte-1vrywgg"), d(x, "class", "steps svelte-1vrywgg"), d(C, "class", "deep-dive svelte-1vrywgg"), d(o, "class", "section-inner svelte-1vrywgg"), d(s, "class", "how-it-works svelte-1vrywgg"), d(b, "class", "svelte-1vrywgg"), d(g, "class", "privacy-card svelte-1vrywgg"), d(k, "class", "privacy-card svelte-1vrywgg"), d(P, "class", "privacy-card svelte-1vrywgg"), d(I, "class", "privacy-card svelte-1vrywgg"), d(_, "class", "privacy-grid svelte-1vrywgg"), d(D, "class", "section-inner svelte-1vrywgg"), d(A, "class", "privacy svelte-1vrywgg"), d(W, "class", "svelte-1vrywgg"), d(q, "class", "svelte-1vrywgg"), d(O, "class", "section-inner svelte-1vrywgg"), d(R, "class", "who svelte-1vrywgg"), d(U, "class", "footer-inner svelte-1vrywgg"), d(j, "class", "svelte-1vrywgg"), d(e, "data-theme", "light"), d(e, "class", "svelte-1vrywgg");
          },
          m(Y, se) {
            T(Y, e, se), c(e, n), c(e, r), c(e, s), c(s, o), c(o, i), c(o, a), c(o, x), c(x, l), c(x, u), c(x, f), c(x, p), c(x, E), c(o, m), c(o, C), c(e, B), c(e, A), c(A, D), c(D, b), c(D, v), c(D, _), c(_, g), c(_, F), c(_, k), c(_, w), c(_, P), c(_, N), c(_, I), c(e, L), c(e, R), c(R, O), c(O, W), c(O, H), c(O, q), c(e, X), c(e, j), c(j, U), z || (K = [
              Ge(t[0].call(null, i)),
              Ge(t[0].call(null, l, 0)),
              Ge(t[0].call(null, f, 80)),
              Ge(t[0].call(null, E, 160)),
              Ge(t[0].call(null, C, 240)),
              Ge(t[0].call(null, b)),
              Ge(t[0].call(null, g, 0)),
              Ge(t[0].call(null, k, 70)),
              Ge(t[0].call(null, P, 140)),
              Ge(t[0].call(null, I, 210)),
              Ge(t[0].call(null, W)),
              Ge(t[0].call(null, q, 60)),
              Ge(t[0].call(null, U))
            ], z = true);
          },
          p: Z,
          i: Z,
          o: Z,
          d(Y) {
            Y && S(e), z = false, ue(K);
          }
        };
      }
      function x7(t) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function n(r, s = 0) {
          if (e()) return {};
          r.style.opacity = "0", r.style.transform = "translateY(20px)", r.style.transition = `opacity 0.55s ease ${s}ms, transform 0.55s ease ${s}ms`;
          const o = new IntersectionObserver(([i]) => {
            i.isIntersecting && (r.style.opacity = "1", r.style.transform = "translateY(0)", o.disconnect());
          }, {
            threshold: 0.1
          });
          return o.observe(r), {
            destroy() {
              o.disconnect();
            }
          };
        }
        return [
          n
        ];
      }
      class l7 extends Se {
        constructor(e) {
          super(), we(this, e, x7, a7, ke, {});
        }
      }
      function c7(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A, D, b, v, _, g, F, k, w, P, N, I, L, R, O, W, H, q, X, j, U, z, K, Y, se, ce, re, he, Be, Te, $, ie, fe, De, ye, ze, $e, Ue, Le, Re, Ve, qt, nn, _t, rn, zt, An, bt, dt, kt, yt, Pe, Fn, ft, Et, It, ae, je, Me, sn, Nt;
        return {
          c() {
            e = h("main"), n = h("nav"), n.innerHTML = `<a href="#/" class="nav-brand svelte-t8hosy"><img src="/android-chrome-192x192.png" alt="" class="nav-icon svelte-t8hosy"/> <span><span class="brand-peach svelte-t8hosy">Peach</span><span class="brand-safe svelte-t8hosy">Safe</span></span></a> <a href="#/" class="nav-back svelte-t8hosy"><span class="material-icons svelte-t8hosy">arrow_back</span>
      Back</a>`, r = y(), s = h("section"), s.innerHTML = '<div class="blob blob-1 svelte-t8hosy" aria-hidden="true"></div> <div class="blob blob-2 svelte-t8hosy" aria-hidden="true"></div> <div class="hero-content svelte-t8hosy"><h1 class="svelte-t8hosy">How PeachSafe Works</h1> <p class="svelte-t8hosy">PeachSafe is built so that even we can&#39;t know who you slept with, who notified you, or what you tested positive for. Here&#39;s exactly how.</p></div>', o = y(), i = h("nav"), a = h("div"), x = h("button"), x.textContent = "Authentication", l = y(), u = h("span"), u.textContent = "\xB7", f = y(), p = h("button"), p.textContent = "1:1 Encounters", E = y(), m = h("span"), m.textContent = "\xB7", C = y(), B = h("button"), B.textContent = "Ongoing Relationships", A = y(), D = h("span"), D.textContent = "\xB7", b = y(), v = h("button"), v.textContent = "Group Encounters", _ = y(), g = h("span"), g.textContent = "\xB7", F = y(), k = h("button"), k.textContent = "Encryption", w = y(), P = h("span"), P.textContent = "\xB7", N = y(), I = h("button"), I.textContent = "Noise Padding", L = y(), R = h("div"), O = h("section"), O.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">key</span></div> <h2 class="svelte-t8hosy">How does authentication work?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">At signup, your device derives a cryptographic key pair from your password and stores only the public key on the server. The password itself is never sent.</p> <p class="svelte-t8hosy">When you log in, the server issues a fresh random challenge. Your device hashes your password with an auth salt to derive a private key, signs the challenge with it, and sends the signature \u2014 not the password \u2014 to the server. The server verifies the signature using the stored public key.</p> <p class="svelte-t8hosy">A separate hash of your password against an encryption salt produces the key used to decrypt your data blob, which the server holds but cannot read.</p> <p class="svelte-t8hosy">Both salts are generated deterministically on the server by hashing your username with a server-side secret, so they can be retrieved at login time without storing any per-user secret in plaintext.</p> <div class="callout svelte-t8hosy"><span class="material-icons svelte-t8hosy">check_circle</span> <span>Your password never leaves your device. Each login uses a fresh challenge, preventing replay attacks.</span></div></div>', W = y(), H = h("section"), q = h("div"), q.innerHTML = '<div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">qr_code_scanner</span></div> <h2 class="svelte-t8hosy">How do 1:1 encounters work?</h2>', X = y(), j = h("div"), U = h("p"), z = M("Before a sexual encounter, both people scan each other's QR codes. This performs a Diffie-Hellman key exchange, producing a shared raw token that only the two of you can compute. Each QR code also contains a "), K = h("em"), K.textContent = "contact ID", Y = M(" \u2014 a stable identifier used to detect repeat encounters (see "), se = h("button"), se.textContent = "Ongoing Relationships", ce = M(" below)."), re = y(), he = h("h3"), he.textContent = "Sending a result", Be = y(), Te = h("p"), Te.textContent = "When you test positive, PeachSafe sends an encrypted result to the server along with a token for each relevant encounter. Partners independently query the server with their own tokens to check for matches.", $ = y(), ie = h("h3"), ie.textContent = "Directional tokens", fe = y(), De = h("p"), De.textContent = "Tokens are directional: the token Alice uses to notify Bob is different from the one Bob uses to notify Alice. If both queried for the same token, the server could infer they'd been together. With different tokens, the server sees no link between them.", ye = y(), ze = h("h3"), ze.textContent = "Single-use tokens", $e = y(), Ue = h("p"), Ue.textContent = "Each positive result uses a fresh token, derived as:", Le = y(), Re = h("div"), Re.innerHTML = '<code class="svelte-t8hosy">token = hash(raw_token,  recipient&#39;s contact_id,  result_number)</code>', Ve = y(), qt = h("p"), qt.textContent = "The result number increments with each positive result sent, so tokens are never reused. This makes it harder for a bad actor to track or correlate results over time.", nn = y(), _t = h("h3"), _t.textContent = "Encrypted results", rn = y(), zt = h("p"), zt.textContent = "Results are encrypted with a key derived from the sender's contact ID. Only someone who has exchanged QR codes with you holds that ID \u2014 the server never does. Even if the server's database were compromised, the results themselves would be unreadable.", An = y(), bt = h("div"), bt.innerHTML = '<span class="material-icons svelte-t8hosy">check_circle</span> <span>Contact IDs are never sent to the server. The server stores ciphertext it cannot decrypt.</span>', dt = y(), kt = h("section"), kt.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">favorite</span></div> <h2 class="svelte-t8hosy">How do ongoing relationships work?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">Positive test results only notify encounters from the past 12 months. For regular partners \u2014 a FWB, for example \u2014 recreating an encounter each time would be cumbersome. PeachSafe detects repeat encounters using the stable contact ID in each QR code and asks if you&#39;d like to mark the person as an ongoing relationship.</p> <p class="svelte-t8hosy">Ongoing relationships remain active until either partner marks them as ended. Instead of the standard 12-month window, notifications continue until 12 months after the relationship was marked ended.</p> <div class="callout svelte-t8hosy"><span class="material-icons svelte-t8hosy">check_circle</span> <span>Contact IDs are never stored unencrypted, so repeat encounters cannot be linked by anyone with access to the server.</span></div></div>', yt = y(), Pe = h("section"), Pe.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">group</span></div> <h2 class="svelte-t8hosy">How do group encounters work?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">Mutual QR scanning doesn&#39;t scale to groups. Instead, one person hosts the encounter and everyone else scans their single QR code to join. New participants can be added for up to 24 hours after the group is created.</p> <p class="svelte-t8hosy">Unlike 1:1 encounters \u2014 where the raw token comes from a Diffie-Hellman exchange \u2014 the group token is randomly generated by the host and distributed to all participants via the QR code. Everyone in the group queries the server for the same token when checking for results.</p> <div class="callout callout-warn svelte-t8hosy"><span class="material-icons svelte-t8hosy">info</span> <span>This is slightly less private than 1:1 encounters: a compromised server that sees multiple users querying the same token could infer they were in the same encounter.</span></div> <p class="svelte-t8hosy">Single-use tokens still apply \u2014 each positive result uses a new token derived from an incrementing result number, so repeated results can&#39;t be correlated over time.</p></div>', Fn = y(), ft = h("section"), ft.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">encrypted</span></div> <h2 class="svelte-t8hosy">How is my data encrypted?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">The web client encrypts all of your data \u2014 encounters, results, contact IDs \u2014 into a single blob using the key derived from your password. The server stores the blob but has no access to the decryption key and cannot read its contents.</p> <p class="svelte-t8hosy">The only things stored unencrypted on the server are <em class="svelte-t8hosy">notification tokens</em> and your user record (email address). Notification tokens are the receive-side tokens for each of your encounters \u2014 the tokens a partner would use to send a result to you. They&#39;re pre-uploaded so the server can match incoming positive results against them and send you an alert email, without being able to read the result itself.</p> <div class="callout svelte-t8hosy"><span class="material-icons svelte-t8hosy">check_circle</span> <span>We recommend using an email alias \u2014 such as <a href="https://addy.io" target="_blank" rel="noopener" class="svelte-t8hosy">addy.io</a> \u2014 if you&#39;d prefer we don&#39;t store your real address.</span></div></div>', Et = y(), It = h("section"), It.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">shuffle</span></div> <h2 class="svelte-t8hosy">What is noise padding?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">If PeachSafe queried for exactly as many tokens as you have encounters, a network observer could count your encounters from traffic alone. Instead, the app picks a random, higher number and queries for that many tokens \u2014 your real ones mixed with randomly generated decoys.</p> <p class="svelte-t8hosy">For example, even if you&#39;ve had a single encounter, your device might query the server for 87 tokens. The server cannot tell which tokens are real and which are noise, and neither can anyone watching the traffic. Your actual number of encounters stays private.</p></div>', ae = y(), je = h("footer"), Me = h("div"), Me.innerHTML = '<p class="footer-cta-label svelte-t8hosy">Ready to try it?</p> <div class="footer-ctas svelte-t8hosy"><a href="#/signup" class="btn-primary svelte-t8hosy">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-t8hosy">Log in</a></div>', d(n, "class", "topnav svelte-t8hosy"), d(s, "class", "hero svelte-t8hosy"), d(x, "class", "svelte-t8hosy"), d(u, "class", "toc-sep svelte-t8hosy"), d(u, "aria-hidden", "true"), d(p, "class", "svelte-t8hosy"), d(m, "class", "toc-sep svelte-t8hosy"), d(m, "aria-hidden", "true"), d(B, "class", "svelte-t8hosy"), d(D, "class", "toc-sep svelte-t8hosy"), d(D, "aria-hidden", "true"), d(v, "class", "svelte-t8hosy"), d(g, "class", "toc-sep svelte-t8hosy"), d(g, "aria-hidden", "true"), d(k, "class", "svelte-t8hosy"), d(P, "class", "toc-sep svelte-t8hosy"), d(P, "aria-hidden", "true"), d(I, "class", "svelte-t8hosy"), d(a, "class", "toc-inner svelte-t8hosy"), d(i, "class", "toc svelte-t8hosy"), d(i, "aria-label", "On this page"), d(O, "class", "card svelte-t8hosy"), d(O, "id", "login"), d(q, "class", "section-header svelte-t8hosy"), d(K, "class", "svelte-t8hosy"), d(se, "class", "inline-link svelte-t8hosy"), d(U, "class", "svelte-t8hosy"), d(he, "class", "svelte-t8hosy"), d(Te, "class", "svelte-t8hosy"), d(ie, "class", "svelte-t8hosy"), d(De, "class", "svelte-t8hosy"), d(ze, "class", "svelte-t8hosy"), d(Ue, "class", "svelte-t8hosy"), d(Re, "class", "formula svelte-t8hosy"), d(qt, "class", "svelte-t8hosy"), d(_t, "class", "svelte-t8hosy"), d(zt, "class", "svelte-t8hosy"), d(bt, "class", "callout svelte-t8hosy"), d(j, "class", "section-body svelte-t8hosy"), d(H, "class", "card svelte-t8hosy"), d(H, "id", "encounters"), d(kt, "class", "card svelte-t8hosy"), d(kt, "id", "relationships"), d(Pe, "class", "card svelte-t8hosy"), d(Pe, "id", "groups"), d(ft, "class", "card svelte-t8hosy"), d(ft, "id", "encryption"), d(It, "class", "card svelte-t8hosy"), d(It, "id", "noise"), d(R, "class", "content svelte-t8hosy"), d(Me, "class", "footer-inner"), d(je, "class", "svelte-t8hosy"), d(e, "data-theme", "light"), d(e, "class", "svelte-t8hosy");
          },
          m(et, Er) {
            T(et, e, Er), c(e, n), c(e, r), c(e, s), c(e, o), c(e, i), c(i, a), c(a, x), c(a, l), c(a, u), c(a, f), c(a, p), c(a, E), c(a, m), c(a, C), c(a, B), c(a, A), c(a, D), c(a, b), c(a, v), c(a, _), c(a, g), c(a, F), c(a, k), c(a, w), c(a, P), c(a, N), c(a, I), c(e, L), c(e, R), c(R, O), c(R, W), c(R, H), c(H, q), c(H, X), c(H, j), c(j, U), c(U, z), c(U, K), c(U, Y), c(U, se), c(U, ce), c(j, re), c(j, he), c(j, Be), c(j, Te), c(j, $), c(j, ie), c(j, fe), c(j, De), c(j, ye), c(j, ze), c(j, $e), c(j, Ue), c(j, Le), c(j, Re), c(j, Ve), c(j, qt), c(j, nn), c(j, _t), c(j, rn), c(j, zt), c(j, An), c(j, bt), c(R, dt), c(R, kt), c(R, yt), c(R, Pe), c(R, Fn), c(R, ft), c(R, Et), c(R, It), c(e, ae), c(e, je), c(je, Me), sn || (Nt = [
              G(x, "click", t[1]),
              G(p, "click", t[2]),
              G(B, "click", t[3]),
              G(v, "click", t[4]),
              G(k, "click", t[5]),
              G(I, "click", t[6]),
              Ge(t[0].call(null, O)),
              G(se, "click", t[7]),
              Ge(t[0].call(null, H)),
              Ge(t[0].call(null, kt)),
              Ge(t[0].call(null, Pe)),
              Ge(t[0].call(null, ft)),
              Ge(t[0].call(null, It)),
              Ge(t[0].call(null, Me))
            ], sn = true);
          },
          p: Z,
          i: Z,
          o: Z,
          d(et) {
            et && S(e), sn = false, ue(Nt);
          }
        };
      }
      function vn(t) {
        document.getElementById(t)?.scrollIntoView({
          behavior: "smooth"
        });
      }
      function u7(t) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function n(u, f = 0) {
          if (e()) return {};
          u.style.opacity = "0", u.style.transform = "translateY(20px)", u.style.transition = `opacity 0.55s ease ${f}ms, transform 0.55s ease ${f}ms`;
          const p = new IntersectionObserver(([E]) => {
            E.isIntersecting && (u.style.opacity = "1", u.style.transform = "translateY(0)", p.disconnect());
          }, {
            threshold: 0.1
          });
          return p.observe(u), {
            destroy() {
              p.disconnect();
            }
          };
        }
        return [
          n,
          () => vn("login"),
          () => vn("encounters"),
          () => vn("relationships"),
          () => vn("groups"),
          () => vn("encryption"),
          () => vn("noise"),
          () => vn("relationships")
        ];
      }
      class d7 extends Se {
        constructor(e) {
          super(), we(this, e, u7, c7, ke, {});
        }
      }
      const ad = 18262, xd = 65535, f7 = 12 * 1024, ld = f7 * 0.75, Lt = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], T0 = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, cd = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function Jn(t) {
        const e = (/* @__PURE__ */ new Date(t + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - ad;
      }
      function Xn(t) {
        const e = (ad + t) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      function Si(t) {
        const e = t.encounters, n = t.results || [], r = t.receivedAlerts || [], s = t.relationships || [], o = t.groupEncounters || [], i = e.length, a = n.length, x = r.length, l = s.length, u = o.length, f = new TextEncoder(), p = (F) => F ? f.encode(F).slice(0, 255) : new Uint8Array(0), E = e.map((F) => p(F.note)), m = s.map((F) => p(F.name)), C = o.map((F) => p(F.name)), B = o.map((F) => p(F.note)), A = t.pin ? f.encode(t.pin).slice(0, 4) : new Uint8Array(0), D = e.reduce((F, k, w) => F + 70 + 1 + E[w].length, 0), b = s.reduce((F, k, w) => F + 73 + 1 + m[w].length, 0), v = o.reduce((F, k, w) => F + 73 + 1 + C[w].length + 1 + B[w].length, 0), _ = new Uint8Array(35 + D + 2 + a * 4 + 2 + x * 36 + 2 + b + 2 + v + 1 + A.length);
        let g = 0;
        _[g++] = 2, _.set(t.myContactId, g), g += 32, _[g++] = i >> 8 & 255, _[g++] = i & 255;
        for (let F = 0; F < i; F++) {
          const k = e[F];
          _.set(k.rawToken, g), g += 32, _.set(k.theirContactId, g), g += 32;
          const w = Jn(k.date);
          _[g++] = w >> 8 & 255, _[g++] = w & 255, _[g++] = k.queryIndex >> 8 & 255, _[g++] = k.queryIndex & 255, _[g++] = k.submitIndex >> 8 & 255, _[g++] = k.submitIndex & 255, _[g++] = E[F].length, _.set(E[F], g), g += E[F].length;
        }
        _[g++] = a >> 8 & 255, _[g++] = a & 255;
        for (const F of n) {
          const k = Jn(F.date);
          _[g++] = k >> 8 & 255, _[g++] = k & 255, _[g++] = F.hasNotified ? 1 : 0;
          let w = 0;
          for (let P = 0; P < Lt.length; P++) (F.positiveDiseases || []).includes(Lt[P]) && (w |= 1 << P);
          _[g++] = w;
        }
        _[g++] = x >> 8 & 255, _[g++] = x & 255;
        for (const F of r) {
          _.set(F.rawToken, g), g += 32;
          const k = Jn(F.testDate);
          _[g++] = k >> 8 & 255, _[g++] = k & 255;
          let w = 0;
          for (let N = 0; N < Lt.length; N++) (F.diseases || []).includes(Lt[N]) && (w |= 1 << N);
          _[g++] = w;
          let P = 0;
          F.viewed && (P |= 1), F.labVerified && (P |= 2), _[g++] = P;
        }
        _[g++] = l >> 8 & 255, _[g++] = l & 255;
        for (let F = 0; F < l; F++) {
          const k = s[F];
          _.set(k.rawToken, g), g += 32, _.set(k.theirContactId, g), g += 32;
          const w = Jn(k.createdAt);
          _[g++] = w >> 8 & 255, _[g++] = w & 255;
          const P = k.endedAt ? Jn(k.endedAt) : xd;
          _[g++] = P >> 8 & 255, _[g++] = P & 255;
          let N = 0;
          k.archived && (N |= 1), _[g++] = N, _[g++] = k.queryIndex >> 8 & 255, _[g++] = k.queryIndex & 255, _[g++] = k.submitIndex >> 8 & 255, _[g++] = k.submitIndex & 255, _[g++] = m[F].length, _.set(m[F], g), g += m[F].length;
        }
        _[g++] = u >> 8 & 255, _[g++] = u & 255;
        for (let F = 0; F < u; F++) {
          const k = o[F];
          _.set(k.token, g), g += 32;
          const w = Jn(k.date);
          _[g++] = w >> 8 & 255, _[g++] = w & 255;
          const P = k.createdAt >>> 0;
          _[g++] = P >>> 24 & 255, _[g++] = P >>> 16 & 255, _[g++] = P >>> 8 & 255, _[g++] = P & 255, _[g++] = k.isHost ? 1 : 0, _[g++] = k.tokenIndex >> 8 & 255, _[g++] = k.tokenIndex & 255, _.set(k.hostContactId, g), g += 32, _[g++] = C[F].length, _.set(C[F], g), g += C[F].length, _[g++] = B[F].length, _.set(B[F], g), g += B[F].length;
        }
        return _[g++] = A.length, A.length > 0 && _.set(A, g), _;
      }
      function E7(t) {
        let e = 0;
        const n = t[e++];
        if (n !== 1 && n !== 2) throw new Error(`Unknown blob version: ${n}`);
        const r = t.slice(e, e + 32);
        e += 32;
        const s = t[e] << 8 | t[e + 1];
        e += 2;
        const o = [];
        for (let B = 0; B < s; B++) {
          const A = t.slice(e, e + 32);
          e += 32;
          const D = t.slice(e, e + 32);
          e += 32;
          const b = t[e] << 8 | t[e + 1];
          e += 2;
          const v = t[e] << 8 | t[e + 1];
          e += 2;
          const _ = t[e] << 8 | t[e + 1];
          e += 2;
          const g = t[e++], F = g > 0 ? new TextDecoder().decode(t.slice(e, e + g)) : null;
          e += g, o.push({
            rawToken: A,
            theirContactId: D,
            date: Xn(b),
            queryIndex: v,
            submitIndex: _,
            note: F
          });
        }
        const i = [], a = t[e] << 8 | t[e + 1];
        e += 2;
        for (let B = 0; B < a; B++) {
          const A = t[e] << 8 | t[e + 1];
          e += 2;
          const D = t[e++], b = t[e++], v = !!(D & 1), _ = Lt.filter((g, F) => b & 1 << F);
          i.push({
            date: Xn(A),
            hasNotified: v,
            positiveDiseases: _
          });
        }
        const x = [], l = t[e] << 8 | t[e + 1];
        e += 2;
        for (let B = 0; B < l; B++) {
          const A = t.slice(e, e + 32);
          e += 32;
          const D = t[e] << 8 | t[e + 1];
          e += 2;
          const b = t[e++], v = t[e++], _ = Lt.filter((k, w) => b & 1 << w), g = !!(v & 1), F = !!(v & 2);
          x.push({
            rawToken: A,
            testDate: Xn(D),
            diseases: _,
            viewed: g,
            labVerified: F
          });
        }
        const u = [], f = t[e] << 8 | t[e + 1];
        e += 2;
        for (let B = 0; B < f; B++) {
          const A = t.slice(e, e + 32);
          e += 32;
          const D = t.slice(e, e + 32);
          e += 32;
          const b = t[e] << 8 | t[e + 1];
          e += 2;
          const v = t[e] << 8 | t[e + 1];
          e += 2;
          const _ = t[e++], g = t[e] << 8 | t[e + 1];
          e += 2;
          const F = t[e] << 8 | t[e + 1];
          e += 2;
          const k = t[e++], w = k > 0 ? new TextDecoder().decode(t.slice(e, e + k)) : null;
          e += k, u.push({
            rawToken: A,
            theirContactId: D,
            createdAt: Xn(b),
            endedAt: v === xd ? null : Xn(v),
            archived: !!(_ & 1),
            queryIndex: g,
            submitIndex: F,
            name: w
          });
        }
        const p = [], E = t[e] << 8 | t[e + 1];
        e += 2;
        const m = new TextDecoder();
        for (let B = 0; B < E; B++) {
          const A = t.slice(e, e + 32);
          e += 32;
          const D = t[e] << 8 | t[e + 1];
          e += 2;
          const b = (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
          e += 4;
          const v = t[e++], _ = t[e] << 8 | t[e + 1];
          e += 2;
          const g = t.slice(e, e + 32);
          e += 32;
          const F = t[e++], k = F > 0 ? m.decode(t.slice(e, e + F)) : null;
          e += F;
          const w = t[e++], P = w > 0 ? m.decode(t.slice(e, e + w)) : null;
          e += w, p.push({
            token: A,
            date: Xn(D),
            createdAt: b,
            isHost: !!(v & 1),
            tokenIndex: _,
            hostContactId: g,
            name: k,
            note: P
          });
        }
        let C = null;
        if (n === 2 && e < t.length) {
          const B = t[e++];
          B > 0 && (C = new TextDecoder().decode(t.slice(e, e + B)));
        }
        return {
          myContactId: r,
          encounters: o,
          results: i,
          receivedAlerts: x,
          relationships: u,
          groupEncounters: p,
          pin: C
        };
      }
      const ud = Ct(false), Ti = Ct(null), dd = Ct(false), p7 = 45;
      let J = null, x0 = 0, qo = false;
      const n0 = "peachsafe_pending_encounters";
      function Ss() {
        ud.set((J?.receivedAlerts || []).some((t) => !t.viewed));
      }
      function Ts() {
        Ti.set(J?.pin ?? null);
      }
      Rn.subscribe((t) => {
        t === "reconnected" && qo && J && Mn() && Je().catch(() => {
        });
      });
      async function Je() {
        const t = Si(J);
        dd.set(t.byteLength >= ld);
        const e = ur(Mn(), t);
        qo = false;
        try {
          const { blob_version: n } = await Zm(ne(e), x0);
          x0 = n;
          try {
            localStorage.removeItem(n0);
          } catch {
          }
        } catch (n) {
          throw qo = true, n;
        }
      }
      function m7(t, e, n) {
        try {
          let r = [];
          const s = localStorage.getItem(n0);
          if (s) try {
            r = JSON.parse(new TextDecoder().decode(bs(Mn(), nt(s))));
          } catch {
            r = [];
          }
          r.push({
            rawTokenHex: ne(t),
            theirContactIdHex: ne(e),
            date: n
          });
          const o = new TextEncoder().encode(JSON.stringify(r));
          localStorage.setItem(n0, ne(ur(Mn(), o)));
        } catch {
        }
      }
      async function h7() {
        let t;
        try {
          const e = localStorage.getItem(n0);
          if (!e) return;
          t = JSON.parse(new TextDecoder().decode(bs(Mn(), nt(e))));
        } catch {
          try {
            localStorage.removeItem(n0);
          } catch {
          }
          return;
        }
        if (!t.length) {
          try {
            localStorage.removeItem(n0);
          } catch {
          }
          return;
        }
        for (const e of t) J = {
          ...J,
          encounters: [
            ...J.encounters,
            {
              rawToken: nt(e.rawTokenHex),
              theirContactId: nt(e.theirContactIdHex),
              date: e.date,
              queryIndex: 0,
              submitIndex: 0,
              note: null
            }
          ]
        };
        await Je();
      }
      async function C7() {
        J = {
          myContactId: cr(32),
          encounters: [],
          results: [],
          receivedAlerts: [],
          relationships: [],
          groupEncounters: [],
          pin: null
        }, x0 = 0, await Je(), Ts();
      }
      async function B7(t, e) {
        J = t, x0 = e, await h7(), Ss(), Ts();
      }
      function wt() {
        return J;
      }
      function g7() {
        return x0;
      }
      function wn() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.myContactId;
      }
      function qr() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.results || [];
      }
      function to() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (J.receivedAlerts || []).map(({ testDate: t, diseases: e, viewed: n, labVerified: r }) => ({
          testDate: t,
          diseases: e,
          viewed: n,
          labVerified: r
        }));
      }
      function fd() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.encounters || [];
      }
      function Pi() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.relationships || [];
      }
      function Ed() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return J.groupEncounters || [];
      }
      function _7() {
        return J?.pin ?? null;
      }
      async function A7(t, e, n) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        J = {
          ...J,
          encounters: [
            ...J.encounters,
            {
              rawToken: t,
              theirContactId: e,
              date: n,
              queryIndex: 0,
              submitIndex: 0,
              note: null
            }
          ]
        };
        try {
          await Je();
        } catch (r) {
          throw m7(t, e, n), r;
        }
      }
      async function F7(t, e) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = (J.encounters || []).map((r) => ne(r.rawToken) === t ? {
          ...r,
          ...e
        } : r);
        J = {
          ...J,
          encounters: n
        }, await Je();
      }
      async function D7(t, e, n) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        J = {
          ...J,
          relationships: [
            ...J.relationships || [],
            {
              rawToken: t,
              theirContactId: e,
              createdAt: n,
              endedAt: null,
              name: null,
              archived: false,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        }, await Je();
      }
      async function pd(t, e, n, r, s) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const o = Math.floor(Date.now() / 1e3);
        J = {
          ...J,
          groupEncounters: [
            ...J.groupEncounters || [],
            {
              token: t,
              date: e,
              createdAt: o,
              isHost: n,
              tokenIndex: 0,
              hostContactId: r,
              name: s || null,
              note: null
            }
          ]
        }, await Je();
      }
      async function sx(t, e) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = (J.groupEncounters || []).map((r) => ne(r.token) === t ? {
          ...r,
          ...e
        } : r);
        J = {
          ...J,
          groupEncounters: n
        }, await Je();
      }
      async function v7(t) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (J.groupEncounters || []).filter((n) => ne(n.token) !== t);
        J = {
          ...J,
          groupEncounters: e
        }, await Je();
      }
      async function vr(t, e) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = (J.relationships || []).map((r) => ne(r.rawToken) === t ? {
          ...r,
          ...e
        } : r);
        J = {
          ...J,
          relationships: n
        }, await Je();
      }
      async function no(t, e, n = false) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const r = (J.results || []).length;
        return J = {
          ...J,
          results: [
            ...J.results || [],
            {
              date: t,
              positiveDiseases: e,
              hasNotified: n
            }
          ]
        }, await Je(), r;
      }
      async function ox(t) {
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
        }, await Je();
      }
      async function b7() {
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
          })),
          groupEncounters: (J.groupEncounters || []).map((t) => ({
            ...t,
            tokenIndex: t.tokenIndex + 1
          }))
        }, await Je();
      }
      async function k7(t, e, n, r) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let s = null;
        const o = (J.groupEncounters || []).map((a) => ne(a.token) !== t ? a : (s = a.token, {
          ...a,
          tokenIndex: a.tokenIndex + 1
        }));
        if (!s) throw new Error("Group token not found: " + t);
        const i = [
          ...J.receivedAlerts || [],
          {
            rawToken: s,
            testDate: e,
            diseases: n,
            viewed: false,
            labVerified: !!r
          }
        ];
        J = {
          ...J,
          groupEncounters: o,
          receivedAlerts: i
        }, await Je(), Ss();
      }
      async function y7(t, e, n, r) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let s = null;
        const o = J.encounters.map((x) => ne(x.rawToken) !== t ? x : (s = x.rawToken, {
          ...x,
          queryIndex: x.queryIndex + 1
        })), i = (J.relationships || []).map((x) => s || ne(x.rawToken) !== t ? x : (s = x.rawToken, {
          ...x,
          queryIndex: x.queryIndex + 1
        }));
        if (!s) throw new Error("Token not found: " + t);
        const a = [
          ...J.receivedAlerts || [],
          {
            rawToken: s,
            testDate: e,
            diseases: n,
            viewed: false,
            labVerified: !!r
          }
        ];
        J = {
          ...J,
          encounters: o,
          relationships: i,
          receivedAlerts: a
        }, await Je(), Ss();
      }
      async function w7(t) {
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
        }, await Je(), Ss();
      }
      async function S7(t) {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        J = {
          ...J,
          pin: t
        }, await Je(), Ts();
      }
      async function T7() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        J = {
          ...J,
          pin: null
        }, await Je(), Ts();
      }
      function Ii() {
        const t = /* @__PURE__ */ new Date();
        return t.setUTCFullYear(t.getUTCFullYear() - 1), t.toISOString().slice(0, 10);
      }
      function P7() {
        if (!J || Si(J).byteLength < ld) return false;
        const e = Ii();
        return J.encounters.filter((n) => n.date < e).length >= 5;
      }
      function I7() {
        if (!J) return 0;
        const t = Ii();
        return J.encounters.filter((e) => e.date < t).length;
      }
      async function N7() {
        if (!J) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = Ii();
        J = {
          ...J,
          encounters: J.encounters.filter((e) => e.date >= t)
        }, await Je();
      }
      function R7(t, e) {
        if (!t.endedAt || !e) return true;
        const r = (/* @__PURE__ */ new Date(t.endedAt + "T00:00:00Z")).getTime() + p7 * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < r;
      }
      function L7(t) {
        x0 = t;
      }
      async function md(t = null) {
        const { blob: e, blob_version: n } = t ?? await Qm();
        if (!e) {
          await C7();
          return;
        }
        const r = bs(Mn(), nt(e));
        await B7(E7(r), n);
      }
      function M7(t) {
        const e = wt();
        if (!e) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = ur(t, Si(e));
        return {
          blobHex: ne(n),
          blobVersion: g7()
        };
      }
      let A0 = null;
      function hd() {
        return A0 || (A0 = O7().finally(() => {
          A0 = null;
        }), A0);
      }
      async function O7() {
        const t = wt(), e = wn();
        if (!t) return 0;
        const r = qr().filter((f) => f.positiveDiseases.length === 0).map((f) => f.date).sort().pop() ?? null, s = /* @__PURE__ */ new Map(), o = [];
        for (const f of t.encounters) {
          const p = yn(f.rawToken, e, f.queryIndex), E = xn(p);
          s.set(E, {
            rawTokenHex: ne(f.rawToken),
            alertDate: f.date
          }), o.push(E);
        }
        for (const f of t.relationships || []) {
          if (!R7(f, r)) continue;
          const p = yn(f.rawToken, e, f.queryIndex), E = xn(p);
          s.set(E, {
            rawTokenHex: ne(f.rawToken),
            alertDate: f.createdAt
          }), o.push(E);
        }
        for (const f of t.groupEncounters || []) {
          const p = t0(f.token, f.tokenIndex), E = xn(p);
          s.set(E, {
            rawTokenHex: ne(f.token),
            alertDate: f.date,
            isGroup: true,
            alertKeySource: f.hostContactId
          }), o.push(E);
        }
        if (o.length === 0) return 0;
        const i = Math.max(50, o.length * 2), a = [
          ...o
        ];
        for (; a.length < i; ) a.push(xn(cr(32)));
        for (let f = a.length - 1; f > 0; f--) {
          const p = Math.floor(Math.random() * (f + 1));
          [a[f], a[p]] = [
            a[p],
            a[f]
          ];
        }
        const { matches: x } = await t7(a);
        if (!x || x.length === 0) return 0;
        const l = Object.fromEntries(Object.entries(cd).map(([f, p]) => [
          p,
          f
        ]));
        let u = 0;
        for (const f of x) {
          const p = s.get(f.token);
          if (!p) continue;
          const E = wt();
          let m, C;
          if (p.isGroup) {
            const F = (E.groupEncounters || []).find((k) => ne(k.token) === p.rawTokenHex);
            if (!F) continue;
            m = Lo(p.alertKeySource), C = ne(t0(F.token, F.tokenIndex));
          } else {
            const k = [
              ...E.encounters || [],
              ...E.relationships || []
            ].find((w) => ne(w.rawToken) === p.rawTokenHex);
            if (!k) continue;
            m = Lo(k.theirContactId), C = ne(yn(k.rawToken, e, k.queryIndex));
          }
          let B;
          try {
            B = bs(m, $u(f.encrypted_payload));
          } catch {
            continue;
          }
          const A = new TextDecoder().decode(B), D = A.slice(1, 9), b = `${D.slice(0, 4)}-${D.slice(4, 6)}-${D.slice(6, 8)}`, _ = (A.length > 9 ? A.slice(9).split(",") : []).map((F) => l[F]).filter((F) => F !== void 0);
          let g;
          if (p.isGroup) {
            await k7(p.rawTokenHex, b, _, f.verified), u++;
            const F = (wt().groupEncounters || []).find((k) => ne(k.token) === p.rawTokenHex);
            g = ne(t0(F.token, F?.tokenIndex ?? 1));
          } else {
            const F = [
              ...E.encounters || [],
              ...E.relationships || []
            ].find((w) => ne(w.rawToken) === p.rawTokenHex);
            await y7(p.rawTokenHex, b, _, f.verified), u++;
            const k = [
              ...wt().encounters || [],
              ...wt().relationships || []
            ].find((w) => ne(w.rawToken) === p.rawTokenHex);
            g = ne(yn(F.rawToken, e, k?.queryIndex ?? F.queryIndex + 1));
          }
          try {
            await is(g, p.alertDate);
          } catch (F) {
            console.warn("alerts: could not register next query token:", F.message);
          }
          try {
            await n7(C);
          } catch (F) {
            console.warn("alerts: could not delete old query token:", F.message);
          }
        }
        return u;
      }
      let zo = "/home";
      function H7(t) {
        zo = t;
      }
      function ix() {
        const t = zo;
        return zo = "/home", t;
      }
      function q7(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C = t[3] ? "Verifying\u2026" : "Verify", B, A, D, b, v = t[6] ? "Use authenticator app instead" : "Use a backup code instead", _, g, F;
        function k(I, L) {
          return I[6] ? j7 : U7;
        }
        let w = k(t), P = w(t), N = t[4] && ax(t);
        return {
          c() {
            e = h("div"), n = h("button"), r = h("span"), r.textContent = "arrow_back", s = y(), o = h("span"), o.textContent = "Two-factor auth", i = y(), a = h("form"), P.c(), x = y(), l = h("label"), u = h("input"), f = M(`
          Remember this device`), p = y(), N && N.c(), E = y(), m = h("button"), B = M(C), D = y(), b = h("button"), _ = M(v), d(r, "class", "material-icons svelte-1r4ift8"), d(n, "type", "button"), d(n, "class", "back-btn svelte-1r4ift8"), n.disabled = t[3], d(o, "class", "otp-title svelte-1r4ift8"), d(e, "class", "otp-header svelte-1r4ift8"), d(u, "type", "checkbox"), u.disabled = t[3], d(u, "class", "svelte-1r4ift8"), d(l, "class", "remember-label svelte-1r4ift8"), d(m, "type", "submit"), m.disabled = A = t[3] || !t[6] && t[2].length !== 6 || t[6] && t[2].length !== 14, d(m, "class", "svelte-1r4ift8"), d(b, "type", "button"), d(b, "class", "backup-toggle svelte-1r4ift8"), b.disabled = t[3], d(a, "class", "svelte-1r4ift8");
          },
          m(I, L) {
            T(I, e, L), c(e, n), c(n, r), c(e, s), c(e, o), T(I, i, L), T(I, a, L), P.m(a, null), c(a, x), c(a, l), c(l, u), u.checked = t[7], c(l, f), c(a, p), N && N.m(a, null), c(a, E), c(a, m), c(m, B), c(a, D), c(a, b), c(b, _), g || (F = [
              G(n, "click", t[16]),
              G(u, "change", t[24]),
              G(b, "click", t[17]),
              G(a, "submit", tn(t[13]))
            ], g = true);
          },
          p(I, L) {
            L & 8 && (n.disabled = I[3]), w === (w = k(I)) && P ? P.p(I, L) : (P.d(1), P = w(I), P && (P.c(), P.m(a, x))), L & 8 && (u.disabled = I[3]), L & 128 && (u.checked = I[7]), I[4] ? N ? N.p(I, L) : (N = ax(I), N.c(), N.m(a, E)) : N && (N.d(1), N = null), L & 8 && C !== (C = I[3] ? "Verifying\u2026" : "Verify") && V(B, C), L & 76 && A !== (A = I[3] || !I[6] && I[2].length !== 6 || I[6] && I[2].length !== 14) && (m.disabled = A), L & 64 && v !== (v = I[6] ? "Use authenticator app instead" : "Use a backup code instead") && V(_, v), L & 8 && (b.disabled = I[3]);
          },
          d(I) {
            I && (S(e), S(i), S(a)), P.d(), N && N.d(), g = false, ue(F);
          }
        };
      }
      function z7(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m = t[3] ? "Logging in\u2026" : "Log in", C, B, A, D = t[4] && xx(t);
        return {
          c() {
            e = h("div"), e.innerHTML = '<a href="#/login" class="tab active svelte-1r4ift8">Log in</a> <a href="#/signup" class="tab svelte-1r4ift8">Create account</a>', n = y(), r = h("form"), s = h("label"), o = M(`Username
          `), i = h("input"), a = y(), x = h("label"), l = M(`Password
          `), u = h("input"), f = y(), D && D.c(), p = y(), E = h("button"), C = M(m), d(e, "class", "tabs svelte-1r4ift8"), d(i, "type", "text"), i.required = true, d(i, "autocomplete", "username"), d(i, "class", "svelte-1r4ift8"), d(s, "class", "svelte-1r4ift8"), d(u, "type", "password"), u.required = true, d(u, "autocomplete", "current-password"), d(u, "class", "svelte-1r4ift8"), d(x, "class", "svelte-1r4ift8"), d(E, "type", "submit"), E.disabled = t[3], d(E, "class", "svelte-1r4ift8"), d(r, "class", "svelte-1r4ift8");
          },
          m(b, v) {
            T(b, e, v), T(b, n, v), T(b, r, v), c(r, s), c(s, o), c(s, i), xe(i, t[0]), c(r, a), c(r, x), c(x, l), c(x, u), xe(u, t[1]), c(r, f), D && D.m(r, null), c(r, p), c(r, E), c(E, C), B || (A = [
              G(i, "input", t[20]),
              G(u, "input", t[21]),
              G(r, "submit", tn(t[12]))
            ], B = true);
          },
          p(b, v) {
            v & 1 && i.value !== b[0] && xe(i, b[0]), v & 2 && u.value !== b[1] && xe(u, b[1]), b[4] ? D ? D.p(b, v) : (D = xx(b), D.c(), D.m(r, p)) : D && (D.d(1), D = null), v & 8 && m !== (m = b[3] ? "Logging in\u2026" : "Log in") && V(C, m), v & 8 && (E.disabled = b[3]);
          },
          d(b) {
            b && (S(e), S(n), S(r)), D && D.d(), B = false, ue(A);
          }
        };
      }
      function U7(t) {
        let e, n, r, s, o, i, a;
        return {
          c() {
            e = h("p"), e.textContent = "Enter the 6-digit code from your authenticator app.", n = y(), r = h("label"), s = M(`Authenticator code
            `), o = h("input"), d(e, "class", "otp-prompt svelte-1r4ift8"), d(o, "type", "text"), d(o, "inputmode", "numeric"), d(o, "pattern", "[0-9]*"), d(o, "maxlength", "6"), o.required = true, d(o, "autocomplete", "one-time-code"), d(o, "class", "svelte-1r4ift8"), d(r, "class", "svelte-1r4ift8");
          },
          m(x, l) {
            T(x, e, l), T(x, n, l), T(x, r, l), c(r, s), c(r, o), xe(o, t[2]), i || (a = G(o, "input", t[23]), i = true);
          },
          p(x, l) {
            l & 4 && o.value !== x[2] && xe(o, x[2]);
          },
          d(x) {
            x && (S(e), S(n), S(r)), i = false, a();
          }
        };
      }
      function j7(t) {
        let e, n, r, s, o, i, a;
        return {
          c() {
            e = h("p"), e.textContent = "Enter one of your backup codes (xxxx-xxxx-xxxx).", n = y(), r = h("label"), s = M(`Backup code
            `), o = h("input"), d(e, "class", "otp-prompt svelte-1r4ift8"), d(o, "type", "text"), d(o, "inputmode", "text"), d(o, "maxlength", "14"), o.required = true, d(o, "autocomplete", "off"), d(o, "placeholder", "xxxx-xxxx-xxxx"), d(o, "class", "svelte-1r4ift8"), d(r, "class", "svelte-1r4ift8");
          },
          m(x, l) {
            T(x, e, l), T(x, n, l), T(x, r, l), c(r, s), c(r, o), xe(o, t[2]), i || (a = G(o, "input", t[22]), i = true);
          },
          p(x, l) {
            l & 4 && o.value !== x[2] && xe(o, x[2]);
          },
          d(x) {
            x && (S(e), S(n), S(r)), i = false, a();
          }
        };
      }
      function ax(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[4]), d(e, "class", "error svelte-1r4ift8");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s & 16 && V(n, r[4]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function xx(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[4]), d(e, "class", "error svelte-1r4ift8");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s & 16 && V(n, r[4]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function lx(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Your password never leaves your device in plaintext.", d(e, "class", "privacy-note svelte-1r4ift8");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function cx(t) {
        let e, n, r, s, o, i, a, x, l, u = t[9] === 1 ? "" : "s", f, p, E, m, C, B, A = t[10] ? "Deleting\u2026" : "Delete old encounters", D, b, v, _, g, F, k = t[11] && ux(t);
        return {
          c() {
            e = h("div"), n = h("div"), r = h("h2"), r.textContent = "Free up storage space", s = y(), o = h("p"), i = M(`Your account is using 75% or more of its storage limit.
        You have `), a = h("strong"), x = M(t[9]), l = M(" encounter"), f = M(u), p = M(` older
        than one year. Deleting them will free up space.`), E = y(), k && k.c(), m = y(), C = h("div"), B = h("button"), D = M(A), b = y(), v = h("button"), _ = M("Keep them"), d(r, "id", "cleanup-title"), d(r, "class", "svelte-1r4ift8"), d(o, "class", "svelte-1r4ift8"), d(B, "class", "btn-primary svelte-1r4ift8"), B.disabled = t[10], d(v, "class", "btn-ghost svelte-1r4ift8"), v.disabled = t[10], d(C, "class", "cleanup-actions svelte-1r4ift8"), d(n, "class", "cleanup-dialog svelte-1r4ift8"), d(e, "class", "cleanup-overlay svelte-1r4ift8"), d(e, "role", "dialog"), d(e, "aria-modal", "true"), d(e, "aria-labelledby", "cleanup-title");
          },
          m(w, P) {
            T(w, e, P), c(e, n), c(n, r), c(n, s), c(n, o), c(o, i), c(o, a), c(a, x), c(a, l), c(a, f), c(o, p), c(n, E), k && k.m(n, null), c(n, m), c(n, C), c(C, B), c(B, D), c(C, b), c(C, v), c(v, _), g || (F = [
              G(B, "click", t[14]),
              G(v, "click", t[15])
            ], g = true);
          },
          p(w, P) {
            P & 512 && V(x, w[9]), P & 512 && u !== (u = w[9] === 1 ? "" : "s") && V(f, u), w[11] ? k ? k.p(w, P) : (k = ux(w), k.c(), k.m(n, m)) : k && (k.d(1), k = null), P & 1024 && A !== (A = w[10] ? "Deleting\u2026" : "Delete old encounters") && V(D, A), P & 1024 && (B.disabled = w[10]), P & 1024 && (v.disabled = w[10]);
          },
          d(w) {
            w && S(e), k && k.d(), g = false, ue(F);
          }
        };
      }
      function ux(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[11]), d(e, "class", "cleanup-error svelte-1r4ift8");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s & 2048 && V(n, r[11]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function G7(t) {
        let e, n, r, s, o, i, a, x, l;
        function u(C, B) {
          return C[5] ? q7 : z7;
        }
        let f = u(t), p = f(t), E = !t[5] && lx(), m = t[8] && cx(t);
        return {
          c() {
            e = h("main"), n = h("div"), n.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1r4ift8"/> <h1 class="svelte-1r4ift8"><span class="brand-peach svelte-1r4ift8">Peach</span><span class="brand-safe svelte-1r4ift8">Safe</span></h1>', r = y(), s = h("div"), p.c(), o = y(), E && E.c(), i = y(), m && m.c(), a = Pt(), d(n, "class", "brand svelte-1r4ift8"), d(n, "role", "button"), d(n, "tabindex", "0"), d(s, "class", "card svelte-1r4ift8"), d(e, "class", "svelte-1r4ift8");
          },
          m(C, B) {
            T(C, e, B), c(e, n), c(e, r), c(e, s), p.m(s, null), c(e, o), E && E.m(e, null), T(C, i, B), m && m.m(C, B), T(C, a, B), x || (l = [
              G(n, "click", t[18]),
              G(n, "keypress", t[19])
            ], x = true);
          },
          p(C, [B]) {
            f === (f = u(C)) && p ? p.p(C, B) : (p.d(1), p = f(C), p && (p.c(), p.m(s, null))), C[5] ? E && (E.d(1), E = null) : E || (E = lx(), E.c(), E.m(e, null)), C[8] ? m ? m.p(C, B) : (m = cx(C), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
          },
          i: Z,
          o: Z,
          d(C) {
            C && (S(e), S(i), S(a)), p.d(), E && E.d(), m && m.d(C), x = false, ue(l);
          }
        };
      }
      function W7(t, e, n) {
        st(() => {
          sd();
        });
        let r = "", s = "", o = "", i = false, a = null, x = false, l = false, u = false, f = null, p = null, E = false, m = 0, C = "", B = false, A = null;
        async function D() {
          n(4, a = null), n(3, i = true);
          try {
            const { challenge: W, auth_salt: H, enc_salt: q } = await vi(r), X = await Gt(s, nt(H)), j = Zu(new TextEncoder().encode(W), X), U = btoa(String.fromCharCode(...j)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), z = await nx(r, U);
            if (z.requires_otp) {
              f = U, p = q, n(5, x = true);
              return;
            }
            await v(q, z);
          } catch (W) {
            n(4, a = W.message);
          } finally {
            n(3, i = false);
          }
        }
        async function b() {
          n(4, a = null), n(3, i = true);
          try {
            const W = await nx(r, f, o, u);
            await v(p, W);
          } catch (W) {
            n(4, a = W.message);
          } finally {
            n(3, i = false);
          }
        }
        async function v(W, H) {
          nd(r);
          const q = await Gt(s, nt(W));
          Di(q), await md(H.bootstrap ?? null), hd().catch(() => {
          }), P7() ? (n(9, m = I7()), C = ix(), n(8, E = true)) : Ee(ix());
        }
        async function _() {
          n(11, A = null), n(10, B = true);
          try {
            await N7(), n(8, E = false), Ee(C);
          } catch (W) {
            n(11, A = W.message);
          } finally {
            n(10, B = false);
          }
        }
        function g() {
          n(8, E = false), Ee(C);
        }
        function F() {
          n(5, x = false), n(2, o = ""), f = null, p = null, n(4, a = null), n(6, l = false), n(7, u = false);
        }
        function k() {
          n(6, l = !l), n(2, o = ""), n(4, a = null);
        }
        const w = () => Ee("/"), P = (W) => W.key === "Enter" && Ee("/");
        function N() {
          r = this.value, n(0, r);
        }
        function I() {
          s = this.value, n(1, s);
        }
        function L() {
          o = this.value, n(2, o);
        }
        function R() {
          o = this.value, n(2, o);
        }
        function O() {
          u = this.checked, n(7, u);
        }
        return [
          r,
          s,
          o,
          i,
          a,
          x,
          l,
          u,
          E,
          m,
          B,
          A,
          D,
          b,
          _,
          g,
          F,
          k,
          w,
          P,
          N,
          I,
          L,
          R,
          O
        ];
      }
      class V7 extends Se {
        constructor(e) {
          super(), we(this, e, W7, G7, ke, {});
        }
      }
      function dx(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[6]), d(e, "class", "error svelte-1c8cd3e");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s & 64 && V(n, r[6]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function Y7(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A, D, b, v, _, g, F, k, w, P, N, I, L, R = t[5] ? "Creating account\u2026" : "Create account", O, W, H, q, X, j = t[6] && dx(t);
        return {
          c() {
            e = h("main"), n = h("div"), n.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1c8cd3e"/> <h1 class="svelte-1c8cd3e"><span class="brand-peach svelte-1c8cd3e">Peach</span><span class="brand-safe svelte-1c8cd3e">Safe</span></h1>', r = y(), s = h("div"), o = h("div"), o.innerHTML = '<a href="#/login" class="tab svelte-1c8cd3e">Log in</a> <a href="#/signup" class="tab active svelte-1c8cd3e">Create account</a>', i = y(), a = h("form"), x = h("label"), l = M(`Beta code
        `), u = h("input"), f = y(), p = h("label"), E = M(`Username
        `), m = h("input"), C = y(), B = h("label"), A = M(`Email
        `), D = h("input"), b = y(), v = h("label"), _ = M(`Password
        `), g = h("input"), F = y(), k = h("label"), w = M(`Confirm password
        `), P = h("input"), N = y(), j && j.c(), I = y(), L = h("button"), O = M(R), W = y(), H = h("p"), H.textContent = "Your password never leaves your device in plaintext.", d(n, "class", "brand svelte-1c8cd3e"), d(n, "role", "button"), d(n, "tabindex", "0"), d(o, "class", "tabs svelte-1c8cd3e"), d(u, "type", "text"), u.required = true, d(u, "autocomplete", "off"), d(u, "class", "svelte-1c8cd3e"), d(x, "class", "svelte-1c8cd3e"), d(m, "type", "text"), m.required = true, d(m, "autocomplete", "username"), d(m, "class", "svelte-1c8cd3e"), d(p, "class", "svelte-1c8cd3e"), d(D, "type", "email"), D.required = true, d(D, "autocomplete", "email"), d(D, "class", "svelte-1c8cd3e"), d(B, "class", "svelte-1c8cd3e"), d(g, "type", "password"), g.required = true, d(g, "autocomplete", "new-password"), d(g, "minlength", "12"), d(g, "class", "svelte-1c8cd3e"), d(v, "class", "svelte-1c8cd3e"), d(P, "type", "password"), P.required = true, d(P, "autocomplete", "new-password"), d(P, "class", "svelte-1c8cd3e"), d(k, "class", "svelte-1c8cd3e"), d(L, "type", "submit"), L.disabled = t[5], d(L, "class", "svelte-1c8cd3e"), d(a, "class", "svelte-1c8cd3e"), d(s, "class", "card svelte-1c8cd3e"), d(H, "class", "privacy-note svelte-1c8cd3e"), d(e, "class", "svelte-1c8cd3e");
          },
          m(U, z) {
            T(U, e, z), c(e, n), c(e, r), c(e, s), c(s, o), c(s, i), c(s, a), c(a, x), c(x, l), c(x, u), xe(u, t[4]), c(a, f), c(a, p), c(p, E), c(p, m), xe(m, t[0]), c(a, C), c(a, B), c(B, A), c(B, D), xe(D, t[1]), c(a, b), c(a, v), c(v, _), c(v, g), xe(g, t[2]), c(a, F), c(a, k), c(k, w), c(k, P), xe(P, t[3]), c(a, N), j && j.m(a, null), c(a, I), c(a, L), c(L, O), c(e, W), c(e, H), q || (X = [
              G(n, "click", t[8]),
              G(n, "keypress", t[9]),
              G(u, "input", t[10]),
              G(m, "input", t[11]),
              G(D, "input", t[12]),
              G(g, "input", t[13]),
              G(P, "input", t[14]),
              G(a, "submit", tn(t[7]))
            ], q = true);
          },
          p(U, [z]) {
            z & 16 && u.value !== U[4] && xe(u, U[4]), z & 1 && m.value !== U[0] && xe(m, U[0]), z & 2 && D.value !== U[1] && xe(D, U[1]), z & 4 && g.value !== U[2] && xe(g, U[2]), z & 8 && P.value !== U[3] && xe(P, U[3]), U[6] ? j ? j.p(U, z) : (j = dx(U), j.c(), j.m(a, I)) : j && (j.d(1), j = null), z & 32 && R !== (R = U[5] ? "Creating account\u2026" : "Create account") && V(O, R), z & 32 && (L.disabled = U[5]);
          },
          i: Z,
          o: Z,
          d(U) {
            U && S(e), j && j.d(), q = false, ue(X);
          }
        };
      }
      const K7 = "psbeta";
      function J7(t, e, n) {
        st(() => {
          sd();
        });
        let r = "", s = "", o = "", i = "", a = "", x = false, l = null;
        async function u() {
          if (n(6, l = null), a !== K7) {
            n(6, l = "Sorry, we're in closed beta at the moment");
            return;
          }
          if (o !== i) {
            n(6, l = "Passwords do not match");
            return;
          }
          if (o.length < 12) {
            n(6, l = "Password must be at least 12 characters");
            return;
          }
          n(5, x = true);
          try {
            const { auth_salt: D, enc_salt: b } = await vi(r), v = await Gt(o, nt(D)), _ = ne(Qu(v));
            await Gm(r, s, _), nd(r);
            const g = await Gt(o, nt(b));
            Di(g), await md(), Ee("/home");
          } catch (D) {
            n(6, l = D.message);
          } finally {
            n(5, x = false);
          }
        }
        const f = () => Ee("/"), p = (D) => D.key === "Enter" && Ee("/");
        function E() {
          a = this.value, n(4, a);
        }
        function m() {
          r = this.value, n(0, r);
        }
        function C() {
          s = this.value, n(1, s);
        }
        function B() {
          o = this.value, n(2, o);
        }
        function A() {
          i = this.value, n(3, i);
        }
        return [
          r,
          s,
          o,
          i,
          a,
          x,
          l,
          u,
          f,
          p,
          E,
          m,
          C,
          B,
          A
        ];
      }
      class X7 extends Se {
        constructor(e) {
          super(), we(this, e, J7, Y7, ke, {});
        }
      }
      function fx(t) {
        let e;
        return {
          c() {
            e = h("span"), d(e, "class", "unread-dot svelte-1dr2o73");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Q7(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p = t[1] ? "notifications_active" : "notifications", E, m, C, B, A, D, b, v, _, g, F = t[1] && fx();
        return {
          c() {
            e = h("nav"), n = h("a"), n.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-1dr2o73"/> <span class="brand-label svelte-1dr2o73"><span class="brand-peach svelte-1dr2o73">Peach</span><span class="brand-safe svelte-1dr2o73">Safe</span></span>', r = y(), s = h("div"), o = h("a"), o.innerHTML = '<span class="material-icons svelte-1dr2o73">people</span> <span class="tab-label svelte-1dr2o73">Encounters</span>', i = y(), a = h("a"), a.innerHTML = '<span class="material-icons svelte-1dr2o73">science</span> <span class="tab-label svelte-1dr2o73">Test Results</span>', x = y(), l = h("a"), u = h("span"), f = h("span"), E = M(p), m = y(), F && F.c(), C = y(), B = h("span"), B.textContent = "Alerts", A = y(), D = h("a"), D.innerHTML = '<span class="material-icons svelte-1dr2o73">settings</span> <span class="tab-label svelte-1dr2o73">Settings</span>', b = y(), v = h("button"), v.textContent = "Sign out", d(n, "href", "#/home"), d(n, "class", "brand svelte-1dr2o73"), d(o, "href", "#/encounters"), d(o, "class", "tab svelte-1dr2o73"), oe(o, "active", t[0] === "/encounters"), d(a, "href", "#/results"), d(a, "class", "tab svelte-1dr2o73"), oe(a, "active", t[0] === "/results"), d(f, "class", "material-icons svelte-1dr2o73"), d(u, "class", "icon-wrap svelte-1dr2o73"), d(B, "class", "tab-label svelte-1dr2o73"), d(l, "href", "#/alerts"), d(l, "class", "tab svelte-1dr2o73"), oe(l, "active", t[0] === "/alerts"), oe(l, "has-unread", t[1]), d(s, "class", "tabs svelte-1dr2o73"), d(D, "href", "#/settings"), d(D, "class", "tab settings-tab svelte-1dr2o73"), d(D, "title", "Settings"), oe(D, "active", t[0] === "/settings" || t[0] === "/change-password" || t[0] === "/settings/2fa-setup"), d(v, "class", "signout-btn svelte-1dr2o73"), d(e, "class", "svelte-1dr2o73");
          },
          m(k, w) {
            T(k, e, w), c(e, n), c(e, r), c(e, s), c(s, o), c(s, i), c(s, a), c(s, x), c(s, l), c(l, u), c(u, f), c(f, E), c(u, m), F && F.m(u, null), c(l, C), c(l, B), c(e, A), c(e, D), c(e, b), c(e, v), _ || (g = G(v, "click", t[2]), _ = true);
          },
          p(k, [w]) {
            w & 1 && oe(o, "active", k[0] === "/encounters"), w & 1 && oe(a, "active", k[0] === "/results"), w & 2 && p !== (p = k[1] ? "notifications_active" : "notifications") && V(E, p), k[1] ? F || (F = fx(), F.c(), F.m(u, null)) : F && (F.d(1), F = null), w & 1 && oe(l, "active", k[0] === "/alerts"), w & 2 && oe(l, "has-unread", k[1]), w & 1 && oe(D, "active", k[0] === "/settings" || k[0] === "/change-password" || k[0] === "/settings/2fa-setup");
          },
          i: Z,
          o: Z,
          d(k) {
            k && S(e), F && F.d(), _ = false, g();
          }
        };
      }
      function Z7(t, e, n) {
        let r, s;
        it(t, r6, (i) => n(0, r = i)), it(t, ud, (i) => n(1, s = i));
        async function o() {
          await bi(), Ee("/login");
        }
        return [
          r,
          s,
          o
        ];
      }
      class Ot extends Se {
        constructor(e) {
          super(), we(this, e, Z7, Q7, ke, {});
        }
      }
      function $7(t) {
        let e, n, r, s;
        return e = new Ot({}), {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), r.innerHTML = `<div class="hero svelte-16ahr9l"><div class="logo-wrap svelte-16ahr9l"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="logo-img svelte-16ahr9l"/></div> <h1 class="app-name svelte-16ahr9l"><span class="brand-peach svelte-16ahr9l">Peach</span><span class="brand-safe svelte-16ahr9l">Safe</span></h1></div> <div class="actions svelte-16ahr9l"><a href="#/encounter-exchange" class="btn-filled svelte-16ahr9l"><span class="material-icons svelte-16ahr9l">qr_code</span>
      Log New Encounter</a></div>`, d(r, "class", "svelte-16ahr9l");
          },
          m(o, i) {
            Oe(e, o, i), T(o, n, i), T(o, r, i), s = true;
          },
          p: Z,
          i(o) {
            s || (Ce(e.$$.fragment, o), s = true);
          },
          o(o) {
            Ae(e.$$.fragment, o), s = false;
          },
          d(o) {
            o && (S(n), S(r)), He(e, o);
          }
        };
      }
      function e2(t) {
        return st(() => {
          if (!ut()) {
            Ee("/login");
            return;
          }
        }), [];
      }
      class t2 extends Se {
        constructor(e) {
          super(), we(this, e, e2, $7, ke, {});
        }
      }
      function Ex(t, e, n) {
        const r = t.slice();
        return r[20] = e[n], r;
      }
      function px(t, e, n) {
        const r = t.slice();
        return r[23] = e[n], r;
      }
      function mx(t, e, n) {
        const r = t.slice();
        return r[26] = e[n], r;
      }
      function hx(t, e, n) {
        const r = t.slice();
        return r[23] = e[n], r;
      }
      function Cx(t) {
        let e, n, r, s, o, i, a, x, l, u, f = t[6] ? "Creating\u2026" : "Group encounter", p, E, m, C, B, A, D, b, v, _ = t[7] && Bx(t);
        return {
          c() {
            e = h("div"), n = h("div"), r = h("p"), r.textContent = "New encounter", s = y(), o = h("button"), o.innerHTML = '<span class="material-icons type-icon svelte-81oe9z">person</span> <span class="type-label svelte-81oe9z">1:1 encounter</span> <span class="material-icons type-chevron svelte-81oe9z">chevron_right</span>', i = y(), a = h("button"), x = h("span"), x.textContent = "groups", l = y(), u = h("span"), p = M(f), E = y(), m = h("span"), m.textContent = "chevron_right", C = y(), _ && _.c(), B = y(), A = h("button"), D = M("Cancel"), d(r, "class", "modal-title svelte-81oe9z"), d(o, "class", "type-card svelte-81oe9z"), d(x, "class", "material-icons type-icon svelte-81oe9z"), d(u, "class", "type-label svelte-81oe9z"), d(m, "class", "material-icons type-chevron svelte-81oe9z"), d(a, "class", "type-card svelte-81oe9z"), a.disabled = t[6], d(A, "class", "btn-text cancel-btn svelte-81oe9z"), A.disabled = t[6], d(n, "class", "modal-sheet svelte-81oe9z"), d(e, "class", "modal-backdrop svelte-81oe9z");
          },
          m(g, F) {
            T(g, e, F), c(e, n), c(n, r), c(n, s), c(n, o), c(n, i), c(n, a), c(a, x), c(a, l), c(a, u), c(u, p), c(a, E), c(a, m), c(n, C), _ && _.m(n, null), c(n, B), c(n, A), c(A, D), b || (v = [
              G(o, "click", t[14]),
              G(a, "click", t[10]),
              G(A, "click", t[15]),
              G(n, "click", U5(t[12])),
              G(e, "click", t[16])
            ], b = true);
          },
          p(g, F) {
            F & 64 && f !== (f = g[6] ? "Creating\u2026" : "Group encounter") && V(p, f), F & 64 && (a.disabled = g[6]), g[7] ? _ ? _.p(g, F) : (_ = Bx(g), _.c(), _.m(n, B)) : _ && (_.d(1), _ = null), F & 64 && (A.disabled = g[6]);
          },
          d(g) {
            g && S(e), _ && _.d(), b = false, ue(v);
          }
        };
      }
      function Bx(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[7]), d(e, "class", "modal-error svelte-81oe9z");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s & 128 && V(n, r[7]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function n2(t) {
        let e, n, r, s, o = t[9].length > 0 && gx(t), i = t[1].length > 0 && Ax(t), a = t[8].length > 0 && Dx(t);
        function x(f, p) {
          return f[0].length === 0 && f[9].length === 0 && f[8].length === 0 && f[1].length === 0 ? a2 : f[0].length === 0 ? i2 : o2;
        }
        let l = x(t), u = l(t);
        return {
          c() {
            o && o.c(), e = y(), i && i.c(), n = y(), a && a.c(), r = y(), s = h("section"), u.c(), d(s, "class", "card list-card svelte-81oe9z");
          },
          m(f, p) {
            o && o.m(f, p), T(f, e, p), i && i.m(f, p), T(f, n, p), a && a.m(f, p), T(f, r, p), T(f, s, p), u.m(s, null);
          },
          p(f, p) {
            f[9].length > 0 ? o ? o.p(f, p) : (o = gx(f), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), f[1].length > 0 ? i ? i.p(f, p) : (i = Ax(f), i.c(), i.m(n.parentNode, n)) : i && (i.d(1), i = null), f[8].length > 0 ? a ? a.p(f, p) : (a = Dx(f), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null), l === (l = x(f)) && u ? u.p(f, p) : (u.d(1), u = l(f), u && (u.c(), u.m(s, null)));
          },
          d(f) {
            f && (S(e), S(n), S(r), S(s)), o && o.d(f), i && i.d(f), a && a.d(f), u.d();
          }
        };
      }
      function r2(t) {
        let e, n, r;
        return {
          c() {
            e = h("section"), n = h("p"), r = M(t[3]), d(n, "class", "error svelte-81oe9z"), d(e, "class", "card list-card svelte-81oe9z");
          },
          m(s, o) {
            T(s, e, o), c(e, n), c(n, r);
          },
          p(s, o) {
            o & 8 && V(r, s[3]);
          },
          d(s) {
            s && S(e);
          }
        };
      }
      function s2(t) {
        let e;
        return {
          c() {
            e = h("section"), e.innerHTML = '<p class="muted svelte-81oe9z">Loading\u2026</p>', d(e, "class", "card list-card svelte-81oe9z");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function gx(t) {
        let e, n, r, s, o = ve(t[9]), i = [];
        for (let a = 0; a < o.length; a += 1) i[a] = _x(hx(t, o, a));
        return {
          c() {
            e = h("section"), n = h("div"), n.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">favorite</span> <h2 class="svelte-81oe9z">Ongoing partners</h2>', r = y(), s = h("ul");
            for (let a = 0; a < i.length; a += 1) i[a].c();
            d(n, "class", "section-header svelte-81oe9z"), d(s, "class", "svelte-81oe9z"), d(e, "class", "card list-card svelte-81oe9z");
          },
          m(a, x) {
            T(a, e, x), c(e, n), c(e, r), c(e, s);
            for (let l = 0; l < i.length; l += 1) i[l] && i[l].m(s, null);
          },
          p(a, x) {
            if (x & 512) {
              o = ve(a[9]);
              let l;
              for (l = 0; l < o.length; l += 1) {
                const u = hx(a, o, l);
                i[l] ? i[l].p(u, x) : (i[l] = _x(u), i[l].c(), i[l].m(s, null));
              }
              for (; l < i.length; l += 1) i[l].d(1);
              i.length = o.length;
            }
          },
          d(a) {
            a && S(e), vt(i, a);
          }
        };
      }
      function _x(t) {
        let e, n, r, s, o, i, a = as(t[23]) + "", x, l, u, f = xs(t[23]) + "", p, E, m, C, B;
        return {
          c() {
            e = h("li"), n = h("a"), r = h("span"), r.textContent = "favorite", s = y(), o = h("span"), i = h("span"), x = M(a), l = y(), u = h("span"), p = M(f), E = y(), m = h("span"), m.textContent = "chevron_right", B = y(), d(r, "class", "material-icons rel-icon active svelte-81oe9z"), d(i, "class", "rel-name svelte-81oe9z"), d(u, "class", "rel-sub svelte-81oe9z"), d(o, "class", "rel-main svelte-81oe9z"), d(m, "class", "material-icons chevron svelte-81oe9z"), d(n, "class", "rel-row svelte-81oe9z"), d(n, "href", C = "#/relationships/" + ne(t[23].rawToken)), d(e, "class", "svelte-81oe9z");
          },
          m(A, D) {
            T(A, e, D), c(e, n), c(n, r), c(n, s), c(n, o), c(o, i), c(i, x), c(o, l), c(o, u), c(u, p), c(n, E), c(n, m), c(e, B);
          },
          p(A, D) {
            D & 512 && a !== (a = as(A[23]) + "") && V(x, a), D & 512 && f !== (f = xs(A[23]) + "") && V(p, f), D & 512 && C !== (C = "#/relationships/" + ne(A[23].rawToken)) && d(n, "href", C);
          },
          d(A) {
            A && S(e);
          }
        };
      }
      function Ax(t) {
        let e, n, r, s, o = ve(t[1]), i = [];
        for (let a = 0; a < o.length; a += 1) i[a] = Fx(mx(t, o, a));
        return {
          c() {
            e = h("section"), n = h("div"), n.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">groups</span> <h2 class="svelte-81oe9z">Group encounters</h2>', r = y(), s = h("ul");
            for (let a = 0; a < i.length; a += 1) i[a].c();
            d(n, "class", "section-header svelte-81oe9z"), d(s, "class", "svelte-81oe9z"), d(e, "class", "card list-card svelte-81oe9z");
          },
          m(a, x) {
            T(a, e, x), c(e, n), c(e, r), c(e, s);
            for (let l = 0; l < i.length; l += 1) i[l] && i[l].m(s, null);
          },
          p(a, x) {
            if (x & 2) {
              o = ve(a[1]);
              let l;
              for (l = 0; l < o.length; l += 1) {
                const u = mx(a, o, l);
                i[l] ? i[l].p(u, x) : (i[l] = Fx(u), i[l].c(), i[l].m(s, null));
              }
              for (; l < i.length; l += 1) i[l].d(1);
              i.length = o.length;
            }
          },
          d(a) {
            a && S(e), vt(i, a);
          }
        };
      }
      function Fx(t) {
        let e, n, r, s, o, i, a = yx(t[26]) + "", x, l, u, f = wx(t[26]) + "", p, E, m, C, B;
        return {
          c() {
            e = h("li"), n = h("a"), r = h("span"), r.textContent = "groups", s = y(), o = h("span"), i = h("span"), x = M(a), l = y(), u = h("span"), p = M(f), E = y(), m = h("span"), m.textContent = "chevron_right", B = y(), d(r, "class", "material-icons rel-icon active svelte-81oe9z"), d(i, "class", "rel-name svelte-81oe9z"), d(u, "class", "rel-sub svelte-81oe9z"), d(o, "class", "rel-main svelte-81oe9z"), d(m, "class", "material-icons chevron svelte-81oe9z"), d(n, "class", "rel-row svelte-81oe9z"), d(n, "href", C = "#/groups/" + ne(t[26].token)), d(e, "class", "svelte-81oe9z");
          },
          m(A, D) {
            T(A, e, D), c(e, n), c(n, r), c(n, s), c(n, o), c(o, i), c(i, x), c(o, l), c(o, u), c(u, p), c(n, E), c(n, m), c(e, B);
          },
          p(A, D) {
            D & 2 && a !== (a = yx(A[26]) + "") && V(x, a), D & 2 && f !== (f = wx(A[26]) + "") && V(p, f), D & 2 && C !== (C = "#/groups/" + ne(A[26].token)) && d(n, "href", C);
          },
          d(A) {
            A && S(e);
          }
        };
      }
      function Dx(t) {
        let e, n, r, s = t[4] ? "expand_less" : "expand_more", o, i, a, x, l = t[8].length + "", u, f, p, E, m, C = t[4] && vx(t);
        return {
          c() {
            e = h("section"), n = h("button"), r = h("span"), o = M(s), i = y(), a = h("span"), x = M("Archived partners ("), u = M(l), f = M(")"), p = y(), C && C.c(), d(r, "class", "material-icons toggle-icon svelte-81oe9z"), d(a, "class", "muted-label svelte-81oe9z"), d(n, "class", "collapse-toggle svelte-81oe9z"), d(e, "class", "card list-card svelte-81oe9z");
          },
          m(B, A) {
            T(B, e, A), c(e, n), c(n, r), c(r, o), c(n, i), c(n, a), c(a, x), c(a, u), c(a, f), c(e, p), C && C.m(e, null), E || (m = G(n, "click", t[17]), E = true);
          },
          p(B, A) {
            A & 16 && s !== (s = B[4] ? "expand_less" : "expand_more") && V(o, s), A & 256 && l !== (l = B[8].length + "") && V(u, l), B[4] ? C ? C.p(B, A) : (C = vx(B), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
          },
          d(B) {
            B && S(e), C && C.d(), E = false, m();
          }
        };
      }
      function vx(t) {
        let e, n = ve(t[8]), r = [];
        for (let s = 0; s < n.length; s += 1) r[s] = bx(px(t, n, s));
        return {
          c() {
            e = h("ul");
            for (let s = 0; s < r.length; s += 1) r[s].c();
            d(e, "class", "svelte-81oe9z");
          },
          m(s, o) {
            T(s, e, o);
            for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(e, null);
          },
          p(s, o) {
            if (o & 256) {
              n = ve(s[8]);
              let i;
              for (i = 0; i < n.length; i += 1) {
                const a = px(s, n, i);
                r[i] ? r[i].p(a, o) : (r[i] = bx(a), r[i].c(), r[i].m(e, null));
              }
              for (; i < r.length; i += 1) r[i].d(1);
              r.length = n.length;
            }
          },
          d(s) {
            s && S(e), vt(r, s);
          }
        };
      }
      function bx(t) {
        let e, n, r, s, o, i, a = as(t[23]) + "", x, l, u, f = xs(t[23]) + "", p, E, m, C, B;
        return {
          c() {
            e = h("li"), n = h("a"), r = h("span"), r.textContent = "favorite_border", s = y(), o = h("span"), i = h("span"), x = M(a), l = y(), u = h("span"), p = M(f), E = y(), m = h("span"), m.textContent = "chevron_right", B = y(), d(r, "class", "material-icons rel-icon ended svelte-81oe9z"), d(i, "class", "rel-name svelte-81oe9z"), d(u, "class", "rel-sub svelte-81oe9z"), d(o, "class", "rel-main svelte-81oe9z"), d(m, "class", "material-icons chevron svelte-81oe9z"), d(n, "class", "rel-row svelte-81oe9z"), d(n, "href", C = "#/relationships/" + ne(t[23].rawToken)), d(e, "class", "svelte-81oe9z");
          },
          m(A, D) {
            T(A, e, D), c(e, n), c(n, r), c(n, s), c(n, o), c(o, i), c(i, x), c(o, l), c(o, u), c(u, p), c(n, E), c(n, m), c(e, B);
          },
          p(A, D) {
            D & 256 && a !== (a = as(A[23]) + "") && V(x, a), D & 256 && f !== (f = xs(A[23]) + "") && V(p, f), D & 256 && C !== (C = "#/relationships/" + ne(A[23].rawToken)) && d(n, "href", C);
          },
          d(A) {
            A && S(e);
          }
        };
      }
      function o2(t) {
        let e, n, r, s = ve(t[0]), o = [];
        for (let i = 0; i < s.length; i += 1) o[i] = kx(Ex(t, s, i));
        return {
          c() {
            e = h("div"), e.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">check_circle_outline</span> <h2 class="svelte-81oe9z">One-time encounters</h2>', n = y(), r = h("ul");
            for (let i = 0; i < o.length; i += 1) o[i].c();
            d(e, "class", "section-header svelte-81oe9z"), d(r, "class", "svelte-81oe9z");
          },
          m(i, a) {
            T(i, e, a), T(i, n, a), T(i, r, a);
            for (let x = 0; x < o.length; x += 1) o[x] && o[x].m(r, null);
          },
          p(i, a) {
            if (a & 1) {
              s = ve(i[0]);
              let x;
              for (x = 0; x < s.length; x += 1) {
                const l = Ex(i, s, x);
                o[x] ? o[x].p(l, a) : (o[x] = kx(l), o[x].c(), o[x].m(r, null));
              }
              for (; x < o.length; x += 1) o[x].d(1);
              o.length = s.length;
            }
          },
          d(i) {
            i && (S(e), S(n), S(r)), vt(o, i);
          }
        };
      }
      function i2(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "No one-time encounters.", d(e, "class", "muted list-muted svelte-81oe9z");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function a2(t) {
        let e, n, r, s, o, i, a, x;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "people_outline", r = y(), s = h("p"), s.textContent = "No encounters recorded yet.", o = y(), i = h("button"), i.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, d(n, "class", "material-icons empty-icon svelte-81oe9z"), d(s, "class", "svelte-81oe9z"), d(i, "class", "btn-filled svelte-81oe9z"), d(e, "class", "empty-state svelte-81oe9z");
          },
          m(l, u) {
            T(l, e, u), c(e, n), c(e, r), c(e, s), c(e, o), c(e, i), a || (x = G(i, "click", t[18]), a = true);
          },
          p: Z,
          d(l) {
            l && S(e), a = false, x();
          }
        };
      }
      function x2(t) {
        let e, n = ne(t[20].rawToken).slice(0, 12) + "", r, s;
        return {
          c() {
            e = h("span"), r = M(n), s = M("\u2026"), d(e, "class", "rel-sub enc-token svelte-81oe9z");
          },
          m(o, i) {
            T(o, e, i), c(e, r), c(e, s);
          },
          p(o, i) {
            i & 1 && n !== (n = ne(o[20].rawToken).slice(0, 12) + "") && V(r, n);
          },
          d(o) {
            o && S(e);
          }
        };
      }
      function l2(t) {
        let e, n = t[20].note + "", r;
        return {
          c() {
            e = h("span"), r = M(n), d(e, "class", "rel-sub enc-note svelte-81oe9z");
          },
          m(s, o) {
            T(s, e, o), c(e, r);
          },
          p(s, o) {
            o & 1 && n !== (n = s[20].note + "") && V(r, n);
          },
          d(s) {
            s && S(e);
          }
        };
      }
      function kx(t) {
        let e, n, r, s, o, i, a = t[20].date + "", x, l, u, f, p, E;
        function m(A, D) {
          return A[20].note ? l2 : x2;
        }
        let C = m(t), B = C(t);
        return {
          c() {
            e = h("li"), n = h("a"), r = h("span"), r.textContent = "check_circle_outline", s = y(), o = h("span"), i = h("span"), x = M(a), l = y(), B.c(), u = y(), f = h("span"), f.textContent = "chevron_right", E = y(), d(r, "class", "material-icons rel-icon active svelte-81oe9z"), d(i, "class", "rel-name svelte-81oe9z"), d(o, "class", "rel-main svelte-81oe9z"), d(f, "class", "material-icons chevron svelte-81oe9z"), d(n, "class", "rel-row svelte-81oe9z"), d(n, "href", p = "#/encounters/" + ne(t[20].rawToken)), d(e, "class", "svelte-81oe9z");
          },
          m(A, D) {
            T(A, e, D), c(e, n), c(n, r), c(n, s), c(n, o), c(o, i), c(i, x), c(o, l), B.m(o, null), c(n, u), c(n, f), c(e, E);
          },
          p(A, D) {
            D & 1 && a !== (a = A[20].date + "") && V(x, a), C === (C = m(A)) && B ? B.p(A, D) : (B.d(1), B = C(A), B && (B.c(), B.m(o, null))), D & 1 && p !== (p = "#/encounters/" + ne(A[20].rawToken)) && d(n, "href", p);
          },
          d(A) {
            A && S(e), B.d();
          }
        };
      }
      function c2(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p;
        e = new Ot({});
        let E = t[5] && Cx(t);
        function m(A, D) {
          return A[2] ? s2 : A[3] ? r2 : n2;
        }
        let C = m(t), B = C(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), s = h("div"), o = h("h1"), o.textContent = "Encounters", i = y(), a = h("button"), a.innerHTML = '<span class="material-icons">add</span>', x = y(), E && E.c(), l = y(), B.c(), d(o, "class", "svelte-81oe9z"), d(a, "class", "fab svelte-81oe9z"), d(a, "title", "Add encounter"), d(s, "class", "page-header svelte-81oe9z"), d(r, "class", "svelte-81oe9z");
          },
          m(A, D) {
            Oe(e, A, D), T(A, n, D), T(A, r, D), c(r, s), c(s, o), c(s, i), c(s, a), c(r, x), E && E.m(r, null), c(r, l), B.m(r, null), u = true, f || (p = G(a, "click", t[13]), f = true);
          },
          p(A, [D]) {
            A[5] ? E ? E.p(A, D) : (E = Cx(A), E.c(), E.m(r, l)) : E && (E.d(1), E = null), C === (C = m(A)) && B ? B.p(A, D) : (B.d(1), B = C(A), B && (B.c(), B.m(r, null)));
          },
          i(A) {
            u || (Ce(e.$$.fragment, A), u = true);
          },
          o(A) {
            Ae(e.$$.fragment, A), u = false;
          },
          d(A) {
            A && (S(n), S(r)), He(e, A), E && E.d(), B.d(), f = false, p();
          }
        };
      }
      function as(t) {
        return t.name ? t.name : t.endedAt ? "Ended partner" : "Active partner";
      }
      function xs(t) {
        return t.endedAt ? "Ended " + t.endedAt : "Since " + t.createdAt;
      }
      function yx(t) {
        return t.name || "Group encounter";
      }
      function wx(t) {
        return (t.isHost ? "Host \xB7 " : "") + t.date;
      }
      function u2(t, e, n) {
        let r, s, o = [], i = [], a = [], x = true, l = null, u = false, f = false, p = false, E = null;
        st(() => {
          if (!ut()) {
            Ee("/login");
            return;
          }
          m();
        });
        function m() {
          n(2, x = true), n(3, l = null);
          try {
            n(0, o = fd()), n(11, i = Pi()), n(1, a = Ed());
          } catch (F) {
            n(3, l = F.message);
          } finally {
            n(2, x = false);
          }
        }
        async function C() {
          n(6, p = true), n(7, E = null);
          try {
            const F = cr(32), k = wn(), w = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
            await pd(F, w, true, k, null), await is(ne(t0(F, 0)), w), n(5, f = false), Ee("/groups/" + ne(F));
          } catch (F) {
            n(7, E = F.message);
          } finally {
            n(6, p = false);
          }
        }
        function B(F) {
          Po.call(this, t, F);
        }
        const A = () => n(5, f = true), D = () => {
          n(5, f = false), Ee("/encounter-exchange");
        }, b = () => n(5, f = false), v = () => {
          p || n(5, f = false);
        }, _ = () => n(4, u = !u), g = () => n(5, f = true);
        return t.$$.update = () => {
          t.$$.dirty & 2048 && n(9, r = i.filter((F) => !F.archived)), t.$$.dirty & 2048 && n(8, s = i.filter((F) => F.archived));
        }, [
          o,
          a,
          x,
          l,
          u,
          f,
          p,
          E,
          s,
          r,
          C,
          i,
          B,
          A,
          D,
          b,
          v,
          _,
          g
        ];
      }
      class d2 extends Se {
        constructor(e) {
          super(), we(this, e, u2, c2, ke, {});
        }
      }
      function f2(t) {
        let e, n, r, s, o = t[7] ? "favorite" : "favorite_border", i, a, x, l, u = t[7] ? "Active partner" : "Ended", f, p, E, m, C, B, A = ls(t[0].createdAt) + "", D, b, v, _, g, F, k, w, P, N, I = t[3] && Sx(t), L = t[0].archived && Tx(), R = t[0].endedAt && Px(t);
        function O(Y, se) {
          return Y[4] ? m2 : p2;
        }
        let W = O(t), H = W(t);
        function q(Y, se) {
          return Y[7] ? C2 : h2;
        }
        let X = q(t), j = X(t);
        function U(Y, se) {
          return Y[0].archived ? F2 : Y[6] === "archive" ? A2 : _2;
        }
        let z = U(t), K = z(t);
        return {
          c() {
            I && I.c(), e = y(), n = h("section"), r = h("div"), s = h("span"), i = M(o), a = y(), x = h("div"), l = h("span"), f = M(u), p = y(), L && L.c(), E = y(), m = h("div"), C = h("span"), B = M("Since "), D = M(A), b = y(), R && R.c(), v = y(), _ = h("section"), H.c(), g = y(), F = h("div"), k = y(), j.c(), w = y(), P = h("div"), N = y(), K.c(), d(s, "class", "material-icons status-icon svelte-1lfam"), oe(s, "active", t[7]), oe(s, "ended", !t[7]), d(l, "class", "status-label svelte-1lfam"), oe(l, "active", t[7]), d(x, "class", "status-text svelte-1lfam"), d(r, "class", "status-row svelte-1lfam"), d(m, "class", "dates svelte-1lfam"), d(n, "class", "card pad svelte-1lfam"), d(F, "class", "divider svelte-1lfam"), d(P, "class", "divider svelte-1lfam"), d(_, "class", "card svelte-1lfam");
          },
          m(Y, se) {
            I && I.m(Y, se), T(Y, e, se), T(Y, n, se), c(n, r), c(r, s), c(s, i), c(r, a), c(r, x), c(x, l), c(l, f), c(x, p), L && L.m(x, null), c(n, E), c(n, m), c(m, C), c(C, B), c(C, D), c(m, b), R && R.m(m, null), T(Y, v, se), T(Y, _, se), H.m(_, null), c(_, g), c(_, F), c(_, k), j.m(_, null), c(_, w), c(_, P), c(_, N), K.m(_, null);
          },
          p(Y, se) {
            Y[3] ? I ? I.p(Y, se) : (I = Sx(Y), I.c(), I.m(e.parentNode, e)) : I && (I.d(1), I = null), se & 128 && o !== (o = Y[7] ? "favorite" : "favorite_border") && V(i, o), se & 128 && oe(s, "active", Y[7]), se & 128 && oe(s, "ended", !Y[7]), se & 128 && u !== (u = Y[7] ? "Active partner" : "Ended") && V(f, u), se & 128 && oe(l, "active", Y[7]), Y[0].archived ? L || (L = Tx(), L.c(), L.m(x, null)) : L && (L.d(1), L = null), se & 1 && A !== (A = ls(Y[0].createdAt) + "") && V(D, A), Y[0].endedAt ? R ? R.p(Y, se) : (R = Px(Y), R.c(), R.m(m, null)) : R && (R.d(1), R = null), W === (W = O(Y)) && H ? H.p(Y, se) : (H.d(1), H = W(Y), H && (H.c(), H.m(_, g))), X === (X = q(Y)) && j ? j.p(Y, se) : (j.d(1), j = X(Y), j && (j.c(), j.m(_, w))), z === (z = U(Y)) && K ? K.p(Y, se) : (K.d(1), K = z(Y), K && (K.c(), K.m(_, null)));
          },
          d(Y) {
            Y && (S(e), S(n), S(v), S(_)), I && I.d(Y), L && L.d(), R && R.d(), H.d(), j.d(), K.d();
          }
        };
      }
      function E2(t) {
        let e;
        return {
          c() {
            e = h("section"), e.innerHTML = '<p class="muted svelte-1lfam">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-1lfam">\u2190 Back to encounters</a>', d(e, "class", "card pad svelte-1lfam");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function Sx(t) {
        let e, n, r, s;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "error_outline", r = y(), s = M(t[3]), d(n, "class", "material-icons svelte-1lfam"), d(e, "class", "toast error-toast svelte-1lfam");
          },
          m(o, i) {
            T(o, e, i), c(e, n), c(e, r), c(e, s);
          },
          p(o, i) {
            i & 8 && V(s, o[3]);
          },
          d(o) {
            o && S(e);
          }
        };
      }
      function Tx(t) {
        let e;
        return {
          c() {
            e = h("span"), e.textContent = "archived", d(e, "class", "badge archived svelte-1lfam");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Px(t) {
        let e, n, r = ls(t[0].endedAt) + "", s;
        return {
          c() {
            e = h("span"), n = M("Ended "), s = M(r);
          },
          m(o, i) {
            T(o, e, i), c(e, n), c(e, s);
          },
          p(o, i) {
            i & 1 && r !== (r = ls(o[0].endedAt) + "") && V(s, r);
          },
          d(o) {
            o && S(e);
          }
        };
      }
      function p2(t) {
        let e, n, r, s, o = (t[0].name ? t[0].name : "Add nickname") + "", i, a, x, l, u, f, p = t[0].name && Ix();
        return {
          c() {
            e = h("button"), n = h("span"), n.textContent = "edit", r = y(), s = h("span"), i = M(o), a = y(), p && p.c(), x = y(), l = h("span"), l.textContent = "chevron_right", d(n, "class", "material-icons action-icon svelte-1lfam"), d(s, "class", "action-label svelte-1lfam"), d(l, "class", "material-icons action-chevron svelte-1lfam"), d(e, "class", "action-row svelte-1lfam");
          },
          m(E, m) {
            T(E, e, m), c(e, n), c(e, r), c(e, s), c(s, i), c(s, a), p && p.m(s, null), c(e, x), c(e, l), u || (f = G(e, "click", t[13]), u = true);
          },
          p(E, m) {
            m & 1 && o !== (o = (E[0].name ? E[0].name : "Add nickname") + "") && V(i, o), E[0].name ? p || (p = Ix(), p.c(), p.m(s, null)) : p && (p.d(1), p = null);
          },
          d(E) {
            E && S(e), p && p.d(), u = false, f();
          }
        };
      }
      function m2(t) {
        let e, n, r, s, o, i, a, x, l, u, f = t[2] ? "Saving\u2026" : "Save", p, E, m;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "edit", r = y(), s = h("form"), o = h("input"), i = y(), a = h("div"), x = h("button"), x.textContent = "Cancel", l = y(), u = h("button"), p = M(f), d(n, "class", "material-icons action-icon svelte-1lfam"), d(o, "type", "text"), d(o, "placeholder", "Optional nickname"), d(o, "maxlength", "64"), o.autofocus = true, d(o, "class", "svelte-1lfam"), d(x, "type", "button"), d(x, "class", "btn-text svelte-1lfam"), d(u, "type", "submit"), d(u, "class", "btn-filled-sm svelte-1lfam"), u.disabled = t[2], d(a, "class", "name-actions svelte-1lfam"), d(s, "class", "name-form svelte-1lfam"), d(e, "class", "action-row edit-name-row svelte-1lfam");
          },
          m(C, B) {
            T(C, e, B), c(e, n), c(e, r), c(e, s), c(s, o), xe(o, t[5]), c(s, i), c(s, a), c(a, x), c(a, l), c(a, u), c(u, p), o.focus(), E || (m = [
              G(o, "input", t[16]),
              G(x, "click", t[14]),
              G(s, "submit", tn(t[9]))
            ], E = true);
          },
          p(C, B) {
            B & 32 && o.value !== C[5] && xe(o, C[5]), B & 4 && f !== (f = C[2] ? "Saving\u2026" : "Save") && V(p, f), B & 4 && (u.disabled = C[2]);
          },
          d(C) {
            C && S(e), E = false, ue(m);
          }
        };
      }
      function Ix(t) {
        let e;
        return {
          c() {
            e = h("span"), e.textContent = "Tap to change", d(e, "class", "action-sub svelte-1lfam");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function h2(t) {
        let e, n, r, s, o, i;
        return {
          c() {
            e = h("button"), n = h("span"), n.textContent = "favorite", r = y(), s = h("span"), s.textContent = "Mark as active again", d(n, "class", "material-icons action-icon primary svelte-1lfam"), d(s, "class", "action-label primary svelte-1lfam"), d(e, "class", "action-row svelte-1lfam"), e.disabled = t[2];
          },
          m(a, x) {
            T(a, e, x), c(e, n), c(e, r), c(e, s), o || (i = G(e, "click", t[11]), o = true);
          },
          p(a, x) {
            x & 4 && (e.disabled = a[2]);
          },
          d(a) {
            a && S(e), o = false, i();
          }
        };
      }
      function C2(t) {
        let e;
        function n(o, i) {
          return o[6] === "end" ? g2 : B2;
        }
        let r = n(t), s = r(t);
        return {
          c() {
            s.c(), e = Pt();
          },
          m(o, i) {
            s.m(o, i), T(o, e, i);
          },
          p(o, i) {
            r === (r = n(o)) && s ? s.p(o, i) : (s.d(1), s = r(o), s && (s.c(), s.m(e.parentNode, e)));
          },
          d(o) {
            o && S(e), s.d(o);
          }
        };
      }
      function B2(t) {
        let e, n, r;
        return {
          c() {
            e = h("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-1lfam">heart_broken</span> <span class="action-label danger svelte-1lfam">Mark as ended</span>', d(e, "class", "action-row svelte-1lfam");
          },
          m(s, o) {
            T(s, e, o), n || (r = G(e, "click", t[18]), n = true);
          },
          p: Z,
          d(s) {
            s && S(e), n = false, r();
          }
        };
      }
      function g2(t) {
        let e, n, r, s, o, i, a, x = t[2] ? "Saving\u2026" : "Mark as ended", l, u, f;
        return {
          c() {
            e = h("div"), n = h("p"), n.textContent = "Mark this partnership as ended?", r = y(), s = h("div"), o = h("button"), o.textContent = "Cancel", i = y(), a = h("button"), l = M(x), d(n, "class", "confirm-text svelte-1lfam"), d(o, "class", "btn-text svelte-1lfam"), d(a, "class", "btn-danger-sm svelte-1lfam"), a.disabled = t[2], d(s, "class", "confirm-actions svelte-1lfam"), d(e, "class", "confirm-row svelte-1lfam");
          },
          m(p, E) {
            T(p, e, E), c(e, n), c(e, r), c(e, s), c(s, o), c(s, i), c(s, a), c(a, l), u || (f = [
              G(o, "click", t[17]),
              G(a, "click", t[10])
            ], u = true);
          },
          p(p, E) {
            E & 4 && x !== (x = p[2] ? "Saving\u2026" : "Mark as ended") && V(l, x), E & 4 && (a.disabled = p[2]);
          },
          d(p) {
            p && S(e), u = false, ue(f);
          }
        };
      }
      function _2(t) {
        let e, n, r;
        return {
          c() {
            e = h("button"), e.innerHTML = '<span class="material-icons action-icon svelte-1lfam">archive</span> <span class="action-label svelte-1lfam">Archive</span> <span class="action-sub-right svelte-1lfam">Hide from main list</span>', d(e, "class", "action-row svelte-1lfam");
          },
          m(s, o) {
            T(s, e, o), n || (r = G(e, "click", t[22]), n = true);
          },
          p: Z,
          d(s) {
            s && S(e), n = false, r();
          }
        };
      }
      function A2(t) {
        let e, n, r, s, o, i, a, x = t[2] ? "Saving\u2026" : "Archive", l, u, f;
        return {
          c() {
            e = h("div"), n = h("p"), n.textContent = "Archive this partner? They will be hidden from the main list.", r = y(), s = h("div"), o = h("button"), o.textContent = "Cancel", i = y(), a = h("button"), l = M(x), d(n, "class", "confirm-text svelte-1lfam"), d(o, "class", "btn-text svelte-1lfam"), d(a, "class", "btn-filled-sm svelte-1lfam"), a.disabled = t[2], d(s, "class", "confirm-actions svelte-1lfam"), d(e, "class", "confirm-row svelte-1lfam");
          },
          m(p, E) {
            T(p, e, E), c(e, n), c(e, r), c(e, s), c(s, o), c(s, i), c(s, a), c(a, l), u || (f = [
              G(o, "click", t[20]),
              G(a, "click", t[21])
            ], u = true);
          },
          p(p, E) {
            E & 4 && x !== (x = p[2] ? "Saving\u2026" : "Archive") && V(l, x), E & 4 && (a.disabled = p[2]);
          },
          d(p) {
            p && S(e), u = false, ue(f);
          }
        };
      }
      function F2(t) {
        let e, n, r, s, o, i;
        return {
          c() {
            e = h("button"), n = h("span"), n.textContent = "unarchive", r = y(), s = h("span"), s.textContent = "Unarchive", d(n, "class", "material-icons action-icon primary svelte-1lfam"), d(s, "class", "action-label primary svelte-1lfam"), d(e, "class", "action-row svelte-1lfam"), e.disabled = t[2];
          },
          m(a, x) {
            T(a, e, x), c(e, n), c(e, r), c(e, s), o || (i = G(e, "click", t[19]), o = true);
          },
          p(a, x) {
            x & 4 && (e.disabled = a[2]);
          },
          d(a) {
            a && S(e), o = false, i();
          }
        };
      }
      function D2(t) {
        let e, n, r, s, o, i, a, x = (t[1] ? "Partner not found" : t[8]) + "", l, u, f;
        e = new Ot({});
        function p(C, B) {
          if (C[1]) return E2;
          if (C[0]) return f2;
        }
        let E = p(t), m = E && E(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), s = h("div"), o = h("a"), o.innerHTML = '<span class="material-icons svelte-1lfam">arrow_back</span>', i = y(), a = h("h1"), l = M(x), u = y(), m && m.c(), d(o, "class", "back-btn svelte-1lfam"), d(o, "href", "#/encounters"), d(a, "class", "svelte-1lfam"), d(s, "class", "page-header svelte-1lfam"), d(r, "class", "svelte-1lfam");
          },
          m(C, B) {
            Oe(e, C, B), T(C, n, B), T(C, r, B), c(r, s), c(s, o), c(s, i), c(s, a), c(a, l), c(r, u), m && m.m(r, null), f = true;
          },
          p(C, [B]) {
            (!f || B & 258) && x !== (x = (C[1] ? "Partner not found" : C[8]) + "") && V(l, x), E === (E = p(C)) && m ? m.p(C, B) : (m && m.d(1), m = E && E(C), m && (m.c(), m.m(r, null)));
          },
          i(C) {
            f || (Ce(e.$$.fragment, C), f = true);
          },
          o(C) {
            Ae(e.$$.fragment, C), f = false;
          },
          d(C) {
            C && (S(n), S(r)), He(e, C), m && m.d();
          }
        };
      }
      function ls(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function v2(t, e, n) {
        let r, s, { params: o = {
          rawTokenHex: ""
        } } = e, i = null, a = false, x = false, l = null, u = false, f = "", p = null;
        st(() => {
          if (!ut()) {
            Ee("/login");
            return;
          }
          E();
        });
        function E() {
          const I = Pi(), L = o.rawTokenHex;
          n(0, i = I.find((R) => ne(R.rawToken) === L) ?? null), i || n(1, a = true);
        }
        function m() {
          return ne(i.rawToken);
        }
        async function C() {
          if (!x) {
            n(2, x = true), n(3, l = null);
            try {
              const I = f.trim();
              await vr(m(), {
                name: I || null
              }), E(), n(4, u = false);
            } catch (I) {
              n(3, l = I.message);
            } finally {
              n(2, x = false);
            }
          }
        }
        async function B() {
          if (!x) {
            n(2, x = true), n(3, l = null);
            try {
              const I = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              await vr(m(), {
                endedAt: I
              }), E();
            } catch (I) {
              n(3, l = I.message);
            } finally {
              n(2, x = false), n(6, p = null);
            }
          }
        }
        async function A() {
          if (!x) {
            n(2, x = true), n(3, l = null);
            try {
              await vr(m(), {
                endedAt: null
              }), E();
            } catch (I) {
              n(3, l = I.message);
            } finally {
              n(2, x = false);
            }
          }
        }
        async function D(I) {
          if (!x) {
            n(2, x = true), n(3, l = null);
            try {
              await vr(m(), {
                archived: I
              }), E();
            } catch (L) {
              n(3, l = L.message);
            } finally {
              n(2, x = false), n(6, p = null);
            }
          }
        }
        function b() {
          n(5, f = i.name ?? ""), n(4, u = true), n(3, l = null);
        }
        function v() {
          n(4, u = false), n(3, l = null);
        }
        function _() {
          f = this.value, n(5, f);
        }
        const g = () => n(6, p = null), F = () => n(6, p = "end"), k = () => D(false), w = () => n(6, p = null), P = () => D(true), N = () => n(6, p = "archive");
        return t.$$set = (I) => {
          "params" in I && n(15, o = I.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && n(8, r = i?.name || (i?.endedAt ? "Ended partner" : "Active partner")), t.$$.dirty & 1 && n(7, s = i && !i.endedAt);
        }, [
          i,
          a,
          x,
          l,
          u,
          f,
          p,
          s,
          r,
          C,
          B,
          A,
          D,
          b,
          v,
          o,
          _,
          g,
          F,
          k,
          w,
          P,
          N
        ];
      }
      class b2 extends Se {
        constructor(e) {
          super(), we(this, e, v2, D2, ke, {
            params: 15
          });
        }
      }
      function Nx(t, e, n) {
        const r = t.slice();
        r[19] = e[n], r[22] = n;
        const s = r[6].length - 1 - r[22];
        return r[20] = s, r;
      }
      function Rx(t, e, n) {
        const r = t.slice();
        return r[23] = e[n], r[24] = e, r[25] = n, r;
      }
      function k2(t) {
        let e;
        return {
          c() {
            e = h("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved. (No encounters on record to notify.)`, d(e, "class", "toast success svelte-1ugndgv");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function y2(t) {
        let e;
        return {
          c() {
            e = h("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved.`, d(e, "class", "toast success svelte-1ugndgv");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function w2(t) {
        let e;
        return {
          c() {
            e = h("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved. Partners notified.`, d(e, "class", "toast success svelte-1ugndgv");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Lx(t) {
        let e, n, r, s;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "error_outline", r = y(), s = M(t[5]), d(n, "class", "material-icons svelte-1ugndgv"), d(e, "class", "toast error-toast svelte-1ugndgv");
          },
          m(o, i) {
            T(o, e, i), c(e, n), c(e, r), c(e, s);
          },
          p(o, i) {
            i & 32 && V(s, o[5]);
          },
          d(o) {
            o && S(e);
          }
        };
      }
      function Mx(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A, D, b, v, _ = t[3] && t[4] === "computing" ? "Saving\u2026" : "Save result", g, F, k, w = ve(Lt), P = [];
        for (let I = 0; I < w.length; I += 1) P[I] = Ox(Rx(t, w, I));
        let N = t[4] === "computing" && Hx();
        return {
          c() {
            e = h("section"), n = h("h2"), n.textContent = "Record a result", r = y(), s = h("p"), s.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, o = y(), i = h("form"), a = h("label"), x = M(`Test date
          `), l = h("input"), u = y(), f = h("fieldset"), p = h("legend"), p.textContent = "Positive results", E = y(), m = h("div");
            for (let I = 0; I < P.length; I += 1) P[I].c();
            C = y(), N && N.c(), B = y(), A = h("div"), D = h("button"), D.textContent = "Cancel", b = y(), v = h("button"), g = M(_), d(n, "class", "svelte-1ugndgv"), d(s, "class", "help svelte-1ugndgv"), d(l, "type", "date"), l.required = true, d(l, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), d(l, "class", "svelte-1ugndgv"), d(a, "class", "svelte-1ugndgv"), d(p, "class", "svelte-1ugndgv"), d(m, "class", "disease-grid svelte-1ugndgv"), d(f, "class", "svelte-1ugndgv"), d(D, "type", "button"), d(D, "class", "btn-text svelte-1ugndgv"), d(v, "type", "submit"), d(v, "class", "btn-filled svelte-1ugndgv"), v.disabled = t[3], d(A, "class", "form-actions svelte-1ugndgv"), d(i, "class", "svelte-1ugndgv"), d(e, "class", "card form-card svelte-1ugndgv");
          },
          m(I, L) {
            T(I, e, L), c(e, n), c(e, r), c(e, s), c(e, o), c(e, i), c(i, a), c(a, x), c(a, l), xe(l, t[0]), c(i, u), c(i, f), c(f, p), c(f, E), c(f, m);
            for (let R = 0; R < P.length; R += 1) P[R] && P[R].m(m, null);
            c(i, C), N && N.m(i, null), c(i, B), c(i, A), c(A, D), c(A, b), c(A, v), c(v, g), F || (k = [
              G(l, "input", t[11]),
              G(D, "click", t[13]),
              G(i, "submit", tn(t[8]))
            ], F = true);
          },
          p(I, L) {
            if (L & 1 && xe(l, I[0]), L & 2) {
              w = ve(Lt);
              let R;
              for (R = 0; R < w.length; R += 1) {
                const O = Rx(I, w, R);
                P[R] ? P[R].p(O, L) : (P[R] = Ox(O), P[R].c(), P[R].m(m, null));
              }
              for (; R < P.length; R += 1) P[R].d(1);
              P.length = w.length;
            }
            I[4] === "computing" ? N || (N = Hx(), N.c(), N.m(i, B)) : N && (N.d(1), N = null), L & 24 && _ !== (_ = I[3] && I[4] === "computing" ? "Saving\u2026" : "Save result") && V(g, _), L & 8 && (v.disabled = I[3]);
          },
          d(I) {
            I && S(e), vt(P, I), N && N.d(), F = false, ue(k);
          }
        };
      }
      function Ox(t) {
        let e, n, r, s = T0[t[23]] + "", o, i, a, x;
        function l() {
          t[12].call(n, t[23]);
        }
        return {
          c() {
            e = h("label"), n = h("input"), r = y(), o = M(s), i = y(), d(n, "type", "checkbox"), d(n, "class", "svelte-1ugndgv"), d(e, "class", "checkbox-label svelte-1ugndgv");
          },
          m(u, f) {
            T(u, e, f), c(e, n), n.checked = t[1][t[23]], c(e, r), c(e, o), c(e, i), a || (x = G(n, "change", l), a = true);
          },
          p(u, f) {
            t = u, f & 2 && (n.checked = t[1][t[23]]);
          },
          d(u) {
            u && S(e), a = false, x();
          }
        };
      }
      function Hx(t) {
        let e;
        return {
          c() {
            e = h("p"), e.innerHTML = `<span class="material-icons spin svelte-1ugndgv">autorenew</span>
            Notifying\u2026`, d(e, "class", "computing-status svelte-1ugndgv");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function S2(t) {
        let e, n = ve([
          ...t[6]
        ].reverse()), r = [];
        for (let s = 0; s < n.length; s += 1) r[s] = zx(Nx(t, n, s));
        return {
          c() {
            e = h("ul");
            for (let s = 0; s < r.length; s += 1) r[s].c();
            d(e, "class", "svelte-1ugndgv");
          },
          m(s, o) {
            T(s, e, o);
            for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(e, null);
          },
          p(s, o) {
            if (o & 712) {
              n = ve([
                ...s[6]
              ].reverse());
              let i;
              for (i = 0; i < n.length; i += 1) {
                const a = Nx(s, n, i);
                r[i] ? r[i].p(a, o) : (r[i] = zx(a), r[i].c(), r[i].m(e, null));
              }
              for (; i < r.length; i += 1) r[i].d(1);
              r.length = n.length;
            }
          },
          d(s) {
            s && S(e), vt(r, s);
          }
        };
      }
      function T2(t) {
        let e, n, r, s, o, i, a, x;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "science", r = y(), s = h("p"), s.textContent = "No results recorded yet.", o = y(), i = h("button"), i.innerHTML = `<span class="material-icons">add</span>
          Record first result`, d(n, "class", "material-icons empty-icon svelte-1ugndgv"), d(s, "class", "svelte-1ugndgv"), d(i, "class", "btn-filled svelte-1ugndgv"), d(e, "class", "empty-state svelte-1ugndgv");
          },
          m(l, u) {
            T(l, e, u), c(e, n), c(e, r), c(e, s), c(e, o), c(e, i), a || (x = G(i, "click", t[14]), a = true);
          },
          p: Z,
          d(l) {
            l && S(e), a = false, x();
          }
        };
      }
      function P2(t) {
        let e;
        return {
          c() {
            e = h("span"), e.textContent = "Negative", d(e, "class", "badge negative svelte-1ugndgv");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function I2(t) {
        let e;
        return {
          c() {
            e = h("span"), e.textContent = "Positive", d(e, "class", "badge positive svelte-1ugndgv");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function qx(t) {
        let e, n = t[19].positiveDiseases.map(t[15]).join(", ") + "", r, s, o;
        function i(l, u) {
          return l[19].hasNotified ? R2 : N2;
        }
        let a = i(t), x = a(t);
        return {
          c() {
            e = h("div"), r = M(n), s = y(), x.c(), o = Pt(), d(e, "class", "diseases svelte-1ugndgv");
          },
          m(l, u) {
            T(l, e, u), c(e, r), T(l, s, u), x.m(l, u), T(l, o, u);
          },
          p(l, u) {
            u & 64 && n !== (n = l[19].positiveDiseases.map(l[15]).join(", ") + "") && V(r, n), a === (a = i(l)) && x ? x.p(l, u) : (x.d(1), x = a(l), x && (x.c(), x.m(o.parentNode, o)));
          },
          d(l) {
            l && (S(e), S(s), S(o)), x.d(l);
          }
        };
      }
      function N2(t) {
        let e, n, r, s, o = t[7] === t[20] ? "Notifying\u2026" : "Notify now", i, a, x;
        function l() {
          return t[16](t[20], t[19]);
        }
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "Partners not yet notified", r = y(), s = h("button"), i = M(o), d(n, "class", "not-notified svelte-1ugndgv"), d(s, "class", "btn-text-small svelte-1ugndgv"), s.disabled = t[3], d(e, "class", "notify-row svelte-1ugndgv");
          },
          m(u, f) {
            T(u, e, f), c(e, n), c(e, r), c(e, s), c(s, i), a || (x = G(s, "click", l), a = true);
          },
          p(u, f) {
            t = u, f & 192 && o !== (o = t[7] === t[20] ? "Notifying\u2026" : "Notify now") && V(i, o), f & 8 && (s.disabled = t[3]);
          },
          d(u) {
            u && S(e), a = false, x();
          }
        };
      }
      function R2(t) {
        let e;
        return {
          c() {
            e = h("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check</span>
                    Partners notified`, d(e, "class", "notified svelte-1ugndgv");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function zx(t) {
        let e, n, r = t[19].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", s, o, i, a, x, l = t[19].date + "", u, f, p, E;
        function m(D, b) {
          return D[19].positiveDiseases.length > 0 ? I2 : P2;
        }
        let C = m(t), B = C(t), A = t[19].positiveDiseases.length > 0 && qx(t);
        return {
          c() {
            e = h("li"), n = h("span"), s = M(r), o = y(), i = h("div"), a = h("div"), x = h("span"), u = M(l), f = y(), B.c(), p = y(), A && A.c(), E = y(), d(n, "class", "material-icons result-icon svelte-1ugndgv"), oe(n, "positive", t[19].positiveDiseases.length > 0), oe(n, "negative", t[19].positiveDiseases.length === 0), d(x, "class", "result-date svelte-1ugndgv"), d(a, "class", "result-row svelte-1ugndgv"), d(i, "class", "result-body svelte-1ugndgv"), d(e, "class", "svelte-1ugndgv");
          },
          m(D, b) {
            T(D, e, b), c(e, n), c(n, s), c(e, o), c(e, i), c(i, a), c(a, x), c(x, u), c(a, f), B.m(a, null), c(i, p), A && A.m(i, null), c(e, E);
          },
          p(D, b) {
            b & 64 && r !== (r = D[19].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && V(s, r), b & 64 && oe(n, "positive", D[19].positiveDiseases.length > 0), b & 64 && oe(n, "negative", D[19].positiveDiseases.length === 0), b & 64 && l !== (l = D[19].date + "") && V(u, l), C !== (C = m(D)) && (B.d(1), B = C(D), B && (B.c(), B.m(a, null))), D[19].positiveDiseases.length > 0 ? A ? A.p(D, b) : (A = qx(D), A.c(), A.m(i, null)) : A && (A.d(1), A = null);
          },
          d(D) {
            D && S(e), B.d(), A && A.d();
          }
        };
      }
      function L2(t) {
        let e, n, r, s, o, i, a, x, l = t[2] ? "close" : "add", u, f, p, E, m, C, B, A, D, b;
        e = new Ot({});
        function v(I, L) {
          if (I[4] === "done") return w2;
          if (I[4] === "done_negative") return y2;
          if (I[4] === "done_no_encounters") return k2;
        }
        let _ = v(t), g = _ && _(t), F = t[5] && Lx(t), k = t[2] && Mx(t);
        function w(I, L) {
          return I[6].length === 0 ? T2 : S2;
        }
        let P = w(t), N = P(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), s = h("div"), o = h("h1"), o.textContent = "Test Results", i = y(), a = h("button"), x = h("span"), u = M(l), p = y(), g && g.c(), E = y(), F && F.c(), m = y(), k && k.c(), C = y(), B = h("section"), N.c(), d(o, "class", "svelte-1ugndgv"), d(x, "class", "material-icons"), d(a, "class", "fab svelte-1ugndgv"), d(a, "title", f = t[2] ? "Cancel" : "Record new result"), d(s, "class", "page-header svelte-1ugndgv"), d(B, "class", "card list-card svelte-1ugndgv"), d(r, "class", "svelte-1ugndgv");
          },
          m(I, L) {
            Oe(e, I, L), T(I, n, L), T(I, r, L), c(r, s), c(s, o), c(s, i), c(s, a), c(a, x), c(x, u), c(r, p), g && g.m(r, null), c(r, E), F && F.m(r, null), c(r, m), k && k.m(r, null), c(r, C), c(r, B), N.m(B, null), A = true, D || (b = G(a, "click", t[10]), D = true);
          },
          p(I, [L]) {
            (!A || L & 4) && l !== (l = I[2] ? "close" : "add") && V(u, l), (!A || L & 4 && f !== (f = I[2] ? "Cancel" : "Record new result")) && d(a, "title", f), _ !== (_ = v(I)) && (g && g.d(1), g = _ && _(I), g && (g.c(), g.m(r, E))), I[5] ? F ? F.p(I, L) : (F = Lx(I), F.c(), F.m(r, m)) : F && (F.d(1), F = null), I[2] ? k ? k.p(I, L) : (k = Mx(I), k.c(), k.m(r, C)) : k && (k.d(1), k = null), P === (P = w(I)) && N ? N.p(I, L) : (N.d(1), N = P(I), N && (N.c(), N.m(B, null)));
          },
          i(I) {
            A || (Ce(e.$$.fragment, I), A = true);
          },
          o(I) {
            Ae(e.$$.fragment, I), A = false;
          },
          d(I) {
            I && (S(n), S(r)), He(e, I), g && g.d(), F && F.d(), k && k.d(), N.d(), D = false, b();
          }
        };
      }
      const M2 = 20, Ux = 50, O2 = 100;
      function H2(t, e, n) {
        let r = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), s = {}, o = false, i = false, a = null, x = null, l = [], u = null;
        st(() => {
          if (!ut()) {
            Ee("/login");
            return;
          }
          n(6, l = qr());
        });
        async function f(g, F, k, w) {
          const P = Ux + Math.floor(Math.random() * (O2 - Ux + 1)), N = [
            ...g
          ];
          for (; N.length < P; ) N.push(cr(32));
          for (let re = N.length - 1; re > 0; re--) {
            const he = Math.floor(Math.random() * (re + 1));
            [N[re], N[he]] = [
              N[he],
              N[re]
            ];
          }
          const I = N.map((re) => xn(re)), L = Lo(F), R = k.replace(/-/g, ""), O = w.map((re) => cd[re] ?? re).join(""), W = new TextEncoder().encode("1" + R + O), H = xn(ur(L, W)), q = new TextEncoder(), X = JSON.stringify(I), j = q.encode(X).length + q.encode(H).length, U = new Uint8Array(j), z = q.encode(X), K = q.encode(H);
          U.set(z, 0), U.set(K, z.length);
          const Y = vm(U);
          let se = M2, ce = (/* @__PURE__ */ new Date()).toISOString();
          for (let re = 0; re < 2; re++) {
            const { counter: he } = bm(ce, Y, se), Be = {
              tokens: I,
              created_at: ce,
              submission_type: "self_reported",
              encrypted_payload: H,
              pow_counter: he
            };
            try {
              await r7(Be);
              return;
            } catch (Te) {
              if (re === 0 && Te instanceof td && Te.statusCode === 400) {
                let $ = false;
                if (Te.powDifficulty !== null && Te.powDifficulty > se && (se = Te.powDifficulty, $ = true), Te.serverTime !== null && (ce = Te.serverTime, $ = true), $) continue;
              }
              throw Te;
            }
          }
        }
        async function p(g, F) {
          const k = wt(), w = wn(), P = [
            ...k.encounters.map((N) => yn(N.rawToken, N.theirContactId, N.submitIndex)),
            ...(k.relationships || []).map((N) => yn(N.rawToken, N.theirContactId, N.submitIndex))
          ];
          P.length > 0 && await f(P, w, g, F);
          for (const N of k.groupEncounters || []) await f([
            t0(N.token, N.tokenIndex)
          ], N.hostContactId, g, F);
          await b7();
        }
        async function E() {
          if (!i) {
            n(3, i = true), n(5, x = null), n(4, a = null);
            try {
              const g = Lt.filter((F) => s[F]);
              if (g.length > 0) {
                const F = wt();
                if (F.encounters.length > 0 || (F.relationships || []).length > 0 || (F.groupEncounters || []).length > 0) {
                  const w = await no(r, g);
                  n(4, a = "computing"), await new Promise((P) => setTimeout(P, 30)), await p(r, g), await ox(w), n(4, a = "done");
                } else await no(r, g, true), n(4, a = "done_no_encounters");
              } else await no(r, g), n(4, a = "done_negative");
              n(1, s = {}), n(0, r = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), n(6, l = qr()), n(2, o = false);
            } catch (g) {
              n(5, x = g.message), n(4, a = null);
            } finally {
              n(3, i = false);
            }
          }
        }
        async function m(g, F) {
          if (!i) {
            n(3, i = true), n(7, u = g), n(5, x = null);
            try {
              const k = wt();
              if (k.encounters.length === 0 && (k.relationships || []).length === 0 && (k.groupEncounters || []).length === 0) {
                n(5, x = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((w) => setTimeout(w, 30)), await p(F.date, F.positiveDiseases), await ox(g), n(6, l = qr());
            } catch (k) {
              n(5, x = "Notification failed: " + k.message);
            } finally {
              n(3, i = false), n(7, u = null);
            }
          }
        }
        const C = () => {
          n(2, o = !o), n(5, x = null), n(4, a = null);
        };
        function B() {
          r = this.value, n(0, r);
        }
        function A(g) {
          s[g] = this.checked, n(1, s);
        }
        return [
          r,
          s,
          o,
          i,
          a,
          x,
          l,
          u,
          E,
          m,
          C,
          B,
          A,
          () => {
            n(2, o = false), n(4, a = null), n(5, x = null);
          },
          () => n(2, o = true),
          (g) => T0[g] ?? g,
          (g, F) => m(g, F)
        ];
      }
      class q2 extends Se {
        constructor(e) {
          super(), we(this, e, H2, L2, ke, {});
        }
      }
      function jx(t) {
        let e;
        return {
          c() {
            e = h("div"), e.innerHTML = `<span class="material-icons svelte-f77wfc">check_circle</span>
      Password changed successfully.`, d(e, "class", "success-banner svelte-f77wfc");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Gx(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[4]), d(e, "class", "error svelte-f77wfc");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s & 16 && V(n, r[4]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function z2(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A, D, b, v, _, g = t[3] ? "Changing password\u2026" : "Change password", F, k, w, P, N, I = t[5] && jx(), L = t[4] && Gx(t);
        return {
          c() {
            e = h("main"), n = h("a"), n.innerHTML = `<span class="material-icons svelte-f77wfc">arrow_back</span>
    Back`, r = y(), s = h("h1"), s.textContent = "Change password", o = y(), I && I.c(), i = y(), a = h("form"), x = h("label"), l = M(`Current password
      `), u = h("input"), f = y(), p = h("label"), E = M(`New password
      `), m = h("input"), C = y(), B = h("label"), A = M(`Confirm new password
      `), D = h("input"), b = y(), L && L.c(), v = y(), _ = h("button"), F = M(g), k = y(), w = h("p"), w.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, d(n, "href", "#/home"), d(n, "class", "back-link svelte-f77wfc"), d(s, "class", "svelte-f77wfc"), d(u, "type", "password"), u.required = true, d(u, "autocomplete", "current-password"), d(u, "class", "svelte-f77wfc"), d(x, "class", "svelte-f77wfc"), d(m, "type", "password"), m.required = true, d(m, "autocomplete", "new-password"), d(m, "minlength", "12"), d(m, "class", "svelte-f77wfc"), d(p, "class", "svelte-f77wfc"), d(D, "type", "password"), D.required = true, d(D, "autocomplete", "new-password"), d(D, "class", "svelte-f77wfc"), d(B, "class", "svelte-f77wfc"), d(_, "type", "submit"), _.disabled = t[3], d(_, "class", "svelte-f77wfc"), d(a, "class", "svelte-f77wfc"), d(w, "class", "privacy-note svelte-f77wfc"), d(e, "class", "svelte-f77wfc");
          },
          m(R, O) {
            T(R, e, O), c(e, n), c(e, r), c(e, s), c(e, o), I && I.m(e, null), c(e, i), c(e, a), c(a, x), c(x, l), c(x, u), xe(u, t[0]), c(a, f), c(a, p), c(p, E), c(p, m), xe(m, t[1]), c(a, C), c(a, B), c(B, A), c(B, D), xe(D, t[2]), c(a, b), L && L.m(a, null), c(a, v), c(a, _), c(_, F), c(e, k), c(e, w), P || (N = [
              G(u, "input", t[7]),
              G(m, "input", t[8]),
              G(D, "input", t[9]),
              G(a, "submit", tn(t[6]))
            ], P = true);
          },
          p(R, [O]) {
            R[5] ? I || (I = jx(), I.c(), I.m(e, i)) : I && (I.d(1), I = null), O & 1 && u.value !== R[0] && xe(u, R[0]), O & 2 && m.value !== R[1] && xe(m, R[1]), O & 4 && D.value !== R[2] && xe(D, R[2]), R[4] ? L ? L.p(R, O) : (L = Gx(R), L.c(), L.m(a, v)) : L && (L.d(1), L = null), O & 8 && g !== (g = R[3] ? "Changing password\u2026" : "Change password") && V(F, g), O & 8 && (_.disabled = R[3]);
          },
          i: Z,
          o: Z,
          d(R) {
            R && S(e), I && I.d(), L && L.d(), P = false, ue(N);
          }
        };
      }
      function U2(t, e, n) {
        let r = "", s = "", o = "", i = false, a = null, x = false;
        st(() => {
          ut() || Ee("/login");
        });
        async function l() {
          if (n(4, a = null), n(5, x = false), s !== o) {
            n(4, a = "New passwords do not match");
            return;
          }
          if (s.length < 12) {
            n(4, a = "New password must be at least 12 characters");
            return;
          }
          if (s === r) {
            n(4, a = "New password must differ from the current password");
            return;
          }
          n(3, i = true);
          try {
            const E = Hr(), { challenge: m, auth_salt: C, enc_salt: B } = await vi(E), A = await Gt(r, nt(B)), D = Mn();
            if (!D || A.length !== D.length || !A.every((N, I) => N === D[I])) {
              n(4, a = "Current password is incorrect");
              return;
            }
            const b = await Gt(r, nt(C)), v = Zu(new TextEncoder().encode(m), b), _ = xn(v), g = await Gt(s, nt(C)), F = await Gt(s, nt(B)), k = ne(Qu(g)), { blobHex: w, blobVersion: P } = M7(F);
            await $m(_, k, w, P), Di(F), L7(P + 1), n(5, x = true), n(0, r = ""), n(1, s = ""), n(2, o = "");
          } catch (E) {
            n(4, a = E.message);
          } finally {
            n(3, i = false);
          }
        }
        function u() {
          r = this.value, n(0, r);
        }
        function f() {
          s = this.value, n(1, s);
        }
        function p() {
          o = this.value, n(2, o);
        }
        return [
          r,
          s,
          o,
          i,
          a,
          x,
          l,
          u,
          f,
          p
        ];
      }
      class j2 extends Se {
        constructor(e) {
          super(), we(this, e, U2, z2, ke, {});
        }
      }
      function G2(t) {
        let e, n, r, s, o, i, a, x, l, u = t[2] ? "Sending\u2026" : "Send verification link", f, p, E, m, C = t[0] && Wx(t), B = t[3] && Vx(t);
        return {
          c() {
            e = h("div"), C && C.c(), n = y(), r = h("form"), s = h("label"), o = M(`New email address
          `), i = h("input"), a = y(), B && B.c(), x = y(), l = h("button"), f = M(u), d(i, "type", "email"), i.required = true, d(i, "autocomplete", "email"), d(i, "placeholder", "you@example.com"), d(i, "class", "svelte-r6hw3y"), d(s, "class", "svelte-r6hw3y"), d(l, "type", "submit"), l.disabled = p = t[2] || !t[1], d(l, "class", "svelte-r6hw3y"), d(r, "class", "svelte-r6hw3y"), d(e, "class", "card svelte-r6hw3y");
          },
          m(A, D) {
            T(A, e, D), C && C.m(e, null), c(e, n), c(e, r), c(r, s), c(s, o), c(s, i), xe(i, t[1]), c(r, a), B && B.m(r, null), c(r, x), c(r, l), c(l, f), E || (m = [
              G(i, "input", t[6]),
              G(r, "submit", tn(t[5]))
            ], E = true);
          },
          p(A, D) {
            A[0] ? C ? C.p(A, D) : (C = Wx(A), C.c(), C.m(e, n)) : C && (C.d(1), C = null), D & 2 && i.value !== A[1] && xe(i, A[1]), A[3] ? B ? B.p(A, D) : (B = Vx(A), B.c(), B.m(r, x)) : B && (B.d(1), B = null), D & 4 && u !== (u = A[2] ? "Sending\u2026" : "Send verification link") && V(f, u), D & 6 && p !== (p = A[2] || !A[1]) && (l.disabled = p);
          },
          d(A) {
            A && S(e), C && C.d(), B && B.d(), E = false, ue(m);
          }
        };
      }
      function W2(t) {
        let e, n, r, s, o, i, a, x, l, u;
        return {
          c() {
            e = h("div"), n = h("div"), n.innerHTML = '<span class="material-icons success-icon svelte-r6hw3y">mark_email_read</span> <h2 class="svelte-r6hw3y">Check your inbox</h2>', r = y(), s = h("p"), o = M("We've sent a verification link to "), i = h("strong"), a = M(t[4]), x = M(`.
        Click the link to confirm the change. Your email won't update until you verify it.`), l = y(), u = h("a"), u.textContent = "Done", d(n, "class", "success-row svelte-r6hw3y"), d(s, "class", "hint svelte-r6hw3y"), d(u, "href", "#/settings"), d(u, "class", "btn-primary svelte-r6hw3y"), d(e, "class", "card svelte-r6hw3y");
          },
          m(f, p) {
            T(f, e, p), c(e, n), c(e, r), c(e, s), c(s, o), c(s, i), c(i, a), c(s, x), c(e, l), c(e, u);
          },
          p(f, p) {
            p & 16 && V(a, f[4]);
          },
          d(f) {
            f && S(e);
          }
        };
      }
      function Wx(t) {
        let e, n, r, s;
        return {
          c() {
            e = h("p"), n = M("Current email: "), r = h("strong"), s = M(t[0]), d(e, "class", "current-email svelte-r6hw3y");
          },
          m(o, i) {
            T(o, e, i), c(e, n), c(e, r), c(r, s);
          },
          p(o, i) {
            i & 1 && V(s, o[0]);
          },
          d(o) {
            o && S(e);
          }
        };
      }
      function Vx(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[3]), d(e, "class", "error svelte-r6hw3y");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s & 8 && V(n, r[3]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function V2(t) {
        let e, n, r, s, o;
        function i(l, u) {
          return l[4] ? W2 : G2;
        }
        let a = i(t), x = a(t);
        return {
          c() {
            e = h("main"), n = h("a"), n.innerHTML = `<span class="material-icons svelte-r6hw3y">arrow_back</span>
    Back to settings`, r = y(), s = h("h1"), s.textContent = "Change email", o = y(), x.c(), d(n, "href", "#/settings"), d(n, "class", "back-link svelte-r6hw3y"), d(s, "class", "svelte-r6hw3y"), d(e, "class", "svelte-r6hw3y");
          },
          m(l, u) {
            T(l, e, u), c(e, n), c(e, r), c(e, s), c(e, o), x.m(e, null);
          },
          p(l, [u]) {
            a === (a = i(l)) && x ? x.p(l, u) : (x.d(1), x = a(l), x && (x.c(), x.m(e, null)));
          },
          i: Z,
          o: Z,
          d(l) {
            l && S(e), x.d();
          }
        };
      }
      function Y2(t, e, n) {
        let r;
        it(t, ys, (f) => n(7, r = f));
        let s = "", o = "", i = false, a = null, x = null;
        st(() => {
          if (!ut()) {
            Ee("/login");
            return;
          }
          n(0, s = r ?? "");
        });
        async function l() {
          n(3, a = null), n(2, i = true);
          try {
            await zm(o), n(4, x = o);
          } catch (f) {
            n(3, a = f.message);
          } finally {
            n(2, i = false);
          }
        }
        function u() {
          o = this.value, n(1, o);
        }
        return [
          s,
          o,
          i,
          a,
          x,
          l,
          u
        ];
      }
      class K2 extends Se {
        constructor(e) {
          super(), we(this, e, Y2, V2, ke, {});
        }
      }
      function J2(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p;
        return {
          c() {
            e = h("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">error_outline</span>', n = y(), r = h("h1"), r.textContent = "Verification failed", s = y(), o = h("p"), i = M(t[1]), a = y(), x = h("p"), x.textContent = "The link may have expired or already been used. You can request a new one from your account settings.", l = y(), u = h("button"), u.textContent = "Go to Login", d(e, "class", "icon-wrap error svelte-1wqqdyg"), d(r, "class", "svelte-1wqqdyg"), d(o, "class", "message error svelte-1wqqdyg"), d(x, "class", "hint svelte-1wqqdyg"), d(u, "class", "btn-primary svelte-1wqqdyg");
          },
          m(E, m) {
            T(E, e, m), T(E, n, m), T(E, r, m), T(E, s, m), T(E, o, m), c(o, i), T(E, a, m), T(E, x, m), T(E, l, m), T(E, u, m), f || (p = G(u, "click", t[4]), f = true);
          },
          p(E, m) {
            m & 2 && V(i, E[1]);
          },
          d(E) {
            E && (S(e), S(n), S(r), S(s), S(o), S(a), S(x), S(l), S(u)), f = false, p();
          }
        };
      }
      function X2(t) {
        let e, n, r, s, o, i, a, x, l;
        return {
          c() {
            e = h("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">check_circle</span>', n = y(), r = h("h1"), r.textContent = "Email verified", s = y(), o = h("p"), o.textContent = "Your email address has been verified successfully.", i = y(), a = h("button"), a.textContent = "Go to Login", d(e, "class", "icon-wrap success svelte-1wqqdyg"), d(r, "class", "svelte-1wqqdyg"), d(o, "class", "message svelte-1wqqdyg"), d(a, "class", "btn-primary svelte-1wqqdyg");
          },
          m(u, f) {
            T(u, e, f), T(u, n, f), T(u, r, f), T(u, s, f), T(u, o, f), T(u, i, f), T(u, a, f), x || (l = G(a, "click", t[3]), x = true);
          },
          p: Z,
          d(u) {
            u && (S(e), S(n), S(r), S(s), S(o), S(i), S(a)), x = false, l();
          }
        };
      }
      function Q2(t) {
        let e, n, r;
        return {
          c() {
            e = h("div"), e.innerHTML = '<span class="material-icons spinning svelte-1wqqdyg">sync</span>', n = y(), r = h("p"), r.textContent = "Verifying your email\u2026", d(e, "class", "icon-wrap svelte-1wqqdyg"), d(r, "class", "message svelte-1wqqdyg");
          },
          m(s, o) {
            T(s, e, o), T(s, n, o), T(s, r, o);
          },
          p: Z,
          d(s) {
            s && (S(e), S(n), S(r));
          }
        };
      }
      function Z2(t) {
        let e;
        function n(o, i) {
          return o[0] === "verifying" ? Q2 : o[0] === "success" ? X2 : J2;
        }
        let r = n(t), s = r(t);
        return {
          c() {
            e = h("main"), s.c(), d(e, "class", "svelte-1wqqdyg");
          },
          m(o, i) {
            T(o, e, i), s.m(e, null);
          },
          p(o, [i]) {
            r === (r = n(o)) && s ? s.p(o, i) : (s.d(1), s = r(o), s && (s.c(), s.m(e, null)));
          },
          i: Z,
          o: Z,
          d(o) {
            o && S(e), s.d();
          }
        };
      }
      function $2(t, e, n) {
        let { params: r = {} } = e, s = "verifying", o = null;
        st(async () => {
          const x = r.token;
          if (!x) {
            n(1, o = "No verification token found in link."), n(0, s = "error");
            return;
          }
          try {
            await jm(x), n(0, s = "success");
          } catch (l) {
            n(1, o = l.message), n(0, s = "error");
          }
        });
        const i = () => Ee("/login"), a = () => Ee("/login");
        return t.$$set = (x) => {
          "params" in x && n(2, r = x.params);
        }, [
          s,
          o,
          r,
          i,
          a
        ];
      }
      class eh extends Se {
        constructor(e) {
          super(), we(this, e, $2, Z2, ke, {
            params: 2
          });
        }
      }
      function Yx(t, e, n) {
        const r = t.slice();
        r[8] = e[n], r[11] = n;
        const s = r[0].length - 1 - r[11];
        return r[9] = s, r;
      }
      function th(t) {
        let e, n = ve([
          ...t[0]
        ].reverse()), r = [];
        for (let s = 0; s < n.length; s += 1) r[s] = Qx(Yx(t, n, s));
        return {
          c() {
            e = h("ul");
            for (let s = 0; s < r.length; s += 1) r[s].c();
            d(e, "class", "svelte-l1q7u6");
          },
          m(s, o) {
            T(s, e, o);
            for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(e, null);
          },
          p(s, o) {
            if (o & 9) {
              n = ve([
                ...s[0]
              ].reverse());
              let i;
              for (i = 0; i < n.length; i += 1) {
                const a = Yx(s, n, i);
                r[i] ? r[i].p(a, o) : (r[i] = Qx(a), r[i].c(), r[i].m(e, null));
              }
              for (; i < r.length; i += 1) r[i].d(1);
              r.length = n.length;
            }
          },
          d(s) {
            s && S(e), vt(r, s);
          }
        };
      }
      function nh(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "No notifications received yet.", d(e, "class", "muted svelte-l1q7u6");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function Kx(t) {
        let e;
        function n(o, i) {
          return o[8].labVerified ? sh : rh;
        }
        let r = n(t), s = r(t);
        return {
          c() {
            e = h("div"), s.c(), d(e, "class", "alert-message svelte-l1q7u6");
          },
          m(o, i) {
            T(o, e, i), s.m(e, null);
          },
          p(o, i) {
            r === (r = n(o)) && s ? s.p(o, i) : (s.d(1), s = r(o), s && (s.c(), s.m(e, null)));
          },
          d(o) {
            o && S(e), s.d();
          }
        };
      }
      function rh(t) {
        let e, n = t[8].diseases.map(t[5]).join(", ") + "", r, s;
        return {
          c() {
            e = M("Someone you've interacted with reported testing positive for "), r = M(n), s = M(".");
          },
          m(o, i) {
            T(o, e, i), T(o, r, i), T(o, s, i);
          },
          p(o, i) {
            i & 1 && n !== (n = o[8].diseases.map(o[5]).join(", ") + "") && V(r, n);
          },
          d(o) {
            o && (S(e), S(r), S(s));
          }
        };
      }
      function sh(t) {
        let e, n = t[8].diseases.map(t[4]).join(", ") + "", r, s;
        return {
          c() {
            e = M("Someone you've interacted with has tested positive for "), r = M(n), s = M(".");
          },
          m(o, i) {
            T(o, e, i), T(o, r, i), T(o, s, i);
          },
          p(o, i) {
            i & 1 && n !== (n = o[8].diseases.map(o[4]).join(", ") + "") && V(r, n);
          },
          d(o) {
            o && (S(e), S(r), S(s));
          }
        };
      }
      function Jx(t) {
        let e;
        return {
          c() {
            e = h("div"), e.textContent = "This result is self-reported.", d(e, "class", "unverified-note svelte-l1q7u6");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Xx(t) {
        let e, n, r;
        function s() {
          return t[7](t[9]);
        }
        return {
          c() {
            e = h("button"), e.textContent = "Mark viewed", d(e, "class", "btn-text svelte-l1q7u6");
          },
          m(o, i) {
            T(o, e, i), n || (r = G(e, "click", s), n = true);
          },
          p(o, i) {
            t = o;
          },
          d(o) {
            o && S(e), n = false, r();
          }
        };
      }
      function Qx(t) {
        let e, n, r, s, o = t[8].labVerified ? "warning_amber" : "info_outline", i, a, x, l, u, f, p, E, m, C = Zx(t[8].testDate) + "", B, A, D, b, v, _, g = (t[8].diseases.length > 0 ? t[8].diseases.map(t[6]).join(", ") : "the relevant STI") + "", F, k, w, P, N = t[8].diseases.length > 0 && Kx(t), I = !t[8].labVerified && Jx(), L = !t[8].viewed && Xx(t);
        return {
          c() {
            e = h("li"), n = h("div"), r = h("div"), s = h("span"), i = M(o), a = y(), x = h("div"), l = h("div"), l.textContent = "Health alert", u = y(), N && N.c(), f = y(), p = h("div"), E = M("Their sample was taken around "), m = h("strong"), B = M(C), A = M("."), D = y(), I && I.c(), b = y(), v = h("div"), _ = M("Get tested for "), F = M(g), k = M(". Ask for a full STI panel."), w = y(), L && L.c(), P = y(), d(s, "class", "material-icons alert-icon svelte-l1q7u6"), oe(s, "verified", t[8].labVerified), oe(s, "unverified", !t[8].labVerified), d(l, "class", "alert-title svelte-l1q7u6"), oe(l, "verified", t[8].labVerified), oe(l, "unverified", !t[8].labVerified), d(p, "class", "alert-dates svelte-l1q7u6"), d(v, "class", "get-tested svelte-l1q7u6"), d(r, "class", "alert-meta svelte-l1q7u6"), d(n, "class", "alert-body svelte-l1q7u6"), d(e, "class", "svelte-l1q7u6"), oe(e, "unviewed", !t[8].viewed);
          },
          m(R, O) {
            T(R, e, O), c(e, n), c(n, r), c(r, s), c(s, i), c(r, a), c(r, x), c(x, l), c(x, u), N && N.m(x, null), c(x, f), c(x, p), c(p, E), c(p, m), c(m, B), c(p, A), c(x, D), I && I.m(x, null), c(x, b), c(x, v), c(v, _), c(v, F), c(v, k), c(n, w), L && L.m(n, null), c(e, P);
          },
          p(R, O) {
            O & 1 && o !== (o = R[8].labVerified ? "warning_amber" : "info_outline") && V(i, o), O & 1 && oe(s, "verified", R[8].labVerified), O & 1 && oe(s, "unverified", !R[8].labVerified), O & 1 && oe(l, "verified", R[8].labVerified), O & 1 && oe(l, "unverified", !R[8].labVerified), R[8].diseases.length > 0 ? N ? N.p(R, O) : (N = Kx(R), N.c(), N.m(x, f)) : N && (N.d(1), N = null), O & 1 && C !== (C = Zx(R[8].testDate) + "") && V(B, C), R[8].labVerified ? I && (I.d(1), I = null) : I || (I = Jx(), I.c(), I.m(x, b)), O & 1 && g !== (g = (R[8].diseases.length > 0 ? R[8].diseases.map(R[6]).join(", ") : "the relevant STI") + "") && V(F, g), R[8].viewed ? L && (L.d(1), L = null) : L ? L.p(R, O) : (L = Xx(R), L.c(), L.m(n, null)), O & 1 && oe(e, "unviewed", !R[8].viewed);
          },
          d(R) {
            R && S(e), N && N.d(), I && I.d(), L && L.d();
          }
        };
      }
      function oh(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p = t[1] ? "hourglass_empty" : "refresh", E, m, C = t[1] ? "Checking\u2026" : "Check now", B, A, D, b, v, _, g;
        e = new Ot({});
        function F(P, N) {
          return P[0].length === 0 && !P[1] ? nh : th;
        }
        let k = F(t), w = k(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), s = h("div"), s.innerHTML = '<h1 class="svelte-l1q7u6">Alerts</h1>', o = y(), i = h("section"), a = h("div"), x = h("h2"), x.textContent = "Notification history", l = y(), u = h("button"), f = h("span"), E = M(p), m = y(), B = M(C), A = y(), w.c(), D = y(), b = h("p"), b.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, d(s, "class", "page-header svelte-l1q7u6"), d(x, "class", "svelte-l1q7u6"), d(f, "class", "material-icons svelte-l1q7u6"), d(u, "class", "btn-refresh svelte-l1q7u6"), u.disabled = t[1], d(a, "class", "card-header svelte-l1q7u6"), d(i, "class", "card svelte-l1q7u6"), d(b, "class", "privacy-note svelte-l1q7u6"), d(r, "class", "svelte-l1q7u6");
          },
          m(P, N) {
            Oe(e, P, N), T(P, n, N), T(P, r, N), c(r, s), c(r, o), c(r, i), c(i, a), c(a, x), c(a, l), c(a, u), c(u, f), c(f, E), c(u, m), c(u, B), c(i, A), w.m(i, null), c(r, D), c(r, b), v = true, _ || (g = G(u, "click", t[2]), _ = true);
          },
          p(P, [N]) {
            (!v || N & 2) && p !== (p = P[1] ? "hourglass_empty" : "refresh") && V(E, p), (!v || N & 2) && C !== (C = P[1] ? "Checking\u2026" : "Check now") && V(B, C), (!v || N & 2) && (u.disabled = P[1]), k === (k = F(P)) && w ? w.p(P, N) : (w.d(1), w = k(P), w && (w.c(), w.m(i, null)));
          },
          i(P) {
            v || (Ce(e.$$.fragment, P), v = true);
          },
          o(P) {
            Ae(e.$$.fragment, P), v = false;
          },
          d(P) {
            P && (S(n), S(r)), He(e, P), w.d(), _ = false, g();
          }
        };
      }
      function Zx(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function ih(t, e, n) {
        let r = [], s = false;
        st(() => {
          if (!ut()) {
            H7("/alerts"), Ee("/login");
            return;
          }
          n(0, r = to());
        });
        async function o() {
          n(1, s = true);
          try {
            await hd();
          } catch {
          } finally {
            n(0, r = to()), n(1, s = false);
          }
        }
        async function i(f) {
          await w7(f), n(0, r = to());
        }
        return [
          r,
          s,
          o,
          i,
          (f) => T0[f] ?? f,
          (f) => T0[f] ?? f,
          (f) => T0[f] ?? f,
          (f) => i(f)
        ];
      }
      class ah extends Se {
        constructor(e) {
          super(), we(this, e, ih, oh, ke, {});
        }
      }
      var xh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function lh(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
      }
      var Gn = {}, ch = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
      }, Cd = {}, gt = {};
      let Ni;
      const uh = [
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
      gt.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17;
      };
      gt.getSymbolTotalCodewords = function(e) {
        return uh[e];
      };
      gt.getBCHDigit = function(t) {
        let e = 0;
        for (; t !== 0; ) e++, t >>>= 1;
        return e;
      };
      gt.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        Ni = e;
      };
      gt.isKanjiModeEnabled = function() {
        return typeof Ni < "u";
      };
      gt.toSJIS = function(e) {
        return Ni(e);
      };
      var Ps = {};
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
        function e(n) {
          if (typeof n != "string") throw new Error("Param is not a string");
          switch (n.toLowerCase()) {
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
              throw new Error("Unknown EC Level: " + n);
          }
        }
        t.isValid = function(r) {
          return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
        }, t.from = function(r, s) {
          if (t.isValid(r)) return r;
          try {
            return e(r);
          } catch {
            return s;
          }
        };
      })(Ps);
      function Bd() {
        this.buffer = [], this.length = 0;
      }
      Bd.prototype = {
        get: function(t) {
          const e = Math.floor(t / 8);
          return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
        },
        put: function(t, e) {
          for (let n = 0; n < e; n++) this.putBit((t >>> e - n - 1 & 1) === 1);
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(t) {
          const e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
        }
      };
      var dh = Bd;
      function fr(t) {
        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
      }
      fr.prototype.set = function(t, e, n, r) {
        const s = t * this.size + e;
        this.data[s] = n, r && (this.reservedBit[s] = true);
      };
      fr.prototype.get = function(t, e) {
        return this.data[t * this.size + e];
      };
      fr.prototype.xor = function(t, e, n) {
        this.data[t * this.size + e] ^= n;
      };
      fr.prototype.isReserved = function(t, e) {
        return this.reservedBit[t * this.size + e];
      };
      var fh = fr, gd = {};
      (function(t) {
        const e = gt.getSymbolSize;
        t.getRowColCoords = function(r) {
          if (r === 1) return [];
          const s = Math.floor(r / 7) + 2, o = e(r), i = o === 145 ? 26 : Math.ceil((o - 13) / (2 * s - 2)) * 2, a = [
            o - 7
          ];
          for (let x = 1; x < s - 1; x++) a[x] = a[x - 1] - i;
          return a.push(6), a.reverse();
        }, t.getPositions = function(r) {
          const s = [], o = t.getRowColCoords(r), i = o.length;
          for (let a = 0; a < i; a++) for (let x = 0; x < i; x++) a === 0 && x === 0 || a === 0 && x === i - 1 || a === i - 1 && x === 0 || s.push([
            o[a],
            o[x]
          ]);
          return s;
        };
      })(gd);
      var _d = {};
      const Eh = gt.getSymbolSize, $x = 7;
      _d.getPositions = function(e) {
        const n = Eh(e);
        return [
          [
            0,
            0
          ],
          [
            n - $x,
            0
          ],
          [
            0,
            n - $x
          ]
        ];
      };
      var Ad = {};
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
        t.isValid = function(s) {
          return s != null && s !== "" && !isNaN(s) && s >= 0 && s <= 7;
        }, t.from = function(s) {
          return t.isValid(s) ? parseInt(s, 10) : void 0;
        }, t.getPenaltyN1 = function(s) {
          const o = s.size;
          let i = 0, a = 0, x = 0, l = null, u = null;
          for (let f = 0; f < o; f++) {
            a = x = 0, l = u = null;
            for (let p = 0; p < o; p++) {
              let E = s.get(f, p);
              E === l ? a++ : (a >= 5 && (i += e.N1 + (a - 5)), l = E, a = 1), E = s.get(p, f), E === u ? x++ : (x >= 5 && (i += e.N1 + (x - 5)), u = E, x = 1);
            }
            a >= 5 && (i += e.N1 + (a - 5)), x >= 5 && (i += e.N1 + (x - 5));
          }
          return i;
        }, t.getPenaltyN2 = function(s) {
          const o = s.size;
          let i = 0;
          for (let a = 0; a < o - 1; a++) for (let x = 0; x < o - 1; x++) {
            const l = s.get(a, x) + s.get(a, x + 1) + s.get(a + 1, x) + s.get(a + 1, x + 1);
            (l === 4 || l === 0) && i++;
          }
          return i * e.N2;
        }, t.getPenaltyN3 = function(s) {
          const o = s.size;
          let i = 0, a = 0, x = 0;
          for (let l = 0; l < o; l++) {
            a = x = 0;
            for (let u = 0; u < o; u++) a = a << 1 & 2047 | s.get(l, u), u >= 10 && (a === 1488 || a === 93) && i++, x = x << 1 & 2047 | s.get(u, l), u >= 10 && (x === 1488 || x === 93) && i++;
          }
          return i * e.N3;
        }, t.getPenaltyN4 = function(s) {
          let o = 0;
          const i = s.data.length;
          for (let x = 0; x < i; x++) o += s.data[x];
          return Math.abs(Math.ceil(o * 100 / i / 5) - 10) * e.N4;
        };
        function n(r, s, o) {
          switch (r) {
            case t.Patterns.PATTERN000:
              return (s + o) % 2 === 0;
            case t.Patterns.PATTERN001:
              return s % 2 === 0;
            case t.Patterns.PATTERN010:
              return o % 3 === 0;
            case t.Patterns.PATTERN011:
              return (s + o) % 3 === 0;
            case t.Patterns.PATTERN100:
              return (Math.floor(s / 2) + Math.floor(o / 3)) % 2 === 0;
            case t.Patterns.PATTERN101:
              return s * o % 2 + s * o % 3 === 0;
            case t.Patterns.PATTERN110:
              return (s * o % 2 + s * o % 3) % 2 === 0;
            case t.Patterns.PATTERN111:
              return (s * o % 3 + (s + o) % 2) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + r);
          }
        }
        t.applyMask = function(s, o) {
          const i = o.size;
          for (let a = 0; a < i; a++) for (let x = 0; x < i; x++) o.isReserved(x, a) || o.xor(x, a, n(s, x, a));
        }, t.getBestMask = function(s, o) {
          const i = Object.keys(t.Patterns).length;
          let a = 0, x = 1 / 0;
          for (let l = 0; l < i; l++) {
            o(l), t.applyMask(l, s);
            const u = t.getPenaltyN1(s) + t.getPenaltyN2(s) + t.getPenaltyN3(s) + t.getPenaltyN4(s);
            t.applyMask(l, s), u < x && (x = u, a = l);
          }
          return a;
        };
      })(Ad);
      var Is = {};
      const ln = Ps, br = [
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
      ], kr = [
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
      Is.getBlocksCount = function(e, n) {
        switch (n) {
          case ln.L:
            return br[(e - 1) * 4 + 0];
          case ln.M:
            return br[(e - 1) * 4 + 1];
          case ln.Q:
            return br[(e - 1) * 4 + 2];
          case ln.H:
            return br[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      Is.getTotalCodewordsCount = function(e, n) {
        switch (n) {
          case ln.L:
            return kr[(e - 1) * 4 + 0];
          case ln.M:
            return kr[(e - 1) * 4 + 1];
          case ln.Q:
            return kr[(e - 1) * 4 + 2];
          case ln.H:
            return kr[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      var Fd = {}, Ns = {};
      const P0 = new Uint8Array(512), cs = new Uint8Array(256);
      (function() {
        let e = 1;
        for (let n = 0; n < 255; n++) P0[n] = e, cs[e] = n, e <<= 1, e & 256 && (e ^= 285);
        for (let n = 255; n < 512; n++) P0[n] = P0[n - 255];
      })();
      Ns.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return cs[e];
      };
      Ns.exp = function(e) {
        return P0[e];
      };
      Ns.mul = function(e, n) {
        return e === 0 || n === 0 ? 0 : P0[cs[e] + cs[n]];
      };
      (function(t) {
        const e = Ns;
        t.mul = function(r, s) {
          const o = new Uint8Array(r.length + s.length - 1);
          for (let i = 0; i < r.length; i++) for (let a = 0; a < s.length; a++) o[i + a] ^= e.mul(r[i], s[a]);
          return o;
        }, t.mod = function(r, s) {
          let o = new Uint8Array(r);
          for (; o.length - s.length >= 0; ) {
            const i = o[0];
            for (let x = 0; x < s.length; x++) o[x] ^= e.mul(s[x], i);
            let a = 0;
            for (; a < o.length && o[a] === 0; ) a++;
            o = o.slice(a);
          }
          return o;
        }, t.generateECPolynomial = function(r) {
          let s = new Uint8Array([
            1
          ]);
          for (let o = 0; o < r; o++) s = t.mul(s, new Uint8Array([
            1,
            e.exp(o)
          ]));
          return s;
        };
      })(Fd);
      const Dd = Fd;
      function Ri(t) {
        this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
      }
      Ri.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = Dd.generateECPolynomial(this.degree);
      };
      Ri.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const n = new Uint8Array(e.length + this.degree);
        n.set(e);
        const r = Dd.mod(n, this.genPoly), s = this.degree - r.length;
        if (s > 0) {
          const o = new Uint8Array(this.degree);
          return o.set(r, s), o;
        }
        return r;
      };
      var ph = Ri, vd = {}, _n = {}, Li = {};
      Li.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
      var Ht = {};
      const bd = "[0-9]+", mh = "[A-Z $%*+\\-./:]+";
      let V0 = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      V0 = V0.replace(/u/g, "\\u");
      const hh = "(?:(?![A-Z0-9 $%*+\\-./:]|" + V0 + `)(?:.|[\r
]))+`;
      Ht.KANJI = new RegExp(V0, "g");
      Ht.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      Ht.BYTE = new RegExp(hh, "g");
      Ht.NUMERIC = new RegExp(bd, "g");
      Ht.ALPHANUMERIC = new RegExp(mh, "g");
      const Ch = new RegExp("^" + V0 + "$"), Bh = new RegExp("^" + bd + "$"), gh = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      Ht.testKanji = function(e) {
        return Ch.test(e);
      };
      Ht.testNumeric = function(e) {
        return Bh.test(e);
      };
      Ht.testAlphanumeric = function(e) {
        return gh.test(e);
      };
      (function(t) {
        const e = Li, n = Ht;
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
        }, t.getCharCountIndicator = function(o, i) {
          if (!o.ccBits) throw new Error("Invalid mode: " + o);
          if (!e.isValid(i)) throw new Error("Invalid version: " + i);
          return i >= 1 && i < 10 ? o.ccBits[0] : i < 27 ? o.ccBits[1] : o.ccBits[2];
        }, t.getBestModeForData = function(o) {
          return n.testNumeric(o) ? t.NUMERIC : n.testAlphanumeric(o) ? t.ALPHANUMERIC : n.testKanji(o) ? t.KANJI : t.BYTE;
        }, t.toString = function(o) {
          if (o && o.id) return o.id;
          throw new Error("Invalid mode");
        }, t.isValid = function(o) {
          return o && o.bit && o.ccBits;
        };
        function r(s) {
          if (typeof s != "string") throw new Error("Param is not a string");
          switch (s.toLowerCase()) {
            case "numeric":
              return t.NUMERIC;
            case "alphanumeric":
              return t.ALPHANUMERIC;
            case "kanji":
              return t.KANJI;
            case "byte":
              return t.BYTE;
            default:
              throw new Error("Unknown mode: " + s);
          }
        }
        t.from = function(o, i) {
          if (t.isValid(o)) return o;
          try {
            return r(o);
          } catch {
            return i;
          }
        };
      })(_n);
      (function(t) {
        const e = gt, n = Is, r = Ps, s = _n, o = Li, i = 7973, a = e.getBCHDigit(i);
        function x(p, E, m) {
          for (let C = 1; C <= 40; C++) if (E <= t.getCapacity(C, m, p)) return C;
        }
        function l(p, E) {
          return s.getCharCountIndicator(p, E) + 4;
        }
        function u(p, E) {
          let m = 0;
          return p.forEach(function(C) {
            const B = l(C.mode, E);
            m += B + C.getBitsLength();
          }), m;
        }
        function f(p, E) {
          for (let m = 1; m <= 40; m++) if (u(p, m) <= t.getCapacity(m, E, s.MIXED)) return m;
        }
        t.from = function(E, m) {
          return o.isValid(E) ? parseInt(E, 10) : m;
        }, t.getCapacity = function(E, m, C) {
          if (!o.isValid(E)) throw new Error("Invalid QR Code version");
          typeof C > "u" && (C = s.BYTE);
          const B = e.getSymbolTotalCodewords(E), A = n.getTotalCodewordsCount(E, m), D = (B - A) * 8;
          if (C === s.MIXED) return D;
          const b = D - l(C, E);
          switch (C) {
            case s.NUMERIC:
              return Math.floor(b / 10 * 3);
            case s.ALPHANUMERIC:
              return Math.floor(b / 11 * 2);
            case s.KANJI:
              return Math.floor(b / 13);
            case s.BYTE:
            default:
              return Math.floor(b / 8);
          }
        }, t.getBestVersionForData = function(E, m) {
          let C;
          const B = r.from(m, r.M);
          if (Array.isArray(E)) {
            if (E.length > 1) return f(E, B);
            if (E.length === 0) return 1;
            C = E[0];
          } else C = E;
          return x(C.mode, C.getLength(), B);
        }, t.getEncodedBits = function(E) {
          if (!o.isValid(E) || E < 7) throw new Error("Invalid QR Code version");
          let m = E << 12;
          for (; e.getBCHDigit(m) - a >= 0; ) m ^= i << e.getBCHDigit(m) - a;
          return E << 12 | m;
        };
      })(vd);
      var kd = {};
      const Uo = gt, yd = 1335, _h = 21522, el = Uo.getBCHDigit(yd);
      kd.getEncodedBits = function(e, n) {
        const r = e.bit << 3 | n;
        let s = r << 10;
        for (; Uo.getBCHDigit(s) - el >= 0; ) s ^= yd << Uo.getBCHDigit(s) - el;
        return (r << 10 | s) ^ _h;
      };
      var wd = {};
      const Ah = _n;
      function l0(t) {
        this.mode = Ah.NUMERIC, this.data = t.toString();
      }
      l0.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
      };
      l0.prototype.getLength = function() {
        return this.data.length;
      };
      l0.prototype.getBitsLength = function() {
        return l0.getBitsLength(this.data.length);
      };
      l0.prototype.write = function(e) {
        let n, r, s;
        for (n = 0; n + 3 <= this.data.length; n += 3) r = this.data.substr(n, 3), s = parseInt(r, 10), e.put(s, 10);
        const o = this.data.length - n;
        o > 0 && (r = this.data.substr(n), s = parseInt(r, 10), e.put(s, o * 3 + 1));
      };
      var Fh = l0;
      const Dh = _n, ro = [
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
      function c0(t) {
        this.mode = Dh.ALPHANUMERIC, this.data = t;
      }
      c0.getBitsLength = function(e) {
        return 11 * Math.floor(e / 2) + 6 * (e % 2);
      };
      c0.prototype.getLength = function() {
        return this.data.length;
      };
      c0.prototype.getBitsLength = function() {
        return c0.getBitsLength(this.data.length);
      };
      c0.prototype.write = function(e) {
        let n;
        for (n = 0; n + 2 <= this.data.length; n += 2) {
          let r = ro.indexOf(this.data[n]) * 45;
          r += ro.indexOf(this.data[n + 1]), e.put(r, 11);
        }
        this.data.length % 2 && e.put(ro.indexOf(this.data[n]), 6);
      };
      var vh = c0;
      const bh = _n;
      function u0(t) {
        this.mode = bh.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
      }
      u0.getBitsLength = function(e) {
        return e * 8;
      };
      u0.prototype.getLength = function() {
        return this.data.length;
      };
      u0.prototype.getBitsLength = function() {
        return u0.getBitsLength(this.data.length);
      };
      u0.prototype.write = function(t) {
        for (let e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8);
      };
      var kh = u0;
      const yh = _n, wh = gt;
      function d0(t) {
        this.mode = yh.KANJI, this.data = t;
      }
      d0.getBitsLength = function(e) {
        return e * 13;
      };
      d0.prototype.getLength = function() {
        return this.data.length;
      };
      d0.prototype.getBitsLength = function() {
        return d0.getBitsLength(this.data.length);
      };
      d0.prototype.write = function(t) {
        let e;
        for (e = 0; e < this.data.length; e++) {
          let n = wh.toSJIS(this.data[e]);
          if (n >= 33088 && n <= 40956) n -= 33088;
          else if (n >= 57408 && n <= 60351) n -= 49472;
          else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
          n = (n >>> 8 & 255) * 192 + (n & 255), t.put(n, 13);
        }
      };
      var Sh = d0, Sd = {
        exports: {}
      };
      (function(t) {
        var e = {
          single_source_shortest_paths: function(n, r, s) {
            var o = {}, i = {};
            i[r] = 0;
            var a = e.PriorityQueue.make();
            a.push(r, 0);
            for (var x, l, u, f, p, E, m, C, B; !a.empty(); ) {
              x = a.pop(), l = x.value, f = x.cost, p = n[l] || {};
              for (u in p) p.hasOwnProperty(u) && (E = p[u], m = f + E, C = i[u], B = typeof i[u] > "u", (B || C > m) && (i[u] = m, a.push(u, m), o[u] = l));
            }
            if (typeof s < "u" && typeof i[s] > "u") {
              var A = [
                "Could not find a path from ",
                r,
                " to ",
                s,
                "."
              ].join("");
              throw new Error(A);
            }
            return o;
          },
          extract_shortest_path_from_predecessor_list: function(n, r) {
            for (var s = [], o = r; o; ) s.push(o), n[o], o = n[o];
            return s.reverse(), s;
          },
          find_path: function(n, r, s) {
            var o = e.single_source_shortest_paths(n, r, s);
            return e.extract_shortest_path_from_predecessor_list(o, s);
          },
          PriorityQueue: {
            make: function(n) {
              var r = e.PriorityQueue, s = {}, o;
              n = n || {};
              for (o in r) r.hasOwnProperty(o) && (s[o] = r[o]);
              return s.queue = [], s.sorter = n.sorter || r.default_sorter, s;
            },
            default_sorter: function(n, r) {
              return n.cost - r.cost;
            },
            push: function(n, r) {
              var s = {
                value: n,
                cost: r
              };
              this.queue.push(s), this.queue.sort(this.sorter);
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
      })(Sd);
      var Th = Sd.exports;
      (function(t) {
        const e = _n, n = Fh, r = vh, s = kh, o = Sh, i = Ht, a = gt, x = Th;
        function l(A) {
          return unescape(encodeURIComponent(A)).length;
        }
        function u(A, D, b) {
          const v = [];
          let _;
          for (; (_ = A.exec(b)) !== null; ) v.push({
            data: _[0],
            index: _.index,
            mode: D,
            length: _[0].length
          });
          return v;
        }
        function f(A) {
          const D = u(i.NUMERIC, e.NUMERIC, A), b = u(i.ALPHANUMERIC, e.ALPHANUMERIC, A);
          let v, _;
          return a.isKanjiModeEnabled() ? (v = u(i.BYTE, e.BYTE, A), _ = u(i.KANJI, e.KANJI, A)) : (v = u(i.BYTE_KANJI, e.BYTE, A), _ = []), D.concat(b, v, _).sort(function(F, k) {
            return F.index - k.index;
          }).map(function(F) {
            return {
              data: F.data,
              mode: F.mode,
              length: F.length
            };
          });
        }
        function p(A, D) {
          switch (D) {
            case e.NUMERIC:
              return n.getBitsLength(A);
            case e.ALPHANUMERIC:
              return r.getBitsLength(A);
            case e.KANJI:
              return o.getBitsLength(A);
            case e.BYTE:
              return s.getBitsLength(A);
          }
        }
        function E(A) {
          return A.reduce(function(D, b) {
            const v = D.length - 1 >= 0 ? D[D.length - 1] : null;
            return v && v.mode === b.mode ? (D[D.length - 1].data += b.data, D) : (D.push(b), D);
          }, []);
        }
        function m(A) {
          const D = [];
          for (let b = 0; b < A.length; b++) {
            const v = A[b];
            switch (v.mode) {
              case e.NUMERIC:
                D.push([
                  v,
                  {
                    data: v.data,
                    mode: e.ALPHANUMERIC,
                    length: v.length
                  },
                  {
                    data: v.data,
                    mode: e.BYTE,
                    length: v.length
                  }
                ]);
                break;
              case e.ALPHANUMERIC:
                D.push([
                  v,
                  {
                    data: v.data,
                    mode: e.BYTE,
                    length: v.length
                  }
                ]);
                break;
              case e.KANJI:
                D.push([
                  v,
                  {
                    data: v.data,
                    mode: e.BYTE,
                    length: l(v.data)
                  }
                ]);
                break;
              case e.BYTE:
                D.push([
                  {
                    data: v.data,
                    mode: e.BYTE,
                    length: l(v.data)
                  }
                ]);
            }
          }
          return D;
        }
        function C(A, D) {
          const b = {}, v = {
            start: {}
          };
          let _ = [
            "start"
          ];
          for (let g = 0; g < A.length; g++) {
            const F = A[g], k = [];
            for (let w = 0; w < F.length; w++) {
              const P = F[w], N = "" + g + w;
              k.push(N), b[N] = {
                node: P,
                lastCount: 0
              }, v[N] = {};
              for (let I = 0; I < _.length; I++) {
                const L = _[I];
                b[L] && b[L].node.mode === P.mode ? (v[L][N] = p(b[L].lastCount + P.length, P.mode) - p(b[L].lastCount, P.mode), b[L].lastCount += P.length) : (b[L] && (b[L].lastCount = P.length), v[L][N] = p(P.length, P.mode) + 4 + e.getCharCountIndicator(P.mode, D));
              }
            }
            _ = k;
          }
          for (let g = 0; g < _.length; g++) v[_[g]].end = 0;
          return {
            map: v,
            table: b
          };
        }
        function B(A, D) {
          let b;
          const v = e.getBestModeForData(A);
          if (b = e.from(D, v), b !== e.BYTE && b.bit < v.bit) throw new Error('"' + A + '" cannot be encoded with mode ' + e.toString(b) + `.
 Suggested mode is: ` + e.toString(v));
          switch (b === e.KANJI && !a.isKanjiModeEnabled() && (b = e.BYTE), b) {
            case e.NUMERIC:
              return new n(A);
            case e.ALPHANUMERIC:
              return new r(A);
            case e.KANJI:
              return new o(A);
            case e.BYTE:
              return new s(A);
          }
        }
        t.fromArray = function(D) {
          return D.reduce(function(b, v) {
            return typeof v == "string" ? b.push(B(v, null)) : v.data && b.push(B(v.data, v.mode)), b;
          }, []);
        }, t.fromString = function(D, b) {
          const v = f(D, a.isKanjiModeEnabled()), _ = m(v), g = C(_, b), F = x.find_path(g.map, "start", "end"), k = [];
          for (let w = 1; w < F.length - 1; w++) k.push(g.table[F[w]].node);
          return t.fromArray(E(k));
        }, t.rawSplit = function(D) {
          return t.fromArray(f(D, a.isKanjiModeEnabled()));
        };
      })(wd);
      const Rs = gt, so = Ps, Ph = dh, Ih = fh, Nh = gd, Rh = _d, jo = Ad, Go = Is, Lh = ph, us = vd, Mh = kd, Oh = _n, oo = wd;
      function Hh(t, e) {
        const n = t.size, r = Rh.getPositions(e);
        for (let s = 0; s < r.length; s++) {
          const o = r[s][0], i = r[s][1];
          for (let a = -1; a <= 7; a++) if (!(o + a <= -1 || n <= o + a)) for (let x = -1; x <= 7; x++) i + x <= -1 || n <= i + x || (a >= 0 && a <= 6 && (x === 0 || x === 6) || x >= 0 && x <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && x >= 2 && x <= 4 ? t.set(o + a, i + x, true, true) : t.set(o + a, i + x, false, true));
        }
      }
      function qh(t) {
        const e = t.size;
        for (let n = 8; n < e - 8; n++) {
          const r = n % 2 === 0;
          t.set(n, 6, r, true), t.set(6, n, r, true);
        }
      }
      function zh(t, e) {
        const n = Nh.getPositions(e);
        for (let r = 0; r < n.length; r++) {
          const s = n[r][0], o = n[r][1];
          for (let i = -2; i <= 2; i++) for (let a = -2; a <= 2; a++) i === -2 || i === 2 || a === -2 || a === 2 || i === 0 && a === 0 ? t.set(s + i, o + a, true, true) : t.set(s + i, o + a, false, true);
        }
      }
      function Uh(t, e) {
        const n = t.size, r = us.getEncodedBits(e);
        let s, o, i;
        for (let a = 0; a < 18; a++) s = Math.floor(a / 3), o = a % 3 + n - 8 - 3, i = (r >> a & 1) === 1, t.set(s, o, i, true), t.set(o, s, i, true);
      }
      function io(t, e, n) {
        const r = t.size, s = Mh.getEncodedBits(e, n);
        let o, i;
        for (o = 0; o < 15; o++) i = (s >> o & 1) === 1, o < 6 ? t.set(o, 8, i, true) : o < 8 ? t.set(o + 1, 8, i, true) : t.set(r - 15 + o, 8, i, true), o < 8 ? t.set(8, r - o - 1, i, true) : o < 9 ? t.set(8, 15 - o - 1 + 1, i, true) : t.set(8, 15 - o - 1, i, true);
        t.set(r - 8, 8, 1, true);
      }
      function jh(t, e) {
        const n = t.size;
        let r = -1, s = n - 1, o = 7, i = 0;
        for (let a = n - 1; a > 0; a -= 2) for (a === 6 && a--; ; ) {
          for (let x = 0; x < 2; x++) if (!t.isReserved(s, a - x)) {
            let l = false;
            i < e.length && (l = (e[i] >>> o & 1) === 1), t.set(s, a - x, l), o--, o === -1 && (i++, o = 7);
          }
          if (s += r, s < 0 || n <= s) {
            s -= r, r = -r;
            break;
          }
        }
      }
      function Gh(t, e, n) {
        const r = new Ph();
        n.forEach(function(x) {
          r.put(x.mode.bit, 4), r.put(x.getLength(), Oh.getCharCountIndicator(x.mode, t)), x.write(r);
        });
        const s = Rs.getSymbolTotalCodewords(t), o = Go.getTotalCodewordsCount(t, e), i = (s - o) * 8;
        for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 !== 0; ) r.putBit(0);
        const a = (i - r.getLengthInBits()) / 8;
        for (let x = 0; x < a; x++) r.put(x % 2 ? 17 : 236, 8);
        return Wh(r, t, e);
      }
      function Wh(t, e, n) {
        const r = Rs.getSymbolTotalCodewords(e), s = Go.getTotalCodewordsCount(e, n), o = r - s, i = Go.getBlocksCount(e, n), a = r % i, x = i - a, l = Math.floor(r / i), u = Math.floor(o / i), f = u + 1, p = l - u, E = new Lh(p);
        let m = 0;
        const C = new Array(i), B = new Array(i);
        let A = 0;
        const D = new Uint8Array(t.buffer);
        for (let F = 0; F < i; F++) {
          const k = F < x ? u : f;
          C[F] = D.slice(m, m + k), B[F] = E.encode(C[F]), m += k, A = Math.max(A, k);
        }
        const b = new Uint8Array(r);
        let v = 0, _, g;
        for (_ = 0; _ < A; _++) for (g = 0; g < i; g++) _ < C[g].length && (b[v++] = C[g][_]);
        for (_ = 0; _ < p; _++) for (g = 0; g < i; g++) b[v++] = B[g][_];
        return b;
      }
      function Vh(t, e, n, r) {
        let s;
        if (Array.isArray(t)) s = oo.fromArray(t);
        else if (typeof t == "string") {
          let l = e;
          if (!l) {
            const u = oo.rawSplit(t);
            l = us.getBestVersionForData(u, n);
          }
          s = oo.fromString(t, l || 40);
        } else throw new Error("Invalid data");
        const o = us.getBestVersionForData(s, n);
        if (!o) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = o;
        else if (e < o) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + o + `.
`);
        const i = Gh(e, n, s), a = Rs.getSymbolSize(e), x = new Ih(a);
        return Hh(x, e), qh(x), zh(x, e), io(x, n, 0), e >= 7 && Uh(x, e), jh(x, i), isNaN(r) && (r = jo.getBestMask(x, io.bind(null, x, n))), jo.applyMask(r, x), io(x, n, r), {
          modules: x,
          version: e,
          errorCorrectionLevel: n,
          maskPattern: r,
          segments: s
        };
      }
      Cd.create = function(e, n) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let r = so.M, s, o;
        return typeof n < "u" && (r = so.from(n.errorCorrectionLevel, so.M), s = us.from(n.version), o = jo.from(n.maskPattern), n.toSJISFunc && Rs.setToSJISFunction(n.toSJISFunc)), Vh(e, s, r, o);
      };
      var Td = {}, Mi = {};
      (function(t) {
        function e(n) {
          if (typeof n == "number" && (n = n.toString()), typeof n != "string") throw new Error("Color should be defined as hex string");
          let r = n.slice().replace("#", "").split("");
          if (r.length < 3 || r.length === 5 || r.length > 8) throw new Error("Invalid hex color: " + n);
          (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(o) {
            return [
              o,
              o
            ];
          }))), r.length === 6 && r.push("F", "F");
          const s = parseInt(r.join(""), 16);
          return {
            r: s >> 24 & 255,
            g: s >> 16 & 255,
            b: s >> 8 & 255,
            a: s & 255,
            hex: "#" + r.slice(0, 6).join("")
          };
        }
        t.getOptions = function(r) {
          r || (r = {}), r.color || (r.color = {});
          const s = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, o = r.width && r.width >= 21 ? r.width : void 0, i = r.scale || 4;
          return {
            width: o,
            scale: o ? 4 : i,
            margin: s,
            color: {
              dark: e(r.color.dark || "#000000ff"),
              light: e(r.color.light || "#ffffffff")
            },
            type: r.type,
            rendererOpts: r.rendererOpts || {}
          };
        }, t.getScale = function(r, s) {
          return s.width && s.width >= r + s.margin * 2 ? s.width / (r + s.margin * 2) : s.scale;
        }, t.getImageWidth = function(r, s) {
          const o = t.getScale(r, s);
          return Math.floor((r + s.margin * 2) * o);
        }, t.qrToImageData = function(r, s, o) {
          const i = s.modules.size, a = s.modules.data, x = t.getScale(i, o), l = Math.floor((i + o.margin * 2) * x), u = o.margin * x, f = [
            o.color.light,
            o.color.dark
          ];
          for (let p = 0; p < l; p++) for (let E = 0; E < l; E++) {
            let m = (p * l + E) * 4, C = o.color.light;
            if (p >= u && E >= u && p < l - u && E < l - u) {
              const B = Math.floor((p - u) / x), A = Math.floor((E - u) / x);
              C = f[a[B * i + A] ? 1 : 0];
            }
            r[m++] = C.r, r[m++] = C.g, r[m++] = C.b, r[m] = C.a;
          }
        };
      })(Mi);
      (function(t) {
        const e = Mi;
        function n(s, o, i) {
          s.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = i, o.width = i, o.style.height = i + "px", o.style.width = i + "px";
        }
        function r() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        t.render = function(o, i, a) {
          let x = a, l = i;
          typeof x > "u" && (!i || !i.getContext) && (x = i, i = void 0), i || (l = r()), x = e.getOptions(x);
          const u = e.getImageWidth(o.modules.size, x), f = l.getContext("2d"), p = f.createImageData(u, u);
          return e.qrToImageData(p.data, o, x), n(f, l, u), f.putImageData(p, 0, 0), l;
        }, t.renderToDataURL = function(o, i, a) {
          let x = a;
          typeof x > "u" && (!i || !i.getContext) && (x = i, i = void 0), x || (x = {});
          const l = t.render(o, i, x), u = x.type || "image/png", f = x.rendererOpts || {};
          return l.toDataURL(u, f.quality);
        };
      })(Td);
      var Pd = {};
      const Yh = Mi;
      function tl(t, e) {
        const n = t.a / 255, r = e + '="' + t.hex + '"';
        return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
      }
      function ao(t, e, n) {
        let r = t + e;
        return typeof n < "u" && (r += " " + n), r;
      }
      function Kh(t, e, n) {
        let r = "", s = 0, o = false, i = 0;
        for (let a = 0; a < t.length; a++) {
          const x = Math.floor(a % e), l = Math.floor(a / e);
          !x && !o && (o = true), t[a] ? (i++, a > 0 && x > 0 && t[a - 1] || (r += o ? ao("M", x + n, 0.5 + l + n) : ao("m", s, 0), s = 0, o = false), x + 1 < e && t[a + 1] || (r += ao("h", i), i = 0)) : s++;
        }
        return r;
      }
      Pd.render = function(e, n, r) {
        const s = Yh.getOptions(n), o = e.modules.size, i = e.modules.data, a = o + s.margin * 2, x = s.color.light.a ? "<path " + tl(s.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "", l = "<path " + tl(s.color.dark, "stroke") + ' d="' + Kh(i, o, s.margin) + '"/>', u = 'viewBox="0 0 ' + a + " " + a + '"', p = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + u + ' shape-rendering="crispEdges">' + x + l + `</svg>
`;
        return typeof r == "function" && r(null, p), p;
      };
      const Jh = ch, Wo = Cd, Id = Td, Xh = Pd;
      function Oi(t, e, n, r, s) {
        const o = [].slice.call(arguments, 1), i = o.length, a = typeof o[i - 1] == "function";
        if (!a && !Jh()) throw new Error("Callback required as last argument");
        if (a) {
          if (i < 2) throw new Error("Too few arguments provided");
          i === 2 ? (s = n, n = e, e = r = void 0) : i === 3 && (e.getContext && typeof s > "u" ? (s = r, r = void 0) : (s = r, r = n, n = e, e = void 0));
        } else {
          if (i < 1) throw new Error("Too few arguments provided");
          return i === 1 ? (n = e, e = r = void 0) : i === 2 && !e.getContext && (r = n, n = e, e = void 0), new Promise(function(x, l) {
            try {
              const u = Wo.create(n, r);
              x(t(u, e, r));
            } catch (u) {
              l(u);
            }
          });
        }
        try {
          const x = Wo.create(n, r);
          s(null, t(x, e, r));
        } catch (x) {
          s(x);
        }
      }
      Gn.create = Wo.create;
      Gn.toCanvas = Oi.bind(null, Id.render);
      Gn.toDataURL = Oi.bind(null, Id.renderToDataURL);
      Gn.toString = Oi.bind(null, function(t, e, n) {
        return Xh.render(t, n);
      });
      function Qh(t) {
        let e, n, r, s, o, i, a, x = t[0].isHost ? "You started this group" : "Group encounter", l, u, f, p = al(t[0].date) + "", E, m, C, B, A = t[0].isHost && t[13](), D, b, v, _, g, F, k, w, P, N, I = t[3] && nl(t), L = t[10] && rl(t);
        function R(z, K) {
          return z[5] ? eC : $h;
        }
        let O = R(t), W = O(t), H = A && ol(t), q = t[8] && il(t);
        function X(z, K) {
          return z[4] ? sC : rC;
        }
        let j = X(t), U = j(t);
        return {
          c() {
            I && I.c(), e = y(), L && L.c(), n = y(), r = h("section"), s = h("div"), o = h("span"), o.textContent = "groups", i = y(), a = h("span"), l = M(x), u = y(), f = h("p"), E = M(p), m = y(), C = h("section"), W.c(), B = y(), H && H.c(), D = y(), b = h("section"), v = h("div"), v.innerHTML = '<span class="material-icons privacy-icon svelte-atconr">lock_outline</span> <p class="privacy-text svelte-atconr">Your note is stored encrypted and never shared.</p>', _ = y(), g = h("textarea"), F = y(), q && q.c(), k = y(), w = h("section"), U.c(), d(o, "class", "material-icons status-icon svelte-atconr"), d(a, "class", "status-label svelte-atconr"), d(s, "class", "status-row svelte-atconr"), d(f, "class", "date svelte-atconr"), d(r, "class", "card pad svelte-atconr"), d(C, "class", "card svelte-atconr"), d(v, "class", "privacy-row svelte-atconr"), d(g, "placeholder", "Add a private note\u2026"), d(g, "rows", "5"), d(g, "class", "svelte-atconr"), d(b, "class", "card pad svelte-atconr"), d(w, "class", "card svelte-atconr");
          },
          m(z, K) {
            I && I.m(z, K), T(z, e, K), L && L.m(z, K), T(z, n, K), T(z, r, K), c(r, s), c(s, o), c(s, i), c(s, a), c(a, l), c(r, u), c(r, f), c(f, E), T(z, m, K), T(z, C, K), W.m(C, null), T(z, B, K), H && H.m(z, K), T(z, D, K), T(z, b, K), c(b, v), c(b, _), c(b, g), xe(g, t[7]), c(b, F), q && q.m(b, null), T(z, k, K), T(z, w, K), U.m(w, null), P || (N = [
              G(g, "input", t[25]),
              G(g, "input", t[17])
            ], P = true);
          },
          p(z, K) {
            z[3] ? I ? I.p(z, K) : (I = nl(z), I.c(), I.m(e.parentNode, e)) : I && (I.d(1), I = null), z[10] ? L ? L.p(z, K) : (L = rl(z), L.c(), L.m(n.parentNode, n)) : L && (L.d(1), L = null), K[0] & 1 && x !== (x = z[0].isHost ? "You started this group" : "Group encounter") && V(l, x), K[0] & 1 && p !== (p = al(z[0].date) + "") && V(E, p), O === (O = R(z)) && W ? W.p(z, K) : (W.d(1), W = O(z), W && (W.c(), W.m(C, null))), K[0] & 1 && (A = z[0].isHost && z[13]()), A ? H ? H.p(z, K) : (H = ol(z), H.c(), H.m(D.parentNode, D)) : H && (H.d(1), H = null), K[0] & 128 && xe(g, z[7]), z[8] ? q ? q.p(z, K) : (q = il(z), q.c(), q.m(b, null)) : q && (q.d(1), q = null), j === (j = X(z)) && U ? U.p(z, K) : (U.d(1), U = j(z), U && (U.c(), U.m(w, null)));
          },
          d(z) {
            z && (S(e), S(n), S(r), S(m), S(C), S(B), S(D), S(b), S(k), S(w)), I && I.d(z), L && L.d(z), W.d(), H && H.d(z), q && q.d(), U.d(), P = false, ue(N);
          }
        };
      }
      function Zh(t) {
        let e;
        return {
          c() {
            e = h("section"), e.innerHTML = '<p class="muted svelte-atconr">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-atconr">\u2190 Back to encounters</a>', d(e, "class", "card pad svelte-atconr");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function nl(t) {
        let e, n, r, s;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "error_outline", r = y(), s = M(t[3]), d(n, "class", "material-icons svelte-atconr"), d(e, "class", "toast error-toast svelte-atconr");
          },
          m(o, i) {
            T(o, e, i), c(e, n), c(e, r), c(e, s);
          },
          p(o, i) {
            i[0] & 8 && V(s, o[3]);
          },
          d(o) {
            o && S(e);
          }
        };
      }
      function rl(t) {
        let e, n, r, s, o, i, a, x, l, u = t[9] ? "Saving\u2026" : "Save note", f, p, E;
        return {
          c() {
            e = h("section"), n = h("p"), n.textContent = "You have unsaved changes to your note.", r = y(), s = h("div"), o = h("button"), o.textContent = "Keep editing", i = y(), a = h("button"), a.textContent = "Discard", x = y(), l = h("button"), f = M(u), d(n, "class", "confirm-text svelte-atconr"), d(o, "class", "btn-text svelte-atconr"), d(a, "class", "btn-text danger svelte-atconr"), d(l, "class", "btn-filled-sm svelte-atconr"), l.disabled = t[9], d(s, "class", "confirm-actions svelte-atconr"), d(e, "class", "card pad leave-confirm svelte-atconr");
          },
          m(m, C) {
            T(m, e, C), c(e, n), c(e, r), c(e, s), c(s, o), c(s, i), c(s, a), c(s, x), c(s, l), c(l, f), p || (E = [
              G(o, "click", t[23]),
              G(a, "click", t[20]),
              G(l, "click", t[19])
            ], p = true);
          },
          p(m, C) {
            C[0] & 512 && u !== (u = m[9] ? "Saving\u2026" : "Save note") && V(f, u), C[0] & 512 && (l.disabled = m[9]);
          },
          d(m) {
            m && S(e), p = false, ue(E);
          }
        };
      }
      function $h(t) {
        let e, n, r, s, o = (t[0].name ? t[0].name : "Add group name") + "", i, a, x, l, u, f, p = t[0].name && sl();
        return {
          c() {
            e = h("button"), n = h("span"), n.textContent = "edit", r = y(), s = h("span"), i = M(o), a = y(), p && p.c(), x = y(), l = h("span"), l.textContent = "chevron_right", d(n, "class", "material-icons action-icon svelte-atconr"), d(s, "class", "action-label svelte-atconr"), d(l, "class", "material-icons action-chevron svelte-atconr"), d(e, "class", "action-row svelte-atconr");
          },
          m(E, m) {
            T(E, e, m), c(e, n), c(e, r), c(e, s), c(s, i), c(s, a), p && p.m(s, null), c(e, x), c(e, l), u || (f = G(e, "click", t[14]), u = true);
          },
          p(E, m) {
            m[0] & 1 && o !== (o = (E[0].name ? E[0].name : "Add group name") + "") && V(i, o), E[0].name ? p || (p = sl(), p.c(), p.m(s, null)) : p && (p.d(1), p = null);
          },
          d(E) {
            E && S(e), p && p.d(), u = false, f();
          }
        };
      }
      function eC(t) {
        let e, n, r, s, o, i, a, x, l, u, f = t[2] ? "Saving\u2026" : "Save", p, E, m;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "edit", r = y(), s = h("form"), o = h("input"), i = y(), a = h("div"), x = h("button"), x.textContent = "Cancel", l = y(), u = h("button"), p = M(f), d(n, "class", "material-icons action-icon svelte-atconr"), d(o, "type", "text"), d(o, "placeholder", "Optional group name"), d(o, "maxlength", "64"), o.autofocus = true, d(o, "class", "svelte-atconr"), d(x, "type", "button"), d(x, "class", "btn-text svelte-atconr"), d(u, "type", "submit"), d(u, "class", "btn-filled-sm svelte-atconr"), u.disabled = t[2], d(a, "class", "name-actions svelte-atconr"), d(s, "class", "name-form svelte-atconr"), d(e, "class", "action-row edit-row svelte-atconr");
          },
          m(C, B) {
            T(C, e, B), c(e, n), c(e, r), c(e, s), c(s, o), xe(o, t[6]), c(s, i), c(s, a), c(a, x), c(a, l), c(a, u), c(u, p), o.focus(), E || (m = [
              G(o, "input", t[24]),
              G(x, "click", t[15]),
              G(s, "submit", tn(t[16]))
            ], E = true);
          },
          p(C, B) {
            B[0] & 64 && o.value !== C[6] && xe(o, C[6]), B[0] & 4 && f !== (f = C[2] ? "Saving\u2026" : "Save") && V(p, f), B[0] & 4 && (u.disabled = C[2]);
          },
          d(C) {
            C && S(e), E = false, ue(m);
          }
        };
      }
      function sl(t) {
        let e;
        return {
          c() {
            e = h("span"), e.textContent = "Tap to change", d(e, "class", "action-sub svelte-atconr");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function ol(t) {
        let e, n, r, s, o;
        function i(l, u) {
          return l[11] ? nC : tC;
        }
        let a = i(t), x = a(t);
        return {
          c() {
            e = h("section"), n = h("p"), n.textContent = "Show this QR for others to join", r = y(), x.c(), s = y(), o = h("p"), o.textContent = "Valid for 24 hours from when you created the group.", d(n, "class", "qr-label svelte-atconr"), d(o, "class", "qr-hint svelte-atconr"), d(e, "class", "card pad qr-card svelte-atconr");
          },
          m(l, u) {
            T(l, e, u), c(e, n), c(e, r), x.m(e, null), c(e, s), c(e, o);
          },
          p(l, u) {
            a === (a = i(l)) && x ? x.p(l, u) : (x.d(1), x = a(l), x && (x.c(), x.m(e, s)));
          },
          d(l) {
            l && S(e), x.d();
          }
        };
      }
      function tC(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Generating QR\u2026", d(e, "class", "muted svelte-atconr");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function nC(t) {
        let e;
        return {
          c() {
            e = h("div"), d(e, "class", "qr-wrap svelte-atconr");
          },
          m(n, r) {
            T(n, e, r), e.innerHTML = t[11];
          },
          p(n, r) {
            r[0] & 2048 && (e.innerHTML = n[11]);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function il(t) {
        let e, n, r = t[9] ? "Saving\u2026" : "Save", s, o, i;
        return {
          c() {
            e = h("div"), n = h("button"), s = M(r), d(n, "class", "btn-filled-sm svelte-atconr"), n.disabled = t[9], d(e, "class", "note-actions svelte-atconr");
          },
          m(a, x) {
            T(a, e, x), c(e, n), c(n, s), o || (i = G(n, "click", t[18]), o = true);
          },
          p(a, x) {
            x[0] & 512 && r !== (r = a[9] ? "Saving\u2026" : "Save") && V(s, r), x[0] & 512 && (n.disabled = a[9]);
          },
          d(a) {
            a && S(e), o = false, i();
          }
        };
      }
      function rC(t) {
        let e, n, r;
        return {
          c() {
            e = h("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-atconr">delete_outline</span> <span class="action-label danger svelte-atconr">Delete group encounter</span>', d(e, "class", "action-row svelte-atconr");
          },
          m(s, o) {
            T(s, e, o), n || (r = G(e, "click", t[27]), n = true);
          },
          p: Z,
          d(s) {
            s && S(e), n = false, r();
          }
        };
      }
      function sC(t) {
        let e, n, r, s, o, i, a, x = t[2] ? "Deleting\u2026" : "Delete", l, u, f;
        return {
          c() {
            e = h("div"), n = h("p"), n.textContent = "Delete this group encounter? This cannot be undone.", r = y(), s = h("div"), o = h("button"), o.textContent = "Cancel", i = y(), a = h("button"), l = M(x), d(n, "class", "confirm-text svelte-atconr"), d(o, "class", "btn-text svelte-atconr"), d(a, "class", "btn-danger-sm svelte-atconr"), a.disabled = t[2], d(s, "class", "confirm-actions svelte-atconr"), d(e, "class", "confirm-row svelte-atconr");
          },
          m(p, E) {
            T(p, e, E), c(e, n), c(e, r), c(e, s), c(s, o), c(s, i), c(s, a), c(a, l), u || (f = [
              G(o, "click", t[26]),
              G(a, "click", t[21])
            ], u = true);
          },
          p(p, E) {
            E[0] & 4 && x !== (x = p[2] ? "Deleting\u2026" : "Delete") && V(l, x), E[0] & 4 && (a.disabled = p[2]);
          },
          d(p) {
            p && S(e), u = false, ue(f);
          }
        };
      }
      function oC(t) {
        let e, n, r, s, o, i, a, x = (t[1] ? "Group not found" : t[12]) + "", l, u, f;
        e = new Ot({});
        function p(C, B) {
          if (C[1]) return Zh;
          if (C[0]) return Qh;
        }
        let E = p(t), m = E && E(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), s = h("div"), o = h("a"), o.innerHTML = '<span class="material-icons svelte-atconr">arrow_back</span>', i = y(), a = h("h1"), l = M(x), u = y(), m && m.c(), d(o, "class", "back-btn svelte-atconr"), d(o, "href", "#/encounters"), d(a, "class", "svelte-atconr"), d(s, "class", "page-header svelte-atconr"), d(r, "class", "svelte-atconr");
          },
          m(C, B) {
            Oe(e, C, B), T(C, n, B), T(C, r, B), c(r, s), c(s, o), c(s, i), c(s, a), c(a, l), c(r, u), m && m.m(r, null), f = true;
          },
          p(C, B) {
            (!f || B[0] & 4098) && x !== (x = (C[1] ? "Group not found" : C[12]) + "") && V(l, x), E === (E = p(C)) && m ? m.p(C, B) : (m && m.d(1), m = E && E(C), m && (m.c(), m.m(r, null)));
          },
          i(C) {
            f || (Ce(e.$$.fragment, C), f = true);
          },
          o(C) {
            Ae(e.$$.fragment, C), f = false;
          },
          d(C) {
            C && (S(n), S(r)), He(e, C), m && m.d();
          }
        };
      }
      function al(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function iC(t, e, n) {
        let r, { params: s = {
          tokenHex: ""
        } } = e, o = null, i = false, a = false, x = null, l = false, u = false, f = "", p = "", E = false, m = false, C = false, B = null, A = null;
        st(() => {
          if (!ut()) {
            Ee("/login");
            return;
          }
          v(), document.addEventListener("click", b, {
            capture: true
          }), window.addEventListener("beforeunload", D);
        }), Ds(() => {
          document.removeEventListener("click", b, {
            capture: true
          }), window.removeEventListener("beforeunload", D);
        });
        function D(z) {
          E && (z.preventDefault(), z.returnValue = "");
        }
        function b(z) {
          if (!E) return;
          const K = z.target.closest('a[href^="#/"]');
          K && (z.preventDefault(), z.stopImmediatePropagation(), B = K.getAttribute("href").slice(1), n(10, C = true));
        }
        function v() {
          const z = s.tokenHex;
          if (n(0, o = Ed().find((K) => ne(K.token) === z) ?? null), !o) {
            n(1, i = true);
            return;
          }
          n(7, p = o.note ?? ""), o.isHost && g() && F();
        }
        function _() {
          return ne(o.token);
        }
        function g() {
          return o ? Math.floor(Date.now() / 1e3) - o.createdAt < 86400 : false;
        }
        async function F() {
          const z = Math.floor(Date.now() / 1e3), K = km(_(), z, ne(o.hostContactId), o.name);
          try {
            n(11, A = await Gn.toString(K, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#1a1a1a",
                light: "#ffffff"
              }
            }));
          } catch (Y) {
            n(3, x = "Could not render QR code: " + Y.message);
          }
        }
        function k() {
          n(6, f = o.name ?? ""), n(5, u = true), n(3, x = null);
        }
        function w() {
          n(5, u = false), n(3, x = null);
        }
        async function P() {
          if (!a) {
            n(2, a = true), n(3, x = null);
            try {
              const z = f.trim() || null;
              await sx(_(), {
                name: z
              }), v(), n(5, u = false);
            } catch (z) {
              n(3, x = z.message);
            } finally {
              n(2, a = false);
            }
          }
        }
        function N() {
          n(8, E = p !== (o.note ?? ""));
        }
        async function I() {
          if (!(!E || m)) {
            n(9, m = true), n(3, x = null);
            try {
              const z = p.trim() || null;
              await sx(_(), {
                note: z
              }), v(), n(8, E = false);
            } catch (z) {
              n(3, x = z.message);
            } finally {
              n(9, m = false);
            }
          }
        }
        async function L() {
          await I(), x || O();
        }
        function R() {
          n(7, p = o.note ?? ""), n(8, E = false), O();
        }
        function O() {
          n(10, C = false), Ee(B);
        }
        async function W() {
          if (!a) {
            n(2, a = true), n(3, x = null);
            try {
              await v7(_()), Ee("/encounters");
            } catch (z) {
              n(3, x = z.message), n(2, a = false);
            }
          }
        }
        const H = () => n(10, C = false);
        function q() {
          f = this.value, n(6, f);
        }
        function X() {
          p = this.value, n(7, p);
        }
        const j = () => n(4, l = false), U = () => n(4, l = true);
        return t.$$set = (z) => {
          "params" in z && n(22, s = z.params);
        }, t.$$.update = () => {
          t.$$.dirty[0] & 1 && n(12, r = o?.name || "Group encounter");
        }, [
          o,
          i,
          a,
          x,
          l,
          u,
          f,
          p,
          E,
          m,
          C,
          A,
          r,
          g,
          k,
          w,
          P,
          N,
          I,
          L,
          R,
          W,
          s,
          H,
          q,
          X,
          j,
          U
        ];
      }
      class aC extends Se {
        constructor(e) {
          super(), we(this, e, iC, oC, ke, {
            params: 22
          }, null, [
            -1,
            -1
          ]);
        }
      }
      async function xC(t) {
        const e = wt();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const n = e.encounters.map((u) => ({
          raw_token: ne(u.rawToken),
          date: u.date,
          their_contact_id: ne(u.theirContactId)
        })), r = (e.relationships || []).map((u) => ({
          raw_token: ne(u.rawToken),
          date: u.createdAt,
          their_contact_id: ne(u.theirContactId)
        })), s = (e.results || []).map((u) => {
          const f = {};
          for (const p of Lt) f[p] = u.positiveDiseases.includes(p) ? "positive" : "negative";
          return {
            test_date: u.date,
            result_json: JSON.stringify({
              panel: f,
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
        }), o = new TextEncoder().encode(JSON.stringify({
          version: 1,
          contact_id: ne(e.myContactId),
          encounters: [
            ...n,
            ...r
          ],
          test_results: s
        })), i = cr(16), a = await Gt(t, i), x = ur(a, o);
        a.fill(0);
        const l = new Uint8Array(16 + x.length);
        return l.set(i, 0), l.set(x, 16), l;
      }
      const lC = "peachsafe-backup";
      function xl(t, e, n) {
        const r = t.slice();
        return r[8] = e[n], r;
      }
      function ll(t, e, n) {
        const r = t.slice();
        return r[11] = e[n], r;
      }
      function cl(t) {
        let e;
        return {
          c() {
            e = h("div"), d(e, "class", "dot svelte-179mmop"), oe(e, "filled", t[11] < t[0].length);
          },
          m(n, r) {
            T(n, e, r);
          },
          p(n, r) {
            r & 1 && oe(e, "filled", n[11] < n[0].length);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function ul(t) {
        let e, n, r, s;
        function o() {
          return t[5](t[8]);
        }
        return {
          c() {
            e = h("button"), n = M(t[8]), d(e, "class", "key svelte-179mmop"), e.disabled = t[3];
          },
          m(i, a) {
            T(i, e, a), c(e, n), r || (s = G(e, "click", o), r = true);
          },
          p(i, a) {
            t = i, a & 8 && (e.disabled = t[3]);
          },
          d(i) {
            i && S(e), r = false, s();
          }
        };
      }
      function cC(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A = ve([
          0,
          1,
          2,
          3
        ]), D = [];
        for (let _ = 0; _ < 4; _ += 1) D[_] = cl(ll(t, A, _));
        let b = ve([
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]), v = [];
        for (let _ = 0; _ < 9; _ += 1) v[_] = ul(xl(t, b, _));
        return {
          c() {
            e = h("div");
            for (let _ = 0; _ < 4; _ += 1) D[_].c();
            n = y(), r = h("p"), s = M(t[1]), o = y(), i = h("div");
            for (let _ = 0; _ < 9; _ += 1) v[_].c();
            a = y(), x = h("button"), l = h("span"), l.textContent = "backspace", u = y(), f = h("button"), p = M("0"), E = y(), m = h("div"), d(e, "class", "dots svelte-179mmop"), oe(e, "shake", t[2]), d(r, "class", "error-msg svelte-179mmop"), d(l, "class", "material-icons svelte-179mmop"), d(x, "class", "key key-del svelte-179mmop"), d(x, "aria-label", "Delete"), x.disabled = t[3], d(f, "class", "key svelte-179mmop"), f.disabled = t[3], d(i, "class", "numpad svelte-179mmop"), oe(i, "disabled", t[3]);
          },
          m(_, g) {
            T(_, e, g);
            for (let F = 0; F < 4; F += 1) D[F] && D[F].m(e, null);
            T(_, n, g), T(_, r, g), c(r, s), T(_, o, g), T(_, i, g);
            for (let F = 0; F < 9; F += 1) v[F] && v[F].m(i, null);
            c(i, a), c(i, x), c(x, l), c(i, u), c(i, f), c(f, p), c(i, E), c(i, m), C || (B = [
              G(x, "click", t[6]),
              G(f, "click", t[7])
            ], C = true);
          },
          p(_, [g]) {
            if (g & 1) {
              A = ve([
                0,
                1,
                2,
                3
              ]);
              let F;
              for (F = 0; F < 4; F += 1) {
                const k = ll(_, A, F);
                D[F] ? D[F].p(k, g) : (D[F] = cl(k), D[F].c(), D[F].m(e, null));
              }
              for (; F < 4; F += 1) D[F].d(1);
            }
            if (g & 4 && oe(e, "shake", _[2]), g & 2 && V(s, _[1]), g & 24) {
              b = ve([
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
              let F;
              for (F = 0; F < 9; F += 1) {
                const k = xl(_, b, F);
                v[F] ? v[F].p(k, g) : (v[F] = ul(k), v[F].c(), v[F].m(i, a));
              }
              for (; F < 9; F += 1) v[F].d(1);
            }
            g & 8 && (x.disabled = _[3]), g & 8 && (f.disabled = _[3]), g & 8 && oe(i, "disabled", _[3]);
          },
          i: Z,
          o: Z,
          d(_) {
            _ && (S(e), S(n), S(r), S(o), S(i)), vt(D, _), vt(v, _), C = false, ue(B);
          }
        };
      }
      function uC(t, e, n) {
        let { digits: r = "" } = e, { error: s = "" } = e, { shaking: o = false } = e, { disabled: i = false } = e;
        const a = hi(), x = (f) => a("digit", String(f)), l = () => a("delete"), u = () => a("digit", "0");
        return t.$$set = (f) => {
          "digits" in f && n(0, r = f.digits), "error" in f && n(1, s = f.error), "shaking" in f && n(2, o = f.shaking), "disabled" in f && n(3, i = f.disabled);
        }, [
          r,
          s,
          o,
          i,
          a,
          x,
          l,
          u
        ];
      }
      class Nd extends Se {
        constructor(e) {
          super(), we(this, e, uC, cC, ke, {
            digits: 0,
            error: 1,
            shaking: 2,
            disabled: 3
          });
        }
      }
      function dC(t) {
        let e;
        return {
          c() {
            e = M("Confirm PIN");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function fC(t) {
        let e;
        return {
          c() {
            e = M(t[0]);
          },
          m(n, r) {
            T(n, e, r);
          },
          p(n, r) {
            r & 1 && V(e, n[0]);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function EC(t) {
        let e;
        return {
          c() {
            e = M("Saving\u2026");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function pC(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p;
        function E(B, A) {
          return B[5] ? EC : B[1] === "enter" ? fC : dC;
        }
        let m = E(t), C = m(t);
        return l = new Nd({
          props: {
            digits: t[2],
            error: t[3],
            shaking: t[4],
            disabled: t[5]
          }
        }), l.$on("digit", t[6]), l.$on("delete", t[7]), {
          c() {
            e = h("div"), n = h("div"), r = h("button"), r.innerHTML = '<span class="material-icons svelte-tihueg">arrow_back</span>', s = y(), o = h("div"), o.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-tihueg"/> <span class="brand-label"><span class="brand-peach svelte-tihueg">Peach</span><span class="brand-safe svelte-tihueg">Safe</span></span>', i = y(), a = h("p"), C.c(), x = y(), We(l.$$.fragment), d(r, "class", "back-btn svelte-tihueg"), d(r, "aria-label", "Cancel"), d(o, "class", "brand svelte-tihueg"), d(a, "class", "prompt svelte-tihueg"), d(n, "class", "setup-card svelte-tihueg"), d(e, "class", "overlay svelte-tihueg"), d(e, "role", "dialog"), d(e, "aria-modal", "true"), d(e, "aria-label", t[0]);
          },
          m(B, A) {
            T(B, e, A), c(e, n), c(n, r), c(n, s), c(n, o), c(n, i), c(n, a), C.m(a, null), c(n, x), Oe(l, n, null), u = true, f || (p = G(r, "click", t[8]), f = true);
          },
          p(B, [A]) {
            m === (m = E(B)) && C ? C.p(B, A) : (C.d(1), C = m(B), C && (C.c(), C.m(a, null)));
            const D = {};
            A & 4 && (D.digits = B[2]), A & 8 && (D.error = B[3]), A & 16 && (D.shaking = B[4]), A & 32 && (D.disabled = B[5]), l.$set(D), (!u || A & 1) && d(e, "aria-label", B[0]);
          },
          i(B) {
            u || (Ce(l.$$.fragment, B), u = true);
          },
          o(B) {
            Ae(l.$$.fragment, B), u = false;
          },
          d(B) {
            B && S(e), C.d(), He(l), f = false, p();
          }
        };
      }
      function mC(t, e, n) {
        let { title: r = "Set PIN" } = e;
        const s = hi();
        let o = "enter", i = "", a = "", x = "", l = false, u = false;
        function f(C) {
          a.length >= 4 || l || u || (n(3, x = ""), n(2, a += C.detail), a.length === 4 && E());
        }
        function p() {
          l || u || (n(2, a = a.slice(0, -1)), n(3, x = ""));
        }
        async function E() {
          if (o === "enter") i = a, n(2, a = ""), n(1, o = "confirm");
          else if (a === i) {
            n(5, u = true);
            try {
              await S7(a), ks.set(true), s("done");
            } catch (C) {
              n(3, x = C.message), n(5, u = false), n(2, a = "");
            }
          } else n(4, l = true), n(3, x = "PINs don't match \u2014 try again"), await new Promise((C) => setTimeout(C, 600)), n(2, a = ""), i = "", n(1, o = "enter"), n(3, x = ""), n(4, l = false);
        }
        function m() {
          s("cancel");
        }
        return t.$$set = (C) => {
          "title" in C && n(0, r = C.title);
        }, [
          r,
          o,
          a,
          x,
          l,
          u,
          f,
          p,
          m
        ];
      }
      class hC extends Se {
        constructor(e) {
          super(), we(this, e, mC, pC, ke, {
            title: 0
          });
        }
      }
      function dl(t, e, n) {
        const r = t.slice();
        return r[70] = e[n], r;
      }
      function fl(t, e, n) {
        const r = t.slice();
        return r[73] = e[n], r;
      }
      function CC(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A, D, b, v, _, g = t[4] ? "verified_user" : "shield", F, k, w = t[4] ? "Enabled" : "Disabled", P, N, I, L, R, O, W, H, q, X, j, U, z, K, Y, se, ce, re, he, Be, Te, $, ie, fe, De, ye, ze, $e, Ue, Le, Re, Ve, qt, nn, _t, rn, zt;
        function An(ee, pe) {
          return ee[31] ? AC : _C;
        }
        let bt = An(t), dt = bt(t);
        function kt(ee, pe) {
          if (ee[26] === "idle") return kC;
          if (ee[26] === "entering_pin") return bC;
          if (ee[26] === "exporting") return vC;
          if (ee[26] === "done") return DC;
          if (ee[26] === "error") return FC;
        }
        let yt = kt(t), Pe = yt && yt(t);
        function Fn(ee, pe) {
          return ee[4] ? wC : yC;
        }
        let ft = Fn(t), Et = ft(t);
        function It(ee, pe) {
          return ee[4] ? SC : TC;
        }
        let ae = It(t), je = ae(t), Me = t[25] && gl();
        function sn(ee, pe) {
          return ee[32] !== null ? MC : LC;
        }
        let Nt = sn(t), et = Nt(t);
        function Er(ee, pe) {
          return ee[32] !== null ? HC : OC;
        }
        let pr = Er(t), Rt = pr(t);
        function Hi(ee, pe) {
          return ee[3] ? zC : qC;
        }
        let mr = Hi(t), on = mr(t), xt = t[18] && _l(t);
        return {
          c() {
            e = h("section"), n = h("div"), r = h("div"), r.innerHTML = '<h2 class="svelte-3s0d7a">Appearance</h2> <p class="hint svelte-3s0d7a">Choose your preferred color scheme.</p>', s = y(), o = h("div"), i = h("button"), i.textContent = "Light", a = y(), x = h("button"), x.textContent = "Dark", l = y(), u = h("section"), f = h("h2"), f.textContent = "Export to mobile", p = y(), dt.c(), E = y(), Pe && Pe.c(), m = y(), C = h("section"), B = h("div"), A = h("div"), D = h("h2"), D.textContent = "Two-factor authentication", b = y(), v = h("span"), _ = h("span"), F = M(g), k = y(), P = M(w), N = y(), I = h("p"), Et.c(), L = y(), je.c(), R = y(), O = h("section"), W = h("div"), H = h("div"), q = h("h2"), q.textContent = "Screen lock", X = y(), j = h("button"), j.innerHTML = '<span class="material-icons svelte-3s0d7a">info_outline</span>', U = y(), Me && Me.c(), z = y(), K = h("p"), et.c(), Y = y(), Rt.c(), se = y(), ce = h("section"), re = h("div"), he = h("div"), Be = h("h2"), Be.textContent = "Email", Te = y(), $ = h("div"), ie = h("span"), fe = M(t[2]), De = y(), on.c(), ye = y(), ze = h("a"), ze.textContent = "Change email", $e = y(), Ue = h("section"), Ue.innerHTML = '<div class="row svelte-3s0d7a"><div class="svelte-3s0d7a"><h2 class="svelte-3s0d7a">Password</h2> <p class="hint svelte-3s0d7a">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-3s0d7a">Change password</a></div>', Le = y(), Re = h("section"), Ve = h("div"), Ve.innerHTML = '<h2 class="svelte-3s0d7a">Delete account</h2> <p class="hint svelte-3s0d7a">Permanently delete your account and all data stored on the server. This cannot be undone.</p>', qt = y(), xt && xt.c(), nn = y(), _t = h("button"), _t.textContent = "Delete account", d(r, "class", "svelte-3s0d7a"), d(i, "class", "theme-btn svelte-3s0d7a"), oe(i, "active", t[30] === "light"), d(x, "class", "theme-btn svelte-3s0d7a"), oe(x, "active", t[30] === "dark"), d(o, "class", "theme-toggle svelte-3s0d7a"), d(n, "class", "row svelte-3s0d7a"), d(e, "class", "card svelte-3s0d7a"), d(f, "class", "svelte-3s0d7a"), d(u, "class", "card svelte-3s0d7a"), d(D, "class", "svelte-3s0d7a"), d(_, "class", "material-icons svelte-3s0d7a"), d(v, "class", "status-badge svelte-3s0d7a"), oe(v, "enabled", t[4]), oe(v, "disabled", !t[4]), d(A, "class", "totp-heading svelte-3s0d7a"), d(I, "class", "hint svelte-3s0d7a"), d(C, "class", "card svelte-3s0d7a"), d(q, "class", "svelte-3s0d7a"), d(j, "class", "info-btn svelte-3s0d7a"), d(j, "aria-label", "About screen lock"), oe(j, "active", t[25]), d(H, "class", "section-heading svelte-3s0d7a"), d(K, "class", "hint svelte-3s0d7a"), d(O, "class", "card svelte-3s0d7a"), d(Be, "class", "svelte-3s0d7a"), d(ie, "class", "hint email-value svelte-3s0d7a"), d($, "class", "email-meta svelte-3s0d7a"), d(he, "class", "svelte-3s0d7a"), d(ze, "href", "#/change-email"), d(ze, "class", "btn-outline-sm svelte-3s0d7a"), d(re, "class", "row svelte-3s0d7a"), d(ce, "class", "card svelte-3s0d7a"), d(Ue, "class", "card svelte-3s0d7a"), d(_t, "class", "btn-danger svelte-3s0d7a"), d(Re, "class", "card danger-card svelte-3s0d7a");
          },
          m(ee, pe) {
            T(ee, e, pe), c(e, n), c(n, r), c(n, s), c(n, o), c(o, i), c(o, a), c(o, x), T(ee, l, pe), T(ee, u, pe), c(u, f), c(u, p), dt.m(u, null), c(u, E), Pe && Pe.m(u, null), T(ee, m, pe), T(ee, C, pe), c(C, B), c(B, A), c(A, D), c(A, b), c(A, v), c(v, _), c(_, F), c(v, k), c(v, P), c(B, N), c(B, I), Et.m(I, null), c(C, L), je.m(C, null), T(ee, R, pe), T(ee, O, pe), c(O, W), c(W, H), c(H, q), c(H, X), c(H, j), c(W, U), Me && Me.m(W, null), c(W, z), c(W, K), et.m(K, null), c(O, Y), Rt.m(O, null), T(ee, se, pe), T(ee, ce, pe), c(ce, re), c(re, he), c(he, Be), c(he, Te), c(he, $), c($, ie), c(ie, fe), c($, De), on.m($, null), c(re, ye), c(re, ze), T(ee, $e, pe), T(ee, Ue, pe), T(ee, Le, pe), T(ee, Re, pe), c(Re, Ve), c(Re, qt), xt && xt.m(Re, null), c(Re, nn), c(Re, _t), rn || (zt = [
              G(i, "click", t[42]),
              G(x, "click", t[43]),
              G(j, "click", t[52]),
              G(_t, "click", t[56])
            ], rn = true);
          },
          p(ee, pe) {
            pe[0] & 1073741824 && oe(i, "active", ee[30] === "light"), pe[0] & 1073741824 && oe(x, "active", ee[30] === "dark"), bt !== (bt = An(ee)) && (dt.d(1), dt = bt(ee), dt && (dt.c(), dt.m(u, E))), yt === (yt = kt(ee)) && Pe ? Pe.p(ee, pe) : (Pe && Pe.d(1), Pe = yt && yt(ee), Pe && (Pe.c(), Pe.m(u, null))), pe[0] & 16 && g !== (g = ee[4] ? "verified_user" : "shield") && V(F, g), pe[0] & 16 && w !== (w = ee[4] ? "Enabled" : "Disabled") && V(P, w), pe[0] & 16 && oe(v, "enabled", ee[4]), pe[0] & 16 && oe(v, "disabled", !ee[4]), ft !== (ft = Fn(ee)) && (Et.d(1), Et = ft(ee), Et && (Et.c(), Et.m(I, null))), ae === (ae = It(ee)) && je ? je.p(ee, pe) : (je.d(1), je = ae(ee), je && (je.c(), je.m(C, null))), pe[0] & 33554432 && oe(j, "active", ee[25]), ee[25] ? Me || (Me = gl(), Me.c(), Me.m(W, z)) : Me && (Me.d(1), Me = null), Nt !== (Nt = sn(ee)) && (et.d(1), et = Nt(ee), et && (et.c(), et.m(K, null))), pr === (pr = Er(ee)) && Rt ? Rt.p(ee, pe) : (Rt.d(1), Rt = pr(ee), Rt && (Rt.c(), Rt.m(O, null))), pe[0] & 4 && V(fe, ee[2]), mr !== (mr = Hi(ee)) && (on.d(1), on = mr(ee), on && (on.c(), on.m($, null))), ee[18] ? xt ? xt.p(ee, pe) : (xt = _l(ee), xt.c(), xt.m(Re, nn)) : xt && (xt.d(1), xt = null);
          },
          d(ee) {
            ee && (S(e), S(l), S(u), S(m), S(C), S(R), S(O), S(se), S(ce), S($e), S(Ue), S(Le), S(Re)), dt.d(), Pe && Pe.d(), Et.d(), je.d(), Me && Me.d(), et.d(), Rt.d(), on.d(), xt && xt.d(), rn = false, ue(zt);
          }
        };
      }
      function BC(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[1]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 2 && V(n, r[1]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function gC(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Loading\u2026", d(e, "class", "muted svelte-3s0d7a");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function _C(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", d(e, "class", "hint svelte-3s0d7a");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function AC(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", d(e, "class", "hint warning svelte-3s0d7a");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function FC(t) {
        let e, n, r, s, o, i;
        return {
          c() {
            e = h("p"), n = M(t[29]), r = y(), s = h("button"), s.textContent = "Try again", d(e, "class", "error svelte-3s0d7a"), d(s, "class", "btn-ghost svelte-3s0d7a");
          },
          m(a, x) {
            T(a, e, x), c(e, n), T(a, r, x), T(a, s, x), o || (i = G(s, "click", t[38]), o = true);
          },
          p(a, x) {
            x[0] & 536870912 && V(n, a[29]);
          },
          d(a) {
            a && (S(e), S(r), S(s)), o = false, i();
          }
        };
      }
      function DC(t) {
        let e, n, r, s, o;
        return {
          c() {
            e = h("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, n = y(), r = h("button"), r.textContent = "Done", d(e, "class", "hint svelte-3s0d7a"), d(r, "class", "btn-ghost svelte-3s0d7a");
          },
          m(i, a) {
            T(i, e, a), T(i, n, a), T(i, r, a), s || (o = G(r, "click", t[38]), s = true);
          },
          p: Z,
          d(i) {
            i && (S(e), S(n), S(r)), s = false, o();
          }
        };
      }
      function vC(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Encrypting\u2026", d(e, "class", "hint svelte-3s0d7a");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function bC(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A, D, b = t[29] && El(t);
        return {
          c() {
            e = h("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", n = y(), r = h("div"), s = h("label"), o = M(`PIN
            `), i = h("input"), a = y(), x = h("label"), l = M(`Confirm PIN
            `), u = h("input"), f = y(), b && b.c(), p = y(), E = h("div"), m = h("button"), m.textContent = "Download backup", C = y(), B = h("button"), B.textContent = "Cancel", d(e, "class", "hint svelte-3s0d7a"), d(i, "type", "password"), d(i, "inputmode", "numeric"), d(i, "maxlength", "6"), d(i, "placeholder", "6 digits"), d(i, "autocomplete", "new-password"), d(u, "type", "password"), d(u, "inputmode", "numeric"), d(u, "maxlength", "6"), d(u, "placeholder", "6 digits"), d(u, "autocomplete", "new-password"), d(m, "class", "btn-primary svelte-3s0d7a"), d(B, "class", "btn-ghost svelte-3s0d7a"), d(E, "class", "export-actions svelte-3s0d7a"), d(r, "class", "export-form svelte-3s0d7a");
          },
          m(v, _) {
            T(v, e, _), T(v, n, _), T(v, r, _), c(r, s), c(s, o), c(s, i), xe(i, t[27]), c(r, a), c(r, x), c(x, l), c(x, u), xe(u, t[28]), c(r, f), b && b.m(r, null), c(r, p), c(r, E), c(E, m), c(E, C), c(E, B), A || (D = [
              G(i, "input", t[45]),
              G(u, "input", t[46]),
              G(m, "click", t[37]),
              G(B, "click", t[38])
            ], A = true);
          },
          p(v, _) {
            _[0] & 134217728 && i.value !== v[27] && xe(i, v[27]), _[0] & 268435456 && u.value !== v[28] && xe(u, v[28]), v[29] ? b ? b.p(v, _) : (b = El(v), b.c(), b.m(r, p)) : b && (b.d(1), b = null);
          },
          d(v) {
            v && (S(e), S(n), S(r)), b && b.d(), A = false, ue(D);
          }
        };
      }
      function kC(t) {
        let e, n, r;
        return {
          c() {
            e = h("button"), e.textContent = "Export data for mobile app", d(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(s, o) {
            T(s, e, o), n || (r = G(e, "click", t[44]), n = true);
          },
          p: Z,
          d(s) {
            s && S(e), n = false, r();
          }
        };
      }
      function El(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[29]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 536870912 && V(n, r[29]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function yC(t) {
        let e;
        return {
          c() {
            e = M("Add an extra layer of security by requiring an authenticator code at login.");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function wC(t) {
        let e;
        return {
          c() {
            e = M("Your account requires a code from your authenticator app at login.");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function SC(t) {
        let e, n, r, s, o, i, a, x = t[5] !== 1 ? "s" : "", l, u, f, p, E, m, C, B, A, D, b, v, _, g;
        function F(O, W) {
          return O[15].length > 0 ? IC : PC;
        }
        let k = F(t), w = k(t), P = t[7] && hl(t);
        function N(O, W) {
          return O[6].length === 0 ? RC : NC;
        }
        let I = N(t), L = I(t), R = t[11] && Bl(t);
        return {
          c() {
            e = h("div"), n = h("div"), r = h("span"), r.textContent = "key", s = y(), o = h("span"), i = M(t[5]), a = M(" backup code"), l = M(x), u = M(" remaining"), f = y(), w.c(), p = y(), E = h("div"), m = h("div"), m.innerHTML = '<span class="material-icons svelte-3s0d7a">devices</span> <span>Trusted devices</span>', C = y(), P && P.c(), B = y(), L.c(), A = y(), D = h("div"), R && R.c(), b = y(), v = h("button"), v.textContent = "Disable 2FA", d(r, "class", "material-icons svelte-3s0d7a"), d(n, "class", "backup-count svelte-3s0d7a"), d(e, "class", "backup-section svelte-3s0d7a"), d(m, "class", "backup-count svelte-3s0d7a"), d(E, "class", "backup-section svelte-3s0d7a"), d(v, "class", "btn-danger svelte-3s0d7a"), d(D, "class", "danger-zone svelte-3s0d7a");
          },
          m(O, W) {
            T(O, e, W), c(e, n), c(n, r), c(n, s), c(n, o), c(o, i), c(o, a), c(o, l), c(o, u), c(e, f), w.m(e, null), T(O, p, W), T(O, E, W), c(E, m), c(E, C), P && P.m(E, null), c(E, B), L.m(E, null), T(O, A, W), T(O, D, W), R && R.m(D, null), c(D, b), c(D, v), _ || (g = G(v, "click", t[51]), _ = true);
          },
          p(O, W) {
            W[0] & 32 && V(i, O[5]), W[0] & 32 && x !== (x = O[5] !== 1 ? "s" : "") && V(l, x), k === (k = F(O)) && w ? w.p(O, W) : (w.d(1), w = k(O), w && (w.c(), w.m(e, null))), O[7] ? P ? P.p(O, W) : (P = hl(O), P.c(), P.m(E, B)) : P && (P.d(1), P = null), I === (I = N(O)) && L ? L.p(O, W) : (L.d(1), L = I(O), L && (L.c(), L.m(E, null))), O[11] ? R ? R.p(O, W) : (R = Bl(O), R.c(), R.m(D, b)) : R && (R.d(1), R = null);
          },
          d(O) {
            O && (S(e), S(p), S(E), S(A), S(D)), w.d(), P && P.d(), L.d(), R && R.d(), _ = false, g();
          }
        };
      }
      function TC(t) {
        let e, n, r;
        return {
          c() {
            e = h("button"), e.textContent = "Enable 2FA", d(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(s, o) {
            T(s, e, o), n || (r = G(e, "click", t[47]), n = true);
          },
          p: Z,
          d(s) {
            s && S(e), n = false, r();
          }
        };
      }
      function PC(t) {
        let e, n, r, s, o, i = t[14] && pl(t);
        return {
          c() {
            i && i.c(), e = y(), n = h("button"), r = M("Regenerate backup codes"), d(n, "class", "btn-outline-sm svelte-3s0d7a"), n.disabled = t[13];
          },
          m(a, x) {
            i && i.m(a, x), T(a, e, x), T(a, n, x), c(n, r), s || (o = G(n, "click", t[49]), s = true);
          },
          p(a, x) {
            a[14] ? i ? i.p(a, x) : (i = pl(a), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), x[0] & 8192 && (n.disabled = a[13]);
          },
          d(a) {
            a && (S(e), S(n)), i && i.d(a), s = false, o();
          }
        };
      }
      function IC(t) {
        let e, n, r, s, o, i, a, x, l, u, f = ve(t[15]), p = [];
        for (let E = 0; E < f.length; E += 1) p[E] = ml(fl(t, f, E));
        return {
          c() {
            e = h("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", n = y(), r = h("div");
            for (let E = 0; E < p.length; E += 1) p[E].c();
            s = y(), o = h("div"), i = h("button"), i.innerHTML = `<span class="material-icons svelte-3s0d7a">download</span>
                Download`, a = y(), x = h("button"), x.textContent = "Done", d(e, "class", "hint warning svelte-3s0d7a"), d(r, "class", "backup-grid"), d(i, "class", "btn-outline-sm dl-btn svelte-3s0d7a"), d(x, "class", "btn-outline-sm svelte-3s0d7a"), d(o, "class", "regen-code-actions svelte-3s0d7a");
          },
          m(E, m) {
            T(E, e, m), T(E, n, m), T(E, r, m);
            for (let C = 0; C < p.length; C += 1) p[C] && p[C].m(r, null);
            T(E, s, m), T(E, o, m), c(o, i), c(o, a), c(o, x), l || (u = [
              G(i, "click", t[48]),
              G(x, "click", t[40])
            ], l = true);
          },
          p(E, m) {
            if (m[0] & 32768) {
              f = ve(E[15]);
              let C;
              for (C = 0; C < f.length; C += 1) {
                const B = fl(E, f, C);
                p[C] ? p[C].p(B, m) : (p[C] = ml(B), p[C].c(), p[C].m(r, null));
              }
              for (; C < p.length; C += 1) p[C].d(1);
              p.length = f.length;
            }
          },
          d(E) {
            E && (S(e), S(n), S(r), S(s), S(o)), vt(p, E), l = false, ue(u);
          }
        };
      }
      function pl(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[14]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 16384 && V(n, r[14]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function ml(t) {
        let e, n = t[73] + "", r;
        return {
          c() {
            e = h("code"), r = M(n), d(e, "class", "backup-code");
          },
          m(s, o) {
            T(s, e, o), c(e, r);
          },
          p(s, o) {
            o[0] & 32768 && n !== (n = s[73] + "") && V(r, n);
          },
          d(s) {
            s && S(e);
          }
        };
      }
      function hl(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[7]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 128 && V(n, r[7]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function NC(t) {
        let e, n = [], r = /* @__PURE__ */ new Map(), s, o, i = t[8] ? "Revoking\u2026" : "Revoke all", a, x, l, u = ve(t[6]);
        const f = (p) => p[70].id;
        for (let p = 0; p < u.length; p += 1) {
          let E = dl(t, u, p), m = f(E);
          r.set(m, n[p] = Cl(m, E));
        }
        return {
          c() {
            e = h("ul");
            for (let p = 0; p < n.length; p += 1) n[p].c();
            s = y(), o = h("button"), a = M(i), d(e, "class", "device-list svelte-3s0d7a"), d(o, "class", "btn-outline-sm svelte-3s0d7a"), o.disabled = t[8];
          },
          m(p, E) {
            T(p, e, E);
            for (let m = 0; m < n.length; m += 1) n[m] && n[m].m(e, null);
            T(p, s, E), T(p, o, E), c(o, a), x || (l = G(o, "click", t[34]), x = true);
          },
          p(p, E) {
            E[0] & 64 | E[1] & 4 && (u = ve(p[6]), n = J5(n, E, f, 1, p, u, r, e, K5, Cl, null, dl)), E[0] & 256 && i !== (i = p[8] ? "Revoking\u2026" : "Revoke all") && V(a, i), E[0] & 256 && (o.disabled = p[8]);
          },
          d(p) {
            p && (S(e), S(s), S(o));
            for (let E = 0; E < n.length; E += 1) n[E].d();
            x = false, l();
          }
        };
      }
      function RC(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = 'No trusted devices. Check "Remember this device" at login to skip 2FA on this browser in future.', d(e, "class", "hint svelte-3s0d7a");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function Cl(t, e) {
        let n, r, s = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "", o, i, a = Tl(e[70].created_at) + "", x, l, u, f, p, E;
        function m() {
          return e[50](e[70]);
        }
        return {
          key: t,
          first: null,
          c() {
            n = h("li"), r = h("span"), o = M(s), i = M("Added "), x = M(a), l = y(), u = h("button"), u.textContent = "Revoke", f = y(), d(r, "class", "device-date svelte-3s0d7a"), d(u, "class", "btn-outline-sm svelte-3s0d7a"), d(n, "class", "device-item svelte-3s0d7a"), this.first = n;
          },
          m(C, B) {
            T(C, n, B), c(n, r), c(r, o), c(r, i), c(r, x), c(n, l), c(n, u), c(n, f), p || (E = G(u, "click", m), p = true);
          },
          p(C, B) {
            e = C, B[0] & 64 && s !== (s = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "") && V(o, s), B[0] & 64 && a !== (a = Tl(e[70].created_at) + "") && V(x, a);
          },
          d(C) {
            C && S(n), p = false, E();
          }
        };
      }
      function Bl(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[11]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 2048 && V(n, r[11]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function gl(t) {
        let e;
        return {
          c() {
            e = h("p"), e.innerHTML = "Requires a 4-digit PIN to open Encounters, Results, Alerts and Settings, while still allowing you to add a new encounter from the Home screen. Useful if you hand your phone to someone - it stops casual snooping. <br/><strong>Note:</strong> your data is already encrypted by your password; the PIN adds no additional encryption.", d(e, "class", "info-box svelte-3s0d7a");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function LC(t) {
        let e;
        return {
          c() {
            e = M("Set a 4-digit PIN to prevent casual access to your data.");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function MC(t) {
        let e;
        return {
          c() {
            e = M("A PIN is required to view your encounters, results, and alerts.");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function OC(t) {
        let e, n, r;
        return {
          c() {
            e = h("button"), e.textContent = "Set PIN", d(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(s, o) {
            T(s, e, o), n || (r = G(e, "click", t[55]), n = true);
          },
          p: Z,
          d(s) {
            s && S(e), n = false, r();
          }
        };
      }
      function HC(t) {
        let e, n, r, s, o, i;
        return {
          c() {
            e = h("div"), n = h("button"), n.textContent = "Change PIN", r = y(), s = h("button"), s.textContent = "Remove PIN", d(n, "class", "btn-outline-sm svelte-3s0d7a"), d(s, "class", "btn-outline-sm btn-outline-danger svelte-3s0d7a"), d(e, "class", "row-actions svelte-3s0d7a");
          },
          m(a, x) {
            T(a, e, x), c(e, n), c(e, r), c(e, s), o || (i = [
              G(n, "click", t[53]),
              G(s, "click", t[54])
            ], o = true);
          },
          p: Z,
          d(a) {
            a && S(e), o = false, ue(i);
          }
        };
      }
      function qC(t) {
        let e;
        return {
          c() {
            e = h("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">warning</span>
                Unverified`, d(e, "class", "unverified-badge svelte-3s0d7a");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function zC(t) {
        let e;
        return {
          c() {
            e = h("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">verified</span>
                Verified`, d(e, "class", "verified-badge svelte-3s0d7a");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function _l(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[18]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 262144 && V(n, r[18]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function Al(t) {
        let e, n;
        return e = new hC({
          props: {
            title: t[21]
          }
        }), e.$on("done", t[57]), e.$on("cancel", t[58]), {
          c() {
            We(e.$$.fragment);
          },
          m(r, s) {
            Oe(e, r, s), n = true;
          },
          p(r, s) {
            const o = {};
            s[0] & 2097152 && (o.title = r[21]), e.$set(o);
          },
          i(r) {
            n || (Ce(e.$$.fragment, r), n = true);
          },
          o(r) {
            Ae(e.$$.fragment, r), n = false;
          },
          d(r) {
            He(e, r);
          }
        };
      }
      function Fl(t) {
        let e, n, r, s, o, i, a, x, l, u = t[23] ? "Removing\u2026" : "Remove PIN", f, p, E, m, C, B, A = t[24] && Dl(t);
        return {
          c() {
            e = h("div"), n = h("div"), r = h("h2"), r.textContent = "Remove screen lock PIN?", s = y(), o = h("p"), o.textContent = "Anyone with access to your phone will be able to view your encounters and alerts.", i = y(), A && A.c(), a = y(), x = h("div"), l = h("button"), f = M(u), p = y(), E = h("button"), m = M("Cancel"), d(r, "id", "remove-pin-title"), d(r, "class", "svelte-3s0d7a"), d(o, "class", "svelte-3s0d7a"), d(l, "class", "btn-danger svelte-3s0d7a"), l.disabled = t[23], d(E, "class", "btn-ghost svelte-3s0d7a"), E.disabled = t[23], d(x, "class", "dialog-actions svelte-3s0d7a"), d(n, "class", "dialog svelte-3s0d7a"), d(e, "class", "overlay svelte-3s0d7a"), d(e, "role", "dialog"), d(e, "aria-modal", "true"), d(e, "aria-labelledby", "remove-pin-title");
          },
          m(D, b) {
            T(D, e, b), c(e, n), c(n, r), c(n, s), c(n, o), c(n, i), A && A.m(n, null), c(n, a), c(n, x), c(x, l), c(l, f), c(x, p), c(x, E), c(E, m), C || (B = [
              G(l, "click", t[36]),
              G(E, "click", t[59])
            ], C = true);
          },
          p(D, b) {
            D[24] ? A ? A.p(D, b) : (A = Dl(D), A.c(), A.m(n, a)) : A && (A.d(1), A = null), b[0] & 8388608 && u !== (u = D[23] ? "Removing\u2026" : "Remove PIN") && V(f, u), b[0] & 8388608 && (l.disabled = D[23]), b[0] & 8388608 && (E.disabled = D[23]);
          },
          d(D) {
            D && S(e), A && A.d(), C = false, ue(B);
          }
        };
      }
      function Dl(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[24]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 16777216 && V(n, r[24]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function vl(t) {
        let e, n, r, s, o, i, a, x, l, u = t[10] ? "Disabling\u2026" : "Yes, disable 2FA", f, p, E, m, C, B, A = t[11] && bl(t);
        return {
          c() {
            e = h("div"), n = h("div"), r = h("h2"), r.textContent = "Disable two-factor authentication?", s = y(), o = h("p"), o.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, i = y(), A && A.c(), a = y(), x = h("div"), l = h("button"), f = M(u), p = y(), E = h("button"), m = M("Cancel"), d(r, "id", "disable-title"), d(r, "class", "svelte-3s0d7a"), d(o, "class", "svelte-3s0d7a"), d(l, "class", "btn-danger svelte-3s0d7a"), l.disabled = t[10], d(E, "class", "btn-ghost svelte-3s0d7a"), E.disabled = t[10], d(x, "class", "dialog-actions svelte-3s0d7a"), d(n, "class", "dialog svelte-3s0d7a"), d(e, "class", "overlay svelte-3s0d7a"), d(e, "role", "dialog"), d(e, "aria-modal", "true"), d(e, "aria-labelledby", "disable-title");
          },
          m(D, b) {
            T(D, e, b), c(e, n), c(n, r), c(n, s), c(n, o), c(n, i), A && A.m(n, null), c(n, a), c(n, x), c(x, l), c(l, f), c(x, p), c(x, E), c(E, m), C || (B = [
              G(l, "click", t[35]),
              G(E, "click", t[60])
            ], C = true);
          },
          p(D, b) {
            D[11] ? A ? A.p(D, b) : (A = bl(D), A.c(), A.m(n, a)) : A && (A.d(1), A = null), b[0] & 1024 && u !== (u = D[10] ? "Disabling\u2026" : "Yes, disable 2FA") && V(f, u), b[0] & 1024 && (l.disabled = D[10]), b[0] & 1024 && (E.disabled = D[10]);
          },
          d(D) {
            D && S(e), A && A.d(), C = false, ue(B);
          }
        };
      }
      function bl(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[11]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 2048 && V(n, r[11]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function kl(t) {
        let e, n, r, s, o, i, a, x, l, u = t[13] ? "Regenerating\u2026" : "Regenerate", f, p, E, m, C, B, A = t[14] && yl(t);
        return {
          c() {
            e = h("div"), n = h("div"), r = h("h2"), r.textContent = "Regenerate backup codes?", s = y(), o = h("p"), o.textContent = "All existing backup codes will be permanently invalidated.", i = y(), A && A.c(), a = y(), x = h("div"), l = h("button"), f = M(u), p = y(), E = h("button"), m = M("Cancel"), d(r, "id", "regen-title"), d(r, "class", "svelte-3s0d7a"), d(o, "class", "svelte-3s0d7a"), d(l, "class", "btn-primary svelte-3s0d7a"), l.disabled = t[13], d(E, "class", "btn-ghost svelte-3s0d7a"), E.disabled = t[13], d(x, "class", "dialog-actions svelte-3s0d7a"), d(n, "class", "dialog svelte-3s0d7a"), d(e, "class", "overlay svelte-3s0d7a"), d(e, "role", "dialog"), d(e, "aria-modal", "true"), d(e, "aria-labelledby", "regen-title");
          },
          m(D, b) {
            T(D, e, b), c(e, n), c(n, r), c(n, s), c(n, o), c(n, i), A && A.m(n, null), c(n, a), c(n, x), c(x, l), c(l, f), c(x, p), c(x, E), c(E, m), C || (B = [
              G(l, "click", t[39]),
              G(E, "click", t[61])
            ], C = true);
          },
          p(D, b) {
            D[14] ? A ? A.p(D, b) : (A = yl(D), A.c(), A.m(n, a)) : A && (A.d(1), A = null), b[0] & 8192 && u !== (u = D[13] ? "Regenerating\u2026" : "Regenerate") && V(f, u), b[0] & 8192 && (l.disabled = D[13]), b[0] & 8192 && (E.disabled = D[13]);
          },
          d(D) {
            D && S(e), A && A.d(), C = false, ue(B);
          }
        };
      }
      function yl(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[14]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 16384 && V(n, r[14]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function wl(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B = t[17] ? "Deleting\u2026" : "Yes, delete my account", A, D, b, v, _, g, F, k = t[18] && Sl(t);
        return {
          c() {
            e = h("div"), n = h("div"), r = h("h2"), r.textContent = "Delete your account?", s = y(), o = h("p"), o.innerHTML = `This will permanently delete your account and all data stored on the server.
        <strong>There is no undo.</strong>`, i = y(), a = h("p"), a.textContent = "If you haven't already, export your data first so you can import it into the mobile app.", x = y(), l = h("label"), l.textContent = "Type your email address to confirm:", u = y(), f = h("input"), p = y(), k && k.c(), E = y(), m = h("div"), C = h("button"), A = M(B), b = y(), v = h("button"), _ = M("Cancel"), d(r, "id", "delete-title"), d(r, "class", "svelte-3s0d7a"), d(o, "class", "svelte-3s0d7a"), d(a, "class", "hint svelte-3s0d7a"), d(l, "class", "confirm-label svelte-3s0d7a"), d(l, "for", "delete-confirm-input"), d(f, "id", "delete-confirm-input"), d(f, "class", "confirm-input svelte-3s0d7a"), d(f, "type", "text"), d(f, "placeholder", t[2]), d(f, "autocomplete", "off"), f.disabled = t[17], d(C, "class", "btn-danger svelte-3s0d7a"), C.disabled = D = t[17] || t[19] !== t[2], d(v, "class", "btn-ghost svelte-3s0d7a"), v.disabled = t[17], d(m, "class", "dialog-actions svelte-3s0d7a"), d(n, "class", "dialog svelte-3s0d7a"), d(e, "class", "overlay svelte-3s0d7a"), d(e, "role", "dialog"), d(e, "aria-modal", "true"), d(e, "aria-labelledby", "delete-title");
          },
          m(w, P) {
            T(w, e, P), c(e, n), c(n, r), c(n, s), c(n, o), c(n, i), c(n, a), c(n, x), c(n, l), c(n, u), c(n, f), xe(f, t[19]), c(n, p), k && k.m(n, null), c(n, E), c(n, m), c(m, C), c(C, A), c(m, b), c(m, v), c(v, _), g || (F = [
              G(f, "input", t[62]),
              G(C, "click", t[41]),
              G(v, "click", t[63])
            ], g = true);
          },
          p(w, P) {
            P[0] & 4 && d(f, "placeholder", w[2]), P[0] & 131072 && (f.disabled = w[17]), P[0] & 524288 && f.value !== w[19] && xe(f, w[19]), w[18] ? k ? k.p(w, P) : (k = Sl(w), k.c(), k.m(n, E)) : k && (k.d(1), k = null), P[0] & 131072 && B !== (B = w[17] ? "Deleting\u2026" : "Yes, delete my account") && V(A, B), P[0] & 655364 && D !== (D = w[17] || w[19] !== w[2]) && (C.disabled = D), P[0] & 131072 && (v.disabled = w[17]);
          },
          d(w) {
            w && S(e), k && k.d(), g = false, ue(F);
          }
        };
      }
      function Sl(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[18]), d(e, "class", "error svelte-3s0d7a");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 262144 && V(n, r[18]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function UC(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p;
        e = new Ot({});
        function E(_, g) {
          return _[0] ? gC : _[1] ? BC : CC;
        }
        let m = E(t), C = m(t), B = t[20] && Al(t), A = t[22] && Fl(t), D = t[9] && vl(t), b = t[12] && kl(t), v = t[16] && wl(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), s = h("h1"), s.textContent = "Settings", o = y(), C.c(), i = y(), B && B.c(), a = y(), A && A.c(), x = y(), D && D.c(), l = y(), b && b.c(), u = y(), v && v.c(), f = Pt(), d(s, "class", "svelte-3s0d7a"), d(r, "class", "svelte-3s0d7a");
          },
          m(_, g) {
            Oe(e, _, g), T(_, n, g), T(_, r, g), c(r, s), c(r, o), C.m(r, null), T(_, i, g), B && B.m(_, g), T(_, a, g), A && A.m(_, g), T(_, x, g), D && D.m(_, g), T(_, l, g), b && b.m(_, g), T(_, u, g), v && v.m(_, g), T(_, f, g), p = true;
          },
          p(_, g) {
            m === (m = E(_)) && C ? C.p(_, g) : (C.d(1), C = m(_), C && (C.c(), C.m(r, null))), _[20] ? B ? (B.p(_, g), g[0] & 1048576 && Ce(B, 1)) : (B = Al(_), B.c(), Ce(B, 1), B.m(a.parentNode, a)) : B && (B0(), Ae(B, 1, 1, () => {
              B = null;
            }), g0()), _[22] ? A ? A.p(_, g) : (A = Fl(_), A.c(), A.m(x.parentNode, x)) : A && (A.d(1), A = null), _[9] ? D ? D.p(_, g) : (D = vl(_), D.c(), D.m(l.parentNode, l)) : D && (D.d(1), D = null), _[12] ? b ? b.p(_, g) : (b = kl(_), b.c(), b.m(u.parentNode, u)) : b && (b.d(1), b = null), _[16] ? v ? v.p(_, g) : (v = wl(_), v.c(), v.m(f.parentNode, f)) : v && (v.d(1), v = null);
          },
          i(_) {
            p || (Ce(e.$$.fragment, _), Ce(B), p = true);
          },
          o(_) {
            Ae(e.$$.fragment, _), Ae(B), p = false;
          },
          d(_) {
            _ && (S(n), S(r), S(i), S(a), S(x), S(l), S(u), S(f)), He(e, _), C.d(), B && B.d(_), A && A.d(_), D && D.d(_), b && b.d(_), v && v.d(_);
          }
        };
      }
      function Tl(t) {
        return new Date(t * 1e3).toLocaleDateString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }
      function jC(t) {
        const e = t.join(`
`), n = new Blob([
          e
        ], {
          type: "text/plain"
        }), r = URL.createObjectURL(n), s = document.createElement("a");
        s.href = r, s.download = "backup-codes.txt", s.click(), URL.revokeObjectURL(r);
      }
      function GC(t, e, n) {
        let r, s, o, i, a, x, l, u;
        it(t, S0, (ae) => n(64, r = ae)), it(t, os, (ae) => n(65, s = ae)), it(t, W0, (ae) => n(66, o = ae)), it(t, jn, (ae) => n(67, i = ae)), it(t, ys, (ae) => n(68, a = ae)), it(t, Mr, (ae) => n(30, x = ae)), it(t, dd, (ae) => n(31, l = ae)), it(t, Ti, (ae) => n(32, u = ae));
        let f = true, p = null, E = "", m = false, C = false, B = 0, A = [], D = null, b = false, v = false, _ = false, g = null, F = false, k = false, w = null, P = [], N = false, I = false, L = null, R = "";
        st(async () => {
          if (!ut()) {
            Ee("/login");
            return;
          }
          await O();
        });
        async function O() {
          n(0, f = true), n(1, p = null);
          try {
            n(2, E = a ?? ""), n(3, m = i ?? false), n(4, C = o ?? false), C && (n(5, B = s ?? 0), n(6, A = r ?? []));
          } catch (ae) {
            n(1, p = ae.message);
          } finally {
            n(0, f = false);
          }
        }
        async function W(ae) {
          n(7, D = null);
          try {
            await Jm(ae), n(6, A = A.filter((je) => je.id !== ae)), S0.set(A), eo(Hr());
          } catch (je) {
            n(7, D = je.message);
          }
        }
        async function H() {
          n(7, D = null), n(8, b = true);
          try {
            await Xm(), n(6, A = []), S0.set([]), eo(Hr());
          } catch (ae) {
            n(7, D = ae.message);
          } finally {
            n(8, b = false);
          }
        }
        async function q() {
          n(11, g = null), n(10, _ = true);
          try {
            await Ym(), n(4, C = false), W0.set(false), n(5, B = 0), n(6, A = []), eo(Hr()), n(9, v = false);
          } catch (ae) {
            n(11, g = ae.message);
          } finally {
            n(10, _ = false);
          }
        }
        let X = false, j = "Set PIN", U = false, z = false, K = "", Y = false;
        async function se() {
          n(23, z = true);
          try {
            await T7(), n(22, U = false);
          } catch (ae) {
            n(24, K = ae.message);
          } finally {
            n(23, z = false);
          }
        }
        let ce = "idle", re = "", he = "", Be = null;
        async function Te() {
          if (n(29, Be = null), !/^\d{6}$/.test(re)) {
            n(29, Be = "PIN must be exactly 6 digits.");
            return;
          }
          if (re !== he) {
            n(29, Be = "PINs do not match.");
            return;
          }
          n(26, ce = "exporting");
          try {
            const ae = await xC(re), Me = `${lC}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.enc`, sn = new Blob([
              ae
            ], {
              type: "application/octet-stream"
            }), Nt = URL.createObjectURL(sn), et = document.createElement("a");
            et.href = Nt, et.download = Me, et.click(), URL.revokeObjectURL(Nt), n(26, ce = "done");
          } catch (ae) {
            n(29, Be = ae.message), n(26, ce = "error");
          }
        }
        function $() {
          n(26, ce = "idle"), n(27, re = ""), n(28, he = ""), n(29, Be = null);
        }
        async function ie() {
          n(14, w = null), n(13, k = true);
          try {
            const { backup_codes: ae } = await Km();
            n(15, P = ae), n(5, B = ae.length), os.set(ae.length), n(12, F = false);
          } catch (ae) {
            n(14, w = ae.message);
          } finally {
            n(13, k = false);
          }
        }
        function fe() {
          n(15, P = []);
        }
        async function De() {
          n(18, L = null), n(17, I = true);
          try {
            await e7(), Ee("/login");
          } catch (ae) {
            n(18, L = ae.message);
          } finally {
            n(17, I = false);
          }
        }
        const ye = () => Ka(Mr, x = "light", x), ze = () => Ka(Mr, x = "dark", x), $e = () => n(26, ce = "entering_pin");
        function Ue() {
          re = this.value, n(27, re);
        }
        function Le() {
          he = this.value, n(28, he);
        }
        const Re = () => Ee("/settings/2fa-setup"), Ve = () => jC(P), qt = () => {
          n(12, F = true);
        }, nn = (ae) => W(ae.id), _t = () => {
          n(9, v = true);
        }, rn = () => n(25, Y = !Y), zt = () => {
          n(21, j = "Change PIN"), n(20, X = true);
        }, An = () => {
          n(22, U = true), n(24, K = "");
        }, bt = () => {
          n(21, j = "Set PIN"), n(20, X = true);
        }, dt = () => {
          n(16, N = true), n(19, R = "");
        }, kt = () => n(20, X = false), yt = () => n(20, X = false), Pe = () => {
          n(22, U = false), n(24, K = "");
        }, Fn = () => {
          n(9, v = false), n(11, g = null);
        }, ft = () => {
          n(12, F = false), n(14, w = null);
        };
        function Et() {
          R = this.value, n(19, R);
        }
        return [
          f,
          p,
          E,
          m,
          C,
          B,
          A,
          D,
          b,
          v,
          _,
          g,
          F,
          k,
          w,
          P,
          N,
          I,
          L,
          R,
          X,
          j,
          U,
          z,
          K,
          Y,
          ce,
          re,
          he,
          Be,
          x,
          l,
          u,
          W,
          H,
          q,
          se,
          Te,
          $,
          ie,
          fe,
          De,
          ye,
          ze,
          $e,
          Ue,
          Le,
          Re,
          Ve,
          qt,
          nn,
          _t,
          rn,
          zt,
          An,
          bt,
          dt,
          kt,
          yt,
          Pe,
          Fn,
          ft,
          Et,
          () => {
            n(16, N = false), n(18, L = null), n(19, R = "");
          }
        ];
      }
      class WC extends Se {
        constructor(e) {
          super(), we(this, e, GC, UC, ke, {}, null, [
            -1,
            -1,
            -1
          ]);
        }
      }
      function Pl(t, e, n) {
        const r = t.slice();
        return r[12] = e[n], r;
      }
      function VC(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m = ve(t[4]), C = [];
        for (let B = 0; B < m.length; B += 1) C[B] = Il(Pl(t, m, B));
        return {
          c() {
            e = h("div"), n = h("div"), n.innerHTML = '<span class="material-icons success-icon svelte-6iq55z">check_circle</span> <h1 class="svelte-6iq55z">2FA enabled \u2014 save your backup codes</h1>', r = y(), s = h("p"), s.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, o = y(), i = h("div");
            for (let B = 0; B < C.length; B += 1) C[B].c();
            a = y(), x = h("div"), l = h("button"), l.innerHTML = `<span class="material-icons svelte-6iq55z">download</span>
          Download as text file`, u = y(), f = h("button"), f.textContent = "I've saved my backup codes", d(n, "class", "codes-header svelte-6iq55z"), d(s, "class", "hint warning svelte-6iq55z"), d(i, "class", "backup-grid svelte-6iq55z"), d(l, "class", "btn-ghost svelte-6iq55z"), d(f, "class", "btn-primary svelte-6iq55z"), d(x, "class", "codes-actions svelte-6iq55z"), d(e, "class", "card svelte-6iq55z");
          },
          m(B, A) {
            T(B, e, A), c(e, n), c(e, r), c(e, s), c(e, o), c(e, i);
            for (let D = 0; D < C.length; D += 1) C[D] && C[D].m(i, null);
            c(e, a), c(e, x), c(x, l), c(x, u), c(x, f), p || (E = [
              G(l, "click", t[8]),
              G(f, "click", t[9])
            ], p = true);
          },
          p(B, A) {
            if (A & 16) {
              m = ve(B[4]);
              let D;
              for (D = 0; D < m.length; D += 1) {
                const b = Pl(B, m, D);
                C[D] ? C[D].p(b, A) : (C[D] = Il(b), C[D].c(), C[D].m(i, null));
              }
              for (; D < C.length; D += 1) C[D].d(1);
              C.length = m.length;
            }
          },
          d(B) {
            B && S(e), vt(C, B), p = false, ue(E);
          }
        };
      }
      function YC(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A, D, b, v, _, g, F, k, w, P = t[5] ? "Verifying\u2026" : "Enable 2FA", N, I, L, R, O, W, H, q = t[6] && Nl(t);
        return {
          c() {
            e = h("div"), n = h("div"), r = h("button"), r.innerHTML = '<span class="material-icons svelte-6iq55z">arrow_back</span>', s = y(), o = h("h1"), o.textContent = "Set up authenticator app", i = y(), a = h("p"), a.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, x = y(), l = h("div"), u = h("img"), p = y(), E = h("details"), m = h("summary"), m.textContent = "Can't scan? Enter the key manually", C = y(), B = h("code"), A = M(t[1]), D = y(), b = h("form"), v = h("label"), _ = M(`Authenticator code
          `), g = h("input"), F = y(), q && q.c(), k = y(), w = h("button"), N = M(P), L = y(), R = h("button"), O = M("Cancel"), d(r, "class", "back-btn svelte-6iq55z"), d(r, "type", "button"), d(o, "class", "svelte-6iq55z"), d(n, "class", "card-header svelte-6iq55z"), d(a, "class", "hint svelte-6iq55z"), Ya(u.src, f = t[2]) || d(u, "src", f), d(u, "alt", "TOTP QR code"), d(u, "width", "200"), d(u, "height", "200"), d(u, "class", "svelte-6iq55z"), d(l, "class", "qr-wrap svelte-6iq55z"), d(m, "class", "svelte-6iq55z"), d(B, "class", "secret-key svelte-6iq55z"), d(E, "class", "manual-entry svelte-6iq55z"), d(g, "type", "text"), d(g, "inputmode", "numeric"), d(g, "pattern", "[0-9]*"), d(g, "maxlength", "6"), g.required = true, d(g, "autocomplete", "one-time-code"), d(g, "placeholder", "000000"), d(g, "class", "svelte-6iq55z"), d(v, "class", "svelte-6iq55z"), d(w, "type", "submit"), d(w, "class", "btn-primary svelte-6iq55z"), w.disabled = I = t[5] || t[3].length !== 6, d(R, "type", "button"), d(R, "class", "btn-ghost svelte-6iq55z"), R.disabled = t[5], d(b, "class", "otp-form svelte-6iq55z"), d(e, "class", "card svelte-6iq55z");
          },
          m(X, j) {
            T(X, e, j), c(e, n), c(n, r), c(n, s), c(n, o), c(e, i), c(e, a), c(e, x), c(e, l), c(l, u), c(e, p), c(e, E), c(E, m), c(E, C), c(E, B), c(B, A), c(e, D), c(e, b), c(b, v), c(v, _), c(v, g), xe(g, t[3]), c(b, F), q && q.m(b, null), c(b, k), c(b, w), c(w, N), c(b, L), c(b, R), c(R, O), W || (H = [
              G(r, "click", t[10]),
              G(g, "input", t[11]),
              G(R, "click", t[10]),
              G(b, "submit", tn(t[7]))
            ], W = true);
          },
          p(X, j) {
            j & 4 && !Ya(u.src, f = X[2]) && d(u, "src", f), j & 2 && V(A, X[1]), j & 8 && g.value !== X[3] && xe(g, X[3]), X[6] ? q ? q.p(X, j) : (q = Nl(X), q.c(), q.m(b, k)) : q && (q.d(1), q = null), j & 32 && P !== (P = X[5] ? "Verifying\u2026" : "Enable 2FA") && V(N, P), j & 40 && I !== (I = X[5] || X[3].length !== 6) && (w.disabled = I), j & 32 && (R.disabled = X[5]);
          },
          d(X) {
            X && S(e), q && q.d(), W = false, ue(H);
          }
        };
      }
      function KC(t) {
        let e, n, r, s, o, i, a;
        return {
          c() {
            e = h("div"), n = h("p"), r = M(t[6]), s = y(), o = h("button"), o.textContent = "Back to Settings", d(n, "class", "error svelte-6iq55z"), d(o, "class", "btn-ghost svelte-6iq55z"), d(e, "class", "card svelte-6iq55z");
          },
          m(x, l) {
            T(x, e, l), c(e, n), c(n, r), c(e, s), c(e, o), i || (a = G(o, "click", t[10]), i = true);
          },
          p(x, l) {
            l & 64 && V(r, x[6]);
          },
          d(x) {
            x && S(e), i = false, a();
          }
        };
      }
      function JC(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Setting up\u2026", d(e, "class", "muted svelte-6iq55z");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function Il(t) {
        let e, n = t[12] + "", r;
        return {
          c() {
            e = h("code"), r = M(n), d(e, "class", "backup-code svelte-6iq55z");
          },
          m(s, o) {
            T(s, e, o), c(e, r);
          },
          p(s, o) {
            o & 16 && n !== (n = s[12] + "") && V(r, n);
          },
          d(s) {
            s && S(e);
          }
        };
      }
      function Nl(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[6]), d(e, "class", "error svelte-6iq55z");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s & 64 && V(n, r[6]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function XC(t) {
        let e, n, r, s;
        e = new Ot({});
        function o(x, l) {
          if (x[0] === "loading") return JC;
          if (x[0] === "error") return KC;
          if (x[0] === "scan") return YC;
          if (x[0] === "codes") return VC;
        }
        let i = o(t), a = i && i(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), a && a.c(), d(r, "class", "svelte-6iq55z");
          },
          m(x, l) {
            Oe(e, x, l), T(x, n, l), T(x, r, l), a && a.m(r, null), s = true;
          },
          p(x, [l]) {
            i === (i = o(x)) && a ? a.p(x, l) : (a && a.d(1), a = i && i(x), a && (a.c(), a.m(r, null)));
          },
          i(x) {
            s || (Ce(e.$$.fragment, x), s = true);
          },
          o(x) {
            Ae(e.$$.fragment, x), s = false;
          },
          d(x) {
            x && (S(n), S(r)), He(e, x), a && a.d();
          }
        };
      }
      function QC(t, e, n) {
        let r = "loading", s = "", o = "", i = "", a = [], x = false, l = null;
        st(async () => {
          if (!ut()) {
            Ee("/login");
            return;
          }
          try {
            const { secret: C, uri: B } = await Wm();
            n(1, s = C), n(2, o = await Gn.toDataURL(B, {
              width: 200,
              margin: 1
            })), n(0, r = "scan");
          } catch (C) {
            n(6, l = C.message), n(0, r = "error");
          }
        });
        async function u() {
          n(6, l = null), n(5, x = true);
          try {
            const { backup_codes: C } = await Vm(s, i);
            n(4, a = C), W0.set(true), n(0, r = "codes");
          } catch (C) {
            n(6, l = C.message);
          } finally {
            n(5, x = false);
          }
        }
        function f() {
          const C = a.join(`
`), B = new Blob([
            C
          ], {
            type: "text/plain"
          }), A = URL.createObjectURL(B), D = document.createElement("a");
          D.href = A, D.download = "backup-codes.txt", D.click(), URL.revokeObjectURL(A);
        }
        function p() {
          Ee("/settings");
        }
        function E() {
          Ee("/settings");
        }
        function m() {
          i = this.value, n(3, i);
        }
        return [
          r,
          s,
          o,
          i,
          a,
          x,
          l,
          u,
          f,
          p,
          E,
          m
        ];
      }
      class ZC extends Se {
        constructor(e) {
          super(), we(this, e, QC, XC, ke, {});
        }
      }
      var Rd = {
        exports: {}
      };
      (function(t, e) {
        (function(r, s) {
          t.exports = s();
        })(typeof self < "u" ? self : xh, function() {
          return function(n) {
            var r = {};
            function s(o) {
              if (r[o]) return r[o].exports;
              var i = r[o] = {
                i: o,
                l: false,
                exports: {}
              };
              return n[o].call(i.exports, i, i.exports, s), i.l = true, i.exports;
            }
            return s.m = n, s.c = r, s.d = function(o, i, a) {
              s.o(o, i) || Object.defineProperty(o, i, {
                configurable: false,
                enumerable: true,
                get: a
              });
            }, s.n = function(o) {
              var i = o && o.__esModule ? function() {
                return o.default;
              } : function() {
                return o;
              };
              return s.d(i, "a", i), i;
            }, s.o = function(o, i) {
              return Object.prototype.hasOwnProperty.call(o, i);
            }, s.p = "", s(s.s = 3);
          }([
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = function() {
                function i(a, x) {
                  this.width = x, this.height = a.length / x, this.data = a;
                }
                return i.createEmpty = function(a, x) {
                  return new i(new Uint8ClampedArray(a * x), a);
                }, i.prototype.get = function(a, x) {
                  return a < 0 || a >= this.width || x < 0 || x >= this.height ? false : !!this.data[x * this.width + a];
                }, i.prototype.set = function(a, x, l) {
                  this.data[x * this.width + a] = l ? 1 : 0;
                }, i.prototype.setRegion = function(a, x, l, u, f) {
                  for (var p = x; p < x + u; p++) for (var E = a; E < a + l; E++) this.set(E, p, !!f);
                }, i;
              }();
              r.BitMatrix = o;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = s(2);
              function i(x, l) {
                return x ^ l;
              }
              r.addOrSubtractGF = i;
              var a = function() {
                function x(l, u, f) {
                  this.primitive = l, this.size = u, this.generatorBase = f, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                  for (var p = 1, E = 0; E < this.size; E++) this.expTable[E] = p, p = p * 2, p >= this.size && (p = (p ^ this.primitive) & this.size - 1);
                  for (var E = 0; E < this.size - 1; E++) this.logTable[this.expTable[E]] = E;
                  this.zero = new o.default(this, Uint8ClampedArray.from([
                    0
                  ])), this.one = new o.default(this, Uint8ClampedArray.from([
                    1
                  ]));
                }
                return x.prototype.multiply = function(l, u) {
                  return l === 0 || u === 0 ? 0 : this.expTable[(this.logTable[l] + this.logTable[u]) % (this.size - 1)];
                }, x.prototype.inverse = function(l) {
                  if (l === 0) throw new Error("Can't invert 0");
                  return this.expTable[this.size - this.logTable[l] - 1];
                }, x.prototype.buildMonomial = function(l, u) {
                  if (l < 0) throw new Error("Invalid monomial degree less than 0");
                  if (u === 0) return this.zero;
                  var f = new Uint8ClampedArray(l + 1);
                  return f[0] = u, new o.default(this, f);
                }, x.prototype.log = function(l) {
                  if (l === 0) throw new Error("Can't take log(0)");
                  return this.logTable[l];
                }, x.prototype.exp = function(l) {
                  return this.expTable[l];
                }, x;
              }();
              r.default = a;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = s(1), i = function() {
                function a(x, l) {
                  if (l.length === 0) throw new Error("No coefficients.");
                  this.field = x;
                  var u = l.length;
                  if (u > 1 && l[0] === 0) {
                    for (var f = 1; f < u && l[f] === 0; ) f++;
                    if (f === u) this.coefficients = x.zero.coefficients;
                    else {
                      this.coefficients = new Uint8ClampedArray(u - f);
                      for (var p = 0; p < this.coefficients.length; p++) this.coefficients[p] = l[f + p];
                    }
                  } else this.coefficients = l;
                }
                return a.prototype.degree = function() {
                  return this.coefficients.length - 1;
                }, a.prototype.isZero = function() {
                  return this.coefficients[0] === 0;
                }, a.prototype.getCoefficient = function(x) {
                  return this.coefficients[this.coefficients.length - 1 - x];
                }, a.prototype.addOrSubtract = function(x) {
                  var l;
                  if (this.isZero()) return x;
                  if (x.isZero()) return this;
                  var u = this.coefficients, f = x.coefficients;
                  u.length > f.length && (l = [
                    f,
                    u
                  ], u = l[0], f = l[1]);
                  for (var p = new Uint8ClampedArray(f.length), E = f.length - u.length, m = 0; m < E; m++) p[m] = f[m];
                  for (var m = E; m < f.length; m++) p[m] = o.addOrSubtractGF(u[m - E], f[m]);
                  return new a(this.field, p);
                }, a.prototype.multiply = function(x) {
                  if (x === 0) return this.field.zero;
                  if (x === 1) return this;
                  for (var l = this.coefficients.length, u = new Uint8ClampedArray(l), f = 0; f < l; f++) u[f] = this.field.multiply(this.coefficients[f], x);
                  return new a(this.field, u);
                }, a.prototype.multiplyPoly = function(x) {
                  if (this.isZero() || x.isZero()) return this.field.zero;
                  for (var l = this.coefficients, u = l.length, f = x.coefficients, p = f.length, E = new Uint8ClampedArray(u + p - 1), m = 0; m < u; m++) for (var C = l[m], B = 0; B < p; B++) E[m + B] = o.addOrSubtractGF(E[m + B], this.field.multiply(C, f[B]));
                  return new a(this.field, E);
                }, a.prototype.multiplyByMonomial = function(x, l) {
                  if (x < 0) throw new Error("Invalid degree less than 0");
                  if (l === 0) return this.field.zero;
                  for (var u = this.coefficients.length, f = new Uint8ClampedArray(u + x), p = 0; p < u; p++) f[p] = this.field.multiply(this.coefficients[p], l);
                  return new a(this.field, f);
                }, a.prototype.evaluateAt = function(x) {
                  var l = 0;
                  if (x === 0) return this.getCoefficient(0);
                  var u = this.coefficients.length;
                  if (x === 1) return this.coefficients.forEach(function(p) {
                    l = o.addOrSubtractGF(l, p);
                  }), l;
                  l = this.coefficients[0];
                  for (var f = 1; f < u; f++) l = o.addOrSubtractGF(this.field.multiply(x, l), this.coefficients[f]);
                  return l;
                }, a;
              }();
              r.default = i;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = s(4), i = s(5), a = s(11), x = s(12);
              function l(p) {
                var E = x.locate(p);
                if (!E) return null;
                for (var m = 0, C = E; m < C.length; m++) {
                  var B = C[m], A = a.extract(p, B), D = i.decode(A.matrix);
                  if (D) return {
                    binaryData: D.bytes,
                    data: D.text,
                    chunks: D.chunks,
                    version: D.version,
                    location: {
                      topRightCorner: A.mappingFunction(B.dimension, 0),
                      topLeftCorner: A.mappingFunction(0, 0),
                      bottomRightCorner: A.mappingFunction(B.dimension, B.dimension),
                      bottomLeftCorner: A.mappingFunction(0, B.dimension),
                      topRightFinderPattern: B.topRight,
                      topLeftFinderPattern: B.topLeft,
                      bottomLeftFinderPattern: B.bottomLeft,
                      bottomRightAlignmentPattern: B.alignmentPattern
                    }
                  };
                }
                return null;
              }
              var u = {
                inversionAttempts: "attemptBoth"
              };
              function f(p, E, m, C) {
                C === void 0 && (C = {});
                var B = u;
                Object.keys(B || {}).forEach(function(F) {
                  B[F] = C[F] || B[F];
                });
                var A = B.inversionAttempts === "attemptBoth" || B.inversionAttempts === "invertFirst", D = B.inversionAttempts === "onlyInvert" || B.inversionAttempts === "invertFirst", b = o.binarize(p, E, m, A), v = b.binarized, _ = b.inverted, g = l(D ? _ : v);
                return !g && (B.inversionAttempts === "attemptBoth" || B.inversionAttempts === "invertFirst") && (g = l(D ? v : _)), g;
              }
              f.default = f, r.default = f;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = s(0), i = 8, a = 24;
              function x(f, p, E) {
                return f < p ? p : f > E ? E : f;
              }
              var l = function() {
                function f(p, E) {
                  this.width = p, this.data = new Uint8ClampedArray(p * E);
                }
                return f.prototype.get = function(p, E) {
                  return this.data[E * this.width + p];
                }, f.prototype.set = function(p, E, m) {
                  this.data[E * this.width + p] = m;
                }, f;
              }();
              function u(f, p, E, m) {
                if (f.length !== p * E * 4) throw new Error("Malformed data passed to binarizer.");
                for (var C = new l(p, E), B = 0; B < p; B++) for (var A = 0; A < E; A++) {
                  var D = f[(A * p + B) * 4 + 0], b = f[(A * p + B) * 4 + 1], v = f[(A * p + B) * 4 + 2];
                  C.set(B, A, 0.2126 * D + 0.7152 * b + 0.0722 * v);
                }
                for (var _ = Math.ceil(p / i), g = Math.ceil(E / i), F = new l(_, g), k = 0; k < g; k++) for (var w = 0; w < _; w++) {
                  for (var P = 0, N = 1 / 0, I = 0, A = 0; A < i; A++) for (var B = 0; B < i; B++) {
                    var L = C.get(w * i + B, k * i + A);
                    P += L, N = Math.min(N, L), I = Math.max(I, L);
                  }
                  var R = P / Math.pow(i, 2);
                  if (I - N <= a && (R = N / 2, k > 0 && w > 0)) {
                    var O = (F.get(w, k - 1) + 2 * F.get(w - 1, k) + F.get(w - 1, k - 1)) / 4;
                    N < O && (R = O);
                  }
                  F.set(w, k, R);
                }
                var W = o.BitMatrix.createEmpty(p, E), H = null;
                m && (H = o.BitMatrix.createEmpty(p, E));
                for (var k = 0; k < g; k++) for (var w = 0; w < _; w++) {
                  for (var q = x(w, 2, _ - 3), X = x(k, 2, g - 3), P = 0, j = -2; j <= 2; j++) for (var U = -2; U <= 2; U++) P += F.get(q + j, X + U);
                  for (var z = P / 25, j = 0; j < i; j++) for (var U = 0; U < i; U++) {
                    var B = w * i + j, A = k * i + U, K = C.get(B, A);
                    W.set(B, A, K <= z), m && H.set(B, A, !(K <= z));
                  }
                }
                return m ? {
                  binarized: W,
                  inverted: H
                } : {
                  binarized: W
                };
              }
              r.binarize = u;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = s(0), i = s(6), a = s(9), x = s(10);
              function l(v, _) {
                for (var g = v ^ _, F = 0; g; ) F++, g &= g - 1;
                return F;
              }
              function u(v, _) {
                return _ << 1 | v;
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
              ], p = [
                function(v) {
                  return (v.y + v.x) % 2 === 0;
                },
                function(v) {
                  return v.y % 2 === 0;
                },
                function(v) {
                  return v.x % 3 === 0;
                },
                function(v) {
                  return (v.y + v.x) % 3 === 0;
                },
                function(v) {
                  return (Math.floor(v.y / 2) + Math.floor(v.x / 3)) % 2 === 0;
                },
                function(v) {
                  return v.x * v.y % 2 + v.x * v.y % 3 === 0;
                },
                function(v) {
                  return (v.y * v.x % 2 + v.y * v.x % 3) % 2 === 0;
                },
                function(v) {
                  return ((v.y + v.x) % 2 + v.y * v.x % 3) % 2 === 0;
                }
              ];
              function E(v) {
                var _ = 17 + 4 * v.versionNumber, g = o.BitMatrix.createEmpty(_, _);
                g.setRegion(0, 0, 9, 9, true), g.setRegion(_ - 8, 0, 8, 9, true), g.setRegion(0, _ - 8, 9, 8, true);
                for (var F = 0, k = v.alignmentPatternCenters; F < k.length; F++) for (var w = k[F], P = 0, N = v.alignmentPatternCenters; P < N.length; P++) {
                  var I = N[P];
                  w === 6 && I === 6 || w === 6 && I === _ - 7 || w === _ - 7 && I === 6 || g.setRegion(w - 2, I - 2, 5, 5, true);
                }
                return g.setRegion(6, 9, 1, _ - 17, true), g.setRegion(9, 6, _ - 17, 1, true), v.versionNumber > 6 && (g.setRegion(_ - 11, 0, 3, 6, true), g.setRegion(0, _ - 11, 6, 3, true)), g;
              }
              function m(v, _, g) {
                for (var F = p[g.dataMask], k = v.height, w = E(_), P = [], N = 0, I = 0, L = true, R = k - 1; R > 0; R -= 2) {
                  R === 6 && R--;
                  for (var O = 0; O < k; O++) for (var W = L ? k - 1 - O : O, H = 0; H < 2; H++) {
                    var q = R - H;
                    if (!w.get(q, W)) {
                      I++;
                      var X = v.get(q, W);
                      F({
                        y: W,
                        x: q
                      }) && (X = !X), N = u(X, N), I === 8 && (P.push(N), I = 0, N = 0);
                    }
                  }
                  L = !L;
                }
                return P;
              }
              function C(v) {
                var _ = v.height, g = Math.floor((_ - 17) / 4);
                if (g <= 6) return x.VERSIONS[g - 1];
                for (var F = 0, k = 5; k >= 0; k--) for (var w = _ - 9; w >= _ - 11; w--) F = u(v.get(w, k), F);
                for (var P = 0, w = 5; w >= 0; w--) for (var k = _ - 9; k >= _ - 11; k--) P = u(v.get(w, k), P);
                for (var N = 1 / 0, I, L = 0, R = x.VERSIONS; L < R.length; L++) {
                  var O = R[L];
                  if (O.infoBits === F || O.infoBits === P) return O;
                  var W = l(F, O.infoBits);
                  W < N && (I = O, N = W), W = l(P, O.infoBits), W < N && (I = O, N = W);
                }
                if (N <= 3) return I;
              }
              function B(v) {
                for (var _ = 0, g = 0; g <= 8; g++) g !== 6 && (_ = u(v.get(g, 8), _));
                for (var F = 7; F >= 0; F--) F !== 6 && (_ = u(v.get(8, F), _));
                for (var k = v.height, w = 0, F = k - 1; F >= k - 7; F--) w = u(v.get(8, F), w);
                for (var g = k - 8; g < k; g++) w = u(v.get(g, 8), w);
                for (var P = 1 / 0, N = null, I = 0, L = f; I < L.length; I++) {
                  var R = L[I], O = R.bits, W = R.formatInfo;
                  if (O === _ || O === w) return W;
                  var H = l(_, O);
                  H < P && (N = W, P = H), _ !== w && (H = l(w, O), H < P && (N = W, P = H));
                }
                return P <= 3 ? N : null;
              }
              function A(v, _, g) {
                var F = _.errorCorrectionLevels[g], k = [], w = 0;
                if (F.ecBlocks.forEach(function(X) {
                  for (var j = 0; j < X.numBlocks; j++) k.push({
                    numDataCodewords: X.dataCodewordsPerBlock,
                    codewords: []
                  }), w += X.dataCodewordsPerBlock + F.ecCodewordsPerBlock;
                }), v.length < w) return null;
                v = v.slice(0, w);
                for (var P = F.ecBlocks[0].dataCodewordsPerBlock, N = 0; N < P; N++) for (var I = 0, L = k; I < L.length; I++) {
                  var R = L[I];
                  R.codewords.push(v.shift());
                }
                if (F.ecBlocks.length > 1) for (var O = F.ecBlocks[0].numBlocks, W = F.ecBlocks[1].numBlocks, N = 0; N < W; N++) k[O + N].codewords.push(v.shift());
                for (; v.length > 0; ) for (var H = 0, q = k; H < q.length; H++) {
                  var R = q[H];
                  R.codewords.push(v.shift());
                }
                return k;
              }
              function D(v) {
                var _ = C(v);
                if (!_) return null;
                var g = B(v);
                if (!g) return null;
                var F = m(v, _, g), k = A(F, _, g.errorCorrectionLevel);
                if (!k) return null;
                for (var w = k.reduce(function(H, q) {
                  return H + q.numDataCodewords;
                }, 0), P = new Uint8ClampedArray(w), N = 0, I = 0, L = k; I < L.length; I++) {
                  var R = L[I], O = a.decode(R.codewords, R.codewords.length - R.numDataCodewords);
                  if (!O) return null;
                  for (var W = 0; W < R.numDataCodewords; W++) P[N++] = O[W];
                }
                try {
                  return i.decode(P, _.versionNumber);
                } catch {
                  return null;
                }
              }
              function b(v) {
                if (v == null) return null;
                var _ = D(v);
                if (_) return _;
                for (var g = 0; g < v.width; g++) for (var F = g + 1; F < v.height; F++) v.get(g, F) !== v.get(F, g) && (v.set(g, F, !v.get(g, F)), v.set(F, g, !v.get(F, g)));
                return D(v);
              }
              r.decode = b;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = s(7), i = s(8), a;
              (function(C) {
                C.Numeric = "numeric", C.Alphanumeric = "alphanumeric", C.Byte = "byte", C.Kanji = "kanji", C.ECI = "eci";
              })(a = r.Mode || (r.Mode = {}));
              var x;
              (function(C) {
                C[C.Terminator = 0] = "Terminator", C[C.Numeric = 1] = "Numeric", C[C.Alphanumeric = 2] = "Alphanumeric", C[C.Byte = 4] = "Byte", C[C.Kanji = 8] = "Kanji", C[C.ECI = 7] = "ECI";
              })(x || (x = {}));
              function l(C, B) {
                for (var A = [], D = "", b = [
                  10,
                  12,
                  14
                ][B], v = C.readBits(b); v >= 3; ) {
                  var _ = C.readBits(10);
                  if (_ >= 1e3) throw new Error("Invalid numeric value above 999");
                  var g = Math.floor(_ / 100), F = Math.floor(_ / 10) % 10, k = _ % 10;
                  A.push(48 + g, 48 + F, 48 + k), D += g.toString() + F.toString() + k.toString(), v -= 3;
                }
                if (v === 2) {
                  var _ = C.readBits(7);
                  if (_ >= 100) throw new Error("Invalid numeric value above 99");
                  var g = Math.floor(_ / 10), F = _ % 10;
                  A.push(48 + g, 48 + F), D += g.toString() + F.toString();
                } else if (v === 1) {
                  var _ = C.readBits(4);
                  if (_ >= 10) throw new Error("Invalid numeric value above 9");
                  A.push(48 + _), D += _.toString();
                }
                return {
                  bytes: A,
                  text: D
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
              function f(C, B) {
                for (var A = [], D = "", b = [
                  9,
                  11,
                  13
                ][B], v = C.readBits(b); v >= 2; ) {
                  var _ = C.readBits(11), g = Math.floor(_ / 45), F = _ % 45;
                  A.push(u[g].charCodeAt(0), u[F].charCodeAt(0)), D += u[g] + u[F], v -= 2;
                }
                if (v === 1) {
                  var g = C.readBits(6);
                  A.push(u[g].charCodeAt(0)), D += u[g];
                }
                return {
                  bytes: A,
                  text: D
                };
              }
              function p(C, B) {
                for (var A = [], D = "", b = [
                  8,
                  16,
                  16
                ][B], v = C.readBits(b), _ = 0; _ < v; _++) {
                  var g = C.readBits(8);
                  A.push(g);
                }
                try {
                  D += decodeURIComponent(A.map(function(F) {
                    return "%" + ("0" + F.toString(16)).substr(-2);
                  }).join(""));
                } catch {
                }
                return {
                  bytes: A,
                  text: D
                };
              }
              function E(C, B) {
                for (var A = [], D = "", b = [
                  8,
                  10,
                  12
                ][B], v = C.readBits(b), _ = 0; _ < v; _++) {
                  var g = C.readBits(13), F = Math.floor(g / 192) << 8 | g % 192;
                  F < 7936 ? F += 33088 : F += 49472, A.push(F >> 8, F & 255), D += String.fromCharCode(i.shiftJISTable[F]);
                }
                return {
                  bytes: A,
                  text: D
                };
              }
              function m(C, B) {
                for (var A, D, b, v, _ = new o.BitStream(C), g = B <= 9 ? 0 : B <= 26 ? 1 : 2, F = {
                  text: "",
                  bytes: [],
                  chunks: [],
                  version: B
                }; _.available() >= 4; ) {
                  var k = _.readBits(4);
                  if (k === x.Terminator) return F;
                  if (k === x.ECI) _.readBits(1) === 0 ? F.chunks.push({
                    type: a.ECI,
                    assignmentNumber: _.readBits(7)
                  }) : _.readBits(1) === 0 ? F.chunks.push({
                    type: a.ECI,
                    assignmentNumber: _.readBits(14)
                  }) : _.readBits(1) === 0 ? F.chunks.push({
                    type: a.ECI,
                    assignmentNumber: _.readBits(21)
                  }) : F.chunks.push({
                    type: a.ECI,
                    assignmentNumber: -1
                  });
                  else if (k === x.Numeric) {
                    var w = l(_, g);
                    F.text += w.text, (A = F.bytes).push.apply(A, w.bytes), F.chunks.push({
                      type: a.Numeric,
                      text: w.text
                    });
                  } else if (k === x.Alphanumeric) {
                    var P = f(_, g);
                    F.text += P.text, (D = F.bytes).push.apply(D, P.bytes), F.chunks.push({
                      type: a.Alphanumeric,
                      text: P.text
                    });
                  } else if (k === x.Byte) {
                    var N = p(_, g);
                    F.text += N.text, (b = F.bytes).push.apply(b, N.bytes), F.chunks.push({
                      type: a.Byte,
                      bytes: N.bytes,
                      text: N.text
                    });
                  } else if (k === x.Kanji) {
                    var I = E(_, g);
                    F.text += I.text, (v = F.bytes).push.apply(v, I.bytes), F.chunks.push({
                      type: a.Kanji,
                      bytes: I.bytes,
                      text: I.text
                    });
                  }
                }
                if (_.available() === 0 || _.readBits(_.available()) === 0) return F;
              }
              r.decode = m;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = function() {
                function i(a) {
                  this.byteOffset = 0, this.bitOffset = 0, this.bytes = a;
                }
                return i.prototype.readBits = function(a) {
                  if (a < 1 || a > 32 || a > this.available()) throw new Error("Cannot read " + a.toString() + " bits");
                  var x = 0;
                  if (this.bitOffset > 0) {
                    var l = 8 - this.bitOffset, u = a < l ? a : l, f = l - u, p = 255 >> 8 - u << f;
                    x = (this.bytes[this.byteOffset] & p) >> f, a -= u, this.bitOffset += u, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                  }
                  if (a > 0) {
                    for (; a >= 8; ) x = x << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, a -= 8;
                    if (a > 0) {
                      var f = 8 - a, p = 255 >> f << f;
                      x = x << a | (this.bytes[this.byteOffset] & p) >> f, this.bitOffset += a;
                    }
                  }
                  return x;
                }, i.prototype.available = function() {
                  return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
                }, i;
              }();
              r.BitStream = o;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              }), r.shiftJISTable = {
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
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = s(1), i = s(2);
              function a(f, p, E, m) {
                var C;
                p.degree() < E.degree() && (C = [
                  E,
                  p
                ], p = C[0], E = C[1]);
                for (var B = p, A = E, D = f.zero, b = f.one; A.degree() >= m / 2; ) {
                  var v = B, _ = D;
                  if (B = A, D = b, B.isZero()) return null;
                  A = v;
                  for (var g = f.zero, F = B.getCoefficient(B.degree()), k = f.inverse(F); A.degree() >= B.degree() && !A.isZero(); ) {
                    var w = A.degree() - B.degree(), P = f.multiply(A.getCoefficient(A.degree()), k);
                    g = g.addOrSubtract(f.buildMonomial(w, P)), A = A.addOrSubtract(B.multiplyByMonomial(w, P));
                  }
                  if (b = g.multiplyPoly(D).addOrSubtract(_), A.degree() >= B.degree()) return null;
                }
                var N = b.getCoefficient(0);
                if (N === 0) return null;
                var I = f.inverse(N);
                return [
                  b.multiply(I),
                  A.multiply(I)
                ];
              }
              function x(f, p) {
                var E = p.degree();
                if (E === 1) return [
                  p.getCoefficient(1)
                ];
                for (var m = new Array(E), C = 0, B = 1; B < f.size && C < E; B++) p.evaluateAt(B) === 0 && (m[C] = f.inverse(B), C++);
                return C !== E ? null : m;
              }
              function l(f, p, E) {
                for (var m = E.length, C = new Array(m), B = 0; B < m; B++) {
                  for (var A = f.inverse(E[B]), D = 1, b = 0; b < m; b++) B !== b && (D = f.multiply(D, o.addOrSubtractGF(1, f.multiply(E[b], A))));
                  C[B] = f.multiply(p.evaluateAt(A), f.inverse(D)), f.generatorBase !== 0 && (C[B] = f.multiply(C[B], A));
                }
                return C;
              }
              function u(f, p) {
                var E = new Uint8ClampedArray(f.length);
                E.set(f);
                for (var m = new o.default(285, 256, 0), C = new i.default(m, E), B = new Uint8ClampedArray(p), A = false, D = 0; D < p; D++) {
                  var b = C.evaluateAt(m.exp(D + m.generatorBase));
                  B[B.length - 1 - D] = b, b !== 0 && (A = true);
                }
                if (!A) return E;
                var v = new i.default(m, B), _ = a(m, m.buildMonomial(p, 1), v, p);
                if (_ === null) return null;
                var g = x(m, _[0]);
                if (g == null) return null;
                for (var F = l(m, _[1], g), k = 0; k < g.length; k++) {
                  var w = E.length - 1 - m.log(g[k]);
                  if (w < 0) return null;
                  E[w] = o.addOrSubtractGF(E[w], F[k]);
                }
                return E;
              }
              r.decode = u;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              }), r.VERSIONS = [
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
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = s(0);
              function i(u, f, p, E) {
                var m = u.x - f.x + p.x - E.x, C = u.y - f.y + p.y - E.y;
                if (m === 0 && C === 0) return {
                  a11: f.x - u.x,
                  a12: f.y - u.y,
                  a13: 0,
                  a21: p.x - f.x,
                  a22: p.y - f.y,
                  a23: 0,
                  a31: u.x,
                  a32: u.y,
                  a33: 1
                };
                var B = f.x - p.x, A = E.x - p.x, D = f.y - p.y, b = E.y - p.y, v = B * b - A * D, _ = (m * b - A * C) / v, g = (B * C - m * D) / v;
                return {
                  a11: f.x - u.x + _ * f.x,
                  a12: f.y - u.y + _ * f.y,
                  a13: _,
                  a21: E.x - u.x + g * E.x,
                  a22: E.y - u.y + g * E.y,
                  a23: g,
                  a31: u.x,
                  a32: u.y,
                  a33: 1
                };
              }
              function a(u, f, p, E) {
                var m = i(u, f, p, E);
                return {
                  a11: m.a22 * m.a33 - m.a23 * m.a32,
                  a12: m.a13 * m.a32 - m.a12 * m.a33,
                  a13: m.a12 * m.a23 - m.a13 * m.a22,
                  a21: m.a23 * m.a31 - m.a21 * m.a33,
                  a22: m.a11 * m.a33 - m.a13 * m.a31,
                  a23: m.a13 * m.a21 - m.a11 * m.a23,
                  a31: m.a21 * m.a32 - m.a22 * m.a31,
                  a32: m.a12 * m.a31 - m.a11 * m.a32,
                  a33: m.a11 * m.a22 - m.a12 * m.a21
                };
              }
              function x(u, f) {
                return {
                  a11: u.a11 * f.a11 + u.a21 * f.a12 + u.a31 * f.a13,
                  a12: u.a12 * f.a11 + u.a22 * f.a12 + u.a32 * f.a13,
                  a13: u.a13 * f.a11 + u.a23 * f.a12 + u.a33 * f.a13,
                  a21: u.a11 * f.a21 + u.a21 * f.a22 + u.a31 * f.a23,
                  a22: u.a12 * f.a21 + u.a22 * f.a22 + u.a32 * f.a23,
                  a23: u.a13 * f.a21 + u.a23 * f.a22 + u.a33 * f.a23,
                  a31: u.a11 * f.a31 + u.a21 * f.a32 + u.a31 * f.a33,
                  a32: u.a12 * f.a31 + u.a22 * f.a32 + u.a32 * f.a33,
                  a33: u.a13 * f.a31 + u.a23 * f.a32 + u.a33 * f.a33
                };
              }
              function l(u, f) {
                for (var p = a({
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
                }), E = i(f.topLeft, f.topRight, f.alignmentPattern, f.bottomLeft), m = x(E, p), C = o.BitMatrix.createEmpty(f.dimension, f.dimension), B = function(g, F) {
                  var k = m.a13 * g + m.a23 * F + m.a33;
                  return {
                    x: (m.a11 * g + m.a21 * F + m.a31) / k,
                    y: (m.a12 * g + m.a22 * F + m.a32) / k
                  };
                }, A = 0; A < f.dimension; A++) for (var D = 0; D < f.dimension; D++) {
                  var b = D + 0.5, v = A + 0.5, _ = B(b, v);
                  C.set(D, A, u.get(Math.floor(_.x), Math.floor(_.y)));
                }
                return {
                  matrix: C,
                  mappingFunction: B
                };
              }
              r.extract = l;
            },
            function(n, r, s) {
              Object.defineProperty(r, "__esModule", {
                value: true
              });
              var o = 4, i = 0.5, a = 1.5, x = function(b, v) {
                return Math.sqrt(Math.pow(v.x - b.x, 2) + Math.pow(v.y - b.y, 2));
              };
              function l(b) {
                return b.reduce(function(v, _) {
                  return v + _;
                });
              }
              function u(b, v, _) {
                var g, F, k, w, P = x(b, v), N = x(v, _), I = x(b, _), L, R, O;
                return N >= P && N >= I ? (g = [
                  v,
                  b,
                  _
                ], L = g[0], R = g[1], O = g[2]) : I >= N && I >= P ? (F = [
                  b,
                  v,
                  _
                ], L = F[0], R = F[1], O = F[2]) : (k = [
                  b,
                  _,
                  v
                ], L = k[0], R = k[1], O = k[2]), (O.x - R.x) * (L.y - R.y) - (O.y - R.y) * (L.x - R.x) < 0 && (w = [
                  O,
                  L
                ], L = w[0], O = w[1]), {
                  bottomLeft: L,
                  topLeft: R,
                  topRight: O
                };
              }
              function f(b, v, _, g) {
                var F = (l(E(b, _, g, 5)) / 7 + l(E(b, v, g, 5)) / 7 + l(E(_, b, g, 5)) / 7 + l(E(v, b, g, 5)) / 7) / 4;
                if (F < 1) throw new Error("Invalid module size");
                var k = Math.round(x(b, v) / F), w = Math.round(x(b, _) / F), P = Math.floor((k + w) / 2) + 7;
                switch (P % 4) {
                  case 0:
                    P++;
                    break;
                  case 2:
                    P--;
                    break;
                }
                return {
                  dimension: P,
                  moduleSize: F
                };
              }
              function p(b, v, _, g) {
                var F = [
                  {
                    x: Math.floor(b.x),
                    y: Math.floor(b.y)
                  }
                ], k = Math.abs(v.y - b.y) > Math.abs(v.x - b.x), w, P, N, I;
                k ? (w = Math.floor(b.y), P = Math.floor(b.x), N = Math.floor(v.y), I = Math.floor(v.x)) : (w = Math.floor(b.x), P = Math.floor(b.y), N = Math.floor(v.x), I = Math.floor(v.y));
                for (var L = Math.abs(N - w), R = Math.abs(I - P), O = Math.floor(-L / 2), W = w < N ? 1 : -1, H = P < I ? 1 : -1, q = true, X = w, j = P; X !== N + W; X += W) {
                  var U = k ? j : X, z = k ? X : j;
                  if (_.get(U, z) !== q && (q = !q, F.push({
                    x: U,
                    y: z
                  }), F.length === g + 1)) break;
                  if (O += R, O > 0) {
                    if (j === I) break;
                    j += H, O -= L;
                  }
                }
                for (var K = [], Y = 0; Y < g; Y++) F[Y] && F[Y + 1] ? K.push(x(F[Y], F[Y + 1])) : K.push(0);
                return K;
              }
              function E(b, v, _, g) {
                var F, k = v.y - b.y, w = v.x - b.x, P = p(b, v, _, Math.ceil(g / 2)), N = p(b, {
                  x: b.x - w,
                  y: b.y - k
                }, _, Math.ceil(g / 2)), I = P.shift() + N.shift() - 1;
                return (F = N.concat(I)).concat.apply(F, P);
              }
              function m(b, v) {
                var _ = l(b) / l(v), g = 0;
                return v.forEach(function(F, k) {
                  g += Math.pow(b[k] - F * _, 2);
                }), {
                  averageSize: _,
                  error: g
                };
              }
              function C(b, v, _) {
                try {
                  var g = E(b, {
                    x: -1,
                    y: b.y
                  }, _, v.length), F = E(b, {
                    x: b.x,
                    y: -1
                  }, _, v.length), k = {
                    x: Math.max(0, b.x - b.y) - 1,
                    y: Math.max(0, b.y - b.x) - 1
                  }, w = E(b, k, _, v.length), P = {
                    x: Math.min(_.width, b.x + b.y) + 1,
                    y: Math.min(_.height, b.y + b.x) + 1
                  }, N = E(b, P, _, v.length), I = m(g, v), L = m(F, v), R = m(w, v), O = m(N, v), W = Math.sqrt(I.error * I.error + L.error * L.error + R.error * R.error + O.error * O.error), H = (I.averageSize + L.averageSize + R.averageSize + O.averageSize) / 4, q = (Math.pow(I.averageSize - H, 2) + Math.pow(L.averageSize - H, 2) + Math.pow(R.averageSize - H, 2) + Math.pow(O.averageSize - H, 2)) / H;
                  return W + q;
                } catch {
                  return 1 / 0;
                }
              }
              function B(b, v) {
                for (var _ = Math.round(v.x); b.get(_, Math.round(v.y)); ) _--;
                for (var g = Math.round(v.x); b.get(g, Math.round(v.y)); ) g++;
                for (var F = (_ + g) / 2, k = Math.round(v.y); b.get(Math.round(F), k); ) k--;
                for (var w = Math.round(v.y); b.get(Math.round(F), w); ) w++;
                var P = (k + w) / 2;
                return {
                  x: F,
                  y: P
                };
              }
              function A(b) {
                for (var v = [], _ = [], g = [], F = [], k = function(U) {
                  for (var z = 0, K = false, Y = [
                    0,
                    0,
                    0,
                    0,
                    0
                  ], se = function(re) {
                    var he = b.get(re, U);
                    if (he === K) z++;
                    else {
                      Y = [
                        Y[1],
                        Y[2],
                        Y[3],
                        Y[4],
                        z
                      ], z = 1, K = he;
                      var Be = l(Y) / 7, Te = Math.abs(Y[0] - Be) < Be && Math.abs(Y[1] - Be) < Be && Math.abs(Y[2] - 3 * Be) < 3 * Be && Math.abs(Y[3] - Be) < Be && Math.abs(Y[4] - Be) < Be && !he, $ = l(Y.slice(-3)) / 3, ie = Math.abs(Y[2] - $) < $ && Math.abs(Y[3] - $) < $ && Math.abs(Y[4] - $) < $ && he;
                      if (Te) {
                        var fe = re - Y[3] - Y[4], De = fe - Y[2], ye = {
                          startX: De,
                          endX: fe,
                          y: U
                        }, ze = _.filter(function(Le) {
                          return De >= Le.bottom.startX && De <= Le.bottom.endX || fe >= Le.bottom.startX && De <= Le.bottom.endX || De <= Le.bottom.startX && fe >= Le.bottom.endX && Y[2] / (Le.bottom.endX - Le.bottom.startX) < a && Y[2] / (Le.bottom.endX - Le.bottom.startX) > i;
                        });
                        ze.length > 0 ? ze[0].bottom = ye : _.push({
                          top: ye,
                          bottom: ye
                        });
                      }
                      if (ie) {
                        var $e = re - Y[4], Ue = $e - Y[3], ye = {
                          startX: Ue,
                          y: U,
                          endX: $e
                        }, ze = F.filter(function(Ve) {
                          return Ue >= Ve.bottom.startX && Ue <= Ve.bottom.endX || $e >= Ve.bottom.startX && Ue <= Ve.bottom.endX || Ue <= Ve.bottom.startX && $e >= Ve.bottom.endX && Y[2] / (Ve.bottom.endX - Ve.bottom.startX) < a && Y[2] / (Ve.bottom.endX - Ve.bottom.startX) > i;
                        });
                        ze.length > 0 ? ze[0].bottom = ye : F.push({
                          top: ye,
                          bottom: ye
                        });
                      }
                    }
                  }, ce = -1; ce <= b.width; ce++) se(ce);
                  v.push.apply(v, _.filter(function(re) {
                    return re.bottom.y !== U && re.bottom.y - re.top.y >= 2;
                  })), _ = _.filter(function(re) {
                    return re.bottom.y === U;
                  }), g.push.apply(g, F.filter(function(re) {
                    return re.bottom.y !== U;
                  })), F = F.filter(function(re) {
                    return re.bottom.y === U;
                  });
                }, w = 0; w <= b.height; w++) k(w);
                v.push.apply(v, _.filter(function(U) {
                  return U.bottom.y - U.top.y >= 2;
                })), g.push.apply(g, F);
                var P = v.filter(function(U) {
                  return U.bottom.y - U.top.y >= 2;
                }).map(function(U) {
                  var z = (U.top.startX + U.top.endX + U.bottom.startX + U.bottom.endX) / 4, K = (U.top.y + U.bottom.y + 1) / 2;
                  if (b.get(Math.round(z), Math.round(K))) {
                    var Y = [
                      U.top.endX - U.top.startX,
                      U.bottom.endX - U.bottom.startX,
                      U.bottom.y - U.top.y + 1
                    ], se = l(Y) / Y.length, ce = C({
                      x: Math.round(z),
                      y: Math.round(K)
                    }, [
                      1,
                      1,
                      3,
                      1,
                      1
                    ], b);
                    return {
                      score: ce,
                      x: z,
                      y: K,
                      size: se
                    };
                  }
                }).filter(function(U) {
                  return !!U;
                }).sort(function(U, z) {
                  return U.score - z.score;
                }).map(function(U, z, K) {
                  if (z > o) return null;
                  var Y = K.filter(function(ce, re) {
                    return z !== re;
                  }).map(function(ce) {
                    return {
                      x: ce.x,
                      y: ce.y,
                      score: ce.score + Math.pow(ce.size - U.size, 2) / U.size,
                      size: ce.size
                    };
                  }).sort(function(ce, re) {
                    return ce.score - re.score;
                  });
                  if (Y.length < 2) return null;
                  var se = U.score + Y[0].score + Y[1].score;
                  return {
                    points: [
                      U
                    ].concat(Y.slice(0, 2)),
                    score: se
                  };
                }).filter(function(U) {
                  return !!U;
                }).sort(function(U, z) {
                  return U.score - z.score;
                });
                if (P.length === 0) return null;
                var N = u(P[0].points[0], P[0].points[1], P[0].points[2]), I = N.topRight, L = N.topLeft, R = N.bottomLeft, O = D(b, g, I, L, R), W = [];
                O && W.push({
                  alignmentPattern: {
                    x: O.alignmentPattern.x,
                    y: O.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: R.x,
                    y: R.y
                  },
                  dimension: O.dimension,
                  topLeft: {
                    x: L.x,
                    y: L.y
                  },
                  topRight: {
                    x: I.x,
                    y: I.y
                  }
                });
                var H = B(b, I), q = B(b, L), X = B(b, R), j = D(b, g, H, q, X);
                return j && W.push({
                  alignmentPattern: {
                    x: j.alignmentPattern.x,
                    y: j.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: X.x,
                    y: X.y
                  },
                  topLeft: {
                    x: q.x,
                    y: q.y
                  },
                  topRight: {
                    x: H.x,
                    y: H.y
                  },
                  dimension: j.dimension
                }), W.length === 0 ? null : W;
              }
              r.locate = A;
              function D(b, v, _, g, F) {
                var k, w, P;
                try {
                  k = f(g, _, F, b), w = k.dimension, P = k.moduleSize;
                } catch {
                  return null;
                }
                var N = {
                  x: _.x - g.x + F.x,
                  y: _.y - g.y + F.y
                }, I = (x(g, F) + x(g, _)) / 2 / P, L = 1 - 3 / I, R = {
                  x: g.x + L * (N.x - g.x),
                  y: g.y + L * (N.y - g.y)
                }, O = v.map(function(H) {
                  var q = (H.top.startX + H.top.endX + H.bottom.startX + H.bottom.endX) / 4, X = (H.top.y + H.bottom.y + 1) / 2;
                  if (b.get(Math.floor(q), Math.floor(X))) {
                    var j = [
                      H.top.endX - H.top.startX,
                      H.bottom.endX - H.bottom.startX,
                      H.bottom.y - H.top.y + 1
                    ];
                    l(j) / j.length;
                    var U = C({
                      x: Math.floor(q),
                      y: Math.floor(X)
                    }, [
                      1,
                      1,
                      1
                    ], b), z = U + x({
                      x: q,
                      y: X
                    }, R);
                    return {
                      x: q,
                      y: X,
                      score: z
                    };
                  }
                }).filter(function(H) {
                  return !!H;
                }).sort(function(H, q) {
                  return H.score - q.score;
                }), W = I >= 15 && O.length ? O[0] : R;
                return {
                  alignmentPattern: W,
                  dimension: w
                };
              }
            }
          ]).default;
        });
      })(Rd);
      var $C = Rd.exports;
      const eB = lh($C);
      function Rl(t, e, n) {
        const r = t.slice();
        return r[44] = e[n], r;
      }
      function tB(t) {
        let e;
        return {
          c() {
            e = h("a"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', d(e, "class", "back-btn svelte-qzc8r5"), d(e, "href", "#/home");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function nB(t) {
        let e, n, r;
        return {
          c() {
            e = h("button"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', d(e, "class", "back-btn svelte-qzc8r5");
          },
          m(s, o) {
            T(s, e, o), n || (r = G(e, "click", t[17]), n = true);
          },
          p: Z,
          d(s) {
            s && S(e), n = false, r();
          }
        };
      }
      function rB(t) {
        let e;
        return {
          c() {
            e = M("New encounter");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function sB(t) {
        let e;
        return {
          c() {
            e = M("Encounter saved");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function oB(t) {
        let e;
        return {
          c() {
            e = M("Join group");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function iB(t) {
        let e;
        return {
          c() {
            e = M("Confirm exchange");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function aB(t) {
        let e;
        return {
          c() {
            e = M("Scan their code");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function xB(t) {
        let e, n, r, s, o, i, a, x, l = t[13] ? "Saving\u2026" : "Join group", u, f, p, E, m, C;
        function B(b, v) {
          return b[12]?.name ? hB : mB;
        }
        let A = B(t), D = A(t);
        return {
          c() {
            e = h("section"), n = h("p"), n.textContent = "Join group encounter?", r = y(), D.c(), s = y(), o = h("div"), i = h("button"), a = h("span"), a.textContent = "groups", x = y(), u = M(l), f = y(), p = h("button"), E = M("Cancel"), d(n, "class", "section-label svelte-qzc8r5"), d(a, "class", "material-icons svelte-qzc8r5"), d(i, "class", "btn-filled svelte-qzc8r5"), i.disabled = t[13], d(p, "class", "btn-text svelte-qzc8r5"), p.disabled = t[13], d(o, "class", "ongoing-actions svelte-qzc8r5"), d(e, "class", "card pad svelte-qzc8r5");
          },
          m(b, v) {
            T(b, e, v), c(e, n), c(e, r), D.m(e, null), c(e, s), c(e, o), c(o, i), c(i, a), c(i, x), c(i, u), c(o, f), c(o, p), c(p, E), m || (C = [
              G(i, "click", t[21]),
              G(p, "click", t[17])
            ], m = true);
          },
          p(b, v) {
            A === (A = B(b)) && D ? D.p(b, v) : (D.d(1), D = A(b), D && (D.c(), D.m(e, s))), v[0] & 8192 && l !== (l = b[13] ? "Saving\u2026" : "Join group") && V(u, l), v[0] & 8192 && (i.disabled = b[13]), v[0] & 8192 && (p.disabled = b[13]);
          },
          d(b) {
            b && S(e), D.d(), m = false, ue(C);
          }
        };
      }
      function lB(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B = t[13] && Ll();
        return {
          c() {
            e = h("section"), n = h("p"), n.textContent = "Ongoing relationship?", r = y(), s = h("p"), s.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", o = y(), i = h("div"), a = h("button"), x = h("span"), x.textContent = "favorite", l = M(`
          Yes, ongoing`), u = y(), f = h("button"), p = M("No, one off"), E = y(), B && B.c(), d(n, "class", "section-label svelte-qzc8r5"), d(s, "class", "help-text svelte-qzc8r5"), d(x, "class", "material-icons svelte-qzc8r5"), d(a, "class", "btn-filled svelte-qzc8r5"), a.disabled = t[13], d(f, "class", "btn-outlined svelte-qzc8r5"), f.disabled = t[13], d(i, "class", "ongoing-actions svelte-qzc8r5"), d(e, "class", "card pad svelte-qzc8r5");
          },
          m(A, D) {
            T(A, e, D), c(e, n), c(e, r), c(e, s), c(e, o), c(e, i), c(i, a), c(a, x), c(a, l), c(i, u), c(i, f), c(f, p), c(e, E), B && B.m(e, null), m || (C = [
              G(a, "click", t[28]),
              G(f, "click", t[29])
            ], m = true);
          },
          p(A, D) {
            D[0] & 8192 && (a.disabled = A[13]), D[0] & 8192 && (f.disabled = A[13]), A[13] ? B || (B = Ll(), B.c(), B.m(e, null)) : B && (B.d(1), B = null);
          },
          d(A) {
            A && S(e), B && B.d(), m = false, ue(C);
          }
        };
      }
      function cB(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p, E, m, C, B, A, D, b, v, _, g = ve(t[11]), F = [];
        for (let w = 0; w < g.length; w += 1) F[w] = Ml(Rl(t, g, w));
        let k = t[13] && Ol();
        return {
          c() {
            e = h("section"), n = h("p"), n.textContent = "Your partner's number", r = y(), s = h("p"), o = M(t[10]), i = y(), a = h("p"), a.textContent = "Ask your partner to confirm this matches their screen.", x = y(), l = h("section"), u = h("p"), u.textContent = "Let your partner scan your code", f = y(), p = h("div"), E = h("div"), m = y(), C = h("section"), B = h("p"), B.textContent = "What is your number?", A = y(), D = h("p"), D.textContent = "Tap the number shown on your screen above.", b = y(), v = h("div");
            for (let w = 0; w < F.length; w += 1) F[w].c();
            _ = y(), k && k.c(), d(n, "class", "section-label svelte-qzc8r5"), d(s, "class", "confirm-number svelte-qzc8r5"), d(a, "class", "help-text svelte-qzc8r5"), d(e, "class", "card pad svelte-qzc8r5"), d(u, "class", "section-label svelte-qzc8r5"), d(E, "class", "qr-inner svelte-qzc8r5"), d(p, "class", "qr-frame svelte-qzc8r5"), d(l, "class", "card pad svelte-qzc8r5"), d(B, "class", "section-label svelte-qzc8r5"), d(D, "class", "help-text svelte-qzc8r5"), d(v, "class", "choices svelte-qzc8r5"), d(C, "class", "card pad svelte-qzc8r5");
          },
          m(w, P) {
            T(w, e, P), c(e, n), c(e, r), c(e, s), c(s, o), c(e, i), c(e, a), T(w, x, P), T(w, l, P), c(l, u), c(l, f), c(l, p), c(p, E), E.innerHTML = t[3], T(w, m, P), T(w, C, P), c(C, B), c(C, A), c(C, D), c(C, b), c(C, v);
            for (let N = 0; N < F.length; N += 1) F[N] && F[N].m(v, null);
            c(C, _), k && k.m(C, null);
          },
          p(w, P) {
            if (P[0] & 1024 && V(o, w[10]), P[0] & 8 && (E.innerHTML = w[3]), P[0] & 272384) {
              g = ve(w[11]);
              let N;
              for (N = 0; N < g.length; N += 1) {
                const I = Rl(w, g, N);
                F[N] ? F[N].p(I, P) : (F[N] = Ml(I), F[N].c(), F[N].m(v, null));
              }
              for (; N < F.length; N += 1) F[N].d(1);
              F.length = g.length;
            }
            w[13] ? k || (k = Ol(), k.c(), k.m(C, null)) : k && (k.d(1), k = null);
          },
          d(w) {
            w && (S(e), S(x), S(l), S(m), S(C)), vt(F, w), k && k.d();
          }
        };
      }
      function uB(t) {
        let e, n, r, s, o, i;
        return {
          c() {
            e = h("div"), n = h("video"), r = y(), s = h("canvas"), o = y(), i = h("div"), i.innerHTML = '<div class="scan-box svelte-qzc8r5"></div> <p class="scan-hint svelte-qzc8r5">Point at your partner&#39;s QR code</p>', n.playsInline = true, d(n, "class", "camera-video svelte-qzc8r5"), d(s, "class", "camera-canvas svelte-qzc8r5"), d(i, "class", "scan-overlay svelte-qzc8r5"), d(e, "class", "camera-wrap svelte-qzc8r5");
          },
          m(a, x) {
            T(a, e, x), c(e, n), t[25](n), c(e, r), c(e, s), t[26](s), c(e, o), c(e, i);
          },
          p: Z,
          d(a) {
            a && S(e), t[25](null), t[26](null);
          }
        };
      }
      function dB(t) {
        let e, n, r, s, o, i, a, x, l, u = t[14] ? "check" : "content_copy", f, p, E = t[14] ? "Copied!" : "Copy as text", m, C, B, A, D, b, v, _ = t[7] ? "Hide" : "Enter code manually", g, F, k, w, P, N = t[6] && Hl(t), I = t[9] && ql(t);
        function L(H, q) {
          return H[3] ? BB : CB;
        }
        let R = L(t), O = R(t), W = t[7] && zl(t);
        return {
          c() {
            N && N.c(), e = y(), I && I.c(), n = y(), r = h("section"), s = h("p"), s.textContent = "Show this to your partner", o = y(), i = h("div"), O.c(), a = y(), x = h("button"), l = h("span"), f = M(u), p = y(), m = M(E), B = y(), A = h("div"), D = h("button"), D.innerHTML = `<span class="material-icons svelte-qzc8r5">qr_code_scanner</span>
        Scan Their Code`, b = y(), v = h("button"), g = M(_), F = y(), W && W.c(), k = Pt(), d(s, "class", "section-label svelte-qzc8r5"), d(i, "class", "qr-frame svelte-qzc8r5"), d(l, "class", "material-icons svelte-qzc8r5"), d(x, "class", "btn-copy svelte-qzc8r5"), x.disabled = C = !t[2], d(r, "class", "card pad svelte-qzc8r5"), d(D, "class", "btn-filled svelte-qzc8r5"), d(v, "class", "btn-text svelte-qzc8r5"), d(A, "class", "scan-actions svelte-qzc8r5");
          },
          m(H, q) {
            N && N.m(H, q), T(H, e, q), I && I.m(H, q), T(H, n, q), T(H, r, q), c(r, s), c(r, o), c(r, i), O.m(i, null), c(r, a), c(r, x), c(x, l), c(l, f), c(x, p), c(x, m), T(H, B, q), T(H, A, q), c(A, D), c(A, b), c(A, v), c(v, g), T(H, F, q), W && W.m(H, q), T(H, k, q), w || (P = [
              G(x, "click", t[20]),
              G(D, "click", t[15]),
              G(v, "click", t[22])
            ], w = true);
          },
          p(H, q) {
            H[6] ? N ? N.p(H, q) : (N = Hl(H), N.c(), N.m(e.parentNode, e)) : N && (N.d(1), N = null), H[9] ? I ? I.p(H, q) : (I = ql(H), I.c(), I.m(n.parentNode, n)) : I && (I.d(1), I = null), R === (R = L(H)) && O ? O.p(H, q) : (O.d(1), O = R(H), O && (O.c(), O.m(i, null))), q[0] & 16384 && u !== (u = H[14] ? "check" : "content_copy") && V(f, u), q[0] & 16384 && E !== (E = H[14] ? "Copied!" : "Copy as text") && V(m, E), q[0] & 4 && C !== (C = !H[2]) && (x.disabled = C), q[0] & 128 && _ !== (_ = H[7] ? "Hide" : "Enter code manually") && V(g, _), H[7] ? W ? W.p(H, q) : (W = zl(H), W.c(), W.m(k.parentNode, k)) : W && (W.d(1), W = null);
          },
          d(H) {
            H && (S(e), S(n), S(r), S(B), S(A), S(F), S(k)), N && N.d(H), I && I.d(H), O.d(), W && W.d(H), w = false, ue(P);
          }
        };
      }
      function fB(t) {
        let e;
        return {
          c() {
            e = h("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-qzc8r5">check_circle</span> <p class="saved-title svelte-qzc8r5">Encounter recorded</p> <p class="muted svelte-qzc8r5">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-qzc8r5">View encounters</a>', d(e, "class", "card pad saved-card svelte-qzc8r5");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function EB(t) {
        let e, n, r, s, o;
        return {
          c() {
            e = h("section"), n = h("p"), r = M(t[1]), s = y(), o = h("a"), o.textContent = "\u2190 Back", d(n, "class", "error svelte-qzc8r5"), d(o, "href", "#/home"), d(o, "class", "btn-text svelte-qzc8r5"), d(e, "class", "card pad svelte-qzc8r5");
          },
          m(i, a) {
            T(i, e, a), c(e, n), c(n, r), c(e, s), c(e, o);
          },
          p(i, a) {
            a[0] & 2 && V(r, i[1]);
          },
          d(i) {
            i && S(e);
          }
        };
      }
      function pB(t) {
        let e;
        return {
          c() {
            e = h("div"), e.innerHTML = '<div class="spinner svelte-qzc8r5"></div> <p class="muted svelte-qzc8r5">Generating your code\u2026</p>', d(e, "class", "center-fill svelte-qzc8r5");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function mB(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Unnamed group encounter", d(e, "class", "help-text svelte-qzc8r5");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function hB(t) {
        let e, n = t[12].name + "", r;
        return {
          c() {
            e = h("p"), r = M(n), d(e, "class", "confirm-group-name svelte-qzc8r5");
          },
          m(s, o) {
            T(s, e, o), c(e, r);
          },
          p(s, o) {
            o[0] & 4096 && n !== (n = s[12].name + "") && V(r, n);
          },
          d(s) {
            s && S(e);
          }
        };
      }
      function Ll(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Saving\u2026", d(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Ml(t) {
        let e, n = t[44] + "", r, s, o;
        function i() {
          return t[27](t[44]);
        }
        return {
          c() {
            e = h("button"), r = M(n), d(e, "class", "choice-btn svelte-qzc8r5"), e.disabled = t[13];
          },
          m(a, x) {
            T(a, e, x), c(e, r), s || (o = G(e, "click", i), s = true);
          },
          p(a, x) {
            t = a, x[0] & 2048 && n !== (n = t[44] + "") && V(r, n), x[0] & 8192 && (e.disabled = t[13]);
          },
          d(a) {
            a && S(e), s = false, o();
          }
        };
      }
      function Ol(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Saving\u2026", d(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(n, r) {
            T(n, e, r);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function Hl(t) {
        let e, n, r, s;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "error_outline", r = y(), s = M(t[6]), d(n, "class", "material-icons svelte-qzc8r5"), d(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(o, i) {
            T(o, e, i), c(e, n), c(e, r), c(e, s);
          },
          p(o, i) {
            i[0] & 64 && V(s, o[6]);
          },
          d(o) {
            o && S(e);
          }
        };
      }
      function ql(t) {
        let e, n, r, s;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "error_outline", r = y(), s = M(t[9]), d(n, "class", "material-icons svelte-qzc8r5"), d(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(o, i) {
            T(o, e, i), c(e, n), c(e, r), c(e, s);
          },
          p(o, i) {
            i[0] & 512 && V(s, o[9]);
          },
          d(o) {
            o && S(e);
          }
        };
      }
      function CB(t) {
        let e;
        return {
          c() {
            e = h("p"), e.textContent = "Generating\u2026", d(e, "class", "muted svelte-qzc8r5");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function BB(t) {
        let e;
        return {
          c() {
            e = h("div"), d(e, "class", "qr-inner svelte-qzc8r5");
          },
          m(n, r) {
            T(n, e, r), e.innerHTML = t[3];
          },
          p(n, r) {
            r[0] & 8 && (e.innerHTML = n[3]);
          },
          d(n) {
            n && S(e);
          }
        };
      }
      function zl(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p = t[9] && Ul(t);
        return {
          c() {
            e = h("section"), n = h("p"), n.textContent = "Paste their QR payload", r = y(), s = h("textarea"), o = y(), p && p.c(), i = y(), a = h("button"), x = M("Continue"), d(n, "class", "section-label svelte-qzc8r5"), d(s, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), d(s, "rows", "3"), d(s, "class", "svelte-qzc8r5"), d(a, "class", "btn-filled svelte-qzc8r5"), a.disabled = l = !t[8].trim(), d(e, "class", "card pad svelte-qzc8r5");
          },
          m(E, m) {
            T(E, e, m), c(e, n), c(e, r), c(e, s), xe(s, t[8]), c(e, o), p && p.m(e, null), c(e, i), c(e, a), c(a, x), u || (f = [
              G(s, "input", t[23]),
              G(s, "keydown", t[24]),
              G(a, "click", t[16])
            ], u = true);
          },
          p(E, m) {
            m[0] & 256 && xe(s, E[8]), E[9] ? p ? p.p(E, m) : (p = Ul(E), p.c(), p.m(e, i)) : p && (p.d(1), p = null), m[0] & 256 && l !== (l = !E[8].trim()) && (a.disabled = l);
          },
          d(E) {
            E && S(e), p && p.d(), u = false, ue(f);
          }
        };
      }
      function Ul(t) {
        let e, n;
        return {
          c() {
            e = h("p"), n = M(t[9]), d(e, "class", "error-text svelte-qzc8r5");
          },
          m(r, s) {
            T(r, e, s), c(e, n);
          },
          p(r, s) {
            s[0] & 512 && V(n, r[9]);
          },
          d(r) {
            r && S(e);
          }
        };
      }
      function gB(t) {
        let e, n, r, s, o, i, a, x;
        e = new Ot({});
        function l(D, b) {
          return D[0] === "scanning" || D[0] === "confirm-group" ? nB : tB;
        }
        let u = l(t), f = u(t);
        function p(D, b) {
          return D[0] === "scanning" ? aB : D[0] === "confirm" || D[0] === "ongoing?" ? iB : D[0] === "confirm-group" ? oB : D[0] === "saved" ? sB : rB;
        }
        let E = p(t), m = E(t);
        function C(D, b) {
          if (D[0] === "loading") return pB;
          if (D[0] === "error") return EB;
          if (D[0] === "saved") return fB;
          if (D[0] === "showQR") return dB;
          if (D[0] === "scanning") return uB;
          if (D[0] === "confirm") return cB;
          if (D[0] === "ongoing?") return lB;
          if (D[0] === "confirm-group") return xB;
        }
        let B = C(t), A = B && B(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), s = h("div"), f.c(), o = y(), i = h("h1"), m.c(), a = y(), A && A.c(), d(i, "class", "svelte-qzc8r5"), d(s, "class", "page-header svelte-qzc8r5"), d(r, "class", "svelte-qzc8r5");
          },
          m(D, b) {
            Oe(e, D, b), T(D, n, b), T(D, r, b), c(r, s), f.m(s, null), c(s, o), c(s, i), m.m(i, null), c(r, a), A && A.m(r, null), x = true;
          },
          p(D, b) {
            u === (u = l(D)) && f ? f.p(D, b) : (f.d(1), f = u(D), f && (f.c(), f.m(s, o))), E !== (E = p(D)) && (m.d(1), m = E(D), m && (m.c(), m.m(i, null))), B === (B = C(D)) && A ? A.p(D, b) : (A && A.d(1), A = B && B(D), A && (A.c(), A.m(r, null)));
          },
          i(D) {
            x || (Ce(e.$$.fragment, D), x = true);
          },
          o(D) {
            Ae(e.$$.fragment, D), x = false;
          },
          d(D) {
            D && (S(n), S(r)), He(e, D), f.d(), m.d(), A && A.d();
          }
        };
      }
      function xo(t) {
        return 10 + (t[1] * 256 + t[2]) % 90;
      }
      function jl(t) {
        const e = /* @__PURE__ */ new Set([
          t
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((n, r) => n - r);
      }
      function _B(t, e, n) {
        let r = "loading", s = null, o = null, i = "", a = 0, x = "", l = null, u = null, f = null, p = null, E = null, m = false, C = false, B = "", A = null, D = null, b = null, v = 0, _ = [], g = null, F = "", k = null, w = "", P = false, N = false;
        st(async () => {
          if (!ut()) {
            Ee("/login");
            return;
          }
          try {
            const $ = Fm(), ie = wn(), fe = Math.floor(Date.now() / 1e3);
            o = $.privateKey, a = xo($.publicKey), n(2, i = `1|${xn($.publicKey)}|${fe}|${ne(ie)}`), n(3, x = await Gn.toString(i, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#000000",
                light: "#ffffff"
              }
            })), n(0, r = "showQR");
          } catch ($) {
            n(1, s = $.message), n(0, r = "error");
          }
        }), Ds(() => {
          L();
        });
        async function I() {
          if (n(6, E = null), m = false, !navigator.mediaDevices?.getUserMedia) {
            n(6, E = "Camera not available. This page must be opened over HTTPS to use the camera."), n(0, r = "showQR");
            return;
          }
          n(0, r = "scanning"), await new Promise(($) => setTimeout($, 50));
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
            }), n(4, l.srcObject = f, l), await l.play(), R();
          } catch ($) {
            const ie = $;
            n(6, E = ie.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + ie.message), L(), n(0, r = "showQR");
          }
        }
        function L() {
          p && (cancelAnimationFrame(p), p = null), f && (f.getTracks().forEach(($) => $.stop()), f = null), m = false;
        }
        function R() {
          if (!f || !l || l.readyState < 2) {
            p = requestAnimationFrame(R);
            return;
          }
          const $ = l.videoWidth, ie = l.videoHeight;
          if (!$ || !ie) {
            p = requestAnimationFrame(R);
            return;
          }
          n(5, u.width = $, u), n(5, u.height = ie, u);
          const fe = u.getContext("2d");
          fe.drawImage(l, 0, 0, $, ie);
          const De = fe.getImageData(0, 0, $, ie), ye = eB(De.data, $, ie, {
            inversionAttempts: "dontInvert"
          });
          if (ye && !m) {
            m = true, W(ye.data);
            return;
          }
          p = requestAnimationFrame(R);
        }
        function O($) {
          const ie = $.trim().split("|"), fe = parseInt(ie[0], 10);
          if (!isNaN(fe) && fe > 1) throw new Error("Your partner has a newer app version. Please update.");
          if (ie.length !== 4 || ie[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, De, , ye] = ie;
          if (!De || De.length < 10) throw new Error("Invalid QR payload");
          if (!ye || ye.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: $u(De),
            contactIdBytes: nt(ye)
          };
        }
        function W($) {
          const ie = $.trim();
          if (ie.startsWith("2|")) {
            try {
              const fe = Za(ie);
              if (!fe) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - fe.timestamp > 86400) {
                m = false, p = requestAnimationFrame(R);
                return;
              }
              L(), n(12, g = fe), F = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), n(0, r = "confirm-group");
            } catch {
              m = false, p = requestAnimationFrame(R);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: fe, contactIdBytes: De } = O($);
            if (ne(De) === ne(wn())) {
              m = false, n(9, A = "You can't log an encounter with yourself."), n(0, r = "showQR");
              return;
            }
            L(), D = fe, b = De, n(10, v = xo(fe)), n(11, _ = jl(a)), n(0, r = "confirm");
          } catch {
            m = false, p = requestAnimationFrame(R);
          }
        }
        function H() {
          n(9, A = null);
          const $ = B.trim();
          try {
            if ($.startsWith("2|")) {
              const ie = Za($);
              if (!ie) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - ie.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              n(12, g = ie), F = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), n(0, r = "confirm-group"), n(7, C = false);
            } else {
              const { ephemeralPubkeyBytes: ie, contactIdBytes: fe } = O($);
              if (ne(fe) === ne(wn())) throw new Error("You can't log an encounter with yourself.");
              D = ie, b = fe, n(10, v = xo(ie)), n(11, _ = jl(a)), n(0, r = "confirm"), n(7, C = false);
            }
          } catch (ie) {
            n(9, A = ie.message);
          }
        }
        function q() {
          L(), n(12, g = null), n(0, r = "showQR"), n(7, C = false), n(9, A = null), n(8, B = "");
        }
        async function X($) {
          if ($ !== a) {
            n(9, A = "Wrong \u2014 that's not your number. Scan again."), n(0, r = "showQR"), n(7, C = false), n(8, B = ""), D = null, b = null;
            return;
          }
          const ie = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          k = Dm(o, D), w = ie;
          const ye = wt()?.encounters || [], ze = Pi(), $e = ne(b), Ue = ye.some((Re) => ne(Re.theirContactId) === $e), Le = ze.some((Re) => ne(Re.theirContactId) === $e && !Re.endedAt);
          Ue && !Le ? n(0, r = "ongoing?") : await j(false);
        }
        async function j($) {
          n(13, P = true);
          try {
            const ie = wn(), fe = yn(k, ie, 0);
            await is(ne(fe), w), $ ? await D7(k, b, w) : await A7(k, b, w), n(0, r = "saved");
          } catch (ie) {
            n(1, s = ie.message), n(0, r = "error");
          } finally {
            n(13, P = false);
          }
        }
        async function U() {
          try {
            await navigator.clipboard.writeText(i), n(14, N = true), setTimeout(() => {
              n(14, N = false);
            }, 2e3);
          } catch {
          }
        }
        async function z() {
          n(13, P = true);
          try {
            const $ = nt(g.groupTokenHex), ie = nt(g.hostContactIdHex);
            await pd($, F, false, ie, g.name), await is(ne(t0($, 0)), F), n(0, r = "saved");
          } catch ($) {
            n(1, s = $.message), n(0, r = "error");
          } finally {
            n(13, P = false);
          }
        }
        const K = () => {
          n(7, C = !C), n(9, A = null);
        };
        function Y() {
          B = this.value, n(8, B);
        }
        const se = ($) => $.key === "Enter" && !$.shiftKey && ($.preventDefault(), H());
        function ce($) {
          es[$ ? "unshift" : "push"](() => {
            l = $, n(4, l);
          });
        }
        function re($) {
          es[$ ? "unshift" : "push"](() => {
            u = $, n(5, u);
          });
        }
        return [
          r,
          s,
          i,
          x,
          l,
          u,
          E,
          C,
          B,
          A,
          v,
          _,
          g,
          P,
          N,
          I,
          H,
          q,
          X,
          j,
          U,
          z,
          K,
          Y,
          se,
          ce,
          re,
          ($) => X($),
          () => j(true),
          () => j(false)
        ];
      }
      class AB extends Se {
        constructor(e) {
          super(), we(this, e, _B, gB, ke, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function FB(t) {
        let e, n, r, s, o, i, a = Yl(t[1].date) + "", x, l, u, f = t[0].rawTokenHex.slice(0, 12) + "", p, E, m, C, B, A, D, b, v, _, g = t[3] && Gl(t), F = t[7] && Wl(t), k = t[5] && Vl(t);
        return {
          c() {
            g && g.c(), e = y(), F && F.c(), n = y(), r = h("section"), s = h("div"), s.innerHTML = '<span class="material-icons status-icon svelte-nknqao">check_circle_outline</span> <span class="status-label svelte-nknqao">One-time encounter</span>', o = y(), i = h("p"), x = M(a), l = y(), u = h("p"), p = M(f), E = M("\u2026"), m = y(), C = h("section"), B = h("div"), B.innerHTML = '<span class="material-icons privacy-icon svelte-nknqao">lock_outline</span> <p class="privacy-text svelte-nknqao">Your note is stored encrypted and never shared.</p>', A = y(), D = h("textarea"), b = y(), k && k.c(), d(s, "class", "status-row svelte-nknqao"), d(i, "class", "date svelte-nknqao"), d(u, "class", "token svelte-nknqao"), d(r, "class", "card pad svelte-nknqao"), d(B, "class", "privacy-row svelte-nknqao"), d(D, "placeholder", "Add a private note\u2026"), d(D, "rows", "5"), d(D, "class", "svelte-nknqao"), d(C, "class", "card pad svelte-nknqao");
          },
          m(w, P) {
            g && g.m(w, P), T(w, e, P), F && F.m(w, P), T(w, n, P), T(w, r, P), c(r, s), c(r, o), c(r, i), c(i, x), c(r, l), c(r, u), c(u, p), c(u, E), T(w, m, P), T(w, C, P), c(C, B), c(C, A), c(C, D), xe(D, t[4]), c(C, b), k && k.m(C, null), v || (_ = [
              G(D, "input", t[13]),
              G(D, "input", t[8])
            ], v = true);
          },
          p(w, P) {
            w[3] ? g ? g.p(w, P) : (g = Gl(w), g.c(), g.m(e.parentNode, e)) : g && (g.d(1), g = null), w[7] ? F ? F.p(w, P) : (F = Wl(w), F.c(), F.m(n.parentNode, n)) : F && (F.d(1), F = null), P & 2 && a !== (a = Yl(w[1].date) + "") && V(x, a), P & 1 && f !== (f = w[0].rawTokenHex.slice(0, 12) + "") && V(p, f), P & 16 && xe(D, w[4]), w[5] ? k ? k.p(w, P) : (k = Vl(w), k.c(), k.m(C, null)) : k && (k.d(1), k = null);
          },
          d(w) {
            w && (S(e), S(n), S(r), S(m), S(C)), g && g.d(w), F && F.d(w), k && k.d(), v = false, ue(_);
          }
        };
      }
      function DB(t) {
        let e;
        return {
          c() {
            e = h("section"), e.innerHTML = '<p class="muted svelte-nknqao">This encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-nknqao">\u2190 Back to encounters</a>', d(e, "class", "card pad svelte-nknqao");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function Gl(t) {
        let e, n, r, s;
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "error_outline", r = y(), s = M(t[3]), d(n, "class", "material-icons svelte-nknqao"), d(e, "class", "toast error-toast svelte-nknqao");
          },
          m(o, i) {
            T(o, e, i), c(e, n), c(e, r), c(e, s);
          },
          p(o, i) {
            i & 8 && V(s, o[3]);
          },
          d(o) {
            o && S(e);
          }
        };
      }
      function Wl(t) {
        let e, n, r, s, o, i, a, x, l, u = t[6] ? "Saving\u2026" : "Save note", f, p, E;
        return {
          c() {
            e = h("section"), n = h("p"), n.textContent = "You have unsaved changes to your note.", r = y(), s = h("div"), o = h("button"), o.textContent = "Keep editing", i = y(), a = h("button"), a.textContent = "Discard", x = y(), l = h("button"), f = M(u), d(n, "class", "confirm-text svelte-nknqao"), d(o, "class", "btn-text svelte-nknqao"), d(a, "class", "btn-text danger svelte-nknqao"), d(l, "class", "btn-filled-sm svelte-nknqao"), l.disabled = t[6], d(s, "class", "confirm-actions svelte-nknqao"), d(e, "class", "card pad leave-confirm svelte-nknqao");
          },
          m(m, C) {
            T(m, e, C), c(e, n), c(e, r), c(e, s), c(s, o), c(s, i), c(s, a), c(s, x), c(s, l), c(l, f), p || (E = [
              G(o, "click", t[12]),
              G(a, "click", t[11]),
              G(l, "click", t[10])
            ], p = true);
          },
          p(m, C) {
            C & 64 && u !== (u = m[6] ? "Saving\u2026" : "Save note") && V(f, u), C & 64 && (l.disabled = m[6]);
          },
          d(m) {
            m && S(e), p = false, ue(E);
          }
        };
      }
      function Vl(t) {
        let e, n, r = t[6] ? "Saving\u2026" : "Save", s, o, i;
        return {
          c() {
            e = h("div"), n = h("button"), s = M(r), d(n, "class", "btn-filled-sm svelte-nknqao"), n.disabled = t[6], d(e, "class", "note-actions svelte-nknqao");
          },
          m(a, x) {
            T(a, e, x), c(e, n), c(n, s), o || (i = G(n, "click", t[9]), o = true);
          },
          p(a, x) {
            x & 64 && r !== (r = a[6] ? "Saving\u2026" : "Save") && V(s, r), x & 64 && (n.disabled = a[6]);
          },
          d(a) {
            a && S(e), o = false, i();
          }
        };
      }
      function vB(t) {
        let e, n, r, s, o, i, a, x = t[2] ? "Not found" : "Encounter", l, u, f;
        e = new Ot({});
        function p(C, B) {
          if (C[2]) return DB;
          if (C[1]) return FB;
        }
        let E = p(t), m = E && E(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), r = h("main"), s = h("div"), o = h("a"), o.innerHTML = '<span class="material-icons svelte-nknqao">arrow_back</span>', i = y(), a = h("h1"), l = M(x), u = y(), m && m.c(), d(o, "class", "back-btn svelte-nknqao"), d(o, "href", "#/encounters"), d(a, "class", "svelte-nknqao"), d(s, "class", "page-header svelte-nknqao"), d(r, "class", "svelte-nknqao");
          },
          m(C, B) {
            Oe(e, C, B), T(C, n, B), T(C, r, B), c(r, s), c(s, o), c(s, i), c(s, a), c(a, l), c(r, u), m && m.m(r, null), f = true;
          },
          p(C, [B]) {
            (!f || B & 4) && x !== (x = C[2] ? "Not found" : "Encounter") && V(l, x), E === (E = p(C)) && m ? m.p(C, B) : (m && m.d(1), m = E && E(C), m && (m.c(), m.m(r, null)));
          },
          i(C) {
            f || (Ce(e.$$.fragment, C), f = true);
          },
          o(C) {
            Ae(e.$$.fragment, C), f = false;
          },
          d(C) {
            C && (S(n), S(r)), He(e, C), m && m.d();
          }
        };
      }
      function Yl(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function bB(t, e, n) {
        let { params: r = {
          rawTokenHex: ""
        } } = e, s = null, o = false, i = null, a = "", x = false, l = false, u = false, f = null;
        st(() => {
          if (!ut()) {
            Ee("/login");
            return;
          }
          m(), document.addEventListener("click", E, {
            capture: true
          }), window.addEventListener("beforeunload", p);
        }), Ds(() => {
          document.removeEventListener("click", E, {
            capture: true
          }), window.removeEventListener("beforeunload", p);
        });
        function p(g) {
          x && (g.preventDefault(), g.returnValue = "");
        }
        function E(g) {
          if (!x) return;
          const F = g.target.closest('a[href^="#/"]');
          F && (g.preventDefault(), g.stopImmediatePropagation(), f = F.getAttribute("href").slice(1), n(7, u = true));
        }
        function m() {
          const g = r.rawTokenHex;
          if (n(1, s = fd().find((F) => ne(F.rawToken) === g) ?? null), !s) {
            n(2, o = true);
            return;
          }
          n(4, a = s.note ?? "");
        }
        function C() {
          n(5, x = a !== (s.note ?? ""));
        }
        async function B() {
          if (!(!x || l)) {
            n(6, l = true), n(3, i = null);
            try {
              const g = a.trim() || null;
              await F7(r.rawTokenHex, {
                note: g
              }), m(), n(5, x = false);
            } catch (g) {
              n(3, i = g.message);
            } finally {
              n(6, l = false);
            }
          }
        }
        async function A() {
          await B(), i || b();
        }
        function D() {
          n(4, a = s.note ?? ""), n(5, x = false), b();
        }
        function b() {
          n(7, u = false), Ee(f);
        }
        const v = () => n(7, u = false);
        function _() {
          a = this.value, n(4, a);
        }
        return t.$$set = (g) => {
          "params" in g && n(0, r = g.params);
        }, [
          r,
          s,
          o,
          i,
          a,
          x,
          l,
          u,
          C,
          B,
          A,
          D,
          v,
          _
        ];
      }
      class kB extends Se {
        constructor(e) {
          super(), we(this, e, bB, vB, ke, {
            params: 0
          });
        }
      }
      function yB(t) {
        let e, n, r, s, o, i, a, x, l, u, f, p;
        return a = new Nd({
          props: {
            digits: t[0],
            error: t[1],
            shaking: t[2]
          }
        }), a.$on("digit", t[3]), a.$on("delete", t[4]), {
          c() {
            e = h("div"), n = h("div"), r = h("div"), r.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-1d0bqmg"/> <span class="brand-label"><span class="brand-peach svelte-1d0bqmg">Peach</span><span class="brand-safe svelte-1d0bqmg">Safe</span></span>', s = y(), o = h("p"), o.textContent = "Enter your PIN", i = y(), We(a.$$.fragment), x = y(), l = h("button"), l.textContent = "Sign out", d(r, "class", "brand svelte-1d0bqmg"), d(o, "class", "prompt svelte-1d0bqmg"), d(l, "class", "signout-link svelte-1d0bqmg"), d(n, "class", "lock-card svelte-1d0bqmg"), d(e, "class", "overlay svelte-1d0bqmg"), d(e, "role", "dialog"), d(e, "aria-modal", "true"), d(e, "aria-label", "Enter PIN to unlock");
          },
          m(E, m) {
            T(E, e, m), c(e, n), c(n, r), c(n, s), c(n, o), c(n, i), Oe(a, n, null), c(n, x), c(n, l), u = true, f || (p = G(l, "click", t[5]), f = true);
          },
          p(E, [m]) {
            const C = {};
            m & 1 && (C.digits = E[0]), m & 2 && (C.error = E[1]), m & 4 && (C.shaking = E[2]), a.$set(C);
          },
          i(E) {
            u || (Ce(a.$$.fragment, E), u = true);
          },
          o(E) {
            Ae(a.$$.fragment, E), u = false;
          },
          d(E) {
            E && S(e), He(a), f = false, p();
          }
        };
      }
      function wB(t, e, n) {
        let r = "", s = "", o = false;
        function i(u) {
          r.length >= 4 || o || (n(1, s = ""), n(0, r += u.detail), r.length === 4 && x());
        }
        function a() {
          o || (n(0, r = r.slice(0, -1)), n(1, s = ""));
        }
        async function x() {
          r === _7() ? ks.set(true) : (n(2, o = true), n(1, s = "Incorrect PIN"), await new Promise((u) => setTimeout(u, 600)), n(0, r = ""), n(2, o = false));
        }
        async function l() {
          await bi(), Ee("/login");
        }
        return [
          r,
          s,
          o,
          i,
          a,
          l
        ];
      }
      class SB extends Se {
        constructor(e) {
          super(), we(this, e, wB, yB, ke, {});
        }
      }
      function TB(t) {
        let e, n, r, s, o = t[7] !== null && !t[8] && t[11](t[0]), i, a, x, l;
        e = new i6({
          props: {
            routes: t[10]
          }
        }), e.$on("routeLoaded", t[15]), r = new Rm({});
        let u = o && Kl(), f = t[9] === false && Jl(t), p = t[5] && Xl(t);
        return {
          c() {
            We(e.$$.fragment), n = y(), We(r.$$.fragment), s = y(), u && u.c(), i = y(), f && f.c(), a = y(), p && p.c(), x = Pt();
          },
          m(E, m) {
            Oe(e, E, m), T(E, n, m), Oe(r, E, m), T(E, s, m), u && u.m(E, m), T(E, i, m), f && f.m(E, m), T(E, a, m), p && p.m(E, m), T(E, x, m), l = true;
          },
          p(E, m) {
            m & 385 && (o = E[7] !== null && !E[8] && E[11](E[0])), o ? u ? m & 385 && Ce(u, 1) : (u = Kl(), u.c(), Ce(u, 1), u.m(i.parentNode, i)) : u && (B0(), Ae(u, 1, 1, () => {
              u = null;
            }), g0()), E[9] === false ? f ? f.p(E, m) : (f = Jl(E), f.c(), f.m(a.parentNode, a)) : f && (f.d(1), f = null), E[5] ? p ? p.p(E, m) : (p = Xl(E), p.c(), p.m(x.parentNode, x)) : p && (p.d(1), p = null);
          },
          i(E) {
            l || (Ce(e.$$.fragment, E), Ce(r.$$.fragment, E), Ce(u), l = true);
          },
          o(E) {
            Ae(e.$$.fragment, E), Ae(r.$$.fragment, E), Ae(u), l = false;
          },
          d(E) {
            E && (S(n), S(s), S(i), S(a), S(x)), He(e, E), He(r, E), u && u.d(E), f && f.d(E), p && p.d(E);
          }
        };
      }
      function PB(t) {
        let e;
        return {
          c() {
            e = h("main"), e.textContent = "Loading\u2026", d(e, "class", "loading svelte-1kqo0f9");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          i: Z,
          o: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function IB(t) {
        let e, n, r, s, o, i;
        return {
          c() {
            e = h("main"), n = h("p"), r = M("Failed to load crypto module: "), s = M(t[4]), o = y(), i = h("p"), i.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", d(e, "class", "error svelte-1kqo0f9");
          },
          m(a, x) {
            T(a, e, x), c(e, n), c(n, r), c(n, s), c(e, o), c(e, i);
          },
          p(a, x) {
            x & 16 && V(s, a[4]);
          },
          i: Z,
          o: Z,
          d(a) {
            a && S(e);
          }
        };
      }
      function Kl(t) {
        let e, n;
        return e = new SB({}), {
          c() {
            We(e.$$.fragment);
          },
          m(r, s) {
            Oe(e, r, s), n = true;
          },
          i(r) {
            n || (Ce(e.$$.fragment, r), n = true);
          },
          o(r) {
            Ae(e.$$.fragment, r), n = false;
          },
          d(r) {
            He(e, r);
          }
        };
      }
      function Jl(t) {
        let e, n, r, s, o;
        function i(l, u) {
          return l[2] ? RB : NB;
        }
        let a = i(t), x = a(t);
        return {
          c() {
            e = h("div"), n = h("span"), n.textContent = "mail_outline", r = y(), s = h("span"), s.textContent = "Please verify your email address. Check your inbox for a verification link.", o = y(), x.c(), d(n, "class", "material-icons svelte-1kqo0f9"), d(s, "class", "verify-text svelte-1kqo0f9"), d(e, "class", "verify-banner svelte-1kqo0f9");
          },
          m(l, u) {
            T(l, e, u), c(e, n), c(e, r), c(e, s), c(e, o), x.m(e, null);
          },
          p(l, u) {
            a === (a = i(l)) && x ? x.p(l, u) : (x.d(1), x = a(l), x && (x.c(), x.m(e, null)));
          },
          d(l) {
            l && S(e), x.d();
          }
        };
      }
      function NB(t) {
        let e, n = t[1] ? "Sending\u2026" : "Resend", r, s, o;
        return {
          c() {
            e = h("button"), r = M(n), d(e, "class", "resend-btn svelte-1kqo0f9"), e.disabled = t[1];
          },
          m(i, a) {
            T(i, e, a), c(e, r), s || (o = G(e, "click", t[12]), s = true);
          },
          p(i, a) {
            a & 2 && n !== (n = i[1] ? "Sending\u2026" : "Resend") && V(r, n), a & 2 && (e.disabled = i[1]);
          },
          d(i) {
            i && S(e), s = false, o();
          }
        };
      }
      function RB(t) {
        let e;
        return {
          c() {
            e = h("span"), e.textContent = "Sent!", d(e, "class", "resend-sent svelte-1kqo0f9");
          },
          m(n, r) {
            T(n, e, r);
          },
          p: Z,
          d(n) {
            n && S(e);
          }
        };
      }
      function Xl(t) {
        let e, n, r, s, o, i, a, x = Math.floor(t[6] / 60) + "", l, u, f = String(t[6] % 60).padStart(2, "0") + "", p, E, m, C, B, A, D, b, v;
        return {
          c() {
            e = h("div"), n = h("div"), r = h("h2"), r.textContent = "Session expiring", s = y(), o = h("p"), i = M(`You'll be logged out in
          `), a = h("strong"), l = M(x), u = M(":"), p = M(f), E = M(`
          due to inactivity.`), m = y(), C = h("div"), B = h("button"), B.textContent = "Stay logged in", A = y(), D = h("button"), D.textContent = "Log out now", d(r, "id", "idle-title"), d(r, "class", "svelte-1kqo0f9"), d(o, "class", "svelte-1kqo0f9"), d(B, "class", "btn-primary svelte-1kqo0f9"), d(D, "class", "btn-ghost svelte-1kqo0f9"), d(C, "class", "idle-actions svelte-1kqo0f9"), d(n, "class", "idle-dialog svelte-1kqo0f9"), d(e, "class", "idle-overlay svelte-1kqo0f9"), d(e, "role", "dialog"), d(e, "aria-modal", "true"), d(e, "aria-labelledby", "idle-title");
          },
          m(_, g) {
            T(_, e, g), c(e, n), c(n, r), c(n, s), c(n, o), c(o, i), c(o, a), c(a, l), c(a, u), c(a, p), c(o, E), c(n, m), c(n, C), c(C, B), c(C, A), c(C, D), b || (v = [
              G(B, "click", t[13]),
              G(D, "click", t[14])
            ], b = true);
          },
          p(_, g) {
            g & 64 && x !== (x = Math.floor(_[6] / 60) + "") && V(l, x), g & 64 && f !== (f = String(_[6] % 60).padStart(2, "0") + "") && V(p, f);
          },
          d(_) {
            _ && S(e), b = false, ue(v);
          }
        };
      }
      function LB(t) {
        let e, n, r, s;
        const o = [
          IB,
          PB,
          TB
        ], i = [];
        function a(x, l) {
          return x[4] ? 0 : x[3] ? 2 : 1;
        }
        return e = a(t), n = i[e] = o[e](t), {
          c() {
            n.c(), r = Pt();
          },
          m(x, l) {
            i[e].m(x, l), T(x, r, l), s = true;
          },
          p(x, [l]) {
            let u = e;
            e = a(x), e === u ? i[e].p(x, l) : (B0(), Ae(i[u], 1, 1, () => {
              i[u] = null;
            }), g0(), n = i[e], n ? n.p(x, l) : (n = i[e] = o[e](x), n.c()), Ce(n, 1), n.m(r.parentNode, r));
          },
          i(x) {
            s || (Ce(n), s = true);
          },
          o(x) {
            Ae(n), s = false;
          },
          d(x) {
            x && S(r), i[e].d(x);
          }
        };
      }
      const Ql = 120;
      function MB(t, e, n) {
        let r, s, o;
        it(t, Ti, (g) => n(7, r = g)), it(t, ks, (g) => n(8, s = g)), it(t, jn, (g) => n(9, o = g));
        const i = {
          "/": l7,
          "/how-it-works": d7,
          "/login": V7,
          "/signup": X7,
          "/home": t2,
          "/encounter-exchange": AB,
          "/encounters": d2,
          "/encounters/:rawTokenHex": kB,
          "/relationships/:rawTokenHex": b2,
          "/groups/:tokenHex": aC,
          "/results": q2,
          "/change-password": j2,
          "/change-email": K2,
          "/verify-email/:token": eh,
          "/alerts": ah,
          "/settings": WC,
          "/settings/2fa-setup": ZC
        }, a = /* @__PURE__ */ new Set([
          "/",
          "/login",
          "/signup",
          "/home",
          "/encounter-exchange",
          "/how-it-works"
        ]);
        function x(g) {
          return ut() && !a.has(g) && !g.startsWith("/verify-email/");
        }
        let l = "/", u = false, f = false;
        async function p() {
          n(1, u = true);
          try {
            await Um(), n(2, f = true);
          } catch {
          } finally {
            n(1, u = false);
          }
        }
        let E = false, m = null, C = false, B = Ql, A = null;
        function D() {
          n(6, B = Ql), clearInterval(A), A = setInterval(() => {
            n(6, B -= 1), B <= 0 && clearInterval(A);
          }, 1e3);
        }
        function b() {
          n(5, C = false), clearInterval(A), i7();
        }
        async function v() {
          n(5, C = false), clearInterval(A), Ho(), await bi(), Ee("/login");
        }
        function _(g) {
          const F = g.detail.location;
          n(0, l = F), window.scrollTo(0, 0), !(F === "/" || F === "/login" || F.startsWith("/signup")) && ut() ? o7({
            onWarnCallback: () => {
              n(5, C = true), D();
            },
            onExpiredCallback: v
          }) : (Ho(), n(5, C = false), clearInterval(A));
        }
        return st(async () => {
          try {
            await Am(), n(3, E = true);
          } catch (g) {
            n(4, m = g.message);
          }
        }), [
          l,
          u,
          f,
          E,
          m,
          C,
          B,
          r,
          s,
          o,
          i,
          x,
          p,
          b,
          v,
          _
        ];
      }
      class OB extends Se {
        constructor(e) {
          super(), we(this, e, MB, LB, ke, {});
        }
      }
      function yr(t) {
        return t && t.replace(/[0-9a-f]{20,}/gi, "[token]");
      }
      q5({
        dsn: "https://ddad51f4bb310207d67dd5dd5f75fd40@o4511371060314112.ingest.us.sentry.io/4511371062345728",
        integrations: [
          R5()
        ],
        tracesSampleRate: 0.1,
        beforeSend(t) {
          t.request?.url && (t.request.url = yr(t.request.url));
          const e = t.breadcrumbs?.values;
          if (Array.isArray(e)) for (const n of e) n.data?.url && (n.data.url = yr(n.data.url)), n.data?.to && (n.data.to = yr(n.data.to)), n.data?.from && (n.data.from = yr(n.data.from));
          return t;
        }
      });
      new OB({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
