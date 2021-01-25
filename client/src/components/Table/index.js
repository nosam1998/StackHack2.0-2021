import React from "react";
import { Table, Container } from "react-bootstrap";

function Tables() {
  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <th></th>
            <th>Food</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sandwich</td>
            <td>$3.99</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Soup</td>
            <td>$2.99</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Salad</td>
            <td>$1.99</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Parfait</td>
            <td>$3.99</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Pizza Slice</td>
            <td>$1.99</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Cheeseburger</td>
            <td>$5.50</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Tables;
