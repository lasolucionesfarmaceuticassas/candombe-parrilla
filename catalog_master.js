const MASTER_CATALOG = {
  "cortes": [
    {
      "id": 1,
      "name": "Entraña Angus Importada (400g)",
      "price": 94000,
      "badge": "🥩 Angus Certificado",
      "desc": "Corte premium de importación con marmoleo excepcional, asado a la brasa con sal marina y chimichurri. Incluye acompañamiento.",
      "img": "./assets/bife_de_chorizo.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 2,
      "name": "Picanha Angus Importada (400g)",
      "price": 88000,
      "badge": "🔥 Tapa de Cuadril Top",
      "desc": "Espectacular corte con capa de grasa crujiente y jugosa, sellado al carbón al punto exacto. Incluye acompañamiento.",
      "img": "./assets/punta_anca_grill.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 3,
      "name": "Rib Eye Angus Ojo de Bife (400g)",
      "price": 97000,
      "badge": "⭐ Corte Supremo",
      "desc": "El rey del sabor y la terneza. Máxima jugosidad con marmoleo gourmet madurado a la brasa. Incluye acompañamiento.",
      "img": "./assets/img_9.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 4,
      "name": "Punta de Anca - Selección Chef (350g)",
      "price": 64000,
      "badge": "👨‍🍳 Selección del Chef",
      "desc": "Punta de anca madurada seleccionada por Don Rubén, asada lentamente a fuego de carbón vegetal. Incluye acompañamiento.",
      "img": "./assets/steak_charcoal.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 5,
      "name": "Bife de Chorizo NY - Selección Chef (400g)",
      "price": 64000,
      "badge": "🥩 Corte Insignia",
      "desc": "Corte noble madurado con borde dorado y centro tierno y jugoso. Clásico de los mejores asadores argentinos.",
      "img": "./assets/bife_de_chorizo.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 6,
      "name": "Baby Beef al Carbón (350g)",
      "price": 60000,
      "badge": "⭐ Ultra Tierno",
      "desc": "Corte magro y delicado, extremadamente suave y sellado con mantequilla aromatizada de finas hierbas.",
      "img": "./assets/baby_beef.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 7,
      "name": "Menú Res Parrillero Ejecutivo",
      "price": 22000,
      "badge": "🍽️ Almuerzo Campestre",
      "desc": "Carne de res tierna asada a la plancha/parrilla, servida con arroz, frijoles caseros, ensalada y papas.",
      "img": "./assets/steak_charcoal.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 8,
      "name": "Menú Cerdo Parrillero Ejecutivo",
      "price": 22000,
      "badge": "🍽️ Almuerzo Campestre",
      "desc": "Costilla o chuleta de cerdo asada a la plancha, arroz blanco, frijoles caseros y ensalada.",
      "img": "./assets/chuleton_cerdo.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 9,
      "name": "Menú Pollo Parrillero Ejecutivo",
      "price": 22000,
      "badge": "🍽️ Almuerzo Campestre",
      "desc": "Pechuga a la plancha acompañada de arroz, frijoles de la abuela, ensalada fresca y papas.",
      "img": "./assets/pollo_parrilla.jpg",
      "type": "dish",
      "available": true
    }
  ],
  "compartir": [
    {
      "id": 19,
      "name": "Gran Banquete Candombe (4 Pers.)",
      "price": 110000,
      "badge": "👨‍👩‍👦 Para 4 Personas",
      "desc": "Bife de chorizo (400g), costillas BBQ, chorizo artesanal, morcilla crocante, papas rústicas y plátano maduro al gratín.",
      "img": "./assets/picada_candombe.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 20,
      "name": "Gran Picada Mixta Candombe (4 Pers.)",
      "price": 75000,
      "badge": "👨‍👩‍👦 La Reina de la Mesa",
      "desc": "Carne de res, pechuga de pollo, chicharrón crocante, chorizo parrillero, morcilla, papas en casco, arepitas y ají casero.",
      "img": "./assets/img_3.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 21,
      "name": "Media Picada Mixta (2 Pers.)",
      "price": 42000,
      "badge": "⭐ Para 2 Personas",
      "desc": "Combinación perfecta de res, cerdo, chorizo, morcilla, papas criollas y yuquitas para dos comensales.",
      "img": "./assets/picada_candombe.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 22,
      "name": "Picada Tradicional de la Hacienda",
      "price": 75000,
      "badge": "🔥 Clásica Campestre",
      "desc": "Surtido abundante de cortes a la parrilla, plátano maduro al gratín, chicharrón y aderezo de chimichurri.",
      "img": "./assets/img_11.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 23,
      "name": "Bandeja Paisa Candombe (Don Rubén)",
      "price": 35000,
      "badge": "⭐ Tradición de la Casa",
      "desc": "Frijoles caseros de la abuela, carne molida especial, chicharrón crocante 70g, huevo frito, chorizo, tajada de plátano, arepa y arroz.",
      "img": "./assets/bandeja_paisa.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 24,
      "name": "Chuletón de Cerdo Parrillero (450g)",
      "price": 46500,
      "badge": "🍖 Chuletón al Fuego",
      "desc": "Generoso chuletón de cerdo bañado con adobo de la casa y asado a fuego vivo. Jugoso y crocante.",
      "img": "./assets/chuleton_cerdo.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 25,
      "name": "Chicharrón Criollo Crocante (300g)",
      "price": 32000,
      "badge": "🔥 Crocante Gourmet",
      "desc": "Panceta de cerdo seleccionada con piel extratoastada en leña, servido con yuquitas y limón mandarino.",
      "img": "./assets/chicharron_crocante.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 26,
      "name": "Solomillo de Cerdo a la Pimienta (350g)",
      "price": 53000,
      "badge": "⭐ Salsa Cremosa",
      "desc": "Medallones tiernos de solomillo bañados en suave salsa demi-glace de pimienta verde y crema.",
      "img": "./assets/img_5.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 27,
      "name": "Medallones de Cerdo al Carbón",
      "price": 44000,
      "badge": "🍖 Suaves y Jugosos",
      "desc": "Medallones marinados con romero y ajo asados a punto con guarnición de papas rústicas.",
      "img": "./assets/chuleton_cerdo.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 28,
      "name": "Filete de Pollo a la Plancha (350g)",
      "price": 42000,
      "badge": "🍗 Ligero y Saludable",
      "desc": "Pechuga tierna y jugosa marinada con cítricos y finas hierbas, dorada a fuego medio.",
      "img": "./assets/pollo_parrilla.jpg",
      "type": "dish",
      "available": true
    }
  ],
  "entradas": [
    {
      "id": 29,
      "name": "Empanaditas de Carne Mechada (x10)",
      "price": 16000,
      "badge": "🥟 10 Unidades Crocantes",
      "desc": "Diez empanaditas recién fritas rellenas de carne mechada sazonada, acompañadas de guacamole y ají pique.",
      "img": "./assets/empanadas_mechada.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 30,
      "name": "Rellenas Artesanales Campesinas (Morcilla)",
      "price": 20000,
      "badge": "🌭 Morcilla Artesanal",
      "desc": "Morcilla suave y aliñada al estilo tradicional vallecaucano con trocitos de papa y poleo, dorada a la brasa.",
      "img": "./assets/morcilla_rellena.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 31,
      "name": "Chorizo Criollo Parrillero de la Casa (80g)",
      "price": 12000,
      "badge": "🔥 100% Cerdo Magro",
      "desc": "Chorizo artesanal hecho con pulpa de cerdo aliñada con hierbas campesinas, dorado al carbón con arepitas.",
      "img": "./assets/choripan_artesanal.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 32,
      "name": "Tostadas de Plátano con Carne Desmechada",
      "price": 25000,
      "badge": "🍌 Patacón Criollo",
      "desc": "Patacones gigantes crocantes montados con carne desmechada jugosa, hogao casero y guacamole fresco.",
      "img": "./assets/picada_candombe.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 33,
      "name": "Tostadas de Plátano con Hogao (x4)",
      "price": 15000,
      "badge": "🥑 Crujientes",
      "desc": "Cuatro patacones crocantes recién salidos de pailas, con hogao tradicional de tomate milano y cebolla.",
      "img": "./assets/bandeja_paisa.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 34,
      "name": "Arepa de Queso con Carne Desmechada",
      "price": 15000,
      "badge": "🧀 Arepa Montada",
      "desc": "Arepa de maíz tierno asada a la parrilla cubierta con abundante carne desmechada sazonada y queso derretido.",
      "img": "./assets/empanadas_mechada.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 35,
      "name": "Menú Infantil Candombe Kids",
      "price": 18000,
      "badge": "👶 Para los Niños",
      "desc": "Trocitos de filete de pollo o mini burger suave, abundante papa a la francesa y juguito Hit en cajita.",
      "img": "./assets/img_1.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 36,
      "name": "Tortilla de Papa Española con Atún",
      "price": 20000,
      "badge": "🍳 Receta Clásica",
      "desc": "Tortilla gruesa española de papas pochadas, huevo campesino, cebolla confitada y trozos de atún.",
      "img": "./assets/tortilla_papa.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 37,
      "name": "Tortilla de Papa Tradicional Española",
      "price": 17000,
      "badge": "🍳 Española",
      "desc": "Clásica tortilla de papas y cebolla al sartén, jugosa por dentro y dorada por fuera.",
      "img": "./assets/tortilla_papa.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 38,
      "name": "Papas en Casco Rústicas de la Casa",
      "price": 8000,
      "badge": "🥔 Sazonadas con Romero",
      "desc": "Papas cortadas en gajos gruesos con cáscara, condimentadas con sal marina, romero y paprika.",
      "img": "./assets/papas_francesas.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 39,
      "name": "Papas a la Francesa Crujientes",
      "price": 7000,
      "badge": "🍟 Porción Dorada",
      "desc": "Papas bastón crujientes por fuera y suaves por dentro, servidas con sal y salsas.",
      "img": "./assets/papas_francesas.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 40,
      "name": "Yuca Frita al Ajillo Criollo",
      "price": 8000,
      "badge": "🌱 Yuca Dorada",
      "desc": "Bastones de yuca cocida y dorada a la perfección con mantequilla de ajo.",
      "img": "./assets/papas_francesas.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 41,
      "name": "Porción Frijoles Caseros de la Abuela",
      "price": 1500,
      "badge": "🍲 Caseros",
      "desc": "Cazuelita de frijoles rojos cocinados con garra y aliños tradicionales.",
      "img": "./assets/bandeja_paisa.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 42,
      "name": "Porción de Ensalada Fresca de la Huerta",
      "price": 4000,
      "badge": "🥗 Fresca",
      "desc": "Mix de lechuga fresca, tomate milano maduro, cebolla morada y vinagreta de limón.",
      "img": "./assets/ensalada_fresca.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 43,
      "name": "Arepa de Maíz Blanco sin Sal",
      "price": 2000,
      "badge": "🌽 Saludable",
      "desc": "Arepa pura de maíz blanco asada al carbón.",
      "img": "./assets/bandeja_paisa.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 44,
      "name": "Adición Carne de Hamburguesa (140g)",
      "price": 12000,
      "badge": "🥩 Carne Extra",
      "desc": "Porción adicional de carne 100% de res asada a la parrilla.",
      "img": "./assets/img_7.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 45,
      "name": "Adición Tocineta Ahumada Doble",
      "price": 3500,
      "badge": "🥓 Tocineta Crispy",
      "desc": "Tiras doradas y crocantes de tocineta ahumada.",
      "img": "./assets/tocineta_crispy.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 46,
      "name": "Adición Queso Cheddar o Mozzarella",
      "price": 3000,
      "badge": "🧀 Queso Fundido",
      "desc": "Loncha generosa de queso fundido.",
      "img": "./assets/img_1.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 47,
      "name": "Adición Huevo Frito al Término",
      "price": 2000,
      "badge": "🍳 Huevo Campesino",
      "desc": "Huevo frito con yema tierna preparado al instante.",
      "img": "./assets/bandeja_paisa.jpg",
      "type": "dish",
      "available": true
    }
  ],
  "burgers": [
    {
      "id": 10,
      "name": "Cheese Burger (140g)",
      "price": 26000,
      "badge": "🔥 La Más Pedida",
      "desc": "Carne 140g brasa, pan brioche artesanal, doble queso cheddar fundido, tocineta crispy, tomate, lechuga y papas a la francesa.",
      "img": "./assets/img_7.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 11,
      "name": "Hamburguesa La Candombe (180g Angus)",
      "price": 31500,
      "badge": "⭐ Especialidad de la Casa",
      "desc": "Carne 180g Angus seleccionada, pan brioche, tocineta doble, queso cheddar americano, huevo frito al término, tomate, lechuga y papas en casco.",
      "img": "./assets/img_1.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 12,
      "name": "Home Cheese Burger (140g)",
      "price": 28000,
      "badge": "🧀 Queso Mozzarella",
      "desc": "Carne 140g asada a la parrilla, pan brioche, queso mozzarella campesino derretido, tocineta ahumada, cebolla caramelizada y papas.",
      "img": "./assets/img_7.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 13,
      "name": "Cheeseburger Holandesa (140g)",
      "price": 28000,
      "badge": "🧀 Salsa Especial",
      "desc": "Carne 140g artesanal a las brasas, queso gouda holandés derretido, tocineta crocante, salsa tártara de la casa y papas.",
      "img": "./assets/img_1.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 14,
      "name": "Choripán Artesanal Candombe",
      "price": 21500,
      "badge": "🔥 Tradición Argentina",
      "desc": "Chorizo parrillero artesanal de la casa en pan ciabatta crocante, chimichurri criollo, lechuga fresca, tomate y papas.",
      "img": "./assets/choripan_artesanal.jpg",
      "type": "dish",
      "available": true
    },
    {
      "id": 15,
      "name": "Mega Candombe Doble Carne (280g)",
      "price": 42000,
      "badge": "👑 Para Gigantes",
      "desc": "Doble carne de 140g (280g total), doble queso cheddar fundido, triple tocineta, huevo frito, cebolla caramelizada y papas en casco.",
      "img": "./assets/img_1.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 16,
      "name": "Mega Combo Candombe Parrillero",
      "price": 45000,
      "badge": "🍔+🍟+🍺 Combo Completo",
      "desc": "Hamburguesa La Candombe (180g) + papas en casco rústicas + cerveza Club Colombia Dorada o gaseosa bien fría.",
      "img": "./assets/picada_candombe.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 17,
      "name": "Dúo Candombe para Pareja",
      "price": 50000,
      "badge": "👫 Para 2 Personas",
      "desc": "Dos Cheese Burgers (140g c/u) con papas a la francesa dobles para compartir en mesa.",
      "img": "./assets/img_7.jpg",
      "type": "meat",
      "available": true
    },
    {
      "id": 18,
      "name": "Cheeseburger Clásica Sencilla",
      "price": 23000,
      "badge": "🍔 Clásica",
      "desc": "Carne 120g asada al carbón, queso cheddar, vegetales frescos y papas.",
      "img": "./assets/img_1.jpg",
      "type": "meat",
      "available": true
    }
  ],
  "bebidas": [
    {
      "id": 48,
      "name": "Club Colombia Dorada",
      "price": 7000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Club Colombia Dorada servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_jarra.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 49,
      "name": "Michelado",
      "price": 7000,
      "badge": "🍓 Fruta Natural",
      "desc": "Vaso escarchado con limón fresco y sal marina parrillera.",
      "img": "./assets/cerveza_artesanal_rubia.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 50,
      "name": "Coca Cola",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Coca Cola servida con hielo y rodaja de limón.",
      "img": "./assets/gaseosa_cola.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 51,
      "name": "Coca Cola Zero",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Coca Cola Zero servida con hielo y rodaja de limón.",
      "img": "./assets/gaseosa_cola.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 52,
      "name": "Corona",
      "price": 9000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Corona servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_corona.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 53,
      "name": "Soda",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Soda servida con hielo y rodaja de limón.",
      "img": "./assets/soda_sprite_limon.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 54,
      "name": "Stella Artois",
      "price": 9000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Stella Artois servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_negra_stout.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 55,
      "name": "Limonada",
      "price": 8000,
      "badge": "🍋 Natural Frío",
      "desc": "Limonada recién exprimida con hielo frappé y toque de panela orgánica.",
      "img": "./assets/limonada_natural.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 56,
      "name": "Águila Light",
      "price": 7000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Aguila Light servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_jarra.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 57,
      "name": "Canada Dry",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Canada Dry servida con hielo y rodaja de limón.",
      "img": "./assets/soda_sprite_limon.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 58,
      "name": "Agua",
      "price": 5000,
      "badge": "🍓 Fruta Natural",
      "desc": "Agua purificada y fresca en botella.",
      "img": "./assets/agua_mineral.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 59,
      "name": "Poker",
      "price": 7000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Poker servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_artesanal_rubia.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 60,
      "name": "Heineken",
      "price": 9000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Heineken servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_negra_stout.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 61,
      "name": "Coca Cola Zero 1.5L",
      "price": 14000,
      "badge": "🥤 Refresco Frío",
      "desc": "Coca Cola Zero 1.5L servida con hielo y rodaja de limón.",
      "img": "./assets/gaseosa_cola.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 62,
      "name": "Agua Con Gas",
      "price": 15000,
      "badge": "🍓 Fruta Natural",
      "desc": "Agua Con Gas purificada y fresca en botella.",
      "img": "./assets/agua_mineral.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 63,
      "name": "Costeña",
      "price": 7000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Costeña servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_jarra.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 64,
      "name": "Vino Copa",
      "price": 20000,
      "badge": "🍷 Vino de la Casa",
      "desc": "Vino Copa de notas frutales y cuerpo redondo, maridaje ideal para carne de res.",
      "img": "./assets/copa_vino.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 65,
      "name": "Jugo Hit Mango",
      "price": 7000,
      "badge": "🍓 Fruta Natural",
      "desc": "Jugo Hit Mango bien frío en botella.",
      "img": "./assets/jugo_mango.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 66,
      "name": "Club Colombia Roja",
      "price": 7000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Club Colombia Roja servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_artesanal_rubia.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 67,
      "name": "Smirnoff Botella Pet",
      "price": 16000,
      "badge": "🥃 Trago / Licor",
      "desc": "Trago de Smirnoff Botella Pet servido en las rocas o puro según tu preferencia.",
      "img": "./assets/tequila_shot.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 68,
      "name": "Quatro",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Quatro servida con hielo y rodaja de limón.",
      "img": "./assets/soda_sprite_limon.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 69,
      "name": "Corona Zero",
      "price": 10000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Corona Zero servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_corona.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 70,
      "name": "Sprite",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Sprite servida con hielo y rodaja de limón.",
      "img": "./assets/soda_sprite_limon.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 71,
      "name": "Jugo Natural Fresa",
      "price": 9000,
      "badge": "🍓 Fruta Natural",
      "desc": "Jugo Natural Fresa preparado con fruta fresca seleccionada en agua bien fría.",
      "img": "./assets/jugo_fresa.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 72,
      "name": "Colombiana Postobón",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Colombiana Postobon servida con hielo y rodaja de limón.",
      "img": "./assets/gaseosa_cola.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 73,
      "name": "Jugo Hit Naranja Piña",
      "price": 7000,
      "badge": "🍓 Fruta Natural",
      "desc": "Jugo Hit Naranja Piña bien frío en botella.",
      "img": "./assets/jugo_mango.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 74,
      "name": "Jugo Hit Mora",
      "price": 7000,
      "badge": "🍓 Fruta Natural",
      "desc": "Jugo Hit Mora bien frío en botella.",
      "img": "./assets/jugo_fresa.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 75,
      "name": "Mister Tea Durazno",
      "price": 6000,
      "badge": "🥤 Refresco Frío",
      "desc": "Mister Tea Durazno servida con hielo y rodaja de limón.",
      "img": "./assets/jugo_mango.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 76,
      "name": "Manzana Postobón",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Manzana Postobon servida con hielo y rodaja de limón.",
      "img": "./assets/soda_sprite_limon.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 77,
      "name": "Jugo Natural Mora",
      "price": 9000,
      "badge": "🍓 Fruta Natural",
      "desc": "Jugo Natural Mora preparado con fruta fresca seleccionada en agua bien fría.",
      "img": "./assets/jugo_fresa.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 78,
      "name": "Mister Tea Limon",
      "price": 6000,
      "badge": "🥤 Refresco Frío",
      "desc": "Mister Tea Limon servida con hielo y rodaja de limón.",
      "img": "./assets/limonada_natural.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 79,
      "name": "Jugo Natural Lulo",
      "price": 9000,
      "badge": "🍓 Fruta Natural",
      "desc": "Jugo Natural Lulo preparado con fruta fresca seleccionada en agua bien fría.",
      "img": "./assets/jugo_mango.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 80,
      "name": "Ron Puro Colombia Vaso",
      "price": 10000,
      "badge": "🥃 Trago / Licor",
      "desc": "Trago de Ron Puro Colombia Vaso servido en las rocas o puro según tu preferencia.",
      "img": "./assets/tequila_shot.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 81,
      "name": "Copa José Cuervo",
      "price": 25000,
      "badge": "🥃 Trago / Licor",
      "desc": "Trago de Copa Jose Cuervo servido en las rocas o puro según tu preferencia.",
      "img": "./assets/tequila_shot.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 82,
      "name": "Jp Chenet Lata",
      "price": 20000,
      "badge": "🥃 Trago / Licor",
      "desc": "Jp Chenet Lata de notas frutales y cuerpo redondo, maridaje ideal para carne de res.",
      "img": "./assets/copa_vino.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 83,
      "name": "Coca Cola Litro",
      "price": 10000,
      "badge": "🥤 Refresco Frío",
      "desc": "Coca Cola Litro servida con hielo y rodaja de limón.",
      "img": "./assets/gaseosa_cola.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 84,
      "name": "Tinto De Verano",
      "price": 18000,
      "badge": "🍷 Vino de la Casa",
      "desc": "Tinto De Verano de notas frutales y cuerpo redondo, maridaje ideal para carne de res.",
      "img": "./assets/copa_vino.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 85,
      "name": "Jugo En Leche Mora",
      "price": 11000,
      "badge": "🥛 Batido Cremoso",
      "desc": "Jugo En Leche Mora preparado con pulpa 100% natural y leche entera fresca y cremosa.",
      "img": "./assets/jugo_fresa.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 86,
      "name": "Copa Olmeca",
      "price": 26000,
      "badge": "🥃 Trago / Licor",
      "desc": "Trago de Copa Olmeca servido en las rocas o puro según tu preferencia.",
      "img": "./assets/tequila_shot.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 87,
      "name": "Uva Postobón",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Uva Postobón servida con hielo y rodaja de limón.",
      "img": "./assets/gaseosa_cola.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 88,
      "name": "Jugo En Leche De Fresa",
      "price": 11000,
      "badge": "🥛 Batido Cremoso",
      "desc": "Jugo En Leche De Fresa preparado con pulpa 100% natural y leche entera fresca y cremosa.",
      "img": "./assets/jugo_fresa.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 89,
      "name": "Jack Daniels",
      "price": 26000,
      "badge": "🥃 Trago / Licor",
      "desc": "Trago de Jack Daniels servido en las rocas o puro según tu preferencia.",
      "img": "./assets/whiskey_trago.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 90,
      "name": "Pepsi",
      "price": 7000,
      "badge": "🥤 Refresco Frío",
      "desc": "Pepsi servida con hielo y rodaja de limón.",
      "img": "./assets/gaseosa_cola.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 91,
      "name": "Red Bull",
      "price": 10000,
      "badge": "⚡ Energizante",
      "desc": "Bebida energizante Red Bull original en lata fría.",
      "img": "./assets/energy_drink.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 92,
      "name": "Jugo En Leche Lulo",
      "price": 11000,
      "badge": "🥛 Batido Cremoso",
      "desc": "Jugo En Leche Lulo preparado con pulpa 100% natural y leche entera fresca y cremosa.",
      "img": "./assets/jugo_mango.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 93,
      "name": "Hit Cajita",
      "price": 2500,
      "badge": "🍓 Fruta Natural",
      "desc": "Jugo Hit Hit Cajita bien frío en botella.",
      "img": "./assets/jugo_mango.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 94,
      "name": "Jugo Hit Frutos Tropicales",
      "price": 5000,
      "badge": "🍓 Fruta Natural",
      "desc": "Jugo Hit Frutos Tropicales bien frío en botella.",
      "img": "./assets/jugo_mango.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 95,
      "name": "Jugo Natural Mango",
      "price": 6000,
      "badge": "🍓 Fruta Natural",
      "desc": "Jugo Natural Mango preparado con fruta fresca seleccionada en agua bien fría.",
      "img": "./assets/jugo_mango.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 96,
      "name": "Jugo En Leche De Mango",
      "price": 7000,
      "badge": "🥛 Batido Cremoso",
      "desc": "Jugo En Leche De Mango preparado con pulpa 100% natural y leche entera fresca y cremosa.",
      "img": "./assets/jugo_mango.jpg",
      "type": "drink",
      "available": true
    },
    {
      "id": 97,
      "name": "Club Colombia Negra",
      "price": 6000,
      "badge": "🍺 Cerveza Helada",
      "desc": "Cerveza Club Colombia Negra servida a temperatura glaciar para acompañar tus cortes.",
      "img": "./assets/cerveza_artesanal_rubia.jpg",
      "type": "drink",
      "available": true
    }
  ]
};
