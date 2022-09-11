function comma(_unCommaedNumber) {
  const deleteNotNumber = _unCommaedNumber.replace(/\D/g, ""); //숫자 아닌 문자 입력방지
  const unCommaAll = deleteNotNumber.replace(/\,/g, ""); //콤마 중복 방지를 위한 모든 콤마 제거
  const result = unCommaAll.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 콤마 처리된 문자열 리턴
  return result;
}

function unComma(_commaedNumber) {
  const result = _commaedNumber.replace(/\,/g, "");
  return result;
}

export { comma, unComma };
