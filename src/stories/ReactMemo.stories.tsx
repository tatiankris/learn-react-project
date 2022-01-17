import React, {useState} from "react";

export default {
    title: "React memo"
}

const MessageCounterSecret = (props: { count: number } ) => {

    return <div>{props.count}</div>;

}
const MessageCounter = React.memo(MessageCounterSecret);

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS-sec');

  return (
      <div>
      {
          props.users.map((m, i) => <div key={i}>{m}</div>)
      }
      </div>
  )
}

const Users = React.memo(UsersSecret);

export const Example1 = (props: { count: number, users: Array<string> }) => {

    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Dima', 'Sasha', 'Kolya', 'Misha'])

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()]);
    }

    return (
        <div>
            <MessageCounter count={count}/>
            <button onClick={() => {setCount(count + 1)}}>counter</button>

            <button onClick={addUser}>add user</button>
            <Users users={users}/>

        </div>


)
}