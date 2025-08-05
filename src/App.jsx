import LoginControl from "./components/LoginControl";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="bg-sky-200 min-h-screen flex flex-col justify-center items-center gap-10 ">
      <LoginControl />
      <UserList />
    </div>
  );
};

export default App;
