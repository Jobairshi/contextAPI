import { FormEvent, useContext, useState } from "react";
import UserContext from "../Context/UserContext";

export default function Login() {


    const [username, setUsername]  = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {setUser} = useContext(UserContext);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const name = formdata.get("username");
    const pass = formdata.get("password");
    setUsername(username);
    setPassword(password);
    setUser({username:String(name),password:String(pass)});
  //  console.log(name, " : : ", pass);
  }

  return (
    <div className="my-10 container m-auto bg-slate-400 p-10 rounded-2xl shadow-2xl shadow-yellow-300">
      <div>
        <form
          className="flex flex-col justify-center gap-2"
          action=""
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 p-2 justify-start">
            <label htmlFor="user-name" className="">
              user-name
            </label>
            <input
              className="border-2 rounded-lg p-2 px-4 border-yellow-300"
              name="username"
              placeholder="user-name"
              type="text"
              required
              minLength={3}
              maxLength={10}
              title="Username should be 3-10 characters long and contain only alphanumeric characters."
              pattern="[A-Za-z0-9]+"
            />
          </div>

          <div className="flex flex-col gap-2 p-2 justify-start">
            <label htmlFor="password" className="">
              password
            </label>
            <input
              className="border-2 rounded-lg p-2 px-4 border-yellow-300"
              type="password"
              name="password"
              placeholder="input password"
              required
             // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
              title="password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
            />
          </div>

          <button
            type="submit"
            className="font-bold w-[30%] h-10 bg-yellow-200 border-2 rounded-lg m-auto hover:bg-yellow-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
