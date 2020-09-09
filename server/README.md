# The Dream Store API

The base url of the API is `https://localhost:4000/`.

## Usage

Use the [request-promise](https://www.npmjs.com/package/request-promise) module to
make requests to this API. Take some time to read their documentation.
(_Note that this module, and the `request` module are deprecated but still very much
relevant and in-use. You can read about it [here](https://github.com/request/request/issues/3142)._)

This API follows the REST principles.

## List of Endpoints

| Method | Endpoint                          | Description                                                                                                                             |
| ------ | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`  | `/hotproducts`               | Returns a random sample containing 50 of the top selling products in the store.                                                                                                     |
| `GET`  | `/brands`       | Returns a list of all brands in the store.                                                                                                       |
| `GET`  | `/products/categories` | Returns a list of all the store categories.                                                                           |
| `GET`  | `/products/product/:id`                 | Returns information on a specified product.   |
| `GET`  | `/products/categories/:id`         | Returns all of the products in a specified category.                                                                    |
| `GET`  | `/brands/brand`         | Returns all of the products made by a specified brand.                                                                    |
| `GET`  | `/bodylocation`         | Returns a list of all the body location filters.                                                                    |
| `POST` | `/purchase`                 | Requests a purchase of the specified items. View [Completing a Purchase](#completing-a-purchase) for more.                                                                                                                    |
| `POST` | `/users`               | Requests or Creates user data with Firebase Authentication. |
| `POST` | `/admin`                 | Validates if a user is an admin.                                                                                                                |

### Completing a Purchase

**In order for a purchase to be completed**:
- The user's data must be provided.
- If the email address is invalid, an error will be returned.
- A valid product ID and quantity must be given.
- If any products are out of stock, an error will be returned.

_Example:_
```
{
  user: {
    personalInfo: {
      email,
      name,
      address,
      postalcode,
      city,
      province,
    },
    shippingDetails: {
      name,
      address,
      postalcode,
      city,
      province,
    },
    paymentInfo: {
      cardNumber,
      expiry,
      cvc,
    },
    orderDetails: {
      itemsPurchased,
      amountPaid,
      datePurchased,
    }
  },
  purchasedItems: {
    productId: 6543,
    quantity: 1,
    itemDetails
  }
}
```

**If all fields are valid**:
- The API will reduce the item stock.
- The user's data will be updated in the database. This includes the information provided in the request, as well as the new order.
- The API will return the purchased items along with a confirmation number.
