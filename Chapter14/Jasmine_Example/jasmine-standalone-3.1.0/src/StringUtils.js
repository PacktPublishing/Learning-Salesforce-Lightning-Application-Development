function StringUtils() {};

StringUtils.prototype.concatenate = function(str1,str2) {
  return str1.concat(str2);
};

StringUtils.prototype.camelcase = function(string) {
  string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function(match) {
      return match.charAt(match.length-1).toUpperCase();
  });
  return string.charAt(0).toLowerCase() + string.substring(1);
};

StringUtils.prototype.capitalizeFirstLetter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

