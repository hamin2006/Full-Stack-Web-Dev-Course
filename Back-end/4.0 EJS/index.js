import express from "express";

const app = express();
const port = 3000;
const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var day = 0;
var noteVal = ""
app.use((req,res,next) => {
    var d = new Date();
    day = d.getDay();
    if (day === 0 | day === 6) {
        noteVal = "have fun";
    } else {
        noteVal = "work hard";
    }
    next();
});
app.get("/", (req,res) => {
    res.render("index.ejs", {day: weekdays[day], note: noteVal});
});

app.listen(port, () => {
});