// select all html id
const selectCategory = document.getElementById("select-category");
const leftInputBox = document.getElementById("input-box-1");
const leftSelect = document.getElementById("select-input-1");
const rightInputBox = document.getElementById("input-box-2");
const rightSelect = document.getElementById("select-input-2");
const formulaText = document.getElementById("formula-text");

// window.onload function
window.onload = function () {
  mainFun();
};

// global converter object
const converter = {
  area: {
    name: "Area",
    units: {
      squareKM: "Square Kilometer",
      squareMetre: "Square Metre",
      squareMile: "Square Mile",
      squareFoot: "Square Foot",
    },
    variants: {
      // One
      "squareKM:squareMetre": {
        formula: "multiply the area value by 1e+6",
        calculation(n) {
          return n * new Number("1e+6");
        },
      },
      "squareKM:squareMile": {
        formula: "divide the area value by 2.59",
        calculation(n) {
          return n / new Number("2.59");
        },
      },
      "squareKM:squareFoot": {
        formula:
          "for an approximate result, multiply the area value by 1.076e+7",
        calculation(n) {
          return n * new Number("1.076e+7");
        },
      },
      // two
      "squareMetre:squareKM": {
        formula: "divide the area value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "squareMetre:squareMile": {
        formula: "divide the area value by 2.59e+6",
        calculation(n) {
          return n / new Number("2.59e+6");
        },
      },
      "squareMetre:squareFoot": {
        formula: "multiply the area value by 10.764",
        calculation(n) {
          return n * new Number("10.764");
        },
      },
      // three
      "squareMile:squareKM": {
        formula: "multiply the area value by 2.59",
        calculation(n) {
          return n * new Number("2.59");
        },
      },
      "squareMile:squareMetre": {
        formula: "multiply the area value by 2.59e+6",
        calculation(n) {
          return n * new Number("2.59e+6");
        },
      },
      "squareMile:squareFoot": {
        formula:
          "for an approximate result, multiply the area value by 2.788e+7",
        calculation(n) {
          return n * new Number("2.788e+7");
        },
      },

      // four
      "squareFoot:squareKM": {
        formula: "for an approximate result, divide the area value by 1.076e+7",
        calculation(n) {
          return n / new Number("1.076e+7");
        },
      },
      "squareFoot:squareMetre": {
        formula: "divide the area value by 10.764",
        calculation(n) {
          return n / new Number("10.764");
        },
      },
      "squareFoot:squareMile": {
        formula: "for an approximate result, divide the area value by 2.788e+7",
        calculation(n) {
          return n / new Number("2.788e+7");
        },
      },
    },
  },
  mass: {
    name: "Mass",
    units: {
      tonne: "Tonne",
      kilogram: "Kilogram",
      gram: "Gram",
      milligram: "Milligram",
    },
    variants: {
      // one
      "tonne:kilogram": {
        formula: "multiply the mass value by 1000",
        calculation(n) {
          return n * new Number("1000");
        },
      },
      "tonne:gram": {
        formula: "multiply the mass value by 1e+6",
        calculation(n) {
          return n * new Number("1e+6");
        },
      },
      "tonne:milligram": {
        formula: "multiply the mass value by 1e+9",
        calculation(n) {
          return n * new Number("1e+9");
        },
      },

      // two
      "kilogram:tonne": {
        formula: "divide the mass value by 1000",
        calculation(n) {
          return n / new Number("1000");
        },
      },
      "kilogram:gram": {
        formula: "multiply the mass value by 1000",
        calculation(n) {
          return n * new Number("1000");
        },
      },
      "kilogram:milligram": {
        formula: "multiply the mass value by 1e+6",
        calculation(n) {
          return n * new Number("1e+6");
        },
      },

      // three
      "gram:tonne": {
        formula: "divide the mass value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "gram:kilogram": {
        formula: "divide the mass value by 1000",
        calculation(n) {
          return n / new Number("1000");
        },
      },
      "gram:milligram": {
        formula: "multiply the mass value by 1000",
        calculation(n) {
          return n * new Number("1000");
        },
      },

      // four
      "milligram:tonne": {
        formula: "divide the mass value by 1e+9",
        calculation(n) {
          return n / new Number("1e+9");
        },
      },
      "milligram:kilogram": {
        formula: "divide the mass value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "milligram:gram": {
        formula: "divide the mass value by 1000",
        calculation(n) {
          return n / new Number("1000");
        },
      },
    },
  },
  length: {
    name: "Length",
    units: {
      kilometer: "Kilometer",
      metre: "Metre",
      centimeter: "Centimeter",
      millimeter: "Millimeter",
    },
    variants: {
      // one
      "kilometer:metre": {
        formula: "multiply the length value by 1000",
        calculation(n) {
          return n * new Number("1000");
        },
      },
      "kilometer:centimeter": {
        formula: "multiply the length value by 100000",
        calculation(n) {
          return n * new Number("100000");
        },
      },
      "kilometer:millimeter": {
        formula: "multiply the length value by 1e+6",
        calculation(n) {
          return n * new Number("1e+6");
        },
      },

      // two
      "metre:kilometer": {
        formula: "multiply the length value by 1000",
        calculation(n) {
          return n * new Number("1000");
        },
      },
      "metre:centimeter": {
        formula: "multiply the length value by 100",
        calculation(n) {
          return n * new Number("100");
        },
      },
      "metre:millimeter": {
        formula: "multiply the length value by 1000",
        calculation(n) {
          return n * new Number("1000");
        },
      },

      // three
      "centimeter:kilometer": {
        formula: "divide the length value by 100000",
        calculation(n) {
          return n / new Number("100000");
        },
      },
      "centimeter:metre": {
        formula: "divide the length value by 100",
        calculation(n) {
          return n / new Number("100");
        },
      },
      "centimeter:millimeter": {
        formula: "multiply the length value by 10",
        calculation(n) {
          return n * new Number("10");
        },
      },

      // four
      "millimeter:kilometer": {
        formula: "divide the length value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "millimeter:metre": {
        formula: "divide the length value by 1000",
        calculation(n) {
          return n / new Number("1000");
        },
      },
      "millimeter:centimeter": {
        formula: "divide the length value by 10",
        calculation(n) {
          return n / new Number("10");
        },
      },
    },
  },
  volume: {
    name: "Volume",
    units: {
      liter: "Liter",
      milliliter: "Milliliter",
      cubicFoot: "Cubic Foot",
      cubicInch: "Cubic Inch",
    },
    variants: {
      // one
      "liter:milliliter": {
        formula: "multiply the volume value by 1000",
        calculation(n) {
          return n * new Number("1000");
        },
      },
      "liter:cubicFoot": {
        formula: "for an approximate result, divide the volume value by 28.317",
        calculation(n) {
          return n / new Number("28.317");
        },
      },
      "liter:cubicInch": {
        formula:
          "for an approximate result, multiply the volume value by 61.024",
        calculation(n) {
          return n * new Number("61.024");
        },
      },

      // two
      "milliliter:liter": {
        formula: "divide the volume value by 1000",
        calculation(n) {
          return n / new Number("1000");
        },
      },
      "milliliter:cubicFoot": {
        formula: "for an approximate result, divide the volume value by 28320",
        calculation(n) {
          return n / new Number("28320");
        },
      },
      "milliliter:cubicInch": {
        formula: "divide the volume value by 16.387",
        calculation(n) {
          return n / new Number("16.387");
        },
      },

      // three
      "cubicFoot:liter": {
        formula:
          "for an approximate result, multiply the volume value by 28.317",
        calculation(n) {
          return n * new Number("28.317");
        },
      },
      "cubicFoot:milliliter": {
        formula:
          "for an approximate result, multiply the volume value by 28320",
        calculation(n) {
          return n * new Number("28320");
        },
      },
      "cubicFoot:cubicInch": {
        formula: "multiply the volume value by 1728",
        calculation(n) {
          return n * new Number("1728");
        },
      },

      // four
      "cubicInch:liter": {
        formula: "for an approximate result, divide the volume value by 61.024",
        calculation(n) {
          return n / new Number("61.024");
        },
      },
      "cubicInch:milliliter": {
        formula: "multiply the volume value by 16.387",
        calculation(n) {
          return n * new Number("16.387");
        },
      },
      "cubicInch:cubicFoot": {
        formula: "divide the volume value by 1728",
        calculation(n) {
          return n / new Number("1728");
        },
      },
    },
  },
  time: {
    name: "Time",
    units: {
      millisecond: "Millisecond",
      second: "Second",
      minute: "Minute",
      hour: "Hour",
      day: "Day",
      week: "Week",
      month: "Month",
    },
    variants: {
      // one
      "millisecond:second": {
        formula: "divide the time value by 1000",
        calculation(n) {
          return n / new Number("1000");
        },
      },
      "millisecond:minute": {
        formula: "divide the time value by 60000",
        calculation(n) {
          return n / new Number("60000");
        },
      },
      "millisecond:hour": {
        formula: "divide the time value by 3.6e+6",
        calculation(n) {
          return n / new Number("3.6e+6");
        },
      },
      "millisecond:day": {
        formula: "divide the time value by 8.64e+7",
        calculation(n) {
          return n / new Number("8.64e+7");
        },
      },
      "millisecond:week": {
        formula: "divide the time value by 6.048e+8",
        calculation(n) {
          return n / new Number("6.048e+8");
        },
      },
      "millisecond:month": {
        formula: "divide the time value by 2.628e+9",
        calculation(n) {
          return n / new Number("2.628e+9");
        },
      },

      // two
      "second:millisecond": {
        formula: "multiply the time value by 1000",
        calculation(n) {
          return n * new Number("1000");
        },
      },
      "second:minute": {
        formula: "divide the time value by 60",
        calculation(n) {
          return n / new Number("60");
        },
      },
      "second:hour": {
        formula: "divide the time value by 3600",
        calculation(n) {
          return n / new Number("3600");
        },
      },
      "second:day": {
        formula: "divide the time value by 86400",
        calculation(n) {
          return n / new Number("86400");
        },
      },
      "second:week": {
        formula: "divide the time value by 604800",
        calculation(n) {
          return n / new Number("604800");
        },
      },
      "second:month": {
        formula: "divide the time value by 2.628e+6",
        calculation(n) {
          return n / new Number("2.628e+6");
        },
      },

      // three
      "minute:millisecond": {
        formula: "multiply the time value by 60000",
        calculation(n) {
          return n * new Number("60000");
        },
      },
      "minute:second": {
        formula: "multiply the time value by 60",
        calculation(n) {
          return n * new Number("60");
        },
      },
      "minute:hour": {
        formula: "divide the time value by 60",
        calculation(n) {
          return n / new Number("60");
        },
      },
      "minute:day": {
        formula: "divide the time value by 1440",
        calculation(n) {
          return n / new Number("1440");
        },
      },
      "minute:week": {
        formula: "divide the time value by 10080",
        calculation(n) {
          return n / new Number("10080");
        },
      },
      "minute:month": {
        formula: "for an approximate result, divide the time value by 43800",
        calculation(n) {
          return n / new Number("43800");
        },
      },

      // four
      "hour:millisecond": {
        formula: "multiply the time value by 3.6e+6",
        calculation(n) {
          return n * new Number("3.6e+6");
        },
      },
      "hour:second": {
        formula: "multiply the time value by 3600",
        calculation(n) {
          return n * new Number("3600");
        },
      },
      "hour:minute": {
        formula: "multiply the time value by 60",
        calculation(n) {
          return n * new Number("60");
        },
      },
      "hour:day": {
        formula: "divide the time value by 24",
        calculation(n) {
          return n / new Number("24");
        },
      },
      "hour:week": {
        formula: "divide the time value by 168",
        calculation(n) {
          return n / new Number("168");
        },
      },
      "hour:month": {
        formula: "for an approximate result, divide the time value by 730",
        calculation(n) {
          return n / new Number("730");
        },
      },

      // five
      "day:millisecond": {
        formula: "multiply the time value by 8.64e+7",
        calculation(n) {
          return n * new Number("8.64e+7");
        },
      },
      "day:second": {
        formula: "multiply the time value by 86400",
        calculation(n) {
          return n * new Number("86400");
        },
      },
      "day:minute": {
        formula: "multiply the time value by 1440",
        calculation(n) {
          return n * new Number("1440");
        },
      },
      "day:hour": {
        formula: "multiply the time value by 24",
        calculation(n) {
          return n * new Number("24");
        },
      },
      "day:week": {
        formula: "divide the time value by 7",
        calculation(n) {
          return n / new Number("7");
        },
      },
      "day:month": {
        formula: "for an approximate result, divide the time value by 30.417",
        calculation(n) {
          return n / new Number("30.417");
        },
      },

      // Six
      "week:millisecond": {
        formula: "multiply the time value by 6.048e+8",
        calculation(n) {
          return n * new Number("6.048e+8");
        },
      },
      "week:second": {
        formula: "multiply the time value by 604800",
        calculation(n) {
          return n * new Number("604800");
        },
      },
      "week:minute": {
        formula: "multiply the time value by 10080",
        calculation(n) {
          return n * new Number("10080");
        },
      },
      "week:hour": {
        formula: "multiply the time value by 168",
        calculation(n) {
          return n * new Number("168");
        },
      },
      "week:day": {
        formula: "multiply the time value by 7",
        calculation(n) {
          return n * new Number("7");
        },
      },
      "week:month": {
        formula: "for an approximate result, divide the time value by 4.345",
        calculation(n) {
          return n / new Number("4.345");
        },
      },

      // seven
      "month:millisecond": {
        formula: "multiply the time value by 2.628e+9",
        calculation(n) {
          return n * new Number("2.628e+9");
        },
      },
      "month:second": {
        formula: "multiply the time value by 2.628e+6",
        calculation(n) {
          return n * new Number("2.628e+6");
        },
      },
      "month:minute": {
        formula: "for an approximate result, multiply the time value by 43800",
        calculation(n) {
          return n * new Number("43800");
        },
      },
      "month:hour": {
        formula: "for an approximate result, multiply the time value by 730",
        calculation(n) {
          return n * new Number("730");
        },
      },
      "month:day": {
        formula: "for an approximate result, multiply the time value by 30.417",
        calculation(n) {
          return n * new Number("30.417");
        },
      },
      "month:Week": {
        formula: "for an approximate result, multiply the time value by 4.345",
        calculation(n) {
          return n * new Number("4.345");
        },
      },
    },
  },
  temperature: {
    name: "Temperature",
    units: {
      celsius: "Celsius",
      fahrenheit: "Fahrenheit",
      kelvin: "Kelvin",
    },
    variants: {
      // one
      "celsius:fahrenheit": {
        formula: "Celsius to Fahrenheit formula is n * (9 / 5) + 32",
        calculation(n) {
          return n * (9 / 5) + 32;
        },
      },
      "celsius:kelvin": {
        formula: "Celsius to Kelvin formula is n + 273.15",
        calculation(n) {
          return n + 273.15;
        },
      },

      // two
      "fahrenheit:celsius": {
        formula: "Fahrenheit to Celsius formula is ((n - 32) * 5) / 9",
        calculation(n) {
          return ((n - 32) * 5) / 9;
        },
      },
      "fahrenheit:kelvin": {
        formula: "(Fahrenheit to Kelvin formula is (n - 32) / 1.8 + 273.15",
        calculation(n) {
          return (n - 32) / 1.8 + 273.15;
        },
      },

      // three
      "kelvin:celsius": {
        formula: "Kelvin to Celsius formula is n - 273.15",
        calculation(n) {
          return n - 273.15;
        },
      },
      "kelvin:fahrenheit": {
        formula: "Kelvin to Fahrenheit formula is (n - 273.15) * 1.8 + 32",
        calculation(n) {
          return (n - 273.15) * 1.8 + 32;
        },
      },
    },
  },
};

// global variable
let lastLeftSelectValue = "";
let lastRightSelectValue = "";

// mainFun function
function mainFun() {
  const converterKeys = Object.keys(converter).sort();
  removeAllChild(selectCategory);
  converterKeys.forEach(function (item) {
    addOption(selectCategory, { value: item, text: converter[item].name });
  });

  selectCategory.addEventListener("change", function () {
    mainHandlerFunction();
  });

  // mainHandlerFunction function call
  mainHandlerFunction(leftSelect, rightSelect);

  // calculationValue function
  calculationValue();

  // leftSelect
  leftSelect.addEventListener("change", leftSelectFunction);

  // rightSelect
  rightSelect.addEventListener("change", rightSelectFunction);

  // leftInputBox event
  leftInputBox.addEventListener("keyup", function (event) {
    if (isNaN(event.target.value)) {
      alert("Please Type Only Number!");
    } else if (event.target.value) {
      const converterName = selectCategory.value;
      const variants = converter[converterName].variants;
      const variantsKey = `${leftSelect.value}:${rightSelect.value}`;
      const variant = variants[variantsKey];
      leftInputBox.value = Number(event.target.value);
      rightInputBox.value = variant
        .calculation(Number(event.target.value))
        .toPrecision(4);
    } else {
      rightInputBox.value = "";
    }
  });

  // leftInputBox event
  rightInputBox.addEventListener("keyup", function (event) {
    if (isNaN(event.target.value)) {
      alert("Please Type Only Number!");
    } else if (event.target.value) {
      const converterName = selectCategory.value;
      const variants = converter[converterName].variants;
      const variantsKey = `${leftSelect.value}:${rightSelect.value}`;
      const variant = variants[variantsKey];
      rightInputBox.value = Number(event.target.value);
      leftInputBox.value = variant
        .calculation(Number(event.target.value))
        .toPrecision(4);
    } else {
      leftInputBox.value = "";
    }
  });
}

// leftSelectFunction function
function leftSelectFunction(event) {
  if (event.target.value === rightSelect.value) {
    const options = rightSelect.getElementsByTagName("option");
    for (let i = 0; i < options.length; i++) {
      if (lastLeftSelectValue === options[i].value) {
        options[i].selected = "selected";
        lastRightSelectValue = options[i].value;
        break;
      }
    }
  }
  lastLeftSelectValue = event.target.value;
  calculationValue();
}

// rightSelectFunction function
function rightSelectFunction(event) {
  if (event.target.value === leftSelect.value) {
    const options = leftSelect.getElementsByTagName("option");
    for (let i = 0; options.length; i++) {
      if (lastRightSelectValue === options[i].value) {
        options[i].selected = "selected";
        lastRightSelectValue = options[i].value;
        break;
      }
    }
  }
  lastRightSelectValue = event.target.value;
  calculationValue();
}
// addOption function select
function addOption(parent, option) {
  const opt = document.createElement("option");
  opt.setAttribute("value", option.value);
  opt.innerText = option.text;
  parent.appendChild(opt);
}

// mainHandlerFunction function input select
function mainHandlerFunction() {
  const converterName = selectCategory.value;
  const units = converter[converterName].units;
  options = Object.keys(units);

  // handle left select
  removeAllChild(leftSelect);
  options.forEach(function (item) {
    addOption(leftSelect, { value: item, text: units[item] });
  });
  lastLeftSelectValue = leftSelect.value;

  // handle right select
  removeAllChild(rightSelect);
  options.forEach(function (item) {
    addOption(rightSelect, { value: item, text: units[item] });
  });
  rightSelect.getElementsByTagName("option")[1].selected = "selected";
  lastRightSelectValue = rightSelect.value;
}

// removeAllChild function
function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}

// calculationValue function
function calculationValue() {
  const converterName = selectCategory.value;
  const variants = converter[converterName].variants;
  const variantsKey = `${leftSelect.value}:${rightSelect.value}`;
  const variant = variants[variantsKey];
  formulaText.innerText = variant.formula;
  leftInputBox.value = 1;
  rightInputBox.value = variant.calculation(1);
}
