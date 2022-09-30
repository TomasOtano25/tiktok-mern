import app from "./app";
import { connectDB } from "./db";

connectDB();

app.listen(3015);
console.log(`Server on port ${3015}`);
