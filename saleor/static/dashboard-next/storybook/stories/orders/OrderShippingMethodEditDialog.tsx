import { storiesOf } from "@storybook/react";
import * as React from "react";

import OrderShippingMethodEditDialog from "../../../orders/components/OrderShippingMethodEditDialog";
import {
  order as orderFixture,
  shippingMethods
} from "../../../orders/fixtures";
import Decorator from "../../Decorator";

const order = orderFixture("");

storiesOf("Orders / OrderShippingMethodEditDialog", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <OrderShippingMethodEditDialog
      onChange={undefined}
      onClose={undefined}
      onConfirm={undefined}
      open={true}
      shippingMethod={order.shippingMethod.id}
      shippingMethods={shippingMethods}
    />
  ));
