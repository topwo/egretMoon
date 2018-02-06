var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainMoon = (function (_super) {
    __extends(MainMoon, _super);
    function MainMoon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainMoon.prototype.render = function () {
        _super.prototype.render.call(this);
        moon.TipsManager.getIns().init(this.stage);
        moon.showLog.getIns().init(this.stage);
        this.createBackground(0XFFCC00);
        var names = ["基础组件", "组件Progress", "组件ScrollBar"];
        var btns = [];
        for (var i = 0; i < names.length; i++) {
            var btn = new moon.BasicButton();
            btn.label = names[i];
            btn.name = i.toString();
            btn.x = (this.stageWidth - btn.width) >> 1;
            btn.y = i * (btn.height + 20);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
            this.addChild(btn);
        }
        this.father = this.parent;
    };
    MainMoon.prototype.click = function (e) {
        var btn = e.currentTarget;
        this.removeFromParent();
        var view;
        switch (parseInt(btn.name)) {
            case 0:
                view = new MoonTest;
                break;
            case 1:
                view = new TestProgress;
                break;
            case 2:
                view = new TestScrollBar;
                break;
        }
        this.father.addChild(view);
        view.addEvent(moon.MoonEvent.CLOSE, this.onClose, this);
    };
    MainMoon.prototype.onClose = function (e) {
        this.father.addChild(this);
    };
    return MainMoon;
}(moon.BasicView));
__reflect(MainMoon.prototype, "MainMoon");
//# sourceMappingURL=MainMoon.js.map