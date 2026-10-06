import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PUBLIC_CONTENT } from '../../core/config/public-content.config';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.html',
  styleUrl: './public-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicFooter {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly content = PUBLIC_CONTENT.footer;
  protected readonly pendingLabel = PUBLIC_CONTENT.pendingLabel;
}
