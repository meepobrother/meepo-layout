import { Component, AfterViewInit, ViewEncapsulation, ContentChild } from '@angular/core';
import { LayoutCenterDirective } from './layout.center';
import { LayoutLeftDirective } from './layout.left';
import { LayoutRightDirective } from './layout.right';

@Component({
    selector: 'layout-h',
    templateUrl: './layout-h.html',
    styleUrls: ['./layout-h.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutHComponent implements AfterViewInit {
    @ContentChild(LayoutCenterDirective) center: LayoutCenterDirective;
    @ContentChild(LayoutLeftDirective) left: LayoutLeftDirective;
    @ContentChild(LayoutRightDirective) right: LayoutRightDirective;

    constructor() { }

    ngAfterViewInit() {
        if (this.left || this.right) {
            let height: any = 0;
            if (this.left) {
                height += this.left.getWidth()
            }
            if (this.right) {
                height += this.right.getWidth();
            }
            height = `calc(100% - ${height}px)`;
            this.center.setWidth(height);
        }
    }
}