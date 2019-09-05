const bcrypt = require("bcrypt");

async function saveUser() {
    const userPassword = await bcrypt.hash("123Tysons0982gdfgdfgfdg", 8);
    console.log(userPassword.length);
}

saveUser();
