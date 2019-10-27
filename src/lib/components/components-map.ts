import { Injectable } from '@angular/core';
import { NgButton } from './button';
import { NgComponent } from './component';
import { NgWindow } from './window';
import { NgText } from './text';
import { NgView } from './view';
import { NgCheckbox } from './checkbox';
import { NgDial } from './dial';
import { NgImage } from './image';
import { NgLineEdit } from './line-edit';
import { NgPlainTextEdit } from './pline-text-edit';
import { NgRadioButton } from './radiobutton';

export type Constructable<T> = new () => T;
export type NgComponentClass = Constructable<NgComponent>;

@Injectable()
export class ComponentsMap {
  public map: Map<string, NgComponentClass> = new Map<
    string,
    NgComponentClass
  >();

  constructor() {
    this.map.set(NgButton.nodeName, NgButton);
    this.map.set(NgWindow.nodeName, NgWindow);
    this.map.set(NgText.nodeName, NgText);
    this.map.set(NgView.nodeName, NgView);
    this.map.set(NgCheckbox.nodeName, NgCheckbox);
    this.map.set(NgDial.nodeName, NgDial);
    this.map.set(NgImage.nodeName, NgImage);
    this.map.set(NgLineEdit.nodeName, NgLineEdit);
    this.map.set(NgPlainTextEdit.nodeName, NgPlainTextEdit);
    this.map.set(NgRadioButton.nodeName, NgRadioButton);
  }
}
