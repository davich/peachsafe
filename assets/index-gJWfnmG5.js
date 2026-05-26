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
        for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
        new MutationObserver((r) => {
          for (const o of r) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function n(r) {
          const o = {};
          return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function s(r) {
          if (r.ep) return;
          r.ep = true;
          const o = n(r);
          fetch(r.href, o);
        }
      })();
      const te = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, me = globalThis, In = "10.52.0";
      function On() {
        return Zr(me), me;
      }
      function Zr(t) {
        const e = t.__SENTRY__ = t.__SENTRY__ || {};
        return e.version = e.version || In, e[In] = e[In] || {};
      }
      function rs(t, e, n = me) {
        const s = n.__SENTRY__ = n.__SENTRY__ || {}, r = s[In] = s[In] || {};
        return r[t] || (r[t] = e());
      }
      const Fd = [
        "debug",
        "info",
        "warn",
        "error",
        "log",
        "assert",
        "trace"
      ], zd = "Sentry Logger ", Cr = {};
      function Mn(t) {
        if (!("console" in me)) return t();
        const e = me.console, n = {}, s = Object.keys(Cr);
        s.forEach((r) => {
          const o = Cr[r];
          n[r] = e[r], e[r] = o;
        });
        try {
          return t();
        } finally {
          s.forEach((r) => {
            e[r] = n[r];
          });
        }
      }
      function Ud() {
        vi().enabled = true;
      }
      function jd() {
        vi().enabled = false;
      }
      function gu() {
        return vi().enabled;
      }
      function Wd(...t) {
        bi("log", ...t);
      }
      function Gd(...t) {
        bi("warn", ...t);
      }
      function Vd(...t) {
        bi("error", ...t);
      }
      function bi(t, ...e) {
        te && gu() && Mn(() => {
          me.console[t](`${zd}[${t}]:`, ...e);
        });
      }
      function vi() {
        return te ? rs("loggerSettings", () => ({
          enabled: false
        })) : {
          enabled: false
        };
      }
      const X = {
        enable: Ud,
        disable: jd,
        isEnabled: gu,
        log: Wd,
        warn: Gd,
        error: Vd
      }, bu = 50, Rn = "?", aa = /\(error: (.*)\)/, la = /captureMessage|captureException/;
      function vu(...t) {
        const e = t.sort((n, s) => n[0] - s[0]).map((n) => n[1]);
        return (n, s = 0, r = 0) => {
          const o = [], i = n.split(`
`);
          for (let a = s; a < i.length; a++) {
            let l = i[a];
            l.length > 1024 && (l = l.slice(0, 1024));
            const f = aa.test(l) ? l.replace(aa, "$1") : l;
            if (!f.includes("Error: ")) {
              for (const d of e) {
                const m = d(f);
                if (m) {
                  o.push(m);
                  break;
                }
              }
              if (o.length >= bu + r) break;
            }
          }
          return Kd(o.slice(r));
        };
      }
      function Yd(t) {
        return Array.isArray(t) ? vu(...t) : t;
      }
      function Kd(t) {
        if (!t.length) return [];
        const e = Array.from(t);
        return /sentryWrapped/.test(or(e).function || "") && e.pop(), e.reverse(), la.test(or(e).function || "") && (e.pop(), la.test(or(e).function || "") && e.pop()), e.slice(0, bu).map((n) => ({
          ...n,
          filename: n.filename || or(e).filename,
          function: n.function || Rn
        }));
      }
      function or(t) {
        return t[t.length - 1] || {};
      }
      const bo = "<anonymous>";
      function Yt(t) {
        try {
          return !t || typeof t != "function" ? bo : t.name || bo;
        } catch {
          return bo;
        }
      }
      function ca(t) {
        const e = t.exception;
        if (e) {
          const n = [];
          try {
            return e.values.forEach((s) => {
              s.stacktrace.frames && n.push(...s.stacktrace.frames);
            }), n;
          } catch {
            return;
          }
        }
      }
      function yu(t) {
        return "__v_isVNode" in t && t.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
      }
      const ms = {}, ua = {};
      function pn(t, e) {
        return ms[t] = ms[t] || [], ms[t].push(e), () => {
          const n = ms[t];
          if (n) {
            const s = n.indexOf(e);
            s !== -1 && n.splice(s, 1);
          }
        };
      }
      function mn(t, e) {
        if (!ua[t]) {
          ua[t] = true;
          try {
            e();
          } catch (n) {
            te && X.error(`Error while instrumenting ${t}`, n);
          }
        }
      }
      function wt(t, e) {
        const n = t && ms[t];
        if (n) for (const s of n) try {
          s(e);
        } catch (r) {
          te && X.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Yt(s)}
Error:`, r);
        }
      }
      let vo = null;
      function wu(t) {
        const e = "error";
        pn(e, t), mn(e, Jd);
      }
      function Jd() {
        vo = me.onerror, me.onerror = function(t, e, n, s, r) {
          return wt("error", {
            column: s,
            error: r,
            line: n,
            msg: t,
            url: e
          }), vo ? vo.apply(this, arguments) : false;
        }, me.onerror.__SENTRY_INSTRUMENTED__ = true;
      }
      let yo = null;
      function ku(t) {
        const e = "unhandledrejection";
        pn(e, t), mn(e, Xd);
      }
      function Xd() {
        yo = me.onunhandledrejection, me.onunhandledrejection = function(t) {
          return wt("unhandledrejection", t), yo ? yo.apply(this, arguments) : true;
        }, me.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
      }
      const Su = Object.prototype.toString;
      function xr(t) {
        switch (Su.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
          case "[object WebAssembly.Exception]":
            return true;
          default:
            return Kt(t, Error);
        }
      }
      function os(t, e) {
        return Su.call(t) === `[object ${e}]`;
      }
      function Eu(t) {
        return os(t, "ErrorEvent");
      }
      function fa(t) {
        return os(t, "DOMError");
      }
      function Qd(t) {
        return os(t, "DOMException");
      }
      function Wt(t) {
        return os(t, "String");
      }
      function yi(t) {
        return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
      }
      function xn(t) {
        return t === null || yi(t) || typeof t != "object" && typeof t != "function";
      }
      function Ss(t) {
        return os(t, "Object");
      }
      function $r(t) {
        return typeof Event < "u" && Kt(t, Event);
      }
      function Zd(t) {
        return typeof Element < "u" && Kt(t, Element);
      }
      function xd(t) {
        return os(t, "RegExp");
      }
      function qs(t) {
        return !!(t?.then && typeof t.then == "function");
      }
      function $d(t) {
        return Ss(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
      }
      function Kt(t, e) {
        try {
          return t instanceof e;
        } catch {
          return false;
        }
      }
      function Tu(t) {
        return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue || t.__v_isVNode));
      }
      function wi(t) {
        return typeof Request < "u" && Kt(t, Request);
      }
      const ki = me, ep = 80;
      function Xe(t, e = {}) {
        if (!t) return "<unknown>";
        try {
          let n = t;
          const s = 5, r = [];
          let o = 0, i = 0;
          const a = " > ", l = a.length;
          let f;
          const d = Array.isArray(e) ? e : e.keyAttrs, m = !Array.isArray(e) && e.maxStringLength || ep;
          for (; n && o++ < s && (f = tp(n, d), !(f === "html" || o > 1 && i + r.length * l + f.length >= m)); ) r.push(f), i += f.length, n = n.parentNode;
          return r.reverse().join(a);
        } catch {
          return "<unknown>";
        }
      }
      function tp(t, e) {
        const n = t, s = [];
        if (!n?.tagName) return "";
        if (ki.HTMLElement && n instanceof HTMLElement && n.dataset) {
          if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
          if (n.dataset.sentryElement) return n.dataset.sentryElement;
        }
        s.push(n.tagName.toLowerCase());
        const r = e?.length ? e.filter((o) => n.getAttribute(o)).map((o) => [
          o,
          n.getAttribute(o)
        ]) : null;
        if (r?.length) r.forEach((o) => {
          s.push(`[${o[0]}="${o[1]}"]`);
        });
        else {
          n.id && s.push(`#${n.id}`);
          const o = n.className;
          if (o && Wt(o)) {
            const i = o.split(/\s+/);
            for (const a of i) s.push(`.${a}`);
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
          i && s.push(`[${o}="${i}"]`);
        }
        return s.join("");
      }
      function Hs() {
        try {
          return ki.document.location.href;
        } catch {
          return "";
        }
      }
      function Iu(t, e = 5) {
        if (!ki.HTMLElement) return null;
        let n = t;
        for (let s = 0; s < e; s++) {
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
        const s = t[e];
        if (typeof s != "function") return;
        const r = n(s);
        typeof r == "function" && Cu(r, s);
        try {
          t[e] = r;
        } catch {
          te && X.log(`Failed to replace method "${e}" in object`, t);
        }
      }
      function at(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: true,
            configurable: true
          });
        } catch {
          te && X.log(`Failed to add non-enumerable property "${String(e)}" to object`, t);
        }
      }
      function Cu(t, e) {
        try {
          const n = e.prototype || {};
          t.prototype = e.prototype = n, at(t, "__sentry_original__", e);
        } catch {
        }
      }
      function Si(t) {
        return t.__sentry_original__;
      }
      function Au(t) {
        if (xr(t)) return {
          message: t.message,
          name: t.name,
          stack: t.stack,
          ...pa(t)
        };
        if ($r(t)) {
          const e = {
            type: t.type,
            target: da(t.target),
            currentTarget: da(t.currentTarget),
            ...pa(t)
          };
          return typeof CustomEvent < "u" && Kt(t, CustomEvent) && (e.detail = t.detail), e;
        } else return t;
      }
      function da(t) {
        try {
          return Zd(t) ? Xe(t) : Object.prototype.toString.call(t);
        } catch {
          return "<unknown>";
        }
      }
      function pa(t) {
        return typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t)) : {};
      }
      function np(t) {
        const e = Object.keys(Au(t));
        return e.sort(), e[0] ? e.join(", ") : "[object has no keys]";
      }
      let zn;
      function Bs(t) {
        if (zn !== void 0) return zn ? zn(t) : t();
        const e = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"), n = me;
        return e in n && typeof n[e] == "function" ? (zn = n[e], zn(t)) : (zn = null, t());
      }
      function an() {
        return Bs(() => Math.random());
      }
      function Fs() {
        return Bs(() => Date.now());
      }
      function zo(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`;
      }
      function ma(t, e) {
        if (!Array.isArray(t)) return "";
        const n = [];
        for (let s = 0; s < t.length; s++) {
          const r = t[s];
          try {
            Tu(r) ? n.push(yu(r)) : n.push(String(r));
          } catch {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function _s(t, e, n = false) {
        return Wt(t) ? xd(e) ? e.test(t) : Wt(e) ? n ? t === e : t.includes(e) : typeof e == "function" ? e(t) : false : false;
      }
      function ln(t, e = [], n = false) {
        return e.some((s) => _s(t, s, n));
      }
      function sp() {
        const t = me;
        return t.crypto || t.msCrypto;
      }
      let wo;
      function rp() {
        return an() * 16;
      }
      function kt(t = sp()) {
        try {
          if (t?.randomUUID) return Bs(() => t.randomUUID()).replace(/-/g, "");
        } catch {
        }
        return wo || (wo = "10000000100040008000" + 1e11), wo.replace(/[018]/g, (e) => (e ^ (rp() & 15) >> e / 4).toString(16));
      }
      function Ru(t) {
        return t.exception?.values?.[0];
      }
      function kn(t) {
        const { message: e, event_id: n } = t;
        if (e) return e;
        const s = Ru(t);
        return s ? s.type && s.value ? `${s.type}: ${s.value}` : s.type || s.value || n || "<unknown>" : n || "<unknown>";
      }
      function Uo(t, e, n) {
        const s = t.exception = t.exception || {}, r = s.values = s.values || [], o = r[0] = r[0] || {};
        o.value || (o.value = e || ""), o.type || (o.type = "Error");
      }
      function $n(t, e) {
        const n = Ru(t);
        if (!n) return;
        const s = {
          type: "generic",
          handled: true
        }, r = n.mechanism;
        if (n.mechanism = {
          ...s,
          ...r,
          ...e
        }, e && "data" in e) {
          const o = {
            ...r?.data,
            ...e.data
          };
          n.mechanism.data = o;
        }
      }
      function _a(t) {
        if (op(t)) return true;
        try {
          at(t, "__sentry_captured__", true);
        } catch {
        }
        return false;
      }
      function op(t) {
        try {
          return t.__sentry_captured__;
        } catch {
        }
      }
      const Nu = 1e3;
      function qn() {
        return Fs() / Nu;
      }
      function ip() {
        const { performance: t } = me;
        if (!t?.now || !t.timeOrigin) return qn;
        const e = t.timeOrigin;
        return () => (e + Bs(() => t.now())) / Nu;
      }
      let ha;
      function We() {
        return (ha ?? (ha = ip()))();
      }
      let ko = null;
      function ap() {
        const { performance: t } = me;
        if (!t?.now) return;
        const e = 3e5, n = Bs(() => t.now()), s = Fs(), r = t.timeOrigin;
        if (typeof r == "number" && Math.abs(r + n - s) < e) return r;
        const o = t.timing?.navigationStart;
        return typeof o == "number" && Math.abs(o + n - s) < e ? o : s - n;
      }
      function $e() {
        return ko === null && (ko = ap()), ko;
      }
      function lp(t) {
        const e = We(), n = {
          sid: kt(),
          init: true,
          timestamp: e,
          started: e,
          duration: 0,
          status: "ok",
          errors: 0,
          ignoreDuration: false,
          toJSON: () => up(n)
        };
        return t && es(n, t), n;
      }
      function es(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || We(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : kt()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
          const n = t.timestamp - t.started;
          t.duration = n >= 0 ? n : 0;
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status);
      }
      function cp(t, e) {
        let n = {};
        t.status === "ok" && (n = {
          status: "exited"
        }), es(t, n);
      }
      function up(t) {
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
      function zs(t, e, n = 2) {
        if (!e || typeof e != "object" || n <= 0) return e;
        if (t && Object.keys(e).length === 0) return t;
        const s = {
          ...t
        };
        for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (s[r] = zs(s[r], e[r], n - 1));
        return s;
      }
      function Jt() {
        return kt();
      }
      function Gt() {
        return kt().substring(16);
      }
      const jo = "_sentrySpan";
      function Es(t, e) {
        e ? at(t, jo, e) : delete t[jo];
      }
      function Ar(t) {
        return t[jo];
      }
      const fp = 100;
      class Xt {
        constructor() {
          this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
            traceId: Jt(),
            sampleRand: an()
          };
        }
        clone() {
          const e = new Xt();
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
          }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, Es(e, Ar(this)), e;
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
          }, this._session && es(this._session, {
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
          const n = typeof e == "function" ? e(this) : e, s = n instanceof Xt ? n.getScopeData() : Ss(n) ? e : void 0, { tags: r, attributes: o, extra: i, user: a, contexts: l, level: f, fingerprint: d = [], propagationContext: m, conversationId: h } = s || {};
          return this._tags = {
            ...this._tags,
            ...r
          }, this._attributes = {
            ...this._attributes,
            ...o
          }, this._extra = {
            ...this._extra,
            ...i
          }, this._contexts = {
            ...this._contexts,
            ...l
          }, a && Object.keys(a).length && (this._user = a), f && (this._level = f), d.length && (this._fingerprint = d), m && (this._propagationContext = m), h && (this._conversationId = h), this;
        }
        clear() {
          return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, Es(this, void 0), this._attachments = [], this.setPropagationContext({
            traceId: Jt(),
            sampleRand: an()
          }), this._notifyScopeListeners(), this;
        }
        addBreadcrumb(e, n) {
          const s = typeof n == "number" ? n : fp;
          if (s <= 0) return this;
          const r = {
            timestamp: qn(),
            ...e,
            message: e.message ? zo(e.message, 2048) : e.message
          };
          return this._breadcrumbs.push(r), this._breadcrumbs.length > s && (this._breadcrumbs = this._breadcrumbs.slice(-s), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
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
            span: Ar(this),
            conversationId: this._conversationId
          };
        }
        setSDKProcessingMetadata(e) {
          return this._sdkProcessingMetadata = zs(this._sdkProcessingMetadata, e, 2), this;
        }
        setPropagationContext(e) {
          return this._propagationContext = e, this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(e, n) {
          const s = n?.event_id || kt();
          if (!this._client) return te && X.warn("No client configured on scope - will not capture exception!"), s;
          const r = new Error("Sentry syntheticException");
          return this._client.captureException(e, {
            originalException: e,
            syntheticException: r,
            ...n,
            event_id: s
          }, this), s;
        }
        captureMessage(e, n, s) {
          const r = s?.event_id || kt();
          if (!this._client) return te && X.warn("No client configured on scope - will not capture message!"), r;
          const o = s?.syntheticException ?? new Error(e);
          return this._client.captureMessage(e, n, {
            originalException: e,
            syntheticException: o,
            ...s,
            event_id: r
          }, this), r;
        }
        captureEvent(e, n) {
          const s = e.event_id || n?.event_id || kt();
          return this._client ? (this._client.captureEvent(e, {
            ...n,
            event_id: s
          }, this), s) : (te && X.warn("No client configured on scope - will not capture event!"), s);
        }
        _notifyScopeListeners() {
          this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach((e) => {
            e(this);
          }), this._notifyingListeners = false);
        }
      }
      function dp() {
        return rs("defaultCurrentScope", () => new Xt());
      }
      function pp() {
        return rs("defaultIsolationScope", () => new Xt());
      }
      const ga = (t) => t instanceof Promise && !t[Lu], Lu = Symbol("chained PromiseLike"), mp = (t, e, n) => {
        const s = t.then((r) => (e(r), r), (r) => {
          throw n(r), r;
        });
        return ga(s) && ga(t) ? s : _p(t, s);
      }, _p = (t, e) => {
        if (!e) return t;
        let n = false;
        for (const s in t) {
          if (s in e) continue;
          n = true;
          const r = t[s];
          typeof r == "function" ? Object.defineProperty(e, s, {
            value: (...o) => r.apply(t, o),
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[s] = r;
        }
        return n && Object.assign(e, {
          [Lu]: true
        }), e;
      };
      class hp {
        constructor(e, n) {
          let s;
          e ? s = e : s = new Xt();
          let r;
          n ? r = n : r = new Xt(), this._stack = [
            {
              scope: s
            }
          ], this._isolationScope = r;
        }
        withScope(e) {
          const n = this._pushScope();
          let s;
          try {
            s = e(n);
          } catch (r) {
            throw this._popScope(), r;
          }
          return qs(s) ? mp(s, () => this._popScope(), () => this._popScope()) : (this._popScope(), s);
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
      function ts() {
        const t = On(), e = Zr(t);
        return e.stack = e.stack || new hp(dp(), pp());
      }
      function gp(t) {
        return ts().withScope(t);
      }
      function bp(t, e) {
        const n = ts();
        return n.withScope(() => (n.getStackTop().scope = t, e(t)));
      }
      function ba(t) {
        return ts().withScope(() => t(ts().getIsolationScope()));
      }
      function vp() {
        return {
          withIsolationScope: ba,
          withScope: gp,
          withSetScope: bp,
          withSetIsolationScope: (t, e) => ba(e),
          getCurrentScope: () => ts().getScope(),
          getIsolationScope: () => ts().getIsolationScope()
        };
      }
      function is(t) {
        const e = Zr(t);
        return e.acs ? e.acs : vp();
      }
      function ke() {
        const t = On();
        return is(t).getCurrentScope();
      }
      function Zt() {
        const t = On();
        return is(t).getIsolationScope();
      }
      function yp() {
        return rs("globalScope", () => new Xt());
      }
      function Ei(...t) {
        const e = On(), n = is(e);
        if (t.length === 2) {
          const [s, r] = t;
          return s ? n.withSetScope(s, r) : n.withScope(r);
        }
        return n.withScope(t[0]);
      }
      function ge() {
        return ke().getClient();
      }
      function wp(t) {
        const e = t.getPropagationContext(), { traceId: n, parentSpanId: s, propagationSpanId: r } = e, o = {
          trace_id: n,
          span_id: r || Gt()
        };
        return s && (o.parent_span_id = s), o;
      }
      const Ut = "sentry.source", Ti = "sentry.sample_rate", Pu = "sentry.previous_trace_sample_rate", Rt = "sentry.op", Ge = "sentry.origin", Ts = "sentry.idle_span_finish_reason", Us = "sentry.measurement_unit", js = "sentry.measurement_value", va = "sentry.custom_span_name", Ii = "sentry.profile_id", _n = "sentry.exclusive_time", kp = "sentry.link.type", Sp = "gen_ai.conversation.id", Du = 0, eo = 1, Ye = 2;
      function Ep(t) {
        if (t < 400 && t >= 100) return {
          code: eo
        };
        if (t >= 400 && t < 500) switch (t) {
          case 401:
            return {
              code: Ye,
              message: "unauthenticated"
            };
          case 403:
            return {
              code: Ye,
              message: "permission_denied"
            };
          case 404:
            return {
              code: Ye,
              message: "not_found"
            };
          case 409:
            return {
              code: Ye,
              message: "already_exists"
            };
          case 413:
            return {
              code: Ye,
              message: "failed_precondition"
            };
          case 429:
            return {
              code: Ye,
              message: "resource_exhausted"
            };
          case 499:
            return {
              code: Ye,
              message: "cancelled"
            };
          default:
            return {
              code: Ye,
              message: "invalid_argument"
            };
        }
        if (t >= 500 && t < 600) switch (t) {
          case 501:
            return {
              code: Ye,
              message: "unimplemented"
            };
          case 503:
            return {
              code: Ye,
              message: "unavailable"
            };
          case 504:
            return {
              code: Ye,
              message: "deadline_exceeded"
            };
          default:
            return {
              code: Ye,
              message: "internal_error"
            };
        }
        return {
          code: Ye,
          message: "internal_error"
        };
      }
      function Ou(t, e) {
        t.setAttribute("http.response.status_code", e);
        const n = Ep(e);
        n.message !== "unknown_error" && t.setStatus(n);
      }
      function Tp(t) {
        try {
          const e = me.WeakRef;
          if (typeof e == "function") return new e(t);
        } catch {
        }
        return t;
      }
      function Ip(t) {
        if (t) {
          if (typeof t == "object" && "deref" in t && typeof t.deref == "function") try {
            return t.deref();
          } catch {
            return;
          }
          return t;
        }
      }
      const Mu = "_sentryScope", qu = "_sentryIsolationScope";
      function Cp(t, e, n) {
        t && (at(t, qu, Tp(n)), at(t, Mu, e));
      }
      function Rr(t) {
        const e = t;
        return {
          scope: e[Mu],
          isolationScope: Ip(e[qu])
        };
      }
      const Nr = "sentry-", Ap = 8192;
      function Hu(t) {
        const e = Np(t);
        if (!e) return;
        const n = Object.entries(e).reduce((s, [r, o]) => {
          if (r.startsWith(Nr)) {
            const i = r.slice(Nr.length);
            s[i] = o;
          }
          return s;
        }, {});
        if (Object.keys(n).length > 0) return n;
      }
      function Rp(t) {
        if (!t) return;
        const e = Object.entries(t).reduce((n, [s, r]) => (r && (n[`${Nr}${s}`] = r), n), {});
        return Lp(e);
      }
      function Np(t) {
        if (!(!t || !Wt(t) && !Array.isArray(t))) return Array.isArray(t) ? t.reduce((e, n) => {
          const s = ya(n);
          return Object.entries(s).forEach(([r, o]) => {
            e[r] = o;
          }), e;
        }, {}) : ya(t);
      }
      function ya(t) {
        return t.split(",").map((e) => {
          const n = e.indexOf("=");
          if (n === -1) return [];
          const s = e.slice(0, n), r = e.slice(n + 1);
          return [
            s,
            r
          ].map((o) => {
            try {
              return decodeURIComponent(o.trim());
            } catch {
              return;
            }
          });
        }).reduce((e, [n, s]) => (n && s && (e[n] = s), e), {});
      }
      function Lp(t) {
        if (Object.keys(t).length !== 0) return Object.entries(t).reduce((e, [n, s], r) => {
          const o = `${encodeURIComponent(n)}=${encodeURIComponent(s)}`, i = r === 0 ? o : `${e},${o}`;
          return i.length > Ap ? (te && X.warn(`Not adding key: ${n} with val: ${s} to baggage header due to exceeding baggage size limits.`), e) : i;
        }, "");
      }
      const Pp = /^o(\d+)\./, Dp = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
      function Op(t) {
        return t === "http" || t === "https";
      }
      function as(t, e = false) {
        const { host: n, path: s, pass: r, port: o, projectId: i, protocol: a, publicKey: l } = t;
        return `${a}://${l}${e && r ? `:${r}` : ""}@${n}${o ? `:${o}` : ""}/${s && `${s}/`}${i}`;
      }
      function Mp(t) {
        const e = Dp.exec(t);
        if (!e) {
          Mn(() => {
            console.error(`Invalid Sentry Dsn: ${t}`);
          });
          return;
        }
        const [n, s, r = "", o = "", i = "", a = ""] = e.slice(1);
        let l = "", f = a;
        const d = f.split("/");
        if (d.length > 1 && (l = d.slice(0, -1).join("/"), f = d.pop()), f) {
          const m = f.match(/^\d+/);
          m && (f = m[0]);
        }
        return Bu({
          host: o,
          pass: r,
          path: l,
          projectId: f,
          port: i,
          protocol: n,
          publicKey: s
        });
      }
      function Bu(t) {
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
      function qp(t) {
        if (!te) return true;
        const { port: e, projectId: n, protocol: s } = t;
        return [
          "protocol",
          "publicKey",
          "host",
          "projectId"
        ].find((i) => t[i] ? false : (X.error(`Invalid Sentry Dsn: ${i} missing`), true)) ? false : n.match(/^\d+$/) ? Op(s) ? e && isNaN(parseInt(e, 10)) ? (X.error(`Invalid Sentry Dsn: Invalid port ${e}`), false) : true : (X.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), false) : (X.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), false);
      }
      function Hp(t) {
        return t.match(Pp)?.[1];
      }
      function Bp(t) {
        const e = t.getOptions(), { host: n } = t.getDsn() || {};
        let s;
        return e.orgId ? s = String(e.orgId) : n && (s = Hp(n)), s;
      }
      function Fp(t) {
        const e = typeof t == "string" ? Mp(t) : Bu(t);
        if (!(!e || !qp(e))) return e;
      }
      function Is(t) {
        if (typeof t == "boolean") return Number(t);
        const e = typeof t == "string" ? parseFloat(t) : t;
        if (!(typeof e != "number" || isNaN(e) || e < 0 || e > 1)) return e;
      }
      const Fu = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
      function zp(t) {
        if (!t) return;
        const e = t.match(Fu);
        if (!e) return;
        let n;
        return e[3] === "1" ? n = true : e[3] === "0" && (n = false), {
          traceId: e[1],
          parentSampled: n,
          parentSpanId: e[2]
        };
      }
      function Up(t, e) {
        const n = zp(t), s = Hu(e);
        if (!n?.traceId) return {
          traceId: Jt(),
          sampleRand: an()
        };
        const r = jp(n, s);
        s && (s.sample_rand = r.toString());
        const { traceId: o, parentSpanId: i, parentSampled: a } = n;
        return {
          traceId: o,
          parentSpanId: i,
          sampled: a,
          dsc: s || {},
          sampleRand: r
        };
      }
      function zu(t = Jt(), e = Gt(), n) {
        let s = "";
        return n !== void 0 && (s = n ? "-1" : "-0"), `${t}-${e}${s}`;
      }
      function Uu(t = Jt(), e = Gt(), n) {
        return `00-${t}-${e}-${n ? "01" : "00"}`;
      }
      function jp(t, e) {
        const n = Is(e?.sample_rand);
        if (n !== void 0) return n;
        const s = Is(e?.sample_rate);
        return s && t?.parentSampled !== void 0 ? t.parentSampled ? an() * s : s + an() * (1 - s) : an();
      }
      const ju = 0, to = 1;
      let wa = false;
      function Wp(t) {
        const { spanId: e, traceId: n } = t.spanContext(), { data: s, op: r, parent_span_id: o, status: i, origin: a, links: l } = ve(t);
        return {
          parent_span_id: o,
          span_id: e,
          trace_id: n,
          data: s,
          op: r,
          status: i,
          origin: a,
          links: l
        };
      }
      function Gp(t) {
        const { spanId: e, traceId: n, isRemote: s } = t.spanContext(), r = s ? e : ve(t).parent_span_id, o = Rr(t).scope, i = s ? o?.getPropagationContext().propagationSpanId || Gt() : e;
        return {
          parent_span_id: r,
          span_id: i,
          trace_id: n
        };
      }
      function Vp(t) {
        const { traceId: e, spanId: n } = t.spanContext(), s = hn(t);
        return zu(e, n, s);
      }
      function Yp(t) {
        const { traceId: e, spanId: n } = t.spanContext(), s = hn(t);
        return Uu(e, n, s);
      }
      function Wu(t) {
        if (t && t.length > 0) return t.map(({ context: { spanId: e, traceId: n, traceFlags: s, ...r }, attributes: o }) => ({
          span_id: e,
          trace_id: n,
          sampled: s === to,
          attributes: o,
          ...r
        }));
      }
      function Gu(t) {
        if (t?.length) return t.map(({ context: { spanId: e, traceId: n, traceFlags: s }, attributes: r }) => ({
          span_id: e,
          trace_id: n,
          sampled: s === to,
          attributes: r
        }));
      }
      function Vt(t) {
        return typeof t == "number" ? ka(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? ka(t.getTime()) : We();
      }
      function ka(t) {
        return t > 9999999999 ? t / 1e3 : t;
      }
      function ve(t) {
        if (Ju(t)) return t.getSpanJSON();
        const { spanId: e, traceId: n } = t.spanContext();
        if (Ku(t)) {
          const { attributes: s, startTime: r, name: o, endTime: i, status: a, links: l } = t;
          return {
            span_id: e,
            trace_id: n,
            data: s,
            description: o,
            parent_span_id: Yu(t),
            start_timestamp: Vt(r),
            timestamp: Vt(i) || void 0,
            status: Xu(a),
            op: s[Rt],
            origin: s[Ge],
            links: Wu(l)
          };
        }
        return {
          span_id: e,
          trace_id: n,
          start_timestamp: 0,
          data: {}
        };
      }
      function Vu(t) {
        if (Ju(t)) return t.getStreamedSpanJSON();
        const { spanId: e, traceId: n } = t.spanContext();
        if (Ku(t)) {
          const { attributes: s, startTime: r, name: o, endTime: i, status: a, links: l } = t;
          return {
            name: o,
            span_id: e,
            trace_id: n,
            parent_span_id: Yu(t),
            start_timestamp: Vt(r),
            end_timestamp: Vt(i),
            is_segment: t === Go(t),
            status: Qu(a),
            attributes: s,
            links: Gu(l)
          };
        }
        return {
          span_id: e,
          trace_id: n,
          start_timestamp: 0,
          name: "",
          end_timestamp: 0,
          status: "ok",
          is_segment: t === Go(t)
        };
      }
      function Yu(t) {
        return "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? t.parentSpanContext?.spanId : void 0;
      }
      function Ku(t) {
        const e = t;
        return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
      }
      function Ju(t) {
        return typeof t.getSpanJSON == "function";
      }
      function hn(t) {
        const { traceFlags: e } = t.spanContext();
        return e === to;
      }
      function Xu(t) {
        if (!(!t || t.code === Du)) return t.code === eo ? "ok" : t.message || "internal_error";
      }
      function Qu(t) {
        return !t || t.code === eo || t.code === Du || t.message === "cancelled" ? "ok" : "error";
      }
      const Cn = "_sentryChildSpans", Wo = "_sentryRootSpan";
      function Zu(t, e) {
        const n = t[Wo] || t;
        at(e, Wo, n), t[Cn] ? t[Cn].add(e) : at(t, Cn, /* @__PURE__ */ new Set([
          e
        ]));
      }
      function Kp(t, e) {
        t[Cn] && t[Cn].delete(e);
      }
      function _r(t) {
        const e = /* @__PURE__ */ new Set();
        function n(s) {
          if (!e.has(s) && hn(s)) {
            e.add(s);
            const r = s[Cn] ? Array.from(s[Cn]) : [];
            for (const o of r) n(o);
          }
        }
        return n(t), Array.from(e);
      }
      const Ze = Go;
      function Go(t) {
        return t[Wo] || t;
      }
      function _t() {
        const t = On(), e = is(t);
        return e.getActiveSpan ? e.getActiveSpan() : Ar(ke());
      }
      function Vo() {
        wa || (Mn(() => {
          console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
        }), wa = true);
      }
      let Sa = false;
      function Jp() {
        if (Sa) return;
        function t() {
          const e = _t(), n = e && Ze(e);
          if (n) {
            const s = "internal_error";
            te && X.log(`[Tracing] Root span: ${s} -> Global error occurred`), n.setStatus({
              code: Ye,
              message: s
            });
          }
        }
        t.tag = "sentry_tracingErrorCallback", Sa = true, wu(t), ku(t);
      }
      function At(t) {
        if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return false;
        const e = t || ge()?.getOptions();
        return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
      }
      function Ea(t) {
        X.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
      }
      function Cs(t, e) {
        if (!e?.length) return false;
        for (const n of e) {
          if (Zp(n)) {
            if (t.description && _s(t.description, n)) return te && Ea(t), true;
            continue;
          }
          const s = !!n.attributes && Object.keys(n.attributes).length > 0;
          if (!n.name && !n.op && !s) continue;
          const r = n.name ? t.description && _s(t.description, n.name) : true, o = n.op ? t.op && _s(t.op, n.op) : true, i = n.attributes ? Object.entries(n.attributes).every(([a, l]) => Xp(t.attributes?.[a], l)) : true;
          if (r && o && i) return te && Ea(t), true;
        }
        return false;
      }
      function Xp(t, e) {
        return typeof t == "string" && (typeof e == "string" || e instanceof RegExp) ? _s(t, e) : Array.isArray(t) && Array.isArray(e) ? t.length === e.length && t.every((n, s) => n === e[s]) : t === e;
      }
      function Qp(t, e) {
        const n = e.parent_span_id, s = e.span_id;
        if (n) for (const r of t) r.parent_span_id === s && (r.parent_span_id = n);
      }
      function Zp(t) {
        return typeof t == "string" || t instanceof RegExp;
      }
      const Ci = "production", xu = "_frozenDsc";
      function hr(t, e) {
        at(t, xu, e);
      }
      function $u(t, e) {
        const n = e.getOptions(), { publicKey: s } = e.getDsn() || {}, r = {
          environment: n.environment || Ci,
          release: n.release,
          public_key: s,
          trace_id: t,
          org_id: Bp(e)
        };
        return e.emit("createDsc", r), r;
      }
      function ef(t, e) {
        const n = e.getPropagationContext();
        return n.dsc || $u(n.traceId, t);
      }
      function fn(t) {
        const e = ge();
        if (!e) return {};
        const n = Ze(t), s = ve(n), r = s.data, o = n.spanContext().traceState, i = o?.get("sentry.sample_rate") ?? r[Ti] ?? r[Pu];
        function a(g) {
          return (typeof i == "number" || typeof i == "string") && (g.sample_rate = `${i}`), g;
        }
        const l = n[xu];
        if (l) return a(l);
        const f = o?.get("sentry.dsc"), d = f && Hu(f);
        if (d) return a(d);
        const m = $u(t.spanContext().traceId, e), h = r[Ut] ?? r["sentry.span.source"], _ = s.description;
        return h !== "url" && _ && (m.transaction = _), At() && (m.sampled = String(hn(n)), m.sample_rand = o?.get("sentry.sample_rand") ?? Rr(n).scope?.getPropagationContext().sampleRand.toString()), a(m), e.emit("createDsc", m, n), m;
      }
      class qt {
        constructor(e = {}) {
          this._traceId = e.traceId || Jt(), this._spanId = e.spanId || Gt(), this.dropReason = e.dropReason;
        }
        spanContext() {
          return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: ju
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
        addEvent(e, n, s) {
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
      function tf(t) {
        return !!t && typeof t == "function" && "_streamed" in t && !!t._streamed;
      }
      const xp = Symbol.for("sentry.skipNormalization"), $p = Symbol.for("sentry.overrideNormalizationDepth");
      function em(t) {
        return !!t[xp];
      }
      function tm(t) {
        const e = t[$p];
        return typeof e == "number" ? e : void 0;
      }
      function zt(t, e = 100, n = 1 / 0) {
        try {
          return Yo("", t, e, n);
        } catch (s) {
          return {
            ERROR: `**non-serializable** (${s})`
          };
        }
      }
      function nf(t, e = 3, n = 100 * 1024) {
        const s = zt(t, e);
        return om(s) > n ? nf(t, e - 1, n) : s;
      }
      function Yo(t, e, n = 1 / 0, s = 1 / 0, r = im()) {
        const [o, i] = r;
        if (e == null || [
          "boolean",
          "string"
        ].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
        const a = nm(t, e);
        if (!a.startsWith("[object ")) return a;
        if (em(e)) return e;
        const l = tm(e), f = l !== void 0 ? l : n;
        if (f === 0) return a.replace("object ", "");
        if (o(e)) return "[Circular ~]";
        const d = e;
        if (d && typeof d.toJSON == "function") try {
          const g = d.toJSON();
          return Yo("", g, f - 1, s, r);
        } catch {
        }
        const m = Array.isArray(e) ? [] : {};
        let h = 0;
        const _ = Au(e);
        for (const g in _) {
          if (!Object.prototype.hasOwnProperty.call(_, g)) continue;
          if (h >= s) {
            m[g] = "[MaxProperties ~]";
            break;
          }
          const b = _[g];
          m[g] = Yo(g, b, f - 1, s, r), h++;
        }
        return i(e), m;
      }
      function nm(t, e) {
        try {
          if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
          if (t === "domainEmitter") return "[DomainEmitter]";
          if (typeof global < "u" && e === global) return "[Global]";
          if (typeof window < "u" && e === window) return "[Window]";
          if (typeof document < "u" && e === document) return "[Document]";
          if (Tu(e)) return yu(e);
          if ($d(e)) return "[SyntheticEvent]";
          if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
          if (typeof e == "function") return `[Function: ${Yt(e)}]`;
          if (typeof e == "symbol") return `[${String(e)}]`;
          if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
          const n = sm(e);
          return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
        } catch (n) {
          return `**non-serializable** (${n})`;
        }
      }
      function sm(t) {
        const e = Object.getPrototypeOf(t);
        return e?.constructor ? e.constructor.name : "null prototype";
      }
      function rm(t) {
        return ~-encodeURI(t).split(/%..|./).length;
      }
      function om(t) {
        return rm(JSON.stringify(t));
      }
      function im() {
        const t = /* @__PURE__ */ new WeakSet();
        function e(s) {
          return t.has(s) ? true : (t.add(s), false);
        }
        function n(s) {
          t.delete(s);
        }
        return [
          e,
          n
        ];
      }
      function Hn(t, e = []) {
        return [
          t,
          e
        ];
      }
      function am(t, e) {
        const [n, s] = t;
        return [
          n,
          [
            ...s,
            e
          ]
        ];
      }
      function Ko(t, e) {
        const n = t[1];
        for (const s of n) {
          const r = s[0].type;
          if (e(s, r)) return true;
        }
        return false;
      }
      function lm(t, e) {
        return Ko(t, (n, s) => e.includes(s));
      }
      function Jo(t) {
        const e = Zr(me);
        return e.encodePolyfill ? e.encodePolyfill(t) : new TextEncoder().encode(t);
      }
      function cm(t) {
        const [e, n] = t;
        let s = JSON.stringify(e);
        function r(o) {
          typeof s == "string" ? s = typeof o == "string" ? s + o : [
            Jo(s),
            o
          ] : s.push(typeof o == "string" ? Jo(o) : o);
        }
        for (const o of n) {
          const [i, a] = o;
          if (r(`
${JSON.stringify(i)}
`), typeof a == "string" || a instanceof Uint8Array) r(a);
          else {
            let l;
            try {
              l = JSON.stringify(a);
            } catch {
              l = JSON.stringify(zt(a));
            }
            r(l);
          }
        }
        return typeof s == "string" ? s : um(s);
      }
      function um(t) {
        const e = t.reduce((r, o) => r + o.length, 0), n = new Uint8Array(e);
        let s = 0;
        for (const r of t) n.set(r, s), s += r.length;
        return n;
      }
      function fm(t) {
        return [
          {
            type: "span"
          },
          t
        ];
      }
      function dm(t) {
        const e = typeof t.data == "string" ? Jo(t.data) : t.data;
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
      const sf = {
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
      function pm(t) {
        return t in sf;
      }
      function Ta(t) {
        return pm(t) ? sf[t] : t;
      }
      function rf(t) {
        if (!t?.sdk) return;
        const { name: e, version: n } = t.sdk;
        return {
          name: e,
          version: n
        };
      }
      function mm(t, e, n, s) {
        const r = t.sdkProcessingMetadata?.dynamicSamplingContext;
        return {
          event_id: t.event_id,
          sent_at: (/* @__PURE__ */ new Date()).toISOString(),
          ...e && {
            sdk: e
          },
          ...!!n && s && {
            dsn: as(s)
          },
          ...r && {
            trace: r
          }
        };
      }
      function _m(t, e) {
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
      function hm(t, e, n, s) {
        const r = rf(n), o = {
          sent_at: (/* @__PURE__ */ new Date()).toISOString(),
          ...r && {
            sdk: r
          },
          ...!!s && e && {
            dsn: as(e)
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
        return Hn(o, [
          i
        ]);
      }
      function gm(t, e, n, s) {
        const r = rf(n), o = t.type && t.type !== "replay_event" ? t.type : "event";
        _m(t, n?.sdk);
        const i = mm(t, r, s, e);
        return delete t.sdkProcessingMetadata, Hn(i, [
          [
            {
              type: o
            },
            t
          ]
        ]);
      }
      function bm(t, e) {
        function n(_) {
          return !!_.trace_id && !!_.public_key;
        }
        const s = fn(t[0]), r = e?.getDsn(), o = e?.getOptions().tunnel, i = {
          sent_at: (/* @__PURE__ */ new Date()).toISOString(),
          ...n(s) && {
            trace: s
          },
          ...!!o && r && {
            dsn: as(r)
          }
        }, { beforeSendSpan: a, ignoreSpans: l } = e?.getOptions() || {}, f = l?.length ? t.filter((_) => {
          const g = ve(_);
          return !Cs({
            description: g.description,
            op: g.op,
            attributes: g.data
          }, l);
        }) : t, d = t.length - f.length;
        d && e?.recordDroppedEvent("before_send", "span", d);
        const m = a ? (_) => {
          const g = ve(_), b = tf(a) ? g : a(g);
          return b || (Vo(), g);
        } : ve, h = [];
        for (const _ of f) {
          const g = m(_);
          g && h.push(fm(g));
        }
        return Hn(i, h);
      }
      function vm(t) {
        if (!te) return;
        const { description: e = "< unknown name >", op: n = "< unknown op >", parent_span_id: s } = ve(t), { spanId: r } = t.spanContext(), o = hn(t), i = Ze(t), a = i === t, l = `[Tracing] Starting ${o ? "sampled" : "unsampled"} ${a ? "root " : ""}span`, f = [
          `op: ${n}`,
          `name: ${e}`,
          `ID: ${r}`
        ];
        if (s && f.push(`parent ID: ${s}`), !a) {
          const { op: d, description: m } = ve(i);
          f.push(`root ID: ${i.spanContext().spanId}`), d && f.push(`root op: ${d}`), m && f.push(`root description: ${m}`);
        }
        X.log(`${l}
  ${f.join(`
  `)}`);
      }
      function ym(t) {
        if (!te) return;
        const { description: e = "< unknown name >", op: n = "< unknown op >" } = ve(t), { spanId: s } = t.spanContext(), o = Ze(t) === t, i = `[Tracing] Finishing "${n}" ${o ? "root " : ""}span "${e}" with ID ${s}`;
        X.log(i);
      }
      function wm(t, e, n, s = _t()) {
        const r = s && Ze(s);
        r && (te && X.log(`[Measurement] Setting measurement on root span: ${t} = ${e} ${n}`), r.addEvent(t, {
          [js]: e,
          [Us]: n
        }));
      }
      function Ia(t) {
        if (!t || t.length === 0) return;
        const e = {};
        return t.forEach((n) => {
          const s = n.attributes || {}, r = s[Us], o = s[js];
          typeof r == "string" && typeof o == "number" && (e[n.name] = {
            value: o,
            unit: r
          });
        }), e;
      }
      function Qt(t) {
        return t.getOptions().traceLifecycle === "stream";
      }
      const Ca = 1e3;
      class no {
        constructor(e = {}) {
          this._traceId = e.traceId || Jt(), this._spanId = e.spanId || Gt(), this._startTime = e.startTimestamp || We(), this._links = e.links, this._attributes = {}, this.setAttributes({
            [Ge]: "manual",
            [Rt]: e.op,
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
          const { _spanId: e, _traceId: n, _sampled: s } = this;
          return {
            spanId: e,
            traceId: n,
            traceFlags: s ? to : ju
          };
        }
        setAttribute(e, n) {
          return n === void 0 ? delete this._attributes[e] : this._attributes[e] = n, this;
        }
        setAttributes(e) {
          return Object.keys(e).forEach((n) => this.setAttribute(n, e[n])), this;
        }
        updateStartTime(e) {
          this._startTime = Vt(e);
        }
        setStatus(e) {
          return this._status = e, this;
        }
        updateName(e) {
          return this._name = e, this.setAttribute(Ut, "custom"), this;
        }
        end(e) {
          this._endTime || (this._endTime = Vt(e), ym(this), this._onSpanEnded());
        }
        getSpanJSON() {
          return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[Rt],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: Xu(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[Ge],
            profile_id: this._attributes[Ii],
            exclusive_time: this._attributes[_n],
            measurements: Ia(this._events),
            is_segment: this._isStandaloneSpan && Ze(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? Ze(this).spanContext().spanId : void 0,
            links: Wu(this._links)
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
            is_segment: this._isStandaloneSpan || this === Ze(this),
            status: Qu(this._status),
            attributes: this._attributes,
            links: Gu(this._links)
          };
        }
        isRecording() {
          return !this._endTime && !!this._sampled;
        }
        addEvent(e, n, s) {
          te && X.log("[Tracing] Adding an event to span:", e);
          const r = Aa(n) ? n : s || We(), o = Aa(n) ? {} : n || {}, i = {
            name: e,
            time: Vt(r),
            attributes: o
          };
          return this._events.push(i), this;
        }
        isStandaloneSpan() {
          return !!this._isStandaloneSpan;
        }
        _onSpanEnded() {
          const e = ge();
          if (e && (e.emit("spanEnd", this), this._isStandaloneSpan || e.emit("afterSpanEnd", this)), !(this._isStandaloneSpan || this === Ze(this))) return;
          if (this._isStandaloneSpan) {
            this._sampled ? Sm(bm([
              this
            ], e)) : (te && X.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span"));
            return;
          } else if (e && Qt(e)) {
            e.emit("afterSegmentSpanEnd", this);
            return;
          }
          const s = this._convertSpanToTransaction();
          s && (Rr(this).scope || ke()).captureEvent(s);
        }
        _convertSpanToTransaction() {
          if (!Ra(ve(this))) return;
          this._name || (te && X.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
          const { scope: e, isolationScope: n } = Rr(this), s = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
          if (this._sampled !== true) return;
          const o = _r(this).filter((d) => d !== this && !km(d)).map((d) => ve(d)).filter(Ra), i = this._attributes[Ut];
          delete this._attributes[va], o.forEach((d) => {
            delete d.data[va];
          });
          const a = {
            contexts: {
              trace: Wp(this)
            },
            spans: o.length > Ca ? o.sort((d, m) => d.start_timestamp - m.start_timestamp).slice(0, Ca) : o,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
              capturedSpanScope: e,
              capturedSpanIsolationScope: n,
              dynamicSamplingContext: fn(this)
            },
            request: s,
            ...i && {
              transaction_info: {
                source: i
              }
            }
          }, l = Ia(this._events);
          return l && Object.keys(l).length && (te && X.log("[Measurements] Adding measurements to transaction event", JSON.stringify(l, void 0, 2)), a.measurements = l), a;
        }
      }
      function Aa(t) {
        return t && typeof t == "number" || t instanceof Date || Array.isArray(t);
      }
      function Ra(t) {
        return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id;
      }
      function km(t) {
        return t instanceof no && t.isStandaloneSpan();
      }
      function Sm(t) {
        const e = ge();
        if (!e) return;
        const n = t[1];
        if (!n || n.length === 0) {
          e.recordDroppedEvent("before_send", "span");
          return;
        }
        e.sendEnvelope(t);
      }
      function Em(t, e, n) {
        if (!At(t)) return [
          false
        ];
        let s, r;
        typeof t.tracesSampler == "function" ? (r = t.tracesSampler({
          ...e,
          inheritOrSampleWith: (a) => typeof e.parentSampleRate == "number" ? e.parentSampleRate : typeof e.parentSampled == "boolean" ? Number(e.parentSampled) : a
        }), s = true) : e.parentSampled !== void 0 ? r = e.parentSampled : typeof t.tracesSampleRate < "u" && (r = t.tracesSampleRate, s = true);
        const o = Is(r);
        if (o === void 0) return te && X.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`), [
          false
        ];
        if (!o) return te && X.log(`[Tracing] Discarding transaction because ${typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [
          false,
          o,
          s
        ];
        const i = n < o;
        return i || te && X.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), [
          i,
          o,
          s
        ];
      }
      const Tm = "__SENTRY_SUPPRESS_TRACING__";
      function Bn(t) {
        const e = af();
        if (e.startInactiveSpan) return e.startInactiveSpan(t);
        const n = Cm(t), { forceTransaction: s, parentSpan: r } = t;
        return (t.scope ? (i) => Ei(t.scope, i) : r !== void 0 ? (i) => of(r, i) : (i) => i())(() => {
          const i = ke(), a = Rm(i, r), l = ge();
          return t.onlyIfParent && !a ? (l?.recordDroppedEvent("no_parent_span", "span"), new qt()) : Im({
            parentSpan: a,
            spanArguments: n,
            forceTransaction: s,
            scope: i
          });
        });
      }
      function of(t, e) {
        const n = af();
        return n.withActiveSpan ? n.withActiveSpan(t, e) : Ei((s) => (Es(s, t || void 0), e(s)));
      }
      function Im({ parentSpan: t, spanArguments: e, forceTransaction: n, scope: s }) {
        if (!At()) {
          const a = new qt();
          if (n || !t) {
            const l = {
              sampled: "false",
              sample_rate: "0",
              transaction: e.name,
              ...fn(a)
            };
            hr(a, l);
          }
          return a;
        }
        const r = ge();
        if (Nm(r, e)) return Ai(s) || r?.recordDroppedEvent("ignored", "span"), new qt({
          dropReason: "ignored",
          traceId: t?.spanContext().traceId ?? s.getPropagationContext().traceId
        });
        const o = Zt();
        let i;
        if (t && !n) i = Am(t, s, e), Zu(t, i);
        else if (t) {
          const a = fn(t), { traceId: l, spanId: f } = t.spanContext(), d = hn(t);
          i = Na({
            traceId: l,
            parentSpanId: f,
            ...e
          }, s, d), hr(i, a);
        } else {
          const { traceId: a, dsc: l, parentSpanId: f, sampled: d } = {
            ...o.getPropagationContext(),
            ...s.getPropagationContext()
          };
          i = Na({
            traceId: a,
            parentSpanId: f,
            ...e
          }, s, d), l && hr(i, l);
        }
        return vm(i), Cp(i, s, o), i;
      }
      function Cm(t) {
        const n = {
          isStandalone: (t.experimental || {}).standalone,
          ...t
        };
        if (t.startTime) {
          const s = {
            ...n
          };
          return s.startTimestamp = Vt(t.startTime), delete s.startTime, s;
        }
        return n;
      }
      function af() {
        const t = On();
        return is(t);
      }
      function Na(t, e, n) {
        const s = ge(), r = s?.getOptions() || {}, { name: o = "" } = t, i = {
          spanAttributes: {
            ...t.attributes
          },
          spanName: o,
          parentSampled: n
        };
        s?.emit("beforeSampling", i, {
          decision: false
        });
        const a = i.parentSampled ?? n, l = i.spanAttributes, f = e.getPropagationContext(), d = Ai(e), [m, h, _] = d ? [
          false
        ] : Em(r, {
          name: o,
          parentSampled: a,
          attributes: l,
          parentSampleRate: Is(f.dsc?.sample_rate)
        }, f.sampleRand), g = new no({
          ...t,
          attributes: {
            [Ut]: "custom",
            [Ti]: h !== void 0 && _ ? h : void 0,
            ...l
          },
          sampled: m
        });
        return !m && s && !d && (te && X.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), s.recordDroppedEvent("sample_rate", Qt(s) ? "span" : "transaction")), s && s.emit("spanStart", g), g;
      }
      function Am(t, e, n) {
        const { spanId: s, traceId: r } = t.spanContext(), o = Ai(e), i = o ? false : hn(t), a = i ? new no({
          ...n,
          parentSpanId: s,
          traceId: r,
          sampled: i
        }) : new qt({
          traceId: r
        });
        Zu(t, a);
        const l = ge();
        return l && (Qt(l) && a instanceof qt && (t instanceof qt && t.dropReason ? (a.dropReason = t.dropReason, l.recordDroppedEvent(t.dropReason, "span")) : o || (a.dropReason = "sample_rate", l.recordDroppedEvent("sample_rate", "span"))), l.emit("spanStart", a), n.endTimestamp && (l.emit("spanEnd", a), l.emit("afterSpanEnd", a))), a;
      }
      function Rm(t, e) {
        if (e) return e;
        if (e === null) return;
        const n = Ar(t);
        if (!n) return;
        const s = ge();
        return (s ? s.getOptions() : {}).parentSpanIsAlwaysRootSpan ? Ze(n) : n;
      }
      function Nm(t, e) {
        const n = t?.getOptions().ignoreSpans;
        return !t || !Qt(t) || !n?.length ? false : Cs({
          description: e.name || "",
          op: e.attributes?.[Rt] || e.op,
          attributes: e.attributes
        }, n);
      }
      function Ai(t) {
        return t.getScopeData().sdkProcessingMetadata[Tm] === true;
      }
      const gr = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
      }, Lm = "heartbeatFailed", Pm = "idleTimeout", Dm = "finalTimeout", Om = "externalFinish";
      function lf(t, e = {}) {
        const n = /* @__PURE__ */ new Map();
        let s = false, r, o = Om, i = !e.disableAutoFinish;
        const a = [], { idleTimeout: l = gr.idleTimeout, finalTimeout: f = gr.finalTimeout, childSpanTimeout: d = gr.childSpanTimeout, beforeSpanEnd: m, trimIdleSpanEndTimestamp: h = true } = e, _ = ge();
        if (!_ || !At()) {
          const T = new qt(), A = {
            sample_rate: "0",
            sampled: "false",
            ...fn(T)
          };
          return hr(T, A), T;
        }
        const g = ke(), b = _t(), v = Mm(t);
        v.end = new Proxy(v.end, {
          apply(T, A, L) {
            if (m && m(v), A instanceof qt) return;
            const [D, ...q] = L, P = D || We(), H = Vt(P), M = _r(v).filter((B) => B !== v), j = ve(v);
            if (!M.length || !h) return k(H), Reflect.apply(T, A, [
              H,
              ...q
            ]);
            const Y = _.getOptions().ignoreSpans, G = M?.reduce((B, V) => {
              const F = ve(V);
              return !F.timestamp || Y && Cs({
                description: F.description,
                op: F.op,
                attributes: F.data
              }, Y) ? B : B ? Math.max(B, F.timestamp) : F.timestamp;
            }, void 0), U = j.start_timestamp, Q = Math.min(U ? U + f / 1e3 : 1 / 0, Math.max(U || -1 / 0, Math.min(H, G || 1 / 0)));
            return k(Q), Reflect.apply(T, A, [
              Q,
              ...q
            ]);
          }
        });
        function w() {
          r && (clearTimeout(r), r = void 0);
        }
        function y(T) {
          w(), r = setTimeout(() => {
            !s && n.size === 0 && i && (o = Pm, v.end(T));
          }, l);
        }
        function R(T) {
          r = setTimeout(() => {
            !s && i && (o = Lm, v.end(T));
          }, d);
        }
        function N(T) {
          w(), n.set(T, true);
          const A = We();
          R(A + d / 1e3);
        }
        function E(T) {
          if (n.has(T) && n.delete(T), n.size === 0) {
            const A = We();
            y(A + l / 1e3);
          }
        }
        function k(T) {
          s = true, n.clear(), a.forEach((M) => M()), Es(g, b);
          const A = ve(v), { start_timestamp: L } = A;
          if (!L) return;
          A.data[Ts] || v.setAttribute(Ts, o);
          const q = A.status;
          (!q || q === "unknown") && v.setStatus({
            code: eo
          }), X.log(`[Tracing] Idle span "${A.op}" finished`);
          const P = _r(v).filter((M) => M !== v);
          let H = 0;
          P.forEach((M) => {
            M.isRecording() && (M.setStatus({
              code: Ye,
              message: "cancelled"
            }), M.end(T), te && X.log("[Tracing] Cancelling span since span ended early", JSON.stringify(M, void 0, 2)));
            const j = ve(M), { timestamp: Y = 0, start_timestamp: G = 0 } = j, U = G <= T, Q = (f + l) / 1e3, B = Y - G <= Q;
            if (te) {
              const V = JSON.stringify(M, void 0, 2);
              U ? B || X.log("[Tracing] Discarding span since it finished after idle span final timeout", V) : X.log("[Tracing] Discarding span since it happened after idle span was finished", V);
            }
            (!B || !U) && (Kp(v, M), H++);
          }), H > 0 && v.setAttribute("sentry.idle_span_discarded_spans", H);
        }
        return a.push(_.on("spanStart", (T) => {
          if (s || T === v || ve(T).timestamp || T instanceof no && T.isStandaloneSpan()) return;
          _r(v).includes(T) && N(T.spanContext().spanId);
        })), a.push(_.on("spanEnd", (T) => {
          s || E(T.spanContext().spanId);
        })), a.push(_.on("idleSpanEnableAutoFinish", (T) => {
          T === v && (i = true, y(), n.size && R());
        })), e.disableAutoFinish || y(), setTimeout(() => {
          s || (v.setStatus({
            code: Ye,
            message: "deadline_exceeded"
          }), o = Dm, v.end());
        }, f), v;
      }
      function Mm(t) {
        const e = Bn(t);
        return Es(ke(), e), te && X.log("[Tracing] Started span is an idle span"), e;
      }
      function qm(t, e) {
        const { fingerprint: n, span: s, breadcrumbs: r, sdkProcessingMetadata: o } = e;
        Hm(t, e), s && zm(t, s), Um(t, n), Bm(t, r), Fm(t, o);
      }
      function La(t, e) {
        const { extra: n, tags: s, attributes: r, user: o, contexts: i, level: a, sdkProcessingMetadata: l, breadcrumbs: f, fingerprint: d, eventProcessors: m, attachments: h, propagationContext: _, transactionName: g, span: b } = e;
        ds(t, "extra", n), ds(t, "tags", s), ds(t, "attributes", r), ds(t, "user", o), ds(t, "contexts", i), t.sdkProcessingMetadata = zs(t.sdkProcessingMetadata, l, 2), a && (t.level = a), g && (t.transactionName = g), b && (t.span = b), f.length && (t.breadcrumbs = [
          ...t.breadcrumbs,
          ...f
        ]), d.length && (t.fingerprint = [
          ...t.fingerprint,
          ...d
        ]), m.length && (t.eventProcessors = [
          ...t.eventProcessors,
          ...m
        ]), h.length && (t.attachments = [
          ...t.attachments,
          ...h
        ]), t.propagationContext = {
          ...t.propagationContext,
          ..._
        };
      }
      function ds(t, e, n) {
        t[e] = zs(t[e], n, 1);
      }
      function cf(t, e) {
        const n = yp().getScopeData();
        return t && La(n, t.getScopeData()), e && La(n, e.getScopeData()), n;
      }
      function Hm(t, e) {
        const { extra: n, tags: s, user: r, contexts: o, level: i, transactionName: a } = e;
        Object.keys(n).length && (t.extra = {
          ...n,
          ...t.extra
        }), Object.keys(s).length && (t.tags = {
          ...s,
          ...t.tags
        }), Object.keys(r).length && (t.user = {
          ...r,
          ...t.user
        }), Object.keys(o).length && (t.contexts = {
          ...o,
          ...t.contexts
        }), i && (t.level = i), a && t.type !== "transaction" && (t.transaction = a);
      }
      function Bm(t, e) {
        const n = [
          ...t.breadcrumbs || [],
          ...e
        ];
        t.breadcrumbs = n.length ? n : void 0;
      }
      function Fm(t, e) {
        t.sdkProcessingMetadata = {
          ...t.sdkProcessingMetadata,
          ...e
        };
      }
      function zm(t, e) {
        t.contexts = {
          trace: Gp(e),
          ...t.contexts
        }, t.sdkProcessingMetadata = {
          dynamicSamplingContext: fn(e),
          ...t.sdkProcessingMetadata
        };
        const n = Ze(e), s = ve(n).description;
        s && !t.transaction && t.type === "transaction" && (t.transaction = s);
      }
      function Um(t, e) {
        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [
          t.fingerprint
        ] : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint.length || delete t.fingerprint;
      }
      const jm = "thismessage:/";
      function uf(t) {
        return "isRelative" in t;
      }
      function ff(t, e) {
        const n = t.indexOf("://") <= 0 && t.indexOf("//") !== 0, s = n ? jm : void 0;
        try {
          if ("canParse" in URL && !URL.canParse(t, s)) return;
          const r = new URL(t, s);
          return n ? {
            isRelative: n,
            pathname: r.pathname,
            search: r.search,
            hash: r.hash
          } : r;
        } catch {
        }
      }
      function Wm(t) {
        if (uf(t)) return t.pathname;
        const e = new URL(t);
        return e.search = "", e.hash = "", [
          "80",
          "443"
        ].includes(e.port) && (e.port = ""), e.password && (e.password = "%filtered%"), e.username && (e.username = "%filtered%"), e.toString();
      }
      function An(t) {
        if (!t) return {};
        const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        const n = e[6] || "", s = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: s,
          relative: e[5] + n + s
        };
      }
      function Gm(t) {
        return t.split(/[?#]/, 1)[0];
      }
      function cn(t, e = true) {
        if (t.startsWith("data:")) {
          const n = t.match(/^data:([^;,]+)/), s = n ? n[1] : "text/plain", r = t.includes(";base64,"), o = t.indexOf(",");
          let i = "";
          if (e && o !== -1) {
            const a = t.slice(o + 1);
            i = a.length > 10 ? `${a.slice(0, 10)}... [truncated]` : a;
          }
          return `data:${s}${r ? ",base64" : ""}${i ? `,${i}` : ""}`;
        }
        return t;
      }
      function df(t, e) {
        const n = t.attributes ?? (t.attributes = {});
        Object.entries(e).forEach(([s, r]) => {
          r != null && !(s in n) && (n[s] = r);
        });
      }
      const So = 0, Pa = 1, Da = 2;
      function Ws(t) {
        return new As((e) => {
          e(t);
        });
      }
      function Ri(t) {
        return new As((e, n) => {
          n(t);
        });
      }
      class As {
        constructor(e) {
          this._state = So, this._handlers = [], this._runExecutor(e);
        }
        then(e, n) {
          return new As((s, r) => {
            this._handlers.push([
              false,
              (o) => {
                if (!e) s(o);
                else try {
                  s(e(o));
                } catch (i) {
                  r(i);
                }
              },
              (o) => {
                if (!n) r(o);
                else try {
                  s(n(o));
                } catch (i) {
                  r(i);
                }
              }
            ]), this._executeHandlers();
          });
        }
        catch(e) {
          return this.then((n) => n, e);
        }
        finally(e) {
          return new As((n, s) => {
            let r, o;
            return this.then((i) => {
              o = false, r = i, e && e();
            }, (i) => {
              o = true, r = i, e && e();
            }).then(() => {
              if (o) {
                s(r);
                return;
              }
              n(r);
            });
          });
        }
        _executeHandlers() {
          if (this._state === So) return;
          const e = this._handlers.slice();
          this._handlers = [], e.forEach((n) => {
            n[0] || (this._state === Pa && n[1](this._value), this._state === Da && n[2](this._value), n[0] = true);
          });
        }
        _runExecutor(e) {
          const n = (o, i) => {
            if (this._state === So) {
              if (qs(i)) {
                i.then(s, r);
                return;
              }
              this._state = o, this._value = i, this._executeHandlers();
            }
          }, s = (o) => {
            n(Pa, o);
          }, r = (o) => {
            n(Da, o);
          };
          try {
            e(s, r);
          } catch (o) {
            r(o);
          }
        }
      }
      function Vm(t, e, n, s = 0) {
        try {
          const r = Xo(e, n, t, s);
          return qs(r) ? r : Ws(r);
        } catch (r) {
          return Ri(r);
        }
      }
      function Xo(t, e, n, s) {
        const r = n[s];
        if (!t || !r) return t;
        const o = r({
          ...t
        }, e);
        return te && o === null && X.log(`Event processor "${r.id || "?"}" dropped event`), qs(o) ? o.then((i) => Xo(i, e, n, s + 1)) : Xo(o, e, n, s + 1);
      }
      let yn, Oa, Ma, rn;
      function Ym(t) {
        const e = me._sentryDebugIds, n = me._debugIds;
        if (!e && !n) return {};
        const s = e ? Object.keys(e) : [], r = n ? Object.keys(n) : [];
        if (rn && s.length === Oa && r.length === Ma) return rn;
        Oa = s.length, Ma = r.length, rn = {}, yn || (yn = {});
        const o = (i, a) => {
          for (const l of i) {
            const f = a[l], d = yn?.[l];
            if (d && rn && f) rn[d[0]] = f, yn && (yn[l] = [
              d[0],
              f
            ]);
            else if (f) {
              const m = t(l);
              for (let h = m.length - 1; h >= 0; h--) {
                const g = m[h]?.filename;
                if (g && rn && yn) {
                  rn[g] = f, yn[l] = [
                    g,
                    f
                  ];
                  break;
                }
              }
            }
          }
        };
        return e && o(s, e), n && o(r, n), rn;
      }
      function Km(t, e, n, s, r, o) {
        const { normalizeDepth: i = 3, normalizeMaxBreadth: a = 1e3 } = t, l = {
          ...e,
          event_id: e.event_id || n.event_id || kt(),
          timestamp: e.timestamp || qn()
        }, f = n.integrations || t.integrations.map((w) => w.name);
        Jm(l, t), Zm(l, f), r && r.emit("applyFrameMetadata", e), e.type === void 0 && Xm(l, t.stackParser);
        const d = $m(s, n.captureContext);
        n.mechanism && $n(l, n.mechanism);
        const m = r ? r.getEventProcessors() : [], h = cf(o, d), _ = [
          ...n.attachments || [],
          ...h.attachments
        ];
        _.length && (n.attachments = _), qm(l, h);
        const g = [
          ...m,
          ...h.eventProcessors
        ];
        return (n.data && n.data.__sentry__ === true ? Ws(l) : Vm(g, l, n)).then((w) => (w && Qm(w), typeof i == "number" && i > 0 ? xm(w, i, a) : w));
      }
      function Jm(t, e) {
        const { environment: n, release: s, dist: r, maxValueLength: o } = e;
        t.environment = t.environment || n || Ci, !t.release && s && (t.release = s), !t.dist && r && (t.dist = r);
        const i = t.request;
        i?.url && o && (i.url = zo(i.url, o)), o && t.exception?.values?.forEach((a) => {
          a.value && (a.value = zo(a.value, o));
        });
      }
      function Xm(t, e) {
        const n = Ym(e);
        t.exception?.values?.forEach((s) => {
          s.stacktrace?.frames?.forEach((r) => {
            r.filename && (r.debug_id = n[r.filename]);
          });
        });
      }
      function Qm(t) {
        const e = {};
        if (t.exception?.values?.forEach((s) => {
          s.stacktrace?.frames?.forEach((r) => {
            r.debug_id && (r.abs_path ? e[r.abs_path] = r.debug_id : r.filename && (e[r.filename] = r.debug_id), delete r.debug_id);
          });
        }), Object.keys(e).length === 0) return;
        t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
        const n = t.debug_meta.images;
        Object.entries(e).forEach(([s, r]) => {
          n.push({
            type: "sourcemap",
            code_file: s,
            debug_id: r
          });
        });
      }
      function Zm(t, e) {
        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [
          ...t.sdk.integrations || [],
          ...e
        ]);
      }
      function xm(t, e, n) {
        if (!t) return null;
        const s = {
          ...t,
          ...t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map((r) => ({
              ...r,
              ...r.data && {
                data: zt(r.data, e, n)
              }
            }))
          },
          ...t.user && {
            user: zt(t.user, e, n)
          },
          ...t.contexts && {
            contexts: zt(t.contexts, e, n)
          },
          ...t.extra && {
            extra: zt(t.extra, e, n)
          }
        };
        return t.contexts?.trace && s.contexts && (s.contexts.trace = t.contexts.trace, t.contexts.trace.data && (s.contexts.trace.data = zt(t.contexts.trace.data, e, n))), t.spans && (s.spans = t.spans.map((r) => ({
          ...r,
          ...r.data && {
            data: zt(r.data, e, n)
          }
        }))), t.contexts?.flags && s.contexts && (s.contexts.flags = zt(t.contexts.flags, 3, n)), s;
      }
      function $m(t, e) {
        if (!e) return t;
        const n = t ? t.clone() : new Xt();
        return n.update(e), n;
      }
      function e_(t, e) {
        return ke().captureException(t, void 0);
      }
      function pf(t, e) {
        return ke().captureEvent(t, e);
      }
      function t_() {
        const t = ge();
        return t?.getOptions().enabled !== false && !!t?.getTransport();
      }
      function qa(t) {
        const e = Zt(), { user: n } = cf(e, ke()), { userAgent: s } = me.navigator || {}, r = lp({
          user: n,
          ...s && {
            userAgent: s
          },
          ...t
        }), o = e.getSession();
        return o?.status === "ok" && es(o, {
          status: "exited"
        }), mf(), e.setSession(r), r;
      }
      function mf() {
        const t = Zt(), n = ke().getSession() || t.getSession();
        n && cp(n), _f(), t.setSession();
      }
      function _f() {
        const t = Zt(), e = ge(), n = t.getSession();
        n && e && e.captureSession(n);
      }
      function Eo(t = false) {
        if (t) {
          mf();
          return;
        }
        _f();
      }
      const n_ = "7";
      function s_(t) {
        const e = t.protocol ? `${t.protocol}:` : "", n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
      }
      function r_(t) {
        return `${s_(t)}${t.projectId}/envelope/`;
      }
      function o_(t, e) {
        const n = {
          sentry_version: n_
        };
        return t.publicKey && (n.sentry_key = t.publicKey), e && (n.sentry_client = `${e.name}/${e.version}`), new URLSearchParams(n).toString();
      }
      function i_(t, e, n) {
        return e || `${r_(t)}?${o_(t, n)}`;
      }
      const Ha = [];
      function a_(t) {
        const e = {};
        return t.forEach((n) => {
          const { name: s } = n, r = e[s];
          r && !r.isDefaultInstance && n.isDefaultInstance || (e[s] = n);
        }), Object.values(e);
      }
      function l_(t) {
        const e = t.defaultIntegrations || [], n = t.integrations;
        e.forEach((r) => {
          r.isDefaultInstance = true;
        });
        let s;
        if (Array.isArray(n)) s = [
          ...e,
          ...n
        ];
        else if (typeof n == "function") {
          const r = n(e);
          s = Array.isArray(r) ? r : [
            r
          ];
        } else s = e;
        return a_(s);
      }
      function c_(t, e) {
        const n = {};
        return e.forEach((s) => {
          s?.beforeSetup && s.beforeSetup(t);
        }), e.forEach((s) => {
          s && hf(t, s, n);
        }), n;
      }
      function Ba(t, e) {
        for (const n of e) n?.afterAllSetup && n.afterAllSetup(t);
      }
      function hf(t, e, n) {
        if (n[e.name]) {
          te && X.log(`Integration skipped because it was already installed: ${e.name}`);
          return;
        }
        if (n[e.name] = e, !Ha.includes(e.name) && typeof e.setupOnce == "function" && (e.setupOnce(), Ha.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
          const s = e.preprocessEvent.bind(e);
          t.on("preprocessEvent", (r, o) => s(r, o, t));
        }
        if (typeof e.processEvent == "function") {
          const s = e.processEvent.bind(e), r = Object.assign((o, i) => s(o, i, t), {
            id: e.name
          });
          t.addEventProcessor(r);
        }
        [
          "processSpan",
          "processSegmentSpan"
        ].forEach((s) => {
          const r = e[s];
          typeof r == "function" && t.on(s, (o) => r.call(e, o, t));
        }), te && X.log(`Integration installed: ${e.name}`);
      }
      function u_() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
      }
      function f_() {
        return "npm";
      }
      function d_() {
        return !u_() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
      }
      function Ni() {
        return typeof window < "u" && (!d_() || p_());
      }
      function p_() {
        return me.process?.type === "renderer";
      }
      function m_(t, e) {
        const n = e ? "auto" : "never";
        return [
          {
            type: "log",
            item_count: t.length,
            content_type: "application/vnd.sentry.items.log+json"
          },
          {
            version: 2,
            ...Ni() && {
              ingest_settings: {
                infer_ip: n,
                infer_user_agent: n
              }
            },
            items: t
          }
        ];
      }
      function __(t, e, n, s, r) {
        const o = {};
        return e?.sdk && (o.sdk = {
          name: e.sdk.name,
          version: e.sdk.version
        }), n && s && (o.dsn = as(s)), Hn(o, [
          m_(t, r)
        ]);
      }
      function Qo(t, e) {
        const n = e ?? h_(t) ?? [];
        if (n.length === 0) return;
        const s = t.getOptions(), r = __(n, s._metadata, s.tunnel, t.getDsn(), s.sendDefaultPii);
        gf().set(t, []), t.emit("flushLogs"), t.sendEnvelope(r);
      }
      function h_(t) {
        return gf().get(t);
      }
      function gf() {
        return rs("clientToLogBufferMap", () => /* @__PURE__ */ new WeakMap());
      }
      function g_(t, e) {
        const n = e ? "auto" : "never";
        return [
          {
            type: "trace_metric",
            item_count: t.length,
            content_type: "application/vnd.sentry.items.trace-metric+json"
          },
          {
            version: 2,
            ...Ni() && {
              ingest_settings: {
                infer_ip: n,
                infer_user_agent: n
              }
            },
            items: t
          }
        ];
      }
      function b_(t, e, n, s, r) {
        const o = {};
        return e?.sdk && (o.sdk = {
          name: e.sdk.name,
          version: e.sdk.version
        }), n && s && (o.dsn = as(s)), Hn(o, [
          g_(t, r)
        ]);
      }
      function bf(t, e) {
        const n = e ?? v_(t) ?? [];
        if (n.length === 0) return;
        const s = t.getOptions(), r = b_(n, s._metadata, s.tunnel, t.getDsn(), s.sendDefaultPii);
        vf().set(t, []), t.emit("flushMetrics"), t.sendEnvelope(r);
      }
      function v_(t) {
        return vf().get(t);
      }
      function vf() {
        return rs("clientToMetricBufferMap", () => /* @__PURE__ */ new WeakMap());
      }
      function yf(t) {
        return typeof t == "object" && typeof t.unref == "function" && t.unref(), t;
      }
      const Li = Symbol.for("SentryBufferFullError");
      function Pi(t = 100) {
        const e = /* @__PURE__ */ new Set();
        function n() {
          return e.size < t;
        }
        function s(i) {
          e.delete(i);
        }
        function r(i) {
          if (!n()) return Ri(Li);
          const a = i();
          return e.add(a), a.then(() => s(a), () => s(a)), a;
        }
        function o(i) {
          if (!e.size) return Ws(true);
          const a = Promise.allSettled(Array.from(e)).then(() => true);
          if (!i) return a;
          const l = [
            a,
            new Promise((f) => yf(setTimeout(() => f(false), i)))
          ];
          return Promise.race(l);
        }
        return {
          get $() {
            return Array.from(e);
          },
          add: r,
          drain: o
        };
      }
      const y_ = 60 * 1e3;
      function w_(t, e = Fs()) {
        const n = parseInt(`${t}`, 10);
        if (!isNaN(n)) return n * 1e3;
        const s = Date.parse(`${t}`);
        return isNaN(s) ? y_ : s - e;
      }
      function k_(t, e) {
        return t[e] || t.all || 0;
      }
      function S_(t, e, n = Fs()) {
        return k_(t, e) > n;
      }
      function E_(t, { statusCode: e, headers: n }, s = Fs()) {
        const r = {
          ...t
        }, o = n?.["x-sentry-rate-limits"], i = n?.["retry-after"];
        if (o) for (const a of o.trim().split(",")) {
          const [l, f, , , d] = a.split(":", 5), m = parseInt(l, 10), h = (isNaN(m) ? 60 : m) * 1e3;
          if (!f) r.all = s + h;
          else for (const _ of f.split(";")) _ === "metric_bucket" ? (!d || d.split(";").includes("custom")) && (r[_] = s + h) : r[_] = s + h;
        }
        else i ? r.all = s + w_(i, s) : e === 429 && (r.all = s + 60 * 1e3);
        return r;
      }
      const wf = 64;
      function T_(t, e, n = Pi(t.bufferSize || wf)) {
        let s = {};
        const r = (i) => n.drain(i);
        function o(i) {
          const a = [];
          if (Ko(i, (m, h) => {
            const _ = Ta(h);
            S_(s, _) ? t.recordDroppedEvent("ratelimit_backoff", _) : a.push(m);
          }), a.length === 0) return Promise.resolve({});
          const l = Hn(i[0], a), f = (m) => {
            if (lm(l, [
              "client_report"
            ])) {
              te && X.warn(`Dropping client report. Will not send outcomes (reason: ${m}).`);
              return;
            }
            Ko(l, (h, _) => {
              t.recordDroppedEvent(m, Ta(_));
            });
          }, d = () => e({
            body: cm(l)
          }).then((m) => m.statusCode === 413 ? (te && X.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), f("send_error"), m) : (te && m.statusCode !== void 0 && (m.statusCode < 200 || m.statusCode >= 300) && X.warn(`Sentry responded with status code ${m.statusCode} to sent event.`), s = E_(s, m), m), (m) => {
            throw f("network_error"), te && X.error("Encountered error running transport request:", m), m;
          });
          return n.add(d).then((m) => m, (m) => {
            if (m === Li) return te && X.error("Skipped sending event because buffer is full."), f("queue_overflow"), Promise.resolve({});
            throw m;
          });
        }
        return {
          send: o,
          flush: r
        };
      }
      function I_(t, e, n) {
        const s = [
          {
            type: "client_report"
          },
          {
            timestamp: qn(),
            discarded_events: t
          }
        ];
        return Hn(e ? {
          dsn: e
        } : {}, [
          s
        ]);
      }
      function kf(t) {
        const e = [];
        t.message && e.push(t.message);
        try {
          const n = t.exception.values[t.exception.values.length - 1];
          n?.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`));
        } catch {
        }
        return e;
      }
      function C_(t) {
        const { trace_id: e, parent_span_id: n, span_id: s, status: r, origin: o, data: i, op: a } = t.contexts?.trace ?? {};
        return {
          data: i ?? {},
          description: t.transaction,
          op: a,
          parent_span_id: n,
          span_id: s ?? "",
          start_timestamp: t.start_timestamp ?? 0,
          status: r,
          timestamp: t.timestamp,
          trace_id: e ?? "",
          origin: o,
          profile_id: i?.[Ii],
          exclusive_time: i?.[_n],
          measurements: t.measurements,
          is_segment: true
        };
      }
      function A_(t) {
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
                  [Ii]: t.profile_id
                },
                ...t.exclusive_time && {
                  [_n]: t.exclusive_time
                }
              }
            }
          },
          measurements: t.measurements
        };
      }
      const Fa = "Not capturing exception because it's already been captured.", za = "Discarded session because of missing or non-string release", Sf = Symbol.for("SentryInternalError"), Ef = Symbol.for("SentryDoNotSendEventError"), R_ = 5e3;
      function br(t) {
        return {
          message: t,
          [Sf]: true
        };
      }
      function To(t) {
        return {
          message: t,
          [Ef]: true
        };
      }
      function Ua(t) {
        return !!t && typeof t == "object" && Sf in t;
      }
      function ja(t) {
        return !!t && typeof t == "object" && Ef in t;
      }
      function Wa(t, e, n, s, r) {
        let o = 0, i, a = false;
        t.on(n, () => {
          o = 0, clearTimeout(i), a = false;
        }), t.on(e, (l) => {
          o += s(l), o >= 8e5 ? r(t) : a || (a = true, i = yf(setTimeout(() => {
            r(t);
          }, R_)));
        }), t.on("flush", () => {
          r(t);
        });
      }
      class N_ {
        constructor(e) {
          if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = Pi(e.transportOptions?.bufferSize ?? wf), e.dsn ? this._dsn = Fp(e.dsn) : te && X.warn("No DSN provided, client will not send events."), this._dsn) {
            const s = i_(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
              tunnel: this._options.tunnel,
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...e.transportOptions,
              url: s
            });
          }
          this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs, this._options.enableLogs && Wa(this, "afterCaptureLog", "flushLogs", O_, Qo), (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? true) && Wa(this, "afterCaptureMetric", "flushMetrics", D_, bf);
        }
        captureException(e, n, s) {
          const r = kt();
          if (_a(e)) return te && X.log(Fa), r;
          const o = {
            event_id: r,
            ...n
          };
          return this._process(() => this.eventFromException(e, o).then((i) => this._captureEvent(i, o, s)).then((i) => i), "error"), o.event_id;
        }
        captureMessage(e, n, s, r) {
          const o = {
            event_id: kt(),
            ...s
          }, i = yi(e) ? e : String(e), a = xn(e), l = a ? this.eventFromMessage(i, n, o) : this.eventFromException(e, o);
          return this._process(() => l.then((f) => this._captureEvent(f, o, r)), a ? "unknown" : "error"), o.event_id;
        }
        captureEvent(e, n, s) {
          const r = kt();
          if (n?.originalException && _a(n.originalException)) return te && X.log(Fa), r;
          const o = {
            event_id: r,
            ...n
          }, i = e.sdkProcessingMetadata || {}, a = i.capturedSpanScope, l = i.capturedSpanIsolationScope, f = Ga(e.type);
          return this._process(() => this._captureEvent(e, o, a || s, l), f), o.event_id;
        }
        captureSession(e) {
          this.sendSession(e), es(e, {
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
          const s = await this._isClientDoneProcessing(e), r = await n.flush(e);
          return s && r;
        }
        async close(e) {
          Qo(this);
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
          !n && e.beforeSetup && e.beforeSetup(this), hf(this, e, this._integrations), n || Ba(this, [
            e
          ]);
        }
        sendEvent(e, n = {}) {
          this.emit("beforeSendEvent", e, n);
          let s = gm(e, this._dsn, this._options._metadata, this._options.tunnel);
          for (const r of n.attachments || []) s = am(s, dm(r));
          this.sendEnvelope(s).then((r) => this.emit("afterSendEvent", e, r));
        }
        sendSession(e) {
          const { release: n, environment: s = Ci } = this._options;
          if ("aggregates" in e) {
            const o = e.attrs || {};
            if (!o.release && !n) {
              te && X.warn(za);
              return;
            }
            o.release = o.release || n, o.environment = o.environment || s, e.attrs = o;
          } else {
            if (!e.release && !n) {
              te && X.warn(za);
              return;
            }
            e.release = e.release || n, e.environment = e.environment || s;
          }
          this.emit("beforeSendSession", e);
          const r = hm(e, this._dsn, this._options._metadata, this._options.tunnel);
          this.sendEnvelope(r);
        }
        recordDroppedEvent(e, n, s = 1) {
          if (this._options.sendClientReports) {
            const r = `${e}:${n}`;
            te && X.log(`Recording outcome: "${r}"${s > 1 ? ` (${s} times)` : ""}`), this._outcomes[r] = (this._outcomes[r] || 0) + s;
          }
        }
        on(e, n) {
          const s = this._hooks[e] = this._hooks[e] || /* @__PURE__ */ new Set(), r = (...o) => n(...o);
          return s.add(r), () => {
            s.delete(r);
          };
        }
        emit(e, ...n) {
          const s = this._hooks[e];
          s && s.forEach((r) => r(...n));
        }
        async sendEnvelope(e) {
          if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) try {
            return await this._transport.send(e);
          } catch (n) {
            return te && X.error("Error while sending envelope:", n), {};
          }
          return te && X.error("Transport disabled"), {};
        }
        registerCleanup(e) {
        }
        dispose() {
        }
        _setupIntegrations() {
          const { integrations: e } = this._options;
          this._integrations = c_(this, e), Ba(this, e);
        }
        _updateSessionFromEvent(e, n) {
          let s = n.level === "fatal", r = false;
          const o = n.exception?.values;
          if (o) {
            r = true, s = false;
            for (const l of o) if (l.mechanism?.handled === false) {
              s = true;
              break;
            }
          }
          const i = e.status === "ok";
          (i && e.errors === 0 || i && s) && (es(e, {
            ...s && {
              status: "crashed"
            },
            errors: e.errors || Number(r || s)
          }), this.captureSession(e));
        }
        async _isClientDoneProcessing(e) {
          let n = 0;
          for (; !e || n < e; ) {
            if (await new Promise((s) => setTimeout(s, 1)), !this._numProcessing) return true;
            n++;
          }
          return false;
        }
        _isEnabled() {
          return this.getOptions().enabled !== false && this._transport !== void 0;
        }
        _prepareEvent(e, n, s, r) {
          const o = this.getOptions(), i = Object.keys(this._integrations);
          return !n.integrations && i?.length && (n.integrations = i), this.emit("preprocessEvent", e, n), e.type || r.setLastEventId(e.event_id || n.event_id), Km(o, e, n, s, this, r).then((a) => {
            if (a === null) return a;
            this.emit("postprocessEvent", a, n), a.contexts = {
              trace: {
                ...a.contexts?.trace,
                ...wp(s)
              },
              ...a.contexts
            };
            const l = ef(this, s);
            return a.sdkProcessingMetadata = {
              dynamicSamplingContext: l,
              ...a.sdkProcessingMetadata
            }, a;
          });
        }
        _captureEvent(e, n = {}, s = ke(), r = Zt()) {
          return te && Zo(e) && X.log(`Captured error event \`${kf(e)[0] || "<unknown>"}\``), this._processEvent(e, n, s, r).then((o) => o.event_id, (o) => {
            te && (ja(o) ? X.log(o.message) : Ua(o) ? X.warn(o.message) : X.warn(o));
          });
        }
        _processEvent(e, n, s, r) {
          const o = this.getOptions(), { sampleRate: i } = o, a = Tf(e), l = Zo(e), d = `before send for type \`${e.type || "error"}\``, m = typeof i > "u" ? void 0 : Is(i);
          if (l && typeof m == "number" && an() > m) return this.recordDroppedEvent("sample_rate", "error"), Ri(To(`Discarding event because it's not included in the random sample (sampling rate = ${i})`));
          const h = Ga(e.type);
          return this._prepareEvent(e, n, s, r).then((_) => {
            if (_ === null) throw this.recordDroppedEvent("event_processor", h), To("An event processor returned `null`, will not send event.");
            if (n.data?.__sentry__ === true) return _;
            const b = P_(this, o, _, n);
            return L_(b, d);
          }).then((_) => {
            if (_ === null) {
              if (this.recordDroppedEvent("before_send", h), a) {
                const w = 1 + (e.spans || []).length;
                this.recordDroppedEvent("before_send", "span", w);
              }
              throw To(`${d} returned \`null\`, will not send event.`);
            }
            const g = s.getSession() || r.getSession();
            if (l && g && this._updateSessionFromEvent(g, _), a) {
              const v = _.sdkProcessingMetadata?.spanCountBeforeProcessing || 0, w = _.spans ? _.spans.length : 0, y = v - w;
              y > 0 && this.recordDroppedEvent("before_send", "span", y);
            }
            const b = _.transaction_info;
            if (a && b && _.transaction !== e.transaction) {
              const v = "custom";
              _.transaction_info = {
                ...b,
                source: v
              };
            }
            return this.sendEvent(_, n), _;
          }).then(null, (_) => {
            throw ja(_) || Ua(_) ? _ : (this.captureException(_, {
              mechanism: {
                handled: false,
                type: "internal"
              },
              data: {
                __sentry__: true
              },
              originalException: _
            }), br(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${_}`));
          });
        }
        _process(e, n) {
          this._numProcessing++, this._promiseBuffer.add(e).then((s) => (this._numProcessing--, s), (s) => (this._numProcessing--, s === Li && this.recordDroppedEvent("queue_overflow", n), s));
        }
        _clearOutcomes() {
          const e = this._outcomes;
          return this._outcomes = {}, Object.entries(e).map(([n, s]) => {
            const [r, o] = n.split(":");
            return {
              reason: r,
              category: o,
              quantity: s
            };
          });
        }
        _flushOutcomes() {
          te && X.log("Flushing outcomes...");
          const e = this._clearOutcomes();
          if (e.length === 0) {
            te && X.log("No outcomes to send");
            return;
          }
          if (!this._dsn) {
            te && X.log("No dsn provided, will not send outcomes");
            return;
          }
          te && X.log("Sending outcomes:", e);
          const n = I_(e, this._options.tunnel && as(this._dsn));
          this.sendEnvelope(n);
        }
      }
      function Ga(t) {
        return t === "replay_event" ? "replay" : t || "error";
      }
      function L_(t, e) {
        const n = `${e} must return \`null\` or a valid event.`;
        if (qs(t)) return t.then((s) => {
          if (!Ss(s) && s !== null) throw br(n);
          return s;
        }, (s) => {
          throw br(`${e} rejected with ${s}`);
        });
        if (!Ss(t) && t !== null) throw br(n);
        return t;
      }
      function P_(t, e, n, s) {
        const { beforeSend: r, beforeSendTransaction: o, ignoreSpans: i } = e, a = !tf(e.beforeSendSpan) && e.beforeSendSpan;
        let l = n;
        if (Zo(l) && r) return r(l, s);
        if (Tf(l)) {
          if (a || i) {
            const f = C_(l);
            if (i?.length && Cs({
              description: f.description,
              op: f.op,
              attributes: f.data
            }, i)) return null;
            if (a) {
              const d = a(f);
              d ? l = zs(n, A_(d)) : Vo();
            }
            if (l.spans) {
              const d = [], m = l.spans;
              for (const _ of m) {
                if (i?.length && Cs({
                  description: _.description,
                  op: _.op,
                  attributes: _.data
                }, i)) {
                  Qp(m, _);
                  continue;
                }
                if (a) {
                  const g = a(_);
                  g ? d.push(g) : (Vo(), d.push(_));
                } else d.push(_);
              }
              const h = l.spans.length - d.length;
              h && t.recordDroppedEvent("before_send", "span", h), l.spans = d;
            }
          }
          if (o) {
            if (l.spans) {
              const f = l.spans.length;
              l.sdkProcessingMetadata = {
                ...n.sdkProcessingMetadata,
                spanCountBeforeProcessing: f
              };
            }
            return o(l, s);
          }
        }
        return l;
      }
      function Zo(t) {
        return t.type === void 0;
      }
      function Tf(t) {
        return t.type === "transaction";
      }
      function D_(t) {
        let e = 0;
        return t.name && (e += t.name.length * 2), e += 8, e + If(t.attributes);
      }
      function O_(t) {
        let e = 0;
        return t.message && (e += t.message.length * 2), e + If(t.attributes);
      }
      function If(t) {
        if (!t) return 0;
        let e = 0;
        return Object.values(t).forEach((n) => {
          Array.isArray(n) ? e += n.length * Va(n[0]) : xn(n) ? e += Va(n) : e += 100;
        }), e;
      }
      function Va(t) {
        return typeof t == "string" ? t.length * 2 : typeof t == "number" ? 8 : typeof t == "boolean" ? 4 : 0;
      }
      function M_(t) {
        return xr(t) && "__sentry_fetch_url_host__" in t && typeof t.__sentry_fetch_url_host__ == "string";
      }
      function Ya(t) {
        return M_(t) ? `${t.message} (${t.__sentry_fetch_url_host__})` : t.message;
      }
      function q_(t, e) {
        e.debug === true && (te ? X.enable() : Mn(() => {
          console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
        })), ke().update(e.initialScope);
        const s = new t(e);
        return H_(s), s.init(), s;
      }
      function H_(t) {
        ke().setClient(t);
      }
      function B_(t) {
        "aggregates" in t ? t.attrs?.ip_address === void 0 && (t.attrs = {
          ...t.attrs,
          ip_address: "{{auto}}"
        }) : t.ipAddress === void 0 && (t.ipAddress = "{{auto}}");
      }
      function Cf(t, e, n = [
        e
      ], s = "npm") {
        const r = (t._metadata = t._metadata || {}).sdk = t._metadata.sdk || {};
        r.name || (r.name = `sentry.javascript.${e}`, r.packages = n.map((o) => ({
          name: `${s}:@sentry/${o}`,
          version: In
        })), r.version = In);
      }
      function Af(t = {}) {
        const e = t.client || ge();
        if (!t_() || !e) return {};
        const n = On(), s = is(n);
        if (s.getTraceData) return s.getTraceData(t);
        const r = t.scope || ke(), o = t.span || _t(), i = o ? Vp(o) : F_(r), a = o ? fn(o) : ef(e, r), l = Rp(a);
        if (!Fu.test(i)) return X.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
        const d = {
          "sentry-trace": i,
          baggage: l
        };
        return t.propagateTraceparent && (d.traceparent = o ? Yp(o) : z_(r)), d;
      }
      function F_(t) {
        const { traceId: e, sampled: n, propagationSpanId: s } = t.getPropagationContext();
        return zu(e, s, n);
      }
      function z_(t) {
        const { traceId: e, sampled: n, propagationSpanId: s } = t.getPropagationContext();
        return Uu(e, s, n);
      }
      const U_ = 100;
      function Nn(t, e) {
        const n = ge(), s = Zt();
        if (!n) return;
        const { beforeBreadcrumb: r = null, maxBreadcrumbs: o = U_ } = n.getOptions();
        if (o <= 0) return;
        const a = {
          timestamp: qn(),
          ...t
        }, l = r ? Mn(() => r(a, e)) : a;
        l !== null && (n.emit && n.emit("beforeAddBreadcrumb", l, e), s.addBreadcrumb(l, o));
      }
      let Ka;
      const j_ = "FunctionToString", Ja = /* @__PURE__ */ new WeakMap(), W_ = () => ({
        name: j_,
        setupOnce() {
          Ka = Function.prototype.toString;
          try {
            Function.prototype.toString = function(...t) {
              const e = Si(this), n = Ja.has(ge()) && e !== void 0 ? e : this;
              return Ka.apply(n, t);
            };
          } catch {
          }
        },
        setup(t) {
          Ja.set(t, true);
        }
      }), G_ = W_, V_ = [
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
      ], Y_ = "EventFilters", K_ = (t = {}) => {
        let e;
        return {
          name: Y_,
          setup(n) {
            const s = n.getOptions();
            e = Xa(t, s);
          },
          processEvent(n, s, r) {
            if (!e) {
              const o = r.getOptions();
              e = Xa(t, o);
            }
            return X_(n, e) ? null : n;
          }
        };
      }, J_ = (t = {}) => ({
        ...K_(t),
        name: "InboundFilters"
      });
      function Xa(t = {}, e = {}) {
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
            ...t.disableErrorDefaults ? [] : V_
          ],
          ignoreTransactions: [
            ...t.ignoreTransactions || [],
            ...e.ignoreTransactions || []
          ]
        };
      }
      function X_(t, e) {
        if (t.type) {
          if (t.type === "transaction" && Z_(t, e.ignoreTransactions)) return te && X.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${kn(t)}`), true;
        } else {
          if (Q_(t, e.ignoreErrors)) return te && X.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${kn(t)}`), true;
          if (th(t)) return te && X.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${kn(t)}`), true;
          if (x_(t, e.denyUrls)) return te && X.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${kn(t)}.
Url: ${Lr(t)}`), true;
          if (!$_(t, e.allowUrls)) return te && X.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${kn(t)}.
Url: ${Lr(t)}`), true;
        }
        return false;
      }
      function Q_(t, e) {
        return e?.length ? kf(t).some((n) => ln(n, e)) : false;
      }
      function Z_(t, e) {
        if (!e?.length) return false;
        const n = t.transaction;
        return n ? ln(n, e) : false;
      }
      function x_(t, e) {
        if (!e?.length) return false;
        const n = Lr(t);
        return n ? ln(n, e) : false;
      }
      function $_(t, e) {
        if (!e?.length) return true;
        const n = Lr(t);
        return n ? ln(n, e) : true;
      }
      function eh(t = []) {
        for (let e = t.length - 1; e >= 0; e--) {
          const n = t[e];
          if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
        }
        return null;
      }
      function Lr(t) {
        try {
          const n = [
            ...t.exception?.values ?? []
          ].reverse().find((s) => s.mechanism?.parent_id === void 0 && s.stacktrace?.frames?.length)?.stacktrace?.frames;
          return n ? eh(n) : null;
        } catch {
          return te && X.error(`Cannot extract url for event ${kn(t)}`), null;
        }
      }
      function th(t) {
        return t.exception?.values?.length ? !t.message && !t.exception.values.some((e) => e.stacktrace || e.type && e.type !== "Error" || e.value) : false;
      }
      function nh(t, e, n, s, r, o) {
        if (!r.exception?.values || !o || !Kt(o.originalException, Error)) return;
        const i = r.exception.values.length > 0 ? r.exception.values[r.exception.values.length - 1] : void 0;
        i && (r.exception.values = xo(t, e, s, o.originalException, n, r.exception.values, i, 0));
      }
      function xo(t, e, n, s, r, o, i, a) {
        if (o.length >= n + 1) return o;
        let l = [
          ...o
        ];
        if (Kt(s[r], Error)) {
          Qa(i, a, s);
          const f = t(e, s[r]), d = l.length;
          Za(f, r, d, a), l = xo(t, e, n, s[r], r, [
            f,
            ...l
          ], f, d);
        }
        return Rf(s) && s.errors.forEach((f, d) => {
          if (Kt(f, Error)) {
            Qa(i, a, s);
            const m = t(e, f), h = l.length;
            Za(m, `errors[${d}]`, h, a), l = xo(t, e, n, f, r, [
              m,
              ...l
            ], m, h);
          }
        }), l;
      }
      function Rf(t) {
        return Array.isArray(t.errors);
      }
      function Qa(t, e, n) {
        t.mechanism = {
          handled: true,
          type: "auto.core.linked_errors",
          ...Rf(n) && {
            is_exception_group: true
          },
          ...t.mechanism,
          exception_id: e
        };
      }
      function Za(t, e, n, s) {
        t.mechanism = {
          handled: true,
          ...t.mechanism,
          type: "chained",
          source: e,
          exception_id: n,
          parent_id: s
        };
      }
      function sh(t) {
        const e = "console", n = pn(e, t);
        return mn(e, rh), n;
      }
      function rh() {
        "console" in me && Fd.forEach(function(t) {
          t in me.console && pt(me.console, t, function(e) {
            return Cr[t] = e, function(...n) {
              wt("console", {
                args: n,
                level: t
              }), Cr[t]?.apply(me.console, n);
            };
          });
        });
      }
      function oh(t) {
        return t === "warn" ? "warning" : [
          "fatal",
          "error",
          "warning",
          "log",
          "info",
          "debug"
        ].includes(t) ? t : "log";
      }
      const ih = "Dedupe", ah = () => {
        let t;
        return {
          name: ih,
          processEvent(e) {
            if (e.type) return e;
            try {
              if (ch(e, t)) return te && X.warn("Event dropped due to being a duplicate of previously captured event."), null;
            } catch {
            }
            return t = e;
          }
        };
      }, lh = ah;
      function ch(t, e) {
        return e ? !!(uh(t, e) || fh(t, e)) : false;
      }
      function uh(t, e) {
        const n = t.message, s = e.message;
        return !(!n && !s || n && !s || !n && s || n !== s || !Lf(t, e) || !Nf(t, e));
      }
      function fh(t, e) {
        const n = xa(e), s = xa(t);
        return !(!n || !s || n.type !== s.type || n.value !== s.value || !Lf(t, e) || !Nf(t, e));
      }
      function Nf(t, e) {
        let n = ca(t), s = ca(e);
        if (!n && !s) return true;
        if (n && !s || !n && s || (n = n, s = s, s.length !== n.length)) return false;
        for (let r = 0; r < s.length; r++) {
          const o = s[r], i = n[r];
          if (o.filename !== i.filename || o.lineno !== i.lineno || o.colno !== i.colno || o.function !== i.function) return false;
        }
        return true;
      }
      function Lf(t, e) {
        let n = t.fingerprint, s = e.fingerprint;
        if (!n && !s) return true;
        if (n && !s || !n && s) return false;
        n = n, s = s;
        try {
          return n.join("") === s.join("");
        } catch {
          return false;
        }
      }
      function xa(t) {
        return t.exception?.values?.[0];
      }
      const dh = "ConversationId", ph = () => ({
        name: dh,
        setup(t) {
          t.on("spanStart", (e) => {
            const n = ke().getScopeData(), s = Zt().getScopeData(), r = n.conversationId || s.conversationId;
            if (r) {
              const { op: o, data: i, description: a } = ve(e);
              if (!o?.startsWith("gen_ai.") && !i["ai.operationId"] && !a?.startsWith("ai.")) return;
              e.setAttribute(Sp, r);
            }
          });
        }
      }), mh = ph;
      function Pf(t) {
        if (t !== void 0) return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0;
      }
      function _h(t, e, n, s, r) {
        if (!t.fetchData) return;
        const { method: o, url: i } = t.fetchData, a = At() && e(i);
        if (t.endTimestamp) {
          const g = t.fetchData.__span;
          if (!g) return;
          const b = s[g];
          b && (a && (bh(b, t), hh(b, t, r)), delete s[g]);
          return;
        }
        const { spanOrigin: l = "auto.http.browser", propagateTraceparent: f = false } = typeof r == "object" ? r : {
          spanOrigin: r
        }, d = ge(), h = !!_t() || !!d && Qt(d), _ = a && h ? Bn(wh(i, o, l)) : new qt();
        if (a && !h && d?.recordDroppedEvent("no_parent_span", "span"), t.fetchData.__span = _.spanContext().spanId, s[_.spanContext().spanId] = _, n(t.fetchData.url)) {
          const g = t.args[0], b = {
            ...t.args[1] || {}
          }, v = gh(g, b, At() && h ? _ : void 0, f);
          v && (t.args[1] = b, b.headers = v);
        }
        if (d) {
          const g = {
            input: t.args,
            response: t.response,
            startTimestamp: t.startTimestamp,
            endTimestamp: t.endTimestamp
          };
          d.emit("beforeOutgoingRequestSpan", _, g);
        }
        return _;
      }
      function hh(t, e, n) {
        (typeof n == "object" && n !== null ? n.onRequestSpanEnd : void 0)?.(t, {
          headers: e.response?.headers,
          error: e.error
        });
      }
      function gh(t, e, n, s) {
        const r = Af({
          span: n,
          propagateTraceparent: s
        }), o = r["sentry-trace"], i = r.baggage, a = r.traceparent;
        if (!o) return;
        const l = e.headers || (wi(t) ? t.headers : void 0);
        if (l) if (vh(l)) {
          const f = new Headers(l);
          if (f.get("sentry-trace") || f.set("sentry-trace", o), s && a && !f.get("traceparent") && f.set("traceparent", a), i) {
            const d = f.get("baggage");
            d ? ir(d) || f.set("baggage", `${d},${i}`) : f.set("baggage", i);
          }
          return f;
        } else if (yh(l)) {
          const f = [
            ...l
          ];
          f.find((m) => m[0] === "sentry-trace") || f.push([
            "sentry-trace",
            o
          ]), s && a && !f.find((m) => m[0] === "traceparent") && f.push([
            "traceparent",
            a
          ]);
          const d = l.find((m) => m[0] === "baggage" && typeof m[1] == "string" && ir(m[1]));
          return i && !d && f.push([
            "baggage",
            i
          ]), f;
        } else {
          const f = "sentry-trace" in l ? l["sentry-trace"] : void 0, d = "traceparent" in l ? l.traceparent : void 0, m = "baggage" in l ? l.baggage : void 0, h = m ? Array.isArray(m) ? [
            ...m
          ] : [
            m
          ] : [], _ = m && (Array.isArray(m) ? m.find((b) => ir(b)) : ir(m));
          i && !_ && h.push(i);
          const g = Object.assign({}, l, {
            "sentry-trace": f ?? o,
            baggage: h.length > 0 ? h.join(",") : void 0
          });
          return s && a && !d && (g.traceparent = a), g;
        }
        else return {
          ...r
        };
      }
      function bh(t, e) {
        if (e.response) {
          Ou(t, e.response.status);
          const n = e.response?.headers?.get("content-length");
          if (n) {
            const s = parseInt(n);
            s > 0 && t.setAttribute("http.response_content_length", s);
          }
        } else e.error && t.setStatus({
          code: Ye,
          message: "internal_error"
        });
        t.end();
      }
      function ir(t) {
        return typeof t != "string" ? false : t.split(",").some((e) => e.trim().startsWith(Nr));
      }
      function vh(t) {
        return typeof Headers < "u" && Kt(t, Headers);
      }
      function yh(t) {
        return Array.isArray(t) ? t.every((e) => Array.isArray(e) && e.length === 2 && typeof e[0] == "string") : false;
      }
      function wh(t, e, n) {
        if (t.startsWith("data:")) {
          const o = cn(t);
          return {
            name: `${e} ${o}`,
            attributes: $a(t, void 0, e, n)
          };
        }
        const s = ff(t), r = s ? Wm(s) : t;
        return {
          name: `${e} ${r}`,
          attributes: $a(t, s, e, n)
        };
      }
      function $a(t, e, n, s) {
        const r = {
          url: cn(t),
          type: "fetch",
          "http.method": n,
          [Ge]: s,
          [Rt]: "http.client"
        };
        return e && (uf(e) || (r["http.url"] = cn(e.href), r["server.address"] = e.host), e.search && (r["http.query"] = e.search), e.hash && (r["http.fragment"] = e.hash)), r;
      }
      const Rs = me;
      function kh() {
        return "history" in Rs && !!Rs.history;
      }
      function Sh() {
        if (!("fetch" in Rs)) return false;
        try {
          return new Headers(), new Request("data:,"), new Response(), true;
        } catch {
          return false;
        }
      }
      function $o(t) {
        return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
      }
      function Eh() {
        if (typeof EdgeRuntime == "string") return true;
        if (!Sh()) return false;
        if ($o(Rs.fetch)) return true;
        let t = false;
        const e = Rs.document;
        if (e && typeof e.createElement == "function") try {
          const n = e.createElement("iframe");
          n.hidden = true, e.head.appendChild(n), n.contentWindow?.fetch && (t = $o(n.contentWindow.fetch)), e.head.removeChild(n);
        } catch (n) {
          te && X.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
        }
        return t;
      }
      function Df(t, e) {
        const n = "fetch", s = pn(n, t);
        return mn(n, () => Of(void 0, e)), s;
      }
      function Th(t) {
        const e = "fetch-body-resolved", n = pn(e, t);
        return mn(e, () => Of(Ch)), n;
      }
      function Of(t, e = false) {
        e && !Eh() || pt(me, "fetch", function(n) {
          return function(...s) {
            const r = new Error(), { method: o, url: i } = Ah(s), a = {
              args: s,
              fetchData: {
                method: o,
                url: i
              },
              startTimestamp: We() * 1e3,
              virtualError: r,
              headers: Rh(s)
            };
            return t || wt("fetch", {
              ...a
            }), n.apply(me, s).then(async (l) => (t ? t(l) : wt("fetch", {
              ...a,
              endTimestamp: We() * 1e3,
              response: l
            }), l), (l) => {
              wt("fetch", {
                ...a,
                endTimestamp: We() * 1e3,
                error: l
              }), xr(l) && l.stack === void 0 && (l.stack = r.stack, at(l, "framesToPop", 1));
              const d = ge()?.getOptions().enhanceFetchErrorMessages ?? "always";
              if (d !== false && l instanceof TypeError && (l.message === "Failed to fetch" || l.message === "Load failed" || l.message === "NetworkError when attempting to fetch resource.")) try {
                const _ = new URL(a.fetchData.url).host;
                d === "always" ? l.message = `${l.message} (${_})` : at(l, "__sentry_fetch_url_host__", _);
              } catch {
              }
              throw l;
            });
          };
        });
      }
      async function Ih(t, e) {
        if (t?.body) {
          const n = t.body, s = n.getReader(), r = setTimeout(() => {
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
              const { done: a } = await s.read();
              clearTimeout(i), a && (e(), o = false);
            } catch {
              o = false;
            } finally {
              clearTimeout(i);
            }
          }
          clearTimeout(r), s.releaseLock(), n.cancel().then(null, () => {
          });
        }
      }
      function Ch(t) {
        let e;
        try {
          e = t.clone();
        } catch {
          return;
        }
        Ih(e, () => {
          wt("fetch-body-resolved", {
            endTimestamp: We() * 1e3,
            response: t
          });
        });
      }
      function vr(t, e) {
        return !!t && typeof t == "object" && !!t[e];
      }
      function el(t) {
        return typeof t == "string" ? t : t ? vr(t, "url") ? t.url : t.toString ? t.toString() : "" : "";
      }
      function Ah(t) {
        if (t.length === 0) return {
          method: "GET",
          url: ""
        };
        if (t.length === 2) {
          const [n, s] = t;
          return {
            url: el(n),
            method: vr(s, "method") ? String(s.method).toUpperCase() : wi(n) && vr(n, "method") ? String(n.method).toUpperCase() : "GET"
          };
        }
        const e = t[0];
        return {
          url: el(e),
          method: vr(e, "method") ? String(e.method).toUpperCase() : "GET"
        };
      }
      function Rh(t) {
        const [e, n] = t;
        try {
          if (typeof n == "object" && n !== null && "headers" in n && n.headers) return new Headers(n.headers);
          if (wi(e)) return new Headers(e.headers);
        } catch {
        }
      }
      const fe = me;
      let ei = 0;
      function Mf() {
        return ei > 0;
      }
      function Nh() {
        ei++, setTimeout(() => {
          ei--;
        });
      }
      function ns(t, e = {}) {
        function n(r) {
          return typeof r == "function";
        }
        if (!n(t)) return t;
        try {
          const r = t.__sentry_wrapped__;
          if (r) return typeof r == "function" ? r : t;
          if (Si(t)) return t;
        } catch {
          return t;
        }
        const s = function(...r) {
          try {
            const o = r.map((i) => ns(i, e));
            return t.apply(this, o);
          } catch (o) {
            throw Nh(), Ei((i) => {
              i.addEventProcessor((a) => (e.mechanism && (Uo(a, void 0), $n(a, e.mechanism)), a.extra = {
                ...a.extra,
                arguments: r
              }, a)), e_(o);
            }), o;
          }
        };
        try {
          for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (s[r] = t[r]);
        } catch {
        }
        Cu(s, t), at(t, "__sentry_wrapped__", s);
        try {
          Object.getOwnPropertyDescriptor(s, "name").configurable && Object.defineProperty(s, "name", {
            get() {
              return t.name;
            }
          });
        } catch {
        }
        return s;
      }
      function Pr() {
        const t = Hs(), { referrer: e } = fe.document || {}, { userAgent: n } = fe.navigator || {}, s = {
          ...e && {
            Referer: e
          },
          ...n && {
            "User-Agent": n
          }
        };
        return {
          url: t,
          headers: s
        };
      }
      function Di(t, e) {
        const n = Oi(t, e), s = {
          type: Mh(e),
          value: qh(e)
        };
        return n.length && (s.stacktrace = {
          frames: n
        }), s.type === void 0 && s.value === "" && (s.value = "Unrecoverable error caught"), s;
      }
      function Lh(t, e, n, s) {
        const o = ge()?.getOptions().normalizeDepth, i = Uh(e), a = {
          __serialized__: nf(e, o)
        };
        if (i) return {
          exception: {
            values: [
              Di(t, i)
            ]
          },
          extra: a
        };
        const l = {
          exception: {
            values: [
              {
                type: $r(e) ? e.constructor.name : s ? "UnhandledRejection" : "Error",
                value: Fh(e, {
                  isUnhandledRejection: s
                })
              }
            ]
          },
          extra: a
        };
        if (n) {
          const f = Oi(t, n);
          f.length && (l.exception.values[0].stacktrace = {
            frames: f
          });
        }
        return l;
      }
      function Io(t, e) {
        return {
          exception: {
            values: [
              Di(t, e)
            ]
          }
        };
      }
      function Oi(t, e) {
        const n = e.stacktrace || e.stack || "", s = Dh(e), r = Oh(e);
        try {
          return t(n, s, r);
        } catch {
        }
        return [];
      }
      const Ph = /Minified React error #\d+;/i;
      function Dh(t) {
        return t && Ph.test(t.message) ? 1 : 0;
      }
      function Oh(t) {
        return typeof t.framesToPop == "number" ? t.framesToPop : 0;
      }
      function qf(t) {
        return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? t instanceof WebAssembly.Exception : false;
      }
      function Mh(t) {
        const e = t?.name;
        return !e && qf(t) ? t.message && Array.isArray(t.message) && t.message.length == 2 ? t.message[0] : "WebAssembly.Exception" : e;
      }
      function qh(t) {
        const e = t?.message;
        return qf(t) ? Array.isArray(t.message) && t.message.length == 2 ? t.message[1] : "wasm exception" : e ? e.error && typeof e.error.message == "string" ? Ya(e.error) : Ya(t) : "No error message";
      }
      function Hh(t, e, n, s) {
        const r = n?.syntheticException || void 0, o = Mi(t, e, r, s);
        return $n(o), o.level = "error", n?.event_id && (o.event_id = n.event_id), Ws(o);
      }
      function Bh(t, e, n = "info", s, r) {
        const o = s?.syntheticException || void 0, i = ti(t, e, o, r);
        return i.level = n, s?.event_id && (i.event_id = s.event_id), Ws(i);
      }
      function Mi(t, e, n, s, r) {
        let o;
        if (Eu(e) && e.error) return Io(t, e.error);
        if (fa(e) || Qd(e)) {
          const i = e;
          if ("stack" in e) o = Io(t, e);
          else {
            const a = i.name || (fa(i) ? "DOMError" : "DOMException"), l = i.message ? `${a}: ${i.message}` : a;
            o = ti(t, l, n, s), Uo(o, l);
          }
          return "code" in i && (o.tags = {
            ...o.tags,
            "DOMException.code": `${i.code}`
          }), o;
        }
        return xr(e) ? Io(t, e) : Ss(e) || $r(e) ? (o = Lh(t, e, n, r), $n(o, {
          synthetic: true
        }), o) : (o = ti(t, e, n, s), Uo(o, `${e}`), $n(o, {
          synthetic: true
        }), o);
      }
      function ti(t, e, n, s) {
        const r = {};
        if (s && n) {
          const o = Oi(t, n);
          o.length && (r.exception = {
            values: [
              {
                value: e,
                stacktrace: {
                  frames: o
                }
              }
            ]
          }), $n(r, {
            synthetic: true
          });
        }
        if (yi(e)) {
          const { __sentry_template_string__: o, __sentry_template_values__: i } = e;
          return r.logentry = {
            message: o,
            params: i
          }, r;
        }
        return r.message = e, r;
      }
      function Fh(t, { isUnhandledRejection: e }) {
        const n = np(t), s = e ? "promise rejection" : "exception";
        return Eu(t) ? `Event \`ErrorEvent\` captured as ${s} with message \`${t.message}\`` : $r(t) ? `Event \`${zh(t)}\` (type=${t.type}) captured as ${s}` : `Object captured as ${s} with keys: ${n}`;
      }
      function zh(t) {
        try {
          const e = Object.getPrototypeOf(t);
          return e ? e.constructor.name : void 0;
        } catch {
        }
      }
      function Uh(t) {
        return Object.values(t).find((e) => e instanceof Error);
      }
      class jh extends N_ {
        constructor(e) {
          const n = Wh(e), s = fe.SENTRY_SDK_SOURCE || f_();
          Cf(n, "browser", [
            "browser"
          ], s), n._metadata?.sdk && (n._metadata.sdk.settings = {
            infer_ip: n.sendDefaultPii ? "auto" : "never",
            ...n._metadata.sdk.settings
          }), super(n);
          const { sendDefaultPii: r, sendClientReports: o, enableLogs: i, _experiments: a, enableMetrics: l } = this._options, f = l ?? a?.enableMetrics ?? true;
          fe.document && (o || i || f) && fe.document.addEventListener("visibilitychange", () => {
            fe.document.visibilityState === "hidden" && (o && this._flushOutcomes(), i && Qo(this), f && bf(this));
          }), r && this.on("beforeSendSession", B_);
        }
        eventFromException(e, n) {
          return Hh(this._options.stackParser, e, n, this._options.attachStacktrace);
        }
        eventFromMessage(e, n = "info", s) {
          return Bh(this._options.stackParser, e, n, s, this._options.attachStacktrace);
        }
        _prepareEvent(e, n, s, r) {
          return e.platform = e.platform || "javascript", super._prepareEvent(e, n, s, r);
        }
      }
      function Wh(t) {
        return {
          release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : fe.SENTRY_RELEASE?.id,
          sendClientReports: true,
          parentSpanIsAlwaysRootSpan: true,
          ...t
        };
      }
      const xt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, le = me, Gh = (t, e) => t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good", Gs = (t, e, n, s) => {
        let r, o;
        return (i) => {
          e.value >= 0 && (i || s) && (o = e.value - (r ?? 0), (o || r === void 0) && (r = e.value, e.delta = o, e.rating = Gh(e.value, n), t(e)));
        };
      }, Vs = (t = true) => {
        const e = le.performance?.getEntriesByType?.("navigation")[0];
        if (!t || e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
      }, ls = () => Vs()?.activationStart ?? 0;
      function un(t, e, n) {
        le.document && le.addEventListener(t, e, n);
      }
      function Dr(t, e, n) {
        le.document && le.removeEventListener(t, e, n);
      }
      let Jn = -1;
      const Hf = /* @__PURE__ */ new Set(), Vh = () => le.document?.visibilityState === "hidden" && !le.document?.prerendering ? 0 : 1 / 0, yr = (t) => {
        if (Yh(t) && Jn > -1) {
          if (t.type === "visibilitychange" || t.type === "pagehide") for (const e of Hf) e();
          isFinite(Jn) || (Jn = t.type === "visibilitychange" ? t.timeStamp : 0, Dr("prerenderingchange", yr, true));
        }
      }, Ys = () => {
        if (le.document && Jn < 0) {
          const t = ls();
          Jn = (le.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((n) => n.name === "hidden" && n.startTime > t)[0]?.startTime) ?? Vh(), un("visibilitychange", yr, true), un("pagehide", yr, true), un("prerenderingchange", yr, true);
        }
        return {
          get firstHiddenTime() {
            return Jn;
          },
          onHidden(t) {
            Hf.add(t);
          }
        };
      };
      function Yh(t) {
        return t.type === "pagehide" || le.document?.visibilityState === "hidden";
      }
      const Kh = () => `v5-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`, Ks = (t, e = -1) => {
        const n = Vs();
        let s = "navigate";
        return n && (le.document?.prerendering || ls() > 0 ? s = "prerender" : le.document?.wasDiscarded ? s = "restore" : n.type && (s = n.type.replace(/_/g, "-"))), {
          name: t,
          value: e,
          rating: "good",
          delta: 0,
          entries: [],
          id: Kh(),
          navigationType: s
        };
      }, Co = /* @__PURE__ */ new WeakMap();
      function qi(t, e) {
        try {
          return Co.get(t) || Co.set(t, new e()), Co.get(t);
        } catch {
          return new e();
        }
      }
      class Or {
        constructor() {
          Or.prototype.__init.call(this), Or.prototype.__init2.call(this);
        }
        __init() {
          this._sessionValue = 0;
        }
        __init2() {
          this._sessionEntries = [];
        }
        _processEntry(e) {
          if (e.hadRecentInput) return;
          const n = this._sessionEntries[0], s = this._sessionEntries[this._sessionEntries.length - 1];
          this._sessionValue && n && s && e.startTime - s.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [
            e
          ]), this._onAfterProcessingUnexpectedShift?.(e);
        }
      }
      const cs = (t, e, n = {}) => {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            const s = new PerformanceObserver((r) => {
              Promise.resolve().then(() => {
                e(r.getEntries());
              });
            });
            return s.observe({
              type: t,
              buffered: true,
              ...n
            }), s;
          }
        } catch {
        }
      }, Hi = (t) => {
        let e = false;
        return () => {
          e || (t(), e = true);
        };
      }, so = (t) => {
        le.document?.prerendering ? addEventListener("prerenderingchange", () => t(), true) : t();
      }, Jh = [
        1800,
        3e3
      ], Xh = (t, e = {}) => {
        so(() => {
          const n = Ys(), s = Ks("FCP");
          let r;
          const i = cs("paint", (a) => {
            for (const l of a) l.name === "first-contentful-paint" && (i.disconnect(), l.startTime < n.firstHiddenTime && (s.value = Math.max(l.startTime - ls(), 0), s.entries.push(l), r(true)));
          });
          i && (r = Gs(t, s, Jh, e.reportAllChanges));
        });
      }, Qh = [
        0.1,
        0.25
      ], Zh = (t, e = {}) => {
        Xh(Hi(() => {
          const n = Ks("CLS", 0);
          let s;
          const r = Ys(), o = qi(e, Or), i = (l) => {
            for (const f of l) o._processEntry(f);
            o._sessionValue > n.value && (n.value = o._sessionValue, n.entries = o._sessionEntries, s());
          }, a = cs("layout-shift", i);
          a && (s = Gs(t, n, Qh, e.reportAllChanges), r.onHidden(() => {
            i(a.takeRecords()), s(true);
          }), le?.setTimeout?.(s));
        }));
      };
      let Bf = 0, Ao = 1 / 0, ar = 0;
      const xh = (t) => {
        t.forEach((e) => {
          e.interactionId && (Ao = Math.min(Ao, e.interactionId), ar = Math.max(ar, e.interactionId), Bf = ar ? (ar - Ao) / 7 + 1 : 0);
        });
      };
      let ni;
      const Ff = () => ni ? Bf : performance.interactionCount || 0, $h = () => {
        "interactionCount" in performance || ni || (ni = cs("event", xh, {
          type: "event",
          buffered: true,
          durationThreshold: 0
        }));
      }, Ro = 10;
      let zf = 0;
      const eg = () => Ff() - zf;
      class Mr {
        constructor() {
          Mr.prototype.__init.call(this), Mr.prototype.__init2.call(this);
        }
        __init() {
          this._longestInteractionList = [];
        }
        __init2() {
          this._longestInteractionMap = /* @__PURE__ */ new Map();
        }
        _resetInteractions() {
          zf = Ff(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear();
        }
        _estimateP98LongestInteraction() {
          const e = Math.min(this._longestInteractionList.length - 1, Math.floor(eg() / 50));
          return this._longestInteractionList[e];
        }
        _processEntry(e) {
          if (this._onBeforeProcessingEntry?.(e), !(e.interactionId || e.entryType === "first-input")) return;
          const n = this._longestInteractionList.at(-1);
          let s = this._longestInteractionMap.get(e.interactionId);
          if (s || this._longestInteractionList.length < Ro || e.duration > n._latency) {
            if (s ? e.duration > s._latency ? (s.entries = [
              e
            ], s._latency = e.duration) : e.duration === s._latency && e.startTime === s.entries[0].startTime && s.entries.push(e) : (s = {
              id: e.interactionId,
              entries: [
                e
              ],
              _latency: e.duration
            }, this._longestInteractionMap.set(s.id, s), this._longestInteractionList.push(s)), this._longestInteractionList.sort((r, o) => o._latency - r._latency), this._longestInteractionList.length > Ro) {
              const r = this._longestInteractionList.splice(Ro);
              for (const o of r) this._longestInteractionMap.delete(o.id);
            }
            this._onAfterProcessingINPCandidate?.(s);
          }
        }
      }
      const Uf = (t) => {
        const e = le.requestIdleCallback || le.setTimeout;
        le.document?.visibilityState === "hidden" ? t() : (t = Hi(t), un("visibilitychange", t, {
          once: true,
          capture: true
        }), un("pagehide", t, {
          once: true,
          capture: true
        }), e(() => {
          t(), Dr("visibilitychange", t, {
            capture: true
          }), Dr("pagehide", t, {
            capture: true
          });
        }));
      }, tg = [
        200,
        500
      ], ng = 40, sg = (t, e = {}) => {
        if (!(globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return;
        const n = Ys();
        so(() => {
          $h();
          const s = Ks("INP");
          let r;
          const o = qi(e, Mr), i = (l) => {
            Uf(() => {
              for (const d of l) o._processEntry(d);
              const f = o._estimateP98LongestInteraction();
              f && f._latency !== s.value && (s.value = f._latency, s.entries = f.entries, r());
            });
          }, a = cs("event", i, {
            durationThreshold: e.durationThreshold ?? ng
          });
          r = Gs(t, s, tg, e.reportAllChanges), a && (a.observe({
            type: "first-input",
            buffered: true
          }), n.onHidden(() => {
            i(a.takeRecords()), r(true);
          }));
        });
      };
      class rg {
        _processEntry(e) {
          this._onBeforeProcessingEntry?.(e);
        }
      }
      const og = [
        2500,
        4e3
      ], ig = (t, e = {}) => {
        so(() => {
          const n = Ys(), s = Ks("LCP");
          let r;
          const o = qi(e, rg), i = (l) => {
            e.reportAllChanges || (l = l.slice(-1));
            for (const f of l) o._processEntry(f), f.startTime < n.firstHiddenTime && (s.value = Math.max(f.startTime - ls(), 0), s.entries = [
              f
            ], r());
          }, a = cs("largest-contentful-paint", i);
          if (a) {
            r = Gs(t, s, og, e.reportAllChanges);
            const l = Hi(() => {
              i(a.takeRecords()), a.disconnect(), r(true);
            }), f = (d) => {
              d.isTrusted && (Uf(l), Dr(d.type, f, {
                capture: true
              }));
            };
            for (const d of [
              "keydown",
              "click",
              "visibilitychange"
            ]) un(d, f, {
              capture: true
            });
          }
        });
      }, ag = [
        800,
        1800
      ], si = (t) => {
        le.document?.prerendering ? so(() => si(t)) : le.document?.readyState !== "complete" ? addEventListener("load", () => si(t), true) : setTimeout(t);
      }, lg = (t, e = {}) => {
        const n = Ks("TTFB"), s = Gs(t, n, ag, e.reportAllChanges);
        si(() => {
          const r = Vs();
          r && (n.value = Math.max(r.responseStart - ls(), 0), n.entries = [
            r
          ], s(true));
        });
      }, hs = {}, qr = {};
      let jf, Wf, Gf, Vf;
      function Bi(t, e = false) {
        return ro("cls", t, ug, jf, e);
      }
      function Fi(t, e = false) {
        return ro("lcp", t, fg, Wf, e);
      }
      function cg(t) {
        return ro("ttfb", t, dg, Gf);
      }
      function Yf(t) {
        return ro("inp", t, pg, Vf);
      }
      function Ns(t, e) {
        return Kf(t, e), qr[t] || (mg(t), qr[t] = true), Jf(t, e);
      }
      function Js(t, e) {
        const n = hs[t];
        if (n?.length) for (const s of n) try {
          s(e);
        } catch (r) {
          xt && X.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Yt(s)}
Error:`, r);
        }
      }
      function ug() {
        return Zh((t) => {
          Js("cls", {
            metric: t
          }), jf = t;
        }, {
          reportAllChanges: true
        });
      }
      function fg() {
        return ig((t) => {
          Js("lcp", {
            metric: t
          }), Wf = t;
        }, {
          reportAllChanges: true
        });
      }
      function dg() {
        return lg((t) => {
          Js("ttfb", {
            metric: t
          }), Gf = t;
        });
      }
      function pg() {
        return sg((t) => {
          Js("inp", {
            metric: t
          }), Vf = t;
        });
      }
      function ro(t, e, n, s, r = false) {
        Kf(t, e);
        let o;
        return qr[t] || (o = n(), qr[t] = true), s && e({
          metric: s
        }), Jf(t, e, r ? o : void 0);
      }
      function mg(t) {
        const e = {};
        t === "event" && (e.durationThreshold = 0), cs(t, (n) => {
          Js(t, {
            entries: n
          });
        }, e);
      }
      function Kf(t, e) {
        hs[t] = hs[t] || [], hs[t].push(e);
      }
      function Jf(t, e, n) {
        return () => {
          n && n();
          const s = hs[t];
          if (!s) return;
          const r = s.indexOf(e);
          r !== -1 && s.splice(r, 1);
        };
      }
      function _g(t) {
        return "duration" in t;
      }
      const hg = (t) => {
        const e = (n) => {
          (n.type === "pagehide" || le.document?.visibilityState === "hidden") && t(n);
        };
        un("visibilitychange", e, {
          capture: true,
          once: true
        }), un("pagehide", e, {
          capture: true,
          once: true
        });
      };
      function No(t) {
        return typeof t == "number" && isFinite(t);
      }
      function dn(t, e, n, { ...s }) {
        const r = ve(t).start_timestamp;
        return r && r > e && typeof t.updateStartTime == "function" && t.updateStartTime(e), of(t, () => {
          const o = Bn({
            startTime: e,
            ...s
          });
          return o && o.end(n), o;
        });
      }
      function zi(t) {
        const e = ge();
        if (!e) return;
        const { name: n, transaction: s, attributes: r, startTime: o } = t, { release: i, environment: a, sendDefaultPii: l } = e.getOptions(), d = e.getIntegrationByName("Replay")?.getReplayId(), m = ke(), h = m.getUser(), _ = h !== void 0 ? h.email || h.id || h.ip_address : void 0;
        let g;
        try {
          g = m.getScopeData().contexts.profile.profile_id;
        } catch {
        }
        const b = {
          release: i,
          environment: a,
          user: _ || void 0,
          profile_id: g || void 0,
          replay_id: d || void 0,
          transaction: s,
          "user_agent.original": le.navigator?.userAgent,
          "client.address": l ? "{{auto}}" : void 0,
          ...r
        };
        return Bn({
          name: n,
          attributes: b,
          startTime: o,
          experimental: {
            standalone: true
          }
        });
      }
      function Xs() {
        return le.addEventListener && le.performance;
      }
      function Ee(t) {
        return t / 1e3;
      }
      function gg(t) {
        let e = "unknown", n = "unknown", s = "";
        for (const r of t) {
          if (r === "/") {
            [e, n] = t.split("/");
            break;
          }
          if (!isNaN(Number(r))) {
            e = s === "h" ? "http" : s, n = t.split(s)[1];
            break;
          }
          s += r;
        }
        return s === t && (e = s), {
          name: e,
          version: n
        };
      }
      function oo(t) {
        try {
          return PerformanceObserver.supportedEntryTypes.includes(t);
        } catch {
          return false;
        }
      }
      function io(t, e) {
        let n, s = false;
        function r(a) {
          !s && n && e(a, n.spanContext().spanId, n), s = true;
        }
        hg(() => {
          r("pagehide");
        });
        const o = t.on("beforeStartNavigationSpan", (a, l) => {
          l?.isRedirect || (r("navigation"), o(), i());
        }), i = t.on("afterStartPageLoadSpan", (a) => {
          n = a, i();
        });
      }
      function bg(t) {
        let e = 0, n;
        if (!oo("layout-shift")) return;
        const s = Bi(({ metric: r }) => {
          const o = r.entries[r.entries.length - 1];
          o && (e = r.value, n = o);
        }, true);
        io(t, (r, o) => {
          vg(e, n, o, r), s();
        });
      }
      function vg(t, e, n, s) {
        xt && X.log(`Sending CLS span (${t})`);
        const r = e ? Ee(($e() || 0) + e.startTime) : We(), o = ke().getScopeData().transactionName, i = e ? Xe(e.sources[0]?.node) : "Layout shift", a = {
          [Ge]: "auto.http.browser.cls",
          [Rt]: "ui.webvital.cls",
          [_n]: 0,
          "sentry.pageload.span_id": n,
          "sentry.report_event": s
        };
        e?.sources && e.sources.forEach((f, d) => {
          a[`cls.source.${d + 1}`] = Xe(f.node);
        });
        const l = zi({
          name: i,
          transaction: o,
          attributes: a,
          startTime: r
        });
        l && (l.addEvent("cls", {
          [Us]: "",
          [js]: t
        }), l.end(r));
      }
      const yg = 6e4;
      function Qs(t) {
        return t != null && t > 0 && t <= yg;
      }
      function wg(t) {
        let e = 0, n;
        if (!oo("largest-contentful-paint")) return;
        const s = Fi(({ metric: r }) => {
          const o = r.entries[r.entries.length - 1];
          !o || !Qs(r.value) || (e = r.value, n = o);
        }, true);
        io(t, (r, o) => {
          kg(e, n, o, r), s();
        });
      }
      function kg(t, e, n, s) {
        if (!Qs(t)) return;
        xt && X.log(`Sending LCP span (${t})`);
        const r = Ee(($e() || 0) + (e?.startTime || 0)), o = ke().getScopeData().transactionName, i = e ? Xe(e.element) : "Largest contentful paint", a = {
          [Ge]: "auto.http.browser.lcp",
          [Rt]: "ui.webvital.lcp",
          [_n]: 0,
          "sentry.pageload.span_id": n,
          "sentry.report_event": s
        };
        e && (e.element && (a["lcp.element"] = Xe(e.element)), e.id && (a["lcp.id"] = e.id), e.url && (a["lcp.url"] = e.url), e.loadTime != null && (a["lcp.loadTime"] = e.loadTime), e.renderTime != null && (a["lcp.renderTime"] = e.renderTime), e.size != null && (a["lcp.size"] = e.size));
        const l = zi({
          name: i,
          transaction: o,
          attributes: a,
          startTime: r
        });
        l && (l.addEvent("lcp", {
          [Us]: "millisecond",
          [js]: t
        }), l.end(r));
      }
      function yt(t) {
        return t && (($e() || performance.timeOrigin) + t) / 1e3;
      }
      function Xf(t) {
        const e = {};
        if (t.nextHopProtocol != null) {
          const { name: n, version: s } = gg(t.nextHopProtocol);
          e["network.protocol.version"] = s, e["network.protocol.name"] = n;
        }
        return $e() || Xs()?.timeOrigin ? Sg({
          ...e,
          "http.request.redirect_start": yt(t.redirectStart),
          "http.request.redirect_end": yt(t.redirectEnd),
          "http.request.worker_start": yt(t.workerStart),
          "http.request.fetch_start": yt(t.fetchStart),
          "http.request.domain_lookup_start": yt(t.domainLookupStart),
          "http.request.domain_lookup_end": yt(t.domainLookupEnd),
          "http.request.connect_start": yt(t.connectStart),
          "http.request.secure_connection_start": yt(t.secureConnectionStart),
          "http.request.connection_end": yt(t.connectEnd),
          "http.request.request_start": yt(t.requestStart),
          "http.request.response_start": yt(t.responseStart),
          "http.request.response_end": yt(t.responseEnd),
          "http.request.time_to_first_byte": t.responseStart != null ? t.responseStart / 1e3 : void 0
        }) : e;
      }
      function Sg(t) {
        return Object.fromEntries(Object.entries(t).filter(([, e]) => e != null));
      }
      const Eg = 2147483647;
      let tl = 0, nt = {}, it, Hr;
      function Tg({ recordClsStandaloneSpans: t, recordLcpStandaloneSpans: e, client: n }) {
        const s = Xs();
        if (s && $e()) {
          s.mark && le.performance.mark("sentry-tracing-init");
          const r = e ? wg(n) : e === false ? Ng() : void 0, o = t ? bg(n) : t === false ? Rg() : void 0, i = Lg();
          return () => {
            i(), r?.(), o?.();
          };
        }
        return () => {
        };
      }
      function Ig() {
        Ns("longtask", ({ entries: t }) => {
          const e = _t();
          if (!e) return;
          const { op: n, start_timestamp: s } = ve(e);
          for (const r of t) {
            const o = Ee($e() + r.startTime), i = Ee(r.duration);
            n === "navigation" && s && o < s || dn(e, o, o + i, {
              name: "Main UI thread blocked",
              op: "ui.long-task",
              attributes: {
                [Ge]: "auto.ui.browser.metrics"
              }
            });
          }
        });
      }
      function Cg() {
        new PerformanceObserver((e) => {
          const n = _t();
          if (n) for (const s of e.getEntries()) {
            if (!s.scripts[0]) continue;
            const r = Ee($e() + s.startTime), { start_timestamp: o, op: i } = ve(n);
            if (i === "navigation" && o && r < o) continue;
            const a = Ee(s.duration), l = {
              [Ge]: "auto.ui.browser.metrics"
            }, f = s.scripts[0], { invoker: d, invokerType: m, sourceURL: h, sourceFunctionName: _, sourceCharPosition: g } = f;
            l["browser.script.invoker"] = d, l["browser.script.invoker_type"] = m, h && (l["code.filepath"] = h), _ && (l["code.function"] = _), g !== -1 && (l["browser.script.source_char_position"] = g), dn(n, r, r + a, {
              name: "Main UI thread blocked",
              op: "ui.long-animation-frame",
              attributes: l
            });
          }
        }).observe({
          type: "long-animation-frame",
          buffered: true
        });
      }
      function Ag() {
        Ns("event", ({ entries: t }) => {
          const e = _t();
          if (e) {
            for (const n of t) if (n.name === "click") {
              const s = Ee($e() + n.startTime), r = Ee(n.duration), o = {
                name: Xe(n.target),
                op: `ui.interaction.${n.name}`,
                startTime: s,
                attributes: {
                  [Ge]: "auto.ui.browser.metrics"
                }
              }, i = Iu(n.target);
              i && (o.attributes["ui.component_name"] = i), dn(e, s, s + r, o);
            }
          }
        });
      }
      function Rg() {
        return Bi(({ metric: t }) => {
          const e = t.entries[t.entries.length - 1];
          e && (nt.cls = {
            value: t.value,
            unit: ""
          }, Hr = e);
        }, true);
      }
      function Ng() {
        return Fi(({ metric: t }) => {
          const e = t.entries[t.entries.length - 1];
          !e || !Qs(t.value) || (nt.lcp = {
            value: t.value,
            unit: "millisecond"
          }, it = e);
        }, true);
      }
      function Lg() {
        return cg(({ metric: t }) => {
          t.entries[t.entries.length - 1] && (nt.ttfb = {
            value: t.value,
            unit: "millisecond"
          });
        });
      }
      function Pg(t, e) {
        const n = Xs(), s = $e();
        if (!n?.getEntries || !s) return;
        const { spanStreamingEnabled: r, ignorePerformanceApiSpans: o, ignoreResourceSpans: i, recordClsOnPageloadSpan: a, recordLcpOnPageloadSpan: l } = e, f = Ee(s), d = n.getEntries(), { op: m, start_timestamp: h } = ve(t);
        if (d.slice(tl).forEach((_) => {
          const g = Ee(_.startTime), b = Ee(Math.max(0, _.duration));
          if (!(m === "navigation" && h && f + g < h)) switch (_.entryType) {
            case "navigation": {
              qg(t, _, f);
              break;
            }
            case "mark":
            case "paint":
            case "measure": {
              Og(t, _, g, b, f, o);
              const v = Ys(), w = _.startTime < v.firstHiddenTime;
              _.name === "first-paint" && w && (nt.fp = {
                value: _.startTime,
                unit: "millisecond"
              }), _.name === "first-contentful-paint" && w && (nt.fcp = {
                value: _.startTime,
                unit: "millisecond"
              });
              break;
            }
            case "resource": {
              Fg(t, _, _.name, g, b, f, i);
              break;
            }
          }
        }), tl = Math.max(d.length - 1, 0), zg(t, r), m === "pageload") {
          if (Wg(nt), r) {
            const _ = (g, b, v) => {
              const w = v ?? `browser.web_vital.${g}.value`;
              t.setAttribute(w, b), xt && X.log("Setting web vital attribute", {
                [w]: b
              }, "on pageload span");
            };
            [
              "ttfb",
              "fp",
              "fcp"
            ].forEach((g) => {
              nt[g] && _(g, nt[g].value);
            }), nt["ttfb.requestTime"] && _("ttfb.requestTime", nt["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time");
          } else a || delete nt.cls, l || delete nt.lcp, Object.entries(nt).forEach(([_, g]) => {
            wm(_, g.value, g.unit);
          }), Ug(t, e);
          t.setAttribute(r ? "browser.performance.time_origin" : "performance.timeOrigin", f), t.setAttribute(r ? "browser.performance.navigation.activation_start" : "performance.activationStart", ls());
        }
        it = void 0, Hr = void 0, nt = {};
      }
      function Dg(t) {
        if (t?.entryType === "measure") try {
          return t.detail.devtools.track === "Components \u269B";
        } catch {
          return;
        }
      }
      function Og(t, e, n, s, r, o) {
        if (Dg(e) || [
          "mark",
          "measure"
        ].includes(e.entryType) && ln(e.name, o)) return;
        const i = Vs(false), a = Ee(i ? i.requestStart : 0), l = r + Math.max(n, a), f = r + n, d = f + s, m = {
          [Ge]: "auto.resource.browser.metrics"
        };
        l !== f && (m["sentry.browser.measure_happened_before_request"] = true, m["sentry.browser.measure_start_time"] = l), Mg(m, e), l <= d && dn(t, l, d, {
          name: e.name,
          op: e.entryType,
          attributes: m
        });
      }
      function Mg(t, e) {
        try {
          const n = e.detail;
          if (!n) return;
          if (typeof n == "object") {
            for (const [s, r] of Object.entries(n)) if (r && xn(r)) t[`sentry.browser.measure.detail.${s}`] = r;
            else if (r !== void 0) try {
              t[`sentry.browser.measure.detail.${s}`] = JSON.stringify(r);
            } catch {
            }
            return;
          }
          if (xn(n)) {
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
      function qg(t, e, n) {
        [
          "unloadEvent",
          "redirect",
          "domContentLoadedEvent",
          "loadEvent",
          "connect"
        ].forEach((s) => {
          lr(t, e, s, n);
        }), lr(t, e, "secureConnection", n, "TLS/SSL"), lr(t, e, "fetch", n, "cache"), lr(t, e, "domainLookup", n, "DNS"), Bg(t, e, n);
      }
      function lr(t, e, n, s, r = n) {
        const o = Hg(n), i = e[o], a = e[`${n}Start`];
        !a || !i || dn(t, s + Ee(a), s + Ee(i), {
          op: `browser.${r}`,
          name: e.name,
          attributes: {
            [Ge]: "auto.ui.browser.metrics",
            ...n === "redirect" && e.redirectCount != null ? {
              "http.redirect_count": e.redirectCount
            } : {}
          }
        });
      }
      function Hg(t) {
        return t === "secureConnection" ? "connectEnd" : t === "fetch" ? "domainLookupStart" : `${t}End`;
      }
      function Bg(t, e, n) {
        const s = n + Ee(e.requestStart), r = n + Ee(e.responseEnd), o = n + Ee(e.responseStart);
        e.responseEnd && (dn(t, s, r, {
          op: "browser.request",
          name: e.name,
          attributes: {
            [Ge]: "auto.ui.browser.metrics"
          }
        }), dn(t, o, r, {
          op: "browser.response",
          name: e.name,
          attributes: {
            [Ge]: "auto.ui.browser.metrics"
          }
        }));
      }
      function Fg(t, e, n, s, r, o, i) {
        if (e.initiatorType === "xmlhttprequest" || e.initiatorType === "fetch") return;
        const a = e.initiatorType ? `resource.${e.initiatorType}` : "resource.other";
        if (i?.includes(a)) return;
        const l = {
          [Ge]: "auto.resource.browser.metrics"
        }, f = An(n);
        f.protocol && (l["url.scheme"] = f.protocol.split(":").pop()), f.host && (l["server.address"] = f.host), l["url.same_origin"] = n.includes(le.location.origin), jg(e, l, [
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
        const d = {
          ...l,
          ...Xf(e)
        }, m = o + s, h = m + r;
        dn(t, m, h, {
          name: n.replace(le.location.origin, ""),
          op: a,
          attributes: d
        });
      }
      function zg(t, e) {
        const n = le.navigator;
        if (!n) return;
        const s = n.connection;
        s && (s.effectiveType && t.setAttribute(e ? "network.connection.effective_type" : "effectiveConnectionType", s.effectiveType), s.type && t.setAttribute(e ? "network.connection.type" : "connectionType", s.type), No(s.rtt) && (nt["connection.rtt"] = {
          value: s.rtt,
          unit: "millisecond"
        }, e && t.setAttribute("network.connection.rtt", s.rtt))), No(n.deviceMemory) && (e ? t.setAttribute("device.memory.estimated_capacity", n.deviceMemory) : t.setAttribute("deviceMemory", `${n.deviceMemory} GB`)), No(n.hardwareConcurrency) && (e ? t.setAttribute("device.processor_count", n.hardwareConcurrency) : t.setAttribute("hardwareConcurrency", String(n.hardwareConcurrency)));
      }
      function Ug(t, e) {
        it && e.recordLcpOnPageloadSpan && (it.element && t.setAttribute("lcp.element", Xe(it.element)), it.id && t.setAttribute("lcp.id", it.id), it.url && t.setAttribute("lcp.url", it.url.trim().slice(0, 200)), it.loadTime != null && t.setAttribute("lcp.loadTime", it.loadTime), it.renderTime != null && t.setAttribute("lcp.renderTime", it.renderTime), t.setAttribute("lcp.size", it.size)), Hr?.sources && e.recordClsOnPageloadSpan && Hr.sources.forEach((n, s) => t.setAttribute(`cls.source.${s + 1}`, Xe(n.node)));
      }
      function jg(t, e, n) {
        n.forEach(([s, r]) => {
          const o = t[s];
          o != null && (typeof o == "number" && o < Eg || typeof o == "string") && (e[r] = o);
        });
      }
      function Wg(t) {
        const e = Vs(false);
        if (!e) return;
        const { responseStart: n, requestStart: s } = e;
        s <= n && (t["ttfb.requestTime"] = {
          value: n - s,
          unit: "millisecond"
        });
      }
      const Lo = [], gs = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map(), Qf = 60;
      function Gg() {
        if (Xs() && $e()) {
          const e = Vg();
          return () => {
            e();
          };
        }
        return () => {
        };
      }
      const Ls = {
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
      function Vg() {
        return Yf(Yg);
      }
      const Yg = ({ metric: t }) => {
        if (t.value == null) return;
        const e = Ee(t.value);
        if (e > Qf) return;
        const n = t.entries.find((g) => g.duration === t.value && Ls[g.name]);
        if (!n) return;
        const { interactionId: s } = n, r = Ls[n.name], o = Ee($e() + n.startTime), i = _t(), a = i ? Ze(i) : void 0, l = s != null ? gs.get(s) : void 0, f = l?.span || a, d = f ? ve(f).description : ke().getScopeData().transactionName, m = l?.elementName || Xe(n.target), h = {
          [Ge]: "auto.http.browser.inp",
          [Rt]: `ui.interaction.${r}`,
          [_n]: n.duration
        }, _ = zi({
          name: m,
          transaction: d,
          attributes: h,
          startTime: o
        });
        _ && (_.addEvent("inp", {
          [Us]: "millisecond",
          [js]: t.value
        }), _.end(o + e));
      };
      function Kg(t) {
        return t != null ? gs.get(t) : void 0;
      }
      function Jg() {
        const t = Object.keys(Ls);
        Ni() && t.forEach((r) => {
          le.addEventListener(r, e, {
            capture: true,
            passive: true
          });
        });
        function e(r) {
          const o = r.target;
          if (!o) return;
          const i = Xe(o), a = Math.round(r.timeStamp);
          if (Un.set(a, i), Un.size > 50) {
            const l = Un.keys().next().value;
            l !== void 0 && Un.delete(l);
          }
        }
        function n(r) {
          const o = Math.round(r.startTime);
          let i = Un.get(o);
          if (!i) for (let a = -5; a <= 5; a++) {
            const l = Un.get(o + a);
            if (l) {
              i = l;
              break;
            }
          }
          return i || "<unknown>";
        }
        const s = ({ entries: r }) => {
          const o = _t(), i = o && Ze(o);
          r.forEach((a) => {
            if (!_g(a)) return;
            const l = a.interactionId;
            if (l == null || gs.has(l)) return;
            const f = a.target ? Xe(a.target) : n(a);
            if (Lo.length > 10) {
              const d = Lo.shift();
              gs.delete(d);
            }
            Lo.push(l), gs.set(l, {
              span: i,
              elementName: f
            });
          });
        };
        Ns("event", s), Ns("first-input", s);
      }
      function Ui(t) {
        const { name: e, op: n, origin: s, metricName: r, value: o, attributes: i, parentSpan: a, reportEvent: l, startTime: f, endTime: d } = t, m = ke().getScopeData().transactionName, h = {
          [Ge]: s,
          [Rt]: n,
          [_n]: 0,
          [`browser.web_vital.${r}.value`]: o,
          "sentry.transaction": m,
          "user_agent.original": le.navigator?.userAgent,
          ...i
        };
        a && Vu(a).attributes?.[Rt] === "pageload" && (h["sentry.pageload.span_id"] = a.spanContext().spanId), l && (h[`browser.web_vital.${r}.report_event`] = l);
        const _ = Bn({
          name: e,
          attributes: h,
          startTime: f,
          parentSpan: a
        });
        _ && _.end(d ?? f);
      }
      function Xg(t) {
        let e = 0, n;
        if (!oo("largest-contentful-paint")) return;
        const s = Fi(({ metric: r }) => {
          const o = r.entries[r.entries.length - 1];
          !o || !Qs(r.value) || (e = r.value, n = o);
        }, true);
        io(t, (r, o, i) => {
          Qg(e, n, i, r), s();
        });
      }
      function Qg(t, e, n, s) {
        if (!Qs(t)) return;
        xt && X.log(`Sending LCP span (${t})`);
        const r = $e() || 0, o = Ee(r), i = Ee(r + (e?.startTime || 0)), a = e ? Xe(e.element) : "Largest contentful paint", l = {};
        e?.element && (l["browser.web_vital.lcp.element"] = Xe(e.element)), e?.id && (l["browser.web_vital.lcp.id"] = e.id), e?.url && (l["browser.web_vital.lcp.url"] = e.url), e?.loadTime != null && (l["browser.web_vital.lcp.load_time"] = e.loadTime), e?.renderTime != null && (l["browser.web_vital.lcp.render_time"] = e.renderTime), e?.size != null && (l["browser.web_vital.lcp.size"] = e.size), Ui({
          name: a,
          op: "ui.webvital.lcp",
          origin: "auto.http.browser.lcp",
          metricName: "lcp",
          value: t,
          attributes: l,
          parentSpan: n,
          reportEvent: s,
          startTime: o,
          endTime: i
        });
      }
      function Zg(t) {
        let e = 0, n;
        if (!oo("layout-shift")) return;
        const s = Bi(({ metric: r }) => {
          const o = r.entries[r.entries.length - 1];
          o && (e = r.value, n = o);
        }, true);
        io(t, (r, o, i) => {
          xg(e, n, i, r), s();
        });
      }
      function xg(t, e, n, s) {
        xt && X.log(`Sending CLS span (${t})`);
        const r = e ? Ee(($e() || 0) + e.startTime) : We(), o = e ? Xe(e.sources[0]?.node) : "Layout shift", i = {};
        e?.sources && e.sources.forEach((a, l) => {
          i[`browser.web_vital.cls.source.${l + 1}`] = Xe(a.node);
        }), Ui({
          name: o,
          op: "ui.webvital.cls",
          origin: "auto.http.browser.cls",
          metricName: "cls",
          value: t,
          attributes: i,
          parentSpan: n,
          reportEvent: s,
          startTime: r
        });
      }
      function $g() {
        if (!Xs() || !$e()) return;
        Yf(({ metric: n }) => {
          if (n.value == null || Ee(n.value) > Qf) return;
          const r = n.entries.find((o) => o.duration === n.value && Ls[o.name]);
          r && eb(n.value, r);
        });
      }
      function eb(t, e) {
        xt && X.log(`Sending INP span (${t})`);
        const n = Ee($e() + e.startTime), s = Ee(t), r = Ls[e.name], o = Kg(e.interactionId), i = _t(), a = i ? Ze(i) : void 0, l = o?.span || a, f = l ? Vu(l).name : ke().getScopeData().transactionName, d = o?.elementName || Xe(e.target);
        Ui({
          name: d,
          op: `ui.interaction.${r}`,
          origin: "auto.http.browser.inp",
          metricName: "inp",
          value: t,
          attributes: {
            [_n]: e.duration,
            "sentry.transaction": f
          },
          startTime: n,
          endTime: n + s,
          parentSpan: l
        });
      }
      const tb = 1e3;
      let nl, ri, oi;
      function nb(t) {
        const e = "dom";
        pn(e, t), mn(e, sb);
      }
      function sb() {
        if (!le.document) return;
        const t = wt.bind(null, "dom"), e = sl(t, true);
        le.document.addEventListener("click", e, false), le.document.addEventListener("keypress", e, false), [
          "EventTarget",
          "Node"
        ].forEach((n) => {
          const r = le[n]?.prototype;
          r?.hasOwnProperty?.("addEventListener") && (pt(r, "addEventListener", function(o) {
            return function(i, a, l) {
              if (i === "click" || i == "keypress") try {
                const f = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, d = f[i] = f[i] || {
                  refCount: 0
                };
                if (!d.handler) {
                  const m = sl(t);
                  d.handler = m, o.call(this, i, m, l);
                }
                d.refCount++;
              } catch {
              }
              return o.call(this, i, a, l);
            };
          }), pt(r, "removeEventListener", function(o) {
            return function(i, a, l) {
              if (i === "click" || i == "keypress") try {
                const f = this.__sentry_instrumentation_handlers__ || {}, d = f[i];
                d && (d.refCount--, d.refCount <= 0 && (o.call(this, i, d.handler, l), d.handler = void 0, delete f[i]), Object.keys(f).length === 0 && delete this.__sentry_instrumentation_handlers__);
              } catch {
              }
              return o.call(this, i, a, l);
            };
          }));
        });
      }
      function rb(t) {
        if (t.type !== ri) return false;
        try {
          if (!t.target || t.target._sentryId !== oi) return false;
        } catch {
        }
        return true;
      }
      function ob(t, e) {
        return t !== "keypress" ? false : e?.tagName ? !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) : true;
      }
      function sl(t, e = false) {
        return (n) => {
          if (!n || n._sentryCaptured) return;
          const s = ib(n);
          if (ob(n.type, s)) return;
          at(n, "_sentryCaptured", true), s && !s._sentryId && at(s, "_sentryId", kt());
          const r = n.type === "keypress" ? "input" : n.type;
          rb(n) || (t({
            event: n,
            name: r,
            global: e
          }), ri = n.type, oi = s ? s._sentryId : void 0), clearTimeout(nl), nl = le.setTimeout(() => {
            oi = void 0, ri = void 0;
          }, tb);
        };
      }
      function ib(t) {
        try {
          return t.target;
        } catch {
          return null;
        }
      }
      let cr;
      function ji(t) {
        const e = "history";
        pn(e, t), mn(e, ab);
      }
      function ab() {
        if (le.addEventListener("popstate", () => {
          const e = le.location.href, n = cr;
          if (cr = e, n === e) return;
          wt("history", {
            from: n,
            to: e
          });
        }), !kh()) return;
        function t(e) {
          return function(...n) {
            const s = n.length > 2 ? n[2] : void 0;
            if (s) {
              const r = cr, o = lb(String(s));
              if (cr = o, r === o) return e.apply(this, n);
              wt("history", {
                from: r,
                to: o
              });
            }
            return e.apply(this, n);
          };
        }
        pt(le.history, "pushState", t), pt(le.history, "replaceState", t);
      }
      function lb(t) {
        try {
          return new URL(t, le.location.origin).toString();
        } catch {
          return t;
        }
      }
      const wr = {};
      function cb(t) {
        const e = wr[t];
        if (e) return e;
        let n = le[t];
        if ($o(n)) return wr[t] = n.bind(le);
        const s = le.document;
        if (s && typeof s.createElement == "function") try {
          const r = s.createElement("iframe");
          r.hidden = true, s.head.appendChild(r);
          const o = r.contentWindow;
          o?.[t] && (n = o[t]), s.head.removeChild(r);
        } catch (r) {
          xt && X.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, r);
        }
        return n && (wr[t] = n.bind(le));
      }
      function ub(t) {
        wr[t] = void 0;
      }
      const Kn = "__sentry_xhr_v3__";
      function Zf(t) {
        const e = "xhr";
        pn(e, t), mn(e, fb);
      }
      function fb() {
        if (!le.XMLHttpRequest) return;
        const t = XMLHttpRequest.prototype;
        t.open = new Proxy(t.open, {
          apply(e, n, s) {
            const r = new Error(), o = We() * 1e3, i = Wt(s[0]) ? s[0].toUpperCase() : void 0, a = db(s[1]);
            if (!i || !a) return e.apply(n, s);
            n[Kn] = {
              method: i,
              url: a,
              request_headers: {}
            }, i === "POST" && a.match(/sentry_key/) && (n.__sentry_own_request__ = true);
            const l = () => {
              const f = n[Kn];
              if (f && n.readyState === 4) {
                try {
                  f.status_code = n.status;
                } catch {
                }
                const d = {
                  endTimestamp: We() * 1e3,
                  startTimestamp: o,
                  xhr: n,
                  virtualError: r
                };
                wt("xhr", d);
              }
            };
            return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(f, d, m) {
                return l(), f.apply(d, m);
              }
            }) : n.addEventListener("readystatechange", l), n.setRequestHeader = new Proxy(n.setRequestHeader, {
              apply(f, d, m) {
                const [h, _] = m, g = d[Kn];
                return g && Wt(h) && Wt(_) && (g.request_headers[h.toLowerCase()] = _), f.apply(d, m);
              }
            }), e.apply(n, s);
          }
        }), t.send = new Proxy(t.send, {
          apply(e, n, s) {
            const r = n[Kn];
            if (!r) return e.apply(n, s);
            s[0] !== void 0 && (r.body = s[0]);
            const o = {
              startTimestamp: We() * 1e3,
              xhr: n
            };
            return wt("xhr", o), e.apply(n, s);
          }
        });
      }
      function db(t) {
        if (Wt(t)) return t;
        try {
          return t.toString();
        } catch {
        }
      }
      function pb(t) {
        let e;
        try {
          e = t.getAllResponseHeaders();
        } catch (n) {
          return xt && X.error(n, "Failed to get xhr response headers", t), {};
        }
        return e ? e.split(`\r
`).reduce((n, s) => {
          const [r, o] = s.split(": ");
          return o && (n[r.toLowerCase()] = o), n;
        }, {}) : {};
      }
      const mb = 40;
      function _b(t, e = cb("fetch")) {
        let n = 0, s = 0;
        async function r(o) {
          const i = o.body.length;
          n += i, s++;
          const a = {
            body: o.body,
            method: "POST",
            referrerPolicy: "strict-origin",
            headers: t.headers,
            keepalive: n <= 6e4 && s < 15,
            ...t.fetchOptions
          };
          try {
            const l = await e(t.url, a);
            return {
              statusCode: l.status,
              headers: {
                "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": l.headers.get("Retry-After")
              }
            };
          } catch (l) {
            throw ub("fetch"), l;
          } finally {
            n -= i, s--;
          }
        }
        return T_(t, r, Pi(t.bufferSize || mb));
      }
      const mt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, hb = 30, gb = 50;
      function ii(t, e, n, s) {
        const r = {
          filename: t,
          function: e === "<anonymous>" ? Rn : e,
          in_app: true
        };
        return n !== void 0 && (r.lineno = n), s !== void 0 && (r.colno = s), r;
      }
      const bb = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, vb = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, yb = /\((\S*)(?::(\d+))(?::(\d+))\)/, wb = /at (.+?) ?\(data:(.+?),/, kb = (t) => {
        const e = t.match(wb);
        if (e) return {
          filename: `<data:${e[2]}>`,
          function: e[1]
        };
        const n = bb.exec(t);
        if (n) {
          const [, r, o, i] = n;
          return ii(r, Rn, +o, +i);
        }
        const s = vb.exec(t);
        if (s) {
          if (s[2]?.indexOf("eval") === 0) {
            const a = yb.exec(s[2]);
            a && (s[2] = a[1], s[3] = a[2], s[4] = a[3]);
          }
          const [o, i] = xf(s[1] || Rn, s[2]);
          return ii(i, o, s[3] ? +s[3] : void 0, s[4] ? +s[4] : void 0);
        }
      }, Sb = [
        hb,
        kb
      ], Eb = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Tb = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Ib = (t) => {
        const e = Eb.exec(t);
        if (e) {
          if (e[3] && e[3].indexOf(" > eval") > -1) {
            const o = Tb.exec(e[3]);
            o && (e[1] = e[1] || "eval", e[3] = o[1], e[4] = o[2], e[5] = "");
          }
          let s = e[3], r = e[1] || Rn;
          return [r, s] = xf(r, s), ii(s, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
        }
      }, Cb = [
        gb,
        Ib
      ], Ab = [
        Sb,
        Cb
      ], Rb = vu(...Ab), xf = (t, e) => {
        const n = t.indexOf("safari-extension") !== -1, s = t.indexOf("safari-web-extension") !== -1;
        return n || s ? [
          t.indexOf("@") !== -1 ? t.split("@")[0] : Rn,
          n ? `safari-extension:${e}` : `safari-web-extension:${e}`
        ] : [
          t,
          e
        ];
      }, ur = 1024, Nb = "Breadcrumbs", Lb = (t = {}) => {
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
          name: Nb,
          setup(n) {
            e.console && sh(Mb(n)), e.dom && nb(Ob(n, e.dom)), e.xhr && Zf(qb(n)), e.fetch && Df(Hb(n)), e.history && ji(Bb(n)), e.sentry && n.on("beforeSendEvent", Db(n));
          }
        };
      }, Pb = Lb;
      function Db(t) {
        return function(n) {
          ge() === t && Nn({
            category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
            event_id: n.event_id,
            level: n.level,
            message: kn(n)
          }, {
            event: n
          });
        };
      }
      function Ob(t, e) {
        return function(s) {
          if (ge() !== t) return;
          let r, o, i = typeof e == "object" ? e.serializeAttribute : void 0, a = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
          a && a > ur && (mt && X.warn(`\`dom.maxStringLength\` cannot exceed ${ur}, but a value of ${a} was configured. Sentry will use ${ur} instead.`), a = ur), typeof i == "string" && (i = [
            i
          ]);
          try {
            const f = s.event, d = Fb(f) ? f.target : f;
            r = Xe(d, {
              keyAttrs: i,
              maxStringLength: a
            }), o = Iu(d);
          } catch {
            r = "<unknown>";
          }
          if (r.length === 0) return;
          const l = {
            category: `ui.${s.name}`,
            message: r
          };
          o && (l.data = {
            "ui.component_name": o
          }), Nn(l, {
            event: s.event,
            name: s.name,
            global: s.global
          });
        };
      }
      function Mb(t) {
        return function(n) {
          if (ge() !== t) return;
          const s = {
            category: "console",
            data: {
              arguments: n.args,
              logger: "console"
            },
            level: oh(n.level),
            message: ma(n.args, " ")
          };
          if (n.level === "assert") if (n.args[0] === false) s.message = `Assertion failed: ${ma(n.args.slice(1), " ") || "console.assert"}`, s.data.arguments = n.args.slice(1);
          else return;
          Nn(s, {
            input: n.args,
            level: n.level
          });
        };
      }
      function qb(t) {
        return function(n) {
          if (ge() !== t) return;
          const { startTimestamp: s, endTimestamp: r } = n, o = n.xhr[Kn];
          if (!s || !r || !o) return;
          const { method: i, url: a, status_code: l, body: f } = o, d = {
            method: i,
            url: a,
            status_code: l
          }, m = {
            xhr: n.xhr,
            input: f,
            startTimestamp: s,
            endTimestamp: r
          }, h = {
            category: "xhr",
            data: d,
            type: "http",
            level: Pf(l)
          };
          t.emit("beforeOutgoingRequestBreadcrumb", h, m), Nn(h, m);
        };
      }
      function Hb(t) {
        return function(n) {
          if (ge() !== t) return;
          const { startTimestamp: s, endTimestamp: r } = n;
          if (r && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")) if (n.error) {
            const o = {
              data: n.error,
              input: n.args,
              startTimestamp: s,
              endTimestamp: r
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
              startTimestamp: s,
              endTimestamp: r
            }, l = {
              category: "fetch",
              data: i,
              type: "http",
              level: Pf(i.status_code)
            };
            t.emit("beforeOutgoingRequestBreadcrumb", l, a), Nn(l, a);
          }
        };
      }
      function Bb(t) {
        return function(n) {
          if (ge() !== t) return;
          let s = n.from, r = n.to;
          const o = An(fe.location.href);
          let i = s ? An(s) : void 0;
          const a = An(r);
          i?.path || (i = o), o.protocol === a.protocol && o.host === a.host && (r = a.relative), o.protocol === i.protocol && o.host === i.host && (s = i.relative), Nn({
            category: "navigation",
            data: {
              from: s,
              to: r
            }
          });
        };
      }
      function Fb(t) {
        return !!t && !!t.target;
      }
      const zb = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(","), Ub = "BrowserApiErrors", jb = (t = {}) => {
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
          name: Ub,
          setupOnce() {
            e.setTimeout && pt(fe, "setTimeout", rl), e.setInterval && pt(fe, "setInterval", rl), e.requestAnimationFrame && pt(fe, "requestAnimationFrame", Gb), e.XMLHttpRequest && "XMLHttpRequest" in fe && pt(XMLHttpRequest.prototype, "send", Vb);
            const n = e.eventTarget;
            n && (Array.isArray(n) ? n : zb).forEach((r) => Yb(r, e));
          }
        };
      }, Wb = jb;
      function rl(t) {
        return function(...e) {
          const n = e[0];
          return e[0] = ns(n, {
            mechanism: {
              handled: false,
              type: `auto.browser.browserapierrors.${Yt(t)}`
            }
          }), t.apply(this, e);
        };
      }
      function Gb(t) {
        return function(e) {
          return t.apply(this, [
            ns(e, {
              mechanism: {
                data: {
                  handler: Yt(t)
                },
                handled: false,
                type: "auto.browser.browserapierrors.requestAnimationFrame"
              }
            })
          ]);
        };
      }
      function Vb(t) {
        return function(...e) {
          const n = this;
          return [
            "onload",
            "onerror",
            "onprogress",
            "onreadystatechange"
          ].forEach((r) => {
            r in n && typeof n[r] == "function" && pt(n, r, function(o) {
              const i = {
                mechanism: {
                  data: {
                    handler: Yt(o)
                  },
                  handled: false,
                  type: `auto.browser.browserapierrors.xhr.${r}`
                }
              }, a = Si(o);
              return a && (i.mechanism.data.handler = Yt(a)), ns(o, i);
            });
          }), t.apply(this, e);
        };
      }
      function Yb(t, e) {
        const s = fe[t]?.prototype;
        s?.hasOwnProperty?.("addEventListener") && (pt(s, "addEventListener", function(r) {
          return function(o, i, a) {
            try {
              Kb(i) && (i.handleEvent = ns(i.handleEvent, {
                mechanism: {
                  data: {
                    handler: Yt(i),
                    target: t
                  },
                  handled: false,
                  type: "auto.browser.browserapierrors.handleEvent"
                }
              }));
            } catch {
            }
            return e.unregisterOriginalCallbacks && Jb(this, o, i), r.apply(this, [
              o,
              ns(i, {
                mechanism: {
                  data: {
                    handler: Yt(i),
                    target: t
                  },
                  handled: false,
                  type: "auto.browser.browserapierrors.addEventListener"
                }
              }),
              a
            ]);
          };
        }), pt(s, "removeEventListener", function(r) {
          return function(o, i, a) {
            try {
              const l = i.__sentry_wrapped__;
              l && r.call(this, o, l, a);
            } catch {
            }
            return r.call(this, o, i, a);
          };
        }));
      }
      function Kb(t) {
        return typeof t.handleEvent == "function";
      }
      function Jb(t, e, n) {
        t && typeof t == "object" && "removeEventListener" in t && typeof t.removeEventListener == "function" && t.removeEventListener(e, n);
      }
      const Xb = (t = {}) => {
        const e = t.lifecycle ?? "route";
        return {
          name: "BrowserSession",
          setupOnce() {
            if (typeof fe.document > "u") {
              mt && X.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
              return;
            }
            qa({
              ignoreDuration: true
            }), Eo();
            const n = Zt();
            let s = n.getUser();
            n.addScopeListener((r) => {
              const o = r.getUser();
              (s?.id !== o?.id || s?.ip_address !== o?.ip_address) && (Eo(), s = o);
            }), e === "route" && ji(({ from: r, to: o }) => {
              r !== o && (qa({
                ignoreDuration: true
              }), Eo());
            });
          }
        };
      }, Qb = "CultureContext", Zb = () => ({
        name: Qb,
        preprocessEvent(t) {
          const e = ol();
          e && (t.contexts = {
            ...t.contexts,
            culture: {
              ...e,
              ...t.contexts?.culture
            }
          });
        },
        processSegmentSpan(t) {
          const e = ol();
          e && df(t, {
            "culture.locale": e.locale,
            "culture.timezone": e.timezone,
            "culture.calendar": e.calendar
          });
        }
      }), xb = Zb;
      function ol() {
        try {
          const t = fe.Intl;
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
      const $b = "GlobalHandlers", ev = (t = {}) => {
        const e = {
          onerror: true,
          onunhandledrejection: true,
          ...t
        };
        return {
          name: $b,
          setupOnce() {
            Error.stackTraceLimit = 50;
          },
          setup(n) {
            e.onerror && (nv(n), il("onerror")), e.onunhandledrejection && (sv(n), il("onunhandledrejection"));
          }
        };
      }, tv = ev;
      function nv(t) {
        wu((e) => {
          const { stackParser: n, attachStacktrace: s } = $f();
          if (ge() !== t || Mf()) return;
          const { msg: r, url: o, line: i, column: a, error: l } = e, f = iv(Mi(n, l || r, void 0, s, false), o, i, a);
          f.level = "error", pf(f, {
            originalException: l,
            mechanism: {
              handled: false,
              type: "auto.browser.global_handlers.onerror"
            }
          });
        });
      }
      function sv(t) {
        ku((e) => {
          const { stackParser: n, attachStacktrace: s } = $f();
          if (ge() !== t || Mf()) return;
          const r = rv(e), o = xn(r) ? ov(r) : Mi(n, r, void 0, s, true);
          o.level = "error", pf(o, {
            originalException: r,
            mechanism: {
              handled: false,
              type: "auto.browser.global_handlers.onunhandledrejection"
            }
          });
        });
      }
      function rv(t) {
        if (xn(t)) return t;
        try {
          if ("reason" in t) return t.reason;
          if ("detail" in t && "reason" in t.detail) return t.detail.reason;
        } catch {
        }
        return t;
      }
      function ov(t) {
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
      function iv(t, e, n, s) {
        const r = t.exception = t.exception || {}, o = r.values = r.values || [], i = o[0] = o[0] || {}, a = i.stacktrace = i.stacktrace || {}, l = a.frames = a.frames || [];
        return l.length === 0 && l.push({
          colno: s,
          lineno: n,
          filename: av(e) ?? Hs(),
          function: Rn,
          in_app: true
        }), t;
      }
      function il(t) {
        mt && X.log(`Global Handler attached: ${t}`);
      }
      function $f() {
        return ge()?.getOptions() || {
          stackParser: () => [],
          attachStacktrace: false
        };
      }
      function av(t) {
        if (!(!Wt(t) || t.length === 0)) return t.startsWith("data:") ? `<${cn(t, false)}>` : t;
      }
      const lv = () => ({
        name: "HttpContext",
        preprocessEvent(t) {
          if (!fe.navigator && !fe.location && !fe.document) return;
          const e = Pr(), n = {
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
          if (!fe.navigator && !fe.location && !fe.document) return;
          const e = Pr();
          df(t, {
            "url.full": e.url || void 0,
            "http.request.header.user_agent": e.headers["User-Agent"],
            "http.request.header.referer": e.headers.Referer
          });
        }
      }), cv = "cause", uv = 5, fv = "LinkedErrors", dv = (t = {}) => {
        const e = t.limit || uv, n = t.key || cv;
        return {
          name: fv,
          preprocessEvent(s, r, o) {
            const i = o.getOptions();
            nh(Di, i.stackParser, n, e, s, r);
          }
        };
      }, pv = dv;
      function mv() {
        return _v() ? (mt && Mn(() => {
          console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
        }), true) : false;
      }
      function _v() {
        if (typeof fe.window > "u") return false;
        const t = fe;
        if (t.nw || !(t.chrome || t.browser)?.runtime?.id) return false;
        const n = Hs();
        return !(fe === fe.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(n));
      }
      function hv(t) {
        return [
          J_(),
          G_(),
          mh(),
          Wb(),
          Pb(),
          tv(),
          pv(),
          lh(),
          lv(),
          xb(),
          Xb()
        ];
      }
      function gv(t = {}) {
        const e = !t.skipBrowserExtensionCheck && mv();
        let n = t.defaultIntegrations == null ? hv() : t.defaultIntegrations;
        const s = {
          ...t,
          enabled: e ? false : t.enabled,
          stackParser: Yd(t.stackParser || Rb),
          integrations: l_({
            integrations: t.integrations,
            defaultIntegrations: n
          }),
          transport: t.transport || _b
        };
        return q_(jh, s);
      }
      function bv(t) {
        return t.split(",").some((e) => e.trim().startsWith("sentry-"));
      }
      function ed(t) {
        try {
          return new URL(t, fe.location.origin).href;
        } catch {
          return;
        }
      }
      function vv(t) {
        return t.entryType === "resource" && "initiatorType" in t && typeof t.nextHopProtocol == "string" && (t.initiatorType === "fetch" || t.initiatorType === "xmlhttprequest");
      }
      function td(t) {
        try {
          return new Headers(t);
        } catch {
          return;
        }
      }
      const al = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new Map(), nd = {
        traceFetch: true,
        traceXHR: true,
        enableHTTPTimings: true,
        trackFetchStreamPerformance: false
      };
      function yv(t, e) {
        const { traceFetch: n, traceXHR: s, trackFetchStreamPerformance: r, shouldCreateSpanForRequest: o, enableHTTPTimings: i, tracePropagationTargets: a, onRequestSpanStart: l, onRequestSpanEnd: f } = {
          ...nd,
          ...e
        }, d = typeof o == "function" ? o : (g) => true, m = (g) => kv(g, a), h = {}, _ = t.getOptions().propagateTraceparent;
        n && (t.addEventProcessor((g) => (g.type === "transaction" && g.spans && g.spans.forEach((b) => {
          if (b.op === "http.client") {
            const v = Po.get(b.span_id);
            v && (b.timestamp = v / 1e3, Po.delete(b.span_id));
          }
        }), g)), r && Th((g) => {
          if (g.response) {
            const b = al.get(g.response);
            b && g.endTimestamp && Po.set(b, g.endTimestamp);
          }
        }), Df((g) => {
          const b = _h(g, d, m, h, {
            propagateTraceparent: _,
            onRequestSpanEnd: f
          });
          if (g.response && g.fetchData.__span && al.set(g.response, g.fetchData.__span), b) {
            const v = ed(g.fetchData.url), w = v ? An(v).host : void 0;
            b.setAttributes({
              "http.url": v ? cn(v) : void 0,
              "server.address": w
            }), i && ll(b, t), l?.(b, {
              headers: g.headers
            });
          }
        })), s && Zf((g) => {
          const b = Sv(g, d, m, h, _, f);
          b && (i && ll(b, t), l?.(b, {
            headers: td(g.xhr.__sentry_xhr_v3__?.request_headers)
          }));
        });
      }
      const wv = 300;
      function ll(t, e) {
        const { url: n } = ve(t).data;
        if (!n || typeof n != "string") return;
        let s = () => void setTimeout(r);
        if (Qt(e)) {
          const o = t.end.bind(t);
          t.end = (i) => {
            const a = i ?? We();
            let l = false;
            const f = () => {
              l || (l = true, setTimeout(r), o(a), clearTimeout(d));
            };
            s = f;
            const d = setTimeout(f, wv);
          };
        }
        const r = Ns("resource", ({ entries: o }) => {
          o.forEach((i) => {
            vv(i) && i.name.endsWith(n) && (t.setAttributes(Xf(i)), s());
          });
        });
      }
      function kv(t, e) {
        const n = Hs();
        if (n) {
          let s, r;
          try {
            s = new URL(t, n), r = new URL(n).origin;
          } catch {
            return false;
          }
          const o = s.origin === r;
          return e ? ln(s.toString(), e) || o && ln(s.pathname, e) : o;
        } else {
          const s = !!t.match(/^\/(?!\/)/);
          return e ? ln(t, e) : s;
        }
      }
      function Sv(t, e, n, s, r, o) {
        const i = t.xhr, a = i?.[Kn];
        if (!i || i.__sentry_own_request__ || !a) return;
        const { url: l, method: f } = a, d = At() && e(l);
        if (t.endTimestamp) {
          const y = i.__sentry_xhr_span_id__;
          if (!y) return;
          const R = s[y];
          R && (d && a.status_code !== void 0 && (Ou(R, a.status_code), R.end(), o?.(R, {
            headers: td(pb(i)),
            error: t.error
          })), delete s[y]);
          return;
        }
        const m = ed(l), h = An(m || l), _ = cn(Gm(l)), g = ge(), v = !!_t() || !!g && Qt(g), w = d && v ? Bn({
          name: `${f} ${_}`,
          attributes: {
            url: cn(l),
            type: "xhr",
            "http.method": f,
            "http.url": m ? cn(m) : void 0,
            "server.address": h?.host,
            [Ge]: "auto.http.browser",
            [Rt]: "http.client",
            ...h?.search && {
              "http.query": h?.search
            },
            ...h?.hash && {
              "http.fragment": h?.hash
            }
          }
        }) : new qt();
        return d && !v && g?.recordDroppedEvent("no_parent_span", "span"), i.__sentry_xhr_span_id__ = w.spanContext().spanId, s[i.__sentry_xhr_span_id__] = w, n(l) && Ev(i, At() && v ? w : void 0, r), g && g.emit("beforeOutgoingRequestSpan", w, t), w;
      }
      function Ev(t, e, n) {
        const { "sentry-trace": s, baggage: r, traceparent: o } = Af({
          span: e,
          propagateTraceparent: n
        });
        s && Tv(t, s, r, o);
      }
      function Tv(t, e, n, s) {
        const r = t.__sentry_xhr_v3__?.request_headers;
        if (!(r?.["sentry-trace"] || !t.setRequestHeader)) try {
          if (t.setRequestHeader("sentry-trace", e), s && !r?.traceparent && t.setRequestHeader("traceparent", s), n) {
            const o = r?.baggage;
            (!o || !bv(o)) && t.setRequestHeader("baggage", n);
          }
        } catch {
        }
      }
      function Iv() {
        fe.document ? fe.document.addEventListener("visibilitychange", () => {
          const t = _t();
          if (!t) return;
          const e = Ze(t);
          if (fe.document.hidden && e) {
            const n = "cancelled", { op: s, status: r } = ve(e);
            mt && X.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${s}`), r || e.setStatus({
              code: Ye,
              message: n
            }), e.setAttribute("sentry.cancellation_reason", "document.hidden"), e.end();
          }
        }) : mt && X.warn("[Tracing] Could not set up background tab detection due to lack of global document");
      }
      const Cv = 3600, sd = "sentry_previous_trace", Av = "sentry.previous_trace";
      function Rv(t, { linkPreviousTrace: e, consistentTraceSampling: n }) {
        const s = e === "session-storage";
        let r = s ? Pv() : void 0;
        t.on("spanStart", (i) => {
          if (Ze(i) !== i) return;
          const a = ke().getPropagationContext();
          r = Nv(r, i, a), s && Lv(r);
        });
        let o = true;
        n && t.on("beforeSampling", (i) => {
          if (!r) return;
          const a = ke(), l = a.getPropagationContext();
          if (o && l.parentSpanId) {
            o = false;
            return;
          }
          a.setPropagationContext({
            ...l,
            dsc: {
              ...l.dsc,
              sample_rate: String(r.sampleRate),
              sampled: String(ai(r.spanContext))
            },
            sampleRand: r.sampleRand
          }), i.parentSampled = ai(r.spanContext), i.parentSampleRate = r.sampleRate, i.spanAttributes = {
            ...i.spanAttributes,
            [Pu]: r.sampleRate
          };
        });
      }
      function Nv(t, e, n) {
        const s = ve(e);
        function r() {
          try {
            return Number(n.dsc?.sample_rate) ?? Number(s.data?.[Ti]);
          } catch {
            return 0;
          }
        }
        const o = {
          spanContext: e.spanContext(),
          startTimestamp: s.start_timestamp,
          sampleRate: r(),
          sampleRand: n.sampleRand
        };
        if (!t) return o;
        const i = t.spanContext;
        return i.traceId === s.trace_id ? t : (Date.now() / 1e3 - t.startTimestamp <= Cv && (mt && X.log(`Adding previous_trace \`${JSON.stringify(i)}\` link to span \`${JSON.stringify({
          op: s.op,
          ...e.spanContext()
        })}\``), e.addLink({
          context: i,
          attributes: {
            [kp]: "previous_trace"
          }
        }), e.setAttribute(Av, `${i.traceId}-${i.spanId}-${ai(i) ? 1 : 0}`)), o);
      }
      function Lv(t) {
        try {
          fe.sessionStorage.setItem(sd, JSON.stringify(t));
        } catch (e) {
          mt && X.warn("Could not store previous trace in sessionStorage", e);
        }
      }
      function Pv() {
        try {
          const t = fe.sessionStorage?.getItem(sd);
          return JSON.parse(t);
        } catch {
          return;
        }
      }
      function ai(t) {
        return t.traceFlags === 1;
      }
      const Dv = "BrowserTracing", Ov = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
      function Mv() {
        const t = fe.navigator;
        return t?.userAgent ? Ov.test(t.userAgent) : false;
      }
      const qv = {
        ...gr,
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
        ...nd
      }, Hv = (t = {}) => {
        "enableElementTiming" in t && Mn(() => {
          console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.");
        });
        const e = {
          name: void 0,
          source: void 0
        }, n = fe.document, { enableInp: s, enableLongTask: r, enableLongAnimationFrame: o, _experiments: { enableInteractions: i, enableStandaloneClsSpans: a, enableStandaloneLcpSpans: l }, beforeStartSpan: f, idleTimeout: d, finalTimeout: m, childSpanTimeout: h, markBackgroundSpan: _, traceFetch: g, traceXHR: b, trackFetchStreamPerformance: v, shouldCreateSpanForRequest: w, enableHTTPTimings: y, ignoreResourceSpans: R, ignorePerformanceApiSpans: N, instrumentPageLoad: E, instrumentNavigation: k, detectRedirects: T, linkPreviousTrace: A, consistentTraceSampling: L, enableReportPageLoaded: D, onRequestSpanStart: q, onRequestSpanEnd: P } = {
          ...qv,
          ...t
        }, H = Mv();
        let M, j, Y;
        function G(U, Q, B = true) {
          const V = Q.op === "pageload", F = Q.name, J = f ? f(Q) : Q, x = J.attributes || {};
          if (F !== J.name && (x[Ut] = "custom", J.attributes = x), !B) {
            const ue = qn();
            Bn({
              ...J,
              startTime: ue
            }).end(ue);
            return;
          }
          e.name = J.name, e.source = x[Ut];
          const re = lf(J, {
            idleTimeout: d,
            finalTimeout: m,
            childSpanTimeout: h,
            disableAutoFinish: V,
            beforeSpanEnd: (ue) => {
              M?.();
              const ye = Qt(U);
              Pg(ue, {
                recordClsOnPageloadSpan: !ye && !a,
                recordLcpOnPageloadSpan: !ye && !l,
                ignoreResourceSpans: R,
                ignorePerformanceApiSpans: N,
                spanStreamingEnabled: ye
              }), fl(U, void 0);
              const He = ke(), Pe = He.getPropagationContext();
              He.setPropagationContext({
                ...Pe,
                traceId: re.spanContext().traceId,
                sampled: hn(re),
                dsc: fn(ue)
              }), V && (Y = void 0);
            },
            trimIdleSpanEndTimestamp: !D
          });
          V && D && (Y = re), fl(U, re);
          function be() {
            n && [
              "interactive",
              "complete"
            ].includes(n.readyState) && U.emit("idleSpanEnableAutoFinish", re);
          }
          V && !D && n && (n.addEventListener("readystatechange", () => {
            be();
          }), be());
        }
        return {
          name: Dv,
          setup(U) {
            if (H) {
              mt && X.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
              return;
            }
            Jp();
            const Q = Qt(U);
            if (M = Tg({
              recordClsStandaloneSpans: Q ? void 0 : a || false,
              recordLcpStandaloneSpans: Q ? void 0 : l || false,
              client: U
            }), Q ? (Xg(U), Zg(U), s && $g()) : s && Gg(), o && me.PerformanceObserver && PerformanceObserver.supportedEntryTypes?.includes("long-animation-frame") ? Cg() : r && Ig(), i && Ag(), T && n) {
              const V = () => {
                j = We();
              };
              addEventListener("click", V, {
                capture: true
              }), addEventListener("keydown", V, {
                capture: true,
                passive: true
              });
            }
            function B() {
              const V = Ps(U);
              V && !ve(V).timestamp && (mt && X.log(`[Tracing] Finishing current active span with op: ${ve(V).op}`), V.setAttribute(Ts, "cancelled"), V.end());
            }
            U.on("startNavigationSpan", (V, F) => {
              if (ge() !== U) return;
              if (F?.isRedirect) {
                mt && X.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), G(U, {
                  op: "navigation.redirect",
                  ...V
                }, false);
                return;
              }
              j = void 0, B(), Zt().setPropagationContext({
                traceId: Jt(),
                sampleRand: Math.random(),
                propagationSpanId: At() ? void 0 : Gt()
              });
              const J = ke();
              J.setPropagationContext({
                traceId: Jt(),
                sampleRand: Math.random(),
                propagationSpanId: At() ? void 0 : Gt()
              }), J.setSDKProcessingMetadata({
                normalizedRequest: void 0
              }), G(U, {
                op: "navigation",
                ...V,
                parentSpan: null,
                forceTransaction: true
              });
            }), U.on("startPageLoadSpan", (V, F = {}) => {
              if (ge() !== U) return;
              B();
              const J = F.sentryTrace || cl("sentry-trace") || ul("sentry-trace"), x = F.baggage || cl("baggage") || ul("baggage"), re = Up(J, x), be = ke();
              be.setPropagationContext(re), At() || (be.getPropagationContext().propagationSpanId = Gt()), be.setSDKProcessingMetadata({
                normalizedRequest: Pr()
              }), G(U, {
                op: "pageload",
                ...V
              });
            }), U.on("endPageloadSpan", () => {
              D && Y && (Y.setAttribute(Ts, "reportPageLoaded"), Y.end());
            });
          },
          afterAllSetup(U) {
            if (H) return;
            let Q = Hs();
            if (A !== "off" && Rv(U, {
              linkPreviousTrace: A,
              consistentTraceSampling: L
            }), fe.location) {
              if (E) {
                const B = $e();
                Bv(U, {
                  name: fe.location.pathname,
                  startTime: B ? B / 1e3 : void 0,
                  attributes: {
                    [Ut]: "url",
                    [Ge]: "auto.pageload.browser"
                  }
                });
              }
              k && ji(({ to: B, from: V }) => {
                if (V === void 0 && Q?.indexOf(B) !== -1) {
                  Q = void 0;
                  return;
                }
                Q = void 0;
                const F = ff(B), J = Ps(U), x = J && T && Uv(J, j);
                Fv(U, {
                  name: F?.pathname || fe.location.pathname,
                  attributes: {
                    [Ut]: "url",
                    [Ge]: "auto.navigation.browser"
                  }
                }, {
                  url: B,
                  isRedirect: x
                });
              });
            }
            _ && Iv(), i && zv(U, d, m, h, e), s && Jg(), yv(U, {
              traceFetch: g,
              traceXHR: b,
              trackFetchStreamPerformance: v,
              tracePropagationTargets: U.getOptions().tracePropagationTargets,
              shouldCreateSpanForRequest: w,
              enableHTTPTimings: y,
              onRequestSpanStart: q,
              onRequestSpanEnd: P
            });
          }
        };
      };
      function Bv(t, e, n) {
        t.emit("startPageLoadSpan", e, n), ke().setTransactionName(e.name);
        const s = Ps(t);
        return s && t.emit("afterStartPageLoadSpan", s), s;
      }
      function Fv(t, e, n) {
        const { url: s, isRedirect: r } = n || {};
        t.emit("beforeStartNavigationSpan", e, {
          isRedirect: r
        }), t.emit("startNavigationSpan", e, {
          isRedirect: r
        });
        const o = ke();
        return o.setTransactionName(e.name), s && !r && o.setSDKProcessingMetadata({
          normalizedRequest: {
            ...Pr(),
            url: s
          }
        }), Ps(t);
      }
      function cl(t) {
        return fe.document?.querySelector(`meta[name=${t}]`)?.getAttribute("content") || void 0;
      }
      function ul(t) {
        return fe.performance?.getEntriesByType?.("navigation")[0]?.serverTiming?.find((s) => s.name === t)?.description;
      }
      function zv(t, e, n, s, r) {
        const o = fe.document;
        let i;
        const a = () => {
          const l = "ui.action.click", f = Ps(t);
          if (f) {
            const d = ve(f).op;
            if ([
              "navigation",
              "pageload"
            ].includes(d)) {
              mt && X.warn(`[Tracing] Did not create ${l} span because a pageload or navigation span is in progress.`);
              return;
            }
          }
          if (i && (i.setAttribute(Ts, "interactionInterrupted"), i.end(), i = void 0), !r.name) {
            mt && X.warn(`[Tracing] Did not create ${l} transaction because _latestRouteName is missing.`);
            return;
          }
          i = lf({
            name: r.name,
            op: l,
            attributes: {
              [Ut]: r.source || "url"
            }
          }, {
            idleTimeout: e,
            finalTimeout: n,
            childSpanTimeout: s
          });
        };
        o && addEventListener("click", a, {
          capture: true
        });
      }
      const rd = "_sentry_idleSpan";
      function Ps(t) {
        return t[rd];
      }
      function fl(t, e) {
        at(t, rd, e);
      }
      const dl = 1.5;
      function Uv(t, e) {
        const n = ve(t), s = qn(), r = n.start_timestamp;
        return !(s - r > dl || e && s - e <= dl);
      }
      function jv(t) {
        const e = {
          ...t
        };
        return Cf(e, "svelte"), gv(e);
      }
      function Z() {
      }
      function Br(t, e) {
        for (const n in e) t[n] = e[n];
        return t;
      }
      function od(t) {
        return t();
      }
      function pl() {
        return /* @__PURE__ */ Object.create(null);
      }
      function ce(t) {
        t.forEach(od);
      }
      function ao(t) {
        return typeof t == "function";
      }
      function Te(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
      }
      let fr;
      function ml(t, e) {
        return t === e ? true : (fr || (fr = document.createElement("a")), fr.href = e, t === fr.href);
      }
      function Wv(t) {
        return Object.keys(t).length === 0;
      }
      function id(t, ...e) {
        if (t == null) {
          for (const s of e) s(void 0);
          return Z;
        }
        const n = t.subscribe(...e);
        return n.unsubscribe ? () => n.unsubscribe() : n;
      }
      function st(t, e, n) {
        t.$$.on_destroy.push(id(e, n));
      }
      function _l(t, e, n) {
        return t.set(n), e;
      }
      function ze(t) {
        return t && ao(t.destroy) ? t.destroy : Z;
      }
      function c(t, e) {
        t.appendChild(e);
      }
      function C(t, e, n) {
        t.insertBefore(e, n || null);
      }
      function I(t) {
        t.parentNode && t.parentNode.removeChild(t);
      }
      function St(t, e) {
        for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
      }
      function p(t) {
        return document.createElement(t);
      }
      function O(t) {
        return document.createTextNode(t);
      }
      function S() {
        return O(" ");
      }
      function Nt() {
        return O("");
      }
      function z(t, e, n, s) {
        return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
      }
      function $t(t) {
        return function(e) {
          return e.preventDefault(), t.call(this, e);
        };
      }
      function Gv(t) {
        return function(e) {
          return e.stopPropagation(), t.call(this, e);
        };
      }
      function u(t, e, n) {
        n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
      }
      function Vv(t) {
        return Array.from(t.childNodes);
      }
      function W(t, e) {
        e = "" + e, t.data !== e && (t.data = e);
      }
      function ae(t, e) {
        t.value = e ?? "";
      }
      function se(t, e, n) {
        t.classList.toggle(e, !!n);
      }
      function Yv(t, e, { bubbles: n = false, cancelable: s = false } = {}) {
        return new CustomEvent(t, {
          detail: e,
          bubbles: n,
          cancelable: s
        });
      }
      function Fr(t, e) {
        return new t(e);
      }
      let Ds;
      function bs(t) {
        Ds = t;
      }
      function lo() {
        if (!Ds) throw new Error("Function called outside component initialization");
        return Ds;
      }
      function et(t) {
        lo().$$.on_mount.push(t);
      }
      function Kv(t) {
        lo().$$.after_update.push(t);
      }
      function co(t) {
        lo().$$.on_destroy.push(t);
      }
      function Wi() {
        const t = lo();
        return (e, n, { cancelable: s = false } = {}) => {
          const r = t.$$.callbacks[e];
          if (r) {
            const o = Yv(e, n, {
              cancelable: s
            });
            return r.slice().forEach((i) => {
              i.call(t, o);
            }), !o.defaultPrevented;
          }
          return true;
        };
      }
      function li(t, e) {
        const n = t.$$.callbacks[e.type];
        n && n.slice().forEach((s) => s.call(this, e));
      }
      const Yn = [], zr = [];
      let Xn = [];
      const hl = [], ad = Promise.resolve();
      let ci = false;
      function ld() {
        ci || (ci = true, ad.then(ud));
      }
      function cd() {
        return ld(), ad;
      }
      function ui(t) {
        Xn.push(t);
      }
      const Do = /* @__PURE__ */ new Set();
      let jn = 0;
      function ud() {
        if (jn !== 0) return;
        const t = Ds;
        do {
          try {
            for (; jn < Yn.length; ) {
              const e = Yn[jn];
              jn++, bs(e), Jv(e.$$);
            }
          } catch (e) {
            throw Yn.length = 0, jn = 0, e;
          }
          for (bs(null), Yn.length = 0, jn = 0; zr.length; ) zr.pop()();
          for (let e = 0; e < Xn.length; e += 1) {
            const n = Xn[e];
            Do.has(n) || (Do.add(n), n());
          }
          Xn.length = 0;
        } while (Yn.length);
        for (; hl.length; ) hl.pop()();
        ci = false, Do.clear(), bs(t);
      }
      function Jv(t) {
        if (t.fragment !== null) {
          t.update(), ce(t.before_update);
          const e = t.dirty;
          t.dirty = [
            -1
          ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ui);
        }
      }
      function Xv(t) {
        const e = [], n = [];
        Xn.forEach((s) => t.indexOf(s) === -1 ? e.push(s) : n.push(s)), n.forEach((s) => s()), Xn = e;
      }
      const kr = /* @__PURE__ */ new Set();
      let Sn;
      function us() {
        Sn = {
          r: 0,
          c: [],
          p: Sn
        };
      }
      function fs() {
        Sn.r || ce(Sn.c), Sn = Sn.p;
      }
      function _e(t, e) {
        t && t.i && (kr.delete(t), t.i(e));
      }
      function we(t, e, n, s) {
        if (t && t.o) {
          if (kr.has(t)) return;
          kr.add(t), Sn.c.push(() => {
            kr.delete(t), s && (n && t.d(1), s());
          }), t.o(e);
        } else s && s();
      }
      function Se(t) {
        return t?.length !== void 0 ? t : Array.from(t);
      }
      function Qv(t, e) {
        t.d(1), e.delete(t.key);
      }
      function Zv(t, e, n, s, r, o, i, a, l, f, d, m) {
        let h = t.length, _ = o.length, g = h;
        const b = {};
        for (; g--; ) b[t[g].key] = g;
        const v = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), R = [];
        for (g = _; g--; ) {
          const T = m(r, o, g), A = n(T);
          let L = i.get(A);
          L ? R.push(() => L.p(T, e)) : (L = f(A, T), L.c()), w.set(A, v[g] = L), A in b && y.set(A, Math.abs(g - b[A]));
        }
        const N = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set();
        function k(T) {
          _e(T, 1), T.m(a, d), i.set(T.key, T), d = T.first, _--;
        }
        for (; h && _; ) {
          const T = v[_ - 1], A = t[h - 1], L = T.key, D = A.key;
          T === A ? (d = T.first, h--, _--) : w.has(D) ? !i.has(L) || N.has(L) ? k(T) : E.has(D) ? h-- : y.get(L) > y.get(D) ? (E.add(L), k(T)) : (N.add(D), h--) : (l(A, i), h--);
        }
        for (; h--; ) {
          const T = t[h];
          w.has(T.key) || l(T, i);
        }
        for (; _; ) k(v[_ - 1]);
        return ce(R), v;
      }
      function Ur(t, e) {
        const n = {}, s = {}, r = {
          $$scope: 1
        };
        let o = t.length;
        for (; o--; ) {
          const i = t[o], a = e[o];
          if (a) {
            for (const l in i) l in a || (s[l] = 1);
            for (const l in a) r[l] || (n[l] = a[l], r[l] = 1);
            t[o] = a;
          } else for (const l in i) r[l] = 1;
        }
        for (const i in s) i in n || (n[i] = void 0);
        return n;
      }
      function jr(t) {
        return typeof t == "object" && t !== null ? t : {};
      }
      function Ue(t) {
        t && t.c();
      }
      function Oe(t, e, n) {
        const { fragment: s, after_update: r } = t.$$;
        s && s.m(e, n), ui(() => {
          const o = t.$$.on_mount.map(od).filter(ao);
          t.$$.on_destroy ? t.$$.on_destroy.push(...o) : ce(o), t.$$.on_mount = [];
        }), r.forEach(ui);
      }
      function Me(t, e) {
        const n = t.$$;
        n.fragment !== null && (Xv(n.after_update), ce(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
      }
      function xv(t, e) {
        t.$$.dirty[0] === -1 && (Yn.push(t), ld(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function Ie(t, e, n, s, r, o, i = null, a = [
        -1
      ]) {
        const l = Ds;
        bs(t);
        const f = t.$$ = {
          fragment: null,
          ctx: [],
          props: o,
          update: Z,
          not_equal: r,
          bound: pl(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (l ? l.$$.context : [])),
          callbacks: pl(),
          dirty: a,
          skip_bound: false,
          root: e.target || l.$$.root
        };
        i && i(f.root);
        let d = false;
        if (f.ctx = n ? n(t, e.props || {}, (m, h, ..._) => {
          const g = _.length ? _[0] : h;
          return f.ctx && r(f.ctx[m], f.ctx[m] = g) && (!f.skip_bound && f.bound[m] && f.bound[m](g), d && xv(t, m)), h;
        }) : [], f.update(), d = true, ce(f.before_update), f.fragment = s ? s(f.ctx) : false, e.target) {
          if (e.hydrate) {
            const m = Vv(e.target);
            f.fragment && f.fragment.l(m), m.forEach(I);
          } else f.fragment && f.fragment.c();
          e.intro && _e(t.$$.fragment), Oe(t, e.target, e.anchor), ud();
        }
        bs(l);
      }
      class Ce {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          Me(this, 1), this.$destroy = Z;
        }
        $on(e, n) {
          if (!ao(n)) return Z;
          const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return s.push(n), () => {
            const r = s.indexOf(n);
            r !== -1 && s.splice(r, 1);
          };
        }
        $set(e) {
          this.$$set && !Wv(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const $v = "4", Wn = [];
      function fd(t, e) {
        return {
          subscribe: ht(t, e).subscribe
        };
      }
      function ht(t, e = Z) {
        let n;
        const s = /* @__PURE__ */ new Set();
        function r(a) {
          if (Te(t, a) && (t = a, n)) {
            const l = !Wn.length;
            for (const f of s) f[1](), Wn.push(f, t);
            if (l) {
              for (let f = 0; f < Wn.length; f += 2) Wn[f][0](Wn[f + 1]);
              Wn.length = 0;
            }
          }
        }
        function o(a) {
          r(a(t));
        }
        function i(a, l = Z) {
          const f = [
            a,
            l
          ];
          return s.add(f), s.size === 1 && (n = e(r, o) || Z), a(t), () => {
            s.delete(f), s.size === 0 && n && (n(), n = null);
          };
        }
        return {
          set: r,
          update: o,
          subscribe: i
        };
      }
      function dd(t, e, n) {
        const s = !Array.isArray(t), r = s ? [
          t
        ] : t;
        if (!r.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const o = e.length < 2;
        return fd(n, (i, a) => {
          let l = false;
          const f = [];
          let d = 0, m = Z;
          const h = () => {
            if (d) return;
            m();
            const g = e(s ? f[0] : f, i, a);
            o ? i(g) : m = ao(g) ? g : Z;
          }, _ = r.map((g, b) => id(g, (v) => {
            f[b] = v, d &= ~(1 << b), l && h();
          }, () => {
            d |= 1 << b;
          }));
          return l = true, h(), function() {
            ce(_), m(), l = false;
          };
        });
      }
      const e1 = typeof localStorage < "u" ? localStorage.getItem("theme") : null, pd = e1 ?? "light", Sr = ht(pd);
      typeof document < "u" && document.documentElement.setAttribute("data-theme", pd);
      Sr.subscribe((t) => {
        typeof localStorage < "u" && localStorage.setItem("theme", t), typeof document < "u" && document.documentElement.setAttribute("data-theme", t);
      });
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add($v);
      function t1(t, e) {
        if (t instanceof RegExp) return {
          keys: false,
          pattern: t
        };
        var n, s, r, o, i = [], a = "", l = t.split("/");
        for (l[0] || l.shift(); r = l.shift(); ) n = r[0], n === "*" ? (i.push("wild"), a += "/(.*)") : n === ":" ? (s = r.indexOf("?", 1), o = r.indexOf(".", 1), i.push(r.substring(1, ~s ? s : ~o ? o : r.length)), a += ~s && !~o ? "(?:/([^/]+?))?" : "/([^/]+?)", ~o && (a += (~s ? "?" : "") + "\\" + r.substring(o))) : a += "/" + r;
        return {
          keys: i,
          pattern: new RegExp("^" + a + "/?$", "i")
        };
      }
      function n1(t) {
        let e, n, s;
        const r = [
          t[2]
        ];
        var o = t[0];
        function i(a, l) {
          let f = {};
          for (let d = 0; d < r.length; d += 1) f = Br(f, r[d]);
          return l !== void 0 && l & 4 && (f = Br(f, Ur(r, [
            jr(a[2])
          ]))), {
            props: f
          };
        }
        return o && (e = Fr(o, i(t)), e.$on("routeEvent", t[7])), {
          c() {
            e && Ue(e.$$.fragment), n = Nt();
          },
          m(a, l) {
            e && Oe(e, a, l), C(a, n, l), s = true;
          },
          p(a, l) {
            if (l & 1 && o !== (o = a[0])) {
              if (e) {
                us();
                const f = e;
                we(f.$$.fragment, 1, 0, () => {
                  Me(f, 1);
                }), fs();
              }
              o ? (e = Fr(o, i(a, l)), e.$on("routeEvent", a[7]), Ue(e.$$.fragment), _e(e.$$.fragment, 1), Oe(e, n.parentNode, n)) : e = null;
            } else if (o) {
              const f = l & 4 ? Ur(r, [
                jr(a[2])
              ]) : {};
              e.$set(f);
            }
          },
          i(a) {
            s || (e && _e(e.$$.fragment, a), s = true);
          },
          o(a) {
            e && we(e.$$.fragment, a), s = false;
          },
          d(a) {
            a && I(n), e && Me(e, a);
          }
        };
      }
      function s1(t) {
        let e, n, s;
        const r = [
          {
            params: t[1]
          },
          t[2]
        ];
        var o = t[0];
        function i(a, l) {
          let f = {};
          for (let d = 0; d < r.length; d += 1) f = Br(f, r[d]);
          return l !== void 0 && l & 6 && (f = Br(f, Ur(r, [
            l & 2 && {
              params: a[1]
            },
            l & 4 && jr(a[2])
          ]))), {
            props: f
          };
        }
        return o && (e = Fr(o, i(t)), e.$on("routeEvent", t[6])), {
          c() {
            e && Ue(e.$$.fragment), n = Nt();
          },
          m(a, l) {
            e && Oe(e, a, l), C(a, n, l), s = true;
          },
          p(a, l) {
            if (l & 1 && o !== (o = a[0])) {
              if (e) {
                us();
                const f = e;
                we(f.$$.fragment, 1, 0, () => {
                  Me(f, 1);
                }), fs();
              }
              o ? (e = Fr(o, i(a, l)), e.$on("routeEvent", a[6]), Ue(e.$$.fragment), _e(e.$$.fragment, 1), Oe(e, n.parentNode, n)) : e = null;
            } else if (o) {
              const f = l & 6 ? Ur(r, [
                l & 2 && {
                  params: a[1]
                },
                l & 4 && jr(a[2])
              ]) : {};
              e.$set(f);
            }
          },
          i(a) {
            s || (e && _e(e.$$.fragment, a), s = true);
          },
          o(a) {
            e && we(e.$$.fragment, a), s = false;
          },
          d(a) {
            a && I(n), e && Me(e, a);
          }
        };
      }
      function r1(t) {
        let e, n, s, r;
        const o = [
          s1,
          n1
        ], i = [];
        function a(l, f) {
          return l[1] ? 0 : 1;
        }
        return e = a(t), n = i[e] = o[e](t), {
          c() {
            n.c(), s = Nt();
          },
          m(l, f) {
            i[e].m(l, f), C(l, s, f), r = true;
          },
          p(l, [f]) {
            let d = e;
            e = a(l), e === d ? i[e].p(l, f) : (us(), we(i[d], 1, 1, () => {
              i[d] = null;
            }), fs(), n = i[e], n ? n.p(l, f) : (n = i[e] = o[e](l), n.c()), _e(n, 1), n.m(s.parentNode, s));
          },
          i(l) {
            r || (_e(n), r = true);
          },
          o(l) {
            we(n), r = false;
          },
          d(l) {
            l && I(s), i[e].d(l);
          }
        };
      }
      function gl() {
        const t = window.location.href.indexOf("#/");
        let e = t > -1 ? window.location.href.substr(t + 1) : "/";
        const n = e.indexOf("?");
        let s = "";
        return n > -1 && (s = e.substr(n + 1), e = e.substr(0, n)), {
          location: e,
          querystring: s
        };
      }
      const Gi = fd(null, function(e) {
        e(gl());
        const n = () => {
          e(gl());
        };
        return window.addEventListener("hashchange", n, false), function() {
          window.removeEventListener("hashchange", n, false);
        };
      }), o1 = dd(Gi, (t) => t.location);
      dd(Gi, (t) => t.querystring);
      const bl = ht(void 0);
      async function de(t) {
        if (!t || t.length < 1 || t.charAt(0) != "/" && t.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await cd(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (t.charAt(0) == "#" ? "" : "#") + t;
      }
      function i1(t) {
        t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function a1(t, e, n) {
        let { routes: s = {} } = e, { prefix: r = "" } = e, { restoreScrollState: o = false } = e;
        class i {
          constructor(E, k) {
            if (!k || typeof k != "function" && (typeof k != "object" || k._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!E || typeof E == "string" && (E.length < 1 || E.charAt(0) != "/" && E.charAt(0) != "*") || typeof E == "object" && !(E instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: T, keys: A } = t1(E);
            this.path = E, typeof k == "object" && k._sveltesparouter === true ? (this.component = k.component, this.conditions = k.conditions || [], this.userData = k.userData, this.props = k.props || {}) : (this.component = () => Promise.resolve(k), this.conditions = [], this.props = {}), this._pattern = T, this._keys = A;
          }
          match(E) {
            if (r) {
              if (typeof r == "string") if (E.startsWith(r)) E = E.substr(r.length) || "/";
              else return null;
              else if (r instanceof RegExp) {
                const L = E.match(r);
                if (L && L[0]) E = E.substr(L[0].length) || "/";
                else return null;
              }
            }
            const k = this._pattern.exec(E);
            if (k === null) return null;
            if (this._keys === false) return k;
            const T = {};
            let A = 0;
            for (; A < this._keys.length; ) {
              try {
                T[this._keys[A]] = decodeURIComponent(k[A + 1] || "") || null;
              } catch {
                T[this._keys[A]] = null;
              }
              A++;
            }
            return T;
          }
          async checkConditions(E) {
            for (let k = 0; k < this.conditions.length; k++) if (!await this.conditions[k](E)) return false;
            return true;
          }
        }
        const a = [];
        s instanceof Map ? s.forEach((N, E) => {
          a.push(new i(E, N));
        }) : Object.keys(s).forEach((N) => {
          a.push(new i(N, s[N]));
        });
        let l = null, f = null, d = {};
        const m = Wi();
        async function h(N, E) {
          await cd(), m(N, E);
        }
        let _ = null, g = null;
        o && (g = (N) => {
          N.state && (N.state.__svelte_spa_router_scrollY || N.state.__svelte_spa_router_scrollX) ? _ = N.state : _ = null;
        }, window.addEventListener("popstate", g), Kv(() => {
          i1(_);
        }));
        let b = null, v = null;
        const w = Gi.subscribe(async (N) => {
          b = N;
          let E = 0;
          for (; E < a.length; ) {
            const k = a[E].match(N.location);
            if (!k) {
              E++;
              continue;
            }
            const T = {
              route: a[E].path,
              location: N.location,
              querystring: N.querystring,
              userData: a[E].userData,
              params: k && typeof k == "object" && Object.keys(k).length ? k : null
            };
            if (!await a[E].checkConditions(T)) {
              n(0, l = null), v = null, h("conditionsFailed", T);
              return;
            }
            h("routeLoading", Object.assign({}, T));
            const A = a[E].component;
            if (v != A) {
              A.loading ? (n(0, l = A.loading), v = A, n(1, f = A.loadingParams), n(2, d = {}), h("routeLoaded", Object.assign({}, T, {
                component: l,
                name: l.name,
                params: f
              }))) : (n(0, l = null), v = null);
              const L = await A();
              if (N != b) return;
              n(0, l = L && L.default || L), v = A;
            }
            k && typeof k == "object" && Object.keys(k).length ? n(1, f = k) : n(1, f = null), n(2, d = a[E].props), h("routeLoaded", Object.assign({}, T, {
              component: l,
              name: l.name,
              params: f
            })).then(() => {
              bl.set(f);
            });
            return;
          }
          n(0, l = null), v = null, bl.set(void 0);
        });
        co(() => {
          w(), g && window.removeEventListener("popstate", g);
        });
        function y(N) {
          li.call(this, t, N);
        }
        function R(N) {
          li.call(this, t, N);
        }
        return t.$$set = (N) => {
          "routes" in N && n(3, s = N.routes), "prefix" in N && n(4, r = N.prefix), "restoreScrollState" in N && n(5, o = N.restoreScrollState);
        }, t.$$.update = () => {
          t.$$.dirty & 32 && (history.scrollRestoration = o ? "manual" : "auto");
        }, [
          l,
          f,
          d,
          s,
          r,
          o,
          y,
          R
        ];
      }
      class l1 extends Ce {
        constructor(e) {
          super(), Ie(this, e, a1, r1, Te, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const c1 = "/assets/peachsafe_core_wasm_bg-C8H6g175.wasm", u1 = async (t = {}, e) => {
        let n;
        if (e.startsWith("data:")) {
          const s = e.replace(/^data:.*?base64,/, "");
          let r;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(s, "base64");
          else if (typeof atob == "function") {
            const o = atob(s);
            r = new Uint8Array(o.length);
            for (let i = 0; i < o.length; i++) r[i] = o.charCodeAt(i);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(r, t);
        } else {
          const s = await fetch(e), r = s.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(s, t);
          else {
            const o = await s.arrayBuffer();
            n = await WebAssembly.instantiate(o, t);
          }
        }
        return n.instance.exports;
      };
      function f1(t, e) {
        const n = Ne.aesGcmDecrypt(t, e);
        if (n[2]) throw Ke(n[1]);
        return Ke(n[0]);
      }
      function d1(t, e) {
        const n = Ne.aesGcmEncrypt(t, e);
        if (n[2]) throw Ke(n[1]);
        return Ke(n[0]);
      }
      function p1(t, e) {
        const n = _d(t, Ne.__wbindgen_malloc, Ne.__wbindgen_realloc), s = Wr, r = Ne.argon2idDerive(n, s, e);
        if (r[2]) throw Ke(r[1]);
        return Ke(r[0]);
      }
      function m1(t) {
        const e = Ne.deriveAlertKey(t);
        if (e[2]) throw Ke(e[1]);
        return Ke(e[0]);
      }
      function _1(t, e) {
        const n = Ne.deriveEncounterToken(t, e);
        if (n[2]) throw Ke(n[1]);
        return Ke(n[0]);
      }
      function h1(t) {
        const e = Ne.ed25519PubkeyFromSeed(t);
        if (e[2]) throw Ke(e[1]);
        return Ke(e[0]);
      }
      function g1(t, e) {
        const n = Ne.ed25519Sign(t, e);
        if (n[2]) throw Ke(n[1]);
        return Ke(n[0]);
      }
      function b1() {
        const t = Ne.generateEphemeralKeypair();
        if (t[2]) throw Ke(t[1]);
        return Ke(t[0]);
      }
      function v1(t) {
        return Ne.generateRandomBytes(t);
      }
      function Vi(t) {
        return Ne.sha256(t);
      }
      function y1(t, e, n) {
        const s = _d(t, Ne.__wbindgen_malloc, Ne.__wbindgen_realloc), r = Wr, o = Ne.solvePoW(s, r, e, n);
        if (o[2]) throw Ke(o[1]);
        return Ke(o[0]);
      }
      function w1(t) {
        return typeof t == "function";
      }
      function k1(t) {
        const e = t;
        return typeof e == "object" && e !== null;
      }
      function S1(t) {
        return typeof t == "string";
      }
      function E1(t) {
        return t === void 0;
      }
      function T1(t, e) {
        throw new Error(md(t, e));
      }
      function I1() {
        return xs(function(t, e, n) {
          return t.call(e, n);
        }, arguments);
      }
      function C1(t) {
        return t.crypto;
      }
      function A1() {
        return xs(function(t, e) {
          t.getRandomValues(e);
        }, arguments);
      }
      function R1(t) {
        return t.length;
      }
      function N1(t) {
        return t.msCrypto;
      }
      function L1() {
        return new Object();
      }
      function P1(t) {
        return new Uint8Array(t >>> 0);
      }
      function D1(t) {
        return t.node;
      }
      function O1(t) {
        return t.process;
      }
      function M1(t, e, n) {
        Uint8Array.prototype.set.call(Yi(t, e), n);
      }
      function q1() {
        return xs(function(t, e) {
          t.randomFillSync(e);
        }, arguments);
      }
      function H1() {
        return xs(function() {
          return module.require;
        }, arguments);
      }
      function B1() {
        return xs(function(t, e, n) {
          return Reflect.set(t, e, n);
        }, arguments);
      }
      function F1(t, e, n) {
        t.set(Yi(e, n));
      }
      function z1() {
        const t = typeof global > "u" ? null : global;
        return uo(t) ? 0 : Zs(t);
      }
      function U1() {
        const t = typeof globalThis > "u" ? null : globalThis;
        return uo(t) ? 0 : Zs(t);
      }
      function j1() {
        const t = typeof self > "u" ? null : self;
        return uo(t) ? 0 : Zs(t);
      }
      function W1() {
        const t = typeof window > "u" ? null : window;
        return uo(t) ? 0 : Zs(t);
      }
      function G1(t, e, n) {
        return t.subarray(e >>> 0, n >>> 0);
      }
      function V1(t) {
        return t.versions;
      }
      function Y1(t) {
        return t;
      }
      function K1(t, e) {
        return Yi(t, e);
      }
      function J1(t, e) {
        return md(t, e);
      }
      function X1() {
        const t = Ne.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, true), t.set(e + 3, false);
      }
      function Zs(t) {
        const e = Ne.__externref_table_alloc();
        return Ne.__wbindgen_externrefs.set(e, t), e;
      }
      function Yi(t, e) {
        return t = t >>> 0, vs().subarray(t / 1, t / 1 + e);
      }
      function md(t, e) {
        return t = t >>> 0, Z1(t, e);
      }
      let dr = null;
      function vs() {
        return (dr === null || dr.byteLength === 0) && (dr = new Uint8Array(Ne.memory.buffer)), dr;
      }
      function xs(t, e) {
        try {
          return t.apply(this, e);
        } catch (n) {
          const s = Zs(n);
          Ne.__wbindgen_exn_store(s);
        }
      }
      function uo(t) {
        return t == null;
      }
      function _d(t, e, n) {
        if (n === void 0) {
          const a = ys.encode(t), l = e(a.length, 1) >>> 0;
          return vs().subarray(l, l + a.length).set(a), Wr = a.length, l;
        }
        let s = t.length, r = e(s, 1) >>> 0;
        const o = vs();
        let i = 0;
        for (; i < s; i++) {
          const a = t.charCodeAt(i);
          if (a > 127) break;
          o[r + i] = a;
        }
        if (i !== s) {
          i !== 0 && (t = t.slice(i)), r = n(r, s, s = i + t.length * 3, 1) >>> 0;
          const a = vs().subarray(r + i, r + s), l = ys.encodeInto(t, a);
          i += l.written, r = n(r, s, i, 1) >>> 0;
        }
        return Wr = i, r;
      }
      function Ke(t) {
        const e = Ne.__wbindgen_externrefs.get(t);
        return Ne.__externref_table_dealloc(t), e;
      }
      let Er = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Er.decode();
      const Q1 = 2146435072;
      let Oo = 0;
      function Z1(t, e) {
        return Oo += e, Oo >= Q1 && (Er = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), Er.decode(), Oo = e), Er.decode(vs().subarray(t, t + e));
      }
      const ys = new TextEncoder();
      "encodeInto" in ys || (ys.encodeInto = function(t, e) {
        const n = ys.encode(t);
        return e.set(n), {
          read: t.length,
          written: n.length
        };
      });
      let Wr = 0, Ne;
      function x1(t) {
        Ne = t;
      }
      URL = globalThis.URL;
      const $1 = await u1({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: C1,
          __wbg_process_44c7a14e11e9f69e: O1,
          __wbg_versions_276b2795b1c6a219: V1,
          __wbg_node_84ea875411254db1: D1,
          __wbg_require_b4edbdcf3e2a1ef0: H1,
          __wbg_call_a24592a6f349a97e: I1,
          __wbg_msCrypto_bd5a034af96bcba6: N1,
          __wbg_randomFillSync_6c25eac9869eb53c: q1,
          __wbg_getRandomValues_c44a50d8cfdaebeb: A1,
          __wbg_new_aa8d0fa9762c29bd: L1,
          __wbg_length_9f1775224cf1d815: R1,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: M1,
          __wbg_new_with_length_8c854e41ea4dae9b: P1,
          __wbg_subarray_f8ca46a25b1f5e0d: G1,
          __wbg_set_3d484eb794afec82: F1,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: U1,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: j1,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: z1,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: W1,
          __wbg_set_022bee52d0b05b19: B1,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: T1,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: k1,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: S1,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: w1,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: E1,
          __wbindgen_init_externref_table: X1,
          __wbindgen_cast_0000000000000001: Y1,
          __wbindgen_cast_0000000000000002: K1,
          __wbindgen_cast_0000000000000003: J1
        }
      }, c1), { memory: ey, aesGcmDecrypt: ty, aesGcmEncrypt: ny, argon2idDerive: sy, deriveAlertKey: ry, deriveEncounterToken: oy, ed25519PubkeyFromSeed: iy, ed25519Sign: ay, ed25519Verify: ly, generateEphemeralKeypair: cy, generateRandomBytes: uy, generateUserKeypair: fy, main: dy, serializePublicKey: py, sha256: my, solvePoW: _y, __wbindgen_exn_store: hy, __externref_table_alloc: gy, __wbindgen_externrefs: by, __externref_table_dealloc: vy, __wbindgen_malloc: yy, __wbindgen_realloc: wy, __wbindgen_free: ky, __wbindgen_start: hd } = $1, Sy = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: gy,
        __externref_table_dealloc: vy,
        __wbindgen_exn_store: hy,
        __wbindgen_externrefs: by,
        __wbindgen_free: ky,
        __wbindgen_malloc: yy,
        __wbindgen_realloc: wy,
        __wbindgen_start: hd,
        aesGcmDecrypt: ty,
        aesGcmEncrypt: ny,
        argon2idDerive: sy,
        deriveAlertKey: ry,
        deriveEncounterToken: oy,
        ed25519PubkeyFromSeed: iy,
        ed25519Sign: ay,
        ed25519Verify: ly,
        generateEphemeralKeypair: cy,
        generateRandomBytes: uy,
        generateUserKeypair: fy,
        main: dy,
        memory: ey,
        serializePublicKey: py,
        sha256: my,
        solvePoW: _y
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      x1(Sy);
      hd();
      let fi = false;
      async function Ey() {
        fi || (fi = true);
      }
      function gt() {
        if (!fi) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function xe(t) {
        const e = new Uint8Array(t.length / 2);
        for (let n = 0; n < t.length; n += 2) e[n / 2] = parseInt(t.slice(n, n + 2), 16);
        return e;
      }
      function ne(t) {
        return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function $s(t) {
        return gt(), v1(t);
      }
      async function jt(t, e) {
        return gt(), await new Promise((n) => setTimeout(n, 0)), p1(t, e);
      }
      function er(t, e) {
        return gt(), d1(t, e);
      }
      function fo(t, e) {
        return gt(), f1(t, e);
      }
      function Ty() {
        return gt(), b1();
      }
      function Iy(t, e) {
        return gt(), _1(t, e);
      }
      function gd(t) {
        return gt(), h1(t);
      }
      function bd(t, e) {
        return gt(), g1(t, e);
      }
      function Cy(t) {
        return gt(), Vi(t);
      }
      function di(t) {
        return gt(), m1(t);
      }
      function Ay(t, e, n) {
        return gt(), y1(t, e, n);
      }
      function on(t) {
        let e = "";
        for (let n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function vd(t) {
        const n = (t + "===".slice((t.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(n), (s) => s.charCodeAt(0));
      }
      function Ry(t, e, n, s) {
        const r = s && s.trim() ? encodeURIComponent(s.trim()) : "";
        return `2|${t}|${e}|${n}|${r}`;
      }
      function vl(t) {
        const e = t.split("|");
        if (!e.length || e[0] !== "2") return null;
        if (e.length < 4 || e.length > 5) throw new Error("Invalid group QR payload");
        const n = e[1], s = parseInt(e[2], 10), r = e[3], o = e.length === 5 && e[4] ? decodeURIComponent(e[4]) : null;
        if (isNaN(s) || n.length !== 64 || r.length !== 64) throw new Error("Invalid group QR payload");
        return {
          groupTokenHex: n,
          timestamp: s,
          hostContactIdHex: r,
          name: o
        };
      }
      function Qn(t, e) {
        gt();
        const n = new Uint8Array(36);
        return n.set(t, 0), n[32] = e >>> 24 & 255, n[33] = e >>> 16 & 255, n[34] = e >>> 8 & 255, n[35] = e & 255, Vi(n);
      }
      function En(t, e, n) {
        gt();
        const s = new Uint8Array(68);
        return s.set(t, 0), s.set(e, 32), s[64] = n >>> 24 & 255, s[65] = n >>> 16 & 255, s[66] = n >>> 8 & 255, s[67] = n & 255, Vi(s);
      }
      const Ln = ht("ok");
      let yd = "ok";
      Ln.subscribe((t) => {
        yd = t;
      });
      let Gr = null;
      function Ny() {
        clearTimeout(Gr ?? void 0), Ln.set("retrying");
      }
      function Ly() {
        yd !== "ok" && (clearTimeout(Gr ?? void 0), Ln.set("reconnected"), Gr = setTimeout(() => Ln.set("ok"), 3e3));
      }
      function yl() {
        clearTimeout(Gr ?? void 0), Ln.set("down");
      }
      function wl(t) {
        let e;
        function n(o, i) {
          if (o[0] === "retrying") return Oy;
          if (o[0] === "down") return Dy;
          if (o[0] === "reconnected") return Py;
        }
        let s = n(t), r = s && s(t);
        return {
          c() {
            e = p("div"), r && r.c(), u(e, "class", "banner svelte-176fo9c"), u(e, "role", "status"), u(e, "aria-live", "polite"), se(e, "retrying", t[0] === "retrying"), se(e, "down", t[0] === "down"), se(e, "reconnected", t[0] === "reconnected");
          },
          m(o, i) {
            C(o, e, i), r && r.m(e, null);
          },
          p(o, i) {
            s !== (s = n(o)) && (r && r.d(1), r = s && s(o), r && (r.c(), r.m(e, null))), i & 1 && se(e, "retrying", o[0] === "retrying"), i & 1 && se(e, "down", o[0] === "down"), i & 1 && se(e, "reconnected", o[0] === "reconnected");
          },
          d(o) {
            o && I(e), r && r.d();
          }
        };
      }
      function Py(t) {
        let e;
        return {
          c() {
            e = O("Reconnected");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Dy(t) {
        let e;
        return {
          c() {
            e = O("Server unavailable. Please try again later.");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Oy(t) {
        let e;
        return {
          c() {
            e = O("Server unreachable \u2014 retrying\u2026");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function My(t) {
        let e, n = t[0] !== "ok" && wl(t);
        return {
          c() {
            n && n.c(), e = Nt();
          },
          m(s, r) {
            n && n.m(s, r), C(s, e, r);
          },
          p(s, [r]) {
            s[0] !== "ok" ? n ? n.p(s, r) : (n = wl(s), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
          },
          i: Z,
          o: Z,
          d(s) {
            s && I(e), n && n.d(s);
          }
        };
      }
      function qy(t, e, n) {
        let s;
        return st(t, Ln, (r) => n(0, s = r)), [
          s
        ];
      }
      class Hy extends Ce {
        constructor(e) {
          super(), Ie(this, e, qy, My, Te, {});
        }
      }
      const po = ht(false);
      function By() {
        po.set(false);
      }
      const Le = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", Mo = [
        1e3,
        2e3,
        4e3
      ], kl = /* @__PURE__ */ new Set([
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
        for (let s = 0; ; s++) {
          try {
            const r = await fetch(t, n);
            if (!kl.has(r.status) || s >= Mo.length) return kl.has(r.status) ? yl() : Ly(), r;
          } catch (r) {
            if (s >= Mo.length) throw yl(), r;
          }
          Ny(), await new Promise((r) => setTimeout(r, Mo[s]));
        }
      }
      let Pn = null, Ki = null, Ji = null;
      const Os = "peachsafe_device_tokens";
      function Xi(t) {
        try {
          const e = JSON.parse(t ?? "{}");
          if (e !== null && typeof e == "object" && !Array.isArray(e)) return e;
        } catch {
        }
        return {};
      }
      function Fy(t) {
        const n = Xi(localStorage.getItem(Os))[t];
        return typeof n == "string" ? n : null;
      }
      function zy(t, e) {
        try {
          const n = Xi(localStorage.getItem(Os));
          n[t] = e, localStorage.setItem(Os, JSON.stringify(n));
        } catch {
        }
      }
      function qo(t) {
        try {
          const e = Xi(localStorage.getItem(Os));
          delete e[t], localStorage.setItem(Os, JSON.stringify(e));
        } catch {
        }
      }
      const Fn = ht(null), mo = ht(null), Ms = ht(null), ws = ht(null), Vr = ht(null);
      class wd extends Error {
        constructor(e, n, s, r) {
          super(e), this.statusCode = n, this.serverTime = s, this.powDifficulty = r, this.name = "ApiError";
        }
      }
      function lt() {
        return Pn !== null;
      }
      function Qi(t) {
        Ki = t;
      }
      function Dn() {
        return Ki;
      }
      function kd(t) {
        Ji = t;
      }
      function Tr() {
        return Ji;
      }
      function Sd() {
        Pn = null, Ki = null, Ji = null, Fn.set(null), mo.set(null), Ms.set(null), ws.set(null), Vr.set(null), By();
      }
      async function Uy() {
        try {
          const t = await jy();
          Fn.set(t.verified);
        } catch {
        }
      }
      async function jy() {
        const t = await rt(`${Le}/v1/web/user/email`);
        if (!t.ok) throw new Error(await qe(t));
        return t.json();
      }
      async function Wy(t) {
        const e = await rt(`${Le}/v1/web/user/request-email-change`, {
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
      async function Gy() {
        const t = await rt(`${Le}/v1/web/user/resend-verification`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await qe(t));
      }
      async function Vy(t) {
        const e = await gn(`${Le}/v1/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t
          })
        });
        if (!e.ok) throw new Error(await qe(e));
        Fn.set(true);
      }
      async function Zi(t) {
        const e = await gn(`${Le}/v1/prelogin`, {
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
      async function Yy(t, e, n) {
        const s = await gn(`${Le}/v1/signup`, {
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
        if (!s.ok) throw new Error(await qe(s));
        const r = await s.json();
        return Pn = r.session_token ?? null, Fn.set(false), r;
      }
      async function Sl(t, e, n = null, s = false) {
        const r = {
          username: t,
          auth_signature: e
        };
        n && (r.otp = n), s && (r.remember_device = true);
        const o = Fy(t);
        o && (r.device_token = o);
        const i = await gn(`${Le}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(r)
        });
        if (!i.ok) throw new Error(await qe(i));
        const a = await i.json();
        return a.requires_otp || (Pn = a.session_token ?? null, a.device_token && zy(t, a.device_token), a.bootstrap ? (Fn.set(a.bootstrap.email_verified), mo.set(a.bootstrap.email), Ms.set(a.bootstrap.totp_enabled), ws.set(a.bootstrap.trusted_devices ?? null), Vr.set(a.bootstrap.backup_code_count ?? null)) : Uy()), a;
      }
      async function Ky() {
        const t = await rt(`${Le}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await qe(t));
        return t.json();
      }
      async function Jy(t, e) {
        const n = await rt(`${Le}/v1/web/totp/confirm`, {
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
      async function Xy() {
        const t = await rt(`${Le}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await qe(t));
      }
      async function Qy() {
        const t = await rt(`${Le}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await qe(t));
        return t.json();
      }
      async function Zy(t) {
        const e = await rt(`${Le}/v1/web/trusted-devices/${t}`, {
          method: "DELETE"
        });
        if (!e.ok) throw new Error(await qe(e));
      }
      async function xy() {
        const t = await rt(`${Le}/v1/web/trusted-devices`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await qe(t));
      }
      async function xi() {
        if (!Pn) return;
        const t = Pn;
        Sd(), gn(`${Le}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${t}`
          }
        }).catch(() => {
        });
      }
      async function $y() {
        const t = await rt(`${Le}/v1/web/user/blob`);
        if (!t.ok) throw new Error(await qe(t));
        return t.json();
      }
      async function e0(t, e) {
        const n = await rt(`${Le}/v1/web/user/blob`, {
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
      async function Yr(t, e) {
        const n = await rt(`${Le}/v1/web/user/encounters`, {
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
      async function t0(t, e, n, s) {
        const r = await rt(`${Le}/v1/web/user/change-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            auth_signature: t,
            new_public_key: e,
            new_blob: n,
            expected_blob_version: s
          })
        });
        if (!r.ok) throw new Error(await qe(r));
      }
      async function n0() {
        const t = await rt(`${Le}/v1/web/user`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await qe(t));
        Sd();
      }
      async function s0(t) {
        const e = await gn(`${Le}/v1/query`, {
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
      async function r0(t) {
        const e = await rt(`${Le}/v1/web/user/encounters/by-token/${t}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await qe(e));
      }
      async function o0(t) {
        const e = await gn(`${Le}/v1/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(t)
        }), n = e.headers.get("x-server-time"), s = e.headers.get("x-pow-difficulty"), r = s ? parseInt(s, 10) : null;
        if (e.status === 202) return {
          serverTime: n,
          powDifficulty: r
        };
        const o = await qe(e);
        throw new wd(o, e.status, n, r);
      }
      function Ed() {
        fetch(Le, {
          method: "HEAD"
        }).catch(() => {
        });
      }
      function rt(t, e = {}) {
        return gn(t, {
          ...e,
          headers: {
            Authorization: `Bearer ${Pn}`,
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
      const El = 15 * 60 * 1e3, i0 = 2 * 60 * 1e3, Td = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let pi = null, mi = null, $i = null, ea = null, _o = false, tr = false;
      function ta() {
        clearTimeout(pi ?? void 0), clearTimeout(mi ?? void 0), mi = setTimeout(() => {
          tr = true, $i?.();
        }, El - i0), pi = setTimeout(() => ea?.(), El);
      }
      function Id() {
        _o && !tr && ta();
      }
      function a0({ onWarnCallback: t, onExpiredCallback: e }) {
        _i(), $i = t, ea = e, _o = true, tr = false;
        for (const n of Td) document.addEventListener(n, Id, {
          passive: true
        });
        ta();
      }
      function _i() {
        clearTimeout(pi ?? void 0), clearTimeout(mi ?? void 0);
        for (const t of Td) document.removeEventListener(t, Id);
        _o = false, tr = false, $i = null, ea = null;
      }
      function l0() {
        tr = false, _o && ta();
      }
      function c0(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w, y, R, N, E, k, T, A, L, D, q, P, H, M, j, Y, G, U, Q, B, V, F, J;
        return {
          c() {
            e = p("main"), n = p("section"), n.innerHTML = `<div class="blob blob-1 svelte-1vrywgg" aria-hidden="true"></div> <div class="blob blob-2 svelte-1vrywgg" aria-hidden="true"></div> <div class="blob blob-3 svelte-1vrywgg" aria-hidden="true"></div> <div class="hero-content svelte-1vrywgg"><div class="hero-brand svelte-1vrywgg"><img src="/android-chrome-192x192.png" alt="" class="hero-icon svelte-1vrywgg"/> <span><span class="brand-peach svelte-1vrywgg">Peach</span><span class="brand-safe svelte-1vrywgg">Safe</span></span></div> <p class="hero-tagline svelte-1vrywgg">Know if you need to get tested \u2014 without anyone knowing who you slept with.</p> <p class="hero-sub svelte-1vrywgg">PeachSafe lets you notify past partners when you test positive for an STI,
        and get notified if a partner tests positive. No one ever learns who was
        with whom \u2014 not your partners, not us.</p> <div class="cta-buttons svelte-1vrywgg"><a href="#/signup" class="btn-primary svelte-1vrywgg">Sign up</a> <a href="#/login" class="btn-ghost svelte-1vrywgg">Log in</a></div></div> <div class="hero-scroll-hint svelte-1vrywgg" aria-hidden="true"><span class="material-icons svelte-1vrywgg">expand_more</span></div>`, s = S(), r = p("section"), o = p("div"), i = p("h2"), i.textContent = "How it works", a = S(), l = p("div"), f = p("div"), f.innerHTML = '<div class="step-number svelte-1vrywgg">1</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Exchange a code</h3> <p class="svelte-1vrywgg">Before a sexual encounter, both people scan each other&#39;s QR code. This generates a private, anonymous token that only the two of you share. Nothing identifying is stored or transmitted.</p></div>', d = S(), m = p("div"), m.innerHTML = '<div class="step-number svelte-1vrywgg">2</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Record a positive result</h3> <p class="svelte-1vrywgg">If you test positive, mark it in PeachSafe. Select what you tested positive for - notifications are specific, not vague.</p></div>', h = S(), _ = p("div"), _.innerHTML = '<div class="step-number svelte-1vrywgg">3</div> <div class="step-body svelte-1vrywgg"><h3 class="svelte-1vrywgg">Partners are notified</h3> <p class="svelte-1vrywgg">PeachSafe notifies anyone who should know. If a past partner records a positive result, you&#39;ll receive an email. Neither of you learns the other&#39;s identity from the system.</p></div>', g = S(), b = p("div"), b.innerHTML = '<a href="#/how-it-works" class="svelte-1vrywgg">Want the technical deep dive? How it works in detail \u2192</a>', v = S(), w = p("section"), y = p("div"), R = p("h2"), R.textContent = "Why it's private", N = S(), E = p("div"), k = p("div"), k.innerHTML = '<span class="material-icons svelte-1vrywgg">lock</span> <span>Your encounter data is encrypted. Only you can access it</span>', T = S(), A = p("div"), A.innerHTML = '<span class="material-icons svelte-1vrywgg">visibility_off</span> <span>The server is a blind message board; it can&#39;t connect notifications to real people</span>', L = S(), D = p("div"), D.innerHTML = '<span class="material-icons svelte-1vrywgg">shuffle</span> <span>Queries are padded with noise so even traffic analysis reveals nothing</span>', q = S(), P = p("div"), P.innerHTML = '<span class="material-icons svelte-1vrywgg">person_off</span> <span>No account is linked to your real name, phone number, or location</span>', H = S(), M = p("section"), j = p("div"), Y = p("h2"), Y.textContent = "Who it's for", G = S(), U = p("p"), U.textContent = `People who want to take sexual health seriously without the social and legal
        risks of conventional contact tracing \u2014 whether you're navigating dating apps,
        multiple partners, or just value your privacy.`, Q = S(), B = p("footer"), V = p("div"), V.innerHTML = '<a href="#/signup" class="btn-primary svelte-1vrywgg">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-1vrywgg">Log in</a>', u(n, "class", "hero svelte-1vrywgg"), u(i, "class", "svelte-1vrywgg"), u(f, "class", "step svelte-1vrywgg"), u(m, "class", "step svelte-1vrywgg"), u(_, "class", "step svelte-1vrywgg"), u(l, "class", "steps svelte-1vrywgg"), u(b, "class", "deep-dive svelte-1vrywgg"), u(o, "class", "section-inner svelte-1vrywgg"), u(r, "class", "how-it-works svelte-1vrywgg"), u(R, "class", "svelte-1vrywgg"), u(k, "class", "privacy-card svelte-1vrywgg"), u(A, "class", "privacy-card svelte-1vrywgg"), u(D, "class", "privacy-card svelte-1vrywgg"), u(P, "class", "privacy-card svelte-1vrywgg"), u(E, "class", "privacy-grid svelte-1vrywgg"), u(y, "class", "section-inner svelte-1vrywgg"), u(w, "class", "privacy svelte-1vrywgg"), u(Y, "class", "svelte-1vrywgg"), u(U, "class", "svelte-1vrywgg"), u(j, "class", "section-inner svelte-1vrywgg"), u(M, "class", "who svelte-1vrywgg"), u(V, "class", "footer-inner svelte-1vrywgg"), u(B, "class", "svelte-1vrywgg"), u(e, "data-theme", "light"), u(e, "class", "svelte-1vrywgg");
          },
          m(x, re) {
            C(x, e, re), c(e, n), c(e, s), c(e, r), c(r, o), c(o, i), c(o, a), c(o, l), c(l, f), c(l, d), c(l, m), c(l, h), c(l, _), c(o, g), c(o, b), c(e, v), c(e, w), c(w, y), c(y, R), c(y, N), c(y, E), c(E, k), c(E, T), c(E, A), c(E, L), c(E, D), c(E, q), c(E, P), c(e, H), c(e, M), c(M, j), c(j, Y), c(j, G), c(j, U), c(e, Q), c(e, B), c(B, V), F || (J = [
              ze(t[0].call(null, i)),
              ze(t[0].call(null, f, 0)),
              ze(t[0].call(null, m, 80)),
              ze(t[0].call(null, _, 160)),
              ze(t[0].call(null, b, 240)),
              ze(t[0].call(null, R)),
              ze(t[0].call(null, k, 0)),
              ze(t[0].call(null, A, 70)),
              ze(t[0].call(null, D, 140)),
              ze(t[0].call(null, P, 210)),
              ze(t[0].call(null, Y)),
              ze(t[0].call(null, U, 60)),
              ze(t[0].call(null, V))
            ], F = true);
          },
          p: Z,
          i: Z,
          o: Z,
          d(x) {
            x && I(e), F = false, ce(J);
          }
        };
      }
      function u0(t) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function n(s, r = 0) {
          if (e()) return {};
          s.style.opacity = "0", s.style.transform = "translateY(20px)", s.style.transition = `opacity 0.55s ease ${r}ms, transform 0.55s ease ${r}ms`;
          const o = new IntersectionObserver(([i]) => {
            i.isIntersecting && (s.style.opacity = "1", s.style.transform = "translateY(0)", o.disconnect());
          }, {
            threshold: 0.1
          });
          return o.observe(s), {
            destroy() {
              o.disconnect();
            }
          };
        }
        return [
          n
        ];
      }
      class f0 extends Ce {
        constructor(e) {
          super(), Ie(this, e, u0, c0, Te, {});
        }
      }
      function d0(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w, y, R, N, E, k, T, A, L, D, q, P, H, M, j, Y, G, U, Q, B, V, F, J, x, re, be, ue, ye, He, Pe, Je, ee, ie, he, Be, Ae, bt, tt, Lt, je, ct, Bt, en, vt, tn, Ft, bn, Et, ut, Tt, It, Re, vn, ft, dt, Pt, oe, Fe, De, nn, Dt;
        return {
          c() {
            e = p("main"), n = p("nav"), n.innerHTML = `<a href="#/" class="nav-brand svelte-t8hosy"><img src="/android-chrome-192x192.png" alt="" class="nav-icon svelte-t8hosy"/> <span><span class="brand-peach svelte-t8hosy">Peach</span><span class="brand-safe svelte-t8hosy">Safe</span></span></a> <a href="#/" class="nav-back svelte-t8hosy"><span class="material-icons svelte-t8hosy">arrow_back</span>
      Back</a>`, s = S(), r = p("section"), r.innerHTML = '<div class="blob blob-1 svelte-t8hosy" aria-hidden="true"></div> <div class="blob blob-2 svelte-t8hosy" aria-hidden="true"></div> <div class="hero-content svelte-t8hosy"><h1 class="svelte-t8hosy">How PeachSafe Works</h1> <p class="svelte-t8hosy">PeachSafe is built so that even we can&#39;t know who you slept with, who notified you, or what you tested positive for. Here&#39;s exactly how.</p></div>', o = S(), i = p("nav"), a = p("div"), l = p("button"), l.textContent = "Authentication", f = S(), d = p("span"), d.textContent = "\xB7", m = S(), h = p("button"), h.textContent = "1:1 Encounters", _ = S(), g = p("span"), g.textContent = "\xB7", b = S(), v = p("button"), v.textContent = "Ongoing Relationships", w = S(), y = p("span"), y.textContent = "\xB7", R = S(), N = p("button"), N.textContent = "Group Encounters", E = S(), k = p("span"), k.textContent = "\xB7", T = S(), A = p("button"), A.textContent = "Encryption", L = S(), D = p("span"), D.textContent = "\xB7", q = S(), P = p("button"), P.textContent = "Noise Padding", H = S(), M = p("div"), j = p("section"), j.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">key</span></div> <h2 class="svelte-t8hosy">How does authentication work?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">At signup, your device derives a cryptographic key pair from your password and stores only the public key on the server. The password itself is never sent.</p> <p class="svelte-t8hosy">When you log in, the server issues a fresh random challenge. Your device hashes your password with an auth salt to derive a private key, signs the challenge with it, and sends the signature \u2014 not the password \u2014 to the server. The server verifies the signature using the stored public key.</p> <p class="svelte-t8hosy">A separate hash of your password against an encryption salt produces the key used to decrypt your data blob, which the server holds but cannot read.</p> <p class="svelte-t8hosy">Both salts are generated deterministically on the server by hashing your username with a server-side secret, so they can be retrieved at login time without storing any per-user secret in plaintext.</p> <div class="callout svelte-t8hosy"><span class="material-icons svelte-t8hosy">check_circle</span> <span>Your password never leaves your device. Each login uses a fresh challenge, preventing replay attacks.</span></div></div>', Y = S(), G = p("section"), U = p("div"), U.innerHTML = '<div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">qr_code_scanner</span></div> <h2 class="svelte-t8hosy">How do 1:1 encounters work?</h2>', Q = S(), B = p("div"), V = p("p"), F = O("Before a sexual encounter, both people scan each other's QR codes. This performs a Diffie-Hellman key exchange, producing a shared raw token that only the two of you can compute. Each QR code also contains a "), J = p("em"), J.textContent = "contact ID", x = O(" \u2014 a stable identifier used to detect repeat encounters (see "), re = p("button"), re.textContent = "Ongoing Relationships", be = O(" below)."), ue = S(), ye = p("h3"), ye.textContent = "Sending a result", He = S(), Pe = p("p"), Pe.textContent = "When you test positive, PeachSafe sends an encrypted result to the server along with a token for each relevant encounter. Partners independently query the server with their own tokens to check for matches.", Je = S(), ee = p("h3"), ee.textContent = "Directional tokens", ie = S(), he = p("p"), he.textContent = "Tokens are directional: the token Alice uses to notify Bob is different from the one Bob uses to notify Alice. If both queried for the same token, the server could infer they'd been together. With different tokens, the server sees no link between them.", Be = S(), Ae = p("h3"), Ae.textContent = "Single-use tokens", bt = S(), tt = p("p"), tt.textContent = "Each positive result uses a fresh token, derived as:", Lt = S(), je = p("div"), je.innerHTML = '<code class="svelte-t8hosy">token = hash(raw_token,  recipient&#39;s contact_id,  result_number)</code>', ct = S(), Bt = p("p"), Bt.textContent = "The result number increments with each positive result sent, so tokens are never reused. This makes it harder for a bad actor to track or correlate results over time.", en = S(), vt = p("h3"), vt.textContent = "Encrypted results", tn = S(), Ft = p("p"), Ft.textContent = "Results are encrypted with a key derived from the sender's contact ID. Only someone who has exchanged QR codes with you holds that ID \u2014 the server never does. Even if the server's database were compromised, the results themselves would be unreadable.", bn = S(), Et = p("div"), Et.innerHTML = '<span class="material-icons svelte-t8hosy">check_circle</span> <span>Contact IDs are never sent to the server. The server stores ciphertext it cannot decrypt.</span>', ut = S(), Tt = p("section"), Tt.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">favorite</span></div> <h2 class="svelte-t8hosy">How do ongoing relationships work?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">Positive test results only notify encounters from the past 12 months. For regular partners \u2014 a FWB, for example \u2014 recreating an encounter each time would be cumbersome. PeachSafe detects repeat encounters using the stable contact ID in each QR code and asks if you&#39;d like to mark the person as an ongoing relationship.</p> <p class="svelte-t8hosy">Ongoing relationships remain active until either partner marks them as ended. Instead of the standard 12-month window, notifications continue until 12 months after the relationship was marked ended.</p> <div class="callout svelte-t8hosy"><span class="material-icons svelte-t8hosy">check_circle</span> <span>Contact IDs are never stored unencrypted, so repeat encounters cannot be linked by anyone with access to the server.</span></div></div>', It = S(), Re = p("section"), Re.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">group</span></div> <h2 class="svelte-t8hosy">How do group encounters work?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">Mutual QR scanning doesn&#39;t scale to groups. Instead, one person hosts the encounter and everyone else scans their single QR code to join. New participants can be added for up to 24 hours after the group is created.</p> <p class="svelte-t8hosy">Unlike 1:1 encounters \u2014 where the raw token comes from a Diffie-Hellman exchange \u2014 the group token is randomly generated by the host and distributed to all participants via the QR code. Everyone in the group queries the server for the same token when checking for results.</p> <div class="callout callout-warn svelte-t8hosy"><span class="material-icons svelte-t8hosy">info</span> <span>This is slightly less private than 1:1 encounters: a compromised server that sees multiple users querying the same token could infer they were in the same encounter.</span></div> <p class="svelte-t8hosy">Single-use tokens still apply \u2014 each positive result uses a new token derived from an incrementing result number, so repeated results can&#39;t be correlated over time.</p></div>', vn = S(), ft = p("section"), ft.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">encrypted</span></div> <h2 class="svelte-t8hosy">How is my data encrypted?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">The web client encrypts all of your data \u2014 encounters, results, contact IDs \u2014 into a single blob using the key derived from your password. The server stores the blob but has no access to the decryption key and cannot read its contents.</p> <p class="svelte-t8hosy">The only things stored unencrypted on the server are <em class="svelte-t8hosy">notification tokens</em> and your user record (email address). Notification tokens are the receive-side tokens for each of your encounters \u2014 the tokens a partner would use to send a result to you. They&#39;re pre-uploaded so the server can match incoming positive results against them and send you an alert email, without being able to read the result itself.</p> <div class="callout svelte-t8hosy"><span class="material-icons svelte-t8hosy">check_circle</span> <span>We recommend using an email alias \u2014 such as <a href="https://addy.io" target="_blank" rel="noopener" class="svelte-t8hosy">addy.io</a> \u2014 if you&#39;d prefer we don&#39;t store your real address.</span></div></div>', dt = S(), Pt = p("section"), Pt.innerHTML = '<div class="section-header svelte-t8hosy"><div class="icon-chip svelte-t8hosy"><span class="material-icons svelte-t8hosy">shuffle</span></div> <h2 class="svelte-t8hosy">What is noise padding?</h2></div> <div class="section-body svelte-t8hosy"><p class="svelte-t8hosy">If PeachSafe queried for exactly as many tokens as you have encounters, a network observer could count your encounters from traffic alone. Instead, the app picks a random, higher number and queries for that many tokens \u2014 your real ones mixed with randomly generated decoys.</p> <p class="svelte-t8hosy">For example, even if you&#39;ve had a single encounter, your device might query the server for 87 tokens. The server cannot tell which tokens are real and which are noise, and neither can anyone watching the traffic. Your actual number of encounters stays private.</p></div>', oe = S(), Fe = p("footer"), De = p("div"), De.innerHTML = '<p class="footer-cta-label svelte-t8hosy">Ready to try it?</p> <div class="footer-ctas svelte-t8hosy"><a href="#/signup" class="btn-primary svelte-t8hosy">Sign up</a> <a href="#/login" class="btn-ghost-dark svelte-t8hosy">Log in</a></div>', u(n, "class", "topnav svelte-t8hosy"), u(r, "class", "hero svelte-t8hosy"), u(l, "class", "svelte-t8hosy"), u(d, "class", "toc-sep svelte-t8hosy"), u(d, "aria-hidden", "true"), u(h, "class", "svelte-t8hosy"), u(g, "class", "toc-sep svelte-t8hosy"), u(g, "aria-hidden", "true"), u(v, "class", "svelte-t8hosy"), u(y, "class", "toc-sep svelte-t8hosy"), u(y, "aria-hidden", "true"), u(N, "class", "svelte-t8hosy"), u(k, "class", "toc-sep svelte-t8hosy"), u(k, "aria-hidden", "true"), u(A, "class", "svelte-t8hosy"), u(D, "class", "toc-sep svelte-t8hosy"), u(D, "aria-hidden", "true"), u(P, "class", "svelte-t8hosy"), u(a, "class", "toc-inner svelte-t8hosy"), u(i, "class", "toc svelte-t8hosy"), u(i, "aria-label", "On this page"), u(j, "class", "card svelte-t8hosy"), u(j, "id", "login"), u(U, "class", "section-header svelte-t8hosy"), u(J, "class", "svelte-t8hosy"), u(re, "class", "inline-link svelte-t8hosy"), u(V, "class", "svelte-t8hosy"), u(ye, "class", "svelte-t8hosy"), u(Pe, "class", "svelte-t8hosy"), u(ee, "class", "svelte-t8hosy"), u(he, "class", "svelte-t8hosy"), u(Ae, "class", "svelte-t8hosy"), u(tt, "class", "svelte-t8hosy"), u(je, "class", "formula svelte-t8hosy"), u(Bt, "class", "svelte-t8hosy"), u(vt, "class", "svelte-t8hosy"), u(Ft, "class", "svelte-t8hosy"), u(Et, "class", "callout svelte-t8hosy"), u(B, "class", "section-body svelte-t8hosy"), u(G, "class", "card svelte-t8hosy"), u(G, "id", "encounters"), u(Tt, "class", "card svelte-t8hosy"), u(Tt, "id", "relationships"), u(Re, "class", "card svelte-t8hosy"), u(Re, "id", "groups"), u(ft, "class", "card svelte-t8hosy"), u(ft, "id", "encryption"), u(Pt, "class", "card svelte-t8hosy"), u(Pt, "id", "noise"), u(M, "class", "content svelte-t8hosy"), u(De, "class", "footer-inner"), u(Fe, "class", "svelte-t8hosy"), u(e, "data-theme", "light"), u(e, "class", "svelte-t8hosy");
          },
          m(Qe, nr) {
            C(Qe, e, nr), c(e, n), c(e, s), c(e, r), c(e, o), c(e, i), c(i, a), c(a, l), c(a, f), c(a, d), c(a, m), c(a, h), c(a, _), c(a, g), c(a, b), c(a, v), c(a, w), c(a, y), c(a, R), c(a, N), c(a, E), c(a, k), c(a, T), c(a, A), c(a, L), c(a, D), c(a, q), c(a, P), c(e, H), c(e, M), c(M, j), c(M, Y), c(M, G), c(G, U), c(G, Q), c(G, B), c(B, V), c(V, F), c(V, J), c(V, x), c(V, re), c(V, be), c(B, ue), c(B, ye), c(B, He), c(B, Pe), c(B, Je), c(B, ee), c(B, ie), c(B, he), c(B, Be), c(B, Ae), c(B, bt), c(B, tt), c(B, Lt), c(B, je), c(B, ct), c(B, Bt), c(B, en), c(B, vt), c(B, tn), c(B, Ft), c(B, bn), c(B, Et), c(M, ut), c(M, Tt), c(M, It), c(M, Re), c(M, vn), c(M, ft), c(M, dt), c(M, Pt), c(e, oe), c(e, Fe), c(Fe, De), nn || (Dt = [
              z(l, "click", t[1]),
              z(h, "click", t[2]),
              z(v, "click", t[3]),
              z(N, "click", t[4]),
              z(A, "click", t[5]),
              z(P, "click", t[6]),
              ze(t[0].call(null, j)),
              z(re, "click", t[7]),
              ze(t[0].call(null, G)),
              ze(t[0].call(null, Tt)),
              ze(t[0].call(null, Re)),
              ze(t[0].call(null, ft)),
              ze(t[0].call(null, Pt)),
              ze(t[0].call(null, De))
            ], nn = true);
          },
          p: Z,
          i: Z,
          o: Z,
          d(Qe) {
            Qe && I(e), nn = false, ce(Dt);
          }
        };
      }
      function wn(t) {
        document.getElementById(t)?.scrollIntoView({
          behavior: "smooth"
        });
      }
      function p0(t) {
        const e = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        function n(d, m = 0) {
          if (e()) return {};
          d.style.opacity = "0", d.style.transform = "translateY(20px)", d.style.transition = `opacity 0.55s ease ${m}ms, transform 0.55s ease ${m}ms`;
          const h = new IntersectionObserver(([_]) => {
            _.isIntersecting && (d.style.opacity = "1", d.style.transform = "translateY(0)", h.disconnect());
          }, {
            threshold: 0.1
          });
          return h.observe(d), {
            destroy() {
              h.disconnect();
            }
          };
        }
        return [
          n,
          () => wn("login"),
          () => wn("encounters"),
          () => wn("relationships"),
          () => wn("groups"),
          () => wn("encryption"),
          () => wn("noise"),
          () => wn("relationships")
        ];
      }
      class m0 extends Ce {
        constructor(e) {
          super(), Ie(this, e, p0, d0, Te, {});
        }
      }
      const Cd = 18262, Ad = 65535, _0 = 12 * 1024, Rd = _0 * 0.75, Mt = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], ks = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, Nd = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function Gn(t) {
        const e = (/* @__PURE__ */ new Date(t + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - Cd;
      }
      function Vn(t) {
        const e = (Cd + t) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      function na(t) {
        const e = t.encounters, n = t.results || [], s = t.receivedAlerts || [], r = t.relationships || [], o = t.groupEncounters || [], i = e.length, a = n.length, l = s.length, f = r.length, d = o.length, m = new TextEncoder(), h = (T) => T ? m.encode(T).slice(0, 255) : new Uint8Array(0), _ = e.map((T) => h(T.note)), g = r.map((T) => h(T.name)), b = o.map((T) => h(T.name)), v = o.map((T) => h(T.note)), w = t.pin ? m.encode(t.pin).slice(0, 4) : new Uint8Array(0), y = e.reduce((T, A, L) => T + 70 + 1 + _[L].length, 0), R = r.reduce((T, A, L) => T + 73 + 1 + g[L].length, 0), N = o.reduce((T, A, L) => T + 73 + 1 + b[L].length + 1 + v[L].length, 0), E = new Uint8Array(35 + y + 2 + a * 4 + 2 + l * 36 + 2 + R + 2 + N + 1 + w.length);
        let k = 0;
        E[k++] = 2, E.set(t.myContactId, k), k += 32, E[k++] = i >> 8 & 255, E[k++] = i & 255;
        for (let T = 0; T < i; T++) {
          const A = e[T];
          E.set(A.rawToken, k), k += 32, E.set(A.theirContactId, k), k += 32;
          const L = Gn(A.date);
          E[k++] = L >> 8 & 255, E[k++] = L & 255, E[k++] = A.queryIndex >> 8 & 255, E[k++] = A.queryIndex & 255, E[k++] = A.submitIndex >> 8 & 255, E[k++] = A.submitIndex & 255, E[k++] = _[T].length, E.set(_[T], k), k += _[T].length;
        }
        E[k++] = a >> 8 & 255, E[k++] = a & 255;
        for (const T of n) {
          const A = Gn(T.date);
          E[k++] = A >> 8 & 255, E[k++] = A & 255, E[k++] = T.hasNotified ? 1 : 0;
          let L = 0;
          for (let D = 0; D < Mt.length; D++) (T.positiveDiseases || []).includes(Mt[D]) && (L |= 1 << D);
          E[k++] = L;
        }
        E[k++] = l >> 8 & 255, E[k++] = l & 255;
        for (const T of s) {
          E.set(T.rawToken, k), k += 32;
          const A = Gn(T.testDate);
          E[k++] = A >> 8 & 255, E[k++] = A & 255;
          let L = 0;
          for (let q = 0; q < Mt.length; q++) (T.diseases || []).includes(Mt[q]) && (L |= 1 << q);
          E[k++] = L;
          let D = 0;
          T.viewed && (D |= 1), T.labVerified && (D |= 2), E[k++] = D;
        }
        E[k++] = f >> 8 & 255, E[k++] = f & 255;
        for (let T = 0; T < f; T++) {
          const A = r[T];
          E.set(A.rawToken, k), k += 32, E.set(A.theirContactId, k), k += 32;
          const L = Gn(A.createdAt);
          E[k++] = L >> 8 & 255, E[k++] = L & 255;
          const D = A.endedAt ? Gn(A.endedAt) : Ad;
          E[k++] = D >> 8 & 255, E[k++] = D & 255;
          let q = 0;
          A.archived && (q |= 1), E[k++] = q, E[k++] = A.queryIndex >> 8 & 255, E[k++] = A.queryIndex & 255, E[k++] = A.submitIndex >> 8 & 255, E[k++] = A.submitIndex & 255, E[k++] = g[T].length, E.set(g[T], k), k += g[T].length;
        }
        E[k++] = d >> 8 & 255, E[k++] = d & 255;
        for (let T = 0; T < d; T++) {
          const A = o[T];
          E.set(A.token, k), k += 32;
          const L = Gn(A.date);
          E[k++] = L >> 8 & 255, E[k++] = L & 255;
          const D = A.createdAt >>> 0;
          E[k++] = D >>> 24 & 255, E[k++] = D >>> 16 & 255, E[k++] = D >>> 8 & 255, E[k++] = D & 255, E[k++] = A.isHost ? 1 : 0, E[k++] = A.tokenIndex >> 8 & 255, E[k++] = A.tokenIndex & 255, E.set(A.hostContactId, k), k += 32, E[k++] = b[T].length, E.set(b[T], k), k += b[T].length, E[k++] = v[T].length, E.set(v[T], k), k += v[T].length;
        }
        return E[k++] = w.length, w.length > 0 && E.set(w, k), E;
      }
      function h0(t) {
        let e = 0;
        const n = t[e++];
        if (n !== 1 && n !== 2) throw new Error(`Unknown blob version: ${n}`);
        const s = t.slice(e, e + 32);
        e += 32;
        const r = t[e] << 8 | t[e + 1];
        e += 2;
        const o = [];
        for (let v = 0; v < r; v++) {
          const w = t.slice(e, e + 32);
          e += 32;
          const y = t.slice(e, e + 32);
          e += 32;
          const R = t[e] << 8 | t[e + 1];
          e += 2;
          const N = t[e] << 8 | t[e + 1];
          e += 2;
          const E = t[e] << 8 | t[e + 1];
          e += 2;
          const k = t[e++], T = k > 0 ? new TextDecoder().decode(t.slice(e, e + k)) : null;
          e += k, o.push({
            rawToken: w,
            theirContactId: y,
            date: Vn(R),
            queryIndex: N,
            submitIndex: E,
            note: T
          });
        }
        const i = [], a = t[e] << 8 | t[e + 1];
        e += 2;
        for (let v = 0; v < a; v++) {
          const w = t[e] << 8 | t[e + 1];
          e += 2;
          const y = t[e++], R = t[e++], N = !!(y & 1), E = Mt.filter((k, T) => R & 1 << T);
          i.push({
            date: Vn(w),
            hasNotified: N,
            positiveDiseases: E
          });
        }
        const l = [], f = t[e] << 8 | t[e + 1];
        e += 2;
        for (let v = 0; v < f; v++) {
          const w = t.slice(e, e + 32);
          e += 32;
          const y = t[e] << 8 | t[e + 1];
          e += 2;
          const R = t[e++], N = t[e++], E = Mt.filter((A, L) => R & 1 << L), k = !!(N & 1), T = !!(N & 2);
          l.push({
            rawToken: w,
            testDate: Vn(y),
            diseases: E,
            viewed: k,
            labVerified: T
          });
        }
        const d = [], m = t[e] << 8 | t[e + 1];
        e += 2;
        for (let v = 0; v < m; v++) {
          const w = t.slice(e, e + 32);
          e += 32;
          const y = t.slice(e, e + 32);
          e += 32;
          const R = t[e] << 8 | t[e + 1];
          e += 2;
          const N = t[e] << 8 | t[e + 1];
          e += 2;
          const E = t[e++], k = t[e] << 8 | t[e + 1];
          e += 2;
          const T = t[e] << 8 | t[e + 1];
          e += 2;
          const A = t[e++], L = A > 0 ? new TextDecoder().decode(t.slice(e, e + A)) : null;
          e += A, d.push({
            rawToken: w,
            theirContactId: y,
            createdAt: Vn(R),
            endedAt: N === Ad ? null : Vn(N),
            archived: !!(E & 1),
            queryIndex: k,
            submitIndex: T,
            name: L
          });
        }
        const h = [], _ = t[e] << 8 | t[e + 1];
        e += 2;
        const g = new TextDecoder();
        for (let v = 0; v < _; v++) {
          const w = t.slice(e, e + 32);
          e += 32;
          const y = t[e] << 8 | t[e + 1];
          e += 2;
          const R = (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
          e += 4;
          const N = t[e++], E = t[e] << 8 | t[e + 1];
          e += 2;
          const k = t.slice(e, e + 32);
          e += 32;
          const T = t[e++], A = T > 0 ? g.decode(t.slice(e, e + T)) : null;
          e += T;
          const L = t[e++], D = L > 0 ? g.decode(t.slice(e, e + L)) : null;
          e += L, h.push({
            token: w,
            date: Vn(y),
            createdAt: R,
            isHost: !!(N & 1),
            tokenIndex: E,
            hostContactId: k,
            name: A,
            note: D
          });
        }
        let b = null;
        if (n === 2 && e < t.length) {
          const v = t[e++];
          v > 0 && (b = new TextDecoder().decode(t.slice(e, e + v)));
        }
        return {
          myContactId: s,
          encounters: o,
          results: i,
          receivedAlerts: l,
          relationships: d,
          groupEncounters: h,
          pin: b
        };
      }
      const Ld = ht(false), sa = ht(null), Pd = ht(false), g0 = 45;
      let K = null, ss = 0, hi = false;
      const Zn = "peachsafe_pending_encounters";
      function ho() {
        Ld.set((K?.receivedAlerts || []).some((t) => !t.viewed));
      }
      function go() {
        sa.set(K?.pin ?? null);
      }
      Ln.subscribe((t) => {
        t === "reconnected" && hi && K && Dn() && Ve().catch(() => {
        });
      });
      async function Ve() {
        const t = na(K);
        Pd.set(t.byteLength >= Rd);
        const e = er(Dn(), t);
        hi = false;
        try {
          const { blob_version: n } = await e0(ne(e), ss);
          ss = n;
          try {
            localStorage.removeItem(Zn);
          } catch {
          }
        } catch (n) {
          throw hi = true, n;
        }
      }
      function b0(t, e, n) {
        try {
          let s = [];
          const r = localStorage.getItem(Zn);
          if (r) try {
            s = JSON.parse(new TextDecoder().decode(fo(Dn(), xe(r))));
          } catch {
            s = [];
          }
          s.push({
            rawTokenHex: ne(t),
            theirContactIdHex: ne(e),
            date: n
          });
          const o = new TextEncoder().encode(JSON.stringify(s));
          localStorage.setItem(Zn, ne(er(Dn(), o)));
        } catch {
        }
      }
      async function v0() {
        let t;
        try {
          const e = localStorage.getItem(Zn);
          if (!e) return;
          t = JSON.parse(new TextDecoder().decode(fo(Dn(), xe(e))));
        } catch {
          try {
            localStorage.removeItem(Zn);
          } catch {
          }
          return;
        }
        if (!t.length) {
          try {
            localStorage.removeItem(Zn);
          } catch {
          }
          return;
        }
        for (const e of t) K = {
          ...K,
          encounters: [
            ...K.encounters,
            {
              rawToken: xe(e.rawTokenHex),
              theirContactId: xe(e.theirContactIdHex),
              date: e.date,
              queryIndex: 0,
              submitIndex: 0,
              note: null
            }
          ]
        };
        await Ve();
      }
      async function y0() {
        K = {
          myContactId: $s(32),
          encounters: [],
          results: [],
          receivedAlerts: [],
          relationships: [],
          groupEncounters: [],
          pin: null
        }, ss = 0, await Ve(), go();
      }
      async function w0(t, e) {
        K = t, ss = e, await v0(), ho(), go();
      }
      function Ct() {
        return K;
      }
      function k0() {
        return ss;
      }
      function Tn() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.myContactId;
      }
      function Ir() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.results || [];
      }
      function Ho() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (K.receivedAlerts || []).map(({ testDate: t, diseases: e, viewed: n, labVerified: s }) => ({
          testDate: t,
          diseases: e,
          viewed: n,
          labVerified: s
        }));
      }
      function Dd() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.encounters || [];
      }
      function ra() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.relationships || [];
      }
      function Od() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.groupEncounters || [];
      }
      function S0() {
        return K?.pin ?? null;
      }
      async function E0(t, e, n) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        K = {
          ...K,
          encounters: [
            ...K.encounters,
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
          await Ve();
        } catch (s) {
          throw b0(t, e, n), s;
        }
      }
      async function T0(t, e) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = (K.encounters || []).map((s) => ne(s.rawToken) === t ? {
          ...s,
          ...e
        } : s);
        K = {
          ...K,
          encounters: n
        }, await Ve();
      }
      async function I0(t, e, n) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        K = {
          ...K,
          relationships: [
            ...K.relationships || [],
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
        }, await Ve();
      }
      async function Md(t, e, n, s, r) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const o = Math.floor(Date.now() / 1e3);
        K = {
          ...K,
          groupEncounters: [
            ...K.groupEncounters || [],
            {
              token: t,
              date: e,
              createdAt: o,
              isHost: n,
              tokenIndex: 0,
              hostContactId: s,
              name: r || null,
              note: null
            }
          ]
        }, await Ve();
      }
      async function Tl(t, e) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = (K.groupEncounters || []).map((s) => ne(s.token) === t ? {
          ...s,
          ...e
        } : s);
        K = {
          ...K,
          groupEncounters: n
        }, await Ve();
      }
      async function C0(t) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (K.groupEncounters || []).filter((n) => ne(n.token) !== t);
        K = {
          ...K,
          groupEncounters: e
        }, await Ve();
      }
      async function pr(t, e) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = (K.relationships || []).map((s) => ne(s.rawToken) === t ? {
          ...s,
          ...e
        } : s);
        K = {
          ...K,
          relationships: n
        }, await Ve();
      }
      async function Bo(t, e, n = false) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const s = (K.results || []).length;
        return K = {
          ...K,
          results: [
            ...K.results || [],
            {
              date: t,
              positiveDiseases: e,
              hasNotified: n
            }
          ]
        }, await Ve(), s;
      }
      async function Il(t) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...K.results || []
        ];
        if (t >= e.length) throw new Error("Invalid result index");
        e[t] = {
          ...e[t],
          hasNotified: true
        }, K = {
          ...K,
          results: e
        }, await Ve();
      }
      async function A0() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        K = {
          ...K,
          encounters: K.encounters.map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          })),
          relationships: (K.relationships || []).map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          })),
          groupEncounters: (K.groupEncounters || []).map((t) => ({
            ...t,
            tokenIndex: t.tokenIndex + 1
          }))
        }, await Ve();
      }
      async function R0(t, e, n, s) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let r = null;
        const o = (K.groupEncounters || []).map((a) => ne(a.token) !== t ? a : (r = a.token, {
          ...a,
          tokenIndex: a.tokenIndex + 1
        }));
        if (!r) throw new Error("Group token not found: " + t);
        const i = [
          ...K.receivedAlerts || [],
          {
            rawToken: r,
            testDate: e,
            diseases: n,
            viewed: false,
            labVerified: !!s
          }
        ];
        K = {
          ...K,
          groupEncounters: o,
          receivedAlerts: i
        }, await Ve(), ho();
      }
      async function N0(t, e, n, s) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let r = null;
        const o = K.encounters.map((l) => ne(l.rawToken) !== t ? l : (r = l.rawToken, {
          ...l,
          queryIndex: l.queryIndex + 1
        })), i = (K.relationships || []).map((l) => r || ne(l.rawToken) !== t ? l : (r = l.rawToken, {
          ...l,
          queryIndex: l.queryIndex + 1
        }));
        if (!r) throw new Error("Token not found: " + t);
        const a = [
          ...K.receivedAlerts || [],
          {
            rawToken: r,
            testDate: e,
            diseases: n,
            viewed: false,
            labVerified: !!s
          }
        ];
        K = {
          ...K,
          encounters: o,
          relationships: i,
          receivedAlerts: a
        }, await Ve(), ho();
      }
      async function L0(t) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...K.receivedAlerts || []
        ];
        if (t >= e.length) throw new Error("Invalid alert index");
        e[t] = {
          ...e[t],
          viewed: true
        }, K = {
          ...K,
          receivedAlerts: e
        }, await Ve(), ho();
      }
      async function P0(t) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        K = {
          ...K,
          pin: t
        }, await Ve(), go();
      }
      async function D0() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        K = {
          ...K,
          pin: null
        }, await Ve(), go();
      }
      function oa() {
        const t = /* @__PURE__ */ new Date();
        return t.setUTCFullYear(t.getUTCFullYear() - 1), t.toISOString().slice(0, 10);
      }
      function O0() {
        if (!K || na(K).byteLength < Rd) return false;
        const e = oa();
        return K.encounters.filter((n) => n.date < e).length >= 5;
      }
      function M0() {
        if (!K) return 0;
        const t = oa();
        return K.encounters.filter((e) => e.date < t).length;
      }
      async function q0() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = oa();
        K = {
          ...K,
          encounters: K.encounters.filter((e) => e.date >= t)
        }, await Ve();
      }
      function H0(t, e) {
        if (!t.endedAt || !e) return true;
        const s = (/* @__PURE__ */ new Date(t.endedAt + "T00:00:00Z")).getTime() + g0 * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < s;
      }
      function B0(t) {
        ss = t;
      }
      async function qd(t = null) {
        const { blob: e, blob_version: n } = t ?? await $y();
        if (!e) {
          await y0();
          return;
        }
        const s = fo(Dn(), xe(e));
        await w0(h0(s), n);
      }
      function F0(t) {
        const e = Ct();
        if (!e) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const n = er(t, na(e));
        return {
          blobHex: ne(n),
          blobVersion: k0()
        };
      }
      let ps = null;
      function Hd() {
        return ps || (ps = z0().finally(() => {
          ps = null;
        }), ps);
      }
      async function z0() {
        const t = Ct(), e = Tn();
        if (!t) return 0;
        const s = Ir().filter((m) => m.positiveDiseases.length === 0).map((m) => m.date).sort().pop() ?? null, r = /* @__PURE__ */ new Map(), o = [];
        for (const m of t.encounters) {
          const h = En(m.rawToken, e, m.queryIndex), _ = on(h);
          r.set(_, {
            rawTokenHex: ne(m.rawToken),
            alertDate: m.date
          }), o.push(_);
        }
        for (const m of t.relationships || []) {
          if (!H0(m, s)) continue;
          const h = En(m.rawToken, e, m.queryIndex), _ = on(h);
          r.set(_, {
            rawTokenHex: ne(m.rawToken),
            alertDate: m.createdAt
          }), o.push(_);
        }
        for (const m of t.groupEncounters || []) {
          const h = Qn(m.token, m.tokenIndex), _ = on(h);
          r.set(_, {
            rawTokenHex: ne(m.token),
            alertDate: m.date,
            isGroup: true,
            alertKeySource: m.hostContactId
          }), o.push(_);
        }
        if (o.length === 0) return 0;
        const i = Math.max(50, o.length * 2), a = [
          ...o
        ];
        for (; a.length < i; ) a.push(on($s(32)));
        for (let m = a.length - 1; m > 0; m--) {
          const h = Math.floor(Math.random() * (m + 1));
          [a[m], a[h]] = [
            a[h],
            a[m]
          ];
        }
        const { matches: l } = await s0(a);
        if (!l || l.length === 0) return 0;
        const f = Object.fromEntries(Object.entries(Nd).map(([m, h]) => [
          h,
          m
        ]));
        let d = 0;
        for (const m of l) {
          const h = r.get(m.token);
          if (!h) continue;
          const _ = Ct();
          let g, b;
          if (h.isGroup) {
            const T = (_.groupEncounters || []).find((A) => ne(A.token) === h.rawTokenHex);
            if (!T) continue;
            g = di(h.alertKeySource), b = ne(Qn(T.token, T.tokenIndex));
          } else {
            const A = [
              ..._.encounters || [],
              ..._.relationships || []
            ].find((L) => ne(L.rawToken) === h.rawTokenHex);
            if (!A) continue;
            g = di(A.theirContactId), b = ne(En(A.rawToken, e, A.queryIndex));
          }
          let v;
          try {
            v = fo(g, vd(m.encrypted_payload));
          } catch {
            continue;
          }
          const w = new TextDecoder().decode(v), y = w.slice(1, 9), R = `${y.slice(0, 4)}-${y.slice(4, 6)}-${y.slice(6, 8)}`, E = (w.length > 9 ? w.slice(9).split(",") : []).map((T) => f[T]).filter((T) => T !== void 0);
          let k;
          if (h.isGroup) {
            await R0(h.rawTokenHex, R, E, m.verified), d++;
            const T = (Ct().groupEncounters || []).find((A) => ne(A.token) === h.rawTokenHex);
            k = ne(Qn(T.token, T?.tokenIndex ?? 1));
          } else {
            const T = [
              ..._.encounters || [],
              ..._.relationships || []
            ].find((L) => ne(L.rawToken) === h.rawTokenHex);
            await N0(h.rawTokenHex, R, E, m.verified), d++;
            const A = [
              ...Ct().encounters || [],
              ...Ct().relationships || []
            ].find((L) => ne(L.rawToken) === h.rawTokenHex);
            k = ne(En(T.rawToken, e, A?.queryIndex ?? T.queryIndex + 1));
          }
          try {
            await Yr(k, h.alertDate);
          } catch (T) {
            console.warn("alerts: could not register next query token:", T.message);
          }
          try {
            await r0(b);
          } catch (T) {
            console.warn("alerts: could not delete old query token:", T.message);
          }
        }
        return d;
      }
      let gi = "/home";
      function U0(t) {
        gi = t;
      }
      function Cl() {
        const t = gi;
        return gi = "/home", t;
      }
      function j0(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b = t[3] ? "Verifying\u2026" : "Verify", v, w, y, R, N = t[6] ? "Use authenticator app instead" : "Use a backup code instead", E, k, T;
        function A(P, H) {
          return P[6] ? V0 : G0;
        }
        let L = A(t), D = L(t), q = t[4] && Al(t);
        return {
          c() {
            e = p("div"), n = p("button"), s = p("span"), s.textContent = "arrow_back", r = S(), o = p("span"), o.textContent = "Two-factor auth", i = S(), a = p("form"), D.c(), l = S(), f = p("label"), d = p("input"), m = O(`
          Remember this device`), h = S(), q && q.c(), _ = S(), g = p("button"), v = O(b), y = S(), R = p("button"), E = O(N), u(s, "class", "material-icons svelte-1r4ift8"), u(n, "type", "button"), u(n, "class", "back-btn svelte-1r4ift8"), n.disabled = t[3], u(o, "class", "otp-title svelte-1r4ift8"), u(e, "class", "otp-header svelte-1r4ift8"), u(d, "type", "checkbox"), d.disabled = t[3], u(d, "class", "svelte-1r4ift8"), u(f, "class", "remember-label svelte-1r4ift8"), u(g, "type", "submit"), g.disabled = w = t[3] || !t[6] && t[2].length !== 6 || t[6] && t[2].length !== 14, u(g, "class", "svelte-1r4ift8"), u(R, "type", "button"), u(R, "class", "backup-toggle svelte-1r4ift8"), R.disabled = t[3], u(a, "class", "svelte-1r4ift8");
          },
          m(P, H) {
            C(P, e, H), c(e, n), c(n, s), c(e, r), c(e, o), C(P, i, H), C(P, a, H), D.m(a, null), c(a, l), c(a, f), c(f, d), d.checked = t[7], c(f, m), c(a, h), q && q.m(a, null), c(a, _), c(a, g), c(g, v), c(a, y), c(a, R), c(R, E), k || (T = [
              z(n, "click", t[16]),
              z(d, "change", t[24]),
              z(R, "click", t[17]),
              z(a, "submit", $t(t[13]))
            ], k = true);
          },
          p(P, H) {
            H & 8 && (n.disabled = P[3]), L === (L = A(P)) && D ? D.p(P, H) : (D.d(1), D = L(P), D && (D.c(), D.m(a, l))), H & 8 && (d.disabled = P[3]), H & 128 && (d.checked = P[7]), P[4] ? q ? q.p(P, H) : (q = Al(P), q.c(), q.m(a, _)) : q && (q.d(1), q = null), H & 8 && b !== (b = P[3] ? "Verifying\u2026" : "Verify") && W(v, b), H & 76 && w !== (w = P[3] || !P[6] && P[2].length !== 6 || P[6] && P[2].length !== 14) && (g.disabled = w), H & 64 && N !== (N = P[6] ? "Use authenticator app instead" : "Use a backup code instead") && W(E, N), H & 8 && (R.disabled = P[3]);
          },
          d(P) {
            P && (I(e), I(i), I(a)), D.d(), q && q.d(), k = false, ce(T);
          }
        };
      }
      function W0(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g = t[3] ? "Logging in\u2026" : "Log in", b, v, w, y = t[4] && Rl(t);
        return {
          c() {
            e = p("div"), e.innerHTML = '<a href="#/login" class="tab active svelte-1r4ift8">Log in</a> <a href="#/signup" class="tab svelte-1r4ift8">Create account</a>', n = S(), s = p("form"), r = p("label"), o = O(`Username
          `), i = p("input"), a = S(), l = p("label"), f = O(`Password
          `), d = p("input"), m = S(), y && y.c(), h = S(), _ = p("button"), b = O(g), u(e, "class", "tabs svelte-1r4ift8"), u(i, "type", "text"), i.required = true, u(i, "autocomplete", "username"), u(i, "class", "svelte-1r4ift8"), u(r, "class", "svelte-1r4ift8"), u(d, "type", "password"), d.required = true, u(d, "autocomplete", "current-password"), u(d, "class", "svelte-1r4ift8"), u(l, "class", "svelte-1r4ift8"), u(_, "type", "submit"), _.disabled = t[3], u(_, "class", "svelte-1r4ift8"), u(s, "class", "svelte-1r4ift8");
          },
          m(R, N) {
            C(R, e, N), C(R, n, N), C(R, s, N), c(s, r), c(r, o), c(r, i), ae(i, t[0]), c(s, a), c(s, l), c(l, f), c(l, d), ae(d, t[1]), c(s, m), y && y.m(s, null), c(s, h), c(s, _), c(_, b), v || (w = [
              z(i, "input", t[20]),
              z(d, "input", t[21]),
              z(s, "submit", $t(t[12]))
            ], v = true);
          },
          p(R, N) {
            N & 1 && i.value !== R[0] && ae(i, R[0]), N & 2 && d.value !== R[1] && ae(d, R[1]), R[4] ? y ? y.p(R, N) : (y = Rl(R), y.c(), y.m(s, h)) : y && (y.d(1), y = null), N & 8 && g !== (g = R[3] ? "Logging in\u2026" : "Log in") && W(b, g), N & 8 && (_.disabled = R[3]);
          },
          d(R) {
            R && (I(e), I(n), I(s)), y && y.d(), v = false, ce(w);
          }
        };
      }
      function G0(t) {
        let e, n, s, r, o, i, a;
        return {
          c() {
            e = p("p"), e.textContent = "Enter the 6-digit code from your authenticator app.", n = S(), s = p("label"), r = O(`Authenticator code
            `), o = p("input"), u(e, "class", "otp-prompt svelte-1r4ift8"), u(o, "type", "text"), u(o, "inputmode", "numeric"), u(o, "pattern", "[0-9]*"), u(o, "maxlength", "6"), o.required = true, u(o, "autocomplete", "one-time-code"), u(o, "class", "svelte-1r4ift8"), u(s, "class", "svelte-1r4ift8");
          },
          m(l, f) {
            C(l, e, f), C(l, n, f), C(l, s, f), c(s, r), c(s, o), ae(o, t[2]), i || (a = z(o, "input", t[23]), i = true);
          },
          p(l, f) {
            f & 4 && o.value !== l[2] && ae(o, l[2]);
          },
          d(l) {
            l && (I(e), I(n), I(s)), i = false, a();
          }
        };
      }
      function V0(t) {
        let e, n, s, r, o, i, a;
        return {
          c() {
            e = p("p"), e.textContent = "Enter one of your backup codes (xxxx-xxxx-xxxx).", n = S(), s = p("label"), r = O(`Backup code
            `), o = p("input"), u(e, "class", "otp-prompt svelte-1r4ift8"), u(o, "type", "text"), u(o, "inputmode", "text"), u(o, "maxlength", "14"), o.required = true, u(o, "autocomplete", "off"), u(o, "placeholder", "xxxx-xxxx-xxxx"), u(o, "class", "svelte-1r4ift8"), u(s, "class", "svelte-1r4ift8");
          },
          m(l, f) {
            C(l, e, f), C(l, n, f), C(l, s, f), c(s, r), c(s, o), ae(o, t[2]), i || (a = z(o, "input", t[22]), i = true);
          },
          p(l, f) {
            f & 4 && o.value !== l[2] && ae(o, l[2]);
          },
          d(l) {
            l && (I(e), I(n), I(s)), i = false, a();
          }
        };
      }
      function Al(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[4]), u(e, "class", "error svelte-1r4ift8");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r & 16 && W(n, s[4]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Rl(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[4]), u(e, "class", "error svelte-1r4ift8");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r & 16 && W(n, s[4]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Nl(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Your password never leaves your device in plaintext.", u(e, "class", "privacy-note svelte-1r4ift8");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Ll(t) {
        let e, n, s, r, o, i, a, l, f, d = t[9] === 1 ? "" : "s", m, h, _, g, b, v, w = t[10] ? "Deleting\u2026" : "Delete old encounters", y, R, N, E, k, T, A = t[11] && Pl(t);
        return {
          c() {
            e = p("div"), n = p("div"), s = p("h2"), s.textContent = "Free up storage space", r = S(), o = p("p"), i = O(`Your account is using 75% or more of its storage limit.
        You have `), a = p("strong"), l = O(t[9]), f = O(" encounter"), m = O(d), h = O(` older
        than one year. Deleting them will free up space.`), _ = S(), A && A.c(), g = S(), b = p("div"), v = p("button"), y = O(w), R = S(), N = p("button"), E = O("Keep them"), u(s, "id", "cleanup-title"), u(s, "class", "svelte-1r4ift8"), u(o, "class", "svelte-1r4ift8"), u(v, "class", "btn-primary svelte-1r4ift8"), v.disabled = t[10], u(N, "class", "btn-ghost svelte-1r4ift8"), N.disabled = t[10], u(b, "class", "cleanup-actions svelte-1r4ift8"), u(n, "class", "cleanup-dialog svelte-1r4ift8"), u(e, "class", "cleanup-overlay svelte-1r4ift8"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "cleanup-title");
          },
          m(L, D) {
            C(L, e, D), c(e, n), c(n, s), c(n, r), c(n, o), c(o, i), c(o, a), c(a, l), c(a, f), c(a, m), c(o, h), c(n, _), A && A.m(n, null), c(n, g), c(n, b), c(b, v), c(v, y), c(b, R), c(b, N), c(N, E), k || (T = [
              z(v, "click", t[14]),
              z(N, "click", t[15])
            ], k = true);
          },
          p(L, D) {
            D & 512 && W(l, L[9]), D & 512 && d !== (d = L[9] === 1 ? "" : "s") && W(m, d), L[11] ? A ? A.p(L, D) : (A = Pl(L), A.c(), A.m(n, g)) : A && (A.d(1), A = null), D & 1024 && w !== (w = L[10] ? "Deleting\u2026" : "Delete old encounters") && W(y, w), D & 1024 && (v.disabled = L[10]), D & 1024 && (N.disabled = L[10]);
          },
          d(L) {
            L && I(e), A && A.d(), k = false, ce(T);
          }
        };
      }
      function Pl(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[11]), u(e, "class", "cleanup-error svelte-1r4ift8");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r & 2048 && W(n, s[11]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Y0(t) {
        let e, n, s, r, o, i, a, l, f;
        function d(b, v) {
          return b[5] ? j0 : W0;
        }
        let m = d(t), h = m(t), _ = !t[5] && Nl(), g = t[8] && Ll(t);
        return {
          c() {
            e = p("main"), n = p("div"), n.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1r4ift8"/> <h1 class="svelte-1r4ift8"><span class="brand-peach svelte-1r4ift8">Peach</span><span class="brand-safe svelte-1r4ift8">Safe</span></h1>', s = S(), r = p("div"), h.c(), o = S(), _ && _.c(), i = S(), g && g.c(), a = Nt(), u(n, "class", "brand svelte-1r4ift8"), u(n, "role", "button"), u(n, "tabindex", "0"), u(r, "class", "card svelte-1r4ift8"), u(e, "class", "svelte-1r4ift8");
          },
          m(b, v) {
            C(b, e, v), c(e, n), c(e, s), c(e, r), h.m(r, null), c(e, o), _ && _.m(e, null), C(b, i, v), g && g.m(b, v), C(b, a, v), l || (f = [
              z(n, "click", t[18]),
              z(n, "keypress", t[19])
            ], l = true);
          },
          p(b, [v]) {
            m === (m = d(b)) && h ? h.p(b, v) : (h.d(1), h = m(b), h && (h.c(), h.m(r, null))), b[5] ? _ && (_.d(1), _ = null) : _ || (_ = Nl(), _.c(), _.m(e, null)), b[8] ? g ? g.p(b, v) : (g = Ll(b), g.c(), g.m(a.parentNode, a)) : g && (g.d(1), g = null);
          },
          i: Z,
          o: Z,
          d(b) {
            b && (I(e), I(i), I(a)), h.d(), _ && _.d(), g && g.d(b), l = false, ce(f);
          }
        };
      }
      function K0(t, e, n) {
        et(() => {
          Ed();
        });
        let s = "", r = "", o = "", i = false, a = null, l = false, f = false, d = false, m = null, h = null, _ = false, g = 0, b = "", v = false, w = null;
        async function y() {
          n(4, a = null), n(3, i = true);
          try {
            const { challenge: Y, auth_salt: G, enc_salt: U } = await Zi(s), Q = await jt(r, xe(G)), B = bd(new TextEncoder().encode(Y), Q), V = btoa(String.fromCharCode(...B)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), F = await Sl(s, V);
            if (F.requires_otp) {
              m = V, h = U, n(5, l = true);
              return;
            }
            await N(U, F);
          } catch (Y) {
            n(4, a = Y.message);
          } finally {
            n(3, i = false);
          }
        }
        async function R() {
          n(4, a = null), n(3, i = true);
          try {
            const Y = await Sl(s, m, o, d);
            await N(h, Y);
          } catch (Y) {
            n(4, a = Y.message);
          } finally {
            n(3, i = false);
          }
        }
        async function N(Y, G) {
          kd(s);
          const U = await jt(r, xe(Y));
          Qi(U), await qd(G.bootstrap ?? null), Hd().catch(() => {
          }), O0() ? (n(9, g = M0()), b = Cl(), n(8, _ = true)) : de(Cl());
        }
        async function E() {
          n(11, w = null), n(10, v = true);
          try {
            await q0(), n(8, _ = false), de(b);
          } catch (Y) {
            n(11, w = Y.message);
          } finally {
            n(10, v = false);
          }
        }
        function k() {
          n(8, _ = false), de(b);
        }
        function T() {
          n(5, l = false), n(2, o = ""), m = null, h = null, n(4, a = null), n(6, f = false), n(7, d = false);
        }
        function A() {
          n(6, f = !f), n(2, o = ""), n(4, a = null);
        }
        const L = () => de("/"), D = (Y) => Y.key === "Enter" && de("/");
        function q() {
          s = this.value, n(0, s);
        }
        function P() {
          r = this.value, n(1, r);
        }
        function H() {
          o = this.value, n(2, o);
        }
        function M() {
          o = this.value, n(2, o);
        }
        function j() {
          d = this.checked, n(7, d);
        }
        return [
          s,
          r,
          o,
          i,
          a,
          l,
          f,
          d,
          _,
          g,
          v,
          w,
          y,
          R,
          E,
          k,
          T,
          A,
          L,
          D,
          q,
          P,
          H,
          M,
          j
        ];
      }
      class J0 extends Ce {
        constructor(e) {
          super(), Ie(this, e, K0, Y0, Te, {});
        }
      }
      function Dl(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[6]), u(e, "class", "error svelte-1c8cd3e");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r & 64 && W(n, s[6]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function X0(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w, y, R, N, E, k, T, A, L, D, q, P, H, M = t[5] ? "Creating account\u2026" : "Create account", j, Y, G, U, Q, B = t[6] && Dl(t);
        return {
          c() {
            e = p("main"), n = p("div"), n.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-1c8cd3e"/> <h1 class="svelte-1c8cd3e"><span class="brand-peach svelte-1c8cd3e">Peach</span><span class="brand-safe svelte-1c8cd3e">Safe</span></h1>', s = S(), r = p("div"), o = p("div"), o.innerHTML = '<a href="#/login" class="tab svelte-1c8cd3e">Log in</a> <a href="#/signup" class="tab active svelte-1c8cd3e">Create account</a>', i = S(), a = p("form"), l = p("label"), f = O(`Beta code
        `), d = p("input"), m = S(), h = p("label"), _ = O(`Username
        `), g = p("input"), b = S(), v = p("label"), w = O(`Email
        `), y = p("input"), R = S(), N = p("label"), E = O(`Password
        `), k = p("input"), T = S(), A = p("label"), L = O(`Confirm password
        `), D = p("input"), q = S(), B && B.c(), P = S(), H = p("button"), j = O(M), Y = S(), G = p("p"), G.textContent = "Your password never leaves your device in plaintext.", u(n, "class", "brand svelte-1c8cd3e"), u(n, "role", "button"), u(n, "tabindex", "0"), u(o, "class", "tabs svelte-1c8cd3e"), u(d, "type", "text"), d.required = true, u(d, "autocomplete", "off"), u(d, "class", "svelte-1c8cd3e"), u(l, "class", "svelte-1c8cd3e"), u(g, "type", "text"), g.required = true, u(g, "autocomplete", "username"), u(g, "class", "svelte-1c8cd3e"), u(h, "class", "svelte-1c8cd3e"), u(y, "type", "email"), y.required = true, u(y, "autocomplete", "email"), u(y, "class", "svelte-1c8cd3e"), u(v, "class", "svelte-1c8cd3e"), u(k, "type", "password"), k.required = true, u(k, "autocomplete", "new-password"), u(k, "minlength", "12"), u(k, "class", "svelte-1c8cd3e"), u(N, "class", "svelte-1c8cd3e"), u(D, "type", "password"), D.required = true, u(D, "autocomplete", "new-password"), u(D, "class", "svelte-1c8cd3e"), u(A, "class", "svelte-1c8cd3e"), u(H, "type", "submit"), H.disabled = t[5], u(H, "class", "svelte-1c8cd3e"), u(a, "class", "svelte-1c8cd3e"), u(r, "class", "card svelte-1c8cd3e"), u(G, "class", "privacy-note svelte-1c8cd3e"), u(e, "class", "svelte-1c8cd3e");
          },
          m(V, F) {
            C(V, e, F), c(e, n), c(e, s), c(e, r), c(r, o), c(r, i), c(r, a), c(a, l), c(l, f), c(l, d), ae(d, t[4]), c(a, m), c(a, h), c(h, _), c(h, g), ae(g, t[0]), c(a, b), c(a, v), c(v, w), c(v, y), ae(y, t[1]), c(a, R), c(a, N), c(N, E), c(N, k), ae(k, t[2]), c(a, T), c(a, A), c(A, L), c(A, D), ae(D, t[3]), c(a, q), B && B.m(a, null), c(a, P), c(a, H), c(H, j), c(e, Y), c(e, G), U || (Q = [
              z(n, "click", t[8]),
              z(n, "keypress", t[9]),
              z(d, "input", t[10]),
              z(g, "input", t[11]),
              z(y, "input", t[12]),
              z(k, "input", t[13]),
              z(D, "input", t[14]),
              z(a, "submit", $t(t[7]))
            ], U = true);
          },
          p(V, [F]) {
            F & 16 && d.value !== V[4] && ae(d, V[4]), F & 1 && g.value !== V[0] && ae(g, V[0]), F & 2 && y.value !== V[1] && ae(y, V[1]), F & 4 && k.value !== V[2] && ae(k, V[2]), F & 8 && D.value !== V[3] && ae(D, V[3]), V[6] ? B ? B.p(V, F) : (B = Dl(V), B.c(), B.m(a, P)) : B && (B.d(1), B = null), F & 32 && M !== (M = V[5] ? "Creating account\u2026" : "Create account") && W(j, M), F & 32 && (H.disabled = V[5]);
          },
          i: Z,
          o: Z,
          d(V) {
            V && I(e), B && B.d(), U = false, ce(Q);
          }
        };
      }
      const Q0 = "psbeta";
      function Z0(t, e, n) {
        et(() => {
          Ed();
        });
        let s = "", r = "", o = "", i = "", a = "", l = false, f = null;
        async function d() {
          if (n(6, f = null), a !== Q0) {
            n(6, f = "Sorry, we're in closed beta at the moment");
            return;
          }
          if (o !== i) {
            n(6, f = "Passwords do not match");
            return;
          }
          if (o.length < 12) {
            n(6, f = "Password must be at least 12 characters");
            return;
          }
          n(5, l = true);
          try {
            const { auth_salt: y, enc_salt: R } = await Zi(s), N = await jt(o, xe(y)), E = ne(gd(N));
            await Yy(s, r, E), kd(s);
            const k = await jt(o, xe(R));
            Qi(k), await qd(), de("/home");
          } catch (y) {
            n(6, f = y.message);
          } finally {
            n(5, l = false);
          }
        }
        const m = () => de("/"), h = (y) => y.key === "Enter" && de("/");
        function _() {
          a = this.value, n(4, a);
        }
        function g() {
          s = this.value, n(0, s);
        }
        function b() {
          r = this.value, n(1, r);
        }
        function v() {
          o = this.value, n(2, o);
        }
        function w() {
          i = this.value, n(3, i);
        }
        return [
          s,
          r,
          o,
          i,
          a,
          l,
          f,
          d,
          m,
          h,
          _,
          g,
          b,
          v,
          w
        ];
      }
      class x0 extends Ce {
        constructor(e) {
          super(), Ie(this, e, Z0, X0, Te, {});
        }
      }
      function Ol(t) {
        let e;
        return {
          c() {
            e = p("span"), u(e, "class", "unread-dot svelte-ojufui");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function $0(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h = t[1] ? "notifications_active" : "notifications", _, g, b, v, w, y, R, N, E, k, T = t[1] && Ol();
        return {
          c() {
            e = p("nav"), n = p("a"), n.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-ojufui"/> <span class="brand-label svelte-ojufui"><span class="brand-peach svelte-ojufui">Peach</span><span class="brand-safe svelte-ojufui">Safe</span></span>', s = S(), r = p("div"), o = p("a"), o.innerHTML = '<span class="material-icons svelte-ojufui">people</span> <span class="tab-label svelte-ojufui">Encounters</span>', i = S(), a = p("a"), a.innerHTML = '<span class="material-icons svelte-ojufui">science</span> <span class="tab-label svelte-ojufui">Test Results</span>', l = S(), f = p("a"), d = p("span"), m = p("span"), _ = O(h), g = S(), T && T.c(), b = S(), v = p("span"), v.textContent = "Alerts", w = S(), y = p("a"), y.innerHTML = '<span class="material-icons svelte-ojufui">settings</span> <span class="tab-label svelte-ojufui">Settings</span>', R = S(), N = p("button"), N.textContent = "Sign out", u(n, "href", "#/home"), u(n, "class", "brand svelte-ojufui"), u(o, "href", "#/encounters"), u(o, "class", "tab svelte-ojufui"), se(o, "active", t[0] === "/encounters"), u(a, "href", "#/results"), u(a, "class", "tab svelte-ojufui"), se(a, "active", t[0] === "/results"), u(m, "class", "material-icons svelte-ojufui"), u(d, "class", "icon-wrap svelte-ojufui"), u(v, "class", "tab-label svelte-ojufui"), u(f, "href", "#/alerts"), u(f, "class", "tab svelte-ojufui"), se(f, "active", t[0] === "/alerts"), se(f, "has-unread", t[1]), u(r, "class", "tabs svelte-ojufui"), u(y, "href", "#/settings"), u(y, "class", "tab settings-tab svelte-ojufui"), u(y, "title", "Settings"), se(y, "active", t[0] === "/settings" || t[0] === "/change-password" || t[0] === "/settings/2fa-setup"), u(N, "class", "signout-btn svelte-ojufui"), u(e, "class", "svelte-ojufui");
          },
          m(A, L) {
            C(A, e, L), c(e, n), c(e, s), c(e, r), c(r, o), c(r, i), c(r, a), c(r, l), c(r, f), c(f, d), c(d, m), c(m, _), c(d, g), T && T.m(d, null), c(f, b), c(f, v), c(e, w), c(e, y), c(e, R), c(e, N), E || (k = z(N, "click", t[2]), E = true);
          },
          p(A, [L]) {
            L & 1 && se(o, "active", A[0] === "/encounters"), L & 1 && se(a, "active", A[0] === "/results"), L & 2 && h !== (h = A[1] ? "notifications_active" : "notifications") && W(_, h), A[1] ? T || (T = Ol(), T.c(), T.m(d, null)) : T && (T.d(1), T = null), L & 1 && se(f, "active", A[0] === "/alerts"), L & 2 && se(f, "has-unread", A[1]), L & 1 && se(y, "active", A[0] === "/settings" || A[0] === "/change-password" || A[0] === "/settings/2fa-setup");
          },
          i: Z,
          o: Z,
          d(A) {
            A && I(e), T && T.d(), E = false, k();
          }
        };
      }
      function ew(t, e, n) {
        let s, r;
        st(t, o1, (i) => n(0, s = i)), st(t, Ld, (i) => n(1, r = i));
        async function o() {
          await xi(), de("/login");
        }
        return [
          s,
          r,
          o
        ];
      }
      class Ht extends Ce {
        constructor(e) {
          super(), Ie(this, e, ew, $0, Te, {});
        }
      }
      function tw(t) {
        let e, n, s, r;
        return e = new Ht({}), {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), s.innerHTML = `<div class="hero svelte-16ahr9l"><div class="logo-wrap svelte-16ahr9l"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="logo-img svelte-16ahr9l"/></div> <h1 class="app-name svelte-16ahr9l"><span class="brand-peach svelte-16ahr9l">Peach</span><span class="brand-safe svelte-16ahr9l">Safe</span></h1></div> <div class="actions svelte-16ahr9l"><a href="#/encounter-exchange" class="btn-filled svelte-16ahr9l"><span class="material-icons svelte-16ahr9l">qr_code</span>
      Log New Encounter</a></div>`, u(s, "class", "svelte-16ahr9l");
          },
          m(o, i) {
            Oe(e, o, i), C(o, n, i), C(o, s, i), r = true;
          },
          p: Z,
          i(o) {
            r || (_e(e.$$.fragment, o), r = true);
          },
          o(o) {
            we(e.$$.fragment, o), r = false;
          },
          d(o) {
            o && (I(n), I(s)), Me(e, o);
          }
        };
      }
      function nw(t) {
        return et(() => {
          if (!lt()) {
            de("/login");
            return;
          }
        }), [];
      }
      class sw extends Ce {
        constructor(e) {
          super(), Ie(this, e, nw, tw, Te, {});
        }
      }
      function Ml(t, e, n) {
        const s = t.slice();
        return s[22] = e[n], s;
      }
      function ql(t, e, n) {
        const s = t.slice();
        return s[25] = e[n], s;
      }
      function Hl(t, e, n) {
        const s = t.slice();
        return s[28] = e[n], s;
      }
      function Bl(t, e, n) {
        const s = t.slice();
        return s[25] = e[n], s;
      }
      function Fl(t) {
        let e, n, s, r, o, i, a, l, f, d, m = t[6] ? "Creating\u2026" : "Group encounter", h, _, g, b, v, w, y, R, N, E = t[7] && zl(t);
        return {
          c() {
            e = p("div"), n = p("div"), s = p("p"), s.textContent = "New encounter", r = S(), o = p("button"), o.innerHTML = '<span class="material-icons type-icon svelte-81oe9z">person</span> <span class="type-label svelte-81oe9z">1:1 encounter</span> <span class="material-icons type-chevron svelte-81oe9z">chevron_right</span>', i = S(), a = p("button"), l = p("span"), l.textContent = "groups", f = S(), d = p("span"), h = O(m), _ = S(), g = p("span"), g.textContent = "chevron_right", b = S(), E && E.c(), v = S(), w = p("button"), y = O("Cancel"), u(s, "class", "modal-title svelte-81oe9z"), u(o, "class", "type-card svelte-81oe9z"), u(l, "class", "material-icons type-icon svelte-81oe9z"), u(d, "class", "type-label svelte-81oe9z"), u(g, "class", "material-icons type-chevron svelte-81oe9z"), u(a, "class", "type-card svelte-81oe9z"), a.disabled = t[6], u(w, "class", "btn-text cancel-btn svelte-81oe9z"), w.disabled = t[6], u(n, "class", "modal-sheet svelte-81oe9z"), u(e, "class", "modal-backdrop svelte-81oe9z");
          },
          m(k, T) {
            C(k, e, T), c(e, n), c(n, s), c(n, r), c(n, o), c(n, i), c(n, a), c(a, l), c(a, f), c(a, d), c(d, h), c(a, _), c(a, g), c(n, b), E && E.m(n, null), c(n, v), c(n, w), c(w, y), R || (N = [
              z(o, "click", t[16]),
              z(a, "click", t[12]),
              z(w, "click", t[17]),
              z(n, "click", Gv(t[14])),
              z(e, "click", t[18])
            ], R = true);
          },
          p(k, T) {
            T[0] & 64 && m !== (m = k[6] ? "Creating\u2026" : "Group encounter") && W(h, m), T[0] & 64 && (a.disabled = k[6]), k[7] ? E ? E.p(k, T) : (E = zl(k), E.c(), E.m(n, v)) : E && (E.d(1), E = null), T[0] & 64 && (w.disabled = k[6]);
          },
          d(k) {
            k && I(e), E && E.d(), R = false, ce(N);
          }
        };
      }
      function zl(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[7]), u(e, "class", "modal-error svelte-81oe9z");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 128 && W(n, s[7]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function rw(t) {
        let e, n, s, r, o = t[10].length > 0 && Ul(t), i = t[8].length > 0 && Wl(t), a = t[9].length > 0 && Vl(t);
        function l(m, h) {
          return m[0].length === 0 && m[10].length === 0 && m[9].length === 0 && m[1].length === 0 ? cw : m[0].length === 0 ? lw : aw;
        }
        let f = l(t), d = f(t);
        return {
          c() {
            o && o.c(), e = S(), i && i.c(), n = S(), a && a.c(), s = S(), r = p("section"), d.c(), u(r, "class", "card list-card svelte-81oe9z");
          },
          m(m, h) {
            o && o.m(m, h), C(m, e, h), i && i.m(m, h), C(m, n, h), a && a.m(m, h), C(m, s, h), C(m, r, h), d.m(r, null);
          },
          p(m, h) {
            m[10].length > 0 ? o ? o.p(m, h) : (o = Ul(m), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), m[8].length > 0 ? i ? i.p(m, h) : (i = Wl(m), i.c(), i.m(n.parentNode, n)) : i && (i.d(1), i = null), m[9].length > 0 ? a ? a.p(m, h) : (a = Vl(m), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null), f === (f = l(m)) && d ? d.p(m, h) : (d.d(1), d = f(m), d && (d.c(), d.m(r, null)));
          },
          d(m) {
            m && (I(e), I(n), I(s), I(r)), o && o.d(m), i && i.d(m), a && a.d(m), d.d();
          }
        };
      }
      function ow(t) {
        let e, n, s;
        return {
          c() {
            e = p("section"), n = p("p"), s = O(t[3]), u(n, "class", "error svelte-81oe9z"), u(e, "class", "card list-card svelte-81oe9z");
          },
          m(r, o) {
            C(r, e, o), c(e, n), c(n, s);
          },
          p(r, o) {
            o[0] & 8 && W(s, r[3]);
          },
          d(r) {
            r && I(e);
          }
        };
      }
      function iw(t) {
        let e;
        return {
          c() {
            e = p("section"), e.innerHTML = '<p class="muted svelte-81oe9z">Loading\u2026</p>', u(e, "class", "card list-card svelte-81oe9z");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function Ul(t) {
        let e, n, s, r, o = Se(t[10]), i = [];
        for (let a = 0; a < o.length; a += 1) i[a] = jl(Bl(t, o, a));
        return {
          c() {
            e = p("section"), n = p("div"), n.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">favorite</span> <h2 class="svelte-81oe9z">Ongoing partners</h2>', s = S(), r = p("ul");
            for (let a = 0; a < i.length; a += 1) i[a].c();
            u(n, "class", "section-header svelte-81oe9z"), u(r, "class", "svelte-81oe9z"), u(e, "class", "card list-card svelte-81oe9z");
          },
          m(a, l) {
            C(a, e, l), c(e, n), c(e, s), c(e, r);
            for (let f = 0; f < i.length; f += 1) i[f] && i[f].m(r, null);
          },
          p(a, l) {
            if (l[0] & 1024) {
              o = Se(a[10]);
              let f;
              for (f = 0; f < o.length; f += 1) {
                const d = Bl(a, o, f);
                i[f] ? i[f].p(d, l) : (i[f] = jl(d), i[f].c(), i[f].m(r, null));
              }
              for (; f < i.length; f += 1) i[f].d(1);
              i.length = o.length;
            }
          },
          d(a) {
            a && I(e), St(i, a);
          }
        };
      }
      function jl(t) {
        let e, n, s, r, o, i, a = Kr(t[25]) + "", l, f, d, m = Jr(t[25]) + "", h, _, g, b, v;
        return {
          c() {
            e = p("li"), n = p("a"), s = p("span"), s.textContent = "favorite", r = S(), o = p("span"), i = p("span"), l = O(a), f = S(), d = p("span"), h = O(m), _ = S(), g = p("span"), g.textContent = "chevron_right", v = S(), u(s, "class", "material-icons rel-icon active svelte-81oe9z"), u(i, "class", "rel-name svelte-81oe9z"), u(d, "class", "rel-sub svelte-81oe9z"), u(o, "class", "rel-main svelte-81oe9z"), u(g, "class", "material-icons chevron svelte-81oe9z"), u(n, "class", "rel-row svelte-81oe9z"), u(n, "href", b = "#/relationships/" + ne(t[25].rawToken)), u(e, "class", "svelte-81oe9z");
          },
          m(w, y) {
            C(w, e, y), c(e, n), c(n, s), c(n, r), c(n, o), c(o, i), c(i, l), c(o, f), c(o, d), c(d, h), c(n, _), c(n, g), c(e, v);
          },
          p(w, y) {
            y[0] & 1024 && a !== (a = Kr(w[25]) + "") && W(l, a), y[0] & 1024 && m !== (m = Jr(w[25]) + "") && W(h, m), y[0] & 1024 && b !== (b = "#/relationships/" + ne(w[25].rawToken)) && u(n, "href", b);
          },
          d(w) {
            w && I(e);
          }
        };
      }
      function Wl(t) {
        let e, n, s, r, o = Se(t[8]), i = [];
        for (let a = 0; a < o.length; a += 1) i[a] = Gl(Hl(t, o, a));
        return {
          c() {
            e = p("section"), n = p("div"), n.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">groups</span> <h2 class="svelte-81oe9z">Group encounters</h2>', s = S(), r = p("ul");
            for (let a = 0; a < i.length; a += 1) i[a].c();
            u(n, "class", "section-header svelte-81oe9z"), u(r, "class", "svelte-81oe9z"), u(e, "class", "card list-card svelte-81oe9z");
          },
          m(a, l) {
            C(a, e, l), c(e, n), c(e, s), c(e, r);
            for (let f = 0; f < i.length; f += 1) i[f] && i[f].m(r, null);
          },
          p(a, l) {
            if (l[0] & 256) {
              o = Se(a[8]);
              let f;
              for (f = 0; f < o.length; f += 1) {
                const d = Hl(a, o, f);
                i[f] ? i[f].p(d, l) : (i[f] = Gl(d), i[f].c(), i[f].m(r, null));
              }
              for (; f < i.length; f += 1) i[f].d(1);
              i.length = o.length;
            }
          },
          d(a) {
            a && I(e), St(i, a);
          }
        };
      }
      function Gl(t) {
        let e, n, s, r, o, i, a = Xl(t[28]) + "", l, f, d, m = Ql(t[28]) + "", h, _, g, b, v;
        return {
          c() {
            e = p("li"), n = p("a"), s = p("span"), s.textContent = "groups", r = S(), o = p("span"), i = p("span"), l = O(a), f = S(), d = p("span"), h = O(m), _ = S(), g = p("span"), g.textContent = "chevron_right", v = S(), u(s, "class", "material-icons rel-icon active svelte-81oe9z"), u(i, "class", "rel-name svelte-81oe9z"), u(d, "class", "rel-sub svelte-81oe9z"), u(o, "class", "rel-main svelte-81oe9z"), u(g, "class", "material-icons chevron svelte-81oe9z"), u(n, "class", "rel-row svelte-81oe9z"), u(n, "href", b = "#/groups/" + ne(t[28].token)), u(e, "class", "svelte-81oe9z");
          },
          m(w, y) {
            C(w, e, y), c(e, n), c(n, s), c(n, r), c(n, o), c(o, i), c(i, l), c(o, f), c(o, d), c(d, h), c(n, _), c(n, g), c(e, v);
          },
          p(w, y) {
            y[0] & 256 && a !== (a = Xl(w[28]) + "") && W(l, a), y[0] & 256 && m !== (m = Ql(w[28]) + "") && W(h, m), y[0] & 256 && b !== (b = "#/groups/" + ne(w[28].token)) && u(n, "href", b);
          },
          d(w) {
            w && I(e);
          }
        };
      }
      function Vl(t) {
        let e, n, s, r = t[4] ? "expand_less" : "expand_more", o, i, a, l, f = t[9].length + "", d, m, h, _, g, b = t[4] && Yl(t);
        return {
          c() {
            e = p("section"), n = p("button"), s = p("span"), o = O(r), i = S(), a = p("span"), l = O("Archived partners ("), d = O(f), m = O(")"), h = S(), b && b.c(), u(s, "class", "material-icons toggle-icon svelte-81oe9z"), u(a, "class", "muted-label svelte-81oe9z"), u(n, "class", "collapse-toggle svelte-81oe9z"), u(e, "class", "card list-card svelte-81oe9z");
          },
          m(v, w) {
            C(v, e, w), c(e, n), c(n, s), c(s, o), c(n, i), c(n, a), c(a, l), c(a, d), c(a, m), c(e, h), b && b.m(e, null), _ || (g = z(n, "click", t[19]), _ = true);
          },
          p(v, w) {
            w[0] & 16 && r !== (r = v[4] ? "expand_less" : "expand_more") && W(o, r), w[0] & 512 && f !== (f = v[9].length + "") && W(d, f), v[4] ? b ? b.p(v, w) : (b = Yl(v), b.c(), b.m(e, null)) : b && (b.d(1), b = null);
          },
          d(v) {
            v && I(e), b && b.d(), _ = false, g();
          }
        };
      }
      function Yl(t) {
        let e, n = Se(t[9]), s = [];
        for (let r = 0; r < n.length; r += 1) s[r] = Kl(ql(t, n, r));
        return {
          c() {
            e = p("ul");
            for (let r = 0; r < s.length; r += 1) s[r].c();
            u(e, "class", "svelte-81oe9z");
          },
          m(r, o) {
            C(r, e, o);
            for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(e, null);
          },
          p(r, o) {
            if (o[0] & 512) {
              n = Se(r[9]);
              let i;
              for (i = 0; i < n.length; i += 1) {
                const a = ql(r, n, i);
                s[i] ? s[i].p(a, o) : (s[i] = Kl(a), s[i].c(), s[i].m(e, null));
              }
              for (; i < s.length; i += 1) s[i].d(1);
              s.length = n.length;
            }
          },
          d(r) {
            r && I(e), St(s, r);
          }
        };
      }
      function Kl(t) {
        let e, n, s, r, o, i, a = Kr(t[25]) + "", l, f, d, m = Jr(t[25]) + "", h, _, g, b, v;
        return {
          c() {
            e = p("li"), n = p("a"), s = p("span"), s.textContent = "favorite_border", r = S(), o = p("span"), i = p("span"), l = O(a), f = S(), d = p("span"), h = O(m), _ = S(), g = p("span"), g.textContent = "chevron_right", v = S(), u(s, "class", "material-icons rel-icon ended svelte-81oe9z"), u(i, "class", "rel-name svelte-81oe9z"), u(d, "class", "rel-sub svelte-81oe9z"), u(o, "class", "rel-main svelte-81oe9z"), u(g, "class", "material-icons chevron svelte-81oe9z"), u(n, "class", "rel-row svelte-81oe9z"), u(n, "href", b = "#/relationships/" + ne(t[25].rawToken)), u(e, "class", "svelte-81oe9z");
          },
          m(w, y) {
            C(w, e, y), c(e, n), c(n, s), c(n, r), c(n, o), c(o, i), c(i, l), c(o, f), c(o, d), c(d, h), c(n, _), c(n, g), c(e, v);
          },
          p(w, y) {
            y[0] & 512 && a !== (a = Kr(w[25]) + "") && W(l, a), y[0] & 512 && m !== (m = Jr(w[25]) + "") && W(h, m), y[0] & 512 && b !== (b = "#/relationships/" + ne(w[25].rawToken)) && u(n, "href", b);
          },
          d(w) {
            w && I(e);
          }
        };
      }
      function aw(t) {
        let e, n, s, r = Se(t[11]), o = [];
        for (let i = 0; i < r.length; i += 1) o[i] = Jl(Ml(t, r, i));
        return {
          c() {
            e = p("div"), e.innerHTML = '<span class="material-icons section-icon svelte-81oe9z">check_circle_outline</span> <h2 class="svelte-81oe9z">One-time encounters</h2>', n = S(), s = p("ul");
            for (let i = 0; i < o.length; i += 1) o[i].c();
            u(e, "class", "section-header svelte-81oe9z"), u(s, "class", "svelte-81oe9z");
          },
          m(i, a) {
            C(i, e, a), C(i, n, a), C(i, s, a);
            for (let l = 0; l < o.length; l += 1) o[l] && o[l].m(s, null);
          },
          p(i, a) {
            if (a[0] & 2048) {
              r = Se(i[11]);
              let l;
              for (l = 0; l < r.length; l += 1) {
                const f = Ml(i, r, l);
                o[l] ? o[l].p(f, a) : (o[l] = Jl(f), o[l].c(), o[l].m(s, null));
              }
              for (; l < o.length; l += 1) o[l].d(1);
              o.length = r.length;
            }
          },
          d(i) {
            i && (I(e), I(n), I(s)), St(o, i);
          }
        };
      }
      function lw(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "No one-time encounters.", u(e, "class", "muted list-muted svelte-81oe9z");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function cw(t) {
        let e, n, s, r, o, i, a, l;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "people_outline", s = S(), r = p("p"), r.textContent = "No encounters recorded yet.", o = S(), i = p("button"), i.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, u(n, "class", "material-icons empty-icon svelte-81oe9z"), u(r, "class", "svelte-81oe9z"), u(i, "class", "btn-filled svelte-81oe9z"), u(e, "class", "empty-state svelte-81oe9z");
          },
          m(f, d) {
            C(f, e, d), c(e, n), c(e, s), c(e, r), c(e, o), c(e, i), a || (l = z(i, "click", t[20]), a = true);
          },
          p: Z,
          d(f) {
            f && I(e), a = false, l();
          }
        };
      }
      function uw(t) {
        let e, n = ne(t[22].rawToken).slice(0, 12) + "", s, r;
        return {
          c() {
            e = p("span"), s = O(n), r = O("\u2026"), u(e, "class", "rel-sub enc-token svelte-81oe9z");
          },
          m(o, i) {
            C(o, e, i), c(e, s), c(e, r);
          },
          p(o, i) {
            i[0] & 2048 && n !== (n = ne(o[22].rawToken).slice(0, 12) + "") && W(s, n);
          },
          d(o) {
            o && I(e);
          }
        };
      }
      function fw(t) {
        let e, n = t[22].note + "", s;
        return {
          c() {
            e = p("span"), s = O(n), u(e, "class", "rel-sub enc-note svelte-81oe9z");
          },
          m(r, o) {
            C(r, e, o), c(e, s);
          },
          p(r, o) {
            o[0] & 2048 && n !== (n = r[22].note + "") && W(s, n);
          },
          d(r) {
            r && I(e);
          }
        };
      }
      function Jl(t) {
        let e, n, s, r, o, i, a = t[22].date + "", l, f, d, m, h, _;
        function g(w, y) {
          return w[22].note ? fw : uw;
        }
        let b = g(t), v = b(t);
        return {
          c() {
            e = p("li"), n = p("a"), s = p("span"), s.textContent = "check_circle_outline", r = S(), o = p("span"), i = p("span"), l = O(a), f = S(), v.c(), d = S(), m = p("span"), m.textContent = "chevron_right", _ = S(), u(s, "class", "material-icons rel-icon active svelte-81oe9z"), u(i, "class", "rel-name svelte-81oe9z"), u(o, "class", "rel-main svelte-81oe9z"), u(m, "class", "material-icons chevron svelte-81oe9z"), u(n, "class", "rel-row svelte-81oe9z"), u(n, "href", h = "#/encounters/" + ne(t[22].rawToken)), u(e, "class", "svelte-81oe9z");
          },
          m(w, y) {
            C(w, e, y), c(e, n), c(n, s), c(n, r), c(n, o), c(o, i), c(i, l), c(o, f), v.m(o, null), c(n, d), c(n, m), c(e, _);
          },
          p(w, y) {
            y[0] & 2048 && a !== (a = w[22].date + "") && W(l, a), b === (b = g(w)) && v ? v.p(w, y) : (v.d(1), v = b(w), v && (v.c(), v.m(o, null))), y[0] & 2048 && h !== (h = "#/encounters/" + ne(w[22].rawToken)) && u(n, "href", h);
          },
          d(w) {
            w && I(e), v.d();
          }
        };
      }
      function dw(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h;
        e = new Ht({});
        let _ = t[5] && Fl(t);
        function g(w, y) {
          return w[2] ? iw : w[3] ? ow : rw;
        }
        let b = g(t), v = b(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), r = p("div"), o = p("h1"), o.textContent = "Encounters", i = S(), a = p("button"), a.innerHTML = '<span class="material-icons">add</span>', l = S(), _ && _.c(), f = S(), v.c(), u(o, "class", "svelte-81oe9z"), u(a, "class", "fab svelte-81oe9z"), u(a, "title", "Add encounter"), u(r, "class", "page-header svelte-81oe9z"), u(s, "class", "svelte-81oe9z");
          },
          m(w, y) {
            Oe(e, w, y), C(w, n, y), C(w, s, y), c(s, r), c(r, o), c(r, i), c(r, a), c(s, l), _ && _.m(s, null), c(s, f), v.m(s, null), d = true, m || (h = z(a, "click", t[15]), m = true);
          },
          p(w, y) {
            w[5] ? _ ? _.p(w, y) : (_ = Fl(w), _.c(), _.m(s, f)) : _ && (_.d(1), _ = null), b === (b = g(w)) && v ? v.p(w, y) : (v.d(1), v = b(w), v && (v.c(), v.m(s, null)));
          },
          i(w) {
            d || (_e(e.$$.fragment, w), d = true);
          },
          o(w) {
            we(e.$$.fragment, w), d = false;
          },
          d(w) {
            w && (I(n), I(s)), Me(e, w), _ && _.d(), v.d(), m = false, h();
          }
        };
      }
      function Kr(t) {
        return t.name ? t.name : t.endedAt ? "Ended partner" : "Active partner";
      }
      function Jr(t) {
        return t.endedAt ? "Ended " + t.endedAt : "Since " + t.createdAt;
      }
      function Xl(t) {
        return t.name || "Group encounter";
      }
      function Ql(t) {
        return (t.isHost ? "Host \xB7 " : "") + t.date;
      }
      function pw(t, e, n) {
        let s, r, o, i, a = [], l = [], f = [], d = true, m = null, h = false, _ = false, g = false, b = null;
        et(() => {
          if (!lt()) {
            de("/login");
            return;
          }
          v();
        });
        function v() {
          n(2, d = true), n(3, m = null);
          try {
            n(0, a = Dd()), n(13, l = ra()), n(1, f = Od());
          } catch (L) {
            n(3, m = L.message);
          } finally {
            n(2, d = false);
          }
        }
        async function w() {
          n(6, g = true), n(7, b = null);
          try {
            const L = $s(32), D = Tn(), q = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
            await Md(L, q, true, D, null), await Yr(ne(Qn(L, 0)), q), n(5, _ = false), de("/groups/" + ne(L));
          } catch (L) {
            n(7, b = L.message);
          } finally {
            n(6, g = false);
          }
        }
        function y(L) {
          li.call(this, t, L);
        }
        const R = () => n(5, _ = true), N = () => {
          n(5, _ = false), de("/encounter-exchange");
        }, E = () => n(5, _ = false), k = () => {
          g || n(5, _ = false);
        }, T = () => n(4, h = !h), A = () => n(5, _ = true);
        return t.$$.update = () => {
          t.$$.dirty[0] & 1 && n(11, s = [
            ...a
          ].sort((L, D) => D.date.localeCompare(L.date))), t.$$.dirty[0] & 8192 && n(10, r = l.filter((L) => !L.archived).sort((L, D) => D.createdAt.localeCompare(L.createdAt))), t.$$.dirty[0] & 8192 && n(9, o = l.filter((L) => L.archived).sort((L, D) => D.createdAt.localeCompare(L.createdAt))), t.$$.dirty[0] & 2 && n(8, i = [
            ...f
          ].sort((L, D) => D.createdAt - L.createdAt));
        }, [
          a,
          f,
          d,
          m,
          h,
          _,
          g,
          b,
          i,
          o,
          r,
          s,
          w,
          l,
          y,
          R,
          N,
          E,
          k,
          T,
          A
        ];
      }
      class mw extends Ce {
        constructor(e) {
          super(), Ie(this, e, pw, dw, Te, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function _w(t) {
        let e, n, s, r, o = t[7] ? "favorite" : "favorite_border", i, a, l, f, d = t[7] ? "Active partner" : "Ended", m, h, _, g, b, v, w = Xr(t[0].createdAt) + "", y, R, N, E, k, T, A, L, D, q, P = t[3] && Zl(t), H = t[0].archived && xl(), M = t[0].endedAt && $l(t);
        function j(x, re) {
          return x[4] ? bw : gw;
        }
        let Y = j(t), G = Y(t);
        function U(x, re) {
          return x[7] ? yw : vw;
        }
        let Q = U(t), B = Q(t);
        function V(x, re) {
          return x[0].archived ? Tw : x[6] === "archive" ? Ew : Sw;
        }
        let F = V(t), J = F(t);
        return {
          c() {
            P && P.c(), e = S(), n = p("section"), s = p("div"), r = p("span"), i = O(o), a = S(), l = p("div"), f = p("span"), m = O(d), h = S(), H && H.c(), _ = S(), g = p("div"), b = p("span"), v = O("Since "), y = O(w), R = S(), M && M.c(), N = S(), E = p("section"), G.c(), k = S(), T = p("div"), A = S(), B.c(), L = S(), D = p("div"), q = S(), J.c(), u(r, "class", "material-icons status-icon svelte-1lfam"), se(r, "active", t[7]), se(r, "ended", !t[7]), u(f, "class", "status-label svelte-1lfam"), se(f, "active", t[7]), u(l, "class", "status-text svelte-1lfam"), u(s, "class", "status-row svelte-1lfam"), u(g, "class", "dates svelte-1lfam"), u(n, "class", "card pad svelte-1lfam"), u(T, "class", "divider svelte-1lfam"), u(D, "class", "divider svelte-1lfam"), u(E, "class", "card svelte-1lfam");
          },
          m(x, re) {
            P && P.m(x, re), C(x, e, re), C(x, n, re), c(n, s), c(s, r), c(r, i), c(s, a), c(s, l), c(l, f), c(f, m), c(l, h), H && H.m(l, null), c(n, _), c(n, g), c(g, b), c(b, v), c(b, y), c(g, R), M && M.m(g, null), C(x, N, re), C(x, E, re), G.m(E, null), c(E, k), c(E, T), c(E, A), B.m(E, null), c(E, L), c(E, D), c(E, q), J.m(E, null);
          },
          p(x, re) {
            x[3] ? P ? P.p(x, re) : (P = Zl(x), P.c(), P.m(e.parentNode, e)) : P && (P.d(1), P = null), re & 128 && o !== (o = x[7] ? "favorite" : "favorite_border") && W(i, o), re & 128 && se(r, "active", x[7]), re & 128 && se(r, "ended", !x[7]), re & 128 && d !== (d = x[7] ? "Active partner" : "Ended") && W(m, d), re & 128 && se(f, "active", x[7]), x[0].archived ? H || (H = xl(), H.c(), H.m(l, null)) : H && (H.d(1), H = null), re & 1 && w !== (w = Xr(x[0].createdAt) + "") && W(y, w), x[0].endedAt ? M ? M.p(x, re) : (M = $l(x), M.c(), M.m(g, null)) : M && (M.d(1), M = null), Y === (Y = j(x)) && G ? G.p(x, re) : (G.d(1), G = Y(x), G && (G.c(), G.m(E, k))), Q === (Q = U(x)) && B ? B.p(x, re) : (B.d(1), B = Q(x), B && (B.c(), B.m(E, L))), F === (F = V(x)) && J ? J.p(x, re) : (J.d(1), J = F(x), J && (J.c(), J.m(E, null)));
          },
          d(x) {
            x && (I(e), I(n), I(N), I(E)), P && P.d(x), H && H.d(), M && M.d(), G.d(), B.d(), J.d();
          }
        };
      }
      function hw(t) {
        let e;
        return {
          c() {
            e = p("section"), e.innerHTML = '<p class="muted svelte-1lfam">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-1lfam">\u2190 Back to encounters</a>', u(e, "class", "card pad svelte-1lfam");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function Zl(t) {
        let e, n, s, r;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "error_outline", s = S(), r = O(t[3]), u(n, "class", "material-icons svelte-1lfam"), u(e, "class", "toast error-toast svelte-1lfam");
          },
          m(o, i) {
            C(o, e, i), c(e, n), c(e, s), c(e, r);
          },
          p(o, i) {
            i & 8 && W(r, o[3]);
          },
          d(o) {
            o && I(e);
          }
        };
      }
      function xl(t) {
        let e;
        return {
          c() {
            e = p("span"), e.textContent = "archived", u(e, "class", "badge archived svelte-1lfam");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function $l(t) {
        let e, n, s = Xr(t[0].endedAt) + "", r;
        return {
          c() {
            e = p("span"), n = O("Ended "), r = O(s);
          },
          m(o, i) {
            C(o, e, i), c(e, n), c(e, r);
          },
          p(o, i) {
            i & 1 && s !== (s = Xr(o[0].endedAt) + "") && W(r, s);
          },
          d(o) {
            o && I(e);
          }
        };
      }
      function gw(t) {
        let e, n, s, r, o = (t[0].name ? t[0].name : "Add nickname") + "", i, a, l, f, d, m, h = t[0].name && ec();
        return {
          c() {
            e = p("button"), n = p("span"), n.textContent = "edit", s = S(), r = p("span"), i = O(o), a = S(), h && h.c(), l = S(), f = p("span"), f.textContent = "chevron_right", u(n, "class", "material-icons action-icon svelte-1lfam"), u(r, "class", "action-label svelte-1lfam"), u(f, "class", "material-icons action-chevron svelte-1lfam"), u(e, "class", "action-row svelte-1lfam");
          },
          m(_, g) {
            C(_, e, g), c(e, n), c(e, s), c(e, r), c(r, i), c(r, a), h && h.m(r, null), c(e, l), c(e, f), d || (m = z(e, "click", t[13]), d = true);
          },
          p(_, g) {
            g & 1 && o !== (o = (_[0].name ? _[0].name : "Add nickname") + "") && W(i, o), _[0].name ? h || (h = ec(), h.c(), h.m(r, null)) : h && (h.d(1), h = null);
          },
          d(_) {
            _ && I(e), h && h.d(), d = false, m();
          }
        };
      }
      function bw(t) {
        let e, n, s, r, o, i, a, l, f, d, m = t[2] ? "Saving\u2026" : "Save", h, _, g;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "edit", s = S(), r = p("form"), o = p("input"), i = S(), a = p("div"), l = p("button"), l.textContent = "Cancel", f = S(), d = p("button"), h = O(m), u(n, "class", "material-icons action-icon svelte-1lfam"), u(o, "type", "text"), u(o, "placeholder", "Optional nickname"), u(o, "maxlength", "64"), o.autofocus = true, u(o, "class", "svelte-1lfam"), u(l, "type", "button"), u(l, "class", "btn-text svelte-1lfam"), u(d, "type", "submit"), u(d, "class", "btn-filled-sm svelte-1lfam"), d.disabled = t[2], u(a, "class", "name-actions svelte-1lfam"), u(r, "class", "name-form svelte-1lfam"), u(e, "class", "action-row edit-name-row svelte-1lfam");
          },
          m(b, v) {
            C(b, e, v), c(e, n), c(e, s), c(e, r), c(r, o), ae(o, t[5]), c(r, i), c(r, a), c(a, l), c(a, f), c(a, d), c(d, h), o.focus(), _ || (g = [
              z(o, "input", t[16]),
              z(l, "click", t[14]),
              z(r, "submit", $t(t[9]))
            ], _ = true);
          },
          p(b, v) {
            v & 32 && o.value !== b[5] && ae(o, b[5]), v & 4 && m !== (m = b[2] ? "Saving\u2026" : "Save") && W(h, m), v & 4 && (d.disabled = b[2]);
          },
          d(b) {
            b && I(e), _ = false, ce(g);
          }
        };
      }
      function ec(t) {
        let e;
        return {
          c() {
            e = p("span"), e.textContent = "Tap to change", u(e, "class", "action-sub svelte-1lfam");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function vw(t) {
        let e, n, s, r, o, i;
        return {
          c() {
            e = p("button"), n = p("span"), n.textContent = "favorite", s = S(), r = p("span"), r.textContent = "Mark as active again", u(n, "class", "material-icons action-icon primary svelte-1lfam"), u(r, "class", "action-label primary svelte-1lfam"), u(e, "class", "action-row svelte-1lfam"), e.disabled = t[2];
          },
          m(a, l) {
            C(a, e, l), c(e, n), c(e, s), c(e, r), o || (i = z(e, "click", t[11]), o = true);
          },
          p(a, l) {
            l & 4 && (e.disabled = a[2]);
          },
          d(a) {
            a && I(e), o = false, i();
          }
        };
      }
      function yw(t) {
        let e;
        function n(o, i) {
          return o[6] === "end" ? kw : ww;
        }
        let s = n(t), r = s(t);
        return {
          c() {
            r.c(), e = Nt();
          },
          m(o, i) {
            r.m(o, i), C(o, e, i);
          },
          p(o, i) {
            s === (s = n(o)) && r ? r.p(o, i) : (r.d(1), r = s(o), r && (r.c(), r.m(e.parentNode, e)));
          },
          d(o) {
            o && I(e), r.d(o);
          }
        };
      }
      function ww(t) {
        let e, n, s;
        return {
          c() {
            e = p("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-1lfam">heart_broken</span> <span class="action-label danger svelte-1lfam">Mark as ended</span>', u(e, "class", "action-row svelte-1lfam");
          },
          m(r, o) {
            C(r, e, o), n || (s = z(e, "click", t[18]), n = true);
          },
          p: Z,
          d(r) {
            r && I(e), n = false, s();
          }
        };
      }
      function kw(t) {
        let e, n, s, r, o, i, a, l = t[2] ? "Saving\u2026" : "Mark as ended", f, d, m;
        return {
          c() {
            e = p("div"), n = p("p"), n.textContent = "Mark this partnership as ended?", s = S(), r = p("div"), o = p("button"), o.textContent = "Cancel", i = S(), a = p("button"), f = O(l), u(n, "class", "confirm-text svelte-1lfam"), u(o, "class", "btn-text svelte-1lfam"), u(a, "class", "btn-danger-sm svelte-1lfam"), a.disabled = t[2], u(r, "class", "confirm-actions svelte-1lfam"), u(e, "class", "confirm-row svelte-1lfam");
          },
          m(h, _) {
            C(h, e, _), c(e, n), c(e, s), c(e, r), c(r, o), c(r, i), c(r, a), c(a, f), d || (m = [
              z(o, "click", t[17]),
              z(a, "click", t[10])
            ], d = true);
          },
          p(h, _) {
            _ & 4 && l !== (l = h[2] ? "Saving\u2026" : "Mark as ended") && W(f, l), _ & 4 && (a.disabled = h[2]);
          },
          d(h) {
            h && I(e), d = false, ce(m);
          }
        };
      }
      function Sw(t) {
        let e, n, s;
        return {
          c() {
            e = p("button"), e.innerHTML = '<span class="material-icons action-icon svelte-1lfam">archive</span> <span class="action-label svelte-1lfam">Archive</span> <span class="action-sub-right svelte-1lfam">Hide from main list</span>', u(e, "class", "action-row svelte-1lfam");
          },
          m(r, o) {
            C(r, e, o), n || (s = z(e, "click", t[22]), n = true);
          },
          p: Z,
          d(r) {
            r && I(e), n = false, s();
          }
        };
      }
      function Ew(t) {
        let e, n, s, r, o, i, a, l = t[2] ? "Saving\u2026" : "Archive", f, d, m;
        return {
          c() {
            e = p("div"), n = p("p"), n.textContent = "Archive this partner? They will be hidden from the main list.", s = S(), r = p("div"), o = p("button"), o.textContent = "Cancel", i = S(), a = p("button"), f = O(l), u(n, "class", "confirm-text svelte-1lfam"), u(o, "class", "btn-text svelte-1lfam"), u(a, "class", "btn-filled-sm svelte-1lfam"), a.disabled = t[2], u(r, "class", "confirm-actions svelte-1lfam"), u(e, "class", "confirm-row svelte-1lfam");
          },
          m(h, _) {
            C(h, e, _), c(e, n), c(e, s), c(e, r), c(r, o), c(r, i), c(r, a), c(a, f), d || (m = [
              z(o, "click", t[20]),
              z(a, "click", t[21])
            ], d = true);
          },
          p(h, _) {
            _ & 4 && l !== (l = h[2] ? "Saving\u2026" : "Archive") && W(f, l), _ & 4 && (a.disabled = h[2]);
          },
          d(h) {
            h && I(e), d = false, ce(m);
          }
        };
      }
      function Tw(t) {
        let e, n, s, r, o, i;
        return {
          c() {
            e = p("button"), n = p("span"), n.textContent = "unarchive", s = S(), r = p("span"), r.textContent = "Unarchive", u(n, "class", "material-icons action-icon primary svelte-1lfam"), u(r, "class", "action-label primary svelte-1lfam"), u(e, "class", "action-row svelte-1lfam"), e.disabled = t[2];
          },
          m(a, l) {
            C(a, e, l), c(e, n), c(e, s), c(e, r), o || (i = z(e, "click", t[19]), o = true);
          },
          p(a, l) {
            l & 4 && (e.disabled = a[2]);
          },
          d(a) {
            a && I(e), o = false, i();
          }
        };
      }
      function Iw(t) {
        let e, n, s, r, o, i, a, l = (t[1] ? "Partner not found" : t[8]) + "", f, d, m;
        e = new Ht({});
        function h(b, v) {
          if (b[1]) return hw;
          if (b[0]) return _w;
        }
        let _ = h(t), g = _ && _(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), r = p("div"), o = p("a"), o.innerHTML = '<span class="material-icons svelte-1lfam">arrow_back</span>', i = S(), a = p("h1"), f = O(l), d = S(), g && g.c(), u(o, "class", "back-btn svelte-1lfam"), u(o, "href", "#/encounters"), u(a, "class", "svelte-1lfam"), u(r, "class", "page-header svelte-1lfam"), u(s, "class", "svelte-1lfam");
          },
          m(b, v) {
            Oe(e, b, v), C(b, n, v), C(b, s, v), c(s, r), c(r, o), c(r, i), c(r, a), c(a, f), c(s, d), g && g.m(s, null), m = true;
          },
          p(b, [v]) {
            (!m || v & 258) && l !== (l = (b[1] ? "Partner not found" : b[8]) + "") && W(f, l), _ === (_ = h(b)) && g ? g.p(b, v) : (g && g.d(1), g = _ && _(b), g && (g.c(), g.m(s, null)));
          },
          i(b) {
            m || (_e(e.$$.fragment, b), m = true);
          },
          o(b) {
            we(e.$$.fragment, b), m = false;
          },
          d(b) {
            b && (I(n), I(s)), Me(e, b), g && g.d();
          }
        };
      }
      function Xr(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Cw(t, e, n) {
        let s, r, { params: o = {
          rawTokenHex: ""
        } } = e, i = null, a = false, l = false, f = null, d = false, m = "", h = null;
        et(() => {
          if (!lt()) {
            de("/login");
            return;
          }
          _();
        });
        function _() {
          const P = ra(), H = o.rawTokenHex;
          n(0, i = P.find((M) => ne(M.rawToken) === H) ?? null), i || n(1, a = true);
        }
        function g() {
          return ne(i.rawToken);
        }
        async function b() {
          if (!l) {
            n(2, l = true), n(3, f = null);
            try {
              const P = m.trim();
              await pr(g(), {
                name: P || null
              }), _(), n(4, d = false);
            } catch (P) {
              n(3, f = P.message);
            } finally {
              n(2, l = false);
            }
          }
        }
        async function v() {
          if (!l) {
            n(2, l = true), n(3, f = null);
            try {
              const P = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              await pr(g(), {
                endedAt: P
              }), _();
            } catch (P) {
              n(3, f = P.message);
            } finally {
              n(2, l = false), n(6, h = null);
            }
          }
        }
        async function w() {
          if (!l) {
            n(2, l = true), n(3, f = null);
            try {
              await pr(g(), {
                endedAt: null
              }), _();
            } catch (P) {
              n(3, f = P.message);
            } finally {
              n(2, l = false);
            }
          }
        }
        async function y(P) {
          if (!l) {
            n(2, l = true), n(3, f = null);
            try {
              await pr(g(), {
                archived: P
              }), _();
            } catch (H) {
              n(3, f = H.message);
            } finally {
              n(2, l = false), n(6, h = null);
            }
          }
        }
        function R() {
          n(5, m = i.name ?? ""), n(4, d = true), n(3, f = null);
        }
        function N() {
          n(4, d = false), n(3, f = null);
        }
        function E() {
          m = this.value, n(5, m);
        }
        const k = () => n(6, h = null), T = () => n(6, h = "end"), A = () => y(false), L = () => n(6, h = null), D = () => y(true), q = () => n(6, h = "archive");
        return t.$$set = (P) => {
          "params" in P && n(15, o = P.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && n(8, s = i?.name || (i?.endedAt ? "Ended partner" : "Active partner")), t.$$.dirty & 1 && n(7, r = i && !i.endedAt);
        }, [
          i,
          a,
          l,
          f,
          d,
          m,
          h,
          r,
          s,
          b,
          v,
          w,
          y,
          R,
          N,
          o,
          E,
          k,
          T,
          A,
          L,
          D,
          q
        ];
      }
      class Aw extends Ce {
        constructor(e) {
          super(), Ie(this, e, Cw, Iw, Te, {
            params: 15
          });
        }
      }
      function tc(t, e, n) {
        const s = t.slice();
        s[19] = e[n], s[22] = n;
        const r = s[6].length - 1 - s[22];
        return s[20] = r, s;
      }
      function nc(t, e, n) {
        const s = t.slice();
        return s[23] = e[n], s[24] = e, s[25] = n, s;
      }
      function Rw(t) {
        let e;
        return {
          c() {
            e = p("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved. (No encounters on record to notify.)`, u(e, "class", "toast success svelte-1ugndgv");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Nw(t) {
        let e;
        return {
          c() {
            e = p("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved.`, u(e, "class", "toast success svelte-1ugndgv");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Lw(t) {
        let e;
        return {
          c() {
            e = p("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check_circle</span>
      Result saved. Partners notified.`, u(e, "class", "toast success svelte-1ugndgv");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function sc(t) {
        let e, n, s, r;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "error_outline", s = S(), r = O(t[5]), u(n, "class", "material-icons svelte-1ugndgv"), u(e, "class", "toast error-toast svelte-1ugndgv");
          },
          m(o, i) {
            C(o, e, i), c(e, n), c(e, s), c(e, r);
          },
          p(o, i) {
            i & 32 && W(r, o[5]);
          },
          d(o) {
            o && I(e);
          }
        };
      }
      function rc(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w, y, R, N, E = t[3] && t[4] === "computing" ? "Saving\u2026" : "Save result", k, T, A, L = Se(Mt), D = [];
        for (let P = 0; P < L.length; P += 1) D[P] = oc(nc(t, L, P));
        let q = t[4] === "computing" && ic();
        return {
          c() {
            e = p("section"), n = p("h2"), n.textContent = "Record a result", s = S(), r = p("p"), r.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, o = S(), i = p("form"), a = p("label"), l = O(`Test date
          `), f = p("input"), d = S(), m = p("fieldset"), h = p("legend"), h.textContent = "Positive results", _ = S(), g = p("div");
            for (let P = 0; P < D.length; P += 1) D[P].c();
            b = S(), q && q.c(), v = S(), w = p("div"), y = p("button"), y.textContent = "Cancel", R = S(), N = p("button"), k = O(E), u(n, "class", "svelte-1ugndgv"), u(r, "class", "help svelte-1ugndgv"), u(f, "type", "date"), f.required = true, u(f, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), u(f, "class", "svelte-1ugndgv"), u(a, "class", "svelte-1ugndgv"), u(h, "class", "svelte-1ugndgv"), u(g, "class", "disease-grid svelte-1ugndgv"), u(m, "class", "svelte-1ugndgv"), u(y, "type", "button"), u(y, "class", "btn-text svelte-1ugndgv"), u(N, "type", "submit"), u(N, "class", "btn-filled svelte-1ugndgv"), N.disabled = t[3], u(w, "class", "form-actions svelte-1ugndgv"), u(i, "class", "svelte-1ugndgv"), u(e, "class", "card form-card svelte-1ugndgv");
          },
          m(P, H) {
            C(P, e, H), c(e, n), c(e, s), c(e, r), c(e, o), c(e, i), c(i, a), c(a, l), c(a, f), ae(f, t[0]), c(i, d), c(i, m), c(m, h), c(m, _), c(m, g);
            for (let M = 0; M < D.length; M += 1) D[M] && D[M].m(g, null);
            c(i, b), q && q.m(i, null), c(i, v), c(i, w), c(w, y), c(w, R), c(w, N), c(N, k), T || (A = [
              z(f, "input", t[11]),
              z(y, "click", t[13]),
              z(i, "submit", $t(t[8]))
            ], T = true);
          },
          p(P, H) {
            if (H & 1 && ae(f, P[0]), H & 2) {
              L = Se(Mt);
              let M;
              for (M = 0; M < L.length; M += 1) {
                const j = nc(P, L, M);
                D[M] ? D[M].p(j, H) : (D[M] = oc(j), D[M].c(), D[M].m(g, null));
              }
              for (; M < D.length; M += 1) D[M].d(1);
              D.length = L.length;
            }
            P[4] === "computing" ? q || (q = ic(), q.c(), q.m(i, v)) : q && (q.d(1), q = null), H & 24 && E !== (E = P[3] && P[4] === "computing" ? "Saving\u2026" : "Save result") && W(k, E), H & 8 && (N.disabled = P[3]);
          },
          d(P) {
            P && I(e), St(D, P), q && q.d(), T = false, ce(A);
          }
        };
      }
      function oc(t) {
        let e, n, s, r = ks[t[23]] + "", o, i, a, l;
        function f() {
          t[12].call(n, t[23]);
        }
        return {
          c() {
            e = p("label"), n = p("input"), s = S(), o = O(r), i = S(), u(n, "type", "checkbox"), u(n, "class", "svelte-1ugndgv"), u(e, "class", "checkbox-label svelte-1ugndgv");
          },
          m(d, m) {
            C(d, e, m), c(e, n), n.checked = t[1][t[23]], c(e, s), c(e, o), c(e, i), a || (l = z(n, "change", f), a = true);
          },
          p(d, m) {
            t = d, m & 2 && (n.checked = t[1][t[23]]);
          },
          d(d) {
            d && I(e), a = false, l();
          }
        };
      }
      function ic(t) {
        let e;
        return {
          c() {
            e = p("p"), e.innerHTML = `<span class="material-icons spin svelte-1ugndgv">autorenew</span>
            Notifying\u2026`, u(e, "class", "computing-status svelte-1ugndgv");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Pw(t) {
        let e, n = Se([
          ...t[6]
        ].reverse()), s = [];
        for (let r = 0; r < n.length; r += 1) s[r] = lc(tc(t, n, r));
        return {
          c() {
            e = p("ul");
            for (let r = 0; r < s.length; r += 1) s[r].c();
            u(e, "class", "svelte-1ugndgv");
          },
          m(r, o) {
            C(r, e, o);
            for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(e, null);
          },
          p(r, o) {
            if (o & 712) {
              n = Se([
                ...r[6]
              ].reverse());
              let i;
              for (i = 0; i < n.length; i += 1) {
                const a = tc(r, n, i);
                s[i] ? s[i].p(a, o) : (s[i] = lc(a), s[i].c(), s[i].m(e, null));
              }
              for (; i < s.length; i += 1) s[i].d(1);
              s.length = n.length;
            }
          },
          d(r) {
            r && I(e), St(s, r);
          }
        };
      }
      function Dw(t) {
        let e, n, s, r, o, i, a, l;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "science", s = S(), r = p("p"), r.textContent = "No results recorded yet.", o = S(), i = p("button"), i.innerHTML = `<span class="material-icons">add</span>
          Record first result`, u(n, "class", "material-icons empty-icon svelte-1ugndgv"), u(r, "class", "svelte-1ugndgv"), u(i, "class", "btn-filled svelte-1ugndgv"), u(e, "class", "empty-state svelte-1ugndgv");
          },
          m(f, d) {
            C(f, e, d), c(e, n), c(e, s), c(e, r), c(e, o), c(e, i), a || (l = z(i, "click", t[14]), a = true);
          },
          p: Z,
          d(f) {
            f && I(e), a = false, l();
          }
        };
      }
      function Ow(t) {
        let e;
        return {
          c() {
            e = p("span"), e.textContent = "Negative", u(e, "class", "badge negative svelte-1ugndgv");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Mw(t) {
        let e;
        return {
          c() {
            e = p("span"), e.textContent = "Positive", u(e, "class", "badge positive svelte-1ugndgv");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function ac(t) {
        let e, n = t[19].positiveDiseases.map(t[15]).join(", ") + "", s, r, o;
        function i(f, d) {
          return f[19].hasNotified ? Hw : qw;
        }
        let a = i(t), l = a(t);
        return {
          c() {
            e = p("div"), s = O(n), r = S(), l.c(), o = Nt(), u(e, "class", "diseases svelte-1ugndgv");
          },
          m(f, d) {
            C(f, e, d), c(e, s), C(f, r, d), l.m(f, d), C(f, o, d);
          },
          p(f, d) {
            d & 64 && n !== (n = f[19].positiveDiseases.map(f[15]).join(", ") + "") && W(s, n), a === (a = i(f)) && l ? l.p(f, d) : (l.d(1), l = a(f), l && (l.c(), l.m(o.parentNode, o)));
          },
          d(f) {
            f && (I(e), I(r), I(o)), l.d(f);
          }
        };
      }
      function qw(t) {
        let e, n, s, r, o = t[7] === t[20] ? "Notifying\u2026" : "Notify now", i, a, l;
        function f() {
          return t[16](t[20], t[19]);
        }
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "Partners not yet notified", s = S(), r = p("button"), i = O(o), u(n, "class", "not-notified svelte-1ugndgv"), u(r, "class", "btn-text-small svelte-1ugndgv"), r.disabled = t[3], u(e, "class", "notify-row svelte-1ugndgv");
          },
          m(d, m) {
            C(d, e, m), c(e, n), c(e, s), c(e, r), c(r, i), a || (l = z(r, "click", f), a = true);
          },
          p(d, m) {
            t = d, m & 192 && o !== (o = t[7] === t[20] ? "Notifying\u2026" : "Notify now") && W(i, o), m & 8 && (r.disabled = t[3]);
          },
          d(d) {
            d && I(e), a = false, l();
          }
        };
      }
      function Hw(t) {
        let e;
        return {
          c() {
            e = p("div"), e.innerHTML = `<span class="material-icons svelte-1ugndgv">check</span>
                    Partners notified`, u(e, "class", "notified svelte-1ugndgv");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function lc(t) {
        let e, n, s = t[19].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", r, o, i, a, l, f = t[19].date + "", d, m, h, _;
        function g(y, R) {
          return y[19].positiveDiseases.length > 0 ? Mw : Ow;
        }
        let b = g(t), v = b(t), w = t[19].positiveDiseases.length > 0 && ac(t);
        return {
          c() {
            e = p("li"), n = p("span"), r = O(s), o = S(), i = p("div"), a = p("div"), l = p("span"), d = O(f), m = S(), v.c(), h = S(), w && w.c(), _ = S(), u(n, "class", "material-icons result-icon svelte-1ugndgv"), se(n, "positive", t[19].positiveDiseases.length > 0), se(n, "negative", t[19].positiveDiseases.length === 0), u(l, "class", "result-date svelte-1ugndgv"), u(a, "class", "result-row svelte-1ugndgv"), u(i, "class", "result-body svelte-1ugndgv"), u(e, "class", "svelte-1ugndgv");
          },
          m(y, R) {
            C(y, e, R), c(e, n), c(n, r), c(e, o), c(e, i), c(i, a), c(a, l), c(l, d), c(a, m), v.m(a, null), c(i, h), w && w.m(i, null), c(e, _);
          },
          p(y, R) {
            R & 64 && s !== (s = y[19].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && W(r, s), R & 64 && se(n, "positive", y[19].positiveDiseases.length > 0), R & 64 && se(n, "negative", y[19].positiveDiseases.length === 0), R & 64 && f !== (f = y[19].date + "") && W(d, f), b !== (b = g(y)) && (v.d(1), v = b(y), v && (v.c(), v.m(a, null))), y[19].positiveDiseases.length > 0 ? w ? w.p(y, R) : (w = ac(y), w.c(), w.m(i, null)) : w && (w.d(1), w = null);
          },
          d(y) {
            y && I(e), v.d(), w && w.d();
          }
        };
      }
      function Bw(t) {
        let e, n, s, r, o, i, a, l, f = t[2] ? "close" : "add", d, m, h, _, g, b, v, w, y, R;
        e = new Ht({});
        function N(P, H) {
          if (P[4] === "done") return Lw;
          if (P[4] === "done_negative") return Nw;
          if (P[4] === "done_no_encounters") return Rw;
        }
        let E = N(t), k = E && E(t), T = t[5] && sc(t), A = t[2] && rc(t);
        function L(P, H) {
          return P[6].length === 0 ? Dw : Pw;
        }
        let D = L(t), q = D(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), r = p("div"), o = p("h1"), o.textContent = "Test Results", i = S(), a = p("button"), l = p("span"), d = O(f), h = S(), k && k.c(), _ = S(), T && T.c(), g = S(), A && A.c(), b = S(), v = p("section"), q.c(), u(o, "class", "svelte-1ugndgv"), u(l, "class", "material-icons"), u(a, "class", "fab svelte-1ugndgv"), u(a, "title", m = t[2] ? "Cancel" : "Record new result"), u(r, "class", "page-header svelte-1ugndgv"), u(v, "class", "card list-card svelte-1ugndgv"), u(s, "class", "svelte-1ugndgv");
          },
          m(P, H) {
            Oe(e, P, H), C(P, n, H), C(P, s, H), c(s, r), c(r, o), c(r, i), c(r, a), c(a, l), c(l, d), c(s, h), k && k.m(s, null), c(s, _), T && T.m(s, null), c(s, g), A && A.m(s, null), c(s, b), c(s, v), q.m(v, null), w = true, y || (R = z(a, "click", t[10]), y = true);
          },
          p(P, [H]) {
            (!w || H & 4) && f !== (f = P[2] ? "close" : "add") && W(d, f), (!w || H & 4 && m !== (m = P[2] ? "Cancel" : "Record new result")) && u(a, "title", m), E !== (E = N(P)) && (k && k.d(1), k = E && E(P), k && (k.c(), k.m(s, _))), P[5] ? T ? T.p(P, H) : (T = sc(P), T.c(), T.m(s, g)) : T && (T.d(1), T = null), P[2] ? A ? A.p(P, H) : (A = rc(P), A.c(), A.m(s, b)) : A && (A.d(1), A = null), D === (D = L(P)) && q ? q.p(P, H) : (q.d(1), q = D(P), q && (q.c(), q.m(v, null)));
          },
          i(P) {
            w || (_e(e.$$.fragment, P), w = true);
          },
          o(P) {
            we(e.$$.fragment, P), w = false;
          },
          d(P) {
            P && (I(n), I(s)), Me(e, P), k && k.d(), T && T.d(), A && A.d(), q.d(), y = false, R();
          }
        };
      }
      const Fw = 20, cc = 50, zw = 100;
      function Uw(t, e, n) {
        let s = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), r = {}, o = false, i = false, a = null, l = null, f = [], d = null;
        et(() => {
          if (!lt()) {
            de("/login");
            return;
          }
          n(6, f = Ir());
        });
        async function m(k, T, A, L) {
          const D = cc + Math.floor(Math.random() * (zw - cc + 1)), q = [
            ...k
          ];
          for (; q.length < D; ) q.push($s(32));
          for (let ue = q.length - 1; ue > 0; ue--) {
            const ye = Math.floor(Math.random() * (ue + 1));
            [q[ue], q[ye]] = [
              q[ye],
              q[ue]
            ];
          }
          const P = q.map((ue) => on(ue)), H = di(T), M = A.replace(/-/g, ""), j = L.map((ue) => Nd[ue] ?? ue).join(""), Y = new TextEncoder().encode("1" + M + j), G = on(er(H, Y)), U = new TextEncoder(), Q = JSON.stringify(P), B = U.encode(Q).length + U.encode(G).length, V = new Uint8Array(B), F = U.encode(Q), J = U.encode(G);
          V.set(F, 0), V.set(J, F.length);
          const x = Cy(V);
          let re = Fw, be = (/* @__PURE__ */ new Date()).toISOString();
          for (let ue = 0; ue < 2; ue++) {
            const { counter: ye } = Ay(be, x, re), He = {
              tokens: P,
              created_at: be,
              submission_type: "self_reported",
              encrypted_payload: G,
              pow_counter: ye
            };
            try {
              await o0(He);
              return;
            } catch (Pe) {
              if (ue === 0 && Pe instanceof wd && Pe.statusCode === 400) {
                let Je = false;
                if (Pe.powDifficulty !== null && Pe.powDifficulty > re && (re = Pe.powDifficulty, Je = true), Pe.serverTime !== null && (be = Pe.serverTime, Je = true), Je) continue;
              }
              throw Pe;
            }
          }
        }
        async function h(k, T) {
          const A = Ct(), L = Tn(), D = [
            ...A.encounters.map((q) => En(q.rawToken, q.theirContactId, q.submitIndex)),
            ...(A.relationships || []).map((q) => En(q.rawToken, q.theirContactId, q.submitIndex))
          ];
          D.length > 0 && await m(D, L, k, T);
          for (const q of A.groupEncounters || []) await m([
            Qn(q.token, q.tokenIndex)
          ], q.hostContactId, k, T);
          await A0();
        }
        async function _() {
          if (!i) {
            n(3, i = true), n(5, l = null), n(4, a = null);
            try {
              const k = Mt.filter((T) => r[T]);
              if (k.length > 0) {
                const T = Ct();
                if (T.encounters.length > 0 || (T.relationships || []).length > 0 || (T.groupEncounters || []).length > 0) {
                  const L = await Bo(s, k);
                  n(4, a = "computing"), await new Promise((D) => setTimeout(D, 30)), await h(s, k), await Il(L), n(4, a = "done");
                } else await Bo(s, k, true), n(4, a = "done_no_encounters");
              } else await Bo(s, k), n(4, a = "done_negative");
              n(1, r = {}), n(0, s = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), n(6, f = Ir()), n(2, o = false);
            } catch (k) {
              n(5, l = k.message), n(4, a = null);
            } finally {
              n(3, i = false);
            }
          }
        }
        async function g(k, T) {
          if (!i) {
            n(3, i = true), n(7, d = k), n(5, l = null);
            try {
              const A = Ct();
              if (A.encounters.length === 0 && (A.relationships || []).length === 0 && (A.groupEncounters || []).length === 0) {
                n(5, l = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((L) => setTimeout(L, 30)), await h(T.date, T.positiveDiseases), await Il(k), n(6, f = Ir());
            } catch (A) {
              n(5, l = "Notification failed: " + A.message);
            } finally {
              n(3, i = false), n(7, d = null);
            }
          }
        }
        const b = () => {
          n(2, o = !o), n(5, l = null), n(4, a = null);
        };
        function v() {
          s = this.value, n(0, s);
        }
        function w(k) {
          r[k] = this.checked, n(1, r);
        }
        return [
          s,
          r,
          o,
          i,
          a,
          l,
          f,
          d,
          _,
          g,
          b,
          v,
          w,
          () => {
            n(2, o = false), n(4, a = null), n(5, l = null);
          },
          () => n(2, o = true),
          (k) => ks[k] ?? k,
          (k, T) => g(k, T)
        ];
      }
      class jw extends Ce {
        constructor(e) {
          super(), Ie(this, e, Uw, Bw, Te, {});
        }
      }
      function uc(t) {
        let e;
        return {
          c() {
            e = p("div"), e.innerHTML = `<span class="material-icons svelte-f77wfc">check_circle</span>
      Password changed successfully.`, u(e, "class", "success-banner svelte-f77wfc");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function fc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[4]), u(e, "class", "error svelte-f77wfc");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r & 16 && W(n, s[4]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Ww(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w, y, R, N, E, k = t[3] ? "Changing password\u2026" : "Change password", T, A, L, D, q, P = t[5] && uc(), H = t[4] && fc(t);
        return {
          c() {
            e = p("main"), n = p("a"), n.innerHTML = `<span class="material-icons svelte-f77wfc">arrow_back</span>
    Back`, s = S(), r = p("h1"), r.textContent = "Change password", o = S(), P && P.c(), i = S(), a = p("form"), l = p("label"), f = O(`Current password
      `), d = p("input"), m = S(), h = p("label"), _ = O(`New password
      `), g = p("input"), b = S(), v = p("label"), w = O(`Confirm new password
      `), y = p("input"), R = S(), H && H.c(), N = S(), E = p("button"), T = O(k), A = S(), L = p("p"), L.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, u(n, "href", "#/home"), u(n, "class", "back-link svelte-f77wfc"), u(r, "class", "svelte-f77wfc"), u(d, "type", "password"), d.required = true, u(d, "autocomplete", "current-password"), u(d, "class", "svelte-f77wfc"), u(l, "class", "svelte-f77wfc"), u(g, "type", "password"), g.required = true, u(g, "autocomplete", "new-password"), u(g, "minlength", "12"), u(g, "class", "svelte-f77wfc"), u(h, "class", "svelte-f77wfc"), u(y, "type", "password"), y.required = true, u(y, "autocomplete", "new-password"), u(y, "class", "svelte-f77wfc"), u(v, "class", "svelte-f77wfc"), u(E, "type", "submit"), E.disabled = t[3], u(E, "class", "svelte-f77wfc"), u(a, "class", "svelte-f77wfc"), u(L, "class", "privacy-note svelte-f77wfc"), u(e, "class", "svelte-f77wfc");
          },
          m(M, j) {
            C(M, e, j), c(e, n), c(e, s), c(e, r), c(e, o), P && P.m(e, null), c(e, i), c(e, a), c(a, l), c(l, f), c(l, d), ae(d, t[0]), c(a, m), c(a, h), c(h, _), c(h, g), ae(g, t[1]), c(a, b), c(a, v), c(v, w), c(v, y), ae(y, t[2]), c(a, R), H && H.m(a, null), c(a, N), c(a, E), c(E, T), c(e, A), c(e, L), D || (q = [
              z(d, "input", t[7]),
              z(g, "input", t[8]),
              z(y, "input", t[9]),
              z(a, "submit", $t(t[6]))
            ], D = true);
          },
          p(M, [j]) {
            M[5] ? P || (P = uc(), P.c(), P.m(e, i)) : P && (P.d(1), P = null), j & 1 && d.value !== M[0] && ae(d, M[0]), j & 2 && g.value !== M[1] && ae(g, M[1]), j & 4 && y.value !== M[2] && ae(y, M[2]), M[4] ? H ? H.p(M, j) : (H = fc(M), H.c(), H.m(a, N)) : H && (H.d(1), H = null), j & 8 && k !== (k = M[3] ? "Changing password\u2026" : "Change password") && W(T, k), j & 8 && (E.disabled = M[3]);
          },
          i: Z,
          o: Z,
          d(M) {
            M && I(e), P && P.d(), H && H.d(), D = false, ce(q);
          }
        };
      }
      function Gw(t, e, n) {
        let s = "", r = "", o = "", i = false, a = null, l = false;
        et(() => {
          lt() || de("/login");
        });
        async function f() {
          if (n(4, a = null), n(5, l = false), r !== o) {
            n(4, a = "New passwords do not match");
            return;
          }
          if (r.length < 12) {
            n(4, a = "New password must be at least 12 characters");
            return;
          }
          if (r === s) {
            n(4, a = "New password must differ from the current password");
            return;
          }
          n(3, i = true);
          try {
            const _ = Tr(), { challenge: g, auth_salt: b, enc_salt: v } = await Zi(_), w = await jt(s, xe(v)), y = Dn();
            if (!y || w.length !== y.length || !w.every((q, P) => q === y[P])) {
              n(4, a = "Current password is incorrect");
              return;
            }
            const R = await jt(s, xe(b)), N = bd(new TextEncoder().encode(g), R), E = on(N), k = await jt(r, xe(b)), T = await jt(r, xe(v)), A = ne(gd(k)), { blobHex: L, blobVersion: D } = F0(T);
            await t0(E, A, L, D), Qi(T), B0(D + 1), n(5, l = true), n(0, s = ""), n(1, r = ""), n(2, o = "");
          } catch (_) {
            n(4, a = _.message);
          } finally {
            n(3, i = false);
          }
        }
        function d() {
          s = this.value, n(0, s);
        }
        function m() {
          r = this.value, n(1, r);
        }
        function h() {
          o = this.value, n(2, o);
        }
        return [
          s,
          r,
          o,
          i,
          a,
          l,
          f,
          d,
          m,
          h
        ];
      }
      class Vw extends Ce {
        constructor(e) {
          super(), Ie(this, e, Gw, Ww, Te, {});
        }
      }
      function Yw(t) {
        let e, n, s, r, o, i, a, l, f, d = t[2] ? "Sending\u2026" : "Send verification link", m, h, _, g, b = t[0] && dc(t), v = t[3] && pc(t);
        return {
          c() {
            e = p("div"), b && b.c(), n = S(), s = p("form"), r = p("label"), o = O(`New email address
          `), i = p("input"), a = S(), v && v.c(), l = S(), f = p("button"), m = O(d), u(i, "type", "email"), i.required = true, u(i, "autocomplete", "email"), u(i, "placeholder", "you@example.com"), u(i, "class", "svelte-r6hw3y"), u(r, "class", "svelte-r6hw3y"), u(f, "type", "submit"), f.disabled = h = t[2] || !t[1], u(f, "class", "svelte-r6hw3y"), u(s, "class", "svelte-r6hw3y"), u(e, "class", "card svelte-r6hw3y");
          },
          m(w, y) {
            C(w, e, y), b && b.m(e, null), c(e, n), c(e, s), c(s, r), c(r, o), c(r, i), ae(i, t[1]), c(s, a), v && v.m(s, null), c(s, l), c(s, f), c(f, m), _ || (g = [
              z(i, "input", t[6]),
              z(s, "submit", $t(t[5]))
            ], _ = true);
          },
          p(w, y) {
            w[0] ? b ? b.p(w, y) : (b = dc(w), b.c(), b.m(e, n)) : b && (b.d(1), b = null), y & 2 && i.value !== w[1] && ae(i, w[1]), w[3] ? v ? v.p(w, y) : (v = pc(w), v.c(), v.m(s, l)) : v && (v.d(1), v = null), y & 4 && d !== (d = w[2] ? "Sending\u2026" : "Send verification link") && W(m, d), y & 6 && h !== (h = w[2] || !w[1]) && (f.disabled = h);
          },
          d(w) {
            w && I(e), b && b.d(), v && v.d(), _ = false, ce(g);
          }
        };
      }
      function Kw(t) {
        let e, n, s, r, o, i, a, l, f, d;
        return {
          c() {
            e = p("div"), n = p("div"), n.innerHTML = '<span class="material-icons success-icon svelte-r6hw3y">mark_email_read</span> <h2 class="svelte-r6hw3y">Check your inbox</h2>', s = S(), r = p("p"), o = O("We've sent a verification link to "), i = p("strong"), a = O(t[4]), l = O(`.
        Click the link to confirm the change. Your email won't update until you verify it.`), f = S(), d = p("a"), d.textContent = "Done", u(n, "class", "success-row svelte-r6hw3y"), u(r, "class", "hint svelte-r6hw3y"), u(d, "href", "#/settings"), u(d, "class", "btn-primary svelte-r6hw3y"), u(e, "class", "card svelte-r6hw3y");
          },
          m(m, h) {
            C(m, e, h), c(e, n), c(e, s), c(e, r), c(r, o), c(r, i), c(i, a), c(r, l), c(e, f), c(e, d);
          },
          p(m, h) {
            h & 16 && W(a, m[4]);
          },
          d(m) {
            m && I(e);
          }
        };
      }
      function dc(t) {
        let e, n, s, r;
        return {
          c() {
            e = p("p"), n = O("Current email: "), s = p("strong"), r = O(t[0]), u(e, "class", "current-email svelte-r6hw3y");
          },
          m(o, i) {
            C(o, e, i), c(e, n), c(e, s), c(s, r);
          },
          p(o, i) {
            i & 1 && W(r, o[0]);
          },
          d(o) {
            o && I(e);
          }
        };
      }
      function pc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[3]), u(e, "class", "error svelte-r6hw3y");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r & 8 && W(n, s[3]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Jw(t) {
        let e, n, s, r, o;
        function i(f, d) {
          return f[4] ? Kw : Yw;
        }
        let a = i(t), l = a(t);
        return {
          c() {
            e = p("main"), n = p("a"), n.innerHTML = `<span class="material-icons svelte-r6hw3y">arrow_back</span>
    Back to settings`, s = S(), r = p("h1"), r.textContent = "Change email", o = S(), l.c(), u(n, "href", "#/settings"), u(n, "class", "back-link svelte-r6hw3y"), u(r, "class", "svelte-r6hw3y"), u(e, "class", "svelte-r6hw3y");
          },
          m(f, d) {
            C(f, e, d), c(e, n), c(e, s), c(e, r), c(e, o), l.m(e, null);
          },
          p(f, [d]) {
            a === (a = i(f)) && l ? l.p(f, d) : (l.d(1), l = a(f), l && (l.c(), l.m(e, null)));
          },
          i: Z,
          o: Z,
          d(f) {
            f && I(e), l.d();
          }
        };
      }
      function Xw(t, e, n) {
        let s;
        st(t, mo, (m) => n(7, s = m));
        let r = "", o = "", i = false, a = null, l = null;
        et(() => {
          if (!lt()) {
            de("/login");
            return;
          }
          n(0, r = s ?? "");
        });
        async function f() {
          n(3, a = null), n(2, i = true);
          try {
            await Wy(o), n(4, l = o);
          } catch (m) {
            n(3, a = m.message);
          } finally {
            n(2, i = false);
          }
        }
        function d() {
          o = this.value, n(1, o);
        }
        return [
          r,
          o,
          i,
          a,
          l,
          f,
          d
        ];
      }
      class Qw extends Ce {
        constructor(e) {
          super(), Ie(this, e, Xw, Jw, Te, {});
        }
      }
      function Zw(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h;
        return {
          c() {
            e = p("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">error_outline</span>', n = S(), s = p("h1"), s.textContent = "Verification failed", r = S(), o = p("p"), i = O(t[1]), a = S(), l = p("p"), l.textContent = "The link may have expired or already been used. You can request a new one from your account settings.", f = S(), d = p("button"), d.textContent = "Go to Login", u(e, "class", "icon-wrap error svelte-1wqqdyg"), u(s, "class", "svelte-1wqqdyg"), u(o, "class", "message error svelte-1wqqdyg"), u(l, "class", "hint svelte-1wqqdyg"), u(d, "class", "btn-primary svelte-1wqqdyg");
          },
          m(_, g) {
            C(_, e, g), C(_, n, g), C(_, s, g), C(_, r, g), C(_, o, g), c(o, i), C(_, a, g), C(_, l, g), C(_, f, g), C(_, d, g), m || (h = z(d, "click", t[4]), m = true);
          },
          p(_, g) {
            g & 2 && W(i, _[1]);
          },
          d(_) {
            _ && (I(e), I(n), I(s), I(r), I(o), I(a), I(l), I(f), I(d)), m = false, h();
          }
        };
      }
      function xw(t) {
        let e, n, s, r, o, i, a, l, f;
        return {
          c() {
            e = p("div"), e.innerHTML = '<span class="material-icons svelte-1wqqdyg">check_circle</span>', n = S(), s = p("h1"), s.textContent = "Email verified", r = S(), o = p("p"), o.textContent = "Your email address has been verified successfully.", i = S(), a = p("button"), a.textContent = "Go to Login", u(e, "class", "icon-wrap success svelte-1wqqdyg"), u(s, "class", "svelte-1wqqdyg"), u(o, "class", "message svelte-1wqqdyg"), u(a, "class", "btn-primary svelte-1wqqdyg");
          },
          m(d, m) {
            C(d, e, m), C(d, n, m), C(d, s, m), C(d, r, m), C(d, o, m), C(d, i, m), C(d, a, m), l || (f = z(a, "click", t[3]), l = true);
          },
          p: Z,
          d(d) {
            d && (I(e), I(n), I(s), I(r), I(o), I(i), I(a)), l = false, f();
          }
        };
      }
      function $w(t) {
        let e, n, s;
        return {
          c() {
            e = p("div"), e.innerHTML = '<span class="material-icons spinning svelte-1wqqdyg">sync</span>', n = S(), s = p("p"), s.textContent = "Verifying your email\u2026", u(e, "class", "icon-wrap svelte-1wqqdyg"), u(s, "class", "message svelte-1wqqdyg");
          },
          m(r, o) {
            C(r, e, o), C(r, n, o), C(r, s, o);
          },
          p: Z,
          d(r) {
            r && (I(e), I(n), I(s));
          }
        };
      }
      function ek(t) {
        let e;
        function n(o, i) {
          return o[0] === "verifying" ? $w : o[0] === "success" ? xw : Zw;
        }
        let s = n(t), r = s(t);
        return {
          c() {
            e = p("main"), r.c(), u(e, "class", "svelte-1wqqdyg");
          },
          m(o, i) {
            C(o, e, i), r.m(e, null);
          },
          p(o, [i]) {
            s === (s = n(o)) && r ? r.p(o, i) : (r.d(1), r = s(o), r && (r.c(), r.m(e, null)));
          },
          i: Z,
          o: Z,
          d(o) {
            o && I(e), r.d();
          }
        };
      }
      function tk(t, e, n) {
        let { params: s = {} } = e, r = "verifying", o = null;
        et(async () => {
          const l = s.token;
          if (!l) {
            n(1, o = "No verification token found in link."), n(0, r = "error");
            return;
          }
          try {
            await Vy(l), n(0, r = "success");
          } catch (f) {
            n(1, o = f.message), n(0, r = "error");
          }
        });
        const i = () => de("/login"), a = () => de("/login");
        return t.$$set = (l) => {
          "params" in l && n(2, s = l.params);
        }, [
          r,
          o,
          s,
          i,
          a
        ];
      }
      class nk extends Ce {
        constructor(e) {
          super(), Ie(this, e, tk, ek, Te, {
            params: 2
          });
        }
      }
      function mc(t, e, n) {
        const s = t.slice();
        s[8] = e[n], s[11] = n;
        const r = s[0].length - 1 - s[11];
        return s[9] = r, s;
      }
      function sk(t) {
        let e, n = Se([
          ...t[0]
        ].reverse()), s = [];
        for (let r = 0; r < n.length; r += 1) s[r] = bc(mc(t, n, r));
        return {
          c() {
            e = p("ul");
            for (let r = 0; r < s.length; r += 1) s[r].c();
            u(e, "class", "svelte-l1q7u6");
          },
          m(r, o) {
            C(r, e, o);
            for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(e, null);
          },
          p(r, o) {
            if (o & 9) {
              n = Se([
                ...r[0]
              ].reverse());
              let i;
              for (i = 0; i < n.length; i += 1) {
                const a = mc(r, n, i);
                s[i] ? s[i].p(a, o) : (s[i] = bc(a), s[i].c(), s[i].m(e, null));
              }
              for (; i < s.length; i += 1) s[i].d(1);
              s.length = n.length;
            }
          },
          d(r) {
            r && I(e), St(s, r);
          }
        };
      }
      function rk(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "No notifications received yet.", u(e, "class", "muted svelte-l1q7u6");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function _c(t) {
        let e;
        function n(o, i) {
          return o[8].labVerified ? ik : ok;
        }
        let s = n(t), r = s(t);
        return {
          c() {
            e = p("div"), r.c(), u(e, "class", "alert-message svelte-l1q7u6");
          },
          m(o, i) {
            C(o, e, i), r.m(e, null);
          },
          p(o, i) {
            s === (s = n(o)) && r ? r.p(o, i) : (r.d(1), r = s(o), r && (r.c(), r.m(e, null)));
          },
          d(o) {
            o && I(e), r.d();
          }
        };
      }
      function ok(t) {
        let e, n = t[8].diseases.map(t[5]).join(", ") + "", s, r;
        return {
          c() {
            e = O("Someone you've interacted with reported testing positive for "), s = O(n), r = O(".");
          },
          m(o, i) {
            C(o, e, i), C(o, s, i), C(o, r, i);
          },
          p(o, i) {
            i & 1 && n !== (n = o[8].diseases.map(o[5]).join(", ") + "") && W(s, n);
          },
          d(o) {
            o && (I(e), I(s), I(r));
          }
        };
      }
      function ik(t) {
        let e, n = t[8].diseases.map(t[4]).join(", ") + "", s, r;
        return {
          c() {
            e = O("Someone you've interacted with has tested positive for "), s = O(n), r = O(".");
          },
          m(o, i) {
            C(o, e, i), C(o, s, i), C(o, r, i);
          },
          p(o, i) {
            i & 1 && n !== (n = o[8].diseases.map(o[4]).join(", ") + "") && W(s, n);
          },
          d(o) {
            o && (I(e), I(s), I(r));
          }
        };
      }
      function hc(t) {
        let e;
        return {
          c() {
            e = p("div"), e.textContent = "This result is self-reported.", u(e, "class", "unverified-note svelte-l1q7u6");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function gc(t) {
        let e, n, s;
        function r() {
          return t[7](t[9]);
        }
        return {
          c() {
            e = p("button"), e.textContent = "Mark viewed", u(e, "class", "btn-text svelte-l1q7u6");
          },
          m(o, i) {
            C(o, e, i), n || (s = z(e, "click", r), n = true);
          },
          p(o, i) {
            t = o;
          },
          d(o) {
            o && I(e), n = false, s();
          }
        };
      }
      function bc(t) {
        let e, n, s, r, o = t[8].labVerified ? "warning_amber" : "info_outline", i, a, l, f, d, m, h, _, g, b = vc(t[8].testDate) + "", v, w, y, R, N, E, k = (t[8].diseases.length > 0 ? t[8].diseases.map(t[6]).join(", ") : "the relevant STI") + "", T, A, L, D, q = t[8].diseases.length > 0 && _c(t), P = !t[8].labVerified && hc(), H = !t[8].viewed && gc(t);
        return {
          c() {
            e = p("li"), n = p("div"), s = p("div"), r = p("span"), i = O(o), a = S(), l = p("div"), f = p("div"), f.textContent = "Health alert", d = S(), q && q.c(), m = S(), h = p("div"), _ = O("Their sample was taken around "), g = p("strong"), v = O(b), w = O("."), y = S(), P && P.c(), R = S(), N = p("div"), E = O("Get tested for "), T = O(k), A = O(". Ask for a full STI panel."), L = S(), H && H.c(), D = S(), u(r, "class", "material-icons alert-icon svelte-l1q7u6"), se(r, "verified", t[8].labVerified), se(r, "unverified", !t[8].labVerified), u(f, "class", "alert-title svelte-l1q7u6"), se(f, "verified", t[8].labVerified), se(f, "unverified", !t[8].labVerified), u(h, "class", "alert-dates svelte-l1q7u6"), u(N, "class", "get-tested svelte-l1q7u6"), u(s, "class", "alert-meta svelte-l1q7u6"), u(n, "class", "alert-body svelte-l1q7u6"), u(e, "class", "svelte-l1q7u6"), se(e, "unviewed", !t[8].viewed);
          },
          m(M, j) {
            C(M, e, j), c(e, n), c(n, s), c(s, r), c(r, i), c(s, a), c(s, l), c(l, f), c(l, d), q && q.m(l, null), c(l, m), c(l, h), c(h, _), c(h, g), c(g, v), c(h, w), c(l, y), P && P.m(l, null), c(l, R), c(l, N), c(N, E), c(N, T), c(N, A), c(n, L), H && H.m(n, null), c(e, D);
          },
          p(M, j) {
            j & 1 && o !== (o = M[8].labVerified ? "warning_amber" : "info_outline") && W(i, o), j & 1 && se(r, "verified", M[8].labVerified), j & 1 && se(r, "unverified", !M[8].labVerified), j & 1 && se(f, "verified", M[8].labVerified), j & 1 && se(f, "unverified", !M[8].labVerified), M[8].diseases.length > 0 ? q ? q.p(M, j) : (q = _c(M), q.c(), q.m(l, m)) : q && (q.d(1), q = null), j & 1 && b !== (b = vc(M[8].testDate) + "") && W(v, b), M[8].labVerified ? P && (P.d(1), P = null) : P || (P = hc(), P.c(), P.m(l, R)), j & 1 && k !== (k = (M[8].diseases.length > 0 ? M[8].diseases.map(M[6]).join(", ") : "the relevant STI") + "") && W(T, k), M[8].viewed ? H && (H.d(1), H = null) : H ? H.p(M, j) : (H = gc(M), H.c(), H.m(n, null)), j & 1 && se(e, "unviewed", !M[8].viewed);
          },
          d(M) {
            M && I(e), q && q.d(), P && P.d(), H && H.d();
          }
        };
      }
      function ak(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h = t[1] ? "hourglass_empty" : "refresh", _, g, b = t[1] ? "Checking\u2026" : "Check now", v, w, y, R, N, E, k;
        e = new Ht({});
        function T(D, q) {
          return D[0].length === 0 && !D[1] ? rk : sk;
        }
        let A = T(t), L = A(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), r = p("div"), r.innerHTML = '<h1 class="svelte-l1q7u6">Alerts</h1>', o = S(), i = p("section"), a = p("div"), l = p("h2"), l.textContent = "Notification history", f = S(), d = p("button"), m = p("span"), _ = O(h), g = S(), v = O(b), w = S(), L.c(), y = S(), R = p("p"), R.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, u(r, "class", "page-header svelte-l1q7u6"), u(l, "class", "svelte-l1q7u6"), u(m, "class", "material-icons svelte-l1q7u6"), u(d, "class", "btn-refresh svelte-l1q7u6"), d.disabled = t[1], u(a, "class", "card-header svelte-l1q7u6"), u(i, "class", "card svelte-l1q7u6"), u(R, "class", "privacy-note svelte-l1q7u6"), u(s, "class", "svelte-l1q7u6");
          },
          m(D, q) {
            Oe(e, D, q), C(D, n, q), C(D, s, q), c(s, r), c(s, o), c(s, i), c(i, a), c(a, l), c(a, f), c(a, d), c(d, m), c(m, _), c(d, g), c(d, v), c(i, w), L.m(i, null), c(s, y), c(s, R), N = true, E || (k = z(d, "click", t[2]), E = true);
          },
          p(D, [q]) {
            (!N || q & 2) && h !== (h = D[1] ? "hourglass_empty" : "refresh") && W(_, h), (!N || q & 2) && b !== (b = D[1] ? "Checking\u2026" : "Check now") && W(v, b), (!N || q & 2) && (d.disabled = D[1]), A === (A = T(D)) && L ? L.p(D, q) : (L.d(1), L = A(D), L && (L.c(), L.m(i, null)));
          },
          i(D) {
            N || (_e(e.$$.fragment, D), N = true);
          },
          o(D) {
            we(e.$$.fragment, D), N = false;
          },
          d(D) {
            D && (I(n), I(s)), Me(e, D), L.d(), E = false, k();
          }
        };
      }
      function vc(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function lk(t, e, n) {
        let s = [], r = false;
        et(() => {
          if (!lt()) {
            U0("/alerts"), de("/login");
            return;
          }
          n(0, s = Ho());
        });
        async function o() {
          n(1, r = true);
          try {
            await Hd();
          } catch {
          } finally {
            n(0, s = Ho()), n(1, r = false);
          }
        }
        async function i(m) {
          await L0(m), n(0, s = Ho());
        }
        return [
          s,
          r,
          o,
          i,
          (m) => ks[m] ?? m,
          (m) => ks[m] ?? m,
          (m) => ks[m] ?? m,
          (m) => i(m)
        ];
      }
      class ck extends Ce {
        constructor(e) {
          super(), Ie(this, e, lk, ak, Te, {});
        }
      }
      const uk = "modulepreload", fk = function(t) {
        return "/" + t;
      }, yc = {}, Qr = function(e, n, s) {
        let r = Promise.resolve();
        if (n && n.length > 0) {
          document.getElementsByTagName("link");
          const i = document.querySelector("meta[property=csp-nonce]"), a = i?.nonce || i?.getAttribute("nonce");
          r = Promise.allSettled(n.map((l) => {
            if (l = fk(l), l in yc) return;
            yc[l] = true;
            const f = l.endsWith(".css"), d = f ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${d}`)) return;
            const m = document.createElement("link");
            if (m.rel = f ? "stylesheet" : uk, f || (m.as = "script"), m.crossOrigin = "", m.href = l, a && m.setAttribute("nonce", a), document.head.appendChild(m), f) return new Promise((h, _) => {
              m.addEventListener("load", h), m.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${l}`)));
            });
          }));
        }
        function o(i) {
          const a = new Event("vite:preloadError", {
            cancelable: true
          });
          if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i;
        }
        return r.then((i) => {
          for (const a of i || []) a.status === "rejected" && o(a.reason);
          return e().catch(o);
        });
      };
      function dk(t) {
        let e, n, s, r, o, i, a, l = t[0].isHost ? "You started this group" : "Group encounter", f, d, m, h = Ic(t[0].date) + "", _, g, b, v, w = t[0].isHost && t[13](), y, R, N, E, k, T, A, L, D, q, P = t[3] && wc(t), H = t[10] && kc(t);
        function M(F, J) {
          return F[5] ? _k : mk;
        }
        let j = M(t), Y = j(t), G = w && Ec(t), U = t[8] && Tc(t);
        function Q(F, J) {
          return F[4] ? vk : bk;
        }
        let B = Q(t), V = B(t);
        return {
          c() {
            P && P.c(), e = S(), H && H.c(), n = S(), s = p("section"), r = p("div"), o = p("span"), o.textContent = "groups", i = S(), a = p("span"), f = O(l), d = S(), m = p("p"), _ = O(h), g = S(), b = p("section"), Y.c(), v = S(), G && G.c(), y = S(), R = p("section"), N = p("div"), N.innerHTML = '<span class="material-icons privacy-icon svelte-atconr">lock_outline</span> <p class="privacy-text svelte-atconr">Your note is stored encrypted and never shared.</p>', E = S(), k = p("textarea"), T = S(), U && U.c(), A = S(), L = p("section"), V.c(), u(o, "class", "material-icons status-icon svelte-atconr"), u(a, "class", "status-label svelte-atconr"), u(r, "class", "status-row svelte-atconr"), u(m, "class", "date svelte-atconr"), u(s, "class", "card pad svelte-atconr"), u(b, "class", "card svelte-atconr"), u(N, "class", "privacy-row svelte-atconr"), u(k, "placeholder", "Add a private note\u2026"), u(k, "rows", "5"), u(k, "class", "svelte-atconr"), u(R, "class", "card pad svelte-atconr"), u(L, "class", "card svelte-atconr");
          },
          m(F, J) {
            P && P.m(F, J), C(F, e, J), H && H.m(F, J), C(F, n, J), C(F, s, J), c(s, r), c(r, o), c(r, i), c(r, a), c(a, f), c(s, d), c(s, m), c(m, _), C(F, g, J), C(F, b, J), Y.m(b, null), C(F, v, J), G && G.m(F, J), C(F, y, J), C(F, R, J), c(R, N), c(R, E), c(R, k), ae(k, t[7]), c(R, T), U && U.m(R, null), C(F, A, J), C(F, L, J), V.m(L, null), D || (q = [
              z(k, "input", t[25]),
              z(k, "input", t[17])
            ], D = true);
          },
          p(F, J) {
            F[3] ? P ? P.p(F, J) : (P = wc(F), P.c(), P.m(e.parentNode, e)) : P && (P.d(1), P = null), F[10] ? H ? H.p(F, J) : (H = kc(F), H.c(), H.m(n.parentNode, n)) : H && (H.d(1), H = null), J[0] & 1 && l !== (l = F[0].isHost ? "You started this group" : "Group encounter") && W(f, l), J[0] & 1 && h !== (h = Ic(F[0].date) + "") && W(_, h), j === (j = M(F)) && Y ? Y.p(F, J) : (Y.d(1), Y = j(F), Y && (Y.c(), Y.m(b, null))), J[0] & 1 && (w = F[0].isHost && F[13]()), w ? G ? G.p(F, J) : (G = Ec(F), G.c(), G.m(y.parentNode, y)) : G && (G.d(1), G = null), J[0] & 128 && ae(k, F[7]), F[8] ? U ? U.p(F, J) : (U = Tc(F), U.c(), U.m(R, null)) : U && (U.d(1), U = null), B === (B = Q(F)) && V ? V.p(F, J) : (V.d(1), V = B(F), V && (V.c(), V.m(L, null)));
          },
          d(F) {
            F && (I(e), I(n), I(s), I(g), I(b), I(v), I(y), I(R), I(A), I(L)), P && P.d(F), H && H.d(F), Y.d(), G && G.d(F), U && U.d(), V.d(), D = false, ce(q);
          }
        };
      }
      function pk(t) {
        let e;
        return {
          c() {
            e = p("section"), e.innerHTML = '<p class="muted svelte-atconr">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-atconr">\u2190 Back to encounters</a>', u(e, "class", "card pad svelte-atconr");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function wc(t) {
        let e, n, s, r;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "error_outline", s = S(), r = O(t[3]), u(n, "class", "material-icons svelte-atconr"), u(e, "class", "toast error-toast svelte-atconr");
          },
          m(o, i) {
            C(o, e, i), c(e, n), c(e, s), c(e, r);
          },
          p(o, i) {
            i[0] & 8 && W(r, o[3]);
          },
          d(o) {
            o && I(e);
          }
        };
      }
      function kc(t) {
        let e, n, s, r, o, i, a, l, f, d = t[9] ? "Saving\u2026" : "Save note", m, h, _;
        return {
          c() {
            e = p("section"), n = p("p"), n.textContent = "You have unsaved changes to your note.", s = S(), r = p("div"), o = p("button"), o.textContent = "Keep editing", i = S(), a = p("button"), a.textContent = "Discard", l = S(), f = p("button"), m = O(d), u(n, "class", "confirm-text svelte-atconr"), u(o, "class", "btn-text svelte-atconr"), u(a, "class", "btn-text danger svelte-atconr"), u(f, "class", "btn-filled-sm svelte-atconr"), f.disabled = t[9], u(r, "class", "confirm-actions svelte-atconr"), u(e, "class", "card pad leave-confirm svelte-atconr");
          },
          m(g, b) {
            C(g, e, b), c(e, n), c(e, s), c(e, r), c(r, o), c(r, i), c(r, a), c(r, l), c(r, f), c(f, m), h || (_ = [
              z(o, "click", t[23]),
              z(a, "click", t[20]),
              z(f, "click", t[19])
            ], h = true);
          },
          p(g, b) {
            b[0] & 512 && d !== (d = g[9] ? "Saving\u2026" : "Save note") && W(m, d), b[0] & 512 && (f.disabled = g[9]);
          },
          d(g) {
            g && I(e), h = false, ce(_);
          }
        };
      }
      function mk(t) {
        let e, n, s, r, o = (t[0].name ? t[0].name : "Add group name") + "", i, a, l, f, d, m, h = t[0].name && Sc();
        return {
          c() {
            e = p("button"), n = p("span"), n.textContent = "edit", s = S(), r = p("span"), i = O(o), a = S(), h && h.c(), l = S(), f = p("span"), f.textContent = "chevron_right", u(n, "class", "material-icons action-icon svelte-atconr"), u(r, "class", "action-label svelte-atconr"), u(f, "class", "material-icons action-chevron svelte-atconr"), u(e, "class", "action-row svelte-atconr");
          },
          m(_, g) {
            C(_, e, g), c(e, n), c(e, s), c(e, r), c(r, i), c(r, a), h && h.m(r, null), c(e, l), c(e, f), d || (m = z(e, "click", t[14]), d = true);
          },
          p(_, g) {
            g[0] & 1 && o !== (o = (_[0].name ? _[0].name : "Add group name") + "") && W(i, o), _[0].name ? h || (h = Sc(), h.c(), h.m(r, null)) : h && (h.d(1), h = null);
          },
          d(_) {
            _ && I(e), h && h.d(), d = false, m();
          }
        };
      }
      function _k(t) {
        let e, n, s, r, o, i, a, l, f, d, m = t[2] ? "Saving\u2026" : "Save", h, _, g;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "edit", s = S(), r = p("form"), o = p("input"), i = S(), a = p("div"), l = p("button"), l.textContent = "Cancel", f = S(), d = p("button"), h = O(m), u(n, "class", "material-icons action-icon svelte-atconr"), u(o, "type", "text"), u(o, "placeholder", "Optional group name"), u(o, "maxlength", "64"), o.autofocus = true, u(o, "class", "svelte-atconr"), u(l, "type", "button"), u(l, "class", "btn-text svelte-atconr"), u(d, "type", "submit"), u(d, "class", "btn-filled-sm svelte-atconr"), d.disabled = t[2], u(a, "class", "name-actions svelte-atconr"), u(r, "class", "name-form svelte-atconr"), u(e, "class", "action-row edit-row svelte-atconr");
          },
          m(b, v) {
            C(b, e, v), c(e, n), c(e, s), c(e, r), c(r, o), ae(o, t[6]), c(r, i), c(r, a), c(a, l), c(a, f), c(a, d), c(d, h), o.focus(), _ || (g = [
              z(o, "input", t[24]),
              z(l, "click", t[15]),
              z(r, "submit", $t(t[16]))
            ], _ = true);
          },
          p(b, v) {
            v[0] & 64 && o.value !== b[6] && ae(o, b[6]), v[0] & 4 && m !== (m = b[2] ? "Saving\u2026" : "Save") && W(h, m), v[0] & 4 && (d.disabled = b[2]);
          },
          d(b) {
            b && I(e), _ = false, ce(g);
          }
        };
      }
      function Sc(t) {
        let e;
        return {
          c() {
            e = p("span"), e.textContent = "Tap to change", u(e, "class", "action-sub svelte-atconr");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Ec(t) {
        let e, n, s, r, o;
        function i(f, d) {
          return f[11] ? gk : hk;
        }
        let a = i(t), l = a(t);
        return {
          c() {
            e = p("section"), n = p("p"), n.textContent = "Show this QR for others to join", s = S(), l.c(), r = S(), o = p("p"), o.textContent = "Valid for 24 hours from when you created the group.", u(n, "class", "qr-label svelte-atconr"), u(o, "class", "qr-hint svelte-atconr"), u(e, "class", "card pad qr-card svelte-atconr");
          },
          m(f, d) {
            C(f, e, d), c(e, n), c(e, s), l.m(e, null), c(e, r), c(e, o);
          },
          p(f, d) {
            a === (a = i(f)) && l ? l.p(f, d) : (l.d(1), l = a(f), l && (l.c(), l.m(e, r)));
          },
          d(f) {
            f && I(e), l.d();
          }
        };
      }
      function hk(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Generating QR\u2026", u(e, "class", "muted svelte-atconr");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function gk(t) {
        let e;
        return {
          c() {
            e = p("div"), u(e, "class", "qr-wrap svelte-atconr");
          },
          m(n, s) {
            C(n, e, s), e.innerHTML = t[11];
          },
          p(n, s) {
            s[0] & 2048 && (e.innerHTML = n[11]);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Tc(t) {
        let e, n, s = t[9] ? "Saving\u2026" : "Save", r, o, i;
        return {
          c() {
            e = p("div"), n = p("button"), r = O(s), u(n, "class", "btn-filled-sm svelte-atconr"), n.disabled = t[9], u(e, "class", "note-actions svelte-atconr");
          },
          m(a, l) {
            C(a, e, l), c(e, n), c(n, r), o || (i = z(n, "click", t[18]), o = true);
          },
          p(a, l) {
            l[0] & 512 && s !== (s = a[9] ? "Saving\u2026" : "Save") && W(r, s), l[0] & 512 && (n.disabled = a[9]);
          },
          d(a) {
            a && I(e), o = false, i();
          }
        };
      }
      function bk(t) {
        let e, n, s;
        return {
          c() {
            e = p("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-atconr">delete_outline</span> <span class="action-label danger svelte-atconr">Delete group encounter</span>', u(e, "class", "action-row svelte-atconr");
          },
          m(r, o) {
            C(r, e, o), n || (s = z(e, "click", t[27]), n = true);
          },
          p: Z,
          d(r) {
            r && I(e), n = false, s();
          }
        };
      }
      function vk(t) {
        let e, n, s, r, o, i, a, l = t[2] ? "Deleting\u2026" : "Delete", f, d, m;
        return {
          c() {
            e = p("div"), n = p("p"), n.textContent = "Delete this group encounter? This cannot be undone.", s = S(), r = p("div"), o = p("button"), o.textContent = "Cancel", i = S(), a = p("button"), f = O(l), u(n, "class", "confirm-text svelte-atconr"), u(o, "class", "btn-text svelte-atconr"), u(a, "class", "btn-danger-sm svelte-atconr"), a.disabled = t[2], u(r, "class", "confirm-actions svelte-atconr"), u(e, "class", "confirm-row svelte-atconr");
          },
          m(h, _) {
            C(h, e, _), c(e, n), c(e, s), c(e, r), c(r, o), c(r, i), c(r, a), c(a, f), d || (m = [
              z(o, "click", t[26]),
              z(a, "click", t[21])
            ], d = true);
          },
          p(h, _) {
            _[0] & 4 && l !== (l = h[2] ? "Deleting\u2026" : "Delete") && W(f, l), _[0] & 4 && (a.disabled = h[2]);
          },
          d(h) {
            h && I(e), d = false, ce(m);
          }
        };
      }
      function yk(t) {
        let e, n, s, r, o, i, a, l = (t[1] ? "Group not found" : t[12]) + "", f, d, m;
        e = new Ht({});
        function h(b, v) {
          if (b[1]) return pk;
          if (b[0]) return dk;
        }
        let _ = h(t), g = _ && _(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), r = p("div"), o = p("a"), o.innerHTML = '<span class="material-icons svelte-atconr">arrow_back</span>', i = S(), a = p("h1"), f = O(l), d = S(), g && g.c(), u(o, "class", "back-btn svelte-atconr"), u(o, "href", "#/encounters"), u(a, "class", "svelte-atconr"), u(r, "class", "page-header svelte-atconr"), u(s, "class", "svelte-atconr");
          },
          m(b, v) {
            Oe(e, b, v), C(b, n, v), C(b, s, v), c(s, r), c(r, o), c(r, i), c(r, a), c(a, f), c(s, d), g && g.m(s, null), m = true;
          },
          p(b, v) {
            (!m || v[0] & 4098) && l !== (l = (b[1] ? "Group not found" : b[12]) + "") && W(f, l), _ === (_ = h(b)) && g ? g.p(b, v) : (g && g.d(1), g = _ && _(b), g && (g.c(), g.m(s, null)));
          },
          i(b) {
            m || (_e(e.$$.fragment, b), m = true);
          },
          o(b) {
            we(e.$$.fragment, b), m = false;
          },
          d(b) {
            b && (I(n), I(s)), Me(e, b), g && g.d();
          }
        };
      }
      function Ic(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function wk(t, e, n) {
        let s, { params: r = {
          tokenHex: ""
        } } = e, o = null, i = false, a = false, l = null, f = false, d = false, m = "", h = "", _ = false, g = false, b = false, v = null, w = null;
        et(() => {
          if (!lt()) {
            de("/login");
            return;
          }
          N(), document.addEventListener("click", R, {
            capture: true
          }), window.addEventListener("beforeunload", y);
        }), co(() => {
          document.removeEventListener("click", R, {
            capture: true
          }), window.removeEventListener("beforeunload", y);
        });
        function y(F) {
          _ && (F.preventDefault(), F.returnValue = "");
        }
        function R(F) {
          if (!_) return;
          const J = F.target.closest('a[href^="#/"]');
          J && (F.preventDefault(), F.stopImmediatePropagation(), v = J.getAttribute("href").slice(1), n(10, b = true));
        }
        function N() {
          const F = r.tokenHex;
          if (n(0, o = Od().find((J) => ne(J.token) === F) ?? null), !o) {
            n(1, i = true);
            return;
          }
          n(7, h = o.note ?? ""), o.isHost && k() && T();
        }
        function E() {
          return ne(o.token);
        }
        function k() {
          return o ? Math.floor(Date.now() / 1e3) - o.createdAt < 86400 : false;
        }
        async function T() {
          const F = Math.floor(Date.now() / 1e3), J = Ry(E(), F, ne(o.hostContactId), o.name);
          try {
            const { default: x } = await Qr(async () => {
              const { default: re } = await import("./browser-CTB2jwNe.js").then((be) => be.b);
              return {
                default: re
              };
            }, []);
            n(11, w = await x.toString(J, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#1a1a1a",
                light: "#ffffff"
              }
            }));
          } catch (x) {
            n(3, l = "Could not render QR code: " + x.message);
          }
        }
        function A() {
          n(6, m = o.name ?? ""), n(5, d = true), n(3, l = null);
        }
        function L() {
          n(5, d = false), n(3, l = null);
        }
        async function D() {
          if (!a) {
            n(2, a = true), n(3, l = null);
            try {
              const F = m.trim() || null;
              await Tl(E(), {
                name: F
              }), N(), n(5, d = false);
            } catch (F) {
              n(3, l = F.message);
            } finally {
              n(2, a = false);
            }
          }
        }
        function q() {
          n(8, _ = h !== (o.note ?? ""));
        }
        async function P() {
          if (!(!_ || g)) {
            n(9, g = true), n(3, l = null);
            try {
              const F = h.trim() || null;
              await Tl(E(), {
                note: F
              }), N(), n(8, _ = false);
            } catch (F) {
              n(3, l = F.message);
            } finally {
              n(9, g = false);
            }
          }
        }
        async function H() {
          await P(), l || j();
        }
        function M() {
          n(7, h = o.note ?? ""), n(8, _ = false), j();
        }
        function j() {
          n(10, b = false), de(v);
        }
        async function Y() {
          if (!a) {
            n(2, a = true), n(3, l = null);
            try {
              await C0(E()), de("/encounters");
            } catch (F) {
              n(3, l = F.message), n(2, a = false);
            }
          }
        }
        const G = () => n(10, b = false);
        function U() {
          m = this.value, n(6, m);
        }
        function Q() {
          h = this.value, n(7, h);
        }
        const B = () => n(4, f = false), V = () => n(4, f = true);
        return t.$$set = (F) => {
          "params" in F && n(22, r = F.params);
        }, t.$$.update = () => {
          t.$$.dirty[0] & 1 && n(12, s = o?.name || "Group encounter");
        }, [
          o,
          i,
          a,
          l,
          f,
          d,
          m,
          h,
          _,
          g,
          b,
          w,
          s,
          k,
          A,
          L,
          D,
          q,
          P,
          H,
          M,
          Y,
          r,
          G,
          U,
          Q,
          B,
          V
        ];
      }
      class kk extends Ce {
        constructor(e) {
          super(), Ie(this, e, wk, yk, Te, {
            params: 22
          }, null, [
            -1,
            -1
          ]);
        }
      }
      async function Sk(t) {
        const e = Ct();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const n = e.encounters.map((d) => ({
          raw_token: ne(d.rawToken),
          date: d.date,
          their_contact_id: ne(d.theirContactId)
        })), s = (e.relationships || []).map((d) => ({
          raw_token: ne(d.rawToken),
          date: d.createdAt,
          their_contact_id: ne(d.theirContactId)
        })), r = (e.results || []).map((d) => {
          const m = {};
          for (const h of Mt) m[h] = d.positiveDiseases.includes(h) ? "positive" : "negative";
          return {
            test_date: d.date,
            result_json: JSON.stringify({
              panel: m,
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
        }), o = new TextEncoder().encode(JSON.stringify({
          version: 1,
          contact_id: ne(e.myContactId),
          encounters: [
            ...n,
            ...s
          ],
          test_results: r
        })), i = $s(16), a = await jt(t, i), l = er(a, o);
        a.fill(0);
        const f = new Uint8Array(16 + l.length);
        return f.set(i, 0), f.set(l, 16), f;
      }
      const Ek = "peachsafe-backup";
      function Cc(t, e, n) {
        const s = t.slice();
        return s[8] = e[n], s;
      }
      function Ac(t, e, n) {
        const s = t.slice();
        return s[11] = e[n], s;
      }
      function Rc(t) {
        let e;
        return {
          c() {
            e = p("div"), u(e, "class", "dot svelte-179mmop"), se(e, "filled", t[11] < t[0].length);
          },
          m(n, s) {
            C(n, e, s);
          },
          p(n, s) {
            s & 1 && se(e, "filled", n[11] < n[0].length);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Nc(t) {
        let e, n, s, r;
        function o() {
          return t[5](t[8]);
        }
        return {
          c() {
            e = p("button"), n = O(t[8]), u(e, "class", "key svelte-179mmop"), e.disabled = t[3];
          },
          m(i, a) {
            C(i, e, a), c(e, n), s || (r = z(e, "click", o), s = true);
          },
          p(i, a) {
            t = i, a & 8 && (e.disabled = t[3]);
          },
          d(i) {
            i && I(e), s = false, r();
          }
        };
      }
      function Tk(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w = Se([
          0,
          1,
          2,
          3
        ]), y = [];
        for (let E = 0; E < 4; E += 1) y[E] = Rc(Ac(t, w, E));
        let R = Se([
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]), N = [];
        for (let E = 0; E < 9; E += 1) N[E] = Nc(Cc(t, R, E));
        return {
          c() {
            e = p("div");
            for (let E = 0; E < 4; E += 1) y[E].c();
            n = S(), s = p("p"), r = O(t[1]), o = S(), i = p("div");
            for (let E = 0; E < 9; E += 1) N[E].c();
            a = S(), l = p("button"), f = p("span"), f.textContent = "backspace", d = S(), m = p("button"), h = O("0"), _ = S(), g = p("div"), u(e, "class", "dots svelte-179mmop"), se(e, "shake", t[2]), u(s, "class", "error-msg svelte-179mmop"), u(f, "class", "material-icons svelte-179mmop"), u(l, "class", "key key-del svelte-179mmop"), u(l, "aria-label", "Delete"), l.disabled = t[3], u(m, "class", "key svelte-179mmop"), m.disabled = t[3], u(i, "class", "numpad svelte-179mmop"), se(i, "disabled", t[3]);
          },
          m(E, k) {
            C(E, e, k);
            for (let T = 0; T < 4; T += 1) y[T] && y[T].m(e, null);
            C(E, n, k), C(E, s, k), c(s, r), C(E, o, k), C(E, i, k);
            for (let T = 0; T < 9; T += 1) N[T] && N[T].m(i, null);
            c(i, a), c(i, l), c(l, f), c(i, d), c(i, m), c(m, h), c(i, _), c(i, g), b || (v = [
              z(l, "click", t[6]),
              z(m, "click", t[7])
            ], b = true);
          },
          p(E, [k]) {
            if (k & 1) {
              w = Se([
                0,
                1,
                2,
                3
              ]);
              let T;
              for (T = 0; T < 4; T += 1) {
                const A = Ac(E, w, T);
                y[T] ? y[T].p(A, k) : (y[T] = Rc(A), y[T].c(), y[T].m(e, null));
              }
              for (; T < 4; T += 1) y[T].d(1);
            }
            if (k & 4 && se(e, "shake", E[2]), k & 2 && W(r, E[1]), k & 24) {
              R = Se([
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
              let T;
              for (T = 0; T < 9; T += 1) {
                const A = Cc(E, R, T);
                N[T] ? N[T].p(A, k) : (N[T] = Nc(A), N[T].c(), N[T].m(i, a));
              }
              for (; T < 9; T += 1) N[T].d(1);
            }
            k & 8 && (l.disabled = E[3]), k & 8 && (m.disabled = E[3]), k & 8 && se(i, "disabled", E[3]);
          },
          i: Z,
          o: Z,
          d(E) {
            E && (I(e), I(n), I(s), I(o), I(i)), St(y, E), St(N, E), b = false, ce(v);
          }
        };
      }
      function Ik(t, e, n) {
        let { digits: s = "" } = e, { error: r = "" } = e, { shaking: o = false } = e, { disabled: i = false } = e;
        const a = Wi(), l = (m) => a("digit", String(m)), f = () => a("delete"), d = () => a("digit", "0");
        return t.$$set = (m) => {
          "digits" in m && n(0, s = m.digits), "error" in m && n(1, r = m.error), "shaking" in m && n(2, o = m.shaking), "disabled" in m && n(3, i = m.disabled);
        }, [
          s,
          r,
          o,
          i,
          a,
          l,
          f,
          d
        ];
      }
      class Bd extends Ce {
        constructor(e) {
          super(), Ie(this, e, Ik, Tk, Te, {
            digits: 0,
            error: 1,
            shaking: 2,
            disabled: 3
          });
        }
      }
      function Ck(t) {
        let e;
        return {
          c() {
            e = O("Confirm PIN");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function Ak(t) {
        let e;
        return {
          c() {
            e = O(t[0]);
          },
          m(n, s) {
            C(n, e, s);
          },
          p(n, s) {
            s & 1 && W(e, n[0]);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Rk(t) {
        let e;
        return {
          c() {
            e = O("Saving\u2026");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function Nk(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h;
        function _(v, w) {
          return v[5] ? Rk : v[1] === "enter" ? Ak : Ck;
        }
        let g = _(t), b = g(t);
        return f = new Bd({
          props: {
            digits: t[2],
            error: t[3],
            shaking: t[4],
            disabled: t[5]
          }
        }), f.$on("digit", t[6]), f.$on("delete", t[7]), {
          c() {
            e = p("div"), n = p("div"), s = p("button"), s.innerHTML = '<span class="material-icons svelte-tihueg">arrow_back</span>', r = S(), o = p("div"), o.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-tihueg"/> <span class="brand-label"><span class="brand-peach svelte-tihueg">Peach</span><span class="brand-safe svelte-tihueg">Safe</span></span>', i = S(), a = p("p"), b.c(), l = S(), Ue(f.$$.fragment), u(s, "class", "back-btn svelte-tihueg"), u(s, "aria-label", "Cancel"), u(o, "class", "brand svelte-tihueg"), u(a, "class", "prompt svelte-tihueg"), u(n, "class", "setup-card svelte-tihueg"), u(e, "class", "overlay svelte-tihueg"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-label", t[0]);
          },
          m(v, w) {
            C(v, e, w), c(e, n), c(n, s), c(n, r), c(n, o), c(n, i), c(n, a), b.m(a, null), c(n, l), Oe(f, n, null), d = true, m || (h = z(s, "click", t[8]), m = true);
          },
          p(v, [w]) {
            g === (g = _(v)) && b ? b.p(v, w) : (b.d(1), b = g(v), b && (b.c(), b.m(a, null)));
            const y = {};
            w & 4 && (y.digits = v[2]), w & 8 && (y.error = v[3]), w & 16 && (y.shaking = v[4]), w & 32 && (y.disabled = v[5]), f.$set(y), (!d || w & 1) && u(e, "aria-label", v[0]);
          },
          i(v) {
            d || (_e(f.$$.fragment, v), d = true);
          },
          o(v) {
            we(f.$$.fragment, v), d = false;
          },
          d(v) {
            v && I(e), b.d(), Me(f), m = false, h();
          }
        };
      }
      function Lk(t, e, n) {
        let { title: s = "Set PIN" } = e;
        const r = Wi();
        let o = "enter", i = "", a = "", l = "", f = false, d = false;
        function m(b) {
          a.length >= 4 || f || d || (n(3, l = ""), n(2, a += b.detail), a.length === 4 && _());
        }
        function h() {
          f || d || (n(2, a = a.slice(0, -1)), n(3, l = ""));
        }
        async function _() {
          if (o === "enter") i = a, n(2, a = ""), n(1, o = "confirm");
          else if (a === i) {
            n(5, d = true);
            try {
              await P0(a), po.set(true), r("done");
            } catch (b) {
              n(3, l = b.message), n(5, d = false), n(2, a = "");
            }
          } else n(4, f = true), n(3, l = "PINs don't match \u2014 try again"), await new Promise((b) => setTimeout(b, 600)), n(2, a = ""), i = "", n(1, o = "enter"), n(3, l = ""), n(4, f = false);
        }
        function g() {
          r("cancel");
        }
        return t.$$set = (b) => {
          "title" in b && n(0, s = b.title);
        }, [
          s,
          o,
          a,
          l,
          f,
          d,
          m,
          h,
          g
        ];
      }
      class Pk extends Ce {
        constructor(e) {
          super(), Ie(this, e, Lk, Nk, Te, {
            title: 0
          });
        }
      }
      function Lc(t, e, n) {
        const s = t.slice();
        return s[70] = e[n], s;
      }
      function Pc(t, e, n) {
        const s = t.slice();
        return s[73] = e[n], s;
      }
      function Dk(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w, y, R, N, E, k = t[4] ? "verified_user" : "shield", T, A, L = t[4] ? "Enabled" : "Disabled", D, q, P, H, M, j, Y, G, U, Q, B, V, F, J, x, re, be, ue, ye, He, Pe, Je, ee, ie, he, Be, Ae, bt, tt, Lt, je, ct, Bt, en, vt, tn, Ft;
        function bn($, pe) {
          return $[31] ? Hk : qk;
        }
        let Et = bn(t), ut = Et(t);
        function Tt($, pe) {
          if ($[26] === "idle") return jk;
          if ($[26] === "entering_pin") return Uk;
          if ($[26] === "exporting") return zk;
          if ($[26] === "done") return Fk;
          if ($[26] === "error") return Bk;
        }
        let It = Tt(t), Re = It && It(t);
        function vn($, pe) {
          return $[4] ? Gk : Wk;
        }
        let ft = vn(t), dt = ft(t);
        function Pt($, pe) {
          return $[4] ? Vk : Yk;
        }
        let oe = Pt(t), Fe = oe(t), De = t[25] && Fc();
        function nn($, pe) {
          return $[32] !== null ? xk : Zk;
        }
        let Dt = nn(t), Qe = Dt(t);
        function nr($, pe) {
          return $[32] !== null ? eS : $k;
        }
        let sr = nr(t), Ot = sr(t);
        function ia($, pe) {
          return $[3] ? nS : tS;
        }
        let rr = ia(t), sn = rr(t), ot = t[18] && zc(t);
        return {
          c() {
            e = p("section"), n = p("div"), s = p("div"), s.innerHTML = '<h2 class="svelte-3s0d7a">Appearance</h2> <p class="hint svelte-3s0d7a">Choose your preferred color scheme.</p>', r = S(), o = p("div"), i = p("button"), i.textContent = "Light", a = S(), l = p("button"), l.textContent = "Dark", f = S(), d = p("section"), m = p("h2"), m.textContent = "Export to mobile", h = S(), ut.c(), _ = S(), Re && Re.c(), g = S(), b = p("section"), v = p("div"), w = p("div"), y = p("h2"), y.textContent = "Two-factor authentication", R = S(), N = p("span"), E = p("span"), T = O(k), A = S(), D = O(L), q = S(), P = p("p"), dt.c(), H = S(), Fe.c(), M = S(), j = p("section"), Y = p("div"), G = p("div"), U = p("h2"), U.textContent = "Screen lock", Q = S(), B = p("button"), B.innerHTML = '<span class="material-icons svelte-3s0d7a">info_outline</span>', V = S(), De && De.c(), F = S(), J = p("p"), Qe.c(), x = S(), Ot.c(), re = S(), be = p("section"), ue = p("div"), ye = p("div"), He = p("h2"), He.textContent = "Email", Pe = S(), Je = p("div"), ee = p("span"), ie = O(t[2]), he = S(), sn.c(), Be = S(), Ae = p("a"), Ae.textContent = "Change email", bt = S(), tt = p("section"), tt.innerHTML = '<div class="row svelte-3s0d7a"><div class="svelte-3s0d7a"><h2 class="svelte-3s0d7a">Password</h2> <p class="hint svelte-3s0d7a">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-3s0d7a">Change password</a></div>', Lt = S(), je = p("section"), ct = p("div"), ct.innerHTML = '<h2 class="svelte-3s0d7a">Delete account</h2> <p class="hint svelte-3s0d7a">Permanently delete your account and all data stored on the server. This cannot be undone.</p>', Bt = S(), ot && ot.c(), en = S(), vt = p("button"), vt.textContent = "Delete account", u(s, "class", "svelte-3s0d7a"), u(i, "class", "theme-btn svelte-3s0d7a"), se(i, "active", t[30] === "light"), u(l, "class", "theme-btn svelte-3s0d7a"), se(l, "active", t[30] === "dark"), u(o, "class", "theme-toggle svelte-3s0d7a"), u(n, "class", "row svelte-3s0d7a"), u(e, "class", "card svelte-3s0d7a"), u(m, "class", "svelte-3s0d7a"), u(d, "class", "card svelte-3s0d7a"), u(y, "class", "svelte-3s0d7a"), u(E, "class", "material-icons svelte-3s0d7a"), u(N, "class", "status-badge svelte-3s0d7a"), se(N, "enabled", t[4]), se(N, "disabled", !t[4]), u(w, "class", "totp-heading svelte-3s0d7a"), u(P, "class", "hint svelte-3s0d7a"), u(b, "class", "card svelte-3s0d7a"), u(U, "class", "svelte-3s0d7a"), u(B, "class", "info-btn svelte-3s0d7a"), u(B, "aria-label", "About screen lock"), se(B, "active", t[25]), u(G, "class", "section-heading svelte-3s0d7a"), u(J, "class", "hint svelte-3s0d7a"), u(j, "class", "card svelte-3s0d7a"), u(He, "class", "svelte-3s0d7a"), u(ee, "class", "hint email-value svelte-3s0d7a"), u(Je, "class", "email-meta svelte-3s0d7a"), u(ye, "class", "svelte-3s0d7a"), u(Ae, "href", "#/change-email"), u(Ae, "class", "btn-outline-sm svelte-3s0d7a"), u(ue, "class", "row svelte-3s0d7a"), u(be, "class", "card svelte-3s0d7a"), u(tt, "class", "card svelte-3s0d7a"), u(vt, "class", "btn-danger svelte-3s0d7a"), u(je, "class", "card danger-card svelte-3s0d7a");
          },
          m($, pe) {
            C($, e, pe), c(e, n), c(n, s), c(n, r), c(n, o), c(o, i), c(o, a), c(o, l), C($, f, pe), C($, d, pe), c(d, m), c(d, h), ut.m(d, null), c(d, _), Re && Re.m(d, null), C($, g, pe), C($, b, pe), c(b, v), c(v, w), c(w, y), c(w, R), c(w, N), c(N, E), c(E, T), c(N, A), c(N, D), c(v, q), c(v, P), dt.m(P, null), c(b, H), Fe.m(b, null), C($, M, pe), C($, j, pe), c(j, Y), c(Y, G), c(G, U), c(G, Q), c(G, B), c(Y, V), De && De.m(Y, null), c(Y, F), c(Y, J), Qe.m(J, null), c(j, x), Ot.m(j, null), C($, re, pe), C($, be, pe), c(be, ue), c(ue, ye), c(ye, He), c(ye, Pe), c(ye, Je), c(Je, ee), c(ee, ie), c(Je, he), sn.m(Je, null), c(ue, Be), c(ue, Ae), C($, bt, pe), C($, tt, pe), C($, Lt, pe), C($, je, pe), c(je, ct), c(je, Bt), ot && ot.m(je, null), c(je, en), c(je, vt), tn || (Ft = [
              z(i, "click", t[42]),
              z(l, "click", t[43]),
              z(B, "click", t[52]),
              z(vt, "click", t[56])
            ], tn = true);
          },
          p($, pe) {
            pe[0] & 1073741824 && se(i, "active", $[30] === "light"), pe[0] & 1073741824 && se(l, "active", $[30] === "dark"), Et !== (Et = bn($)) && (ut.d(1), ut = Et($), ut && (ut.c(), ut.m(d, _))), It === (It = Tt($)) && Re ? Re.p($, pe) : (Re && Re.d(1), Re = It && It($), Re && (Re.c(), Re.m(d, null))), pe[0] & 16 && k !== (k = $[4] ? "verified_user" : "shield") && W(T, k), pe[0] & 16 && L !== (L = $[4] ? "Enabled" : "Disabled") && W(D, L), pe[0] & 16 && se(N, "enabled", $[4]), pe[0] & 16 && se(N, "disabled", !$[4]), ft !== (ft = vn($)) && (dt.d(1), dt = ft($), dt && (dt.c(), dt.m(P, null))), oe === (oe = Pt($)) && Fe ? Fe.p($, pe) : (Fe.d(1), Fe = oe($), Fe && (Fe.c(), Fe.m(b, null))), pe[0] & 33554432 && se(B, "active", $[25]), $[25] ? De || (De = Fc(), De.c(), De.m(Y, F)) : De && (De.d(1), De = null), Dt !== (Dt = nn($)) && (Qe.d(1), Qe = Dt($), Qe && (Qe.c(), Qe.m(J, null))), sr === (sr = nr($)) && Ot ? Ot.p($, pe) : (Ot.d(1), Ot = sr($), Ot && (Ot.c(), Ot.m(j, null))), pe[0] & 4 && W(ie, $[2]), rr !== (rr = ia($)) && (sn.d(1), sn = rr($), sn && (sn.c(), sn.m(Je, null))), $[18] ? ot ? ot.p($, pe) : (ot = zc($), ot.c(), ot.m(je, en)) : ot && (ot.d(1), ot = null);
          },
          d($) {
            $ && (I(e), I(f), I(d), I(g), I(b), I(M), I(j), I(re), I(be), I(bt), I(tt), I(Lt), I(je)), ut.d(), Re && Re.d(), dt.d(), Fe.d(), De && De.d(), Qe.d(), Ot.d(), sn.d(), ot && ot.d(), tn = false, ce(Ft);
          }
        };
      }
      function Ok(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[1]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 2 && W(n, s[1]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Mk(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Loading\u2026", u(e, "class", "muted svelte-3s0d7a");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function qk(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", u(e, "class", "hint svelte-3s0d7a");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Hk(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", u(e, "class", "hint warning svelte-3s0d7a");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Bk(t) {
        let e, n, s, r, o, i;
        return {
          c() {
            e = p("p"), n = O(t[29]), s = S(), r = p("button"), r.textContent = "Try again", u(e, "class", "error svelte-3s0d7a"), u(r, "class", "btn-ghost svelte-3s0d7a");
          },
          m(a, l) {
            C(a, e, l), c(e, n), C(a, s, l), C(a, r, l), o || (i = z(r, "click", t[38]), o = true);
          },
          p(a, l) {
            l[0] & 536870912 && W(n, a[29]);
          },
          d(a) {
            a && (I(e), I(s), I(r)), o = false, i();
          }
        };
      }
      function Fk(t) {
        let e, n, s, r, o;
        return {
          c() {
            e = p("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, n = S(), s = p("button"), s.textContent = "Done", u(e, "class", "hint svelte-3s0d7a"), u(s, "class", "btn-ghost svelte-3s0d7a");
          },
          m(i, a) {
            C(i, e, a), C(i, n, a), C(i, s, a), r || (o = z(s, "click", t[38]), r = true);
          },
          p: Z,
          d(i) {
            i && (I(e), I(n), I(s)), r = false, o();
          }
        };
      }
      function zk(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Encrypting\u2026", u(e, "class", "hint svelte-3s0d7a");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function Uk(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w, y, R = t[29] && Dc(t);
        return {
          c() {
            e = p("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", n = S(), s = p("div"), r = p("label"), o = O(`PIN
            `), i = p("input"), a = S(), l = p("label"), f = O(`Confirm PIN
            `), d = p("input"), m = S(), R && R.c(), h = S(), _ = p("div"), g = p("button"), g.textContent = "Download backup", b = S(), v = p("button"), v.textContent = "Cancel", u(e, "class", "hint svelte-3s0d7a"), u(i, "type", "password"), u(i, "inputmode", "numeric"), u(i, "maxlength", "6"), u(i, "placeholder", "6 digits"), u(i, "autocomplete", "new-password"), u(d, "type", "password"), u(d, "inputmode", "numeric"), u(d, "maxlength", "6"), u(d, "placeholder", "6 digits"), u(d, "autocomplete", "new-password"), u(g, "class", "btn-primary svelte-3s0d7a"), u(v, "class", "btn-ghost svelte-3s0d7a"), u(_, "class", "export-actions svelte-3s0d7a"), u(s, "class", "export-form svelte-3s0d7a");
          },
          m(N, E) {
            C(N, e, E), C(N, n, E), C(N, s, E), c(s, r), c(r, o), c(r, i), ae(i, t[27]), c(s, a), c(s, l), c(l, f), c(l, d), ae(d, t[28]), c(s, m), R && R.m(s, null), c(s, h), c(s, _), c(_, g), c(_, b), c(_, v), w || (y = [
              z(i, "input", t[45]),
              z(d, "input", t[46]),
              z(g, "click", t[37]),
              z(v, "click", t[38])
            ], w = true);
          },
          p(N, E) {
            E[0] & 134217728 && i.value !== N[27] && ae(i, N[27]), E[0] & 268435456 && d.value !== N[28] && ae(d, N[28]), N[29] ? R ? R.p(N, E) : (R = Dc(N), R.c(), R.m(s, h)) : R && (R.d(1), R = null);
          },
          d(N) {
            N && (I(e), I(n), I(s)), R && R.d(), w = false, ce(y);
          }
        };
      }
      function jk(t) {
        let e, n, s;
        return {
          c() {
            e = p("button"), e.textContent = "Export data for mobile app", u(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(r, o) {
            C(r, e, o), n || (s = z(e, "click", t[44]), n = true);
          },
          p: Z,
          d(r) {
            r && I(e), n = false, s();
          }
        };
      }
      function Dc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[29]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 536870912 && W(n, s[29]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Wk(t) {
        let e;
        return {
          c() {
            e = O("Add an extra layer of security by requiring an authenticator code at login.");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Gk(t) {
        let e;
        return {
          c() {
            e = O("Your account requires a code from your authenticator app at login.");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Vk(t) {
        let e, n, s, r, o, i, a, l = t[5] !== 1 ? "s" : "", f, d, m, h, _, g, b, v, w, y, R, N, E, k;
        function T(j, Y) {
          return j[15].length > 0 ? Jk : Kk;
        }
        let A = T(t), L = A(t), D = t[7] && qc(t);
        function q(j, Y) {
          return j[6].length === 0 ? Qk : Xk;
        }
        let P = q(t), H = P(t), M = t[11] && Bc(t);
        return {
          c() {
            e = p("div"), n = p("div"), s = p("span"), s.textContent = "key", r = S(), o = p("span"), i = O(t[5]), a = O(" backup code"), f = O(l), d = O(" remaining"), m = S(), L.c(), h = S(), _ = p("div"), g = p("div"), g.innerHTML = '<span class="material-icons svelte-3s0d7a">devices</span> <span>Trusted devices</span>', b = S(), D && D.c(), v = S(), H.c(), w = S(), y = p("div"), M && M.c(), R = S(), N = p("button"), N.textContent = "Disable 2FA", u(s, "class", "material-icons svelte-3s0d7a"), u(n, "class", "backup-count svelte-3s0d7a"), u(e, "class", "backup-section svelte-3s0d7a"), u(g, "class", "backup-count svelte-3s0d7a"), u(_, "class", "backup-section svelte-3s0d7a"), u(N, "class", "btn-danger svelte-3s0d7a"), u(y, "class", "danger-zone svelte-3s0d7a");
          },
          m(j, Y) {
            C(j, e, Y), c(e, n), c(n, s), c(n, r), c(n, o), c(o, i), c(o, a), c(o, f), c(o, d), c(e, m), L.m(e, null), C(j, h, Y), C(j, _, Y), c(_, g), c(_, b), D && D.m(_, null), c(_, v), H.m(_, null), C(j, w, Y), C(j, y, Y), M && M.m(y, null), c(y, R), c(y, N), E || (k = z(N, "click", t[51]), E = true);
          },
          p(j, Y) {
            Y[0] & 32 && W(i, j[5]), Y[0] & 32 && l !== (l = j[5] !== 1 ? "s" : "") && W(f, l), A === (A = T(j)) && L ? L.p(j, Y) : (L.d(1), L = A(j), L && (L.c(), L.m(e, null))), j[7] ? D ? D.p(j, Y) : (D = qc(j), D.c(), D.m(_, v)) : D && (D.d(1), D = null), P === (P = q(j)) && H ? H.p(j, Y) : (H.d(1), H = P(j), H && (H.c(), H.m(_, null))), j[11] ? M ? M.p(j, Y) : (M = Bc(j), M.c(), M.m(y, R)) : M && (M.d(1), M = null);
          },
          d(j) {
            j && (I(e), I(h), I(_), I(w), I(y)), L.d(), D && D.d(), H.d(), M && M.d(), E = false, k();
          }
        };
      }
      function Yk(t) {
        let e, n, s;
        return {
          c() {
            e = p("button"), e.textContent = "Enable 2FA", u(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(r, o) {
            C(r, e, o), n || (s = z(e, "click", t[47]), n = true);
          },
          p: Z,
          d(r) {
            r && I(e), n = false, s();
          }
        };
      }
      function Kk(t) {
        let e, n, s, r, o, i = t[14] && Oc(t);
        return {
          c() {
            i && i.c(), e = S(), n = p("button"), s = O("Regenerate backup codes"), u(n, "class", "btn-outline-sm svelte-3s0d7a"), n.disabled = t[13];
          },
          m(a, l) {
            i && i.m(a, l), C(a, e, l), C(a, n, l), c(n, s), r || (o = z(n, "click", t[49]), r = true);
          },
          p(a, l) {
            a[14] ? i ? i.p(a, l) : (i = Oc(a), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), l[0] & 8192 && (n.disabled = a[13]);
          },
          d(a) {
            a && (I(e), I(n)), i && i.d(a), r = false, o();
          }
        };
      }
      function Jk(t) {
        let e, n, s, r, o, i, a, l, f, d, m = Se(t[15]), h = [];
        for (let _ = 0; _ < m.length; _ += 1) h[_] = Mc(Pc(t, m, _));
        return {
          c() {
            e = p("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", n = S(), s = p("div");
            for (let _ = 0; _ < h.length; _ += 1) h[_].c();
            r = S(), o = p("div"), i = p("button"), i.innerHTML = `<span class="material-icons svelte-3s0d7a">download</span>
                Download`, a = S(), l = p("button"), l.textContent = "Done", u(e, "class", "hint warning svelte-3s0d7a"), u(s, "class", "backup-grid"), u(i, "class", "btn-outline-sm dl-btn svelte-3s0d7a"), u(l, "class", "btn-outline-sm svelte-3s0d7a"), u(o, "class", "regen-code-actions svelte-3s0d7a");
          },
          m(_, g) {
            C(_, e, g), C(_, n, g), C(_, s, g);
            for (let b = 0; b < h.length; b += 1) h[b] && h[b].m(s, null);
            C(_, r, g), C(_, o, g), c(o, i), c(o, a), c(o, l), f || (d = [
              z(i, "click", t[48]),
              z(l, "click", t[40])
            ], f = true);
          },
          p(_, g) {
            if (g[0] & 32768) {
              m = Se(_[15]);
              let b;
              for (b = 0; b < m.length; b += 1) {
                const v = Pc(_, m, b);
                h[b] ? h[b].p(v, g) : (h[b] = Mc(v), h[b].c(), h[b].m(s, null));
              }
              for (; b < h.length; b += 1) h[b].d(1);
              h.length = m.length;
            }
          },
          d(_) {
            _ && (I(e), I(n), I(s), I(r), I(o)), St(h, _), f = false, ce(d);
          }
        };
      }
      function Oc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[14]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 16384 && W(n, s[14]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Mc(t) {
        let e, n = t[73] + "", s;
        return {
          c() {
            e = p("code"), s = O(n), u(e, "class", "backup-code");
          },
          m(r, o) {
            C(r, e, o), c(e, s);
          },
          p(r, o) {
            o[0] & 32768 && n !== (n = r[73] + "") && W(s, n);
          },
          d(r) {
            r && I(e);
          }
        };
      }
      function qc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[7]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 128 && W(n, s[7]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Xk(t) {
        let e, n = [], s = /* @__PURE__ */ new Map(), r, o, i = t[8] ? "Revoking\u2026" : "Revoke all", a, l, f, d = Se(t[6]);
        const m = (h) => h[70].id;
        for (let h = 0; h < d.length; h += 1) {
          let _ = Lc(t, d, h), g = m(_);
          s.set(g, n[h] = Hc(g, _));
        }
        return {
          c() {
            e = p("ul");
            for (let h = 0; h < n.length; h += 1) n[h].c();
            r = S(), o = p("button"), a = O(i), u(e, "class", "device-list svelte-3s0d7a"), u(o, "class", "btn-outline-sm svelte-3s0d7a"), o.disabled = t[8];
          },
          m(h, _) {
            C(h, e, _);
            for (let g = 0; g < n.length; g += 1) n[g] && n[g].m(e, null);
            C(h, r, _), C(h, o, _), c(o, a), l || (f = z(o, "click", t[34]), l = true);
          },
          p(h, _) {
            _[0] & 64 | _[1] & 4 && (d = Se(h[6]), n = Zv(n, _, m, 1, h, d, s, e, Qv, Hc, null, Lc)), _[0] & 256 && i !== (i = h[8] ? "Revoking\u2026" : "Revoke all") && W(a, i), _[0] & 256 && (o.disabled = h[8]);
          },
          d(h) {
            h && (I(e), I(r), I(o));
            for (let _ = 0; _ < n.length; _ += 1) n[_].d();
            l = false, f();
          }
        };
      }
      function Qk(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = 'No trusted devices. Check "Remember this device" at login to skip 2FA on this browser in future.', u(e, "class", "hint svelte-3s0d7a");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function Hc(t, e) {
        let n, s, r = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "", o, i, a = Qc(e[70].created_at) + "", l, f, d, m, h, _;
        function g() {
          return e[50](e[70]);
        }
        return {
          key: t,
          first: null,
          c() {
            n = p("li"), s = p("span"), o = O(r), i = O("Added "), l = O(a), f = S(), d = p("button"), d.textContent = "Revoke", m = S(), u(s, "class", "device-date svelte-3s0d7a"), u(d, "class", "btn-outline-sm svelte-3s0d7a"), u(n, "class", "device-item svelte-3s0d7a"), this.first = n;
          },
          m(b, v) {
            C(b, n, v), c(n, s), c(s, o), c(s, i), c(s, l), c(n, f), c(n, d), c(n, m), h || (_ = z(d, "click", g), h = true);
          },
          p(b, v) {
            e = b, v[0] & 64 && r !== (r = e[70].user_agent ? `${e[70].user_agent} \xB7 ` : "") && W(o, r), v[0] & 64 && a !== (a = Qc(e[70].created_at) + "") && W(l, a);
          },
          d(b) {
            b && I(n), h = false, _();
          }
        };
      }
      function Bc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[11]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 2048 && W(n, s[11]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Fc(t) {
        let e;
        return {
          c() {
            e = p("p"), e.innerHTML = "Requires a 4-digit PIN to open Encounters, Results, Alerts and Settings, while still allowing you to add a new encounter from the Home screen. Useful if you hand your phone to someone - it stops casual snooping. <br/><strong>Note:</strong> your data is already encrypted by your password; the PIN adds no additional encryption.", u(e, "class", "info-box svelte-3s0d7a");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function Zk(t) {
        let e;
        return {
          c() {
            e = O("Set a 4-digit PIN to prevent casual access to your data.");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function xk(t) {
        let e;
        return {
          c() {
            e = O("A PIN is required to view your encounters, results, and alerts.");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function $k(t) {
        let e, n, s;
        return {
          c() {
            e = p("button"), e.textContent = "Set PIN", u(e, "class", "btn-primary svelte-3s0d7a");
          },
          m(r, o) {
            C(r, e, o), n || (s = z(e, "click", t[55]), n = true);
          },
          p: Z,
          d(r) {
            r && I(e), n = false, s();
          }
        };
      }
      function eS(t) {
        let e, n, s, r, o, i;
        return {
          c() {
            e = p("div"), n = p("button"), n.textContent = "Change PIN", s = S(), r = p("button"), r.textContent = "Remove PIN", u(n, "class", "btn-outline-sm svelte-3s0d7a"), u(r, "class", "btn-outline-sm btn-outline-danger svelte-3s0d7a"), u(e, "class", "row-actions svelte-3s0d7a");
          },
          m(a, l) {
            C(a, e, l), c(e, n), c(e, s), c(e, r), o || (i = [
              z(n, "click", t[53]),
              z(r, "click", t[54])
            ], o = true);
          },
          p: Z,
          d(a) {
            a && I(e), o = false, ce(i);
          }
        };
      }
      function tS(t) {
        let e;
        return {
          c() {
            e = p("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">warning</span>
                Unverified`, u(e, "class", "unverified-badge svelte-3s0d7a");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function nS(t) {
        let e;
        return {
          c() {
            e = p("span"), e.innerHTML = `<span class="material-icons svelte-3s0d7a">verified</span>
                Verified`, u(e, "class", "verified-badge svelte-3s0d7a");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function zc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[18]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 262144 && W(n, s[18]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Uc(t) {
        let e, n;
        return e = new Pk({
          props: {
            title: t[21]
          }
        }), e.$on("done", t[57]), e.$on("cancel", t[58]), {
          c() {
            Ue(e.$$.fragment);
          },
          m(s, r) {
            Oe(e, s, r), n = true;
          },
          p(s, r) {
            const o = {};
            r[0] & 2097152 && (o.title = s[21]), e.$set(o);
          },
          i(s) {
            n || (_e(e.$$.fragment, s), n = true);
          },
          o(s) {
            we(e.$$.fragment, s), n = false;
          },
          d(s) {
            Me(e, s);
          }
        };
      }
      function jc(t) {
        let e, n, s, r, o, i, a, l, f, d = t[23] ? "Removing\u2026" : "Remove PIN", m, h, _, g, b, v, w = t[24] && Wc(t);
        return {
          c() {
            e = p("div"), n = p("div"), s = p("h2"), s.textContent = "Remove screen lock PIN?", r = S(), o = p("p"), o.textContent = "Anyone with access to your phone will be able to view your encounters and alerts.", i = S(), w && w.c(), a = S(), l = p("div"), f = p("button"), m = O(d), h = S(), _ = p("button"), g = O("Cancel"), u(s, "id", "remove-pin-title"), u(s, "class", "svelte-3s0d7a"), u(o, "class", "svelte-3s0d7a"), u(f, "class", "btn-danger svelte-3s0d7a"), f.disabled = t[23], u(_, "class", "btn-ghost svelte-3s0d7a"), _.disabled = t[23], u(l, "class", "dialog-actions svelte-3s0d7a"), u(n, "class", "dialog svelte-3s0d7a"), u(e, "class", "overlay svelte-3s0d7a"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "remove-pin-title");
          },
          m(y, R) {
            C(y, e, R), c(e, n), c(n, s), c(n, r), c(n, o), c(n, i), w && w.m(n, null), c(n, a), c(n, l), c(l, f), c(f, m), c(l, h), c(l, _), c(_, g), b || (v = [
              z(f, "click", t[36]),
              z(_, "click", t[59])
            ], b = true);
          },
          p(y, R) {
            y[24] ? w ? w.p(y, R) : (w = Wc(y), w.c(), w.m(n, a)) : w && (w.d(1), w = null), R[0] & 8388608 && d !== (d = y[23] ? "Removing\u2026" : "Remove PIN") && W(m, d), R[0] & 8388608 && (f.disabled = y[23]), R[0] & 8388608 && (_.disabled = y[23]);
          },
          d(y) {
            y && I(e), w && w.d(), b = false, ce(v);
          }
        };
      }
      function Wc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[24]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 16777216 && W(n, s[24]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Gc(t) {
        let e, n, s, r, o, i, a, l, f, d = t[10] ? "Disabling\u2026" : "Yes, disable 2FA", m, h, _, g, b, v, w = t[11] && Vc(t);
        return {
          c() {
            e = p("div"), n = p("div"), s = p("h2"), s.textContent = "Disable two-factor authentication?", r = S(), o = p("p"), o.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, i = S(), w && w.c(), a = S(), l = p("div"), f = p("button"), m = O(d), h = S(), _ = p("button"), g = O("Cancel"), u(s, "id", "disable-title"), u(s, "class", "svelte-3s0d7a"), u(o, "class", "svelte-3s0d7a"), u(f, "class", "btn-danger svelte-3s0d7a"), f.disabled = t[10], u(_, "class", "btn-ghost svelte-3s0d7a"), _.disabled = t[10], u(l, "class", "dialog-actions svelte-3s0d7a"), u(n, "class", "dialog svelte-3s0d7a"), u(e, "class", "overlay svelte-3s0d7a"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "disable-title");
          },
          m(y, R) {
            C(y, e, R), c(e, n), c(n, s), c(n, r), c(n, o), c(n, i), w && w.m(n, null), c(n, a), c(n, l), c(l, f), c(f, m), c(l, h), c(l, _), c(_, g), b || (v = [
              z(f, "click", t[35]),
              z(_, "click", t[60])
            ], b = true);
          },
          p(y, R) {
            y[11] ? w ? w.p(y, R) : (w = Vc(y), w.c(), w.m(n, a)) : w && (w.d(1), w = null), R[0] & 1024 && d !== (d = y[10] ? "Disabling\u2026" : "Yes, disable 2FA") && W(m, d), R[0] & 1024 && (f.disabled = y[10]), R[0] & 1024 && (_.disabled = y[10]);
          },
          d(y) {
            y && I(e), w && w.d(), b = false, ce(v);
          }
        };
      }
      function Vc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[11]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 2048 && W(n, s[11]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Yc(t) {
        let e, n, s, r, o, i, a, l, f, d = t[13] ? "Regenerating\u2026" : "Regenerate", m, h, _, g, b, v, w = t[14] && Kc(t);
        return {
          c() {
            e = p("div"), n = p("div"), s = p("h2"), s.textContent = "Regenerate backup codes?", r = S(), o = p("p"), o.textContent = "All existing backup codes will be permanently invalidated.", i = S(), w && w.c(), a = S(), l = p("div"), f = p("button"), m = O(d), h = S(), _ = p("button"), g = O("Cancel"), u(s, "id", "regen-title"), u(s, "class", "svelte-3s0d7a"), u(o, "class", "svelte-3s0d7a"), u(f, "class", "btn-primary svelte-3s0d7a"), f.disabled = t[13], u(_, "class", "btn-ghost svelte-3s0d7a"), _.disabled = t[13], u(l, "class", "dialog-actions svelte-3s0d7a"), u(n, "class", "dialog svelte-3s0d7a"), u(e, "class", "overlay svelte-3s0d7a"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "regen-title");
          },
          m(y, R) {
            C(y, e, R), c(e, n), c(n, s), c(n, r), c(n, o), c(n, i), w && w.m(n, null), c(n, a), c(n, l), c(l, f), c(f, m), c(l, h), c(l, _), c(_, g), b || (v = [
              z(f, "click", t[39]),
              z(_, "click", t[61])
            ], b = true);
          },
          p(y, R) {
            y[14] ? w ? w.p(y, R) : (w = Kc(y), w.c(), w.m(n, a)) : w && (w.d(1), w = null), R[0] & 8192 && d !== (d = y[13] ? "Regenerating\u2026" : "Regenerate") && W(m, d), R[0] & 8192 && (f.disabled = y[13]), R[0] & 8192 && (_.disabled = y[13]);
          },
          d(y) {
            y && I(e), w && w.d(), b = false, ce(v);
          }
        };
      }
      function Kc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[14]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 16384 && W(n, s[14]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function Jc(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v = t[17] ? "Deleting\u2026" : "Yes, delete my account", w, y, R, N, E, k, T, A = t[18] && Xc(t);
        return {
          c() {
            e = p("div"), n = p("div"), s = p("h2"), s.textContent = "Delete your account?", r = S(), o = p("p"), o.innerHTML = `This will permanently delete your account and all data stored on the server.
        <strong>There is no undo.</strong>`, i = S(), a = p("p"), a.textContent = "If you haven't already, export your data first so you can import it into the mobile app.", l = S(), f = p("label"), f.textContent = "Type your email address to confirm:", d = S(), m = p("input"), h = S(), A && A.c(), _ = S(), g = p("div"), b = p("button"), w = O(v), R = S(), N = p("button"), E = O("Cancel"), u(s, "id", "delete-title"), u(s, "class", "svelte-3s0d7a"), u(o, "class", "svelte-3s0d7a"), u(a, "class", "hint svelte-3s0d7a"), u(f, "class", "confirm-label svelte-3s0d7a"), u(f, "for", "delete-confirm-input"), u(m, "id", "delete-confirm-input"), u(m, "class", "confirm-input svelte-3s0d7a"), u(m, "type", "text"), u(m, "placeholder", t[2]), u(m, "autocomplete", "off"), m.disabled = t[17], u(b, "class", "btn-danger svelte-3s0d7a"), b.disabled = y = t[17] || t[19] !== t[2], u(N, "class", "btn-ghost svelte-3s0d7a"), N.disabled = t[17], u(g, "class", "dialog-actions svelte-3s0d7a"), u(n, "class", "dialog svelte-3s0d7a"), u(e, "class", "overlay svelte-3s0d7a"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "delete-title");
          },
          m(L, D) {
            C(L, e, D), c(e, n), c(n, s), c(n, r), c(n, o), c(n, i), c(n, a), c(n, l), c(n, f), c(n, d), c(n, m), ae(m, t[19]), c(n, h), A && A.m(n, null), c(n, _), c(n, g), c(g, b), c(b, w), c(g, R), c(g, N), c(N, E), k || (T = [
              z(m, "input", t[62]),
              z(b, "click", t[41]),
              z(N, "click", t[63])
            ], k = true);
          },
          p(L, D) {
            D[0] & 4 && u(m, "placeholder", L[2]), D[0] & 131072 && (m.disabled = L[17]), D[0] & 524288 && m.value !== L[19] && ae(m, L[19]), L[18] ? A ? A.p(L, D) : (A = Xc(L), A.c(), A.m(n, _)) : A && (A.d(1), A = null), D[0] & 131072 && v !== (v = L[17] ? "Deleting\u2026" : "Yes, delete my account") && W(w, v), D[0] & 655364 && y !== (y = L[17] || L[19] !== L[2]) && (b.disabled = y), D[0] & 131072 && (N.disabled = L[17]);
          },
          d(L) {
            L && I(e), A && A.d(), k = false, ce(T);
          }
        };
      }
      function Xc(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[18]), u(e, "class", "error svelte-3s0d7a");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 262144 && W(n, s[18]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function sS(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h;
        e = new Ht({});
        function _(E, k) {
          return E[0] ? Mk : E[1] ? Ok : Dk;
        }
        let g = _(t), b = g(t), v = t[20] && Uc(t), w = t[22] && jc(t), y = t[9] && Gc(t), R = t[12] && Yc(t), N = t[16] && Jc(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), r = p("h1"), r.textContent = "Settings", o = S(), b.c(), i = S(), v && v.c(), a = S(), w && w.c(), l = S(), y && y.c(), f = S(), R && R.c(), d = S(), N && N.c(), m = Nt(), u(r, "class", "svelte-3s0d7a"), u(s, "class", "svelte-3s0d7a");
          },
          m(E, k) {
            Oe(e, E, k), C(E, n, k), C(E, s, k), c(s, r), c(s, o), b.m(s, null), C(E, i, k), v && v.m(E, k), C(E, a, k), w && w.m(E, k), C(E, l, k), y && y.m(E, k), C(E, f, k), R && R.m(E, k), C(E, d, k), N && N.m(E, k), C(E, m, k), h = true;
          },
          p(E, k) {
            g === (g = _(E)) && b ? b.p(E, k) : (b.d(1), b = g(E), b && (b.c(), b.m(s, null))), E[20] ? v ? (v.p(E, k), k[0] & 1048576 && _e(v, 1)) : (v = Uc(E), v.c(), _e(v, 1), v.m(a.parentNode, a)) : v && (us(), we(v, 1, 1, () => {
              v = null;
            }), fs()), E[22] ? w ? w.p(E, k) : (w = jc(E), w.c(), w.m(l.parentNode, l)) : w && (w.d(1), w = null), E[9] ? y ? y.p(E, k) : (y = Gc(E), y.c(), y.m(f.parentNode, f)) : y && (y.d(1), y = null), E[12] ? R ? R.p(E, k) : (R = Yc(E), R.c(), R.m(d.parentNode, d)) : R && (R.d(1), R = null), E[16] ? N ? N.p(E, k) : (N = Jc(E), N.c(), N.m(m.parentNode, m)) : N && (N.d(1), N = null);
          },
          i(E) {
            h || (_e(e.$$.fragment, E), _e(v), h = true);
          },
          o(E) {
            we(e.$$.fragment, E), we(v), h = false;
          },
          d(E) {
            E && (I(n), I(s), I(i), I(a), I(l), I(f), I(d), I(m)), Me(e, E), b.d(), v && v.d(E), w && w.d(E), y && y.d(E), R && R.d(E), N && N.d(E);
          }
        };
      }
      function Qc(t) {
        return new Date(t * 1e3).toLocaleDateString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }
      function rS(t) {
        const e = t.join(`
`), n = new Blob([
          e
        ], {
          type: "text/plain"
        }), s = URL.createObjectURL(n), r = document.createElement("a");
        r.href = s, r.download = "backup-codes.txt", r.click(), URL.revokeObjectURL(s);
      }
      function oS(t, e, n) {
        let s, r, o, i, a, l, f, d;
        st(t, ws, (oe) => n(64, s = oe)), st(t, Vr, (oe) => n(65, r = oe)), st(t, Ms, (oe) => n(66, o = oe)), st(t, Fn, (oe) => n(67, i = oe)), st(t, mo, (oe) => n(68, a = oe)), st(t, Sr, (oe) => n(30, l = oe)), st(t, Pd, (oe) => n(31, f = oe)), st(t, sa, (oe) => n(32, d = oe));
        let m = true, h = null, _ = "", g = false, b = false, v = 0, w = [], y = null, R = false, N = false, E = false, k = null, T = false, A = false, L = null, D = [], q = false, P = false, H = null, M = "";
        et(async () => {
          if (!lt()) {
            de("/login");
            return;
          }
          await j();
        });
        async function j() {
          n(0, m = true), n(1, h = null);
          try {
            n(2, _ = a ?? ""), n(3, g = i ?? false), n(4, b = o ?? false), b && (n(5, v = r ?? 0), n(6, w = s ?? []));
          } catch (oe) {
            n(1, h = oe.message);
          } finally {
            n(0, m = false);
          }
        }
        async function Y(oe) {
          n(7, y = null);
          try {
            await Zy(oe), n(6, w = w.filter((Fe) => Fe.id !== oe)), ws.set(w), qo(Tr());
          } catch (Fe) {
            n(7, y = Fe.message);
          }
        }
        async function G() {
          n(7, y = null), n(8, R = true);
          try {
            await xy(), n(6, w = []), ws.set([]), qo(Tr());
          } catch (oe) {
            n(7, y = oe.message);
          } finally {
            n(8, R = false);
          }
        }
        async function U() {
          n(11, k = null), n(10, E = true);
          try {
            await Xy(), n(4, b = false), Ms.set(false), n(5, v = 0), n(6, w = []), qo(Tr()), n(9, N = false);
          } catch (oe) {
            n(11, k = oe.message);
          } finally {
            n(10, E = false);
          }
        }
        let Q = false, B = "Set PIN", V = false, F = false, J = "", x = false;
        async function re() {
          n(23, F = true);
          try {
            await D0(), n(22, V = false);
          } catch (oe) {
            n(24, J = oe.message);
          } finally {
            n(23, F = false);
          }
        }
        let be = "idle", ue = "", ye = "", He = null;
        async function Pe() {
          if (n(29, He = null), !/^\d{6}$/.test(ue)) {
            n(29, He = "PIN must be exactly 6 digits.");
            return;
          }
          if (ue !== ye) {
            n(29, He = "PINs do not match.");
            return;
          }
          n(26, be = "exporting");
          try {
            const oe = await Sk(ue), De = `${Ek}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.enc`, nn = new Blob([
              oe
            ], {
              type: "application/octet-stream"
            }), Dt = URL.createObjectURL(nn), Qe = document.createElement("a");
            Qe.href = Dt, Qe.download = De, Qe.click(), URL.revokeObjectURL(Dt), n(26, be = "done");
          } catch (oe) {
            n(29, He = oe.message), n(26, be = "error");
          }
        }
        function Je() {
          n(26, be = "idle"), n(27, ue = ""), n(28, ye = ""), n(29, He = null);
        }
        async function ee() {
          n(14, L = null), n(13, A = true);
          try {
            const { backup_codes: oe } = await Qy();
            n(15, D = oe), n(5, v = oe.length), Vr.set(oe.length), n(12, T = false);
          } catch (oe) {
            n(14, L = oe.message);
          } finally {
            n(13, A = false);
          }
        }
        function ie() {
          n(15, D = []);
        }
        async function he() {
          n(18, H = null), n(17, P = true);
          try {
            await n0(), de("/login");
          } catch (oe) {
            n(18, H = oe.message);
          } finally {
            n(17, P = false);
          }
        }
        const Be = () => _l(Sr, l = "light", l), Ae = () => _l(Sr, l = "dark", l), bt = () => n(26, be = "entering_pin");
        function tt() {
          ue = this.value, n(27, ue);
        }
        function Lt() {
          ye = this.value, n(28, ye);
        }
        const je = () => de("/settings/2fa-setup"), ct = () => rS(D), Bt = () => {
          n(12, T = true);
        }, en = (oe) => Y(oe.id), vt = () => {
          n(9, N = true);
        }, tn = () => n(25, x = !x), Ft = () => {
          n(21, B = "Change PIN"), n(20, Q = true);
        }, bn = () => {
          n(22, V = true), n(24, J = "");
        }, Et = () => {
          n(21, B = "Set PIN"), n(20, Q = true);
        }, ut = () => {
          n(16, q = true), n(19, M = "");
        }, Tt = () => n(20, Q = false), It = () => n(20, Q = false), Re = () => {
          n(22, V = false), n(24, J = "");
        }, vn = () => {
          n(9, N = false), n(11, k = null);
        }, ft = () => {
          n(12, T = false), n(14, L = null);
        };
        function dt() {
          M = this.value, n(19, M);
        }
        return [
          m,
          h,
          _,
          g,
          b,
          v,
          w,
          y,
          R,
          N,
          E,
          k,
          T,
          A,
          L,
          D,
          q,
          P,
          H,
          M,
          Q,
          B,
          V,
          F,
          J,
          x,
          be,
          ue,
          ye,
          He,
          l,
          f,
          d,
          Y,
          G,
          U,
          re,
          Pe,
          Je,
          ee,
          ie,
          he,
          Be,
          Ae,
          bt,
          tt,
          Lt,
          je,
          ct,
          Bt,
          en,
          vt,
          tn,
          Ft,
          bn,
          Et,
          ut,
          Tt,
          It,
          Re,
          vn,
          ft,
          dt,
          () => {
            n(16, q = false), n(18, H = null), n(19, M = "");
          }
        ];
      }
      class iS extends Ce {
        constructor(e) {
          super(), Ie(this, e, oS, sS, Te, {}, null, [
            -1,
            -1,
            -1
          ]);
        }
      }
      function Zc(t, e, n) {
        const s = t.slice();
        return s[12] = e[n], s;
      }
      function aS(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g = Se(t[4]), b = [];
        for (let v = 0; v < g.length; v += 1) b[v] = xc(Zc(t, g, v));
        return {
          c() {
            e = p("div"), n = p("div"), n.innerHTML = '<span class="material-icons success-icon svelte-6iq55z">check_circle</span> <h1 class="svelte-6iq55z">2FA enabled \u2014 save your backup codes</h1>', s = S(), r = p("p"), r.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, o = S(), i = p("div");
            for (let v = 0; v < b.length; v += 1) b[v].c();
            a = S(), l = p("div"), f = p("button"), f.innerHTML = `<span class="material-icons svelte-6iq55z">download</span>
          Download as text file`, d = S(), m = p("button"), m.textContent = "I've saved my backup codes", u(n, "class", "codes-header svelte-6iq55z"), u(r, "class", "hint warning svelte-6iq55z"), u(i, "class", "backup-grid svelte-6iq55z"), u(f, "class", "btn-ghost svelte-6iq55z"), u(m, "class", "btn-primary svelte-6iq55z"), u(l, "class", "codes-actions svelte-6iq55z"), u(e, "class", "card svelte-6iq55z");
          },
          m(v, w) {
            C(v, e, w), c(e, n), c(e, s), c(e, r), c(e, o), c(e, i);
            for (let y = 0; y < b.length; y += 1) b[y] && b[y].m(i, null);
            c(e, a), c(e, l), c(l, f), c(l, d), c(l, m), h || (_ = [
              z(f, "click", t[8]),
              z(m, "click", t[9])
            ], h = true);
          },
          p(v, w) {
            if (w & 16) {
              g = Se(v[4]);
              let y;
              for (y = 0; y < g.length; y += 1) {
                const R = Zc(v, g, y);
                b[y] ? b[y].p(R, w) : (b[y] = xc(R), b[y].c(), b[y].m(i, null));
              }
              for (; y < b.length; y += 1) b[y].d(1);
              b.length = g.length;
            }
          },
          d(v) {
            v && I(e), St(b, v), h = false, ce(_);
          }
        };
      }
      function lS(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w, y, R, N, E, k, T, A, L, D = t[5] ? "Verifying\u2026" : "Enable 2FA", q, P, H, M, j, Y, G, U = t[6] && $c(t);
        return {
          c() {
            e = p("div"), n = p("div"), s = p("button"), s.innerHTML = '<span class="material-icons svelte-6iq55z">arrow_back</span>', r = S(), o = p("h1"), o.textContent = "Set up authenticator app", i = S(), a = p("p"), a.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, l = S(), f = p("div"), d = p("img"), h = S(), _ = p("details"), g = p("summary"), g.textContent = "Can't scan? Enter the key manually", b = S(), v = p("code"), w = O(t[1]), y = S(), R = p("form"), N = p("label"), E = O(`Authenticator code
          `), k = p("input"), T = S(), U && U.c(), A = S(), L = p("button"), q = O(D), H = S(), M = p("button"), j = O("Cancel"), u(s, "class", "back-btn svelte-6iq55z"), u(s, "type", "button"), u(o, "class", "svelte-6iq55z"), u(n, "class", "card-header svelte-6iq55z"), u(a, "class", "hint svelte-6iq55z"), ml(d.src, m = t[2]) || u(d, "src", m), u(d, "alt", "TOTP QR code"), u(d, "width", "200"), u(d, "height", "200"), u(d, "class", "svelte-6iq55z"), u(f, "class", "qr-wrap svelte-6iq55z"), u(g, "class", "svelte-6iq55z"), u(v, "class", "secret-key svelte-6iq55z"), u(_, "class", "manual-entry svelte-6iq55z"), u(k, "type", "text"), u(k, "inputmode", "numeric"), u(k, "pattern", "[0-9]*"), u(k, "maxlength", "6"), k.required = true, u(k, "autocomplete", "one-time-code"), u(k, "placeholder", "000000"), u(k, "class", "svelte-6iq55z"), u(N, "class", "svelte-6iq55z"), u(L, "type", "submit"), u(L, "class", "btn-primary svelte-6iq55z"), L.disabled = P = t[5] || t[3].length !== 6, u(M, "type", "button"), u(M, "class", "btn-ghost svelte-6iq55z"), M.disabled = t[5], u(R, "class", "otp-form svelte-6iq55z"), u(e, "class", "card svelte-6iq55z");
          },
          m(Q, B) {
            C(Q, e, B), c(e, n), c(n, s), c(n, r), c(n, o), c(e, i), c(e, a), c(e, l), c(e, f), c(f, d), c(e, h), c(e, _), c(_, g), c(_, b), c(_, v), c(v, w), c(e, y), c(e, R), c(R, N), c(N, E), c(N, k), ae(k, t[3]), c(R, T), U && U.m(R, null), c(R, A), c(R, L), c(L, q), c(R, H), c(R, M), c(M, j), Y || (G = [
              z(s, "click", t[10]),
              z(k, "input", t[11]),
              z(M, "click", t[10]),
              z(R, "submit", $t(t[7]))
            ], Y = true);
          },
          p(Q, B) {
            B & 4 && !ml(d.src, m = Q[2]) && u(d, "src", m), B & 2 && W(w, Q[1]), B & 8 && k.value !== Q[3] && ae(k, Q[3]), Q[6] ? U ? U.p(Q, B) : (U = $c(Q), U.c(), U.m(R, A)) : U && (U.d(1), U = null), B & 32 && D !== (D = Q[5] ? "Verifying\u2026" : "Enable 2FA") && W(q, D), B & 40 && P !== (P = Q[5] || Q[3].length !== 6) && (L.disabled = P), B & 32 && (M.disabled = Q[5]);
          },
          d(Q) {
            Q && I(e), U && U.d(), Y = false, ce(G);
          }
        };
      }
      function cS(t) {
        let e, n, s, r, o, i, a;
        return {
          c() {
            e = p("div"), n = p("p"), s = O(t[6]), r = S(), o = p("button"), o.textContent = "Back to Settings", u(n, "class", "error svelte-6iq55z"), u(o, "class", "btn-ghost svelte-6iq55z"), u(e, "class", "card svelte-6iq55z");
          },
          m(l, f) {
            C(l, e, f), c(e, n), c(n, s), c(e, r), c(e, o), i || (a = z(o, "click", t[10]), i = true);
          },
          p(l, f) {
            f & 64 && W(s, l[6]);
          },
          d(l) {
            l && I(e), i = false, a();
          }
        };
      }
      function uS(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Setting up\u2026", u(e, "class", "muted svelte-6iq55z");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function xc(t) {
        let e, n = t[12] + "", s;
        return {
          c() {
            e = p("code"), s = O(n), u(e, "class", "backup-code svelte-6iq55z");
          },
          m(r, o) {
            C(r, e, o), c(e, s);
          },
          p(r, o) {
            o & 16 && n !== (n = r[12] + "") && W(s, n);
          },
          d(r) {
            r && I(e);
          }
        };
      }
      function $c(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[6]), u(e, "class", "error svelte-6iq55z");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r & 64 && W(n, s[6]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function fS(t) {
        let e, n, s, r;
        e = new Ht({});
        function o(l, f) {
          if (l[0] === "loading") return uS;
          if (l[0] === "error") return cS;
          if (l[0] === "scan") return lS;
          if (l[0] === "codes") return aS;
        }
        let i = o(t), a = i && i(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), a && a.c(), u(s, "class", "svelte-6iq55z");
          },
          m(l, f) {
            Oe(e, l, f), C(l, n, f), C(l, s, f), a && a.m(s, null), r = true;
          },
          p(l, [f]) {
            i === (i = o(l)) && a ? a.p(l, f) : (a && a.d(1), a = i && i(l), a && (a.c(), a.m(s, null)));
          },
          i(l) {
            r || (_e(e.$$.fragment, l), r = true);
          },
          o(l) {
            we(e.$$.fragment, l), r = false;
          },
          d(l) {
            l && (I(n), I(s)), Me(e, l), a && a.d();
          }
        };
      }
      function dS(t, e, n) {
        let s = "loading", r = "", o = "", i = "", a = [], l = false, f = null;
        et(async () => {
          if (!lt()) {
            de("/login");
            return;
          }
          try {
            const { secret: b, uri: v } = await Ky();
            n(1, r = b);
            const { default: w } = await Qr(async () => {
              const { default: y } = await import("./browser-CTB2jwNe.js").then((R) => R.b);
              return {
                default: y
              };
            }, []);
            n(2, o = await w.toDataURL(v, {
              width: 200,
              margin: 1
            })), n(0, s = "scan");
          } catch (b) {
            n(6, f = b.message), n(0, s = "error");
          }
        });
        async function d() {
          n(6, f = null), n(5, l = true);
          try {
            const { backup_codes: b } = await Jy(r, i);
            n(4, a = b), Ms.set(true), n(0, s = "codes");
          } catch (b) {
            n(6, f = b.message);
          } finally {
            n(5, l = false);
          }
        }
        function m() {
          const b = a.join(`
`), v = new Blob([
            b
          ], {
            type: "text/plain"
          }), w = URL.createObjectURL(v), y = document.createElement("a");
          y.href = w, y.download = "backup-codes.txt", y.click(), URL.revokeObjectURL(w);
        }
        function h() {
          de("/settings");
        }
        function _() {
          de("/settings");
        }
        function g() {
          i = this.value, n(3, i);
        }
        return [
          s,
          r,
          o,
          i,
          a,
          l,
          f,
          d,
          m,
          h,
          _,
          g
        ];
      }
      class pS extends Ce {
        constructor(e) {
          super(), Ie(this, e, dS, fS, Te, {});
        }
      }
      function eu(t, e, n) {
        const s = t.slice();
        return s[45] = e[n], s;
      }
      function mS(t) {
        let e;
        return {
          c() {
            e = p("a"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', u(e, "class", "back-btn svelte-qzc8r5"), u(e, "href", "#/home");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function _S(t) {
        let e, n, s;
        return {
          c() {
            e = p("button"), e.innerHTML = '<span class="material-icons svelte-qzc8r5">arrow_back</span>', u(e, "class", "back-btn svelte-qzc8r5");
          },
          m(r, o) {
            C(r, e, o), n || (s = z(e, "click", t[17]), n = true);
          },
          p: Z,
          d(r) {
            r && I(e), n = false, s();
          }
        };
      }
      function hS(t) {
        let e;
        return {
          c() {
            e = O("New encounter");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function gS(t) {
        let e;
        return {
          c() {
            e = O("Encounter saved");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function bS(t) {
        let e;
        return {
          c() {
            e = O("Join group");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function vS(t) {
        let e;
        return {
          c() {
            e = O("Confirm exchange");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function yS(t) {
        let e;
        return {
          c() {
            e = O("Scan their code");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function wS(t) {
        let e, n, s, r, o, i, a, l, f = t[13] ? "Saving\u2026" : "Join group", d, m, h, _, g, b;
        function v(R, N) {
          return R[12]?.name ? NS : RS;
        }
        let w = v(t), y = w(t);
        return {
          c() {
            e = p("section"), n = p("p"), n.textContent = "Join group encounter?", s = S(), y.c(), r = S(), o = p("div"), i = p("button"), a = p("span"), a.textContent = "groups", l = S(), d = O(f), m = S(), h = p("button"), _ = O("Cancel"), u(n, "class", "section-label svelte-qzc8r5"), u(a, "class", "material-icons svelte-qzc8r5"), u(i, "class", "btn-filled svelte-qzc8r5"), i.disabled = t[13], u(h, "class", "btn-text svelte-qzc8r5"), h.disabled = t[13], u(o, "class", "ongoing-actions svelte-qzc8r5"), u(e, "class", "card pad svelte-qzc8r5");
          },
          m(R, N) {
            C(R, e, N), c(e, n), c(e, s), y.m(e, null), c(e, r), c(e, o), c(o, i), c(i, a), c(i, l), c(i, d), c(o, m), c(o, h), c(h, _), g || (b = [
              z(i, "click", t[21]),
              z(h, "click", t[17])
            ], g = true);
          },
          p(R, N) {
            w === (w = v(R)) && y ? y.p(R, N) : (y.d(1), y = w(R), y && (y.c(), y.m(e, r))), N[0] & 8192 && f !== (f = R[13] ? "Saving\u2026" : "Join group") && W(d, f), N[0] & 8192 && (i.disabled = R[13]), N[0] & 8192 && (h.disabled = R[13]);
          },
          d(R) {
            R && I(e), y.d(), g = false, ce(b);
          }
        };
      }
      function kS(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v = t[13] && tu();
        return {
          c() {
            e = p("section"), n = p("p"), n.textContent = "Ongoing relationship?", s = S(), r = p("p"), r.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", o = S(), i = p("div"), a = p("button"), l = p("span"), l.textContent = "favorite", f = O(`
          Yes, ongoing`), d = S(), m = p("button"), h = O("No, one off"), _ = S(), v && v.c(), u(n, "class", "section-label svelte-qzc8r5"), u(r, "class", "help-text svelte-qzc8r5"), u(l, "class", "material-icons svelte-qzc8r5"), u(a, "class", "btn-filled svelte-qzc8r5"), a.disabled = t[13], u(m, "class", "btn-outlined svelte-qzc8r5"), m.disabled = t[13], u(i, "class", "ongoing-actions svelte-qzc8r5"), u(e, "class", "card pad svelte-qzc8r5");
          },
          m(w, y) {
            C(w, e, y), c(e, n), c(e, s), c(e, r), c(e, o), c(e, i), c(i, a), c(a, l), c(a, f), c(i, d), c(i, m), c(m, h), c(e, _), v && v.m(e, null), g || (b = [
              z(a, "click", t[28]),
              z(m, "click", t[29])
            ], g = true);
          },
          p(w, y) {
            y[0] & 8192 && (a.disabled = w[13]), y[0] & 8192 && (m.disabled = w[13]), w[13] ? v || (v = tu(), v.c(), v.m(e, null)) : v && (v.d(1), v = null);
          },
          d(w) {
            w && I(e), v && v.d(), g = false, ce(b);
          }
        };
      }
      function SS(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h, _, g, b, v, w = t[14] ? "check" : "content_copy", y, R, N = t[14] ? "Copied!" : "Copy as text", E, k, T, A, L, D, q, P, H, M, j, Y, G = Se(t[11]), U = [];
        for (let B = 0; B < G.length; B += 1) U[B] = nu(eu(t, G, B));
        let Q = t[13] && su();
        return {
          c() {
            e = p("section"), n = p("p"), n.textContent = "Your partner's number", s = S(), r = p("p"), o = O(t[10]), i = S(), a = p("p"), a.textContent = "Ask your partner to confirm this matches their screen.", l = S(), f = p("section"), d = p("p"), d.textContent = "Let your partner scan your code", m = S(), h = p("div"), _ = p("div"), g = S(), b = p("button"), v = p("span"), y = O(w), R = S(), E = O(N), T = S(), A = p("section"), L = p("p"), L.textContent = "What is your number?", D = S(), q = p("p"), q.textContent = "Tap the number shown on your screen above.", P = S(), H = p("div");
            for (let B = 0; B < U.length; B += 1) U[B].c();
            M = S(), Q && Q.c(), u(n, "class", "section-label svelte-qzc8r5"), u(r, "class", "confirm-number svelte-qzc8r5"), u(a, "class", "help-text svelte-qzc8r5"), u(e, "class", "card pad svelte-qzc8r5"), u(d, "class", "section-label svelte-qzc8r5"), u(_, "class", "qr-inner svelte-qzc8r5"), u(h, "class", "qr-frame svelte-qzc8r5"), u(v, "class", "material-icons svelte-qzc8r5"), u(b, "class", "btn-copy svelte-qzc8r5"), b.disabled = k = !t[2], u(f, "class", "card pad svelte-qzc8r5"), u(L, "class", "section-label svelte-qzc8r5"), u(q, "class", "help-text svelte-qzc8r5"), u(H, "class", "choices svelte-qzc8r5"), u(A, "class", "card pad svelte-qzc8r5");
          },
          m(B, V) {
            C(B, e, V), c(e, n), c(e, s), c(e, r), c(r, o), c(e, i), c(e, a), C(B, l, V), C(B, f, V), c(f, d), c(f, m), c(f, h), c(h, _), _.innerHTML = t[3], c(f, g), c(f, b), c(b, v), c(v, y), c(b, R), c(b, E), C(B, T, V), C(B, A, V), c(A, L), c(A, D), c(A, q), c(A, P), c(A, H);
            for (let F = 0; F < U.length; F += 1) U[F] && U[F].m(H, null);
            c(A, M), Q && Q.m(A, null), j || (Y = z(b, "click", t[20]), j = true);
          },
          p(B, V) {
            if (V[0] & 1024 && W(o, B[10]), V[0] & 8 && (_.innerHTML = B[3]), V[0] & 16384 && w !== (w = B[14] ? "check" : "content_copy") && W(y, w), V[0] & 16384 && N !== (N = B[14] ? "Copied!" : "Copy as text") && W(E, N), V[0] & 4 && k !== (k = !B[2]) && (b.disabled = k), V[0] & 272384) {
              G = Se(B[11]);
              let F;
              for (F = 0; F < G.length; F += 1) {
                const J = eu(B, G, F);
                U[F] ? U[F].p(J, V) : (U[F] = nu(J), U[F].c(), U[F].m(H, null));
              }
              for (; F < U.length; F += 1) U[F].d(1);
              U.length = G.length;
            }
            B[13] ? Q || (Q = su(), Q.c(), Q.m(A, null)) : Q && (Q.d(1), Q = null);
          },
          d(B) {
            B && (I(e), I(l), I(f), I(T), I(A)), St(U, B), Q && Q.d(), j = false, Y();
          }
        };
      }
      function ES(t) {
        let e, n, s, r, o, i;
        return {
          c() {
            e = p("div"), n = p("video"), s = S(), r = p("canvas"), o = S(), i = p("div"), i.innerHTML = '<div class="scan-box svelte-qzc8r5"></div> <p class="scan-hint svelte-qzc8r5">Point at your partner&#39;s QR code</p>', n.playsInline = true, u(n, "class", "camera-video svelte-qzc8r5"), u(r, "class", "camera-canvas svelte-qzc8r5"), u(i, "class", "scan-overlay svelte-qzc8r5"), u(e, "class", "camera-wrap svelte-qzc8r5");
          },
          m(a, l) {
            C(a, e, l), c(e, n), t[25](n), c(e, s), c(e, r), t[26](r), c(e, o), c(e, i);
          },
          p: Z,
          d(a) {
            a && I(e), t[25](null), t[26](null);
          }
        };
      }
      function TS(t) {
        let e, n, s, r, o, i, a, l, f, d = t[14] ? "check" : "content_copy", m, h, _ = t[14] ? "Copied!" : "Copy as text", g, b, v, w, y, R, N, E = t[7] ? "Hide" : "Enter code manually", k, T, A, L, D, q = t[6] && ru(t), P = t[9] && ou(t);
        function H(G, U) {
          return G[3] ? PS : LS;
        }
        let M = H(t), j = M(t), Y = t[7] && iu(t);
        return {
          c() {
            q && q.c(), e = S(), P && P.c(), n = S(), s = p("section"), r = p("p"), r.textContent = "Show this to your partner", o = S(), i = p("div"), j.c(), a = S(), l = p("button"), f = p("span"), m = O(d), h = S(), g = O(_), v = S(), w = p("div"), y = p("button"), y.innerHTML = `<span class="material-icons svelte-qzc8r5">qr_code_scanner</span>
        Scan Their Code`, R = S(), N = p("button"), k = O(E), T = S(), Y && Y.c(), A = Nt(), u(r, "class", "section-label svelte-qzc8r5"), u(i, "class", "qr-frame svelte-qzc8r5"), u(f, "class", "material-icons svelte-qzc8r5"), u(l, "class", "btn-copy svelte-qzc8r5"), l.disabled = b = !t[2], u(s, "class", "card pad svelte-qzc8r5"), u(y, "class", "btn-filled svelte-qzc8r5"), u(N, "class", "btn-text svelte-qzc8r5"), u(w, "class", "scan-actions svelte-qzc8r5");
          },
          m(G, U) {
            q && q.m(G, U), C(G, e, U), P && P.m(G, U), C(G, n, U), C(G, s, U), c(s, r), c(s, o), c(s, i), j.m(i, null), c(s, a), c(s, l), c(l, f), c(f, m), c(l, h), c(l, g), C(G, v, U), C(G, w, U), c(w, y), c(w, R), c(w, N), c(N, k), C(G, T, U), Y && Y.m(G, U), C(G, A, U), L || (D = [
              z(l, "click", t[20]),
              z(y, "click", t[15]),
              z(N, "click", t[22])
            ], L = true);
          },
          p(G, U) {
            G[6] ? q ? q.p(G, U) : (q = ru(G), q.c(), q.m(e.parentNode, e)) : q && (q.d(1), q = null), G[9] ? P ? P.p(G, U) : (P = ou(G), P.c(), P.m(n.parentNode, n)) : P && (P.d(1), P = null), M === (M = H(G)) && j ? j.p(G, U) : (j.d(1), j = M(G), j && (j.c(), j.m(i, null))), U[0] & 16384 && d !== (d = G[14] ? "check" : "content_copy") && W(m, d), U[0] & 16384 && _ !== (_ = G[14] ? "Copied!" : "Copy as text") && W(g, _), U[0] & 4 && b !== (b = !G[2]) && (l.disabled = b), U[0] & 128 && E !== (E = G[7] ? "Hide" : "Enter code manually") && W(k, E), G[7] ? Y ? Y.p(G, U) : (Y = iu(G), Y.c(), Y.m(A.parentNode, A)) : Y && (Y.d(1), Y = null);
          },
          d(G) {
            G && (I(e), I(n), I(s), I(v), I(w), I(T), I(A)), q && q.d(G), P && P.d(G), j.d(), Y && Y.d(G), L = false, ce(D);
          }
        };
      }
      function IS(t) {
        let e;
        return {
          c() {
            e = p("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-qzc8r5">check_circle</span> <p class="saved-title svelte-qzc8r5">Encounter recorded</p> <p class="muted svelte-qzc8r5">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-qzc8r5">View encounters</a>', u(e, "class", "card pad saved-card svelte-qzc8r5");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function CS(t) {
        let e, n, s, r, o;
        return {
          c() {
            e = p("section"), n = p("p"), s = O(t[1]), r = S(), o = p("a"), o.textContent = "\u2190 Back", u(n, "class", "error svelte-qzc8r5"), u(o, "href", "#/home"), u(o, "class", "btn-text svelte-qzc8r5"), u(e, "class", "card pad svelte-qzc8r5");
          },
          m(i, a) {
            C(i, e, a), c(e, n), c(n, s), c(e, r), c(e, o);
          },
          p(i, a) {
            a[0] & 2 && W(s, i[1]);
          },
          d(i) {
            i && I(e);
          }
        };
      }
      function AS(t) {
        let e;
        return {
          c() {
            e = p("div"), e.innerHTML = '<div class="spinner svelte-qzc8r5"></div> <p class="muted svelte-qzc8r5">Generating your code\u2026</p>', u(e, "class", "center-fill svelte-qzc8r5");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function RS(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Unnamed group encounter", u(e, "class", "help-text svelte-qzc8r5");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function NS(t) {
        let e, n = t[12].name + "", s;
        return {
          c() {
            e = p("p"), s = O(n), u(e, "class", "confirm-group-name svelte-qzc8r5");
          },
          m(r, o) {
            C(r, e, o), c(e, s);
          },
          p(r, o) {
            o[0] & 4096 && n !== (n = r[12].name + "") && W(s, n);
          },
          d(r) {
            r && I(e);
          }
        };
      }
      function tu(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Saving\u2026", u(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function nu(t) {
        let e, n = t[45] + "", s, r, o;
        function i() {
          return t[27](t[45]);
        }
        return {
          c() {
            e = p("button"), s = O(n), u(e, "class", "choice-btn svelte-qzc8r5"), e.disabled = t[13];
          },
          m(a, l) {
            C(a, e, l), c(e, s), r || (o = z(e, "click", i), r = true);
          },
          p(a, l) {
            t = a, l[0] & 2048 && n !== (n = t[45] + "") && W(s, n), l[0] & 8192 && (e.disabled = t[13]);
          },
          d(a) {
            a && I(e), r = false, o();
          }
        };
      }
      function su(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Saving\u2026", u(e, "class", "muted saving-hint svelte-qzc8r5");
          },
          m(n, s) {
            C(n, e, s);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function ru(t) {
        let e, n, s, r;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "error_outline", s = S(), r = O(t[6]), u(n, "class", "material-icons svelte-qzc8r5"), u(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(o, i) {
            C(o, e, i), c(e, n), c(e, s), c(e, r);
          },
          p(o, i) {
            i[0] & 64 && W(r, o[6]);
          },
          d(o) {
            o && I(e);
          }
        };
      }
      function ou(t) {
        let e, n, s, r;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "error_outline", s = S(), r = O(t[9]), u(n, "class", "material-icons svelte-qzc8r5"), u(e, "class", "alert-banner svelte-qzc8r5");
          },
          m(o, i) {
            C(o, e, i), c(e, n), c(e, s), c(e, r);
          },
          p(o, i) {
            i[0] & 512 && W(r, o[9]);
          },
          d(o) {
            o && I(e);
          }
        };
      }
      function LS(t) {
        let e;
        return {
          c() {
            e = p("p"), e.textContent = "Generating\u2026", u(e, "class", "muted svelte-qzc8r5");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function PS(t) {
        let e;
        return {
          c() {
            e = p("div"), u(e, "class", "qr-inner svelte-qzc8r5");
          },
          m(n, s) {
            C(n, e, s), e.innerHTML = t[3];
          },
          p(n, s) {
            s[0] & 8 && (e.innerHTML = n[3]);
          },
          d(n) {
            n && I(e);
          }
        };
      }
      function iu(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h = t[9] && au(t);
        return {
          c() {
            e = p("section"), n = p("p"), n.textContent = "Paste their QR payload", s = S(), r = p("textarea"), o = S(), h && h.c(), i = S(), a = p("button"), l = O("Continue"), u(n, "class", "section-label svelte-qzc8r5"), u(r, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), u(r, "rows", "3"), u(r, "class", "svelte-qzc8r5"), u(a, "class", "btn-filled svelte-qzc8r5"), a.disabled = f = !t[8].trim(), u(e, "class", "card pad svelte-qzc8r5");
          },
          m(_, g) {
            C(_, e, g), c(e, n), c(e, s), c(e, r), ae(r, t[8]), c(e, o), h && h.m(e, null), c(e, i), c(e, a), c(a, l), d || (m = [
              z(r, "input", t[23]),
              z(r, "keydown", t[24]),
              z(a, "click", t[16])
            ], d = true);
          },
          p(_, g) {
            g[0] & 256 && ae(r, _[8]), _[9] ? h ? h.p(_, g) : (h = au(_), h.c(), h.m(e, i)) : h && (h.d(1), h = null), g[0] & 256 && f !== (f = !_[8].trim()) && (a.disabled = f);
          },
          d(_) {
            _ && I(e), h && h.d(), d = false, ce(m);
          }
        };
      }
      function au(t) {
        let e, n;
        return {
          c() {
            e = p("p"), n = O(t[9]), u(e, "class", "error-text svelte-qzc8r5");
          },
          m(s, r) {
            C(s, e, r), c(e, n);
          },
          p(s, r) {
            r[0] & 512 && W(n, s[9]);
          },
          d(s) {
            s && I(e);
          }
        };
      }
      function DS(t) {
        let e, n, s, r, o, i, a, l;
        e = new Ht({});
        function f(y, R) {
          return y[0] === "scanning" || y[0] === "confirm-group" ? _S : mS;
        }
        let d = f(t), m = d(t);
        function h(y, R) {
          return y[0] === "scanning" ? yS : y[0] === "confirm" || y[0] === "ongoing?" ? vS : y[0] === "confirm-group" ? bS : y[0] === "saved" ? gS : hS;
        }
        let _ = h(t), g = _(t);
        function b(y, R) {
          if (y[0] === "loading") return AS;
          if (y[0] === "error") return CS;
          if (y[0] === "saved") return IS;
          if (y[0] === "showQR") return TS;
          if (y[0] === "scanning") return ES;
          if (y[0] === "confirm") return SS;
          if (y[0] === "ongoing?") return kS;
          if (y[0] === "confirm-group") return wS;
        }
        let v = b(t), w = v && v(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), r = p("div"), m.c(), o = S(), i = p("h1"), g.c(), a = S(), w && w.c(), u(i, "class", "svelte-qzc8r5"), u(r, "class", "page-header svelte-qzc8r5"), u(s, "class", "svelte-qzc8r5");
          },
          m(y, R) {
            Oe(e, y, R), C(y, n, R), C(y, s, R), c(s, r), m.m(r, null), c(r, o), c(r, i), g.m(i, null), c(s, a), w && w.m(s, null), l = true;
          },
          p(y, R) {
            d === (d = f(y)) && m ? m.p(y, R) : (m.d(1), m = d(y), m && (m.c(), m.m(r, o))), _ !== (_ = h(y)) && (g.d(1), g = _(y), g && (g.c(), g.m(i, null))), v === (v = b(y)) && w ? w.p(y, R) : (w && w.d(1), w = v && v(y), w && (w.c(), w.m(s, null)));
          },
          i(y) {
            l || (_e(e.$$.fragment, y), l = true);
          },
          o(y) {
            we(e.$$.fragment, y), l = false;
          },
          d(y) {
            y && (I(n), I(s)), Me(e, y), m.d(), g.d(), w && w.d();
          }
        };
      }
      function Fo(t) {
        return 10 + (t[1] * 256 + t[2]) % 90;
      }
      function lu(t) {
        const e = /* @__PURE__ */ new Set([
          t
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((n, s) => n - s);
      }
      function OS(t, e, n) {
        let s = "loading", r = null, o = null, i = "", a = 0, l = "", f = null, d = null, m = null, h = null, _ = null, g = false, b = false, v = "", w = null, y = null, R = null, N = 0, E = [], k = null, T = "", A = null, L = "", D = false, q = false, P = null;
        et(async () => {
          if (!lt()) {
            de("/login");
            return;
          }
          try {
            const ee = Ty(), ie = Tn(), he = Math.floor(Date.now() / 1e3);
            o = ee.privateKey, a = Fo(ee.publicKey), n(2, i = `1|${on(ee.publicKey)}|${he}|${ne(ie)}`);
            const { default: Be } = await Qr(async () => {
              const { default: Ae } = await import("./browser-CTB2jwNe.js").then((bt) => bt.b);
              return {
                default: Ae
              };
            }, []);
            n(3, l = await Be.toString(i, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#000000",
                light: "#ffffff"
              }
            })), n(0, s = "showQR");
          } catch (ee) {
            n(1, r = ee.message), n(0, s = "error");
          }
        }), co(() => {
          M();
        });
        async function H() {
          if (n(6, _ = null), g = false, !navigator.mediaDevices?.getUserMedia) {
            n(6, _ = "Camera not available. This page must be opened over HTTPS to use the camera."), n(0, s = "showQR");
            return;
          }
          n(0, s = "scanning"), P ??= (await Qr(async () => {
            const { default: ee } = await import("./jsQR-UMIdgYmG.js").then((ie) => ie.j);
            return {
              default: ee
            };
          }, [])).default, await new Promise((ee) => setTimeout(ee, 50));
          try {
            m = await navigator.mediaDevices.getUserMedia({
              video: {
                facingMode: "environment",
                width: {
                  ideal: 1280
                },
                height: {
                  ideal: 720
                }
              }
            }), n(4, f.srcObject = m, f), await f.play(), j();
          } catch (ee) {
            const ie = ee;
            n(6, _ = ie.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + ie.message), M(), n(0, s = "showQR");
          }
        }
        function M() {
          h && (cancelAnimationFrame(h), h = null), m && (m.getTracks().forEach((ee) => ee.stop()), m = null), g = false;
        }
        function j() {
          if (!m || !f || f.readyState < 2) {
            h = requestAnimationFrame(j);
            return;
          }
          const ee = f.videoWidth, ie = f.videoHeight;
          if (!ee || !ie) {
            h = requestAnimationFrame(j);
            return;
          }
          n(5, d.width = ee, d), n(5, d.height = ie, d);
          const he = d.getContext("2d");
          he.drawImage(f, 0, 0, ee, ie);
          const Be = he.getImageData(0, 0, ee, ie), Ae = P(Be.data, ee, ie, {
            inversionAttempts: "dontInvert"
          });
          if (Ae && !g) {
            g = true, G(Ae.data);
            return;
          }
          h = requestAnimationFrame(j);
        }
        function Y(ee) {
          const ie = ee.trim().split("|"), he = parseInt(ie[0], 10);
          if (!isNaN(he) && he > 1) throw new Error("Your partner has a newer app version. Please update.");
          if (ie.length !== 4 || ie[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, Be, , Ae] = ie;
          if (!Be || Be.length < 10) throw new Error("Invalid QR payload");
          if (!Ae || Ae.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: vd(Be),
            contactIdBytes: xe(Ae)
          };
        }
        function G(ee) {
          const ie = ee.trim();
          if (ie.startsWith("2|")) {
            try {
              const he = vl(ie);
              if (!he) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - he.timestamp > 86400) {
                g = false, h = requestAnimationFrame(j);
                return;
              }
              M(), n(12, k = he), T = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), n(0, s = "confirm-group");
            } catch {
              g = false, h = requestAnimationFrame(j);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: he, contactIdBytes: Be } = Y(ee);
            if (ne(Be) === ne(Tn())) {
              g = false, n(9, w = "You can't log an encounter with yourself."), n(0, s = "showQR");
              return;
            }
            M(), y = he, R = Be, n(10, N = Fo(he)), n(11, E = lu(a)), n(0, s = "confirm");
          } catch {
            g = false, h = requestAnimationFrame(j);
          }
        }
        function U() {
          n(9, w = null);
          const ee = v.trim();
          try {
            if (ee.startsWith("2|")) {
              const ie = vl(ee);
              if (!ie) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - ie.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              n(12, k = ie), T = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), n(0, s = "confirm-group"), n(7, b = false);
            } else {
              const { ephemeralPubkeyBytes: ie, contactIdBytes: he } = Y(ee);
              if (ne(he) === ne(Tn())) throw new Error("You can't log an encounter with yourself.");
              y = ie, R = he, n(10, N = Fo(ie)), n(11, E = lu(a)), n(0, s = "confirm"), n(7, b = false);
            }
          } catch (ie) {
            n(9, w = ie.message);
          }
        }
        function Q() {
          M(), n(12, k = null), n(0, s = "showQR"), n(7, b = false), n(9, w = null), n(8, v = "");
        }
        async function B(ee) {
          if (ee !== a) {
            n(9, w = "Wrong \u2014 that's not your number. Scan again."), n(0, s = "showQR"), n(7, b = false), n(8, v = ""), y = null, R = null;
            return;
          }
          const ie = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          A = Iy(o, y), L = ie;
          const Ae = Ct()?.encounters || [], bt = ra(), tt = ne(R), Lt = Ae.some((ct) => ne(ct.theirContactId) === tt), je = bt.some((ct) => ne(ct.theirContactId) === tt && !ct.endedAt);
          Lt && !je ? n(0, s = "ongoing?") : await V(false);
        }
        async function V(ee) {
          n(13, D = true);
          try {
            const ie = Tn(), he = En(A, ie, 0);
            await Yr(ne(he), L), ee ? await I0(A, R, L) : await E0(A, R, L), n(0, s = "saved");
          } catch (ie) {
            n(1, r = ie.message), n(0, s = "error");
          } finally {
            n(13, D = false);
          }
        }
        async function F() {
          try {
            await navigator.clipboard.writeText(i), n(14, q = true), setTimeout(() => {
              n(14, q = false);
            }, 2e3);
          } catch {
          }
        }
        async function J() {
          n(13, D = true);
          try {
            const ee = xe(k.groupTokenHex), ie = xe(k.hostContactIdHex);
            await Md(ee, T, false, ie, k.name), await Yr(ne(Qn(ee, 0)), T), n(0, s = "saved");
          } catch (ee) {
            n(1, r = ee.message), n(0, s = "error");
          } finally {
            n(13, D = false);
          }
        }
        const x = () => {
          n(7, b = !b), n(9, w = null);
        };
        function re() {
          v = this.value, n(8, v);
        }
        const be = (ee) => ee.key === "Enter" && !ee.shiftKey && (ee.preventDefault(), U());
        function ue(ee) {
          zr[ee ? "unshift" : "push"](() => {
            f = ee, n(4, f);
          });
        }
        function ye(ee) {
          zr[ee ? "unshift" : "push"](() => {
            d = ee, n(5, d);
          });
        }
        return [
          s,
          r,
          i,
          l,
          f,
          d,
          _,
          b,
          v,
          w,
          N,
          E,
          k,
          D,
          q,
          H,
          U,
          Q,
          B,
          V,
          F,
          J,
          x,
          re,
          be,
          ue,
          ye,
          (ee) => B(ee),
          () => V(true),
          () => V(false)
        ];
      }
      class MS extends Ce {
        constructor(e) {
          super(), Ie(this, e, OS, DS, Te, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function qS(t) {
        let e, n, s, r, o, i, a = du(t[1].date) + "", l, f, d, m = t[0].rawTokenHex.slice(0, 12) + "", h, _, g, b, v, w, y, R, N, E, k = t[3] && cu(t), T = t[7] && uu(t), A = t[5] && fu(t);
        return {
          c() {
            k && k.c(), e = S(), T && T.c(), n = S(), s = p("section"), r = p("div"), r.innerHTML = '<span class="material-icons status-icon svelte-nknqao">check_circle_outline</span> <span class="status-label svelte-nknqao">One-time encounter</span>', o = S(), i = p("p"), l = O(a), f = S(), d = p("p"), h = O(m), _ = O("\u2026"), g = S(), b = p("section"), v = p("div"), v.innerHTML = '<span class="material-icons privacy-icon svelte-nknqao">lock_outline</span> <p class="privacy-text svelte-nknqao">Your note is stored encrypted and never shared.</p>', w = S(), y = p("textarea"), R = S(), A && A.c(), u(r, "class", "status-row svelte-nknqao"), u(i, "class", "date svelte-nknqao"), u(d, "class", "token svelte-nknqao"), u(s, "class", "card pad svelte-nknqao"), u(v, "class", "privacy-row svelte-nknqao"), u(y, "placeholder", "Add a private note\u2026"), u(y, "rows", "5"), u(y, "class", "svelte-nknqao"), u(b, "class", "card pad svelte-nknqao");
          },
          m(L, D) {
            k && k.m(L, D), C(L, e, D), T && T.m(L, D), C(L, n, D), C(L, s, D), c(s, r), c(s, o), c(s, i), c(i, l), c(s, f), c(s, d), c(d, h), c(d, _), C(L, g, D), C(L, b, D), c(b, v), c(b, w), c(b, y), ae(y, t[4]), c(b, R), A && A.m(b, null), N || (E = [
              z(y, "input", t[13]),
              z(y, "input", t[8])
            ], N = true);
          },
          p(L, D) {
            L[3] ? k ? k.p(L, D) : (k = cu(L), k.c(), k.m(e.parentNode, e)) : k && (k.d(1), k = null), L[7] ? T ? T.p(L, D) : (T = uu(L), T.c(), T.m(n.parentNode, n)) : T && (T.d(1), T = null), D & 2 && a !== (a = du(L[1].date) + "") && W(l, a), D & 1 && m !== (m = L[0].rawTokenHex.slice(0, 12) + "") && W(h, m), D & 16 && ae(y, L[4]), L[5] ? A ? A.p(L, D) : (A = fu(L), A.c(), A.m(b, null)) : A && (A.d(1), A = null);
          },
          d(L) {
            L && (I(e), I(n), I(s), I(g), I(b)), k && k.d(L), T && T.d(L), A && A.d(), N = false, ce(E);
          }
        };
      }
      function HS(t) {
        let e;
        return {
          c() {
            e = p("section"), e.innerHTML = '<p class="muted svelte-nknqao">This encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-nknqao">\u2190 Back to encounters</a>', u(e, "class", "card pad svelte-nknqao");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function cu(t) {
        let e, n, s, r;
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "error_outline", s = S(), r = O(t[3]), u(n, "class", "material-icons svelte-nknqao"), u(e, "class", "toast error-toast svelte-nknqao");
          },
          m(o, i) {
            C(o, e, i), c(e, n), c(e, s), c(e, r);
          },
          p(o, i) {
            i & 8 && W(r, o[3]);
          },
          d(o) {
            o && I(e);
          }
        };
      }
      function uu(t) {
        let e, n, s, r, o, i, a, l, f, d = t[6] ? "Saving\u2026" : "Save note", m, h, _;
        return {
          c() {
            e = p("section"), n = p("p"), n.textContent = "You have unsaved changes to your note.", s = S(), r = p("div"), o = p("button"), o.textContent = "Keep editing", i = S(), a = p("button"), a.textContent = "Discard", l = S(), f = p("button"), m = O(d), u(n, "class", "confirm-text svelte-nknqao"), u(o, "class", "btn-text svelte-nknqao"), u(a, "class", "btn-text danger svelte-nknqao"), u(f, "class", "btn-filled-sm svelte-nknqao"), f.disabled = t[6], u(r, "class", "confirm-actions svelte-nknqao"), u(e, "class", "card pad leave-confirm svelte-nknqao");
          },
          m(g, b) {
            C(g, e, b), c(e, n), c(e, s), c(e, r), c(r, o), c(r, i), c(r, a), c(r, l), c(r, f), c(f, m), h || (_ = [
              z(o, "click", t[12]),
              z(a, "click", t[11]),
              z(f, "click", t[10])
            ], h = true);
          },
          p(g, b) {
            b & 64 && d !== (d = g[6] ? "Saving\u2026" : "Save note") && W(m, d), b & 64 && (f.disabled = g[6]);
          },
          d(g) {
            g && I(e), h = false, ce(_);
          }
        };
      }
      function fu(t) {
        let e, n, s = t[6] ? "Saving\u2026" : "Save", r, o, i;
        return {
          c() {
            e = p("div"), n = p("button"), r = O(s), u(n, "class", "btn-filled-sm svelte-nknqao"), n.disabled = t[6], u(e, "class", "note-actions svelte-nknqao");
          },
          m(a, l) {
            C(a, e, l), c(e, n), c(n, r), o || (i = z(n, "click", t[9]), o = true);
          },
          p(a, l) {
            l & 64 && s !== (s = a[6] ? "Saving\u2026" : "Save") && W(r, s), l & 64 && (n.disabled = a[6]);
          },
          d(a) {
            a && I(e), o = false, i();
          }
        };
      }
      function BS(t) {
        let e, n, s, r, o, i, a, l = t[2] ? "Not found" : "Encounter", f, d, m;
        e = new Ht({});
        function h(b, v) {
          if (b[2]) return HS;
          if (b[1]) return qS;
        }
        let _ = h(t), g = _ && _(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), s = p("main"), r = p("div"), o = p("a"), o.innerHTML = '<span class="material-icons svelte-nknqao">arrow_back</span>', i = S(), a = p("h1"), f = O(l), d = S(), g && g.c(), u(o, "class", "back-btn svelte-nknqao"), u(o, "href", "#/encounters"), u(a, "class", "svelte-nknqao"), u(r, "class", "page-header svelte-nknqao"), u(s, "class", "svelte-nknqao");
          },
          m(b, v) {
            Oe(e, b, v), C(b, n, v), C(b, s, v), c(s, r), c(r, o), c(r, i), c(r, a), c(a, f), c(s, d), g && g.m(s, null), m = true;
          },
          p(b, [v]) {
            (!m || v & 4) && l !== (l = b[2] ? "Not found" : "Encounter") && W(f, l), _ === (_ = h(b)) && g ? g.p(b, v) : (g && g.d(1), g = _ && _(b), g && (g.c(), g.m(s, null)));
          },
          i(b) {
            m || (_e(e.$$.fragment, b), m = true);
          },
          o(b) {
            we(e.$$.fragment, b), m = false;
          },
          d(b) {
            b && (I(n), I(s)), Me(e, b), g && g.d();
          }
        };
      }
      function du(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function FS(t, e, n) {
        let { params: s = {
          rawTokenHex: ""
        } } = e, r = null, o = false, i = null, a = "", l = false, f = false, d = false, m = null;
        et(() => {
          if (!lt()) {
            de("/login");
            return;
          }
          g(), document.addEventListener("click", _, {
            capture: true
          }), window.addEventListener("beforeunload", h);
        }), co(() => {
          document.removeEventListener("click", _, {
            capture: true
          }), window.removeEventListener("beforeunload", h);
        });
        function h(k) {
          l && (k.preventDefault(), k.returnValue = "");
        }
        function _(k) {
          if (!l) return;
          const T = k.target.closest('a[href^="#/"]');
          T && (k.preventDefault(), k.stopImmediatePropagation(), m = T.getAttribute("href").slice(1), n(7, d = true));
        }
        function g() {
          const k = s.rawTokenHex;
          if (n(1, r = Dd().find((T) => ne(T.rawToken) === k) ?? null), !r) {
            n(2, o = true);
            return;
          }
          n(4, a = r.note ?? "");
        }
        function b() {
          n(5, l = a !== (r.note ?? ""));
        }
        async function v() {
          if (!(!l || f)) {
            n(6, f = true), n(3, i = null);
            try {
              const k = a.trim() || null;
              await T0(s.rawTokenHex, {
                note: k
              }), g(), n(5, l = false);
            } catch (k) {
              n(3, i = k.message);
            } finally {
              n(6, f = false);
            }
          }
        }
        async function w() {
          await v(), i || R();
        }
        function y() {
          n(4, a = r.note ?? ""), n(5, l = false), R();
        }
        function R() {
          n(7, d = false), de(m);
        }
        const N = () => n(7, d = false);
        function E() {
          a = this.value, n(4, a);
        }
        return t.$$set = (k) => {
          "params" in k && n(0, s = k.params);
        }, [
          s,
          r,
          o,
          i,
          a,
          l,
          f,
          d,
          b,
          v,
          w,
          y,
          N,
          E
        ];
      }
      class zS extends Ce {
        constructor(e) {
          super(), Ie(this, e, FS, BS, Te, {
            params: 0
          });
        }
      }
      function US(t) {
        let e, n, s, r, o, i, a, l, f, d, m, h;
        return a = new Bd({
          props: {
            digits: t[0],
            error: t[1],
            shaking: t[2]
          }
        }), a.$on("digit", t[3]), a.$on("delete", t[4]), {
          c() {
            e = p("div"), n = p("div"), s = p("div"), s.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-1d0bqmg"/> <span class="brand-label"><span class="brand-peach svelte-1d0bqmg">Peach</span><span class="brand-safe svelte-1d0bqmg">Safe</span></span>', r = S(), o = p("p"), o.textContent = "Enter your PIN", i = S(), Ue(a.$$.fragment), l = S(), f = p("button"), f.textContent = "Sign out", u(s, "class", "brand svelte-1d0bqmg"), u(o, "class", "prompt svelte-1d0bqmg"), u(f, "class", "signout-link svelte-1d0bqmg"), u(n, "class", "lock-card svelte-1d0bqmg"), u(e, "class", "overlay svelte-1d0bqmg"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-label", "Enter PIN to unlock");
          },
          m(_, g) {
            C(_, e, g), c(e, n), c(n, s), c(n, r), c(n, o), c(n, i), Oe(a, n, null), c(n, l), c(n, f), d = true, m || (h = z(f, "click", t[5]), m = true);
          },
          p(_, [g]) {
            const b = {};
            g & 1 && (b.digits = _[0]), g & 2 && (b.error = _[1]), g & 4 && (b.shaking = _[2]), a.$set(b);
          },
          i(_) {
            d || (_e(a.$$.fragment, _), d = true);
          },
          o(_) {
            we(a.$$.fragment, _), d = false;
          },
          d(_) {
            _ && I(e), Me(a), m = false, h();
          }
        };
      }
      function jS(t, e, n) {
        let s = "", r = "", o = false;
        function i(d) {
          s.length >= 4 || o || (n(1, r = ""), n(0, s += d.detail), s.length === 4 && l());
        }
        function a() {
          o || (n(0, s = s.slice(0, -1)), n(1, r = ""));
        }
        async function l() {
          s === S0() ? po.set(true) : (n(2, o = true), n(1, r = "Incorrect PIN"), await new Promise((d) => setTimeout(d, 600)), n(0, s = ""), n(2, o = false));
        }
        async function f() {
          await xi(), de("/login");
        }
        return [
          s,
          r,
          o,
          i,
          a,
          f
        ];
      }
      class WS extends Ce {
        constructor(e) {
          super(), Ie(this, e, jS, US, Te, {});
        }
      }
      function GS(t) {
        let e, n, s, r, o = t[7] !== null && !t[8] && t[11](t[0]), i, a, l, f;
        e = new l1({
          props: {
            routes: t[10]
          }
        }), e.$on("routeLoaded", t[15]), s = new Hy({});
        let d = o && pu(), m = t[9] === false && mu(t), h = t[5] && _u(t);
        return {
          c() {
            Ue(e.$$.fragment), n = S(), Ue(s.$$.fragment), r = S(), d && d.c(), i = S(), m && m.c(), a = S(), h && h.c(), l = Nt();
          },
          m(_, g) {
            Oe(e, _, g), C(_, n, g), Oe(s, _, g), C(_, r, g), d && d.m(_, g), C(_, i, g), m && m.m(_, g), C(_, a, g), h && h.m(_, g), C(_, l, g), f = true;
          },
          p(_, g) {
            g & 385 && (o = _[7] !== null && !_[8] && _[11](_[0])), o ? d ? g & 385 && _e(d, 1) : (d = pu(), d.c(), _e(d, 1), d.m(i.parentNode, i)) : d && (us(), we(d, 1, 1, () => {
              d = null;
            }), fs()), _[9] === false ? m ? m.p(_, g) : (m = mu(_), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null), _[5] ? h ? h.p(_, g) : (h = _u(_), h.c(), h.m(l.parentNode, l)) : h && (h.d(1), h = null);
          },
          i(_) {
            f || (_e(e.$$.fragment, _), _e(s.$$.fragment, _), _e(d), f = true);
          },
          o(_) {
            we(e.$$.fragment, _), we(s.$$.fragment, _), we(d), f = false;
          },
          d(_) {
            _ && (I(n), I(r), I(i), I(a), I(l)), Me(e, _), Me(s, _), d && d.d(_), m && m.d(_), h && h.d(_);
          }
        };
      }
      function VS(t) {
        let e;
        return {
          c() {
            e = p("main"), e.textContent = "Loading\u2026", u(e, "class", "loading svelte-1kqo0f9");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          i: Z,
          o: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function YS(t) {
        let e, n, s, r, o, i;
        return {
          c() {
            e = p("main"), n = p("p"), s = O("Failed to load crypto module: "), r = O(t[4]), o = S(), i = p("p"), i.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", u(e, "class", "error svelte-1kqo0f9");
          },
          m(a, l) {
            C(a, e, l), c(e, n), c(n, s), c(n, r), c(e, o), c(e, i);
          },
          p(a, l) {
            l & 16 && W(r, a[4]);
          },
          i: Z,
          o: Z,
          d(a) {
            a && I(e);
          }
        };
      }
      function pu(t) {
        let e, n;
        return e = new WS({}), {
          c() {
            Ue(e.$$.fragment);
          },
          m(s, r) {
            Oe(e, s, r), n = true;
          },
          i(s) {
            n || (_e(e.$$.fragment, s), n = true);
          },
          o(s) {
            we(e.$$.fragment, s), n = false;
          },
          d(s) {
            Me(e, s);
          }
        };
      }
      function mu(t) {
        let e, n, s, r, o;
        function i(f, d) {
          return f[2] ? JS : KS;
        }
        let a = i(t), l = a(t);
        return {
          c() {
            e = p("div"), n = p("span"), n.textContent = "mail_outline", s = S(), r = p("span"), r.textContent = "Please verify your email address. Check your inbox for a verification link.", o = S(), l.c(), u(n, "class", "material-icons svelte-1kqo0f9"), u(r, "class", "verify-text svelte-1kqo0f9"), u(e, "class", "verify-banner svelte-1kqo0f9");
          },
          m(f, d) {
            C(f, e, d), c(e, n), c(e, s), c(e, r), c(e, o), l.m(e, null);
          },
          p(f, d) {
            a === (a = i(f)) && l ? l.p(f, d) : (l.d(1), l = a(f), l && (l.c(), l.m(e, null)));
          },
          d(f) {
            f && I(e), l.d();
          }
        };
      }
      function KS(t) {
        let e, n = t[1] ? "Sending\u2026" : "Resend", s, r, o;
        return {
          c() {
            e = p("button"), s = O(n), u(e, "class", "resend-btn svelte-1kqo0f9"), e.disabled = t[1];
          },
          m(i, a) {
            C(i, e, a), c(e, s), r || (o = z(e, "click", t[12]), r = true);
          },
          p(i, a) {
            a & 2 && n !== (n = i[1] ? "Sending\u2026" : "Resend") && W(s, n), a & 2 && (e.disabled = i[1]);
          },
          d(i) {
            i && I(e), r = false, o();
          }
        };
      }
      function JS(t) {
        let e;
        return {
          c() {
            e = p("span"), e.textContent = "Sent!", u(e, "class", "resend-sent svelte-1kqo0f9");
          },
          m(n, s) {
            C(n, e, s);
          },
          p: Z,
          d(n) {
            n && I(e);
          }
        };
      }
      function _u(t) {
        let e, n, s, r, o, i, a, l = Math.floor(t[6] / 60) + "", f, d, m = String(t[6] % 60).padStart(2, "0") + "", h, _, g, b, v, w, y, R, N;
        return {
          c() {
            e = p("div"), n = p("div"), s = p("h2"), s.textContent = "Session expiring", r = S(), o = p("p"), i = O(`You'll be logged out in
          `), a = p("strong"), f = O(l), d = O(":"), h = O(m), _ = O(`
          due to inactivity.`), g = S(), b = p("div"), v = p("button"), v.textContent = "Stay logged in", w = S(), y = p("button"), y.textContent = "Log out now", u(s, "id", "idle-title"), u(s, "class", "svelte-1kqo0f9"), u(o, "class", "svelte-1kqo0f9"), u(v, "class", "btn-primary svelte-1kqo0f9"), u(y, "class", "btn-ghost svelte-1kqo0f9"), u(b, "class", "idle-actions svelte-1kqo0f9"), u(n, "class", "idle-dialog svelte-1kqo0f9"), u(e, "class", "idle-overlay svelte-1kqo0f9"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "idle-title");
          },
          m(E, k) {
            C(E, e, k), c(e, n), c(n, s), c(n, r), c(n, o), c(o, i), c(o, a), c(a, f), c(a, d), c(a, h), c(o, _), c(n, g), c(n, b), c(b, v), c(b, w), c(b, y), R || (N = [
              z(v, "click", t[13]),
              z(y, "click", t[14])
            ], R = true);
          },
          p(E, k) {
            k & 64 && l !== (l = Math.floor(E[6] / 60) + "") && W(f, l), k & 64 && m !== (m = String(E[6] % 60).padStart(2, "0") + "") && W(h, m);
          },
          d(E) {
            E && I(e), R = false, ce(N);
          }
        };
      }
      function XS(t) {
        let e, n, s, r;
        const o = [
          YS,
          VS,
          GS
        ], i = [];
        function a(l, f) {
          return l[4] ? 0 : l[3] ? 2 : 1;
        }
        return e = a(t), n = i[e] = o[e](t), {
          c() {
            n.c(), s = Nt();
          },
          m(l, f) {
            i[e].m(l, f), C(l, s, f), r = true;
          },
          p(l, [f]) {
            let d = e;
            e = a(l), e === d ? i[e].p(l, f) : (us(), we(i[d], 1, 1, () => {
              i[d] = null;
            }), fs(), n = i[e], n ? n.p(l, f) : (n = i[e] = o[e](l), n.c()), _e(n, 1), n.m(s.parentNode, s));
          },
          i(l) {
            r || (_e(n), r = true);
          },
          o(l) {
            we(n), r = false;
          },
          d(l) {
            l && I(s), i[e].d(l);
          }
        };
      }
      const hu = 120;
      function QS(t, e, n) {
        let s, r, o;
        st(t, sa, (k) => n(7, s = k)), st(t, po, (k) => n(8, r = k)), st(t, Fn, (k) => n(9, o = k));
        const i = {
          "/": f0,
          "/how-it-works": m0,
          "/login": J0,
          "/signup": x0,
          "/home": sw,
          "/encounter-exchange": MS,
          "/encounters": mw,
          "/encounters/:rawTokenHex": zS,
          "/relationships/:rawTokenHex": Aw,
          "/groups/:tokenHex": kk,
          "/results": jw,
          "/change-password": Vw,
          "/change-email": Qw,
          "/verify-email/:token": nk,
          "/alerts": ck,
          "/settings": iS,
          "/settings/2fa-setup": pS
        }, a = /* @__PURE__ */ new Set([
          "/",
          "/login",
          "/signup",
          "/home",
          "/encounter-exchange",
          "/how-it-works"
        ]);
        function l(k) {
          return lt() && !a.has(k) && !k.startsWith("/verify-email/");
        }
        let f = "/", d = false, m = false;
        async function h() {
          n(1, d = true);
          try {
            await Gy(), n(2, m = true);
          } catch {
          } finally {
            n(1, d = false);
          }
        }
        let _ = false, g = null, b = false, v = hu, w = null;
        function y() {
          n(6, v = hu), clearInterval(w), w = setInterval(() => {
            n(6, v -= 1), v <= 0 && clearInterval(w);
          }, 1e3);
        }
        function R() {
          n(5, b = false), clearInterval(w), l0();
        }
        async function N() {
          n(5, b = false), clearInterval(w), _i(), await xi(), de("/login");
        }
        function E(k) {
          const T = k.detail.location;
          n(0, f = T), window.scrollTo(0, 0), !(T === "/" || T === "/login" || T.startsWith("/signup")) && lt() ? a0({
            onWarnCallback: () => {
              n(5, b = true), y();
            },
            onExpiredCallback: N
          }) : (_i(), n(5, b = false), clearInterval(w));
        }
        return et(async () => {
          try {
            await Ey(), n(3, _ = true);
          } catch (k) {
            n(4, g = k.message);
          }
        }), [
          f,
          d,
          m,
          _,
          g,
          b,
          v,
          s,
          r,
          o,
          i,
          l,
          h,
          R,
          N,
          E
        ];
      }
      class ZS extends Ce {
        constructor(e) {
          super(), Ie(this, e, QS, XS, Te, {});
        }
      }
      function mr(t) {
        return t && t.replace(/[0-9a-f]{20,}/gi, "[token]");
      }
      jv({
        dsn: "https://ddad51f4bb310207d67dd5dd5f75fd40@o4511371060314112.ingest.us.sentry.io/4511371062345728",
        integrations: [
          Hv()
        ],
        tracesSampleRate: 0.1,
        beforeSend(t) {
          t.request?.url && (t.request.url = mr(t.request.url));
          const e = t.breadcrumbs?.values;
          if (Array.isArray(e)) for (const n of e) n.data?.url && (n.data.url = mr(n.data.url)), n.data?.to && (n.data.to = mr(n.data.to)), n.data?.from && (n.data.from = mr(n.data.from));
          return t;
        }
      });
      new ZS({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
