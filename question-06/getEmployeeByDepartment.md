# Question 06 — `getEmployeesByDepartment`

## Score: 1/10

### ❌ مشکلات کد

کد فعلی:

```js
const employees = [
  { id: 1, name: "Ali", department: "Frontend" },
  { id: 2, name: "Sara", department: "Backend" },
  { id: 3, name: "Reza", department: "Frontend" },
];

employees.filter(employees.department === "Frontend");

console.log(employees);
```

**1. `filter` باید یک callback function دریافت کند.**

این قسمت:

```js
employees.filter(employees.department === "Frontend");
```

اشتباه است.

`employees` یک آرایه است و `department` متعلق به هر employee داخل آرایه است.

باید برای هر عضو بررسی کنیم:

```js
employee.department === "Frontend";
```

**2. نتیجه‌ی `filter` استفاده نشده است.**

`filter` یک آرایه‌ی جدید برمی‌گرداند، اما نتیجه‌ی آن در کد فعلی ذخیره یا `return` نشده است.

**3. آرایه‌ی اصلی را `console.log` کرده‌اید.**

این خط:

```js
console.log(employees);
```

تمام کارمندان را نمایش می‌دهد، نه فقط کارمندان بخش Frontend.

**4. تابع موردنظر سؤال ایجاد نشده است.**

باید منطق داخل تابع `getEmployeesByDepartment` قرار بگیرد.

**5. نام دپارتمان نباید hard-code شود.**

بهتر است `"Frontend"` به عنوان پارامتر به تابع داده شود تا تابع برای هر دپارتمانی قابل استفاده باشد.

### ✅ کد صحیح

```js
function getEmployeesByDepartment(employees, department) {
  return employees.filter((employee) => employee.department === department);
}

const employees = [
  { id: 1, name: "Ali", department: "Frontend" },
  { id: 2, name: "Sara", department: "Backend" },
  { id: 3, name: "Reza", department: "Frontend" },
];

console.log(getEmployeesByDepartment(employees, "Frontend"));
```

نکته مهم:

```js
employees;
```

کل آرایه است، اما:

```js
employee;
```

یک عضو از آرایه است. `filter` روی تک‌تک اعضای آرایه اجرا می‌شود.
