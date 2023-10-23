import { c as create_ssr_component, v as validate_component, i as createEventDispatcher, o as onDestroy, a as add_attribute } from './ssr-a6fe4ea2.js';
import { H as HOST } from './Const-aff6847f.js';
import { R as RepositoryFactory } from './RepositoryFactory-c6b355ca.js';
import { t as toastErr } from './toastError2-4d5b9c2d.js';

const uuid = (prefix) => {
  return prefix + "_" + Math.floor(Math.random() * 1e9) + String(Date.now());
};
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = uuid("tinymce-svelte") } = $$props;
  let { inline = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { apiKey = "no-api-key" } = $$props;
  let { channel = "6" } = $$props;
  let { scriptSrc = void 0 } = $$props;
  let { conf = {} } = $$props;
  let { modelEvents = "change input undo redo" } = $$props;
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { cssClass = "tinymce-wrapper" } = $$props;
  let container;
  let element;
  createEventDispatcher();
  onDestroy(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.apiKey === void 0 && $$bindings.apiKey && apiKey !== void 0)
    $$bindings.apiKey(apiKey);
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  if ($$props.scriptSrc === void 0 && $$bindings.scriptSrc && scriptSrc !== void 0)
    $$bindings.scriptSrc(scriptSrc);
  if ($$props.conf === void 0 && $$bindings.conf && conf !== void 0)
    $$bindings.conf(conf);
  if ($$props.modelEvents === void 0 && $$bindings.modelEvents && modelEvents !== void 0)
    $$bindings.modelEvents(modelEvents);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.cssClass === void 0 && $$bindings.cssClass && cssClass !== void 0)
    $$bindings.cssClass(cssClass);
  return `<div${add_attribute("class", cssClass, 0)}${add_attribute("this", container, 0)}>${inline ? `<div${add_attribute("id", id, 0)}${add_attribute("this", element, 0)}></div>` : `<textarea${add_attribute("id", id, 0)} style="visibility:hidden"${add_attribute("this", element, 0)}></textarea>`}</div>`;
});
const Editor_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  text = text == null ? "" : text;
  let { id = "" } = $$props;
  const uploadFileService = RepositoryFactory.get("uploadRepository");
  const conf = {
    plugins: "image table",
    toolbar1: "newdocument fullpage | blocks fontfamily fontsize | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect | heading",
    toolbar2: "image | media | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor code | insertdatetime preview | forecolor backcolor",
    toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
    menubar: false,
    file_picker_types: "image",
    async file_picker_callback(callback, value, meta) {
      var input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.onchange = async function() {
        var file = this.files[0];
        const formData = new FormData();
        formData.append("file", file);
        try {
          const res = await uploadFileService.uploadFileEditor(formData);
          console.log(res);
          callback(HOST + res?.data?.location, { alt: "" });
        } catch (error) {
          toastErr.set([
            {
              message: "File upload failed",
              type: "error"
            }
          ]);
        }
      };
      input.click();
    }
  };
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Editor, "Editor").$$render(
      $$result,
      {
        apiKey: "4zwho6iauuup5m7zl61gs294kuht6k9pzbwz87v7hnpkhh10",
        id,
        inline: "false",
        disabled: "false",
        conf,
        modelEvents: "input change undo redo",
        text: "readonly-text-output",
        value: text
      },
      {
        value: ($$value) => {
          text = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Editor_1 as E };
//# sourceMappingURL=Editor-63c08df2.js.map
