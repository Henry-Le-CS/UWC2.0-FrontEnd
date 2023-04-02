import React from "react";
import "./index.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Checkbox } from "@mui/material";
const workerData = [
  {
    _id: "abcdef",
    user_id: 2153342,
    first_name: "Hieu",
    last_name: "Le Trong",
    is_avail: true,
  },
  {
    _id: "abcdef",
    user_id: 2152646,
    first_name: "Khang",
    last_name: "Vo Hoang Nhat",
    is_avail: false,
  },
  {
    _id: "abcdef",
    user_id: 2052975,
    first_name: "Hai",
    last_name: "Pham Duc",
    is_avail: true,
  },
  {
    _id: "abcdef",
    user_id: 2053349,
    first_name: "Phuong",
    last_name: "Le H. Mai",
    is_avail: false,
  },
  {
    _id: "abcdef",
    user_id: 2053349,
    first_name: "Tung",
    last_name: "Van N. Thanh",
    is_avail: true,
  },
  {
    _id: "abcdef",
    user_id: 2153342,
    first_name: "Hieu",
    last_name: "Le Trong",
    is_avail: !true,
  },
  {
    _id: "abcdef",
    user_id: 2152646,
    first_name: "Khang",
    last_name: "Vo Hoang Nhat",
    is_avail: !false,
  },
  {
    _id: "abcdef",
    user_id: 2052975,
    first_name: "Hai",
    last_name: "Pham Duc",
    is_avail: !true,
  },
  {
    _id: "abcdef",
    user_id: 2053349,
    first_name: "Phuong",
    last_name: "Le H. Mai",
    is_avail: !false,
  },
  {
    _id: "abcdef",
    user_id: 2053349,
    first_name: "Tung",
    last_name: "Van N. Thanh",
    is_avail: !true,
  },
];
function Assign(props) {
  return (
    <div className="assign--container">
      <div className="assign--header">
        <div className="assign--text">
          <h2>Choose workers to assign</h2>
        </div>
        <div className="assign--closeBtn" onClick={props.showAssign}>
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="assign--content">
        <form className="assign--search--container">
          <button className="assign--search--btn" type="submit">
            search
          </button>
          <input
            className="assign--search--input"
            type="search"
            placeholder="Search MCP..."
          />
        </form>
        <form className="assign--select--container">
          <div className="assign--select--worker">
            {
                workerData.sort((a,b) => b.is_avail-a.is_avail).map(worker=>{
                    return(
                        <div className="assign--worker--display">
                        <div>
                          <div className="assign--worker--info">
                            <h4>{worker.first_name} {worker.last_name}</h4>
                            <h4>ID: {worker.user_id}</h4>
                          </div>
                          <div className="assign--worker--status">{worker.is_avail ? <span style={{color: "#4CAF50"}}>Available</span> : <span style={{color: "red"}}>Busy</span>}</div>
                        </div>
                        <Checkbox />
                      </div>
                    )
                })
            }
            </div>
          <button className="assign--submit--btn" type="submit">
            Assign
          </button>
        </form>
      </div>
    </div>
  );
}
export default Assign;
