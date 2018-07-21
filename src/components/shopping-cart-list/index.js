import React, { Component } from 'react';


class ShoppingCartList extends Component {
    render() {
        return (
                        <List>
              {store.shoppingCartStore.products.map((item) => {
                const { product, modification } = item;
                return <ListItem key={product.id}>
                  <ItemPreview>
                    <img src={product.image} alt={product.name} />
                  </ItemPreview>
                  {modification && <Modified>Изменен</Modified>}
                <ListItemText primary={product.name} secondary="" />
              </ListItem>;
              })}
            </List>
        );
    }
}

export default ShoppingCartList;