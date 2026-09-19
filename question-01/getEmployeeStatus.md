# Question 01 — `getEmployeeStatus`

## Score: 2/10

### ❌ مشکلات کد

کد فعلی:

```js
function getEmployeeStatus() {
  if (getEmployeeStatus.isActive === true) {
    console.log("Ali is Active");
  } else if (getEmployeeStatus.isActive === false) {
    console.log("Ali is InActive");
  }
}
```

**1. تابع هیچ پارامتری دریافت نمی‌کند.**

باید اطلاعات کارمند را به تابع بدهیم:

```js
function getEmployeeStatus(employee)
```

**2. `getEmployeeStatus.isActive` اشتباه است.**

`getEmployeeStatus` خودِ تابع است، نه آبجکت کارمند.

باید از پارامتر `employee` استفاده شود:

```js
employee.isActive;
```

**3. نام کارمند به صورت hard-code نوشته شده است.**

این قسمت:

```js
"Ali is Active";
```

باعث می‌شود تابع فقط برای Ali مناسب باشد.

باید از:

```js
employee.name;
```

استفاده شود.

**4. تابع باید نتیجه را `return` کند.**

بهتر است `console.log` برای تست تابع استفاده شود، نه داخل منطق اصلی تابع.

### ✅ کد صحیح

```js
function getEmployeeStatus(employee) {
  if (employee.isActive === true) {
    return `${employee.name} is active`;
  }

  return `${employee.name} is inactive`;
}

console.log(
  getEmployeeStatus({
    name: "Ali",
    age: 24,
    department: "Frontend",
    salary: 25000000,
    isActive: true,
  }),
);
```
