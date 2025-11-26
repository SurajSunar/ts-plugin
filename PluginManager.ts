import type { CustomContext, CustomPlugin } from "./types.ts";

export class PluginManager {
  plugins: CustomPlugin[] = [];

  register(plugin: CustomPlugin) {
    if (!plugin.name) {
      throw new Error("Plugin name is required.");
    }

    this.plugins.push(plugin);
  }

  run(context: CustomContext) {
    let result = context;

    for (const plugin of this.plugins) {
      result = plugin.execute(result);
    }

    return result;
  }
}
