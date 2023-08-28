import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid, GridColumn } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={3000}/>
      <Grid>
        {/*Grid sistemi sayfayı 16 eşit parçaya böler */}
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <GridColumn width={12}>
            <Routes > {/* Componentler arası geçiş işlemlerini sağlayacağız*/}
              <Route exact path="/" Component={ProductList} />  {/*Exact demek tam demek yani /gsokjgsjgsd yazsak da geliyordu normalde artık gelmicek*/}
              <Route exact path="/products" Component={ProductList} /> 
              <Route path="/products/:name" Component={ProductDetail} /> {/*bu da parametleri bir path olduğunu belirtir*/}
              <Route exact path ="/cart" Component={CartDetail}/>
            </Routes>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
