import { c as create_ssr_component, v as validate_component, e as escape, d as spread, h as escape_object, f as escape_attribute_value } from './ssr-ff87f5ac.js';
import { G as GradientButton } from './GradientButton-b471ec79.js';
import { D as DarkMode } from './DarkMode-b4e6783f.js';
import { L as Label, C as Checkbox } from './Checkbox-e62a679d.js';
import { F as Fileupload } from './Fileupload-a5f2f202.js';
import { H as Helper } from './Helper-93be3815.js';
import { I as Input } from './Input-f2746f69.js';
import { c as compute_rest_props } from './utils-cbfaeced.js';
import { twMerge } from 'tailwind-merge';
import { T as ToastError } from './ToastError-8b8fb256.js';
import { L as Loading } from './Loading2-6295dfa2.js';
import './Button-b21ec95a.js';
import './dev-1873bb41.js';
import './Wrapper-ea5e1848.js';
import './index2-b3c6d9ed.js';
import './Icon-24752f02.js';
import './loading-97a70063.js';

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
const SignUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let admit = false;
  let user = {
    name: "",
    phone: "",
    avatar: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  let validPassword = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="darkmode fixed top-2 right-2 rounded-lg z-50 bg-slate-200 dark:bg-slate-900">${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})}</div> <div class="flex items-center justify-center min-h-screen relative"><form class="2xl:w-1/4 xl:w-1/4 md:w-2/4 w-11/12 bg-slate-100 dark:bg-slate-900 relative p-[20px] rounded-lg z-10"><div class="flex items-center justify-center text-center flex-col">${``} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 mb-2 col-span-3" }, {}, {
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
        return `Name<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "username",
        placeholder: "Flowbite",
        value: user.name
      },
      {
        value: ($$value) => {
          user.name = $$value;
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
        return `${`${escape(validPassword)}`}`;
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
        value: user.confirmPassword
      },
      {
        value: ($$value) => {
          user.confirmPassword = $$value;
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
        class: "space-x-1",
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
    )}</div></form> <div class="absolute w-full h-full dark:brightness-50 transition-all"><img class="w-full h-full object-cover" src="/images/signupbg.jpg" alt=""></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-6gyu89_START -->${$$result.title = `<title>Sing Up</title>`, ""}<!-- HEAD_svelte-6gyu89_END -->`, ""} ${validate_component(SignUp, "SignUp").$$render($$result, {}, {}, {})} ${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})} ${validate_component(ToastError, "ToastError").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b7baa7bf.js.map
