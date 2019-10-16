import { ElementSchemaRegistry } from '@angular/compiler';
import { SchemaMetadata, SecurityContext } from '@angular/core';

export class NodeguiElementSchemaRegistry extends ElementSchemaRegistry {
  hasProperty(tagName: string, propName: string): boolean {
    return true;
  }

  hasElement(tagName: string, schemaMetas: SchemaMetadata[]): boolean {
    return true;
  }

  getMappedPropName(propName: string): string {
    return propName;
  }

  getDefaultComponentElementName(): string {
    return 'ng-component';
  }

  securityContext(tagName: string, propName: string): any {
    return SecurityContext.NONE;
  }

  validateProperty(name: string): { error: boolean; msg?: string } {
    return { error: false };
  }

  validateAttribute(name: string): { error: boolean; msg?: string } {
    return { error: false };
  }

  allKnownElementNames(): string[] {
    return [];
  }

  normalizeAnimationStyleProperty(propName: string): string {
    return propName;
  }

  normalizeAnimationStyleValue(
    camelCaseProp: string,
    userProvidedProp: string,
    val: string | number
  ): { error: string; value: string } {
    return { error: null, value: val.toString() };
  }
}
