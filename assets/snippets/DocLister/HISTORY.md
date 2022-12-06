## 1.4.10 (06.08.2014)
* [Refactor] Отказ от констант для ключей массива jsonHelper::_error
* [Refactor] Проверка в классе DLphx на существование данных в сессии
* [Fix] Опечатка в имени переменной DLTemplate::phx

## 1.4.9 (04.08.2014)
* [Add] Возможность фильтрации документов из контроллера site_content без указания родителя (Issue #54)
* [Add] Выполнение некешируемых плейсхолдеров в методе DLTemplate::parseDocumentSource

## 1.4.8 (28.07.2014)
* [Bug] Некорректный сброс $_GET при пустом результате (Issue #58)

## 1.4.7 (25.07.2014)
* [Add] Новый типа шаблонов @SNIPPET
* [Refactor] Экранирование данных в IN фильтре (PR #57 by @webber12)

## 1.4.6 (24.07.2014)
* [Bug] Ошибка при перенаправлении в начало пагинатора (Issue #56) 

## 1.4.5 (21.07.2014)
* [Refactor] В prepare теперь можно управлять пропуском документов во время их обработки

## 1.4.4 (17.07.2014)
* [Add] Возможность подмешивать документы с конкретными ID к результатам выдачи в режиме idType = parents
* [Add] В чанки типа tpl добавлен плейсхолдер e.title с отфильтрованным заголовком документа для подстановки значения в аттрибуты title и alt 
* [Refactor] Стек отладки в режиме API теперь можно получить из плейсхолдера [+dl.debug+] сразу после вызова сниппета

## 1.4.3 (15.07.2014)
* [Add] Добавлен фильтр IN (PR #51 by @webber12)
* [Add] Добавлены плейсхолдеры from и to (PR #52 by @Pathologic)
* [Refactor] Перенаправление в начало пагинатора, если запрошена несуществующая страница (PR #53 by @Pathologic)
* [Bug] Исправлена ошибка рендера TV параметров с отключеным/измененным префиксом tvPrefix (Issue #49)
* [Bug] Отключен вывод стека отладки в режиме API (Issue #48)

## 1.4.2 (21.06.2014)
* [Add] В клаcc DLTemplate добавлен новый метод parseDocumentSource который делает замену MODX плейсхолдеров в документе
* [Add] Добавлен PHX модификатор isnotempty (Issue #47)
* [Refactor] Результатирующий ответ от DocLister пропускается через DLTemplate::parseDocumentSource
* [Refactor] Единая работа с summary во всех контроллерах + возможность включить игнорирование introtext или переопределить introtext/content поля (Issue #46)

## 1.4.1 (03.05.2014)
* [Bug] Переименовывание класса paginate в DLpaginate

## 1.4.0 (26.04.2014)
* [Bug] Ошибка в SQL запросе при фильтре containsOne
* [Bug] Игнорирование параметра selectFields в режиме idType=parents
* [Bug] Двойоное экранирование имени поля при использовании фильтра tvd с like условием
* [Bug] Класс paginate переименован в DLpaginate из-за конфилкта имен классов из других расширений (Issue #42)
* [Refactor] Переименован класс PHxParser в DLphx
* [Refactor] Снижены требования к версии php до 5.2 для использования шаблонизатора DLTemplate
* [Refactor] Доработана совместимость класса jsonHelper с php 5.2

## 1.3.3 (06.04.2014)
* [Add] Новый параметр tvPrefix позволяющий изменить/отключить префикс tv у плейсхолдеров со значениями ТВ
* [Add] Возможность использования phx в шаблонах

## 1.3.2 (31.03.2014)
* [Bug] Игнорировани параметра debug при определенных обстоятельствах

## 1.3.1 (27.03.2014)
* [Add] Добавлен контроллер shopkeeper для работы с базой товаров интернет-магазина shopkeeper

## 1.3.0 (23.03.2014)
* [Add] Новый фильтр tvd расиряющий базовый фильтр tv, который может фильтровать значения ТВ параметров с учетом значений по умолчанию
* [Add] Добавлен псевдоним @INLINE к inline шаблонам с именами @TPL и @CODE
* [Add] Добавлены псевдонимы для фильтров gt, lt, glt, egt, like
* [Add] Добавлен новый сниппет DLTemplate
* [Add] Добавлен новый режим TVDATETIME для приведения значения к типу дата у ТВ параметров с типом ввода "Date"
* [Bug] Ошибка при запросе существующего экстендера через метод getExtender с 3 параметром в значении true
* [Bug] Ошибка с подсчета общего времени работы сниппета на этапах выполняемых в конструкторах
* [Refactor] Возможность одновременной фильтрации и сортировки по TV параметрам без повторного включения таблиц в SQL запрос
* [Refactor] Множественная фильтрация по одним и тем же TV параметрам без повторного включения таблиц в SQL запрос (Issue #16)
* [Refactor] Оформлен блок с отладочной информацией
* [Refactor] Поддержка ответа от prepare функций в JSON формате (Issue #27)
* [Refactor] Методы для шаблонизации вынесены в отдельный класс "одиночку" для упрощения использования вне сниппета
* [Refactor] Пересмотрена работа параметра dir, определяющего из какой папки грузить контроллеры
* [Refactor] Метод injectSortByTV из контроллера site_content перемещен в экстендер TV
* [Refactor] Автоматическое дополнение параметра tvSortWithDefault из фильтра по ТВ с учетом значений по умолчанию

## 1.2.8 (19.03.2014)
* [Fix] Ошибка пагинации с выборкой при сочетании параметров &idType=`parents` &showParent=`1` (!!! Возможен конфликт совместимости)
* [Fix] Ошибка пагинации без группировок для контроллера ontable
* [Fix] Исправлена ошибка при генерации ссылок для плейсхолдеров [+url+] в контроллере site_content (by @Pathologic)

## 1.2.7 (18.02.2014)
* [Fix] Ошибка в SQL запросе при пагинации с сортировкой по TV параметру
* [Fix] Исправлено логирование имени класса загружаемого экстендера (доступно в режиме полной отладки debug=2)
* [Refactor] Изменен способ определения числа строк удовлетворяющих выборке. Выборка с опцией SQL_CALC_FOUND_ROWS заменена на запрос с вложенным count()

## 1.2.6 (17.02.2014)
* [Add] Добавлена поддержка шаблонов tplOdd, tplEven, tplId1, tplId2, ... tplIdN

## 1.2.5 (03.02.2014)
* [Fix] Исправлена ошибка в фильтрах по TV параметру с дефисом (by @Pathologic)

## 1.2.4 (31.01.2014)
* [Refactor] Убрано повторное преобразование символов функцией htmlspecialchars() в методе DocLister::sanitarData()
* [Add] Добавлен новый параметр TplDotsPage для смены шаблона пропущенных элементов пагинатора

## 1.2.3 (25.01.2014)
* [Add] Добавлен новый параметр groupBy
* [Refactor] Рефакторинг метода jsonHelper::json_last_error_msg() под PHP < 5.3
* [Refactor] Добавлено игнорирование Notice ошибок в режиме отладки

## 1.2.2 (24.01.2014)
* [Add] Добавлен новый параметр selectFields
* [Refactor] Изменен способ определения числа строк удовлетворяющих выборке. Выборка count() заменена на SQL_CALC_FOUND_ROWS

## 1.2.1 (14.01.2014)
* [Add] Поддержка множественных вызовов prepare функций
* [Add] Поддержка замыканий и имен функций параметром prepare

## 1.2.0 (28.12.2013)
* [Add] Добавлен сниппет DLglossary
* [Refactor] Подправлены правила парсинга параметра filters
* [Refactor] Некоторые методы для работы с БД вынесены в статичный класс sqlHelper

## 1.1.16 (27.12.2013)
* [Fix] Удаление символов A, N и D из where условия с правого края WHERE условий

## 1.1.15 (15.12.2013)
* [Fix] Исправлена установка класса first

## 1.1.14 (10.12.2013)
* [Add] Добавлен фильтр отрицания
* [Fix] Исправление ошибки выборки документов с учетом depth

## 1.1.13 (06.12.2013)
* [Fix] Использование фильтров с параметром depth

## 1.1.12 (15.11.2013)
* [Fix] Исправлено переключение методов отладки с выводом ошибок
* [Fix] Откорректирована работа с date плейсхолдером в API режиме контроллера onetable

## 1.1.11 (14.11.2013)
* [Add] Добавлен новый параметр showNoPublish для возможности вывода не опубликованных и удаленных документов

## 1.1.10 (12.11.2013)
* [fix] Доработана загурзка значений по умолчанию у TV-параметров
* [fix] Добавлена обработка пробелов в именах TV-парамеров списка tvList
* [Add] Добавлена возможность сортировки по TV параметрам с приведением типов
* [Add] Новые параметры для пагинатора (by @webber12)

## 1.1.9 (03.10.2013)
* [Add] Добавлен новый экстендер jotcount для получения числа комментариев к документам (by @Pathologic)
 
## 1.1.8 (24.09.2013)
* [Add] Добавлен новый оператор against в фильтры

## 1.1.7 (19.09.2013)
* [Refactor] Небольшой рефакторинг правил выборки документов в контроллере onetable
* [Refactor] Добавлена новая переменная _DocLister доступная в сниппетах prepare
* [Bug] Совместимость класса jsonHelper с PHP 5.2 (Issue #26)
* [Refactor] Добавлен новый параметр ignoreEmpty для выборки всех документв из базы игнорируя IDs

## 1.1.6 (12.09.2013)
* [Bug] Жесткая проверка значений параметра parents (Issue #23)

## 1.1.5 (11.09.2013)
* [Refactor] Оптимизация фильтров по TV параметрам (Issue #21)
* [Refactor] Оптимизация работы с экстендерами в контроллере site_content (Issue #22)

## 1.1.4 (09.09.2013)
* [Bug] Новый метод DocLister::getRequest() для получения GET строки без учета alias'a текущего документа (Issue #17)
* [Bug] Исправлена выборка idType=documents с пустым параметром documents (Issue #18)
* [Add] Новый плесхолдер [+dl.full_iteration+] с непрерывным счетчиком позиции (Issue #19)
* [Add] Добавлен новый Helper класс со статичными методами для комфортной работы с json
* [Add] Загрузка параметров сниппета из конфигурационных файлов (Issue #20)
* [Add] Подключение произвольных лексиконов (Issue #15)
* [Refactor] Пересмотрен алгоритм загрузки debug класса
* [Refactor] Добавлена кастомизация кода ошибки для лога MODX
* [Refactor] Изменена логика загрузки лексиконов. Теперь за одно обращение к функции можно загружать сразу несколько лексиконов
* [Refactor] Массив стандартных параметров сниппета DLcrumbs разделен на 3 части (стандартные - /config/core/crumbs.json, переменные - аргументы сниппета и статичные - неизменные параметры)
* [Refactor] Из сниппета DocLister убрана загрузка классов необходимых для абстрактного класса DocLister в файл DocLister.abstract.php

## 1.1.3 (08.09.2013)
* [Bug] Некорректный подсчет числа документов при выборке с idType=documents (Issue #11)
* [Bug] Некорректные ссылки на документы при включеном экстендере request (Issue #12)
* [Bug] Конфликт алиасов таблиц при множественной фильтрации по одному и тому же TV-параметру (Issue #16)
* [Bug] Некорректная ссылка в плейсхолдере [+link+] при использовании шаблона TplCurrentPage пагинатора pages
* [Bug] Ссылка на первую страницу в пагинаторе pages при наличии GET параметров
* [Refactor] Битые ссылки по умолчанию в пагинаторе при использовании дополнительных $_GET параметров (Issue #12)
* [Refactor] Автоматическое переименовывание данных в языковом пакете (Issue #13)
* [Refactor] Использование лексиконов в HTML шаблонах (Issue #14)

## 1.1.2 (02.09.2013)
* [Fix] Исправлен парсинг параметров filters
* [Refactor] Добавлены сообщения для отладчика

## 1.1.1 (30.08.2013)
* [Add] Добавлен новый параметр 
* [Bug] Исправлена ошибка при пустом списке параметров для сниппета DLcrumbs
* [Add] Новый метод для корректного экранирования строки перед подстановкой в SQL запрос LIKE
* [Bug] Исправлены SQL-injection в фильтрах
* [Refactor] Добавлен новый параметр showCurrent в сниппет DLcrumbs

## 1.1 (27.08.2013)
* [Bug] Исправлена ошибка обработки пустых TV-параметров в JSON ответе
* [Add] Новый контроллер site_content_filters (by @kabachello)
* [Add] Добавлен режим отладки debug 1 (все события) и 2 (только SQL запросы)
* [Add] Добавлен _ide_helper.php для удобства разрабокти экстендеров контроллеров и фильтров
* [Refactor] Пересмотрена работа с базой. Теперь для выполнения SQL запросов применяется метод DocLister::dbQuery()
* [Refactor] Пересмотрена структура папок в директории /core/
* [Refactor] Код в контроллерах site_content_* вычищен от копи-паста
* [Refactor] Добавлена поддержка фильтров в контроллере site_content_tags
* [Refactor] Изменен способ автоматической подгрузки лексиконов для экстендеров
* [Refactor] Оптимизирована загрузка чанков

## 1.0.23 (26.08.2013)
* [Add] Новый экстендер prepare для обработки массива плейсхолдеров перед разбором шаблона

## 1.0.22 (25.08.2013)
* [Bug] Исправлен глюк с переопределением шаблона tpl шаблонами tplLast, tplCurrent и tplFirst

## 1.0.21 (22.08.2013)
* [Bug] Исправлен SQL запрос в методе getChildrenCount() контроллера site_content из-за нового метода DocLister::getTable()

## 1.0.20 (20.08.2013)
* [Bug] Исправлен SQL запрос в методе getDocList() при выборке idType=documents
* [Add] Добавленметод DocLister::getPK()
* [Add] Новый сниппет DLcrumbs для замены сниппета Breadcrumbs
* [Refactor] Новый параметр в методе DocLister::getTable() для задания псевдонима таблицы
* [Refactor] Добавлены новые способы сортировок в методе DocLister::SortOrderSQL()
* [Refactor] В классе пагинатора Digg оптимизировано выставление троеточия (by kabachello)

## 1.0.19 (18.08.2013)
* [Add] Новый метод DocLister::getTable() на замету $this->modx->getFullTableName()
* [Add] Новый экстендер tv для работы с TV параметрами
* [Bug] Исправлена ошибка формирования блока если подходящих документов не обнаружено и не определен шаблон noneTPL
* [Refactor] Код отформатирован в соответствии со стандартами PSR
* [Refactor] CHANGELOG переведен на русский язык
* [Refactor] Readme переведен на русский язык и добавлены ключевые ссылки на описание DocLister'a
* [Refactor] Код контроллеров site_content и site_content_tags переписан в соответствии с новым обязательным экстендером TV

## 1.0.18 (28.07.2013)
* [Add] Добавлен новый параметр JSONformat

## 1.0.17 (17.07.2013)
* [Refactor] Исправлен метод whereTag в контроллере site_content_tags

## 1.0.16 (11.06.2013)
* [Add] Добавлены новые параметры tplFirst, tplLast, tplCurrent

## 1.0.15 (24.05.2013)
* [Bug] Исправлен шаблон пагинации
* [Add] Добавлен новый параметр noneWrapOuter
* [Refactor] Сохранение метода получения документов

## 1.0.14 (08.05.2013)
* [Add] Добавлен плейсхолдер page в экстендер paginate

## 1.0.13 (04.05.2013)
* [Bug] Объевление метода getJSON() для совместимости с DocLister::getJSON($data, $fields, $array = Array)
 
## 1.0.12 (2013-05-03)
* [Bug] Игнорирование api параметра

## 1.0.11 (2013-04-28)
* [Bug] Установка inline шаблонов в экстендере paginate с приставкой @CODE
* [Bug] parents параметр с пробелами не корректно воспринимался методом DocLister::cleanIDs()

## 1.0.10 (2013-04-16)
* [Refactor] Удалена синхронизация DocLister::$_cfg['parents'] и DocLister::$IDs для проверки значений по умолчанию

## 1.0.9 (2013-03-28)
* [Add] Новый метод для шаблонов Doclister::getChunkByParam()
* [Bug] Исправлен метод DocLister::_getChunk()

## 1.0.8 (2013-03-26)
* [Bug] Исправлен url на основной странице
* [Add] Новый метод для шаблонов DocLister::_getChunk
* [Add] Новый экстендер template для упрощения добавления новых методов шаблонизации
* [Refactor] Исправлен EOF в контроллерах

## 1.0.7 (2013-03-12)
* [Add] Добавлен метод DocLister::checkDL() для контроля основных параметров
* [Refactor] Переписан код сниппета DocLister

## 1.0.6 (2013-03-11)
* [Bug] Добавлена фильтрация символов { и } в методе DocLister::sanitarData()
* [Add] Добавлен параметр pageAdjacents и pageLimit для экстендера paginate
* [Add] Новый парсер шаблонов - метод DocLister::parseChunk()
* [Refactor] Исключения в конструкторе DocLister
* [Refactor] Переписана обработка плейсхолдера date

## 1.0.5 (2013-03-10)
* [Add] Добавлен новый метод DocLister::checkExtender() для проверки экстендеров
* [Add] Добавлен usertype параметр для экстендера user
* [Add] Добавлен новый контроллер site_content_tags с поддержкой тэгов из плагина TagSaver
* [Add] Добавлен новый метод DocLister::treeBuild() для построенияд деревьев
* [Refactor] Переименован абстрактный class экстендеров
* [Example] тестовый контроллер для построения деревьев

## 1.0.4 (2013-03-09)
* [Add] Добавлен экстендер user
* [Add] Добавлен новый контроллер onetable для выборки из произвольных таблиц
* [Add] Добавлен новый метод DocLister::getOneField
* [Add] Добавлен доступ к $modx в экстендерах DocLister
* [Add] Добавле нновый параметр noparser в экстендере summary
* [Add] Добавлена поддержка user экстендера во всех контроллерах
* [Refactor] iteration плейсхолдер начинается теперь с 1

## 1.0.3 (2013-03-08)
* [Add] Изменено значение параметра dateSource на pub_date в контроллере site_content
* [Add] Добавлен orderBy параметр. Объединенные параметры sortBy и sortDir
* [Add] Добавлен sortDir параметр. Синоним для order
* [Add] Добавлен fieldSort параметр. Поле по умолчанию для сортировки

## 1.0.2 (2013-03-07)
* [Refactor] Рефакторинг API режима

## 1.0.1 (2013-03-06)
* [Refactor] Исправлена совместимость с PHP < 5.2.9

## 1.0.0 (2013-03-04)
* Первый релиз