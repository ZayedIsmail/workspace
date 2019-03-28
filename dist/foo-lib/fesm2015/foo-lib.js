import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooLibService {
    constructor() { }
}
FooLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FooLibService.ctorParameters = () => [];
/** @nocollapse */ FooLibService.ngInjectableDef = defineInjectable({ factory: function FooLibService_Factory() { return new FooLibService(); }, token: FooLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'foo-foo-lib',
                template: `
    <p>
      foo-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
FooLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooLibModule {
}
FooLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FooLibComponent],
                imports: [],
                exports: [FooLibComponent]
            },] }
];

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