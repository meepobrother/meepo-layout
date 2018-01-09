import { Directive, HostBinding, ElementRef, ChangeDetectorRef, Renderer2, TemplateRef } from '@angular/core';
import { LayoutBase } from '../base';
@Directive({
    selector: '[layoutHeader]',
    exportAs: 'layoutHeader'
})
export class LayoutHeaderDirective extends LayoutBase {
    constructor(
        ele: ElementRef,
        cd: ChangeDetectorRef,
        render: Renderer2,
    ) {
        super(ele, cd, render);
    }
}
