# Question 05 — `getActiveEmployees`

## Score: 1/10

### ❌ مشکلات کد

کد فعلی:

```js
const employees = [
  { id: 1, name: "Ali", isActive: true },
  { id: 2, name: "Sara", isActive: false },
  { id: 3, name: "Reza", isActive: true },
];

employees.filter(employees.isActive);

console.log(employees);
```

**1. `filter` باید یک callback function دریافت کند.**

این قسمت:

```js
employees.filter(employees.isActive);
```

اشتباه است.

`employees` یک آرایه است و `isActive` مربوط به هر employee داخل آرایه است.

باید برای هر عضو آرایه بررسی کنیم:

```js
employee.isActive;
```

**2. نتیجه‌ی `filter` استفاده نشده است.**

`filter` یک آرایه‌ی جدید برمی‌گرداند، اما نتیجه‌ی آن در کد فعلی جایی ذخیره یا `return` نشده است.

**3. آرایه‌ی اصلی را `console.log` کرده‌اید.**

این خط:

```js
console.log(employees);
```

تمام کارمندان را نمایش می‌دهد، نه فقط کارمندان فعال را.

**4. تابع موردنظر سؤال ایجاد نشده است.**

باید منطق داخل تابع `getActiveEmployees` قرار بگیرد.

### ✅ کد صحیح

```js
function getActiveEmployees(employees) {
  return employees.filter((employee) => employee.isActive === true);
}

const employees = [
  { id: 1, name: "Ali", isActive: true },
  { id: 2, name: "Sara", isActive: false },
  { id: 3, name: "Reza", isActive: true },
];

console.log(getActiveEmployees(employees));
```

نکته مهم: باید تفاوت بین **آرایه `employees`** و **هر عضو آرایه `employee`** را درک کنید.

```js
employees; // کل آرایه

employee; // یک کارمند از داخل آرایه
```
