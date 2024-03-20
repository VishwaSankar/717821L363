import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Box, Tooltip, Zoom, Stack, Divider } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Proddata } from '../Productdetails';
import { Right } from "../rightspace";

export const Index = () => {
  return (
    <>
   <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "40px",
          paddingTop: "30px",
          textAlign:"center"
        }}
      >
        Top Products in the Market!
      </Typography>
      <Divider color="gray" variant="middle"/>
    <Stack direction="row">
    <Grid container spacing={1} paddingTop="50px" padding="20px">
      {Proddata.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              maxWidth: "300px",
              minWidth: "300px",
              maxHeight: "310px",
              cursor: "pointer",
              ":hover": { transform: "scale(1.04)" },
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              marginBottom: "10px", // Adjust the margin bottom to control the gap between cards
            }}
          >
            <Tooltip TransitionComponent={Zoom}>
              <CardMedia
                component="img"
                height="150px"
                width="100%"
                src={product.img} // Assuming your Proddata has a property imgUrl for image URL
              />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    width: "100%",
                    fontSize: "20px",
                    textAlign: "left",

                  }}
                >
                  {product.productname}
                </Typography>
              </CardContent>
            </Tooltip>

            <CardActions>
              <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                <Typography sx={{ fontSize: "15px" ,  fontFamily: "monospace",}}>
                  Rs. {product.price}
                </Typography>
                <Box display="flex">
                  <Rating size="small" value={product.rating} readOnly />
                  <Typography sx={{ fontSize: "15px", marginLeft: "5px" }}>
                    ({product.rating})
                  </Typography>
                </Box>
              </Box>
            </CardActions>
            <CardActions>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Explore
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Right/>
    </Stack>

    </>
  );
};
