import { app } from "./server";

const PORT = process.env.NODE_ENV || 5000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
