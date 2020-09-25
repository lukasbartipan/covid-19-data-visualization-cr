import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";

import styles from "./Graph.module.css";

const Graph = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  });

  const graph = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ datum }) => datum),
        datasets: [
          {
            data: dailyData.map(
              ({ kumulativni_pocet_nakazenych }) =>
                kumulativni_pocet_nakazenych,
            ),
            label: "Infikovaní",
            fontColor: "#e3e3e3e",
            borderColor: "rgba(255, 0, 0, 0.8)",
            fill: true,
          },
          {
            data: dailyData.map(
              ({ kumulativni_pocet_vylecenych }) =>
                kumulativni_pocet_vylecenych,
            ),
            label: "Vyléčení",
            borderColor: "rgba(0, 255, 0, 0.8)",
            fill: true,
          },
          {
            data: dailyData.map(
              ({ kumulativni_pocet_umrti }) => kumulativni_pocet_umrti,
            ),
            label: "Umrtí",
            borderColor: "rgba(0, 0, 0, 0.8)",
            fill: true,
          },
        ],
        options: {
        legend: {
            labels: {
                fontColor: 'white'
            }
          }
        }
      }}
    />
  ) : null;

  return <div className={styles.container}>{graph}</div>;
};

export default Graph;
