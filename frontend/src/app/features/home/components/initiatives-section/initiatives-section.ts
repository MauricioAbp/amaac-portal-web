import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PUBLIC_CONTENT } from '../../../../core/config/public-content.config';

@Component({ selector: 'app-initiatives-section', templateUrl: './initiatives-section.html', styleUrl: './initiatives-section.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class InitiativesSection {
  protected readonly content = PUBLIC_CONTENT.initiatives;
  protected readonly pendingLabel = PUBLIC_CONTENT.pendingLabel;
}
