import React from 'react';
import {connect} from 'react-redux';
import {setFilter, reSetFilter} from '../Action';

const Filter = ({filter_name, setFilter, reSetFilter}) => {
    const prod = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"];
  return (
    <div>
        <center className='mt-2'>
            <span className='h4 m-2'>Filter</span>
            <select name='filter' className='p-1' onChange={(e) => setFilter(e.target.value)}>
                {prod.map((item, index)=>
                    <option value={item} key={index}>{item}</option>
                )}
            </select>
        </center>
    </div>
  )
}

const mapStateToProps = state => ({
    filter_name : state.filterReducer.filter_name
})

export default connect(mapStateToProps,{setFilter, reSetFilter})(Filter);
