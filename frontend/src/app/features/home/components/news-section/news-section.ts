import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PUBLIC_CONTENT } from '../../../../core/config/public-content.config';

@Component({ selector: 'app-news-section', templateUrl: './news-section.html', styleUrl: './news-section.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class NewsSection {
  protected readonly content = PUBLIC_CONTENT.news;
  protected readonly pendingLabel = PUBLIC_CONTENT.pendingLabel;
}
