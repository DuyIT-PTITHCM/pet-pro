import { c as create_ssr_component, v as validate_component, a as add_attribute } from './ssr-bf7d1ced.js';
import { B as Button } from './Button-80a135bb.js';
import './Indicator.svelte_svelte_type_style_lang-f470b2bc.js';
import { D as DarkMode } from './DarkMode-00f314d9.js';
import { L as Label, C as Checkbox } from './Checkbox-3c5bf704.js';
import { I as Input } from './Input-dbb9e443.js';
import { H as Helper } from './Helper-73169d71.js';
import 'js-cookie';
import { T as ToastError } from './ToastError-b9c827f1.js';
import './utils-9f8bdf1a.js';
import './dev-1873bb41.js';
import 'tailwind-merge';
import './Wrapper-9c23fd68.js';
import './index-1c7c9ace.js';

const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user = {
    email: "",
    password: "",
    rememberMe: false
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="darkmode fixed top-2 right-2 rounded-lg z-50 bg-slate-200 dark:bg-slate-900">${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})}</div> <div class="relative flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0"><div class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 z-10"><div class="p-6 space-y-4 md:space-y-6 sm:p-8"><div class="w-full flex justify-center my-5"><a href="/" class="flex items-center text-3xl font-semibold text-gray-900 dark:text-white"><img class="w-10 h-10 mr-2 rounded-full" src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" alt="logo">
                    PetOne</a></div> <form class="space-y-4 md:space-y-6"><div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "block mb-2" }, {}, {
      default: () => {
        return `Email`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        placeholder: "Enter your email",
        value: user.email
      },
      {
        value: ($$value) => {
          user.email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Helper, "Helper").$$render($$result, { class: "mt-2" }, {}, {})}</div> <div class="mb-6">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "password",
        class: "block mb-2",
        title: "Password should be at least 8 characters long and contain at least one digit and one special character"
      },
      {},
      {
        default: () => {
          return `Password`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        placeholder: "Enter your password",
        value: user.password
      },
      {
        value: ($$value) => {
          user.password = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Helper, "Helper").$$render($$result, { class: "mt-2" }, {}, {})}</div> <div class="flex justify-between">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      { checked: user.rememberMe },
      {
        checked: ($$value) => {
          user.rememberMe = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Remember me`;
        }
      }
    )} <a href="/" class="text-primary-600 dark+:text-primary-500 hover:underline font-bold text-sm" data-svelte-h="svelte-1fkfff4">Forgot password ?</a></div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
      default: () => {
        return `Log In`;
      }
    })} <a href="/signup" class="text-primary-600 dark+:text-primary-500 hover:underline font-bold text-sm text-right w-full block" data-svelte-h="svelte-1kfjhtd">Sign up for Pet One</a></form></div></div> <div class="absolute w-full h-full dark:brightness-50 transition-all"><img class="w-full h-full object-cover"${add_attribute("src", "/images/loginbg.jpg", 0)} alt=""></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-xyf4ii_START -->${$$result.title = `<title>
        Đăng Nhập
    </title>`, ""}<!-- HEAD_svelte-xyf4ii_END -->`, ""} ${validate_component(Login, "Login").$$render($$result, {}, {}, {})} ${validate_component(ToastError, "ToastError").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-690cfe33.js.map
