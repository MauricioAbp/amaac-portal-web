import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PUBLIC_CONTENT } from '../../../../core/config/public-content.config';

@Component({ selector: 'app-donation-section', templateUrl: './donation-section.html', styleUrl: './donation-section.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class DonationSection {
  protected readonly content = PUBLIC_CONTENT.donation;
  protected readonly pendingLabel = PUBLIC_CONTENT.pendingLabel;
}
