import React, { useEffect, useState } from "react";

//import '../App.css';
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import ImageCarousel from "../components/ImageCarousel";
import Links from "../components/Links";
import Hero from "../components/Hero";
import { Grid, AppBar, Toolbar, Typography, Box, Container  } from "@mui/material";
import { Article, getArticles } from "../services/articles";

const appStyle = {
  backgroundImage: "url(https://www.philhealth.gov.ph/images/bg_green.jpg)",
};

function Home() {
  const [articles, setArticles] = useState<Array<Article>>([]);
  console.log(articles.length);

  useEffect(() => {
    getArticles().then((articles) => setArticles(articles));
  }, []);

  return (
    <div className="App" style={appStyle}>
      <div>
        <Header />
      </div>
      <div>
        <NavMenu />
      </div>
      <div>
        <ImageCarousel />
      </div>
      <div>
        <Grid container>
          {articles.map((article) => {
            return <Hero title={article.title} body={article.body} />;
          })}
        </Grid>
        <div>
          <Links />
        </div>
      </div>
      <AppBar position="static" style={{ backgroundColor: '#329900', height: '40px' }}>
        <Toolbar style={{ minHeight: '40px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Typography variant="h6" color="inherit" sx={{ fontSize: '12px' }}>
              &copy; 2014 Philippine Health Insurance Corporation | Citystate Centre, 709 Shaw Boulevard 1603 Pasig City | Action Center 8441-7442
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Home;
