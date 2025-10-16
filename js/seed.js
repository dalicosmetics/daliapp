// seed.js
// Datos iniciales del catálogo

import { Producto } from "./models.js";

export const productosSeed = [
  new Producto(
    101,
    "Balsamo Osito de Iman Of Noble",
    "Labios",
    5000,
    3500,
    [
      "assets/img/labios/balsamo-ositos1.jfif",
      "assets/img/labios/balsamo-ositos2.jfif",
    ],
    "Este encantador set incluye 24 bálsamos labiales individuales en adorables envases con forma de osito. Cada bálsamo está diseñado para brindar humectación y un toque de color sutil a tus labios. ¡Perfecto para llevar contigo o para regalar un detalle dulce y útil!",
    "nuevo"
  ),
  new Producto(
    102,
    "Balsamo Animalitos",
    "Labios",
    3000,
    1900,
    [
      "assets/img/labios/balsamo-animalitos1.jfif",
      "assets/img/labios/balsamo-animalitos2.jfif",
    ],
    "Este adorable paquete contiene 24 bálsamos en barra de la marca IMAN OF NOBLE, cada uno con un empaque único y divertido. Con diseños coloridos y vibrantes que incluyen un cerdito, un gatito, un perrito y otras criaturas adorables, son perfectos para darle un toque de alegría a tu rutina de belleza. Ideales para mantener tus labios hidratados y suaves durante todo el día. ¡Lleva uno en cada bolso o compártelos con tus amigas! Son el detalle perfecto para cualquier amante de los productos de belleza creativos.",
    "nuevo"
  ),
  new Producto(
    103,
    "Lip Glow Oil Mágico Pola Aylr",
    "Labios",
    7000,
    4200,
    ["assets/img/labios/gloss-pola.jfif"],
    "Descubre el poder de este aceite labial nutritivo y brillante, diseñado para transformar tus labios y darles un aspecto jugoso y saludable al instante. El Lip Glow Oil de Pola Aylr es más que un simple gloss; es un tratamiento completo que hidrata, nutre y realza tu belleza natural.",
    "nuevo"
  ),
  new Producto(
    104,
    "Gloss Huellita de O'LANNEY",
    "Labios",
    5000,
    3000,
    ["assets/img/labios/gloss-huellita.jfif"],
    "¡Brillo y Ternura en tus Labios!",
    "nuevo"
  ),
  new Producto(
    105,
    "Labial Metalizado de Iman Of Noble",
    "Labios",
    5000,
    3750,
    [
      "assets/img/labios/labial-metalizado1.jfif",
      "assets/img/labios/labial-metalizado2.jfif",
    ],
    "Atrae todas las miradas con el labial más glamoroso del momento. Este labial combina un diseño futurista con una fórmula de alto rendimiento para que tus labios luzcan espectaculares. Aparte, con su empaque metálico rosa y su diseño de cápsula, este labial no solo es una joya para tus labios, sino también una pieza de colección en tu cosmetiquera.",
    "nuevo"
  ),
  new Producto(
    106,
    "Labial Liquido Matte de Iman Of Noble",
    "Labios",
    6500,
    4000,
    ["assets/img/labios/labial-mate1.jfif"],
    "Descubre el secreto de unos labios perfectamente definidos y con un acabado impecable. Este labial líquido Matte es la herramienta que necesitas para lucir sofisticada, elegante y a la moda. Con un empaque elegante y un display de 24 unidades, es el set perfecto para tener todos los colores que necesitas para cualquier look, ¡o para impulsar tu negocio de belleza!",
    "nuevo"
  ),
  new Producto(
    107,
    "Tinta Juguito 2 Tonos O'LANNEY",
    "Labios",
    5000,
    2950,
    [
      "assets/img/labios/tinta-juguito1.jfif",
      "assets/img/labios/tinta-juguito2.jfif",
    ],
    "Dale a tus labios un toque de color duradero con estas adorables tintas labiales inspiradas en tus personajes favoritos. Cada tinta viene en un envase único con forma de juguito, perfecto para llevar contigo. Su fórmula de larga duración no solo hidrata tus labios, sino que también deja un color vibrante y natural que no se desvanece fácilmente.",
    "nuevo"
  ),
  new Producto(
    108,
    "Tintas Hello Kitty O'LANNEY",
    "Labios",
    5000,
    3000,
    [
      "assets/img/labios/tinta-kitty1.jfif",
      "assets/img/labios/tinta-kitty2.jfif",
    ],
    "¡Brilla con el Dulce Toque de Hello Kitty! ✨ Exclusivos Tintas Labiales O'LANNEY Professional. ¿Buscas un toque de magia y color para tus labios? ¡Te presentamos el adorable expositor de 24 tintas labiales O'LANNEY Professional, protagonizados por la irresistible Hello Kitty! Cada brillo es una pequeña joya que combina una fórmula hidratante con un diseño encantador que te robará el corazón.",
    "nuevo"
  ),
  new Producto(
    109,
    "Brillo Magico Fruticas O'LANNEY",
    "Labios",
    6000,
    3500,
    [
      "assets/img/labios/brillo-frutas1.jfif",
      "assets/img/labios/brillo-frutas2.jfif",
    ],
    "Imagina un gloss tan divertido como efectivo. Cada uno de estos 24 brillos es una pequeña obra de arte con un diseño único: un lindo conejito y una tapa en forma de fruta. Desde la uva hasta la fresa, cada uno es una aventura. Con su fórmula llena de brillo, tus labios no solo se verán espectaculares, sino que también se sentirán hidratados y ligeros, sin la sensación pegajosa. ¡Es el toque frutal y brillante que tu rutina de belleza necesitaba!",
    "nuevo"
  ),
  new Producto(
    110,
    "Labial liquido DUNUF",
    "Labios",
    3900,
    1900,
    [
      "assets/img/labios/labial-dunuf1.jfif",
      "assets/img/labios/labial-dunuf2.jfif",
    ],
    "Los brillos labiales DUNUF son la mezcla perfecta de estilo y cuidado. Su textura ligera y su fórmula de hidratación suave te permiten lucir un color vibrante sin sacrificar la comodidad. Con una gama de tonos desde el rojo clásico hasta el rosa más dulce, este brillo te da un efecto natural que dura todo el día sin resecar tus labios. ¡Un producto esencial para un look impecable en cualquier momento!",
    "nuevo"
  ),
  new Producto(
    111,
    "Labial Liquido Kevin&Coco",
    "Labios",
    5000,
    2450,
    [
      "assets/img/labios/gloss-kevinycoco1.jfif",
      "assets/img/labios/gloss-kevinycoco2.jfif",
      "assets/img/labios/gloss-kevinycoco3.jfif",
    ],
    "Este exquisito set de brillos labiales KEVIN & COCO viene en una caja de presentación que es tan hermosa como el producto. Con 36 piezas que ofrecen una variedad de colores vibrantes, cada brillo tiene un adorable diseño en la tapa inspirado en deliciosos postres y frutas. Su fórmula suave y ligera te da un acabado brillante y un toque de color sutil, ideal para un look fresco y divertido. ¡Perfecto para coleccionar o como un regalo que encantará!",
    "nuevo"
  ),
  new Producto(
    112,
    "Voluminizador de Labios Karité Lip Maximizer",
    "Labios",
    7000,
    3950,
    [
      "assets/img/labios/voluminizador-karite1.jfif",
      "assets/img/labios/voluminizador-karite2.jfif",
    ],
    "Este innovador gloss voluminizador ha sido creado para potenciar la belleza natural de tus labios. Su fórmula especial con colágeno activo no solo maximiza el volumen, sino que también hidrata profundamente, previniendo la sequedad y las líneas finas. El resultado es una sensación de suavidad, un brillo espejo y unos labios visiblemente más carnosos y atractivos. Es ideal para usarlo solo o como base para tu labial favorito. ¡Prepárate para atraer todas las miradas!",
    "nuevo"
  ),
  new Producto(
    113,
    "Labial Matte Velvet",
    "Labios",
    7000,
    4200,
    [
      "assets/img/labios/labial-velvet1.jfif",
      "assets/img/labios/labial-velvet2.jfif",
    ],
    "Experimenta el confort y el color NUDE con los labiales Matte Velvet. Su textura aterciopelada se desliza suavemente sobre los labios, ofreciendo una cobertura completa y un acabado mate duradero sin sensación de sequedad. Disponibles en una gama de tonos cautivadores, estos labiales son ideales para expresar tu estilo con confianza y sofisticación. ¡Labios irresistibles con un acabado mate de ensueño!",
    "nuevo"
  ),
  new Producto(
    114,
    "Labial Liquido Frutas KEVIN&COCO",
    "Labios",
    7500,
    4500,
    [
      "assets/img/labios/labial-kevinycoco1.jfif",
      "assets/img/labios/labial-kevinycoco2.jfif",
    ],
    "Dale a tus labios un toque de diversión y sabor con los brillos labiales Jelly Bomb de KEVIN&COCO. Inspirados en frutas frescas, estos brillos te ofrecen un acabado irresistiblemente brillante y una textura ligera y no pegajosa. Cada uno con un aroma único, son perfectos para hidratar y dar un toque de color sutil a tus labios en tu día a día.",
    "nuevo"
  ),
  new Producto(
    115,
    "Gloss Stich",
    "Labios",
    6000,
    4200,
    [
      "assets/img/labios/gloss-stich4.jfif",
      "assets/img/labios/gloss-stich3.jfif",
      "assets/img/labios/gloss-stich1.jfif",
      "assets/img/labios/gloss-stich2.jfif",
    ],
    "Cada gloss es un pequeño tesoro, con destellos vibrantes y una elegante tapa en forma de corazón. Además de dejar tus labios con un acabado brillante y un sutil toque de color, tienen un aroma dulce y agradable. Su fórmula ligera no es pegajosa, lo que los hace ideales para uso diario.",
    "nuevo"
  ),
  new Producto(
    116,
    "Labial Matte Cakaila",
    "Labios",
    5000,
    2600,
    [
      "assets/img/labios/bi.jpeg",
      "assets/img/labios/al.jpeg",
      "assets/img/labios/la.jpeg",
    ],
    "✨¡Desata tu poder con los labios!💄 Los labiales líquidos CAKAILA combinan color intenso, acabado mate y larga duración en una fórmula irresistible. ¡Seduce con cada palabra! 🔥",
    "nuevo"
  ),
  new Producto(
    117,
    "Labial Matte Nude",
    "Labios",
    7000,
    3900,
    [
      "assets/img/labios/118-labial-nude-1.jfif",
      "assets/img/labios/118-labial-nude-2.jfif",
    ],
    "💋 ¡Labios que impactan! 💄 Descubre los nuevos colores NUDE, acabado mate y ultra hidratación en cada aplicación. ¡Tu boca será el centro de todas las miradas! 🔥 Extrema duración",
    "nuevo"
  ),
  new Producto(
    118,
    "Tinta Paleta",
    "Labios",
    6000,
    3400,
    [
      "assets/img/labios/118-tinta-paleta.jfif",
    ],
    "🍭 ¡Dulces labios irresistibles! 💋 Nuestras tintas vienen en un adorable empaque de paleta, pero lo mejor está dentro: colores vibrantes, textura ligera y un brillo que enamora. ¡Atrévete a lucir labios de antojo! ✨",
    "nuevo"
  ),
  new Producto(
    119,
    "Brillo Voluminizador Karite",
    "Labios",
    7500,
    5900,
    [
      "assets/img/labios/120-brillo-voluminizador-karite-1.jfif",
      "assets/img/labios/120-brillo-voluminizador-karite-2.jfif",
    ],
    "Este gloss es un voluminizador que da una sensación de volumen inmediata y un brillo espectacular. ¡Elige tu color favorito y listo!🩷",
    "nuevo"
  ),
  new Producto(
    120,
    "Gloss Llavero",
    "Labios",
    12600,
    8900,
    [
      "assets/img/labios/120-glos-llavero.jfif",
      "assets/img/labios/120-glos-llavero2.jfif",
    ],
    "¡Doble de brillo, doble de encanto! Labios voluminosos con efecto hidratante y un accesorio súper cute en cada empaque. 🎀 ¡El regalo perfecto! 🎁",
    "nuevo"
  ),
  new Producto(
    121,
    "Labial Karite",
    "Labios",
    7000,
    4200,
    [
      "assets/img/labios/121-labial-karite.jfif",
      "assets/img/labios/121-labial-karite2.jfif",
      "assets/img/labios/121-labial-karite3.jfif",
    ],
    "🌟 Karité Lipstick 💄 COLOR STAY que no te abandona. Larga duración 24H y ¡a prueba de agua! 💦 Textura suave y no pegajosa. 💋 . ¡El labial que necesitas! ❤️",
    "nuevo"
  ),
  new Producto(
    122,
    "Voluminizador Karite Brillos",
    "Labios",
    5200,
    3700,
    [
      "assets/img/labios/122-voluminizador-karite-brillos.jfif",
      "assets/img/labios/122-voluminizador-karite-brillos2.jfif",
    ],
    "💦💎 ¡Labios de cristal! Karité® Make Shimmer Lipgloss 🧡. Su poder de voluminizador te da un efecto jugoso y lleno de volumen. Colores que cambian con la luz gracias a su shimmer iridiscente. ¡Atrévete a brillar! ✨👄",
    "nuevo"
  ),
  new Producto(
    123,
    "Gloss Lip Oil Corazon",
    "Labios",
    6000,
    4200,
    [
      "assets/img/labios/123-Gloss-Lip-Oil-Corazon.jfif",
      "assets/img/labios/123-Gloss-Lip-Oil-Corazon2.jfif",
    ],
    "💖💧 ¡Labios hidratados y con glow! Lip Oil/Gloss Transparente con un toque de color y un envase adorable. Fórmula ligera con efecto jugoso 💦. Aplicador y tapa con diseño ¡El secreto para unos labios suaves y brillantes! ✨",
    "nuevo"
  ),
  new Producto(
    124,
    "Gloss Lip Oil Kuromi",
    "Labios",
    6000,
    4200,
    [
      "assets/img/labios/124-Gloss-Lip-Oil-Kuromi2.jfif",
      "assets/img/labios/124-Gloss-Lip-Oil-Kuromi.jfif",
    ],
    "¡El brillo labial que necesitas para un look kawaii con toque rocker! 💜 Este Lip Gloss de Kuromi te da un color rosa intenso y vibrante con un efecto WOW de glitter holográfico. ✨ Su fórmula es súper hidratante y cero pegajosa. ¡No solo es un labial, es un accesorio! 🎀",
    "nuevo"
  ),
  new Producto(
    201,
    "Delineador Plumón Garrita",
    "Ojos",
    7000,
    4200,
    [
      "assets/img/ojos/delineador-garrita1.jfif",
      "assets/img/ojos/delineador-garrita2.jfif",
    ],
    "¡Un delineado perfecto que dura 24 horas! Este Delineador Líquido a Prueba de Agua de ABZ te da una mirada dramática y definida con un solo trazo. Su punta de alta precisión y su fórmula de larga duración lo convierten en el aliado perfecto para un look impecable de día o de noche. ¡Y el empaque de gatito es irresistible!",
    "nuevo"
  ),
  new Producto(
    204,
    "Delineador en Plumon ABZ",
    "Ojos",
    7000,
    4200,
    ["assets/img/ojos/delineador-abz.jfif"],
    "Define tu mirada con nuestro delineador liquido en plumón ,su punta de alta precisión te permite crear líneas finas o dramáticas con facilidad. Con una fórmula ultra resistente, este delineador se mantiene intacto todo el día, sin correrse ni desvanecerse.",
    "nuevo"
  ),
  new Producto(
    205,
    "Delineador Líquido Mate de Aliddy Beauty",
    "Ojos",
    3000,
    2100,
    [
      "assets/img/ojos/delineador-liquido-aliddy2.jfif",
      "assets/img/ojos/delineador-liquido-aliddy1.jfif",
      
    ],
    "Eleva tu rutina de maquillaje con el Delineador Líquido Mate de Aliddy Beauty. Este delineador ha sido diseñado para ofrecer un control total, permitiéndote trazar líneas finas y elegantes o una linea de gato más dramático y atrevido. Su fórmula de secado rápido y resistente al agua te asegura una mirada definida e impecable desde la mañana hasta la noche, sin desvanecerse. ¡El toque final perfecto para cualquier look!",
    "nuevo"
  ),
  new Producto(
    206,
    "Jabon para Cejas Kuromi",
    "Ojos",
    5000,
    3200,
    [
      "assets/img/ojos/jabon-kuromi1.jfif",
      "assets/img/ojos/jabon-kuromi2.jfif",
    ],
    "Este producto, con un encantador diseño, es ideal para dominar y fijar hasta los vellos más rebeldes, logrando un efecto de \"ceja laminada\" de manera sencilla y rápida. Su fórmula de larga duración asegura que tus cejas se mantengan en su lugar, con una apariencia más densa y definida. Cada jabón incluye un práctico cepillo para una aplicación precisa y sin complicaciones.",
    "nuevo"
  ),
  new Producto(
    207,
    "Jabon para Cejas Melody",
    "Ojos",
    5000,
    3200,
    ["assets/img/ojos/jabon-melody1.jfif"],
    "Este producto, con un encantador diseño, es ideal para dominar y fijar hasta los vellos más rebeldes, logrando un efecto de \"ceja laminada\" de manera sencilla y rápida. Su fórmula de larga duración asegura que tus cejas se mantengan en su lugar, con una apariencia más densa y definida. Cada jabón incluye un práctico cepillo para una aplicación precisa y sin complicaciones.",
    "nuevo"
  ),
  new Producto(
    208,
    "Paleta Dreamer",
    "Ojos",
    14900,
    9900,
    [
      "assets/img/ojos/paleta-dreamer1.jfif",
      "assets/img/ojos/paleta-dreamer2.jfif",
      "assets/img/ojos/paleta-dreamer3.jfif",
    ],
    "Crea looks de ensueño con la paleta de sombras Dreamer de La Catelrra. Inspirada en los cielos nocturnos, esta paleta de 14 tonos te ofrece una mezcla perfecta de mates suaves y brillos intensos. Sus sombras de alta pigmentación se difuminan fácilmente y duran todo el día, permitiéndote pasar de un look natural a uno más atrevido sin esfuerzo.",
    "nuevo"
  ),
  new Producto(
    209,
    "Paleta Libro KEVIN Y COCO",
    "Ojos",
    25900,
    19500,
    [
      "assets/img/ojos/paleta-librokyc1.jfif",
      "assets/img/ojos/paleta-librokyc2.jfif",
    ],
    "Una curación de 36 sombras altamente pigmentadas, que van desde los neutros cálidos y fríos para el día a día, hasta una explosión de colores neón y pastel que te permitirán crear looks audaces y creativos.",
    "nuevo"
  ),
  new Producto(
    212,
    "Pestañina 7D",
    "Ojos",
    7000,
    4500,
    [
      "assets/img/ojos/pestanina-7d1.jfif",
      "assets/img/ojos/pestanina-7d2.jfif",
    ],
    "¿Sueñas con pestañas que roben miradas? La Máscara de Pestañas 7D Fiber Lashes es la solución. Su fórmula avanzada con micro-fibras se adhiere delicadamente a tus pestañas, creando una dimensión 7D que las hace parecer más largas, gruesas y voluminosas al instante. A diferencia de las máscaras tradicionales, esta logra un efecto de pestañas postizas sin el esfuerzo ni los adhesivos. La textura suave y el cepillo especializado aseguran una aplicación sin grumos y una definición impecable que dura todo el día. ¡Atrévete a lucir una mirada irresistible!",
    "nuevo"
  ),
  new Producto(
    213,
    "Serum Para Pestañas",
    "Ojos",
    6000,
    3750,
    [
      "assets/img/ojos/serum-pestanas1.jfif",
      "assets/img/ojos/serum-pestanas2.jfif",
    ],
    "El Sérum Nutritivo para Pestañas con Ácido Hialurónico es la solución que estabas buscando. Este tratamiento intensivo nutre y revitaliza tus pestañas para que luzcan más largas, gruesas y voluminosas de manera natural. Su fórmula transparente y no pegajosa se aplica fácilmente con el cepillo tipo máscara, penetrando para hidratar y fortalecer los folículos pilosos. Es ideal para pestañas que han sido dañadas por extensiones o el uso constante de maquillaje. ¡Inclúyelo en tu rutina de noche y despierta con unas pestañas visiblemente más sanas y espectaculares!",
    "nuevo"
  ),
  new Producto(
    214,
    "Sombra de Ojos KEVIN&COCO",
    "Ojos",
    14900,
    8500,
    [
      "assets/img/ojos/sombra-pelorosadokyc1.jfif",
      "assets/img/ojos/sombra-pelorosadokyc2.jfif",
    ],
    "Esta paleta no es solo hermosa por fuera, también lo es por dentro. Los tonos están diseñados para complementar tu estilo y darte la libertad de crear looks impactantes. Con una mezcla de acabados que incluyen sombras con relieve, esta paleta te ofrece una experiencia de maquillaje única. Las sombras son fáciles de difuminar y se mantienen impecables por horas.",
    "nuevo"
  ),
  new Producto(
    215,
    "Sombra Libro KEVIN&COCO",
    "Ojos",
    20000,
    17000,
    [
      "assets/img/ojos/sombra-librokyc1.jfif",
      "assets/img/ojos/sombra-librokyc2.jfif",
      "assets/img/ojos/sombra-librokyc3.jfif",
    ],
    "¡Conoce tu nueva paleta favorita! Esta versión compacta de 18 sombras es un sueño hecho realidad. El empaque rosa, lleno de diseños divertidos y coloridos, es la introducción perfecta a los tonos femeninos y brillantes que hay en su interior. La combinación de colores te permite crear looks de ensueño, desde un simple toque de brillo hasta un smokey ojo dramático. ¡El regalo ideal para cualquiera que ama el color!",
    "nuevo"
  ),
  new Producto(
    216,
    "Sombra y Pomada Cejas",
    "Ojos",
    12000,
    7000,
    [
      "assets/img/ojos/sombra-pomada1.jfif",
      "assets/img/ojos/sombra-pomada2.jfif",
      "assets/img/ojos/sombra-pomada3.jfif",
      "assets/img/ojos/sombra-pomada4.jfif",
    ],
    "Consigue unas cejas perfectas y a prueba de todo con el Polvo y Crema para Cejas de La Catelrra. Su fórmula 2 en 1 te da la flexibilidad de usar la crema para una definición intensa y precisa o el polvo para un acabado más suave y natural. Ambos productos son de larga duración y resistentes al agua, asegurando que tus cejas se mantengan impecables de la mañana a la noche.",
    "nuevo"
  ),
  new Producto(
    217,
    "Sombras Fashion KEVIN&COCO",
    "Ojos",
    14900,
    9900,
    [
      "assets/img/ojos/sombra-fashionkyc1.jfif",
      "assets/img/ojos/sombra-fashionkyc2.jfif",
    ],
    "Para quienes buscan versatilidad en un formato compacto, esta paleta de KEVIN&COCO es la elección perfecta. Con 9 tonos vibrantes y texturas que incluyen glitter, y satinados, puedes crear looks completos y espectaculares. Su tamaño la hace ideal para llevar en el bolso, y el espejo integrado te asegura que siempre podrás retocar tu maquillaje.",
    "nuevo"
  ),
  new Producto(
    218,
    "Pestañina Deluxe",
    "Ojos",
    7500,
    4900,
    [
      "assets/img/ojos/218-pestaninas-deluxe1.jfif",
      "assets/img/ojos/218-pestaninas-deluxe2.jfif",
    ],
    "👁️ Máscara de Pestañas Beauty Model – Alarga, da volumen y define cada pestaña para una mirada intensa y poderosa. ✨💥",
    "nuevo"
  ),
  new Producto(
    219,
    "Delineador a Prueba de Agua",
    "Ojos",
    7000,
    4100,
    [
      "assets/img/ojos/219-delineador-waterproof.jfif",
    ],
    "🖤 Delineador plumon – Súper negro, a prueba de agua y de larga duración. Ideal para trazos precisos que duran todo el día. ✍️✨",
    "nuevo"
  ),
  new Producto(
    220,
    "Lapiz Para Cejas Karite",
    "Ojos",
    3500,
    2200,
    [
      "assets/img/ojos/220-lapiz-cejas-karite.jfif",
      "assets/img/ojos/220-lapiz-cejas-karite2.jfif",
    ],
    "💖✍️ ¡Cejas perfectas todo el día!  🤩. Lápiz con color y cepillo para un acabado natural. Fórmula Waterproof & Long Lasting 💧. Easy to shape use para unas cejas definidas y naturales.",
    "nuevo"
  ),
  new Producto(
    300,
    "Base liquida My Melody en diferentes tonos.",
    "Rostro",
    5000,
    3000,
    [
      "assets/img/rostro/base-melody1.jfif",
      "assets/img/rostro/base-melody2.jfif",
    ],
    "Si buscas un maquillaje perfecto y divertido, esta es la base para ti. Con un adorable empaque de My Melody, esta base de maquillaje te ofrece una cobertura impecable y una fórmula que protege tu piel del sol. Su textura es ligera y fácil de aplicar, dejando tu piel con un acabado sedoso y natural.",
    "nuevo"
  ),
  new Producto(
    301,
    "Base liquida BB",
    "Rostro",
    5000,
    3250,
    [
      "assets/img/rostro/base-bb1.jfif",
      "assets/img/rostro/base-bb2.jfif",
    ],
    "Presentamos la Base de Maquillaje Mocmallure B&B en un práctico formato de tubo. Esta base está diseñada para ofrecer un acabado mate y sin poros, brindando una cobertura de alta definición que dura hasta 24 horas. Es la elección perfecta para quienes buscan un acabado impecable y de larga duración.",
    "nuevo"
  ),
  new Producto(
    302,
    "Base liquida Stich",
    "Rostro",
    5000,
    3500,
    ["assets/img/rostro/base-stich1.jfif"],
    "Esta base líquida viene en un práctico tubo de tamaño pequeño, fácil de llevar a cualquier lugar. Su fórmula combina protección solar con un acabado natural para el día a día, aparte viene en diferentes tonos para todos los tipos de piel.",
    "nuevo"
  ),
  new Producto(
    303,
    "Base liquida Capibara",
    "Rostro",
    5000,
    3500,
    ["assets/img/rostro/303-base-capibara2.jfif",
    "assets/img/rostro/303-base-capibara.jfif"],
    "🐻✨ ¡La base más adorable ha llegado! diseño súper tierno de capibara 🎀. No solo te da un look impecable, sino también protección solar alta ☀️🛡️. Cobertura perfecta y cuidado en un solo tubo de 40ml 🧴! 💖",
    "nuevo"
  ),
  new Producto(
    304,
    "Base liquida Kitty",
    "Rostro",
    5000,
    3500,
    ["assets/img/rostro/304-base-kitty2.jfif",
    "assets/img/rostro/304-base-kitty.jfif"],
    "☀️🏖️ ¡Lista para el sol con estilo! Una base de maquillaje que actúa como protector solar de alta protección al mismo tiempo. 🎀  ¡Dile sí al glow saludable! 😉",
    "nuevo"
  ),
  new Producto(
    305,
    "Corrector Osito",
    "Rostro",
    8000,
    4400,
    ["assets/img/rostro/305-corrector-osito.jfif",
    "assets/img/rostro/305-corrector-osito2.jfif"],
    "¡El producto que no puede faltar en tu tienda! Este adorable corrector labial combina hidratación de calidad con el diseño viral más buscado en redes sociales. Atrae clientes con su envase coleccionable y su precio irresistible.",
    "nuevo"
  ),
  new Producto(
    306,
    "Corrector de ojeras difuminador",
    "Rostro",
    7000,
    4900,
    [
      "assets/img/rostro/corrector-iman1.jfif",
      "assets/img/rostro/corrector-iman2.jfif",
    ],
    "Este corrector es tu aliado perfecto para un acabado impecable. Su diseño innovador con esponja aplicadora facilita la cobertura de ojeras, manchas e imperfecciones. La fórmula ligera y de alta cobertura se difumina sin esfuerzo, dejando la piel con un aspecto radiante y uniforme.",
    "nuevo"
  ),
  new Producto(
    307,
    "Corrector de ojeras Karite diferentes tonos",
    "Rostro",
    7500,
    4500,
    [
      "assets/img/rostro/corrector-karite1.jfif",
      "assets/img/rostro/corrector-karite2.jfif",
      "assets/img/rostro/corrector-karite3.jfif",
    ],
    "Despídete de las ojeras y las imperfecciones con el corrector de Karité. Su fórmula de larga duración no solo cubre, sino que también cuida tu piel. Se siente ligero y cómodo, ofreciendo un acabado natural y sin pliegues que dura desde la mañana hasta la noche. Es tu aliado perfecto para un rostro radiante.",
    "nuevo"
  ),
  new Producto(
    308,
    "Polvo compacto",
    "Rostro",
    12000,
    6850,
    [
      "assets/img/rostro/polvos-cat1.jfif",
      "assets/img/rostro/polvos-cat2.jfif",
      "assets/img/rostro/polvos-cat3.jfif",
    ],
    "Consigue un maquillaje perfecto y duradero con el Polvo de Acabado Karité Cat. Este polvo ligero y fino está diseñado para matificar el rostro, sellar tu base y corrector, y difuminar la apariencia de poros y líneas finas. Su fórmula ayuda a controlar el exceso de grasa y a mantener tu piel fresca y sin brillos durante todo el día. ¡Ideal para un acabado suave y profesional! Además, su empaque adorable es irresistible.",
    "nuevo"
  ),
  new Producto(
    309,
    "Polvo de Hadas",
    "Rostro",
    8000,
    4900,
    [
      "assets/img/rostro/polvos-hadas1.jfif",
      "/assets/img/rostro/polvos-hadas2.jfif",
      "assets/img/rostro/polvos-hadas3.jfif",
    ],
    "Transforma cualquier maquillaje en una obra de arte con la colección Fashion Polvo de Hadas. Este set exclusivo te invita a explorar 6 tonalidades radiantes, desde destellos dorados hasta un sutil brillo perlado. Ya sea que quieras un toque de luz en tus pómulos, un brillo en el escote o un acento en tu cabello, estos polvos sueltos te dan la libertad de crear looks únicos y deslumbrantes. ¡La magia está en tus manos",
    "nuevo"
  ),
  new Producto(
    310,
    "Rubor liquido",
    "Rostro",
    7500,
    4500,
    [
      "assets/img/rostro/rubor-liquido1.jfif",
      "assets/img/rostro/rubor-liquido2.jfif",
    ],
    "Consigue un brillo natural y luminoso con el Blush Líquido de Moocmallure. Su textura ligera y sedosa se desliza suavemente sobre la piel, permitiendo una fácil construcción del color, desde un rubor sutil hasta uno más intenso. Perfecto para mejillas y labios, este producto te da un acabado fresco y jugoso que dura todo el día. ¡Añade un toque de color que ilumina tu rostro!",
    "nuevo"
  ),
  new Producto(
    311,
    "Sérum Facial Antioxidante 'Camellias' de BIOAQUA",
    "Rostro",
    6500,
    4000,
    [
      "assets/img/rostro/serum-camelias1.jfif",
      "assets/img/rostro/serum-camelias2.jfif",
    ],
    "Este sérum facial está diseñado para reparar y nutrir la piel. Su fórmula antioxidante ayuda a proteger la piel del daño ambiental, mientras que los ingredientes nutritivos la mantienen hidratada y con un aspecto fresco. Aplícalo diariamente para obtener una piel más suave, firme y luminosa.",
    "nuevo"
  ),
  new Producto(
    312,
    "Sérum Facial Antioxidante 'Vitamina B5 + Acido Hialurónico de BIOAQUA",
    "Rostro",
    6500,
    4000,
    ["assets/img/rostro/serum-b5.jfif"],
    "Hidrata y repara tu piel con el Sérum de Ácido Hialurónico + Vitamina B5 de BIOAQUA. Su fórmula concentrada calma la piel irritada, reduce la apariencia de los poros y proporciona una hidratación profunda para una barrera cutánea más fuerte y saludable.",
    "nuevo"
  ),
  new Producto(
    313,
    "Polvos Banana",
    "Rostro",
    12500,
    8900,
    [
      "assets/img/rostro/313-polvos-banana.jfif",
      "assets/img/rostro/313-polvos-banana2.jfif",
    ],
    "🌟 Polvo Compacto Banana – Acabado suave y natural que matifica la piel al instante. Ideal para sellar el maquillaje y mantener tu rostro fresco y radiante. 🍌✨",
    "nuevo"
  ),
  new Producto(
    314,
    "Polvos Kevin y Coco",
    "Rostro",
    10200,
    14000,
    [
      "assets/img/rostro/314-polvos-kevin-y-coco.jfif",
      "assets/img/rostro/314-polvos-kevin-y-coco2.jfif",
    ],
    "✨ Polvo Compacto Kevin&Coco – Suave, ligero y de larga duración. ¡Logra un acabado perfecto al instante y luce una piel radiante todo el día! 💁‍♀️🌟",
    "nuevo"
  ),
  new Producto(
    315,
    "Iluminador en Roll On Iman of Noble",
    "Rostro",
    6000,
    3000,
    [
      "assets/img/rostro/315-iluminador-rollon1.jfif",
      "assets/img/rostro/315-iluminador-rollon2.jfif",
    ],
    "✨ Iluminador en Polvo en Rollon – Brillo mágico al instante. Ideal para resaltar mejillas, ojos y cuerpo con un acabado radiante. 💫🌟",
    "nuevo"
  ),
  new Producto(
    316,
    "Rubor en crema Karite",
    "Rostro",
    8000,
    5700,
    [
      "assets/img/rostro/316-rubor-crema-karite1.jfif",
      "assets/img/rostro/316-rubor-crema-karite2.jfif",
    ],
    "💖 Rubor en Crema Karité – Textura suave tipo gel, fácil de difuminar y de larga duración. Disponible en 6 tonos para un toque natural y radiante. 🌸✨",
    "nuevo"
  ),
  new Producto(
    317,
    "Contorno 2 en 1 en Crema",
    "Rostro",
    7000,
    3900,
    [
      "assets/img/rostro/317-contorno-2-en-1-1.jfif",
      "assets/img/rostro/317-contorno-2-en-1-4.jfif",
      "assets/img/rostro/317-contorno-2-en-1-2.jfif",
      "assets/img/rostro/317-contorno-2-en-1-3.jfif",
    ],
    "🎨✨ ¡Magia en un solo lápiz! Este producto de doble punta para un contorno perfecto. 🤎 El tono oscuro define y el tono claro ilumina y resalta. Un must-have para esculpir tu rostro con facilidad. ¡Efecto 3D al instante! 🌟",
    "nuevo"
  ),
  new Producto(
    400,
    "Serum Acido Hialuronico",
    "Skincare",
    6500,
    4000,
    ["assets/img/skincare/400-serum-blanqueador-antimanchas.jfif"],
    "✨💧 BIOAQUA Serum Blanqueador 🤍. Este es el Suero Esencia Blanqueadora y Despigmentante ideal para tratar las manchas y conseguir un tono de piel uniforme. Fórmula concentrada para una piel más clara y radiante. ¡Tu aliado contra las imperfecciones! 🌟.",
    "nuevo"
  ),
  new Producto(
    403,
    "Serum Acido Hialuronico",
    "Skincare",
    6500,
    4000,
    ["assets/img/skincare/serum-b5.jfif"],
    "Hidrata y repara tu piel con el Sérum de Ácido Hialurónico + Vitamina B5 de BIOAQUA. Su fórmula concentrada calma la piel irritada, reduce la apariencia de los poros y proporciona una hidratación profunda para una barrera cutánea más fuerte y saludable.",
    "nuevo"
  ),
  new Producto(
    404,
    "Serum Arroz BioAqua",
    "Skincare",
    8500,
    5900,
    [
      "assets/img/skincare/404-serum-arroz-bioaqua.jfif",
      "assets/img/skincare/404-serum-arroz-bioaqua2.jfif",
    ],
    "🌾 Sérum de Arroz Bioaqua – Formulado con extracto natural de arroz, ayuda a hidratar profundamente, mejorar la textura y aclarar el tono de la piel. Su fórmula ligera se absorbe fácilmente, dejando el rostro suave, luminoso y con un brillo saludable. Ideal para todo tipo de piel y uso diario. ✨💧",
    "nuevo"
  ),
  new Producto(
    405,
    "Serum Antiacne BioAqua",
    "Skincare",
    6500,
    4000,
    [
      "assets/img/skincare/405-serum-acne-bioaqua.jfif",
      "assets/img/skincare/405-serum-acne-bioaqua2.jfif",
    ],
    "🌹 Jabón Facial de Rosa Bioaqua – Un limpiador suave que purifica profundamente la piel, eliminando impurezas, exceso de grasa y restos de maquillaje sin resecar. Gracias a su extracto natural de rosa, hidrata, refresca y mejora la luminosidad del rostro, dejándolo terso, suave y con un delicado aroma floral. Ideal para todo tipo de piel y perfecto para una rutina diaria de cuidado facial. ✨🫧",
    "nuevo"
  ),
  new Producto(
    406,
    "Jabon Facial Rosas Bioaqua",
    "Skincare",
    8900,
    6300,
    [
      "assets/img/skincare/406-jabon-facial-rosas-bioaqua.jfif",
      "assets/img/skincare/406-jabon-facial-rosas-bioaqua2.jfif",
    ],
    "🌹 Jabón Facial de Rosa Bioaqua – Un limpiador suave que purifica profundamente la piel, eliminando impurezas, exceso de grasa y restos de maquillaje sin resecar. Gracias a su extracto natural de rosa, hidrata, refresca y mejora la luminosidad del rostro, dejándolo terso, suave y con un delicado aroma floral. Ideal para todo tipo de piel y perfecto para una rutina diaria de cuidado facial. ✨🫧",
    "nuevo"
  ),
  new Producto(
    407,
    "Mascarilla de Colágeno para Ojos Bioaqua",
    "Skincare",
    3000,
    1700,
    [
      "assets/img/skincare/407-mascarilla-colageno.jfif",
    ],
    "💛Refresca e hidrata profundamente el contorno de ojos, ayudando a reducir bolsas, ojeras y líneas de expresión. Su fórmula con colágeno reafirma y aporta luminosidad, dejando la piel más suave, tersa y revitalizada. Ideal para un efecto descansado y radiante. 👁️✨",
    "nuevo"
  ),
  new Producto(
    408,
    "Mascarilla Facial Hidratante de Bioaqua",
    "Skincare",
    3000,
    1700,
    [
      "assets/img/skincare/408-mascarilla-osito.jfif",
    ],
    "Formulada con esencia de plantas claras e hidratantes, esta divertida mascarilla tipo animalito ayuda a retener la humedad, refrescar y suavizar la piel. Ideal para revitalizar el rostro cansado, dejándolo más luminoso, hidratado y con una sensación de frescura inmediata. Perfecta para un momento de cuidado relajante y divertido. 💧🌿",
    "nuevo"
  ),
  new Producto(
    409,
    "Mascarilla Facial Hidratante de Bioaqua",
    "Skincare",
    3000,
    1700,
    [
      "assets/img/skincare/409-mascarilla-conejito.jfif",
    ],
    "🐰✨Disfruta de una piel suave, fresca y radiante con esta mascarilla hidratante de esencia de plantas. Su fórmula ayuda a hidratar profundamente, mejorar la elasticidad y dejar tu rostro luminoso. 🌸 Hidratación intensa 🌿 Extractos vegetales nutritivos 😍 Presentación divertida con diseño de conejito 💧 Ideal para todo tipo de piel.  Perfecta para consentirte y devolverle vitalidad a tu piel en minutos.",
    "nuevo"
  ),
  new Producto(
    410,
    "Mascarilla Facial BioAqua con Nicotinamida",
    "Skincare",
    3000,
    1700,
    [
      "assets/img/skincare/410-mascarilla-nicotanimide.jfif",
      "assets/img/skincare/410-mascarilla-nicotanimide2.jfif",
    ],
    "✨ Mascarilla iluminadora que ayuda a reducir manchas y pecas, unifica el tono de la piel y mejora su luminosidad. Contiene 50% nicotinamida y extracto de levadura para reparar la barrera cutánea y darle un brillo saludable al rostro.",
    "nuevo"
  ),
  new Producto(
    411,
    "Mascarilla Facial BIOAQUA con Vitamina C",
    "Skincare",
    3000,
    1700,
    [
      "assets/img/skincare/411-mascarilla-vitaminac.jfif",
    ],
    "🍊 Mascarilla revitalizante que hidrata, ilumina y mejora la elasticidad de la piel. Su fórmula con vitamina C ayuda a unificar el tono, aportando un brillo natural y saludable al rostro.",
    "nuevo"
  ),
  new Producto(
    412,
    "Mascarilla Facial BIOAQUA Retinol",
    "Skincare",
    3000,
    1700,
    [
      "assets/img/skincare/412-mascarilla-retinol.jfif",
    ],
    "Enriquecida con 45% retinol y ácido hialurónico, ayuda a reducir arrugas, mejorar la elasticidad y aportar firmeza a la piel. ",
    "nuevo"
  ),
  new Producto(
    413,
    "Mascarilla Facial de Pato de BIOAQUA",
    "Skincare",
    3000,
    1700,
    ["assets/img/skincare/mascarilla-pollo.jfif"],
    "Dale a tu piel un impulso de hidratación con esta divertida mascarilla facial. Su diseño adorable y su fórmula nutritiva trabajan juntos para dejar la piel suave y radiante. Perfecta para una sesión de cuidado personal en casa, esta mascarilla ayuda a rejuvenecer la piel y a darle un aspecto fresco y saludable.",
    "nuevo"
  ),
  new Producto(
    430,
    "Primer Aguacate",
    "Skincare",
    5000,
    3000,
    ["assets/img/skincare/primer-aguacate1.jfif"],
    "Este primer facial de aguacate de Micolor es el primer paso para un maquillaje de larga duración. Su fórmula ligera y nutritiva ilumina y suaviza la piel, creando una base perfecta para la aplicación de la base. Ayuda a difuminar los poros y las líneas finas, asegurando un acabado liso y uniforme que se mantiene fresco durante todo el día.",
    "nuevo"
  ),
  new Producto(
    431,
    "Primer Milk",
    "Skincare",
    5000,
    3500,
    [
      "assets/img/skincare/primer-milk1.jfif",
      "assets/img/skincare/primer-milk2.jfif",
    ],
    "Prepara tu piel para un maquillaje impecable con el primer facial su fórmula ligera y nutritiva alisa la textura de la piel, minimiza la apariencia de los poros y crea una superficie perfecta para la aplicación de la base. Este primer asegura que tu maquillaje se mantenga fresco y en su lugar durante horas. Es la elección ideal para un acabado profesional y de larga duración.",
    "nuevo"
  ),
  new Producto(
    432,
    "Primer Kuromi",
    "Skincare",
    5000,
    3000,
    [
      "assets/img/skincare/432-primer-kuromi2.jfif",
      "assets/img/skincare/432-primer-kuromi.jfif",
    ],
    "✨💜  Primer 3D de Mocallure®! 🦇 La base perfecta para tu maquillaje. Consigue una fijación Super Stay 💧 y una duración de ¡24 horas! ⏰ Prepara tu piel con el primer más cute y rebelde. ¡Ideal para exhibir en el display de 24 piezas!",
    "nuevo"
  ),
  new Producto(
    500,
    "Par de Caimanes Hawaianos Pequeños",
    "Accesorios",
    5000,
    5000,
    [
      "assets/img/accesorios/500-caiman-hawaiano-pequeno.jfif",
    ],
    "Pinzas Hawaianas para el Cabello 🌺Accesorio tropical y colorido que sujeta tu cabello con estilo y frescura. ",
    "nuevo"
  ),
  new Producto(
    501,
    "Brochas Cola de Sirena",
    "Accesorios",
    12000,
    8250,
    [
      "assets/img/ojos/brocha-sirena1.jfif",
      "assets/img/ojos/brocha-sirena2.jfif",
    ],
    "Crea looks de fantasía con nuestro Set de Brochas con Diseño de Sirena. Cada set de 10 brochas presenta un mango de cola de sirena en colores metálicos, ideal para aplicar y difuminar maquillaje en ojos y rostro. ¡Un toque mágico para tu colección de belleza!",
    "nuevo"
  ),
  new Producto(
    502,
    "Brochas Deluxe",
    "Accesorios",
    18900,
    12500,
    [
      "assets/img/ojos/brochas-deluxe1.jfif",
      "assets/img/ojos/brochas-deluxe2.jfif",
      "assets/img/ojos/brochas-deluxe3.jfif",
      "assets/img/ojos/brochas-deluxe4.jfif",
      "assets/img/ojos/brochas-deluxe5.jfif",
    ],
    "Lleva tu maquillaje al siguiente nivel con este espectacular set. Los mangos llenos de glitter de cuatro colores espectaculares que se mueve y las cerdas súper suaves no solo hacen que la aplicación sea más fácil, sino también más divertida. El set incluye brochas para base, rubor, sombras y cejas, asegurando que tengas la herramienta perfecta para cada paso de tu maquillaje. ¡Es hora de añadir un poco de magia a tu colección!",
    "ultimos"
  ),
  new Producto(
    503,
    "Perfiladores de cejas x3",
    "Accesorios",
    3000,
    1750,
    [
      "assets/img/ojos/perfilador-cejas1.jfif",
      "assets/img/ojos/perfilador-cejas2.jfif",
    ],
    "Mantén tus cejas siempre perfectas esta herramienta es la solución ideal para el retoque diario, permitiéndote eliminar el exceso de vello y dar forma a tus cejas de manera fácil y sin irritaciones. Su hoja de alta calidad y diseño ergonómico garantizan un perfilado suave y un resultado profesional, justo como lo harías en un salón.",
    "ultimos"
  ),
  new Producto(
    504,
    "Beauty Blender",
    "Accesorios",
    3500,
    1900,
    [
      "assets/img/rostro/beauty-blenderkawaii1.jfif",
      "assets/img/rostro/beauty-blenderkawaii2.jfif",
    ],
    "Dale un toque divertido a tu rutina de maquillaje con estas adorables esponjas. Su material de alta calidad permite una aplicación suave y uniforme de bases, correctores y polvos. Úsalas en seco para una cobertura total o húmedas para un acabado natural y luminoso.",
    "ultimos"
  ),
  new Producto(
    505,
    "Brocha maquillaje profesional",
    "Accesorios",
    9000,
    6500,
    [
      "assets/img/rostro/brocha-profesional1.jfif",
      "assets/img/rostro/brocha-profesional2.jfif",
    ],
    "Consigue un acabado impecable con esta Brocha para Maquillaje de Acabado Profesional. Su diseño ergonómico y cerdas densas permiten una aplicación rápida y uniforme de base, polvos o contorno. Ideal para una cobertura sin esfuerzo",
    "ultimos"
  ),
  new Producto(
    506,
    "Brochas unicolor",
    "Accesorios",
    3500,
    2750,
    [
      "assets/img/rostro/brocha-unicolor1.jfif",
      "assets/img/rostro/brocha-unicolor2.jfif",
    ],
    "Lleva tu maquillaje al siguiente nivel con nuestro set de brochas en tonos pastel. Cada paquete incluye brochas esenciales para rostro y ojos, con cerdas suaves y un diseño adorable. Elige tu color favorito y crea looks increíbles de forma fácil y divertida.",
    "nuevo"
  ),
  new Producto(
    507,
    "Encrespador",
    "Accesorios",
    7000,
    3900,
    [
      "assets/img/ojos/220-encrespador2.jfif",
      "assets/img/ojos/220-encrespador1.jfif",
      "assets/img/ojos/220-encrespador3.jfif",
    ],
    "🔥 Encrespador de Pestañas – Levanta y curva tus pestañas al instante para una mirada más abierta y expresiva. 👁️✨",
    "nuevo"
  ),
  new Producto(
    508,
    "Beauty Blender Kiss Lovely",
    "Accesorios",
    3900,
    2900,
    [
      "assets/img/rostro/317-beauty-blender.jfif",
    ],
    "Beauty Blender 💖 Esponja de maquillaje que permite aplicar base, corrector o polvos de forma uniforme, logrando un acabado natural y sin marcas",
    "nuevo"
  ),
  new Producto(
    509,
    "Brochas Unicolor",
    "Accesorios",
    8000,
    6100,
    [
      "assets/img/ojos/221-brochas-unicolor-brillantes.jfif",
      "assets/img/ojos/221-brochas-unicolor-brillantes1.jfif",
      "assets/img/ojos/221-brochas-unicolor-brillantes2.jfif",
      "assets/img/ojos/221-brochas-unicolor-brillantes3.jfif",
    ],
    "✨ Set de Brochas de Maquillaje – Incluye brochas suaves y precisas para aplicar base, rubor, sombras y más. Sus mangos ligeros y coloridos ofrecen un agarre cómodo, ideal para lograr un maquillaje perfecto. Perfectas para uso diario o profesional. 💖💄",
    "nuevo"
  ),
  new Producto(
    510,
    "Uñas Postizas",
    "Accesorios",
    6000,
    4800,
    [
      "assets/img/accesorios/508-unas-postizas3.jfif",
      "assets/img/accesorios/508-unas-postizas2.jfif",
      "assets/img/accesorios/508-unas-postizas.jfif",
    ],
    " 💅 Colección exclusiva de uñas postizas . Diseños variados y a la moda. ¡Ponte chic en minutos!",
    "nuevo"
  ),

  new Producto(
    511,
    "Bolsas Tornasol",
    "Accesorios",
    500,
    200,
    [
      "assets/img/accesorios/511-bolsas-tornasol.jfif",
    ],
    " 💅 Colección exclusiva de uñas postizas . Diseños variados y a la moda. ¡Ponte chic en minutos!",
    "nuevo"
  ),


];
