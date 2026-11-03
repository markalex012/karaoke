const SONGS = [
  {
    "id": "s0",
    "title": "Зимний Сон",
    "artist": "Алсу",
    "url": "https://karaopa2.ru/karaoke/performer/alsu/zimniy_son.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s2",
    "title": "Снег",
    "artist": "Филипп Киркоров",
    "url": "https://karaopa2.ru/karaoke/performer/filipp_kirkorov/sneg.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s3",
    "title": "Опять Метель",
    "artist": "Алла Пугачева",
    "url": "https://karaopa2.ru/karaoke/performer/alla_pugacheva/opyat_metel.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s6",
    "title": "Колыбельная Умки",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/kolybelnaya_umki.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear",
      "cartoons"
    ],
    "source": "Караопа2",
    "movie": "Умка",
    "aliases": "Колыбельная медведицы"
  },
  {
    "id": "s9",
    "title": "Это Новый Год",
    "artist": "Нюша",
    "url": "https://karaopa2.ru/karaoke/performer/nyusha/eto_novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s11",
    "title": "Лесной Олень",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/lesnoy_olen.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Ох уж эта Настя!",
    "screenType": "film",
    "aliases": "Лесной олень"
  },
  {
    "id": "s12",
    "title": "Новогодняя",
    "artist": "Дискотека Авария",
    "url": "https://karaopa2.ru/karaoke/performer/diskoteka_avariya/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s13",
    "title": "Песенка Снегурочки (Ну Погоди)",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenka_snegurochki_nu_pogodi.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear",
      "cartoons"
    ],
    "source": "Караопа2",
    "movie": "Ну, погоди!",
    "aliases": "Песенка Снегурочки"
  },
  {
    "id": "s14",
    "title": "Снежинка (из фильма \"Чародеи\")",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/snezhinka_iz_filma_charodei.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Чародеи",
    "screenType": "film",
    "aliases": "Снежинка"
  },
  {
    "id": "s17",
    "title": "Зимняя Вишня",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/zimnyaya_vishnya.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "varum"
    ]
  },
  {
    "id": "s19",
    "title": "Кабы Не Было Зимы",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/kaby_ne_bylo_zimy.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear",
      "cartoons"
    ],
    "source": "Караопа2",
    "movie": "Зима в Простоквашино",
    "aliases": "Кабы не было зимы"
  },
  {
    "id": "s21",
    "title": "Звенит Январская Вьюга",
    "artist": "Нина Бродская",
    "url": "https://karaopa2.ru/karaoke/performer/nina_brodskaya/zvenit_yanvarskaya_vyuga.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "films",
      "rupop"
    ],
    "source": "Караопа2",
    "movie": "Иван Васильевич меняет профессию",
    "screenType": "film",
    "aliases": "Звенит январская вьюга",
    "popGroups": [
      "zatsepin"
    ]
  },
  {
    "id": "s22",
    "title": "Три Белых Коня (Из Кинофильма \"Чародеи\")",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/tri_belyh_konya_iz_kinofilma_charodei.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Чародеи",
    "screenType": "film",
    "aliases": "Три белых коня"
  },
  {
    "id": "s23",
    "title": "Ой Мороз Мороз",
    "artist": "Народное",
    "url": "https://karaopa2.ru/karaoke/performer/narodnoe/oy_moroz_moroz.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s24",
    "title": "Снег Кружится Летает Летает",
    "artist": "Пламя",
    "url": "https://karaopa2.ru/karaoke/performer/plamya/sneg_kruzhitsya_letaet_letaet.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s29",
    "title": "Новогодняя",
    "artist": "Верка Сердючка",
    "url": "https://karaopa2.ru/karaoke/performer/verka_serdyuchka/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s30",
    "title": "У Леса На Опушке (Зима)",
    "artist": "Эдуард Хиль",
    "url": "https://karaopa2.ru/karaoke/performer/eduard_hil/u_lesa_na_opushke_zima.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s31",
    "title": "В Лесу Родилась Елочка",
    "artist": "Народное",
    "url": "https://karaopa2.ru/karaoke/performer/narodnoe/v_lesu_rodilas_elochka.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s32",
    "title": "Новый Год",
    "artist": "Потап И Настя Каменских",
    "url": "https://karaopa2.ru/karaoke/performer/potap_i_nastya_kamenskih/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s34",
    "title": "Глупые Снежинки",
    "artist": "Юрий Шатунов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_shatunov/glupye_snezhinki.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s36",
    "title": "Падал Белый Снег",
    "artist": "Артур Руденко",
    "url": "https://karaopa2.ru/karaoke/performer/artur_rudenko/padal_bely_sneg_.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s39",
    "title": "Зима-Холода",
    "artist": "Андрей Губин",
    "url": "https://karaopa2.ru/karaoke/performer/andrey_gubin/zima-holoda.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s40",
    "title": "Маленькой Елочке Холодно Зимой",
    "artist": "Народное",
    "url": "https://karaopa2.ru/karaoke/performer/narodnoe/malenkoy_elochke_holodno_zimoy.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s42",
    "title": "Валенки",
    "artist": "Народное",
    "url": "https://karaopa2.ru/karaoke/performer/narodnoe/valenki.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s44",
    "title": "Одна Снежинка",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/odna_snezhinka.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Чародеи",
    "screenType": "film",
    "aliases": "Одна снежинка"
  },
  {
    "id": "s45",
    "title": "А Снег Идет",
    "artist": "Жанна Агузарова",
    "url": "https://karaopa2.ru/karaoke/performer/zhanna_aguzarova/a_sneg_idet.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Карьера Димы Горина",
    "screenType": "film",
    "aliases": "А снег идёт"
  },
  {
    "id": "s46",
    "title": "Снежинка",
    "artist": "Татьяна Буланова",
    "url": "https://karaopa2.ru/karaoke/performer/tatyana_bulanova/snezhinka.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s47",
    "title": "Ночь Накануне Рождества",
    "artist": "Валерий Меладзе",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_meladze/noch_nakanune_rozhdestva.html",
    "kind": "Рождественские",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s48",
    "title": "Новогодняя Ночь",
    "artist": "Надежда Кадышева",
    "url": "https://karaopa2.ru/karaoke/performer/nadezhda_kadysheva/novogodnyaya_noch.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s49",
    "title": "Пять Минут",
    "artist": "Людмила Гурченко",
    "url": "https://karaopa2.ru/karaoke/performer/lyudmila_gurchenko/pyat_minut.html",
    "kind": "Новогодние",
    "categories": [
      "newyear",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Карнавальная ночь",
    "screenType": "film",
    "aliases": "Пять минут"
  },
  {
    "id": "s50",
    "title": "Снег Идет",
    "artist": "Глюкоза",
    "url": "https://karaopa2.ru/karaoke/performer/glyukoza/sneg_idet.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s53",
    "title": "Новый Год",
    "artist": "София Ротару",
    "url": "https://karaopa2.ru/karaoke/performer/sofiya_rotaru/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s54",
    "title": "Снег",
    "artist": "Елена Ваенга",
    "url": "https://karaopa2.ru/karaoke/performer/elena_vaenga/sneg.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s55",
    "title": "Снежинка",
    "artist": "Лариса Мондрус",
    "url": "https://karaopa2.ru/karaoke/performer/larisa_mondrus/snezhinka.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s58",
    "title": "С новым Годом",
    "artist": "Мурзилки",
    "url": "https://karaopa2.ru/karaoke/performer/murzilki/s_novym_godom.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s59",
    "title": "Снег",
    "artist": "Николай Носков",
    "url": "https://karaopa2.ru/karaoke/performer/nikolay_noskov/sneg.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s60",
    "title": "Снежинка",
    "artist": "София Ротару",
    "url": "https://karaopa2.ru/karaoke/performer/sofiya_rotaru/snezhinka.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s62",
    "title": "С Новым Годом",
    "artist": "Новая Волна",
    "url": "https://karaopa2.ru/karaoke/performer/novaya_volna/s_novym_godom.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s63",
    "title": "Хорошо Что Есть На Свете Новый Год",
    "artist": "Народное",
    "url": "https://karaopa2.ru/karaoke/performer/narodnoe/horosho_chto_est_na_svete_novy_god.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s64",
    "title": "Новый Год",
    "artist": "Стекловата",
    "url": "https://karaopa2.ru/karaoke/performer/steklovata/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s66",
    "title": "Новогодняя",
    "artist": "Катя Лель",
    "url": "https://karaopa2.ru/karaoke/performer/katya_lel/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s67",
    "title": "Звенит Январская Вьюга",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/zvenit_yanvarskaya_vyuga.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Иван Васильевич меняет профессию",
    "screenType": "film",
    "aliases": "Звенит январская вьюга"
  },
  {
    "id": "s68",
    "title": "Падают Снежинки",
    "artist": "Даша Конышева",
    "url": "https://karaopa2.ru/karaoke/performer/dasha_konysheva/padayut_snezhinki.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s70",
    "title": "Новый Год",
    "artist": "Лариса Долина",
    "url": "https://karaopa2.ru/karaoke/performer/larisa_dolina/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s71",
    "title": "Песенка О Медведях",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pesenka_o_medvedyah.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "films",
      "rupop"
    ],
    "source": "Караопа2",
    "movie": "Кавказская пленница, или Новые приключения Шурика",
    "screenType": "film",
    "aliases": "Песенка о медведях",
    "popGroups": [
      "zatsepin"
    ]
  },
  {
    "id": "s72",
    "title": "Новый Год",
    "artist": "Семен Слепаков",
    "url": "https://karaopa2.ru/karaoke/performer/semen_slepakov/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s73",
    "title": "Две Снежинки",
    "artist": "Ассорти",
    "url": "https://karaopa2.ru/karaoke/performer/assorti/dve_snezhinki.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s74",
    "title": "Ночь Перед Рождеством",
    "artist": "Сектор Газа",
    "url": "https://karaopa2.ru/karaoke/performer/sektor_gaza/noch_pered_rozhdestvom_.html",
    "kind": "Рождественские",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s75",
    "title": "На То И Новый Год",
    "artist": "Григорий Река",
    "url": "https://karaopa2.ru/karaoke/performer/grigoriy_reka/na_to_i_novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s76",
    "title": "Новый Год",
    "artist": "Марина Хлебникова",
    "url": "https://karaopa2.ru/karaoke/performer/marina_hlebnikova/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s77",
    "title": "Новый Год В Бутылке",
    "artist": "Дюна",
    "url": "https://karaopa2.ru/karaoke/performer/dyuna/novy_god_v_butylke.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s78",
    "title": "В Новый Год",
    "artist": "Владимир Винокур",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vinokur/v_novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s80",
    "title": "Новый Год",
    "artist": "Екатерина Голицина",
    "url": "https://karaopa2.ru/karaoke/performer/ekaterina_golitsina/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s81",
    "title": "Снегири",
    "artist": "Иванушки International",
    "url": "https://karaopa2.ru/karaoke/performer/ivanushki_international/snegiri.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s83",
    "title": "Снегом Белым",
    "artist": "Николай Басков и Таисия Повалий",
    "url": "https://karaopa2.ru/karaoke/performer/nikolay_baskov_i_taisiya_povaliy/snegom_belym.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s85",
    "title": "Новогодние Игрушки",
    "artist": "Натали",
    "url": "https://karaopa2.ru/karaoke/performer/natali/novogodnie_igrushki.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s86",
    "title": "Елочка, Елка - Лесной Аромат",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/elochka__elka_-_lesnoy_aromat_.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s87",
    "title": "А Снег Идет",
    "artist": "Майя Кристалинская",
    "url": "https://karaopa2.ru/karaoke/performer/mayya_kristalinskaya/a_sneg_idet.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Карьера Димы Горина",
    "screenType": "film",
    "aliases": "А снег идёт"
  },
  {
    "id": "s88",
    "title": "Новогодняя",
    "artist": "Григорий Лепс",
    "url": "https://karaopa2.ru/karaoke/performer/grigoriy_leps/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s89",
    "title": "Опять Метель",
    "artist": "Алла Пугачёва и Кристина Орбакайте",
    "url": "https://karaopa2.ru/karaoke/performer/alla_pugachyova_i_kristina_orbakayte/opyat_metel.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s90",
    "title": "Ёлки, Шарики, Хлопушки",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/yolki__shariki__hlopushki.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s91",
    "title": "Снег",
    "artist": "Ева Польна",
    "url": "https://karaopa2.ru/karaoke/performer/eva_polna/sneg.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s95",
    "title": "Новый Год",
    "artist": "Серебро",
    "url": "https://karaopa2.ru/karaoke/performer/serebro/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s96",
    "title": "В Рождество",
    "artist": "Юрий Шатунов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_shatunov/v_rozhdestvo.html",
    "kind": "Рождественские",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s97",
    "title": "Снегом Белым",
    "artist": "Таисия Повалий",
    "url": "https://karaopa2.ru/karaoke/performer/taisiya_povaliy/snegom_belym.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s98",
    "title": "Новогодние Игрушки",
    "artist": "Аркадий Хоралов",
    "url": "https://karaopa2.ru/karaoke/performer/arkadiy_horalov/novogodnie_igrushki.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s99",
    "title": "Новогодняя Песня",
    "artist": "Блестящие",
    "url": "https://karaopa2.ru/karaoke/performer/blestyaschie/novogodnyaya_pesnya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s100",
    "title": "Новый Год В Постели",
    "artist": "ЧиЛи",
    "url": "https://karaopa2.ru/karaoke/performer/chili/novy_god_v_posteli.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s101",
    "title": "Белый Снег",
    "artist": "Верасы",
    "url": "https://karaopa2.ru/karaoke/performer/verasy/bely_sneg.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s102",
    "title": "Новогодняя Песня",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/novogodnyaya_pesnya.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s105",
    "title": "Ёлочке Не Холодно Зимой",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/yolochke_ne_holodno_zimoy.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s106",
    "title": "Песня Снеговика",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnya_snegovika.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s108",
    "title": "Серебристые Снежинки",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/serebristye_snezhinki.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s109",
    "title": "Опять Метель",
    "artist": "Кристина Орбакайте",
    "url": "https://karaopa2.ru/karaoke/performer/kristina_orbakayte/opyat_metel.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s110",
    "title": "Мандаринка",
    "artist": "Ольга Бузова",
    "url": "https://karaopa2.ru/karaoke/performer/olga_buzova/mandarinka.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s111",
    "title": "Новый Год",
    "artist": "Агата Кристи",
    "url": "https://karaopa2.ru/karaoke/performer/agata_kristi/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s112",
    "title": "Елки",
    "artist": "Верка Сердючка",
    "url": "https://karaopa2.ru/karaoke/performer/verka_serdyuchka/elki.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s113",
    "title": "Снегопад",
    "artist": "Звери",
    "url": "https://karaopa2.ru/karaoke/performer/zveri/snegopad.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s117",
    "title": "Санта - Клаус",
    "artist": "Король И Шут",
    "url": "https://karaopa2.ru/karaoke/performer/korol_i_shut/santa_-_klaus.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s120",
    "title": "Снегом Белым",
    "artist": "Николай Басков",
    "url": "https://karaopa2.ru/karaoke/performer/nikolay_baskov/snegom_belym.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s122",
    "title": "С Новым Годом, Страна!",
    "artist": "УмаТурман",
    "url": "https://karaopa2.ru/karaoke/performer/umaturman/s_novym_godom__strana.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s123",
    "title": "Снежинка",
    "artist": "Дмитрий Маликов",
    "url": "https://karaopa2.ru/karaoke/performer/dmitriy_malikov/snezhinka.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s124",
    "title": "Новогодняя",
    "artist": "Иванушки International",
    "url": "https://karaopa2.ru/karaoke/performer/ivanushki_international/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s126",
    "title": "С Новым Годом",
    "artist": "Виктор Королев",
    "url": "https://karaopa2.ru/karaoke/performer/viktor_korolev/s_novym_godom.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s127",
    "title": "Верим В Детстве Мы Календарю",
    "artist": "Песни из Кинофильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/verim_v_detstve_my_kalendaryu.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s128",
    "title": "Новогодняя",
    "artist": "Дилижанс",
    "url": "https://karaopa2.ru/karaoke/performer/dilizhans/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s129",
    "title": "И Снова Новый Год!",
    "artist": "Наталья Власова",
    "url": "https://karaopa2.ru/karaoke/performer/natalya_vlasova/i_snova_novy_god_.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s135",
    "title": "Новый Год",
    "artist": "Николай Басков",
    "url": "https://karaopa2.ru/karaoke/performer/nikolay_baskov/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s137",
    "title": "С Новым Годом",
    "artist": "Алексей Воробьёв и Вики Дайнеко",
    "url": "https://karaopa2.ru/karaoke/performer/aleksey_vorobyov_i_viki_dayneko/s_novym_godom.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s138",
    "title": "Этот Новый Год",
    "artist": "Балаган Лимитед",
    "url": "https://karaopa2.ru/karaoke/performer/balagan_limited/etot_novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s140",
    "title": "Новый Год С Новой Строчки",
    "artist": "Дима Билан",
    "url": "https://karaopa2.ru/karaoke/performer/dima_bilan/novy_god_s_novoy_strochki.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s141",
    "title": "Праздник К Нам Приходит",
    "artist": "Иван Дорн",
    "url": "https://karaopa2.ru/karaoke/performer/ivan_dorn/prazdnik_k_nam_prihodit.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s142",
    "title": "Новогодний Поцелуй",
    "artist": "Чай Вдвоем",
    "url": "https://karaopa2.ru/karaoke/performer/chay_vdvoem/novogodniy_potseluy.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s144",
    "title": "Дождь И Снег",
    "artist": "Александр Барыкин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_barykin/dozhd_i_sneg.html",
    "kind": "Зимние",
    "categories": [
      "newyear",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "barykin"
    ]
  },
  {
    "id": "s145",
    "title": "Снежинка",
    "artist": "MIA Boyka",
    "url": "https://karaopa2.ru/karaoke/performer/mia_boyka/snezhinka.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s153",
    "title": "Новогодняя Ночь",
    "artist": "Афродита",
    "url": "https://karaopa2.ru/karaoke/performer/afrodita/novogodnyaya_noch.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s158",
    "title": "Дед Мороз",
    "artist": "Крис Кельми",
    "url": "https://karaopa2.ru/karaoke/performer/kris_kelmi/ded_moroz.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s160",
    "title": "Зимовать",
    "artist": "Наталья Власова",
    "url": "https://karaopa2.ru/karaoke/performer/natalya_vlasova/zimovat.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s162",
    "title": "Ёлка - Красавица",
    "artist": "Непоседы",
    "url": "https://karaopa2.ru/karaoke/performer/neposedy/yolka_-_krasavitsa.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s164",
    "title": "Снежинка",
    "artist": "Аня Pokrov",
    "url": "https://karaopa2.ru/karaoke/performer/anya_pokrov/snezhinka.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s169",
    "title": "Новый Год",
    "artist": "Марина Александрова",
    "url": "https://karaopa2.ru/karaoke/performer/marina_aleksandrova/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s172",
    "title": "На белом покрывале января",
    "artist": "Васюта",
    "url": "https://karaopa2.ru/karaoke/performer/vasyuta/nabelompokrivaleyanvarya.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s173",
    "title": "Звенит январская вьюга",
    "artist": "Anna Asti",
    "url": "https://karaopa2.ru/karaoke/performer/anna_asti/zvenitinvarskayaviuga.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s174",
    "title": "Что Такое Новый Год",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/chtotakoenoviygod.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s175",
    "title": "Потолок ледяной",
    "artist": "Эдуард Хиль",
    "url": "https://karaopa2.ru/karaoke/performer/eduard_hil/potolokledyanoy.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s176",
    "title": "Новогодняя Песня (м-ф Маша И Медведь)",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/novogonyapesnya.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s177",
    "title": "Новый год",
    "artist": "Сергей Лазарев",
    "url": "https://karaopa2.ru/karaoke/performer/sergey_lazarev/noviygod.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s178",
    "title": "Песня Деда Мороза",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnyadedamoroza.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear",
      "cartoons"
    ],
    "source": "Караопа2",
    "movie": "Дед Мороз и лето",
    "aliases": "Песня Деда Мороза"
  },
  {
    "id": "s179",
    "title": "Три белых коня",
    "artist": "Лариса Долина",
    "url": "https://karaopa2.ru/karaoke/performer/larisa_dolina/tribelihkonya.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s180",
    "title": "Топ топ сапожок",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/toptopsapozhok.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s181",
    "title": "Зима в сердце",
    "artist": "Гости Из Будущего",
    "url": "https://karaopa2.ru/karaoke/performer/gosti_iz_buduschego/zimavserdce.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s182",
    "title": "Коньки",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/konki.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s183",
    "title": "Песенка Лешего",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenkaleshego.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s185",
    "title": "Новогодние Снежинки",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/novogodniesnezhinki.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s186",
    "title": "Письмо Санте",
    "artist": "Люся Чеботина",
    "url": "https://karaopa2.ru/karaoke/performer/lyusya_chebotina/pismosante.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s187",
    "title": "Новый год",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/noviygod.html",
    "kind": "Новогодние",
    "categories": [
      "newyear",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "agutin"
    ]
  },
  {
    "id": "s188",
    "title": "На белом покрывале января",
    "artist": "Kamazz",
    "url": "https://karaopa2.ru/karaoke/performer/kamazz/nabelompokrivaleyanvarya.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s190",
    "title": "Новый год, Новый год!",
    "artist": "Песни из Мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/noviygod.html",
    "kind": "Детские и семейные",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s193",
    "title": "Снегопад",
    "artist": "УмаТурман",
    "url": "https://karaopa2.ru/karaoke/performer/umaturman/snegopad.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s195",
    "title": "Цветы под снегом",
    "artist": "Лариса Долина",
    "url": "https://karaopa2.ru/karaoke/performer/larisa_dolina/cvetipodsnegom.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s197",
    "title": "Ой, мороз",
    "artist": "Хабиб",
    "url": "https://karaopa2.ru/karaoke/performer/habib/oymoroz.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s203",
    "title": "Рождественская ночь",
    "artist": "Денис Клявер",
    "url": "https://karaopa2.ru/karaoke/performer/denis_klyaver/rozhdestvenskayanoch.html",
    "kind": "Рождественские",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s205",
    "title": "С новым годом",
    "artist": "Dabro",
    "url": "https://karaopa2.ru/karaoke/performer/dabro/snovimgodom.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s206",
    "title": "Падал снег",
    "artist": "Михаил Круг",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_krug/padalsneg.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s211",
    "title": "Под новый год",
    "artist": "Betsy",
    "url": "https://karaopa2.ru/karaoke/performer/betsy/podnoviygod.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s212",
    "title": "Новогодняя",
    "artist": "GAYAZOV$ BROTHER$",
    "url": "https://karaopa2.ru/karaoke/performer/gayazovsbrothers/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s213",
    "title": "Кабы не было зимы",
    "artist": "Валентина Толкунова",
    "url": "https://karaopa2.ru/karaoke/performer/valentina_tolkunova/kabinebilozimi.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s217",
    "title": "В лесу родилась ёлочка",
    "artist": "Балаган Лимитед",
    "url": "https://karaopa2.ru/karaoke/performer/balagan_limited/vlesurodilaselochka.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s218",
    "title": "Расскажи снегурочка",
    "artist": "Гарик Кричевский",
    "url": "https://karaopa2.ru/karaoke/performer/garik_krichevskiy/rasskazhisnegurochka.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s219",
    "title": "Новогодний снежный бит",
    "artist": "Demented Reason",
    "url": "https://karaopa2.ru/karaoke/performer/demented_reason/novogdniysnezhniybit.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s220",
    "title": "Тысячи зим",
    "artist": "Клава Кока",
    "url": "https://karaopa2.ru/karaoke/performer/klava_koka/tysyachi_zim.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s221",
    "title": "Стоп, Снег",
    "artist": "Валерий Леонтьев",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_leontev/stopsneg.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s222",
    "title": "Новогодняя",
    "artist": "Трофим",
    "url": "https://karaopa2.ru/karaoke/performer/trofim/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s223",
    "title": "Новогодние сны",
    "artist": "Ирина Аллегрова",
    "url": "https://karaopa2.ru/karaoke/performer/irina_allegrova/novogodnie_sny.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s224",
    "title": "Стужа-Зима",
    "artist": "Александр Дюмин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_dyumin/stuzha-zima.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s225",
    "title": "Новогодние сны",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/novogodniesni.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s226",
    "title": "Три белых коня",
    "artist": "Иванушки International",
    "url": "https://karaopa2.ru/karaoke/performer/ivanushki_international/tri_belyh_konya.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s227",
    "title": "Новогодняя",
    "artist": "Миша Марвин",
    "url": "https://karaopa2.ru/karaoke/performer/misha_marvin/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s228",
    "title": "Кабы не было зимы",
    "artist": "Дора",
    "url": "https://karaopa2.ru/karaoke/performer/dora/kaby_ne_bylo_zimy.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s229",
    "title": "Снег идёт",
    "artist": "IOWA",
    "url": "https://karaopa2.ru/karaoke/performer/iowa/sneg_idyot.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s230",
    "title": "Снег Идёт",
    "artist": "Иосиф Кобзон",
    "url": "https://karaopa2.ru/karaoke/performer/iosif_kobzon/sneg_idyot.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s231",
    "title": "Снегопад",
    "artist": "Максим Леонидов",
    "url": "https://karaopa2.ru/karaoke/performer/maksim_leonidov/snegopad.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s232",
    "title": "Снежинки",
    "artist": "Bahh Tee",
    "url": "https://karaopa2.ru/karaoke/performer/bahh_tee/snezhinki.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s233",
    "title": "Снегом",
    "artist": "Катя Чехова",
    "url": "https://karaopa2.ru/karaoke/performer/katya_chehova/snegom.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s234",
    "title": "С Новым Годом, Люди",
    "artist": "Корни",
    "url": "https://karaopa2.ru/karaoke/performer/korni/s_novym_godom__lyudi.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s235",
    "title": "Песенка Деда Мороза",
    "artist": "Саша Project",
    "url": "https://karaopa2.ru/karaoke/performer/sasha_project/pesenka_deda_moroza.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s236",
    "title": "Снег Летит",
    "artist": "Влад Топалов",
    "url": "https://karaopa2.ru/karaoke/performer/vlad_topalov/sneg_letit.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s237",
    "title": "Новый Год",
    "artist": "Влад Топалов",
    "url": "https://karaopa2.ru/karaoke/performer/vlad_topalov/novy_god.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s238",
    "title": "Просто Кончилась Зима",
    "artist": "Алёна Свиридова",
    "url": "https://karaopa2.ru/karaoke/performer/alyona_sviridova/prosto_konchilas_zima.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s239",
    "title": "Звенит январская вьюга",
    "artist": "Квашеная (Саша Капустина)",
    "url": "https://karaopa2.ru/karaoke/performer/kvashenaya_sasha_kapustina/zvenit_yanvarskaya_vyuga.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s240",
    "title": "Звенит январская вьюга",
    "artist": "Гузель Хасанова",
    "url": "https://karaopa2.ru/karaoke/performer/guzel_hasanova/zvenit_yanvarskaya_vyuga.html",
    "kind": "Зимние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s241",
    "title": "Новогодняя",
    "artist": "Александр Маршал",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_marshal/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "s242",
    "title": "Новогодняя",
    "artist": "Марина Федункив",
    "url": "https://karaopa2.ru/karaoke/performer/marina_fedunkiv/novogodnyaya.html",
    "kind": "Новогодние",
    "categories": [
      "newyear"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c2",
    "title": "Голубой вагон",
    "artist": "Песни из мультфильмов",
    "movie": "Шапокляк",
    "aliases": "Голубой Вагон",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/goluboy_vagon.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c4",
    "title": "Улыбка",
    "artist": "Песни из мультфильмов",
    "movie": "Крошка Енот",
    "aliases": "Улыбка",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/ulybka.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c5",
    "title": "Песенка Мамонтёнка",
    "artist": "Песни из мультфильмов",
    "movie": "Мама для мамонтёнка",
    "aliases": "Песенка Мамонтенка",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenka_mamontenka.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c6",
    "title": "Говорят, мы бяки-буки",
    "artist": "Песни из мультфильмов",
    "movie": "Бременские музыканты",
    "aliases": "Говорят Мы Бяки-буки (Бременские Музыканты)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/govoryat_my_byaki-buki_bremenskie_muzykanty.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c8",
    "title": "Песенка крокодила Гены",
    "artist": "Песни из мультфильмов",
    "movie": "Чебурашка",
    "aliases": "Песня Крокодила Гены",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnya_krokodila_geny.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c10",
    "title": "Антошка",
    "artist": "Песни из мультфильмов",
    "movie": "Весёлая карусель",
    "aliases": "Антошка",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/antoshka.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c11",
    "title": "Чунга-Чанга",
    "artist": "Песни из мультфильмов",
    "movie": "Катерок",
    "aliases": "Чунга-Чанга",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/chunga-changa.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c12",
    "title": "Дружба крепкая",
    "artist": "Песни из мультфильмов",
    "movie": "Тимка и Димка",
    "aliases": "Дружба Крепкая",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/druzhba_krepkaya.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c13",
    "title": "В синем море, в белой пене",
    "artist": "Песни из мультфильмов",
    "movie": "В синем море, в белой пене…",
    "aliases": "В Синем Море В Белой Пене",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/v_sinem_more_v_beloy_pene.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c20",
    "title": "А мне летать охота",
    "artist": "Песни из мультфильмов",
    "movie": "Летучий корабль",
    "aliases": "А Мне Летать Охота",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/a_mne_letat_ohota.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c22",
    "title": "Песня охраны",
    "artist": "Песни из мультфильмов",
    "movie": "Бременские музыканты",
    "aliases": "Песня Охраны (Бременские Музыканты)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnya_ohrany_bremenskie_muzykanty.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c23",
    "title": "Песня царевны Забавы",
    "artist": "Песни из мультфильмов",
    "movie": "Летучий корабль",
    "aliases": "Песня Царевны Забавы",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnya_tsarevny_zabavy.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c24",
    "title": "А может быть, ворона",
    "artist": "Песни из мультфильмов",
    "movie": "Пластилиновая ворона",
    "aliases": "А Может Быть Ворона",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/a_mozhet_byt_vorona.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c25",
    "title": "Паровозик из Ромашкова",
    "artist": "Песни из мультфильмов",
    "movie": "Паровозик из Ромашкова",
    "aliases": "Паровозик Из Ромашково",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/parovozik_iz_romashkovo.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c26",
    "title": "Серенада Трубадура (Луч солнца золотого)",
    "artist": "Песни из мультфильмов",
    "movie": "По следам бременских музыкантов",
    "aliases": "Серенада Трубадура (Бременские Музыканты)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/serenada_trubadura_bremenskie_muzykanty.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c27",
    "title": "Неприятность эту мы переживём",
    "artist": "Песни из мультфильмов",
    "movie": "Лето кота Леопольда",
    "aliases": "Неприятность Эту (Приключения Кота Леопольда)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/nepriyatnost_etu_priklyucheniya_kota_leopolda.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c31",
    "title": "Песня мамы Козы",
    "artist": "Песни из мультфильмов",
    "movie": "Волк и семеро козлят на новый лад",
    "aliases": "Песня Мамы Козы",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnya_mamy_kozy.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c32",
    "title": "Кручу педали",
    "artist": "Песни из мультфильмов",
    "movie": "Прогулка кота Леопольда",
    "aliases": "Кручу Педали (Приключения Кота Леопольда)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/kruchu_pedali_priklyucheniya_kota_leopolda.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c39",
    "title": "Дуэт короля и принцессы",
    "artist": "Песни из мультфильмов",
    "movie": "По следам бременских музыкантов",
    "aliases": "Дуэт Короля И Принцессы (Бременские Музыканты)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/duet_korolya_i_printsessy_bremenskie_muzykanty.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c54",
    "title": "Облака — белогривые лошадки",
    "artist": "Песни из мультфильмов",
    "movie": "Трям! Здравствуйте!",
    "aliases": "Облака ",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/oblaka.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c58",
    "title": "Песенка гангстеров (Мы бандито)",
    "artist": "Песни из мультфильмов",
    "movie": "Приключения капитана Врунгеля",
    "aliases": "Песенка Гангстеров (Мы Бандито)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenkagansterov.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c59",
    "title": "В траве сидел кузнечик",
    "artist": "Песни из мультфильмов",
    "movie": "Приключения Незнайки и его друзей",
    "aliases": "В траве сидел кузнечик",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/vtravesidelkuznechik.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c61",
    "title": "Ничего на свете лучше нету",
    "artist": "Песни из мультфильмов",
    "movie": "Бременские музыканты",
    "aliases": "ничего на свете лучше нету ",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/nichegonasveteluchshenet.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c73",
    "title": "Песенка Львёнка и Черепахи",
    "artist": "Песни из мультфильмов",
    "movie": "Как Львёнок и Черепаха пели песню",
    "aliases": "Песенка Львенка и Черепахи",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenkalvenkaicherepahi.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c75",
    "title": "Песня про мальчика Бобби",
    "artist": "Песни из мультфильмов",
    "movie": "Остров сокровищ",
    "aliases": "Песня про мальчика Бобби",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnyapromalchikabobby.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c76",
    "title": "Песня Вани-печника",
    "artist": "Песни из мультфильмов",
    "movie": "Летучий корабль",
    "aliases": "Песня Вани Печника",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnyavanipechnika.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c78",
    "title": "Хоть поверьте, хоть проверьте",
    "artist": "Песни из мультфильмов",
    "movie": "Золушка",
    "aliases": "Хоть поверьте хоть проверьте",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/hotpovertehotproverte.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c81",
    "title": "Песенка о лете",
    "artist": "Песни из мультфильмов",
    "movie": "Дед Мороз и лето",
    "aliases": "Песенка о лете",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenkaolete.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c82",
    "title": "В каждом маленьком ребёнке",
    "artist": "Песни из мультфильмов",
    "movie": "Осторожно, обезьянки!",
    "aliases": "В каждом маленьком ребенке",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/vkazhdommalemkomrebenke.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c83",
    "title": "Такая-сякая",
    "artist": "Песни из мультфильмов",
    "movie": "Бременские музыканты",
    "aliases": "Такая-сякая",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/takayasakaya.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c84",
    "title": "Частушки Бабок-Ёжек",
    "artist": "Песни из мультфильмов",
    "movie": "Летучий корабль",
    "aliases": "Частушки Бабок-Ёжек",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/chastushkibabokezhek.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c89",
    "title": "Дуэт принцессы и Трубадура",
    "artist": "Песни из мультфильмов",
    "movie": "Бременские музыканты",
    "aliases": "Дуэт Принцессы и Трубадура",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/duettrubaduraiprincessi.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c90",
    "title": "Песенка про пони",
    "artist": "Песни из мультфильмов",
    "movie": "Пони бегает по кругу",
    "aliases": "Песенка Про Пони",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenka_pro_poni.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c91",
    "title": "Живи в волшебном ящичке",
    "artist": "Песни из мультфильмов",
    "movie": "Разлучённые",
    "aliases": "Живи в волшебном ящичке",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/zhivivvolshebnomyashichke.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c93",
    "title": "Песенка Водяного",
    "artist": "Песни из мультфильмов",
    "movie": "Летучий корабль",
    "aliases": "Песенка Водяного",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenkavodyanogo.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c94",
    "title": "Песня рыбы-пилы",
    "artist": "Песни из мультфильмов",
    "movie": "Голубой щенок",
    "aliases": "Песня рыбы пилы",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnyaribipili.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c95",
    "title": "Пусть нету ни кола и ни двора",
    "artist": "Песни из мультфильмов",
    "movie": "По следам бременских музыкантов",
    "aliases": "Пусть Нету Ни Кола И Не Двора",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pust_netu_ni_kola_i_ne_dvora.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c97",
    "title": "Песенка о вреде курения",
    "artist": "Песни из мультфильмов",
    "movie": "Остров сокровищ",
    "aliases": "Песенка о вреде курения",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenka_o_vrede_kureniya.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c98",
    "title": "Человек собаке друг",
    "artist": "Песни из мультфильмов",
    "movie": "Бобик в гостях у Барбоса",
    "aliases": "Человек Собаке Друг",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/chelovek_sobake_drug.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c99",
    "title": "В жизни как в кино",
    "artist": "Песни из мультфильмов",
    "movie": "Остров сокровищ",
    "aliases": "В жизни как в кино",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/vzhiznikakvkino.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c100",
    "title": "Маны, маны",
    "artist": "Песни из мультфильмов",
    "movie": "Приключения капитана Врунгеля",
    "aliases": "Маны, Маны",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/manimani.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c101",
    "title": "Ах, если бы сбылась моя мечта",
    "artist": "Песни из мультфильмов",
    "movie": "Летучий корабль",
    "aliases": "Ах если бы сбылась моя мечта",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/ah_esli_by_sbylas_moya_mechta.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c103",
    "title": "Притворная песня Трубадура",
    "artist": "Песни из мультфильмов",
    "movie": "По следам бременских музыкантов",
    "aliases": "Притворная Песня Трубадура",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pritvornaya_pesnya_trubadura.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c105",
    "title": "Рыжий, рыжий, конопатый",
    "artist": "Песни из мультфильмов",
    "movie": "Весёлая карусель",
    "aliases": "Рыжий, рыжий, конопатый",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/ryzhiy__ryzhiy__konopaty.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c107",
    "title": "Песня Чёрного Кота и Пирата",
    "artist": "Песни из мультфильмов",
    "movie": "Голубой щенок",
    "aliases": "Песня Чёрного Кота И Пирата",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnyachernogokotaipirata.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c108",
    "title": "Мы к вам заехали на час",
    "artist": "Песни из мультфильмов",
    "movie": "По следам бременских музыкантов",
    "aliases": "Мы К Вам Заехали На Час",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/mikvamzaehalinachas.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c109",
    "title": "Не ходите, дети, в Африку гулять",
    "artist": "Песни из мультфильмов",
    "movie": "Доктор Айболит",
    "aliases": "Не ходите дети в Африку гулять",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/ne_hodite_deti_v_afriku_gulyat.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c110",
    "title": "Какой чудесный день",
    "artist": "Песни из мультфильмов",
    "movie": "Песенка мышонка",
    "aliases": "Какой чудесный день",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/kakoy_chudesny_den.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c111",
    "title": "Дельфины",
    "artist": "Песни из мультфильмов",
    "movie": "В порту",
    "aliases": "Дельфины",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/delfini.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c113",
    "title": "Гавайские частушки",
    "artist": "Песни из мультфильмов",
    "movie": "Приключения капитана Врунгеля",
    "aliases": "Гавайские Частушки",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/gavayskie_chastushki.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c115",
    "title": "Не волнуйтесь понапрасну",
    "artist": "Песни из мультфильмов",
    "movie": "Бюро находок",
    "aliases": "Не Волнуйтесь Понапрасну",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/nevolnuytesponaprasnu.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c116",
    "title": "Если я чешу в затылке",
    "artist": "Песни из мультфильмов",
    "movie": "Винни-Пух",
    "aliases": "Если я чешу в затылке",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/esli_ya_cheshu_v_zatylke.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c118",
    "title": "Как вы яхту назовёте",
    "artist": "Песни из мультфильмов",
    "movie": "Приключения капитана Врунгеля",
    "aliases": "Как вы яхту назовете",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/kakviyahtunazovete.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c119",
    "title": "Собака бывает кусачей",
    "artist": "Песни из мультфильмов",
    "movie": "Большой секрет для маленькой компании",
    "aliases": "Собака Бывает Кусачей",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/sobaka_byvaet_kusachey.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c120",
    "title": "Летающие лошади",
    "artist": "Песни из мультфильмов",
    "movie": "Большой секрет для маленькой компании",
    "aliases": "Летающие Лошади",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/letaushieloshadi.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c122",
    "title": "В коробке с карандашами",
    "artist": "Песни из мультфильмов",
    "movie": "Коробка с карандашами",
    "aliases": "В Коробке С Карандашами",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/v_korobke_s_karandashami.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c124",
    "title": "Зову мышей на бой",
    "artist": "Песни из мультфильмов",
    "movie": "Месть кота Леопольда",
    "aliases": "Зову мышей на бой",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/zovumisheynaboy.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c127",
    "title": "Песня Доброго Моряка",
    "artist": "Песни из мультфильмов",
    "movie": "Голубой щенок",
    "aliases": "Песня Доброго Моряка",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnya_dobrogo_moryaka.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "c129",
    "title": "Хорошо бродить по свету",
    "artist": "Песни из мультфильмов",
    "movie": "Приключения поросёнка Фунтика",
    "aliases": "Хорошо бродить по свету",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/horosho_brodit_po_svetu.html",
    "kind": "Детские и семейные",
    "categories": [
      "cartoons"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-1",
    "title": "Прекрасное далёко",
    "movie": "Гостья из будущего",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Прекрасное Далеко",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/prekrasnoe_daleko.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-2",
    "title": "Крылатые качели",
    "movie": "Приключения Электроника",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Крылатые Качели (Приключения Электроника)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/krylatye_kacheli_priklyucheniya_elektronika.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-3",
    "title": "Ланфрен-ланфра",
    "movie": "Гардемарины, вперёд!",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Ланфрен Ланфра (Гардемарины Вперед)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/lanfren_lanfra_gardemariny_vpered.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-4",
    "title": "А напоследок я скажу",
    "movie": "Жестокий романс",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "А Напоследок Я Скажу",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/a_naposledok_ya_skazhu.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-5",
    "title": "Позвони мне, позвони",
    "movie": "Карнавал",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Позвони Мне Позвони",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pozvoni_mne_pozvoni.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-6",
    "title": "Когда весна придёт, не знаю",
    "movie": "Весна на Заречной улице",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Когда Весна Придет Не Знаю",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/kogda_vesna_pridet_ne_znayu.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-9",
    "title": "Старый клён",
    "movie": "Девчата",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Старый Клен",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/stary_klen.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-10",
    "title": "Любовь — волшебная страна",
    "movie": "Жестокий романс",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Любовь Волшебная Страна",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/lyubov_volshebnaya_strana.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-12",
    "title": "Мохнатый шмель",
    "movie": "Жестокий романс",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Мохнатый Шмель",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/mohnaty_shmel.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-13",
    "title": "Каким ты был",
    "movie": "Кубанские казаки",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Каким Ты Был",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/kakim_ty_byl.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-14",
    "title": "Разлука",
    "movie": "Гардемарины, вперёд!",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Разлука",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/razluka.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-16",
    "title": "Буратино",
    "movie": "Приключения Буратино",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Буратино (Приключения Буратино)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/buratino_priklyucheniya_buratino.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-17",
    "title": "Остров невезения",
    "movie": "Бриллиантовая рука",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Остров Невезения",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/ostrov_nevezeniya.html",
    "kind": "Песни из кино",
    "categories": [
      "films",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "zatsepin"
    ]
  },
  {
    "id": "f-film-18",
    "title": "Бьют часы на старой башне",
    "movie": "Приключения Электроника",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Бьют Часы На Старой Башне (Приключения Электроника)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/byut_chasy_na_staroy_bashne_priklyucheniya_elektro.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-20",
    "title": "Чёрное и белое",
    "movie": "Большая перемена",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Черное И Белое",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/chernoe_i_beloe.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-21",
    "title": "Песня мушкетёров (Пора-пора-порадуемся)",
    "movie": "Д’Артаньян и три мушкетёра",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Песня Трех Мушкетеров",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pesnya_treh_mushketerov.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-22",
    "title": "Ах, этот вечер",
    "movie": "Ах, водевиль, водевиль…",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Ах Этот Вечер",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/ah_etot_vecher.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-23",
    "title": "Тридцать три коровы",
    "movie": "Мэри Поппинс, до свидания",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "33 Коровы",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/33_korovy.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-24",
    "title": "Песня о далёкой Родине",
    "movie": "Семнадцать мгновений весны",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Песня О Далекой Родине (17 Мгновений Весны)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pesnya_o_dalekoy_rodine_17_mgnoveniy_vesny.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-25",
    "title": "Я в весеннем лесу",
    "movie": "Ошибка резидента",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Я В Весеннем Лесу",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/ya_v_vesennem_lesu.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-26",
    "title": "Постой, паровоз",
    "movie": "Операция «Ы» и другие приключения Шурика",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Постой Паровоз",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/postoy_parovoz.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-27",
    "title": "Генералам двенадцатого года",
    "movie": "О бедном гусаре замолвите слово",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Генералам Двенадцатого Года",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/generalam_dvenadtsatogo_goda.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-29",
    "title": "Под лаской плюшевого пледа",
    "movie": "Жестокий романс",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Под Лаской Плюшевого Пледа",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pod_laskoy_plyushevogo_pleda.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-30",
    "title": "Не вешать нос, гардемарины!",
    "movie": "Гардемарины, вперёд!",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Не Вешать Нос Гардемарины",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/ne_veshat_nos_gardemariny.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-31",
    "title": "Старый рояль",
    "movie": "Мы из джаза",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Старый Рояль",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/stary_royal.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-32",
    "title": "Последняя поэма",
    "movie": "Вам и не снилось…",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Последняя Поэма (Из к\\ф Вам И Не Снилось)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/poslednyaya_poema_iz_kf_vam_i_ne_snilos.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-33",
    "title": "Вместе весело шагать",
    "movie": "И снова Анискин",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Вместе Весело Шагать По Просторам",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/vmeste_veselo_shagat_po_prostoram.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-35",
    "title": "Ветер перемен",
    "movie": "Мэри Поппинс, до свидания",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Ветер Перемен",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/veter_peremen.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-38",
    "title": "До чего дошёл прогресс",
    "movie": "Приключения Электроника",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "До Чего Дошел Прогресс",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/do_chego_doshel_progress.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-39",
    "title": "Неаполитанская песенка (Уно моменто)",
    "movie": "Формула любви",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Неополитанская Песенка (Уно-Моменто)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/neopolitanskaya_pesenka_uno-momento.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-42",
    "title": "О, пощади",
    "movie": "Эскадрон гусар летучих",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "О Пощади (из к/ф \"Эскадрон Гусар Летучих\")",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/o_poschadi_iz_kf_eskadron_gusar_letuchih.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-43",
    "title": "Не пробуждай воспоминаний",
    "movie": "Эскадрон гусар летучих",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Не Пробуждай Воспоминаний",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/ne_probuzhday_vospominaniy.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-44",
    "title": "От героев былых времён",
    "movie": "Офицеры",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "От Героев Былых Времен",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/ot_geroev_bylyh_vremen.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-45",
    "title": "Мне нравится",
    "movie": "Ирония судьбы, или С лёгким паром!",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Мне Нравится",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/mne_nravitsya.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-48",
    "title": "Непогода",
    "movie": "Мэри Поппинс, до свидания",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Непогода",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/nepogoda.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-49",
    "title": "Волшебный луч",
    "movie": "Человек с бульвара Капуцинов",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Волшебный Луч (Человек С Бульвара Капуцинов)",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/volshebny_luch_chelovek_s_bulvara_kaputsinov.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-50",
    "title": "Разговор со счастьем",
    "movie": "Иван Васильевич меняет профессию",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Разговор Со Счастьем",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/razgovor_so_schastem.html",
    "kind": "Песни из кино",
    "categories": [
      "films",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "zatsepin"
    ]
  },
  {
    "id": "f-film-51",
    "title": "Проснись и пой",
    "movie": "Джентльмены удачи",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Проснись И Пой",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/prosnis_i_poy.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-52",
    "title": "Песня красноармейца",
    "movie": "Кортик",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Песня Красноармейца",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pesnya_krasnoarmeytsa.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-53",
    "title": "Я шагаю по Москве",
    "movie": "Я шагаю по Москве",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Я Шагаю По Москве",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/ya_shagayu_po_moskve.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-57",
    "title": "Песенка Красной Шапочки",
    "movie": "Про Красную Шапочку",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Про Красную Шапочку ",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pro_krasnuyu_shapochku_.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-60",
    "title": "Кап-кап-кап (Маруся)",
    "movie": "Иван Васильевич меняет профессию",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Кап-Кап-Кап",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/kap-kap-kap.html",
    "kind": "Песни из кино",
    "categories": [
      "films",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "zatsepin"
    ]
  },
  {
    "id": "f-film-61",
    "title": "Если у вас нету тёти",
    "movie": "Ирония судьбы, или С лёгким паром!",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Если У Вас Нету Тёти",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/esli_u_vas_netu_tyoti.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-67",
    "title": "Ваше благородие",
    "movie": "Белое солнце пустыни",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Ваше Благородие",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/vasheblagorodie.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-74",
    "title": "Песня про зайцев",
    "movie": "Бриллиантовая рука",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Песня Про Зайцев",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pesnya_pro_zaytsev.html",
    "kind": "Песни из кино",
    "categories": [
      "films",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "zatsepin"
    ]
  },
  {
    "id": "f-film-75",
    "title": "Ищу тебя",
    "movie": "31 июня",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Ищу тебя",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/ishutebya.html",
    "kind": "Песни из кино",
    "categories": [
      "films",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "zatsepin"
    ]
  },
  {
    "id": "f-film-76",
    "title": "Гадалка",
    "movie": "Ах, водевиль, водевиль…",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Гадалка",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/gadalka.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-78",
    "title": "Если б я был султан",
    "movie": "Кавказская пленница, или Новые приключения Шурика",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Если б я был султан",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/eslibyabilsultan.html",
    "kind": "Песни из кино",
    "categories": [
      "films",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "zatsepin"
    ]
  },
  {
    "id": "f-film-79",
    "title": "Первым делом самолёты",
    "movie": "Небесный тихоход",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Первым делом самолеты",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pervimdelomsamoleti.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-80",
    "title": "Песенка про водевиль",
    "movie": "Ах, водевиль, водевиль…",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Песенка про водевиль",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/pesenkaprovodevil.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-81",
    "title": "Наша служба и опасна и трудна",
    "movie": "Следствие ведут ЗнаТоКи",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Наша служба и опасна и трудна",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_kinofilmov/nashasluzhbaiopasnaitrudna.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-extra-0",
    "title": "Песенка о хорошем настроении",
    "movie": "Карнавальная ночь",
    "screenType": "film",
    "artist": "Людмила Гурченко",
    "aliases": "Песенка О Хорошем Настроении",
    "url": "https://karaopa2.ru/karaoke/performer/lyudmila_gurchenko/pesenka_o_horoshem_nastroenii.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-extra-8",
    "title": "С чего начинается Родина",
    "movie": "Щит и меч",
    "screenType": "film",
    "artist": "Марк Бернес",
    "aliases": "С чего начинается Родина?",
    "url": "https://karaopa2.ru/karaoke/performer/mark_bernes/schegonachinaetsyarodina.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-extra-9",
    "title": "Любимый город",
    "movie": "Истребители",
    "screenType": "film",
    "artist": "Марк Бернес",
    "aliases": "Любимый город",
    "url": "https://karaopa2.ru/karaoke/performer/mark_bernes/lubimiygorod.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-extra-10",
    "title": "Лесной олень",
    "movie": "Ох уж эта Настя!",
    "screenType": "film",
    "artist": "Аида Ведищева",
    "aliases": "Лесной Олень",
    "url": "https://karaopa2.ru/karaoke/performer/aida_vedischeva/lesnoy_olen.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-film-extra-13",
    "title": "Есть только миг",
    "movie": "Земля Санникова",
    "screenType": "film",
    "artist": "Олег Анофриев",
    "aliases": "Есть Только Миг (из Кинофильма Высота)",
    "url": "https://karaopa2.ru/karaoke/performer/oleg_anofriev/est_tolko_mig_iz_kinofilma_vysota.html",
    "kind": "Песни из кино",
    "categories": [
      "films",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "zatsepin"
    ]
  },
  {
    "id": "f-ussr-61",
    "title": "Пора в путь-дорогу",
    "movie": "Небесный тихоход",
    "screenType": "film",
    "artist": "Военные Песни",
    "aliases": "Пора В Путь Дорогу (к/ф Небесный Тихоход)  ",
    "url": "https://karaopa2.ru/karaoke/performer/voennye_pesni/pora_v_put_dorogu_kf_nebesny_tihohod__.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-ussr-87",
    "title": "Подмосковные вечера",
    "movie": "В дни Спартакиады",
    "screenType": "film",
    "artist": "Владимир Трошин",
    "aliases": "Подмосковные Вечера",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_troshin/podmoskovnye_vechera.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-ussr-240",
    "title": "Хорошие девчата",
    "movie": "Девчата",
    "screenType": "film",
    "artist": "Марина Девятова",
    "aliases": "Хорошие Девчата",
    "url": "https://karaopa2.ru/karaoke/performer/marina_devyatova/horoshie_devchata.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-cartoon-60",
    "title": "Ты, да я, да мы с тобой",
    "movie": "Тихие троечники",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Ты, Да Я, Да Мы С Тобой",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/tidayadamistoboy.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-cartoon-86",
    "title": "Песня лисы Алисы и кота Базилио",
    "movie": "Приключения Буратино",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Песня лисы Алисы и кота Базилио",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesnyalisi.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-cartoon-87",
    "title": "Песенка Красной Шапочки",
    "movie": "Про Красную Шапочку",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Песенка Красной Шапочки",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenkakrasnoyshapochki.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-cartoon-92",
    "title": "Дорога добра",
    "movie": "Приключения маленького Мука",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Дорога Добра",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/dorogadobra.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "f-cartoon-130",
    "title": "Лев и брадобрей",
    "movie": "Мэри Поппинс, до свидания",
    "screenType": "film",
    "artist": "Песни из кинофильмов",
    "aliases": "Лев и Брадобрей",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/lev_i_bradobrey.html",
    "kind": "Песни из кино",
    "categories": [
      "films"
    ],
    "source": "Караопа2"
  },
  {
    "id": "he-HRQ5MzoClNc",
    "title": "אני ואתה",
    "artist": "אריק איינשטיין",
    "aliases": "Арик Айнштейн",
    "url": "https://www.youtube.com/watch?v=HRQ5MzoClNc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אני ואתה - אריק איינשטיין - שרים קריוקי"
  },
  {
    "id": "he-jtxaJ7LQpGo",
    "title": "עוף גוזל",
    "artist": "אריק איינשטיין",
    "aliases": "Арик Айнштейн",
    "url": "https://www.youtube.com/watch?v=jtxaJ7LQpGo",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עוף גוזל - אריק איינשטיין - קריוקי"
  },
  {
    "id": "he-0PJrMy1S9PI",
    "title": "גיטרה וכינור",
    "artist": "אריק איינשטיין",
    "aliases": "Арик Айнштейн",
    "url": "https://www.youtube.com/watch?v=0PJrMy1S9PI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "גיטרה וכינור - אריק איינשטיין - קריוקי"
  },
  {
    "id": "he-0_RZRp7hYrs",
    "title": "יש בי אהבה",
    "artist": "אריק איינשטיין",
    "aliases": "Арик Айнштейн",
    "url": "https://www.youtube.com/watch?v=0_RZRp7hYrs",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "יש בי אהבה - אריק איינשטיין (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-M0Ju2_u1GMM",
    "title": "פסק זמן",
    "artist": "אריק איינשטיין",
    "aliases": "Арик Айнштейн",
    "url": "https://www.youtube.com/watch?v=M0Ju2_u1GMM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "פסק זמן - אריק איינשטיין - קריוקי"
  },
  {
    "id": "he-m8P8heL09q8",
    "title": "אהבה ממבט ראשון",
    "artist": "אריק איינשטיין",
    "aliases": "Арик Айнштейн",
    "url": "https://www.youtube.com/watch?v=m8P8heL09q8",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אריק איינשטיין - אהבה ממבט ראשון קריוקי - פלייבק הפקות"
  },
  {
    "id": "he-Ii6xGFK_uaQ",
    "title": "שבת בבוקר",
    "artist": "אריק איינשטיין",
    "aliases": "Арик Айнштейн",
    "url": "https://www.youtube.com/watch?v=Ii6xGFK_uaQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שבת בבוקר - אריק איינשטיין - קריוקי"
  },
  {
    "id": "he-btXbaVACNtE",
    "title": "היא לא יודעת מה עובר עליי",
    "artist": "שלמה ארצי",
    "aliases": "Шломо Арци",
    "url": "https://www.youtube.com/watch?v=btXbaVACNtE",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "היא לא יודעת מה עובר עליי - שלמה ארצי - שרים קריוקי"
  },
  {
    "id": "he-ue7pBlQ3RW4",
    "title": "תגידי",
    "artist": "שלמה ארצי",
    "aliases": "Шломо Арци",
    "url": "https://www.youtube.com/watch?v=ue7pBlQ3RW4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שלמה ארצי – תגידי (קריוקי פסנתר)"
  },
  {
    "id": "he-_y8rZYDvoaI",
    "title": "ירח",
    "artist": "שלמה ארצי",
    "aliases": "Шломо Арци",
    "url": "https://www.youtube.com/watch?v=_y8rZYDvoaI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שלמה ארצי - ירח (קריוקי פסנתר)"
  },
  {
    "id": "he-ZsYma0YRcxg",
    "title": "האהבה הישנה",
    "artist": "שלמה ארצי",
    "aliases": "Шломо Арци",
    "url": "https://www.youtube.com/watch?v=ZsYma0YRcxg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שלמה ארצי – האהבה הישנה (קריוקי פסנתר)"
  },
  {
    "id": "he-2QnMZKaCBds",
    "title": "תתארו לכם",
    "artist": "שלמה ארצי",
    "aliases": "Шломо Арци",
    "url": "https://www.youtube.com/watch?v=2QnMZKaCBds",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שלמה ארצי – תתארו לכם (קריוקי פסנתר)"
  },
  {
    "id": "he-xOlmUyRQwAQ",
    "title": "כמו אז",
    "artist": "שלמה ארצי",
    "aliases": "Шломо Арци",
    "url": "https://www.youtube.com/watch?v=xOlmUyRQwAQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "כמו אז - שלמה ארצי - פלייבק קריוקי"
  },
  {
    "id": "he-7ITV5LSy3KM",
    "title": "יו יה",
    "artist": "כוורת",
    "aliases": "Каверет",
    "url": "https://www.youtube.com/watch?v=7ITV5LSy3KM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "יו יה - כוורת - קריוקי"
  },
  {
    "id": "he-X5428ievZIU",
    "title": "המגפיים של ברוך",
    "artist": "כוורת",
    "aliases": "Каверет",
    "url": "https://www.youtube.com/watch?v=X5428ievZIU",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "המגפיים של ברוך - כוורת - קריוקי"
  },
  {
    "id": "he-fvCaCb7n52A",
    "title": "היא כל כך יפה",
    "artist": "כוורת",
    "aliases": "Каверет",
    "url": "https://www.youtube.com/watch?v=fvCaCb7n52A",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "כוורת - היא כל כך יפה - קריוקי (גיטריוקי)"
  },
  {
    "id": "he-W6bX_JNpITE",
    "title": "הכוכבים דולקים על אש קטנה",
    "artist": "משינה",
    "aliases": "Машина Мэшина",
    "url": "https://www.youtube.com/watch?v=W6bX_JNpITE",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "משינה הכוכבים דולקים על אש קטנה קריוקי"
  },
  {
    "id": "he-T2nQAIeyqVI",
    "title": "אחכה לך בשדות",
    "artist": "משינה",
    "aliases": "Машина Мэшина",
    "url": "https://www.youtube.com/watch?v=T2nQAIeyqVI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אחכה לך בשדות - משינה - קריוקי"
  },
  {
    "id": "he-uEqGTN_eNQ4",
    "title": "אנחנו שניים",
    "artist": "משינה",
    "aliases": "Машина Мэшина",
    "url": "https://www.youtube.com/watch?v=uEqGTN_eNQ4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "משינה - אנחנו שניים קריוקי"
  },
  {
    "id": "he-gV7AJ5t1eBU",
    "title": "רני בפריז",
    "artist": "משינה",
    "aliases": "Машина Мэшина",
    "url": "https://www.youtube.com/watch?v=gV7AJ5t1eBU",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "רני בפריז - משינה - שרים קריוקי"
  },
  {
    "id": "he-0Ud0q_2s51I",
    "title": "אהובתי",
    "artist": "משינה",
    "aliases": "Машина Мэшина",
    "url": "https://www.youtube.com/watch?v=0Ud0q_2s51I",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "משינה - אהובתי (קריוקי ללא מילים)"
  },
  {
    "id": "he-gs0ddbrYDq4",
    "title": "תחזור תחזור",
    "artist": "משינה",
    "aliases": "Машина Мэшина",
    "url": "https://www.youtube.com/watch?v=gs0ddbrYDq4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "תחזור תחזור - משינה - שרים קריוקי"
  },
  {
    "id": "he-Vv69Sa3KArI",
    "title": "שלח לי מלאך",
    "artist": "משינה",
    "aliases": "Машина Мэшина",
    "url": "https://www.youtube.com/watch?v=Vv69Sa3KArI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "משינה - שלח לי מלאך קריוקי"
  },
  {
    "id": "he-cMmpyKvh0M4",
    "title": "בלעדייך",
    "artist": "גידי גוב",
    "aliases": "Гиди Гов",
    "url": "https://www.youtube.com/watch?v=cMmpyKvh0M4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "גידי גוב - בלעדייך (קריוקי)"
  },
  {
    "id": "he-6a-MQD1Igy0",
    "title": "מי תרצי שאהיה",
    "artist": "גידי גוב",
    "aliases": "Гиди Гов",
    "url": "https://www.youtube.com/watch?v=6a-MQD1Igy0",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מי תרצי שאהיה גידי גוב - גרסת פלייבק קריוקי"
  },
  {
    "id": "he-rIzEBG2g_5Y",
    "title": "נאחז באוויר",
    "artist": "גידי גוב",
    "aliases": "Гиди Гов",
    "url": "https://www.youtube.com/watch?v=rIzEBG2g_5Y",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נאחז באוויר - גידי גוב - פלייבק קריוקי"
  },
  {
    "id": "he-m44EWCHzReY",
    "title": "עניין של זמן",
    "artist": "גידי גוב",
    "aliases": "Гиди Гов",
    "url": "https://www.youtube.com/watch?v=m44EWCHzReY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "גידי גוב  –  עניין של זמן  ( קריוקי פסנתר )"
  },
  {
    "id": "he-ja0jLTtcRA8",
    "title": "יש אי שם",
    "artist": "גידי גוב",
    "aliases": "Гиди Гов",
    "url": "https://www.youtube.com/watch?v=ja0jLTtcRA8",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "יש אי שם - גידי גוב (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-i5tU26GqOrQ",
    "title": "ערב אבוד",
    "artist": "גידי גוב",
    "aliases": "Гиди Гов",
    "url": "https://www.youtube.com/watch?v=i5tU26GqOrQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "קריוקי חאפר - גידי גוב - ערב אבוד"
  },
  {
    "id": "he-jlI8zFoRYCM",
    "title": "נגיעה אחת רכה",
    "artist": "גידי גוב",
    "aliases": "Гиди Гов",
    "url": "https://www.youtube.com/watch?v=jlI8zFoRYCM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "גידי גוב - נגיעה אחת רכה (קריוקי)"
  },
  {
    "id": "he-0atLVYhNPcE",
    "title": "רק אתמול",
    "artist": "גלי עטרי",
    "aliases": "Гали Атари",
    "url": "https://www.youtube.com/watch?v=0atLVYhNPcE",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "רק אתמול גלי עטרי קריורי KARAOKE פלייבק חינם"
  },
  {
    "id": "he-10eTklk4UoI",
    "title": "דרך ארוכה",
    "artist": "גלי עטרי",
    "aliases": "Гали Атари",
    "url": "https://www.youtube.com/watch?v=10eTklk4UoI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "דרך ארוכה - גלי עטרי - קריוקי"
  },
  {
    "id": "he-PGYSPxhY2Qc",
    "title": "נסיך החלומות ולנטינו",
    "artist": "גלי עטרי",
    "aliases": "Гали Атари",
    "url": "https://www.youtube.com/watch?v=PGYSPxhY2Qc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נסיך החלומות ולנטינו - גלי עטרי - קריוקי"
  },
  {
    "id": "he-CkvilCDpQdg",
    "title": "מהמרחקים",
    "artist": "גלי עטרי וסגיב כהן",
    "aliases": "Гали Атари",
    "url": "https://www.youtube.com/watch?v=CkvilCDpQdg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "גלי עטרי וסגיב כהן - מהמרחקים (קריוקי פסנתר)"
  },
  {
    "id": "he-K38CDgLZe70",
    "title": "חזקה מהרוח",
    "artist": "גלי עטרי",
    "aliases": "Гали Атари",
    "url": "https://www.youtube.com/watch?v=K38CDgLZe70",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "קריוקי חאפר - גלי עטרי - חזקה מהרוח"
  },
  {
    "id": "he-CN7FszOK4ew",
    "title": "רק מה שאת אוהבת",
    "artist": "גלי עטרי",
    "aliases": "Гали Атари",
    "url": "https://www.youtube.com/watch?v=CN7FszOK4ew",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "גלי עטרי - רק מה שאת אוהבת (קריוקי)"
  },
  {
    "id": "he-M-sZYDEhSYE",
    "title": "הכל עומד במקום",
    "artist": "גלי עטרי",
    "aliases": "Гали Атари",
    "url": "https://www.youtube.com/watch?v=M-sZYDEhSYE",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "הכל עומד במקום גלי עטרי קריוקי HD פלייבק חינם"
  },
  {
    "id": "he-eSQOMHqMFI4",
    "title": "אזמרלדה",
    "artist": "גלי עטרי",
    "aliases": "Гали Атари",
    "url": "https://www.youtube.com/watch?v=eSQOMHqMFI4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אזמרלדה - גלי עטרי - שרים קריוקי"
  },
  {
    "id": "he-acidbCKVvQQ",
    "title": "יוצא לאור",
    "artist": "אהוד בנאי",
    "aliases": "Эхуд Банай",
    "url": "https://www.youtube.com/watch?v=acidbCKVvQQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אהוד בנאי - יוצא לאור - קריוקי"
  },
  {
    "id": "he-wA_OKnl09A8",
    "title": "הכוכב של מחוז גוש דן",
    "artist": "אהוד בנאי",
    "aliases": "Эхуд Банай",
    "url": "https://www.youtube.com/watch?v=wA_OKnl09A8",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אהוד בנאי - הכוכב של מחוז גוש דן - קריוקי (גיטריוקי)"
  },
  {
    "id": "he-LnBqR4rLZJc",
    "title": "בלוז כנעני",
    "artist": "אהוד בנאי",
    "aliases": "Эхуд Банай",
    "url": "https://www.youtube.com/watch?v=LnBqR4rLZJc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "בלוז כנעני - אהוד בנאי | בר קריוקי"
  },
  {
    "id": "he-RzW7uxhXEDc",
    "title": "אביא לך",
    "artist": "אהוד בנאי",
    "aliases": "Эхуд Банай",
    "url": "https://www.youtube.com/watch?v=RzW7uxhXEDc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אהוד בנאי – אביא לך (קריוקי פסנתר)"
  },
  {
    "id": "he-noj2uQCADdA",
    "title": "האם להיות בך מאוהב",
    "artist": "אביב גפן",
    "aliases": "Авив Гефен",
    "url": "https://www.youtube.com/watch?v=noj2uQCADdA",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אביב גפן - האם להיות בך מאוהב - קריוקי"
  },
  {
    "id": "he-Y4f4LUS38o0",
    "title": "מלאך",
    "artist": "אביב גפן",
    "aliases": "Авив Гефен",
    "url": "https://www.youtube.com/watch?v=Y4f4LUS38o0",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אביב גפן – מלאך ( קריוקי פסנתר )"
  },
  {
    "id": "he-8ojuOReVL9M",
    "title": "אולי",
    "artist": "אביב גפן",
    "aliases": "Авив Гефен",
    "url": "https://www.youtube.com/watch?v=8ojuOReVL9M",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אביב גפן - אולי (קריוקי פסנתר)"
  },
  {
    "id": "he-15yZubhrUCY",
    "title": "אהבנו",
    "artist": "אביב גפן",
    "aliases": "Авив Гефен",
    "url": "https://www.youtube.com/watch?v=15yZubhrUCY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אביב גפן - אהבנו - קריוקי"
  },
  {
    "id": "he-Q_AfLWBA-ec",
    "title": "אור הירח",
    "artist": "אביב גפן",
    "aliases": "Авив Гефен",
    "url": "https://www.youtube.com/watch?v=Q_AfLWBA-ec",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אביב גפן - אור הירח - קריוקי"
  },
  {
    "id": "he-676_-YzfCMU",
    "title": "יומן מסע",
    "artist": "אביב גפן ואריק איינשטיין",
    "aliases": "Арик Айнштейн Авив Гефен",
    "url": "https://www.youtube.com/watch?v=676_-YzfCMU",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אביב גפן ואריק איינשטיין – יומן מסע  (קריוקי פסנתר)"
  },
  {
    "id": "he-qLSUIjTYNg4",
    "title": "דברים שרציתי לומר",
    "artist": "יהודה פוליקר",
    "aliases": "Йехуда Поликер",
    "url": "https://www.youtube.com/watch?v=qLSUIjTYNg4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "דברים שרציתי לומר - יהודה פוליקר - שרים קריוקי"
  },
  {
    "id": "he-IR44qi5QnF8",
    "title": "אפר ואבק",
    "artist": "יהודה פוליקר",
    "aliases": "Йехуда Поликер",
    "url": "https://www.youtube.com/watch?v=IR44qi5QnF8",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אפר ואבק - יהודה פוליקר - שרים קריוקי"
  },
  {
    "id": "he-3ZCyaNJkT90",
    "title": "לשיר איתך",
    "artist": "בועז שרעבי ושושנה דמארי",
    "aliases": "Боаз Шараби",
    "url": "https://www.youtube.com/watch?v=3ZCyaNJkT90",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "בועז שרעבי ושושנה דמארי   לשיר איתך - קריוקי"
  },
  {
    "id": "he-zQAfeveB7us",
    "title": "אם את עדיין אוהבת אותי",
    "artist": "בועז שרעבי",
    "aliases": "Боаз Шараби",
    "url": "https://www.youtube.com/watch?v=zQAfeveB7us",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אם את עדיין אוהבת אותי - בועז שרעבי (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-Tg5Poegsfwk",
    "title": "אצלי הכל בסדר",
    "artist": "בועז שרעבי",
    "aliases": "Боаз Шараби",
    "url": "https://www.youtube.com/watch?v=Tg5Poegsfwk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אצלי הכל בסדר - בועז שרעבי - שרים קריוקי"
  },
  {
    "id": "he-AzENjU_7j4s",
    "title": "לתת",
    "artist": "בועז שרעבי",
    "aliases": "Боаз Шараби",
    "url": "https://www.youtube.com/watch?v=AzENjU_7j4s",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "בועז שרעבי - לתת (קריוקי פסנתר)"
  },
  {
    "id": "he-uW21hJGYtWg",
    "title": "כל עוד",
    "artist": "בועז שרעבי",
    "aliases": "Боаз Шараби",
    "url": "https://www.youtube.com/watch?v=uW21hJGYtWg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "קריקי - כל עוד - בועז שרעבי - קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-hH9RlLmqfbo",
    "title": "את לי לילה",
    "artist": "בועז שרעבי",
    "aliases": "Боаз Шараби",
    "url": "https://www.youtube.com/watch?v=hH9RlLmqfbo",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "את לי לילה - בועז שרעבי (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-rnAoMBDrHXc",
    "title": "חיה לי מיום ליום",
    "artist": "ריטה",
    "aliases": "Рита",
    "url": "https://www.youtube.com/watch?v=rnAoMBDrHXc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "חיה לי מיום ליום - ריטה (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-UvgByiJQbpo",
    "title": "עד שתעזוב",
    "artist": "ריטה",
    "aliases": "Рита",
    "url": "https://www.youtube.com/watch?v=UvgByiJQbpo",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עד שתעזוב - ריטה (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-L9RD3izSiiE",
    "title": "עטוף ברחמים",
    "artist": "ריטה",
    "aliases": "Рита",
    "url": "https://www.youtube.com/watch?v=L9RD3izSiiE",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עטוף ברחמים - ריטה- שרים קריוקי"
  },
  {
    "id": "he-MauaRSNyUWw",
    "title": "מחכה",
    "artist": "ריטה",
    "aliases": "Рита",
    "url": "https://www.youtube.com/watch?v=MauaRSNyUWw",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "ריטה - מחכה (קריוקי פסנתר)"
  },
  {
    "id": "he--ptncMYmvWE",
    "title": "שביל הבריחה",
    "artist": "ריטה",
    "aliases": "Рита",
    "url": "https://www.youtube.com/watch?v=-ptncMYmvWE",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "ריטה - שביל הבריחה (קריוקי)"
  },
  {
    "id": "he-9TgSXPuGJ1k",
    "title": "שרה ברחובות",
    "artist": "ריטה",
    "aliases": "Рита",
    "url": "https://www.youtube.com/watch?v=9TgSXPuGJ1k",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שרה ברחובות - ריטה -  קריוקי"
  },
  {
    "id": "he-ZeFFZfPskwI",
    "title": "מירוץ החיים",
    "artist": "שרית חדד",
    "aliases": "Сарит Хадад",
    "url": "https://www.youtube.com/watch?v=ZeFFZfPskwI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מירוץ החיים   שרית חדד   בא לי קריוקי"
  },
  {
    "id": "he-iFbOL2rdAsY",
    "title": "שב",
    "artist": "שרית חדד",
    "aliases": "Сарит Хадад",
    "url": "https://www.youtube.com/watch?v=iFbOL2rdAsY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שב - שרית חדד - שרים קריוקי"
  },
  {
    "id": "he-C69JcyggR-M",
    "title": "כמו סינדרלה",
    "artist": "שרית חדד",
    "aliases": "Сарит Хадад",
    "url": "https://www.youtube.com/watch?v=C69JcyggR-M",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "כמו סינדרלה - שרית חדד - קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-oNwD5aczYts",
    "title": "אבא גדול",
    "artist": "שרית חדד",
    "aliases": "Сарит Хадад",
    "url": "https://www.youtube.com/watch?v=oNwD5aczYts",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אבא גדול - שרית חדד - שרים קריוקי"
  },
  {
    "id": "he-QxpcG_6xsYs",
    "title": "אהבה כמו שלנו",
    "artist": "שרית חדד",
    "aliases": "Сарит Хадад",
    "url": "https://www.youtube.com/watch?v=QxpcG_6xsYs",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אהבה כמו שלנו - שרית חדד - שרים קריוקי"
  },
  {
    "id": "he-FCJqEjNqJzs",
    "title": "כשהלב בוכה",
    "artist": "שרית חדד",
    "aliases": "Сарит Хадад",
    "url": "https://www.youtube.com/watch?v=FCJqEjNqJzs",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שרית חדד - כשהלב בוכה (גרסת בנות - קריוקי פסנתר)"
  },
  {
    "id": "he-XcKZU8KlKio",
    "title": "חופשייה",
    "artist": "שרית חדד",
    "aliases": "Сарит Хадад",
    "url": "https://www.youtube.com/watch?v=XcKZU8KlKio",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "חופשייה - שרית חדד (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-kBNL1c2uRIA",
    "title": "כשאחר",
    "artist": "אייל גולן",
    "aliases": "Эяль Эйяль Голан",
    "url": "https://www.youtube.com/watch?v=kBNL1c2uRIA",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "כשאחר - אייל גולן - בא לי קריוקי"
  },
  {
    "id": "he-MZitnQGVLPc",
    "title": "נגעת לי בלב",
    "artist": "אייל גולן",
    "aliases": "Эяль Эйяль Голан",
    "url": "https://www.youtube.com/watch?v=MZitnQGVLPc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נגעת לי בלב - אייל גולן (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-s_oJHXCLg00",
    "title": "לוחמת",
    "artist": "אייל גולן",
    "aliases": "Эяль Эйяль Голан",
    "url": "https://www.youtube.com/watch?v=s_oJHXCLg00",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "לוחמת - אייל גולן (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-rlpexdZuP9c",
    "title": "שכחתי מזמן",
    "artist": "אייל גולן",
    "aliases": "Эяль Эйяль Голан",
    "url": "https://www.youtube.com/watch?v=rlpexdZuP9c",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שכחתי מזמן - אייל גולן (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-yXOIoFRaEEY",
    "title": "ואני קורא לך",
    "artist": "אייל גולן",
    "aliases": "Эяль Эйяль Голан",
    "url": "https://www.youtube.com/watch?v=yXOIoFRaEEY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "ואני קורא לך - אייל גולן (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-8qZLrE3C5Sk",
    "title": "איזה געגוע",
    "artist": "אייל גולן",
    "aliases": "Эяль Эйяль Голан",
    "url": "https://www.youtube.com/watch?v=8qZLrE3C5Sk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אייל גולן - איזה געגוע קריוקי"
  },
  {
    "id": "he-JXifozNmQWE",
    "title": "מציאות אחרת",
    "artist": "אייל גולן",
    "aliases": "Эяль Эйяль Голан",
    "url": "https://www.youtube.com/watch?v=JXifozNmQWE",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מציאות אחרת - אייל גולן (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-nCGeH9fi04Y",
    "title": "אפטרשוק",
    "artist": "אייל גולן",
    "aliases": "Эяль Эйяль Голан",
    "url": "https://www.youtube.com/watch?v=nCGeH9fi04Y",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אפטרשוק - אייל גולן - שרים קריוקי"
  },
  {
    "id": "he-_VFzQDuW_Oc",
    "title": "מלכת הדור",
    "artist": "עומר אדם",
    "aliases": "Омер Адам",
    "url": "https://www.youtube.com/watch?v=_VFzQDuW_Oc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מלכת הדור - עומר אדם - שרים קריוקי"
  },
  {
    "id": "he-q3px5tb4anI",
    "title": "השיר שאת אוהבת",
    "artist": "עומר אדם",
    "aliases": "Омер Адам",
    "url": "https://www.youtube.com/watch?v=q3px5tb4anI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "השיר שאת אוהבת - עומר אדם - שרים קריוקי"
  },
  {
    "id": "he-BnA6BdyxHLg",
    "title": "תהום",
    "artist": "עומר אדם",
    "aliases": "Омер Адам",
    "url": "https://www.youtube.com/watch?v=BnA6BdyxHLg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "תהום - עומר אדם - שרים קריוקי"
  },
  {
    "id": "he-njqFz-BUfPY",
    "title": "סיפור ישן",
    "artist": "עומר אדם",
    "aliases": "Омер Адам",
    "url": "https://www.youtube.com/watch?v=njqFz-BUfPY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "סיפור ישן - עומר אדם ולירן דנינו - שרים קריוקי"
  },
  {
    "id": "he-CR_PU23KmzU",
    "title": "רחוק מכולם",
    "artist": "עומר אדם",
    "aliases": "Омер Адам",
    "url": "https://www.youtube.com/watch?v=CR_PU23KmzU",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "רחוק מכולם - עומר אדם - שרים קריוקי"
  },
  {
    "id": "he-swjMz_AWHKI",
    "title": "מאמי זה נגמר",
    "artist": "עומר אדם",
    "aliases": "Омер Адам",
    "url": "https://www.youtube.com/watch?v=swjMz_AWHKI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מאמי זה נגמר - עומר אדם - שרים קריוקי"
  },
  {
    "id": "he-aD93wi7n7rM",
    "title": "טקילה",
    "artist": "עומר אדם",
    "aliases": "Омер Адам",
    "url": "https://www.youtube.com/watch?v=aD93wi7n7rM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "טקילה - עומר אדם - שרים קריוקי"
  },
  {
    "id": "he-9fQH07PhW2U",
    "title": "נמס ממך",
    "artist": "עומר אדם",
    "aliases": "Омер Адам",
    "url": "https://www.youtube.com/watch?v=9fQH07PhW2U",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נמס ממך קריוקי עומר אדם"
  },
  {
    "id": "he-tW3te_mYzfw",
    "title": "שאריות של החיים",
    "artist": "עידן רייכל",
    "aliases": "Идан Райхель",
    "url": "https://www.youtube.com/watch?v=tW3te_mYzfw",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עידן רייכל  –  שאריות של החיים  ( קריוקי פסנתר )"
  },
  {
    "id": "he-BTm2FgABV6w",
    "title": "מכל האהבות",
    "artist": "עידן רייכל",
    "aliases": "Идан Райхель",
    "url": "https://www.youtube.com/watch?v=BTm2FgABV6w",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עידן רייכל  – מכל האהבות  ( קריוקי פסנתר )"
  },
  {
    "id": "he-WRgPEPpMtcM",
    "title": "ואם תבואי אליי",
    "artist": "עידן רייכל",
    "aliases": "Идан Райхель",
    "url": "https://www.youtube.com/watch?v=WRgPEPpMtcM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עידן רייכל  –  ואם תבואי אליי  ( קריוקי פסנתר )"
  },
  {
    "id": "he-_3D2Ig8t-xg",
    "title": "ממעמקים",
    "artist": "עידן רייכל",
    "aliases": "Идан Райхель",
    "url": "https://www.youtube.com/watch?v=_3D2Ig8t-xg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עידן רייכל - ממעמקים  ( קריוקי פסנתר )"
  },
  {
    "id": "he-q3DlS_p6g6Q",
    "title": "עכשיו קרוב",
    "artist": "עידן רייכל",
    "aliases": "Идан Райхель",
    "url": "https://www.youtube.com/watch?v=q3DlS_p6g6Q",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עכשיו קרוב - עידן רייכל - קריוקי"
  },
  {
    "id": "he-up7gpBcsybc",
    "title": "להאמין",
    "artist": "דולי ופן עם עידן רייכל",
    "aliases": "Идан Райхель",
    "url": "https://www.youtube.com/watch?v=up7gpBcsybc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "דולי ופן עם עידן רייכל להאמין קריוקי"
  },
  {
    "id": "he-AMZ--wG2w84",
    "title": "הנך יפה",
    "artist": "עידן רייכל",
    "aliases": "Идан Райхель",
    "url": "https://www.youtube.com/watch?v=AMZ--wG2w84",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "הנך יפה - הפרויקט של עידן רייכל - שרים קריוקי"
  },
  {
    "id": "he-xnAkALKm7ro",
    "title": "חלק מהזמן",
    "artist": "עידן עמדי",
    "aliases": "Идан Амеди",
    "url": "https://www.youtube.com/watch?v=xnAkALKm7ro",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עידן עמדי  –  חלק מהזמן  ( קריוקי פסנתר )"
  },
  {
    "id": "he-uVjgLpl12qU",
    "title": "אלייך",
    "artist": "עידן עמדי",
    "aliases": "Идан Амеди",
    "url": "https://www.youtube.com/watch?v=uVjgLpl12qU",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עידן עמדי – אלייך (קריוקי פסנתר)"
  },
  {
    "id": "he-39TvRCs0xUI",
    "title": "אני רוצה",
    "artist": "עידן עמדי",
    "aliases": "Идан Амеди",
    "url": "https://www.youtube.com/watch?v=39TvRCs0xUI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אני רוצה - עידן עמדי - שרים קריוקי"
  },
  {
    "id": "he-DtLE_0Q5nug",
    "title": "מה את מרגישה",
    "artist": "עידן עמדי",
    "aliases": "Идан Амеди",
    "url": "https://www.youtube.com/watch?v=DtLE_0Q5nug",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מה את מרגישה - עידן עמדי - שרים קריוקי"
  },
  {
    "id": "he-v40M2SuRJlw",
    "title": "נגמר",
    "artist": "עידן עמדי",
    "aliases": "Идан Амеди",
    "url": "https://www.youtube.com/watch?v=v40M2SuRJlw",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נגמר - עידן עמדי - קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-IdIcuXCxR04",
    "title": "עד שיעלה היום הבא",
    "artist": "עידן עמדי",
    "aliases": "Идан Амеди",
    "url": "https://www.youtube.com/watch?v=IdIcuXCxR04",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עד שיעלה היום הבא - עידן עמדי - שרים קריוקי"
  },
  {
    "id": "he-es3M85DM-xs",
    "title": "סיוון",
    "artist": "עידן עמדי",
    "aliases": "Идан Амеди",
    "url": "https://www.youtube.com/watch?v=es3M85DM-xs",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "סיוון - עידן עמדי - מתוך פרוייקט שרים יגאל בשן - שרים קריוקי"
  },
  {
    "id": "he-yynnh2QIkbw",
    "title": "בראשית עולם",
    "artist": "שלומי שבת",
    "aliases": "Шломи Шабат",
    "url": "https://www.youtube.com/watch?v=yynnh2QIkbw",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "בראשית עולם - שלומי שבת - שרים קריוקי"
  },
  {
    "id": "he-ba9olwQwqZA",
    "title": "ואני שר",
    "artist": "שלומי שבת",
    "aliases": "Шломи Шабат",
    "url": "https://www.youtube.com/watch?v=ba9olwQwqZA",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "ואני שר - שלומי שבת -  שרים קריוקי"
  },
  {
    "id": "he-GUQWyoQh8zw",
    "title": "שתדעי",
    "artist": "שלומי שבת",
    "aliases": "Шломи Шабат",
    "url": "https://www.youtube.com/watch?v=GUQWyoQh8zw",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שתדעי -שלומי שבת - שרים קריוקי"
  },
  {
    "id": "he-d5vHHWkdrTM",
    "title": "אבא",
    "artist": "שלומי שבת",
    "aliases": "Шломи Шабат",
    "url": "https://www.youtube.com/watch?v=d5vHHWkdrTM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אבא - שלומי שבת - שרים קריוקי"
  },
  {
    "id": "he-Vs8PYbti5ww",
    "title": "האישה של חיי",
    "artist": "שלומי שבת",
    "aliases": "Шломи Шабат",
    "url": "https://www.youtube.com/watch?v=Vs8PYbti5ww",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שלומי שבת - האישה של חיי קריוקי"
  },
  {
    "id": "he-6IMgTiSSnpo",
    "title": "אהבה קטנה",
    "artist": "שירי מימון",
    "aliases": "Шири Маймон",
    "url": "https://www.youtube.com/watch?v=6IMgTiSSnpo",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אהבה קטנה - שירי מימון (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-fuU82q7yRk8",
    "title": "השקט שנשאר",
    "artist": "שירי מימון",
    "aliases": "Шири Маймон",
    "url": "https://www.youtube.com/watch?v=fuU82q7yRk8",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "השקט שנשאר - שירי מימון (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-Jska0MZuFfk",
    "title": "נשימה",
    "artist": "שירי מימון",
    "aliases": "Шири Маймон",
    "url": "https://www.youtube.com/watch?v=Jska0MZuFfk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נשימה - שירי מימון - שרים קריוקי"
  },
  {
    "id": "he-iRtJp0yqxMs",
    "title": "כשהלכת",
    "artist": "שירי מימון",
    "aliases": "Шири Маймон",
    "url": "https://www.youtube.com/watch?v=iRtJp0yqxMs",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "כשהלכת - שירי מימון (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-wjvXNRP-_Jw",
    "title": "אמא",
    "artist": "שירי מימון",
    "aliases": "Шири Маймон",
    "url": "https://www.youtube.com/watch?v=wjvXNRP-_Jw",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אמא - שירי מימון (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-42f9vgldYCs",
    "title": "לאן שלא תלכי",
    "artist": "שירי מימון",
    "aliases": "Шири Маймон",
    "url": "https://www.youtube.com/watch?v=42f9vgldYCs",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "לאן שלא תלכי - שירי מימון (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-AM25YrcMpdk",
    "title": "עכשיו אתה חוזר בחזרה",
    "artist": "מירי מסיקה",
    "aliases": "Мири Месика",
    "url": "https://www.youtube.com/watch?v=AM25YrcMpdk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עכשיו אתה חוזר בחזרה - מירי מסיקה (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-O6MoVtXQmoI",
    "title": "באה אליכם",
    "artist": "מירי מסיקה",
    "aliases": "Мири Месика",
    "url": "https://www.youtube.com/watch?v=O6MoVtXQmoI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "‫באה אליכם  מירי מסיקה  שרים קריוקי‬‎   YouTube"
  },
  {
    "id": "he-v86W9Do7iFU",
    "title": "נובמבר",
    "artist": "מירי מסיקה",
    "aliases": "Мири Месика",
    "url": "https://www.youtube.com/watch?v=v86W9Do7iFU",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מירי מסיקה - נובמבר (קריוקי)"
  },
  {
    "id": "he-ciebZEoBqh4",
    "title": "אף אחת",
    "artist": "מירי מסיקה ורן דנקר",
    "aliases": "Мири Месика",
    "url": "https://www.youtube.com/watch?v=ciebZEoBqh4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מירי מסיקה ורן דנקר – אף אחת (קריוקי פסנתר)"
  },
  {
    "id": "he-1VOQaEicFBg",
    "title": "אף אחת",
    "artist": "מירי מסיקה",
    "aliases": "Мири Месика",
    "url": "https://www.youtube.com/watch?v=1VOQaEicFBg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אף אחת - מירי מסיקה ורן דנקר (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-Zn110ZC5juk",
    "title": "יש לך אותך",
    "artist": "מירי מסיקה",
    "aliases": "Мири Месика",
    "url": "https://www.youtube.com/watch?v=Zn110ZC5juk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "יש לך אותך - מירי מסיקה ומיקה משה (גרסת קריוקי -בנות סולם 1-) PIANO l NATI"
  },
  {
    "id": "he-1NBA5fIGEi8",
    "title": "לשם",
    "artist": "מירי מסיקה",
    "aliases": "Мири Месика",
    "url": "https://www.youtube.com/watch?v=1NBA5fIGEi8",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "לשם - מירי מסיקה - קריוקי"
  },
  {
    "id": "he-imlr4vr9F5U",
    "title": "מאמי",
    "artist": "מירי מסיקה",
    "aliases": "Мири Месика",
    "url": "https://www.youtube.com/watch?v=imlr4vr9F5U",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מאמי - מירי מסיקה (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-0mUlWCW8gDk",
    "title": "כל מה שיש לי",
    "artist": "נתן גושן",
    "aliases": "Натан Гошен",
    "url": "https://www.youtube.com/watch?v=0mUlWCW8gDk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נתן גושן - כל מה שיש לי (קריוקי פסנתר)"
  },
  {
    "id": "he-27EV9oX1w4c",
    "title": "באתי לחלום",
    "artist": "נתן גושן",
    "aliases": "Натан Гошен",
    "url": "https://www.youtube.com/watch?v=27EV9oX1w4c",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "באתי לחלום - נתן גושן - שרים קריוקי"
  },
  {
    "id": "he-lDccFtFfwVQ",
    "title": "איפה את",
    "artist": "נתן גושן",
    "aliases": "Натан Гошен",
    "url": "https://www.youtube.com/watch?v=lDccFtFfwVQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "איפה את - נתן גושן (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-fyexCb8gDDY",
    "title": "שני ילדים בעולם",
    "artist": "נתן גושן",
    "aliases": "Натан Гошен",
    "url": "https://www.youtube.com/watch?v=fyexCb8gDDY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נתן גושן - שני ילדים בעולם (קריוקי פסנתר)"
  },
  {
    "id": "he-pojxGUn_Zrg",
    "title": "גבולות הגיון",
    "artist": "נתן גושן",
    "aliases": "Натан Гошен",
    "url": "https://www.youtube.com/watch?v=pojxGUn_Zrg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "גבולות הגיון - נתן גושן (גרסת קריוקי - בנים 2+) PIANO l NATI"
  },
  {
    "id": "he-wi3PvMwkSZg",
    "title": "ניצחונות קטנים",
    "artist": "נתן גושן",
    "aliases": "Натан Гошен",
    "url": "https://www.youtube.com/watch?v=wi3PvMwkSZg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נתן גושן – ניצחונות קטנים (קריוקי פסנתר)"
  },
  {
    "id": "he-wK2lXMzdRIg",
    "title": "מה אם נתנשק",
    "artist": "נתן גושן",
    "aliases": "Натан Гошен",
    "url": "https://www.youtube.com/watch?v=wK2lXMzdRIg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מה אם נתנשק - נתן גושן (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-GWmHp0LA8IM",
    "title": "מתגעגעת",
    "artist": "נתן גושן",
    "aliases": "Натан Гошен",
    "url": "https://www.youtube.com/watch?v=GWmHp0LA8IM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נתן גושן – מתגעגעת (קריוקי פסנתר)"
  },
  {
    "id": "he-eNdvf4Ub5I8",
    "title": "מה שהלב בחר",
    "artist": "קובי אפללו",
    "aliases": "Коби Афлало",
    "url": "https://www.youtube.com/watch?v=eNdvf4Ub5I8",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "קובי אפללו - מה שהלב בחר (קריוקי פסנתר)"
  },
  {
    "id": "he-4J20N9SSBbE",
    "title": "ים הרחמים",
    "artist": "קובי אפללו",
    "aliases": "Коби Афлало",
    "url": "https://www.youtube.com/watch?v=4J20N9SSBbE",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "קובי אפללו - ים הרחמים (קריוקי פסנתר)"
  },
  {
    "id": "he-dm0iC_PCU-k",
    "title": "איך מסבירים געגוע",
    "artist": "עילי בוטנר עם קובי אפללו",
    "aliases": "Коби Афлало",
    "url": "https://www.youtube.com/watch?v=dm0iC_PCU-k",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "איך מסבירים געגוע - עילי בוטנר עם קובי אפללו - שרים קריוקי"
  },
  {
    "id": "he-grE_fg17nk4",
    "title": "מה נשאר לי",
    "artist": "קובי אפללו",
    "aliases": "Коби Афлало",
    "url": "https://www.youtube.com/watch?v=grE_fg17nk4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מה נשאר לי - קובי אפללו - שרים קריוקי"
  },
  {
    "id": "he-IMbcGhTxLss",
    "title": "יחידה שלי",
    "artist": "קובי אפללו",
    "aliases": "Коби Афлало",
    "url": "https://www.youtube.com/watch?v=IMbcGhTxLss",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "יחידה שלי קובי אפללו פלייבק קריוקי"
  },
  {
    "id": "he-WenG4yJbn18",
    "title": "אהבה שלי",
    "artist": "קובי אפללו",
    "aliases": "Коби Афлало",
    "url": "https://www.youtube.com/watch?v=WenG4yJbn18",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אהבה שלי - קובי אפללו - שרים קריוקי"
  },
  {
    "id": "he-8GBQfEODqMY",
    "title": "רציתי שתדע",
    "artist": "עוזי חיטמן",
    "aliases": "Узи Хитман",
    "url": "https://www.youtube.com/watch?v=8GBQfEODqMY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "רציתי שתדע - עוזי חיטמן -קריוקי"
  },
  {
    "id": "he-2GTen3DLWk8",
    "title": "נולדתי לשלום",
    "artist": "עוזי חיטמן",
    "aliases": "Узи Хитман",
    "url": "https://www.youtube.com/watch?v=2GTen3DLWk8",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "נולדתי לשלום  - עוזי חיטמן - שרים קריוקי"
  },
  {
    "id": "he-anLhUhEnyuE",
    "title": "שירי ילדות השירים המשחקים",
    "artist": "עוזי חיטמן",
    "aliases": "Узи Хитман",
    "url": "https://www.youtube.com/watch?v=anLhUhEnyuE",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שירי ילדות השירים המשחקים - עוזי חיטמן - קריוקי"
  },
  {
    "id": "he-Nb-QHxKUR0g",
    "title": "עכשיו התור לאהבה",
    "artist": "עוזי חיטמן",
    "aliases": "Узи Хитман",
    "url": "https://www.youtube.com/watch?v=Nb-QHxKUR0g",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עוזי חיטמן – עכשיו התור לאהבה (קריוקי פסנתר)"
  },
  {
    "id": "he-M-uQqHo74Jo",
    "title": "כמו צועני",
    "artist": "יגאל בשן ועוזי חיטמן",
    "aliases": "Узи Хитман",
    "url": "https://www.youtube.com/watch?v=M-uQqHo74Jo",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "יגאל בשן ועוזי חיטמן - כמו צועני (קריוקי)"
  },
  {
    "id": "he-BZDFLY1P9UQ",
    "title": "אלוהים שלי",
    "artist": "עוזי חיטמן",
    "aliases": "Узи Хитман",
    "url": "https://www.youtube.com/watch?v=BZDFLY1P9UQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אלוהים שלי - עוזי חיטמן - קריוקי"
  },
  {
    "id": "he-ZOI68AScExY",
    "title": "ילדתי",
    "artist": "זוהר ארגוב",
    "aliases": "Зоар Аргов",
    "url": "https://www.youtube.com/watch?v=ZOI68AScExY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "ילדתי - זוהר ארגוב  - קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-ASYCEYG1JU4",
    "title": "מלאך ילדה",
    "artist": "זוהר ארגוב",
    "aliases": "Зоар Аргов",
    "url": "https://www.youtube.com/watch?v=ASYCEYG1JU4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "זוהר ארגוב - מלאך ילדה - קריוקי - קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-6pZXAJQq8Gk",
    "title": "מפרץ שלמה",
    "artist": "זוהר ארגוב",
    "aliases": "Зоар Аргов",
    "url": "https://www.youtube.com/watch?v=6pZXAJQq8Gk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מפרץ שלמה - זוהר ארגוב - שרים קריוקי"
  },
  {
    "id": "he-ksw0qfzhx0A",
    "title": "כבר עברו השנים",
    "artist": "זוהר ארגוב",
    "aliases": "Зоар Аргов",
    "url": "https://www.youtube.com/watch?v=ksw0qfzhx0A",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "כבר עברו השנים - זוהר ארגוב -  קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-RjTwlzPyw8M",
    "title": "שיר פרטי",
    "artist": "זוהר ארגוב",
    "aliases": "Зоар Аргов",
    "url": "https://www.youtube.com/watch?v=RjTwlzPyw8M",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שיר פרטי - זוהר ארגוב - קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-sqODO01sMhs",
    "title": "סוד המזלות",
    "artist": "זוהר ארגוב",
    "aliases": "Зоар Аргов",
    "url": "https://www.youtube.com/watch?v=sqODO01sMhs",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "סוד המזלות -  זוהר ארגוב - קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-ueqjysMaBBQ",
    "title": "היה זה בערב סגריר",
    "artist": "זוהר ארגוב",
    "aliases": "Зоар Аргов",
    "url": "https://www.youtube.com/watch?v=ueqjysMaBBQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "זוהר ארגוב - היה זה בערב סגריר - קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-1dNqNh1cfRQ",
    "title": "כל הכבוד",
    "artist": "יהורם גאון",
    "aliases": "Йорам Гаон",
    "url": "https://www.youtube.com/watch?v=1dNqNh1cfRQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "כל הכבוד - יהורם גאון - קריוקי"
  },
  {
    "id": "he-o7Z_lWGlPU4",
    "title": "אל תשטה באהבה",
    "artist": "יהורם גאון",
    "aliases": "Йорам Гаон",
    "url": "https://www.youtube.com/watch?v=o7Z_lWGlPU4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אל תשטה באהבה - יהורם גאון - קריוקי ישראלי מזרחי"
  },
  {
    "id": "he-XbzPg6gR69g",
    "title": "יש מקום",
    "artist": "יהורם גאון",
    "aliases": "Йорам Гаон",
    "url": "https://www.youtube.com/watch?v=XbzPg6gR69g",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "יש מקום - יהורם גאון - קריוקי"
  },
  {
    "id": "he-WJzYo0fo5Pk",
    "title": "הנני כאן",
    "artist": "יהורם גאון",
    "aliases": "Йорам Гаон",
    "url": "https://www.youtube.com/watch?v=WJzYo0fo5Pk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "הנני כאן - יהורם גאון - קריוקי"
  },
  {
    "id": "he-Ah41gVE85nM",
    "title": "השר מוטיפיורי",
    "artist": "יהורם גאון",
    "aliases": "Йорам Гаон",
    "url": "https://www.youtube.com/watch?v=Ah41gVE85nM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "השר מוטיפיורי - יהורם גאון - קריוקי Ha'Sar Montefiore - Yehoram Gaon  Karaoke"
  },
  {
    "id": "he-skFLfLxAWMc",
    "title": "רוזה רוזה",
    "artist": "יהורם גאון",
    "aliases": "Йорам Гаон",
    "url": "https://www.youtube.com/watch?v=skFLfLxAWMc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "רוזה רוזה  - יהורם גאון - קריוקי"
  },
  {
    "id": "he-zeoXkkIwxmY",
    "title": "בפרדס ליד השוקת",
    "artist": "יהורם גאון",
    "aliases": "Йорам Гаон",
    "url": "https://www.youtube.com/watch?v=zeoXkkIwxmY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "בפרדס ליד השוקת - יהורם גאון - קריוקי"
  },
  {
    "id": "he-bn7Y64peYZI",
    "title": "אלף נשיקות",
    "artist": "יהורם גאון",
    "aliases": "Йорам Гаон",
    "url": "https://www.youtube.com/watch?v=bn7Y64peYZI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אלף נשיקות יהורם גאון משה פרץ קריוקי HD פלייבק חינם"
  },
  {
    "id": "he-cakdYoMAS8s",
    "title": "גבריאל",
    "artist": "עפרה חזה",
    "aliases": "Офра Хаза",
    "url": "https://www.youtube.com/watch?v=cakdYoMAS8s",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עפרה חזה - גבריאל (קריוקי)"
  },
  {
    "id": "he-XXj9bbsXPXY",
    "title": "יד ביד",
    "artist": "עפרה חזה",
    "aliases": "Офра Хаза",
    "url": "https://www.youtube.com/watch?v=XXj9bbsXPXY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "יד ביד - עפרה חזה - קריוקי"
  },
  {
    "id": "he-2KE0wRkSekw",
    "title": "שיר הפרחה",
    "artist": "עפרה חזה",
    "aliases": "Офра Хаза",
    "url": "https://www.youtube.com/watch?v=2KE0wRkSekw",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שיר הפרחה - עפרה חזה - קריוקי "
  },
  {
    "id": "he-Kcy1oIZ5CQo",
    "title": "אדמה",
    "artist": "עפרה חזה",
    "aliases": "Офра Хаза",
    "url": "https://www.youtube.com/watch?v=Kcy1oIZ5CQo",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אדמה - עפרה חזה - פלייבק קריוקי"
  },
  {
    "id": "he-Z9oLAOzaw0A",
    "title": "התחדשות - אחרי החגים",
    "artist": "עפרה חזה",
    "aliases": "Офра Хаза",
    "url": "https://www.youtube.com/watch?v=Z9oLAOzaw0A",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "התחדשות - אחרי החגים עפרה חזה פלייבק קריוקי"
  },
  {
    "id": "he-fWCGanCgDLY",
    "title": "כל יום מתחילה שנה",
    "artist": "עפרה חזה",
    "aliases": "Офра Хаза",
    "url": "https://www.youtube.com/watch?v=fWCGanCgDLY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "כל יום מתחילה שנה - עפרה חזה - קריוקי"
  },
  {
    "id": "he-5mLaZFHYpsc",
    "title": "חי",
    "artist": "עפרה חזה",
    "aliases": "Офра Хаза",
    "url": "https://www.youtube.com/watch?v=5mLaZFHYpsc",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "עפרה חזה - חי - קריוקי אורגינל"
  },
  {
    "id": "he-jSSSFUqNAlk",
    "title": "גורל אחד",
    "artist": "עפרה חזה",
    "aliases": "Офра Хаза",
    "url": "https://www.youtube.com/watch?v=jSSSFUqNAlk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "גורל אחד - עפרה חזה - פלייבק קריוקי"
  },
  {
    "id": "he-QI2BLfhH7nQ",
    "title": "שמש",
    "artist": "חנן בן ארי",
    "aliases": "Ханан Бен Ари",
    "url": "https://www.youtube.com/watch?v=QI2BLfhH7nQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שמש - חנן בן ארי - שרים קריוקי"
  },
  {
    "id": "he-IpVkwUDDVqM",
    "title": "ויקיפדיה",
    "artist": "חנן בן ארי",
    "aliases": "Ханан Бен Ари",
    "url": "https://www.youtube.com/watch?v=IpVkwUDDVqM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "ויקיפדיה - חנן בן ארי - שרים קריוקי"
  },
  {
    "id": "he-olXg1lnTIyU",
    "title": "אמן על הילדים",
    "artist": "חנן בן ארי",
    "aliases": "Ханан Бен Ари",
    "url": "https://www.youtube.com/watch?v=olXg1lnTIyU",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אמן על הילדים - חנן בן ארי - שרים קריוקי"
  },
  {
    "id": "he-MLGielih5gY",
    "title": "אלוף העולם",
    "artist": "חנן בן ארי",
    "aliases": "Ханан Бен Ари",
    "url": "https://www.youtube.com/watch?v=MLGielih5gY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אלוף העולם - חנן בן ארי - שרים קריוקי"
  },
  {
    "id": "he-p1cDezeIjsQ",
    "title": "אם תרצי",
    "artist": "חנן בן ארי",
    "aliases": "Ханан Бен Ари",
    "url": "https://www.youtube.com/watch?v=p1cDezeIjsQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אם תרצי   חנן בן ארי   שרים קריוקי"
  },
  {
    "id": "he-5NMO4dfGbDM",
    "title": "הלוואי",
    "artist": "חנן בן ארי",
    "aliases": "Ханан Бен Ари",
    "url": "https://www.youtube.com/watch?v=5NMO4dfGbDM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "הלוואי - חנן בן ארי ופאר טסי | בר קריוקי"
  },
  {
    "id": "he-IEYNZhS31ZI",
    "title": "מה אתה רוצה ממני",
    "artist": "חנן בן ארי",
    "aliases": "Ханан Бен Ари",
    "url": "https://www.youtube.com/watch?v=IEYNZhS31ZI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מה אתה רוצה ממני - חנן בן ארי - שרים קריוקי"
  },
  {
    "id": "he-gQaCWeAIrHI",
    "title": "שבורי לב",
    "artist": "חנן בן ארי",
    "aliases": "Ханан Бен Ари",
    "url": "https://www.youtube.com/watch?v=gQaCWeAIrHI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "חנן בן ארי - שבורי לב (קריוקי פסנתר)"
  },
  {
    "id": "he-JQwjADPqDBM",
    "title": "אל בורות המים",
    "artist": "נעמי שמר",
    "aliases": "Наоми Шемер",
    "url": "https://www.youtube.com/watch?v=JQwjADPqDBM",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אל בורות המים - נעמי שמר - קריוקי"
  },
  {
    "id": "he-SYArJ3dC9K4",
    "title": "על כל אלה",
    "artist": "נעמי שמר",
    "aliases": "Наоми Шемер",
    "url": "https://www.youtube.com/watch?v=SYArJ3dC9K4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "על כל אלה נעמי שמר פלייבק HD קריוקי חינם"
  },
  {
    "id": "he-tewj4zlXOyI",
    "title": "מחר",
    "artist": "נעמי שמר",
    "aliases": "Наоми Шемер",
    "url": "https://www.youtube.com/watch?v=tewj4zlXOyI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "מחר - נעמי שמר - קריוקי"
  },
  {
    "id": "he-8xz98mrXgH4",
    "title": "לו יהי",
    "artist": "נעמי שמר",
    "aliases": "Наоми Шемер",
    "url": "https://www.youtube.com/watch?v=8xz98mrXgH4",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "לו יהי נעמי שמר והגשש החיוור קריוקי HD פלייבק חינם"
  },
  {
    "id": "he-lL4848MEuaQ",
    "title": "פגישה לאין קץ",
    "artist": "נעמי שמר",
    "aliases": "Наоми Шемер",
    "url": "https://www.youtube.com/watch?v=lL4848MEuaQ",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "פגישה לאין קץ - נעמי שמר (גרסת קריוקי - בנים) PIANO l NATI"
  },
  {
    "id": "he-JZoh0Tb1w4I",
    "title": "ירושלים של זהב",
    "artist": "נעמי שמר",
    "aliases": "Наоми Шемер",
    "url": "https://www.youtube.com/watch?v=JZoh0Tb1w4I",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "ירושלים של זהב - נעמי שמר (גרסה מקוצרת) (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-rjdvxsXc3Nk",
    "title": "שיר של יום חולין",
    "artist": "אילנית",
    "aliases": "Иланит",
    "url": "https://www.youtube.com/watch?v=rjdvxsXc3Nk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "שיר של יום חולין - אילנית - בא לי קריוקי"
  },
  {
    "id": "he-yT2fy-XNCiY",
    "title": "אהבה היא שיר לשניים",
    "artist": "אילנית",
    "aliases": "Иланит",
    "url": "https://www.youtube.com/watch?v=yT2fy-XNCiY",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אילנית - אהבה היא שיר לשניים (קריוקי)"
  },
  {
    "id": "he-kWug76nkLeI",
    "title": "אי־שם",
    "artist": "אילנית",
    "aliases": "Иланит",
    "url": "https://www.youtube.com/watch?v=kWug76nkLeI",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אילנית - אי־שם (קריוקי)"
  },
  {
    "id": "he-kv3kMu8TGZw",
    "title": "הנה ימים באים",
    "artist": "אילנית",
    "aliases": "Иланит",
    "url": "https://www.youtube.com/watch?v=kv3kMu8TGZw",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "הנה ימים באים - אילנית - קריוקי"
  },
  {
    "id": "he-1c6ifmdYksg",
    "title": "חלק בעולם",
    "artist": "אילנית",
    "aliases": "Иланит",
    "url": "https://www.youtube.com/watch?v=1c6ifmdYksg",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "חלק בעולם  - קריוקי - אילנית"
  },
  {
    "id": "he-55V4gkCiaLk",
    "title": "בואי אמא",
    "artist": "אילנית",
    "aliases": "Иланит",
    "url": "https://www.youtube.com/watch?v=55V4gkCiaLk",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "בואי אמא - אילנית (בגרסה של רוני דלומי) (גרסת קריוקי - בנות) PIANO l NATI"
  },
  {
    "id": "he-jLPWEOG-C-M",
    "title": "הלב",
    "artist": "אילנית",
    "aliases": "Иланит",
    "url": "https://www.youtube.com/watch?v=jLPWEOG-C-M",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אילנית - הלב - קריוקי אורגינל"
  },
  {
    "id": "he-irbSdMbVELo",
    "title": "אל הדרך",
    "artist": "אילנית",
    "aliases": "Иланит",
    "url": "https://www.youtube.com/watch?v=irbSdMbVELo",
    "language": "he",
    "kind": "На иврите",
    "categories": [
      "hebrew"
    ],
    "source": "YouTube",
    "videoTitle": "אל הדרך - אילנית - שרים קריוקי"
  },
  {
    "id": "rock-242cbbdb3efbcf6f",
    "title": "Город Золотой",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/gorod_zolotoy.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f61ac01ea31d99bb",
    "title": "25 к 10",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/25_k_10.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4584394c42fe4dc9",
    "title": "Рок-н-ролл Мёртв",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/rok-n-roll_myortv.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7e9c453beee330e6",
    "title": "Дубровский",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/dubrovskiy.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-89969de224683454",
    "title": "День Радости",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/denradosti.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d79d7d411466a7c6",
    "title": "Стаканы",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/stakani.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6bf4398eb9d5419c",
    "title": "Поезд в огне",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/poesdvogne.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-c057d15dcf03d0dc",
    "title": "Настасья",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/nastasya.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ca883cae8143bc4d",
    "title": "Брод",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/brod.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-8c1a810031c4f72e",
    "title": "Древнерусская тоска",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/drevnerusskayatoska.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b407bfae83ae5682",
    "title": "Сидя На Красивом Холме",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/sidyanakrasivomholme.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-8581a18f9a450aeb",
    "title": "Бой-Баба",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/boybaba.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-372a0768d48e72df",
    "title": "Кострома, Mon Amour",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/kostromamonamour.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-24fbbb63cdf8c3b2",
    "title": "Старик Козлодоев",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/starikkozloedov.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-8317972065fac10c",
    "title": "Не Пей Вина, Гертруда",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/nepeyvinagertruda.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ad533de7e7ede55d",
    "title": "Трамонтана",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/tramontana.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3c39e176906b161a",
    "title": "212-85-06",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/chisla.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f6dc769c68a3a6b2",
    "title": "Аделаида",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/adelaida.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-783ebb481cf71444",
    "title": "Расти, Борода, Расти",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/rastiborodarasti.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-1bfe41ce76ed8854",
    "title": "Мочалкин Блюз",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/mochalkinbluz.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-599e8654205b98ec",
    "title": "Вятка - Сан-Франциско",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/vyarkasanfrancisko.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3d60d5b425a4cee3",
    "title": "Месть Королевы Анны",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/mestkorolevianni.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-fc08e19af9de197d",
    "title": "Мама, Я Не Могу Больше Пить",
    "artist": "Аквариум",
    "url": "https://karaopa2.ru/karaoke/performer/akvarium/mamayanemogubolshepit.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-8333dff45ccd0117",
    "title": "Под небом голубым",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/podnebomgolubim.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-c26b245aea20fe4b",
    "title": "Подмога",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/podmoga.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5bc90500b99c90b2",
    "title": "Чёрный Дрозд",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/cherniydrozd.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2f211d9e822e93b1",
    "title": "Кони беспредела",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/konibespredela.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-bcbaf8c156ed2111",
    "title": "Тёмный Как Ночь",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/temniykaknoch.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-8c6658f53496ccc7",
    "title": "Не было такой и не будет",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/nebilotakoyinebudet.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-a383c0995575a75d",
    "title": "Никита Рязанский",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/nikitaryazanskiy.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-04774ac8e2125f0b",
    "title": "Как Хорошо Без Женщин и Без Фраз",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/kakhoroshobezzhenshinibezfraz.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3700ee227323dbed",
    "title": "Песни Нелюбимых",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/pesninelubimih.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-1c06eae6729f0bbe",
    "title": "Бурлак",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/burlak.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3d72800a1be8fbce",
    "title": "На ржавом ветру",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/narzhavommostu.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6b0b0c05f3d3301d",
    "title": "Сестра",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/sestra.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6c2e77770f772e2f",
    "title": "Пришёл Пить Воду",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/prishelpirvodu.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-724a126f0fc64748",
    "title": "Поутру В Поле",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/poutruvpole.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-602fcc84dff71230",
    "title": "Праздник Урожая Во Дворце Труда",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/prazdnikurozhaya.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2e11ef13c1c4576e",
    "title": "Время N",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/vremyan.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d8b7179a8590fc17",
    "title": "Губернатор",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/gubernator.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-1227d11d5729915c",
    "title": "Некоторые женятся",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/nekotoriezhenyatsya.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-fbeed60250cce335",
    "title": "Знак",
    "artist": "Борис Гребенщиков",
    "url": "https://karaopa2.ru/karaoke/performer/boris_grebenschikov/znak.html",
    "rockGroup": "akvarium",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-bb14824fe550728e",
    "title": "За Тех Кто В Море",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/za_teh_kto_v_more.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9b360b6ef10147bc",
    "title": "Поворот",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/povorot.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-90993d8772a1ced4",
    "title": "Перекресток",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/perekrestok.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3ef40c92ddeb38f4",
    "title": "Марионетки",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/marionetki.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-fa6afc6d6368eda5",
    "title": "Синяя Птица",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/sinyaya_ptitsa.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4d5b33718d9bb40e",
    "title": "Разговор В Поезде (Вагонные Споры)",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/razgovor_v_poezde.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9e16167461f2167f",
    "title": "Он Был Старше Нее",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/on_byl_starshe_nee.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2ac7ace7190899e9",
    "title": "Кого Ты Хотел Удивить",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/kogo_ty_hotel_udivit.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4e875bcb0215f94d",
    "title": "Я Сюда Еще Вернусь",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/ya_syuda_esche_vernus.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-908678fe4d9c5287",
    "title": "Он Играет На Похоронах И Танцах",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/on_igraet_na_pohoronah_i_tantsah.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ac2b2983f5220108",
    "title": "В Круге Чистой Воды",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/v_kruge_chistoy_vody.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-556ce742c4806af9",
    "title": "Костёр",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/kostyor.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b89666966dd65106",
    "title": "Пока Горит Свеча",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/poka_gorit_svecha.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-975c67fbaf06f47e",
    "title": "Однажды Мир Прогнётся Под Нас",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/odnazhdy_mir_prognyotsya_pod_nas.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-18e138ff5932ddb5",
    "title": "Скворец",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/skvorets.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7dc961247b1316ff",
    "title": "Три Окна",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/tri_okna.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-39f02641f5b4838b",
    "title": "Мой Друг",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/moy_drug.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-86669f439b7d7002",
    "title": "Скачки",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/skachki.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5b093cae9366b002",
    "title": "Ты Или Я",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/ty_ili_ya.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ebb8a38ea4c9933b",
    "title": "Место Где Свет",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/mesto_gde_svet.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d7eb624ab44c49dd",
    "title": "Снег",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/sneg.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-14983bdeda4a5340",
    "title": "Старая Песня О Главном",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/staraya_pesnya_o_glavnom_.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-73a2062b96612f70",
    "title": "Старый Рок-Н-Ролл",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/stary_rok-n-roll.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4fc1f5c3fe304a38",
    "title": "Однажды",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/odnazhdy.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-c6447c4a731a1eec",
    "title": "Эти Реки Никуда Не Текут",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/eti_reki_nikuda_ne_tekut.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-974780f3421a71e8",
    "title": "Улетай",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/uletay.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-c294caa6872838f4",
    "title": "Птица удачи",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/pticaudachi.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-bb30e50265cda021",
    "title": "Проводница",
    "artist": "Машина времени",
    "url": "https://karaopa2.ru/karaoke/performer/mashina_vremeni/provodnica.html",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5c60ad8dc9cd9aff",
    "title": "Я Хочу Быть С Тобой",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/ya_hochu_byt_s_toboy.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2468a41215ca95cb",
    "title": "Гудбай Америка",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/gudbay_amerika.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b79234a12e7f4c78",
    "title": "Крылья",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/krylya.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5673ced6a7103b4b",
    "title": "Скованные Одной Цепью",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/skovannye_odnoy_tsepyu.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-af0901968fa92b72",
    "title": "Настасья",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/nastasya.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ed574360833a21c7",
    "title": "Тутанхамон",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/tutanhamon.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7002901befa14ef7",
    "title": "Берег",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/bereg.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-35cb65625b6dc0d1",
    "title": "Я Покидаю Землю",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/ya_pokidayu_zemlyu.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-36a1c4bf8ae871a0",
    "title": "Ударная Любовь",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/udarnaya_lyubov.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-34e5e93393cb4e4f",
    "title": "Дыхание",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/dyhanie.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-c4d4ebc5811aef7c",
    "title": "Прогулки По Воде",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/progulki_po_vode.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-49b8fbf6e886f76b",
    "title": "Элизобарра-Торр",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/elizobarra-torr.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-af96edc9c3189408",
    "title": "Одинокая Птица",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/odinokaya_ptitsa.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7a5f3b30098c3115",
    "title": "Отход На Север",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/othod_na_sever.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-79ced3348f4e7e46",
    "title": "Странглия",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/strangliya.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3b8f8819db84f3f6",
    "title": "На Берегу Безымянной Реки",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/na_beregu_bezymyannoy_reki.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0deabd4f1f54306c",
    "title": "Во Время Дождя",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/vo_vremya_dozhdya.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e15be076ae2fe240",
    "title": "Утро Полины",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/utro_poliny.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e6262e2277bee61e",
    "title": "Шар Цвета Хаки",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/shar_tsveta_haki.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-30eb81fb2f23ec24",
    "title": "Негодяй И Ангел",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/negodyay_i_angel.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-49d6716fd8bcdda6",
    "title": "Всего Лишь Быть",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/vsego_lish_byt.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b07c4d00b498bd62",
    "title": "Последнее письмо",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/poslednee_pismo.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9118dd4fc249b688",
    "title": "Летучая мышь",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/letuchaya_mysh.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-204b198c75881f0d",
    "title": "Путь",
    "artist": "Наутилус Помпилиус",
    "url": "https://karaopa2.ru/karaoke/performer/nautilus_pompilius/put.html",
    "rockGroup": "nautilus",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-99adcdac020b60ca",
    "title": "Группа Крови",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/gruppa_krovi.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9c4f7b07b571727b",
    "title": "Кукушка",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/kukushka.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0065a60124f70bdf",
    "title": "Звезда По Имени Солнце",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/zvezda_po_imeni_solntse.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-086f65f615bb296f",
    "title": "Пачка Сигарет",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/pachka_sigaret.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-647f850d1927fbf0",
    "title": "Видели Ночь",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/videli_noch.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f81dfcea85490768",
    "title": "Хочу Перемен",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/hochu_peremen.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-c998564cd95848f8",
    "title": "Печаль",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/pechal.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-cd0df781d1486c20",
    "title": "Группа Крови (REMIX)",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/gruppa_krovi_remix.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-25133a4894ece718",
    "title": "Восьмиклассница",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/vosmiklassnitsa.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6b7cc329c70c1711",
    "title": "Песня Без Слов",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/pesnya_bez_slov.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6ccf90a1b620e48c",
    "title": "Спокойная Ночь",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/spokoynaya_noch.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-633e3b17d83d02ae",
    "title": "Стук",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/stuk.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-36bf14003a563ca6",
    "title": "Это Не Любовь",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/eto_ne_lyubov.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-71e4ca65500f1baa",
    "title": "Муравейник",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/muraveynik.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-40b283563374ab0e",
    "title": "Нам С Тобой",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/nam_s_toboy.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-be4dba72e70ccff8",
    "title": "Закрой за мной дверь",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/zakroy_za_mnoy_dver.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-1ac88a9c61e64419",
    "title": "Легенда",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/legenda.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ce3c25cce003f032",
    "title": "Апрель",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/aprel.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9f1612140e55a705",
    "title": "Кончится Лето",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/konchitsya_leto.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0fb7d85962d483fe",
    "title": "Невеселая Песня",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/neveselaya_pesnya.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-15a6a45af7729ef4",
    "title": "Атаман",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/ataman.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ac4285e8c65019e2",
    "title": "Сказка",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/skazka.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ae0d6ba192162e04",
    "title": "Попробуй Спеть Вместе Со Мной",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/poprobuy_spet_vmeste_so_mnoy.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e127d355d8ad8305",
    "title": "Игра",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/igra.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0af7725ee06cf835",
    "title": "Когда твоя девушка больна",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/kogdatvoyadevushkabolna.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-8625b93248349cd1",
    "title": "Стань птицей",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/stanpticey.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b5aa0eaa8642f2fe",
    "title": "Фильмы",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/filmy.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ce3e27731ccd38f0",
    "title": "Троллейбус",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/trolleybus.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d42bb1230a4347ae",
    "title": "Красно-желтые дни",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/krasno-zheltye_dni.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-53336184efea2716",
    "title": "Бездельник",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/bezdelnik.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-926db0b1c11c8588",
    "title": "Звезда",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/zvezda.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f7a0b8d7c1437376",
    "title": "Алюминиевые огурцы",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/alyuminievye_ogurtsy.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d724a327432ceec0",
    "title": "Война",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/voyna.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-436dd8e7158561d0",
    "title": "Мама, мы все сошли с ума",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/mamamivsesoshlisuma.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e7f2ee4d9e7f9250",
    "title": "Я Объявляю Свой Дом (Безъядерная Зона)",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/ya_obyavlyayu_svoy_dom_bezyadernaya_zona.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9cfdb852500905d9",
    "title": "Последний герой",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/posledniy_geroy.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3696b7801c19b91e",
    "title": "Сосны На Морском Берегу",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/sosny_na_morskom_beregu.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-740c60e58d872ff1",
    "title": "Дальше действовать будем мы",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/dalshe_deystvovat_budem_my.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-bc72d77c7786a270",
    "title": "В наших глазах",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/v_nashih_glazah.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-bb683f9b28cf5bf7",
    "title": "Следи за собой",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/sledi_za_soboy.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0896b424c620f589",
    "title": "Электричка",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/elektrichka.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6d51045ca8b952dc",
    "title": "Время есть, а денег нет",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/vremya_est__a_deneg_net.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-68eb3f6d487569b5",
    "title": "Мои друзья",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/moi_druzya.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4151af1ef12ab992",
    "title": "Место Для Шага Вперёд",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/mesto_dlya_shaga_vperyod.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e33867a5ca0bba17",
    "title": "Дождь Для Нас",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/dozhd_dlya_nas.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9324b8c5c78c83b7",
    "title": "Бошетунмай",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/boshetunmay.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f3b924e2e6257f61",
    "title": "Ночь",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/noch.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2b50105c3bbf19ab",
    "title": "Мы хотим танцевать",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/my_hotim_tantsevat.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-aec0ba585825a20c",
    "title": "Мама Анархия",
    "artist": "Кино",
    "url": "https://karaopa2.ru/karaoke/performer/kino/mama_anarhiya.html",
    "rockGroup": "kino",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5e167309717d378e",
    "title": "Что Такое Осень",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/osen.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0f2d611d43498634",
    "title": "Это Все",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/eto_vse.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-8e093a8d644fb10f",
    "title": "Осенняя",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/osennyaya.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ae84ec3c4599a94a",
    "title": "Просвистела",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/prosvistela.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3f239cb676cf065a",
    "title": "В Последнюю Осень",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/v_poslednyuyu_osen.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0058b416eb20655c",
    "title": "Дождь",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/dozhd.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-a790f7ee7de6be63",
    "title": "Расстреляли Рассветами",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/rasstrelyali_rassvetami.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9b8b2bec0b697cb0",
    "title": "Потолок",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/potolok.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7286944419cb8b03",
    "title": "Родина",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/rodina.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-dbc9fc1a85610432",
    "title": "Метель",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/metel.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f57b6995d097ef37",
    "title": "Белая река",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/belaya_reka.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-cc860864ca04bcf5",
    "title": "Новая Жизнь",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/novaya_zhizn.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-bfd63a06621a4101",
    "title": "Летели Облака",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/leteli_oblaka.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5df16dff3788d96e",
    "title": "Ты не один",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/ty_ne_odin.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b9ba1dbf6f69a926",
    "title": "Ветер",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/veter.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0ab0e3f1f330695d",
    "title": "Не Стреляй",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/ne_strelyay.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7c50aa06e0c650e7",
    "title": "Я Получил Эту Роль",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/ya_poluchil_etu_rol_.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4c8e38448c862fef",
    "title": "Свобода",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/svoboda.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7f2de3132df2b837",
    "title": "Ларек",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/larek.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-39fe058fe2288f89",
    "title": "Пропавший Без Вести",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/propavshiy_bez_vesti.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e43b064e6d4fb6d1",
    "title": "Любовь Не Пропала",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/lyubov_ne_propala.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9480837de993c731",
    "title": "Я Зажёг В Церквях Все Свечи",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/ya_zazhyog_v_tserkvyah_vse_svechi.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f7e6fd47c76cf544",
    "title": "Черный Пёс Петербург",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/cherny_pyos_peterburg.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-fc9d2d78c91340a8",
    "title": "Если Я Заболею",
    "artist": "ДДТ",
    "url": "https://karaopa2.ru/karaoke/performer/ddt/esli_ya_zaboleyu.html",
    "rockGroup": "ddt",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-99f686aa0f6ca86c",
    "title": "Аргентина Ямайка 5:0",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/argentina_yamayka_5_0.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4f1abf9c2cd8bf21",
    "title": "17 Лет",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/17_let.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9dc073e07984817b",
    "title": "Никто Не Услышит",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/nikto_ne_uslyshit.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-fe79da68bd5bf1e1",
    "title": "Не Спеши",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/ne_speshi.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-387e56039a946e58",
    "title": "Оранжевое Настроение",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/oranzhevoe_nastroenie.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-61b431c40582159c",
    "title": "Поплачь О Нём",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/poplach_o_nyom.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-15c1456465b52c2d",
    "title": "Не Доводи До Предела",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/ne_dovodi_do_predela.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-420cbbab55555faf",
    "title": "В Её Глазах",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/v_eyo_glazah.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-da80c2b77fa1bd49",
    "title": "Время Не Ждет",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/vremya_ne_zhdet.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-a0af2b5a2394417b",
    "title": "Нахреноза",
    "artist": "Чайф",
    "url": "https://karaopa2.ru/karaoke/performer/chayf/nahrenoza.html",
    "rockGroup": "chayf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5780595104aa1dd2",
    "title": "Выхода нет",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/vyhoda_net.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d49855c486d90e75",
    "title": "Романс",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/romans.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-47970df404473161",
    "title": "Мое Сердце (с голосом)",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/moe_serdtse.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-fae1ec56563ec4ea",
    "title": "Орбит Без Сахара",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/orbit_bez_sahara.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ad0823673fd90194",
    "title": "Бонни И Клайд",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/bonni_i_klayd.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0a09e1876c80df25",
    "title": "Новые Люди",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/novye_lyudi.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d23ccc8f085cdad5",
    "title": "Орбит Без Сахара (с голосом)",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/orbit_bez_sahara_s_golosom.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2c9cf21814234411",
    "title": "Двое Не Спят",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/dvoe_ne_spyat.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-aa8b81e0102ef6db",
    "title": "Весь Этот Бред",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/ves_etot_bred.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e2951b9cd54e77d5",
    "title": "Линия Жизни",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/liniya_zhizni.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-295cfc3f76f0f495",
    "title": "Бог Устал Нас Любить",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/bog_ustal_nas_lyubit.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3b1104247d2749ba",
    "title": "Гандбол",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/gandbol.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3313f76bcf0915a0",
    "title": "Письмо",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/pismo.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-26f176bfd1ff81e2",
    "title": "Храм",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/hram.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e67fe684521cbc2a",
    "title": "Феллини",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/fellini.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3224698ed5c9548c",
    "title": "Я Был Влюблён В Вас",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/yabilvlublenvvas.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-a412add210af5573",
    "title": "Звери",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/zveri.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-951b11a1f318497b",
    "title": "Летучий голландец",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/letuchiy_gollandets.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-16cfcfdc14738281",
    "title": "Мы сидели и курили",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/my_sideli_i_kurili.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6d6a7638291946e7",
    "title": "Чудак",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/chudak.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-577986f58f3e6764",
    "title": "Топай!",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/topay.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-23c69cd2822d743b",
    "title": "Лестница",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/lestnitsa.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f4c99164af2a7e54",
    "title": "Остаёмся Зимовать",
    "artist": "Сплин",
    "url": "https://karaopa2.ru/karaoke/performer/splin/ostayomsya_zimovat.html",
    "rockGroup": "splin",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e2744c1544291db4",
    "title": "Искала",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/iskala.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-8cd0caa8735d992c",
    "title": "Прости Меня Моя Любовь",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/prosti_menya_moya_lyubov.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-fcae1d0e9c748e3c",
    "title": "До Свидания",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/do_svidaniya.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-42d7d9ac0e3c6e55",
    "title": "Небо Лондона",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/nebo_londona.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e4d2a7517aea0c17",
    "title": "Ромашки",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/romashki.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f8c1b5d9ada167a2",
    "title": "Трафик",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/trafik.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f84716f0ccc35d9c",
    "title": "Хочешь",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/hochesh.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-26559a27951adbeb",
    "title": "Жди Меня",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/zhdi_menya.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-96a7193b73acb4a0",
    "title": "Знак Бесконечность",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/znak_beskonechnost.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d4f1225c26db1007",
    "title": "Брызги (Дежавю)",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/bryzgi_dezhavyu.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4ad5ec691af2352d",
    "title": "Аривидерчи",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/arividerchi.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-05071dc2e7124285",
    "title": "Не Отпускай",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/ne_otpuskay.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-a81d43fb068adf94",
    "title": "Без Шансов",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/bez_shansov.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ece7f8b8c617a62e",
    "title": "Мы Разбиваемся",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/my_razbivaemsya.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f4b9580644cb267c",
    "title": "Крым",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/krym.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-69d975f976d3c5a3",
    "title": "Почему",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/pochemu.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3fc45c49f18cdf4a",
    "title": "Мачо",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/macho.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-05c36c7658b11d46",
    "title": "Почта",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/pochta.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-a49839166673458a",
    "title": "Webgirl",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/webgirl.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-a617cfdf1648d366",
    "title": "Маечки",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/maechki_.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-68854d0daa91a2c7",
    "title": "Для Тебя",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/dlya_tebya_.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0c3e740de9192163",
    "title": "В Метро",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/v_metro.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-afeea8615abbeae3",
    "title": "Созрела",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/sozrela.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0ff40cd919bd67a1",
    "title": "Камон",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/kamon.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-62a885a3364236e0",
    "title": "Блюз",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/blyuz_.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e9f1cf188a7a7b56",
    "title": "Поцелуи",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/potselui_.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e97ef17e02beba5a",
    "title": "Небомореоблака",
    "artist": "Земфира",
    "url": "https://karaopa2.ru/karaoke/performer/zemfira/nebomoreoblaka.html",
    "rockGroup": "zemfira",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0fd4647871447171",
    "title": "Трасса Е95",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/trassa_e95.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2091032da708b126",
    "title": "Небо Славян",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/nebo_slavyan.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-507ff0c0f273d7b7",
    "title": "Веретено",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/vereteno.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-95f59758eb2423e9",
    "title": "Родина",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/rodina.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f102d2594969d292",
    "title": "Вот Так",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/vot_tak.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-178cff40c6a18f76",
    "title": "Красное На Чёрном",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/krasnoe_na_chyornom.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-bea84f7fa0f54608",
    "title": "Дождь",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/dozhd.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-02fc247066cca87d",
    "title": "Все это Рок-Н-Ролл",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/vsyo_eto_rok-n-roll.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2ee8af0b1edf6302",
    "title": "Мама",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/mama.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-61f3fde7805fb682",
    "title": "Качели",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/kacheli.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-a0e0628f105480cd",
    "title": "Рок-Н-Ролл Крест",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/rok-n-roll_krest.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b9f628a73a8d2972",
    "title": "Белая Невеста",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/belaya_nevesta.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6cf53f0fe21bf07a",
    "title": "Лодка",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/lodka.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7bf31455bebe3dac",
    "title": "Солнце За Нас",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/solntse_za_nas.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6e77cf47d96e72ce",
    "title": "Ко Мне",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/ko_mne.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ae00fac8b67545f4",
    "title": "Крещение",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/kreschenie.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-8634b1665181ffa6",
    "title": "Арифметика",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/arifmetika.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-35916acfbc3e94ca",
    "title": "Армия Жизни",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/armiya_zhizni.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e541c1acbbd6861d",
    "title": "Инок, Воин И Шут",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/inok__voin_i_shut.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b177e8276398adb2",
    "title": "Пересмотри",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/peresmotri.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-c942e69c6b0218ca",
    "title": "Левша",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/levsha.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-da2efc52c6171a10",
    "title": "Апрель",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/aprel.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-472b1aa9b74b4229",
    "title": "Солнце На Блюде",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/solntse_na_blyude_.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-1ce979e45fde2ed3",
    "title": "Рок-Н-Ролл Это Не Работа",
    "artist": "Алиса",
    "url": "https://karaopa2.ru/karaoke/performer/alisa/rok-n-roll_eto_ne_rabota.html",
    "rockGroup": "alisa",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7e2e6fb49db79ca4",
    "title": "Черный Кот",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/cherniy_kot.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-93e48d81675b9412",
    "title": "Этот Город",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/etot_gorod.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-70fa43128ea92205",
    "title": "Любите Девушки",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/lyubite_devushki.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9493ddc227f1fe8b",
    "title": "Дорога В Облака",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/doroga_v_oblaka.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3ef2638dadbdf478",
    "title": "Семь Тысяч Над Землей",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/sem_tysyach_nad_zemley.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-9833ce0eb1a70eed",
    "title": "Я То Что Надо",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/ya_to_chto_nado.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-cfdd35822f01d99d",
    "title": "Жар-Птица",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/zhar-ptitsa.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-13b1b2307fd8a01e",
    "title": "Вася",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/vasya.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6acf0aacccd0a8df",
    "title": "Как Жаль",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/kak_zhal.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2ccf057d9a061247",
    "title": "Ветер Знает",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/veter_znaet.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-80543a411be76adc",
    "title": "Оранжевый Галстук",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/oranzhevy_galstuk.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ac2345e6840a5345",
    "title": "Синее Небо",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/sinee_nebo.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-bfdc7c2b52c9d664",
    "title": "7000 Над Землёй",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/7000_nad_zemlyoy.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3e8365dc4e5a2b86",
    "title": "Добрый Вечер, Москва",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/dobry_vecher__moskva.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b8a9fa42869c8c2b",
    "title": "Заполярный Твист",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/zapolyarny_tvist.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-19d6d432dfc05c98",
    "title": "Там Где Сбываются Сны",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/tam_gde_sbyvayutsya_sny_.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5c55da5da30de778",
    "title": "Москва Нева",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/moskva_neva.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-1291a594af930532",
    "title": "Если бы на Марсе",
    "artist": "Браво",
    "url": "https://karaopa2.ru/karaoke/performer/bravo/eslibinamarse.html",
    "rockGroup": "bravo",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-994c2ab8322fa660",
    "title": "Моя Любовь На Пятом Этаже",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/moya_lyubov_na_pyatom_etazhe.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-823860b5e100655b",
    "title": "Я Люблю Буги Вуги",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/ya_lyublyu_bugi_vugi.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5ea8831de7d3119b",
    "title": "Сара Барабу",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/sara_barabu.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3b478b9a7dfef01d",
    "title": "Привет",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/privet.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-cf89e6604497a1fb",
    "title": "Блюз Бродячих Собак",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/blyuz_brodyachih_sobak.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-20a8f6eb6a4557d0",
    "title": "Ленинградское Время",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/leningradskoe_vremya.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ca02d2b2cb742763",
    "title": "Домой",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/domoy.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0991a50475182b71",
    "title": "Алиса",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/alisa.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f682504d52a17b4b",
    "title": "Ничего Не Исчезает",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/nichego_ne_ischezaet.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-915970394458523e",
    "title": "Твой Папа Был Прав",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/tvoy_papa_byl_prav.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6e7ec0797b62669b",
    "title": "Она Не Понимает",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/ona_ne_ponimaet_.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-1562972bc714f54b",
    "title": "Именины У Кристины",
    "artist": "Секрет",
    "url": "https://karaopa2.ru/karaoke/performer/sekret/imeniny_u_kristiny.html",
    "rockGroup": "sekret",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e09eb3ed608086ea",
    "title": "Египтянин",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/egiptyanin.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-007a412b583d750f",
    "title": "Кукла С Человеческим Лицом",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/kukla_s_chelovecheskim_litsom.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-74f5324f67218e0d",
    "title": "Игла",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/igla.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-fdadc23d9b5ee918",
    "title": "Из Мышеловки",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/iz_myshelovki.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5722e71d81a278c2",
    "title": "У Шамана Три Руки",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/u_shamana_tri_ruki.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f641b020d56144bb",
    "title": "Королевство Кривых",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/korolevstvo_krivyh.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-af08a568acc8b9cd",
    "title": "На Краю Земли",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/na_krayu_zemli.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-fe88b08ecd9a00f0",
    "title": "Фиолетово-Чёрный",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/fioletovo-chyorny.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0fc93e5dfdc286f3",
    "title": "А Может Быть И Не Было Меня",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/a_mozhet_byt_i_ne_bylo_menya.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5d85667be3ea34c6",
    "title": "Разноцветные Ленты",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/raznotsvetnye_lenty.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4bc247e67b3f3a53",
    "title": "Серебра",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/serebra.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d6660e4d2627d955",
    "title": "Лишь Влюблённому Вампиру",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/lish_vlyublyonnomu_vampiru.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f67b85e909211e17",
    "title": "Инкогнито",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/inkognito.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7c819331ebd5a206",
    "title": "Мы Как Трепетные Птицы",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/my_kak_trepetnye_ptitsy.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f2db714a7495b400",
    "title": "Танго Черная Каракатица",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/tango_chernaya_karakatitsa.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-82cc0284005b0ecf",
    "title": "Герой",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/geroy.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f61bb8c5d247143b",
    "title": "Иероглиф",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/ieroglif.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-24c49a6b63b458f3",
    "title": "Вплети Меня В Свое Кружево",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/vpleti_menya_v_svoe_kruzhevo.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-eec301a6178f57ae",
    "title": "Колдыри Да Колдобины",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/koldyri_da_koldobiny.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f79f600ceaa88ef6",
    "title": "Бетховен",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/bethoven.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-980406bd70389ef6",
    "title": "Великан",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/velikan.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b400248a91221f35",
    "title": "Ночь",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/noch.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-628e9df2eaaaf997",
    "title": "Я Почти Итальянец",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/ya_pochti_italyanets.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-b86380e99b597bf1",
    "title": "Все Хорошо",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/vse_horosho.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-6af6354bd7f1bc05",
    "title": "Деньги",
    "artist": "Пикник",
    "url": "https://karaopa2.ru/karaoke/performer/piknik/dengi.html",
    "rockGroup": "piknik",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-684f683ea7e2755b",
    "title": "Я Люблю",
    "artist": "Автограф",
    "url": "https://karaopa2.ru/karaoke/performer/aftograf/ya_lyublyu.html",
    "rockGroup": "avtograf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-1a9e934de6aca906",
    "title": "Беспечный Ангел",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/bespechny_angel.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5165cf6e03b8cdda",
    "title": "Я Свободен",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/ya_svoboden.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-abf5ff48b5e12244",
    "title": "Штиль",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/shtil.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-60f29970fb991139",
    "title": "Потерянный Рай",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/poteryany_ray.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-30f1b258c2677941",
    "title": "Возьми Мое Сердце",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/vozmi_moe_serdtse.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-de1c04df284909ec",
    "title": "Осколок Льда",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/oskolok_lda.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-53cd850b985508b8",
    "title": "Улица Роз",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/ulitsa_roz.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-32bdb0c555bfe62c",
    "title": "Ангельская Пыль",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/angelskaya_pyl.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5e9923caf2710a98",
    "title": "Закат",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/zakat.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-988129a1017c4aae",
    "title": "Я Здесь",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/ya_zdes.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e9d80871d8d705ad",
    "title": "Без Тебя",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/bez_tebya.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-1138dfe34abe7214",
    "title": "Я Не Сошел С Ума",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/ya_ne_soshel_s_uma.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-c5ca95ebfaff36c1",
    "title": "Колизей",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/kolizey.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4afd2b7824e73156",
    "title": "Грязь",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/gryaz.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ba22f683e793159a",
    "title": "Свет Былой Любви",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/svet_byloy_lyubvi.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-77c2c716e40cefa7",
    "title": "Пробил Час",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/probil_chas.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0f03955fa167c1fa",
    "title": "Вавилон",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/vavilon.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-a7147964409a12e8",
    "title": "Все Что Было",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/vse_chto_bylo.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-aee79a9a06c15cc0",
    "title": "Тореро",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/torero.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-df1a4e60ad55423d",
    "title": "Баллада О Древнерусском Воине",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/ballada_o_drevnerusskom_voine.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-5d3018f73800c371",
    "title": "Воля И Разум",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/volya_i_razum.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-d1112921b360633e",
    "title": "Герой Асфальта",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/geroy_asfalta.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-14360d80ec7f21ee",
    "title": "Антихрист",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/antihrist.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-57a6c14097d58c53",
    "title": "Встань Страх Преодолей",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/vstan_strah_preodoley.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-af07a7f881559f2a",
    "title": "Игра С Огнем",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/igra_s_ognem.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3dc877d935c2319f",
    "title": "1100",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/1100.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-68622cbcac06d959",
    "title": "Небо Тебя Найдет",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/nebo_tebya_naydet.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ff61845a648e39c8",
    "title": "Искушение",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/iskushenie.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-0394be50258d118d",
    "title": "Кровь За Кровь",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/krov_za_krov.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-22a52112bcb07b6d",
    "title": "Дезертир",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/dezertir.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-263357febbc3ff89",
    "title": "Бал У Князя Тьмы",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/bal_u_knyazya_tmy.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-50bde8ed2757ecfe",
    "title": "Ночь Короче Дня",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/noch_koroche_dnya.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-85e07de52391577d",
    "title": "Бесы",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/besy.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-61fc9a0b51826cf9",
    "title": "Castlevania",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/castlevania.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-7fa9a000b0e12e2a",
    "title": "Реки Времени",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/reki_vremeni.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-3e2efacda82320c6",
    "title": "Палач",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/palach.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-29c129fdbe5fb290",
    "title": "Химера",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/himera.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f1e14d957b2c47ec",
    "title": "Раб Страха",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/rab_straha.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4913efc9a7ad4bca",
    "title": "Не Хочешь - Не Верь Мне",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/ne_hochesh_-_ne_ver_mne.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-2f16554923ed6a79",
    "title": "Пытка Тишиной",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/pytka_tishinoy.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-90890fe16ce6a6e3",
    "title": "Мертвая Зона",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/mertvaya_zona.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-ac21e3c5f4b01534",
    "title": "Такая Вот Печаль",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/takaya_vot_pechal.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4df2a27456078670",
    "title": "Бивни Черных Скал",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/bivni_chernyh_skal.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-e1fcb4fed2780e9a",
    "title": "Горящая Стрела",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/goryaschaya_strela.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4b295eb045555b2c",
    "title": "Волонтер",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/volonter.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-4674a739475438ed",
    "title": "Игры Не Для Вас",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/igry_ne_dlya_vas.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-f610ccca16134d73",
    "title": "Там Высоко",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/tam_vysoko.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-43604bfe1a8b6baf",
    "title": "Точка Невозврата",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/tochka_nevozvrata.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-abccecb0103fbfe7",
    "title": "Паранойя",
    "artist": "Ария",
    "url": "https://karaopa2.ru/karaoke/performer/ariya/paranoyya.html",
    "rockGroup": "ariya",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "rock-df8b146ee71f2bcf",
    "title": "Как Молоды Мы Были",
    "artist": "Александр Градский",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_gradskiy/kak_molody_my_byli.html",
    "rockGroup": "gradskiy",
    "kind": "Русский рок",
    "categories": [
      "rurock",
      "rupop"
    ],
    "source": "Караопа2",
    "popGroups": [
      "gradsky"
    ]
  },
  {
    "id": "rock-da30a7538c544690",
    "title": "Мусорный ветер",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=1wpc8mudeNk",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-26b871b2a5ac55a9",
    "title": "Маленькая девочка",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=m8CIyNpbse0",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-492bab0131b66b13",
    "title": "2001 год",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=rgxdWaGg9Xo",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-39f406f9dd1b36c4",
    "title": "Таня",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=AebGTzO08qc",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-1dec46a058b7c9fd",
    "title": "Клубника со льдом",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=fOHYfpVKig0",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-a699070c47c163ca",
    "title": "Сексуальная кошка",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=84V2FmC_le0",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-01a32149c01379af",
    "title": "Лепрозорий",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=GUMEJtYjVgg",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-7352a05e01afaaea",
    "title": "Хабибулин",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=aTzLYbnkADA",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-5a5fae8abf085c2c",
    "title": "Безобразная Эльза",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=9JIl3LTCmCU",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-93d69f8d46d2c24e",
    "title": "Смерти больше нет",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=zxhtnDLe4_s",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-1a09da9411b72cad",
    "title": "Яд",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=HUs_vv8YdJQ",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-94dd755c567d5b2f",
    "title": "Америка",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=vwwKVr6fCIk",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-1adcf4caef0ba29b",
    "title": "Аутсайдер",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=R4u4-yeB29k",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-d8e52f0b33276d20",
    "title": "Последний шанс",
    "artist": "Крематорий",
    "url": "https://www.youtube.com/watch?v=fLLyvtJumIU",
    "rockGroup": "krematoriy",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-a2c96962375d296f",
    "title": "Музыкант",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=xvp4MksOlMU",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-08905a78018f68bc",
    "title": "Кто виноват",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=oCfKxTwYSdk",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-3cba2cc8dd6ea219",
    "title": "Сон",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=zBUxXPFVXXU",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-5cbf7df054cdab66",
    "title": "По Дороге Разочарований",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=oL8H_UDDQl8",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-731df00e00179340",
    "title": "Мой друг художник и поэт",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=QC_vvq7GCqM",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-fb564d9f501a9e77",
    "title": "Ветерок",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=7_f3MVQXatA",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-481b1377ac99b929",
    "title": "Я Тоже Был",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=AE6YJnPnLZw",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-652383f652ae8c5c",
    "title": "В моей душе",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=I6KdgVeyzlQ",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-43a719d1bd156efd",
    "title": "Один взгляд назад",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=82aQ_MKmZdA",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-54eac19d16b32f9a",
    "title": "Не оставь меня",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=fRBRoL9yTYA",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-ddc0fa456f86c16b",
    "title": "Я Привык Бродить Один",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=5nVWbmEdj1s",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-04546c933abd70d5",
    "title": "Птицы белые мои",
    "artist": "Воскресение",
    "url": "https://www.youtube.com/watch?v=dgXvbditTIQ",
    "rockGroup": "voskresenie",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-b5db01f3ceeec2fc",
    "title": "Странник",
    "artist": "Автограф",
    "url": "https://www.youtube.com/watch?v=hq9jmJXYP2I",
    "rockGroup": "avtograf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-03c4d2b32c94cdba",
    "title": "Город",
    "artist": "Автограф",
    "url": "https://www.youtube.com/watch?v=7tTnJhFKtgA",
    "rockGroup": "avtograf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-6117ac47884357a3",
    "title": "ВЧЕРАШНИЙ ДЕНЬ",
    "artist": "Автограф",
    "url": "https://www.youtube.com/watch?v=GlhG48fP9X0",
    "rockGroup": "avtograf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-b4069230a9298b34",
    "title": "Старинная баллада",
    "artist": "Автограф",
    "url": "https://www.youtube.com/watch?v=-YKPu1Xh-Ho",
    "rockGroup": "avtograf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-6451a1a0e96ad8fc",
    "title": "Каменный рай",
    "artist": "Автограф",
    "url": "https://www.youtube.com/watch?v=hiQS4hsOygo",
    "rockGroup": "avtograf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-5134783e08e843f2",
    "title": "В мастерской",
    "artist": "Автограф",
    "url": "https://www.youtube.com/watch?v=GW1anNMb3MI",
    "rockGroup": "avtograf",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-dfc83eabbec5b195",
    "title": "Пылает за окном звезда",
    "artist": "Чёрный кофе",
    "url": "https://www.youtube.com/watch?v=yD8tDYFr5fg",
    "rockGroup": "cherniy-kofe",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-5bb05707987bbe2b",
    "title": "Листья",
    "artist": "Чёрный кофе",
    "url": "https://www.youtube.com/watch?v=m--X39aOoss",
    "rockGroup": "cherniy-kofe",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-f93acaae1544bb52",
    "title": "Владимирская Русь",
    "artist": "Чёрный кофе",
    "url": "https://www.youtube.com/watch?v=RM9evqdYiXI",
    "rockGroup": "cherniy-kofe",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-20550c396edf5688",
    "title": "Леди Осень",
    "artist": "Чёрный кофе",
    "url": "https://www.youtube.com/watch?v=BVH23eutnDs",
    "rockGroup": "cherniy-kofe",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-d9c12b07f73aa598",
    "title": "Ночь",
    "artist": "Чёрный кофе",
    "url": "https://www.youtube.com/watch?v=DAzbKQD-TeI",
    "rockGroup": "cherniy-kofe",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-6277bd9c2790cdcb",
    "title": "Мы не ждали перемен",
    "artist": "Александр Градский",
    "url": "https://www.youtube.com/watch?v=4t32DA3lEYQ",
    "rockGroup": "gradskiy",
    "kind": "Русский рок",
    "categories": [
      "rurock",
      "rupop"
    ],
    "source": "YouTube",
    "popGroups": [
      "gradsky"
    ]
  },
  {
    "id": "rock-a3d06b303b2e0bff",
    "title": "Южная Прощальная",
    "artist": "Александр Градский",
    "url": "https://www.youtube.com/watch?v=05gqtR-HZx8",
    "rockGroup": "gradskiy",
    "kind": "Русский рок",
    "categories": [
      "rurock",
      "rupop"
    ],
    "source": "YouTube",
    "popGroups": [
      "gradsky"
    ]
  },
  {
    "id": "rock-304b2d369c00fbe7",
    "title": "Нам Не Жить Друг Без Друга",
    "artist": "Александр Градский",
    "url": "https://www.youtube.com/watch?v=coS3GW5TVgA",
    "rockGroup": "gradskiy",
    "kind": "Русский рок",
    "categories": [
      "rurock",
      "rupop"
    ],
    "source": "YouTube",
    "popGroups": [
      "gradsky"
    ]
  },
  {
    "id": "rock-8650896bf27e03f8",
    "title": "Песня о птицах",
    "artist": "Александр Градский",
    "url": "https://www.youtube.com/watch?v=s9_6KeSVKdw",
    "rockGroup": "gradskiy",
    "kind": "Русский рок",
    "categories": [
      "rurock",
      "rupop"
    ],
    "source": "YouTube",
    "popGroups": [
      "gradsky"
    ]
  },
  {
    "id": "rock-7a95211504948983",
    "title": "Песня о Друге",
    "artist": "Александр Градский",
    "url": "https://www.youtube.com/watch?v=SbJ2iOKp4pk",
    "rockGroup": "gradskiy",
    "kind": "Русский рок",
    "categories": [
      "rurock",
      "rupop"
    ],
    "source": "YouTube",
    "popGroups": [
      "gradsky"
    ]
  },
  {
    "id": "rock-2fc193ff7c49d147",
    "title": "Жил Был Я",
    "artist": "Александр Градский",
    "url": "https://www.youtube.com/watch?v=0hAch6runwk",
    "rockGroup": "gradskiy",
    "kind": "Русский рок",
    "categories": [
      "rurock",
      "rupop"
    ],
    "source": "YouTube",
    "popGroups": [
      "gradsky"
    ]
  },
  {
    "id": "rock-b20c6799673b8e64",
    "title": "Песня Без Названия",
    "artist": "Александр Градский",
    "url": "https://www.youtube.com/watch?v=sQEaySc0es8",
    "rockGroup": "gradskiy",
    "kind": "Русский рок",
    "categories": [
      "rurock",
      "rupop"
    ],
    "source": "YouTube",
    "popGroups": [
      "gradsky"
    ]
  },
  {
    "id": "rock-4154a1a2a528ce57",
    "title": "Я смысл этой жизни вижу в том",
    "artist": "Андрей Макаревич",
    "url": "https://www.youtube.com/watch?v=oIClPandt68",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-cd3619ab22cd31a1",
    "title": "Памяти В Высоцкого",
    "artist": "Андрей Макаревич",
    "url": "https://www.youtube.com/watch?v=tZkgbufKoe8",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-1b8a097383e4d9cb",
    "title": "Паузы",
    "artist": "Андрей Макаревич",
    "url": "https://www.youtube.com/watch?v=NapZ89OVCkY",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "rock-e2687321cb6a2443",
    "title": "Перекресток семи дорог",
    "artist": "Андрей Макаревич",
    "url": "https://www.youtube.com/watch?v=qJstZTqUZRk",
    "rockGroup": "mashina",
    "kind": "Русский рок",
    "categories": [
      "rurock"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-f1e992cef0dfd01b",
    "title": "Грузинская Песня",
    "artist": "Булат Окуджава",
    "url": "https://karaopa2.ru/karaoke/performer/bulat_okudzhava/gruzinskaya_pesnya.html",
    "bardGroups": [
      "okudzhava"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-5cb1f5038f2595ec",
    "title": "Молитва",
    "artist": "Булат Окуджава",
    "url": "https://karaopa2.ru/karaoke/performer/bulat_okudzhava/molitva_.html",
    "bardGroups": [
      "okudzhava",
      "campfire"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-e00bdafe6b536851",
    "title": "Бери Шинель Пошли Домой",
    "artist": "Булат Окуджава",
    "url": "https://karaopa2.ru/karaoke/performer/bulat_okudzhava/beri_shinel_poshli_domoy.html",
    "bardGroups": [
      "okudzhava"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-7edfbb82816f8e88",
    "title": "Надежды Маленький Оркестрик",
    "artist": "Булат Окуджава",
    "url": "https://karaopa2.ru/karaoke/performer/bulat_okudzhava/nadezhdy_malenkiy_orkestrik.html",
    "bardGroups": [
      "okudzhava"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-0cd110f467aa187a",
    "title": "Часовые Любви",
    "artist": "Булат Окуджава",
    "url": "https://karaopa2.ru/karaoke/performer/bulat_okudzhava/chasovye_lyubvi.html",
    "bardGroups": [
      "okudzhava"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-82a2031a5b269c26",
    "title": "Бумажный Солдатик",
    "artist": "Булат Окуджава",
    "url": "https://karaopa2.ru/karaoke/performer/bulat_okudzhava/bumazhny_soldatik.html",
    "bardGroups": [
      "okudzhava",
      "campfire"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-fc2d5442c46aa140",
    "title": "Живописцы",
    "artist": "Булат Окуджава",
    "url": "https://karaopa2.ru/karaoke/performer/bulat_okudzhava/zhivopistsy.html",
    "bardGroups": [
      "okudzhava"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-1908d6734a30b677",
    "title": "Песня О Друге",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pesnya_o_druge.html",
    "bardGroups": [
      "vysotsky",
      "campfire"
    ],
    "kind": "Барды",
    "categories": [
      "bards",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Вертикаль",
    "screenType": "film"
  },
  {
    "id": "bard-e1e7e14b2b126dd9",
    "title": "Здесь Вам Не Равнина",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/zdes_vam_ne_ravnina.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-64313bf469cafaaa",
    "title": "О Переселении Душ",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/o_pereselenii_dush.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-f8fa3a4584fa5782",
    "title": "Кони Привередливые",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/koni_priveredlivye.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-8036dd1e5f0045a2",
    "title": "Песенка О Слухах",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pesenka_o_sluhah.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-d54b7e34abf3034d",
    "title": "Он Не Вернулся Из Боя",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/on_ne_vernulsya_iz_boya.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-056bba52d1fba6bf",
    "title": "Баллада О Любви",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/ballada_o_lyubvi.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-adc35e4011d964ff",
    "title": "Лирическая",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/liricheskaya.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-365a2a9f5812d623",
    "title": "Охота На Волков",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/ohota_na_volkov_.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-a5d2370b17e600fe",
    "title": "Я Не Люблю",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/ya_ne_lyublyu.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-1aa40496d6b3c489",
    "title": "Ноль Семь",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/nol_sem.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-78dc509ca2584324",
    "title": "Моя Цыганская",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/moya_tsyganskaya.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-86ee772be0ec0bff",
    "title": "Як-Истребитель",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/yak-istrebitel.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-c2310f6bf8dd6ff0",
    "title": "Купола",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/kupola.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-62bc2641cb57885b",
    "title": "Тот Кто С Нею Раньше Был",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/tot_kto_s_neyu_ranshe_byl.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-b7f50f359488932e",
    "title": "Чужая Колея",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/chuzhaya_koleya.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-b610cd307fdfbbab",
    "title": "Дом Хрустальный",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/domhrustalniy.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-5f7688f1fa885c64",
    "title": "На Большом Каретном",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/nabolshomkaretnom.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-c0658ab61751b08c",
    "title": "За меня невеста отрыдает честно",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/nevestaotridaet.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-45d1ebaabf258b89",
    "title": "Мы Вращаем Землю",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/mivrashaemzemlu.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-f126b4f020e9c1f4",
    "title": "Вершина",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/vershina.html",
    "bardGroups": [
      "vysotsky",
      "campfire"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-5234ac870a6d8136",
    "title": "Баллада о борьбе",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/balladaoborbe.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-3f3c0dff3594a6ab",
    "title": "Честь шахматной короны",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/chestshahmatnoykoroni.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-4539d82e48bab6a9",
    "title": "Белый Вальс",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/beliyvals.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-17e63abaed0b5ee8",
    "title": "Ещё Не Вечер",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/eshenevecher.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-5e07b6fca6dd98d6",
    "title": "Штрафные Батальоны",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/shrafniebatalioni.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-364ff853f68711c6",
    "title": "Здесь лапы у елей дрожат на весу",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/zdeslapiueleydrozhatnavesu.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-c1da3461feec42d2",
    "title": "Про Кука",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/prokuka.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-67d42334adcb3f2c",
    "title": "О Знаках Зодиака",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/oznakahzodiaca.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-14f342e49c3be6f9",
    "title": "Тот, Который Не Стрелял",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/totkotoriynestrelal.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-582067e49809ad7d",
    "title": "Баллада об уходе в рай",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/balladaobuhodevray.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-c2f78da1c449af65",
    "title": "Милицейский Протокол",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/miliceyaskiyprotokol.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-1f3d0ac55d4d4146",
    "title": "Бабье лето",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/babieleto.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-1898a40eda4de9eb",
    "title": "Жили-были на море",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/zhilibilinamore.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-1c2d1ddc02bd025b",
    "title": "Одна Научная Загадка",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/odnanauchnayazagadka.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-3e56d5b90ee1a89e",
    "title": "Канатоходец",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/kanatohodec.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-8d732af87c79eac9",
    "title": "Банька по-белому",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/bankapobelomu.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-4180d9476c792382",
    "title": "Смотрины",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/smotrini.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-28d55b4486e2ed18",
    "title": "Песня Лётчика-Истребителя",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pesnyaletchikaistrebitelya.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-675338162caf7d43",
    "title": "Корабли постоят",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/korablipostoyat.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-cd2967b9927cc952",
    "title": "Ну вот, Исчезла Дрож В Руках",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/nuvot.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-44bc55077cc225e6",
    "title": "Баллада о детстве",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/balladaodetstve.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-994023b4599d072b",
    "title": "Весёлая Покойницкая",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/veselayapokoynica.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-34491f16f8e69b86",
    "title": "Братские могилы",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/bratskiemogili.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-8f93cb81bbd9a97d",
    "title": "Скалолазка",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/skalolazka.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-63786e80bb5a5935",
    "title": "В Далёком Созвездии Тау Кита",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/vdalekomsozvezdii.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-42c537d79e6a4ea8",
    "title": "Белое безмолвие",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/beloebezmolvie.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-a8c814b20c4266d0",
    "title": "Утренняя Гимнастика",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/utrenyaagimnastika.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-6d715dc1a6db5662",
    "title": "Я Вышел Ростом И Лицом",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/yavishelrostomilicom.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-e7252550433bacc8",
    "title": "Две Судьбы",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/dvesudbi.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-4df91f2798264edb",
    "title": "Спасите Наши Души",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/spasitenashidushi.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-97c7544efee78d2c",
    "title": "Дорогая Передача",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/dorogayaperedacha.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-6a923b7245a07618",
    "title": "Песня Кэрролла",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pesnyakarolla.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-f5b1b632743a8caa",
    "title": "Песня Попугая",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pesnyapopugaya.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-5671b541f4434c77",
    "title": "Песенка О Старой Одессе",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pesenkaostaroyodesse.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-2ef4c711ea029f88",
    "title": "Диалог В Цирке",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/dialogvcirke.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-03273d9952991a9c",
    "title": "Песня О Судьбе",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pesnyaosudbe.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-d214ab587e921dda",
    "title": "Песенка про мангустов",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pesenkapromangustinov.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-1b7150c8089c24c7",
    "title": "Она Была В Париже",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/onabilavparizhe.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-7ed43e86dc5677dc",
    "title": "Что Случилось В Африке",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/chtosluchilosvafruke.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-3429ecd6e4d6780a",
    "title": "Бег Иноходца",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/beginohodca.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-78cf17017ae3e376",
    "title": "Горизонт",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/gorizont.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-c3fc454deb03a5a8",
    "title": "Сказка о несчастных лесных жителях",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/skazkaoneshastnihlesnihzhitelah.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-c791bb76bc17d6af",
    "title": "Москва-Одесса",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/moskvaodessa.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-41ee5d63f5457904",
    "title": "Куплеты Гусева",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/kupletiguseva.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-dfb2ea8c8ec45286",
    "title": "Певец У Микрофона",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pevecumikrofona.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-b0ccf59730889f53",
    "title": "К 15-летию Театра на Таганке",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/teatrnataganke.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-b8c95cb2afe3d17c",
    "title": "Чёрное Золото",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/chernoezoloto.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-5dbacb376dcde12d",
    "title": "Холода, Холода",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/holodaholoda.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-01d754cad8358b48",
    "title": "Человек За Бортом",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/chelovekzabortom.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-a285b10143a440e6",
    "title": "Письмо С Сельхозвыставки",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pismosselhozvistavki.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-ff93cd3013ff4a1b",
    "title": "Затяжной Прыжок",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/zatyazhnoyprizhok.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-3dfc0ea2a110101a",
    "title": "Сначала Было Слово",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/snachalabiloslovo.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-f68e7af6289876c8",
    "title": "Вариации На Цыганские Темы",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/variaciinaciganskietemi.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-ce650f399d1cb4ee",
    "title": "Марш Антиподов",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/marshantipodov.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-ff2433acd603b870",
    "title": "Погоня",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/pogonya.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-920251469bc27c9d",
    "title": "А мы живем в мертвящей пустоте",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/a_my_zhivem_v_mertvyaschey_pustote.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-c8cdfcebc6c60aab",
    "title": "Ударил первым я тогда",
    "artist": "Владимир Высоцкий",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_vysotskiy/udaril_pervym_ya_togda.html",
    "bardGroups": [
      "vysotsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-5f0defe629f46863",
    "title": "Я Спросил У Ясеня",
    "artist": "Сергей и Татьяна Никитины",
    "url": "https://karaopa2.ru/karaoke/performer/sergey_i_tatyana_nikitiny/ya_sprosil_u_yasenya.html",
    "bardGroups": [
      "nikitiny"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-0645560b204ecfb0",
    "title": "Большой Секрет",
    "artist": "Сергей и Татьяна Никитины",
    "url": "https://karaopa2.ru/karaoke/performer/sergey_i_tatyana_nikitiny/bolshoy_sekret.html",
    "bardGroups": [
      "nikitiny"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-53e0c967b7ddfd44",
    "title": "Никого Не Будет В Доме",
    "artist": "Сергей и Татьяна Никитины",
    "url": "https://karaopa2.ru/karaoke/performer/sergey_i_tatyana_nikitiny/nikogo_ne_budet_v_dome.html",
    "bardGroups": [
      "nikitiny"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-a5e8b088c6b6dbbc",
    "title": "Александра",
    "artist": "Сергей и Татьяна Никитины",
    "url": "https://karaopa2.ru/karaoke/performer/sergey_i_tatyana_nikitiny/aleksandra.html",
    "bardGroups": [
      "nikitiny",
      "campfire"
    ],
    "kind": "Барды",
    "categories": [
      "bards",
      "films"
    ],
    "source": "Караопа2",
    "movie": "Москва слезам не верит",
    "screenType": "film"
  },
  {
    "id": "bard-744adaa1b76b9d2e",
    "title": "Большой Лошадиный Секрет",
    "artist": "Сергей и Татьяна Никитины",
    "url": "https://karaopa2.ru/karaoke/performer/sergey_i_tatyana_nikitiny/bolshoy_loshadiny_sekret.html",
    "bardGroups": [
      "nikitiny"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-c1129b1f3cb8e4eb",
    "title": "Сильнее Кошки Зверя Нет",
    "artist": "Сергей Никитин",
    "url": "https://karaopa2.ru/karaoke/performer/sergey_nikitin/silneekoshkizveryanet.html",
    "bardGroups": [
      "nikitiny"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-de5427f1d91d3d47",
    "title": "Изгиб Гитары Желтой",
    "artist": "Олег Митяев",
    "url": "https://karaopa2.ru/karaoke/performer/oleg_mityaev/izgib_gitary_zheltoy.html",
    "bardGroups": [
      "campfire",
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2",
    "aliases": "Изгиб гитары жёлтой (Как здорово)"
  },
  {
    "id": "bard-065f3e3674eef4fc",
    "title": "Лето Это Маленькая Жизнь",
    "artist": "Олег Митяев",
    "url": "https://karaopa2.ru/karaoke/performer/oleg_mityaev/leto_eto_malenkaya_zhizn.html",
    "bardGroups": [
      "campfire",
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2",
    "aliases": "Лето — это маленькая жизнь"
  },
  {
    "id": "bard-02a6c5f9022e2b5b",
    "title": "Любовь и разлука",
    "artist": "Булат Окуджава",
    "url": "https://www.youtube.com/watch?v=9etV8sk-yPs",
    "bardGroups": [
      "okudzhava"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-168139af98d4251d",
    "title": "Песенка об Арбате",
    "artist": "Булат Окуджава",
    "url": "https://www.youtube.com/watch?v=akJhAcfiAmw",
    "bardGroups": [
      "okudzhava"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-5df8b408659c8611",
    "title": "До свидания, мальчики",
    "artist": "Булат Окуджава",
    "url": "https://www.youtube.com/watch?v=nRiI3RkCU64",
    "bardGroups": [
      "okudzhava"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-47163fa98855aa3f",
    "title": "У Курского вокзала",
    "artist": "Булат Окуджава",
    "url": "https://www.youtube.com/watch?v=wbQYyfNZvYg",
    "bardGroups": [
      "okudzhava"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-259d306153e73225",
    "title": "Брич-Мулла",
    "artist": "Сергей Никитин",
    "url": "https://www.youtube.com/watch?v=uDnbpNQjHlI",
    "bardGroups": [
      "nikitiny"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-c1b846c56787c8c8",
    "title": "Диалог у новогодней ёлки",
    "artist": "Сергей и Татьяна Никитины",
    "url": "https://www.youtube.com/watch?v=2fg4aNtLG9Y",
    "bardGroups": [
      "nikitiny"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-8e86e2316c0f1f1a",
    "title": "Большой секрет для маленькой компании",
    "artist": "Сергей Никитин",
    "url": "https://www.youtube.com/watch?v=_UB69q5Zr70",
    "bardGroups": [
      "nikitiny"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-2eadfdde14c32e50",
    "title": "Старательский вальсок",
    "artist": "Александр Галич",
    "url": "https://www.youtube.com/watch?v=qmGJxeeAQ18",
    "bardGroups": [
      "galich"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-4232c215f446dd30",
    "title": "Спрашивайте Мальчики Спрашивайте",
    "artist": "Александр Галич",
    "url": "https://www.youtube.com/watch?v=OqR-azLRtBk",
    "bardGroups": [
      "galich"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-920701c430574f28",
    "title": "Песня о Синей Птице",
    "artist": "Александр Галич",
    "url": "https://www.youtube.com/watch?v=Vh447_6_jMQ",
    "bardGroups": [
      "galich"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-000308f930fc2eca",
    "title": "Баллада о Вечном Огне",
    "artist": "Александр Галич",
    "url": "https://www.youtube.com/watch?v=xjUj0UgSeRo",
    "bardGroups": [
      "galich"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-e54459403a12fa94",
    "title": "Петербургский Романс",
    "artist": "Александр Галич",
    "url": "https://www.youtube.com/watch?v=t1lIDQjpYbU",
    "bardGroups": [
      "galich"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-b8f9e1da6dece074",
    "title": "Кефирный рок-н-ролл",
    "artist": "Тимур Шаов",
    "url": "https://www.youtube.com/watch?v=i4Bx5vkvUek",
    "bardGroups": [
      "shaov"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-75329175cab2bd52",
    "title": "Белая гвардия",
    "artist": "Зоя Ященко / Белая гвардия",
    "url": "https://www.youtube.com/watch?v=f7OosBxDnvc",
    "bardGroups": [
      "yashchenko"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-968121683262b5f9",
    "title": "Сумасшедший вечер",
    "artist": "Зоя Ященко / Белая гвардия",
    "url": "https://www.youtube.com/watch?v=YmONKkf3tgU",
    "bardGroups": [
      "yashchenko"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-2ef3a3c10aaf8ffe",
    "title": "Летят воздушные шары",
    "artist": "Зоя Ященко / Белая гвардия",
    "url": "https://www.youtube.com/watch?v=JxRSo8_rNY4",
    "bardGroups": [
      "yashchenko"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-b74663580d68d0aa",
    "title": "Плясовая",
    "artist": "Зоя Ященко / Белая гвардия",
    "url": "https://www.youtube.com/watch?v=2_QYWnMyDf8",
    "bardGroups": [
      "yashchenko"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-d06424e000925fe4",
    "title": "Солнышко лесное",
    "artist": "Юрий Визбор",
    "url": "https://www.youtube.com/watch?v=7tdYrmhbGyU",
    "bardGroups": [
      "campfire",
      "vizbor"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube",
    "aliases": "Солнышко лесное (Милая моя)"
  },
  {
    "id": "bard-f02e61cdfa71815c",
    "title": "Ты У Меня Одна",
    "artist": "Юрий Визбор",
    "url": "https://www.youtube.com/watch?v=oOJDwRFlbrY",
    "bardGroups": [
      "campfire",
      "vizbor"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube",
    "aliases": "Ты у меня одна"
  },
  {
    "id": "bard-9112c4bd01bed18b",
    "title": "За туманом",
    "artist": "Юрий Кукин",
    "url": "https://www.youtube.com/watch?v=7B7TrfVEStI",
    "bardGroups": [
      "campfire",
      "kukin"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-ac28edffa2aa736b",
    "title": "Зелёная карета",
    "artist": "Александр Суханов",
    "url": "https://www.youtube.com/watch?v=w6nQXeySXJg",
    "bardGroups": [
      "campfire"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-098ea11152693b3e",
    "title": "С добрым утром, любимая!",
    "artist": "Олег Митяев",
    "url": "https://karaopa2.ru/karaoke/performer/oleg_mityaev/s_dobrym_utrom__lyubimaya.html",
    "bardGroups": [
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-f54c4139a615f52c",
    "title": "Небесный калькулятор",
    "artist": "Олег Митяев",
    "url": "https://karaopa2.ru/karaoke/performer/oleg_mityaev/nebesny_kalkulyator.html",
    "bardGroups": [
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-ef330aa2dc9a4cd9",
    "title": "Бригантина",
    "artist": "Юрий Визбор",
    "url": "https://www.youtube.com/watch?v=2HPzWQjhOLI",
    "bardGroups": [
      "vizbor"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-72408f77da6e1eb6",
    "title": "Песня о подводниках",
    "artist": "Юрий Визбор",
    "url": "https://www.youtube.com/watch?v=J2g2LFJg3s0",
    "bardGroups": [
      "vizbor"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-e7f14a04a9f3c290",
    "title": "Люди идут по свету",
    "artist": "Юрий Визбор",
    "url": "https://www.youtube.com/watch?v=Ie9z6UR2FqU",
    "bardGroups": [
      "vizbor"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-ab4991be95fad337",
    "title": "Француженка",
    "artist": "Олег Митяев",
    "url": "https://www.youtube.com/watch?v=lXMKYi73VuU",
    "bardGroups": [
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-12f808b808d1fe9d",
    "title": "Воскресенье",
    "artist": "Олег Митяев",
    "url": "https://www.youtube.com/watch?v=azsn2R-T3U0",
    "bardGroups": [
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-4751b688f1091cdb",
    "title": "Соседка",
    "artist": "Олег Митяев",
    "url": "https://www.youtube.com/watch?v=D3hwyuMVpY4",
    "bardGroups": [
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-f671d15dfacbe73f",
    "title": "Крепитесь, люди, скоро лето",
    "artist": "Олег Митяев",
    "url": "https://www.youtube.com/watch?v=PGOOVgnjDqQ",
    "bardGroups": [
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-00538c3c77a91baa",
    "title": "Просыпаясь улыбаться",
    "artist": "Олег Митяев",
    "url": "https://www.youtube.com/watch?v=Thhms39C428",
    "bardGroups": [
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-cc2608cfd2b6b9be",
    "title": "Письмо из Африки",
    "artist": "Олег Митяев",
    "url": "https://www.youtube.com/watch?v=zLq6MrOYRlA",
    "bardGroups": [
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-0f8162da7e8b51f1",
    "title": "Царица Непала",
    "artist": "Олег Митяев",
    "url": "https://www.youtube.com/watch?v=RS0eM0vKyuM",
    "bardGroups": [
      "mityaev"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-9fbd4f9a18b14ada",
    "title": "30 лет",
    "artist": "Юрий Кукин",
    "url": "https://www.youtube.com/watch?v=csfrkKg9Sfo",
    "bardGroups": [
      "kukin"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-97d855761e29b2bd",
    "title": "Жена французского посла",
    "artist": "Александр Городницкий",
    "url": "https://www.youtube.com/watch?v=9MaJRTheX3k",
    "bardGroups": [
      "gorodnitsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-bfcdb3e6bc337d64",
    "title": "Атланты",
    "artist": "Александр Городницкий",
    "url": "https://www.youtube.com/watch?v=OO74POEnFSQ",
    "bardGroups": [
      "gorodnitsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-20ed9957527c9db5",
    "title": "Перекаты",
    "artist": "Александр Городницкий",
    "url": "https://www.youtube.com/watch?v=DH7hmLGJm1c",
    "bardGroups": [
      "gorodnitsky"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-234e3aac364ecf52",
    "title": "Yesterday",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/yesterday.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-fd820ce3212bc96e",
    "title": "Let It Be",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/let_it_be.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-01a2a667d0df277a",
    "title": "Hey Jude",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/hey_jude.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f5ac2ab8cb47eeb9",
    "title": "Help",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/help.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-775456ed8693ec30",
    "title": "Birthday",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/birthday.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-cc95db56bfd97299",
    "title": "Ballad Of John And Yoko",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/ballad_of_john_and_yoko.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f52b9a8752e6b520",
    "title": "Girl",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/girl.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-babbab434242a1a6",
    "title": "Across The Universe",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/across_the_universe.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-30c3d0576bd7119f",
    "title": "Octopus's Garden",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/octopuss_garden.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-797c258303b4f073",
    "title": "Blackbird",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/blackbird.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-e47573f7770b14c3",
    "title": "Baby It's You",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/baby_its_you.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-a0bca096df2d6f81",
    "title": "Here Comes The Sun",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/here_comes_the_sun.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-a97acbb47e58c4ba",
    "title": "Don't Let Me Down",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/dont_let_me_down.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-64ae380861e63a79",
    "title": "Come Together",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/come_together.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-ff5067d5ce461e27",
    "title": "Honey Pie",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/honey_pie.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-e35e16828d5b6f53",
    "title": "I Need You",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/i_need_you.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-d40f7fb5bb8953a9",
    "title": "Back In The USSR",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/the_beatles_-_back_in_the_ussr.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-4286ab8389ae71dc",
    "title": "Twist And Shout",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/twist_and_shout.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-9701e1bd77a4a60e",
    "title": "A Hard Day's Night",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/a_hard_days_night.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-fdfa0d769911089e",
    "title": "I Feel Fine",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/i_feel_fine.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-acd38c104349762e",
    "title": "Eight Days A Week",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/eight_days_a_week.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-5745e6a47e90d600",
    "title": "She Loves You",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/she_loves_you.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-584e6ca8f856c2e1",
    "title": "Here There And Everywhere",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/here_there_and_everywhere.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-6c272161043c7a5e",
    "title": "Do You Want To Know A Secret",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/do_you_want_to_know_a_secret_.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-730f84f37d14257e",
    "title": "I'll Follow the Sun",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/ill_follow_the_sun.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-56bdb5bce17f1242",
    "title": "Till There Was You",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/till_there_was_you.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-13a85873a5456723",
    "title": "Ob-La-Di, Ob-La-Da",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/ob-la-di__ob-la-da.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-65f643a49bdae8e2",
    "title": "Revolution",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/revolution.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-5266d9a4fa68df05",
    "title": "Misery",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/misery.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-313ba0e651ede21c",
    "title": "Something",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/something.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-af57af9a57323627",
    "title": "Love Me Do",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/love_me_do.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-1eb0bdc8fd005bdf",
    "title": "P.S. I Love You",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/p_s__i_love_you.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-971c857c50bfd3d9",
    "title": "I'll Get You",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/ill_get_you.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-c631e201dbdae56c",
    "title": "Oh! Darling",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/ohdarling.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-87daf4a51cff82c5",
    "title": "Yellow Submarine",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/yellowsubmarine.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-e5620f1f3eb566a8",
    "title": "Eleanor Rigby",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/eleanorrigby.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-56e34506cb9a9154",
    "title": "Ticket To Ride",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/tickettoride.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-34cdc880032424cf",
    "title": "Day Tripper",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/daytripper.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-35cd4b733a786d53",
    "title": "Michelle",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/michelle.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-90389051fd87667f",
    "title": "And I Love Her",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/andiloveher.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-88e37a358f2c695c",
    "title": "I Want To Hold Your Hand",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/iwanttoholdyourhand.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-3eb03994f05a2d86",
    "title": "I Saw Her Standing There",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/isawherstandingthere.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-eace8292b2b113ac",
    "title": "All You Need Is Love",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/allyouneedislove.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-e4f94bdcb94b64c9",
    "title": "All My Loving",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/allmyloving.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-4517bb9b76b2e004",
    "title": "Magical Mystery Tour",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/magicalmysterytour.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-7e459420e205f040",
    "title": "Can't Buy Me Love",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/cantbuymelove.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-0c13c5aaefd9b254",
    "title": "You're Going To Lose That Girl",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/youaregoingtolosethatgirl.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-d0a8d71f7669f8fe",
    "title": "Penny Lane",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/pennylane.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-fdc700595f047c55",
    "title": "Fixing A Hole",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/fixingahole.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-a26d089a84238698",
    "title": "Fool On The Hill",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/foolonthehill.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-17bdbe6ec1793229",
    "title": "Strawberry Fields Forever",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/strawberryfieldsforever.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f69e00d29b64b605",
    "title": "Maxwell's Silver Hammer",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/maxwellssilverhammer.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-db956471acd62479",
    "title": "With A Little Help From My Friends",
    "artist": "The Beatles",
    "url": "https://karaopa2.ru/karaoke/performer/the_beatles/withalittlehelpfrommyfriends.html",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-18a9748bc869f4d4",
    "title": "Moody Blue",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/moody_blue.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-0a95257e5d1ed7a9",
    "title": "Heartbreak Hotel",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/heartbreak_hotel.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-6d66890ca4e266ea",
    "title": "Love Me Tender",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/love_me_tender_.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-fa28dc1b58b7a067",
    "title": "Can't Help Falling in Love",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/cant_help_falling_in_love.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-7ea175dc55ddfb33",
    "title": "Always On My Mind",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/always_on_my_mind.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-b2f6ee8d62302a84",
    "title": "Love Me",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/love_me.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-d1487744de22d02b",
    "title": "Are You Lonesome Tonight",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/are_you_lonesome_tonight.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-0abecbd0b8143e21",
    "title": "An American Trilogy",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/an_american_trilogy.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-053d6064e7f0b5b8",
    "title": "Fever",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/fever.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-8413fcfaa3191a4e",
    "title": "Angel",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/angel.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-4bdb9669f2dfa76a",
    "title": "Let It Be Me",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/let_it_be_me.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-8d3ac9589394dcd3",
    "title": "Stuck On You",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/stuck_on_you.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-405c255ca8a0f8ea",
    "title": "The Wonder Of You",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/the_wonder_of_you.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-9de6ae61b3b055be",
    "title": "It's Now or Never",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/its_now_or_never.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-aabdad89288c59d4",
    "title": "One Night",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/one_night_.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-471412e87df81e75",
    "title": "Return To Sender",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/return_to_sender.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-4484bdc3a6ce1c6a",
    "title": "Rubberneckin'",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/rubberneckin.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-9a4a46847dfd93cd",
    "title": "My Way",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/my_way.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-79a38dd4ede66330",
    "title": "Where Could I Go",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/where_could_i_go.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-563b2d8c0f75d53c",
    "title": "I Was The One",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/i_was_the_one.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-6e8683c25830c562",
    "title": "A Little Bit Of Green",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/a_little_bit_of_green.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-28ca0ff4adfe7228",
    "title": "Trouble",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/trouble.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-ab3c48ca89eab1fd",
    "title": "U. S. Male",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/u__s__male.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-e238e675940b4c4a",
    "title": "You'll Never Walk Alone",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/youll_never_walk_alone.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-2d6d5aa4362026d8",
    "title": "Ask Me",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/ask_me.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f40d86f9224e0875",
    "title": "(You're the) Devil in Disguise",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/youre_the_devil_in_disguise.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-6f6c5c1731348b97",
    "title": "It's Impossible",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/its_impossible.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-8f799f016df53630",
    "title": "Burning Love",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/burning_love.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-5b53e1f2fea8b0e5",
    "title": "Fairytale",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/fairytales.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-a970238c4e0c4bf3",
    "title": "Amazing Grace",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/amazing_grace.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-d5de6a07b2d677df",
    "title": "If I Can Dream",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/if_i_can_dream.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-440d8c9c7e07fce9",
    "title": "Don't Be Cruel",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/dont_be_cruel.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-0704f9ad0a872f80",
    "title": "Fool",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/fool.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-030c81f4f4291c13",
    "title": "A Big Hunk o' Love",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/a_big_hunk_o_love.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-412ecf710ba052d0",
    "title": "Jailhouse Rock",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/jailhouse_rock.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-feea830a1a13246d",
    "title": "All Shook Up",
    "artist": "Elvis Presley",
    "url": "https://karaopa2.ru/karaoke/performer/elvis_presley/all_shook_up.html",
    "language": "en",
    "aliases": "Элвис Пресли Престли",
    "enRockGroup": "elvis",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-aec22585b11cbc89",
    "title": "Wind Of Change",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/wind_of_change.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-9dd47c6a0f3e1387",
    "title": "Maybe I Maybe You",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/maybe_i_maybe_you.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-90780dde86dff4ca",
    "title": "Still Loving You",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/still_loving_you.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-4b47bb0591475bb3",
    "title": "Holiday",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/holiday.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-ed10788893c7441a",
    "title": "No One Like You",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/no_one_like_you.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-d207a59ff1f7c662",
    "title": "Believe In Love",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/believe_in_love.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-7407b27fb9480849",
    "title": "Always Somewhere",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/always_somewhere.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-efd683eb2dba2a3a",
    "title": "Under The Same Sun",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/under_the_same_sun.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-5af0b0087ecf3979",
    "title": "Send Me An Angel",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/send_me_an_angel.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-c21e1412027c7625",
    "title": "Here In My Heart",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/here_in_my_heart.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-a1ab0cdc354189d2",
    "title": "Rock You Like A Hurricane",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/rock_you_like_a_hurricane.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-26c7bbccd4d7e07b",
    "title": "When The Smoke is Going Down",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/when_the_smoke_is_going_down.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-34a7330310660b63",
    "title": "In Trance",
    "artist": "Scorpions",
    "url": "https://karaopa2.ru/karaoke/performer/scorpions/in_trance.html",
    "language": "en",
    "aliases": "Скорпионс",
    "enRockGroup": "scorpions",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-a7c0e77d054c544a",
    "title": "The Show Must Go On",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/_the_show_must_go_on__na_russkom_yazyke.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-3060a381b3ecc51f",
    "title": "We Will Rock You",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/we_will_rock_you.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f36bc05fd59034b5",
    "title": "Don't Stop Me Now",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/dont_stop_me_now.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-d1e868f249ec7cad",
    "title": "Bohemian Rhapsody",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/bohemian_rhapsody.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-90c8e128d39fd1b0",
    "title": "I Want to Break Free",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/i_want_to_break_free.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-32b717d7876430ac",
    "title": "Radio Ga Ga",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/radio_ga_ga.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-bef68877dbe8c7ce",
    "title": "Killer Queen",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/killer_queen.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-83c383d22640c509",
    "title": "Somebody To Love",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/somebody_to_love.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-570f2179cbd64cc6",
    "title": "You Don't Fool Me",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/youdontfoolme.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-0d586f780c15745c",
    "title": "I Want It All",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/iwantitall.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-c81403c8c2898950",
    "title": "Drowse",
    "artist": "Queen",
    "url": "https://karaopa2.ru/karaoke/performer/queen/drowse.html",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-3ad45158281d7893",
    "title": "Stairway To Heaven",
    "artist": "Led Zeppelin",
    "url": "https://karaopa2.ru/karaoke/performer/led_zeppelin/stairway_to_heaven.html",
    "language": "en",
    "aliases": "Лед Зеппелин Лэд Цеппелин",
    "enRockGroup": "led-zeppelin",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-71872f5098b1bcb1",
    "title": "Since I've Been Loving You",
    "artist": "Led Zeppelin",
    "url": "https://karaopa2.ru/karaoke/performer/led_zeppelin/since_lve_been_loving_you.html",
    "language": "en",
    "aliases": "Лед Зеппелин Лэд Цеппелин",
    "enRockGroup": "led-zeppelin",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-178fba4f48a01677",
    "title": "Rock and Roll",
    "artist": "Led Zeppelin",
    "url": "https://karaopa2.ru/karaoke/performer/led_zeppelin/rock_and_roll.html",
    "language": "en",
    "aliases": "Лед Зеппелин Лэд Цеппелин",
    "enRockGroup": "led-zeppelin",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-207b9d7e9d16b231",
    "title": "Babe I'm Gonna Leave You",
    "artist": "Led Zeppelin",
    "url": "https://karaopa2.ru/karaoke/performer/led_zeppelin/babe_im_gonna_leave_you.html",
    "language": "en",
    "aliases": "Лед Зеппелин Лэд Цеппелин",
    "enRockGroup": "led-zeppelin",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-5028d08a33d31b04",
    "title": "Heartbreaker",
    "artist": "Led Zeppelin",
    "url": "https://karaopa2.ru/karaoke/performer/led_zeppelin/heartbreaker.html",
    "language": "en",
    "aliases": "Лед Зеппелин Лэд Цеппелин",
    "enRockGroup": "led-zeppelin",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-e8adbb2f425445f7",
    "title": "Stand By Me",
    "artist": "John Lennon",
    "url": "https://www.youtube.com/watch?v=UayglEom_MA",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-e38866d56ca96289",
    "title": "Black Dog",
    "artist": "Led Zeppelin",
    "url": "https://www.youtube.com/watch?v=9Fngw0frpBk",
    "language": "en",
    "aliases": "Лед Зеппелин Лэд Цеппелин",
    "enRockGroup": "led-zeppelin",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-cd2a44c11fd72df2",
    "title": "Whole Lotta Love",
    "artist": "Led Zeppelin",
    "url": "https://www.youtube.com/watch?v=7_nGVxsHRf0",
    "language": "en",
    "aliases": "Лед Зеппелин Лэд Цеппелин",
    "enRockGroup": "led-zeppelin",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-82d5a96ea70481f7",
    "title": "Jealous Guy",
    "artist": "John Lennon",
    "url": "https://www.youtube.com/watch?v=81_T_mWAzOI",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-a347fbb279b287ff",
    "title": "Woman",
    "artist": "John Lennon",
    "url": "https://www.youtube.com/watch?v=lWZlDh-Cx4I",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8b4460a2f5943bca",
    "title": "Oh Yoko!",
    "artist": "John Lennon",
    "url": "https://www.youtube.com/watch?v=We9BR0VX4mg",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-9e3ed2f55a1334c2",
    "title": "Mind Games",
    "artist": "John Lennon",
    "url": "https://www.youtube.com/watch?v=zMP59eDKJqA",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-0a565421dfc89974",
    "title": "Oh My Love",
    "artist": "John Lennon",
    "url": "https://www.youtube.com/watch?v=ckr_qU0ynyI",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-53428adf8b4c8d60",
    "title": "(Just Like) Starting Over",
    "artist": "John Lennon",
    "url": "https://www.youtube.com/watch?v=1VzxQKFLxI4",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-814010dcfe163235",
    "title": "God",
    "artist": "John Lennon",
    "url": "https://www.youtube.com/watch?v=-MG_2rJCfmU",
    "language": "en",
    "aliases": "Битлз Битлз Леннон Ленон Джон",
    "enRockGroup": "beatles-lennon",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-18b624e33bd160c2",
    "title": "Anya",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=t_2UpW9ZjmQ",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8b4c14c9215600ef",
    "title": "Soldier of Fortune",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=IPI2zPSaddo",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-75ecefc787daebbb",
    "title": "Mistreated",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=LsiNLSbZuyQ",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-fc0c81361b46150e",
    "title": "Perfect Strangers",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=2KUJjWuUPTM",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-b705405774af021a",
    "title": "Child in Time",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=E111WIjPSac",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-cebde182260db048",
    "title": "Smoke On The Water",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=0cnTapurs2Y",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-73bded4d31bff611",
    "title": "Hush",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=Q19McwMp5ow",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-6e146098f530c133",
    "title": "Wasted Sunsets",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=z77GEcWTt7o",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-1f1990a6f2735336",
    "title": "Fireball",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=G_D_LSyHDV4",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-7a95ff2abf909b0e",
    "title": "You Keep On Moving",
    "artist": "Deep Purple",
    "url": "https://www.youtube.com/watch?v=pYaKxN2vX1U",
    "language": "en",
    "aliases": "Дип Перпл Пёрпл",
    "enRockGroup": "deep-purple",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-a6b72fb891658260",
    "title": "We Are The Champions",
    "artist": "Queen",
    "url": "https://www.youtube.com/watch?v=1F__lyKCxrw",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-340856b2145cf970",
    "title": "Under Pressure",
    "artist": "Queen",
    "url": "https://www.youtube.com/watch?v=kiw0tzz0KsI",
    "language": "en",
    "aliases": "Квин Фредди Меркьюри",
    "enRockGroup": "queen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-c9e07966368f8320",
    "title": "Have A Cigar",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/have_a_cigar.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-75c1a686d44820bf",
    "title": "Corporal Clegg",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/corporal_clegg.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-2490725d48416f58",
    "title": "Run Like Hell",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/run_like_hell.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-a46db418265e6b03",
    "title": "Echoes",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/echoes.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-d13015d3d1af990d",
    "title": "On The Turning Away",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/on_the_turning_away.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-1157f6fedf1177bb",
    "title": "The Happiest Days Of Our Lives",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/the_happiest_days_of_our_lives.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-d6e39faefc5e3360",
    "title": "See Emily Play",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/see_emily_play.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-fab4fcc515d42e30",
    "title": "The Fletcher Memorial Home",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/the_fletcher_memorial_home.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-57d68978612fc6e4",
    "title": "Remember A Day",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/remember_a_day.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-36b51a21bc3f0b00",
    "title": "Us And Them",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/us_and_them.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-fe356040d07dd2d6",
    "title": "Take It Back",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/take_it_back.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-3b20c15dd58b385e",
    "title": "The Final Cut",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/the_final_cut_.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-5693d8a5f2061041",
    "title": "What Do You Want From Me",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/what_do_you_want_from_me.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-69306d95fce69c1e",
    "title": "Sorrow",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/sorrow.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-8704b53ceab9e141",
    "title": "Welcome to the Machine",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/welcome_to_tha_machine.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-492083305ed595d9",
    "title": "Arnold Layne",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/arnold_layne.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-8b6d7c0d0ba9a19d",
    "title": "Brain Damage / Eclipse",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/brain_damage_eclipse.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-fd307c3ca4ab5122",
    "title": "Wish You Were Here",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/wish_you_were_here.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-0fb2bf621d8033a9",
    "title": "Comfortably Numb",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/comfortably_numb.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-403eeab375031168",
    "title": "When The Tigers Broke Free",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/hen_the_tigers_broke_free.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-00cd27d07ea82560",
    "title": "Money",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/money.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-e61744a74a5d73f7",
    "title": "High Hopes",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/high_hopes.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-581738001698c441",
    "title": "Hey You",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/hey_you.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-c646f03d9034399f",
    "title": "Time",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/time.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-e45af0045c6defe4",
    "title": "Another Brick In The Wall",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/another_brick_in_the_wall.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-0cf9027c7603fa37",
    "title": "Pigs (Three Different Ones)",
    "artist": "Pink Floyd",
    "url": "https://karaopa2.ru/karaoke/performer/pink_floyd/pigs_three_different_ones.html",
    "language": "en",
    "aliases": "Пинк Флойд",
    "enRockGroup": "pink-floyd",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-113e77ce7ac8d5d8",
    "title": "You Can't Always Get What You Want",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/you_cant_always_get_what_you_want.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-2a2b758248cd0aa4",
    "title": "Get Off of My Cloud",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/get_off_of_my_cloud.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-b101ee895a20c915",
    "title": "Honky Tonk Women",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/honky_tonk_woman.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-426499a8305ceb5c",
    "title": "Ruby Tuesday",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/ruby_tuesday.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-49ad6c965609c1c1",
    "title": "(I Can't Get No) Satisfaction",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/satisfaction.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-2638e8e54f56f9e4",
    "title": "Brown Sugar",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/brown_sugar.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-893a9a0f259bd4ee",
    "title": "Jumpin' Jack Flash",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/jumpin_jack_flash.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-143446c0f6a7b185",
    "title": "Angie",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/angie.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f6a73566720905de",
    "title": "Love Is Strong",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/love_is_strong.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-3d479e3eb8e69f64",
    "title": "Harlem Shuffle",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/harlem_shuffle.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-d8121ab630af3546",
    "title": "Miss You",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/miss_you.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-6d13d6a83db70dac",
    "title": "Biggest Mistake",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/biggest_mistake.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-8658b76ef7dc78e3",
    "title": "It's Only Rock 'n Roll (But I Like It)",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/its_only_rock_n_roll.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-aa3d6bd97feb990c",
    "title": "Sympathy For The Devil",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/sympathy_for_the_devil.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-7340572d95be16f0",
    "title": "Out of Control",
    "artist": "The Rolling Stones",
    "url": "https://karaopa2.ru/karaoke/performer/the_rolling_stones/out_of_control.html",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-bf9b3a744866342d",
    "title": "Hotel California",
    "artist": "Eagles",
    "url": "https://karaopa2.ru/karaoke/performer/eagles/hotel_california.html",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-ecc92584a4edad57",
    "title": "The Crystal Ship",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=4Bg_iSGHs7k",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-54952e9dd85e4e53",
    "title": "Touch Me",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=B18nwO0WKio",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-11c3d9088bd97a95",
    "title": "Love Me Two Times",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=pk3qWHFrq48",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-cb1b99e0bc333cb9",
    "title": "The End",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=YcEkWlvz0n4",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-d76bb0edb5c30cde",
    "title": "Love Street",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=JIyGiAGXXTk",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-20feeaf44e86e0f6",
    "title": "Waiting For The Sun",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=CVem4nM0nx0",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8a840b3460665d61",
    "title": "Back Door Man",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=1VxeicRs0xA",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-7eccd4387eab98b0",
    "title": "People Are Strange",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=vSj5SxOdzvc",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-3d592fb800be77ee",
    "title": "Love Her Madly",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=xoLPZCF9qP8",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-db884374062b3da3",
    "title": "Hello, I Love You",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=aMMffVRrkoo",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-1c88be5b4d80f7c5",
    "title": "Peace Frog",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=r293VXthRgU",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-86b657e7c3671b20",
    "title": "Shoot To Thrill",
    "artist": "AC/DC",
    "url": "https://www.youtube.com/watch?v=wSPDkQYUIIE",
    "language": "en",
    "aliases": "Эй Си Ди Си Эйсидиси",
    "enRockGroup": "acdc",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-9b1eaadf6ccab3d0",
    "title": "Back In Black",
    "artist": "AC/DC",
    "url": "https://www.youtube.com/watch?v=s-dMoiDQ_II",
    "language": "en",
    "aliases": "Эй Си Ди Си Эйсидиси",
    "enRockGroup": "acdc",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-6442067ffe3d19b7",
    "title": "T.N.T.",
    "artist": "AC/DC",
    "url": "https://www.youtube.com/watch?v=7p1hAx9P1bA",
    "language": "en",
    "aliases": "Эй Си Ди Си Эйсидиси",
    "enRockGroup": "acdc",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-c37481a9a29cb827",
    "title": "It's A Long Way To The Top If You Wanna Rock 'N' Roll",
    "artist": "AC/DC",
    "url": "https://www.youtube.com/watch?v=pYTdVwZK5dw",
    "language": "en",
    "aliases": "Эй Си Ди Си Эйсидиси",
    "enRockGroup": "acdc",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-423c4e2d30c9797e",
    "title": "Touch Too Much",
    "artist": "AC/DC",
    "url": "https://www.youtube.com/watch?v=MG65MrfokG4",
    "language": "en",
    "aliases": "Эй Си Ди Си Эйсидиси",
    "enRockGroup": "acdc",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-e708afc014cbbc12",
    "title": "Hells Bells",
    "artist": "AC/DC",
    "url": "https://www.youtube.com/watch?v=hcpYU7LHe3M",
    "language": "en",
    "aliases": "Эй Си Ди Си Эйсидиси",
    "enRockGroup": "acdc",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-a072659d36458b9b",
    "title": "Sultans Of Swing",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=MTmCG3MdcFw",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-7c4cc58e9d0348e2",
    "title": "Walk Of Life",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=lsNBGDpmedw",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8ecb73b55ba9a99c",
    "title": "Money For Nothing",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=DeMI2-NpJBY",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-4a24a73de2a3aa93",
    "title": "So Far Away",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=GdMgaWOJuVs",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-5fe947c2bb5bcdb4",
    "title": "Romeo And Juliet",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=e_1egVfo8DM",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-34f8642476d6cec7",
    "title": "Tunnel Of Love",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=JyslplF2Y-0",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-0795dc900f0405b8",
    "title": "Brothers In Arms",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=8qZnEYvJcio",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-0c2c3c29d37ea099",
    "title": "Your Latest Trick",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=zaxhq6MaFuk",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-23fbcbb0e547b3ec",
    "title": "Why Worry",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=YyeDO0C1Ba8",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-613d999823bca08c",
    "title": "Once Upon A Time In The West",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=tPXXBfBLIuw",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-24641367320b7a5b",
    "title": "Down To The Waterline",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=dclVsfd3aDY",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8f558bc8104ae7c1",
    "title": "Lady Writer",
    "artist": "Dire Straits",
    "url": "https://www.youtube.com/watch?v=wxUBvIxVzCk",
    "language": "en",
    "aliases": "Дайр Стрейтс",
    "enRockGroup": "dire-straits",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-96c2ff5c03f03351",
    "title": "Amazing",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=RrrrKgX7b_8",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-40db7bb561647557",
    "title": "Dream On",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=x9Sy1jtmB7w",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-3d59f5bf96e61ddd",
    "title": "Walk This Way",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=B8UII7sTQjM",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-866b48239644766e",
    "title": "I Don't Want to Miss a Thing",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=oES8iN59_nE",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-6848904c38d1a4c7",
    "title": "Sweet Emotion",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=WVT2dSa78EE",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-2d802857e825cd23",
    "title": "Same Old Song And Dance",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=3KyVgPm-ZDQ",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-f6ea7dcaffdf4734",
    "title": "Rag Doll",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=woay7s76tDg",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-942fda1655f3cff3",
    "title": "Love Will Keep Us Alive",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=4C6GaF7z6rU",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-4105a170f5045053",
    "title": "New Kid In Town",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=6P416vTZA6c",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-c60dc22eeda258f8",
    "title": "Desperado",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=QNkM8K0e3hQ",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-43b4164e30767e4c",
    "title": "Tequila Sunrise",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=znnjXneJ95Y",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-191c203b98c84e71",
    "title": "Lyin' Eyes",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=pem2cqXxDvI",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-5f38406cb5cd9e5c",
    "title": "Take It Easy",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=DEHcZZuwSHs",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-f8ecff6273d0ff35",
    "title": "Peaceful Easy Feeling",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=zxV6zrpaaJc",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-537db28d8ebd47ff",
    "title": "Witchy Woman",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=KEPsSLahHKc",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-efcc6bdcb2aed4b5",
    "title": "Take It to the Limit",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=L75QFiBKfpI",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-44af4d8a5d488da8",
    "title": "One of These Nights",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=omIwIYqhAsg",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-f965a379fc6ff7f7",
    "title": "The Girl from Yesterday",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=i3tLd5sy5hA",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-7faa7231d58b8404",
    "title": "The Best of My Love",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=MFiIbt3C-lc",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-dd950d5aa4a9f2b8",
    "title": "Try and Love Again",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=XfbO7ADm860",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-29f294c17f1a8690",
    "title": "I Can't Tell You Why",
    "artist": "Eagles",
    "url": "https://www.youtube.com/watch?v=Maqsvy5fnpU",
    "language": "en",
    "aliases": "Иглз Иглс",
    "enRockGroup": "eagles",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-758528a65927da5c",
    "title": "Paint It, Black",
    "artist": "The Rolling Stones",
    "url": "https://www.youtube.com/watch?v=fBMGy4d9XZw",
    "language": "en",
    "aliases": "Роллинг Стоунз Ролинг",
    "enRockGroup": "rolling-stones",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-19548961e346f46a",
    "title": "Light My Fire",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=aEZdSIwlYDk",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-204b259b672001af",
    "title": "Riders On The Storm",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=osN7olq2x78",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-225f1ea74f692e23",
    "title": "Break on Through (To the Other Side)",
    "artist": "The Doors",
    "url": "https://www.youtube.com/watch?v=mRd8aKsOF-g",
    "language": "en",
    "aliases": "Дорз Дорс",
    "enRockGroup": "doors",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-79d7a74ade45da12",
    "title": "Thunderstruck",
    "artist": "AC/DC",
    "url": "https://www.youtube.com/watch?v=DX5oGGCSNbs",
    "language": "en",
    "aliases": "Эй Си Ди Си Эйсидиси",
    "enRockGroup": "acdc",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-56936026a71c91e6",
    "title": "Highway to Hell",
    "artist": "AC/DC",
    "url": "https://www.youtube.com/watch?v=q2UpIZ8h0Zo",
    "language": "en",
    "aliases": "Эй Си Ди Си Эйсидиси",
    "enRockGroup": "acdc",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-0a51bcbe0b9cc0aa",
    "title": "You Shook Me All Night Long",
    "artist": "AC/DC",
    "url": "https://www.youtube.com/watch?v=m1oWgK-eEzs",
    "language": "en",
    "aliases": "Эй Си Ди Си Эйсидиси",
    "enRockGroup": "acdc",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-4fbfefbfd5447ad4",
    "title": "Crazy",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=Y22JlDm92nY",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-6d7d8a23001835f9",
    "title": "Cryin'",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=KzTTeFiBEwo",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-10649f81ea727545",
    "title": "Janie's Got a Gun",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=6FOz4KGw67M",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-78bd7b7e4a2ed6a4",
    "title": "Love In An Elevator",
    "artist": "Aerosmith",
    "url": "https://www.youtube.com/watch?v=gpasEAw1RYQ",
    "language": "en",
    "aliases": "Аэросмит Аэросмит",
    "enRockGroup": "aerosmith",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8eb41e63fc1dc7f2",
    "title": "It's My Life",
    "artist": "Bon Jovi",
    "url": "https://karaopa2.ru/karaoke/performer/bon_jovi/its_my_life.html",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-6bbe84a6eeddb2af",
    "title": "Livin' on a Prayer",
    "artist": "Bon Jovi",
    "url": "https://karaopa2.ru/karaoke/performer/bon_jovi/livin_on_a_prayer.html",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-25a96cf0a06cd358",
    "title": "Always",
    "artist": "Bon Jovi",
    "url": "https://karaopa2.ru/karaoke/performer/bon_jovi/always_.html",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-3a794904eb1a1197",
    "title": "Bed Of Roses",
    "artist": "Bon Jovi",
    "url": "https://karaopa2.ru/karaoke/performer/bon_jovi/bed_of_roses.html",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f40b770e847bd9b1",
    "title": "Thank You For Loving Me",
    "artist": "Bon Jovi",
    "url": "https://karaopa2.ru/karaoke/performer/bon_jovi/thank_you_for_loving_me.html",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f616aa75bab130e5",
    "title": "Desert Rose",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/desert_rose.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-930bdfd04cb77ac5",
    "title": "Shape Of My Heart",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/shape_of_my_heart.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-cadf93369bcab7e5",
    "title": "Fields of Gold",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/fields_of_gold.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-6c5b5200923fd685",
    "title": "Windmills Of Your Mind",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/windmills_of_your_mind.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-8ff8c5dfd5eb54f9",
    "title": "If I Ever Lose My Faith In You",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/if_i_ever_lose_my_faith_in_you.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f9c587a04342d110",
    "title": "It's Probably Me",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/its_probably_me.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-50f6f7490cee056a",
    "title": "Fragile",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/fragile.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-0c5922d27c8bd68b",
    "title": "Russians",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/russians.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-bb5fc9c624f128b1",
    "title": "Brand New Day",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/brand_new_day.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-dbd8a9ce0a9c567e",
    "title": "Englishman In New York",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/englishman_in_new_york.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-06fe6bf1a1976d81",
    "title": "Someone To Watch Over Me",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/someone_to_watch_over_me_.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-f55a43900da25ce4",
    "title": "Sister Moon",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/sister_moon.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-483e3dfbe61deff6",
    "title": "Little Wing",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/little_wing.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-20e5462cf01ee9d7",
    "title": "Moon Over Bourbon Street",
    "artist": "Sting",
    "url": "https://karaopa2.ru/karaoke/performer/sting/moon_over_bourbon_street.html",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enrock-bde9b452278c1d51",
    "title": "Never Say Goodbye",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=N2G8Z9Bx2N0",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-9e04d007ae732628",
    "title": "I'll Be There For You",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=DxlV1lYmq6Q",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-71bee181da5009b8",
    "title": "Blaze Of Glory",
    "artist": "Jon Bon Jovi",
    "url": "https://www.youtube.com/watch?v=gItfXuxnGWk",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-dd7744be09a376da",
    "title": "Someday I'll Be Saturday Night",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=VZUSTgJ7RoY",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-43f3590dbd5d6d6c",
    "title": "In These Arms",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=BmmeCjTHac4",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8699b6ae938cecbd",
    "title": "This Ain't A Love Song",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=qlC55SGPxwU",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-91d5cfd04b1d0e27",
    "title": "All About Lovin' You",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=U7UkSqQB7_M",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8d2e62fcad7d9092",
    "title": "Keep The Faith",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=_V5h4hnJrbU",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-f98385d2b737cd6b",
    "title": "Santa Fe",
    "artist": "Jon Bon Jovi",
    "url": "https://www.youtube.com/watch?v=G9_jFZaRptI",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-0014eac3ee2ef489",
    "title": "Every Breath You Take",
    "artist": "The Police",
    "url": "https://www.youtube.com/watch?v=m1IuB25aLsY",
    "language": "en",
    "aliases": "Полис Полиc",
    "enRockGroup": "police",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-ed561e400d126a48",
    "title": "King of Pain",
    "artist": "The Police",
    "url": "https://www.youtube.com/watch?v=TfyEwvB8FdU",
    "language": "en",
    "aliases": "Полис Полиc",
    "enRockGroup": "police",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8270fa8428a07bf3",
    "title": "Driven To Tears",
    "artist": "The Police",
    "url": "https://www.youtube.com/watch?v=x_RyZCnREwE",
    "language": "en",
    "aliases": "Полис Полиc",
    "enRockGroup": "police",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-74c802040a70ef31",
    "title": "Seven Days",
    "artist": "Sting",
    "url": "https://www.youtube.com/watch?v=OHWbTJL2muY",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-63e164ceee9e8a05",
    "title": "When We Dance",
    "artist": "Sting",
    "url": "https://www.youtube.com/watch?v=6kfGXov-AVE",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-8e4e457009b48968",
    "title": "Why Should I Cry For You?",
    "artist": "Sting",
    "url": "https://www.youtube.com/watch?v=esSnlSjMaXo",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-56461514116524e3",
    "title": "Mad About You",
    "artist": "Sting",
    "url": "https://www.youtube.com/watch?v=Gv8qpLd90pA",
    "language": "en",
    "aliases": "Стинг",
    "enRockGroup": "sting",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-ed4f28d600223540",
    "title": "Wanted Dead or Alive",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=Yk1H8LxW0bI",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-c8408a27c6baa956",
    "title": "Roxanne",
    "artist": "The Police",
    "url": "https://www.youtube.com/watch?v=tmDuuREmNHU",
    "language": "en",
    "aliases": "Полис Полиc",
    "enRockGroup": "police",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-2980cd3a7d0f1171",
    "title": "Walking On The Moon",
    "artist": "The Police",
    "url": "https://www.youtube.com/watch?v=L8_fayQOBdE",
    "language": "en",
    "aliases": "Полис Полиc",
    "enRockGroup": "police",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-71d91eca127efc42",
    "title": "Don't Stand So Close to Me '86",
    "artist": "The Police",
    "url": "https://www.youtube.com/watch?v=ocmza3iLRiM",
    "language": "en",
    "aliases": "Полис Полиc",
    "enRockGroup": "police",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-5119c8af96a0fcb8",
    "title": "So Lonely",
    "artist": "The Police",
    "url": "https://www.youtube.com/watch?v=TUQfhahPwMg",
    "language": "en",
    "aliases": "Полис Полиc",
    "enRockGroup": "police",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-fe0c6a38eb9e71b0",
    "title": "Wrapped Around Your Finger",
    "artist": "The Police",
    "url": "https://www.youtube.com/watch?v=6KljDbvO0WE",
    "language": "en",
    "aliases": "Полис Полиc",
    "enRockGroup": "police",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-d5e96079dde90d21",
    "title": "De Do Do Do, De Da Da Da",
    "artist": "The Police",
    "url": "https://www.youtube.com/watch?v=JXgIbSDMODQ",
    "language": "en",
    "aliases": "Полис Полиc",
    "enRockGroup": "police",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-3ddea1d9808d762b",
    "title": "Runaway",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=ffnM5gds1WE",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-91236fca20872f1f",
    "title": "Have A Nice Day",
    "artist": "Bon Jovi",
    "url": "https://www.youtube.com/watch?v=PgRKXCKr7nY",
    "language": "en",
    "aliases": "Бон Джови Бон Джови Bon Jovy",
    "enRockGroup": "bon-jovi",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-5e524d3ac306c6c2",
    "title": "Chelsea Hotel #2",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=W8kpGWx8-zE",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-5c147b5f1a7fabec",
    "title": "I'm Your Man",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=poAxXCKXsBA",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-c1bd5fa4e733bf1b",
    "title": "Famous Blue Raincoat",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=rrrbcYyRXUw",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-b90fb15a67d9e121",
    "title": "Waiting for the Miracle",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=4UU1nrQYtvI",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-0db9152028e1257a",
    "title": "Everybody Knows",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=hFYouxYuN4Q",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-ae5689cc739dd5da",
    "title": "Bird On The Wire",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=t0ylMb4q38E",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-676118edb9a9f30c",
    "title": "Hey, That's No Way to Say Goodbye",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=Th2KPvDUiBo",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-773770671dd804c1",
    "title": "The Partisan",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=mjKkFI22FdE",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-37afec93debd2658",
    "title": "One Of Us Cannot Be Wrong",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=x6nK4fTpQDc",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-09c699970660b69d",
    "title": "Closing Time",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=8uSePsQOP7Q",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-4b3b4ac1edc2b15a",
    "title": "First We Take Manhattan",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=zti0lMvXNNE",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-08cf45a87bfd4ef4",
    "title": "Dance Me To The End Of Love",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=stoN6XTkbZI",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-e55a6e55b216e438",
    "title": "In My Secret Life",
    "artist": "Leonard Cohen",
    "url": "https://www.youtube.com/watch?v=_Cn8nmcYBTo",
    "language": "en",
    "aliases": "Леонард Коэн Коен Кохен",
    "enRockGroup": "cohen",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-79bb856e4afc19f9",
    "title": "I Never Cry",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=lLJ839ozNIY",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-2f6c9e8b90648f2b",
    "title": "You and Me",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=UcKVpQglXtA",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-4562849f47760572",
    "title": "How You Gonna See Me Now",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=c3JMz3E1_1Y",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-2749aec8d4db6e67",
    "title": "I'm Eighteen",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=u6Aj7v6aFGA",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-345de7053199bdfb",
    "title": "Hey Stoopid!",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=Xa01wPnXRzU",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-b6c133f93696cb60",
    "title": "Be My Lover",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=b9snz4Gxf8E",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-e5b8dcda299cdb78",
    "title": "Welcome To My Nightmare",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=v02587ZJYVA",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-83fb0d2f6b0e468c",
    "title": "He's Back (The Man Behind The Mask)",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=xWEcyrYcnPg",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-83de667d21e48105",
    "title": "School's Out",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=pPl1Ymnpeag",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-d5c93da204ebf768",
    "title": "Poison",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=d9XncudStYg",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-e3739508b5c47828",
    "title": "Bed of Nails",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=qV4x0oTHv2Q",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-6b0b8e56e71b229f",
    "title": "Is It My Body",
    "artist": "Alice Cooper",
    "url": "https://www.youtube.com/watch?v=V-khTStSgQs",
    "language": "en",
    "aliases": "Элис Элис Купер Элис Купер Poison",
    "enRockGroup": "alice-cooper",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-0e239611f118898c",
    "title": "Mexican Girl",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=vMNtCUB6n0c",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-68650bb4bd2c469c",
    "title": "Lay Back In The Arms Of Someone",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=Uk9MVn-NXro",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-a777a5ac84a64b7c",
    "title": "If You Think You Know How to Love Me",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=Z5EB2tqHDMI",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-5c72537c2420ce9f",
    "title": "I'll Meet You At Midnight",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=iiw0SaDdGzU",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-ffb492d5d07e270d",
    "title": "Baby It's You",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=63HEC8DeyvA",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-5db2d8ec8e7417ba",
    "title": "Living Next Door To Alice",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=iQT14bxT6zc",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-a6c188916a8ee0fa",
    "title": "Take Good Care Of My Baby",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=oisUEqKLHpQ",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-279f5e123fb36f72",
    "title": "What Can I Do",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=vpwpresXBGM",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-930f46cecb9d8a3c",
    "title": "For A Few Dollars More",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=p1UJ9k_UNFc",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "enrock-1a1e5391d03654ee",
    "title": "Wild Wild Angels",
    "artist": "Smokie",
    "url": "https://www.youtube.com/watch?v=MHoDixLFlgo",
    "language": "en",
    "aliases": "Смоки Alice Элис",
    "enRockGroup": "smokie",
    "kind": "Англоязычный рок",
    "categories": [
      "enrock"
    ],
    "source": "YouTube"
  },
  {
    "id": "bard-f35dea580b8770ea",
    "title": "Вальс Бостон",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/vals_boston.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-9ff9d39eff6575bc",
    "title": "Вечерняя Застольная",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/vechernyaya_zastolnaya.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-c8dba602ffb378d9",
    "title": "Ау",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/au.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-088d5e762b97609c",
    "title": "Есаул",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/esaul.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-8c49a3199e1a1d06",
    "title": "Утиная Охота",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/utinaya_ohota.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-9af39cdc48366a54",
    "title": "Казачья",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/kazachya.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-75c73e041b99e5d7",
    "title": "Свадьба",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/svadba.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-a4d0dad3131ea0b2",
    "title": "Глухари",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/gluhari.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-d8f775e673531650",
    "title": "Афганская Вьюга",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/afganskaya_vyuga.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-4a2db450c64ba058",
    "title": "Зима",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/zima.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-a23c680ea453676b",
    "title": "Извозчик",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/izvozchik_.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-bbbcef01ea2d6c01",
    "title": "Где-Нибудь, Как-Нибудь",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/gde-nibud__s_kem-nibud.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-cb182a25507a87ac",
    "title": "На Плантациях Любви",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/na_plantatsiyah_lyubvi.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-ee4b8171fb9d1cbe",
    "title": "Я Вижу Свет",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/ya_vizhu_svet.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-a001dda0e8399568",
    "title": "Письмо",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/pismo.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-f44e23f39efd0db0",
    "title": "Разреши Я Тебе Напишу",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/razreshi_ya_tebe_napishu.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-6ca6fb2942e9ec4c",
    "title": "Одиночество",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/odinochestvo.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-213b5a27b5ba3737",
    "title": "Налетела грусть",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/naletelagrust.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-5a345796879a6c4f",
    "title": "Грусть моя",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/grustmoya.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-3a1e3b9a764f9494",
    "title": "По снегу, летящему с неба",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/posnegu.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-8b9569e4e3f46505",
    "title": "18 лет спустя",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/vosemnadcatletspustya.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-ad78556684451760",
    "title": "Воскресенье в садоводстве",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/voskresenievsadovodstve.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-507f182608363341",
    "title": "Ретро",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/retro.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-799aa62b9f2b620a",
    "title": "Нарисуйте мне дом",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/narisuytemnedom.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-fb3dff8257000fe5",
    "title": "Когда закончится асфальт",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/kogdazakonchitsyaasfalt.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-f8b9927f6d4cdbad",
    "title": "Обо мне не надо плакать",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/obomnenenadoplakat.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-a26cc655be95aeb9",
    "title": "Лиговка",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/ligovka.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-7e02435b8b643a20",
    "title": "Подари, Господь, мелодию",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/podarigospodmelodiu.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-e8d77e6faf2cd828",
    "title": "Жеребёнок",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/zherebenok.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-d39f292524c30e5d",
    "title": "Нету времени",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/netuvremeni.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-38d0f8d37b2ed4d1",
    "title": "Вальс на лебяжьей канавке",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/valsnalebyazheykanavke.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-f02ca42446bc3b78",
    "title": "Зелёный цвет твоих любимых глаз",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/zeleniycvettvoihlubimihglaz.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-96c9ec2f10cf25b4",
    "title": "Два билета на Манхэттен",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/dvabiletanamanhetton.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-92de39d5cff87ec8",
    "title": "Монолог пилота \"Чёрного тюльпана\"",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/monologpilota.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-580a34aa243613e1",
    "title": "Старые скамейки",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/starieskameyki.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-2857061dd7618760",
    "title": "Белая ночь",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/belayanoch.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-9cea86380d9b45a6",
    "title": "Моей единственной",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/moeyedinstvennoy.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-ea10b55724b53766",
    "title": "Дагомыс",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/dagomis.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-09a2cd10b355b606",
    "title": "Зимняя ночь",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/zimnyanoch.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-b2cf1d9479e6b0cd",
    "title": "Прогулка по Невскому",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/progulkaponevskomu.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-ebf63972d7a30859",
    "title": "Песня о скорой помощи",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/pesnyaoskoroypomoshi.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "bard-1382d7e8132fd179",
    "title": "Не хочу стареть",
    "artist": "Александр Розенбаум",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_rozenbaum/nehochustaret.html",
    "bardGroups": [
      "rosenbaum"
    ],
    "kind": "Барды",
    "categories": [
      "bards"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1cd204cd51a6d87e",
    "title": "Сказка В Моей Жизни",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/skazka_v_moey_zhizni.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-092e0dc6c5b34d91",
    "title": "Лед Слезы Льет",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/led_slezy_let.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-6bfe1b85cd0adf0e",
    "title": "Белые Дикие Кони",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/belye_dikie_koni.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-32715ccfe221a274",
    "title": "Пять Минут От Дома Твоего",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/pyat_minut_ot_doma_tvoego.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-e9fa98ff6859db63",
    "title": "Симона",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/simona.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-0702c11dfa36897c",
    "title": "Сибирские Морозы",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/sibirskie_morozy.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-eb70b1d55bfd6daa",
    "title": "Я Не Забуду Тебя Никогда",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/ya_ne_zabudu_tebya_nikogda_.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b0612b9ac3f9daa5",
    "title": "Эй, Красотка",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/ey__krasotka_.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-60ef23d246674ad4",
    "title": "Небеса",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/nebesa.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-094097c4f7b4d0bd",
    "title": "Мечты",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/mechty.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-42d93043791dc75d",
    "title": "Музыка Телеграфных Проводов",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/muzyka_telegrafnyh_provodov.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-cd331f6a1bfe55e1",
    "title": "Моя любовь",
    "artist": "Владимир Кузьмин",
    "url": "https://karaopa2.ru/karaoke/performer/vladimir_kuzmin/moyalubov.html",
    "popGroups": [
      "kuzmin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-189d6c579c7b8c7a",
    "title": "Букет",
    "artist": "Александр Барыкин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_barykin/buket.html",
    "popGroups": [
      "barykin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-8c863668e2bf596a",
    "title": "Двадцать Ноль - Ноль",
    "artist": "Александр Барыкин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_barykin/dvadtsat_nol_-_nol.html",
    "popGroups": [
      "barykin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-2d39695ab9301707",
    "title": "За Той Рекой",
    "artist": "Александр Барыкин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_barykin/za_toy_rekoy.html",
    "popGroups": [
      "barykin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-c6629c381d2bfd4b",
    "title": "Аэропорт",
    "artist": "Александр Барыкин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_barykin/aeroport.html",
    "popGroups": [
      "barykin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-7416ad218f2ec76e",
    "title": "Птицы",
    "artist": "Александр Барыкин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_barykin/ptitsy.html",
    "popGroups": [
      "barykin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-f42f8b8ca8fab6d3",
    "title": "Волга",
    "artist": "Александр Барыкин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_barykin/volga.html",
    "popGroups": [
      "barykin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-4128635175b2097c",
    "title": "Маленькая Москва",
    "artist": "Александр Барыкин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_barykin/malenkaya_moskva.html",
    "popGroups": [
      "barykin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-76a76ec2800d377c",
    "title": "Стоп Мотор",
    "artist": "Александр Барыкин",
    "url": "https://karaopa2.ru/karaoke/performer/aleksandr_barykin/stop_motor.html",
    "popGroups": [
      "barykin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-a900d7a81c1f4254",
    "title": "Розовые Розы",
    "artist": "Весёлые ребята",
    "url": "https://karaopa2.ru/karaoke/performer/veselye_rebyata/rozovye_rozy.html",
    "popGroups": [
      "veselye-rebyata"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-4b34232705c48618",
    "title": "Бродячие Артисты",
    "artist": "Весёлые ребята",
    "url": "https://karaopa2.ru/karaoke/performer/veselye_rebyata/brodyachie_artisty.html",
    "popGroups": [
      "veselye-rebyata"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-d314458f90e79938",
    "title": "Люди Встречаются",
    "artist": "Весёлые ребята",
    "url": "https://karaopa2.ru/karaoke/performer/veselye_rebyata/lyudi_vstrechayutsya.html",
    "popGroups": [
      "veselye-rebyata"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-137a195beb4f9167",
    "title": "В Последний Раз",
    "artist": "Весёлые ребята",
    "url": "https://karaopa2.ru/karaoke/performer/veselye_rebyata/v_posledniy_raz.html",
    "popGroups": [
      "veselye-rebyata"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-953d953bcf51bf00",
    "title": "Автомобили",
    "artist": "Весёлые ребята",
    "url": "https://karaopa2.ru/karaoke/performer/veselye_rebyata/avtomobili.html",
    "popGroups": [
      "veselye-rebyata"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-52f4aa4510108e67",
    "title": "Не Волнуйтесь, Тётя",
    "artist": "Весёлые ребята",
    "url": "https://karaopa2.ru/karaoke/performer/veselye_rebyata/ne_volnuytes__tyotya.html",
    "popGroups": [
      "veselye-rebyata"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-e6fc7cc5923cf2af",
    "title": "Алёшкина Любовь",
    "artist": "Весёлые ребята",
    "url": "https://karaopa2.ru/karaoke/performer/veselye_rebyata/alyoshkina_lyubov.html",
    "popGroups": [
      "veselye-rebyata"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b676a565d3be5552",
    "title": "Безнадёга",
    "artist": "Весёлые ребята",
    "url": "https://karaopa2.ru/karaoke/performer/veselye_rebyata/beznadyoga.html",
    "popGroups": [
      "veselye-rebyata"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b400594c639f270f",
    "title": "Если Любишь Ты",
    "artist": "Весёлые ребята",
    "url": "https://karaopa2.ru/karaoke/performer/veselye_rebyata/esli_lyubish_ty.html",
    "popGroups": [
      "veselye-rebyata"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-ee50fec8afe175be",
    "title": "Белый Теплоход",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/bely_teplohod.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-412069fe44b01f1e",
    "title": "Мечты Сбываются",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/mechta_sbyvaetsya.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-ad4ab8d2b7b26d80",
    "title": "Анастасия",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/anastasiya.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-843f72ed7faf823e",
    "title": "Крыша Дома Твоего",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/krysha_doma_tvoego.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-0cf9ce20eee3890d",
    "title": "Вот Так Бывает",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/vot_tak_byvaet.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-fb588342519b1656",
    "title": "Улицы",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/ulitsy.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5b927f47c3da0e6a",
    "title": "Море",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/more.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-dc8a42f7f0f8c7a5",
    "title": "Зеркало",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/zerkalo.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5b0c10bc3afe08bc",
    "title": "Хмельная Сирень",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/hmelnaya_siren.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-4eb23a3a57eb239e",
    "title": "Родные Места",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/rodnye_mesta.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-e05d7d8c672e85d1",
    "title": "Нет Тебя Прекрасней",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/net_tebya_prekrasney.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-405ad76dbf0b9964",
    "title": "У берез и сосен",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/u_berez_i_sosen.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-c41b315868b7c976",
    "title": "Не Умирай, Любовь",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/ne_umiray__lyubov.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-97a24db62a567d4d",
    "title": "Дорога К Морю",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/dorogakmoryu.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5daf86fa16eb90ff",
    "title": "Я тебя не забуду",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/ya_tebya_ne_zabudu.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-ee28fb722f018dee",
    "title": "От печали до радости",
    "artist": "Юрий Антонов",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_antonov/ot_pechali_do_radosti.html",
    "popGroups": [
      "antonov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-88f08da22df0a45d",
    "title": "Эти Глаза Напротив",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/eti_glaza_naprotiv.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-71d200e8613b498c",
    "title": "Восточная Песня",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/vostochnaya_pesnya.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-6e8d073d0aaaae4d",
    "title": "Листопад",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/listopad.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-094e94ca546b3630",
    "title": "Что-то Случилось",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/chto-to_sluchilos.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-166eed09c8e93606",
    "title": "Неотправленное Письмо",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/neotpravlennoe_pismo.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-ff0248b3f2ee4346",
    "title": "Сбудется Всё",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/sbudetsya_vsyo.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-af21536bdeae6ded",
    "title": "Белые крылья",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/beliekrilya.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-85790149ff6e0c46",
    "title": "Олеандр",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/oleandr.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-7b303ad2f1ed75fc",
    "title": "Ты меня забыла",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/timenyazabila.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-239665d29771cdad",
    "title": "Первое Апреля",
    "artist": "Валерий Ободзинский",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_obodzinskiy/pervoeaprelya.html",
    "popGroups": [
      "obodzensky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-d72e0a6d606fa652",
    "title": "Лебединая Верность",
    "artist": "Евгений Мартынов",
    "url": "https://karaopa2.ru/karaoke/performer/evgeniy_martynov/lebedinnaya_vernost.html",
    "popGroups": [
      "martynov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-ee4c15f4b5c0bb4a",
    "title": "Аленушка",
    "artist": "Евгений Мартынов",
    "url": "https://karaopa2.ru/karaoke/performer/evgeniy_martynov/alenushka.html",
    "popGroups": [
      "martynov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5e2fabaff36579d3",
    "title": "Повезло",
    "artist": "Евгений Мартынов",
    "url": "https://karaopa2.ru/karaoke/performer/evgeniy_martynov/povezlo.html",
    "popGroups": [
      "martynov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-80e7f1f957b5f6b9",
    "title": "Беловежская Пуща",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/belovezhskaya_puscha.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-d6092f902abb0547",
    "title": "Родина Моя Белоруссия",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/rodina_moya_belorussiya.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5c88a25df6060c6c",
    "title": "Вологда",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/vologda.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-0a844d8301933076",
    "title": "Косил Ясь Конюшину",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/kosil_yas_konyushinu.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-a71c84ddd7f278e3",
    "title": "Березовый Сок",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/berezovy_sok.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-9fcc61ef53701e70",
    "title": "За Полчаса До Весны",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/za_polchasa_do_vesny.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-bc54719e2df3edd1",
    "title": "Александрина",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/aleksandrina.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-856cdcfcc8dfed35",
    "title": "Алеся",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/alesya.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-7f82a7f55081448c",
    "title": "Дрозды",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/drozdy.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-92261739c01d2fe6",
    "title": "Белявая Чернявая",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/belyavaya_chernyavaya.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-65c78d96f5d39f22",
    "title": "Вераника",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/veranika.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-9e3008aefcee9b6f",
    "title": "Полонез",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/polonez.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-a4fa499ca14f21fe",
    "title": "Я Все Тот Же",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/ya_vse_tot_zhe.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-8386cfbe17da4af6",
    "title": "Седина В Бороду",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/sedina_v_borodu.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-24feab6bc699b918",
    "title": "Уголок России",
    "artist": "Песняры",
    "url": "https://karaopa2.ru/karaoke/performer/pesnyary/ugolok_rossii.html",
    "popGroups": [
      "pesnyary"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-779fe85c8c9a2dc3",
    "title": "Мамина Пластинка",
    "artist": "Ариэль",
    "url": "https://karaopa2.ru/karaoke/performer/ariel/mamina_plastinka.html",
    "popGroups": [
      "ariel"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-84045ac375817eb5",
    "title": "Аэропорты",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/aeroporty.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5309b5752b7192d1",
    "title": "Я Буду Всегда С Тобой",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/ya_budu_vsegda_s_toboy.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-51b30093505aaf89",
    "title": "Летний Дождь",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/letniy_dozhd.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-dde5aef6da642fe3",
    "title": "Думать О Тебе",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/dumat_o_tebe.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-597d1c90116817a9",
    "title": "Хоп Хэй Лала Лэй",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/hop_hey_lala_ley.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-e96db581e795a25d",
    "title": "На Сиреневой Луне",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/na_sirenevoy_lune.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-7b267568cfe3dd7c",
    "title": "Голос Высокой Травы",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/golos_vysokoy_travy.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b03189aa2d13c14b",
    "title": "Я Тебя Не Вижу",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/ya_tebya_ne_vizhu.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-e9eb999b0d24882c",
    "title": "Отец Рядом С Тобой",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/otets_ryadom_s_toboy.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-4ab6b39f52868d89",
    "title": "Остров",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/ostrov.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-36e2bbdcd99685ba",
    "title": "Две Дороги, Два Пути",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/dve_dorogi__dva_puti.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5b8b0ac851a598dc",
    "title": "Ай Яй Яй",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/ay_yay_yay.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-e98099b41b696896",
    "title": "Босоногий Мальчик",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/bosonogiy_malchik.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-a8f07acea9ce74c6",
    "title": "Шаланды",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/shalandy.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-82823b0684859045",
    "title": "Песенка Шофера",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/pesenka_shofera.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-88f7b1f79cb1e87c",
    "title": "Граница",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/granitsa.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-9a1d96064994f159",
    "title": "Королева",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/koroleva.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-bea9431ef52d3c55",
    "title": "Оле Оле",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/ole_ole.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-42739ce133bb6c05",
    "title": "Мир Зелёного Цвета",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/mir_zelyonogo_tsveta.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-f0140680445ca82f",
    "title": "Ода Женщинам",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/oda_zhenschinam.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1be0cbbb6dc57063",
    "title": "Пароход",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/parohod.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-7e849d74f54d2a5e",
    "title": "Сочи",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/sochi.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-d859d00c7bc8c7f1",
    "title": "Вспомни О Нем",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/vspomni_o_nem.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-74e616d3f005c569",
    "title": "Бумажный Змей",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/bumazhny_zmey.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-42f2d738f70e3a43",
    "title": "Не Уходи Далеко",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/ne_uhodi_daleko.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-95008c27b20c376e",
    "title": "Две Минуты Жизни",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/dve_minuty_zhizni.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-aa5ca03e202d2aa0",
    "title": "Полночи",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/polnochi.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-adc731d067938bb0",
    "title": "Двери В Небеса",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/dveri_v_nebesa.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-42127748445e0baa",
    "title": "Она",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/ona.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-d9ee9a0b02b6d510",
    "title": "Все Для Тебя",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/vse_dlya_tebya.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b0ad59d9a5511d33",
    "title": "Дождь Надоел",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/dozhd_nadoel.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5521b65c52556e60",
    "title": "Каникулы Любви",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/kanikuly_lyubvi.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-c418586a634bc360",
    "title": "Пойдём домой",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/poydemdomoy.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-72f53547732038d3",
    "title": "Я не тот, ты не та",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/yanetottineta.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b4206d9944e359ad",
    "title": "До дыр",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/dodir.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-bf644f2774df25d2",
    "title": "Душа",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/dusha.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-fbe37c3aa32f7dd3",
    "title": "ДНК",
    "artist": "Леонид Агутин",
    "url": "https://karaopa2.ru/karaoke/performer/leonid_agutin/dnk.html",
    "popGroups": [
      "agutin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-16a511de948c11d7",
    "title": "Городок",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/gorodok.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-f63cbf413b3973cc",
    "title": "Художник Что Рисует Дождь",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/hudozhnik_chto_risuet_dozhd.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-753fdccb630ecf28",
    "title": "Ля-Ля-Фа",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/lya-lya-fa.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1ca483d762a583b1",
    "title": "Все В Твоих Руках",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/vse_v_tvoih_rukah.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-fb8fc3a7b394a834",
    "title": "Я Буду Всегда С Тобой",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/ya_budu_vsegda_s_toboy.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-7546c4b6647352cd",
    "title": "Гуд Бай Мой Мальчик",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/gud_bay_moy_malchik.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-fc372d41a6770f28",
    "title": "Симфония Дождя",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/simfoniya_dozhdya.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-c5f58263f4909134",
    "title": "Две Дороги",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/dve_dorogi.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-eeac1ca950788c16",
    "title": "Думать О Тебе",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/dumat_o_tebe.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-28a6eaafa5f7f0c0",
    "title": "День Опять Погас",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/den_opyat_pogas.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-3a93f1fa2c3238c5",
    "title": "Музыка",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/muzyka.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1bda2fa87ee767c1",
    "title": "Good Bye My Love Good Bye",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/good_bye_my_love_good_bye.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-857f0f20a89ef7b7",
    "title": "Фантазия",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/fantaziya.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-9d52d6067c317e68",
    "title": "Акварель",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/akvarel.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-a74325380c4c960b",
    "title": "Королева",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/koroleva.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-30d8f44b59396a07",
    "title": "Листья жёлтые",
    "artist": "Анжелика Варум",
    "url": "https://karaopa2.ru/karaoke/performer/anzhelika_varum/listyazheltie.html",
    "popGroups": [
      "varum"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-98b8f7985a20c043",
    "title": "Я То, Что Надо",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/ya_to__chto_nado.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-c8532845ff12c406",
    "title": "7000 Над Землёй",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/7000_nad_zemlyoy.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-7f275fe43af5126b",
    "title": "Дорога В Облака",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/doroga_v_oblaka.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-6ce75de51dc50e2c",
    "title": "Как Провожают Пароходы",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/kak_provozhayut_parohody.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-31fbc68cf48a4f53",
    "title": "Моряк Вразвалочку Сошёл На Берег",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/moryak_vrazvalochku_soshyol_na_bereg.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-686dfcf3828d90c5",
    "title": "Красавчик",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/krasavchik.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-329847a2c2abb931",
    "title": "Ну Вот И Все",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/nu_vot_i_vse.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-8ddfedda9d95ed87",
    "title": "Далеко",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/daleko.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-be871f5001a8b5a6",
    "title": "Гитара, Ты И Rock-N-Roll Всю Ночь",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/gitara__ty_i_rock-n-roll_vsyu_noch.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-cdb054788f0eded9",
    "title": "Москва-Нева",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/moskva-neva.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-2d21cfa7f926ebbc",
    "title": "Лучший город земли",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/luchshiy_gorod_zemli.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-44048b904f66065b",
    "title": "Полет",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/polet.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-813e5096145a006e",
    "title": "Девчонка 16 лет",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/devchonka_16_let.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1ffcabac1412c5ed",
    "title": "Звездный шейк",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/zvezdny_sheyk.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-2b3f0c112ca93d63",
    "title": "Московский бит",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/moskovskiy_bit.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-16db6ce5e814cb96",
    "title": "Мода",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/moda.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-8875d3a1e1594346",
    "title": "На краю земли",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/na_krayu_zemli.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-28687b5138002b25",
    "title": "Космический рок-н-ролл",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/kosmicheskiy_rok-n-roll.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-ef2a21f3ba69443f",
    "title": "Аэроплан",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/aeroplan.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-c3cd65373ddbbe54",
    "title": "Навсегда",
    "artist": "Валерий Сюткин",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_syutkin/navsegda.html",
    "popGroups": [
      "syutkin"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-bc7fc6d493275d12",
    "title": "Третье Сентября",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/trete_sentyabrya.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-9595ea0c69d79817",
    "title": "Марджанджа",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/mardzhanzha_mardzhanzha.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-f9e59310aa64e2e0",
    "title": "Заходите К Нам На Огонек",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/zahodite_k_nam_na_ogonek.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-60f2c7e312e01f9e",
    "title": "Гуляй Душа",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/gulyay_dusha.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-d736cf9ea7938b39",
    "title": "Обожаю Я Тебя",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/obozhayu_ya_tebya.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1873b83ce83c5719",
    "title": "Еврейский Портной",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/evreyskiy_portnoy.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-f0a959ecd3951fc9",
    "title": "Левый Берег Дона",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/levy_bereg_dona.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-13c4787540391468",
    "title": "Пальма Де Майорка",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/palma_de_mayorka.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5bb60e966914e1a7",
    "title": "Душа Болит",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/dusha_bolit.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-450c440f580f4be6",
    "title": "За Милых Дам",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/za_milyh_dam.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-e9c0fd90a4758e10",
    "title": "Сгорая, Плачут Свечи",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/sgoraya__plachut_svechi.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-311c779af552fd59",
    "title": "Ночной Гость",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/nochnoy_gost.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-166440d8bfa67935",
    "title": "Таганка",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/taganka.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1c0438429d664656",
    "title": "Крещатик",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/kreschatik.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-477594f9902bc051",
    "title": "Свечи",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/svechi.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-4bc762a56d31807b",
    "title": "Марина",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/marina.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-74d7af768fe764de",
    "title": "Скрипач Ростовский Моня",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/skripach_rostovskiy_monya.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1e2d7cb205917af8",
    "title": "Бутылка Вина",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/butylka_vina.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b99f3c8542a017fa",
    "title": "Тополя",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/topolya.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-7059fc97f017ee9f",
    "title": "И Льется Песня",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/i_letsya_pesnya_.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1aca48075187a464",
    "title": "Плачь скрипка",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/plachskripka.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-d650ab19bcec4859",
    "title": "Русская осень",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/russkayaosen.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-fc70afc248fdbfcd",
    "title": "Музыка любви",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/muzikalubvi.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-245225e7eb176063",
    "title": "Осенние каникулы души",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/osenniekanikulidushi.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b49bfbdd383b9156",
    "title": "Москвичка",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/moskvichka.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b5369192b3931d2f",
    "title": "Соло",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/solo.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-597dbecb006d762a",
    "title": "Петербургская Осень",
    "artist": "Михаил Шуфутинский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_shufutinskiy/peterburdskayaosen.html",
    "popGroups": [
      "shufutinsky"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-f1c6ad1b8f9a211b",
    "title": "У Деревни Крюково",
    "artist": "Самоцветы",
    "url": "https://karaopa2.ru/karaoke/performer/samotsvety/u_derevni_kryukovo.html",
    "popGroups": [
      "samotsvety"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-d9c76fbbfcd69bd1",
    "title": "Прошлогодние Глаза",
    "artist": "Самоцветы",
    "url": "https://karaopa2.ru/karaoke/performer/samotsvety/proshlogodnie_glaza.html",
    "popGroups": [
      "samotsvety"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-a03cd110862bd4b0",
    "title": "Не Надо Печалиться",
    "artist": "Самоцветы",
    "url": "https://karaopa2.ru/karaoke/performer/samotsvety/ne_nado_pechalitsya.html",
    "popGroups": [
      "samotsvety"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-cc1cc8ea4493784f",
    "title": "На Дальней Станции Сойду",
    "artist": "Самоцветы",
    "url": "https://karaopa2.ru/karaoke/performer/samotsvety/na_dalney_stantsii_soydu.html",
    "popGroups": [
      "samotsvety"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-619ac01e2a91232a",
    "title": "Там За Облаками",
    "artist": "Самоцветы",
    "url": "https://karaopa2.ru/karaoke/performer/samotsvety/tam_za_oblakami.html",
    "popGroups": [
      "samotsvety"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-5da782d0387dd804",
    "title": "Всё Что В Жизни Есть У Меня",
    "artist": "Самоцветы",
    "url": "https://karaopa2.ru/karaoke/performer/samotsvety/vsyo_chto_v_zhizni_est_u_menya.html",
    "popGroups": [
      "samotsvety"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-4763ebe7a508d65f",
    "title": "Мир не прост",
    "artist": "Самоцветы",
    "url": "https://karaopa2.ru/karaoke/performer/samotsvety/mirneprost.html",
    "popGroups": [
      "samotsvety"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b0ef1a8de4dd84d3",
    "title": "Клён (Там, где клён шумит)",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/tam_gde_klen_shumit.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-9858cc8c1d994e71",
    "title": "Так Вот Какая Ты",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/vse_kak_u_vzroslyh.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-3c91911b6bbbf24f",
    "title": "В Море Ходят Пароходы",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/v_more_hodyat_parohody.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-13e946421d405848",
    "title": "Я Иду К Тебе Навстречу",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/ya_idu_k_tebe_navstrechu.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-e6d3993212089e5d",
    "title": "Горько",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/gorko.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-cc1cb1aca73deb17",
    "title": "Белый Теплоход",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/bely_teplohod.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-1da6ba3aeb765bc9",
    "title": "Машина Времени",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/mashina_vremeni.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-a57b37992828b923",
    "title": "Моя Любовь Жива",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/moya_lyubov_zhiva.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-b25fd1987d34da8c",
    "title": "От Крутого Бережка",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/ot_krutogo_berezhka.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-a70e55535d563bac",
    "title": "Последнее Письмо",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/poslednee_pismo.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-eff7b724099588b4",
    "title": "Не Обижайся",
    "artist": "Синяя птица",
    "url": "https://karaopa2.ru/karaoke/performer/sinyaya_ptitsa/ne_obizhaysya.html",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-6b8bd68b0cd1721c",
    "title": "Я Уеду Жить В Лондон",
    "artist": "Тимати и Григорий Лепс",
    "url": "https://karaopa2.ru/karaoke/performer/grigoriy_leps/ya_uedu_zhit_v_london.html",
    "popGroups": [
      "collection"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-29a92b67d897b8c8",
    "title": "Рюмка водки на столе",
    "artist": "Григорий Лепс",
    "url": "https://karaopa2.ru/karaoke/performer/grigoriy_leps/rumkavodki.html",
    "popGroups": [
      "collection"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "pop-f6e282a64da7b62e",
    "title": "В краю магнолий",
    "artist": "Ариэль",
    "url": "https://www.youtube.com/watch?v=h-F2XkD2ToM",
    "popGroups": [
      "ariel"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "YouTube"
  },
  {
    "id": "pop-860c2ef356a44228",
    "title": "Уходишь Ты",
    "artist": "Ариэль",
    "url": "https://www.youtube.com/watch?v=yhji_uFcP34",
    "popGroups": [
      "ariel"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "YouTube"
  },
  {
    "id": "pop-4e700c305f83ff92",
    "title": "Яблони в цвету",
    "artist": "Евгений Мартынов",
    "url": "https://www.youtube.com/watch?v=aDVBOXsgy0A",
    "popGroups": [
      "martynov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "YouTube"
  },
  {
    "id": "pop-f08216f72b4abceb",
    "title": "Встреча друзей (Посидим по-хорошему)",
    "artist": "Евгений Мартынов",
    "url": "https://www.youtube.com/watch?v=jUDd0anYKQc",
    "popGroups": [
      "martynov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "YouTube"
  },
  {
    "id": "pop-eb77d29ffc321567",
    "title": "Моя любовь",
    "artist": "Евгений Мартынов и София Ротару",
    "url": "https://www.youtube.com/watch?v=v5dDOs46LEk",
    "popGroups": [
      "martynov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "YouTube"
  },
  {
    "id": "pop-55d32f6864ffeaf1",
    "title": "Время думать о девчонках",
    "artist": "Евгений Мартынов",
    "url": "https://www.youtube.com/watch?v=4VI-EbCRyGk",
    "popGroups": [
      "martynov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "YouTube"
  },
  {
    "id": "pop-e92c0e41cf08d871",
    "title": "Мамины глаза",
    "artist": "Евгений Мартынов",
    "url": "https://www.youtube.com/watch?v=IimtZp3v27E",
    "popGroups": [
      "martynov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "YouTube"
  },
  {
    "id": "pop-268dad251d1fca14",
    "title": "Вишня",
    "artist": "Евгений Мартынов",
    "url": "https://www.youtube.com/watch?v=GJ4Q6kgxQBc",
    "popGroups": [
      "martynov"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "YouTube"
  },
  {
    "id": "pop-ad14fb860fd0e385",
    "title": "Ты мне не снишься",
    "artist": "Синяя птица",
    "url": "https://www.youtube.com/watch?v=vl-7DUEk7-o",
    "popGroups": [
      "sinyaya-ptitsa"
    ],
    "kind": "Русская эстрада",
    "categories": [
      "rupop"
    ],
    "source": "YouTube"
  },
  {
    "id": "jazz-484ca351c240382a",
    "title": "My Way",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/my_way.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-a399a0c1b2619c07",
    "title": "Luck Be A Lady",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/luck_be_a_lady.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-60e4b17e7197220a",
    "title": "Somethin' Stupid",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/somethin_stupid.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-9d299a15c83cd078",
    "title": "Fly Me To The Moon",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/fly_me_to_the_moon.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-f8da3adf0d42754b",
    "title": "Strangers In The Night",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/strangers_in_the_night.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-20fcec9d9a34ce90",
    "title": "Let It Snow",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/let_it_snow.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-2ebcc8b4d208db52",
    "title": "New York, New York",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/new_york__new_york.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-7f0109631d3a7674",
    "title": "Moonlight Serenade",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/moonlight_serenade.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-e7df9b6634d6d409",
    "title": "That's Life",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/thats_life.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-7643ddc9bc5bc56f",
    "title": "Have Yourself A Merry Little Christmas",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/haveyourselfamerrylittlechristmas.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-342e0d3501b04e8b",
    "title": "I've Got You Under My Skin",
    "artist": "Frank Sinatra",
    "url": "https://karaopa2.ru/karaoke/performer/frank_sinatra/ihavegotyouundermyskin.html",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-dd0a44b8dd4ef96c",
    "title": "What A Wonderful World",
    "artist": "Louis Armstrong",
    "url": "https://karaopa2.ru/karaoke/performer/louis_armstrong/whatawonderfulworld.html",
    "language": "en",
    "aliases": "Луи Луис Армстронг",
    "jazzGroup": "armstrong",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-acd99f268a4b3ac6",
    "title": "La Vie En Rose",
    "artist": "Louis Armstrong",
    "url": "https://karaopa2.ru/karaoke/performer/louis_armstrong/lavieenrose.html",
    "language": "en",
    "aliases": "Луи Луис Армстронг",
    "jazzGroup": "armstrong",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-239332f2a1f6fa56",
    "title": "Summertime",
    "artist": "Louis Armstrong",
    "url": "https://karaopa2.ru/karaoke/performer/louis_armstrong/summertime.html",
    "language": "en",
    "aliases": "Луи Луис Армстронг",
    "jazzGroup": "armstrong",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "Караопа2"
  },
  {
    "id": "jazz-89e9b71bba1c31e4",
    "title": "Go Down Moses",
    "artist": "Louis Armstrong",
    "url": "https://www.youtube.com/watch?v=l4MNWPGCrxs",
    "language": "en",
    "aliases": "Луи Луис Армстронг",
    "jazzGroup": "armstrong",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "YouTube"
  },
  {
    "id": "jazz-881f8bba5432df61",
    "title": "Mack The Knife",
    "artist": "Louis Armstrong",
    "url": "https://www.youtube.com/watch?v=cifTbyNodh0",
    "language": "en",
    "aliases": "Луи Луис Армстронг",
    "jazzGroup": "armstrong",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "YouTube"
  },
  {
    "id": "jazz-93668eb9a8741c0c",
    "title": "We Have All The Time In The World",
    "artist": "Louis Armstrong",
    "url": "https://www.youtube.com/watch?v=V1cF2RhouqA",
    "language": "en",
    "aliases": "Луи Луис Армстронг",
    "jazzGroup": "armstrong",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "YouTube"
  },
  {
    "id": "jazz-a5378f956666d508",
    "title": "It Had To Be You",
    "artist": "Frank Sinatra",
    "url": "https://www.youtube.com/watch?v=ulvnmTtwqRo",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "YouTube"
  },
  {
    "id": "jazz-64e03352bc68cd3f",
    "title": "Love's Been Good To Me",
    "artist": "Frank Sinatra",
    "url": "https://www.youtube.com/watch?v=nyN-61gjK-8",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "YouTube"
  },
  {
    "id": "jazz-91828074f83e07a3",
    "title": "Let Me Try Again",
    "artist": "Frank Sinatra",
    "url": "https://www.youtube.com/watch?v=pSc7OH29Rrs",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "YouTube"
  },
  {
    "id": "jazz-e653d5818d922e3c",
    "title": "Summer Wind",
    "artist": "Frank Sinatra",
    "url": "https://www.youtube.com/watch?v=j2gxrVXL4QM",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "YouTube"
  },
  {
    "id": "jazz-80df8d7d73ab679b",
    "title": "Learnin' The Blues",
    "artist": "Frank Sinatra",
    "url": "https://www.youtube.com/watch?v=Jn8R1UnlqZk",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "YouTube"
  },
  {
    "id": "jazz-e40038e354a47da5",
    "title": "More (Theme from Mondo Cane)",
    "artist": "Frank Sinatra",
    "url": "https://www.youtube.com/watch?v=_NJMLXElKkk",
    "language": "en",
    "aliases": "Фрэнк Френк Синатра",
    "jazzGroup": "sinatra",
    "kind": "Джаз и свинг",
    "categories": [
      "jazz"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-b8038c89c8dce205",
    "title": "Happy New Year",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/happy_new_year.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-8599e2a14f4d1d8a",
    "title": "Mamma Mia",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/mamma_mia_.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-a7206cd99e003b5e",
    "title": "Money, Money, Money",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/money_money_money.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-35554bec9ef5a549",
    "title": "Dancing Queen",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/dancing_queen.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-9353ce3dfead429b",
    "title": "Gimme! Gimme! Gimme! (A Man After Midnight)",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/gimme.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-72028d7c9b2073f8",
    "title": "Fernando",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/fernando.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-4f07a094e5700b52",
    "title": "Super Trouper",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/super_trouper.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-88f1d929d7b3c9b6",
    "title": "Knowing Me, Knowing You",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/knowing_me_knowing_you.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-35ab8207ff8513c7",
    "title": "Waterloo",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/waterloo.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-dd89f2a27531174d",
    "title": "The Winner Takes It All",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/the_winner_takes_it_all_.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-fc76449e92057e54",
    "title": "I Have A Dream",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/i_have_a_dream_.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-fbcb5dcc8194326e",
    "title": "One Of Us",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/one_of_us.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-c7efdb90886fcfbb",
    "title": "Take A Chance On Me",
    "artist": "ABBA",
    "url": "https://karaopa2.ru/karaoke/performer/abba/takeachanceonme.html",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-789477a3584258b5",
    "title": "Sunny",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/sunny.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-b4085e8e1c7f938a",
    "title": "Daddy Cool",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/daddy_cool.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-9ca2ac07fe3a533a",
    "title": "Ma Baker",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/ma_baker.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-95bc3221cbd54530",
    "title": "Mary's Boy Child",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/marys_boy_child.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-d024d6c960c68b92",
    "title": "Belfast",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/belfast.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-d2d0c90e6028ad61",
    "title": "Rasputin",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/rasputin.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-4faa364cb47924b9",
    "title": "Rivers of Babylon",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/riversofbabylon.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-0b51976bb441a360",
    "title": "Never Change Lovers In The Middle Of The Night",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/never_change_lovers_in_the_middle_of_the_night.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-b73a96c88a903191",
    "title": "Bahama Mama",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/bahama_mama.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-e8b951ae2cb13c20",
    "title": "Auld Lang Syne",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/auld_lang_syne.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-699e13412d5805b9",
    "title": "Feliz Navidad",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/feliz_navidad.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-905ba3e59cc60a4b",
    "title": "Kalimba de Luna",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/kalimba_de_luna.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-89b2adbeb33ffec6",
    "title": "We Kill The World",
    "artist": "Boney M.",
    "url": "https://karaopa2.ru/karaoke/performer/boney_m/we_kill_the_world.html",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-b02798a515d4cf20",
    "title": "The Way You Make Me Feel",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/the_way_you_make_me_feel.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-86f6b4d66461a0dd",
    "title": "You Are Not Alone",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/you_are_not_alone.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-d532b8b6f2ed94e2",
    "title": "Earth Song",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/earth_song.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-aa7f62bc7ab02233",
    "title": "They Don't Care About Us",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/they_dont_care_about_us.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-edd46ef1d86307d4",
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/billie_jean.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-44fb5c6ba18c950c",
    "title": "Man in the Mirror",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/man_in_the_mirror.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-15ae4daa66820879",
    "title": "Give In To Me",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/give_in_to_me.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-a518e4bacedc25b8",
    "title": "Thriller",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/thriller.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-56975b567f8fdc69",
    "title": "Dirty Diana",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/dirty_diana.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-10150d98fb54893d",
    "title": "Smooth Criminal",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/smooth_criminal.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-c40360541739b0d1",
    "title": "Beat It",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/beat_it.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-8a3d9947aeb3580c",
    "title": "Best Of Joy",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/best_of_joy.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-2ba3c7850896c7d8",
    "title": "Why",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/why.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-b475dc1a533049f7",
    "title": "Black Or White",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/black_or_white.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-909610b46d6aeb31",
    "title": "Fall Again",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/fall_again.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-59d2755c2618d431",
    "title": "I Just Can't Stop Loving You",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/i_just_cant_stop_loving_you.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-25ef28c163080bd8",
    "title": "Blue Gangsta",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/blue_gangsta.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-92bd95802c569e06",
    "title": "Will You Be There",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/will_you_be_there.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-af814421bfd76580",
    "title": "Stranger In Moscow",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/stranger_in_moscow.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-bd9fa037c87daad0",
    "title": "Rock With You",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/rock_with_you.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-7f77f86233432fe1",
    "title": "Hollywood Tonight",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/hollywood_tonight.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-5d8f0e2b0a45223f",
    "title": "Human Nature",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/human_nature.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-02bbf767134cb529",
    "title": "Childhood",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/childhood.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-aa57c31f75945dc6",
    "title": "Don't Stop 'Til You Get Enough",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/dont_stop_til_you_get_enough.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-9ee386fdc5899141",
    "title": "Ben",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/ben.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-697953aec0f56c15",
    "title": "Butterflies",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/butterflies.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-9bfa65ec90a43748",
    "title": "Jam",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/jam.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-b0e8ae0a53eb9ee1",
    "title": "Bad",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/bad.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-9e097118cdb8c736",
    "title": "Whatever Happens",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/whatever_happens.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-4bf02ee51333ef65",
    "title": "This Time Around",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/this_time_around.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-91526c074c732be2",
    "title": "Liberian Girl",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/liberian_girl.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-d1ab96bfcb4bb1c0",
    "title": "The Girl Is Mine",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/the_girl_is_mine.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-eef786c93b37ee62",
    "title": "You Rock My World",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/you_rock_my_world.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-1cc43588eb2eceab",
    "title": "One Day In Your Life",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/one_day_in_your_life.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-3a534ecd835f2126",
    "title": "Smile",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/smile.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-fb9e9c4952cfe2f9",
    "title": "Blood On The Dance Floor",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/blood_on_the_dance_floor.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-2c3fd559ed18208f",
    "title": "Leave Me Alone",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/leave_me_alone.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-4047f6962474e598",
    "title": "We're Almost There",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/were_almost_there.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-517be282c6a308be",
    "title": "Come Together",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/come_together.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-a6700a01c4c10861",
    "title": "Cry",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/cry.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-15ad6bfb5928b8d0",
    "title": "Music And Me",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/music_and_me.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-55589989b1028753",
    "title": "Speechless",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/speechless.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-d1493919e7af14ad",
    "title": "Remember The Time",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/remember_the_time.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-af9c9378d411d9cb",
    "title": "Who Is It",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/who_is_it.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-6ceb49adf68268d1",
    "title": "Why You Wanna Trip On Me",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/why_you_wanna_trip_on_me.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-f63ad1d736f0d216",
    "title": "Love Never Felt So Good",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/love_never_felt_so_good.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-83f1bd67070f7f1d",
    "title": "Little Susie",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/little_susie.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-4148529396f2c74a",
    "title": "Another Part Of Me",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/another_part_of_me.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-01b413dd2cba0c08",
    "title": "Dangerous",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/dangerous.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-9529012ed26be1cf",
    "title": "Heal The World",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/heal_the_world.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-4ac3837e22e9c3c7",
    "title": "In The Closet",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/in_the_closet.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-3b0a62d7a8fd0fbe",
    "title": "You Can't Win",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/you_cant_win.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-aa25e34c1c745a3d",
    "title": "Off The Wall",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/off_the_wall.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-3bc6b5de9d28f6b5",
    "title": "She's Out Of My Life",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/shes_out_of_my_life.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-dcfd972e0b6f5a0d",
    "title": "Say Say Say",
    "artist": "Michael Jackson",
    "url": "https://karaopa2.ru/karaoke/performer/michael_jackson/say_say_say.html",
    "language": "en",
    "aliases": "Майкл Джексон Michael Jakson",
    "enPopGroup": "michael-jackson",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-043f7fe7cab4b75b",
    "title": "Poker Face",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/poker_face.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-29d41e7707377cfc",
    "title": "Bad Romance",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/bad_romance.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-bb75f032d7853ac1",
    "title": "Paparazzi",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/paparazzi.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-7d37c072877f5c8b",
    "title": "Alejandro",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/alejandro.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-01cf3dba0518e2b1",
    "title": "Judas",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/jiudas.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-6c88ab5fa6144943",
    "title": "Shallow",
    "artist": "Lady Gaga & Bradley Cooper",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/shallow.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-ed9c63e2d058ec53",
    "title": "Always Remember Us This Way",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/always_remember_us_this_way.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-f5514238bd3c023f",
    "title": "Telephone",
    "artist": "Lady Gaga & Beyoncé",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/telephone.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-ab6ef82235fdb20f",
    "title": "LoveGame",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/love_game.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-bbbf5244ca035750",
    "title": "Million Reasons",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/million_reasons.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-ef1e7839cbdca670",
    "title": "Born This Way",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/born_this_way.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-e46be8cd925004a6",
    "title": "Marry The Night",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/marry_the_night.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-6ba46336d26e65cf",
    "title": "Dope",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/dope.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-907414a51b3c77fe",
    "title": "Venus",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/venus.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-d1913552b43c4aa5",
    "title": "Perfect Illusion",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/perfect_illusion.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-637d334b7ea89188",
    "title": "Joanne",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/joanne.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-226d50069046a54d",
    "title": "The Cure",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/the_cure.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-dbc9b6fbddbead96",
    "title": "Do What U Want",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/do_what_u_want.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-b1184aef3a5dad88",
    "title": "The Edge of Glory",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/the_edge_of_glory.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-a82c789552c6fe70",
    "title": "The Lady Is a Tramp",
    "artist": "Tony Bennett & Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/tothe_lady_is_a_tramp.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-48ba44e36e971b55",
    "title": "Artpop",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/artpop.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-4023b87e26811661",
    "title": "Abracadabra",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/abracadabra.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-bd5338dfd05c3d28",
    "title": "Bloody Mary",
    "artist": "Lady Gaga",
    "url": "https://karaopa2.ru/karaoke/performer/lady_gaga/bloodymary.html",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "Караопа2"
  },
  {
    "id": "enpop-403075af7cd334ea",
    "title": "Hasta Mañana",
    "artist": "ABBA",
    "url": "https://www.youtube.com/watch?v=CtJZkqWwgSo",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-2716c768ffd3b221",
    "title": "Slipping Through My Fingers",
    "artist": "ABBA",
    "url": "https://www.youtube.com/watch?v=YRkfxzvdfzs",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-fb8ce0b334da60e5",
    "title": "Brown Girl In The Ring",
    "artist": "Boney M.",
    "url": "https://www.youtube.com/watch?v=1j8zRQKurL4",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-94c8e3566ef76ed7",
    "title": "Going Back West",
    "artist": "Boney M.",
    "url": "https://www.youtube.com/watch?v=_Qd3iAE2hiQ",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-e8bf6ca74252f4f5",
    "title": "Gotta Go Home",
    "artist": "Boney M.",
    "url": "https://www.youtube.com/watch?v=tv7O36Hu6eQ",
    "language": "en",
    "aliases": "Бони М Бони Эм Бонни М BoneyM",
    "enPopGroup": "boney-m",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-dc27b7d763eaca5f",
    "title": "Just Dance",
    "artist": "Lady Gaga & Colby O'Donis",
    "url": "https://www.youtube.com/watch?v=yju6MkQnWHI",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-22b3620bebf26eaa",
    "title": "Applause",
    "artist": "Lady Gaga",
    "url": "https://www.youtube.com/watch?v=Y0NUzkwlgjk",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-f9ed85bc1acd77b2",
    "title": "Die with a Smile",
    "artist": "Lady Gaga & Bruno Mars",
    "url": "https://www.youtube.com/watch?v=1--pwdu-eJE",
    "language": "en",
    "aliases": "Леди Гага Лэди Гага",
    "enPopGroup": "lady-gaga",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-0e76a2e8572ae695",
    "title": "Chiquitita",
    "artist": "ABBA",
    "url": "https://www.youtube.com/watch?v=EeBJ86Ib1cg",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-d63cabaa648a173b",
    "title": "SOS",
    "artist": "ABBA",
    "url": "https://www.youtube.com/watch?v=8Wv7pvq7ZIw",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "enpop-682f3c772b42aef4",
    "title": "Voulez-Vous",
    "artist": "ABBA",
    "url": "https://www.youtube.com/watch?v=G4F3twgupLo",
    "language": "en",
    "aliases": "Абба АББА",
    "enPopGroup": "abba",
    "kind": "Англоязычный поп",
    "categories": [
      "enpop"
    ],
    "source": "YouTube"
  },
  {
    "id": "hit-7267aa99866902ba",
    "title": "Waka Waka (This Time for Africa)",
    "artist": "Shakira",
    "url": "https://karaopa2.ru/karaoke/performer/shakira/waka_waka.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "aliases": "Вака вака Woka Woka Шакира",
    "enPopGroup": "artist-7446a08e46"
  },
  {
    "id": "hit-5bae8d19e4c649ce",
    "title": "Whenever, Wherever",
    "artist": "Shakira",
    "url": "https://karaopa2.ru/karaoke/performer/shakira/whenever.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-7446a08e46"
  },
  {
    "id": "hit-badbf55b9d06fc02",
    "title": "Like A Prayer",
    "artist": "Madonna",
    "url": "https://karaopa2.ru/karaoke/performer/madonna/like_a_prayer.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-199e3918a2"
  },
  {
    "id": "hit-c494660cafdcab7a",
    "title": "La Isla Bonita",
    "artist": "Madonna",
    "url": "https://karaopa2.ru/karaoke/performer/madonna/la_isla_bonita.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-199e3918a2"
  },
  {
    "id": "hit-5704ebb9df8ec13d",
    "title": "Hung Up",
    "artist": "Madonna",
    "url": "https://karaopa2.ru/karaoke/performer/madonna/hung_up.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-199e3918a2"
  },
  {
    "id": "hit-81b3ef5659539217",
    "title": "Careless Whisper",
    "artist": "George Michael",
    "url": "https://karaopa2.ru/karaoke/performer/george_michael/careless_whisper.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-43cc6268c1"
  },
  {
    "id": "hit-051648b06b1164e6",
    "title": "Faith",
    "artist": "George Michael",
    "url": "https://karaopa2.ru/karaoke/performer/george_michael/faith.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-43cc6268c1"
  },
  {
    "id": "hit-326c114435485d85",
    "title": "Rolling In The Deep",
    "artist": "Adele",
    "url": "https://karaopa2.ru/karaoke/performer/adele/rolling_in_the_deep.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-10c2d63040"
  },
  {
    "id": "hit-4af751d6db7ac7ee",
    "title": "Someone Like You",
    "artist": "Adele",
    "url": "https://karaopa2.ru/karaoke/performer/adele/someone_like_you.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-10c2d63040"
  },
  {
    "id": "hit-3d8443e02242074a",
    "title": "Hello",
    "artist": "Adele",
    "url": "https://karaopa2.ru/karaoke/performer/adele/hello.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-10c2d63040"
  },
  {
    "id": "hit-0d88f18335c76dd3",
    "title": "I Will Always Love You",
    "artist": "Whitney Houston",
    "url": "https://karaopa2.ru/karaoke/performer/whitney_houston/i_will_always_love_you.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-f033a43be5"
  },
  {
    "id": "hit-2c0731c011a4b991",
    "title": "My Heart Will Go On",
    "artist": "Céline Dion",
    "url": "https://karaopa2.ru/karaoke/performer/celine_dion/my_heart_will_go_on.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-4646cb5f88"
  },
  {
    "id": "hit-b405f7c034bf1e99",
    "title": "Perfect",
    "artist": "Ed Sheeran",
    "url": "https://karaopa2.ru/karaoke/performer/ed_sheeran/perfect.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-f680a868f4"
  },
  {
    "id": "hit-492afeb0ea9326f3",
    "title": "Shape Of You",
    "artist": "Ed Sheeran",
    "url": "https://karaopa2.ru/karaoke/performer/ed_sheeran/shape_of_you.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-f680a868f4"
  },
  {
    "id": "hit-4a8fe4a988e735aa",
    "title": "Halo",
    "artist": "Beyoncé",
    "url": "https://karaopa2.ru/karaoke/performer/beyonce/halo.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-95903d66eb"
  },
  {
    "id": "hit-8801b72b28f18998",
    "title": "Livin' la Vida Loca",
    "artist": "Ricky Martin",
    "url": "https://karaopa2.ru/karaoke/performer/ricky_martin/livin_la_vida_loca.html",
    "source": "Караопа2",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-fd4e949dfc"
  },
  {
    "id": "hit-e490a0c43cfcf7da",
    "title": "Don't Stop Believin'",
    "artist": "Journey",
    "url": "https://karaopa2.ru/karaoke/performer/journey/dontstopbelievin.html",
    "source": "Караопа2",
    "categories": [
      "enrock"
    ],
    "kind": "Англоязычный рок",
    "language": "en",
    "enRockGroup": "artist-fe50ed105f"
  },
  {
    "id": "hit-80055fede56d8d55",
    "title": "Losing My Religion",
    "artist": "R.E.M.",
    "url": "https://karaopa2.ru/karaoke/performer/rem/losing_my_religion.html",
    "source": "Караопа2",
    "categories": [
      "enrock"
    ],
    "kind": "Англоязычный рок",
    "language": "en",
    "enRockGroup": "artist-f9f67a3f61"
  },
  {
    "id": "hit-9213ffae8b4df1dc",
    "title": "Everything I Do I Do It For You",
    "artist": "Bryan Adams",
    "url": "https://karaopa2.ru/karaoke/performer/bryan_adams/everything_i_do_i_do_it_for_you.html",
    "source": "Караопа2",
    "categories": [
      "enrock"
    ],
    "kind": "Англоязычный рок",
    "language": "en",
    "enRockGroup": "artist-d14c259f9a"
  },
  {
    "id": "hit-721c0d9108e54928",
    "title": "Мой Рок-Н-Ролл",
    "artist": "Би-2",
    "url": "https://karaopa2.ru/karaoke/performer/bi-2/moy_rok-n-roll.html",
    "source": "Караопа2",
    "categories": [
      "rurock"
    ],
    "kind": "Русский рок",
    "rockGroup": "artist-6dd55688d5"
  },
  {
    "id": "hit-4b9776d577e36257",
    "title": "Серебро",
    "artist": "Би-2",
    "url": "https://karaopa2.ru/karaoke/performer/bi-2/serebro.html",
    "source": "Караопа2",
    "categories": [
      "rurock"
    ],
    "kind": "Русский рок",
    "rockGroup": "artist-6dd55688d5"
  },
  {
    "id": "hit-58674f1f59ebd802",
    "title": "Полковнику Никто не Пишет",
    "artist": "Би-2",
    "url": "https://karaopa2.ru/karaoke/performer/bi-2/polkovniku_nikto_ne_pishet.html",
    "source": "Караопа2",
    "categories": [
      "rurock"
    ],
    "kind": "Русский рок",
    "rockGroup": "artist-6dd55688d5"
  },
  {
    "id": "hit-cb8bd725bc1e0edb",
    "title": "Как На Войне",
    "artist": "Агата Кристи",
    "url": "https://karaopa2.ru/karaoke/performer/agata_kristi/kak_na_voyne.html",
    "source": "Караопа2",
    "categories": [
      "rurock"
    ],
    "kind": "Русский рок",
    "rockGroup": "artist-5e6d459f27"
  },
  {
    "id": "hit-971ba36954d1d801",
    "title": "Сказочная Тайга",
    "artist": "Агата Кристи",
    "url": "https://karaopa2.ru/karaoke/performer/agata_kristi/skazochnaya_tayga.html",
    "source": "Караопа2",
    "categories": [
      "rurock"
    ],
    "kind": "Русский рок",
    "rockGroup": "artist-5e6d459f27"
  },
  {
    "id": "hit-20153e819bfde262",
    "title": "О Любви",
    "artist": "Чиж & Co",
    "url": "https://karaopa2.ru/karaoke/performer/chizh_i_ko/o_lyubvi.html",
    "source": "Караопа2",
    "categories": [
      "rurock"
    ],
    "kind": "Русский рок",
    "rockGroup": "artist-673386a6f9"
  },
  {
    "id": "hit-0bad0764c3f85bb9",
    "title": "Фантом",
    "artist": "Чиж & Co",
    "url": "https://karaopa2.ru/karaoke/performer/chizh_i_ko/fantom.html",
    "source": "Караопа2",
    "categories": [
      "rurock"
    ],
    "kind": "Русский рок",
    "rockGroup": "artist-673386a6f9"
  },
  {
    "id": "hit-22bfd187ae02d16d",
    "title": "Миллион Алых Роз",
    "artist": "Алла Пугачёва",
    "url": "https://karaopa2.ru/karaoke/performer/alla_pugacheva/million_alyh_roz.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-4d25858773"
    ]
  },
  {
    "id": "hit-1bccc287a3e71d57",
    "title": "Позови Меня С Собой",
    "artist": "Алла Пугачёва",
    "url": "https://karaopa2.ru/karaoke/performer/alla_pugacheva/pozovi_menya_s_soboy.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-4d25858773"
    ]
  },
  {
    "id": "hit-465e104ce5462e8c",
    "title": "Хуторянка",
    "artist": "София Ротару",
    "url": "https://karaopa2.ru/karaoke/performer/sofiya_rotaru/hutoryanka.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-d8467b34e6"
    ]
  },
  {
    "id": "hit-2ebb6b0d8c5d952b",
    "title": "Лаванда",
    "artist": "София Ротару",
    "url": "https://karaopa2.ru/karaoke/performer/sofiya_rotaru/lavanda.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-d8467b34e6"
    ]
  },
  {
    "id": "hit-da8a77216105a223",
    "title": "Дельтаплан",
    "artist": "Валерий Леонтьев",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_leontev/deltaplan.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-d2bc98bc0d"
    ]
  },
  {
    "id": "hit-8c907b74153898b1",
    "title": "Зеленоглазое Такси",
    "artist": "Михаил Боярский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_boyarskiy/zelenoglazoe_taksi.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-99a9ba9ba3"
    ]
  },
  {
    "id": "hit-08871b372a293b4b",
    "title": "Спасибо Родная",
    "artist": "Михаил Боярский",
    "url": "https://karaopa2.ru/karaoke/performer/mihail_boyarskiy/spasibo_rodnaya.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-99a9ba9ba3"
    ]
  },
  {
    "id": "hit-3217cd124fb580ac",
    "title": "Младший Лейтенант",
    "artist": "Ирина Аллегрова",
    "url": "https://karaopa2.ru/karaoke/performer/irina_allegrova/mladshiy_leytenant.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-5be1e68937"
    ]
  },
  {
    "id": "hit-a1ce0453c1508ea6",
    "title": "Красиво",
    "artist": "Валерий Меладзе",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_meladze/krasivo.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-dc8cdf2714"
    ]
  },
  {
    "id": "hit-777d9c9e97805f15",
    "title": "Сэра",
    "artist": "Валерий Меладзе",
    "url": "https://karaopa2.ru/karaoke/performer/valeriy_meladze/sera.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-dc8cdf2714"
    ]
  },
  {
    "id": "hit-b645a508788a1721",
    "title": "Чистые Пруды",
    "artist": "Игорь Тальков",
    "url": "https://karaopa2.ru/karaoke/performer/igor_talkov/chistye_prudy.html",
    "source": "Караопа2",
    "categories": [
      "rupop"
    ],
    "kind": "Русская эстрада",
    "popGroups": [
      "artist-44b8f7dc61"
    ]
  },
  {
    "id": "hit-36820a4a7b27a8de",
    "title": "Плот",
    "artist": "Юрий Лоза",
    "url": "https://karaopa2.ru/karaoke/performer/yuriy_loza/moy_plot.html",
    "source": "Караопа2",
    "categories": [
      "bards"
    ],
    "kind": "Барды",
    "bardGroups": [
      "artist-949a933b88"
    ]
  },
  {
    "id": "hit-5bc2ba8e7a9c6515",
    "title": "Перезимуем",
    "artist": "Митя Фомин",
    "url": "https://karaopa2.ru/karaoke/performer/mitya_fomin/perezimuem.html",
    "source": "Караопа2",
    "categories": [
      "newyear"
    ],
    "kind": "Новогодние"
  },
  {
    "id": "hit-c2bfe1c7a7515f58",
    "title": "Песенка Чебурашки",
    "artist": "Песни из мультфильмов",
    "url": "https://karaopa2.ru/karaoke/performer/pesni_iz_multfilmov/pesenkacheburashki.html",
    "source": "Караопа2",
    "categories": [
      "cartoons"
    ],
    "kind": "Детские и семейные",
    "movie": "Чебурашка"
  },
  {
    "id": "hit-2142fbe33edd2b92",
    "title": "The Final Countdown",
    "artist": "Europe",
    "url": "https://www.youtube.com/watch?v=nDujvWRVMvQ",
    "source": "YouTube",
    "categories": [
      "enrock"
    ],
    "kind": "Англоязычный рок",
    "language": "en",
    "enRockGroup": "artist-e595f45dc6"
  },
  {
    "id": "hit-00f6304ffb9210d7",
    "title": "Eye of the Tiger",
    "artist": "Survivor",
    "url": "https://www.youtube.com/watch?v=-8PTjTDwf9M",
    "source": "YouTube",
    "categories": [
      "enrock"
    ],
    "kind": "Англоязычный рок",
    "language": "en",
    "enRockGroup": "artist-51b40c9947"
  },
  {
    "id": "hit-1bc8a6d847b9ed00",
    "title": "Dust in the Wind",
    "artist": "Kansas",
    "url": "https://www.youtube.com/watch?v=s9eBbbMwhIs",
    "source": "YouTube",
    "categories": [
      "enrock"
    ],
    "kind": "Англоязычный рок",
    "language": "en",
    "enRockGroup": "artist-79f6d0732a"
  },
  {
    "id": "hit-55995a1b03b1693e",
    "title": "Summer of ’69",
    "artist": "Bryan Adams",
    "url": "https://www.youtube.com/watch?v=CDPujxEQq60",
    "source": "YouTube",
    "categories": [
      "enrock"
    ],
    "kind": "Англоязычный рок",
    "language": "en",
    "enRockGroup": "artist-d14c259f9a"
  },
  {
    "id": "hit-4d71d443b44089af",
    "title": "Hips Don’t Lie",
    "artist": "Shakira & Wyclef Jean",
    "url": "https://www.youtube.com/watch?v=_JRme9n0lIY",
    "source": "YouTube",
    "categories": [
      "enpop"
    ],
    "kind": "Англоязычный поп",
    "language": "en",
    "enPopGroup": "artist-1a8c6ce371"
  },
  {
    "id": "hit-25d9a08159e41ba7",
    "title": "Unforgettable",
    "artist": "Nat King Cole",
    "url": "https://www.youtube.com/watch?v=oqPTo0pQqmo",
    "source": "YouTube",
    "categories": [
      "jazz"
    ],
    "kind": "Джаз и свинг",
    "language": "en",
    "jazzGroup": "artist-cd6dd9b095"
  },
  {
    "id": "hit-74a5061178c76b25",
    "title": "Sway",
    "artist": "Dean Martin",
    "url": "https://www.youtube.com/watch?v=K6T5ph2BJwA",
    "source": "YouTube",
    "categories": [
      "jazz"
    ],
    "kind": "Джаз и свинг",
    "language": "en",
    "jazzGroup": "artist-a60dfe34ae"
  },
  {
    "id": "hit-5f552acbbfcb4fc5",
    "title": "Everybody Loves Somebody",
    "artist": "Dean Martin",
    "url": "https://www.youtube.com/watch?v=6vxY4GTssSg",
    "source": "YouTube",
    "categories": [
      "jazz"
    ],
    "kind": "Джаз и свинг",
    "language": "en",
    "jazzGroup": "artist-a60dfe34ae"
  },
  {
    "id": "hit-3228d407d45a1fa9",
    "title": "Dream a Little Dream of Me",
    "artist": "Ella Fitzgerald & Louis Armstrong",
    "url": "https://www.youtube.com/watch?v=7eoLThzOfe0",
    "source": "YouTube",
    "categories": [
      "jazz"
    ],
    "kind": "Джаз и свинг",
    "language": "en",
    "jazzGroup": "artist-0ca6d8b8f3"
  },
  {
    "id": "hit-b346cd7c9f8b87d5",
    "title": "Summertime",
    "artist": "Ella Fitzgerald",
    "url": "https://www.youtube.com/watch?v=7L2VlbUdTmw",
    "source": "YouTube",
    "categories": [
      "jazz"
    ],
    "kind": "Джаз и свинг",
    "language": "en",
    "jazzGroup": "artist-2694c325d5"
  },
  {
    "id": "hit-526af640992c908c",
    "title": "Девушка из харчевни",
    "artist": "Новелла Матвеева",
    "url": "https://www.youtube.com/watch?v=11WQtl_58EM",
    "source": "YouTube",
    "categories": [
      "bards"
    ],
    "kind": "Барды",
    "bardGroups": [
      "artist-cc46d403a6"
    ]
  },
  {
    "id": "hit-feda8ebc22a9321b",
    "title": "Большой секрет",
    "artist": "Песни из мультфильмов",
    "url": "https://www.youtube.com/watch?v=HjhvD4B4g20",
    "source": "YouTube",
    "categories": [
      "cartoons"
    ],
    "kind": "Детские и семейные",
    "movie": "Большой секрет для маленькой компании"
  },
  {
    "id": "hit-5fb815fa12ff44ca",
    "title": "Если добрый ты",
    "artist": "Песни из мультфильмов",
    "url": "https://www.youtube.com/watch?v=MuTjDf3kTQM",
    "source": "YouTube",
    "categories": [
      "cartoons"
    ],
    "kind": "Детские и семейные",
    "movie": "День рождения Леопольда"
  },
  {
    "id": "hit-5f4da7c7a5515fac",
    "title": "Помоги мне",
    "artist": "Аида Ведищева",
    "url": "https://www.youtube.com/watch?v=9lp3W8cZg6A",
    "source": "YouTube",
    "categories": [
      "films"
    ],
    "kind": "Песни из кино",
    "movie": "Бриллиантовая рука",
    "screenType": "film"
  },
  {
    "id": "hit-32f74e0bd5f67edd",
    "title": "Губит людей не пиво",
    "artist": "Вячеслав Невинный",
    "url": "https://www.youtube.com/watch?v=dBuozzmK6lg",
    "source": "YouTube",
    "categories": [
      "films"
    ],
    "kind": "Песни из кино",
    "movie": "Не может быть!",
    "screenType": "film"
  },
  {
    "id": "hit-7fccb95c82b0b7a1",
    "title": "Тёмная ночь",
    "artist": "Марк Бернес",
    "url": "https://www.youtube.com/watch?v=zWoqck0J3Rc",
    "source": "YouTube",
    "categories": [
      "films"
    ],
    "kind": "Песни из кино",
    "movie": "Два бойца",
    "screenType": "film"
  },
  {
    "id": "hit-e27b9619dfd04230",
    "title": "הללויה",
    "artist": "גלי עטרי וחלב ודבש",
    "url": "https://www.youtube.com/watch?v=OLLQsUlesD4",
    "source": "YouTube",
    "categories": [
      "hebrew"
    ],
    "kind": "На иврите",
    "language": "he"
  },
  {
    "id": "hit-eab7538f2409bb3b",
    "title": "הבה נגילה",
    "artist": "עממי",
    "url": "https://www.youtube.com/watch?v=-IAHzsDZJv8",
    "source": "YouTube",
    "categories": [
      "hebrew"
    ],
    "kind": "На иврите",
    "language": "he"
  },
  {
    "id": "hit-a7b649a2fe71faa1",
    "title": "זה הכל בשבילך",
    "artist": "דני סנדרסון ומזי כהן",
    "url": "https://www.youtube.com/watch?v=Tm6jQu60huA",
    "source": "YouTube",
    "categories": [
      "hebrew"
    ],
    "kind": "На иврите",
    "language": "he"
  }
];
const ROCK_GROUPS = [{"id": "akvarium", "title": "Аквариум и Борис Гребенщиков"}, {"id": "mashina", "title": "Машина времени и Андрей Макаревич"}, {"id": "voskresenie", "title": "Воскресение"}, {"id": "nautilus", "title": "Наутилус Помпилиус"}, {"id": "kino", "title": "Кино"}, {"id": "ddt", "title": "ДДТ"}, {"id": "chayf", "title": "Чайф"}, {"id": "splin", "title": "Сплин"}, {"id": "zemfira", "title": "Земфира"}, {"id": "alisa", "title": "Алиса"}, {"id": "bravo", "title": "Браво"}, {"id": "sekret", "title": "Секрет"}, {"id": "piknik", "title": "Пикник"}, {"id": "avtograf", "title": "Автограф"}, {"id": "cherniy-kofe", "title": "Чёрный кофе"}, {"id": "ariya", "title": "Ария"}, {"id": "gradskiy", "title": "Александр Градский"}, {"id": "krematoriy", "title": "Крематорий"}, {"id": "artist-6dd55688d5", "title": "Би-2"}, {"id": "artist-5e6d459f27", "title": "Агата Кристи"}, {"id": "artist-673386a6f9", "title": "Чиж & Co"}];
const BARD_GROUPS = [{"id": "okudzhava", "title": "Булат Окуджава"}, {"id": "vysotsky", "title": "Владимир Высоцкий"}, {"id": "nikitiny", "title": "Сергей и Татьяна Никитины"}, {"id": "galich", "title": "Александр Галич"}, {"id": "shaov", "title": "Тимур Шаов"}, {"id": "yashchenko", "title": "Зоя Ященко / Белая гвардия"}, {"id": "vizbor", "title": "Юрий Визбор"}, {"id": "mityaev", "title": "Олег Митяев"}, {"id": "kukin", "title": "Юрий Кукин"}, {"id": "gorodnitsky", "title": "Александр Городницкий"}, {"id": "rosenbaum", "title": "Александр Розенбаум"}, {"id": "campfire", "title": "Песни у костра"}, {"id": "artist-949a933b88", "title": "Юрий Лоза"}, {"id": "artist-cc46d403a6", "title": "Новелла Матвеева"}];
const EN_ROCK_GROUPS = [{"id": "beatles-lennon", "title": "The Beatles / John Lennon", "aliases": "Битлз Битлз Леннон Ленон Джон"}, {"id": "elvis", "title": "Elvis Presley", "aliases": "Элвис Пресли Престли"}, {"id": "scorpions", "title": "Scorpions", "aliases": "Скорпионс"}, {"id": "deep-purple", "title": "Deep Purple", "aliases": "Дип Перпл Пёрпл"}, {"id": "queen", "title": "Queen", "aliases": "Квин Фредди Меркьюри"}, {"id": "led-zeppelin", "title": "Led Zeppelin", "aliases": "Лед Зеппелин Лэд Цеппелин"}, {"id": "pink-floyd", "title": "Pink Floyd", "aliases": "Пинк Флойд"}, {"id": "rolling-stones", "title": "The Rolling Stones", "aliases": "Роллинг Стоунз Ролинг"}, {"id": "doors", "title": "The Doors", "aliases": "Дорз Дорс"}, {"id": "eagles", "title": "Eagles", "aliases": "Иглз Иглс"}, {"id": "acdc", "title": "AC/DC", "aliases": "Эй Си Ди Си Эйсидиси"}, {"id": "dire-straits", "title": "Dire Straits", "aliases": "Дайр Стрейтс"}, {"id": "aerosmith", "title": "Aerosmith", "aliases": "Аэросмит Аэросмит"}, {"id": "bon-jovi", "title": "Bon Jovi", "aliases": "Бон Джови Бон Джови Bon Jovy"}, {"id": "sting", "title": "Sting", "aliases": "Стинг"}, {"id": "police", "title": "The Police", "aliases": "Полис Полиc"}, {"id": "cohen", "title": "Leonard Cohen", "aliases": "Леонард Коэн Коен Кохен"}, {"id": "alice-cooper", "title": "Alice Cooper", "aliases": "Элис Элис Купер Элис Купер Poison"}, {"id": "smokie", "title": "Smokie", "aliases": "Смоки Alice Элис"}, {"id": "artist-fe50ed105f", "title": "Journey", "aliases": ""}, {"id": "artist-f9f67a3f61", "title": "R.E.M.", "aliases": ""}, {"id": "artist-d14c259f9a", "title": "Bryan Adams", "aliases": ""}, {"id": "artist-e595f45dc6", "title": "Europe", "aliases": ""}, {"id": "artist-51b40c9947", "title": "Survivor", "aliases": ""}, {"id": "artist-79f6d0732a", "title": "Kansas", "aliases": ""}];
const POP_GROUPS = [{"id": "kuzmin", "title": "Владимир Кузьмин"}, {"id": "barykin", "title": "Александр Барыкин"}, {"id": "veselye-rebyata", "title": "Весёлые ребята"}, {"id": "antonov", "title": "Юрий Антонов"}, {"id": "gradsky", "title": "Александр Градский"}, {"id": "obodzensky", "title": "Валерий Ободзинский"}, {"id": "martynov", "title": "Евгений Мартынов"}, {"id": "zatsepin", "title": "Александр Зацепин — песни из кино"}, {"id": "samotsvety", "title": "Самоцветы"}, {"id": "sinyaya-ptitsa", "title": "Синяя птица"}, {"id": "pesnyary", "title": "Песняры"}, {"id": "ariel", "title": "Ариэль"}, {"id": "agutin", "title": "Леонид Агутин"}, {"id": "varum", "title": "Анжелика Варум"}, {"id": "syutkin", "title": "Валерий Сюткин"}, {"id": "shufutinsky", "title": "Михаил Шуфутинский"}, {"id": "collection", "title": "Сборник"}, {"id": "artist-4d25858773", "title": "Алла Пугачёва"}, {"id": "artist-d8467b34e6", "title": "София Ротару"}, {"id": "artist-d2bc98bc0d", "title": "Валерий Леонтьев"}, {"id": "artist-99a9ba9ba3", "title": "Михаил Боярский"}, {"id": "artist-5be1e68937", "title": "Ирина Аллегрова"}, {"id": "artist-dc8cdf2714", "title": "Валерий Меладзе"}, {"id": "artist-44b8f7dc61", "title": "Игорь Тальков"}];
const JAZZ_GROUPS = [{"id": "sinatra", "title": "Frank Sinatra", "aliases": "Фрэнк Френк Синатра"}, {"id": "armstrong", "title": "Louis Armstrong", "aliases": "Луи Луис Армстронг"}, {"id": "artist-cd6dd9b095", "title": "Nat King Cole", "aliases": ""}, {"id": "artist-a60dfe34ae", "title": "Dean Martin", "aliases": ""}, {"id": "artist-0ca6d8b8f3", "title": "Ella Fitzgerald & Louis Armstrong", "aliases": ""}, {"id": "artist-2694c325d5", "title": "Ella Fitzgerald", "aliases": ""}];
const EN_POP_GROUPS = [{"id": "abba", "title": "ABBA", "aliases": "Абба АББА"}, {"id": "boney-m", "title": "Boney M.", "aliases": "Бони М Бони Эм Бонни М BoneyM"}, {"id": "michael-jackson", "title": "Michael Jackson", "aliases": "Майкл Джексон Michael Jakson"}, {"id": "lady-gaga", "title": "Lady Gaga", "aliases": "Леди Гага Лэди Гага"}, {"id": "artist-7446a08e46", "title": "Shakira", "aliases": "Вака вака Woka Woka Шакира"}, {"id": "artist-199e3918a2", "title": "Madonna", "aliases": ""}, {"id": "artist-43cc6268c1", "title": "George Michael", "aliases": ""}, {"id": "artist-10c2d63040", "title": "Adele", "aliases": ""}, {"id": "artist-f033a43be5", "title": "Whitney Houston", "aliases": ""}, {"id": "artist-4646cb5f88", "title": "Céline Dion", "aliases": ""}, {"id": "artist-f680a868f4", "title": "Ed Sheeran", "aliases": ""}, {"id": "artist-95903d66eb", "title": "Beyoncé", "aliases": ""}, {"id": "artist-fd4e949dfc", "title": "Ricky Martin", "aliases": ""}, {"id": "artist-1a8c6ce371", "title": "Shakira & Wyclef Jean", "aliases": ""}];
const COLLECTION_IDS = {"newyear": ["hit-5bc2ba8e7a9c6515", "s0", "s100", "s101", "s109", "s110", "s111", "s112", "s113", "s117", "s12", "s120", "s122", "s123", "s124", "s126", "s128", "s129", "s135", "s137", "s138", "s140", "s141", "s142", "s144", "s145", "s153", "s158", "s160", "s162", "s164", "s169", "s17", "s172", "s173", "s175", "s177", "s179", "s181", "s186", "s187", "s188", "s193", "s195", "s197", "s2", "s203", "s205", "s206", "s21", "s211", "s212", "s213", "s217", "s218", "s219", "s220", "s221", "s222", "s223", "s224", "s225", "s226", "s227", "s228", "s229", "s23", "s230", "s231", "s232", "s233", "s234", "s235", "s236", "s237", "s238", "s239", "s24", "s240", "s241", "s242", "s29", "s3", "s30", "s31", "s32", "s34", "s36", "s39", "s40", "s42", "s45", "s46", "s47", "s48", "s49", "s50", "s53", "s54", "s55", "s58", "s59", "s60", "s62", "s63", "s64", "s66", "s68", "s70", "s72", "s73", "s74", "s75", "s76", "s77", "s78", "s80", "s81", "s83", "s85", "s87", "s88", "s89", "s9", "s91", "s95", "s96", "s97", "s98", "s99"], "bards": ["bard-000308f930fc2eca", "bard-20ed9957527c9db5", "bard-2eadfdde14c32e50", "bard-2ef3a3c10aaf8ffe", "bard-4232c215f446dd30", "bard-72408f77da6e1eb6", "bard-75329175cab2bd52", "bard-9112c4bd01bed18b", "bard-920701c430574f28", "bard-968121683262b5f9", "bard-97d855761e29b2bd", "bard-9fbd4f9a18b14ada", "bard-b74663580d68d0aa", "bard-b8f9e1da6dece074", "bard-bfcdb3e6bc337d64", "bard-d06424e000925fe4", "bard-e54459403a12fa94", "bard-e7f14a04a9f3c290", "bard-ef330aa2dc9a4cd9", "bard-f02e61cdfa71815c", "hit-36820a4a7b27a8de", "hit-526af640992c908c"], "cartoons": ["c11", "c2", "c4", "c5", "c61", "c8", "hit-5fb815fa12ff44ca", "hit-c2bfe1c7a7515f58", "hit-feda8ebc22a9321b", "s13", "s178", "s19", "s6"], "films": ["bard-1908d6734a30b677", "bard-a5e8b088c6b6dbbc", "f-film-1", "f-film-17", "f-film-2", "f-film-50", "f-film-67", "f-film-74", "f-film-extra-0", "f-film-extra-10", "f-film-extra-13", "f-film-extra-8", "f-film-extra-9", "f-ussr-240", "f-ussr-61", "f-ussr-87", "hit-32f74e0bd5f67edd", "hit-5f4da7c7a5515fac", "hit-7fccb95c82b0b7a1", "s21", "s45", "s49", "s87"], "rurock": ["hit-0bad0764c3f85bb9", "hit-20153e819bfde262", "hit-4b9776d577e36257", "hit-58674f1f59ebd802", "hit-721c0d9108e54928", "hit-971ba36954d1d801", "hit-cb8bd725bc1e0edb", "rock-20550c396edf5688", "rock-5bb05707987bbe2b", "rock-d9c12b07f73aa598", "rock-dfc83eabbec5b195", "rock-f93acaae1544bb52"], "enrock": ["hit-00f6304ffb9210d7", "hit-1bc8a6d847b9ed00", "hit-2142fbe33edd2b92", "hit-55995a1b03b1693e", "hit-80055fede56d8d55", "hit-9213ffae8b4df1dc", "hit-e490a0c43cfcf7da"], "rupop": ["hit-08871b372a293b4b", "hit-1bccc287a3e71d57", "hit-22bfd187ae02d16d", "hit-2ebb6b0d8c5d952b", "hit-3217cd124fb580ac", "hit-465e104ce5462e8c", "hit-777d9c9e97805f15", "hit-8c907b74153898b1", "hit-a1ce0453c1508ea6", "hit-b645a508788a1721", "hit-da8a77216105a223", "pop-29a92b67d897b8c8", "pop-6b8bd68b0cd1721c", "pop-779fe85c8c9a2dc3", "pop-860c2ef356a44228", "pop-f6e282a64da7b62e"], "enpop": ["hit-051648b06b1164e6", "hit-0d88f18335c76dd3", "hit-2c0731c011a4b991", "hit-326c114435485d85", "hit-3d8443e02242074a", "hit-492afeb0ea9326f3", "hit-4a8fe4a988e735aa", "hit-4af751d6db7ac7ee", "hit-4d71d443b44089af", "hit-5704ebb9df8ec13d", "hit-5bae8d19e4c649ce", "hit-7267aa99866902ba", "hit-81b3ef5659539217", "hit-8801b72b28f18998", "hit-b405f7c034bf1e99", "hit-badbf55b9d06fc02", "hit-c494660cafdcab7a"], "jazz": ["hit-25d9a08159e41ba7", "hit-3228d407d45a1fa9", "hit-5f552acbbfcb4fc5", "hit-74a5061178c76b25", "hit-b346cd7c9f8b87d5"], "hebrew": ["he-15yZubhrUCY", "he-2GTen3DLWk8", "he-3ZCyaNJkT90", "he-4J20N9SSBbE", "he-676_-YzfCMU", "he-7ITV5LSy3KM", "he-8GBQfEODqMY", "he-8ojuOReVL9M", "he-AzENjU_7j4s", "he-BZDFLY1P9UQ", "he-CkvilCDpQdg", "he-GUQWyoQh8zw", "he-IMbcGhTxLss", "he-IR44qi5QnF8", "he-LnBqR4rLZJc", "he-M-uQqHo74Jo", "he-Nb-QHxKUR0g", "he-Q_AfLWBA-ec", "he-RzW7uxhXEDc", "he-Tg5Poegsfwk", "he-Vs8PYbti5ww", "he-WenG4yJbn18", "he-X5428ievZIU", "he-Y4f4LUS38o0", "he-acidbCKVvQQ", "he-anLhUhEnyuE", "he-ba9olwQwqZA", "he-ciebZEoBqh4", "he-d5vHHWkdrTM", "he-dm0iC_PCU-k", "he-eNdvf4Ub5I8", "he-fvCaCb7n52A", "he-grE_fg17nk4", "he-hH9RlLmqfbo", "he-noj2uQCADdA", "he-qLSUIjTYNg4", "he-uW21hJGYtWg", "he-up7gpBcsybc", "he-wA_OKnl09A8", "he-yynnh2QIkbw", "he-zQAfeveB7us", "hit-a7b649a2fe71faa1", "hit-e27b9619dfd04230", "hit-eab7538f2409bb3b"]};
