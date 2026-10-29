import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {

  const [order, setOrder] = useState([]);

  // function to fetch orders
  const fetchOrders = () => {
    axios    //.get("http://localhost:3002/newOrder")
      .get("http:https://stockly-1.onrender.com/newOrder")    
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => console.log(err));
  };

  // run once when component loads
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders">

      {order.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>

      ) : (
        <div>
          <h3 className="title">Orders ({order.length})</h3>

          <div className="order-table">
            <table>

              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {order.map((stock, index) => {

                  const curValue = stock.price * stock.qty;

                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td>{curValue}</td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </div>
      )}

    </div>
  );
};

export default Orders;
