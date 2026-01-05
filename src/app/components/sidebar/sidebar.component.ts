import { Component, signal } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarButtonComponent } from '../sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-sidebar',
  imports: [MatButtonModule, MatIconModule, SidebarButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  expanded = signal<boolean>(false);
  expandFontIcon = signal<string>('left_panel_open');

  onExpandClick() {
    this.expanded.set(!this.expanded());
    this.expandFontIcon.set(
      this.expanded() ? 'left_panel_close' : 'left_panel_open'
    );
  }
}
