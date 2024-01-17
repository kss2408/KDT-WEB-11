function showDiv(divId) {
    // 모든 paymentDiv 숨기기
    var allPaymentDivs = document.querySelectorAll('.paymentDiv');
    allPaymentDivs.forEach(function (div) {
        div.classList.remove('show');
    });

    // 선택된 라디오 버튼에 해당하는 paymentDiv 보이기
    var selectedDiv = document.getElementById(divId);
    if (selectedDiv) {
        selectedDiv.classList.add('show');
    }
}
