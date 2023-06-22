import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <main>
    <ng-content>

    </ng-content>
  </main>
    
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
