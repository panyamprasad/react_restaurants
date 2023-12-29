import React from "react";
import {connect} from 'react-redux';
import { addOrder, reSetFilter, reSetTableNumber } from "../Action";

const Card = ({filter_Name,addOrder, table_number}) => {
  const [data, setData] = React.useState([]);
  const [cloneData, setCloneData] = React.useState([]);
  
  React.useEffect(() => {
    fetch(
      "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json"
    )
      .then((response) => response.json())
      .then(
        json => {
          setData(json.items);
          setCloneData(json.items);
        });
  },[])

  React.useEffect(() => {
    if(filter_Name !== 'All Items'){
      let specific = cloneData.filter(item => item.category === filter_Name);
      setData(specific);
    }else{
      setData(cloneData);
    }
  },[filter_Name]);

  const Handler = async (id, name, prize, url) => {
      if(table_number != null){
        await addOrder(id, name, prize, url, table_number)
        reSetTableNumber();
        reSetFilter();
        alert('Order Placed successfully')
      }else{
        alert('Please select the table number.');
      }
  }

  return (
    <div>
      <center>
        {data.length > 0 ? 
          <div className="container">
            <div className="row">
              {data.map((item) => (
                <div className="col-md-4" style={{ padding: "5px" }} key={item.id}>
                  <div className="card" style={{ width: "18rem", padding: "3px" }}>
                    <img src={item.url} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="card-text">Rs.{item.prize}</div>
                        <button className="btn btn-primary" onClick={() => Handler(item.id, item.name, item.prize, item.url)}>Order</button>
                    </div>              
                  </div>
                </div>
              ))}
            </div>
          </div> : <div className="spinner-border text-primary"></div>
        }
      </center>
    </div>
  );
};

const mapStateToProps = state => ({
  filter_Name : state.filterReducer.filter_name,
  table_number : state.tableReducer.table_number
})

export default connect(mapStateToProps, {addOrder})(Card);
