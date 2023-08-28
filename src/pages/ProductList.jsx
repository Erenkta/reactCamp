import React, { useState, useEffect } from "react";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartAction";
import {toast} from "react-toastify"

export default function ProductList() {
  const [products, setProducts] = useState([]); //Destructuring
  useEffect(() => {
    // burada products değişirse sayfa yeniden render edilecek
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data)); // result.data demek bizim JSON objemizi döndür demek.
    //Onun içindeki data array'ini de almak için data.data yaptık
  }, []);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} Sepete eklendi`)
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((products) => (
            <Table.Row key={products.id}>

              {/* Hepsi unique olsun diye map'te key koymamız lazım*/}
              <Table.Cell>
                <Link to={`/products/${products.productName}`}>
                  {products.productName}
                </Link>
              </Table.Cell>
              <Table.Cell>{products.unitPrice}.</Table.Cell>
              <Table.Cell>{products.unitsInStock}</Table.Cell>
              <Table.Cell>{products.quantityPerUnit}</Table.Cell>
              <Table.Cell>{products.category.categoryName}</Table.Cell>
              <Table.Cell>
                <Button onClick={()=>handleAddToCart(products)}>Sepete Ekle</Button> {/* onClick'e fonksiyon atamak demek () => ile kullanılır */}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
