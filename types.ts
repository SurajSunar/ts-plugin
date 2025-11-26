export interface CustomContext {
  content: string;
}

export interface CustomPlugin {
  name: string;
  execute: (context: CustomContext) => CustomContext;
}
