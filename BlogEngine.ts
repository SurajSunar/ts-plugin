import { PluginManager } from "./PluginManager.ts";
import type { CustomContext, CustomPlugin } from "./types.ts";

export class BlogEngine {
  pluginManager: PluginManager;

  constructor() {
    this.pluginManager = new PluginManager();
  }

  use(plugin: CustomPlugin) {
    this.pluginManager.register(plugin);

    return this;
  }

  process(context: CustomContext) {
    return this.pluginManager.run(context);
  }
}
