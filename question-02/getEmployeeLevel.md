# Question 02 — `getEmployeeLevel`

## Score: 2/10

### ❌ مشکلات کد

کد فعلی:

```js
function getEmployeeLevel(age) {
  if (age < 22) {
    console.log("Junior");
  } else if (age <= 28 && age >= 22) {
    console.log("Mid");
  } else if (age > 28) [console.log("Senior")];
}

age(24);
```

**1. استفاده از `[]` به جای `{}`**

در این قسمت:

```js
else if (age > 28)[
```

برای بدنه‌ی `if` باید از `{}` استفاده شود:

```js
else if (age > 28) {
```

استفاده از `[]` باعث **Syntax Error** می‌شود.

**2. تابع اشتباه فراخوانی شده است.**

این خط:

```js
age(24);
```

اشتباه است، چون `age` تابع نیست؛ پارامتر تابع است.

باید خود `getEmployeeLevel` را فراخوانی کنیم:

```js
getEmployeeLevel(24);
```

**3. بهتر است نتیجه از تابع `return` شود.**

به جای اینکه داخل تابع `console.log` کنیم، مقدار موردنظر را `return` می‌کنیم و هنگام تست آن را `console.log` می‌کنیم.

### ✅ کد صحیح

```js
function getEmployeeLevel(age) {
  if (age < 22) {
    return "Junior";
  }

  if (age <= 28) {
    return "Mid";
  }

  return "Senior";
}

console.log(getEmployeeLevel(24));
```

نکته: بعد از بررسی `age < 22`، در شرط دوم دیگر نیازی به `age >= 22` نیست؛ چون اگر برنامه به شرط دوم برسد، مشخص است که سن حداقل ۲۲ سال است.
