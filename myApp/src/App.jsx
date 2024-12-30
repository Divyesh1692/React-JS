import React from "react";
import Greeting from "./Greetings";
import UserProfileCard from "./UserProfileCard";

function App() {
  return (
    <div className="p-6 space-y-6">
      <Greeting name="Divyesh" />
      <UserProfileCard
        isStyled={true}
        name="Divyesh Variya"
        age={24}
        bio="I am a dedicated Full Stack Developer with a strong foundation in backend development and a growing expertise in React.js. My journey in web development has been fueled by a passion for creating efficient, scalable, and user-friendly applications."
        location="Surat"
        profilePicture="https://media.licdn.com/dms/image/v2/D4D03AQHhv5R0NtYGpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687250271327?e=1741219200&v=beta&t=qF4KXbhTOtvUlnHw0Gm8s_gzsTGoQIbpCv1x5DaygcU"
      />
      <UserProfileCard
        isStyled={true}
        name="Divyesh Variya"
        age={24}
        bio="I am a dedicated Full Stack Developer with a strong foundation in backend development and a growing expertise in React.js. My journey in web development has been fueled by a passion for creating efficient, scalable, and user-friendly applications."
        location="Surat"
        profilePicture="https://media.licdn.com/dms/image/v2/D4D03AQHhv5R0NtYGpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687250271327?e=1741219200&v=beta&t=qF4KXbhTOtvUlnHw0Gm8s_gzsTGoQIbpCv1x5DaygcU"
      />
      <UserProfileCard
        isStyled={true}
        name="Divyesh Variya"
        age={24}
        bio="I am a dedicated Full Stack Developer with a strong foundation in backend development and a growing expertise in React.js. My journey in web development has been fueled by a passion for creating efficient, scalable, and user-friendly applications."
        location="Surat"
        profilePicture="https://media.licdn.com/dms/image/v2/D4D03AQHhv5R0NtYGpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687250271327?e=1741219200&v=beta&t=qF4KXbhTOtvUlnHw0Gm8s_gzsTGoQIbpCv1x5DaygcU"
      />
      
    </div>
  );
}

export default App;
