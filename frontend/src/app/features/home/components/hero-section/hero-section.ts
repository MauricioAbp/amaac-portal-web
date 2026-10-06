import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PUBLIC_CONTENT } from '../../../../core/config/public-content.config';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSection {
  protected readonly content = PUBLIC_CONTENT.hero;
}
