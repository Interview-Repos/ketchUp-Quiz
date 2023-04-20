module.exports = (data, query) => {
  if(Object.keys(query).length === 1) {
    let tempArr
    if(Object.keys(query)[0].indexOf('.') !== -1) {
      tempArr = splitDotText(Object.keys(query)[0])
      return data.filter((d) => d[tempArr[0]][tempArr[1]] === Object.values(query)[0])
    } else {
      return data.filter((d) => d[Object.keys(query)[0]] === Object.values(query)[0])
    }    
  } else if (Object.keys(query).length === 2) {
    tempArr = splitDotText(Object.keys(query)[0])
    return data.filter((d) => d[tempArr[0]][tempArr[1]] === Object.values(query)[0] && d[Object.keys(query)[1]] === Object.values(query)[1])
  } else {
    return data
  }
}

splitDotText = (txt) => {
  return [txt.substring(0, txt.indexOf(".")), txt.split('.').pop()]
}