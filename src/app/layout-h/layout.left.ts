import { Directive, HostBinding, ElementRef, ChangeDetectorRef, Renderer2, TemplateRef } from '@angular/core';
import { LayoutBase } from '../base';
@Directive({
    selector: '[layoutLeft]',
    exportAs: 'layoutLeft'
})
export class LayoutLeftDirective extends LayoutBase {
    constructor(
        ele: ElementRef,
        cd: ChangeDetectorRef,
        render: Renderer2,
    ) {
        super(ele, cd, render);
    }
}
