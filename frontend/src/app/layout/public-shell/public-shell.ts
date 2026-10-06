import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PUBLIC_CONTENT } from '../../core/config/public-content.config';
import { PublicFooter } from '../../shared/public-footer/public-footer';
import { PublicHeader } from '../../shared/public-header/public-header';

@Component({
  selector: 'app-public-shell',
  imports: [RouterOutlet, PublicHeader, PublicFooter],
  template: `
    <a class="skip-link" href="#public-content">Saltar al contenido principal</a>
    <app-public-header />
    <p class="demo-notice" role="note">{{ publicContent.demoNotice }}</p>
    <main id="public-content"><router-outlet /></main>
    <app-public-footer />
  `,
  styles: `
    :host { display: flex; min-height: 100dvh; flex-direction: column; }
    main { flex: 1; }
    .demo-notice { margin: 0; padding: .75rem 1rem; color: #4b351f; background: #fff4df; border-bottom: 1px solid #f0d5a5; font-size: 1rem; font-weight: 700; line-height: 1.5; text-align: center; }
    .skip-link { position: fixed; top: .75rem; left: .75rem; z-index: 200; padding: .75rem 1rem; color: #fff; background: #0f2a1f; border-radius: .5rem; transform: translateY(-150%); }
    .skip-link:focus { transform: translateY(0); }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicShell {
  protected readonly publicContent = PUBLIC_CONTENT;
}
