import React, { Component } from 'react'
import styles from "./add.module.css";
class Fetch extends Component {
    state = {
        data:[]
    }
    fetchApi = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((resp) => resp.json())
            .then((fetchData) => {
                this.setState({ data: fetchData });
            });
    }
  render() {
    return (
      <div>
        <button onClick={this.fetchApi}>Load Data</button>
       
          <div>
            {this.state.data.map((item) => (
                <div key={item.id} className={styles.grid}>
                {item.title}
                <img src={item.url} alt="photos" />
                <p>{item.albumId}</p>
              </div>
            ))}
          </div>
        
      </div>
    );
  }
}
export default Fetch;
