import LoginControl from "./components/LoginControl";
import UserList from "./components/UserList";
import SimpleForm from "./components/SimpleForm";

const App = () => {
  return (
    <div className="bg-sky-200 min-h-screen flex flex-col justify-center items-center gap-10 ">
      <SimpleForm />
      <LoginControl />
      <UserList />
    </div>
  );
};

export default App;
