! function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requiert une fenêtre avec un document");
		return b(a)
	} : b(a)
}("undefined"! = typeof window ? window : this, function (a, b) {
		var c = [],
			d = c.slice,
			e = c.concat,
			f = c.push,
			g = c.indexOf,
			h = {},
			i = h.toString,
			j = h.hasOwnProperty,
			k = " ".trim,
			l = {},
			m = a.document,
			n = " 2.1.0 ",
			o = function (a, b) {
				return new o.fn.init(a, b)
			},
			p = / ^ -ms - /,
			q = / - ([\ da-z]) /
		gi, r = function (a, b) {
			return b.toUpperCase()
		};
		o.fn = o.prototype = {
			jquery: n,
			constructeur: o,
			sélecteur: "",
			longueur: 0,
			toArray: function () {
				return d.call(this)
			},
			get: function (a) {
				return null! = a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
			},
			pushStack: function (a) {
				var b = o.merge(this.constructor(), a);
				return b.prevObject = this, b.context = ceci.context, b
			},
			each: function (a, b) {
				return o.each(this, a, b)
			},
			map: function (a) {
				return this.pushStack(o.map(this, function (b, c)) {
					return a.call(b, c, b)
				}))
		}, slice: function () {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (a) {
			var b = this.length,
				c = +a + (0 > a ? B : 0);
			return this.pushStack(c > = 0 && b > c ? [this[c]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: f,
		sort: c.sort,
		splice: c.splice
	}, o.extend = o.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.longueur,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || o.isFunction(g) || (g = {}), h === i && (g = this, h - ); i > h; h++)
			if (null! = (a = arguments[h])) pour(b dans a) c = g[b], d = a[b], g! == d && (j && d && (o.isPlainObject(d) || (e = o.isArray(d))) ? (e ? (e = !1, f = c && o.isArray(c) ? c : []) : f = c && o.isPlainObject(c) ? c : {}, g[b] = o.extend(j, f, d)) : void 0! == d && (g[b] = d));
		return g
	}, o.extend({
		expando: "jQuery" + (n + Math.random()).replace(/ \ D /
			g, ""),
		isReady: !0,
		error: function (a) {
			throw new Error(a)
		},
		noop: function () {},
		isFunction: function (a) {
			return "function" === o.type(a)
		},
		isArray: Array.isArray,
		isWindow: function (a) {
			return null! = a && a === a.window
		},
		isNumeric: function (a) {
			return a - parseFloat(a) > = 0
		},
		isPlainObject: function (a) {
			if ("object"! == o.type(a) || a.nodeType || o.isWindow(a)) return !1;
			try {
				if (a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (b) {
				return !1
			}
			return !0
		},
		isEmptyObject: function (a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		tapez: function (a) {
			return null == a ? a + "" : "object " == typeof a || " function " == typeof a ? h[i.call(a)] || " object " : typeof a
		},
		globalEval: function (a) {
			var b, c = eval;
			a = o.trim(a), a && (1 === a.indexOf("use strict") ? (b = m.createElement("script"), b.text = a, m.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase: function (a) {
			return a.replace(p, "ms -").replace(q, r)
		},
		nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		chacun: function (a, b, c) {
			var d, e = 0,
				f = a.length,
				g = s(a);
			if (c) {
				if (g) {
					for (; f > e; e++)
						if (d = b.apply(a[e], c), d === !1) break
				} else
					for (e dans a)
						if (d = b.apply(a[e], c), d === !1) break
			} else if (g) {
				for (; f > e; e++)
					if (d = b.call(a[e], e, a[e]), d === !1) break
			} else
				for (e dans a)
					if (d = b.call(a[e], e, a[e]), d === !1) break; return a
		},
		trim: function (a) {
			return null == a ? "" : k.call(a)
		},
		makeArray: function (a, b) {
			var c = b || [];
			renvoie null != a && (s(Object(a)) ? o.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		},
		inArray: function (a, b, c) {
			return null == b ? -1 : g.call(b, a, c)
		},
		merge: function (a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
			return a.length = e, a
		},
		grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.longueur, h = !c; g > f; f++) d = !b(a[f], f), d! == h && e.push(a[f]);
			return e
		},
		map: function (a, b, c) {
			var d, f = 0,
				g = a.length,
				h = s(a),
				i = [];
			if (h)
				for (; g > f; f++) d = b(a[f], f, c), nul! = d && i.push(d);
			sinon pour(f dans a) d = b(a[f], f, c), nul! = d && i.push(d);
			return e.apply([], i)
		},
		guid: 1,
		proxy: function (a, b) {
			var c, e, f;
			return "string" == typeof b && (c = a[b], b = a, a = c), o.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
				return a.apply(b || this, e.concat(d.call(arguments)))
			}, f.guid = a.guid = a.guid || o.guid++, f) : void 0
		},
		maintenant: Date.now,
		support: l
	}), o.chaque("Boolean Number String Function Array Date RegExp Object Error ".split(" "), function (a, b) {
		h[" [object " + b + "] "] = b.toLowerCase()
	});

	function s(a) {
		var b = a.length,
			c = o.type(a);
		return "function" === c || o.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "tableau " === c || 0 === b || " nombre " == type de b && b > 0 && b - 1 dans a
	}
	var t = fonction(a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "grésillement" + -nouvelle date,
			t = a.document,
			u = 0,
			v = 0,
			w = eb(),
			x = eb(),
			y = eb(),
			z = function (a, b) {
				return a === b && (j = !0), 0
			},
			A = "indéfini",
			B = 1 << 31,
			C = {}.HasOwnProperty,
			D = [],
			E = D.pop,
			F = D.push,
			G = D.push,
			H = D.slice,
			I = D.indexOf || function (a) {
				for (var b = 0, c = this.length; c > b; b++)
					if (this[b] === a) return b;
				return -1
			},
			J = "coché | sélectionné | asynchrone | autofocus | lecture automatique | contrôles | différer | désactivé | masqué | ismap | boucle | multiple | ouvert | lecture seule | requis | étendue ",
			K = " [\\ x20 \\ t \\ r \\ n \ \ f] ",
			L = " (?: \\\\. | [\\ w-] | [^ \\ x00 - \\ xa0]) + ",
			M = L.replace(" w ", " w # "),
			N = " \\ [" + K + " * (" + L + ") " + K + " * (?: ([* ^ $ |! ~]? =) " + K + " * (? :( ['\ "])(( ? : \\\\. | [ ^ \\\\]) * ? )\\ 3 | (" + M + ") | ) | )
" + K + " * \\]
" , O = ": (" + L + ")( ? : \\(((['\"]) ((?: \\\\. | [^ \\\\]) *?) \\ 3 | ((?: \\\\. | [^ \\\\ () [\\]] | "+ N.replace (3,8) +") *) |. *) \\) |) ", P = new RegExp ("^" + K + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + K + "+ $", "g") , Q = new RegExp ("^" + K + "*," + K + "*"), R = new RegExp ("^" + K + "* ([> + ~] |" + K + ")" + K + " * "), S = new RegExp (" = "+ K + "* ([^ \\] '\
					"] *?) " + K + " * \\] ", " g "), T = new RegExp(O), U = new RegExp(" ^ " + M + "$"), V = {
					ID: nouveau RegExp("^ # (" + L + ")"),
					CLASS: nouveau RegExp("^ \\. (" + L + ")"),
					TAG: nouveau RegExp(" ^ (" + L.replace(" w ", " w * ") + ") "),
					ATTR: new RegExp(" ^ " + N),
					PSEUDO: new RegExp(" ^ " + O),
					CHILD: new RegExp("^ :( seulement | premier | dernier | nième | nième-dernier) - (enfant | de-type) (?: \\ (" + K + "* (pair | impair | (([+ -] |) (\\ d *) n |) " + K + " * (?: ([+ -] |) " + K + " * (\\ d +) |)) " + K + " * \\) |) ", " i "),
					booléen: new RegExp(" ^ (?: " + J + ") $ ", " i "),
					needsContext: new RegExp(" ^ " + K + " * [> + ~] |: (pair | impair | eq | gt | lt | nième | premier | dernier) (?: \\ (" + K + " * ((?: - \\ d)? \\ d *) " + K + " * \\) |) ( ? = [^ -] | $) ", " i ")
				}, W = / ^ (?:input | select | textarea | button) $ /
				i, X = / ^ h \ d $ /
				i, Y = / ^ [^ {] + \ {\ s * \ [natif \ w /, Z = / ^ (? : # ([\ w -] +) | (\ w +) | \. ([\ w -] +)) $ /, $ = / [+ ~] /, _ = / '| \\ /
				g, ab = new RegExp("\\\\ ([\\ da-f] {1,6}" + K + "? | (" + K + ") |.)", "ig"), bb = fonction(a, b, c) {
					var d = "0x" + b - 65536;
					retourne d! == d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
				}; essayez {
					G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
				} catch (cb) {
					G = {
						apply: D.length ? Function(a, b) {
							F.apply(a, H.call(b))
						} : function (a, b) {
							var c = a.length,
								d = 0;
							while (a[c++] = b[d++]);
							a.length = c - 1
						}
					}
				}
				fonction db(a, b, d, e) {
					var f, g, h, i, j, m, p, q, u, v;
					if ((b ? b.ownerDocument || b : t)! == l && k(b), b = b || l, d = d || [], !a || "chaîne"! = type de a) return d;
					if (1! == (i = b.nodeType) && 9! == i) return [];
					if (n && !e) {
						if (f = Z.exec(a))
							if (h = f[1]) {
								si(9 === i) {
									si(g = b.getElementById(h), !g || !g.parentNode) return d;
									if (g.id === h) return d.push(g), d
								} else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) retourne d.push(g), d
							} else {
								if (f[2]) retourne G.apply(d, b.getElementsByTagName(a)), d;
								if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) renvoie G.apply(d, b.getElementsByClassName(h)), d
							}
						if (c.qsa && (!o || !o.test(a))) {
							if (q = p = s, u = b, v = 9 === i && a, 1 === i && "objet"! == b.nodeName.toLowerCase()) {
								m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\ $ &") : b.setAttribute("id", q), q = "[id = '" + q + "'] ", j = m.longueur;
								while (j - ) m[j] = q + pb(m[j]);
								u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
							}
							if (v) try {
								return G.apply(d, u.querySelectorAll(v)), d
							} catch (w) {}
							enfin {
								p || b.removeAttribute("id")
							}
						}
					}
					return xb(a.replace(P, "$ 1"), b, d, e)
				}

				function eb() {
					var a = [];

					function b(c, e) {
						return a.push(c + "") > d.cacheLength && delete b[a.shift()], b[c + ""] = e
					}
					return b
				}

				function fb(a) {
					return a[s] = !0, a
				}

				function gb(a) {
					var b = l.createElement("div");
					try {
						return !!a(b)
					} catch (c) {
						return !1
					} finally {
						b.parentNode && b.parentNode.removeChild(b), b = null
					}
				}
				fonction hb(a, b) {
					var c = a.split("|"),
						e = a.length;
					while (e - ) d.attrHandle[c[e]] = b
				}
				fonction ib(a, b) {
					var c = b && a,
						d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
					if (d) return d;
					if (c)
						while (c = c.nextSibling)
							if (c === b) return -1;
					return a ? 1 : -1
				}

				function jb(a) {
					return function (b) {
						var c = b.nodeName.toLowerCase();
						renvoie "input" === c && b.type === a
					}
				}

				function kb(a) {
					return function (b) {
						var c = b.nodeName.toLowerCase();
						return ("input" === c || "button" === c) && b.type === a
					}
				}

				function lb(a) {
					return fb(function (b) {
						return b = +b, fb(function (c, d) {
							var e, f = a([], c.length, b),
								g = f.longueur;
							tandis que(g - ) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
						})
					})
				}

				function mb(a) {
					retourne un && typeof a.getElementsByTagName! == A && a
				}
				c = db.support = {}, f = db.isXML = function (a) {
					var b = a && (a.ownerDocument || a).documentElement;
					return b ? "HTML"! == b.nodeName : !1
				}, k = db.setDocument = function (a) {
					var b, e = a ? a.ownerDocument || a : t,
						g = e.defaultView;
					return e! == l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g! == g.top && (g.addEventListener ? g.addEventListener("unload", function () {
						k()
					}, !1) : g.attachEvent && g.attachEvent("onunload", function () {
						k()
					})), c.attributes = gb(function (a) {
						return a.className = "i", !a.getAttribute("className")
					}), c.getElementsByTagName = gb(function (a) {
						return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
					}), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(fonction(a) {
						return a.innerHTML = "<div class = 'a'> </div> <div class = 'a i'> </div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
					}), c.getById = gb(function (a) {
						return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
					}), c.getById ? (d.find.ID = function (a, b) {
						if (typeof b.getElementById! == A && n) {
							var c = b.getElementById(a);
							return c && c.parentNode ? [c] : []
						}
					}, d.filter.ID = function (a) {
						var b = a.replace(ab, bb);
						return function (a) {
							return a.getAttribute("id") === b
						}
					}) : (delete d.find.ID, d.filter.ID = function (a) {
						var b = a.replace(ab, bb);
						return function (a) {
							var c = typeof a.getAttributeNode! == A && a.getAttributeNode("id");
							return c && c.value === b
						}
					}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
						return typeof b.getElementsByTagName! == A ? b.getElementsByTagName(a) : void 0
					} : function (a, b) {
						var c, d = [],
							e = 0,
							f = b.getElementsByTagName(a);
						if ("*" === a) {
							while (c = f[e++]) 1 === c.nodeType && d.push(c);
							return d
						}
						return f
					}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
						return typeof b.getElementsByClassName! == A && n ? B.getElementsByClassName(a) : void 0
					}, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(fonction(a) {
						a.innerHTML = "<select t = ''> <option selected = ''> </option> </ select> ", a.querySelectorAll(" [t ^ = ''] ").length && o.push(" [* ^ $] = " + K + " * (?: '' | \ "\
							") "), a.querySelectorAll("[selected]").length || o.push("\\ [" + K + "* (?: value |" + J + ")"), a.querySelectorAll(": checked").length || o.push(": checked")
					}), gb(function (a) {
						var b = e.createElement("input");
						b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("nom", "D"), a.querySelectorAll("[nom = d]").length && o.push("nom" + K + "* [* ^ $ |! ~]? ="), a.querySelectorAll(": enabled").length || o.push(": enabled", ": disabled"), a.querySelectorAll("* ,: x"), o.push(",. * : ")
					})), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(fonction(a) {
						c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s! = '']: x "), p.push("! = ", O)
					}), o = o.length && new RegExp(o.join(" | ")), p = p.length && new RegExp(p.join(" | ")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) {
						var c = 9 === a.nodeType ? a.documentElement : a,
							d = b && b.parentNode;
						return a === d || !(!d || 1! == d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
					} : function (a, b) {
						if (b)
							while (b = b.parentNode)
								if (b === a) return !0;
						return !1
					}, z = b ? function (a, b) {
						if (a === b) return j = !0, 0;
						var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
						return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
					} : function (a, b) {
						if (a === b) retourne j = !0, 0;
						var c, d = 0,
							f = a.parentNode,
							g = b.parentNode,
							h = [a],
							k = [b];
						if (!f || !g) renvoie a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
						if (f === g) renvoie ib(a, b);
						c = a;
						while (c = c.parentNode) h.unshift(c);
						c = b;
						while (c = c.parentNode) k.unshift(c);
						while (h[d] === k[d]) d++;
						return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
					}, e) : l
				}, db.matches = function (a, b) {
					return db(a, null, null, b)
				}, db.matchesSelector = function (a, b) {
					if ((a.ownerDocument || a)! == l && k(a), b = b.replace(S, "= '$ 1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
						var d = q.call(a, b);
						if (d || c.disconnectedMatch || a.document && 11! == a.document.nodeType) return d
					} catch (e) {}
					return db(b, l, null, [a]).length > 0
				}, db.contains = function (a, b) {
					return (a.ownerDocument || a)! == l && k(a), r(a, b)
				}, db.attr = function (a, b) {
					(a.ownerDocument || a)! == l && k(a);
					var e = d.attrHandle[b.toLowerCase()],
						f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
					return void 0! == f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
				}, db.error = function (a) {
					throw new Error("Erreur de syntaxe, expression non reconnue: " + a)
				}, db.uniqueSort = function (a) {
					var b, d = [],
						e = 0,
						f = 0;
					if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
						while (b = a[f++]) b === a[f] && (e = d.push(f));
						while (e--) a.splice(d[e], 1)
					}
					return i = null, a
				}, e = db.getText = function (a) {
					var b, c = "",
						d = 0,
						f = a.nodeType;
					if (f) {
						if (1 === f || 9 === f || 11 === f) {
							if ("string" == typeof a.textContent) return a.textContent;
							for (a = a.firstChild; a; a = a.nextSibling) c + = e(a)
						} else if (3 === f || 4 === f) return a.nodeValue
					} else
						while (b = a[d++]) c + = e(b);
					return c
				}, d = db.selectors = {
					cacheLength: 50,
					createPseudo: fb,
					match: V,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						"": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						" ~ ": {
							dir: " previousSibling "
						}
					},
					preFilter: {
						ATTR: function (a) {
							return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~ =" === a[2] && (a[3] = "" + a[3] + ""), a.slice(0, 4)
						},
						CHILD: function (a) {
							renvoie a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" = == a[3] || "impair" === a[3])), a[5] = +(a[7] + a[8] || "impair" === a[3])) : a[3] && db.error(a[0]), a
						},
						PSEUDO: function (a) {
							var b, c = !a[5] && a[2];
							return V.CHILD.test(a[0]) ? Null : (a[3] && void 0! == a[4] ? A[2] = a[4] : ​​c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
						}
					},
					filtre: {
						TAG: function (a) {
							var b = a.replace(ab, bb).toLowerCase();
							return "*" === a ? function () {
								return !0
							} : function (a) {
								return a.nodeName && a.nodeName.toLowerCase() === b
							}
						},
						CLASS: function (a) {
							var b = w[a + ""];
							return b || (b = new RegExp("(^ |" + K + ")" + a + "(" + K + "| $)")) && w(a, fonction(a) {
								return b.test("string" == typeof a.className && a.className || typeof a.getAttribute! == A && a.getAttribute("class") || "")
							})
						},
						ATTR: function (a, b, c) {
							return function (d) {
								var e = db.attr(d, a);
								return null == e ? "! =" === b : b ? (e + = "", "=" === b ? e === c : "! =" === b ? e! == c : "^ =" === b ? c && 0 === e.indexOf(c) : "* =" === b ? c && e.indexOf(c) > -1 : "$ =" === b ? c && e.slice(-c.length) === c : "~ =" === b ? ("" + e + " ").indexOf(c) > -1 : " | = " === b ? e === c || e.slice(0, c.length + 1) === c + " - " : !1) : !0
							}
						},
						ENFANT: function (a, b, c, d, e) {
							var f = "nth"! == a.slice(0, 3),
								g = "last"! == a.slice(-4),
								h = "of-type" === b;
							return 1 === d && 0 === e ? Function(a) {
								return !!a.parentNode
							} : function (b, c, i) {
								var j, k, l, m, n, o, p = f! == g ? "nextSibling" : "previousSibling",
									q = b.parentNode,
									r = h && b.nodeName.toLowerCase(),
									t = !i && !h;
								if (q) {
									if (f) {
										while (p) {
											l = b;
											while (l = l[p])
												if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
											o = p = "only" === a && !o && "nextSibling"
										}
										return !0
									}
									if (o = [g ? q.firstChild : q.lastChild], g && t) {
										k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
										while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
											if (1 === l.nodeType && ++m && l === b) {
												k[a] = [u, n, m];
												break
											}
									} else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
									else
										while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
											if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break; return m - = e, m === d || m % d === 0 && m / d > = 0
								}
							}
						},
						PSEUDO: fonction(a, b) {
							var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("pseudo non pris en charge:" + a);
							renvoie e[s] ? e(b) : e.longueur > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) {
								var d, f = e(a, b),
									g = f.length;
								while (g - ) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
							}) : function (a) {
								return e(a, 0, c)
							}) : e
						}
					},
					pseudos: {
						not: fb(function (a) {
							var b = [],
								c = [],
								d = g(a.replace(P, "$ 1"));
							return d[s] ? fb(function (a, b, c, e) {
								var f, g = d(a, nul, e, []),
									h = a.longueur;
								tandis que(h - )(f = g[h]) && (a[h] = !(b[h] = f))
							}) : function (a, e, f) {
								return b[0] = a, d(b, null, f, c), !c.pop()
							}
						}),
						a: fb(function (a) {
							return function (b) {
								return db(a, b).length > 0
							}
						}),
						contient: fb(function (a) {
							return function (b) {
								return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
							}
						}),
						lang: fb(function (a) {
							return U.test(a || "") || db.error("unsupported lang:" + a), a = a.replace(ab, bb).toLowerCase(),
								function (b) {
									var c;
									do
										if (c = n ? b.lang : b.getAttribute(" xml: lang ") || b.getAttribute(" lang ")) renvoie c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
									while ((b = b.parentNode) && 1 === b.nodeType);
									return !1
								}
						}),
						cible: fonction(b) {
							var c = a.location && a.location.hash;
							return c && c.slice(1) === b.id
						},
						root: function (a) {
							return a === m
						},
						focus: function (a) {
							return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
						},
						activé: function (a) {
							return a.disabled === !1
						},
						désactivé: function (a) {
							return a.disabled === !0
						},
						vérifié: function (a) {
							var b = a.nodeName.toLowerCase();
							return "input" === b && !!a.checked || " option " === b && !!a.selected
						},
						sélectionné: function (a) {
							return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
						},
						vide: function (a) {
							for (a = a.firstChild; a; a = a.nextSibling)
								if (a.nodeType < 6) return !1;
							return !0
						},
						parent: function (a) {
							return !d.pseudos.empty(a)
						},
						en - tête: function (a) {
							return X.test(a.nodeName)
						},
						entrée: function (a) {
							return W.test(a.nodeName)
						},
						bouton: function (a) {
							var b = a.nodeName.toLowerCase();
							return "input" === b && "button" === a.type || "button" === b
						},
						texte: function (a) {
							var b;
							return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
						},
						premier: lb(function () {
							return [0]
						}),
						dernier: lb(function (a, b) {
							return [b - 1]
						}),
						eq: lb(fonction(a, b, c) {
							return [0 > c ? c + b : c]
						}),
						pair: lb(fonction(a, b) {
							for (var c = 0; b > c; c + = 2) a.push(c);
							return a
						}),
						odd: lb(function (a, b) {
							for (var c = 1; b > c; c + = 2) a.push(c);
							return a
						}),
						lt: lb(function (a, b, c) {
							for (var d = 0 > c ? c + b : c; - d > = 0;) a.push(d);
							return a
						}),
						gt: lb(function (a, b, c) {
							for (var d = 0 > c ? C + b : c; ++d < b;) a.push(d);
							return a
						})
					}
				}, d.pseudos.nth = d.pseudos.eq;
				for (b dans {
					radio: !0,
				case à cocher:
					!0,
					fichier: !0,
					mot de passe: !0,
					image: !0
				}) d.pseudos[b] = jb(b);
				for (b in {
					submit: !0,
					reset: !0
				}) d.pseudos[b] = kb(b);

				function nb() {}
				nb.prototype = d.filters = d.pseudos, d.setFilters = nouveau nb; fonction ob(a, b) {
					var c, e, f, g, h, i, j, k = x[a + " "];
					if (k) renvoie b ? 0 : k.slice(0);
					h = a, i = [], j = d.preFilter;
					while (h) {
						(!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
							valeur: c,
							type: e[0].replace(P, "")
						}), h = h.slice(c.length));
						pour(g dans d.filtre)!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
							valeur: c,
							type: g,
							correspond à: e
						}), h = h.slice(c.length));
						if (!c) break
					}
					return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
				}
				fonction pb(a) {
					for (var b = 0, c = a.length, d = ""; c > b; b++) d + = a[b].value;
					retourne d
				}
				fonction qb(a, b, c) {
					var d = b.dir,
						e = c && "parentNode" === d,
						f = v++;
					retourne b.first ? function (avant JC, f) {
						while (b = b[d])
							if (1 === b.nodeType || e) retourne a(b, c, f)
					} : function (b, c, g) {
						var h, i, j = [u, f];
						if (g) {
							while (b = b[d])
								if ((1 === b.nodeType || e) && a(b, c, g)) return !0
						}
						autre
						while (b = b[d])
							if (1 === b.nodeType || e) {
								if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) renvoie j[2] = h[2];
								if (i[d] = j, j[2] = a(b, c, g)) return !0
							}
					}
				}

				function rb(a) {
					return a.length > 1 ? function (b, c, d) {
						var e = a.length;
						while (e - )
							if (!a[e](b, c, d)) return !1;
						return !0
					} : a[0]
				}
				fonction sb(a, b, c, d, e) {
					for (var f, g = [], h = 0, i = a.longueur, j = null! = b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
					retourne g
				}
				fonction tb(a, b, c, d, e, f) {
					retourne d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(fonction(f, g, h, i) {
						var j, k, l, m = [],
							n = [],
							o = g.longueur,
							p = f || wb(b || "*", h.nodeType ? [h] : h, []),
							q = !a || !f && b ? p : sb(p, m, a, h, i),
							r = c ? e || (f ? a : o || d) ? [] : g : q;
						si(c && c(q, r, h, i), d) {
							j = sb(r, n), d(j, [], h, i), k = j.longueur;
							tandis que(k - )(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
						}
						si(f) {
							si(e || a) {
								si(e) {
									j = [], k = r.longueur;
									while (k - )(l = r[k]) && j.push(q[k] = l);
									e(nul, r = [], j, i)
								}
								k = r.length;
								while (k - )(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
							}
						}
						sinon r = sb(r === g ? r.splice(o, r.length) : r), e ? e(nul, g, r, i) : G.apply(g, r)
					})
				}
				fonction ub(a) {
					for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[""], j = g ? 1 : 0, k = qb(function (a) {
						return a === b
					}, i, !0), l = qb(function (a) {
						return I.call(b, a) > -1
					}, i, !0), m = [fonction(a, c, d) {
						retour!g && (d || c! == h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
					}]; f > j; j++)
						if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
						else {
							if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
								pour(e = ++j; f > e; e++) if (d.relative[a[e].type]) break;
								renvoie tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
									valeur: "" === a[j - 2].type ? "*" : ""
								})).replace(P, "$ 1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
							}
							m.push(c)
						}
					return rb(m)
				}
				fonction vb(a, b) {
					var c = b.longueur > 0,
						e = a.longueur > 0,
						f = fonction(f, g, i, j, k) {
							var m, n, o, p = 0,
								q = "0",
								r = f && [],
								s = [],
								t = h,
								v = f || e && d.find.TAG("*", k),
								w = u + = null == t ? 1 : Math.random() || .1,
								x = v.length;
							for (k && (h = g! == l && g); q! == x && null! = (M = v[q]); q++) {
								if (e && m) {
									n = 0;
									while (o = a[n++])
										if (o(m, g, i)) {
											j.push(m);
											break
										}
									k && (u = w)
								}
								c​​ && ((m = !o && m) && p - , f && r.push(m))
							}
							if (p + = q, c && q! == p) {
								n = 0;
								while (o = b[n++]) o(r, s, g, i);
								if (f) {
									if (p > 0)
										while (q - ) r[q] || s[q] || (s[q] = E.call(j));
									s = sb(s)
								}
								G.apply(j, s), k && !f && s.longueur > 0 && p + b.length > 1 && db.uniqueSort(j)
							}
							return k && (u = w, h = t), r
						};
					return c ? fb(f) : f
				}
				g = db.compile = function (a, b) {
					var c, d = [],
						e = [],
						f = y[a + ""];
					if (!f) {
						b || (b = ob(a)), c = b.length;
						tandis que(c - ) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
						f = y(a, vb(e, d))
					}
					return f
				}; fonction wb(a, b, c) {
					for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
					renvoie c
				}
				fonction xb(a, b, e, f) {
					var h, i, j, k, l, m = ob(a);
					if (!f && 1 === m.longueur) {
						if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
							if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) renvoie e;
							a = a.slice(i.shift().Value.length)
						}
						h = V.needsContext.test(a) ? 0 : i.length;
						while (h - ) {
							if (j = i[h], d.relative[k = j.type]) break;
							if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
								if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
								break
							}
						}
					}
					return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
				}
				retourne c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function (a) {
					return 1 & a.compareDocumentPosition(l.createElement("div"))
				}), gb(function (a) {
					return a.innerHTML = "<a href='#'> </a>", "#" === a.firstChild.getAttribute("href")
				}) || hb("type | href | height | width", function (a, b, c) {
					return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
				}), c.attributes && gb(function (a) {
					return a.innerHTML = "<input />", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
				}) || hb("value ", function (a, b, c) {
					return c || " input "! == a.nodeName.toLowerCase() ? void 0 : a.defaultValue
				}), gb(function (a) {
					return null == a.getAttribute("disabled")
				}) || hb(J, function (a, b, c) {
					var d;
					return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
				}), db
			}(a); o.find = t, o.expr = t.selectors, o.expr[":"] = o.expr.pseudos, o.unique = t.uniqueSort, o.text = t.getText, o.isXMLDoc = t.isXML, o.contains = t.contains;
			var u = o.expr.match.needsContext, v = / ^ <(\ w +) \ s * \ / ?> ( ? : < \/ \ 1> |) $ /, w = / ^. [^: # \ [\.,] * $ /; fonction x(a, b, c) {
					if (o.isFunction(b)) return o.grep(a, function (a, d) {
						return !!b.call(a, d, a)! == c
					});
					if (b.nodeType) return o.grep(a, function (a) {
						return a === b! == c
					});
					if ("string" == typeof b) {
						if (w.test(b)) return o.filter(b, a, c);
						b = o.filter(b, a)
					}
					return o.grep(a, function (a) {
						return g.call(b, a) > = 0! == c
					})
				}
				o.filter = function (a, b, c) {
					var d = b[0];
					return c && (a = ": not (" + a + ")"), 1 === b.length && 1 === d.nodeType ? o.find.matchesSelector(d, a) ? [d] : [] : o.find.matches(a, o.grep(b, function (a) {
						return 1 === a.nodeType
					}))
				}, o.fn.extend({
					find: function (a) {
						var b, c = this.length,
							d = [],
							e = this;
						if ("string"! = typeof a) return this.pushStack(o(a).filter(function () {
							for (b = 0; c > b; b++)
								if (o.contains(e[b], this)) return !0
						}));
						for (b = 0; c > b; b++) o.find(a, e[b], d);
						return d = this.pushStack(c > 1 ? o.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
					},
					filtre: function (a) {
						retourne this.pushStack(x(this, a || [], !1))
					},
					pas: function (a) {
						retourne this.pushStack(x(this, a || [], !0))
					},
					est: function (a) {
						return !!x(this, "string" == typeof a && u.test(a) ? o(a) : a || [], !1).length
					}
				});
				var y, z = / ^ (?: \ S * (<[\ w \ W] +>) [^>] * | # ([\ w -] * )) $ /, A = o.fn.init = function (a, b) {
					var c, d;
					if (!a) return this;
					if ("string" == typeof a) {
						if (c = "<" === a[0] && "> " === a[a.length - 1] && a.length > = 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
						if (c[1]) {
							if (b = b instanceof o ? b[0] : b, o.merge(this, o.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : m, !0)), v.test(c[1]) && o.isPlainObject(b))
								for (c in b) o.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
							renvoyer this
						}
						return this
					}
					return d = m.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = m, this.selector = a, this
				}
				retourne a.nodeType ? (This.context = this[0] = a, this.length = 1, this) : o.isFunction(a) ? "undefined"! = typeof y.ready ? y.ready(a) : a(o) : (void 0! == a.selector && (this.selector = a.selector, this.context = a.context), o.makeArray(a, this))
			}; A.prototype = o.fn, y = o(m);
			var B = / ^ (?: parents | prev (?: Until | All)) /, C = {
				enfants: !0,
				contenu: !0,
				suivant: !0,
				précédent: !0
			}; o.extend({
				dir: function (a, b, c) {
					var d = [],
						e = void 0! == c;
					while ((a = a[b]) && 9! == a.nodeType)
						if (1 === a.nodeType) {
							if (e && o(a).is(c)) break;
							d.push(a)
						}
					return d
				},
				frère: function (a, b) {
					for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a! == b && c.push(a);
					return c
				}
			}), o.fn.extend({
				has: function (a) {
					var b = o(a, this),
						c = b.length;
					renvoie this.filter(function () {
						for (var a = 0; c > a; a++)
							if (o.contains(this, b[a])) return !0
					})
				},
				le plus proche: function (a, b) {
					for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string"! = typeof a ? o(a, b || this.context) : 0; e > d; d++)
						for (c = this[d]; c && c! == b; c = c.parentNode)
							if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && o.find.matchesSelector(c, a))) {
								f.push(c);
								break
							}
					renvoie ceci.pushStack(f.length > 1 ? o.unique(f) : f)
				},
				index: function (a) {
					return a ? "string" == typeof a ? g.call(o(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
				},
				add: function (a, b) {
					return this.pushStack(o.unique(o.merge(this.get(), o(a, b))))
				},
				addBack: function (a) {
					return this.add(null = = a ? this.prevObject : this.prevObject.filter(a))
				}
			});

			function D(a, b) {
				while ((a = a[b]) && 1! == a.nodeType);
				return a
			}
			o.each({
				parent: function (a) {
					var b = a.parentNode;
					return b && 11! == b.nodeType ? b : null
				},
				parents: function (a) {
					return o.dir(a, "parentNode")
				},
				parentsUntil: function (a, b, c) {
					return o.dir(a, "parentNode", c)
				},
				next: function (a) {
					return D(a, "nextSibling")
				},
				prev: function (a) {
					return D(a, "previousSibling")
				},
				nextAll: function (a) {
					return o.dir(a, "nextSibling")
				},
				prevAll: function (a) {
					return o.dir(a, "previousSibling")
				},
				nextUntil: function (a, b, c) {
					return o.dir(a, "nextSibling", c)
				},
				prevUntil: function (a, b, c) {
					return o.dir(a, "previousSibling", c)
				},
				frères et sœurs: function (a) {
					return o.sibling((a.parentNode || {}).firstChild, a)
				},
				enfants: function (a) {
					return o.sibling(a.firstChild)
				},
				contents: function (a) {
					return a.contentDocument || o.merge([], a.childNodes)
				}
			}, function (a, b) {
				o.fn[a] = function (c, d) {
					var e = o.map(this, b, c);
					return "Until"! == a.slice(-5) && (d = c), d && "string" == typeof d && (e = o.filtre(d, e)), this.length > 1 && (C[a] || o.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
				}
			});
			var E = / \ S + /
			g, F = {};

			function G(a) {
				var b = F[a] = {};
				return o.each(a.match(E) || [], function (a, c) {
					b[c] = !0
				}), b
			}
			o.Callbacks = function (a) {
				a = "string" == typeof a ? F[a] || G(a) : o.extend({}, a);
				var b, c, d, e, f, g, h = [],
					i = !a.once && [],
					j = function (l) {
						for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.longueur, d = !0; h && f > g; g++)
							if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
								b = !1;
								break
							}
						d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
					},
					k = {
						ajouter: function () {
							if (h) {
								var c = h.length;
								! function g(b) {
									o.each(b, function (b, c) {
										var d = o.type(c);
										"function" = == d ? a.unique && k.has(c) || ​​h.push(c) : c && c.length && "string"! == d && g(c)
									})
								}(arguments), d ? f = h.length : b && (e = c, j(b))
							}
							renvoyer ceci
						},
						supprimer: function () {
							retourner h && o.each(arguments, fonction(a, b) {
								var c;
								while ((c = o.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f > = c && f - , g > = c && g - )
							}), this
						},
						has: function (a) {
							return a ? o.inArray(a, h) > -1 : !(!h || !h.length)
						},
						vide: function () {
							return h = [], f = 0, this
						},
						désactiver: function () {
							return h = i = b = void 0, this
						},
						désactivé: function () {
							return !h
						},
						lock: function () {
							return i = void 0, b || k.disable(), this
						},
						verrouillé: function () {
							return !i
						},
						fireWith: function (a, b) {
							return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
						},
						fire: function () {
							return k.fireWith(this, arguments), this
						},
						déclenché: function () {
							return !!c
						}
					};
				return k
			}, o.extend({
				Deferred: function (a) {
					var b = [
							["resolution", "done", o.Callbacks("once memory"), "résolu "],
							[" rejeter ", " échouer ", o.Callbacks(" une fois mémoire "), " rejeté "],
							[" notifier ", " progression ", o.Callbacks(" mémoire ")]
						],
						c = " en attente ",
						d = {
							état: function () {
								return c
							},
							toujours: function () {
								return e.done(arguments).fail(arguments), this
							},
							alors: function () {
								var a = arguments;
								return o.Deferred(fonction(c) {
									o.each(b, fonction(b, f) {
										var g = o.isFunction(a[b]) && a[b];
										e[f[1]](function () {
											var a = g && g.apply(this, arguments);
											a && o.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
										})
									}), a = null
								}).promise()
							},
							promise: function (a) {
								return null! = a ? o.extend(a, d) : d
							}
						},
						e = {};
					retourne d.pipe = d.then, o.each(b, function (a, f) {
						var g = f[2],
							h = f[3];
						d[f[1]] = g.add, h && g.add(fonction() {
							c = h
						}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
							return e[f[0] + "With"](this === e ? D : this, arguments), this
						}, e[f[0] + "With"] = g.fireWith
					}), d.promise(e), a && a.call(e, e), e
				},
				quand: function (a) {
					var b = 0,
						c = d.call(arguments),
						e = c.length,
						f = 1! == e || a && o.isFunction(a.promise) ? e : 0,
						g = 1 === f ? a : o.Deferred(),
						h = function (a, b, c) {
							return function (e) {
								b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : -f || g.resolveWith(b, c)
							}
						},
						i, j, k;
					if (e > 1)
						for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && o.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : -f;
					return f || g.resolveWith(k, c), g.promise()
				}
			});
			var H; o.fn.ready = function (a) {
				return o.ready.promise().done(a), this
			}, o.extend({
				isReady: !1,
				readyWait: 1,
				holdReady: function (a) {
					a ? o.readyWait++ : o.ready(!0)
				},
				ready: function (a) {
					(a === !0 ? -o.readyWait : o.isReady) || (o.isReady = !0, a! == !0 && -o.readyWait > 0 || (H.resolveWith(m, [o]), o.fn.trigger && o(m).trigger("prêt").off("prêt")))
				}
			});

			function I() {
				m.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), o.ready()
			}
			o.ready.promise = function (b) {
				return H || (H = o.Deferred(), "complete" === m.readyState ? setTimeout(o.ready) : (m.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
			}, o.ready.promise();
			var J = o.access = function (a, b, c, d, e, f, g) {
				var h = 0,
					i = a.length,
					j = null == c;
				if ("objet" === o.type(c)) {
					e = !0;
					pour(h dans c) o.access(a, b, h, c[h], !0, f, g)
				}
				sinon si(vide 0! == d && (e = !0, o.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = fonction(a, b, c) {
					retourne j.call(o(a), c)
				})), b)) pour(; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
				renvoie e ? a : j ? b.call(a) : i ? b(a[0], c) : f
			}; o.acceptData = function (a) {
				return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
			};

			function K() {
				Object.defineProperty(this.cache = {}, 0, {
					get: function () {
						return {}
					}
				}), this.expando = o.expando + Math.random()
			}
			K.uid = 1, K.accepts = o.acceptData, K.prototype = {
				clé: fonction(a) {
					if (!K.accepte(a)) retourne 0;
					var b = {},
						c = a[this.expando];
					if (!c) {
						c = K.uid++;
						essayez {
							b[this.expando] = {
								valeur: c
							}, Object.defineProperties(a, b)
						} catch (d) {
							b[this.expando] = c, o.extend(a, b)
						}
					}
					retourne this.cache[c] || (this.cache[c] = {}), c
				},
				set: function (a, b, c) {
					var d, e = this.key(a),
						f = this.cache[e];
					if ("string" == typeof b) f[b] = c;
					else if (o.isEmptyObject(f)) o.extend(this.cache[e], b);
					else
						for (d in b) f[d] = b[d];
					return f
				},
				get: function (a, b) {
					var c = this.cache[this.key(a)];
					return void 0 === b ? c : c[b]
				},
				access: function (a, b, c) {
					var d;
					return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0! == d ? d : this.get(a, o.camelCase(b))) : (this.set(a, b, c), void 0! == c ? c : b)
				},
				remove: function (a, b) {
					var c, d, e, f = this.key(a),
						g = this.cache[f];
					if (void 0 === b) this.cache[f] = {};
					else {
						o.isArray(b) ? D = b.concat(b.map(o.camelCase)) : (e = o.camelCase(b), b en g ? d = [b, e] : (d = e, d = d en g ? [d] : d.match(E) || [])), c = d.longueur;
						while (c - ) delete g[d[c]]
					}
				},
				hasData: function (a) {
					return !o.isEmptyObject(this.cache[a[this.expando]] || {})
				},
				discard: function (a) {
					a[this.expando] && supprimer this.cache[a[this.expando]]
				}
			};
			var L = nouveau K, M = nouveau K, N = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /, O = / ([AZ]) /
			g; fonction P(a, b, c) {
				var d;
				if (void 0 = == c && 1 === a.nodeType)
					if (d = "data -" + b.replace(O, "- $ 1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
						try {
							c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? O.parseJSON(c) : c
						} catch (e) {}
						M.set(a, b, c)
					} else c = void 0;
				return c
			}
			o.extend({
				hasData: function (a) {
					return M.hasData(a) || L.hasData(a)
				},
				data: function (a, b, c) {
					return M.access(a, b, c)
				},
				removeData: function (a, b) {
					M.remove(a, b)
				},
				_ data: function (a, b, c) {
					return L.access(a, b, c)
				},
				_ removeData: function (a, b) {
					L.remove(a, b)
				}
			}), o.fn.extend({
					data: function (a, b) {
						var c, d, e, f = this[0],
							g = f && f.attributes;
						if (void 0 === a) {
							if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
								c = g.length;