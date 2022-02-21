(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    4613: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/about',
        function () {
          return r(4520);
        },
      ]);
    },
    8986: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = r(5893),
        a = r(9008),
        i = r(1163);
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
      function s(e) {
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
              o(e, t, r[t]);
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
      function c(e) {
        var t = (0, i.useRouter)(),
          r = s({}, l, e);
        return (
          (r.title = e.templateTitle
            ? ''.concat(e.templateTitle, ' | ').concat(r.siteName)
            : r.title),
          (r.image = (function (e) {
            var t = e.siteName,
              r = e.templateTitle,
              n = e.description,
              a = e.logo,
              i = encodeURIComponent(
                void 0 === a ? 'https://og.thcl.dev/images/logo.jpg' : a
              ),
              o = encodeURIComponent(t.trim()),
              s = r ? encodeURIComponent(r.trim()) : void 0,
              l = encodeURIComponent(n.trim());
            return 'https://og.thcl.dev/api/general?siteName='
              .concat(o, '&description=')
              .concat(l, '&logo=')
              .concat(i)
              .concat(s ? '&templateTitle='.concat(s) : '');
          })({
            description: r.description,
            siteName: e.templateTitle ? r.siteName : r.title,
            templateTitle: e.templateTitle,
          })),
          (0, n.jsxs)(a.default, {
            children: [
              (0, n.jsx)('title', { children: r.title }),
              (0, n.jsx)('meta', { name: 'robots', content: r.robots }),
              (0, n.jsx)('meta', {
                content: r.description,
                name: 'description',
              }),
              (0, n.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(r.url).concat(t.asPath),
              }),
              (0, n.jsx)('link', {
                rel: 'canonical',
                href: ''.concat(r.url).concat(t.asPath),
              }),
              (0, n.jsx)('meta', { property: 'og:type', content: r.type }),
              (0, n.jsx)('meta', {
                property: 'og:site_name',
                content: r.siteName,
              }),
              (0, n.jsx)('meta', {
                property: 'og:description',
                content: r.description,
              }),
              (0, n.jsx)('meta', { property: 'og:title', content: r.title }),
              (0, n.jsx)('meta', {
                name: 'image',
                property: 'og:image',
                content: r.image,
              }),
              (0, n.jsx)('meta', {
                name: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, n.jsx)('meta', {
                name: 'twitter:site',
                content: '@th_clarence',
              }),
              (0, n.jsx)('meta', { name: 'twitter:title', content: r.title }),
              (0, n.jsx)('meta', {
                name: 'twitter:description',
                content: r.description,
              }),
              (0, n.jsx)('meta', { name: 'twitter:image', content: r.image }),
              r.date &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)('meta', {
                      property: 'article:published_time',
                      content: r.date,
                    }),
                    (0, n.jsx)('meta', {
                      name: 'publish_date',
                      property: 'og:publish_date',
                      content: r.date,
                    }),
                    (0, n.jsx)('meta', {
                      name: 'author',
                      property: 'article:author',
                      content: 'Theodorus Clarence',
                    }),
                  ],
                }),
              p.map(function (e) {
                return (0, n.jsx)('link', s({}, e), e.href);
              }),
              (0, n.jsx)('meta', {
                name: 'msapplication-TileColor',
                content: '#ffffff',
              }),
              (0, n.jsx)('meta', {
                name: 'msapplication-TileImage',
                content: '/favicon/ms-icon-144x144.png',
              }),
              (0, n.jsx)('meta', { name: 'theme-color', content: '#ffffff' }),
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
    2382: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(5893),
        a = r(6010);
      function i(e) {
        var t = e.width,
          r = void 0 === t ? '24rem' : t,
          i = e.height,
          o = void 0 === i ? '24rem' : i,
          s = e.children,
          l = e.animate,
          c = e.doubleBorder;
        return (0, n.jsx)('div', {
          className: 'relative',
          style: { width: r, height: o },
          children: (0, n.jsx)('div', {
            className: (0, a.Z)(
              'bg-primary-light flex absolute -left-12 flex-col justify-center pl-28 rounded-full',
              { 'border-[44px] border-accent': c }
            ),
            style: { width: r, height: o, scale: l ? 0 : 1 },
            children: s,
          }),
        });
      }
    },
    4520: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return u;
          },
          default: function () {
            return f;
          },
        });
      var n,
        a = r(5893),
        i = r(7294),
        o = r(3990),
        s = r(7385);
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
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      !(function (e) {
        (e[(e.primary = 0)] = 'primary'),
          (e[(e.outline = 1)] = 'outline'),
          (e[(e.ghost = 2)] = 'ghost'),
          (e[(e.light = 3)] = 'light'),
          (e[(e.dark = 4)] = 'dark');
      })(n || (n = {}));
      var p = i.forwardRef(function (e, t) {
          var r = e.children,
            n = e.className,
            i = e.disabled,
            p = e.isLoading,
            d = e.variant,
            m = void 0 === d ? 'primary' : d,
            u = e.isDarkBg,
            f = void 0 !== u && u,
            g = c(e, [
              'children',
              'className',
              'disabled',
              'isLoading',
              'variant',
              'isDarkBg',
            ]),
            h = p || i;
          return (0, a.jsxs)(
            'button',
            (function (e) {
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
            })(
              {
                ref: t,
                type: 'button',
                disabled: h,
                className: (0, s.Z)(
                  'inline-flex items-center px-4 py-2 font-semibold rounded',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
                  'shadow-sm',
                  'transition-colors duration-75',
                  [
                    'primary' === m && [
                      'bg-primary-500 text-white',
                      'border border-primary-600',
                      'hover:bg-primary-600 hover:text-white',
                      'active:bg-primary-500',
                      'disabled:bg-primary-400 disabled:hover:bg-primary-400',
                    ],
                    'outline' === m && [
                      'text-primary-500',
                      'border border-primary-500',
                      'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
                      f &&
                        'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
                    ],
                    'ghost' === m && [
                      'text-primary-500',
                      'shadow-none',
                      'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
                      f &&
                        'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
                    ],
                    'light' === m && [
                      'bg-white text-dark ',
                      'border border-gray-300',
                      'hover:text-dark hover:bg-gray-100',
                      'active:bg-white/80 disabled:bg-gray-200',
                    ],
                    'dark' === m && [
                      'bg-gray-900 text-white',
                      'border border-gray-600',
                      'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
                    ],
                  ],
                  'disabled:cursor-not-allowed',
                  p &&
                    'relative text-transparent hover:text-transparent disabled:cursor-wait transition-none',
                  n
                ),
              },
              g,
              {
                children: [
                  p &&
                    (0, a.jsx)('div', {
                      className: (0, s.Z)(
                        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        {
                          'text-white': ['primary', 'dark'].includes(m),
                          'text-black': ['light'].includes(m),
                          'text-primary-500': ['outline', 'ghost'].includes(m),
                        }
                      ),
                      children: (0, a.jsx)(o.Cd, { className: 'animate-spin' }),
                    }),
                  r,
                ],
              }
            )
          );
        }),
        d = r(2382),
        m = r(8986),
        u = !0;
      function f() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(m.Z, { templateTitle: 'About' }),
            (0, a.jsx)('section', {
              className: 'bg-secondary',
              children: (0, a.jsxs)('div', {
                className: 'block justify-between min-h-screen sm:flex',
                children: [
                  (0, a.jsx)(d.Z, {
                    width: '45vw',
                    height: '45vw',
                    animate: !0,
                    doubleBorder: !0,
                  }),
                  (0, a.jsxs)('div', {
                    className: 'flex-1 p-4 sm:pt-32',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex items-center mt-6',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'pr-6 text-3xl',
                            children: 'About Me',
                          }),
                          (0, a.jsx)('div', {
                            className: 'flex-1 border border-yellow-400',
                            style: { height: '1px' },
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className:
                          'mt-6 leading-10 text-gray-300 sm:pr-16 sm:mt-16',
                        children: [
                          'I am a fresh graduated Software Engineer with 2+ years of experience in web development. I have a passion for building scalable and maintainable web applications. I am currently working as a Frontend Developer at',
                          ' ',
                          (0, a.jsx)('a', {
                            href: 'https://www.nestech.org/',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className:
                              'text-yellow-400 transition-all duration-700 ease-in-out hover:underline',
                            children: 'Nestech',
                          }),
                          '.',
                          (0, a.jsx)('br', {}),
                          "Actually, I started to code in 2013 (~15 years old), with Visual Basic 6.0 and I built a lot of programs and games in it(Unfortunately, I didn't upload them on any public repository \ud83d\ude22).",
                          (0, a.jsx)('br', {}),
                          'Then, I started to learn JavaScript and I have been using it since then. I have been working with texhnologies like',
                          ' ',
                          (0, a.jsxs)('span', {
                            className: 'text-gray-600',
                            children: [
                              ' ',
                              'React, Next.js, Vue.js, Typescript, Tailwindcss, Sass, and many more.',
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)('div', {
                        className: 'mt-16',
                        children: (0, a.jsx)(p, {
                          className: 'px-6 py-4 rounded-full hover:bg-accent',
                          children: (0, a.jsx)('a', {
                            href: '/resume/Ali_Ataf_Resume.pdf',
                            download: 'Ali_Ataf_Resume.pdf',
                            target: '_blank',
                            children: 'My Resume',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    9008: function (e, t, r) {
      e.exports = r(5443);
    },
    8357: function (e, t, r) {
      'use strict';
      r.d(t, {
        w_: function () {
          return c;
        },
      });
      var n = r(7294),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = n.createContext && n.createContext(a),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        s = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
              t.indexOf(n[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                (r[n[a]] = e[n[a]]);
          }
          return r;
        };
      function l(e) {
        return (
          e &&
          e.map(function (e, t) {
            return n.createElement(e.tag, o({ key: t }, e.attr), l(e.child));
          })
        );
      }
      function c(e) {
        return function (t) {
          return n.createElement(p, o({ attr: o({}, e.attr) }, t), l(e.child));
        };
      }
      function p(e) {
        var t = function (t) {
          var r,
            a = e.attr,
            i = e.size,
            l = e.title,
            c = s(e, ['attr', 'size', 'title']),
            p = i || t.size || '1em';
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + ' ' : '') + e.className),
            n.createElement(
              'svg',
              o(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                a,
                c,
                {
                  className: r,
                  style: o(o({ color: e.color || t.color }, t.style), e.style),
                  height: p,
                  width: p,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              l && n.createElement('title', null, l),
              e.children
            )
          );
        };
        return void 0 !== i
          ? n.createElement(i.Consumer, null, function (e) {
              return t(e);
            })
          : t(a);
      }
    },
  },
  function (e) {
    e.O(0, [609, 774, 888, 179], function () {
      return (t = 4613), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
