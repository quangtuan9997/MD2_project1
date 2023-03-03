import React, { useEffect } from 'react'
import { act_get_user } from '../redux/action';
import {useDispatch,useSelector} from 'react-redux';
export default function ListUsers() {
    const dispatch=useDispatch();
    useEffect (()=>{
        dispatch(act_get_user())
    },[]);
    const listUser=useSelector(state=>state.users);
    let elementListUser= listUser.map((user,index)=>{
        return <tr key={user.id}>
        <td>{index +1}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.status}</td>
    </tr>
    })
  return (
    <div>
        <table class="table table-success table-striped">
            <thead>
                <tr>
                <th>STT</th>
                <th>userName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>status</th>
                </tr>
            </thead>
            <tbody>
                {elementListUser}
            </tbody>
        </table>
    </div>
  )
}
