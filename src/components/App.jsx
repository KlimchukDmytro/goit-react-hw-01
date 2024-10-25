import userData from "../userData.json";
import Profile from "./Profile/Profile";
import List from "./List/list";
const App = () => {
  return (
    <div>
      <List />
      <h1>User Profile</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;
