import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {PrintService} from '../../services/print.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrintComponent {

  @Input() selector: string;
  constructor(private printService: PrintService) { }

  print(): void {
    this.printService.popupPrint(this.selector);
  }

}
