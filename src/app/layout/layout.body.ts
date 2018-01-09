import { Directive, HostBinding, ElementRef, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { LayoutBase } from './base';
@Directive({ selector: '[layoutBody]' })
export class LayoutBodyDirective extends LayoutBase {
    constructor(
        ele: ElementRef,
        cd: ChangeDetectorRef,
        render: Renderer2
    ) {
        super(ele, cd, render);
    }
}
