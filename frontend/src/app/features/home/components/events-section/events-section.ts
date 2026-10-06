import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PUBLIC_CONTENT } from '../../../../core/config/public-content.config';

@Component({ selector: 'app-events-section', templateUrl: './events-section.html', styleUrl: './events-section.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class EventsSection {
  protected readonly content = PUBLIC_CONTENT.events;
  protected readonly pendingLabel = PUBLIC_CONTENT.pendingLabel;
}
