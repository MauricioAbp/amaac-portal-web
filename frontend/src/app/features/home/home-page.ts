import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSection } from './components/about-section/about-section';
import { CampaignsSection } from './components/campaigns-section/campaigns-section';
import { DonationSection } from './components/donation-section/donation-section';
import { EventsSection } from './components/events-section/events-section';
import { HeroSection } from './components/hero-section/hero-section';
import { InitiativesSection } from './components/initiatives-section/initiatives-section';
import { NewsSection } from './components/news-section/news-section';
import { ParticipationSection } from './components/participation-section/participation-section';

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, AboutSection, CampaignsSection, InitiativesSection, NewsSection, EventsSection, DonationSection, ParticipationSection],
  template: `
    <app-hero-section />
    <app-about-section />
    <app-campaigns-section />
    <app-initiatives-section />
    <app-news-section />
    <app-events-section />
    <app-donation-section />
    <app-participation-section />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {}

