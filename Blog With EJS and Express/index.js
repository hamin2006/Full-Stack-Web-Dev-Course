import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

class Blog {
    constructor(tag, title, content) {
      this.tag = tag;
      this.title = title;
      this.content = content;
    }
}
const blogs = [new Blog("/blog", "First blog", "Damn")];

app.get("/", (req,res) => {
    res.render("index.ejs", {blogs : blogs});
});

app.get("/blog", (req,res) => {
    res.render("blog.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});