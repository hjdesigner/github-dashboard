
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.1
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!(function (t) { if (typeof exports === 'object' && typeof module !== 'undefined')module.exports = t(); else if (typeof define === 'function' && define.amd)define([], t); else { (typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this).Chart = t(); } }(() => (function t(e, n, i) { function a(r, l) { if (!n[r]) { if (!e[r]) { const s = typeof require === 'function' && require; if (!l && s) return s(r, !0); if (o) return o(r, !0); const u = new Error(`Cannot find module '${r}'`); throw u.code = 'MODULE_NOT_FOUND', u; } const d = n[r] = { exports: {} }; e[r][0].call(d.exports, (t) => { const n = e[r][1][t]; return a(n || t); }, d, d.exports, t, e, n, i); } return n[r].exports; } for (var o = typeof require === 'function' && require, r = 0; r < i.length; r++)a(i[r]); return a; }({
  1: [function (t, e, n) {}, {}],
  2: [function (t, e, n) {
    function i(t) {
      if (t) {
        let e = [0, 0, 0],
          n = 1,
          i = t.match(/^#([a-fA-F0-9]{3})$/i); if (i) { i = i[1]; for (a = 0; a < e.length; a++)e[a] = parseInt(i[a] + i[a], 16); } else if (i = t.match(/^#([a-fA-F0-9]{6})$/i)) { i = i[1]; for (a = 0; a < e.length; a++)e[a] = parseInt(i.slice(2 * a, 2 * a + 2), 16); } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (a = 0; a < e.length; a++)e[a] = parseInt(i[a + 1]); n = parseFloat(i[4]); } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (a = 0; a < e.length; a++)e[a] = Math.round(2.55 * parseFloat(i[a + 1])); n = parseFloat(i[4]); } else if (i = t.match(/(\w+)/)) { if (i[1] == 'transparent') return [0, 0, 0, 0]; if (!(e = c[i[1]])) return; } for (var a = 0; a < e.length; a++)e[a] = u(e[a], 0, 255); return n = n || n == 0 ? u(n, 0, 1) : 1, e[3] = n, e;
      }
    } function a(t) { if (t) { const e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (e) { const n = parseFloat(e[4]); return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]; } } } function o(t) { if (t) { const e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (e) { const n = parseFloat(e[4]); return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]; } } } function r(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), `rgba(${t[0]}, ${t[1]}, ${t[2]}, ${e})`; } function l(t, e) { return `rgba(${Math.round(t[0] / 255 * 100)}%, ${Math.round(t[1] / 255 * 100)}%, ${Math.round(t[2] / 255 * 100)}%, ${e || t[3] || 1})`; } function s(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), `hsla(${t[0]}, ${t[1]}%, ${t[2]}%, ${e})`; } function u(t, e, n) { return Math.min(Math.max(e, t), n); } function d(t) { const e = t.toString(16).toUpperCase(); return e.length < 2 ? `0${e}` : e; } var c = t(6); e.exports = {
      getRgba: i, getHsla: a, getRgb(t) { const e = i(t); return e && e.slice(0, 3); }, getHsl(t) { const e = a(t); return e && e.slice(0, 3); }, getHwb: o, getAlpha(t) { let e = i(t); return e ? e[3] : (e = a(t)) ? e[3] : (e = o(t)) ? e[3] : void 0; }, hexString(t) { return `#${d(t[0])}${d(t[1])}${d(t[2])}`; }, rgbString(t, e) { return e < 1 || t[3] && t[3] < 1 ? r(t, e) : `rgb(${t[0]}, ${t[1]}, ${t[2]})`; }, rgbaString: r, percentString(t, e) { return e < 1 || t[3] && t[3] < 1 ? l(t, e) : `rgb(${Math.round(t[0] / 255 * 100)}%, ${Math.round(t[1] / 255 * 100)}%, ${Math.round(t[2] / 255 * 100)}%)`; }, percentaString: l, hslString(t, e) { return e < 1 || t[3] && t[3] < 1 ? s(t, e) : `hsl(${t[0]}, ${t[1]}%, ${t[2]}%)`; }, hslaString: s, hwbString(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), `hwb(${t[0]}, ${t[1]}%, ${t[2]}%${void 0 !== e && e !== 1 ? `, ${e}` : ''})`; }, keyword(t) { return h[t.slice(0, 3)]; },
    }; var h = {}; for (const f in c)h[c[f]] = f;
  }, { 6: 6 }],
  3: [function (t, e, n) {
    var i = t(5),
      a = t(2),
      o = function (t) {
        if (t instanceof o) return t; if (!(this instanceof o)) return new o(t); this.valid = !1, this.values = {
          rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1,
        }; let e; typeof t === 'string' ? (e = a.getRgba(t)) ? this.setValues('rgb', e) : (e = a.getHsla(t)) ? this.setValues('hsl', e) : (e = a.getHwb(t)) && this.setValues('hwb', e) : typeof t === 'object' && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues('rgb', e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues('hsl', e) : void 0 !== e.v || void 0 !== e.value ? this.setValues('hsv', e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues('hwb', e) : void 0 === e.c && void 0 === e.cyan || this.setValues('cmyk', e));
      }; o.prototype = {
      isValid() { return this.valid; },
      rgb() { return this.setSpace('rgb', arguments); },
      hsl() { return this.setSpace('hsl', arguments); },
      hsv() { return this.setSpace('hsv', arguments); },
      hwb() { return this.setSpace('hwb', arguments); },
      cmyk() { return this.setSpace('cmyk', arguments); },
      rgbArray() { return this.values.rgb; },
      hslArray() { return this.values.hsl; },
      hsvArray() { return this.values.hsv; },
      hwbArray() { const t = this.values; return t.alpha !== 1 ? t.hwb.concat([t.alpha]) : t.hwb; },
      cmykArray() { return this.values.cmyk; },
      rgbaArray() { const t = this.values; return t.rgb.concat([t.alpha]); },
      hslaArray() { const t = this.values; return t.hsl.concat([t.alpha]); },
      alpha(t) { return void 0 === t ? this.values.alpha : (this.setValues('alpha', t), this); },
      red(t) { return this.setChannel('rgb', 0, t); },
      green(t) { return this.setChannel('rgb', 1, t); },
      blue(t) { return this.setChannel('rgb', 2, t); },
      hue(t) { return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel('hsl', 0, t); },
      saturation(t) { return this.setChannel('hsl', 1, t); },
      lightness(t) { return this.setChannel('hsl', 2, t); },
      saturationv(t) { return this.setChannel('hsv', 1, t); },
      whiteness(t) { return this.setChannel('hwb', 1, t); },
      blackness(t) { return this.setChannel('hwb', 2, t); },
      value(t) { return this.setChannel('hsv', 2, t); },
      cyan(t) { return this.setChannel('cmyk', 0, t); },
      magenta(t) { return this.setChannel('cmyk', 1, t); },
      yellow(t) { return this.setChannel('cmyk', 2, t); },
      black(t) { return this.setChannel('cmyk', 3, t); },
      hexString() { return a.hexString(this.values.rgb); },
      rgbString() { return a.rgbString(this.values.rgb, this.values.alpha); },
      rgbaString() { return a.rgbaString(this.values.rgb, this.values.alpha); },
      percentString() { return a.percentString(this.values.rgb, this.values.alpha); },
      hslString() { return a.hslString(this.values.hsl, this.values.alpha); },
      hslaString() { return a.hslaString(this.values.hsl, this.values.alpha); },
      hwbString() { return a.hwbString(this.values.hwb, this.values.alpha); },
      keyword() { return a.keyword(this.values.rgb, this.values.alpha); },
      rgbNumber() { const t = this.values.rgb; return t[0] << 16 | t[1] << 8 | t[2]; },
      luminosity() { for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) { const i = t[n] / 255; e[n] = i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4); } return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]; },
      contrast(t) {
        let e = this.luminosity(),
          n = t.luminosity(); return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
      },
      level(t) { const e = this.contrast(t); return e >= 7.1 ? 'AAA' : e >= 4.5 ? 'AA' : ''; },
      dark() { const t = this.values.rgb; return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128; },
      light() { return !this.dark(); },
      negate() { for (var t = [], e = 0; e < 3; e++)t[e] = 255 - this.values.rgb[e]; return this.setValues('rgb', t), this; },
      lighten(t) { const e = this.values.hsl; return e[2] += e[2] * t, this.setValues('hsl', e), this; },
      darken(t) { const e = this.values.hsl; return e[2] -= e[2] * t, this.setValues('hsl', e), this; },
      saturate(t) { const e = this.values.hsl; return e[1] += e[1] * t, this.setValues('hsl', e), this; },
      desaturate(t) { const e = this.values.hsl; return e[1] -= e[1] * t, this.setValues('hsl', e), this; },
      whiten(t) { const e = this.values.hwb; return e[1] += e[1] * t, this.setValues('hwb', e), this; },
      blacken(t) { const e = this.values.hwb; return e[2] += e[2] * t, this.setValues('hwb', e), this; },
      greyscale() {
        let t = this.values.rgb,
          e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2]; return this.setValues('rgb', [e, e, e]), this;
      },
      clearer(t) { const e = this.values.alpha; return this.setValues('alpha', e - e * t), this; },
      opaquer(t) { const e = this.values.alpha; return this.setValues('alpha', e + e * t), this; },
      rotate(t) {
        let e = this.values.hsl,
          n = (e[0] + t) % 360; return e[0] = n < 0 ? 360 + n : n, this.setValues('hsl', e), this;
      },
      mix(t, e) {
        let n = this,
          i = t,
          a = void 0 === e ? 0.5 : e,
          o = 2 * a - 1,
          r = n.alpha() - i.alpha(),
          l = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
          s = 1 - l; return this.rgb(l * n.red() + s * i.red(), l * n.green() + s * i.green(), l * n.blue() + s * i.blue()).alpha(n.alpha() * a + i.alpha() * (1 - a));
      },
      toJSON() { return this.rgb(); },
      clone() {
        let t,
          e,
          n = new o(),
          i = this.values,
          a = n.values; for (const r in i)i.hasOwnProperty(r) && (t = i[r], (e = {}.toString.call(t)) === '[object Array]' ? a[r] = t.slice(0) : e === '[object Number]' ? a[r] = t : console.error('unexpected color value:', t)); return n;
      },
    }, o.prototype.spaces = {
      rgb: ['red', 'green', 'blue'], hsl: ['hue', 'saturation', 'lightness'], hsv: ['hue', 'saturation', 'value'], hwb: ['hue', 'whiteness', 'blackness'], cmyk: ['cyan', 'magenta', 'yellow', 'black'],
    }, o.prototype.maxes = {
      rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100],
    }, o.prototype.getValues = function (t) { for (var e = this.values, n = {}, i = 0; i < t.length; i++)n[t.charAt(i)] = e[t][i]; return e.alpha !== 1 && (n.a = e.alpha), n; }, o.prototype.setValues = function (t, e) {
      let n,
        a = this.values,
        o = this.spaces,
        r = this.maxes,
        l = 1; if (this.valid = !0, t === 'alpha')l = e; else if (e.length)a[t] = e.slice(0, t.length), l = e[t.length]; else if (void 0 !== e[t.charAt(0)]) { for (n = 0; n < t.length; n++)a[t][n] = e[t.charAt(n)]; l = e.a; } else if (void 0 !== e[o[t][0]]) { const s = o[t]; for (n = 0; n < t.length; n++)a[t][n] = e[s[n]]; l = e.alpha; } if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), t === 'alpha') return !1; let u; for (n = 0; n < t.length; n++)u = Math.max(0, Math.min(r[t][n], a[t][n])), a[t][n] = Math.round(u); for (const d in o)d !== t && (a[d] = i[t][d](a[t])); return !0;
    }, o.prototype.setSpace = function (t, e) { let n = e[0]; return void 0 === n ? this.getValues(t) : (typeof n === 'number' && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this); }, o.prototype.setChannel = function (t, e, n) { const i = this.values[t]; return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this); }, typeof window !== 'undefined' && (window.Color = o), e.exports = o;
  }, { 2: 2, 5: 5 }],
  4: [function (t, e, n) {
    function i(t) {
      let e,
        n,
        i,
        a = t[0] / 255,
        o = t[1] / 255,
        r = t[2] / 255,
        l = Math.min(a, o, r),
        s = Math.max(a, o, r),
        u = s - l; return s == l ? e = 0 : a == s ? e = (o - r) / u : o == s ? e = 2 + (r - a) / u : r == s && (e = 4 + (a - o) / u), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (l + s) / 2, n = s == l ? 0 : i <= 0.5 ? u / (s + l) : u / (2 - s - l), [e, 100 * n, 100 * i];
    } function a(t) {
      let e,
        n,
        i,
        a = t[0],
        o = t[1],
        r = t[2],
        l = Math.min(a, o, r),
        s = Math.max(a, o, r),
        u = s - l; return n = s == 0 ? 0 : u / s * 1e3 / 10, s == l ? e = 0 : a == s ? e = (o - r) / u : o == s ? e = 2 + (r - a) / u : r == s && (e = 4 + (a - o) / u), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = s / 255 * 1e3 / 10, [e, n, i];
    } function o(t) {
      let e = t[0],
        n = t[1],
        a = t[2]; return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))];
    } function l(t) {
      let e,
        n,
        i,
        a,
        o = t[0] / 255,
        r = t[1] / 255,
        l = t[2] / 255; return a = Math.min(1 - o, 1 - r, 1 - l), e = (1 - o - a) / (1 - a) || 0, n = (1 - r - a) / (1 - a) || 0, i = (1 - l - a) / (1 - a) || 0, [100 * e, 100 * n, 100 * i, 100 * a];
    } function s(t) { return C[JSON.stringify(t)]; } function u(t) {
      let e = t[0] / 255,
        n = t[1] / 255,
        i = t[2] / 255; return [100 * (0.4124 * (e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92) + 0.3576 * (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92) + 0.1805 * (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92)), 100 * (0.2126 * e + 0.7152 * n + 0.0722 * i), 100 * (0.0193 * e + 0.1192 * n + 0.9505 * i)];
    } function d(t) {
      let e,
        n,
        i,
        a = u(t),
        o = a[0],
        r = a[1],
        l = a[2]; return o /= 95.047, r /= 100, l /= 108.883, o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, l = l > 0.008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, e = 116 * r - 16, n = 500 * (o - r), i = 200 * (r - l), [e, n, i];
    } function c(t) {
      let e,
        n,
        i,
        a,
        o,
        r = t[0] / 360,
        l = t[1] / 100,
        s = t[2] / 100; if (l == 0) return o = 255 * s, [o, o, o]; e = 2 * s - (n = s < 0.5 ? s * (1 + l) : s + l - s * l), a = [0, 0, 0]; for (let u = 0; u < 3; u++)(i = r + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, o = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * o; return a;
    } function h(t) {
      var e = t[0] / 60,
        n = t[1] / 100,
        i = t[2] / 100,
        a = Math.floor(e) % 6,
        o = e - Math.floor(e),
        r = 255 * i * (1 - n),
        l = 255 * i * (1 - n * o),
        s = 255 * i * (1 - n * (1 - o)),
        i = 255 * i; switch (a) { case 0: return [i, s, r]; case 1: return [l, i, r]; case 2: return [r, i, s]; case 3: return [r, l, i]; case 4: return [s, r, i]; case 5: return [i, r, l]; }
    } function f(t) {
      let e,
        n,
        i,
        a,
        o = t[0] / 360,
        l = t[1] / 100,
        s = t[2] / 100,
        u = l + s; switch (u > 1 && (l /= u, s /= u), e = Math.floor(6 * o), n = 1 - s, i = 6 * o - e, (1 & e) != 0 && (i = 1 - i), a = l + i * (n - l), e) { default: case 6: case 0: r = n, g = a, b = l; break; case 1: r = a, g = n, b = l; break; case 2: r = l, g = n, b = a; break; case 3: r = l, g = a, b = n; break; case 4: r = a, g = l, b = n; break; case 5: r = n, g = l, b = a; } return [255 * r, 255 * g, 255 * b];
    } function p(t) {
      let e,
        n,
        i,
        a = t[0] / 100,
        o = t[1] / 100,
        r = t[2] / 100,
        l = t[3] / 100; return e = 1 - Math.min(1, a * (1 - l) + l), n = 1 - Math.min(1, o * (1 - l) + l), i = 1 - Math.min(1, r * (1 - l) + l), [255 * e, 255 * n, 255 * i];
    } function v(t) {
      let e,
        n,
        i,
        a = t[0] / 100,
        o = t[1] / 100,
        r = t[2] / 100; return e = 3.2406 * a + -1.5372 * o + -0.4986 * r, n = -0.9689 * a + 1.8758 * o + 0.0415 * r, i = 0.0557 * a + -0.204 * o + 1.057 * r, e = e > 0.0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055 : e *= 12.92, n = n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : n *= 12.92, i = i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : i *= 12.92, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i];
    } function m(t) {
      let e,
        n,
        i,
        a = t[0],
        o = t[1],
        r = t[2]; return a /= 95.047, o /= 100, r /= 108.883, a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, n = 500 * (a - o), i = 200 * (o - r), [e, n, i];
    } function x(t) {
      let e,
        n,
        i,
        a,
        o = t[0],
        r = t[1],
        l = t[2]; return o <= 8 ? a = (n = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), e = e / 95.047 <= 0.008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i = i / 108.883 <= 0.008859 ? i = 108.883 * (a - l / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - l / 200, 3), [e, n, i];
    } function y(t) {
      let e,
        n,
        i,
        a = t[0],
        o = t[1],
        r = t[2]; return e = Math.atan2(r, o), (n = 360 * e / 2 / Math.PI) < 0 && (n += 360), i = Math.sqrt(o * o + r * r), [a, i, n];
    } function k(t) { return v(x(t)); } function w(t) {
      let e,
        n,
        i,
        a = t[0],
        o = t[1]; return i = t[2] / 360 * 2 * Math.PI, e = o * Math.cos(i), n = o * Math.sin(i), [a, e, n];
    } function M(t) { return S[t]; }e.exports = {
      rgb2hsl: i,
      rgb2hsv: a,
      rgb2hwb: o,
      rgb2cmyk: l,
      rgb2keyword: s,
      rgb2xyz: u,
      rgb2lab: d,
      rgb2lch(t) { return y(d(t)); },
      hsl2rgb: c,
      hsl2hsv(t) {
        let e,
          n,
          i = t[0],
          a = t[1] / 100,
          o = t[2] / 100; return o === 0 ? [0, 0, 0] : (o *= 2, a *= o <= 1 ? o : 2 - o, n = (o + a) / 2, e = 2 * a / (o + a), [i, 100 * e, 100 * n]);
      },
      hsl2hwb(t) { return o(c(t)); },
      hsl2cmyk(t) { return l(c(t)); },
      hsl2keyword(t) { return s(c(t)); },
      hsv2rgb: h,
      hsv2hsl(t) {
        let e,
          n,
          i = t[0],
          a = t[1] / 100,
          o = t[2] / 100; return n = (2 - a) * o, e = a * o, e /= n <= 1 ? n : 2 - n, e = e || 0, n /= 2, [i, 100 * e, 100 * n];
      },
      hsv2hwb(t) { return o(h(t)); },
      hsv2cmyk(t) { return l(h(t)); },
      hsv2keyword(t) { return s(h(t)); },
      hwb2rgb: f,
      hwb2hsl(t) { return i(f(t)); },
      hwb2hsv(t) { return a(f(t)); },
      hwb2cmyk(t) { return l(f(t)); },
      hwb2keyword(t) { return s(f(t)); },
      cmyk2rgb: p,
      cmyk2hsl(t) { return i(p(t)); },
      cmyk2hsv(t) { return a(p(t)); },
      cmyk2hwb(t) { return o(p(t)); },
      cmyk2keyword(t) { return s(p(t)); },
      keyword2rgb: M,
      keyword2hsl(t) { return i(M(t)); },
      keyword2hsv(t) { return a(M(t)); },
      keyword2hwb(t) { return o(M(t)); },
      keyword2cmyk(t) { return l(M(t)); },
      keyword2lab(t) { return d(M(t)); },
      keyword2xyz(t) { return u(M(t)); },
      xyz2rgb: v,
      xyz2lab: m,
      xyz2lch(t) { return y(m(t)); },
      lab2xyz: x,
      lab2rgb: k,
      lab2lch: y,
      lch2lab: w,
      lch2xyz(t) { return x(w(t)); },
      lch2rgb(t) { return k(w(t)); },
    }; var S = {
        aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50],
      },
      C = {}; for (const _ in S)C[JSON.stringify(S[_])] = _;
  }, {}],
  5: [function (t, e, n) {
    let i = t(4),
      a = function () { return new u(); }; for (const o in i) {
      a[`${o}Raw`] = (function (t) { return function (e) { return typeof e === 'number' && (e = Array.prototype.slice.call(arguments)), i[t](e); }; }(o)); let r = /(\w+)2(\w+)/.exec(o),
        l = r[1],
        s = r[2]; (a[l] = a[l] || {})[s] = a[o] = (function (t) { return function (e) { typeof e === 'number' && (e = Array.prototype.slice.call(arguments)); const n = i[t](e); if (typeof n === 'string' || void 0 === n) return n; for (let a = 0; a < n.length; a++)n[a] = Math.round(n[a]); return n; }; }(o));
    } var u = function () { this.convs = {}; }; u.prototype.routeSpace = function (t, e) { let n = e[0]; return void 0 === n ? this.getValues(t) : (typeof n === 'number' && (n = Array.prototype.slice.call(e)), this.setValues(t, n)); }, u.prototype.setValues = function (t, e) { return this.space = t, this.convs = {}, this.convs[t] = e, this; }, u.prototype.getValues = function (t) {
      let e = this.convs[t]; if (!e) {
        let n = this.space,
          i = this.convs[n]; e = a[n][t](i), this.convs[t] = e;
      } return e;
    }, ['rgb', 'hsl', 'hsv', 'cmyk', 'keyword'].forEach((t) => { u.prototype[t] = function (e) { return this.routeSpace(t, arguments); }; }), e.exports = a;
  }, { 4: 4 }],
  6: [function (t, e, n) {
    e.exports = {
      aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50],
    };
  }, {}],
  7: [function (t, e, n) { const i = t(29)(); i.helpers = t(45), t(27)(i), i.defaults = t(25), i.Element = t(26), i.elements = t(40), i.Interaction = t(28), i.platform = t(48), t(31)(i), t(22)(i), t(23)(i), t(24)(i), t(30)(i), t(33)(i), t(32)(i), t(35)(i), t(54)(i), t(52)(i), t(53)(i), t(55)(i), t(56)(i), t(57)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(21)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i); const a = []; a.push(t(49)(i), t(50)(i), t(51)(i)), i.plugins.register(a), i.platform.initialize(), e.exports = i, typeof window !== 'undefined' && (window.Chart = i), i.canvasHelpers = i.helpers.canvas; }, {
    10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 35: 35, 40: 40, 45: 45, 48: 48, 49: 49, 50: 50, 51: 51, 52: 52, 53: 53, 54: 54, 55: 55, 56: 56, 57: 57, 8: 8, 9: 9,
  }],
  8: [function (t, e, n) {
    e.exports = function (t) { t.Bar = function (e, n) { return n.type = 'bar', new t(e, n); }; };
  }, {}],
  9: [function (t, e, n) {
    e.exports = function (t) { t.Bubble = function (e, n) { return n.type = 'bubble', new t(e, n); }; };
  }, {}],
  10: [function (t, e, n) {
    e.exports = function (t) { t.Doughnut = function (e, n) { return n.type = 'doughnut', new t(e, n); }; };
  }, {}],
  11: [function (t, e, n) {
    e.exports = function (t) { t.Line = function (e, n) { return n.type = 'line', new t(e, n); }; };
  }, {}],
  12: [function (t, e, n) {
    e.exports = function (t) { t.PolarArea = function (e, n) { return n.type = 'polarArea', new t(e, n); }; };
  }, {}],
  13: [function (t, e, n) {
    e.exports = function (t) { t.Radar = function (e, n) { return n.type = 'radar', new t(e, n); }; };
  }, {}],
  14: [function (t, e, n) {
    e.exports = function (t) { t.Scatter = function (e, n) { return n.type = 'scatter', new t(e, n); }; };
  }, {}],
  15: [function (t, e, n) {
    let i = t(25),
      a = t(40),
      o = t(45); i._set('bar', {
      hover: { mode: 'label' },
      scales: {
        xAxes: [{
          type: 'category', categoryPercentage: 0.8, barPercentage: 0.9, offset: !0, gridLines: { offsetGridLines: !0 },
        }],
        yAxes: [{ type: 'linear' }],
      },
    }), i._set('horizontalBar', {
      hover: { mode: 'index', axis: 'y' },
      scales: {
        xAxes: [{ type: 'linear', position: 'bottom' }],
        yAxes: [{
          position: 'left', type: 'category', categoryPercentage: 0.8, barPercentage: 0.9, offset: !0, gridLines: { offsetGridLines: !0 },
        }],
      },
      elements: { rectangle: { borderSkipped: 'left' } },
      tooltips: { callbacks: { title(t, e) { let n = ''; return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n; }, label(t, e) { return `${e.datasets[t.datasetIndex].label || ''}: ${t.xLabel}`; } }, mode: 'index', axis: 'y' },
    }), e.exports = function (t) {
      t.controllers.bar = t.DatasetController.extend({
        dataElementType: a.Rectangle,
        initialize() {
          let e,
            n = this; t.DatasetController.prototype.initialize.apply(n, arguments), (e = n.getMeta()).stack = n.getDataset().stack, e.bar = !0;
        },
        update(t) {
          let e,
            n,
            i = this,
            a = i.getMeta().data; for (i._ruler = i.getRuler(), e = 0, n = a.length; e < n; ++e)i.updateElement(a[e], e, t);
        },
        updateElement(t, e, n) {
          let i = this,
            a = i.chart,
            r = i.getMeta(),
            l = i.getDataset(),
            s = t.custom || {},
            u = a.options.elements.rectangle; t._xScale = i.getScaleForId(r.xAxisID), t._yScale = i.getScaleForId(r.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
            datasetLabel: l.label, label: a.data.labels[e], borderSkipped: s.borderSkipped ? s.borderSkipped : u.borderSkipped, backgroundColor: s.backgroundColor ? s.backgroundColor : o.valueAtIndexOrDefault(l.backgroundColor, e, u.backgroundColor), borderColor: s.borderColor ? s.borderColor : o.valueAtIndexOrDefault(l.borderColor, e, u.borderColor), borderWidth: s.borderWidth ? s.borderWidth : o.valueAtIndexOrDefault(l.borderWidth, e, u.borderWidth),
          }, i.updateElementGeometry(t, e, n), t.pivot();
        },
        updateElementGeometry(t, e, n) {
          let i = this,
            a = t._model,
            o = i.getValueScale(),
            r = o.getBasePixel(),
            l = o.isHorizontal(),
            s = i._ruler || i.getRuler(),
            u = i.calculateBarValuePixels(i.index, e),
            d = i.calculateBarIndexPixels(i.index, e, s); a.horizontal = l, a.base = n ? r : u.base, a.x = l ? n ? r : u.head : d.center, a.y = l ? d.center : n ? r : u.head, a.height = l ? d.size : void 0, a.width = l ? void 0 : d.size;
        },
        getValueScaleId() { return this.getMeta().yAxisID; },
        getIndexScaleId() { return this.getMeta().xAxisID; },
        getValueScale() { return this.getScaleForId(this.getValueScaleId()); },
        getIndexScale() { return this.getScaleForId(this.getIndexScaleId()); },
        getStackCount(t) {
          let e,
            n,
            i = this,
            a = i.chart,
            o = i.getIndexScale().options.stacked,
            r = void 0 === t ? a.data.datasets.length : t + 1,
            l = []; for (e = 0; e < r; ++e)(n = a.getDatasetMeta(e)).bar && a.isDatasetVisible(e) && (!1 === o || !0 === o && l.indexOf(n.stack) === -1 || void 0 === o && (void 0 === n.stack || l.indexOf(n.stack) === -1)) && l.push(n.stack); return l.length;
        },
        getStackIndex(t) { return this.getStackCount(t) - 1; },
        getRuler() {
          let t,
            e,
            n = this,
            i = n.getIndexScale(),
            a = n.getStackCount(),
            o = n.index,
            r = [],
            l = i.isHorizontal(),
            s = l ? i.left : i.top,
            u = s + (l ? i.width : i.height); for (t = 0, e = n.getMeta().data.length; t < e; ++t)r.push(i.getPixelForValue(null, t, o)); return {
            pixels: r, start: s, end: u, stackCount: a, scale: i,
          };
        },
        calculateBarValuePixels(t, e) {
          let n,
            i,
            a,
            o,
            r,
            l,
            s = this,
            u = s.chart,
            d = s.getMeta(),
            c = s.getValueScale(),
            h = u.data.datasets,
            f = c.getRightValue(h[t].data[e]),
            g = c.options.stacked,
            p = d.stack,
            v = 0; if (g || void 0 === g && void 0 !== p) for (n = 0; n < t; ++n)(i = u.getDatasetMeta(n)).bar && i.stack === p && i.controller.getValueScaleId() === c.id && u.isDatasetVisible(n) && (a = c.getRightValue(h[n].data[e]), (f < 0 && a < 0 || f >= 0 && a > 0) && (v += a)); return o = c.getPixelForValue(v), r = c.getPixelForValue(v + f), l = (r - o) / 2, {
            size: l, base: o, head: r, center: r + l / 2,
          };
        },
        calculateBarIndexPixels(t, e, n) {
          let i,
            a,
            r,
            l,
            s,
            u,
            d = this,
            c = n.scale.options,
            h = d.getStackIndex(t),
            f = n.pixels,
            g = f[e],
            p = f.length,
            v = n.start,
            m = n.end; return p === 1 ? (i = g > v ? g - v : m - g, a = g < m ? m - g : g - v) : (e > 0 && (i = (g - f[e - 1]) / 2, e === p - 1 && (a = i)), e < p - 1 && (a = (f[e + 1] - g) / 2, e === 0 && (i = a))), r = i * c.categoryPercentage, l = a * c.categoryPercentage, s = (r + l) / n.stackCount, u = s * c.barPercentage, u = Math.min(o.valueOrDefault(c.barThickness, u), o.valueOrDefault(c.maxBarThickness, 1 / 0)), g -= r, g += s * h, g += (s - u) / 2, {
            size: u, base: g, head: g + u, center: g + u / 2,
          };
        },
        draw() {
          let t = this,
            e = t.chart,
            n = t.getValueScale(),
            i = t.getMeta().data,
            a = t.getDataset(),
            r = i.length,
            l = 0; for (o.canvas.clipArea(e.ctx, e.chartArea); l < r; ++l)isNaN(n.getRightValue(a.data[l])) || i[l].draw(); o.canvas.unclipArea(e.ctx);
        },
        setHoverStyle(t) {
          let e = this.chart.data.datasets[t._datasetIndex],
            n = t._index,
            i = t.custom || {},
            a = t._model; a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o.valueAtIndexOrDefault(e.hoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o.valueAtIndexOrDefault(e.hoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o.valueAtIndexOrDefault(e.hoverBorderWidth, n, a.borderWidth);
        },
        removeHoverStyle(t) {
          let e = this.chart.data.datasets[t._datasetIndex],
            n = t._index,
            i = t.custom || {},
            a = t._model,
            r = this.chart.options.elements.rectangle; a.backgroundColor = i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(e.backgroundColor, n, r.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(e.borderColor, n, r.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(e.borderWidth, n, r.borderWidth);
        },
      }), t.controllers.horizontalBar = t.controllers.bar.extend({ getValueScaleId() { return this.getMeta().xAxisID; }, getIndexScaleId() { return this.getMeta().yAxisID; } });
    };
  }, { 25: 25, 40: 40, 45: 45 }],
  16: [function (t, e, n) {
    let i = t(25),
      a = t(40),
      o = t(45); i._set('bubble', {
      hover: { mode: 'single' },
      scales: { xAxes: [{ type: 'linear', position: 'bottom', id: 'x-axis-0' }], yAxes: [{ type: 'linear', position: 'left', id: 'y-axis-0' }] },
      tooltips: {
        callbacks: {
          title() { return ''; },
          label(t, e) {
            let n = e.datasets[t.datasetIndex].label || '',
              i = e.datasets[t.datasetIndex].data[t.index]; return `${n}: (${t.xLabel}, ${t.yLabel}, ${i.r})`;
          },
        },
      },
    }), e.exports = function (t) {
      t.controllers.bubble = t.DatasetController.extend({
        dataElementType: a.Point,
        update(t) {
          let e = this,
            n = e.getMeta().data; o.each(n, (n, i) => { e.updateElement(n, i, t); });
        },
        updateElement(t, e, n) {
          let i = this,
            a = i.getMeta(),
            o = t.custom || {},
            r = i.getScaleForId(a.xAxisID),
            l = i.getScaleForId(a.yAxisID),
            s = i._resolveElementOptions(t, e),
            u = i.getDataset().data[e],
            d = i.index,
            c = n ? r.getPixelForDecimal(0.5) : r.getPixelForValue(typeof u === 'object' ? u : NaN, e, d),
            h = n ? l.getBasePixel() : l.getPixelForValue(u, e, d); t._xScale = r, t._yScale = l, t._options = s, t._datasetIndex = d, t._index = e, t._model = {
            backgroundColor: s.backgroundColor, borderColor: s.borderColor, borderWidth: s.borderWidth, hitRadius: s.hitRadius, pointStyle: s.pointStyle, radius: n ? 0 : s.radius, skip: o.skip || isNaN(c) || isNaN(h), x: c, y: h,
          }, t.pivot();
        },
        setHoverStyle(t) {
          let e = t._model,
            n = t._options; e.backgroundColor = o.valueOrDefault(n.hoverBackgroundColor, o.getHoverColor(n.backgroundColor)), e.borderColor = o.valueOrDefault(n.hoverBorderColor, o.getHoverColor(n.borderColor)), e.borderWidth = o.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius;
        },
        removeHoverStyle(t) {
          let e = t._model,
            n = t._options; e.backgroundColor = n.backgroundColor, e.borderColor = n.borderColor, e.borderWidth = n.borderWidth, e.radius = n.radius;
        },
        _resolveElementOptions(t, e) {
          let n,
            i,
            a,
            r = this,
            l = r.chart,
            s = l.data.datasets[r.index],
            u = t.custom || {},
            d = l.options.elements.point,
            c = o.options.resolve,
            h = s.data[e],
            f = {},
            g = {
              chart: l, dataIndex: e, dataset: s, datasetIndex: r.index,
            },
            p = ['backgroundColor', 'borderColor', 'borderWidth', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth', 'hoverRadius', 'hitRadius', 'pointStyle']; for (n = 0, i = p.length; n < i; ++n)f[a = p[n]] = c([u[a], s[a], d[a]], g, e); return f.radius = c([u.radius, h ? h.r : void 0, s.radius, d.radius], g, e), f;
        },
      });
    };
  }, { 25: 25, 40: 40, 45: 45 }],
  17: [function (t, e, n) {
    let i = t(25),
      a = t(40),
      o = t(45); i._set('doughnut', {
      animation: { animateRotate: !0, animateScale: !1 },
      hover: { mode: 'single' },
      legendCallback(t) {
        const e = []; e.push(`<ul class="${t.id}-legend">`); let n = t.data,
          i = n.datasets,
          a = n.labels; if (i.length) for (let o = 0; o < i[0].data.length; ++o)e.push(`<li><span style="background-color:${i[0].backgroundColor[o]}"></span>`), a[o] && e.push(a[o]), e.push('</li>'); return e.push('</ul>'), e.join('');
      },
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data; return e.labels.length && e.datasets.length ? e.labels.map((n, i) => {
              let a = t.getDatasetMeta(0),
                r = e.datasets[0],
                l = a.data[i],
                s = l && l.custom || {},
                u = o.valueAtIndexOrDefault,
                d = t.options.elements.arc; return {
                text: n, fillStyle: s.backgroundColor ? s.backgroundColor : u(r.backgroundColor, i, d.backgroundColor), strokeStyle: s.borderColor ? s.borderColor : u(r.borderColor, i, d.borderColor), lineWidth: s.borderWidth ? s.borderWidth : u(r.borderWidth, i, d.borderWidth), hidden: isNaN(r.data[i]) || a.data[i].hidden, index: i,
              };
            }) : [];
          },
        },
        onClick(t, e) {
          let n,
            i,
            a,
            o = e.index,
            r = this.chart; for (n = 0, i = (r.data.datasets || []).length; n < i; ++n)(a = r.getDatasetMeta(n)).data[o] && (a.data[o].hidden = !a.data[o].hidden); r.update();
        },
      },
      cutoutPercentage: 50,
      rotation: -0.5 * Math.PI,
      circumference: 2 * Math.PI,
      tooltips: {
        callbacks: {
          title() { return ''; },
          label(t, e) {
            let n = e.labels[t.index],
              i = `: ${e.datasets[t.datasetIndex].data[t.index]}`; return o.isArray(n) ? (n = n.slice())[0] += i : n += i, n;
          },
        },
      },
    }), i._set('pie', o.clone(i.doughnut)), i._set('pie', { cutoutPercentage: 0 }), e.exports = function (t) {
      t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
        dataElementType: a.Arc,
        linkScales: o.noop,
        getRingIndex(t) { for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e; return e; },
        update(t) {
          let e = this,
            n = e.chart,
            i = n.chartArea,
            a = n.options,
            r = a.elements.arc,
            l = i.right - i.left - r.borderWidth,
            s = i.bottom - i.top - r.borderWidth,
            u = Math.min(l, s),
            d = { x: 0, y: 0 },
            c = e.getMeta(),
            h = a.cutoutPercentage,
            f = a.circumference; if (f < 2 * Math.PI) {
            let g = a.rotation % (2 * Math.PI),
              p = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
              v = { x: Math.cos(g), y: Math.sin(g) },
              m = { x: Math.cos(p), y: Math.sin(p) },
              b = g <= 0 && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
              x = g <= 0.5 * Math.PI && 0.5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
              y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
              k = g <= 0.5 * -Math.PI && 0.5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
              w = h / 100,
              M = { x: y ? -1 : Math.min(v.x * (v.x < 0 ? 1 : w), m.x * (m.x < 0 ? 1 : w)), y: k ? -1 : Math.min(v.y * (v.y < 0 ? 1 : w), m.y * (m.y < 0 ? 1 : w)) },
              S = { x: b ? 1 : Math.max(v.x * (v.x > 0 ? 1 : w), m.x * (m.x > 0 ? 1 : w)), y: x ? 1 : Math.max(v.y * (v.y > 0 ? 1 : w), m.y * (m.y > 0 ? 1 : w)) },
              C = { width: 0.5 * (S.x - M.x), height: 0.5 * (S.y - M.y) }; u = Math.min(l / C.width, s / C.height), d = { x: -0.5 * (S.x + M.x), y: -0.5 * (S.y + M.y) };
          }n.borderWidth = e.getMaxBorderWidth(c.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = d.x * n.outerRadius, n.offsetY = d.y * n.outerRadius, c.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), o.each(c.data, (n, i) => { e.updateElement(n, i, t); });
        },
        updateElement(t, e, n) {
          let i = this,
            a = i.chart,
            r = a.chartArea,
            l = a.options,
            s = l.animation,
            u = (r.left + r.right) / 2,
            d = (r.top + r.bottom) / 2,
            c = l.rotation,
            h = l.rotation,
            f = i.getDataset(),
            g = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(f.data[e]) * (l.circumference / (2 * Math.PI)),
            p = n && s.animateScale ? 0 : i.innerRadius,
            v = n && s.animateScale ? 0 : i.outerRadius,
            m = o.valueAtIndexOrDefault; o.extend(t, {
            _datasetIndex: i.index,
            _index: e,
            _model: {
              x: u + a.offsetX, y: d + a.offsetY, startAngle: c, endAngle: h, circumference: g, outerRadius: v, innerRadius: p, label: m(f.label, e, a.data.labels[e]),
            },
          }); const b = t._model; this.removeHoverStyle(t), n && s.animateRotate || (b.startAngle = e === 0 ? l.rotation : i.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot();
        },
        removeHoverStyle(e) { t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc); },
        calculateTotal() {
          let t,
            e = this.getDataset(),
            n = this.getMeta(),
            i = 0; return o.each(n.data, (n, a) => { t = e.data[a], isNaN(t) || n.hidden || (i += Math.abs(t)); }), i;
        },
        calculateCircumference(t) { const e = this.getMeta().total; return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0; },
        getMaxBorderWidth(t) { for (var e, n, i = 0, a = this.index, o = t.length, r = 0; r < o; r++)e = t[r]._model ? t[r]._model.borderWidth : 0, i = (n = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (i = e > i ? e : i) ? n : i; return i; },
      });
    };
  }, { 25: 25, 40: 40, 45: 45 }],
  18: [function (t, e, n) {
    let i = t(25),
      a = t(40),
      o = t(45); i._set('line', {
      showLines: !0, spanGaps: !1, hover: { mode: 'label' }, scales: { xAxes: [{ type: 'category', id: 'x-axis-0' }], yAxes: [{ type: 'linear', id: 'y-axis-0' }] },
    }), e.exports = function (t) {
      function e(t, e) { return o.valueOrDefault(t.showLine, e.showLines); }t.controllers.line = t.DatasetController.extend({
        datasetElementType: a.Line,
        dataElementType: a.Point,
        update(t) {
          let n,
            i,
            a,
            r = this,
            l = r.getMeta(),
            s = l.dataset,
            u = l.data || [],
            d = r.chart.options,
            c = d.elements.line,
            h = r.getScaleForId(l.yAxisID),
            f = r.getDataset(),
            g = e(f, d); for (g && (a = s.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), s._scale = h, s._datasetIndex = r.index, s._children = u, s._model = {
            spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps, tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, c.tension), backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor, borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth, borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor, borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle, borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash, borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || c.borderDashOffset, borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle, fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill, steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, c.stepped), cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode),
          }, s.pivot()), n = 0, i = u.length; n < i; ++n)r.updateElement(u[n], n, t); for (g && s._model.tension !== 0 && r.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n)u[n].pivot();
        },
        getPointBackgroundColor(t, e) {
          let n = this.chart.options.elements.point.backgroundColor,
            i = this.getDataset(),
            a = t.custom || {}; return a.backgroundColor ? n = a.backgroundColor : i.pointBackgroundColor ? n = o.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n;
        },
        getPointBorderColor(t, e) {
          let n = this.chart.options.elements.point.borderColor,
            i = this.getDataset(),
            a = t.custom || {}; return a.borderColor ? n = a.borderColor : i.pointBorderColor ? n = o.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n;
        },
        getPointBorderWidth(t, e) {
          let n = this.chart.options.elements.point.borderWidth,
            i = this.getDataset(),
            a = t.custom || {}; return isNaN(a.borderWidth) ? !isNaN(i.pointBorderWidth) || o.isArray(i.pointBorderWidth) ? n = o.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = a.borderWidth, n;
        },
        updateElement(t, e, n) {
          let i,
            a,
            r = this,
            l = r.getMeta(),
            s = t.custom || {},
            u = r.getDataset(),
            d = r.index,
            c = u.data[e],
            h = r.getScaleForId(l.yAxisID),
            f = r.getScaleForId(l.xAxisID),
            g = r.chart.options.elements.point; void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), i = f.getPixelForValue(typeof c === 'object' ? c : NaN, e, d), a = n ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
            x: i, y: a, skip: s.skip || isNaN(i) || isNaN(a), radius: s.radius || o.valueAtIndexOrDefault(u.pointRadius, e, g.radius), pointStyle: s.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle), backgroundColor: r.getPointBackgroundColor(t, e), borderColor: r.getPointBorderColor(t, e), borderWidth: r.getPointBorderWidth(t, e), tension: l.dataset._model ? l.dataset._model.tension : 0, steppedLine: !!l.dataset._model && l.dataset._model.steppedLine, hitRadius: s.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius),
          };
        },
        calculatePointY(t, e, n) {
          let i,
            a,
            o,
            r = this,
            l = r.chart,
            s = r.getMeta(),
            u = r.getScaleForId(s.yAxisID),
            d = 0,
            c = 0; if (u.options.stacked) { for (i = 0; i < n; i++) if (a = l.data.datasets[i], (o = l.getDatasetMeta(i)).type === 'line' && o.yAxisID === u.id && l.isDatasetVisible(i)) { const h = Number(u.getRightValue(a.data[e])); h < 0 ? c += h || 0 : d += h || 0; } const f = Number(u.getRightValue(t)); return f < 0 ? u.getPixelForValue(c + f) : u.getPixelForValue(d + f); } return u.getPixelForValue(t);
        },
        updateBezierControlPoints() {
          function t(t, e, n) { return Math.max(Math.min(t, n), e); } let e,
            n,
            i,
            a,
            r = this,
            l = r.getMeta(),
            s = r.chart.chartArea,
            u = l.data || []; if (l.dataset._model.spanGaps && (u = u.filter(t => !t._model.skip)), l.dataset._model.cubicInterpolationMode === 'monotone')o.splineCurveMonotone(u); else for (e = 0, n = u.length; e < n; ++e)i = u[e]._model, a = o.splineCurve(o.previousItem(u, e)._model, i, o.nextItem(u, e)._model, l.dataset._model.tension), i.controlPointPreviousX = a.previous.x, i.controlPointPreviousY = a.previous.y, i.controlPointNextX = a.next.x, i.controlPointNextY = a.next.y; if (r.chart.options.elements.line.capBezierPoints) for (e = 0, n = u.length; e < n; ++e)(i = u[e]._model).controlPointPreviousX = t(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = t(i.controlPointPreviousY, s.top, s.bottom), i.controlPointNextX = t(i.controlPointNextX, s.left, s.right), i.controlPointNextY = t(i.controlPointNextY, s.top, s.bottom);
        },
        draw() {
          let t = this,
            n = t.chart,
            i = t.getMeta(),
            a = i.data || [],
            r = n.chartArea,
            l = a.length,
            s = 0; for (o.canvas.clipArea(n.ctx, r), e(t.getDataset(), n.options) && i.dataset.draw(), o.canvas.unclipArea(n.ctx); s < l; ++s)a[s].draw(r);
        },
        setHoverStyle(t) {
          let e = this.chart.data.datasets[t._datasetIndex],
            n = t._index,
            i = t.custom || {},
            a = t._model; a.radius = i.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth);
        },
        removeHoverStyle(t) {
          let e = this,
            n = e.chart.data.datasets[t._datasetIndex],
            i = t._index,
            a = t.custom || {},
            r = t._model; void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), r.radius = a.radius || o.valueAtIndexOrDefault(n.pointRadius, i, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, i), r.borderColor = e.getPointBorderColor(t, i), r.borderWidth = e.getPointBorderWidth(t, i);
        },
      });
    };
  }, { 25: 25, 40: 40, 45: 45 }],
  19: [function (t, e, n) {
    let i = t(25),
      a = t(40),
      o = t(45); i._set('polarArea', {
      scale: {
        type: 'radialLinear', angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 },
      },
      animation: { animateRotate: !0, animateScale: !0 },
      startAngle: -0.5 * Math.PI,
      legendCallback(t) {
        const e = []; e.push(`<ul class="${t.id}-legend">`); let n = t.data,
          i = n.datasets,
          a = n.labels; if (i.length) for (let o = 0; o < i[0].data.length; ++o)e.push(`<li><span style="background-color:${i[0].backgroundColor[o]}"></span>`), a[o] && e.push(a[o]), e.push('</li>'); return e.push('</ul>'), e.join('');
      },
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data; return e.labels.length && e.datasets.length ? e.labels.map((n, i) => {
              let a = t.getDatasetMeta(0),
                r = e.datasets[0],
                l = a.data[i].custom || {},
                s = o.valueAtIndexOrDefault,
                u = t.options.elements.arc; return {
                text: n, fillStyle: l.backgroundColor ? l.backgroundColor : s(r.backgroundColor, i, u.backgroundColor), strokeStyle: l.borderColor ? l.borderColor : s(r.borderColor, i, u.borderColor), lineWidth: l.borderWidth ? l.borderWidth : s(r.borderWidth, i, u.borderWidth), hidden: isNaN(r.data[i]) || a.data[i].hidden, index: i,
              };
            }) : [];
          },
        },
        onClick(t, e) {
          let n,
            i,
            a,
            o = e.index,
            r = this.chart; for (n = 0, i = (r.data.datasets || []).length; n < i; ++n)(a = r.getDatasetMeta(n)).data[o].hidden = !a.data[o].hidden; r.update();
        },
      },
      tooltips: { callbacks: { title() { return ''; }, label(t, e) { return `${e.labels[t.index]}: ${t.yLabel}`; } } },
    }), e.exports = function (t) {
      t.controllers.polarArea = t.DatasetController.extend({
        dataElementType: a.Arc,
        linkScales: o.noop,
        update(t) {
          let e = this,
            n = e.chart,
            i = n.chartArea,
            a = e.getMeta(),
            r = n.options,
            l = r.elements.arc,
            s = Math.min(i.right - i.left, i.bottom - i.top); n.outerRadius = Math.max((s - l.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(r.cutoutPercentage ? n.outerRadius / 100 * r.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), e.outerRadius = n.outerRadius - n.radiusLength * e.index, e.innerRadius = e.outerRadius - n.radiusLength, a.count = e.countVisibleElements(), o.each(a.data, (n, i) => { e.updateElement(n, i, t); });
        },
        updateElement(t, e, n) {
          for (var i = this, a = i.chart, r = i.getDataset(), l = a.options, s = l.animation, u = a.scale, d = a.data.labels, c = i.calculateCircumference(r.data[e]), h = u.xCenter, f = u.yCenter, g = 0, p = i.getMeta(), v = 0; v < e; ++v)isNaN(r.data[v]) || p.data[v].hidden || ++g; let m = l.startAngle,
            b = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]),
            x = m + c * g,
            y = x + (t.hidden ? 0 : c),
            k = s.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]); o.extend(t, {
            _datasetIndex: i.index,
            _index: e,
            _scale: u,
            _model: {
              x: h, y: f, innerRadius: 0, outerRadius: n ? k : b, startAngle: n && s.animateRotate ? m : x, endAngle: n && s.animateRotate ? m : y, label: o.valueAtIndexOrDefault(d, e, d[e]),
            },
          }), i.removeHoverStyle(t), t.pivot();
        },
        removeHoverStyle(e) { t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc); },
        countVisibleElements() {
          let t = this.getDataset(),
            e = this.getMeta(),
            n = 0; return o.each(e.data, (e, i) => { isNaN(t.data[i]) || e.hidden || n++; }), n;
        },
        calculateCircumference(t) { const e = this.getMeta().count; return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0; },
      });
    };
  }, { 25: 25, 40: 40, 45: 45 }],
  20: [function (t, e, n) {
    let i = t(25),
      a = t(40),
      o = t(45); i._set('radar', { scale: { type: 'radialLinear' }, elements: { line: { tension: 0 } } }), e.exports = function (t) {
      t.controllers.radar = t.DatasetController.extend({
        datasetElementType: a.Line,
        dataElementType: a.Point,
        linkScales: o.noop,
        update(t) {
          let e = this,
            n = e.getMeta(),
            i = n.dataset,
            a = n.data,
            r = i.custom || {},
            l = e.getDataset(),
            s = e.chart.options.elements.line,
            u = e.chart.scale; void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o.extend(n.dataset, {
            _datasetIndex: e.index,
            _scale: u,
            _children: a,
            _loop: !0,
            _model: {
              tension: r.tension ? r.tension : o.valueOrDefault(l.lineTension, s.tension), backgroundColor: r.backgroundColor ? r.backgroundColor : l.backgroundColor || s.backgroundColor, borderWidth: r.borderWidth ? r.borderWidth : l.borderWidth || s.borderWidth, borderColor: r.borderColor ? r.borderColor : l.borderColor || s.borderColor, fill: r.fill ? r.fill : void 0 !== l.fill ? l.fill : s.fill, borderCapStyle: r.borderCapStyle ? r.borderCapStyle : l.borderCapStyle || s.borderCapStyle, borderDash: r.borderDash ? r.borderDash : l.borderDash || s.borderDash, borderDashOffset: r.borderDashOffset ? r.borderDashOffset : l.borderDashOffset || s.borderDashOffset, borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : l.borderJoinStyle || s.borderJoinStyle,
            },
          }), n.dataset.pivot(), o.each(a, (n, i) => { e.updateElement(n, i, t); }, e), e.updateBezierControlPoints();
        },
        updateElement(t, e, n) {
          let i = this,
            a = t.custom || {},
            r = i.getDataset(),
            l = i.chart.scale,
            s = i.chart.options.elements.point,
            u = l.getPointPositionForValue(e, r.data[e]); void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), o.extend(t, {
            _datasetIndex: i.index,
            _index: e,
            _scale: l,
            _model: {
              x: n ? l.xCenter : u.x, y: n ? l.yCenter : u.y, tension: a.tension ? a.tension : o.valueOrDefault(r.lineTension, i.chart.options.elements.line.tension), radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, s.radius), backgroundColor: a.backgroundColor ? a.backgroundColor : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, s.backgroundColor), borderColor: a.borderColor ? a.borderColor : o.valueAtIndexOrDefault(r.pointBorderColor, e, s.borderColor), borderWidth: a.borderWidth ? a.borderWidth : o.valueAtIndexOrDefault(r.pointBorderWidth, e, s.borderWidth), pointStyle: a.pointStyle ? a.pointStyle : o.valueAtIndexOrDefault(r.pointStyle, e, s.pointStyle), hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, s.hitRadius),
            },
          }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y);
        },
        updateBezierControlPoints() {
          let t = this.chart.chartArea,
            e = this.getMeta(); o.each(e.data, (n, i) => {
            let a = n._model,
              r = o.splineCurve(o.previousItem(e.data, i, !0)._model, a, o.nextItem(e.data, i, !0)._model, a.tension); a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), n.pivot();
          });
        },
        setHoverStyle(t) {
          let e = this.chart.data.datasets[t._datasetIndex],
            n = t.custom || {},
            i = t._index,
            a = t._model; a.radius = n.hoverRadius ? n.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth);
        },
        removeHoverStyle(t) {
          let e = this.chart.data.datasets[t._datasetIndex],
            n = t.custom || {},
            i = t._index,
            a = t._model,
            r = this.chart.options.elements.point; a.radius = n.radius ? n.radius : o.valueAtIndexOrDefault(e.pointRadius, i, r.radius), a.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, i, r.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, i, r.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, i, r.borderWidth);
        },
      });
    };
  }, { 25: 25, 40: 40, 45: 45 }],
  21: [function (t, e, n) {
    t(25)._set('scatter', {
      hover: { mode: 'single' }, scales: { xAxes: [{ id: 'x-axis-1', type: 'linear', position: 'bottom' }], yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left' }] }, showLines: !1, tooltips: { callbacks: { title() { return ''; }, label(t) { return `(${t.xLabel}, ${t.yLabel})`; } } },
    }), e.exports = function (t) { t.controllers.scatter = t.controllers.line; };
  }, { 25: 25 }],
  22: [function (t, e, n) {
    let i = t(25),
      a = t(26),
      o = t(45); i._set('global', {
      animation: {
        duration: 1e3, easing: 'easeOutQuart', onProgress: o.noop, onComplete: o.noop,
      },
    }), e.exports = function (t) {
      t.Animation = a.extend({
        chart: null, currentStep: 0, numSteps: 60, easing: '', render: null, onAnimationProgress: null, onAnimationComplete: null,
      }), t.animationService = {
        frameDuration: 17,
        animations: [],
        dropFrames: 0,
        request: null,
        addAnimation(t, e, n, i) {
          let a,
            o,
            r = this.animations; for (e.chart = t, i || (t.animating = !0), a = 0, o = r.length; a < o; ++a) if (r[a].chart === t) return void (r[a] = e); r.push(e), r.length === 1 && this.requestAnimationFrame();
        },
        cancelAnimation(t) { const e = o.findIndex(this.animations, e => e.chart === t); e !== -1 && (this.animations.splice(e, 1), t.animating = !1); },
        requestAnimationFrame() { const t = this; t.request === null && (t.request = o.requestAnimFrame.call(window, () => { t.request = null, t.startDigest(); })); },
        startDigest() {
          let t = this,
            e = Date.now(),
            n = 0; t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames %= 1), t.advance(1 + n); const i = Date.now(); t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
        },
        advance(t) { for (var e, n, i = this.animations, a = 0; a < i.length;)n = (e = i[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [n, e], n), o.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(a, 1)) : ++a; },
      }, Object.defineProperty(t.Animation.prototype, 'animationObject', { get() { return this; } }), Object.defineProperty(t.Animation.prototype, 'chartInstance', { get() { return this.chart; }, set(t) { this.chart = t; } });
    };
  }, { 25: 25, 26: 26, 45: 45 }],
  23: [function (t, e, n) {
    let i = t(25),
      a = t(45),
      o = t(28),
      r = t(48); e.exports = function (t) {
      function e(t) { const e = (t = t || {}).data = t.data || {}; return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = a.configMerge(i.global, i[t.type], t.options || {}), t; } function n(t) { const e = t.options; e.scale ? t.scale.options = e.scale : e.scales && e.scales.xAxes.concat(e.scales.yAxes).forEach((e) => { t.scales[e.id].options = e; }), t.tooltip._options = e.tooltips; } function l(t) { return t === 'top' || t === 'bottom'; } const s = t.plugins; t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
        construct(n, i) {
          const o = this; i = e(i); let l = r.acquireContext(n, i),
            s = l && l.canvas,
            u = s && s.height,
            d = s && s.width; o.id = a.uid(), o.ctx = l, o.canvas = s, o.config = i, o.width = d, o.height = u, o.aspectRatio = u ? d / u : null, o.options = i.options, o._bufferedRender = !1, o.chart = o, o.controller = o, t.instances[o.id] = o, Object.defineProperty(o, 'data', { get() { return o.config.data; }, set(t) { o.config.data = t; } }), l && s ? (o.initialize(), o.update()) : console.error("Failed to create chart: can't acquire context from the given item");
        },
        initialize() { const t = this; return s.notify(t, 'beforeInit'), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), s.notify(t, 'afterInit'), t; },
        clear() { return a.canvas.clear(this), this; },
        stop() { return t.animationService.cancelAnimation(this), this; },
        resize(t) {
          let e = this,
            n = e.options,
            i = e.canvas,
            o = n.maintainAspectRatio && e.aspectRatio || null,
            r = Math.max(0, Math.floor(a.getMaximumWidth(i))),
            l = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(i))); if ((e.width !== r || e.height !== l) && (i.width = e.width = r, i.height = e.height = l, i.style.width = `${r}px`, i.style.height = `${l}px`, a.retinaScale(e, n.devicePixelRatio), !t)) { const u = { width: r, height: l }; s.notify(e, 'resize', [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration); }
        },
        ensureScalesHaveIDs() {
          let t = this.options,
            e = t.scales || {},
            n = t.scale; a.each(e.xAxes, (t, e) => { t.id = t.id || `x-axis-${e}`; }), a.each(e.yAxes, (t, e) => { t.id = t.id || `y-axis-${e}`; }), n && (n.id = n.id || 'scale');
        },
        buildScales() {
          let e = this,
            n = e.options,
            i = e.scales = {},
            o = []; n.scales && (o = o.concat((n.scales.xAxes || []).map(t => ({ options: t, dtype: 'category', dposition: 'bottom' })), (n.scales.yAxes || []).map(t => ({ options: t, dtype: 'linear', dposition: 'left' })))), n.scale && o.push({
            options: n.scale, dtype: 'radialLinear', isDefault: !0, dposition: 'chartArea',
          }), a.each(o, (n) => {
            let o = n.options,
              r = a.valueOrDefault(o.type, n.dtype),
              s = t.scaleService.getScaleConstructor(r); if (s) {
              l(o.position) !== l(n.dposition) && (o.position = n.dposition); const u = new s({
                id: o.id, options: o, ctx: e.ctx, chart: e,
              }); i[u.id] = u, u.mergeTicksOptions(), n.isDefault && (e.scale = u);
            }
          }), t.scaleService.addScalesToLayout(this);
        },
        buildOrUpdateControllers() {
          let e = this,
            n = [],
            i = []; return a.each(e.data.datasets, (a, o) => {
            let r = e.getDatasetMeta(o),
              l = a.type || e.config.type; if (r.type && r.type !== l && (e.destroyDatasetMeta(o), r = e.getDatasetMeta(o)), r.type = l, n.push(r.type), r.controller)r.controller.updateIndex(o); else { const s = t.controllers[r.type]; if (void 0 === s) throw new Error(`"${r.type}" is not a chart type.`); r.controller = new s(e, o), i.push(r.controller); }
          }, e), i;
        },
        resetElements() { const t = this; a.each(t.data.datasets, (e, n) => { t.getDatasetMeta(n).controller.reset(); }, t); },
        reset() { this.resetElements(), this.tooltip.initialize(); },
        update(t) { const e = this; if (t && typeof t === 'object' || (t = { duration: t, lazy: arguments[1] }), n(e), !1 !== s.notify(e, 'beforeUpdate')) { e.tooltip._data = e.data; const i = e.buildOrUpdateControllers(); a.each(e.data.datasets, (t, n) => { e.getDatasetMeta(n).controller.buildOrUpdateElements(); }, e), e.updateLayout(), a.each(i, (t) => { t.reset(); }), e.updateDatasets(), e.tooltip.initialize(), e.lastActive = [], s.notify(e, 'afterUpdate'), e._bufferedRender ? e._bufferedRequest = { duration: t.duration, easing: t.easing, lazy: t.lazy } : e.render(t); } },
        updateLayout() { const e = this; !1 !== s.notify(e, 'beforeLayout') && (t.layoutService.update(this, this.width, this.height), s.notify(e, 'afterScaleUpdate'), s.notify(e, 'afterLayout')); },
        updateDatasets() { const t = this; if (!1 !== s.notify(t, 'beforeDatasetsUpdate')) { for (let e = 0, n = t.data.datasets.length; e < n; ++e)t.updateDataset(e); s.notify(t, 'afterDatasetsUpdate'); } },
        updateDataset(t) {
          let e = this,
            n = e.getDatasetMeta(t),
            i = { meta: n, index: t }; !1 !== s.notify(e, 'beforeDatasetUpdate', [i]) && (n.controller.update(), s.notify(e, 'afterDatasetUpdate', [i]));
        },
        render(e) {
          const n = this; e && typeof e === 'object' || (e = { duration: e, lazy: arguments[1] }); let i = e.duration,
            o = e.lazy; if (!1 !== s.notify(n, 'beforeRender')) {
            let r = n.options.animation,
              l = function (t) { s.notify(n, 'afterRender'), a.callback(r && r.onComplete, [t], n); }; if (r && (void 0 !== i && i !== 0 || void 0 === i && r.duration !== 0)) {
              const u = new t.Animation({
                numSteps: (i || r.duration) / 16.66,
                easing: e.easing || r.easing,
                render(t, e) {
                  let n = a.easing.effects[e.easing],
                    i = e.currentStep,
                    o = i / e.numSteps; t.draw(n(o), o, i);
                },
                onAnimationProgress: r.onProgress,
                onAnimationComplete: l,
              }); t.animationService.addAnimation(n, u, i, o);
            } else n.draw(), l(new t.Animation({ numSteps: 0, chart: n })); return n;
          }
        },
        draw(t) { const e = this; e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== s.notify(e, 'beforeDraw', [t]) && (a.each(e.boxes, (t) => { t.draw(e.chartArea); }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), s.notify(e, 'afterDraw', [t])); },
        transition(t) { for (var e = this, n = 0, i = (e.data.datasets || []).length; n < i; ++n)e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t); e.tooltip.transition(t); },
        drawDatasets(t) { const e = this; if (!1 !== s.notify(e, 'beforeDatasetsDraw', [t])) { for (let n = (e.data.datasets || []).length - 1; n >= 0; --n)e.isDatasetVisible(n) && e.drawDataset(n, t); s.notify(e, 'afterDatasetsDraw', [t]); } },
        drawDataset(t, e) {
          let n = this,
            i = n.getDatasetMeta(t),
            a = { meta: i, index: t, easingValue: e }; !1 !== s.notify(n, 'beforeDatasetDraw', [a]) && (i.controller.draw(e), s.notify(n, 'afterDatasetDraw', [a]));
        },
        _drawTooltip(t) {
          let e = this,
            n = e.tooltip,
            i = { tooltip: n, easingValue: t }; !1 !== s.notify(e, 'beforeTooltipDraw', [i]) && (n.draw(), s.notify(e, 'afterTooltipDraw', [i]));
        },
        getElementAtEvent(t) { return o.modes.single(this, t); },
        getElementsAtEvent(t) { return o.modes.label(this, t, { intersect: !0 }); },
        getElementsAtXAxis(t) { return o.modes['x-axis'](this, t, { intersect: !0 }); },
        getElementsAtEventForMode(t, e, n) { const i = o.modes[e]; return typeof i === 'function' ? i(this, t, n) : []; },
        getDatasetAtEvent(t) { return o.modes.dataset(this, t, { intersect: !0 }); },
        getDatasetMeta(t) {
          let e = this,
            n = e.data.datasets[t]; n._meta || (n._meta = {}); let i = n._meta[e.id]; return i || (i = n._meta[e.id] = {
            type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null,
          }), i;
        },
        getVisibleDatasetCount() { for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++; return t; },
        isDatasetVisible(t) { const e = this.getDatasetMeta(t); return typeof e.hidden === 'boolean' ? !e.hidden : !this.data.datasets[t].hidden; },
        generateLegend() { return this.options.legendCallback(this); },
        destroyDatasetMeta(t) {
          let e = this.id,
            n = this.data.datasets[t],
            i = n._meta && n._meta[e]; i && (i.controller.destroy(), delete n._meta[e]);
        },
        destroy() {
          let e,
            n,
            i = this,
            o = i.canvas; for (i.stop(), e = 0, n = i.data.datasets.length; e < n; ++e)i.destroyDatasetMeta(e); o && (i.unbindEvents(), a.canvas.clear(i), r.releaseContext(i.ctx), i.canvas = null, i.ctx = null), s.notify(i, 'destroy'), delete t.instances[i.id];
        },
        toBase64Image() { return this.canvas.toDataURL.apply(this.canvas, arguments); },
        initToolTip() {
          const e = this; e.tooltip = new t.Tooltip({
            _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips,
          }, e);
        },
        bindEvents() {
          let t = this,
            e = t._listeners = {},
            n = function () { t.eventHandler(...arguments); }; a.each(t.options.events, (i) => { r.addEventListener(t, i, n), e[i] = n; }), t.options.responsive && (n = function () { t.resize(); }, r.addEventListener(t, 'resize', n), e.resize = n);
        },
        unbindEvents() {
          let t = this,
            e = t._listeners; e && (delete t._listeners, a.each(e, (e, n) => { r.removeEventListener(t, n, e); }));
        },
        updateHoverStyle(t, e, n) {
          let i,
            a,
            o,
            r = n ? 'setHoverStyle' : 'removeHoverStyle'; for (a = 0, o = t.length; a < o; ++a)(i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[r](i);
        },
        eventHandler(t) {
          let e = this,
            n = e.tooltip; if (!1 !== s.notify(e, 'beforeEvent', [t])) { e._bufferedRender = !0, e._bufferedRequest = null; let i = e.handleEvent(t); i |= n && n.handleEvent(t), s.notify(e, 'afterEvent', [t]); const a = e._bufferedRequest; return a ? e.render(a) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e; }
        },
        handleEvent(t) {
          let e = this,
            n = e.options || {},
            i = n.hover,
            o = !1; return e.lastActive = e.lastActive || [], t.type === 'mouseout' ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i), a.callback(n.onHover || n.hover.onHover, [t.native, e.active], e), t.type !== 'mouseup' && t.type !== 'click' || n.onClick && n.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1), e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0), o = !a.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, o;
        },
      }), t.Controller = t;
    };
  }, {
    25: 25, 28: 28, 45: 45, 48: 48,
  }],
  24: [function (t, e, n) {
    const i = t(45); e.exports = function (t) {
      function e(t, e) {
        t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, '_chartjs', { configurable: !0, enumerable: !1, value: { listeners: [e] } }), a.forEach((e) => {
          let n = `onData${e.charAt(0).toUpperCase()}${e.slice(1)}`,
            a = t[e]; Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !1,
            value() {
              let e = Array.prototype.slice.call(arguments),
                o = a.apply(this, e); return i.each(t._chartjs.listeners, (t) => { typeof t[n] === 'function' && t[n](...e); }), o;
            },
          });
        }));
      } function n(t, e) {
        const n = t._chartjs; if (n) {
          let i = n.listeners,
            o = i.indexOf(e); o !== -1 && i.splice(o, 1), i.length > 0 || (a.forEach((e) => { delete t[e]; }), delete t._chartjs);
        }
      } var a = ['push', 'pop', 'shift', 'splice', 'unshift']; t.DatasetController = function (t, e) { this.initialize(t, e); }, i.extend(t.DatasetController.prototype, {
        datasetElementType: null,
        dataElementType: null,
        initialize(t, e) { const n = this; n.chart = t, n.index = e, n.linkScales(), n.addElements(); },
        updateIndex(t) { this.index = t; },
        linkScales() {
          let t = this,
            e = t.getMeta(),
            n = t.getDataset(); e.xAxisID === null && (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), e.yAxisID === null && (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id);
        },
        getDataset() { return this.chart.data.datasets[this.index]; },
        getMeta() { return this.chart.getDatasetMeta(this.index); },
        getScaleForId(t) { return this.chart.scales[t]; },
        reset() { this.update(!0); },
        destroy() { this._data && n(this._data, this); },
        createMetaDataset() {
          let t = this,
            e = t.datasetElementType; return e && new e({ _chart: t.chart, _datasetIndex: t.index });
        },
        createMetaData(t) {
          let e = this,
            n = e.dataElementType; return n && new n({ _chart: e.chart, _datasetIndex: e.index, _index: t });
        },
        addElements() {
          let t,
            e,
            n = this,
            i = n.getMeta(),
            a = n.getDataset().data || [],
            o = i.data; for (t = 0, e = a.length; t < e; ++t)o[t] = o[t] || n.createMetaData(t); i.dataset = i.dataset || n.createMetaDataset();
        },
        addElementAndReset(t) { const e = this.createMetaData(t); this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0); },
        buildOrUpdateElements() {
          let t = this,
            i = t.getDataset(),
            a = i.data || (i.data = []); t._data !== a && (t._data && n(t._data, t), e(a, t), t._data = a), t.resyncElements();
        },
        update: i.noop,
        transition(t) { for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a)n[a].transition(t); e.dataset && e.dataset.transition(t); },
        draw() {
          let t = this.getMeta(),
            e = t.data || [],
            n = e.length,
            i = 0; for (t.dataset && t.dataset.draw(); i < n; ++i)e[i].draw();
        },
        removeHoverStyle(t, e) {
          let n = this.chart.data.datasets[t._datasetIndex],
            a = t._index,
            o = t.custom || {},
            r = i.valueAtIndexOrDefault,
            l = t._model; l.backgroundColor = o.backgroundColor ? o.backgroundColor : r(n.backgroundColor, a, e.backgroundColor), l.borderColor = o.borderColor ? o.borderColor : r(n.borderColor, a, e.borderColor), l.borderWidth = o.borderWidth ? o.borderWidth : r(n.borderWidth, a, e.borderWidth);
        },
        setHoverStyle(t) {
          let e = this.chart.data.datasets[t._datasetIndex],
            n = t._index,
            a = t.custom || {},
            o = i.valueAtIndexOrDefault,
            r = i.getHoverColor,
            l = t._model; l.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(e.hoverBackgroundColor, n, r(l.backgroundColor)), l.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(e.hoverBorderColor, n, r(l.borderColor)), l.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, n, l.borderWidth);
        },
        resyncElements() {
          let t = this,
            e = t.getMeta(),
            n = t.getDataset().data,
            i = e.data.length,
            a = n.length; a < i ? e.data.splice(a, i - a) : a > i && t.insertElements(i, a - i);
        },
        insertElements(t, e) { for (let n = 0; n < e; ++n) this.addElementAndReset(t + n); },
        onDataPush() { this.insertElements(this.getDataset().data.length - 1, arguments.length); },
        onDataPop() { this.getMeta().data.pop(); },
        onDataShift() { this.getMeta().data.shift(); },
        onDataSplice(t, e) { this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2); },
        onDataUnshift() { this.insertElements(0, arguments.length); },
      }), t.DatasetController.extend = i.inherits;
    };
  }, { 45: 45 }],
  25: [function (t, e, n) {
    const i = t(45); e.exports = { _set(t, e) { return i.merge(this[t] || (this[t] = {}), e); } };
  }, { 45: 45 }],
  26: [function (t, e, n) {
    function i(t, e, n, i) {
      let o,
        r,
        l,
        s,
        u,
        d,
        c,
        h,
        f,
        g = Object.keys(n); for (o = 0, r = g.length; o < r; ++o) if (l = g[o], d = n[l], e.hasOwnProperty(l) || (e[l] = d), (s = e[l]) !== d && l[0] !== '_') { if (t.hasOwnProperty(l) || (t[l] = s), u = t[l], (c = typeof d) === typeof u) if (c === 'string') { if ((h = a(u)).valid && (f = a(d)).valid) { e[l] = f.mix(h, i).rgbString(); continue; } } else if (c === 'number' && isFinite(u) && isFinite(d)) { e[l] = u + (d - u) * i; continue; }e[l] = d; }
    } var a = t(3),
      o = t(45),
      r = function (t) { o.extend(this, t), this.initialize.apply(this, arguments); }; o.extend(r.prototype, {
      initialize() { this.hidden = !1; },
      pivot() { const t = this; return t._view || (t._view = o.clone(t._model)), t._start = {}, t; },
      transition(t) {
        let e = this,
          n = e._model,
          a = e._start,
          o = e._view; return n && t !== 1 ? (o || (o = e._view = {}), a || (a = e._start = {}), i(a, o, n, t), e) : (e._view = n, e._start = null, e);
      },
      tooltipPosition() { return { x: this._model.x, y: this._model.y }; },
      hasValue() { return o.isNumber(this._model.x) && o.isNumber(this._model.y); },
    }), r.extend = o.inherits, e.exports = r;
  }, { 3: 3, 45: 45 }],
  27: [function (t, e, n) {
    let i = t(3),
      a = t(25),
      o = t(45); e.exports = function (t) {
      function e(t, e, n) { let i; return typeof t === 'string' ? (i = parseInt(t, 10), t.indexOf('%') !== -1 && (i = i / 100 * e.parentNode[n])) : i = t, i; } function n(t) { return void 0 !== t && t !== null && t !== 'none'; } function r(t, i, a) {
        let o = document.defaultView,
          r = t.parentNode,
          l = o.getComputedStyle(t)[i],
          s = o.getComputedStyle(r)[i],
          u = n(l),
          d = n(s),
          c = Number.POSITIVE_INFINITY; return u || d ? Math.min(u ? e(l, t, a) : c, d ? e(s, r, a) : c) : 'none';
      }o.configMerge = function () {
        return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
          merger(e, n, i, a) {
            let r = n[e] || {},
              l = i[e]; e === 'scales' ? n[e] = o.scaleMerge(r, l) : e === 'scale' ? n[e] = o.merge(r, [t.scaleService.getScaleDefaults(l.type), l]) : o._merger(e, n, i, a);
          },
        });
      }, o.scaleMerge = function () {
        return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
          merger(e, n, i, a) {
            if (e === 'xAxes' || e === 'yAxes') {
              let r,
                l,
                s,
                u = i[e].length; for (n[e] || (n[e] = []), r = 0; r < u; ++r)s = i[e][r], l = o.valueOrDefault(s.type, e === 'xAxes' ? 'category' : 'linear'), r >= n[e].length && n[e].push({}), !n[e][r].type || s.type && s.type !== n[e][r].type ? o.merge(n[e][r], [t.scaleService.getScaleDefaults(l), s]) : o.merge(n[e][r], s);
            } else o._merger(e, n, i, a);
          },
        });
      }, o.where = function (t, e) { if (o.isArray(t) && Array.prototype.filter) return t.filter(e); const n = []; return o.each(t, (t) => { e(t) && n.push(t); }), n; }, o.findIndex = Array.prototype.findIndex ? function (t, e, n) { return t.findIndex(e, n); } : function (t, e, n) { n = void 0 === n ? t : n; for (let i = 0, a = t.length; i < a; ++i) if (e.call(n, t[i], i, t)) return i; return -1; }, o.findNextWhere = function (t, e, n) { o.isNullOrUndef(n) && (n = -1); for (let i = n + 1; i < t.length; i++) { const a = t[i]; if (e(a)) return a; } }, o.findPreviousWhere = function (t, e, n) { o.isNullOrUndef(n) && (n = t.length); for (let i = n - 1; i >= 0; i--) { const a = t[i]; if (e(a)) return a; } }, o.isNumber = function (t) { return !isNaN(parseFloat(t)) && isFinite(t); }, o.almostEquals = function (t, e, n) { return Math.abs(t - e) < n; }, o.almostWhole = function (t, e) { const n = Math.round(t); return n - e < t && n + e > t; }, o.max = function (t) { return t.reduce((t, e) => (isNaN(e) ? t : Math.max(t, e)), Number.NEGATIVE_INFINITY); }, o.min = function (t) { return t.reduce((t, e) => (isNaN(e) ? t : Math.min(t, e)), Number.POSITIVE_INFINITY); }, o.sign = Math.sign ? function (t) { return Math.sign(t); } : function (t) { return (t = +t) == 0 || isNaN(t) ? t : t > 0 ? 1 : -1; }, o.log10 = Math.log10 ? function (t) { return Math.log10(t); } : function (t) { return Math.log(t) / Math.LN10; }, o.toRadians = function (t) { return t * (Math.PI / 180); }, o.toDegrees = function (t) { return t * (180 / Math.PI); }, o.getAngleFromPoint = function (t, e) {
        let n = e.x - t.x,
          i = e.y - t.y,
          a = Math.sqrt(n * n + i * i),
          o = Math.atan2(i, n); return o < -0.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: a };
      }, o.distanceBetweenPoints = function (t, e) { return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)); }, o.aliasPixel = function (t) { return t % 2 == 0 ? 0 : 0.5; }, o.splineCurve = function (t, e, n, i) {
        let a = t.skip ? e : t,
          o = e,
          r = n.skip ? e : n,
          l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
          s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
          u = l / (l + s),
          d = s / (l + s),
          c = i * (u = isNaN(u) ? 0 : u),
          h = i * (d = isNaN(d) ? 0 : d); return { previous: { x: o.x - c * (r.x - a.x), y: o.y - c * (r.y - a.y) }, next: { x: o.x + h * (r.x - a.x), y: o.y + h * (r.y - a.y) } };
      }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
        let e,
          n,
          i,
          a,
          r = (t || []).map(t => ({ model: t._model, deltaK: 0, mK: 0 })),
          l = r.length; for (e = 0; e < l; ++e) if (!(i = r[e]).model.skip) { if (n = e > 0 ? r[e - 1] : null, (a = e < l - 1 ? r[e + 1] : null) && !a.model.skip) { const s = a.model.x - i.model.x; i.deltaK = s !== 0 ? (a.model.y - i.model.y) / s : 0; }!n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2; } let u,
          d,
          c,
          h; for (e = 0; e < l - 1; ++e)i = r[e], a = r[e + 1], i.model.skip || a.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (u = i.mK / i.deltaK, d = a.mK / i.deltaK, (h = Math.pow(u, 2) + Math.pow(d, 2)) <= 9 || (c = 3 / Math.sqrt(h), i.mK = u * c * i.deltaK, a.mK = d * c * i.deltaK))); let f; for (e = 0; e < l; ++e)(i = r[e]).model.skip || (n = e > 0 ? r[e - 1] : null, a = e < l - 1 ? r[e + 1] : null, n && !n.model.skip && (f = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - f, i.model.controlPointPreviousY = i.model.y - f * i.mK), a && !a.model.skip && (f = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + f, i.model.controlPointNextY = i.model.y + f * i.mK));
      }, o.nextItem = function (t, e, n) { return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]; }, o.previousItem = function (t, e, n) { return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]; }, o.niceNum = function (t, e) {
        let n = Math.floor(o.log10(t)),
          i = t / Math.pow(10, n); return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n);
      }, o.requestAnimFrame = typeof window === 'undefined' ? function (t) { t(); } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) { return window.setTimeout(t, 1e3 / 60); }, o.getRelativePosition = function (t, e) {
        let n,
          i,
          a = t.originalEvent || t,
          r = t.currentTarget || t.srcElement,
          l = r.getBoundingClientRect(),
          s = a.touches; s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY); let u = parseFloat(o.getStyle(r, 'padding-left')),
          d = parseFloat(o.getStyle(r, 'padding-top')),
          c = parseFloat(o.getStyle(r, 'padding-right')),
          h = parseFloat(o.getStyle(r, 'padding-bottom')),
          f = l.right - l.left - u - c,
          g = l.bottom - l.top - d - h; return n = Math.round((n - l.left - u) / f * r.width / e.currentDevicePixelRatio), i = Math.round((i - l.top - d) / g * r.height / e.currentDevicePixelRatio), { x: n, y: i };
      }, o.getConstraintWidth = function (t) { return r(t, 'max-width', 'clientWidth'); }, o.getConstraintHeight = function (t) { return r(t, 'max-height', 'clientHeight'); }, o.getMaximumWidth = function (t) {
        const e = t.parentNode; if (!e) return t.clientWidth; let n = parseInt(o.getStyle(e, 'padding-left'), 10),
          i = parseInt(o.getStyle(e, 'padding-right'), 10),
          a = e.clientWidth - n - i,
          r = o.getConstraintWidth(t); return isNaN(r) ? a : Math.min(a, r);
      }, o.getMaximumHeight = function (t) {
        const e = t.parentNode; if (!e) return t.clientHeight; let n = parseInt(o.getStyle(e, 'padding-top'), 10),
          i = parseInt(o.getStyle(e, 'padding-bottom'), 10),
          a = e.clientHeight - n - i,
          r = o.getConstraintHeight(t); return isNaN(r) ? a : Math.min(a, r);
      }, o.getStyle = function (t, e) { return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e); }, o.retinaScale = function (t, e) {
        const n = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1; if (n !== 1) {
          let i = t.canvas,
            a = t.height,
            o = t.width; i.height = a * n, i.width = o * n, t.ctx.scale(n, n), i.style.height = `${a}px`, i.style.width = `${o}px`;
        }
      }, o.fontString = function (t, e, n) { return `${e} ${t}px ${n}`; }, o.longestText = function (t, e, n, i) {
        let a = (i = i || {}).data = i.data || {},
          r = i.garbageCollect = i.garbageCollect || []; i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e; let l = 0; o.each(n, (e) => { void 0 !== e && e !== null && !0 !== o.isArray(e) ? l = o.measureText(t, a, r, l, e) : o.isArray(e) && o.each(e, (e) => { void 0 === e || e === null || o.isArray(e) || (l = o.measureText(t, a, r, l, e)); }); }); const s = r.length / 2; if (s > n.length) { for (let u = 0; u < s; u++) delete a[r[u]]; r.splice(0, s); } return l;
      }, o.measureText = function (t, e, n, i, a) { let o = e[a]; return o || (o = e[a] = t.measureText(a).width, n.push(a)), o > i && (i = o), i; }, o.numberOfLabelLines = function (t) { let e = 1; return o.each(t, (t) => { o.isArray(t) && t.length > e && (e = t.length); }), e; }, o.color = i ? function (t) { return t instanceof CanvasGradient && (t = a.global.defaultColor), i(t); } : function (t) { return console.error('Color.js not found!'), t; }, o.getHoverColor = function (t) { return t instanceof CanvasPattern ? t : o.color(t).saturate(0.5).darken(0.1).rgbString(); };
    };
  }, { 25: 25, 3: 3, 45: 45 }],
  28: [function (t, e, n) {
    function i(t, e) { return t.native ? { x: t.x, y: t.y } : u.getRelativePosition(t, e); } function a(t, e) {
      let n,
        i,
        a,
        o,
        r; for (i = 0, o = t.data.datasets.length; i < o; ++i) if (t.isDatasetVisible(i)) for (a = 0, r = (n = t.getDatasetMeta(i)).data.length; a < r; ++a) { const l = n.data[a]; l._view.skip || e(l); }
    } function o(t, e) { const n = []; return a(t, (t) => { t.inRange(e.x, e.y) && n.push(t); }), n; } function r(t, e, n, i) {
      let o = Number.POSITIVE_INFINITY,
        r = []; return a(t, (t) => {
        if (!n || t.inRange(e.x, e.y)) {
          let a = t.getCenterPoint(),
            l = i(e, a); l < o ? (r = [t], o = l) : l === o && r.push(t);
        }
      }), r;
    } function l(t) {
      let e = t.indexOf('x') !== -1,
        n = t.indexOf('y') !== -1; return function (t, i) {
        let a = e ? Math.abs(t.x - i.x) : 0,
          o = n ? Math.abs(t.y - i.y) : 0; return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
      };
    } function s(t, e, n) {
      const a = i(e, t); n.axis = n.axis || 'x'; let s = l(n.axis),
        u = n.intersect ? o(t, a) : r(t, a, !1, s),
        d = []; return u.length ? (t.data.datasets.forEach((e, n) => { if (t.isDatasetVisible(n)) { const i = t.getDatasetMeta(n).data[u[0]._index]; i && !i._view.skip && d.push(i); } }), d) : [];
    } var u = t(45); e.exports = {
      modes: {
        single(t, e) {
          let n = i(e, t),
            o = []; return a(t, (t) => { if (t.inRange(n.x, n.y)) return o.push(t), o; }), o.slice(0, 1);
        },
        label: s,
        index: s,
        dataset(t, e, n) {
          const a = i(e, t); n.axis = n.axis || 'xy'; let s = l(n.axis),
            u = n.intersect ? o(t, a) : r(t, a, !1, s); return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
        },
        'x-axis': function (t, e) { return s(t, e, { intersect: !1 }); },
        point(t, e) { return o(t, i(e, t)); },
        nearest(t, e, n) {
          const a = i(e, t); n.axis = n.axis || 'xy'; let o = l(n.axis),
            s = r(t, a, n.intersect, o); return s.length > 1 && s.sort((t, e) => { let n = t.getArea() - e.getArea(); return n === 0 && (n = t._datasetIndex - e._datasetIndex), n; }), s.slice(0, 1);
        },
        x(t, e, n) {
          let o = i(e, t),
            r = [],
            l = !1; return a(t, (t) => { t.inXRange(o.x) && r.push(t), t.inRange(o.x, o.y) && (l = !0); }), n.intersect && !l && (r = []), r;
        },
        y(t, e, n) {
          let o = i(e, t),
            r = [],
            l = !1; return a(t, (t) => { t.inYRange(o.y) && r.push(t), t.inRange(o.x, o.y) && (l = !0); }), n.intersect && !l && (r = []), r;
        },
      },
    };
  }, { 45: 45 }],
  29: [function (t, e, n) {
    t(25)._set('global', {
      responsive: !0,
      responsiveAnimationDuration: 0,
      maintainAspectRatio: !0,
      events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
      hover: {
        onHover: null, mode: 'nearest', intersect: !0, animationDuration: 400,
      },
      onClick: null,
      defaultColor: 'rgba(0,0,0,0.1)',
      defaultFontColor: '#666',
      defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      defaultFontSize: 12,
      defaultFontStyle: 'normal',
      showLines: !0,
      elements: {},
      layout: {
        padding: {
          top: 0, right: 0, bottom: 0, left: 0,
        },
      },
    }), e.exports = function () { const t = function (t, e) { return this.construct(t, e), this; }; return t.Chart = t, t; };
  }, { 25: 25 }],
  30: [function (t, e, n) {
    const i = t(45); e.exports = function (t) {
      function e(t, e) { return i.where(t, t => t.position === e); } function n(t, e) {
        t.forEach((t, e) => t._tmpIndex_ = e, t), t.sort((t, n) => {
          let i = e ? n : t,
            a = e ? t : n; return i.weight === a.weight ? i._tmpIndex_ - a._tmpIndex_ : i.weight - a.weight;
        }), t.forEach((t) => { delete t._tmpIndex_; });
      }t.layoutService = {
        defaults: {},
        addBox(t, e) { t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || 'top', e.weight = e.weight || 0, t.boxes.push(e); },
        removeBox(t, e) { const n = t.boxes ? t.boxes.indexOf(e) : -1; n !== -1 && t.boxes.splice(n, 1); },
        configure(t, e, n) { for (var i, a = ['fullWidth', 'position', 'weight'], o = a.length, r = 0; r < o; ++r)i = a[r], n.hasOwnProperty(i) && (e[i] = n[i]); },
        update(t, a, o) {
          function r(t) {
            const e = i.findNextWhere(_, e => e.box === t); if (e) {
              if (t.isHorizontal()) {
                const n = {
                  left: Math.max(T, D), right: Math.max(F, I), top: 0, bottom: 0,
                }; t.update(t.fullWidth ? x : S, y / 2, n);
              } else t.update(e.minSize.width, C);
            }
          } function l(t) { t.isHorizontal() ? (t.left = t.fullWidth ? d : T, t.right = t.fullWidth ? a - c : T + S, t.top = V, t.bottom = V + t.height, V = t.bottom) : (t.left = N, t.right = N + t.width, t.top = O, t.bottom = O + C, N = t.right); } if (t) {
            var s = t.options.layout || {},
              u = i.options.toPadding(s.padding),
              d = u.left,
              c = u.right,
              h = u.top,
              f = u.bottom,
              g = e(t.boxes, 'left'),
              p = e(t.boxes, 'right'),
              v = e(t.boxes, 'top'),
              m = e(t.boxes, 'bottom'),
              b = e(t.boxes, 'chartArea'); n(g, !0), n(p, !1), n(v, !0), n(m, !1); var x = a - d - c,
              y = o - h - f,
              k = y / 2,
              w = (a - x / 2) / (g.length + p.length),
              M = (o - k) / (v.length + m.length),
              S = x,
              C = y,
              _ = []; i.each(g.concat(p, v, m), (t) => {
              let e,
                n = t.isHorizontal(); n ? (e = t.update(t.fullWidth ? x : S, M), C -= e.height) : (e = t.update(w, k), S -= e.width), _.push({ horizontal: n, minSize: e, box: t });
            }); var D = 0,
              I = 0,
              P = 0,
              A = 0; i.each(v.concat(m), (t) => { if (t.getPadding) { const e = t.getPadding(); D = Math.max(D, e.left), I = Math.max(I, e.right); } }), i.each(g.concat(p), (t) => { if (t.getPadding) { const e = t.getPadding(); P = Math.max(P, e.top), A = Math.max(A, e.bottom); } }); var T = d,
              F = c,
              O = h,
              R = f; i.each(g.concat(p), r), i.each(g, (t) => { T += t.width; }), i.each(p, (t) => { F += t.width; }), i.each(v.concat(m), r), i.each(v, (t) => { O += t.height; }), i.each(m, (t) => { R += t.height; }), i.each(g.concat(p), (t) => {
              let e = i.findNextWhere(_, e => e.box === t),
                n = {
                  left: 0, right: 0, top: O, bottom: R,
                }; e && t.update(e.minSize.width, C, n);
            }), T = d, F = c, O = h, R = f, i.each(g, (t) => { T += t.width; }), i.each(p, (t) => { F += t.width; }), i.each(v, (t) => { O += t.height; }), i.each(m, (t) => { R += t.height; }); const L = Math.max(D - T, 0); T += L, F += Math.max(I - F, 0); const z = Math.max(P - O, 0); O += z, R += Math.max(A - R, 0); let B = o - O - R,
              W = a - T - F; W === S && B === C || (i.each(g, (t) => { t.height = B; }), i.each(p, (t) => { t.height = B; }), i.each(v, (t) => { t.fullWidth || (t.width = W); }), i.each(m, (t) => { t.fullWidth || (t.width = W); }), C = B, S = W); var N = d + L,
              V = h + z; i.each(g.concat(v), l), N += S, V += C, i.each(p, l), i.each(m, l), t.chartArea = {
              left: T, top: O, right: T + S, bottom: O + C,
            }, i.each(b, (e) => { e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(S, C); });
          }
        },
      };
    };
  }, { 45: 45 }],
  31: [function (t, e, n) {
    let i = t(25),
      a = t(26),
      o = t(45); i._set('global', { plugins: {} }), e.exports = function (t) {
      t.plugins = {
        _plugins: [],
        _cacheId: 0,
        register(t) { const e = this._plugins; [].concat(t).forEach((t) => { e.indexOf(t) === -1 && e.push(t); }), this._cacheId++; },
        unregister(t) { const e = this._plugins; [].concat(t).forEach((t) => { const n = e.indexOf(t); n !== -1 && e.splice(n, 1); }), this._cacheId++; },
        clear() { this._plugins = [], this._cacheId++; },
        count() { return this._plugins.length; },
        getAll() { return this._plugins; },
        notify(t, e, n) {
          let i,
            a,
            o,
            r,
            l,
            s = this.descriptors(t),
            u = s.length; for (i = 0; i < u; ++i) if (a = s[i], o = a.plugin, typeof (l = o[e]) === 'function' && ((r = [t].concat(n || [])).push(a.options), !1 === l.apply(o, r))) return !1; return !0;
        },
        descriptors(t) {
          const e = t._plugins || (t._plugins = {}); if (e.id === this._cacheId) return e.descriptors; let n = [],
            a = [],
            r = t && t.config || {},
            l = r.options && r.options.plugins || {}; return this._plugins.concat(r.plugins || []).forEach((t) => {
            if (n.indexOf(t) === -1) {
              let e = t.id,
                r = l[e]; !1 !== r && (!0 === r && (r = o.clone(i.global.plugins[e])), n.push(t), a.push({ plugin: t, options: r || {} }));
            }
          }), e.descriptors = a, e.id = this._cacheId, a;
        },
      }, t.pluginService = t.plugins, t.PluginBase = a.extend({});
    };
  }, { 25: 25, 26: 26, 45: 45 }],
  32: [function (t, e, n) {
    function i(t) {
      let e,
        n,
        i = []; for (e = 0, n = t.length; e < n; ++e)i.push(t[e].label); return i;
    } function a(t, e, n) { let i = t.getPixelForTick(e); return n && (i -= e === 0 ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i; } let o = t(25),
      r = t(26),
      l = t(45),
      s = t(34); o._set('scale', {
      display: !0,
      position: 'left',
      offset: !1,
      gridLines: {
        display: !0, color: 'rgba(0, 0, 0, 0.1)', lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: 'rgba(0,0,0,0.25)', zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0,
      },
      scaleLabel: {
        display: !1, labelString: '', lineHeight: 1.2, padding: { top: 4, bottom: 4 },
      },
      ticks: {
        beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: s.formatters.values, minor: {}, major: {},
      },
    }), e.exports = function (t) {
      function e(t, e, n) { return l.isArray(e) ? l.longestText(t, n, e) : t.measureText(e).width; } function n(t) {
        let e = l.valueOrDefault,
          n = o.global,
          i = e(t.fontSize, n.defaultFontSize),
          a = e(t.fontStyle, n.defaultFontStyle),
          r = e(t.fontFamily, n.defaultFontFamily); return {
          size: i, style: a, family: r, font: l.fontString(i, a, r),
        };
      } function s(t) { return l.options.toLineHeight(l.valueOrDefault(t.lineHeight, 1.2), l.valueOrDefault(t.fontSize, o.global.defaultFontSize)); }t.Scale = r.extend({
        getPadding() {
          const t = this; return {
            left: t.paddingLeft || 0, top: t.paddingTop || 0, right: t.paddingRight || 0, bottom: t.paddingBottom || 0,
          };
        },
        getTicks() { return this._ticks; },
        mergeTicksOptions() { const t = this.options.ticks; !1 === t.minor && (t.minor = { display: !1 }), !1 === t.major && (t.major = { display: !1 }); for (const e in t)e !== 'major' && e !== 'minor' && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e])); },
        beforeUpdate() { l.callback(this.options.beforeUpdate, [this]); },
        update(t, e, n) {
          let i,
            a,
            o,
            r,
            s,
            u,
            d = this; for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = l.extend({
            left: 0, right: 0, top: 0, bottom: 0,
          }, n), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), o = d.convertTicksToLabels(s) || d.ticks, d.afterTickToLabelConversion(), d.ticks = o, i = 0, a = o.length; i < a; ++i)r = o[i], (u = s[i]) ? u.label = r : s.push(u = { label: r, major: !1 }); return d._ticks = s, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
        },
        afterUpdate() { l.callback(this.options.afterUpdate, [this]); },
        beforeSetDimensions() { l.callback(this.options.beforeSetDimensions, [this]); },
        setDimensions() { const t = this; t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0; },
        afterSetDimensions() { l.callback(this.options.afterSetDimensions, [this]); },
        beforeDataLimits() { l.callback(this.options.beforeDataLimits, [this]); },
        determineDataLimits: l.noop,
        afterDataLimits() { l.callback(this.options.afterDataLimits, [this]); },
        beforeBuildTicks() { l.callback(this.options.beforeBuildTicks, [this]); },
        buildTicks: l.noop,
        afterBuildTicks() { l.callback(this.options.afterBuildTicks, [this]); },
        beforeTickToLabelConversion() { l.callback(this.options.beforeTickToLabelConversion, [this]); },
        convertTicksToLabels() {
          let t = this,
            e = t.options.ticks; t.ticks = t.ticks.map(e.userCallback || e.callback, this);
        },
        afterTickToLabelConversion() { l.callback(this.options.afterTickToLabelConversion, [this]); },
        beforeCalculateTickRotation() { l.callback(this.options.beforeCalculateTickRotation, [this]); },
        calculateTickRotation() {
          let t = this,
            e = t.ctx,
            a = t.options.ticks,
            o = i(t._ticks),
            r = n(a); e.font = r.font; let s = a.minRotation || 0; if (o.length && t.options.display && t.isHorizontal()) for (var u, d = l.longestText(e, r.font, o, t.longestTextCache), c = d, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > h && s < a.maxRotation;) { const f = l.toRadians(s); if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) { s--; break; }s++, c = u * d; }t.labelRotation = s;
        },
        afterCalculateTickRotation() { l.callback(this.options.afterCalculateTickRotation, [this]); },
        beforeFit() { l.callback(this.options.beforeFit, [this]); },
        fit() {
          let t = this,
            a = t.minSize = { width: 0, height: 0 },
            o = i(t._ticks),
            r = t.options,
            u = r.ticks,
            d = r.scaleLabel,
            c = r.gridLines,
            h = r.display,
            f = t.isHorizontal(),
            g = n(u),
            p = r.gridLines.tickMarkLength; if (a.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && c.drawTicks ? p : 0, a.height = f ? h && c.drawTicks ? p : 0 : t.maxHeight, d.display && h) { const v = s(d) + l.options.toPadding(d.padding).height; f ? a.height += v : a.width += v; } if (u.display && h) {
            let m = l.longestText(t.ctx, g.font, o, t.longestTextCache),
              b = l.numberOfLabelLines(o),
              x = 0.5 * g.size,
              y = t.options.ticks.padding; if (f) {
              t.longestLabelWidth = m; let k = l.toRadians(t.labelRotation),
                w = Math.cos(k),
                M = Math.sin(k) * m + g.size * b + x * (b - 1) + x; a.height = Math.min(t.maxHeight, a.height + M + y), t.ctx.font = g.font; let S = e(t.ctx, o[0], g.font),
                C = e(t.ctx, o[o.length - 1], g.font); t.labelRotation !== 0 ? (t.paddingLeft = r.position === 'bottom' ? w * S + 3 : w * x + 3, t.paddingRight = r.position === 'bottom' ? w * x + 3 : w * C + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = C / 2 + 3);
            } else u.mirror ? m = 0 : m += y + x, a.width = Math.min(t.maxWidth, a.width + m), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2;
          }t.handleMargins(), t.width = a.width, t.height = a.height;
        },
        handleMargins() { const t = this; t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0)); },
        afterFit() { l.callback(this.options.afterFit, [this]); },
        isHorizontal() { return this.options.position === 'top' || this.options.position === 'bottom'; },
        isFullWidth() { return this.options.fullWidth; },
        getRightValue(t) { if (l.isNullOrUndef(t)) return NaN; if (typeof t === 'number' && !isFinite(t)) return NaN; if (t) if (this.isHorizontal()) { if (void 0 !== t.x) return this.getRightValue(t.x); } else if (void 0 !== t.y) return this.getRightValue(t.y); return t; },
        getLabelForIndex: l.noop,
        getPixelForValue: l.noop,
        getValueForPixel: l.noop,
        getPixelForTick(t) {
          let e = this,
            n = e.options.offset; if (e.isHorizontal()) {
            let i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
              a = i * t + e.paddingLeft; n && (a += i / 2); let o = e.left + Math.round(a); return o += e.isFullWidth() ? e.margins.left : 0;
          } const r = e.height - (e.paddingTop + e.paddingBottom); return e.top + t * (r / (e._ticks.length - 1));
        },
        getPixelForDecimal(t) {
          const e = this; if (e.isHorizontal()) {
            let n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
              i = e.left + Math.round(n); return i += e.isFullWidth() ? e.margins.left : 0;
          } return e.top + t * e.height;
        },
        getBasePixel() { return this.getPixelForValue(this.getBaseValue()); },
        getBaseValue() {
          let t = this,
            e = t.min,
            n = t.max; return t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
        },
        _autoSkip(t) {
          let e,
            n,
            i,
            a,
            o = this,
            r = o.isHorizontal(),
            s = o.options.ticks.minor,
            u = t.length,
            d = l.toRadians(o.labelRotation),
            c = Math.cos(d),
            h = o.longestLabelWidth * c,
            f = []; for (s.maxTicksLimit && (a = s.maxTicksLimit), r && (e = !1, (h + s.autoSkipPadding) * u > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((h + s.autoSkipPadding) * u / (o.width - (o.paddingLeft + o.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), n = 0; n < u; n++)i = t[n], (e > 1 && n % e > 0 || n % e == 0 && n + e >= u) && n !== u - 1 && delete i.label, f.push(i); return f;
        },
        draw(t) {
          let e = this,
            i = e.options; if (i.display) {
            let r = e.ctx,
              u = o.global,
              d = i.ticks.minor,
              c = i.ticks.major || d,
              h = i.gridLines,
              f = i.scaleLabel,
              g = e.labelRotation !== 0,
              p = e.isHorizontal(),
              v = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
              m = l.valueOrDefault(d.fontColor, u.defaultFontColor),
              b = n(d),
              x = l.valueOrDefault(c.fontColor, u.defaultFontColor),
              y = n(c),
              k = h.drawTicks ? h.tickMarkLength : 0,
              w = l.valueOrDefault(f.fontColor, u.defaultFontColor),
              M = n(f),
              S = l.options.toPadding(f.padding),
              C = l.toRadians(e.labelRotation),
              _ = [],
              D = i.position === 'right' ? e.left : e.right - k,
              I = i.position === 'right' ? e.left + k : e.right,
              P = i.position === 'bottom' ? e.top : e.bottom - k,
              A = i.position === 'bottom' ? e.top + k : e.bottom; if (l.each(v, (n, o) => {
              if (!l.isNullOrUndef(n.label)) {
                let r,
                  s,
                  c,
                  f,
                  m = n.label; o === e.zeroLineIndex && i.offset === h.offsetGridLines ? (r = h.zeroLineWidth, s = h.zeroLineColor, c = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (r = l.valueAtIndexOrDefault(h.lineWidth, o), s = l.valueAtIndexOrDefault(h.color, o), c = l.valueOrDefault(h.borderDash, u.borderDash), f = l.valueOrDefault(h.borderDashOffset, u.borderDashOffset)); let b,
                  x,
                  y,
                  w,
                  M,
                  S,
                  T,
                  F,
                  O,
                  R,
                  L = 'middle',
                  z = 'middle',
                  B = d.padding; if (p) { const W = k + B; i.position === 'bottom' ? (z = g ? 'middle' : 'top', L = g ? 'right' : 'center', R = e.top + W) : (z = g ? 'middle' : 'bottom', L = g ? 'left' : 'center', R = e.bottom - W); let N = a(e, o, h.offsetGridLines && v.length > 1); N < e.left && (s = 'rgba(0,0,0,0)'), N += l.aliasPixel(r), O = e.getPixelForTick(o) + d.labelOffset, b = y = M = T = N, x = P, w = A, S = t.top, F = t.bottom; } else {
                  let V,
                    E = i.position === 'left'; d.mirror ? (L = E ? 'left' : 'right', V = B) : (L = E ? 'right' : 'left', V = k + B), O = E ? e.right - V : e.left + V; let H = a(e, o, h.offsetGridLines && v.length > 1); H < e.top && (s = 'rgba(0,0,0,0)'), H += l.aliasPixel(r), R = e.getPixelForTick(o) + d.labelOffset, b = D, y = I, M = t.left, T = t.right, x = w = S = F = H;
                }_.push({
                  tx1: b, ty1: x, tx2: y, ty2: w, x1: M, y1: S, x2: T, y2: F, labelX: O, labelY: R, glWidth: r, glColor: s, glBorderDash: c, glBorderDashOffset: f, rotation: -1 * C, label: m, major: n.major, textBaseline: z, textAlign: L,
                });
              }
            }), l.each(_, (t) => { if (h.display && (r.save(), r.lineWidth = t.glWidth, r.strokeStyle = t.glColor, r.setLineDash && (r.setLineDash(t.glBorderDash), r.lineDashOffset = t.glBorderDashOffset), r.beginPath(), h.drawTicks && (r.moveTo(t.tx1, t.ty1), r.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (r.moveTo(t.x1, t.y1), r.lineTo(t.x2, t.y2)), r.stroke(), r.restore()), d.display) { r.save(), r.translate(t.labelX, t.labelY), r.rotate(t.rotation), r.font = t.major ? y.font : b.font, r.fillStyle = t.major ? x : m, r.textBaseline = t.textBaseline, r.textAlign = t.textAlign; const e = t.label; if (l.isArray(e)) for (let n = 0, i = 0; n < e.length; ++n)r.fillText(`${e[n]}`, 0, i), i += 1.5 * b.size; else r.fillText(e, 0, 0); r.restore(); } }), f.display) {
              let T,
                F,
                O = 0,
                R = s(f) / 2; if (p)T = e.left + (e.right - e.left) / 2, F = i.position === 'bottom' ? e.bottom - R - S.bottom : e.top + R + S.top; else { const L = i.position === 'left'; T = L ? e.left + R + S.top : e.right - R - S.top, F = e.top + (e.bottom - e.top) / 2, O = L ? -0.5 * Math.PI : 0.5 * Math.PI; }r.save(), r.translate(T, F), r.rotate(O), r.textAlign = 'center', r.textBaseline = 'middle', r.fillStyle = w, r.font = M.font, r.fillText(f.labelString, 0, 0), r.restore();
            } if (h.drawBorder) {
              r.lineWidth = l.valueAtIndexOrDefault(h.lineWidth, 0), r.strokeStyle = l.valueAtIndexOrDefault(h.color, 0); let z = e.left,
                B = e.right,
                W = e.top,
                N = e.bottom,
                V = l.aliasPixel(r.lineWidth); p ? (W = N = i.position === 'top' ? e.bottom : e.top, W += V, N += V) : (z = B = i.position === 'left' ? e.right : e.left, z += V, B += V), r.beginPath(), r.moveTo(z, W), r.lineTo(B, N), r.stroke();
            }
          }
        },
      });
    };
  }, {
    25: 25, 26: 26, 34: 34, 45: 45,
  }],
  33: [function (t, e, n) {
    let i = t(25),
      a = t(45); e.exports = function (t) {
      t.scaleService = {
        constructors: {}, defaults: {}, registerScaleType(t, e, n) { this.constructors[t] = e, this.defaults[t] = a.clone(n); }, getScaleConstructor(t) { return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0; }, getScaleDefaults(t) { return this.defaults.hasOwnProperty(t) ? a.merge({}, [i.scale, this.defaults[t]]) : {}; }, updateScaleDefaults(t, e) { const n = this; n.defaults.hasOwnProperty(t) && (n.defaults[t] = a.extend(n.defaults[t], e)); }, addScalesToLayout(e) { a.each(e.scales, (n) => { n.fullWidth = n.options.fullWidth, n.position = n.options.position, n.weight = n.options.weight, t.layoutService.addBox(e, n); }); },
      };
    };
  }, { 25: 25, 45: 45 }],
  34: [function (t, e, n) {
    const i = t(45); e.exports = {
      generators: {
        linear(t, e) {
          let n,
            a = []; if (t.stepSize && t.stepSize > 0)n = t.stepSize; else { const o = i.niceNum(e.max - e.min, !1); n = i.niceNum(o / (t.maxTicks - 1), !0); } let r = Math.floor(e.min / n) * n,
            l = Math.ceil(e.max / n) * n; t.min && t.max && t.stepSize && i.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (r = t.min, l = t.max); let s = (l - r) / n; s = i.almostEquals(s, Math.round(s), n / 1e3) ? Math.round(s) : Math.ceil(s), a.push(void 0 !== t.min ? t.min : r); for (let u = 1; u < s; ++u)a.push(r + u * n); return a.push(void 0 !== t.max ? t.max : l), a;
        },
        logarithmic(t, e) {
          let n,
            a,
            o = [],
            r = i.valueOrDefault,
            l = r(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
            s = Math.floor(i.log10(e.max)),
            u = Math.ceil(e.max / Math.pow(10, s)); l === 0 ? (n = Math.floor(i.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, n)), o.push(l), l = a * Math.pow(10, n)) : (n = Math.floor(i.log10(l)), a = Math.floor(l / Math.pow(10, n))); do { o.push(l), ++a === 10 && (a = 1, ++n), l = a * Math.pow(10, n); } while (n < s || n === s && a < u);const d = r(t.max, l); return o.push(d), o;
        },
      },
      formatters: {
        values(t) { return i.isArray(t) ? t : `${t}`; },
        linear(t, e, n) {
          let a = n.length > 3 ? n[2] - n[1] : n[1] - n[0]; Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t)); let o = i.log10(Math.abs(a)),
            r = ''; if (t !== 0) { let l = -1 * Math.floor(o); l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l); } else r = '0'; return r;
        },
        logarithmic(t, e, n) { const a = t / Math.pow(10, Math.floor(i.log10(t))); return t === 0 ? '0' : a === 1 || a === 2 || a === 5 || e === 0 || e === n.length - 1 ? t.toExponential() : ''; },
      },
    };
  }, { 45: 45 }],
  35: [function (t, e, n) {
    let i = t(25),
      a = t(26),
      o = t(45); i._set('global', {
      tooltips: {
        enabled: !0,
        custom: null,
        mode: 'nearest',
        position: 'average',
        intersect: !0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFontStyle: 'bold',
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleFontColor: '#fff',
        titleAlign: 'left',
        bodySpacing: 2,
        bodyFontColor: '#fff',
        bodyAlign: 'left',
        footerFontStyle: 'bold',
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFontColor: '#fff',
        footerAlign: 'left',
        yPadding: 6,
        xPadding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        multiKeyBackground: '#fff',
        displayColors: !0,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        callbacks: {
          beforeTitle: o.noop,
          title(t, e) {
            let n = '',
              i = e.labels,
              a = i ? i.length : 0; if (t.length > 0) { const o = t[0]; o.xLabel ? n = o.xLabel : a > 0 && o.index < a && (n = i[o.index]); } return n;
          },
          afterTitle: o.noop,
          beforeBody: o.noop,
          beforeLabel: o.noop,
          label(t, e) { let n = e.datasets[t.datasetIndex].label || ''; return n && (n += ': '), n += t.yLabel; },
          labelColor(t, e) { const n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view; return { borderColor: n.borderColor, backgroundColor: n.backgroundColor }; },
          labelTextColor() { return this._options.bodyFontColor; },
          afterLabel: o.noop,
          afterBody: o.noop,
          beforeFooter: o.noop,
          footer: o.noop,
          afterFooter: o.noop,
        },
      },
    }), e.exports = function (t) {
      function e(t, e) { const n = o.color(t); return n.alpha(e * n.alpha()).rgbaString(); } function n(t, e) { return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t; } function r(t) {
        let e = t._xScale,
          n = t._yScale || t._scale,
          i = t._index,
          a = t._datasetIndex; return {
          xLabel: e ? e.getLabelForIndex(i, a) : '', yLabel: n ? n.getLabelForIndex(i, a) : '', index: i, datasetIndex: a, x: t._model.x, y: t._model.y,
        };
      } function l(t) {
        let e = i.global,
          n = o.valueOrDefault; return {
          xPadding: t.xPadding, yPadding: t.yPadding, xAlign: t.xAlign, yAlign: t.yAlign, bodyFontColor: t.bodyFontColor, _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily), _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle), _bodyAlign: t.bodyAlign, bodyFontSize: n(t.bodyFontSize, e.defaultFontSize), bodySpacing: t.bodySpacing, titleFontColor: t.titleFontColor, _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily), _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle), titleFontSize: n(t.titleFontSize, e.defaultFontSize), _titleAlign: t.titleAlign, titleSpacing: t.titleSpacing, titleMarginBottom: t.titleMarginBottom, footerFontColor: t.footerFontColor, _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily), _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle), footerFontSize: n(t.footerFontSize, e.defaultFontSize), _footerAlign: t.footerAlign, footerSpacing: t.footerSpacing, footerMarginTop: t.footerMarginTop, caretSize: t.caretSize, cornerRadius: t.cornerRadius, backgroundColor: t.backgroundColor, opacity: 0, legendColorBackground: t.multiKeyBackground, displayColors: t.displayColors, borderColor: t.borderColor, borderWidth: t.borderWidth,
        };
      } function s(t, e) {
        let n = t._chart.ctx,
          i = 2 * e.yPadding,
          a = 0,
          r = e.body,
          l = r.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0); l += e.beforeBody.length + e.afterBody.length; let s = e.title.length,
          u = e.footer.length,
          d = e.titleFontSize,
          c = e.bodyFontSize,
          h = e.footerFontSize; i += s * d, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += l * c, i += l ? (l - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * e.footerSpacing : 0; let f = 0,
          g = function (t) { a = Math.max(a, n.measureText(t).width + f); }; return n.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily), o.each(e.title, g), n.font = o.fontString(c, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, o.each(r, (t) => { o.each(t.before, g), o.each(t.lines, g), o.each(t.after, g); }), f = 0, n.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, g), a += 2 * e.xPadding, { width: a, height: i };
      } function u(t, e) {
        let n = t._model,
          i = t._chart,
          a = t._chart.chartArea,
          o = 'center',
          r = 'center'; n.y < e.height ? r = 'top' : n.y > i.height - e.height && (r = 'bottom'); let l,
          s,
          u,
          d,
          c,
          h = (a.left + a.right) / 2,
          f = (a.top + a.bottom) / 2; r === 'center' ? (l = function (t) { return t <= h; }, s = function (t) { return t > h; }) : (l = function (t) { return t <= e.width / 2; }, s = function (t) { return t >= i.width - e.width / 2; }), u = function (t) { return t + e.width > i.width; }, d = function (t) { return t - e.width < 0; }, c = function (t) { return t <= f ? 'top' : 'bottom'; }, l(n.x) ? (o = 'left', u(n.x) && (o = 'center', r = c(n.y))) : s(n.x) && (o = 'right', d(n.x) && (o = 'center', r = c(n.y))); const g = t._options; return { xAlign: g.xAlign ? g.xAlign : o, yAlign: g.yAlign ? g.yAlign : r };
      } function d(t, e, n) {
        let i = t.x,
          a = t.y,
          o = t.caretSize,
          r = t.caretPadding,
          l = t.cornerRadius,
          s = n.xAlign,
          u = n.yAlign,
          d = o + r,
          c = l + r; return s === 'right' ? i -= e.width : s === 'center' && (i -= e.width / 2), u === 'top' ? a += d : a -= u === 'bottom' ? e.height + d : e.height / 2, u === 'center' ? s === 'left' ? i += d : s === 'right' && (i -= d) : s === 'left' ? i -= c : s === 'right' && (i += c), { x: i, y: a };
      }t.Tooltip = a.extend({
        initialize() { this._model = l(this._options), this._lastActive = []; },
        getTitle() {
          let t = this,
            e = t._options.callbacks,
            i = e.beforeTitle.apply(t, arguments),
            a = e.title.apply(t, arguments),
            o = e.afterTitle.apply(t, arguments),
            r = []; return r = n(r, i), r = n(r, a), r = n(r, o);
        },
        getBeforeBody() { const t = this._options.callbacks.beforeBody.apply(this, arguments); return o.isArray(t) ? t : void 0 !== t ? [t] : []; },
        getBody(t, e) {
          let i = this,
            a = i._options.callbacks,
            r = []; return o.each(t, (t) => { const o = { before: [], lines: [], after: [] }; n(o.before, a.beforeLabel.call(i, t, e)), n(o.lines, a.label.call(i, t, e)), n(o.after, a.afterLabel.call(i, t, e)), r.push(o); }), r;
        },
        getAfterBody() { const t = this._options.callbacks.afterBody.apply(this, arguments); return o.isArray(t) ? t : void 0 !== t ? [t] : []; },
        getFooter() {
          let t = this,
            e = t._options.callbacks,
            i = e.beforeFooter.apply(t, arguments),
            a = e.footer.apply(t, arguments),
            o = e.afterFooter.apply(t, arguments),
            r = []; return r = n(r, i), r = n(r, a), r = n(r, o);
        },
        update(e) {
          let n,
            i,
            a = this,
            c = a._options,
            h = a._model,
            f = a._model = l(c),
            g = a._active,
            p = a._data,
            v = { xAlign: h.xAlign, yAlign: h.yAlign },
            m = { x: h.x, y: h.y },
            b = { width: h.width, height: h.height },
            x = { x: h.caretX, y: h.caretY }; if (g.length) {
            f.opacity = 1; let y = [],
              k = []; x = t.Tooltip.positioners[c.position].call(a, g, a._eventPosition); let w = []; for (n = 0, i = g.length; n < i; ++n)w.push(r(g[n])); c.filter && (w = w.filter(t => c.filter(t, p))), c.itemSort && (w = w.sort((t, e) => c.itemSort(t, e, p))), o.each(w, (t) => { y.push(c.callbacks.labelColor.call(a, t, a._chart)), k.push(c.callbacks.labelTextColor.call(a, t, a._chart)); }), f.title = a.getTitle(w, p), f.beforeBody = a.getBeforeBody(w, p), f.body = a.getBody(w, p), f.afterBody = a.getAfterBody(w, p), f.footer = a.getFooter(w, p), f.x = Math.round(x.x), f.y = Math.round(x.y), f.caretPadding = c.caretPadding, f.labelColors = y, f.labelTextColors = k, f.dataPoints = w, m = d(f, b = s(this, f), v = u(this, b));
          } else f.opacity = 0; return f.xAlign = v.xAlign, f.yAlign = v.yAlign, f.x = m.x, f.y = m.y, f.width = b.width, f.height = b.height, f.caretX = x.x, f.caretY = x.y, a._model = f, e && c.custom && c.custom.call(a, f), a;
        },
        drawCaret(t, e) {
          let n = this._chart.ctx,
            i = this._view,
            a = this.getCaretPosition(t, e, i); n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
        },
        getCaretPosition(t, e, n) {
          let i,
            a,
            o,
            r,
            l,
            s,
            u = n.caretSize,
            d = n.cornerRadius,
            c = n.xAlign,
            h = n.yAlign,
            f = t.x,
            g = t.y,
            p = e.width,
            v = e.height; if (h === 'center')l = g + v / 2, c === 'left' ? (a = (i = f) - u, o = i, r = l + u, s = l - u) : (a = (i = f + p) + u, o = i, r = l - u, s = l + u); else if (c === 'left' ? (i = (a = f + d + u) - u, o = a + u) : c === 'right' ? (i = (a = f + p - d - u) - u, o = a + u) : (i = (a = f + p / 2) - u, o = a + u), h === 'top')l = (r = g) - u, s = r; else { l = (r = g + v) + u, s = r; const m = o; o = i, i = m; } return {
            x1: i, x2: a, x3: o, y1: r, y2: l, y3: s,
          };
        },
        drawTitle(t, n, i, a) {
          const r = n.title; if (r.length) {
            i.textAlign = n._titleAlign, i.textBaseline = 'top'; let l = n.titleFontSize,
              s = n.titleSpacing; i.fillStyle = e(n.titleFontColor, a), i.font = o.fontString(l, n._titleFontStyle, n._titleFontFamily); let u,
              d; for (u = 0, d = r.length; u < d; ++u)i.fillText(r[u], t.x, t.y), t.y += l + s, u + 1 === r.length && (t.y += n.titleMarginBottom - s);
          }
        },
        drawBody(t, n, i, a) {
          let r = n.bodyFontSize,
            l = n.bodySpacing,
            s = n.body; i.textAlign = n._bodyAlign, i.textBaseline = 'top', i.font = o.fontString(r, n._bodyFontStyle, n._bodyFontFamily); let u = 0,
            d = function (e) { i.fillText(e, t.x + u, t.y), t.y += r + l; }; i.fillStyle = e(n.bodyFontColor, a), o.each(n.beforeBody, d); const c = n.displayColors; u = c ? r + 2 : 0, o.each(s, (l, s) => { const u = e(n.labelTextColors[s], a); i.fillStyle = u, o.each(l.before, d), o.each(l.lines, (o) => { c && (i.fillStyle = e(n.legendColorBackground, a), i.fillRect(t.x, t.y, r, r), i.lineWidth = 1, i.strokeStyle = e(n.labelColors[s].borderColor, a), i.strokeRect(t.x, t.y, r, r), i.fillStyle = e(n.labelColors[s].backgroundColor, a), i.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), i.fillStyle = u), d(o); }), o.each(l.after, d); }), u = 0, o.each(n.afterBody, d), t.y -= l;
        },
        drawFooter(t, n, i, a) { const r = n.footer; r.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = 'top', i.fillStyle = e(n.footerFontColor, a), i.font = o.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), o.each(r, (e) => { i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing; })); },
        drawBackground(t, n, i, a, o) {
          i.fillStyle = e(n.backgroundColor, o), i.strokeStyle = e(n.borderColor, o), i.lineWidth = n.borderWidth; let r = n.xAlign,
            l = n.yAlign,
            s = t.x,
            u = t.y,
            d = a.width,
            c = a.height,
            h = n.cornerRadius; i.beginPath(), i.moveTo(s + h, u), l === 'top' && this.drawCaret(t, a), i.lineTo(s + d - h, u), i.quadraticCurveTo(s + d, u, s + d, u + h), l === 'center' && r === 'right' && this.drawCaret(t, a), i.lineTo(s + d, u + c - h), i.quadraticCurveTo(s + d, u + c, s + d - h, u + c), l === 'bottom' && this.drawCaret(t, a), i.lineTo(s + h, u + c), i.quadraticCurveTo(s, u + c, s, u + c - h), l === 'center' && r === 'left' && this.drawCaret(t, a), i.lineTo(s, u + h), i.quadraticCurveTo(s, u, s + h, u), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke();
        },
        draw() {
          let t = this._chart.ctx,
            e = this._view; if (e.opacity !== 0) {
            let n = { width: e.width, height: e.height },
              i = { x: e.x, y: e.y },
              a = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
              o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length; this._options.enabled && o && (this.drawBackground(i, e, t, n, a), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, a), this.drawBody(i, e, t, a), this.drawFooter(i, e, t, a));
          }
        },
        handleEvent(t) {
          let e = this,
            n = e._options,
            i = !1; if (e._lastActive = e._lastActive || [], t.type === 'mouseout' ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), !(i = !o.arrayEquals(e._active, e._lastActive))) return !1; if (e._lastActive = e._active, n.enabled || n.custom) { e._eventPosition = { x: t.x, y: t.y }; const a = e._model; e.update(!0), e.pivot(), i |= a.x !== e._model.x || a.y !== e._model.y; } return i;
        },
      }), t.Tooltip.positioners = {
        average(t) {
          if (!t.length) return !1; let e,
            n,
            i = 0,
            a = 0,
            o = 0; for (e = 0, n = t.length; e < n; ++e) { const r = t[e]; if (r && r.hasValue()) { const l = r.tooltipPosition(); i += l.x, a += l.y, ++o; } } return { x: Math.round(i / o), y: Math.round(a / o) };
        },
        nearest(t, e) {
          let n,
            i,
            a,
            r = e.x,
            l = e.y,
            s = Number.POSITIVE_INFINITY; for (n = 0, i = t.length; n < i; ++n) {
            const u = t[n]; if (u && u.hasValue()) {
              let d = u.getCenterPoint(),
                c = o.distanceBetweenPoints(e, d); c < s && (s = c, a = u);
            }
          } if (a) { const h = a.tooltipPosition(); r = h.x, l = h.y; } return { x: r, y: l };
        },
      };
    };
  }, { 25: 25, 26: 26, 45: 45 }],
  36: [function (t, e, n) {
    let i = t(25),
      a = t(26),
      o = t(45); i._set('global', { elements: { arc: { backgroundColor: i.global.defaultColor, borderColor: '#fff', borderWidth: 2 } } }), e.exports = a.extend({
      inLabelRange(t) { const e = this._view; return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2); },
      inRange(t, e) {
        const n = this._view; if (n) {
          for (var i = o.getAngleFromPoint(n, { x: t, y: e }), a = i.angle, r = i.distance, l = n.startAngle, s = n.endAngle; s < l;)s += 2 * Math.PI; for (;a > s;)a -= 2 * Math.PI; for (;a < l;)a += 2 * Math.PI; let u = a >= l && a <= s,
            d = r >= n.innerRadius && r <= n.outerRadius; return u && d;
        } return !1;
      },
      getCenterPoint() {
        let t = this._view,
          e = (t.startAngle + t.endAngle) / 2,
          n = (t.innerRadius + t.outerRadius) / 2; return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
      },
      getArea() { const t = this._view; return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2)); },
      tooltipPosition() {
        let t = this._view,
          e = t.startAngle + (t.endAngle - t.startAngle) / 2,
          n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius; return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
      },
      draw() {
        let t = this._chart.ctx,
          e = this._view,
          n = e.startAngle,
          i = e.endAngle; t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = 'bevel', e.borderWidth && t.stroke();
      },
    });
  }, { 25: 25, 26: 26, 45: 45 }],
  37: [function (t, e, n) {
    let i = t(25),
      a = t(26),
      o = t(45),
      r = i.global; i._set('global', {
      elements: {
        line: {
          tension: 0.4, backgroundColor: r.defaultColor, borderWidth: 3, borderColor: r.defaultColor, borderCapStyle: 'butt', borderDash: [], borderDashOffset: 0, borderJoinStyle: 'miter', capBezierPoints: !0, fill: !0,
        },
      },
    }), e.exports = a.extend({
      draw() {
        let t,
          e,
          n,
          i,
          a = this,
          l = a._view,
          s = a._chart.ctx,
          u = l.spanGaps,
          d = a._children.slice(),
          c = r.elements.line,
          h = -1; for (a._loop && d.length && d.push(d[0]), s.save(), s.lineCap = l.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(l.borderDash || c.borderDash), s.lineDashOffset = l.borderDashOffset || c.borderDashOffset, s.lineJoin = l.borderJoinStyle || c.borderJoinStyle, s.lineWidth = l.borderWidth || c.borderWidth, s.strokeStyle = l.borderColor || r.defaultColor, s.beginPath(), h = -1, t = 0; t < d.length; ++t)e = d[t], n = o.previousItem(d, t), i = e._view, t === 0 ? i.skip || (s.moveTo(i.x, i.y), h = t) : (n = h === -1 ? n : d[h], i.skip || (h !== t - 1 && !u || h === -1 ? s.moveTo(i.x, i.y) : o.canvas.lineTo(s, n._view, e._view), h = t)); s.stroke(), s.restore();
      },
    });
  }, { 25: 25, 26: 26, 45: 45 }],
  38: [function (t, e, n) {
    function i(t) { const e = this._view; return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2); } let a = t(25),
      o = t(26),
      r = t(45),
      l = a.global.defaultColor; a._set('global', {
      elements: {
        point: {
          radius: 3, pointStyle: 'circle', backgroundColor: l, borderColor: l, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1,
        },
      },
    }), e.exports = o.extend({
      inRange(t, e) { const n = this._view; return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2); },
      inLabelRange: i,
      inXRange: i,
      inYRange(t) { const e = this._view; return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2); },
      getCenterPoint() { const t = this._view; return { x: t.x, y: t.y }; },
      getArea() { return Math.PI * Math.pow(this._view.radius, 2); },
      tooltipPosition() { const t = this._view; return { x: t.x, y: t.y, padding: t.radius + t.borderWidth }; },
      draw(t) {
        let e = this._view,
          n = this._model,
          i = this._chart.ctx,
          o = e.pointStyle,
          s = e.radius,
          u = e.x,
          d = e.y,
          c = r.color,
          h = 0; e.skip || (i.strokeStyle = e.borderColor || l, i.lineWidth = r.valueOrDefault(e.borderWidth, a.global.elements.point.borderWidth), i.fillStyle = e.backgroundColor || l, void 0 !== t && (n.x < t.left || 1.01 * t.right < n.x || n.y < t.top || 1.01 * t.bottom < n.y) && (n.x < t.left ? h = (u - n.x) / (t.left - n.x) : 1.01 * t.right < n.x ? h = (n.x - u) / (n.x - t.right) : n.y < t.top ? h = (d - n.y) / (t.top - n.y) : 1.01 * t.bottom < n.y && (h = (n.y - d) / (n.y - t.bottom)), h = Math.round(100 * h) / 100, i.strokeStyle = c(i.strokeStyle).alpha(h).rgbString(), i.fillStyle = c(i.fillStyle).alpha(h).rgbString()), r.canvas.drawPoint(i, o, s, u, d));
      },
    });
  }, { 25: 25, 26: 26, 45: 45 }],
  39: [function (t, e, n) {
    function i(t) { return void 0 !== t._view.width; } function a(t) {
      let e,
        n,
        a,
        o,
        r = t._view; if (i(t)) { const l = r.width / 2; e = r.x - l, n = r.x + l, a = Math.min(r.y, r.base), o = Math.max(r.y, r.base); } else { const s = r.height / 2; e = Math.min(r.x, r.base), n = Math.max(r.x, r.base), a = r.y - s, o = r.y + s; } return {
        left: e, top: a, right: n, bottom: o,
      };
    } let o = t(25),
      r = t(26); o._set('global', {
      elements: {
        rectangle: {
          backgroundColor: o.global.defaultColor, borderColor: o.global.defaultColor, borderSkipped: 'bottom', borderWidth: 0,
        },
      },
    }), e.exports = r.extend({
      draw() {
        function t(t) { return m[(b + t) % 4]; } let e,
          n,
          i,
          a,
          o,
          r,
          l,
          s = this._chart.ctx,
          u = this._view,
          d = u.borderWidth; if (u.horizontal ? (e = u.base, n = u.x, i = u.y - u.height / 2, a = u.y + u.height / 2, o = n > e ? 1 : -1, r = 1, l = u.borderSkipped || 'left') : (e = u.x - u.width / 2, n = u.x + u.width / 2, i = u.y, o = 1, r = (a = u.base) > i ? 1 : -1, l = u.borderSkipped || 'bottom'), d) {
          let c = Math.min(Math.abs(e - n), Math.abs(i - a)),
            h = (d = d > c ? c : d) / 2,
            f = e + (l !== 'left' ? h * o : 0),
            g = n + (l !== 'right' ? -h * o : 0),
            p = i + (l !== 'top' ? h * r : 0),
            v = a + (l !== 'bottom' ? -h * r : 0); f !== g && (i = p, a = v), p !== v && (e = f, n = g);
        }s.beginPath(), s.fillStyle = u.backgroundColor, s.strokeStyle = u.borderColor, s.lineWidth = d; var m = [[e, a], [e, i], [n, i], [n, a]],
          b = ['bottom', 'left', 'top', 'right'].indexOf(l, 0); b === -1 && (b = 0); let x = t(0); s.moveTo(x[0], x[1]); for (let y = 1; y < 4; y++)x = t(y), s.lineTo(x[0], x[1]); s.fill(), d && s.stroke();
      },
      height() { const t = this._view; return t.base - t.y; },
      inRange(t, e) { let n = !1; if (this._view) { const i = a(this); n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom; } return n; },
      inLabelRange(t, e) { const n = this; if (!n._view) return !1; const o = a(n); return i(n) ? t >= o.left && t <= o.right : e >= o.top && e <= o.bottom; },
      inXRange(t) { const e = a(this); return t >= e.left && t <= e.right; },
      inYRange(t) { const e = a(this); return t >= e.top && t <= e.bottom; },
      getCenterPoint() {
        let t,
          e,
          n = this._view; return i(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), { x: t, y: e };
      },
      getArea() { const t = this._view; return t.width * Math.abs(t.y - t.base); },
      tooltipPosition() { const t = this._view; return { x: t.x, y: t.y }; },
    });
  }, { 25: 25, 26: 26 }],
  40: [function (t, e, n) {
    e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39);
  }, {
    36: 36, 37: 37, 38: 38, 39: 39,
  }],
  41: [function (t, e, n) {
    var i = t(42),
      n = e.exports = {
        clear(t) { t.ctx.clearRect(0, 0, t.width, t.height); },
        roundedRect(t, e, n, i, a, o) {
          if (o) {
            let r = Math.min(o, i / 2),
              l = Math.min(o, a / 2); t.moveTo(e + r, n), t.lineTo(e + i - r, n), t.quadraticCurveTo(e + i, n, e + i, n + l), t.lineTo(e + i, n + a - l), t.quadraticCurveTo(e + i, n + a, e + i - r, n + a), t.lineTo(e + r, n + a), t.quadraticCurveTo(e, n + a, e, n + a - l), t.lineTo(e, n + l), t.quadraticCurveTo(e, n, e + r, n);
          } else t.rect(e, n, i, a);
        },
        drawPoint(t, e, n, i, a) {
          let o,
            r,
            l,
            s,
            u,
            d; if (!e || typeof e !== 'object' || (o = e.toString()) !== '[object HTMLImageElement]' && o !== '[object HTMLCanvasElement]') {
            if (!(isNaN(n) || n <= 0)) {
              switch (e) {
                default: t.beginPath(), t.arc(i, a, n, 0, 2 * Math.PI), t.closePath(), t.fill(); break; case 'triangle': t.beginPath(), u = (r = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(i - r / 2, a + u / 3), t.lineTo(i + r / 2, a + u / 3), t.lineTo(i, a - 2 * u / 3), t.closePath(), t.fill(); break; case 'rect': d = 1 / Math.SQRT2 * n, t.beginPath(), t.fillRect(i - d, a - d, 2 * d, 2 * d), t.strokeRect(i - d, a - d, 2 * d, 2 * d); break; case 'rectRounded': var c = n / Math.SQRT2,
                  h = i - c,
                  f = a - c,
                  g = Math.SQRT2 * n; t.beginPath(), this.roundedRect(t, h, f, g, g, n / 2), t.closePath(), t.fill(); break; case 'rectRot': d = 1 / Math.SQRT2 * n, t.beginPath(), t.moveTo(i - d, a), t.lineTo(i, a + d), t.lineTo(i + d, a), t.lineTo(i, a - d), t.closePath(), t.fill(); break; case 'cross': t.beginPath(), t.moveTo(i, a + n), t.lineTo(i, a - n), t.moveTo(i - n, a), t.lineTo(i + n, a), t.closePath(); break; case 'crossRot': t.beginPath(), l = Math.cos(Math.PI / 4) * n, s = Math.sin(Math.PI / 4) * n, t.moveTo(i - l, a - s), t.lineTo(i + l, a + s), t.moveTo(i - l, a + s), t.lineTo(i + l, a - s), t.closePath(); break; case 'star': t.beginPath(), t.moveTo(i, a + n), t.lineTo(i, a - n), t.moveTo(i - n, a), t.lineTo(i + n, a), l = Math.cos(Math.PI / 4) * n, s = Math.sin(Math.PI / 4) * n, t.moveTo(i - l, a - s), t.lineTo(i + l, a + s), t.moveTo(i - l, a + s), t.lineTo(i + l, a - s), t.closePath(); break; case 'line': t.beginPath(), t.moveTo(i - n, a), t.lineTo(i + n, a), t.closePath(); break; case 'dash': t.beginPath(), t.moveTo(i, a), t.lineTo(i + n, a), t.closePath();
              }t.stroke();
            }
          } else t.drawImage(e, i - e.width / 2, a - e.height / 2, e.width, e.height);
        },
        clipArea(t, e) { t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip(); },
        unclipArea(t) { t.restore(); },
        lineTo(t, e, n, i) { if (n.steppedLine) return n.steppedLine === 'after' && !i || n.steppedLine !== 'after' && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y); n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y); },
      }; i.clear = n.clear, i.drawRoundedRectangle = function (t) { t.beginPath(), n.roundedRect(...arguments), t.closePath(); };
  }, { 42: 42 }],
  42: [function (t, e, n) {
    var i = {
      noop() {},
      uid: (function () { let t = 0; return function () { return t++; }; }()),
      isNullOrUndef(t) { return t === null || void 0 === t; },
      isArray: Array.isArray ? Array.isArray : function (t) { return Object.prototype.toString.call(t) === '[object Array]'; },
      isObject(t) { return t !== null && Object.prototype.toString.call(t) === '[object Object]'; },
      valueOrDefault(t, e) { return void 0 === t ? e : t; },
      valueAtIndexOrDefault(t, e, n) { return i.valueOrDefault(i.isArray(t) ? t[e] : t, n); },
      callback(t, e, n) { if (t && typeof t.call === 'function') return t.apply(n, e); },
      each(t, e, n, a) {
        let o,
          r,
          l; if (i.isArray(t)) if (r = t.length, a) for (o = r - 1; o >= 0; o--)e.call(n, t[o], o); else for (o = 0; o < r; o++)e.call(n, t[o], o); else if (i.isObject(t)) for (r = (l = Object.keys(t)).length, o = 0; o < r; o++)e.call(n, t[l[o]], l[o]);
      },
      arrayEquals(t, e) {
        let n,
          a,
          o,
          r; if (!t || !e || t.length !== e.length) return !1; for (n = 0, a = t.length; n < a; ++n) if (o = t[n], r = e[n], o instanceof Array && r instanceof Array) { if (!i.arrayEquals(o, r)) return !1; } else if (o !== r) return !1; return !0;
      },
      clone(t) { if (i.isArray(t)) return t.map(i.clone); if (i.isObject(t)) { for (var e = {}, n = Object.keys(t), a = n.length, o = 0; o < a; ++o)e[n[o]] = i.clone(t[n[o]]); return e; } return t; },
      _merger(t, e, n, a) {
        let o = e[t],
          r = n[t]; i.isObject(o) && i.isObject(r) ? i.merge(o, r, a) : e[t] = i.clone(r);
      },
      _mergerIf(t, e, n) {
        let a = e[t],
          o = n[t]; i.isObject(a) && i.isObject(o) ? i.mergeIf(a, o) : e.hasOwnProperty(t) || (e[t] = i.clone(o));
      },
      merge(t, e, n) {
        let a,
          o,
          r,
          l,
          s,
          u = i.isArray(e) ? e : [e],
          d = u.length; if (!i.isObject(t)) return t; for (a = (n = n || {}).merger || i._merger, o = 0; o < d; ++o) if (e = u[o], i.isObject(e)) for (s = 0, l = (r = Object.keys(e)).length; s < l; ++s)a(r[s], t, e, n); return t;
      },
      mergeIf(t, e) { return i.merge(t, e, { merger: i._mergerIf }); },
      extend(t) { for (let e = 1, n = arguments.length; e < n; ++e)i.each(arguments[e], (e, n) => { t[n] = e; }); return t; },
      inherits(t) {
        let e = this,
          n = t && t.hasOwnProperty('constructor') ? t.constructor : function () { return e.apply(this, arguments); },
          a = function () { this.constructor = n; }; return a.prototype = e.prototype, n.prototype = new a(), n.extend = i.inherits, t && i.extend(n.prototype, t), n.__super__ = e.prototype, n;
      },
    }; e.exports = i, i.callCallback = i.callback, i.indexOf = function (t, e, n) { return Array.prototype.indexOf.call(t, e, n); }, i.getValueOrDefault = i.valueOrDefault, i.getValueAtIndexOrDefault = i.valueAtIndexOrDefault;
  }, {}],
  43: [function (t, e, n) {
    var i = t(42),
      a = {
        linear(t) { return t; },
        easeInQuad(t) { return t * t; },
        easeOutQuad(t) { return -t * (t - 2); },
        easeInOutQuad(t) { return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1); },
        easeInCubic(t) { return t * t * t; },
        easeOutCubic(t) { return (t -= 1) * t * t + 1; },
        easeInOutCubic(t) { return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2); },
        easeInQuart(t) { return t * t * t * t; },
        easeOutQuart(t) { return -((t -= 1) * t * t * t - 1); },
        easeInOutQuart(t) { return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2); },
        easeInQuint(t) { return t * t * t * t * t; },
        easeOutQuint(t) { return (t -= 1) * t * t * t * t + 1; },
        easeInOutQuint(t) { return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2); },
        easeInSine(t) { return 1 - Math.cos(t * (Math.PI / 2)); },
        easeOutSine(t) { return Math.sin(t * (Math.PI / 2)); },
        easeInOutSine(t) { return -0.5 * (Math.cos(Math.PI * t) - 1); },
        easeInExpo(t) { return t === 0 ? 0 : Math.pow(2, 10 * (t - 1)); },
        easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); },
        easeInOutExpo(t) { return t === 0 ? 0 : t === 1 ? 1 : (t /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t)); },
        easeInCirc(t) { return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1); },
        easeOutCirc(t) { return Math.sqrt(1 - (t -= 1) * t); },
        easeInOutCirc(t) { return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1); },
        easeInElastic(t) {
          let e = 1.70158,
            n = 0,
            i = 1; return t === 0 ? 0 : t === 1 ? 1 : (n || (n = 0.3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
        },
        easeOutElastic(t) {
          let e = 1.70158,
            n = 0,
            i = 1; return t === 0 ? 0 : t === 1 ? 1 : (n || (n = 0.3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
        },
        easeInOutElastic(t) {
          let e = 1.70158,
            n = 0,
            i = 1; return t === 0 ? 0 : (t /= 0.5) == 2 ? 1 : (n || (n = 0.45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -0.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * 0.5 + 1);
        },
        easeInBack(t) { const e = 1.70158; return t * t * ((e + 1) * t - e); },
        easeOutBack(t) { const e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1; },
        easeInOutBack(t) { let e = 1.70158; return (t /= 0.5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2); },
        easeInBounce(t) { return 1 - a.easeOutBounce(1 - t); },
        easeOutBounce(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375; },
        easeInOutBounce(t) { return t < 0.5 ? 0.5 * a.easeInBounce(2 * t) : 0.5 * a.easeOutBounce(2 * t - 1) + 0.5; },
      }; e.exports = { effects: a }, i.easingEffects = a;
  }, { 42: 42 }],
  44: [function (t, e, n) {
    const i = t(42); e.exports = {
      toLineHeight(t, e) { const n = (`${t}`).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/); if (!n || n[1] === 'normal') return 1.2 * e; switch (t = +n[2], n[3]) { case 'px': return t; case '%': t /= 100; } return e * t; },
      toPadding(t) {
        let e,
          n,
          a,
          o; return i.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, a = +t.bottom || 0, o = +t.left || 0) : e = n = a = o = +t || 0, {
          top: e, right: n, bottom: a, left: o, height: e + a, width: o + n,
        };
      },
      resolve(t, e, n) {
        let a,
          o,
          r; for (a = 0, o = t.length; a < o; ++a) if (void 0 !== (r = t[a]) && (void 0 !== e && typeof r === 'function' && (r = r(e)), void 0 !== n && i.isArray(r) && (r = r[n]), void 0 !== r)) return r;
      },
    };
  }, { 42: 42 }],
  45: [function (t, e, n) {
    e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44);
  }, {
    41: 41, 42: 42, 43: 43, 44: 44,
  }],
  46: [function (t, e, n) { e.exports = { acquireContext(t) { return t && t.canvas && (t = t.canvas), t && t.getContext('2d') || null; } }; }, {}],
  47: [function (t, e, n) {
    function i(t, e) {
      let n = v.getStyle(t, e),
        i = n && n.match(/^(\d+)(\.\d+)?px$/); return i ? Number(i[1]) : void 0;
    } function a(t, e) {
      let n = t.style,
        a = t.getAttribute('height'),
        o = t.getAttribute('width'); if (t[m] = { initial: { height: a, width: o, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || 'block', o === null || o === '') { var r = i(t, 'width'); void 0 !== r && (t.width = r); } if (a === null || a === '') if (t.style.height === '')t.height = t.width / (e.options.aspectRatio || 2); else { const l = i(t, 'height'); void 0 !== r && (t.height = l); } return t;
    } function o(t, e, n) { t.addEventListener(e, n, M); } function r(t, e, n) { t.removeEventListener(e, n, M); } function l(t, e, n, i, a) {
      return {
        type: t, chart: e, native: a || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null,
      };
    } function s(t, e) {
      let n = w[t.type] || t.type,
        i = v.getRelativePosition(t, e); return l(n, e, i.x, i.y, t);
    } function u(t, e) {
      let n = !1,
        i = []; return function () { i = Array.prototype.slice.call(arguments), e = e || this, n || (n = !0, v.requestAnimFrame.call(window, () => { n = !1, t.apply(e, i); })); };
    } function d(t) {
      let e = document.createElement('div'),
        n = `${b}size-monitor`,
        i = 'position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;'; e.style.cssText = i, e.className = n, e.innerHTML = `<div class="${n}-expand" style="${i}"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="${n}-shrink" style="${i}"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>`; let a = e.childNodes[0],
        r = e.childNodes[1]; e._reset = function () { a.scrollLeft = 1e6, a.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6; }; const l = function () { e._reset(), t(); }; return o(a, 'scroll', l.bind(a, 'expand')), o(r, 'scroll', l.bind(r, 'shrink')), e;
    } function c(t, e) {
      let n = t[m] || (t[m] = {}),
        i = n.renderProxy = function (t) { t.animationName === y && e(); }; v.each(k, (e) => { o(t, e, i); }), n.reflow = !!t.offsetParent, t.classList.add(x);
    } function h(t) {
      let e = t[m] || {},
        n = e.renderProxy; n && (v.each(k, (e) => { r(t, e, n); }), delete e.renderProxy), t.classList.remove(x);
    } function f(t, e, n) {
      let i = t[m] || (t[m] = {}),
        a = i.resizer = d(u(() => { if (i.resizer) return e(l('resize', n)); })); c(t, () => { if (i.resizer) { const e = t.parentNode; e && e !== a.parentNode && e.insertBefore(a, e.firstChild), a._reset(); } });
    } function g(t) {
      let e = t[m] || {},
        n = e.resizer; delete e.resizer, h(t), n && n.parentNode && n.parentNode.removeChild(n);
    } function p(t, e) { const n = t._style || document.createElement('style'); t._style || (t._style = n, e = `/* Chart.js */\n${e}`, n.setAttribute('type', 'text/css'), document.getElementsByTagName('head')[0].appendChild(n)), n.appendChild(document.createTextNode(e)); } var v = t(45),
      m = '$chartjs',
      b = 'chartjs-',
      x = `${b}render-monitor`,
      y = `${b}render-animation`,
      k = ['animationstart', 'webkitAnimationStart'],
      w = {
        touchstart: 'mousedown', touchmove: 'mousemove', touchend: 'mouseup', pointerenter: 'mouseenter', pointerdown: 'mousedown', pointermove: 'mousemove', pointerup: 'mouseup', pointerleave: 'mouseout', pointerout: 'mouseout',
      },
      M = !!(function () { let t = !1; try { const e = Object.defineProperty({}, 'passive', { get() { t = !0; } }); window.addEventListener('e', null, e); } catch (t) {} return t; }()) && { passive: !0 }; e.exports = {
      _enabled: typeof window !== 'undefined' && typeof document !== 'undefined', initialize() { const t = 'from{opacity:0.99}to{opacity:1}'; p(this, `@-webkit-keyframes ${y}{${t}}@keyframes ${y}{${t}}.${x}{-webkit-animation:${y} 0.001s;animation:${y} 0.001s;}`); }, acquireContext(t, e) { typeof t === 'string' ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas); const n = t && t.getContext && t.getContext('2d'); return n && n.canvas === t ? (a(t, e), n) : null; }, releaseContext(t) { const e = t.canvas; if (e[m]) { const n = e[m].initial; ['height', 'width'].forEach((t) => { const i = n[t]; v.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i); }), v.each(n.style || {}, (t, n) => { e.style[n] = t; }), e.width = e.width, delete e[m]; } }, addEventListener(t, e, n) { const i = t.canvas; if (e !== 'resize') { const a = n[m] || (n[m] = {}); o(i, e, (a.proxies || (a.proxies = {}))[`${t.id}_${e}`] = function (e) { n(s(e, t)); }); } else f(i, n, t); }, removeEventListener(t, e, n) { const i = t.canvas; if (e !== 'resize') { const a = ((n[m] || {}).proxies || {})[`${t.id}_${e}`]; a && r(i, e, a); } else g(i); },
    }, v.addEvent = o, v.removeEvent = r;
  }, { 45: 45 }],
  48: [function (t, e, n) {
    let i = t(45),
      a = t(46),
      o = t(47),
      r = o._enabled ? o : a; e.exports = i.extend({
      initialize() {}, acquireContext() {}, releaseContext() {}, addEventListener() {}, removeEventListener() {},
    }, r);
  }, { 45: 45, 46: 46, 47: 47 }],
  49: [function (t, e, n) {
    let i = t(25),
      a = t(40),
      o = t(45); i._set('global', { plugins: { filler: { propagate: !0 } } }), e.exports = function () {
      function t(t, e, n) {
        let i,
          a = t._model || {},
          o = a.fill; if (void 0 === o && (o = !!a.backgroundColor), !1 === o || o === null) return !1; if (!0 === o) return 'origin'; if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return o[0] !== '-' && o[0] !== '+' || (i = e + i), !(i === e || i < 0 || i >= n) && i; switch (o) { case 'bottom': return 'start'; case 'top': return 'end'; case 'zero': return 'origin'; case 'origin': case 'start': case 'end': return o; default: return !1; }
      } function e(t) {
        let e,
          n = t.el._model || {},
          i = t.el._scale || {},
          a = t.fill,
          o = null; if (isFinite(a)) return null; if (a === 'start' ? o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : a === 'end' ? o = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : i.getBasePosition ? o = i.getBasePosition() : i.getBasePixel && (o = i.getBasePixel()), void 0 !== o && o !== null) { if (void 0 !== o.x && void 0 !== o.y) return o; if (typeof o === 'number' && isFinite(o)) return e = i.isHorizontal(), { x: e ? o : null, y: e ? null : o }; } return null;
      } function n(t, e, n) {
        let i,
          a = t[e].fill,
          o = [e]; if (!n) return a; for (;!1 !== a && o.indexOf(a) === -1;) { if (!isFinite(a)) return a; if (!(i = t[a])) return !1; if (i.visible) return a; o.push(a), a = i.fill; } return !1;
      } function r(t) {
        let e = t.fill,
          n = 'dataset'; return !1 === e ? null : (isFinite(e) || (n = 'boundary'), d[n](t));
      } function l(t) { return t && !t.skip; } function s(t, e, n, i, a) { let r; if (i && a) { for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r)o.canvas.lineTo(t, e[r - 1], e[r]); for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r)o.canvas.lineTo(t, n[r], n[r - 1], !0); } } function u(t, e, n, i, a, o) {
        let r,
          u,
          d,
          c,
          h,
          f,
          g,
          p = e.length,
          v = i.spanGaps,
          m = [],
          b = [],
          x = 0,
          y = 0; for (t.beginPath(), r = 0, u = p + !!o; r < u; ++r)h = n(c = e[d = r % p]._view, d, i), f = l(c), g = l(h), f && g ? (x = m.push(c), y = b.push(h)) : x && y && (v ? (f && m.push(c), g && b.push(h)) : (s(t, m, b, x, y), x = y = 0, m = [], b = [])); s(t, m, b, x, y), t.closePath(), t.fillStyle = a, t.fill();
      } var d = {
        dataset(t) {
          let e = t.fill,
            n = t.chart,
            i = n.getDatasetMeta(e),
            a = i && n.isDatasetVisible(e) && i.dataset._children || [],
            o = a.length || 0; return o ? function (t, e) { return e < o && a[e]._view || null; } : null;
        },
        boundary(t) {
          let e = t.boundary,
            n = e ? e.x : null,
            i = e ? e.y : null; return function (t) { return { x: n === null ? t.x : n, y: i === null ? t.y : i }; };
        },
      }; return {
        id: 'filler',
        afterDatasetsUpdate(i, o) {
          let l,
            s,
            u,
            d,
            c = (i.data.datasets || []).length,
            h = o.propagate,
            f = []; for (s = 0; s < c; ++s) {
            d = null, (u = (l = i.getDatasetMeta(s)).dataset) && u._model && u instanceof a.Line && (d = {
              visible: i.isDatasetVisible(s), fill: t(u, s, c), chart: i, el: u,
            }), l.$filler = d, f.push(d);
          } for (s = 0; s < c; ++s)(d = f[s]) && (d.fill = n(f, s, h), d.boundary = e(d), d.mapper = r(d));
        },
        beforeDatasetDraw(t, e) {
          const n = e.meta.$filler; if (n) {
            let a = t.ctx,
              r = n.el,
              l = r._view,
              s = r._children || [],
              d = n.mapper,
              c = l.backgroundColor || i.global.defaultColor; d && c && s.length && (o.canvas.clipArea(a, t.chartArea), u(a, s, d, l, c, r._loop), o.canvas.unclipArea(a));
          }
        },
      };
    };
  }, { 25: 25, 40: 40, 45: 45 }],
  50: [function (t, e, n) {
    let i = t(25),
      a = t(26),
      o = t(45); i._set('global', {
      legend: {
        display: !0,
        position: 'top',
        fullWidth: !0,
        reverse: !1,
        weight: 1e3,
        onClick(t, e) {
          let n = e.datasetIndex,
            i = this.chart,
            a = i.getDatasetMeta(n); a.hidden = a.hidden === null ? !i.data.datasets[n].hidden : null, i.update();
        },
        onHover: null,
        labels: {
          boxWidth: 40,
          padding: 10,
          generateLabels(t) {
            const e = t.data; return o.isArray(e.datasets) ? e.datasets.map((e, n) => ({
              text: e.label, fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor, hidden: !t.isDatasetVisible(n), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, pointStyle: e.pointStyle, datasetIndex: n,
            }), this) : [];
          },
        },
      },
      legendCallback(t) { const e = []; e.push(`<ul class="${t.id}-legend">`); for (let n = 0; n < t.data.datasets.length; n++)e.push(`<li><span style="background-color:${t.data.datasets[n].backgroundColor}"></span>`), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push('</li>'); return e.push('</ul>'), e.join(''); },
    }), e.exports = function (t) {
      function e(t, e) { return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth; } function n(e, n) { const i = new t.Legend({ ctx: e.ctx, options: n, chart: e }); r.configure(e, i, n), r.addBox(e, i), e.legend = i; } var r = t.layoutService,
        l = o.noop; return t.Legend = a.extend({
        initialize(t) { o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1; },
        beforeUpdate: l,
        update(t, e, n) { const i = this; return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize; },
        afterUpdate: l,
        beforeSetDimensions: l,
        setDimensions() { const t = this; t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 }; },
        afterSetDimensions: l,
        beforeBuildLabels: l,
        buildLabels() {
          let t = this,
            e = t.options.labels || {},
            n = o.callback(e.generateLabels, [t.chart], t) || []; e.filter && (n = n.filter(n => e.filter(n, t.chart.data))), t.options.reverse && n.reverse(), t.legendItems = n;
        },
        afterBuildLabels: l,
        beforeFit: l,
        fit() {
          let t = this,
            n = t.options,
            a = n.labels,
            r = n.display,
            l = t.ctx,
            s = i.global,
            u = o.valueOrDefault,
            d = u(a.fontSize, s.defaultFontSize),
            c = u(a.fontStyle, s.defaultFontStyle),
            h = u(a.fontFamily, s.defaultFontFamily),
            f = o.fontString(d, c, h),
            g = t.legendHitBoxes = [],
            p = t.minSize,
            v = t.isHorizontal(); if (v ? (p.width = t.maxWidth, p.height = r ? 10 : 0) : (p.width = r ? 10 : 0, p.height = t.maxHeight), r) {
            if (l.font = f, v) {
              let m = t.lineWidths = [0],
                b = t.legendItems.length ? d + a.padding : 0; l.textAlign = 'left', l.textBaseline = 'top', o.each(t.legendItems, (n, i) => {
                const o = e(a, d) + d / 2 + l.measureText(n.text).width; m[m.length - 1] + o + a.padding >= t.width && (b += d + a.padding, m[m.length] = t.left), g[i] = {
                  left: 0, top: 0, width: o, height: d,
                }, m[m.length - 1] += o + a.padding;
              }), p.height += b;
            } else {
              let x = a.padding,
                y = t.columnWidths = [],
                k = a.padding,
                w = 0,
                M = 0,
                S = d + x; o.each(t.legendItems, (t, n) => {
                const i = e(a, d) + d / 2 + l.measureText(t.text).width; M + S > p.height && (k += w + a.padding, y.push(w), w = 0, M = 0), w = Math.max(w, i), M += S, g[n] = {
                  left: 0, top: 0, width: i, height: d,
                };
              }), k += w, y.push(w), p.width += k;
            }
          }t.width = p.width, t.height = p.height;
        },
        afterFit: l,
        isHorizontal() { return this.options.position === 'top' || this.options.position === 'bottom'; },
        draw() {
          let t = this,
            n = t.options,
            a = n.labels,
            r = i.global,
            l = r.elements.line,
            s = t.width,
            u = t.lineWidths; if (n.display) {
            let d,
              c = t.ctx,
              h = o.valueOrDefault,
              f = h(a.fontColor, r.defaultFontColor),
              g = h(a.fontSize, r.defaultFontSize),
              p = h(a.fontStyle, r.defaultFontStyle),
              v = h(a.fontFamily, r.defaultFontFamily),
              m = o.fontString(g, p, v); c.textAlign = 'left', c.textBaseline = 'middle', c.lineWidth = 0.5, c.strokeStyle = f, c.fillStyle = f, c.font = m; let b = e(a, g),
              x = t.legendHitBoxes,
              y = function (t, e, i) {
                if (!(isNaN(b) || b <= 0)) {
                  c.save(), c.fillStyle = h(i.fillStyle, r.defaultColor), c.lineCap = h(i.lineCap, l.borderCapStyle), c.lineDashOffset = h(i.lineDashOffset, l.borderDashOffset), c.lineJoin = h(i.lineJoin, l.borderJoinStyle), c.lineWidth = h(i.lineWidth, l.borderWidth), c.strokeStyle = h(i.strokeStyle, r.defaultColor); const a = h(i.lineWidth, l.borderWidth) === 0; if (c.setLineDash && c.setLineDash(h(i.lineDash, l.borderDash)), n.labels && n.labels.usePointStyle) {
                    let s = g * Math.SQRT2 / 2,
                      u = s / Math.SQRT2,
                      d = t + u,
                      f = e + u; o.canvas.drawPoint(c, i.pointStyle, s, d, f);
                  } else a || c.strokeRect(t, e, b, g), c.fillRect(t, e, b, g); c.restore();
                }
              },
              k = function (t, e, n, i) {
                let a = g / 2,
                  o = b + a + t,
                  r = e + a; c.fillText(n.text, o, r), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(o, r), c.lineTo(o + i, r), c.stroke());
              },
              w = t.isHorizontal(); d = w ? { x: t.left + (s - u[0]) / 2, y: t.top + a.padding, line: 0 } : { x: t.left + a.padding, y: t.top + a.padding, line: 0 }; const M = g + a.padding; o.each(t.legendItems, (e, n) => {
              let i = c.measureText(e.text).width,
                o = b + g / 2 + i,
                r = d.x,
                l = d.y; w ? r + o >= s && (l = d.y += M, d.line++, r = d.x = t.left + (s - u[d.line]) / 2) : l + M > t.bottom && (r = d.x = r + t.columnWidths[d.line] + a.padding, l = d.y = t.top + a.padding, d.line++), y(r, l, e), x[n].left = r, x[n].top = l, k(r, l, e, i), w ? d.x += o + a.padding : d.y += M;
            });
          }
        },
        handleEvent(t) {
          let e = this,
            n = e.options,
            i = t.type === 'mouseup' ? 'click' : t.type,
            a = !1; if (i === 'mousemove') { if (!n.onHover) return; } else { if (i !== 'click') return; if (!n.onClick) return; } let o = t.x,
            r = t.y; if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom) for (let l = e.legendHitBoxes, s = 0; s < l.length; ++s) { const u = l[s]; if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) { if (i === 'click') { n.onClick.call(e, t.native, e.legendItems[s]), a = !0; break; } if (i === 'mousemove') { n.onHover.call(e, t.native, e.legendItems[s]), a = !0; break; } } } return a;
        },
      }), {
        id: 'legend',
        beforeInit(t) { const e = t.options.legend; e && n(t, e); },
        beforeUpdate(t) {
          let e = t.options.legend,
            a = t.legend; e ? (o.mergeIf(e, i.global.legend), a ? (r.configure(t, a, e), a.options = e) : n(t, e)) : a && (r.removeBox(t, a), delete t.legend);
        },
        afterEvent(t, e) { const n = t.legend; n && n.handleEvent(e); },
      };
    };
  }, { 25: 25, 26: 26, 45: 45 }],
  51: [function (t, e, n) {
    let i = t(25),
      a = t(26),
      o = t(45); i._set('global', {
      title: {
        display: !1, fontStyle: 'bold', fullWidth: !0, lineHeight: 1.2, padding: 10, position: 'top', text: '', weight: 2e3,
      },
    }), e.exports = function (t) {
      function e(e, i) { const a = new t.Title({ ctx: e.ctx, options: i, chart: e }); n.configure(e, a, i), n.addBox(e, a), e.titleBlock = a; } var n = t.layoutService,
        r = o.noop; return t.Title = a.extend({
        initialize(t) { const e = this; o.extend(e, t), e.legendHitBoxes = []; },
        beforeUpdate: r,
        update(t, e, n) { const i = this; return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize; },
        afterUpdate: r,
        beforeSetDimensions: r,
        setDimensions() { const t = this; t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 }; },
        afterSetDimensions: r,
        beforeBuildLabels: r,
        buildLabels: r,
        afterBuildLabels: r,
        beforeFit: r,
        fit() {
          let t = this,
            e = o.valueOrDefault,
            n = t.options,
            a = n.display,
            r = e(n.fontSize, i.global.defaultFontSize),
            l = t.minSize,
            s = o.isArray(n.text) ? n.text.length : 1,
            u = o.options.toLineHeight(n.lineHeight, r),
            d = a ? s * u + 2 * n.padding : 0; t.isHorizontal() ? (l.width = t.maxWidth, l.height = d) : (l.width = d, l.height = t.maxHeight), t.width = l.width, t.height = l.height;
        },
        afterFit: r,
        isHorizontal() { const t = this.options.position; return t === 'top' || t === 'bottom'; },
        draw() {
          let t = this,
            e = t.ctx,
            n = o.valueOrDefault,
            a = t.options,
            r = i.global; if (a.display) {
            let l,
              s,
              u,
              d = n(a.fontSize, r.defaultFontSize),
              c = n(a.fontStyle, r.defaultFontStyle),
              h = n(a.fontFamily, r.defaultFontFamily),
              f = o.fontString(d, c, h),
              g = o.options.toLineHeight(a.lineHeight, d),
              p = g / 2 + a.padding,
              v = 0,
              m = t.top,
              b = t.left,
              x = t.bottom,
              y = t.right; e.fillStyle = n(a.fontColor, r.defaultFontColor), e.font = f, t.isHorizontal() ? (s = b + (y - b) / 2, u = m + p, l = y - b) : (s = a.position === 'left' ? b + p : y - p, u = m + (x - m) / 2, l = x - m, v = Math.PI * (a.position === 'left' ? -0.5 : 0.5)), e.save(), e.translate(s, u), e.rotate(v), e.textAlign = 'center', e.textBaseline = 'middle'; const k = a.text; if (o.isArray(k)) for (let w = 0, M = 0; M < k.length; ++M)e.fillText(k[M], 0, w, l), w += g; else e.fillText(k, 0, 0, l); e.restore();
          }
        },
      }), {
        id: 'title',
        beforeInit(t) { const n = t.options.title; n && e(t, n); },
        beforeUpdate(a) {
          let r = a.options.title,
            l = a.titleBlock; r ? (o.mergeIf(r, i.global.title), l ? (n.configure(a, l, r), l.options = r) : e(a, r)) : l && (t.layoutService.removeBox(a, l), delete a.titleBlock);
        },
      };
    };
  }, { 25: 25, 26: 26, 45: 45 }],
  52: [function (t, e, n) {
    e.exports = function (t) {
      const e = t.Scale.extend({
        getLabels() { const t = this.chart.data; return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels; },
        determineDataLimits() {
          let t = this,
            e = t.getLabels(); t.minIndex = 0, t.maxIndex = e.length - 1; let n; void 0 !== t.options.ticks.min && (n = e.indexOf(t.options.ticks.min), t.minIndex = n !== -1 ? n : t.minIndex), void 0 !== t.options.ticks.max && (n = e.indexOf(t.options.ticks.max), t.maxIndex = n !== -1 ? n : t.maxIndex), t.min = e[t.minIndex], t.max = e[t.maxIndex];
        },
        buildTicks() {
          let t = this,
            e = t.getLabels(); t.ticks = t.minIndex === 0 && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
        },
        getLabelForIndex(t, e) {
          let n = this,
            i = n.chart.data,
            a = n.isHorizontal(); return i.yLabels && !a ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex];
        },
        getPixelForValue(t, e) {
          let n,
            i = this,
            a = i.options.offset,
            o = Math.max(i.maxIndex + 1 - i.minIndex - (a ? 0 : 1), 1); if (void 0 !== t && t !== null && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) { const r = i.getLabels(); t = n || t; const l = r.indexOf(t); e = l !== -1 ? l : e; } if (i.isHorizontal()) {
            let s = i.width / o,
              u = s * (e - i.minIndex); return a && (u += s / 2), i.left + Math.round(u);
          } let d = i.height / o,
            c = d * (e - i.minIndex); return a && (c += d / 2), i.top + Math.round(c);
        },
        getPixelForTick(t) { return this.getPixelForValue(this.ticks[t], t + this.minIndex, null); },
        getValueForPixel(t) {
          let e = this,
            n = e.options.offset,
            i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
            a = e.isHorizontal(),
            o = (a ? e.width : e.height) / i; return t -= a ? e.left : e.top, n && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
        },
        getBasePixel() { return this.bottom; },
      }); t.scaleService.registerScaleType('category', e, { position: 'bottom' });
    };
  }, {}],
  53: [function (t, e, n) {
    let i = t(25),
      a = t(45),
      o = t(34); e.exports = function (t) {
      let e = { position: 'left', ticks: { callback: o.formatters.linear } },
        n = t.LinearScaleBase.extend({
          determineDataLimits() {
            function t(t) { return r ? t.xAxisID === e.id : t.yAxisID === e.id; } var e = this,
              n = e.options,
              i = e.chart,
              o = i.data.datasets,
              r = e.isHorizontal(); e.min = null, e.max = null; let l = n.stacked; if (void 0 === l && a.each(o, (e, n) => { if (!l) { const a = i.getDatasetMeta(n); i.isDatasetVisible(n) && t(a) && void 0 !== a.stack && (l = !0); } }), n.stacked || l) {
              const s = {}; a.each(o, (o, r) => {
                let l = i.getDatasetMeta(r),
                  u = [l.type, void 0 === n.stacked && void 0 === l.stack ? r : '', l.stack].join('.'); void 0 === s[u] && (s[u] = { positiveValues: [], negativeValues: [] }); let d = s[u].positiveValues,
                  c = s[u].negativeValues; i.isDatasetVisible(r) && t(l) && a.each(o.data, (t, i) => { const a = +e.getRightValue(t); isNaN(a) || l.data[i].hidden || (d[i] = d[i] || 0, c[i] = c[i] || 0, n.relativePoints ? d[i] = 100 : a < 0 ? c[i] += a : d[i] += a); });
              }), a.each(s, (t) => {
                let n = t.positiveValues.concat(t.negativeValues),
                  i = a.min(n),
                  o = a.max(n); e.min = e.min === null ? i : Math.min(e.min, i), e.max = e.max === null ? o : Math.max(e.max, o);
              });
            } else a.each(o, (n, o) => { const r = i.getDatasetMeta(o); i.isDatasetVisible(o) && t(r) && a.each(n.data, (t, n) => { const i = +e.getRightValue(t); isNaN(i) || r.data[n].hidden || (e.min === null ? e.min = i : i < e.min && (e.min = i), e.max === null ? e.max = i : i > e.max && (e.max = i)); }); }); e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions();
          },
          getTickLimit() {
            let t,
              e = this,
              n = e.options.ticks; if (e.isHorizontal())t = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(e.width / 50)); else { const o = a.valueOrDefault(n.fontSize, i.global.defaultFontSize); t = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(e.height / (2 * o))); } return t;
          },
          handleDirectionalChanges() { this.isHorizontal() || this.ticks.reverse(); },
          getLabelForIndex(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]); },
          getPixelForValue(t) {
            let e,
              n = this,
              i = n.start,
              a = +n.getRightValue(t),
              o = n.end - i; return n.isHorizontal() ? (e = n.left + n.width / o * (a - i), Math.round(e)) : (e = n.bottom - n.height / o * (a - i), Math.round(e));
          },
          getValueForPixel(t) {
            let e = this,
              n = e.isHorizontal(),
              i = n ? e.width : e.height,
              a = (n ? t - e.left : e.bottom - t) / i; return e.start + (e.end - e.start) * a;
          },
          getPixelForTick(t) { return this.getPixelForValue(this.ticksAsNumbers[t]); },
        }); t.scaleService.registerScaleType('linear', n, e);
    };
  }, { 25: 25, 34: 34, 45: 45 }],
  54: [function (t, e, n) {
    let i = t(45),
      a = t(34); e.exports = function (t) {
      const e = i.noop; t.LinearScaleBase = t.Scale.extend({
        getRightValue(e) { return typeof e === 'string' ? +e : t.Scale.prototype.getRightValue.call(this, e); },
        handleTickRangeOptions() {
          let t = this,
            e = t.options.ticks; if (e.beginAtZero) {
            let n = i.sign(t.min),
              a = i.sign(t.max); n < 0 && a < 0 ? t.max = 0 : n > 0 && a > 0 && (t.min = 0);
          } let o = void 0 !== e.min || void 0 !== e.suggestedMin,
            r = void 0 !== e.max || void 0 !== e.suggestedMax; void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (t.min === null ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (t.max === null ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== r && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
        },
        getTickLimit: e,
        handleDirectionalChanges: e,
        buildTicks() {
          let t = this,
            e = t.options.ticks,
            n = t.getTickLimit(),
            o = {
              maxTicks: n = Math.max(2, n), min: e.min, max: e.max, stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize),
            },
            r = t.ticks = a.generators.linear(o, t); t.handleDirectionalChanges(), t.max = i.max(r), t.min = i.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
        },
        convertTicksToLabels() { const e = this; e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e); },
      });
    };
  }, { 34: 34, 45: 45 }],
  55: [function (t, e, n) {
    let i = t(45),
      a = t(34); e.exports = function (t) {
      let e = { position: 'left', ticks: { callback: a.formatters.logarithmic } },
        n = t.Scale.extend({
          determineDataLimits() {
            function t(t) { return s ? t.xAxisID === e.id : t.yAxisID === e.id; } var e = this,
              n = e.options,
              a = n.ticks,
              o = e.chart,
              r = o.data.datasets,
              l = i.valueOrDefault,
              s = e.isHorizontal(); e.min = null, e.max = null, e.minNotZero = null; let u = n.stacked; if (void 0 === u && i.each(r, (e, n) => { if (!u) { const i = o.getDatasetMeta(n); o.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (u = !0); } }), n.stacked || u) {
              const d = {}; i.each(r, (a, r) => {
                let l = o.getDatasetMeta(r),
                  s = [l.type, void 0 === n.stacked && void 0 === l.stack ? r : '', l.stack].join('.'); o.isDatasetVisible(r) && t(l) && (void 0 === d[s] && (d[s] = []), i.each(a.data, (t, i) => {
                  let a = d[s],
                    o = +e.getRightValue(t); isNaN(o) || l.data[i].hidden || (a[i] = a[i] || 0, n.relativePoints ? a[i] = 100 : a[i] += o);
                }));
              }), i.each(d, (t) => {
                let n = i.min(t),
                  a = i.max(t); e.min = e.min === null ? n : Math.min(e.min, n), e.max = e.max === null ? a : Math.max(e.max, a);
              });
            } else i.each(r, (n, a) => { const r = o.getDatasetMeta(a); o.isDatasetVisible(a) && t(r) && i.each(n.data, (t, n) => { const i = +e.getRightValue(t); isNaN(i) || r.data[n].hidden || (e.min === null ? e.min = i : i < e.min && (e.min = i), e.max === null ? e.max = i : i > e.max && (e.max = i), i !== 0 && (e.minNotZero === null || i < e.minNotZero) && (e.minNotZero = i)); }); }); e.min = l(a.min, e.min), e.max = l(a.max, e.max), e.min === e.max && (e.min !== 0 && e.min !== null ? (e.min = Math.pow(10, Math.floor(i.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(i.log10(e.max)) + 1)) : (e.min = 1, e.max = 10));
          },
          buildTicks() {
            let t = this,
              e = t.options.ticks,
              n = { min: e.min, max: e.max },
              o = t.ticks = a.generators.logarithmic(n, t); t.isHorizontal() || o.reverse(), t.max = i.max(o), t.min = i.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels() { this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this); },
          getLabelForIndex(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]); },
          getPixelForTick(t) { return this.getPixelForValue(this.tickValues[t]); },
          getPixelForValue(t) {
            let e,
              n,
              a,
              o = this,
              r = o.start,
              l = +o.getRightValue(t),
              s = o.options.ticks; return o.isHorizontal() ? (a = i.log10(o.end) - i.log10(r), l === 0 ? n = o.left : (e = o.width, n = o.left + e / a * (i.log10(l) - i.log10(r)))) : (e = o.height, r !== 0 || s.reverse ? o.end === 0 && s.reverse ? (a = i.log10(o.start) - i.log10(o.minNotZero), n = l === o.end ? o.top : l === o.minNotZero ? o.top + 0.02 * e : o.top + 0.02 * e + 0.98 * e / a * (i.log10(l) - i.log10(o.minNotZero))) : l === 0 ? n = s.reverse ? o.top : o.bottom : (a = i.log10(o.end) - i.log10(r), e = o.height, n = o.bottom - e / a * (i.log10(l) - i.log10(r))) : (a = i.log10(o.end) - i.log10(o.minNotZero), n = l === r ? o.bottom : l === o.minNotZero ? o.bottom - 0.02 * e : o.bottom - 0.02 * e - 0.98 * e / a * (i.log10(l) - i.log10(o.minNotZero)))), n;
          },
          getValueForPixel(t) {
            let e,
              n,
              a = this,
              o = i.log10(a.end) - i.log10(a.start); return a.isHorizontal() ? (n = a.width, e = a.start * Math.pow(10, (t - a.left) * o / n)) : (n = a.height, e = Math.pow(10, (a.bottom - t) * o / n) / a.start), e;
          },
        }); t.scaleService.registerScaleType('logarithmic', n, e);
    };
  }, { 34: 34, 45: 45 }],
  56: [function (t, e, n) {
    let i = t(25),
      a = t(45),
      o = t(34); e.exports = function (t) {
      function e(t) { const e = t.options; return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0; } function n(t) {
        let e = t.options.pointLabels,
          n = a.valueOrDefault(e.fontSize, v.defaultFontSize),
          i = a.valueOrDefault(e.fontStyle, v.defaultFontStyle),
          o = a.valueOrDefault(e.fontFamily, v.defaultFontFamily); return {
          size: n, style: i, family: o, font: a.fontString(n, i, o),
        };
      } function r(t, e, n) { return a.isArray(n) ? { w: a.longestText(t, t.font, n), h: n.length * e + 1.5 * (n.length - 1) * e } : { w: t.measureText(n).width, h: e }; } function l(t, e, n, i, a) { return t === i || t === a ? { start: e - n / 2, end: e + n / 2 } : t < i || t > a ? { start: e - n - 5, end: e } : { start: e, end: e + n + 5 }; } function s(t) {
        let i,
          o,
          s,
          u = n(t),
          d = Math.min(t.height / 2, t.width / 2),
          c = {
            r: t.width, l: 0, t: t.height, b: 0,
          },
          h = {}; t.ctx.font = u.font, t._pointLabelSizes = []; const f = e(t); for (i = 0; i < f; i++) {
          s = t.getPointPosition(i, d), o = r(t.ctx, u.size, t.pointLabels[i] || ''), t._pointLabelSizes[i] = o; let g = t.getIndexAngle(i),
            p = a.toDegrees(g) % 360,
            v = l(p, s.x, o.w, 0, 180),
            m = l(p, s.y, o.h, 90, 270); v.start < c.l && (c.l = v.start, h.l = g), v.end > c.r && (c.r = v.end, h.r = g), m.start < c.t && (c.t = m.start, h.t = g), m.end > c.b && (c.b = m.end, h.b = g);
        }t.setReductions(d, c, h);
      } function u(t) { const e = Math.min(t.height / 2, t.width / 2); t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0); } function d(t) { return t === 0 || t === 180 ? 'center' : t < 180 ? 'left' : 'right'; } function c(t, e, n, i) { if (a.isArray(e)) for (let o = n.y, r = 1.5 * i, l = 0; l < e.length; ++l)t.fillText(e[l], n.x, o), o += r; else t.fillText(e, n.x, n.y); } function h(t, e, n) { t === 90 || t === 270 ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h); } function f(t) {
        let i = t.ctx,
          o = a.valueOrDefault,
          r = t.options,
          l = r.angleLines,
          s = r.pointLabels; i.lineWidth = l.lineWidth, i.strokeStyle = l.color; let u = t.getDistanceFromCenterForValue(r.ticks.reverse ? t.min : t.max),
          f = n(t); i.textBaseline = 'top'; for (let g = e(t) - 1; g >= 0; g--) {
          if (l.display) { const p = t.getPointPosition(g, u); i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(p.x, p.y), i.stroke(), i.closePath(); } if (s.display) {
            let m = t.getPointPosition(g, u + 5),
              b = o(s.fontColor, v.defaultFontColor); i.font = f.font, i.fillStyle = b; let x = t.getIndexAngle(g),
              y = a.toDegrees(x); i.textAlign = d(y), h(y, t._pointLabelSizes[g], m), c(i, t.pointLabels[g] || '', m, f.size);
          }
        }
      } function g(t, n, i, o) { const r = t.ctx; if (r.strokeStyle = a.valueAtIndexOrDefault(n.color, o - 1), r.lineWidth = a.valueAtIndexOrDefault(n.lineWidth, o - 1), t.options.gridLines.circular)r.beginPath(), r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), r.closePath(), r.stroke(); else { const l = e(t); if (l === 0) return; r.beginPath(); let s = t.getPointPosition(0, i); r.moveTo(s.x, s.y); for (let u = 1; u < l; u++)s = t.getPointPosition(u, i), r.lineTo(s.x, s.y); r.closePath(), r.stroke(); } } function p(t) { return a.isNumber(t) ? t : 0; } var v = i.global,
        m = {
          display: !0,
          animate: !0,
          position: 'chartArea',
          angleLines: { display: !0, color: 'rgba(0, 0, 0, 0.1)', lineWidth: 1 },
          gridLines: { circular: !1 },
          ticks: {
            showLabelBackdrop: !0, backdropColor: 'rgba(255,255,255,0.75)', backdropPaddingY: 2, backdropPaddingX: 2, callback: o.formatters.linear,
          },
          pointLabels: { display: !0, fontSize: 10, callback(t) { return t; } },
        },
        b = t.LinearScaleBase.extend({
          setDimensions() {
            let t = this,
              e = t.options,
              n = e.ticks; t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2); let i = a.min([t.height, t.width]),
              o = a.valueOrDefault(n.fontSize, v.defaultFontSize); t.drawingArea = e.display ? i / 2 - (o / 2 + n.backdropPaddingY) : i / 2;
          },
          determineDataLimits() {
            let t = this,
              e = t.chart,
              n = Number.POSITIVE_INFINITY,
              i = Number.NEGATIVE_INFINITY; a.each(e.data.datasets, (o, r) => { if (e.isDatasetVisible(r)) { const l = e.getDatasetMeta(r); a.each(o.data, (e, a) => { const o = +t.getRightValue(e); isNaN(o) || l.data[a].hidden || (n = Math.min(o, n), i = Math.max(o, i)); }); } }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
          },
          getTickLimit() {
            let t = this.options.ticks,
              e = a.valueOrDefault(t.fontSize, v.defaultFontSize); return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)));
          },
          convertTicksToLabels() { const e = this; t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e); },
          getLabelForIndex(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]); },
          fit() { this.options.pointLabels.display ? s(this) : u(this); },
          setReductions(t, e, n) {
            let i = this,
              a = e.l / Math.sin(n.l),
              o = Math.max(e.r - i.width, 0) / Math.sin(n.r),
              r = -e.t / Math.cos(n.t),
              l = -Math.max(e.b - i.height, 0) / Math.cos(n.b); a = p(a), o = p(o), r = p(r), l = p(l), i.drawingArea = Math.min(Math.round(t - (a + o) / 2), Math.round(t - (r + l) / 2)), i.setCenterPoint(a, o, r, l);
          },
          setCenterPoint(t, e, n, i) {
            let a = this,
              o = a.width - e - a.drawingArea,
              r = t + a.drawingArea,
              l = n + a.drawingArea,
              s = a.height - i - a.drawingArea; a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((l + s) / 2 + a.top);
          },
          getIndexAngle(t) { return t * (2 * Math.PI / e(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360; },
          getDistanceFromCenterForValue(t) { const e = this; if (t === null) return 0; const n = e.drawingArea / (e.max - e.min); return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n; },
          getPointPosition(t, e) {
            let n = this,
              i = n.getIndexAngle(t) - Math.PI / 2; return { x: Math.round(Math.cos(i) * e) + n.xCenter, y: Math.round(Math.sin(i) * e) + n.yCenter };
          },
          getPointPositionForValue(t, e) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(e)); },
          getBasePosition() {
            let t = this,
              e = t.min,
              n = t.max; return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0);
          },
          draw() {
            let t = this,
              e = t.options,
              n = e.gridLines,
              i = e.ticks,
              o = a.valueOrDefault; if (e.display) {
              let r = t.ctx,
                l = this.getIndexAngle(0),
                s = o(i.fontSize, v.defaultFontSize),
                u = o(i.fontStyle, v.defaultFontStyle),
                d = o(i.fontFamily, v.defaultFontFamily),
                c = a.fontString(s, u, d); a.each(t.ticks, (e, a) => { if (a > 0 || i.reverse) { const u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[a]); if (n.display && a !== 0 && g(t, n, u, a), i.display) { const d = o(i.fontColor, v.defaultFontColor); if (r.font = c, r.save(), r.translate(t.xCenter, t.yCenter), r.rotate(l), i.showLabelBackdrop) { const h = r.measureText(e).width; r.fillStyle = i.backdropColor, r.fillRect(-h / 2 - i.backdropPaddingX, -u - s / 2 - i.backdropPaddingY, h + 2 * i.backdropPaddingX, s + 2 * i.backdropPaddingY); }r.textAlign = 'center', r.textBaseline = 'middle', r.fillStyle = d, r.fillText(e, 0, -u), r.restore(); } } }), (e.angleLines.display || e.pointLabels.display) && f(t);
            }
          },
        }); t.scaleService.registerScaleType('radialLinear', b, m);
    };
  }, { 25: 25, 34: 34, 45: 45 }],
  57: [function (t, e, n) {
    function i(t, e) { return t - e; } function a(t) {
      let e,
        n,
        i,
        a = {},
        o = []; for (e = 0, n = t.length; e < n; ++e)a[i = t[e]] || (a[i] = !0, o.push(i)); return o;
    } function o(t, e, n, i) {
      if (i === 'linear' || !t.length) return [{ time: e, pos: 0 }, { time: n, pos: 1 }]; let a,
        o,
        r,
        l,
        s,
        u = [],
        d = [e]; for (a = 0, o = t.length; a < o; ++a)(l = t[a]) > e && l < n && d.push(l); for (d.push(n), a = 0, o = d.length; a < o; ++a)s = d[a + 1], r = d[a - 1], l = d[a], void 0 !== r && void 0 !== s && Math.round((s + r) / 2) === l || u.push({ time: l, pos: a / (o - 1) }); return u;
    } function r(t, e, n) { for (var i, a, o, r = 0, l = t.length - 1; r >= 0 && r <= l;) { if (i = r + l >> 1, a = t[i - 1] || null, o = t[i], !a) return { lo: null, hi: o }; if (o[e] < n)r = i + 1; else { if (!(a[e] > n)) return { lo: a, hi: o }; l = i - 1; } } return { lo: o, hi: null }; } function l(t, e, n, i) {
      let a = r(t, e, n),
        o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
        l = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
        s = l[e] - o[e],
        u = s ? (n - o[e]) / s : 0,
        d = (l[i] - o[i]) * u; return o[i] + d;
    } function s(t, e) {
      let n = e.parser,
        i = e.parser || e.format; return typeof n === 'function' ? n(t) : typeof t === 'string' && typeof i === 'string' ? m(t, i) : (t instanceof m || (t = m(t)), t.isValid() ? t : typeof i === 'function' ? i(t) : t);
    } function u(t, e) {
      if (x.isNullOrUndef(t)) return null; let n = e.options.time,
        i = s(e.getRightValue(t), n); return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null;
    } function d(t, e, n, i) {
      let a,
        o,
        r,
        l = e - t,
        s = w[n],
        u = s.size,
        d = s.steps; if (!d) return Math.ceil(l / ((i || 1) * u)); for (a = 0, o = d.length; a < o && (r = d[a], !(Math.ceil(l / (u * r)) <= i)); ++a);return r;
    } function c(t, e, n, i) {
      let a,
        o,
        r,
        l = M.length; for (a = M.indexOf(t); a < l - 1; ++a) if (o = w[M[a]], r = o.steps ? o.steps[o.steps.length - 1] : k, o.common && Math.ceil((n - e) / (r * o.size)) <= i) return M[a]; return M[l - 1];
    } function h(t, e, n, i) {
      let a,
        o,
        r = m.duration(m(i).diff(m(n))); for (a = M.length - 1; a >= M.indexOf(e); a--) if (o = M[a], w[o].common && r.as(o) >= t.length) return o; return M[e ? M.indexOf(e) : 0];
    } function f(t) { for (let e = M.indexOf(t) + 1, n = M.length; e < n; ++e) if (w[M[e]].common) return M[e]; } function g(t, e, n, i) {
      let a,
        o = i.time,
        r = o.unit || c(o.minUnit, t, e, n),
        l = f(r),
        s = x.valueOrDefault(o.stepSize, o.unitStepSize),
        u = r === 'week' && o.isoWeekday,
        h = i.ticks.major.enabled,
        g = w[r],
        p = m(t),
        v = m(e),
        b = []; for (s || (s = d(t, e, r, n)), u && (p = p.isoWeekday(u), v = v.isoWeekday(u)), p = p.startOf(u ? 'day' : r), (v = v.startOf(u ? 'day' : r)) < e && v.add(1, r), a = m(p), h && l && !u && !o.round && (a.startOf(l), a.add(~~((p - a) / (g.size * s)) * s, r)); a < v; a.add(s, r))b.push(+a); return b.push(+a), b;
    } function p(t, e, n, i, a) {
      let o,
        r,
        s = 0,
        u = 0; return a.offset && e.length && (a.time.min || (o = e.length > 1 ? e[1] : i, r = e[0], s = (l(t, 'time', o, 'pos') - l(t, 'time', r, 'pos')) / 2), a.time.max || (o = e[e.length - 1], r = e.length > 1 ? e[e.length - 2] : n, u = (l(t, 'time', o, 'pos') - l(t, 'time', r, 'pos')) / 2)), { left: s, right: u };
    } function v(t, e) {
      let n,
        i,
        a,
        o,
        r = []; for (n = 0, i = t.length; n < i; ++n)a = t[n], o = !!e && a === +m(a).startOf(e), r.push({ value: a, major: o }); return r;
    } var m = t(1); m = typeof m === 'function' ? m : window.moment; var b = t(25),
      x = t(45),
      y = Number.MIN_SAFE_INTEGER || -9007199254740991,
      k = Number.MAX_SAFE_INTEGER || 9007199254740991,
      w = {
        millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 30] }, minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 30] }, hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { common: !0, size: 864e5, steps: [1, 2, 5] }, week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] }, month: { common: !0, size: 2628e6, steps: [1, 2, 3] }, quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] }, year: { common: !0, size: 3154e7 },
      },
      M = Object.keys(w); e.exports = function (t) {
      const e = t.Scale.extend({
        initialize() { if (!m) throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com'); this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this); },
        update() {
          let e = this,
            n = e.options; return n.time && n.time.format && console.warn('options.time.format is deprecated and replaced by options.time.parser.'), t.Scale.prototype.update.apply(e, arguments);
        },
        getRightValue(e) { return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e); },
        determineDataLimits() {
          let t,
            e,
            n,
            o,
            r,
            l,
            s = this,
            d = s.chart,
            c = s.options.time,
            h = k,
            f = y,
            g = [],
            p = [],
            v = []; for (t = 0, n = d.data.labels.length; t < n; ++t)v.push(u(d.data.labels[t], s)); for (t = 0, n = (d.data.datasets || []).length; t < n; ++t) if (d.isDatasetVisible(t)) if (r = d.data.datasets[t].data, x.isObject(r[0])) for (p[t] = [], e = 0, o = r.length; e < o; ++e)l = u(r[e], s), g.push(l), p[t][e] = l; else g.push(...v), p[t] = v.slice(0); else p[t] = []; v.length && (v = a(v).sort(i), h = Math.min(h, v[0]), f = Math.max(f, v[v.length - 1])), g.length && (g = a(g).sort(i), h = Math.min(h, g[0]), f = Math.max(f, g[g.length - 1])), h = u(c.min, s) || h, f = u(c.max, s) || f, h = h === k ? +m().startOf('day') : h, f = f === y ? +m().endOf('day') + 1 : f, s.min = Math.min(h, f), s.max = Math.max(h + 1, f), s._horizontal = s.isHorizontal(), s._table = [], s._timestamps = { data: g, datasets: p, labels: v };
        },
        buildTicks() {
          let t,
            e,
            n,
            i = this,
            a = i.min,
            r = i.max,
            l = i.options,
            s = l.time,
            d = [],
            c = []; switch (l.ticks.source) { case 'data': d = i._timestamps.data; break; case 'labels': d = i._timestamps.labels; break; case 'auto': default: d = g(a, r, i.getLabelCapacity(a), l); } for (l.bounds === 'ticks' && d.length && (a = d[0], r = d[d.length - 1]), a = u(s.min, i) || a, r = u(s.max, i) || r, t = 0, e = d.length; t < e; ++t)(n = d[t]) >= a && n <= r && c.push(n); return i.min = a, i.max = r, i._unit = s.unit || h(c, s.minUnit, i.min, i.max), i._majorUnit = f(i._unit), i._table = o(i._timestamps.data, a, r, l.distribution), i._offsets = p(i._table, c, a, r, l), v(c, i._majorUnit);
        },
        getLabelForIndex(t, e) {
          let n = this,
            i = n.chart.data,
            a = n.options.time,
            o = i.labels && t < i.labels.length ? i.labels[t] : '',
            r = i.datasets[e].data[t]; return x.isObject(r) && (o = n.getRightValue(r)), a.tooltipFormat && (o = s(o, a).format(a.tooltipFormat)), o;
        },
        tickFormatFunction(t, e, n, i) {
          let a = this,
            o = a.options,
            r = t.valueOf(),
            l = o.time.displayFormats,
            s = l[a._unit],
            u = a._majorUnit,
            d = l[u],
            c = t.clone().startOf(u).valueOf(),
            h = o.ticks.major,
            f = h.enabled && u && d && r === c,
            g = t.format(i || (f ? d : s)),
            p = f ? h : o.ticks.minor,
            v = x.valueOrDefault(p.callback, p.userCallback); return v ? v(g, e, n) : g;
        },
        convertTicksToLabels(t) {
          let e,
            n,
            i = []; for (e = 0, n = t.length; e < n; ++e)i.push(this.tickFormatFunction(m(t[e].value), e, t)); return i;
        },
        getPixelForOffset(t) {
          let e = this,
            n = e._horizontal ? e.width : e.height,
            i = e._horizontal ? e.left : e.top,
            a = l(e._table, 'time', t, 'pos'); return i + n * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right);
        },
        getPixelForValue(t, e, n) {
          let i = this,
            a = null; if (void 0 !== e && void 0 !== n && (a = i._timestamps.datasets[n][e]), a === null && (a = u(t, i)), a !== null) return i.getPixelForOffset(a);
        },
        getPixelForTick(t) { const e = this.getTicks(); return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null; },
        getValueForPixel(t) {
          let e = this,
            n = e._horizontal ? e.width : e.height,
            i = e._horizontal ? e.left : e.top,
            a = (n ? (t - i) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
            o = l(e._table, 'pos', a, 'time'); return m(o);
        },
        getLabelWidth(t) {
          let e = this,
            n = e.options.ticks,
            i = e.ctx.measureText(t).width,
            a = x.toRadians(n.maxRotation),
            o = Math.cos(a),
            r = Math.sin(a); return i * o + x.valueOrDefault(n.fontSize, b.global.defaultFontSize) * r;
        },
        getLabelCapacity(t) {
          let e = this,
            n = e.options.time.displayFormats.millisecond,
            i = e.tickFormatFunction(m(t), 0, [], n),
            a = e.getLabelWidth(i),
            o = e.isHorizontal() ? e.width : e.height; return Math.floor(o / a);
        },
      }); t.scaleService.registerScaleType('time', e, {
        position: 'bottom',
        distribution: 'linear',
        bounds: 'data',
        time: {
          parser: !1,
          format: !1,
          unit: !1,
          round: !1,
          displayFormat: !1,
          isoWeekday: !1,
          minUnit: 'millisecond',
          displayFormats: {
            millisecond: 'h:mm:ss.SSS a', second: 'h:mm:ss a', minute: 'h:mm a', hour: 'hA', day: 'MMM D', week: 'll', month: 'MMM YYYY', quarter: '[Q]Q - YYYY', year: 'YYYY',
          },
        },
        ticks: { autoSkip: !1, source: 'auto', major: { enabled: !1 } },
      });
    };
  }, { 1: 1, 25: 25, 45: 45 }],
}, {}, [7]))(7)));
