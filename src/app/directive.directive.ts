import { Directive } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  directiveName='directive';
  constructor() { }

}
