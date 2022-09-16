export const engAndNumRegexChecker = (_value) => {
  const engAndNumRegex = /^[a-zA-Z0-9]*$/; //영어랑 숫자만 허용
  return engAndNumRegex.test(_value);
};
