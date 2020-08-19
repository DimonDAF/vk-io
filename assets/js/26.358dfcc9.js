(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{377:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("Базовый модуль "),a("a",{attrs:{href:"https://vk.com/dev/api_requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("запросов"),a("OutboundLink")],1),t._v(", позволяет вызывать "),a("a",{attrs:{href:"https://vk.com/dev/methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("методы API"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"описание-типов"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#описание-типов"}},[t._v("#")]),t._v(" Описание типов")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/classes/api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Reference [EN]"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"инициаnизация"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#инициаnизация"}},[t._v("#")]),t._v(" Инициализация")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/interfaces/iapioptions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Опции конструктора"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vk-io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttoken"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOKEN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"концепт"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#концепт"}},[t._v("#")]),t._v(" Концепт")]),t._v(" "),a("p",[t._v("Класс предоставляет алиасы для методов API ВКонтакте. Достаточно скопировать интересующий вас метод из документации и вызвать подобным образом:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" users "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tuser_ids"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [{ id: 1, first_name: 'Павел', last_name: 'Дуров' }]")]),t._v("\n")])])]),a("p",[t._v("Что произошло? Дело в том что "),a("code",[t._v("api.users")]),t._v(" это прокси объект, который возвращает вам анонимную функцию в которой объединяет название группы и свойство которое вы указали. Как если бы вы написали так:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" users "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users.get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tuser_ids"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [{ id: 1, first_name: 'Павел', last_name: 'Дуров' }]")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Внимание")]),t._v(" "),a("p",[t._v("Вы вполне можете вызвать метод "),a("code",[t._v("api.users.blablabla()")]),t._v(", но единственное что вам это даст — это ошибку о том что метод не найден, так что будьте осторожнее.")])]),t._v(" "),a("h2",{attrs:{id:"execute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execute"}},[t._v("#")]),t._v(" Execute")]),t._v(" "),a("p",[t._v("Метод принимает обязательный параметр "),a("code",[t._v("code")]),t._v(", остальные переданные параметры будут доступны через объект "),a("code",[t._v("Args")]),t._v(" внутри "),a("code",[t._v("code")]),t._v(".")]),t._v(" "),a("p",[t._v("В отличии от остальных методов, "),a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/classes/api.html#execute",target:"_blank",rel:"noopener noreferrer"}},[t._v("execute"),a("OutboundLink")],1),t._v(" возвращает данные в формате:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IExecuteResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tresponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\terrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExecuteError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"хранимые-процедуры"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#хранимые-процедуры"}},[t._v("#")]),t._v(" Хранимые процедуры")]),t._v(" "),a("p",[t._v("Вызов хранимых процедур вашего приложения осуществляется с помощью метода "),a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/classes/api.html#procedure",target:"_blank",rel:"noopener noreferrer"}},[t._v("procedure"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("procedure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'important'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Аргументы будут доступны в Args")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Как если бы мы вызвали")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// await api.call('execute.important', {});")]),t._v("\n")])])]),a("h2",{attrs:{id:"ограничения-запросов"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ограничения-запросов"}},[t._v("#")]),t._v(" Ограничения запросов")]),t._v(" "),a("p",[t._v("По умолчанию библиотека ограничивает количество запросов до "),a("code",[t._v("3")]),t._v(" в секунду, этот лимит соотвествует пользовательским страницам и сервисным токенам.")]),t._v(" "),a("p",[t._v("Для групповых токенов лимит состовляет "),a("code",[t._v("20")]),t._v(", установить его можно через опцию "),a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/interfaces/iapioptions.html#apilimit",target:"_blank",rel:"noopener noreferrer"}},[t._v("apiLimit"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vk-io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttoken"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\tapiLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"режимы-работы"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#режимы-работы"}},[t._v("#")]),t._v(" Режимы работы")]),t._v(" "),a("p",[t._v("Библиотека предоставляет множество режимов работы под разные ситуации. Установить режим работы можно через опцию "),a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/interfaces/iapioptions.html#apimode",target:"_blank",rel:"noopener noreferrer"}},[t._v("apiMode"),a("OutboundLink")],1),t._v(" в конструкторе.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vk-io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttoken"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\tapiMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sequential'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"sequential"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequential"}},[t._v("#")]),t._v(" sequential")]),t._v(" "),a("blockquote",[a("p",[t._v("Режим работы по умолчанию")])]),t._v(" "),a("p",[t._v("Вызывает все методы последовательно, 1 метод — 1 запрос")]),t._v(" "),a("h3",{attrs:{id:"parallel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallel"}},[t._v("#")]),t._v(" parallel")]),t._v(" "),a("p",[t._v("объединяет методы в "),a("a",{attrs:{href:"http://vk.com/dev/execute",target:"_blank",rel:"noopener noreferrer"}},[t._v("execute"),a("OutboundLink")],1),t._v(", позволяет вызывать до "),a("code",[t._v("25")]),t._v(" методов включительно. Максимальное количество методов в "),a("code",[t._v("execute")]),t._v(" контролируется опцией "),a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/interfaces/iapioptions.html#apiexecutecount",target:"_blank",rel:"noopener noreferrer"}},[t._v("apiExecuteCount"),a("OutboundLink")],1),t._v(", [1..25] методов — 1 запрос")]),t._v(" "),a("h3",{attrs:{id:"parallel-selected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallel-selected"}},[t._v("#")]),t._v(" parallel_selected")]),t._v(" "),a("p",[t._v("Схож по работе с "),a("a",{attrs:{href:"#parallel"}},[t._v("parallel")]),t._v(", за исключением того, что в "),a("a",{attrs:{href:"http://vk.com/dev/execute",target:"_blank",rel:"noopener noreferrer"}},[t._v("execute"),a("OutboundLink")],1),t._v(" будут попадать методы из опции "),a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/interfaces/iapioptions.html#apiexecutemethods",target:"_blank",rel:"noopener noreferrer"}},[t._v("apiExecuteMethods"),a("OutboundLink")],1),t._v(", а остальные через "),a("a",{attrs:{href:"#sequential"}},[t._v("sequential")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"режим-запросов"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#режим-запросов"}},[t._v("#")]),t._v(" Режим запросов")]),t._v(" "),a("p",[t._v("Вы можете контролировать, с какой периодичностью будут вызываться запросы. Установить режим работы можно через опцию "),a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/interfaces/iapioptions.html#apirequestmode",target:"_blank",rel:"noopener noreferrer"}},[t._v("apiRequestMode"),a("OutboundLink")],1),t._v(" в конструкторе.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vk-io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttoken"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\tapiRequestMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sequential'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"sequential-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequential-2"}},[t._v("#")]),t._v(" sequential")]),t._v(" "),a("blockquote",[a("p",[t._v("Режим работы по умолчанию")])]),t._v(" "),a("p",[t._v("Вызывает методы последовательно с выдержкой равной "),a("code",[t._v("1 секунда / apiMode")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"burst"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#burst"}},[t._v("#")]),t._v(" burst")]),t._v(" "),a("p",[t._v("Параллельно отправляет методы на API во весь доступный лимит с опции "),a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/interfaces/iapioptions.html#apilimit",target:"_blank",rel:"noopener noreferrer"}},[t._v("apiLimit"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Внимание")]),t._v(" "),a("p",[t._v("С данным режимом API ВКонтакте может работать нестабильно и вы будете получать EAI_AGAIN ошибку.")])]),t._v(" "),a("h2",{attrs:{id:"испоnьзование-прокси"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзование-прокси"}},[t._v("#")]),t._v(" Использование прокси")]),t._v(" "),a("p",[t._v("Для того, чтобы использовать прокси, достаточно передать опцию "),a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/interfaces/iapioptions.html#agent",target:"_blank",rel:"noopener noreferrer"}},[t._v("agent"),a("OutboundLink")],1),t._v(" в конструктор. Это должен быть "),a("a",{attrs:{href:"https://nodejs.org/api/https.html#https_class_https_agent",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS Agent"),a("OutboundLink")],1),t._v(". На примере модуля "),a("a",{attrs:{href:"https://npm.im/https-proxy-agent",target:"_blank",rel:"noopener noreferrer"}},[t._v("https-proxy-agent"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vk-io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HttpsProxyAgent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https-proxy-agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpsProxyAgent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const agent = new HttpsProxyAgent('http://168.63.76.32:3128');")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttoken"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\tagent\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"обработка-капчи"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#обработка-капчи"}},[t._v("#")]),t._v(" Обработка капчи")]),t._v(" "),a("p",[t._v("TODO: ...")]),t._v(" "),a("h2",{attrs:{id:"испоnьзование-apirequest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзование-apirequest"}},[t._v("#")]),t._v(" Использование APIRequest")]),t._v(" "),a("p",[t._v("Вам может понадобится контролировать запрос на всех стадиях, или иметь удобную оболочку для создания "),a("a",{attrs:{href:"http://vk.com/dev/execute",target:"_blank",rel:"noopener noreferrer"}},[t._v("execute"),a("OutboundLink")],1),t._v(" методов.")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://negezor.github.io/vk-io/references/vk-io/classes/apirequest.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Reference"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"ручной-вызов-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ручной-вызов-api"}},[t._v("#")]),t._v(" Ручной вызов API")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" APIRequest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vk-io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttoken"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOKEN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("APIRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\tmethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users.get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tparams"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tuser_ids"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// На каждую инстацию APIRequest создаётся Promise, доступен через свойства")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// request.resolve();")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// request.reject();")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// await request.promise;")]),t._v("\n")])])]),a("h3",{attrs:{id:"поnучение-execute-метода"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#поnучение-execute-метода"}},[t._v("#")]),t._v(" Получение execute метода")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" APIRequest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vk-io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttoken"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOKEN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("APIRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\tmethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users.get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tparams"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tuser_ids"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// API.users.get({"user_ids":1})')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);