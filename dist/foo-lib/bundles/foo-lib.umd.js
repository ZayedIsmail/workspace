(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('foo-lib', ['exports', '@angular/core'], factory) :
    (factory((global['foo-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooLibService = /** @class */ (function () {
        function FooLibService() {
        }
        FooLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FooLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ FooLibService.ngInjectableDef = i0.defineInjectable({ factory: function FooLibService_Factory() { return new FooLibService(); }, token: FooLibService, providedIn: "root" });
        return FooLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooLibComponent = /** @class */ (function () {
        function FooLibComponent() {
        }
        /**
         * @return {?}
         */
        FooLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FooLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'foo-foo-lib',
                        template: "\n    <p>\n      foo-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        FooLibComponent.ctorParameters = function () { return []; };
        return FooLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooLibModule = /** @class */ (function () {
        function FooLibModule() {
        }
        FooLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [FooLibComponent],
                        imports: [],
                        exports: [FooLibComponent]
                    },] }
        ];
        return FooLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FooLibService = FooLibService;
    exports.FooLibComponent = FooLibComponent;
    exports.FooLibModule = FooLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=foo-lib.umd.js.map