import { Component, Input } from '@angular/core';

@Component({
    selector: 'popup-window-button',
    template: '<button class="btn btn-success btn-sm" (click)="openWindow()"><ng-content></ng-content></button>'
})
export class PopupWindowButtonComponent {
    @Input() url: string;
    @Input() path: string;
    @Input() width = 500;
    @Input() height = 400;
    @Input() left = 100;
    @Input() top = 100;
    @Input() resizable = true;
    @Input() scrollbars = true;
    @Input() toolbar = true;
    @Input() menubar = false;
    @Input() location = false;
    @Input() directories = false;
    @Input() status = true;

    get settings() {
        let settings = `height=${this.height},`;
        settings += `width=${this.width},`;
        settings += `left=${this.left},`;
        settings += `top=${this.top},`;
        settings += `resizeable=${this.resizable ? 'yes' : 'no'},`;
        settings += `scrollbars=${this.scrollbars ? 'yes' : 'no'},`;
        settings += `toolbar=${this.toolbar ? 'yes' : 'no'},`;
        settings += `menubar=${this.menubar ? 'yes' : 'no'},`;
        settings += `location=${this.location ? 'yes' : 'no'},`;
        settings += `directories=${this.directories ? 'yes' : 'no'},`;
        settings += `status=${this.status ? 'yes' : 'no'}`;
        return settings;
    }

    openWindow = () => window.open(this.url || this.path, 'popUpWindow', this.settings);
}
