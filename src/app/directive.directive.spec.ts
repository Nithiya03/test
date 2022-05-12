import { DirectiveDirective } from './directive.directive';

describe('DirectiveDirective', () => {
  it('should create an instance', () => {
    const directive = new DirectiveDirective();
    expect(directive).toBeTruthy();
  });
  it('testing directive name', () => {
    const directive = new DirectiveDirective();
    expect(directive.directiveName).toBe('directive')
  });
});
