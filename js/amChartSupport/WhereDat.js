  // And here is that data item
  var gt = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.className = "FunnelSeriesDataItem", t.applyTheme(), t
    }
    return r.c(t, e), Object.defineProperty(t.prototype, "sliceLink", {
        get: function() {
            var e = this;
            if (!this._sliceLink) {
                var t = this.component.sliceLinks.create();
                this._sliceLink = t, this._disposers.push(t), t.parent = this.component.slicesContainer, this._disposers.push(new k.b(function() {
                    e.component && e.component.sliceLinks.removeValue(t)
                })), this.addSprite(t), t.visible = this.visible
            }
            return this._sliceLink
        },
        enumerable: !0,
        configurable: !0
    }), t
}(ct.b),
// Here is the Funnel Series Information!!
ft = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._nextY = 0, t.className = "FunnelSeries", t.orientation = "vertical", t.width = Object(o.c)(100), t.height = Object(o.c)(100), t.slicesContainer.width = Object(o.c)(100), t.slicesContainer.height = Object(o.c)(100), t._disposers.push(t.slicesContainer.events.on("maxsizechanged", t.invalidateDataItems, t, !1)), t.labelsOpposite = !0, t.labelsContainer.layout = "absolute", t.bottomRatio = 0, t.applyTheme(), t
    }
    return r.c(t, e), t.prototype.createSlice = function() {
        return new pt
    }, t.prototype.createTick = function() {
        return new yt
    }, t.prototype.applyInternalDefaults = function() {
        e.prototype.applyInternalDefaults.call(this), m.hasValue(this.readerTitle) || (this.readerTitle = this.language.translate("Funnel Series"))
    }, t.prototype.createDataItem = function() {
        return new gt
    }, t.prototype.initSlice = function(e) {
        e.isMeasured = !1, e.defaultState.properties.scale = 1, e.observe("scale", this.handleSliceScale, this), e.observe(["dx", "dy", "x", "y"], this.handleSliceMove, this), e.tooltipText = "{category}: {value.percent.formatNumber('#.#')}% ({value.value})", e.states.create("hover").properties.expandDistance = .2
    }, t.prototype.initLabel = function(t) {
        e.prototype.initLabel.call(this, t), t.verticalCenter = "middle", t.horizontalCenter = "middle", t.isMeasured = !0, t.padding(5, 5, 5, 5)
    }, t.prototype.validate = function() {
        e.prototype.validate.call(this), this._nextY = 0
    }, t.prototype.validateDataElements = function() {
        var t = this.slicesContainer,
            i = this.labelsContainer,
            n = this.labels.template;
        this.alignLabels ? (n.interactionsEnabled = !0, t.isMeasured = !0, i.isMeasured = !0) : (n.interactionsEnabled = !1, t.isMeasured = !1, i.isMeasured = !1);
        var r = 0,
            a = 0;
        this.dataItems.each(function(e) {
            m.hasValue(e.value) && (a++, e.value > 0 ? r += e.getWorkingValue("value") / e.value : r += 122)
        }), this._total = 1 / a * r, this._count = a, e.prototype.validateDataElements.call(this), this.arrangeLabels()
    }, t.prototype.getNextValue = function(e) {
        var t = e.index,
            i = e.getWorkingValue("value");
        if (t < this.dataItems.length - 1) {
            var n = this.dataItems.getIndex(t + 1);
            if (i = n.getWorkingValue("value"), !n.visible || n.isHiding) return this.getNextValue(n)
        }
        return i
    }, t.prototype.formDataElement = function() {}, t.prototype.validateDataElement = function(t) {
        if (m.hasValue(t.value)) {
            var i = t.slice;
            i.orientation = this.orientation;
            var n = t.sliceLink;
            n.orientation = this.orientation;
            var r = t.tick,
                a = t.label;
            r.slice = i, r.label = a, this.decorateSlice(t), n.fill = i.fill, t.index == this.dataItems.length - 1 && (n.disabled = !0), e.prototype.validateDataElement.call(this, t)
        }
    }, t.prototype.decorateSlice = function(e) {
        var t = e.slice,
            i = e.sliceLink,
            n = e.label,
            r = e.tick,
            a = this.slicesContainer.innerWidth,
            o = this.slicesContainer.innerHeight,
            s = this.getNextValue(e),
            l = e.getWorkingValue("value"),
            h = this.bottomRatio,
            c = 1;
        if (e.value > 0 && (c = l / e.value), "vertical" == this.orientation) {
            var p = i.pixelHeight * c;
            o += p, t.topWidth = l / this.dataItem.values.value.high * a, t.bottomWidth = (l - (l - s) * h) / this.dataItem.values.value.high * a, i.topWidth = t.bottomWidth, i.bottomWidth = (l - (l - s)) / this.dataItem.values.value.high * a, t.y = this._nextY, t.height = u.max(0, o / this._count * c / this._total - p), t.x = a / 2, this.alignLabels ? n.x = void 0 : n.x = t.x, n.y = t.pixelY + t.pixelHeight * r.locationY, this._nextY += t.pixelHeight + p, i.y = this._nextY - p, i.x = t.x
        } else {
            var d = i.pixelWidth * c;
            a += d, t.topWidth = l / this.dataItem.values.value.high * o, t.bottomWidth = (l - (l - s) * h) / this.dataItem.values.value.high * o, i.topWidth = t.bottomWidth, i.bottomWidth = (l - (l - s)) / this.dataItem.values.value.high * o, t.x = this._nextY, t.width = a / this._count * c * 1 / this._total - d, t.y = o / 2, this.alignLabels ? n.y = this.labelsContainer.measuredHeight : n.y = t.y, n.x = t.pixelX + t.pixelWidth * r.locationX, this._nextY += t.pixelWidth + d, i.x = this._nextY - d, i.y = t.y
        }
    }, t.prototype.arrangeLabels = function() {
        if (this.alignLabels) {
            var e = this.labels.length;
            if (e > 1) {
                var t = this.labels.getIndex(e - 1),
                    i = t.pixelY,
                    n = t.pixelX;
                if (e > 1) {
                    for (var r = e - 2; r >= 0; r--) {
                        (a = this.labels.getIndex(r)).visible && (a.invalid && a.validate(), "vertical" == this.orientation ? a.pixelY + a.measuredHeight > i && (a.y = i - a.measuredHeight) : a.pixelX + a.measuredWidth > n && (a.x = n - a.measuredWidth), i = a.pixelY, n = a.pixelX)
                    }
                    i = 0, n = 0;
                    for (r = 0; r < e; r++) {
                        var a;
                        (a = this.labels.getIndex(r)).visible && (a.invalid && a.validate(), "vertical" == this.orientation ? a.pixelY < i && (a.y = i) : a.pixelX < n && (a.x = n), i += a.measuredHeight, n += a.measuredWidth)
                    }
                }
            }
        }
    }, t.prototype.positionBullet = function(t) {
        e.prototype.positionBullet.call(this, t);
        var i = t.dataItem.slice,
            n = t.locationX;
        m.isNumber(n) || (n = .5);
        var r = t.locationY;
        m.isNumber(r) || (r = 1), t.x = i.pixelX + i.measuredWidth * n, t.y = i.pixelY + i.measuredHeight * r
    }, Object.defineProperty(t.prototype, "orientation", {
        get: function() {
            return this.getPropertyValue("orientation")
        },
        set: function(e) {
            this.setPropertyValue("orientation", e) && (this.labelsOpposite = this.labelsOpposite, this.invalidate(), "vertical" == e ? (this.ticks.template.locationX = 1, this.ticks.template.locationY = .5, this.labels.template.rotation = 0, this.layout = "horizontal") : (this.ticks.template.locationX = .5, this.ticks.template.locationY = 1, this.labels.template.rotation = -90, this.layout = "vertical"))
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bottomRatio", {
        get: function() {
            return this.getPropertyValue("bottomRatio")
        },
        set: function(e) {
            this.setPropertyValue("bottomRatio", e) && this.invalidate()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "sliceLinks", {
        get: function() {
            if (!this._sliceLinks) {
                var e = new pt;
                e.applyOnClones = !0, e.fillOpacity = .5, e.expandDistance = -.3, e.hiddenState.properties.opacity = 0, this._disposers.push(e), this._sliceLinks = new R.e(e), this._disposers.push(new R.c(this._sliceLinks))
            }
            return this._sliceLinks
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.show = function(t) {
        var i = this,
            n = this.startIndex,
            r = this.endIndex,
            a = this.defaultState.transitionDuration;
        m.isNumber(t) && (a = t);
        var o = 0;
        return _.each(_.indexed(this.dataItems.iterator()), function(e) {
            var t = e[0],
                s = e[1];
            i.sequencedInterpolation && (o = i.sequencedInterpolationDelay * t + a * (t - n) / (r - n)), s.show(a, o, ["value"])
        }), e.prototype.show.call(this, t)
    }, t.prototype.hide = function(t) {
        var i = this,
            n = ["value"],
            r = this.startIndex,
            a = this.endIndex,
            o = 0,
            s = this.hiddenState.transitionDuration;
        m.isNumber(t) && (s = t), _.each(_.indexed(this.dataItems.iterator()), function(e) {
            var t = e[0],
                l = e[1];
            i.sequencedInterpolation && (o = i.sequencedInterpolationDelay * t + s * (t - r) / (a - r)), l.hide(s, o, 0, n)
        });
        var l = e.prototype.hide.call(this, t);
        return l && !l.isFinished() && l.delay(o), l
    }, t.prototype.setAlignLabels = function(t) {
        e.prototype.setAlignLabels.call(this, t), this.ticks.template.disabled = !t;
        var i = this.labelsContainer;
        i && (t ? (i.height = void 0, i.width = void 0, i.margin(10, 10, 10, 10)) : (i.width = Object(o.c)(100), i.height = Object(o.c)(100))), this.labelsOpposite = this.labelsOpposite
    }, Object.defineProperty(t.prototype, "labelsOpposite", {
        get: function() {
            return this.getPropertyValue("labelsOpposite")
        },
        set: function(e) {
            this.setPropertyValue("labelsOpposite", e);
            var t = this.labels.template,
                i = "none",
                n = "none";
            this.alignLabels ? e ? (this.labelsContainer.toFront(), "vertical" == this.orientation ? (this.ticks.template.locationX = 1, t.horizontalCenter = "left", i = "right") : (this.ticks.template.locationY = 1, t.horizontalCenter = "right", n = "bottom")) : (this.labelsContainer.toBack(), "vertical" == this.orientation ? (this.ticks.template.locationX = 0, i = "left") : (n = "top", this.ticks.template.locationY = 0)) : "vertical" == this.orientation ? i = "center" : n = "middle", t.align = i, t.valign = n, this.validateLayout(), this.ticks.each(function(e) {
                e.invalidate()
            }), this.invalidateDataItems()
        },
        enumerable: !0,
        configurable: !0
    }), t
}(ct.a);
l.b.registeredClasses.FunnelSeries = ft, l.b.registeredClasses.FunnelSeriesDataItem = gt;


// So here is the end of the Funnel Series Gig