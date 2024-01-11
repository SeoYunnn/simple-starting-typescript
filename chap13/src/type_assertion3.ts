interface Profile {
    name: string;
    id: string;
}

function getProfile() {
    // ...
}

// Error 발생
// let myProfile = getProfile() as Profile;
// renderId(myProfile.id);