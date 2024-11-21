// Wait for the DOM to be fully loaded // انتظار تحميل محتوى الصفحة بالكامل قبل تنفيذ الكود

document.addEventListener('DOMContentLoaded', function () {

    const colorBox = document.getElementById('color-box');         // تحديد العنصر الذي يمثل الصندوق باستخدام معرفه

    const changeColorBtn = document.getElementById('change-color-btn');     // تحديد الزر الذي يغير لون الصندوق باستخدام معرفه


    // Function to generate a random color  // وظيفة لإنشاء لون عشوائي

    function getRandomColor() {

        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);   // إنشاء كود لون عشوائي باستخدام قيم سداسية عشرية

        return randomColor;  // إرجاع اللون العشوائي
    }

    // Event listener for the button click   // إضافة حدث عند النقر على الزر

    changeColorBtn.addEventListener('click', function () {
      
        colorBox.style.backgroundColor = getRandomColor();        // تغيير لون خلفية الصندوق إلى اللون العشوائي الجديد

    });
});
