# JavaScript Test — Intern

## مباحث آزمون

- JavaScript Basics
- Conditions & Control Flow
- Functions
- Scope
- Objects
- Arrays

---

# قوانین آزمون

1. برای **هر سؤال یک فولدر جداگانه** ایجاد کنید.

2. نام فولدرها باید به ترتیب شماره سؤال باشد:

```text
question-01
question-02
question-03
...
question-10
```

3. داخل هر فولدر، یک فایل JavaScript ایجاد کنید که **نام فایل دقیقاً برابر با نام Function همان سؤال** باشد.

برای مثال:

```text
question-01/
└── getEmployeeStatus.js
```

4. ساختار نهایی پروژه باید به شکل زیر باشد:

```text
javascript-test/
├── question-01/
│   └── getEmployeeStatus.js
├── question-02/
│   └── getEmployeeLevel.js
├── question-03/
│   └── calculateSalary.js
├── question-04/
│   └── findEmployeeById.js
├── question-05/
│   └── getActiveEmployees.js
├── question-06/
│   └── getEmployeesByDepartment.js
├── question-07/
│   └── getCompanyReport.js
├── question-08/
│   └── employeeInfo.js
├── question-09/
│   └── test.js
└── question-10/
    └── getEmployeeSummary.js
```

5. نام Function باید **دقیقاً مطابق نام Function مشخص‌شده در صورت سؤال** باشد.

6. نام فایل JavaScript نیز باید **دقیقاً مطابق نام Function همان سؤال** باشد.

7. برای Functionهای اجرایی، حداقل یک نمونه تست با `console.log()` داخل فایل مربوط به همان سؤال قرار دهید.

مثال:

```js
console.log(getEmployeeLevel(24));
```

8. کد باید خوانا، مرتب و قابل فهم باشد. از نام‌گذاری مناسب برای متغیرها و Functionها استفاده کنید.

9. استفاده از Library، Framework و کدهای آماده مجاز نیست.

10. در صورت استفاده از متدهایی مانند `map`، `filter`، `find` و ...، باید بتوانید دلیل استفاده و نحوه عملکرد آن‌ها را توضیح دهید.

11. در سؤالات مفهومی، پاسخ خود را به صورت Comment در فایل مربوط به همان سؤال بنویسید.

12. کدهای هر سؤال باید در **فولدر مربوط به همان سؤال** قرار داشته باشند و از قرار دادن همه کدها در یک فایل خودداری کنید.

13. استفاده از `var` در این آزمون مجاز نیست. از `let` و `const` استفاده کنید.

14. در پایان، کل پروژه را در یک Repository در GitHub قرار دهید و لینک Repository را تحویل دهید.

### نکته مهم

هدف آزمون فقط رسیدن به خروجی صحیح نیست؛ **منطق حل مسئله، ساختار کد، خوانایی و درک مفاهیم JavaScript** نیز بررسی خواهد شد.

---

# سؤال ۱ — بررسی وضعیت کارمند

## صورت مسئله

تابعی به نام `getEmployeeStatus` بنویسید که اطلاعات یک کارمند را دریافت کند و بر اساس وضعیت فعال یا غیرفعال بودن او، وضعیت کارمند را مشخص کند.

اگر `isActive` برابر `true` باشد، کارمند فعال است و در غیر این صورت غیرفعال است.

## ورودی

یک Object به شکل زیر:

```js
{
  name: "Ali",
  age: 24,
  department: "Frontend",
  salary: 25000000,
  isActive: true
}
```

## خروجی

اگر کارمند فعال باشد:

```text
Ali is active
```

اگر کارمند غیرفعال باشد:

```text
Ali is inactive
```

## مثال

```js
getEmployeeStatus({
  name: "Ali",
  age: 24,
  department: "Frontend",
  salary: 25000000,
  isActive: true,
});
```

خروجی:

```text
Ali is active
```

---

# سؤال ۲ — تعیین سطح کارمند

## صورت مسئله

تابعی به نام `getEmployeeLevel` بنویسید که سن یک کارمند را دریافت کند و بر اساس سن، سطح او را مشخص کند.

قوانین:

- کمتر از 22 سال → `Junior`
- از 22 تا 28 سال → `Mid`
- بیشتر از 28 سال → `Senior`

## ورودی

یک عدد که نشان‌دهنده سن کارمند است.

```js
24;
```

## خروجی

یک String که سطح کارمند را مشخص می‌کند.

```text
Mid
```

## مثال

```js
getEmployeeLevel(31);
```

خروجی:

```text
Senior
```

---

# سؤال ۳ — محاسبه حقوق

## صورت مسئله

تابعی به نام `calculateSalary` بنویسید که اطلاعات یک کارمند را دریافت کند و حقوق نهایی او را محاسبه کند.

اگر کارمند فعال باشد، باید **10 درصد افزایش حقوق** دریافت کند.

اگر کارمند غیرفعال باشد، حقوق او بدون تغییر باقی بماند.

## ورودی

یک Object شامل اطلاعات کارمند:

```js
{
  name: "Ali",
  salary: 25000000,
  isActive: true
}
```

## خروجی

حقوق نهایی کارمند به صورت Number.

```text
27500000
```

## مثال

```js
calculateSalary({
  name: "Ali",
  salary: 25000000,
  isActive: true,
});
```

خروجی:

```text
27500000
```

---

# سؤال ۴ — پیدا کردن کارمند

## صورت مسئله

تابعی به نام `findEmployeeById` بنویسید که یک آرایه از کارمندان و یک `id` دریافت کند و کارمندی که `id` آن برابر با ID داده‌شده است را پیدا کند.

اگر کارمندی با آن ID وجود نداشت، مقدار `null` برگردانید.

## ورودی

آرایه کارمندان:

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
```

و یک ID:

```text
2
```

## خروجی

```js
{
  id: 2,
  name: "Sara",
  department: "Backend"
}
```

اگر ID وجود نداشته باشد:

```js
null;
```

---

# سؤال ۵ — پیدا کردن کارمندان فعال

## صورت مسئله

تابعی به نام `getActiveEmployees` بنویسید که آرایه‌ای از کارمندان را دریافت کند و فقط کارمندانی را برگرداند که فعال هستند.

آرایه اصلی نباید تغییر کند.

## ورودی

```js
const employees = [
  {
    id: 1,
    name: "Ali",
    isActive: true,
  },
  {
    id: 2,
    name: "Sara",
    isActive: false,
  },
  {
    id: 3,
    name: "Reza",
    isActive: true,
  },
];
```

## خروجی

یک Array جدید شامل کارمندان فعال:

```js
[
  {
    id: 1,
    name: "Ali",
    isActive: true,
  },
  {
    id: 3,
    name: "Reza",
    isActive: true,
  },
];
```

---

# سؤال ۶ — پیدا کردن کارمندان یک دپارتمان

## صورت مسئله

تابعی به نام `getEmployeesByDepartment` بنویسید که آرایه کارمندان و نام یک دپارتمان را دریافت کند و تمام کارمندانی که در آن دپارتمان کار می‌کنند را برگرداند.

## ورودی

آرایه:

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
```

دپارتمان موردنظر:

```text
Frontend
```

## خروجی

```js
[
  {
    id: 1,
    name: "Ali",
    department: "Frontend",
  },
  {
    id: 3,
    name: "Reza",
    department: "Frontend",
  },
];
```

---

# سؤال ۷ — گزارش شرکت

## صورت مسئله

تابعی به نام `getCompanyReport` بنویسید که لیست تمام کارمندان شرکت را دریافت کند و یک گزارش کلی از وضعیت شرکت ایجاد کند.

گزارش باید شامل موارد زیر باشد:

- تعداد کل کارمندان
- تعداد کارمندان فعال
- تعداد کارمندان غیرفعال
- مجموع حقوق تمام کارمندان

تمام مقادیر باید **به صورت داینامیک از روی آرایه محاسبه شوند** و نباید به صورت دستی داخل خروجی نوشته شوند.

## ورودی

```js
const employees = [
  {
    id: 1,
    name: "Ali",
    salary: 25000000,
    isActive: true,
  },
  {
    id: 2,
    name: "Sara",
    salary: 32000000,
    isActive: true,
  },
  {
    id: 3,
    name: "Reza",
    salary: 18000000,
    isActive: false,
  },
];
```

## خروجی

```js
{
  totalEmployees: 3,
  activeEmployees: 2,
  inactiveEmployees: 1,
  totalSalary: 75000000
}
```

---

# سؤال ۸ — بررسی Scope

## صورت مسئله

کد زیر را بررسی کنید و **بدون اجرای کد** به سؤالات پاسخ دهید.

هدف این سؤال بررسی مفاهیم زیر است:

- Global Scope
- Function Scope
- Block Scope
- Scope Chain

```js
let companyName = "Tech Company";

function employeeInfo() {
  let employeeName = "Ali";

  console.log(companyName);
  console.log(employeeName);

  if (true) {
    let department = "Frontend";

    console.log(companyName);
    console.log(employeeName);
    console.log(department);
  }

  console.log(companyName);
  console.log(employeeName);

  // console.log(department);
}

employeeInfo();
```

## ورودی

کد بالا.

## خروجی مورد انتظار

خروجی `console.log`ها را به ترتیب مشخص کنید:

```text
Tech Company
Ali
Tech Company
Ali
Frontend
Tech Company
Ali
```

سپس به سؤالات زیر پاسخ دهید:

### 1) Global Scope چیست؟

توضیح دهید `companyName` در چه Scopeای قرار دارد و چرا داخل `employeeInfo` قابل دسترسی است.

### 2) Function Scope چیست؟

توضیح دهید `employeeName` در چه Scopeای قرار دارد و در کدام قسمت‌های `employeeInfo` قابل دسترسی است.

### 3) Block Scope چیست؟

توضیح دهید `department` در چه Scopeای قرار دارد.

### 4) چرا `department` خارج از `if` قابل دسترسی نیست؟

اگر خط زیر را از حالت Comment خارج کنیم:

```js
console.log(department);
```

چه اتفاقی می‌افتد؟

### 5) Scope Chain چیست؟

توضیح دهید JavaScript هنگام دسترسی به `companyName` داخل `if` چگونه Scopeهای مختلف را بررسی می‌کند.

### 6) یک تغییر ایجاد کنید

کد را طوری تغییر دهید که `department` خارج از `if` نیز قابل دسترسی باشد.

> توجه: برای این کار نباید از `var` استفاده کنید.

همچنین توضیح دهید چرا تغییر Scope متغیر باعث می‌شود رفتار آن تغییر کند.

---

# سؤال ۹ — بررسی Scope و Shadowing

## صورت مسئله

کد زیر را **بدون اجرا** بررسی کنید و خروجی آن را مشخص کنید.

```js
let x = 10;

function test() {
  let x = 20;

  if (true) {
    let x = 30;
    console.log(x);
  }

  console.log(x);
}

test();

console.log(x);
```

## ورودی

کد بالا.

## خروجی

خروجی `console.log`ها را به ترتیب بنویسید:

```text
?
?
?
```

سپس توضیح دهید چرا هر مقدار چاپ شده است.

همچنین توضیح دهید مفهوم **Shadowing** در این مثال چیست.

---

# سؤال ۱۰ — چالش نهایی

## صورت مسئله

تابعی به نام `getEmployeeSummary` بنویسید که اطلاعات یک کارمند را دریافت کند و یک خلاصه از وضعیت او ایجاد کند.

تابع باید موارد زیر را محاسبه کند:

- نام کارمند
- دپارتمان
- وضعیت فعال یا غیرفعال
- سطح کارمند بر اساس سن
- حقوق نهایی

### قوانین وضعیت

اگر:

```js
isActive === true;
```

باشد:

```text
Active
```

در غیر این صورت:

```text
Inactive
```

### قوانین سطح

- کمتر از 22 → `Junior`
- از 22 تا 28 → `Mid`
- بیشتر از 28 → `Senior`

### قوانین حقوق

اگر کارمند فعال باشد، 10٪ افزایش حقوق دریافت کند.

## ورودی

```js
{
  id: 1,
  name: "Ali",
  age: 24,
  department: "Frontend",
  salary: 25000000,
  isActive: true
}
```

## خروجی

```js
{
  name: "Ali",
  department: "Frontend",
  status: "Active",
  level: "Mid",
  finalSalary: 27500000
}
```

تمام مقادیر خروجی باید بر اساس اطلاعات ورودی محاسبه شوند و نباید برای این کارمند به صورت Hard Code نوشته شوند.

---

# بخش مفهومی

به سؤالات زیر با توضیح کوتاه و با زبان خودتان پاسخ دهید.

## سؤال ۱

تفاوت `let` و `const` چیست؟

همچنین توضیح دهید چرا در JavaScript مدرن معمولاً به جای `var` از `let` و `const` استفاده می‌کنیم.

## سؤال ۲

Scope چیست؟

## سؤال ۳

تفاوت Function Scope و Block Scope چیست؟

## سؤال ۴

تفاوت Object و Array چیست؟

## سؤال ۵

تفاوت `==` و `===` چیست؟

## سؤال ۶

تفاوت `return` و `console.log()` چیست؟

## سؤال ۷

تفاوت `map` و `filter` چیست؟

## سؤال ۸

اگر یک Array را داخل یک Function تغییر دهیم، آیا ممکن است Array اصلی نیز تغییر کند؟ چرا؟

---

# نحوه تحویل

پروژه باید به شکل زیر تحویل داده شود:

```text
javascript-test/
├── question-01/
│   └── getEmployeeStatus.js
├── question-02/
│   └── getEmployeeLevel.js
├── question-03/
│   └── calculateSalary.js
├── question-04/
│   └── findEmployeeById.js
├── question-05/
│   └── getActiveEmployees.js
├── question-06/
│   └── getEmployeesByDepartment.js
├── question-07/
│   └── getCompanyReport.js
├── question-08/
│   └── employeeInfo.js
├── question-09/
│   └── test.js
└── question-10/
    └── getEmployeeSummary.js
```

## موارد نهایی

- نام Functionها باید دقیقاً مطابق صورت سؤال باشد.
- نام فایل هر سؤال باید دقیقاً برابر با نام Function همان سؤال باشد.
- کد باید قابل اجرا باشد.
- کد باید خوانا و مرتب باشد.
- استفاده از `var` مجاز نیست.
- از Library و Framework خارجی استفاده نشود.
- از کدهای آماده استفاده نشود.
- پاسخ سؤالات مفهومی باید داخل فایل مربوط به همان سؤال و به صورت Comment نوشته شود.
- برای Functionهای اجرایی، حداقل یک نمونه تست با `console.log()` در فایل قرار دهید.
- در صورت استفاده از متدهایی مانند `map`، `filter`، `find` و ...، باید بتوانید دلیل استفاده و نحوه عملکرد آن‌ها را توضیح دهید.
- در پایان، کل پروژه را در یک Repository در GitHub قرار دهید و لینک Repository را تحویل دهید.

## هدف آزمون

هدف آزمون فقط رسیدن به خروجی صحیح نیست.

موارد زیر نیز در ارزیابی در نظر گرفته می‌شوند:

- درک مفاهیم JavaScript
- منطق حل مسئله
- نحوه استفاده از Functionها
- درک Scope
- کار با Object و Array
- خوانایی و ساختار کد
- نام‌گذاری مناسب
- توانایی توضیح کد نوشته‌شده
