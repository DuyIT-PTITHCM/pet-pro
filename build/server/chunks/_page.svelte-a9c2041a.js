import { c as create_ssr_component, v as validate_component, e as escape, a as each, b as add_attribute, s as setContext, d as spread, h as escape_object, f as escape_attribute_value } from './ssr-8f3207f5.js';
import { v as validate_store, a as subscribe, c as compute_rest_props } from './utils-2dd7664d.js';
import { l as loadingState } from './loading-3ab47950.js';
import { s as sineIn } from './index3-e6d78c98.js';
import { C as CloseButton, M as Modal } from './Modal-a4ec3489.js';
import { B as Button } from './Button-27ef65c4.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import { D as Drawer } from './Drawer-cd86f807.js';
import { L as Label, C as Checkbox } from './Checkbox-7a46d6c3.js';
import { F as Fileupload } from './Fileupload-ac4371a6.js';
import { H as Helper } from './Helper-f9e6ec54.js';
import { I as Input } from './Input-c07b967b.js';
import { twMerge } from 'tailwind-merge';
import { R as RepositoryFactory } from './RepositoryFactory-27484a07.js';
import 'js-cookie';
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell, g as getAllQueryParams, q as queryParamsToObject, P as Pagination, u as updateQueryParams } from './queryParams-1c8508b3.js';
import moment from 'moment';
import { t as title, d as description } from './meta-de7dd7b3.js';
import './index-3be464aa.js';
import './Frame-f1b561b4.js';
import './dev-1873bb41.js';
import './Wrapper-ae21bffe.js';
import './Const-3b06302f.js';
import './cookieUtils-3c057440.js';
import 'axios';

const ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "divClass"]);
  let { size = "md" } = $$props;
  let { divClass = "inline-flex rounded-lg shadow-sm" } = $$props;
  setContext("group", { size });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      },
      { role: "group" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> `;
});
const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value = void 0 } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0)
    $$bindings.underlineClass(underlineClass);
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$props.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}>${placeholder ? `<option disabled selected value="">${escape(placeholder)}</option>` : ``}${items.length ? each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  }) : `${slots.default ? slots.default({}) : ``}`}</select> `;
});
const CreateUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let createUserFrom = true;
  let transitionParamsRight = { x: 320, duration: 200, easing: sineIn };
  let user = {
    name: "",
    phone: "",
    avatar: "",
    email: "",
    information: "",
    birthDate: "",
    gender: "",
    password: "",
    confirmPassword: "",
    role: "customer"
  };
  let genders = [
    { value: "male", name: "Male" },
    { value: "female", name: "Female" },
    { value: "other", name: "Other" }
  ];
  let roles = [
    { value: "customer", name: "Customer" },
    { value: "employer", name: "Employee" }
  ];
  let validPassword = "";
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
        width: "2xl:w-1/4 xl:w-1/4 lg:w-2/4 sm:w-2/4 w-full",
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
          )}Create New User</h5> ${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white" }, {}, {})}</div> <div class="flex items-center justify-center relative"><form class="w-full p-[20px] rounded-lg z-10"><div class="flex items-center justify-center text-center flex-col">${``} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 mb-2 col-span-3" }, {}, {
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
          })}</div> <div class="grid gap-4 mb-6 md:grid-cols-1"><div>${validate_component(Label, "Label").$$render(
            $$result,
            {
              for: "username",
              class: "mb-2 capitalize"
            },
            {},
            {
              default: () => {
                return `name<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
              }
            }
          )} ${validate_component(Input, "Input").$$render(
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
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "mb-2 capitalize" }, {}, {
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
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2 capitalize" }, {}, {
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
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "address", class: "mb-2 capitalize" }, {}, {
            default: () => {
              return `address<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
            }
          })} <textarea class="w-full rounded-lg bg-gray-50 dark:bg-gray-700 border-slate-300">${escape("")}</textarea> ${validate_component(Helper, "Helper").$$render($$result, { color: "red" }, {}, {
            default: () => {
              return `${``}`;
            }
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Role
            ${validate_component(Select, "Select").$$render(
                $$result,
                {
                  class: "mt-2",
                  items: roles,
                  value: user.role
                },
                {
                  value: ($$value) => {
                    user.role = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Gender
            ${validate_component(Select, "Select").$$render(
                $$result,
                {
                  class: "mt-2",
                  items: genders,
                  value: user.gender
                },
                {
                  value: ($$value) => {
                    user.gender = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div> <div>${validate_component(Label, "Label").$$render(
            $$result,
            {
              for: "birthDate",
              class: "mb-2 capitalize"
            },
            {},
            {
              default: () => {
                return `birthDate<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
              }
            }
          )} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              id: "birthDate",
              type: "date",
              max: new Date(Date.now()).toISOString().split("T")[0],
              value: user.birthDate
            },
            {
              value: ($$value) => {
                user.birthDate = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div>${validate_component(Label, "Label").$$render(
            $$result,
            {
              for: "password",
              class: "mb-2 capitalize"
            },
            {},
            {
              default: () => {
                return `Password<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
              }
            }
          )} ${validate_component(Input, "Input").$$render(
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
          })}</div> <div>${validate_component(Label, "Label").$$render(
            $$result,
            {
              for: "confirm_password",
              class: "mb-2 capitalize"
            },
            {},
            {
              default: () => {
                return `Confirm password<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
              }
            }
          )} ${validate_component(Input, "Input").$$render(
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
          })}</div></div> <div class="btn-signup grid grid-cols-1">${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
            default: () => {
              return `Submitt`;
            }
          })}</div></form></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const DeleteSoftUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { userid = 0 } = $$props;
  let popupModal = false;
  if ($$props.userid === void 0 && $$bindings.userid && userid !== void 0)
    $$bindings.userid(userid);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render(
      $$result,
      {
        outline: true,
        color: "red",
        class: "text-xl rounded-e-lg"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:delete-20-filled" }, {}, {})}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: true,
        open: popupModal
      },
      {
        open: ($$value) => {
          popupModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-center"><h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-kr2z1u">Are you sure you want to delete this user?</h3> ${validate_component(Button, "Button").$$render($$result, { color: "red", class: "mr-2" }, {}, {
            default: () => {
              return `Yes, I&#39;m sure`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `No, cancel`;
            }
          })}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const EditUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let genders = [
    { value: "male", name: "Male" },
    { value: "female", name: "Female" },
    { value: "other", name: "Other" }
  ];
  let roles = [
    { value: "customer", name: "Customer" },
    { value: "employer", name: "Employee" }
  ];
  let editUserForm = true;
  let transitionParamsRight = { x: 320, duration: 200, easing: sineIn };
  let { userId = 0 } = $$props;
  let user = {
    name: "John Doe",
    avatar: "",
    information: "thonn onn18",
    email: "duynait1112@gmail.com",
    phone: "12345678910",
    birthDate: "1990-01-01",
    gender: "male",
    role: "customer"
  };
  (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  if ($$props.userId === void 0 && $$bindings.userId && userId !== void 0)
    $$bindings.userId(userId);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render(
      $$result,
      {
        outline: true,
        color: "blue",
        class: "text-xl"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render($$result, { icon: "iconamoon:edit-fill" }, {}, {})}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        placement: "right",
        width: "2xl:w-1/4 xl:w-1/4 lg:w-2/4 sm:w-2/4 w-full",
        transitionType: "fly",
        transitionParams: transitionParamsRight,
        id: "createUserForm",
        hidden: editUserForm
      },
      {
        hidden: ($$value) => {
          editUserForm = $$value;
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
          )}Edit User ${escape(user.name)}</h5> ${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white" }, {}, {})}</div> <div class="flex items-center justify-center relative"><form class="w-full p-[20px] rounded-lg z-10"><div class="flex items-center justify-center text-center flex-col">${`<img class="avt rounded-full h-24 w-24 object-cover"${add_attribute("src", "http://103.142.26.42" + user.avatar, 0)} alt="avatar">`} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 mb-2 col-span-3" }, {}, {
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
          })}</div> <div class="grid gap-4 mb-6 md:grid-cols-1"><div>${validate_component(Label, "Label").$$render(
            $$result,
            {
              for: "username",
              class: "mb-2 capitalize"
            },
            {},
            {
              default: () => {
                return `name<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
              }
            }
          )} ${validate_component(Input, "Input").$$render(
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
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "address", class: "mb-2 capitalize" }, {}, {
            default: () => {
              return `address<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
            }
          })} <textarea class="w-full rounded-lg bg-gray-50 dark:bg-gray-700 border-slate-300">${escape(user.information)}</textarea> ${validate_component(Helper, "Helper").$$render($$result, { color: "red" }, {}, {
            default: () => {
              return `${``}`;
            }
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "mb-2 capitalize" }, {}, {
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
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2 capitalize" }, {}, {
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
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Role
                        ${validate_component(Select, "Select").$$render(
                $$result,
                {
                  class: "mt-2",
                  items: roles,
                  value: user.role
                },
                {
                  value: ($$value) => {
                    user.role = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Gender
                        ${validate_component(Select, "Select").$$render(
                $$result,
                {
                  class: "mt-2",
                  items: genders,
                  value: user.gender
                },
                {
                  value: ($$value) => {
                    user.gender = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div> <div>${validate_component(Label, "Label").$$render(
            $$result,
            {
              for: "birthDate",
              class: "mb-2 capitalize"
            },
            {},
            {
              default: () => {
                return `birthDate<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
              }
            }
          )} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              id: "birthDate",
              type: "date",
              max: new Date(Date.now()).toISOString().split("T")[0],
              value: user.birthDate
            },
            {
              value: ($$value) => {
                user.birthDate = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div> <div class="btn-signup grid grid-cols-1">${validate_component(Button, "Button").$$render($$result, { color: "yellow", type: "submit" }, {}, {
            default: () => {
              return `Submit`;
            }
          })}</div></form></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { userId = 0 } = $$props;
  if ($$props.userId === void 0 && $$bindings.userId && userId !== void 0)
    $$bindings.userId(userId);
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      class: "text-xl",
      color: "green"
    },
    {},
    {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render($$result, { icon: "iconamoon:profile-fill" }, {}, {})}`;
      }
    }
  )}`;
});
const UserList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let sortBy = "";
  let sortDirection = 1;
  let sortedUsers;
  let isCheck = false;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  {
    {
      sortedUsers = [...items].sort((a, b) => {
        let aValue = a[sortBy];
        let bValue = b[sortBy];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.localeCompare(bValue) * sortDirection;
        } else if (typeof aValue === "number" && typeof bValue === "number") {
          return (aValue - bValue) * sortDirection;
        } else {
          return (aValue > bValue ? 1 : aValue < bValue ? -1 : 0) * sortDirection;
        }
      });
    }
  }
  return `${validate_component(Table, "Table").$$render(
    $$result,
    {
      hoverable: true,
      divClass: "rounded-xl overflow-x-scroll"
    },
    {},
    {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: isCheck }, {}, {})}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Id`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Avatar`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Name`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Address`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Email`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Phone`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Birth Date`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Gender`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Role`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Action`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${each(sortedUsers, (item) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "w-3" }, {}, {
                    default: () => {
                      return `<div class="flex justify-center">${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: isCheck, value: item.id }, {}, {})}</div>`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.id)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<img${add_attribute("src", !item.avatar ? "/images/logo.png" : item.avatar, 0)} class="rounded-full w-12 h-12" alt="">`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.name)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      tdClass: "line-clamp-3 text-ellipsis max-w-[300px] min-w-[200px] text-justify px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(!item.information ? "-" : item.information)}`;
                      }
                    }
                  )} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.email)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.phone)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(!item.birthDate != null ? moment(new Date(item?.birthDate)).format("DD-MM-YYYY") : "-")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          class: "text-3xl",
                          icon: item.gender == "male" ? "noto:male-sign" : item.gender == "female" ? "noto:female-sign" : item.gender == "other" ? "noto:rainbow-flag" : "fluent-emoji:red-question-mark"
                        },
                        {},
                        {}
                      )}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          class: "text-3xl",
                          icon: item.role == "customer" ? "fluent-emoji:office-worker-light" : "fluent-emoji:factory-worker-light"
                        },
                        {},
                        {}
                      )}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Profile, "Profile").$$render($$result, { userId: item.id }, {}, {})} ${validate_component(EditUser, "EditUser").$$render($$result, { userId: item.id }, {}, {})} ${validate_component(DeleteSoftUser, "DeleteSoftUser").$$render($$result, { userid: item.id }, {}, {})} `;
                        }
                      })} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    }
  )}`;
});
const UserFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let genders = [
    { value: "male", name: "Male" },
    { value: "female", name: "Female" },
    { value: "other", name: "Other" },
    { value: "", name: "All" }
  ];
  let paramFilter = {
    gender: null,
    email: null,
    phone: null,
    name: null
  };
  let { parentValue } = $$props;
  if ($$props.parentValue === void 0 && $$bindings.parentValue && parentValue !== void 0)
    $$bindings.parentValue(parentValue);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (paramFilter.gender === "") {
        paramFilter.gender = null;
      } else if (paramFilter.email === "") {
        paramFilter.email = null;
      } else if (paramFilter.phone === "") {
        paramFilter.phone = null;
      } else if (paramFilter.name === "") {
        paramFilter.name = null;
      }
    }
    {
      {
        parentValue = paramFilter;
      }
    }
    $$rendered = `<div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"><div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2 capitalize" }, {}, {
      default: () => {
        return `Name`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "name",
        placeholder: "john.doe@company.com",
        value: paramFilter.name
      },
      {
        value: ($$value) => {
          paramFilter.name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2 capitalize" }, {}, {
      default: () => {
        return `Email address`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        id: "email",
        placeholder: "john.doe@company.com",
        value: paramFilter.email
      },
      {
        value: ($$value) => {
          paramFilter.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "mb-2 capitalize" }, {}, {
      default: () => {
        return `Phone`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "tel",
        id: "phone",
        placeholder: "0908070605",
        value: paramFilter.phone
      },
      {
        value: ($$value) => {
          paramFilter.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="w-full">${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Gender
            ${validate_component(Select, "Select").$$render(
          $$result,
          {
            class: "gender-select mt-2",
            items: genders,
            value: paramFilter.gender
          },
          {
            value: ($$value) => {
              paramFilter.gender = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        outline: true,
        class: "mt-4 ml-4 float-right"
      },
      {},
      {
        default: () => {
          return `RESET`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loadingState, $$unsubscribe_loadingState;
  validate_store(loadingState, "loadingState");
  $$unsubscribe_loadingState = subscribe(loadingState, (value) => $loadingState = value);
  const userService = RepositoryFactory.get("userRepository");
  let queryParams = {
    page: 1,
    // Example query parameter
    email: null,
    gender: null,
    phone: null,
    name: null
  };
  let users;
  loadingState.set(true);
  async function getUsers() {
    loadingState.set(true);
    let queryFilter = getAllQueryParams();
    queryParams = queryParamsToObject(queryFilter);
    const res = await userService.get(queryParams);
    users = res.data.data;
    loadingState.set(false);
  }
  getUsers();
  async function handlePageChange(page) {
    queryParams.page = page;
    updateQueryParams(queryParams);
    await getUsers();
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl"><div class="flex items-center justify-between"><h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold" data-svelte-h="svelte-dosubm">User management</h1> <div class="flex">${validate_component(Button, "Button").$$render($$result, { class: "mr-2" }, {}, {
      default: () => {
        return `Filter`;
      }
    })} ${validate_component(CreateUser, "CreateUser").$$render($$result, {}, {}, {})}</div></div> <div class="${"bg-transparent " + escape(
      "hidden",
      true
    ) + " transition-all"}">${validate_component(UserFilter, "UserFilter").$$render(
      $$result,
      { parentValue: queryParams },
      {
        parentValue: ($$value) => {
          queryParams = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render($$result, { class: "float-right mt-4", outline: true }, {}, {
      default: () => {
        return `OKE`;
      }
    })}</div></div> <div>${!users && !$loadingState ? `<h1 data-svelte-h="svelte-i5gzyz">nodata</h1>` : `${!$loadingState ? `<div class="overflow-hidden">${validate_component(UserList, "UserList").$$render($$result, { items: users.docs }, {}, {})}</div>` : ``}`} ${users?.pages ? `${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        currentPage: users.currentPage,
        totalPages: users.pages,
        onPageChange: handlePageChange
      },
      {},
      {}
    )}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_loadingState();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("User Management");
  description.set("description");
  return `${validate_component(User, "User").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a9c2041a.js.map