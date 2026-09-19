# Question 03 — `calculateSalary`

## Score: 1/10

### ❌ مشکلات کد

کد فعلی:

```js
function calculateSalary(){

  const x = 1.1 * calculateSalary.salary

  calculateSalary = x + calculateSalary.salary

}

calculateSalary({
  name: "Ali",
  salary: 25000000,
  isActive: true
})

console.log(calculateSalary)
```

**1. تابع هیچ پارامتری دریافت نمی‌کند.**

باید اطلاعات کارمند را به عنوان ورودی دریافت کنیم:

```js
function calculateSalary(employee)
```

**2. `calculateSalary.salary` اشتباه است.**

`calculateSalary` خود تابع است، نه آبجکت کارمند.

باید از:

```js
employee.salary
```

استفاده شود.

**3. تابع را با مقدار عددی جایگزین کرده‌اید.**

این خط:

```js
calculateSalary = x + calculateSalary.salary
```

باعث می‌شود متغیر `calculateSalary` که ابتدا یک تابع بود، با یک مقدار عددی جایگزین شود.

**4. `isActive` بررسی نشده است.**

طبق صورت سؤال، افزایش حقوق باید برای کارمند فعال انجام شود.

**5. نتیجه `return` نشده است.**

تابع باید مقدار نهایی حقوق را برگرداند.

**6. در انتها خود تابع را `console.log` کرده‌اید.**

باید نتیجه‌ی اجرای تابع را چاپ کنید:

```js
console.log(calculateSalary(employee))
```

### ✅ کد صحیح

```js
function calculateSalary(employee) {
  if (employee.isActive === true) {
    return employee.salary * 1.1;
  }

  return employee.salary;
}

console.log(
  calculateSalary({
    name: "Ali",
    salary: 25000000,
    isActive: true
  })
);
```
