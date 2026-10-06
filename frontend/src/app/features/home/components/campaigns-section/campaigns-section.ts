import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PUBLIC_CONTENT } from '../../../../core/config/public-content.config';

@Component({
  selector: 'app-campaigns-section',
  templateUrl: './campaigns-section.html',
  styleUrl: './campaigns-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampaignsSection {
  protected readonly content = PUBLIC_CONTENT.campaigns;
  protected readonly pendingLabel = PUBLIC_CONTENT.pendingLabel;
}
