import {
    Component, OnInit,
    ViewEncapsulation, Output,
    EventEmitter, Input, ViewChild, ElementRef,
    OnDestroy
} from '@angular/core';
import { EventService } from 'meepo-event';
import { LAYOUT_HEADER_CHANGE } from '../event';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'layout',
    template: `<div class="header">
    <header-container>
        <div left (click)="widget.left.call()">{{widget.left.title}}</div>
        <div (click)="widget.title.call()">{{widget.title.title}}</div>
        <div right (click)="widget.right.call()">{{widget.right.title}}</div>
    </header-container>
</div>
<div class="main" #main>
    <minirefresh-default (up)="_up($event)" (down)="_down($event)">
        <div [style.height.px]="height" class="main-container">
            <ng-content></ng-content>
        </div>
    </minirefresh-default>
</div>
<div class="footer">
    <footer></footer>
</div>`,
    styles: [`layout {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%; }
  layout footer {
    background: #fff;
    z-index: 1; }
  layout .main {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    position: relative; }
    layout .main .main-container {
      height: 100%;
      background-color: #efefef;
      min-height: 300px; }
  layout .footer-item {
    line-height: 1; }
`],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy {
    @ViewChild('main') _main: ElementRef;
    @Output() up: EventEmitter<any> = new EventEmitter();
    @Output() down: EventEmitter<any> = new EventEmitter();

    height: number;
    ids: any[] = [];
    @Input() widget: any = {
        left: {
            title: '返回',
            call: () => {
                this.location.back();
            }
        },
        title: {
            title: '页面标题',
            call: () => {

            }
        },
        right: {
            title: '右边',
            call: () => {
                this.location.back();
            }
        }
    };
    constructor(
        public event: EventService,
        public location: Location,
        public title: Title
    ) {
        this.event.subscribe(LAYOUT_HEADER_CHANGE, (cfg: any) => {
            this.widget = { ...this.widget, ...cfg };
            if (this.widget.title.title) {
                this.title.setTitle(this.widget.title.title);
            }
        });
    }

    ngOnInit() {
        this.height = this._main.nativeElement.clientHeight - 79;
        this.title.setTitle(this.widget.title.title);
    }

    ngOnDestroy() { }

    _up(e: any) {
        this.up.emit(e);
    }

    _down(e: any) {
        this.down.emit(e);
    }
}