(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [245],
  {
    12016: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/notes/[id]",
        function () {
          return n(34479);
        },
      ]);
    },
    82373: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return A;
        },
      });
      var r = n(28520),
        i = n.n(r),
        o = n(85893),
        a = n(4604),
        c = n(71230),
        u = n(15746),
        l = n(96486),
        s = n.n(l),
        d = n(67294),
        f = n(42336),
        v = n(41664),
        h = n(99490);
      function p(t) {
        var e,
          n,
          r,
          i = t.note,
          a = t.noteIndex,
          c = (0, f.gt)({ note: i, noteIndex: a });
        try {
          e = s().get(i, "custom.date", !1)
            ? ((n = i.custom.date),
              (r = h.DateTime.DATE_SHORT),
              h.DateTime.fromISO(n).toLocaleString(r))
            : (function (t, e) {
                return h.DateTime.fromMillis(t).toLocaleString(e);
              })(i.created, h.DateTime.DATE_SHORT);
        } catch (u) {
          throw Error("no date found for note ".concat(i.id));
        }
        return (0, o.jsx)("div", {
          children: (0, o.jsxs)("article", {
            itemScope: !0,
            itemType: "https://schema.org/CreativeWork",
            children: [
              (0, o.jsx)("h2", {
                itemProp: "headline",
                children: (0, o.jsx)(v.default, { href: c, children: i.title }),
              }),
              !s().isUndefined(e) && (0, o.jsx)("p", { children: e }),
              s().has(i, "custom.excerpt") &&
                (0, o.jsx)("p", {
                  itemProp: "description",
                  children: i.custom.excerpt,
                }),
            ],
          }),
        });
      }
      var m = n(9008),
        x = n(25935);
      function g(t) {
        var e = t.content,
          n = (0, x.ZP)(e);
        return (0, o.jsx)(m.default, { children: n });
      }
      var y = n(25903),
        j = n(2962),
        b = n(1512),
        w = function (t) {
          return y.Time.DateTime.fromMillis(s().toInteger(t))
            .setZone("utc")
            .toLocaleString("yyyy-LL-dd");
        };
      function O(t) {
        var e = t.note,
          n = t.config,
          r = (0, b.vm)().router.asPath;
        if (
          s().some(["403"], function (t) {
            return r === "/notes/".concat(t, "/");
          })
        )
          return null;
        var i,
          a = y.PublishUtils.getSEOPropsFromConfig(n),
          c = y.PublishUtils.getSEOPropsFromNote(e),
          u = s().defaults(c, a),
          l = u.title,
          d = u.excerpt,
          v = (null === u || void 0 === u ? void 0 : u.image) ? [u.image] : [],
          h = (function (t) {
            var e = t.sitePath,
              n = t.seoProps,
              r = t.siteConfig;
            return n.canonicalBaseUrl
              ? [r.siteUrl, e].join("")
              : n.canonicalUrl
              ? n.canonicalUrl
              : [
                  r.canonicalBaseUrl ? r.canonicalBaseUrl : (0, f.N0)(r),
                  e,
                ].join("");
          })({ sitePath: r, seoProps: u, siteConfig: n.site }),
          p = u.twitter
            ? {
                handle: u.twitter,
                site: u.twitter,
                cardType: "summary_large_image",
              }
            : void 0;
        return (0, o.jsx)(j.PB, {
          title: l,
          description: d,
          canonical: h,
          noindex: u.noindex,
          twitter: p,
          openGraph: {
            title: l,
            description: d,
            url: h,
            images: v,
            type: "article",
            article: {
              publishedTime: w(u.created),
              modifiedTime: w(u.updated),
              tags:
                ((i = e),
                i.tags ? (Array.isArray(i.tags) ? i.tags : [i.tags]) : []),
            },
          },
        });
      }
      var P = n(57450),
        S = n(37802);
      function E(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              E(t, e, n[e]);
            });
        }
        return t;
      }
      function T(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function N(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = t[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (u) {
              (i = !0), (o = u);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var k = S.Z.Link,
        L = function (t) {
          t = (t = t.replace(/_/g, "-")).replace(/--/g, "-");
          var e = [];
          return (
            t.split("-").forEach(function (t) {
              e.push(t.substr(0, 1).toUpperCase() + t.substr(1));
            }),
            e.join(" ")
          );
        },
        I = function (t) {
          var e,
            n,
            r,
            i = t.note,
            a = T(t, ["note"]);
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(
              S.Z,
              _({ style: { zIndex: 1 } }, a, {
                children: [
                  Object.entries(
                    null === i || void 0 === i ? void 0 : i.anchors
                  ).map(function (t) {
                    var e = N(t, 2),
                      n = e[0],
                      i = e[1];
                    return "header" ===
                      (null === i || void 0 === i ? void 0 : i.type)
                      ? (0, o.jsx)(k, {
                          href: "#".concat(n),
                          title: L(
                            null !==
                              (r =
                                null === i || void 0 === i ? void 0 : i.text) &&
                              void 0 !== r
                              ? r
                              : null === i || void 0 === i
                              ? void 0
                              : i.value
                          ),
                        })
                      : (0, o.jsx)(o.Fragment, {});
                  }),
                  (null === i ||
                  void 0 === i ||
                  null === (e = i.links) ||
                  void 0 === e
                    ? void 0
                    : e.length) > 0 &&
                  (null === i || void 0 === i
                    ? void 0
                    : i.links.some(function (t) {
                        return "backlink" === t.type;
                      }))
                    ? (0, o.jsx)(k, { href: "#backlinks", title: "Backlinks" })
                    : (0, o.jsx)(o.Fragment, {}),
                  (null === i ||
                  void 0 === i ||
                  null === (n = i.children) ||
                  void 0 === n
                    ? void 0
                    : n.length) > 0
                    ? (0, o.jsx)(k, { href: "#children", title: "Children" })
                    : (0, o.jsx)(o.Fragment, {}),
                ],
              })
            ),
          });
        },
        U = n(54856),
        D = n(85416);
      function Z(t, e, n, r, i, o, a) {
        try {
          var c = t[o](a),
            u = c.value;
        } catch (l) {
          return void n(l);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, i);
      }
      function C(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = t[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (u) {
              (i = !0), (o = u);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var F = n(45875).b.HEADER;
      function A(t) {
        var e,
          n = t.note,
          r = t.body,
          l = t.collectionChildren,
          f = t.noteIndex,
          v = t.customHeadContent,
          h = t.config,
          m = (0, a.createLogger)("Note"),
          x = (0, b.vm)().getActiveNoteId,
          y = C(d.useState(void 0), 2),
          j = y[0],
          w = y[1],
          S = x();
        "root" === S && (S = f.id);
        var E = (0, U.$s)();
        (0, U.O5)(function (t) {
          return t.engine;
        });
        m.info({ ctx: "enter", id: S });
        (0, b.dD)().isMobile;
        d.useEffect(
          function () {
            if (
              (m.info({ ctx: "updateNoteBody:enter", id: S }),
              s().isUndefined(S))
            )
              m.info({
                ctx: "updateNoteBody:exit",
                id: S,
                state: "id undefined",
              });
            else {
              if (S === n.id)
                return (
                  E(D.w.Nw.setLoadingStatus(a.LoadingStatus.FULFILLED)),
                  void m.info({
                    ctx: "updateNoteBody:exit",
                    id: S,
                    state: "id = note.id",
                  })
                );
              var t;
              m.info({ ctx: "updateNoteBody:fetch:pre", id: S }),
                fetch("wiki/data/notes/".concat(S, ".html")).then(
                  ((t = i().mark(function t(e) {
                    var n;
                    return i().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              m.info({
                                ctx: "updateNoteBody:fetch:post",
                                id: S,
                              }),
                              (t.next = 3),
                              e.text()
                            );
                          case 3:
                            (n = t.sent),
                              w(n),
                              E(
                                D.w.Nw.setLoadingStatus(
                                  a.LoadingStatus.FULFILLED
                                )
                              );
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (r, i) {
                      var o = t.apply(e, n);
                      function a(t) {
                        Z(o, r, i, a, c, "next", t);
                      }
                      function c(t) {
                        Z(o, r, i, a, c, "throw", t);
                      }
                      a(void 0);
                    });
                  })
                );
            }
          },
          [S]
        );
        var _ = S === n.id ? r : j;
        if (s().isUndefined(_)) return (0, o.jsx)(P.Z, {});
        var T =
          (null === (e = n.custom) || void 0 === e
            ? void 0
            : e.has_collection) && !s().isNull(l)
            ? l.map(function (t) {
                return p({ note: t, noteIndex: f });
              })
            : null;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(O, { note: n, config: h }),
            v && (0, o.jsx)(g, { content: v }),
            (0, o.jsx)(c.Z, {
              children: (0, o.jsx)(u.Z, {
                span: 24,
                children: (0, o.jsxs)(c.Z, {
                  gutter: 20,
                  children: [
                    (0, o.jsxs)(u.Z, {
                      xs: 24,
                      md: 20,
                      children: [
                        (0, o.jsx)(a.DendronNote, {
                          noteContent: _,
                          config: h,
                        }),
                        T,
                      ],
                    }),
                    (0, o.jsx)(u.Z, {
                      xs: 0,
                      md: 4,
                      children: (0, o.jsx)(I, { note: n, offsetTop: F.HEIGHT }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    34479: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return i;
          },
        });
      var r = n(82373),
        i = !0;
      e.default = r.Z;
    },
  },
  function (t) {
    t.O(0, [155, 774, 888, 179], function () {
      return (e = 12016), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
