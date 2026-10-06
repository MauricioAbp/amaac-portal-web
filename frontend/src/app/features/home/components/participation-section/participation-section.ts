import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PUBLIC_CONTENT } from '../../../../core/config/public-content.config';

@Component({ selector: 'app-participation-section', templateUrl: './participation-section.html', styleUrl: './participation-section.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class ParticipationSection {
  protected readonly content = PUBLIC_CONTENT.participation;
  protected readonly pendingLabel = PUBLIC_CONTENT.pendingLabel;
}
