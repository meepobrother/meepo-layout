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

    ngAfterViewInit() {
        console.log(this);
        if (this.header || this.footer) {
            let height: any = 0;
            if (this.header) {
                height += this.header.getHeight()
            }
            if (this.footer) {
                height += this.footer.getHeight();
            }
            height = `calc(100% - ${height})`;
            this.body.setHeight(height);
        }
        if (this.left || this.right) {
            let height: any = 0;
            if (this.left) {
                height += this.left.getWidth()
            }
            if (this.right) {
                height += this.right.getWidth();
            }
            height = `calc(100% - ${height})`;
            this.center.setWidth(height);
        }
    }

}
