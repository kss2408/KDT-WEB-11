// label에 색깔 입히는 js

function showDiv(divId) {
    // 모든 paymentDiv 숨기기
    var allPaymentDivs = document.querySelectorAll('.hidden.show');
    allPaymentDivs.forEach(function (div) {
        div.classList.remove('show');
    });

    // 선택된 라디오 버튼에 해당하는 paymentDiv 보이기
    var selectedDiv = document.getElementById(divId);
    if (selectedDiv) {
        selectedDiv.classList.add('show');
    }
}

// 신용카드, 결제쪽
document.addEventListener('DOMContentLoaded', function () {
    var radioButtons = document.querySelectorAll('.type_radio input[type="radio"]');

    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('click', function () {
            // 모든 라벨에서 selected 클래스 제거
            document.querySelectorAll('.type_radio label').forEach(function (label) {
                label.classList.remove('selected');
            });

            // 선택된 라벨에 selected 클래스 추가
            var label = this.nextElementSibling; // 형제 노드인 라벨 선택
            if (label) {
                label.classList.add('selected');
            }

            // 자동이체가 선택되었을 때, 신용카드의 스타일 초기화
            if (this.id === 'autopayradio') {
                document.getElementById('creditcardradio').checked = false;
                document.getElementById('creditcardradio').nextElementSibling.classList.remove('selected');
            }

            // 신용카드가 선택되었을 때, 자동이체의 스타일 초기화
            if (this.id === 'creditcardradio') {
                document.getElementById('autopayradio').checked = false;
                document.getElementById('autopayradio').nextElementSibling.classList.remove('selected');
            }
        });
    });

    // 페이지 로드시 초기 스타일 적용
    document.querySelectorAll('.type_radio input[type="radio"]:checked').forEach(function (radioButton) {
        var label = radioButton.nextElementSibling; // 형제 노드인 라벨 선택
        if (label) {
            label.classList.add('selected');
        }
    });
});

// 일시후원 구현 힘들어서 보안한점.
document.addEventListener('DOMContentLoaded', function () {
    var temporaryDonateRadio = document.getElementById('temporary_donate');

    temporaryDonateRadio.addEventListener('click', function () {
        if (temporaryDonateRadio.checked) {
            // 일시후원이 선택되었을 때 처리
            alert('현재 지원하지 않는 서비스입니다.');
            temporaryDonateRadio.checked = false; // 라디오 버튼 선택 취소
        }
    });
});
