import { Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-button',
  imports: [MatButtonModule, MatIconModule, MatTooltip],
  templateUrl: './sidebar-button.component.html',
  styleUrl: './sidebar-button.component.scss',
})
export class SidebarButtonComponent {
  router = inject(Router);

  fontIcon = input.required<string>();
  expanded = input.required<boolean>();
  text = input.required<string>();
  isRouteButton = input<boolean>(true);
  route = input<string | null>(null);
  click = output<void>();
  //click = output();

  onClick(event: MouseEvent) {
    if (this.isRouteButton()) {
      if (this.route() == null) throw new Error('Route is not defined');
      this.router.navigate([this.route()]);
    }

    this.click.emit();
    event.stopPropagation();
  }
}
