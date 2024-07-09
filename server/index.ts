
import { app } from "./src/app";
import { PORT } from "./src/config/env";

app.listen(PORT , ()=>{
    console.log(`servidor corriendo en ${PORT} `);
    
})