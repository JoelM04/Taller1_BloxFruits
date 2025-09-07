const productos = [
  {
    nombre: "Dragon West",
    rareza: "Mítica",
    tipo: "in-game",
    descripcion:
      "Dragon permite al usuario ganar el poder y transformarse en un dragón mítico.",
    imagen: "West-Dragon.webp",
  },
  {
    nombre: "Dragon East",
    rareza: "Mítica",
    tipo: "in-game",
    descripcion:
      "Dragon permite al usuario ganar el poder y transformarse en un dragón mítico.",
    imagen: "East-Dragon.webp",
  },
  {
    nombre: "Kitsune",
    rareza: "Mítica",
    tipo: "in-game",
    descripcion:
      "Kitsune otorga al usuario la capacidad de conjurar y manipular el fuego azul en ataques destructivos y les permite transformarse en una criatura de la mitología japonesa, el Kitsune.",
    imagen: "Kitsune_Fruit.webp",
  },
  {
    nombre: "Yeti",
    rareza: "Mítica",
    tipo: "in-game",
    descripcion:
      "Yeti otorga al usuario la habilidad de manipular y potenciar sus ataques con hielo, además de permitirle transformarse en la criatura mitológica Yeti.",
    imagen: "Yeti_Fruit.webp",
  },
  {
    nombre: "Leopard",
    rareza: "Mítica",
    tipo: "in-game",
    descripcion:
      "Leopard permite al usuario adquirir ataques poderosos y violentos, así como transformarse en un leopardo antropomórfico, otorgándole velocidad, agilidad y gran capacidad ofensiva.",
    imagen: "Leopard_Fruit.webp",
  },
  {
    nombre: "Gas",
    rareza: "Mítica",
    tipo: "in-game",
    descripcion:
      "Gas permite al usuario crear, convertirse y manipular gas concentrado e inflamable en ataques devastadores contra sus desafortunados enemigos.",
    imagen: "Gas_Fruit.webp",
  },
  {
    nombre: "Portal",
    rareza: "Legendaria",
    tipo: "in-game",
    descripcion:
      "Portal otorga al usuario la habilidad de crear portales, permitiendo un movimiento instantáneo y teleportación a través de diversas ubicaciones.",
    imagen: "Portal_Fruit.webp",
  },
  {
    nombre: "Lightning",
    rareza: "Legendaria",
    tipo: "in-game",
    descripcion:
      "Lightning otorga al usuario la habilidad de controlar, generar y transformarse en electricidad.",
    imagen: "Lightning_Fruit.webp",
  },
  {
    nombre: "Pain",
    rareza: "Legendaria",
    tipo: "in-game",
    descripcion:
      "La fruta Pain permite al usuario convertir el daño recibido y los Pain Ghosts absorbidos en poder puro.",
    imagen: "Pain_Fruit.webp",
  },
  {
    nombre: "Buddha",
    rareza: "Legendaria",
    tipo: "in-game",
    descripcion:
      "Buddha permite al usuario transformarse en un imponente Budai dorado y resplandeciente (no debe confundirse con El Buda).",
    imagen: "Buddha_Fruit.webp",
  },
  {
    nombre: "Light",
    rareza: "Rara",
    tipo: "in-game",
    descripcion:
      "Light permite al usuario crear, convertirse y manipular la luz misma para infligir daño a los enemigos.",
    imagen: "Light_Fruit.webp",
  },
  {
    nombre: "Rubber",
    rareza: "Rara",
    tipo: "in-game",
    descripcion:
      "Rubber es una de las frutas más antiguas, principalmente utilizada para contrarrestar armas de fuego. Es buena para farmear debido a sus ataques de largo alcance.",
    imagen: "Rubber_Fruit.webp",
  },
  {
    nombre: "Ghost",
    rareza: "Rara",
    tipo: "in-game",
    descripcion:
      "Ghost permite a los usuarios luchar con ataques espectrales y de frío controlados desde los muertos.",
    imagen: "Ghost_Fruit.webp",
  },
  {
    nombre: "Magma",
    rareza: "Rara",
    tipo: "in-game",
    descripcion:
      "Magma permite al usuario controlar, convertirse y manipular magma, disparando proyectiles en forma de puño y permitiendo que el magma residual queme a los enemigos en el suelo.",
    imagen: "Magma_Fruit.webp",
  },
  {
    nombre: "Diamond",
    rareza: "Poco Común",
    tipo: "in-game",
    descripcion:
      "Diamond permite al usuario recubrir su propio cuerpo con diamante, dándose protección y la capacidad de conjurar y manipular diamantes para atacar a sus oponentes.",
    imagen: "Diamond_Fruit.webp",
  },
  {
    nombre: "Flame",
    rareza: "Poco Común",
    tipo: "in-game",
    descripcion:
      "Flame otorga al usuario la habilidad de crear, convertirse y manipular el elemento del fuego en ataques extremadamente calientes.",
    imagen: "Flame_Fruit.webp",
  },
  {
    nombre: "Ice",
    rareza: "Poco Común",
    tipo: "in-game",
    descripcion:
      "Ice permite al usuario crear, convertirse y manipular hielo, lanzando proyectiles afilados y congelantes, y encerrando a los enemigos en hielo sólido.",
    imagen: "Ice_Fruit.webp",
  },
  {
    nombre: "Rocket",
    rareza: "Común",
    tipo: "in-game",
    descripcion:
      "Rocket permite al usuario disparar cohetes-misil, causando daño explosivo. El usuario también puede volar usando sus habilidades de cohete.",
    imagen: "Rocket_Fruit.webp",
  },
  {
    nombre: "Bomb",
    rareza: "Común",
    tipo: "in-game",
    descripcion:
      "Bomb permite al usuario generar ataques explosivos similares a bombas, los cuales pueden derribar a los oponentes.",
    imagen: "Bomb_Fruit.webp",
  },
  {
    nombre: "Smoke",
    rareza: "Común",
    tipo: "in-game",
    descripcion:
      "Smoke permite al usuario crear, convertirse y manipular humo, infligiendo ataques nebulosos a los oponentes.",
    imagen: "Smoke_Fruit.webp",
  },
  {
    nombre: "Kitsune Huge Plush",
    rareza: "Mítica",
    tipo: "real",
    descripcion:
      "Peluche enorme de Kitsune de 9 pulgadas de alto, Serie 2 | Incluye DLC.",
    imagen: "Kitsune_Fruit_Real.webp",
  },
  {
    nombre: "T-Rex Huge Plush",
    rareza: "Mítica",
    tipo: "real",
    descripcion:
      "Peluche enorme de T-Rex de 9 pulgadas de alto, Serie 2 | Incluye DLC.",
    imagen: "TRex_Fruit_Real.webp",
  },
  {
    nombre: "Buddha Huge Plush",
    rareza: "Legendaria",
    tipo: "real",
    descripcion:
      "Peluche enorme de Buddha de 9 pulgadas de alto, Serie 2 | Incluye DLC.",
    imagen: "Buddha_Fruit_Real.webp",
  },
  {
    nombre: "Mystery Fruit Collectible Plush 2-Pack",
    rareza: "Exclusiva",
    tipo: "real",
    descripcion:
      "Set coleccionable de 2 peluches de frutas misteriosas de 4 pulgadas de alto, Serie 1 | Incluye DLC.",
    imagen: "Mystery_Fruit_Collectible_2-Pack_Fruit_Real.webp",
  },
  {
    nombre: "Mystery Fruit Collectible Plush",
    rareza: "Exclusiva",
    tipo: "real",
    descripcion:
      "Peluche coleccionable de fruta misteriosa de 4 pulgadas de alto, Serie 1 | Incluye DLC.",
    imagen: "Mystery_Fruit_Collectible_Fruit_Real.webp",
  },
  {
    nombre: "Mystery Fruit Deluxe Plush",
    rareza: "Exclusiva",
    tipo: "real",
    descripcion:
      "Peluche Deluxe de fruta misteriosa de 8 pulgadas de alto, Serie 1 | Incluye DLC.",
    imagen: "Mystery_Fruit_Deluxe_Fruit_Real.webp",
  },
  {
    nombre: "Mystery Fruit Minifigure 2-Pack",
    rareza: "Exclusiva",
    tipo: "real",
    descripcion:
      "Set de 2 minifiguras de fruta misteriosa de 1.5 pulgadas de alto, Serie 1 | Incluye DLC.",
    imagen: "Mystery_Fruit_Minifigure_2-Pack_Fruit_Real.webp",
  },
];
