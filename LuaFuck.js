! function(t) { // Yeetret#5359
    function e(t) {
        const e = [];
        for (let n = t - 1; n > 1; n--) t % n == 0 && e.push(n);
        return e
    }(typeof exports === "undefined" ? window : exports).LuaFuck = {
        encode: function t(n, o = !1) {
            let r;
            r = o ? n.split("") : n.match(/\d+|./g);
            let s = "";
            for (const n of r) {
                if ("0" === n) s += "#{}";
                else if (parseInt(n)) {
                    const o = e(n);
                    if (1 === n.length) s += "#'" + (".".repeat(n) + "'");
                    else if (o.length > 0) {
                        const e = o[(i = 0, f = o.length - 1, Math.floor(Math.random() * (f - i + 1) + i))];
                        s += "(" + t(e.toString(), !0) + ")*(" + t((n / e).toString(), !0) + ")"
                    } else s += t(n, !0)
                } else s += "_(" + t(n.charCodeAt(0).toString()) + ")";
                s += ".."
            }
            var i, f;
            return s.substring(0, s.length - 2)
        }
    }
}();
