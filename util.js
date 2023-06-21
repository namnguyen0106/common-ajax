const BASE_URL = "http://localhost:8080/"
// Hàm util để gọi API
function callApi(url, method, data, successCallback) {
    $.ajax({
        url: url,
        type: method,
        data: data,
        success: successCallback,
        error: function (xhr, status, error) {
            if (xhr.status === 401) {
                handleUnauthorizedError();
            } else {
                // Xử lý lỗi khác nếu cần thiết
            }
        }
    });
}

// Hàm util để xử lý lỗi 401 và chuyển hướng đến trang đăng nhập
function handleUnauthorizedError() {
    window.location.href = 'login.html';
}
