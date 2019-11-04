import {
  Component,
  OnInit,
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
export class HelloComponent implements OnInit, OnDestroy {
  @Input() name;

  public avatarUrl: string;

  private subscribtion: Subscription;

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.subscribtion = this.github
      .getUser(this.name)
      .subscribe((data: any) => {
        console.log(data);
        this.avatarUrl = data.avatar_url;
      });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
