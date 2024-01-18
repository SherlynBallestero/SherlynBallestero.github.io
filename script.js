//variables..
var creditoInicial = 450;
var annoActual = 2013;

var cartasElement = document.getElementById("cartas");
var opcionesNivel0 = [
    {objeto:"Iniciar", precio: 0}
];
var opcionesNivel1 = [
    { objeto: "sector_Industrias:PRODUCCIÓN DE NEUMÁTICOS RADIALES", precio: 100 },
    { objeto: "sector_Industrias:PRODUCCIÓN DE ENVASES DE ALUMINIO", precio: 200 },
    { objeto: "sector_Industrias: PRODUCCIÓN DE EQUIPOS DE CLIMA", precio: 200 },
    { objeto: "sector_industrias:PROYECTO PARA LA PRODUCCIÓN DE ENVASES DE VIDRIO PARA BEBIDAS", precio: 200 },
    { objeto: "sector_industrias:PRODUCCIÓN DE LÍNEAS DIVERSAS DE VAJILLAS DE VIDRIO", precio: 200 },
    { objeto: "sector_industrias: PRODUCCIÓN DE CALZADO COMERCIAL", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario:PRODUCCIÓN DE CARNE VACUNA, SU PROCESAMIENTO INDUSTRIAL Y LA COMERCIALIZACIÓN DE CORTES ESPECIALES (2 PROYECTOS).", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario:PRODUCCIÓN DE CERDOS PARA LA COMERCIALIZACIÓN EN CANAL Y PRODUCTOS TERMINADOS DEL CERDO (5 PROYECTOS).", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario:PRODUCCIÓN BUFALINA PARA LA INDUSTRIALIZACIÓN Y COMERCIALIZACIÓN DE LECHE Y SUS DERIVADOS. ", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario:PRODUCCIÓN DE CARNE DE POLLO Y SU COMERCIALIZACIÓN EN CANAL (9 PROYECTOS)", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario:PRODUCCIÓN DE ARROZ EN EL SUR DE LAS PROVINCIAS DE ARTEMISA Y MAYABEQUE.", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario: PRODUCCIÓN DE MANÍ.", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario:PROCESAMIENTO Y COMERCIALIZACIÓN DE CAFÉ CONVENCIONAL DE CALIDAD ÉLITE..", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario:APROVECHAMIENTO DE LA BIOMASA DE MARABÚ PARA LA PRODUCCIÓN DE CARBÓN VEGETAL E INCREMENTO DE PLANTACIONES CON MANEJO INTENSIVO EN EMPRESA FORESTAL (4 PROYECTOS).", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario: INCREMENTO DEL POTENCIAL PRODUCTIVO DE LA CAMARONICULTURA", precio: 200 },
    { objeto: "Sector Agrícola Forestal y Alimentario:PLANTA PROCESADORA DE SOYA PARA PRODUCIR ACEITE REFINADO", precio: 200 },
    { objeto: "sector_azucarero:ADMINISTRACIÓN PRODUCTIVA DE CENTRALES AZUCAREROS (4 PROYECTOS)", precio: 200 },
    { objeto: "sector_turismo:CONSTRUCCIÓN Y COMERCIALIZACIÓN DE CAPACIDADES HOTELERAS Y VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO CIENFUEGOS.", precio: 200 },
    { objeto: "sector_turismo:CONSTRUCCIÓN Y COMERCIALIZACIÓN DE CAPACIDADES HOTELERAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO TRINIDAD, SANCTI SPÍRITUS.", precio: 200 },
    { objeto: "sector_turismo:CONSTRUCCIÓN Y COMERCIALIZACIÓN DE VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO COVARRUBIAS, LAS TUNAS.", precio: 200 },
    { objeto: "sector_turismo: CONSTRUCCIÓN Y COMERCIALIZACIÓN DE CAPACIDADES HOTELERAS Y VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO GUARDALAVACA, HOLGUÍN.", precio: 200 },
    { objeto: "sector_turismo:CONSTRUCCIÓN Y COMERCIALIZACIÓN DE CAPACIDADES HOTELERAS Y VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO SANTA LUCÍA, CAMAGÜEY.", precio: 200 },
    { objeto: "sector_turismo: sector_turismo:DESARROLLO INMOBILIARIO ASOCIADO A CAMPOS DE GOLF EN EL FARO/ EL JAGÜEY. POLO TURÍSTICO RANCHO LUNA PASACA", precio: 200 },
    { objeto: "sector_turismo:DESARROLLO INMOBILIARIO ASOCIADO A CAMPOS DE GOLF EN LOMA LINDA.", precio: 200 },
    { objeto: "sector_turismo:ADMINISTRACIÓN Y COMERCIALIZACIÓN DE 33 INSTALACIONES HOTELERAS", precio: 200 },
    { objeto: "sector_energía:EXPLORACIÓN PETROLERA A RIESGO Y PRODUCCIÓN COMPARTIDA EN BLOQUES DE AGUAS SOMERAS DEL TERRITORIO NACIONAL (8 BLOQUES)", precio: 200 },
    { objeto: "sector_energía:EXPLORACIÓN PETROLERA A RIESGO Y PRODUCCIÓN COMPARTIDA EN BLOQUES DE LA ZONA ECONÓMICA EXCLUSIVA DE CUBA EN EL GOLFO DE MÉXICO, ZEE (52 BLOQUES)", precio: 200 },
    { objeto: "sector_energía:EXPLORACIÓN PETROLERA A RIESGO Y PRODUCCIÓN COMPARTIDA EN LOS BLOQUES TERRESTRES DEL TERRITORIO NACIONAL (25 BLOQUES)", precio: 200 },
    { objeto: "sector_energía:RECUPERACIÓN SECUNDARIA EN YACIMIENTOS EN EXPLOTACIÓN", precio: 200 },
    { objeto: "sector_energía:ENERACIÓN DE ENERGÍA ELÉCTRICA A PARTIR DE LA BIOMASA FORESTAL", precio: 200 },
    { objeto: "sector_energía:BIOELÉCTRICAS CON CAPACIDAD DE 30MW A 60MW (10 PROYECTOS)", precio: 200 },
    { objeto: "sector_energía:PROYECTO DE PARQUE EÓLICO EN MAISÍ DE 174 MW", precio: 200 },
    { objeto: "sector_energía:PROYECTO DE PARQUE EÓLICO EN BANES DE 102 MW", precio: 200 },
    { objeto: "sector_minería:PROYECTOS EN LA FASE DE RECONOCIMIENTO E INVESTIGACIÓN GEOLÓGICA (PROSPECCIÓN – EXPLORACIÓN) PARAMETALES PRECIOSOS (ORO Y PLATA), METALES BASE (COBRE, PLOMO, ZINC) Y OTROS MINERALES DE INTERÉS", precio: 200 },
    { objeto: "sector_minería:INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN – EXPLORACIÓN) A RIESGO PARA EL PROSPECTO DE WOLFRAMIO “LELA” EN LA ISLA DE LA JUVENTUD", precio: 200 },
    { objeto: "sector_minería:EXPLOTACIÓN, PROCESAMIENTO, Y COMERCIALIZACIÓN DE LOS PRODUCTOS OBTENIDOS DEL YACIMIENTO DE COBRE HIERRO MANTUA", precio: 200 },
    { objeto: "sector_minería: PROYECTO CAJÁLBANA, PROVINCIA PINAR DEL RÍO.", precio: 200 },
    { objeto: "sector_minería:PROYECTO SAN FELIPE, PROVINCIA CAMAGÜEY", precio: 200 },
    { objeto: "sector_minería:PROYECTO COLAS ROJAS, MOA", precio: 200 },
    { objeto: "sector_transporte:CONSTRUCCIÓN, REMODELACIÓN, OPERACIÓN Y ADMINISTRACIÓN DEL ASTILLERO CASABLANCA", precio: 200 },
    { objeto: "sector_transporte:GESTIÓN INTEGRAL DE UNA BASE DE TRANSPORTE URBANO DE LA HABANA", precio: 200 },
    { objeto: "sector_transporte:GESTIÓN INTEGRAL DE UNA BASE DE TRANSPORTE DE TRABAJADORES DEL TURISMO EN LOS CAYOS DE LA REGIÓN CENTRAL DEL PAÍS", precio: 200 },
    { objeto: "sector_industria_farm_Biot:PLANTA CON BUENAS PRÁCTICAS DE FABRICACIÓN (BPF) PARA EL DESARROLLO Y LA PRODUCCIÓN DE MEDICAMENTOS BIOLÓGICOS ORALES", precio: 200 },
    { objeto: "sector_comercio:IMPORTACIÓN Y COMERCIALIZACIÓN MAYORISTA DE PIEZAS DE REPUESTO, PARTES Y AGREGADOS DE VEHÍCULOS AUTOMOTORES", precio: 200 },
    { objeto: "sector_construcción: FÁBRICA DE CEMENTO GIBARA", precio: 200 },
    { objeto: "sector_construcción: FÁBRICA DE CEMENTO NUEVITAS", precio: 200 },
    { objeto: "sector_construcción: PRODUCCIÓN DE SISTEMAS DE PVC PARA LA CONSTRUCCIÓN", precio: 200 },
    { objeto: "sector_construcción: PRODUCCIÓN DE LÁMINAS LISAS", precio: 200 },
    { objeto: "sector_construcción:PRODUCCIÓN DE MANTAS ASFÁLTICAS", precio: 200 },
    { objeto: "sector_construcción: PRODUCCIÓN DE YESO CALCINADO, BLOQUES Y PRODUCTOS A BASE DE YESO PARA LA CONSTRUCCIÓN", precio: 200 }
     
];

var opcionesNivel2 = [
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN DE CARNE VACUNA, SU PROCESAMIENTO INDUSTRIAL Y LA COMERCIALIZACIÓN DE CORTES ESPECIALES (2 PROYECTOS).", precio: 150 },
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN DE CERDOS PARA LA COMERCIALIZACIÓN EN CANAL Y PRODUCTOS TERMINADOS DEL CERDO (5 PROYECTOS).", precio: 250 },
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN BUFALINA PARA LA INDUSTRIALIZACIÓN Y COMERCIALIZACIÓN DE LECHE Y SUS DERIVADOS.", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN DE CARNE DE POLLO Y SU COMERCIALIZACIÓN EN CANAL (9 PROYECTOS).", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN DE CARNE DE POLLO Y SU COMERCIALIZACIÓN EN CANAL.", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN DE ARROZ EN EL SUR DE LAS PROVINCIAS DE ARTEMISA Y MAYABEQUE", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario: PRODUCCIÓN DE MANÍ", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:PROCESAMIENTO Y COMERCIALIZACIÓN DE CAFÉ CONVENCIONAL DE CALIDAD ÉLITE", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:APROVECHAMIENTO DE LA BIOMASA DE MARABÚ PARA LA PRODUCCIÓN DE CARBÓN VEGETAL E INCREMENTO DE PLANTACIONES CON MANEJO INTENSIVO EN EMPRESA FORESTAL (4 PROYECTOS)", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:DESARROLLO DE LA PRODUCCIÓN DE CÍTRICOS Y FRUTALES, COMO FRUTAS FRESCAS Y PRODUCTOS INDUSTRIALIZADOS EN LA EMPRESA CÍTRICOS CEIBA.", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:DESARROLLO DE LA PRODUCCIÓN AGROINDUSTRIAL DE CÍTRICOS Y FRUTALES EN LA REGIÓN DE CONTRAMAESTRE.", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:INCREMENTO DEL POTENCIAL PRODUCTIVO DE LA CAMARONICULTURA", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:PROCESAMIENTO INDUSTRIAL DEL CACAO E INCREMENTO DE LA PRODUCCIÓN DE PRODUCTOS DE CHOCOLATERÍA.", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN DE CONFITURAS Y CEREALES.", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario: PRODUCCIÓN DE SALSA DE SOYA", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:INCREMENTO PRODUCTIVO DE LA ACUICULTURA Y SU INDUSTRIALIZACIÓN.", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:INCREMENTO DEL POTENCIAL PRODUCTIVO DEL MARICULTIVO.", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:DESARROLLO DE PRODUCTOS LÁCTEOS Y SUS DERIVADOS.", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:INCREMENTO Y DIVERSIFICACIÓN DE LA PRODUCCIÓN Y ENVASADO DE FRUTAS Y VEGETALES EN LA FÁBRICA LA CONCHITA", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:SERVICIOS DE REFRIGERACIÓN Y DE CALDERAS", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN Y DISTRIBUCIÓN NACIONAL E INTERNACIONAL DE RON CUBANO DE LA MARCA PERLA DEL NORTE", precio: 350 },
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN Y DISTRIBUCIÓN NACIONAL E INTERNACIONAL DE RON CUBANO DE LA MARCA CUBAY", precio: 350 },
    { objeto: "sector_industrias:PRODUCCIÓN Y COMERCIALIZACIÓN DE PRODUCTOS Y SERVICIOS DE SOLUCIONES INFORMÁTICAS.", precio: 350 },
    { objeto: "sector_industrias:PRODUCCIÓN Y COMERCIALIZACIÓN DE TELÉFONOS FIJOS Y CELULARES INTELIGENTES", precio: 350 },
    { objeto: "sector_industrias:PRODUCCIÓN Y COMERCIALIZACIÓN DE SACOS DE MALLA.", precio: 350 },
    { objeto: "sector_industrias:  PRODUCCIÓN Y COMERCIALIZACIÓN DE MATERIAL FLEXIBLE IMPRESO.", precio: 350 },
    { objeto: "sector_industrias:PRODUCCIÓN Y COMERCIALIZACIÓN DE PAÑALES DESECHABLES.", precio: 350 },
    { objeto: "sector_industrias:PRODUCCIÓN Y COMERCIALIZACIÓN DE FORMULARIOS CONTINUOS ESTÁNDAR, IMPRESOS COMERCIALES Y PAPEL RESMADO CON SISTEMA DE CORTE LÁSER.", precio: 350 },
    { objeto: "sector_industrias:PRODUCCIÓN Y COMERCIALIZACIÓN DE PAPEL GACETA Y BOND.", precio: 350 },
    { objeto: "sector_industrias: PRODUCCIÓN Y COMERCIALIZACIÓN DE PAPEL TISSUE Y SU CONVERSIÓN.", precio: 350 },
    { objeto: "sector_industrias: SISTEMA INTEGRADO DE GESTIÓN DE RESIDUOS SÓLIDOS URBANOS (SIGRSU).", precio: 350 },
    { objeto: "sector_industrias: PRODUCCIÓN Y COMERCIALIZACIÓN DE BATERÍAS DE AUTOS, UPS, Y OTROS SURTIDOS.", precio: 350 },
    { objeto: "sector_industrias:PRODUCCIÓN Y COMERCIALIZACIÓN DE PRODUCTOS LARGOS DE ACEROS INOXIDABLES Y ALEADOS.", precio: 350 },
    { objeto: "sector_turismo CONSTRUCCIÓN Y COMERCIALIZACIÓN DE CAPACIDADES HOTELERAS Y VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO CIENFUEGOS.", precio: 350 },
    { objeto: "sector_turismo:CONSTRUCCIÓN Y COMERCIALIZACIÓN DE VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO COVARRUBIAS, LAS TUNAS.", precio: 350 },
    { objeto: "sector_turismo:CONSTRUCCIÓN Y COMERCIALIZACIÓN DE CAPACIDADES HOTELERAS Y VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO GUARDALAVACA, HOLGUÍN.", precio: 350 },
    { objeto: "sector_turismo:CONSTRUCCIÓN Y COMERCIALIZACIÓN DE CAPACIDADES HOTELERAS Y VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO SANTA LUCÍA, CAMAGÜEY.", precio: 350 },
    { objeto: "sector_turismo:DESARROLLOS INMOBILIARIOS ASOCIADO A CAMPO DE GOLF “CHORRERA ANCÓN”. POLO TURÍSTICO ANCÓN-TRINIDAD.", precio: 350 },
    { objeto: "sector_turismo:CONTRATOS DE ADMINISTRACIÓN Y COMERCIALIZACIÓN HOTELERA (59 INSTALACIONES)", precio: 350 },
    { objeto: "sector_turismo:NUEVA MARINA BANES, HOLGUÍN. POLO: GUARDALAVACA", precio: 350 },
    { objeto: "sector_turismo: AMPLIACIÓN DE LA MARINA CAYO GUILLERMO. POLO JARDINES DEL REY", precio: 350 },
    { objeto: "sector_turismo:AMPLIACIÓN DE LA MARINA DÁRSENA VARADERO. POLO VARADERO.", precio: 350 },
    { objeto: "sector_turismo:AMPLIACIÓN DE LA MARINA SANTA LUCÍA. POLO: SANTA LUCÍA", precio: 350 },
    { objeto: "sector_turismo: AMPLIACIÓN DE LA MARINA SIGUANEA. POLO: ISLA DE LA JUVENTUD.", precio: 350 },
    { objeto: "sector_turismo:NUEVA MARINA EN TRINIDAD. POLO: TRINIDAD.", precio: 350 },
    { objeto: "sector_energía: CONTRATOS DE EXPLORACIÓN PETROLERA A RIESGO Y PRODUCCIÓN COMPARTIDA EN BLOQUES DE AGUAS SOMERAS DEL TERRITORIO NACIONAL. (8 BLOQUES).", precio: 350 },
    { objeto: "sector_energía:CONTRATOS DE EXPLORACIÓN PETROLERA A RIESGO Y PRODUCCIÓN COMPARTIDA EN BLOQUES DE LA ZONA ECONÓMICA EXCLUSIVA DE CUBA EN EL GOLFO DE MÉXICO (ZEE). (52 BLOQUES)", precio: 350 },
    { objeto: "sector_energía:CONTRATOS DE EXPLORACIÓN PETROLERA A RIESGO Y PRODUCCIÓN COMPARTIDA EN LOS BLOQUES TERRESTRES DEL TERRITORIO NACIONAL. (25 BLOQUES).", precio: 350 },
    { objeto: "sector_energía:RECUPERACIÓN SECUNDARIA EN YACIMIENTOS EN EXPLOTACIÓN", precio: 350 },
    { objeto: "sector_energía:GENERACIÓN DE ENERGÍA ELÉCTRICA A PARTIR DE LA BIOMASA FORESTAL.", precio: 350 },
    { objeto: "sector_energía:BIOELÉCTRICAS CON CAPACIDAD DE 50 MW (16 PROYECTOS)", precio: 350 },
    { objeto: "sector_energía:PARQUES SOLARES FOTOVOLTAICOS EN LA ZONA OCCIDENTAL.", precio: 350 },
    { objeto: "sector_energía:PARQUE EÓLICO EN MAISÍ DE 174 MW", precio: 350 },
    { objeto: "sector_energía:PARQUE EÓLICO EN BANES DE 102 MW", precio: 350 },
    { objeto: "sector_energía:PARQUE EÓLICO EN GIBARA DE 51 MW", precio: 350 },
    { objeto: "sector_Minería:PROYECTO PARA LA EXPLOTACIÓN DEL DEPÓSITO DE COBRE HIERRO MANTUA", precio: 350 },
    { objeto: "sector_Minería:RECONOCIMIENTO O INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN–EXPLORACIÓN) A RIESGO PARA METALES PRECIOSOS (ORO Y PLATA), METALES BASE (COBRE, PLOMO, ZINC) Y OTROS MINERALES DE INTERÉS EN PROSPECTOS DE LA REGIÓN CUBA CENTRAL.", precio: 350 },
    { objeto: "sector_Minería:RECONOCIMIENTOS E INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN–EXPLORACIÓN) A RIESGO PARA METALES PRECIOSOS (ORO Y PLATA), METALES BASE (COBRE, PLOMO, ZINC) Y OTROS MINERALES DE INTERÉS EN PROSPECTOS DE LA REGIÓN CIEGO – CAMAGÜEY - TUNAS.", precio: 350 },
    { objeto: "sector_Minería:RECONOCIMIENTO E INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN – EXPLORACIÓN) A RIESGO PARA METALES PRECIOSOS (ORO Y PLATA), METALES BASE (COBRE, PLOMO, ZINC) Y OTROS METALES DE INTERÉS EN PROSPECTOS DE LA REGIÓN HOLGUÍN.", precio: 350 },
    { objeto: "sector_Minería:RECONOCIMIENTO E INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN – EXPLORACIÓN) A RIESGO PARA CROMO Y OTROS METALES EN EL MACIZO SAGUA – BARACOA, Y PARA METALES BASE Y PRECIOSOS EN LA SIERRA DEL PURIAL", precio: 350 },
    { objeto: "sector_Minería:RECONOCIMIENTOS E INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN – EXPLORACIÓN) A RIESGO PARA METALES PRECIOSOS (ORO Y PLATA), METALES BASE (COBRE, PLOMO, ZINC) Y OTROS MINERALES DE INTERÉS EN PROSPECTOS DE LA REGIÓN SIERRA MAESTRA.", precio: 350 },
    { objeto: "sector_Minería:INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN – EXPLORACIÓN) A RIESGO PARA WOLFRAMIO EN EL PROSPECTO LELA.", precio: 350 },
    { objeto: "sector_Minería:RECONOCIMIENTOS E INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN – EXPLORACIÓN) A RIESGO PARA MINERALES TÉCNICOS (MICAS Y CAOLINES) EN VARIOS PROSPECTOS UBICADOS EN LA ISLA DE LA JUVENTUD.", precio: 350 },
    { objeto: "sector_Minería:RECONOCIMIENTOS E INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN – EXPLORACIÓN) A RIESGO PARA MINERALES TÉCNICOS (MICAS Y CAOLINES) EN VARIOS PROSPECTOS UBICADOS EN LA ISLA DE LA JUVENTUD.", precio: 350 },
    { objeto: "sector_Minería: PROYECTO COLAS NEGRAS, PROVINCIA HOLGUÍN", precio: 350 },
    { objeto: "sector_transporte:GESTIÓN INTEGRAL DE UNA BASE DE TRANSPORTE URBANO DE LA HABANA", precio: 350 },
    { objeto: "sector_transporte:GESTIÓN INTEGRAL DE UNA BASE DE TRANSPORTE DE TRABAJADORES DEL TURISMO EN LOS CAYOS DE LA REGIÓN CENTRAL DEL PAÍS", precio: 350 },
    { objeto: "sector_transporteEXPLOTACIÓN DEL SISTEMA FERROVIARIO ELÉCTRICO ENTRE LAS CIUDADES DE LA HABANA A MATANZAS", precio: 350 },
    { objeto: "sector_transporte: SERVICIOS DE ATENCIÓN INTEGRAL A TALLERES DE EQUIPOS TRACTIVOS FERROVIARIOS", precio: 350 },
    { objeto: "sector_transporte:OPERACIÓN Y ADMINISTRACIÓN DE ASTILLEROS CASA BLANCA", precio: 350 },
    { objeto: "sector_transporte:MODERNIZACIÓN EN INFRAESTRUCTURA Y EQUIPAMIENTO PARA LA REFABRICACIÓN Y REPARACIÓN DE MOTORES Y AGREGADOS EN LA UEB MOTOR CENTRO JOSÉ MARÍA PÉREZ.", precio: 350 },
    { objeto: "sector_transporte:MODERNIZACIÓN EN INFRAESTRUCTURA Y EQUIPAMIENTO PARA LA REPARACIÓN Y COMPROBACIÓN DE LOS SISTEMAS DE INYECCIÓN DE COMBUSTIBLE EN MOTORES DE COMBUSTIÓN INTERNA EN LA RED DE TALLERES DE MOTOR CENTRO", precio: 350 },
    { objeto: "sector_transporte:PERACIÓN Y ADMINISTRACIÓN DEL ASTILLERO DEL CARIBE (ASTICAR)", precio: 350 },
    { objeto: "sector_transporte:MODERNIZACIÓN EN INFRAESTRUCTURA Y EQUIPAMIENTO PARA EL DESARROLLO DE LOS TRABAJOS DE CHAPISTERÍA Y PINTURA DE VEHÍCULOS AUTOMOTORES EN LA RED DE TALLERES DE MOTOR CENTRO", precio: 350 },
    { objeto: "sector_transporte:DESARROLLO, OPERACIÓN Y ADMINISTRACIÓN DE INSTALACIONES PORTUARIAS DEDICADAS A LA RECEPCIÓN DE BUQUES CRUCEROS. (5 PROYECTOS)", precio: 350 },
    { objeto: "sector_industrias_farmacéutica_biotecnológica:AMPLIACIÓN DE LA PRODUCCIÓN DEL SURFACTANTE PULMONAR NATURAL SURFACEN", precio: 350 },
    { objeto: "sector_salud:SERVICIO DE HEMODIÁLISIS EN VACACIONES", precio: 350 },
    { objeto: "sector_salud:CLÍNICA INTERNACIONAL DE MEDICINA DEL DEPORTE, CONTROL Y EDUCACIÓN ANTIDOPAJE", precio: 350 },
    { objeto: "sector_salud:PROYECTO DE SERVICIO DE CALIDAD DE VIDA", precio: 350 },
    { objeto: "sector_construcción:PRODUCCIÓN DE PAVIMENTOS CERÁMICOS", precio: 350 },
    { objeto: "sector_construcción:PRODUCCIÓN DE ELEMENTOS DE YESO EN CANASÍ", precio: 350 },
    { objeto: "sector_construcción:RECONVERSIÓN DE LA PLANTA DE AZULEJOS DE HOLGUÍN A MONOCOCCIÓN POROSA", precio: 350 },
    { objeto: "sector_construcción:PLANTA DE CERÁMICA DE SAN JOSÉ", precio: 350 },
    { objeto: "sector_construcción: PRODUCCIÓN DE MUEBLES SANITARIOS EN SAN JOSÉ", precio: 350 },
    { objeto: "sector_construcción: PRODUCCIÓN DE CARPINTERÍA EN BLANCO, ESTRUCTURA DE TECHOS Y PISOS EN MADERA", precio: 350 },
    { objeto: "sector_construcción:INCREMENTO DE LAS POTENCIALIDADES EN EL MÁRMOL", precio: 350 },
    { objeto: "sector_construcción:CONSTRUCCIÓN DEL HOTEL IBEROSTAR ANCÓN", precio: 350 },
    { objeto: "sector_construcción:CONSTRUCCIÓN DEL COMPLEJO TURÍSTICO INMOBILIARIO DE GOLF BELLOMONTE", precio: 350 },
    { objeto: "sector_construcción: CONSTRUCCIÓN DE INSTALACIÓN HOTELERA DE 400 HABITACIONES HOTEL MELIÁ TRINIDAD", precio: 350 },
    { objeto: "sector_construcción:CONSTRUCCIÓN DEL COMPLEJO TURÍSTICO INMOBILIARIO DE GOLF CARBONERA GOLF & COUNTRY CLUB", precio: 350 },
    { objeto: "sector_construcción: MODERNIZACIÓN DE SISTEMAS INGENIERILES PARA CONSTRUCCIÓN Y MONTAJE", precio: 350 },
    { objeto: "sector_construcción:PRODUCCIÓN DE LÁMINAS LISAS", precio: 350 },
    { objeto: "sector_comercio: COMERCIALIZACIÓN DE ARTÍCULOS DE FERRETERÍA Y MATERIALES DE LA CONSTRUCCIÓN", precio: 350 },
    { objeto: "sector_comercio:OPERADOR LOGÍSTICO 3PL PARA LA GESTIÓN DE LAS CADENAS DE SUMINISTRO DE ALIMENTOS REFRIGERADOS", precio: 350 },
    { objeto: "sector_comercio: COMERCIALIZACIÓN MAYORISTA DE TEJIDOS, MERCERÍA, ACCESORIOS Y CONFECCIONES TEXTILES", precio: 350 },
    { objeto: "sector_comercio:IMPORTACIÓN Y COMERCIALIZACIÓN MAYORISTA DE PIEZAS DE REPUESTO, PARTES Y AGREGADOS DE VEHÍCULOS AUTOMOTORES", precio: 350 },
    { objeto: "sector_comercio:COMERCIALIZACIÓN DE ARTÍCULOS DE FERRETERÍA Y MATERIALES DE LA CONSTRUCCIÓN", precio: 350 },
    { objeto: "sector_comercio:OPERADOR LOGÍSTICO 3PL PARA LA GESTIÓN DE LAS CADENAS DE SUMINISTRO DE ALIMENTOS REFRIGERADOS", precio: 350 },
    { objeto: "sector_audiovisual:CONSTRUCCIÓN Y MONTAJE TECNOLÓGICO DE UN FORO PARA LA PRODUCCIÓN Y/O COPRODUCCIÓN AUDIOVISUAL EN ALTA DEFINICIÓN EN MANAGUA. (FORO DE MANAGUA)", precio: 350 },
    { objeto: "sector_audiovisual:ESTABLECIMIENTO DE UN SISTEMA DE CANALES DE PAGO PARA LA TV NACIONAL. (TV PAGA)", precio: 350 }
  
];

var opcionesNivel3=[
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN DE CERDOS PARA LA COMERCIALIZACIÓN EN CANAL Y PRODUCTOS TERMINADOS DEL CERDO (5 PROYECTOS)",precio:0 },
    { objeto: "sector_agrícola_forestal_alimentario:PRODUCCIÓN BUFALINA PARA LA INDUSTRIALIZACIÓN YCOMERCIALIZACIÓN DE LECHE Y SUS DERIVADOS",precio:0 },
    { objeto: "sector_azucarero: ADMINISTRACIÓN DE CENTRAL CON BIOELÉCTRICA",precio:0 },
    { objeto: "sector_azucaero:DERIVADOS MOLDEADOS DE BAGAZO: MÓDULOS DE CASAS DE TABLEROS DE BAGAZO-CEMENTO",precio:0 },
    { objeto: "sector_industrias:REPARACIÓN, PRODUCCIÓN Y COMERCIALIZACIÓN DE LÁMPARAS DECORATIVAS",precio:0 },
    { objeto: "sector_industrias:PRODUCCIÓN DE IMPLEMENTOS DEPORTIVOS",precio:0 },
    { objeto: "sector_turismo:CONSTRUCCIÓN Y COMERCIALIZACIÓN DE CAPACIDADES HOTELERAS Y VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO CIENFUEGOS",precio:0 },
    { objeto: "sector_turismo:CONSTRUCCIÓN Y COMERCIALIZACIÓN DE VILLAS DE ALTO ESTÁNDAR EN EL POLO TURÍSTICO COVARRUBIAS, LAS TUNAS",precio:0 },
    { objeto: "sector_energía:CONTRATOS DE EXPLORACIÓN PETROLERA A RIESGO Y PRODUCCIÓN COMPARTIDA EN BLOQUES DE AGUAS SOMERAS DEL TERRITORIO NACIONAL. (8 BLOQUES)",precio:0 },
    { objeto: "sector_energía:CONTRATOS DE EXPLORACIÓN PETROLERA A RIESGO Y PRODUCCIÓN COMPARTIDA EN BLOQUES DE LA ZONA ECONÓMICA EXCLUSIVA DE CUBA EN EL GOLFO DE MÉXICO (ZEE). (52 BLOQUES)",precio:0 },
    { objeto: "sector_minería:RECONOCIMIENTO O INVESTIGACIONES GEOLÓGICAS (PROSPECCIÓN–EXPLORACIÓN) A RIESGO PARA METALES PRECIOSOS (ORO Y PLATA), METALES BASE (COBRE, PLOMO, ZINC) Y OTROS MINERALES DE INTERÉS EN PROSPECTOS DE LA REGIÓN CUBA CENTRAL",precio:0 },
    { objeto: "sector_transporte:DESARROLLO, OPERACIÓN Y ADMINISTRACIÓN DE INSTALACIONES PORTUARIAS DEDICADAS A LA RECEPCIÓN DE BUQUES CRUCEROS. (4 PROYECTOS)",precio:0 },
    { objeto: "sector_transporte:MODERNIZACIÓN EN INFRAESTRUCTURA Y EQUIPAMIENTO PARA EL DESARROLLO DE LOS TRABAJOS DE CHAPISTERÍA Y PINTURA DE VEHÍCULOS AUTOMOTORES EN LA RED DE TALLERES DE MOTOR CENTRO",precio:0 }
    
];
var opcionesNivel4=[
    { objeto: "sector_cultura:ESTABLECIMIENTO DE UN SISTEMA DE CANALES DE PAGO PARA LA TV NACIONAL (TV PAGA)",precio:0 },
    { objeto: "sector_cultura:INFORMÁTICA Y MEDIOS AUDIOVISUALES PARA LA EDUCACIÓN",precio:0 },
    { objeto: "sector_bancario_financiero:SERVICIOS DE SEGUROS DE VIDA",precio:0 },
    { objeto: "sector_bancario_financiero:SERVICIOS PARA SEGUROS DE CRÉDITO",precio:0 },
    { objeto: "sector_hidráulico:PRODUCCIÓN DE TUBERÍAS DE POLIPROPILENO PARA LA CANALIZACIÓN DE REDES TÉCNICAS",precio:0 },
    { objeto: "sector_hidráulico:SERVICIOS DE PERFORACIÓN DE POZOS PROFUNDOS",precio:0 },
    { objeto: "sector_comercio:COMERCIALIZACIÓN MAYORISTA DE TEJIDOS, MERCERÍA, ACCESORIOS Y CONFECCIONES TEXTILES",precio:0 },
    { objeto: "sector_comercio:OPERADOR LOGÍSTICO 3PL PARA LA GESTIÓN DE LAS CADENAS DE SUMINISTRO DE ALIMENTOS REFRIGERADOS.(3 PROYECTOS)",precio:0 },
    { objeto: "sector_construcción:CONSTRUCCIÓN DE UNA PLANTA DE CAL EN ARTEMISA",precio:0 },
    { objeto: "sector_construcción:CONSTRUCCIÓN DE UNA PLANTA DE MORTEROS SECOS EN ARTEMISA",precio:0 }
   
];
var opcionesNivel5=[
    { objeto: "",precio:0 },
    { objeto: "",precio:0 },
    { objeto: "",precio:0 },
    { objeto: "",precio:0 },
    { objeto: "",precio:0 },
    { objeto: "",precio:0 }
];
var opcionesNivel6=[
    { objeto: "sector_cultura:INFORMÁTICA Y MEDIOS AUDIOVISUALES PARA LA EDUCACIÓN",precio:0 },
    { objeto: "SISTEMA DE CANALES DE PAGO PARA LA TV NACIONAL (TV PAGA)",precio:0 },
    { objeto: "sector_minería:TALLER DE SERVICIOS AUTOMOTORES A EQUIPOS MINEROS Y DE MOVIMIENTO DE TIERRA",precio:0 },
    { objeto: "sector_minería:PROYECTO COLAS ROJAS, PROVINCIA DE HOLGUÍN",precio:0 },
    { objeto: "sector_industria_ligera: REMODELACIÓN Y MODERNIZACIÓN DEL TALLER DE FUNDICIÓN Y TRATAMIENTO TÉRMICO",precio:0 },
    { objeto: "sector_industria_ligera:PRESTACIÓN DE SERVICIOS DE ENSAMBLAJE, MANTENIMIENTO, REPARACIÓN Y COMERCIALIZACIÓN DE CAMIONES PARA USOS MÚLTIPLES, PESADOS Y SEMIPESADOS PARA LA TRANSPORTACIÓN DE CARGAS EN EL SECTOR AGROPECUARIO, TABACALERO Y FORESTAL",precio:0 },
    { objeto: "sector_agroindustriar_azucarera_derivados:ADMINISTRACIÓN DE CENTRAL CON BIOELÉCTRICA(2 PROYECTOS)",precio:0 },
    { objeto: "sector_agroindustriar_azucarera_derivados:PRODUCCIÓN DE FOS (FRUCTO OLIGO SACÁRIDOS) Y SORBITOL",precio:0 },
    { objeto: "sector_agroindustriar_azucarera_derivados:MODERNIZACIÓN DE FÁBRICA DE CALDERAS",precio:0 },
    { objeto: "sector_agroindustriar_azucarera_derivados: AMPLIACIÓN Y MODERNIZACIÓN DE RONERA",precio:0 }
];
var opcionesNivel7=[
    { objeto: "",precio:0 },
    { objeto: "",precio:0 },
    { objeto: "",precio:0 },
    { objeto: "",precio:0 },
    { objeto: "",precio:0 },
    { objeto: "",precio:0 }
];
var opcionesNivelFinal = [
    { objeto: "Ha llegado al final del recorrido",precio:0 }
];



const boton = document.getElementById('SiguienteAnno');
const botonAnterior=document.getElementById('anteriorAnno');
const textoMostrado = document.getElementById('textoMostrado');
const oportunidad=document.getElementById("oportunidad");




//funciones
boton.addEventListener('click', () => {
    if(annoActual==2020){
        mostrarOpciones();
    }
    else{

        fetch('dictionary.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Mostrar el primer texto en la página
                const respuesta = data[annoActual][1];
                oportunidad.textContent="";
                textoMostrado.textContent = respuesta;
                annoActual++;
                mostrarOpciones();
            })
    }
        
});
botonAnterior.addEventListener("click",()=>{
    if(annoActual==2013){
        mostrarOpciones();
    }else{
        annoActual=annoActual-1;
        oportunidad.textContent="";
        textoMostrado.textContent = "";
        mostrarOpciones();
    }
    
    
    
});

function mostrarResumen(){
    fetch('dictionary.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Mostrar el primer texto en la página
      let respuesta=data[annoActual][1]
      textoMostrado.textContent=respuesta;
      
      
  
    });

   mostrarOpciones()
   
}

function mostrarTexto(objetoNombre){
  
 fetch('dictionary.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Mostrar el primer texto en la página
    let respuesta=data[annoActual][0][objetoNombre]
    let sec=""
    let tamanno=respuesta.length;
   

        for(let i=0;i<tamanno;i++){
            sec+=respuesta[i]+"  ";
            
        }
        oportunidad.textContent=objetoNombre;
        textoMostrado.textContent=sec;
    
    

  });

  mostrarOpciones()
   
}

function mostrarOpciones() {
    cartasElement.innerHTML = "";

    var opcionesElement = document.createElement("div");
    opcionesElement.className = "card";

    var opciones = [];

    if (annoActual === 2013) {
        opciones = opcionesNivel0;
        let inicio="Para iniciar, presione siguiente. A continuación se mostrarán en el selector un conjunto de oportunidades por sectores, extraídas de las Carteras de Oportunidades pertenecientes a los respectivos años. Podrá observar, a medida que pase de un año al siguiente, los resúmenes de la inversión extranjera en cada año y al seleccionar una oportunidad de inversión determinada, se representarán las descripciones y datos de cada una";
        textoMostrado.textContent=inicio;
        
    }else if(annoActual===2014){
        opciones=opcionesNivel1;

    }else if (annoActual === 2015) {
        opciones = opcionesNivel2;
    }else if (annoActual == 2016) {
        opciones = opcionesNivel3;
    }else if(annoActual== 2017){
        opciones = opcionesNivel4;
    
    }else if(annoActual== 2018){
        opciones = opcionesNivel5;
    }else if(annoActual== 2019){
        opciones = opcionesNivel6;
    }else if(annoActual== 2020){
        mostrarResumen();
       
    }

   
    var selectElement = document.createElement("select");
    selectElement.addEventListener("change", function() {
    var selectedOption = opciones.find(function(opcion) {
        return opcion.objeto === this.value;
    }, this);
    if (selectedOption) {
        mostrarTexto(selectedOption.objeto);
    }
    
});

opciones.forEach(function(opcion) {
    var optionElement = document.createElement("option");
    optionElement.value = opcion.objeto;
    optionElement.textContent = opcion.objeto;
    selectElement.appendChild(optionElement);
});

    opcionesElement.appendChild(selectElement);
    cartasElement.appendChild(opcionesElement);

    var yearElement=document.createElement("div");
    yearElement.className="year";
    yearElement.textContent="fecha:" + annoActual;
    cartasElement.appendChild(yearElement);
    



}

mostrarOpciones();