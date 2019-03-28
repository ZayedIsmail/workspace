import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooLibService = /** @class */ (function () {
    function FooLibService() {
    }
    FooLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FooLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ FooLibService.ngInjectableDef = defineInjectable({ factory: function FooLibService_Factory() { return new FooLibService(); }, token: FooLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { FooLibService, FooLibComponent, FooLibModule };

//# sourceMappingURL=foo-lib.js.map