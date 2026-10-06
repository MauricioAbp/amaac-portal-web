import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

type AccountTab = 'profile' | 'security';

@Component({
  selector: 'app-account-page',
  imports: [ReactiveFormsModule],
  templateUrl: './account-page.html',
  styleUrl: './account-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountPage {
  protected readonly activeTab = signal<AccountTab>('profile');
  protected readonly profileForm = new FormGroup({
    fullName: new FormControl('Usuario de ejemplo', { nonNullable: true }),
    phone: new FormControl('+51 900 000 000', { nonNullable: true }),
    email: new FormControl({ value: 'usuario@ejemplo.com', disabled: true }, { nonNullable: true }),
    document: new FormControl({ value: '******18', disabled: true }, { nonNullable: true })
  });

  protected selectTab(tab: AccountTab): void {
    this.activeTab.set(tab);
  }
}

