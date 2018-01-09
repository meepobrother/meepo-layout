import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutVComponent } from './layout-v/layout-v';
import { LayoutBodyDirective } from './layout-v/layout.body';
import { LayoutFooterDirective } from './layout-v/layout.footer';
import { LayoutHeaderDirective } from './layout-v/layout.header';

import { LayoutHComponent } from './layout-h/layout-h';
import { LayoutLeftDirective } from './layout-h/layout.left';
import { LayoutRightDirective } from './layout-h/layout.right';
import { LayoutCenterDirective } from './layout-h/layout.center';

export const LayoutComponents = [
    LayoutVComponent,
    LayoutHeaderDirective,
    LayoutFooterDirective,
    LayoutBodyDirective,
    LayoutLeftDirective,
    LayoutRightDirective,
    LayoutCenterDirective,
    LayoutHComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ...LayoutComponents
    ],
    declarations: [
        ...LayoutComponents
    ],
    providers: [
    ],
})
export class LayoutModule { }


export { LayoutVComponent } from './layout-v/layout-v';
export { LayoutBodyDirective } from './layout-v/layout.body';
export { LayoutFooterDirective } from './layout-v/layout.footer';
export { LayoutHeaderDirective } from './layout-v/layout.header';

export { LayoutHComponent } from './layout-h/layout-h';
export { LayoutLeftDirective } from './layout-h/layout.left';
export { LayoutRightDirective } from './layout-h/layout.right';
export { LayoutCenterDirective } from './layout-h/layout.center';

