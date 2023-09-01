import { c as compute_rest_props } from './utils-5762d6f4.js';
import { c as create_ssr_component, v as validate_component, d as spread, h as escape_object } from './ssr-4b2a575b.js';
import { twMerge } from 'tailwind-merge';
import { I as Input } from './Input-a505f525.js';

const Fileupload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "files", "inputClass"]);
  let { value = "" } = $$props;
  let { files = void 0 } = $$props;
  let { inputClass = "border !p-0 dark:text-gray-400" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  return `${validate_component(Input, "Input").$$render(
    $$result,
    Object.assign({}, $$restProps, {
      class: twMerge(inputClass, $$props.class)
    }),
    {},
    {
      default: ({ props }) => {
        return `<input${spread([{ type: "file" }, escape_object(props)], {})}>`;
      }
    }
  )} `;
});

export { Fileupload as F };
//# sourceMappingURL=Fileupload-b277a6e9.js.map
