import { Component, AfterViewInit, ViewEncapsulation, ContentChild } from '@angular/core';
import { LayoutBodyDirective } from './layout.body';
import { LayoutFooterDirective } from './layout.footer';
import { LayoutHeaderDirective } from './layout.header';

@Component({
    selector: 'layout-v',
    templateUrl: './layout-v.html',
    styleUrls: ['./layout-v.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutVComponent implements AfterViewInit {
    @ContentChild(LayoutBodyDirective) body: LayoutBodyDirective;
    @ContentChild(LayoutHeaderDirective) header: LayoutHeaderDirective;
    @ContentChild(LayoutFooterDirective) footer: LayoutFooterDirective;
    height: string;
    constructor() { }

    ngAfterViewInit() {
        if (this.header || this.footer) {
            var height: number = 0;
            if (this.header) {
                height += this.header.getHeight();
            }
            if (this.footer) {
                height += this.footer.getHeight();
            }
            this.height = `calc(100% - ${height}px)`;
            this.body.setHeight(this.height);
        }
    }
}