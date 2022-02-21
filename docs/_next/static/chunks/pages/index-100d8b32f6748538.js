(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n(378);
        },
      ]);
    },
    8986: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(5893),
        a = n(9008),
        o = n(1163);
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
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          'function' === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              c(e, t, n[t]);
            });
        }
        return e;
      }
      var s = {
        title: "Ali Ataf's website",
        siteName: "Ali Ataf's website",
        description: "Ali Ataf's website",
        url: 'https://aliataf.me',
        type: 'website',
        robots: 'follow, index',
        image: '',
      };
      function l(e) {
        var t = (0, o.useRouter)(),
          n = r({}, s, e);
        return (
          (n.title = e.templateTitle
            ? ''.concat(e.templateTitle, ' | ').concat(n.siteName)
            : n.title),
          (n.image = (function (e) {
            var t = e.siteName,
              n = e.templateTitle,
              i = e.description,
              a = e.logo,
              o = encodeURIComponent(
                void 0 === a ? 'https://og.thcl.dev/images/logo.jpg' : a
              ),
              c = encodeURIComponent(t.trim()),
              r = n ? encodeURIComponent(n.trim()) : void 0,
              s = encodeURIComponent(i.trim());
            return 'https://og.thcl.dev/api/general?siteName='
              .concat(c, '&description=')
              .concat(s, '&logo=')
              .concat(o)
              .concat(r ? '&templateTitle='.concat(r) : '');
          })({
            description: n.description,
            siteName: e.templateTitle ? n.siteName : n.title,
            templateTitle: e.templateTitle,
          })),
          (0, i.jsxs)(a.default, {
            children: [
              (0, i.jsx)('title', { children: n.title }),
              (0, i.jsx)('meta', { name: 'robots', content: n.robots }),
              (0, i.jsx)('meta', {
                content: n.description,
                name: 'description',
              }),
              (0, i.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(n.url).concat(t.asPath),
              }),
              (0, i.jsx)('link', {
                rel: 'canonical',
                href: ''.concat(n.url).concat(t.asPath),
              }),
              (0, i.jsx)('meta', { property: 'og:type', content: n.type }),
              (0, i.jsx)('meta', {
                property: 'og:site_name',
                content: n.siteName,
              }),
              (0, i.jsx)('meta', {
                property: 'og:description',
                content: n.description,
              }),
              (0, i.jsx)('meta', { property: 'og:title', content: n.title }),
              (0, i.jsx)('meta', {
                name: 'image',
                property: 'og:image',
                content: n.image,
              }),
              (0, i.jsx)('meta', {
                name: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, i.jsx)('meta', {
                name: 'twitter:site',
                content: '@th_clarence',
              }),
              (0, i.jsx)('meta', { name: 'twitter:title', content: n.title }),
              (0, i.jsx)('meta', {
                name: 'twitter:description',
                content: n.description,
              }),
              (0, i.jsx)('meta', { name: 'twitter:image', content: n.image }),
              n.date &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)('meta', {
                      property: 'article:published_time',
                      content: n.date,
                    }),
                    (0, i.jsx)('meta', {
                      name: 'publish_date',
                      property: 'og:publish_date',
                      content: n.date,
                    }),
                    (0, i.jsx)('meta', {
                      name: 'author',
                      property: 'article:author',
                      content: 'Theodorus Clarence',
                    }),
                  ],
                }),
              p.map(function (e) {
                return (0, i.jsx)('link', r({}, e), e.href);
              }),
              (0, i.jsx)('meta', {
                name: 'msapplication-TileColor',
                content: '#ffffff',
              }),
              (0, i.jsx)('meta', {
                name: 'msapplication-TileImage',
                content: '/favicon/ms-icon-144x144.png',
              }),
              (0, i.jsx)('meta', { name: 'theme-color', content: '#ffffff' }),
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
    2382: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(5893),
        a = n(6010);
      function o(e) {
        var t = e.width,
          n = void 0 === t ? '24rem' : t,
          o = e.height,
          c = void 0 === o ? '24rem' : o,
          r = e.children,
          s = e.animate,
          l = e.doubleBorder;
        return (0, i.jsx)('div', {
          className: 'relative',
          style: { width: n, height: c },
          children: (0, i.jsx)('div', {
            className: (0, a.Z)(
              'bg-primary-light flex absolute -left-12 flex-col justify-center pl-28 rounded-full',
              { 'border-[44px] border-accent': l }
            ),
            style: { width: n, height: c, scale: s ? 0 : 1 },
            children: r,
          }),
        });
      }
    },
    378: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(5893),
        a = n(5675),
        o = (n(7294), n(6255)),
        c = n(2382),
        r = n(8986),
        s = {
          src: './_next/static/media/me.19e2121c.png',
          height: 880,
          width: 880,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR42mMAgZnlYUwMDAxJGRoMwf+3SNl9WcQgzAAE/1YxMDGAgLa8iE99Y9P/3qaq/18WMLz/v4bv2q/ljCoMMHCox69ry7bt/4/u3/3t6xKG/UCd5/+uZN3zdyUDP8P/NQwC/9dq7N20eun/HZs3/H6/gPPI//XMB/+sEj70bxWTHgMIrClkWFqcFPo/NafgQ4qrwvv7UwXO/F/DsP/XcnYnBhBIT44PXNeTs3F9rdPCVcWyc49328z/tVI1kwEG/v//zzxv9oyww91usy71Ksw91Bfqy8Dwn5EBBJbOnQ5kIMD/DwxcMPbZuTmMAPd1ZhvWtufqAAAAAElFTkSuQmCC',
        };
      function l() {
        return (0, i.jsx)(o.Rj.Consumer, {
          children: function (e) {
            var t = e.isTabletOrBigger;
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(r.Z, { templateTitle: 'Home' }),
                (0, i.jsx)('section', {
                  children: (0, i.jsxs)('div', {
                    className: 'min-w-screen flex '.concat(
                      t ? 'flex-row-reverse justify-between' : 'flex-col',
                      ' items-center min-h-screen'
                    ),
                    children: [
                      (0, i.jsx)('div', {}),
                      (0, i.jsx)('div', {
                        className: 'h-7/12 '.concat(
                          t ? 'w-5/12 -translate-y-11' : 'w-11/12'
                        ),
                        children: (0, i.jsx)(a.default, {
                          src: s,
                          alt: 'Profile picture',
                        }),
                      }),
                      (0, i.jsxs)(c.Z, {
                        animate: !0,
                        children: [
                          (0, i.jsx)('div', {
                            className: 'text-2xl font-light',
                            children: 'Hello, I am',
                          }),
                          (0, i.jsx)('div', {
                            className: 'text-8xl font-extrabold',
                            children: 'Ali',
                          }),
                          (0, i.jsx)('div', {
                            className: 'text-8xl font-extrabold',
                            children: 'Ataf',
                          }),
                          (0, i.jsx)('div', {
                            className: 'tracking-[5px] z-50 sm:tracking-[15px]',
                            children: (0, i.jsx)('span', {
                              className: 'whitespace-nowrap',
                              children: 'Frontend Developer',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
        });
      }
    },
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 5301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
