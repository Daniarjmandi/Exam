# Final Feedback — JavaScript Intern Test

## نمره نهایی: 35/100

### نمره هر بخش

| سؤال        | موضوع                                     |       نمره |
| ----------- | ----------------------------------------- | ---------: |
| Question 01 | Functions / Parameters / Objects / Return |   **2/10** |
| Question 02 | Conditions / Function Call / Syntax       |   **2/10** |
| Question 03 | Functions / Parameters / Objects / Return |   **1/10** |
| Question 04 | Arrays / Find / Functions                 |   **0/10** |
| Question 05 | Arrays / Filter / Callback                |   **1/10** |
| Question 06 | Arrays / Filter / Callback / Parameters   |   **1/10** |
| Question 07 | Loops / Conditions / Object / Calculation |   **6/10** |
| Question 08 | Scope / Scope Chain / Block Scope         |   **8/10** |
| Question 09 | Scope / Shadowing                         |   **9/10** |
| Question 10 | Functions / Objects / Conditions / Return |   **5/10** |
| **Total**   |                                           | **35/100** |

---

# نقاط قوت

## 1. درک نسبتاً خوب از Scope

در سؤال‌های ۸ و ۹ عملکرد خوبی وجود داشت.

مفاهیمی مثل:

- Global Scope
- Function Scope
- Block Scope
- Shadowing

تا حد زیادی درست درک شده بودند.

خروجی سؤال ۹ نیز کاملاً درست تشخیص داده شده بود.

---

## 2. توانایی استفاده از Loop

در سؤال ۷، منطق اصلی loop به درستی پیاده‌سازی شده بود.

برای مثال توانسته شد:

- تعداد کارمندان فعال محاسبه شود.
- تعداد کارمندان غیرفعال محاسبه شود.
- مجموع حقوق محاسبه شود.

این نشان می‌دهد که منطق پایه‌ی `for` و کار با آرایه‌ها تا حدی قابل استفاده است.

---

## 3. درک پایه‌ای از شرط‌ها

در بخش‌هایی از کد از:

```js
if
else if
```

به شکل قابل قبول استفاده شده بود.

همچنین مفهوم بررسی `isActive` و دسته‌بندی بر اساس `age` تا حدی درک شده است.

---

# نقاط نیاز به بهبود

## 1. Function Parameters

یکی از پرتکرارترین مشکلات این تست، عدم درک کامل نحوه‌ی دریافت اطلاعات توسط تابع بود.

در چند سؤال، تابع به جای دریافت اطلاعات به عنوان پارامتر، به متغیرهای بیرونی یا خود تابع وابسته شده بود.

مثلاً:

```js
function calculateSalary() {
  // ...
}
```

در حالی که باید:

```js
function calculateSalary(employee) {
  // ...
}
```

باشد.

این موضوع در سؤال‌های ۱، ۳، ۷ و ۱۰ دیده شد.

---

## 2. تفاوت Function و Object

در چند قسمت تابع با آبجکت اشتباه گرفته شده بود.

مثلاً:

```js
calculateSalary.salary;
```

یا:

```js
getEmployeeStatus.isActive;
```

در حالی که `calculateSalary` و `getEmployeeStatus` اسم تابع هستند.

اگر اطلاعات کارمند را داشته باشیم:

```js
const employee = {
  name: "Ali",
  salary: 25000000,
  isActive: true,
};
```

باید از:

```js
employee.salary;
employee.isActive;
```

استفاده کنیم.

---

## 3. Return و Console.log

در چند سؤال، `console.log` با `return` اشتباه گرفته شده بود.

این دو کاربرد متفاوتی دارند.

```js
function add(a, b) {
  return a + b;
}
```

تابع یک مقدار را به caller برمی‌گرداند.

اما:

```js
function add(a, b) {
  console.log(a + b);
}
```

فقط مقدار را چاپ می‌کند و نتیجه‌ای برای استفاده‌ی مجدد برنمی‌گرداند.

در این تست، انتظار می‌رفت منطق داخل function با `return` انجام شود و برای تست از:

```js
console.log(functionName(...))
```

استفاده شود.

---

## 4. Array Methods

بخش مهمی که نیاز به تمرین بیشتری دارد:

```js
filter;
find;
```

است.

در سؤال‌های ۴، ۵ و ۶ مشکل اصلی همین قسمت بود.

برای مثال:

```js
employees.filter(employees.isActive);
```

صحیح نیست.

باید برای هر عضو آرایه یک callback داشته باشیم:

```js
employees.filter((employee) => employee.isActive);
```

---

## 5. تفاوت Array و Array Item

این مفهوم باید کاملاً جا بیفتد:

```js
employees;
```

یعنی کل آرایه.

اما:

```js
employee;
```

یعنی یک عضو از آن آرایه.

مثلاً:

```js
employees.filter((employee) => employee.department === "Frontend");
```

اینجا:

```js
employees;
```

آرایه‌ای است که روی آن `filter` اجرا می‌شود.

و:

```js
employee;
```

هر عضو از آرایه است که در هر iteration بررسی می‌شود.

---

## 6. طراحی Function مستقل

تابع بهتر است تا حد امکان به متغیرهای بیرون از خودش وابسته نباشد.

به جای:

```js
const employees = [...];

function getCompanyReport() {
  // استفاده از employees
}
```

بهتر است:

```js
function getCompanyReport(employees) {
  // استفاده از employees
}
```

این باعث می‌شود function قابل استفاده و تست‌پذیر باشد.

---

# بخش‌هایی که نیاز به تمرین بیشتری دارند

بر اساس عملکرد این تست، اولویت تمرین‌ها:

### Priority 1 — Functions

- Parameters
- Arguments
- Return
- Function Call
- تفاوت Function و Object

### Priority 2 — Arrays

- Array
- Array Item
- `filter`
- `find`
- Callback Function

### Priority 3 — Objects

- دسترسی به property
- تغییر property
- ساخت object جدید
- استفاده از object به عنوان ورودی function

### Priority 4 — Conditions

- `if`
- `else if`
- `else`
- ترتیب شرط‌ها
- مرزهای شرطی مثل `>=` و `>`

### Priority 5 — ترکیب مفاهیم

در نهایت باید بتواند:

```text
Function
+
Parameter
+
Object
+
Array
+
Condition
+
Array Method
+
Return
```

را در یک مسئله‌ی واحد ترکیب کند.

---

# Practice 01 — Function Parameters & Return

## توضیح مبحث

وقتی یک function می‌نویسیم، می‌توانیم اطلاعات موردنیاز آن را به عنوان parameter دریافت کنیم.

مثلاً:

```js
function greet(name) {
  return `Hello ${name}`;
}
```

اینجا:

```js
name;
```

یک parameter است.

وقتی تابع را اجرا می‌کنیم:

```js
greet("Ali");
```

مقدار `"Ali"` وارد `name` می‌شود.

به این مقدار می‌توان argument گفت.

---

## مثال حل‌شده

### مسئله

تابعی بنویس که قیمت یک محصول را دریافت کند و ۱۰٪ تخفیف روی آن اعمال کند.

### حل

```js
function calculateDiscount(price) {
  return price * 0.9;
}

console.log(calculateDiscount(100000));
```

خروجی:

```text
90000
```

نکته مهم:

تابع به جای اینکه خودش یک قیمت مشخص داشته باشد، قیمت را از بیرون دریافت می‌کند.

---

## تمرین

تابعی به نام:

```js
calculateTax;
```

بنویس که قیمت را به عنوان parameter دریافت کند و **۹٪ مالیات** به آن اضافه کند.

مثلاً:

```js
calculateTax(100000);
```

باید خروجی زیر را داشته باشد:

```text
109000
```

شرط:

- از `console.log` داخل function استفاده نکن.
- نتیجه را `return` کن.
- هنگام تست از `console.log` استفاده کن.

---

# Practice 02 — Object به عنوان Parameter

## توضیح مبحث

یک function می‌تواند به جای یک مقدار ساده، یک object دریافت کند.

مثلاً:

```js
function getUserName(user) {
  return user.name;
}
```

و:

```js
const user = {
  name: "Ali",
  age: 24,
};

console.log(getUserName(user));
```

در اینجا:

```js
user.name;
```

به property مربوط به object دسترسی پیدا می‌کند.

---

## مثال حل‌شده

### مسئله

تابعی بنویس که یک کارمند را دریافت کند و اگر فعال بود نام او را برگرداند.

### حل

```js
function getActiveEmployeeName(employee) {
  if (employee.isActive === true) {
    return employee.name;
  }

  return null;
}

console.log(
  getActiveEmployeeName({
    name: "Ali",
    isActive: true,
  }),
);
```

خروجی:

```text
Ali
```

---

## تمرین

تابعی به نام:

```js
getEmployeeSalary;
```

بنویس که یک employee دریافت کند و حقوق او را برگرداند.

ورودی:

```js
{
  name: "Sara",
  salary: 32000000,
  isActive: true
}
```

خروجی:

```text
32000000
```

---

# Practice 03 — Function vs Object

## توضیح مبحث

باید تفاوت این دو را کاملاً درک کنی.

این یک function است:

```js
function getEmployee() {
  // ...
}
```

این یک object است:

```js
const employee = {
  name: "Ali",
  salary: 25000000,
};
```

پس propertyهای employee را باید از خود object بخوانیم:

```js
employee.salary;
```

نه از function:

```js
getEmployee.salary;
```

مگر اینکه عمداً propertyای روی خود function تعریف شده باشد که در این تمرین چنین چیزی نداریم.

---

## مثال حل‌شده

```js
function calculateSalary(employee) {
  return employee.salary * 1.1;
}

const employee = {
  name: "Ali",
  salary: 25000000,
};

console.log(calculateSalary(employee));
```

در اینجا:

```js
calculateSalary;
```

تابع است.

و:

```js
employee;
```

آبجکت است.

---

## تمرین

تابعی به نام:

```js
getEmployeeName;
```

بنویس که یک employee دریافت کند و نام او را برگرداند.

ورودی:

```js
{
  name: "Reza",
  salary: 18000000
}
```

خروجی:

```text
Reza
```

دقت کن که نباید بنویسی:

```js
getEmployeeName.name;
```

---

# Practice 04 — Array و Array Item

## توضیح مبحث

فرض کن:

```js
const employees = [{ name: "Ali" }, { name: "Sara" }, { name: "Reza" }];
```

اینجا:

```js
employees;
```

کل آرایه است.

ولی:

```js
employee;
```

می‌تواند یک عضو از این آرایه باشد.

مثلاً در یک loop:

```js
for (const employee of employees) {
  console.log(employee.name);
}
```

در هر بار اجرای loop، `employee` یک کارمند متفاوت است.

---

## مثال حل‌شده

می‌خواهیم نام تمام کارمندان را چاپ کنیم:

```js
const employees = [{ name: "Ali" }, { name: "Sara" }, { name: "Reza" }];

for (const employee of employees) {
  console.log(employee.name);
}
```

خروجی:

```text
Ali
Sara
Reza
```

---

## تمرین

آرایه‌ی زیر را داریم:

```js
const products = [
  { name: "Laptop", price: 50000000 },
  { name: "Mouse", price: 2000000 },
  { name: "Keyboard", price: 4000000 },
];
```

با استفاده از `for...of` قیمت تمام محصولات را چاپ کن.

خروجی باید:

```text
50000000
2000000
4000000
```

باشد.

---

# Practice 05 — filter و Callback

## توضیح مبحث

`filter` برای گرفتن تعدادی از اعضای یک آرایه استفاده می‌شود.

مثلاً:

```js
const numbers = [1, 2, 3, 4, 5];
```

اگر فقط اعداد بزرگ‌تر از ۳ را بخواهیم:

```js
const result = numbers.filter((number) => number > 3);
```

خروجی:

```js
[4, 5];
```

قسمت:

```js
(number) => number > 3;
```

یک callback است.

`filter` این callback را برای هر عضو آرایه اجرا می‌کند.

---

## مثال حل‌شده

می‌خواهیم فقط کارمندان فعال را پیدا کنیم:

```js
const employees = [
  { name: "Ali", isActive: true },
  { name: "Sara", isActive: false },
  { name: "Reza", isActive: true },
];

const activeEmployees = employees.filter(
  (employee) => employee.isActive === true,
);

console.log(activeEmployees);
```

خروجی:

```js
[
  { name: "Ali", isActive: true },
  { name: "Reza", isActive: true },
];
```

---

## تمرین

آرایه‌ی زیر را داریم:

```js
const products = [
  { name: "Laptop", price: 50000000 },
  { name: "Mouse", price: 2000000 },
  { name: "Keyboard", price: 4000000 },
  { name: "Monitor", price: 15000000 },
];
```

با استفاده از `filter` فقط محصولاتی را برگردان که قیمتشان بیشتر از:

```text
10,000,000
```

است.

خروجی باید شامل:

```text
Laptop
Monitor
```

باشد.

---

# Practice 06 — find

## توضیح مبحث

`find` برای پیدا کردن **اولین عضو** یک آرایه که شرط موردنظر را داشته باشد استفاده می‌شود.

مثلاً:

```js
const numbers = [10, 20, 30];

const result = numbers.find((number) => number === 20);

console.log(result);
```

خروجی:

```text
20
```

---

## مثال حل‌شده

```js
const employees = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Reza" },
];

function findEmployeeById(employees, id) {
  return employees.find((employee) => employee.id === id);
}

console.log(findEmployeeById(employees, 2));
```

خروجی:

```js
{
  id: 2,
  name: "Sara"
}
```

---

## تمرین

آرایه‌ی زیر را داریم:

```js
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" },
];
```

تابعی به نام:

```js
findProductById;
```

بنویس که:

- آرایه‌ی products را دریافت کند.
- یک `id` دریافت کند.
- محصول مربوط به آن id را با استفاده از `find` برگرداند.

مثلاً:

```js
findProductById(products, 3);
```

باید:

```js
{
  id: 3,
  name: "Keyboard"
}
```

را برگرداند.

---

# Practice 07 — Conditions و مرزهای شرط

## توضیح مبحث

در شرط‌ها باید به تفاوت این عملگرها دقت کرد:

```js
>
>=
<
<=
===
```

مثلاً:

```js
age > 22;
```

یعنی فقط بیشتر از ۲۲.

اما:

```js
age >= 22;
```

یعنی ۲۲ و بیشتر.

این تفاوت در سؤال ۱۰ باعث شد سن ۲۲ در هیچ دسته‌ای قرار نگیرد.

---

## مثال حل‌شده

می‌خواهیم سطح کارمند را بر اساس سن مشخص کنیم:

```js
function getLevel(age) {
  if (age < 22) {
    return "Junior";
  }

  if (age <= 28) {
    return "Mid";
  }

  return "Senior";
}
```

نتیجه:

```text
21 → Junior
22 → Mid
24 → Mid
28 → Mid
29 → Senior
```

---

## تمرین

تابعی به نام:

```js
getDiscount;
```

بنویس.

اگر قیمت محصول:

- کمتر از 1,000,000 بود → `"No Discount"`
- از 1,000,000 تا 5,000,000 بود → `"10%"`
- بیشتر از 5,000,000 بود → `"20%"`

مثلاً:

```js
getDiscount(500000);
```

خروجی:

```text
No Discount
```

و:

```js
getDiscount(3000000);
```

خروجی:

```text
10%
```

و:

```js
getDiscount(7000000);
```

خروجی:

```text
20%
```

---

# Practice 08 — ساخت Object و Return

## توضیح مبحث

گاهی function باید چند نتیجه را با هم برگرداند.

در این حالت می‌توانیم یک object بسازیم:

```js
function getUserInfo(user) {
  return {
    name: user.name,
    age: user.age,
  };
}
```

این روش بهتر از این است که چند مقدار را جداگانه `console.log` کنیم.

---

## مثال حل‌شده

```js
function getProductSummary(product) {
  return {
    name: product.name,
    price: product.price,
    available: product.stock > 0,
  };
}

console.log(
  getProductSummary({
    name: "Laptop",
    price: 50000000,
    stock: 3,
  }),
);
```

خروجی:

```js
{
  name: "Laptop",
  price: 50000000,
  available: true
}
```

---

## تمرین

تابعی به نام:

```js
getUserSummary;
```

بنویس.

ورودی:

```js
{
  name: "Ali",
  age: 24,
  isActive: true
}
```

خروجی باید:

```js
{
  name: "Ali",
  age: 24,
  status: "Active"
}
```

باشد.

اگر:

```js
isActive: false;
```

بود، مقدار `status` باید:

```text
"Inactive"
```

باشد.

---

# Practice 09 — ترکیبی

بعد از انجام تمرین‌های بالا، این مسئله را حل کن.

## مسئله

آرایه‌ی زیر را داریم:

```js
const employees = [
  {
    id: 1,
    name: "Ali",
    age: 24,
    department: "Frontend",
    salary: 25000000,
    isActive: true,
  },
  {
    id: 2,
    name: "Sara",
    age: 30,
    department: "Backend",
    salary: 32000000,
    isActive: false,
  },
  {
    id: 3,
    name: "Reza",
    age: 21,
    department: "Frontend",
    salary: 18000000,
    isActive: true,
  },
];
```

تابعی به نام:

```js
getActiveEmployeesSummary;
```

بنویس که:

1. آرایه‌ی employees را دریافت کند.
2. فقط کارمندان فعال را پیدا کند.
3. برای هر کارمند این اطلاعات را ایجاد کند:
   - `name`
   - `department`
   - `level`
   - `salary`

4. level را بر اساس سن تعیین کند:
   - کمتر از 22 → Junior
   - 22 تا 28 → Mid
   - بیشتر از 28 → Senior

5. در نهایت یک آرایه‌ی جدید `return` کند.

### خروجی مورد انتظار

```js
[
  {
    name: "Ali",
    department: "Frontend",
    level: "Mid",
    salary: 25000000,
  },
  {
    name: "Reza",
    department: "Frontend",
    level: "Junior",
    salary: 18000000,
  },
];
```

### محدودیت

در این تمرین از این موارد استفاده کن:

```js
function
filter
map
if / else
return
object
```

و حتماً بتوانی توضیح بدهی که هرکدام چه کاری انجام می‌دهند.

---

# هدف تمرین‌ها

هدف این تمرین‌ها این نیست که فقط کد صحیح را حفظ کنی.

بعد از انجام آن‌ها باید بتوانی این مسیر را بدون کمک طی کنی:

```text
Input
  ↓
Function Parameter
  ↓
Object / Array
  ↓
Condition / Array Method
  ↓
Processing
  ↓
Return
  ↓
Console.log برای تست
```

مهم‌ترین مواردی که باید قبل از تست بعدی کاملاً مسلط شوند:

1. Function Parameters
2. Arguments
3. Return
4. Object Properties
5. تفاوت Object و Function
6. Array و Array Item
7. Callback Function
8. filter
9. find
10. ساخت Object جدید و Return کردن آن
11. شرط‌ها و مرزهای `>`, `>=`, `<`, `<=`
