import React, { useState } from "react";
import "./routetable.css";
export default function RoutingTable() {
  const [routes, setRoutes] = useState([
    {
      uuid: "1",
      address: "192.168.1.1",
      mask: "255.255.255.0",
      gateway: "192.168.1.254",
      interface: "Домашняя сеть",
    },
    {
      uuid: "2",
      address: "10.0.0.1",
      mask: "255.0.0.0",
      gateway: "10.0.0.254",
      interface: "Мобильный интеренет",
    },
    {
      uuid: "3",
      address: "172.16.0.1",
      mask: "255.240.0.0",
      gateway: "172.16.0.254",
      interface: "Подключение интернет",
    },
    {
      uuid: "4",
      address: "192.168.0.10",
      mask: "255.255.255.0",
      gateway: "192.168.0.1",
      interface: "Подключение интернет",
    },
    {
      uuid: "5",
      address: "10.10.10.10",
      mask: "255.255.255.0",
      gateway: "10.10.10.1",
      interface: "Подключение интернет",
    },
    {
      uuid: "6",
      address: "8.8.8.8",
      mask: "255.255.255.255",
      gateway: "192.168.1.1",
      interface: "Гостевая сеть",
    },
    {
      uuid: "7",
      address: "172.20.5.1",
      mask: "255.255.0.0",
      gateway: "172.20.0.1",
      interface: "Гостевая сеть",
    },
    {
      uuid: "8",
      address: "100.64.0.1",
      mask: "255.192.0.0",
      gateway: "100.64.0.254",
      interface: "Мобильный интеренет",
    },
    {
      uuid: "9",
      address: "192.0.2.1",
      mask: "255.255.255.0",
      gateway: "192.0.2.254",
      interface: "Мобильный интеренет",
    },
  ]);

  // Анимация  <span className="arrow" вверх вниз
  // const [sortConfig, setSortConfig] = useState({ key: null });
  // const handleSort = (key) => {
  //   setSortConfig((prev) => {
  //     if (prev.key !== key) {
  //       return { key }; // при клике на НОВЫЙ столбец — активирует его
  //     } else {
  //       return { key: null }; // при повторном клике — сбрасывает
  //     }
  //   });
  // };

  // Состояние для хранения информации о текущей сортировке
  // key — по какому полю сортируем, direction — asc или desc
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Преобразование IP-адреса в число для корректной сортировки
  const ipToNumber = (ip) => {
    return ip
      .split(".")
      .reduce((sum, ipRoute) => ((sum << 8) + Number(ipRoute)) >>> 0, 0);
  };

  // Сортировка маршрутов на основе текущего состояния сортировки
  const sortedRoutes = [...routes].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (!key) return 0; // если сортировка не выбрана, вернуть без изменений

    const asc = direction === "asc";
    if (key === "address" || key === "gateway") {
      // сортировка по IP
      const diff = ipToNumber(a[key]) - ipToNumber(b[key]);
      return asc ? diff : -diff;
    } else {
      // сортировка по строке (interface)
      return asc ? a[key].localeCompare(b[key]) : b[key].localeCompare[a[key]];
    }
  });

  // Обработчик клика по заголовку: переключает направление сортировки
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="filter">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("address")}>
              Адрес назначения{" "}
              <span
                className={`arrow ${
                  sortConfig.key === "address" ? sortConfig.direction : ""
                }`}
              ></span>
            </th>
            <th onClick={() => handleSort("gateway")}>
              Шлюз{" "}
              <span
                className={`arrow ${
                  sortConfig.key === "gateway" ? sortConfig.direction : ""
                }`}
              ></span>
            </th>
            <th onClick={() => handleSort("interface")}>
              Интерфейс{" "}
              <span
                className={`arrow ${
                  sortConfig.key === "interface" ? sortConfig.direction : ""
                }`}
              ></span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedRoutes.map((route) => (
            <tr key={route.uuid}>
              <td>{route.address}</td>
              <td>{route.gateway}</td>
              <td>{route.interface}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
