import React from 'react';
import {connect} from 'react-redux'
import Header from './Container/Header';


const Orders = ({list}) => {
  return (
    <div>
      <Header/>
      <center>
        <h2 style={{padding: '4px'}}>Order List</h2>
        {list.length > 0 ? 
          <div className="container">
            <div className="row">
              {list.map((item) => (
                <div className="col-md-4" style={{ padding: "5px" }}>
                  <div className="card" style={{ width: "18rem", padding: "3px" }}>
                    <img src={item.url} alt="nice" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="card-text">Amount : {item.prize}</div>
                        <div className="card-text">Table Number : {item.table_number}</div>
                    </div>              
                  </div>
                </div>
              ))}
            </div>
          </div> : <div className="">
            <h2 className='mt-4'>No order placed.</h2>
          </div>
        }
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  list : state.orderReducer
})

export default connect(mapStateToProps)(Orders)
