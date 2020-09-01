import React from "react";

import { Cards, Graph } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchDailyDataDiff } from "./api";

class App extends React.Component {
  state = {
    data: {},
    dataDiff: {}
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });

    const fetchedDailyDataDiff = await fetchDailyDataDiff();
    this.setState({dataDiff: fetchedDailyDataDiff});
  }

  render() {
    const { data, dataDiff } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>COVID-19</h1>
          <h2>Česká republika</h2>
        </div>
        <Cards data={ data } dataDiff={ dataDiff }/>
        <Graph />
        <p>
          Zdroj: <a href="https://onemocneni-aktualne.mzcr.cz/">MZČR.cz</a>
        </p>
      </div>
    );
  }
}

export default App;
