
function triangle(value1, type1, value2, type2) {
    console.log("Використання: triangle(value1, type1, value2, type2)");
    console.log("Доступні типи: 'leg' (катет), 'hypotenuse' (гіпотенуза), 'adjacent angle' (прилеглий кут), 'opposite angle' (протилежний кут)");
    var a, b, c, alpha, beta;
    function toRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    function toDegrees(radians) {
        return radians * 180 / Math.PI;
    }
    if (type1 === "leg" && type2 === "leg") {
        a = value1;
        b = value2;
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    }
    else if (type1 === "leg" && type2 === "hypotenuse") {
        a = value1;
        c = value2;
        if (a >= c) {
            console.log("Помилка: катет не може бути більшим або рівним гіпотенузі.");
            return 'failed';
        }
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    }
    else if (type1 === "hypotenuse" && type2 === "leg") {
        c = value1;
        a = value2;
        if (a >= c) {
            console.log("Помилка: катет не може бути більшим або рівним гіпотенузі.");
            return 'failed';
        }
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    }
    else if (type1 === "leg" && type2 === "opposite angle") {
        a = value1;
        alpha = value2;
        if (alpha <= 0 || alpha >= 90) {
            console.log("Помилка: некоректне значення кута.");
            return 'failed';
        }
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        beta = 90 - alpha;
    }
    else if (type1 === "leg" && type2 === "adjacent angle") {
        a = value1;
        beta = value2;
        if (beta <= 0 || beta >= 90) {
            console.log("Помилка: некоректне значення кута.");
            return 'failed';
        }
        c = a / Math.cos(toRadians(beta));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = 90 - beta;
    }
    else if (type1 === "opposite angle" && type2 === "leg") {
        alpha = value1;
        a = value2;
        if (alpha <= 0 || alpha >= 90) {
            console.log("Помилка: некоректне значення кута.");
            return 'failed';
        }
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        beta = 90 - alpha;
    }
    else if (type1 === "adjacent angle" && type2 === "leg") {
        beta = value1;
        a = value2;
        if (beta <= 0 || beta >= 90) {
            console.log("Помилка: некоректне значення кута.");
            return 'failed';
        }
        c = a / Math.cos(toRadians(beta));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = 90 - beta;
    }
    else if (type1 === "hypotenuse" && type2 === "opposite angle") {
        c = value1;
        alpha = value2;
        if (alpha <= 0 || alpha >= 90) {
            console.log("Помилка: некоректне значення кута.");
            return 'failed';
        }
        a = c * Math.sin(toRadians(alpha));
        b = c * Math.cos(toRadians(alpha));
        beta = 90 - alpha;
    }
    else if (type1 === "hypotenuse" && type2 === "adjacent angle") {
        c = value1;
        beta = value2;
        if (beta <= 0 || beta >= 90) {
            console.log("Помилка: некоректне значення кута.");
            return 'failed';
        }
        b = c * Math.cos(toRadians(beta));
        a = c * Math.sin(toRadians(beta));
        alpha = 90 - beta;
    }
    else {
        console.log("Помилка: недостатньо даних або неправильний тип аргументу.");
        return 'failed';
    }
    if (a < 0.0001 || b < 0.0001 || c < 0.0001) {
        console.log("Помилка: дуже маленькі значення.");
        return 'failed';
    }
    if (a > 1e6 || b > 1e6 || c > 1e6) {
        console.log("Помилка: дуже великі значення.");
        return 'failed';
    }
    console.log("Результати:");
    console.log("a = ".concat(a.toFixed(2)));
    console.log("b = ".concat(b.toFixed(2)));
    console.log("c = ".concat(c.toFixed(2)));
    console.log("alpha = ".concat(alpha.toFixed(2), "\u00B0"));
    console.log("beta = ".concat(beta.toFixed(2), "\u00B0"));
    return 'success';
}
