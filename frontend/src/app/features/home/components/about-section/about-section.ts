import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PUBLIC_CONTENT } from '../../../../core/config/public-content.config';

@Component({
  selector: 'app-about-section',
  imports: [RouterLink],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutSection {
  protected readonly content = PUBLIC_CONTENT.about;
}
