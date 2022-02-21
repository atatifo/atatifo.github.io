(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6010: function (e, t, r) {
      'use strict';
      function n(e) {
        var t,
          r,
          o = '';
        if ('string' === typeof e || 'number' === typeof e) o += e;
        else if ('object' === typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (r = n(e[t])) && (o && (o += ' '), (o += r));
          else for (t in e) e[t] && (o && (o += ' '), (o += t));
        return o;
      }
      function o() {
        for (var e, t, r = 0, o = ''; r < arguments.length; )
          (e = arguments[r++]) && (t = n(e)) && (o && (o += ' '), (o += t));
        return o;
      }
      r.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    248: function (e) {
      e.exports = function (e) {
        if (!e)
          throw Error(
            'hashlru must have a max value, of type number, greater than 0'
          );
        var t = 0,
          r = Object.create(null),
          n = Object.create(null);
        function o(o, i) {
          (r[o] = i), ++t >= e && ((t = 0), (n = r), (r = Object.create(null)));
        }
        return {
          has: function (e) {
            return void 0 !== r[e] || void 0 !== n[e];
          },
          remove: function (e) {
            void 0 !== r[e] && (r[e] = void 0),
              void 0 !== n[e] && (n[e] = void 0);
          },
          get: function (e) {
            var t = r[e];
            return void 0 !== t
              ? t
              : void 0 !== (t = n[e])
              ? (o(e, t), t)
              : void 0;
          },
          set: function (e, t) {
            void 0 !== r[e] ? (r[e] = t) : o(e, t);
          },
          clear: function () {
            (r = Object.create(null)), (n = Object.create(null));
          },
        };
      };
    },
    6363: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(850);
        },
      ]);
    },
    8045: function (e, t, r) {
      'use strict';
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                l = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (l = !0), (o = c);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (l) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          l(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return n(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function l(e, t) {
        if (e) {
          if ('string' === typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(r)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          );
        }
      }
      t.default = function (e) {
        var t = e.src,
          r = e.sizes,
          n = e.unoptimized,
          a = void 0 !== n && n,
          l = e.priority,
          c = void 0 !== l && l,
          d = e.loading,
          p = e.lazyRoot,
          g = void 0 === p ? null : p,
          y = e.lazyBoundary,
          w = void 0 === y ? '200px' : y,
          x = e.className,
          j = e.quality,
          k = e.width,
          O = e.height,
          E = e.objectFit,
          I = e.objectPosition,
          P = e.onLoadingComplete,
          N = e.loader,
          C = void 0 === N ? z : N,
          _ = e.placeholder,
          R = void 0 === _ ? 'empty' : _,
          L = e.blurDataURL,
          M = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]));
            }
            return o;
          })(e, [
            'src',
            'sizes',
            'unoptimized',
            'priority',
            'loading',
            'lazyRoot',
            'lazyBoundary',
            'className',
            'quality',
            'width',
            'height',
            'objectFit',
            'objectPosition',
            'onLoadingComplete',
            'loader',
            'placeholder',
            'blurDataURL',
          ]),
          W = s.useRef(null),
          T = M,
          D = r ? 'responsive' : 'intrinsic';
        'layout' in T && (T.layout && (D = T.layout), delete T.layout);
        var G = '';
        if (
          (function (e) {
            return (
              'object' === typeof e &&
              (v(e) ||
                (function (e) {
                  return void 0 !== e.src;
                })(e))
            );
          })(t)
        ) {
          var q = v(t) ? t.default : t;
          if (!q.src)
            throw new Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received '.concat(
                JSON.stringify(q)
              )
            );
          if (
            ((L = L || q.blurDataURL),
            (G = q.src),
            (!D || 'fill' !== D) &&
              ((O = O || q.height), (k = k || q.width), !q.height || !q.width))
          )
            throw new Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received '.concat(
                JSON.stringify(q)
              )
            );
        }
        t = 'string' === typeof t ? t : G;
        var U = S(k),
          H = S(O),
          B = S(j),
          Z = !c && ('lazy' === d || 'undefined' === typeof d);
        (t.startsWith('data:') || t.startsWith('blob:')) &&
          ((a = !0), (Z = !1));
        m.has(t) && (Z = !1);
        0;
        var $,
          F = i(
            f.useIntersection({ rootRef: g, rootMargin: w, disabled: !Z }),
            2
          ),
          K = F[0],
          V = F[1],
          J = !Z || V,
          Q = {
            boxSizing: 'border-box',
            display: 'block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          X = {
            boxSizing: 'border-box',
            display: 'block',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          Y = !1,
          ee = {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: 'border-box',
            padding: 0,
            border: 'none',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            objectFit: E,
            objectPosition: I,
          },
          te =
            'blur' === R
              ? {
                  filter: 'blur(20px)',
                  backgroundSize: E || 'cover',
                  backgroundImage: 'url("'.concat(L, '")'),
                  backgroundPosition: I || '0% 0%',
                }
              : {};
        if ('fill' === D)
          (Q.display = 'block'),
            (Q.position = 'absolute'),
            (Q.top = 0),
            (Q.left = 0),
            (Q.bottom = 0),
            (Q.right = 0);
        else if ('undefined' !== typeof U && 'undefined' !== typeof H) {
          var re = H / U,
            ne = isNaN(re) ? '100%' : ''.concat(100 * re, '%');
          'responsive' === D
            ? ((Q.display = 'block'),
              (Q.position = 'relative'),
              (Y = !0),
              (X.paddingTop = ne))
            : 'intrinsic' === D
            ? ((Q.display = 'inline-block'),
              (Q.position = 'relative'),
              (Q.maxWidth = '100%'),
              (Y = !0),
              (X.maxWidth = '100%'),
              ($ =
                'data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27'
                  .concat(U, '%27%20height=%27')
                  .concat(H, '%27/%3e')))
            : 'fixed' === D &&
              ((Q.display = 'inline-block'),
              (Q.position = 'relative'),
              (Q.width = U),
              (Q.height = H));
        } else 0;
        var oe = { src: h, srcSet: void 0, sizes: void 0 };
        J &&
          (oe = A({
            src: t,
            unoptimized: a,
            layout: D,
            width: U,
            quality: B,
            sizes: r,
            loader: C,
          }));
        var ie = t;
        0;
        var ae;
        0;
        var le =
            (o((ae = {}), 'imagesrcset', oe.srcSet),
            o(ae, 'imagesizes', oe.sizes),
            ae),
          ce = s.default.useLayoutEffect,
          se = s.useRef(P);
        return (
          s.useEffect(
            function () {
              se.current = P;
            },
            [P]
          ),
          ce(
            function () {
              K(W.current);
            },
            [K]
          ),
          s.useEffect(
            function () {
              !(function (e, t, r, n, o) {
                var i = function () {
                  var r = e.current;
                  r &&
                    r.src !== h &&
                    ('decode' in r ? r.decode() : Promise.resolve())
                      .catch(function () {})
                      .then(function () {
                        if (
                          e.current &&
                          (m.add(t),
                          'blur' === n &&
                            ((r.style.filter = ''),
                            (r.style.backgroundSize = ''),
                            (r.style.backgroundImage = ''),
                            (r.style.backgroundPosition = '')),
                          o.current)
                        ) {
                          var i = r.naturalWidth,
                            a = r.naturalHeight;
                          o.current({ naturalWidth: i, naturalHeight: a });
                        }
                      });
                };
                e.current &&
                  (e.current.complete ? i() : (e.current.onload = i));
              })(W, ie, 0, R, se);
            },
            [ie, D, R, J]
          ),
          s.default.createElement(
            'span',
            { style: Q },
            Y
              ? s.default.createElement(
                  'span',
                  { style: X },
                  $
                    ? s.default.createElement('img', {
                        style: {
                          display: 'block',
                          maxWidth: '100%',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        },
                        alt: '',
                        'aria-hidden': !0,
                        src: $,
                      })
                    : null
                )
              : null,
            s.default.createElement(
              'img',
              Object.assign({}, T, oe, {
                decoding: 'async',
                'data-nimg': D,
                className: x,
                ref: W,
                style: b({}, ee, te),
              })
            ),
            Z &&
              s.default.createElement(
                'noscript',
                null,
                s.default.createElement(
                  'img',
                  Object.assign(
                    {},
                    T,
                    A({
                      src: t,
                      unoptimized: a,
                      layout: D,
                      width: U,
                      quality: B,
                      sizes: r,
                      loader: C,
                    }),
                    {
                      decoding: 'async',
                      'data-nimg': D,
                      style: ee,
                      className: x,
                      loading: d || 'lazy',
                    }
                  )
                )
              ),
            c
              ? s.default.createElement(
                  u.default,
                  null,
                  s.default.createElement(
                    'link',
                    Object.assign(
                      {
                        key: '__nimg-' + oe.src + oe.srcSet + oe.sizes,
                        rel: 'preload',
                        as: 'image',
                        href: oe.srcSet ? void 0 : oe.src,
                      },
                      le
                    )
                  )
                )
              : null
          )
        );
      };
      var c,
        s = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(7294)),
        u = (c = r(5443)) && c.__esModule ? c : { default: c },
        d = r(5809),
        f = r(7190);
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function b(e) {
        for (
          var t = arguments,
            r = function (r) {
              var n = null != t[r] ? t[r] : {},
                o = Object.keys(n);
              'function' === typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                o.forEach(function (t) {
                  p(e, t, n[t]);
                });
            },
            n = 1;
          n < arguments.length;
          n++
        )
          r(n);
        return e;
      }
      var m = new Set(),
        h =
          (new Map(),
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
      var g = new Map([
        [
          'default',
          function (e) {
            var t = e.root,
              r = e.src,
              n = e.width,
              o = e.quality;
            0;
            return ''
              .concat(t, '?url=')
              .concat(encodeURIComponent(r), '&w=')
              .concat(n, '&q=')
              .concat(o || 75);
          },
        ],
        [
          'imgix',
          function (e) {
            var t = e.root,
              r = e.src,
              n = e.width,
              o = e.quality,
              i = new URL(''.concat(t).concat(E(r))),
              a = i.searchParams;
            a.set('auto', a.get('auto') || 'format'),
              a.set('fit', a.get('fit') || 'max'),
              a.set('w', a.get('w') || n.toString()),
              o && a.set('q', o.toString());
            return i.href;
          },
        ],
        [
          'cloudinary',
          function (e) {
            var t = e.root,
              r = e.src,
              n = e.width,
              o = e.quality,
              i =
                ['f_auto', 'c_limit', 'w_' + n, 'q_' + (o || 'auto')].join(
                  ','
                ) + '/';
            return ''.concat(t).concat(i).concat(E(r));
          },
        ],
        [
          'akamai',
          function (e) {
            var t = e.root,
              r = e.src,
              n = e.width;
            return ''.concat(t).concat(E(r), '?imwidth=').concat(n);
          },
        ],
        [
          'custom',
          function (e) {
            var t = e.src;
            throw new Error(
              'Image with src "'.concat(t, '" is missing "loader" prop.') +
                '\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
          },
        ],
      ]);
      function v(e) {
        return void 0 !== e.default;
      }
      var y =
          {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: 'https://noop/',
            loader: 'imgix',
          } || d.imageConfigDefault,
        w = y.deviceSizes,
        x = y.imageSizes,
        j = y.loader,
        k = y.path,
        O = (y.domains, a(w).concat(a(x)));
      function A(e) {
        var t = e.src,
          r = e.unoptimized,
          n = e.layout,
          o = e.width,
          i = e.quality,
          l = e.sizes,
          c = e.loader;
        if (r) return { src: t, srcSet: void 0, sizes: void 0 };
        var s = (function (e, t, r) {
            if (r && ('fill' === t || 'responsive' === t)) {
              for (var n, o = /(^|\s)(1?\d?\d)vw/g, i = []; (n = o.exec(r)); n)
                i.push(parseInt(n[2]));
              if (i.length) {
                var l,
                  c = 0.01 * (l = Math).min.apply(l, a(i));
                return {
                  widths: O.filter(function (e) {
                    return e >= w[0] * c;
                  }),
                  kind: 'w',
                };
              }
              return { widths: O, kind: 'w' };
            }
            return 'number' !== typeof e || 'fill' === t || 'responsive' === t
              ? { widths: w, kind: 'w' }
              : {
                  widths: a(
                    new Set(
                      [e, 2 * e].map(function (e) {
                        return (
                          O.find(function (t) {
                            return t >= e;
                          }) || O[O.length - 1]
                        );
                      })
                    )
                  ),
                  kind: 'x',
                };
          })(o, n, l),
          u = s.widths,
          d = s.kind,
          f = u.length - 1;
        return {
          sizes: l || 'w' !== d ? l : '100vw',
          srcSet: u
            .map(function (e, r) {
              return ''
                .concat(c({ src: t, quality: i, width: e }), ' ')
                .concat('w' === d ? e : r + 1)
                .concat(d);
            })
            .join(', '),
          src: c({ src: t, quality: i, width: u[f] }),
        };
      }
      function S(e) {
        return 'number' === typeof e
          ? e
          : 'string' === typeof e
          ? parseInt(e, 10)
          : void 0;
      }
      function z(e) {
        var t = g.get(j);
        if (t) return t(b({ root: k }, e));
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(d.VALID_LOADERS.join(', '), '. Received: ')
            .concat(j)
        );
      }
      function E(e) {
        return '/' === e[0] ? e.slice(1) : e;
      }
      w.sort(function (e, t) {
        return e - t;
      }),
        O.sort(function (e, t) {
          return e - t;
        });
    },
    8418: function (e, t, r) {
      'use strict';
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                l = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (l = !0), (o = c);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (l) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(r);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return n(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      t.default = void 0;
      var i,
        a = (i = r(7294)) && i.__esModule ? i : { default: i },
        l = r(6273),
        c = r(387),
        s = r(7190);
      var u = {};
      function d(e, t, r, n) {
        if (e && l.isLocalURL(t)) {
          e.prefetch(t, r, n).catch(function (e) {
            0;
          });
          var o =
            n && 'undefined' !== typeof n.locale ? n.locale : e && e.locale;
          u[t + '%' + r + (o ? '%' + o : '')] = !0;
        }
      }
      var f = function (e) {
        var t,
          r = !1 !== e.prefetch,
          n = c.useRouter(),
          i = a.default.useMemo(
            function () {
              var t = o(l.resolveHref(n, e.href, !0), 2),
                r = t[0],
                i = t[1];
              return { href: r, as: e.as ? l.resolveHref(n, e.as) : i || r };
            },
            [n, e.href, e.as]
          ),
          f = i.href,
          p = i.as,
          b = e.children,
          m = e.replace,
          h = e.shallow,
          g = e.scroll,
          v = e.locale;
        'string' === typeof b && (b = a.default.createElement('a', null, b));
        var y =
            (t = a.default.Children.only(b)) && 'object' === typeof t && t.ref,
          w = o(s.useIntersection({ rootMargin: '200px' }), 2),
          x = w[0],
          j = w[1],
          k = a.default.useCallback(
            function (e) {
              x(e),
                y &&
                  ('function' === typeof y
                    ? y(e)
                    : 'object' === typeof y && (y.current = e));
            },
            [y, x]
          );
        a.default.useEffect(
          function () {
            var e = j && r && l.isLocalURL(f),
              t = 'undefined' !== typeof v ? v : n && n.locale,
              o = u[f + '%' + p + (t ? '%' + t : '')];
            e && !o && d(n, f, p, { locale: t });
          },
          [p, f, j, v, r, n]
        );
        var O = {
          ref: k,
          onClick: function (e) {
            t.props &&
              'function' === typeof t.props.onClick &&
              t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, n, o, i, a, c) {
                  ('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      l.isLocalURL(r))) &&
                    (e.preventDefault(),
                    null == a && n.indexOf('#') >= 0 && (a = !1),
                    t[o ? 'replace' : 'push'](r, n, {
                      shallow: i,
                      locale: c,
                      scroll: a,
                    }));
                })(e, n, f, p, m, h, g, v);
          },
          onMouseEnter: function (e) {
            t.props &&
              'function' === typeof t.props.onMouseEnter &&
              t.props.onMouseEnter(e),
              l.isLocalURL(f) && d(n, f, p, { priority: !0 });
          },
        };
        if (e.passHref || ('a' === t.type && !('href' in t.props))) {
          var A = 'undefined' !== typeof v ? v : n && n.locale,
            S =
              n &&
              n.isLocaleDomain &&
              l.getDomainLocale(p, A, n && n.locales, n && n.domainLocales);
          O.href = S || l.addBasePath(l.addLocale(p, A, n && n.defaultLocale));
        }
        return a.default.cloneElement(t, O);
      };
      t.default = f;
    },
    7190: function (e, t, r) {
      'use strict';
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                l = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (l = !0), (o = c);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (l) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(r);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return n(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            r = e.rootMargin,
            n = e.disabled || !l,
            s = i.useRef(),
            u = o(i.useState(!1), 2),
            d = u[0],
            f = u[1],
            p = o(i.useState(t ? t.current : null), 2),
            b = p[0],
            m = p[1],
            h = i.useCallback(
              function (e) {
                s.current && (s.current(), (s.current = void 0)),
                  n ||
                    d ||
                    (e &&
                      e.tagName &&
                      (s.current = (function (e, t, r) {
                        var n = (function (e) {
                            var t = e.rootMargin || '',
                              r = c.get(t);
                            if (r) return r;
                            var n = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = n.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && r && t(r);
                                });
                              }, e);
                            return (
                              c.set(
                                t,
                                (r = { id: t, observer: o, elements: n })
                              ),
                              r
                            );
                          })(r),
                          o = n.id,
                          i = n.observer,
                          a = n.elements;
                        return (
                          a.set(e, t),
                          i.observe(e),
                          function () {
                            a.delete(e),
                              i.unobserve(e),
                              0 === a.size && (i.disconnect(), c.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && f(e);
                        },
                        { root: b, rootMargin: r }
                      )));
              },
              [n, b, r, d]
            );
          return (
            i.useEffect(
              function () {
                if (!l && !d) {
                  var e = a.requestIdleCallback(function () {
                    return f(!0);
                  });
                  return function () {
                    return a.cancelIdleCallback(e);
                  };
                }
              },
              [d]
            ),
            i.useEffect(
              function () {
                t && m(t.current);
              },
              [t]
            ),
            [h, d]
          );
        });
      var i = r(7294),
        a = r(9311),
        l = 'undefined' !== typeof IntersectionObserver;
      var c = new Map();
    },
    7466: function (e, t, r) {
      'use strict';
      var n = r(5893),
        o = r(1664),
        i = r(7294),
        a = r(7385);
      function l(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              l(e, t, r[t]);
            });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = i.forwardRef(function (e, t) {
        var r = e.children,
          i = e.href,
          l = e.openNewTab,
          u = e.className,
          d = e.nextLinkProps,
          f = s(e, [
            'children',
            'href',
            'openNewTab',
            'className',
            'nextLinkProps',
          ]);
        return (
          void 0 !== l ? l : i && !i.startsWith('/') && !i.startsWith('#')
        )
          ? (0, n.jsx)(
              'a',
              c(
                {
                  ref: t,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: i,
                },
                f,
                { className: (0, a.Z)('cursor-newtab', u), children: r }
              )
            )
          : (0, n.jsx)(
              o.default,
              c({ href: i }, d, {
                children: (0, n.jsx)(
                  'a',
                  c({ ref: t }, f, { className: u, children: r })
                ),
              })
            );
      });
      t.Z = u;
    },
    6255: function (e, t, r) {
      'use strict';
      r.d(t, {
        Rj: function () {
          return l;
        },
        jm: function () {
          return c;
        },
      });
      var n = r(5893),
        o = r(7294);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                l = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (l = !0), (o = c);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (l) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(r);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return i(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var l = o.createContext({ width: 0, height: 0 });
      function c(e) {
        var t = e.children,
          r = a(o.useState(0), 2),
          i = r[0],
          c = r[1],
          s = a(o.useState(0), 2),
          u = s[0],
          d = s[1],
          f = a(o.useState(!1), 2),
          p = f[0],
          b = f[1],
          m = o.useRef(!1),
          h = function () {
            m.current &&
              (c(window.innerWidth),
              d(window.innerHeight),
              b(window.innerWidth >= 768));
          };
        return (
          o.useEffect(function () {
            return (
              window.addEventListener('resize', h),
              c(window.innerWidth),
              d(window.innerHeight),
              b(window.innerWidth >= 768),
              (m.current = !0),
              function () {
                window.removeEventListener('resize', h), (m.current = !1);
              }
            );
          }, []),
          (0, n.jsx)(l.Provider, {
            value: { width: i, height: u, isTabletOrBigger: p },
            children: t,
          })
        );
      }
    },
    7385: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return D;
        },
      });
      var n = r(6010);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var i = r(248);
      function a(e) {
        var t = (function (e) {
          var t = e.theme,
            r = e.prefix,
            n = { nextPart: {}, validators: [] };
          return (
            d(Object.entries(e.classGroups), r).forEach(function (e) {
              var r = e[0];
              s(e[1], n, r, t);
            }),
            n
          );
        })(e);
        return {
          getClassGroupId: function (e) {
            var r = e.split('-');
            return (
              '' === r[0] && 1 !== r.length && r.shift(),
              l(r, t) ||
                (function (e) {
                  if (c.test(e)) {
                    var t = c.exec(e)[1],
                      r = null == t ? void 0 : t.substring(0, t.indexOf(':'));
                    if (r) return 'arbitrary..' + r;
                  }
                })(e)
            );
          },
          getConflictingClassGroupIds: function (t) {
            return e.conflictingClassGroups[t] || [];
          },
        };
      }
      function l(e, t) {
        var r;
        if (0 === e.length) return t.classGroupId;
        var n = e[0],
          o = t.nextPart[n],
          i = o ? l(e.slice(1), o) : void 0;
        if (i) return i;
        if (0 !== t.validators.length) {
          var a = e.join('-');
          return null ==
            (r = t.validators.find(function (e) {
              return (0, e.validator)(a);
            }))
            ? void 0
            : r.classGroupId;
        }
      }
      var c = /^\[(.+)\]$/;
      function s(e, t, r, n) {
        e.forEach(function (e) {
          if ('string' !== typeof e) {
            if ('function' === typeof e)
              return e.isThemeGetter
                ? void s(e(n), t, r, n)
                : void t.validators.push({ validator: e, classGroupId: r });
            Object.entries(e).forEach(function (e) {
              var o = e[0];
              s(e[1], u(t, o), r, n);
            });
          } else {
            ('' === e ? t : u(t, e)).classGroupId = r;
          }
        });
      }
      function u(e, t) {
        var r = e;
        return (
          t.split('-').forEach(function (e) {
            void 0 === r.nextPart[e] &&
              (r.nextPart[e] = { nextPart: {}, validators: [] }),
              (r = r.nextPart[e]);
          }),
          r
        );
      }
      function d(e, t) {
        return t
          ? e.map(function (e) {
              return [
                e[0],
                e[1].map(function (e) {
                  return 'string' === typeof e
                    ? t + e
                    : 'object' === typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(function (e) {
                          var r = e[0],
                            n = e[1];
                          return [t + r, n];
                        })
                      )
                    : e;
                }),
              ];
            })
          : e;
      }
      function f(e) {
        return o(
          {
            cache:
              ((t = e.cacheSize),
              t >= 1 ? i(t) : { get: function () {}, set: function () {} }),
          },
          a(e)
        );
        var t;
      }
      var p = /\s+/,
        b = /:(?![^[]*\])/;
      function m(e, t) {
        var r = t.getClassGroupId,
          n = t.getConflictingClassGroupIds,
          o = new Set();
        return e
          .trim()
          .split(p)
          .map(function (e) {
            var t = e.split(b),
              n = t.pop(),
              o = n.startsWith('!'),
              i = o ? n.substring(1) : n,
              a = r(i);
            if (!a) return { isTailwindClass: !1, originalClassName: e };
            var l = 0 === t.length ? '' : t.sort().concat('').join(':');
            return {
              isTailwindClass: !0,
              modifier: o ? '!' + l : l,
              classGroupId: a,
              originalClassName: e,
            };
          })
          .reverse()
          .filter(function (e) {
            if (!e.isTailwindClass) return !0;
            var t = e.modifier,
              r = e.classGroupId,
              i = t + ':' + r;
            return (
              !o.has(i) &&
              (o.add(i),
              n(r).forEach(function (e) {
                return o.add(t + ':' + e);
              }),
              !0)
            );
          })
          .reverse()
          .map(function (e) {
            return e.originalClassName;
          })
          .join(' ');
      }
      function h() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var n,
          o,
          i,
          a = l;
        function l(e) {
          var r = t[0],
            l = t.slice(1).reduce(function (e, t) {
              return t(e);
            }, r());
          return (
            (n = f(l)), (o = n.cache.get), (i = n.cache.set), (a = c), c(e)
          );
        }
        function c(e) {
          var t = o(e);
          if (t) return t;
          var r = m(e, n);
          return i(e, r), r;
        }
        return function () {
          for (var e, t = '', r = 0; r < arguments.length; r += 1)
            (e = arguments[r]) && (t && (t += ' '), (t += e));
          return a(t);
        };
      }
      function g(e) {
        var t = function (t) {
          return t[e] || [];
        };
        return (t.isThemeGetter = !0), t;
      }
      var v = /^\[(.+)\]$/,
        y = /^\d+\/\d+$/,
        w = new Set(['px', 'full', 'screen']),
        x = /^(\d+)?(xs|sm|md|lg|xl)$/,
        j =
          /\d+(%|px|em|rem|vh|vw|pt|pc|in|cm|mm|cap|ch|ex|lh|rlh|vi|vb|vmin|vmax)/,
        k = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function O(e) {
        return !Number.isNaN(Number(e)) || w.has(e) || y.test(e) || A(e);
      }
      function A(e) {
        var t,
          r = null == (t = v.exec(e)) ? void 0 : t[1];
        return !!r && (r.startsWith('length:') || j.test(r));
      }
      function S(e) {
        var t,
          r = null == (t = v.exec(e)) ? void 0 : t[1];
        return !!r && r.startsWith('size:');
      }
      function z(e) {
        var t,
          r = null == (t = v.exec(e)) ? void 0 : t[1];
        return !!r && r.startsWith('position:');
      }
      function E(e) {
        var t,
          r = null == (t = v.exec(e)) ? void 0 : t[1];
        return !!r && (r.startsWith('url(') || r.startsWith('url:'));
      }
      function I(e) {
        var t,
          r = null == (t = v.exec(e)) ? void 0 : t[1];
        return !!r && (!Number.isNaN(Number(r)) || r.startsWith('weight:'));
      }
      function P(e) {
        var t,
          r = null == (t = v.exec(e)) ? void 0 : t[1];
        return r ? Number.isInteger(Number(r)) : Number.isInteger(Number(e));
      }
      function N(e) {
        return v.test(e);
      }
      function C() {
        return !0;
      }
      function _(e) {
        return x.test(e);
      }
      function R(e) {
        var t,
          r = null == (t = v.exec(e)) ? void 0 : t[1];
        return !!r && k.test(r);
      }
      function L() {
        var e = g('colors'),
          t = g('spacing'),
          r = g('blur'),
          n = g('brightness'),
          o = g('borderColor'),
          i = g('borderRadius'),
          a = g('borderWidth'),
          l = g('contrast'),
          c = g('grayscale'),
          s = g('hueRotate'),
          u = g('invert'),
          d = g('gap'),
          f = g('gradientColorStops'),
          p = g('inset'),
          b = g('margin'),
          m = g('opacity'),
          h = g('padding'),
          v = g('saturate'),
          y = g('scale'),
          w = g('sepia'),
          x = g('skew'),
          j = g('space'),
          k = g('translate'),
          L = function () {
            return ['auto', t];
          },
          M = function () {
            return ['', O];
          },
          W = function () {
            return ['auto', P];
          },
          T = function () {
            return ['', '0', N];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [C],
            spacing: [O],
            blur: ['none', '', _, A],
            brightness: [P],
            borderColor: [e],
            borderRadius: ['none', '', 'full', _, A],
            borderWidth: M(),
            contrast: [P],
            grayscale: T(),
            hueRotate: [P],
            invert: T(),
            gap: [t],
            gradientColorStops: [e],
            inset: L(),
            margin: L(),
            opacity: [P],
            padding: [t],
            saturate: [P],
            scale: [P],
            sepia: T(),
            skew: [P, N],
            space: [t],
            translate: [t],
          },
          classGroups: {
            aspect: [{ aspect: ['auto', 'square', 'video', N] }],
            container: ['container'],
            columns: [{ columns: [_] }],
            'break-after': [
              {
                'break-after': [
                  'auto',
                  'avoid',
                  'all',
                  'avoid-page',
                  'page',
                  'left',
                  'right',
                  'column',
                ],
              },
            ],
            'break-before': [
              {
                'break-before': [
                  'auto',
                  'avoid',
                  'all',
                  'avoid-page',
                  'page',
                  'left',
                  'right',
                  'column',
                ],
              },
            ],
            'break-inside': [
              {
                'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
              },
            ],
            'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
            box: [{ box: ['border', 'content'] }],
            display: [
              'block',
              'inline-block',
              'inline',
              'flex',
              'inline-flex',
              'table',
              'inline-table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row-group',
              'table-row',
              'flow-root',
              'grid',
              'inline-grid',
              'contents',
              'list-item',
              'hidden',
            ],
            float: [{ float: ['right', 'left', 'none'] }],
            clear: [{ clear: ['left', 'right', 'both', 'none'] }],
            isolation: ['isolate', 'isolation-auto'],
            'object-fit': [
              { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
            ],
            'object-position': [
              {
                object: [].concat(
                  [
                    'bottom',
                    'center',
                    'left',
                    'left-bottom',
                    'left-top',
                    'right',
                    'right-bottom',
                    'right-top',
                    'top',
                  ],
                  [N]
                ),
              },
            ],
            overflow: [
              { overflow: ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
            ],
            'overflow-x': [
              { 'overflow-x': ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
            ],
            'overflow-y': [
              { 'overflow-y': ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
            ],
            overscroll: [{ overscroll: ['auto', 'contain', 'none'] }],
            'overscroll-x': [{ 'overscroll-x': ['auto', 'contain', 'none'] }],
            'overscroll-y': [{ 'overscroll-y': ['auto', 'contain', 'none'] }],
            position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
            inset: [{ inset: [p] }],
            'inset-x': [{ 'inset-x': [p] }],
            'inset-y': [{ 'inset-y': [p] }],
            top: [{ top: [p] }],
            right: [{ right: [p] }],
            bottom: [{ bottom: [p] }],
            left: [{ left: [p] }],
            visibility: ['visible', 'invisible'],
            z: [{ z: [O] }],
            basis: [{ basis: [t] }],
            'flex-direction': [
              { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
            ],
            'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
            flex: [{ flex: ['1', 'auto', 'initial', 'none', N] }],
            grow: [{ grow: T() }],
            shrink: [{ shrink: T() }],
            order: [{ order: ['first', 'last', 'none', P] }],
            'grid-cols': [{ 'grid-cols': [C] }],
            'col-start-end': [{ col: ['auto', { span: [P] }] }],
            'col-start': [{ 'col-start': W() }],
            'col-end': [{ 'col-end': W() }],
            'grid-rows': [{ 'grid-rows': [C] }],
            'row-start-end': [{ row: ['auto', { span: [P] }] }],
            'row-start': [{ 'row-start': W() }],
            'row-end': [{ 'row-end': W() }],
            'grid-flow': [
              { 'grid-flow': ['row', 'col', 'row-dense', 'col-dense'] },
            ],
            'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', N] }],
            'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', N] }],
            gap: [{ gap: [d] }],
            'gap-x': [{ 'gap-x': [d] }],
            'gap-y': [{ 'gap-y': [d] }],
            'justify-content': [
              {
                justify: [
                  'start',
                  'end',
                  'center',
                  'between',
                  'around',
                  'evenly',
                ],
              },
            ],
            'justify-items': [
              { 'justify-items': ['start', 'end', 'center', 'stretch'] },
            ],
            'justify-self': [
              { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            'align-content': [
              {
                content: [
                  'start',
                  'end',
                  'center',
                  'between',
                  'around',
                  'evenly',
                ],
              },
            ],
            'align-items': [
              { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
            ],
            'align-self': [
              {
                self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
              },
            ],
            'place-content': [
              {
                'place-content': [].concat(
                  ['start', 'end', 'center', 'between', 'around', 'evenly'],
                  ['stretch']
                ),
              },
            ],
            'place-items': [
              { 'place-items': ['start', 'end', 'center', 'stretch'] },
            ],
            'place-self': [
              { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            p: [{ p: [h] }],
            px: [{ px: [h] }],
            py: [{ py: [h] }],
            pt: [{ pt: [h] }],
            pr: [{ pr: [h] }],
            pb: [{ pb: [h] }],
            pl: [{ pl: [h] }],
            m: [{ m: [b] }],
            mx: [{ mx: [b] }],
            my: [{ my: [b] }],
            mt: [{ mt: [b] }],
            mr: [{ mr: [b] }],
            mb: [{ mb: [b] }],
            ml: [{ ml: [b] }],
            'space-x': [{ 'space-x': [j] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [j] }],
            'space-y-reverse': ['space-y-reverse'],
            w: [{ w: ['auto', 'min', 'max', t] }],
            'min-w': [{ 'min-w': ['min', 'max', 'fit', O] }],
            'max-w': [
              {
                'max-w': [
                  '0',
                  'none',
                  'full',
                  'min',
                  'max',
                  'fit',
                  'prose',
                  { screen: [_] },
                  _,
                  A,
                ],
              },
            ],
            h: [{ h: L() }],
            'min-h': [{ 'min-h': ['min', 'max', 'fit', O] }],
            'max-h': [{ 'max-h': [t, 'min', 'max', 'fit'] }],
            'font-size': [{ text: ['base', _, A] }],
            'font-smoothing': ['antialiased', 'subpixel-antialiased'],
            'font-style': ['italic', 'not-italic'],
            'font-weight': [
              {
                font: [
                  'thin',
                  'extralight',
                  'light',
                  'normal',
                  'medium',
                  'semibold',
                  'bold',
                  'extrabold',
                  'black',
                  I,
                ],
              },
            ],
            'font-family': [{ font: [C] }],
            'fvn-normal': ['normal-nums'],
            'fvn-ordinal': ['ordinal'],
            'fvn-slashed-zero': ['slashed-zero'],
            'fvn-figure': ['lining-nums', 'oldstyle-nums'],
            'fvn-spacing': ['proportional-nums', 'tabular-nums'],
            'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
            tracking: [
              {
                tracking: [
                  'tighter',
                  'tight',
                  'normal',
                  'wide',
                  'wider',
                  'widest',
                  A,
                ],
              },
            ],
            leading: [
              {
                leading: [
                  'none',
                  'tight',
                  'snug',
                  'normal',
                  'relaxed',
                  'loose',
                  O,
                ],
              },
            ],
            'list-style-type': [{ list: ['none', 'disc', 'decimal', N] }],
            'list-style-position': [{ list: ['inside', 'outside'] }],
            'placeholder-color': [{ placeholder: [e] }],
            'placeholder-opacity': [{ 'placeholder-opacity': [m] }],
            'text-alignment': [
              { text: ['left', 'center', 'right', 'justify'] },
            ],
            'text-color': [{ text: [e] }],
            'text-opacity': [{ 'text-opacity': [m] }],
            'text-decoration': [
              'underline',
              'overline',
              'line-through',
              'no-underline',
            ],
            'text-decoration-style': [
              {
                decoration: [].concat(
                  ['solid', 'dashed', 'dotted', 'double', 'none'],
                  ['wavy']
                ),
              },
            ],
            'text-decoration-thickness': [
              { decoration: ['auto', 'from-font', O] },
            ],
            'underline-offset': [{ 'underline-offset': ['auto', O] }],
            'text-decoration-color': [{ decoration: [e] }],
            'text-transform': [
              'uppercase',
              'lowercase',
              'capitalize',
              'normal-case',
            ],
            'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
            indent: [{ indent: [t] }],
            'vertical-align': [
              {
                align: [
                  'baseline',
                  'top',
                  'middle',
                  'bottom',
                  'text-top',
                  'text-bottom',
                  'sub',
                  'super',
                  A,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
              },
            ],
            break: [{ break: ['normal', 'words', 'all'] }],
            content: [{ content: ['none', N] }],
            'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
            'bg-clip': [
              { 'bg-clip': ['border', 'padding', 'content', 'text'] },
            ],
            'bg-opacity': [{ 'bg-opacity': [m] }],
            'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
            'bg-position': [
              {
                bg: [].concat(
                  [
                    'bottom',
                    'center',
                    'left',
                    'left-bottom',
                    'left-top',
                    'right',
                    'right-bottom',
                    'right-top',
                    'top',
                  ],
                  [z]
                ),
              },
            ],
            'bg-repeat': [
              {
                bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }],
              },
            ],
            'bg-size': [{ bg: ['auto', 'cover', 'contain', S] }],
            'bg-image': [
              {
                bg: [
                  'none',
                  {
                    'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'],
                  },
                  E,
                ],
              },
            ],
            'bg-color': [{ bg: [e] }],
            'gradient-from': [{ from: [f] }],
            'gradient-via': [{ via: [f] }],
            'gradient-to': [{ to: [f] }],
            rounded: [{ rounded: [i] }],
            'rounded-t': [{ 'rounded-t': [i] }],
            'rounded-r': [{ 'rounded-r': [i] }],
            'rounded-b': [{ 'rounded-b': [i] }],
            'rounded-l': [{ 'rounded-l': [i] }],
            'rounded-tl': [{ 'rounded-tl': [i] }],
            'rounded-tr': [{ 'rounded-tr': [i] }],
            'rounded-br': [{ 'rounded-br': [i] }],
            'rounded-bl': [{ 'rounded-bl': [i] }],
            'border-w': [{ border: [a] }],
            'border-w-x': [{ 'border-x': [a] }],
            'border-w-y': [{ 'border-y': [a] }],
            'border-w-t': [{ 'border-t': [a] }],
            'border-w-r': [{ 'border-r': [a] }],
            'border-w-b': [{ 'border-b': [a] }],
            'border-w-l': [{ 'border-l': [a] }],
            'border-opacity': [{ 'border-opacity': [m] }],
            'border-style': [
              {
                border: [].concat(
                  ['solid', 'dashed', 'dotted', 'double', 'none'],
                  ['hidden']
                ),
              },
            ],
            'divide-x': [{ 'divide-x': [a] }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': [a] }],
            'divide-y-reverse': ['divide-y-reverse'],
            'divide-opacity': [{ 'divide-opacity': [m] }],
            'divide-style': [
              { divide: ['solid', 'dashed', 'dotted', 'double', 'none'] },
            ],
            'border-color': [{ border: [o] }],
            'border-color-x': [{ 'border-x': [o] }],
            'border-color-y': [{ 'border-y': [o] }],
            'border-color-t': [{ 'border-t': [o] }],
            'border-color-r': [{ 'border-r': [o] }],
            'border-color-b': [{ 'border-b': [o] }],
            'border-color-l': [{ 'border-l': [o] }],
            'divide-color': [{ divide: [o] }],
            'outline-style': [
              {
                outline: [''].concat(
                  ['solid', 'dashed', 'dotted', 'double', 'none'],
                  ['hidden']
                ),
              },
            ],
            'outline-offset': [{ 'outline-offset': [O] }],
            'outline-w': [{ outline: [O] }],
            'outline-color': [{ outline: [e] }],
            'ring-w': [{ ring: M() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: [e] }],
            'ring-opacity': [{ 'ring-opacity': [m] }],
            'ring-offset-w': [{ 'ring-offset': [O] }],
            'ring-offset-color': [{ 'ring-offset': [e] }],
            shadow: [{ shadow: ['', 'inner', 'none', _, R] }],
            'shadow-color': [{ shadow: [C] }],
            opacity: [{ opacity: [m] }],
            'mix-blend': [
              {
                'mix-blend': [
                  'normal',
                  'multiply',
                  'screen',
                  'overlay',
                  'darken',
                  'lighten',
                  'color-dodge',
                  'color-burn',
                  'hard-light',
                  'soft-light',
                  'difference',
                  'exclusion',
                  'hue',
                  'saturation',
                  'color',
                  'luminosity',
                ],
              },
            ],
            'bg-blend': [
              {
                'bg-blend': [
                  'normal',
                  'multiply',
                  'screen',
                  'overlay',
                  'darken',
                  'lighten',
                  'color-dodge',
                  'color-burn',
                  'hard-light',
                  'soft-light',
                  'difference',
                  'exclusion',
                  'hue',
                  'saturation',
                  'color',
                  'luminosity',
                ],
              },
            ],
            filter: [{ filter: ['', 'none'] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [l] }],
            'drop-shadow': [{ 'drop-shadow': ['', 'none', _, N] }],
            grayscale: [{ grayscale: [c] }],
            'hue-rotate': [{ 'hue-rotate': [s] }],
            invert: [{ invert: [u] }],
            saturate: [{ saturate: [v] }],
            sepia: [{ sepia: [w] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [r] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [n] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [l] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [c] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [s] }],
            'backdrop-invert': [{ 'backdrop-invert': [u] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [m] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [v] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [w] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'table-layout': [{ table: ['auto', 'fixed'] }],
            transition: [
              {
                transition: [
                  'none',
                  'all',
                  '',
                  'colors',
                  'opacity',
                  'shadow',
                  'transform',
                  N,
                ],
              },
            ],
            duration: [{ duration: [P] }],
            ease: [{ ease: ['linear', 'in', 'out', 'in-out', N] }],
            delay: [{ delay: [P] }],
            animate: [
              { animate: ['none', 'spin', 'ping', 'pulse', 'bounce', N] },
            ],
            transform: [{ transform: ['', 'gpu', 'none'] }],
            scale: [{ scale: [y] }],
            'scale-x': [{ 'scale-x': [y] }],
            'scale-y': [{ 'scale-y': [y] }],
            rotate: [{ rotate: [P, N] }],
            'translate-x': [{ 'translate-x': [k] }],
            'translate-y': [{ 'translate-y': [k] }],
            'skew-x': [{ 'skew-x': [x] }],
            'skew-y': [{ 'skew-y': [x] }],
            'transform-origin': [
              {
                origin: [
                  'center',
                  'top',
                  'top-right',
                  'right',
                  'bottom-right',
                  'bottom',
                  'bottom-left',
                  'left',
                  'top-left',
                  N,
                ],
              },
            ],
            accent: [{ accent: ['auto', e] }],
            appearance: ['appearance-none'],
            cursor: [
              {
                cursor: [
                  'auto',
                  'default',
                  'pointer',
                  'wait',
                  'text',
                  'move',
                  'help',
                  'not-allowed',
                  'none',
                  'context-menu',
                  'progress',
                  'cell',
                  'crosshair',
                  'vertical-text',
                  'alias',
                  'copy',
                  'no-drop',
                  'grab',
                  'grabbing',
                  'all-scroll',
                  'col-resize',
                  'row-resize',
                  'n-resize',
                  'e-resize',
                  's-resize',
                  'w-resize',
                  'ne-resize',
                  'nw-resize',
                  'se-resize',
                  'sw-resize',
                  'ew-resize',
                  'ns-resize',
                  'nesw-resize',
                  'nwse-resize',
                  'zoom-in',
                  'zoom-out',
                  N,
                ],
              },
            ],
            'caret-color': [{ caret: [e] }],
            'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
            resize: [{ resize: ['none', 'y', 'x', ''] }],
            'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
            'scroll-m': [{ 'scroll-m': [t] }],
            'scroll-mx': [{ 'scroll-mx': [t] }],
            'scroll-my': [{ 'scroll-my': [t] }],
            'scroll-mt': [{ 'scroll-mt': [t] }],
            'scroll-mr': [{ 'scroll-mr': [t] }],
            'scroll-mb': [{ 'scroll-mb': [t] }],
            'scroll-ml': [{ 'scroll-ml': [t] }],
            'scroll-p': [{ 'scroll-p': [t] }],
            'scroll-px': [{ 'scroll-px': [t] }],
            'scroll-py': [{ 'scroll-py': [t] }],
            'scroll-pt': [{ 'scroll-pt': [t] }],
            'scroll-pr': [{ 'scroll-pr': [t] }],
            'scroll-pb': [{ 'scroll-pb': [t] }],
            'scroll-pl': [{ 'scroll-pl': [t] }],
            'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
            'snap-stop': [{ snap: ['normal', 'always'] }],
            'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
            'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
            touch: [
              {
                touch: [
                  'auto',
                  'none',
                  'pinch-zoom',
                  'manipulation',
                  { pan: ['x', 'left', 'right', 'y', 'up', 'down'] },
                ],
              },
            ],
            select: [{ select: ['none', 'text', 'all', 'auto'] }],
            'will-change': [
              { 'will-change': ['auto', 'scroll', 'contents', 'transform', N] },
            ],
            fill: [{ fill: [e] }],
            'stroke-w': [{ stroke: [O] }],
            stroke: [{ stroke: [e] }],
            sr: ['sr-only', 'not-sr-only'],
          },
          conflictingClassGroups: {
            overflow: ['overflow-x', 'overflow-y'],
            overscroll: ['overscroll-x', 'overscroll-y'],
            inset: ['inset-x', 'inset-y', 'top', 'right', 'bottom', 'left'],
            'inset-x': ['right', 'left'],
            'inset-y': ['top', 'bottom'],
            flex: ['basis', 'grow', 'shrink'],
            'col-start-end': ['col-start', 'col-end'],
            'row-start-end': ['row-start', 'row-end'],
            gap: ['gap-x', 'gap-y'],
            p: ['px', 'py', 'pt', 'pr', 'pb', 'pl'],
            px: ['pr', 'pl'],
            py: ['pt', 'pb'],
            m: ['mx', 'my', 'mt', 'mr', 'mb', 'ml'],
            mx: ['mr', 'ml'],
            my: ['mt', 'mb'],
            'font-size': ['leading'],
            'fvn-normal': [
              'fvn-ordinal',
              'fvn-slashed-zero',
              'fvn-figure',
              'fvn-spacing',
              'fvn-fraction',
            ],
            'fvn-ordinal': ['fvn-normal'],
            'fvn-slashed-zero': ['fvn-normal'],
            'fvn-figure': ['fvn-normal'],
            'fvn-spacing': ['fvn-normal'],
            'fvn-fraction': ['fvn-normal'],
            rounded: [
              'rounded-t',
              'rounded-r',
              'rounded-b',
              'rounded-l',
              'rounded-tl',
              'rounded-tr',
              'rounded-br',
              'rounded-bl',
            ],
            'rounded-t': ['rounded-tl', 'rounded-tr'],
            'rounded-r': ['rounded-tr', 'rounded-br'],
            'rounded-b': ['rounded-br', 'rounded-bl'],
            'rounded-l': ['rounded-tl', 'rounded-bl'],
            'border-w': [
              'border-w-t',
              'border-w-r',
              'border-w-b',
              'border-w-l',
            ],
            'border-w-x': ['border-w-r', 'border-w-l'],
            'border-w-y': ['border-w-t', 'border-w-b'],
            'border-color': [
              'border-color-t',
              'border-color-r',
              'border-color-b',
              'border-color-l',
            ],
            'border-color-x': ['border-color-r', 'border-color-l'],
            'border-color-y': ['border-color-t', 'border-color-b'],
            'scroll-m': [
              'scroll-mx',
              'scroll-my',
              'scroll-mt',
              'scroll-mr',
              'scroll-mb',
              'scroll-ml',
            ],
            'scroll-mx': ['scroll-mr', 'scroll-ml'],
            'scroll-my': ['scroll-mt', 'scroll-mb'],
            'scroll-p': [
              'scroll-px',
              'scroll-py',
              'scroll-pt',
              'scroll-pr',
              'scroll-pb',
              'scroll-pl',
            ],
            'scroll-px': ['scroll-pr', 'scroll-pl'],
            'scroll-py': ['scroll-pt', 'scroll-pb'],
          },
        };
      }
      var M = h(L);
      function W(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function T(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return W(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return W(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(r);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return W(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function D() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return M(n.Z.apply(void 0, T(t)));
      }
    },
    850: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return v;
          },
        });
      var n = r(5893),
        o = (r(472), r(6255)),
        i = (r(7294), r(5675)),
        a = r(7466),
        l = [
          { href: 'https://www.github.com/aliataf', label: 'Github' },
          { href: 'https://www.linkedin.com/in/ali-ataf', label: 'Linkedin' },
          {
            href: 'https://stackoverflow.com/users/7024690/ali-ataf',
            label: 'Stackoverflow',
          },
          { href: 'https://twitter.com/AliAttaf1', label: 'Twitter' },
          { href: 'https://aliataf.medium.com', label: 'Medium' },
          { href: 'https://www.facebook.com/aliataf8', label: 'Facebook' },
          { href: 'https://wa.me/+971502357409', label: 'Whatsapp' },
        ];
      function c() {
        return (0, n.jsx)('footer', {
          className: 'bg-primary flex gap-x-1 items-center p-6',
          children: l.map(function (e) {
            var t = e.href,
              r = e.label;
            return (0,
            n.jsx)(a.Z, { href: t, className: 'text-white', children: (0, n.jsx)('div', { className: 'text-red', style: { color: 'red', fill: 'green' }, children: (0, n.jsx)(i.default, { src: '/icons/'.concat(r.toLowerCase(), '.svg'), alt: r, width: '35px', height: '35px', className: 'cursor-pointer hover:scale-105' }) }) }, ''.concat(t).concat(r));
          }),
        });
      }
      var s = r(6010),
        u = r(1163),
        d = r(390),
        f = r.n(d),
        p = [
          { href: '/about', label: 'About' },
          { href: '/projects', label: 'Projects' },
        ];
      function b() {
        var e = (0, u.useRouter)();
        return (0, n.jsx)('header', {
          className: 'bg-primary sticky top-0 z-50 drop-shadow-lg',
          children: (0, n.jsxs)('div', {
            className: 'layout flex justify-between items-center pb-1 h-16',
            children: [
              (0, n.jsx)(a.Z, {
                href: '/',
                className: 'font-bold transition-all hover:text-action',
                children: '<Ali Ataf />',
              }),
              (0, n.jsx)('nav', {
                children: (0, n.jsx)('ul', {
                  className:
                    'flex justify-between items-center space-x-2 h-16 sm:space-x-5',
                  children: p.map(function (t) {
                    var r = t.href,
                      o = t.label;
                    return (0,
                    n.jsx)(a.Z, { href: r, children: (0, n.jsx)('li', { className: (0, s.Z)(f().navItem, { 'text-action': e.pathname === r }), 'data-label': o, children: o }) }, ''.concat(r).concat(o));
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function m(e) {
        var t = e.children;
        return (0, n.jsxs)('div', {
          className: 'bg-primary text-white',
          children: [
            (0, n.jsx)(b, {}),
            (0, n.jsx)('main', { children: t }),
            (0, n.jsx)(c, {}),
          ],
        });
      }
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              h(e, t, r[t]);
            });
        }
        return e;
      }
      var v = function (e) {
        var t = e.Component,
          r = e.pageProps;
        return (0, n.jsx)(o.jm, {
          children: (0, n.jsx)(m, { children: (0, n.jsx)(t, g({}, r)) }),
        });
      };
    },
    390: function (e) {
      e.exports = {
        navItem: 'Header_navItem__04ilV',
        'nuxt-link-active': 'Header_nuxt-link-active__OccBQ',
      };
    },
    472: function () {},
    5809: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.imageConfigDefault = t.VALID_LOADERS = void 0);
      t.VALID_LOADERS = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'];
      t.imageConfigDefault = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 60,
        formats: ['image/webp'],
      };
    },
    5675: function (e, t, r) {
      e.exports = r(8045);
    },
    1664: function (e, t, r) {
      e.exports = r(8418);
    },
    1163: function (e, t, r) {
      e.exports = r(387);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6363), t(387);
    });
    var r = e.O();
    _N_E = r;
  },
]);
