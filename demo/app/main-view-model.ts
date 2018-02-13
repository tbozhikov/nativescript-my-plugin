import { Observable } from 'tns-core-modules/data/observable';
import { MyPlugin } from 'nativescript-my-plugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private myPlugin: MyPlugin;

  constructor() {
    super();

    this.myPlugin = new MyPlugin();
    this.message = this.myPlugin.message;
  }
}
