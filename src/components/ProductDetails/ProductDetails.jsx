import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./../../api/api";
import { Box, Breadcrumbs, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { Skeleton } from "@material-ui/lab";
import { Add, Remove, Star, StarBorder, StarHalf } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function ProductDetails() {
  const params = useParams();
  const classes = useStyles();
  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    const fetchProduct = async () => {
      if (params.id) {
        const res = await getProductById(params.id);
        // console.log(res.data);
        setProduct(res.data);
      }
    };

    fetchProduct();
  }, [params.id]);
  if (product === null)
    return (
      <Box className={classes.container}>
        <Box className={classes.img}>
          <Skeleton height={1200} style={{ marginTop: "-270px" }} />
        </Box>
        <Box className={classes.content}>
          <Skeleton
            className={classes.title}
            width={860}
            height={38}
            animation="wave"
            variant="rect"
          />
          <br />
          <Skeleton
            className={classes.description}
            width={860}
            height={95}
            animation="wave"
            variant="rect"
          />
          <Skeleton
            className={classes.price}
            width={126}
            height={48}
            animation="wave"
            variant="rect"
          />
          <Skeleton
            className={classes.price}
            width={140}
            height={30}
            animation="wave"
            variant="rect"
          />
          <Skeleton
            className={classes.stars}
            width={250}
            height={24}
            animation="wave"
            variant="rect"
          />
          <Skeleton
            className={classes.stars}
            width={860}
            height={42}
            animation="wave"
            variant="rect"
          />
        </Box>
      </Box>
    );
  return (
    <Box className={classes.container}>
      <img className={classes.img} src={product.image} alt={product.id} />
      <Box className={classes.content}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/" style={{textDecoration: 'none', color: '#000000'}}>
            Home
          </Link>
          <Link
            to={`/${params.category}`}
            style={{textDecoration: 'none', color: '#000000', textTransform: 'capitalize'}}
          >
            {params.category}
          </Link>
          <span style={{textDecoration: 'none', color: '#000000'}}>{product.title.substring(0, 70)}...</span>
        </Breadcrumbs>
        <Box className={classes.title}>{product.title}</Box>
        <Box className={classes.description}>{product.description}</Box>
        <Box className={classes.price}>$ {product.price}</Box>
        <Box className={classes.count}>Count: {product.rating.count}</Box>
        <Box className={classes.stars}>
          <span className={classes.rating}>Rating: </span>
          {product.rating.rate >= 0.5 ? (
            <Star style={{ color: "yellow" }} />
          ) : product.rating.rate > 0 ? (
            <StarHalf style={{ color: "yellow" }} />
          ) : (
            <StarBorder style={{ color: "yellow" }} />
          )}
          {product.rating.rate >= 1.5 ? (
            <Star style={{ color: "yellow" }} />
          ) : product.rating.rate > 1 ? (
            <StarHalf style={{ color: "yellow" }} />
          ) : (
            <StarBorder style={{ color: "yellow" }} />
          )}
          {product.rating.rate >= 2.5 ? (
            <Star style={{ color: "yellow" }} />
          ) : product.rating.rate > 2 ? (
            <StarHalf style={{ color: "yellow" }} />
          ) : (
            <StarBorder style={{ color: "yellow" }} />
          )}
          {product.rating.rate >= 3.5 ? (
            <Star style={{ color: "yellow" }} />
          ) : product.rating.rate > 3 ? (
            <StarHalf style={{ color: "yellow" }} />
          ) : (
            <StarBorder style={{ color: "yellow" }} />
          )}
          {product.rating.rate >= 4.5 ? (
            <Star style={{ color: "yellow" }} />
          ) : product.rating.rate > 4 ? (
            <StarHalf style={{ color: "yellow" }} />
          ) : (
            <StarBorder style={{ color: "yellow" }} />
          )}
        </Box>
        <Box className={classes.cartOpt}>
          <Box className={classes.AmountContainer}>
            <Add
              style={{ cursor: "pointer" }}
              onClick={() => setAmount(amount + 1)}
            />
            <span className={classes.amount}>{amount}</span>
            <Remove
              style={{ cursor: "pointer" }}
              onClick={() => setAmount(amount !== 1 ? amount - 1 : 1)}
            />
          </Box>
          <Button variant="outlined" size="large" className={classes.button}>
            Add To Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
