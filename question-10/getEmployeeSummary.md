# Question 10 — `getEmployeeSummary`

## Score: 5/10

### ❌ مشکلات کد

کد فعلی:

```js
let employee = {
  name: "ali",
  age: 25,
  isActive: true,
  salary: 25000000,
  level: null,
};

export function getEmployeeSummary() {
  if (employee.isActive === true) {
    const x = 1.1 * employee.salary;
    employee.salary = x + employee.salary;
  }

  if (employee.age < 22) {
    employee.level = "Junior";
  } else if (employee.age > 22 && employee.age <= 28) {
    employee.level = "Mid";
  } else if (employee.age > 28) {
    employee.level = "Senior";
  }
}

getEmployeeSummary();

console.log(employee);
```

**1. تابع باید `employee` را به عنوان پارامتر دریافت کند.**

در حال حاضر تابع به یک متغیر خارج از خودش وابسته است:

```js
employee;
```

بهتر است:

```js
function getEmployeeSummary(employee)
```

باشد.

**2. محاسبه حقوق اشتباه است.**

این قسمت:

```js
const x = 1.1 * employee.salary;
employee.salary = x + employee.salary;
```

برای حقوق `25,000,000` ابتدا `x` برابر `27,500,000` می‌شود و سپس دوباره حقوق اصلی به آن اضافه می‌شود.

در نتیجه:

```text
27,500,000 + 25,000,000 = 52,500,000
```

در حالی که باید فقط ۱۰٪ به حقوق اضافه شود:

```js
employee.salary * 1.1;
```

که می‌شود:

```text
27,500,000
```

**3. آبجکت اصلی را تغییر داده‌اید.**

در اینجا:

```js
employee.salary = ...
employee.level = ...
```

آبجکت ورودی mutate می‌شود.

در این سؤال هدف ساختن یک **summary object** جدید و `return` کردن آن است.

**4. `status` اصلاً در خروجی ساخته نشده است.**

باید بر اساس `isActive` مقدار:

```js
"Active";
```

یا:

```js
"Inactive";
```

ساخته شود.

**5. `department` در خروجی وجود ندارد.**

در صورت سؤال، `department` باید در summary قرار بگیرد.

**6. تابع هیچ مقداری `return` نمی‌کند.**

در نهایت باید object موردنظر را برگردانیم.

**7. شرط مربوط به سن ۲۲ سال دقیق نیست.**

این شرط:

```js
employee.age > 22 && employee.age <= 28;
```

سن ۲۲ را پوشش نمی‌دهد.

باید بازه‌ی Mid شامل سن ۲۲ تا ۲۸ باشد.

### ✅ کد صحیح

```js
function getEmployeeSummary(employee) {
  const status = employee.isActive ? "Active" : "Inactive";

  let level;

  if (employee.age < 22) {
    level = "Junior";
  } else if (employee.age <= 28) {
    level = "Mid";
  } else {
    level = "Senior";
  }

  const finalSalary = employee.isActive
    ? employee.salary * 1.1
    : employee.salary;

  return {
    name: employee.name,
    department: employee.department,
    status,
    level,
    finalSalary,
  };
}

console.log(
  getEmployeeSummary({
    id: 1,
    name: "Ali",
    age: 24,
    department: "Frontend",
    salary: 25000000,
    isActive: true,
  }),
);
```

### خروجی مورد انتظار

```js
{
  name: "Ali",
  department: "Frontend",
  status: "Active",
  level: "Mid",
  finalSalary: 27500000
}
```
