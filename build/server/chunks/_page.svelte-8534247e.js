import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute, s as setContext, d as spread, h as escape_object, f as escape_attribute_value } from './ssr-e41dcf02.js';
import { v as validate_store, a as subscribe, c as compute_rest_props } from './utils-a4f7b281.js';
import { l as loadingState } from './loading-6e9dcca6.js';
import { s as sineIn } from './index4-e6d78c98.js';
import { C as CloseButton } from './CloseButton-d467ac5d.js';
import { B as Button } from './Button-921a77e0.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { D as Drawer } from './Drawer-9a6e16dc.js';
import { L as Label, C as Checkbox } from './Checkbox-daaeebb1.js';
import { F as Fileupload } from './Fileupload-f6d15a88.js';
import { H as Helper } from './Helper-fa646f07.js';
import { I as Input } from './Input-81fd4d1e.js';
import { twMerge } from 'tailwind-merge';
import { t as t2 } from './index2-28f799b2.js';
import { R as RepositoryFactory } from './RepositoryFactory-c6b355ca.js';
import 'js-cookie';
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell, u as updateQueryParams, g as getAllQueryParams, q as queryParamsToObject, P as Pagination } from './queryParams-e01c1a16.js';
import { M as Modal } from './Modal-9a3b1ad5.js';
import moment from 'moment';
import { N as Nodata } from './Nodata-1ec52d59.js';
import { t as title, d as description } from './meta-d95f6ffd.js';
import './index-92a6d03f.js';
import './dev-1873bb41.js';
import './Wrapper-3c132686.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'axios';
import './Frame-775bdd72.js';

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
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
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
        return `${escape($t("common.createNewUser"))}`;
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
          )}${escape($t("common.createNewUser"))}</h5> ${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white" }, {}, {})}</div> <div class="flex items-center justify-center relative"><form class="w-full p-[20px] rounded-lg z-10"><div class="flex items-center justify-center text-center flex-col">${``} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 mb-2 col-span-3" }, {}, {
            default: () => {
              return `<span>${escape($t("common.avatar"))}</span> ${validate_component(Fileupload, "Fileupload").$$render(
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
                return `${escape($t("common.name"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
              return `${escape($t("common.phone"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
              return `${escape($t("common.email"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
              return `${escape($t("common.address"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
            }
          })} <textarea class="w-full rounded-lg bg-gray-50 dark:bg-gray-700 border-slate-300">${escape("")}</textarea> ${validate_component(Helper, "Helper").$$render($$result, { color: "red" }, {}, {
            default: () => {
              return `${``}`;
            }
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `${escape($t("common.role"))} ${validate_component(Select, "Select").$$render(
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
              return `${escape($t("common.gender"))} ${validate_component(Select, "Select").$$render(
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
                return `${escape($t("common.birthDate"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
                return `${escape($t("common.password"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
                return `${escape($t("common.confirmPassword"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
  $$unsubscribe_t();
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
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
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
          )}${escape($t("common.editUser"))} ${escape(user.name)}</h5> ${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white" }, {}, {})}</div> <div class="flex items-center justify-center relative"><form class="w-full p-[20px] rounded-lg z-10"><div class="flex items-center justify-center text-center flex-col">${`<img class="avt rounded-full h-24 w-24 object-cover"${add_attribute("src", "http://103.142.26.42" + user.avatar, 0)} alt="avatar">`} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 mb-2 col-span-3" }, {}, {
            default: () => {
              return `<span>${escape($t("common.avatar"))}</span> ${validate_component(Fileupload, "Fileupload").$$render(
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
                return `${escape($t("common.name"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
              return `${escape($t("common.address"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
            }
          })} <textarea class="w-full rounded-lg bg-gray-50 dark:bg-gray-700 border-slate-300">${escape(user.information)}</textarea> ${validate_component(Helper, "Helper").$$render($$result, { color: "red" }, {}, {
            default: () => {
              return `${``}`;
            }
          })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "mb-2 capitalize" }, {}, {
            default: () => {
              return `${escape($t("common.phone"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
              return `${escape($t("common.email"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
              return `${escape($t("common.role"))} ${validate_component(Select, "Select").$$render(
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
              return `${escape($t("common.gender"))} ${validate_component(Select, "Select").$$render(
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
                return `${escape($t("common.birthDate"))}<span class="text-red-600" data-svelte-h="svelte-imj58p">*</span>`;
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
  $$unsubscribe_t();
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
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
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
  $$unsubscribe_t();
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
                return `${escape($t("common.avatar"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `${escape($t("common.name"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `${escape($t("common.address"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `${escape($t("common.email"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `${escape($t("common.phone"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `${escape($t("common.birthDate"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `${escape($t("common.gender"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `${escape($t("common.role"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `${escape($t("common.action"))}`;
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
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { parentValue } = $$props;
  let { filter } = $$props;
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
  if ($$props.parentValue === void 0 && $$bindings.parentValue && parentValue !== void 0)
    $$bindings.parentValue(parentValue);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
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
    $$rendered = `<div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 py-3"><div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2 capitalize" }, {}, {
      default: () => {
        return `${escape($t("common.name"))}`;
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
        return `${escape($t("common.email"))}`;
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
        return `${escape($t("common.phone"))}`;
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
        return `${escape($t("common.gender"))} ${validate_component(Select, "Select").$$render(
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
    })}</div></div> <div class="my-[10px] flex justify-end">${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "text-black bg-transparent hover:bg-transparent"
      },
      {},
      {
        default: () => {
          return `Search`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "ml-4 text-white bg-black hover:bg-bg-black"
      },
      {},
      {
        default: () => {
          return `Reset`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $loadingState, $$unsubscribe_loadingState;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  validate_store(loadingState, "loadingState");
  $$unsubscribe_loadingState = subscribe(loadingState, (value) => $loadingState = value);
  const userService = RepositoryFactory.get("userRepository");
  let queryParams = {
    page: 1,
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
  async function filter() {
    await updateQueryParams(queryParams);
    await getUsers();
  }
  async function handlePageChange(page) {
    queryParams.page = page;
    updateQueryParams(queryParams);
    await getUsers();
  }
  function init() {
    getUsers();
  }
  init();
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="header-manager bg-white dark:bg-slate-900 p-10 my-4 rounded-xl"><div class="flex items-center justify-between"><h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold">${escape($t("common.userManagement"))}</h1> <div class="flex">${validate_component(Button, "Button").$$render($$result, { class: "mr-2" }, {}, {
      default: () => {
        return `Filter`;
      }
    })} ${validate_component(CreateUser, "CreateUser").$$render($$result, {}, {}, {})}</div></div> <div class="${"bg-[#f8f8fa] p-3 " + escape(
      "hidden",
      true
    ) + " transition-all"}">${validate_component(UserFilter, "UserFilter").$$render(
      $$result,
      { filter, parentValue: queryParams },
      {
        parentValue: ($$value) => {
          queryParams = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div></div> <div>${!users && !$loadingState ? `${validate_component(Nodata, "Nodata").$$render($$result, {}, {}, {})}` : `${!$loadingState ? `<div class="overflow-hidden">${validate_component(UserList, "UserList").$$render($$result, { items: users.docs }, {}, {})}</div>` : ``}`} ${users?.pages ? `${validate_component(Pagination, "Pagination").$$render(
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
  $$unsubscribe_t();
  $$unsubscribe_loadingState();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("User Management");
  description.set("description");
  return `${validate_component(User, "User").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8534247e.js.map
