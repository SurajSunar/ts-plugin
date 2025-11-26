import { BlogEngine } from "./BlogEngine.ts";
import ReversePlugin from "./plugins/reversePlugin.ts";
import UpperCasePlugin from "./plugins/uppercasePlugin.ts";

const blog = new BlogEngine();

blog.use(UpperCasePlugin).use(ReversePlugin);

console.log(blog.process({ content: "This is blog content" }));
