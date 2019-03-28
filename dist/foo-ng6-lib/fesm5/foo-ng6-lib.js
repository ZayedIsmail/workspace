import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooNg6LibService = /** @class */ (function () {
    function FooNg6LibService() {
    }
    FooNg6LibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FooNg6LibService.ctorParameters = function () { return []; };
    /** @nocollapse */ FooNg6LibService.ngInjectableDef = defineInjectable({ factory: function FooNg6LibService_Factory() { return new FooNg6LibService(); }, token: FooNg6LibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { FooNg6LibService, FooNg6LibComponent, FooNg6LibModule };

//# sourceMappingURL=foo-ng6-lib.js.map