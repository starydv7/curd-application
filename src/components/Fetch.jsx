import React, { Component } from 'react'
import styles from "./add.module.css";
class Fetch extends Component {
    state = {
        data:[]
    }
    fetchApi = () => {
        fetch("https://dummyjson.com/users")
          .then((resp) => resp.json())
          .then((fetchData) => {
            // this.setState({ data: fetchData });
            console.log(fetchData);
          });
    }
  render() {
    return (
      <div>
        <button onClick={this.fetchApi}>Load Data</button>

        <div>
          {this.state.data.map((item) => (
            <div key={item.id} className={styles.grid}>
              {item.id}
              <img src={item.image} alt="photos" />
              <p>{item.firstName}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Fetch;
