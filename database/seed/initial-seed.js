db.devices.drop()

db.devices.insertMany([
  {
    _id: '63ae99389c14022cd5f08c54',
    name: 'Lâmpada LED',
    type: 'Energia',
    madeBy: 'Intelbras',
    photoUrl:
      'https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000',
    info: {
      virtual_id: 'abcd1234',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-70dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c55',
    name: 'Interruptor conector inteligente',
    type: 'Energia',
    madeBy: 'Intelbras',
    photoUrl:
      'https://intelbras.vteximg.com.br/arquivos/ids/161376-1000-1000/ews_301_front_cima.jpg?v=637581675693070000',
    info: {
      virtual_id: 'abcd4321',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c56',
    name: 'Interruptor inteligente soquete',
    type: 'Energia',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/160121-800-800/ews_400_front2.jpg?v=637564240561700000',
    info: {
      virtual_id: 'dbcd4321',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-80dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c57',
    name: 'Interruptor sensor de presença para iluminação',
    type: 'Energia',
    madeBy: 'Intelbras',
    photoUrl:
      'https://intelbras.vteximg.com.br/arquivos/ids/159717-800-800/ESPi_360_A_perp_dir.jpg?v=637517709432830000',
    info: {
      virtual_id: 'decd4321',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '80dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c58',
    name: 'Interruptor sensor de presença para iluminação',
    type: 'Energia',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/163065-800-800/ews_440_font_led.png?v=637751968744600000',
    info: {
      virtual_id: 'sdcd4321',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '90dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c59',
    name: 'Interruptor smart Wi-Fi ',
    type: 'Energia',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/162215-1000-1000/ews_1003-front.png?v=637684466424530000',
    info: {
      virtual_id: 'adcd4321',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-90dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c5a',
    name: 'Câmera de vídeo iM4 C',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/163947-800-800/IM4-1---Frontal.png?v=637813074366430000',
    info: {
      virtual_id: 'fdcd9321',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c5b',
    name: 'Câmera de vídeo iME 360',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/164566-800-800/1.png?v=637853604992630000',
    info: {
      virtual_id: 'fdcd9320',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c5c',
    name: 'Hub de automação',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/165090-800-800/ICA_1001_pers_esq.png?v=637910746484730000',
    info: {
      virtual_id: 'fdcd9820',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c5d',
    name: 'Câmera veicular',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/158349-800-800/1.jpg?v=637303405971300000',
    info: {
      virtual_id: 'fdcd9824',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c5e',
    name: 'Sensor de abertura',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/159601-800-800/ISA_1001_frontal.jpg?v=637505529536100000',
    info: {
      virtual_id: 'hdcd9824',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c5f',
    name: 'Detector de fumaça',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/159734-800-800/IDF_620_front--1-.jpg?v=637520418382600000',
    info: {
      virtual_id: 'ldcd9829',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c60',
    name: 'Sensor de temperatura e umidade',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/162435-800-800/IST_1001_FRONTAL.png?v=637698242217100000',
    info: {
      virtual_id: 'ydcd9829',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c61',
    name: 'Bloco de iluminação autônomo',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl:
      'https://intelbras.vteximg.com.br/arquivos/ids/164837-800-800/BLA_400_0005_BLA_400_front.jpg?v=637878872227870000',
    info: {
      virtual_id: 'yicd9829',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c62',
    name: 'Sirene smart ISI',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl:
      'https://intelbras.vteximg.com.br/arquivos/ids/165630-800-800/isiO_1001O_persp-frontal.png?v=637956428532530000',
    info: {
      virtual_id: '3icd9829',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c63',
    name: 'Sensor de Movimento smart',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/159586-800-800/ISM_1001_frontal.jpg?v=637505496755900000',
    info: {
      virtual_id: '3icr9829',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c64',
    name: 'Luminária de emergência autônoma',
    type: 'Segurança eletrônica',
    madeBy: 'Intelbras',
    photoUrl:
      'https://intelbras.vteximg.com.br/arquivos/ids/155945-800-800/4630031_-_luminaria_de_emergencia_autonoma_lea_30_296698.png?v=637063310645530000',
    info: {
      virtual_id: '5icr9829',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c65',
    name: 'Smart box Android TV',
    type: 'Comunicação',
    madeBy: 'Intelbras',
    photoUrl:
      'https://intelbras.vteximg.com.br/arquivos/ids/157727-800-800/izyplay_smartbox_controle_01.jpg?v=637189367321200000',
    info: {
      virtual_id: 'ticr9829',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c66',
    name: 'Smart controle universal infravermelho',
    type: 'Comunicação',
    madeBy: 'Intelbras',
    photoUrl: 'https://intelbras.vteximg.com.br/arquivos/ids/158406-800-800/persp-esquerda.jpg?v=637309549919770000',
    info: {
      virtual_id: 'ticr9829',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
  {
    _id: '63ae99389c14022cd5f08c67',
    name: 'Alto falante inteligente',
    type: 'Comunicação',
    madeBy: 'Intelbras',
    photoUrl:
      'https://intelbras.vteximg.com.br/arquivos/ids/162922-800-800/MicrosoftTeams-image--1-.png?v=637739853891570000',
    info: {
      virtual_id: 'ypcr9829',
      ip_address: '127.0.0.1',
      mac_address: '127.0.0.1',
      signal: '-40dBm',
    },
  },
])

db.locals.drop()

db.locals.insertMany([
  {
    _id: '631b34696f2d2f24a7c0c960',
    description: 'Casa',
  },
  {
    _id: '631b34796f2d2f24a7c0c961',
    description: 'Escritório',
  },
  {
    _id: '631b348a6f2d2f24a7c0c962',
    description: 'Fábrica',
  },
])

db.users.drop()

db.users.insertOne({
  _id: '63b839abda7bf8c6bc7a236b',
  fullName: 'Admin',
  photoUrl: 'https://via.placeholder.com/150',
  email: 'admin@teste.com',
  password: '$2b$10$6/6gha8/yWactSDq9FasTuPUv149JIx09J5Qf.i7SJTZFBjFnEAsO',
  phone: '(99) 99999-9999',
  userAddress: {
    zipCode: '00000-000',
    street: 'Rua Teste',
    number: '1',
    neighborhood: 'Bairro Teste',
    city: 'São Paulo',
    state: 'São Paulo',
    complement: 'Comp. Teste',
  },
})
