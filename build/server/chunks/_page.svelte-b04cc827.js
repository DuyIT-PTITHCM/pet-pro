import { c as create_ssr_component, v as validate_component, a as add_attribute } from './ssr-1bb711e0.js';
import { B as Button } from './Button-292d63d1.js';
import { D as DarkMode } from './DarkMode-9d086b08.js';
import { L as Label, C as Checkbox } from './Checkbox-01f54b15.js';
import { I as Input, H as Helper } from './Helper-93e8b986.js';
import { t as title, d as description } from './meta-8db97ba1.js';
import './utils-5d10fb30.js';
import 'tailwind-merge';
import './Wrapper-9b5de03f.js';
import './index2-b7662a81.js';

const loginbg = "/_app/immutable/assets/loginbg.a77cb2ae.jpg";
const css = {
  code: ".darkmode.s-Ps3fogeZGiPV.s-Ps3fogeZGiPV{background-color:rgb(0, 0, 0);z-index:1000}.loginform.s-Ps3fogeZGiPV.s-Ps3fogeZGiPV{position:relative}.bgloginform.s-Ps3fogeZGiPV.s-Ps3fogeZGiPV{position:absolute;width:100%;height:100%}.bgloginform.s-Ps3fogeZGiPV img.s-Ps3fogeZGiPV{width:100%;height:100%;object-fit:cover}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleSubmit } = $$props;
  if ($$props.handleSubmit === void 0 && $$bindings.handleSubmit && handleSubmit !== void 0)
    $$bindings.handleSubmit(handleSubmit);
  $$result.css.add(css);
  return `<div class="darkmode fixed top-2 right-2 rounded-lg s-Ps3fogeZGiPV">${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})}</div> <div class="loginform flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 s-Ps3fogeZGiPV"><div class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 z-10"><div class="p-6 space-y-4 md:space-y-6 sm:p-8"><div class="w-full flex justify-center my-5"><a href="/" class="flex items-center text-3xl font-semibold text-gray-900 dark:text-white"><img class="w-10 h-10 mr-2 rounded-full" src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" alt="logo">
                    PetOne</a></div> <form class="space-y-4 md:space-y-6"><div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "block mb-2" }, {}, {
    default: () => {
      return `Email`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email"
    },
    {},
    {}
  )} ${validate_component(Helper, "Helper").$$render($$result, { class: "mt-2" }, {}, {})}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "password", class: "block mb-2" }, {}, {
    default: () => {
      return `Password`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "password",
      type: "password",
      placeholder: "Enter your password"
    },
    {},
    {}
  )} ${validate_component(Helper, "Helper").$$render($$result, { class: "mt-2" }, {}, {})}</div> <div class="flex justify-between">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
    default: () => {
      return `Remember me`;
    }
  })} <a href="/" class="text-primary-600 dark+:text-primary-500 hover:underline font-semiboldd" data-svelte-h="svelte-yv2kib">Forgot password</a></div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
    default: () => {
      return `Login`;
    }
  })}</form></div></div> <div class="bgloginform s-Ps3fogeZGiPV"><img${add_attribute("src", loginbg, 0)} alt="" class="s-Ps3fogeZGiPV"></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  title.set("Login page");
  description.set("description page");
  let handleSubmit = () => {
    console.log("hh");
  };
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `${validate_component(Login, "Login").$$render($$result, { handleSubmit }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b04cc827.js.map
