import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooNg6LibService {
    constructor() { }
}
FooNg6LibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FooNg6LibService.ctorParameters = () => [];
/** @nocollapse */ FooNg6LibService.ngInjectableDef = defineInjectable({ factory: function FooNg6LibService_Factory() { return new FooNg6LibService(); }, token: FooNg6LibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooNg6LibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooNg6LibComponent.decorators = [
    { type: Component, args: [{
                selector: 'fnl-foo-ng6-lib',
                template: `
    <p>
      foo-ng6-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
FooNg6LibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooNg6LibModule {
}
FooNg6LibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FooNg6LibComponent],
                imports: [],
                exports: [FooNg6LibComponent]
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

export { FooNg6LibService, FooNg6LibComponent, FooNg6LibModule };

//# sourceMappingURL=foo-ng6-lib.js.map