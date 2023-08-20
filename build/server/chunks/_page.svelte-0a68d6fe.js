import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as spread, g as escape_object, f as escape_attribute_value } from './ssr-1bb711e0.js';
import { G as GradientButton } from './GradientButton-fe15b9d5.js';
import { L as Label, C as Checkbox } from './Checkbox-01f54b15.js';
import { c as compute_rest_props } from './utils-5d10fb30.js';
import { twMerge } from 'tailwind-merge';
import { I as Input, H as Helper } from './Helper-93e8b986.js';
import { I as Icon } from './Icon-ac1f5dfd.js';
import { t as title, d as description } from './meta-8db97ba1.js';
import './Button-292d63d1.js';
import './Wrapper-9b5de03f.js';
import './index2-b7662a81.js';

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
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "color", "aClass"]);
  let { href = "#" } = $$props;
  let { color = "text-primary-600 dark:text-primary-500" } = $$props;
  let { aClass = "inline-flex items-center hover:underline" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(aClass, color, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const css$1 = {
  code: ".toast.s-8qAUd7lXYtIE{color:white;padding:1rem;border-radius:0.25rem;display:flex;align-items:center;gap:1rem;margin-bottom:0.5rem;animation:slide-in 0.5s linear forwards}.success.s-8qAUd7lXYtIE{background:#a8ff78;background:-webkit-linear-gradient(to right, #78ffc2, #a8ff78);background:linear-gradient(to right, #00ffb3, #a8ff78)}.error.s-8qAUd7lXYtIE{background:#ee0979;background:-webkit-linear-gradient(to right, #ee0979, #ff6a00);background:linear-gradient(to right, #ee0979, #ff6a00)}",
  map: null
};
const ToastCustom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toasts = [];
  $$result.css.add(css$1);
  return `<div class="toast-container">${each(toasts, (toast) => {
    return `${toast.visible ? `<div class="${"toast " + escape(toast.type === 0 ? "success" : "error", true) + " s-8qAUd7lXYtIE"}"><p class="flex items-center">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        class: "text-3xl",
        icon: toast.type === 0 ? "fluent-emoji:cat-face" : "fluent-emoji-flat:crying-cat"
      },
      {},
      {}
    )} ${escape(toast.message)}</p> <button>${validate_component(Icon, "Icon").$$render($$result, { icon: "foundation:x" }, {}, {})}</button> </div>` : ``}`;
  })} </div>`;
});
const css = {
  code: ".sign-up.s-Qsl_P8nCjIvH.s-Qsl_P8nCjIvH{display:flex;align-items:center;justify-content:center;min-height:100vh}.sign-up-form.s-Qsl_P8nCjIvH.s-Qsl_P8nCjIvH{position:relative;background-color:rgba(0, 0, 0, 0.1);padding:20px;border-radius:20px;z-index:10}.back.s-Qsl_P8nCjIvH.s-Qsl_P8nCjIvH{height:100%;border-radius:10px;position:absolute;z-index:1}.bg-sign.s-Qsl_P8nCjIvH.s-Qsl_P8nCjIvH{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.bg-sign_animate.s-Qsl_P8nCjIvH.s-Qsl_P8nCjIvH{position:absolute;width:300px;height:300px;filter:blur(1px);background:#a8ff78;background:-webkit-linear-gradient(to right, #78ffd785, #59ff00);background:linear-gradient(to right, #01ffb3, #59ff00);background-image:url(https://w.ladicdn.com/s700x850/5fffa60b5f0dcb001234da20/img_2801-20210118045850.jpg);background-repeat:no-repeat;background-size:cover;border-radius:50%;animation:s-Qsl_P8nCjIvH-moving 10s ease infinite}.input-avt.s-Qsl_P8nCjIvH.s-Qsl_P8nCjIvH{display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column}.input-avt.s-Qsl_P8nCjIvH img.s-Qsl_P8nCjIvH{border-radius:50%;height:100px;width:100px;object-fit:cover}.toast-container.s-Qsl_P8nCjIvH.s-Qsl_P8nCjIvH{z-index:1000;position:fixed;top:100px;right:1rem;display:flex;flex-direction:column-reverse;align-items:flex-end}@keyframes s-Qsl_P8nCjIvH-slide-in{from{transform:translateX(100%)}to{transform:translateX(0%)}}@keyframes s-Qsl_P8nCjIvH-moving{0%{box-shadow:0 0 10px #01ffb3;rotate:0deg}100%{box-shadow:0 0 10px #ff0101;rotate:360deg}}",
  map: null
};
const SignUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let admit = false;
  const currentDateTime = /* @__PURE__ */ new Date();
  let user = {
    fullname: "",
    phone: "",
    avatar: "",
    email: "",
    password: "",
    role: 1,
    created: currentDateTime.getDate()
  };
  let passwordConfirm = "";
  let toasts = [];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="sign-up s-Qsl_P8nCjIvH"><div class="back 2xl:w-1/4 xl:w-1/4 md:w-2/4 w-11/12 s-Qsl_P8nCjIvH"><div class="bg-sign s-Qsl_P8nCjIvH"><div class="bg-sign_animate s-Qsl_P8nCjIvH" data-svelte-h="svelte-1i9gjjc"></div></div></div> <form class="sign-up-form 2xl:w-1/4 xl:w-1/4 md:w-2/4 w-11/12 s-Qsl_P8nCjIvH"><div class="input-avt s-Qsl_P8nCjIvH">${``} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 mb-2 col-span-3" }, {}, {
      default: () => {
        return `<span data-svelte-h="svelte-1fkf9ez">Avatar</span> ${validate_component(Fileupload, "Fileupload").$$render(
          $$result,
          { value: user.avatar },
          {
            value: ($$value) => {
              user.avatar = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <div class="grid gap-4 mb-6 md:grid-cols-1"><div>${validate_component(Label, "Label").$$render($$result, { for: "username", class: "mb-2" }, {}, {
      default: () => {
        return `Fullname<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "username",
        placeholder: "Flowbite",
        value: user.fullname
      },
      {
        value: ($$value) => {
          user.fullname = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Helper, "Helper").$$render($$result, { color: "red" }, {}, {
      default: () => {
        return `${``}`;
      }
    })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "mb-2" }, {}, {
      default: () => {
        return `Phone number<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "tel",
        id: "phone",
        placeholder: "1234-567-890",
        value: user.phone
      },
      {
        value: ($$value) => {
          user.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Helper, "Helper").$$render($$result, { color: "red" }, {}, {
      default: () => {
        return `${``}`;
      }
    })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
      default: () => {
        return `Email address<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        id: "email",
        placeholder: "john.doe@company.com",
        value: user.email
      },
      {
        value: ($$value) => {
          user.email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Helper, "Helper").$$render($$result, { color: "red" }, {}, {
      default: () => {
        return `${``}`;
      }
    })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "password", class: "mb-2" }, {}, {
      default: () => {
        return `Password<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        id: "password",
        placeholder: "•••••••••",
        value: user.password
      },
      {
        value: ($$value) => {
          user.password = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Helper, "Helper").$$render($$result, { color: "red" }, {}, {
      default: () => {
        return `${``}`;
      }
    })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "confirm_password", class: "mb-2" }, {}, {
      default: () => {
        return `Confirm password<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        id: "confirm_password",
        placeholder: "•••••••••",
        value: passwordConfirm
      },
      {
        value: ($$value) => {
          passwordConfirm = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Helper, "Helper").$$render($$result, { color: "red" }, {}, {
      default: () => {
        return `${``}`;
      }
    })}</div> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "mb-6 space-x-1",
        required: true,
        checked: admit
      },
      {
        checked: ($$value) => {
          admit = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `I agree with the ${validate_component(A, "A").$$render(
            $$result,
            {
              href: "/",
              class: "text-primary-700 dark:text-primary-600 hover:underline"
            },
            {},
            {
              default: () => {
                return `terms and conditions`;
              }
            }
          )}.`;
        }
      }
    )}</div> <div class="btn-signup grid grid-cols-1">${validate_component(GradientButton, "GradientButton").$$render(
      $$result,
      {
        color: "pinkToOrange",
        type: "submit",
        disabled: !admit
      },
      {},
      {
        default: () => {
          return `Submit`;
        }
      }
    )}</div></form></div> <div class="toast-container s-Qsl_P8nCjIvH">${each(toasts, (toast) => {
      return `${toast.visible ? `<div class="${"toast " + escape(toast.type === 0 ? "success" : "error", true)}"><p class="flex items-center">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          class: "text-3xl",
          icon: toast.type === 0 ? "fluent-emoji:cat-face" : "fluent-emoji-flat:crying-cat"
        },
        {},
        {}
      )} ${escape(toast.message)}</p> <button>${validate_component(Icon, "Icon").$$render($$result, { icon: "foundation:x" }, {}, {})}</button> </div>` : ``}`;
    })}</div> ${validate_component(ToastCustom, "ToastCustom").$$render($$result, { toasts }, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("Sign Up");
  description.set("Sign up description");
  return `${validate_component(SignUp, "SignUp").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0a68d6fe.js.map
