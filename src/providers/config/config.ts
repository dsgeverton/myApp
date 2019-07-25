import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  private config =  {
    show_slide: false,
    name: "",
    username: "",

  }

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }


  setConfigData(show_slide?: boolean, name?:string, username?:string): any {
    let config = {
      show_slide: false,
      name: "",
      username: ""
    }

    if (show_slide) {
      config.show_slide = show_slide;
    }

    if (name) {
      config.name = name;
    }

    if (username) {
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }

}
