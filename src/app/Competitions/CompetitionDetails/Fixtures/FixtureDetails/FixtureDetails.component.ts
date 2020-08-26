import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Fixture } from 'src/app/_models/Fixtures/Fixtures';

@Component({
  selector: 'app-FixtureDetails',
  templateUrl: './FixtureDetails.component.html',
  styleUrls: ['./FixtureDetails.component.css']
})
export class FixtureDetailsComponent implements OnChanges {
  @Input() fixture: Fixture;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

}
