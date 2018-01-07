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
    templateUrl: './layout.html',
    styleUrls: ['./layout.scss'],
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