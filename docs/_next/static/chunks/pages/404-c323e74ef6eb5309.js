(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    9014: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return n(9622);
        },
      ]);
    },
    8986: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(5893),
        o = n(9008),
        i = n(1163);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              a(e, t, n[t]);
            });
        }
        return e;
      }
      var l = {
        title: "Ali Ataf's website",
        siteName: "Ali Ataf's website",
        description: "Ali Ataf's website",
        url: 'https://aliataf.me',
        type: 'website',
        robots: 'follow, index',
        image: '',
      };
      function s(e) {
        var t = (0, i.useRouter)(),
          n = c({}, l, e);
        return (
          (n.title = e.templateTitle
            ? ''.concat(e.templateTitle, ' | ').concat(n.siteName)
            : n.title),
          (n.image = (function (e) {
            var t = e.siteName,
              n = e.templateTitle,
              r = e.description,
              o = e.logo,
              i = encodeURIComponent(
                void 0 === o ? 'https://og.thcl.dev/images/logo.jpg' : o
              ),
              a = encodeURIComponent(t.trim()),
              c = n ? encodeURIComponent(n.trim()) : void 0,
              l = encodeURIComponent(r.trim());
            return 'https://og.thcl.dev/api/general?siteName='
              .concat(a, '&description=')
              .concat(l, '&logo=')
              .concat(i)
              .concat(c ? '&templateTitle='.concat(c) : '');
          })({
            description: n.description,
            siteName: e.templateTitle ? n.siteName : n.title,
            templateTitle: e.templateTitle,
          })),
          (0, r.jsxs)(o.default, {
            children: [
              (0, r.jsx)('title', { children: n.title }),
              (0, r.jsx)('meta', { name: 'robots', content: n.robots }),
              (0, r.jsx)('meta', {
                content: n.description,
                name: 'description',
              }),
              (0, r.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(n.url).concat(t.asPath),
              }),
              (0, r.jsx)('link', {
                rel: 'canonical',
                href: ''.concat(n.url).concat(t.asPath),
              }),
              (0, r.jsx)('meta', { property: 'og:type', content: n.type }),
              (0, r.jsx)('meta', {
                property: 'og:site_name',
                content: n.siteName,
              }),
              (0, r.jsx)('meta', {
                property: 'og:description',
                content: n.description,
              }),
              (0, r.jsx)('meta', { property: 'og:title', content: n.title }),
              (0, r.jsx)('meta', {
                name: 'image',
                property: 'og:image',
                content: n.image,
              }),
              (0, r.jsx)('meta', {
                name: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, r.jsx)('meta', {
                name: 'twitter:site',
                content: '@th_clarence',
              }),
              (0, r.jsx)('meta', { name: 'twitter:title', content: n.title }),
              (0, r.jsx)('meta', {
                name: 'twitter:description',
                content: n.description,
              }),
              (0, r.jsx)('meta', { name: 'twitter:image', content: n.image }),
              n.date &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)('meta', {
                      property: 'article:published_time',
                      content: n.date,
                    }),
                    (0, r.jsx)('meta', {
                      name: 'publish_date',
                      property: 'og:publish_date',
                      content: n.date,
                    }),
                    (0, r.jsx)('meta', {
                      name: 'author',
                      property: 'article:author',
                      content: 'Theodorus Clarence',
                    }),
                  ],
                }),
              p.map(function (e) {
                return (0, r.jsx)('link', c({}, e), e.href);
              }),
              (0, r.jsx)('meta', {
                name: 'msapplication-TileColor',
                content: '#ffffff',
              }),
              (0, r.jsx)('meta', {
                name: 'msapplication-TileImage',
                content: '/favicon/ms-icon-144x144.png',
              }),
              (0, r.jsx)('meta', { name: 'theme-color', content: '#ffffff' }),
            ],
          })
        );
      }
      var p = [
        {
          rel: 'apple-touch-icon',
          sizes: '57x57',
          href: '/favicon/apple-icon-57x57.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '60x60',
          href: '/favicon/apple-icon-60x60.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/favicon/apple-icon-72x72.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/favicon/apple-icon-76x76.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/favicon/apple-icon-114x114.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/favicon/apple-icon-120x120.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/favicon/apple-icon-144x144.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/favicon/apple-icon-152x152.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-icon-180x180.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/favicon/android-icon-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon/favicon-96x96.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/favicon/manifest.json' },
      ];
    },
    5431: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(5893),
        o = n(7294),
        i = n(7385),
        a = n(7466);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var s = o.forwardRef(function (e, t) {
        var n = e.children,
          o = e.className,
          s = l(e, ['children', 'className']);
        return (0, r.jsx)(
          a.Z,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              'function' === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function (t) {
                  c(e, t, n[t]);
                });
            }
            return e;
          })({ ref: t }, s, {
            className: (0, i.Z)(
              'animated-underline custom-link inline-flex items-center font-semibold',
              'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
              'border-dark border-b border-dotted hover:border-black/0',
              o
            ),
            children: n,
          })
        );
      });
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function u(e) {
        var t = e.children,
          n = e.className,
          o = e.direction,
          a = void 0 === o ? 'right' : o,
          c = e.as,
          l = f(e, ['children', 'className', 'direction', 'as']),
          u = c || s;
        return (0, r.jsxs)(
          u,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              'function' === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function (t) {
                  p(e, t, n[t]);
                });
            }
            return e;
          })({}, l, {
            className: (0, i.Z)(
              'gap-[0.25em] group',
              'left' === a && 'flex-row-reverse',
              n
            ),
            children: [
              (0, r.jsx)('span', { children: t }),
              (0, r.jsxs)('svg', {
                viewBox: '0 0 16 16',
                height: '1em',
                width: '1em',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                className: (0, i.Z)(
                  'relative',
                  'transition-transform duration-200',
                  'right' === a ? 'motion-safe:-translate-x-1' : 'rotate-180',
                  'group-hover:translate-x-0'
                ),
                children: [
                  (0, r.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z',
                  }),
                  (0, r.jsx)('path', {
                    stroke: 'currentColor',
                    d: 'M1.75 8H11',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    className: (0, i.Z)(
                      'transition-all duration-200 origin-left',
                      'opacity-0 motion-safe:-translate-x-1',
                      'group-hover:opacity-100 group-hover:translate-x-0'
                    ),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    9622: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n(5893),
        o = (n(7294), n(9352)),
        i = n(5431),
        a = n(8986);
      function c() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a.Z, { templateTitle: 'Not Found' }),
            (0, r.jsx)('main', {
              children: (0, r.jsx)('section', {
                className: 'bg-white',
                children: (0, r.jsxs)('div', {
                  className:
                    'layout flex flex-col justify-center items-center min-h-screen text-center text-black',
                  children: [
                    (0, r.jsx)(o.Chf, {
                      size: 60,
                      className:
                        'animate-flicker drop-shadow-glow text-red-500',
                    }),
                    (0, r.jsx)('h1', {
                      className: 'mt-8 text-4xl md:text-6xl',
                      children: 'Page Not Found',
                    }),
                    (0, r.jsx)(i.Z, {
                      className: 'mt-4 md:text-lg',
                      href: '/',
                      children: 'Back to Home',
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
    8357: function (e, t, n) {
      'use strict';
      n.d(t, {
        w_: function () {
          return s;
        },
      });
      var r = n(7294),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = r.createContext && r.createContext(o),
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        c = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      function l(e) {
        return (
          e &&
          e.map(function (e, t) {
            return r.createElement(e.tag, a({ key: t }, e.attr), l(e.child));
          })
        );
      }
      function s(e) {
        return function (t) {
          return r.createElement(p, a({ attr: a({}, e.attr) }, t), l(e.child));
        };
      }
      function p(e) {
        var t = function (t) {
          var n,
            o = e.attr,
            i = e.size,
            l = e.title,
            s = c(e, ['attr', 'size', 'title']),
            p = i || t.size || '1em';
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + ' ' : '') + e.className),
            r.createElement(
              'svg',
              a(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                o,
                s,
                {
                  className: n,
                  style: a(a({ color: e.color || t.color }, t.style), e.style),
                  height: p,
                  width: p,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              l && r.createElement('title', null, l),
              e.children
            )
          );
        };
        return void 0 !== i
          ? r.createElement(i.Consumer, null, function (e) {
              return t(e);
            })
          : t(o);
      }
    },
  },
  function (e) {
    e.O(0, [937, 774, 888, 179], function () {
      return (t = 9014), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);