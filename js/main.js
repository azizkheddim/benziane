// وظائف عامة للموقع
document.addEventListener('DOMContentLoaded', function() {
    // عرض تاريخ اليوم
    updateCurrentDate();
    
    // تهيئة الصور
    initImages();
});

function updateCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('ar-EG', options);
    document.getElementById('current-date').textContent = today;
}

function initImages() {
    // إضافة تأثيرات للصور
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.transition = 'transform 0.3s';
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

// دعم واتساب
function contactWhatsApp() {
    const phone = "213123456789"; // استبدل بالرقم الفعلي
    const message = "مرحباً، أريد الاستفسار عن...";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}
