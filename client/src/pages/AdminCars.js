import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { deleteCar, getAllCars } from "../redux/actions/carsActions";
import { Col, Row, Divider, DatePicker, Checkbox, Edit } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import "../styles/admincars.css"
const { RangePicker } = DatePicker;
function AdminHome() {
  var key=0;
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalcars] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  
  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);
  
  return (
    
    <DefaultLayout>
      <Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24}>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mt-1 mr-1">Car Panel</h3>
            <button className="btn1">
              <a href="/addcar">ADD CAR</a>
            </button>
          </div>
        </Col>
      </Row>

      {loading == true && <Spinner />}

        {/* //car card */}
      <Row justify="center" gutter={16}>
        {totalCars.map((car) => {
          key++;
          console.log(key)
          return (
            
            
            <Col lg={6} sm={24} xs={24}>
              <div className="car p-2 bs1">
                <img src={car.image} className="carimg" />

                <div className="car-content d-flex justify-content-between">
                  <div className="text-left pl-2">
                    <p> <b> Car Type: </b>{car.carType}</p>
                    <p> <b> Name : </b>{car.name}</p>
                    <p>  <b> Rent Per Hour </b>{car.rentPerHour} /-</p>
                    <p> <b> Rating : </b>{car.rating}</p>
                    <p> <b> Mileage : </b>{car.mileage}</p>
                    <p> <b> Fuel Type : </b>{car.fuelType}</p>
                    <p> <b> Drive Type: </b>{car.driveType}</p>


                  </div>

                  <div className="mr-4 mt-0">
                    <Link to={`/editcar/${car._id}`}>
                      <EditOutlined
                        className="mr-3"
                        style={{ color: "green", cursor: "pointer" }}
                        />
                    </Link>

                    <Popconfirm
                      title="Are you sure to delete this car?"
                      onConfirm={()=>{dispatch(deleteCar({carid : car._id}))}}
                      
                      okText="Yes"
                      cancelText="No"
                      >
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                        />
                    </Popconfirm>
                  </div>
                </div>
                        
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
}

export default AdminHome;
