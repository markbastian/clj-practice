if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var f, aa = this;
function t(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function ga(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
;function ha(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ia(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ja(a, b) {
  null != a && this.append.apply(this, arguments);
}
f = ja.prototype;
f.xa = "";
f.set = function(a) {
  this.xa = "" + a;
};
f.append = function(a, b, c) {
  this.xa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.xa += arguments[d];
    }
  }
  return this;
};
f.clear = function() {
  this.xa = "";
};
f.toString = function() {
  return this.xa;
};
function ka(a, b) {
  a.sort(b || na);
}
function oa(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || na;
  ka(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function na(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;if ("undefined" === typeof qa) {
  var qa = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var ra = null;
if ("undefined" === typeof sa) {
  var sa = null
}
function u(a) {
  return null != a && !1 !== a;
}
function ta(a) {
  return a instanceof Array;
}
function x(a, b) {
  return a[t(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function va(a) {
  return null == a ? null : a.constructor;
}
function y(a, b) {
  var c = va(b), c = u(u(c) ? c.qb : c) ? c.pb : t(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function wa(a) {
  var b = a.pb;
  return u(b) ? b : "" + C(a);
}
var xa = "undefined" !== typeof Symbol && "function" === t(Symbol) ? Symbol.iterator : "@@iterator";
function ya(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Aa = {}, Ba = {}, Ca = function Ca(b) {
  if (b ? b.M : b) {
    return b.M(b);
  }
  var c;
  c = Ca[t(null == b ? null : b)];
  if (!c && (c = Ca._, !c)) {
    throw y("ICounted.-count", b);
  }
  return c.call(null, b);
}, Da = function Da(b, c) {
  if (b ? b.C : b) {
    return b.C(b, c);
  }
  var d;
  d = Da[t(null == b ? null : b)];
  if (!d && (d = Da._, !d)) {
    throw y("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Ga = {}, D = function D() {
  switch(arguments.length) {
    case 2:
      return D.a(arguments[0], arguments[1]);
    case 3:
      return D.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
};
D.a = function(a, b) {
  if (a ? a.O : a) {
    return a.O(a, b);
  }
  var c;
  c = D[t(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw y("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
D.g = function(a, b, c) {
  if (a ? a.S : a) {
    return a.S(a, b, c);
  }
  var d;
  d = D[t(null == a ? null : a)];
  if (!d && (d = D._, !d)) {
    throw y("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
D.r = 3;
var Ha = {}, E = function E(b) {
  if (b ? b.P : b) {
    return b.P(b);
  }
  var c;
  c = E[t(null == b ? null : b)];
  if (!c && (c = E._, !c)) {
    throw y("ISeq.-first", b);
  }
  return c.call(null, b);
}, G = function G(b) {
  if (b ? b.R : b) {
    return b.R(b);
  }
  var c;
  c = G[t(null == b ? null : b)];
  if (!c && (c = G._, !c)) {
    throw y("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Ia = {}, Ja = {}, Ka = function Ka() {
  switch(arguments.length) {
    case 2:
      return Ka.a(arguments[0], arguments[1]);
    case 3:
      return Ka.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
};
Ka.a = function(a, b) {
  if (a ? a.A : a) {
    return a.A(a, b);
  }
  var c;
  c = Ka[t(null == a ? null : a)];
  if (!c && (c = Ka._, !c)) {
    throw y("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ka.g = function(a, b, c) {
  if (a ? a.s : a) {
    return a.s(a, b, c);
  }
  var d;
  d = Ka[t(null == a ? null : a)];
  if (!d && (d = Ka._, !d)) {
    throw y("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ka.r = 3;
var La = function La(b, c, d) {
  if (b ? b.Da : b) {
    return b.Da(b, c, d);
  }
  var e;
  e = La[t(null == b ? null : b)];
  if (!e && (e = La._, !e)) {
    throw y("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Na = {}, Oa = {}, Pa = function Pa(b) {
  if (b ? b.Wa : b) {
    return b.Wa();
  }
  var c;
  c = Pa[t(null == b ? null : b)];
  if (!c && (c = Pa._, !c)) {
    throw y("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Qa = function Qa(b) {
  if (b ? b.Xa : b) {
    return b.Xa();
  }
  var c;
  c = Qa[t(null == b ? null : b)];
  if (!c && (c = Qa._, !c)) {
    throw y("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Ra = function Ra(b) {
  if (b ? b.Fa : b) {
    return b.Fa(b);
  }
  var c;
  c = Ra[t(null == b ? null : b)];
  if (!c && (c = Ra._, !c)) {
    throw y("IStack.-peek", b);
  }
  return c.call(null, b);
}, Sa = function Sa(b) {
  if (b ? b.Ga : b) {
    return b.Ga(b);
  }
  var c;
  c = Sa[t(null == b ? null : b)];
  if (!c && (c = Sa._, !c)) {
    throw y("IStack.-pop", b);
  }
  return c.call(null, b);
}, Ta = {}, Ua = function Ua(b, c, d) {
  if (b ? b.Ya : b) {
    return b.Ya(b, c, d);
  }
  var e;
  e = Ua[t(null == b ? null : b)];
  if (!e && (e = Ua._, !e)) {
    throw y("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, Wa = {}, Xa = function Xa(b) {
  if (b ? b.F : b) {
    return b.F(b);
  }
  var c;
  c = Xa[t(null == b ? null : b)];
  if (!c && (c = Xa._, !c)) {
    throw y("IMeta.-meta", b);
  }
  return c.call(null, b);
}, Ya = {}, Za = function Za(b, c) {
  if (b ? b.J : b) {
    return b.J(b, c);
  }
  var d;
  d = Za[t(null == b ? null : b)];
  if (!d && (d = Za._, !d)) {
    throw y("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, $a = {}, ab = function ab() {
  switch(arguments.length) {
    case 2:
      return ab.a(arguments[0], arguments[1]);
    case 3:
      return ab.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
};
ab.a = function(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = ab[t(null == a ? null : a)];
  if (!c && (c = ab._, !c)) {
    throw y("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
ab.g = function(a, b, c) {
  if (a ? a.I : a) {
    return a.I(a, b, c);
  }
  var d;
  d = ab[t(null == a ? null : a)];
  if (!d && (d = ab._, !d)) {
    throw y("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
ab.r = 3;
var bb = function bb(b, c) {
  if (b ? b.l : b) {
    return b.l(b, c);
  }
  var d;
  d = bb[t(null == b ? null : b)];
  if (!d && (d = bb._, !d)) {
    throw y("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, cb = function cb(b) {
  if (b ? b.v : b) {
    return b.v(b);
  }
  var c;
  c = cb[t(null == b ? null : b)];
  if (!c && (c = cb._, !c)) {
    throw y("IHash.-hash", b);
  }
  return c.call(null, b);
}, db = {}, eb = function eb(b) {
  if (b ? b.B : b) {
    return b.B(b);
  }
  var c;
  c = eb[t(null == b ? null : b)];
  if (!c && (c = eb._, !c)) {
    throw y("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, fb = {}, H = function H(b, c) {
  if (b ? b.fb : b) {
    return b.fb(0, c);
  }
  var d;
  d = H[t(null == b ? null : b)];
  if (!d && (d = H._, !d)) {
    throw y("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, gb = {}, ib = function ib(b, c, d) {
  if (b ? b.u : b) {
    return b.u(b, c, d);
  }
  var e;
  e = ib[t(null == b ? null : b)];
  if (!e && (e = ib._, !e)) {
    throw y("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, jb = function jb(b) {
  if (b ? b.Ea : b) {
    return b.Ea(b);
  }
  var c;
  c = jb[t(null == b ? null : b)];
  if (!c && (c = jb._, !c)) {
    throw y("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, kb = function kb(b, c) {
  if (b ? b.Pa : b) {
    return b.Pa(b, c);
  }
  var d;
  d = kb[t(null == b ? null : b)];
  if (!d && (d = kb._, !d)) {
    throw y("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, lb = function lb(b) {
  if (b ? b.Qa : b) {
    return b.Qa(b);
  }
  var c;
  c = lb[t(null == b ? null : b)];
  if (!c && (c = lb._, !c)) {
    throw y("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, mb = function mb(b, c, d) {
  if (b ? b.Ha : b) {
    return b.Ha(b, c, d);
  }
  var e;
  e = mb[t(null == b ? null : b)];
  if (!e && (e = mb._, !e)) {
    throw y("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, nb = function nb(b, c, d) {
  if (b ? b.eb : b) {
    return b.eb(0, c, d);
  }
  var e;
  e = nb[t(null == b ? null : b)];
  if (!e && (e = nb._, !e)) {
    throw y("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, ob = function ob(b) {
  if (b ? b.ab : b) {
    return b.ab();
  }
  var c;
  c = ob[t(null == b ? null : b)];
  if (!c && (c = ob._, !c)) {
    throw y("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, pb = function pb(b) {
  if (b ? b.Ua : b) {
    return b.Ua(b);
  }
  var c;
  c = pb[t(null == b ? null : b)];
  if (!c && (c = pb._, !c)) {
    throw y("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, qb = function qb(b) {
  if (b ? b.Va : b) {
    return b.Va(b);
  }
  var c;
  c = qb[t(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw y("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, rb = function rb(b) {
  if (b ? b.Ta : b) {
    return b.Ta(b);
  }
  var c;
  c = rb[t(null == b ? null : b)];
  if (!c && (c = rb._, !c)) {
    throw y("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, sb = function sb(b) {
  if (b ? b.Ma : b) {
    return b.Ma(b);
  }
  var c;
  c = sb[t(null == b ? null : b)];
  if (!c && (c = sb._, !c)) {
    throw y("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function tb(a) {
  this.rb = a;
  this.p = 0;
  this.f = 1073741824;
}
tb.prototype.fb = function(a, b) {
  return this.rb.append(b);
};
function vb(a) {
  var b = new ja;
  a.u(null, new tb(b), new wb(null, 5, [xb, !0, yb, !0, zb, !1, Ab, !1, Bb, null], null));
  return "" + C(b);
}
var Cb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Db(a) {
  a = Cb(a | 0, -862048943);
  return Cb(a << 15 | a >>> -15, 461845907);
}
function Eb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Cb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Fb(a, b) {
  var c = (a | 0) ^ b, c = Cb(c ^ c >>> 16, -2048144789), c = Cb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Gb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Eb(c, Db(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Db(a.charCodeAt(a.length - 1)) : b;
  return Fb(b, Cb(2, a.length));
}
var Ib = {}, Jb = 0;
function Kb(a) {
  255 < Jb && (Ib = {}, Jb = 0);
  var b = Ib[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Cb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Ib[a] = b;
    Jb += 1;
  }
  return a = b;
}
function Lb(a) {
  a && (a.f & 4194304 || a.ub) ? a = a.v(null) : "number" === typeof a ? a = (Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Kb(a), 0 !== a && (a = Db(a), a = Eb(0, a), a = Fb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : cb(a);
  return a;
}
function Mb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.vb)) {
    return a.B(null);
  }
  if (ta(a) || "string" === typeof a) {
    return 0 === a.length ? null : new J(a, 0);
  }
  if (x(db, a)) {
    return eb(a);
  }
  throw Error([C(a), C(" is not ISeqable")].join(""));
}
function K(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.Oa)) {
    return a.P(null);
  }
  a = I(a);
  return null == a ? null : E(a);
}
function Nb(a) {
  return null != a ? a && (a.f & 64 || a.Oa) ? a.R(null) : (a = I(a)) ? G(a) : Ob : Ob;
}
function M(a) {
  return null == a ? null : a && (a.f & 128 || a.Na) ? a.Q(null) : I(Nb(a));
}
var N = function N() {
  switch(arguments.length) {
    case 1:
      return N.d(arguments[0]);
    case 2:
      return N.a(arguments[0], arguments[1]);
    default:
      return N.i(arguments[0], arguments[1], new J(Array.prototype.slice.call(arguments, 2), 0));
  }
};
N.d = function() {
  return!0;
};
N.a = function(a, b) {
  return null == a ? null == b : a === b || bb(a, b);
};
N.i = function(a, b, c) {
  for (;;) {
    if (N.a(a, b)) {
      if (M(c)) {
        a = b, b = K(c), c = M(c);
      } else {
        return N.a(b, K(c));
      }
    } else {
      return!1;
    }
  }
};
N.o = function(a) {
  var b = K(a), c = M(a);
  a = K(c);
  c = M(c);
  return N.i(b, a, c);
};
N.r = 2;
function Pb(a) {
  this.m = a;
}
Pb.prototype.next = function() {
  if (null != this.m) {
    var a = K(this.m);
    this.m = M(this.m);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function O(a) {
  return new Pb(I(a));
}
function Qb(a, b) {
  var c = Db(a), c = Eb(0, c);
  return Fb(c, b);
}
function Rb(a) {
  var b = 0, c = 1;
  for (a = I(a);;) {
    if (null != a) {
      b += 1, c = Cb(31, c) + Lb(K(a)) | 0, a = M(a);
    } else {
      return Qb(c, b);
    }
  }
}
var Sb = Qb(1, 0);
function Tb(a) {
  var b = 0, c = 0;
  for (a = I(a);;) {
    if (null != a) {
      b += 1, c = c + Lb(K(a)) | 0, a = M(a);
    } else {
      return Qb(c, b);
    }
  }
}
var Ub = Qb(0, 0);
Ba["null"] = !0;
Ca["null"] = function() {
  return 0;
};
Date.prototype.Ja = !0;
Date.prototype.Ka = function(a, b) {
  return na(this.valueOf(), b.valueOf());
};
Date.prototype.l = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
bb.number = function(a, b) {
  return a === b;
};
Wa["function"] = !0;
Xa["function"] = function() {
  return null;
};
Aa["function"] = !0;
cb._ = function(a) {
  return a[ba] || (a[ba] = ++ea);
};
function Vb(a, b) {
  var c = Ca(a);
  if (0 === c) {
    return b.n ? b.n() : b.call(null);
  }
  for (var d = D.a(a, 0), e = 1;;) {
    if (e < c) {
      var g = D.a(a, e), d = b.a ? b.a(d, g) : b.call(null, d, g), e = e + 1
    } else {
      return d;
    }
  }
}
function Wb(a, b, c) {
  var d = Ca(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var g = D.a(a, c), e = b.a ? b.a(e, g) : b.call(null, e, g);
      c += 1;
    } else {
      return e;
    }
  }
}
function Xb(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.n ? b.n() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var g = a[e], d = b.a ? b.a(d, g) : b.call(null, d, g), e = e + 1
    } else {
      return d;
    }
  }
}
function Yb(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var g = a[c], e = b.a ? b.a(e, g) : b.call(null, e, g);
      c += 1;
    } else {
      return e;
    }
  }
}
function Zb(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var g = a[d];
      c = b.a ? b.a(c, g) : b.call(null, c, g);
      d += 1;
    } else {
      return c;
    }
  }
}
function $b(a) {
  return a ? a.f & 2 || a.ib ? !0 : a.f ? !1 : x(Ba, a) : x(Ba, a);
}
function bc(a) {
  return a ? a.f & 16 || a.bb ? !0 : a.f ? !1 : x(Ga, a) : x(Ga, a);
}
function cc(a, b) {
  this.b = a;
  this.h = b;
}
cc.prototype.Za = function() {
  return this.h < this.b.length;
};
cc.prototype.next = function() {
  var a = this.b[this.h];
  this.h += 1;
  return a;
};
function J(a, b) {
  this.b = a;
  this.h = b;
  this.f = 166199550;
  this.p = 8192;
}
f = J.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.O = function(a, b) {
  var c = b + this.h;
  return c < this.b.length ? this.b[c] : null;
};
f.S = function(a, b, c) {
  a = b + this.h;
  return a < this.b.length ? this.b[a] : c;
};
f.Ma = function() {
  return new cc(this.b, this.h);
};
f.Q = function() {
  return this.h + 1 < this.b.length ? new J(this.b, this.h + 1) : null;
};
f.M = function() {
  return this.b.length - this.h;
};
f.v = function() {
  return Rb(this);
};
f.l = function(a, b) {
  return dc.a ? dc.a(this, b) : dc.call(null, this, b);
};
f.H = function(a, b) {
  return Zb(this.b, b, this.b[this.h], this.h + 1);
};
f.I = function(a, b, c) {
  return Zb(this.b, b, c, this.h);
};
f.P = function() {
  return this.b[this.h];
};
f.R = function() {
  return this.h + 1 < this.b.length ? new J(this.b, this.h + 1) : Ob;
};
f.B = function() {
  return this;
};
f.C = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
J.prototype[xa] = function() {
  return O(this);
};
function ec(a, b) {
  return b < a.length ? new J(a, b) : null;
}
function fc() {
  switch(arguments.length) {
    case 1:
      return ec(arguments[0], 0);
    case 2:
      return ec(arguments[0], arguments[1]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
}
function gc(a) {
  return K(M(a));
}
bb._ = function(a, b) {
  return a === b;
};
var Q = function Q() {
  switch(arguments.length) {
    case 0:
      return Q.n();
    case 1:
      return Q.d(arguments[0]);
    case 2:
      return Q.a(arguments[0], arguments[1]);
    default:
      return Q.i(arguments[0], arguments[1], new J(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Q.n = function() {
  return hc;
};
Q.d = function(a) {
  return a;
};
Q.a = function(a, b) {
  return null != a ? Da(a, b) : Da(Ob, b);
};
Q.i = function(a, b, c) {
  for (;;) {
    if (u(c)) {
      a = Q.a(a, b), b = K(c), c = M(c);
    } else {
      return Q.a(a, b);
    }
  }
};
Q.o = function(a) {
  var b = K(a), c = M(a);
  a = K(c);
  c = M(c);
  return Q.i(b, a, c);
};
Q.r = 2;
function R(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.ib)) {
      a = a.M(null);
    } else {
      if (ta(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (x(Ba, a)) {
            a = Ca(a);
          } else {
            a: {
              a = I(a);
              for (var b = 0;;) {
                if ($b(a)) {
                  a = b + Ca(a);
                  break a;
                }
                a = M(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function ic(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return I(a) ? K(a) : c;
    }
    if (bc(a)) {
      return D.g(a, b, c);
    }
    if (I(a)) {
      var d = M(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function jc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.f & 16 || a.bb)) {
    return a.O(null, b);
  }
  if (ta(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Ga, a)) {
    return D.a(a, b);
  }
  if (a ? a.f & 64 || a.Oa || (a.f ? 0 : x(Ha, a)) : x(Ha, a)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (I(c)) {
            c = K(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (bc(c)) {
          c = D.a(c, d);
          break a;
        }
        if (I(c)) {
          c = M(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  throw Error([C("nth not supported on this type "), C(wa(va(a)))].join(""));
}
function kc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.f & 16 || a.bb)) {
    return a.S(null, b, null);
  }
  if (ta(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Ga, a)) {
    return D.a(a, b);
  }
  if (a ? a.f & 64 || a.Oa || (a.f ? 0 : x(Ha, a)) : x(Ha, a)) {
    return ic(a, b);
  }
  throw Error([C("nth not supported on this type "), C(wa(va(a)))].join(""));
}
function lc(a, b) {
  return null == a ? null : a && (a.f & 256 || a.cb) ? a.A(null, b) : ta(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x(Ja, a) ? Ka.a(a, b) : null;
}
function mc(a, b, c) {
  return null != a ? a && (a.f & 256 || a.cb) ? a.s(null, b, c) : ta(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(Ja, a) ? Ka.g(a, b, c) : c : c;
}
var nc = function nc() {
  switch(arguments.length) {
    case 3:
      return nc.g(arguments[0], arguments[1], arguments[2]);
    default:
      return nc.i(arguments[0], arguments[1], arguments[2], new J(Array.prototype.slice.call(arguments, 3), 0));
  }
};
nc.g = function(a, b, c) {
  if (null != a) {
    a = La(a, b, c);
  } else {
    a: {
      a = [b];
      c = [c];
      b = a.length;
      for (var d = 0, e = jb(oc);;) {
        if (d < b) {
          var g = d + 1, e = e.Ha(null, a[d], c[d]), d = g
        } else {
          a = lb(e);
          break a;
        }
      }
    }
  }
  return a;
};
nc.i = function(a, b, c, d) {
  for (;;) {
    if (a = nc.g(a, b, c), u(d)) {
      b = K(d), c = gc(d), d = M(M(d));
    } else {
      return a;
    }
  }
};
nc.o = function(a) {
  var b = K(a), c = M(a);
  a = K(c);
  var d = M(c), c = K(d), d = M(d);
  return nc.i(b, a, c, d);
};
nc.r = 3;
function pc(a) {
  var b = "function" == t(a);
  return u(b) ? b : a ? u(u(null) ? null : a.hb) ? !0 : a.Ab ? !1 : x(Aa, a) : x(Aa, a);
}
function qc(a, b) {
  this.c = a;
  this.j = b;
  this.p = 0;
  this.f = 393217;
}
f = qc.prototype;
f.call = function() {
  function a(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, A, L, da) {
    a = this.c;
    return rc.La ? rc.La(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, A, L, da) : rc.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, A, L, da);
  }
  function b(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, A, L) {
    a = this;
    return a.c.na ? a.c.na(b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, A, L) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, A, L);
  }
  function c(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, A) {
    a = this;
    return a.c.ma ? a.c.ma(b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, A) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, A);
  }
  function d(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F) {
    a = this;
    return a.c.la ? a.c.la(b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F);
  }
  function e(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B) {
    a = this;
    return a.c.ka ? a.c.ka(b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B);
  }
  function g(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z) {
    a = this;
    return a.c.ja ? a.c.ja(b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z);
  }
  function h(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w) {
    a = this;
    return a.c.ia ? a.c.ia(b, c, d, e, g, h, k, l, m, n, p, q, r, v, w) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w);
  }
  function k(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v) {
    a = this;
    return a.c.ha ? a.c.ha(b, c, d, e, g, h, k, l, m, n, p, q, r, v) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p, q, r, v);
  }
  function l(a, b, c, d, e, g, h, k, l, m, n, p, q, r) {
    a = this;
    return a.c.ga ? a.c.ga(b, c, d, e, g, h, k, l, m, n, p, q, r) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p, q, r);
  }
  function m(a, b, c, d, e, g, h, k, l, m, n, p, q) {
    a = this;
    return a.c.fa ? a.c.fa(b, c, d, e, g, h, k, l, m, n, p, q) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p, q);
  }
  function n(a, b, c, d, e, g, h, k, l, m, n, p) {
    a = this;
    return a.c.ea ? a.c.ea(b, c, d, e, g, h, k, l, m, n, p) : a.c.call(null, b, c, d, e, g, h, k, l, m, n, p);
  }
  function p(a, b, c, d, e, g, h, k, l, m, n) {
    a = this;
    return a.c.da ? a.c.da(b, c, d, e, g, h, k, l, m, n) : a.c.call(null, b, c, d, e, g, h, k, l, m, n);
  }
  function q(a, b, c, d, e, g, h, k, l, m) {
    a = this;
    return a.c.ra ? a.c.ra(b, c, d, e, g, h, k, l, m) : a.c.call(null, b, c, d, e, g, h, k, l, m);
  }
  function r(a, b, c, d, e, g, h, k, l) {
    a = this;
    return a.c.qa ? a.c.qa(b, c, d, e, g, h, k, l) : a.c.call(null, b, c, d, e, g, h, k, l);
  }
  function v(a, b, c, d, e, g, h, k) {
    a = this;
    return a.c.pa ? a.c.pa(b, c, d, e, g, h, k) : a.c.call(null, b, c, d, e, g, h, k);
  }
  function w(a, b, c, d, e, g, h) {
    a = this;
    return a.c.oa ? a.c.oa(b, c, d, e, g, h) : a.c.call(null, b, c, d, e, g, h);
  }
  function z(a, b, c, d, e, g) {
    a = this;
    return a.c.D ? a.c.D(b, c, d, e, g) : a.c.call(null, b, c, d, e, g);
  }
  function B(a, b, c, d, e) {
    a = this;
    return a.c.N ? a.c.N(b, c, d, e) : a.c.call(null, b, c, d, e);
  }
  function F(a, b, c, d) {
    a = this;
    return a.c.g ? a.c.g(b, c, d) : a.c.call(null, b, c, d);
  }
  function L(a, b, c) {
    a = this;
    return a.c.a ? a.c.a(b, c) : a.c.call(null, b, c);
  }
  function da(a, b) {
    a = this;
    return a.c.d ? a.c.d(b) : a.c.call(null, b);
  }
  function Fa(a) {
    a = this;
    return a.c.n ? a.c.n() : a.c.call(null);
  }
  var A = null, A = function(A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va, hb, ub, Hb, ac, zc, Yc, Sd, Ke) {
    switch(arguments.length) {
      case 1:
        return Fa.call(this, A);
      case 2:
        return da.call(this, A, U);
      case 3:
        return L.call(this, A, U, X);
      case 4:
        return F.call(this, A, U, X, Z);
      case 5:
        return B.call(this, A, U, X, Z, ca);
      case 6:
        return z.call(this, A, U, X, Z, ca, fa);
      case 7:
        return w.call(this, A, U, X, Z, ca, fa, la);
      case 8:
        return v.call(this, A, U, X, Z, ca, fa, la, ma);
      case 9:
        return r.call(this, A, U, X, Z, ca, fa, la, ma, pa);
      case 10:
        return q.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua);
      case 11:
        return p.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za);
      case 12:
        return n.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea);
      case 13:
        return m.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma);
      case 14:
        return l.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va);
      case 15:
        return k.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va, hb);
      case 16:
        return h.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va, hb, ub);
      case 17:
        return g.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va, hb, ub, Hb);
      case 18:
        return e.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va, hb, ub, Hb, ac);
      case 19:
        return d.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va, hb, ub, Hb, ac, zc);
      case 20:
        return c.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va, hb, ub, Hb, ac, zc, Yc);
      case 21:
        return b.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va, hb, ub, Hb, ac, zc, Yc, Sd);
      case 22:
        return a.call(this, A, U, X, Z, ca, fa, la, ma, pa, ua, za, Ea, Ma, Va, hb, ub, Hb, ac, zc, Yc, Sd, Ke);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  A.d = Fa;
  A.a = da;
  A.g = L;
  A.N = F;
  A.D = B;
  A.oa = z;
  A.pa = w;
  A.qa = v;
  A.ra = r;
  A.da = q;
  A.ea = p;
  A.fa = n;
  A.ga = m;
  A.ha = l;
  A.ia = k;
  A.ja = h;
  A.ka = g;
  A.la = e;
  A.ma = d;
  A.na = c;
  A.jb = b;
  A.La = a;
  return A;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
f.n = function() {
  return this.c.n ? this.c.n() : this.c.call(null);
};
f.d = function(a) {
  return this.c.d ? this.c.d(a) : this.c.call(null, a);
};
f.a = function(a, b) {
  return this.c.a ? this.c.a(a, b) : this.c.call(null, a, b);
};
f.g = function(a, b, c) {
  return this.c.g ? this.c.g(a, b, c) : this.c.call(null, a, b, c);
};
f.N = function(a, b, c, d) {
  return this.c.N ? this.c.N(a, b, c, d) : this.c.call(null, a, b, c, d);
};
f.D = function(a, b, c, d, e) {
  return this.c.D ? this.c.D(a, b, c, d, e) : this.c.call(null, a, b, c, d, e);
};
f.oa = function(a, b, c, d, e, g) {
  return this.c.oa ? this.c.oa(a, b, c, d, e, g) : this.c.call(null, a, b, c, d, e, g);
};
f.pa = function(a, b, c, d, e, g, h) {
  return this.c.pa ? this.c.pa(a, b, c, d, e, g, h) : this.c.call(null, a, b, c, d, e, g, h);
};
f.qa = function(a, b, c, d, e, g, h, k) {
  return this.c.qa ? this.c.qa(a, b, c, d, e, g, h, k) : this.c.call(null, a, b, c, d, e, g, h, k);
};
f.ra = function(a, b, c, d, e, g, h, k, l) {
  return this.c.ra ? this.c.ra(a, b, c, d, e, g, h, k, l) : this.c.call(null, a, b, c, d, e, g, h, k, l);
};
f.da = function(a, b, c, d, e, g, h, k, l, m) {
  return this.c.da ? this.c.da(a, b, c, d, e, g, h, k, l, m) : this.c.call(null, a, b, c, d, e, g, h, k, l, m);
};
f.ea = function(a, b, c, d, e, g, h, k, l, m, n) {
  return this.c.ea ? this.c.ea(a, b, c, d, e, g, h, k, l, m, n) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n);
};
f.fa = function(a, b, c, d, e, g, h, k, l, m, n, p) {
  return this.c.fa ? this.c.fa(a, b, c, d, e, g, h, k, l, m, n, p) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n, p);
};
f.ga = function(a, b, c, d, e, g, h, k, l, m, n, p, q) {
  return this.c.ga ? this.c.ga(a, b, c, d, e, g, h, k, l, m, n, p, q) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q);
};
f.ha = function(a, b, c, d, e, g, h, k, l, m, n, p, q, r) {
  return this.c.ha ? this.c.ha(a, b, c, d, e, g, h, k, l, m, n, p, q, r) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, r);
};
f.ia = function(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v) {
  return this.c.ia ? this.c.ia(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, r, v);
};
f.ja = function(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w) {
  return this.c.ja ? this.c.ja(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w);
};
f.ka = function(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z) {
  return this.c.ka ? this.c.ka(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z);
};
f.la = function(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B) {
  return this.c.la ? this.c.la(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B);
};
f.ma = function(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F) {
  return this.c.ma ? this.c.ma(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F);
};
f.na = function(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L) {
  return this.c.na ? this.c.na(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L) : this.c.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L);
};
f.jb = function(a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L, da) {
  var Fa = this.c;
  return rc.La ? rc.La(Fa, a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L, da) : rc.call(null, Fa, a, b, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L, da);
};
f.hb = !0;
f.J = function(a, b) {
  return new qc(this.c, b);
};
f.F = function() {
  return this.j;
};
function sc(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.mb || (a.f ? 0 : x(Wa, a)) : x(Wa, a) : b) ? Xa(a) : null;
}
function tc(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.kb ? !0 : a.f ? !1 : x(Na, a) : x(Na, a);
}
function uc(a) {
  return a ? a.f & 16384 || a.xb ? !0 : a.f ? !1 : x(Ta, a) : x(Ta, a);
}
function vc(a) {
  return a ? a.p & 512 || a.sb ? !0 : !1 : !1;
}
function wc(a) {
  var b = [];
  ia(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function xc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var yc = {};
function Ac(a) {
  return u(a) ? !0 : !1;
}
function Bc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (va(a) === va(b)) {
    return a && (a.p & 2048 || a.Ja) ? a.Ka(null, b) : na(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
function Cc(a, b) {
  var c = R(a), d = R(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      a: {
        for (d = 0;;) {
          var e = Bc(jc(a, d), jc(b, d));
          if (0 === e && d + 1 < c) {
            d += 1;
          } else {
            c = e;
            break a;
          }
        }
      }
    }
  }
  return c;
}
function Dc() {
  return N.a(Bc, Bc) ? Bc : function(a, b) {
    var c = Bc.a ? Bc.a(a, b) : Bc.call(null, a, b);
    return "number" === typeof c ? c : u(c) ? -1 : u(Bc.a ? Bc.a(b, a) : Bc.call(null, b, a)) ? 1 : 0;
  };
}
function Ec(a, b) {
  var c = I(b);
  if (c) {
    var d = K(c), c = M(c);
    return Fc ? Fc(a, d, c) : Gc.call(null, a, d, c);
  }
  return a.n ? a.n() : a.call(null);
}
function Hc(a, b, c) {
  for (c = I(c);;) {
    if (c) {
      var d = K(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      c = M(c);
    } else {
      return b;
    }
  }
}
function Gc() {
  switch(arguments.length) {
    case 2:
      return Ic(arguments[0], arguments[1]);
    case 3:
      return Fc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
}
function Ic(a, b) {
  return b && (b.f & 524288 || b.ob) ? b.H(null, a) : ta(b) ? Xb(b, a) : "string" === typeof b ? Xb(b, a) : x($a, b) ? ab.a(b, a) : Ec(a, b);
}
function Fc(a, b, c) {
  return c && (c.f & 524288 || c.ob) ? c.I(null, a, b) : ta(c) ? Yb(c, a, b) : "string" === typeof c ? Yb(c, a, b) : x($a, c) ? ab.g(c, a, b) : Hc(a, b, c);
}
function Jc(a) {
  return a;
}
var Kc = function Kc() {
  switch(arguments.length) {
    case 0:
      return Kc.n();
    case 1:
      return Kc.d(arguments[0]);
    case 2:
      return Kc.a(arguments[0], arguments[1]);
    default:
      return Kc.i(arguments[0], arguments[1], new J(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Kc.n = function() {
  return 0;
};
Kc.d = function(a) {
  return a;
};
Kc.a = function(a, b) {
  return a + b;
};
Kc.i = function(a, b, c) {
  return Fc(Kc, a + b, c);
};
Kc.o = function(a) {
  var b = K(a), c = M(a);
  a = K(c);
  c = M(c);
  return Kc.i(b, a, c);
};
Kc.r = 2;
var Lc = function Lc() {
  switch(arguments.length) {
    case 1:
      return Lc.d(arguments[0]);
    case 2:
      return Lc.a(arguments[0], arguments[1]);
    default:
      return Lc.i(arguments[0], arguments[1], new J(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Lc.d = function(a) {
  return-a;
};
Lc.a = function(a, b) {
  return a - b;
};
Lc.i = function(a, b, c) {
  return Fc(Lc, a - b, c);
};
Lc.o = function(a) {
  var b = K(a), c = M(a);
  a = K(c);
  c = M(c);
  return Lc.i(b, a, c);
};
Lc.r = 2;
function Mc(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.d ? Math.floor.d(c) : Math.floor.call(null, c) : Math.ceil.d ? Math.ceil.d(c) : Math.ceil.call(null, c);
}
function Nc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Oc(a) {
  return 0 === a;
}
var C = function C() {
  switch(arguments.length) {
    case 0:
      return C.n();
    case 1:
      return C.d(arguments[0]);
    default:
      return C.i(arguments[0], new J(Array.prototype.slice.call(arguments, 1), 0));
  }
};
C.n = function() {
  return "";
};
C.d = function(a) {
  return null == a ? "" : ha(a);
};
C.i = function(a, b) {
  for (var c = new ja("" + C(a)), d = b;;) {
    if (u(d)) {
      c = c.append("" + C(K(d))), d = M(d);
    } else {
      return c.toString();
    }
  }
};
C.o = function(a) {
  var b = K(a);
  a = M(a);
  return C.i(b, a);
};
C.r = 1;
function dc(a, b) {
  var c;
  if (b ? b.f & 16777216 || b.wb || (b.f ? 0 : x(fb, b)) : x(fb, b)) {
    if ($b(a) && $b(b) && R(a) !== R(b)) {
      c = !1;
    } else {
      a: {
        c = I(a);
        for (var d = I(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && N.a(K(c), K(d))) {
            c = M(c), d = M(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return Ac(c);
}
function Pc(a, b, c, d, e) {
  this.j = a;
  this.first = b;
  this.ta = c;
  this.count = d;
  this.k = e;
  this.f = 65937646;
  this.p = 8192;
}
f = Pc.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.j;
};
f.Q = function() {
  return 1 === this.count ? null : this.ta;
};
f.M = function() {
  return this.count;
};
f.Fa = function() {
  return this.first;
};
f.Ga = function() {
  return G(this);
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.P = function() {
  return this.first;
};
f.R = function() {
  return 1 === this.count ? Ob : this.ta;
};
f.B = function() {
  return this;
};
f.J = function(a, b) {
  return new Pc(b, this.first, this.ta, this.count, this.k);
};
f.C = function(a, b) {
  return new Pc(this.j, b, this, this.count + 1, null);
};
Pc.prototype[xa] = function() {
  return O(this);
};
function Qc(a) {
  this.j = a;
  this.f = 65937614;
  this.p = 8192;
}
f = Qc.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.j;
};
f.Q = function() {
  return null;
};
f.M = function() {
  return 0;
};
f.Fa = function() {
  return null;
};
f.Ga = function() {
  throw Error("Can't pop empty list");
};
f.v = function() {
  return Sb;
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.P = function() {
  return null;
};
f.R = function() {
  return Ob;
};
f.B = function() {
  return null;
};
f.J = function(a, b) {
  return new Qc(b);
};
f.C = function(a, b) {
  return new Pc(this.j, b, null, 1, null);
};
var Ob = new Qc(null);
Qc.prototype[xa] = function() {
  return O(this);
};
function Rc(a, b, c, d) {
  this.j = a;
  this.first = b;
  this.ta = c;
  this.k = d;
  this.f = 65929452;
  this.p = 8192;
}
f = Rc.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.j;
};
f.Q = function() {
  return null == this.ta ? null : I(this.ta);
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.P = function() {
  return this.first;
};
f.R = function() {
  return null == this.ta ? Ob : this.ta;
};
f.B = function() {
  return this;
};
f.J = function(a, b) {
  return new Rc(b, this.first, this.ta, this.k);
};
f.C = function(a, b) {
  return new Rc(null, b, this, this.k);
};
Rc.prototype[xa] = function() {
  return O(this);
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.Oa)) ? new Rc(null, a, b, null) : new Rc(null, a, I(b), null);
}
function Sc(a, b) {
  if (a.$ === b.$) {
    return 0;
  }
  var c = u(a.wa) ? !1 : !0;
  if (u(c ? b.wa : c)) {
    return-1;
  }
  if (u(a.wa)) {
    if (!u(b.wa)) {
      return 1;
    }
    c = na(a.wa, b.wa);
    return 0 === c ? na(a.name, b.name) : c;
  }
  return na(a.name, b.name);
}
function S(a, b, c, d) {
  this.wa = a;
  this.name = b;
  this.$ = c;
  this.$a = d;
  this.f = 2153775105;
  this.p = 4096;
}
f = S.prototype;
f.u = function(a, b) {
  return H(b, [C(":"), C(this.$)].join(""));
};
f.v = function() {
  var a = this.$a;
  return null != a ? a : this.$a = a = Mb(Gb(this.name), Kb(this.wa)) + 2654435769 | 0;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return lc(c, this);
      case 3:
        return mc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return lc(c, this);
  };
  a.g = function(a, c, d) {
    return mc(c, this, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
f.d = function(a) {
  return lc(a, this);
};
f.a = function(a, b) {
  return mc(a, this, b);
};
f.l = function(a, b) {
  return b instanceof S ? this.$ === b.$ : !1;
};
f.toString = function() {
  return[C(":"), C(this.$)].join("");
};
f.equiv = function(a) {
  return this.l(null, a);
};
var Tc = function Tc() {
  switch(arguments.length) {
    case 1:
      return Tc.d(arguments[0]);
    case 2:
      return Tc.a(arguments[0], arguments[1]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
};
Tc.d = function(a) {
  var b;
  return a instanceof S ? a : "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new S(b[0], b[1], a, null) : new S(null, b[0], a, null)) : null;
};
Tc.a = function(a, b) {
  return new S(a, b, [C(u(a) ? [C(a), C("/")].join("") : null), C(b)].join(""), null);
};
Tc.r = 2;
function T(a, b, c, d) {
  this.j = a;
  this.Ba = b;
  this.m = c;
  this.k = d;
  this.p = 0;
  this.f = 32374988;
}
f = T.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
function Uc(a) {
  null != a.Ba && (a.m = a.Ba.n ? a.Ba.n() : a.Ba.call(null), a.Ba = null);
  return a.m;
}
f.F = function() {
  return this.j;
};
f.Q = function() {
  eb(this);
  return null == this.m ? null : M(this.m);
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.P = function() {
  eb(this);
  return null == this.m ? null : K(this.m);
};
f.R = function() {
  eb(this);
  return null != this.m ? Nb(this.m) : Ob;
};
f.B = function() {
  Uc(this);
  if (null == this.m) {
    return null;
  }
  for (var a = this.m;;) {
    if (a instanceof T) {
      a = Uc(a);
    } else {
      return this.m = a, I(this.m);
    }
  }
};
f.J = function(a, b) {
  return new T(b, this.Ba, this.m, this.k);
};
f.C = function(a, b) {
  return P(b, this);
};
T.prototype[xa] = function() {
  return O(this);
};
function Vc(a, b) {
  this.Sa = a;
  this.end = b;
  this.p = 0;
  this.f = 2;
}
Vc.prototype.M = function() {
  return this.end;
};
Vc.prototype.add = function(a) {
  this.Sa[this.end] = a;
  return this.end += 1;
};
Vc.prototype.ca = function() {
  var a = new Wc(this.Sa, 0, this.end);
  this.Sa = null;
  return a;
};
function Wc(a, b, c) {
  this.b = a;
  this.w = b;
  this.end = c;
  this.p = 0;
  this.f = 524306;
}
f = Wc.prototype;
f.H = function(a, b) {
  return Zb(this.b, b, this.b[this.w], this.w + 1);
};
f.I = function(a, b, c) {
  return Zb(this.b, b, c, this.w);
};
f.ab = function() {
  if (this.w === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Wc(this.b, this.w + 1, this.end);
};
f.O = function(a, b) {
  return this.b[this.w + b];
};
f.S = function(a, b, c) {
  return 0 <= b && b < this.end - this.w ? this.b[this.w + b] : c;
};
f.M = function() {
  return this.end - this.w;
};
function Xc(a, b, c, d) {
  this.ca = a;
  this.aa = b;
  this.j = c;
  this.k = d;
  this.f = 31850732;
  this.p = 1536;
}
f = Xc.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.j;
};
f.Q = function() {
  if (1 < Ca(this.ca)) {
    return new Xc(ob(this.ca), this.aa, this.j, null);
  }
  var a = eb(this.aa);
  return null == a ? null : a;
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.P = function() {
  return D.a(this.ca, 0);
};
f.R = function() {
  return 1 < Ca(this.ca) ? new Xc(ob(this.ca), this.aa, this.j, null) : null == this.aa ? Ob : this.aa;
};
f.B = function() {
  return this;
};
f.Ua = function() {
  return this.ca;
};
f.Va = function() {
  return null == this.aa ? Ob : this.aa;
};
f.J = function(a, b) {
  return new Xc(this.ca, this.aa, b, this.k);
};
f.C = function(a, b) {
  return P(b, this);
};
f.Ta = function() {
  return null == this.aa ? null : this.aa;
};
Xc.prototype[xa] = function() {
  return O(this);
};
function Zc(a, b) {
  return 0 === Ca(a) ? b : new Xc(a, b, null, null);
}
function $c(a, b) {
  a.add(b);
}
function ad(a) {
  for (var b = [];;) {
    if (I(a)) {
      b.push(K(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function bd(a, b) {
  if ($b(a)) {
    return R(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && I(c)) {
      c = M(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var cd = function cd(b) {
  return null == b ? null : null == M(b) ? I(K(b)) : P(K(b), cd(M(b)));
}, dd = function dd() {
  switch(arguments.length) {
    case 0:
      return dd.n();
    case 1:
      return dd.d(arguments[0]);
    case 2:
      return dd.a(arguments[0], arguments[1]);
    default:
      return dd.i(arguments[0], arguments[1], new J(Array.prototype.slice.call(arguments, 2), 0));
  }
};
dd.n = function() {
  return new T(null, function() {
    return null;
  }, null, null);
};
dd.d = function(a) {
  return new T(null, function() {
    return a;
  }, null, null);
};
dd.a = function(a, b) {
  return new T(null, function() {
    var c = I(a);
    return c ? vc(c) ? Zc(pb(c), dd.a(qb(c), b)) : P(K(c), dd.a(Nb(c), b)) : b;
  }, null, null);
};
dd.i = function(a, b, c) {
  return function e(a, b) {
    return new T(null, function() {
      var c = I(a);
      return c ? vc(c) ? Zc(pb(c), e(qb(c), b)) : P(K(c), e(Nb(c), b)) : u(b) ? e(K(b), M(b)) : null;
    }, null, null);
  }(dd.a(a, b), c);
};
dd.o = function(a) {
  var b = K(a), c = M(a);
  a = K(c);
  c = M(c);
  return dd.i(b, a, c);
};
dd.r = 2;
var ed = function ed() {
  switch(arguments.length) {
    case 0:
      return ed.n();
    case 1:
      return ed.d(arguments[0]);
    case 2:
      return ed.a(arguments[0], arguments[1]);
    default:
      return ed.i(arguments[0], arguments[1], new J(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ed.n = function() {
  return jb(hc);
};
ed.d = function(a) {
  return a;
};
ed.a = function(a, b) {
  return kb(a, b);
};
ed.i = function(a, b, c) {
  for (;;) {
    if (a = kb(a, b), u(c)) {
      b = K(c), c = M(c);
    } else {
      return a;
    }
  }
};
ed.o = function(a) {
  var b = K(a), c = M(a);
  a = K(c);
  c = M(c);
  return ed.i(b, a, c);
};
ed.r = 2;
function fd(a, b, c) {
  var d = I(c);
  if (0 === b) {
    return a.n ? a.n() : a.call(null);
  }
  c = E(d);
  var e = G(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = E(e), g = G(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = E(g), h = G(g);
  if (3 === b) {
    return a.g ? a.g(c, d, e) : a.g ? a.g(c, d, e) : a.call(null, c, d, e);
  }
  var g = E(h), k = G(h);
  if (4 === b) {
    return a.N ? a.N(c, d, e, g) : a.N ? a.N(c, d, e, g) : a.call(null, c, d, e, g);
  }
  var h = E(k), l = G(k);
  if (5 === b) {
    return a.D ? a.D(c, d, e, g, h) : a.D ? a.D(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  var k = E(l), m = G(l);
  if (6 === b) {
    return a.oa ? a.oa(c, d, e, g, h, k) : a.oa ? a.oa(c, d, e, g, h, k) : a.call(null, c, d, e, g, h, k);
  }
  var l = E(m), n = G(m);
  if (7 === b) {
    return a.pa ? a.pa(c, d, e, g, h, k, l) : a.pa ? a.pa(c, d, e, g, h, k, l) : a.call(null, c, d, e, g, h, k, l);
  }
  var m = E(n), p = G(n);
  if (8 === b) {
    return a.qa ? a.qa(c, d, e, g, h, k, l, m) : a.qa ? a.qa(c, d, e, g, h, k, l, m) : a.call(null, c, d, e, g, h, k, l, m);
  }
  var n = E(p), q = G(p);
  if (9 === b) {
    return a.ra ? a.ra(c, d, e, g, h, k, l, m, n) : a.ra ? a.ra(c, d, e, g, h, k, l, m, n) : a.call(null, c, d, e, g, h, k, l, m, n);
  }
  var p = E(q), r = G(q);
  if (10 === b) {
    return a.da ? a.da(c, d, e, g, h, k, l, m, n, p) : a.da ? a.da(c, d, e, g, h, k, l, m, n, p) : a.call(null, c, d, e, g, h, k, l, m, n, p);
  }
  var q = E(r), v = G(r);
  if (11 === b) {
    return a.ea ? a.ea(c, d, e, g, h, k, l, m, n, p, q) : a.ea ? a.ea(c, d, e, g, h, k, l, m, n, p, q) : a.call(null, c, d, e, g, h, k, l, m, n, p, q);
  }
  var r = E(v), w = G(v);
  if (12 === b) {
    return a.fa ? a.fa(c, d, e, g, h, k, l, m, n, p, q, r) : a.fa ? a.fa(c, d, e, g, h, k, l, m, n, p, q, r) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, r);
  }
  var v = E(w), z = G(w);
  if (13 === b) {
    return a.ga ? a.ga(c, d, e, g, h, k, l, m, n, p, q, r, v) : a.ga ? a.ga(c, d, e, g, h, k, l, m, n, p, q, r, v) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, r, v);
  }
  var w = E(z), B = G(z);
  if (14 === b) {
    return a.ha ? a.ha(c, d, e, g, h, k, l, m, n, p, q, r, v, w) : a.ha ? a.ha(c, d, e, g, h, k, l, m, n, p, q, r, v, w) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, r, v, w);
  }
  var z = E(B), F = G(B);
  if (15 === b) {
    return a.ia ? a.ia(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z) : a.ia ? a.ia(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z);
  }
  var B = E(F), L = G(F);
  if (16 === b) {
    return a.ja ? a.ja(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B) : a.ja ? a.ja(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B);
  }
  var F = E(L), da = G(L);
  if (17 === b) {
    return a.ka ? a.ka(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F) : a.ka ? a.ka(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F);
  }
  var L = E(da), Fa = G(da);
  if (18 === b) {
    return a.la ? a.la(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L) : a.la ? a.la(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L);
  }
  da = E(Fa);
  Fa = G(Fa);
  if (19 === b) {
    return a.ma ? a.ma(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L, da) : a.ma ? a.ma(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L, da) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L, da);
  }
  var A = E(Fa);
  G(Fa);
  if (20 === b) {
    return a.na ? a.na(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L, da, A) : a.na ? a.na(c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L, da, A) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, r, v, w, z, B, F, L, da, A);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function rc() {
  switch(arguments.length) {
    case 2:
      return gd(arguments[0], arguments[1]);
    case 3:
      return hd(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = P(arguments[1], P(arguments[2], arguments[3])), c = a.r;
      if (a.o) {
        var d = bd(b, c + 1);
        a = d <= c ? fd(a, d, b) : a.o(b);
      } else {
        a = a.apply(a, ad(b));
      }
      return a;
    case 5:
      return id(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return jd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new J(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function gd(a, b) {
  var c = a.r;
  if (a.o) {
    var d = bd(b, c + 1);
    return d <= c ? fd(a, d, b) : a.o(b);
  }
  return a.apply(a, ad(b));
}
function hd(a, b, c) {
  b = P(b, c);
  c = a.r;
  if (a.o) {
    var d = bd(b, c + 1);
    return d <= c ? fd(a, d, b) : a.o(b);
  }
  return a.apply(a, ad(b));
}
function id(a, b, c, d, e) {
  b = P(b, P(c, P(d, e)));
  c = a.r;
  return a.o ? (d = bd(b, c + 1), d <= c ? fd(a, d, b) : a.o(b)) : a.apply(a, ad(b));
}
function jd(a, b, c, d, e, g) {
  b = P(b, P(c, P(d, P(e, cd(g)))));
  c = a.r;
  return a.o ? (d = bd(b, c + 1), d <= c ? fd(a, d, b) : a.o(b)) : a.apply(a, ad(b));
}
function kd(a, b) {
  for (;;) {
    if (null == I(b)) {
      return!0;
    }
    var c;
    c = K(b);
    c = a.d ? a.d(c) : a.call(null, c);
    if (u(c)) {
      c = a;
      var d = M(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function ld(a, b) {
  for (;;) {
    if (I(b)) {
      var c;
      c = K(b);
      c = a.d ? a.d(c) : a.call(null, c);
      if (u(c)) {
        return c;
      }
      c = a;
      var d = M(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function md(a) {
  var b = nd;
  return function() {
    function c(c, d, e) {
      return b.N ? b.N(a, c, d, e) : b.call(null, a, c, d, e);
    }
    function d(c, d) {
      return b.g ? b.g(a, c, d) : b.call(null, a, c, d);
    }
    function e(c) {
      return b.a ? b.a(a, c) : b.call(null, a, c);
    }
    function g() {
      return b.d ? b.d(a) : b.call(null, a);
    }
    var h = null, k = function() {
      function c(a, b, e, g) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new J(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, g, h) {
        return jd(b, a, c, e, g, fc([h], 0));
      }
      c.r = 3;
      c.o = function(a) {
        var b = K(a);
        a = M(a);
        var c = K(a);
        a = M(a);
        var e = K(a);
        a = Nb(a);
        return d(b, c, e, a);
      };
      c.i = d;
      return c;
    }(), h = function(a, b, h, p) {
      switch(arguments.length) {
        case 0:
          return g.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var q = null;
          if (3 < arguments.length) {
            for (var q = 0, r = Array(arguments.length - 3);q < r.length;) {
              r[q] = arguments[q + 3], ++q;
            }
            q = new J(r, 0);
          }
          return k.i(a, b, h, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.r = 3;
    h.o = k.o;
    h.n = g;
    h.d = e;
    h.a = d;
    h.g = c;
    h.i = k.i;
    return h;
  }();
}
var V = function V() {
  switch(arguments.length) {
    case 1:
      return V.d(arguments[0]);
    case 2:
      return V.a(arguments[0], arguments[1]);
    case 3:
      return V.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return V.N(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return V.i(arguments[0], arguments[1], arguments[2], arguments[3], new J(Array.prototype.slice.call(arguments, 4), 0));
  }
};
V.d = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.d ? a.d(d) : a.call(null, d);
        return b.a ? b.a(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.d ? b.d(a) : b.call(null, a);
      }
      function e() {
        return b.n ? b.n() : b.call(null);
      }
      var g = null, h = function() {
        function c(a, b, e) {
          var g = null;
          if (2 < arguments.length) {
            for (var g = 0, h = Array(arguments.length - 2);g < h.length;) {
              h[g] = arguments[g + 2], ++g;
            }
            g = new J(h, 0);
          }
          return d.call(this, a, b, g);
        }
        function d(c, e, g) {
          e = hd(a, e, g);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.r = 2;
        c.o = function(a) {
          var b = K(a);
          a = M(a);
          var c = K(a);
          a = Nb(a);
          return d(b, c, a);
        };
        c.i = d;
        return c;
      }(), g = function(a, b, g) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var n = null;
            if (2 < arguments.length) {
              for (var n = 0, p = Array(arguments.length - 2);n < p.length;) {
                p[n] = arguments[n + 2], ++n;
              }
              n = new J(p, 0);
            }
            return h.i(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      g.r = 2;
      g.o = h.o;
      g.n = e;
      g.d = d;
      g.a = c;
      g.i = h.i;
      return g;
    }();
  };
};
V.a = function(a, b) {
  return new T(null, function() {
    var c = I(b);
    if (c) {
      if (vc(c)) {
        for (var d = pb(c), e = R(d), g = new Vc(Array(e), 0), h = 0;;) {
          if (h < e) {
            $c(g, function() {
              var b = D.a(d, h);
              return a.d ? a.d(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Zc(g.ca(), V.a(a, qb(c)));
      }
      return P(function() {
        var b = K(c);
        return a.d ? a.d(b) : a.call(null, b);
      }(), V.a(a, Nb(c)));
    }
    return null;
  }, null, null);
};
V.g = function(a, b, c) {
  return new T(null, function() {
    var d = I(b), e = I(c);
    if (d && e) {
      var g = P, h;
      h = K(d);
      var k = K(e);
      h = a.a ? a.a(h, k) : a.call(null, h, k);
      d = g(h, V.g(a, Nb(d), Nb(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
V.N = function(a, b, c, d) {
  return new T(null, function() {
    var e = I(b), g = I(c), h = I(d);
    if (e && g && h) {
      var k = P, l;
      l = K(e);
      var m = K(g), n = K(h);
      l = a.g ? a.g(l, m, n) : a.call(null, l, m, n);
      e = k(l, V.N(a, Nb(e), Nb(g), Nb(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
V.i = function(a, b, c, d, e) {
  var g = function k(a) {
    return new T(null, function() {
      var b = V.a(I, a);
      return kd(Jc, b) ? P(V.a(K, b), k(V.a(Nb, b))) : null;
    }, null, null);
  };
  return V.a(function() {
    return function(b) {
      return gd(a, b);
    };
  }(g), g(Q.i(e, d, fc([c, b], 0))));
};
V.o = function(a) {
  var b = K(a), c = M(a);
  a = K(c);
  var d = M(c), c = K(d), e = M(d), d = K(e), e = M(e);
  return V.i(b, a, c, d, e);
};
V.r = 4;
function od(a, b) {
  return new T(null, function() {
    if (0 < a) {
      var c = I(b);
      return c ? P(K(c), od(a - 1, Nb(c))) : null;
    }
    return null;
  }, null, null);
}
function pd(a, b) {
  return new T(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = I(b);
      if (0 < a && e) {
        var g = a - 1, e = Nb(e);
        a = g;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function qd(a) {
  return new T(null, function() {
    return P(a, qd(a));
  }, null, null);
}
var rd = function rd(b, c) {
  return P(c, new T(null, function() {
    return rd(b, b.d ? b.d(c) : b.call(null, c));
  }, null, null));
};
function sd(a, b, c) {
  return new T(null, function() {
    var d = I(c);
    if (d) {
      var e = od(a, d);
      return a === R(e) ? P(e, sd(a, b, pd(b, d))) : null;
    }
    return null;
  }, null, null);
}
function td(a, b, c, d) {
  return new T(null, function() {
    var e = I(d);
    if (e) {
      var g = od(a, e);
      return a === R(g) ? P(g, td(a, b, c, pd(b, e))) : Da(Ob, od(a, dd.a(g, c)));
    }
    return null;
  }, null, null);
}
function ud(a, b) {
  this.q = a;
  this.b = b;
}
function vd(a) {
  return new ud(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function wd(a) {
  return new ud(a.q, ya(a.b));
}
function xd(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function yd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = vd(a);
    d.b[0] = c;
    c = d;
    b -= 5;
  }
}
var zd = function zd(b, c, d, e) {
  var g = wd(d), h = b.e - 1 >>> c & 31;
  5 === c ? g.b[h] = e : (d = d.b[h], b = null != d ? zd(b, c - 5, d, e) : yd(null, c - 5, e), g.b[h] = b);
  return g;
};
function Ad(a, b) {
  throw Error([C("No item "), C(a), C(" in vector of length "), C(b)].join(""));
}
function Bd(a, b) {
  if (b >= xd(a)) {
    return a.L;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.b[b >>> d & 31], d = e
    } else {
      return c.b;
    }
  }
}
function Cd(a, b) {
  return 0 <= b && b < a.e ? Bd(a, b) : Ad(b, a.e);
}
var Dd = function Dd(b, c, d, e, g) {
  var h = wd(d);
  if (0 === c) {
    h.b[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = Dd(b, c - 5, d.b[k], e, g);
    h.b[k] = b;
  }
  return h;
}, Ed = function Ed(b, c, d) {
  var e = b.e - 2 >>> c & 31;
  if (5 < c) {
    b = Ed(b, c - 5, d.b[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = wd(d);
    d.b[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = wd(d);
  d.b[e] = null;
  return d;
};
function Fd(a, b, c, d, e, g) {
  this.h = a;
  this.Ra = b;
  this.b = c;
  this.Z = d;
  this.start = e;
  this.end = g;
}
Fd.prototype.Za = function() {
  return this.h < this.end;
};
Fd.prototype.next = function() {
  32 === this.h - this.Ra && (this.b = Bd(this.Z, this.h), this.Ra += 32);
  var a = this.b[this.h & 31];
  this.h += 1;
  return a;
};
function W(a, b, c, d, e, g) {
  this.j = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.L = e;
  this.k = g;
  this.f = 167668511;
  this.p = 8196;
}
f = W.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.A = function(a, b) {
  return Ka.g(this, b, null);
};
f.s = function(a, b, c) {
  return "number" === typeof b ? D.g(this, b, c) : c;
};
f.O = function(a, b) {
  return Cd(this, b)[b & 31];
};
f.S = function(a, b, c) {
  return 0 <= b && b < this.e ? Bd(this, b)[b & 31] : c;
};
f.Ya = function(a, b, c) {
  if (0 <= b && b < this.e) {
    return xd(this) <= b ? (a = ya(this.L), a[b & 31] = c, new W(this.j, this.e, this.shift, this.root, a, null)) : new W(this.j, this.e, this.shift, Dd(this, this.shift, this.root, b, c), this.L, null);
  }
  if (b === this.e) {
    return Da(this, c);
  }
  throw Error([C("Index "), C(b), C(" out of bounds  [0,"), C(this.e), C("]")].join(""));
};
f.Ma = function() {
  var a = this.e;
  return new Fd(0, 0, 0 < R(this) ? Bd(this, 0) : null, this, 0, a);
};
f.F = function() {
  return this.j;
};
f.M = function() {
  return this.e;
};
f.Wa = function() {
  return D.a(this, 0);
};
f.Xa = function() {
  return D.a(this, 1);
};
f.Fa = function() {
  return 0 < this.e ? D.a(this, this.e - 1) : null;
};
f.Ga = function() {
  if (0 === this.e) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.e) {
    return Za(hc, this.j);
  }
  if (1 < this.e - xd(this)) {
    return new W(this.j, this.e - 1, this.shift, this.root, this.L.slice(0, -1), null);
  }
  var a = Bd(this, this.e - 2), b = Ed(this, this.shift, this.root), b = null == b ? Gd : b, c = this.e - 1;
  return 5 < this.shift && null == b.b[1] ? new W(this.j, c, this.shift - 5, b.b[0], a, null) : new W(this.j, c, this.shift, b, a, null);
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Rb(this);
};
f.l = function(a, b) {
  if (b instanceof W) {
    if (this.e === R(b)) {
      for (var c = sb(this), d = sb(b);;) {
        if (u(c.Za())) {
          var e = c.next(), g = d.next();
          if (!N.a(e, g)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return dc(this, b);
  }
};
f.Ea = function() {
  var a = this;
  return new Hd(a.e, a.shift, function() {
    var b = a.root;
    return Id.d ? Id.d(b) : Id.call(null, b);
  }(), function() {
    var b = a.L;
    return Jd.d ? Jd.d(b) : Jd.call(null, b);
  }());
};
f.H = function(a, b) {
  return Vb(this, b);
};
f.I = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.e) {
      var e = Bd(this, a);
      c = e.length;
      a: {
        for (var g = 0;;) {
          if (g < c) {
            var h = e[g], d = b.a ? b.a(d, h) : b.call(null, d, h), g = g + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
f.Da = function(a, b, c) {
  if ("number" === typeof b) {
    return Ua(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
f.B = function() {
  if (0 === this.e) {
    return null;
  }
  if (32 >= this.e) {
    return new J(this.L, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.b[0];
      } else {
        a = a.b;
        break a;
      }
    }
  }
  return Kd ? Kd(this, a, 0, 0) : Ld.call(null, this, a, 0, 0);
};
f.J = function(a, b) {
  return new W(b, this.e, this.shift, this.root, this.L, this.k);
};
f.C = function(a, b) {
  if (32 > this.e - xd(this)) {
    for (var c = this.L.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.L[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.j, this.e + 1, this.shift, this.root, d, null);
  }
  c = (d = this.e >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = vd(null), d.b[0] = this.root, e = yd(null, this.shift, new ud(null, this.L)), d.b[1] = e) : d = zd(this, this.shift, this.root, new ud(null, this.L));
  return new W(this.j, this.e + 1, c, d, [b], null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.S(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.O(null, c);
  };
  a.g = function(a, c, d) {
    return this.S(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
f.d = function(a) {
  return this.O(null, a);
};
f.a = function(a, b) {
  return this.S(null, a, b);
};
var Gd = new ud(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), hc = new W(null, 0, 5, Gd, [], Sb);
function Md(a) {
  var b = a.length;
  if (32 > b) {
    return new W(null, b, 5, Gd, a, null);
  }
  for (var c = 32, d = (new W(null, 32, 5, Gd, a.slice(0, 32), null)).Ea(null);;) {
    if (c < b) {
      var e = c + 1, d = ed.a(d, a[c]), c = e
    } else {
      return lb(d);
    }
  }
}
W.prototype[xa] = function() {
  return O(this);
};
function Nd(a) {
  return ta(a) ? Md(a) : lb(Fc(kb, jb(hc), a));
}
var Od = function Od() {
  return Od.i(0 < arguments.length ? new J(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Od.i = function(a) {
  return a instanceof J && 0 === a.h ? Md(a.b) : Nd(a);
};
Od.r = 0;
Od.o = function(a) {
  return Od.i(I(a));
};
function Pd(a, b, c, d, e, g) {
  this.U = a;
  this.sa = b;
  this.h = c;
  this.w = d;
  this.j = e;
  this.k = g;
  this.f = 32375020;
  this.p = 1536;
}
f = Pd.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.j;
};
f.Q = function() {
  if (this.w + 1 < this.sa.length) {
    var a;
    a = this.U;
    var b = this.sa, c = this.h, d = this.w + 1;
    a = Kd ? Kd(a, b, c, d) : Ld.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return rb(this);
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  var c;
  c = this.U;
  var d = this.h + this.w, e = R(this.U);
  c = Qd ? Qd(c, d, e) : Rd.call(null, c, d, e);
  return Vb(c, b);
};
f.I = function(a, b, c) {
  a = this.U;
  var d = this.h + this.w, e = R(this.U);
  a = Qd ? Qd(a, d, e) : Rd.call(null, a, d, e);
  return Wb(a, b, c);
};
f.P = function() {
  return this.sa[this.w];
};
f.R = function() {
  if (this.w + 1 < this.sa.length) {
    var a;
    a = this.U;
    var b = this.sa, c = this.h, d = this.w + 1;
    a = Kd ? Kd(a, b, c, d) : Ld.call(null, a, b, c, d);
    return null == a ? Ob : a;
  }
  return qb(this);
};
f.B = function() {
  return this;
};
f.Ua = function() {
  var a = this.sa;
  return new Wc(a, this.w, a.length);
};
f.Va = function() {
  var a = this.h + this.sa.length;
  if (a < Ca(this.U)) {
    var b = this.U, c = Bd(this.U, a);
    return Kd ? Kd(b, c, a, 0) : Ld.call(null, b, c, a, 0);
  }
  return Ob;
};
f.J = function(a, b) {
  var c = this.U, d = this.sa, e = this.h, g = this.w;
  return Td ? Td(c, d, e, g, b) : Ld.call(null, c, d, e, g, b);
};
f.C = function(a, b) {
  return P(b, this);
};
f.Ta = function() {
  var a = this.h + this.sa.length;
  if (a < Ca(this.U)) {
    var b = this.U, c = Bd(this.U, a);
    return Kd ? Kd(b, c, a, 0) : Ld.call(null, b, c, a, 0);
  }
  return null;
};
Pd.prototype[xa] = function() {
  return O(this);
};
function Ld() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new Pd(a, Cd(a, b), b, c, null, null);
    case 4:
      return Kd(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Td(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
}
function Kd(a, b, c, d) {
  return new Pd(a, b, c, d, null, null);
}
function Td(a, b, c, d, e) {
  return new Pd(a, b, c, d, e, null);
}
function Ud(a, b, c, d, e) {
  this.j = a;
  this.Z = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.f = 167666463;
  this.p = 8192;
}
f = Ud.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.A = function(a, b) {
  return Ka.g(this, b, null);
};
f.s = function(a, b, c) {
  return "number" === typeof b ? D.g(this, b, c) : c;
};
f.O = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Ad(b, this.end - this.start) : D.a(this.Z, this.start + b);
};
f.S = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : D.g(this.Z, this.start + b, c);
};
f.Ya = function(a, b, c) {
  var d = this.start + b;
  a = this.j;
  c = nc.g(this.Z, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Vd.D ? Vd.D(a, c, b, d, null) : Vd.call(null, a, c, b, d, null);
};
f.F = function() {
  return this.j;
};
f.M = function() {
  return this.end - this.start;
};
f.Fa = function() {
  return D.a(this.Z, this.end - 1);
};
f.Ga = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.j, b = this.Z, c = this.start, d = this.end - 1;
  return Vd.D ? Vd.D(a, b, c, d, null) : Vd.call(null, a, b, c, d, null);
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Vb(this, b);
};
f.I = function(a, b, c) {
  return Wb(this, b, c);
};
f.Da = function(a, b, c) {
  if ("number" === typeof b) {
    return Ua(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
f.B = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : P(D.a(a.Z, e), new T(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
f.J = function(a, b) {
  var c = this.Z, d = this.start, e = this.end, g = this.k;
  return Vd.D ? Vd.D(b, c, d, e, g) : Vd.call(null, b, c, d, e, g);
};
f.C = function(a, b) {
  var c = this.j, d = Ua(this.Z, this.end, b), e = this.start, g = this.end + 1;
  return Vd.D ? Vd.D(c, d, e, g, null) : Vd.call(null, c, d, e, g, null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.S(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.O(null, c);
  };
  a.g = function(a, c, d) {
    return this.S(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
f.d = function(a) {
  return this.O(null, a);
};
f.a = function(a, b) {
  return this.S(null, a, b);
};
Ud.prototype[xa] = function() {
  return O(this);
};
function Vd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Ud) {
      c = b.start + c, d = b.start + d, b = b.Z;
    } else {
      var g = R(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Ud(a, b, c, d, e);
    }
  }
}
function Rd() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return Qd(a, arguments[1], R(a));
    case 3:
      return Qd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
}
function Qd(a, b, c) {
  return Vd(null, a, b, c, null);
}
function Wd(a, b) {
  return a === b.q ? b : new ud(a, ya(b.b));
}
function Id(a) {
  return new ud({}, ya(a.b));
}
function Jd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  xc(a, 0, b, 0, a.length);
  return b;
}
var Xd = function Xd(b, c, d, e) {
  d = Wd(b.root.q, d);
  var g = b.e - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.b[g];
    b = null != h ? Xd(b, c - 5, h, e) : yd(b.root.q, c - 5, e);
  }
  d.b[g] = b;
  return d;
};
function Hd(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.L = d;
  this.f = 275;
  this.p = 88;
}
f = Hd.prototype;
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.s(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.A(null, c);
  };
  a.g = function(a, c, d) {
    return this.s(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
f.d = function(a) {
  return this.A(null, a);
};
f.a = function(a, b) {
  return this.s(null, a, b);
};
f.A = function(a, b) {
  return Ka.g(this, b, null);
};
f.s = function(a, b, c) {
  return "number" === typeof b ? D.g(this, b, c) : c;
};
f.O = function(a, b) {
  if (this.root.q) {
    return Cd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.S = function(a, b, c) {
  return 0 <= b && b < this.e ? D.a(this, b) : c;
};
f.M = function() {
  if (this.root.q) {
    return this.e;
  }
  throw Error("count after persistent!");
};
f.eb = function(a, b, c) {
  var d = this;
  if (d.root.q) {
    if (0 <= b && b < d.e) {
      return xd(this) <= b ? d.L[b & 31] = c : (a = function() {
        return function g(a, k) {
          var l = Wd(d.root.q, k);
          if (0 === a) {
            l.b[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = g(a - 5, l.b[m]);
            l.b[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.e) {
      return kb(this, c);
    }
    throw Error([C("Index "), C(b), C(" out of bounds for TransientVector of length"), C(d.e)].join(""));
  }
  throw Error("assoc! after persistent!");
};
f.Ha = function(a, b, c) {
  if ("number" === typeof b) {
    return nb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
f.Pa = function(a, b) {
  if (this.root.q) {
    if (32 > this.e - xd(this)) {
      this.L[this.e & 31] = b;
    } else {
      var c = new ud(this.root.q, this.L), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.L = d;
      if (this.e >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = yd(this.root.q, this.shift, c);
        this.root = new ud(this.root.q, d);
        this.shift = e;
      } else {
        this.root = Xd(this, this.shift, this.root, c);
      }
    }
    this.e += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.Qa = function() {
  if (this.root.q) {
    this.root.q = null;
    var a = this.e - xd(this), b = Array(a);
    xc(this.L, 0, b, 0, a);
    return new W(null, this.e, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Yd() {
  this.p = 0;
  this.f = 2097152;
}
Yd.prototype.l = function() {
  return!1;
};
Yd.prototype.equiv = function(a) {
  return this.l(null, a);
};
var Zd = new Yd;
function $d(a, b) {
  return Ac(tc(b) ? R(a) === R(b) ? kd(Jc, V.a(function(a) {
    return N.a(mc(b, K(a), Zd), gc(a));
  }, a)) : null : null);
}
function ae(a) {
  this.m = a;
}
ae.prototype.next = function() {
  if (null != this.m) {
    var a = K(this.m), b = kc(a, 0), a = kc(a, 1);
    this.m = M(this.m);
    return{done:!1, value:[b, a]};
  }
  return{done:!0, value:null};
};
function be(a) {
  return new ae(I(a));
}
function ce(a, b) {
  var c;
  if (b instanceof S) {
    a: {
      c = a.length;
      for (var d = b.$, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var g = a[e];
        if (g instanceof S && d === g.$) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, u(u(c) ? c : "number" === typeof b)) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (null == b) {
        a: {
          for (c = a.length, d = 0;;) {
            if (c <= d) {
              c = -1;
              break a;
            }
            if (null == a[d]) {
              c = d;
              break a;
            }
            d += 2;
          }
        }
      } else {
        a: {
          for (c = a.length, d = 0;;) {
            if (c <= d) {
              c = -1;
              break a;
            }
            if (N.a(b, a[d])) {
              c = d;
              break a;
            }
            d += 2;
          }
        }
      }
    }
  }
  return c;
}
function de(a, b, c) {
  this.b = a;
  this.h = b;
  this.W = c;
  this.p = 0;
  this.f = 32374990;
}
f = de.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.W;
};
f.Q = function() {
  return this.h < this.b.length - 2 ? new de(this.b, this.h + 2, this.W) : null;
};
f.M = function() {
  return(this.b.length - this.h) / 2;
};
f.v = function() {
  return Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.P = function() {
  return new W(null, 2, 5, Gd, [this.b[this.h], this.b[this.h + 1]], null);
};
f.R = function() {
  return this.h < this.b.length - 2 ? new de(this.b, this.h + 2, this.W) : Ob;
};
f.B = function() {
  return this;
};
f.J = function(a, b) {
  return new de(this.b, this.h, b);
};
f.C = function(a, b) {
  return P(b, this);
};
de.prototype[xa] = function() {
  return O(this);
};
function ee(a, b, c) {
  this.b = a;
  this.h = b;
  this.e = c;
}
ee.prototype.Za = function() {
  return this.h < this.e;
};
ee.prototype.next = function() {
  var a = new W(null, 2, 5, Gd, [this.b[this.h], this.b[this.h + 1]], null);
  this.h += 2;
  return a;
};
function wb(a, b, c, d) {
  this.j = a;
  this.e = b;
  this.b = c;
  this.k = d;
  this.f = 16647951;
  this.p = 8196;
}
f = wb.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.keys = function() {
  return O(fe.d ? fe.d(this) : fe.call(null, this));
};
f.entries = function() {
  return be(I(this));
};
f.values = function() {
  return O(ge.d ? ge.d(this) : ge.call(null, this));
};
f.has = function(a) {
  return mc(this, a, yc) === yc ? !1 : !0;
};
f.get = function(a, b) {
  return this.s(null, a, b);
};
f.forEach = function(a) {
  for (var b = I(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.O(null, e), h = kc(g, 0), g = kc(g, 1);
      a.a ? a.a(g, h) : a.call(null, g, h);
      e += 1;
    } else {
      if (b = I(b)) {
        vc(b) ? (c = pb(b), b = qb(b), h = c, d = R(c), c = h) : (c = K(b), h = kc(c, 0), c = g = kc(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = M(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
f.A = function(a, b) {
  return Ka.g(this, b, null);
};
f.s = function(a, b, c) {
  a = ce(this.b, b);
  return-1 === a ? c : this.b[a + 1];
};
f.Ma = function() {
  return new ee(this.b, 0, 2 * this.e);
};
f.F = function() {
  return this.j;
};
f.M = function() {
  return this.e;
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Tb(this);
};
f.l = function(a, b) {
  if (b && (b.f & 1024 || b.kb)) {
    var c = this.b.length;
    if (this.e === b.M(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.s(null, this.b[d], yc);
          if (e !== yc) {
            if (N.a(this.b[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return $d(this, b);
  }
};
f.Ea = function() {
  return new he({}, this.b.length, ya(this.b));
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.Da = function(a, b, c) {
  a = ce(this.b, b);
  if (-1 === a) {
    if (this.e < ie) {
      a = this.b;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new wb(this.j, this.e + 1, e, null);
    }
    a = oc;
    null != a ? a && (a.p & 4 || a.tb) ? (d = Fc(kb, jb(a), this), d = lb(d), a = sc(a), a = pc(d) && !(d ? d.f & 262144 || d.yb || (d.f ? 0 : x(Ya, d)) : x(Ya, d)) ? new qc(d, a) : null == d ? null : Za(d, a)) : a = Fc(Da, a, this) : a = Fc(Q, Ob, this);
    return Za(La(a, b, c), this.j);
  }
  if (c === this.b[a + 1]) {
    return this;
  }
  b = ya(this.b);
  b[a + 1] = c;
  return new wb(this.j, this.e, b, null);
};
f.B = function() {
  var a = this.b;
  return 0 <= a.length - 2 ? new de(a, 0, null) : null;
};
f.J = function(a, b) {
  return new wb(b, this.e, this.b, this.k);
};
f.C = function(a, b) {
  if (uc(b)) {
    return La(this, D.a(b, 0), D.a(b, 1));
  }
  for (var c = this, d = I(b);;) {
    if (null == d) {
      return c;
    }
    var e = K(d);
    if (uc(e)) {
      c = La(c, D.a(e, 0), D.a(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.s(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.A(null, c);
  };
  a.g = function(a, c, d) {
    return this.s(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
f.d = function(a) {
  return this.A(null, a);
};
f.a = function(a, b) {
  return this.s(null, a, b);
};
var je = new wb(null, 0, [], Ub), ie = 8;
wb.prototype[xa] = function() {
  return O(this);
};
function he(a, b, c) {
  this.Aa = a;
  this.Ca = b;
  this.b = c;
  this.p = 56;
  this.f = 258;
}
f = he.prototype;
f.Ha = function(a, b, c) {
  if (u(this.Aa)) {
    a = ce(this.b, b);
    if (-1 === a) {
      if (this.Ca + 2 <= 2 * ie) {
        return this.Ca += 2, this.b.push(b), this.b.push(c), this;
      }
      a = this.Ca;
      var d = this.b;
      a = ke.a ? ke.a(a, d) : ke.call(null, a, d);
      return mb(a, b, c);
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.Pa = function(a, b) {
  if (u(this.Aa)) {
    if (b ? b.f & 2048 || b.lb || (b.f ? 0 : x(Oa, b)) : x(Oa, b)) {
      return mb(this, le.d ? le.d(b) : le.call(null, b), me.d ? me.d(b) : me.call(null, b));
    }
    for (var c = I(b), d = this;;) {
      var e = K(c);
      if (u(e)) {
        var g = e, c = M(c), d = mb(d, function() {
          var a = g;
          return le.d ? le.d(a) : le.call(null, a);
        }(), function() {
          var a = g;
          return me.d ? me.d(a) : me.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.Qa = function() {
  if (u(this.Aa)) {
    return this.Aa = !1, new wb(null, Mc(this.Ca, 2), this.b, null);
  }
  throw Error("persistent! called twice");
};
f.A = function(a, b) {
  return Ka.g(this, b, null);
};
f.s = function(a, b, c) {
  if (u(this.Aa)) {
    return a = ce(this.b, b), -1 === a ? c : this.b[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.M = function() {
  if (u(this.Aa)) {
    return Mc(this.Ca, 2);
  }
  throw Error("count after persistent!");
};
function ke(a, b) {
  for (var c = jb(oc), d = 0;;) {
    if (d < a) {
      c = mb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function ne() {
  this.ba = !1;
}
function oe(a, b) {
  return a === b ? !0 : a === b || a instanceof S && b instanceof S && a.$ === b.$ ? !0 : N.a(a, b);
}
function pe(a, b, c) {
  a = ya(a);
  a[b] = c;
  return a;
}
function qe(a, b, c, d) {
  a = a.ya(b);
  a.b[c] = d;
  return a;
}
function re(a, b, c) {
  this.q = a;
  this.t = b;
  this.b = c;
}
f = re.prototype;
f.ya = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Nc(this.t), c = Array(0 > b ? 4 : 2 * (b + 1));
  xc(this.b, 0, c, 0, 2 * b);
  return new re(a, this.t, c);
};
f.Ia = function() {
  var a = this.b;
  return se ? se(a) : te.call(null, a);
};
f.za = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.t & e)) {
    return d;
  }
  var g = Nc(this.t & e - 1), e = this.b[2 * g], g = this.b[2 * g + 1];
  return null == e ? g.za(a + 5, b, c, d) : oe(c, e) ? g : d;
};
f.Y = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Nc(this.t & h - 1);
  if (0 === (this.t & h)) {
    var l = Nc(this.t);
    if (2 * l < this.b.length) {
      a = this.ya(a);
      b = a.b;
      g.ba = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          --l;
          --c;
          --g;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.t |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = ue.Y(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.t >>> d & 1) && (k[d] = null != this.b[e] ? ue.Y(a, b + 5, Lb(this.b[e]), this.b[e], this.b[e + 1], g) : this.b[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new ve(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    xc(this.b, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    xc(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    g.ba = !0;
    a = this.ya(a);
    a.b = b;
    a.t |= h;
    return a;
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  if (null == l) {
    return l = h.Y(a, b + 5, c, d, e, g), l === h ? this : qe(this, a, 2 * k + 1, l);
  }
  if (oe(d, l)) {
    return e === h ? this : qe(this, a, 2 * k + 1, e);
  }
  g.ba = !0;
  g = b + 5;
  d = we ? we(a, g, l, h, c, d, e) : xe.call(null, a, g, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.ya(a);
  a.b[e] = null;
  a.b[k] = d;
  return a;
};
f.X = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Nc(this.t & g - 1);
  if (0 === (this.t & g)) {
    var k = Nc(this.t);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = ue.X(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.t >>> c & 1) && (h[c] = null != this.b[d] ? ue.X(a + 5, Lb(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new ve(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    xc(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    xc(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ba = !0;
    return new re(null, this.t | g, a);
  }
  var l = this.b[2 * h], g = this.b[2 * h + 1];
  if (null == l) {
    return k = g.X(a + 5, b, c, d, e), k === g ? this : new re(null, this.t, pe(this.b, 2 * h + 1, k));
  }
  if (oe(c, l)) {
    return d === g ? this : new re(null, this.t, pe(this.b, 2 * h + 1, d));
  }
  e.ba = !0;
  e = this.t;
  k = this.b;
  a += 5;
  a = ye ? ye(a, l, g, b, c, d) : xe.call(null, a, l, g, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = ya(k);
  d[c] = null;
  d[h] = a;
  return new re(null, e, d);
};
var ue = new re(null, 0, []);
function ve(a, b, c) {
  this.q = a;
  this.e = b;
  this.b = c;
}
f = ve.prototype;
f.ya = function(a) {
  return a === this.q ? this : new ve(a, this.e, ya(this.b));
};
f.Ia = function() {
  var a = this.b;
  return ze ? ze(a) : Ae.call(null, a);
};
f.za = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.za(a + 5, b, c, d) : d;
};
f.Y = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.b[h];
  if (null == k) {
    return a = qe(this, a, h, ue.Y(a, b + 5, c, d, e, g)), a.e += 1, a;
  }
  b = k.Y(a, b + 5, c, d, e, g);
  return b === k ? this : qe(this, a, h, b);
};
f.X = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.b[g];
  if (null == h) {
    return new ve(null, this.e + 1, pe(this.b, g, ue.X(a + 5, b, c, d, e)));
  }
  a = h.X(a + 5, b, c, d, e);
  return a === h ? this : new ve(null, this.e, pe(this.b, g, a));
};
function Be(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (oe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ce(a, b, c, d) {
  this.q = a;
  this.ua = b;
  this.e = c;
  this.b = d;
}
f = Ce.prototype;
f.ya = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Array(2 * (this.e + 1));
  xc(this.b, 0, b, 0, 2 * this.e);
  return new Ce(a, this.ua, this.e, b);
};
f.Ia = function() {
  var a = this.b;
  return se ? se(a) : te.call(null, a);
};
f.za = function(a, b, c, d) {
  a = Be(this.b, this.e, c);
  return 0 > a ? d : oe(c, this.b[a]) ? this.b[a + 1] : d;
};
f.Y = function(a, b, c, d, e, g) {
  if (c === this.ua) {
    b = Be(this.b, this.e, d);
    if (-1 === b) {
      if (this.b.length > 2 * this.e) {
        return b = 2 * this.e, c = 2 * this.e + 1, a = this.ya(a), a.b[b] = d, a.b[c] = e, g.ba = !0, a.e += 1, a;
      }
      c = this.b.length;
      b = Array(c + 2);
      xc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.ba = !0;
      d = this.e + 1;
      a === this.q ? (this.b = b, this.e = d, a = this) : a = new Ce(this.q, this.ua, d, b);
      return a;
    }
    return this.b[b + 1] === e ? this : qe(this, a, b + 1, e);
  }
  return(new re(a, 1 << (this.ua >>> b & 31), [null, this, null, null])).Y(a, b, c, d, e, g);
};
f.X = function(a, b, c, d, e) {
  return b === this.ua ? (a = Be(this.b, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), xc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ba = !0, new Ce(null, this.ua, this.e + 1, b)) : N.a(this.b[a], d) ? this : new Ce(null, this.ua, this.e, pe(this.b, a + 1, d))) : (new re(null, 1 << (this.ua >>> a & 31), [null, this])).X(a, b, c, d, e);
};
function xe() {
  switch(arguments.length) {
    case 6:
      return ye(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return we(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
}
function ye(a, b, c, d, e, g) {
  var h = Lb(b);
  if (h === d) {
    return new Ce(null, h, 2, [b, c, e, g]);
  }
  var k = new ne;
  return ue.X(a, h, b, c, k).X(a, d, e, g, k);
}
function we(a, b, c, d, e, g, h) {
  var k = Lb(c);
  if (k === e) {
    return new Ce(null, k, 2, [c, d, g, h]);
  }
  var l = new ne;
  return ue.Y(a, b, k, c, d, l).Y(a, b, e, g, h, l);
}
function De(a, b, c, d, e) {
  this.j = a;
  this.va = b;
  this.h = c;
  this.m = d;
  this.k = e;
  this.p = 0;
  this.f = 32374860;
}
f = De.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.j;
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.P = function() {
  return null == this.m ? new W(null, 2, 5, Gd, [this.va[this.h], this.va[this.h + 1]], null) : K(this.m);
};
f.R = function() {
  if (null == this.m) {
    var a = this.va, b = this.h + 2;
    return Ee ? Ee(a, b, null) : te.call(null, a, b, null);
  }
  var a = this.va, b = this.h, c = M(this.m);
  return Ee ? Ee(a, b, c) : te.call(null, a, b, c);
};
f.B = function() {
  return this;
};
f.J = function(a, b) {
  return new De(b, this.va, this.h, this.m, this.k);
};
f.C = function(a, b) {
  return P(b, this);
};
De.prototype[xa] = function() {
  return O(this);
};
function te() {
  switch(arguments.length) {
    case 1:
      return se(arguments[0]);
    case 3:
      return Ee(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
}
function se(a) {
  return Ee(a, 0, null);
}
function Ee(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new De(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (u(d) && (d = d.Ia(), u(d))) {
          return new De(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new De(null, a, b, c, null);
  }
}
function Fe(a, b, c, d, e) {
  this.j = a;
  this.va = b;
  this.h = c;
  this.m = d;
  this.k = e;
  this.p = 0;
  this.f = 32374860;
}
f = Fe.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.j;
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.P = function() {
  return K(this.m);
};
f.R = function() {
  var a = this.va, b = this.h, c = M(this.m);
  return Ge ? Ge(null, a, b, c) : Ae.call(null, null, a, b, c);
};
f.B = function() {
  return this;
};
f.J = function(a, b) {
  return new Fe(b, this.va, this.h, this.m, this.k);
};
f.C = function(a, b) {
  return P(b, this);
};
Fe.prototype[xa] = function() {
  return O(this);
};
function Ae() {
  switch(arguments.length) {
    case 1:
      return ze(arguments[0]);
    case 4:
      return Ge(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([C("Invalid arity: "), C(arguments.length)].join(""));;
  }
}
function ze(a) {
  return Ge(null, a, 0, null);
}
function Ge(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (u(e) && (e = e.Ia(), u(e))) {
          return new Fe(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Fe(a, b, c, d, null);
  }
}
function He(a, b, c, d, e, g) {
  this.j = a;
  this.e = b;
  this.root = c;
  this.T = d;
  this.V = e;
  this.k = g;
  this.f = 16123663;
  this.p = 8196;
}
f = He.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.keys = function() {
  return O(fe.d ? fe.d(this) : fe.call(null, this));
};
f.entries = function() {
  return be(I(this));
};
f.values = function() {
  return O(ge.d ? ge.d(this) : ge.call(null, this));
};
f.has = function(a) {
  return mc(this, a, yc) === yc ? !1 : !0;
};
f.get = function(a, b) {
  return this.s(null, a, b);
};
f.forEach = function(a) {
  for (var b = I(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.O(null, e), h = kc(g, 0), g = kc(g, 1);
      a.a ? a.a(g, h) : a.call(null, g, h);
      e += 1;
    } else {
      if (b = I(b)) {
        vc(b) ? (c = pb(b), b = qb(b), h = c, d = R(c), c = h) : (c = K(b), h = kc(c, 0), c = g = kc(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = M(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
f.A = function(a, b) {
  return Ka.g(this, b, null);
};
f.s = function(a, b, c) {
  return null == b ? this.T ? this.V : c : null == this.root ? c : this.root.za(0, Lb(b), b, c);
};
f.F = function() {
  return this.j;
};
f.M = function() {
  return this.e;
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Tb(this);
};
f.l = function(a, b) {
  return $d(this, b);
};
f.Ea = function() {
  return new Ie({}, this.root, this.e, this.T, this.V);
};
f.Da = function(a, b, c) {
  if (null == b) {
    return this.T && c === this.V ? this : new He(this.j, this.T ? this.e : this.e + 1, this.root, !0, c, null);
  }
  a = new ne;
  b = (null == this.root ? ue : this.root).X(0, Lb(b), b, c, a);
  return b === this.root ? this : new He(this.j, a.ba ? this.e + 1 : this.e, b, this.T, this.V, null);
};
f.B = function() {
  if (0 < this.e) {
    var a = null != this.root ? this.root.Ia() : null;
    return this.T ? P(new W(null, 2, 5, Gd, [null, this.V], null), a) : a;
  }
  return null;
};
f.J = function(a, b) {
  return new He(b, this.e, this.root, this.T, this.V, this.k);
};
f.C = function(a, b) {
  if (uc(b)) {
    return La(this, D.a(b, 0), D.a(b, 1));
  }
  for (var c = this, d = I(b);;) {
    if (null == d) {
      return c;
    }
    var e = K(d);
    if (uc(e)) {
      c = La(c, D.a(e, 0), D.a(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.s(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.A(null, c);
  };
  a.g = function(a, c, d) {
    return this.s(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
f.d = function(a) {
  return this.A(null, a);
};
f.a = function(a, b) {
  return this.s(null, a, b);
};
var oc = new He(null, 0, null, !1, null, Ub);
He.prototype[xa] = function() {
  return O(this);
};
function Ie(a, b, c, d, e) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.T = d;
  this.V = e;
  this.p = 56;
  this.f = 258;
}
f = Ie.prototype;
f.Ha = function(a, b, c) {
  return Je(this, b, c);
};
f.Pa = function(a, b) {
  return Le(this, b);
};
f.Qa = function() {
  var a;
  if (this.q) {
    this.q = null, a = new He(null, this.count, this.root, this.T, this.V, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.A = function(a, b) {
  return null == b ? this.T ? this.V : null : null == this.root ? null : this.root.za(0, Lb(b), b);
};
f.s = function(a, b, c) {
  return null == b ? this.T ? this.V : c : null == this.root ? c : this.root.za(0, Lb(b), b, c);
};
f.M = function() {
  if (this.q) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Le(a, b) {
  if (a.q) {
    if (b ? b.f & 2048 || b.lb || (b.f ? 0 : x(Oa, b)) : x(Oa, b)) {
      return Je(a, le.d ? le.d(b) : le.call(null, b), me.d ? me.d(b) : me.call(null, b));
    }
    for (var c = I(b), d = a;;) {
      var e = K(c);
      if (u(e)) {
        var g = e, c = M(c), d = Je(d, function() {
          var a = g;
          return le.d ? le.d(a) : le.call(null, a);
        }(), function() {
          var a = g;
          return me.d ? me.d(a) : me.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Je(a, b, c) {
  if (a.q) {
    if (null == b) {
      a.V !== c && (a.V = c), a.T || (a.count += 1, a.T = !0);
    } else {
      var d = new ne;
      b = (null == a.root ? ue : a.root).Y(a.q, 0, Lb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ba && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function Me(a, b) {
  this.K = a;
  this.W = b;
  this.p = 0;
  this.f = 32374988;
}
f = Me.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.W;
};
f.Q = function() {
  var a = this.K, a = (a ? a.f & 128 || a.Na || (a.f ? 0 : x(Ia, a)) : x(Ia, a)) ? this.K.Q(null) : M(this.K);
  return null == a ? null : new Me(a, this.W);
};
f.v = function() {
  return Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.P = function() {
  return this.K.P(null).Wa();
};
f.R = function() {
  var a = this.K, a = (a ? a.f & 128 || a.Na || (a.f ? 0 : x(Ia, a)) : x(Ia, a)) ? this.K.Q(null) : M(this.K);
  return null != a ? new Me(a, this.W) : Ob;
};
f.B = function() {
  return this;
};
f.J = function(a, b) {
  return new Me(this.K, b);
};
f.C = function(a, b) {
  return P(b, this);
};
Me.prototype[xa] = function() {
  return O(this);
};
function fe(a) {
  return(a = I(a)) ? new Me(a, null) : null;
}
function le(a) {
  return Pa(a);
}
function Ne(a, b) {
  this.K = a;
  this.W = b;
  this.p = 0;
  this.f = 32374988;
}
f = Ne.prototype;
f.toString = function() {
  return vb(this);
};
f.equiv = function(a) {
  return this.l(null, a);
};
f.F = function() {
  return this.W;
};
f.Q = function() {
  var a = this.K, a = (a ? a.f & 128 || a.Na || (a.f ? 0 : x(Ia, a)) : x(Ia, a)) ? this.K.Q(null) : M(this.K);
  return null == a ? null : new Ne(a, this.W);
};
f.v = function() {
  return Rb(this);
};
f.l = function(a, b) {
  return dc(this, b);
};
f.H = function(a, b) {
  return Ec(b, this);
};
f.I = function(a, b, c) {
  return Hc(b, c, this);
};
f.P = function() {
  return this.K.P(null).Xa();
};
f.R = function() {
  var a = this.K, a = (a ? a.f & 128 || a.Na || (a.f ? 0 : x(Ia, a)) : x(Ia, a)) ? this.K.Q(null) : M(this.K);
  return null != a ? new Ne(a, this.W) : Ob;
};
f.B = function() {
  return this;
};
f.J = function(a, b) {
  return new Ne(this.K, b);
};
f.C = function(a, b) {
  return P(b, this);
};
Ne.prototype[xa] = function() {
  return O(this);
};
function ge(a) {
  return(a = I(a)) ? new Ne(a, null) : null;
}
function me(a) {
  return Qa(a);
}
var Oe = function Oe() {
  return Oe.i(arguments[0], 1 < arguments.length ? new J(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Oe.i = function(a, b) {
  return u(ld(Jc, b)) ? Ic(function(a) {
    return function(b, e) {
      return Fc(a, u(b) ? b : je, I(e));
    };
  }(function(b, d) {
    var e = K(d), g = gc(d);
    return mc(b, e, yc) !== yc ? nc.g(b, e, function() {
      var d = lc(b, e);
      return a.a ? a.a(d, g) : a.call(null, d, g);
    }()) : nc.g(b, e, g);
  }), b) : null;
};
Oe.r = 1;
Oe.o = function(a) {
  var b = K(a);
  a = M(a);
  return Oe.i(b, a);
};
function Pe(a) {
  if (a && (a.p & 4096 || a.nb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([C("Doesn't support name: "), C(a)].join(""));
}
function Qe(a, b) {
  return new T(null, function() {
    var c = I(b);
    if (c) {
      var d;
      d = K(c);
      d = a.d ? a.d(d) : a.call(null, d);
      c = u(d) ? P(K(c), Qe(a, Nb(c))) : null;
    } else {
      c = null;
    }
    return c;
  }, null, null);
}
function Re(a, b, c, d) {
  return function(a) {
    return function() {
      function b(c, d, g) {
        return Fc(function() {
          return function(a, b) {
            return Q.a(a, b.g ? b.g(c, d, g) : b.call(null, c, d, g));
          };
        }(a), hc, a);
      }
      function c(b, d) {
        return Fc(function() {
          return function(a, c) {
            return Q.a(a, c.a ? c.a(b, d) : c.call(null, b, d));
          };
        }(a), hc, a);
      }
      function d(b) {
        return Fc(function() {
          return function(a, c) {
            return Q.a(a, c.d ? c.d(b) : c.call(null, b));
          };
        }(a), hc, a);
      }
      function l() {
        return Fc(function() {
          return function(a, b) {
            return Q.a(a, b.n ? b.n() : b.call(null));
          };
        }(a), hc, a);
      }
      var m = null, n = function() {
        function b(a, d, e, g) {
          var h = null;
          if (3 < arguments.length) {
            for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
              k[h] = arguments[h + 3], ++h;
            }
            h = new J(k, 0);
          }
          return c.call(this, a, d, e, h);
        }
        function c(b, d, g, h) {
          return Fc(function() {
            return function(a, c) {
              return Q.a(a, id(c, b, d, g, h));
            };
          }(a), hc, a);
        }
        b.r = 3;
        b.o = function(a) {
          var b = K(a);
          a = M(a);
          var d = K(a);
          a = M(a);
          var e = K(a);
          a = Nb(a);
          return c(b, d, e, a);
        };
        b.i = c;
        return b;
      }(), m = function(a, e, m, v) {
        switch(arguments.length) {
          case 0:
            return l.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, e);
          case 3:
            return b.call(this, a, e, m);
          default:
            var w = null;
            if (3 < arguments.length) {
              for (var w = 0, z = Array(arguments.length - 3);w < z.length;) {
                z[w] = arguments[w + 3], ++w;
              }
              w = new J(z, 0);
            }
            return n.i(a, e, m, w);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      m.r = 3;
      m.o = n.o;
      m.n = l;
      m.d = d;
      m.a = c;
      m.g = b;
      m.i = n.i;
      return m;
    }();
  }(P(a, P(b, P(c, d))));
}
function Se(a, b, c, d, e, g, h) {
  var k = ra;
  ra = null == ra ? null : ra - 1;
  try {
    if (null != ra && 0 > ra) {
      return H(a, "#");
    }
    H(a, c);
    if (0 === Bb.d(g)) {
      I(h) && H(a, function() {
        var a = Te.d(g);
        return u(a) ? a : "...";
      }());
    } else {
      if (I(h)) {
        var l = K(h);
        b.g ? b.g(l, a, g) : b.call(null, l, a, g);
      }
      for (var m = M(h), n = Bb.d(g) - 1;;) {
        if (!m || null != n && 0 === n) {
          I(m) && 0 === n && (H(a, d), H(a, function() {
            var a = Te.d(g);
            return u(a) ? a : "...";
          }()));
          break;
        } else {
          H(a, d);
          var p = K(m);
          c = a;
          h = g;
          b.g ? b.g(p, c, h) : b.call(null, p, c, h);
          var q = M(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return H(a, e);
  } finally {
    ra = k;
  }
}
function Ue(a, b) {
  for (var c = I(b), d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.O(null, g);
      H(a, h);
      g += 1;
    } else {
      if (c = I(c)) {
        d = c, vc(d) ? (c = pb(d), e = qb(d), d = c, h = R(c), c = e, e = h) : (h = K(d), H(a, h), c = M(d), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
}
var Ve = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function We(a) {
  return[C('"'), C(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ve[a];
  })), C('"')].join("");
}
function Xe(a, b, c) {
  if (null == a) {
    return H(b, "nil");
  }
  if (void 0 === a) {
    return H(b, "#\x3cundefined\x3e");
  }
  if (u(function() {
    var b = lc(c, zb);
    return u(b) ? (b = a ? a.f & 131072 || a.mb ? !0 : a.f ? !1 : x(Wa, a) : x(Wa, a)) ? sc(a) : b : b;
  }())) {
    H(b, "^");
    var d = sc(a);
    Y.g ? Y.g(d, b, c) : Y.call(null, d, b, c);
    H(b, " ");
  }
  return null == a ? H(b, "nil") : a.qb ? a.zb(a, b, c) : a && (a.f & 2147483648 || a.G) ? a.u(null, b, c) : va(a) === Boolean || "number" === typeof a ? H(b, "" + C(a)) : null != a && a.constructor === Object ? (H(b, "#js "), d = V.a(function(b) {
    return new W(null, 2, 5, Gd, [Tc.d(b), a[b]], null);
  }, wc(a)), Ye.N ? Ye.N(d, Y, b, c) : Ye.call(null, d, Y, b, c)) : ta(a) ? Se(b, Y, "#js [", " ", "]", c, a) : u("string" == typeof a) ? u(yb.d(c)) ? H(b, We(a)) : H(b, a) : pc(a) ? Ue(b, fc(["#\x3c", "" + C(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + C(a);;) {
      if (R(c) < b) {
        c = [C("0"), C(c)].join("");
      } else {
        return c;
      }
    }
  }, Ue(b, fc(['#inst "', "" + C(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : u(a instanceof RegExp) ? Ue(b, fc(['#"', a.source, '"'], 0)) : (a ? a.f & 2147483648 || a.G || (a.f ? 0 : x(gb, a)) : x(gb, a)) ? ib(a, b, c) : Ue(b, fc(["#\x3c", "" + C(a), "\x3e"], 0));
}
function Y(a, b, c) {
  var d = Ze.d(c);
  return u(d) ? (c = nc.g(c, $e, Xe), d.g ? d.g(a, b, c) : d.call(null, a, b, c)) : Xe(a, b, c);
}
function Ye(a, b, c, d) {
  return Se(c, function(a, c, d) {
    var k = Pa(a);
    b.g ? b.g(k, c, d) : b.call(null, k, c, d);
    H(c, " ");
    a = Qa(a);
    return b.g ? b.g(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, I(a));
}
J.prototype.G = !0;
J.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
T.prototype.G = !0;
T.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
De.prototype.G = !0;
De.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
de.prototype.G = !0;
de.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
Pd.prototype.G = !0;
Pd.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
Rc.prototype.G = !0;
Rc.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
He.prototype.G = !0;
He.prototype.u = function(a, b, c) {
  return Ye(this, Y, b, c);
};
Fe.prototype.G = !0;
Fe.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
Ud.prototype.G = !0;
Ud.prototype.u = function(a, b, c) {
  return Se(b, Y, "[", " ", "]", c, this);
};
Xc.prototype.G = !0;
Xc.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
Ne.prototype.G = !0;
Ne.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
W.prototype.G = !0;
W.prototype.u = function(a, b, c) {
  return Se(b, Y, "[", " ", "]", c, this);
};
Qc.prototype.G = !0;
Qc.prototype.u = function(a, b) {
  return H(b, "()");
};
wb.prototype.G = !0;
wb.prototype.u = function(a, b, c) {
  return Ye(this, Y, b, c);
};
Me.prototype.G = !0;
Me.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
Pc.prototype.G = !0;
Pc.prototype.u = function(a, b, c) {
  return Se(b, Y, "(", " ", ")", c, this);
};
W.prototype.Ja = !0;
W.prototype.Ka = function(a, b) {
  return Cc(this, b);
};
Ud.prototype.Ja = !0;
Ud.prototype.Ka = function(a, b) {
  return Cc(this, b);
};
S.prototype.Ja = !0;
S.prototype.Ka = function(a, b) {
  return Sc(this, b);
};
var zb = new S(null, "meta", "meta", 1499536964), Ab = new S(null, "dup", "dup", 556298533), $e = new S(null, "fallback-impl", "fallback-impl", -1501286995), xb = new S(null, "flush-on-newline", "flush-on-newline", -151457939), yb = new S(null, "readably", "readably", 1129599760), Te = new S(null, "more-marker", "more-marker", -14717935), Bb = new S(null, "print-length", "print-length", 1931866356), Ze = new S(null, "alt-impl", "alt-impl", 670969595);
function af(a) {
  var b = /[^a-z]/;
  if ("string" === typeof b) {
    return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "");
  }
  if (b instanceof RegExp) {
    return a.replace(new RegExp(b.source, "g"), "");
  }
  throw[C("Invalid match arg: "), C(b)].join("");
}
function bf(a) {
  var b = new ja;
  for (a = I(a);;) {
    if (a) {
      b.append("" + C(K(a))), a = M(a), null != a && b.append(" ");
    } else {
      return b.toString();
    }
  }
}
function cf(a) {
  var b = /\n|\r\n/;
  a = N.a("" + C(b), "/(?:)/") ? Q.a(Nd(P("", V.a(C, I(a)))), "") : Nd(("" + C(a)).split(b));
  if (N.a(0, 0)) {
    a: {
      for (;;) {
        if (N.a("", null == a ? null : Ra(a))) {
          a = null == a ? null : Sa(a);
        } else {
          break a;
        }
      }
    }
  }
  return a;
}
;ga("practice.funcs.crypto_square", function(a) {
  var b = af(a.toLowerCase());
  a = function() {
    var a;
    a = R(b);
    a = Math.sqrt.d ? Math.sqrt.d(a) : Math.sqrt.call(null, a);
    return Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a);
  }() | 0;
  return bf(V.a(function() {
    return function(a) {
      return gd(C, a);
    };
  }(b, a), hd(V, Od, td(a, a, qd(""), b))));
});
ga("practice.funcs.kinder_thread_last", function(a, b) {
  return hd(Oe, dd, V.a(function(b) {
    var d;
    if (I(a)) {
      d = ad.d ? ad.d(a) : ad.call(null, a);
      var e = Dc();
      oa(d, e);
      d = I(d);
    } else {
      d = Ob;
    }
    a: {
      for (e = sd(2, 2, b), b = jb(je), d = I(d), e = I(e);;) {
        if (d && e) {
          var g = K(d), h = K(e);
          b = mb(b, g, h);
          d = M(d);
          e = M(e);
        } else {
          b = lb(b);
          break a;
        }
      }
    }
    return b;
  }, V.a(function(a) {
    return V.a(new wb(null, 4, "V Violets R Radishes C Clover G Grass".split(" "), null), a);
  }, cf(b))));
});
function nd(a, b) {
  var c = Gd, d = Mc(b, 10) - 1, e = Mc(b, 10), g;
  a: {
    g = yc;
    for (var h = a, c = I(new W(null, 2, 5, c, [d, b - 10 * e - 1], null));;) {
      if (c) {
        if ((d = h) ? d.f & 256 || d.cb || (d.f ? 0 : x(Ja, d)) : x(Ja, d)) {
          h = mc(h, K(c), g);
          if (g === h) {
            g = null;
            break a;
          }
          c = M(c);
        } else {
          g = null;
          break a;
        }
      } else {
        g = h;
        break a;
      }
    }
  }
  return N.a(g, b) ? null : g;
}
ga("practice.funcs.map_step", nd);
ga("practice.funcs.treasure_hunt", function(a, b) {
  return Qe(Jc, rd(md(a), b));
});
ga("practice.funcs.queen_attack_QMARK_", function(a, b) {
  var c = V.g(Lc, a, b), c = Re(K, gc, function() {
    return function(a) {
      return Ic(Lc, a);
    };
  }(c), fc([function() {
    return function(a) {
      return Ic(Kc, a);
    };
  }(c)], 0)).call(null, c);
  return!0 === ld(Oc, c);
});

})();
