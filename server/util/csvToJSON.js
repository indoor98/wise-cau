const csvToJSON = (csv_string) => {

    // 1. 문자열을 줄바꿈으로 구분 => 배열에 저장
    const rows = csv_string.split("\r\n");
    
    // 줄바꿈을 \n으로만 구분해야하는 경우, 아래 코드 사용
    // const rows = csv_string.split("\n");
  
  
    // 2. 빈 배열 생성: CSV의 각 행을 담을 JSON 객체임
    const jsonArray = [];
  
  
    // 3. 제목 행 추출 후, 콤마로 구분 => 배열에 저장
    const header = rows[0].split(",");
  
  
    // 4. 내용 행 전체를 객체로 만들어, jsonArray에 담기
    for(let i = 1; i < rows.length; i++){
  
        // 빈 객체 생성: 각 내용 행을 객체로 만들어 담아둘 객체임
        let obj = {};
  
        // 각 내용 행을 콤마로 구분
        let row = rows[i].split(",");
  
        // 각 내용행을 {제목1:내용1, 제목2:내용2, ...} 형태의 객체로 생성
        for(let j=0; j < header.length; j++){
            obj[header[j]] = row[j];
        }
  
        // 각 내용 행의 객체를 jsonArray배열에 담기
        jsonArray.push(obj);
  
    }
    
    // 5. 완성된 JSON 객체 배열 반환
    return jsonArray;
  
    // 문자열 형태의 JSON으로 반환할 경우, 아래 코드 사용
    // return JSON.stringify(jsonArray);
  }

  module.exports = csvToJSON;