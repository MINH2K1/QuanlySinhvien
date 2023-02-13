import React from "react";
import Button from "../Button/Button";
import style from "./User.module.css";
function User({ data }) {
  return (
    <tr>
      <td className={style.content}>{data.name}</td>
      <td className={style.content}>{data.age}</td>
      <td className={style.status}><div text>đang hoạt động</div></td>
      <td className={style.btn}>
        <Button className={style.text} color={"red"}>Xóa</Button>
        <Button className={style.text} color={"green"}> Chỉnh Sửa</Button>
      </td>
    </tr>
  );
}

export default User;
