const mi = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerpolicy && (s.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
};
mi();
function Tr(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const _i =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  vi = Tr(_i);
function rs(e) {
  return !!e || e === "";
}
function On(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = me(r) ? wi(r) : On(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else {
    if (me(e)) return e;
    if (ge(e)) return e;
  }
}
const bi = /;(?![^(]*\))/g,
  yi = /:(.+)/;
function wi(e) {
  const t = {};
  return (
    e.split(bi).forEach((n) => {
      if (n) {
        const r = n.split(yi);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }),
    t
  );
}
function sn(e) {
  let t = "";
  if (me(e)) t = e;
  else if (D(e))
    for (let n = 0; n < e.length; n++) {
      const r = sn(e[n]);
      r && (t += r + " ");
    }
  else if (ge(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Xd = (e) =>
    me(e)
      ? e
      : e == null
      ? ""
      : D(e) || (ge(e) && (e.toString === ls || !j(e.toString)))
      ? JSON.stringify(e, os, 2)
      : String(e),
  os = (e, t) =>
    t && t.__v_isRef
      ? os(e, t.value)
      : Ot(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o]) => ((n[`${r} =>`] = o), n),
            {}
          ),
        }
      : ss(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ge(t) && !D(t) && !cs(t)
      ? String(t)
      : t,
  ie = {},
  It = [],
  De = () => {},
  xi = () => !1,
  Ci = /^on[^a-z]/,
  Ln = (e) => Ci.test(e),
  Rr = (e) => e.startsWith("onUpdate:"),
  we = Object.assign,
  Sr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ei = Object.prototype.hasOwnProperty,
  Q = (e, t) => Ei.call(e, t),
  D = Array.isArray,
  Ot = (e) => zn(e) === "[object Map]",
  ss = (e) => zn(e) === "[object Set]",
  j = (e) => typeof e == "function",
  me = (e) => typeof e == "string",
  $r = (e) => typeof e == "symbol",
  ge = (e) => e !== null && typeof e == "object",
  is = (e) => ge(e) && j(e.then) && j(e.catch),
  ls = Object.prototype.toString,
  zn = (e) => ls.call(e),
  Ai = (e) => zn(e).slice(8, -1),
  cs = (e) => zn(e) === "[object Object]",
  Ir = (e) =>
    me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  xn = Tr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Nn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Mi = /-(\w)/g,
  Ze = Nn((e) => e.replace(Mi, (t, n) => (n ? n.toUpperCase() : ""))),
  ki = /\B([A-Z])/g,
  Bt = Nn((e) => e.replace(ki, "-$1").toLowerCase()),
  Fn = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Cn = Nn((e) => (e ? `on${Fn(e)}` : "")),
  ln = (e, t) => !Object.is(e, t),
  Jn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  kn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  as = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let so;
const Pi = () =>
  so ||
  (so =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let Ke;
class Ti {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Ke &&
        ((this.parent = Ke),
        (this.index = (Ke.scopes || (Ke.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const n = Ke;
      try {
        return (Ke = this), t();
      } finally {
        Ke = n;
      }
    }
  }
  on() {
    Ke = this;
  }
  off() {
    Ke = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      this.active = !1;
    }
  }
}
function Ri(e, t = Ke) {
  t && t.active && t.effects.push(e);
}
const Or = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  us = (e) => (e.w & ht) > 0,
  fs = (e) => (e.n & ht) > 0,
  Si = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ht;
  },
  $i = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        us(o) && !fs(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~ht),
          (o.n &= ~ht);
      }
      t.length = n;
    }
  },
  sr = new WeakMap();
let Qt = 0,
  ht = 1;
const ir = 30;
let Fe;
const Ct = Symbol(""),
  lr = Symbol("");
class Lr {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Ri(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Fe,
      n = ut;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Fe),
        (Fe = this),
        (ut = !0),
        (ht = 1 << ++Qt),
        Qt <= ir ? Si(this) : io(this),
        this.fn()
      );
    } finally {
      Qt <= ir && $i(this),
        (ht = 1 << --Qt),
        (Fe = this.parent),
        (ut = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Fe === this
      ? (this.deferStop = !0)
      : this.active &&
        (io(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function io(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let ut = !0;
const ds = [];
function Dt() {
  ds.push(ut), (ut = !1);
}
function Ut() {
  const e = ds.pop();
  ut = e === void 0 ? !0 : e;
}
function Se(e, t, n) {
  if (ut && Fe) {
    let r = sr.get(e);
    r || sr.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = Or())), hs(o);
  }
}
function hs(e, t) {
  let n = !1;
  Qt <= ir ? fs(e) || ((e.n |= ht), (n = !us(e))) : (n = !e.has(Fe)),
    n && (e.add(Fe), Fe.deps.push(e));
}
function Ge(e, t, n, r, o, s) {
  const i = sr.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && D(e))
    i.forEach((c, u) => {
      (u === "length" || u >= r) && l.push(c);
    });
  else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        D(e)
          ? Ir(n) && l.push(i.get("length"))
          : (l.push(i.get(Ct)), Ot(e) && l.push(i.get(lr)));
        break;
      case "delete":
        D(e) || (l.push(i.get(Ct)), Ot(e) && l.push(i.get(lr)));
        break;
      case "set":
        Ot(e) && l.push(i.get(Ct));
        break;
    }
  if (l.length === 1) l[0] && cr(l[0]);
  else {
    const c = [];
    for (const u of l) u && c.push(...u);
    cr(Or(c));
  }
}
function cr(e, t) {
  const n = D(e) ? e : [...e];
  for (const r of n) r.computed && lo(r);
  for (const r of n) r.computed || lo(r);
}
function lo(e, t) {
  (e !== Fe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Ii = Tr("__proto__,__v_isRef,__isVue"),
  ps = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter($r)
  ),
  Oi = zr(),
  Li = zr(!1, !0),
  zi = zr(!0),
  co = Ni();
function Ni() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = X(this);
        for (let s = 0, i = this.length; s < i; s++) Se(r, "get", s + "");
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(X)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Dt();
        const r = X(this)[t].apply(this, n);
        return Ut(), r;
      };
    }),
    e
  );
}
function zr(e = !1, t = !1) {
  return function (r, o, s) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && s === (e ? (t ? Gi : bs) : t ? vs : _s).get(r))
      return r;
    const i = D(r);
    if (!e && i && Q(co, o)) return Reflect.get(co, o, s);
    const l = Reflect.get(r, o, s);
    return ($r(o) ? ps.has(o) : Ii(o)) || (e || Se(r, "get", o), t)
      ? l
      : ye(l)
      ? i && Ir(o)
        ? l
        : l.value
      : ge(l)
      ? e
        ? Hr(l)
        : pn(l)
      : l;
  };
}
const Fi = gs(),
  Hi = gs(!0);
function gs(e = !1) {
  return function (n, r, o, s) {
    let i = n[r];
    if (cn(i) && ye(i) && !ye(o)) return !1;
    if (
      !e &&
      !cn(o) &&
      (ar(o) || ((o = X(o)), (i = X(i))), !D(n) && ye(i) && !ye(o))
    )
      return (i.value = o), !0;
    const l = D(n) && Ir(r) ? Number(r) < n.length : Q(n, r),
      c = Reflect.set(n, r, o, s);
    return (
      n === X(s) && (l ? ln(o, i) && Ge(n, "set", r, o) : Ge(n, "add", r, o)), c
    );
  };
}
function Bi(e, t) {
  const n = Q(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Ge(e, "delete", t, void 0), r;
}
function Di(e, t) {
  const n = Reflect.has(e, t);
  return (!$r(t) || !ps.has(t)) && Se(e, "has", t), n;
}
function Ui(e) {
  return Se(e, "iterate", D(e) ? "length" : Ct), Reflect.ownKeys(e);
}
const ms = { get: Oi, set: Fi, deleteProperty: Bi, has: Di, ownKeys: Ui },
  Vi = {
    get: zi,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  ji = we({}, ms, { get: Li, set: Hi }),
  Nr = (e) => e,
  Hn = (e) => Reflect.getPrototypeOf(e);
function gn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = X(e),
    s = X(t);
  n || (t !== s && Se(o, "get", t), Se(o, "get", s));
  const { has: i } = Hn(o),
    l = r ? Nr : n ? Dr : an;
  if (i.call(o, t)) return l(e.get(t));
  if (i.call(o, s)) return l(e.get(s));
  e !== o && e.get(t);
}
function mn(e, t = !1) {
  const n = this.__v_raw,
    r = X(n),
    o = X(e);
  return (
    t || (e !== o && Se(r, "has", e), Se(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function _n(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Se(X(e), "iterate", Ct), Reflect.get(e, "size", e)
  );
}
function ao(e) {
  e = X(e);
  const t = X(this);
  return Hn(t).has.call(t, e) || (t.add(e), Ge(t, "add", e, e)), this;
}
function uo(e, t) {
  t = X(t);
  const n = X(this),
    { has: r, get: o } = Hn(n);
  let s = r.call(n, e);
  s || ((e = X(e)), (s = r.call(n, e)));
  const i = o.call(n, e);
  return (
    n.set(e, t), s ? ln(t, i) && Ge(n, "set", e, t) : Ge(n, "add", e, t), this
  );
}
function fo(e) {
  const t = X(this),
    { has: n, get: r } = Hn(t);
  let o = n.call(t, e);
  o || ((e = X(e)), (o = n.call(t, e))), r && r.call(t, e);
  const s = t.delete(e);
  return o && Ge(t, "delete", e, void 0), s;
}
function ho() {
  const e = X(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ge(e, "clear", void 0, void 0), n;
}
function vn(e, t) {
  return function (r, o) {
    const s = this,
      i = s.__v_raw,
      l = X(i),
      c = t ? Nr : e ? Dr : an;
    return (
      !e && Se(l, "iterate", Ct), i.forEach((u, f) => r.call(o, c(u), c(f), s))
    );
  };
}
function bn(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = X(o),
      i = Ot(s),
      l = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      u = o[e](...r),
      f = n ? Nr : t ? Dr : an;
    return (
      !t && Se(s, "iterate", c ? lr : Ct),
      {
        next() {
          const { value: p, done: h } = u.next();
          return h
            ? { value: p, done: h }
            : { value: l ? [f(p[0]), f(p[1])] : f(p), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function nt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Ki() {
  const e = {
      get(s) {
        return gn(this, s);
      },
      get size() {
        return _n(this);
      },
      has: mn,
      add: ao,
      set: uo,
      delete: fo,
      clear: ho,
      forEach: vn(!1, !1),
    },
    t = {
      get(s) {
        return gn(this, s, !1, !0);
      },
      get size() {
        return _n(this);
      },
      has: mn,
      add: ao,
      set: uo,
      delete: fo,
      clear: ho,
      forEach: vn(!1, !0),
    },
    n = {
      get(s) {
        return gn(this, s, !0);
      },
      get size() {
        return _n(this, !0);
      },
      has(s) {
        return mn.call(this, s, !0);
      },
      add: nt("add"),
      set: nt("set"),
      delete: nt("delete"),
      clear: nt("clear"),
      forEach: vn(!0, !1),
    },
    r = {
      get(s) {
        return gn(this, s, !0, !0);
      },
      get size() {
        return _n(this, !0);
      },
      has(s) {
        return mn.call(this, s, !0);
      },
      add: nt("add"),
      set: nt("set"),
      delete: nt("delete"),
      clear: nt("clear"),
      forEach: vn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (e[s] = bn(s, !1, !1)),
        (n[s] = bn(s, !0, !1)),
        (t[s] = bn(s, !1, !0)),
        (r[s] = bn(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [qi, Wi, Zi, Yi] = Ki();
function Fr(e, t) {
  const n = t ? (e ? Yi : Zi) : e ? Wi : qi;
  return (r, o, s) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? r
      : Reflect.get(Q(n, o) && o in r ? n : r, o, s);
}
const Qi = { get: Fr(!1, !1) },
  Ji = { get: Fr(!1, !0) },
  Xi = { get: Fr(!0, !1) },
  _s = new WeakMap(),
  vs = new WeakMap(),
  bs = new WeakMap(),
  Gi = new WeakMap();
function el(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function tl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : el(Ai(e));
}
function pn(e) {
  return cn(e) ? e : Br(e, !1, ms, Qi, _s);
}
function nl(e) {
  return Br(e, !1, ji, Ji, vs);
}
function Hr(e) {
  return Br(e, !0, Vi, Xi, bs);
}
function Br(e, t, n, r, o) {
  if (!ge(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = o.get(e);
  if (s) return s;
  const i = tl(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return o.set(e, l), l;
}
function Lt(e) {
  return cn(e) ? Lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function cn(e) {
  return !!(e && e.__v_isReadonly);
}
function ar(e) {
  return !!(e && e.__v_isShallow);
}
function ys(e) {
  return Lt(e) || cn(e);
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function ws(e) {
  return kn(e, "__v_skip", !0), e;
}
const an = (e) => (ge(e) ? pn(e) : e),
  Dr = (e) => (ge(e) ? Hr(e) : e);
function xs(e) {
  ut && Fe && ((e = X(e)), hs(e.dep || (e.dep = Or())));
}
function Cs(e, t) {
  (e = X(e)), e.dep && cr(e.dep);
}
function ye(e) {
  return !!(e && e.__v_isRef === !0);
}
function Et(e) {
  return Es(e, !1);
}
function rl(e) {
  return Es(e, !0);
}
function Es(e, t) {
  return ye(e) ? e : new ol(e, t);
}
class ol {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : X(t)),
      (this._value = n ? t : an(t));
  }
  get value() {
    return xs(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : X(t)),
      ln(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : an(t)),
        Cs(this));
  }
}
function ft(e) {
  return ye(e) ? e.value : e;
}
const sl = {
  get: (e, t, n) => ft(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ye(o) && !ye(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function As(e) {
  return Lt(e) ? e : new Proxy(e, sl);
}
function il(e) {
  const t = D(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = cl(e, n);
  return t;
}
class ll {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function cl(e, t, n) {
  const r = e[t];
  return ye(r) ? r : new ll(e, t, n);
}
class al {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new Lr(t, () => {
        this._dirty || ((this._dirty = !0), Cs(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = X(this);
    return (
      xs(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function ul(e, t, n = !1) {
  let r, o;
  const s = j(e);
  return (
    s ? ((r = e), (o = De)) : ((r = e.get), (o = e.set)),
    new al(r, o, s || !o, n)
  );
}
function dt(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    Bn(s, t, n);
  }
  return o;
}
function Le(e, t, n, r) {
  if (j(e)) {
    const s = dt(e, t, n, r);
    return (
      s &&
        is(s) &&
        s.catch((i) => {
          Bn(i, t, n);
        }),
      s
    );
  }
  const o = [];
  for (let s = 0; s < e.length; s++) o.push(Le(e[s], t, n, r));
  return o;
}
function Bn(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy,
      l = n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, i, l) === !1) return;
      }
      s = s.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      dt(c, null, 10, [e, i, l]);
      return;
    }
  }
  fl(e, n, o, r);
}
function fl(e, t, n, r = !0) {
  console.error(e);
}
let Pn = !1,
  ur = !1;
const Re = [];
let Xe = 0;
const Xt = [];
let Jt = null,
  Rt = 0;
const Gt = [];
let lt = null,
  St = 0;
const Ms = Promise.resolve();
let Ur = null,
  fr = null;
function Dn(e) {
  const t = Ur || Ms;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dl(e) {
  let t = Xe + 1,
    n = Re.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    un(Re[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function ks(e) {
  (!Re.length || !Re.includes(e, Pn && e.allowRecurse ? Xe + 1 : Xe)) &&
    e !== fr &&
    (e.id == null ? Re.push(e) : Re.splice(dl(e.id), 0, e), Ps());
}
function Ps() {
  !Pn && !ur && ((ur = !0), (Ur = Ms.then(Ss)));
}
function hl(e) {
  const t = Re.indexOf(e);
  t > Xe && Re.splice(t, 1);
}
function Ts(e, t, n, r) {
  D(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e),
    Ps();
}
function pl(e) {
  Ts(e, Jt, Xt, Rt);
}
function gl(e) {
  Ts(e, lt, Gt, St);
}
function Un(e, t = null) {
  if (Xt.length) {
    for (
      fr = t, Jt = [...new Set(Xt)], Xt.length = 0, Rt = 0;
      Rt < Jt.length;
      Rt++
    )
      Jt[Rt]();
    (Jt = null), (Rt = 0), (fr = null), Un(e, t);
  }
}
function Rs(e) {
  if ((Un(), Gt.length)) {
    const t = [...new Set(Gt)];
    if (((Gt.length = 0), lt)) {
      lt.push(...t);
      return;
    }
    for (lt = t, lt.sort((n, r) => un(n) - un(r)), St = 0; St < lt.length; St++)
      lt[St]();
    (lt = null), (St = 0);
  }
}
const un = (e) => (e.id == null ? 1 / 0 : e.id);
function Ss(e) {
  (ur = !1), (Pn = !0), Un(e), Re.sort((n, r) => un(n) - un(r));
  const t = De;
  try {
    for (Xe = 0; Xe < Re.length; Xe++) {
      const n = Re[Xe];
      n && n.active !== !1 && dt(n, null, 14);
    }
  } finally {
    (Xe = 0),
      (Re.length = 0),
      Rs(),
      (Pn = !1),
      (Ur = null),
      (Re.length || Xt.length || Gt.length) && Ss(e);
  }
}
function ml(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ie;
  let o = n;
  const s = t.startsWith("update:"),
    i = s && t.slice(7);
  if (i && i in r) {
    const f = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: h } = r[f] || ie;
    h && (o = n.map((m) => m.trim())), p && (o = n.map(as));
  }
  let l,
    c = r[(l = Cn(t))] || r[(l = Cn(Ze(t)))];
  !c && s && (c = r[(l = Cn(Bt(t)))]), c && Le(c, e, 6, o);
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Le(u, e, 6, o);
  }
}
function $s(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    l = !1;
  if (!j(e)) {
    const c = (u) => {
      const f = $s(u, t, !0);
      f && ((l = !0), we(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !s && !l
    ? (r.set(e, null), null)
    : (D(s) ? s.forEach((c) => (i[c] = null)) : we(i, s), r.set(e, i), i);
}
function Vn(e, t) {
  return !e || !Ln(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, Bt(t)) || Q(e, t));
}
let Ce = null,
  jn = null;
function Tn(e) {
  const t = Ce;
  return (Ce = e), (jn = (e && e.type.__scopeId) || null), t;
}
function _l(e) {
  jn = e;
}
function vl() {
  jn = null;
}
function H(e, t = Ce, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && Ao(-1);
    const s = Tn(t),
      i = e(...o);
    return Tn(s), r._d && Ao(1), i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Xn(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: u,
    render: f,
    renderCache: p,
    data: h,
    setupState: m,
    ctx: C,
    inheritAttrs: $,
  } = e;
  let P, k;
  const B = Tn(e);
  try {
    if (n.shapeFlag & 4) {
      const W = o || r;
      (P = qe(f.call(W, W, p, s, m, h, C))), (k = c);
    } else {
      const W = t;
      (P = qe(
        W.length > 1 ? W(s, { attrs: c, slots: l, emit: u }) : W(s, null)
      )),
        (k = t.props ? c : bl(c));
    }
  } catch (W) {
    (nn.length = 0), Bn(W, e, 1), (P = T(ze));
  }
  let q = P;
  if (k && $ !== !1) {
    const W = Object.keys(k),
      { shapeFlag: ee } = q;
    W.length && ee & 7 && (i && W.some(Rr) && (k = yl(k, i)), (q = pt(q, k)));
  }
  return (
    n.dirs && ((q = pt(q)), (q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (q.transition = n.transition),
    (P = q),
    Tn(B),
    P
  );
}
const bl = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Ln(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  yl = (e, t) => {
    const n = {};
    for (const r in e) (!Rr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function wl(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: l, patchFlag: c } = t,
    u = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? po(r, i, u) : !!i;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const h = f[p];
        if (i[h] !== r[h] && !Vn(u, h)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? po(r, i, u)
        : !0
      : !!i;
  return !1;
}
function po(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !Vn(n, s)) return !0;
  }
  return !1;
}
function xl({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Cl = (e) => e.__isSuspense;
function El(e, t) {
  t && t.pendingBranch
    ? D(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : gl(e);
}
function En(e, t) {
  if (be) {
    let n = be.provides;
    const r = be.parent && be.parent.provides;
    r === n && (n = be.provides = Object.create(r)), (n[e] = t);
  }
}
function We(e, t, n = !1) {
  const r = be || Ce;
  if (r) {
    const o =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && j(t) ? t.call(r.proxy) : t;
  }
}
function Al(e, t) {
  return Vr(e, null, { flush: "post" });
}
const go = {};
function At(e, t, n) {
  return Vr(e, t, n);
}
function Vr(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = ie
) {
  const l = be;
  let c,
    u = !1,
    f = !1;
  if (
    (ye(e)
      ? ((c = () => e.value), (u = ar(e)))
      : Lt(e)
      ? ((c = () => e), (r = !0))
      : D(e)
      ? ((f = !0),
        (u = e.some((k) => Lt(k) || ar(k))),
        (c = () =>
          e.map((k) => {
            if (ye(k)) return k.value;
            if (Lt(k)) return xt(k);
            if (j(k)) return dt(k, l, 2);
          })))
      : j(e)
      ? t
        ? (c = () => dt(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return p && p(), Le(e, l, 3, [h]);
          })
      : (c = De),
    t && r)
  ) {
    const k = c;
    c = () => xt(k());
  }
  let p,
    h = (k) => {
      p = P.onStop = () => {
        dt(k, l, 4);
      };
    };
  if (dn)
    return (h = De), t ? n && Le(t, l, 3, [c(), f ? [] : void 0, h]) : c(), De;
  let m = f ? [] : go;
  const C = () => {
    if (P.active)
      if (t) {
        const k = P.run();
        (r || u || (f ? k.some((B, q) => ln(B, m[q])) : ln(k, m))) &&
          (p && p(), Le(t, l, 3, [k, m === go ? void 0 : m, h]), (m = k));
      } else P.run();
  };
  C.allowRecurse = !!t;
  let $;
  o === "sync"
    ? ($ = C)
    : o === "post"
    ? ($ = () => ke(C, l && l.suspense))
    : ($ = () => pl(C));
  const P = new Lr(c, $);
  return (
    t
      ? n
        ? C()
        : (m = P.run())
      : o === "post"
      ? ke(P.run.bind(P), l && l.suspense)
      : P.run(),
    () => {
      P.stop(), l && l.scope && Sr(l.scope.effects, P);
    }
  );
}
function Ml(e, t, n) {
  const r = this.proxy,
    o = me(e) ? (e.includes(".") ? Is(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  j(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = be;
  Nt(this);
  const l = Vr(o, s.bind(r), n);
  return i ? Nt(i) : Mt(), l;
}
function Is(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function xt(e, t) {
  if (!ge(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), ye(e))) xt(e.value, t);
  else if (D(e)) for (let n = 0; n < e.length; n++) xt(e[n], t);
  else if (ss(e) || Ot(e))
    e.forEach((n) => {
      xt(n, t);
    });
  else if (cs(e)) for (const n in e) xt(e[n], t);
  return e;
}
function kl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Vt(() => {
      e.isMounted = !0;
    }),
    Fs(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Oe = [Function, Array],
  Pl = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Oe,
      onEnter: Oe,
      onAfterEnter: Oe,
      onEnterCancelled: Oe,
      onBeforeLeave: Oe,
      onLeave: Oe,
      onAfterLeave: Oe,
      onLeaveCancelled: Oe,
      onBeforeAppear: Oe,
      onAppear: Oe,
      onAfterAppear: Oe,
      onAppearCancelled: Oe,
    },
    setup(e, { slots: t }) {
      const n = Js(),
        r = kl();
      let o;
      return () => {
        const s = t.default && zs(t.default(), !0);
        if (!s || !s.length) return;
        let i = s[0];
        if (s.length > 1) {
          for (const $ of s)
            if ($.type !== ze) {
              i = $;
              break;
            }
        }
        const l = X(e),
          { mode: c } = l;
        if (r.isLeaving) return Gn(i);
        const u = mo(i);
        if (!u) return Gn(i);
        const f = dr(u, l, r, n);
        hr(u, f);
        const p = n.subTree,
          h = p && mo(p);
        let m = !1;
        const { getTransitionKey: C } = u.type;
        if (C) {
          const $ = C();
          o === void 0 ? (o = $) : $ !== o && ((o = $), (m = !0));
        }
        if (h && h.type !== ze && (!yt(u, h) || m)) {
          const $ = dr(h, l, r, n);
          if ((hr(h, $), c === "out-in"))
            return (
              (r.isLeaving = !0),
              ($.afterLeave = () => {
                (r.isLeaving = !1), n.update();
              }),
              Gn(i)
            );
          c === "in-out" &&
            u.type !== ze &&
            ($.delayLeave = (P, k, B) => {
              const q = Ls(r, h);
              (q[String(h.key)] = h),
                (P._leaveCb = () => {
                  k(), (P._leaveCb = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = B);
            });
        }
        return i;
      };
    },
  },
  Os = Pl;
function Ls(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function dr(e, t, n, r) {
  const {
      appear: o,
      mode: s,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: f,
      onBeforeLeave: p,
      onLeave: h,
      onAfterLeave: m,
      onLeaveCancelled: C,
      onBeforeAppear: $,
      onAppear: P,
      onAfterAppear: k,
      onAppearCancelled: B,
    } = t,
    q = String(e.key),
    W = Ls(n, e),
    ee = (U, Y) => {
      U && Le(U, r, 9, Y);
    },
    ae = (U, Y) => {
      const G = Y[1];
      ee(U, Y),
        D(U) ? U.every((ue) => ue.length <= 1) && G() : U.length <= 1 && G();
    },
    he = {
      mode: s,
      persisted: i,
      beforeEnter(U) {
        let Y = l;
        if (!n.isMounted)
          if (o) Y = $ || l;
          else return;
        U._leaveCb && U._leaveCb(!0);
        const G = W[q];
        G && yt(e, G) && G.el._leaveCb && G.el._leaveCb(), ee(Y, [U]);
      },
      enter(U) {
        let Y = c,
          G = u,
          ue = f;
        if (!n.isMounted)
          if (o) (Y = P || c), (G = k || u), (ue = B || f);
          else return;
        let S = !1;
        const fe = (U._enterCb = (xe) => {
          S ||
            ((S = !0),
            xe ? ee(ue, [U]) : ee(G, [U]),
            he.delayedLeave && he.delayedLeave(),
            (U._enterCb = void 0));
        });
        Y ? ae(Y, [U, fe]) : fe();
      },
      leave(U, Y) {
        const G = String(e.key);
        if ((U._enterCb && U._enterCb(!0), n.isUnmounting)) return Y();
        ee(p, [U]);
        let ue = !1;
        const S = (U._leaveCb = (fe) => {
          ue ||
            ((ue = !0),
            Y(),
            fe ? ee(C, [U]) : ee(m, [U]),
            (U._leaveCb = void 0),
            W[G] === e && delete W[G]);
        });
        (W[G] = e), h ? ae(h, [U, S]) : S();
      },
      clone(U) {
        return dr(U, t, n, r);
      },
    };
  return he;
}
function Gn(e) {
  if (Kn(e)) return (e = pt(e)), (e.children = null), e;
}
function mo(e) {
  return Kn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function hr(e, t) {
  e.shapeFlag & 6 && e.component
    ? hr(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function zs(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Me
      ? (i.patchFlag & 128 && o++, (r = r.concat(zs(i.children, t, l))))
      : (t || i.type !== ze) && r.push(l != null ? pt(i, { key: l }) : i);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function et(e) {
  return j(e) ? { setup: e, name: e.name } : e;
}
const en = (e) => !!e.type.__asyncLoader,
  Kn = (e) => e.type.__isKeepAlive;
function Tl(e, t) {
  Ns(e, "a", t);
}
function Rl(e, t) {
  Ns(e, "da", t);
}
function Ns(e, t, n = be) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((qn(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      Kn(o.parent.vnode) && Sl(r, t, n, o), (o = o.parent);
  }
}
function Sl(e, t, n, r) {
  const o = qn(t, e, r, !0);
  jt(() => {
    Sr(r[t], o);
  }, n);
}
function qn(e, t, n = be, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Dt(), Nt(n);
          const l = Le(t, n, e, i);
          return Mt(), Ut(), l;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const tt =
    (e) =>
    (t, n = be) =>
      (!dn || e === "sp") && qn(e, t, n),
  $l = tt("bm"),
  Vt = tt("m"),
  Il = tt("bu"),
  Ol = tt("u"),
  Fs = tt("bum"),
  jt = tt("um"),
  Ll = tt("sp"),
  zl = tt("rtg"),
  Nl = tt("rtc");
function Fl(e, t = be) {
  qn("ec", e, t);
}
function Hl(e, t) {
  const n = Ce;
  if (n === null) return e;
  const r = Zn(n) || n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, c, u = ie] = t[s];
    j(i) && (i = { mounted: i, updated: i }),
      i.deep && xt(l),
      o.push({
        dir: i,
        instance: r,
        value: l,
        oldValue: void 0,
        arg: c,
        modifiers: u,
      });
  }
  return e;
}
function gt(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    const c = l.dir[r];
    c && (Dt(), Le(c, n, 8, [e.el, l, e, t]), Ut());
  }
}
const Hs = "components";
function Bl(e, t) {
  return Ul(Hs, e, !0, t) || e;
}
const Dl = Symbol();
function Ul(e, t, n = !0, r = !1) {
  const o = Ce || be;
  if (o) {
    const s = o.type;
    if (e === Hs) {
      const l = wc(s, !1);
      if (l && (l === t || l === Ze(t) || l === Fn(Ze(t)))) return s;
    }
    const i = _o(o[e] || s[e], t) || _o(o.appContext[e], t);
    return !i && r ? s : i;
  }
}
function _o(e, t) {
  return e && (e[t] || e[Ze(t)] || e[Fn(Ze(t))]);
}
function Gd(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (D(e) || me(e)) {
    o = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (ge(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const u = i[l];
        o[l] = t(e[u], u, l, s && s[l]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
function zt(e, t, n = {}, r, o) {
  if (Ce.isCE || (Ce.parent && en(Ce.parent) && Ce.parent.isCE))
    return T("slot", t === "default" ? null : { name: t }, r && r());
  const s = e[t];
  s && s._c && (s._d = !1), _e();
  const i = s && Bs(s(n)),
    l = Wr(
      Me,
      { key: n.key || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    l
  );
}
function Bs(e) {
  return e.some((t) =>
    $n(t) ? !(t.type === ze || (t.type === Me && !Bs(t.children))) : !0
  )
    ? e
    : null;
}
function Vl(e) {
  const t = {};
  for (const n in e) t[Cn(n)] = e[n];
  return t;
}
const pr = (e) => (e ? (Xs(e) ? Zn(e) || e.proxy : pr(e.parent)) : null),
  Rn = we(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pr(e.parent),
    $root: (e) => pr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Us(e),
    $forceUpdate: (e) => e.f || (e.f = () => ks(e.update)),
    $nextTick: (e) => e.n || (e.n = Dn.bind(e.proxy)),
    $watch: (e) => Ml.bind(e),
  }),
  jl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: l,
        appContext: c,
      } = e;
      let u;
      if (t[0] !== "$") {
        const m = i[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (r !== ie && Q(r, t)) return (i[t] = 1), r[t];
          if (o !== ie && Q(o, t)) return (i[t] = 2), o[t];
          if ((u = e.propsOptions[0]) && Q(u, t)) return (i[t] = 3), s[t];
          if (n !== ie && Q(n, t)) return (i[t] = 4), n[t];
          gr && (i[t] = 0);
        }
      }
      const f = Rn[t];
      let p, h;
      if (f) return t === "$attrs" && Se(e, "get", t), f(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== ie && Q(n, t)) return (i[t] = 4), n[t];
      if (((h = c.config.globalProperties), Q(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return o !== ie && Q(o, t)
        ? ((o[t] = n), !0)
        : r !== ie && Q(r, t)
        ? ((r[t] = n), !0)
        : Q(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((s[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: s,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== ie && Q(e, i)) ||
        (t !== ie && Q(t, i)) ||
        ((l = s[0]) && Q(l, i)) ||
        Q(r, i) ||
        Q(Rn, i) ||
        Q(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Q(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let gr = !0;
function Kl(e) {
  const t = Us(e),
    n = e.proxy,
    r = e.ctx;
  (gr = !1), t.beforeCreate && vo(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: c,
    inject: u,
    created: f,
    beforeMount: p,
    mounted: h,
    beforeUpdate: m,
    updated: C,
    activated: $,
    deactivated: P,
    beforeDestroy: k,
    beforeUnmount: B,
    destroyed: q,
    unmounted: W,
    render: ee,
    renderTracked: ae,
    renderTriggered: he,
    errorCaptured: U,
    serverPrefetch: Y,
    expose: G,
    inheritAttrs: ue,
    components: S,
    directives: fe,
    filters: xe,
  } = t;
  if ((u && ql(u, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const le in i) {
      const te = i[le];
      j(te) && (r[le] = te.bind(n));
    }
  if (o) {
    const le = o.call(n, n);
    ge(le) && (e.data = pn(le));
  }
  if (((gr = !0), s))
    for (const le in s) {
      const te = s[le],
        Pe = j(te) ? te.bind(n, n) : j(te.get) ? te.get.bind(n, n) : De,
        kt = !j(te) && j(te.set) ? te.set.bind(n) : De,
        Qe = He({ get: Pe, set: kt });
      Object.defineProperty(r, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (Ue) => (Qe.value = Ue),
      });
    }
  if (l) for (const le in l) Ds(l[le], r, n, le);
  if (c) {
    const le = j(c) ? c.call(n) : c;
    Reflect.ownKeys(le).forEach((te) => {
      En(te, le[te]);
    });
  }
  f && vo(f, e, "c");
  function pe(le, te) {
    D(te) ? te.forEach((Pe) => le(Pe.bind(n))) : te && le(te.bind(n));
  }
  if (
    (pe($l, p),
    pe(Vt, h),
    pe(Il, m),
    pe(Ol, C),
    pe(Tl, $),
    pe(Rl, P),
    pe(Fl, U),
    pe(Nl, ae),
    pe(zl, he),
    pe(Fs, B),
    pe(jt, W),
    pe(Ll, Y),
    D(G))
  )
    if (G.length) {
      const le = e.exposed || (e.exposed = {});
      G.forEach((te) => {
        Object.defineProperty(le, te, {
          get: () => n[te],
          set: (Pe) => (n[te] = Pe),
        });
      });
    } else e.exposed || (e.exposed = {});
  ee && e.render === De && (e.render = ee),
    ue != null && (e.inheritAttrs = ue),
    S && (e.components = S),
    fe && (e.directives = fe);
}
function ql(e, t, n = De, r = !1) {
  D(e) && (e = mr(e));
  for (const o in e) {
    const s = e[o];
    let i;
    ge(s)
      ? "default" in s
        ? (i = We(s.from || o, s.default, !0))
        : (i = We(s.from || o))
      : (i = We(s)),
      ye(i) && r
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[o] = i);
  }
}
function vo(e, t, n) {
  Le(D(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ds(e, t, n, r) {
  const o = r.includes(".") ? Is(n, r) : () => n[r];
  if (me(e)) {
    const s = t[e];
    j(s) && At(o, s);
  } else if (j(e)) At(o, e.bind(n));
  else if (ge(e))
    if (D(e)) e.forEach((s) => Ds(s, t, n, r));
    else {
      const s = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(s) && At(o, s, e);
    }
}
function Us(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = s.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !o.length && !n && !r
      ? (c = t)
      : ((c = {}), o.length && o.forEach((u) => Sn(c, u, i, !0)), Sn(c, t, i)),
    s.set(t, c),
    c
  );
}
function Sn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Sn(e, s, n, !0), o && o.forEach((i) => Sn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = Wl[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Wl = {
  data: bo,
  props: bt,
  emits: bt,
  methods: bt,
  computed: bt,
  beforeCreate: Ae,
  created: Ae,
  beforeMount: Ae,
  mounted: Ae,
  beforeUpdate: Ae,
  updated: Ae,
  beforeDestroy: Ae,
  beforeUnmount: Ae,
  destroyed: Ae,
  unmounted: Ae,
  activated: Ae,
  deactivated: Ae,
  errorCaptured: Ae,
  serverPrefetch: Ae,
  components: bt,
  directives: bt,
  watch: Yl,
  provide: bo,
  inject: Zl,
};
function bo(e, t) {
  return t
    ? e
      ? function () {
          return we(
            j(e) ? e.call(this, this) : e,
            j(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Zl(e, t) {
  return bt(mr(e), mr(t));
}
function mr(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function bt(e, t) {
  return e ? we(we(Object.create(null), e), t) : t;
}
function Yl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = we(Object.create(null), e);
  for (const r in t) n[r] = Ae(e[r], t[r]);
  return n;
}
function Ql(e, t, n, r = !1) {
  const o = {},
    s = {};
  kn(s, Wn, 1), (e.propsDefaults = Object.create(null)), Vs(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = r ? o : nl(o)) : e.type.props ? (e.props = o) : (e.props = s),
    (e.attrs = s);
}
function Jl(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    l = X(o),
    [c] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const h = f[p];
        if (Vn(e.emitsOptions, h)) continue;
        const m = t[h];
        if (c)
          if (Q(s, h)) m !== s[h] && ((s[h] = m), (u = !0));
          else {
            const C = Ze(h);
            o[C] = _r(c, l, C, m, e, !1);
          }
        else m !== s[h] && ((s[h] = m), (u = !0));
      }
    }
  } else {
    Vs(e, t, o, s) && (u = !0);
    let f;
    for (const p in l)
      (!t || (!Q(t, p) && ((f = Bt(p)) === p || !Q(t, f)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[f] !== void 0) &&
            (o[p] = _r(c, l, p, void 0, e, !0))
          : delete o[p]);
    if (s !== l)
      for (const p in s) (!t || (!Q(t, p) && !0)) && (delete s[p], (u = !0));
  }
  u && Ge(e, "set", "$attrs");
}
function Vs(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (const c in t) {
      if (xn(c)) continue;
      const u = t[c];
      let f;
      o && Q(o, (f = Ze(c)))
        ? !s || !s.includes(f)
          ? (n[f] = u)
          : ((l || (l = {}))[f] = u)
        : Vn(e.emitsOptions, c) ||
          ((!(c in r) || u !== r[c]) && ((r[c] = u), (i = !0)));
    }
  if (s) {
    const c = X(n),
      u = l || ie;
    for (let f = 0; f < s.length; f++) {
      const p = s[f];
      n[p] = _r(o, c, p, u[p], e, !Q(u, p));
    }
  }
  return i;
}
function _r(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = Q(i, "default");
    if (l && r === void 0) {
      const c = i.default;
      if (i.type !== Function && j(c)) {
        const { propsDefaults: u } = o;
        n in u ? (r = u[n]) : (Nt(o), (r = u[n] = c.call(null, t)), Mt());
      } else r = c;
    }
    i[0] &&
      (s && !l ? (r = !1) : i[1] && (r === "" || r === Bt(n)) && (r = !0));
  }
  return r;
}
function js(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    l = [];
  let c = !1;
  if (!j(e)) {
    const f = (p) => {
      c = !0;
      const [h, m] = js(p, t, !0);
      we(i, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!s && !c) return r.set(e, It), It;
  if (D(s))
    for (let f = 0; f < s.length; f++) {
      const p = Ze(s[f]);
      yo(p) && (i[p] = ie);
    }
  else if (s)
    for (const f in s) {
      const p = Ze(f);
      if (yo(p)) {
        const h = s[f],
          m = (i[p] = D(h) || j(h) ? { type: h } : h);
        if (m) {
          const C = Co(Boolean, m.type),
            $ = Co(String, m.type);
          (m[0] = C > -1),
            (m[1] = $ < 0 || C < $),
            (C > -1 || Q(m, "default")) && l.push(p);
        }
      }
    }
  const u = [i, l];
  return r.set(e, u), u;
}
function yo(e) {
  return e[0] !== "$";
}
function wo(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function xo(e, t) {
  return wo(e) === wo(t);
}
function Co(e, t) {
  return D(t) ? t.findIndex((n) => xo(n, e)) : j(t) && xo(t, e) ? 0 : -1;
}
const Ks = (e) => e[0] === "_" || e === "$stable",
  jr = (e) => (D(e) ? e.map(qe) : [qe(e)]),
  Xl = (e, t, n) => {
    if (t._n) return t;
    const r = H((...o) => jr(t(...o)), n);
    return (r._c = !1), r;
  },
  qs = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Ks(o)) continue;
      const s = e[o];
      if (j(s)) t[o] = Xl(o, s, r);
      else if (s != null) {
        const i = jr(s);
        t[o] = () => i;
      }
    }
  },
  Ws = (e, t) => {
    const n = jr(t);
    e.slots.default = () => n;
  },
  Gl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = X(t)), kn(t, "_", n)) : qs(t, (e.slots = {}));
    } else (e.slots = {}), t && Ws(e, t);
    kn(e.slots, Wn, 1);
  },
  ec = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = ie;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (s = !1)
          : (we(o, t), !n && l === 1 && delete o._)
        : ((s = !t.$stable), qs(t, o)),
        (i = t);
    } else t && (Ws(e, t), (i = { default: 1 }));
    if (s) for (const l in o) !Ks(l) && !(l in i) && delete o[l];
  };
function Zs() {
  return {
    app: null,
    config: {
      isNativeTag: xi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let tc = 0;
function nc(e, t) {
  return function (r, o = null) {
    j(r) || (r = Object.assign({}, r)), o != null && !ge(o) && (o = null);
    const s = Zs(),
      i = new Set();
    let l = !1;
    const c = (s.app = {
      _uid: tc++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Cc,
      get config() {
        return s.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          i.has(u) ||
            (u && j(u.install)
              ? (i.add(u), u.install(c, ...f))
              : j(u) && (i.add(u), u(c, ...f))),
          c
        );
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c;
      },
      component(u, f) {
        return f ? ((s.components[u] = f), c) : s.components[u];
      },
      directive(u, f) {
        return f ? ((s.directives[u] = f), c) : s.directives[u];
      },
      mount(u, f, p) {
        if (!l) {
          const h = T(r, o);
          return (
            (h.appContext = s),
            f && t ? t(h, u) : e(h, u, p),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            Zn(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, f) {
        return (s.provides[u] = f), c;
      },
    });
    return c;
  };
}
function vr(e, t, n, r, o = !1) {
  if (D(e)) {
    e.forEach((h, m) => vr(h, t && (D(t) ? t[m] : t), n, r, o));
    return;
  }
  if (en(r) && !o) return;
  const s = r.shapeFlag & 4 ? Zn(r.component) || r.component.proxy : r.el,
    i = o ? null : s,
    { i: l, r: c } = e,
    u = t && t.r,
    f = l.refs === ie ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if (
    (u != null &&
      u !== c &&
      (me(u)
        ? ((f[u] = null), Q(p, u) && (p[u] = null))
        : ye(u) && (u.value = null)),
    j(c))
  )
    dt(c, l, 12, [i, f]);
  else {
    const h = me(c),
      m = ye(c);
    if (h || m) {
      const C = () => {
        if (e.f) {
          const $ = h ? f[c] : c.value;
          o
            ? D($) && Sr($, s)
            : D($)
            ? $.includes(s) || $.push(s)
            : h
            ? ((f[c] = [s]), Q(p, c) && (p[c] = f[c]))
            : ((c.value = [s]), e.k && (f[e.k] = c.value));
        } else
          h
            ? ((f[c] = i), Q(p, c) && (p[c] = i))
            : m && ((c.value = i), e.k && (f[e.k] = i));
      };
      i ? ((C.id = -1), ke(C, n)) : C();
    }
  }
}
const ke = El;
function rc(e) {
  return oc(e);
}
function oc(e, t) {
  const n = Pi();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: f,
      parentNode: p,
      nextSibling: h,
      setScopeId: m = De,
      cloneNode: C,
      insertStaticContent: $,
    } = e,
    P = (
      a,
      d,
      g,
      b = null,
      v = null,
      x = null,
      M = !1,
      w = null,
      E = !!d.dynamicChildren
    ) => {
      if (a === d) return;
      a && !yt(a, d) && ((b = z(a)), Ie(a, v, x, !0), (a = null)),
        d.patchFlag === -2 && ((E = !1), (d.dynamicChildren = null));
      const { type: y, ref: N, shapeFlag: I } = d;
      switch (y) {
        case qr:
          k(a, d, g, b);
          break;
        case ze:
          B(a, d, g, b);
          break;
        case An:
          a == null && q(d, g, b, M);
          break;
        case Me:
          fe(a, d, g, b, v, x, M, w, E);
          break;
        default:
          I & 1
            ? ae(a, d, g, b, v, x, M, w, E)
            : I & 6
            ? xe(a, d, g, b, v, x, M, w, E)
            : (I & 64 || I & 128) && y.process(a, d, g, b, v, x, M, w, E, ce);
      }
      N != null && v && vr(N, a && a.ref, x, d || a, !d);
    },
    k = (a, d, g, b) => {
      if (a == null) r((d.el = l(d.children)), g, b);
      else {
        const v = (d.el = a.el);
        d.children !== a.children && u(v, d.children);
      }
    },
    B = (a, d, g, b) => {
      a == null ? r((d.el = c(d.children || "")), g, b) : (d.el = a.el);
    },
    q = (a, d, g, b) => {
      [a.el, a.anchor] = $(a.children, d, g, b, a.el, a.anchor);
    },
    W = ({ el: a, anchor: d }, g, b) => {
      let v;
      for (; a && a !== d; ) (v = h(a)), r(a, g, b), (a = v);
      r(d, g, b);
    },
    ee = ({ el: a, anchor: d }) => {
      let g;
      for (; a && a !== d; ) (g = h(a)), o(a), (a = g);
      o(d);
    },
    ae = (a, d, g, b, v, x, M, w, E) => {
      (M = M || d.type === "svg"),
        a == null ? he(d, g, b, v, x, M, w, E) : G(a, d, v, x, M, w, E);
    },
    he = (a, d, g, b, v, x, M, w) => {
      let E, y;
      const {
        type: N,
        props: I,
        shapeFlag: F,
        transition: V,
        patchFlag: J,
        dirs: re,
      } = a;
      if (a.el && C !== void 0 && J === -1) E = a.el = C(a.el);
      else {
        if (
          ((E = a.el = i(a.type, x, I && I.is, I)),
          F & 8
            ? f(E, a.children)
            : F & 16 &&
              Y(a.children, E, null, b, v, x && N !== "foreignObject", M, w),
          re && gt(a, null, b, "created"),
          I)
        ) {
          for (const de in I)
            de !== "value" &&
              !xn(de) &&
              s(E, de, null, I[de], x, a.children, b, v, A);
          "value" in I && s(E, "value", null, I.value),
            (y = I.onVnodeBeforeMount) && je(y, b, a);
        }
        U(E, a, a.scopeId, M, b);
      }
      re && gt(a, null, b, "beforeMount");
      const oe = (!v || (v && !v.pendingBranch)) && V && !V.persisted;
      oe && V.beforeEnter(E),
        r(E, d, g),
        ((y = I && I.onVnodeMounted) || oe || re) &&
          ke(() => {
            y && je(y, b, a), oe && V.enter(E), re && gt(a, null, b, "mounted");
          }, v);
    },
    U = (a, d, g, b, v) => {
      if ((g && m(a, g), b)) for (let x = 0; x < b.length; x++) m(a, b[x]);
      if (v) {
        const x = v.subTree;
        if (d === x) {
          const M = v.vnode;
          U(a, M, M.scopeId, M.slotScopeIds, v.parent);
        }
      }
    },
    Y = (a, d, g, b, v, x, M, w, E = 0) => {
      for (let y = E; y < a.length; y++) {
        const N = (a[y] = w ? ct(a[y]) : qe(a[y]));
        P(null, N, d, g, b, v, x, M, w);
      }
    },
    G = (a, d, g, b, v, x, M) => {
      const w = (d.el = a.el);
      let { patchFlag: E, dynamicChildren: y, dirs: N } = d;
      E |= a.patchFlag & 16;
      const I = a.props || ie,
        F = d.props || ie;
      let V;
      g && mt(g, !1),
        (V = F.onVnodeBeforeUpdate) && je(V, g, d, a),
        N && gt(d, a, g, "beforeUpdate"),
        g && mt(g, !0);
      const J = v && d.type !== "foreignObject";
      if (
        (y
          ? ue(a.dynamicChildren, y, w, g, b, J, x)
          : M || Pe(a, d, w, null, g, b, J, x, !1),
        E > 0)
      ) {
        if (E & 16) S(w, d, I, F, g, b, v);
        else if (
          (E & 2 && I.class !== F.class && s(w, "class", null, F.class, v),
          E & 4 && s(w, "style", I.style, F.style, v),
          E & 8)
        ) {
          const re = d.dynamicProps;
          for (let oe = 0; oe < re.length; oe++) {
            const de = re[oe],
              Ne = I[de],
              Pt = F[de];
            (Pt !== Ne || de === "value") &&
              s(w, de, Ne, Pt, v, a.children, g, b, A);
          }
        }
        E & 1 && a.children !== d.children && f(w, d.children);
      } else !M && y == null && S(w, d, I, F, g, b, v);
      ((V = F.onVnodeUpdated) || N) &&
        ke(() => {
          V && je(V, g, d, a), N && gt(d, a, g, "updated");
        }, b);
    },
    ue = (a, d, g, b, v, x, M) => {
      for (let w = 0; w < d.length; w++) {
        const E = a[w],
          y = d[w],
          N =
            E.el && (E.type === Me || !yt(E, y) || E.shapeFlag & 70)
              ? p(E.el)
              : g;
        P(E, y, N, null, b, v, x, M, !0);
      }
    },
    S = (a, d, g, b, v, x, M) => {
      if (g !== b) {
        for (const w in b) {
          if (xn(w)) continue;
          const E = b[w],
            y = g[w];
          E !== y && w !== "value" && s(a, w, y, E, M, d.children, v, x, A);
        }
        if (g !== ie)
          for (const w in g)
            !xn(w) && !(w in b) && s(a, w, g[w], null, M, d.children, v, x, A);
        "value" in b && s(a, "value", g.value, b.value);
      }
    },
    fe = (a, d, g, b, v, x, M, w, E) => {
      const y = (d.el = a ? a.el : l("")),
        N = (d.anchor = a ? a.anchor : l(""));
      const { patchFlag: I, dynamicChildren: F, slotScopeIds: V } = d;
      V && (w = w ? w.concat(V) : V),
        a == null
          ? (r(y, g, b), r(N, g, b), Y(d.children, g, N, v, x, M, w, E))
          : I > 0 && I & 64 && F && a.dynamicChildren
          ? (ue(a.dynamicChildren, F, g, v, x, M, w),
            (d.key != null || (v && d === v.subTree)) && Kr(a, d, !0))
          : Pe(a, d, g, N, v, x, M, w, E);
    },
    xe = (a, d, g, b, v, x, M, w, E) => {
      (d.slotScopeIds = w),
        a == null
          ? d.shapeFlag & 512
            ? v.ctx.activate(d, g, b, M, E)
            : Ye(d, g, b, v, x, M, E)
          : pe(a, d, E);
    },
    Ye = (a, d, g, b, v, x, M) => {
      const w = (a.component = mc(a, b, v));
      if ((Kn(a) && (w.ctx.renderer = ce), _c(w), w.asyncDep)) {
        if ((v && v.registerDep(w, le), !a.el)) {
          const E = (w.subTree = T(ze));
          B(null, E, d, g);
        }
        return;
      }
      le(w, a, d, g, v, x, M);
    },
    pe = (a, d, g) => {
      const b = (d.component = a.component);
      if (wl(a, d, g))
        if (b.asyncDep && !b.asyncResolved) {
          te(b, d, g);
          return;
        } else (b.next = d), hl(b.update), b.update();
      else (d.el = a.el), (b.vnode = d);
    },
    le = (a, d, g, b, v, x, M) => {
      const w = () => {
          if (a.isMounted) {
            let { next: N, bu: I, u: F, parent: V, vnode: J } = a,
              re = N,
              oe;
            mt(a, !1),
              N ? ((N.el = J.el), te(a, N, M)) : (N = J),
              I && Jn(I),
              (oe = N.props && N.props.onVnodeBeforeUpdate) && je(oe, V, N, J),
              mt(a, !0);
            const de = Xn(a),
              Ne = a.subTree;
            (a.subTree = de),
              P(Ne, de, p(Ne.el), z(Ne), a, v, x),
              (N.el = de.el),
              re === null && xl(a, de.el),
              F && ke(F, v),
              (oe = N.props && N.props.onVnodeUpdated) &&
                ke(() => je(oe, V, N, J), v);
          } else {
            let N;
            const { el: I, props: F } = d,
              { bm: V, m: J, parent: re } = a,
              oe = en(d);
            if (
              (mt(a, !1),
              V && Jn(V),
              !oe && (N = F && F.onVnodeBeforeMount) && je(N, re, d),
              mt(a, !0),
              I && K)
            ) {
              const de = () => {
                (a.subTree = Xn(a)), K(I, a.subTree, a, v, null);
              };
              oe
                ? d.type.__asyncLoader().then(() => !a.isUnmounted && de())
                : de();
            } else {
              const de = (a.subTree = Xn(a));
              P(null, de, g, b, a, v, x), (d.el = de.el);
            }
            if ((J && ke(J, v), !oe && (N = F && F.onVnodeMounted))) {
              const de = d;
              ke(() => je(N, re, de), v);
            }
            (d.shapeFlag & 256 ||
              (re && en(re.vnode) && re.vnode.shapeFlag & 256)) &&
              a.a &&
              ke(a.a, v),
              (a.isMounted = !0),
              (d = g = b = null);
          }
        },
        E = (a.effect = new Lr(w, () => ks(y), a.scope)),
        y = (a.update = () => E.run());
      (y.id = a.uid), mt(a, !0), y();
    },
    te = (a, d, g) => {
      d.component = a;
      const b = a.vnode.props;
      (a.vnode = d),
        (a.next = null),
        Jl(a, d.props, b, g),
        ec(a, d.children, g),
        Dt(),
        Un(void 0, a.update),
        Ut();
    },
    Pe = (a, d, g, b, v, x, M, w, E = !1) => {
      const y = a && a.children,
        N = a ? a.shapeFlag : 0,
        I = d.children,
        { patchFlag: F, shapeFlag: V } = d;
      if (F > 0) {
        if (F & 128) {
          Qe(y, I, g, b, v, x, M, w, E);
          return;
        } else if (F & 256) {
          kt(y, I, g, b, v, x, M, w, E);
          return;
        }
      }
      V & 8
        ? (N & 16 && A(y, v, x), I !== y && f(g, I))
        : N & 16
        ? V & 16
          ? Qe(y, I, g, b, v, x, M, w, E)
          : A(y, v, x, !0)
        : (N & 8 && f(g, ""), V & 16 && Y(I, g, b, v, x, M, w, E));
    },
    kt = (a, d, g, b, v, x, M, w, E) => {
      (a = a || It), (d = d || It);
      const y = a.length,
        N = d.length,
        I = Math.min(y, N);
      let F;
      for (F = 0; F < I; F++) {
        const V = (d[F] = E ? ct(d[F]) : qe(d[F]));
        P(a[F], V, g, null, v, x, M, w, E);
      }
      y > N ? A(a, v, x, !0, !1, I) : Y(d, g, b, v, x, M, w, E, I);
    },
    Qe = (a, d, g, b, v, x, M, w, E) => {
      let y = 0;
      const N = d.length;
      let I = a.length - 1,
        F = N - 1;
      for (; y <= I && y <= F; ) {
        const V = a[y],
          J = (d[y] = E ? ct(d[y]) : qe(d[y]));
        if (yt(V, J)) P(V, J, g, null, v, x, M, w, E);
        else break;
        y++;
      }
      for (; y <= I && y <= F; ) {
        const V = a[I],
          J = (d[F] = E ? ct(d[F]) : qe(d[F]));
        if (yt(V, J)) P(V, J, g, null, v, x, M, w, E);
        else break;
        I--, F--;
      }
      if (y > I) {
        if (y <= F) {
          const V = F + 1,
            J = V < N ? d[V].el : b;
          for (; y <= F; )
            P(null, (d[y] = E ? ct(d[y]) : qe(d[y])), g, J, v, x, M, w, E), y++;
        }
      } else if (y > F) for (; y <= I; ) Ie(a[y], v, x, !0), y++;
      else {
        const V = y,
          J = y,
          re = new Map();
        for (y = J; y <= F; y++) {
          const Te = (d[y] = E ? ct(d[y]) : qe(d[y]));
          Te.key != null && re.set(Te.key, y);
        }
        let oe,
          de = 0;
        const Ne = F - J + 1;
        let Pt = !1,
          no = 0;
        const qt = new Array(Ne);
        for (y = 0; y < Ne; y++) qt[y] = 0;
        for (y = V; y <= I; y++) {
          const Te = a[y];
          if (de >= Ne) {
            Ie(Te, v, x, !0);
            continue;
          }
          let Ve;
          if (Te.key != null) Ve = re.get(Te.key);
          else
            for (oe = J; oe <= F; oe++)
              if (qt[oe - J] === 0 && yt(Te, d[oe])) {
                Ve = oe;
                break;
              }
          Ve === void 0
            ? Ie(Te, v, x, !0)
            : ((qt[Ve - J] = y + 1),
              Ve >= no ? (no = Ve) : (Pt = !0),
              P(Te, d[Ve], g, null, v, x, M, w, E),
              de++);
        }
        const ro = Pt ? sc(qt) : It;
        for (oe = ro.length - 1, y = Ne - 1; y >= 0; y--) {
          const Te = J + y,
            Ve = d[Te],
            oo = Te + 1 < N ? d[Te + 1].el : b;
          qt[y] === 0
            ? P(null, Ve, g, oo, v, x, M, w, E)
            : Pt && (oe < 0 || y !== ro[oe] ? Ue(Ve, g, oo, 2) : oe--);
        }
      }
    },
    Ue = (a, d, g, b, v = null) => {
      const { el: x, type: M, transition: w, children: E, shapeFlag: y } = a;
      if (y & 6) {
        Ue(a.component.subTree, d, g, b);
        return;
      }
      if (y & 128) {
        a.suspense.move(d, g, b);
        return;
      }
      if (y & 64) {
        M.move(a, d, g, ce);
        return;
      }
      if (M === Me) {
        r(x, d, g);
        for (let I = 0; I < E.length; I++) Ue(E[I], d, g, b);
        r(a.anchor, d, g);
        return;
      }
      if (M === An) {
        W(a, d, g);
        return;
      }
      if (b !== 2 && y & 1 && w)
        if (b === 0) w.beforeEnter(x), r(x, d, g), ke(() => w.enter(x), v);
        else {
          const { leave: I, delayLeave: F, afterLeave: V } = w,
            J = () => r(x, d, g),
            re = () => {
              I(x, () => {
                J(), V && V();
              });
            };
          F ? F(x, J, re) : re();
        }
      else r(x, d, g);
    },
    Ie = (a, d, g, b = !1, v = !1) => {
      const {
        type: x,
        props: M,
        ref: w,
        children: E,
        dynamicChildren: y,
        shapeFlag: N,
        patchFlag: I,
        dirs: F,
      } = a;
      if ((w != null && vr(w, null, g, a, !0), N & 256)) {
        d.ctx.deactivate(a);
        return;
      }
      const V = N & 1 && F,
        J = !en(a);
      let re;
      if ((J && (re = M && M.onVnodeBeforeUnmount) && je(re, d, a), N & 6))
        O(a.component, g, b);
      else {
        if (N & 128) {
          a.suspense.unmount(g, b);
          return;
        }
        V && gt(a, null, d, "beforeUnmount"),
          N & 64
            ? a.type.remove(a, d, g, v, ce, b)
            : y && (x !== Me || (I > 0 && I & 64))
            ? A(y, d, g, !1, !0)
            : ((x === Me && I & 384) || (!v && N & 16)) && A(E, d, g),
          b && Qn(a);
      }
      ((J && (re = M && M.onVnodeUnmounted)) || V) &&
        ke(() => {
          re && je(re, d, a), V && gt(a, null, d, "unmounted");
        }, g);
    },
    Qn = (a) => {
      const { type: d, el: g, anchor: b, transition: v } = a;
      if (d === Me) {
        _(g, b);
        return;
      }
      if (d === An) {
        ee(a);
        return;
      }
      const x = () => {
        o(g), v && !v.persisted && v.afterLeave && v.afterLeave();
      };
      if (a.shapeFlag & 1 && v && !v.persisted) {
        const { leave: M, delayLeave: w } = v,
          E = () => M(g, x);
        w ? w(a.el, x, E) : E();
      } else x();
    },
    _ = (a, d) => {
      let g;
      for (; a !== d; ) (g = h(a)), o(a), (a = g);
      o(d);
    },
    O = (a, d, g) => {
      const { bum: b, scope: v, update: x, subTree: M, um: w } = a;
      b && Jn(b),
        v.stop(),
        x && ((x.active = !1), Ie(M, a, d, g)),
        w && ke(w, d),
        ke(() => {
          a.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    A = (a, d, g, b = !1, v = !1, x = 0) => {
      for (let M = x; M < a.length; M++) Ie(a[M], d, g, b, v);
    },
    z = (a) =>
      a.shapeFlag & 6
        ? z(a.component.subTree)
        : a.shapeFlag & 128
        ? a.suspense.next()
        : h(a.anchor || a.el),
    ne = (a, d, g) => {
      a == null
        ? d._vnode && Ie(d._vnode, null, null, !0)
        : P(d._vnode || null, a, d, null, null, null, g),
        Rs(),
        (d._vnode = a);
    },
    ce = {
      p: P,
      um: Ie,
      m: Ue,
      r: Qn,
      mt: Ye,
      mc: Y,
      pc: Pe,
      pbc: ue,
      n: z,
      o: e,
    };
  let Z, K;
  return (
    t && ([Z, K] = t(ce)), { render: ne, hydrate: Z, createApp: nc(ne, Z) }
  );
}
function mt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Kr(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (D(r) && D(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[s] = ct(o[s])), (l.el = i.el)),
        n || Kr(i, l));
    }
}
function sc(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((o = n[n.length - 1]), e[o] < u)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (l = (s + i) >> 1), e[n[l]] < u ? (s = l + 1) : (i = l);
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
const ic = (e) => e.__isTeleport,
  tn = (e) => e && (e.disabled || e.disabled === ""),
  Eo = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement,
  br = (e, t) => {
    const n = e && e.to;
    return me(n) ? (t ? t(n) : null) : n;
  },
  lc = {
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, l, c, u) {
      const {
          mc: f,
          pc: p,
          pbc: h,
          o: { insert: m, querySelector: C, createText: $, createComment: P },
        } = u,
        k = tn(t.props);
      const { shapeFlag: B, children: q, dynamicChildren: W } = t;
      if (e == null) {
        const ee = (t.el = $("")),
          ae = (t.anchor = $(""));
        m(ee, n, r), m(ae, n, r);
        const he = (t.target = br(t.props, C)),
          U = (t.targetAnchor = $(""));
        he && (m(U, he), (i = i || Eo(he)));
        const Y = (G, ue) => {
          B & 16 && f(q, G, ue, o, s, i, l, c);
        };
        k ? Y(n, ae) : he && Y(he, U);
      } else {
        t.el = e.el;
        const ee = (t.anchor = e.anchor),
          ae = (t.target = e.target),
          he = (t.targetAnchor = e.targetAnchor),
          U = tn(e.props),
          Y = U ? n : ae,
          G = U ? ee : he;
        if (
          ((i = i || Eo(ae)),
          W
            ? (h(e.dynamicChildren, W, Y, o, s, i, l), Kr(e, t, !0))
            : c || p(e, t, Y, G, o, s, i, l, !1),
          k)
        )
          U || yn(t, n, ee, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const ue = (t.target = br(t.props, C));
          ue && yn(t, ue, null, u, 0);
        } else U && yn(t, ae, he, u, 1);
      }
    },
    remove(e, t, n, r, { um: o, o: { remove: s } }, i) {
      const {
        shapeFlag: l,
        children: c,
        anchor: u,
        targetAnchor: f,
        target: p,
        props: h,
      } = e;
      if ((p && s(f), (i || !tn(h)) && (s(u), l & 16)))
        for (let m = 0; m < c.length; m++) {
          const C = c[m];
          o(C, t, n, !0, !!C.dynamicChildren);
        }
    },
    move: yn,
    hydrate: cc,
  };
function yn(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: c, children: u, props: f } = e,
    p = s === 2;
  if ((p && r(i, t, n), (!p || tn(f)) && c & 16))
    for (let h = 0; h < u.length; h++) o(u[h], t, n, 2);
  p && r(l, t, n);
}
function cc(
  e,
  t,
  n,
  r,
  o,
  s,
  { o: { nextSibling: i, parentNode: l, querySelector: c } },
  u
) {
  const f = (t.target = br(t.props, c));
  if (f) {
    const p = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (tn(t.props))
        (t.anchor = u(i(e), t, l(e), n, r, o, s)), (t.targetAnchor = p);
      else {
        t.anchor = i(e);
        let h = p;
        for (; h; )
          if (
            ((h = i(h)), h && h.nodeType === 8 && h.data === "teleport anchor")
          ) {
            (t.targetAnchor = h),
              (f._lpa = t.targetAnchor && i(t.targetAnchor));
            break;
          }
        u(p, t, f, n, r, o, s);
      }
  }
  return t.anchor && i(t.anchor);
}
const ac = lc,
  Me = Symbol(void 0),
  qr = Symbol(void 0),
  ze = Symbol(void 0),
  An = Symbol(void 0),
  nn = [];
let Be = null;
function _e(e = !1) {
  nn.push((Be = e ? null : []));
}
function uc() {
  nn.pop(), (Be = nn[nn.length - 1] || null);
}
let fn = 1;
function Ao(e) {
  fn += e;
}
function Ys(e) {
  return (
    (e.dynamicChildren = fn > 0 ? Be || It : null),
    uc(),
    fn > 0 && Be && Be.push(e),
    e
  );
}
function Ee(e, t, n, r, o, s) {
  return Ys(R(e, t, n, r, o, s, !0));
}
function Wr(e, t, n, r, o) {
  return Ys(T(e, t, n, r, o, !0));
}
function $n(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wn = "__vInternal",
  Qs = ({ key: e }) => (e != null ? e : null),
  Mn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? me(e) || ye(e) || j(e)
        ? { i: Ce, r: e, k: t, f: !!n }
        : e
      : null;
function R(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  s = e === Me ? 0 : 1,
  i = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qs(t),
    ref: t && Mn(t),
    scopeId: jn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    l
      ? (Zr(c, n), s & 128 && e.normalize(c))
      : n && (c.shapeFlag |= me(n) ? 8 : 16),
    fn > 0 &&
      !i &&
      Be &&
      (c.patchFlag > 0 || s & 6) &&
      c.patchFlag !== 32 &&
      Be.push(c),
    c
  );
}
const T = fc;
function fc(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (((!e || e === Dl) && (e = ze), $n(e))) {
    const l = pt(e, t, !0);
    return (
      n && Zr(l, n),
      fn > 0 &&
        !s &&
        Be &&
        (l.shapeFlag & 6 ? (Be[Be.indexOf(e)] = l) : Be.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((xc(e) && (e = e.__vccOpts), t)) {
    t = dc(t);
    let { class: l, style: c } = t;
    l && !me(l) && (t.class = sn(l)),
      ge(c) && (ys(c) && !D(c) && (c = we({}, c)), (t.style = On(c)));
  }
  const i = me(e) ? 1 : Cl(e) ? 128 : ic(e) ? 64 : ge(e) ? 4 : j(e) ? 2 : 0;
  return R(e, t, n, r, o, i, s, !0);
}
function dc(e) {
  return e ? (ys(e) || Wn in e ? we({}, e) : e) : null;
}
function pt(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e,
    l = t ? yr(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Qs(l),
    ref:
      t && t.ref ? (n && o ? (D(o) ? o.concat(Mn(t)) : [o, Mn(t)]) : Mn(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Me ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && pt(e.ssContent),
    ssFallback: e.ssFallback && pt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function L(e = " ", t = 0) {
  return T(qr, null, e, t);
}
function hc(e = "", t = !1) {
  return t ? (_e(), Wr(ze, null, e)) : T(ze, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean"
    ? T(ze)
    : D(e)
    ? T(Me, null, e.slice())
    : typeof e == "object"
    ? ct(e)
    : T(qr, null, String(e));
}
function ct(e) {
  return e.el === null || e.memo ? e : pt(e);
}
function Zr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (D(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Zr(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Wn in t)
        ? (t._ctx = Ce)
        : o === 3 &&
          Ce &&
          (Ce.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    j(t)
      ? ((t = { default: t, _ctx: Ce }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [L(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function yr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = sn([t.class, r.class]));
      else if (o === "style") t.style = On([t.style, r.style]);
      else if (Ln(o)) {
        const s = t[o],
          i = r[o];
        i &&
          s !== i &&
          !(D(s) && s.includes(i)) &&
          (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function je(e, t, n, r = null) {
  Le(e, t, 7, [n, r]);
}
const pc = Zs();
let gc = 0;
function mc(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || pc,
    s = {
      uid: gc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ti(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: js(r, o),
      emitsOptions: $s(r, o),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: r.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = t ? t.root : s),
    (s.emit = ml.bind(null, s)),
    e.ce && e.ce(s),
    s
  );
}
let be = null;
const Js = () => be || Ce,
  Nt = (e) => {
    (be = e), e.scope.on();
  },
  Mt = () => {
    be && be.scope.off(), (be = null);
  };
function Xs(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function _c(e, t = !1) {
  dn = t;
  const { props: n, children: r } = e.vnode,
    o = Xs(e);
  Ql(e, n, o, t), Gl(e, r);
  const s = o ? vc(e, t) : void 0;
  return (dn = !1), s;
}
function vc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = ws(new Proxy(e.ctx, jl)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? yc(e) : null);
    Nt(e), Dt();
    const s = dt(r, e, 0, [e.props, o]);
    if ((Ut(), Mt(), is(s))) {
      if ((s.then(Mt, Mt), t))
        return s
          .then((i) => {
            Mo(e, i, t);
          })
          .catch((i) => {
            Bn(i, e, 0);
          });
      e.asyncDep = s;
    } else Mo(e, s, t);
  } else Gs(e, t);
}
function Mo(e, t, n) {
  j(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ge(t) && (e.setupState = As(t)),
    Gs(e, n);
}
let ko;
function Gs(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && ko && !r.render) {
      const o = r.template;
      if (o) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          u = we(we({ isCustomElement: s, delimiters: l }, i), c);
        r.render = ko(o, u);
      }
    }
    e.render = r.render || De;
  }
  Nt(e), Dt(), Kl(e), Ut(), Mt();
}
function bc(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Se(e, "get", "$attrs"), t[n];
    },
  });
}
function yc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = bc(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Zn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(As(ws(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Rn) return Rn[n](e);
        },
      }))
    );
}
function wc(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function xc(e) {
  return j(e) && "__vccOpts" in e;
}
const He = (e, t) => ul(e, t, dn);
function Yr(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? ge(t) && !D(t)
      ? $n(t)
        ? T(e, null, [t])
        : T(e, t)
      : T(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && $n(n) && (n = [n]),
      T(e, t, n));
}
const Cc = "3.2.37",
  Ec = "http://www.w3.org/2000/svg",
  wt = typeof document != "undefined" ? document : null,
  Po = wt && wt.createElement("template"),
  Ac = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? wt.createElementNS(Ec, e)
        : wt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => wt.createTextNode(e),
    createComment: (e) => wt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => wt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return "_value" in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling));

        );
      else {
        Po.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = Po.content;
        if (r) {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Mc(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function kc(e, t, n) {
  const r = e.style,
    o = me(n);
  if (n && !o) {
    for (const s in n) wr(r, s, n[s]);
    if (t && !me(t)) for (const s in t) n[s] == null && wr(r, s, "");
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = s);
  }
}
const To = /\s*!important$/;
function wr(e, t, n) {
  if (D(n)) n.forEach((r) => wr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Pc(e, t);
    To.test(n)
      ? e.setProperty(Bt(r), n.replace(To, ""), "important")
      : (e[r] = n);
  }
}
const Ro = ["Webkit", "Moz", "ms"],
  er = {};
function Pc(e, t) {
  const n = er[t];
  if (n) return n;
  let r = Ze(t);
  if (r !== "filter" && r in e) return (er[t] = r);
  r = Fn(r);
  for (let o = 0; o < Ro.length; o++) {
    const s = Ro[o] + r;
    if (s in e) return (er[t] = s);
  }
  return t;
}
const So = "http://www.w3.org/1999/xlink";
function Tc(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(So, t.slice(6, t.length))
      : e.setAttributeNS(So, t, n);
  else {
    const s = vi(t);
    n == null || (s && !rs(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? "" : n);
  }
}
function Rc(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const c = n == null ? "" : n;
    (e.value !== c || e.tagName === "OPTION") && (e.value = c),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = rs(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
const [ei, Sc] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window != "undefined") {
    Date.now() > document.createEvent("Event").timeStamp &&
      (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let xr = 0;
const $c = Promise.resolve(),
  Ic = () => {
    xr = 0;
  },
  Oc = () => xr || ($c.then(Ic), (xr = ei()));
function Lc(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function zc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function Nc(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [l, c] = Fc(t);
    if (r) {
      const u = (s[t] = Hc(r, o));
      Lc(e, l, u, c);
    } else i && (zc(e, l, i, c), (s[t] = void 0));
  }
}
const $o = /(?:Once|Passive|Capture)$/;
function Fc(e) {
  let t;
  if ($o.test(e)) {
    t = {};
    let n;
    for (; (n = e.match($o)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [Bt(e.slice(2)), t];
}
function Hc(e, t) {
  const n = (r) => {
    const o = r.timeStamp || ei();
    (Sc || o >= n.attached - 1) && Le(Bc(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = Oc()), n;
}
function Bc(e, t) {
  if (D(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const Io = /^on[a-z]/,
  Dc = (e, t, n, r, o = !1, s, i, l, c) => {
    t === "class"
      ? Mc(e, r, o)
      : t === "style"
      ? kc(e, n, r)
      : Ln(t)
      ? Rr(t) || Nc(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Uc(e, t, r, o)
        )
      ? Rc(e, t, r, s, i, l, c)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Tc(e, t, r, o));
  };
function Uc(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Io.test(t) && j(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Io.test(t) && me(n))
    ? !1
    : t in e;
}
function Vc(e) {
  const t = Js();
  if (!t) return;
  const n = () => Cr(t.subTree, e(t.proxy));
  Al(n),
    Vt(() => {
      const r = new MutationObserver(n);
      r.observe(t.subTree.el.parentNode, { childList: !0 }),
        jt(() => r.disconnect());
    });
}
function Cr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Cr(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Oo(e.el, t);
  else if (e.type === Me) e.children.forEach((n) => Cr(n, t));
  else if (e.type === An) {
    let { el: n, anchor: r } = e;
    for (; n && (Oo(n, t), n !== r); ) n = n.nextSibling;
  }
}
function Oo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const r in t) n.setProperty(`--${r}`, t[r]);
  }
}
const rt = "transition",
  Wt = "animation",
  Qr = (e, { slots: t }) => Yr(Os, jc(e), t);
Qr.displayName = "Transition";
const ti = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Qr.props = we({}, Os.props, ti);
const _t = (e, t = []) => {
    D(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Lo = (e) => (e ? (D(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function jc(e) {
  const t = {};
  for (const S in e) S in ti || (t[S] = e[S]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = s,
      appearActiveClass: u = i,
      appearToClass: f = l,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    C = Kc(o),
    $ = C && C[0],
    P = C && C[1],
    {
      onBeforeEnter: k,
      onEnter: B,
      onEnterCancelled: q,
      onLeave: W,
      onLeaveCancelled: ee,
      onBeforeAppear: ae = k,
      onAppear: he = B,
      onAppearCancelled: U = q,
    } = t,
    Y = (S, fe, xe) => {
      vt(S, fe ? f : l), vt(S, fe ? u : i), xe && xe();
    },
    G = (S, fe) => {
      (S._isLeaving = !1), vt(S, p), vt(S, m), vt(S, h), fe && fe();
    },
    ue = (S) => (fe, xe) => {
      const Ye = S ? he : B,
        pe = () => Y(fe, S, xe);
      _t(Ye, [fe, pe]),
        zo(() => {
          vt(fe, S ? c : s), ot(fe, S ? f : l), Lo(Ye) || No(fe, r, $, pe);
        });
    };
  return we(t, {
    onBeforeEnter(S) {
      _t(k, [S]), ot(S, s), ot(S, i);
    },
    onBeforeAppear(S) {
      _t(ae, [S]), ot(S, c), ot(S, u);
    },
    onEnter: ue(!1),
    onAppear: ue(!0),
    onLeave(S, fe) {
      S._isLeaving = !0;
      const xe = () => G(S, fe);
      ot(S, p),
        Zc(),
        ot(S, h),
        zo(() => {
          !S._isLeaving || (vt(S, p), ot(S, m), Lo(W) || No(S, r, P, xe));
        }),
        _t(W, [S, xe]);
    },
    onEnterCancelled(S) {
      Y(S, !1), _t(q, [S]);
    },
    onAppearCancelled(S) {
      Y(S, !0), _t(U, [S]);
    },
    onLeaveCancelled(S) {
      G(S), _t(ee, [S]);
    },
  });
}
function Kc(e) {
  if (e == null) return null;
  if (ge(e)) return [tr(e.enter), tr(e.leave)];
  {
    const t = tr(e);
    return [t, t];
  }
}
function tr(e) {
  return as(e);
}
function ot(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function vt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function zo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let qc = 0;
function No(e, t, n, r) {
  const o = (e._endId = ++qc),
    s = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: i, timeout: l, propCount: c } = Wc(e, t);
  if (!i) return r();
  const u = i + "end";
  let f = 0;
  const p = () => {
      e.removeEventListener(u, h), s();
    },
    h = (m) => {
      m.target === e && ++f >= c && p();
    };
  setTimeout(() => {
    f < c && p();
  }, l + 1),
    e.addEventListener(u, h);
}
function Wc(e, t) {
  const n = window.getComputedStyle(e),
    r = (C) => (n[C] || "").split(", "),
    o = r(rt + "Delay"),
    s = r(rt + "Duration"),
    i = Fo(o, s),
    l = r(Wt + "Delay"),
    c = r(Wt + "Duration"),
    u = Fo(l, c);
  let f = null,
    p = 0,
    h = 0;
  t === rt
    ? i > 0 && ((f = rt), (p = i), (h = s.length))
    : t === Wt
    ? u > 0 && ((f = Wt), (p = u), (h = c.length))
    : ((p = Math.max(i, u)),
      (f = p > 0 ? (i > u ? rt : Wt) : null),
      (h = f ? (f === rt ? s.length : c.length) : 0));
  const m = f === rt && /\b(transform|all)(,|$)/.test(n[rt + "Property"]);
  return { type: f, timeout: p, propCount: h, hasTransform: m };
}
function Fo(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Ho(n) + Ho(e[r])));
}
function Ho(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Zc() {
  return document.body.offsetHeight;
}
const Yc = ["ctrl", "shift", "alt", "meta"],
  Qc = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Yc.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Jc =
    (e, t) =>
    (n, ...r) => {
      for (let o = 0; o < t.length; o++) {
        const s = Qc[t[o]];
        if (s && s(n, t)) return;
      }
      return e(n, ...r);
    },
  Xc = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Zt(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Zt(e, !0), r.enter(e))
            : r.leave(e, () => {
                Zt(e, !1);
              })
          : Zt(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Zt(e, t);
    },
  };
function Zt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Gc = we({ patchProp: Dc }, Ac);
let Bo;
function ea() {
  return Bo || (Bo = rc(Gc));
}
const ta = (...e) => {
  const t = ea().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const o = na(r);
      if (!o) return;
      const s = t._component;
      !j(s) && !s.render && !s.template && (s.template = o.innerHTML),
        (o.innerHTML = "");
      const i = n(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function na(e) {
  return me(e) ? document.querySelector(e) : e;
}
/*!
 * vue-router v4.0.16
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const ni =
    typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
  Kt = (e) => (ni ? Symbol(e) : "_vr_" + e),
  ra = Kt("rvlm"),
  Do = Kt("rvd"),
  Jr = Kt("r"),
  ri = Kt("rl"),
  Er = Kt("rvl"),
  $t = typeof window != "undefined";
function oa(e) {
  return e.__esModule || (ni && e[Symbol.toStringTag] === "Module");
}
const se = Object.assign;
function nr(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Array.isArray(o) ? o.map(e) : e(o);
  }
  return n;
}
const rn = () => {},
  sa = /\/$/,
  ia = (e) => e.replace(sa, "");
function rr(e, t, n = "/") {
  let r,
    o = {},
    s = "",
    i = "";
  const l = t.indexOf("?"),
    c = t.indexOf("#", l > -1 ? l : 0);
  return (
    l > -1 &&
      ((r = t.slice(0, l)),
      (s = t.slice(l + 1, c > -1 ? c : t.length)),
      (o = e(s))),
    c > -1 && ((r = r || t.slice(0, c)), (i = t.slice(c, t.length))),
    (r = ua(r != null ? r : t, n)),
    { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: i }
  );
}
function la(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Uo(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function ca(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Ft(t.matched[r], n.matched[o]) &&
    oi(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Ft(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function oi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!aa(e[n], t[n])) return !1;
  return !0;
}
function aa(e, t) {
  return Array.isArray(e) ? Vo(e, t) : Array.isArray(t) ? Vo(t, e) : e === t;
}
function Vo(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function ua(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let o = n.length - 1,
    s,
    i;
  for (s = 0; s < r.length; s++)
    if (((i = r[s]), !(o === 1 || i === ".")))
      if (i === "..") o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    r.slice(s - (s === r.length ? 1 : 0)).join("/")
  );
}
let hn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(hn || (hn = {}));
let on;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(on || (on = {}));
function fa(e) {
  if (!e)
    if ($t) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ia(e);
}
const da = /^[^#]+#/;
function ha(e, t) {
  return e.replace(da, "#") + t;
}
function pa(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Yn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function ga(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = pa(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function jo(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ar = new Map();
function ma(e, t) {
  Ar.set(e, t);
}
function _a(e) {
  const t = Ar.get(e);
  return Ar.delete(e), t;
}
const va = () => location.protocol + "//" + location.host;
function si(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let l = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      c = o.slice(l);
    return c[0] !== "/" && (c = "/" + c), Uo(c, "");
  }
  return Uo(n, e) + r + o;
}
function ba(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const l = ({ state: h }) => {
    const m = si(e, location),
      C = n.value,
      $ = t.value;
    let P = 0;
    if (h) {
      if (((n.value = m), (t.value = h), i && i === C)) {
        i = null;
        return;
      }
      P = $ ? h.position - $.position : 0;
    } else r(m);
    o.forEach((k) => {
      k(n.value, C, {
        delta: P,
        type: hn.pop,
        direction: P ? (P > 0 ? on.forward : on.back) : on.unknown,
      });
    });
  };
  function c() {
    i = n.value;
  }
  function u(h) {
    o.push(h);
    const m = () => {
      const C = o.indexOf(h);
      C > -1 && o.splice(C, 1);
    };
    return s.push(m), m;
  }
  function f() {
    const { history: h } = window;
    !h.state || h.replaceState(se({}, h.state, { scroll: Yn() }), "");
  }
  function p() {
    for (const h of s) h();
    (s = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", f);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", f),
    { pauseListeners: c, listen: u, destroy: p }
  );
}
function Ko(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? Yn() : null,
  };
}
function ya(e) {
  const { history: t, location: n } = window,
    r = { value: si(e, n) },
    o = { value: t.state };
  o.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(c, u, f) {
    const p = e.indexOf("#"),
      h =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + c
          : va() + e + c;
    try {
      t[f ? "replaceState" : "pushState"](u, "", h), (o.value = u);
    } catch (m) {
      console.error(m), n[f ? "replace" : "assign"](h);
    }
  }
  function i(c, u) {
    const f = se({}, t.state, Ko(o.value.back, c, o.value.forward, !0), u, {
      position: o.value.position,
    });
    s(c, f, !0), (r.value = c);
  }
  function l(c, u) {
    const f = se({}, o.value, t.state, { forward: c, scroll: Yn() });
    s(f.current, f, !0);
    const p = se({}, Ko(r.value, c, null), { position: f.position + 1 }, u);
    s(c, p, !1), (r.value = c);
  }
  return { location: r, state: o, push: l, replace: i };
}
function wa(e) {
  e = fa(e);
  const t = ya(e),
    n = ba(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = se(
    { location: "", base: e, go: r, createHref: ha.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function xa(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function ii(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const st = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  li = Kt("nf");
let qo;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(qo || (qo = {}));
function Ht(e, t) {
  return se(new Error(), { type: e, [li]: !0 }, t);
}
function it(e, t) {
  return e instanceof Error && li in e && (t == null || !!(e.type & t));
}
const Wo = "[^/]+?",
  Ca = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Ea = /[.+*?^${}()[\]/\\]/g;
function Aa(e, t) {
  const n = se({}, Ca, t),
    r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const f = u.length ? [] : [90];
    n.strict && !u.length && (o += "/");
    for (let p = 0; p < u.length; p++) {
      const h = u[p];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        p || (o += "/"), (o += h.value.replace(Ea, "\\$&")), (m += 40);
      else if (h.type === 1) {
        const { value: C, repeatable: $, optional: P, regexp: k } = h;
        s.push({ name: C, repeatable: $, optional: P });
        const B = k || Wo;
        if (B !== Wo) {
          m += 10;
          try {
            new RegExp(`(${B})`);
          } catch (W) {
            throw new Error(
              `Invalid custom RegExp for param "${C}" (${B}): ` + W.message
            );
          }
        }
        let q = $ ? `((?:${B})(?:/(?:${B}))*)` : `(${B})`;
        p || (q = P && u.length < 2 ? `(?:/${q})` : "/" + q),
          P && (q += "?"),
          (o += q),
          (m += 20),
          P && (m += -8),
          $ && (m += -20),
          B === ".*" && (m += -50);
      }
      f.push(m);
    }
    r.push(f);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function l(u) {
    const f = u.match(i),
      p = {};
    if (!f) return null;
    for (let h = 1; h < f.length; h++) {
      const m = f[h] || "",
        C = s[h - 1];
      p[C.name] = m && C.repeatable ? m.split("/") : m;
    }
    return p;
  }
  function c(u) {
    let f = "",
      p = !1;
    for (const h of e) {
      (!p || !f.endsWith("/")) && (f += "/"), (p = !1);
      for (const m of h)
        if (m.type === 0) f += m.value;
        else if (m.type === 1) {
          const { value: C, repeatable: $, optional: P } = m,
            k = C in u ? u[C] : "";
          if (Array.isArray(k) && !$)
            throw new Error(
              `Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`
            );
          const B = Array.isArray(k) ? k.join("/") : k;
          if (!B)
            if (P)
              h.length < 2 &&
                e.length > 1 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (p = !0));
            else throw new Error(`Missing required param "${C}"`);
          f += B;
        }
    }
    return f;
  }
  return { re: i, score: r, keys: s, parse: l, stringify: c };
}
function Ma(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function ka(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Ma(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Zo(r)) return 1;
    if (Zo(o)) return -1;
  }
  return o.length - r.length;
}
function Zo(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Pa = { type: 0, value: "" },
  Ta = /[a-zA-Z0-9_]/;
function Ra(e) {
  if (!e) return [[]];
  if (e === "/") return [[Pa]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let l = 0,
    c,
    u = "",
    f = "";
  function p() {
    !u ||
      (n === 0
        ? s.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (c === "*" || c === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: u,
            regexp: f,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function h() {
    u += c;
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (u && p(), i()) : c === ":" ? (p(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        c === "("
          ? (n = 2)
          : Ta.test(c)
          ? h()
          : (p(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + c)
            : (n = 3)
          : (f += c);
        break;
      case 3:
        p(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--, (f = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), p(), i(), o;
}
function Sa(e, t, n) {
  const r = Aa(Ra(e.path), n),
    o = se(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function $a(e, t) {
  const n = [],
    r = new Map();
  t = Qo({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(f) {
    return r.get(f);
  }
  function s(f, p, h) {
    const m = !h,
      C = Oa(f);
    C.aliasOf = h && h.record;
    const $ = Qo(t, f),
      P = [C];
    if ("alias" in f) {
      const q = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const W of q)
        P.push(
          se({}, C, {
            components: h ? h.record.components : C.components,
            path: W,
            aliasOf: h ? h.record : C,
          })
        );
    }
    let k, B;
    for (const q of P) {
      const { path: W } = q;
      if (p && W[0] !== "/") {
        const ee = p.record.path,
          ae = ee[ee.length - 1] === "/" ? "" : "/";
        q.path = p.record.path + (W && ae + W);
      }
      if (
        ((k = Sa(q, p, $)),
        h
          ? h.alias.push(k)
          : ((B = B || k),
            B !== k && B.alias.push(k),
            m && f.name && !Yo(k) && i(f.name)),
        "children" in C)
      ) {
        const ee = C.children;
        for (let ae = 0; ae < ee.length; ae++)
          s(ee[ae], k, h && h.children[ae]);
      }
      (h = h || k), c(k);
    }
    return B
      ? () => {
          i(B);
        }
      : rn;
  }
  function i(f) {
    if (ii(f)) {
      const p = r.get(f);
      p &&
        (r.delete(f),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(i),
        p.alias.forEach(i));
    } else {
      const p = n.indexOf(f);
      p > -1 &&
        (n.splice(p, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function c(f) {
    let p = 0;
    for (
      ;
      p < n.length &&
      ka(f, n[p]) >= 0 &&
      (f.record.path !== n[p].record.path || !ci(f, n[p]));

    )
      p++;
    n.splice(p, 0, f), f.record.name && !Yo(f) && r.set(f.record.name, f);
  }
  function u(f, p) {
    let h,
      m = {},
      C,
      $;
    if ("name" in f && f.name) {
      if (((h = r.get(f.name)), !h)) throw Ht(1, { location: f });
      ($ = h.record.name),
        (m = se(
          Ia(
            p.params,
            h.keys.filter((B) => !B.optional).map((B) => B.name)
          ),
          f.params
        )),
        (C = h.stringify(m));
    } else if ("path" in f)
      (C = f.path),
        (h = n.find((B) => B.re.test(C))),
        h && ((m = h.parse(C)), ($ = h.record.name));
    else {
      if (((h = p.name ? r.get(p.name) : n.find((B) => B.re.test(p.path))), !h))
        throw Ht(1, { location: f, currentLocation: p });
      ($ = h.record.name),
        (m = se({}, p.params, f.params)),
        (C = h.stringify(m));
    }
    const P = [];
    let k = h;
    for (; k; ) P.unshift(k.record), (k = k.parent);
    return { name: $, path: C, params: m, matched: P, meta: za(P) };
  }
  return (
    e.forEach((f) => s(f)),
    {
      addRoute: s,
      resolve: u,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: o,
    }
  );
}
function Ia(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Oa(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: La(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e ? e.components || {} : { default: e.component },
  };
}
function La(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function Yo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function za(e) {
  return e.reduce((t, n) => se(t, n.meta), {});
}
function Qo(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function ci(e, t) {
  return t.children.some((n) => n === e || ci(e, n));
}
const ai = /#/g,
  Na = /&/g,
  Fa = /\//g,
  Ha = /=/g,
  Ba = /\?/g,
  ui = /\+/g,
  Da = /%5B/g,
  Ua = /%5D/g,
  fi = /%5E/g,
  Va = /%60/g,
  di = /%7B/g,
  ja = /%7C/g,
  hi = /%7D/g,
  Ka = /%20/g;
function Xr(e) {
  return encodeURI("" + e)
    .replace(ja, "|")
    .replace(Da, "[")
    .replace(Ua, "]");
}
function qa(e) {
  return Xr(e).replace(di, "{").replace(hi, "}").replace(fi, "^");
}
function Mr(e) {
  return Xr(e)
    .replace(ui, "%2B")
    .replace(Ka, "+")
    .replace(ai, "%23")
    .replace(Na, "%26")
    .replace(Va, "`")
    .replace(di, "{")
    .replace(hi, "}")
    .replace(fi, "^");
}
function Wa(e) {
  return Mr(e).replace(Ha, "%3D");
}
function Za(e) {
  return Xr(e).replace(ai, "%23").replace(Ba, "%3F");
}
function Ya(e) {
  return e == null ? "" : Za(e).replace(Fa, "%2F");
}
function In(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Qa(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(ui, " "),
      i = s.indexOf("="),
      l = In(i < 0 ? s : s.slice(0, i)),
      c = i < 0 ? null : In(s.slice(i + 1));
    if (l in t) {
      let u = t[l];
      Array.isArray(u) || (u = t[l] = [u]), u.push(c);
    } else t[l] = c;
  }
  return t;
}
function Jo(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = Wa(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Array.isArray(r) ? r.map((s) => s && Mr(s)) : [r && Mr(r)]).forEach(
      (s) => {
        s !== void 0 &&
          ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
      }
    );
  }
  return t;
}
function Ja(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Array.isArray(r)
        ? r.map((o) => (o == null ? null : "" + o))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
function Yt() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function at(e, t, n, r, o) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((i, l) => {
      const c = (p) => {
          p === !1
            ? l(Ht(4, { from: n, to: t }))
            : p instanceof Error
            ? l(p)
            : xa(p)
            ? l(Ht(2, { from: t, to: p }))
            : (s &&
                r.enterCallbacks[o] === s &&
                typeof p == "function" &&
                s.push(p),
              i());
        },
        u = e.call(r && r.instances[o], t, n, c);
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(c)), f.catch((p) => l(p));
    });
}
function or(e, t, n, r) {
  const o = [];
  for (const s of e)
    for (const i in s.components) {
      const l = s.components[i];
      if (!(t !== "beforeRouteEnter" && !s.instances[i]))
        if (Xa(l)) {
          const u = (l.__vccOpts || l)[t];
          u && o.push(at(u, n, r, s, i));
        } else {
          const c = l();
          o.push(() =>
            c.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${s.path}"`)
                );
              const f = oa(u) ? u.default : u;
              s.components[i] = f;
              const h = (f.__vccOpts || f)[t];
              return h && at(h, n, r, s, i)();
            })
          );
        }
    }
  return o;
}
function Xa(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Xo(e) {
  const t = We(Jr),
    n = We(ri),
    r = He(() => t.resolve(ft(e.to))),
    o = He(() => {
      const { matched: c } = r.value,
        { length: u } = c,
        f = c[u - 1],
        p = n.matched;
      if (!f || !p.length) return -1;
      const h = p.findIndex(Ft.bind(null, f));
      if (h > -1) return h;
      const m = Go(c[u - 2]);
      return u > 1 && Go(f) === m && p[p.length - 1].path !== m
        ? p.findIndex(Ft.bind(null, c[u - 2]))
        : h;
    }),
    s = He(() => o.value > -1 && tu(n.params, r.value.params)),
    i = He(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        oi(n.params, r.value.params)
    );
  function l(c = {}) {
    return eu(c)
      ? t[ft(e.replace) ? "replace" : "push"](ft(e.to)).catch(rn)
      : Promise.resolve();
  }
  return {
    route: r,
    href: He(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: l,
  };
}
const Ga = et({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Xo,
    setup(e, { slots: t }) {
      const n = pn(Xo(e)),
        { options: r } = We(Jr),
        o = He(() => ({
          [es(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [es(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : Yr(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              s
            );
      };
    },
  }),
  kr = Ga;
function eu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function tu(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (
      !Array.isArray(o) ||
      o.length !== r.length ||
      r.some((s, i) => s !== o[i])
    )
      return !1;
  }
  return !0;
}
function Go(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const es = (e, t, n) => (e != null ? e : t != null ? t : n),
  nu = et({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = We(Er),
        o = He(() => e.route || r.value),
        s = We(Do, 0),
        i = He(() => o.value.matched[s]);
      En(Do, s + 1), En(ra, i), En(Er, o);
      const l = Et();
      return (
        At(
          () => [l.value, i.value, e.name],
          ([c, u, f], [p, h, m]) => {
            u &&
              ((u.instances[f] = c),
              h &&
                h !== u &&
                c &&
                c === p &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !Ft(u, h) || !p) &&
                (u.enterCallbacks[f] || []).forEach((C) => C(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = o.value,
            u = i.value,
            f = u && u.components[e.name],
            p = e.name;
          if (!f) return ts(n.default, { Component: f, route: c });
          const h = u.props[e.name],
            m = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                ? h(c)
                : h
              : null,
            $ = Yr(
              f,
              se({}, m, t, {
                onVnodeUnmounted: (P) => {
                  P.component.isUnmounted && (u.instances[p] = null);
                },
                ref: l,
              })
            );
          return ts(n.default, { Component: $, route: c }) || $;
        }
      );
    },
  });
function ts(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const pi = nu;
function ru(e) {
  const t = $a(e.routes, e),
    n = e.parseQuery || Qa,
    r = e.stringifyQuery || Jo,
    o = e.history,
    s = Yt(),
    i = Yt(),
    l = Yt(),
    c = rl(st);
  let u = st;
  $t &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = nr.bind(null, (_) => "" + _),
    p = nr.bind(null, Ya),
    h = nr.bind(null, In);
  function m(_, O) {
    let A, z;
    return (
      ii(_) ? ((A = t.getRecordMatcher(_)), (z = O)) : (z = _), t.addRoute(z, A)
    );
  }
  function C(_) {
    const O = t.getRecordMatcher(_);
    O && t.removeRoute(O);
  }
  function $() {
    return t.getRoutes().map((_) => _.record);
  }
  function P(_) {
    return !!t.getRecordMatcher(_);
  }
  function k(_, O) {
    if (((O = se({}, O || c.value)), typeof _ == "string")) {
      const K = rr(n, _, O.path),
        a = t.resolve({ path: K.path }, O),
        d = o.createHref(K.fullPath);
      return se(K, a, {
        params: h(a.params),
        hash: In(K.hash),
        redirectedFrom: void 0,
        href: d,
      });
    }
    let A;
    if ("path" in _) A = se({}, _, { path: rr(n, _.path, O.path).path });
    else {
      const K = se({}, _.params);
      for (const a in K) K[a] == null && delete K[a];
      (A = se({}, _, { params: p(_.params) })), (O.params = p(O.params));
    }
    const z = t.resolve(A, O),
      ne = _.hash || "";
    z.params = f(h(z.params));
    const ce = la(r, se({}, _, { hash: qa(ne), path: z.path })),
      Z = o.createHref(ce);
    return se(
      { fullPath: ce, hash: ne, query: r === Jo ? Ja(_.query) : _.query || {} },
      z,
      { redirectedFrom: void 0, href: Z }
    );
  }
  function B(_) {
    return typeof _ == "string" ? rr(n, _, c.value.path) : se({}, _);
  }
  function q(_, O) {
    if (u !== _) return Ht(8, { from: O, to: _ });
  }
  function W(_) {
    return he(_);
  }
  function ee(_) {
    return W(se(B(_), { replace: !0 }));
  }
  function ae(_) {
    const O = _.matched[_.matched.length - 1];
    if (O && O.redirect) {
      const { redirect: A } = O;
      let z = typeof A == "function" ? A(_) : A;
      return (
        typeof z == "string" &&
          ((z = z.includes("?") || z.includes("#") ? (z = B(z)) : { path: z }),
          (z.params = {})),
        se({ query: _.query, hash: _.hash, params: _.params }, z)
      );
    }
  }
  function he(_, O) {
    const A = (u = k(_)),
      z = c.value,
      ne = _.state,
      ce = _.force,
      Z = _.replace === !0,
      K = ae(A);
    if (K) return he(se(B(K), { state: ne, force: ce, replace: Z }), O || A);
    const a = A;
    a.redirectedFrom = O;
    let d;
    return (
      !ce &&
        ca(r, z, A) &&
        ((d = Ht(16, { to: a, from: z })), kt(z, z, !0, !1)),
      (d ? Promise.resolve(d) : Y(a, z))
        .catch((g) => (it(g) ? (it(g, 2) ? g : Pe(g)) : le(g, a, z)))
        .then((g) => {
          if (g) {
            if (it(g, 2))
              return he(
                se(B(g.to), { state: ne, force: ce, replace: Z }),
                O || a
              );
          } else g = ue(a, z, !0, Z, ne);
          return G(a, z, g), g;
        })
    );
  }
  function U(_, O) {
    const A = q(_, O);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function Y(_, O) {
    let A;
    const [z, ne, ce] = ou(_, O);
    A = or(z.reverse(), "beforeRouteLeave", _, O);
    for (const K of z)
      K.leaveGuards.forEach((a) => {
        A.push(at(a, _, O));
      });
    const Z = U.bind(null, _, O);
    return (
      A.push(Z),
      Tt(A)
        .then(() => {
          A = [];
          for (const K of s.list()) A.push(at(K, _, O));
          return A.push(Z), Tt(A);
        })
        .then(() => {
          A = or(ne, "beforeRouteUpdate", _, O);
          for (const K of ne)
            K.updateGuards.forEach((a) => {
              A.push(at(a, _, O));
            });
          return A.push(Z), Tt(A);
        })
        .then(() => {
          A = [];
          for (const K of _.matched)
            if (K.beforeEnter && !O.matched.includes(K))
              if (Array.isArray(K.beforeEnter))
                for (const a of K.beforeEnter) A.push(at(a, _, O));
              else A.push(at(K.beforeEnter, _, O));
          return A.push(Z), Tt(A);
        })
        .then(
          () => (
            _.matched.forEach((K) => (K.enterCallbacks = {})),
            (A = or(ce, "beforeRouteEnter", _, O)),
            A.push(Z),
            Tt(A)
          )
        )
        .then(() => {
          A = [];
          for (const K of i.list()) A.push(at(K, _, O));
          return A.push(Z), Tt(A);
        })
        .catch((K) => (it(K, 8) ? K : Promise.reject(K)))
    );
  }
  function G(_, O, A) {
    for (const z of l.list()) z(_, O, A);
  }
  function ue(_, O, A, z, ne) {
    const ce = q(_, O);
    if (ce) return ce;
    const Z = O === st,
      K = $t ? history.state : {};
    A &&
      (z || Z
        ? o.replace(_.fullPath, se({ scroll: Z && K && K.scroll }, ne))
        : o.push(_.fullPath, ne)),
      (c.value = _),
      kt(_, O, A, Z),
      Pe();
  }
  let S;
  function fe() {
    S ||
      (S = o.listen((_, O, A) => {
        const z = k(_),
          ne = ae(z);
        if (ne) {
          he(se(ne, { replace: !0 }), z).catch(rn);
          return;
        }
        u = z;
        const ce = c.value;
        $t && ma(jo(ce.fullPath, A.delta), Yn()),
          Y(z, ce)
            .catch((Z) =>
              it(Z, 12)
                ? Z
                : it(Z, 2)
                ? (he(Z.to, z)
                    .then((K) => {
                      it(K, 20) &&
                        !A.delta &&
                        A.type === hn.pop &&
                        o.go(-1, !1);
                    })
                    .catch(rn),
                  Promise.reject())
                : (A.delta && o.go(-A.delta, !1), le(Z, z, ce))
            )
            .then((Z) => {
              (Z = Z || ue(z, ce, !1)),
                Z &&
                  (A.delta
                    ? o.go(-A.delta, !1)
                    : A.type === hn.pop && it(Z, 20) && o.go(-1, !1)),
                G(z, ce, Z);
            })
            .catch(rn);
      }));
  }
  let xe = Yt(),
    Ye = Yt(),
    pe;
  function le(_, O, A) {
    Pe(_);
    const z = Ye.list();
    return (
      z.length ? z.forEach((ne) => ne(_, O, A)) : console.error(_),
      Promise.reject(_)
    );
  }
  function te() {
    return pe && c.value !== st
      ? Promise.resolve()
      : new Promise((_, O) => {
          xe.add([_, O]);
        });
  }
  function Pe(_) {
    return (
      pe ||
        ((pe = !_),
        fe(),
        xe.list().forEach(([O, A]) => (_ ? A(_) : O())),
        xe.reset()),
      _
    );
  }
  function kt(_, O, A, z) {
    const { scrollBehavior: ne } = e;
    if (!$t || !ne) return Promise.resolve();
    const ce =
      (!A && _a(jo(_.fullPath, 0))) ||
      ((z || !A) && history.state && history.state.scroll) ||
      null;
    return Dn()
      .then(() => ne(_, O, ce))
      .then((Z) => Z && ga(Z))
      .catch((Z) => le(Z, _, O));
  }
  const Qe = (_) => o.go(_);
  let Ue;
  const Ie = new Set();
  return {
    currentRoute: c,
    addRoute: m,
    removeRoute: C,
    hasRoute: P,
    getRoutes: $,
    resolve: k,
    options: e,
    push: W,
    replace: ee,
    go: Qe,
    back: () => Qe(-1),
    forward: () => Qe(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: Ye.add,
    isReady: te,
    install(_) {
      const O = this;
      _.component("RouterLink", kr),
        _.component("RouterView", pi),
        (_.config.globalProperties.$router = O),
        Object.defineProperty(_.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => ft(c),
        }),
        $t &&
          !Ue &&
          c.value === st &&
          ((Ue = !0), W(o.location).catch((ne) => {}));
      const A = {};
      for (const ne in st) A[ne] = He(() => c.value[ne]);
      _.provide(Jr, O), _.provide(ri, pn(A)), _.provide(Er, c);
      const z = _.unmount;
      Ie.add(_),
        (_.unmount = function () {
          Ie.delete(_),
            Ie.size < 1 &&
              ((u = st),
              S && S(),
              (S = null),
              (c.value = st),
              (Ue = !1),
              (pe = !1)),
            z();
        });
    },
  };
}
function Tt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function ou(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((u) => Ft(u, l)) ? r.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((u) => Ft(u, c)) || o.push(c));
  }
  return [n, r, o];
}
const $e = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
const gi = (e) => (_l("data-v-10e68d67"), (e = e()), vl(), e),
  su = { class: "greetings" },
  iu = gi(() =>
    R(
      "h1",
      { class: "accent" },
      [
        L(" Hi. I'm"),
        R("br"),
        L(" Thomas Kam."),
        R("br"),
        L(" I make things. "),
      ],
      -1
    )
  ),
  lu = gi(() => R("h3", null, "Websites. Apps. Other stuff.", -1)),
  cu = [iu, lu],
  au = et({
    __name: "TitleBar",
    setup(e) {
      return (t, n) => (_e(), Ee("div", su, cu));
    },
  });
const uu = $e(au, [["__scopeId", "data-v-10e68d67"]]);
const fu = { class: "wrapper" },
  du = L("Contact Me"),
  hu = L("My Works"),
  pu = et({
    __name: "App",
    setup(e) {
      let t = !1;
      Vt(() => {
        const i = window.matchMedia("(prefers-color-scheme: dark)");
        i.matches && ((t = !0), s()),
          i.addEventListener("change", (l) => {
            (t = !!l.matches), s();
          });
      }),
        jt(() => {});
      let n = 0,
        r = 160;
      const o = Et({ background: "#111" }),
        s = () => {
          const i = 45 + n * 5;
          if (t) {
            r = 160;
            const l = r + n * 3;
            o.value.background = `linear-gradient(${i}deg,  
    hsl(${l + 80}, 86%, 10%) 0%, 
    hsl(${l}, 80%, 15%) 65%)`;
          } else {
            r = 0;
            const l = r + n * 3;
            o.value.background = `linear-gradient(${i}deg,  
    hsl(${l + 80}, 86%, 89%) 0%, 
    hsl(${l}, 80%, 70%) 65%)`;
          }
        };
      return (
        s(),
        setInterval(() => {
          (n += 0.1), s();
        }, 100),
        (i, l) => (
          _e(),
          Ee(
            "div",
            { class: "container", style: On(o.value), onScroll: s },
            [
              R("header", null, [
                R("div", fu, [
                  T(uu),
                  R("nav", null, [
                    T(
                      ft(kr),
                      { to: "/", class: sn("pill") },
                      { default: H(() => [du]), _: 1 }
                    ),
                    T(
                      ft(kr),
                      { to: "/works", class: sn("pill") },
                      { default: H(() => [hu]), _: 1 }
                    ),
                  ]),
                ]),
              ]),
              T(ft(pi)),
            ],
            36
          )
        )
      );
    },
  }),
  gu = "modulepreload",
  ns = {},
  mu = "/profile/",
  _u = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${mu}${r}`), r in ns)) return;
            ns[r] = !0;
            const o = r.endsWith(".css"),
              s = o ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${r}"]${s}`)) return;
            const i = document.createElement("link");
            if (
              ((i.rel = o ? "stylesheet" : gu),
              o || ((i.as = "script"), (i.crossOrigin = "")),
              (i.href = r),
              document.head.appendChild(i),
              o)
            )
              return new Promise((l, c) => {
                i.addEventListener("load", l),
                  i.addEventListener("error", () =>
                    c(new Error(`Unable to preload CSS for ${r}`))
                  );
              });
          })
        ).then(() => t());
  };
const vu = {},
  bu = { class: "item" },
  yu = { class: "details" };
function wu(e, t) {
  return (
    _e(),
    Ee("div", bu, [
      R("i", null, [zt(e.$slots, "icon", {}, void 0, !0)]),
      R("div", yu, [
        R("h3", null, [zt(e.$slots, "heading", {}, void 0, !0)]),
        zt(e.$slots, "default", {}, void 0, !0),
      ]),
    ])
  );
}
const Je = $e(vu, [
  ["render", wu],
  ["__scopeId", "data-v-2b2998ee"],
]);
const xu = {},
  Cu = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    class: "iconify iconify--mdi",
    width: "24",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24",
  },
  Eu = R(
    "path",
    {
      d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  Au = [Eu];
function Mu(e, t) {
  return _e(), Ee("svg", Cu, Au);
}
const ku = $e(xu, [["render", Mu]]);
const Pu = {},
  Tu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "20",
    fill: "currentColor",
  },
  Ru = R(
    "path",
    {
      d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z",
    },
    null,
    -1
  ),
  Su = [Ru];
function $u(e, t) {
  return _e(), Ee("svg", Tu, Su);
}
const Iu = $e(Pu, [["render", $u]]);
const Ou = {},
  Lu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
  },
  zu = R(
    "path",
    {
      d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z",
    },
    null,
    -1
  ),
  Nu = [zu];
function Fu(e, t) {
  return _e(), Ee("svg", Lu, Nu);
}
const Hu = $e(Ou, [["render", Fu]]);
const Bu = {},
  Du = {
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Uu = R(
    "path",
    {
      d: "M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75Zm-2.501 14a.75.75 0 0 1 .002 1.5l-2.5.004a.75.75 0 0 1-.002-1.5l2.5-.004Z",
    },
    null,
    -1
  ),
  Vu = [Uu];
function ju(e, t) {
  return _e(), Ee("svg", Du, Vu);
}
const Ku = $e(Bu, [["render", ju]]);
const qu = {},
  Wu = {
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Zu = R(
    "path",
    { d: "M10.75 5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" },
    null,
    -1
  ),
  Yu = R(
    "path",
    {
      d: "M4 5.75A3.75 3.75 0 0 1 7.75 2h8.5A3.75 3.75 0 0 1 20 5.75V9.5h1.227a.75.75 0 0 1 0 1.5H20v8.75a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 15 19.75V18.5H9v1.25a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 4 19.75V11H2.75a.75.75 0 0 1 0-1.5H4V5.75ZM16.5 18.5v1.25c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V18.5h-2Zm-11 0v1.25c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V18.5h-2Zm2.25-15A2.25 2.25 0 0 0 5.5 5.75V12h13V5.75a2.25 2.25 0 0 0-2.25-2.25h-8.5ZM9 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    },
    null,
    -1
  ),
  Qu = [Zu, Yu];
function Ju(e, t) {
  return _e(), Ee("svg", Wu, Qu);
}
const Xu = $e(qu, [["render", Ju]]);
const Gu = {},
  ef = {
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
  tf = R(
    "path",
    {
      d: "M12.002 4v6.251a.75.75 0 0 1-1.5 0V5.226a.493.493 0 0 0-.498-.478.527.527 0 0 0-.504.504v7.499a.75.75 0 0 1-1.295.515v-.001l-.004-.003a4.386 4.386 0 0 0-.526-.439c-.35-.249-.808-.495-1.302-.582-.537-.094-1.047-.036-1.385.139a.819.819 0 0 0-.446.528l1.659 1.247a.74.74 0 0 1 .08.068l2.174 2.173a12.262 12.262 0 0 1 2.303 3.193c.28.559.85.911 1.475.911h2.728c.571 0 1.068-.272 1.325-.713C17.022 18.527 18 16.5 18 14.754V7.002a.5.5 0 0 0-.501-.5.499.499 0 0 0-.503.5v3.5a.75.75 0 0 1-1.5 0v-5.25A.495.495 0 0 0 15 4.748c-.287 0-.5.226-.5.504v5a.75.75 0 0 1-1.5 0V3.998c0-.272-.212-.5-.499-.5a.49.49 0 0 0-.5.5Zm-1.989-.751c.212 0 .413.034.6.093l-.6-.093Zm.6.093A1.977 1.977 0 0 1 12.503 2c.915 0 1.622.586 1.885 1.341.19-.06.395-.092.612-.092 1.108 0 1.896.855 1.987 1.817.162-.041.333-.064.512-.064 1.17 0 2.001.96 2.001 2v7.752c0 2.18-1.171 4.51-1.918 5.79-.557.952-1.58 1.456-2.621 1.456h-2.728a3.149 3.149 0 0 1-2.817-1.74 10.762 10.762 0 0 0-2.02-2.803L5.256 15.32 3.3 13.85a.75.75 0 0 1-.299-.6c0-1.06.531-1.806 1.3-2.203.715-.37 1.582-.414 2.332-.283.519.091.983.284 1.368.495V5.252c0-1.06.888-2.01 2.013-2.003",
    },
    null,
    -1
  ),
  nf = [tf];
function rf(e, t) {
  return _e(), Ee("svg", ef, nf);
}
const of = $e(Gu, [["render", rf]]);
const sf = {},
  lf = {
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
  cf = R(
    "path",
    {
      d: "M18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h12.5a2.25 2.25 0 0 1 2.245 2.096L19 6.25V7h.75a2.25 2.25 0 0 1 2.245 2.096L22 9.25v7.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25h13.5Zm-13.5-1.5h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-7.5a.75.75 0 0 0-.648-.743L19.75 8.5H19v7.75a.75.75 0 0 1-.648.743L18.25 17a.75.75 0 0 1-.743-.648l-.007-.102v-10a.75.75 0 0 0-.648-.743L16.75 5.5H4.25a.75.75 0 0 0-.743.648L3.5 6.25v10.5a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5-13.5Zm6.996-4h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.493l.102-.007h3.006-3.006Zm-3.003-3.495a.75.75 0 0 1 .75.75v3.495a.75.75 0 0 1-.75.75H5.748a.75.75 0 0 1-.75-.75v-3.495a.75.75 0 0 1 .75-.75h3.495Zm-.75 1.5H6.498V14.5h1.995v-1.995Zm3.753-1.5h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.494l.102-.006h3.006-3.006ZM5.748 7.502h9.504a.75.75 0 0 1 .102 1.494l-.102.006H5.748a.75.75 0 0 1-.102-1.493l.102-.007h9.504-9.504Z",
    },
    null,
    -1
  ),
  af = [cf];
function uf(e, t) {
  return _e(), Ee("svg", lf, af);
}
const ff = $e(sf, [["render", uf]]);
const df = { class: "item" },
  hf = et({
    __name: "PillButton",
    props: { bgColor: null },
    setup(e) {
      const t = e;
      return (
        Vc((n) => ({ ad45d4e8: t.bgColor })),
        (n, r) => (
          _e(),
          Ee("div", df, [R("p", null, [zt(n.$slots, "name", {}, void 0, !0)])])
        )
      );
    },
  });
const ve = $e(hf, [["__scopeId", "data-v-bf672270"]]),
  pf =
    (() => `:root{--vt-c-white: #ffffff;--vt-c-white-soft: #f8f8f8;--vt-c-white-mute: #f2f2f2;--vt-c-black: #181818;--vt-c-black-soft: #222222;--vt-c-black-mute: #282828;--vt-c-indigo: #2c3e50;--vt-c-divider-light-1: rgba(60, 60, 60, .29);--vt-c-divider-light-2: rgba(60, 60, 60, .12);--vt-c-divider-dark-1: rgba(84, 84, 84, .65);--vt-c-divider-dark-2: rgba(84, 84, 84, .48);--vt-c-text-light-1: var(--vt-c-indigo);--vt-c-text-light-2: rgba(60, 60, 60, .66);--vt-c-text-dark-1: var(--vt-c-white);--vt-c-text-dark-2: rgba(235, 235, 235, .64)}:root{--color-background: var(--vt-c-white);--color-background-soft: var(--vt-c-white-soft);--color-background-mute: var(--vt-c-white-mute);--color-border: var(--vt-c-divider-light-2);--color-border-hover: var(--vt-c-divider-light-1);--color-heading: var(--vt-c-text-light-1);--color-text: var(--vt-c-text-light-1);--section-gap: 160px;--color-accent: hsl(0, 95%, 25%);--color-accent-border: hsl(0, 95%, 25%);--color-accent-bg: hsla(0, 95%, 25%,.2)}@media (prefers-color-scheme: dark){:root{--color-background: var(--vt-c-black);--color-background-soft: var(--vt-c-black-soft);--color-background-mute: var(--vt-c-black-mute);--color-border: var(--vt-c-divider-dark-2);--color-border-hover: var(--vt-c-divider-dark-1);--color-heading: var(--vt-c-text-dark-1);--color-text: var(--vt-c-text-dark-2);--color-accent: hsl(124, 100%, 79%);--color-accent-border: hsl(124, 100%, 25%);--color-accent-bg: hsla(124, 100%, 25%,.5)}}*,*:before,*:after{box-sizing:border-box;margin:0;position:relative;font-weight:400}body{min-height:100vh;color:var(--color-text);background:var(--color-background);transition:color .5s,background-color .5s;line-height:1.6;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
`)(),
  gf = "/profile/assets/logo.da9b9095.svg",
  mf = "/profile/assets/sc_bus.bce0dd46.png",
  _f = "/profile/assets/sc_cr1.00b32afd.png",
  vf = "/profile/assets/sc_duty.79620e7a.png",
  bf = "/profile/assets/sc_nsw.cca90de8.png";
const yf = et({
    props: ["img"],
    setup() {
      const e = (o) =>
          new URL(
            {
              "../../src/assets/base.css": pf,
              "../../src/assets/logo.svg": gf,
              "../../src/assets/sc_bus.png": mf,
              "../../src/assets/sc_cr1.png": _f,
              "../../src/assets/sc_duty.png": vf,
              "../../src/assets/sc_nsw.png": bf,
            }[`../../src/assets/${o}`],
            self.location
          ).href,
        t = Et(!1);
      function n() {
        t.value = !0;
      }
      function r() {
        t.value = !1;
      }
      return { isShow: t, showModal: n, closeModal: r, getImageUrl: e };
    },
  }),
  wf = ["src"],
  xf = { class: "modal" },
  Cf = ["src"];
function Ef(e, t, n, r, o, s) {
  const i = Bl("Modal");
  return (
    _e(),
    Ee(
      Me,
      null,
      [
        R(
          "a",
          {
            onClick:
              t[0] || (t[0] = (...l) => e.showModal && e.showModal(...l)),
          },
          [
            R(
              "img",
              { class: "thumbnail", src: e.getImageUrl(e.img) },
              null,
              8,
              wf
            ),
          ]
        ),
        T(
          i,
          {
            modelValue: e.isShow,
            "onUpdate:modelValue": t[2] || (t[2] = (l) => (e.isShow = l)),
            close: e.closeModal,
          },
          {
            default: H(() => [
              R("div", xf, [
                R(
                  "button",
                  {
                    class: "close-button",
                    onClick:
                      t[1] ||
                      (t[1] = (...l) => e.closeModal && e.closeModal(...l)),
                  },
                  "X"
                ),
                R(
                  "img",
                  { class: "popupImg", src: e.getImageUrl(e.img) },
                  null,
                  8,
                  Cf
                ),
              ]),
            ]),
            _: 1,
          },
          8,
          ["modelValue", "close"]
        ),
      ],
      64
    )
  );
}
const wn = $e(yf, [
  ["render", Ef],
  ["__scopeId", "data-v-ecece732"],
]);
const Af = {},
  Mf = {
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
  kf = R(
    "path",
    {
      d: "M12 4C9.238 4 7 6.238 7 9a1 1 0 0 0 2 0c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .816-.199 1.294-.438 1.629-.262.365-.625.638-1.128.985l-.116.078c-.447.306-1.023.699-1.469 1.247-.527.648-.849 1.467-.849 2.561v.5a1 1 0 1 0 2 0v-.5c0-.656.178-1.024.4-1.299.257-.314.603-.552 1.114-.903l.053-.037c.496-.34 1.133-.786 1.62-1.468C16.7 11.081 17 10.183 17 9c0-2.762-2.238-5-5-5ZM12 21.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    },
    null,
    -1
  ),
  Pf = [kf];
function Tf(e, t) {
  return _e(), Ee("svg", Mf, Pf);
}
const Rf = $e(Af, [["render", Tf]]);
const Sf = {},
  $f = {
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
  If = R(
    "path",
    {
      d: "M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.918a2.75 2.75 0 0 1-.513 1.599C17.945 20.929 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h11.501ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z",
    },
    null,
    -1
  ),
  Of = [If];
function Lf(e, t) {
  return _e(), Ee("svg", $f, Of);
}
const zf = $e(Sf, [["render", Lf]]);
const Nf = L("TTC bus app (in development)"),
  Ff = L("React"),
  Hf = L("API"),
  Bf = R(
    "p",
    null,
    " Sometimes, preexisting solutions are just not good enough. ",
    -1
  ),
  Df = R("br", null, null, -1),
  Uf = L(" Available "),
  Vf = R(
    "a",
    {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://www.linkedin.com/in/kamkalun/",
    },
    "soon",
    -1
  ),
  jf = L(". "),
  Kf = L("Personal Profile"),
  qf = L("VueJS"),
  Wf = L("CSS"),
  Zf = R(
    "p",
    null,
    [
      L(" Sometimes I discover cool new tools I want to learn. "),
      R("br"),
      L("And the best way to learn something is to utilize it. "),
    ],
    -1
  ),
  Yf = R("br", null, null, -1),
  Qf = L(" You are viewing it now. "),
  Jf = L("HKBus.app"),
  Xf = L("React"),
  Gf = L("API"),
  ed = R(
    "p",
    null,
    [
      L(
        " Working with other passionate people, this is a web app showing bus arrival times. Sleek and quick, open-source and no ads. "
      ),
      R("br"),
      L("Afterall, we want to see when the buses arrive too. "),
    ],
    -1
  ),
  td = R("br", null, null, -1),
  nd = L(" Available "),
  rd = R(
    "a",
    {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://hkbus.app/en",
    },
    "online",
    -1
  ),
  od = L(". "),
  sd = L("Duty Robin"),
  id = L("Flutter"),
  ld = R(
    "p",
    null,
    " Finally, an app that helps first-line workers adding and visualizing their shifting schedules. (You won\u2019t believe how many workarounds we needed to come up with!) ",
    -1
  ),
  cd = R("br", null, null, -1),
  ad = R(
    "p",
    null,
    [
      L(" Available on "),
      R(
        "a",
        {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://play.google.com/store/apps/details?id=com.thomassth.dutyrobin",
        },
        "Android"
      ),
      L(". iOS coming soon. "),
    ],
    -1
  ),
  ud = L(
    "Promoting Students\u2019 Mental Health And Healthy Living In Schools"
  ),
  fd = L("jQuery"),
  dd = L("HTML5"),
  hd = L("CSS"),
  pd = L("JavaScript"),
  gd = R(
    "p",
    null,
    [
      L(
        " A COVID support project for nsw studnets, Working with The University of Newcastle."
      ),
      R("br"),
      L(
        " with useful information to maintain good hygiene and mental health during lockdown."
      ),
      R("br"),
      L("Includes an interactive quiz for mental health self-check. "),
    ],
    -1
  ),
  md = R("br", null, null, -1),
  _d = R(
    "p",
    null,
    [
      L(" Available "),
      R(
        "a",
        {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://nsw-students-mental-health.glitch.me/",
        },
        "online"
      ),
      L(". "),
    ],
    -1
  ),
  vd = L("PHP"),
  bd = L("Anyone In There?"),
  yd = R(
    "p",
    null,
    [
      L(" Tiny web app. Indicates a room is occupied or not (manually)."),
      R("br"),
      L(" Ran on Heroku. Currently defunct as the organisation shut down. "),
    ],
    -1
  ),
  wd = L("Podcast to video"),
  xd = L("C#"),
  Cd = R(
    "p",
    null,
    " UWP wrapper for an FFMPEG formula. Merging 1 audio and 1 image to 1 video (ie. Podcast publishing). ",
    -1
  ),
  Ed = R("br", null, null, -1),
  Ad = L("Now on "),
  Md = R(
    "a",
    {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://www.microsoft.com/store/apps/9NZXCK5WDCXC",
    },
    "Microsoft Store",
    -1
  ),
  kd = L(". "),
  Pd = L("News ticker"),
  Td = L("CSS"),
  Rd = L("Local Storage"),
  Sd = R(
    "p",
    null,
    [
      L(
        " A simplistic, beautiful OBS studio plugin, showing news ticker line by line."
      ),
      R("br"),
      L(
        " Instead of slowly scrolling past, each headline is shown for a few seconds, then to the next."
      ),
      R("br"),
      L("Designed to run within OBS's webview with in-browser editor. "),
    ],
    -1
  ),
  $d = R("br", null, null, -1),
  Id = R(
    "a",
    {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://thomassth.github.io/OBS-news-ticker/tickerSet.html",
    },
    "Try it here",
    -1
  ),
  Od = L(". "),
  Ld = L("Location Store"),
  zd = L("React"),
  Nd = L("Location Permission"),
  Fd = L("API"),
  Hd = R(
    "p",
    null,
    " A simple react map app. Capable of finding and storing location info, as well as showing current timezones of each location. ",
    -1
  ),
  Bd = R("br", null, null, -1),
  Dd = R(
    "p",
    null,
    [
      L(" Available "),
      R(
        "a",
        {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://thomassth.github.io/react-place-public/",
        },
        "online"
      ),
      L(". "),
    ],
    -1
  ),
  Ud = R("div", { id: "modals" }, null, -1),
  Vd = et({
    __name: "MainContents",
    setup(e) {
      return (t, n) => (
        _e(),
        Ee(
          Me,
          null,
          [
            T(Je, null, {
              icon: H(() => [T(Rf)]),
              heading: H(() => [Nf]),
              default: H(() => [
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [Ff]), _: 1 }
                ),
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [Hf]), _: 1 }
                ),
                Bf,
                Df,
                Uf,
                Vf,
                jf,
              ]),
              _: 1,
            }),
            T(Je, null, {
              icon: H(() => [T(zf)]),
              heading: H(() => [Kf]),
              default: H(() => [
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [qf]), _: 1 }
                ),
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [Wf]), _: 1 }
                ),
                Zf,
                Yf,
                Qf,
              ]),
              _: 1,
            }),
            T(Je, null, {
              icon: H(() => [T(Xu)]),
              heading: H(() => [Jf]),
              default: H(() => [
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [Xf]), _: 1 }
                ),
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [Gf]), _: 1 }
                ),
                ed,
                T(wn, { img: "sc_bus.png" }),
                td,
                nd,
                rd,
                od,
              ]),
              _: 1,
            }),
            T(Je, null, {
              icon: H(() => [T(Ku)]),
              heading: H(() => [sd]),
              default: H(() => [
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [id]), _: 1 }
                ),
                ld,
                T(wn, { img: "sc_duty.png" }),
                cd,
                ad,
              ]),
              _: 1,
            }),
            T(Je, null, {
              icon: H(() => [T(of)]),
              heading: H(() => [ud]),
              default: H(() => [
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [fd]), _: 1 }
                ),
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [dd]), _: 1 }
                ),
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [hd]), _: 1 }
                ),
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [pd]), _: 1 }
                ),
                gd,
                T(wn, { img: "sc_nsw.png" }),
                md,
                _d,
              ]),
              _: 1,
            }),
            T(Je, null, {
              icon: H(() => [T(Iu)]),
              heading: H(() => [bd]),
              default: H(() => [
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [vd]), _: 1 }
                ),
                yd,
              ]),
              _: 1,
            }),
            T(Je, null, {
              icon: H(() => [T(Hu)]),
              heading: H(() => [wd]),
              default: H(() => [
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [xd]), _: 1 }
                ),
                Cd,
                T(wn, { img: "sc_cr1.png" }),
                Ed,
                Ad,
                Md,
                kd,
              ]),
              _: 1,
            }),
            T(Je, null, {
              icon: H(() => [T(ff)]),
              heading: H(() => [Pd]),
              default: H(() => [
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [Td]), _: 1 }
                ),
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [Rd]), _: 1 }
                ),
                Sd,
                $d,
                Id,
                Od,
              ]),
              _: 1,
            }),
            T(Je, null, {
              icon: H(() => [T(ku)]),
              heading: H(() => [Ld]),
              default: H(() => [
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [zd]), _: 1 }
                ),
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [Nd]), _: 1 }
                ),
                T(
                  ve,
                  { "bg-color": "#00008b69" },
                  { name: H(() => [Fd]), _: 1 }
                ),
                Hd,
                Bd,
                Dd,
              ]),
              _: 1,
            }),
            Ud,
          ],
          64
        )
      );
    },
  }),
  jd = et({
    __name: "HomeView",
    setup(e) {
      return (t, n) => (_e(), Ee("main", null, [T(Vd)]));
    },
  }),
  Kd = ru({
    history: wa("/profile/"),
    routes: [
      { path: "/works", name: "works", component: jd, props: !0 },
      {
        path: "/",
        name: "about",
        component: () =>
          _u(
            () => import("./AboutView.a09af93a.js"),
            ["assets/AboutView.a09af93a.js", "assets/AboutView.360f095b.css"]
          ),
        props: !0,
      },
    ],
  });
const qd = ({ modalRef: e, latest: t, show: n }) => {
    let r;
    function o(i) {
      const l = i.target.closest(`.${Pr}`);
      if (!!t.value && (!l || l !== e.value)) {
        if (l && !l.classList.contains(`${Pr}-show`)) return;
        r = i.target;
      }
    }
    function s(i) {
      i ? e.value && e.value.focus() : r && r.focus();
    }
    Vt(() => {
      document.addEventListener("click", o),
        At(
          () => n.value,
          (i) => {
            Dn(() => s(i));
          },
          { immediate: n.value }
        );
    }),
      jt(() => {
        document.removeEventListener("click", o);
      });
  },
  Wd = ({ close: e, closeClickDimmed: t, closeKeyCode: n, latest: r }) => {
    let o = null;
    function s(c) {
      o = c.target;
    }
    function i(c) {
      t && o === c.target && e.value(), (o = null);
    }
    function l(c) {
      c.keyCode === n && r.value && e.value();
    }
    return (
      Vt(() => {
        n && document.addEventListener("keyup", l);
      }),
      jt(() => {
        n && document.removeEventListener("keyup", l);
      }),
      { onMouseDownDimmed: s, onMouseUpDimmed: i }
    );
  },
  Zd = ({ modalRef: e, show: t }) => {
    const {
        visibleModals: n,
        addVisibleModals: r,
        removeVisibleModals: o,
      } = We(eo),
      s = He(() => {
        const i = [...n.value.values()];
        return !i.length || !e.value ? !1 : i[i.length - 1] === e.value;
      });
    return (
      At(
        () => t.value,
        () => {
          Dn(() => {
            !e.value || (t.value ? r(e.value) : o(e.value));
          });
        },
        { immediate: !0 }
      ),
      { latest: s }
    );
  };
const Gr = et({
  inheritAttrs: !1,
  props: {
    close: { type: Function, default: () => {} },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 },
    options: { type: Object, default: () => ({}) },
  },
  emits: [
    "before-enter",
    "enter",
    "after-enter",
    "enter-cancelled",
    "before-leave",
    "leave",
    "after-leave",
    "leave-cancelled",
  ],
  setup(e, t) {
    const { teleportTarget: n } = We(eo),
      { close: r, disabled: o, options: s, modelValue: i } = il(e),
      l = Et(i.value === void 0 ? !0 : i.value),
      c = Et(null),
      u = Et(!o.value),
      f = {
        transition: 300,
        closeClickDimmed: !0,
        closeKeyCode: 27,
        styleModalContent: {},
        ...s.value,
      };
    At(
      [() => i.value, () => o.value],
      () => {
        const P = i.value && !o.value;
        (u.value = P), i.value && (l.value = i.value);
      },
      { immediate: !0 }
    );
    const { latest: p } = Zd({ modalRef: c, show: u });
    qd({ latest: p, modalRef: c, show: u });
    const { onMouseDownDimmed: h, onMouseUpDimmed: m } = Wd({
      close: r,
      closeClickDimmed: f.closeClickDimmed,
      closeKeyCode: f.closeKeyCode,
      latest: p,
    });
    return {
      CLASS_NAME: Pr,
      emitClose: () => {
        console.warn(`emitClose was deprecated.
https://github.com/hoiheart/vue-universal-modal#usage-modal`),
          r.value && r.value();
      },
      inserted: l,
      latest: p,
      mergeOptions: f,
      modalRef: c,
      onMouseDownDimmed: h,
      onMouseUpDimmed: m,
      onTransitionEmit: {
        beforeEnter: () => t.emit("before-enter"),
        enter: () => t.emit("enter"),
        afterEnter: () => t.emit("after-enter"),
        enterCancelled: () => t.emit("enter-cancelled"),
        beforeLeave: () => t.emit("before-leave"),
        leave: () => t.emit("leave"),
        afterLeave: () => {
          t.emit("after-leave"), i.value === !1 && (l.value = !1);
        },
        leaveCancelled: () => t.emit("leave-cancelled"),
      },
      show: u,
      teleportTarget: n,
      transition: f.transition ? f.transition / 1e3 + "s" : !1,
    };
  },
});
function Yd(e, t, n, r, o, s) {
  return e.inserted
    ? (_e(),
      Wr(
        ac,
        { key: 0, to: e.teleportTarget, disabled: e.disabled },
        [
          T(
            Qr,
            yr({ appear: "", name: e.CLASS_NAME }, Vl(e.onTransitionEmit)),
            {
              default: H(() => {
                let i;
                return [
                  Hl(
                    T(
                      "div",
                      yr(
                        {
                          ref: "modalRef",
                          role: "dialog",
                          tabindex: "-1",
                          "aria-modal": "true",
                          "aria-label": "Modal window",
                          class: [
                            e.CLASS_NAME,
                            { [`${e.CLASS_NAME}-show`]: e.show },
                            { [`${e.CLASS_NAME}-latest`]: e.latest },
                          ],
                          style: { transitionDuration: e.transition },
                        },
                        e.$attrs
                      ),
                      [
                        T(
                          "div",
                          {
                            class: `${e.CLASS_NAME}-content`,
                            style: {
                              transitionDuration: e.transition,
                              ...((i = e.mergeOptions) === null || i === void 0
                                ? void 0
                                : i.styleModalContent),
                            },
                            onMousedown:
                              t[1] ||
                              (t[1] = Jc(
                                (...l) =>
                                  e.onMouseDownDimmed &&
                                  e.onMouseDownDimmed(...l),
                                ["self"]
                              )),
                            onMouseup:
                              t[2] ||
                              (t[2] = (...l) =>
                                e.onMouseUpDimmed && e.onMouseUpDimmed(...l)),
                          },
                          [
                            zt(e.$slots, "default", { emitClose: e.emitClose }),
                            zt(e.$slots, "close"),
                          ],
                          38
                        ),
                      ],
                      16
                    ),
                    [[Xc, e.show]]
                  ),
                ];
              }),
              _: 3,
            },
            16,
            ["name"]
          ),
        ],
        8,
        ["to", "disabled"]
      ))
    : hc("v-if", !0);
}
Gr.render = Yd;
Gr.__file = "src/Modal.vue";
const eo = "VueUniversalModal",
  Pr = "vue-universal-modal",
  Qd = (e, t = {}) => {
    const {
      teleportTarget: n = "",
      teleportComponent: r = "",
      teleportComponentId: o = "",
      modalComponent: s = "Modal",
    } = t;
    if (!n) return console.error("teleportTarget is required.");
    if (r || o)
      return console.error(
        "teleportComponent, teleportComponentId was deprecated. use teleportTarget instead. (https://github.com/hoiheart/vue-universal-modal)"
      );
    const i = Et(new Set()),
      l = (u) => {
        i.value.add(u);
      },
      c = (u) => {
        i.value.delete(u);
      };
    e.provide(eo, {
      teleportTarget: n,
      visibleModals: Hr(i),
      addVisibleModals: l,
      removeVisibleModals: c,
    }),
      e.component(s, Gr);
  };
const Jd = { install: Qd };
const to = ta(pu);
to.use(Kd);
to.use(Jd, { teleportTarget: "#modals" });
to.mount("#app");
export {
  Me as F,
  Je as M,
  ve as P,
  $e as _,
  R as a,
  T as b,
  Ee as c,
  et as d,
  Gd as e,
  L as f,
  Wr as g,
  _e as o,
  Et as r,
  Xd as t,
  H as w,
};
