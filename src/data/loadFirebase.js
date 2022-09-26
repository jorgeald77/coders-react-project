const {initializeApp} = require("firebase/app")
const {getFirestore, collection, addDoc} = require("firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyA5h0Jz1qO6L8qFkUP4ilOqMDXvz0x_nJQ",
    authDomain: "coders-ecommerce.firebaseapp.com",
    projectId: "coders-ecommerce",
    storageBucket: "coders-ecommerce.appspot.com",
    messagingSenderId: "281053525322",
    appId: "1:281053525322:web:6978c6a88453e3f652fdb3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const queryCollection = collection(db, 'items')

console.log("File working")
const mock = [
    {
        sku: 'L4146230021',
        title: 'speedcross 5',
        description: 'Para crear la nueva generación de SPEEDCROSS 5, volvimos al origen y sacamos partido de los valores que hicieron legendario al SPEEDCROSS. Su mayor agarre y pala más dinámica han elevado el listón del rendimiento y el ajuste. Todo ello, junto con una mejor estabilidad y un aspecto refinado, dan lugar a una nueva leyenda.',
        price: 3299,
        stock: 10,
        collection: 'trail',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41462300_0_720x.jpeg?alt=media&token=1cdf646c-fe47-4e0e-97c6-71e716166885',

    },
    {
        sku: 'L4143040025',
        title: 'SENSE FEEL 2',
        description: 'El SENSE FEEL, que se ajusta como un calcetín, ofrece mayor confort, ya pases zumbando por un camino forestal o por el pleno centro de la ciudad. Repleto de características específicas para el sendero, este calzado te ofrece el agarre adicional que necesitas para abordar nuevos desafíos en cualquier terreno.',
        price: 2026,
        stock: 12,
        collection: 'trail',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41430400_0_720x.jpeg?alt=media&token=cf5c0c0b-eba0-4235-8c65-ab5b1ea064aa',
    },
    {
        sku: 'L4159700028',
        title: 'IMPULSE',
        description: 'La transición a los senderos será suave con este calzado ligero y dinámico. La HYPULSE se cimienta sobre el par dinámico y reactivo de Energy Blade y la espuma Fuze Surge y ofrece una pisada fluida y eficaz. Un cómodo calzado de trail repleto de tecnologías básicas listas para el sendero, para hacer realidad una versión mejor y más rápida de ti.',
        price: 2099,
        stock: 11,
        collection: 'trail',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41597000_0_720x.jpeg?alt=media&token=d4dcb5bf-8e21-43ce-b1df-9b765d11f2a5',
    },
    {
        sku: 'L4144680027',
        title: 'ALPHACROSS 3 GTX',
        description: 'El tenis para trail running ALPHACROSS 3 te ofrece todo el agarre y protección que necesitas. Esta temporada, hemos actualizado el ajuste para sujetar el pie en su sitio al impulsarte, ¡Entrena en la montaña con confianza!',
        price: 2649,
        stock: 15,
        collection: 'trail',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41446800_0_720x.jpeg?alt=media&token=c70836c5-91b7-4afb-9d55-5217e2c65f83',
    },
    {
        sku: 'L4159490035',
        title: 'HYPULSE',
        description: 'La transición a los senderos será suave con este calzado de trail running ligero y dinámico. El HYPULSE cuenta con la tecnología de Energy Blade y la espuma Fuze Surge y ofrece una pisada fluida y eficaz. Un cómodo tenis de trail running repleto de tecnologías básicas listas para el sendero, para hacer realidad una versión mejor y más rápida de ti.',
        price: 2499,
        stock: 7,
        collection: 'trail',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41594900_0_720x.jpeg?alt=media&token=e1f3dec5-5c15-4b74-81ec-e9940c9a97b0',
    },
    {
        sku: 'L4144470021',
        title: 'TENIS MADCROSS GTX',
        description: 'Progresivo en diseño, adherente y de prestaciones cómodas, el MADCROSS GORE-TEX atraerá a todas aquellas personas con un gusto alternativo por las aventuras en los senderos. Con una entresuela más suave para una recepción amortiguada, membrana GORE-TEX y tacos multidireccionales distribuidos en una suela llena de tracción, este calzado de trail running es multiusos. Perfecto para exploradores aventureros.',
        price: 3040,
        stock: 13,
        collection: 'trail',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41444700_0_720x.jpeg?alt=media&token=2a09f262-8c97-4405-80f3-a347022aa24d',
    },

    {
        sku: 'L4171010027',
        title: 'SONIC 5 BALANCE',
        description: 'Rebote explosivo y pisada amortiguada y sin vibraciones. El SONIC 5 BALANCE es ligero y equilibrado para todo un espectro de runners; con tecnología Optivibe™ para atenuar las vibraciones y potenciar el retorno de energía, y ofrecerte así transiciones fluidas y más cómodas. La suave pala de malla envolvente, lengüeta mullida y construcción del cuello abrazan y sujetan el pie durante kilómetros.',
        price: 3399,
        stock: 22,
        collection: 'running',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41710100_0_720x.jpeg?alt=media&token=ed7af5e2-9c80-4a3a-9f35-1bf0964f43b1',
    },
    {
        sku: 'L4144330034',
        title: 'TENIS PREDICT SOC 2',
        description: 'La PREDICT SOC está de vuelta y lista para salir, con un acolchado extra en el talón y un ajuste más ceñido para mantener el pie en su sitio, además de un tejido elástico y más transpirable para mantener la frescura. La pisada todavía es más suave con Anatomical Decoupling para un movimiento natural del pie, plataformas independientes para una estabilidad dinámica y amortiguación EnergyCell™+ para una sensación de rebote.',
        price: 3199,
        stock: 8,
        collection: 'running',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41443300_0_720x.jpeg?alt=media&token=3dc73afb-a549-410a-8902-1bab7f00fa0e',
    },
    {
        sku: 'L4144820009',
        title: 'TENIS SENSE CLIMASALOMON™ WATERPROOF',
        description: 'Ligero, cómodo, fácil de usar y adherente en todas las superficies: el SENSE CLIMASALOMON™ WATERPROOF está listo para todo lo que quieran hacer los niños. El botín con ClimaSalomon™ Waterproof garantiza protección climática completa.',
        price: 1646,
        stock: 6,
        collection: 'running',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41448200_0_720x.jpeg?alt=media&token=3df16d85-e06a-404d-87f5-6a65687c557a',
    },
    {
        sku: 'L4158970027',
        title: 'TENIS SPECTUR',
        description: 'Calzado para runinng de asfalto Tenis Spectur. Ligero como una pluma y pisada suave, gracias a la propulsión alimentada por Energy Blade y al trabajo en equipo de Reverse Camber y la espuma Energy Surge para transiciones rápidas y como la seda. Haz que tu carrera sea explosiva, rápida y reactiva, día tras día.',
        price: 2899,
        stock: 9,
        collection: 'running',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41589700_0_720x.jpeg?alt=media&token=67b31eb7-2097-479a-bc20-e1f8af990e44',
    },
    {
        sku: 'L4130800029',
        title: 'TENIS VECTUR',
        description: 'El calzado de entrenamiento básica para que corras hasta el siguiente nivel.',
        price: 2699,
        stock: 10,
        collection: 'running',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41308000_0_720x.jpeg?alt=media&token=9dd5bbe1-602a-46f5-be14-75d2a52032f6',
    },
    {
        sku: 'L4122820021',
        title: 'TENIS SLAB PHANTASM',
        description: 'Los tenis S/LAB PHANTASM, están inspirados en la tradición de Salomon sobre las pendientes de los Alpes, los cuales exhiben un perfil con arco invertido que no interfiere cuando corres a toda velocidad. Hemos desarrollado este tenis con algunos deportistas de élite para centrarnos en lo que importa: el peso, la transpirabilidad y una transición rápida.',
        price: 4349,
        stock: 8,
        collection: 'running',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41228200_0_720x.jpeg?alt=media&token=3a701885-f7ed-42ff-8332-c7e47319949b',
    },

    {
        sku: 'L4144270022',
        title: 'XA PRO 3D V8 GTX',
        description: 'Esta versión actualizada del emblemático XA PRO 3D GTX es más ligero y suave, aunque conserva todas las ventajas esenciales del original (estabilidad, amortiguación y agarre). Con el compuesto Premium Wet de Contagrip®, una membrana GORE-TEX impermeable y 3D Chassis mejorado, estos tenis te acompañan sin problemas allá donde te lleve el sendero.',
        price: 4199,
        stock: 13,
        collection: 'senderismo',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41442700_0_720x.jpeg?alt=media&token=f00aded8-29fa-4dcf-b13a-dfa87aca36e6',
    },
    {
        sku: 'L4134870027',
        title: 'TENIS X ULTRA PRO GTX',
        description: 'La X ULTRA™ para nuestros consumidores más exigentes. La nueva pala elástica GORE-TEX envuelve tu pie para un ajuste anatómico que protege de la humedad, priorizando la movilidad y la libertad de movimientos. El ADV-C Chassis es el rey de la estabilidad y la movilidad óptima, construido en una unidad inferior con nuestra goma de mayor agarre para una total confianza en cualquier terreno. Libertad de aventuras.',
        price: 4560,
        stock: 7,
        collection: 'senderismo',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41348700_0_720x.jpeg?alt=media&token=abd5c861-dbad-406a-82de-09ff2c670c27',
    },
    {
        sku: 'L4160090021',
        title: 'PREDICT HIKE GTX',
        description: 'Una bota de senderismo para destacar entre la multitud, la PREDICT HIKE GORE-TEX garantiza una cómoda pisada en cualquier camino. Con la tecnología Energy Surge para una amortiguación duradera, esta todoterreno para aire libre cuenta con GORE-TEX para resistir el mal tiempo y tacos profundos que se agarran al suelo de cualquier terreno.',
        price: 3899,
        stock: 10,
        collection: 'senderismo',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41600900_0_720x.jpeg?alt=media&token=8c091b86-cb62-410a-98af-4aa1644a8f4d',
    },
    {
        sku: 'L4162450033',
        title: 'X ULTRA 4 MID GTX',
        description: 'Prepárate para dar el máximo en ascensos y descensos con la versión GORE-TEX de horma ancha y media caña de la X-ULTRA 4. Tan ágil como un calzado de trail running, pero con toda la estabilidad, el agarre y la protección impermeable que necesitas para enfrentarte a terrenos técnicos. Dotada de un nuevo chasis, estás botas te protegen aún mejor las articulaciones sensibles sin renunciar a la libertad de movimientos.',
        price: 4448,
        stock: 15,
        collection: 'senderismo',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41624500_0_720x.jpeg?alt=media&token=e1b20178-8e1f-4ec2-97a2-b822efefd012',
    },
    {
        sku: 'L4013820020',
        title: 'XA FORCES MID GTX',
        description: "Botas tácticas para todas las condiciones: basadas en nuestra icónica XA Pro 3D, estas botas ligeras antiestáticas te ayudan a mantenerte sensible en tus pies en las situaciones más críticas. Perfecto para todas las condiciones. <br>Calzado táctico ligeras: las fuerzas Mid EN están diseñadas para fuerzas especiales, combinando protección contra la intemperie y comodidad dinámica con una suela exterior para que puedas seguir moviéndote rápido en situaciones críticas. <br>La línea de zapatos de rendimiento FORCES de Salomon ofrece un soporte estable y duradero para condiciones intensas. <br>Impermeabilidad GORE-TEX para mantener tus pies secos.",
        price: 4349,
        stock: 10,
        collection: 'senderismo',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL40138200_0_720x.jpeg?alt=media&token=55e17d6d-e73a-45d6-8ff3-93089a8bb991',
    },
    {
        sku: 'L4162560021',
        title: 'OUTPULSE MID GTX',
        description: 'Calzado de senderismo rebosante de prestaciones para impulsarte hacia delante en tus conquistas al aire libre. Polifacética para adaptarse a tu estado de ánimo, la OUTPULSE MID GORE-TEX es adaptable y fiable a partes iguales. Protectora y adherente, se elabora sobre una entresuela que ofrece un retorno de energía y una amortiguación de primera, gracias a nuestro nuevo compuesto de espuma Fuze Surge. Reescribe tu aventura al aire libre.',
        price: 3899,
        stock: 10,
        collection: 'senderismo',
        pictureUrl: 'https://firebasestorage.googleapis.com/v0/b/coders-ecommerce.appspot.com/o/items%2FL41625600_0_720x.jpeg?alt=media&token=a221862c-cf71-493a-8401-72d109734a05',
    },

]

mock.forEach((obj, index, array) => {
    const newItem = {
        sku: obj.sku,
        title: obj.title,
        description: obj.description,
        price: obj.price,
        stock: obj.stock,
        collection: obj.collection,
        pictureUrl: obj.pictureUrl
    }

    addDoc(queryCollection, newItem)
        .then(docRef => {
            console.log("Documento escrito con ID: ", docRef.id)
        })
        .catch(error => {
            console.error("No se pudo agregar el Item", error)
        })
})
