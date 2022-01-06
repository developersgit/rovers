import { Component, Input } from '@angular/core';

@Component({
  selector: 'print-error',
  templateUrl: './print-error.component.html',
  styleUrls: ['./print-error.component.scss']
})
export class PrintErrorComponent {
  @Input("control") control: any;
  @Input("isSubmitted") isSubmitted: boolean = false;
}
