module.exports = function check(str, bracketsConfig) {

  let arr3 = []
  let n = 1;
  let z = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
      arr3.push(str[i])
      z += 1;
    } else if (str[i] == '|' && n) {
      n = 0
      arr3.push(str[i])
      z += 1;
    }

    else {
      if (str[i] == ')' && arr3[z] == "(") {

        z -= 1;
        arr3.pop()

      } else if (str[i] == ']' && arr3[z] == "[") {
        z -= 1;
        arr3.pop()
      } else if (str[i] == '}' && arr3[z] == "{") {
        z -= 1;
        arr3.pop()
      }

      else if (str[i] == '|' && arr3[z] == "|" && n == 0) {

        z -= 1;
        arr3.pop();
        n = 1
      }

    }
    if (str[i] >= '0' && str[i] <= '9') {
      if (str.length % 33 == 0) {
        return true;
      } else
        return false;
    }

  }

  if (arr3.length == 0 && (str.length % 2 == 0)) return true
  else return false
}
