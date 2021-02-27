1.Installation
npm install -g @vue/cli @vue/cli-service-global
vue ui / vue create app-name

2.data()
3.Display data with {{ }}
4.Events with options
5.Methods
6.Computed properties
7.Watchers
8.Lifecycle hooks
9.v-if, v-show
10.v-for, key binding and how to get index
11.v-model - lazy loading
12.:class="", :class="{'--extend': characters > 100}"
13.scoped style, sass (node-sass, sass-loader)
14.Components (local/globaly registered) 
15.Props, event $emit with param
16.Slots
17.How to change props
18.Custom directives
19.Teleport
20.Mixins

21.Composition API
22.Ref, reactive, toRefs
23.Async components
24.Suspense
25.Provide and inject

26.Vue js bundling process:
-public folder 
-routing lazy-loading
-async components


Routing - default component vs lazy-loaded chunk
Vue Resources - requesty
VeeValidate - walidacja formularzy
Vuex - state management
PWA
Vue DevTools


eslint essentials -> "plugin:vue/vue3-strongly-recommended"
vetur template interpolation:on

.prettierrc settings
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "none"
}

to add external style - vue.config.js:
module.exports = {
    css:{
        loaderOptions:{
            sass:{
                prependData: '@import "@/styles/base.scss";'
            }
        }
    }
}

