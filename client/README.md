# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

###

{
[`uuid: "1"`] Уникальный идентификатор (уникальный ID маршрута)
[` address: "192.168.1.1"`] IP-адрес назначения (куда идут пакеты)
[` mask: "255.255.255.0"`] Маска подсети (определяет, к какой сети относится адрес)
[`gateway: "192.168.1.254"`] Шлюз — через какой IP передавать трафик
[`interface: "eth0"`] Интерфейс — через какой сетевой адаптер (например, eth0 или wlan0)
}

Маршруты
const routes = [
{
uuid: "1",
address: "192.168.1.1",
mask: "255.255.255.0",
gateway: "192.168.1.254",
interface: "eth0",
},
{
uuid: "2",
address: "10.0.0.1",
mask: "255.0.0.0",
gateway: "10.0.0.254",
interface: "eth1",
},
{
uuid: "3",
address: "172.16.0.1",
mask: "255.240.0.0",
gateway: "172.16.0.254",
interface: "eth2",
},
{
uuid: "4",
address: "192.168.0.10",
mask: "255.255.255.0",
gateway: "192.168.0.1",
interface: "eth0",
},
{
uuid: "5",
address: "10.10.10.10",
mask: "255.255.255.0",
gateway: "10.10.10.1",
interface: "eth1",
},
{
uuid: "6",
address: "8.8.8.8",
mask: "255.255.255.255",
gateway: "192.168.1.1",
interface: "eth0",
},
{
uuid: "7",
address: "172.20.5.1",
mask: "255.255.0.0",
gateway: "172.20.0.1",
interface: "eth2",
},
{
uuid: "8",
address: "100.64.0.1",
mask: "255.192.0.0",
gateway: "100.64.0.254",
interface: "tun0",
},
{
uuid: "9",
address: "192.0.2.1",
mask: "255.255.255.0",
gateway: "192.0.2.254",
interface: "eth3",
},
];

IP-адрес — это 4 байта

"192.168.0.1" - 4 числа от 0 до 255
192 - 1 байт (8 бит)
168 - 1 байт (8 бит)
0 - 1 байт (8 бит)
1 - 1 байт (8 бит)
8+8+8+8= 32 бита (4 байт)
