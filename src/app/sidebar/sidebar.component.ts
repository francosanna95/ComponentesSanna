import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <main>
    <ng-content>

    </ng-content>
  </main>  
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

}
