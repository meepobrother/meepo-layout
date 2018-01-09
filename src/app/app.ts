import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout';
import { LayoutHeaderDirective } from './layout/layout.header';
import { LayoutFooterDirective } from './layout/layout.footer';
import { LayoutBodyDirective } from './layout/layout.body';
import { LayoutLeftDirective } from './layout/layout.left';
import { LayoutRightDirective } from './layout/layout.right';
import { LayoutCenterDirective } from './layout/layout.center';

export const LayoutComponents = [
    LayoutComponent,
    LayoutHeaderDirective,
    LayoutFooterDirective,
    LayoutBodyDirective,
    LayoutLeftDirective,
    LayoutRightDirective,
    LayoutCenterDirective
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
