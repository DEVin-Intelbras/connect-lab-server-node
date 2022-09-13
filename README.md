# ConnectLab

API Node usando [express](https://expressjs.com/pt-br/)
Para utilizar o mongo pode ser criado utilizando o [MongoDB](https://www.mongodb.com/)

A API está disponível para teste em [ConnectLab](https://connectlab.onrender.com/)

## Primeiros passos

Para instalar as dependencias é preciso executar o comando **npm**:

```
$ npm install
```

## Comandos

No diretório do projeto, você pode executar:

### **dev**

Executa o aplicativo no modo de desenvolvimento. Que ficará exposto em: http://localhost:3030

```
$ npm run dev
```

## Configurações

Para rodar o projeto é preciso criar o arquivo .env na raiz do projeto, adicionar a uri de conexão do mongo e a porta que será executado, além da secret que servirá para gerar os tokens de autenticação.

```
DB_URI_CONNECTION = "mongodb+srv://<user>:<password>@<uri>/<collection>?retryWrites=true&w=majority"
PORT = 3030
SECRET = mykey
```

## Endpoints disponiveis

### Criar um usuário:

```
POST: http://localhost:3030/auth/register
Headers: {
	"Content-Type": "application/json"
}

Body: {
    "email": "usuario@teste.com.br",
    "password": "12345678",
    "fullName": "Usuaário",
    "photoUrl": "",
    "phone": "(47) 99999-9999",
    "userAddress": {
        "zipCode": "85500-000",
        "street": "Rua teste",
        "number": "4",
        "neighborhood": "Bairro XYZ",
        "city": "Joinville",
        "state": "Santa Catarina",
        "complement": "Ap 204"
    }
}
```

**Resultado:**

```
{
	"email": "usuario@teste.com.br",
    "password": "",
    "fullName": "Usuaário",
    "photoUrl": "",
    "phone": "(47) 99999-9999",
    "userAddress": {
        "zipCode": "85500-000",
        "street": "Rua teste",
        "number": "4",
        "neighborhood": "Bairro XYZ",
        "city": "Joinville",
        "state": "Santa Catarina",
        "complement": "Ap 204"
    },
    "_id": "631bab7e9b0a010a5b522ed0",
	"__v": 0
}
```

### Efetuar Login:

```
POST: http://localhost:3030/auth/login
Headers: {
	"Content-Type": "application/json"
}

Body: {
	"email": "usuario2@teste.com.br",
	"password": "12345678"
}
```

**Resultado:**

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzdWFyaW8yQHRlc3RlLmNvbS5iciIsImZ1bGxOYW1lIjoiVGVzdGUgMiIsIl9pZCI6IjYzMWI4YzkyZTBjYWU0NDQ5OWRlMmEzNiIsImlhdCI6MTY2Mjc1ODEyOX0.t0K6YSoPbdqJRDK0XNu18DA9DrW_kvkZGxxqTZgskCw",
	"user": {
		"_id": "63207057ab17804bf42fb1a5",
		"fullName": "Teste",
		"photoUrl": "",
		"email": "teste@teste.com.br",
		"password": "",
		"phone": "(47) 99999-9999",
		"userAddress": {
		"zipCode": "00000-000",
		"street": "Rua Testando",
		"number": "123",
		"neighborhood": "Bairro XYZ",
		"city": "Florianópolis",
		"state": "Santa Catarina",
		"complement": "Ap 5",
		"_id": "63207058ab17804bf42fb1a6"
		},
		"__v": 0
	}
}
```

### Buscar um usuário:

```
GET: http://localhost:3030/users/:id
Headers: {
	"Authorization": "Bearer token"
}
```

**Resultado:**

```
{
	"_id": "631b6e3e61ef65fb3859152f",
	"fullName": "Usuário 63",
	"photoUrl": "https://github.com/mikansc.png",
	"email": "usuario@teste.com.br",
	"password": "",
	"phone": "(49) 99999-9999",
	"userAddress": {
		"zipCode": "85500-000",
		"street": "Rua teste",
		"number": "4",
		"neighborhood": "Bairro centro",
		"city": "Joinville",
		"state": "Santa Catarina",
		"complement": "Ap 204",
		"_id": "631bab919b0a010a5b522eda"
	},
	"__v": 0
}
```

### Atualizar um usuário:

```
POST: http://localhost:3030/users/:id
Headers: {
	"Authorization": "Bearer token"
	"Content-Type": "application/json"
}

Body: {
    "email": "usuario@teste.com.br",
    "password": "",
    "fullName": "Usuaário",
    "photoUrl": "",
    "phone": "(47) 99999-9999",
    "userAddress": {
        "zipCode": "85500-000",
        "street": "Rua teste",
        "number": "4",
        "neighborhood": "Bairro XYZ",
        "city": "Joinville",
        "state": "Santa Catarina",
        "complement": "Ap 204"
    }
}
```

**Resultado:**

```
{
	"email": "usuario@teste.com.br",
    "password": "",
    "fullName": "Usuaário",
    "photoUrl": "",
    "phone": "(47) 99999-9999",
    "userAddress": {
        "zipCode": "85500-000",
        "street": "Rua teste",
        "number": "4",
        "neighborhood": "Bairro XYZ",
        "city": "Joinville",
        "state": "Santa Catarina",
        "complement": "Ap 204"
    },
    "_id": "631bab7e9b0a010a5b522ed0",
	"__v": 0
}
```

### Buscar lista de dispositivos:

```
GET: http://localhost:3030/devices
Headers: {
	"Authorization": "Bearer token"
}
```

**Resultado:**

```
[
	{
		"info": {
			"virtual_id": "abcd1234",
			"ip_address": "127.0.0.1",
			"mac_address": "127.0.0.1",
			"signal": "-70dBm"
		},
		"_id": "631b2f046f2d2f24a7c0c948",
		"name": "Lâmpada LED",
		"type": "Energia",
		"madeBy": "Intelbras",
		"photoUrl": "https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"
	}
]
```

### Buscar lista de locais:

```
GET: http://localhost:3030/locals
Headers: {
	"Authorization": "Bearer token"
}
```

**Resultado:**

```
[
	{
		"_id": "631b34696f2d2f24a7c0c960",
		"description": "Casa"
	},
	{
		"_id": "631b34796f2d2f24a7c0c961",
		"description": "Escritório"
	},
	{
		"_id": "631b348a6f2d2f24a7c0c962",
		"description": "Fábrica"
	}
]
```

### Adicionar dispositivo ao usuário:

```
POST: http://localhost:3030/userDevices
Headers: {
	"Authorization": "Bearer token"
	"Content-Type": "application/json"
}

Body:  {
      "user": "631b6e3e61ef65fb3859152f",
      "device": "631b306d6f2d2f24a7c0c94d",
      "is_on": true,
      "local": "631b34696f2d2f24a7c0c960",
      "room": "Quarto"
    }
```

**Resultado:**

```
{
	"user": "631b6e3e61ef65fb3859152f",
	"device": "631b306d6f2d2f24a7c0c94d",
	"local": "631b34696f2d2f24a7c0c960",
	"is_on": true,
	"room": "Quarto",
	"_id": "631b79023b3b2e5e66c658b7",
	"__v": 0
}
```

### Buscar dispositivos vinculados ao usuário:

```
GET: http://localhost:3030/userDevices/user/:id
Headers: {
	"Authorization": "Bearer token"
}
```

**Resultado:**

```
[
	{
		"_id": "631b76215516db091259eaae",
		"user": "631b6e3e61ef65fb3859152f",
		"device": {
			"info": {
				"virtual_id": "abcd4321",
				"ip_address": "127.0.0.1",
				"mac_address": "127.0.0.1",
				"signal": "-40dBm"
			},
			"_id": "631b2f6b6f2d2f24a7c0c949",
			"name": "Interruptor conector inteligente",
			"type": "Energia",
			"madeBy": "Intelbras",
			"photoUrl": "https://intelbras.vteximg.com.br/arquivos/ids/161376-1000-1000/ews_301_front_cima.jpg?v=637581675693070000"
		},
		"local": {
			"_id": "631b34696f2d2f24a7c0c960",
			"description": "Casa"
		},
		"is_on": false,
		"room": "Quarto",
		"__v": 0
	}
]
```

### Buscar dispositivo do usuário:

```
GET: http://localhost:3030/userDevices/:id
Headers: {
	"Authorization": "Bearer token"
}
```

**Resultado:**

```
{
	"_id": "631b76215516db091259eaae",
	"user": "631b6e3e61ef65fb3859152f",
	"device": {
		"info": {
			"virtual_id": "abcd4321",
			"ip_address": "127.0.0.1",
			"mac_address": "127.0.0.1",
			"signal": "-40dBm"
		},
		"_id": "631b2f6b6f2d2f24a7c0c949",
		"name": "Interruptor conector inteligente",
		"type": "Energia",
		"madeBy": "Intelbras",
		"photoUrl": "https://intelbras.vteximg.com.br/arquivos/ids/161376-1000-1000/ews_301_front_cima.jpg?v=637581675693070000"
	},
	"local": {
		"_id": "631b34696f2d2f24a7c0c960",
		"description": "Casa"
	},
	"is_on": false,
	"room": "Quarto",
	"__v": 0
}
```

### Atualizar status do dispositivo do usuário:

```
PUT: http://localhost:3030/userDevices/:id
Headers: {
	"Authorization": "Bearer token"
	"Content-Type": "application/json"
}

Body: {
	"is_on": false
}
```

**Resultado:**

```
{
	"_id": "631b76215516db091259eaae",
	"user": "631b6e3e61ef65fb3859152f",
	"device": "631b2f6b6f2d2f24a7c0c949",
	"local": "631b34696f2d2f24a7c0c960",
	"is_on": false,
	"room": "Quarto",
	"__v": 0
}
```