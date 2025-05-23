import * as Yup from "yup";

// model CartItem {
//   id          String   @id @default(cuid())
//   cartId      String
//   cart        Cart     @relation(fields: [cartId], references: [id], onDelete: Cascade)
//   tourId      Int
//   tour        Tour     @relation(fields: [tourId], references: [id])
//   date        DateTime // Selected tour date
//   adults      Int      @default(1)
//   children    Int      @default(0)
//   infants     Int      @default(0)
//   adultPrice  Float // Store price at time of adding to cart
//   childPrice  Float // Store price at time of adding to cart
//   infantPrice Float // Store price at time of adding to cart
//   totalPrice  Float // Calculated price based on quantities
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt

export const cartItemSchema = Yup.object().shape({
  tourId: Yup.number().required("Tour ID is required"),
  date: Yup.date().required("Date is required"),
  adults: Yup.number().min(1, "At least 1 adult is required").default(1),
  children: Yup.number().min(0, "Children cannot be negative").default(0),
  infants: Yup.number().min(0, "Infants cannot be negative").default(0),
});
