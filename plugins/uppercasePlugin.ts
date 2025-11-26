import type { CustomContext, CustomPlugin } from "../types.ts";

const UpperCasePlugin: CustomPlugin = {
  name: "UpperCasePlugin",
  execute: (context: CustomContext): CustomContext => {
    const content = context.content.toUpperCase();

    return { ...context, content };
  },
};

export default UpperCasePlugin;
