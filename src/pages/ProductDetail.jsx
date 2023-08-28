import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetails() {
  let { name } = useParams(); // normalde let {id:id} olmalı ama iki taraf da aynı isimdeyse yazmaya gerek yok

  //UseParams bize react-router ile gelir ve adres'teki parametreleri almamızı sağlar

  const [product, setProduct] = useState([]);
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductName(name)
      .then((result) => setProduct(result.data.data));
  }, [name]);
  return (
    <div>
      <Card.Group>
        <Card fluid>
          {product.map((product) => (
            <Card.Content>
              <Card.Header>{product.productName}</Card.Header>
              <Card.Description>
                Steve wants to add you to the group{" "}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
          ))}

          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
