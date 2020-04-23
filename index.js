/*! load-js v3.0.3 - Wed Apr 22 2020 16:55:50 GMT-0400 (Eastern Daylight Time). (c) 2020 Miguel Castillo <manchagnu@gmail.com>. Licensed under MIT */
!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).loadJS = e()
    }
}(function () {
    return require = _bb$iter = function (e, r) {
        var t = {};

        function n(r) {
            if (!t.hasOwnProperty(r)) {
                var a = {exports: {}}, i = e[r][0], d = e[r][1];
                t[r] = a.exports, i((u = d, function (e) {
                    var r = u[e];
                    if (o(r)) return n(r);
                    for (var t = n.next; t; t = t.next) if (t.has(r)) return t.get(r);
                    for (var a = n.prev; a; a = a.prev) if (a.has(r)) return a.get(r);
                    throw new Error("Module '" + e + "' with id " + r + " was not found")
                }), a, a.exports), t[r] = a.exports
            }
            var u;
            return t[r]
        }

        function o(r) {
            return e[r]
        }

        if (n.get = n, n.has = o, n.next = "undefined" == typeof _bb$iter ? null : _bb$iter, r.length) for (var a = n, i = n.next; i;) i.prev = a, a = i, i = i.next;
        return r.forEach(n), n
    }({
        1: [function (e, r, t) {
            var n = {};

            function o() {
                var e = document.getElementsByTagName("head")[0] || document.documentElement;

                function r(r) {
                    if ("string" == typeof r && (r = {
                        url: r, id: function (e) {
                            for (var r = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = t.length, o = 0; o < e; o++) r += t.charAt(Math.floor(Math.random() * n));
                            return r
                        }(8), debug: !1
                    }), !r.id) throw new Error("load-js: must provide a id for load js");
                    var t = r.id, o = n[t];
                    if (o) return r.debug && console.log("load-js: cache hit", t), o;
                    if (!1 !== r.allowExternal) {
                        var a = function (e) {
                            var r = e && document.getElementById(e);
                            if (r && "watermark" !== r.loadJS) return console.warn("load-js: duplicate script with id:", e), r
                        }(r.id) || function (e) {
                            var r = e && document.querySelector("script[src='" + e + "']");
                            if (r && "watermark" !== r.loadJS) return console.warn("load-js: duplicate script with url:", e), r
                        }(r.url);
                        if (a) {
                            var i = Promise.resolve(a);
                            return t && (n[t] = i), i
                        }
                    }
                    if (!r.url && !r.text) throw new Error("load-js: must provide a url or text to load");
                    var d = (r.url ? function (e, r) {
                        return new Promise(function (t, n) {
                            var o = !1;
                            r.onload = r.onreadystatechange = function () {
                                o || r.readyState && "loaded" !== r.readyState && "complete" !== r.readyState || (o = !0, r.onload = r.onreadystatechange = null, t(r))
                            }, r.onerror = n, e.appendChild(r)
                        })
                    } : function (e, r) {
                        return e.appendChild(r), Promise.resolve(r)
                    })(e, function (e) {
                        var r = document.createElement("script");
                        r.charset = e.charset || "utf-8", r.type = e.type || "text/javascript", r.async = !!e.async, r.id = e.id || e.url, r.loadJS = "watermark", e.url && (r.src = e.url);
                        e.text && (r.text = e.text);
                        return r
                    }(r));
                    return t && !1 !== r.cache && (n[t] = d), d
                }

                return function (e) {
                    return e instanceof Array ? Promise.all(e.map(r)) : r(e)
                }
            }

            r.exports = o(), r.exports.create = o, r.exports.unload = function () {
                function e(e) {
                    if ("string" == typeof e && (e = {id: e}), !e.id) throw new Error("load-js: must provide a id or array ids to unload");
                    return Array.prototype.slice.call(document.querySelectorAll(`script[id="${e.id}"]`)).forEach(e => {
                        delete n[e.id], console.log("deleted cache " + e.id), e.parentNode.removeChild(e)
                    }), !0
                }

                return function (r) {
                    return r instanceof Array ? r.map(e) : e(r)
                }
            }
        }, {}]
    }, [1]), _bb$iter(1)
});
//# sourceMappingURL=index.js.map
