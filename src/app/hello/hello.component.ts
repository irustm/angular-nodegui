import {
  Component,
  ViewEncapsulation,
  Input,
  OnDestroy
} from '@angular/core';
import { GithubService } from '../github.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HelloComponent implements OnDestroy {

  @Input() set name(value) {
    this.getUsername(value);
  }

  public userName: string;

  private subscribtion: Subscription;

  constructor(private github: GithubService) {}

  private getUsername(username: string): void {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }

    this.subscribtion = this.github.getUser(username).subscribe((data: any) => {
      this.userName = data.name;
    });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
