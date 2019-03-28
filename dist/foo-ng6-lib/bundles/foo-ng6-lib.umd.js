(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('foo-ng6-lib', ['exports', '@angular/core'], factory) :
    (factory((global['foo-ng6-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooNg6LibService = /** @class */ (function () {
        function FooNg6LibService() {
        }
        FooNg6LibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FooNg6LibService.ctorParameters = function () { return []; };
        /** @nocollapse */ FooNg6LibService.ngInjectableDef = i0.defineInjectable({ factory: function FooNg6LibService_Factory() { return new FooNg6LibService(); }, token: FooNg6LibService, providedIn: "root" });
        return FooNg6LibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooNg6LibComponent = /** @class */ (function () {
        function FooNg6LibComponent() {
        }
        /**
         * @return {?}
         */
        FooNg6LibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FooNg6LibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fnl-foo-ng6-lib',
                        template: "\n    <p>\n      foo-ng6-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        FooNg6LibComponent.ctorParameters = function () { return []; };
        return FooNg6LibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooNg6LibModule = /** @class */ (function () {
        function FooNg6LibModule() {
        }
        FooNg6LibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [FooNg6LibComponent],
                        imports: [],
                        exports: [FooNg6LibComponent]
                    },] }
        ];
        return FooNg6LibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FooNg6LibService = FooNg6LibService;
    exports.FooNg6LibComponent = FooNg6LibComponent;
    exports.FooNg6LibModule = FooNg6LibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=foo-ng6-lib.umd.js.map