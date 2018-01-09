import { ElementRef, ChangeDetectorRef, Renderer2, TemplateRef } from '@angular/core';

export class LayoutBase {
    constructor(
        public ele: ElementRef,
        public cd: ChangeDetectorRef,
        public render: Renderer2,
        public ref: TemplateRef<any>
    ) { }

    setHeight(val: string): void {
        this.render.setStyle(this.ele.nativeElement, 'height', val);
    }

    getHeight(): number {
        return this.ele.nativeElement.clientHeight;
    }

    setWidth(val: string): void {
        this.render.setStyle(this.ele.nativeElement, 'width', val);
    }

    getWidth(): number {
        return this.ele.nativeElement.clientWidth;
    }
}
