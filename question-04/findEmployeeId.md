# Question 04 — `findEmployeeById`

## Score: 0/10

### ❌ مشکلات کد

کد فعلی:

```js
const employees = [
  {
    id: 1,
    name: "Ali",
    department: "Frontend",
  },
  {
    id: 2,
    name: "Sara",
    department: "Backend",
  },
  {
    id: 3,
    name: "Reza",
    department: "Frontend",
  },
];

function getid(){

  for (let id = 2 ,
  
}
}
```

**1. تابع کامل نشده و Syntax Error دارد.**

حلقه‌ی `for` ناقص است و کد قابل اجرا نیست.

**2. نام تابع اشتباه است.**

طبق صورت سؤال، نام تابع باید:

```js
findEmployeeById
```

باشد، نه:

```js
getid
```

**3. تابع باید ورودی دریافت کند.**

باید آرایه‌ی کارمندان و `id` موردنظر را به تابع بدهیم:

```js
function findEmployeeById(employees, id)
```

**4. عملیات جستجو انجام نشده است.**

باید در آرایه‌ی `employees` دنبال کارمندی بگردیم که `id` آن با `id` موردنظر برابر باشد.

**5. نتیجه‌ای `return` نشده است.**

تابع باید کارمند پیدا شده را برگرداند.

### ✅ کد صحیح

```js
function findEmployeeById(employees, id) {
  return employees.find(employee => employee.id === id) ?? null;
}

console.log(
  findEmployeeById(
    [
      { id: 1, name: "Ali", department: "Frontend" },
      { id: 2, name: "Sara", department: "Backend" },
      { id: 3, name: "Reza", department: "Frontend" }
    ],
    2
  )
);
```

نکته: در صورت استفاده از `find` باید بتوانید توضیح دهید که callback زیر چه کاری انجام می‌دهد:

```js
employee => employee.id === id
```

یعنی برای هر employee بررسی می‌کند که آیا `id` آن با `id` موردنظر برابر است یا خیر.
