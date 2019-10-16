import { Sanitizer, SecurityContext } from '@angular/core';

export class NodeguiSanitizer extends Sanitizer {
  sanitize(context: SecurityContext, value: string): string {
    return value;
  }
}
