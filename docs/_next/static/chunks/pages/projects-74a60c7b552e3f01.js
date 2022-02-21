(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    4478: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/projects',
        function () {
          return n(6522);
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
    6522: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return l;
          },
          default: function () {
            return s;
          },
        });
      var r = n(5893),
        o = n(5675),
        i = n(5431);
      function a(e) {
        var t = e.project;
        return (0, r.jsx)('div', {
          className: 'w-12/12 p-4 sm:w-6/12 md:w-4/12',
          children: (0, r.jsxs)('div', {
            className:
              'bg-accent flex-col pt-4 rounded-xl transition-all dark:bg-slate-800 hover:scale-105',
            children: [
              t.photo &&
                (0, r.jsx)('div', {
                  className: 'flex justify-center',
                  children: (0, r.jsx)(o.default, {
                    src: t.photo.url,
                    alt: t.photo.alt,
                    width: '150px',
                    height: '150px',
                    className: 'cursor-zoom-in rounded-xl',
                    onClick: function () {
                      return (function (e) {
                        if (e) {
                          var t = document.createElement('img');
                          t.src = e.url;
                          var n = window.open('');
                          null === n ||
                            void 0 === n ||
                            n.document.write(t.outerHTML);
                        }
                      })(t.photo);
                    },
                    unoptimized: !0,
                  }),
                }),
              (0, r.jsx)('div', {
                className: 'mt-4 text-2xl font-medium text-center',
                children: (0, r.jsx)(i.Z, {
                  href: t.url ? t.url : '',
                  className: 'border-gray-700',
                  children: t.title,
                }),
              }),
              (0, r.jsx)('div', {
                className: 'flex-1 px-8 pb-6 mt-4 text-center md:text-left',
                children: (0, r.jsx)('div', {
                  className: 'flex-col flex-1 justify-center',
                  children: (0, r.jsx)('p', {
                    className: 'text-center',
                    children: t.content,
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var c = n(8986),
        l = !0;
      function s(e) {
        var t = e.projects;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(c.Z, { templateTitle: 'Projects' }),
            (0, r.jsx)('section', {
              className: 'bg-secondary px-16',
              children: (0, r.jsx)('div', {
                className: 'flex justify-between min-h-screen',
                children: (0, r.jsxs)('div', {
                  className: 'flex-1 pt-32',
                  children: [
                    (0, r.jsxs)('div', {
                      className: 'flex items-center',
                      children: [
                        (0, r.jsx)('div', {
                          className: 'pr-6 text-3xl',
                          children: 'Projects',
                        }),
                        (0, r.jsx)('div', {
                          className: 'flex-1 border border-yellow-400',
                          style: { height: '1px' },
                        }),
                      ],
                    }),
                    (0, r.jsx)('div', {
                      className: 'flex flex-wrap pb-4 mt-16 text-gray-300',
                      children:
                        t &&
                        t.map(function (e) {
                          return (0, r.jsx)(a, { project: e }, e.id);
                        }),
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
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 4478), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
