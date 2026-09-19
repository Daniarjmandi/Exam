# Question 07 — `getCompanyReport`

## Score: 6/10

### ❌ مشکلات کد

کد شما در بخش محاسبه‌ی تعداد کارمندان فعال، غیرفعال و مجموع حقوق، **منطق کلی درستی دارد**.

مثلاً این بخش:

```js
for (let i = 0; employees.length > i; i++) {
  if (employees[i].isActive === true) {
    isemployeeactive = isemployeeactive + 1;
  }

  if (employees[i].isActive === false) {
    isemployeenotactive = isemployeenotactive + 1;
  }
}
```

منطق شمارش را درست انجام می‌دهد.

اما چند مورد باید اصلاح شود:

**1. تابع نباید به متغیر بیرونی `employees` وابسته باشد.**

بهتر است آرایه به عنوان پارامتر وارد تابع شود:

```js
function getCompanyReport(employees)
```

**2. `totalEmployees` محاسبه نشده است.**

تعداد کل کارمندان را می‌توان با:

```js
employees.length;
```

به دست آورد.

**3. نتیجه باید `return` شود.**

طبق صورت سؤال، تابع باید یک object شامل گزارش شرکت برگرداند، نه اینکه فقط چند مقدار را `console.log` کند.

**4. فقط سه مقدار چاپ شده‌اند.**

در حالی که خروجی موردنظر شامل چهار مقدار است:

```js
{
  (totalEmployees, activeEmployees, inactiveEmployees, totalSalary);
}
```

**5. می‌توان منطق را ساده‌تر کرد.**

به جای دو `if` جداگانه، چون یک کارمند یا active است یا inactive، می‌توان از `else` استفاده کرد.

### ✅ کد صحیح

```js
function getCompanyReport(employees) {
  let activeEmployees = 0;
  let inactiveEmployees = 0;
  let totalSalary = 0;

  for (const employee of employees) {
    if (employee.isActive === true) {
      activeEmployees++;
    } else {
      inactiveEmployees++;
    }

    totalSalary += employee.salary;
  }

  return {
    totalEmployees: employees.length,
    activeEmployees,
    inactiveEmployees,
    totalSalary,
  };
}

console.log(
  getCompanyReport([
    { id: 1, name: "Ali", salary: 25000000, isActive: true },
    { id: 2, name: "Sara", salary: 32000000, isActive: true },
    { id: 3, name: "Reza", salary: 18000000, isActive: false },
  ]),
);
```

### نکته

این سؤال نسبت به سؤالات قبلی وضعیت بهتری دارد؛ چون **منطق loop و محاسبات اصلی را درست پیاده کرده‌اید**، اما ساختار تابع، ورودی/خروجی و شکل خروجی موردنظر کامل رعایت نشده است.
