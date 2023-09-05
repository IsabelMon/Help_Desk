console.log("Si funciona usuario ")
const usuariosCargos = {
  "MARIAs OMAIRA ACEVEDO PULGARIN": {
    area: "PRODUCCIÓN",
    cargo: "OPERARIO DE MANUFACTURA",
    placa: "236589",
    tipo: "porttil",
   
  },
  "LUZ VIVIANA AGUDELO MARTINEZ": {
    area: "VENTAS",
    cargo: "EJECUTIVO COMERCIAL",
    placa: "236589",
    tipo: "portatil",
  },
  "ADRIANA TOVAR": {
    cargo: "EJECUTIVO COMERCIAL-BOGOTA",
    area: "Comercial",
    tipo: "Portátil",
    placa: "64566"
  },
  "Ana Maria Jimenez Valencia": {
    cargo: "DIRECTOR TECNICO",
    area: "Direccion Tecnica",
    tipo: "Portatil",
    placa: "93691"
  },
  "Analista de Sistemas TI": {
    cargo: "ANALISTA DE SISTEMAS TI",
    area: "Sistemas",
    tipo: "Servidor Virtual",
    placa: "n/a"
  },
  "Analistas Calidad": {
    cargo: "ANALISTA DE CONTROL CALIDAD",
    area: "Calidad",
    tipo: "Portátil",
    placa: "69905"
  },
  "Alejandra Milena Herrera": {
    cargo: "JEFE DE ABASTECIMIENTO Y COMERCIO EXTERIOR",
    area: "Compras",
    tipo: "Portátil",
    placa: "93378"
  },
  "Ana Graciela": {
    cargo: "EJECUTIVO COMERCIAL-COSTA",
    area: "Comercial",
    tipo: "Portátil",
    placa: "62574"
  },
  "Auxiliares despachos": {
    cargo: "AUXILIAR DESPACHOS",
    area: "Logistica",
    tipo: "Todo en 1",
    placa: "59574"
  },
  "Auxiliares Mantenimiento": {
    cargo: "MECANICO DE MANTENIMIENTO",
    area: "Mantenimiento",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "Carlos Andrés Suarez Ortiz": {
    cargo: "JEFE DE CONTABILIDAD",
    area: "Financiera",
    tipo: "Portátil",
    placa: "92343"
  },
  "Daniel Stiven Zuleta Henao": {
    cargo: "LIDER DE DESPACHOS",
    area: "Logistica",
    tipo: "Portátil",
    placa: "83861"
  },
  "DIANA CAROLINA BETANCUR GALLON": {
    cargo: "DIRECTOR ADMINISTRATIVO Y FINANCIERO",
    area: "Financiera",
    tipo: "Portátil",
    placa: "82457"
  },
  "DIANA CAROLINA BETANCUR GALLON (Sistemas)": {
    cargo: "ANALISTA DE SISTEMAS TI",
    area: "Sistemas",
    tipo: "Portátil",
    placa: ""
  },
  "EDDY SANTIAGO VILLA": {
    cargo: "ANALISTA DE COMPRAS",
    area: "Compras",
    tipo: "Portátil",
    placa: "63787"
  },
  "Estefania Orozco Mosquera": {
    cargo: "ANALISTA DE CONTABILIDAD",
    area: "Financiera",
    tipo: "Portátil",
    placa: "92255"
  },
  "Gloria Amparo Sierra": {
    cargo: "EJECUTIVO COMERCIAL-SANTANDER",
    area: "Comercial",
    tipo: "Portátil",
    placa: "63793"
  },
  "GONZALO CASTRO FLOREZ": {
    cargo: "EJECUTIVO COMERCIAL-BOGOTA",
    area: "Comercial",
    tipo: "Portátil",
    placa: "66259"
  },
  "HELIANA SANDOVAL": {
    cargo: "EJECUTIVO COMERCIAL-NARIÑO",
    area: "Comercial",
    tipo: "Portátil",
    placa: "63762"
  },
  "Huego Correa": {
    cargo: "ANALISTA DE SISTEMAS TI",
    area: "Sistemas",
    tipo: "Portátil",
    placa: "5CG3126NT8"
  },
  "JENNYFER ALEEXANDRA QUINTANA": {
    cargo: "EJECUTIVO COMERCIAL-MEDELLIN",
    area: "Comercial",
    tipo: "Portátil",
    placa: "64298"
  },
  "Jessica Diosa": {
    cargo: "PRACTICANTE GESTION HUMANA",
    area: "Gestión Humana",
    tipo: "Portátil",
    placa: "87638"
  },
  "Jessica lopez cardona": {
    cargo: "ANALISTA DE TESORERIA Y CARTERA",
    area: "Financiera",
    tipo: "Portátil",
    placa: "90184"
  },
  "JHON ALEXADER CARVAJAL": {
    cargo: "ANALISTA DE OPERACIONES",
    area: "Compras",
    tipo: "Portátil",
    placa: "74685"
  },
  "Johana Gallego Rua": {
    cargo: "COORDINADOR DE PRODUCCION",
    area: "Manufactura",
    tipo: "Portátil",
    placa: "92315"
  },
  "John Freddy Elguedo Martinez": {
    cargo: "EJECUTIVO COMERCIAL-COSTA",
    area: "Comercial",
    tipo: "Portátil",
    placa: "88255"
  },
  "JORGE IVAN ZULETA ACEVEDO": {
    cargo: "ANALISTA DE INVESTIGACIÓN Y DESARROLLO",
    area: "Calidad",
    tipo: "Portátil",
    placa: "64274"
  },
  "jose luis": {
    cargo: "JEFE GESTION HUMANA",
    area: "Gestión Humana",
    tipo: "Portátil",
    placa: "81311"
  },
  "Juan David Cárdenas": {
    cargo: "JEFE DE MANUFACTURA",
    area: "Manufactura",
    tipo: "Portátil",
    placa: "90173"
  },
  "juan diego": {
    cargo: "ANALISTA DE CONTABILIDAD",
    area: "Financiera",
    tipo: "Portátil",
    placa: "5CG312406"
  },
  "Juan Sebastian": {
    cargo: "PRACTICANTE SISTEMAS",
    area: "Sistemas",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "Julio Cesar": {
    cargo: "JEFE DE MANTENIMIENTO Y PROYECTOS",
    area: "Mantenimiento",
    tipo: "Portátil",
    placa: "90199"
  },
  "Leonardo Zapata": {
    cargo: "LIDER DE DOSIFICACION Y MEZCLAS",
    area: "Manufactura",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "Lider Manufactura": {
    cargo: "LIDER DE MANUFACTURA",
    area: "Manufactura",
    tipo: "Todo en 1",
    placa: "59147"
  },
  "LOPEZ MARIN SANDRA MILENA": {
    cargo: "ANALISTA DE GESTION HUMANA",
    area: "Gestión Humana",
    tipo: "Portátil",
    placa: "n/a"
  },
  "Luz mary perez": {
    cargo: "EJECUTIVO COMERCIAL-MEDELLIN",
    area: "Comercial",
    tipo: "Portátil",
    placa: "80054"
  },
  "LUZ MERY GOMEZ": {
    cargo: "AUXILIAR DE SERVICIO AL CLIENTE",
    area: "Servicio al Cliente",
    tipo: "Portátil",
    placa: "93321"
  },
  "LUZ ORALIA": {
    cargo: "COORDINADOR DE SST",
    area: "SST",
    tipo: "Portátil",
    placa: "n/a"
  }, 
  "LUZ VIVIANA AGUDELO": {
    cargo: "EJECUTIVO COMERCIAL-EJE CAFETERO",
    area: "Comercial",
    tipo: "Portátil",
    placa: "68160"
  },
  "Manuela Patiño Ospina": {
    cargo: "ANALISTA DE SISTEMAS DE GESTION",
    area: "Direccion Tecnica",
    tipo: "Portátil",
    placa: "93319"
  },
  "Marcela Restrepo Florez": {
    cargo: "ANALISTA DE CONTROL INTERNO",
    area: "Financiera",
    tipo: "Portátil",
    placa: "83116"
  },
  "MARIANA VENTAS": {
    cargo: "ANALISTA DE MERCADEO Y COMERCIAL",
    area: "Mercadeo",
    tipo: "Portátil",
    placa: "73145"
  },
  "MAURICIO ARANGO": {
    cargo: "GERENTE GENERAL",
    area: "Gerencia General",
    tipo: "Portátil",
    placa: "72391"
  },
  "Melissa Betancur Ospina": {
    cargo: "JEFE DE VENTAS",
    area: "Mercadeo",
    tipo: "Portátil",
    placa: "90172"
  },
  "Operario Empaque": {
    cargo: "OPERARIO EMPAQUE",
    area: "Manufactura",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "Operario Inspeccion": {
    cargo: "OPERARIO INSPECCION",
    area: "Manufactura",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "Operario Satinado": {
    cargo: "OPERARIO SATINADO",
    area: "Manufactura",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "Operario Secado": {
    cargo: "OPERARIO SECADO",
    area: "Manufactura",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "Osvaldo Montoya": {
    cargo: "ANALISTA DE SISTEMAS TI",
    area: "Sistemas",
    tipo: "Servidor Fisico",
    placa: "n/a"
  },
  "Porteria": {
    cargo: "PORTERIA",
    area: "Financiera",
    tipo: "Todo en 1",
    placa: "n/a"
  },
  "Practicante SST": {
    cargo: "PRACTICANTE SST",
    area: "SST",
    tipo: "Todo en 1",
    placa: "59151"
  },
  "Practicante Logistica": {
    cargo: "PRACTICANTE LOGISTICA",
    area: "Logistica",
    tipo: "Portatil",
    placa: "86164"
  },
  "Presentaciones GH": {
    cargo: "PRESENTACIONES GESTION HUMANA",
    area: "Gestión Humana",
    tipo: "Portatil",
    placa: "n/a"
  },
  "ROSA MARIA SANCHEZ": {
    cargo: "COORDINADOR DE LOGISTICA",
    area: "Logistica",
    tipo: "Portatil",
    placa: "90179"
  },
  "Sergio Estiven Castrillon Betancur": {
    cargo: "LIDER DE ALMACEN DE MATERIAS PRIMAS Y SUMINISTROS",
    area: "Almacen",
    tipo: "Portatil",
    placa: "79243"
  },
  "SINDY JOHANA GALLEGO DAVILA": {
    cargo: "ANALISTA DE GESTION AMBIENTAL",
    area: "Ambiental",
    tipo: "Portatil",
    placa: "90201"
  }, 
  "Practicante SST": {
    cargo: "PRACTICANTE SST",
    area: "SST",
    tipo: "Todo en 1",
    placa: "59151"
  },
  "Practicante Logistica": {
    cargo: "PRACTICANTE LOGISTICA",
    area: "Logistica",
    tipo: "Portatil",
    placa: "86164"
  },
  "Presentaciones GH": {
    cargo: "PRESENTACIONES GESTION HUMANA",
    area: "Gestión Humana",
    tipo: "Portatil",
    placa: "n/a"
  },
  "ROSA MARIA SANCHEZ": {
    cargo: "COORDINADOR DE LOGISTICA",
    area: "Logistica",
    tipo: "Portatil",
    placa: "90179"
  },
  "Sergio Estiven Castrillon Betancur": {
    cargo: "LIDER DE ALMACEN DE MATERIAS PRIMAS Y SUMINISTROS",
    area: "Almacen",
    tipo: "Portatil",
    placa: "79243"
  },
  "SINDY JOHANA GALLEGO DAVILA": {
    cargo: "ANALISTA DE GESTION AMBIENTAL",
    area: "Ambiental",
    tipo: "Portatil",
    placa: "90201"
  },
  "sistemas": {
    cargo: "ANALISTA DE SISTEMAS TI",
    area: "Sistemas",
    tipo: "Portatil",
    placa: "n/a"
  },
  "STIVEN CARMONA CARDONA": {
    cargo: "JEFE DE CALIDAD",
    area: "Calidad",
    tipo: "Portatil",
    placa: "86743"
  },
  "VANESA SILVA": {
    cargo: "EJECUTIVO COMERCIAL-MEDELLIN",
    area: "Comercial",
    tipo: "Portatil",
    placa: "93501"
  },
  "YASMIN RAMIREZ GOMEZ": {
    cargo: "AUXILIAR DE SERVICIO AL CLIENTE",
    area: "Servicio al Cliente",
    tipo: "Portatil",
    placa: "90200"
  },
  "Yazmin Jiménez Santana": {
    cargo: "JEFE DE LOGISTICA",
    area: "Logistica",
    tipo: "Portatil",
    placa: "5CG3126NSS"
  },
  "Yuledis Ospino": {
    cargo: "EJECUTIVO COMERCIAL-COSTA",
    area: "Comercial",
    tipo: "Portatil",
    placa: "93519"
  }
 
};







