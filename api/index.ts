import { config } from "dotenv";
import { main } from "./src/main";

process.setMaxListeners(20);

config();

main().then(url => console.log(`iGeorgia API is ready at ${url}`))
      .catch(console.error);
