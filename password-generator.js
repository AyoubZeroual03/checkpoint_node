const generator = require('generate-password');
const generator_password=()=>{
    const password = generator.generate({
        length: 10,
        numbers: true,
        symbols:true
    });
    console.log("password : "+password);
}
generator_password();
