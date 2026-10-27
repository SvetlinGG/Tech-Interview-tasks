function solve(){
    const user = {
    id: 1,
    name: "Anna",
    settings: {
        theme: "light",
        notifications: true
    }
};
    let updatedUser = {...user};

    updatedUser.name = 'Maria';
    updatedUser.settings.theme = 'dark'
    
    console.log(updatedUser.settings);
    
}
solve()