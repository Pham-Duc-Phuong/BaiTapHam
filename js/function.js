// Bài 1
var AreaSl = document.getElementById("AreaSelect")
var TypeSl = document.getElementById("TypeSelect")
function CalcGradeArea(Area) {
    if (Area === "A") return 2;
    if (Area === "B") return 1;
    if (Area === "C") return 0.5;
    return 0;
};
function CalcGradeType(Type) {
    if (Type === "1") return 2.5;
    if (Type === "2") return 1.5;
    if (Type === "3") return 1;
    return 0;
};
function calcTotal() {
    var Grade1 = +document.getElementById("SubjectGrade1").value;
    var Grade2 = +document.getElementById("SubjectGrade2").value;
    var Grade3 = +document.getElementById("SubjectGrade3").value;
    var benchmark = +document.getElementById("Levelgrade").value;
    var AreaValue = document.getElementById("AreaSelect").value;
    var TypeValue = document.getElementById("TypeSelect").value;
    var notification = document.getElementById("notification");
    var Gradearea = CalcGradeArea(AreaValue);
    var Gradetype = CalcGradeType(TypeValue);
    var total = Grade1 + Grade2 + Grade3 + Gradearea + Gradetype;
    if (total >= benchmark && Grade1 !== 0 && Grade2 !== 0 && Grade3 !== 0) {
        notification.innerHTML = "Thông báo: " + "Chúc Mừng Bạn Đã Đậu";
    } else {
        notification.innerHTML = "Thông báo: " + "Chúc Mừng Bạn Đã Tạch";
    }
    document.getElementById("result").innerHTML = "Tổng điểm của bạn: " + total
};
document.getElementById("Check").onclick = calcTotal;
// Bài 2 Bài 2 Bài 2 Bài 2 Bài 2 Bài 2 
function calcTotal1() {
    var name2 = document.getElementById("name2").value;
    var Kw = +document.getElementById("Kw").value;
    var total2 = 0;
    if (Kw <= 50) {
        total2 = Kw * 500;
    } else if (Kw <= 100) {
        total2 = 50 * 500 + (Kw - 50) * 650;
    } else if (Kw <= 200) {
        total2 = 50 * 500 + 50 * 650 + (Kw - 100) * 850;
    } else if (Kw <= 350) {
        total2 = 50 * 500 + 50 * 650 + 100 * 850 + (Kw - 200) * 1100;
    } else {
        total2 = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (Kw - 350) * 1300;
    }
    document.getElementById("notification_1").innerHTML = "Tổng tiền của " + name2 + " : " + total2 + " Đồng";
};
document.getElementById("cost_Kw").onclick = calcTotal1;
//  Bài 3 Bài 3 Bài 3 Bài 3 Bài 3 Bài 3 Bài 3 
function calcTotal2() {
    var name3 = document.getElementById("name3").value;
    var wage = +document.getElementById("wage").value;
    var people = +document.getElementById("people").value;
    var total3_2 = 0;
    var total3 = wage * 12 - 4 + people * 1.6;
    if (total3 <= 60) {
        total3_2 = total3 * 0.05;
    } else if (total3 <= 120) {
        total3_2 = 60 * 0.05 + (total3 - 60) * 0.1;
    } else if (total3 <= 210) {
        total3_2 = 60 * 0.05 + (60) * 0.1 + (total3 - 120) * 0.15;
    } else if (total3 <= 384) {
        total3_2 = 60 * 0.05 + (60) * 0.1 + (90) * 0.15 + (total3 - 210) * 0.2;
    } else if (total3 <= 624) {
        total3_2 = 60 * 0.05 + (60) * 0.1 + (90) * 0.15 + (174) * 0.2 + (total3 - 384) * 0.25;
    } else if (total3 <= 960) {
        total3_2 = 60 * 0.05 + (60) * 0.1 + (90) * 0.15 + (174) * 0.2 + (240) * 0.25 + (total3 - 624) * 0.3;
    } else {
        total3_2 = 60 * 0.05 + (60) * 0.1 + (90) * 0.15 + (174) * 0.2 + (240) * 0.25 + (336) * 0.3 + (total3 - 960) * 0.35;
    }
    document.getElementById("notification_2").innerHTML = "Thuế thu nhập cá nhân của " + name3 + " : " + total3_2 + " triệu Đồng";
};
document.getElementById("cost_wage").onclick = calcTotal2;
// Bài 4 Bài 4 Bài 4 Bài 4 Bài 4 Bài 4 Bài 4 

document.getElementById("customer").onclick = function calctypecustomer() {
    var customerValue = document.getElementById("customer").value;
    if (customerValue === "A") {
        document.getElementById("SDKN").classList.remove("showdisplay");
    }
    else if (customerValue === "B") {
        document.getElementById("SDKN").classList.add("showdisplay");
    }
}
function calcTotal3() {
    var SDKN = +document.getElementById("SDKN").value;
    var SKCC = +document.getElementById("SKCC").value;
    var IDcustomer = document.getElementById("ID-customer").value;
    var customerValue = document.getElementById("customer").value;
    var total4 = 0;
    if (customerValue === "A") {
        total4 = 4.5 + 20.5 + SKCC * 7.5
    } else if (customerValue === "B" && SDKN <= 10) {
        total4 = 4.5 + 75 + SKCC * 50;
    } else if (customerValue === "B" && SDKN >= 10) {
        total4 = 4.5 + 75 * 10 + (SDKN - 10) * 5 + + SKCC * 50
    }
    else {
        alert ("!!!!Vui lòng chọn loại khách khàng!!!!")
        return
    }
    document.getElementById("notification_3").innerHTML = "Số tiền của " + IDcustomer + " : " + total4;
}
document.getElementById("cost_tele").onclick = calcTotal3;