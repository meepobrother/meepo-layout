import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
let routes: Routes = [];
import { IconsModule } from 'meepo-icons';
import { EventModule } from 'meepo-event';
import { LayoutComponent } from './layout/layout';
import { HeaderModule } from 'meepo-header';
import { FooterModule } from 'meepo-footer';
import { MinirefreshModule } from 'meepo-minirefresh';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IconsModule,
        EventModule.forRoot(),
        HeaderModule,
        FooterModule.forRoot({
            url: ''
        }),
        MinirefreshModule
    ],
    exports: [
        LayoutComponent
    ],
    declarations: [
        LayoutComponent
    ],
    providers: [
    ],
})
export class LayoutModule { }
export * from './event';
