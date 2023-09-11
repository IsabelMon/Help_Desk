console.log("Si funciona usuario ")
const usuariosCargos = {
  "ADRIANA  GUTIERREZ TOVAR": {
    area: "GERENCIA COMERCIAL",
    cargo: "EJECUTIVO COMERCIAL-BOGOTA",
    placa: "236589",
    tipo: "porttil",
   
  },
  "ALEJANDRA MILENA HERRERA ACEVEDO": {
    area: "COMPRAS",
    cargo: "JEFE DE ABASTECIMIENTO Y COMERCIO EXTERIOR",
    placa: "236589",
    tipo: "portatil",
  },
  "ALEX  JIMENEZ HENAO": {
    cargo: "ANALISTA DE CONTROL CALIDAD",
    area: "CONTROL CALIDAD - LABORATORIO",
    tipo: "Portátil",
    placa: "64566"
  },
  "ALEXANDER  CARVAJAL JOHN": {
    cargo: "ANALISTA DE OPERACIONES",
    area: "COMPRAS",
    tipo: "Portatil",
    placa: "93691"
  },
  "AMPARO  SIERRA GLORIA": {
    cargo: "EJECUTIVO COMERCIAL-SANTANDER",
    area: "GERENCIA COMERCIAL",
    tipo: "Servidor Virtual",
    placa: "n/a"
  },
  "ANA ISABEL MONTES ARROYAVE": {
    cargo: "APRENDIZ ETAPA PRODUCTIVA TECNICO O TECNOLOGO",
    area: "SISTEMAS",
    tipo: "Portátil",
    placa: "69905"
  },
  "ANA MARIA GOMEZ OBREGON": {
    cargo: "EJECUTIVO COMERCIAL-MEDELLÍN",
    area: "GERENCIA COMERCIAL",
    tipo: "Portátil",
    placa: "93378"
  },
  "ANA MARIA JIMENEZ VALENCIA": {
    cargo: "DIRECTORA TECNICA",
    area: "DISPOSITIVOS MEDICOS",
    tipo: "Portátil",
    placa: "62574"
  },
  "AURA ORFILA CEPEDA VILLA": {
    cargo: "EJECUTIVO COMERCIAL-COSTA",
    area: "GERENCIA COMERCIAL",
    tipo: "Todo en 1",
    placa: "59574"
  },
  "CARLOS ANDRES SANCHEZ SANCHEZ": {
    cargo: "AUXILIAR DE DESPACHOS",
    area: "LOGISTICA Y DISTRIBUCION",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "CARLOS ANDRES SUAREZ ORTIZ": {
    cargo: "JEFE DE CONTABILIDAD",
    area: "FINANCIERA",
    tipo: "Portátil",
    placa: "92343"
  },
  "DANIEL STIVEN ZULETA HENAO": {
    cargo: "LIDER DE DESPACHOS",
    area: "LOGISTICA Y DISTRIBUCION",
    tipo: "Portátil",
    placa: "83861"
  },
  "DANIELA  OROZCO OCAMPO": {
    cargo: "APRENDIZ ETAPA PRODUCTIVA TECNICO O TECNOLOGO",
    area: "SALUD OCUPACIONAL",
    tipo: "Portátil",
    placa: "82457"
  },
  "DIANA CAROLINA BETANCUR GALLON": {
    cargo: "DIRECTOR ADMINISTRATIVO Y FINANCIERO",
    area: "FINANCIERA",
    tipo: "Portátil",
    placa: ""
  },
  "EDDY SANTIAGO ALZATE VILLA": {
    cargo: "ANALISTA DE COMPRAS",
    area: "COMPRAS",
    tipo: "Portátil",
    placa: "63787"
  },
  "ESTEFANIA  OROZCO MOSQUERA": {
    cargo: "ANALISTA DE CONTABILIDAD",
    area: "FINANCIERA",
    tipo: "Portátil",
    placa: "92255"
  },
  "GONZALO  FLOREZ CASTRO": {
    cargo: "EJECUTIVO COMERCIAL-BOGOTA",
    area: "GERENCIA COMERCIAL",
    tipo: "Portátil",
    placa: "63793"
  },
  "HUGO ARMANDO CORREA MERCADO": {
    cargo: "ANALISTA DE SISTEMAS TI",
    area: "SISTEMAS",
    tipo: "Portátil",
    placa: "66259"
  },
  "HELIANA DEL SANDOVAL GORDO": {
    cargo: "EJECUTIVO COMERCIAL-NARIÑO",
    area: "GERENCIA COMERCIAL",
    tipo: "Portátil",
    placa: "63762"
  },
  "ISABELA  GONZALEZ LAYOS": {
    cargo: "ANALISTA DE CONTROL CALIDAD",
    area: "CONTROL CALIDAD - LABORATORIO",
    tipo: "Portátil",
    placa: "5CG3126NT8"
  },
  "JESICA ALEJANDRA DIOSA RUEDA": {
    cargo: "APRENDIZ ETAPA PRODUCTIVA PROFESIONAL",
    area: "GESTION HUMANA",
    tipo: "Portátil",
    placa: "64298"
  },
  "JESSICA LORENA LOPEZ CARDONA": {
    cargo: "ANALISTA DE TESORERIA Y CARTERA",
    area: "FINANCIERA",
    tipo: "Portátil",
    placa: "87638"
  },
  "JOHANNA  GALLEGO RUA": {
    cargo: "COORDINADOR DE PRODUCCIÓN",
    area: "DOSIFICACION",
    tipo: "Portátil",
    placa: "90184"
  },
  "JOHN FREDDY ELGUEDO MARTINEZ": {
    cargo: "AEJECUTIVO COMERCIAL-COSTA",
    area: "GERENCIA COMERCIAL",
    tipo: "Portátil",
    placa: "74685"
  },
  "JORGE IVAN ZULETA ACEVEDO": {
    cargo: "ANALISTA DE INVESTIGACIÓN Y DESARROLLO",
    area: "CONTROL CALIDAD - LABORATORIO",
    tipo: "Portátil",
    placa: "92315"
  },
  "JOSE LUIS OSSA CARDONA": {
    cargo: "JEFE GESTION HUMANA",
    area: "GESTION HUMANA",
    tipo: "Portátil",
    placa: "88255"
  },
  "JUAN ANDRES LUNA HERNANDEZ": {
    cargo: "AUXILIAR DE DESPACHOS",
    area: "LOGISTICA Y DISTRIBUCION",
    tipo: "Portátil",
    placa: "64274"
  },
  "JUAN CAMILO YEPES CARDONA": {
    cargo: "AUXILIAR DE DESPACHOS",
    area: "LOGISTICA Y DISTRIBUCION",
    tipo: "Portátil",
    placa: "81311"
  },
  "JUAN DAVID CARDENAS FLOREZ": {
    cargo: "JEFE DE MANUFACTURA",
    area: "ADMINISTRACION DE LA PRODUCCION",
    tipo: "Portátil",
    placa: "90173"
  },
  "JUAN DIEGO VARGAS ZULETA": {
    cargo: "ANALISTA DE CONTABILIDAD",
    area: "FINANCIERA",
    tipo: "Portátil",
    placa: "5CG312406"
  },
  "JULIANA  GOMEZ GOMEZ": {
    cargo: "APRENDIZ ETAPA LECTIVA TECNICO O TECNOLOGO",
    area: "GESTION HUMANA",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "LEONARDO DE ZAPATA ORTIZ": {
    cargo: "LIDER DE DOSIFICACION Y MEZCLAS",
    area: "DOSIFICACION",
    tipo: "Portátil",
    placa: "90199"
  },
  "LUZ ANGELA CARDONA CASTRILLON": {
    cargo: "ANALISTA DE CONTROL CALIDAD",
    area: "CONTROL CALIDAD - LABORATORIO",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "LUZ JIMENA RIVERA LOPEZ": {
    cargo: "LIDER DE MANUFACTURA",
    area: "LINEA B GUANTES",
    tipo: "Todo en 1",
    placa: "59147"
  },
  "LUZ MARY PEREZ CATAÑO": {
    cargo: "EJECUTIVO COMERCIAL-MEDELLÍN",
    area: "GERENCIA COMERCIAL",
    tipo: "Portátil",
    placa: "n/a"
  },
  "LUZ MERY GOMEZ VILLEGAS": {
    cargo: "AUXILIAR DE SERVICIO AL CLIENTE",
    area: "SERVICIO AL CLIENTE",
    tipo: "Portátil",
    placa: "80054"
  },
  "LUZ ORALIA GAVIRIA SOTO": {
    cargo: "COORDINADOR DE SST",
    area: "SALUD OCUPACIONAL",
    tipo: "Portátil",
    placa: "93321"
  },
  "LUZ VIVIANA AGUDELO MARTINEZ": {
    cargo: "EJECUTIVO COMERCIAL-EJE CAFETERO",
    area: "GERENCIA COMERCIAL",
    tipo: "Portátil",
    placa: "n/a"
  }, 
  "MANUELA  PATIÑO OSPINA": {
    cargo: "ANALISTA DE SISTEMAS DE GESTION",
    area: "DISPOSITIVOS MEDICOS",
    tipo: "Portátil",
    placa: "68160"
  },
  "MARCELA  RESTREPO FLOREZ": {
    cargo: "ANALISTA DE CONTROL INTERNO",
    area: "FINANCIERA",
    tipo: "Portátil",
    placa: "93319"
  },
  "MARIANA  RAMIREZ LONDOÑO": {
    cargo: "ANALISTA DE MERCADEO Y COMERCIAL",
    area: "MERCADEO",
    tipo: "Portátil",
    placa: "83116"
  },
  "MAURICIO  AGUIRRE GIRALDO": {
    cargo: "LIDER DE MANUFACTURA",
    area: "LINEA B GUANTES",
    tipo: "Portátil",
    placa: "73145"
  },
  "MAURICIO  ARANGO PUERTA": {
    cargo: "GERENTE GENERAL",
    area: "GERENCIA GENERAL",
    tipo: "Portátil",
    placa: "72391"
  },
  "MAURICIO  JARAMILLO SERNA": {
    cargo: "LIDER DE MANUFACTURA",
    area: "LINEA B GUANTES",
    tipo: "Portátil",
    placa: "90172"
  },
  "MELISSA  BETANCUR OSPINA": {
    cargo: "JEFE DE VENTAS Y MERCADEO",
    area: "GERENCIA COMERCIAL",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "ROBINSON DUVAN ECHEVERRI OCHOA": {
    cargo: "APRENDIZ ETAPA PRODUCTIVA TECNICO O TECNOLOGO",
    area: "LOGISTICA Y DISTRIBUCION",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "ROSA MARIA SANCHEZ YEPES": {
    cargo: "COORDINADOR DE LOGISTICA",
    area: "LOGISTICA Y DISTRIBUCION",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "SANDRA MILENA LOPEZ MARIN": {
    cargo: "ANALISTA DE GESTION HUMANA",
    area: "GESTION HUMANA",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "SERGIO ALFONSO GALLO MONSALVE": {
    cargo: "AUXILIAR DE DESPACHOS",
    area: "LOGISTICA Y DISTRIBUCION",
    tipo: "Servidor Fisico",
    placa: "n/a"
  },
  "SERGIO ESTIVEN CASTRILLON BETANCUR": {
    cargo: "LIDER DE ALMACEN DE MATERIAS PRIMAS Y SUMINISTROS",
    area: "ALMACEN MATERIAS PRIMAS",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "SINDY JOHANA GALLEGO DAVILA": {
    cargo: "ANALISTA DE GESTION AMBIENTAL",
    area: "GESTION AMBIENTAL",
    tipo: "Todo en 1",
    placa: "59151"
  },
  "SINDY VANESSA SILVA ATEHORTUA": {
    cargo: "EJECUTIVO COMERCIAL-MEDELLÍN",
    area: "GERENCIA COMERCIAL",
    tipo: "Portatil",
    placa: "86164"
  },
  "STIVEN  CARMONA CARDONA": {
    cargo: "JEFE DE CALIDAD",
    area: "CONTROL CALIDAD - LABORATORIO",
    tipo: "Portatil",
    placa: "n/a"
  },
  "VALENTINA  MERCADO FLOREZ": {
    cargo: "APRENDIZ ETAPA LECTIVA TECNICO O TECNOLOGO",
    area: "CONTROL CALIDAD - LABORATORIO",
    tipo: "Portatil",
    placa: "90179"
  },
  "YASMIN  RAMIREZ GOMEZ": {
    cargo: "AUXILIAR DE SERVICIO AL CLIENTE",
    area: "SERVICIO AL CLIENTE",
    tipo: "Portatil",
    placa: "79243"
  },
  "YAZMIN  JIMENEZ SANTANA": {
    cargo: "JEFE DE LOGISTICA",
    area: "LOGISTICA Y DISTRIBUCION",
    tipo: "Portatil",
    placa: "90201"
  }, 
  "YEFERSON ANTONIO LAGUNA VELASQUEZ": {
    cargo: "APRENDIZ ETAPA LECTIVA TECNICO O TECNOLOGO",
    area: "MANTENIMIENTO",
    tipo: "Todo en 1",
    placa: "59151"
  },
  "YULEDIS PATRICIA OSPINO MONTESINO": {
    cargo: "EJECUTIVO COMERCIAL-COSTA",
    area: "GERENCIA COMERCIAL",
    tipo: "Portatil",
    placa: "86164"
  },
  "PORTEROS ": {
    cargo: "PORTERIA",
    area: "SEGURIDAD",
    tipo: "Portatil",
    placa: "n/a"
  }
 
};







