import Profile from "./components/Profile"

const profiles = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const profileList = profiles.map((profile) => {
    return <li key={profile.name}><Profile  {...profile}/></li>
  })
  return (
    <>
      <ul>
        {profileList}
      </ul>
    </>
  );
};

export default Example;
