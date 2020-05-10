import { main } from "./src/main";

main().then(url => console.log(`iGeorgia API is ready at ${url}`))
      .catch(console.error);
