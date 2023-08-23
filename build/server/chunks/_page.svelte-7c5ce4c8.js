import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-0e636c26.js';
import { C as CloseButton, s as sineIn } from './CloseButton-01a59c3d.js';
import { B as Button } from './Button-0ce10487.js';
import { I as Icon } from './Icon-7c5b6750.js';
import { D as Drawer } from './Drawer-349f4a29.js';
import { g as getCookie } from './cookieUtils-3c057440.js';
import axios from 'axios';
import { t as title, d as description } from './meta-8992f632.js';
import './utils-f848b3c2.js';
import 'tailwind-merge';
import 'js-cookie';
import './index2-042bed90.js';

const CreateUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let createUserFrom = true;
  let transitionParamsRight = { x: 320, duration: 200, easing: sineIn };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Create New User`;
      }
    })} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        placement: "right",
        width: "w-1/4",
        transitionType: "fly",
        transitionParams: transitionParamsRight,
        id: "createUserForm",
        hidden: createUserFrom
      },
      {
        hidden: ($$value) => {
          createUserFrom = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex items-center"><h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "mdi:create",
              class: "w-4 h-4 mr-2.5"
            },
            {},
            {}
          )}Create New User</h5> ${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white" }, {}, {})}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const axiosClient = axios.create({
  baseURL: "http://103.142.26.42/api/v1.0/",
  headers: {
    "content-type": "application/json",
    "Authorization": "Bearer " + getCookie("access_token")
  }
});
const prefix$1 = "auth";
const AuthRepository = {
  post(payload) {
    return axiosClient.post(`${prefix$1}/register`, payload);
  }
};
const prefix = "user-management";
const UserRepository = {
  async get() {
    return axiosClient.get(`${prefix}`);
  }
};
const repositories = {
  authRepository: AuthRepository,
  userRepository: UserRepository
};
const RepositoryFactory = {
  get: (name) => repositories[name]
};
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const userService = RepositoryFactory.get("userRepository");
  let data;
  userService.get().then((res) => {
    data = res;
  });
  console.log(data);
  return `<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl"><div class="flex items-center justify-between"><h1 class="dark:text-white text-4xl font-bold" data-svelte-h="svelte-1houpev">User management</h1> <div class="">${validate_component(Button, "Button").$$render($$result, { class: "mr-2" }, {}, {
    default: () => {
      return `Filter`;
    }
  })} ${validate_component(CreateUser, "CreateUser").$$render($$result, {}, {}, {})}</div></div> <div class="${"mt-5 bg-white " + escape("h-0", true) + " transition-all"}"></div></div> <div class="w-full" data-svelte-h="svelte-1jss0xl"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("User Management");
  description.set("description");
  return `${validate_component(User, "User").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7c5ce4c8.js.map
