import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

const Header = ({count}) => {
  return (
    <div>
        <nav className='  navbar-light header'>
            <h4 className='navbar-brand' style={{color : 'white' , fontSize : '30px', padding: "10px"}}>Anu's Restaurant</h4>
            <button className='btn btn-primary'>
              <Link to= '/orders' style={{color: 'white', textDecoration: 'none'}}>Orders</Link> <span className='badge bg-secondary'>{count}</span>
            </button>
        </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  count : state.orderReducer.length
})

export default connect(mapStateToProps)(Header)
