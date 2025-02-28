# v1.292.0 (Fri Mar 01 2024)

### Release Notes

#### Release by 29.02.2024 ([#1079](https://github.com/salute-developers/plasma/pull/1079))

## Components

### Drawer

- добавлены компоненты `Drawer` и `Panel`
- включен в поставку `plasma-{b2c/web/sdds-serv}`
- для компонента `Drawer` написаны тесты

feat(plasma-new-hope): add Drawer (https://github.com/salute-developers/plasma/pull/1068)

### Indicator

-  добавлены тесты и документация
-  добавлен в поставку для библиотек: `plasma-{web,b2c}`
-  интегрирован в компонент `Avatar`

 
feat(plasma-new-hope, web, b2c): Indicator component (https://github.com/salute-developers/plasma/pull/1067)

### ButtonGroup

- добавлен новый компонент и тесты с документацией
- исправлена структура файлов для `Spiner`
- добавлен компонент `Button` в поставку в `plasma-{b2c,web}`
- обновлена документация для `Button`
- обновлены тесты зависящие от `Button`

 
feat(plasma-new-hope): add button group component (https://github.com/salute-developers/plasma/pull/1061)

### TextField [Note]

TextField перевезен на новую Архитектуру, могут быть незначительные отличия от текущего поведeния.

### Рефакторинг TextField

- поведение анимация `label` внутри поля стала запускаться одинаковым между `b2c` и `web`. Запуск на фокусе, а не на начале редактирования.
- при показе `label` внутри поля больше не учитывается `placeholder`

### TextField [plasma-b2c]

- исправлено поведение для цвет `placeholder`, больше не зависит от наличия `leftHelper`

 
feat(plasma-new-hope): TextField (https://github.com/salute-developers/plasma/pull/949)


## Infra

### Upload assets

- добавлена возможность указать пакет/релиз к которому нужно прикрепить assets  

 
plasma-infra: Upload assets for target package(-s) (https://github.com/salute-developers/plasma/pull/1054)

### plasma-temple
- удалены все упоминания о пакете `plasma-temple` из текущего репозитория
 
Remove `plasma-temple` from repo [Part 1] (https://github.com/salute-developers/plasma/pull/1048)


## Tokens

* Добавлен пакет `@salutejs/data-themes`, который содержит все созданные json-схемы, а также набор методов, позволяющие сгенерировать темы для web-платформы в формате js объектов для `styled-component` и css стилей для подключения с помощью нативных способов.

* В пакетах с наборами тем были объеденены токены с цветами и типографикой. 

* Так же если необходимы токены цвета или типографики отдельно, забрать их можно по пути `@salutejs/<vertical-name>-themes/tokens` для общих токенов и `@salutejs/<vertical-name>-themes/tokens/<theme-name>` для конкретных тем. 

* Добавлена новые пакеты с наборами тем для следующих дизайн вертикаль:
  * `@salutejs/plasma-themes` - для вертикали `Plasma` - пока нигде не используется;
  * `@salutejs/sdds-themes` - для вертикали `SDDS` - используется с библиотекой `@salutejs/sdds-serv`;
  * `@salutejs/cladera-online-themes` - для вертикали `Caldera Online`  - используется с библиотеками `@salutejs/cladera-online` и `@salutejs/cladera`;
  * `@salutejs/flamingo-themes` - для вертикали `Flamingo` - пока нигде не используется;

### New-hope

* Удалена зависимость `@salutejs/plasma-tokens` из пакета.

### SDDS-Serv

* Обновлена документация со способом установки и подключением;
* Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/sdds-themes`;
* Обновлён способ подключение темы в storybook;
* Исправлена сторис LiveDemo в компоненте `Toast`;
* Заменены токены цветов в конфигах компонента `Segment` на актуальные

### Caldera / Caldera Online

* Обновлена документация со способом установки и подключением;
* Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/caldera-online-themes`;
* Обновлён способ подключение темы в storybook;
* Исправлена сторис LiveDemo в компоненте `Toast`;
* Заменены токены цветов в конфигах компонента `Segment` на актуальные

 
Add new tokens architecture (https://github.com/salute-developers/plasma/pull/1074)


## Docs

### Сontributing Typos

- исправлены опечатки  в документации  
- добавлен параграф об обязательном наличие локально browser `chromium`

 
plasma-docs: Fix cypress cli commands (https://github.com/salute-developers/plasma/pull/1058)


## Misc

### SDDS Android

- добавлен `SDDS Android` проект, включающий: 

  -   Theme Builder Gradle Plugin
  -   SDDS Sandbox App
  -   UIKit
  -   UIKit Compose
  -   файл с лицензией и `README.md` в каждый модуль

 
chore[sdds-android]: SDDS Android project was created. (https://github.com/salute-developers/plasma/pull/1045)

### CI/CD Pipeline [SDDS Android]

- Project build system migration to composite builds was made to support multiproject structure. 
- Code quality check workflow was created. 
- Merge report tasks were added. 
- Codeowners file was modified.

 
chore[sdds-android, cicd]: code quality check workflow (https://github.com/salute-developers/plasma/pull/1070)

---

#### 🚀 Enhancement

- Release by 29.02.2024 [#1079](https://github.com/salute-developers/plasma/pull/1079) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike) [@malilex](https://github.com/malilex) [@shuga2704](https://github.com/shuga2704) [@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233))
- feat(plasma-web/b2c): add Drawer to packages ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c): Refactor TextField [#949](https://github.com/salute-developers/plasma/pull/949) ([@Yeti-or](https://github.com/Yeti-or))
- feat(plasma-new-hope): refactor stretching prop in ButtonGroup component ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web/b2c): update tests depending on Button ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web/b2c): add ButtonGroup ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web/b2c): add Button from new-hope & update tests ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-web/b2c,sdds-serv): regenerate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: update package-locks [no ci] ([@Yakutoc](https://github.com/Yakutoc))
- docs: regenerate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- docs(plasma-b2c/web,sdds-serv): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope, web, b2c): Added Indicator component [#1067](https://github.com/salute-developers/plasma/pull/1067) ([@shuga2704](https://github.com/shuga2704))
- chore: bump manual package-locks [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Alexander Malishev ([@malilex](https://github.com/malilex))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.285.0 (Thu Feb 15 2024)

### Release Notes

#### Release by 14.02.2024 ([#1047](https://github.com/salute-developers/plasma/pull/1047))

## Components

### SSRProvider

- SSRProvider перенесен в библиотеку plasma-new-hope
- добавлен в поставку b2c/web/asdk
- из `plasma-asdk` удалена plasma-core зависимость

 
feat(plasma-new-hope): add ssr provider component (https://github.com/salute-developers/plasma/pull/1021)

### Calendar

- добавлено новое свойство `onChangeStartOfRange` в библиотеки `plasma-{web,b2c}`

### After 

<img width="600" alt="prop onChangeStartOfRange" src="https://github.com/salute-developers/plasma/assets/2895992/a2e01d6e-01f1-4041-b57f-57bb7d3de54e" />

 
plasma-web: Add `onChangeStartOfRange` prop into Calendar (https://github.com/salute-developers/plasma/pull/1014)

### Overlay

- добавлен в новой архитектуре
- добавлен в поставку для `plasma-{b2c/web}`
- написаны тесты и документация
- интегрирован в компоненты `Toast`, `Modal`

 
feat(plasma-new-hope/web/b2c): overlay component (https://github.com/salute-developers/plasma/pull/1033)

### Select

- Обновлены зависимости у callback onChangeValue, который вызывался при выборе элемента в `multiselect` режиме для библиотеки `@salutejs/plasma-hope`

 
fix(plasma-hope): Add value deps for `Select` component with multiselect mode (https://github.com/salute-developers/plasma/pull/1040)

### Tabs

-   выполнен редизайн компонента `Tabs`
-   компонент добавлен в `plasma-web/b2c` в новой архитектуре
-   добавлены новые свойства для `TabItem`
-   `TabsController` теперь deprecated.  Для подключения клавиатурной навигации необходимо дополнительно прокинуть свойства `index, itemIndex, onIndexChange`.

 
feat(plasma-web, plasma-b2c): Tabs refactor and redesign (https://github.com/salute-developers/plasma/pull/983)

### Avatar & AvatarGroup

-   Упрощен функционал аватара
-   Avatar и AvatarGroup были добавлены в web, b2c

 
feat(plasma-new-hope, plasma-web, plasma-b2c): Avatar & AvatarGroup (https://github.com/salute-developers/plasma/pull/1036)

### Combobox

- добавлен компонент `Combobox` c новым дизайном в библиотеку `@salutejs/plasma-new-hope` для тем plasma-b2c и plasma-web, а также в `@salutejs/plasma-b2c` и `@salutejs/plasma-web`

single

![image](https://github.com/salute-developers/plasma/assets/26903236/9178c72d-15ca-4dc4-b722-cc32956a6820)

multiple 

![image](https://github.com/salute-developers/plasma/assets/26903236/972c419a-25f2-4ddc-9afe-9e59785e19d8)
  
 
feat(plasma-new-hope): Add `Combobox` component (https://github.com/salute-developers/plasma/pull/1032)


## Icons

-   поправлен `tree-shaking` пакета иконок
-   компонент `Icon` теперь **deprecated**

 
plasma-icons: fix tree-shaking (https://github.com/salute-developers/plasma/pull/1031)

## Fonts

- обновлены шрифты SBSans Display для CDN


## Infra

### Plasma-web-docs

- обновлен пакет `docusaurus` и все что с ним связано до `@latest` версии
- исправлены **все** уязвимости в пакете `plasma-web-docs`

 
plasma-infra: Bump `Docusaurus` to latest [plasma-web-docs] (https://github.com/salute-developers/plasma/pull/1025)

### Plasma-ui-docs

- обновлен пакет `docusaurus` и все что с ним связано до `@latest` версии
- исправлены **все** уязвимости в пакете `plasma-ui-docs`

 
plasma-infra: Bump `Docusaurus` to latest [plasma-ui-docs] (https://github.com/salute-developers/plasma/pull/1026)

### DEV Stage 

- добавлен dev stage для возможности сделать deploy dev branch. Нужен для QA     

 
plasma-infra: Setup s3 DEV stage – manual run (https://github.com/salute-developers/plasma/pull/1029)

### Fonts

- обновлены шрифты для документации, storybook , тестов

 
chore: update sb fonts (https://github.com/salute-developers/plasma/pull/1041)


## Misc

### Сборка без `styled-components`

- добавили возможность использовать `plasma-{web,b2c}`  без `styled-components`

Пример использования:

```js
import { TextArea } from @salutejs/plasma-web/css;
```

 
plasma-web/plasma-b2c: Добавлена сборка без styled-components (https://github.com/salute-developers/plasma/pull/942)

### SDDS SRVC

- добавлена библиотека sdds-srvc
- поднят storybook в рамках pull request
- опубликован npm пакет
- добавлена Typography (в виде компонентов как старого, так и нового формата)
- добавлены компоненты: Button, Checkbox, Dropdown, Link, Modal, Popup, Radiobox, Segment, Spinner, Switch

 
feat(sdds-srvc): add sdds srvc package (https://github.com/salute-developers/plasma/pull/1023)

### Caldera

- добавлена библиотека Caldera
- поднят storybook в рамках pull request
- опубликован npm пакет
- добавлена Typography (в виде компонентов как старого, так и нового формата)
- добавлены компоненты: Button, Checkbox, Dropdown, Link, ModalBase, PopupBase, Radiobox, Segment, Spinner, Switch

 
feat(caldera): add Caldera package (https://github.com/salute-developers/plasma/pull/990)

### Caldera-online

- добавлена библиотека Caldera-online
- поднят storybook в рамках pull request
- опубликован npm пакет
- добавлена Typography (в виде компонентов как старого, так и нового формата)
- добавлены компоненты: Button, Checkbox, Dropdown, Link, ModalBase, PopupBase, Radiobox, Segment, Spinner, Switch

 
feat(caldera): add caldera online package (https://github.com/salute-developers/plasma/pull/1012)

---

#### 🚀 Enhancement

- Release by 14.02.2024 [#1047](https://github.com/salute-developers/plasma/pull/1047) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yeti-or](https://github.com/Yeti-or) [@luizasok](https://github.com/luizasok) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Add `Combobox` component ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-web, b2c): Added documentation for Avatar and AvatarGroup [#1036](https://github.com/salute-developers/plasma/pull/1036) ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-new-hope): Classnames fixes ([@shuga2704](https://github.com/shuga2704))
- fix(plasma-new-hope): add key navigation to Tabs [#983](https://github.com/salute-developers/plasma/pull/983) ([@kayman233](https://github.com/kayman233))
- feat(plasma-hope): remove Tabs ([@kayman233](https://github.com/kayman233))
- feat(plasma-web/b2c): add Overlay component [#1033](https://github.com/salute-developers/plasma/pull/1033) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(b2c): handle "onChangeStartOfRange" prop [#1014](https://github.com/salute-developers/plasma/pull/1014) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c/web): add SSRProvider from new-hope ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- test(plasma-b2c): Add tests and snapshots for `Combobox` component ([@neretin-trike](https://github.com/neretin-trike))
- chore: update fonts for storybook ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(b2c, web): Added tests for Avatar and AvatarGroup ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-new-hope, web, b2c): Insignificant improvements in Avatar.stories ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-web, plasma-b2c): Populated AvatarGroup into web, b2c ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-web, plasma-b2c): Populated Avatar into web, b2c ([@shuga2704](https://github.com/shuga2704))
- fix(plasma-web, plasma-b2c): fix default Tabs sizes ([@kayman233](https://github.com/kayman233))
- fix(plasma-new-hope): remove carousel and observers from Tabs ([@kayman233](https://github.com/kayman233))
- fix(plasma-web, plasma-b2c): height, arrows design fixes ([@kayman233](https://github.com/kayman233))
- feat(plasma-web, plasma-b2c): Tabs refactor and redesign ([@kayman233](https://github.com/kayman233))
- fix(plasma-hope): Add value deps for `Select` component with multiselect mode [#1040](https://github.com/salute-developers/plasma/pull/1040) ([@neretin-trike](https://github.com/neretin-trike))
- docs(plasma-web/b2c): regenerate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- test(plasma-b2c/web): add Overlay snapshots ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c, plasma-web): Wrapped Spinner up in styled only in SC build [#942](https://github.com/salute-developers/plasma/pull/942) ([@shuga2704](https://github.com/shuga2704))
- build(plasma-b2c): add css build ([@Yeti-or](https://github.com/Yeti-or))
- chore: api report after adding "onChangeStartOfRange" prop ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-asdk/web/b2c/hope): regenerate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.277.0 (Thu Feb 01 2024)

### Release Notes

#### Release by 31.01.2024 ([#1020](https://github.com/salute-developers/plasma/pull/1020))

## Components

### Modal

-   поправлена генерация id для `Modal, Popup`
-   добавлены тесты для `Modal, Popup`
 
plasma-new-hope: fix id generation for Modal, Popup (https://github.com/salute-developers/plasma/pull/1001)

### Avatar и Avatar Group

- добавлены компоненты Avatar и AvatarGroup
- Временно добавлен полифил `focus-visible` в linaria.tsx

 
feat(plasma-new-hope): Avatar & AvatarGroup (https://github.com/salute-developers/plasma/pull/962)

### Select

- добавлен компонент `Select` c новым дизайном в библиотеку `@salutejs/plasma-new-hope` для тем plasma-b2c и plasma-web
- добавлена клавиатурная навигация со следующими комбинациями:
    -   Tab - переход на таргет (кнопку)
    -   Shift + tab - выход с него (теряем фокус)
    -   Пробел / стрелка вверх / стрелка вниз / enter - открыть выпадающий список и переместиться на первый элемент
    -   Стрелки вверх / вниз ходим по элементам 
    -   Пробел / enter - выбираем элемент, закрываем выпадающий список и переходим фокусом снова на таргет (кнопку)
    -   Если мы ходим по селекту и нажимаем Tab - выпадающий список закрывается и теряем фокус
    -   Если мы ходим по селекту и нажимаем Escape - выпадающий список закрывается и фокусом остаёмся на таргете
    -   В мультиселекте тоже самое кроме закрытия выпадающего списка при выборе элемента
    -   При активном состоянии у таргета, нажимаем стрелку влево / вправо - попадаем на первый чип
    -   Когда находимся на первом чипе, нажимаем стрелку влево / вправо - переходим по чипам
    -   Нажимаем backspace - удаляем выбранный чип и переходим на предыдущий
    -   Если удалили последний чип, то фокусируемся на таргете
    -   Если находимся в выборе элемента из выпадающего списка и нажимаем стрелку влево / вправо - попадаем на самый последний чип
    -   Если находимся в режиме выбора элемента и нажимаем стрелку вниз / вверх находясь на последнем / первом элементе, то перескакиваем в начало / в конец

### Icons

- добавлены новые иконки и изменена структура файлов старых в библиотеку `@salutejs/plasma-new-hope`

### Button

- добавлены токены для компонента `Button`, регулирующие высоту и scale при hover и active состояниях #706 
- исправлен баг, при котором у компонента `Button` будет отсутствовать бэкграунд в состоянии disabled и при hover'е

### Checkbox, Radiobox

- добавлены токены для компонент `Checkbox`, `Radiobox`, отвечающие за отступы

### Chip

- добавлен токен для компонента `Chip`, отвечающий за цвет иконки закрытия

### Dropdown

- добавлена поддержка react-компонент в props `contentLeft` и `contentRight`
- убрано свойство isNested, т.к. теперь можно вкладывать Dropdown друг в друга без него

 
feat(plasma-new-hope): Add `Select` component (https://github.com/salute-developers/plasma/pull/956)

### Toast

- добавлен компонент Toast в новой архитектуре
- добавлен в поставку в b2c/web
- обновлены тесты
- обновлена документация

 
feat(plasma-new-hope/web/b2c): toast refactor & redesign (https://github.com/salute-developers/plasma/pull/1010)

### TextArea

- добавлена поддержка переноса строки для свойства `placeholder`;
- исправлено поведение компонента при использовании свойств `defaultValue` и `placeholder`.

 
fix(plasma-new-hope): Fixes for `TextArea` component (https://github.com/salute-developers/plasma/pull/1017)


## Icons

### Hotfix

-   поправлена публикация пакета со всем содержимым билда

 
fix(plasma-icons): fix package publish (https://github.com/salute-developers/plasma/pull/989)


## Infra

### Workflow for `dev` branch

- добавлен отдельный workflow для **безусловной** сборки документация и storybook на основе dev ветки 

 
plasma-infra(documentation): Add documentation workflow for dev branch (https://github.com/salute-developers/plasma/pull/996)

### Коллаборативный прогон [Perftool]

- добавлен коллаборативный прогон (прогон одновременно двух веток в рамках одного процесса)  

 
ci: use perftool collaborative mode (https://github.com/salute-developers/plasma/pull/991)

### Override `lerna ls`

- переопределили логику `ignoreChanges` для команды `lerna ls` чтобы изменения файлов `*.component-test.tsx` тоже учитывалось      

 
plasma-infra: Override `lerna ls` config (https://github.com/salute-developers/plasma/pull/995)

### Mattermost notifications

- добавлено уведомление для упавшего процесса публикации релиз кандидата 

 
plasma-infra: Add notification when publish failed (https://github.com/salute-developers/plasma/pull/935)

### Release pull request 

- добавлен выбор ветки для создания release pull request   

 
plasma-infra: Refactoring release pull request workflow  (https://github.com/salute-developers/plasma/pull/1007)

### Versionate docs

- вынесли этот процесс в отдельный, от публикация релиза, workflow.  

 
plasma-infra: Move the `versionate_docs` job to a separate workflow (https://github.com/salute-developers/plasma/pull/1006)

### Perftool

- убиран verbose loglevel в `perftool`

 
Remove perftool max log verbosity (https://github.com/salute-developers/plasma/pull/1004)


## Misc

### Storybook

-   поправлено отображение примера Popup в storybook

 
chore: fix Popup storybook example (https://github.com/salute-developers/plasma/pull/997)

---

#### 🚀 Enhancement

- Release by 31.01.2024 [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@luizasok](https://github.com/luizasok) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv) [@nikewht](https://github.com/nikewht) [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c/web): add Toast with new architecture ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*): Add margin tokens to `Radiobox` component and update configs ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-*): Add margin tokens to `Checkbox` component and update configs ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-01-31 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-b2c/web/hope): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: fix Popup storybook example [#997](https://github.com/salute-developers/plasma/pull/997) ([@kayman233](https://github.com/kayman233))
- test: added tests for ModalBase, PopupBase ([@kayman233](https://github.com/kayman233))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.271.1 (Fri Jan 19 2024)

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.271.0 (Thu Jan 18 2024)

### Release Notes

#### Release by 18.01.2024 ([#981](https://github.com/salute-developers/plasma/pull/981))

## Components

### Carousel

- добавлен пропс `scrollSnapStop` в `Carousel`

 
feat(plasma-core): Add new prop (scrollSnapStop) to the Carousel component (https://github.com/salute-developers/plasma/pull/940)


### Skeleton

- добавлен компонент в новой архитектуре
- включен в поставку b2c/web
- удален из plasma-hope
- написаны тесты
- поправлен компонент Button для использования в styled

 
feat(plasma-new-hope/b2c/web): add skeleton with new architecture (https://github.com/salute-developers/plasma/pull/954)

### Skeleton

-   добавлены размеры под новую типографику

 
feat(plasma-b2c/web): add skeleton new typography sizes (https://github.com/salute-developers/plasma/pull/960)


### Header

-  добавлен prop, который позволяет применять mediaQuery для S-viewport по условию
-  добавлен тест на данный кейс

 
feat(plasma-ui): add property to show/hide subtitle on S viewport (https://github.com/salute-developers/plasma/pull/958)


### Popover arrow

-   Поправлено отображение `Popover arrow` в Safari, Firefox

 
fix(plasma-web): fix Popover arrow in Safari, Firefox (https://github.com/salute-developers/plasma/pull/963)


### Image

- добавлен в поставку `plasma-{b2c, web}`
- добавлен UI тесты
- удален из `plasma-hope`

 
feat(plasma-new-hope/web/b2c): Image refactor & redesign (https://github.com/salute-developers/plasma/pull/968)

### Badge

-  добавлен в поставку `plasma-{b2c,web,new-hope}`
-  дополнены тесты

 
feat(plasma-new-hope/web/b2c): Badge refactor & redesign (https://github.com/salute-developers/plasma/pull/964)

### Counter

- добавлен в поставку `plasma-{b2c,web,new-hope}`
- написаны тесты и документация

 
feat(plasma-new-hope/web/b2c): Counter component (https://github.com/salute-developers/plasma/pull/965)


## Icons

-  добавлены **новые** иконки размера 24x24, 1025 штук
-  добавлены **новые** категории иконок в разделе icons на сайте

feat(plasma-icons): Add new 24x24 icons (https://github.com/salute-developers/plasma/pull/955)


## Infra

### Perftool

- обновление версии @salutejs/perftool@0.24

 
Update perftool (https://github.com/salute-developers/plasma/pull/932)

### @Auto-it CLI 

- добавлена возможность прокинуть опции/флаги для запуска - **auto shipit**;
- выключили генерацию changelog для pubslish: canary, RC;  

 
plasma-infra: Pass cli options for "@auto-it" (https://github.com/salute-developers/plasma/pull/890)

### Changelog workflow

- добавлена новая категория `Bugs`
- экранирование спец символов 

 
plasma-infra: Improve changelog workflow  (https://github.com/salute-developers/plasma/pull/967)


## Tokens

### Tokens naming

- изменена нотация с `camelCase` на `kebab-case` для старых токенов цветов и типографики

Было:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 54" src="https://github.com/salute-developers/plasma/assets/26903236/b83f776b-e4f9-43e1-9506-bff3d25f7e71">

Стало:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 17" src="https://github.com/salute-developers/plasma/assets/26903236/10298375-1a54-4dd4-8fe3-8af74c3e40b1">

 
feat(plasma-tokens-utils): Update formatting tokens name from camelCase to kebab-case  (https://github.com/salute-developers/plasma/pull/971)

## Bugs

### Calendar

-   добавлен `ref` в `forwardRef` вторым аргументом

 
feat(plasma-new-hope): fix CalendarDouble ref (https://github.com/salute-developers/plasma/pull/959)


### Carousel

- решен баг с пролистыванием (onDragScroll) в accessible mode - mobile & desktop.
- control panel в карусели работает корректно (можно выбрать scrollAlign).

 
fix(plasma-hope/plasma-web): Turn onDragScroll off by default in accessibility mode in Carousel. Fix storybook control panel in it. (https://github.com/salute-developers/plasma/pull/957)

### Spinner

- исправлено отображение компонента `Spinner` при размере 8px

 
fix(plasma-new-hope): Fix size for `Spinner` component (https://github.com/salute-developers/plasma/pull/966)

## Misc

### Typography

-  root для типографики вынесен в общий компонент
-  className, style теперь явно задаются в компоненте
-  исправлены конфиги для asdk поставки

 
feat(plasma-new-hope/b2c/web): redefining classnames for typography (https://github.com/salute-developers/plasma/pull/947)

---

#### 🚀 Enhancement

- Release by 18.01.2024 [#981](https://github.com/salute-developers/plasma/pull/981) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-web/b2c): add Counter to packages ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope/web/b2c): remove QuantityBadge [#964](https://github.com/salute-developers/plasma/pull/964) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c/web/core): add Badge & QuantityBadge to packages ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web/b2c/new-hope): add Image in new architecture ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c): add new typography sizes for Skeleton with snapshots ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c): add Skeleton with snapshots ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-asdk/b2c/web): fix typography stories props ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into t1 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-b2c/web): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- docs(plasma-b2c/web/hope): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web, plasma-b2c): Added isDragScrollDisabled property to control panel ([@shuga2704](https://github.com/shuga2704))
- docs(plasma-asdk/b2c/web): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: manual package.lock bump ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.261.0 (Mon Dec 25 2023)

#### 🚀 Enhancement

- hot-fix(plasma-new-hope): redefining classnames for typography [#951](https://github.com/salute-developers/plasma/pull/951) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-asdk/b2c/web): fix typography stories props ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- docs(plasma-asdk/b2c/web): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: manual package.lock bump ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.260.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

- Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
- feat: Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-b2c/web): add stretch prop and update test [#931](https://github.com/salute-developers/plasma/pull/931) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope/web/b2c): remove extra views for SegmentItem ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c/web): separate configs for segment ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c): add Segment component with tests ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c): refactor typography configs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c/web): add paragraphText component ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web/b2c): add typography as tokens-mixins ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c/web): add typography from new-hope ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*): Update config for `Link` component ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens-utils): Add methods for handle fallback themes ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-new-hope): fix Notification layout with long text [#927](https://github.com/salute-developers/plasma/pull/927) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-b2c/web): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- test(plasma-b2c/web): fix tests depending on typography ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web,plasma-b2c): Update snapshots and add test ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-new-hope): Fix `TextArea` behavior with uncontrolled value ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c,plasma-web): Update configs for components with new design ([@neretin-trike](https://github.com/neretin-trike))
- chore(vite): bump to 4.5.1 ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web, plasma-b2c): redesign Notification ([@kayman233](https://github.com/kayman233))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.254.0 (Thu Dec 14 2023)

### Release Notes

#### Release by 14.12.2023 ([#925](https://github.com/salute-developers/plasma/pull/925))

## Components

### Tabs

- вынесены токены в отдельный файл
- исправлен конфиг
- убрана вариация active
 
plasma-new-hope: Refactoring tabs tokens, variations, config (https://github.com/salute-developers/plasma/pull/873)

### AddFocus

- добавлен общий mixin addFocus(на него переведены компоненты: **Chip, Checkbox, Radiobox, Calendar** )
 
plasma-(new-hope, asdk): Add focus mixin (https://github.com/salute-developers/plasma/pull/888)

### Header

Для plasma-{new-hope,asdk}

- добавлен компонент **Header**, в качестве составных компонента (HeaderLogo, HeaderArrow, etc.)
- добавлен mixin **mediaQuery**
 
feat(plasma-new-hope): Add header as separate components (https://github.com/salute-developers/plasma/pull/887)

### Tooltip

- добавлен `Tooltip` с новым дизайном и API (для `plasma-{web,b2c,new-hope}`)
 
plasma-new-hope: Add tooltip (https://github.com/salute-developers/plasma/pull/879)

### Switch

- добавлена реализация на новой архитектуре для plasma-{new-hope, web, asdk}  
 
feat(new-hope): switch (https://github.com/salute-developers/plasma/pull/816)


## Infra

### Upload assets when publish canary, latest

- добавили условие при котором происходит загрузка assets 
 
plasma-infra: Handling upload-assets  (https://github.com/salute-developers/plasma/pull/882)

### Actions/setup-node

- зафиксировали версию Node.js (18.16.1) для корректной работы в CI 
 
plasma-infra: Use 18.16.1 node version (https://github.com/salute-developers/plasma/pull/904)

### Upload assets when publish RC

- переопределена логика получения commit для правильного условия загрузки assets в момент публикации RC
 
plasma-infra: Upload assets when publish rc (https://github.com/salute-developers/plasma/pull/892)

### Auto generate changelog [CI]

- добавлен workflow для ручного запуска создания PR релиза 
- автоматизирован процесс создания changelog на основе merged prs и labels  
 
plasma-infra: Automation of the release process (https://github.com/salute-developers/plasma/pull/894)

### Storybook

- добавлен новый location в "https://plasma.sberdevices.ru/asdk-storybook/" (plasma-ASDK)

 
plasma-infra:  Add storybook for "Plasma-ASDK" (https://github.com/salute-developers/plasma/pull/908)


## Tokens

### Theme builder

- В генератор файлов темы добавлены метод, который восстанавливает значение цвета из ссылки, т.е. переведёт: **[general.red.500] => #FF293E**
- Добавлена генерация токенов цвета в kebab нотации
 
fix(plasma-theme-builder): Add restored color method for generate themes (https://github.com/salute-developers/plasma/pull/899)

---

#### 🚀 Enhancement

- Release by 14.12.2023 [#925](https://github.com/salute-developers/plasma/pull/925) ([@nikewht](https://github.com/nikewht) [@Yakutoc](https://github.com/Yakutoc) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike) nikita.belyanskiy@south.rt.ru [@Yeti-or](https://github.com/Yeti-or))
- feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-new-hope): Switch add labelPosition ([@Yeti-or](https://github.com/Yeti-or))
- feat(plasma-b2c): Replace `Switch` from plasma-new-hope ([@Yeti-or](https://github.com/Yeti-or))
- fix(plasma-new-hope): fix tokens usage in Tooltip [#879](https://github.com/salute-developers/plasma/pull/879) ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope): Tooltip added ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-new-hope): Tooltip, Popover, Dropdown refactor ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope, plasma-web, plasma-b2c): Tooltip added ([@kayman233](https://github.com/kayman233))
- chore: update package locks [#916](https://github.com/salute-developers/plasma/pull/916) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore(plasma-b2c): fix typo [#889](https://github.com/salute-developers/plasma/pull/889) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.250.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-b2c): Replace `TextArea` from plasma-new-hope ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope/b2c/web): add readonly as attribute & remove hasClear prop ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web): add chip from new hope ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c): add chip from new hope ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-new-hope, plasms-web, plasma-b2c): fix title font for Notification [#848](https://github.com/salute-developers/plasma/pull/848) ([@kayman233](https://github.com/kayman233))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- docs(plasma-b2c/web): generate docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-b2c): bump "default-browser-id" to 2.0.0 ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): bump "@microsoft/api-extractor" to 7.38.3 ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): fix vulnerabilities: high, critical ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): bump "vite" to 4.5.0 ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-web/b2c): generate api ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web, plasma-b2c): Notification on new-hope ([@kayman233](https://github.com/kayman233))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.246.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
- feat: manual update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-web, plasma-b2c): fix NoScroll behavior in ModalBase [#828](https://github.com/salute-developers/plasma/pull/828) ([@kayman233](https://github.com/kayman233))
- feat: api report for ts@4.2.4 [#843](https://github.com/salute-developers/plasma/pull/843) ([@Yakutoc](https://github.com/Yakutoc))
- feat: bump TS to 4.2.4 ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-new-hope): separate typography tokens & refactor folder structure ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): separate classes & tokens ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web/b2c): add calendar with new architecture ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-web, plasma-b2c): ModalBase, PopupBase on new-hope ([@kayman233](https://github.com/kayman233))
- chore(plasma-b2c): delete unnecessary options ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): bump storybook to @latest (7.5.3) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate `main.ts` to Storybook 7.* ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): add decorators for theme, toast entity ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate `preview.ts` to Storybook 7.* ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-b2c): migrate to CSF 3 [TextField] [#833](https://github.com/salute-developers/plasma/pull/833) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [TextArea] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Tabs] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Select] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Radiobox] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [PopupBase] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Popover] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [ModalBase] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [UploadVisual] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [UploadAudio] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Upload] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Typography] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Tooltip] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Toast] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Switch] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Spinner] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Slider] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Skeleton] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Progress] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Price] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [PreviewGallery] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [PaginationDots] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Notification] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Modal] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Link] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Image] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Grid] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [ElasticGrid] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Editable] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Dropdown] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Checkbox] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Cell] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Carousel] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Card] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Calendar] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Button] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [Badge] ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): migrate to CSF 3 [AudioPlayer] ([@Yakutoc](https://github.com/Yakutoc))
- chore(packages): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-web/b2c/hope): update api ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.240.0 (Thu Nov 02 2023)

#### 🚀 Enhancement

- Release 02.11.2023 [#829](https://github.com/salute-developers/plasma/pull/829) ([@akhdrv](https://github.com/akhdrv) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@nikewht](https://github.com/nikewht))
- feat: manual bump versions [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-new-hope): new classes API for Popup [#819](https://github.com/salute-developers/plasma/pull/819) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-ui, plasma-web, plasma-b2c): new animation API for PopupBase/ModalBase ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.237.0 (Thu Oct 19 2023)

#### 🚀 Enhancement

- Release 19.10.2023 [#815](https://github.com/salute-developers/plasma/pull/815) ([@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Yakutoc](https://github.com/Yakutoc) nikita.belyanskiy@south.rt.ru [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope/b2c/web/core): Add Popover to new hope ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- fix(plasma-core, plasma-ui): remove withAnimation from PopupBase ([@kayman233](https://github.com/kayman233))
- fix(plasma-core, plasma-ui): minor refactoring and types fix ([@kayman233](https://github.com/kayman233))
- feat(plasma-core, plasma-ui): add animation for PopupBase etc ([@kayman233](https://github.com/kayman233))
- fix(plasma-web/b2c): move tokens from dev deps to deps ([@TitanKuzmich](https://github.com/TitanKuzmich))
- docs(plasma-core/hope/web/b2c): generate new api ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-core): refactor in PopupBase/ModalBase ([@kayman233](https://github.com/kayman233))
- feat(plasma-core, plasma-web, plasma-b2c): ModalBase component ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.236.2 (Fri Oct 06 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.236.1 (Fri Oct 06 2023)

#### 🐛 Bug Fix

- fix: fix typo [#798](https://github.com/salute-developers/plasma/pull/798) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.236.0 (Fri Sep 29 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): Replace `Radiobox` from plasma-new-hope and update snapshots [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Replace `Checkbox` from plasma-new-hope [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Replace `Spinner` from plasma-new-hope [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Replace `Link` from plasma-new-hope [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-core): focusTrap, arrow and offset for Popover [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-b2c,plasma-web): Button size_xs/xss [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yeti-or](https://github.com/Yeti-or))
- fix: Bump package-lock versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-core): PopupBase refactoring [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- feat(plasma-web, plasma-b2c): PopupBase component [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- fix(plasma-core): Popover refactoring [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- chore: update version [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.227.0 (Thu Sep 14 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.225.0 (Mon Sep 04 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(packages): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.221.0 (Fri Aug 18 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.220.0 (Thu Aug 03 2023)

#### 🚀 Enhancement

- feat(plasma-b2c, plasma-web): Modal refinement [#629](https://github.com/salute-developers/plasma/pull/629) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- fix(plasma-web, plasma-b2c): Tooltip update on text change [#637](https://github.com/salute-developers/plasma/pull/637) ([@kayman233](https://github.com/kayman233))
- feat(plasma-b2c, plasma-web): autoResize for TextArea [#614](https://github.com/salute-developers/plasma/pull/614) ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- Merge branch 'dev' ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.219.0 (Thu Jul 13 2023)

#### 🐛 Bug Fix

- chore(storybook): avoid OpenSSL v3.0 breaking changes [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-core): fix cols/rows usage in TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.218.0 (Thu Jun 29 2023)

#### 🐛 Bug Fix

- chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- fix(plasma-hope): update useFocusTrap [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
- fix(plasma-hope): refactor useFocusTrap [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
- feat(plasma-b2c, plasma-web): focusTrap hook added [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.216.0 (Thu Jun 01 2023)

#### 🚀 Enhancement

- chore: add api report [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: use "paths" property in tsconfig.json [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: [packages] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- test(plasma-b2c): add more performance tests, exclude perftests from tsconfig & type coverage ([@Troff8](https://github.com/Troff8))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Troff ([@Troff8](https://github.com/Troff8))

---

# v1.215.0 (Mon May 22 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- fix(plasma-web, plasma-b2c, plasma-ui): fix single/multiple lines in Checkbox/Radiobox ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.213.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.212.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.209.0 (Wed May 10 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.208.2 (Wed May 10 2023)

#### 🐛 Bug Fix

- fix(plasma-hope): default max-width for Grid [#501](https://github.com/salute-developers/plasma/pull/501) ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.208.1 (Wed May 03 2023)

#### 🐛 Bug Fix

- fix(plasma-*): update api report [#497](https://github.com/salute-developers/plasma/pull/497) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.208.0 (Wed May 03 2023)

#### 🚀 Enhancement

- feat: change api-report for Container in Grid [#495](https://github.com/salute-developers/plasma/pull/495) ([@kayman233](https://github.com/kayman233))
- feat(plasma-hope): maxWidth for Grid ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.206.0 (Thu Apr 27 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.205.0 (Wed Apr 26 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): Dropdown new placements ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.204.1 (Tue Apr 25 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.204.0 (Mon Apr 24 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.202.0 (Wed Apr 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.201.0 (Mon Apr 17 2023)

#### 🚀 Enhancement

- feat(plasma-hope): reAlign versions [#480](https://github.com/salute-developers/plasma/pull/480) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.175.0 (Thu Apr 13 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.174.0 (Wed Apr 12 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.173.2 (Wed Apr 05 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.173.1 (Tue Apr 04 2023)

#### 🐛 Bug Fix

- fix(plasma-web,plasma-b2c): remove private api [#458](https://github.com/salute-developers/plasma/pull/458) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- fix(plasma-web,plasma-b2c): fix various api diff between web/b2c ([@Yeti-or](https://github.com/Yeti-or))
- refactor(plasma-b2c): Update `TextArea`, `TextField`, `Button` and `Container` components ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.173.0 (Fri Mar 31 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.172.0 (Thu Mar 30 2023)

#### 🚀 Enhancement

- feat: api report after merged "Select" component [#455](https://github.com/salute-developers/plasma/pull/455) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): update test symlink ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "Select" component ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): export "Select" component ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.171.0 (Thu Mar 30 2023)

#### 🚀 Enhancement

- feat(plasma-web): add correct symlink for cypress test ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.170.0 (Wed Mar 29 2023)

#### 🚀 Enhancement

- feat: api report after merged "Tabs" component [#445](https://github.com/salute-developers/plasma/pull/445) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "Tabs" component from plasma-hope [#445](https://github.com/salute-developers/plasma/pull/445) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.169.0 (Wed Mar 29 2023)

#### 🚀 Enhancement

- feat(plasma-hope,plasma-web,plasma-b2c): Update Button API [#453](https://github.com/salute-developers/plasma/pull/453) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Add import Button from plasma-hope ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.167.0 (Tue Mar 28 2023)

#### 🚀 Enhancement

- feat: api report after merged Grid component [#436](https://github.com/salute-developers/plasma/pull/436) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add "Grid" cypress test ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "Grid" component from plasma-hope ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- feat(plasma-hope,plasma-web,plasma-b2c): Update API for `Container` component [#446](https://github.com/salute-developers/plasma/pull/446) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.166.0 (Fri Mar 24 2023)

#### 🚀 Enhancement

- feat(plasma-hope,plasma-web,plasma-b2c): Update TextField API [#429](https://github.com/salute-developers/plasma/pull/429) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Add import TextField from plasma-hope ([@neretin-trike](https://github.com/neretin-trike))

#### ⚠️ Pushed to `master`

- feat(plasma-web,plasma-b2c): Remove Input and Field components ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.165.0 (Fri Mar 24 2023)

#### 🚀 Enhancement

- feat: api report after merged Image component [#435](https://github.com/salute-developers/plasma/pull/435) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "Image" component from plasma-hope ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.164.0 (Tue Mar 21 2023)

#### 🐛 Bug Fix

- chore(plasma-b2c): remove unused variable [#353](https://github.com/salute-developers/plasma/pull/353) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- fix(plasma-web,b2c): Remove storybook docs ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.163.0 (Fri Mar 17 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): Add import TextArea from plasma-hope [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- feat(plasma-hope,plasma-web,plasma-b2c): Update TextArea API [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c,plasma-web): Add error exclude for `TextArea` component [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.162.0 (Thu Mar 16 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): Replace builder for storybook to Vite [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.161.0 (Thu Mar 16 2023)

#### 🚀 Enhancement

- feat: add api reports [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): apply DropdownListCssProperties for Select component [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- build: update package-locks [#412](https://github.com/salute-developers/plasma/pull/412) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.158.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.156.0 (Wed Mar 08 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): delete unnecessary dependencies/devDependencies [#392](https://github.com/salute-developers/plasma/pull/392) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): delete jest config [#392](https://github.com/salute-developers/plasma/pull/392) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.155.1 (Tue Mar 07 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.155.0 (Tue Mar 07 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export UploadAudio component [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress tests symlink [UploadAudio] [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "UploadAudio" component [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.154.0 (Tue Mar 07 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export UploadVisual component [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress tests symlink [UploadVisual] [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "UploadVisual" component [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.153.1 (Tue Mar 07 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.153.0 (Mon Mar 06 2023)

#### 🐛 Bug Fix

- build(plasma-hope): update API diff [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- build(plasma-b2c): bump react to 18.x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.152.0 (Fri Mar 03 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export ElasticGrid component [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress tests symlink [ElasticGrid] [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "ElasticGrid" component [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.151.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): use --passWithNoTests flag for jest [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- feat: add api reports after re-export AudioPlayer component [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress tests symlink [AudioPlayer] [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "AudioPlayer" component [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.150.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export Editable component [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress tests symlink [Editable] [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "Editable" component [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "Editable" component [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.149.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export Slider component [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress tests symlink [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export SliderThumb from plasma-hope [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export slider component [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-core): slider move to core [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.148.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export PreviewGallery component [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress tests symlink [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "PreviewGallery" component [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- fix(plasma-b2c): set correct import paths [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.147.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export Upload component [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress tests symlink [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): re-export "Upload" component [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.145.0 (Mon Feb 27 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): add partial typing for theme [#366](https://github.com/salute-developers/plasma/pull/366) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.144.0 (Mon Feb 20 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.143.0 (Mon Feb 20 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): processing withBlur prop in story [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- feat: add api reports [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- fix(plasma-b2c): resolve import for ModalView [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.142.0 (Fri Feb 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.141.1 (Thu Feb 16 2023)

#### 🐛 Bug Fix

- build: add api reports to plasma-core & hope [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
- fix(plasma-hope): export CalendarStateType [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
- build: improve api-report [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
- build: add api-extractor [#342](https://github.com/salute-developers/plasma/pull/342) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.141.0 (Wed Feb 15 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): add offset prop in storybook [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(plasma-b2c): hack to fix typings [#324](https://github.com/salute-developers/plasma/pull/324) ([@Yeti-or](https://github.com/Yeti-or))
- refactor(plasma-web/plasma-b2c): move common code to plasma-hope [#324](https://github.com/salute-developers/plasma/pull/324) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.140.1 (Wed Feb 15 2023)

#### 🐛 Bug Fix

- fix(plasma-b2c): fix lint missing/unnecessary dependency [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-b2c): hide unnecessary editable story controls [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-b2c): improve toast story [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-b2c): resolve "control.options" warning in storybook [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-b2c): use CSF for Grid, Link, Skeleton [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-b2c): use InSpacingDecorator [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-b2c): delete unnecessary stories.mdx [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.140.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat: Update using title in toolBar instead of name in preview.js [#330](https://github.com/salute-developers/plasma/pull/330) ([@neretin-trike](https://github.com/neretin-trike))
- feat: Bump storybook version to 6.5 [#330](https://github.com/salute-developers/plasma/pull/330) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.139.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove declarationMap from tsconfig.json [#326](https://github.com/salute-developers/plasma/pull/326) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.138.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): add onHide action in storybook [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.137.1 (Fri Feb 10 2023)

#### 🐛 Bug Fix

- fix(plasma-b2c): avoid text overflow [#311](https://github.com/salute-developers/plasma/pull/311) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.137.0 (Fri Feb 10 2023)

#### 🚀 Enhancement

- feat(plasma-*): Add .npmignore and remove file field for test files [#322](https://github.com/salute-developers/plasma/pull/322) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.136.0 (Wed Feb 08 2023)

#### 🐛 Bug Fix

- feat(plasma-ui,plasma-b2c): Add breakWord props for storybook preview [#310](https://github.com/salute-developers/plasma/pull/310) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.135.0 (Wed Feb 08 2023)

#### 🐛 Bug Fix

- fix(plasma-b2c): set value prop outlined to true [#313](https://github.com/salute-developers/plasma/pull/313) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.134.0 (Fri Feb 03 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): add tests for handling property size [#295](https://github.com/salute-developers/plasma/pull/295) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): handling property size [#295](https://github.com/salute-developers/plasma/pull/295) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.133.0 (Thu Feb 02 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove source maps from bundles [#309](https://github.com/salute-developers/plasma/pull/309) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore(plasma-b2c): enable preview source code [#308](https://github.com/salute-developers/plasma/pull/308) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.132.0 (Thu Feb 02 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.131.0 (Wed Feb 01 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): add onSearch event [#294](https://github.com/salute-developers/plasma/pull/294) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.130.0 (Wed Feb 01 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.129.0 (Sat Jan 28 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.128.0 (Thu Jan 26 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.126.0 (Thu Jan 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: improve ts-coverage report [#282](https://github.com/salute-developers/plasma/pull/282) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.123.0 (Mon Dec 26 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.122.0 (Thu Dec 22 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): set "Button" type to delete button from AudioPlayer [#272](https://github.com/salute-developers/plasma/pull/272) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): set "Button" type to delete, select button from Gallery [#272](https://github.com/salute-developers/plasma/pull/272) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.121.0 (Thu Dec 22 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): add cypress test [#244](https://github.com/salute-developers/plasma/pull/244) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- fix(plasma-b2c): correct processing "Text Field" view [#244](https://github.com/salute-developers/plasma/pull/244) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.120.0 (Thu Dec 15 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.118.0 (Wed Dec 14 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): add a11y for Editable component [#252](https://github.com/salute-developers/plasma/pull/252) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-b2c): set correct button font size when change size [#259](https://github.com/salute-developers/plasma/pull/259) ([@Yakutoc](https://github.com/Yakutoc))

#### ⚠️ Pushed to `master`

- Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.117.0 (Thu Dec 08 2022)

#### 🐛 Bug Fix

- fix(plasma-b2c): set correct button font size when change size [#259](https://github.com/salute-developers/plasma/pull/259) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.116.1 (Thu Nov 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.116.0 (Thu Nov 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.115.2 (Thu Nov 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.115.1 (Thu Nov 24 2022)

#### 🐛 Bug Fix

- fix(plasma-b2c): improve type-coverage [#237](https://github.com/salute-developers/plasma/pull/237) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.115.0 (Wed Nov 23 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.113.0 (Thu Nov 17 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): processing slider keyboard support by cypress [#218](https://github.com/salute-developers/plasma/pull/218) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add support a11y for Slider [#218](https://github.com/salute-developers/plasma/pull/218) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.111.2 (Wed Nov 09 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.111.0 (Thu Nov 03 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): handle text field size [#210](https://github.com/salute-developers/plasma/pull/210) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.110.0 (Wed Nov 02 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): handle focus state by cy test [#205](https://github.com/salute-developers/plasma/pull/205) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add accent color for slider thumb when focus [#205](https://github.com/salute-developers/plasma/pull/205) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.109.0 (Mon Oct 31 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.108.2 (Mon Oct 31 2022)

#### 🐛 Bug Fix

- test(plasma-web,plasma-b2c): Update snapshots and test for `Radiobox` and `Checkbox` components [#128](https://github.com/salute-developers/plasma/pull/128) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-web,plasma-b2c): Add redesign `Radiobox` and `Checkbox` components [#128](https://github.com/salute-developers/plasma/pull/128) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.108.1 (Mon Oct 31 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.106.1 (Thu Oct 27 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.105.0 (Fri Oct 21 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): handling tab focus by cypress tests [#186](https://github.com/salute-developers/plasma/pull/186) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): handling tab focus [#186](https://github.com/salute-developers/plasma/pull/186) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.104.0 (Thu Oct 20 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): Add Calendar [#191](https://github.com/salute-developers/plasma/pull/191) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.103.1 (Wed Oct 19 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.102.4 (Tue Oct 18 2022)

#### 🐛 Bug Fix

- fix(plasma-b2c): Button type=button [#190](https://github.com/salute-developers/plasma/pull/190) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.102.2 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.102.1 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.102.0 (Mon Oct 10 2022)

#### 🚀 Enhancement

- docs(plasma-ui-docs,plasma-web-docs): Add example with loader for `Button` [#156](https://github.com/salute-developers/plasma/pull/156) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-core): Add loader prop for `Button` component [#156](https://github.com/salute-developers/plasma/pull/156) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.101.0 (Thu Oct 06 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.99.0 (Wed Oct 05 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): passed event as second optional arguments for onChange/onUpload methods [#176](https://github.com/salute-developers/plasma/pull/176) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.98.0 (Tue Oct 04 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.97.0 (Mon Oct 03 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.96.0 (Wed Sep 28 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.95.2 (Mon Sep 26 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.95.1 (Tue Sep 20 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.95.0 (Thu Sep 15 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.94.0 (Wed Sep 14 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.93.1 (Wed Sep 14 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.92.0 (Thu Sep 08 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.91.1 (Tue Sep 06 2022)

#### 🐛 Bug Fix

- fix(plasma-web): Extract document in useEffect for next.js rendering [#154](https://github.com/salute-developers/plasma/pull/154) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.91.0 (Thu Sep 01 2022)

#### 🐛 Bug Fix

- refactor(plasma-b2c): Small refactor for `TextArea` component [#148](https://github.com/salute-developers/plasma/pull/148) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.90.1 (Mon Aug 29 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.90.0 (Mon Aug 29 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.89.0 (Mon Aug 29 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.87.1 (Tue Aug 16 2022)

#### 🐛 Bug Fix

- fix(plasma-web): Add overflow hidden if modal amount not null for `Modal` component [#130](https://github.com/salute-developers/plasma/pull/130) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-web,plasma-b2c): Add cover, background and coverGradient for `Card` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-web,plasma-b2c): Add test and snapshot for `Cell` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-web,plasma-b2c): Add `Cell` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
- ci(plasma-b2c): fix storybook build [#125](https://github.com/salute-developers/plasma/pull/125) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.87.0 (Wed Aug 10 2022)

#### 🐛 Bug Fix

- feat(plasma-web,plasma-ui): Moved `Grid` component from plasma-core [#120](https://github.com/salute-developers/plasma/pull/120) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.86.1 (Fri Jul 29 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.85.0 (Fri Jul 22 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): Add contentRight for `TextArea` component [#107](https://github.com/salute-developers/plasma/pull/107) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.84.2 (Wed Jul 20 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.84.1 (Wed Jul 20 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.84.0 (Tue Jul 19 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.83.2 (Fri Jul 15 2022)

#### 🐛 Bug Fix

- fix(plasma-core): fix autoscroll with row placement [#95](https://github.com/salute-developers/plasma/pull/95) ([@Gerpea](https://github.com/Gerpea))

#### Authors: 1

- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# v1.83.0 (Thu Jul 07 2022)

#### 🐛 Bug Fix

- fix(plasma-b2c): fix tabs outer margins [#49](https://github.com/salute-developers/plasma/pull/49) ([@Gerpea](https://github.com/Gerpea))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# v1.82.0 (Wed Jul 06 2022)

#### 🚀 Enhancement

- feat(plasma-core): add autoscroll tabs on focus [#66](https://github.com/salute-developers/plasma/pull/66) ([@Gerpea](https://github.com/Gerpea))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# v1.81.0 (Fri Jul 01 2022)

#### 🐛 Bug Fix

- chore(plasma-ui): add performance addon to Carousel component [#74](https://github.com/salute-developers/plasma/pull/74) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# v1.80.0 (Wed Jun 29 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.78.1 (Mon Jun 27 2022)

#### 🐛 Bug Fix

- fix(plasma-b2c): missing react-draggable dep [#82](https://github.com/salute-developers/plasma/pull/82) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.78.0 (Thu Jun 23 2022)

#### 🐛 Bug Fix

- feat(plasma-web, plasma-b2c): Add new typography components in stories for `Card` [#78](https://github.com/salute-developers/plasma/pull/78) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.77.0 (Wed Jun 22 2022)

#### 🐛 Bug Fix

- refactor(plasma-b2c,plasma-web): Update `Card` components [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- build(plasma-ui): added @babel/plugin-transform-react-constant-elements [#46](https://github.com/salute-developers/plasma/pull/46) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.76.0 (Fri Jun 17 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.75.0 (Fri Jun 17 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.74.0 (Tue Jun 14 2022)

#### 🚀 Enhancement

- test(plasma-b2c): Add test and snapshot for `Card` component [#67](https://github.com/salute-developers/plasma/pull/67) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Add `Card` component [#67](https://github.com/salute-developers/plasma/pull/67) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.73.0 (Thu Jun 09 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.72.1 (Tue Jun 07 2022)

#### 🐛 Bug Fix

- fix(plasma-b2c, plasma-ui): fix scroll handle position passed to callbacks [#48](https://github.com/salute-developers/plasma/pull/48) ([@Gerpea](https://github.com/Gerpea))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# v1.72.0 (Tue Jun 07 2022)

#### 🐛 Bug Fix

- fix(plasma-web,plasma-b2c,plasma-ui): Add onChange callback for maxLength check in `TextField` [#47](https://github.com/salute-developers/plasma/pull/47) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.71.0 (Tue Jun 07 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.70.1 (Thu Jun 02 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.70.0 (Thu May 26 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.69.0 (Wed May 25 2022)

#### 🚀 Enhancement

- test(plasma-b2c): Add test and snapshot for `PreviewGallery` component [#27](https://github.com/salute-developers/plasma/pull/27) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Add tooltip in item for `PreviewGallery` component [#27](https://github.com/salute-developers/plasma/pull/27) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.68.0 (Tue May 24 2022)

#### 🚀 Enhancement

- test(plasma-ui,plasma-b2c): Add test and snapshot for `Slider` component [#30](https://github.com/salute-developers/plasma/pull/30) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix(plasma-b2c,plasma-ui): Add ref.current for useEffect in SliderBase for `Slider` component [#30](https://github.com/salute-developers/plasma/pull/30) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.67.3 (Mon May 23 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.67.2 (Fri May 20 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.67.1 (Thu May 19 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.67.0 (Tue May 17 2022)

#### 🐛 Bug Fix

- chore(plasma-ui, plasma-b2c): Add bold type for `Dspl` and `H` in stories [#7](https://github.com/salute-developers/plasma/pull/7) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.66.0 (Wed May 11 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.65.0 (Wed May 11 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.64.0 (Wed May 11 2022)

#### 🐛 Bug Fix

- chore: update package-locks [#18](https://github.com/salute-developers/plasma/pull/18) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.58.0 (Wed Apr 27 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): Add `Popup` component to plasma-b2c ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix: plasma-b2c: storybook [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- fix: linting errs [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- fix: monorepo deps resolved [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- fix(plasma-web,plasma-b2c): Add useResizeObserver and fix behavior with resize ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.56.0 (Thu Apr 07 2022)

#### 🐛 Bug Fix

- fix: `Field` and `Input` props interfaces facelifting [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.54.0 (Thu Mar 31 2022)

#### 🚀 Enhancement

- feat(plasma-web): `Select` a11y: keyboard navigation [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@fanisco](https://github.com/fanisco))
- feat(plasma-web): `Dropdown` a11y: navigating with keyboard [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@fanisco](https://github.com/fanisco))
- feat(plasma-web): Added `List` component [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix(plasma-b2c): `Select`: extending & restyling from web [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@fanisco](https://github.com/fanisco))
- test(plasma-web): `Radiobox`: check only for id existance [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.53.0 (Mon Mar 28 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.52.0 (Fri Mar 25 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.50.0 (Wed Mar 16 2022)

#### 🚀 Enhancement

- feat(plasma-ui): `TextArea`: added `aria-describedby` attr [#1133](https://github.com/salute-developers/plasma/pull/1133) ([@fanisco](https://github.com/fanisco))
- feat(plasma-b2c): `TextArea`: added `aria-describedby` attr [#1133](https://github.com/salute-developers/plasma/pull/1133) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.49.0 (Wed Mar 16 2022)

#### 🚀 Enhancement

- feat(plasma-web): `TextField`: added `aria-describedby` attr [#1124](https://github.com/salute-developers/plasma/pull/1124) ([@fanisco](https://github.com/fanisco))
- feat(plasma-b2c): `TextField`: added `aria-labelled` and `aria-describedby` attrs [#1124](https://github.com/salute-developers/plasma/pull/1124) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.48.0 (Tue Mar 15 2022)

#### 🐛 Bug Fix

- chore: `Toast` stories text & role [#1127](https://github.com/salute-developers/plasma/pull/1127) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.47.0 (Mon Mar 14 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.46.0 (Fri Mar 11 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.44.0 (Fri Mar 04 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.43.1 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.43.0 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.42.0 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- test(plasma-b2c): Added responsive typo tests [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
- chore: Storybook fonts [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
- feat(plasma-typo, plasma-ui, plasma-b2c): Moved responsive typography to common package [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.41.2 (Thu Feb 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.41.0 (Mon Feb 21 2022)

#### 🐛 Bug Fix

- chore(plasma-b2c): fix Modal.stories [#1105](https://github.com/salute-developers/plasma/pull/1105) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.40.1 (Fri Feb 18 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.40.0 (Fri Feb 18 2022)

#### 🐛 Bug Fix

- docs(plasma-web, plasma-b2c): `Button`: using as an anchor [#1092](https://github.com/salute-developers/plasma/pull/1092) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.39.7 (Thu Feb 17 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.39.6 (Wed Feb 16 2022)

#### 🐛 Bug Fix

- fix(plasma-b2c): `Editable`: background in light theme [#1088](https://github.com/salute-developers/plasma/pull/1088) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.39.4 (Mon Feb 14 2022)

#### 🐛 Bug Fix

- chore(plasma-b2c): `TextField` hide `size` prop in storybook [#1074](https://github.com/salute-developers/plasma/pull/1074) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.39.3 (Thu Feb 10 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.39.1 (Thu Feb 03 2022)

#### 🐛 Bug Fix

- fix: peer dependencies versions [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@LamaEats](https://github.com/LamaEats))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.39.0 (Wed Feb 02 2022)

#### 🐛 Bug Fix

- chore: Storybook: Added lang to make VoiceOver read russian text properly [#1052](https://github.com/salute-developers/plasma/pull/1052) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.38.0 (Tue Feb 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.37.1 (Fri Jan 28 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.37.0 (Thu Jan 27 2022)

#### 🐛 Bug Fix

- chore(plasma-ui,plasma-b2c): Remove unused stories mdx for `Tabs` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c,plasma-web,plasma-ui): Update style for `Tabs` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.35.0 (Tue Jan 18 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.34.3 (Mon Jan 17 2022)

#### 🐛 Bug Fix

- fix(plasma-b2c,plasma-web): Add re-export for `Notification` component [#1029](https://github.com/salute-developers/plasma/pull/1029) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.34.2 (Thu Jan 13 2022)

#### 🐛 Bug Fix

- test(plasma-b2c): Add test and snapshot for `ElasticGrid` component [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@neretin-trike](https://github.com/neretin-trike))
- refactor(plasma-b2c): Remove unsused condition in `ElasticGrid` component [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.34.1 (Tue Jan 11 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.33.0 (Wed Dec 29 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): Added `TabsController` component [#985](https://github.com/salute-developers/plasma/pull/985) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- test: Complete tests for `Tabs` [#985](https://github.com/salute-developers/plasma/pull/985) ([@fanisco](https://github.com/fanisco))
- test(plasma-b2c): `Body` & `Text` tests [#1019](https://github.com/salute-developers/plasma/pull/1019) ([@fanisco](https://github.com/fanisco))
- test(plasma-b2c, plasma-web): Add statuses to `Notification` test [#1017](https://github.com/salute-developers/plasma/pull/1017) ([@fanisco](https://github.com/fanisco))
- feat(plasma-web, plasma-b2c): Added possibility to specify id for `Notification` [#1017](https://github.com/salute-developers/plasma/pull/1017) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.32.2 (Mon Dec 27 2021)

#### 🐛 Bug Fix

- refactor(plasma-b2c): Update return items in utils for `PreviewGallery` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c): Add tests and snapshots for `PreviewGallery` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c): Add tests and snapshots for `Upload` component [#1012](https://github.com/salute-developers/plasma/pull/1012) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c): Add tests and snapshots for `Slider` component [#1015](https://github.com/salute-developers/plasma/pull/1015) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.32.1 (Thu Dec 23 2021)

#### 🐛 Bug Fix

- feat(plasma-web, plasma-b2c): Arrow and check placement in `Select` [#983](https://github.com/salute-developers/plasma/pull/983) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.32.0 (Sun Dec 19 2021)

#### 🚀 Enhancement

- feat(b2c): add SSRProvider [#1000](https://github.com/salute-developers/plasma/pull/1000) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.31.0 (Thu Dec 16 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): Add mobile sizes for Tabs [#972](https://github.com/salute-developers/plasma/pull/972) (yaarny@gmail.com)
- feat(plasma-b2c): make RadioGroup public [#992](https://github.com/salute-developers/plasma/pull/992) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- test(plasma-b2c): fix tests [#993](https://github.com/salute-developers/plasma/pull/993) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-b2c): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))

#### Authors: 4

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Булах Александр (yaarny@gmail.com)

---

# v1.30.0 (Wed Dec 15 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): make RadioGroup public [#992](https://github.com/salute-developers/plasma/pull/992) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- test(plasma-b2c): fix tests [#993](https://github.com/salute-developers/plasma/pull/993) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-b2c): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.29.0 (Wed Dec 15 2021)

#### 🐛 Bug Fix

- feat(plasma-web,plasma-b2c,plasma-ui): Add example for checkbox with jsx in label [#969](https://github.com/salute-developers/plasma/pull/969) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.27.2 (Thu Dec 09 2021)

#### 🐛 Bug Fix

- test(plasma-web,plasma-ui): Add test and update snapshots for `Typography` components [#962](https://github.com/salute-developers/plasma/pull/962) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c,plasma-core): Add breakWord props for `Typography` components [#962](https://github.com/salute-developers/plasma/pull/962) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.27.1 (Wed Dec 08 2021)

#### 🐛 Bug Fix

- fix(palsma-b2c): preview gallery data contracts [#967](https://github.com/salute-developers/plasma/pull/967) ([@takovoy](https://github.com/takovoy))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.26.1 (Fri Dec 03 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.26.0 (Fri Dec 03 2021)

#### 🚀 Enhancement

- feat: Added `createButton` as a constructor function for `Button` [#946](https://github.com/salute-developers/plasma/pull/946) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- refactor(plasma-ui,plasma-b2c): Update stories for `Slider` component [#934](https://github.com/salute-developers/plasma/pull/934) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-ui,plasma-b2c): Fix intersection for multiple `Slider` component [#934](https://github.com/salute-developers/plasma/pull/934) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.25.0 (Thu Dec 02 2021)

#### 🚀 Enhancement

- feat(palsma-b2c): put preview gallery rest props [#965](https://github.com/salute-developers/plasma/pull/965) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.24.0 (Wed Dec 01 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.23.0 (Wed Dec 01 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.22.1 (Tue Nov 23 2021)

#### 🐛 Bug Fix

- fix: b2c grid doc [#937](https://github.com/salute-developers/plasma/pull/937) ([@takovoy](https://github.com/takovoy))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.22.0 (Mon Nov 22 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): Added `TextField` component [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.21.0 (Mon Nov 22 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.20.1 (Thu Nov 18 2021)

#### 🐛 Bug Fix

- fix(plasma-web): prevent disabled select from opening [#925](https://github.com/salute-developers/plasma/pull/925) (42856876+IArny@users.noreply.github.com)
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Булах Александр Алексеевич [B] (42856876+IArny@users.noreply.github.com)

---

# v1.20.0 (Thu Nov 18 2021)

#### 🚀 Enhancement

- feat: export spacing [#936](https://github.com/salute-developers/plasma/pull/936) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.19.2 (Wed Nov 17 2021)

#### 🐛 Bug Fix

- fix(plasma-b2c): reduce slider handle z-index [#927](https://github.com/salute-developers/plasma/pull/927) (42856876+IArny@users.noreply.github.com)
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Булах Александр Алексеевич [B] (42856876+IArny@users.noreply.github.com)

---

# v1.19.0 (Tue Nov 16 2021)

#### 🐛 Bug Fix

- fix(plasma-b2c): Preview gallery image size [#920](https://github.com/salute-developers/plasma/pull/920) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.18.0 (Mon Nov 15 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): PreviewGallery features [#924](https://github.com/salute-developers/plasma/pull/924) (51693784+etotsamyi@users.noreply.github.com)

#### Authors: 1

- Ivan Malashchenkov (51693784+etotsamyi@users.noreply.github.com)

---

# v1.17.1 (Tue Nov 09 2021)

#### 🐛 Bug Fix

- fix(plasma-b2c): Import `Image` directly from core [#909](https://github.com/salute-developers/plasma/pull/909) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.17.0 (Tue Nov 09 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): make single slider rail clickable [#913](https://github.com/salute-developers/plasma/pull/913) ([@IArny](https://github.com/IArny))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@IArny](https://github.com/IArny)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.16.2 (Mon Nov 01 2021)

#### 🐛 Bug Fix

- fix(plasma-b2c): set slider handle box-sizing [#904](https://github.com/salute-developers/plasma/pull/904) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# v1.16.1 (Fri Oct 29 2021)

#### 🐛 Bug Fix

- fix(plasma-web,plasma-b2c): `Select`'s when multiselect prevent autoclose [#883](https://github.com/salute-developers/plasma/pull/883) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.15.0 (Thu Oct 28 2021)

#### 🚀 Enhancement

- feat: upload progress label [#899](https://github.com/salute-developers/plasma/pull/899) ([@takovoy](https://github.com/takovoy))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.13.5 (Wed Oct 27 2021)

#### 🐛 Bug Fix

- fix(plasma-b2c): handle children number change in ElasticGrid [#893](https://github.com/salute-developers/plasma/pull/893) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# v1.13.3 (Sun Oct 24 2021)

#### 🐛 Bug Fix

- fix(plasma-b2c): make PreviewGallery item ratio 16 / 9 [#886](https://github.com/salute-developers/plasma/pull/886) ([@IArny](https://github.com/IArny))
- fix(plasma-b2c): rename PreviewGallery item button action [#886](https://github.com/salute-developers/plasma/pull/886) ([@IArny](https://github.com/IArny))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@IArny](https://github.com/IArny)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.13.1 (Thu Oct 21 2021)

#### 🐛 Bug Fix

- fix: grid container max size [#880](https://github.com/salute-developers/plasma/pull/880) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.13.0 (Thu Oct 21 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): add custom background for editable component [#877](https://github.com/salute-developers/plasma/pull/877) ([@IArny](https://github.com/IArny))
- feat(plasma-b2c): Added `PreviewGallery` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Added `UploadViusal` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Update `Upload` component; Added `UploadAudio` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Add `AudioPlayer` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Added `UploadAudio` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-icons): Added `Music` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c): Added `Upload` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- test(plasma-b2c): Added tests for `Uploads`,`AudioPlayer`,`PreviewGallery` components [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 4

- [@IArny](https://github.com/IArny)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.12.1 (Tue Oct 19 2021)

#### 🐛 Bug Fix

- fix(plasma-web): Remove hover from select with empty list [#858](https://github.com/salute-developers/plasma/pull/858) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-b2c): Remove props offsetTop from `Select` component [#858](https://github.com/salute-developers/plasma/pull/858) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-b2c): Fix click to empty select [#858](https://github.com/salute-developers/plasma/pull/858) ([@neretin-trike](https://github.com/neretin-trike))
- chore(plasma-b2c): Add stories for `Dropdown` component [#869](https://github.com/salute-developers/plasma/pull/869) ([@neretin-trike](https://github.com/neretin-trike))
- chore(plasma-b2c): Add global style for `a` tag in storybook [#869](https://github.com/salute-developers/plasma/pull/869) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.12.0 (Mon Oct 18 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): add ElasticGrid component [#847](https://github.com/salute-developers/plasma/pull/847) ([@IArny](https://github.com/IArny))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@IArny](https://github.com/IArny)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.11.4 (Fri Oct 15 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.11.3 (Fri Oct 15 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.11.2 (Thu Oct 14 2021)

#### 🐛 Bug Fix

- fix(plasma-b2c): Fix re-export from plasma-web for utils [#864](https://github.com/salute-developers/plasma/pull/864) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-web, plasma-b2c): Fix re-exporting [#864](https://github.com/salute-developers/plasma/pull/864) ([@neretin-trike](https://github.com/neretin-trike))
- docs(b2c): improve ReadMe [#844](https://github.com/salute-developers/plasma/pull/844) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.11.1 (Wed Oct 13 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Manual publish for web & b2c [#854](https://github.com/salute-developers/plasma/pull/854) ([@fanisco](https://github.com/fanisco))
- fix: Update package-locks [#853](https://github.com/salute-developers/plasma/pull/853) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.10.0 (Mon Oct 11 2021)

#### 🚀 Enhancement

- feat(plasma-typo): Typography separation: bold & regular [#845](https://github.com/salute-developers/plasma/pull/845) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.9.0 (Mon Oct 11 2021)

#### 🚀 Enhancement

- feat: new grid breakpoint for 16 cols [#825](https://github.com/salute-developers/plasma/pull/825) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.8.0 (Mon Oct 11 2021)

#### 🚀 Enhancement

- feat(b2c): TextArea: new typo [#843](https://github.com/salute-developers/plasma/pull/843) ([@Yeti-or](https://github.com/Yeti-or))
- feat(plasma-b2c): TextArea for b2c added [#843](https://github.com/salute-developers/plasma/pull/843) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore(b2c): rmv TextArea story [#843](https://github.com/salute-developers/plasma/pull/843) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.7.0 (Fri Oct 08 2021)

#### 🚀 Enhancement

- feat(b2c): add Slider [#842](https://github.com/salute-developers/plasma/pull/842) ([@Yeti-or](https://github.com/Yeti-or))
- feat: Standard typography system [#829](https://github.com/salute-developers/plasma/pull/829) ([@fanisco](https://github.com/fanisco))
- feat(plasma-b2c): `Toast` icon [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))
- feat(plasma-core): Shared `Toast` between libraries [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- docs(plasma-b2c): fix packageName [#841](https://github.com/salute-developers/plasma/pull/841) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-b2c): add storybook stories [#841](https://github.com/salute-developers/plasma/pull/841) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-b2c): Support compatible typography in storybook [#829](https://github.com/salute-developers/plasma/pull/829) ([@Yeti-or](https://github.com/Yeti-or))
- test: Component test for B2C `Toast` [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### ⚠️ Pushed to `master`

- build(plasma-core/ui/b2c/web): fix storybook build ([@Yeti-or](https://github.com/Yeti-or))
- chore(plasma-b2c): Bump `plasma-tokens-b2c` version ([@fanisco](https://github.com/fanisco))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.6.0 (Wed Oct 06 2021)

#### 🚀 Enhancement

- feat(plasma-b2b): Sanitize paste event on Editable [#833](https://github.com/salute-developers/plasma/pull/833) ([@IArny](https://github.com/IArny))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@IArny](https://github.com/IArny)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.5.1 (Wed Oct 06 2021)

#### 🐛 Bug Fix

- test: add SBSans to cypress [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.5.0 (Mon Oct 04 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): Editable component added [#821](https://github.com/salute-developers/plasma/pull/821) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# v1.4.1 (Mon Oct 04 2021)

#### 🐛 Bug Fix

- test(plasma-ui/web/b2c): Typography: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-web/b2c): Tooltip: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): TextField: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): TextArea: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): Tabs: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): Switch: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-web/b2c): Select: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): Radiobox: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-web/b2c): Progress: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): Price: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): PaginationDots: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-web/b2c): Notification: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-web/b2c): Modal: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-web/b2c): Link: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): Dropdown: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): Checkbox: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui/web/b2c): Button: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.4.0 (Sun Oct 03 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.3.2 (Sun Oct 03 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- test(plasma-b2c): enable cypress comp tests [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.3.1 (Tue Sep 28 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.3.0 (Tue Sep 28 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.2.0 (Fri Sep 24 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): Added group `Select` functionality [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))
- feat(plasma-b2c): Added `Select` component [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix(plasma-b2c): Flip `Select` arrow [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.1.1 (Tue Sep 21 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.1.0 (Mon Sep 20 2021)

#### 🚀 Enhancement

- feat(plasma-b2c): Added `Tabs` and `TabItem` component [#804](https://github.com/salute-developers/plasma/pull/804) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore: Initiated `plasma-b2c` package [#804](https://github.com/salute-developers/plasma/pull/804) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.44.3 (Thu Sep 09 2021)

#### 🐛 Bug Fix

-   fix(plasma-web): Disabled state for `Checkbox` [#791](https://github.com/salute-developers/plasma/pull/791) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.44.2 (Thu Sep 09 2021)

#### 🐛 Bug Fix

-   chore(plasma-web): Storybook controls for Button, Carousel, Checkbox, Modal [#651](https://github.com/salute-developers/plasma/pull/651) ([@kayman233](https://github.com/kayman233))
-   chore(plasma-web): Storybook controls for Notification, PaginationDots, Progress, Radiobox [#652](https://github.com/salute-developers/plasma/pull/652) ([@kayman233](https://github.com/kayman233))
-   chore(plasma-web): Storybook controls for Tooltip, Badge, Image, Price, Spinner [#662](https://github.com/salute-developers/plasma/pull/662) ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.44.1 (Wed Sep 08 2021)

#### 🐛 Bug Fix

-   fix: Refactor `Checkbox` & `Radiobox` in order of better understanding [#698](https://github.com/salute-developers/plasma/pull/698) ([@fanisco](https://github.com/fanisco))
-   chore(plasma-ui): update ts/styled-comps deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
-   chore(plasma-web): update storybook deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
-   chore(plasma-web): update build deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.44.0 (Wed Sep 08 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Added `TabsController` in order to use keyboard arrows [#687](https://github.com/salute-developers/plasma/pull/687) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs(plasma-web): Storybook controls for Select, Switch, TextField [#688](https://github.com/salute-developers/plasma/pull/688) ([@kayman233](https://github.com/kayman233))
-   docs(plasma-web): Describe `TabsController` [#687](https://github.com/salute-developers/plasma/pull/687) ([@fanisco](https://github.com/fanisco))
-   chore: Storybook docgenInfo extraction tool [#648](https://github.com/salute-developers/plasma/pull/648) ([@fanisco](https://github.com/fanisco))

#### Authors: 3

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.43.0 (Wed Sep 01 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Pass color and contentLeft to DropdownItem [#683](https://github.com/salute-developers/plasma/pull/683) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-web): Dropdown shadow black [#683](https://github.com/salute-developers/plasma/pull/683) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-web): Pass DropdownItem border radius as separate CSS Var [#683](https://github.com/salute-developers/plasma/pull/683) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.42.1 (Tue Aug 31 2021)

#### 🐛 Bug Fix

-   docs(plasma-web): Storybook controls for Tabs, TextArea [#661](https://github.com/salute-developers/plasma/pull/661) ([@kayman233](https://github.com/kayman233))
-   chore(plasma-web): disableProps added [#661](https://github.com/salute-developers/plasma/pull/661) ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.42.0 (Fri Aug 27 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.41.0 (Fri Aug 27 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.40.0 (Mon Aug 23 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.39.0 (Fri Aug 20 2021)

#### 🚀 Enhancement

-   feat: Skeleton in core/ui/web [#628](https://github.com/salute-developers/plasma/pull/628) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.37.2 (Wed Aug 18 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.37.1 (Wed Aug 18 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.37.0 (Mon Aug 16 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.36.0 (Tue Aug 10 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.35.0 (Fri Aug 06 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.34.1 (Fri Aug 06 2021)

#### 🐛 Bug Fix

-   fix(plasma-core): Image: add role attr [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.34.0 (Fri Aug 06 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.33.0 (Wed Aug 04 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.32.0 (Mon Aug 02 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Add `hocs`, `hooks`, `mixins`, `types` and `utils` from plasma-core [#592](https://github.com/salute-developers/plasma/pull/592) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.31.0 (Mon Aug 02 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Index imports for treeshaking [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   ci: Build plasma without rollup [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.30.1 (Fri Jul 30 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.29.1 (Wed Jul 21 2021)

#### 🐛 Bug Fix

-   fix(plasma-web): form submit trigger inside select [#557](https://github.com/salute-developers/plasma/pull/557) ([@tsumo](https://github.com/tsumo))

#### Authors: 1

-   [@tsumo](https://github.com/tsumo)

---

# v1.29.0 (Tue Jul 20 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Integrate Dropdown into Select [#545](https://github.com/salute-developers/plasma/pull/545) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-web): Added Dropdown component [#545](https://github.com/salute-developers/plasma/pull/545) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.28.2 (Mon Jul 19 2021)

#### 🐛 Bug Fix

-   fix: remove double ampersands [#537](https://github.com/salute-developers/plasma/pull/537) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.28.1 (Fri Jul 16 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui, plasma-web): toolbar buttons return [#547](https://github.com/salute-developers/plasma/pull/547) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

-   [@kayman233](https://github.com/kayman233)

---

# v1.28.0 (Thu Jul 15 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.27.0 (Thu Jul 15 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.26.0 (Wed Jul 14 2021)

#### 🐛 Bug Fix

-   feat(plasma-ui, plasma-web, showcase): sb-essentials added [#535](https://github.com/salute-developers/plasma/pull/535) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

-   [@kayman233](https://github.com/kayman233)

---

# v1.25.3 (Wed Jul 14 2021)

#### 🐛 Bug Fix

-   fix(plasma-web): TextField can accept deferred defaultValue [#536](https://github.com/salute-developers/plasma/pull/536) ([@fanisco](https://github.com/fanisco))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.25.2 (Tue Jul 13 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.25.1 (Tue Jul 13 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.25.0 (Tue Jul 13 2021)

#### 🚀 Enhancement

-   feat: react17 and test job added [#496](https://github.com/salute-developers/plasma/pull/496) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.24.0 (Fri Jul 09 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: Alias react, react-dom and styled-components in Storybook webpack [#518](https://github.com/salute-developers/plasma/pull/518) ([@fanisco](https://github.com/fanisco))
-   chore: Bump Storybook version [#518](https://github.com/salute-developers/plasma/pull/518) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.23.0 (Thu Jul 08 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.22.1 (Wed Jul 07 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): commas change [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): favicon to png fix [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): safari bug fix [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-web): favicon added [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.22.0 (Fri Jul 02 2021)

#### 🐛 Bug Fix

-   fix: TextField placeholder placement [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-web): TextField placeholder color [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix: Build components with own namespace es/cjs [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix: TextField helperText to boolean [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix: Checkbox layout with various content [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix: Input interface and props [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-web): Checkbox & Radio label for attribute [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.21.1 (Thu Jul 01 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.21.0 (Thu Jul 01 2021)

#### 🚀 Enhancement

-   feat: Added plasma-tokens-b2c package [#468](https://github.com/salute-developers/plasma/pull/468) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-web): Removed tokens dependency [#468](https://github.com/salute-developers/plasma/pull/468) ([@fanisco](https://github.com/fanisco))
-   docs(plasma-web): about page with link added [#447](https://github.com/salute-developers/plasma/pull/447) ([@kayman233](https://github.com/kayman233))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.20.0 (Wed Jun 23 2021)

#### 🚀 Enhancement

-   feat(plasma-tokens): Updated tokens from plasma-styles [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-web): Components dark theme fixes [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
-   chore: Added favicon for storybooks [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
-   docs: ThemeColors in both libraries [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
-   docs(plasma-web): Added Grid docs [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.19.0 (Tue Jun 22 2021)

#### 🚀 Enhancement

-   feat(plasma-core): Spinner sizes [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-web): Button success [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   feat(plasma-core, plasma-ui, plasma-web): Reassembled Field [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.18.0 (Fri Jun 18 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Added Link component [#441](https://github.com/salute-developers/plasma/pull/441) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-web): Components dark theme fixes [#441](https://github.com/salute-developers/plasma/pull/441) ([@fanisco](https://github.com/fanisco))
-   docs: plasma-sb-utils package with a lots useful sb code [#441](https://github.com/salute-developers/plasma/pull/441) ([@fanisco](https://github.com/fanisco))
-   docs: Added switcher for plasma-web's dark theme [#441](https://github.com/salute-developers/plasma/pull/441) ([@fanisco](https://github.com/fanisco))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.17.1 (Thu Jun 17 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.17.0 (Wed Jun 09 2021)

#### 🚀 Enhancement

-   feat(plasma-tokens-web): Using plasma-colors, dark theme [#398](https://github.com/salute-developers/plasma/pull/398) ([@fanisco](https://github.com/fanisco))
-   feat: Added plasma-colors package [#398](https://github.com/salute-developers/plasma/pull/398) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   docs(plasma-web): Added themes story [#398](https://github.com/salute-developers/plasma/pull/398) ([@fanisco](https://github.com/fanisco))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.16.1 (Wed Jun 09 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.15.1 (Mon May 31 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.15.0 (Mon May 31 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.14.0 (Mon May 31 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.13.2 (Mon May 31 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.13.1 (Thu May 20 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.13.0 (Thu May 20 2021)

#### 🐛 Bug Fix

-   feat(plasma-core, plasma-ui, plasma-web): Moved PaginationDots to core [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-core, plasma-ui, plasma-web): Moved Carousel to core [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.12.2 (Tue May 18 2021)

#### 🐛 Bug Fix

-   fix(plasma-web): Added Badge to index [#397](https://github.com/salute-developers/plasma/pull/397) ([@fanisco](https://github.com/fanisco))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.12.1 (Mon May 17 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.12.0 (Mon May 17 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Added Spinner to web [#326](https://github.com/salute-developers/plasma/pull/326) (prokopyevviktor@yandex.ru)

#### 🐛 Bug Fix

-   docs(showcase): Added Spinner showcase web [#326](https://github.com/salute-developers/plasma/pull/326) (prokopyevviktor@yandex.ru)
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Viktor Prokopyev (prokopyevviktor@yandex.ru)

---

# v1.11.0 (Fri May 14 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Added Tooltip component [#345](https://github.com/salute-developers/plasma/pull/345) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.10.0 (Thu May 13 2021)

#### 🐛 Bug Fix

-   docs: description in checkbox and radiobox storybook [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: soft peerDependencies only [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.9.0 (Tue May 11 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Added Modal component [#339](https://github.com/salute-developers/plasma/pull/339) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-web): Added Notification component [#339](https://github.com/salute-developers/plasma/pull/339) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.8.0 (Fri May 07 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Added Progress component [#340](https://github.com/salute-developers/plasma/pull/340) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.7.0 (Thu May 06 2021)

#### 🐛 Bug Fix

-   feat(plasma-core, plasma-ui, plasma-ui): Moved Image component [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-core, plasma-ui, plasma-ui): Moved Price component [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))
-   build: fix package-locks [#337](https://github.com/salute-developers/plasma/pull/337) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.6.0 (Tue Apr 27 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Added Select component [#328](https://github.com/salute-developers/plasma/pull/328) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# vnull (Tue Apr 27 2021)

#### ⚠️ Pushed to `master`

-   {chore: update package-locks} ([@github-actions[bot]](https://github.com/github-actions[bot]))

#### Authors: 1

-   [@github-actions[bot]](https://github.com/github-actions[bot])

---

# v1.4.1 (Tue Apr 20 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui, plasma-web): Badge: correct reexport & const creation [#313](https://github.com/salute-developers/plasma/pull/313) ([@fanisco](https://github.com/fanisco))
-   ci: Deploy documentation for plasma-web [#313](https://github.com/salute-developers/plasma/pull/313) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.4.0 (Fri Apr 16 2021)

#### 🚀 Enhancement

-   feat(core): made reexport in ui & web, added showcase for web [#308](https://github.com/salute-developers/plasma/pull/308) (prokopyevviktor@yandex.ru)

#### Authors: 1

-   Viktor Prokopyev (prokopyevviktor@yandex.ru)

---

# v1.3.0 (Thu Apr 15 2021)

#### 🚀 Enhancement

-   feat: Moved Typography to plasma-core / plasma-web [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-ui, plasma-web): Fix setting props in TextField & TextArea [#299](https://github.com/salute-developers/plasma/pull/299) ([@LamaEats](https://github.com/LamaEats))
-   fix(plasma-ui, plasma-web): Added SC babel plugin to avoid classname collision [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))
-   chore(plasma-core, plasma-web): Added components to index files [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.2.1 (Thu Apr 15 2021)

#### 🐛 Bug Fix

-   fix: bump peerDeps [#307](https://github.com/salute-developers/plasma/pull/307) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.2.0 (Wed Apr 14 2021)

#### 🚀 Enhancement

-   feat(plasma-web): Added TextArea component [#290](https://github.com/salute-developers/plasma/pull/290) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.1.0 (Wed Apr 07 2021)

#### 🐛 Bug Fix

-   Bump independent versions \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))
-   Update CHANGELOG.md \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.0.0 (Fri Apr 02 2021)

#### 🚀 Enhancement

-   feat(ui): Button/Tabs: resizible => stretch / fixedWidth => stretch. BREAKING [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
-   feat: Moved Grid from ui to plasma-core, Grid for plasma-web [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
-   feat: esm build, fix package-lock after rebase [#279](https://github.com/salute-developers/plasma/pull/279) ([@KateKate](https://github.com/KateKate))
-   feat: esm build core, icons, ui, web [#279](https://github.com/salute-developers/plasma/pull/279) ([@KateKate](https://github.com/KateKate))
-   feat: Button: Code separation for easier composition and styling [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-web): Переход на токены [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
-   feat: Библиотека plasma-web [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix: plasma doc before major [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
-   chore(plasma-web): Added Grid to index [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
-   chore: Fix packages versions [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
-   chore: Bump independent versions [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))

#### Authors: 3

-   Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
