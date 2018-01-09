import { Component, AfterViewInit, ViewEncapsulation, Input, ContentChild, HostBinding, ChangeDetectorRef } from '@angular/core';
import { LayoutBodyDirective } from './layout.body';
import { LayoutHeaderDirective } from './layout.header';
import { LayoutFooterDirective } from './layout.footer';
import { LayoutLeftDirective } from './layout.left';
import { LayoutRightDirective } from './layout.right';
import { LayoutCenterDirective } from './layout.center';

@Component({
    selector: 'layout',
    templateUrl: './layout.html',
    styleUrls: ['./layout.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements AfterViewInit {
    @HostBinding('style.flex-direction') direction: 'column' | 'row';
    @ContentChild(LayoutBodyDirective) body: LayoutBodyDirective;
    @ContentChild(LayoutHeaderDirective) header: LayoutHeaderDirective;
    @ContentChild(LayoutFooterDirective) footer: LayoutFooterDirective;
    @ContentChild(LayoutLeftDirective) left: LayoutLeftDirective;
    @ContentChild(LayoutRightDirective) right: LayoutRightDirective;
    @ContentChild(LayoutCenterDirective) center: LayoutCenterDirective;

    @Input()
    set row(val: any) {
        this.direction = 'row';
    }
    constructor(
        public cd: ChangeDetectorRef
    ) { }

    ngAfterViewInit() {}
        
}
