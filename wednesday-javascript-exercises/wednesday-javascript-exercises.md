# JavaScript Practice 🚀

سلام 👋

در این تمرین‌ها می‌خواهیم با JavaScript چند برنامه کوچک بسازیم.

### قوانین

- `var` استفاده نکن.
- از `const` و `let` استفاده کن.
- از کتابخانه استفاده نکن.
- کدها را ساده بنویس.
- برای هر قسمت چند بار کدت را تست کن.
- اطلاعات اصلی را تغییر نده.
- اگر جایی سخت بود، مسئله را به قسمت‌های کوچک‌تر تقسیم کن.

---

# تمرین ۱ — فروشگاه 🛒

ما یک فروشگاه داریم:

```js
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 3 },
  { id: 2, name: "Mouse", price: 2000, stock: 10 },
  { id: 3, name: "Keyboard", price: 5000, stock: 0 },
];
```

### 1. پیدا کردن محصول

تابع زیر را بنویس:

```js
getProductById(products, id);
```

مثال:

```js
getProductById(products, 2);
```

خروجی:

```js
{ id: 2, name: "Mouse", price: 2000, stock: 10 }
```

اگر محصول نبود:

```js
null;
```

**استفاده شود از:**

- Function
- Array
- Object
- `find`
- `if`

---

### 2. محصولات موجود

تابع:

```js
getAvailableProducts(products);
```

فقط محصولاتی را برگردان که `stock` آنها بیشتر از صفر است.

خروجی:

```js
[
  { id: 1, name: "Laptop", price: 50000, stock: 3 },
  { id: 2, name: "Mouse", price: 2000, stock: 10 },
];
```

**استفاده شود از:**

- Function
- Array
- Object
- `filter`
- شرط

---

### 3. قیمت کل انبار

تابع:

```js
getTotalStockValue(products);
```

قیمت هر محصول:

```text
price × stock
```

خروجی:

```text
170000
```

**استفاده شود از:**

- Function
- Array
- Object
- `reduce`
- محاسبات

---

# تمرین ۲ — سبد خرید 🛍️

محصولات:

```js
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 3 },
  { id: 2, name: "Mouse", price: 2000, stock: 10 },
  { id: 3, name: "Keyboard", price: 5000, stock: 5 },
];

const cart = [];
```

### 1. اضافه کردن محصول

تابع:

```js
addToCart(cart, products, productId);
```

مثال:

```js
addToCart(cart, products, 2);
```

خروجی:

```js
[
  {
    id: 2,
    name: "Mouse",
    price: 2000,
    quantity: 1,
  },
];
```

اگر دوباره Mouse اضافه شود:

```js
quantity: 2;
```

**استفاده شود از:**

- Function
- Array
- Object
- `find`
- `if / else`

---

### 2. حذف محصول

تابع:

```js
removeFromCart(cart, productId);
```

مثلاً:

```js
removeFromCart(cart, 2);
```

Mouse را حذف کند.

**استفاده شود از:**

- Function
- Array
- `filter`

---

### 3. قیمت سبد

تابع:

```js
getCartTotal(cart);
```

اگر سبد این باشد:

```js
[
  { id: 1, name: "Laptop", price: 50000, quantity: 2 },
  { id: 2, name: "Mouse", price: 2000, quantity: 3 },
];
```

خروجی:

```text
106000
```

**استفاده شود از:**

- Function
- Object
- Array
- `reduce`
- محاسبات

---

# تمرین ۳ — کاربران 👨‍💻

کاربران:

```js
const users = [
  { id: 1, name: "Ali", age: 16, city: "Tehran", active: true },
  { id: 2, name: "Sara", age: 22, city: "Shiraz", active: true },
  { id: 3, name: "Reza", age: 15, city: "Tehran", active: false },
  { id: 4, name: "Mina", age: 25, city: "Tabriz", active: true },
];
```

### 1. پیدا کردن کاربر

```js
getUserById(users, id);
```

مثال:

```js
getUserById(users, 3);
```

خروجی:

```js
{ id: 3, name: "Reza", age: 15, city: "Tehran", active: false }
```

**استفاده شود از:**

- Function
- Object
- Array
- `find`

---

### 2. کاربران فعال

```js
getActiveUsers(users);
```

فقط کاربرانی که `active` آنها `true` است.

**استفاده شود از:**

- `filter`
- Boolean
- Object
- Array

---

### 3. فقط اسم کاربران

```js
getUserNames(users);
```

خروجی:

```js
["Ali", "Sara", "Reza", "Mina"];
```

**استفاده شود از:**

- `map`
- Array
- Object

---

### 4. مسن‌ترین کاربر

```js
getOldestUser(users);
```

خروجی:

```js
{
  id: 4,
  name: "Mina",
  age: 25,
  city: "Tabriz",
  active: true
}
```

**استفاده شود از:**

- Function
- Object
- Array
- `reduce`
- شرط

---

# تمرین ۴ — سفارش‌ها 📦

کاربران:

```js
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Reza" },
];
```

سفارش‌ها:

```js
const orders = [
  { id: 101, userId: 1, status: "completed", price: 50000 },
  { id: 102, userId: 1, status: "pending", price: 20000 },
  { id: 103, userId: 2, status: "completed", price: 80000 },
  { id: 104, userId: 3, status: "cancelled", price: 30000 },
];
```

### 1. سفارش‌های یک کاربر

```js
getUserOrders(orders, userId);
```

مثال:

```js
getUserOrders(orders, 1);
```

خروجی:

```js
[
  { id: 101, userId: 1, status: "completed", price: 50000 },
  { id: 102, userId: 1, status: "pending", price: 20000 },
];
```

**استفاده شود از:**

- Function
- Array
- Object
- `filter`

---

### 2. سفارش‌های کامل شده

```js
getCompletedOrders(orders);
```

فقط سفارش‌هایی که:

```js
status === "completed";
```

دارند.

**استفاده شود از:**

- `filter`
- شرط
- Object

---

### 3. درآمد فروشگاه

```js
getTotalRevenue(orders);
```

فقط سفارش‌های `completed` را حساب کن.

خروجی:

```text
130000
```

**استفاده شود از:**

- `filter`
- `reduce`
- شرط
- محاسبات

---

### 4. خلاصه کاربر

تابع:

```js
getUserSummary(users, orders, userId);
```

مثال:

```js
getUserSummary(users, orders, 1);
```

خروجی:

```js
{
  id: 1,
  name: "Ali",
  ordersCount: 2,
  totalSpent: 50000
}
```

**استفاده شود از:**

- Function
- چند Array
- Object
- `find`
- `filter`
- `reduce`

---

# تمرین ۵ — جستجوی محصولات 🔎

محصولات:

```js
const products = [
  {
    id: 1,
    name: "MacBook Pro",
    category: "laptop",
    price: 80000,
    rating: 5,
    stock: 3,
  },
  {
    id: 2,
    name: "MacBook Air",
    category: "laptop",
    price: 60000,
    rating: 4,
    stock: 5,
  },
  {
    id: 3,
    name: "iPhone 15",
    category: "mobile",
    price: 70000,
    rating: 5,
    stock: 0,
  },
  {
    id: 4,
    name: "Samsung S24",
    category: "mobile",
    price: 50000,
    rating: 4,
    stock: 4,
  },
];
```

تابع اصلی:

```js
searchProducts(products, options);
```

---

### 1. جستجو با اسم

```js
searchProducts(products, {
  search: "MacBook",
});
```

خروجی:

```js
[
  {
    id: 1,
    name: "MacBook Pro",
    category: "laptop",
    price: 80000,
    rating: 5,
    stock: 3,
  },
  {
    id: 2,
    name: "MacBook Air",
    category: "laptop",
    price: 60000,
    rating: 4,
    stock: 5,
  },
];
```

**استفاده شود از:**

- String
- `includes`
- `filter`
- Function
- Object

---

### 2. جستجو با دسته‌بندی

```js
searchProducts(products, {
  category: "mobile",
});
```

فقط موبایل‌ها را برگردان.

**استفاده شود از:**

- `filter`
- Object
- شرط

---

### 3. فقط محصولات موجود

```js
searchProducts(products, {
  onlyAvailable: true,
});
```

فقط محصولاتی که:

```js
stock > 0;
```

دارند.

**استفاده شود از:**

- `filter`
- شرط
- Boolean

---

### 4. فیلتر قیمت

```js
searchProducts(products, {
  minPrice: 50000,
  maxPrice: 70000,
});
```

محصولاتی را برگردان که قیمتشان بین `50000` و `70000` باشد.

**استفاده شود از:**

- Number
- شرط
- `filter`
- `&&`

---

### 5. ترکیب چند فیلتر

مثلاً:

```js
searchProducts(products, {
  category: "laptop",
  minPrice: 50000,
  maxPrice: 70000,
  onlyAvailable: true,
});
```

خروجی:

```js
[
  {
    id: 2,
    name: "MacBook Air",
    category: "laptop",
    price: 60000,
    rating: 4,
    stock: 5,
  },
];
```

**استفاده شود از:**

- Object
- Function
- `filter`
- `&&`
- شرط‌ها
- چند شرط همزمان

---

### 6. مرتب کردن

دو گزینه اضافه کن:

```js
sortBy;
sortOrder;
```

مثلاً:

```js
searchProducts(products, {
  sortBy: "price",
  sortOrder: "asc",
});
```

یعنی ارزان‌ترین محصول اول باشد.

و:

```js
searchProducts(products, {
  sortBy: "price",
  sortOrder: "desc",
});
```

یعنی گران‌ترین محصول اول باشد.

این مرتب‌سازی برای این موارد باید کار کند:

```text
price
rating
name
```

**استفاده شود از:**

- `sort`
- Function
- Callback
- شرط
- Number
- String

---

# مباحثی که در این ۵ تمرین باید تمرین شوند

در پایان این تمرین‌ها باید این موارد را بلد باشی:

### پایه

```text
const
let

String
Number
Boolean

Array
Object
```

### شرط

```text
if
else

===
!==
>
<
>=
<=

&&
||
!
```

### Function

```text
function
arrow function
parameter
argument
return
```

### Array Methods

```text
map
filter
find
reduce
sort
includes
```

### مفاهیم مهم

```text
Array of Objects
کار با Object
کار با چند Array
تبدیل داده‌ها
جستجو
فیلتر
مرتب‌سازی
محاسبات
ترکیب چند شرط
```

## نکته آخر

لازم نیست همه چیز را حفظ کنی.

اگر مثلاً نمی‌دانی `reduce` چطور کار می‌کند، اول مفهوم مسئله را بفهم، بعد درباره همان بخش جستجو و یادگیری کن.

هدف اصلی این تمرین‌ها این است که یاد بگیری:

**یک مسئله را به چند قسمت کوچک تقسیم کنی و با JavaScript حلش کنی. 🚀**
