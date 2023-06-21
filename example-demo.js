// Gọi API và xử lý kết quả
function example() {
    callApi(BASE_URL + "example", 'GET', null, function (response) {
        // Xử lý kết quả thành công từ API
        console.log("Say hello!")
    });
}