import React, { useEffect, useState } from "react";
import callApi from "../api";
import Box from "../component/Box/Box";
import BoxMin from "../component/BoxMin/BoxMin";
import User from "../component/User/User";
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    callApi("/users", "GET", null).then((item) => setUsers(item.data));
  }, []);

  return (
    <>
  <BoxMin>
    
  </BoxMin>
    <Box>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Trạng thái</th>
            <th>Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {console.log(users)}
          {users.map((item) => {
            return <User key={item.id} data={item}></User>;
          })}
        </tbody>
      </table>
    </Box>
    </>
  );
}

export default Users;
