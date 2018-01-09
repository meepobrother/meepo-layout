import { Component, OnInit, ViewEncapsulation, ContentChild } from '@angular/core';
import { LayoutBodyDirective } from './layout.body';
import { LayoutFooterDirective } from './layout.footer';
import { LayoutHeaderDirective } from './layout.header';

@Component({
    selector: 'layout-v',
    templateUrl: './layout-v.html',
    styleUrls: ['./layout-v.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutVComponent implements OnInit {
    @ContentChild(LayoutBodyDirective) body: LayoutBodyDirective;
    @ContentChild(LayoutHeaderDirective) header: LayoutHeaderDirective;
    @ContentChild(LayoutFooterDirective) footer: LayoutFooterDirective;
    height: string;
    constructor() { }

    ngOnInit() {
        if (this.header || this.footer) {
            let height: any = 0;
            if (this.header) {
                height += this.header.getHeight()
            }
            if (this.footer) {
                height += this.footer.getHeight();
            }
            this.height = `calc(100% - ${height}px)`;
            this.body.setHeight(this.height);
        }
    }
}