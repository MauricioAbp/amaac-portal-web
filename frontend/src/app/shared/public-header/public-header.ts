import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { PUBLIC_CONTENT } from '../../core/config/public-content.config';

@Component({
  selector: 'app-public-header',
  imports: [RouterLink],
  templateUrl: './public-header.html',
  styleUrl: './public-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHeader {
  protected readonly isMenuOpen = signal(false);
  protected readonly content = PUBLIC_CONTENT;
  protected readonly navigation = PUBLIC_CONTENT.navigation;
  private readonly menuToggle = viewChild<ElementRef<HTMLButtonElement>>('menuToggle');
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.closeMenu());
  }

  protected closeMenu(restoreFocus = false): void {
    this.isMenuOpen.set(false);
    if (restoreFocus) {
      this.menuToggle()?.nativeElement.focus();
    }
  }

  protected toggleMenu(): void {
    if (this.isMenuOpen()) {
      this.closeMenu(true);
      return;
    }

    this.isMenuOpen.set(true);
  }
}
