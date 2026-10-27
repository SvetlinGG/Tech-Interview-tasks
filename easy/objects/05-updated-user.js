function solve(){
    const user = {
    id: 1,
    name: "Anna",
    settings: {
        theme: "light",
        notifications: true
    }
};
    let updatedUser = {
        ...user,
        name: "Maria",
    settings: {
        ...user.settings,
        theme: "dark"
    }
}

    updatedUser.name = 'Maria';
    updatedUser.settings.theme = 'dark'
    
    console.log(updatedUser.settings);
    console.log(user.settings);
    
    
}
solve()