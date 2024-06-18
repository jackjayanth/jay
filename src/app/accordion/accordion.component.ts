import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() title: string = '';
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
