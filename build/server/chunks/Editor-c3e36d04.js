import { c as create_ssr_component, v as validate_component, i as createEventDispatcher, o as onDestroy, a as add_attribute } from './ssr-3e906495.js';

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
  const conf = {
    plugins: "image",
    toolbar1: "newdocument fullpage | blocks fontfamily fontsize | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect | heading",
    toolbar2: "image | media | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor code | insertdatetime preview | forecolor backcolor",
    toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
    menubar: false,
    images_upload_url: "/api/v1.0/upload/editor"
  };
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Editor, "Editor").$$render(
      $$result,
      {
        apiKey: "4zwho6iauuup5m7zl61gs294kuht6k9pzbwz87v7hnpkhh10",
        id: "uuid",
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
//# sourceMappingURL=Editor-c3e36d04.js.map
