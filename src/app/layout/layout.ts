import { Component, AfterViewInit, ViewEncapsulation, ContentChild, HostBinding } from '@angular/core';
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
    @HostBinding('style.flex-direction') direction: 'column' | 'row' = 'column';
    @ContentChild(LayoutBodyDirective) body: LayoutBodyDirective;
    @ContentChild(LayoutHeaderDirective) header: LayoutHeaderDirective;
    @ContentChild(LayoutFooterDirective) footer: LayoutFooterDirective;
    @ContentChild(LayoutLeftDirective) left: LayoutLeftDirective;
    @ContentChild(LayoutRightDirective) right: LayoutRightDirective;
    @ContentChild(LayoutCenterDirective) center: LayoutCenterDirective;

    constructor() { }

    ngAfterViewInit() {
        if (this.body) {
            this.direction = 'column';
            let height = 0;
            if (this.header) {
                height += this.header.getHeight()
            }
            if (this.footer) {
                height += this.footer.getHeight()
            }
            this.body.setHeight(`calc(100% - ${height}px)`);
        } else if (this.center) {
            this.direction = 'row';
            let width = 0;
            if (this.left) {
                width += this.left.getWidth()
            }
            if (this.right) {
                width += this.right.getWidth()
            }
            this.center.setWidth('calc(100% - ${width}px)');
        }
    }
}
