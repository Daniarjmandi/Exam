# Question 08 — Scope

## Score: 8/10

### بررسی پاسخ

خروجی‌ای که نوشته شده **صحیح است**:

```text
Tech Company
Ali
Tech Company
Ali
Frontend
Tech Company
Ali
```

همچنین درک کلی شما از Scope مناسب است.

### ❌ مواردی که نیاز به اصلاح دارند

**1. توضیح Global Scope دقیق نیست.**

توضیح شما:

```text
هر چیزی که در global scope قرار داشته باشد در function scope هم قرار می‌گیرد
```

دقیق نیست.

متغیر همچنان در **Global Scope** قرار دارد؛ فقط از داخل Function Scope می‌توان از طریق **Scope Chain** به آن دسترسی پیدا کرد.

توضیح دقیق‌تر:

```js
// companyName در Global Scope قرار دارد.
// تابع employeeInfo می‌تواند از طریق Scope Chain
// به companyName دسترسی پیدا کند.
```

**2. توضیح Scope Chain در پاسخ کامل نشده است.**

Scope Chain یعنی JavaScript برای پیدا کردن یک متغیر، ابتدا Scope فعلی را بررسی می‌کند و اگر متغیر پیدا نشد، Scope والد را بررسی می‌کند و این روند تا Global Scope ادامه پیدا می‌کند.

مثلاً:

```js
let companyName = "Tech Company";

function employeeInfo() {
  let employeeName = "Ali";

  console.log(companyName);
}
```

در اینجا `companyName` داخل Function Scope وجود ندارد، بنابراین JavaScript آن را در Scope والد، یعنی Global Scope، پیدا می‌کند.

**3. دلیل خطای `department` را می‌توان دقیق‌تر توضیح داد.**

`department` داخل یک Block Scope تعریف شده است:

```js
if (true) {
  let department = "Frontend";
}
```

بنابراین خارج از این block قابل دسترسی نیست.

اگر این خط را خارج از `if` اجرا کنیم:

```js
console.log(department);
```

با `ReferenceError` مواجه می‌شویم.

### ✅ پاسخ کامل‌تر

```js
// companyName در Global Scope قرار دارد.
// به همین دلیل از داخل function نیز قابل دسترسی است.
// این دسترسی از طریق Scope Chain انجام می‌شود.

// employeeName در Function Scope قرار دارد.
// بنابراین فقط داخل employeeInfo قابل دسترسی است.

// department در Block Scope مربوط به if قرار دارد.
// بنابراین فقط داخل همان block قابل دسترسی است.

// اگر خارج از block به department دسترسی پیدا کنیم:
//
// console.log(department);
//
// نتیجه ReferenceError خواهد بود.
```

### Scope Chain

```js
// JavaScript ابتدا Scope فعلی را برای پیدا کردن متغیر بررسی می‌کند.
// اگر متغیر پیدا نشد، Scope والد را بررسی می‌کند.
// این روند تا رسیدن به Global Scope ادامه پیدا می‌کند.
```

### تغییر کد بدون استفاده از `var`

برای اینکه `department` خارج از `if` نیز قابل دسترسی باشد، می‌توان آن را در Scope مناسب‌تری تعریف کرد:

```js
let companyName = "Tech Company";

function employeeInfo() {
  let employeeName = "Ali";
  let department = "Frontend";

  console.log(companyName);
  console.log(employeeName);

  if (true) {
    console.log(companyName);
    console.log(employeeName);
    console.log(department);
  }

  console.log(companyName);
  console.log(employeeName);
  console.log(department);
}

employeeInfo();
```
